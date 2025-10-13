---
description: Este wiki demuestra la detección de objetos usando YOLOv8 en reComputer R1000 con aceleración Raspberry-pi-AI-kit.
title: Detección de Objetos YOLOv8 en reComputer R1000 con Hailo-8L
keywords:
  - Edge
  - reComputer r1000
  - Object detecton
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l
last_update:
  date: 06/26/2024
  author: Jiahao

no_comments: false # for Disqus
---

# Detección de Objetos YOLOv8 en reComputer R1000 con Hailo-8L

## Introducción

[YOLOv8](https://github.com/ultralytics/ultralytics) (You Only Look Once versión 8) es el modelo de detección de objetos en tiempo real más popular de la serie YOLO. Se basa en las fortalezas de sus predecesores introduciendo varios avances en velocidad, precisión y flexibilidad. El [Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) se utiliza para acelerar la velocidad de inferencia, con un acelerador de inferencia de red neuronal de 13 TOPS construido alrededor del chip Hailo-8L.

Este wiki demuestra la detección de objetos usando YOLOv8 en [reComputer R1000](https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html) con y sin aceleración Raspberry-pi-AI-kit. El Raspberry Pi AI Kit mejora el rendimiento del Raspberry Pi y desbloquea su potencial en aplicaciones de inteligencia artificial y aprendizaje automático, como retail inteligente, tráfico inteligente y más. Aunque el Raspberry AI Kit está diseñado para Raspberry Pi 5, lo hemos experimentado en nuestro gateway edge con CM4. ¡Emocionados por convertir nuestro dispositivo edge en un gateway IoT inteligente!

## Preparar Hardware

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer r1000</th>
  <th>Raspberry Pi AI Kit</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113060086-raspberry-pi-ai-kit-45font.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Ejecutar este proyecto

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Ejecutar con Hailo-8L">

### Paso 1: Instalar el kit de IA

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/install_AIkit.gif" alt="pir" width={1000} height="auto"/></p>

### Paso 2: Actualizar el sistema y configurar PCIe a gen3

#### Actualizar el sistema

Abre la terminal en el reComputer R1000, e ingresa el siguiente comando para actualizar tu sistema.

```
sudo apt update
sudo apt full-upgrade
```

#### Configurar pcie a gen3

Abre la terminal en el reComputer R1000, e ingresa el comando como se muestra a continuación para configurar el reComputer R1000.

```
sudo raspi-config
```

Selecciona la opción "6 Advanced Options"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step1.png" alt="pir" width={1000} height="auto"/></p>

Luego selecciona la opción "A8 PCIe Speed"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step2.png" alt="pir" width={1000} height="auto"/></p>

Elige "Yes" para habilitar el modo PCIe Gen 3

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step3.png" alt="pir" width={1000} height="auto"/></p>

Haz clic en "Finish" para salir

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step4.png" alt="pir" width={1000} height="auto"/></p>

### Paso 3: Instalar el Software Hailo y Verificar la Instalación

#### Instalar el Software Hailo

Abre la terminal en el reComputer R1000, e ingresa el comando como se muestra a continuación para instalar el software Hailo.

```
sudo apt install hailo-all
sudo reboot
```

#### Verificar Software y Hardware

Abre la terminal en el reComputer R1000, e ingresa el comando como se muestra a continuación para verificar si hailo-all ha sido instalado.

```
hailortcli fw-control identify
```

El resultado correcto se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Abre la terminal en el reComputer R1000, e ingresa el comando como se muestra a continuación para verificar si el hailo-8L ha sido conectado.

```
lspci | grep Hailo
```

El resultado correcto se muestra a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### Ejecutar YOLOv8

Abre la terminal en el reComputer R1000, e ingresa el comando como se muestra a continuación para ejecutar YOLOv8.

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh object-detection-hailo
```

### Resultado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_with_AIkit.gif" alt="pir" width={1000} height="auto"/></p>
</TabItem>

<TabItem value="Method 2" label="Ejecutar sin Hailo-8L">

### Ejecutar YOLOv8

Abre la terminal en el reComputer R1000, e ingresa el comando como se muestra a continuación para ejecutar YOLOv8.

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh object-detection
```

### Resultado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_withoutAIkit.gif" alt="pir" width={1000} height="auto"/></p>
</TabItem>
</Tabs>

## Resultado

Comparamos la velocidad de inferencia de YOLOv8 para detección de objetos con resolución de entrada 640*640 antes y después de la aceleración usando el kit de IA. Los resultados muestran que antes de la aceleración, la velocidad de inferencia era solo de 0.75 FPS, mientras que después de la aceleración, alcanzó 29.5 FPS.

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/yZ0IlqLZ86E" title="YOLOv8 Object Detection on reComputer R1000(CM4-Powered Edge Gateway) with Hailo-8L" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Perspectivas del Proyecto

En este proyecto, evaluamos la velocidad de ejecución de YOLOv8 en detección de objetos con y sin kit de IA. El resultado muestra que el kit de IA puede mejorar enormemente el rendimiento del dispositivo edge. Y en el futuro, evaluaremos la velocidad de ejecución de YOLOv8 en diferentes escenarios, incluyendo segmentación semántica y estimación de pose con kits de IA después de la aceleración.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
