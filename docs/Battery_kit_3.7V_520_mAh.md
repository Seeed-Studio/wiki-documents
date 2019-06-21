---
name:  Battery kit 3.7V 520mAh
category: Discontinued
bzurl:
oldwikiname: Battery_kit-3.7V_520_mAh
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Battery_Kit_3_7V_520mAh
sku:
tags:

---

![](https://github.com/SeeedDocument/Battery-kit-3.7V_520-mAh/raw/master/img/Battery_kit-3.7V_520mAh_Product_View_960.jpg)

Battery kit-3.7V 520mAh contains two items: a 520mAh lithium-ion battery and a battery power detector to measure the power remain in a li-ion battery.

The li-ion battery is very slim, light and cost effective. It output 3.7 V voltage(nominal). You can also charge it with a specialized charger which has maximum input current 520 mA and maximum input voltage 4.2V. This battery comes with pre-attached JST 1.0 connector which is handy to click in and out. It also has built-in overcurrent protection to protect against output short circuit. **Although, please still take caution and do not abuse the battery in usage. Never charge or use it unattended.**

The battery power detector can detect the input voltage range of 3–4.2 volts. There are three JST sockets (JST 1.0, JST 2.0 and JST 2.0) and two battery-soldering pads which will adapt to those batteries with a different connector. As you connect a battery to this battery power detector, the on-board four LEDs will indicate remaining power in percentage (0–25%, 26–50%, 51–75%, 76–100%). Another LED will be on if you plug the connector of battery in the wrong way.

**Note** that there is only one battery reliable to be tested at the same time.

**Note**  that it will damage this battery power detector as the input voltage is above 9 volts.

**Note**  that never use the battery when it is being charged.

###  Version Tracker ###



|Product version | Release date |Support status | Notes|
|---|---|---|---|
| Battery kit-3.7V 520 mAh(first version)|  May 2016 | Supported | None|

[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now.png) ](http://www.seeedstudio.com/depot/Battery-kit37V-520mAh-p-2646.html)

##  Features ##

**For battery**

- For Pre-attached JST 1.0 connector

- Short circuit protection for output circuit

- Cost-effective

**For battery power detector**

- Visual indication to remaining power of a battery

- Different JST sockets for different battery connectors

##  Specifications ##

**For battery**

|Item|Value|
|--|--|
 |Capacity  |520 mAh|
 |Nominal output voltage(DC) | 3.7 volts|
| Connector  | JST 1.0|
  |Maximum Charge Current|  520 mA|
|  Protection | Short circuit protection for output circuit|
 |Weight | 11 g|
  |Dimensions |  50(width)×2.5(height)×41(depth) mm|

**For battery power detector**

|Item|Value|
|---|---|
 |Input voltage | 3 – 4.2V|
 |Operating current |15 mA|
 |Indication manner   |Four LEDs(we will detail it later)|
|Sockets   |Three sockets for different battery connector and two battery-soldering pads(we will detail it later)|
 |Dimensions |  30(width)×25(depth) mm|
 |CN1185| [Datasheet](https://github.com/SeeedDocument/Battery-kit-3.7V_520-mAh/raw/master/res/CN1185_Datasheet.pdf)|
|  Weight | 3.2 g|
 |Notes | Only connect a single battery to this module; The input voltage to this module should less than 9 volts, or that will damage this module.|

###  Platform supported(only for battery) ###



|Platform |Seeeduino/Arduino|  Rasberry Pi |  Beaglebone | LinkIt ONE|
|--|--|--|--|--|
 |Supported status| Supported|  Not supported | Supported(only with [Grove Base Cape for Beaglebone](https://seeeddoc.github.io/Grove_Base_Cape_for_BeagleBone_v2/)) | Not supported|
 |Notes|  If no version number is not represented for a specific platform, it means this product support all versions within this platform.|||||

##  Hardware Overview  ##

This section shows descriptions for components on batter power detector.

![](https://github.com/SeeedDocument/Battery-kit-3.7V_520-mAh/raw/master/img/Battery_kit-3.7V_520mAh_Battery_power_detector_components_description_1200_s.jpg)

- **CN1185**, a voltage monitoring circuit.

- **Battery-soldering pads**, to solder battery's leads on.

### Package includes(main parts)  ###


|Parts name|    Quantity|
|---|
  |Li-ion battery|  1 piece|
  |Battery power detector | 1 piece|

##  Getting Started  ##

Connect battery and battery power detector as following image. You can see LEDs are on indicates actual power remains.

![](https://github.com/SeeedDocument/Battery-kit-3.7V_520-mAh/raw/master/img/Battery_kit-3.7V_520mAh_Battery_power_demo_1200_s.jpg)


##  Resources ##

- **[Eagle]**[Schematic(Eagle) file](https://github.com/SeeedDocument/Battery-kit-3.7V_520-mAh/raw/master/res/Battery_kit-3.7V_520mAh_Schematics.zip)
- **[PDF]**[Battery Detector v1.0 pcb](https://github.com/SeeedDocument/Battery-kit-3.7V_520-mAh/raw/master/res/Battery%20Detector%20v1.0pcb.pdf)
- **[PDF]**[Battery Detector v1.0 sch](https://github.com/SeeedDocument/Battery-kit-3.7V_520-mAh/raw/master/res/Battery%20Detector%20v1.0.pdf)
- **[Datasheet]**[CN1185 Datasheet](https://github.com/SeeedDocument/Battery-kit-3.7V_520-mAh/raw/master/res/CN1185_Datasheet.pdf)
- **[Datasheet]**[Battery Datasheet](https://github.com/SeeedDocument/Battery-kit-3.7V_520-mAh/raw/master/res/Lithium-ion_Battery_3.7V-520mAH_Datasheet.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>