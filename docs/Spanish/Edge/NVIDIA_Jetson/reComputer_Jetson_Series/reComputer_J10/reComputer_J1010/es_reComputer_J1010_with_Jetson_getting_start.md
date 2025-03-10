---
description: Flashear JetPack para una reComputer J4012 (Carrier Board J401)
title: Primeros pasos con la reComputer J1010
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_J1010_with_Jetson_getting_start
last_update:
  date: 6/29/2023
  author: Lakshantha
---

# Primeros pasos con la reComputer J1010

<div align="center"><img width ="800" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-110061362-recomputer-j1010-first.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Conseguir una ahora 🖱️</font></span></strong>
</a></div>

## Introducción
La reComputer J1010 es una computadora de vanguardia compacta construida con el módulo de producción NVIDIA Jetson Nano de 4 GB, viene con 128 núcleos NVIDIA CUDA® que ofrecen 0,5 TFLOP (FP16) para ejecutar marcos de IA y aplicaciones como clasificación de imágenes, detección de objetos y procesamiento de voz. Los módulos de producción ofrecen eMMC de 16 GB, una garantía más larga y una vida útil de 5 a 10 años en un entorno de producción ([Preguntas frecuentes de Jetson](https://developer.nvidia.com/embedded/faq)). También contamos con la serie [reComputer J20](https://www.seeedstudio.com/reComputer-J2021-p-5438.html?queryID=14111cbf2ca4f2951fd8a4c1762eb435&objectID=5438&indexName=bazaar_retailer_products) construida con un módulo Jetson Xavier NX, que ofrece un rendimiento de IA de 21 TOPS para cargas de trabajo de IA más complejas.

Además del módulo Jetson, la reComputer J1010 también incluye la [Carrier Board J101](https://www.seeedstudio.com/reComputer-J101-v2-Carrier-Board-for-Jetson-Nano-p-5396.html) con ranura para tarjeta microSD integrada, 1*USB 3.0, 2*USB2.0, HDMI, M.2 Key E para WiFI, LTE y Bluetooth, RTC, Raspberry Pi GPIO de 40 pines, etc., así como un disipador de calor y una carcasa de aluminio. El dispositivo tiene Jetpack 4.6.1 preinstalado, simplemente conecta una fuente de alimentación USB C 5V/3A, teclado, mouse y cable Ethernet, ¡Ya estás listo para comenzar tu viaje con IA integrada! Si necesitas más USB 3.0 y una clave M.2 M integrada para conectar SSD, puedes elegir la reComputer J1020.

Nota: Recibimos consultas de clientes que necesitan más almacenamiento que el eMMC de 16 GB ofrecido. Para pedidos posteriores al 30 de julio de 2022, hemos incluido la ranura para tarjeta microSD en la [Carrier Board](https://www.seeedstudio.com/reComputer-J101-v2-Carrier-Board-for-Jetson-Nano-p-5396.html) de la reComputer J1010. Consulta la [guía](https://wiki.seeedstudio.com/J1010_Boot_From_SD_Card/#flashing-system-from-j101-to-sd-card) en la imagen de inicio en la tarjeta microSD y ajuste la velocidad de I/O.

## Características

- **Sistema completo de IA de vanguardia del tamaño de una mano** que ofrece una potencia de IA moderna de 0,5 TFLOP (FP16) e interfaces ricas para el desarrollo integrado.
- **Lista para desarrollo e implementación:** NVIDIA JetPack preinstalado admite toda la [pila de software Jetson](https://developer.nvidia.com/embedded/develop/software) y las [herramientas de desarrollo de IA](https://wiki.seeedstudio.com/Jetson-AI-developer-tools/) líderes en la industria para crear aplicaciones de IA sólidas como logística, comercio minorista, servicios, agricultura, ciudades inteligentes, atención médica y ciencias de la vida, etc.
- **Eficiencia energética:** alimentada por USB tipo C 5V/3A, consume tan solo 5 vatios.
- **Expandible:** con interfaces integradas y carcasa reComputer, capaz de montarse en la pared con orificios de montaje en la parte posterior.

## Especificaciones

<table>
  <thead>
    <tr>
      <th>Especificaciones</th>
      <th><a href="https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html">reComputer J1010</a></th>
      <th><a href="https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html">reComputer J1020</a></th>
      <th><a href="https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html">NVIDIA Jetson Nano Kit de desarrollo B01</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Módulo</td>
      <td colspan='2'>Jetson Nano 4GB (Versión para producción)</td>
      <td>Nano (Versión pensada no para producción)</td>
    </tr>
    <tr>
      <td>Almacenamiento</td>
      <td colspan='2' align='center'>16 GB eMMC</td>
      <td>MicroSD (Tarjeta no incluida)</td>
    </tr>
    <tr>
      <td>Slot para tarjeta SD</td>
      <td>Incluido (En la Carrier Board)</td>
      <td>-</td>
      <td>Incluido (En el módulo)</td>
    </tr>
    <tr>
      <td>Encoder de Video</td>
      <td colspan='2'>4K30 | 2x1080p60 | 4x1080p30 | 4x720p60 | 9x720p30 (H.265 & H.264)</td>
      <td>4Kp30 | 4x 1080p30 | 9x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de Video</td>
      <td colspan='2' align='center'>4K60 | 2x 4K30 | 4x 1080p60 | 8x 1080p30 | 9x 720p60 (H.265 & H.264)
      </td>
      <td>4Kp60 | 2x 4Kp30 | 8x 1080p30 | 18x 720p30 (H.264/H.265)</td>
    </tr>
    <tr>
      <td>Gigabit Ethernet</td>
      <td colspan='3' align='center'>1*Conector RJ45 Gigabit Ethernet (10/100/1000)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>1 * USB 3.0 Tipo A; 
2 * USB 2.0 Tipo A;
1 * USB Tipo C para modo dispositivo;
1 * USB Tipo C para alimentación de 5V</td>
      <td>4 * USB 3.0 Tipo-A ；
1 * Puerto Micro-USB para modo dispositivo;</td>
      <td>4 * USB 3.0 Tipo-A; 
1 * Puerto Micro-USB para alimentación 5V para modo dispositivo</td>
    </tr>
    <tr>
      <td>Conexión para cámara CSI</td>
      <td colspan='3' align='center'>2*CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td>1*HDMI Tipo-A</td>
      <td colspan='2' align='center'>1*HDMI Tipo-A; 
1*DP</td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td>1* Conector de ventilador (5V PWM)</td>
      <td colspan='2' align='center'>1* Ventilador (5V PWM)</td>
    </tr>
    <tr>
      <td>M.2 KEY E</td>
      <td>1*M.2 Key E</td>
      <td>1*M.2 Key E (Disahabilitado)</td>
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
      <td colspan='2'>Socket RTC (reservado)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Puerto multifuncional</td>
      <td colspan='3' align='center'>1* 40-Pin header</td>
    </tr>
    <tr>
      <td>Fuente de alimentación</td>
      <td>USB-Tipo C 5V⎓3A</td>
      <td>Jack DC 12V/2A</td>
      <td>Jack DC 5V⎓4A；
Micro-USB 5V⎓2A</td>
    </tr>
    <tr>
      <td>Mecánica</td>
      <td colspan='2'>130 mm x 120 mm x 50 mm (Con carcaza)</td>
      <td>100 mm x 80 mm x 29 mm</td>
    </tr>
  </tbody>
</table>

## Flashear JetPack a la reComputer J1010

:::info
Revisa esta [wiki](/reComputer_J1010_J101_Flash_Jetpack) parao obtener más información por que la J1010 utiliza la Carrier Board J101.
:::

