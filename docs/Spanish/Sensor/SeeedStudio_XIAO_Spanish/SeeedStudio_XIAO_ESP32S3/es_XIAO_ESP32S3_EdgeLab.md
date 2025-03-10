---
description: SenseCraft Model Assistant Getting Start with Seeed Studio XIAO ESP32S3.
title: Asistente de Modelo SenseCraft con Seeed Studio XIAO ESP32S3 (Sense)
keywords:
- esp32s3
- xiao
- tinyml
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao_esp32s3_edgelab
last_update:
  date: 02/11/2025
  author: Guillermo
---

# Asistente de Modelo SenseCraft con Seeed Studio XIAO ESP32S3

## Introducción
[SenseCraft Model Assistant](https://edgelab.readthedocs.io/en/latest/) es un proyecto de código abierto enfocado en IA embebida. Hemos optimizado excelentes algoritmos de OpenMMLab para escenarios del mundo real y hemos hecho que la implementación sea más amigable para el usuario, logrando inferencias más rápidas y precisas en dispositivos embebidos.

## Hardware Requerido
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio Round Display para XIAO](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- Cable Type-C

## Software Requerido
- ESP-IDF v4.4
- SenseCraft Model Assistant v0.1.0
- Código de ejemplo: [SenseCraft Model Assistant-example-esp32](https://github.com/Seeed-Studio/edgelab-example-esp32)

## Cómo instalar
### Instalar ESP-IDF

Sigue las instrucciones de la
[guía de inicio de ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html)
para configurar la cadena de herramientas y el propio ESP-IDF.

Los siguientes pasos asumen que esta instalación ha sido exitosa y que las
[variables de entorno de IDF están configuradas](https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html#step-4-set-up-the-environment-variables). Específicamente:
* la variable de entorno `IDF_PATH` está configurada
* las herramientas `idf.py` y Xtensa-esp32 (por ejemplo, `xtensa-esp32-elf-gcc`) están en `$PATH`

### Obtener submódulos
Accede al directorio raíz del proyecto y ejecuta el siguiente comando para obtener los submódulos:

```
git clone https://github.com/Seeed-Studio/edgelab-example-esp32 && cd edgelab-example-esp32
git submodule init
git submodule update
```

## Cómo usar

### Construir el ejemplo

Ve al directorio del ejemplo (`examples/<nombre_del_ejemplo>`) y construye el ejemplo.

Configura el `IDF_TARGET` (Para el objetivo ESP32-S3, se necesita la versión `release/v4.4` de IDF).

```
idf.py set-target esp32s3
```

Configurar el ejemplo

```
idf.py menuconfig
```

- Selecciona el Módulo de Cámara en `Configuración del componente` -> `Configuración de SenseCraft Model Assistant` -> `Configuración de la cámara` -> `Seleccionar el pinout de la cámara`
![img](https://raw.githubusercontent.com/Seeed-Studio/sscma-example-esp32/1.0.0/docs/_static/esp32/images/esp32s3-xiao-camera.png)
- Selecciona el Módulo LCD en `Configuración del componente` -> `Configuración de SenseCraft Model Assistant` -> `Configuración del LCD` -> `Seleccionar el pinout del LCD`
![img](https://raw.githubusercontent.com/Seeed-Studio/sscma-example-esp32/1.0.0/docs/_static/esp32/images/esp32s3-xiao-lcd.png)

Para construir esto, ejecute:

```
idf.py build
```


### Carga y ejecuta el ejemplo

Para flashear (reemplaza `/dev/ttyUSB0` con el puerto serial del dispositivo):
```
idf.py --port /dev/ttyUSB0 flash
```

Monitorea la salida serial:
```
idf.py --port /dev/ttyUSB0 monitor
```

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes formas de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


