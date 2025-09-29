---
description: Descripción general
title: Descripción general
keywords:
- Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-USBH-Overview
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Descripción general

Este repositorio presenta cómo usar el Wio Terminal como un Host USB, lo que significa que podrías conectar dispositivos USB al Wio Terminal y jugar con él como si fuera una computadora.

Esta funcionalidad depende de la [USB Host Library SAMD](https://github.com/gdsports/USB_Host_Library_SAMD). La biblioteca ha sido probada con Wio Terminal(SAMD51) y funciona correctamente.

## Instalación de la USB Host Library SAMD

1. Visita los repositorios de [USB Host Library SAMD](https://github.com/gdsports/USB_Host_Library_SAMD) y descarga todo el repositorio a tu unidad local.

2. Ahora, la biblioteca puede ser instalada en el Arduino IDE. Abre el Arduino IDE, y haz clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `Seeed_Arduino_LCD` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Configuraciones del Host USB

Para habilitar el Host USB en Wio Terminal, debes configurar dos pines. Necesitas establecer `PIN_USB_HOST_ENABLE` en **LOW** y `OUTPUT_CTR_5V` en **HIGH**.

Puedes hacer esto simplemente agregando el siguiente código en el `void setup()`:

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```