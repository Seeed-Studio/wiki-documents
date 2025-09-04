---
description: BLE
title: BLE
keywords:
- SenseCAP Indicator ESP32 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_ESP32_BLE
last_update:
  date: 5/23/2023
  author: Thomas
---
# **BLE**

[**Ejemplos**](https://github.com/espressif/esp-idf/tree/master/examples/bluetooth)

Este [directorio](https://github.com/espressif/esp-idf/tree/master/examples/bluetooth) contiene una serie de ejemplos de proyectos que demuestran la funcionalidad Bluetooth y proporciona código que puedes copiar y adaptar en tus propios proyectos.

**Usando los Ejemplos**

Antes de compilar un ejemplo, asegúrate de seguir la Guía de Inicio de ESP-IDF para garantizar que tienes el entorno de desarrollo requerido.

Compilar un ejemplo es lo mismo que compilar cualquier otro proyecto:

- Paso 1: Cambia al directorio del nuevo ejemplo que te gustaría compilar.

Ejecuta el siguiente comando para seleccionar el chip objetivo correcto para compilar antes de abrir el menú de configuración del proyecto:

`idf.py set-target esp32s3`

(Por defecto el objetivo es esp32. Para todas las opciones ver idf.py set-target --help)

- Paso 2: Ejecuta el siguiente comando para abrir el menú de configuración del proyecto:

`idf.py menuconfig`

La mayoría de los ejemplos tienen una sección específica del proyecto "Example Configuration" aquí (por ejemplo, para establecer el SSID y contraseña de WiFi a usar)

- Paso 3: Compila el ejemplo:

`idf.py build`

Sigue las instrucciones impresas para flashear, o ejecuta
`idf.py -p PORT flash`

# **Soporte Técnico**

¡No te preocupes, te tenemos cubierto! Por favor visita nuestro [Canal Oficial de Discord de Seeed](https://discord.com/invite/QqMgVwHT3X) para hacer tus preguntas!

Si tienes pedidos grandes o requisitos de personalización, por favor contacta iot@seeed.cc