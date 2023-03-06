---
description:  Reading Coronavirus Live Data using Wio Terminal
title:  Reading Coronavirus Live Data using Wio Terminal
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Reading-COVID19
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# Reading Coronavirus COVID-19 Live Data using Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/COVID-19.gif" /></div>

This wiki is a modification of [Reading Github Repository Stats from Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Reading-Github/), where it is modified to access to [Coronavirus COVID19 API](https://covid19api.com/) and parse the data and display Live COVID-19 data on the LCD screen.

## Part List

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [Wio Terminal Battery Chassis](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html)

## Features

- Connects to a https server

- Obtain COVID-19 live data API

- Pressing button to refresh data

## Arduino libraries needed

- Install the LCD screen Library `Seeed_Arduino_LCD`, please visit [Wio Terminal LCD](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/) for more information.

- Visit the [ArduinoJson](https://github.com/bblanchon/ArduinoJson) repositories and download the entire repo to your local drive.

  - Now, the ArduinoJson library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `ArduinoJson` file that you've have just downloaded.

- For more information about Https connection, please visit [**here**](https://wiki.seeedstudio.com/Wio-Terminal-Wi-Fi/#wi-fi-https-connection-example-code).

## Arduino Instructions

- Download the [`Free_Fonts.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Free_Fonts.h) header file so that can use abbreviations for the free fonts included in the LCD library. Please make sure to put this header file in the same location as the Arduino Sketch.

- Download the Complete code [here](http://files.seeedstudio.com/wiki/Wio-Terminal/res/covid.zip) or copy the following.

- Upload the code.

## Complete Code

**Note:** Change the `ssid` and `password` to your Network Wi-Fi.

```cpp
#include "rpcWiFi.h"
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include"Free_Fonts.h"
#include"TFT_eSPI.h"
TFT_eSPI tft;

const char* ssid     = "YourNetworkName";
const char* password = "yourNetworkPassword";

const char*  server = "api.covid19api.com";  // Server URL

const char* test_root_ca = \
                            "-----BEGIN CERTIFICATE-----\n"
                            "MIIEkjCCA3qgAwIBAgIQCgFBQgAAAVOFc2oLheynCDANBgkqhkiG9w0BAQsFADA/\n"
                            "MSQwIgYDVQQKExtEaWdpdGFsIFNpZ25hdHVyZSBUcnVzdCBDby4xFzAVBgNVBAMT\n"
                            "DkRTVCBSb290IENBIFgzMB4XDTE2MDMxNzE2NDA0NloXDTIxMDMxNzE2NDA0Nlow\n"
                            "SjELMAkGA1UEBhMCVVMxFjAUBgNVBAoTDUxldCdzIEVuY3J5cHQxIzAhBgNVBAMT\n"
                            "GkxldCdzIEVuY3J5cHQgQXV0aG9yaXR5IFgzMIIBIjANBgkqhkiG9w0BAQEFAAOC\n"
                            "AQ8AMIIBCgKCAQEAnNMM8FrlLke3cl03g7NoYzDq1zUmGSXhvb418XCSL7e4S0EF\n"
                            "q6meNQhY7LEqxGiHC6PjdeTm86dicbp5gWAf15Gan/PQeGdxyGkOlZHP/uaZ6WA8\n"
                            "SMx+yk13EiSdRxta67nsHjcAHJyse6cF6s5K671B5TaYucv9bTyWaN8jKkKQDIZ0\n"
                            "Z8h/pZq4UmEUEz9l6YKHy9v6Dlb2honzhT+Xhq+w3Brvaw2VFn3EK6BlspkENnWA\n"
                            "a6xK8xuQSXgvopZPKiAlKQTGdMDQMc2PMTiVFrqoM7hD8bEfwzB/onkxEz0tNvjj\n"
                            "/PIzark5McWvxI0NHWQWM6r6hCm21AvA2H3DkwIDAQABo4IBfTCCAXkwEgYDVR0T\n"
                            "AQH/BAgwBgEB/wIBADAOBgNVHQ8BAf8EBAMCAYYwfwYIKwYBBQUHAQEEczBxMDIG\n"
                            "CCsGAQUFBzABhiZodHRwOi8vaXNyZy50cnVzdGlkLm9jc3AuaWRlbnRydXN0LmNv\n"
                            "bTA7BggrBgEFBQcwAoYvaHR0cDovL2FwcHMuaWRlbnRydXN0LmNvbS9yb290cy9k\n"
                            "c3Ryb290Y2F4My5wN2MwHwYDVR0jBBgwFoAUxKexpHsscfrb4UuQdf/EFWCFiRAw\n"
                            "VAYDVR0gBE0wSzAIBgZngQwBAgEwPwYLKwYBBAGC3xMBAQEwMDAuBggrBgEFBQcC\n"
                            "ARYiaHR0cDovL2Nwcy5yb290LXgxLmxldHNlbmNyeXB0Lm9yZzA8BgNVHR8ENTAz\n"
                            "MDGgL6AthitodHRwOi8vY3JsLmlkZW50cnVzdC5jb20vRFNUUk9PVENBWDNDUkwu\n"
                            "Y3JsMB0GA1UdDgQWBBSoSmpjBH3duubRObemRWXv86jsoTANBgkqhkiG9w0BAQsF\n"
                            "AAOCAQEA3TPXEfNjWDjdGBX7CVW+dla5cEilaUcne8IkCJLxWh9KEik3JHRRHGJo\n"
                            "uM2VcGfl96S8TihRzZvoroed6ti6WqEBmtzw3Wodatg+VyOeph4EYpr/1wXKtx8/\n"
                            "wApIvJSwtmVi4MFU5aMqrSDE6ea73Mj2tcMyo5jMd6jmeWUHK8so/joWUoHOUgwu\n"
                            "X4Po1QYz+3dszkDqMp4fklxBwXRsW10KXzPMTZ+sOPAveyxindmjkW8lGy+QsRlG\n"
                            "PfZ+G6Z6h7mjem0Y+iWlkYcV4PIWL1iwBi8saCbGS5jN2p8M+X+Q7UNKEkROb3N6\n"
                            "KOqkqm57TH2H3eDJAkSnh6/DNFu0Qg==\n"
                            "-----END CERTIFICATE-----\n";

// You can use x.509 client certificates if you want
//const char* test_client_key = "";   //to verify the client
//const char* test_client_cert = "";  //to verify the client

String data;

WiFiClientSecure client;

void setup() {
    //Initialize serial and wait for port to open:
    Serial.begin(115200);
    delay(100);

    pinMode(WIO_KEY_C, INPUT_PULLUP);

    Serial.print("Attempting to connect to SSID: ");
    Serial.println(ssid);
    WiFi.begin(ssid, password);

    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(TFT_BLACK);
    tft.setFreeFont(FMB12);
    tft.setCursor((320 - tft.textWidth("Connecting to Wi-Fi.."))/2, 120);
    tft.print("Connecting to Wi-Fi..");

    // attempt to connect to Wifi network:
    while (WiFi.status() != WL_CONNECTED) {
        Serial.print(".");
        // wait 1 second for re-trying
        delay(1000);
    }

    Serial.print("Connected to ");
    Serial.println(ssid);

    tft.fillScreen(TFT_BLACK);
    tft.setCursor((320 - tft.textWidth("Connected!"))/2, 120);
    tft.print("Connected!");

    getData();
}

int lastState = 1;
void loop()
{
    int currentState = digitalRead(WIO_KEY_C);
    if (currentState == 0) {
      if (currentState != lastState) {
        getData();
      }
      lastState = !lastState;
    }
}

void getData() {
    client.setCACert(test_root_ca);
  //client.setCertificate(test_client_key); // for client verification
  //client.setPrivateKey(test_client_cert); // for client verification

    tft.fillScreen(TFT_BLACK);
    tft.setTextColor(TFT_WHITE);
    tft.setCursor((320 - tft.textWidth("Conectting to Server.."))/2, 120);
    tft.print("Connecting to Server..");

    Serial.println("\nStarting connection to server...");
    if (!client.connect(server, 443)) {
        Serial.println("Connection failed!");
        tft.fillScreen(TFT_BLACK);
        tft.setCursor((320 - tft.textWidth("Connection failed!"))/2, 120);
        tft.print("Connection failed!");
    } else {
        Serial.println("Connected to server!");
        tft.fillScreen(TFT_BLACK);
        tft.setCursor((320 - tft.textWidth("Connected to Server!"))/2, 120);
        tft.print("Connected to Server!");

        // Make a HTTP request:
        client.println("GET https://api.covid19api.com/world/total HTTP/1.0");
        client.println("Host: api.covid19api.com");
        client.println("Connection: close");
        client.println();

        while (client.connected()) {
            String line = client.readStringUntil('\n');
            if (line == "\r") {
                Serial.println("headers received");
                break;
            }
        }

        while(client.available())
        {
          String line = client.readStringUntil('\r');
          data = line;
        }
        Serial.println(data);
        client.stop();
        Serial.println("closing connection");
    }

    //ArduinoJson to parse data, plesae check ArduinoJson for more info
    const size_t capacity = JSON_OBJECT_SIZE(3) + 50;
    DynamicJsonDocument doc(capacity);
    deserializeJson(doc, data);

    long TotalConfirmed = doc["TotalConfirmed"];
    long TotalDeaths = doc["TotalDeaths"];
    long TotalRecovered = doc["TotalRecovered"];

// -----------------LCD---------------------

    tft.fillScreen(tft.color565(24,15,60));
    tft.setFreeFont(FF17);
    tft.setTextColor(tft.color565(224,225,232));
    tft.drawString("COVID-19 Dashboard/Global",20,10);

    tft.fillRoundRect(10, 45, 300, 55, 5, tft.color565(40,40,86));
    tft.fillRoundRect(10, 105, 300, 55, 5, tft.color565(40,40,86));
    tft.fillRoundRect(10, 165, 300, 55, 5, tft.color565(40,40,86));

    tft.setFreeFont(FM9);
    tft.drawString("Total Confirmed", 75, 50);
    tft.drawString("Total Deaths",95, 110);
    tft.drawString("Total Recovered",75, 170);

    tft.setFreeFont(FMB12);
    tft.setTextColor(TFT_RED);
    tft.drawNumber(TotalConfirmed, 110, 75);
    tft.setTextColor(tft.color565(224,225,232));
    tft.drawNumber(TotalDeaths, 120, 135);
    tft.setTextColor(TFT_GREEN);
    tft.drawNumber(TotalRecovered, 110, 195);
}
```
