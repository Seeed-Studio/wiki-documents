---
description: Entrena tu propio conjunto de datos con YoloV5 y despliega en reTerminal DM
title: Entrenar conjunto de datos con Yolov5 y desplegar en reTerminal DM
keywords:
  - Edge
  - reTerminal DM Application
  - Embedded_ML
  - yolov5
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-DM-Yolo5
last_update:
  date: 04/03/2025
  author: Erick González
---

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/yolov5.gif" /></center>

## Introducción

La detección de objetos, un aspecto fundamental de la visión por computadora, consiste en identificar objetos dentro de imágenes y encuentra aplicaciones en numerosos campos como vigilancia, salud y coches autónomos. Los detectores de un solo paso (Single-Stage Object Detectors) son una categoría específica de modelos que simplifican esta tarea prediciendo directamente la categoría de los objetos y las coordenadas de las cajas delimitadoras sin requerir una etapa inicial de propuestas de región. Este enfoque simplificado es especialmente valioso en aplicaciones en tiempo real. Destaca especialmente la familia YOLO (You Only Look Once), que ejemplifica esta eficiencia, ofreciendo detección rápida de objetos sin comprometer la precisión.

## Primeros pasos
Antes de iniciar este proyecto, puede que necesites preparar el hardware y software tal como se describe a continuación.

### Preparación de hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal DM</th>
        <th>Acelerador Coral USB</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/reterminaldm.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/coral.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-With-Camera-p-5648.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo! 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-USB-Accelerator-p-2899.html?queryID=852f9c8543fee2db0ee8b47f6d5dbda2&objectID=2899&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo! 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparación de software

Recomendamos instalar la última versión de Raspberry Pi OS de 64 bits desde su sitio oficial. Si prefieres instalar un nuevo Raspbian OS, sigue los pasos descritos en esta [guía](https://wiki.seeedstudio.com/reterminal-dm-flash-OS/).

### Roboflow

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow.png" alt="pir" width="200" height="auto"/></p>

[Roboflow](https://universe.roboflow.com/) es una plataforma integral para visión por computadora que ofrece una amplia gama de herramientas y servicios para agilizar el proceso de desarrollo y despliegue de modelos de visión. Una de sus características destacadas es el robusto soporte para conjuntos de datos personalizados con anotaciones. Los usuarios pueden subir fácilmente sus propios conjuntos de datos, con anotaciones incluidas, para entrenar y refinar modelos de visión por computadora. Así que crea una cuenta con ellos.

### Ultralytics

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ultralytic.png" alt="pir" width="200" height="auto"/></p>

[Ultralytics](https://ultralytics.com/) es una plataforma y organización de investigación de vanguardia especializada en visión por computadora y deep learning. Son conocidos por sus aportes en la familia de modelos YOLO (You Only Look Once), como YOLOv5. Ultralytics ofrece diversas herramientas de última generación y software open-source para detección de objetos, clasificación de imágenes y más, facilitando el acceso a la visión por computadora avanzada a investigadores y desarrolladores. Su compromiso con la innovación y soluciones orientadas al rendimiento ha obtenido reconocimiento en la comunidad de visión por computadora, lo que convierte a Ultralytics en un recurso fundamental para quienes deseen explorar los límites de lo posible en deep learning y reconocimiento visual.

## Elige un conjunto de datos desde Roboflow

- **Step 1:** Accede al sitio y navega hasta el conjunto de datos de tu elección mediante la función de búsqueda. [Roboflow](https://universe.roboflow.com/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow1.PNG" alt="pir" width="800" height="auto"/></p>

- **Step 2:** Tras seleccionar un conjunto de datos, haz clic en **Download this Dataset**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow2.PNG" alt="pir" width="800" height="auto"/></p>

- **Step 3:** Selecciona el formato de descarga **YOLOv5**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow3.PNG" alt="pir" width="400" height="auto"/></p>

- **Step 4:** Elige **show download code** y presiona **continue**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow4.PNG" alt="pir" width="400" height="auto"/></p>

- **Step 5:** En la sección "Jupyter", verás un fragmento de código. Cópialo al portapapeles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow5.PNG" alt="pir" width="400" height="auto"/></p>

## Entrenar tu conjunto de datos personalizado

- **Step 1:** Accede al enlace de GitHub y haz clic en **Open in Colab** [Enlace GitHub](https://github.com/KasunThushara/yoloV5n_RPI/tree/main)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/github.PNG" alt="pir" width="800" height="auto"/></p>

<a target="_blank" href="https://colab.research.google.com/github/KasunThushara/yoloV5n_RPI/blob/main/yolov5_reTerminal.ipynb">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
</a>

:::note

Antes de desplegar un modelo en dispositivos con recursos limitados como Raspberry Pi, a menudo es esencial realizar conversión de modelo y cuantización para asegurar un rendimiento óptimo. Este proceso implica varios pasos: convertir un modelo PyTorch (.pt) a un modelo TensorFlow Lite (TFLite) con cuantización (uint8). Puedes entrenar tu dataset y convertirlo en un modelo TFLite usando este notebook de Colab. Hemos descrito paso a paso el entrenamiento dentro del entorno Colab. Sigue esas instrucciones, obtén tu archivo **data.yaml** y **best-int8.tflite**, y regresa a este wiki para continuar.

:::

## Preparar tu reTerminal DM

- **Step 1:** En la Terminal ejecuta estos comandos:

```sh
sudo git clone https://github.com/ultralytics/yolov5
cd yolov5
pip install -r requirements.txt 
sudo apt-get install python3-tflite-runtime
```
- **Step 2:** Copia los archivos Data.yaml y best-int8.tflite dentro de la carpeta yolov5

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/reterminal.PNG" alt="pir" width="800" height="auto"/></p>

## Inferencia con detect.py

- **Step 1:** Abre reTerminal y navega a la carpeta yolov5

```sh
cd yolov5
```
- **Step 2:** Inferencia con detect.py

```sh
python detect.py --weight best-int8.tflite --img 224 --source <your source > --nosave --view-img --data data.yaml
```
:::note
Para saber más sobre cómo usar "detect.py" y las distintas fuentes, visita [Ultralytics GitHub](https://github.com/ultralytics/yolov5).
:::

## Ejecutar en Edge TPU

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ppeyolo.gif" /></center>

El despliegue del modelo YOLOv5n en un Edge TPU combina la eficiencia de la detección de objetos con la computación de alto rendimiento en el borde. Esto permite aplicaciones de IA en edge, como reconocimiento de objetos en tiempo real en entornos con recursos limitados, destacando en vigilancia, análisis de retail y sistemas autónomos. YOLOv5n, con un diseño optimizado, se integra perfectamente con la aceleración hardware de Edge TPU, ofreciendo una detección rápida y precisa en el borde, donde la baja latencia y el procesamiento en tiempo real son críticos.

- Inferencia con detect.py

```sh
python detect.py --weight best-int8_edgetpu.tflite --img 224 --source <your source > --nosave --view-img --data data.yaml
```

## Recursos

- **[Web Page]** [Documentación oficial de Yolov5](https://github.com/ultralytics/yolov5)
- **[Web Page]** [Roboflow](https://universe.roboflow.com/)

# Soporte Técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte el soporte necesario y asegurar que tu experiencia sea fluida. Ofrecemos varios canales de comunicación para diferentes necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
