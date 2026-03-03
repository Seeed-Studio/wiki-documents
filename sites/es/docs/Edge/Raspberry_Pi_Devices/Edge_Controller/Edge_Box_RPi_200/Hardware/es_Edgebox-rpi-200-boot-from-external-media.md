---
description: EdgeBox RPi 200 arranque desde medios externos
title: EdgeBox RPi 200 arranque desde medios externos
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/EdgeBox-RPi-200-boot-from-external-media
last_update:
  date: 6/14/2023
  author: Peter Pan
---


## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

Las series EdgeBox-RPi-200 son controladores de computación de borde industrial todo-en-uno basados en Raspberry Pi, que combinan múltiples propósitos industriales. Diseñados como hardware industrial robusto y de alta escalabilidad, montados con recursos de E/S abundantes y respaldados por el gran ecosistema de software industrial de Raspberry Pi, es una opción ideal para automatización inteligente y soluciones de Internet Industrial de las Cosas (IIoT).

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

:::tipAntes de Proceder:
Dado que hemos actualizado la EEPROM del Raspberry Pi Compute Module 4 desde el lote lanzado después del 30/03/2023, el orden de arranque ha cambiado a `NVME > USB-MSD > BCM-USB-MSD > SD CARD/eMMC > NETWORK > RESTART`, para más información por favor visite la página [Actualizar EEPROM para Compute Module 4](/es/Raspberry_pi_CM4_update_eeprom/).

**Si ha comprado el Edgebox-RPI-200 antes del 30/03/2023, y desea seguir la guía para actualizar EEPROM o para Flashear el Sistema Operativo en Edgebox-RPI-200, necesitará obtener una placa de desarrollo mínima que contenga la función para seleccionar el modo de arranque para Raspberry Pi CM4, donde la [Placa Portadora Dual Gigabit Ethernet NICs](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html) es perfecta para esto.**

Por lo tanto, esta Guía solo se aplica al `EdgeBox-RPi-200 lanzado después del 30/03/2023`, donde puede localizar esta información desde el `número S/N` de `la etiqueta del producto` el número resaltado en la imagen a continuación `2312` indica que `23` es el `año de producción 2023` y `12` es la `semana de producción 12` de 2023.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/label.jpg" alt="pir" width="500" height="auto" /></div>
:::

## Prerrequisitos

- 1 x Computadora host PC (Ubuntu OS)
- 1 x [EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html)
- 1x Dispositivo de Almacenamiento:
  - Opción 1: 1 x Unidad de almacenamiento USB (16Gb o superior)
  - Opción 2: 1 x **Unidad M.2 NVMe**

:::danger
Los siguientes pasos borrarán su Dispositivo de Almacenamiento, así que por favor tenga cuidado con el Dispositivo de Almacenamiento que está tratando de usar y asegúrese de que pueda ser formateado.
:::

### Configure su dispositivo de arranque

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="USB Storage" label="Almacenamiento USB">

#### Configure un Dispositivo USB de Arranque con el OS predeterminado de fábrica EdgeBox-RPI-200

:::note
Hemos respaldado la imagen del OS original y lanzado el archivo en Sourceforge, puede visitar [esta página](https://sourceforge.net/projects/edgebox-rpi-200/files/edgeboxrpi200.img/download) para recuperar el archivo de imagen.
:::

Por favor siga [los pasos aquí](https://wiki.seeedstudio.com/es/Raspberry_Pi_3_Model_B/) sobre cómo configurar un Dispositivo de OS Raspbian de Arranque, usando el [Imager oficial de Raspberry Pi](https://www.raspberrypi.com/software/)

#### Arranque desde USB

Antes de conectar la alimentación al EdgeBox-RPI-200, debe insertar el Dispositivo de Almacenamiento USB que ha preparado desde los pasos anteriores.

Luego conecte la alimentación y espere a que el dispositivo arranque.

Ahora su EdgeBox-RPI-200 debería haber arrancado desde el Almacenamiento USB.

##### Verificar el medio de arranque

Puede verificar desde qué medio ha arrancado EdgeBox-RPI-200 usando el comando `lsblk`.

Debería obtener una salida como se muestra a continuación:

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
Si ves la salida como la siguiente, lo cual probablemente ocurre en el primer arranque:

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

Necesitarás cambiar el `root=` en el `/boot/cmdline.txt` para que apunte al dispositivo de almacenamiento correcto para montar el directorio raíz como `root=/dev/sda2`, por lo que tu `/boot/cmdline.txt` debería verse así:

```sh
console=serial0,115200 console=tty1 root=/dev/sda2 rootfstype=ext4 elevator=deadline 
fsck.repair=yes rootwait quiet splash plymouth.ignore-serial-consoles
```

Luego reinicia.
:::

</TabItem>
<TabItem value="NVMe Drive" label="NVMe Drive">

#### Instalar la unidad NVMe

Por favor instala la Unidad NVMe en la Ranura M.2

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/install-nvme.jpg" alt="pir" width="500" height="auto" /></div>

#### Crear una unidad NVMe de arranque

:::note
Asegúrate de que la Unidad NVMe esté formateada y no contenga ninguna partición de arranque
:::

por favor conecta la alimentación y espera a que el dispositivo arranque.

Luego por favor usa SSH para acceder al EdgeBox-RPI-200, Aquí está [la guía](/es/reterminal-dm-flash-OS/#access-reterminal-dm-via-ssh).

Una vez que obtengas el acceso SSH, puedes seguir los pasos a continuación:

**PASO 1:** Verificar si la Unidad NVMe se carga correctamente

Por favor ingresa el comando `lsblk`. deberías ver la siguiente salida, donde `nvme0n1` es el nombre del dispositivo para la unidad NVMe.

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

**PASO 2:** Descargar el archivo de imagen EdgeBox-RPI-200

Por favor, ingresa el siguiente comando para descargar el archivo de imagen:

```sh
wget https://altushost-swe.dl.sourceforge.net/project/edgebox-rpi-200/edgeboxrpi200.img -O edgeboxrpi200.img
```

Deberías ver el progreso de descarga como:

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

**PASO 3:** Usar la herramienta `DD` para flashear la imagen del SO en la unidad NVMe

Por favor, ingresa el siguiente comando, donde `if` como archivo de entrada debe ser el nombre del archivo de imagen `edgeboxrpi200.img`, y `of` como nombre de la unidad NVMe `/dev/nvme0n1`

```sh
sudo dd if=edgeboxrpi200.img of=/dev/nvme0n1 bs=4MB status=progress oflag=sync
```

**PASO 4:** Reiniciar

Por favor, ingresa el siguiente comando:

```sh
sudo reboot
```

##### Verificar el medio de arranque

Ahora tu EdgeBox-RPI-200 debería haber arrancado desde el dispositivo de almacenamiento NVMe.

Puedes verificar desde qué medio ha arrancado el EdgeBox-RPI-200 usando el comando `lsblk`.

Donde el directorio de arranque `/boot` está montado en la partición `nvme0n1p1` y el directorio raíz `/` está montado en la partición `nvme0n1p2`.

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

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
