---
description: Esta wiki demuestra la detección de objetos usando YOLOv8 en reComputer R1000 con aceleración Raspberry-pi-AI-kit.
title: Detección de objetos YOLOv8 en reComputer R1000 con Hailo-8L
keywords:
  - Edge
  - reComputer r1000
  - Detección de objetos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l
last_update:
  date: 02/18/2025
  author: Erick González

no_comments: false # para Disqus
---

# Detección de objetos YOLOv8 en reComputer R1000 con Hailo-8L

## Introducción

[YOLOv8](https://github.com/ultralytics/ultralytics) (You Only Look Once versión 8) es la serie más popular de modelos de detección de objetos en tiempo real de YOLO. Se basa en las fortalezas de sus predecesores al introducir varios avances en velocidad, precisión y flexibilidad. El [Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) se utiliza para acelerar la velocidad de inferencia, con un acelerador de red neuronal de 13 tera-operaciones por segundo (TOPS) basado en el chip Hailo-8L.

Esta wiki demuestra la detección de objetos usando YOLOv8 en [reComputer R1000](https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html) con y sin la aceleración del Raspberry-pi-AI-kit. El Raspberry Pi AI Kit mejora el rendimiento del Raspberry Pi y desbloquea su potencial en aplicaciones de inteligencia artificial y aprendizaje automático, como comercio inteligente, tráfico inteligente y más. Aunque el Raspberry AI Kit está diseñado para Raspberry Pi 5, lo hemos experimentado en nuestro gateway de borde con CM4. ¡Estamos emocionados de convertir nuestro dispositivo de borde en una puerta de enlace IoT inteligente!

## Preparar el hardware

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
				<strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
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

### Paso 1: Instalar AI kit

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/install_AIkit.gif" alt="pir" width={1000} height="auto"/></p>

### Paso 2: Actualizar el sistema y configurar PCIe a gen3

#### Actualizar el sistema

Abre la terminal en el reComputer R1000 e ingresa el siguiente comando para actualizar el sistema.

```
sudo apt update
sudo apt full-upgrade
```

#### Configurar PCIe a gen3

Abre la terminal en el reComputer R1000 e ingresa el siguiente comando para configurar el reComputer R1000.

```
sudo raspi-config
```

Selecciona la opción "6 Advanced Options"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step1.png" alt="pir" width={1000} height="auto"/></p>

Luego selecciona la opción "A8 PCIe Speed"

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step2.png" alt="pir" width={1000} height="auto"/></p>

Elige "Sí" para habilitar el modo PCIe Gen 3

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step3.png" alt="pir" width={1000} height="auto"/></p>

Haz clic en "Finish" para salir

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/step4.png" alt="pir" width={1000} height="auto"/></p>

### Paso 3: Instalar el software de Hailo y verificar la instalación

#### Instalar el software de Hailo

Abre la terminal en el reComputer R1000 e ingresa el siguiente comando para instalar el software de Hailo.

```
sudo apt install hailo-all
sudo reboot
```

#### Verificar el software y el hardware

Abre la terminal en el reComputer R1000 e ingresa el siguiente comando para verificar si se ha instalado hailo-all.

```
hailortcli fw-control identify
```

El resultado correcto debe ser el siguiente:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Abre la terminal en el reComputer R1000 e ingresa el siguiente comando para verificar si hailo-8L está conectado.

```
lspci | grep Hailo
```

El resultado correcto debe ser el siguiente:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### Ejecutar YOLOv8

Abre la terminal en el reComputer R1000 e ingresa el siguiente comando para ejecutar YOLOv8.

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

Abre la terminal en el reComputer R1000 e ingresa el siguiente comando para ejecutar YOLOv8.

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

Comparamos la velocidad de inferencia de YOLOv8 para detección de objetos con una resolución de entrada de 640*640 antes y después de la aceleración usando el AI kit. Los resultados muestran que antes de la aceleración, la velocidad de inferencia era solo de 0.75 FPS, mientras que después de la aceleración, alcanzó 29.5 FPS.

<div align="center">
<iframe width="800" height="400" src="https://www.youtube.com/embed/yZ0IlqLZ86E" title="Detección de objetos YOLOv8 en reComputer R1000 (Gateway Edge con CM4) con Hailo-8L" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Perspectiva del proyecto

En este proyecto, medimos la velocidad de ejecución de YOLOv8 para detección de objetos con y sin AI kit. El resultado muestra que el AI kit puede mejorar enormemente el rendimiento del dispositivo de borde. En el futuro, mediremos la velocidad de ejecución de YOLOv8 en diferentes escenarios, incluyendo segmentación semántica y estimación de pose con AI kits después de la aceleración.

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el soporte necesario para asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
