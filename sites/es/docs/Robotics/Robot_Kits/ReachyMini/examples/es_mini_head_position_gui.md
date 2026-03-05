---
description: Ejemplo de GUI interactiva usando Tkinter para controlar la posición y orientación de la cabeza de Reachy Mini con deslizadores para roll, pitch, yaw, X, Y, Z y yaw del cuerpo.
title: GUI de Posición de la Cabeza
slug: /reachymini_examples_mini_head_position_gui
keywords:
  - gui
  - tkinter
  - head position
  - orientation
  - sliders
  - real-time control
  - interactive
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/reachymini_examples_mini_head_position_gui/
---

# GUI de Posición de la Cabeza

Este ejemplo proporciona una interfaz gráfica de usuario (GUI) usando Tkinter para controlar de forma interactiva la posición y la orientación de la cabeza de Reachy Mini. Puedes ajustar los ángulos de roll, pitch, yaw de la cabeza y la posición X, Y, Z usando deslizadores, así como controlar el yaw del cuerpo y ver movimientos animados de las antenas.

**Características:**
- Control en tiempo real de la orientación de la cabeza (roll, pitch, yaw)
- Control en tiempo real de la posición de la cabeza (X, Y, Z)
- Control del yaw del cuerpo
- Movimientos animados de las antenas (oscilación en onda sinusoidal)
- Deslizadores interactivos con actualizaciones en vivo a 50 Hz

**Uso:**
```bash
python mini_head_position_gui.py
```

Se abrirá una ventana de GUI con deslizadores para todos los parámetros controlables. Ajusta los deslizadores para ver cómo el robot responde en tiempo real.

Consulta el ejemplo completo en: [mini_head_position_gui.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/mini_head_position_gui.py)
