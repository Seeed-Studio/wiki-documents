---
description: Energy_Shield
title: Energy Shield
tags:
  - Shield
  - energy
keywords:
  - Shield
  - energy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Energy_Shield
last_update:
  date: 01/11/2023  
  author: Eico 

no_comments: false # for Disqus

---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Energy_Shield.jpg" alt="pir" width={600} height="auto" /></p>

Energy Shield is a LiPo battery based power shield that keeps your project alive. It keeps its battery charged whenever an available power source exists. It accepts a wide range of power sources, from common solar cells via JST connector and USB via USB port on microcontroller, to 9V and 12V DC adapters via DC Jack on your Arduino. Meanwhile it can not only provide power for your Arduino project, with a standard USB port populated on the shield, it’s also capable of rescuing your mobile electric devices from dying batteries, such as mobile phone, mp3 and tablet.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/energy-shield-p-1373.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Features

- Accept wide range of power inputs
- Overvoltage protection
- 85%+ high power conversion efficiency
- Comprehensive LEDs indicators for charging and working status

## Specifications

**Power Output Specifications**

<table align="center">
  <tbody>
  <tr>
    <td><h3>Item</h3></td>
    <td><h3>Min</h3></td>
    <td><h3>Typical</h3></td>
    <td><h3>Max</h3></td>
    <td><h3>Unit</h3></td>
  </tr>
  <tr>
    <td><h4>voltage</h4></td>
    <td><h4>4.9</h4></td>
    <td><h4>5</h4></td>
    <td><h4>5.1</h4></td>
    <td><h4>V</h4></td>
  </tr>
  <tr>
    <td><h4>current</h4></td>
    <td><h4>5</h4></td>
    <td><h4>/</h4></td>
    <td><h4>750</h4></td>
    <td><h4>mA</h4></td>
  </tr>
  </tbody></table>

**Power Input Specifications via JST Connector**

| Item               | Min | Typical | Max | Unit |
|--------------------|-----|---------|-----|------|
| Effective Voltage  | 4.5 | 5       | 5.5 | V    |
| Current            | 1   | /       | 800 | mA   |
| Protection Voltage | /   | /       | 12  | V    |

<table align="center">
  <tbody>
  <tr>
    <td><h3>Item</h3></td>
    <td><h3>Min</h3></td>
    <td><h3>Typical</h3></td>
    <td><h3>Max</h3></td>
    <td><h3>Unit</h3></td>
  </tr>
  <tr>
    <td><h4>Effective Voltage</h4></td>
    <td><h4>4.5</h4></td>
    <td><h4>5</h4></td>
    <td><h4>5.5</h4></td>
    <td><h4>V</h4></td>
  </tr>
  <tr>
    <td><h4>current</h4></td>
    <td><h4>1</h4></td>
    <td><h4>/</h4></td>
    <td><h4>800</h4></td>
    <td><h4>mA</h4></td>
  </tr>
  <tr>
    <td><h4>Protection Voltage</h4></td>
    <td><h4>/</h4></td>
    <td><h4>/</h4></td>
    <td><h4>12</h4></td>
    <td><h4>V</h4></td>
  </tr>
  </tbody></table>

**Working Mode Explanation**

Energy shield can draw current from three different ports to charge the battery, including JST connector, USB port @ Arduino and DC jack. The voltage ranges vary as below:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Working_Mode_Explanation.jpg" alt="pir" width={600} height="auto" /></p>

When input voltage is under 6.6V, you can switch the working mode of Energy Shield between “Charge” and “ON” via the working mode select switch. In “Charge” condition, Lipo battery doesn’t output but only pull current from any existing power source. In “ON” condition, the battery gets charged as well as supplies power to the whole system.

However when input voltage exceeds 6.6V, Energy Shield is forced to enter the “Charge” mode regardless of the switch status.

## Hardware Overview

---------
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Energy_Shield_Interface_V2.0.jpg" alt="pir" width={600} height="auto" /></p>

**Hardware Config**

U1: ISL97516 IC, boost chip;

U3: CN3065 IC, charge management chip;

U4,U8: LM293D IC, dual differential comparators;

Charge Indicator: it lights in charging status;

Capacity Indicator: indicate the remaining life of battery;

SW2 Button: check the capacity of battery;

**Pins Used on Arduino**

Vin pin: convey power from DC jack to charge battery;

5V pin: convey power from USB port to charge battery;

**Other Interfaces**

JST socket：provided for external power sources that requires JST connector, like solar panel;

Battery socket: used to hook up LiPo battery;

USB port: output 5V for other devices;

Usage
-----

### 1. Charge Examples

You can charge the Lipo battery with massive external power sources. Here we show you usages of two common powersources.

**1) Solar Panel**

Solar panel is one of the most common green power sources we use. The typical output of one unit is around 5V. We provide [lots of solar panels](https://www.seeedstudio.com/s/solar%20panel.html) at our store. They are all pre-assembled with JST connencors which can seamlessly match up with Energy Shield.

Plug solar panel into JST socket on the shield as below.

:::note
Make sure there is sufficient light to provide considerable current.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_using_Solar_Panel_.jpg" alt="pir" width={600} height="auto" /></p>

Now, press down SW2. You will find the "Charge" indicator LED lights up. The other indicator "Capacity" indicates remaining power of battery. When the remaining power is below 30%, it turns red. When remaining power is between 30% - 80%, it turns yellow. Otherwise it's green.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Remaining_power_indicator.jpg" alt="pir" width={600} height="auto" /></p>

**2) 9V Adaptor**

If you are using a DC adaptor to supply power to your project, then 9V adaptor won't be unfamiliar to you. By connecting a 9V adapter to DC Jack of Arduino, you can run your project as well as charge the battery simultaneously.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Remaining_power_indicator.jpg" alt="pir" width={600} height="auto" /></p>

![](https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_using_9V_Jack.jpg)

### 2. Shield power for device

**1) Supply Power For Arduino**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_for_Arduino.jpg" alt="pir" width={600} height="auto" /></p>

Switch the working mode select switch to "ON". Check on the power indicator LED on Arduino to see if it works appropriately.

**2) Supply Power For Mobile Devices**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Charge_for_Phone.jpg" alt="pir" width={600} height="auto" /></p>

Use the standard USB port on the shield to supply power to mobile devices.

### 3. Conversion Efficiency

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Energy_Shield/img/Convert_effect.jpg" alt="pir" width={600} height="auto" /></p>

The graph above describes the conversion efficiency of boost circuit of Energy Shield. Boost circuit boosts the voltage of Lipo battery, which is typically 4.2V or 3.7V with the drop of remaining power, to 5V and supplies outward. You can find this conversion efficiency peaks when output current is around 200mA.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Energy_Shield/res/Energy_Shield_Eagel_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- [Energy Shield Eagle File](https://files.seeedstudio.com/wiki/Energy_Shield/res/Energy_Shield_Eagel_File.zip)
- [CN3065 Datasheet](http://www.consonance-elec.com/pdf/datasheet/DSE-CN3065.pdf)
- [ISL97516 Datasheet](https://files.seeedstudio.com/wiki/Energy_Shield/res/ISL97516.pdf)
- [LM293D Datasheet](https://files.seeedstudio.com/wiki/Energy_Shield/res/LM293D.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Energy_Shield -->

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
