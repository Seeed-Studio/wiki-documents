---
title: User Guide
description: SenseCAP_Bluetooth_Beacon_for_Tracker_User_Guide
keywords:
  - Beacon
  - SenseCAP
  - BLE
  - Positioning
image: https://files.seeedstudio.com/wiki/BC03/1-BC03-Bluetooth-Beacon.webp
slug: /bluetooth_beacon03_for_tracker_user_guide
sku: 100085893
last_update:
  date: 3/24/2026
  author: Janet
createdAt: '2026-03-24'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/bluetooth_beacon03_for_tracker_user_guide/
---

# BC03 Indoor Bluetooth Beacon User Guide

![BC03](https://files.seeedstudio.com/wiki/BC03/6-BC03-Bluetooth-Beacon.jpg)

## Power & LED

* **Power on**: Simply pull out the battery tab located on the back. The BC03 will power on automatically and the device's LED indicator will illuminate.
* **Power off**: The device is designed for continuous operation and does not have a physical power button. To power off the device, the battery must be manually removed.

## Deployment Guidelines

* Recommended installation height: **2.5–3 m** above ground
* Recommended spacing: **5–10 m**, depending on accuracy requirements
* Deployment patterns:
  * Triangular grid for open areas
  * Single-row or dual-row deployment for corridors

![Deployment Example 1](https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png)

Additional notes:

* Avoid ceiling installation in environments with floor heights above **4 m**
* Keep the beacon away from **metal surfaces, glass shielding, and corners**
* In humid environments, consider environmental protection requirements

![Deployment Example 2](https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png)

*Red examples are incorrect, blue examples are correct.*

:::note
Deployment guidelines are for reference only. Actual deployment should be optimized based on the positioning algorithm and on-site testing results.
:::

## Installation Instructions

### 3M Adhesive Installation

#### Installation Conditions

* Suitable surfaces: ceramic, glass, epoxy resin, acrylic, ABS, PC, rigid PVC
* Not recommended for rough, damp, or aging surfaces (e.g. cement, gypsum board)
* Recommended installation temperature: **20–40°C**

#### Installation Steps

1. Clean and dry the mounting surface
2. Pull out the insulating film and it can be pasted and installed
3. Press firmly for 1–2 seconds, repeat several times to ensure adhesion

:::note
For low-temperature or harsh environments, it is recommended to use double-sided adhesive combined with strong nail-free glue.
:::

## Configuration

BC03 supports parameter configuration and batch provisioning through **SenseCraft APP** and production tools.

- **Step 1**: Download `SenseCraft` APP

    - For iOS, please search for “SenseCraft” in the App Store and download it.
    - For Android, please search for “SenseCraft” in the Google Store and download it.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/App_Download.png" alt="pir" width={600} height="auto" /></p>


- **Step 2**: Connect the Beacon & Configuration

On the User page, click `Device Bluetooth Configuration`, then select `Bluetooth Beacon` and choose `BC03`. Then enter the Device List page.
    
![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration.png)

Based on the device's MAC address, select the Beacon to be configured.

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration2.png)

You can modify the device's UUID, MAJOR, MINOR, Broadcast Power, Broadcast Interval, and password.
    
![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration3.png)

**Batch Configuration**

Click Save & Batch Configuration, enter the number of devices and password, then begin the batch configuration. Once the progress bar completes, you can download the batch configuration beacon file and review the configuration status.

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration4.png)


- **Step 3**: View RSSI Curve

Choose the beacon, click RSSI Curve. You can view the dynamic RSSI curve.

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_view.png)

:::tip
For a small number of devices(≤ 7-8 units), manual configuration for each unit is recommended. For larger deployments, please use the Batch Configuration, as it offers greater stability when handling multiple devices.
:::

## Bluetooth Indoor Positioning System

GPS performs well outdoors, but indoor environments such as offices, warehouses, hospitals, or malls often block satellite signals. To achieve accurate indoor positioning, we use BC03 Bluetooth Beacons together with SenseCAP trackers.

**How It Works**

**1. Deploy BC03 Beacons**
Install BC03 beacons at fixed positions. Please strictly follow the   
[Deployment Guidelines](#deployment-guidelines), otherwise, the deployment results may not be satisfactory. 
Each beacon continuously broadcasts a Bluetooth signal.

**2. Tracker scans beacon signals**
SenseCAP LoRaWAN trackers scan nearby beacon signals and measure the RSSI.

**3. Distance estimation**
The system estimates the relative distance between the tracker and each beacon based on RSSI values.

**4. Position calculation**
Using positioning algorithms, the system calculates the device location.

Combined with positioning algorithms, this enables **meter-level indoor positioning accuracy (approximately 2–3 meters)**.

Typical application scenarios include:

* **Asset tracking:** Locate high-value equipment within warehouses or factories.
* **Personnel positioning:** Ensure worker safety in hospitals, mines, or construction sites.
* **Route analysis:** Analyze foot traffic flow and heatmaps in retail or office spaces.
* **Indoor navigation:** Provide real-time positioning for visitors in large venues.

The solution can be integrated into cloud platforms, mobile applications, and mini-programs.

![BC03](https://files.seeedstudio.com/wiki/BC03/beacon3.png)

We provide a open-source Bluetooth indoor positioning system designed to work seamlessly with SenseCAP BLE Beacons and SenseCAP LoRaWAN Trackers.

This solution is fully open-source and customizable, allowing users to build, modify, and integrate their own backend services based on our GitHub reponsitory.

![Indoor Positioning System](https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png)


:::tip
Check [Indoor Positioning System](https://wiki.seeedstudio.com/solutions/indoor-positioning-bluetooth-lorawan-tracker/) for more details.
:::

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