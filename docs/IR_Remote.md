---
name: IR Remote
category: Tutorial
oldwikiname:  IR Remote
prodimagename:  
surveyurl: https://www.research.net/r/IR_Remote
---
IR is a very common means of communication. This demo will show you how to use IR send and receive module.

Large of household appliances is controled by IR Remote, such as TV, air conditioning and so on.

We can use IR module to control those appliances also.

**Hardware Required：**

*   Arduino

*   IR Emitter

*   IR Receiver

*   Button

**Circuit：**

IR Emitter connect to D3 and IR Receiver connect to A4.

![](https://github.com/SeeedDocument/IR_Remote/raw/master/img/Sidekick_36_1.png)

**Code:**

There are two part of code: get value of Remote and Send command.

Get Value of Remote：

Open revTest of IRSendRev Library, open Serial Monitor. Take your Remote, press a button, then you can find a series of number had been printed.

![](https://github.com/SeeedDocument/IR_Remote/raw/master/img/Sidekick_36_2.png)

This series of number is what we need, note it, we'll use if later.

Send Command

Open Arduino IDE, click File-&gt;Sketchbook-&gt;infrared.

If you had get the value of your TV turn-on-off key, then point infrared emitter to your TV, and press the button.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>