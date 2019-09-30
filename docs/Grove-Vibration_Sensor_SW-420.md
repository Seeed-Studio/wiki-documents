---
name: Grove - Vibration Sensor (SW-420)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020586
tags:
---

![](https://github.com/SeeedDocument/Grove-Vibration_Sensor-SW-420/raw/master/img/main.jpg)

The Grove - Vibration Sensor (SW-420) is a high sensitivity non-directional vibration sensor. When the module is stable, the circuit is turned on and the output is high. When the movement or vibration occurs, the circuit will be briefly disconnected and output low. At the same time, you can also adjust the sensitivity according to your own needs.

All in all, this is a perfect module for vibration or tilt sensor.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-Vibration-Sensor-%28SW-420%29-p-3158.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Vibration Sensor (SW-420) | Initial                                                                                               | Sep 2018      |

## Features

- Non-directional
- High sensitivity
- Respond to vibration, tilt
- Waterproof 
- Compression resistance


## Specification

|Item|Value|
|---|---|
|Operating voltage|3.3V / 5V|
|Interface|Digital|
|Size|L: 40mm W: 20mm H: 10mm| 
|Weight|4.3g|
|Package size|L: 140mm W: 85mm H: 10mm|
|Gross Weight|10g|


## Applications

- Car, bicycle, motorcycle burglar alarm
- Game control
- Vibration detection

## Hardware Overview

### Pin Map

![](https://github.com/SeeedDocument/Grove-Vibration_Sensor-SW-420/raw/master/img/pin_map.jpg)


### Schemaitc

![](https://github.com/SeeedDocument/Grove-Vibration_Sensor-SW-420/raw/master/img/Schematic.jpg)


First, let's begin with the **SW1** which at the lower left corner. Actually, the **SW1** is the vibration module **SW-420**. When the module is in a stable state, the module is turned on. **Pin2** of **U1A** is connected to the **GND** though **SW1**.

The **VR1** is the potentiometer, the **Pin2** of the potentiometer is connected to the **Pin3** of the **U1A**

The **U1A** is a [comparators](https://en.wikipedia.org/wiki/Comparator). For the comparators, 


$$
V_{out} = 
\begin{cases} 
High,  & \mbox{if }V_+ > V_-  \\
Low,  & \mbox{if }V_+ < V_- 
\end{cases}
$$

**V+** connects to **Pin3**, **V-** connects to **Pin2**, **V<sub>out</sub>** connects to **Pin1**.

For the **V+** you can adjust it by rotate the potentiometer, for instance, we can make it $VCC/2$.

For the **V-**, it depends on the **SW1(SW-420)**:

- If this module is in a stable state, the **SW1** is turned on, Pin2 of **U1A** is connected to the **GND** through **SW1**. It will be:


$$
\left. \begin{array}{l}  & V- = 0V \\ & V+ = VCC/2 \end{array} \right\}  V_{out} = High
$$


- If the module vibrates or tilts, the **SW1** will be turned off, the voltage of **V-** will be pulled up by the **VCC** through R1. Once the **V-** is higher than the VCC/2, then:

$$
\left. \begin{array}{l}  & V- > VCC/2 \\ & V+ = VCC/2 \end{array} \right\}  V_{out} = Low
$$


Now you can set the **V+** to adjust the sensitivity, just remember: the lower the voltage of **V+**, the higher the sensitivity😆




## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg)  |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield | Grove - Vibration Sensor|Grove - Buzzer|
|--------------|-------------|-----------------|----|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Vibration_Sensor-SW-420/raw/master/img/thumbnail.jpg)|![](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/img/buzzer_s.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Vibration-Sensor-%28SW-420%29-p-3158.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Buzzer-p-768.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.



- **Step 1.** Connect the Grove - Vibration Sensor (SW-420) to the **D2** port of the Base Shield.

- **Step 2.** Connect the Grove - Buzzer to the **D3** port of the Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove-Vibration_Sensor-SW-420/raw/master/img/connect.JPG)

!!!Note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.



| Seeeduino     |  Grove - Vibration Sensor         |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| NC           | White                    |
| D2           | Yellow                   |



| Seeeduino     |  Grove - Buzzer         |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| NC           | White                    |
| D3           | Yellow                   |


#### Software

!!!Note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


- **Step 1.** Open your Arduino IDE, start a new sketch.

- **Step 2.** Copy all the code below, or you can just click the icon ![](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/copy.jpg) in upper right corner of the code block to copy the following code into the new sketch.

```C++
// constants won't change. They're used here to set pin numbers:
const int buttonPin = 2;     // the number of the pushbutton pin
const int buzzer =  3;      // the number of the buzzer pin

// variables will change:
int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(buzzer, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(buzzer, LOW);
  } else {
    // turn LED off:
    digitalWrite(buzzer, HIGH);
  }
}
```

- **Step 3.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

!!!success
    If every thing goes well, everytime you move, shake or tilt the Grove - Vibration Sensor the Grove - buzzer will ring.

### Play with Codecraft

#### Hardware

**Step 1.** Connect a Grove - Vibration Sensor to port D2, and connect a Grove - Buzzer to port D3 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

!!!Note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove-Vibration_Sensor-SW-420/master/img/cc_Vibration_Sensor.png)

Upload the program to your Arduino/Seeeduino.

!!!Success
    When the code finishes uploaded, the buzzer will beep when the vibration sensor detects vibration.


## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-Vibration_Sensor-SW-420/raw/master/res/Grove%20-%20Vibration%20Sensor%20(SW-420)%20v1.1.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>



## Resources

- **[Zip]** [Grove - Vibration Sensor (SW-420) eagle files](https://github.com/SeeedDocument/Grove-Vibration_Sensor-SW-420/raw/master/res/Grove%20-%20Vibration%20Sensor%20(SW-420)%20v1.1.zip)
- **[Codecraft]** [CDC File](https://raw.githubusercontent.com/SeeedDocument/Grove-Vibration_Sensor-SW-420/master/res/Grove_Vibration_Sensor_CDC_File.zip)

## Project

This is the introduction Video of this product, simple demos, you can have a try.

<iframe width="560" height="315" src="https://www.youtube.com/embed/oFmvKxoZIuw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>



## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>