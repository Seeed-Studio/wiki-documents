---
description: Grove - 3 Axis Digital Accelerometer±16g Ultra-low Power (BMA400)
title: Grove - 3 Axis Digital Accelerometer±16g Ultra-low Power (BMA400)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-3-Axis_Digital_Accelerometer±16g_Ultra-low_Power-BMA400
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/main.jpg" alt="pir" width={600} height="auto" /></p>


The Grove - 3-Axis Digital Accelerometer ±16g Ultra-low Power (BMA400) sensor is a 12 bit, digital, triaxial acceleration sensor with smart on-chip motion and position-triggered interrupt features. It can detect your movement posture, such as Walking, Running, Standing still.


<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-%C2%B116g-Ultra-low-Power-(BMA400)-p-3201.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-%C2%B116g-Ultra-low-Power-(BMA400)-p-3201.html)


## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 3-Axis Digital Accelerometer ±16g Ultra-low Power (BMA400)  | Initial                                                                                               | Nov 2018      |



## Features

- Ultra-low power
- Programmable functionality
- On-chip FIFO
- On-chip interrupt features
> Auto-low power/Auto wakeup  
> Activity/In-activity  
> Step counter  
> Activity Recognition(Walking,Running,Standing still)  
> Orientation detection  
> Tap/Double tap



## Specification

|Item|Value|
|---|---|
|Operating Voltage|3.3V / 5V|
|Power consumption|18uA @5V / 14uA @3.3V|
|Operating Temperature|-40℃ ~ +85℃|
|Acceleration Range|±2g, ±4g, ±8g, ±16g|
|Sensitivity|1024LSB/g / @±2g 512LSB/g /  @±4g256LSB/g / @±8g128LSB/g / @±16g|
|Interface|I^2^C|
|I^2^C Address|0x15(default) / 0x14(optional)|
|Size|L: 40mm W: 20mm H: 10mm| 
|Weight|3.2g|
|Package size|L: 140mm W: 90mm H: 10mm|
|Gross Weight|10g|




## Typical applications

- Step Counting with ultra-low current consumption for extensive battery lifetime
- Fitness applications / Activity Tracking
- Tap / double tap sensing
- Drop detection for warranty logging
- Window/door measurements for climate control and alarm systems



## Hardware Overview

### Pin Out

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out.jpg" alt="pir" width={600} height="auto" /></p>


<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out_back.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out_back.jpg" alt="pir" width={600} height="auto" /></p>




### Schemaitc

**Power**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/shecmatic_2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/shecmatic_2.jpg" alt="pir" width={600} height="auto" /></p>

The typical voltage of BMA400 is 1.8V, so we use the [XC6206P182MR](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf) chip to provide a stable 1.8V. The input of XC6206P33 ranges from 1.8V to 6.0V, so you can use this module with your Arduino both in 3.3V and 5V.

**Bi-directional level shifter circuit**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/shecmatic_1.jpg) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/shecmatic_1.jpg" alt="pir" width={600} height="auto" /></p>

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I<sup>2</sup>C bus of this sensor use 1.8V, if the I<sup>2</sup>C bus of the Arduino use 5V or 3.3v, this circuit will be needed. In the schematic above, **Q1** and **Q2** are N-Channel MOSFET [CJ2102](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/res/CJ2102.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)




## Platforms Supported

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|


:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield | Grove BMA400 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-%C2%B116g-Ultra-low-Power-(BMA400)-p-3201.html" target="_blank">Get One Now</a>|


:::note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::


- **Step 1.** Connect the Grove - 3-Axis Digital Accelerometer ±16g Ultra-low Power (BMA400) to port **I^2^C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.
<!-- 
![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/connect.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/connect.jpg" alt="pir" width={600} height="auto" /></p>


:::note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.
:::

| Seeeduino      |  Grove Cable       | Grove BMA400 |
|--------------- |--------------------|-----|
| GND            | Black              | GND |
| 5V or 3.3V     | Red                | VCC |
| SDA            | White              | SDA |
| SCL            | Yellow             | SCL |


#### Software

:::note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.** Download the [Seeed_BMA400](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_BMA400) Library from Github.

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open the example, you can open it in the following three ways：
    1. Open it directly in the Arduino IDE via the path: **File --> Examples --> Grove 3-Axis Digital Accelerometer ±16g Ultra-low Power(BMA400) --> BMA400_Example**. 
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/Path_1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/Path_1.jpg" alt="pir" width={600} height="auto" /></p>

    
    2. Open it in your computer by click the **BMA400_Example.ino** which you can find in the folder **XXXX\Arduino\libraries\Grove_3Axis_Digital_Accelerometer_BMA400-master\examples\BMA400_Example**, **XXXX** is the location you installed the Arduino IDE.
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/Path_2.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/Path_2.jpg" alt="pir" width={600} height="auto" /></p>

    
    3. Or, you can just click the icon <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>
 in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.

```C++

#include "BMA400.h"

float x = 0, y = 0, z = 0;
int16_t temp = 0;

void setup(void)
{
    Wire.begin();
    
    Serial.begin(115200);
    while(!Serial);
    Serial.println("BMA400 Raw Data");

    while(1)
    {
        if(bma400.isConnection())
        {
            bma400.initialize();
            Serial.println("BMA400 is connected");
            break;
        }
        else Serial.println("BMA400 is not connected");
        
        delay(2000);
    }
}

void loop(void)
{
    bma400.getAcceleration(&x, &y, &z);
    temp = bma400.getTemperature();
    
    Serial.print(x);
    Serial.print(",");
    Serial.print(y);
    Serial.print(",");
    Serial.print(z);
    Serial.print(",");
    
    Serial.print(temp);
    
    Serial.println();
    
    delay(50);
}
```

:::attention
        The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.
:::


- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **115200**.


:::success
     If every thing goes well, it may show as below:
:::

```C++
BMA400 Raw Data
BMA400 is connected
85.94,357.42,916.02,23
-148.44,222.66,464.84,23
-626.95,320.31,1109.38,23
-500.00,-111.33,144.53,23
-398.44,-232.42,433.59,23
-783.20,-255.86,638.67,23
-1453.13,-552.73,822.27,23
```

The raw data format:

X-axis/unit mg; Y-axis/unit mg; Z-axis/unit mg; temperature/unit ℃


## Schematic Online Viewer


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20_6g%20Ultra-low%20Power(BMA400).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resources

- **[Zip]** [Grove - 3-Axis Digital Accelerometer ±16g Ultra-low Power (BMA400) Eagle Files](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20_6g%20Ultra-low%20Power(BMA400).zip)

- **[Zip]** [Seeed BMA400 Library](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Accelerometer_BMA400/archive/master.zip)

- **[PDF]** [Datasheet BMA400](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/res/BMA400_datasheet.pdf)

- **[PDF]** [XC6206 DATASHEET](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)



## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
