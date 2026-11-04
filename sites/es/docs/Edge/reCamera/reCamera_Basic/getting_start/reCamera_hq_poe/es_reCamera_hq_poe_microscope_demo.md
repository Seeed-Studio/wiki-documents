---
description: Este es un proyecto de demostración de microscopio basado en reCamera HQ PoE, que admite inspección de PCB y observación de muestras biológicas, e incluye una guía de ensamblaje de hardware y aplicaciones de modelos de IA.
title: Demostración de microscopio
keywords:
  - Edge
  - reCamera
  - reCamera HQ POE
  - POE
  - HQ
  - M12
  - Microscopio
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_hq_poe_microscope_demo
sku: 100041077,100018917,100029708,100074316
sidebar_position: 3
last_update:
  date: 10/08/2026
  author: Parker Hu
createdAt: '2025-11-10'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/recamera_hq_poe_microscope_demo/
---

# reCamera_Microscope

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/4.gif" /></div>

## Preparación de hardware

Este tutorial utiliza los siguientes productos:

<table align="center">

<tbody><tr>

<th>Seeed Studio reCamera 2002 HQ PoE 8GB</th>

<th>Lente M12 ultra teleobjetivo de 1/2.9" para reCamera - 2MP, 15° (22mm-B)</th>

</tr>

<tr>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:210, height:'auto'}}/></div></td>

<td><div align="center"><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100070335-_22mm_b_.jpg" style={{width:210, height:'auto'}}/></div></td>

</tr>

<tr>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-8GB-p-6558.html" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora🖱️</font></span></strong>

</a>

</div></td>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/22mm-B-p-6646.html" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora🖱️</font></span></strong>

</a>

</div></td>

</tr>

</tbody></table>

## 🔥¿Qué es reCamera_Microscope?

reCamera_Microscope es un proyecto de código abierto basado en la [serie reCamera 2002](https://www.seeedstudio.com/reCamera-2002w-64GB-p-6249.html) y la [GC2053 Sensor Board](https://www.seeedstudio.com/reCamera-2002-Sensor-Board-GC2053-p-6556.html). También puedes usar la [versión reCamera 2002 HQ PoE](https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html) para completar este proyecto.

## 💡¿Para qué se puede usar reCamera_Microscope?

¿Para qué se puede usar reCamera_Microscope?<br />
reCamera_Microscope admite el cambio de lentes con diferentes niveles de aumento, lo que le permite capturar imágenes de objetos como PCB (placas de circuito impreso), componentes electrónicos, células, insectos y muestras de plantas.<br />
La serie reCamera Sg2002 viene con una potencia de cómputo integrada de 1 TOPS, lo que le permite ejecutar el modelo YoloV11. Cuando se combina con modelos de detección o segmentación de objetos, se puede aplicar a escenarios que incluyen detección de defectos en PCB, clasificación de componentes electrónicos, así como clasificación y conteo de células, insectos y muestras de plantas.<br />
Aún quedan más direcciones de aplicación por explorar por todos ustedes.

## 📷Vista previa 


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-2.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-1.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-3.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-4.png" /></div>

## 🔧Composición de hardware de reCamera_Microscope

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-5.png" /></div>

1. reCamera POE
2. Impresora 3D x2
3. Lente M12 x2
4. Soporte de extensión de lente M12 x3
5. Soporte de microscopio
6. Adaptador de corriente de 12V
7. Cable Type-C

## Pasos de instalación

**Como se muestra en la figura, ensambla el soporte, conéctalo a la fuente de alimentación de 12V e instala la pieza impresa en 3D.**

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-7.png" /></div>

Como se muestra en la figura, el kit de microscopio contiene dos lentes. Debes retirar la lente gran angular y reemplazarla por las otras dos lentes.

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-8.png" /></div>

### 🎨Opción 1: Lente 1: Uso de la lente de microscopio

Como se muestra en la figura, retira la lente del microscopio, instala tres adaptadores de extensión de lente y luego instala la lente 1.

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-9.png" /></div>

Como se muestra en la figura, **conecta el ordenador usando un cable USB.**

 Visita `192.168.42.1` para ver la página de carga de reCamera. El **usuario** que inicia sesión es: `root` ; la **contraseña** es: `recamera.1`

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-10.png" /></div>

Puedes comprar portaobjetos de muestra de plantas, animales o microorganismos y colocarlos en la platina del microscopio. Ajustando las posiciones de la cámara y del objeto, podrás ver imágenes del mundo microscópico.

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-11.png" /></div>

### 🎨Opción 2: Lente 2: Uso de la micro-lente para PCB

Como se muestra en la figura, retira la lente del microscopio, instala un adaptador de extensión de lente y luego instala la lente 2.

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-12.png" /></div>

Como se muestra en la figura, **conecta el ordenador usando un cable USB.**

 Visita `192.168.42.1` para ver la página de carga de reCamera. El **usuario** que inicia sesión es: `root` ; la **contraseña** es: `recamera.1`

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-14.png" /></div>

Aquí hay dos modelos preentrenados disponibles, que se pueden usar para identificar componentes electrónicos en PCB o detectar defectos en PCB.

| [Modelo de detección de componentes electrónicos en PCB](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Electronic/readme.md) | [Download](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Electronic/yolo11n_electronic.cvimodel)     |
| ---------------------------------------- | ------------ |
| [**Modelo de detección de defectos en PCB**](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Defect_Detection/readme.md)          | [**Download**](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Defect_Detection/yolo11n_PCB_Defect.cvimodel) |

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-1.png" /></div>

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