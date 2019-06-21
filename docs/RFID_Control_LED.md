---
name: RFID Control LED
category: Tutorial
oldwikiname:  RFID Control LED
prodimagename:
surveyurl: https://www.research.net/r/RFID_Control_LED
---

125KHz RFID Reader can read data from RFID tag. It's can use for some IoT or Intelligent Control System.

This demo will show you how to Read data from RFID tag, and control a LED.

**Hardware Required：**

*   Arduino

*   125KHz RFID Reader

*   RFID tag

**Circuit：**

RFID Reader connect to D2, D3.

![](https://github.com/SeeedDocument/RFID_Control_LED/raw/master/img/Sidekick_39_1.png)

**Code:**

RFID Reader module has internal control IC which make it easy to control. When there's a RFID tag close to the Reader, then it'll output the ID of the tag via UART.

You can do some processing in the code for different ID.

The folowing code didn't judge the ID, whatever tag close to Reader, it can change the state of the led.

Open Arduino IDE, click File -&gt; Sketchbook -&gt; RFID Reader.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>