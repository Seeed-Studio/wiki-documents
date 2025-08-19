---
description: LPWAN Asset Tracker Dev Kit for Amazon Sidewalk – Wio Tracker 1110
title: Kit de Desarrollo LPWAN para Sidewalk
keywords:
- Tracker
- sidewalk
- Amazon
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/wio_tracker_for_sidewalk
last_update:
  date: 06/25/2025
  author: Guillermo
---

El kit de desarrollo LPWAN Asset Tracker está basado en el [Módulo Inalámbrico Wio-WM1110](https://www.seeedstudio.com/Wio-WM1110-Module-LR1110-and-nRF52840-p-5676.html), que recopila datos de ubicación mediante escaneo pasivo de WiFi o GNSS, y se comunica con los puentes de red Amazon Sidewalk usando radios BLE y/o LoRa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/sidewalk-kit.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/LPWAN-Asset-Tracker-Dev-kit-WM1110-p-5846.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

:::tip
Amazon Sidewalk está disponible actualmente solo en EE.UU. Consulta la [Cobertura de la Red Sidewalk](https://coverage.sidewalk.amazon/).

Para otras regiones, también puedes elegir la [Placa de Desarrollo Wio Tracker 1110](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html), compatible con la red LoRaWAN® mundial.
:::

## Características

* **Soporta la Red Amazon Sidewalk**

* **Ofrece múltiples opciones de conectividad**, incluyendo: LoRa®, GNSS (GPS/BeiDou), Bluetooth, Wi-Fi Sniffer

* **Soporta más de 300 sensores Grove de Seeed**: Altamente adaptable para diferentes necesidades de seguimiento y sensado.

* **Sensores integrados de temperatura, humedad y acelerómetro de 3 ejes**: Captura amplia gama de datos ambientales y de movimiento

* **Plataforma completamente Open Source**: Aprovecha el ecosistema abierto de LR1110 y nRF52840 para infinitas posibilidades de aplicación


## Descripción

### Soporte para Amazon Sidewalk

Amazon Sidewalk es una red de largo alcance, cifrada y de conexión gratuita, que provee conectividad persistente para miles de millones de dispositivos. Conecta anónimamente dispositivos inteligentes y crea una red comunitaria compartida altamente confiable que puedes usar para soluciones conectadas más rentables.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/sidewalk-kit.png" alt="pir" width={800} height="auto" /></p>

### Tecnologías múltiples de posicionamiento

El kit LPWAN Asset Tracker Dev – WM1110 integra un frente de radio multipropósito orientado a geolocalización. Está equipado con GNSS para posicionamiento exterior, así como Wi-Fi Sniffer y escaneo Bluetooth para posicionamiento interior. Puede transicionar automáticamente entre actividades interiores y exteriores, eliminando la necesidad de construir diferentes rastreadores para uso interior o exterior, ofreciendo cobertura de ubicación integral mientras reduce la complejidad y el costo.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_234601_twY1xjCUq9Z8yoYu_1701143222?w=2032&h=1070&type=image/png" alt="pir" width={800} height="auto" /></p>

### Periféricos abundantes

Además de los sensores integrados de temperatura y humedad (SHT41) y acelerómetro de 3 ejes (LIS3DHTR), cuenta con una serie de interfaces periféricas y soporta protocolos de transmisión ADC/UART e IIC, que pueden conectarse a más de 300 módulos Grove, facilitando actualizaciones hacia soluciones más inteligentes.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_639823_3yeu0eTFcW0f2AHj_1701143279?w=1802&h=844&type=image/png" alt="pir" width={800} height="auto" /></p>

### Construye una aplicación de rastreo de activos usando Amazon Sidewalk

Conoce más sobre [Amazon Sidewalk](https://www.amazon.com/Amazon-Sidewalk/b?ie=UTF8&node=21328123011) y [AWS IoT Core para Amazon Sidewalk](https://docs.aws.amazon.com/iot/latest/developerguide/iot-sidewalk.html) y cómo conectar el kit LPWAN Asset Tracker Dev a la extensa red Amazon Sidewalk e integrarlo con AWS IoT Core.

Esta aplicación Demo fue creada específicamente para el taller IOT202 Building compliant, secure connected products with AWS IoT en re:Invent 2023, y tiene como objetivo ser usada en futuros talleres de AWS. Desarrolladores o entusiastas podrán entender bien los servicios AWS IoT, incluyendo AWS IoT Core y Amazon Sidewalk, y cómo integrarlos en sus productos conectados mediante el taller.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_817803_KG4rJQIohMMzPyR4_1701150525?w=1370&h=798&type=image/png" alt="pir" width={800} height="auto" /></p>

## Resumen del Hardware

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_19830_N9NXJqFu1LJ_Rku__1700122819?w=1608&h=1060&type=image/png" alt="pir" width={800} height="auto" /></p>

## Aplicación

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_419290_B_TS3XqgFv7LnMbQ_1700474791?w=1752&h=858&type=image/png" alt="pir" width={800} height="auto" /></p>

## Especificaciones

**LoRa® y Posicionamiento (Semtech LR1110)**

|Frecuencia|863~928MHz|
| :- | :- |
|Sensibilidad|<p>-125dBm @125K/SF7</p><p>-141dBm @125K/SF12</p>|
|Potencia de Salida|20dBm máx. @LoRa®|
|Tecnología de Posicionamiento|GNSS (GPS, BeiDou), WiFi|
|Alcance|2~10km (depende de la antena y el ambiente)|

**Bluetooth (Nordic nRF52840)**

|Bluetooth|Bluetooth 5.3|
| :- | :- |
|Memoria Flash|1MB|
|RAM|256KB|
|Protocolos|Bluetooth LE, Bluetooth mesh, Thread, Zigbee, 802.15.4, ANT y stacks propietarios de 2.4 GHz|
|Potencia de Salida|6dBm máx. @Bluetooth|

**Sensores Integrados**

**Sensor TH (SHT41)**

|  | Rango | Precisión |
| -------- | -------- | -------- |
|Temperatura  | -40~125°C |0.2°C|
| Humedad | 0~100%RH |1.8%RH|

**Acelerómetro de 3 ejes (LIS3DHTR)**

| Rango | Ancho de Banda | Sensibilidad (LSB/g) |
| -------- | -------- | -------- | 
| ±2g, 4g, 8g, 16g | 0.5Hz ~ 625Hz |1000 (±2g) ~ 83 (±16g) |
