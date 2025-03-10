---
description: Flashear JetPack a una reComputer J4012 (J401 carrier board)
title: Flashear Jetpack
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_J4012_Flash_Jetpack
last_update:
  date: 6/12/2024
  author: Lakshantha/Youjiang
---

# Flashea JetPack OS en la Carrier Board J401

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/recomputer-j401.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J401-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-without-Power-Adapter-p-5637.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue una ahora 🖱️</font></span></strong>
</a></div>

La Carrier Board J401 es una potente placa de extensión que admite módulos NVIDIA Jetson Orin NX/Nano. Cuenta con 1 puerto GbE, 1 CAN para transferencia de datos, M.2 Key M para SSD, M.2 Key E para WiFi/BlueTooth, 2 CSI y 1 HDMI para captura y visualización de vídeo de alta calidad. También contiene 4 puertos USB 3.2, un ventilador, RTC y una fuente de alimentación flexible de 9-19 V. Todo esto la hace confiable para una variedad de sistemas de automatización industrial y para la creación de poderosas aplicaciones de IA.

## Características

- **Carrier Board de rendimiento excepcional:** Admite el módulo NVIDIA Jetson Orin NX/Nano, aprovechando la poderosa potencia informática para lidiar con tareas difíciles con facilidad
- **Conectividad versátil:** Ofrece 1 puerto Gigabit Ethernet para redes, 4 puertos USB 3.2 tipo A (10 Gbps), 1 puerto USB 2.0 tipo C, 1 conector CAN para una rápida transferencia de datos.
- **Almacenamiento flexible y expansión inalámbrica:** Montaje con ranuras 1x M.2 Key M 2280 y 1x M.2 Key E, que ofrece un amplio espacio para almacenamiento flexible y expansión de conectividad inalámbrica
- **Periféricos avanzados compatibles:** 2 conectores de cámara CSI de 15 pines, 1 HDMI 2.1, 1 ventilador y 1 RTC para múltiples periféricos
- **Amplia gama de voltajes de entrada:** De 9 a 19 V CC, lo que brinda flexibilidad en las opciones de suministro de energía

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
      <td>Rendimiento con IA</td>
      <td>20 TOPS</td>
      <td>40 TOPS</td>
      <td>70 TOPS</td>
      <td>100 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>512-core Arquitectura NVIDIA Ampere GPU con 16 Núcleos Tensor</td>
      <td>1024-core Arquitectura NVIDIA Ampere GPU con 32 Núcleos Tensor</td>
      <td colSpan={2}>1024-core Arquitectura NVIDIA Ampere GPU con 32 Núcleos Tensor</td>
    </tr>
    <tr>
      <td>Máxima frecuencia de la GPU</td>
      <td colSpan={2}>625 MHz</td>
      <td>765 MHz</td>
      <td>918 MHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan={2}>6-core Arm® Cortex®-A78AE v8.2 64-bit CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6-core Arm® Cortex®-A78AE v8.2 64-bit CPU 1.5MB L2 + 4MB L3</td>
      <td>8-core Arm® Cortex®-A78AE v8.2 64-bit CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Máxima Frecuencia del CPU</td>
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
      <td>Máxima frecuencia del DLA</td>
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
      <td colSpan={4}>128GB NVMe SSD</td>
    </tr>
    <tr>
      <td>Encoder de Video</td>
      <td colSpan={2}>1080p30 soportado por 1-2 CPU cores</td>
      <td colSpan={2}>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de Video</td>
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
      <td>Redes</td>
      <td colSpan={4}>1* Gigabit Ethernet (10/100/1000M)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={4}>4* USB 3.2 Tipo-A (10Gbps); 1* USB2.0 Tipo-C (Modo Dispositivo)</td>
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
      <td>Fan</td>
      <td colSpan={4}>1* 4 pin Conexiones para ventilador (5V PWM)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={4}>1* CAN</td>
    </tr>
    <tr>
      <td>Puerto multifuncional</td>
      <td colSpan={4}>1* 40-Pin Expansion header,1* 12-Pin Control y UART header</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={4}>RTC 2-pin, RTC socket (soporta CR1220 pero no está incluido)</td>
    </tr>
    <tr>
      <td>Voltaje de entrada</td>
      <td colSpan={4}>9-19V</td>
    </tr>
    <tr>
      <td>Fuente de alimentación</td>
      <td colSpan={4}>Adaptador de alimentación no incluido</td>
    </tr>
    <tr>
      <td>Temperatura</td>
      <td colSpan={4}>-10℃~60℃</td>
    </tr>
    <tr>
      <td>Mecánica</td>
      <td colSpan={4}>130mm x120mm x 58.5mm</td>
    </tr>
  </tbody>
</table>

## Visión general del Hardware 

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-J4012/6.png"/></div>

## Flashear JetPack

Aquí, te mostraremos cómo actualizar [Jetpack](https://developer.nvidia.com/embedded/jetpack) a un SSD NVMe conectado a la reComputer J4012/J4011/J3010 y J3011. Todos estos dispositivos vienen con una Carrier Board J401 en su interior y el procedimiento de flasheo es el mismo para todos.

La serie reComputer J40/J30 viene con JetPack 5.1 preinstalado en el SSD NVMe incluido, por lo que no es necesario flahearla. Sin embargo, si deseas flashearlo nuevamente con JetPack, puedes seguir esta guía.

### Módulos soportados
- [Módulo NVIDIA® Jetson Orin™ Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html) 
- [Módulo NVIDIA® Jetson Orin™ Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer) 
- [Módulo NVIDIA® Jetson Orin™ NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html) 
- [Módulo NVIDIA® Jetson Orin™ NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html) 

### Prerequisitos

- PC Host con Ubuntu OS
- reComputer J4012/ J4011/ J3010 o J3011
- Cable USB - C de transmisión de datos

:::info
Te recomendamos que utilices dispositivos host físicos de Ubuntu en lugar de máquinas virtuales.
Consulta la siguiente tabla para preparar la máquina host.
        
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

### Entrar a modo de recuperación forzada

:::nota
- No recomendamos utilizar máquinas virtuales y arquitectura ARM Ubuntu para flashear.
- Antes de continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en modo de recuperación forzada.
:::

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/j401_set_recovery.gif" /></div>

<details>

<summary> Paso a paso </summary>

**Paso 1.** Utiliza un cable para puentear el pin **FC REC** y el pin **GND**.

<table align="center">
<thead>
  <tr>
    <th> </th>
    <th>Encabezado del botón</th>
    <th>Descripción</th>
    <th>Encabezado del botón</th>
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

**Paso 2.** Enciende la reComputer conectando el cable incluido del adaptador de corriente y conecta la placa con la PC host de Ubuntu mediante un cable de transmisión de datos USB tipo C

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/2.png"/></div>

**Paso 3.** En la PC host de Linux, abre una terminal e ingresa el comando `lsusb`. Si el contenido devuelto tiene una de las siguientes salidas según la Jetson SoM que utilizas, entonces la placa está en modo de recuperación forzada.

- Para la Orin NX 16GB: **0955:7323 NVidia Corp**
- Para la Orin NX 8GB: **0955:7423 NVidia Corp**
- Para la Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para la Orin Nano 4GB: **0955:7623 NVidia Corp**

La siguiente imagen es para la Orin NX 16GB

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"/></div>

**Paso 4.** Retira el cable con el que puenteaste **FC REC** y **GND**

</details>


### Flashea el dispositivo con un solo comando.

<details>

<summary> Flashea el dispositivo con un solo comando. </summary>

La reComputer Jetson J30/40 ha lanzado un script de actualización con un solo click, que admite la actualización de Jetpack 5.1.1, 5.1.2 y 6.0. Actualmente, la actualización con un solo click para Jetpack 6.1 y otras series de reComputer Jetson está en fase de prueba y estará disponible para todos en un futuro.

```bash
wget -O ./flashing.sh https://files.seeedstudio.com/OSHW_Jetson/flashing.sh  && sudo chmod 777 ./flashing.sh && ./flashing.sh
```

<iframe width="960" height="480" src="https://www.youtube.com/embed/_YfpJAhhT-g?si=OJxCcPqWauYEp9LR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

:::Precaución
El script de flasheo con un solo click tiene como objetivo hacer que el flasheo de jetpack sea más rápido. La versión actual esta en fase beta y puede presentar muchos problemas. Esperamos tu comprensión. Si hay problemas de flasheo, sigue "Actualizar el dispositivo paso a paso" a continuación y envía tus comentarios en nuestro [canal Discord Jetson](https://discord.com/channels/862602258452578314/930732339624026152). Los solucionaremos rápidamente y mejoraremos esta función en un futuro.
:::

</details>

### Flashear el dispositivo paso a paso.

:::nota
Antes de pasar al flasheo, cabe señalar que el módulo Jetson Orin NX solo admite JetPack 5.1 y superiores, mientras que el módulo Jetson Orin Nano solo admite JetPack 5.1.1 y superiores.
:::

En primer lugar, instala las dependencias requeridas en la PC host de Ubuntu antes de pasar a flashear JetPack.

```sh
sudo apt install qemu-user-static sshpass abootimg nfs-kernel-server libxml2-utils binutils -y
```

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1" label="JP5.1.1">

Aquí usaremos NVIDIA L4T 35.3.1 para instalar Jetpack 5.1.1 en la reComputer

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3531) los controladores NVIDIA en la PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

**Paso 2:** Extrae **Jetson_Linux_R35.3.1_aarch64** y **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64** navegando a la carpeta que contiene estos archivos, aplica los cambios e instala los requisitos previos necesarios

```sh
tar xf Jetson_Linux_R35.3.1_aarch64
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Paso 3 (Opcional):** Configura tu nombre de usuario, contraseña y nombre de host para que no necesites ingresar al asistente de instalación de Ubuntu después de que el dispositivo termine de iniciarse.

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo: (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 4:** Flashea el sistema a la NVMe SSD

```sh
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

Verás el siguiente resultado si el proceso de actualización concluye exitosamente

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

Ahora puedes conectar el mouse, el teclado y el monitor al dispositivo Jetson. ¡Estará listo para usarse!

:::tip
Si tu dispositivo Jetson tarda mucho en abrir el escritorio, vuelves a conectar la fuente de alimentación.
:::

**Paso 5 (Opcional):** Instala Nvidia Jetpack SDK

Abre la terminal en el **dispositivo Jetson** y ejecuta los siguientes comandos:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```


</TabItem>
<TabItem value="JP5.1.2" label="JP5.1.2">

Aquí usaremos NVIDIA L4T 35.4.1 para instalar Jetpack 5.1.2 en la reComputer

**Paso 1:** [Descarga](https://developer.nvidia.com/embedded/jetson-linux-r3541) los controladores NVIDIA en la PC host. Los controladores necesarios se muestran a continuación:

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

**Paso 2:** Extrae **Jetson_Linux_R35.4.1_aarch64** y **Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64** navegando a la carpeta que contiene estos archivos, aplica los cambios e instala los pre - requisitos necesarios

```sh
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

Ahora necesitamos aplicar un parche de NVIDIA que es necesario para JP5.1.2 y se explica [aquí](https://docs.nvidia.com/jetson/archives/r35.4.1/ReleaseNotes/Jetson_Linux_Release_Notes_r35.4.1.pdf) en la sección 4.2.3 de las Notas de versión oficiales de NVIDIA JetPack.

**Paso 3:** Navega al siguiente directorio

```sh
cd Linux_for_Tegra/bootloader/t186ref/BCT
```

**Paso 4:** Abre el archivo **"tegra234-mb2-bct-scr-p3767-0000.dts"** y agrega las siguientes líneas en la sección **tfc**

```sh
tfc {
    reg@322 { /* GPIO_M_SCR_00_0 */
    exclusion-info = <2>;
    value = <0x38008080>;
    };
```

**Paso 5 (Opcional):** Navega al directorio **"Linux_for_Tegra"** e ingresa el siguiente comando para configurar tu nombre de usuario, contraseña y nombre de host para que no necesites ingresar al asistente de instalación de Ubuntu después de que el dispositivo termine de iniciarse.

```sh
cd Linux_for_Tegra
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

Por ejemplo (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Paso 6:** Actualiza el sistema al SSD NVMe

```sh
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

Verás el siguiente resultado si el proceso de actualización es exitoso

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

Ahora puedes conectar el mouse, el teclado y el monitor al dispositivo Jetson. ¡Estará listo para usarse!

:::tip
Si tu dispositivo Jetson tarda mucho en abrir el escritorio, vuelve a conectar la fuente de alimentación.
:::

**Paso (Opcional):** Instala Nvidia Jetpack SDK

Abre la terminal en el **dispositivo Jetson** y ejecuta los siguientes comandos:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

Aquí usaremos NVIDIA L4T 36.3 para instalar Jetpack 6.0 en la reComputer

**Paso 1:** Descarga la imagen del sistema a tu PC con Ubuntu correspondiente al módulo Jetson que estás utilizando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Link de descarga 1</th>
      <th>Link de descarga 2</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EavQHXoSEg9PuLs4vuujXLcB0-GW6Ti1zHGL2UHzgS6TWg?e=J7oRrf" target="_blank" rel="noopener noreferrer">Descarga
        </a>
      </td>
      <td>
        <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EbEZRxHDtgBDjBrHK_7ltfEB6JBa3VGXLx3meNc0OJUL_g?e=8MNsTg" target="_blank" rel="noopener noreferrer">Descarga</a>
      </td>
      <td>20b38d9524327fd714c37cb293036006e070b5335d6b4f6978a862be51c3db52</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcfUdbmSiOBFo_Po-Cui3jkBDORKexZ4S43Jde5XApqdeQ?e=zqealW" target="_blank" rel="noopener noreferrer">Descarga
      </a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQawJy3jmKBAmJgHght-vVUBHbsC3vtlvMsYfW7vsie3LQ?e=vor3t3" target="_blank" rel="noopener noreferrer">Descarga</a>
      </td>
      <td>da966e7616ed86b45e184b6db9c3eb81e779a5f4524f6c3c5610e56c53532fe1</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EauK-aXvruxHsC1-bAmTwZkBNB0PsvPX6S6oV4Q1UrAUFw?e=rytWvU" target="_blank" rel="noopener noreferrer">Descarga
      </a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EeJP8SNF76BKiJg2e-FKNd4BhJwlWiMbLcT6Y286tRO7JQ?e=ct6qLf" target="_blank" rel="noopener noreferrer">Descarga</a>
      </td>
      <td>e0fa101c5df6f507d123c2332e9fedea0ac54f8a5253cb28e71fdff01147fa68</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcHfrgY9GxVNiwGh6YTB50cBCc5QcKgnGpTZQfv94x4VNw?e=Rl73Zh" target="_blank" rel="noopener noreferrer">Descarga
      </a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERQJluPq9X1LmpLXTSGZVMwBVg9ikWw8veG2aOdHv504Gw?e=hujab4" target="_blank" rel="noopener noreferrer">Descarga</a>
      </td>
      <td>80ebeac0a843baa2c3104ee6341d44f39a2cfab1c9c725e176c7b2a219b79dfc</td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host Ubuntu, abre la terminal y ejecuta el comando `sha256sum <Archivo>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en la wiki, confirma que el firmware que descargaste está completo e intacto.
:::

**Paso 2:** Extrae el archivo de imágen descargada:
```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Paso 3:** Navega hasta el directorio descomprimido y ejecuta el siguiente comando para actualizar el sistema jetpack al SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás el siguiente resultado si el proceso de actualización es exitoso

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::nota
El comando flash puede finalizarse en un periodo de 2 a 10 minutos.
:::

**Paso 4:** Conecta el J401 a una pantalla usando el conector HDMI en la placa y finaliza la configuración inicial:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Completa la **Configuración del sistema** según tus necesidades.
:::

**Paso 5:** Después de iniciar el sistema, debes ejecutar el siguiente comando para reactivar el controlador de la tarjeta de red inalámbrica:
```bash
sudo rm /lib/modules/5.15.136-tegra/build
sudo ln -s /usr/src/linux-headers-5.15.136-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source/ /lib/modules/5.15.136-tegra/build
sudo apt install -y iwlwifi-modules
```

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Aquí usaremos NVIDIA L4T 36.4 para instalar Jetpack 6.1 en la reComputer

**Paso 1:** Descarga la imagen del sistema a tu PC con Ubuntu correspondiente al módulo Jetson que estás utilizando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Link de descarga</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWCZOBNb9C9AoZe-mt23jLABZk942Lf0yopVGFJFTeL5DA?e=o7epES" target="_blank" rel="noopener noreferrer">Descarga
        </a>
      </td>
      <td> 3e53f484eb41a2d81f01ba2a0512a3c13d86d90f646207a488eaf77ae0cd5d69 </td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcvDRK7qgWhGty_H-P7yHZ8Bob3v9AEs_vFVd-zOC3WX5w?e=FmlfjD" target="_blank" rel="noopener noreferrer">Descarga
        </a>
      </td>
      <td> fc22a3d1669eb311cf237b8f4252896bfb71ff860c14f7a502c60fda5439d99d </td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeO8T8kNkpZGl9W2QfmnKYQBeXB8-M88aZWLMvPP7uARcA?e=fBuClA" target="_blank" rel="noopener noreferrer">Descarga
        </a>
      </td>
      <td> c2e48b41d284e4c98a2bc3409f1a1d09c61e4b60d6a5bdec3a33d084560a3bba </td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY01pL5oq0FAmavoRY_p9DMBj4t-LHzRtEAh1UBQen3S3g?e=jUfauO" target="_blank" rel="noopener noreferrer">Descarga
        </a>
      </td>
      <td> b9e4f5889a66d055d967884980aee6357316acb562c4d713ef2fdb21f4644788 </td>
    </tr>
  </tbody>
</table>
</div>

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host Ubuntu, abre la terminal y ejecuta el comando `sha256sum <Archivo>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en la wiki, confirma que el firmware que descargó está completo e intacto.
:::

**Step 2:** Extrae el archivo de imagen descargado:
```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nx-16g-j401-6.1-36.4.0-2024-12-04.tar
```

**Paso 3:** Navega hasta el directorio descomprimido y ejecuta el siguiente comando para actualizar el sistema jetpack al SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás el siguiente resultado si el proceso de actualización es exitoso

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::nota
El comando flash puede ejecutarse en un periodo de 2 a 10 minutos.
:::

**Paso 4:** Conecta el J401 a una pantalla usando el conector HDMI en la placa y finaliza la configuración inicial:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Completa la **Configuración del sistema** según tus necesidades.
:::

</TabItem>

</Tabs>

<!-- Code END -->


## Recursos
- [Página de detalles del Producto](https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html)
- [reComputer J30/J40 Archivo 3D](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [reComputer J401X Hoja de datos](http://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-Jetson-J401-w_o-power-adapter-datasheet.pdf)
- [Comparaciones de dispositivos NVIDIA Jetson y Carrier Boards](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed NVIDIA Jetson Catálogo de producto](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Jetson Ejemplos](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-para-principiantes](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

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
