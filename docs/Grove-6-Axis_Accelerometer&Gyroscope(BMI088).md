---
name: Grove - 6-Axis Accelerometer&Gyroscope(BMI088)
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020584
tags:
---

![](https://github.com/SeeedDocument/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/raw/master/img/main.jpg)

The Grove - 6-Axis Accelerometer&Gyroscope(BMI088) is a 6 DoF(degrees of freedom) High-performance Inertial Measurement Unit(IMU) .This sensor is based on BOSCH BMI088, which is a high-performance IMU with high vibration suppression. The 6-axis sensor combines a 16 bit triaxial gyroscope and a 16 bit triaxial accelerometer. Specialy, you can use this sensor on the drone and robotics application in demanding environments. 

<p style=":center"><a href="https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Gyroscope-(BMI088)-p-3188.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## Features

- The BM1088 is designed for drones, robotics and industry applications with challenging performance requirements. 
- Wide acceleration measurment range(up to 24g)
- The accelerometer features a low TCO of 0.2 mg/K and low spectral noise of only 230 pg/sqrt(Hz) in the widest measurement range of ± 24 g


## Specification

|Item|Value|
|---|---|
|Operating Voltage|3.3V / 5V|
|Measurement range and sensitivity|**Accelerometer**<br>±3g @10920 LSB/g<br>±6g @5460 LSB/g<br>±12g @2730 LSB/g<br>±24g @1365 LSB/g<br>**Gyroscope**<br>±125°/s @262.1 LSB/°/s<br>±250°/s @131.1 LSB/°/s<br>±500°/s @65.5 LSB/°/s<br>±1000°/s @32.8 LSB/°/s<br>±2000°/s @16.4 LSB/°/s<br>|
|Operating Temperature Range|-40℃ ~ +85℃|
|Zero Offset|**Accelerometer**<br>±30 mg<br>**Gyroscope**<br>±1°/s|
|TCO|**Accelerometer**<br>±0.2 mg/K<br>**Gyroscope**<br>±0.015°/s/K|
|External interface| I^2^C|
|I^2^C Address|**Accelerometer**<br>0x19(default) \\  0x18(optional)<br>**Gyroscope**<br>±1°/s0x69(default) \\  0x68(optional)|

## Typical Applications

- Drones and flying toys
- Industrial robots, hover boards
- Domestic applications(e.g. vacuum cleaner, social robots,etc.)

## Hardware Overview

### Pin Out

![](https://github.com/SeeedDocument/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/raw/master/img/pin_out.jpg)

![](https://github.com/SeeedDocument/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/raw/master/img/pin_out_back.jpg)


### Schemaitc

**Power**

![](https://github.com/SeeedDocument//Grove-6-Axis_Accelerometer-Gyroscope-BMI088/raw/master/img/schematic_1.jpg)

The operating voltage range of BMI088 is 2.4-3.6V, so we use the [XC6206P30](https://github.com/SeeedDocument/Grove-Infrared_Temperature_Sensor_Array-AMG8833/raw/master/res/XC6206.pdf) chip to provide a stable 3.0V. The input of XC6206P30 ranges from 1.8V to 6.0V, so you can use this module with your Arduino both in 3.3V and 5V.


**Bi-directional level shifter circuit**
![](https://github.com/SeeedDocument//Grove-6-Axis_Accelerometer-Gyroscope-BMI088/raw/master/img/schematic_2.jpg)

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of this sensor use 3.3V, if the I<sup>2</sup>C bus of the Arduino use 5V, this circuit will be needed. In the schematic above, **Q1** and **Q2** are N-Channel MOSFET [CJ2102](https://github.com/SeeedDocument/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/raw/master/res/CJ2102.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://github.com/SeeedDocument/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/raw/master/res/AN10441.pdf)


## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield | Grove (BMI088) |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/raw/master/img/thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-6-Axis-Accelerometer%26Gyroscope-(BMI088)-p-3188.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.


- **Step 1.** Connect the Grove - 6-Axis Accelerometer&Gyroscope(BMI088) to port **I^2^C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


![](https://github.com/SeeedDocument/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/raw/master/img/connect.jpg)


!!!Note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.


| Seeeduino      |  Grove Cable       | Grove (BMI088) |
|--------------- |--------------------|-----|
| GND            | Black              | GND |
| 5V or 3.3V     | Red                | VCC |
| SDA            | White              | SDA |
| SCL            | Yellow             | SCL |



#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


- **Step 1.** Download the [Seeed_BMI088](https://github.com/Seeed-Studio/Grove_6Axis_Accelerometer_And_Gyroscope_BMI088) Library from Github.

- **Step 2.** Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open the example, you can open it in the following three ways：
    1. Open it directly in the Arduino IDE via the path: **File --> Examples --> Grove 6-Axis Accelerometer&Gyroscope --> BM1088_Example**. 
    ![](https://github.com/SeeedDocument/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/raw/master/img/path_1.jpg)
    
    2. Open it in your computer by click the **BM1088_Example.ino** which you can find in the folder **XXXX\Arduino\libraries\Grove_6Axis_Accelerometer_And_Gyroscope_BMI088-master\examples\BMI088_Example**, **XXXX** is the location you installed the Arduino IDE.
    ![](https://github.com/SeeedDocument/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/raw/master/img/path_2.jpg)
    
    3. Or, you can just click the icon ![](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/copy.jpg) in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.


```C++

#include "BMI088.h"

float ax = 0, ay = 0, az = 0;
float gx = 0, gy = 0, gz = 0;
int16_t temp = 0;

void setup(void)
{
    Wire.begin();
    Serial.begin(115200);
    
    while(!Serial);
    Serial.println("BMI088 Raw Data");
    
    while(1)
    {
        if(bmi088.isConnection())
        {
            bmi088.initialize();
            Serial.println("BMI088 is connected");
            break;
        }
        else Serial.println("BMI088 is not connected");
        
        delay(2000);
    }
}

void loop(void)
{    
    bmi088.getAcceleration(&ax, &ay, &az);
    bmi088.getGyroscope(&gx, &gy, &gz);
    temp = bmi088.getTemperature();
    
    Serial.print(ax);
    Serial.print(",");
    Serial.print(ay);
    Serial.print(",");
    Serial.print(az);
    Serial.print(",");
    
    Serial.print(gx);
    Serial.print(",");
    Serial.print(gy);
    Serial.print(",");
    Serial.print(gz);
    Serial.print(",");
    
    Serial.print(temp);
    
    Serial.println();
    
    delay(50);
}
```

!!!Attention
        The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.



- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **115200**.


!!!success
     If every thing goes well, when you open the Serial Monitor, it may show as below:

```c++
BMI088 Raw Data
BMI088 is connected
394.41,-383.06,818.66,1.71,-4.88,-2.93,27
390.20,-385.25,830.38,5.49,0.24,1.83,27
388.37,-380.31,826.54,0.73,2.93,7.57,27
395.51,-384.16,823.79,-0.85,-5.74,5.98,27
385.80,-386.72,824.52,3.78,-5.00,1.59,27
395.51,-384.52,824.71,1.46,3.17,10.86,27
```

## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/raw/master/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope(BMI088).zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- **[Zip]** [Grove - 6-Axis Accelerometer&Gyroscope(BMI088) Eagle Files](https://github.com/SeeedDocument/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/raw/master/res/Grove%20-%206-Axis%20Accelerometer%26Gyroscope(BMI088).zip)

- **[Zip]** [Seeed BMI088 Library](https://github.com/Seeed-Studio/Grove_6Axis_Accelerometer_And_Gyroscope_BMI088/archive/master.zip)

- **[PDF]** [Datasheet BMI088](https://github.com/SeeedDocument/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/raw/master/res/BMI088.pdf)

- **[PDF]** [XC6206 DATASHEET](https://github.com/SeeedDocument/Grove-Infrared_Temperature_Sensor_Array-AMG8833/raw/master/res/XC6206.pdf)


## Project

This is the introduction Video of this product, simple demos, you can have a try.

<iframe width="560" height="315" src="https://www.youtube.com/embed/gPi4EWuAGtg?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>