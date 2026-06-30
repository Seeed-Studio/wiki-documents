---
description: Este tutorial introduce principalmente la configuración de la conexión de hardware del M.2 Hat y del dual Hat y cómo hacer que la Raspberry Pi arranque desde el SSD.
title: Raspberry Pi 5 usa PCIe hat/dual hat
keywords:
  - M.2 hat
  - dual hat
  - Raspberry Pi
image: https://files.seeedstudio.com/wiki/M.2_Hat/new/m.2-dual-hat-for-raspberry-pi-5.webp
slug: /raspberry_pi_5_uses_pcie_hat_dual_hat
sku: 103110064,103110063,E2024082901,103110065
last_update:
  date: 12/24/2024
  author: Jiahaoli
createdAt: '2024-08-28'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/raspberry_pi_5_uses_pcie_hat_dual_hat/
---

## Introducción

Este tutorial presenta principalmente la configuración de la conexión de hardware del M.2 Hat/Dual Hat y cómo arrancar la Raspberry Pi desde un SSD. También cubre dos métodos de instalación: con y sin carcasa, y prueba las velocidades de lectura/escritura del SSD en diferentes condiciones.

## Comenzando

### Preparación de hardware

<div class="table-center">
 <table align="center">
 <tr>
  <th>Raspberry Pi5 8GB</th>
  <th>M.2 Hat/dual Hat</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-103110064-pcie-to-m.2-dual-hat-for-raspberry-pi-5-fonmt.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/PCIe-to-dual-M-2-hat-for-Raspberry-Pi-5-p-5973.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Para la instalación sin carcasa, debes preparar los siguientes materiales:

- ① Raspberry Pi 5
- ② M.2 Hat/dual Hat
- ③ Dispositivos PCIe SSD/AI Kit
- ④ Tornillo de fijación de dispositivos PCIe
- ⑤ Cable de conexión PCIe entre M.2 Hat y Raspberry Pi
- ⑥ Casquillo de tornillo, tornillos largos y tuercas

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/1.jpg" alt="pir" width="700" height="auto" /></div>

Para la instalación con carcasa, debes preparar los siguientes materiales:

- ① Raspberry Pi 5
- ② M.2 Hat/dual Hat
- ③ Dispositivos PCIe SSD/AI Kit
- ④ Tornillo de fijación de dispositivos PCIe
- ⑤ Cable de conexión PCIe entre M.2 Hat y Raspberry Pi
- ⑥ Tornillos largos y tuercas
- ⑦ [carcasa exterior](https://files.seeedstudio.com/wiki/M.2_Hat/Seeed%20M.2%20hat%20with%20Pi5%20case_sam-20240827.stp)

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/1_2.jpg" alt="pir" width="700" height="auto" /></div>

### Instalación

> **Nota:** Esta es una nota. `Wipe pogo pin and GPIO pad with alcohol cotton, and then connect it before you using M.2 dual Hat on raspberrypi`

<!-- <div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/hat.jpg" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/pi5_GPIO_Pad.png" alt="pir" width="700" height="auto" /></div> -->

![](https://files.seeedstudio.com/wiki/M.2_Hat/new/hat_installation.gif)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Instalación sin carcasa">
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/2.jpg" alt="pir" width="700" height="auto" /></div>

**Paso 1**: Inserta el cable de conexión PCIe en el M.2 Hat, prestando atención a la dirección de inserción del cable. Inserta la interfaz PCIe del M.2 Hat con el lado metálico hacia abajo, como se muestra en la figura después de la inserción:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/3.jpg" alt="pir" width="700" height="auto" /></div>

**Paso 2**: Inserta el cable de conexión PCIe en la Raspberry Pi 5.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/4.jpg" alt="pir" width="700" height="auto" /></div>

Presta atención a la dirección de inserción del cable. Inserta la interfaz PCIe de la Raspberry Pi 5 con el lado metálico hacia arriba, como se muestra en la figura después de la inserción:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/5.jpg" alt="pir" width="700" height="auto" /></div>

**Paso 3**: Superpone la Raspberry Pi 5 con el M.2 Hat e inserta el casquillo del tornillo en el tornillo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/6.jpg" alt="pir" width="700" height="auto" /></div>

Luego inserta los tornillos en los orificios de la Raspberry Pi 5 y del M.2 Hat, como se muestra en la figura:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/7.jpg" alt="pir" width="700" height="auto" /></div>

**Paso 4**: Atornilla el espárrago en el tornillo y fija el tornillo a la placa de circuito, como se muestra en la figura:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/8.jpg" alt="pir" width="700" height="auto" /></div>

**Paso 5**: Inserta el SSD y el AI Kit en el M.2 dual Hat

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/10.jpg" alt="pir" width="700" height="auto" /></div>

Luego inserta los tornillos de fijación para asegurar el SSD y el AI Kit en el M.2 Hat, como se muestra en la figura:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/11.jpg" alt="pir" width="700" height="auto" /></div>
</TabItem>

<TabItem value="Method 2" label="Instalación con carcasa">
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/2.jpg" alt="pir" width="700" height="auto" /></div>

**Paso 1**: Inserta el cable de conexión PCIe en el M.2 Hat. Presta atención a la dirección de inserción del cable. Conecta el lado metálico hacia abajo en la interfaz PCIe del M.2 Hat. Después de la inserción, como se muestra en la figura:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/3.jpg" alt="pir" width="700" height="auto" /></div>

**Paso 2**: Conecta el cable de conexión PCIe a la Raspberry Pi 5.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/4.jpg" alt="pir" width="700" height="auto" /></div>

Presta atención a la dirección de inserción del cable. Conéctalo a la interfaz PCIe de la Raspberry Pi 5 con el lado metálico hacia arriba. Después de la inserción, queda como se muestra en la figura:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/5.jpg" alt="pir" width="700" height="auto" /></div>

**Paso 3**: Superpone la Raspberry Pi 5 y el M.2 Hat, y prepara la carcasa, los tornillos, las tuercas y los dispositivos PCIe

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/12.jpg" alt="pir" width="700" height="auto" /></div>

Coloca el M.2 Hat y la Raspberry Pi superpuestos dentro de la carcasa, con la Raspberry Pi en la parte superior, como se muestra en la imagen:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/13.jpg" alt="pir" width="700" height="auto" /></div>

**Paso 4**: Atornilla los tornillos en los orificios de tornillo reservados en la carcasa. Este orificio conectará el M.2 Hat y la Raspberry Pi, fijando así el M.2 Hat, la Raspberry Pi 5 y la carcasa.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/14.jpg" alt="pir" width="700" height="auto" /></div>

**Paso 5**: Atornilla los espárragos en los tornillos para fijar el M.2 Hat, la Raspberry Pi 5 y la carcasa

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/15.jpg" alt="pir" width="700" height="auto" /></div>

**Paso 6**: Inserta el SSD y el AI Kit en el M.2 Hat, como se muestra en la figura:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/16.jpg" alt="pir" width="700" height="auto" /></div>

**Paso 7**: Atornilla los tornillos de fijación para fijar el SSD en el M.2 Hat

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/17.jpg" alt="pir" width="700" height="auto" /></div>

**Paso 8**: Instala la carcasa restante

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/18.jpg" alt="pir" width="700" height="auto" /></div>
</TabItem>
</Tabs>

### Usa la herramienta SD Card Copier para grabar el SO en el NVME SSD en Raspberry Pi OS

*Este método funciona si tienes una tarjeta SD y has arrancado el dispositivo correctamente. Asegúrate de que tu sistema sea la última versión del sistema Raspberry Pi (Bookworm o posterior) y que el firmware de tu RPi 5 esté actualizado a 2023-12-06 (6 de diciembre) o más reciente, de lo contrario puede que no reconozca las configuraciones relacionadas con NVME.*

**Paso 1**: Asegúrate de que tu sistema Raspberry Pi esté actualizado (Bookworm o posterior), introduce el siguiente comando para actualizar el firmware de la RPi 5:

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

Desplázate hacia abajo hasta `Advanced Options` y pulsa Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

Desplázate hacia abajo hasta `Bootloader Version` y pulsa Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

Y finalmente elige `Latest`, y pulsa Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

Selecciona `No` aquí: quieres el bootloader `latest`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

Y sal de la herramienta seleccionando `Finish`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

Si se te pide reiniciar, selecciona `Yes`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

**Paso 2**: Haz clic en **Applications** =>**Accessories** =>**SD Card Copier** en la pantalla principal, ejecuta el programa **SD Card Copier** y copia el sistema operativo al SSD NVME como se muestra en la figura siguiente.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### Configurar la Raspberry Pi para arrancar desde el SSD NVMe

Si tienes fácil acceso a la ranura de tu tarjeta SD, puedes apagar tu Pi, sacar la tarjeta SD y (si todo funciona como se espera) debería arrancar automáticamente desde tu unidad NVMe la próxima vez que la enciendas. Sin embargo, si quieres dejar la tarjeta SD donde está y aun así arrancar desde NVMe, tendrás que cambiar el orden de arranque.

**Paso 1**: Introduce el siguiente comando:

```shell
  sudo raspi-config
```

Desplázate hacia abajo hasta `Advanced Options` y pulsa Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="700" height="auto" /></div>

**Paso 2**: Desplázate hacia abajo hasta `Boot Order` y pulsa Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="700" height="auto" /></div>

**Paso 3**: Elige `NVMe/USB Boot` y pulsa Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="700" height="auto" /></div>

Se confirmará la configuración. Pulsa Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="700" height="auto" /></div>

**Paso 4**: Vuelve a la primera pantalla seleccionando `Back` o pulsando la tecla Esc. Luego navega hasta Finish usando la tecla de cursor derecha.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

Se te preguntará si quieres reiniciar ahora. Haz clic en `Yes`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>

### Modificar PCIe

<Tabs>
<TabItem value="Method 1" label="M.2 Hat">
M.2 Hat es compatible con los modos PCIe Gen 2 y PCIe Gen 3

**Paso 1**: Introduce el siguiente comando para abrir el archivo `/boot/firmware/config.txt`

```shell
sudo nano /boot/firmware/config.txt
```

**Paso 2**: Añade lo siguiente a la sección [all] al final del archivo `/boot/firmware/config.txt`:

```shell
dtparam=pciex1_gen=3
```

Guarda el archivo y reinicia de nuevo, ¡puede que veas un aumento de velocidad!
</TabItem>

<TabItem value="Method 2" label="M.2 dual Hat">

PCIe2.0 M.2 dual Hat es compatible con PCIe Gen 2, y PCIe3.0 M.2 dual Hat es compatible con PCIe Gen 2 y PCIe 3.

**Paso 1**: Introduce el siguiente comando para abrir el archivo `/boot/firmware/config.txt`

```shell
sudo nano /boot/firmware/config.txt
```

**Paso 2**: Añade lo siguiente a la sección [all] al final del archivo `/boot/firmware/config.txt`:

```shell
dtparam=pciex1
dtparam=pciex1_gen=3
dtoverlay=pciex1-compat-pi5,no-mip,mmio-hi 
```

</TabItem>
</Tabs>

### Corregir el controlador de M.2 Dual Hat

Después de grabar una nueva imagen del sistema operativo, instala la superposición `pcie-fix.dtbo` para corregir el controlador de M.2 Dual Hat.

Entra en el sistema operativo grabado y ejecuta los siguientes comandos en la terminal:

```shell
cd /tmp
wget https://files.seeedstudio.com/wiki/reComputer-R2000/pcie-fix.dtbo
sudo cp pcie-fix.dtbo /boot/firmware/overlays/
echo "dtoverlay=pcie-fix" | sudo tee -a /boot/firmware/config.txt
sudo reboot
```

### Prueba de velocidad

<Tabs>
<TabItem value="Method 1" label="M.2 hat">

Esta prueba muestra que la Raspberry Pi arranca desde la tarjeta SD y utiliza el SSD como almacenamiento de respaldo:

```
# write speed command
sudo dd if=/dev/zero of=/mnt/nvme/testfile bs=1M count=1024 oflag=direct

# read speed command
sudo dd if=/mnt/nvme/testfile of=/dev/null bs=1M iflag=direc
```

| M.2 hat | Velocidad de lectura| Velocidad de escritura|
|:-------------|:--------------:|--------------:|
| PCIe 3.0       | 822MB/s       | 716MB/s         |
| PCIe 2.0       | 431 MB/s      | 389MB/s         |

</TabItem>

<TabItem value="Method 2" label="M.2 dual Hat">

Esta prueba muestra que la Raspberry Pi arranca desde el SSD y utiliza otro SSD como almacenamiento de respaldo:

```
# write speed command
dd if=/dev/zero of=tempfile bs=1M count=1024 oflag=direct
# read speed command
dd if=/dev/zero of=tempfile bs=1M count=1024 
```

| M.2 dual Hat | Lectura y lectura | Escritura y escritura | Lectura y escritura |
|:-------------|:--------------:|--------------:|--------------:|
| PCIe 3.0       | promedio 454MB/s      | promedio 407MB/s        |   697MB/s 663MB/s|
| PCIe 2.0       | promedio 234MB/s      | promedio 214MB/s        |      414MB/s 324MB/s|

</TabItem>

<TabItem value="Method 3" label="M.2 dual Hat with hailo8">

Esta prueba muestra que la Raspberry Pi arranca desde el SSD y el acelerador de IA Hailo8:

```
# write speed command
dd if=/dev/zero of=tempfile bs=1M count=1024 oflag=direct
# read speed command
dd if=/dev/zero of=tempfile bs=1M count=1024 
```

| M.2 dual Hat with hailo8| Lectura | Lectura y Hailo8 | Escritura |Escritura y Hailo8|
|:-------------|:--------------:|--------------:|--------------:|--------------:|
| PCIe 3.0       | 812MB/S     | 416MB/S 187FPS      |   701MB/s |  340MB/s  188FPS|
| PCIe 2.0       | 429MB/S      | 233MB/S/s 128FPS       |      372MB/S|  273MB/S 111FPS|

> **Nota:** Para probar Hailo8, consulta este [enlace](https://github.com/hailo-ai/hailo-rpi5-examples) y prepara un vídeo con 240 FPS.

</TabItem>
</Tabs>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
