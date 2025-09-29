---
description: Wio_Tracker_Introduction
title: Introducción al Wio Tracker 1110
keywords:
- Tracker
- Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Tracker_Introduction
sidebar_position: 1
last_update:
  date: 11/3/2023
  author: Jessie
---


La [Placa de Desarrollo Wio Tracker 1110](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) está basada en el [Módulo Inalámbrico Wio-WM1110](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html) e integra el transceptor LoRa® [LR1110 de Semtech](https://www.semtech.com/products/wireless-rf/lora-edge/lr1110) y un front-end de radio multipropósito para geolocalización, es una plataforma de desarrollo de seguimiento fácil de usar basada en LoRa. 

Con su tamaño compacto e interfaces ricas, la Placa de Desarrollo Wio Tracker 1110 está convenientemente equipada con una antena integrada para fácil despliegue. Soporta el entorno de desarrollo Arduino y la pila de protocolos LoRaWAN, haciéndola ideal para proyectos IoT relacionados con seguimiento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio-tracker.png" alt="pir" width={700} height="auto" /></p>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora </font></span></strong>
    </a>
</div>


## Características

* **Alimentado por Nordic nRF52840 y Semtech LR1110**<br/>
* **Multi-protocolos**: LoRa®, GNSS(GPS/BeiDou), Bluetooth, Wi-Fi Sniffer<br/>
* **Soporta más de 300+ Sensores Grove de Seeed**: Haciéndolo altamente adaptable para diferentes requisitos de seguimiento y detección<br/>
* **Sensor de temperatura integrado, sensor de humedad y acelerómetro de 3 ejes**: Capturando una amplia gama de datos ambientales y de movimiento<br/>
* **Plataforma Completamente de Código Abierto**: Aprovecha el extenso ecosistema de código abierto LR1110 y nRF52840 para posibilidades de aplicación infinitas<br/>
* **Compatibilidad con Arduino IDE**: Permitiendo facilidad de programación y un entorno familiar para desarrolladores.


## Descripción

### Transceptor LoRa® de Bajo Consumo

Beneficiándose del LR1110 de Semtech, la Placa de Desarrollo Wio Tracker 1110 proporciona comunicación LoRa® de larga distancia y bajo consumo. Para aprender sobre Long Range y sus características como arquitectura de red y aplicaciones, puedes consultar Una introducción a la tecnología LoRa® y LoRaWAN®, que explica qué es Long Range, cómo funciona, y sus pros y contras.

### Múltiples tecnologías de posicionamiento

La Placa de Desarrollo Wio Tracker 1110 integra un Front-End de Radio Multipropósito Dirigido a Propósitos de Geolocalización. Está equipada con GNSS dedicado al posicionamiento exterior, así como escaneo Wi-Fi y Bluetooth para posicionamiento interior. Es capaz de transicionar automáticamente entre actividades exteriores e interiores, reemplazando la necesidad de construir diferentes rastreadores para uso interior o exterior, esto proporciona cobertura de ubicación integral mientras reduce la complejidad y el costo.

### Periféricos ricos

Además del sensor TH integrado y el Acelerómetro de 3 ejes, cuenta con una serie de interfaces periféricas, y soporta protocolos de transmisión ADC/UART e IIC, que pueden conectarse a más de 400 módulos Grove, permitiendo actualizaciones fáciles a soluciones más inteligentes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WM1110-A-Grove.jpg" alt="pir" width={800} height="auto" /></p>


### Desarrollar Aplicaciones de Usuario

La Placa de Desarrollo Wio Tracker 1110 es una plataforma de desarrollo IoT poderosa completamente de código abierto, compatible con Arduino IDE. Viene con un conjunto de aplicaciones de ejemplo y muestras de código para ayudarte a comenzar de manera fluida y rápida.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-1.png" alt="pir" width={800} height="auto" /></p>

### Demo de Inicio Rápido

Proporcionamos una demo plug-and-play, donde los usuarios pueden simplemente escanear un código QR, conectar la alimentación, y en 5 minutos, pueden ver datos de ubicación y sensores en la APP SenseCAP Mate.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/grove.png" alt="pir" width={800} height="auto" /></p>

### Descripción General del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/hard-overview.png" alt="pir" width={800} height="auto" /></p>

### Especificaciones

|LoRa® y Posicionamiento (Semtech LR1110)||
|----|----|
|Protocolo LoRaWAN®|V1.0.3|
|Plan de Frecuencia|863~928MHz|
|Sensibilidad|	-125dBm @125K/SF7<br/>-141dBm @125K/SF12|
|Potencia de Salida|20dBm máx @LoRa®|
|Tecnología de Posicionamiento|GNSS(GPS/BeiDou), WiFi Sniffer|
|Alcance|2~10km(Depende de la antena y el entorno)|


|Bluetooth(Nordic nRF52840)||
|----|----|
|Bluetooth|Bluetooth 5.3|
|Flash|1MB|
|RAM|256KB|
|Protocolo|Bluetooth LE, Bluetooth mesh, Thread, Zigbee, <br/>802.15.4, ANT y pilas propietarias de 2.4 GHz|
|Potencia de Salida|6dBm máx @Bluetooth|


|General||
|----|----|
|Voltaje - suministro|5V (USB 2.0 Type-C)<br/>Conector de Batería-4.5V|
|RFIO	|Conector de Antena GNSS x 1<br/>Conector de Antena LoRa x 1|
|USB type-C|	x 1|
|Interfaz Grove|ADC x 1<br/>I2C x 1<br/>UART x 1<br/>Digital x 3|
|Botón|Botón USER-Configurable<br/>RESET-Reinicio|

|Sensores Integrados||
|----|----|
|Sensor TH (SHT41)||
|Rango|Precisión|
|Temperatura|-40~125°C<br/>0.2°C|
|Humedad|0~100%RH<br/>±1.8%RH|
|Acelerómetro de 3 Ejes(LIS3DHTR)||
|Rango|±2g, 4g, 8g, 16g|
|Ancho de Banda|0.5Hz ~ 625Hz|
|Sensibilidad (LSB/g)|1000 (±2g) ~ 83 (±16g)|