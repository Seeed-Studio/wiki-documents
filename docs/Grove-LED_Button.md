---
title: Grove-LED Button
category: Acator
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 111020044,111020045,111020046
tags: 2-链接 
---


![](https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/main.jpg)


The Grove - LED Button is composed of Grove - Yellow Button, Grove - Blue LED Button and Grove - Red LED Button. This button is stable and reliable with a 100 000 times long life.
With the build-in LED, you can apply it to many interesting projects, it is really useful to use the LED to show the status of the button. We use a high-quality N-Channel MOSFET to control the LED to ensure the high swithching speed and a low consumption.All in all, you want some relly awesome button? Here you go ...


<p style="text-align:center"><a href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html" target="_blank"><img src="https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/Y.png" height="48" width="300" /></a></p>
<p style="text-align:center"><a href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html" target="_blank"><img src="https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/B.png" height="48" width="300" /></a></p>
<p style="text-align:center"><a href="https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html" target="_blank"><img src="https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/R.png"  height="48" width="300" /></a></p>


## Features

- Long life
- Easy to use
- Grove Digital interface



## Specification

|Item|Value|
|---|---|
|Working voltage|3.3V/5V|
|Operating Life without Load|100 000 times|
|LED rated current|50mA|
|Press Resistance^1^|<100mΩ|
|Release Resistance^2^|>100MΩ|

!!!Tips
        1,2- If you want to measure the resistance, please take the key cap off the board. Otherwise you will get the value of the equivalent resistance of the board instead of the true resistance of the key cap. 



## Hardware Overview


### Pin Map


![](https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/pin_map.jpg)


### Schematic

![](https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/schematic.jpg)


**SIG1** is the the LED control signal, the default value is low, so the N-Channel MOSFET is off , the LED is off too. When SIG1 becomes high, the N-Channel MOSFET trun on, and the LED light on.

**SIG2** connect to the button pin. With a pull-up resistance, the default value of **SIG2** is high. When you press the button, the voltage is pulled low, the **SIG2** becomes to low.




## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |




## Getting Started

!!!Tips
        In this part, we use the Grove - Red LED Button as an example. The following parts also apply to Yellow and Blue.


### Play With Arduino

#### Hardware

**Materials required**


| Seeeduino V4.2 | Base Shield| Grove- Red LED Button |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/IMG_0068a.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/" target="_blank">Get One Now</a>|



- **Step 1.** Grove- Red LED Button to port **D3** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


![](https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/red%20LED.jpg)



!!!Note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.


| Seeeduino     |  Grove- Red LED Button           |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| SIG2           | White                  |
| SIG1          | Yellow                  |




#### Software

!!!Note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


- **Step 1.** Open the Arduino IDE and create a new file, then copy the following code into the new file.

```C++
#include "Arduino.h"

//1: toggle mode, 2: follow mode
#define LED_MODE   1

const int ledPin = 3;      // the number of the LED pin, D3
const int buttonPin = 4;    // the number of the pushbutton pin, D4
const boolean breathMode = true;  // if or not the led lights as breath mode when it's on

// Variables will change:
int ledState = LOW;         // the current state of the output pin
int ledFadeValue = 0;
int ledFadeStep = 5;
int ledFadeInterval = 20;   //milliseconds
int buttonState;             // the current reading from the input pin
int lastButtonState = HIGH;   // the previous reading from the input pin

unsigned long lastDebounceTime = 0;  // the last time the output pin was toggled
unsigned long debounceDelay = 50;    // the debounce time; increase if the output flickers
unsigned long lastLedFadeTime = 0;

void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, ledState);
}

void loop() {
  int reading = digitalRead(buttonPin);

  // If the switch changed, due to noise or pressing:
  if (reading != lastButtonState) {
    // reset the debouncing timer
    lastDebounceTime = millis();
  }

  if ((millis() - lastDebounceTime) > debounceDelay) {
    // whatever the reading is at, it's been there for longer
    // than the debounce delay, so take it as the actual current state:

    // if the button state has changed:
    if (reading != buttonState) {
      buttonState = reading;

#if LED_MODE == 1
      if (buttonState == LOW) {  //button is pressed
          ledState = !ledState;
          ledFadeValue = 0;
          lastLedFadeTime = millis();
      }
#else
      if (buttonState == LOW) {  //button is pressed
        ledState = HIGH;
        ledFadeValue = 0;
        lastLedFadeTime = millis();
      } else {                   //button is released
        ledState = LOW;
      }
#endif
    }
  }

  // set the LED:
  if (breathMode && ledState != LOW) {
    if (millis() - lastLedFadeTime > ledFadeInterval) {
      lastLedFadeTime = millis();
      analogWrite(ledPin, ledFadeValue);
      ledFadeValue += ledFadeStep;
      if (ledFadeValue > 255){
        ledFadeValue = 255 - ledFadeStep;
        ledFadeStep = -ledFadeStep;
      } else if (ledFadeValue < 0) {
        ledFadeValue = 0;
        ledFadeStep = -ledFadeStep;
      }
    }
  } else {
    digitalWrite(ledPin, ledState);
  }

  lastButtonState = reading;
}

```

- **Step 2.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 3.** Now, try to press you button, you will see the LED light on with a fade on/fade off effect.


It should be like:

![](https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/img/result.gif)



## Resources

- **[Zip]** [Grove-LED Button Eagle file](https://github.com/SeeedDocument/Grove-Red_LED_Button/raw/master/res/Grove-Red_LED_Button.zip)


## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).