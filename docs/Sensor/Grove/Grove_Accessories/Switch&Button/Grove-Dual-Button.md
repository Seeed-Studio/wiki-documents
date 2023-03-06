---
description: Grove Dual Button
title: Grove Dual Button
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Dual-Button
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove Dual Button
category: Grove Inputs
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 111020103
tags:
--- -->

![](https://files.seeedstudio.com/products/111020103/img/111020103wiki.png)

Grove - Dual Button includes 2 buttons, enables you control two signal channel with one grove module.  With 4 different color keycaps provided, you can freely adjust the color combination as needed.

The button is simply driven by the GPIO Digital Pins. When the button is pressed, the Pins can reach a LOW signal from the button; on the other hand, when it is in the loosen state, Pins will always gain a HIGH signal until it is pressed.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## Features

- Compact modular design and less wire connection with two buttons in one grove module
- Different color keycaps provided, freely adjust the color combination as needed.

## Specification

|Item|Value|
|---|---|
|Voltage range|3V–5V|
|Interface|Grove|
|Dimensions|20mm * 40mm|
|Battery|Exclude|

## Platform Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Getting Started

### Getting Started with Arduino

#### Materials Required

|Seeeduino Nano|Grove Shield for Arduino Nano|Grove Passive Buzzer|Grove LED Pack|Grove Dual Button|
|--------|-------|----|-------|----------------|
|![](https://files.seeedstudio.com/products/102010268/img/seeeduino-Nano-thumbnail.png)|![](https://files.seeedstudio.com/products/103100124/img/Grove-Shoeld-for-Arduino-Nano-thumbnail.png)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|![](https://files.seeedstudio.com/products/104020228/img/Grove-LED-Pack-thumbnail.jpg)|![](https://files.seeedstudio.com/products/111020103/img/111020103thumbnail.jpg)|
|[Get one now](https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html)|[Get one now](https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html)|[Get one now](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|[Get one now](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html)|[Get one now](https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html)|

#### Hardware Connection

![](https://files.seeedstudio.com/products/111020103/img/wiki_nano_button.jpg)

The Grove Dual Button connects with "D2" interface on the Grove shield, Grove Passive Buzzer connects with "D4" interface and Grove LED Pack connects with "D6"
interface.

#### Softwawre

- **Step1** Copy the code below to the Arduino IDE and upload. If you do not know how to update the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

```c++
 //set the corresponding notes with frequency
 #define NOTE_D0 0
 #define NOTE_D1 294
 #define NOTE_D2 330
 #define NOTE_D3 350
 #define NOTE_D4 393
 #define NOTE_D5 441
 #define NOTE_D6 495
 #define NOTE_D7 556
 
 #define NOTE_DL1 147
 #define NOTE_DL2 165
 #define NOTE_DL3 175
 #define NOTE_DL4 196
 #define NOTE_DL5 221
 #define NOTE_DL6 248
 #define NOTE_DL7 278
 
 #define NOTE_DH1 589
 #define NOTE_DH2 661
 #define NOTE_DH3 700
 #define NOTE_DH4 786
 #define NOTE_DH5 882
 #define NOTE_DH6 990
 #define NOTE_DH7 112
 
 #define WHOLE 1
 #define HALF 0.5
 #define QUARTER 0.25
 #define EIGHTH 0.25
 #define SIXTEENTH 0.625
 
 //the note part of the whole song
 int tune[] =
 {
   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_D6, NOTE_D0,
   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_DH1, NOTE_D6, NOTE_D0, NOTE_D6,
   NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6, NOTE_D0, NOTE_D6,
   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_DH1, NOTE_D6, NOTE_D0,
 
   NOTE_D1, NOTE_D1, NOTE_D3,
   NOTE_D1, NOTE_D1, NOTE_D3, NOTE_D0,
   NOTE_D6, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6,
   NOTE_D5, NOTE_D1, NOTE_D3, NOTE_D0,
   NOTE_DH1, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6,
   NOTE_D5, NOTE_D1, NOTE_D2, NOTE_D0,
   NOTE_D7, NOTE_D7, NOTE_D5, NOTE_D3,
   NOTE_D5,
   NOTE_DH1, NOTE_D0, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_D0, NOTE_D5, NOTE_D1, NOTE_D3, NOTE_D0,
   NOTE_DH1, NOTE_D0, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_D0, NOTE_D5, NOTE_D1, NOTE_D2, NOTE_D0,
   NOTE_D3, NOTE_D3, NOTE_D1, NOTE_DL6,
   NOTE_D1,
   NOTE_D3, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_D3, NOTE_D5, NOTE_D6, NOTE_D6,
   NOTE_DH1, NOTE_D0, NOTE_D7, NOTE_D5,
   NOTE_D6,
 };
 
 //the duration time of each note
 float duration[] =
 {
   1, 1, 0.5, 0.5, 1,
   0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5,
   0.5, 1, 0.5, 1, 0.5, 0.5,
   0.5, 0.5, 0.5, 0.5, 1, 1,
 
   1, 1, 1 + 1,
   0.5, 1, 1 + 0.5, 1,
   1, 1, 0.5, 0.5, 1,
   0.5, 1, 1 + 0.5, 1,
   0.5, 0.5, 0.5, 0.5, 1 + 1,
   0.5, 1, 1 + 0.5, 1,
   1 + 1, 0.5, 0.5, 1,
   1 + 1 + 1 + 1,
   0.5, 0.5, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25,
   0.5, 1, 0.5, 1, 1,
   0.5, 0.5, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25,
   0.5, 1, 0.5, 1, 1,
   1 + 1, 0.5, 0.5, 1,
   1 + 1 + 1 + 1,
   0.5, 1, 0.5, 1 + 1,
   0.5, 1, 0.5, 1 + 1,
   1 + 1, 0.5, 0.5, 1,
   1 + 1 + 1 + 1
 };
 
 int length;//define the number of notes
 int tonePin = 4; //set the buzzer Pin
 int button1 = 2; //set the button1 pin
 int button2 = 3; //set the button2 pin
 int LED = 6;  //set the LED pin
 bool state1 = 1; //set button1 state
 bool state2 = 1; //set button2 state
 void setup()
 {
   pinMode(tonePin, OUTPUT); // set the buzzer as output mode
   pinMode(button1,INPUT);
   pinMode(button2,INPUT);
   pinMode(LED,OUTPUT);
   length = sizeof(tune) / sizeof(tune[0]); //count the number of note
 }
 
 void loop()
 {
  state1 = digitalRead(button1);
  state2 = digitalRead(button2);
  if (state1 == 0)
  {
    digitalWrite(LED,HIGH);
    }
  else
  {
    digitalWrite(LED,LOW);
    } 
  if (state2 == 0)
  {
       for (int x = 0; x < length; x++) //"sing" the note one by one
     {
     tone(tonePin, tune[x]); //output the "x" note
     delay(400 * duration[x]); //rythem of the music,it can be tuned fast and slow by change the number"400"
     noTone(tonePin);//stop the current note and go to the next note
    } 
  } 
  else
  {
    digitalWrite(tonePin,LOW);
    }
  
 }
```

- **Step2** Press each button to control the LED and Buzzer.

### Getting Started with Raspberry Pi

#### Materials Required

|Raspberry Pi 4B(4GB)|Grove Base Hat for Raspberry Pi|Grove Passive Buzzer|Grove LED Pack|Grove Dual Button|
|--------|-----|------|------|-----|
|![](https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg)|![](https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg)|![](https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg)|![](https://files.seeedstudio.com/products/104020228/img/Grove-LED-Pack-thumbnail.jpg))|![](https://files.seeedstudio.com/products/111020103/img/111020103thumbnail.jpg)|
|[Get one now](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[Get one now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Get one now](https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html)|[Get one now](https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html)|[Get one now](https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html)|

#### Hardware Connection

![](https://files.seeedstudio.com/products/111020103/img/wiki_raspberry_button.jpg)

Connect the passive with PWM pin "12", button "D5", LED "D16".

#### Code

- **Step 1** Install Grove.py on your Raspberry.  

One-click installation, quick start, what ever you call, with the single command below, we can install/update all dependencies and latest grove.py.

:::cautionattention
If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you **cannot use this command line**.
:::

```
curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -
```

:::tipsuccess
if everything goes well, you will see the following notice.

```
    Successfully installed grove.py-0.5
    #######################################################
    Lastest Grove.py from github install complete   !!!!!
    #######################################################
```

:::
<br />
Besides the one-click installation, you can also install all the dependencies and latest grove.py step by step.

:::cautionattention
If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

```python
git clone https://github.com/Seeed-Studio/grove.py
cd grove.py
# Python2
sudo pip install .
# Python3
sudo pip3 install .
```

- **Step 2** Create a python file for the code.

```
cd grove.py
nano button.py
```

- **Step 3** Copy the following code to the python file

```python
#!/usr/bin/env python
import time
from grove.factory import Factory
from grove.grove_led import GroveLed

led = GroveLed(16)
button1 = Factory.getButton("GPIO-HIGH", 5)
button2 = Factory.getButton("GPIO-HIGH", 6)
buzzer = Factory.getGpioWrapper("Buzzer", 12)

while True:
    if button1.is_pressed():
        led.on()
    else:
        led.off()
    if button2.is_pressed():
        buzzer.on() 
    else:
        buzzer.off()           
```

- **Step 4** Run the program

```
sudo chmod +x button.py
sudo ./button.py
```

If everything goes well, you can control the led and buzzer by dual button.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/111020103/document/Grove-Dual-Button_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resource

- **[PDF]** [Hardware schematic](https://files.seeedstudio.com/products/111020103/document/Grove-Dual-Button_v1_0_SCH_190916.pdf)

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
