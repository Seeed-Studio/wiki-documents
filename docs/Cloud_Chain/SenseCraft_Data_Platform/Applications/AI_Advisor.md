---
sidebar_position: 3
title: AI Advisor
description: Learn how to deploy the AI Advisor on SenseCraft Data Platform and App for advanced sensor data analysis. Automate monitoring, optimize operations, and unlock actionable insights with AI-powered solutions.
keywords:
  - SenseCraft
  - AI Advisor
  - Smart Sensors
  - Sensor Data Analysis
  - Environmental Monitoring
  - Precision Agriculture
  - Smart Farming
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-data-platform/applications/ai-advisor
aliases:
  - /how_to_use_sensecap_data_platform_ai_advisor_on_the_web_and_sensecraft_app
tags:
  - SenseCraft
  - SenseCraft Data Platform
  - SenseCraft App
  - AI
  - Cloud
  - LLM
last_update:
  date: 06/06/2025
  author: Jancee
---

# How to Use AI Advisor on the Web and SenseCraft APP

## Overview

**SenseCraft AI Advisor** is an AI-powered feature that helps you make the most of your sensor data and unlock actionable insights. By connecting your SenseCraft sensors to the SenseCraft platform, you can easily collect and analyze data on environmental factors such as temperature, humidity, light, and air quality. Our AI Advisor leverages this data to provide suggestions and recommendations that can help you optimize operations, reduce costs, and improve efficiency.

Whether you're looking to monitor air quality, optimize crop growth, or improve farm management, SenseCraft AI Advisor is designed to assist your decision-making. The AI Advisor is available on the [SenseCraft Data Platform](https://sensecap.seeed.cc/portal/#/login) and the [SenseCAP Mate APP](http://sensecap-mate-download.seeed.cc/), enabling users to access insights anytime, anywhere.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/1.png"/></div>

## Measurements

SenseCraft AI Advisor currently analyzes the following measurements and device types. Users can select devices that include the following measurements.

| Measurement             | Device Types                                        |
|-------------------------|-----------------------------------------------------|
| Air Temperature         | [SenseCAP S2103 LoRaWAN® CO2, Temperature, and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) |
|                         | [SenseCAP S2101 LoRaWAN® Air Temperature and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html) |
|                         | [S-H2S-01 Industrial-grade MODBUS RS485 H2S Sensor (H2S, Temperature & Humidity)](https://www.seeedstudio.com/RS485-H2S-Sensor-Connector-p-5114.html) |
|                         | [S-NH3-01 Industrial-grade MODBUS RS485 NH3 Sensor (NH3, Temperature & Humidity)](https://www.seeedstudio.com/RS485-NH3-Sensor-Connector-p-5113.html) |
|                         | [SenseCAP S500 Compact Weather Station](https://www.seeedstudio.com/SenseCAP-S500-5-in-1-Compact-Weather-Station-p-5652.html) |
|                         | SenseCAP S300 Compact Weather Station |
|                         | SenseCAP S400 Compact Weather Station |
|                         | [SenseCAP S700 Compact Weather Station](https://www.seeedstudio.com/SenseCAP-S700-7-in-1-Compact-Weather-Station-p-5651.html) |
|                         | [SenseCAP S900 Compact Weather Station](https://www.seeedstudio.com/SenseCAPONE-S900-9in1-Compact-Weather-Sensor-p-4881.html) |
|                         | [SenseCAP S2120 LoRaWAN 8-in-1 Compact Weather Station](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html) |
|                         | [SenseCAP S800 Compact Weather Station](https://www.seeedstudio.com/SenseCAP-S800-8-in-1-Compact-Weather-Station-p-5653.html) |
|                         | [SenseCAP S1000 Compact Weather Station 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| Air Humidity            | Device type is the same as Air Temperature          |
| Light Intensity         | [SenseCAP S2102 LoRaWAN Light Intensity Sensor](https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html) |
|                         | SenseCAP S400 Compact Weather Station |
|                         | [SenseCAP S700 Compact Weather Station](https://www.seeedstudio.com/SenseCAP-S700-7-in-1-Compact-Weather-Station-p-5651.html) |
|                         | [SenseCAP S900 Compact Weather Station](https://www.seeedstudio.com/SenseCAPONE-S900-9in1-Compact-Weather-Sensor-p-4881.html) |
|                         | [SenseCAP S2120 LoRaWAN 8-in-1 Compact Weather Station](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html) |
|                         | [SenseCAP S1000 Compact Weather Station 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| CO2                     | [SenseCAP S2103 LoRaWAN® CO2, Temperature, and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) |
|                         | [SenseCAP S1000 Compact Weather Station 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| Soil Temperature        | [SenseCAP Wireless Soil Temperature, VWC & EC Sensor](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html) |
|                         | [SenseCAP S2105 LoRaWAN® Soil Moisture, Temperature and EC Sensor](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html) |
| Soil Moisture           | Device type is the same as Soil Temperature          |
| Electrical Conductivity | [SenseCAP Wireless Soil Temperature, VWC & EC Sensor](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html) |
|                         | [SenseCAP S2105 LoRaWAN® Soil Moisture, Temperature and EC Sensor](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html) |
| NH3                     | [S-NH3-01 Industrial-grade MODBUS RS485 NH3 Sensor (NH3, Temperature & Humidity)](https://www.seeedstudio.com/RS485-NH3-Sensor-Connector-p-5113.html) |
| H2S                     | [S-H2S-01 Industrial-grade MODBUS RS485 H2S Sensor (H2S, Temperature & Humidity)](https://www.seeedstudio.com/RS485-H2S-Sensor-Connector-p-5114.html) |
| Photosynthetically Active Radiation (PAR) | [Industrial PAR Sensor S-PAR](https://www.seeedstudio.com/RS485-S-PAR-02B-p-4830.html) |

## SenseCAP Mate APP

1. Download and login [SenseCAP Mate APP](https://app.sensecapmx.com/)
2. Visit the Device page and click the **+** icon to bind your SenseCraft sensor by scanning the device QR code
3. Ensure your sensor sends data to the SenseCraft platform; the AI Advisor requires the sensor's data
4. On the Device page, click **AI Advisor** to start AI-powered sensor data analysis

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/2.png"/></div>

5. Enter the crop or animal you are raising and your location
6. Select the sensor data time:
   - Month: sensor data in the last month
   - 6 Months: sensor data in the last 6 months
   - Year: sensor data in the last year

7. Select measurements (up to 5): click the **+** icon
   - Select device and then select measurements

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/3.png"/></div>

8. Submit the information to the `AI Advisor`, and it will respond with suggestions

> **Note:** AI suggestions are for reference only. Please use them cautiously as SenseCraft is not liable for any decisions made based on AI Advisor suggestions.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/4.png"/></div>

## SenseCraft Data Platform

1. Login to [SenseCraft Data Platform (Global)](https://sensecap.seeed.cc/portal/#/login) or [SenseCraft Data Platform (China)](http://sensecap.seeed.cn/portal/#/login)
2. Bind your SenseCraft sensor by entering the sensor's SN and code

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/5.png"/></div>

3. Ensure your sensor sends data to the `SenseCraft Data Platform`; the `AI Advisor` feature requires the sensor's data
4. Visit `AI Advisor` to initiate AI-powered sensor data analysis
5. Enter the crop or animal you are raising and your location
6. Select the sensor data time:
   - Month: sensor data in the last month
   - 6 Months: sensor data in the last 6 months
   - Year: sensor data in the last year

7. Select measurements (up to 5): click the **+** icon
   - Select device and then select measurements

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/6.png"/></div>

8. Submit the information to the `AI Advisor`, and it will respond with suggestions

> **Note:** AI suggestions are for reference only. Please use them cautiously as SenseCraft is not liable for any decisions made based on AI Advisor suggestions.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/7.png"/></div>
