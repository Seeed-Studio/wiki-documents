---
description: Ejemplo que demuestra la utilidad Rerun para la visualización en tiempo real y el registro del estado de Reachy Mini en modo compliant con compensación de gravedad.
title: Visor Rerun
slug: /reachymini_examples_rerun_viewer
keywords:
- rerun
- visualization
- logging
- real-time
- compliant mode
- gravity compensation
- placo
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Visor Rerun

Este ejemplo muestra cómo usar la utilidad Rerun para registrar y visualizar en tiempo real el estado de Reachy Mini. El robot estará en modo compliant con compensación de gravedad, lo que facilita moverlo mientras se visualiza su configuración.

Requisitos:
- Instalar con: `pip install reachy-mini[rerun,placo_kinematics]`
- Iniciar el daemon con: `reachy-mini-daemon --kinematics-engine Placo`

Consulta el ejemplo completo en: [rerun_viewer.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/rerun_viewer.py)
