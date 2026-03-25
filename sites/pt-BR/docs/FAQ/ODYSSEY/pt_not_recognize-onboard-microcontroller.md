---
description: ODYSSEY-FAQ
title: Arduino IDE não reconhece o microcontrolador onboard no ODYSSEY - X86J4105/ X86J4125
slug: /not_recognize-onboard-microcontroller
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
last_update:
  date: 6/26/2023
  author: Seraphina
createdAt: '2023-06-26'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/not_recognize-onboard-microcontroller/
---


Se a sua Arduino IDE não reconhecer o microcontrolador onboard no ODYSSEY - X86J4105/ X86J4125, adicione um jumper entre o **Pino RST** e o **Pino GND** no conector de 4 pinos (à esquerda dos 28 pinos do SAMD21) para resetar o AMSAMDG21.

<!-- colocar imagem -->

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105/oydsseyx86J4105_pinout1.png)
