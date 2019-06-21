---
name: Bluetooth Shield V2.0
category: Shield
bzurl: https://www.seeedstudio.com/Bluetooth-Shield-V2-p-2416.html
oldwikiname: Bluetooth Shield V2.0
prodimagename: Bluetooth_Shiled_v2.JPG
surveyurl: https://www.research.net/r/Bluetooth_Shield_V2
sku:  113030019
---

![](https://github.com/SeeedDocument/Bluetooth_Shield_V2/raw/master/img/Bluetooth_Shiled_v2.JPG)

The Bluetooth Shield integrates a Serial Bluetooth module. It can be easily used with Arduino/Seeedstudio for transparent wireless serial communication. You can choose two pins from Arduino D0 to D7 as Software Serial Ports to communicate with Bluetooth Shield (D0 and D1 is Hardware Serial Port). The shield also has two Grove connectors (one is Digital, the other is Analog) for you to install Grove modules.

##   Features
---
*   Input Voltage: 3.3V
*   Baudrate: 9600, 19200, 38400, 57600, 115200, 230400, 460800
*   Seeeduino/Arduino compatible
*   Up to10m communication distance in house without obstacle
*   UART interface (TTL) with programmable baud rate
*   Default Baud rate: 9600, Data bits: 8, Stop bit: 1, Parity: No parity
*   Default PINCODE:”1234”
*   A full set of configuration commands
*   On board PCB Antenna

##   Interface function
---
![](https://github.com/SeeedDocument/Bluetooth_Shield_V2/raw/master/img/Bluetooth_Shield_V2.0_K.jpg)

<table >
<tr>
<th> Pad Type
</th>
<th> Description
</th></tr>
<tr>
<td> BT_IO
</td>
<td> IO Port of Bluetooth module can be control: read, write.
</td></tr>
<tr>
<td> BT_RX
</td>
<td> UART Data input of Bluetooth module.
</td></tr>
<tr>
<td> BT_TX
</td>
<td> UART Data output Bluetooth module.
</td></tr>
<tr>
<td> Two Grove connectors
</td>
<td> One is Digital (D8 and D9), the other is I2C/Analog (A4 and A5).
</td></tr></table>



##   Demonstration

### 1：Two Bluetooth Shield Connect

This demo will show you how to connect two Bluetooth shield.

You need two piece of [Seeeduino V3.0](http://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7),
One Bluetooth Shield as Master while the other as Slave.

**Hardware Installation **

as folowing:

![](https://github.com/SeeedDocument/Bluetooth_Shield_V2/raw/master/img/Bluetooth_shield_demo_image0.png)

make sure the right connection of the jumpers

![](https://github.com/SeeedDocument/Bluetooth_Shield_V2/raw/master/img/Bluetooth_shield_demo_image4.jpg)

**Download Code and Upload **

1.  You can download the code in github, click [here](https://github.com/Seeed-Studio/Bluetooth_Shield_V2_Demo_Code/archive/master.zip),then extract it to libraries folder of Arduino.

2.  Open Arduino IDE, open File -&gt; Examples -&gt; Bluetooth_Shield_V2_Demo_Code -&gt; Master_Button, then you can open the code of Master

3.  Open Arduino IDE, open File -&gt; Examples -&gt; Bluetooth_Shield_V2_Demo_Code -&gt; Slave_led, then you can open the code of Slave

4.  Click Upload to Upload the code, if you have any problem about how to start Arduino, please click [here](/Getting_Started_with_Seeeduino) for some help.


![](https://github.com/SeeedDocument/Bluetooth_Shield_V2/raw/master/img/Bluetooth_ide_1.jpg)


**Check The Result**

1.  After finish Uploading the code to both Master and Slave, reset the two devices meanwhile

2.  You can see the led blink, indicate that devices was initializing and connecting.

3.  After about servel seconds, led on, indicate that Master and Slave had connected.

!!!Note
    If the phenomenon is not observed above, try unplugging the power and re-plug in again.


### 2：Connect to Smart Phone

This demo will show you how to connect Bluetooth Shield to a Smart Phone.

We need a Seeeduino V3.0, a Smart Phone that with Bluetooth function.

Via a Bluetooth SPP App

**Hardware Installation**

![](https://github.com/SeeedDocument/Bluetooth_Shield_V2/raw/master/img/Bluetooth_shield_demo_image1.png)

**Download Code and Upload**

1.  You can download the code in github, click [here](https://github.com/Seeed-Studio/Bluetooth_Shield_V2_Demo_Code/archive/master.zip),then extract it to libraries folder of Arduino.

2.  Open Arduino IDE, File -&gt; Examples -&gt; Bluetooth_Shield_V2_Demo_Code -&gt; Slave_Temperature, then you can open the code

3.  Click Upload to Upload the code, if you have any problem about how to start Arduino, please click [here](/Getting_Started_with_Seeeduino) for some help.

![](https://github.com/SeeedDocument/Bluetooth_Shield_V2/raw/master/img/Bluetooth_Shield_Demo2.jpg)


**Download a SSP App**

Here we us an Ardriod Phone, Mine is a Xiaomi 2A, open Google Play, search bluetooth spp, you can find many results.

![](https://github.com/SeeedDocument/Bluetooth_Shield_V2/raw/master/img/Bluetooth_Shield_Find_spp.png)

Most of this app are useful, just choose one and have try.

**Get Temperature**

After installing an SPP app, try connecting it to SeeedBTSlave, pin code is: "0000"

![](https://github.com/SeeedDocument/Bluetooth_Shield_V2/raw/master/img/Bluetooth_Shield_App_1.png)

When connect is ok, send 't' to SeeedBTSlave, and you can get the temperature now:

![](https://github.com/SeeedDocument/Bluetooth_Shield_V2/raw/master/img/Bluetooth_Shield_get_temp.png)

##   Resources
*   [Schematic and Layout in Eagle format](https://github.com/SeeedDocument/Bluetooth_Shield_V2/raw/master/res/Bluetooth_en.pdf)

*   [module Datasheet](https://github.com/SeeedDocument/Bluetooth_Shield_V2/raw/master/res/Bluetooth_en.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>