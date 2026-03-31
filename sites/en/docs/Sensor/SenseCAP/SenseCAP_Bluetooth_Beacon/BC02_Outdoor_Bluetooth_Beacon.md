---
description: SenseCAP_Tracker_Bluetooth_Beacon
title: BC02 Outdoor Bluetooth Beacon
keywords:
  - BLE
  - Positioning
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/bc02-outdoor-bluetooth-beacon.webp
slug: /bluetooth_beacon02_for_sensecap_tracker
sku: 113991456
last_update:
  date: 03/24/2026
  author: Janet
createdAt: '2026-03-24'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/bluetooth_beacon02_for_sensecap_tracker/
---

A BLE (Bluetooth Low Energy) Location Beacon is a small wireless device that transmits Bluetooth signals at regular intervals. These signals can be detected by Bluetooth-enabled devices, such as [**SenseCAP T1000 Tracker**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html), [**SenseCAP T2000 Tracker**](https://www.seeedstudio.com/SenseCAP-Asset-Tracker-T2000-A-p-6580.html), allowing them to determine their proximity to the beacon, building a location-based solution for indoor positioning, asset tracking and other applications.

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/5/-/5-113991456-outdoor-bluetooth-beacon.jpg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Outdoor-Bluetooth-Beacon-p-6468.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now </font></span></strong>
    </a>
</div>
<br />

:::tip Version Comparison
![Version Comparison](https://files.seeedstudio.com/wiki/BC03/beacon_version.png)
:::

### Features

- **Bluetooth® LE 5.0**
- **Long battery life**: Replaceable lithium battery, more than 7 years (in default configuration).
- **Long-distance transmission**: Up to 75 meters in open areas.
- **Rugged and Durable**: IP68 waterproof and IK08 impact-resistant for harsh conditions

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

|Parameters| Value |
| :-: | :-: |
|Material| ABS+PC |
|Color|Yellow|
|IP rate| IP68 |
|IK rate| IK08 |
|Dimension(L\*W\*H)|115\*100\*29mm|
|Weight| 169.1g(include battery)|
|Battery|Lithium-ionbattery,4000mAh|
|Chip|nRF52 series|
|Bluetooth Version|BLE 5.0|
|Bluetooth Protocol|iBeacon|
|Working temperature|-40~85°C|
|Working Humidity| 0~95%RH,no condensation|
|Broadcasting Power| -40~+4dBm|
|Broadcasting Frequency|  100ms~5s|
|Broadcasting Distance| Up to 75 meters in open areas|
|Battery life|<p>More than 7 years</p><p>(in default configuration).</p><p></p>|

**Default broadcast parameters**

|**Parameters**|**Default Value**|
| :-: | :-: |
|UUID|FDA50693-A4E2-4FB1-AFCF-C6EB07647825|
|Major|10001|
|Minor|19641|
|Measured power|-59dBm|
|Transmission Power|0dBm|
|Adv Interval|300ms|
|Password|seeed123 （Letters and numbers）|

**Compatibility information**

|**System**|**Devices**|
| :-: | :-: |
|BLE|BLE 4.2+|
|IOS 7.0+|<p>iPhone 4S,iPhone 5/5C/5S, </p><p>iPhone 6/6Plus/6S/6SPlus,iPhone 7/7Plus, </p><p>iPad mini/mini2/4/Air/Pro,etc.</p><p></p>|
|Android 4.3+|<p>Samsung，XIAOMI，HUAWEI，ONEPLUS，ViVO，OPPO ,etc.</p><p></p>|


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