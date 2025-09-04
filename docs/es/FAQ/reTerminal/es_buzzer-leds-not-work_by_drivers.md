---
description: reTerminal-FAQ
title: Cómo resolver el problema de que el zumbador y los LEDs no funcionen después de instalar los controladores de reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/buzzer-leds-not-work_by_drivers
last_update:
  date: 6/21/2023
  author: Seraphina
---


<!-- Q13: LEDs and Buzzer do not work after installing reTerminal drivers -->

Este problema no durará mucho. Resolveremos completamente este problema más adelante desde los propios controladores de reTerminal

- **Paso 1.** Abrir **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **Paso 2.** Comentar la siguiente línea y guardar el archivo escribiendo **:wq** después de presionar **ESC**

```sh
#dtoverlay=reTerminal-bridge
```

- **Paso 3.** Reiniciar reTerminal

```sh
sudo reboot
```

Ahora los LEDs y el Zumbador funcionarán con normalidad.