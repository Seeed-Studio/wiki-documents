---
description: Flash JetPack a reComputer J4012 (placa portadora J401)
title: Comenzando con reComputer J1020v2
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_J1020v2_with_Jetson_getting_start
last_update:
  date: 6/29/2023
  author: Lakshantha
---

# Comenzando con reComputer J1020v2

<div align="center"><img width ="800" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110061441.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J1020-v2-w-o-power-adapter-p-5608.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

## Introducción
La serie reComputer para Jetson son computadoras edge compactas construidas con sistemas embebidos de IA avanzada de NVIDIA: J10 (Jetson Nano 4GB) y J20 (Jetson [Xavier NX](https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Module-p-4421.html?queryID=fa33abfaf6f67f95a4c01b60263d2793&objectID=4421&indexName=bazaar_retailer_products) 8GB y Jetson Xavier 16GB). Con módulos de extensión ricos, periféricos industriales y gestión térmica, reComputer para Jetson está listo para ayudarte a acelerar y escalar el producto de IA de próxima generación mediante el despliegue de modelos DNN populares y marcos de ML al edge e inferencia con alto rendimiento.

reComputer J1020 v2 es una caja edge inteligente potente y compacta construida con el módulo de producción Jetson Nano, llevando rendimiento de IA moderno al edge. La placa portadora J202 incorporada tiene las mismas dimensiones que el Jetson Nano Developer Kit, incluyendo 4xUSB 3, M.2 Key M, HDMI y DP. El sistema completo también incluye un ventilador y un adaptador de corriente.

Para principiantes en IA, si te gustaría obtener habilidades críticas de IA y sumergirte en el aprendizaje profundo. [El Instituto de Aprendizaje Profundo (DLI) de NVIDIA](https://www.nvidia.com/en-us/training/) ofrece entrenamiento práctico y certificación. Por favor, también revisa la guía [wiki](https://wiki.seeedstudio.com/es/reComputer_Jetson_Series_Started_Guide/) de Seeed que incluye comenzar con Jetson Nano y también construir diferentes proyectos.

Para proveedores de soluciones, reComputer J1020 v2 viene preinstalado con Jetpack 4.6.1, con un conjunto rico de I/Os, esta caja de IA simplifica el desarrollo y es adecuada para el despliegue para proveedores de soluciones de IA edge que trabajan en análisis de video, detección de objetos, procesamiento de lenguaje natural, imágenes médicas y robótica a través de industrias de ciudades inteligentes, seguridad, automatización industrial, fábricas inteligentes.

## Características

- **Alternativa al NVIDIA Jetson Nano Dev Kit:** dispositivo de IA Edge del tamaño de la mano construido con el Módulo de Producción Jetson Nano 4GB, la placa portadora trae I/Os extensivos: GPIO, CSI, Gigabit Ethernet, 4 x USB 3.0 Tipo A, 16 GB eMMC integrado, Por favor revisa aquí para expansión de almacenamiento SSD.
- **128 núcleos NVIDIA CUDA® entregan 0.5 TFLOPs (FP16)** para ejecutar marcos y modelos de IA para aplicaciones como clasificación de imágenes, detección de objetos, segmentación y procesamiento de voz.
- **NVIDIA Jetpack preinstalado**, el SDK JetPack incluye un paquete de soporte de placa (BSP), Linux OS, NVIDIA CUDA, cuDNN y bibliotecas de software TensorRT para aprendizaje profundo, visión por computadora, computación GPU, procesamiento multimedia, etc.
- **Soporta toda la** [pila de software Jetson](https://developer.nvidia.com/embedded/develop/software) y varias [herramientas de desarrollador](https://wiki.seeedstudio.com/es/Jetson-AI-developer-tools/) para construir aplicaciones de IA rápidas y robustas proporcionadas por los socios de Edge AI de Seeed.

## Especificaciones

<table>
  <thead>
    <tr>
      <th>Especificaciones</th>
      <th><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J1020-v2-w-o-power-adapter-p-5608.html">reComputer J1020v2</a></th>
      <th><a href="https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html">NVIDIA Jetson Nano Developer Kit-B01</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Módulo</td>
      <td colspan='2'>Jetson Nano 4GB (versión de producción)</td>
      <td>Nano (no versión de producción)</td>
    </tr>
    <tr>
      <td>Almacenamiento</td>
      <td colspan='2' align='center'>16 GB eMMC</td>
      <td>MicroSD (Tarjeta no incluida)</td>
    </tr>
    <tr>
      <td>Ranura para tarjeta SD</td>
      <td>Incluida (En la placa portadora)</td>
      <td>-</td>
      <td>Incluida (En el módulo)</td>
    </tr>
    <tr>
      <td>Codificador de video</td>
      <td colspan='2'>4K30 | 2x1080p60 | 4x1080p30 | 4x720p60 | 9x720p30 (H.265 & H.264)</td>
      <td>4Kp30 | 4x 1080p30 | 9x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de video</td>
      <td colspan='2'>4K60 | 2x 4K30 | 4x 1080p60 | 8x 1080p30 | 9x 720p60 (H.265 & H.264)</td>
      <td>4Kp60 | 2x 4Kp30 | 8x 1080p30 | 18x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>Ethernet Gigabit</td>
      <td colspan='3' align='center'>1\*Conector RJ45 Ethernet Gigabit (10/100/1000)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>1 \* USB 3.0 Tipo A;
2 \* USB 2.0 Tipo A;
1 \* USB Tipo C para modo dispositivo;
1 \* USB Tipo C para entrada de alimentación 5V</td>
      <td>4 \* USB 3.0 Tipo-A ；
1 \* Puerto Micro-USB para modo dispositivo;</td>
      <td>4 \* USB 3.0 Tipo-A;
1 \* Puerto Micro-USB para entrada de alimentación 5V o para modo dispositivo</td>
    </tr>
    <tr>
      <td>Conexión de cámara CSI</td>
      <td colspan='3' align='center'>2\*Cámara CSI (15 pos, paso 1mm, MIPI CSI-2 )</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td>1\*HDMI Tipo A</td>
      <td colspan='2' align='center'>1\*HDMI Tipo A; 1\*DP</td>
    </tr>
    <tr>
      <td>VENTILADOR</td>
      <td colspan='3' align='center'>1\* Conector de VENTILADOR (5V PWM)</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1\*M.2 Key E</td>
      <td>1\*M.2 Key E (Deshabilitado)</td>
      <td>1\*M.2 Key E</td>
    </tr>
    <tr>
      <td>M.2 KEY M</td>
      <td>-</td>
      <td>1\*M.2 Key M</td>
      <td>-</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1\*Socket RTC</td>
      <td>1\*Socket RTC 1\*RTC 2-pin</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Puerto multifuncional</td>
      <td colspan='3' align='center'>1\* Conector de 40 pines</td>
    </tr>
    <tr>
      <td>Fuente de alimentación</td>
      <td>USB-Tipo C 5V⎓3A</td>
      <td>Adaptador de alimentación 9-12V no incluido(Conector cilíndrico 5.5/2.5mm)</td>
      <td>Conector DC 5V⎓4A；Micro-USB 5V⎓2A</td>
    </tr>
    <tr>
      <td>Mecánico</td>
      <td colspan='2'>130 mm x 120 mm x 50 mm (con carcasa)</td>
      <td>100 mm x 80 mm x 29 mm</td>
    </tr>
  </tbody>
</table>

## Flashear JetPack al reComputer J1020v2

:::info
Por favor, consulta esta página de [wiki](/es/reComputer_J2021_J202_Flash_Jetpack) para más información, ya que J1020v2 utiliza la placa portadora J202.
:::

## Recursos
[Hoja de datos del reComputer J1020 v2](https://files.seeedstudio.com/wiki/reComputer/reComputer-J1020-v2-datasheet.pdf)

[Esquemático de las placas portadoras reComptuer J102 (también J202)](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J202_V1.0_SCH_PDF_240822.pdf)

[Archivo 3D del reComputer J1010](https://files.seeedstudio.com/products/NVIDIA-Jetson/J2021-Xavier-NX.stp)

[Catálogo de series Jetson de Seeed](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Historias de éxito de Edge AI de Seeed Studio](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Comparación de series Jetson de Seeed](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Dispositivos Jetson de Seeed en una página](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

