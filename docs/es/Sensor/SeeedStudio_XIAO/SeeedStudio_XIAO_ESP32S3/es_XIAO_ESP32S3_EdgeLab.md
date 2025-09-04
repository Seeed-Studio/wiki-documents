---
description: SenseCraft Model Assistant Primeros Pasos con Seeed Studio XIAO ESP32S3.
title: SenseCraft Model Assistant con XIAO ESP32S3 (Sense)
keywords:
- esp32s3
- xiao
- tinyml
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32s3_edgelab
last_update:
  date: 10/04/2023
  author: LynnL4
---

# SenseCraft Model Assistant Primeros Pasos con Seeed Studio XIAO ESP32S3

## Introducción
[SenseCraft Model Assistant](https://edgelab.readthedocs.io/en/latest/) es un proyecto de código abierto enfocado en IA embebida. Hemos optimizado excelentes algoritmos de OpenMMLab para escenarios del mundo real y hemos hecho la implementación más fácil de usar, logrando inferencia más rápida y precisa en dispositivos embebidos.

## Hardware Requerido
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio Round Display for XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- Cable Type-C

## Software Requerido
- ESP-IDF v4.4
- SenseCraft Model Assistant v0.1.0
- Código de Ejemplo: [SenseCraft Model Assistant-example-esp32](https://github.com/Seeed-Studio/edgelab-example-esp32)

## Cómo Instalar 
### Instalar ESP-IDF

Sigue las instrucciones de la
[guía de inicio de ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html)
para configurar la cadena de herramientas y el propio ESP-IDF.

Los siguientes pasos asumen que esta instalación es exitosa y que las
[variables de entorno de IDF están configuradas](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html#step-4-set-up-the-environment-variables). Específicamente,
* la variable de entorno `IDF_PATH` está configurada
* las herramientas `idf.py` y Xtensa-esp32 (por ejemplo, `xtensa-esp32-elf-gcc`) están en `$PATH`

### obtener submódulos
Ve al directorio raíz del proyecto y ejecuta el siguiente comando para obtener los submódulos:

```
git clone https://github.com/Seeed-Studio/edgelab-example-esp32 && cd edgelab-example-esp32
git submodule init
git submodule update
```

## Cómo Usar
### Compilar el ejemplo

Ve al directorio del ejemplo (`examples/<example_name>`) y compila el ejemplo.

Configura el IDF_TARGET (Para el objetivo ESP32-S3, se necesita la versión IDF `release/v4.4`)

```
idf.py set-target esp32s3
```

Configura el ejemplo

```
idf.py menuconfig
```

- Selecciona el Módulo de Cámara en `Component config` -> `SenseCraft Model Assistant Configuration` -> `Camera Configuration` -> `Select Camera Pinout`
![img](https://raw.githubusercontent.com/Seeed-Studio/sscma-example-esp32/1.0.0/docs/_static/esp32/images/esp32s3-xiao-camera.png)
- Selecciona el Módulo LCD en `Component config` -> `SenseCraft Model Assistant Configuration` -> `LCD Configuration` -> `Select LCD Pinout`
![img](https://raw.githubusercontent.com/Seeed-Studio/sscma-example-esp32/1.0.0/docs/_static/esp32/images/esp32s3-xiao-lcd.png)


Para compilar esto, ejecuta:

```
idf.py build
```


### Cargar y ejecutar el ejemplo

Para flashear (reemplaza `/dev/ttyUSB0` con el puerto serie del dispositivo):
```
idf.py --port /dev/ttyUSB0 flash
```

Monitorea la salida serie:
```
idf.py --port /dev/ttyUSB0 monitor
```


## Soporte Técnico y Discusión de Productos


¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>