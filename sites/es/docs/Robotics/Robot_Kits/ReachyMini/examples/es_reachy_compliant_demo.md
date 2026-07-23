---
description: Demostración que muestra a Reachy Mini en modo complaciente con compensación de gravedad, lo que permite que el robot siga empujes suaves y permanezca en su lugar cuando se suelta.
title: Demostración del modo complaciente
slug: /reachymini_examples_reachy_compliant_demo
keywords:
  - compliant mode
  - gravity compensation
  - placo
  - kinematics
  - human-robot interaction
  - soft mode
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/es/reachymini_examples_reachy_compliant_demo/
---

# Demostración del modo complaciente

Esta demostración pone a Reachy Mini en modo complaciente y compensa la gravedad de la plataforma del robot para evitar que se caiga.

Puedes empujar suavemente el robot y seguirá tus movimientos. Cuando dejes de empujarlo, permanecerá en su lugar. Esto es útil para aplicaciones como la interacción humano-robot, donde se desea que el robot sea complaciente y siga los movimientos del usuario.

Nota: Esta demostración actualmente solo funciona con Placo como motor de cinemática.

Consulta el ejemplo completo en: [reachy_compliant_demo.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/reachy_compliant_demo.py)