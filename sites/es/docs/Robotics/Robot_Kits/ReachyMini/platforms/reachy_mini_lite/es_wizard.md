---
description: Guía para leer parámetros del motor usando el software Dynamixel Wizard 2.0 para diagnosticar y configurar los motores de Reachy Mini Lite.
title: Lectura de parámetros del motor con Dynamixel Wizard
slug: /reachymini_platforms_reachy_mini_lite_wizard
keywords:
  - dynamixel wizard
  - parámetros del motor
  - diagnóstico
  - configuración
  - conexión usb
  - escanear
  - leer
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/es/reachymini_platforms_reachy_mini_lite_wizard/
---

# Cómo leer parámetros de los motores usando Dynamixel Wizard

## Instalar Dynamixel Wizard
Puedes descargar Dynamixel Wizard desde el siguiente enlace:
- [Dynamixel Wizard](https://emanual.robotis.com/docs/en/software/dynamixel/dynamixel_wizard2/)

## Conectar a Reachy Mini Lite
1. Enciende Reachy Mini Lite usando el adaptador de corriente proporcionado.
2. Conecta tu ordenador a Reachy Mini Lite usando un cable USB-C.
3. Abre la aplicación Dynamixel Wizard.
4. Haz clic en "option" junto al "connect button", luego ve a la pestaña "scan" y comprueba la siguiente información para poder detectar todos tus motores.
    - Versión de protocolo: 2.0
    - Baudrate: 1000000
    - Puerto: Selecciona el puerto apropiado para tu conexión USB (por ejemplo, COM3 en Windows o /dev/ttyUSB0 en Linux/Mac).

![Dynamixel_Wizard_Scan_Settings](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/scan_parameters.png)

5. Haz clic en el botón "Scan" para detectar todos los motores conectados. El asistente mostrará una lista de los motores detectados junto con sus IDs.

## Leer parámetros del motor
1. Selecciona un motor de la lista de motores detectados.
2. Marca los parámetros que quieres leer (por ejemplo: Present Position, Present Velocity, Present Load, etc.)

![Dynamixel_Wizard_Read_Settings](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/wizard_parameters.png)