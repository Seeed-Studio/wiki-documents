---
sidebar_position: 3
title: Asesor de IA
description: Aprende cómo implementar el Asesor de IA en la Plataforma de Datos SenseCraft y la App para análisis avanzado de datos de sensores. Automatiza el monitoreo, optimiza operaciones y desbloquea información procesable con soluciones impulsadas por IA.
keywords:
  - SenseCraft
  - AI Advisor
  - Smart Sensors
  - Sensor Data Analysis
  - Environmental Monitoring
  - Precision Agriculture
  - Smart Farming
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/sensecraft-data-platform/applications/ai-advisor
aliases:
  - /es/how_to_use_sensecap_data_platform_ai_advisor_on_the_web_and_sensecraft_app
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

# Cómo Usar el Asesor de IA en la Web y la APP SenseCraft

## Descripción General

**SenseCraft AI Advisor** es una función impulsada por IA que te ayuda a aprovechar al máximo los datos de tus sensores y desbloquear información procesable. Al conectar tus sensores SenseCraft a la plataforma SenseCraft, puedes recopilar y analizar fácilmente datos sobre factores ambientales como temperatura, humedad, luz y calidad del aire. Nuestro Asesor de IA aprovecha estos datos para proporcionar sugerencias y recomendaciones que pueden ayudarte a optimizar operaciones, reducir costos y mejorar la eficiencia.

Ya sea que busques monitorear la calidad del aire, optimizar el crecimiento de cultivos o mejorar la gestión agrícola, SenseCraft AI Advisor está diseñado para asistir tu toma de decisiones. El Asesor de IA está disponible en la [Plataforma de Datos SenseCraft](https://sensecap.seeed.cc/portal/#/login) y la [APP SenseCAP Mate](http://sensecap-mate-download.seeed.cc/), permitiendo a los usuarios acceder a información en cualquier momento y lugar.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/1.png"/></div>

## Mediciones

SenseCraft AI Advisor actualmente analiza las siguientes mediciones y tipos de dispositivos. Los usuarios pueden seleccionar dispositivos que incluyan las siguientes mediciones.

| Medición                | Tipos de Dispositivos                               |
|-------------------------|-----------------------------------------------------|
| Temperatura del Aire   | [SenseCAP S2103 LoRaWAN® CO2, Temperature, and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) |
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
| Humedad del Aire        | El tipo de dispositivo es el mismo que Temperatura del Aire |
| Intensidad de Luz       | [SenseCAP S2102 LoRaWAN Light Intensity Sensor](https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html) |
|                         | SenseCAP S400 Compact Weather Station |
|                         | [SenseCAP S700 Compact Weather Station](https://www.seeedstudio.com/SenseCAP-S700-7-in-1-Compact-Weather-Station-p-5651.html) |
|                         | [SenseCAP S900 Compact Weather Station](https://www.seeedstudio.com/SenseCAPONE-S900-9in1-Compact-Weather-Sensor-p-4881.html) |
|                         | [SenseCAP S2120 LoRaWAN 8-in-1 Compact Weather Station](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html) |
|                         | [SenseCAP S1000 Compact Weather Station 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| CO2                     | [SenseCAP S2103 LoRaWAN® CO2, Temperature, and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) |
|                         | [SenseCAP S1000 Compact Weather Station 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| Temperatura del Suelo   | [SenseCAP Wireless Soil Temperature, VWC & EC Sensor](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html) |
|                         | [SenseCAP S2105 LoRaWAN® Soil Moisture, Temperature and EC Sensor](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html) |
| Humedad del Suelo       | El tipo de dispositivo es el mismo que Temperatura del Suelo |
| Conductividad Eléctrica | [SenseCAP Wireless Soil Temperature, VWC & EC Sensor](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html) |
|                         | [SenseCAP S2105 LoRaWAN® Soil Moisture, Temperature and EC Sensor](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html) |
| NH3                     | [S-NH3-01 Industrial-grade MODBUS RS485 NH3 Sensor (NH3, Temperature & Humidity)](https://www.seeedstudio.com/RS485-NH3-Sensor-Connector-p-5113.html) |
| H2S                     | [S-H2S-01 Industrial-grade MODBUS RS485 H2S Sensor (H2S, Temperature & Humidity)](https://www.seeedstudio.com/RS485-H2S-Sensor-Connector-p-5114.html) |
| Radiación Fotosintéticamente Activa (PAR) | [Industrial PAR Sensor S-PAR](https://www.seeedstudio.com/RS485-S-PAR-02B-p-4830.html) |

## APP SenseCAP Mate

1. Descarga e inicia sesión en la [APP SenseCAP Mate](https://app.sensecapmx.com/)
2. Visita la página de Dispositivos y haz clic en el ícono **+** para vincular tu sensor SenseCraft escaneando el código QR del dispositivo
3. Asegúrate de que tu sensor envíe datos a la plataforma SenseCraft; el Asesor de IA requiere los datos del sensor
4. En la página de Dispositivos, haz clic en **AI Advisor** para iniciar el análisis de datos de sensores impulsado por IA

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/2.png"/></div>

5. Ingrese el cultivo o animal que está criando y su ubicación
6. Seleccione el tiempo de datos del sensor:
   - Mes: datos del sensor en el último mes
   - 6 Meses: datos del sensor en los últimos 6 meses
   - Año: datos del sensor en el último año

7. Seleccione mediciones (hasta 5): haga clic en el ícono **+**
   - Seleccione dispositivo y luego seleccione mediciones

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/3.png"/></div>

8. Envíe la información al `AI Advisor`, y responderá con sugerencias

> **Nota:** Las sugerencias de IA son solo para referencia. Por favor úselas con precaución ya que SenseCraft no es responsable de ninguna decisión tomada basada en las sugerencias del AI Advisor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/4.png"/></div>

## Plataforma de Datos SenseCraft

1. Inicie sesión en [Plataforma de Datos SenseCraft (Global)](https://sensecap.seeed.cc/portal/#/login) o [Plataforma de Datos SenseCraft (China)](http://sensecap.seeed.cn/portal/#/login)
2. Vincule su sensor SenseCraft ingresando el SN y código del sensor

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/5.png"/></div>

3. Asegúrese de que su sensor envíe datos a la `Plataforma de Datos SenseCraft`; la función `AI Advisor` requiere los datos del sensor
4. Visite `AI Advisor` para iniciar el análisis de datos del sensor impulsado por IA
5. Ingrese el cultivo o animal que está criando y su ubicación
6. Seleccione el tiempo de datos del sensor:
   - Mes: datos del sensor en el último mes
   - 6 Meses: datos del sensor en los últimos 6 meses
   - Año: datos del sensor en el último año

7. Seleccione mediciones (hasta 5): haga clic en el ícono **+**
   - Seleccione dispositivo y luego seleccione mediciones

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/6.png"/></div>

8. Envíe la información al `AI Advisor`, y responderá con sugerencias

> **Nota:** Las sugerencias de IA son solo para referencia. Por favor úselas con precaución ya que SenseCraft no es responsable de ninguna decisión tomada basada en las sugerencias del AI Advisor.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/7.png"/></div>
