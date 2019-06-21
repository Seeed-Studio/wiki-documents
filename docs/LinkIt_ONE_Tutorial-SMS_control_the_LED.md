---
name: LinkIt ONE Tutorial - SMS control the LED
category: Tutorial
oldwikiname:  LinkIt ONE Tutorial - SMS control the LED
prodimagename:
surveyurl: https://www.research.net/r/LinkIt_ONE_Tutorial-SMS_control_the_LED
---
**What We're Doing**

In this section, we achieve some cool function. Outstanding characteristic of LinkIt One is integrated with the communication module. We are following through GSM communication module to transmit messages, the switch state to pass to change LED. This will be exciting. First connect with the antenna, and then insert a SIMCARD into the slot of the LinkIt One, then according to the schematic connected circuit. Use a mobile phone with GSM, edit the message content ON or OFF, send the specified number (the SIM number), now you can control the LED switch state, And global synchronization.

**Things you need**

*   LinkIt One x 1

*   Break board x 1

*   Resistors 1kΩ,330Ω x 1

*   Transistor（2N3904） x 1

*   GIS ANT x 1

**Schematic**

![](https://github.com/SeeedDocument/LinkIt_ONE_Tutorial-SMS_control_the_LED/raw/master/img/LinkItONE_Kit_1_1.jpg)

**Connection**

![](https://github.com/SeeedDocument/LinkIt_ONE_Tutorial-SMS_control_the_LED/raw/master/img/LinkItONE_Kit_1_2.png)

**Code**

Please click on the button below to download the code for the kit:

[![](https://github.com/SeeedDocument/LinkIt_ONE_Tutorial-SMS_control_the_LED/raw/master/img/Code_sidekick_linkit.png)](https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt)

You can unzip the file to the **Examples** folder of your Arduino IDE.

To access the demo code open:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Basic -&gt; L9_SMS_Light_

*   Antenna do not work ?

    *   Attention to check the antenna connection is stable connection. (Antenna socket on the back, marked as GSM-ANT)

*   Send the message without response？

    *   SIMCARD need to unlock free version. (That is not limited to any telephone mobile phone SIMCARD)

**Making it better**

Perfect with the GSM module communication function. If we want to do a short time, how to modify the code? Set a time of 60 seconds (send form ON60). Send a message to set the lighting automatically extinguished in a minute after arrival.

To access the demo code open:

_File -&gt; Examples -&gt; Starter Kit for LinkIt -&gt; Extend_Lesson –&gt; L10_SMS_Light_Advanced_

**More ideas**

With Bluetooth, GPS, Wi-Fi function module. What a look whether to have the new play?

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