---
description: Descripción general
title: Descripción general
keywords:
- Wio_terminal File_System
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-FS-Overview
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Descripción general

Este repositorio introduce cómo instalar la biblioteca del Sistema de Archivos utilizada en Wio Terminal. Proporciona funcionalidad básica de operaciones de archivos con la tarjeta SD, permitiendo Leer/Escribir en o desde la tarjeta SD usando la interfaz SPI.

## Instalación de la Biblioteca del Sistema de Archivos

1. Visita los repositorios de [Seeed_Arduino_FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/master) y descarga todo el repositorio a tu unidad local.

2. Ahora, la biblioteca FS puede ser instalada en el Arduino IDE. Abre el Arduino IDE, y haz clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `Seeed_Arduino_FS` que acabas de descargar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Instalación de las Bibliotecas SFUD Dependientes

1. Visita los repositorios de [Seeed_Arduino_SFUD](https://github.com/Seeed-Studio/Seeed_Arduino_SFUD) y descarga todo el repositorio a tu unidad local.

2. Ahora, la biblioteca SFUD puede ser instalada en el Arduino IDE. Abre el Arduino IDE, y haz clic en `sketch` -> `Include Library` -> `Add .ZIP Library`, y elige el archivo `Seeed_Arduino_SFUD` que acabas de descargar.

## Formato de Tarjeta MicroSD

- **Capacidad Máxima de Tarjeta MicroSD: `16GB`**

- **Formato de Tarjeta MicroSD Soportado:**

  - FAT12

  - FAT16

  - FAT32

  - exFAT