---
description: Flashear JetPack a una reComputer J4012 (carrier board J401)
title: Primeros pasos con la reComputer J1020v2
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_J1020v2_with_Jetson_getting_start
last_update:
  date: 6/29/2023
  author: Lakshantha
---

# Primeros pasos con la reComputer J1020v2

<div align="center"><img width ="800" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110061441.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J1020-v2-w-o-power-adapter-p-5608.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Conseguir una 🖱️</font></span></strong>
</a></div>

## Introducción
La serie reComputer para Jetson son computadoras de vanguardia compactas construidas con sistemas integrados de IA avanzados de NVIDIA: J10 (Jetson Nano 4GB) y J20 (Jetson [Xavier NX](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Module-p-4421.html?queryID=fa33abfaf6f67f95a4c01b60263d2793&objectID=4421&indexName=bazaar_retailer_products) de 8GB y 16GB). Con múltiples módulos de extensión, periféricos industriales y gestión térmica, la reComputer Jetson está lista para ayudarte a acelerar y escalar tu producto de IA de próxima generación mediante la implementación de modelos DNN y marcos de aprendizaje automático populares en el borde e inferencia con alto rendimiento.

La reComputer J1020 v2 es una plataforma de desarrollo en el borde, inteligente, potente y compacta construida con el módulo de producción Jetson Nano, que lleva el rendimiento de la IA moderna al borde. La Carrier Board J202 incorporada tiene la misma dimensión que la Jetson Nano Developer Kit, que incluye 4xUSB 3, M.2 Key M, HDMI y DP. El sistema completo también incluye un ventilador y un adaptador de corriente.

Para principiantes en IA, si deseas adquirir habilidades críticas de IA y sumergirte en el aprendizaje profundo. [El Deep Learning Institute (DLI) de NVIDIA](https://www.nvidia.com/en-us/training/) ofrece capacitaciones y certificaciones prácticas. Consulta también la guía de Seeed [wiki](https://wiki.seeedstudio.com/reComputer_Jetson_Series_Started_Guide/), que incluye cómo comenzar con la Jetson Nano y también cómo crear diferentes proyectos.

Para los proveedores de soluciones, la reComputer J1020 v2 tiene preinstalado Jetpack 4.6.1, con un amplio conjunto de E/S, esta caja de IA simplifica el desarrollo y se adapta a la implementación para proveedores de soluciones de IA de vanguardia que trabajan en análisis de video, detección de objetos, procesamiento de lenguaje natural, imágenes médicas y robótica en industrias de ciudades inteligentes, seguridad, automatización industrial y fábricas inteligentes.

## Características

- **Alternativa al kit de desarrollo NVIDIA Jetson Nano:** dispositivo Edge AI del tamaño de una mano construido con el módulo de producción Jetson Nano de 4 GB, la Carrier Board ofrece un gran número de E/S: GPIO, CSI, Gigabit Ethernet, 4 x USB 3.0 tipo A, eMMC de 16 GB integrado. Consulta aquí para ampliar el almacenamiento SSD.
- **128 núcleos NVIDIA CUDA® ofrecen 0,5 TFLOP (FP16)** para ejecutar marcos y modelos de IA para aplicaciones como clasificación de imágenes, detección de objetos, segmentación y procesamiento de voz.
- **NVIDIA Jetpack preinstalado**, JetPack SDK incluye un paquete de soporte de placa (BSP), sistema operativo Linux, bibliotecas de software NVIDIA CUDA, cuDNN y TensorRT para aprendizaje profundo, visión por computadora, computación GPU, procesamiento multimedia, etc.
- **Admite toda** la [pila de software Jetson](https://developer.nvidia.com/embedded/develop/software) y varias [herramientas de desarrollo](https://wiki.seeedstudio.com/Jetson-AI-developer-tools/) para crear aplicaciones de IA rápidas y sólidas proporcionadas por los socios de Seeed Edge AI.

## Especificaciones

<table>
  <thead>
    <tr>
      <th>Especificaciones</th>
      <th><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J1020-v2-w-o-power-adapter-p-5608.html">reComputer J1020v2</a></th>
      <th><a href="https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html">NVIDIA Jetson Nano Kit de desarrollo B01</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Módulo</td>
      <td colspan='2'>Jetson Nano 4GB (versión de producción)</td>
      <td>Nano (Versión no pensada para producción)</td>
    </tr>
    <tr>
      <td>Almacenamiento</td>
      <td colspan='2' align='center'>16 GB eMMC</td>
      <td>MicroSD (Tarjeta no incluida)</td>
    </tr>
    <tr>
      <td>Ranura para tarjeta SD</td>
      <td>Incluida (En la carrier board)</td>
      <td>-</td>
      <td>Incluida (En el módulo)</td>
    </tr>
    <tr>
      <td>Encoder de video</td>
      <td colspan='2'>4K30 | 2x1080p60 | 4x1080p30 | 4x720p60 | 9x720p30 (H.265 & H.264)</td>
      <td>4Kp30 | 4x 1080p30 | 9x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de video</td>
      <td colspan='2'>4K60 | 2x 4K30 | 4x 1080p60 | 8x 1080p30 | 9x 720p60 (H.265 & H.264)
      </td>
      <td>4Kp60 | 2x 4Kp30 | 8x 1080p30 | 18x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>Gigabit Ethernet</td>
      <td colspan='3' align='center'>1*RJ45 Conector Gigabit Ethernet (10/100/1000)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>1 * USB 3.0 Tipo - A; 
2 * USB 2.0 Tipo - A;
1 * USB Tipo - C para modo dispositivo;
1 * USB Tipo - C para 5V de alimentación de entrada</td>
      <td>4 * USB 3.0 Tipo - A ；
1 * Puerto Micro-USB para modo dispositivo;</td>
      <td>4 * USB 3.0 Tipo - A; 
1 * Puerto Micro-USB para 5V de alimentación de entrada o para modo dispositivo</td>
    </tr>
    <tr>
      <td>Conector para cámara CSI</td>
      <td colspan='3' align='center'>2*CSI (15 pos, 1mm pitch, MIPI CSI-2 )</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td>1*HDMI Tipo - As</td>
      <td colspan='2' align='center'>1*HDMI Tipo - A; 
1*DP</td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td colspan='3' align='center'>1* Conector para ventilador (5V PWM)</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1*M.2 Key E</td>
      <td>1*M.2 Key E (Deshabilitado)</td>
      <td>1*M.2 Key E</td>
    </tr>
    <tr>
      <td>M.2 KEY M</td>
      <td>-</td>
      <td>1*M.2 Key M</td>
      <td>-</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1*RTC Socket</td>
      <td>1*RTC Socket
1*RTC 2-pin</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Puerto multifuncional</td>
      <td colspan='3' align='center'>1* 40-Pin header</td>
    </tr>
    <tr>
      <td>Fuente de alimentación</td>
      <td>USB-Tipo C 5V⎓3A</td>
      <td>	
9-12V Adaptador de alimentación no incluido (Barrel Jack 5.5/2.5mm)</td>
      <td>DC Jack 5V⎓4A；
Micro-USB 5V⎓2A</td>
    </tr>
    <tr>
      <td>Mecánica</td>
      <td colspan='2'>130 mm x 120 mm x 50 mm (con carcasa)</td>
      <td>100 mm x 80 mm x 29 mm</td>
    </tr>
  </tbody>
</table>

## Flashear JetPack a la reComputer J1020v2

:::info
Por favor revisa [esta wiki](/reComputer_J2021_J202_Flash_Jetpack) para más información, porque la J1020v2 utiliza la Carrier Board J202.
:::