---
description: Este es un proyecto de demostración de microscopio basado en reCamera HQ PoE, que soporta inspección de PCB y observación de muestras biológicas, incluyendo guía de ensamblaje de hardware y aplicaciones de modelos de IA.
title: Demostración de Microscopio
keywords:
  - Edge
  - reCamera
  - reCamera HQ POE
  - POE
  - HQ
  - M12
  - Microscope
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_hq_poe_microscope_demo
sku: 100041077,100018917,100029708,100074316
sidebar_position: 3
last_update:
  date: 11/08/2025
  author: Parker Hu
---

# reCamera_Microscopio

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/4.gif" /></div>

## 🔥¿Qué es reCamera_Microscopio?

reCamera_Microscopio es un proyecto de código abierto basado en la [serie reCamera 2002](https://www.seeedstudio.com/reCamera-2002w-64GB-p-6249.html) y la [Placa de Sensor GC2053](https://www.seeedstudio.com/reCamera-2002-Sensor-Board-GC2053-p-6556.html). También puedes usar la [versión reCamera 2002 HQ PoE](https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html) para completar este proyecto.

## 💡¿Para qué se puede usar el reCamera_Microscopio?

¿Para Qué Se Puede Usar reCamera_Microscopio?<br />
reCamera_Microscopio soporta el intercambio de lentes con diferentes niveles de magnificación, permitiéndole capturar imágenes de sujetos como PCBs (Placas de Circuito Impreso), componentes electrónicos, células, insectos y muestras de plantas.<br />
La serie reCamera Sg2002 viene con una potencia de cómputo integrada de 1 TOPS, permitiéndole ejecutar el modelo YoloV11. Cuando se combina con modelos de detección de objetos o segmentación, puede aplicarse a escenarios que incluyen detección de defectos en PCB, clasificación de componentes electrónicos, así como clasificación y conteo de células, insectos y muestras de plantas.<br />
Más direcciones de aplicación están por ser exploradas por todos ustedes.

## 📷Vista Previa 


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-2.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-1.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-3.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-4.png" /></div>

## 🔧Composición de Hardware del reCamera_Microscopio

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-5.png" /></div>

1. reCamera POE
2. Impresora 3D x2
3. Lente M12 x2
4. Soporte de Extensión de Lente M12 x3
5. Soporte de microscopio
6. Adaptador de corriente de 12V
7. Cable Type-C

## Pasos de Instalación

**Como se muestra en la figura, ensambla el soporte, conéctalo a la fuente de alimentación de 12V e instala la pieza impresa en 3D.**

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-7.png" /></div>

Como se muestra en la figura, el kit de microscopio contiene dos lentes. Necesitas remover el lente gran angular y reemplazarlo con los otros dos lentes.

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-8.png" /></div>

### 🎨Opción1: Lente 1: Uso del lente de microscopio

Como se muestra en la figura, remueve el lente de microscopio, instala tres adaptadores de extensión de lente, y luego instala el lente 1.

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-9.png" /></div>

Como se muestra en la figura, **conecta la computadora usando un cable USB.**

 Visita `192.168.42.1` para ver la página de carga de reCamera. El **usuario** de inicio de sesión es: `root` ; la **contraseña** es: `recamera.1`

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-10.png" /></div>

Puedes comprar muestras de cortes de plantas, animales o microorganismos y colocarlas en la platina del microscopio. Ajustando las posiciones de la cámara y el objeto, podrás ver imágenes del mundo microscópico.

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-11.png" /></div>

### 🎨Opción2: Lente 2: Uso del micro-lente PCB

Como se muestra en la figura, remueve el lente de microscopio, instala un adaptador de extensión de lente, y luego instala el lente 2.

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-12.png" /></div>

Como se muestra en la figura, **conecta la computadora usando un cable USB.**

 Visita `192.168.42.1` para ver la página de carga de reCamera. El **usuario** de inicio de sesión es: `root` ; la **contraseña** es: `recamera.1`

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-14.png" /></div>

Hay dos modelos pre-entrenados disponibles aquí, que pueden usarse para identificar componentes electrónicos en PCBs o detectar defectos en PCBs.

| [Modelo de Detección de Componentes Electrónicos PCB](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Electronic/readme.md) | [Descargar](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Electronic/yolo11n_electronic.cvimodel)     |
| ---------------------------------------- | ------------ |
| [**Modelo de Detección de Defectos PCB**](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Defect_Detection/readme.md)          | [**Descargar**](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Defect_Detection/yolo11n_PCB_Defect.cvimodel) |

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-1.png" /></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>