---
description: Grove - Infrared Temperature Sensor Array(AMG8833)
title: Grove - Infrared Temperature Sensor Array(AMG8833)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Infrared_Temperature_Sensor_Array-AMG8833
last_update:
  date: 1/4/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/main.jpg" /></div>

The Grove - Infrared Temperature Sensor Array (AMG8833) is a high precision infrared array sensor which based on advanced MEMS technology. It can support temperature detection of two-dimensional area: 8 × 8 (64 pixels) and maximum 7 meters detection distance.

We provide both Arduino and Raspberry Pi demo for this sensor. It will be a perfect module to make your own thermal camera.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-(AMG8833)-p-3185.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Features

- Temperature detection of two-dimensional area: 8 × 8 (64 pixels)
- I2C output (capability of temperature value output)
- High precision
- Long detection distance

## Specification

|Item|Value|
|---|---|
|Operating Voltage|3.3V / 5V|
|Temperature range of measuring object|0 °C to 80 °C +32 °F to +176 °F|
|Operating temperature range|0 °C to 80 °C +32 °F to +176 °F|
|Storage temperature range|−20 °C to 80 °C –4 °F to +176 °F|
|Temperature accuracy|Typical ±2.5 °C ±4.5 °F|
|Viewing angle|Typical 60 °|
|Optical axis gap|Within Typical ±5.6 °|
|Number of pixel|64 (Vertical 8 × Horizontal 8 Matrix)|
|External interface| I2C|
|I2C Address|0x68(default) \\  0x69(optional)|

## Typical Applications

- High function home appliances (microwaves and air-conditioners)
- Energy saving at office (air-conditioning/lighting control)
- Digital signage
- Automatic doors/elevators

## Hardware Overview

### Pin Out

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/pin_out.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/pin_out_back.jpg" /></div>

### Schemaitc

**Power**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/schematic_1.jpg" /></div>

The typical voltage of AMG8833 is 3.3V, so we use the [XC6206P33](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/MP3120.pdf) chip to provide a stable 3.3V. The input of XC6206P33 ranges from 1.8V to 6.0V, so you can use this module with your Arduino both in 3.3V and 5V.

**Bi-directional level shifter circuit**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/schematic_2.jpg" /></div>

This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I2C bus. The I<sup>2</sup>C bus of this sensor use 3.3V, if the I<sup>2</sup>C bus of the Arduino use 5V, this circuit will be needed. In the schematic above, **Q6** and **Q5** are N-Channel MOSFET [2N7002A](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf), which act as a bidirectional switch. In order to better understand this part, you can refer to the [AN10441](https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf)

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield |Infrared Temperature Sensor Array |2.8 TFT Touch Shield V2.0|
|--------------|-------------|-----------------|-------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/2.8touch%20shieldv2.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-(AMG8833)-p-3185.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/2.8-TFT-Touch-Shield-V2.0-p-1286.html" target="_blank">Get One Now</a>|

:::note
**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy

**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::

- **Step 1.** Connect the Grove - Infrared Temperature Sensor Array (AMG8833) to port **I2C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Plug 2.8 TFT Touch Shield V2.0 into the Grove - Base Shield.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/connect_1.jpg" /></div>

:::note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.
:::

| Seeeduino      |  Grove Cable       | Grove - Infrared Temperature Sensor Array (AMG8833) |
|--------------- |--------------------|-----|
| GND            | Black              | GND |
| 5V or 3.3V     | Red                | VCC |
| SDA            | White              | SDA |
| SCL            | Yellow             | SCL |

#### Software

:::note
If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.** Download the [Seeed_AMG8833](https://github.com/Seeed-Studio/Seeed_AMG8833) Library from Github.

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open the example, you can open it in the following three ways：
    1. Open it directly in the Arduino IDE via the path: **File --> Examples --> Grove IR Matrix Temperature sensor AMG8833 --> TFT_screen_demo**.
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/path_1.jpg" /></div>

    2. Open it in your computer by click the **TFT_screen_demo.ino** which you can find in the folder **XXXXArduino\libraries\Seeed_AMG8833-master\examples\TFT_screen_demo**, **XXXX** is the location you installed the Arduino IDE.
    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/path_2.jpg" /></div>

    3. Or, you can just click the icon ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.

```C++
#include <stdint.h>
#include <TFTv2.h>
#include <SPI.h>

#include "Seeed_AMG8833_driver.h"


AMG8833 sensor;

#define TFT_PIXELS_NUM   30

void parse_int_status(u8* status)
{
    u8 val=0;
    for(u32 i=0;i<8;i++)
    {
        if(status[i])
        {
            for(u32 j=0;j<8;j++)
            {
                if(status[i]&((1<<j)))
                {
                    Serial.print("pixel ");
                    Serial.print(8*i+j+1);
                    Serial.println("interrupt is generated!!!");
                }
            }
        }
    }
}

void print_status(u8* status)
{
    for(u32 i=0;i<8;i++)
    {
        Serial.print(status[i],HEX);
        Serial.print("  ");

    }
    Serial.println("  ");
}




void setup()
{
    Serial.begin(115200);
    sensor.init();
    TFT_BL_ON;
    /*2.8 TFT screen. url:https://www.seeedstudio.com/2.8-TFT-Touch-Shield-V2.0-p-1286.html*/
    Tft.TFTinit();
}



void loop()
{
    u8 val=0;
    float pixels_temp[PIXEL_NUM]={0};
    u16 color[PIXEL_NUM]={0};
    /*Read temperature*/
    sensor.read_pixel_temperature(pixels_temp);
    /*Different temperature correspond to different color.*/
    for(u32 i=0;i<PIXEL_NUM;i++)
    {
        if(pixels_temp[i]<29)
        {
            color[i]=BLUE;
        }
        else if((pixels_temp[i]>=29)&&(pixels_temp[i]<30))
        {
            color[i]=GREEN;
        }
        else if((pixels_temp[i]>=30)&&(pixels_temp[i]<31))
        {
            color[i]=YELLOW;
        }
        else if((pixels_temp[i]>=31)&&(pixels_temp[i]<33))
        {
            color[i]=0xfd00;
        }
        else
        {
            color[i]=RED;
        }
    }
    /*Use a TFT screen to display.*/
    for(u32 i=0;i<PIXEL_NUM;i++)
    {
        Tft.fillScreen(TFT_PIXELS_NUM*(i%8),TFT_PIXELS_NUM*(i%8+1),TFT_PIXELS_NUM*(8-i/8),TFT_PIXELS_NUM*(7-i/8),color[i]);
    }
}

```

:::caution
        The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.
:::

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

:::tipsuccess
    If every thing goes well, you will see the TFT screen shows the temperature map.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/result_arduino.gif" /></div>

### Play with Raspberry

:::note
        If this is the first time you play with a raspberry pi, please refer to the [Get start with a raspberry Pi](https://www.raspberrypi.org/documentation/).
:::

#### Hardware

**Materials required**

| Raspberry Pi |Grove Base Hat for Raspberry Pi|Infrared Temperature Sensor Array |5 inch 800x480 Capacitive TouchScreen|
|--------------|-------------|-----------------|-------|
|    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grove_Pi_hat.jpg" /></div>|    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/thumbnail.jpg" /></div>|    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/pi_display.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3184.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-Array-(AMG8833)-p-3185.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/5-inch-800x480-Capacitive-TouchScreen-p-2923.html" target="_blank">Get One Now</a>|

:::tip
If you do not have a Pi-Screen you can use the PC monitor, or you can use the [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) to display the result remotely.
:::

- **Step 1.** Connect the Grove - Infrared Temperature Sensor Array (AMG8833) to port **I2C** of Grove Base Hat for Raspberry Pi.

- **Step 2.** Plug Grove Base Hat for Raspberry Pi into Raspberry Pi.

- **Step 3.** Connect the 5 inch 800x480 Capacitive TouchScreen with the Raspberry Pi via the HDMI cable.

- **Step 4.** Connect Raspberry Pi to PC via a micro-USB cable, power the 5 inch 800x480 Capacitive TouchScreen via another micro-USB cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/connect_2.jpg" /></div>

#### Software

- **Step 1.** Open the I2C interface for your raspberry pi. You can open a terminal and tap the following command.

```python
sudo raspi-config
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/I2C_1.png" /></div>

- **Step 2.** When you see the picture above, choose **Interfacing Options**, then choose **I2C** to enable the I2C interface.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/I2C_2.jpg" /></div>

- **Step 3.** When you finish, you can use the following command to check.

```python
sudo i2cdetect -y 1
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/I2C_3.jpg" /></div>

You can see the I2C address, which means the raspberry has detected the sensor. If not, please do step1~3 again. Ok, let's move on.

- **Step 4.** Tap the following commands in the terminal to install related dependencies.

```python
sudo apt-get update
sudo apt-get install -y build-essential python-pip python-dev python-smbus git
sudo apt-get install -y python-scipy python-pygame
sudo pip install colour
```

- **Step 5.** Download the Seeed AMG8833 Python Library.

```python
git clone https://github.com/Seeed-Studio/Seeed_AMG8833_Raspberry_Python.git
```

- **Step 6.** Go into the AMG8833 folder, and run the demo.

```python
pi@raspberrypi:~ $ cd Seeed_AMG8833_Raspberry_Python/
pi@raspberrypi:~/Seeed_AMG8833_Raspberry_Python $ ls
driver.py   README.md         Seeed_AMG8833.pyc
driver.pyc  Seeed_AMG8833.py  thermal_cam.py
pi@raspberrypi:~/Seeed_AMG8833_Raspberry_Python $ python thermal_cam.py
```

:::tipsuccess
If everthing goes well, you will see.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/img/result_pi.gif" /></div>

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/Grove%20-%20Infrared%20Array%20Sensor%20(AMG8833).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Zip]** [Grove - Infrared Temperature Sensor Array (AMG8833) Eagle Files](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/Grove%20-%20Infrared%20Array%20Sensor%20(AMG8833).zip)

- **[Zip]** [Seeed AMG8833 Arduino Library](https://github.com/Seeed-Studio/Seeed_AMG8833/archive/master.zip)

- **[Zip]** [Seeed AMG8833 Python Library](https://github.com/Seeed-Studio/Seeed_AMG8833_Raspberry_Python/archive/master.zip)

- **[PDF]** [AMG8833 DATASHEET](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/AMG88.pdf)

- **[PDF]** [XC6206 DATASHEET](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf)

## Project

This is the introduction Video of this product, simple demos, you can have a try.

<iframe width="560" height="315" src="https://www.youtube.com/embed/NG0E-qs8zgQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
