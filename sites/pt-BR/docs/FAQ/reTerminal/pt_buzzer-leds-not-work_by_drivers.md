---
description: reTerminal-FAQ
title: Como resolver o problema do buzzer e dos LEDs que não funcionam após instalar os drivers do reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /buzzer-leds-not-work_by_drivers
last_update:
  date: 6/21/2023
  author: Seraphina
createdAt: '2023-06-21'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/buzzer-leds-not-work_by_drivers/
---


<!-- Q13: LEDs and Buzzer do not work after installing reTerminal drivers -->

Este problema não irá durar muito. Vamos resolvê-lo completamente depois, a partir dos próprios drivers do reTerminal

- **Passo 1.** Abra **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **Passo 2.** Comente a seguinte linha e salve o arquivo digitando **:wq** depois de pressionar **ESC**

```sh
#dtoverlay=reTerminal-bridge
```

- **Passo 3.** Reinicie o reTerminal

```sh
sudo reboot
```

Agora os LEDs e o buzzer funcionarão normalmente.
