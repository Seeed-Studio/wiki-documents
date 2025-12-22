---
description: SenseCAP_Tracker_T1000-A/B_Bluetooth_Beacon
title: BC01 Indoor Bluetooth Beacon
keywords:
- BLE
- Positioning
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/BC01_Indoor_Bluetooth_Beacon.webp
slug: /bluetooth_beacon_for_SenseCAP_Traker
last_update:
  date: 05/29/2025
  author: Zeke
---

A BLE (Bluetooth Low Energy) Location Beacon is a small wireless device that transmits Bluetooth signals at regular intervals. These signals can be detected by Bluetooth-enabled devices, such as SenseCAP T1000 Tracker, allowing them to determine their proximity to the beacon， building a location-based solution for indoor positioning, asset tracking and other applications.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_169626_-1Pgt7bfhzJ786G5_1693376261?w=1400&h=1050&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/E5-Location-Beacon-p-5791.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now </font></span></strong>
    </a>
</div>

### Bluetooth Indoor Positioning System

GPS has proven its ability to locate outdoors. Now, we also tend to move to indoor positioning, and Bluetooth beacons make indoor precise positioning possible. Combine with SenseCAP T1000 Tracker to build an indoor positioning solution.

Deploy Bluetooth beacons in your target area, the tracker receives the signal sent by the beacon, and the positioning accuracy is at the meter level (2-3 meters). It can realize functions such as asset tracking, route planning, reverse car search, etc., and can be integrated into applets and APPs.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_594585_HptIoexn6zqh4-oS_1692694140?w=1424&h=328&type=image/png" alt="pir" width={800} height="auto" /></p>

:::tip
Check [Indoor Positioning System](https://wiki.seeedstudio.com/IPS_For_SenseCAP_T1000_Traker) for more details.
:::

### Features

- **Bluetooth® LE 5.0**
- **Long battery life**: Replaceable lithium battery, more than 5 years (0dBm/500ms in default configuration).
- **Long-distance transmission**: Up to 120 meters in open areas.
- **High compatibility**: Compatible with iOS 7.0+ and Android 4.3+ systems

### Button Function

|Power on|Power off|
| :-: | :-: |
|Open the back cover of the product, press and hold the button for 3 seconds, and the blue LED will light up for 5 seconds, then the boot is successful.|In the power-on state, open the back cover of the product, press and hold the button for 3 seconds, and the blue LED flashes 5 times to indicate a successful shutdown.|

## Deployment guidelines

- Bluetooth beacons are typically positioned 2.5-3m above ground level, with a horizontal spacing of 5-10m. These beacons can be deployed either in column formations or evenly distributed in triangular patterns, depending on the environment.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png" alt="pir" width={600} height="auto" /></p>

- Deployment strategies vary across scenarios. For instance, indoor settings might involve central (narrow) placement or triangular grid distribution (sparse). In indoor corridors, options include centerline deployment (for corridors around 3m wide) or dual-column arrangement (wider corridors). Avoid ceiling mounting in high-rise buildings (floor height > 4m). Opt instead for wall or low-level installation, approximately 5m apart. Outdoors, use a triangular grid pattern for open spaces.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png" alt="pir" width={700} height="auto" /></p>

<center><i>The red ones are wrong examples and the blue ones are correct ones.</i></center>

- In humid environments, factor in the product's waterproof rating during deployment to prevent prolonged water exposure.

- Maintain a distance from metallic, glass, or other obstructing elements when situating the product, should not be close to the corner.

:::tip
The deployment guidelines are for reference only. Actual deployment should be customized based on customer positioning algorithms, product installation surroundings, and testing conditions.
:::

### Magnet Adsorption Installation Instructions

#### Installation conditions

- The tool or platform material table for product installation should be the surface of equipment or brackets that can be attracted by magnets;
- Recommended installation temperature range: 20~40°C;
- When installing the product, try to keep it away from corners, other surrounding magnetic fields and large obstacles.

#### Installation steps

The magnetic contact surface of the product can be directly adsorbed to the surface of the bracket or equipment to be installed.

:::tip
Because the volume of magnetic products is heavier than that of general products (without magnet absorption), it is recommended not to install such products on surfaces such as ceilings to avoid the risk of falling.
:::

### 3M glue/nail-free glue installation instructions

#### Installation conditions

- The surface of the platform material on which the product is installed should be a flat, dry surface such as ceramics, glass/epoxy resin, acrylic, PBT, ABS, PC, and rigid PVC. Due to the differences in the viscosity and installability of different double-sided adhesive models, it is not recommended to use the default double-sided adhesive on walls with gray texture, incomplete drying, aging, and humidity (such as cement, gypsum board, etc.). There is a risk of shedding;
- Recommended installation temperature range: 20~40℃;
- The product should be installed away from metal, glass shielding or other obstructions; the product should not be deployed close to the corner.

#### Installation steps

- Before installation: clean the surface of the application platform or tool to be pasted, and ensure that the pasted surface is dry and dust-free;
- When pasting, stick the double-sided tape to the device with your hands or tools and press it for 1-2 seconds. Repeat the pressing several times to make the double-sided tape or nail-free glue of the product and the application paste surface better bonded.

:::tip
If you need to install the product in a low temperature environment or in a harsh environment, it is recommended to use double-sided adhesive + strong nail-free adhesive to install the product for the best effect. Please contact our sales staff for more information on nail-free glue.
:::

### Specification

**General Specification**

|UUID|PC|
| :-: | :-: |
|Color|White|
|IP rate|None|
|Dimension(L\*W\*H)|Φ50\*20.5mm|
|Weight|39g(include battery)|
|Battery|Lithium battery, 2400mAh|
|Chip|nRF52 series|
|Bluetooth Version|BLE 5.0|
|Bluetooth Protocol|iBeacon|
|Sensors|Support accelerometer|
|LED|Included|
|APP|BeaconSET|
|Working temperature|-30~60°C|
|Battery life|<p>More than 5 years</p><p>(0dBm/500ms in default configuration).</p><p></p>|

**Default broadcast parameters**

|**Parameters**|**Default Value**|
| :-: | :-: |
|UUID|FDA50693-A4E2-4FB1-AFCF-C6EB07647825|
|Major|10001|
|Minor|19641|
|Measured power|-59dBm|
|Tx Power|-30 - +4dBm, default 0dBm|
|Adv Interval|100ms~10s,default 500ms|
|Password|seeed123 （Letters and numbers）|
|Serial ID|None|
|Device Name|BC01 (1-7 characters)|
|Connection Mode|Yes/No|
|Soft Reboot|seeed123 （same with the password）|
|Battery Service|<p>Battery icon display, real-time detection</p><p>full grid is 100%</p>|

**Compatibility information**

|**System**|**Devices**|
| :-: | :-: |
|BLE|BLE 4.2+|
|IOS 7.0+|<p>iPhone 4S,iPhone 5/5C/5S, </p><p>iPhone 6/6Plus/6S/6SPlus,iPhone 7/7Plus, </p><p>iPad mini/mini2/4/Air/Pro,etc.</p><p></p>|
|Android 4.3+|<p>Samsung，XIAOMI，HUAWEI，ONEPLUS，ViVO，OPPO ,etc.</p><p></p>|

## Configuration

- **Step 1**: Download `Beaconset` APP

- **Step 2**: Connect the beacon, you can distinguish them by the MAC address which is also attached to the beacon label.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/set-beacon2.png" alt="pir" width={600} height="auto" /></p>

- **Step 3**: Settings

Modify the param according to your need and click `Save`. When prompted, enter the password `seeed123` to confirm.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setting-beacon.png" alt="pir" width={600} height="auto" /></p>
