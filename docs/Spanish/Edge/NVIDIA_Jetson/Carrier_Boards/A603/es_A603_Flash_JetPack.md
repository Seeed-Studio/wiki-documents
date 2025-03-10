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

# Flashear JetPack OS en la Carrier Board A603

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/A603_Carrier_Board.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A603-Carrier-Board-for-Jetson-Orin-NX-Nano-p-5635.html"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue una ahora 🖱️</font></span></strong>
    </a>
</div>

La Carrier Board A603 es una potente placa de extensión que admite módulos Jetson Orin™ NX/Nano. Cuenta con un puerto de 1 GbE, M.2 Key M para SSD, M.2 Key E para WiFi/BlueTooth, CSI y HDMI para captura y visualización de vídeo de alta calidad. También contiene 4 puertos USB, ventilador, RTC y fuente de alimentación flexible de 9-20 V. Gracias a su diseño compacto, puede ser flexible y fácil de integrar en una variedad de aplicaciones informáticas de vanguardia. En esta wiki, le mostraremos cómo actualizar [Jetpack](https://developer.nvidia.com/embedded/jetpack) a una SSD NVMe y una unidad flash USB conectada a la placa portadora A603.

## Módulos soportados
- [Módulo NVIDIA® Jetson Orin™ Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html) 
- [Módulo NVIDIA® Jetson Orin™ Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer) 
- [Módulo NVIDIA® Jetson Orin™ NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html) 
- [Módulo NVIDIA® Jetson Orin™ NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html) 

## Prerequisitos

- PC con Ubuntu OS
- Carrier Board A603 con módulo Jetson Orin
- Cable de datos Micro-USB

## Entrar en modo de recuperación forzado

:::nota
Antes de continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en modo de recuperación forzada.
:::

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/recovery.gif" /></div>

<details>

<summary> Tutorial detallado paso a paso </summary>

**Paso 1.** Conecta un cable USB entre la entrada micro-USB de la placa y la PC host con Linux OS

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A603/2.jpg" /></div>

**Paso 2.** Conecta un jumper de puente entre el pin 3 y el pin 4 del cabezal de 14 pines de la Carrier Board A603.

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/A603/3.jpg" /></div>

**Paso 3.** Conecta el adaptador de corriente al JACK DC de la placa para encenderla.

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/A603/4.jpg" /></div>

**Paso 4.** En la PC host con Linux, abre una terminal e ingresa el comando `lsusb`. Si el contenido devuelto tiene una de las siguientes salidas según el Jetson SoM que utilices, entonces la placa entró correctamente en modo de recuperación forzada.

- Para la Orin NX 16GB: **0955:7323 NVidia Corp**
- Para la Orin NX 8GB: **0955:7423 NVidia Corp**
- Para la Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para la Orin Nano 4GB: **0955:7623 NVidia Corp**

La imágen mostrada a continuación corresponde a la Orin NX 16GB.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/A607/4.png" /></div>

**Paso 5.** Quita el jumper que utilizaste como puente entre el pin 3 y el pin 4.

</details>

## Descargar los Drivers periféricos

En primer lugar, necesitas instalar los Drivers periféricos para esta placa. Estos son necesarios para que algunos periféricos del hardware funcionen en la placa. Haz click en los enlaces listados a continuación para descargar los controladores según el modelo de tu dispositivo Jetson.

<div class="table-center">
<table style={{textAlign:'center'}}>
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
      <td rowSpan={2}>Jetson Orin NX 8GB/ 16GB</td>
      <td>5.1</td>
      <td>35.2.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-NX/A603-Orin-NX-JP5.1.zip/download">Descarga</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-NX/A603-Orin-NX-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Descarga</a></td>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A603-Carrier-Board/Orin-Nano/A603-Orin-Nano-JP5.1.1.zip/download">Descarga</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.2</td>
      <td>35.4.1</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZC4-Ci8o0dNkc0wWWlphf0BEQHp2nV-TM2Qpn7WwmpB1g?e=heBSc2">Descarga</a></td>
    </tr>
        <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>5.1.4</td>
      <td>35.6.0</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EShnCiOVY3ZPqptpnJZ0tlABemb3chgmuUZyuvsqJpHpcA?e=hXxCRr">Descarga</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY0H4iNmfUxPjCfiwfi59NEB8KQ9HuYEiu_0VLnsJVPjVw?e=oR4LYr">Descarga</a></td>
    </tr>
    <tr>
      <td>Jetson Orin NX 8GB/ 16GB,<br />Jetson Orin Nano 4GB/ 8GB</td>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdmS2OfqVg5IpQt9MeiBoT0BdS3Uft6DlJ1GPTJqZHoVNQ?e=ocmcHG">Descarga</a></td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host Ubuntu, abre la terminal y ejecuta el comando `sha256sum <Archivo>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado [aquí](https://seeedstudio88-my.sharepoint.com/:x:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXljqlpW3ZNNplIPBwJuyvsBdkW92geUmV7_7VN4SDlggA?e=Xea32u), confirma que el firmware que descargaste está completo e intacto.
:::

**Nota:** Actualmente los controladores proporcionados son los únicos disponibles. Seguiremos actualizando los controladores en el futuro con el lanzamiento de nuevas versiones de JetPack.

## Flashear la Jetson 

:::nota
Antes de pasar al flasheo, cabe señalar que el módulo Jetson Orin NX solo admite JetPack 5.1 y superior, mientras que el módulo Jetson Orin Nano solo admite JetPack 5.1.1 y superior.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1 for Jetson Orin NX" label="JP5.1.1 for Jetson Orin NX">

Aquí instalaremos **Jetpack 5.1.1** en la Carrier Board A603 con el módulo Jetson Orin NX.

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3531) los controladores NVIDIA en la PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta que los controladores NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/6.png" /></div>

**Paso 3:** Extre **Jetson_Linux_R35.3.1_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2** navegando a la carpeta que contiene estos archivos, aplica los cambios e instala los pre - requisitos necesarios

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Paso 4:** Extrae **A603-Orin-NX-JP5.1.1.zip**. Aquí instalamos adicionalmente el paquete **unzip** que es necesario para descomprimir el archivo .zip.

```sh
cd ..
sudo apt install unzip 
unzip A603-Orin-NX-JP5.1.1.zip
```

Aquí se te preguntará si deseas reemplazar los archivos. Escribe **A** y presiona **ENTER** para reemplazar los archivos necesarios

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/7.jpg" /></div>

**Paso 5:** Configura yu nombre de usuario, contraseña y nombre de host para que no necesites ingresar al asistente de instalación de Ubuntu después de que el dispositivo termine de iniciarse.

Utiliza primero `cd Linux_for_Tegra` para asegurarte de que estás en el directorio correcto.

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 6:** Actualiza el sistema a NVMe SSD o unidad flash USB

```sh
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

Si el proceso de flasheado concluyó exitosamente, deberías ver el siguiente output:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>
<TabItem value="JP5.1.1 for Jetson Orin Nano" label="JP5.1.1 for Jetson Orin Nano">

Aquí usaremos NVIDIA L4T **35.3.1** para instalar **Jetpack 5.1.1** en la Carrier Board A603 con el módulo Jetson Orin Nano.

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3531) los controladores NVIDIA en la PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta que los controladores NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/8.png" /></div>

**Paso 3:** Extrae **Jetson_Linux_R35.3.1_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2** navegando a la carpeta que contiene estos archivos, aplica los cambios e instala los requisitos previos necesarios

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Paso 4:** Extrae **A603-Orin-NX-JP5.1.1.zip**. Aquí instalamos adicionalmente el paquete **unzip** que es necesario para descomprimir el archivo .zip.

```sh
cd ..
sudo apt install unzip 
unzip A603-Orin-NX-JP5.1.1.zip
```

Aquí se te preguntará si deseas reemplazar los archivos. Escribe **A** y presiona **ENTER** para reemplazar los archivos necesarios

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/9.png" /></div>

**Paso 5:** Configura tu nombre de usuario, contraseña y nombre de host para que no necesites ingresar al asistente de instalación de Ubuntu después de que el dispositivo termines de iniciarse.

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 6:** Flashea el sistema a NVMe SSD o unidad flash USB

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Si el proceso de flasheado concluye exitosamente deberías ver el siguiente output:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>

<TabItem value="JP5.1.2" label="JP5.1.2">

Aquí instalaremos **Jetpack 5.1.2** en la Carrier Board A603 con el módulo Jetson Orin.

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3541) los controladores NVIDIA en la PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta que los controladores NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/jp512_files.png" /></div>

**Paso 3:** Extrae **Jetson_Linux_R35.4.1_aarch64.tbz2** y **Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2** navegando a la carpeta que contiene estos archivos, aplica los cambios e instala los requisitos previos necesarios.

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

**Paso 5:** Configura tu nombre de usuario, contraseña y nombre de host para que no necesites ingresar al asistente de instalación de Ubuntu después de que el dispositivo termine de iniciarse.

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 6:** Flashea el sistema a NVMe SSD.

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Si el flasheo concluye exitosamente deberías ver el siguiente output:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/flash_successful.png" /></div>

</TabItem>


<TabItem value="JP5.1.4" label="JP5.1.4">

Aquí instalaremos **Jetpack 5.1.4** en la Carrier Board A603 con el módulo Jetson Orin.

**Paso 1:** Descarga los controladores NVIDIA en la PC host:

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/jetson_linux_r35.6.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v6.0/release/tegra_linux_sample-root-filesystem_r35.6.0_aarch64.tbz2
```

**Paso 2:** Ensambla el paquete de Flasheado
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

**Paso 3:** Coloca el dispositivo en modo de recuperación. El dispositivo debe estar en modo de recuperación para flashear. Sigue estos pasos para ingresar al modo de recuperación:

1. Puentea el pin REC y el pin GND en la Carrier Board.
2. Conecta la Carrier Board a la PC mediante un cable de datos Micro USB.
3. Enciende el dispositivo.
4. En la PC, ejecuta el comando `lsusb` y verifica que el ID del producto es uno de los siguientes: 7323, 7423, 7523 o 7623. Esto indica que el dispositivo está en modo de recuperación:
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**Paso 4:** Flashea el dispositivo.

   ```bash
   sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
   ```

**Tips:** Haz una copia de seguridad del sistema y flashea utilizando la imagen de copia de seguridad

1. Si flasheaste el sistema en el SSD, ejecuta los siguientes comandos:
   - Para hacer una copia de seguridad de la imagen (requiere modo de recuperación):
     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -b jetson-orin-nano-devkit
     ```
   - Para flashear usando la imagen de respaldo (requiere modo de recuperación):
     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit
     ```
   Una vez completado, el dispositivo puede usarse con normalidad.

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

Aquí instalaremos **Jetpack 6.0** en la Carrier Board A603 con el módulo Jetson Orin.

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r363) los controladores NVIDIA en la PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Paso 2:** Mueve los controladores periféricos descargados anteriormente a la misma carpeta que los controladores NVIDIA. Ahora verás tres archivos comprimidos en la misma carpeta.

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
Luego, copia las tres carpetas `(bootloader, kernel, rootfs en A603-JP6.0.zip)` a la carpeta Linux_for_Tegra.


**Paso 5:** Aplica los cambios e instala los pre - requisitos necesarios.

```sh
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Paso 6:** Configura tu nombre de usuario, contraseña y nombre de host para que no necesites ingresar al asistente de instalación de Ubuntu después de que el dispositivo termine de iniciarse.

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 7:** Flashea el sistema a NVMe SSD.

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

Si el flasheo concluye exitosamente podrás observar el siguiente Output:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A603/flash_successful.png" /></div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Aquí instalaremos **Jetpack 6.1** en la Carrier Board A603 con el módulo Jetson Orin.

**Paso 1:** Descarga los controladores NVIDIA en la PC host:

```bash
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.0/release/Jetson_Linux_R36.4.0_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r36_release_v4.0/release/Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2
```

**Paso 2:** Ensambla el paquete de flasheo
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

**Paso 3:** Coloca el dispositivo en modo de recuperación. El dispositivo debe estar en modo de recuperación para flashear. Sigue estos pasos para ingresar al modo de recuperación:

1. Puentea el pin REC y el pin GND en la Carrier Board.
2. Conecta la Carrier Board a la PC mediante un cable de datos Micro USB.
3. Enciende el dispositivo.
4. En la PC, ejecuta el comando `lsusb` y verifica si el ID del producto es uno de los siguientes: 7323, 7423, 7523 o 7623. Esto indica que el dispositivo está en modo de recuperación:
   - 7323: Orin NX 16G
   - 7423: Orin NX 8G
   - 7523: Orin Nano 8G
   - 7623: Orin Nano 4G

**Paso 4:** Flashea el dispositivo.

```bash
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml"   --showlogs --network usb0 jetson-orin-nano-devkit internal
```

**Tips:** Haz una copia de seguridad del sistema y flashea utilizando la imagen de la copia de seguridad

1. Si flasheaste el sistema en el SSD, ejecuta los siguientes comandos:
   - Para hacer una copia de seguridad de la imagen (requiere modo de recuperación):
     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1  -b jetson-orin-nano-devkit
     ```
   - Para flashear usando la imagen de respaldo (requiere modo de recuperación):
     ```bash
     sudo ./tools/backup_restore/l4t_backup_restore.sh -e nvme0n1 -r jetson-orin-nano-devkit
     ```
   Una vez completado, puedes comenzar a utilizar la Carrier Board.

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
