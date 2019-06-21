---
name: Grove - Temperature&Humidity Sensor (High-Accuracy &Mini) v1.0
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Temperature&Humidity-Sensor-(High-Accuracy-&-Mini)-p-1921.html
oldwikiname: Grove_-_Tempture&Humidity_Sensor_(High-Accuracy_&Mini)_v1.0
prodimagename: Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/Grove Tem Hum Accuracy Mini.jpg
surveyurl: https://www.research.net/r/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1_0
sku: 101020074
tags: grove_i2c, io_3v3, io_5v, plat_duino, plat_linkit
---

![](https://github.com/SeeedDocument/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/raw/master/img/main.jpg)

This is a multifunctional sensor that gives you temperature and relative humidity information at the same time. It utilizes a TH02 sensor that can meet measurement needs of general purposes. It provides reliable readings when environment humidity condition in between 0-80% RH, and temperature condition in between 0-70°C, covering needs in most home and daily applications that don't contain extreme conditions.

<p style=":center"><a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-(High-Accuracy-%26-Mini)-p-1921.html" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p>


Specifications
--------------

-   Wide operating voltage range
    - (3.3V ~ 5V)
-   Low Power Consumption
    - 350 µA during RH conversion
-   0 to 100% RH operating range
-   Measuring Range:
    - Humidity: 0% - 80% RH
    - Temperature: 0 ~ 70 °C
-   Accuracy:
    - Humidity: ±4.5% RH
    - Temperature: ±0.5°C
-   I2C host interface
-   Excellent long term stability

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

##　Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Applications


-   Industrial HVAC/R
-   Thermostats/humidistats
-   Micro-environments/data centers


## Getting Started

!!!Note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.

### Play With Arduino

#### Hardware


- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Temperature&Humidity Sensor |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/raw/master/img/Thumbnail.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-(High-Accuracy-%26-Mini)-p-1921.html)|


- **Step 2.** Connect Grove - Temperature&Humidity Sensor (High-Accuracy &Mini) v1.0 to **I2C** port of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/raw/master/img/arduino_connect.jpg)




!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove - Temperature and Humidity Sensor Pro to Seeeduino as below.


| Seeeduino       | Temperature&Humidity Sensor |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL            | Yellow                  |


#### Software

- **Step 1.** Download the  [Grove Temperature&Humidity TH02 library](https://github.com/Seeed-Studio/Grove_Temper_Humidity_TH02)  from Github.

- **Step 2.** Refer [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open “ TH02_demo” example via the path: **File --> Examples --> Grove Temper Humidity_TH02 --> TH02_demo**. Through this demo, we can read the temperature and relative humidity information of the environment.

![](https://github.com/SeeedDocument/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/raw/master/img/path.png)



This demo is going to show you how to read temperature and humidity information from this Grove - Temperature&Humidity Sensor (High-Accuracy &Mini) Sensor.


- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the temperature.

The result should be like:

![](https://github.com/SeeedDocument/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/raw/master/img/result_arduino.png)




## Resources


- **[Zip]** [Grove - Temperature&Humidity Sensor (High-Accuracy & Mini) V1.0 sch pcb](https://raw.githubusercontent.com/SeeedDocument/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/master/res/Grove-TemperatureAndHumidity_Sensor-High-Accuracy_And_Mini-V1.0_sch_pcb.zip)
- **[PDF]** [TH02_SENSOR.pdf](https://raw.githubusercontent.com/SeeedDocument/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/master/res/TH02_SENSOR.pdf)
- **[Library]** [Grove_Temper_Humidity_TH02 library](https://github.com/Seeed-Studio/Grove_Temper_Humidity_TH02)


## Projects

**Smart Mali**: A Smart Pot for Indoor Gardening! {Wondering what Mali means?}

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/alpha007/smartmali-1fbdda/embed' width='350'></iframe>

**Cold Transport Chain Monitoring and Tracking**: IoT based solution to make delivery of temperature sensitive perishable products more efficient and to reduce wastage.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/musketeers/cold-transport-chain-monitoring-and-tracking-48b2c5/embed' width='350'></iframe>


## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>