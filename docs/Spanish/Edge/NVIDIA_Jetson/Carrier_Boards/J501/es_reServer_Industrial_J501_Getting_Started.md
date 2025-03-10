---
description: Esta wiki presenta las características de la Carrier Board J501 y explica cómo instalar el sistema Jetpack en la Carrier Board J501.
title: Flashear Jetpack
keywords:
- reServer
- Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reserver_j501_getting_started
last_update:
  date: 08/19/2024
  author: Youjiang
---

# Primeros pasos con la reServer J501

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/reServer_J501.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-Industrial-J501-Carrier-Board-Add-on.html">
    <strong><span><font color={'FFFFFF'} size={"4"}> Conseguir una ahora 🖱️</font></span></strong>
  </a>
</div>

La Carrier Board J501 es una potente placa de extensión que admite módulos NVIDIA Jetson AGX Orin. Cuenta con múltiples puertos de datos e interfaces de extensión, liberando completamente el rendimiento completo del módulo AGX Orin. También admite la adición de extensión GMSL para conectar hasta 8 cámaras GMSL.

## Características

- **La PC con IA más poderosa para compúto en el borde:** Diseñada para integrarse con el módulo Jetson AGX Orin, con hasta 275 TOPS de rendimiento de IA, 8 veces el rendimiento de IA en comparación con Jetson AGX Xavier. Potencia configurable entre 15W y 60W.
- **Soporte de interfaz de alta velocidad para múltiples sensores:** 22 carriles de PCIe Gen4, 1x 10GbE, un Display Port, 16 carriles de MIPI CSI-2, interfaces USB 3.2 y 40 pines.
- **Soporte de interfaz de baja velocidad para múltiples IO:** 4x DI, 4x DO, 3x GND_DI, 2x GND_DO, 1x GND_ISO, 1x CAN, 1x RS232/RS422/RS485.
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
      <td> 3x USB3.1, <br /> 1x USB3.1 Type C(Modo Host), <br /> 1x USB2.0 Tipo - C(Modo dispositivo) </td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td> 4x DI,4x DO,3x GND_DI,2x GND_DO,1x GND_ISO,1x CAN
1x RS232/RS422/RS485 </td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td> 1x HDMI 2.1 Tipo - A 7680x4320 </td>
    </tr>
    <tr>
      <td>SATA</td>
      <td> 2x SATA III 6.0Gbps a 30 Hz </td>
    </tr>
    <tr>
      <td>SIM</td>
      <td> 1x Nano slot de tarjeta SIM </td>
    </tr>
    <tr>
      <td>Botón</td>
      <td> Botón de Reset, botón de recuperación </td>
    </tr>
    <tr>
      <td rowSpan={9}>Expansión</td>
      <td> Mini PCIE </td>
      <td> 1x Mini PCIe para LoRaWAN®/4G/Series Wireless (Módulo no incluido) </td>
    </tr>
    <tr>
      <td> M.2 Key B </td>
      <td> 1x M.2 Key B (3042/3052) soporte para 4G/5G (Módulo no incluido) </td>
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
      <td> 1x Conector para ventilador (5V PWM) </td>
    </tr>
    <tr>
      <td> TPM </td>
      <td> 1x Conector TPM 2.0 (Módulo no incluido) </td>
    </tr>
    <tr>
      <td> RTC </td>
      <td> 1x socket RTC (CR1220 incluido), <br />1x RTC 2-pin </td>
    </tr>
    <tr>
      <td> Cámara </td>
      <td> 2x Conectores de expansión (8 carriles por cada conector) </td>
    </tr>
    <tr>
      <td> PCIE </td>
      <td> 1x PCIE </td>
    </tr>
    <tr>
      <td> Alimentación </td>
      <td> Fuente de alimentación </td>
      <td> Bloque terminal DC 12V-36V de 2 pines (Incluye adaptador de 24V/5A)</td>
    </tr>
    <tr>
      <td rowSpan={3}> Mecánica </td>
      <td> Dimensiones (W x D) </td>
      <td> 176 x 163mm </td>
    </tr>
    <tr>
      <td> Temperatura de operación </td>
      <td> -20~60℃ </td>
    </tr>
    <tr>
      <td> Peso </td>
      <td> 225g </td>
    </tr>
  </tbody>
</table>
</div>

## Descripción general de Hardware

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/hardware_overview.jpeg"/>
</div>


## Flashea JetPack OS en la Carrier Board J501

Aquí, te mostraremos cómo flashear [Jetpack](https://developer.nvidia.com/embedded/jetson-linux-archive) en un SSD NVMe conectado a la reServer J501.

### Módulos soportados
- [Módulo NVIDIA® Jetson AGX Orin™ 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5458.html) 
- [Módulo NVIDIA® Jetson AGX Orin™ 64GB](https://www.seeedstudio.com/NVIDIA-JETSON-AGX-ORIN-64GB-Module-p-5552.html) 

### Prerequisitos

- PC con Ubuntu OS
- reServer Carrier Board J501
- Módulo NVIDIA® Jetson AGX Orin™ 32GB/64GB
- Ventilador activo AGX Orin
- SSD Interno NVMe M.2 2280
- Cable USB Tipo-C de transmisión de datos

:::info

Te recomendamos que utilices dispositivos host físicos de Ubuntu en lugar de alguna máquina virtuale.
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

### Preparar la imagén de Jetpack

Aquí, necesitamos descargar la imagen del sistema a nuestra PC con Ubuntu correspondiente al módulo Jetson que estamos usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versión de Jetpack</th>
      <th>Módulo Jetson</th>
      <th> GMSL </th>
      <th>Link de descarga 1</th>
      <th>Link de descarga 2</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>5.1.3</td>
      <td>AGX Orin 32GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EagENvz49i1GhTAMR9xCLlkBHscdcSHkYf9PQuPFcgR50A?e=mOMJ2c" target="_blank" rel="noopener noreferrer">Descarga</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERG3upqXAQNHsJP6ZvG2MAEBGsndVCgrLnhcKvtWoGA6tA?e=14KO6z" target="_blank" rel="noopener noreferrer">Descarga</a></td>
      <td>56571770D7B1BAF53EAD3B1C173C075<br />4592601348501288C3E081FF8D51907F7</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUNTXrMsDcJCnIN2RvmXg6EBBLY6PRZiegvUjqI_N2i0YQ?e=SXEXXz" target="_blank" rel="noopener noreferrer">Descarga</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EZ7iNOxMxL9AjcKFPLygVT8Bg5qnkE-ZsMmNmHkZzNayOg?e=qv2sbB" target="_blank" rel="noopener noreferrer">Descarga</a></td>
      <td>077878E3B84022BA1344ED2EE8738B9<br />EAECA6F6136468369B7DBB4FC5EF48802</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERoEi192vKFPnvFaqnqVz_oBNi3PAQ2W7gkZHpGu0XuuEw?e=pXYw9X" target="_blank" rel="noopener noreferrer">Descarga</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ESfErbFgQl9NudcbGZXL3LMB9wavWcQwjtW6wYYtfwkE3A?e=H5sR4J" target="_blank" rel="noopener noreferrer">Descarga</a></td>
      <td>F3852FFC7A8CDDFD9C2857B2F3F6168<br />99DC69EE4D5BA92704DB192E803C29EA0</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ecebi5JjKaVHmY-DymgG8AIBPRgAuCXVCrf4IYiKIfsMxA?e=OJPKwB" target="_blank" rel="noopener noreferrer">Descarga</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eccs1larF2FNhKi8MHred5kB4pQImN4ZHSgDM3BUDVzBtQ?e=reKIhD" target="_blank" rel="noopener noreferrer">Descarga</a></td>
      <td>61434E1A88FF2A95F6B13B5FFA51557<br />FAE8D46C67C72DDF862DE51D91DAF6987</td>
    </tr>
    <tr>
      <td rowSpan={4}>6.0</td>
      <td>AGX Orin 32GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERTmpYBKF2tAodLyqpajhLkBxPdGUIWXfGytdCGwNu28qw?e=cJIbtM" target="_blank" rel="noopener noreferrer">Descarga</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EeHcCFk-chtDnEzoXiwvxZwBQuK3I3mTOAJ8mnZJE-P2uA?e=X9g0HK" target="_blank" rel="noopener noreferrer">Descarga</a></td>
      <td>B1C1BBB14058B0F5C00C5657A8EF8FA<br />7A4C3711DB8AD82F7E614311F95063989</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ef5wlNXtxVRIulSKwJTT3ocBmCBlHbQNVnz3LRDJtRwlGQ?e=KAIiVS" target="_blank" rel="noopener noreferrer">Descarga</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EX5HoeV09eFKtWj9YhAfgZ8Bt2k9bxxxSO5-TQBZoGLB-Q?e=hvcfG1" target="_blank" rel="noopener noreferrer">Descarga</a></td>
      <td>0C58022F626321EE42464AACBB47029<br />6B1AFE0A7256787158539BE7EC73E19C6</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>❌</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWbP7xmg-fRAs7N-7iL42QMBaRcQvV23IITvt-uC4p2rUg?e=XZmnzC" target="_blank" rel="noopener noreferrer">Descarga</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EY-HFdsaHWVOvJJ5fMynVO0BvEOv5W0h1IxeSfesNFRYag?e=5thYHs" target="_blank" rel="noopener noreferrer">Descarga</a></td>
      <td>4077631986A66EB3AF5FBF4FF2FBDBC<br />CD07E4DC1AA4076414EB1F4640AF72451</td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUK5fwDqq0hNgcnyXg_-qXUBa9qnRJQ0AXdcInMIJWtbZg?e=iFVAAl" target="_blank" rel="noopener noreferrer">Descarga</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EUmpL5LNJDRLjoC6oQg6Vv4BgQ9eA4MUl4yE43fycz667w?e=Xw5nga" target="_blank" rel="noopener noreferrer">Descarga</a></td>
      <td>8DCFF0FFBA81B756B0C62E50F4A106B<br />44116CC8171C05F48A328DE594D6A4CD9</td>
    </tr>
  </tbody>
</table>
</div>

:::Peligro
El archivo de imagen de jetpack5 tiene un tamaño aproximado de **4,5 GB** y debería tardar unos 15 minutos en descargarse. El archivo de imagen Jetpack6 tiene un tamaño aproximado de **16,7 GB** y su descarga debería tardar unos 60 minutos. Espera a que se complete la descarga.
:::

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256. 

En tu máquina host con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <Archivo>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en la wiki, confirma que el firmware que descargaste está completo e intacto.
:::

### Entrar a modo de recuperación forzada

:::info
Antes de continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en modo de recuperación forzada.
:::

<div align="center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/CGMGZGqZPKM" title="J501 Enter Force Recovery Mode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<details>

<summary> Paso a paso </summary>

**Paso 1.** Manten presionado el botón de recuperación forzada sin soltarlo.

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/button.jpg" />
</div>

**Paso 2.** Enciende la Carrier Board conectando el cable de alimentación.

**Paso 3.** Suelta el botón de recuperación forzada.

**Paso 4.** Conecta la placa a la PC host de Ubuntu con un cable de transmisión de datos USB tipo C.

**Paso 5.** En la PC host con Linux, abre una terminal e ingresa el comando `lsusb`. Si el contenido devuelto tiene una de las siguientes salidas según el Jetson SoM que utilices, entonces la placa está en modo de recuperación forzada.

- Para la AGX Orin 32GB: **0955:7223 NVidia Corp**
- Para la AGX Orin 64GB: **0955:7423 NVidia Corp**

La siguiente imagen es para la AGX Orin 32GB

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### Flashea la Jetson

**Paso 1:** Extre el archivo de imagen descargado:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Paso 2:** Ejecuta el siguiente comando para actualizar el sistema jetpack al SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás el siguiente resultado si el proceso de flasheo concluye exitosamente

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::nota
El comando flash puede ejecutarse durante 2 - 10 minutos.
:::

**Paso 3:** Conecta el J501 a una pantalla usando el conector HDMI en la placa y finaliza la configuración inicial:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Completa la **Configuración del sistema** según tus necesidades.
:::

**Paso 4 (Opcional):** Instala Nvidia Jetpack SDK

Abre la terminal en el dispositivo Jetson y ejecuta los siguientes comandos:

```bash
sudo apt update
sudo apt install nvidia-jetpack
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