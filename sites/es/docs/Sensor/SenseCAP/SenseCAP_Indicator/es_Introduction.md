---
description: Comenzar con SenseCAP Indicator
title: Comenzar con SenseCAP Indicator
keywords:
  - Get Started SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png
slug: /Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator
sku: 114993068,114993071,114993069,114993070
sidebar_position: 1
last_update:
  date: 10/13/2025
  author: Twelve
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator/
---

## Descripción General

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/IOdI5_MGbCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="button-container">
  <a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">Obtener Uno Ahora 🖱️</a>
</div>

SenseCAP Indicator es una pantalla táctil de 4 pulgadas impulsada por ESP32-S3 y RP2040 Dual-MCU y soporta comunicación Wi-Fi/Bluetooth/LoRa.

El dispositivo viene con dos interfaces Grove, que soportan protocolos de transmisión ADC e I2C, y dos puertos USB Type-C con pines de expansión GPIO en el interior, por lo que el usuario puede expandir fácilmente accesorios externos a través del puerto USB.

SenseCAP Indicator es una plataforma de desarrollo IoT potente y completamente de código abierto para desarrolladores. También está disponible un servicio ODM Fusion integral para personalización y escalado rápido.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png"/>
</div>

:::caution note
Por favor, no instale el firmware de Meshtastic en indicadores que no soporten Meshtastic. Esto puede causar daños al hardware. Si desea comprar el dispositivo para Meshtastic, por favor compre este [Sensecap Indicator para Meshtastic](https://wiki.seeedstudio.com/es/sensecap_indicator_meshtastic).
:::

## Características

- **MCUs Duales y GPIOs Abundantes**
Equipado con potentes MCUs duales ESP32S3 y RP2040 y más de 400 GPIOs compatibles con Grove para opciones de expansión flexibles.
- **Monitoreo de Calidad del Aire en Tiempo Real**
Sensores tVOC y CO2 integrados, y un sensor Grove AHT20 TH externo para lecturas más precisas de temperatura y humedad.
- **Hub LoRa Local para Conectividad IoT**
Chip LoRa Semtech SX1262 integrado (opcional) para conectar dispositivos LoRa a plataformas IoT populares como Matter a través de Wi-Fi, sin necesidad de dispositivos compatibles adicionales.
- **Plataforma Completamente de Código Abierto**
Aproveche el extenso ecosistema de código abierto de ESP32 y Raspberry Pi para posibilidades de aplicación infinitas.
- **Servicio ODM Fusion Disponible**
Seeed Studio también proporciona servicio ODM integral para personalización rápida y escalado para satisfacer diversas necesidades.(por favor contacte iot@seeed.cc)

## Descripción General del Hardware

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_2.png"/></div>
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_3.png"/></div>

### Diagrama del Sistema

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_7.png"/></div>

### Función del Botón

- **Presión Corta:** Apagar/Despertar la pantalla.
- **Presión Larga por 3s:** Encender/Apagar el dispositivo.
- **Presión Larga por 10s:** Restablecimiento del firmware de fábrica.

### Grove

Hay dos interfaces Grove para conectar módulos Grove, proporcionando más posibilidades para los desarrolladores.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/new-grove.png"/></div>

Grove es un sistema de prototipado de conectores modular y estandarizado y un fuerte ecosistema de hardware de código abierto. Haga clic [**aquí**](https://www.seeedstudio.com/category/Grove-c-1003.html) para obtener más información

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png"/></div>

### LoRa®

El módulo LoRa® Semtech SX1262 integrado le permite construir la aplicación LoRa® y conectar sus sensores LoRa locales a la Nube a través de Wi-Fi. Por ejemplo, podría construir un dispositivo hub LoRa para conectar sus sensores LoRa a su ecosistema de hogar inteligente para implementar Matter sobre Wi-Fi. De esta manera, los dispositivos LoRa podrían conectarse al ecosistema Matter a través de Wi-Fi, sin necesidad de comprar un nuevo dispositivo compatible con Matter.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_55.png"/></div>

## Especificaciones

|Pantalla|3.95 Pulgadas, Pantalla Táctil RGB Capacitiva|
| :- | :- |
|**Resolución de Pantalla**|480 x 480 píxeles|
|**Fuente de Alimentación**|5V-DC, 1A|
|**Batería**|Sin batería, solo alimentado por puerto USB|
|**Procesador**|<p>**ESP32-S3:** Xtensa® dual-core 32-bit hasta 240 MHz</p><p>**RP2040:** Dual ARM Cortex-M0+ hasta 133MHz</p>|
|**Flash**|<p>**ESP32-S3:** 8MB</p><p>**RP2040:** 2MB</p>|
|**Almacenamiento Externo**|Soporta hasta tarjeta Micro SD de 32GB (no incluida)|
|**Wi-Fi**|802.11b/g/n, 2.4GHz|
|**Bluetooth**|Bluetooth 5.0 LE|
|**LoRa(SX1262**)|<p>Módem LoRa y FSK</p><p>+21dBm Potencia Máxima Transmitida</p> <p>-136dBm@SF12 BW=125KHz Sensibilidad RX</p><p>Hasta 5km de distancia de comunicación</p>|
|**Sensores**(Opcional)|<p>**CO2(Sensirion SCD41)**</p><p>Rango: 0-40000ppm</p><p>Precisión: 400ppm-5000ppm ±(50ppm+5% de lectura)</p><p>**TVOC (SGP40)**</p><p>Rango: 1-500 Puntos de Índice VOC</p>**Sensor Grove de Temperatura y Humedad(AHT20)**<p>Rango de Temperatura: -40 ~ + 85 ℃/± 0.3 ℃; 0 ~ 100% RH/± 2% RH (25 ℃)</p>|

## Recursos

- [**PDF**]: [Hoja de Datos RP2040](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf)
- [**PDF**]: [Hoja de Datos ESP32-S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)

## Soporte Técnico

**¿Necesita ayuda con su SenseCAP Indicator? ¡Estamos aquí para asistirle!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
