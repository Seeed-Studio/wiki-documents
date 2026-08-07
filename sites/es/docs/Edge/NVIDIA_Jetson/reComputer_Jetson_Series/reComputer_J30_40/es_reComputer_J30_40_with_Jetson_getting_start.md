---
description: Flashear JetPack en reComputer J4012 (placa portadora J401)
title: Primeros pasos con reComputer J30/40
keywords:
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_J30_40_with_Jetson_getting_start
sku: 110110145, 110110184, 114993114, 110110144, 110110185, 110110147, 110110186, 110110146, 110110187
last_update:
  date: 6/29/2023
  author: Lakshantha
createdAt: '2024-04-08'
updatedAt: '2026-05-21'
url: https://wiki.seeedstudio.com/es/reComputer_J30_40_with_Jetson_getting_start/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Primeros pasos con reComputer J30/40

## Introducción

<div class="video-container">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/-KAyUHzRxHc" title="Unboxing &amp; Plug in reComputer J4012 - Powered by NVIDIA Jetson Orin NX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<br />

reComputer J30/40 construido con Jetson Orin es una potente y compacta caja de computación inteligente en el borde que lleva hasta 100 TOPS de rendimiento de IA moderno al edge, combinando la arquitectura de GPU NVIDIA Ampere™ con capacidad de operación de 64 bits.

El sistema completo incluye un módulo de producción NVIDIA Jetson Orin, un disipador de calor y un adaptador de corriente. reComputer J30/40 viene preinstalado con Jetpack 5.1.3, lo que simplifica el desarrollo y se adapta al despliegue para proveedores de soluciones de IA en el borde que trabajan en analítica de vídeo, detección de objetos, procesamiento de lenguaje natural, imagen médica y robótica en industrias como ciudades inteligentes, seguridad, automatización industrial y fábricas inteligentes.

Si estás buscando la versión sin adaptador de corriente, consulta [reComputer-Jetson](https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html).

:::note
Opciones de personalización disponibles: branding del logotipo, embalaje y flasheo de firmware.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
<a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>Personaliza ahora ➜</font></span></strong></a>
</div>

## Características

- **Brillante rendimiento de IA para producción:** procesamiento en el dispositivo con hasta 100 TOPS de rendimiento de IA con bajo consumo y baja latencia
- **Dispositivo de IA en el borde del tamaño de la mano:** tamaño compacto de 130mm x120mm x 58.5mm, incluye módulo de producción NVIDIA Jetson Orin, un disipador de calor, carcasa y un adaptador de corriente. Compatible con escritorio, montaje en pared, se adapta a cualquier lugar
- **Ampliable con abundantes E/S:** 4x USB3.2, HDMI 2.1, 2xCSI, 1xRJ45 para GbE, M.2 Key E, M.2 Key M, CAN y GPIO
- **Acelera la solución al mercado:** Jetpack preinstalado con NVIDIA JetPack™ 5.1 en el SSD NVMe de 128GB incluido, BSP de SO Linux, SSD de 128GB, módulo combo WiFi BT, 2 antenas, compatible con el software Jetson y los principales frameworks y plataformas de software de IA
- **Certificados integrales:** FCC, CE, RoHS, UKCA

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
      <td colspan='2' align='center'>GPU NVIDIA Ampere de 1024 núcleos con 32 Tensor Cores</td>
    </tr>
    <tr>
      <td>Frecuencia máxima de GPU</td>
      <td colSpan='2' align='center'>625 MHz</td>
      <td>765 MHz</td>
      <td>918 MHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan='2'>CPU Arm® Cortex®-A78AE v8.2 de 6 núcleos y 64 bits<br />1.5MB L2 + 4MB L3</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 de 6 núcleos y 64 bits 1.5MB L2 + 4MB L3</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 de 8 núcleos y 64 bits 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Frecuencia máxima de CPU</td>
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
      <td>Frecuencia máxima de DLA</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>614 MHz</td>
    </tr>
    <tr>
      <td>Acelerador de visión</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>1x PVA v2</td>
    </tr>
    <tr>
      <td>Almacenamiento</td>
      <td colSpan='4' align='center'>SSD NVMe de 128GB</td>
    </tr>
    <tr>
      <td>Codificador de vídeo</td>
      <td colSpan='2' align='center'>1080p30 compatible con 1-2 núcleos de CPU</td>
      <td colSpan='2' align='center'>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de vídeo</td>
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
      <td colSpan='4' align='center'>1* Ethernet Gigabit (10/100/1000M)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan='4' align='center'>4* USB 3.2 Type-A (10Gbps); 1* USB2.0 Type-C (modo dispositivo)</td>
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
      <td>Ventilador</td>
      <td colSpan='4' align='center'>1* conector de ventilador de 4 pines (5V PWM)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan='4' align='center'>1* CAN</td>
    </tr>
    <tr>
      <td>Puerto multifuncional</td>
      <td colSpan='4' align='center'>1* cabecera de expansión de 40 pines, 1* cabecera de control y UART de 12 pines</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan='4' align='center'>RTC de 2 pines, zócalo RTC (compatible con CR1220 pero no incluido)</td>
    </tr>
    <tr>
      <td>Alimentación</td>
      <td colSpan='4' align='center'>9-19V</td>
    </tr>
    <tr>
      <td>Fuente de alimentación</td>
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

## Flashear JetPack

:::info
reComputer J30/40 alimentado por la placa portadora J401.
Consulta esta [página wiki](/es/reComputer_J4012_Flash_Jetpack) para obtener más información sobre cómo flashear JetPack.
:::

## Uso de interfaces

:::info
reComputer J30/40 alimentado por la placa portadora J401.
Consulta esta [página wiki](/es/J401_carrierboard_Hardware_Interfaces_Usage) para obtener más información sobre el uso de las interfaces.
:::


## Recursos
- [Hoja de datos de reComputer J30x](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [Hoja de datos de reComputer J40x](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [Esquemático de reComputer J30/J40](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [Archivo 3D de reComputer J30/J40](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Catálogo de series Jetson de Seeed](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Casos de éxito de Edge AI de Seeed Studio](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Comparación de series Jetson de Seeed](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Resumen de dispositivos Jetson de Seeed](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Ejemplos de Jetson](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-para-principiantes](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
