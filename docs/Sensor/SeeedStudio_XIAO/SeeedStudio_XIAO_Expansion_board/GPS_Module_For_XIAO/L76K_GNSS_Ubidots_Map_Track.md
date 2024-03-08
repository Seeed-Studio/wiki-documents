---
title: L76K Path Tracking on Ubidots
description: Connecting L76K GNSS Module and SeeedStudio XIAO to Ubidots for Location Path Tracking on A Map
keywords: 
  - XIAO
  - Expansion Boards for XIAO
  - GPS Module for XIAO
  - L76K Path Tracking on Ubidots
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /L76K_Path_Tracking_on_Ubidots
last_update: 
  date: 03/07/2024
  author: Harrison Xu
---


# Connecting L76K GNSS Module and SeeedStudio XIAO to Ubidots for Location Path Tracking on A Map

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic00_Track.png" alt="pir" width={600} height="auto"/>
</p>

## Introduction
After [Getting Started with L76K GNSS Module for SeeedStudio XIAO](https://wiki.seeedstudio.com/get_start_l76k_gnss/), you might want to use the L76K GNSS module to locate an object and display the track on a map. For this purpose, we can achieve it by combining the  SeeedStudio XIAO development board and the Ubidots IoT data platform.

[Ubidots](https://ubidots.com/) is a low-code IoT development platform for engineers and developers without the time or energy to build an entire, production-ready IoT application themselves. From device-friendly APIs to a clean UI for end-users, Ubidots provides the essential building blocks to bring you faster to market, without having to hire an expensive team of engineers to develop and maintain a customized solution.

### Features
- Upload real-time location data (latitude and longitude) when connected to Wi-Fi
- Display the path connected by position points on a map

## Getting Started
### Step 1: Get Ubidits Token
First, open https://ubidots.com in your browser, then sign up for an account. Confirm your email, and log in to the Ubidots console.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic02_SignUp.png" alt="pir" width={600} height="auto"/>
</p>

Click your avatar on the corner - "My Profile", scroll down and change the "Decimal places" from 2 to 6 for latitude and longitude precision.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic04_Setting.png" alt="pir" width={600} height="auto"/>
</p>

Then go to "API Credentials" in the left, copy the token (**NOT the API Key**) for later use.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic05_Token.png" alt="pir" width={600} height="auto"/>
</p>

### Step 2: Upload Code to XIAO
Connect the SeeedStudio XIAO dev board (Here we use SeeedStudio XIAO ESP32S3 for example), L76K GNSS module, GNSS antenna, Wi-Fi antenna all together and link them to your computer.

:::danger **Warning**
Please pay special attention to the installation direction of the module, do not plug it in backwards, otherwise it is likely to burn the module or XIAO.
:::

Next, lets's start the Arduino IDE. Remember to add `EspSoftwareSerial` and `TinyGPSPlus` libraries in library manager, download [Ubidots ESP32 Library](https://github.com/ubidots/ubidots-esp32) and add it also. 

Select the corresponding board and port, then paste the following code: 

```cpp
#include <SoftwareSerial.h>
#include <TinyGPSPlus.h>
#include <WiFi.h>
#include <Ubidots.h>

static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;
const char WIFI_SSID[]     = "INPUT YOUR WIFI NAME HERE";
const char WIFI_PASS[]     = "INPUT YOUR WIFI PASSWORD HERE";
const char UBIDOTS_TOKEN[] = "INPUT YOUR UBIDOTS TOKEN HERE";

SoftwareSerial MySerial(RXPin, TXPin);
TinyGPSPlus gps;
Ubidots ubidots(UBIDOTS_TOKEN, UBI_UDP);
double lat;
double lng;

void setup() {
  Serial.begin(115200);
  MySerial.begin(GPSBaud);
  ubidots.setDebug(true);    // For observing Ubidots uploading log. You can also change it to "false" for a more simplified serial monitor.
  Serial.println("\nTinyGPSPlus library version: " + String(TinyGPSPlus::libraryVersion()));

  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  while (WiFi.status() != 3) {
    WiFi.begin(WIFI_SSID, WIFI_PASS);
    Serial.println(WiFi.status());
    delay(5000);
  }

  /*
    WL_NO_SHIELD        = 255,    // For compatibility with WiFi Shield library
    WL_IDLE_STATUS      = 0,
    WL_NO_SSID_AVAIL    = 1,
    WL_SCAN_COMPLETED   = 2,
    WL_CONNECTED        = 3,
    WL_CONNECT_FAILED   = 4,
    WL_CONNECTION_LOST  = 5,
    WL_DISCONNECTED     = 6
  */

  Serial.println("WiFi is connected!");
}

void loop() {
  while (MySerial.available() > 0) {
    if (gps.encode(MySerial.read())) {
      getLocation();
      sendToUbidots();
      delay(10 * 1000);  // Change the parameter here to modify the interval of getting and uploading location.
    }
  }

  if (millis() > 5000 && gps.charsProcessed() < 10) {
    Serial.println("No GPS detected, please check wiring.");
  }
}

void getLocation() {
  if (gps.location.isValid()) {
    lat = gps.location.lat();
    lng = gps.location.lng();

    Serial.print("Location: ");
    Serial.print(gps.location.lat(), 6);
    Serial.print(", ");
    Serial.print(gps.location.lng(), 6);
    Serial.println();
  } else {
    Serial.println("Unable to get location currently");
  }
}

void sendToUbidots() {
  if (lat != 0 && lng != 0) {
    char charLat[20];
    char charLng[20];
    sprintf(charLat, "%.6lf", lat);
    sprintf(charLng, "%.6lf", lng);

    ubidots.addContext("lat", charLat);
    ubidots.addContext("lng", charLng);
    char* context = (char*)malloc(sizeof(char) * 60);
    ubidots.getContext(context);
    ubidots.add("position", 1, context);

    if (ubidots.send()) {
      Serial.println("Values sent");
    } else {
      Serial.println("Values not sent");
    }
    free(context);
  }
}
```

Upload to the board, and soon you will see some output in the serial monitor like this: 

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic06_SerialMonitor.png" alt="pir" width={600} height="auto"/>
</p>

<!--硬件连接正常工作与屏幕截图放一起-->

It is normal to wait some time to connect to Wi-Fi network and get location information from satellites just as the picture shows above. If those error output last for several minutes, try to reboot the XIAO board with the little "R" button beside the USB-C port. 

:::tip
The L76K GNSS Module is used outdoors, so please place it in an open place without obstruction, otherwise the location information may not be obtained.
:::

### Step 3: Display Data on Map
Now the L76K GNSS Module and SeeedStudio XIAO is getting location from GNSS and sending latitude and longitude information to Ubidots. Let's get back to Ubidots and check it. Go to https://industrial.ubidots.com/app/devices, and there is a new "device" that has been automatically created by Ubidots since we sent new data through the token. Click the device name, you can see the location of this device is automatically set as the data we upload. 

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic08_DeviceInfo.png" alt="pir" width={600} height="auto"/>
</p>

Next, let's create a map to show the track. Go to "Data" - "Dashboards" on the top, hit the hamburger menu button beside "Demo Dashboard", then "CREATE" a new dashboard. You can modify the settings like this, or customize to suit your own need. Remember to "SAVE" the new dashboard. 

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic10_NewDashboard.png" alt="pir" width={600} height="auto"/>
</p>

In the new dashboard, hit "Add new widget" and scroll down to find "Map". "ADD MARKER GROUP", set the device we checked just now, and the map will appear. Move your cursor to the right-down corner of the map to resize it bigger.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic11_NewWidget.png" alt="pir" width={600} height="auto"/>
</p>

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic12_MapSetting.png" alt="pir" width={600} height="auto"/>
</p>

Hoo-ray! The path connected by position points is showing just in front of us! 

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic00_Track.png" alt="pir" width={600} height="auto"/>
</p>

:::tip
If the L76K GNSS Module stays at a fixed position without moving, the map will only show a point rather than a path, obviously. 
:::

## Reference Links
- [GPS Location | Ubidots API Reference](https://docs.ubidots.com/reference/gps-location)

- [Create Map Widgets in Ubidots | Ubidots Help Center](https://help.ubidots.com/en/articles/1712418-create-map-widgets-in-ubidots)

- [How to create a real-time map? | Ubidots Help Center](https://help.ubidots.com/en/articles/693652-how-to-create-a-real-time-map)

- [Ubidots ESP32 Library on GitHub](https://github.com/ubidots/ubidots-esp32)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
