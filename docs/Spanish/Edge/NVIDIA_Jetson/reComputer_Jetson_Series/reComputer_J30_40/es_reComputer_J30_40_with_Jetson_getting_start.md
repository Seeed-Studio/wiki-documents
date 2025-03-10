---
description: Flashear JetPack a la reComputer J4012 (carrier boardJ401)
title: Primeros pasos con la reComputer J30/40
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_J30_40_with_Jetson_getting_start
last_update:
  date: 6/29/2023
  author: Lakshantha
---

# Primeros pasos con la reComputer J30/40

<div align="center">
  <iframe width="800" height="480" src="https://www.youtube.com/embed/-KAyUHzRxHc" title="Unboxing &amp; Plug in reComputer J4012 - Powered by NVIDIA Jetson Orin NX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Conseguir una 🖱️</font></span></strong>
</a></div>

## Introducción
La reComputer J30/40 construida sobre la Jetson Orin es una placa inteligente potente y compacta para llevar hasta 100TOPS el rendimiento de la IA moderna al borde. Al tiempo que combina la arquitectura de GPU NVIDIA Ampere™ con capacidad operativa de 64 bits.

El sistema completo incluye un módulo de producción NVIDIA Jetson Orin, un disipador de calor y un adaptador de corriente. La reComputer J30/40 viene con Jetpack 5.1.1 preinstalado, simplifica el desarrollo y se adapta a la implementación de proveedores de soluciones de inteligencia artificial de vanguardia que trabajan en análisis de video, detección de objetos, procesamiento de lenguaje natural, imágenes médicas y robótica en industrias de ciudades inteligentes, seguridad, automatización industrial y fábricas inteligentes.

Si estás buscando la versión sin adaptador de corriente, consulta [reComputer-Jetson](https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html).

## Características

- **Rendimiento de IA brillante para producción:** procesamiento en el dispositivo con rendimiento de IA de hasta 100 TOPS con bajo consumo y baja latencia
- **Dispositivo de IA de borde del tamaño de una mano:** tamaño compacto de 130 mm x 120 mm x 58,5 mm, incluye el módulo de producción NVIDIA Jetson Orin, un disipador de calor, una carcasa y un adaptador de corriente. Soporte de escritorio, montaje en pared, cabe en cualquier lugar
- **Ampliable con varias E/S:** 4x USB3.2, HDMI 2.1, 2xCSI, 1xRJ45 para GbE, M.2 Key E, M.2 Key M, CAN y GPIO
- **Acelera la comercialización de la solución:** Jetpack preinstalado con NVIDIA JetPack™ 5.1 en el SSD NVMe de 128 GB incluido, sistema operativo Linux BSP, SSD de 128 GB, módulo combinado WiFi BT, antenas x2, software Jetson compatible y plataformas de software y librerías de IA líderes
- **Certificados completos:** FCC, CE, RoHS, UKCA

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
      <td>Rendimiento IA</td>
      <td>20 TOPS</td>
      <td>40 TOPS</td>
      <td>70 TOPS</td>
      <td>100 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>512-core Arquitectura GPU NVIDIA Ampere con 16 Núcleos Tensor</td>
      <td>1024-core Arquitectura GPU NVIDIA Ampere con 32 núcleos Tensor </td>
      <td colspan='2' align='center'>1024-core Arquitectura GPU NVIDIA Ampere con 32 núcleos Tensor</td>
    </tr>
    <tr>
      <td>Frecuencia máxima GPU</td>
      <td colSpan='2' align='center'>625 MHz</td>
      <td>765 MHz</td>
      <td>918 MHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan='2'>6-core Arm® Cortex®-A78AE v8.2 64-bit CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6-core Arm® Cortex®-A78AE v8.2 64-bit CPU 1.5MB L2 + 4MB L3</td>
      <td>8-core Arm® Cortex®-A78AE v8.2 64-bit CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Frecuencia máxima CPU</td>
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
      <td>Frecuencia máxima DLA (Acelerador de Deep Learning)</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>614 MHz</td>
    </tr>
    <tr>
      <td>Acelerador de Vision</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>1x PVA v2</td>
    </tr>
    <tr>
      <td>Almacenamiento</td>
      <td colSpan='4' align='center'>128GB NVMe SSD</td>
    </tr>
    <tr>
      <td>Encoder de Video</td>
      <td colSpan='2' align='center'>1080p30 supported by 1-2 CPU cores</td>
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
      <td>CSI</td>
      <td colSpan='4' align='center'>2* CSI （2-lane 15pin）</td>
    </tr>
    <tr>
      <td>Redes</td>
      <td colSpan='4' align='center'>1* Gigabit Ethernet (10/100/1000M)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan='4' align='center'>4* USB 3.2 Tipo-A (10Gbps); 1* USB2.0 Tipo-C (Modo dispositivo)</td>
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
      <td colSpan='4' align='center'>1* 4 conectores para ventilador (5V PWM)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan='4' align='center'>1* CAN</td>
    </tr>
    <tr>
      <td>Puerto multifuncional</td>
      <td colSpan='4' align='center'>1* 40-Pin Expansion header,1* 12-Pin Control y UART header</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan='4' align='center'>RTC 2-pin, RTC socket (soporta CR1220 pero no está incluido)</td>
    </tr>
    <tr>
      <td>Voltaje</td>
      <td colSpan='4' align='center'>9-19V</td>
    </tr>
    <tr>
      <td>Fuente de alimentación</td>
      <td colSpan='4' align='center'>Adaptador de alimentación no incluido</td>
    </tr>
    <tr>
      <td>Temperatura</td>
      <td colSpan='4' align='center'>-10℃~60℃</td>
    </tr>
    <tr>
      <td>Mecánica</td>
      <td colSpan='4' align='center'>130mm x120mm x 58.5mm</td>
    </tr>
  </tbody>
</table>

## Flashear JetPack

:::info
La reComputer J30/40 potenciada por la Carrier Board J401.
Consulta esta [wiki](/reComputer_J4012_Flash_Jetpack) para obtener más información sobre flashear jetpack.
:::

## Uso de interfaz

:::info
La reComputer J30/40 potenciada por la Carrier Board J401.
Consulta esta [wiki](/J401_carrierboard_Hardware_Interfaces_Usage) para obtener más información sobre el uso de interfaces.
:::


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
