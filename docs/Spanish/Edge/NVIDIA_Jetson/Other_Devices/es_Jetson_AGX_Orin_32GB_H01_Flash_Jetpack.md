---
description: Kit de conversión de JetPack a NVIDIA® Jetson AGX Orin 32 GB H01
title: Kit NVIDIA® Jetson AGX Orin 32GB H01
tags:
  - NVIDIA Jetson H01
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack
last_update:
  date: 3/30/2023
  author: Lakshantha
---

<!-- # Flash JetPack to NVIDIA® Jetson AGX Orin 32GB H01 Kit  -->

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/6.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html"><strong><span><font color={'FFFFFF'} size={"4"}> Conseguir una 🖱️</font></span></strong>
    </a>
</div>

Esta wiki te guiará sobre cómo instalar JetPack en el kit Jetson AGX Orin 32GB H01.

## Prerequisitos

- PC host con Ubuntu (nativo o VM usando VMware Workstation Player)
- Kit Jetson AGX Xavier H01
- Cable de transmisión de datos USB Tipo-C

## Entrar en modo de recuperación forzada

- **Paso 1:** Hay un botón de recuperación en la placa, que se encuentra en medio de los tres botones, como se muestra en la siguiente imagen. Manten presionado el botón de recuperación y luego conecta la placa a la fuente de alimentación para ingresar al modo de recuperación forzada.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/4.jpg"/></div>

- **Paso 2:** Conecta el kit Jetson AGX Orin 32GB H01 con la PC host de Ubuntu mediante un cable de transmisión de datos USB Tipo-C

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/5.jpg"/></div>

## Descarga los controladores de periféricos

En primer lugar, necesitas instalar los controladores periféricos para esta placa. Estos son necesarios para que algunos periféricos de hardware funcionen en la placa. Haz click en los enlaces mostrados a continuación para descargar los controladores según la versión de JetPack


<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versión de JetPack</th>
      <th>Versión de L4T</th>
      <th>Link de descarga</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>5.0.2</td>
      <td>35.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.0.2/AGX-Orin-32GB-H01-JP5.0.2.zip/download" target="_blank" rel="noopener noreferrer">Descarga</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/Jetson-AGX-Orin-32GB-H01-Kit/Driver-for-JP-5.1.1/AGX-Orin-32GB-H01-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Descarga</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfdaZCD6wMZPrW_LtMm3eQgBXnPq_8ri8WmKw3nsxXVf1Q?e=uvKRhE" target="_blank" rel="noopener noreferrer">Descarga</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbYu41kk-LNNmsssNIuM5AoBLYjTFZo_mEUTUtIJlCCnyw?e=dvCgKk" target="_blank" rel="noopener noreferrer">Descarga</a></td>
    </tr>
  </tbody>
</table>
</div>

## Flashear la Jetson

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.0.2/JP5.1.1" label="JP5.0.2/JP5.1.1">

Aquí usaremos **NVIDIA L4T 35.1** para instalar **Jetpack 5.0.2** en el kit Jetson AGX Orin 32GB H01.

- **Paso 1:** [Descargar](https://developer.nvidia.com/embedded/jetson-linux-r351) los controladores NVIDIA en la PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

- **Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta que los controladores NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/7.png"/></div>

- **Paso 3:** Extrae **Jetson_Linux_R35.1.0_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2** navegando a la carpeta que contiene estos archivos y aplica los cambios

```sh
cd <directory_where_the_files_are_located>
tar xf Jetson_Linux_R35.1.0_aarch64.tbz2
cd Linux_for_tegra/rootfs
sudo tar xfp ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

- **Paso 4:** Extrae **AGX-Orin-32GB-H01-JP5.0.2.zip**. Aquí instalamos adicionalmente el paquete **unzip** que es necesario para descomprimir el archivo .zip.

```sh
cd ..
sudo apt install unzip 
unzip AGX-Orin-32GB-H01-JP5.0.2.zip
```

Aquí se te preguntará si deseas reemplazar los archivos. Escribe **A** y presiona **ENTER** para reemplazar los archivos necesarios

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/3.jpg"/></div>

- **Paso 5:** Flashea el sistema al eMMC

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson‐agx‐orin‐devkit mmcblk0p1
```

Verás el siguiente resultado si el proceso de actualización concluyó exitosamente

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/9.jpg"/></div>

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

Aquí usaremos **NVIDIA L4T 36.3** para instalar **Jetpack 6.0** en el kit Jetson AGX Orin 32GB H01.

- **Paso 1:** [Descargar](https://developer.nvidia.com/embedded/jetson-linux-r363) los controladores NVIDIA en la PC host. Los controladores necesarios se muestran a continuación:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta que los controladores NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

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

- **Paso 4:** Extrae **AGX-Orin-H01-JP6.0.zip**. Aquí instalamos adicionalmente el paquete **unzip** que es necesario para descomprimir el archivo .zip.

```sh
cd ..
sudo apt install unzip 
sudo unzip AGX-Orin-H01-JP6.0.zip
```

Aquí se te preguntará si deseas reemplazar los archivos. Escribe **A** y presiona **ENTER** para reemplazar los archivos necesarios

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/extract_drivers.png"/>
</div>

- **Paso 5:** Actualiza el sistema al eMMC

```sh
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

Verás el siguiente resultado si el proceso de actualización concluyó exitosamente:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Aquí usaremos **NVIDIA L4T 36.4** para instalar **Jetpack 6.1** en el kit Jetson AGX Orin 32GB H01.

- **Paso 1:** [Descargar](https://developer.nvidia.com/embedded/jetson-linux-r3640) los controladores NVIDIA en la PC host de Ubuntu. Los controladores necesarios se muestran a continuación:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/>
</div>

- **Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta que los controladores NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/a605_jp6.1.png"/>
</div>

:::nota
Puedes utilizar el siguiente comando para verificar que el archivo descargado esté completo.

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

- **Paso 5:** Flashea el sistema al eMMC:

```bash
cd Linux_for_Tegra
sudo ./flash.sh jetson-agx-orin-devkit internal
```

Verás el siguiente resultado si el proceso de actualización concluyó exitosamente:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Orin-AGX-H01/flash_successful.png"/>
</div>

:::info
También podemos ejecutar el siguiente comando para instalar el sistema en el SSD:
```bash
sudo ./tooLs/kerneL_fash/L4t_initrd_fash.sh --externaL-device nvme0nlp1 -c tools/kernel_fash/flash_L4t_t234_nvme.xml --showlogs --network usb0 jetson-agx-orin-devkit external
```
:::

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
