---
description: Wio-WM1110 Dev Kit Introduction
title: Introducción al Wio-WM1110 Dev Kit
keywords:
- Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-WM1110_Dev_Kit/Introduction
sidebar_position: 1
last_update:
  date: 05/28/2025
  author: Guillermo
---

# Wio-WM1110 Dev Kit

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993082-wio-wm1110-dev-kit-45font.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1110-Dev-Kit-p-5677.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

El WM1110 Dev Kit está basado en el Módulo Inalámbrico Wio-WM1110, que integra el transceptor LoRa® de Semtech y un front-end de radio multipropósito para geolocalización.  
El transceptor LoRa® proporciona cobertura de red de baja potencia y alta sensibilidad, mientras que el escaneo GNSS (GPS/Beidou) y Wi-Fi ofrecen cobertura de ubicación completa,  
además de ofrecer opciones de conectividad para una variedad de periféricos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/schematic4.png" alt="pir" width={800} height="auto" /></p>

## Características
* **Transceptor RF LoRa/(G)FSK Half-Duplex de baja potencia y alta sensibilidad**: Soporte de bandas de frecuencia en el rango de 863-928 MHz
* **Front-end de radio multipropósito para geolocalización**: GNSS (GPS/ BeiDou), Wi-Fi, Bluetooth
* **GPIOs abundantes**: Más de 400 GPIO compatibles con Grove para opciones flexibles de expansión.
* **Plataforma de código abierto**: Aprovecha el extenso ecosistema open source de LR1110 y nRF52840 para infinitas posibilidades de aplicación.

### Transceptor LoRa® de baja potencia
Gracias al LoRa Edge™ LR1110 de Semtech, el Wio-WM1110 Dev Kit proporciona comunicación LoRa® de largo alcance y bajo consumo.  
Para aprender sobre Long Range y sus características como arquitectura de red y aplicaciones, puedes consultar *Una introducción a la tecnología LoRa® y LoRa®WAN®*.  
Explica qué es Long Range, cómo funciona y sus ventajas y desventajas.

### Servicio de ubicación
El Wio-WM1110 Dev Kit integra un front-end de radio multipropósito orientado a fines de geolocalización.  
Está equipado con GNSS dedicado para posicionamiento exterior, así como escaneo de bajo consumo de Wi-Fi y Bluetooth para posicionamiento interior.  
Es capaz de cambiar automáticamente entre actividades al aire libre e interiores, reemplazando la necesidad de construir distintos rastreadores para uso interior o exterior.  
Esto provee cobertura de ubicación completa mientras reduce la complejidad y el costo.

**Posicionamiento exterior (GNSS)**  
El Wio-WM1110 Dev Kit integra escaneo GNSS (GPS/ BeiDou) de bajo consumo,  
obteniendo datos de los satélites y enviándolos en forma cifrada a LoRa® Cloud, reduciendo el consumo de energía y mejorando la seguridad.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTI1MQ_47857_JbH8r_MU_X1uz1V7_1687329215?w=1265&h=592&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

**IPS(Wi-Fi+Bluetooth)**
Complementary to outdoor GNSS, WM1110 Dev Kit also supports Wi-Fi ultra-low-power passive scanning and Bluetooth scanning suitible for indoor positioning, it scans the MAC address and RSSI of nearby Bluetooth beacons/Wi-Fi, upload the data to the cloud services to get the accurate location.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/Schematic02.png" alt="pir" width={800} height="auto" /></p>

### Periféricos abundantes
Además del sensor integrado de temperatura y humedad (TH) y el acelerómetro de 3 ejes, este kit también incluye una serie de interfaces periféricas,  
soporta protocolos de transmisión ADC/UART e IIC, y puede conectarse a más de 400 módulos Grove, lo que permite actualizaciones sencillas hacia soluciones más inteligentes.  
También es compatible con Arduino, ofreciendo a los desarrolladores posibilidades ilimitadas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png" alt="pir" width={800} height="auto" /></p>

### Desarrollo de aplicaciones de usuario
El Wio-WM1110 Dev Kit es una plataforma de desarrollo IoT potente y completamente de código abierto para desarrolladores,  
que también incluye un conjunto de aplicaciones de ejemplo y muestras de código, así como un kit de desarrollo de software (SDK) para ayudarte a comenzar.

## Diagrama esquemático

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/schematic_1.png" alt="pir" width={800} height="auto" /></p>

## Especificaciones

**LoRa® y Posicionamiento (Semtech LR1110)**

| Protocolo LoRa®WAN | V1.0.4 |
| :- | :- |
| Frecuencia | 863~928MHz |
| Sensibilidad | <p>-125dBm @125K/SF7</p><p>-141dBm @125K/SF12</p> |
| Potencia de salida | 20dBm máx @LoRa® |
| Tecnología de posicionamiento | GNSS (GPS, BeiDou), WiFi |
| Alcance | 2~10 km (depende de la antena y el entorno) |

**Bluetooth (Nordic nRF52840)**

| Bluetooth | Bluetooth 5.3 |
| :- | :- |
| Flash | 1MB |
| RAM | 256KB |
| Protocolo | Bluetooth LE, Bluetooth mesh, Thread, Zigbee, 802.15.4, ANT y pilas propietarias de 2.4 GHz |
| Potencia de salida | 6dBm máx @Bluetooth |

**Sensores integrados**

**Sensor TH (SHT41)**

|  | Rango | Precisión |
| -------- | -------- | -------- |
| Temperatura | -40~125°C | 0.2°C |
| Humedad | 0~100% RH | 1.8% RH |

**Acelerómetro de 3 ejes (LIS3DHTR)**

| Rango | Ancho de banda | Sensibilidad (LSB/g) |
| -------- | -------- | -------- | 
| ±2g, 4g, 8g, 16g | 0.5Hz ~ 625Hz | 1000 (±2g) ~ 83 (±16g) |
    
**General**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/spec.png" alt="pir" width={800} height="auto" /></p>

## Soporte Técnico y Discusión de Producto

**¡Necesitas ayuda con tu Wio-WM1110 Dev Kit? ¡Estamos aquí para ayudarte!**

Por favor, envía cualquier problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>