---
description: Cubre la construcción y operación del dispositivo, detallando cómo cada componente contribuye a la funcionalidad general del SenseCAP Indicator.
title: Profundizando en el Hardware
keywords:
- Indicator Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_Dive_into_the_Hardware
sidebar_position: 1
last_update:
  date: 11/17/2023
  author: Spencer
---
# **Descripción General**

El SenseCAP Indicator es un dispositivo con pantalla táctil de 4 pulgadas que está alimentado por los MCUs duales ESP32 y RP2040. ESP32 y RP2040 son ambos microcontroladores altamente capaces que ofrecen una gama de características y funciones.

Este capítulo proporcionará información detallada sobre ESP32 y RP2040 del SenseCAP Indicator, incluyendo sus funciones y uso. Cubre programación, interfaz con sensores, y comunicación con otros dispositivos, etc.


# **Profundizando en el Hardware**

## **Diagrama de Hardware**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>

Como se muestra en la figura, el SenseCAP Indicator está impulsado principalmente por los MCUs ESP32 y RP2040, que están conectados al transceptor LoRa, LCD, y otros circuitos periféricos.
En las siguientes secciones, proporcionaremos una descripción general del desarrollo de ESP32 y RP2040 y sus respectivas capacidades.

## **ESP32-S3**

ESP32-S3 es un sistema en chip (SoC) altamente integrado que combina una CPU potente, Wi-Fi de 2.4 GHz, y capacidades Bluetooth 5.0, también incluye una gama de pines e interfaces de entrada/salida, como UART, SPI, I2C, y PWM, que le permiten interfaz con otros dispositivos y sensores.


## **RP2040**

SenseCAP Indicator está integrado con [RP2040](https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html?), RP2040 cuenta con un procesador ARM Cortex-M0+ de doble núcleo con velocidades de reloj de hasta 133 MHz, 264KB de RAM, y una gama de periféricos como USB, UART, SPI, e I2C. También incluye una característica única llamada E/S Programable (PIO), que permite a los usuarios implementar interfaces digitales personalizadas sin la necesidad de hardware especializado.


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/rppinout.png"/></div>


## **Comunicación ESP32-S3 y RP2040**

ESP32 y RP2040 usan comunicación por puerto serie, utilizando el protocolo de comunicación [COBS](http://www.stuartcheshire.org/papers/COBSforToN.pdf).


Librerías usadas en ESP32:  https://github.com/cmcqueen/cobs-c
Librería Arduino usada por RP2040:  https://github.com/bakercp/PacketSerial


En la demo del terminal, se usan las siguientes tramas de datos para transmisión：

| Byte0    | Byte1-4          |
| -------- | ---------------- |
| PKT_TYPE | PKT_PARA (Little Endia)  |


**Lista PKT_TYPE**


**Nota**: Los siguientes comandos son solo para referencia, por supuesto también puedes definir tus propios comandos.


| PKT_TYPE  | DIR\t | Notas  |
|:----------|:----------|:----------|
| 0x00    | ESP32↔RP2040    |   ACK, string, valor:'ACK'  |
| 0xA0    | ESP32→RP2040    |  CMD Intervalo de Recolección, PKT_PARA es uint32_t |
| 0xA1    | ESP32→RP2040    |  CMD Beep encendido, PKT_PARA es uint32_t   |
| 0xA2    | ESP32→RP2040    |  CMD Beep apagado, PKT_PARA es uint32_t  |
| 0xA3    | ESP32→RP2040    |  CMD Apagado, PKT_PARA es uint32_t  |
| 0xA4    | ESP32→RP2040    |  CMD Encendido, PKT_PARA es uint32_t  |
| 0xA0～0xAF  | ESP32→RP2040    |  Otros datos o cmd   |
| 0xB0    | RP2040→ESP32    | Datos de Temperatura SCD41, PKT_PARA es float    |
| 0xB1    | RP2040→ESP32    | Datos de Humedad SCD41, PKT_PARA es float    |
| 0xB2    | RP2040→ESP32    | Datos de CO2 SCD41, PKT_PARA es float    |
| 0xB3    | RP2040→ESP32    | Datos de Temperatura ATH20, PKT_PARA es float    |
| 0xB4    | RP2040→ESP32    | Datos de Humedad ATH20, PKT_PARA es float    |
| 0xB5    | RP2040→ESP32    | Datos tVOC SGP40, PKT_PARA es float. índice 0～500   |
| 0xB6～0xBF    | RP2040→ESP32    | Otros datos o cmd, PKT_PARA es float    |


# **Soporte Técnico**

**¿Necesitas ayuda con tu SenseCAP Indicator? ¡Estamos aquí para asistirte!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>