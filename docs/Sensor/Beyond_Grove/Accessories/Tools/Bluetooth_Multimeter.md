---
title: Bluetooth Multimeter
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Bluetooth_Multimeter/
slug: /Bluetooth_Multimeter
last_update:
  date: 02/03/2022
  author: gunengyu
---


Bluetooth Multimeter is an intelligent peripheral of android phones, specially designed for engineers. Not only can it easily collect data such as voltage, current and resistance etc., this multimeter can also communicate with phones via bluetooth. Thus, the data gathered will be displayed on your phones. Continuous optimization of hardware and software guarantees this multimeter’s measurement accuracy.

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Bluetooth_Multimeter.jpg)

Both its hardware and software are open source! Besides, we also provide API as well as detailed instructions, making this Bluetooth Multimeter an open platform for developers to use and re-develop more conveniently. It can gather data of various sensors, such as heartbeat, and then transmit it to smartphones for data-monitoring. The perfect combination of hardware and software provides infinite possibility for your application and exploitation.

This Bluetooth Multimeter features a built-in lithium battery and rechargeable circuit. Strict control of power consumption in the software ensures the easy application of this product. Acrylic shell makes it easy to assemble on the one hand, and makes the product stable and reliable on the other hand.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Multimeter-p-1535.html)

##   Specifications
---
<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Item
</th>
<th scope="col"> Min
</th>
<th scope="col"> Typical
</th>
<th scope="col"> Max
</th>
<th scope="col"> Unit
</th></tr>
<tr>
<th scope="row"> Voltage Measurement Range
</th>
<td> -30
</td>
<td> -
</td>
<td> 30
</td>
<td> VDC
</td></tr>
<tr>
<th scope="row"> Voltage Measurement Precision
</th>
<td colspan="3"> 3
</td>
<td>  %
</td></tr>
<tr>
<th scope="row"> Current Measurement Range(Max)
</th>
<td colspan="3"> 1
</td>
<td> A
</td></tr>
<tr>
<th scope="row"> Current Measurement Precision
</th>
<td colspan="3"> 3
</td>
<td>  %
</td></tr>
<tr>
<th scope="row"> Resistance Measurement Range
</th>
<td> 10
</td>
<td> -
</td>
<td> 1,000,000
</td>
<td> Ω
</td></tr>
<tr>
<th scope="row"> Voltage Measurement Precision
</th>
<td colspan="3"> 5
</td>
<td>  %
</td></tr>
<tr>
<th scope="row"> Work Temperature
</th>
<td> 0
</td>
<td> -
</td>
<td> 45
</td>
<td> ℃
</td></tr></table>

##  Product Overview
---
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/产品视图.png)

*   ①： USB Interface. Not only can provide the power, but also charge for the built-in battery. We select a lithium battery which capacity is 500mAh, it is expected to be able to use 10h.
*   ②：Programming connector for Serial Bluetooth.
*   ③：Bluetooth Multimeter power switch.
*   ④：Pairing indicator.
<dl><dd>Red indicator and blue indicator will flash alternatively --- during pairing
</dd><dd>Blue indictor will flash --- paired
</dd></dl>


*   ⑤：Charge indicator.
<dl><dd>Red indicator light - in charging
</dd><dd>Green indicator light - charge completely.
</dd></dl>

*   ⑥：Data transfer indicator. when transferring data, it will flash.
*   ⑦：Audio Connector for measuring the resistance.
*   ⑧：Audio Connector for measuring the voltage.
*   ⑨：Audio Connector for measuring the current.
*   ⑩：Current Gear Select Switch.

##   Work Chart
---
The Bluethooth Multimeter and Android device work sketch map as show below:

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_Multimater_Work_Principle_1.jpg)

##   Demonstration
---
This Bluetooth Multimeter is a portable multimeter, a device that gathers the voltage, resistance and current. And it can sent these data to other devices via Bluetooth, so that we could observe the data through other devices. Next we will demonstrate you how to use it.

**Pair phone and Bluetooth Multimeter  **

*   1) Download [the application program package:SmartMeter](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/SmartMeterWithUI_Installation_package.zip) and install it.

*   2) Then click the application icons of the SmartMeter to run, at the moment it will appear a Bluetooth permission request when you have not open phone bluetooth.  Click "YES" to open bluetooth .
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_request.JPG)

*   3) After entering to UI interface, turn on the red application switch, it will display 0.0 on the screen.
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_Switch.jpg)

*   4) Click Bluetooth icon to select device.
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_device.jpg)

*   5) Please select BT MULTIMETER device to pair with your phone.  While BT MULTIMETER device do not exit, you need to click "Scan for device" to search it.
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Bt_list_device.JPG)

Note: While there are neither BT MULTIMETER device to select nor the ”Scan for device” option to search, you can firstly use phone to paire with Bluetooth Multimeter and run the app after paired.

*   6) Input "0000"(default for bluetooth multimeter) or "1234" for bluetooth pair. and you'd better observe the pairing indicator, helps you to judge whether the pairing is successful.
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Pair.JPG)

*   7) Congratulations on your completing the paired.
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_Interface.jpg)

**Measure  **

Like other Multimeters, the bluetooth multimeter  have several notes in using, for example: donot measure resistance when you supply power for it. So we suggest strongly you to read the notes of multimters for fear that the device cannot use normally.

**Measure Resistance**
 Now let’s measure resistance. When Android App and Multimeter are connected, choose resistance (i.e. move the cursor to Ω), Audio line connecte to the connector(marked R) of Bluetooth Multimeter.

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Om.JPG)

**Measure Voltage**
 It’s  very simple to measure the voltage. Just move the cursor of the Android App to V, and move the Audio line to VOL connector, then you can see the value of voltage.

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/V.JPG)

 The method of measuring current is as same as other multimeter. Need to remind you that select correct current range.

<font color="blue">Note: It is necessary to check whether audio line is connected to corresponding connector and the cursor is in correct place in order to own precise data.</font>

##   Reference
---
###   The UI Interface

We have three Android App UI for Bluetooth Multimeter.

|UI 1.jpg|UI 2.jpg|UI 3.jpg|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_1.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_2.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_3.jpg)

We consistency agreed that the color of the previous two versions are not bright, it should use the orange and black or red and black two multimeter universal tone; At the same time, We increase Hold button, Range button, dial (mA, A, Ω, V, OFF (optional) five stalls)in the yellow version. And We post about which version do you like. Below is the feedback information:

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Red_Version.jpg)

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/GreenSumsung.jpg)

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Yellow.jpg)

###   The Structure and Appearance

**Effect Drawing**

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_effect.jpg)

**Printed Picture**

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Printed_Picture.jpg)


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/Bluetooth_Multimater_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##   Resource
---
- [Bluetooth Multimater Eagle File](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/Bluetooth_Multimater_Eagle_File.zip)
- [File: Bluetooth Multimeter Library](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/SmartMultimeter_Library.zip)
- [The application program package:SmartMeter](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/SmartMeterWithUI_Installation_package.zip)

## Tech Support
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>