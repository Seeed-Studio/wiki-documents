---
description: Este wiki demuestra el benchmarking de estimación de poses y detección de objetos con yolov8s en Raspberry Pi 5 y Raspberry Pi Compute Module 4.
title: Benchmark en RPi5 y CM4 ejecutando yolov8s con el kit AI de RPi
keywords:
  - Edge
  - reComputer r1000
  - Detección de objetos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/benchmark_on_rpi5_and_cm4_running_yolov8s_with_rpi_ai_kit
last_update:
  date: 02/18/2025
  author: Erick González

no_comments: false # para Disqus
---

# Benchmark en RPi5 y CM4 ejecutando yolov8s con el kit AI de RPi

## Introducción

[YOLOv8](https://github.com/ultralytics/ultralytics) (You Only Look Once versión 8) es la serie más popular de modelos de estimación de poses y detección de objetos en tiempo real de YOLO. Se basa en las fortalezas de sus predecesores al introducir varias mejoras en velocidad, precisión y flexibilidad. El [Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) se utiliza para acelerar la velocidad de inferencia, con un acelerador de inferencia de redes neuronales de 13 tera-operaciones por segundo (TOPS) construido alrededor del chip Hailo-8L.

Este wiki presenta un benchmarking de YOLOv8s para estimación de poses y detección de objetos en Raspberry Pi 5 y Raspberry Pi Compute Module 4. Todas las pruebas utilizan el mismo modelo (YOLOv8s), cuantizado a int8, con un tamaño de entrada de 640x640 píxeles, tamaño de lote configurado a 1, y entrada desde el mismo video a 240 FPS.

## Preparar el hardware

### Para CM4

<div class="table-center">
	<table align="center">
	<tr>
		<th>reComputer r1000</th>
		<th>Raspberry Pi AI Kit</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
	  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113060086-raspberry-pi-ai-kit-all.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1000-Series-Optional-Accessories.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> ¡Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> ¡Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

### Para Raspberry Pi 5

<div class="table-center">
	<table align="center">
	<tr>
		<th>Raspberry Pi5 8GB</th>
		<th>Raspberry Pi AI Kit</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td>
	  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-113060086-raspberry-pi-ai-kit-all.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> ¡Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> ¡Consíguelo ahora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


## Ejecutar este proyecto

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Method 1" label="Pi5 Benchmark">

### Instalar el kit AI en RPi5
Por favor consulta [este enlace](https://www.raspberrypi.com/documentation/accessories/ai-kit.html)

### Instalar el software Hailo y verificar la instalación

#### Actualizar el sistema:

```bash
sudo apt update
sudo apt full-upgrade
```
#### Configurar PCIe para gen2/gen3 (gen3 es más rápido que gen2):

Añadir el siguiente texto a ```/boot/firmware/config.txt```

```bash
# Habilitar el conector PCIe externo

dtparam=pciex1

# Forzar velocidades Gen 3.0

dtparam=pciex1_gen=3
```
:::note
Si deseas usar gen2, comenta la línea dtparam=pciex1_gen=3
:::

#### Instalar hailo-all y reiniciar:

Abre la terminal en Raspberry Pi 5 y ejecuta el siguiente comando para instalar el software Hailo.

```bash
sudo apt install hailo-all
sudo reboot
```

#### Verificar el software y el hardware:

Abre la terminal en Raspberry Pi 5 y ejecuta el siguiente comando para verificar si hailo-all se ha instalado correctamente.

```bash
hailortcli fw-control identify
```

El resultado correcto se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Abre la terminal en Raspberry Pi 5 y ejecuta el siguiente comando para verificar si hailo-8L se ha conectado correctamente.

```bash
lspci | grep Hailo
```

El resultado correcto se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### Ejecutar el proyecto

<Tabs>
<TabItem value="Method 1" label="Ejecutar estimación de pose">

#### Instalar el proyecto

```bash
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
```

#### Ejecutar el proyecto

```bash
# ejecutar estimación de pose con AI kit

bash run.sh pose-estimation-hailo

# ejecutar estimación de pose sin AI kit

bash run.sh pose-estimation
```

#### Resultado

<iframe width="800" height="400" src="https://www.youtube.com/embed/Mo7AL7AjxwA" title="Raspberry Pi AI: Estimación de pose YOLOv8 - Video a 240fps, Pi 5 PCIe Gen2 vs Gen3 Benchmark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</TabItem>

<TabItem value="Method 2" label="Ejecutar detección de objetos">

#### Instalar el proyecto

```bash
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
```

#### Ejecutar el proyecto

```bash
# ejecutar detección de objetos con AI kit

bash run.sh object-detection-hailo

# ejecutar detección de objetos sin AI kit

bash run.sh object-detection
```

#### Resultado

<iframe width="800" height="400" src="https://www.youtube.com/embed/olaSVKmt9YI" title="Raspberry Pi AI: Detección de objetos YOLOv8 - Video a 240fps, Pi 5 PCIe Gen2 vs Gen3 Benchmark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</TabItem>
</Tabs>

</TabItem>

<TabItem value="Method 2" label="CM4 Benchmark">

Para detección de objetos, consulta el siguiente wiki:
[yolov8_object_detection_on_recomputer_r1000_with_hailo_8l](https://wiki.seeedstudio.com/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/)

Para estimación de pose, consulta el siguiente wiki:
[yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l](https://wiki.seeedstudio.com/yolov8_pose_estimation_on_recomputer_r1000_with_hailo_8l/)
</TabItem>

</Tabs>

## Resultado

<Tabs>

<TabItem value="Method 1" label="batchsize=8">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_batch8.png" alt="pir" width={1000} height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/poes_estimation_batch8.png" alt="pir" width={1000} height="auto"/></p>

</TabItem>

<TabItem value="Method 2" label="batchsize=1">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object-detection-benchmark.png" alt="pir" width={1000} height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/pose-estimation-benchmark.png" alt="pir" width={1000} height="auto"/></p>

</TabItem>

</Tabs>

## Soporte técnico y discusión sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
