---
title: Introduction
description: SenseCAP_Bluetooth_Beacon_for_Tracker_Introduction
keywords:
  - Beacon
  - SenseCAP
  - BLE
  - Positioning
image: https://files.seeedstudio.com/wiki/BC03/1-BC03-Bluetooth-Beacon.webp
slug: /bluetooth_beacon03_for_tracker_introduction
sku: 100085893
last_update:
  date: 4/2/2026
  author: Janet
createdAt: '2026-03-24'
updatedAt: '2026-04-02'
url: https://wiki.seeedstudio.com/bluetooth_beacon03_for_tracker_introduction/
---

# BC03 Indoor Bluetooth Beacon Introduction

SenseCAP BC03 Indoor Bluetooth Beacon is a small wireless device that transmits Bluetooth signals at regular intervals. These signals can be detected by Bluetooth-enabled devices, such as [**SenseCAP T1000 Tracker**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html), [**SenseCAP T2000 
Tracker**](https://www.seeedstudio.com/SenseCAP-Asset-Tracker-T2000-A-p-6580.html), allowing them to determine their proximity to the beacon, building a location-based solution for indoor positioning, asset tracking and other applications, which enabling proximity detection and meter-level indoor positioning.


![BC03](https://files.seeedstudio.com/wiki/BC03/1-BC03-Bluetooth-Beacon.jpg)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Indoor-Bluetooth-Beacon-BC03-p-6732.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now </font></span></strong>
    </a>
</div>
<br />

:::tip Version Comparison
![Version Comparison](https://files.seeedstudio.com/wiki/BC03/beacon_version.png)
:::

## Bluetooth Indoor Positioning System

GPS works well outdoors, but its performance is limited indoors. By deploying BC03 Bluetooth beacons in indoor environments, SenseCAP trackers can scan beacon signals and estimate distances based on RSSI values. Combined with positioning algorithms, this enables **meter-level indoor positioning accuracy (approximately 2–3 meters)**.

Typical application scenarios include:

* Asset tracking
* Personnel positioning
* Route analysis
* Indoor navigation

The solution can be integrated into cloud platforms, mobile applications, and mini-programs.

![Indoor Positioning](https://files.seeedstudio.com/wiki/BC03/beacon3.png)

We provide a open-source Bluetooth indoor positioning system designed to work seamlessly with SenseCAP BLE Beacons and SenseCAP LoRaWAN Trackers.
This solution is fully open-source and customizable, allowing users to build, modify, and integrate their own backend services based on our GitHub repository.

![Indoor Positioning System](https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png)


:::tip
Check [Indoor Positioning System](https://wiki.seeedstudio.com/solutions/indoor-positioning-bluetooth-lorawan-tracker/) for more details.
:::

## Features
---

* **Bluetooth® LE 5.0**
* **Ultra-low power consumption**: Replaceable Li/SOCl2 battery, more than **5 years battery life** (0 dBm / 500 ms, default configuration)
* **Long-distance transmission**: Up to **130 m** in open areas
* **Simple Installation**：Pull out the insulating film and it can be pasted and installed, reducing construction costs.
* **UV Protection**: Suitable for UV-sterilization lamps and similar scenarios, without altering appearance.
* **Flexible configuration**: Advertising interval and transmit power configurable
* **High compatibility**: Compatible with iOS 7.0+ and Android 4.3+
* **Optional accelerometer support**: Reserved PCBA footprint for motion or vibration detection

---
:::info
BC03 has a high-gain omni-directional BLE antenna, low-ower consumption, and user interaction:

* **Enhanced Beacon Broadcasting Capability**
Optimized BLE advertising stability and RSSI consistency, improving indoor positioning accuracy and robustness in complex environments.
* **Antenna Design**
Excellent radiation efficiency and directional consistency, onboard antenna, thus achieving a longer communication range and more stable communication without precise adjustment of the installation direction.
* **Longer Battery Life**
Further optimized low-power design. Under the same configuration (0 dBm / 500 ms), BC03 achieves large-scale and long-term deployment.
* **LED Status Added**
A blue LED provides intuitive device status feedback during power-on and operation, display the device's power-up and upgrade status.
:::

## Specification

### General Specification

| Item                | Description                |
| ------------------- | -------------------------- |
| Material            | ABS（Anti-UV）              |
| Color               | White                      |
| IP Rating           | None                       |
| Dimension(L\*W\*H)    | Φ50*20.5mm                 |
| Weight              | ~45 g (including battery)  |
| Battery             | Li/SOCl2 battery, 2400 mAh|
| Chip                | nRF52 series               |
| Bluetooth Version   | BLE 5.0 (backward compatible with BLE 4.1) |
| Bluetooth Protocol  | iBeacon                    |
| Sensors             | Accelerometer (optional)   |
| LED                 | 1 × Blue LED               |
| App                 | SenseCraft APP             |
| Working Temperature | -20 ~ 60 °C                |
| Battery Life        | > 5 years (0 dBm / 500 ms in default configuration) |

### Default Broadcast Parameters

| Parameter            | Default Value                  |
| -------------------- | ------------------------------ |
| UUID                 | 5EEEDBCA-AC02-43B0-B0CF-C6EB07647825
 |
| Major                | Automatically assigned from the device MAC address (lower 2 bytes) |
| Minor                | Automatically assigned from the device MAC address (upper 2 bytes) |
| Measured Power       | -59 dBm              |
| Tx Power             | -40 ~ +4dBm (default 0dBm)   |
| Advertising Interval | 20ms ~ 30s (default 500ms)  |
| Password             | 12345678                       |
| Device Name          | 03                             |

### Compatibility Information

| System       | Devices                                   |
| ------------ | ----------------------------------------- |
| BLE          | BLE 4.1+                                  |
| iOS 7.0+     | iPhone 4S, iPhone 5/5C/5S, iPhone 6/6Plus/6S/6S Plus, iPhone 7/7Plus, iPad mini/mini2/4/Air/Pro, etc.      |
| Android 4.3+ | Samsung, XIAOMI, HUAWEI, ONEPLUS, vivo, OPPO, etc. |

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