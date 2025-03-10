---
description: Este artículo proporciona una guía detallada sobre cómo instalar el sistema operativo JetPack en la Carrier Board A608, que admite los módulos NVIDIA Jetson Orin NX/Nano. Abarca todo, desde los requisitos previos y el ingreso al modo de recuperación forzada, hasta la descarga de la imagen del sistema y los controladores, y finalmente la instalación del sistema operativo en un SSD NVMe, una unidad flash USB o una tarjeta SD, lo que garantiza que los usuarios puedan completar con éxito la instalación y el inicio del sistema.
title: A608 Carrier Board
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608CB.webp
slug: /es/reComputer_A608_Flash_System
last_update:
  date: 12/4/2024
  author: Youjiang
---

# Flashear JetPack OS en la Carrier Board A608 (Soporte para NVIDIA Jetson Orin NX/Nano)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608CB.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-A608-Carrier-Board-for-Orin-NX-Orin-Nano-Series-p-5853.html"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue una ahora 🖱️</font></span></strong>
    </a>
</div>

En esta wiki, te mostraremos cómo flashear Jetpack a un SSD NVMe y una unidad flash USB conectada a la Carrier Board A608 que admite tanto el módulo NVIDIA Jetson Orin NX como el módulo NVIDIA Jetson Orin Nano.


## Prerequisitos

- PC con Ubuntu OS
- Carrier Board A608 con el módulo Jetson Orin NX o Jetson Orin Nano
- Cable de datos USB - C a USB - A

:::info
Recomendamos que utilices Ubuntu instalado físicamente en el dispositivo host en lugar de una máquina virtual.
Consulte la siguiente tabla para preparar la máquina host.
        
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> Versión de JetPack </td>
        <td class="dbon" colspan="3"> Versión de Ubuntu (PC Host) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
    </tr>
    <tr>
        <td >JetPack 5.x</td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::


## Entrar a modo de recuperación forzado

Antes de continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en modo de recuperación forzada.

**Paso 1.** Apaga el sistema, asegúrate de que esté apagado en lugar de entrar en modo de espera.

**Paso 2.** Utiliza el cable tipo C a USB tipo A para conectar la Carrier Board y la PC Host.

**Paso 3.** Utiliza el cable del terminal de bloqueo GH1.25MM para cortocircuitar el pin1 y el pin2 en Recuperación para que la Carrier Board entre en modo de recuperación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/hardware_connection.png" /></div>


**Paso 4.** Enciende el dispositivo.

**Paso 5.** En la PC host de Linux, abre una terminal e ingresa el comando `lsusb`. Si el contenido devuelto tiene una de las siguientes salidas según el Jetson SoM que utilices, entonces la placa está en modo de recuperación forzada.

- Para la Orin NX 16GB: **0955:7323 NVidia Corp**
- Para la Orin NX 8GB: **0955:7423 NVidia Corp**
- Para la Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para la Orin Nano 4GB: **0955:7623 NVidia Corp**

La siguiente imagen es de la Orin NX 8GB

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/lsusb.png" /></div>

**Paso 6.** Remueve el cable que conectaste en corto circuito

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1" label="JP5.1.1">


Aquí usaremos NVIDIA L4T 35.3.1 para instalar Jetpack 5.1.1 en la Carrier Board A608 con el módulo Jetson Orin NX.

**Paso 1.** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3531) los controladores NVIDIA en la PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/nvidia_driver.png" /></div>

**Paso 2.** [Descarga](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZ5nv2iWBQlIvPq7_aTQiucBp_HUwDmFNgkBMR04SI_teg?e=wseTuy) los controladores periféricos y coloca todos los controladores en la misma carpeta.


Ahora verás tres archivos comprimidos en la misma carpeta:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/drivers.png" /></div>


**Paso 3.** Prapara la imagén del sistema.

Abre una terminal en la PC host y ejecuta el siguiente comando:

```bash
cd <path to drivers>
sudo apt install unzip 
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
unzip 608_jp511.zip
cp -r ./608_jp511/Linux_for_Tegra/* ./Linux_for_Tegra/

```

**Paso 4.** Flashea el sistema en la Carrier Board A608.

- Flashea a la NVMe
  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```
- Flashea a una USB
  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```
- Flash a una SD
  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device mmcblk1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

Verás el siguiente resultado si el proceso de actualización concluyo exitosamente.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/flash.png" /></div>

Después de flashear, enciende el dispositivo Jetson nuevamente e inicia sesión en el sistema.
</TabItem>
<TabItem value="JP5.1.2" label="JP5.1.2">

Aquí usaremos NVIDIA L4T 35.4.1 para instalar Jetpack 5.1.2 en la Carrier Board A608 con el módulo Jetson Orin NX.

**Paso 1.** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3541) los controladores NVIDIA en la PC host. Los controladores necesarios se muestran a continuación:
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**Paso 2.** [Descarga](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZcvwwGTgLBBq_M_pAa2tmEB-pZmFQraF9v9JcdiqcRbLA?e=Px98MO) los controladores periféricos y coloca todos los controladores en la misma carpeta.


Ahora verás tres archivos comprimidos en la misma carpeta:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P2.png" /></div>


**Paso 3.** Prepara la imágen del sistem.

Abre una terminal en la PC host y ejecuta el siguiente comando:

```bash
cd <path to drivers>
sudo apt install unzip 
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
unzip a608_jp512.zip
cp -r ./608_jp512/Linux_for_Tegra/* ./Linux_for_Tegra/
```

**Paso 4.** Flashea el sistema en la Carrier Board A608.

- Flashea la NVMe
  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```
- Flashea una USB
  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```
- Flashea una SD
  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device mmcblk1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

Verás el siguiente resultado si el proceso de actualización concluyó exitosamente.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

Después de flashear, enciende el dispositivo Jetson nuevamente e inicia sesión en el sistema.

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

Aquí usaremos NVIDIA L4T 36.3 para instalar Jetpack 6.0 en la Carrier Board A608 con el módulo Jetson Orin NX.

**Paso 1.** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r363) los controladores NVIDIA en la PC host. Los controladores necesarios se muestran a continuación:
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**Paso 2.** [Descarga](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZdUUKln2yBKhPS8yegaLzMBWZm2MtIaFnHbFYkwazArzA?e=blzKtI) los controladores periféricos y coloca todos los controladores en la misma carpeta.

Ahora verás tres archivos comprimidos en la misma carpeta:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/6.0.png" /></div>


**Paso 3.** Prepara la imágen del sistema.

Abre una terminal en la PC host y ejecuta el siguiente comando:

```sh
cd <path to drivers>
sudo apt install unzip 
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
unzip 608_jp60.zip
sudo cp -r ./608_jp60/Linux_for_Tegra/* ./Linux_for_Tegra/
```

**Paso 4.** Flashea el sistema a la Nvme de la Carrier Board A608.

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Verás el siguiente resultado si el proceso de actualización concluyó exitosamente.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

Después de flashear, enciende el dispositivo Jetson nuevamente e inicia sesión en el sistema.

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Aquí usaremos NVIDIA L4T 36.4 para instalar Jetpack 6.1 en la Carrier Board A608 con el módulo Jetson Orin NX.

**Paso 1.** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3640) los controladores NVIDIA en la PC host. Los controladores necesarios se muestran a continuación:
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**Paso 2.** [Descarga](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVrGntfS1wxHhrgnwGeHQmQBtQ0gvHj4udkREIDIACvFDw?e=5B07Za) los controladores periféricos y coloca todos los controladores en la misma carpeta.

Ahora verás tres archivos comprimidos en la misma carpeta:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/a608_jp6.1.png" /></div>


**Paso 3.** Prepara la imágen del sistema.

Abre una terminal en la PC host y ejecuta el siguiente comando:

```bash
cd <path to drivers>
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
cd ..
tar xf A608_Jetpack_6.1.tar.gz
sudo cp -r 608_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/
```

**Paso 4.** Flash el sistema en la Nvme de la Carrier Board A608.

```bash
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Verás el siguiente resultado si el proceso de actualización concluyó exitosamente.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

Después de flashear, enciende el dispositivo Jetson nuevamente e inicia sesión en el sistema.

</TabItem>

</Tabs>

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
