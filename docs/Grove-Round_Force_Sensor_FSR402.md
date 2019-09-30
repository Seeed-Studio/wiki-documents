---
name: Grove-Round Force Sensor(FSR402)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020553
tags: 
---


![](https://github.com/SeeedDocument/Grove-Round_Force_Sensor_FSR402/raw/master/img/main.jpg)


The Grove-Round Force Sensor(FSR402) is a force sensitive module. At the end of the sensor there is a round force sensitive resistor, the resistance of which depends on pressure applied to this resistor.
Simply say, the greater the pressure, the smaller the resistance. However, the output of this sensor is not strictly linear, so we do not recommend it for accurate measurements. For more detail about the pressure-resistance diagram, please check the 
[FSR402 Datasheet](https://github.com/SeeedDocument/Grove-Round_Force_Sensor_FSR402/raw/master/res/FSR402.pdf)

As the you can see, this module is based on FSR402,Interlink Electronics FSR® 400 Series is part of the single zone Force Sensing Resistor® family. Force Sensing Resistors, or FSR's, are robust polymer thick film (PTF) devices that exhibit a decrease in resistance with increase in force applied to the surface of the sensor. This force sensitivity is optimized for use in human machine interface devices including automotive electronics, medical systems, industrial controls and robotics.



<p style=":center"><a href="https://www.seeedstudio.com/Grove-Round-Force-Sensor-%28FSR402%29-p-3110.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove-Round Force Sensor(FSR402) | Initial                                                                                               | Jun 2018      |


## Features

- Analog output
- Reliable mechanical structure  
- High durability:
    
    Tested to 10 Million actuations, 1kg, 4Hz / -10% average resistance change


## Specification

|Item|Value|
|---|---|
|Working voltage|3.3V/5V|
|Force Sensitivity Range|0.2N--20N|
|Force Resolution|Continuous (analog)|
|Analog output|0-650|
|Non-Actuated Resistance|>10 MΩ|
|Minimum Resistance|1 KΩ|
|Device Rise Time|<3 Microseconds|
|Size|L: 75mm W: 20mm H: 11mm| 
|Weight|2.5g|
|Package size|L: 140mm W: 90mm H: 10mm|
|Gross Weight|10g|

!!!Tip
    If you want to measure the Non-Actuated Resistance, please remove this thing from the sensor


## Applications

- automotive electronics
- medical systems
- industrial controls
- robotics.


## Hardware Overview


### Pin Map


![](https://github.com/SeeedDocument/Grove-Round_Force_Sensor_FSR402/raw/master/img/pin_map.jpg)



### Schematic




![](https://github.com/SeeedDocument/Grove-Round_Force_Sensor_FSR402/raw/master/img/hardware.png)




This module use a DC-DC chip XC6206P332MR to provide a stable 3.3V, as you can see we called it 3V3. You can consider the Force Sensor **J1** as a variable resistance, let's say **R<sub>f<sub>**. The greater the pressure, the smaller the **R<sub>f<sub>** value.


There are two parts in the picture above, for the left part: 


<font color =#EE9A00>$VIN = \frac{3.3*30K}{30K+R_f}$</font>

For the right part, it's an Emitter follower, we use the amplifier **U1** to isolate the pre-stage and post-stage circuits.

<font color =#EE9A00>$Vout = VIN$</font>

So, the output is:

<font color =#EE9A00>$Vout = \frac{3.3*30K}{30K+R_f}$</font>


!!!Tip
        In this section we only show you part of the schematic, for the full document please refer to the [Resources](#Resources)



### Mechanical Drawing


![](https://github.com/SeeedDocument/Grove-Round_Force_Sensor_FSR402/raw/master/img/Mechanical_A.jpg)
![](https://github.com/SeeedDocument/Grove-Round_Force_Sensor_FSR402/raw/master/img/Mechanical_B.jpg)
![](https://github.com/SeeedDocument/Grove-Round_Force_Sensor_FSR402/raw/master/img/Exploded_View.jpg)





## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield| Grove-Round Force Sensor(FSR402) |Grove-LED|
|--------------|-------------|-----------------|--------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Round_Force_Sensor_FSR402/raw/master/img/thumbnail.jpg)|![](https://github.com/SeeedDocument/Grove-Round_Force_Sensor_FSR402/raw/master/img/Red%20LED.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Round-Force-Sensor-%28FSR402%29-p-3110.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove---Red-LED-p-1142.html" target="_blank">Get One Now</a>|



!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.





- **Step 1.** Connect Grove-Round Force Sensor(FSR402) to port **A0** of Grove-Base Shield.

- **Step 2.** Plug the Grove-LED to port **D3** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.


![](https://github.com/SeeedDocument/Grove-Round_Force_Sensor_FSR402/raw/master/img/connect.jpg)



!!!Note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.


| Seeeduino     | Grove-Round Force Sensor(FSR402)|
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| A0           | Yellow                  |



| Seeeduino     | Grove-LED|
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D3            | Yellow                  |



#### Software

!!!Note
    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


- **Step 1.** Open the Arduino IDE and create a new file, then copy the following code into the new file.

```C++
/* How to use a Force sensitive resistor to fade an LED with Arduino
   More info: http://www.ardumotive.com/how-to-use-a-force-sensitive-resistor-en.html
   Dev: Michalis Vasilakis // Date: 22/9/2015 // www.ardumotive.com  */

//Constants:
const int ledPin = 3;     //pin 3 has PWM funtion
const int sensorPin = A0; //pin A0 to read analog input

//Variables:
int value; //save analog value


void setup(){
    
  pinMode(ledPin, OUTPUT);  //Set pin 3 as 'output'
  Serial.begin(9600);       //Begin serial communication

}

void loop(){
  
  value = analogRead(sensorPin);       //Read and save analog value from potentiometer
  Serial.println(value);               //Print value
  value = map(value, 0, 1023, 0, 255); //Map value 0-1023 to 0-255 (PWM)
  analogWrite(ledPin,255-value);          //Send PWM value to led
  delay(100);                          //Small delay
  
}

```

- **Step 2.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 3.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the output of A0. Also, you will see the LED become lighter when you press the Round Force Sensor harder. 


## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-Round_Force_Sensor_FSR402/raw/master/res/Grove-Round_Force_Sensor_FSR402.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- **[Zip]** [Grove-Round Force Sensor(FSR402) eagle file](https://github.com/SeeedDocument/Grove-Round_Force_Sensor_FSR402/raw/master/res/Grove-Round_Force_Sensor_FSR402.zip)
- **[Zip]** [Adafruit_NeoPixel-master](https://github.com/SeeedDocument/Grove-Mech_Keycap/raw/master/res/Adafruit_NeoPixel-master.zip)
- **[PDF]** [Datasheet of FSR402](https://github.com/SeeedDocument/Grove-Round_Force_Sensor_FSR402/raw/master/res/FSR402.pdf)


## Project

This is the introduction Video of this product, simple demos, you can have a try.

<iframe width="560" height="315" src="https://www.youtube.com/embed/55WQ3ia52JM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>