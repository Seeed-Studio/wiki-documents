---
name: Bluetooth Multimeter
category: MakerPro
bzurl: https://www.seeedstudio.com/Bluetooth-Multimeter-p-1535.html
oldwikiname: Bluetooth Multimeter
prodimagename: Bluetooth_Multimeter.jpg
surveyurl: https://www.research.net/r/Bluetooth_Multimeter
sku:  104990077
---

Bluetooth Multimeter is an intelligent peripheral of android phones, specially designed for engineers. Not only can it easily collect data such as voltage, current and resistance etc., this multimeter can also communicate with phones via bluetooth. Thus, the data gathered will be displayed on your phones. Continuous optimization of hardware and software guarantees this multimeter’s measurement accuracy.

![](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/img/Bluetooth_Multimeter.jpg)

Both its hardware and software are open source! Besides, we also provide API as well as detailed instructions, making this Bluetooth Multimeter an open platform for developers to use and re-develop more conveniently. It can gather data of various sensors, such as heartbeat, and then transmit it to smartphones for data-monitoring. The perfect combination of hardware and software provides infinite possibility for your application and exploitation.

This Bluetooth Multimeter features a built-in lithium battery and rechargeable circuit. Strict control of power consumption in the software ensures the easy application of this product. Acrylic shell makes it easy to assemble on the one hand, and makes the product stable and reliable on the other hand.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Multimeter-p-1535.html)

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
![](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/img/产品视图.png)

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

![](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/img/BT_Multimater_Work_Principle_1.jpg)

##   Demonstration
---
This Bluetooth Multimeter is a portable multimeter, a device that gathers the voltage, resistance and current. And it can sent these data to other devices via Bluetooth, so that we could observe the data through other devices. Next we will demonstrate you how to use it.

**Pair phone and Bluetooth Multimeter  **

*   1) Download [the application program package:SmartMeter](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/res/SmartMeterWithUI_Installation_package.zip) and install it.

*   2) Then click the application icons of the SmartMeter to run, at the moment it will appear a Bluetooth permission request when you have not open phone bluetooth.  Click "YES" to open bluetooth .
![](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/img/BT_request.JPG)

*   3) After entering to UI interface, turn on the red application switch, it will display 0.0 on the screen.
![](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/img/BT_Switch.jpg)

*   4) Click Bluetooth icon to select device.
![](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/img/BT_device.jpg)

*   5) Please select BT MULTIMETER device to pair with your phone.  While BT MULTIMETER device do not exit, you need to click "Scan for device" to search it.
![](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/img/Bt_list_device.JPG)

Note: While there are neither BT MULTIMETER device to select nor the ”Scan for device” option to search, you can firstly use phone to paire with Bluetooth Multimeter and run the app after paired.

*   6) Input "0000"(default for bluetooth multimeter) or "1234" for bluetooth pair. and you'd better observe the pairing indicator, helps you to judge whether the pairing is successful.
![](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/img/Pair.JPG)

*   7) Congratulations on your completing the paired.
![](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/img/UI_Interface.jpg)

**Measure  **

Like other Multimeters, the bluetooth multimeter  have several notes in using, for example: donot measure resistance when you supply power for it. So we suggest strongly you to read the notes of multimters for fear that the device cannot use normally.

**Measure Resistance**
 Now let’s measure resistance. When Android App and Multimeter are connected, choose resistance (i.e. move the cursor to Ω), Audio line connecte to the connector(marked R) of Bluetooth Multimeter.

![](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/img/Om.JPG)

**Measure Voltage**
 It’s  very simple to measure the voltage. Just move the cursor of the Android App to V, and move the Audio line to VOL connector, then you can see the value of voltage.

![](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/img/V.JPG)

 The method of measuring current is as same as other multimeter. Need to remind you that select correct current range.

<font color="blue">Note: It is necessary to check whether audio line is connected to corresponding connector and the cursor is in correct place in order to own precise data.</font>

##   Reference
---
###   The UI Interface

We have three Android App UI for Bluetooth Multimeter.

|UI 1.jpg|UI 2.jpg|UI 3.jpg|
|---|---|---|
|![](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/img/UI_1.jpg)|![](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/img/UI_2.jpg)|![](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/img/UI_3.jpg)

We consistency agreed that the color of the previous two versions are not bright, it should use the orange and black or red and black two multimeter universal tone; At the same time, We increase Hold button, Range button, dial (mA, A, Ω, V, OFF (optional) five stalls)in the yellow version. And We post about which version do you like. Below is the feedback information:

![](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/img/Red_Version.jpg)

![](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/img/GreenSumsung.jpg)

![](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/img/Yellow.jpg)

###   The Structure and Appearance

**Effect Drawing**

![](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/img/BT_effect.jpg)

**Printed Picture**

![](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/img/Printed_Picture.jpg)

##   Resource
---
- [Bluetooth Multimater Eagle File](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/res/Bluetooth_Multimater_Eagle_File.zip)
- [File: Bluetooth Multimeter Library](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/res/SmartMultimeter_Library.zip)
- [The application program package:SmartMeter](https://github.com/SeeedDocument/Bluetooth_Multimeter/raw/master/res/SmartMeterWithUI_Installation_package.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>