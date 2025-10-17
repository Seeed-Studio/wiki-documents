---
description: A603 Carrier Board
title: A603 Carrier Board
keywords:
  - Edge
  - Jetson Orin
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_A603_Flash_System
last_update:
  date: 04/19/2023
  author: Lakshantha
---

# Flashear SO JetPack a la Placa Portadora A603

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/A603_Carrier_Board.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A603-Carrier-Board-for-Jetson-Orin-NX-Nano-p-5635.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>

La Placa Portadora A603 es una potente placa de extensión que soporta módulos Jetson Orin™ NX/Nano. Cuenta con puerto 1 GbE, M.2 Key M para SSD, M.2 Key E para WiFi/BlueTooth, CSI, y HDMI para captura y visualización de video de alta calidad. También contiene 4x puertos USB, ventilador, RTC, fuente de alimentación flexible de 9-20V. Por su diseño compacto, puede ser flexible y fácil de integrar en una variedad de aplicaciones de computación en el borde. En esta wiki, te mostraremos cómo flashear [Jetpack](https://developer.nvidia.com/embedded/jetpack) a un SSD NVMe y una unidad flash USB conectada a la Placa Portadora A603.

## Módulo Soportado
- [Módulo NVIDIA® Jetson Orin™ Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html) 
- [Módulo NVIDIA® Jetson Orin™ Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer) 
- [Módulo NVIDIA® Jetson Orin™ NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html) 
- [Módulo NVIDIA® Jetson Orin™ NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html) 

## Prerrequisitos

- PC Host Ubuntu
- Placa Portadora A603 con módulo Jetson Orin
- Cable de transmisión de datos Micro-USB

## Entrar al Modo de Recuperación Forzada

:::note
Antes de poder continuar con los pasos de instalación, necesitamos asegurarnos de que la placa esté en modo de recuperación forzada.
:::

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/recovery.gif" /></div>

<details>

<summary> tutorial detallado paso a paso </summary>

**Paso 1.** Conecta un cable USB entre el conector micro-USB de la placa y el PC host Linux

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A603/2.jpg" /></div>

**Paso 2.** Conecta un cable puente entre el pin3 y el pin4 del conector de 14 pines

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/A603/3.jpg" /></div>

**Paso 3.** Conecta el adaptador de corriente al JACK DC de la placa para encender la placa

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/A603/4.jpg" /></div>

**Paso 4.** En el PC host Linux, abre una ventana de Terminal e ingresa el comando `lsusb`. Si el contenido devuelto tiene una de las siguientes salidas según el SoM Jetson que uses, entonces la placa está en modo de recuperación forzada.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

La imagen de abajo es para Orin NX 16GB.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/A607/4.png" /></div>

**Paso 5.** Retira el cable puente.

</details>

## Descargar los controladores periféricos

Primero que todo, necesitas instalar los controladores periféricos para esta placa. Estos son necesarios para que algunos periféricos de hardware funcionen en la placa. Haz clic en los enlaces de abajo para descargar los controladores según el módulo Jetson

<div class="table-center">
<table style={{textAlign:'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Versión JetPack</th>
      <th>Versión L4T</th>
      <th>Enlace de Descarga</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Jetson Orin NX 8GB/ 16GB</td>
      <td>5.1</td>
      <td>35.2.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-NX/A603-Orin-NX-JP5.1.zip/download">Descargar</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-NX/A603-Orin-NX-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Descargar</a></td>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-Nano/A603-Orin-Nano-JP5.1.1.zip/download">Descargar</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.2</td>
      <td>35.4.1</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZC4-Ci8o0dNkc0wWWlphf0BEQHp2nV-TM2Qpn7WwmpB1g?e=heBSc2">Descargar</a></td>
    </tr>
        <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.4</td>
      <td>35.6.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EShnCiOVY3ZPqptpnJZ0tlABemb3chgmuUZyuvsqJpHpcA?e=hXxCRr">Descargar</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY0H4iNmfUxPjCfiwfi59NEB8KQ9HuYEiu_0VLnsJVPjVw?e=oR4LYr">Descargar</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdmS2OfqVg5IpQt9MeiBoT0BdS3Uft6DlJ1GPTJqZHoVNQ?e=ocmcHG">Descargar</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.2</td>
      <td>36.4.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQLFs4vd8N5Lp0nhbP_KU-gB6kYGlXu3_N3KLiL25ze52Q?e=CWhIaE">Descargar</a></td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256. 

En una máquina host Ubuntu, abre la terminal y ejecuta el comando `sha256sum <Archivo>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado [aquí](https://seeedstudio88-my.sharepoint.com/:x:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXljqlpW3ZNNplIPBwJuyvsBdkW92geUmV7_7VN4SDlggA?e=Xea32u), confirma que el firmware que descargaste está completo e intacto.
:::

**Nota:** Actualmente proporcionamos los controladores anteriores. Seguiremos actualizando los controladores en el futuro con el lanzamiento de nuevas versiones de JetPack.

## Flash a Jetson 

Aquí hay un video para flashear JetPack 6.1 en la placa portadora A603 + módulo Orin Nx 16GB. Puedes consultar el video y los pasos detallados a continuación para flashear tu dispositivo.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/qN4GxscUGW0" title="A603 JetPack6.1 Installation Walkthrough" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


:::note
Antes de proceder al flasheo, debe tenerse en cuenta que el módulo Jetson Orin NX solo soporta JetPack 5.1 y superior, mientras que el módulo Jetson Orin Nano solo soporta JetPack 5.1.1 y superior.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1 for Jetson Orin NX" label="JP5.1.1 for Jetson Orin NX">

Aquí instalaremos **Jetpack 5.1.1** en la Placa Portadora A603 con módulo Jetson Orin NX.

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3531) los controladores NVIDIA en la PC anfitriona. Los controladores requeridos se muestran a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta con los controladores NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/6.png" /></div>

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

Aquí preguntará si desea reemplazar los archivos. Escriba **A** y presione **ENTER** para reemplazar los archivos necesarios

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/7.jpg" /></div>

**Paso 5:** Configure su nombre de usuario, contraseña y nombre de host para que no necesite ingresar al asistente de instalación de Ubuntu después de que el dispositivo termine de arrancar.

Use `cd Linux_for_Tegra` primero para asegurarse de que está en el directorio correcto.

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo (nombre de usuario:"nvidia", contraseña:"nvidia", nombre del dispositivo:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 6:** Flashear el sistema a SSD NVMe o unidad flash USB

```sh
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

Verás la siguiente salida si el proceso de flasheo es exitoso

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>
<TabItem value="JP5.1.1 for Jetson Orin Nano" label="JP5.1.1 for Jetson Orin Nano">

Aquí usaremos NVIDIA L4T **35.3.1** para instalar **Jetpack 5.1.1** en la Placa Portadora A603 con el módulo Jetson Orin Nano

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3531) los controladores de NVIDIA en la PC anfitriona. Los controladores requeridos se muestran a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta con los controladores de NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

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

Aquí preguntará si desea reemplazar los archivos. Escriba **A** y presione **ENTER** para reemplazar los archivos necesarios

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/9.png" /></div>

**Paso 5:** Configure su nombre de usuario, contraseña y nombre de host para que no necesite ingresar al asistente de instalación de Ubuntu después de que el dispositivo termine de arrancar

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo (nombre de usuario:"nvidia", contraseña:"nvidia", nombre del dispositivo:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 6:** Flashear el sistema a SSD NVMe o unidad flash USB

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Verás la siguiente salida si el proceso de flasheo es exitoso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>

<TabItem value="JP5.1.2" label="JP5.1.2">

Aquí instalaremos **Jetpack 5.1.2** en la Placa Portadora A603 con el módulo Jetson Orin.

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3541) los controladores de NVIDIA en la PC anfitriona. Los controladores requeridos se muestran a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta con los controladores de NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/jp512_files.png" /></div>

**Paso 3:** Extrae **Jetson_Linux_R35.4.1_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2** navegando a la carpeta que contiene estos archivos, aplica los cambios e instala los prerrequisitos necesarios.

```sh
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Paso 4:** Extraer **A603-JP5.1.2.zip**. Aquí instalamos adicionalmente el paquete **unzip** que es necesario para descomprimir el archivo .zip.

```sh
cd ..
sudo apt install unzip 
unzip A603-JP5.1.2.zip
```

**Paso 5:** Configura tu nombre de usuario, contraseña y nombre de host para que no necesites ingresar al asistente de instalación de Ubuntu después de que el dispositivo termine de arrancar.

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo (nombre de usuario:"nvidia", contraseña:"nvidia", nombre del dispositivo:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 6:** Flashear el sistema al SSD NVMe.

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Verás la siguiente salida si el proceso de flasheo es exitoso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/flash_successful.png" /></div>

</TabItem>


<TabItem value="JP5.1.4" label="JP5.1.4">

Aquí instalaremos **Jetpack 5.1.4** en la Placa Portadora A603 con el módulo Jetson Orin.

**Paso 1:** Descarga los controladores de NVIDIA en la PC anfitriona:

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/jetson_linux_r35.6.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2
```

**Paso 2:** Ensamblar el Paquete de Flasheo
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

**Paso 3:** Poner el Dispositivo en Modo de Recuperación. El dispositivo debe estar en modo de recuperación para el flasheo. Sigue estos pasos para entrar en modo de recuperación:

1. Cortocircuita el pin REC y el pin GND en la placa portadora.
2. Conecta la placa portadora a la PC usando un cable de datos Micro USB.
3. Enciende el dispositivo.
4. En la PC, ejecuta `lsusb` y verifica si el ID del producto es uno de los siguientes: 7323, 7423, 7523, o 7623. Esto indica que el dispositivo está en modo de recuperación:
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**Paso 4:** Flashear el Dispositivo.

   ```bash
   sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
   ```

**Consejos:** Respaldar el Sistema y Flashear Usando la Imagen de Respaldo

1. Si flasheaste el sistema en el SSD, ejecuta los siguientes comandos:
   - Para respaldar la imagen (requiere modo de recuperación):
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

Aquí instalaremos **Jetpack 6.0** en la Placa Portadora A603 con el módulo Jetson Orin.

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r363) los controladores de NVIDIA en la PC anfitriona. Los controladores requeridos se muestran a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta con los controladores de NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/jp6.0_files.png" /></div>

**Paso 3:** Extrae **Jetson_Linux_R36.3.0_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2** navegando a la carpeta que contiene estos archivos.

```sh
sudo tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
```

**Paso 4:** Extraer **A603-JP6.0.zip**. Aquí instalamos adicionalmente el paquete **unzip** que es necesario para descomprimir el archivo .zip.

```sh
cd ..
sudo apt install unzip 
sudo unzip A603-JP6.0.zip
```
Luego, copia las tres carpetas `(bootloader, kernel, rootfs en A603-JP6.0.zip)` a la carpeta Linux_for_Tegra.


**Paso 5:** Aplica los cambios e instala los requisitos previos necesarios

```sh
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Paso 6:** Configura tu nombre de usuario, contraseña y nombre de host para que no necesites ingresar al asistente de instalación de Ubuntu después de que el dispositivo termine de arrancar.

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo (nombre de usuario:"nvidia", contraseña:"nvidia", nombre del dispositivo:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 7:** Flashear el sistema al SSD NVMe.

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Verás la siguiente salida si el proceso de flasheo es exitoso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/flash_successful.png" /></div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Aquí instalaremos **Jetpack 6.1** en la Placa Portadora A603 con el módulo Jetson Orin.

**Paso 1:** Descarga los controladores de NVIDIA en la PC anfitriona:

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.0/release/Jetson_Linux_R36.4.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.0/release/Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2
```

**Paso 2:** Ensamblar el Paquete de Flasheo
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

**Paso 3:** Poner el Dispositivo en Modo de Recuperación. El dispositivo debe estar en modo de recuperación para el flasheo. Sigue estos pasos para entrar en modo de recuperación:

1. Cortocircuita el pin REC y el pin GND en la placa portadora.
2. Conecta la placa portadora a la PC usando un cable de datos Micro USB.
3. Enciende el dispositivo.
4. En la PC, ejecuta `lsusb` y verifica si el ID del producto es uno de los siguientes: 7323, 7423, 7523, o 7623. Esto indica que el dispositivo está en modo de recuperación:
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**Paso 4:** Flashear el Dispositivo.

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml"   --showlogs --network usb0 jetson-orin-nano-devkit internal
```

:::info
Respaldar el Sistema y Flashear Usando la Imagen de Respaldo

Si flasheaste el sistema en el SSD, ejecuta los siguientes comandos:
   - Para respaldar la imagen (requiere modo de recuperación):
     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit
     ```
   - Para flashear usando la imagen de respaldo (requiere modo de recuperación):
     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit
     ```
   Una vez completado, el dispositivo puede arrancar en el sistema.
:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

Aquí instalaremos **Jetpack 6.2** en la Placa Portadora A603 con el módulo Jetson Orin.

**Paso 1:** Descarga los controladores de NVIDIA en la PC anfitriona:

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Jetson_Linux_r36.4.3_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.3/release/Tegra_Linux_Sample-Root-Filesystem_r36.4.3_aarch64.tbz2
```

**Paso 2:** Ensamblar el Paquete de Flasheo

Ten en cuenta que necesitamos poner el controlador de Nvidia y los controladores de periféricos en el mismo directorio, y luego abrir la terminal en ese directorio y ejecutar el siguiente código:

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

**Paso 3:** Poner el Dispositivo en Modo de Recuperación. El dispositivo debe estar en modo de recuperación para el flasheo. Sigue estos pasos para entrar en modo de recuperación:

1. Cortocircuita el pin REC y el pin GND en la placa portadora.
2. Conecta la placa portadora a la PC usando un cable de datos Micro USB.
3. Enciende el dispositivo.
4. En la PC, ejecuta `lsusb` y verifica si el ID del producto es uno de los siguientes: 7323, 7423, 7523, o 7623. Esto indica que el dispositivo está en modo de recuperación:
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**Paso 4:** Flashear el Dispositivo.

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit-super internal
```

:::info
Consejos: Respaldar el Sistema y Flashear Usando la Imagen de Respaldo

Si flasheaste el sistema en el SSD, ejecuta los siguientes comandos:
   - Para respaldar la imagen (requiere modo de recuperación):
     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit-super
     ```
   - Para flashear usando la imagen de respaldo (requiere modo de recuperación):
     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit-super
     ```
   Una vez completado, el dispositivo puede arrancar en el sistema.
:::

</TabItem>

</Tabs>


## Interfaces CAN

Dado que hay un transceptor CAN en la placa portadora A603, no necesitas un transceptor adicional como en el kit de desarrollo.

**Paso1.** Instala `devmem2` para escribir valores en los registros:
```sh
sudo apt-get install devmem2
```
**Paso 2.** Escribir valores según [aquí](https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/HR/ControllerAreaNetworkCan.html#jetson-platform-details).
```sh
sudo devmem2 0x0c303010 w 0xc400
sudo devmem2 0x0c303018 w 0xc458
```
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/send1.png"/>
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/send2.png"/>
</div>

**Paso 3.** Cargar módulos del kernel:
```bash
sudo modprobe can
sudo modprobe can_raw
sudo modprobe mttcan
```
Después de cargar estos módulos, deberías poder ver estos registros en `sudo dmesg`:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/check_can.png"/>
</div>

**Paso 4.** Activar la interfaz can0:
```sh
sudo ip link set can0 type can bitrate 500000
```
Opcionalmente, puedes cambiar la velocidad de bits a 1000000. Luego, activa can0:
```sh
sudo ip link set can0 up
```
Verifica la interfaz con `ifconfig`:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/ifconfig.png"/>
</div>

**Paso 5.** Enviando datos (requiere can-utils instalado). En el otro lado, usamos un MCU con placa de expansión CAN para recibir datos.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/hardware.png"/>
</div>

Ejecuta `cansend can0 123#11.22.33.50` en la terminal de jetson:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/cansend.png"/>
</div>

**Paso 6.** Recibiendo datos. En el otro lado, usamos un MCU con placa de expansión CAN para enviar datos.

Ejecuta `candump can0` en la terminal de jetson:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/candump.png"/>
</div>

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
