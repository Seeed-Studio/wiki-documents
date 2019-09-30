---
name: Grove - Solid State Relay V2
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 103020137
tags:
---

![](https://github.com/SeeedDocument/Grove-Solid_State_Relay_V2/raw/master/img/main.jpg)

Instead of using coil, packaged solid-state relays(SSR) use power semiconductor devices such as thyristors and transistors, which provide a much faster switching speed than the mechanical relays. The **Grove - Solid State Relay V2** is based on the high-quality **G3MC202P** module, which allows you to use a 5VDC to control MAX. 240VAC. With the help of Grove interface, it becomes very convenient to use the SSR with your arduino.


According to different application scenarios, we have prepared a series of solid state relays for you.

Grove - Solid State Relay V2

[Grove - 2-Channel Solid State Relay](http://wiki.seeedstudio.com/Grove-2-Channel_Solid_State_Relay)

[Grove - 4-Channel Solid State Relay](http://wiki.seeedstudio.com/Grove-4-Channel_Solid_State_Relay)

[Grove - 8-Channel Solid State Relay](http://wiki.seeedstudio.com/Grove-8-Channel_Solid_State_Relay)



<p style=":center"><a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-V2-p-3128.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Solid State Relay V2 | Initial                                                                                               | Aug 2018      |


## Features

- Advantages over mechanical relays:

    - Solid-state relays have much faster switching speeds compared with electromechanical relays, and have no physical contacts to wear out
    - Totally silent operation
    - No physical contacts means no sparking, allows it to be used in explosive environments, where it is critical that no spark is generated during switching
    - Increased lifetime, even if it is activated many times, as there are no moving parts to wear and no contacts to pit or build up carbon
    - Compact, thin-profile SSR of monoblock construction with an all-in-one lead frame incorporates a PCB, terminals and heat sink, which is much smaller than mechanical relays, and can integrate more channels



- Disadvantages:

    - When closed, higher resistance (generating heat), and increased electrical noise
    - When open, lower resistance, and reverse leakage current
    - Only works for AC laod



## Specification

|Item|Value|
|---|---|
|Operating input voltage|4~6V|
|Rated Input Voltage|5V|
|Rated Load Voltage|100 to 240 VAC 50/60 Hz|
|Load Voltage Range|75 to 264 VAC 50/60 Hz||
|Load current|0.1 to 2 A|
|Leakage current|1.5 mA max. (at 200 VAC)|
|Insulation Resistance|1,000 MΩ min. (at 500 VDC)|
|Operate Time|1/2 of load power source cycle +1 ms max.|
|Release Time|1/2 of load power source cycle + 1 ms max.|
|Storage Temperature|-30°C to 100°C (with no icing or condensation)|
|Operating Temperature|-30°C to 80°C (with no icing or condensation)|
|Operating Humidity| 45% to 85%RH|
|Input Interface|Digital|
|Output Port|DIP Female Blue 2 pin |
|Zero Cross|support|
|Certification|UL /  CSA|
|Size|L: 40mm W: 20mm H: 23mm| 
|Weight|8.2g|
|Package size|L: 120mm W: 65mm H: 52 mm|
|Gross Weight|132g|


!!!Note
        You may pay attention to the **Leakage current**, 1.5mA is strong enough to drive Low power LED, so when the relay is off, the LED may still emits a faint light.

## Applications

- Operations that require low-latency switching, e.g. stage light control
- Devices that require high stability, e.g. medical devices, traffic signals
- Situations that require explosion-proof, anticorrosion, moisture-proof, e.g. coal, chemical industries.


## Hardware Overview

### Pin MAP

![](https://github.com/SeeedDocument/Grove-Solid_State_Relay_V2/raw/master/img/PIN_map_.jpg)

### Schematic

![](https://github.com/SeeedDocument/Grove-Solid_State_Relay_V2/raw/master/img/schematic_.jpg)

**K1** is the Relay module, When a  5V voltage is applied between the **INT+** and **INT-**, the relay will be turned on. Then the **LOAD1** will connect to the **LOAD2**.We use a NPN transistors **Q1**(BC817-40) to control the voltage between the **INT+** and **INT-**.


The **CTR** is the control signal from the Arduino or other board. It is pulled down by the 10k R2, if there is no signal, the 'Gate'(port 1) of **Q1** will be 0v, and Q1 is turned off, so that the K1 will be turned off. If **CTR** becomes 5v, then the Q1 will be turned on. **INT-** of k1 will be connected to the GND of the system, for the K1 there will be 5V between **INT+** and **INT-**, so the K1 will be turned on, and the **LOAD1** will connect to **LOAD2**.


!!!NOTE
        In this section we only show you part of the schematic, for the full document please refer to the [Resources](/#resources)


## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg)  |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.




## Getting Started


### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield| Grove - Solid State Relay V2 |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Solid_State_Relay_V2/raw/master/img/thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-V2-p-3128.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.


- **Step 1.** Connect the Grove - Solid State Relay to port **D7** of Grove-Base Shield.

- **Step 2.** Cut off one wire, one end is connected to **LOAD1**, and the other end is connected to **LOAD2**.

- **Step 3.** Connect the **LOAD1** to the power, and connect the **LOAD2** to the Fan

- **Step 4.** Plug Grove - Base Shield into Seeeduino.

- **Step 5.** Connect Seeeduino to PC via a Micro-USB cable.


![](https://github.com/SeeedDocument/Grove-Solid_State_Relay_V2/raw/master/img/connect.jpg)


#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


- **Step 1.** Open the Arduino IDE and create a new file, you can just click the icon ![](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/copy.jpg) in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.

```c++
#include <Arduino.h>
uint8_t pin = 7;
void setup() {
  pinMode(pin, OUTPUT);}
void loop() {
  digitalWrite(pin, HIGH);
  delay(5000);
  digitalWrite(pin, LOW);
  delay(5000);
}

```

- **Step 2.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).


!!!success
    You will see the on-board LED alternately lit and extinguished, and the Fan alternately turns on and off.


## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-Solid_State_Relay_V2/raw/master/res/Grove-Solid_State_Relay_V2_Eagle.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>



## Resources

- **[Zip]** [Grove - Solid State Relay V2 eagle files](https://github.com/SeeedDocument/Grove-Solid_State_Relay_V2/raw/master/res/Grove-Solid_State_Relay_V2_Eagle.zip)
- **[PDF]** [Datasheet of G3MC202P](https://github.com/SeeedDocument/Grove-Solid_State_Relay_V2/raw/master/res/G3MC202p.pdf)


## Project

This is the introduction Video of this product, simple demos, you can have a try.

<iframe width="560" height="315" src="https://www.youtube.com/embed/5uBLf_a0DNc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>



## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>