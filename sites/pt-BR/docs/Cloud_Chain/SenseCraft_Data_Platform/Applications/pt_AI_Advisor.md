---
sidebar_position: 3
title: AI Advisor
description: Saiba como implantar o AI Advisor na SenseCraft Data Platform e no App para análise avançada de dados de sensores. Automatize o monitoramento, otimize as operações e libere insights acionáveis com soluções baseadas em IA.
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
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/sensecraft-data-platform/applications/ai-advisor/
---

# Como usar o AI Advisor na Web e no SenseCraft APP

## Visão geral

**SenseCraft AI Advisor** é um recurso baseado em IA que ajuda você a aproveitar ao máximo os dados dos seus sensores e obter insights acionáveis. Ao conectar seus sensores SenseCraft à plataforma SenseCraft, você pode facilmente coletar e analisar dados sobre fatores ambientais como temperatura, umidade, luz e qualidade do ar. Nosso AI Advisor utiliza esses dados para fornecer sugestões e recomendações que podem ajudar você a otimizar operações, reduzir custos e melhorar a eficiência.

Esteja você buscando monitorar a qualidade do ar, otimizar o crescimento de culturas ou melhorar o gerenciamento da fazenda, o SenseCraft AI Advisor é projetado para auxiliar na sua tomada de decisão. O AI Advisor está disponível na [SenseCraft Data Platform](https://sensecap.seeed.cc/portal/#/login) e no [SenseCAP Mate APP](http://sensecap-mate-download.seeed.cc/), permitindo que os usuários acessem insights a qualquer hora e em qualquer lugar.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/1.png"/></div>

## Medições

Atualmente, o SenseCraft AI Advisor analisa as seguintes medições e tipos de dispositivos. Os usuários podem selecionar dispositivos que incluam as seguintes medições.

| Medição                 | Tipos de Dispositivo                               |
|-------------------------|-----------------------------------------------------|
| Temperatura do Ar       | [SenseCAP S2103 LoRaWAN® CO2, Temperature, and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) |
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
| Umidade do Ar           | Tipo de dispositivo é o mesmo que Temperatura do Ar |
| Intensidade de Luz      | [SenseCAP S2102 LoRaWAN Light Intensity Sensor](https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html) |
|                         | SenseCAP S400 Compact Weather Station |
|                         | [SenseCAP S700 Compact Weather Station](https://www.seeedstudio.com/SenseCAP-S700-7-in-1-Compact-Weather-Station-p-5651.html) |
|                         | [SenseCAP S900 Compact Weather Station](https://www.seeedstudio.com/SenseCAPONE-S900-9in1-Compact-Weather-Sensor-p-4881.html) |
|                         | [SenseCAP S2120 LoRaWAN 8-in-1 Compact Weather Station](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html) |
|                         | [SenseCAP S1000 Compact Weather Station 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| CO2                     | [SenseCAP S2103 LoRaWAN® CO2, Temperature, and Humidity Sensor](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) |
|                         | [SenseCAP S1000 Compact Weather Station 10 in 1](https://www.seeedstudio.com/SenseCAP-S1000-10-in-1-Compact-Weather-Station-p-5654.html) |
| Temperatura do Solo     | [SenseCAP Wireless Soil Temperature, VWC & EC Sensor](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html) |
|                         | [SenseCAP S2105 LoRaWAN® Soil Moisture, Temperature and EC Sensor](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html) |
| Umidade do Solo         | Tipo de dispositivo é o mesmo que Temperatura do Solo |
| Condutividade Elétrica  | [SenseCAP Wireless Soil Temperature, VWC & EC Sensor](https://www.seeedstudio.com/SenseCAP-Wireless-Soil-Temperature-VWC-EC-Sensor-LoRaWAN-AS923-MT20-p-4996.html) |
|                         | [SenseCAP S2105 LoRaWAN® Soil Moisture, Temperature and EC Sensor](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html) |
| NH3                     | [S-NH3-01 Industrial-grade MODBUS RS485 NH3 Sensor (NH3, Temperature & Humidity)](https://www.seeedstudio.com/RS485-NH3-Sensor-Connector-p-5113.html) |
| H2S                     | [S-H2S-01 Industrial-grade MODBUS RS485 H2S Sensor (H2S, Temperature & Humidity)](https://www.seeedstudio.com/RS485-H2S-Sensor-Connector-p-5114.html) |
| Radiação Fotossinteticamente Ativa (PAR) | [Industrial PAR Sensor S-PAR](https://www.seeedstudio.com/RS485-S-PAR-02B-p-4830.html) |

## SenseCAP Mate APP

1. Baixe e faça login no [SenseCAP Mate APP](https://app.sensecapmx.com/)
2. Visite a página Device e clique no ícone **+** para vincular seu sensor SenseCraft escaneando o código QR do dispositivo
3. Certifique-se de que seu sensor envie dados para a plataforma SenseCraft; o AI Advisor requer os dados do sensor
4. Na página Device, clique em **AI Advisor** para iniciar a análise de dados de sensores com tecnologia de IA

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/2.png"/></div>

5. Insira a cultura ou o animal que você está criando e sua localização
6. Selecione o período de tempo dos dados do sensor:
   - Month: dados do sensor no último mês
   - 6 Months: dados do sensor nos últimos 6 meses
   - Year: dados do sensor no último ano

7. Selecione medições (até 5): clique no ícone **+**
   - Selecione o dispositivo e depois selecione as medições

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/3.png"/></div>

8. Envie as informações para o `AI Advisor`, e ele responderá com sugestões

> **Nota:** As sugestões de IA são apenas para referência. Use-as com cautela, pois a SenseCraft não se responsabiliza por quaisquer decisões tomadas com base nas sugestões do AI Advisor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/4.png"/></div>

## SenseCraft Data Platform

1. Faça login na [SenseCraft Data Platform (Global)](https://sensecap.seeed.cc/portal/#/login) ou na [SenseCraft Data Platform (China)](http://sensecap.seeed.cn/portal/#/login)
2. Vincule seu sensor SenseCraft inserindo o SN e o código do sensor

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/5.png"/></div>

3. Certifique-se de que seu sensor envie dados para a `SenseCraft Data Platform`; o recurso `AI Advisor` requer os dados do sensor
4. Acesse `AI Advisor` para iniciar a análise de dados de sensores com tecnologia de IA
5. Insira a cultura ou o animal que você está criando e sua localização
6. Selecione o período de tempo dos dados do sensor:
   - Month: dados do sensor no último mês
   - 6 Months: dados do sensor nos últimos 6 meses
   - Year: dados do sensor no último ano

7. Selecione medições (até 5): clique no ícone **+**
   - Selecione o dispositivo e depois selecione as medições

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/6.png"/></div>

8. Envie as informações para o `AI Advisor`, e ele responderá com sugestões

> **Nota:** As sugestões de IA são apenas para referência. Use-as com cautela, pois a SenseCraft não se responsabiliza por quaisquer decisões tomadas com base nas sugestões do AI Advisor.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP_AI/7.png"/></div>
