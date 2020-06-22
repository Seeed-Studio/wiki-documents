---
name: Wio Terminal Battery Chassis - Built-in 650mAH Lithium Battery w/ 6 Grove Interfaces
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 103990463
---


![](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png)

<div class="tips" style="display: table; table-layout: fixed; background-color: #ffefd9; height: auto; width: 100%;">
<div class="left-icon" style="display: table-cell; vertical-align: middle; background-color: #ffc983; padding-top: 10px; box-sizing: border-box; height: auto; width: 38px; text-align: center;"><img style="width: 26px; vertical-align: middle;" src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Attention.svg" alt="attention icon" /></div>
<div class="right-desc" style="display: table-cell; vertical-align: middle; padding-left: 15px; box-sizing: border-box; width: calc(95% - 38px);">
<p style="font-weight: bold; margin-top: 10px;">Attention</p>
<p style="font-size: 14px;">1. This version of Wio Terminal battery chassis cannot turn off the power completely (no influence on usage).</p>
<p style="font-size: 14px;">2. The charge current will up to 1.5A, which may reduce battery life or cause other issues.</p>
<p style="font-size: 14px;">We are optimizing the design of the new version (the estimated release date is unavailable yet), and we recommend the new version if you are a beginner.</p>
<p style="font-size: 14px;">*Please contact us (techsupport@seeed.cc) for tech support or exchange if you meet any problem during the usage of this version.</p>
<p style="font-size: 14px;">*Please do <strong>NOT</strong> let the pins touch other objects when the power is on.</p>
<p style="font-size: 14px;"><span></span></p>
</div>
</div>

The Wio Terminal Battery Chassis is a must-have extension board for [Wio-Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) Dev Board as it provides an external power source for Wio Terminal to enhance its portability and compactness. It has **a 650mAH rechargeable lithium polymer battery, 4 Grove Analog/Digital Ports, 1 Grove I2C Port, and 1 Grove UART Port, as well as the ABS enclosure for aesthetic and protection.** There is also the same Raspberry Pi 40-pin compatible GPIO at the back of the Wio Terminal Battery Chassis for more add-ons!

With [Wio-Terminal Dev Board](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) + Wio Terminal Battery Chassis, you are able to build the most powerful and compact IoT projects with no ease. With the extended Grove Ports, you can enjoy the plug and play features of the [Grove Ecosystem](https://www.seeedstudio.com/category/Grove-c-1003.html)!


[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-p-4516.html)

## Feature

- Built-in 650mAh Rechargeable Lithium Polymer Battery
- USB Type-C Charging
- Overcurrent protection
- Hiccup mode/Hiccup Protection
- 4 x Grove Analog/Digital Port
- 1 x Grove I2C Port
- 1 x Grove UART Port
- Magnets are hidden inside the enclosure so that it can be stuck on the Whiteboard!

## Specification

- The Wio Terminal Battery Chassis is either powered by USB Type-C interface or the internal battery. The maximum input current of USB Type-C is 2A, and the input voltage range is **4.75V ~ 5.25V.**

- The built-in battery is a rechargeable lithium-polymer battery, with a capacity of 650mAh. The battery output voltage is 3.7V, with a battery charging voltage of 4.2V.
The battery can only be charged through the USB Type-C interface, and cannot be charged through the female connector or Grove interface.

- The Wio Terminal Battery Chassis standby current is less than 300uA.

- The Wio Terminal Battery Chassis has overcurrent protection when it is powered through the USB Type-C interface, and the current threshold of the overcurrent protection is 2.5A.

- When the Wio Terminal Battery Chassis is short-circuited in battery-powered mode, it will enter hiccup mode. After the short-circuit is removed, it will automatically return to normal power-supply mode.

## Hardware Overview

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/WT-battery-front.jpg"/></div>


## Precautions

- The Wio Terminal Battery Chassis cannot output 3.3V voltage by itself, it can only output 5V voltage. To output 3.3V it must be used with Wio Terminal.
- When the Wio Terminal Battery Chassis is switched from battery charging mode to battery power mode, there will be a 1.2s voltage drop time.
- By default, the Wio Terminal Battery Chassis is powered by the battery when it is not connected to the USB Type-C. After plugs in the USB Type-C, it automatically switches to the USB Type-C for power supply.
- When the Wio Terminal Battery Chassis is plugged into the USB Type-C, it will supply power to both the battery and the RPI_5V pin on the connector. At this time, the battery will not supply power. If the lithium battery is not fully charged, it will stop charges after charging to 100%.

## FAQ

Charging Current:

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/sch.png"/></div>

- This resistor is changed to **680kΩ/1%** to limit the charging current to **450mA**.

## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>

## Resources

- **[ZIP]** [Wio Terminal Battery Chassis Schematics Design File](https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/res/Wio%20Terminal%20Chassis%20-%20Battery_SCH.zip)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
