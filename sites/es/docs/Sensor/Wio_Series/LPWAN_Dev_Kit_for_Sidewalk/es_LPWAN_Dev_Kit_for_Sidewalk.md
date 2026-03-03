---
description: LPWAN Asset Tracker Dev Kit para Amazon Sidewalk – Wio Tracker 1110
title: LPWAN Dev Kit para Sidewalk
keywords:
- Tracker
- sidewalk
- Amazon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /wio_tracker_for_sidewalk
last_update:
  date: 12/4/2023
  author: Jessie
---

El kit de desarrollo LPWAN Asset Tracker está basado en el [Módulo Inalámbrico Wio-WM1110](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html), recopila datos de ubicación mediante escaneo pasivo de WiFi o GNSS, y se comunica con los puentes de red de Amazon Sidewalk utilizando las radios BLE y/o LoRa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/sidewalk-kit.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LPWAN-Asset-Tracker-Dev-kit-WM1110-p-5846.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

:::tip
Amazon Sidewalk actualmente solo está disponible en los EE.UU. Consulta la [Cobertura de Red Sidewalk](https://coverage.sidewalk.amazon/).

Para otras regiones, también puedes elegir la [Placa de Desarrollo Wio Tracker 1110](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html), que es compatible con la red LoRaWAN® mundial.
:::

## Características

- **Soporte para la Red Amazon Sidewalk**

- **Ofrece múltiples opciones de conectividad** incluyendo: LoRa®, GNSS(GPS/BeiDou), Bluetooth, Wi-Fi Sniffer

- **Soporta más de 300+ Sensores Grove de Seeed**: Haciéndolo altamente adaptable para diferentes requisitos de seguimiento y detección.

- **Sensor de temperatura integrado, sensor de humedad y un acelerómetro de 3 ejes**: Capturando una amplia gama de datos ambientales y de movimiento

- **Plataforma Completamente de Código Abierto**: Aprovecha el extenso ecosistema de código abierto LR1110 y nRF52840 para posibilidades de aplicación infinitas

## Descripción

### Soporte para Amazon Sidewalk

Amazon Sidewalk es una red encriptada de largo alcance de conexión gratuita que proporciona conectividad persistente para miles de millones de dispositivos. Conecta anónimamente dispositivos inteligentes entre sí y crea una red comunitaria compartida altamente confiable que puedes usar para crear soluciones conectadas más rentables.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/sidewalk-kit.png" alt="pir" width={800} height="auto" /></p>

### Múltiples tecnologías de posicionamiento

El kit de desarrollo LPWAN Asset Tracker – WM1110 integra un Front-End de Radio Multipropósito Dirigido a Propósitos de Geolocalización. Está equipado con GNSS dedicado al posicionamiento exterior, así como Wi-Fi Sniffer y escaneo Bluetooth para posicionamiento interior. Es capaz de transicionar automáticamente entre actividades exteriores e interiores, reemplazando la necesidad de construir diferentes rastreadores para uso interior o exterior, esto proporciona cobertura de ubicación integral mientras reduce la complejidad y el costo.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_234601_twY1xjCUq9Z8yoYu_1701143222?w=2032&h=1070&type=image/png" alt="pir" width={800} height="auto" /></p>

### Periféricos ricos

Además del sensor de temperatura y humedad integrado (SHT41) y el acelerómetro de 3 ejes (LIS3DHTR), cuenta con una serie de interfaces periféricas y soporta protocolos de transmisión ADC/UART e IIC, que pueden conectarse a más de 300 módulos Grove, permitiendo actualizaciones fáciles a soluciones más inteligentes.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_639823_3yeu0eTFcW0f2AHj_1701143279?w=1802&h=844&type=image/png" alt="pir" width={800} height="auto" /></p>

### Construye una aplicación de rastreador de activos usando Amazon Sidewalk

Aprende sobre [Amazon Sidewalk](https://www.amazon.com/Amazon-Sidewalk/b?ie=UTF8&node=21328123011) y [AWS IoT Core para Amazon Sidewalk](https://docs.aws.amazon.com/iot/latest/developerguide/iot-sidewalk.html) y cómo conectar el kit de desarrollo LPWAN Asset Tracker a la red de amplio alcance Amazon Sidewalk e integrar con AWS IoT Core.

Esta aplicación Demo fue creada específicamente para el Taller IOT202 Construyendo productos conectados seguros y compatibles con AWS IoT en re: Invent 2023, y tiene como objetivo ser utilizada en futuros eventos de talleres de AWS. Los desarrolladores o entusiastas deberían poder obtener una buena comprensión de los servicios AWS IoT, incluyendo AWS IoT Core y Amazon Sidewalk, y cómo integrarlos en tu producto conectado a través del Taller.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_817803_KG4rJQIohMMzPyR4_1701150525?w=1370&h=798&type=image/png" alt="pir" width={800} height="auto" /></p>

## Descripción General del Hardware

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_19830_N9NXJqFu1LJ_Rku__1700122819?w=1608&h=1060&type=image/png" alt="pir" width={800} height="auto" /></p>

## Aplicación

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_419290_B_TS3XqgFv7LnMbQ_1700474791?w=1752&h=858&type=image/png" alt="pir" width={800} height="auto" /></p>

## Especificaciones

**LoRa® y Posicionamiento (Semtech LR1110)**

|Frecuencia|863~928MHz|
| :- | :- |
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
