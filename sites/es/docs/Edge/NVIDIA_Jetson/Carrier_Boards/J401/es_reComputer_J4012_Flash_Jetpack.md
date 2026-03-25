---
description: Flashear JetPack en reComputer J4012 (placa portadora J401)
title: Flashear Jetpack
keywords:
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_J4012_Flash_Jetpack
sku: 102110769, 102110770
last_update:
  date: 6/12/2024
  author: Lakshantha/Youjiang
createdAt: '2023-03-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/reComputer_J4012_Flash_Jetpack/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Flashear el sistema operativo JetPack en la placa portadora J401

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/recomputer-j401.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J401-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-without-Power-Adapter-p-5637.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

La placa portadora J401 es una potente placa de expansión que admite módulos NVIDIA Jetson Orin NX/Nano. Cuenta con 1 puerto GbE, 1 CAN para transferencia de datos, M.2 Key M para SSD, M.2 Key E para WiFi/BlueTooth, 2 CSI y 1 HDMI para captura y visualización de vídeo de alta calidad. También incluye 4 puertos USB 3.2, un ventilador, RTC y una fuente de alimentación flexible de 9-19V. Todo esto la hace fiable para una variedad de sistemas de automatización industrial, creando potentes aplicaciones de IA.

## Características

- **Placa portadora de rendimiento excepcional:** Admite el módulo NVIDIA Jetson Orin NX/Nano, aprovechando una potente capacidad de cómputo para abordar tareas difíciles con facilidad
- **Conectividad versátil:** Ofrece 1 puerto Gigabit Ethernet para redes, 4 puertos USB 3.2 Type-A (10Gbps), 1 puerto USB2.0 Type-C, 1 conector CAN para transferencia rápida de datos
- **Almacenamiento flexible y expansión inalámbrica:** Incorpora 1 ranura M.2 Key M 2280 y 1 ranura M.2 Key E, ofreciendo amplio espacio para un almacenamiento flexible y expansión de conectividad inalámbrica
- **Periféricos avanzados compatibles:** Integra 2 conectores de cámara CSI de 15 pines, 1 HDMI 2.1, 1 ventilador y 1 RTC para múltiples periféricos
- **Amplio rango de voltajes de entrada:** De 9-19V CC, proporcionando flexibilidad en las opciones de fuente de alimentación

## Especificaciones

<table>
  <thead>
    <tr>
      <th>Especificaciones</th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3010-w-o-power-adapter-p-5631.html?queryID=e8d0ae9b2e338e8a860f07dacef58f6e&objectID=5631&indexName=bazaar_retailer_products">reComputer J3010</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html">reComputer J3011</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4011-w-o-power-adapter-p-5629.html?queryID=5577f61da645361a7aad9179bc04efc2&objectID=5629&indexName=bazaar_retailer_products">reComputer J4011</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html?queryID=639ef60cde4a38ccc9ff2f82070d4854&objectID=5628&indexName=bazaar_retailer_products">reComputer J4012</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Módulo</td>
      <td>Jetson Orin Nano 4GB</td>
      <td>Jetson Orin Nano 8GB</td>
      <td>Jetson Orin NX 8GB</td>
      <td>Jetson Orin NX 16GB</td>
    </tr>
    <tr>
      <td>Rendimiento de IA</td>
      <td>20 TOPS</td>
      <td>40 TOPS</td>
      <td>70 TOPS</td>
      <td>100 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>GPU NVIDIA Ampere de 512 núcleos con 16 Tensor Cores</td>
      <td>GPU NVIDIA Ampere de 1024 núcleos con 32 Tensor Cores</td>
      <td colSpan={2}>GPU NVIDIA Ampere de 1024 núcleos con 32 Tensor Cores</td>
    </tr>
    <tr>
      <td>Frecuencia máxima de GPU</td>
      <td colSpan={2}>625 MHz</td>
      <td>765 MHz</td>
      <td>918 MHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan={2}>CPU Arm® Cortex®-A78AE v8.2 de 6 núcleos y 64 bits<br />1.5MB L2 + 4MB L3</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 de 6 núcleos y 64 bits 1.5MB L2 + 4MB L3</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 de 8 núcleos y 64 bits 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Frecuencia máxima de CPU</td>
      <td colSpan={2}>1.5 GHz</td>
      <td colSpan={2}>2 GHz</td>
    </tr>
    <tr>
      <td>Memoria</td>
      <td>4GB 64-bit LPDDR5<br />34 GB/s</td>
      <td>8GB 128-bit LPDDR5<br />68 GB/s</td>
      <td>8GB 128-bit LPDDR5 102.4GB/s</td>
      <td>16GB 128-bit LPDDR5 102.4GB/s</td>
    </tr>
    <tr>
      <td>Acelerador DL</td>
      <td colSpan={2}>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>Frecuencia máxima de DLA</td>
      <td colSpan={2}>/</td>
      <td colSpan={2}>614 MHz</td>
    </tr>
    <tr>
      <td>Acelerador de visión</td>
      <td colSpan={2}>/</td>
      <td colSpan={2}>1x PVA v2</td>
    </tr>
    <tr>
      <td>Almacenamiento</td>
      <td colSpan={4}>SSD NVMe de 128GB</td>
    </tr>
    <tr>
      <td>Codificador de vídeo</td>
      <td colSpan={2}>1080p30 compatible con 1-2 núcleos de CPU</td>
      <td colSpan={2}>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de vídeo</td>
      <td colSpan={2}>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan={2}>1x 8K30 (H.265) | 2x 4K60 (H.265) | 4x 4K30 (H.265)<br />9x 1080p60 (H.265) | 18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td colSpan={4}>1* HDMI 2.1</td>
    </tr>
    <tr>
      <td>Cámara CSI</td>
      <td colSpan={4}>2* CSI （2-lane 15pin）</td>
    </tr>
    <tr>
      <td>Red</td>
      <td colSpan={4}>1* Gigabit Ethernet (10/100/1000M)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={4}>4* USB 3.2 Type-A (10Gbps); 1* USB2.0 Type-C (Device Mode)</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td colSpan={4}>1* M.2 Key M</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td colSpan={4}>1* M.2 Key E</td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td colSpan={4}>1* conector de ventilador de 4 pines (5V PWM)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={4}>1* CAN</td>
    </tr>
    <tr>
      <td>Puerto multifuncional</td>
      <td colSpan={4}>1* cabecera de expansión de 40 pines, 1* cabecera de control y UART de 12 pines</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={4}>RTC de 2 pines, zócalo RTC (compatible con CR1220 pero no incluido)</td>
    </tr>
    <tr>
      <td>Alimentación</td>
      <td colSpan={4}>9-19V</td>
    </tr>
    <tr>
      <td>Fuente de alimentación</td>
      <td colSpan={4}>Adaptador de corriente no incluido</td>
    </tr>
    <tr>
      <td>Temperatura</td>
      <td colSpan={4}>-10℃~60℃</td>
    </tr>
    <tr>
      <td>Mecánico</td>
      <td colSpan={4}>130mm x120mm x 58.5mm</td>
    </tr>
  </tbody>
</table>

## Descripción general del hardware

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-J4012/6.png"/></div>

## Flashear JetPack

Aquí mostraremos cómo flashear [Jetpack](https://developer.nvidia.com/embedded/jetpack) en un SSD NVMe conectado al reComputer J4012/ J4011/ J3010 y J3011. Todos estos dispositivos incluyen en su interior la placa portadora J401 y el procedimiento de flasheo es el mismo para todos.

La serie reComputer J40/ J30 viene con JetPack 5.1 preinstalado en el SSD NVMe incluido, por lo que no es necesario flashearlo. Sin embargo, si quieres volver a flashearlo con JetPack, puedes seguir esta guía.

### Módulo compatible

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5554.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5552.html)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5523.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html)

### Requisitos previos

- Ordenador host con Ubuntu
- reComputer J4012/ J4011/ J3010 o J3011
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

### Entrar en modo de recuperación forzada

:::note

- No recomendamos utilizar máquinas virtuales ni Ubuntu con arquitectura ARM para flashear.
- Antes de continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en modo de recuperación forzada.

:::

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/j401_set_recovery.gif" /></div>

<details>

<summary> Paso a paso </summary>

**Paso 1.** Utiliza un cable puente para conectar el pin **FC REC** y el pin **GND**.

<table align="center">
<thead>
  <tr>
    <th> </th>
    <th>Cabecera de botones</th>
    <th>Descripción</th>
    <th>Cabecera de botones</th>
    <th>Descripción</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="6"><div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/reComputer-J4012/1.png"/></div></td>
    <td>1</td>
    <td>PWR BTN</td>
    <td>7</td>
    <td>AUTO ON</td>
  </tr>
  <tr>
    <td>2</td>
    <td>GND</td>
    <td>8</td>
    <td>DIS</td>
  </tr>
  <tr>
    <td>3</td>
    <td>FC REC</td>
    <td>9</td>
    <td>UART TXD</td>
  </tr>
  <tr>
    <td>4</td>
    <td>GND</td>
    <td>10</td>
    <td>UART RXD</td>
  </tr>
  <tr>
    <td>5</td>
    <td>SYS RET</td>
    <td>11</td>
    <td>LED +</td>
  </tr>
  <tr>
    <td>6</td>
    <td>GND</td>
    <td>12</td>
    <td>LED -</td>
  </tr>
</tbody>
</table>

**Paso 2.** Enciende el reComputer conectando el cable incluido desde el adaptador de corriente y conecta la placa al PC host con Ubuntu con un cable de transmisión de datos USB Type-C

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/2.png"/></div>

**Paso 3.** En el PC host con Linux, abre una ventana de Terminal e introduce el comando `lsusb`. Si el contenido devuelto incluye una de las siguientes salidas según el Jetson SoM que utilices, entonces la placa está en modo de recuperación forzada.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

La siguiente imagen es para Orin NX 16GB

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"/></div>

**Paso 4.** Retira el cable puente

</details>
<!-- 
### Flash the device with a single command

<details>

<summary> Flash the device with a single command. </summary>

The reComputer Jetson J30/40 has launched a one-click flashing script, which supports flashing Jetpack 5.1.1, 5.1.2 and 6.0. Currently, the one-click flashing for Jetpack 6.1 and other series of reComputer Jetson is under testing and will be available to everyone in the near future.

```bash
wget -O ./flashing.sh https://files.seeedstudio.com/OSHW_Jetson/flashing.sh  && sudo chmod 777 ./flashing.sh && ./flashing.sh
```

<div class="video-container">
<iframe width="960" height="480" src="https://www.youtube.com/embed/_YfpJAhhT-g?si=OJxCcPqWauYEp9LR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::caution
Disclaimer: The one-click flashing script aims to make jetpack flashing quicker. The current version is a beta one and may have many problems. We hope for your understanding. If there are flashing issues, follow the `Flash The Device Step by Step` below and give feedback in our [Discord Jetson channel](https://discord.com/channels/862602258452578314/930732339624026152). We'll fix them promptly and improve this function in the near future.
:::

</details> -->

### Flashear el dispositivo paso a paso

:::note
Antes de continuar con el flasheo, hay que tener en cuenta que el módulo Jetson Orin NX solo es compatible con JetPack 5.1 y superiores, mientras que el módulo Jetson Orin Nano solo es compatible con JetPack 5.1.1 y superiores.
:::

En primer lugar, instala las siguientes dependencias necesarias en el PC host con Ubuntu antes de continuar con el flasheo de JetPack.

```sh
sudo apt install qemu-user-static sshpass abootimg nfs-kernel-server libxml2-utils binutils -y
```

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution
NVIDIA ha actualizado la DRAM utilizada en sus módulos. Para garantizar la compatibilidad con los nuevos módulos, hemos actualizado JetPack en consecuencia. La versión actualmente estable y compatible es `JetPack 5.1.3`.
Si la DRAM de tu módulo es de `Hynix` (esto se puede identificar por las marcas en el encapsulado del chip), se recomienda flashear `JetPack 5.1.3`.
:::

<Tabs>
<TabItem value="JP5.1.1" label="JP5.1.1">

Aquí utilizaremos NVIDIA L4T 35.3.1 para instalar Jetpack 5.1.1 en el reComputer

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3531) los controladores de NVIDIA en el PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

**Paso 2:** Extrae **Jetson_Linux_R35.3.1_aarch64** y **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64** navegando a la carpeta que contiene estos archivos, aplica los cambios e instala los prerrequisitos necesarios

```sh
tar xf Jetson_Linux_R35.3.1_aarch64
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Paso 3 (Opcional):** Configura tu nombre de usuario, contraseña y nombre de host para que no necesites introducirlos en el asistente de instalación de Ubuntu después de que el dispositivo termine de arrancar

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 4:** Flashea el sistema en el NVMe SSD

```sh
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

Ahora puedes conectar el ratón, el teclado y el monitor al dispositivo Jetson. ¡Estará listo para usar!

:::tip
Si tu dispositivo Jetson tarda mucho en abrir el escritorio, vuelve a conectar la fuente de alimentación.
:::

**Paso 5 (Opcional):** Instalar Nvidia Jetpack SDK

Abre la terminal en el **dispositivo Jetson** y ejecuta los siguientes comandos:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

</TabItem>

<TabItem value="JP5.1.2" label="JP5.1.2">

Aquí utilizaremos NVIDIA L4T 35.4.1 para instalar Jetpack 5.1.2 en el reComputer

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3541) los controladores de NVIDIA en el PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

**Paso 2:** Extrae **Jetson_Linux_R35.4.1_aarch64** y **Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64** navegando a la carpeta que contiene estos archivos, aplica los cambios e instala los prerrequisitos necesarios

```sh
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

Ahora necesitamos aplicar un parche de NVIDIA que es necesario para JP5.1.2 y se explica [aquí](https://docs.nvidia.com/jetson/archives/r35.4.1/ReleaseNotes/Jetson_Linux_Release_Notes_r35.4.1.pdf) en la sección 4.2.3 de las notas de la versión oficiales de NVIDIA JetPack.

**Paso 3:** Navega al siguiente directorio

```sh
cd Linux_for_Tegra/bootloader/t186ref/BCT
```

**Paso 4:** Abre el archivo **"tegra234-mb2-bct-scr-p3767-0000.dts"** y añade las siguientes líneas en la sección **tfc**

```sh
tfc {
    reg@322 { /* GPIO_M_SCR_00_0 */
    exclusion-info = <2>;
    value = <0x38008080>;
    };
```

**Paso 5 (Opcional):** Navega al directorio **"Linux_for_Tegra"** e introduce el siguiente comando para configurar tu nombre de usuario, contraseña y nombre de host para que no necesites introducirlos en el asistente de instalación de Ubuntu después de que el dispositivo termine de arrancar

```sh
cd Linux_for_Tegra
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 6:** Flashea el sistema en el NVMe SSD

```bash

cp p3509-a02+p3767-0000.conf p3509-a02-p3767-0000.conf
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1   -c tools/kernel_flash/flash_l4t_nvme.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg"   --showlogs --network usb0 p3509-a02-p3767-0000 external

```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

Ahora puedes conectar el ratón, el teclado y el monitor al dispositivo Jetson. ¡Estará listo para usar!

:::tip
Si tu dispositivo Jetson tarda mucho en abrir el escritorio, vuelve a conectar la fuente de alimentación.
:::

**Paso 7 (Opcional):** Instalar Nvidia Jetpack SDK

Abre la terminal en el **dispositivo Jetson** y ejecuta los siguientes comandos:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

</TabItem>

<TabItem value="JP5.1.3" label="JP5.1.3">

Aquí instalaremos Jetpack 5.1.3 en el reComputer.

**Paso 1:** Descarga la imagen del sistema en tu PC con Ubuntu correspondiente al módulo Jetson que estás utilizando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Enlace de descarga</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eaf_S-Dg_uxNkyRvriYIez4B6pl6VjO7aRNwAJ2DDDKjaA?e=Bl1p1G" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>37F99E90A746D07242EE17E2A74A3336490E997457DE0E9FC15A1E35D347543B</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcAN8eoa1m1MvKCN4p4VkMIBMZWuIj4OFrcH4uUx0Amxvg?e=Re90iJ" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>4FDD5F05EE83F425AD1D8E2768BDF35FA68D3F1143B09C2FB9537CBFD1A9D5EC</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZnkTHuxWIxHtwNs5mzjnPIBiFuB-Ym8zYVJb13Cnl0uqg?e=2U9i4S" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>6A002620B6E40673A39710F0ECC1C56CB5750480B799F97BB7DE4A5B6F49C527</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERwQtvZuYzdAoue4OzAH5kUBah_jgt9sPTNj2CeFRZTdNg?e=lbFjb6" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>63A3D59185BDB286452CA7774DD528F5087249B8065D902C9181703010B7836A</td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en el wiki, se confirma que el firmware que descargaste está completo e intacto.
:::

**Paso 2:** Extrae el archivo de imagen descargado:

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Paso 3:** Navega al directorio descomprimido y ejecuta el siguiente comando para grabar el sistema Jetpack en el NVMe SSD:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
El comando de flasheo puede ejecutarse durante 2-10 minutos.
:::

**Paso 4:** Conecta el J401 a una pantalla usando el conector HDMI de la placa y completa la configuración inicial.

:::info
Completa la **System Configuration** según tus necesidades.
:::

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

Aquí usaremos NVIDIA L4T 36.3 para instalar Jetpack 6.0 en el reComputer

**Paso 1:** Descarga la imagen del sistema en tu PC con Ubuntu correspondiente al módulo Jetson que estás utilizando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Enlace de descarga 1</th>
      <th>Enlace de descarga 2</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EavQHXoSEg9PuLs4vuujXLcB0-GW6Ti1zHGL2UHzgS6TWg?e=J7oRrf" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>
        <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EbEZRxHDtgBDjBrHK_7ltfEB6JBa3VGXLx3meNc0OJUL_g?e=8MNsTg" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>20b38d9524327fd714c37cb293036006e070b5335d6b4f6978a862be51c3db52</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcfUdbmSiOBFo_Po-Cui3jkBDORKexZ4S43Jde5XApqdeQ?e=zqealW" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQawJy3jmKBAmJgHght-vVUBHbsC3vtlvMsYfW7vsie3LQ?e=vor3t3" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>da966e7616ed86b45e184b6db9c3eb81e779a5f4524f6c3c5610e56c53532fe1</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EauK-aXvruxHsC1-bAmTwZkBNB0PsvPX6S6oV4Q1UrAUFw?e=rytWvU" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EeJP8SNF76BKiJg2e-FKNd4BhJwlWiMbLcT6Y286tRO7JQ?e=ct6qLf" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>e0fa101c5df6f507d123c2332e9fedea0ac54f8a5253cb28e71fdff01147fa68</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcHfrgY9GxVNiwGh6YTB50cBCc5QcKgnGpTZQfv94x4VNw?e=Rl73Zh" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERQJluPq9X1LmpLXTSGZVMwBVg9ikWw8veG2aOdHv504Gw?e=hujab4" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>80ebeac0a843baa2c3104ee6341d44f39a2cfab1c9c725e176c7b2a219b79dfc</td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en el wiki, se confirma que el firmware que descargaste está completo e intacto.
:::

**Paso 2:** Extrae el archivo de imagen descargado:

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Paso 3:** Navega al directorio descomprimido y ejecuta el siguiente comando para grabar el sistema Jetpack en el NVMe SSD:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
El comando de flasheo puede ejecutarse durante 2-10 minutos.
:::

**Paso 4:** Conecta el J401 a una pantalla usando el conector HDMI de la placa y completa la configuración inicial:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Completa la **System Configuration** según tus necesidades.
:::

**Paso 5:** Después de iniciar el sistema, debes ejecutar el siguiente comando para volver a activar el controlador de la tarjeta de red inalámbrica:

```bash
sudo rm /lib/modules/5.15.136-tegra/build
sudo ln -s /usr/src/linux-headers-5.15.136-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source/ /lib/modules/5.15.136-tegra/build
sudo apt install -y iwlwifi-modules
```

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Aquí usaremos NVIDIA L4T 36.4 para instalar Jetpack 6.1 en el reComputer

**Paso 1:** Descarga la imagen del sistema en tu PC con Ubuntu correspondiente al módulo Jetson que estás utilizando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Enlace de descarga</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAeJrT8r6rJSKVpp2_32UtQAZJzy4wNyCuHqVSCy0f-q4U?e=84CkEW" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> b848e327b87c408565b899a11c52022b42df6de4f3dce1e5470cb2a7baccc898 </td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB9gz3ZuAZ1Rb_ml6eY-5eCAV-k2piT1qWtbedMSEUfyzk?e=LTL5kI" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> 3839c99fc9e2da1f35de824c42b7bb56f9660d8f4a6ce68b196c6cb50d5d4fb4 </td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDfJ9e2HfndQKxZp7e2_A_0Ab97_Oe0zA53nK6AZ6EHDYs?e=B3tvCO" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> a0863e7209351f9165cf6bd2d756a6a726b2e8fc1fa54b5d66279d5b136a3a33 </td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDrUdIOhLv6SrDpKbnUCnfgAR9URACZr46gifnBSEdOphA?e=TNUkWg" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> a40edfbcda9a7a07fbf72ca4e3149d171236f5ede2c4e3a5e243da77562f9b13 </td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en el wiki, se confirma que el firmware que descargaste está completo e intacto.
:::

**Paso 2:** Extrae el archivo de imagen descargado:

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nx-16g-j401-6.1-36.4.0-2026-02-07.tar.gz
```

**Paso 3:** Navega al directorio descomprimido y ejecuta el siguiente comando para grabar el sistema Jetpack en el NVMe SSD:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
El comando de flasheo puede ejecutarse durante 2-10 minutos.
:::

**Paso 4:** Conecta el J401 a una pantalla usando el conector HDMI de la placa y completa la configuración inicial:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Completa la **System Configuration** según tus necesidades.
:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

Aquí usaremos NVIDIA L4T 36.4.3 para instalar Jetpack 6.2 en el reComputer

:::danger
Si estás utilizando un módulo **Orin NX 16GB/8GB**, **no habilites el modo MAXN SUPER**.
La capacidad de refrigeración de la placa carrier reComputer J401 es insuficiente para soportarlo, y forzar este modo puede provocar daños permanentes en el módulo.
:::

**Paso 1:** Descarga la imagen del sistema en tu PC con Ubuntu correspondiente al módulo Jetson que estás utilizando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Enlace de descarga</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDTDQf5Gh0LSIg9QSsHPNgBAcegrhbyGeZYrQF7kMpdgFQ?e=ahwlIc" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>b9529f008cf9a65460db3ee17736db971b8d110049f9f6ea8ecc8fe4d1691869</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDR6PGcF5i6Q5tWR9dJa1vSAfZrQUfHfQhTFe2DOeMKXuo?e=lf88Um" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>b7106b4f8c5835011040c071dd14e1144b5298af300f920e44517b99c183ed05</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDM6v_9Ggo4R5OXqj4R1T0PAf_uevclLKzjmj8XpkX0_jQ?e=B5oC3m" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> c2247262dec1379fd4494def6a6ed2d4414605a8dcb902c6d6afbb94a5e48499 </td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQA9g-hqq4_KR5bdPc2PgfgmAYq3mRxdRBkgrUtZBOm-jtE?e=WMICt2" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> 1d570b54853bba4ecc115789d1b03c5ba07b34344f7616dfa3c3772c9ff37e64 </td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en el wiki, se confirma que el firmware que descargaste está completo e intacto.
:::

:::note
Ten en cuenta que, debido al aumento del consumo de energía y la generación de calor después de habilitar `super mode`, las [reComputer J4011](https://www.seeedstudio.com/reComputer-J4011-p-5585.html) y [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6Iko0MDEyIiwiY19zZWFyY2hfcmVzdWx0X3BvcyI6MiwiY190b3RhbF9yZXN1bHRzIjo4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D) no pueden funcionar de manera estable en el modo más alto. Por lo tanto, esta actualización no incluye estos dos productos.
Actualmente estamos diseñando una nueva versión de reComputer. ¡Mantente atento!
:::

**Paso 2:** Extrae el archivo de imagen descargado:

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.2-36.4.3-2025-04-07.tar.gz
```

**Paso 3:** Navega al directorio descomprimido y ejecuta el siguiente comando para grabar el sistema jetpack en el SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
El comando de flasheo puede ejecutarse durante 2-10 minutos.
:::

**Paso 4:** Conecta la J401 a una pantalla usando el conector HDMI de la placa y completa la configuración inicial:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Completa la **System Configuration** según tus necesidades.
:::

</TabItem>

</Tabs>

<!-- Code END -->

## Recursos

- [Hoja de datos de reComputer J30x](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [Hoja de datos de reComputer J40x](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [Esquemático de reComputer J30/J40](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [Archivo 3D de reComputer J30/J40](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Catálogo de series Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Casos de éxito de Seeed Studio Edge AI](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Comparación de series Seeed Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Resumen de dispositivos Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Ejemplos de Jetson](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-para-principiantes](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

<JetsonLeadQuote
  buttonText="Solicitar presupuesto personalizado"
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
