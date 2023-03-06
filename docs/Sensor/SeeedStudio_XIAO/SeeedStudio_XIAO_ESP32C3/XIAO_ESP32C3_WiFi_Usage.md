---
description: WiFi Usage on Seeed Studio XIAO ESP32C3
title: WiFi Usage on Seeed Studio XIAO ESP32C3
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO_ESP32C3_WiFi_Usage
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# WiFi Usage

Seeed Studio XIAO ESP32C3 supports WiFi connectivity with IEEE 802.11b/g/n. This wiki will introduce the basics of WiFi usage on this board.

> ⚠️ Please be careful when you try to use the board as a hotspot(access point). There may be a overheat problem and cause burns.

## Hardware set up

- **Step 1.** Connect the included **WiFi/ Bluetooth antenna** to the **IPEX connector** on the board

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-6.png" alt="pir" width={130} height="auto" /></div>

- **Step 2.** Connect XIAO ESP32C3 to your computer via a USB Type-C cable

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width={120} height="auto" /></div>

## Scan WiFi networks (Station Mode)

In this example, we are going to use XIAO ESP32C3 to scan available WiFi networks around it. Here the board will be configured in Station (STA) Mode.

- **Step 1.** Copy and paste the code below into Arduino IDE

```cpp
#include "WiFi.h"

void setup()
{
    Serial.begin(115200);

    // Set WiFi to station mode and disconnect from an AP if it was previously connected
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(100);

    Serial.println("Setup done");
}

void loop()
{
    Serial.println("scan start");

    // WiFi.scanNetworks will return the number of networks found
    int n = WiFi.scanNetworks();
    Serial.println("scan done");
    if (n == 0) {
        Serial.println("no networks found");
    } else {
        Serial.print(n);
        Serial.println(" networks found");
        for (int i = 0; i < n; ++i) {
            // Print SSID and RSSI for each network found
            Serial.print(i + 1);
            Serial.print(": ");
            Serial.print(WiFi.SSID(i));
            Serial.print(" (");
            Serial.print(WiFi.RSSI(i));
            Serial.print(")");
            Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN)?" ":"*");
            delay(10);
        }
    }
    Serial.println("");

    // Wait a bit before scanning again
    delay(5000);
}
```

**Step 2.** Upload the codes and open the Serial Monitor to start scanning for WiFi networks

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-1.jpg" alt="pir" width={500} height="auto" /></div>

## Connect to a WiFi network

In this example, we are going to use XIAO ESP32C3 to connect to a WiFI network.

- **Step 1.** Copy and paste the code below into Arduino IDE

```cpp
#include <WiFi.h>

const char* ssid     = "your-ssid";
const char* password = "your-password";   

void setup()
{
    Serial.begin(115200);
    delay(10);

    // We start by connecting to a WiFi network

    Serial.println();
    Serial.println();
    Serial.print("Connecting to ");
    Serial.println(ssid);

    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }

    Serial.println("");
    Serial.println("WiFi connected");
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());
}  
void loop()
{
  }
```

**Step 2.** Upload the codes and open the Serial Monitor to check that the board is connected to the WiFI network

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-2.jpg" alt="pir" width={500} height="auto" /></div>

## Use as an Access Point

In this example, we are going to use XIAO ESP32C3 as a WiFi access point where other devices can be connected to it. This is similar to WiFi hotspot feature on mobile phones.

- **Step 1.** Copy and paste the code below into Arduino IDE

```cpp
#include "WiFi.h"
void setup()
{
  Serial.begin(115200);
  WiFi.softAP("ESP_AP", "123456789");
}

void loop()
{
  Serial.print("Host Name:");
  Serial.println(WiFi.softAPgetHostname());
  Serial.print("Host IP:");
  Serial.println(WiFi.softAPIP());
  Serial.print("Host IPV6:");
  Serial.println(WiFi.softAPIPv6());
  Serial.print("Host SSID:");
  Serial.println(WiFi.SSID());
  Serial.print("Host Broadcast IP:");
  Serial.println(WiFi.softAPBroadcastIP());
  Serial.print("Host mac Address:");
  Serial.println(WiFi.softAPmacAddress());
  Serial.print("Number of Host Connections:");
  Serial.println(WiFi.softAPgetStationNum());
  Serial.print("Host Network ID:");
  Serial.println(WiFi.softAPNetworkID());
  Serial.print("Host Status:");
  Serial.println(WiFi.status());
  delay(1000);
}
```

**Step 2.** Upload the codes and open the Serial Monitor to check more details about the WiFI access point

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-3.png" alt="pir" width={700} height="auto" /></div>

**Step 3.** Scan for WiFi networks on a PC or mobile phone and you will be able to connect to this newly created network using the password we specified in the code

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-4.png" alt="pir" width="{300}" height="auto" /></div>

Now you will see that the **Number of Host Connections** on serial monitor has been updated to **1**

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/wifi-5.png" alt="pir" width={700} height="auto" /></div>

## XIAO ESP32C3 & Home Assistant

We are pleased to announce that we have made support for the XIAO ESP32C3 access to ESPHome and Home Assistant!

For more information on this section, please refer to the relevant tutorials.

- [Connect Grove Modules to Home Assistant using ESPHome](https://wiki.seeedstudio.com/Connect-Grove-to-Home-Assistant-ESPHome/)
- [LinkStar Home Assistant](https://wiki.seeedstudio.com/h68k-ha-esphome/)

## Tech support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
