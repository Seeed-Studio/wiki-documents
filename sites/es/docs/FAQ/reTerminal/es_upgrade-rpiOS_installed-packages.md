---
description: reTerminal-FAQ
title: Cómo actualizar Raspberry Pi OS y los paquetes instalados
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/upgrade-rpiOS_installed-packages
last_update:
  date: 6/21/2023
  author: cheng.tang
---

<!-- ## Q3: How to upgrade Raspberry Pi OS and the installed packages -->

Actualizaremos todos los paquetes y también el Raspberry Pi OS a la versión más reciente

### **Paso 1.** Abre una ventana de terminal en el reTerminal y escribe lo siguiente

```sh
sudo apt update
sudo apt full-upgrade
```

### **Paso 2.** Reinstala los headers del kernel

```sh
sudo apt install raspberrypi-kernel-headers
```

### **Paso 3.** Reinicia el reTerminal

```sh
sudo reboot
```

¡Ahora tu Raspberry Pi OS y todos los paquetes necesarios están actualizados!