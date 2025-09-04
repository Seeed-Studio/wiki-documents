---
description: reTerminal-FAQ
title: Cómo deshabilitar la rotación de pantalla en reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/disable_screen_rotation_on_reTerminal
last_update:
  date: 6/21/2023
  author: Seraphina
---

Si tu pantalla se muestra correctamente pero rota con el reTerminal, puedes desactivar la rotación automática de la pantalla eliminando el acelerómetro, lo que resulta en una pantalla estática en modo horizontal. <br/>
Los pasos para deshabilitar la rotación de pantalla se describen a continuación:

- **Paso 1** : Abre la terminal y navega a la ruta para localizar y abrir el **raspi-blacklist.conf**.

```
/etc/modprobe.d/raspi-blacklist.conf 
```

- **Paso 2** : Añade la siguiente línea de código al **raspi-blacklist.conf**.

```
blacklist lis331dlh_i2c
```

- **Paso 3** : Reinicia el reTerminal

```sh
sudo reboot
```

¡Siguiendo estos pasos obtendrás una pantalla estática en modo horizontal!