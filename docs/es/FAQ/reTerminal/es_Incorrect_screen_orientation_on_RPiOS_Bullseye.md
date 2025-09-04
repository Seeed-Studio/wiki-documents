---
description: reTerminal-FAQ
title: La orientación de la pantalla es incorrecta después de instalar Raspberry Pi OS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Incorrect_screen_orientation_on_RPiOS_Bullseye
last_update:
  date: 11/24/2023
  author: Seraphina
---

<!-- Q11: La orientación de la pantalla es incorrecta después de instalar Raspberry Pi OS Bullseye -->
### Raspberry Pi OS Bullseye

Si notas una orientación de pantalla errónea después de instalar **Raspberry Pi OS Bullseye**, haz lo siguiente:

- **Paso 1.** Después de flashear **Raspberry Pi OS Bullseye** al eMMC de reTerminal, sigue [esta guía](https://wiki.seeedstudio.com/es/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os) para instalar los controladores necesarios

- **Paso 2.** Crea un nuevo archivo llamado **monitors.xml** bajo el directorio **.config**

```sh
sudo vi ~/.config/monitors.xml
```

- **Paso 3.** Copia el siguiente contenido en el archivo anterior para establecer explícitamente la pantalla LCD (DSI-1) y guarda el archivo escribiendo **:wq** después de presionar **ESC**

```sh
<monitors version="2">
  <configuration>
    <logicalmonitor>
      <x>0</x>
      <y>0</y>
      <primary>yes</primary>
      <monitor>
        <monitorspec>
          <connector>DSI-1</connector>
          <vendor>unknown</vendor>
          <product>unknown</product>
          <serial>unknown</serial>
        </monitorspec>
        <mode>
          <width>720</width>
          <height>1280</height>
          <rate>60.000</rate>
        </mode>
      </monitor>
      <transform>
        <rotation>right</rotation>
      </transform>
    </logicalmonitor>
  </configuration>
</monitors>
```

- **Paso 4.** Abre **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **Paso 5.** Añade lo siguiente al archivo

```sh
dtoverlay=reTerminal,tp_rotate=1
```

- **Paso 6.** Reinicia reTerminal

```sh
sudo reboot
```

¡Ahora la pantalla se mostrará en la orientación correcta en Raspberry Pi OS Bullseye!

### Raspberry Pi OS Bookworm

Si notas una orientación de pantalla errónea después de instalar **Raspberry Pi OS Bookworm**, haz lo siguiente:

- **Paso 1.** Después de flashear **Raspberry Pi OS Bookworm** al eMMC de reTerminal, sigue [esta guía](https://wiki.seeedstudio.com/es/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os) para instalar los controladores necesarios


Si configuraste un usuario diferente a root, y la imagen de Bookworm del 24 de julio, encontré que tuve que hacer:
```sh
sudo chown $USER ~/.config
sudo chgrp $USER ~/.config
sudo chmod u+rwx ~/.config
```

- **Paso 2.** Abre .config/wayfire.ini

```sh
sudo vi ~/.config/wayfire.ini
```

- **Paso 3.** Copia el siguiente contenido en el archivo anterior para establecer explícitamente la pantalla LCD (DSI-1) y guarda el archivo escribiendo **:wq** después de presionar **ESC**

```sh
[output:DSI-1]
mode = 720x1280@60
transform = 270
```


- **Paso 4.** Abre **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **Paso 5.** Añade lo siguiente al archivo

```sh
dtoverlay=reTerminal
```

- **Paso 6.** Reinicia reTerminal

```sh
sudo reboot
```

¡Ahora la pantalla se mostrará en la orientación correcta en Raspberry Pi OS Bookworm!