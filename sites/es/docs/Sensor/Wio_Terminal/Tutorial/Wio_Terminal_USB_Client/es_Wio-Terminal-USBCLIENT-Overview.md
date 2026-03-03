---
description: Descripción general
title: Descripción general
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-USBCLIENT-Overview
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Descripción general

Este repositorio presenta cómo usar el Wio Terminal como cliente USB, incluyendo su uso para Dispositivos de Interfaz Humana (HID) como teclado, ratón y otros. También soporta Interfaz Digital de Instrumentos Musicales (MIDI).

Esta funcionalidad depende de la [Biblioteca TinyUSB de Adafruit para Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino). La biblioteca ha sido probada con Wio Terminal (SAMD51) y funciona correctamente.

## Instalación de la Biblioteca TinyUSB de Adafruit para Arduino

1. Visita los repositorios de la [Biblioteca TinyUSB de Adafruit para Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino) y descarga todo el repositorio a tu unidad local.

2. Ahora, la biblioteca puede instalarse en el IDE de Arduino. Abre el IDE de Arduino, y haz clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `Adafruit_TinyUSB_Arduino` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)