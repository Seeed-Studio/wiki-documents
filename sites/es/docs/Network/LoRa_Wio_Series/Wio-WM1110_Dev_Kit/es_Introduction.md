---
description: Introducción al Kit de Desarrollo Wio-WM1110
title: Introducción
keywords:
  - Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-WM1110_Dev_Kit/Introduction
sku: 114993082
sidebar_position: 1
last_update:
  date: 6/26/2023
  author: Jessie
createdAt: '2025-09-03'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/Wio-WM1110_Dev_Kit/Introduction/
---


# Kit de Desarrollo Wio-WM1110

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993082-wio-wm1110-dev-kit-45font.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1110-Dev-Kit-p-5677.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

El Kit de Desarrollo WM1110 está basado en el Módulo Inalámbrico Wio-WM1110, integra el transceptor LoRa® de Semtech y un front-end de radio multipropósito para geolocalización.
El transceptor LoRa® proporciona cobertura de red de bajo consumo y alta sensibilidad, mientras que el escaneo GNSS (GPS/Beidou) y Wi-Fi ofrecen cobertura de ubicación integral.
al mismo tiempo que proporciona opciones de conectividad para una variedad de periféricos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/schematic4.png" alt="pir" width={800} height="auto" /></p>

## Características

* **Transceptor RF Half-Duplex LoRa/(G)FSK de Bajo Consumo y Alta Sensibilidad**: Soporte de bandas de frecuencia en el rango de 863-928MHz
- **Front-End de Radio Multipropósito para Geolocalización**: GNSS (GPS/ BeiDou), Wi-Fi, Bluetooth
- **GPIOs Abundantes**: Más de 400 GPIOs compatibles con Grove para opciones de expansión flexibles.
- **Plataforma de Código Abierto**: Aprovecha el extenso ecosistema de código abierto LR1110 y nRF52840 para posibilidades de aplicación infinitas.

### Transceptor LoRa® de Bajo Consumo

Beneficiándose del LoRa Edge™ LR1110 de Semtech, el Kit de Desarrollo Wio-WM1110 proporciona comunicación LoRa® de larga distancia y bajo consumo. Para aprender sobre Long Range y sus características como arquitectura de red y aplicaciones, puedes consultar Una introducción a la tecnología LoRa® y LoRa®WAN®, que explica qué es Long Range, cómo funciona, y sus pros y contras.

### Servicio de Ubicación

El Kit de Desarrollo Wio-WM1110 integra un Front-End de Radio Multipropósito Dirigido a Propósitos de Geolocalización. Está equipado con GNSS dedicado para posicionamiento exterior, así como escaneo de baja potencia WI-FI y Bluetooth para posicionamiento interior.
Es capaz de transicionar automáticamente entre actividades exteriores e interiores, reemplazando la necesidad de construir diferentes rastreadores para uso interior o exterior, esto proporciona cobertura de ubicación integral mientras reduce la complejidad y el costo.

**Posicionamiento Exterior (GNSS)**

El Kit de Desarrollo Wio-WM1110 integra escaneo de bajo consumo GNSS (GPS/ BeiDou),
obteniendo datos de satélites y enviándolos encriptados a la LoRa® Cloud, reduciendo el consumo de energía y mejorando la seguridad.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_47857_JbH8r_MU_X1uz1V7_1687329215?w=1265&h=592&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

**IPS (Wi-Fi+Bluetooth)**
Complementario al GNSS exterior, el Kit de Desarrollo WM1110 también soporta escaneo pasivo de ultra-bajo consumo Wi-Fi y escaneo Bluetooth adecuado para posicionamiento interior, escanea la dirección MAC y RSSI de beacons Bluetooth/Wi-Fi cercanos, sube los datos a los servicios en la nube para obtener la ubicación precisa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Schematic02.png" alt="pir" width={800} height="auto" /></p>

### Periféricos abundantes

Además del sensor TH integrado y el Acelerómetro de 3 ejes, este kit también incluye una serie de interfaces periféricas, soporta protocolos de transmisión ADC/UART e IIC, que pueden conectarse a más de 400 módulos Grove, permitiendo actualizaciones fáciles a soluciones más inteligentes. También es compatible con Arduino, proporcionando a los desarrolladores posibilidades ilimitadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png" alt="pir" width={800} height="auto" /></p>

### Desarrollar Aplicaciones de Usuario

El Kit de Desarrollo Wio-WM1110 es una plataforma de desarrollo IoT potente y completamente de código abierto para desarrolladores, también incluye un conjunto de aplicaciones de ejemplo y muestras de código, así como un kit de desarrollo de software (SDK) para ayudarte a comenzar.

## Diagrama Esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/schematic_1.png" alt="pir" width={800} height="auto" /></p>

## Especificaciones

**LoRa® y Posicionamiento (Semtech LR1110)**

|Protocolo LoRa®WAN|V1.0.4|
| :- | :- |
|Frecuencia|863~928MHz|
|Sensibilidad|<p>-125dBm @125K/SF7</p><p>-141dBm @125K/SF12</p>|
|Potencia de Salida|20dBm máx @LoRa®|
|Tecnología de Posicionamiento|GNSS(GPS,BeiDou),WiFi|
|Alcance|2~10km (Depende de la antena y el entorno)|

**Bluetooth(Nordic nRF52840)**

|Bluetooth|Bluetooth 5.3|
| :- | :- |
|Flash|1MB|
|RAM|256KB|
|Protocolo|Bluetooth LE,Bluetooth mesh,Thread,Zigbee,802.15.4, ANT y pilas propietarias de 2.4 GHz|
|Potencia de Salida|6dBm máx @Bluetooth|

**Sensores Integrados**

**Sensor TH (SHT41)**

|  | Rango | Precisión |
| -------- | -------- | -------- |
|Temperatura  | -40~125°C |0.2°C|
| Humedad | 0~100%RH |1.8%RH|

**Acelerómetro de 3 ejes(LIS3DHTR)**

| Rango | Ancho de Banda | Sensibilidad(LSB/g) |
| -------- | -------- | -------- |
| ±2g, 4g, 8g, 16g | 0.5Hz ~ 625Hz |1000 (±2g) ~ 83 (±16g)

**General**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/spec.png" alt="pir" width={800} height="auto" /></p>

## Soporte Técnico

**¿Necesitas ayuda con tu Wio-WM1110 Dev Kit? ¡Estamos aquí para asistirte!**

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>
