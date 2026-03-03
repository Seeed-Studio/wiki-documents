---
description: ODYSSEY-FAQ
title: Arduino IDE no reconoce el microcontrolador integrado en ODYSSEY - X86J4105/ X86J4125
#keywords:
slug: /es/not_recognize-onboard-microcontroller
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
last_update:
  date: 6/26/2023
  author: Seraphina
---
 

Si tu Arduino IDE no reconoce el microcontrolador integrado en ODYSSEY - X86J4105/ X86J4125, por favor añade un cable puente entre el **Pin RST** y el **Pin GND** en el conector de 4 pines (a la izquierda de los 28 pines del SAMD21) para reiniciar el AMSAMDG21.

<!-- put picture -->

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105/oydsseyx86J4105_pinout1.png)