---
description: SenseCAP_T1000_tracker_Introduction
title: Introduction
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker/Introduction
last_update:
  date: 10/11/2025
  author: Twelve
---


[**SenseCAP T1000**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) is a compact LoRaWAN® tracker that utilizes GNSS/Wi-Fi/Bluetooth for precise indoor & outdoor location tracking. It boasts self-geo-adaptive capabilities, local data storage, and an impressive months of battery life. Additionally, it is equipped with temperature, light, and motion sensors, making it ideal for a variety of location-based applications.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_1.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now </font></span></strong>
    </a>
</div>

---

:::tip Version Comparison

||Compatible Network|Temperature|Light|Accelerometer|
|--|--|--|--|--|
|[SenseCAP T1000-A](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)|<ul><li>LoRaWAN</li><li>Helium</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|[SenseCAP T1000-B](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html)|<ul><li>LoRaWAN</li><li>Helium</li></ul>|||
|[SenseCAP T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html)|<ul><li>LoRaWAN</li><li>Meshtastic</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
:::

## Features

### Accurate Positioning

GNSS, Wifi, BLE, 3 positioning technologies for both indoor and outdoor solutions.

**GNSS Positioning (Outdoor)**

The tracker will get location outdoor via satellite system (GPS/BeiDou/more), then uploads the data to server by LoRa wireless.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/located_by_Gnss.png" alt="pir" width={800} height="auto" /></p>

**Wi-Fi / Bluetooth Positioning (Indoor)**

Tracker scan the MAC address and RSSI of nearby Wi-Fi/Bluetooth and upload it through LoRaWAN. The application server needs to calculate the real geographical location based on the MAC address and signal strength (RSSI).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/by_wifi.png" alt="pir" width={800} height="auto" /></p>

### Offline Data Storage

Capable of storing 1000+ records locally. The storage capacity of 1 hour upload interval exceeds 40 days.

When the LoRaWAN signal coverage is weak or there is no network coverage, the data will be saved and entered in the next cycle. When the device returns to an area with the LoRaWAN network coverage, it will send the offline data automatically.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### Cross-Regional Adaptability

T1000 provides seamless global LoRaWAN® region switching, automatically adjusting to the appropriate LoRaWAN® frequency plan based on detected location coordinates, ensuring optimal performance across Europe, pan-America, and beyond.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/earth.gif" alt="pir" width={800} height="auto" /></p>

### Months of Battery Life

Powered by the LR1110 and featuring low power consumption, most of the models can lasts for over 3 months of battery life with 1 hour upload interval in GNSS only mode, with the motion sensor disabled.
(Battery life may vary with configuration parameters such as frequency band, positioning mode, and data upload interval. Please refer to the [Battery Life Calculation](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx) for detailed reference)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/battery_life_new_ABE.png" alt="pir" width={800} height="auto" /></p>

### Temp, Light, Motion Sensors

Temperature & light sensors are included to keep track of the environmental data on the go. For example, temp data can be used to inference the possibility if the food / vaccine goes bad. Light data shows if it is seen by unwanted eyes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensor.png" alt="pir" width={800} height="auto" /></p>

### Decentralized Gateway Network for location Provenance

Helium’s decentralized network is built on a trust mechanism where every gateway shares its location, and Helium validates the authenticity of these locations. When using Helium with T1000, by cross-checking the gateway’s location, you can have a approximate location of T1000. This provides an additional layer of validation, increasing the data’s validity compared to other networks.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/helium_map.png" alt="pir" width={800} height="auto" /></p>

### Emergency Report

Motion sensor to detect anomaly, SOS button for emergency reporting and automatically switch to high-frequency data transmission

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%94%BB%E6%9D%BF-4@1.5x.png" alt="pir" width={800} height="auto" /></p>

## Architecture

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/framework_new.png" alt="pir" width={800} height="auto" /></p>

## Applications

- International Asset Tracing
- Search And Rescue
- Equipment Monitoring

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/applications.png" alt="pir" width={800} height="auto" /></p>

## Specification

### Model Specification

We provide two different solutions for users, and comes in three versions: A, B and E.

- **T1000-A/T1000-B**: These two versions are designed for **LoRaWAN network**, supporting indoor (Wi-Fi + Bluetooth) + outdoor positioning (GNSS). T1000-A is equipped with essential features, including a temperature sensor, light sensor, motion sensor, while T1000-B comes without these sensors.

- **T1000-E**: It features open-source software and is available in two separate versions: one for **LoRaWAN** and the other for **Meshtastic**. Both offer full source code, enabling developers to customize and expand their functions freely.

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image2_20.png" alt="pir" width={800} height="auto" /></p>

### General Parameters

|Product Model|T1000-A/T1000-B/T1000-E|
| :- | :- |
|Backhaul|LoRaWAN® (v1.0.4 Class A)|
|Bluetooth|Bluetooth v5.1, setting via App|
|LoRaWAN Channel Plan|IN865/EU868/US915/AU915/AS923/KR920/RU864|
|Temperature|<p>Range: -20 to 60℃;</p><p>Accuracy: ± 1℃ (min ±0.5℃, max ±1℃)</p><p>Resolution: 0.1℃</p>|
|Light|0 to 100% (0% is dark, 100% is brightest)|
|3-Axis Accelerometer|3-Axis Accelerometer to detect movement|
|LED and Buzzer|1xLED and 1x buzzer to indicate status|
|Button|1xButton to operate and trigger events (SOS)|
|Antenna|Internal (GNSS/LoRa/Wi-Fi/BLE)|
|Communication Distance|2 to 5km (depending on gateway antenna, installation, and environments)|
|IP Rating|IP65|
|Dimensions|85 x 55 x 6.5 mm|
|Device Weight|32g|
|Operating Temperature|-20℃ to +60<a name="ole_link12"></a>℃|
|Operating Humidity|5% - 95% (No condensation)|
|Certification|CE /FCC /TELEC /RoHS /REACH|

**Location**

|GNSS Constellation|GPS/GLONASS/Galileo/BeiDou/QZSS|
| :- | :- |
|GNSS Sensitivity|-145dBm cold start / -160 dBm Tracking|
|GNSS Location Accuracy|2\.5m CEP 50%|
|Wi-Fi Positioning|Passive scanning, uploads the scanned 4 MAC addresses|
|Bluetooth Positioning|uploads the scanned 3 best signal MAC addresses of Beacon|
|Data Cache|Cache 1000 data when there is no LoRaWAN network|

**Battery**

|Battey Capacity|Rechargeable lithium battery, 700mAh|
| :- | :- |
|\*Battery Life Estimates|4 months on a single charge (uplink every 1 hour, only GNSS data)|
|Battery Life Monitoring|Periodic uplink battery level|
|Charge Cable (Adapter not included)|USB magnetic charging cable, 1 meter|
|<a name="ole_link9"></a>Power Input Voltage|4\.7 to 5.5V DC|
|Charging Temperature Limit|0 to +45℃ (Beyond the temperature range, the charge will be limited, and the LED will blink quickly)|
