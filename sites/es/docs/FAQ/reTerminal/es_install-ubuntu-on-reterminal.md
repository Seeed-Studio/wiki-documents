---
description: reTerminal-FAQ
title: Cómo instalar Ubuntu en reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/install-ubuntu-on-reterminal
last_update:
  date: 6/21/2023
  author: Seraphina
---

<!-- Q10: ¿Cómo puedo instalar Ubuntu en reTerminal? -->

Si quieres instalar Ubuntu en reTerminal, sigue los pasos a continuación paso a paso:

- **Paso 1.** Flashea [Ubuntu Server 21.10](https://ubuntu.com/download/raspberry-pi/thank-you?version=21.10&architecture=server-arm64+raspi) al almacenamiento eMMC de reTerminal

:::note
Consulta las instrucciones de flasheo [aquí](https://wiki.seeedstudio.com/es/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc). Después de abrir **Raspberry Pi Imager**, navega a `CHOOSE OS > Use custom` y selecciona la imagen anterior para flashear
:::

- **Paso 2.** Conéctate por SSH a reTerminal y ejecuta los siguientes comandos uno tras otro. Asegúrate de usar **ubuntu** como nombre de usuario y **ubuntu** como contraseña

```sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script1.sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script2.1.sh
chmod +x script1.sh script2.1.sh
sudo ./script1.sh
sudo reboot
sudo ./script2.1.sh
sudo reboot
```

- **Paso 3.** Ahora, reTerminal arrancará en Ubuntu Desktop, pero en orientación incorrecta

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait.jpg" alt="pir" width={1000} height="auto" /></p>

- **Paso 4.** Haz clic en el **icono de encendido** en la esquina superior derecha y haz clic en **Settings**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-settings-2.jpg" alt="pir" width={350} height="auto" /></p>

- **Paso 5.** Selecciona **Displays** y elige **Portrait Left** bajo **Orientation** y haz clic en **Apply**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait-left-2.jpg" alt="pir" width={400} height="auto" /></p>

¡Finalmente verás el escritorio de Ubuntu en la orientación correcta!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-landscape.jpg" alt="pir" width={1000} height="auto" /></p>