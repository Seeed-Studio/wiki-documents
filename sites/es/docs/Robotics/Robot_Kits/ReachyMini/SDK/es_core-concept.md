---
description: Comprende los conceptos y la arquitectura fundamentales de Reachy Mini, incluyendo el diseño cliente-servidor, sistemas de coordenadas, límites de seguridad y modos de motor para un desarrollo de aplicaciones robusto.
title: Conceptos Fundamentales y Arquitectura
slug: /reachymini_sdk_core-concept
keywords:
  - architecture
  - coordinate systems
  - safety limits
  - motor modes
  - client-server
  - daemon
  - sdk
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/es/reachymini_sdk_core-concept/
---

# Conceptos Fundamentales y Arquitectura

Comprender cómo funciona Reachy Mini internamente te ayudará a crear aplicaciones robustas y depurar problemas.

## Arquitectura de Software

Reachy Mini utiliza una arquitectura de **Cliente-Servidor**:

1.  **El Daemon (Servidor):**
    * Se ejecuta en el ordenador conectado al robot (o a la simulación).
    * Gestiona el I/O de hardware (USB/Serial), las comprobaciones de seguridad y la lectura de sensores.
    * Expone una REST API (`localhost:8000`) y WebSocket.

2.  **El SDK (Cliente):**
    * Tu código Python (paquete `reachy_mini`).
    * Se conecta al Daemon a través de la red.
    * *Ventaja:* Puedes ejecutar tu código de IA en un servidor potente mientras el Daemon se ejecuta en una Raspberry Pi conectada al robot.

## Sistemas de Coordenadas

Al mover el robot, trabajarás con dos marcos de referencia principales:

### 1. Marco de la Cabeza
Ubicado en la base de la cabeza. Se utiliza para los comandos `goto_target` y `set_target`.

![Reachy Mini Head Frame](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/head_frame.png)

### 2. Marco del Mundo
Fijo con respecto a la base del robot. Se utiliza para los comandos `look_at_world`.

![Reachy Mini World Frame](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/world_frame.png)

## Límites de Seguridad ⚠️

Reachy Mini tiene límites físicos y de software para evitar autocolisiones y daños. El SDK limitará automáticamente los valores a la posición válida más cercana.

| Articulación / Eje | Rango de Límite |
| :--- | :--- |
| **Inclinación/Rodamiento de Cabeza** | [-40°, +40°] |
| **Giro de Cabeza** | [-180°, +180°] |
| **Giro de Cuerpo** | [-160°, +160°] |
| **Delta de Giro** | Diferencia máxima de 65° entre el Giro de Cabeza y el de Cuerpo |

## Modos de Motor

Puedes cambiar cómo se comportan los motores:
* **`mini.enable_motors()`**: Rígido. Mantiene la posición.
* **`mini.disable_motors()`**: Flojo. Sin alimentación.
* **`mini.enable_gravity_compensation()`**: Modo "suave". Puedes mover la cabeza con la mano y se quedará donde la dejes. (Solo funciona con el backend de cinemática Placo.)


## Próximos Pasos
* **[Guía de Inicio Rápido](/es/reachymini_sdk_quickstart)**: Ejecuta tu primer comportamiento en Reachy Mini
* **[SDK de Python](/es/reachymini_sdk_python-sdk)**: Aprende a mover, ver, hablar y escuchar.
* **[Integraciones de IA](/es/reachymini_sdk_integration)**: Conecta LLMs, crea Apps y publícalas en Hugging Face.
