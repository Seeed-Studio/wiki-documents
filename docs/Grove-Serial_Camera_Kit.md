---
name: Grove - Serial Camera Kit
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Serial-Camera-Kit-p-1608.html
oldwikiname:  Grove - Serial Camera Kit
prodimagename: GSCK_Introduction.jpg
surveyurl: https://www.research.net/r/Grove_Serial_Camera_Kit
sku:  101020000
---

![](https://github.com/SeeedDocument/Grove-Serial_Camera_Kit/raw/master/img/GSCK_Introduction.jpg)

Grove - Serial Camera Kit includes one control board and two interchangeable lenses, one is standard lens and the other is wide-angle lens. It's a great camera for Arduino centered image recognition projects, because 30W pixel wouldn't be overwhelming for Arduino, so that real-time image recognition is possible. To make it more fun and playable, lenses of two specs are shipped in this kit. The standard one is for common photo shots and the wide-angle one is specially suitable for monitoring projects.

##  Specifications
---
*   Input Voltage: 5V

*   Pixel: 300,000

*   Resolution: 640*480, 320*240, 160*120

*   Uart Baud Rate: 9600~115200

*   Communication: RS485 and RS232

*   Photo JPEG compression, high, medium and low grades Optional

*   AGC

*   Auto Exposure Event Control

*   Automatic White Balance Control

*   Focus adjustable

##  Demonstration
---
This demo will show you how to use Grove - Serial Camera Kit. We need a [Seeeduino](http://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7), an [SD Card Shield](http://www.seeedstudio.com/depot/sd-card-shield-v40-p-1381.html?cPath=105) and a [Grove - Button](/Grove-Button/). When the button pressed, we take a photo and save it to SD Card.

Follow the below steps step by step, you can easily run your Grove - Serial Camera Kit. Then let's go.

###  Hardware Installation

We can find that there are two Grove interfaces on SD Card Shield V4.0, so we needn't a Base Shield, just plug Button to I2C Grove and plug Camera to Uart Grove.

![](https://github.com/SeeedDocument/Grove-Serial_Camera_Kit/raw/master/img/GSCK_Hardware.jpg)

###  Download Code and Upload

You can download demo code in github, click [here](https://github.com/Seeed-Studio/Grove_Serial_Camera_Kit)

Then upload the code, and it works.

###  Take a Photo

After finish uploading demo code, we can take a photo now, just press the button, then wait for a few seconds, a photo will be saved to SD card.

The following image is the ceiling of my office use straight angle lens.

![](https://github.com/SeeedDocument/Grove-Serial_Camera_Kit/raw/master/img/GSCK_60.jpg)

###  Replacing a Lens

There is another wide-angle lens, I will show you how to replace it.

Firstly you should have a screwdriver：

![](https://github.com/SeeedDocument/Grove-Serial_Camera_Kit/raw/master/img/GSCK_Step1.jpg)

Then, unscrew the screws on the side of lens:

![](https://github.com/SeeedDocument/Grove-Serial_Camera_Kit/raw/master/img/GSCK_Step2.jpg)

Try rotating the lens, it can be screwed out：

![](https://github.com/SeeedDocument/Grove-Serial_Camera_Kit/raw/master/img/GSCK_Step3.jpg)

We use  the wide-angle lens to take a photo, also, it's  the ceiling of my office!

Find anything different from the ceiling image previous?

![](https://github.com/SeeedDocument/Grove-Serial_Camera_Kit/raw/master/img/GSCK_90.jpg)

###  How To Focus

Lens screwed different depths represent different focal length, you can have a try.

##  Resources

- **[Library]** [Demo Code](https://github.com/Seeed-Studio/Grove_Serial_Camera_Kit)
- **[Datasheet]** [CJ OV528](https://github.com/SeeedDocument/Grove-Serial_Camera_Kit/raw/master/res/cj-ov528_protocol.pdf)

## Project

**Grove Camera -> PHPoC -> Web Application** This project shows how to read data from Grove camera and send the data to web application via WebSocket.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/phpoc_man/grove-camera-phpoc-web-application-1dfd63/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>