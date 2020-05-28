---
name: Grove - Analog Microphone
category: Sensor
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 101020852
tags: 
---

![](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/04.png)

The Grove - Analog Microphone is a based on high-performance **SiSonic MEMS** technology, offering an extremely-low-noise, low-current, reliable, and small microphone to opensource hardware industry, and it has improved performance under severe conditions.

Grove - Analog Microphone is an ideal choice of sound sensors where excellent audio performance is required. It can provide up to 20dB of gain and it also features low current, max RF protection, which makes it a perfect microphone for Arduino and Raspberry Pi. Our featured product <a href="https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html">ReSpeaker Core v2.0</a> also adopts MEMS technology and the same microphone as Grove - Analog Microphone does. If you are going to get a fancy microphone, here is the choice.

<p style=":center"><a href="https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p>


## Features

- High-performance SiSonic MEMS technology
- Extremely-low-noise, low-current, and reliable
- Compact and elegant design

!!!Warning
    This sound sensor is used to detect whether there's sound surround or not, please don't use the module to collect sound signal. For example, you can use it to make a sound control lamp, but not as a recording device.

## Applications
- Sound sensor
- Collecting of sound signal
- Voice recognition
- Recording


## Specifications

|Item|Value|
|-----|------|
|Dimensions	|20mm x 20mm|
|Operating Voltage	|3.3V|
|Operating Current|	5mA|
|Operating Temperature Range|-40 °C to 100 °C|

!!!Tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)

## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started

!!!Note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.

### Play With Arduino

**Hardware**

|Seeeduino V4.2| Base Shield|Grove-Analog Microphone|
|--------------|------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/small.png)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)|

- **Step 1.** Connect Grove-Sound Sensor to port **A0** of Grove-Base Shield.
- **Step 2.** Plug Grove - Base Shield into Seeeduino and connect Seeeduino to PC via a USB cable.    

![](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/hardware_connection.jpg)

!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove-Sound Sensor to Seeeduino as below.

| Seeeduino     | Grove-Sound Sensor      |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| A1            | White                   |
| A0            | Yellow                  |

**Software**

- **Step 1.** Please copy below code to Arduio IDE and upload to arduino. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

```c
/*
  Analog input, analog output, serial output

  Reads an analog input pin, maps the result to a range from 0 to 255 and uses
  the result to set the pulse width modulation (PWM) of an output pin.
  Also prints the results to the Serial Monitor.
*/

// These constants won't change. They're used to give names to the pins used:
const int analogInPin = A0;  // Analog input pin that the potentiometer is attached to
const int analogOutPin = 9; // Analog output pin that the LED is attached to

int sensorValue = 0;        // value read from the pot
int outputValue = 0;        // value output to the PWM (analog out)

void setup() {             
  Serial.begin(9600);      // initialize serial communications at 9600 bps
}

void loop() {
  sensorValue = analogRead(analogInPin);        // read the analog in value
  outputValue = map(sensorValue, 0, 1023, 0, 255);       // map it to the range of the analog out
  analogWrite(analogOutPin, outputValue);               // change the analog out value

  Serial.println(outputValue);    // print the results to the Serial Monitor

  // wait 2 milliseconds before the next loop for the analog-to-digital
  // converter to settle after the last reading:
  delay(2);
}
```

- **Step 2.** Click on **Serial > Plotter** to get the changing curve of the sensor. Please make a noise to view the change of the value.

![](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/outcome.png)



## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/202002902_Grove-Analog_Microphone_v1.0_SCH&PCB.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- [**ZIP**] [Grove-Analog_Microphone_v1.0_SCH&PCB.zip](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/202002902_Grove-Analog_Microphone_v1.0_SCH&PCB.zip)
- [**PDF**] [SMD Mic OMNI-22DB_Specification.pdf](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/SMD_Mic_OMNI-22DB_Specification.pdf)


## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>