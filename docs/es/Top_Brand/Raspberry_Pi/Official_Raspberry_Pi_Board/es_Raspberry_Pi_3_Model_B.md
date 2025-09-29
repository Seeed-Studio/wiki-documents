---
description: Raspberry Pi 3 Model B
title: Raspberry Pi 3 Model B
keywords:
- Raspberry_Pi
- Official_Raspberry_Pi_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Raspberry_Pi_3_Model_B
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Raspberry Pi getting started
category: MakerPro
bzurl: https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html
oldwikiname:  Raspberry Pi 3 Model B
prodimagename:  rpi4.png
surveyurl: https://www.research.net/r/Raspberry_Pi_3_Model_B
sku:     110061131
--- -->

**Raspberry Pi®** es un **SBC**(Computadora de Placa Única) del tamaño de una tarjeta de crédito basado en **ARM** creado por la [Raspberry Pi Foundation](http://www.raspberrypi.org). Raspberry Pi ejecuta el sistema operativo **GNU/Linux** basado en Debian [Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspberry-pi-os/) y existen versiones de muchos otros sistemas operativos para este SBC.

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_3_Model_B/img/rpi4.png)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)

## PRIMEROS PASOS

### Requisitos

- [Raspberry Pi 4](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)/[3B+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B--p-3037.html)/[3B](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)/[3](https://www.seeedstudio.com/Raspberry-Pi-Compute-Module-3-p-2848.html)/[3A+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-p-3216.html)/[2B](https://www.seeedstudio.com/Raspberry-Pi-2-Model-B-w-ARMv7-Quad-Core-1GB-RAM-p-2289.html)/[B](https://www.seeedstudio.com/Raspberry-Pi-Model-B-p-1634.html)/[Zero](https://www.seeedstudio.com/Raspberry-Pi-Zero-p-4254.html)
- Red Wi-Fi/Punto de acceso móvil
- Tarjeta SD de 4GB (o mayor) y lector de SD
- PC o Mac
- Adaptador USB de 5V 3A para alimentación (opcional)  
- Un cable de datos usb-c (usamos Pi 4 como ejemplo)

:::note
Por favor inserte el cable USB con cuidado, de lo contrario la interfaz puede dañarse. Por favor use el cable USB con 4 cables internos. El cable USB con 2 cables internos no puede transferir datos. Si no está seguro sobre su cable, puede comprarlo [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html).
:::
  
### Arranque desde tarjeta SD

#### Cómo grabar un Raspberry Pi OS

**1. Descarga de Raspberry Pi OS Stretch**

Descargue [Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspberry-pi-os/) del sitio web oficial de Raspberry Pi y seleccione la versión "with desktop and recommended software".

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_3_Model_B/img/rspberrypios.png)

**2. Etcher**

Haga clic para descargar <a href="https://etcher.io/">Etcher</a> aquí, y grabe el archivo ```*.img.xz``` directamente a su tarjeta SD con Etcher. O descomprima el archivo ```*.img.xz``` a un archivo ```*.img```, luego grábelo a la tarjeta SD con otras herramientas de escritura de imágenes.
<br />

- Haga clic en el icono Plus para agregar la imagen que acaba de descargar, el software seleccionará automáticamente la tarjeta SD que conecte. Luego haga clic en Flash! para comenzar la grabación. Tomará aproximadamente 10 minutos terminar.
- Salga del grabador y expulse la tarjeta SD.
- Después de escribir la imagen en la tarjeta SD, inserte la tarjeta SD en la raspberry PI. Use el adaptador USB y la interfaz usb-c para alimentarla. No retire la tarjeta SD durante el proceso de escritura. Raspberry PI arrancará desde la tarjeta SD.

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_3_Model_B/img/etcher.png)

#### Configuración Básica

**Conexión inalámbrica y SSH**

**1.** Cree un archivo llamado "wpa_supplicant.conf" en la carpeta /boot, y copie el siguiente código.

```txt
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
 
network={
ssid="WiFi-name"
psk="WiFi-password"
key_mgmt=WPA-PSK
priority=1
}
```

:::note
El nombre y contraseña del Wi-Fi deben ser los mismos que los de tu Wi-Fi local al que está conectada tu PC (asegúrate de que tu PC y Raspberry Pi estén en la misma LAN).
:::

**2.** Crea un archivo en blanco llamado "ssh" en la carpeta /boot.

**3.** Inserta la tarjeta SD con Raspberry Pi OS en la Raspberry Pi.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/sd_card.jpg)

**4.** Conecta la Raspberry Pi a la fuente de alimentación y enciéndela.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/power.jpg)

**5.** Abre putty para conectar la PC a la Raspberry Pi.

Descargar putty： [https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png)

**Raspberry Pi**
Nombre de usuario predeterminado : pi
Contraseña predeterminada : raspberry

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss4.jpg)

**Configuración VNC**

**1.** Abre raspi-config escribiendo el siguiente comando en la terminal.

```bash
sudo raspi-config
```

Navega hacia abajo hasta 5 Opciones de interfaz y presiona "enter" para seleccionar.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss5.png)

Navega hacia abajo hasta P3 VNC y presiona "enter" para seleccionar.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss6.png)

Selecciona "Yes" para habilitarlo.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss7.png)

Selecciona "Ok".

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss8.png)

**2.** Instalar VNC Viewer

Descargar [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss9.png)

Abre VNC Viewer e ingresa la dirección IP de Raspberry Pi. Puedes encontrar la dirección IP escribiendo el comando `ifconfig` en la terminal de Raspberry Pi (o puedes ingresar raspberrypi.local).

:::note

Si usas raspberrypi.local para iniciar sesión en tu Pi, debes asegurarte de que solo haya una Raspberry Pi en uso en tu LAN.
:::

Ingresa el nombre de usuario y contraseña predeterminados, ¡y ahora puedes acceder al escritorio remoto de Raspberry Pi!

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss10.png)

¡Éxito!

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss11.PNG)

## Habilitar UART

- habilitar miniuart-bt

## Usar con GrovePi

Por favor consulta [Grove Base Hat para Raspberry Pi wiki](https://wiki.seeedstudio.com/es/Grove_Base_Hat_for_Raspberry_Pi/).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
