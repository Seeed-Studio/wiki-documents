---
description: Grove - Temperature Humidity Pressure Gas Sensor(BME680)
title: Grove - Temperature Humidity Pressure Gas Sensor(BME680)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.webp
slug: /Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680
last_update:
  date: 4/14/2025
  author: Priyanshu Roy
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.jpg" /></div>

The Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680) is a multiple function sensor which can measure temperature, pressure, humidity and gas at the same time. It is based on the BME680 module and you can use this sensor in your GPS, IoT devices or other device which needs those four parameters.



<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

:::note
  The 'gas' means air quality which is mainly affected by the [VOCs](https://en.wikipedia.org/wiki/Volatile_organic_compound) (volatile organic compounds) gas.  At this time Augest 8,2018, this module do not support gas mearsue for some Arduino board. It is only available for the Arduino board with the large memory arduino platform like ATMEGA2560. If you use other arduino platform, like: arduino uno, seeedunio v4.2... the gas value you get is not accurate.
:::

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2101 Wireless Temperature and Humidity Sensor with higher performance and robustness for air quality monitoring. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) for your next successful industrial project.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP Industrial Sensor</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 Air Temp &amp; Humidity</strong></a></td>
    </tr>
  </tbody>
</table>

## Features

- 4-in-1 for multiple measurement
- low consumption
- Wide measurement range
- Optional output:

    Individual humidity, pressure and gas sensors can be independently enabled/diabled

## Specification

|Item|Value|
|---|---|
|Working voltage|3.3V/5V|
|Operating range|-40~+85℃; 0-100% r.H.; 300-1100hPa|
|Digital interface|I2C(up to 3.4MHZ)/ SPI(3 and 4 wire, up to 10MHz)|
|I2C address|0x76(default)/ 0x77(optional)|

## Hardware Overview

### Pin Map

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/pin_map.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/pin_map_back.jpg" /></div>

:::caution
        If you want to change the default settings, you may need to cut the pad and solder by yourself, please follow the picture above and please be careful when you use knife or soldering iron.
:::

## Platforms Supported

|Arduino|Raspberry Pi|ESP-IDF|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/esp_idf.png" alt="esp-idf" width={200} height="auto" /></p>|

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield| Grove-BME680 |
|--------------|-------------|-----------------|
|<div align="center"><img height="200" src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img height="200" src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img height="200" src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html" target="_blank">Get One Now</a>|

:::note
**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy

**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::

- **Step 1.** Connect the Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680) to port **I2C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/7.jpg" /></div>

:::note
If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.
:::

| Seeeduino     |  Grove-BME680           |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL           | Yellow                  |

#### Software

:::note
If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.** Download the [Grove BME680](https://github.com/Seeed-Studio/Seeed_BME680) Library from Github.

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open “BME680” example via the path: **File --> Examples --> Seeed BME680 --> seeed_bme680_test**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/demo_path.jpg" /></div>

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the result.

The result should be like:

```c
Serial start!!!
temperature ===>> 27.14 C
pressure ===>> 94.51 KPa
humidity ===>> 65.76 %
gas ===>> 101.51 Kohms


temperature ===>> 27.15 C
pressure ===>> 94.51 KPa
humidity ===>> 65.76 %
gas ===>> 101.64 Kohms


temperature ===>> 27.14 C
pressure ===>> 94.51 KPa
humidity ===>> 65.77 %
gas ===>> 101.64 Kohms


temperature ===>> 27.15 C
pressure ===>> 94.51 KPa
humidity ===>> 65.80 %
gas ===>> 101.76 Kohms

```

:::note
        1 - To get the stable and accurate value, you need to let the arduino run the code for about 2 hours. The result is much more reliable then.

        2 - For the gas part, it's a variable resistance which reflect the value of the VOC gas, so the unit is Kohms. 
        
        3 - If you want to get a reliable result for gas part, please use Arduino Mega and check [here](https://github.com/Seeed-Studio/Seeed_BME680_V1)
:::

### Play With ESP-IDF

#### Hardware

**Materials required**

<table align="center">
  <tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio Grove Base for XIAO</th>
    <th>Grove BME680 Environmental Sensor</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.jpg" style={{height: 150, objectFit: 'contain'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

:::note
**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy

**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::

- **Step 1.** Connect the Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680) to the Grove Base for XIAO using the Grove cable.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/XIAO_Grove_BME680.png" alt="pir" width={600} height="auto" /></p>

- **Step 2.** Connect XIAO ESP32C3 to PC via a USB cable.

#### Software

:::note
If this is the first time you work with ESP-IDF, we strongly recommend you to see [Getting Started with ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html) before the start.
:::

- **Step 1.** Install ESP-IDF following the [official guide](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html).

- **Step 2.** Create a new project using ESP-IDF template.

- **Step 3.** Clone the BME680 component repository:
```bash
cd <your_project>/components
git clone --recursive https://github.com/Priyanshu0901/grove_bme680.git
```

- **Step 4.** Configure the I2C pins in your project's `sdkconfig` file or using menuconfig:
```bash
idf.py menuconfig
```
Navigate to `Component config -> BME680 Sensor Configuration` and set:
- I2C SDA Pin: 6
- I2C SCL Pin: 7

- **Step 5.** Copy the example code from the component's `examples` directory to your project's `main` directory.

- **Step 6.** Build and flash the project:
```bash
idf.py build
idf.py -p /dev/ttyUSB0 flash monitor
```

The output should be similar to:

```
I (251) main_task: Started on CPU0
I (251) main_task: Calling app_main()
I (251) BME680_EXAMPLE: BME680 sensor example started
I (261) BME680_EXAMPLE: Initializing BME680 sensor...
I (261) BME680_IF: I2C interface initialized with address: 0x76
I (271) BME680_IF: BME680 interface initialized successfully
I (281) BME680: BME680 configured successfully
I (281) BME680: BME680 initialized successfully
I (281) BME680_EXAMPLE: BME680 initialized, waiting for sensor to stabilize...
I (1291) BME680_EXAMPLE: Performing first sensor reading...
I (1411) BME680_EXAMPLE: First sensor reading successful on attempt 1
I (1411) BME680_EXAMPLE: Sensor Data:
I (1411) BME680_EXAMPLE:   Temperature: 30.46 °C
I (1411) BME680_EXAMPLE:   Pressure: 910.34 hPa
I (1411) BME680_EXAMPLE:   Humidity: 51.17 %
I (1421) BME680_EXAMPLE:   Gas Resistance: 12561.98 kOhm
I (1421) BME680_EXAMPLE:   Gas Valid: Yes
I (1431) BME680_EXAMPLE:   Data Valid: Yes
I (1561) BME680_EXAMPLE: Sensor Data:
I (1561) BME680_EXAMPLE:   Temperature: 30.50 °C
I (1561) BME680_EXAMPLE:   Pressure: 910.33 hPa
I (1561) BME680_EXAMPLE:   Humidity: 51.20 %
I (1561) BME680_EXAMPLE:   Gas Resistance: 136.83 kOhm
I (1571) BME680_EXAMPLE:   Gas Valid: Yes
I (1571) BME680_EXAMPLE:   Data Valid: Yes
I (3691) BME680_EXAMPLE: Sensor Data:
I (3691) BME680_EXAMPLE:   Temperature: 30.50 °C
I (3691) BME680_EXAMPLE:   Pressure: 910.33 hPa
I (3691) BME680_EXAMPLE:   Humidity: 51.04 %
I (3691) BME680_EXAMPLE:   Gas Resistance: 96.77 kOhm
I (3701) BME680_EXAMPLE:   Gas Valid: Yes
I (3701) BME680_EXAMPLE:   Data Valid: Yes
```

:::note
1. The example code includes error handling and recovery mechanisms for sensor read failures.
2. The sensor requires some time to stabilize after initialization, so the first few readings might not be accurate.
3. The gas resistance value is in kOhms and represents the air quality.
4. The sensor supports both I2C and SPI interfaces, but the example uses I2C by default.
5. Make sure to use the correct I2C pins (GPIO6 for SDA and GPIO7 for SCL) when using with XIAO ESP32C3.
:::

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor_BME680.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Zip]** [Grove-BME680 Eagle file](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor_BME680.zip)
- **[Library]** [Seeed BME680 Library](https://github.com/Seeed-Studio/Seeed_BME680)
- **[PDF]** [Datasheet of BME680](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/BME680.pdf)

## Project

This is the introduction Video of this product, simple demos, you can have a try.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/O3oHtW2TlXY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Tech Support & Product Discussion


Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
