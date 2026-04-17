---
description: Este wiki demuestra la detección de objetos usando YOLOv8 en reComputer R Series con aceleración Raspberry-pi-AI-kit.
title: Detección de objetos con YOLOv8 en reComputer R Series con Hailo-8L
keywords:
  - Borde
  - reComputer R Series
  - Detección de objetos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /yolov8_object_detection_on_recomputer_r1000_with_hailo_8l
sku: 113991274, E24010521, 114993627, 100020831, 100061305, 103990763
last_update:
  date: 04/17/2026
  author: William Zhang
no_comments: false
createdAt: '2024-06-27'
updatedAt: '2026-04-17'
url: https://wiki.seeedstudio.com/es/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/
---

# Detección de objetos con YOLOv8 en reComputer R Series con Hailo-8L

## Introducción

[YOLOv8](https://github.com/ultralytics/ultralytics) (You Only Look Once versión 8) es la serie YOLO más popular de modelos de detección de objetos en tiempo real. Se basa en las fortalezas de sus predecesores introduciendo varias mejoras en velocidad, precisión y flexibilidad. El [Raspberry-pi-AI-kit](https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html) se utiliza para acelerar la velocidad de inferencia, incorporando un acelerador de inferencia de redes neuronales de 13 TOPS basado en el chip Hailo-8L.

Este wiki demuestra la detección de objetos usando YOLOv8 en la R Series con y sin la aceleración del Raspberry-pi-AI-kit. El Raspberry Pi AI Kit mejora el rendimiento de la Raspberry Pi y desbloquea su potencial en aplicaciones de inteligencia artificial y aprendizaje automático, como comercio minorista inteligente, tráfico inteligente y más. Aunque el Raspberry AI Kit está diseñado para Raspberry Pi 5, lo hemos probado en nuestra puerta de enlace perimetral basada en CM4. ¡Emocionados por convertir nuestro dispositivo perimetral en una puerta de enlace IoT inteligente!

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
          <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-AI-Kit-p-5900.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
  <table align="center">
    <tr>
      <th>reComputer AI Industrial R2100</th>
      <th>reComputer Industrial R20xx</th>
      <th>reComputer Industrial R21xx</th>
      <th>reComputer AI R2100</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/q/q/qq_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2140-12-p-6431.html" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
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

### Paso 1: Instalar el AI kit

Si estás utilizando un dispositivo de la serie R2000 con aceleración de IA integrada, puedes omitir este paso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/install_AIkit.gif" alt="pir" width={1000} height="auto"/></p>

### Paso 2: Actualizar el sistema y configurar PCIe a Gen3

#### Actualizar el sistema

Abre una terminal en el reComputer R1000 e introduce el siguiente comando para actualizar tu sistema.

```
sudo apt update
sudo apt full-upgrade
```

#### Configurar PCIe a Gen3

Abre una terminal en el reComputer R1000 e introduce el siguiente comando para configurar el reComputer R1000.

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

### Paso 3: Instalar el software de Hailo y verificar la instalación

#### Instalar el software de Hailo

Abre una terminal en el reComputer R1000 e introduce el siguiente comando para instalar el software de Hailo.

```
sudo apt install hailo-all
sudo reboot
```

#### Comprobar software y hardware

Abre una terminal en el reComputer R1000 e introduce el siguiente comando para comprobar si hailo-all se ha instalado.

```
hailortcli fw-control identify
```

El resultado correcto se muestra como se indica a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_software.png" alt="pir" width={1000} height="auto"/></p>

Abre una terminal en el reComputer R1000 e introduce el siguiente comando para comprobar si hailo-8L se ha conectado.

```
lspci | grep Hailo
```

El resultado correcto se muestra como se indica a continuación:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/check_hardware.png" alt="pir" width={1000} height="auto"/></p>

### Ejecutar YOLOv8

Abre una terminal en el reComputer R1000 e introduce el siguiente comando para ejecutar YOLOv8.

Nota: Durante la ejecución se debe conectar una pantalla externa mediante un cable HDMI; de lo contrario, la interfaz de visualización no se cargará.

```
git clone https://github.com/Seeed-Projects/Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L.git
cd Benchmarking-YOLOv8-on-Raspberry-PI-reComputer-r1000-and-AIkit-Hailo-8L
bash ./run.sh object-detection-hailo
```

### Resultado

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/YOLOV8/object_detection_with_AIkit.gif" alt="pir" width={1000} height="auto"/></p>

### Nota
Si te conectas de forma remota mediante SSH u otros métodos y no dispones de una pantalla externa, puedes modificar el método de renderizado de imágenes en el código para que la interfaz de visualización pueda renderizarse sin depender de una pantalla externa.

Abre el archivo de código de inferencia object-detection-hailo.py, modifica la línea 165 y reemplaza toda la línea con el siguiente código:
```
        pipeline_string += f"fpsdisplaysink video-sink=ximagesink name=hailo_display sync={self.sync} text-overlay={self.options_menu.show_fps} signal-fps-measurements=true "
```



</TabItem>

<TabItem value="Method 2" label="Ejecutar sin Hailo-8L">

### Ejecutar YOLOv8

Abre una terminal en el reComputer R1000 e introduce el siguiente comando para ejecutar YOLOv8.

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

Comparamos la velocidad de inferencia de YOLOv8 para detección de objetos con una resolución de entrada de 640*640 antes y después de la aceleración usando el AI kit. Los resultados muestran que, antes de la aceleración, la velocidad de inferencia era de solo 0,75 FPS, mientras que después de la aceleración alcanzó 29,5 FPS.

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/yZ0IlqLZ86E" title="YOLOv8 Object Detection on reComputer R1000(CM4-Powered Edge Gateway) with Hailo-8L" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Perspectivas del proyecto

En este proyecto, comparamos la velocidad de ejecución de YOLOv8 en la detección de objetos con y sin kit de IA. El resultado muestra que el kit de IA puede mejorar en gran medida el rendimiento del dispositivo perimetral. En el futuro, compararemos la velocidad de ejecución de YOLOv8 en diferentes escenarios, incluidos los kits de IA de segmentación semántica y estimación de pose después de la aceleración.

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
