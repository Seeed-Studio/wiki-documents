---
description: Grove - Digital PIR Sensor
title: Grove - Digital PIR Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Digital-PIR-Sensor
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- 
![](https://files.seeedstudio.com/products/101020793/img/101020793wiki.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101020793/img/101020793wiki.png" alt="pir" width={600} height="auto" /></p>


PIR sensor is an IR sensor to detect human motions. This Grove Digital PIR Sensor is the cheapest PIR sensor in the PIR families, however, it is able to give a quick response and generate a high signal from the "sig" Pin. 

With the Grove interface, the Grove digital PIR Sensor is easy to be plugged and played. And it doesn't need any Arduino Library. 

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)

## Features

- Budget-friendly: less than 3 dollars
- Intuitive: detect motion and output with only ‘high’ and ‘low’ digital signals
- Simple: no external arduino library required
- Interface: Grove

## Specification

|Item|Value|
|---|---|
|Voltage range|3V–5V|
|Detecting angle|100 degree|
|Detecting distance|3.2m-12m|
|Response time|< 1s|
|Working temp|-20-85 C|
|Interface|Grove|
|Dimensions|20mm * 20mm * 11.5mm|
|Weight|3g|
|Battery|Exclude|

## Platform Supported

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
## Getting Started

### Getting Started with Arduino

#### Materials Required

|Seeeduino XIAO|Grove Breadboard|Grove Digital PIR Motion Sensor|
|--------|-----------------------|-------------------------------------------------------------|
|<p><img src="https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/101020793/img/101020793wiki210x157.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get one now](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Get one now](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[Get one now](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)|

#### Hardware Connection

<!-- ![](https://files.seeedstudio.com/products/101020793/img/Hardware_Connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101020793/img/Hardware_Connection.jpg" alt="pir" width={600} height="auto" /></p>


The Grove interface on the breadboard and on the Grove digital PIR Sensor are connected by the Grove cable.

#### Softwawre
- **Step1** Copy the code below to the Arduino IDE and upload. If you do not know how to update the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).
```c++
#define digital_pir_sensor 5 // connect to Pin 5

void setup()
{
  Serial.begin(9600);  // set baud rate as 9600
  pinMode(digital_pir_sensor,INPUT); // set Pin mode as input
}

void loop()
{
  bool state = digitalRead(digital_pir_sensor); // read from PIR sensor
  if (state == 1)
  Serial.println("A Motion has occured");  // When there is a response
  else
  Serial.println("Nothing Happened");  // Far from PIR sensor
}
```
- **Step2** Open the Serial port and you will see the value changing when you take a motion around the PIR sensor.

### Getting Started with Raspberry Pi 

#### Materials Required

|Raspberry Pi 4B(4GB)|Grove Base Hat for Raspberry Pi|Grove Digital PIR Motion Sensor|
|--------|-----------------------|-------------------------------------------------------------|
|<p><img src="https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/101020793/img/101020793wiki210x157.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get one now](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[Get one now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Get one now](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)|

#### Hardware Connection

<!-- ![](https://files.seeedstudio.com/products/101020793/img/pi_PIR_demo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101020793/img/pi_PIR_demo.jpg" alt="pir" width={600} height="auto" /></p>

Connect the PIR sensor with "D5" on the Grove Base Hat.

#### Code
- **Step 1** Update the system verion of Raspberry Pi.
```
sudo apt-get update
```
- **Step 2** Install the wiringPi.
```
sudo pip install wiringPi
```
If you use Pi 4, please select the version of wiringPi
```
sudo pip install wiringPi==2.52.0
```
- **Step 3** Get the right Pin you are connecting with.
```
gpio readall
```
here comes a table, find the Pim definition of the Pin 5 in wiring definition, in this demo, the pin definition is 21.
```
gpio read 21
```
You can read the value from the PIR sensor, when there is a motion, the value is "1", otherwise. the value is "0".

 
## Schematic Online Viewer
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/101020793/document/Grove_Digital_PIR_Motion_Sensor_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>




## Resource

- **[PDF]** [BS312 Specification](https://files.seeedstudio.com/products/101020793/document/BS312规格书.pdf)
- **[PDF]** [Hardware schematic](https://files.seeedstudio.com/products/101020793/document/Hardware_Schematic_SCH.pdf)

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>

