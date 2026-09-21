---
description: Primeros pasos con SenseCAP Indicator
title: Primeros pasos con SenseCAP Indicator
keywords:
  - Primeros pasos SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png
slug: /Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator
sku: 114993068,114993071,114993069,114993070
sidebar_position: 1
last_update:
  date: 09/20/2026
  author: Twelve
createdAt: '2023-05-17'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/Sensor/SenseCAP/SenseCAP_Indicator/Get_started_with_SenseCAP_Indicator/
---

## Descripción general

<div class="video-container">
<iframe class="youtube-video-r" src="https://www.youtube.com/embed/IOdI5_MGbCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="button-container">
  <a class="button-style" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html">Consigue uno ahora 🖱️</a>
</div>

SenseCAP Indicator es una pantalla táctil de 4 pulgadas impulsada por un Dual-MCU ESP32-S3 y RP2040 y es compatible con comunicación Wi-Fi/Bluetooth/LoRa.

El dispositivo viene con dos interfaces Grove, que admiten los protocolos de transmisión ADC e I2C, y dos puertos USB Type-C con pines de expansión GPIO en su interior, por lo que el usuario puede ampliar fácilmente accesorios externos a través del puerto USB.

SenseCAP Indicator es una potente plataforma de desarrollo IoT totalmente de código abierto para desarrolladores. El servicio de Fusión ODM todo en uno también está disponible para personalización y rápida ampliación.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png"/>
</div>

:::caution note
Por favor, no flashees el firmware Meshtastic en indicadores que no sean compatibles con Meshtastic. Esto puede causar daños en el hardware. Si quieres comprar el dispositivo para Meshtastic, compra este [Sensecap Indicator for Meshtastic](https://wiki.seeedstudio.com/es/sensecap_indicator_meshtastic).
:::

## Características

- **MCUs duales y GPIOs abundantes**
Equipado con potentes MCUs duales ESP32S3 y RP2040 y más de 400 GPIOs compatibles con Grove para opciones de expansión flexibles.
- **Monitorización de calidad del aire en tiempo real**
Sensores tVOC y CO2 integrados, y un sensor externo Grove AHT20 TH para lecturas de temperatura y humedad más precisas.
- **Hub LoRa local para conectividad IoT**
Chip LoRa Semtech SX1262 integrado (opcional) para conectar dispositivos LoRa a plataformas IoT populares como Matter a través de Wi-Fi, sin necesidad de dispositivos compatibles adicionales.
- **Plataforma totalmente de código abierto**
Aprovecha el amplio ecosistema de código abierto de ESP32 y Raspberry Pi para infinitas posibilidades de aplicación.
- **Servicio Fusion ODM disponible**
Seeed Studio también proporciona un servicio ODM integral para una rápida personalización y ampliación para satisfacer diversas necesidades. (por favor, contacta con iot@seeed.cc)

## Descripción del hardware

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_2.png"/></div>
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_3.png"/></div>

### Diagrama del sistema

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_7.png"/></div>

### Función del botón

- **Pulsación corta:** Apagar / Despertar la pantalla.
- **Pulsación larga durante 3 s:** Encender/Apagar el dispositivo.
- **Pulsación larga durante 10 s:** Restablecimiento del firmware de fábrica.

### Grove

Hay dos interfaces Grove para conectar módulos Grove, proporcionando más posibilidades para los desarrolladores.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/new-grove.png"/></div>

Grove es un sistema de creación de prototipos modular y estandarizado con conectores y un sólido ecosistema de hardware de código abierto. Haz clic [**aquí**](https://www.seeedstudio.com/category/Grove-c-1003.html) para obtener más información

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png"/></div>

### LoRa®

El módulo LoRa® Semtech SX1262 integrado te permite crear la aplicación LoRa® y conectar tus sensores LoRa locales a la nube a través de Wi-Fi. Por ejemplo, podrías crear un dispositivo hub LoRa para conectar tus sensores LoRa a tu ecosistema de hogar inteligente para implementar Matter sobre Wi-Fi. De este modo, los dispositivos LoRa podrían conectarse al ecosistema Matter a través de Wi-Fi, sin necesidad de comprar un nuevo dispositivo compatible con Matter.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_55.png"/></div>

## Especificaciones

|Pantalla|3,95 pulgadas, pantalla táctil capacitiva RGB|
| :- | :- |
|**Resolución de pantalla**|480 x 480 píxeles|
|**Alimentación**|5V-DC, 1A|
|**Batería**|Sin batería, solo alimentado por el puerto USB|
|**Procesador**|<p>**ESP32-S3:** Xtensa® de doble núcleo de 32 bits hasta 240 MHz</p><p>**RP2040:** Dual ARM Cortex-M0+ hasta 133MHz</p>|
|**Flash**|<p>**ESP32-S3:** 8MB</p><p>**RP2040:** 2MB</p>|
|**Almacenamiento externo**|Admite tarjeta Micro SD de hasta 32GB (no incluida)|
|**Wi-Fi**|802.11b/g/n, 2.4GHz|
|**Bluetooth**|Bluetooth 5.0 LE|
|**LoRa(SX1262**)|<p>Módem LoRa y FSK</p><p>Potencia máxima transmitida +21dBm</p> <p>Sensibilidad RX -136dBm@SF12 BW=125KHz</p><p>Hasta 5 km de distancia de comunicación</p>|
|**Sensores**(Opcional)|<p>**CO2(Sensirion SCD41)**</p><p>Rango: 0-40000ppm</p><p>Precisión: 400ppm-5000ppm ±(50ppm+5% de la lectura)</p><p>**TVOC (SGP40)**</p><p>Rango: 1-500 puntos de índice VOC</p>**Grove Temperature and Humidity Sensor(AHT20)**<p>Rango de temperatura: -40 ~ + 85 ℃/± 0,3 ℃; 0 ~ 100% HR/± 2% HR (25 ℃)</p>|

## Recursos

- [**PDF**]: [RP2040 Datasheet](https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf)
- [**PDF**]: [ESP32-S3 Datasheet](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [ Archivo STP del modelo 3D exterior general](https://files.seeedstudio.com/wiki/SenseCAP_Indicator/Indicator_3D.stp )

## Soporte técnico

**¿Necesitas ayuda con tu SenseCAP Indicator? ¡Estamos aquí para ayudarte!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
