---
description: reTerminal-FAQ
title: Cómo despertar la pantalla LCD del reTerminal después del reposo
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wakeup_reTerminal_LCD_after_sleep
last_update:
  date: 12/16/2024
  author: Joshua Lee
---

<!-- Q6:No puedo despertar la pantalla LCD del reTerminal después del reposo -->

A partir de [github.com/Seeed-Studio/pi-gen-expand/commit/8affb3b](https://github.com/Seeed-Studio/pi-gen-expand/commit/8affb3b), la solución para este problema ha sido integrada en el controlador, por lo que no necesitas realizar pasos adicionales manualmente

Para versiones anteriores, por favor considera reinstalar el controlador desde [github.com/Seeed-Studio/seeed-linux-dtoverlays](https://github.com/Seeed-Studio/seeed-linux-dtoverlays). Consulta [Instalar controladores del reTerminal después de flashear un nuevo SO Raspbian](/es/reterminal-dm-flash-OS/#install-reterminal-drivers-after-flashing-new-raspbian-os) para pasos detallados.