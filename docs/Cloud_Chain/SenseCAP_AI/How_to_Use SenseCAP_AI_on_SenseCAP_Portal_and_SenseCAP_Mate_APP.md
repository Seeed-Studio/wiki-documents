---
description: How to Use SenseCAP AI on SenseCAP Portal and SenseCAP Mate APP
title: How to Use SenseCAP AI on SenseCAP Portal and SenseCAP Mate APP
keywords:
- AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /How_to_Use_SenseCAP_AI_on_SenseCAP_Portal_and_SenseCAP_Mate_APP
last_update:
  date: 6/20/2023
  author: Lee
---

# How to Use SenseCAP AI on SenseCAP Portal and SenseCAP Mate APP

## Overview

**SenseCAP AI** is the AI-powered solution that helps you make the most of your sensor data and unlock the full potential of your sensor data. By connecting your SenseCAP sensors to the SenseCAP platform, you can easily collect and analyze data on environmental factors such as temperature, humidity, light, and air quality. Meanwhile, our powerful AI algorithms then use this data to provide you with actionable insights and recommendations that can help you optimize your operations, reduce costs, and improve efficiency. 

Whether you're looking to monitor air quality, optimize crop growth, or improve efficiency, SenseCAP AI has the tools you need to succeed. SenseCAP AI is currently released on [SenseCAP Portal](https://sensecap.seeed.cc/portal/#/login) and [SenseCAP Mate App](http://sensecap-mate-download.seeed.cc/), where users can use it at any time. With our easy-to-use platform and App, you can quickly connect your sensors and start receiving valuable insights in just minutes. 

Don't miss out on the benefits of AI-powered sensor data analysis. Try SenseCAP AI today!

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/1.png
"/></div>

## Measurements
SenseCAP AI currently analyzes the following measurements and device types, and users can select devices that include the following measurements.

| Measurement             | Device Types                                        |
|-------------------------|-----------------------------------------------------|
| Air Temperature         |[SenseCAP S2103 LoRaWAN® CO2, Temperature, and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html)|
|                         |[SenseCAP S2101 LoRaWAN® Air Temperature and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html)|
|                         |[S-H2S-01 Industrial-grade MODBUS RS485 H2S Sensor (H2S, Temperature & Humidity)](https://www.seeedstudio.com/RS485-H2S-Sensor-Connector-p-5114.html)|
|                         |[S-NH3-01 Industrial-grade MODBUS RS485 NH3 Sensor (NH3, Temperature & Humidity)](https://www.seeedstudio.com/RS485-NH3-Sensor-Connector-p-5113.html)|
|                         |[SenseCAP S500 Compact Weather Station](https://www.seeedstudio.com/SenseCAP-S500-5-in-1-Compact-Weather-Station-p-5652.html)|
|                         |SenseCAP S300 Compact Weather Station|
|                         |SenseCAP S400 Compact Weather Station|
|                         |[SenseCAP S700 Compact Weather Station ](https://www.seeedstudio.com/SenseCAP-S700-7-in-1-Compact-Weather-Station-p-5651.html)|
|                         |[SenseCAP S900 Compact Weather Station](https://www.seeedstudio.com/SenseCAPONE-S900-9in1-Compact-Weather-Sensor-p-4881.html)|
|                         |[SenseCAP S2120 LoRaWAN 8-in-1 Compact Weather Station ](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html)|
|                         |[SenseCAP S800 Compact Weather Station](https://www.seeedstudio.com/SenseCAP-S800-8-in-1-Compact-Weather-Station-p-5653.html)|
|                         |[SenseCAP S1000 Compact Weather Station 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html)|
| Air Humidity            |Device type is the same as Air Temperature          |
| Light Intensity         |[SenseCAP S2102 LoRaWAN Light Intensity Sensor](https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html)|
|                         |SenseCAP S400 Compact Weather Station |
|                         |[SenseCAP S700 Compact Weather Station](https://www.seeedstudio.com/SenseCAP-S700-7-in-1-Compact-Weather-Station-p-5651.html)|
|                         |[SenseCAP S900 Compact Weather Station](https://www.seeedstudio.com/SenseCAPONE-S900-9in1-Compact-Weather-Sensor-p-4881.html)|
|                         |[SenseCAP S2120 LoRaWAN 8-in-1 Compact Weather Station ](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html)|
|                         |[SenseCAP S1000 Compact Weather Station 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html)|
| CO2                     | CO2 Sensor                                          |
|                         |[SenseCAP S2103 LoRaWAN® CO2, Temperature, and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html)|
|                         |[SenseCAP S1000 Compact Weather Station 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html)|
| Soil Temperature        | Soil Moisture and Temperature Sensor                |
|                         |[SenseCAP Wireless Soil Temperature, VWC & EC Sensor](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html)|
|                         | Soil Temperature and VWC Sensor                     |
|                         |[SenseCAP S2105 LoRaWAN® Soil Moisture, Temperature and EC Sensor](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html)|
| Soil Moisture           |Device type is the same as Soil Temperature          |
| Electrical Conductivity |[SenseCAP Wireless Soil Temperature, VWC & EC Sensor](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html)|
|                         |[SenseCAP S2105 LoRaWAN® Soil Moisture, Temperature and EC Sensor](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html)|
| NH3                     |[S-NH3-01 Industrial-grade MODBUS RS485 NH3 Sensor (NH3, Temperature & Humidity)](https://www.seeedstudio.com/RS485-NH3-Sensor-Connector-p-5113.html)|
| H2S                     |[S-H2S-01 Industrial-grade MODBUS RS485 H2S Sensor (H2S, Temperature & Humidity)](https://www.seeedstudio.com/RS485-H2S-Sensor-Connector-p-5114.html)|
| Photosynthetically Active Radiation (PAR) |[Industrial PAR Sensor S-PAR](https://www.seeedstudio.com/RS485-S-PAR-02B-p-4830.html)|


## SenseCAP Mate App
1 Download and login [SenseCAP Mate App](https://app.sensecapmx.com/)

2 Visit Device page and click **+** icon to bind your SenseCAP sensor by scaning the device QR code

3 Make sure your sensor sends data to the SenseCAP platform, the SenseCAP AI service needs to use the sensor's data

4 On Device page click SenseCAP AI to start AI-powered sensor data analysis 

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/2.png
"/></div>

5 Enter the crop or animal you are raising and the location

6 Select the sensor data time

- Month: sensor data in the last month
- 6 Months: sensor data in the last 6 months
- Year: sensor data in the last year

7 Select measurement(up to 5 ): click **+** icon 

- Select device and then select measurement 

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/3.png
"/></div>

8 Send the info to SenseCAP AI and then SenseCAP AI will response suggestions

Note:AI answers are provided for reference only. Please use them with caution as SenseCAP cannot be held responsible for any consequences resulting from the use of AI services.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/4.png
"/></div>

## SenseCAP Portal

1 Login [SenseCAP Portal(Global)](https://sensecap.seeed.cc/portal/#/login)

[SenseCAP Portal(China)](http://sensecap.seeed.cn/portal/#/login)

2 Bind your SenseCAP sensor by inputing sensor's SN and code 

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/5.png
"/></div>

3 Make sure your sensor sends data to the SenseCAP platform, the SenseCAP AI service needs to use the sensor's data

4 Visit SenseCAP AI to start AI-powered sensor data analysis 

5 Enter the crop or animal you are raising and the location

6 Select the sensor data time

- Month: sensor data in the last month
- 6 Months: sensor data in the last 6 months
- Year: sensor data in the last year

7 Select measurement(up to 5 ): click **+** icon 

- Select device and then select measurement 

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/6.png
"/></div>

8 Send the info to SenseCAP AI and then SenseCAP AI will response suggestions

Note:AI answers are provided for reference only. Please use them with caution as SenseCAP cannot be held responsible for any consequences resulting from the use of AI services.

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/7.png
"/></div>


