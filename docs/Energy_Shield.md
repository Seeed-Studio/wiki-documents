---
name: Energy Shield
category: Shield
bzurl: https://seeedstudio.com/Energy-Shield-p-1373.html
oldwikiname: Energy_Shield
prodimagename: Energy_Shield.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/106030000 1.jpg
surveyurl: https://www.research.net/r/Energy_Shield
sku: 106030000
---

![](https://raw.githubusercontent.com/SeeedDocument/Energy_Shield/master/img/Energy_Shield.jpg)

Energy Shield is a LiPo battery based power shield that keeps your project alive. It keeps its battery charged whenever an available power source exists. It accepts a wide range of power sources, from common solar cells via JST connector and USB via USB port on microcontroller, to 9V and 12V DC adapters via DC Jack on your Arduino. Meanwhile it can not only provide power for your Arduino project, with a standard USB port populated on the shield, it’s also capable of rescuing your mobile electric devices from dying batteries, such as mobile phone, mp3 and tablet.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/energy-shield-p-1373.html)

Features
--------

-   Accept wide range of power inputs
-   Overvoltage protection
-   85%+ high power conversion efficiency
-   Comprehensive LEDs indicators for charging and working status

Specifications
--------------

**Power Output Specifications**

| Item    | Min | Typical | Max | Unit |
|---------|-----|---------|-----|------|
| voltage | 4.9 | 5       | 5.1 | V    |
| current | 5   | /       | 750 | mA   |

**Power Input Specifications via JST Connector**

| Item               | Min | Typical | Max | Unit |
|--------------------|-----|---------|-----|------|
| Effective Voltage  | 4.5 | 5       | 5.5 | V    |
| Current            | 1   | /       | 800 | mA   |
| Protection Voltage | /   | /       | 12  | V    |

**Working Mode Explanation**

Energy shield can draw current from three different ports to charge the battery, including JST connector, USB port @ Arduino and DC jack. The voltage ranges vary as below:

![](https://raw.githubusercontent.com/SeeedDocument/Energy_Shield/master/img/Working_Mode_Explanation.jpg)

When input voltage is under 6.6V, you can switch the working mode of Energy Shield between “Charge” and “ON” via the working mode select switch. In “Charge” condition, Lipo battery doesn’t output but only pull current from any existing power source. In “ON” condition, the battery gets charged as well as supplies power to the whole system.

However when input voltage exceeds 6.6V, Energy Shield is forced to enter the “Charge” mode regardless of the switch status.

## Compatibility

We have produced a lot of extension board that can make your platform board more powerful, however not every extension board is compatible with all the platform board, here we use a table to illustrate how are those boards compatible with platform board.

!!!note
    Please note that "Not recommended" means that it might have chance to work with the platform board however requires extra work such as jump wires or rewriting the code. If you are interested in digging more, welcome to contact with techsupport@seeed.cc.

**Click to see full picture**
[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/Shield%20Compatibility.png)](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/Shield%20Compatibility.png)


## Hardware Overview
---------

![](https://raw.githubusercontent.com/SeeedDocument/Energy_Shield/master/img/Energy_Shield_Interface_V2.0.jpg)

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

Solar panel is one of the most common green power sources we use. The typical output of one unit is around 5V. We provide [lots of solar panels](http://www.seeedstudio.com/s/solar%20panel.html) at our store. They are all pre-assembled with JST connencors which can seamlessly match up with Energy Shield. 

Plug solar panel into JST socket on the shield as below.

<div class="admonition note">
<p class="admonition-title">Note</p>
Make sure there is sufficient light to provide considerable current.
</div>

![](https://raw.githubusercontent.com/SeeedDocument/Energy_Shield/master/img/Charge_using_Solar_Panel_.jpg)

Now, press down SW2. You will find the "Charge" indicator LED lights up. The other indicator "Capacity" indicates remaining power of battery. When the remaining power is below 30%, it turns red. When remaining power is between 30% - 80%, it turns yellow. Otherwise it's green.

![](https://raw.githubusercontent.com/SeeedDocument/Energy_Shield/master/img/Remaining_power_indicator.jpg)

**2) 9V Adaptor**    

If you are using a DC adaptor to supply power to your project, then 9V adaptor won't be unfamiliar to you. By connecting a 9V adapter to DC Jack of Arduino, you can run your project as well as charge the battery simultaneously.

 
![](https://raw.githubusercontent.com/SeeedDocument/Energy_Shield/master/img/Charge_using_9V_Jack.jpg)



### 2. Shield power for device

**1) Supply Power For Arduino**

![](https://raw.githubusercontent.com/SeeedDocument/Energy_Shield/master/img/Charge_for_Arduino.jpg)

Switch the working mode select switch to "ON". Check on the power indicator LED on Arduino to see if it works appropriately.

**2) Supply Power For Mobile Devices**

![](https://raw.githubusercontent.com/SeeedDocument/Energy_Shield/master/img/Charge_for_Phone.jpg)

Use the standard USB port on the shield to supply power to mobile devices.

### 3. Conversion Efficiency

![](https://raw.githubusercontent.com/SeeedDocument/Energy_Shield/master/img/Convert_effect.jpg)

The graph above describes the conversion efficiency of boost circuit of Energy Shield. Boost circuit boosts the voltage of Lipo battery, which is typically 4.2V or 3.7V with the drop of remaining power, to 5V and supplies outward. You can find this conversion efficiency peaks when output current is around 200mA.

Resources
---------

- [Energy Shield Eagle File](https://raw.githubusercontent.com/SeeedDocument/Energy_Shield/master/res/Energy_Shield_Eagel_File.zip)
- [CN3065 Datasheet](http://www.consonance-elec.com/pdf/datasheet/DSE-CN3065.pdf)
- [ISL97516 Datasheet](https://raw.githubusercontent.com/SeeedDocument/Energy_Shield/master/res/ISL97516.pdf)
- [LM293D Datasheet](https://raw.githubusercontent.com/SeeedDocument/Energy_Shield/master/res/LM293D.pdf)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Energy_Shield -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>