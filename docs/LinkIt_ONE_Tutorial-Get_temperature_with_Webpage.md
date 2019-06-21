---
name: LinkIt ONE Tutorial - Get temperature with Webpage
category: Tutorial
oldwikiname:  LinkIt ONE Tutorial - Get temperature with Webpage
prodimagename:  
surveyurl: https://www.research.net/r/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage
---
**What We're Doing**

LinkIt One with Wi-Fi communication function. We have collected some data through the LinkIt One.  As the Internet AP to support data access by providing Web Server. Access to the corresponding IP address can get the data with browser. Next step you need to connect circuit, data acquisition from temperature sensor. Then well equipped with Wi-Fi antennas you and connected to the network, please have a choise with the network fill in the three parameters, the network name (WiFi_AP), access password (WIFI_PASSWORD), and transmission mode of router (options LWIFI_OPEN, LWIFI_WPA, LWIFI_WEP). Finally, the code is uploaded to the LinkIt One. Use of terminal device with network, open the browser and enter the IP address will obtain the temperature data. (Visit the IP address assignment via DHCP router access)

**Things you need**

*   LinkIt One x 1

*   Break board x 1

*   Resistors 330Ω x 1
*   Wi-Fi ANT x 1

**Schematic**

![](https://github.com/SeeedDocument/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/raw/master/img/LinkItONE_Kit_10_1.jpg)

**Connection**

![](https://github.com/SeeedDocument/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/raw/master/img/LinkItONE_Kit_10_2.jpg)

**Code**

Please click on the button below to download the code for the kit:

[![](https://github.com/SeeedDocument/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/raw/master/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

You can unzip the file to the **Examples** folder of your Arduino IDE.

To access the demo code open:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L10_Web_Temp_

**Note** that you should open the Serial monitor to input anything to start the program.

**Troubleshooting**

*   Antenna do not work ?

    *   Attention to check the antenna connection is stable connection. (Antenna socket on the back, marked as Wi-Fi/BT ANT)

*   Where is the IP address？

    *   First adjust the serial mode (DEBUG - &gt;MOLDE), you can query through the serial port. Click on the upper right corner of the compiler, magnifying chart. Standard query the assigned IP address. (Please click on  this step to change Tools - &gt;Port - &gt;COMX)

**Making it better**

Do you want to change the data in real time? We through the Web port to monitor a variation of light sensitivity value.

To access the demo code open:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L10_Web_Temp_Advanced_

**More ideas**

If want to control the LinkIt One with web. How control the work of hardware can be?

**Reference**

*   [The Basics](/LinkIt_ONE_Tutorial-The_Basics)

*   [Hello World](/LinkIt_ONE_Tutorial-Hello_World)

*   [Push Button](/LinkIt_ONE_Tutorial-Push_Button)

*   [Marquee](/LinkIt_ONE_Tutorial-Marquee)

*   [Colorful World](/LinkIt_ONE_Tutorial-Colorful_World)

*   [Analog Interface](/LinkIt_ONE_Tutorial-Analog_Interface)

*   [Mini Servo](/LinkIt-ONE-Tutorial---Mini-Servo)

*   [Light Sensor](/LinkIt_ONE_Tutorial-Light-Sensor)

*   [SMS Control the LED](/LinkIt_ONE_Tutorial-SMS_control_the_LED)

*   [Get Temperature with Webpage](/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>