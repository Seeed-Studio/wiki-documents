---
description: Este wiki presenta las características de la placa portadora J501 y explica cómo grabar el sistema Jetpack en la placa portadora J501.
title: Grabar Jetpack
keywords:
  - reServer
  - Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reserver_j501_getting_started
sku: 102991854,E24081601
last_update:
  date: 08/19/2024
  author: Youjiang
createdAt: '2024-08-19'
updatedAt: '2026-05-13'
url: https://wiki.seeedstudio.com/es/reserver_j501_getting_started/
---

# Primeros pasos con reServer J501

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/reServer_J501.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-Industrial-J501-Carrier-Board-Add-on.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
  </a>
</div>

La placa portadora J501 es una potente placa de expansión que admite módulos NVIDIA Jetson AGX Orin. Cuenta con abundantes puertos de datos e interfaces de expansión, liberando completamente todo el rendimiento del módulo AGX Orin. Además, admite la adición de una expansión GMSL para conectar hasta 8 cámaras GMSL.

## Características

- **Construye el ordenador de IA más potente para computación en el borde:** Diseñada para integrarse con el módulo Jetson AGX Orin, con hasta 275 TOPS de rendimiento de IA, 8 veces el rendimiento de IA en comparación con Jetson AGX Xavier. Potencia configurable entre 15W y 60W.
- **Compatibilidad de interfaz de alta velocidad para múltiples sensores:** 22 carriles de PCIe Gen4, 1x 10GbE, un Display Port, 16 carriles de MIPI CSI-2, interfaces USB 3.2 y un conector de 40 pines.
- **Compatibilidad de interfaz de baja velocidad para múltiples E/S:** 4x DI, 4x DO, 3x GND_DI, 2x GND_DO, 1x GND_ISO, 1x CAN, 1x RS232/RS422/RS485.
<!-- - **BSP ready for development:** Jetpack 6 supported Board BSP ready for developing your custom system image. -->

## Especificaciones

<div class="table-center">
<table>
  <tbody>
    <tr>
      <td rowSpan={7}>I/O</td>
      <td>Ethernet</td>
      <td> 1x LAN0 RJ45 GbE (10/100/1000Mbps), <br /> 1x LAN RJ45 GbE (10/100/1000/10000Mbps) </td>
    </tr>
    <tr>
      <td>USB</td>
      <td> 3x USB3.1, <br /> 1x USB3.1 Type C(Host mode), <br /> 1x USB2.0 Type C(Device mode) </td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td> 4x DI,4x DO,3x GND_DI,2x GND_DO,1x GND_ISO,1x CAN
1x RS232/RS422/RS485 </td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td> 1x HDMI 2.1 Tipo A 7680x4320 </td>
    </tr>
    <tr>
      <td>SATA</td>
      <td> 2x SATA III 6.0Gbps a 30 Hz </td>
    </tr>
    <tr>
      <td>SIM</td>
      <td> 1x ranura para tarjeta Nano SIM </td>
    </tr>
    <tr>
      <td>Botón</td>
      <td> Botón de reinicio, Botón de recuperación </td>
    </tr>
    <tr>
      <td rowSpan={9}>Expansión</td>
      <td> Mini PCIE </td>
      <td> 1x Mini PCIe para LoRaWAN®/4G/Serie inalámbrica (módulo no incluido) </td>
    </tr>
    <tr>
      <td> M.2 Key B </td>
      <td> 1x M.2 Key B (3042/3052) compatible con 4G/5G (módulo no incluido) </td>
    </tr>
    <tr>
      <td> M.2 Key E </td>
      <td> 1x M.2 Key E </td>
    </tr>
    <tr>
      <td> M.2 Key M </td>
      <td> 1x M.2 Key M (PCIE 4.0) </td>
    </tr>
    <tr>
      <td> Ventilador </td>
      <td> 1x conector para ventilador (5V PWM) </td>
    </tr>
    <tr>
      <td> TPM </td>
      <td> 1x conector TPM 2.0 (módulo no incluido) </td>
    </tr>
    <tr>
      <td> RTC </td>
      <td> 1x zócalo RTC (CR1220 incluido), <br />1x RTC de 2 pines </td>
    </tr>
    <tr>
      <td> Cámara </td>
      <td> 2x conectores de expansión (8 carriles para cada conector) </td>
    </tr>
    <tr>
      <td> PCIE </td>
      <td> 1x PCIE </td>
    </tr>
    <tr>
      <td> Alimentación </td>
      <td> Fuente de alimentación </td>
      <td> Bloque de terminales de CC 12V-36V de 2 pines (incluye adaptador de alimentación de 24V/5A)</td>
    </tr>
    <tr>
      <td rowSpan={3}> Mecánico </td>
      <td> Dimensiones (W x D) </td>
      <td> 176 x 163mm (módulo no incluido)</td>
    </tr>
    <tr>
      <td> Temperatura de funcionamiento </td>
      <td> -20~60℃ </td>
    </tr>
    <tr>
      <td> Peso </td>
      <td> 225g (módulo no incluido) </td>
    </tr>
  </tbody>
</table>
</div>

## Descripción general del hardware

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/hardware_overview.jpeg"/>
</div>

## Grabar el sistema operativo JetPack en la placa portadora J501

Aquí mostraremos cómo grabar [Jetpack](https://developer.nvidia.com/embedded/jetson-linux-archive) en un SSD NVMe conectado al reServer J501.

### Módulo compatible

- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)
- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)

### Requisitos previos

- PC host con Ubuntu
- Placa portadora reServer J501
- Módulo NVIDIA® Jetson AGX Orin™ 32GB/64GB
- Ventilador activo AGX Orin
- SSD interno NVMe M.2 2280
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

### Preparar la imagen de Jetpack

Aquí necesitamos descargar la imagen del sistema en nuestro PC con Ubuntu correspondiente al módulo Jetson que estamos utilizando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versión de Jetpack</th>
      <th>Módulo Jetson</th>
      <th> GMSL </th>
      <th>Enlace de descarga 1</th>
      <th>Enlace de descarga 2</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>5.1.3</td>
      <td>AGX Orin 32GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQD3U5NHij5gR5r4FB_AzC9vAbb3ERak_RvvIMoow0-X2fM?e=Ddf7Zi" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERG3upqXAQNHsJP6ZvG2MAEBGsndVCgrLnhcKvtWoGA6tA?e=14KO6z" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>c673dc8ae75addf8ca3224cf700be35<br />4eec0ca41cb5ecabb8953c276213a7119</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQD3ZjNepbc7SoC24H82Y4txAUhoSQIZ4l2ZcKGa3qgd9_E?e=bk1qc5" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EZ7iNOxMxL9AjcKFPLygVT8Bg5qnkE-ZsMmNmHkZzNayOg?e=qv2sbB" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>425a931e65f2715d8486c68565ad711<br />fd34b626ab023d025df2d84af81b62aa3</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQClLB_mdGMPQpqEw1jxTRuFAYqxZRQJZIAtiYt7-clcocI" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>F95E91C3BFB00D50EB999383F85949B4</td>
      <td>76abdd6de0a49bd95d57b361bebea59<br />a6a05e56779c7ceb863ad178f3ed98aaf</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBh9HqX5MHBQZF0WLe01k7mAXYqzHd4YJXaDt4uS2VZ8T4?e=AX0KSd" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eccs1larF2FNhKi8MHred5kB4pQImN4ZHSgDM3BUDVzBtQ?e=reKIhD" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>49076bd4bb7179dfe38c25bd5831c03<br />296bf26e86d67d9bca766a749a14257bd</td>
    </tr>
    <tr>
      <td rowSpan={4}>6.0</td>
      <td>AGX Orin 32GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERTmpYBKF2tAodLyqpajhLkBxPdGUIWXfGytdCGwNu28qw?e=cJIbtM" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EeHcCFk-chtDnEzoXiwvxZwBQuK3I3mTOAJ8mnZJE-P2uA?e=X9g0HK" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>B1C1BBB14058B0F5C00C5657A8EF8FA<br />7A4C3711DB8AD82F7E614311F95063989</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ef5wlNXtxVRIulSKwJTT3ocBmCBlHbQNVnz3LRDJtRwlGQ?e=KAIiVS" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EX5HoeV09eFKtWj9YhAfgZ8Bt2k9bxxxSO5-TQBZoGLB-Q?e=hvcfG1" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>0C58022F626321EE42464AACBB47029<br />6B1AFE0A7256787158539BE7EC73E19C6</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQClLB_mdGMPQpqEw1jxTRuFAYqxZRQJZIAtiYt7-clcocI" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EY-HFdsaHWVOvJJ5fMynVO0BvEOv5W0h1IxeSfesNFRYag?e=5thYHs" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>4077631986A66EB3AF5FBF4FF2FBDBC<br />CD07E4DC1AA4076414EB1F4640AF72451</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQClLB_mdGMPQpqEw1jxTRuFAYqxZRQJZIAtiYt7-clcocI" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EUmpL5LNJDRLjoC6oQg6Vv4BgQ9eA4MUl4yE43fycz667w?e=Xw5nga" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td>8DCFF0FFBA81B756B0C62E50F4A106B<br />44116CC8171C05F48A328DE594D6A4CD9</td>
    </tr>
    <tr>
      <td rowSpan={4}>6.2</td>
      <td>AGX Orin 32GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfhMqk5d6tFKiDqbtyWKFdsBV-NLqs9L4NBY0dRC-Y_jHw?e=JQMYcn" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td> - </td>
      <td>69CFD82D0C70B55D5BDD34E3EAF7AE8<br />DDCE002CCCDBA3DCEE40F40CD8BBA0478</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Edgau76MPUZAnuAixzf7TSUBGF2edqqdZO3mHRaZB_Gd7Q?e=omVwi3" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td> - </td>
      <td>3BAEB35868E4B187F4B7C35FA44D8E0<br />BD9486161E14F9F073993216F83DFA0E4</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCcNYUtYA0RTL2GQwXFv35rAdWnduxknLXrUtQNxklpIZo" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td> - </td>
      <td>B6A9F41B8B42060D19F811B718E4B71<br />FCBE699BB9EC7A50B4B24DF205003111B</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCcNYUtYA0RTL2GQwXFv35rAdWnduxknLXrUtQNxklpIZo" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td> - </td>
      <td>AA04EFB99374DCDC89A57C039FA4E1F<br />F5C9371B22F8ED83612AC4C799CCB2640</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
El archivo de imagen de jetpack5 tiene un tamaño aproximado de **4.5GB** y debería tardar alrededor de 15 minutos en descargarse. El archivo de imagen de Jetpack6 tiene un tamaño aproximado de **16.7GB** y debería tardar alrededor de 60 minutos en descargarse. Por favor, espera pacientemente a que la descarga se complete.
:::

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en el wiki, se confirma que el firmware que descargaste está completo e intacto.
:::

### Entrar en modo Force Recovery

:::info
Antes de poder continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en modo force recovery.
:::

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/CGMGZGqZPKM" title="J501 Enter Force Recovery Mode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<details>

<summary> Paso a paso </summary>

**Paso 1.** Mantén presionado el botón de force recovery sin soltarlo.

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/button.jpg" />
</div>

**Paso 2.** Enciende la placa carrier conectando el cable de alimentación.

**Paso 3.** Suelta el botón de force recovery.

**Paso 4.** Conecta la placa al PC host con Ubuntu con un cable de transmisión de datos USB Type-C.

**Paso 5.** En el PC host con Linux, abre una ventana de Terminal e introduce el comando `lsusb`. Si el contenido devuelto incluye una de las siguientes salidas según el Jetson SoM que utilices, entonces la placa está en modo force recovery.

- Para AGX Orin 32GB: **0955:7223 NVidia Corp**
- Para AGX Orin 64GB: **0955:7023 NVidia Corp**

La siguiente imagen es para AGX Orin 32GB

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### Flashear a Jetson

**Paso 1:** Extrae el archivo de imagen descargado:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Paso 2:** Ejecuta el siguiente comando para flashear el sistema jetpack en el SSD NVMe:

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

**Paso 3:** Conecta la J501 a una pantalla usando el conector HDMI de la placa y completa la configuración inicial:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Por favor, completa la **System Configuration** según tus necesidades.
:::

**Paso 4 (Opcional):** Instalar Nvidia Jetpack SDK

Por favor, abre la terminal en el dispositivo Jetson y ejecuta los siguientes comandos:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## Recursos

- [Hoja de datos de la placa carrier reServer Industrial J501](https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/reServer_Industrial_J501_Carrier_Board_Datasheet.pdf)
- [Esquemático de reServer Industrial J501](https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/202003906_reServer_Industrial_J501_Carrier_Board_v1.0_SCH_PDF_20240529.pdf)
- [Archivo 3D de reServer Industrial J501](https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/RESERVER_AGX_ORIN_CARRIER_BOARD.stp)
- [Catálogo de series Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Casos de éxito de Seeed Studio Edge AI](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Comparación de series Seeed Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Resumen de dispositivos Seeed Jetson en una página](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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
