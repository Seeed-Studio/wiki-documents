---
description: Flash JetPack a reComputer J4012 (placa portadora J401)
title: Comenzando con reComputer J1010
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_J1010_with_Jetson_getting_start
last_update:
  date: 6/29/2023
  author: Lakshantha
---

# Comenzando con reComputer J1010

<div align="center"><img width ="800" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-110061362-recomputer-j1010-first.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

## Introducción
reComputer J1010 es una computadora de borde compacta construida con el módulo de producción NVIDIA Jetson Nano 4GB, viene con 128 núcleos NVIDIA CUDA® que entregan 0.5 TFLOPs (FP16) para ejecutar marcos de trabajo y aplicaciones de IA como clasificación de imágenes, detección de objetos y procesamiento de voz. Los módulos de producción ofrecen 16GB eMMC, una garantía más larga y una vida operativa de 5-10 años en un entorno de producción ([Jetson FAQ](https://developer.nvidia.com/embedded/faq)). También tenemos la [serie J20](https://www.seeedstudio.com/reComputer-J2021-p-5438.html?queryID=14111cbf2ca4f2951fd8a4c1762eb435&objectID=5438&indexName=bazaar_retailer_products) de reComputer construida con un módulo Jetson Xavier NX, entregando 21 TOPS de rendimiento de IA para cargas de trabajo de IA más complejas.

Además del módulo Jetson, reComputer J1010 también incluye la [placa portadora J101](https://www.seeedstudio.com/reComputer-J101-v2-Carrier-Board-for-Jetson-Nano-p-5396.html) con ranura para tarjeta microSD integrada, 1×USB 3.0, 2×USB2.0, HDMI, M.2 Key E para WiFI, LTE y Bluetooth, RTC, 40 pines GPIO de Raspberry Pi, y más, así como un disipador de calor y carcasa de aluminio. El dispositivo viene preinstalado con Jetpack 4.6.1, solo conecta una fuente de alimentación USB C 5V/3A, teclado, ratón y cable ethernet, ¡y estarás listo para comenzar tu viaje de IA embebida! Si necesitas más USB 3.0 y M.2 key M integrado para conectar SSD, puedes elegir reComputer J1020.

Nota: Recibimos consultas de clientes que necesitan más almacenamiento que los 16GB eMMC ofrecidos. Para pedidos después del 30 de julio de 2022, hemos incluido la ranura para tarjeta microSD en la [placa portadora](https://www.seeedstudio.com/reComputer-J101-v2-Carrier-Board-for-Jetson-Nano-p-5396.html) de reComputer J1010. Por favor revisa la [guía](https://wiki.seeedstudio.com/es/J1010_Boot_From_SD_Card/#flashing-system-from-j101-to-sd-card) sobre arranque de imagen a tarjeta microSD y ajustar la velocidad de E/S.

## Características

- **Sistema completo de IA de borde del tamaño de la mano:** entregando potencia de IA moderna de 0.5 TFLOPs (FP16) e interfaces ricas para desarrollo embebido.
- **Listo para desarrollo e implementación:** preinstalado con NVIDIA JetPack soporta toda la [pila de software Jetson](https://developer.nvidia.com/embedded/develop/software) y [herramientas de desarrollador de IA](https://wiki.seeedstudio.com/es/Jetson-AI-developer-tools/) líderes en la industria para construir aplicaciones de IA robustas como logística, retail, servicios, agricultura, ciudad inteligente, salud y ciencias de la vida, etc.
- **Eficiente en energía:** alimentado por Type C 5V/3A, consumiendo tan poco como 5 watts.
- **Expandible:** con las interfaces integradas y la carcasa reComputer, capaz de montarse en la pared con orificios de montaje en la parte posterior.

## Especificaciones

<table>
  <thead>
    <tr>
      <th>Especificaciones</th>
      <th><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a></th>
      <th><a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">reComputer J1020</a></th>
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
      <td colspan='2' align='center'>4K60 | 2x 4K30 | 4x 1080p60 | 8x 1080p30 | 9x 720p60 (H.265 & H.264)</td>
      <td>4Kp60 | 2x 4Kp30 | 8x 1080p30 | 18x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>Ethernet Gigabit</td>
      <td colspan='3' align='center'>1×Conector RJ45 Ethernet Gigabit (10/100/1000)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>1 × USB 3.0 Tipo A; 2 × USB 2.0 Tipo A; 1 × USB Tipo C para modo dispositivo; 1 × USB Tipo C para entrada de alimentación 5V</td>
      <td>4 × USB 3.0 Tipo-A ；1 × Puerto Micro-USB para modo dispositivo;</td>
      <td>4 × USB 3.0 Tipo-A; 1 × Puerto Micro-USB para entrada de alimentación 5V o para modo dispositivo</td>
    </tr>
    <tr>
      <td>Conexión de cámara CSI</td>
      <td colspan='3' align='center'>2×Cámara CSI (15 pos, paso 1mm, MIPI CSI-2 )</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td>1×HDMI Tipo A</td>
      <td colspan='2' align='center'>1×HDMI Tipo A; 1×DP</td>
    </tr>
    <tr>
      <td>VENTILADOR</td>
      <td>1× Conector de VENTILADOR (5V PWM)</td>
      <td colspan='2' align='center'>1× VENTILADOR (5V PWM)</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1×M.2 Key E</td>
      <td>1×M.2 Key E (Deshabilitado)</td>
      <td>1×M.2 Key E</td>
    </tr>
    <tr>
      <td>M.2 KEY M</td>
      <td>-</td>
      <td>1×M.2 Key M</td>
      <td>-</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colspan='2'>Socket RTC(reservado)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Puerto multifuncional</td>
      <td colspan='3' align='center'>1× Conector de 40 pines</td>
    </tr>
    <tr>
      <td>Fuente de alimentación</td>
      <td>USB-Tipo C 5V⎓3A</td>
      <td>Conector DC 12V/2A</td>
      <td>Conector DC 5V⎓4A；Micro-USB 5V⎓2A</td>
    </tr>
    <tr>
      <td>Mecánico</td>
      <td colspan='2'>130 mm x 120 mm x 50 mm (con carcasa)</td>
      <td>100 mm x 80 mm x 29 mm</td>
    </tr>
  </tbody>
</table>

## Flashear JetPack al reComputer J1010

:::info
Por favor, consulta esta página de [wiki](/es/reComputer_J1010_J101_Flash_Jetpack) para más información, ya que J1010 utiliza la placa portadora J101.
:::


## Recursos
[Hoja de datos del reComputer J1010](https://files.seeedstudio.com/wiki/reComputer/reComputer-J1010-datasheet.pdf)

[Esquemático de las placas portadoras del reComptuer J101](https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer%20J101_V2.0_SCH_240822.pdf)

[Archivo 3D del reComputer J1010](https://files.seeedstudio.com/products/NVIDIA-Jetson/J1010-Jetson-Nano.stp)

[Catálogo de las series Jetson de Seeed](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)

[Casos de éxito de Edge AI de Seeed Studio](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)

[Comparación de las series Jetson de Seeed](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)

[Dispositivos Jetson de Seeed en una página](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
