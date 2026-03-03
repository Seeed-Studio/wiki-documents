---
description: Seeed Studio Round Display para XIAO-FAQ
title: Si quiero conectar el Seeed Studio XIAO ESP32S3 Sense a esta pantalla de extensión, ¿habrá un conflicto con dos ranuras de tarjeta TF?
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/two_TF_card
last_update:
  date: 6/30/2023
  author: cheng.tang
---
R: Esto no crea un conflicto. Las diferentes ranuras de tarjeta SD se controlan mediante selección de chip, si quieres usar la ranura de tarjeta microSD en Sense, el pin de selección de chip debe ser **21**, si quieres usar la ranura de tarjeta microSD en Round Display, el pin de selección de chip debe ser **D2**.

Tenemos [ejemplos](https://wiki.seeedstudio.com/es/xiao_esp32s3_camera_usage/#project-i-making-a-handheld-camera) de uso tanto del hardware como de las tarjetas microSD en el tutorial de cámara S3 Sense.