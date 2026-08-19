---
description: Este artículo proporciona una guía detallada sobre cómo flashear el sistema operativo JetPack en la placa carrier A608, que es compatible con los módulos NVIDIA Jetson Orin NX/Nano. Cubre todo, desde los requisitos previos y la entrada en modo de recuperación forzada, hasta la descarga de la imagen del sistema y los controladores, y finalmente el flasheo del sistema operativo en una SSD NVMe, una unidad flash USB o una tarjeta SD, garantizando que los usuarios puedan completar con éxito la instalación y el arranque del sistema.
title: Placa Carrier A608
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608CB.webp
slug: /reComputer_A608_Flash_System
sku: 105110001
last_update:
  date: 12/4/2024
  author: Youjiang
createdAt: '2024-01-19'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/es/reComputer_A608_Flash_System/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Flashear JetPack OS a la placa Carrier A608 (compatible con NVIDIA Jetson Orin NX/Nano)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608CB.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-A608-Carrier-Board-for-Orin-NX-Orin-Nano-Series-p-5853.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
</div>

En este wiki, te mostraremos cómo flashear JetPack en una SSD NVMe y en una unidad flash USB conectadas a la placa Carrier A608, que es compatible tanto con el módulo NVIDIA Jetson Orin NX como con el módulo NVIDIA Jetson Orin Nano.

## Requisitos previos

- PC host con Ubuntu
- Placa Carrier A608 con módulo Jetson Orin NX o Jetson Orin Nano
- Cable de transmisión de datos USB Type-C

:::info
Recomendamos que utilices dispositivos host físicos con Ubuntu en lugar de máquinas virtuales.
Consulta la siguiente tabla para preparar la máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> Versión de JetPack </td>
        <td class="dbon" colspan="3"> Versión de Ubuntu (ordenador host) </td>
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

## Entrar en modo de recuperación forzada

Antes de continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en modo de recuperación forzada.

**Paso 1.** Apaga la alimentación del sistema; asegúrate de que la alimentación esté apagada y no en modo de espera.

**Paso 2.** Utiliza el cable Type-C a USB Type-A para conectar la placa carrier y el host.

**Paso 3.** Utiliza el cable de terminal de bloqueo GH1.25MM para hacer un cortocircuito entre el pin1 y el pin2 en Recovery para que entre en modo de recuperación.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/hardware_connection.png" /></div>

**Paso 4.** Enciende el dispositivo.

**Paso 5.** En el PC host con Linux, abre una ventana de Terminal e introduce el comando `lsusb`. Si el contenido devuelto incluye una de las siguientes salidas según el Jetson SoM que utilices, entonces la placa está en modo de recuperación forzada.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

La siguiente imagen es para Orin NX 8GB

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/lsusb.png" /></div>

**Paso 6.** Retira el cable de cortocircuito

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1" label="JP5.1.1">

Aquí utilizaremos NVIDIA L4T 35.3.1 para instalar JetPack 5.1.1 en la placa Carrier A608 con el módulo Jetson Orin NX.

**Paso 1.** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3531) los controladores de NVIDIA en el PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/nvidia_driver.png" /></div>

**Paso 2.** [Descarga](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZ5nv2iWBQlIvPq7_aTQiucBp_HUwDmFNgkBMR04SI_teg?e=wseTuy) los controladores periféricos y coloca todos los controladores en la misma carpeta.

Ahora verás tres archivos comprimidos en la misma carpeta:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/drivers.png" /></div>

**Paso 3.** Preparar la imagen del sistema.

Abre una ventana de terminal en el PC host y ejecuta el siguiente comando：

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

**Paso 4.** Flashear el sistema en la A608.

- Flashear a NVMe

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- Flashear a USB

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- Flashear a SD

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device mmcblk1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/flash.png" /></div>

Después de flashear, vuelve a encender el dispositivo Jetson e inicia sesión en el sistema.
</TabItem>
<TabItem value="JP5.1.2" label="JP5.1.2">

Aquí utilizaremos NVIDIA L4T 35.4.1 para instalar JetPack 5.1.2 en la placa Carrier A608 con el módulo Jetson Orin NX.

**Paso 1.** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3541) los controladores de NVIDIA en el PC host. Los controladores necesarios se muestran a continuación:
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**Paso 2.** [Descarga](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZcvwwGTgLBBq_M_pAa2tmEB-pZmFQraF9v9JcdiqcRbLA?e=Px98MO) los controladores periféricos y coloca todos los controladores en la misma carpeta.

Ahora verás tres archivos comprimidos en la misma carpeta:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P2.png" /></div>

**Paso 3.** Preparar la imagen del sistema.

Abre una ventana de terminal en el PC host y ejecuta el siguiente comando：

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

**Paso 4.** Flashear el sistema en la A608.

- Flashear a NVMe

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- Flashear a USB

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

- Flashear a SD

  ```bash
  cd Linux_for_Tegra
  sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device mmcblk1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
  ```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

Después de flashear, vuelve a encender el dispositivo Jetson e inicia sesión en el sistema.

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

Aquí utilizaremos NVIDIA L4T 36.3 para instalar JetPack 6.0 en la placa Carrier A608 con el módulo Jetson Orin NX.

**Paso 1.** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r363) los controladores de NVIDIA en el PC host. Los controladores necesarios se muestran a continuación:
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**Paso 2.** [Descarga](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZdUUKln2yBKhPS8yegaLzMBWZm2MtIaFnHbFYkwazArzA?e=blzKtI) los controladores periféricos y coloca todos los controladores en la misma carpeta.

Ahora verás tres archivos comprimidos en la misma carpeta:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/6.0.png" /></div>

**Paso 3.** Preparar la imagen del sistema.

Abre una ventana de terminal en el PC host y ejecuta el siguiente comando：

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

**Paso 4.** Flashear el sistema en la NVMe de la A608.

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

Después de flashear, vuelve a encender el dispositivo Jetson e inicia sesión en el sistema.

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Aquí usaremos NVIDIA L4T 36.4 para instalar Jetpack 6.1 en la placa portadora A608 con el módulo Jetson Orin NX.

**Paso 1.** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3640) los controladores de NVIDIA en el PC host. Los controladores necesarios se muestran a continuación:
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P1.png" /></div>

**Paso 2.** [Descarga](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVrGntfS1wxHhrgnwGeHQmQBtQ0gvHj4udkREIDIACvFDw?e=5B07Za) los controladores periféricos y coloca todos los controladores en la misma carpeta.

Ahora verás tres archivos comprimidos en la misma carpeta:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/a608_jp6.1.png" /></div>

**Paso 3.** Prepara la imagen del sistema.

Abre una ventana de terminal en el PC host y ejecuta el siguiente comando：

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

**Paso 4.** Flashea el sistema en la unidad NVMe de la A608.

```bash
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

Después de flashear, enciende de nuevo el dispositivo Jetson e inicia sesión en el sistema.

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

Aquí usaremos NVIDIA L4T 36.4.3 para instalar Jetpack 6.2 en la placa portadora A608 con el módulo Jetson Orin NX.

**Paso 1.** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3643) los controladores de NVIDIA en el PC host. Los controladores necesarios se muestran a continuación:
<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/jp6.2.png" /></div>

**Paso 2.** [Descarga](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EYGdRLSx_oxDjagkG2J6GTYBB9TDLvTKagnRfQcbz6gplA?e=sswKna) los controladores periféricos y coloca todos los controladores en la misma carpeta.

Ahora verás tres archivos comprimidos en la misma carpeta:

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/jp62_files.png" /></div>

**Paso 3.** Prepara la imagen del sistema.

Abre una ventana de terminal en el PC host y ejecuta el siguiente comando：

```bash
cd <path to drivers>
tar xf Jetson_Linux_R36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
sudo tar zxpf 608_jp62.tar.gz
sudo cp -r 608_jp62/Linux_for_Tegra/* Linux_for_Tegra/ 
cd Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

**Paso 4.** Flashea el sistema en la unidad NVMe de la A608.

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/5.1.2_P3.png" /></div>

Después de flashear, enciende de nuevo el dispositivo Jetson e inicia sesión en el sistema.

</TabItem>

<TabItem value="JP7.2" label="JP7.2">

Aquí usaremos NVIDIA L4T R39.2.0 para instalar Jetpack 7.2 en la placa portadora A608 con el módulo Jetson Orin NX.

**Paso 1.** [Descarga](https://developer.nvidia.com/downloads/embedded/L4T/r39_Release_v2.0/release/Jetson_Linux_R39.2.0_aarch64.tbz2) los controladores de NVIDIA y el [sistema de archivos raíz](https://developer.nvidia.com/downloads/embedded/L4T/r39_Release_v2.0/release/Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2) en el PC host:

- `Jetson_Linux_R39.2.0_aarch64.tbz2`
- `Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2`

**Paso 2.** [Descarga](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBsOH7dA-WtQafi5M86XzZGATQW5JJObMxPNJvT_n_ESj0?e=AfZVk4) los controladores periféricos de A608 Jetpack 7.2 y coloca todos los controladores en la misma carpeta.

**Paso 3.** Prepara la imagen del sistema.

Abre una ventana de terminal en el PC host y ejecuta el siguiente comando：

```bash
cd <path to drivers>
tar xf Jetson_Linux_R39.2.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
unzip 608_jp72.zip
sudo tar xpf 608_jp72.tbz2
sudo cp -r 608_jp72/Linux_for_Tegra/* Linux_for_Tegra/
cd Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

**Paso 4.** Flashea el sistema en el SSD NVMe de la A608.

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --erase-all jetson-orin-nano-devkit-super internal
```

Después de flashear, el dispositivo se iniciará automáticamente.

**Paso 5.** Copia de seguridad y restauración del sistema (primero entra en Force Recovery Mode).

- Realiza una copia de seguridad de la imagen del sistema:

  ```bash
  sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit-super
  ```

- Restaura el sistema desde la imagen de copia de seguridad:

  ```bash
  sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit-super
  ```

</TabItem>
</Tabs>

## Recursos

- [Archivos CAD de A608](https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/A608_V1.2.zip)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

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
