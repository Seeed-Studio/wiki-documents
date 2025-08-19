---
description: Arranque del EdgeBox RPi 200 desde medios externos.
title: Arranque del EdgeBox RPi 200 desde medios externos.
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/EdgeBox-RPi-200-boot-from-external-media
last_update:
  date: 02/11/2025
  author: Erick González
---


## EdgeBox-RPI-200

<div align="center"><img width={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

La serie **EdgeBox-RPi-200** son controladores industriales de cómputo en el borde (*edge computing*) todo-en-uno basados en Raspberry Pi, diseñados para múltiples propósitos industriales. Con un hardware industrial altamente escalable y resistente, equipado con una amplia gama de interfaces de E/S y respaldado por el sólido ecosistema de software industrial de Raspberry Pi, es una opción ideal para soluciones de **automatización inteligente** e **Internet Industrial de las Cosas (IIoT)**.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> ¡Consíguelo ahora! 🖱️</font></span></strong>
    </a>
</div>

:::tip Antes de continuar:  
Desde la actualización del **EEPROM** del **Raspberry Pi Compute Module 4**, en los lotes lanzados después del **30/03/2023**, el orden de arranque ha cambiado a:  

`NVME > USB-MSD > BCM-USB-MSD > SD CARD/eMMC > NETWORK > RESTART`  

Para obtener más información, visita la página **[Actualizar EEPROM para Compute Module 4](/Raspberry_pi_CM4_update_eeprom/)**.
:::

**Si has adquirido el EdgeBox-RPI-200 antes del 30/03/2023 y deseas seguir la guía para actualizar el EEPROM o para instalar un sistema operativo en el EdgeBox-RPI-200, necesitarás una placa de desarrollo mínima que incluya la función de selección del modo de arranque para el Raspberry Pi CM4. La [Placa Portadora de NICs Duales Gigabit Ethernet](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html) es perfecta para este propósito.**

Por lo tanto, esta guía **solo aplica al `EdgeBox-RPi-200 lanzado después del 30/03/2023`**, donde puedes encontrar esta información en el `S/N number` de la `etiqueta del producto`.  
En la imagen a continuación, el número resaltado `2312` indica que `23` es el `año de producción (2023)` y `12` es la `semana de producción (semana 12 de 2023)`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/label.jpg" alt="pir" width="500" height="auto" /></div>


## Prerrequisitos

- 1 x Computadora host (Ubuntu OS)
- 1 x [EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html)
- 1x Dispositivo de almacenamiento:
  * Opción 1: 1 x Unidad de almacenamiento USB (16GB o superior) 
  * Opción 2: 1 x **Unidad M.2 NVMe**

:::danger
Los siguientes pasos eliminarán todos los datos de tu dispositivo de almacenamiento, así que ten mucho cuidado con el dispositivo que vas a utilizar y asegúrate de que se pueda formatear.
:::

### Configurar tu dispositivo de arranque 

<!-- Código -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Almacenamiento USB" label="Almacenamiento USB">

#### Configurar un dispositivo USB de arranque con el sistema operativo de fábrica del EdgeBox-RPI-200

:::note
Hemos respaldado la imagen original del sistema operativo y publicado el archivo en Sourceforge. Puedes visitar [esta página](https://sourceforge.net/projects/edgebox-rpi-200/files/edgeboxrpi200.img/download) para obtener el archivo de imagen.
:::

Por favor, sigue [estos pasos](https://wiki.seeedstudio.com/Raspberry_Pi_3_Model_B/) para configurar un dispositivo de arranque con Raspbian OS, utilizando el [Raspberry Pi Imager oficial](https://www.raspberrypi.com/software/).


#### Arranque desde USB 

Antes de encender el EdgeBox-RPI-200, debes insertar el dispositivo de almacenamiento USB que preparaste en los pasos anteriores.

Luego, conecta la alimentación y espera a que el dispositivo inicie.

Ahora, tu EdgeBox-RPI-200 debería haberse iniciado desde el almacenamiento USB.

##### Verificar el medio de arranque

Puedes verificar desde qué medio se ha iniciado el EdgeBox-RPI-200 utilizando el comando `lsblk`.

Deberías obtener una salida similar a la siguiente:

```sh
pi@raspberrypi:~ lsblk
NAME         MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda            8:0    1  7.2G  0 disk 
|-sda1         8:1    1  256M  0 part /boot
`-sda2         8:2    1    7G  0 part /
mmcblk0      179:0    0 14.6G  0 disk 
|-mmcblk0p1  179:1    0  256M  0 part 
`-mmcblk0p2  179:2    0 14.3G  0 part 
mmcblk0boot0 179:32   0    4M  1 disk 
mmcblk0boot1 179:64   0    4M  1 disk 
```

:::note
Si ves la siguiente salida, lo cual es probable en el primer arranque:

```sh
pi@raspberrypi:~ $ lsblk
NAME         MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda            8:0    1  7.2G  0 disk 
|-sda1         8:1    1  256M  0 part /boot
`-sda2         8:2    1  4.6G  0 part 
mmcblk0      179:0    0 14.6G  0 disk 
|-mmcblk0p1  179:1    0  256M  0 part 
`-mmcblk0p2  179:2    0 14.3G  0 part /
mmcblk0boot0 179:32   0    4M  1 disk 
mmcblk0boot1 179:64   0    4M  1 disk 
```

Necesitarás cambiar la opción `root=` en el archivo `/boot/cmdline.txt` para que apunte al dispositivo de almacenamiento correcto y monte el directorio raíz como `root=/dev/sda2`. Así, tu archivo `/boot/cmdline.txt` debería verse así:

```sh
console=serial0,115200 console=tty1 root=/dev/sda2 rootfstype=ext4 elevator=deadline 
fsck.repair=yes rootwait quiet splash plymouth.ignore-serial-consoles
```

Luego, reinicia el sistema.
:::
</TabItem>
<TabItem value="NVMe Drive" label="Unidad NVMe">

#### Instalar la unidad NVMe

Instala la unidad NVMe en la ranura M.2.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/install-nvme.jpg" alt="pir" width="500" height="auto" /></div>

#### Crear una unidad NVMe de arranque

:::note
Asegúrate de que la unidad NVMe esté formateada y no contenga ninguna partición de arranque.
:::

Conecta la alimentación y espera a que el dispositivo inicie.

Luego, utiliza SSH para acceder al EdgeBox-RPI-200. Aquí está [la guía](/reterminal-dm-flash-OS/#access-reterminal-dm-via-ssh).

Una vez que tengas acceso por SSH, sigue los siguientes pasos:

**PASO 1:** Verifica si la unidad NVMe se ha cargado correctamente

Ingresa el comando `lsblk`. Deberías ver una salida similar a la siguiente, donde `nvme0n1` es el nombre del dispositivo NVMe.

```sh
pi@raspberrypi:~ $ lsblk
NAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0      179:0    0  14.6G  0 disk 
|-mmcblk0p1  179:1    0   256M  0 part /boot
`-mmcblk0p2  179:2    0  14.3G  0 part /
mmcblk0boot0 179:32   0     4M  1 disk 
mmcblk0boot1 179:64   0     4M  1 disk 
nvme0n1      259:0    0 119.2G  0 disk 
|-nvme0n1p1  259:1    0   200M  0 part 
`-nvme0n1p2  259:2    0   119G  0 part 
```

**PASO 2:** Descargar la imagen del EdgeBox-RPI-200

Ingresa el siguiente comando para descargar el archivo de imagen:

```sh
wget https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img -O edgeboxrpi200.img
```

Deberías ver un progreso de descarga similar a este:

```sh
pi@raspberrypi:~/Downloads $ wget https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img -O edgeboxrpi200.img
--2023-06-27 16:34:07--  https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img
Resolving altushost-swe.dl.sourceforge.net (altushost-swe.dl.sourceforge.net)... 79.142.76.130
Connecting to altushost-swe.dl.sourceforge.net (altushost-swe.dl.sourceforge.net)|79.142.76.130|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 5230625280 (4.9G) [application/octet-stream]
Saving to: 'edgeboxrpi200.img'

edgeboxrpi200.img                     3%[=>                                                                 ] 151.13M  14.2MB/s    eta 6m 4s
```

**PASO 3:** Usar la herramienta `DD` para grabar la imagen del sistema operativo en la unidad NVMe

Ejecuta el siguiente comando, donde `if` es el archivo de entrada con la imagen del sistema (`edgeboxrpi200.img`), y `of` es la unidad NVMe (`/dev/nvme0n1`):

```sh
sudo dd if=edgeboxrpi200.img of=/dev/nvme0n1 bs=4MB status=progress oflag=sync
```

**PASO 4:** Reiniciar el sistema

Ejecuta el siguiente comando:

```sh
sudo reboot
```

##### Verificar el medio de arranque

Ahora, tu EdgeBox-RPI-200 debería haberse iniciado desde la unidad de almacenamiento NVMe.

Puedes verificar desde qué medio ha iniciado el EdgeBox-RPI-200 utilizando el comando `lsblk`.

El directorio de arranque `/boot` debe estar montado en la partición `nvme0n1p1` y el directorio raíz `/` debe estar montado en la partición `nvme0n1p2`.

```sh
pi@raspberrypi:~ $ lsblk   
NAME         MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
mmcblk0      179:0    0  14.6G  0 disk 
|-mmcblk0p1  179:1    0   256M  0 part 
`-mmcblk0p2  179:2    0  14.3G  0 part 
mmcblk0boot0 179:32   0     4M  1 disk 
mmcblk0boot1 179:64   0     4M  1 disk 
nvme0n1      259:0    0 119.2G  0 disk 
|-nvme0n1p1  259:1    0   256M  0 part /boot
`-nvme0n1p2  259:2    0   119G  0 part /
```

</TabItem>
</Tabs>


<!-- Code END -->

## Soporte Técnico y Discusión

¡Gracias por elegir nuestros productos! Estamos pendientes para proveerte de nuestra ayuda y soporte para asegurar que tu experiencia con nuestros productos sea tan buena como sea posible. Te ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
