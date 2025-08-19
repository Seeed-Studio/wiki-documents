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
  date: 05/22/2025
  author: Guillermo
---


La [placa de desarrollo Wio Tracker 1110](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) está basada en el [módulo inalámbrico Wio-WM1110](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html) e integra el transceptor LoRa® LR1110 de [Semtech](https://www.semtech.com/products/wireless-rf/lora-edge/lr1110) y un frontend de radio multipropósito para geolocalización. Es una plataforma de desarrollo de rastreo basada en LoRa fácil de usar.

Con su tamaño compacto y sus múltiples interfaces, la placa Wio Tracker 1110 viene equipada con una antena integrada para una implementación sencilla. Soporta el entorno de desarrollo Arduino y la pila de protocolo LoRaWAN, lo que la hace ideal para proyectos IoT relacionados con rastreo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/wio-tracker.png" alt="pir" width={700} height="auto" /></p>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
    </a>
</div>


## Características

* **Impulsado por Nordic nRF52840 y Semtech LR1110**<br/>
* **Multi-protocolos**: LoRa®, GNSS (GPS/BeiDou), Bluetooth, Wi-Fi Sniffer<br/>
* **Compatible con más de 300 sensores Grove de Seeed**: Lo que lo hace altamente adaptable para diferentes requerimientos de rastreo y sensado<br/>
* **Sensor integrado de temperatura, sensor de humedad y acelerómetro de 3 ejes**: Captura una amplia gama de datos ambientales y de movimiento<br/>
* **Plataforma totalmente de código abierto**: Aprovecha el extenso ecosistema open source de LR1110 y nRF52840 para infinitas posibilidades de aplicación<br/>
* **Compatibilidad con Arduino IDE**: Facilita la programación con un entorno familiar para desarrolladores.

## Descripción

### Transceptor LoRa® de bajo consumo

Gracias al LR1110 de Semtech, la placa de desarrollo Wio Tracker 1110 ofrece comunicación LoRa® de largo alcance y bajo consumo.  
Para aprender sobre Long Range y sus características, como arquitectura de red y aplicaciones, puedes consultar *Una introducción a la tecnología LoRa® y LoRaWAN®*, que explica qué es Long Range, cómo funciona y sus ventajas y desventajas.

### Múltiples tecnologías de posicionamiento

La placa Wio Tracker 1110 integra un Front-End de radio multipropósito orientado a geolocalización.  
Está equipada con GNSS dedicado para posicionamiento exterior, así como escaneo de Wi-Fi y Bluetooth para posicionamiento interior.  
Puede cambiar automáticamente entre actividades en interiores y exteriores, reemplazando la necesidad de construir distintos rastreadores para cada caso, lo que brinda cobertura de ubicación completa mientras reduce la complejidad y el costo.

### Periféricos abundantes

Además del sensor TH integrado y el acelerómetro de 3 ejes, cuenta con una serie de interfaces periféricas y soporta protocolos de transmisión ADC/UART y IIC.  
Se puede conectar a más de 400 módulos Grove, facilitando actualizaciones a soluciones más inteligentes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WM1110-A-Grove.jpg" alt="pir" width={800} height="auto" /></p>


### Desarrolla aplicaciones de usuario

La placa de desarrollo Wio Tracker 1110 es una plataforma IoT potente y totalmente de código abierto, compatible con Arduino IDE.  
Incluye un conjunto de aplicaciones de ejemplo y muestras de código para ayudarte a comenzar de manera rápida y sencilla.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-1.png" alt="pir" width={800} height="auto" /></p>

### Demo de inicio rápido

Proporcionamos una demo plug-and-play, donde los usuarios solo necesitan escanear un código QR, conectar la alimentación y en menos de 5 minutos podrán ver los datos de ubicación y sensores en la aplicación SenseCAP Mate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/grove.png" alt="pir" width={800} height="auto" /></p>

### Visión General del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/hard-overview.png" alt="pir" width={800} height="auto" /></p>

### Especificaciones

|LoRa® y Posicionamiento (Semtech LR1110)| |
|----|----|
|Protocolo LoRaWAN®|V1.0.3|
|Plan de frecuencia|863~928MHz|
|Sensibilidad| -125dBm @125K/SF7<br/>-141dBm @125K/SF12|
|Potencia de salida|20dBm máximo @LoRa®|
|Tecnología de posicionamiento|GNSS (GPS/BeiDou), WiFi Sniffer|
|Alcance|2~10km (Depende de la antena y el entorno)|

|Bluetooth (Nordic nRF52840)| |
|----|----|
|Bluetooth|Bluetooth 5.3|
|Memoria Flash|1MB|
|RAM|256KB|
|Protocolos|Bluetooth LE, Bluetooth mesh, Thread, Zigbee,<br/>802.15.4, ANT y stacks propietarios de 2.4 GHz|
|Potencia de salida|6dBm máximo @Bluetooth|

|General| |
|----|----|
|Voltaje - alimentación|5V (USB 2.0 Tipo-C)<br/>Conector de batería - 4.5V|
|RFIO|Conector de antena GNSS x 1<br/>Conector de antena LoRa x 1|
|USB tipo-C|x 1|
|Interfaz Grove|ADC x 1<br/>I2C x 1<br/>UART x 1<br/>Digital x 3|
|Botones|Botón configurable por usuario<br/>RESET - Reset|

|Sensores integrados| |
|----|----|
|Sensor TH (SHT41)| |
|Rango|Precisión|
|Temperatura|-40~125°C<br/>0.2°C|
|Humedad|0~100% RH<br/>±1.8% RH|
|Acelerómetro de 3 ejes (LIS3DHTR)| |
|Rango|±2g, 4g, 8g, 16g|
|Ancho de banda|0.5Hz ~ 625Hz|
|Sensibilidad (LSB/g)|1000 (±2g) ~ 83 (±16g)|


