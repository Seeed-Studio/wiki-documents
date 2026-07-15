---
description: Flashear JetPack en el kit NVIDIA® Jetson AGX Orin 32GB H01
title: Kit NVIDIA® Jetson AGX Orin 32GB H01 de 32 GB
tags:
  - NVIDIA Jetson H01
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Jetson_AGX_Orin_32GB_H01_Flash_Jetpack
sku: 114110207
last_update:
  date: 07/02/2026
  author: Lakshantha/Youjiang
createdAt: '2023-03-02'
updatedAt: '2026-07-02'
url: https://wiki.seeedstudio.com/es/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack/
---

<!-- # Flash JetPack to NVIDIA® Jetson AGX Orin 32GB H01 Kit  -->

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/6.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
</div>

:::info
Ten en cuenta que se realizaron las siguientes actualizaciones al producto el 25 de noviembre de 2024:

1. Se ha cambiado el esquema de alimentación de 5 V (el CI de alimentación se sustituyó de ONNCP3020ADR2G a TI TPS53015DGS y los componentes periféricos se ajustaron en consecuencia), lo que resuelve el problema de reinicio del dispositivo al utilizar ciertos dispositivos USB con alta corriente dinámica.
2. Se ha optimizado el diseño de la placa para agrandar la ranura del cable del ventilador y así acomodar el cableado del ventilador.
3. Para estabilizar el suministro de accesorios, el modelo del módulo WiFi se ha cambiado de 8265.NGW a BL-M8822CP1 y los controladores de software se han actualizado en consecuencia.

:::

Este wiki te guiará sobre cómo instalar JetPack en el Jetson AGX Orin 32GB H01 Kit.

## Requisitos previos

- [Ubuntu Host PC](https://developer.nvidia.com/sdk-manager) (nativo o VM usando VMware Workstation Player).
- Jetson AGX Orin H01 Kit.
- Cable de transmisión de datos USB tipo C

## Entrar en modo de recuperación forzada

- **Paso 1:** Hay un botón de recuperación en la placa, que está en el medio de los tres botones como se muestra en la imagen de abajo. Mantén pulsado el botón de recuperación y luego conecta la placa a la fuente de alimentación para entrar en modo de recuperación forzada.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/4.jpg"/></div>

- **Paso 2:** Conecta el Jetson AGX Orin 32GB H01 Kit al PC host con Ubuntu con un cable de transmisión de datos USB tipo C.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/5.jpg"/></div>

- **Paso 3:** Usa el comando `lsusb` en la máquina host con Ubuntu para verificar que el dispositivo ha entrado en modo de recuperación.
<div align="center"><img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/h01/check_rec.png"/></div>

:::info
Si `0955:7223 NVIDIA Corp.` aparece en los registros, indica que el dispositivo ha entrado en modo de recuperación.
:::

## Descargar los controladores periféricos

En primer lugar, debes instalar los controladores periféricos para esta placa. Estos son necesarios para que algunos periféricos de hardware funcionen en la placa. Haz clic en los siguientes enlaces para descargar los controladores según la versión de JetPack

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versión de JetPack</th>
      <th>Versión de L4T</th>
      <th>Enlace de descarga del controlador</th>
      <th>Enlace de descarga de L4T </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5.0.2</td>
      <td>35.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.0.2/AGX-Orin-32GB-H01-JP5.0.2.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r351" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.1.1/AGX-Orin-32GB-H01-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3531" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>5.1.4</td>
      <td>35.6.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EaRL0XDaYCdFhkBiwvO3b8UBk4HmzRBQgfhYCKlN_ANVpA?e=5ndnMu" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3560" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfdaZCD6wMZPrW_LtMm3eQgBXnPq_8ri8WmKw3nsxXVf1Q?e=uvKRhE" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r363" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbYu41kk-LNNmsssNIuM5AoBLYjTFZo_mEUTUtIJlCCnyw?e=dvCgKk" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3640" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
    <td>6.2</td>
      <td>36.4.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ES6058EFNl1LkrJGAvTYR6IBFTldWYyxJ4ZxQP3EM00BbQ?e=rjshwu" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetson-linux-r3643" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>7.2</td>
      <td>39.2.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAOW5tcK2vPTagiGOFw9oMcAYITLgRqj_dXQJMchlUeGOk?e=8ar0lu" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://developer.nvidia.com/embedded/jetpack/downloads/archive-7.2#:~:text=Jetson%20Linux%2039.2%20%286%2F02%2F2026%29" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
  </tbody>
</table>
</div>

## Flashear en Jetson

:::danger
El kit NVIDIA® Jetson AGX Orin 32GB H01 viene preinstalado con el sistema operativo `JetPack 5.1.4`. El nombre de usuario y la contraseña predeterminados son usuario: nvidia / contraseña: nvidia. Al recibir el dispositivo, puedes iniciar sesión directamente en el sistema y empezar a usarlo sin necesidad de reflashear el sistema.

Si tu sistema se corrompe, puedes consultar los pasos siguientes para reflashear el sistema.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.0.2/JP5.1.1" label="JP5.0.2/JP5.1.1">

Aquí usaremos: **NVIDIA L4T 35.1** para instalar **Jetpack 5.0.2** o **NVIDIA L4T 35.3.1** para instalar **Jetpack 5.1.1** en el Jetson AGX Orin 32GB H01 Kit.

- **Paso 1:** Descarga los controladores NVIDIA apropiados en el PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

- **Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta que los controladores de NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/7.png"/></div>

- **Paso 3:** Extrae **Jetson_Linux_R35.1.0_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2** navegando hasta la carpeta que contiene estos archivos y aplica los cambios

```sh
cd <directory_where_the_files_are_located>
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_tegra/rootfs
sudo tar xfp ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

- **Paso 4:** Extrae **AGX-Orin-32GB-H01-JP5.0.2.zip**. Aquí instalamos adicionalmente el paquete **unzip**, que es necesario para descomprimir el archivo .zip

```sh
cd ..
sudo apt install unzip 
unzip AGX-Orin-32GB-H01-JP5.0.2.zip
```

Aquí se te preguntará si deseas reemplazar los archivos. Escribe **A** y pulsa **ENTER** para reemplazar los archivos necesarios

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/3.jpg"/></div>

- **Paso 5:** Flashea el sistema en la eMMC

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson‐agx‐orin‐devkit mmcblk0p1
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/9.jpg"/></div>

### Errores encontrados

- **ERROR: failed to read rcm_state** en **AGX Orin** y **NX Orin** para *Jetpack 5.1.1*
  - Hay cambios de PCN en Jetson AGX Orin realizados por NVidia, pero no son cambios de PCN de Seeed.
  - Además de los materiales mencionados en el Wiki, descarga [Overlay_PCN210361_PCN210100_r35.3.1.tbz2](https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/overlay_pcn210361_pcn210100_r35.3.1.tbz2) en la parte inferior de la página Jetson Linux 35.3.1.
  - Después de extraer *Jetson_Linux* y antes de aplicar los binarios, extrae *Overlay_PCN210361_PCN210100_r35.3.1.tbz2*. Luego copia todos los archivos y carpetas a *Linux_For_Tegra* (fusionar, no omitir).
  - Luego continúa con los pasos restantes de las instrucciones.

</TabItem>

<TabItem value="JP5.1.4" label="JP5.1.4">

Aquí usaremos: **NVIDIA L4T 35.6.0** para instalar **Jetpack 5.1.4** en el Jetson AGX Orin 32GB H01 Kit.

Introduce el siguiente comando en la ventana de la terminal de la máquina host con Ubuntu:

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/jetson_linux_r35.6.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2

tar xf jetson_linux_r35.6.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
sudo tar xf 605_jp514.tbz2  # Please copy 605_jp514.tbz2 to the Linux_for_Tegra/ directory before execution.

```

Elige uno de los siguientes comandos para realizar la operación de flasheo:

(1). Flashear el sistema en la eMMC:

```bash
sudo ./flash.sh jetson-agx-orin-devkit internal
```

(2). Flashear el sistema en el SSD:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml \
  --showlogs --network usb0 jetson-agx-orin-devkit external
```

<div align="center"><img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/h01/flash_successful.png"/></div>

Después de completar el flasheo, el dispositivo se reiniciará automáticamente.

</TabItem>


<TabItem value="JP6.0" label="JP6.0">

Aquí usaremos **NVIDIA L4T 36.3** para instalar **Jetpack 6.0** en el Kit Jetson AGX Orin 32GB H01.

- **Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r363) los controladores de NVIDIA en el PC host. Los controladores necesarios se muestran a continuación:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta que los controladores de NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/files.png"/>
</div>

- **Paso 3:** Extrae **Jetson_Linux_R36.3.0_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2** navegando a la carpeta que contiene estos archivos y aplica los cambios:

```bash
cd < directory_where_the_files_are_located >
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Paso 4:** Extrae **AGX-Orin-H01-JP6.0.zip**. Aquí instalamos adicionalmente el paquete **unzip**, que es necesario para descomprimir el archivo .zip.

```sh
cd ..
sudo apt install unzip 
sudo unzip AGX-Orin-H01-JP6.0.zip
```

Aquí se te preguntará si deseas reemplazar los archivos. Escribe **A** y presiona **ENTER** para reemplazar los archivos necesarios

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/extract_drivers.png"/>
</div>

- **Paso 5:** Flashea el sistema en la eMMC

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Aquí usaremos **NVIDIA L4T 36.4** para instalar **Jetpack 6.1** en el Kit Jetson AGX Orin 32GB H01.

- **Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3640) los controladores de NVIDIA en el PC host con Ubuntu. Los controladores necesarios se muestran a continuación:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta que los controladores de NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/a605_jp6.1.png"/>
</div>

:::note
Puedes usar el siguiente comando para verificar que el archivo descargado esté completo.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/verify_download_file.webp"/>
</div>
:::

- **Paso 3:** Extrae **Jetson_Linux_R36.4.0_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2** navegando a la carpeta que contiene estos archivos y aplica los cambios:

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Paso 4:** Extrae **A605_Jetpack_6.1.tar.gz**:

```bash
cd ..
tar xf A605_Jetpack_6.1.tar.gz
sudo cp -r 605_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/
```

- **Paso 5:** Flashea el sistema en la eMMC:

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
También podemos ejecutar el siguiente comando para instalar el sistema en el SSD:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

Aquí usaremos **NVIDIA L4T 36.4** para instalar **Jetpack 6.2** en el Kit Jetson AGX Orin 32GB H01.

- **Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3643) los controladores de NVIDIA en el PC host con Ubuntu. Los controladores necesarios se muestran a continuación:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta que los controladores de NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

:::info
¡Similar al proceso de flasheo de Jetpack 6.1!
:::

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/a605_jp6.1.png"/>
</div>

:::note
Puedes usar el siguiente comando para verificar que el archivo descargado esté completo.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/verify_download_file.webp"/>
</div>
:::

- **Paso 3:** Extrae **Jetson_Linux_R36.4.3_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R36.4.3_aarch64.tbz2** navegando a la carpeta que contiene estos archivos y aplica los cambios:

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.3_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Paso 4:** Extrae **605_jp62.tar.gz**:

```bash
cd ..
tar xf 605_jp62.tar.gz
sudo cp -r 605_jp62/Linux_for_Tegra/* Linux_for_Tegra/
```

- **Paso 5:** Flashea el sistema en la eMMC:

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
También podemos ejecutar el siguiente comando para instalar el sistema en el SSD:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

<TabItem value="JP7.2" label="JP7.2">

Aquí usaremos **NVIDIA L4T 39.2.0** para instalar **JetPack 7.2** en el Kit Jetson AGX Orin 32GB H01.

- **Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetpack/downloads/archive-7.2#:~:text=Jetson%20Linux%2039.2%20%286%2F02%2F2026%29) los paquetes NVIDIA BSP y RootFS en el PC host con Ubuntu. Los archivos necesarios de Jetson Linux 39.2.0 se muestran a continuación:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/other/7.2-H01.png"/>
</div>

También puedes descargar los archivos con los siguientes comandos:

```bash
wget https://developer.nvidia.com/downloads/embedded/L4T/r39_Release_v2.0/release/Jetson_Linux_R39.2.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/L4T/r39_Release_v2.0/release/Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2
```

- **Paso 2:** Descarga el paquete de controladores periféricos JetPack 7.2 para el Kit Jetson AGX Orin 32GB H01 [605_jp72.tbz2](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAOW5tcK2vPTagiGOFw9oMcAYITLgRqj_dXQJMchlUeGOk?e=8ar0lu), luego colócalo en la misma carpeta que los paquetes NVIDIA BSP y RootFS. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/other/Seeed_AGX_Orin_Dev_Kit_JP72_downloaded_files.png"/>
</div>

- **Paso 3:** Extrae **Jetson_Linux_R39.2.0_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2**, luego aplica los binarios de NVIDIA:

```bash
cd <path_to_files>
tar xf Jetson_Linux_R39.2.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

- **Paso 4:** Extrae **605_jp72.tbz2**:

```bash
cd ..
tar xf 605_jp72.tbz2
sudo cp -r 605_jp72/Linux_for_Tegra/* Linux_for_Tegra/
```

- **Paso 5:** Flashea el sistema en la eMMC:

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
También podemos ejecutar el siguiente comando para instalar el sistema en el SSD:

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```

:::

</TabItem>

</Tabs>

## Herramientas para desarrolladores

### Jetpack preinstalado para un desarrollo rápido e integración de IA en el borde

[Jetson Software](https://developer.nvidia.com/embedded/develop/software) comienza con NVIDIA JetPack™ SDK, que proporciona un entorno de desarrollo completo e incluye bibliotecas aceleradas por CUDA-X y otras tecnologías de NVIDIA para poner en marcha tu desarrollo. JetPack incluye el paquete de controladores Jetson Linux, que proporciona el kernel de Linux, el gestor de arranque, los controladores de NVIDIA, utilidades de flasheo, sistema de archivos de ejemplo y toolchains para la plataforma Jetson. También incluye funciones de seguridad, capacidades de actualización por aire y mucho más.

### Visión por computadora y aprendizaje automático embebido

- [Deepstream](https://developer.nvidia.com/deepstream-sdk) ofrece un conjunto completo de herramientas de análisis de streaming para procesamiento multisensor basado en IA y comprensión de video e imagen en Jetson.
- [TAO](https://developer.nvidia.com/tao-toolkit), creado sobre TensorFlow y PyTorch, es una versión de bajo código del framework NVIDIA TAO que acelera el entrenamiento de modelos
- [alwaysAI](https://alwaysai.co/blog/getting-started-with-the-jetson-nano-using-alwaysai): crea, entrena y despliega aplicaciones de visión por computadora directamente en el borde de reComputer. Obtén acceso gratuito a más de 100 modelos de visión por computadora preentrenados y entrena modelos de IA personalizados en la nube en unos pocos clics mediante una suscripción empresarial. Consulta nuestra guía en el [wiki](https://wiki.seeedstudio.com/es/alwaysAI-Jetson-Getting-Started/#detección-de-objetos-en-archivo-de-video-pre-cargado) para comenzar con alwaysAI.
- [edge impulse](https://www.edgeimpulse.com/) : la canalización de aprendizaje automático embebido más sencilla para desplegar aplicaciones de audio, clasificación y detección de objetos en el borde sin dependencias en la nube.
- [Roboflow](https://blog.roboflow.com/deploy-to-nvidia-jetson/) proporciona herramientas para convertir imágenes sin procesar en un modelo de visión por computadora de detección y clasificación de objetos entrenado de forma personalizada y desplegar el modelo para su uso en aplicaciones. Consulta https://docs.roboflow.com/inference/nvidia-jetson para el despliegue en NVIDIA Jetson con Roboflow.
- [ultralytics yolo](https://github.com/ultralytics/yolov5): utiliza aprendizaje por transferencia para lograr detección de objetos con pocos ejemplos con YOLOv5, que solo necesita muy pocas muestras de entrenamiento. Consulta nuestros tutoriales paso a paso en el [wiki](https://wiki.seeedstudio.com/es/YOLOv5-Object-Detection-Jetson/).
- [Deep Learning](https://deci.ai/blog/jetson-machine-learning-inference/): optimiza tus modelos en NVIDIA Jetson Nano. Consulta [aquí](https://info.deci.ai/benchmark-optimize-runtime-performance-nvidia-jetson) en Deci cómo evaluar automáticamente y optimizar el rendimiento en tiempo de ejecución en dispositivos NVIDIA Jetson Nano y Xavier NX

### IA de voz

- [Riva](https://developer.nvidia.com/riva) es un SDK acelerado por GPU para crear aplicaciones de IA de voz personalizadas para tu caso de uso y que ofrecen rendimiento en tiempo real.

### Gestión remota de flotas

Habilita OTA segura y gestión remota de dispositivos con [allxon](https://www.allxon.com/). Desbloquea una prueba gratuita de 90 días con el código H4U-NMW-CPK.

### Desarrollo de robots y ROS

- NVIDIA Isaac ROS GEMs son paquetes acelerados por hardware que facilitan a los desarrolladores de ROS crear soluciones de alto rendimiento sobre hardware de NVIDIA. Más información sobre [NVIDIA Isaac](https://developer.nvidia.com/embedded/develop/software).
- [Cogniteam Nimbus](https://www.cogniteam.com/nimbus) es una solución basada en la nube que permite a los desarrolladores gestionar robots autónomos de forma más eficaz. La plataforma Nimbus es compatible con NVIDIA® Jetson™ y con ISAAC SDK y GEMs de forma nativa. Consulta nuestro [webinar](https://www.seeedstudio.com/blog/2022/04/21/webinar-connect-your-ros-project-to-the-cloud-with-nimbus/) sobre cómo conectar tu proyecto ROS a la nube con Nimbus.

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
