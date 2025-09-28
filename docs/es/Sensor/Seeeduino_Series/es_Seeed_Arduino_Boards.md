---
description: Cómo agregar placas Seeed al IDE de Arduino
title: Cómo agregar placas Seeed al IDE de Arduino
keywords:
  - Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeed_Arduino_Boards
last_update:
  date: 02/02/2023
  author: w0x7ce
---


Seeed ha diseñado muchas placas que funcionan con el IDE de Arduino, incluyendo:

* [Seeeduino XIAO](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/)
* [Seeeduino Wio Terminal](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/)
* [Seeeduino Lotus Cortex-M0+](https://wiki.seeedstudio.com/es/Seeeduino_Lotus_Cortex-M0-/)
* [Seeeduino LoRaWAN](https://wiki.seeedstudio.com/es/Seeeduino_LoRAWAN/)/GPS
* [Seeeduino Cortex M0](https://wiki.seeedstudio.com/es/Seeeduino-Cortex-M0/)

:::caution
Las placas mencionadas arriba son de la serie de microcontroladores AT SAMD21. Por favor, copia la siguiente URL en *URLs adicionales del gestor de placas* en el paso 2.
:::

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

* Seeeduino [V3](https://wiki.seeedstudio.com/es/Seeeduino_v3.0/)/[4](https://wiki.seeedstudio.com/es/Seeeduino_v4.0/)
* [Seeeduino Lotus](https://wiki.seeedstudio.com/es/Seeeduino_Lotus/)
* Seeeduino Stalker [V2.3](https://wiki.seeedstudio.com/es/Seeeduino_Stalker_v2.3/)/[3](https://wiki.seeedstudio.com/es/Seeeduino_v3.0/)/[3.1](https://wiki.seeedstudio.com/es/Seeeduino_Stalker_V3.1/)
* [Seeeduino Lite](https://wiki.seeedstudio.com/es/Seeeduino_Lite/)
* [Seeeduino Mega](https://wiki.seeedstudio.com/es/Seeeduino_Mega/)
* [Seeeduino Mega Protoshield Kit](https://wiki.seeedstudio.com/es/Seeeduino_Mega_Protoshield_Kit/)
* [Seeeduino GPRS](https://wiki.seeedstudio.com/es/Seeeduino_GPRS/)
* [Seeeduino Ethernet](https://wiki.seeedstudio.com/es/Seeeduino_Ethernet/)
* [Seeeduino Cloud](https://wiki.seeedstudio.com/es/Seeeduino_Cloud/)
* [Seeeduino Nano](https://wiki.seeedstudio.com/es/Seeeduino-Nano/)
* [Seeeduino Crypto (ATmega4809 ECC608)](https://wiki.seeedstudio.com/es/Seeeduino-Crypto-ATmega4809-ECC608/)
* [LinkIt ONE](https://wiki.seeedstudio.com/es/LinkIt_ONE/)
* [Serie RePhone](https://wiki.seeedstudio.com/es/RePhone/)

:::note
Las placas mencionadas arriba desde Seeeduino V3 hasta la Serie RePhone no son de la serie de microcontroladores AT SAMD21. Por favor, copia la siguiente URL en *URLs adicionales del gestor de placas* en el paso 2.
:::

```
https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json
```

Gracias a las nuevas características del IDE de Arduino, ahora es fácil agregar esas placas a tu IDE de Arduino.

Hay algunos pasos a seguir.

## Paso 1. Descargar la última versión del IDE de Arduino

Necesitas un IDE de Arduino posterior a la versión 1.6.4, por favor descarga uno si no tienes el IDE de Arduino en tu computadora.

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)

## Paso 2. Configurar tu IDE de Arduino

Abre tu IDE de Arduino, haz clic en **Archivo > Preferencias**, y copia la siguiente URL en *URLs adicionales del gestor de placas*

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png)

## Paso 3. Gestor de placas

Haz clic en **Herramientas > Placa > Gestor de placas**.

Ahora puedes buscar la placa por nombre, si necesitas usar `LinkIt ONE`, entonces solo busca `LinkIt`; y si necesitas usar la `Serie RePhone`,
solo escribe `RePhone`. En este wiki, tomaremos como ejemplo `Seeeduino Stalker V3`.

Haz clic en Seeeduino Stalker V3 y aparecerá un botón **Instalar**, haz clic en él para finalizar el paso, este proceso toma aproximadamente 5 minutos a media hora, dependiendo de la velocidad de tu red.

![](https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/img/add_board.png)

## Paso 4. Seleccionar una placa

Después de que el Paso 3 sea exitoso, una placa llamada Seeeduino Stalker V3 aparecerá en la lista de placas.

Haz clic en **Herramientas > Placa**, *Seeeduino Stalker V3* está disponible ahora.

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>