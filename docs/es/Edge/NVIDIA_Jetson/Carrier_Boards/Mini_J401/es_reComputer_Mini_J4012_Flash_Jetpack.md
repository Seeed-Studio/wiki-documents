---
description: Este artículo explica cómo flashear JetPack 6.0 en la Placa Portadora J401-Mini, cubriendo la descripción general del dispositivo, preparación, ingreso al modo Force Recovery, y uso de un script de un clic para flashear, ayudando a los usuarios a desplegar rápidamente dispositivos NVIDIA Jetson Orin.
title: Flashear Jetpack
keywords:
- reComputer Mini
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/recomputer-mini-1.webp
slug: /es/recomputer_mini_j401_getting_started
last_update:
  date: 03/28/2025
  author: Dayu
---

# Flashear JetPack a la Placa Portadora J401-Mini

reComputer Mini es una computadora de IA diminuta alimentada por el módulo NVIDIA Jetson Orin Nano/Orin NX, entregando hasta 100 TOPS de rendimiento de IA. Está equipada con puerto PCIe en la parte inferior para proporcionar capacidades de expansión ricas, que también pueden ser personalizadas de manera flexible. Todo el sistema está diseñado para ser integrado en máquinas autónomas como drones, robots de patrulla, robots de entrega, etc. Puede ocupar directamente entrada DC de 54V, pudiendo ser ampliamente utilizado en sistemas alimentados por batería.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/recomputer-mini-1.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

<!-- Buy links -->

## Características

- **Rendimiento de IA Brillante para Producción:** Alcanza hasta **100 TOPS** de rendimiento de IA con baja potencia y latencia, construido por NVIDIA Orin SoC combinando la arquitectura GPU NVIDIA Ampere™ con capacidad operativa de 64 bits, procesamiento avanzado integrado de video e imagen multifunción, y Aceleradores de Aprendizaje Profundo NVIDIA.
- **Dispositivo de IA Edge del Tamaño de la Mano:** Tamaño compacto de **63mmx95mmx42mm**, con módulo NVIDIA Jetson Orin NX 16GB, placa portadora Mini J401, ventilador y carcasa. Soporta montaje de escritorio y pared.
- **Expandible con E/S Ricas:** Incluye hasta 7x USB, 1x DP 2.1, 2x CSI, 1x RJ45 para GbE, M.2 Key E, M.2 Key M, CAN de canal dual, y GPIO con placa de extensión.
- **Acelerar Soluciones al Mercado:** **JetPack 6.0** preinstalado en SSD NVMe de 128GB, BSP de OS Linux, soportando software Jetson y frameworks de IA líderes.
- **Escalar para desplegar:** soporta OTA, servicios de gestión remota alimentados por Allxon y Balena.
- **Personalización Flexible:** incluye cambio de módulos de accesorios, logo, y modificación de interfaces de hardware basada en el diseño original reComputer Mini J4012.

## Especificaciones

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Sistema Jetson Orin en Módulo</th>
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
      <td>GPU de arquitectura NVIDIA Ampere de 512 núcleos con 16 Tensor Cores</td>
      <td colSpan={3}>GPU de arquitectura NVIDIA Ampere de 1024 núcleos con 32 Tensor Cores</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan={2}>CPU Arm® Cortex®-A78AE v8.2 de 64 bits de 6 núcleos<br />1.5MB L2 + 4MB L3</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 de 64 bits de 6 núcleos 1.5MB L2 + 4MB L3</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 de 64 bits de 8 núcleos 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Frecuencia Máxima de CPU</td>
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
      <td>Codificador de Video</td>
      <td colSpan={2}>1080p30 soportado por 1-2 núcleos de CPU</td>
      <td colSpan={2}>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de Video</td>
      <td colSpan={2}>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan={2}>1x 8K30 (H.265)<br />2x 4K60 (H.265)<br />4x 4K30 (H.265)<br />9x 1080p60 (H.265)<br />18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Placa Portadora</th>
    </tr>
    <tr>
      <td>Almacenamiento</td>
      <td colSpan={4}>128GB NVMe SSD</td>
    </tr>
    <tr>
      <td>Redes</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>1x M.2 Key E para módulo WiFi/Bluetooth</td>
    </tr>
    <tr>
      <td rowSpan={7}>E/S</td>
      <td >USB</td>
      <td colSpan={3}>2x USB 3.2 Type-A (10Gbps)<br />1x USB 2.0 Micro-B (Modo Dispositivo)<br />1x USB 3.0 Type-C (Modo Host)<br />1x USB 2.0 JST-5pin (Modo Host)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td colSpan={3}>1x UART; 1x UART para Debug</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td colSpan={3}>1x DP 2.1 (incluido en conector Type-C)</td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td colSpan={3}>1x Conector de Ventilador de 4 pines (5V PWM)</td>
    </tr>
    <tr>
      <td>Botón</td>
      <td colSpan={3}>1x Botón de Reset; 1x Botón de Recovery</td>
    </tr>
    <tr>
      <td>Puerto de Extensión</td>
      <td colSpan={3}>2x Conector de Alta Velocidad de 60 pines (Para placa de extensión)<br />1x Conector de Alimentación de 10 pines (Para placa de extensión)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC 2-pin</td>
    </tr>
    <tr>
      <td>Alimentación</td>
      <td colSpan={4}>1x Conector XT30 (12-54V DC)</td>
    </tr>
    <tr>
      <td colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Placa de Extensión</td>
    </tr>
    <tr>
      <td>Redes</td>
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
      <td colSpan={3}>1x Conector de Ventilador de 4 pines (5V PWM)</td>
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
      <td colSpan={4}>2x Conector XT30 2+2 (12-54V DC)</td>
    </tr>
    <tr>
      <td colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Otros</td>
    </tr>
    <tr>
      <td rowSpan={3}>Mecánico</td>
      <td >Dimensiones (A x P x Al)</td>
      <td colSpan={3}>63mm * 95mm * 42mm (Sin Extensión)<br />63mm * 95mm * 66.7mm (Con Extensión)</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td colSpan={3}>345g (Sin Extensión)<br />462g (Con Extensión)</td>
    </tr>
    <tr>
      <td>Instalación</td>
      <td colSpan={3}>Escritorio, montaje en pared</td>
    </tr>
    <tr>
      <td>Temperatura de Operación</td>
      <td colSpan={4}>-10℃ ~ 50℃</td>
    </tr>
    <tr>
      <td>Garantía</td>
      <td colSpan={4}>1 Año</td>
    </tr>
  </tbody>
</table>
</div>

## Descripción General del Hardware

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

## Flashear SO JetPack

Aquí, te mostraremos cómo flashear [Jetpack 6.0](https://developer.nvidia.com/embedded/jetson-linux-archive) a un SSD NVMe conectado al reComputer Mini.

### Módulo Nvidia Jetson Soportado

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5554.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5552.html)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5523.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html)

### Prerrequisitos

- Computadora Host Ubuntu
- Placa Portadora reComputer J401-Mini con Módulo Jetson Orin
- Cable de transmisión de datos USB Micro-B

:::info

Recomendamos que uses dispositivos host ubuntu físicos en lugar de máquinas virtuales.
Por favor consulta la tabla a continuación para preparar la máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> Versión JetPack </td>
        <td class="dbon" colspan="3"> Versión Ubuntu (Computadora Host) </td>
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

### Preparar la Imagen Jetpack

Aquí, necesitamos descargar la imagen del sistema a nuestra PC Ubuntu correspondiente al módulo Jetson que estamos usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versión Jetpack</th>
      <th>Módulo Jetson</th>
      <th>Enlace de Descarga</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>5.1.3</td>
      <td>Orin Nx 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfA7P_6gLnJAnxptIAURoCgBDF-emSfyD9uGWYY2vuFhmg?e=DF6a8l" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td>099bf8e706468dc36600ffdb3444168<br />3cde7454646621017fc39db49c16a2c53</td>
    </tr>
    <tr>
      <td>Orin Nx 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eew7pWvWB3RLtT5vMkVTFHABADBzxS8id4xNtrQHGcO3eg?e=drxTwI" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td>6ce30b9e212310498eee2c0a363cb35<br />14b1c607ae6a1ab403d5029115bc3a71b</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcEvOGxB9DpOuFubj-xJ1oYBixiZy4vd0t_chXQcezPy9A?e=RnX7NN" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td>b8f7a0b6d5974add33c3102824c671b<br />61ca8e278b0c5e3c38a7c5a45e251251e</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EYi8K66PG6xOjwiU-_x3Ey4BpZhEiLFS8c_JoEDzeTVaxg?e=TkAgJV" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td>cc6efd6e4a42f099dde47e9ed71a34e<br />0981e77c50e3dc74f38338210c1f3bda0</td>
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
      <td>23855098982DD1E05C025D3F078BCA0<br />2F396C1FB68DC58E539D83569A894571D</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcdaeIBdGRpCp0Dev5R3o1sB2Tr4HIwjgtp3d_XX7lE9Gg?e=bxteCW" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td>A1C5F44B19B6C06E11AC38ABDA79AD6<br />CBFF2AAFBEEA7BF3A14B2FE08EA37267F</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
El archivo de imagen Jetpack6 tiene aproximadamente **16.7GB** de tamaño y debería tomar alrededor de 60 minutos para descargar. Por favor espera pacientemente a que se complete la descarga.
:::

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host Ubuntu, abre la terminal y ejecuta el comando `sha256sum <Archivo>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en la wiki, confirma que el firmware que descargaste está completo e intacto.
:::

### Entrar al Modo de Recuperación Forzada

:::info
Antes de que podamos continuar con los pasos de instalación, necesitamos asegurarnos de que la placa esté en modo de recuperación forzada.
:::

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/HEIXFkizP5Y" title="Enter Force Recovery Mode (reComputer Mini)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<details>

<summary> Paso a Paso </summary>

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini_rec.png" />
</div>

- **Paso 1.**  Conecta un cable USB Micro-B entre el puerto USB2.0 DEVICE y la PC host ubuntu.
- **Paso 2.**  Usa un pin e insértalo en el orificio RECOVERY para presionar el botón de recuperación y mantenerlo presionado.
- **Paso 3.**  Conecta la fuente de alimentación.
- **Paso 4.**  Suelta el botón de recuperación.

</details>

En la PC host Linux, abre una ventana de Terminal e ingresa el comando `lsusb`. Si el contenido devuelto tiene una de las siguientes salidas según el SoM Jetson que uses, entonces la placa está en modo de recuperación forzada.

- Para Orin NX 16GB: 0955:7323 NVidia Corp
- Para Orin NX 8GB: 0955:7423 NVidia Corp
- Para Orin Nano 8GB: 0955:7523 NVidia Corp
- Para Orin Nano 4GB: 0955:7623 NVidia Corp

La imagen de abajo es para Orin Nx 16GB:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"/>
</div>
<!-- 
### Flashear a Jetson con un Solo Comando.

<details>

<summary> Flashear el dispositivo con un solo comando. </summary>

El reComputer Jetson J30/40 Mini ha lanzado un script de flasheo de un clic, que soporta flashear Jetpack 6.0.

```bash
wget -O ./flashing.sh https://files.seeedstudio.com/OSHW_Jetson/flashing.sh  && sudo chmod 777 ./flashing.sh && ./flashing.sh
```

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZFBzTlyOjhE?si=uNN-l5VVGbAyGnot" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::caution
Descargo de responsabilidad: El script de flasheo de un clic tiene como objetivo hacer que el flasheo de jetpack sea más rápido. La versión actual es una versión beta y puede tener muchos problemas. Esperamos su comprensión. Si hay problemas de flasheo, siga los pasos de `Flashear el Dispositivo Paso a Paso` a continuación y proporcione comentarios en nuestro [canal Discord de Jetson](https://discord.com/channels/862602258452578314/930732339624026152). Los solucionaremos rápidamente y mejoraremos esta función en un futuro cercano.
:::

</details> -->

### Flashear a Jetson Paso a Paso

**Paso 1:** Extraiga el archivo de imagen descargado en la PC host ubuntu:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Paso 2:** Ejecuta el siguiente comando para flashear el sistema jetpack al SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás la siguiente salida si el proceso de flasheo es exitoso

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
El comando de flasheo puede ejecutarse durante 2-10 minutos.
:::

**Paso 3:** Conecta el J501 a una pantalla usando el conector HDMI en la placa y completa la configuración inicial:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Por favor completa la **Configuración del Sistema** según tus necesidades.
:::

**Paso 4 (Opcional):** Instalar Nvidia Jetpack SDK

Por favor abre la terminal en el dispositivo Jetson y ejecuta los siguientes comandos:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## Uso de Interfaces de Hardware

:::info
Si quieres aprender más sobre las especificaciones detalladas y el uso de la interfaz de hardware, por favor consulta [este wiki](https://wiki.seeedstudio.com/es/recomputer_jetson_mini_hardware_interfaces_usage/).
:::

## Recursos

- [Hoja de Datos de reComptuer Mini](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)
- [Esquemático de reComptuer Mini](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_SCH.7z)
- [Archivo 3D de reComputer Mini](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_3D.7z)
- [Catálogo de Series Jetson de Seeed](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Historias de Éxito de Edge AI de Seeed Studio](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Comparación de Series Jetson de Seeed](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Dispositivos Jetson de Seeed en Una Página](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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
