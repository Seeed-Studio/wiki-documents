---
description: Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)
title: Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121
last_update:
  date: 1/19/2023
  author: jianjing Huang
---


<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/Grove%20-%2012%20Key%20Capacitive%20I2C%20Touch%20Sensor%20V3%20(MPR121)/touch_sensor_V3.png"/></div>

This sensor is an upgrade version of Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121), it adds two more GND ports to the head in order to be more stable, meanwhile, the front Pin are spaced more widely so as to avoid a short circuit caused by the lines accidentally touch.

The **Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)** is a multichannel proximity capacitive touch sensor. It's a 3-in-1 module with the following features: Capacitance Sensing, Touch Sensing, and Proximity Sensing.

**Capacitance Sensing**: This module uses a constant DC current capacitance sensing scheme. It can measure capacitances ranging from 10 pF to over 2000 pF with a resolution up to 0.01 pF.

**Touch Sensing**: Once the electrode capacitance data is acquired, the electrode touch/release status is determined comparing it to the capacitance baseline value.

**Proximity Sensing**: One new feature of the MPR121 is the near proximity sensing system. This means that all of the system’s electrodes can be
summed together to create a single large electrode.

Based on Freescale MPR121, this sensor has 12 completely independent electrodes with build-in autoconfiguration. Thanks to the I2C interface, you can detect all the 12 electrodes signals with only one Grove port, and the I2C address is hardware configurable, from 0X5B to 0X5D. This also makes it possible for multiple
**Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)** to be used together for channel expansions in a single system, you can build a touch system that contains max. 36 electrodes.

<iframe width="800" height="450" src="https://www.youtube.com/embed/CPq4VSAXBgI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121-p-4694.html
" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version Change

|Item| Grove - 12 Key Capacitive I2C Touch Sensor V2 | Grove - I2C Touch Sensor |
|---|---|---|
|Main Chip|MPR121|MPR121|
|I2C Address|changeable(0X5B ~ 0X5D)|unmodifiable(0X5A)|
|Touch Sensor Feeler|x|√|
|Input Interface|alligator interface|DIP 2Pin Female Header|
|Cost Performance|High|Low|
|Release Time|September 11-2018|October 31-2015|

## Features

- Internal 10-bit ADC
- Integrated independent autocalibration for each electrode input
- Completely independent electrodes with built-in autoconfiguration
- I2C interface, with IRQ, Interrupt output to advise electrode status changes
- Hardware configurable I2C address
- 12 electrodes/capacitance sensing inputs in which 8 are multifunctional for LED driving and GPIO
- Autoconfiguration of charge current and charge time for each electrode input
- Separate touch and release trip thresholds for each electrode, providing hysteresis and electrode independence
- Add two more GND pin and expand the gap of pins for safe handling

## Applications

- PC Peripherals
- MP3 Players
- Remote Controls
- Mobile Phones
- Lighting Controls

## Hardware Overview

### Pin Map

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Grove%20-%2012%20Key%20Capacitive%20I2C%20Touch%20Sensor%20V3%20(MPR121)/Touch-sensor-V3-with-GND.png"/></div>

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/Grove%20-%2012%20Key%20Capacitive%20I2C%20Touch%20Sensor%20V3%20(MPR121)/V3-data.png"/></div>

:::tip
For the CH0 ~ CH11, once the electrode capacitance data is acquired, the electrode touch/release status is determined comparing it to the capacitance baseline value. And you can set the baseline value for each channel separately. The Pin12 ~ Pin19 is multifunctional, which means you can configure them as GPIO or LED driver, for more detail, please refer to the freescale application note [AN3894](https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/AN3894.pdf).

:::

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  |

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Project

This is the introduction Video of this product, simple demos, you can have a try.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ds7kBVdeY4U?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

**Leaf Piano**: We made a piano using a touch sensor, as well as leaves for piano keys.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/leaf-piano-5261a6/embed' width='350'></iframe>

**Play with Scratch**: How to play a scratch game with a Touch Sensor?

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/play-mario-using-new-grove-touch-sensor-b3f9fc/embed' width='350'></iframe>

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
