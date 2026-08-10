---
sidebar_position: 3
title: Asesor de IA
description: Aprende cómo implementar el Asesor de IA en la plataforma de datos SenseCraft y en la app para un análisis avanzado de datos de sensores. Automatiza la monitorización, optimiza las operaciones y desbloquea información procesable con soluciones impulsadas por IA.
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
createdAt: '2023-06-19'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/es/sensecraft-data-platform/applications/ai-advisor/
---

# Cómo usar AI Advisor en la web y en la app SenseCraft

## Descripción general

**SenseCraft AI Advisor** es una función impulsada por IA que te ayuda a aprovechar al máximo tus datos de sensores y a desbloquear información procesable. Al conectar tus sensores SenseCraft a la plataforma SenseCraft, puedes recopilar y analizar fácilmente datos sobre factores ambientales como temperatura, humedad, luz y calidad del aire. Nuestro AI Advisor aprovecha estos datos para proporcionar sugerencias y recomendaciones que pueden ayudarte a optimizar las operaciones, reducir costos y mejorar la eficiencia.

Ya sea que busques monitorizar la calidad del aire, optimizar el crecimiento de los cultivos o mejorar la gestión de la granja, SenseCraft AI Advisor está diseñado para apoyar tu toma de decisiones. El AI Advisor está disponible en la [SenseCraft Data Platform](https://sensecap.seeed.cc/portal/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_data_portal#/login) y en la [SenseCAP Mate APP](http://sensecap-mate-download.seeed.cc/), lo que permite a los usuarios acceder a información en cualquier momento y lugar.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/1.png"/></div>

## Mediciones

SenseCraft AI Advisor actualmente analiza las siguientes mediciones y tipos de dispositivos. Los usuarios pueden seleccionar dispositivos que incluyan las siguientes mediciones.

| Medición                | Tipos de dispositivos                               |
|-------------------------|-----------------------------------------------------|
| Temperatura del aire    | [SenseCAP S2103 LoRaWAN® CO2, Temperature, and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) |
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
| Humedad del aire        | El tipo de dispositivo es el mismo que para Temperatura del aire |
| Intensidad de luz       | [SenseCAP S2102 LoRaWAN Light Intensity Sensor](https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html) |
|                         | SenseCAP S400 Compact Weather Station |
|                         | [SenseCAP S700 Compact Weather Station](https://www.seeedstudio.com/SenseCAP-S700-7-in-1-Compact-Weather-Station-p-5651.html) |
|                         | [SenseCAP S900 Compact Weather Station](https://www.seeedstudio.com/SenseCAPONE-S900-9in1-Compact-Weather-Sensor-p-4881.html) |
|                         | [SenseCAP S2120 LoRaWAN 8-in-1 Compact Weather Station](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html) |
|                         | [SenseCAP S1000 Compact Weather Station 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| CO2                     | [SenseCAP S2103 LoRaWAN® CO2, Temperature, and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) |
|                         | [SenseCAP S1000 Compact Weather Station 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| Temperatura del suelo   | [SenseCAP Wireless Soil Temperature, VWC & EC Sensor](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html) |
|                         | [SenseCAP S2105 LoRaWAN® Soil Moisture, Temperature and EC Sensor](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html) |
| Humedad del suelo       | El tipo de dispositivo es el mismo que para Temperatura del suelo |
| Conductividad eléctrica | [SenseCAP Wireless Soil Temperature, VWC & EC Sensor](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html) |
|                         | [SenseCAP S2105 LoRaWAN® Soil Moisture, Temperature and EC Sensor](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html) |
| NH3                     | [S-NH3-01 Industrial-grade MODBUS RS485 NH3 Sensor (NH3, Temperature & Humidity)](https://www.seeedstudio.com/RS485-NH3-Sensor-Connector-p-5113.html) |
| H2S                     | [S-H2S-01 Industrial-grade MODBUS RS485 H2S Sensor (H2S, Temperature & Humidity)](https://www.seeedstudio.com/RS485-H2S-Sensor-Connector-p-5114.html) |
| Radiación fotosintéticamente activa (PAR) | [Industrial PAR Sensor S-PAR](https://www.seeedstudio.com/RS485-S-PAR-02B-p-4830.html) |

## SenseCAP Mate APP

1. Descarga e inicia sesión en [SenseCAP Mate APP](https://app.sensecapmx.com/)
2. Ve a la página Device y haz clic en el icono **+** para vincular tu sensor SenseCraft escaneando el código QR del dispositivo
3. Asegúrate de que tu sensor envía datos a la plataforma SenseCraft; el AI Advisor requiere los datos del sensor
4. En la página Device, haz clic en **AI Advisor** para iniciar el análisis de datos de sensores impulsado por IA

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/2.png"/></div>

5. Introduce el cultivo o animal que estás criando y tu ubicación
6. Selecciona el periodo de tiempo de los datos del sensor:
   - Month: datos del sensor del último mes
   - 6 Months: datos del sensor de los últimos 6 meses
   - Year: datos del sensor del último año

7. Selecciona las mediciones (hasta 5): haz clic en el icono **+**
   - Selecciona el dispositivo y luego selecciona las mediciones

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/3.png"/></div>

8. Envía la información a `AI Advisor`, y responderá con sugerencias

> **Nota:** Las sugerencias de IA son solo de referencia. Por favor, úsalas con cautela, ya que SenseCraft no se hace responsable de ninguna decisión tomada basándose en las sugerencias de AI Advisor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/4.png"/></div>

## SenseCraft Data Platform

1. Inicia sesión en [SenseCraft Data Platform (Global)](https://sensecap.seeed.cc/portal/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_data_portal#/login) o en [SenseCraft Data Platform (China)](http://sensecap.seeed.cn/portal/#/login)
2. Vincula tu sensor SenseCraft introduciendo el SN y el código del sensor

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/5.png"/></div>

3. Asegúrate de que tu sensor envía datos a la `SenseCraft Data Platform`; la función `AI Advisor` requiere los datos del sensor
4. Visita `AI Advisor` para iniciar el análisis de datos de sensores impulsado por IA
5. Introduce el cultivo o animal que estás criando y tu ubicación
6. Selecciona el periodo de tiempo de los datos del sensor:
   - Month: datos del sensor del último mes
   - 6 Months: datos del sensor de los últimos 6 meses
   - Year: datos del sensor del último año

7. Selecciona las mediciones (hasta 5): haz clic en el icono **+**
   - Selecciona el dispositivo y luego selecciona las mediciones

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/6.png"/></div>

8. Envía la información a `AI Advisor`, y responderá con sugerencias

> **Nota:** Las sugerencias de IA son solo de referencia. Por favor, úsalas con cautela, ya que SenseCraft no se hace responsable de ninguna decisión tomada basándose en las sugerencias de AI Advisor.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/7.png"/></div>
