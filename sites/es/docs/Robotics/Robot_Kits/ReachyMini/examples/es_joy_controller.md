---
description: Ejemplo que demuestra cómo controlar el ángulo de guiñada de la cabeza de Reachy Mini usando un joystick (controlador PS4 o Xbox) para un control intuitivo en tiempo real.
title: Joystick Controller
slug: /reachymini_examples_joy_controller
keywords:
  - joystick
  - controller
  - ps4
  - xbox
  - pygame
  - real-time control
  - head yaw
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/es/reachymini_examples_joy_controller/
---

# Joystick Controller

Este ejemplo muestra cómo controlar el ángulo de guiñada de la cabeza de Reachy Mini usando un joystick (controlador PS4 o Xbox). El joystick izquierdo controla la rotación izquierda-derecha de la cabeza, proporcionando un control intuitivo en tiempo real del robot.

**Controles:**
- **LEFT JOYSTICK (Left/Right)**: Controlar el ángulo de guiñada de la cabeza
- **CIRCLE / B BUTTON**: Salir de la aplicación de forma segura
- **CTRL-C**: Salir de la aplicación

**Requisitos:**
- Instalar pygame: `pip install pygame`
- Conectar un controlador PS4 o Xbox a tu ordenador

**Asignaciones del controlador:**
- PS4: Botón 1 = Círculo (O), Eje 0 = Joystick izquierdo horizontal
- Xbox: Botón 1 = B, Eje 0 = Joystick izquierdo horizontal

Consulta el ejemplo completo en: [joy_controller.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/joy_controller.py)
