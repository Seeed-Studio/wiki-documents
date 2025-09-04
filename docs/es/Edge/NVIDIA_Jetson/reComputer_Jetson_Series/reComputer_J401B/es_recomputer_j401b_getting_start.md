---
description: El reComputer J401B es un dispositivo de IA de borde compacto y de alto rendimiento que cuenta con módulos NVIDIA Jetson Orin, ofreciendo interfaces de E/S ricas y soportando JetPack 5.1.3 hasta 6.2 para aplicaciones de IA versátiles. Esta guía cubre sus especificaciones, instrucciones de flasheo y uso de interfaces para desarrollo e implementación.
title: Comenzando con reComputer J401B
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/J401B/recomputer-j401b_1.webp
slug: /es/recomputer_j401b_getting_start
last_update:
  date: 4/27/2025
  author: Youjiang
---

# Comenzando con reComputer J401B

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401B/recomputer-j401b_1.jpg"/>
</div>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J401B-optional-accessories.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>

## Introducción
La serie reComputer J401B es una iteración de la serie reComputer Classic. El reComputer J4011B con módulos NVIDIA Jetson Orin NX 8GB es un dispositivo de IA de borde potente y compacto con interfaces ricas: 2x USB 3.2, HDMI, Ethernet, M.2 Key E para módulo Wi-Fi, M.2 Key M para SSD, mini-PCIe para módulo LTE, CAN, 40 pines y más.

## Características

- **Construye la Plataforma de IA Embebida Más Potente:** Compatible con el módulo Jetson Orin NX, ofreciendo hasta 100 TOPS.

- **Diseño para Desarrollo y Producción:** Equipado con un conjunto rico de E/S: 2x USB3.2, HDMI, Ethernet, M.2 Key M, M.2 Key E, mini-PCIe, 40 pines GPIO, etc. Soporta múltiples comunicaciones cableadas e inalámbricas incluyendo Wi-Fi y LTE

- **Inmediatamente Listo para el Mercado:** JetPack5.1.3 preinstalado, BSP de Linux OS listo

- **Las certificaciones incluyen** ROHS, CE, FCC, KC, UKCA, REACH

- **Suministro de Larga Duración:** Tiempo de Vida de Producción: hasta al menos 2032

## Especificaciones

<table>
  <thead>
    <tr>
      <th>Especificaciones</th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3010B-p-6404.html">reComputer J3010B</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3011B-p-6405.html">reComputer J3011B</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4011B-p-6407.html">reComputer J4011B</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4012B-p-6406.html">reComputer J4012B</a></th>
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
      <td>GPU de arquitectura NVIDIA Ampere de 512 núcleos con 16 Tensor Cores</td>
      <td>GPU de arquitectura NVIDIA Ampere de 1024 núcleos con 32 Tensor Cores</td>
      <td colspan='2' align='center'>GPU de arquitectura NVIDIA Ampere de 1024 núcleos con 32 Tensor Cores</td>
    </tr>
    <tr>
      <td>Frecuencia Máxima GPU</td>
      <td colSpan='2' align='center'>625 MHz</td>
      <td>765 MHz</td>
      <td>918 MHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan='2'>CPU de 6 núcleos Arm® Cortex®-A78AE v8.2 de 64 bits<br />1.5MB L2 + 4MB L3</td>
      <td>CPU de 6 núcleos Arm® Cortex®-A78AE v8.2 de 64 bits 1.5MB L2 + 4MB L3</td>
      <td>CPU de 8 núcleos Arm® Cortex®-A78AE v8.2 de 64 bits 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Frecuencia Máxima CPU</td>
      <td colSpan='2' align='center'>1.5 GHz</td>
      <td colSpan='2' align='center'>2 GHz</td>
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
      <td colSpan='2' align='center'>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>Frecuencia Máxima DLA</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>614 MHz</td>
    </tr>
    <tr>
      <td>Acelerador de Visión</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>1x PVA v2</td>
    </tr>
    <tr>
      <td>Almacenamiento</td>
      <td colSpan='4' align='center'>128GB NVMe SSD</td>
    </tr>
    <tr>
      <td>Codificador de Video</td>
      <td colSpan='2' align='center'>1080p30 soportado por 1-2 núcleos de CPU</td>
      <td colSpan='2' align='center'>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de Video</td>
      <td colSpan='2' align='center'>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan='2' align='center'>1x 8K30 (H.265) | 2x 4K60 (H.265) | 4x 4K30 (H.265)<br />9x 1080p60 (H.265) | 18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td colSpan='4' align='center'>1* HDMI 2.1</td>
    </tr>
    <tr>
      <td>Cámara CSI</td>
      <td colSpan='4' align='center'>2* CSI （2-lane 15pin）</td>
    </tr>
    <tr>
      <td>Red</td>
      <td colSpan='4' align='center'>1* Gigabit Ethernet (10/100/1000M)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan='4' align='center'>2* USB 3.2 Type-A (10Gbps); 1* USB2.0 Type-C (Modo Dispositivo)</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td colSpan='4' align='center'>1* M.2 Key M</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td colSpan='4' align='center'>1* M.2 Key E</td>
    </tr>
    <tr>
      <td>Mini PCIe</td>
      <td colSpan='4' align='center'>1* mini-PCIe para módulo LTE</td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td colSpan='4' align='center'>1* Conector de Ventilador de 4 pines (5V PWM)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan='4' align='center'>1* CAN</td>
    </tr>
    <tr>
      <td>Puerto Multifuncional</td>
      <td colSpan='4' align='center'>1* Cabecera de Expansión de 40 Pines, 1* Cabecera de Control y UART de 12 Pines</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan='4' align='center'>RTC de 2 pines, socket RTC (soporta CR1220 pero no incluida)</td>
    </tr>
    <tr>
      <td>Alimentación</td>
      <td colSpan='4' align='center'>	DC 9-19V vía conector DC 5525 </td>
    </tr>
    <tr>
      <td>Fuente de Alimentación</td>
      <td colSpan='4' align='center'>Adaptador de corriente no incluido</td>
    </tr>
    <tr>
      <td>Temperatura</td>
      <td colSpan='4' align='center'>-10℃~60℃</td>
    </tr>
    <tr>
      <td>Mecánico</td>
      <td colSpan='4' align='center'>130mm x120mm x 58.5mm</td>
    </tr>
  </tbody>
</table>

## Flash JetPack

Aquí, te mostraremos cómo flashear [Jetpack](https://developer.nvidia.com/embedded/jetpack) a un SSD NVMe conectado al reComputer J4012B/ J4011B/ J3010B y J3011B. Todos estos dispositivos vienen con la placa portadora J401B en su interior y el procedimiento de flasheo es el mismo para todos.

:::danger
La serie reComputer J401B viene con JetPack 5.1.3 preinstalado en el SSD NVMe incluido, por lo que no es necesario flashearlo. Sin embargo, si deseas volver a flashearlo con JetPack, puedes seguir esta guía.
:::

### Módulo Compatible
- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html) 
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer) 
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html) 
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html) 

### Prerrequisitos

- Computadora Host Ubuntu
- reComputer J4012B/ J4011B/ J3010B o J3011B
- Cable de transmisión de datos USB Type-C

:::info
Recomendamos que uses dispositivos físicos con Ubuntu en lugar de máquinas virtuales.  
Por favor, consulta la tabla a continuación para preparar la máquina anfitriona.
        
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td rowspan="2"> Versión de JetPack </td>
        <td class="dbon" colspan="3"> Versión de Ubuntu (Computadora Anfitriona) </td>
    </tr>
    <tr>
        <td> 18.04 </td>
        <td> 20.04 </td>
        <td> 22.04 </td>
    </tr>
    <tr>
        <td>JetPack 5.x</td>
        <td> ✅ </td>
        <td> ✅ </td>
        <td> </td>
    </tr>
    <tr>
        <td>JetPack 6.x</td>
        <td> </td>
        <td> ✅ </td>
        <td> ✅ </td>
    </tr>
  </tbody>
</table>
:::

:::note
- No recomendamos usar máquinas virtuales ni Ubuntu con arquitectura ARM para flashear.
:::

### Entrar al Modo de Recuperación Forzada

Antes de que podamos continuar con los pasos de instalación, necesitamos asegurarnos de que el dispositivo jetson esté en modo de recuperación forzada.

Por favor, consulte los siguientes pasos para configurar el dispositivo jetson en modo de recuperación forzada.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/j401_set_recovery.gif" /></div>

:::note
La placa portadora en el GIF animado es la J401, pero no te preocupes: los pasos para entrar en el modo de recuperación forzada son los mismos tanto para las placas portadoras J401 como J401B.
:::

<details>

<summary> Paso a Paso </summary>

**Paso 1.** Use un cable puente para conectar el pin **FC REC** y el pin **GND**.

<table align="center">
<thead>
  <tr>
    <th> </th>
    <th>Encabezado del Botón</th>
    <th>Descripción</th>
    <th>Encabezado del Botón</th>
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

**Paso 2.** Encienda el reComputer conectando el cable incluido del adaptador de corriente y conecte la placa con la PC host Ubuntu con un cable de transmisión de datos USB Type-C

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/2.png"/></div>

**Paso 3.** En la PC host Linux, abra una ventana de Terminal e ingrese el comando `lsusb`. Si el contenido devuelto tiene una de las siguientes salidas según el Jetson SoM que use, entonces la placa está en modo de recuperación forzada.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

La imagen de abajo es para Orin NX 16GB

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"/></div>

**Paso 4.** Retire el cable puente

</details>

### Flashear el SO Jetpack

:::note
Antes de continuar con el flasheo, debe tenerse en cuenta que el módulo Jetson Orin NX solo admite JetPack 5.1 y versiones posteriores, mientras que el módulo Jetson Orin Nano solo admite JetPack 5.1.1 y versiones posteriores.
:::

En primer lugar, instala las siguientes dependencias requeridas en el PC Host Ubuntu antes de proceder a flashear JetPack.

```sh
sudo apt install qemu-user-static sshpass abootimg nfs-kernel-server libxml2-utils binutils -y
```

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1" label="JP5.1.1">

Aquí usaremos NVIDIA L4T 35.3.1 para instalar Jetpack 5.1.1 en el reComputer

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3531) los controladores de NVIDIA en la PC anfitriona. Los controladores requeridos se muestran a continuación:

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

**Paso 2:** Extrae **Jetson_Linux_R35.3.1_aarch64** y **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64** navegando a la carpeta que contiene estos archivos, aplica los cambios e instala los prerrequisitos necesarios

```sh
tar xf Jetson_Linux_R35.3.1_aarch64
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Paso 3 (Opcional):** Configura tu nombre de usuario, contraseña y nombre de host para que no necesites ingresar al asistente de instalación de Ubuntu después de que el dispositivo termine de arrancar

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo (nombre de usuario:"nvidia", contraseña:"nvidia", nombre del dispositivo:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 4:** Flashear el sistema al SSD NVMe

```sh
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

Verás la siguiente salida si el proceso de flasheo es exitoso

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

Ahora, puedes conectar el ratón, teclado y monitor al dispositivo Jetson. ¡Estará listo para usar!

:::tip
Si tu dispositivo Jetson tarda mucho en abrir el escritorio, por favor vuelve a conectar la fuente de alimentación.
:::

**Paso 5 (Opcional):** Instalar Nvidia Jetpack SDK

Por favor, abre la terminal en el **dispositivo Jetson** y ejecuta los siguientes comandos:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```


</TabItem>
<TabItem value="JP5.1.2" label="JP5.1.2">

Aquí usaremos NVIDIA L4T 35.4.1 para instalar Jetpack 5.1.2 en el reComputer

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3541) los controladores de NVIDIA en la PC anfitriona. Los controladores requeridos se muestran a continuación:

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

**Paso 2:** Extrae **Jetson_Linux_R35.4.1_aarch64** y **Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64** navegando a la carpeta que contiene estos archivos, aplica los cambios e instala los prerrequisitos necesarios

```sh
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

Ahora necesitamos aplicar un parche de NVIDIA que es necesario para JP5.1.2 y se explica [aquí](https://docs.nvidia.com/jetson/archives/r35.4.1/ReleaseNotes/Jetson_Linux_Release_Notes_r35.4.1.pdf) en la sección 4.2.3 de las Notas de Lanzamiento oficiales de NVIDIA JetPack.

**Paso 3:** Navega al siguiente directorio

```sh
cd Linux_for_Tegra/bootloader/t186ref/BCT
```

**Paso 4:** Abre el archivo **"tegra234-mb2-bct-scr-p3767-0000.dts"** y añade las siguientes líneas bajo la sección **tfc**

```sh
tfc {
    reg@322 { /* GPIO_M_SCR_00_0 */
    exclusion-info = <2>;
    value = <0x38008080>;
    };
```

**Paso 5 (Opcional):** Navega al directorio **"Linux_for_Tegra"** e ingresa el siguiente comando para configurar tu nombre de usuario, contraseña y nombre de host para que no necesites ingresar al asistente de instalación de Ubuntu después de que el dispositivo termine de arrancar

```sh
cd Linux_for_Tegra
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo (nombre de usuario:"nvidia", contraseña:"nvidia", nombre del dispositivo:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 6:** Flashear el sistema al SSD NVMe

```bash

cp p3509-a02+p3767-0000.conf p3509-a02-p3767-0000.conf
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1   -c tools/kernel_flash/flash_l4t_nvme.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg"   --showlogs --network usb0 p3509-a02-p3767-0000 external

```

Verás la siguiente salida si el proceso de flasheo es exitoso

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

Ahora, puedes conectar el ratón, teclado y monitor al dispositivo Jetson. ¡Estará listo para usar!

:::tip
Si tu dispositivo Jetson tarda mucho en abrir el escritorio, por favor vuelve a conectar la fuente de alimentación.
:::

**Paso 7 (Opcional):** Instalar Nvidia Jetpack SDK

Por favor, abre la terminal en el **dispositivo Jetson** y ejecuta los siguientes comandos:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

</TabItem>

<TabItem value="JP5.1.3" label="JP5.1.3">

Aquí instalaremos Jetpack 5.1.3 en el reComputer.

**Paso 1:** Descarga la imagen del sistema a tu PC Ubuntu correspondiente al módulo Jetson que estés usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Enlace de Descarga</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXpnEetKYeNEkVs_mrG161IBNt4Rn84D2l1mvX-RS6hBog?e=OUpkC2" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td>28877E13DE9E029C4E4328F836C7D534E182849714CCA2930C3712757DDD6CD1</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdchzEJ2fYJClYD680qFaosBNkYRXjHBLpYykpxYBi2_0Q?e=LEHd41" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td>E4C5611164475D86E2F128826F993F251491368168218A2D660E6D23DEE63D53</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUPTqRpD_fVGmw-qKTrRl4gBUB9YvlytoRGwxe7aCqhF9w?e=Bsr1GU" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td>A3F0C30EFDFB612F1EAB5B01E01B7E6FDFACA6A27A596C3B0AABD82C0EFE94D4</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ER4pJqYIOGVGiu1ticFeYMoBFaSpmI_JISciXqqvI-lzAA?e=nBRhmh" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td>EDCDA822B59BB6FAC8E7AD301757C6801FC29481DE274DEE370CFDA4874AC0B0</td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina anfitriona con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en la wiki, se confirma que el firmware que descargaste está completo e intacto.
:::

**Paso 2:** Extrae el archivo de imagen descargado:
```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Paso 3:** Navega al directorio descomprimido y ejecuta el siguiente comando para flashear el sistema jetpack al SSD NVMe: 

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás la siguiente salida si el proceso de flasheo es exitoso

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
El comando de flasheo puede ejecutarse entre 2 y 10 minutos.
:::

**Paso 4:** Conecta el J401 a una pantalla usando el conector HDMI en la placa y completa la configuración inicial.

:::info
Por favor, completa la **Configuración del Sistema** según tus necesidades.
:::

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

Aquí usaremos NVIDIA L4T 36.3 para instalar Jetpack 6.0 en el reComputer

**Paso 1:** Descarga la imagen del sistema a tu PC Ubuntu correspondiente al módulo Jetson que estés usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Enlace de Descarga1</th>
      <th>Enlace de Descarga2</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EavQHXoSEg9PuLs4vuujXLcB0-GW6Ti1zHGL2UHzgS6TWg?e=J7oRrf" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td>
        <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EbEZRxHDtgBDjBrHK_7ltfEB6JBa3VGXLx3meNc0OJUL_g?e=8MNsTg" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td>20b38d9524327fd714c37cb293036006e070b5335d6b4f6978a862be51c3db52</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcfUdbmSiOBFo_Po-Cui3jkBDORKexZ4S43Jde5XApqdeQ?e=zqealW" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQawJy3jmKBAmJgHght-vVUBHbsC3vtlvMsYfW7vsie3LQ?e=vor3t3" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td>da966e7616ed86b45e184b6db9c3eb81e779a5f4524f6c3c5610e56c53532fe1</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EauK-aXvruxHsC1-bAmTwZkBNB0PsvPX6S6oV4Q1UrAUFw?e=rytWvU" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EeJP8SNF76BKiJg2e-FKNd4BhJwlWiMbLcT6Y286tRO7JQ?e=ct6qLf" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td>e0fa101c5df6f507d123c2332e9fedea0ac54f8a5253cb28e71fdff01147fa68</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcHfrgY9GxVNiwGh6YTB50cBCc5QcKgnGpTZQfv94x4VNw?e=Rl73Zh" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERQJluPq9X1LmpLXTSGZVMwBVg9ikWw8veG2aOdHv504Gw?e=hujab4" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td>80ebeac0a843baa2c3104ee6341d44f39a2cfab1c9c725e176c7b2a219b79dfc</td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina anfitriona con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en la wiki, se confirma que el firmware que descargaste está completo e intacto.
:::

**Paso 2:** Extrae el archivo de imagen descargado:
```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Paso 3:** Navega al directorio descomprimido y ejecuta el siguiente comando para flashear el sistema jetpack al SSD NVMe: 

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás la siguiente salida si el proceso de flasheo es exitoso

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
El comando de flasheo puede ejecutarse entre 2 y 10 minutos.
:::

**Paso 4:** Conecta el J401 a una pantalla usando el conector HDMI en la placa y completa la configuración inicial:

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Por favor, completa la **Configuración del Sistema** según tus necesidades.
:::

**Paso 5:** Después de iniciar el sistema, necesitas ejecutar el siguiente comando para reactivar el controlador de la tarjeta de red inalámbrica:
```bash
sudo rm /lib/modules/5.15.136-tegra/build
sudo ln -s /usr/src/linux-headers-5.15.136-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source/ /lib/modules/5.15.136-tegra/build
sudo apt install -y iwlwifi-modules
```

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Aquí usaremos NVIDIA L4T 36.4 para instalar Jetpack 6.1 en el reComputer

**Paso 1:** Descarga la imagen del sistema a tu PC Ubuntu correspondiente al módulo Jetson que estés usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Enlace de Descarga</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWCZOBNb9C9AoZe-mt23jLABZk942Lf0yopVGFJFTeL5DA?e=o7epES" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td> 3e53f484eb41a2d81f01ba2a0512a3c13d86d90f646207a488eaf77ae0cd5d69 </td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcvDRK7qgWhGty_H-P7yHZ8Bob3v9AEs_vFVd-zOC3WX5w?e=FmlfjD" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td> fc22a3d1669eb311cf237b8f4252896bfb71ff860c14f7a502c60fda5439d99d </td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeO8T8kNkpZGl9W2QfmnKYQBeXB8-M88aZWLMvPP7uARcA?e=fBuClA" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td> c2e48b41d284e4c98a2bc3409f1a1d09c61e4b60d6a5bdec3a33d084560a3bba </td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY01pL5oq0FAmavoRY_p9DMBj4t-LHzRtEAh1UBQen3S3g?e=jUfauO" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td> b9e4f5889a66d055d967884980aee6357316acb562c4d713ef2fdb21f4644788 </td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina anfitriona con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en la wiki, se confirma que el firmware que descargaste está completo e intacto.
:::

**Paso 2:** Extrae el archivo de imagen descargado:
```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nx-16g-j401-6.1-36.4.0-2024-12-04.tar
```

**Paso 3:** Navega al directorio descomprimido y ejecuta el siguiente comando para flashear el sistema jetpack al SSD NVMe: 

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás la siguiente salida si el proceso de flasheo es exitoso

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
El comando de flasheo puede ejecutarse entre 2 y 10 minutos.
:::

**Paso 4:** Conecta el J401 a una pantalla usando el conector HDMI en la placa y completa la configuración inicial:

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Por favor, completa la **Configuración del Sistema** según tus necesidades.
:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

Aquí usaremos NVIDIA L4T 36.4.3 para instalar Jetpack 6.2 en el reComputer

**Paso 1:** Descarga la imagen del sistema a tu PC Ubuntu correspondiente al módulo Jetson que estés usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Enlace de Descarga</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ea8wqK7OE0VGtclEw1J0FIYB8I6qJEH_n1facfwl9AlhkQ?e=UoHjcf" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td> D9ECF85D0BD52E6E90E9C567A52688C7FAEE7DD1BDC87ED557184086FD605249 </td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EYuzr4pFfZ5Lp2WIqG_tZ7ABIYU9A0KuFl1nAs9FiGmZBQ?e=WALXR5" target="_blank" rel="noopener noreferrer">Descargar</a>
      </td>
      <td> 00B881683FD2D61A22BD2D0326E7B5E39CB5C4F249BF2CD18A272766CB6612E7 </td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina anfitriona con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en la wiki, se confirma que el firmware que descargaste está completo e intacto.
:::

:::note
Ten en cuenta que, debido al aumento del consumo de energía y la generación de calor tras habilitar el `modo super`, los [reComputer J4011B](https://www.seeedstudio.com/reComputer-J4011B-p-6407.html) y [reComputer J4012B](https://www.seeedstudio.com/reComputer-J4012B-p-6406.html) no pueden operar de manera estable en el modo más alto. Por lo tanto, esta actualización no incluye estos dos productos.  
Actualmente estamos diseñando una nueva versión de reComputer. ¡Mantente atento!
:::

**Paso 2:** Extrae el archivo de imagen descargado:
```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.2-36.4.3-2025-02-08.tar.gz
```

**Paso 3:** Navega al directorio descomprimido y ejecuta el siguiente comando para flashear el sistema jetpack al SSD NVMe: 

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás la siguiente salida si el proceso de flasheo es exitoso

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
El comando de flasheo puede ejecutarse entre 2 y 10 minutos.
:::

**Paso 4:** Conecta el J401 a una pantalla usando el conector HDMI en la placa y completa la configuración inicial:

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Por favor, completa la **Configuración del Sistema** según tus necesidades.
:::

</TabItem>

</Tabs>

## Uso de Interfaces

:::info
Por favor, consulta esta [página wiki](/es/recomputer_j401b_interfaces_usage) para más información sobre el uso de interfaces.
:::


## Recursos
- [Hoja de datos del reComputer J401B](https://files.seeedstudio.com/wiki/reComputer/reComputer_J401B_datasheet_v1.pdf)
- [Esquemático del reComputer J401B](https://files.seeedstudio.com/products/NVIDIA/reComputer_J401B_CarrierBoard_SCH_V1.0.pdf)
- [Esquemáticos de la placa LTE](https://files.seeedstudio.com/products/NVIDIA/reComputer_J401B_LTE_SCH_V1.0.pdf)
- [Catálogo de las Series Jetson de Seeed](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Historias de Éxito de Edge AI de Seeed Studio](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Comparación de las Series Jetson de Seeed](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Dispositivos Jetson de Seeed en Una Página](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Ejemplos de Jetson](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-para-Principiantes](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
