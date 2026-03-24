---
description: Introducción a reComputer Industrial
title: Introducción a reComputer Industrial
keywords:
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_Industrial_Getting_Started
sku: 110110190, 110110193, 110110188, 110110191, 110110189, 110110192, B802000101
last_update:
  date: 05/16/2023
  author: Lakshantha
createdAt: '2025-06-05'
updatedAt: '2026-03-05'
url: https://wiki.seeedstudio.com/es/reComputer_Industrial_Getting_Started/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Introducción a reComputer Industrial

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/2.png"/></div>

La serie reComputer industrial ofrece sistemas completos que incluyen módulos NVIDIA Jetson™ Xavier NX/ Orin Nano/ Orin NX/, con un rendimiento de IA que va de 20 TOPS a 100 TOPS. Con Jetpack 5.1.1 preinstalado, reComputer industrial simplifica el desarrollo y es ideal para crear aplicaciones de analítica de vídeo, detección de objetos, procesamiento de lenguaje natural, imagen médica y robótica, lo que aporta transformación digital a sectores como ciudades inteligentes, seguridad, automatización industrial y fábricas inteligentes.

reComputer industrial viene con un disipador pasivo y un diseño sin ventilador, lo que lo hace ideal para su uso en entornos exigentes. El disipador pasivo permite una refrigeración eficiente sin necesidad de ventilador, reduciendo el riesgo de fallos de componentes debido al polvo u otros contaminantes. El diseño sin ventilador también reduce los niveles de ruido y el consumo de energía, lo que lo hace adecuado para entornos sensibles al ruido y minimiza los costes energéticos.

reComputer industrial dispone de 2 puertos RJ45 GbE, uno de los cuales es un puerto PoE PSE para proporcionar alimentación a través de Ethernet a dispositivos como cámaras IP. Esto elimina la necesidad de una fuente de alimentación independiente y facilita el despliegue de dispositivos de red en zonas sin tomas de corriente fácilmente disponibles. El otro puerto GbE se utiliza para conectarse a un switch o router de red, lo que permite la comunicación con otros dispositivos de la red y el acceso a Internet.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

## Características

- **PC compacto sin ventilador:** Diseño térmico de referencia, rango de temperatura ampliado de -20 ~ 60°C con flujo de aire de 0.7m/s
- **Diseñado para interfaces industriales:** 2x RJ-45 GbE (1 para POE-PSE 802.3 af); 1x RS-232/RS-422/RS-485; 4x DI/DO; 1x CAN; 3x USB3.2; 1x TPM2.0 (módulo opcional)
- **Conectividad híbrida:** Compatible con 5G/4G/LTE/LoRaWAN® (módulo opcional) con 1 ranura para tarjeta Nano SIM
- **Montaje flexible:** Escritorio, carril DIN, montaje en pared, VESA
- **Certificaciones:** FCC, CE, RoHS, UKCA

## Especificaciones

<table>
  <thead>
    <tr>
      <th colSpan={2}>Nombre del producto</th>
      <th>reComputer Industrial J4012</th>
      <th>reComputer Industrial J4011</th>
      <th> reComputer Industrial J3011 </th>
      <th> reComputer Industrial J3010</th>
      <th>reComputer Industrial J2012</th>
      <th>reComputer Industrial J2011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={2}>Módulo NVIDIA Jetson</td>
      <td>Orin NX 16GB</td>
      <td>Orin NX 8GB</td>
      <td>Orin Nano 8GB</td>
      <td>Orin Nano 4GB</td>
      <td>Xavier NX 16GB</td>
      <td>Xavier NX 8GB</td>
    </tr>
    <tr>
      <td colSpan={2}>SKU</td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html">110110191</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html">110110190</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J3011-p-5682.html">110110193</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J3010-p-5686.html">110110192</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J2012-p-5685.html">110110189</a></td>
      <td><a href="https://www.seeedstudio.com/reComputer-Industrial-J2011-p-5683.html">110110188</a></td>
    </tr>
    <tr>
      <td rowSpan={6}>Sistema de procesador</td>
      <td>Rendimiento de IA</td>
      <td>100 TOPS</td>
      <td>70 TOPS</td>
      <td>40 TOPS</td>
      <td>20 TOPS</td>
      <td colSpan={2}>21 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td colSpan={3}>GPU NVIDIA Ampere de 1024 núcleos con 32 Tensor Cores</td>
      <td>GPU NVIDIA Ampere de 512 núcleos con 16 Tensor Cores</td>
      <td colSpan={2}>GPU NVIDIA Volta™ de 384 núcleos con 48 Tensor Cores</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 de 64 bits y 8 núcleos<br />2MB L2 + 4MB L3</td>
      <td colSpan={3}>CPU Arm® Cortex®-A78AE v8.2 de 64 bits y 6 núcleos<br />1.5MB L2 + 4MB L3</td>
      <td colSpan={2}>CPU NVIDIA Carmel ARM®v8.2 de 64 bits y 6 núcleos, 6MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Memoria</td>
      <td>16GB 128-bit LPDDR5<br />102.4GB/s</td>
      <td>8GB 128-bit LPDDR5<br />102.4GB/s</td>
      <td>8GB 128-bit LPDDR5<br />68 GB/s</td>
      <td>4GB 64-bit LPDDR5<br />34 GB/s</td>
      <td>16GB 128-bit LPDDR4x<br />59.7GB/s</td>
      <td>8GB 128-bit LPDDR4x<br />59.7GB/s</td>
    </tr>
    <tr>
      <td>Codificación de vídeo</td>
      <td colSpan={2}>1*4K60 (H.265) | 3*4K30 (H.265) | 6*1080p60 (H.265) | 12*1080p30 (H.265)</td>
      <td colSpan={2}>1080p30 compatible con 1-2 núcleos de CPU</td>
      <td colSpan={2}>2*4K60 | 4*4K30 | 10*1080p60 | 22*1080p30 (H.265)<br /> 2*4K60 | 4*4K30 | 10*1080p60 | 20*108p30 (H.264)</td>
    </tr>
    <tr>
      <td>Decodificación de vídeo</td>
      <td colSpan={2}>1×8K30 (H.265) | 2×4K60 (H.265) | 4×4K30 (H.265) | 9×1080p60 (H.265) | 18×1080p30 (H.265)</td>
      <td colSpan={2}>1*4K60 (H.265) | 2*4K30 (H.265) | 5*1080p60 (H.265) | 11*1080p30 (H.265)</td>
      <td colSpan={2}>2*8K30 | 6*4K60 | 12*4K30 | 22*1080p60 | 44*1080p30 (H.265)<br /> 2*4K60 | 6*4K30 | 10*1080p60 | 22*1080p30 (H.264)</td>
    </tr>
    <tr>
      <td rowSpan={2}>Almacenamiento</td>
      <td>eMMC<br /></td>
      <td><br />-</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td colSpan={2}>16GB eMMC 5.1</td>
    </tr>
    <tr>
      <td>Expansión</td>
      <td colSpan={6}>M.2 Key M PCIe Gen4.0 SSD (M.2 NVMe 2280 SSD 128G incluido)</td>
    </tr>
    <tr>
      <td rowSpan={6}>E/S</td>
      <td>Red</td>
      <td colSpan={6}>1* LAN1 RJ45 GbE PoE(PSE 802.3 af 15 W)<br />1* LAN2 RJ45 GbE (10/100/1000Mbps) </td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={6}>3* USB3.2 Gen1, 1* USB2.0 Type C(Device mode), 1* USB2.0 Type C For Debug UART &amp; RP2040</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={6}>4*DI,4*DO,3*GND_DI,2*GND_DO,1*GND_ISO,1*CAN<br /></td>
    </tr>
    <tr>
      <td>COM</td>
      <td colSpan={6}>1* DB9 (RS232/RS422/RS485)</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td colSpan={6}>1*HDMI 2.0 Type A</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={6}>1* ranura para tarjeta Nano SIM</td>
    </tr>
    <tr>
      <td rowSpan={7}>Expansión</td>
      <td>Mini PCIe</td>
      <td colSpan={6}>Mini PCIe para 4G/LoRaWAN®&nbsp;&nbsp;(módulo opcional) <br /></td>
    </tr>
    <tr>
      <td>Wi-Fi</td>
      <td colSpan={6}>Compatible con SMD Wi-Fi/Bluetooth (módulo opcional) </td>
    </tr>
    <tr>
      <td>M.2 Key B </td>
      <td colSpan={6}>M.2 Key B compatible con 4G/5G (módulo opcional) </td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td colSpan={6}>Sin ventilador, disipador pasivo<br />1*Conectores de ventilador (5V PWM)</td>
    </tr>
    <tr>
      <td>TPM</td>
      <td colSpan={6}>1* conector TPM 2.0 (módulo opcional) </td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={6}>1* zócalo RTC (CR1220 incluido), 1* RTC de 2 pines</td>
    </tr>
    <tr>
      <td>Cámara</td>
      <td colSpan={6}>2* CSI (2-lane 15pin)</td>
    </tr>
    <tr>
      <td rowSpan={2}>Alimentación</td>
      <td>Fuente de alimentación</td>
      <td colSpan={6}>Bloque de terminales de 2 pines DC 12V-24V</td>
    </tr>
    <tr>
      <td>Adaptador de corriente</td>
      <td colSpan={6}>Adaptador de corriente de 19V (sin cable de alimentación) </td>
    </tr>
    <tr>
      <td rowSpan={3}>Mecánico<br /></td>
      <td>Dimensiones (W x D x H)</td>
      <td colSpan={6}>159mm×155mm×57mm</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td colSpan={6}>1.57kg</td>
    </tr>
    <tr>
      <td>Instalación</td>
      <td colSpan={6}>Escritorio, carril DIN, montaje en pared, VESA</td>
    </tr>
    <tr>
      <td rowSpan={4}>Entorno</td>
      <td>Temperatura de funcionamiento</td>
      <td colSpan={6}> -20 ~ 60°C con 0.7m/s</td>
    </tr>
    <tr>
      <td>Humedad de funcionamiento</td>
      <td colSpan={6}>95% @ 40 °C (sin condensación)</td>
    </tr>
    <tr>
      <td>Vibración</td>
      <td colSpan={6}>3 Grms @ 5 ~ 500 Hz, aleatorio, 1 hr/eje</td>
    </tr>
    <tr>
      <td>Choque</td>
      <td colSpan={6}>Aceleración máxima de 50G (11 mseg)</td>
    </tr>
    <tr>
      <td colSpan={2}>SO</td>
      <td colSpan={6}>Jetpack 5.1 (o superior) preinstalado (proporciona sistema operativo Linux con paquete de soporte de placa)</td>
    </tr>
    <tr>
      <td colSpan={2}>Certificación</td>
      <td colSpan={6}>FCC, CE, RoHS, UKCA</td>
    </tr>
    <tr>
      <td colSpan={2}>Garantía</td>
      <td colSpan={6}>2 años</td>
    </tr>
  </tbody>
</table>

## Descripción general del hardware

### Sistema completo

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/3.jpg"/></div>

### Placa portadora

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/4.jpg"/></div>

## Flashear JetPack

reComputer Industrial viene con JetPack 5.1.1 preinstalado en un SSD de 128GB junto con los controladores necesarios. Esto incluye componentes del SDK como CUDA, CUDNN y TensorRT. Sin embargo, si quieres volver a flashear Jetpack en el SSD incluido o en un nuevo SSD, puedes seguir los pasos.

:::note
Si quieres utilizar SSD con reComputer Industrial, solo te recomendamos elegir las versiones de [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html), [256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html) y [512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) de Seeed.
:::

### Requisitos previos

Debes preparar el siguiente hardware antes de comenzar con reComputer Industrial

- reComputer Industrial
- Adaptador de corriente suministrado con cable de alimentación ([versión US](https://www.seeedstudio.com/AC-US-p-5122.html) o [versión EU](https://www.seeedstudio.com/AC-EU-p-5121.html))
- PC host con Ubuntu 20.04
- Cable de transmisión de datos USB Type-C
- Monitor externo
- Cable HDMI
- Teclado y ratón

:::info
Recomendamos que utilices dispositivos host físicos con Ubuntu en lugar de máquinas virtuales.
Consulta la siguiente tabla para preparar la máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> Versión de JetPack </td>
        <td class="dbon" colspan="3"> Versión de Ubuntu (Ordenador Host) </td>
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

Ahora necesitas entrar en modo de recuperación en la placa reComputer Industrial para poder flashear el dispositivo.

1. Conecta un cable USB Type-C entre el puerto **USB2.0 DEVICE** y tu PC.
2. Utiliza un pin e insértalo en el orificio **RECOVERY** para pulsar el botón de recuperación y mantenlo presionado.
3. Conecta el **conector de alimentación de bloque de terminales de 2 pines** incluido al conector de alimentación de la placa y conecta el adaptador de alimentación incluido con un cable de alimentación para encender la placa.
4. Suelta el botón de recuperación.

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/97.png"/></div>

:::note
Asegúrate de encender el dispositivo mientras mantienes presionado el botón RECOVERY; de lo contrario, no entrará en modo de recuperación.
:::

En el PC host con Ubuntu, abre una ventana de Terminal e introduce el comando **lsusb**. Si el contenido devuelto tiene una de las siguientes salidas según el Jetson SoM que utilices, entonces la placa está en modo de recuperación forzada.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

### Flashear a Jetson

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Jetpack 5.1.1" label="Jetpack 5.1.1">

Aquí ofrecemos 2 métodos diferentes de flasheo.

1. Descargar la imagen completa del sistema que hemos preparado, que incluye NVIDIA JetPack, controladores de periféricos de hardware y flashearla al dispositivo
2. Descargar el NVIDIA L4T oficial, utilizar los controladores de periféricos de hardware incluidos y flashear al dispositivo

:::note
La descarga del primer método es de alrededor de 14GB y la del segundo método es de unos 3GB.
:::

<Tabs>
<TabItem value="Method 1" label="Method 1">

- **Paso 1:** Descarga la imagen del sistema en tu PC con Ubuntu correspondiente a la placa que estás utilizando

<div class="table-center">
  <table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Dispositivo</th>
      <th>Enlace de imagen 1</th>
      <th>Enlace de imagen 2</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUhr3fzFqx9DmH83QrXmFAwBEpfC-VGsyBnqHSoOPPAzGQ?e=Wv7d8f" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EcXVegQs83tJpv3kmJPMmSEB8M9djK_gWgJapIJnOJQeUw?e=ntbXLi" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>F6623A277E538F309999107297405E1<br />378CF3791EA9FD19F91D263E3B4C88333</td>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbaTHCLEwfNOqAR1DH-IAWYB20HBEPG2G-IkPJ1dJJcWJw?e=2VYQXJ" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EStCSSWeyUtLkJXMj5Y6tXcBru2PIQNHLl6p2BZsRbzxjA?e=Gaaa6m" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>414DFE16703D0A2EE972DF1C77FCE2E<br />8B44BC71726BB6EE4B1439C2D0F19A653</td>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbQu844dGA5Fjn3n-320hmoBt6wngMrIv6fErKLEZI1GyQ?e=uSU6qb" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERgyc60CqY9Aog6BMW9-yqQBj8pMaakSFTzHHvb4edt_eg?e=9qFHKp" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>347AB7247ED83286BDFAEF84B49B84C<br />5F5B871AEE68192339EDE4773149D8737</td>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETnL5lrC6IBPqm6Lafx1nCMBJJjml1IrCagrHPGhxFpzxA?e=BBM0kl" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eb7J_TSNsDBCrvc1RbSOmnoBqmjR9jYhkvZpdQJOzkH5KA?e=h4r74v" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>860EC8EB3245CB91E7C5C321B26333B<br />59456A3418731FEF73AE0188DF655EE46</td>
    </tr>
    <tr>
      <td>reComputer Industrial J2012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeD01G8dJ8pIm187oS_VX-sBu3SmD4LhaBmwVz7X4-n_Gw?e=x9ULSq" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Ef_fEAq0aA5JksfnEz62JKABfYTUzlTdOxkiKwoThp17xg?e=UlSs7A" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>821CF92AF1FE8A785689FAF4751615A<br />A30E7F0770B4FA23327DFAF2C8B53FDD7</td>
    </tr>
    <tr>
      <td>reComputer Industrial J2011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVYQRYavCVRJrHGz12qUPlIBdmK3hrjEyglRkuLhBSlYuA?e=SBnrTU" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EVVUAexfVKxDnjbUGtYrJhEB1He6ZXIAD4uriNP76fxbMg?e=kGYF6h" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>DAB8FC069E4C62434C77AE3A6BA13EE<br />FB30003C9A14BFE82DE879B88ACDD85FA</td>
    </tr>
  </tbody>
  </table>
</div>

<p style={{ fontSize: '0.9em', color: 'yellow' , textAlign: 'center'}}>
  * Los archivos de imagen de Download1 y Download2 son los mismos. Puedes elegir el enlace con la velocidad de descarga más rápida.
</p>

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en el wiki, se confirma que el firmware que descargaste está completo e intacto.
:::

El código fuente de las imágenes anteriores se puede encontrar [aquí](https://github.com/Seeed-Studio/Linux_for_Tegra)

- **Paso 2:** Extrae el archivo generado

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **Paso 3:** Navega hasta el archivo extraído anteriormente y ejecuta el comando de flasheo como se indica a continuación

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Ahora comenzará a flashear la imagen del sistema a la placa. Si el flasheo se realiza correctamente, verás la siguiente salida

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Paso 4:** Conecta la placa a una pantalla utilizando el conector HDMI de la placa y completa la configuración inicial

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

Después de eso, la placa se reiniciará y estará lista para usar.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>
  </TabItem>
<TabItem value="Method 2" label="Method 2">

**Descargar y preparar NVIDIA L4T y rootfs**

```sh
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/jetson_linux_r35.3.1_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2
tar xf jetson_linux_r35.3.1_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Descargar y preparar controladores**

- **Paso 1:** Descarga los archivos del controlador en tu PC con Ubuntu correspondientes a la placa que estás utilizando

<table>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Enlace de descarga</th>
      <th>Versión de JetPack</th>
      <th>Versión de L4T</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Jetson Orin NX 8GB/ 16GB,<br />Orin Nano 8GB</td>
      <td rowSpan={2}><a href="https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/orin-nx-8-16-nano-8-recomputer-industrial.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td rowSpan={4}>5.1.1</td>
      <td rowSpan={4}>35.3.1</td>
    </tr>
    <tr>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/orin-nano-4-recomputer-industrial.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Xavier NX 8GB/ 16GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reComputer-Industrial/xavier-nx-8-16-recomputer-industrial.zip/download" target="_blank" rel="noopener noreferrer">Descargar</a></td>
    </tr>
  </tbody>
</table>

- **Paso 2:** Mueve los controladores periféricos descargados a la misma carpeta que el directorio **Linux_For_Tegra**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/125.png"/></div>

- **Paso 3:** Extrae el archivo .zip del controlador descargado. Aquí instalamos adicionalmente el paquete **unzip** que es necesario para descomprimir el archivo .zip

```sh
sudo apt install unzip
sudo unzip xxxx.zip # Replace xxxx with the driver file name
```

Aquí se te preguntará si deseas reemplazar los archivos. Escribe A y presiona ENTER para reemplazar los archivos necesarios

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/126.png"/></div>

- **Paso 4:** Navega al directorio **Linux_for_Tegra** y ejecuta el comando de flasheo como se indica a continuación

```sh
cd Linux_for_Tegra

# For Orin NX and Orin Nano
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --network usb0 recomputer-orin-industrial external

# For Xavier NX
sudo ADDITIONAL_DTB_OVERLAY_OPT="BootOrderNvme.dtbo" ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_l4t_t194_qspi_p3668.xml --no-systemimg" --network usb0  recomputer-xavier-nx-industrial external
```

Ahora comenzará a flashear la imagen del sistema a la placa. Si el flasheo es exitoso, verás la siguiente salida

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Paso 5:** Conecta la placa a una pantalla usando el conector HDMI de la placa y completa la configuración inicial

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

Después de eso, la placa se reiniciará y verás lo siguiente

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

- **Paso 6:** Abre una ventana de terminal dentro del dispositivo, ejecuta lo siguiente, ¡el dispositivo se reiniciará y estará listo para usar!

```sh
systemctl disable nvgetty.service
sudo depmod -a
sudo reboot
```

Además, si quieres instalar componentes del SDK como CUDA, cuDNN, TensorRT, ejecuta lo siguiente

```sh
sudo apt update
sudo apt install nvidia-jetpack -y
```

  </TabItem>
  </Tabs>

---

</TabItem>

<TabItem value="Jetpack 5.1.3" label="Jetpack5.1.3">

- **Paso 1:** Descarga la imagen del sistema en tu PC con Ubuntu correspondiente a la placa que estás utilizando

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Dispositivo</th>
      <th>Enlace</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQByoedqLYEuT4Y1TWtbQeYfAaYErd1Nzu46JpYpF6Ok4EE?e=uEK4OQ" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <th>f34512b24a07469f6014add6b88df060002f02c53705c91181ee380d73146b5e</th>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCggS3uTiIzQqidauGapvXtAS8tiOaWRZtusAN1S6SXsTs?e=LLjnrY" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <th>9c590665723aa8847898f976070ecc120b936474262b360459627342c4c0c6f1</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAx3qELD5fvTKvYA8Bi-TwAAV5SJdxC6ok_lnwjqiw3Prg?e=MIcJng" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <th>fe3fe9b275156ddd9cde2b4fcf628122bf4a66e1ff1184cf6769be81ba6e4942</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBiL7sGB2_7RZs5FNIf2bikAXzJxCr6z1XA8fIkgqpzluA?e=dZYPSh" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <th>75de6440ca1c04f08b4356fee0d8e4a4ba1cb858f9fabb5bbc0eebd3c387c81d</th>
    </tr>
        <tr>
      <td>reComputer Industrial J2012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfB-onLVAIxFreZTCSpejYIBPX42dZoKnKrDm8ZC27DI_w?e=fAOXZr" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <th>B54CF2545A8ED8BFE115C439B0B427112BD882F03292B9F5C03AB55746C707C1</th>
    </tr>
        <tr>
      <td>reComputer Industrial J2011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXmfIDIx80hCk61-dZogyUwBe6uOlz0U6tZEW3i7WC2JBw?e=BLjUW3" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <th>11BDB47D06CA8409CFCEA109B8BACD9BB79A54A275D2664D6CF492BFEAD31131</th>
    </tr>
  </tbody>
  </table>
</div>

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en el wiki, se confirma que el firmware que descargaste está completo e intacto.
:::

:::info
El código fuente de las imágenes anteriores se puede encontrar [aquí](https://github.com/Seeed-Studio/Linux_for_Tegra).
:::

- **Paso 2:** Extrae el archivo generado

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **Paso 3:** Navega al archivo extraído anteriormente y ejecuta el comando de flasheo como se indica a continuación

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Ahora comenzará a flashear la imagen del sistema a la placa. Si el flasheo es exitoso, verás la siguiente salida

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Paso 4:** Conecta el J401 a una pantalla usando el conector HDMI de la placa y completa la configuración inicial:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Por favor completa la **System Configuration** según tus necesidades.
:::

</TabItem>

<TabItem value="Jetpack 6.0" label="Jetpack6.0">

- **Paso 1:** Descarga la imagen del sistema en tu PC con Ubuntu correspondiente a la placa que estás utilizando

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Dispositivo</th>
      <th>Enlace</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbKZo6jvhR5MtP5hSB2mWIUBLkMB_pl4zCJoGhAbao5yQw?e=WmoPbO" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <th>6c1e5abbdd60f771cd5c1a6e82f4ce7dfd0448018af94926d0240b853badbaf0</th>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdScxnClMMZElyNJXLzqY5EBSXN9cyUnkkl4fWfsDhn0xg?e=XYZB6n" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <th>79c16c25602ebefa239402c23d0dcdae5ddc3eb23fdadb90654fbc34a1aa44dd</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Edt8dUapj7VCh5-X5ZgdeUIBjBSnx2wSweO-gjkMs1BxSw?e=Hi5rvU" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <th>7221185ba7f499d837b046e6f8b73c1c9f4e28cc76eb2068719370e00dcd3f42</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbKvTU_hdp9DjvFMMqi_RwkBC6LlpTtF_xfchhTtiV7fFg?e=pEhzOx" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <th>7b997786317b518f9762e0828a0ac411ef984bd9927a9eeb5f8a900b185627ba</th>
    </tr>
  </tbody>
  </table>
</div>

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en el wiki, se confirma que el firmware que descargaste está completo e intacto.
:::

:::info
El código fuente de las imágenes anteriores se puede encontrar [aquí](https://github.com/Seeed-Studio/Linux_for_Tegra).
:::

- **Paso 2:** Extrae el archivo generado

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **Paso 3:** Navega al archivo extraído anteriormente y ejecuta el comando de flasheo como se indica a continuación

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Ahora comenzará a flashear la imagen del sistema a la placa. Si el flasheo es exitoso, verás la siguiente salida

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Paso 4:** Conecta la placa a una pantalla usando el conector HDMI de la placa y completa la configuración inicial

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

Después de eso, la placa se reiniciará y estará lista para usar.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>
</TabItem>

<TabItem value="Jetpack 6.1" label="Jetpack6.1">

- **Paso 1:** Descarga la imagen del sistema en tu PC con Ubuntu correspondiente a la placa que estás utilizando

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Dispositivo</th>
      <th>Enlace</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUNMocOFBZNPqqC-W9uiIM4BgYUw-ZL0pk6juOVPFd_vqg?e=C8ldYX" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>6A2B3A71EE77E7000034351020FBF9A5260F944FB30B5DE672BF7897DEE87B5A</th>
    </tr>
    <tr>
      <td>reComputer Industrial J4011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EfYrDXxD_oRCuk5nv8WmtqIBPY9FjkEHiAmsZDpvDj-sfQ?e=qxV5MG" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>EC94A1F9E10D07CE2C78D8C1B742575A84DA543CCD95564D8E0BEC823C0CA514</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeOq0sfMDhBEqZPX-ti_gJ0BzUdSGeFf5RrSdxFnQ70aNQ?e=GVr10a" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>547E541E40A133A2CDEB3FAC399850ABC108325BBF109771420DDBCAF19E5E29</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EXK1GomjByJKnmt3OdE5Vq8BSqzYZm1MY_yD18YjmRplLw?e=dIWPKA" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>B7F400C225423C8BC4C00A5915C3C634D2D7B15145FE0735479E6AD7613D07E5</th>
    </tr>
  </tbody>
  </table>
</div>

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en el wiki, confirma que el firmware que descargaste está completo e intacto.
:::

:::info
El código fuente de las imágenes anteriores se puede encontrar [aquí](https://github.com/Seeed-Studio/Linux_for_Tegra).
:::

- **Paso 2:** Extrae el archivo generado

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **Paso 3:** Navega hasta el archivo extraído anteriormente y ejecuta el comando de flasheo como se indica a continuación

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Ahora comenzará a flashear la imagen del sistema en la placa. Si el flasheo es exitoso, verás la siguiente salida

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Paso 4:** Conecta la J401 a una pantalla usando el conector HDMI de la placa y completa la configuración inicial:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Por favor completa la **System Configuration** según tus necesidades.
:::

</TabItem>

<TabItem value="Jetpack 6.2" label="Jetpack6.2">

:::danger
Si estás utilizando un módulo **Orin NX 16GB/8GB**, **no habilites el modo MAXN SUPER**.
La capacidad de refrigeración de J4011/J4012 es insuficiente para soportarlo, y forzar este modo puede causar daños permanentes al módulo.
:::

- **Paso 1:** Descarga la imagen del sistema en tu PC con Ubuntu correspondiente a la placa que estás utilizando

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Dispositivo</th>
      <th>Enlace</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reComputer Industrial J4012</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB2G7x8LjMaTZ_JSm8QTKebAfjjE1zNMkx9967kemKxPdw?e=hdGqgd" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>adf524fa3c77f32da9a12bb875ec4b24<br />8da9dad4e4cce9c51641e1cabca4ab88</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3011</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAj4lhkKh6xTIe49xxjoViRAdXQciVaQMQmvpeAuo_ng6k?e=nGj5c7" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>38c8a5cbf2df922725824503e76605d4<br />43111e7ffec1db9eb3de4fccc7d54c21</th>
    </tr>
    <tr>
      <td>reComputer Industrial J3010</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBUOqMK6XUtQL30glQY9r0jAeyJSw9AMIaGOzh5jsgSrAc?e=iRMDpG" target="_blank" rel="noopener noreferrer">Download</a></td>
      <th>2bd6ebb246f5b967a64b0fb10a4e85ac<br />4de9e40951d1fdde9fc69025525d8d5a</th>
    </tr>
  </tbody>
  </table>
</div>

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en el wiki, confirma que el firmware que descargaste está completo e intacto.
:::

:::info
El código fuente de las imágenes anteriores se puede encontrar [aquí](https://github.com/Seeed-Studio/Linux_for_Tegra).
:::

:::note
Ten en cuenta que, debido al aumento del consumo de energía y la generación de calor después de habilitar `super mode`, la [reComputer Industrial J4011](https://www.seeedstudio.com/reComputer-Industrial-J4011-p-5681.html) y la [reComputer Industrial J4012](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html) no pueden funcionar de manera estable en el modo más alto con JetPack 6.2. Por lo tanto, solo la J4012 (Orin NX 16GB) está disponible para JetPack 6.2, mientras que la J4011 (Orin NX 8GB) no se recomienda.
Actualmente estamos diseñando una nueva versión de reComputer. ¡Mantente atento!
:::

- **Paso 2:** Extrae el archivo generado

```sh
sudo tar -xvf <file_name>.tar.gz
```

- **Paso 3:** Navega hasta el archivo extraído anteriormente y ejecuta el comando de flasheo como se indica a continuación

```sh
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Ahora comenzará a flashear la imagen del sistema en la placa. Si el flasheo es exitoso, verás la siguiente salida

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Paso 4:** Conecta la placa a una pantalla usando el conector HDMI de la placa y completa la configuración inicial

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Por favor completa la **System Configuration** según tus necesidades.
:::

- **Paso 4:** Conecta la J401 a una pantalla usando el conector HDMI de la placa y completa la configuración inicial:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Por favor completa la **System Configuration** según tus necesidades.
:::

</TabItem>

</Tabs>

<!-- Code END -->

## Uso del hardware y las interfaces

Para aprender más sobre cómo usar todo el hardware e interfaces en la placa reComputer Industrial, te recomendamos seguir la documentación relevante del wiki que hemos preparado.

- [Uso del hardware y las interfaces de reComputer Industrial J20](https://wiki.seeedstudio.com/es/reComputer_Industrial_J20_Hardware_Interfaces_Usage)
- [Uso del hardware y las interfaces de reComputer Industrial J40, J30](https://wiki.seeedstudio.com/es/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage)

## Recursos

- [Hoja de datos de reComputer Industrial](https://files.seeedstudio.com/products/NVIDIA/reComputer-Industrial-datasheet.pdf)
- [Guía de referencia de reComputer Industrial](https://files.seeedstudio.com/products/NVIDIA/reComputer-Industrial-Reference-Guide.pdf)
- [Comparación de dispositivos y carrier boards NVIDIA Jetson](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [Archivo 3D de reComputer Industrial](https://files.seeedstudio.com/products/NVIDIA/Industrial/reComputer-Industrial.stp)
- [Catálogo de series Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Casos de éxito de Seeed Studio Edge AI](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Comparación de series Seeed Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Resumen de dispositivos Seeed Jetson en una página](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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
