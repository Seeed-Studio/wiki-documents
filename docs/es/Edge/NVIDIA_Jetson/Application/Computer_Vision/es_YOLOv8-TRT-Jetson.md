---
description: Desplegar YOLOv8 en NVIDIA Jetson usando TensorRT - Etiquetado de Datos, Entrenamiento de Modelo de IA, Despliegue de Modelo de IA
title: Desplegar YOLOv8 con TensorRT
tags:
  - Data Label
  - AI model train
  - AI model deploy
  - Yolov8
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/YOLOv8-TRT-Jetson
last_update:
  date: 07/17/2023
  author: Lakshantha
---

# Desplegar YOLOv8 en NVIDIA Jetson usando TensorRT

Esta guía wiki explica cómo desplegar un modelo YOLOv8 en la plataforma NVIDIA Jetson y realizar inferencia usando TensorRT. Aquí usamos TensorRT para maximizar el rendimiento de inferencia en la plataforma Jetson.

Se introducirán diferentes tareas de visión por computadora como:

- Detección de Objetos
- Segmentación de Imágenes
- Clasificación de Imágenes
- Estimación de Pose
- Seguimiento de Objetos

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/8.gif
" style={{width:1000, height:'auto'}}/></div>

## Prerrequisitos

- PC Host Ubuntu (nativo o VM usando VMware Workstation Player)
- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) o cualquier otro dispositivo NVIDIA Jetson ejecutando JetPack 5.1.1 o superior

:::note
Esta wiki ha sido probada y verificada en un [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) y reComputer Industrial J4012[https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html] alimentado por el módulo NVIDIA Jetson orin NX 16GB 
:::

## Flashear JetPack a Jetson

Ahora necesitas asegurarte de que el dispositivo Jetson esté flasheado con un sistema [JetPack](https://developer.nvidia.com/embedded/jetpack). Puedes usar NVIDIA SDK Manager o línea de comandos para flashear JetPack al dispositivo.

Para las guías de flasheo de dispositivos Seeed alimentados por Jetson, consulta los siguientes enlaces:
- [reComputer J1010 | J101](https://wiki.seeedstudio.com/es/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/es/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/es/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/es/reComputer_J4012_Flash_Jetpack)
- [A203 Carrier Board](https://wiki.seeedstudio.com/es/reComputer_A203_Flash_System)
- [A205 Carrier Board](https://wiki.seeedstudio.com/es/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/es/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/es/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

:::note
Asegúrate de flashear la versión 5.1.1 de JetPack porque esa es la versión que hemos verificado para esta wiki 
:::

## ¡Desplegar YOLOV8 a Jetson en Una Línea de Código!

Después de flashear el dispositivo Jetson con JetPack, simplemente puedes ejecutar los siguientes comandos para ejecutar modelos YOLOv8. Esto primero descargará e instalará los paquetes necesarios, dependencias, configurará el entorno y descargará modelos preentrenados de YOLOv8 para realizar tareas de detección de objetos, segmentación de imágenes, estimación de pose y clasificación de imágenes!

```sh
wget files.seeedstudio.com/YOLOv8-Jetson.py && python YOLOv8-Jetson.py
```

:::note
El código fuente del script anterior se puede encontrar [aquí](https://github.com/yuyoujiang/Run-YOLOv8-in-One-Line-on-Jetson)
:::

## Usar modelos pre-entrenados

La forma más rápida de comenzar con YOLOv8 es usar modelos pre-entrenados proporcionados por YOLOv8. Sin embargo, estos son modelos PyTorch y por lo tanto solo utilizarán la CPU al hacer inferencia en el Jetson. Si quieres el mejor rendimiento de estos modelos en el Jetson mientras se ejecutan en la GPU, puedes exportar los modelos PyTorch a TensorRT siguiendo esta sección del wiki.

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="detec" label="Detección de Objetos">

YOLOv8 ofrece 5 pesos de modelos PyTorch pre-entrenados para detección de objetos, entrenados en el conjunto de datos COCO con tamaño de imagen de entrada de 640x640. Puedes encontrarlos a continuación

<table>
  <thead>
    <tr>
      <th>Modelo</th>
      <th>tamaño<br />(píxeles)</th>
      <th>mAPval<br />50-95</th>
      <th>Velocidad<br />CPU ONNX<br />(ms)</th>
      <th>Velocidad<br />A100 TensorRT<br />(ms)</th>
      <th>parámetros<br />(M)</th>
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

Puedes elegir y descargar tu modelo deseado de la tabla anterior y ejecutar el siguiente comando para ejecutar inferencia en una imagen

```sh
yolo detect predict model=yolov8n.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

Aquí para el modelo, puedes cambiar a yolov8s.pt, yolov8m.pt, yolov8l.pt, yolov8x.pt y descargará el modelo pre-entrenado relevante

También puedes conectar una cámara web y ejecutar el siguiente comando 

```sh
yolo detect predict model=yolov8n.pt source='0' show=True
```

:::note
Si encuentras algún error al ejecutar los comandos anteriores, intenta añadir "device=0" al final del comando
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/2.gif
" style={{width:1000, height:'auto'}}/></div>

:::note
Lo anterior se ejecuta en un reComputer J4012/ reComputer Industrial J4012 y utiliza el modelo YOLOv8s entrenado con entrada de 640x640 y usa precisión TensorRT FP16.
:::

</TabItem>
<TabItem value="classfiy" label="Clasificación de Imágenes">

YOLOv8 ofrece 5 pesos de modelo PyTorch preentrenados para clasificación de imágenes, entrenados en ImageNet con tamaño de imagen de entrada de 224x224. Puedes encontrarlos a continuación

<table>
  <thead>
    <tr>
      <th>Modelo</th>
      <th>tamaño<br />(píxeles)</th>
      <th>acc<br />top1</th>
      <th>acc<br />top5<br /></th>
      <th>Velocidad<br />CPU ONNX<br />(ms)<br /></th>
      <th>Velocidad<br />A100 TensorRT<br />(ms)<br /><br /></th>
      <th>params<br />(M)<br /></th>
      <th>FLOPs<br />(B) en 640</th>
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

Puedes elegir tu modelo deseado y ejecutar el comando siguiente para ejecutar inferencia en una imagen

```sh
yolo classify predict model=yolov8n-cls.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

Aquí para el modelo, puedes cambiar a yolov8s-cls.pt, yolov8m-cls.pt, yolov8l-cls.pt, yolov8x-cls.pt y descargará el modelo preentrenado relevante

También puedes conectar una cámara web y ejecutar el siguiente comando 

```sh
yolo classify predict model=yolov8n-cls.pt source='0' show=True
```

:::note
Si encuentras algún error al ejecutar los comandos anteriores, intenta añadir "device=0" al final del comando
:::

(actualización con inferencia 224)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/5.gif
" style={{width:1000, height:'auto'}}/></div>

:::note
Lo anterior se ejecuta en un reComputer J4012/ reComputer Industrial J4012 y utiliza el modelo YOLOv8s-cls entrenado con entrada de 224x224 y usa precisión FP16 de TensorRT. Además, asegúrate de pasar el argumento **imgsz=224** dentro del comando de inferencia con exportaciones de TensorRT porque el motor de inferencia acepta tamaño de imagen 640 por defecto cuando se usan modelos de TensorRT.
:::

</TabItem>
<TabItem value="segment" label="Segmentación de Imágenes">

YOLOv8 ofrece 5 pesos de modelo PyTorch preentrenados para segmentación de imágenes, entrenados en el conjunto de datos COCO con tamaño de imagen de entrada 640x640. Puedes encontrarlos a continuación

<table>
  <thead>
    <tr>
      <th>Modelo</th>
      <th>tamaño<br />(píxeles)</th>
      <th>mAPbox<br />50-95</th>
      <th>mAPmask<br />50-95</th>
      <th>Velocidad<br />CPU ONNX<br />(ms)</th>
      <th>Velocidad<br />A100 TensorRT<br />(ms)</th>
      <th>parámetros<br />(M)</th>
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

Puedes elegir tu modelo deseado y ejecutar el comando siguiente para ejecutar inferencia en una imagen

```sh
yolo segment predict model=yolov8n-seg.pt source='https://ultralytics.com/images/bus.jpg' show=True
```

Aquí para el modelo, puedes cambiar a yolov8s-seg.pt, yolov8m-seg.pt, yolov8l-seg.pt, yolov8x-seg.pt y descargará el modelo preentrenado relevante

También puedes conectar una cámara web y ejecutar el siguiente comando 

```sh
yolo segment predict model=yolov8n-seg.pt source='0' show=True
```

:::note
Si encuentras algún error al ejecutar los comandos anteriores, intenta añadir "device=0" al final del comando
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/3.gif
" style={{width:1000, height:'auto'}}/></div>

:::note
Lo anterior se ejecuta en un reComputer J4012/ reComputer Industrial J4012 y utiliza el modelo YOLOv8s-seg entrenado con entrada de 640x640 y usa precisión TensorRT FP16.
:::

</TabItem>
<TabItem value="pose" label="Estimación de Pose">

YOLOv8 ofrece 6 pesos de modelo PyTorch preentrenados para estimación de pose, entrenados en el conjunto de datos COCO keypoints con tamaño de imagen de entrada de 640x640. Puedes encontrarlos a continuación

<table>
  <thead>
    <tr>
      <th>Modelo</th>
      <th>tamaño<br />(píxeles)</th>
      <th>mAPpose<br />50-95</th>
      <th>mAPpose<br />50</th>
      <th>Velocidad<br />CPU ONNX<br />(ms)</th>
      <th>Velocidad<br />A100 TensorRT<br />(ms)</th>
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

Puedes elegir tu modelo deseado y ejecutar el comando siguiente para ejecutar inferencia en una imagen

```sh
yolo pose predict model=yolov8n-pose.pt source='https://ultralytics.com/images/bus.jpg'
```

Aquí para el modelo, puedes cambiar a yolov8s-pose.pt, yolov8m-pose.pt, yolov8l-pose.pt, yolov8x-pose.pt, yolov8x-pose-p6 y descargará el modelo pre-entrenado relevante

También puedes conectar una cámara web y ejecutar el siguiente comando 

```sh
yolo pose predict model=yolov8n-pose.pt source='0'
```

:::note
Si encuentras algún error al ejecutar los comandos anteriores, intenta añadir "device=0" al final del comando
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/4.gif
" style={{width:1000, height:'auto'}}/></div>

</TabItem>
<TabItem value="track" label="Seguimiento de Objetos">

El seguimiento de objetos es una tarea que implica identificar la ubicación y clase de los objetos, luego asignar un ID único a esa detección en flujos de video.

Básicamente, la salida del seguimiento de objetos es la misma que la detección de objetos con un ID de objeto añadido.

Referencia: https://docs.ultralytics.com/modes/track

Puedes elegir tu modelo deseado basado en detección de objetos/segmentación de imágenes y ejecutar el siguiente comando para ejecutar inferencia en un video

```sh
yolo track model=yolov8n.pt source="https://youtu.be/Zgi9g1ksQHc"
```

Aquí para el modelo, puedes cambiar a yolov8n.pt, yolov8s.pt, yolov8m.pt, yolov8l.pt, yolov8x.pt, yolov8n-seg.pt, yolov8s-seg.pt, yolov8m-seg.pt, yolov8l-seg.pt, yolov8x-seg.pt, y descargará el modelo pre-entrenado relevante

También puedes conectar una cámara web y ejecutar el siguiente comando 

```sh
yolo track model=yolov8n.pt source="0"
```

:::note
Si encuentras algún error al ejecutar los comandos anteriores, intenta añadir "device=0" al final del comando
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/6.gif
" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/7.gif
" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

<!-- Code END -->

---

## Usar TensorRT para Mejorar la Velocidad de Inferencia

Como mencionamos antes, si quieres mejorar la velocidad de inferencia en el Jetson ejecutando modelos YOLOv8, primero necesitas convertir los modelos PyTorch originales a modelos TensorRT.

Sigue los pasos a continuación para convertir modelos PyTorch YOLOv8 a modelos TensorRT.

:::note
Esto funciona para las cuatro tareas de visión por computadora que hemos mencionado antes
:::

- **Paso 1.** Ejecuta el comando de exportación especificando la ruta del modelo

```sh
yolo export model=<path_to_pt_file> format=engine device=0
```

Por ejemplo:

```sh
yolo export model=yolov8n.pt format=engine device=0
```

:::note
Si encuentras un error sobre cmake, puedes ignorarlo. Por favor ten paciencia hasta que la exportación de TensorRT termine. Puede tomar unos minutos
:::

Después de que el archivo del modelo TensorRT (.engine) sea creado, verás la salida como sigue

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/1.jpg
" style={{width:800, height:'auto'}}/></div>

- **Paso 2.** Si quieres pasar argumentos adicionales, puedes hacerlo siguiendo la tabla de abajo

<table>
<thead>
  <tr>
    <th>Clave</th>
    <th>Valor</th>
    <th>Descripción</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>imgsz</td>
    <td>640</td>
    <td>Tamaño de imagen como escalar o lista (h, w), ej. (640, 480)</td>
  </tr>
  <tr>
    <td>half</td>
    <td>False</td>
    <td>Cuantización FP16</td>
  </tr>
  <tr>
    <td>dynamic</td>
    <td>False</td>
    <td>Ejes dinámicos</td>
  </tr>
  <tr>
    <td>simplify</td>
    <td>False</td>
    <td>Simplificar modelo</td>
  </tr>
  <tr>
    <td>workspace</td>
    <td>4</td>
    <td>Tamaño del espacio de trabajo (GB)</td>
  </tr>
</tbody>
</table>

Por ejemplo, si quieres convertir tu modelo PyTorch en un modelo TensorRT con cuantización FP16, ejecuta como

```sh
yolo export model=yolov8n.pt format=engine half=True device=0
```

Una vez que el modelo se exporta exitosamente, puedes reemplazar directamente este modelo con el argumento **model=** dentro del comando **predict** de **yolo** al ejecutar las 4 tareas de detección, clasificación, segmentación y estimación de pose.

Por ejemplo, con detección de objetos:

```sh
yolo detect predict model=yolov8n.engine source='0' show=True
```

## Trae Tu Propio Modelo de IA

### Recolección y Etiquetado de Datos

Si tienes una aplicación de IA específica y quieres traer tu propio modelo de IA que sea adecuado para tu aplicación, puedes recopilar tu propio conjunto de datos, etiquetarlos y luego entrenar usando YOLOv8.

Si no quieres recopilar datos por ti mismo, también puedes elegir conjuntos de datos públicos que están fácilmente disponibles. Puedes descargar una serie de conjuntos de datos disponibles públicamente como el [conjunto de datos COCO](https://cocodataset.org), [conjunto de datos Pascal VOC](http://host.robots.ox.ac.uk/pascal/VOC) y muchos más. [Roboflow Universe](https://universe.roboflow.com) es una plataforma recomendada que proporciona una amplia gama de conjuntos de datos y tiene [más de 90,000 conjuntos de datos con más de 66 millones de imágenes](https://blog.roboflow.com/computer-vision-datasets-and-apis) disponibles para construir modelos de visión por computadora. Además, puedes simplemente buscar conjuntos de datos de código abierto en Google y elegir entre una variedad de conjuntos de datos disponibles.

Si tienes tu propio conjunto de datos y quieres anotar las imágenes, te recomendamos usar la herramienta de anotación proporcionada por [Roboflow](https://roboflow.com). Por favor sigue [esta parte del wiki](https://wiki.seeedstudio.com/es/YOLOv5-Object-Detection-Jetson/#annotate-dataset-using-roboflow) para aprender más sobre ello. También puedes seguir [esta guía](https://docs.roboflow.com/annotate/use-roboflow-annotate) de Roboflow sobre anotación.

### Entrenamiento

Aquí tenemos 3 métodos para entrenar un modelo.

1. La primera forma sería usar [Ultralytics HUB](https://ultralytics.com/hub). Puedes integrar fácilmente Roboflow en Ultralytics HUB para que todos tus proyectos de Roboflow estén fácilmente disponibles para entrenamiento. Aquí ofrece un cuaderno de Google Colab para iniciar fácilmente el proceso de entrenamiento y también ver el progreso del entrenamiento en tiempo real.

2. La segunda forma sería usar un espacio de trabajo de Google Colab creado por nosotros para hacer el proceso de entrenamiento más fácil. Aquí usamos la API de Roboflow para descargar el conjunto de datos del proyecto de Roboflow.

3. La tercera forma sería usar una PC local para el proceso de entrenamiento. Aquí necesitas asegurarte de tener una GPU lo suficientemente potente y también necesitas descargar manualmente el conjunto de datos.

<!-- Code -->

<Tabs>
<TabItem value="Ultralytics" label="Ultralytics HUB + Roboflow + Google Colab">

Aquí usamos Ultralytics HUB para cargar el proyecto de Roboflow y luego entrenar en Google Colab.

- **Paso 1.** Visita [esta URL](https://hub.ultralytics.com/signup) y regístrate para una cuenta de Ultralytics

- **Paso 2.** Una vez que inicies sesión con la cuenta recién creada, serás recibido con el siguiente panel de control

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/2.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 3.** Visita [esta URL](https://app.roboflow.com/login) y regístrate para una cuenta de Roboflow

- **Paso 4.** Una vez que inicies sesión con la cuenta recién creada, serás recibido con el siguiente panel de control

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/11.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 5.** Crea un nuevo espacio de trabajo y crea un nuevo proyecto bajo el espacio de trabajo siguiendo [esta guía del wiki](https://wiki.seeedstudio.com/es/YOLOv5-Object-Detection-Jetson/#annotate-dataset-using-roboflow) que hemos preparado. También puedes [revisar aquí](https://blog.roboflow.com/getting-started-with-roboflow) para aprender más de la documentación oficial de Roboflow.

- **Paso 6.** Una vez que tengas un par de proyectos dentro de tu espacio de trabajo, se verá como abajo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/12.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 7.** Ve a **Settings** y haz clic en **Roboflow API**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/13.jpg
" style={{width:300, height:'auto'}}/></div>

- **Paso 8.** Haz clic en el botón **copy** para copiar la **Private API Key**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/14.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 9.** Regresa al panel de control de Ultralytics HUB, haz clic en **Integrations**, pega la API Key que copiamos antes en la columna vacía y haz clic en **Add**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/15.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 10** Si ves el nombre de tu espacio de trabajo listado, eso significa que la integración fue exitosa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/16.jpg
" style={{width:550, height:'auto'}}/></div>

- **Paso 11** Navega a **Datasets** y verás todos tus proyectos de Roboflow aquí

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/17.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 12** Haz clic en un proyecto para revisar más sobre el conjunto de datos. Aquí he seleccionado un conjunto de datos que puede detectar manzanas sanas y dañadas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/18.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 13** Haz clic en **Train Model**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/19.jpg
" style={{width:500, height:'auto'}}/></div>

- **Paso 14** Selecciona la **Architecture**, establece un **Model name (opcional)** y luego haz clic en **Continue**. Aquí hemos seleccionado YOLOv8s como la arquitectura del modelo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/22.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 15** Bajo **Advanced options**, configura los ajustes según tu preferencia, copia y pega el código de Colab (esto se pegará más tarde en el espacio de trabajo de Colab) y luego haz clic en **Open Google Colab**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/24.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 16** Inicia sesión en tu cuenta de Google si no has iniciado sesión ya

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/25.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 17** Navega a `Runtime > Change runtime type`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/26.jpg
" style={{width:500, height:'auto'}}/></div>

- **Paso 18** Selecciona **GPU** bajo **Hardware accelerator**, el más alto disponible bajo **GPU type** y haz clic en **Save**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/27.jpg
" style={{width:500, height:'auto'}}/></div>

- **Paso 19** Haz clic en **Connect**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/28.jpg
" style={{width:250, height:'auto'}}/></div>

- **Paso 20** Haz clic en el botón **RAM, Disk** para revisar el uso de recursos de hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/31.jpg
" style={{width:600, height:'auto'}}/></div>

- **Paso 21** Haz clic en el botón **Play** para ejecutar la primera celda de código

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/29.jpg
" style={{width:750, height:'auto'}}/></div>

- **Paso 22** Pega la celda de código que copiamos de Ultralytics HUB antes bajo la sección **Start** y ejecútala para comenzar el entrenamiento

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/30.jpg
" style={{width:650, height:'auto'}}/></div>

- **Paso 23** Ahora si regresas a Ultralytics HUB, verás el mensaje **Connected**. Haz clic en **Done**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/32.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 24** Aquí verás **Box Loss, Class Loss y Object Loss** en tiempo real mientras el modelo se entrena en Google Colab

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/33.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 25** Después de que termine el entrenamiento, verás la siguiente salida en Google Colab

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/34.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 26** Ahora regresa a Ultralytics HUB, ve a la pestaña **Preview** y sube una imagen de prueba para verificar cómo está funcionando el modelo entrenado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/35.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 26** Finalmente ve a la pestaña **Deploy** y descarga el modelo entrenado en el formato que prefieras para hacer inferencia con YOLOv8. Aquí hemos elegido PyTorch.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/36.png
" style={{width:1000, height:'auto'}}/></div>

Ahora puedes usar este modelo descargado con las tareas que hemos explicado en este wiki anteriormente. Solo necesitas reemplazar el archivo del modelo con tu modelo.

Por ejemplo:
```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
<TabItem value="Roboflow" label="Roboflow + Google Colab">

Aquí utilizamos un entorno de Google Colaboratory para realizar el entrenamiento en la nube. Además, utilizamos la API de Roboflow dentro de Colab para descargar fácilmente nuestro conjunto de datos.

- **Paso 1.** Haz clic [aquí](https://colab.research.google.com/gist/lakshanthad/9fbe33058cb7cab49ac8fc345143d849/yolov5-training-for-jetson.ipynb) para abrir un espacio de trabajo de Google Colab ya preparado y sigue los pasos mencionados en el espacio de trabajo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/39.jpg
" style={{width:800, height:'auto'}}/></div>

Después de que el entrenamiento haya terminado, verás una salida como la siguiente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/40.jpg
" style={{width:800, height:'auto'}}/></div>

- **Paso 2.** En la pestaña Files, si navegas a `runs/train/exp/weights`, verás un archivo llamado **best.pt**. Este es el modelo generado del entrenamiento. Descarga este archivo y cópialo a tu dispositivo Jetson porque este es el modelo que vamos a usar más tarde para la inferencia en el dispositivo Jetson.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/41.jpg
" style={{width:500, height:'auto'}}/></div>

Ahora puedes usar este modelo descargado con las tareas que hemos explicado en este wiki anteriormente. Solo necesitas reemplazar el archivo del modelo con tu modelo.

Por ejemplo:
```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
<TabItem value="PC" label="Roboflow + PC Local">

Aquí puedes usar una PC con un SO Linux para el entrenamiento. Hemos usado una PC Ubuntu 20.04 para este wiki.

- **Paso 1.** Instala pip si no tienes pip en tu sistema

```sh
sudo apt install python3-pip -y
```

- **Paso 2.** Instalar Ultralytics junto con las dependencias

```sh
pip install ultralytics
```

- **Paso 3.** En Roboflow, dentro de tu proyecto, ve a **Versions**, selecciona **Export Dataset**, selecciona **Format** como **YOLOv8**, elige **download zip to computer** y haz clic en **Continue**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/42.jpg
" style={{width:1000, height:'auto'}}/></div>

- **Paso 4.** Extrae el archivo zip descargado

- **Paso 5.** Ejecuta lo siguiente para comenzar el entrenamiento. Aquí necesitas reemplazar **path_to_yaml** con la ubicación del archivo .yaml que está dentro del archivo zip extraído anteriormente

```sh
yolo train data=<path_to_yaml> model=yolov8s.pt epochs=100 imgsz=640 batch=-1
```

:::note
Aquí el tamaño de imagen se establece en 640x640. Usamos batch-size como -1 porque eso determinará automáticamente el mejor tamaño de lote. También puedes cambiar epoch según tu preferencia. Aquí puedes cambiar el modelo pre-entrenado a cualquier modelo de detección, segmentación, clasificación o pose.
:::

Después de que el entrenamiento esté terminado, verás una salida como la siguiente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/43.png
" style={{width:1000, height:'auto'}}/></div>

- **Paso 6.** Bajo **runs/detect/train/weights**, verás un archivo llamado **best.pt**. Este es el modelo generado del entrenamiento. Descarga este archivo y cópialo a tu dispositivo Jetson porque este es el modelo que vamos a usar más tarde para inferencia en el dispositivo Jetson.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/44.png
" style={{width:500, height:'auto'}}/></div>

Ahora puedes usar este modelo descargado con las tareas que hemos explicado en este wiki antes. Solo necesitas reemplazar el archivo del modelo con tu modelo.

Por ejemplo:
```
yolo detect predict model=<your_model.pt> source='0' show=True
```

</TabItem>
</Tabs>

<!-- Code END -->

---

## Benchmarks de Rendimiento

### Preparación

Hemos realizado benchmarks de rendimiento para todas las tareas de visión por computadora soportadas por YOLOv8 ejecutándose en reComputer J4012/ reComputer Industrial J4012 alimentado por el módulo NVIDIA Jetson Orin NX 16GB.

Incluido en el directorio de muestras hay una herramienta de línea de comandos llamada [trtexec](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html#trtexec). trtexec es una herramienta para usar TensorRT sin tener que desarrollar tu propia aplicación. La herramienta trtexec tiene tres propósitos principales:

- Hacer benchmarks de redes con datos de entrada aleatorios o proporcionados por el usuario.
- Generar motores serializados a partir de modelos.
- Generar una caché de tiempo serializada desde el constructor.

Aquí podemos usar la herramienta trtexec para hacer benchmarks rápidamente de los modelos con diferentes parámetros. Pero primero que nada, necesitas tener un modelo onnx y podemos generar este modelo onnx usando ultralytics yolov8.

- **Paso 1.** Construir ONNX usando:

```sh
yolo mode=export model=yolov8s.pt format=onnx
```

- **Paso 2.** Construye el archivo del motor usando trtexec de la siguiente manera:

```sh
cd /usr/src/tensorrt/bin
./trtexec --onnx=<path_to_onnx_file> --saveEngine=<path_to_save_engine_file>
```

Por ejemplo:

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --saveEngine=/home/nvidia/yolov8s.engine
```

Esto generará resultados de rendimiento como se muestra a continuación junto con un archivo .engine generado. Por defecto convertirá ONNX a un archivo optimizado TensorRT en precisión FP32 y puedes ver la salida como sigue

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/46.jpg
" style={{width:1000, height:'auto'}}/></div>

Si quieres precisión **FP16** que ofrece mejor rendimiento que **FP32**, puedes ejecutar el comando anterior como sigue

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --fp16 --saveEngine=/home/nvidia/yolov8s.engine 
```

Sin embargo, si deseas precisión **INT8** que ofrece mejor rendimiento que **FP16**, puedes ejecutar el comando anterior de la siguiente manera

```sh
./trtexec --onnx=/home/nvidia/yolov8s.onnx --int8 --saveEngine=/home/nvidia/yolov8s.engine 
```

### Resultados

A continuación resumimos los resultados que obtenemos de las cuatro tareas de visión por computadora ejecutándose en reComputer J4012/ reComputer Industrial J4012.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/45.png
" style={{width:1000, height:'auto'}}/></div>

## Demo Adicional: Detector y Contador de Ejercicios con YOLOv8

Hemos construido una aplicación demo de estimación de pose para detección y conteo de ejercicios con YOLOv8 usando el modelo YOLOv8-Pose. Puedes revisar el proyecto [aquí](https://github.com/yuyoujiang/Exercise-Counter-with-YOLOv8-on-NVIDIA-Jetson) para aprender más sobre esta demo y desplegarla en tu propio dispositivo Jetson!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/YOLOV8-TRT/9.gif
" style={{width:1000, height:'auto'}}/></div>

## Configuración Manual de YOLOv8 para NVIDIA Jetson

Si el script de una línea que mencionamos anteriormente tiene algunos errores, puedes seguir los pasos a continuación uno por uno para preparar el dispositivo Jetson con YOLOv8.

### Instalar el Paquete Ultralytics

- **Paso 1.** Accede a la terminal del dispositivo Jetson, instala pip y actualízalo

```sh
sudo apt update
sudo apt install -y python3-pip -y
pip3 install --upgrade pip
```

- **Paso 2.** Instalar el paquete Ultralytics

```sh
pip3 install ultralytics
```

- **Paso 3.** Actualizar la versión de numpy a la más reciente

```sh
pip3 install numpy -U
```

- **Paso 4.** Reinicia el dispositivo

```sh
sudo reboot
```

### Desinstalar Torch y Torchvision

La instalación de ultralytics anterior instalará Torch y Torchvision. Sin embargo, estos 2 paquetes instalados a través de pip no son compatibles para ejecutarse en la plataforma Jetson que está basada en **arquitectura ARM aarch64**. Por lo tanto, necesitamos instalar manualmente la rueda pip de PyTorch pre-construida y compilar/instalar Torchvision desde el código fuente.

```sh
pip3 uninstall torch torchvision
```

### Instalar PyTorch y Torchvision

Visita [esta página](https://forums.developer.nvidia.com/t/pytorch-for-jetson) para acceder a todos los enlaces de PyTorch y Torchvision.

Aquí tienes algunas de las versiones compatibles con JetPack 5.0 y superior.

**PyTorch v2.0.0**

Compatible con JetPack 5.1 (L4T R35.2.1) / JetPack 5.1.1 (L4T R35.3.1) con Python 3.8

**nombre_archivo:** torch-2.0.0+nv23.05-cp38-cp38-linux_aarch64.whl
**URL:** https://nvidia.box.com/shared/static/i8pukc49h3lhak4kkn67tg9j4goqm0m7.whl

**PyTorch v1.13.0**

Compatible con JetPack 5.0 (L4T R34.1) / JetPack 5.0.2 (L4T R35.1) / JetPack 5.1 (L4T R35.2.1) / JetPack 5.1.1 (L4T R35.3.1) con Python 3.8

**nombre_archivo:** torch-1.13.0a0+d0d6b1f2.nv22.10-cp38-cp38-linux_aarch64.whl
**URL:** https://developer.download.nvidia.com/compute/redist/jp/v502/pytorch/torch-1.13.0a0+d0d6b1f2.nv22.10-cp38-cp38-linux_aarch64.whl

- **Paso 1.** Instala torch según tu versión de JetPack en el siguiente formato
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

- **Paso 2.** Instala torchvision dependiendo de la versión de PyTorch que hayas instalado. Por ejemplo, elegimos PyTorch v2.0.0, lo que significa que necesitamos elegir Torchvision v0.15.2

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone https://github.com/pytorch/vision torchvision
cd torchvision
git checkout v0.15.2
python3 setup.py install --user
```

Aquí tienes una lista de las versiones correspondientes de torchvision que necesitas instalar según la versión de PyTorch:

- PyTorch v2.0.0 - torchvision v0.15
- PyTorch v1.13.0 - torchvision v0.14

Si quieres una lista más detallada, por favor consulta [este enlace](https://github.com/pytorch/vision).

### Instalar ONNX y Degradar Numpy

Esto solo es necesario si quieres convertir los modelos de PyTorch a TensorRT

- **Paso 1.** Instala ONNX que es un requisito

```sh
pip3 install onnx
```

- **Paso 2.** Degradar a una versión inferior de Numpy para corregir un error

```sh
pip3 install numpy==1.20.3
```

## Recursos

- [Documentación de YOLOv8](https://docs.ultralytics.com)
- [Documentación de Roboflow](https://docs.roboflow.com)
- [Documentación de TensorRT](https://docs.nvidia.com/deeplearning/tensorrt/developer-guide/index.html)

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