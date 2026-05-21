---
description: Este artículo proporciona una guía de inicio para reComputer Mini (basado en la plataforma NVIDIA Jetson Orin), incluyendo las especificaciones del dispositivo y los pasos para la configuración e instalación inicial.
title: Introducción a reComputer Mini
keywords:
  - reComputer
  - reComputer mini
  - ordenador embebido
  - robots
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.webp
slug: /recomputer_jetson_mini_getting_started
sku: 114993553,114993551,102111001,102110999,114993592,114993593
last_update:
  date: 12/11/2024
  author: Youjiang
createdAt: '2024-12-13'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/es/recomputer_jetson_mini_getting_started/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Introducción a reComputer Mini

<!-- change image -->

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

reComputer Mini es un diminuto ordenador de IA impulsado por el módulo NVIDIA Jetson Orin Nano/Orin NX, que ofrece hasta 100 TOPS de rendimiento de IA. Está equipado con un puerto PCIe en la parte inferior para proporcionar amplias capacidades de expansión, que también se pueden personalizar de forma flexible. Todo el sistema está diseñado para integrarse en máquinas autónomas como drones, robots de patrulla, robots de reparto, etc. Puede aceptar directamente una entrada de CC de 54 V, por lo que puede utilizarse ampliamente en sistemas alimentados por batería.

:::note
Opciones de personalización disponibles: branding del logotipo, embalaje y flasheo de firmware.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
<a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>Personaliza ahora ➜</font></span></strong></a>
</div>

<!-- Buy links -->

## Características

- **Brillante rendimiento de IA para producción:** Alcanza hasta **100 TOPS** de rendimiento de IA con bajo consumo y baja latencia, construido con el SoC NVIDIA Orin que combina la arquitectura de GPU NVIDIA Ampere™ con capacidad de operación de 64 bits, procesamiento avanzado integrado de vídeo e imagen multifunción y aceleradores de Deep Learning de NVIDIA.
- **Dispositivo Edge AI del tamaño de la mano:** Tamaño compacto de **63mmx95mmx42mm**, con un módulo NVIDIA Jetson Orin NX 16GB, placa carrier Mini J401, ventilador y carcasa. Compatible con montaje en escritorio y en pared.
- **Ampliable con abundantes E/S:** Incluye hasta 7x USB, 1x DP 2.1, 1x RJ45 para GbE, M.2 Key E, M.2 Key M, CAN de doble canal y GPIO con placa de expansión.
- **Acelera las soluciones al mercado:** JetPack 6.0 **preinstalado** en SSD NVMe de 128GB, BSP de sistema operativo Linux, compatible con el software Jetson y los principales frameworks de IA.
- **Escalable para el despliegue:** compatible con OTA y servicios de gestión remota impulsados por Allxon y Balena.
- **Personalización flexible:** incluye el cambio de módulos de accesorios, logotipo y modificación de interfaces de hardware basadas en el diseño original de reComputer Mini J4012.

## Especificaciones

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson Orin System on Module</th>
    </tr>
    <tr>
      <th>Especificaciones</th>
      <th>reComputer Mini J3010</th>
      <th>reComputer Mini J3011</th>
      <th>reComputer Mini J4011</th>
      <th>reComputer Mini J4012</th>
    </tr>
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
      <td colSpan={3}>GPU NVIDIA Ampere de 1024 núcleos con 32 Tensor Cores</td>
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
      <td>Codificador de vídeo</td>
      <td colSpan={2}>1080p30 compatible con 1-2 núcleos de CPU</td>
      <td colSpan={2}>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de vídeo</td>
      <td colSpan={2}>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan={2}>1x 8K30 (H.265)<br />2x 4K60 (H.265)<br />4x 4K30 (H.265)<br />9x 1080p60 (H.265)<br />18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Carrier Board</th>
    </tr>
    <tr>
      <td>Almacenamiento</td>
      <td colSpan={4}>128GB NVMe SSD</td>
    </tr>
    <tr>
      <td>Red</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>1x M.2 Key E para módulo WiFi/Bluetooth</td>
    </tr>
    <tr>
      <td rowSpan={7}>E/S</td>
      <td >USB</td>
      <td colSpan={3}>2x USB 3.2 Type-A (10Gbps)<br />1x USB 2.0 Micro-B (Modo dispositivo)<br />1x USB 3.0 Type-C (Modo host)<br />1x USB 2.0 JST-5pin (Modo host)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td colSpan={3}>1x UART; 1x UART para depuración</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td colSpan={3}>1x DP 2.1 (incluido en el conector Type-C)</td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td colSpan={3}>1x conector de ventilador de 4 pines (5V PWM)</td>
    </tr>
    <tr>
      <td>Botón</td>
      <td colSpan={3}>1x botón de reinicio; 1x botón de recuperación</td>
    </tr>
    <tr>
      <td>Puerto de expansión</td>
      <td colSpan={3}>2x conectores de alta velocidad de 60 pines (para placa de expansión)<br />1x conector de alimentación de 10 pines (para placa de expansión)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC de 2 pines</td>
    </tr>
    <tr>
      <td>Alimentación</td>
      <td colSpan={4}>1x conector XT30 (12-54V DC)</td>
    </tr>
    <tr>
      <td colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Placa de expansión</td>
    </tr>
    <tr>
      <td>Red</td>
      <td>Ethernet</td>
      <td colSpan={3}>1x RJ-45 Gigabit Ethernet (10/100/1000M)</td>
    </tr>
    <tr>
      <td rowSpan={5}>E/S</td>
      <td >USB</td>
      <td colSpan={3}>4x USB 3.2 Type-A (5 Gbps)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={3}>1x CAN JST 4pin (3.3V); 1x CAN (XT30 2+2) </td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td colSpan={3}>1x conector de ventilador de 4 pines (5V PWM)</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td colSpan={3}>2x I2C JST 4pin (3.3V)</td>
    </tr>
    <tr>
      <td>SPI</td>
      <td colSpan={3}>1x I2S JST 6pin (3.3V)</td>
    </tr>
    <tr>
      <td>Alimentación</td>
      <td colSpan={4}>2x conector XT30 2+2 (12-54V DC)</td>
    </tr>
    <tr>
      <td colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Otros</td>
    </tr>
    <tr>
      <td rowSpan={3}>Mecánico</td>
      <td >Dimensiones (W x D x H)</td>
      <td colSpan={3}>63mm * 95mm * 42mm (sin extensión)<br />63mm * 95mm * 66.7mm (con extensión)</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td colSpan={3}>345g (sin extensión)<br />462g (con extensión)</td>
    </tr>
    <tr>
      <td>Instalación</td>
      <td colSpan={3}>Escritorio, montaje en pared</td>
    </tr>
    <tr>
      <td>Temperatura de funcionamiento</td>
      <td colSpan={4}>-10℃ ~ 50℃</td>
    </tr>
    <tr>
      <td>Garantía</td>
      <td colSpan={4}>1 año</td>
    </tr>
  </tbody>
</table>
</div>

## Descripción general del hardware

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/hardware_overview.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B1.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B2.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B3.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B4.png"/>  
</div>

## Grabar el sistema JetPack OS

Aquí mostraremos cómo grabar [Jetpack 6.0](https://developer.nvidia.com/embedded/jetson-linux-archive) en un SSD NVMe conectado a reComputer Mini.

### Módulo Nvidia Jetson compatible

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5554.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5552.html)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5523.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html)

### Requisitos previos

- Ordenador host con Ubuntu
- reComputer Mini J4012/ J4011/ J3010 o J3011
- Cable de transmisión de datos USB Micro-B

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

### Preparar la imagen de Jetpack

Aquí necesitamos descargar la imagen del sistema en nuestro PC con Ubuntu correspondiente al módulo Jetson que estamos utilizando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versión de Jetpack</th>
      <th>Módulo Jetson</th>
      <th>Enlace de descarga</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>5.1.3</td>
      <td>Orin Nx 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDSbMzCkdgXTJsBIw2bFLCgAV5njnZV4i3Tqk62-Z9UZGE?e=9dWNfh" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td>82ab9068c5e03081391d22dc5d7c4db<br />ac9041016c1dd7a7ec2475871a10fd543</td>
    </tr>
    <tr>
      <td>Orin Nx 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC6mf8MQDgwRIDZweH69G45AYoMudFTg8oc5CiEyGU9jg8?e=KrAaiV" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td>5f016131a9ab6e90c3bd21850efe13b<br />479d72046aea4aa6d3bd2f3a04df5a7a2</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCqGvCStwmPRpVHo4yBNEJEAfiD6w_iCeRtB0IuXotrdK0?e=P5sImI" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td>a2ea4d9ad06e66e2befab14484471cb<br />6984ccef396e59262c83c40ed7911bbb2</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQApozlc_COgSLacJfvEAe6vAXeBTLY6z8H5WOfGQMGiLU4?e=ePzheb" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td>928a20a94320e901576cfd8679affc2<br />6caae9e9a30f3bc9497534f42ac4093cc</td>
    </tr>
    <tr>
      <td rowSpan={4}>6.0</td>
      <td>Orin Nx 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcQFCfXEWVREuzwvvBX7vRsBlr9H6HQpTBzmDw0rigIt1Q?e=IzLuYu" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td>7B4ABE1D1A8711D5D4E9B676DBB1E76<br />CDA35C614608CE7ECE112BC4A50E71C7C</td>
    </tr>
    <tr>
      <td>Orin Nx 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUpeLu1P7RJOv7-nqR7QbmABfmWR45xVUt95bMplpp25mQ?e=oiWB6b" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td>3956B968F2BFB9FDF37D952E83DDB70<br />3980C813156919BC367CA5E23BBDEC89F</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWbSLkBX0XpIrFjkT0vndGsBysfm51HvFkBFsRnfRaWBxA?e=t7vRcH" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td>BF6921DF313B467254154BDA835C379<br />AD86D817E03D0301543B62F7CA0C9222F</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUB7YoQeCrVHnDjsrfFaL8EBxkjRrclpDxFwDB3dJpM3xQ?e=oYHLp7" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td>8941C13204A8069CE70B109B6A13EA2<br />40CBB02F69B8D4028D465134B3744BC28</td>
    </tr>
    <tr>
      <td rowSpan={2}>6.2</td>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVjuq6G9y_5OjIxMIHFiBj0BVckYdcRQBunaXMHFBLZ3tw?e=tY89se" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td>A1C5F44B19B6C06E11AC38ABDA79AD6<br />CBFF2AAFBEEA7BF3A14B2FE08EA37267F</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcdaeIBdGRpCp0Dev5R3o1sB2Tr4HIwjgtp3d_XX7lE9Gg?e=bxteCW" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td>23855098982DD1E05C025D3F078BCA0<br />2F396C1FB68DC58E539D83569A894571D</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
El archivo de imagen de Jetpack6 tiene un tamaño aproximado de **16.7GB** y debería tardar alrededor de 60 minutos en descargarse. Por favor, espera pacientemente a que la descarga se complete.
:::

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en la wiki, se confirma que el firmware que descargaste está completo e intacto.
:::

### Entrar en modo Force Recovery

:::info
Antes de poder continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en modo force recovery.
:::

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/HEIXFkizP5Y" title="Enter Force Recovery Mode (reComputer Mini)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<details>

<summary> Paso a paso </summary>

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini_rec.png" />
</div>

- **Paso 1.**  Conecta un cable USB Micro-B entre el puerto USB2.0 DEVICE y el PC host con Ubuntu.
- **Paso 2.**  Usa un pin e insértalo en el orificio RECOVERY para presionar el botón de recuperación y mantenlo presionado.
- **Paso 3.**  Conecta la fuente de alimentación.
- **Paso 4.**  Suelta el botón de recuperación.

</details>

En el PC host con Linux, abre una ventana de Terminal e introduce el comando `lsusb`. Si el contenido devuelto tiene una de las siguientes salidas según el Jetson SoM que utilices, entonces la placa está en modo force recovery.

- Para Orin NX 16GB: 0955:7323 NVidia Corp
- Para Orin NX 8GB: 0955:7423 NVidia Corp
- Para Orin Nano 8GB: 0955:7523 NVidia Corp
- Para Orin Nano 4GB: 0955:7623 NVidia Corp

La siguiente imagen es para Orin Nx 16GB:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"/>
</div>
<!-- 
### Flash to Jetson with Single Command

<details>

<summary> Flash the device with a single command. </summary>

The reComputer Jetson J30/40 Mini has launched a one-click flashing script, which supports flashing Jetpack 6.0.

```bash
wget -O ./flashing.sh https://files.seeedstudio.com/OSHW_Jetson/flashing.sh  && sudo chmod 777 ./flashing.sh && ./flashing.sh
```

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZFBzTlyOjhE?si=uNN-l5VVGbAyGnot" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::caution
Disclaimer: The one-click flashing script aims to make jetpack flashing quicker. The current version is a beta one and may have many problems. We hope for your understanding. If there are flashing issues, follow the `Flash The Device Step by Step` below and give feedback in our [Discord Jetson channel](https://discord.com/channels/862602258452578314/930732339624026152). We'll fix them promptly and improve this function in the near future.
:::

</details> -->

### Flashear a Jetson paso a paso

**Paso 1:** Extrae el archivo de imagen descargado en el PC host con Ubuntu:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Paso 2:** Ejecuta el siguiente comando para flashear el sistema Jetpack en el SSD NVMe:

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

**Paso 3:** Conecta el J401 a una pantalla usando el **USB Type-C con DisplayPort** en la placa y completa la configuración inicial:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Por favor, completa la **Configuración del sistema** según tus necesidades.
:::

**Paso 4 (Opcional):** Instalar Nvidia Jetpack SDK

Por favor, abre la terminal en el dispositivo Jetson y ejecuta los siguientes comandos:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## Uso de interfaces de hardware

:::info
Si quieres obtener más información sobre las especificaciones detalladas y el uso de la interfaz de hardware, consulta [esta wiki](https://wiki.seeedstudio.com/es/recomputer_jetson_mini_hardware_interfaces_usage/).
:::

## Recursos

- [Hoja de datos de reComptuer Mini](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)
- [Esquemático de reComptuer Mini](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_SCH.7z)
- [Archivo 3D de reComputer Mini](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_3D.7z)
- [Catálogo de series Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Casos de éxito de Seeed Studio Edge AI](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Comparación de series Seeed Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Página única de dispositivos Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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
