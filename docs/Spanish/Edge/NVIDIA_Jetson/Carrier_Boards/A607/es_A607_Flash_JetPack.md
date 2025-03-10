---
description: A607 Carrier Board
title: A607 Carrier Board
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_A607_Flash_System
last_update:
  date: 04/17/2023
  author: Lakshantha
---

# Flashear JetPack OS en la Carrier Board A607 (soporte para NVIDIA Jetson Orin NX/Nano)

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A607/1.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A607-Carrier-Board-for-Jetson-Orin-NX-Nano-p-5634.html"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue una ahora 🖱️</font></span></strong>
    </a>
</div>

En esta wiki, te mostraremos cómo flashear [Jetpack](https://developer.nvidia.com/embedded/jetpack) a una SSD NVMe conectada a la Carrier Board A607 que puede estar potenciada tanto por el módulo NVIDIA Jetson Orin NX como por el módulo NVIDIA Jetson Orin Nano.

## Prerequisitos

- PC con Ubuntu OS (Nativo o en una máquina virtual)
- Carrier Board A607 con el módulo Jetson Orin NX o el módulo Jetson Orin Nano
- Cable de datos USB - C

## Entrar en modo de recuperación forzado

Antes de continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en modo de recuperación forzada.

**Paso 1.** Conecta un cable USB entre la placa y la PC host de Linux

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A607/3.png" /></div>

**Paso 2.** Presiona el botón RECOVERY y mientras mantienes presionado ese botón, conecta el adaptador de corriente al DC JACK en la placa para encenderla.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A607/2.png" /></div>

**Paso 3.** En la PC host de Linux, terminal e ingres el comando `lsusb`. Si el contenido devuelto tiene una de las siguientes salidas según el Jetson SoM que utilices, entonces la placa entró exitosamente a modo de recuperación forzado.

- Para la Orin NX 16GB: **0955:7323 NVidia Corp**
- Para la Orin NX 8GB: **0955:7423 NVidia Corp**
- Para la Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para la Orin Nano 4GB: **0955:7623 NVidia Corp**

La siguiente imágen es de la Orin NX 16GB

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/A607/4.png" /></div>

**Paso 4.** Remueve el puente que hiciste utilizando un cable

## Descarga los controladores periféricos

En primer lugar, necesitas instalar los controladores periféricos para esta placa. Estos son necesarios para que algunos periféricos de hardware funcionen. Haz click en los enlaces listados a continuación para descargar los controladores según tu módulo Jetson.

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Versión de JetPack</th>
      <th>Versión de L4T</th>
      <th>Link de descarga</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>Jetson Orin NX 8GB/ 16GB</td>
      <td>5.1</td>
      <td>35.2.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-NX-JP5.1.zip/download" target="_blank" rel="noopener noreferrer">Descarga</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-NX-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Descarga</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQS4f032w2VIsYE-4Bs80K8BIRD7YGXgBdDq6umW3zCIlw?e=l0LWr0" target="_blank" rel="noopener noreferrer">Descarga</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ecv3iI8SWcNJs7f_6_bOcyIB9xr9o9x7Ghs98Hj07Im1Ew?e=fkwe6b" target="_blank" rel="noopener noreferrer">Descarga</a></td>
    </tr>
    <tr>
      <td rowSpan={3}>Jetson Orin Nano 4GB</td>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-Nano-4GB-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Descarga</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQS4f032w2VIsYE-4Bs80K8BIRD7YGXgBdDq6umW3zCIlw?e=l0LWr0" target="_blank" rel="noopener noreferrer">Descarga</a></td>
    </tr>  
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ecv3iI8SWcNJs7f_6_bOcyIB9xr9o9x7Ghs98Hj07Im1Ew?e=fkwe6b" target="_blank" rel="noopener noreferrer">Descarga</a></td>
    </tr>
    <tr>
      <td rowSpan={3}>Jetson Orin Nano 8GB</td>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-Nano-8GB-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Descarga</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQS4f032w2VIsYE-4Bs80K8BIRD7YGXgBdDq6umW3zCIlw?e=l0LWr0" target="_blank" rel="noopener noreferrer">Descarga</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ecv3iI8SWcNJs7f_6_bOcyIB9xr9o9x7Ghs98Hj07Im1Ew?e=fkwe6b" target="_blank" rel="noopener noreferrer">Descarga</a></td>
    </tr>
  </tbody>
</table>
</div>


**Note:** Actualmente los controladores proporcionados son los únicos disponibles. Seguiremos actualizando los controladores en el futuro con el lanzamiento de nuevas versiones de JetPack.

## Flashear la Jetson 

:::nota
 Antes de pasar al flasheo, cabe señalar que el módulo Jetson Orin NX solo admite JetPack 5.1 y superior, mientras que el módulo Jetson Orin Nano solo admite JetPack 5.1.1 y superior.
:::  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1/JP5.1.1" label="JP5.1/JP5.1.1">

### Jetson Orin NX

Aquí usaremos NVIDIA L4T **35.3.1** para instalar **Jetpack 5.1.1** en la Carrier Board A607 con el módulo Jetson Orin NX.

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3531) los controladores NVIDIA en la PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Paso 2:** Mueve los controladores descargados a la misma carpeta que los controladores NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/A607/5.png" /></div>

**Paso 3:** Extrae **Jetson_Linux_R35.3.1_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2** navegando a la carpeta que contiene estos archivos, aplica los cambios e instala los pre - requisitos necesarios

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Paso 4:** Extrae **A607-Orin-NX-JP5.1.1.zip**. Aquí instalamos adicionalmente el paquete **unzip** que es necesario para descomprimir el archivo .zip.

```sh
cd ..
sudo apt install unzip 
unzip A607-Orin-NX-JP5.1.1.zip
```

Aquí se te preguntará si deseas reemplazar los archivos. Escribe **A** y presiona **ENTER** para reemplazar los archivos necesarios

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A607/7.jpg" /></div>

**Paso 5:** Configura tu nombre de usuario, contraseña y nombre de host para que no necesites ingresar al asistente de instalación de Ubuntu después de que el dispositivo termine de iniciarse.

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo (nombre de usuario:"nvidia", contraseña:"nvidia", nombre-dispositivo:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 6:** Flashea el sistema a NVMe SSD o unidad flash USB

#### NVMe SSD

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

#### USB Flash drive

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

Verás el siguiente resultado si el proceso de flasheado concluyó exitosamente

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

### Jetson Orin Nano

Aquí usaremos NVIDIA L4T **35.3.1** para instalar **Jetpack 5.1.1** en la Carrier Board A607 con el módulo Jetson Orin Nano. Ten en cuenta que los módulos Orin Nano de 4 GB y 8 GB utilizan diferentes archivos de controlador y las instrucciones son un poco diferentes.

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3531) los controladores NVIDIA en la PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Paso 2:** Mueve los controladores descargados a la misma carpeta que los controladores NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/A607/8.png" /></div>

**Paso 3:** Extrae **Jetson_Linux_R35.3.1_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2** navegando a la carpeta que contiene estos archivos, aplica los cambios e instala los requisitos previos necesarios

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Paso 4:** Extrae **A607-Orin-Nano-8GB-JP5.1.1.zip** para la versión de 8GB y **A607-Orin-Nano-4GB-JP5.1.1.zip** para la versión de 4GB. Aquí instalamos adicionalmente el paquete **unzip** que es necesario para descomprimir el archivo .zip.

```sh
cd ..
sudo apt install unzip 
# for 8GB version
unzip A607-Orin-Nano-8GB-JP5.1.1.zip
# for 4GB version
unzip A607-Orin-Nano-4GB-JP5.1.1.zip
```

Aquí se te preguntará si deseas reemplazar los archivos. Escribe **A** y presiona **ENTER** para reemplazar los archivos necesarios

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A607/10.jpg" /></div>

**Paso 5:** Configura tu nombre de usuario, contraseña y nombre de host para que no necesites ingresar al asistente de instalación de Ubuntu después de que el dispositivo termine de iniciarse.

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo (nombre de usuario:"nvidia", contraseña:"nvidia", nombre-dispositivo:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 6:** Flashea el sistema a NVMe SSD o unidad flash USB

#### NVMe SSD

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit internal
```

#### USB Flash drive

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Verás el siguiente resultado si el proceso de flasheo concluyó exitosamente

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>
</TabItem>

<TabItem value="JP6.0" label="JP6.0">

Aquí usaremos NVIDIA L4T **36.3** para instalar **Jetpack 6.0** en la Carrier Board A607 con el módulo Jetson Orin NX.

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r363) los controladores NVIDIA en la PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta que los controladores NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/compressed_files.png" /></div>

**Paso 3:** Extrae **Jetson_Linux_R36.3.0_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2** navegando a la carpeta que contiene estos archivos, aplica los cambios e instala los requisitos previos necesarios

```sh
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Paso 4:** Extrae **A607-JP6.0.zip**. Aquí instalamos adicionalmente el paquete **unzip** que es necesario para descomprimir el archivo .zip.

```sh
cd ..
sudo apt install unzip 
sudo unzip A607-JP6.0.zip
```

Aquí se te preguntará si deseas reemplazar los archivos. Escribe **A** y presiona **ENTER** para reemplazar los archivos necesarios:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/replace_files.png" /></div>

**Paso 5:** Flashea el sistema a cualquiera de los SSD NVMe:

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Verás el siguiente resultado si el proceso de flasheo concluye exitosamente:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Aquí usaremos NVIDIA L4T **36.4** para instalar **Jetpack 6.1** en la Carrier Board A607 con el módulo Jetson Orin NX.

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3640) los controladores NVIDIA en la PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Paso 2:** Mueve los controladores descargados a la misma carpeta que los controladores NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/a607_jp6.1.png" /></div>

:::nota
Puedes utilizar el siguiente comando para verificar que el archivo descargado esté completo.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/verify_download_file.webp"/>
</div>
:::

**Paso 3:** Extrae **Jetson_Linux_R36.4.0_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2** navegando a la carpeta que contiene estos archivos y aplica los cambios:

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

**Paso 4:** Extrae **A607_Jetpack_6.1.tar.gz**:

```sh
cd ..
tar xf A607_Jetpack_6.1.tar.gz
sudo cp -r 607_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/
```

**Paso 5:** Flashea el sistema a cualquiera de los SSD NVMe:

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Verás el siguiente resultado si el proceso de flasheo concluye exitosamente:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>

</Tabs>


## Configuración WiFi y Bluetooth

Después de flashear el dispositivo exitosamente, la Jetson iniciará en el sistema operativo. Ahora necesitas configurar adicionalmente el WiFi y Bluetooth.

**Paso 1:** Visita [esta página](https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/WiFi-BT-Driver) y haz click en **8723du.ko** para descargar el archivo del controlador WiFi/Bluetooth necesario y copialo en el dispositivo.

**Paso 2:** Crea un nuevo directorio para el Driver descargado

```sh
cd /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/
sudo mkdir rtl8723du
```

**Paso 3:** Copia el archivo **8723du.ko** descargado en el directorio recién creado

```sh
cd ~
sudo cp 8723du.ko /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/rtl8723du
```

**Paso 4:** Habilita el Driver

```sh
sudo modprobe cfg80211
sudo insmod /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/rtl8723du/8723du.ko
sudo depmod -a
sudo modprobe 8723du
sudo echo 8723du >> /etc/modules
```

**Paso 5:** Reinicia el dispositivo 

```sh
sudo reboot
```

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
