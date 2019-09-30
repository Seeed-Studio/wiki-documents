---
name: Grove - Optical Rotary Encoder(TCUT1600X01)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020587
tags:
---

![](https://github.com/SeeedDocument/Grove-Optical_Rotary_Encoder-TCUT1600X01/raw/master/img/main.jpg)

The Grove - Optical Rotary Encoder(TCUT1600X01) is a transmissive sensor that includes an infrared emitter and two phototransistor detectors. Usually, the infrared emitter emits infrared rays, the phototransistor detectors receives the infrared rays, then the phototransistor is turned on, both of the output is High, the on-board LED indicators light up. When there is an obstacle blocking, the phototransistor can not receive the infrared rays, so the phototransistor will be turned off and both of the output will be Low, the on-board LED indicators fade away.

You can use this sensor as a rotary encoder to detect the speed or rotation, and thanks to the two phototransistor detectors, you even can detect the rotation direction.

<p style=":center"><a href="https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder%28TCUT1600X01%29-p-3142.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## Features

+ Double phototransistor detectors, can determine the direction of rotation
+ On-board LED indicators
+ Grove Interface


## Specification

|Item|Value|
|---|---|
|Operating voltage|3.3V / 5V|
|Operating temperature|-40°C to +105°C|
|Storage temperature Range|-40°C to +125°C|
|Emitter wavelength| 950 nm|
|Gap|3 mm|
|Interface|Digital|


## Applications

- Automotive optical sensors
- Accurate position sensor for encoder
- Sensor for motion, speed, and direction
- Sensor for “turn and push” encoding


## Hardware Overview

### Pin Map

![](https://github.com/SeeedDocument/Grove-Optical_Rotary_Encoder-TCUT1600X01/raw/master/img/pin_map.jpg)


### Schemaitc

**Power**
![](https://github.com/SeeedDocument/Grove-Optical_Rotary_Encoder-TCUT1600X01/raw/master/img/schematic.jpg)

The typical voltage of TCUT1600X01 is 5V, so we use the [MP3120](https://github.com/SeeedDocument/Grove-Optical_Rotary_Encoder-TCUT1600X01/raw/master/res/MP3120.pdf) current mode step-up converter to provide a stable 5V. The input of MP3120 ranges from 0.8V to 5V, so you can use this module with your Arduino both
in 3.3V and 5V. 

![](https://github.com/SeeedDocument/Grove-Optical_Rotary_Encoder-TCUT1600X01/raw/master/img/schematic_1.jpg) 

When the phototransistor detectors receive the infrared signal, the output should be High, and when the obstacle blocks the infrared, the OUT1 and OUIT2 should be Low. However due to the leakage current, it won't be 0V. The leakage voltage varies with the input voltage.

### Mechanical Drawing

![](https://github.com/SeeedDocument/Grove-Optical_Rotary_Encoder-TCUT1600X01/raw/master/img/Mechanical.jpg)


### Directional Detection

![](https://github.com/SeeedDocument/Grove-Optical_Rotary_Encoder-TCUT1600X01/raw/master/img/principle.jpg)

!!!Tip
    Thanks to the two phototransistor detectors, we can detect the moving direction. If the obstacle moves from the left to right, The output states change should be **11 --> 01 --> 00 --> 10**; in the same way, if the obstacle moves from the right to left, it should be **11 --> 10 --> 00 -->01**.




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

| Seeeduino V4.2 | Base Shield | Grove - Optical Rotary Encoder|
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Optical_Rotary_Encoder-TCUT1600X01/raw/master/img/thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder%28TCUT1600X01%29-p-3142.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.



- **Step 1.** Connect the Grove - Optical Rotary Encoder to the **D5** port of the Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


![](https://github.com/SeeedDocument/Grove-Optical_Rotary_Encoder-TCUT1600X01/raw/master/img/connect.jpg)

!!!Note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.


| Seeeduino     |  Grove - Optical Rotary Encoder         |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| D6           | White                    |
| D5           | Yellow                   |




#### Software

!!!Note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


- **Step 1.** Install the **Encoder Library** in the Arduino IDE. You can find this library by the following path: **Sketch-->Include Library-->Manage Libraries**

![](https://github.com/SeeedDocument/Grove-Optical_Rotary_Encoder-TCUT1600X01/raw/master/img/path.jpg)

Then search for the **encoder** in the pop-up window. Find the **Encoder by Paul Stoffregen**, choose the **Version1.4.1**, then click **Install**.

![](https://github.com/SeeedDocument/Grove-Optical_Rotary_Encoder-TCUT1600X01/raw/master/img/path_1.jpg)

When the library is installed you will see <font style="font-weight:bold;color:#00C3CE">INSTALLED</font>, click **Close** then.

![](https://github.com/SeeedDocument/Grove-Optical_Rotary_Encoder-TCUT1600X01/raw/master/img/path_2.jpg)


>Thanks for Paul for his splendid library.

- **Step 2.** Restart the Arduino IDE. Open the example, you can open it in the following three ways：
    1. Open it directly in the Arduino IDE via the path: **File --> Examples --> Encoder --> Basic**. 
    ![](https://github.com/SeeedDocument/Grove-Optical_Rotary_Encoder-TCUT1600X01/raw/master/img/path_3.jpg)

    2. Open it in your computer by click the **Basic.pde** which you can find in the **xxxx\Arduino\libraries\Encoder\examples\Basic**, **XXXX** is the location you installed the Arduino IDE.
    ![](https://github.com/SeeedDocument/Grove-Optical_Rotary_Encoder-TCUT1600X01/raw/master/img/path_4.jpg)

    3. Or, you can just click the icon ![](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/copy.jpg) in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.

```C++
/* Encoder Library - Basic Example
 * http://www.pjrc.com/teensy/td_libs_Encoder.html
 *
 * This example code is in the public domain.
 */

#include <Encoder.h>

// Change these two numbers to the pins connected to your encoder.
//   Best Performance: both pins have interrupt capability
//   Good Performance: only the first pin has interrupt capability
//   Low Performance:  neither pin has interrupt capability
Encoder myEnc(5, 6);
//   avoid using pins with LEDs attached

void setup() {
  Serial.begin(9600);
  Serial.println("Basic Encoder Test:");
}

long oldPosition  = -999;

void loop() {
  long newPosition = myEnc.read();
  if (newPosition != oldPosition) {
    oldPosition = newPosition;
    Serial.println(newPosition);
  }
}
```

!!!Tip
    You can change two numbers to the pins connected to your encoder, for the Best Performance: both pins have interrupt capability, so you can change the code line 13 into <mark>Encoder myEnc(2, 3);</mark>, meanwhile, you should connect this sensor to the **D2** of the baseshield.



- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **9600**.


!!!success
     If every thing goes well, you will get the result. When you move the obstacle from left to right, the count value will increase by 1; when you move the obstacle from right to left, the count value will be decremented by 1.

```C++
Basic Encoder Test:
0
1
2
3
4
3
2
1
0
-1
-2
-3
-4
```


## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-Optical_Rotary_Encoder-TCUT1600X01/raw/master/res/Grove-Optical_Rotary_Encoder-TCUT1600X01.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- **[Zip]** [Grove - Optical Rotary Encoder eagle files](https://github.com/SeeedDocument/Grove-Optical_Rotary_Encoder-TCUT1600X01/raw/master/res/Grove-Optical_Rotary_Encoder-TCUT1600X01.zip)

- **[PDF]** [Datasheet of TCUT1600X01](https://github.com/SeeedDocument/Grove-Optical_Rotary_Encoder-TCUT1600X01/raw/master/res/Optical_Sensor.pdf)

- **[PDF]** [Datasheet of MP3120](https://github.com/SeeedDocument/Grove-Optical_Rotary_Encoder-TCUT1600X01/raw/master/res/MP3120.pdf)


## Project

This is the introduction Video of this product, simple demos, you can have a try.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ds7kBVdeY4U?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>