---
name: Grove - Time of Flight Distance Sensor-VL53L0X
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html
oldwikiname: 
prodimagename:
surveyurl: https://www.surveymonkey.com/r/Grove_Temperature_and_Humidity_Sensor_Pro
sku: 101020532
tags: io_3v3, io_5v, plat_duino, plat_pi

---

![](https://github.com/SeeedDocument/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/raw/master/img/main.JPG)


Grove - Time of Flight Distance Sensor-VL53L0X is a high speed, high accurary and long range distance sensor based on VL53L0X.

The VL53L0X is a new generation Time-of-Flight (ToF) laser-ranging module housed in the smallest package on the market today, providing accurate distance measurement whatever the target reflectances unlike conventional technologies. It can measure absolute distances up to 2m, setting a new benchmark in ranging performance levels, opening the door to various new applications.

The VL53L0X integrates a leading-edge SPAD array (Single Photon Avalanche Diodes) and embeds ST’s second generation FlightSenseTM patented technology.

The VL53L0X’s 940 nm VCSEL emitter (VerticalCavity Surface-Emitting Laser), is totally invisible to the human eye, coupled with internal physical infrared filters, it enables longer ranging distances, higher immunity to ambient light, and better robustness to cover glass optical crosstalk.



<p style=":center"><a href="https://www.seeedstudio.com/" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Features

- **Fully integrated miniature module**
		
	- 940 nm laser VCSEL
	- VCSEL driver
	- Ranging sensor with advanced embedded micro controller

- **Fast, accurate distance ranging**
	- Measures absolute range up to 2 m
	- Reported range is independent of the target reflectance
	- Advanced embedded optical cross-talk compensation to simplify cover glass selection

- **Eye safe**
	- Class 1 laser device compliant with latest standard IEC 60825-1:2014 - 3rd edition

- **Easy integration**
	- Single reflowable component
	- No additional optics
	- Single power supply
	- I2C interface for device control and data transfer
	- Xshutdown (reset) and interrupt GPIO
	- Programmable I2C address


## Specification

Feature|Detail
---|---
Operating voltage|3.3V/5V
Operating temperature|-20℃ - 70℃
Recommed measure distance|30mm-1000mm
Resolution|1mm
Infrared emitter|940 nm
Bus rate|Up to 400 kHz (FAST mode) serial bus
IIC Address|0x29



## Applications

- User detection for personal computers/laptops/tablets and IoT (energy saving)
- Robotics (obstacle detection)
- White goods (hand detection in automatic faucets, soap dispensers etc.)
- 1D gesture recognition.
- Laser assisted autofocus. Enhances and speeds up camera autofocus system performance, especially in difficult scenes (low light levels, low contrast) or fast moving video mode.


## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.




## Getting Started

!!!Note
    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.



### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield| Grove - Time of Flight Distance Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/raw/master/img/thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html" target="_blank">Get One Now</a>|



!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy 


- **Step 1.** Connect Grove - Time of Flight Distance Sensor to port **IIC** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/raw/master/img/connect.jpg)



!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove - Temperature and Humidity Sensor Pro to Seeeduino as below.


| Seeeduino       | Grove - Time of Flight Distance Sensor |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| SDA            | White                   |
| SCL            | Yellow                  |


#### Software

- **Step 1.** Download the [VL53L0X Library](https://github.com/Seeed-Studio/Grove-Ranging-sensor-VL53L0X) from Github.

- **Step 2.** Extract the `Grove-Ranging-sensor-VL53L0X-master.zip` file into the `Arduino library folder`.

!!!Note
		For example, I download this library into `D:\Software\WorkWork\arduino-1.8.5\libraries`,so only need to extract the zip file here. All in all, please make sure the `Grove-Ranging-sensor-VL53L0X-master` folder is in your Arduino library folder, like the picture below.


![](https://github.com/SeeedDocument/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/raw/master/img/folder.png) 


- **Step 3.** Open the `Grove-Ranging-sensor-VL53L0X-master\examples` folder you've just extracted, you will see five subfolders:

![](https://github.com/SeeedDocument/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/raw/master/img/examples.png)


Choose different example according to your own needs. Then double click the `xxx.ino` file to open the Arduino IDE.

!!!Attention
		We use `high_accuracy_ranging.ino` in this demo.


- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the result.


The result should be like:

```
time of mesurement: 205
Measured distance:115 mm
time of mesurement: 205
Measured distance:117 mm
time of mesurement: 205
Measured distance:120 mm
time of mesurement: 205
Measured distance:125 mm
time of mesurement: 204
Measured distance:130 mm
time of mesurement: 205
Measured distance:138 mm
time of mesurement: 205
Measured distance:143 mm
time of mesurement: 205
Measured distance:144 mm
time of mesurement: 205
Measured distance:152 mm

```


## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/raw/master/res/Grove%20-%20Time%20of%20Flight%20Distance%20Sensor%20(VL53L0X).zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>



## Resources


- **[ZIP]** [Grove-Time of Flight Distance Sensor VL53L0X Eagle files](https://github.com/SeeedDocument/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/raw/master/res/Grove%20-%20Time%20of%20Flight%20Distance%20Sensor%20(VL53L0X).zip)
- **[PDF]** [VL53L0X User Manual](https://github.com/SeeedDocument/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/raw/master/res/software-flow.pdf)
- **[PDF]** [VL53L0X Datasheet](https://github.com/SeeedDocument/Grove-Time_of_Flight_Distance_Sensor-VL53L0X-/raw/master/res/vl53l0x-datasheet.pdf)


## Tech Support
Please do not hesitate to contact [techsupport@seeed.cc](techsupport@seeed.cc) if you have any technical issue. Or submit the issue into our [forum](https://forum.seeedstudio.com/).<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>