---
description: Entrena tu propio conjunto de datos con Yolov5 y despliégalo en reTerminal DM
title: Entrena tu propio conjunto de datos con Yolov5 y despliégalo en reTerminal DM
keywords:
  - Edge
  - reTerminal DM Application
  - Embedded_ML
  - yolov5
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reTerminal-DM-Yolo5
last_update:
  date: 9/7/2023
  author: Kasun Thushara
---

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/yolov5.gif" /></center>

## Introducción

La detección de objetos, un aspecto fundamental de la visión por computadora, implica identificar objetos dentro de imágenes y encuentra aplicación en numerosos campos como vigilancia, atención médica y automóviles autónomos. Los Detectores de Objetos de Una Sola Etapa son una categoría específica de modelos que simplifican esta tarea prediciendo directamente las categorías de objetos y las coordenadas de las cajas delimitadoras sin requerir una etapa inicial de propuesta de región. Este enfoque simplificado es especialmente valioso en aplicaciones en tiempo real. Notablemente, la familia de modelos YOLO (You Only Look Once) ejemplifica esta eficiencia, ofreciendo detección rápida de objetos sin comprometer la precisión.

## Comenzando

Antes de iniciar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

### Preparación del hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal DM</th>
        <th>Acelerador USB Coral</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/reterminaldm.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/coral.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-With-Camera-p-5648.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-USB-Accelerator-p-2899.html?queryID=852f9c8543fee2db0ee8b47f6d5dbda2&objectID=2899&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparación del software

Recomendamos instalar la última versión del SO Raspberry Pi de 64 bits desde su sitio web oficial. Si prefieres instalar un nuevo SO Raspbian, por favor sigue los pasos descritos en esta [guía](https://wiki.seeedstudio.com/es/reterminal-dm-flash-OS/).

### Roboflow

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow.png" alt="pir" width="200" height="auto"/></p>

[Roboflow](https://universe.roboflow.com/) es una plataforma integral para visión por computadora que ofrece una amplia gama de herramientas y servicios para agilizar el proceso de desarrollo e implementación de modelos de visión por computadora. Una de sus características destacadas es su sólido soporte para conjuntos de datos personalizados con anotaciones. Los usuarios pueden cargar fácilmente sus propios conjuntos de datos, completos con anotaciones, para entrenar y ajustar modelos de visión por computadora. Así que crea una cuenta con esto.

### Ultralytics

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ultralytic.png" alt="pir" width="200" height="auto"/></p>

[Ultralytics](https://ultralytics.com/) es una plataforma de vanguardia y organización de investigación que se especializa en visión por computadora y aprendizaje profundo. Son reconocidos por sus contribuciones al campo, particularmente en el desarrollo de la familia YOLO (You Only Look Once) de modelos de detección de objetos, como YOLOv5. Ultralytics ofrece una gama de herramientas de última generación y software de código abierto para detección de objetos, clasificación de imágenes y más, haciendo que la visión por computadora avanzada sea accesible para investigadores y desarrolladores. Su dedicación a la innovación y soluciones orientadas al rendimiento ha obtenido atención y reconocimiento significativos en la comunidad de visión por computadora, convirtiendo a Ultralytics en un recurso de referencia para aquellos que buscan empujar los límites de lo que es posible en el ámbito del aprendizaje profundo y el reconocimiento visual.

## Elegir un conjunto de datos de Roboflow

- **Paso 1** Por favor accede al sitio web proporcionado y navega al conjunto de datos de tu elección usando la función de búsqueda. [Roboflow](https://universe.roboflow.com/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow1.PNG" alt="pir" width="800" height="auto"/></p>

- **Paso 2** Después de seleccionar un conjunto de datos haz clic en **Download this Dataset**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow2.PNG" alt="pir" width="800" height="auto"/></p>

- **Paso 3** Selecciona el formato de descarga YOLOv5.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow3.PNG" alt="pir" width="400" height="auto"/></p>

- **Paso 4** Selecciona **show download code** y presiona continuar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow4.PNG" alt="pir" width="400" height="auto"/></p>

- **Paso 5** En la sección "Jupyter", encontrarás un fragmento de código. Por favor copia este fragmento a tu portapapeles.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/roboflow5.PNG" alt="pir" width="400" height="auto"/></p>

## Entrena tu conjunto de datos personalizado

- **Paso 1** Por favor accede al enlace de github proporcionado y haz clic en **Open in Colab** [Enlace de Github](https://github.com/KasunThushara/yoloV5n_RPI/tree/main)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/github.PNG" alt="pir" width="800" height="auto"/></p>

<a target="_blank" href="https://colab.research.google.com/github/KasunThushara/yoloV5n_RPI/blob/main/yolov5_reTerminal.ipynb">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
</a>

:::note

Antes de desplegar un modelo en dispositivos con recursos limitados como la Raspberry Pi, a menudo es esencial realizar la conversión y la cuantización del modelo para garantizar un rendimiento óptimo. Este proceso implica varios pasos: convertir un modelo de PyTorch (en formato .pt) a un modelo de TensorFlow Lite (TFLite) con cuantización, específicamente al tipo de datos uint8. Puede entrenar su conjunto de datos personalizado y convertirlo a un modelo TFLite usando este cuaderno de Colab. Hemos descrito un proceso paso a paso para el entrenamiento dentro del entorno de Colab. Siga estas instrucciones, obtenga el archivo **data.yaml** y el archivo **best-int8.tflite**, y regrese a este wiki para más orientación.

:::

## Prepara tu reTerminal DM

- **Paso 1** En la Terminal ejecuta estos comandos uno por uno.

```sh
sudo git clone https://github.com/ultralytics/yolov5
cd yolov5
pip install -r requirements.txt 
sudo apt-get install python3-tflite-runtime
```

- **Paso 2** Pega el archivo Data.yaml y el archivo best-int8.tflite dentro de la carpeta yolov5

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/reterminal.PNG" alt="pir" width="800" height="auto"/></p>

## Inferencia con detect.py

- **Paso 1** Abre reterminal y navega a la carpeta yolov5

```sh
cd yolov5
```

- **Paso 2** Inferencia con detect.py

```sh
python detect.py --weight best-int8.tflite --img 224 --source <your source > --nosave --view-img --data data.yaml
```

:::note
Puedes explorar el sitio oficial de Ultralytics GitHub en [https://github.com/ultralytics/yolov5](https://github.com/ultralytics/yolov5) para aprender cómo usar el script `detect.py` y descubrir las diversas fuentes que puedes utilizar para alimentar imágenes o flujos de video al modelo YOLOv5.
:::

## Ejecutar en Edge TPU

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/yolo/ppeyolo.gif" /></center>

El despliegue del modelo YOLOv5n en una Edge TPU representa una sinergia dinámica entre la detección de objetos de vanguardia y la computación de borde de alto rendimiento. Esta amalgama potencia aplicaciones en IA de borde, como el reconocimiento de objetos en tiempo real en entornos con recursos limitados, haciéndolo invaluable para tareas como vigilancia de seguridad, análisis de retail y sistemas autónomos. El diseño eficiente de YOLOv5n se armoniza perfectamente con la aceleración de hardware de Edge TPU, proporcionando detección de objetos rápida y precisa en el borde de la red, donde la baja latencia y el procesamiento en tiempo real son primordiales.

- Inferencia con detect.py

```sh
python detect.py --weight best-int8_edgetpu.tflite --img 224 --source <your source > --nosave --view-img --data data.yaml
```

## Recursos

- **[Página Web]** [Documentación Oficial de Yolov5](https://github.com/ultralytics/yolov5)

- **[Página Web]** [Roboflow](https://universe.roboflow.com/)

## Soporte técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
