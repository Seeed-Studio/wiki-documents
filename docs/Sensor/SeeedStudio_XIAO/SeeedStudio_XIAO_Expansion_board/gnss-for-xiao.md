---
description: Getting started with L76-L GNSS for XIAO
title: L76-L GNSS for XIAO
keywords:
- gps
- gnss
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /gnss_for_xiao
last_update:
  date: 10/09/2023
  author: Stephen Lo
---

# L76-L GNSS for XIAO

:::danger
This product is on hold.
:::

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/Longan-Labs/XIAO_GPS/main/IMG/back.png" alt="pir" width={250} height="auto" /></p>

Welcome to the L76-L GNSS for XIAO - the latest addition to the XIAO product series by Seeed Studio. This GNSS module not only offers precise positioning capabilities for your projects but its seamless integration with the XIAO main controller makes it a powerful tool. Whether you're designing a mobile application, a tracking device, or simply wish to add geolocation capabilities to your project, this module is your go-to choice.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/gnss_for_xiao">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

### Features

- Multi-Constellation Support: Supports GPS, GLONASS, Galileo, and QZSS.
- High Performance: Equipped with 33 tracking channels, 99 acquisition channels, and 210 PRN channels.
- XIAO Compatibility: Designed for seamless integration with the XIAO main controller.
- Flexible Connectivity: Apart from the connection with XIAO, it also provides pads like VCC, GND for broader applications.

### Specification

- GNSS Type: L76-L
- Supported Satellite Systems: GPS, GLONASS, Galileo, and QZSS.
- Connection Port: Tailored for XIAO.
- Connection Port for XIAO: D2/D3(TX/RX)
- Additional Pads: VCC, GND, TX, RX

### Applications

- Mobile Applications: Provide precise geolocation capabilities for your mobile apps.
- Tracking Devices: Design and build location and tracking devices.
- Geolocation Features: Add geolocation capabilities to your projects.


## Getting Started

Welcome to the quick start guide for the L76-L GNSS for XIAO. This guide aims to help you set up and get started with your new GPS expansion board in conjunction with the XIAO nRF52840 main controller.


### Hardware Preparation

#### Soldering the Headers

Upon receiving your product, some soldering will be required. We've provided two pin headers with the package. You'll need to solder these headers onto the expansion board. 

#### Connecting XIAO to Expansion Board

Once the soldering is complete, you can proceed to connect the expansion board to the XIAO main controller.

### Software Preparation

#### EspSoftwareSerial (Only for XIAO ESP32 series)

If you are using the XIAO ESP32 series as a master, then you may need to download the library for the soft serial port separately.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://www.arduino.cc/reference/en/libraries/espsoftwareserial/">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

You can search for and install the `EspSoftwareSerial` library directly from the Library Manager in the Arduino IDE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/gnss-xiao/1.png" style={{width:400, height:'auto'}}/></div>

:::note
If you are using another series of XIAO, then you don't need to download the library for the soft serial port separately.
:::

#### TinyGPSPlus

We also need a library to parse the GPS data messages reported by the expansion board. You can download this **TinyGPSPlus** library by clicking the button below.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://www.arduino.cc/reference/en/libraries/tinygpsplus/">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

You can search for and install the `TinyGPSPlus` library directly from the Library Manager in the Arduino IDE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/gnss-xiao/2.png" style={{width:400, height:'auto'}}/></div>

## XIAO nRF52840 Example

The L76-L module outputs GPS information via the serial port every 1 second. In this example, we print the content received from the serial port. You will be able to see a lot of information, including time, satellites, as well as latitude and longitude. Here's the code.

```cpp
#include <TinyGPSPlus.h>
#include <SoftwareSerial.h>

static const int RXPin = D3, TXPin = D2;
static const uint32_t GPSBaud = 9600;

// The TinyGPSPlus object
TinyGPSPlus gps;

// The serial connection to the GPS device
SoftwareSerial ss(RXPin, TXPin);

void setup()
{
    Serial.begin(115200);
    ss.begin(GPSBaud);

    Serial.println(F("DeviceExample.ino"));
    Serial.println(F("A simple demonstration of TinyGPSPlus with an attached GPS module"));
    Serial.print(F("Testing TinyGPSPlus library v. ")); Serial.println(TinyGPSPlus::libraryVersion());
    Serial.println(F("by Mikal Hart"));
    Serial.println();
}

void loop()
{
    // This sketch displays information every time a new sentence is correctly encoded.
    while (ss.available() > 0)
    if (gps.encode(ss.read()))
    displayInfo();

    if (millis() > 5000 && gps.charsProcessed() < 10)
    {
        Serial.println(F("No GPS detected: check wiring."));
        while(true);
    }
}

void displayInfo()
{
    Serial.print(F("Location: "));
    if (gps.location.isValid())
    {
        Serial.print(gps.location.lat(), 6);
        Serial.print(F(","));
        Serial.print(gps.location.lng(), 6);
    }
    else
    {
        Serial.print(F("INVALID"));
    }

    Serial.print(F("  Date/Time: "));
    if (gps.date.isValid())
    {
        Serial.print(gps.date.month());
        Serial.print(F("/"));
        Serial.print(gps.date.day());
        Serial.print(F("/"));
        Serial.print(gps.date.year());
    }
    else
    {
        Serial.print(F("INVALID"));
    }

    Serial.print(F(" "));
    if (gps.time.isValid())
    {
        if (gps.time.hour() < 10) Serial.print(F("0"));
        Serial.print(gps.time.hour());
        Serial.print(F(":"));
        if (gps.time.minute() < 10) Serial.print(F("0"));
        Serial.print(gps.time.minute());
        Serial.print(F(":"));
        if (gps.time.second() < 10) Serial.print(F("0"));
        Serial.print(gps.time.second());
        Serial.print(F("."));
        if (gps.time.centisecond() < 10) Serial.print(F("0"));
        Serial.print(gps.time.centisecond());
    }
    else
    {
        Serial.print(F("INVALID"));
    }

    Serial.println();
}
```

Make sure that the GPS module is used in a more open location so that it can get a good GPS signal. With a good GPS signal, within five minutes, the serial port will see the latitude, longitude and time information returned by the GPS module.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/gnss-xiao/3.png" style={{width:700, height:'auto'}}/></div>


## Work without XIAO

If you wish to utilize the GPS module with other microcontrollers, they can make use of the four solder pads available on the circuit board: 3V, GND, TX, and RX.

By connecting these pads to the respective pins on the desired microcontroller, the L76-L module can be integrated and operated without the XIAO. Ensure to refer to the specific microcontroller's documentation for proper pin configurations and connections.

|L76-L module|Others MCU|
|------------|----------|
|3V|3.3V|
|GND|GND|
|TX|RX|
|RX|TX|

## Resources


- **[Zip]** [Eagle file](https://files.seeedstudio.com/wiki/gnss-xiao/XIAO_GPS_SCH&PCB.zip)
- **[PDF]** [Datasheet - L76-L](https://files.seeedstudio.com/wiki/gnss-xiao/L76-L_doc.zip)


## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>








