---
description: Xadow - 3-Axis Digital Accelerometer(±400g)
title: Xadow - 3-Axis Digital Accelerometer(±400g)
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/img/Xadow_3Axis_Accelerometer400g.jpg)

The H3LIS331DL is a low power high performance 3-axis linear accelerometer belonging to the “nano” family, with digital I2C serial interface standard output. The device features ultra low power operational modes that allow advanced power saving and smart sleep to wake-up functions. The H3LIS331DL has dynamically user selectable full scales of ±100g/±200 g/±400 g and it is capable of measuring accelerations with output data rates from 0.5 Hz to 1 kHz.

## Features
---
- Wide power range DC2.2V to 3.6V
- Xadow outline
- 3 axis sensing
- Small, low-profile package: 3×3×1mm TFLGA
- Low power 300µA at 3.3V (typical)
- ±100g /±200 g /±400 g dynamically selectable full scale
- I2C digital output interface (address = 0xE7)
- 10000 g high shock survivability
- ECOPACK®RoHS and “Green” compliant

## Application Ideas

-  Shock detector
- Impact recognition and logging
- Concussion detection

## Usage
---
Here below we show you how to read the raw data from this accelerometer.
Like other Xadow modules, you need to connect Xadow 3-Axis Accelerometer to Xadow Main Board before upload the test code to Xadow Main Board to get the Accelerometer information.

The hardware Installation:

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/img/Xadow-3-Axis_Digital_Accelerometer_Connection.jpg)

:::note
    When connect Xadow 3-Axis Accelerometer to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one xadow module need to connect to the right angle of another module(see four corners of each xadow module).
:::
After uploading code, open the serial monitor to obverse the test result. The outputs of this sensor are 3-axis acceleration info which is converted into the unit of gravity, "g".

![](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/img/Raw_data_of_H3LIS331DL.jpg)


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/res/Xadow-3-Axis_Digital_Accelerometer(%C2%B1400g)v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Resources
---
- [Xadow - 3-Axis Digital Accelerometer(±400g) Eagle File](https://files.seeedstudio.com/wiki/Xadow_3_Aixs_Digital_Accelerometer_plusandminus_400g/res/Xadow-3-Axis_Digital_Accelerometer(%C2%B1400g)v1.0_sch_pcb.zip)
- [Github repository for 3-Axis Digital Accelerometer(±400g)](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_H3LIS331DL)

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
