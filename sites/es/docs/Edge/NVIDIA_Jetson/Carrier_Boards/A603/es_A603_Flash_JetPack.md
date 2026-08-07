---
description: Placa Carrier A603
title: Placa Carrier A603
keywords:
  - Edge
  - Jetson Orin
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_A603_Flash_System
sku: 102110840
last_update:
  date: 04/19/2023
  author: Lakshantha
createdAt: '2023-04-17'
updatedAt: '2026-06-30'
url: https://wiki.seeedstudio.com/es/reComputer_A603_Flash_System/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Flashear JetPack OS en la placa Carrier A603

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/A603_Carrier_Board.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A603-Carrier-Board-for-Jetson-Orin-NX-Nano-p-5635.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
</div>

La placa Carrier A603 es una potente placa de expansión que admite módulos Jetson Orin™ NX/Nano. Incorpora 1 puerto GbE, M.2 Key M para SSD, M.2 Key E para WiFi/Bluetooth, CSI y HDMI para captura y visualización de vídeo de alta calidad. También incluye 4 puertos USB, ventilador, RTC y una fuente de alimentación flexible de 9‑20 V. Gracias a su diseño compacto, puede integrarse de forma flexible y sencilla en una gran variedad de aplicaciones de computación en el borde. En este wiki, te mostraremos cómo flashear [Jetpack](https://developer.nvidia.com/embedded/jetpack) en un SSD NVMe y en una unidad flash USB conectados a la placa Carrier A603.

## Módulo compatible

- [Módulo NVIDIA® Jetson Orin™ Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [Módulo NVIDIA® Jetson Orin™ Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [Módulo NVIDIA® Jetson Orin™ NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [Módulo NVIDIA® Jetson Orin™ NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

## Requisitos previos

- PC host con Ubuntu 20.04/22.04/24.04
- Placa Carrier A603 con un módulo Jetson Orin NX o Jetson Orin Nano
- Cable de transmisión de datos Micro‑USB o Type‑C
- Adaptador de corriente

## Entrar en modo de recuperación forzada

:::note
Antes de continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en modo de recuperación forzada.
:::

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/recovery.gif" /></div>

<details>

<summary> tutorial detallado paso a paso </summary>

**Paso 1.** Conecta un cable USB entre el conector micro‑USB de la placa y el PC host con Linux

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A603/2.jpg" /></div>

**Paso 2.** Conecta un cable puente entre el pin 3 y el pin 4 del conector de 14 pines

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/A603/3.jpg" /></div>

**Paso 3.** Conecta el adaptador de corriente al conector DC JACK de la placa para encenderla

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/A603/4.jpg" /></div>

**Paso 4.** En el PC host con Linux, abre una ventana de Terminal e introduce el comando `lsusb`. Si el contenido devuelto incluye una de las siguientes salidas según el Jetson SoM que utilices, entonces la placa está en modo de recuperación forzada.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

La imagen siguiente corresponde a Orin NX 16GB.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/A607/4.png" /></div>

**Paso 5.** Retira el cable puente.

</details>

## Descargar los controladores de periféricos

En primer lugar, debes instalar los controladores de periféricos para esta placa. Son necesarios para que algunos periféricos de hardware funcionen en la placa. Haz clic en los siguientes enlaces para descargar los controladores según el módulo Jetson

<div class="table-center">
<table style={{textAlign:'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Versión de JetPack</th>
      <th>Versión de L4T</th>
      <th>Enlace de descarga</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Jetson Orin NX 8GB/ 16GB</td>
      <td>5.1</td>
      <td>35.2.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-NX/A603-Orin-NX-JP5.1.zip/download">Download</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-NX/A603-Orin-NX-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-Nano/A603-Orin-Nano-JP5.1.1.zip/download">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.2</td>
      <td>35.4.1</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZC4-Ci8o0dNkc0wWWlphf0BEQHp2nV-TM2Qpn7WwmpB1g?e=heBSc2">Download</a></td>
    </tr>
        <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.4</td>
      <td>35.6.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EShnCiOVY3ZPqptpnJZ0tlABemb3chgmuUZyuvsqJpHpcA?e=hXxCRr">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY0H4iNmfUxPjCfiwfi59NEB8KQ9HuYEiu_0VLnsJVPjVw?e=oR4LYr">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdmS2OfqVg5IpQt9MeiBoT0BdS3Uft6DlJ1GPTJqZHoVNQ?e=ocmcHG">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.2</td>
      <td>36.4.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQLFs4vd8N5Lp0nhbP_KU-gB6kYGlXu3_N3KLiL25ze52Q?e=CWhIaE">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>7.2</td>
      <td>39.2.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDFKQLWsQBBTrenUxxvj-qJAU4s62oPXWg6RxcdSg-uJnY?e=y3buDr" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado [aquí](https://seeedstudio88-my.sharepoint.com/:x:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXljqlpW3ZNNplIPBwJuyvsBdkW92geUmV7_7VN4SDlggA?e=Xea32u), se confirma que el firmware que descargaste está completo e intacto.
:::

**Nota:** Actualmente proporcionamos los controladores anteriores. Seguiremos actualizando los controladores en el futuro con el lanzamiento de nuevas versiones de JetPack.

## Flashear a Jetson

Aquí tienes un vídeo para flashear JetPack 6.1 en la placa carrier A603 + módulo Orin Nx 16GB. Puedes consultar el vídeo y los pasos detallados a continuación para flashear tu dispositivo.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/qN4GxscUGW0" title="A603 JetPack6.1 Installation Walkthrough" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
Antes de pasar al flasheo, hay que tener en cuenta que el módulo Jetson Orin NX solo admite JetPack 5.1 y superiores, mientras que el módulo Jetson Orin Nano solo admite JetPack 5.1.1 y superiores.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1 for Jetson Orin NX" label="JP5.1.1 para Jetson Orin NX">

Aquí instalaremos **Jetpack 5.1.1** en la placa Carrier A603 con el módulo Jetson Orin NX.

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3531) los controladores de NVIDIA en el PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Paso 2:** Mueve los controladores de periféricos descargados anteriormente a la misma carpeta que los controladores de NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/6.png" /></div>

**Paso 3:** Extrae **Jetson_Linux_R35.3.1_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2** navegando hasta la carpeta que contiene estos archivos, aplica los cambios e instala los prerrequisitos necesarios

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Paso 4:** Extrae **A603-Orin-NX-JP5.1.1.zip**. Aquí instalamos adicionalmente el paquete **unzip**, que es necesario para descomprimir el archivo .zip

```sh
cd ..
sudo apt install unzip 
unzip A603-Orin-NX-JP5.1.1.zip
```

Aquí se te preguntará si deseas reemplazar los archivos. Escribe **A** y pulsa **ENTER** para reemplazar los archivos necesarios

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/7.jpg" /></div>

**Paso 5:** Configura tu nombre de usuario, contraseña y nombre de host para que no tengas que pasar por el asistente de instalación de Ubuntu después de que el dispositivo termine de arrancar.

Usa `cd Linux_for_Tegra` primero para asegurarte de que estás en el directorio correcto.

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo (nombre de usuario:"nvidia", contraseña:"nvidia", nombre del dispositivo:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 6:** Flashea el sistema en un SSD NVMe o una unidad flash USB

```sh
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>
<TabItem value="JP5.1.1 for Jetson Orin Nano" label="JP5.1.1 para Jetson Orin Nano">

Aquí usaremos NVIDIA L4T **35.3.1** para instalar **Jetpack 5.1.1** en la placa carrier A603 con el módulo Jetson Orin Nano

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3531) los controladores de NVIDIA en el PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta que los controladores de NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/8.png" /></div>

**Paso 3:** Extrae **Jetson_Linux_R35.3.1_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2** navegando a la carpeta que contiene estos archivos, aplica los cambios e instala los prerrequisitos necesarios

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Paso 4:** Extrae **A603-Orin-NX-JP5.1.1.zip**. Aquí instalamos adicionalmente el paquete **unzip** que es necesario para descomprimir el archivo .zip

```sh
cd ..
sudo apt install unzip 
unzip A603-Orin-NX-JP5.1.1.zip
```

Aquí se te preguntará si deseas reemplazar los archivos. Escribe **A** y presiona **ENTER** para reemplazar los archivos necesarios

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/9.png" /></div>

**Paso 5:** Configura tu nombre de usuario, contraseña y nombre de host para que no necesites entrar en el asistente de instalación de Ubuntu después de que el dispositivo termine de arrancar

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo (nombre de usuario:"nvidia", contraseña:"nvidia", nombre del dispositivo:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 6:** Flashea el sistema en un SSD NVMe o una unidad flash USB

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>

<TabItem value="JP5.1.2" label="JP5.1.2">

Aquí instalaremos **Jetpack 5.1.2** en la placa carrier A603 con el módulo Jetson Orin.

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3541) los controladores de NVIDIA en el PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta que los controladores de NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/jp512_files.png" /></div>

**Paso 3:** Extrae **Jetson_Linux_R35.4.1_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2** navegando a la carpeta que contiene estos archivos, aplica los cambios e instala los prerrequisitos necesarios.

```sh
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Paso 4:** Extrae **A603-JP5.1.2.zip**. Aquí instalamos adicionalmente el paquete **unzip** que es necesario para descomprimir el archivo .zip.

```sh
cd ..
sudo apt install unzip 
unzip A603-JP5.1.2.zip
```

**Paso 5:** Configura tu nombre de usuario, contraseña y nombre de host para que no necesites entrar en el asistente de instalación de Ubuntu después de que el dispositivo termine de arrancar.

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo (nombre de usuario:"nvidia", contraseña:"nvidia", nombre del dispositivo:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 6:** Flashea el sistema en el SSD NVMe.

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/flash_successful.png" /></div>

</TabItem>

<TabItem value="JP5.1.4" label="JP5.1.4">

Aquí instalaremos **Jetpack 5.1.4** en la placa carrier A603 con el módulo Jetson Orin.

**Paso 1:** Descarga los controladores de NVIDIA en el PC host:

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/jetson_linux_r35.6.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2
```

**Paso 2:** Ensambla el paquete de flasheo
Ejecuta los siguientes comandos en orden:

```bash
tar xf jetson_linux_r35.6.0_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
tar zxpf 603_jp514.tar.gz # Unzip the driver package
sudo cp -r 603_jp514/Linux_for_Tegra/* Linux_for_Tegra/ # Replace all files in the Linux_for_Tegra directory with the files from the driver package
cd Linux_for_Tegra/ # Navigate to the Linux_for_Tegra path to run the flashing commands
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Paso 3:** Pon el dispositivo en modo de recuperación. El dispositivo debe estar en modo de recuperación para flashear. Sigue estos pasos para entrar en modo de recuperación:

1. Haz un cortocircuito entre el pin REC y el pin GND en la placa carrier.
2. Conecta la placa carrier al PC usando un cable de datos Micro USB.
3. Enciende el dispositivo.
4. En el PC, ejecuta `lsusb` y comprueba si el ID de producto es uno de los siguientes: 7323, 7423, 7523 o 7623. Esto indica que el dispositivo está en modo de recuperación:
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**Paso 4:** Flashea el dispositivo.

   ```bash
   sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
   ```

**Consejos:** Haz una copia de seguridad del sistema y flashea usando la imagen de respaldo

1. Si flasheaste el sistema en el SSD, ejecuta los siguientes comandos:
   - Para hacer una copia de seguridad de la imagen (requiere modo de recuperación):

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit
     ```

   - Para flashear usando la imagen de respaldo (requiere modo de recuperación):

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit
     ```

   Una vez completado, el dispositivo puede arrancar en el sistema.

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

Aquí instalaremos **Jetpack 6.0** en la placa carrier A603 con el módulo Jetson Orin.

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r363) los controladores de NVIDIA en el PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta que los controladores de NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/jp6.0_files.png" /></div>

**Paso 3:** Extrae **Jetson_Linux_R36.3.0_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2** navegando a la carpeta que contiene estos archivos.

```sh
sudo tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

**Paso 4:** Extrae **A603-JP6.0.zip**. Aquí instalamos adicionalmente el paquete **unzip** que es necesario para descomprimir el archivo .zip.

```sh
cd ..
sudo apt install unzip 
sudo unzip A603-JP6.0.zip
```

Luego, copia las tres carpetas `(bootloader, kernel, rootfs in A603-JP6.0.zip)` a la carpeta Linux_for_Tegra.

**Paso 5:** Aplica los cambios e instala los prerrequisitos necesarios

```sh
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Paso 6:** Configura tu nombre de usuario, contraseña y nombre de host para que no necesites entrar en el asistente de instalación de Ubuntu después de que el dispositivo termine de arrancar.

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo (nombre de usuario:"nvidia", contraseña:"nvidia", nombre del dispositivo:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 7:** Flashear el sistema en el SSD NVMe.

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/flash_successful.png" /></div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Aquí instalaremos **Jetpack 6.1** en la placa carrier A603 con el módulo Jetson Orin.

**Paso 1:** Descarga los controladores de NVIDIA en el PC host:

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.0/release/Jetson_Linux_R36.4.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.0/release/Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2
```

**Paso 2:** Ensamblar el paquete de flasheo
Ejecuta los siguientes comandos en orden:

```bash
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
tar xpf 603_jetpack6.1.tar.gz # Unzip the driver package
sudo cp -r 603_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/ # Replace all files in the Linux_for_Tegra directory with the files from the driver package
cd Linux_for_Tegra/ # Navigate to the Linux_for_Tegra path to run the flashing commands
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Paso 3:** Poner el dispositivo en modo de recuperación. El dispositivo debe estar en modo de recuperación para flashear. Sigue estos pasos para entrar en modo de recuperación:

1. Haz un cortocircuito entre el pin REC y el pin GND en la placa carrier.
2. Conecta la placa carrier al PC usando un cable de datos Micro USB.
3. Enciende el dispositivo.
4. En el PC, ejecuta `lsusb` y comprueba si el ID de producto es uno de los siguientes: 7323, 7423, 7523 o 7623. Esto indica que el dispositivo está en modo de recuperación:
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**Paso 4:** Flashear el dispositivo.

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml"   --showlogs --network usb0 jetson-orin-nano-devkit internal
```

:::info
Haz una copia de seguridad del sistema y flashea usando la imagen de respaldo

Si flasheaste el sistema en el SSD, ejecuta los siguientes comandos:

- Para hacer una copia de seguridad de la imagen (requiere modo de recuperación):

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit
     ```

- Para flashear usando la imagen de respaldo (requiere modo de recuperación):

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit
     ```

   Una vez completado, el dispositivo podrá arrancar en el sistema.
:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

Aquí instalaremos **Jetpack 6.2** en la placa carrier A603 con el módulo Jetson Orin.

**Paso 1:** Descarga los controladores de NVIDIA en el PC host:

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Jetson_Linux_r36.4.3_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2
```

**Paso 2:** Ensamblar el paquete de flasheo

Ten en cuenta que necesitamos colocar el controlador de Nvidia y los controladores periféricos en el mismo directorio, y luego abrir la terminal en ese directorio y ejecutar el siguiente código:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/driver_files_directory_layout.png" /></div>

```bash
tar xf Jetson_Linux_r36.4.3_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
sudo tar zxpf 603_jp62.tar.gz
sudo cp -r 603_jp62/Linux_for_Tegra/* Linux_for_Tegra/
cd Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

**Paso 3:** Poner el dispositivo en modo de recuperación. El dispositivo debe estar en modo de recuperación para flashear. Sigue estos pasos para entrar en modo de recuperación:

1. Haz un cortocircuito entre el pin REC y el pin GND en la placa carrier.
2. Conecta la placa carrier al PC usando un cable de datos Micro USB.
3. Enciende el dispositivo.
4. En el PC, ejecuta `lsusb` y comprueba si el ID de producto es uno de los siguientes: 7323, 7423, 7523 o 7623. Esto indica que el dispositivo está en modo de recuperación:
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**Paso 4:** Flashear el dispositivo.

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

:::info
Consejos: Haz una copia de seguridad del sistema y flashea usando la imagen de respaldo

Si flasheaste el sistema en el SSD, ejecuta los siguientes comandos:

- Para hacer una copia de seguridad de la imagen (requiere modo de recuperación):

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit-super
     ```

- Para flashear usando la imagen de respaldo (requiere modo de recuperación):

     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit-super
     ```

   Una vez completado, el dispositivo podrá arrancar en el sistema.
:::

</TabItem>

<TabItem value="JP7.2" label="JP7.2">

Aquí instalaremos **JetPack 7.2** en la placa carrier A603 con un módulo Jetson Orin NX o Jetson Orin Nano.

### Requisitos de hardware

- PC host con Ubuntu 20.04/22.04/24.04
- Cable de datos Type-C
- Placa carrier A603 con un módulo Jetson Orin NX o Jetson Orin Nano
- Adaptador de corriente

**Paso 1:** Descarga los paquetes de imagen del sistema de NVIDIA en el PC host con Ubuntu.

```bash
wget https://developer.nvidia.com/downloads/embedded/L4T/r39_Release_v2.0/release/Jetson_Linux_R39.2.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/L4T/r39_Release_v2.0/release/Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2
```

**Paso 2:** Descarga el paquete de controladores periféricos A603 JetPack 7.2 [603_jp72.tbz2](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDFKQLWsQBBTrenUxxvj-qJAU4s62oPXWg6RxcdSg-uJnY?e=y3buDr), colócalo en el mismo directorio que los paquetes de imagen del sistema de NVIDIA y ensambla el paquete de flasheo.

```bash
# Extract the official flashing package files.
tar xf Jetson_Linux_R39.2.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R39.2.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/

# Create the A603 driver package directory and extract the package.
mkdir 603_jp72/
cp 603_jp72.tbz2 603_jp72/
cd 603_jp72
sudo tar xf 603_jp72.tbz2

# Enter the Linux_for_Tegra directory and run the setup scripts.
cd ../Linux_for_Tegra/
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh

# Replace the driver package files and directories in Linux_for_Tegra.
cp -r ../603_jp72/bootloader/ ./
cp -r ../603_jp72/kernel/ ./
cp ../603_jp72/p3768-0000-p3767-0000-a0.conf ./
sudo cp -r ../603_jp72/rootfs/ ./
```

**Paso 3:** Pon el dispositivo en modo de recuperación. El dispositivo debe estar en modo de recuperación para flashear.

1. Haz un cortocircuito entre el pin RECOVERY y el pin GND en la placa carrier.
2. Conecta la placa carrier al PC host con un cable de datos Type-C.
3. Enciende el dispositivo.
4. En el PC host, ejecuta `lsusb`. Si el ID de producto es `7323`, `7423`, `7523` o `7623`, el dispositivo está en modo de recuperación.
   - 7323: Orin NX 16GB
   - 7423: Orin NX 8GB
   - 7523: Orin Nano 8GB
   - 7623: Orin Nano 4GB

**Paso 4:** Flashear el sistema en el SSD.

```bash
sudo ./l4t_initrd_flash.sh --erase-all jetson-orin-nano-devkit-super internal
```

Una vez que el flasheo se complete, el dispositivo arrancará automáticamente.

:::info
Consejos: Hacer copia de seguridad y restaurar la imagen del sistema

- Para hacer una copia de seguridad de la imagen, pon el dispositivo en modo de recuperación y ejecuta:

  ```bash
  sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit-super
  ```

- Para flashear usando la imagen de respaldo, pon el dispositivo en modo de recuperación y ejecuta:

  ```bash
  sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit-super
  ```
:::

</TabItem>

</Tabs>

## Interfaces CAN

Dado que hay un transceptor CAN en la placa carrier A603, no necesitas un transceptor adicional como en el kit de desarrollo.

**Paso1.** Instala `devmem2` para escribir valores en los registros:

```sh
sudo apt-get install devmem2
```

**Paso2.** Escribe los valores de acuerdo con [aquí](https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/HR/ControllerAreaNetworkCan.html#jetson-platform-details).

```sh
sudo devmem2 0x0c303010 w 0xc400
sudo devmem2 0x0c303018 w 0xc458
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/send1.png"/>
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/send2.png"/>
</div>

**Paso3.** Cargar los módulos del kernel:

```bash
sudo modprobe can
sudo modprobe can_raw
sudo modprobe mttcan
```

Después de cargar estos módulos, deberías poder ver estos registros en `sudo dmesg`:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/check_can.png"/>
</div>

**Paso4.** Levantar la interfaz can0:

```sh
sudo ip link set can0 type can bitrate 500000
```

Opcionalmente, puedes cambiar la velocidad de transmisión a 1000000. Luego, levanta can0:

```sh
sudo ip link set can0 up
```

Comprueba la interfaz con `ifconfig`:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/ifconfig.png"/>
</div>

**Paso5.** Enviar datos (requiere tener instalado can-utils). En el otro lado, usamos un MCU con una placa de expansión CAN para recibir datos.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/hardware.png"/>
</div>

Ejecuta `cansend can0 123#11.22.33.50` en la terminal de Jetson:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/cansend.png"/>
</div>

**Paso 6.** Recepción de datos. En el otro lado, utilizamos un MCU con una placa de expansión CAN para enviar datos.

Ejecuta `candump can0` en la terminal de Jetson:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/candump.png"/>
</div>



## Recursos

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
