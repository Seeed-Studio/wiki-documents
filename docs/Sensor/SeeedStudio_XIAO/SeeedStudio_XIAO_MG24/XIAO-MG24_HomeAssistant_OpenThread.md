---
description: Connecting to HA using Matter on top of the OpenThread network protocols
title: Seeed Studio XIAO MG24 Connect HomeAssistant With Matter
keywords:
- MG24
- xiao
- HomeAssistant
- Matter
- OpenThread
- Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E
image: https://files.seeedstudio.com/wiki/HA_OpenThread/Wiki-XIAO-MG24-HA-Matter.webp
slug: /xiao_mg24_ha_openthread
sidebar_position: 8
last_update:
  date: 05/5/2025
  author: Jason
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Wiki XIAO MG24-HA-Matter.png" style={{width:900, height:'auto'}}/></div>

## Introduction

In this wiki, we will utilize the Sonoff Zigbee 3.0 USB Dongle to access the HomeAssistant and thus act as a border router, while the Seeed Studio XIAO MG24 will act as a Matter protocol device with the Thread network.for your convenience, we will take you through the following three questions to better engage in the process.***Thanks to the author [@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/) for the WiKi thoughts***

### What is Matter ?

Matter (formerly CHIP) is a universal application-layer standard developed by the Connectivity Standards Alliance (CSA).

- Cross-vendor interoperability over IP networks (Wi-Fi/Ethernet/Thread)
- Standardized device types (e.g., lights, door locks, thermostats)
- Secure commissioning using QR codes/NFC
- End-to-end encryption with Distributed Compliance Ledger (DCL)

### What is OpenThread ?

OpenThread is an open-source implementation of the Thread networking protocol. It creates low-power, secure mesh networks for IoT devices using IEEE 802.15.4 radio technology. Key features:

- Built-in IPv6 support (6LoWPAN)
- Self-organizing network topology
- AES-128 encryption for all communications
- Compatible with devices as small as light bulbs or sensors

### What is the relationship between Matter and Thread?

***Thanks to the author[@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/) for a very detailed explanation of this point, quoting from it!***

After this short introduction to Matter and Thread, you now understand that Thread and Matter serve different purposes and operate at different layers of the technology stack. To recap:

Thread:

- Thread is a low-power, wireless mesh networking protocol designed for connected home devices. It provides a reliable and secure way for devices to communicate with each other and the internet.
- Thread creates a local network that allows devices to talk to each other even if the internet goes down.

Matter:

- Matter is an application-layer protocol that sits on top of networking protocols like Thread, Wi-Fi, and Ethernet. It aims to simplify and unify the smart home ecosystem by ensuring that devices from different manufacturers can work together seamlessly.
- Matter defines how devices communicate and interact at the application level, focusing on interoperability, security, and ease of use.

Connection between Thread and Matter:

- Matter can use Thread as one of its underlying network protocols. This means that devices using the Matter protocol can communicate over a Thread network.
- The combination of Matter and Thread allows for a robust, secure, and interoperable smart home ecosystem where devices can communicate locally and efficiently.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/TOPPLOGY.jpg" style={{width:900, height:'auto'}}/></div>

## Hadware Overview

<table align="center">
    <tr>
        <th>Home Assistant Green</th>
        <th>Sonoff Zigbee 3.0 USB Dongle Plus–ZBDongle-E</th>
        <th>XIAO MG24</th>
        <th>Grove - Temperature&Humidity Sensor (SHT31)</th>
        <th>Seeed Studio Grove Base for XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Gree_HA.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Dongle.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/XIAO_MG24.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/SHT31.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/sonoff-zigbee-usb-dongle-plus-p-5510.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
</table>

## Software Overview

### Flashing Sonoff ZBDongle-E dongle

The Sonoff ZBDongle-E dongle comes with firmware that only allows communication with Zigbee devices. To enable it to work with the Thread radio protocol, you must flash new firmware.You can refresh the dongle's firmware directly from the Chrome browser at https://darkxst.github.io/silabs-firmware-builder.After inserting the dongle into your computer, click "Connect" and select the "OpenThread" firmware to change the firmware.
<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/1.jpg"
            style={{width: 300, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/2.jpg"
            style={{width: 300, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/3.jpg"
            style={{width: 300, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>

### Matter Temperature and Humidity Sensor Device

If this is your first time to use XIAO MG24 as a Matter device, you can refer to this [wiki](https://wiki.seeedstudio.com/xiao_mg24_matter/) on how to set it up.

- **Step 1.** Download the [Library](https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor) from Github.

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open a new sketch, and copy the following code into the new sketch.

```cpp
#include <Matter.h>
#include <MatterTemperature.h>
#include <MatterHumidity.h>
#include "ArduinoLowPower.h"
#include "SHT31.h"
#include <Wire.h>


SHT31 sht31 = SHT31();

float humidity;
float temperature;

MatterHumidity matter_humidity_sensor;
MatterTemperature matter_temp_sensor;


void setup() {
  Serial.begin(115200);
  while(!Serial);
  Serial.println("begin...");  
  sht31.begin();  
  
  float temperature = sht31.getTemperature();
  float humidity = sht31.getHumidity();

  Serial.printf("Temperature: %.02f\n", temperature);
  Serial.printf("Humidity: %.02f\n", humidity);

  Matter.begin();
  matter_temp_sensor.begin();
  matter_humidity_sensor.begin();
  matter_temp_sensor.set_device_name("XIAO_MG24");
  matter_temp_sensor.set_vendor_name("Seeed_Studio");
  matter_temp_sensor.set_product_name("Matter_SHT31");

  if (!Matter.isDeviceCommissioned()) {
    Serial.println("Matter device is not commissioned");
    Serial.println("Commission it to your Matter hub with the manual pairing code or QR code");
    Serial.printf("Manual pairing code: %s\n", Matter.getManualPairingCode().c_str());
    Serial.printf("QR code URL: %s\n", Matter.getOnboardingQRCodeUrl().c_str());
  }
  while (!Matter.isDeviceCommissioned()) {
    delay(200);
  }
  Serial.println("Matter device is commissioned, waiting for Thread network...");
  while (!Matter.isDeviceThreadConnected()) {
    delay(200);
  }
  Serial.println("Device is connected to Thread network");
  Serial.println("Waiting for Matter device discovery...");
  while (!matter_temp_sensor.is_online() || !matter_humidity_sensor.is_online()) {
    delay(200);
  }
  Serial.println("Matter device is now online");
}

void loop() {

  delay(1000);

  float temperature = sht31.getTemperature();
  float humidity = sht31.getHumidity();

  Serial.printf("Temperature: %.02f\n", temperature);
  Serial.printf("Humidity: %.02f\n", humidity);

  matter_temp_sensor.set_measured_value_celsius(temperature);
  matter_humidity_sensor.set_measured_value(humidity);


  LowPower.sleep(600000);
}
```

### HomeAssistant Configuration

**Set 1 .Add-on Store**

You need to download two plugins based on the images。

<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/addon1.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/addon2.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>

**Set 2 . Thread Configuration**

Add the OpenThread Border Router plugin. This plugin allows you to create or join a Thread network and convert Home Assistant into a Thread Border Router!
<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread1.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread2.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>
Select the corresponding network in the configuration of the Thread service.
<div class="table-center">
    <table align="center">
    <tr>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread3.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
        <td style={{width: '33.33%'}}>
        <div style={{textAlign: 'center'}}>
            <img
            src="https://files.seeedstudio.com/wiki/HA_OpenThread/thread4.jpg"
            style={{width: 400, height: 'auto', maxWidth: '100%'}}
            />
        </div>
        </td>
    </tr>
    </table>
</div>

### Home Assistant Configuration on Mobile

To add a Matter device to Home Assistant, you need to install the Home Assistant app on your smartphone. The smartphone acts as the “coordinator” for Matter, adding new devices to the Matter network and making security settings, while the HomeAssistant Green acts as the controller for Matter, managing all devices connected to the Matter network.

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone1.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone2.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone4.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone5.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>

### Adding a Matter Device

To incorporate a new Matter device into your home automation system, choose "Add Matter Device" and scan the QR code included with the device. This tutorial demonstrates how to generate the QR code using the CHIP website, based on the URL provided by the XIAO MG24 in the Serial Monitor.

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone7.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone6.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone8.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/phone9.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
</table>

### HA panel to view temperature and humidity

Once the QR code is successfully added, we can see our temperature and humidity sensor on the HA panel!

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/result1.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/result2.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/result3.jpg" style={{width:400, height:'auto'}}/></div></td>
    </tr>
</table>

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
