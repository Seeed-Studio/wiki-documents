---
description: Implementa YOLOv8 en la NVIDIA Jetson con TensorRT, etiquetado de datos, entrenamiento de modelos de IA, implementación de modelos de IA
title: Implementación de YOLOv8 con TensorRT
tags:
  - Etiquetado de datos
  - Entrenamiento de modelos de IA
  - Despliegue de modelo de IA
  - Yolov8
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/YOLOv8-TRT-Jetson
last_update:
  date: 07/17/2023
  author: Lakshantha
---

# Despliegue de YOLOv8 en dispositivos NVIDIA Jetson utilizando TensorRT

Esta wiki explica cómo implementar un modelo YOLOv8 en dispositivos NVIDIA Jetson y realizar inferencias usando TensorRT. Aquí utilizamos TensorRT para maximizar el rendimiento de inferencia en el dispositivo Jetson.

Se presentarán diferentes sistemas de visión por computadora, como:

- Detección de objetos
- Segmentación de imágenes
- Clasificación de imágenes
- Estimación de pose
- Seguimiento de objetos

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/8.gif
" style={{width:1000, height:'auto'}}/></div>

## Prerequisitos

- PC con Ubuntu OS(nativo o en máquina virtual)
- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) o cualquier otro dispositivo NVIDIA Jetson corriendo JetPack 4.6 o superior

:::nota
En esta wiki verificamos en funcionamiento en la [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) y la reComputer Industrial J4012[https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html] impulsadas por el modulo NVIDIA Jetson orin NX 16GB
:::

## Flashear JetPack en la Jetson

Ahora debes asegurarte de que el dispositivo Jetson esté actualizado con un sistema [JetPack](https://developer.nvidia.com/embedded/jetpack). Puedes utilizar NVIDIA SDK Manager o la línea de comandos para actualizar JetPack al dispositivo.

Para obtener guías de actualización de dispositivos impulsados ​​por Seeed Jetson, consulta los enlaces a continuación:
- [reComputer J1010 | J101](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack)
- [A203 Carrier Board](https://wiki.seeedstudio.com/reComputer_A203_Flash_System)
- [A205 Carrier Board](https://wiki.seeedstudio.com/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

:::nota
Asegúrate de actualizar JetPack versión 5.1.1 porque esa es la versión que hemos verificado para esta wiki.
:::

## Despliegue de YOLOV8 en dispositivos Jetson ¡En una sola línea de código!

Después de actualizar el dispositivo Jetson con JetPack, puedes simplemente ejecutar los siguientes comandos para ejecutar los modelos YOLOv8. Esto primero descargará e instalará los paquetes y dependencias necesarios, configurará el entorno y descargará modelos previamente entrenados de YOLOv8 para realizar tareas de detección de objetos, segmentación de imágenes, estimación de pose y clasificación de imágenes.

```sh
wget files.seeedstudio.com/YOLOv8-Jetson.py && python YOLOv8-Jetson.py
```

:::nota
El código fuente del script anterior se puede encontrar [aquí](https://github.com/yuyoujiang/Run-YOLOv8-in-One-Line-on-Jetson)
:::

## Utilizar modelos pre entrenados

La forma más rápida de comenzar con YOLOv8 es utilizar modelos pre entrenados proporcionados por YOLOv8. Sin embargo, estos son modelos de PyTorch y, por lo tanto, solo utilizarán la CPU al inferir en Jetson. Si deseas obtener el mejor rendimiento de estos modelos en Jetson mientras se ejecuta en la GPU, puedes exportar los modelos de PyTorch a TensorRT siguiendo esta sección de la wiki.

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="detec" label="Object Detection">

YOLOv8 ofrece 5 tamaños de modelo PyTorch pre entrenados para la detección de objetos, entrenados en un conjunto de datos COCO con un tamaño de imagen de entrada de 640x640. Puedes encontrarlos a continuación

<table>
  <thead>
    <tr>
      <th>Model</th>
      <th>size<br />(pixels)</th>
      <th>mAPval<br />50-95</th>
      <th>Speed<br />CPU ONNX<br />(ms)</th>
      <th>Speed<br />A100 TensorRT<br />(ms)</th>
      <th>params<br />(M)</th>
      <th>FLOPs<br />(B)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8n.pt" target="_blank" rel="noopener noreferrer">YOLOv8n</a></td>
      <td>640</td>
      <td>37.3</td>
      <td>80.4</td>
      <td>0.99</td>
      <td>3.2</td>
      <td>8.7</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s.pt" target="_blank" rel="noopener noreferrer">YOLOv8s</a></td>
      <td>640</td>
      <td>44.9</td>
      <td>128.4</td>
      <td>1.20</td>
      <td>11.2</td>
      <td>28.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8m.pt" target="_blank" rel="noopener noreferrer">YOLOv8m</a></td>
      <td>640</td>
      <td>50.2</td>
      <td>234.7</td>
      <td>1.83</td>
      <td>25.9</td>
      <td>78.9</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8l.pt" target="_blank" rel="noopener noreferrer">YOLOv8l</a></td>
      <td>640</td>
      <td>52.9</td>
      <td>375.2</td>
      <td>2.39</td>
      <td>43.7</td>
      <td>165.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x.pt" target="_blank" rel="noopener noreferrer">YOLOv8x</a></td>
      <td>640</td>
      <td>53.9</td>
      <td>479.1</td>
      <td>3.53</td>
      <td>68.2</td>
      <td>257.8</td>
    </tr>
  </tbody>
</table>


Referencia: https://docs.ultralytics.com/tasks/detect

Puedes elegir y descargar el modelo que desees de la tabla anterior y ejecutar el siguiente comando para ejecutar la inferencia en una imagen.

```sh
yolo detect predict model=yolov8n.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

Aquí, para el modelo, puedes cambiar a yolov8s.pt, yolov8m.pt, yolov8l.pt, yolov8x.pt y descargará el modelo previamente entrenado correspondiente.

También puedes conectar una cámara web y ejecutar el siguiente comando

```sh
yolo detect predict model=yolov8n.pt source='0' show=True
```

:::nota
Si encuentras algún error al ejecutar los comandos anteriores, intenta agregar "device = 0" al final del comando.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/2.gif
" style={{width:1000, height:'auto'}}/></div>

:::note
Lo anterior se ejecuta en una reComputer J4012/reComputer Industrial J4012 y utiliza el modelo YOLOv8s entrenado con entrada de 640x640 con una precisión TensorRT FP16.
:::

</TabItem>
<TabItem value="classfiy" label="Image Classification">

YOLOv8 ofrece 5 tamaños de modelo PyTorch pre entrenados para clasificación de imágenes, entrenados en ImageNet con un tamaño de imagen de entrada de 224x224. Puedes encontrarlos a continuación

<table>
  <thead>
    <tr>
      <th>Model</th>
      <th>size<br />(pixels)</th>
      <th>acc<br />top1</th>
      <th>acc<br />top5<br /></th>
      <th>Speed<br />CPU ONNX<br />(ms)<br /></th>
      <th>Speed<br />A100 TensorRT<br />(ms)<br /><br /></th>
      <th>params<br />(M)<br /></th>
      <th>FLOPs<br />(B) at 640</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>YOLOv8n-cls</td>
      <td>224</td>
      <td>66.6</td>
      <td>87.0</td>
      <td>12.9</td>
      <td>0.31</td>
      <td>2.7</td>
      <td>4.3</td>
    </tr>
    <tr>
      <td>YOLOv8s-cls</td>
      <td>224</td>
      <td>72.3</td>
      <td>91.1</td>
      <td>23.4</td>
      <td>0.35</td>
      <td>6.4</td>
      <td>13.5</td>
    </tr>
    <tr>
      <td>YOLOv8m-cls</td>
      <td>224</td>
      <td>76.4</td>
      <td>93.2</td>
      <td>85.4</td>
      <td>0.62</td>
      <td>17.0</td>
      <td>42.7</td>
    </tr>
    <tr>
      <td>YOLOv8l-cls</td>
      <td>224</td>
      <td>78.0</td>
      <td>94.1</td>
      <td>163.0</td>
      <td>0.87</td>
      <td>37.5</td>
      <td>99.7</td>
    </tr>
    <tr>
      <td> YOLOv8x-cls</td>
      <td>224</td>
      <td>78.4</td>
      <td>94.3</td>
      <td>232.0</td>
      <td>1.01</td>
      <td>57.4</td>
      <td>154.8</td>
    </tr>
  </tbody>
</table>

Referencia: https://docs.ultralytics.com/tasks/classify

Puedes elegir el modelo que desees y ejecutar el siguiente comando para ejecutar la inferencia en una imagen

```sh
yolo classify predict model=yolov8n-cls.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

Aquí, para el modelo, puedes cambiar a yolov8s-cls.pt, yolov8m-cls.pt, yolov8l-cls.pt, yolov8x-cls.pt y descargará el modelo previamente entrenado correspondiente.

También puedes conectar una cámara web y ejecutar el siguiente comando

```sh
yolo classify predict model=yolov8n-cls.pt source='0' show=True
```

:::nota
Si encuentras algún error al ejecutar los comandos anteriores, intenta agregar "device = 0" al final del comando.
:::

(update with 224 inference)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/5.gif
" style={{width:1000, height:'auto'}}/></div>

:::nota
Lo anterior se ejecuta en una reComputer J4012/reComputer Industrial J4012 y utiliza el modelo YOLOv8s-cls entrenado con entrada de 224x224 y utiliza precisión TensorRT FP16. Además, asegúrate de pasar el argumento **imgsz=224** dentro del comando de inferencia con las exportaciones de TensorRT porque el motor de inferencia acepta un tamaño de imagen de 640 de forma predeterminada cuando se usan modelos de TensorRT.
:::

</TabItem>
<TabItem value="segment" label="Image Segmentation">

YOLOv8 ofrece 5 tamaños de modelo PyTorch pre entrenados para la segmentación de imágenes, entrenados en un conjunto de datos COCO con un tamaño de imagen de entrada de 640x640. Puedes encontrarlos a continuación

<table>
  <thead>
    <tr>
      <th>Model</th>
      <th>size<br />(pixels)</th>
      <th>mAPbox<br />50-95</th>
      <th>mAPmask<br />50-95</th>
      <th>Speed<br />CPU ONNX<br />(ms)</th>
      <th>Speed<br />A100 TensorRT<br />(ms)</th>
      <th>params<br />(M)</th>
      <th>FLOPs<br />(B)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8n-seg.pt">YOLOv8n-seg</a></td>
      <td>640</td>
      <td>36.7</td>
      <td>30.5</td>
      <td>96.1</td>
      <td>1.21</td>
      <td>3.4</td>
      <td>12.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s-seg.pt">YOLOv8s-seg</a></td>
      <td>640</td>
      <td>44.6</td>
      <td>36.8</td>
      <td>155.7</td>
      <td>1.47</td>
      <td>11.8</td>
      <td>42.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8m-seg.pt">YOLOv8m-seg</a></td>
      <td>640</td>
      <td>49.9</td>
      <td>40.8</td>
      <td>317.0</td>
      <td>2.18</td>
      <td>27.3</td>
      <td>110.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8l-seg.pt">YOLOv8l-seg</a></td>
      <td>640</td>
      <td>52.3</td>
      <td>42.6</td>
      <td>572.4</td>
      <td>2.79</td>
      <td>46.0</td>
      <td>220.5</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x-seg.pt">YOLOv8x-seg</a></td>
      <td>640</td>
      <td>53.4</td>
      <td>43.4</td>
      <td>712.1</td>
      <td>4.02</td>
      <td>71.8</td>
      <td>344.1</td>
    </tr>
  </tbody>
</table>

Referencia: https://docs.ultralytics.com/tasks/segment

Puedes elegir el modelo que desees y ejecutar el siguiente comando para ejecutar la inferencia en una imagen

```sh
yolo segment predict model=yolov8n-seg.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

Aquí, para el modelo, puedes cambiar a yolov8s-seg.pt, yolov8m-seg.pt, yolov8l-seg.pt, yolov8x-seg.pt y descargará el modelo previamente entrenado correspondiente.

También puedes conectar una cámara web y ejecutar el siguiente comando

```sh
yolo segment predict model=yolov8n-seg.pt source='0' show=True
```

:::nota
Si encuentras algún error al ejecutar los comandos anteriores, intenta agregar "device = 0" al final del comando.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/3.gif
" style={{width:1000, height:'auto'}}/></div>

:::nota
Lo anterior se ejecuta en una reComputer J4012/reComputer Industrial J4012 y utiliza el modelo YOLOv8s-seg entrenado con entrada de 640x640 con una precisión TensorRT FP16.
:::

</TabItem>
<TabItem value="pose" label="Pose Estimation">

YOLOv8 ofrece 6 tamaños de modelo PyTorch pre entrenados para la estimación de pose, entrenados en un conjunto de datos de puntos clave COCO con un tamaño de imagen de entrada de 640x640. Puedes encontrarlos a continuación

<table>
  <thead>
    <tr>
      <th>Model</th>
      <th>size<br />(pixels)</th>
      <th>mAPpose<br />50-95</th>
      <th>mAPpose<br />50</th>
      <th>Speed<br />CPU ONNX<br />(ms)</th>
      <th>Speed<br />A100 TensorRT<br />(ms)</th>
      <th>params<br />(M)</th>
      <th>FLOPs<br />(B)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8n-pose.pt">YOLOv8n-pose</a></td>
      <td>640</td>
      <td>50.4</td>
      <td>80.1</td>
      <td>131.8</td>
      <td>1.18</td>
      <td>3.3</td>
      <td>9.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8s-pose.pt">YOLOv8s-pose</a></td>
      <td>640</td>
      <td>60.0</td>
      <td>86.2</td>
      <td>233.2</td>
      <td>1.42</td>
      <td>11.6</td>
      <td>30.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8m-pose.pt">YOLOv8m-pose</a></td>
      <td>640</td>
      <td>65.0</td>
      <td>88.8</td>
      <td>456.3</td>
      <td>2.00</td>
      <td>26.4</td>
      <td>81.0</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8l-pose.pt">YOLOv8l-pose</a></td>
      <td>640</td>
      <td>67.6</td>
      <td>90.0</td>
      <td>784.5</td>
      <td>2.59</td>
      <td>44.4</td>
      <td>168.6</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x-pose.pt">YOLOv8x-pose</a></td>
      <td>640</td>
      <td>69.2</td>
      <td>90.2</td>
      <td>1607.1</td>
      <td>3.73</td>
      <td>69.4</td>
      <td>263.2</td>
    </tr>
    <tr>
      <td><a href="https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x-pose-p6.pt">YOLOv8x-pose-p6</a></td>
      <td>1280</td>
      <td>71.6</td>
      <td>91.2</td>
      <td>4088.7</td>
      <td>10.04</td>
      <td>99.1</td>
      <td>1066.4</td>
    </tr>
  </tbody>
</table>

Referencia: https://docs.ultralytics.com/tasks/pose

Puedes elegir el modelo que desees y ejecutar el siguiente comando para ejecutar la inferencia en una imagen

```sh
yolo pose predict model=yolov8n-pose.pt source='https://ultralytics.com/images/bus.jpg'
```

Aquí, para el modelo, puedes cambiar a yolov8s-pose.pt, yolov8m-pose.pt, yolov8l-pose.pt, yolov8x-pose.pt, yolov8x-pose-p6 y descargará el modelo previamente entrenado correspondiente.

También puedes conectar una cámara web y ejecutar el siguiente comando

```sh
yolo pose predict model=yolov8n-pose.pt source='0'
```

:::nota
Si encuentras algún error al ejecutar los comandos anteriores, intenta agregar "device = 0" al final del comando.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/4.gif
" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="track" label="Object Tracking">

El seguimiento de objetos es una tarea que implica identificar la ubicación y la clase de objetos y luego asignar una identificación única a esa detección en transmisiones de video.

Básicamente, el resultado del seguimiento de objetos es el mismo que el de la detección de objetos con un ID de objeto agregada.

Referencia: https://docs.ultralytics.com/modes/track

Puedes elegir el modelo que desees en función de detección de objetos/segmentación de imágenes y ejecutar el siguiente comando para ejecutar la inferencia en un vídeo.

```sh
yolo track model=yolov8n.pt source="https://youtu.be/Zgi9g1ksQHc"
```

Aquí, para el modelo, puedes cambiar a yolov8n.pt, yolov8s.pt, yolov8m.pt, yolov8l.pt, yolov8x.pt, yolov8n-seg.pt, yolov8s-seg.pt, yolov8m-seg.pt, yolov8l-seg.pt, yolov8x-seg.pt, y descargará el modelo previamente entrenado correspondiente.

También puedes conectar una cámara web y ejecutar el siguiente comando

```sh
yolo track model=yolov8n.pt source="0"
```

:::nota
Si encuentras algún error al ejecutar los comandos anteriores, intenta agregar "device = 0" al final del comando.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/6.gif
" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/7.gif
" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

<!-- Code END -->

---

## Utilizar TensorRT para mejorar la velocidad de inferencia

Como mencionamos antes, si deseas mejorar la velocidad de inferencia de la Jetson que ejecuta modelos YOLOv8, primero debes convertir los modelos PyTorch originales a modelos TensorRT.

Sigue los siguientes pasos para convertir modelos YOLOv8 PyTorch a modelos TensorRT.

:::nota
Esto funciona para las cuatro tareas de visión por computadora que hemos mencionado antes.
:::

- **Paso 1.** Ejecuta el comando de exportación especificando la ruta del modelo

```sh
yolo export model=<path_to_pt_file> format=engine device=0
```

Por ejemplo:

```sh
yolo export model=yolov8n.pt format=engine device=0
```

:::nota
Si encuentras un error sobre cmake, puedes ignorarlo. Ten paciencia hasta que finalice la exportación de TensorRT. Puede que tarde unos minutos
:::

Después de crear el archivo de modelo TensorRT (.engine), verás el siguiente resultado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/1.jpg
" style={{width:800, height:'auto'}}/></div>

- **Paso 2.** Si deseas pasar argumentos adicionales, puedes hacerlo siguiendo la siguiente tabla

<table>
<thead>
  <tr>
    <th>Key</th>
    <th>Value</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>imgsz</td>
    <td>640</td>
    <td>Image size as scalar or (h, w) list, i.e. (640, 480)</td>
  </tr>
  <tr>
    <td>half</td>
    <td>False</td>
    <td>FP16 quantization</td>
  </tr>
  <tr>
    <td>dynamic</td>
    <td>False</td>
    <td>Dynamic axes</td>
  </tr>
  <tr>
    <td>simplify</td>
    <td>False</td>
    <td>Simplify model</td>
  </tr>
  <tr>
    <td>workspace</td>
    <td>4</td>
    <td>Workspace size (GB)</td>
  </tr>
</tbody>
</table>

Por ejemplo, si deseas convertir tu modelo PyTorch en un modelo TensorRT en la cuantización FP16, ejecuta el siguiente comando:

```sh
yolo export model=yolov8n.pt format=engine half=True device=0
```

Una vez que el modelo se exporta correctamente, puedes reemplazar directamente este modelo con el argumento **model=** dentro del comando **predict** de **yolo** al ejecutar las 4 tareas de detección, clasificación, segmentación y estimación de pose.

Por ejemplo, para detección de objetos, el comando luciría así:

```sh
yolo detect predict model=yolov8n.engine source='0' show=True
```

## Genera tu propio modelo de inteligencia artificial

### Generación de conjunto de datos y etiquetado

Si tienes una aplicación de IA específica y deseas generar tu propio modelo de IA que sea adecuado para tu aplicación, puedes recopila tu propio conjunto de datos, etiquetarlos y luego entrenar tu modelo usando YOLOv8.

Si no deseas recopilar datos tu mismo, también puedes elegir conjuntos de datos públicos que estén disponibles. Puedes descargar varios conjuntos de datos disponibles públicamente, como el [conjunto de datos COCO] (https://cocodataset.org), el [conjunto de datos Pascal VOC] (http://host.robots.ox.ac.uk/pascal/VOC) y mucho más. [Roboflow Universe](https://universe.roboflow.com) es una plataforma recomendada que proporciona una amplia gama de conjuntos de datos y tiene [más de 90.000 conjuntos de datos con más de 66 millones de imágenes](https://blog.roboflow.com/computer-vision-datasets-and-apis) disponibles para crear modelos de visión por computadora. Además, puedes simplemente buscar conjuntos de datos de código abierto en Google y elegir entre una amplia variedad de conjuntos de datos disponibles.

Si tienes tu propio conjunto de datos y deseas etiquetar las imágenes, te recomendamos utilizar la herramienta de etiquetado proporcionada por [Roboflow](https://roboflow.com). Sigue [esta parte de la wiki](https://wiki.seeedstudio.com/YOLOv5-Object-Detection-Jetson/#annotate-dataset-using-roboflow) para obtener más información al respecto. También puedes seguir [esta guía](https://docs.roboflow.com/annotate/use-roboflow-annotate) de Roboflow sobre etiquetado.

### Entrenamiento

Aquí tenemos tres métodos disponibles para entrenar tu modelo. 

1. La primera forma sería utilizar [Ultralytics HUB](https://ultralytics.com/hub). Puedes integrar fácilmente Roboflow en Ultralytics HUB para que todos tus proyectos de Roboflow estén disponibles para entrenamiento. Aquí se ofrece un cuaderno de Google Colab para iniciar fácilmente el proceso de entrenamiento y también ver el progreso del mismo en tiempo real.

2. La segunda forma sería utilizar un espacio de trabajo de Google Colab creado por nosotros para facilitar el proceso de entrenamiento. Aquí utilizamos la API de Roboflow para descargar el conjunto de datos del proyecto en Roboflow.

3. La tercera forma sería utilizar una PC local para el proceso de entrenamiento. Aquí debes asegurarte de tener una GPU lo suficientemente potente y también descargar manualmente el conjunto de datos.

<!-- Code -->

<Tabs>
<TabItem value="Ultralytics" label="Ultralytics HUB + Roboflow + Google Colab">

Aquí usamos Ultralytics HUB para cargar el proyecto de Roboflow y luego entrenar en Google Colab.

- **Paso 1.** Visita [esta URL](https://hub.ultralytics.com/signup) y regístrate para obtener una cuenta de Ultralytics.

- **Paso 2.** Una vez que inicies sesión con la cuenta recién creada, verás el siguiente panel:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/2.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 3.** Visita [esta URL](https://app.roboflow.com/login) y regístrate para obtener una cuenta de Roboflow

- **Paso 4.** Una vez que inicies sesión con la cuenta recién creada, verás el siguiente panel:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/11.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 5.** Crea un nuevo espacio de trabajo y un nuevo proyecto siguiendo [esta wiki](https://wiki.seeedstudio.com/YOLOv5-Object-Detection-Jetson/#annotate-dataset-using-roboflow) que hemos preparado. También puedes [consultar aquí](https://blog.roboflow.com/getting-started-with-roboflow) para obtener más información en la documentación oficial de Roboflow.

- **Paso 6.** Una vez que tengas un par de proyectos dentro de tu espacio de trabajo, lucirá como se muestra a continuación

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/12.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 7.** Ve a **Settings** y haz click en **Roboflow API**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/13.jpg
" style={{width:300, height:'auto'}}/></div>

- **Paso 8.** Haz click en el botón **copy** para copiar la **Private API KEY**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/14.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 9.** Vuelve al panel de Ultralytics HUB, haz click en **Integrations**, pega la clave API que copiaste antes en la columna vacía y haz click en **Add**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/15.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 10** Si ves el nombre de tu espacio de trabajo en la lista, significa que la integración se realizó correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/16.jpg
" style={{width:550, height:'auto'}}/></div>

- **Paso 11** Navegua hasta **datasets** y verás todos tus proyectos de Roboflow aquí

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/17.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 12** Haz click en un proyecto para obtener más información sobre el conjunto de datos. Aquí he seleccionado un conjunto de datos que puede detectar manzanas sanas y dañadas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/18.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 13** Haz Click en **Train Model**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/19.jpg
" style={{width:500, height:'auto'}}/></div>

- **Paso 14** Selecciona **Architecture**, establece un **Model name (optional)** (Nombre del modelo (opcional)) y luego haz click en **Continue**. Aquí hemos seleccionado YOLOv8s como arquitectura modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/22.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 15** En **Advanced Options**, configura los ajustes según tus preferencias, copia y pega el código de Colab (esto se pegará más tarde en el espacio de trabajo de Colab) y luego haz click en **Open Google Colab**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/24.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 16** Inicia sesión en tu cuenta de Google si aún no lo has hecho

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/25.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 17** Ve a `Runtime > Change runtime type`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/26.jpg
" style={{width:500, height:'auto'}}/></div>

- **Paso 18** Seleccione **GPU** en **Hardware accelerator**, el más alto disponible en **GPU Type** y haz click en **Save**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/27.jpg
" style={{width:500, height:'auto'}}/></div>

- **Paso 19** Haz click **Connect**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/28.jpg
" style={{width:250, height:'auto'}}/></div>

- **Paso 20** Haz click en el botón **RAM, Disk** para revisar la utilización de hardware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/31.jpg
" style={{width:600, height:'auto'}}/></div>

- **Paso 21** Haz click en el botón **Play** para correr la primera celda de código

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/29.jpg
" style={{width:750, height:'auto'}}/></div>

- **Paso 22** Pega la celda de código que copiamos antes de Ultralytics HUB en la sección **Start** y ejecútala para comenzar a entrenar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/30.jpg
" style={{width:650, height:'auto'}}/></div>

- **Paso 23** Ahora, si regresas a Ultralytics HUB, verás el mensaje **Connected**. Haz click en **Done**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/32.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 24** Aquí verás **Box loss, Class loss y Object loss** (Pérdida de caja, pérdida de clase y pérdida de objeto respectivamente) en tiempo real mientras el modelo se entrena en Google Colab.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/33.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 25** Una vez finalizado el entrenamiento, verás el siguiente resultado en Google Colab

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/34.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 26** Ahora regresa a Ultralytics HUB, ve a la pestaña **Preview** y carga una imagen de prueba para comprobar cómo se está desempeñando el modelo entrenado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/35.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 26** Finalmente, ve a la pestaña **Deploy** y descarga el modelo entrenado en el formato que prefieras para la inferencia con YOLOv8. Aquí hemos elegido PyTorch.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/36.png
" style={{width:1000, height:'auto'}}/></div>

Ahora puedes utilizar este modelo descargado con las tareas que hemos explicado anteriormente en esta wiki. Sólo necesitas reemplazar el archivo del modelo con tu modelo.

Por ejemplo:
```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
<TabItem value="Roboflow" label="Roboflow + Google Colab">

Aquí utilizamos un entorno de Google Colab para correr el entrenamiento en la nube. Además, utilizamos la API de Roboflow dentro de Colab para descargar fácilmente nuestro conjunto de datos.

- **Paso 1.** Haz click [aquí](https://colab.research.google.com/gist/lakshanthad/9fbe33058cb7cab49ac8fc345143d849/yolov5-training-for-jetson.ipynb) para abrir un espacio de trabajo de Google Colab ya preparado y seguir los pasos mencionados en esta wiki

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/39.jpg
" style={{width:800, height:'auto'}}/></div>

Una vez finalizadao el entrenamiento, verás el siguiente resultado:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/40.jpg
" style={{width:800, height:'auto'}}/></div>

- **Paso 2.** En la pestaña "Files", si navegas hasta `runs/train/exp/weights`, verás un archivo llamado **best.pt**. Este es el modelo generado a partir del entrenamiento. Descarga este archivo y cópialo en tu dispositivo Jetson porque este es el modelo que usaremos más adelante para inferir en el dispositivo Jetson.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/41.jpg
" style={{width:500, height:'auto'}}/></div>

Ahora puedes utilizar este modelo descargado con las tareas que hemos explicado anteriormente en esta wiki. Sólo necesitas reemplazar el archivo del modelo con tu modelo.

Por ejemplo:
```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
<TabItem value="PC" label="Roboflow + Local PC">

Aquí puedes utilizar una PC con sistema operativo Linux para entrenar. Hemos utilizado una PC con Ubuntu 20.04 para esta wiki.

- **Paso 1.** Instala pip si no lo tienes en tu sistema

```sh
sudo apt install python3-pip -y
```

- **Paso 2.** Instala Ultralytics y todas sus dependencias

```sh
pip install ultralytics
```

- **Paso 3.** En Roboflow, dentro de tu proyecto, ve a **Versions**, selecciona **Export Dataset**, selecciona **Format** como **YOLOv8**, elije **donwload zip to computer** y haz click en **Continue**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/42.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 4.** Extrae el contenido del archivo .zip

- **Paso 5.** Ejecuta lo siguiente para comenzar a entrenar. Aquí debes reemplazar **path_to_yaml** con la ubicación del archivo .yaml que se encuentra dentro del archivo zip extraído antes.

```sh
yolo train data=<path_to_yaml> model=yolov8s.pt epochs=100 imgsz=640 batch=-1
```

:::nota
Aquí el tamaño de la imagen se establece en 640x640. Usamos el tamaño de lote como -1 porque eso determinará automáticamente el mejor tamaño de lote. También puedes cambiar la cantidad de épocas según tus preferencias. Aquí puedes cambiar el modelo pre entrenado a cualquier modelo de detección, segmentación, clasificación y pose.
:::

Una vez finalizado el entrenamiento, verás el siguiente resultado:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/43.png
" style={{width:1000, height:'auto'}}/></div>

- **Paso 6.** En **runs/detect/train/weights***, versá un archivo llamado **best.pt**. Este es el modelo generado a partir del entrenamiento. Descarga este archivo y cópialo en tu dispositivo Jetson porque este es el modelo que usaremos más adelante para inferir en el dispositivo Jetson.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/44.png
" style={{width:500, height:'auto'}}/></div>

Ahora puedes utilizar este modelo descargado con las tareas que hemos explicado anteriormente en esta wiki. Sólo necesitas reemplazar el archivo del modelo con tu modelo.

Por ejemplo:
```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
</Tabs>

<!-- Code END -->

---

## Puntos de referencia de rendimiento

### Preparación

Hemos realizado pruebas comparativas de rendimiento para todas las tareas de visión por computadora compatibles con YOLOv8 que se ejecutan en la reComputer J4012/reComputer Industrial J4012 con tecnología del módulo NVIDIA Jetson Orin NX de 16 GB.

En el directorio de ejemplos se incluye una herramienta contenedora de línea de comandos llamada [trtexec](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html#trtexec). trtexec es una herramienta para utilizar TensorRT sin tener que desarrollar tu propia aplicación. La herramienta trtexec tiene tres propósitos principales:

- Comparación de redes con datos de entrada aleatorios o proporcionados por el usuario.
- Generación de motores serializados a partir de modelos.
- Generar un caché de tiempo serializado desde el compilador.

Aquí podemos usar la herramienta trtexec para comparar rápidamente los modelos con diferentes parámetros. Pero antes que nada, es necesario tener un modelo onnx y podemos generar este modelo onnx utilizando ultralytics yolov8.

- **Paso 1.** Compilar ONNX usando:

```sh
yolo mode=export model=yolov8s.pt format=onnx
```

- **Paso 2.** Crea el archivo del motor usando trtexec de la siguiente manera:

```sh
cd /usr/src/tensorrt/bin
./trtexec --onnx=<path_to_onnx_file> --saveEngine=<path_to_save_engine_file>
```

Por ejemplo:

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --saveEngine=/home/nvidia/yolov8s.engine
```

Esto generará resultados de rendimiento de la siguiente manera junto con un archivo .engine generado. De forma predeterminada, convertirá ONNX a un archivo optimizado para TensorRT con precisión FP32 y podrás ver el resultado de la siguiente manera

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/46.jpg
" style={{width:1000, height:'auto'}}/></div>

Si deseas precisión de **FP16** que ofrece un mejor rendimiento que **FP32**, puedes ejecutar el comando anterior de la siguiente manera

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --fp16 --saveEngine=/home/nvidia/yolov8s.engine 
```

Sin embargo, si deseas una precisión **INT8** que ofrezca un mejor rendimiento que **FP16**, puedes ejecutar el comando anterior de la siguiente manera

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --int8 --saveEngine=/home/nvidia/yolov8s.engine 
```

### Resultados

A continuación, resumimos los resultados que obtuvimso de las cuatro tareas de visión por computadora que se ejecutaron en la reComputer J4012/reComputer Industrial J4012.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/45.png
" style={{width:1000, height:'auto'}}/></div>

## Demostración adicional: detector y contador de ejercicio con YOLOv8

Hemos creado una aplicación de demostración que estima la pose de un usuario para detectar ejercicios y llevar conteos basada en YOLOv8 utilizando el modelo YOLOv8-Pose. Puedes consultar el proyecto [aquí](https://github.com/yuyoujiang/Exercise-Counter-with-YOLOv8-on-NVIDIA-Jetson) para obtener más información sobre esta demostración e implementarla en tu propio dispositivo Jetson.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/9.gif
" style={{width:1000, height:'auto'}}/></div>

## Configuración manual de YOLOv8 para NVIDIA Jetson

Si el script de una línea que mencionamos antes tiene algunos errores, puedes seguir los siguientes pasos uno por uno para preparar el dispositivo Jetson con YOLOv8.

### Instalar Ultralytics

- **Paso 1.** Accede a la terminal del dispositivo Jetson, instala pip y actualízalo

```sh
sudo apt update
sudo apt install -y python3-pip -y
pip3 install --upgrade pip
```

- **Paso 2.**  Instala Ultralytics

```sh
pip3 install ultralytics
```

- **Paso 3.**  Actualiza a la última versión de Numpy

```sh
pip3 install numpy -U
```

- **Paso 4.** Reinicia el dispositivo

```sh
sudo reboot
```

### Desinstala torch y torchvision

La instalación de ultralytics anterior instalará Torch y Torchvision. Sin embargo, estos 2 paquetes instalados a través de pip no son compatibles para ejecutarse en el dispositivo Jetson que se basa en la **arquitectura ARM aarch64**. Por lo tanto, necesitamos instalar manualmente la pip PyTorch Wheel prediseñada y compilar/instalar Torchvision desde la fuente.

```sh
pip3 uninstall torch torchvision
```

### Instalar PyTorch y Torchvision

Visita [está página](https://forums.developer.nvidia.com/t/pytorch-for-jetson) para acceder a toda la información de PyTorch y torchvision

Estas son algunas de las versiones compatibles con JetPack 5.0 y superiores.

**PyTorch v2.0.0**

Supported by JetPack 5.1 (L4T R35.2.1) / JetPack 5.1.1 (L4T R35.3.1) with Python 3.8

**file_name:** torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
**URL:** https://nvidia.box.com/shared/static/i8pukc49h3lhak4kkn67tg9j4goqm0m7.whl

**PyTorch v1.13.0**

Supported by JetPack 5.0 (L4T R34.1) / JetPack 5.0.2 (L4T R35.1) / JetPack 5.1 (L4T R35.2.1) / JetPack 5.1.1 (L4T R35.3.1) with Python 3.8

**file_name:** torch-1.13.0a0+d0d6b1f2.nv22.10-cp38-cp38-linux_aarch64.whl
**URL:** https://developer.download.nvidia.com/compute/redist/jp/v502/pytorch/torch-1.13.0a0+d0d6b1f2.nv22.10-cp38-cp38-linux_aarch64.whl

- **Paso 1.** Instalar Torch según tu versión JetPack en el siguiente formato
pip3 

```sh
wget <URL> -O <file_name>
pip3 install <file_name>
```

Por ejemplo, aquí estamos ejecutando **JP5.1.1** y por lo tanto elegimos **PyTorch v2.0.0**

```sh
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://nvidia.box.com/shared/static/i8pukc49h3lhak4kkn67tg9j4goqm0m7.whl -O torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
pip3 install torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
```

- **Paso 2.** Instala torchvision según la versión de PyTorch que tengas instalada. Por ejemplo, elegimos PyTorch v2.0.0, lo que significa que debemos elegir Torchvision v0.15.2.

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone https://github.com/pytorch/vision torchvision
cd torchvision
git checkout v0.15.2
python3 setup.py install --user
```

Aquí hay una lista de las versiones correspondientes de torchvision que necesitas instalar de acuerdo con la versión de PyTorch:

- PyTorch v2.0.0 - torchvision v0.15
- PyTorch v1.13.0 - torchvision v0.14

Si necesitas una lista más detallada por favor revisa [este link](https://github.com/pytorch/vision).

### Instalar ONNX y Desactualizar Numpy

Esto solo es necesario si deseas convertir los modelos de PyTorch a TensorRT.

- **Paso 1.** Instalar ONNX

```sh
pip3 install onnx
```

- **Paso 2.** Deactualizar a una versión anterior de Numpy para arreglar cualquier bug

```sh
pip3 install numpy==1.20.3
```

## Recursos

- [Documentación YOLOv8](https://docs.ultralytics.com)
- [Documentación Roboflow](https://docs.roboflow.com)
- [Documentación TensorRT](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html)

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>