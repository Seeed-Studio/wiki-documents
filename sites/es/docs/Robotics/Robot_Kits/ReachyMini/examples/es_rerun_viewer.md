---
description: Ejemplo que demuestra la utilidad Rerun para la visualización en tiempo real y el registro del estado de Reachy Mini en modo cumplidor con compensación de gravedad.
title: Visor Rerun
slug: /reachymini_examples_rerun_viewer
keywords:
  - rerun
  - visualización
  - registro
  - en tiempo real
  - modo cumplidor
  - compensación de gravedad
  - placo
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/es/reachymini_examples_rerun_viewer/
---

# Visor Rerun

Este ejemplo muestra cómo usar la utilidad Rerun para registrar y visualizar el estado de Reachy Mini en tiempo real. El robot estará en modo cumplidor con compensación de gravedad, lo que facilita moverlo mientras se visualiza su configuración.

Requisitos:
- Instalar con: `pip install reachy-mini[rerun,placo_kinematics]`
- Iniciar el daemon con: `reachy-mini-daemon --kinematics-engine Placo`

Consulta el ejemplo completo en: [rerun_viewer.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/rerun_viewer.py)