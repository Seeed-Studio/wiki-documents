---
description: Entrenar y desplegar un modelo de clasificación personalizado con YOLOv8
title: Entrenar y desplegar un modelo de clasificación personalizado con YOLOv8
keywords: 
  - yolov8
  - custom classification model
  - classification model
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/train_and_deploy_a_custom_classification_model_with_yolov8
last_update:
  date: 06/11/2024
  author: Bruno
---


# Entrenar y desplegar un modelo de clasificación personalizado con YOLOv8

## Introducción
En esta guía explicaremos cómo entrenar y desplegar un modelo de clasificación personalizado con YOLOv8

## Descripción general
Crearemos un entorno virtual donde instalaremos YOLOv8, descargaremos un modelo de clasificación de roboflow, lo entrenaremos y lo desplegaremos.

### Clasificación de Imágenes
La clasificación de imágenes es la tarea más simple de visión por computadora e involucra clasificar una imagen en una de las clases predefinidas. 
Lo que obtenemos como salida es una sola etiqueta de clase y una puntuación de confianza. 

La clasificación de imágenes es útil cuando no necesitamos conocer la ubicación del objeto en la imagen y solo necesitamos saber a qué clase pertenece la imagen. 

## Requisitos de Materiales

### Configuración de Hardware

Para este tutorial, vamos a necesitar un Nvidia [Jetson Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

<div align="center">
    <img width={600} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong></a>
</div>

### Configuración de Software

- JetPack 6.0 instalado en el reComputer
- una cuenta de Roboflow para descargar el conjunto de datos

## Preparando el reComputer
El reComputer J4012 de Seeed Studio es un Jetson Orin NX 16GB.
Es una máquina potente, pero el Tegra Linux viene con muchas cosas y arranca en modo gráfico. Cambiemos eso. 

:::note
Voy a ejecutar los ejemplos y programar remotamente usando VScode y una terminal SSH con reenvío X habilitado. 
El reenvío X es una opción con SSH que puede ejecutar algunas aplicaciones gráficas en nuestro lado de la conexión, en lugar de la computadora remota. 
:::

Si vas a conectarte a tu reComputer con monitor, teclado y ratón, omite el siguiente paso.

### Cambiar modo de arranque
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/1_image.png" />
</div>
Todo está bien, pero no vamos a necesitar gráficos y, en modo inactivo, está consumiendo alrededor de 1.5GB de memoria. 

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/2_image.png" />
</div>

Vamos a hacer que arranque a la línea de comandos en su lugar.
```bash
sudo systemctl set-default multi-user
```
A partir de ahora, nuestro reComputer al arrancar iniciará en la CLI.
Si quieres puedes reiniciar ahora o simplemente podemos ir a la CLI con un comando.
```bash
sudo systemctl isolate multi-user
```
Ahora hemos pasado de usar 1.5GB de memoria a 700MB. Cada byte de memoria cuenta cuando se usa Aprendizaje Automático.

### Cambiar modo de energía
Por defecto, nuestro reComputer debería estar ejecutándose en nivel 2 - 15W.
Cuando entrenamos, o incluso inferimos un modelo de ML, si podemos ejecutar a máxima potencia, debería ser mejor.

Aprendamos cómo cambiarlo.

En el archivo /etc/nvpmodel.conf, tenemos los modos de energía disponibles.
```bash
< POWER_MODEL ID=0 NAME=MAXN >
< POWER_MODEL ID=1 NAME=10W >
< POWER_MODEL ID=2 NAME=15W >
< POWER_MODEL ID=3 NAME=25W >
```
Luego podemos usar *sudo nvpmodel -m `<número de modelo de energía>`* para cambiar el modo de energía. Y, según [esta publicación del hilo](https://forums.developer.nvidia.com/t/power-mode-in-terminal/287224), la configuración se mantiene incluso después de reinicios.
Para ver en qué nivel de energía estamos ahora,

```bash
sudo nvpmodel -q
```
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/3_image.png" />
</div>

Seleccionemos el modo de máxima potencia para el entrenamiento de nuestro modelo
```bash
sudo nvpmodel -m 0
```
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/4_image.png" />
</div>

Después de un reinicio, podemos confirmar que estamos ejecutando a máxima potencia

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/5_image.png" />
</div>

## Entrenando el modelo
Para el entrenamiento del modelo, vamos a usar YOLOv8. A continuación están los pasos necesarios para instalarlo con soporte CUDA.
También vamos a necesitar una cuenta de [roboflow](https://roboflow.com/). 

### El modelo
Voy a crear un modelo para clasificar aves. 
Esto es parte de un proyecto para un Comedero Inteligente de Aves que voy a colocar en mi jardín y quiero saber qué aves son las que se alimentan allí. 

Debido a que esta es una tarea de clasificación, no necesitamos conocer la posición del ave en la foto. 

Puedes usar otro conjunto de datos de tu elección, siempre que sea un conjunto de datos o modelo de Clasificación

He conseguido 12 clases de aves que sé que viven en mi área y son comunes cerca de mí y creé un [conjunto de datos de clasificación](https://universe.roboflow.com/bruno-santos-omqsq/bird-classification-19z7c/dataset/1) en Roboflow.

Las clases de aves que voy a tratar de identificar son:
- Barn Swallow
- Common Firecrest
- Common Nightingale
- Eurasian Chaffinch
- Eurasian Crag Martin
- European Goldfinch
- European Greenfinch
- European Serin
- House Sparrow
- Spanish Sparrow
- Western House Martin
- white Wagtail


Elige tu conjunto de datos y descárgalo desde roboflow.
Una vez que hayas seleccionado tu conjunto de datos, selecciona "Download Dataset". - Necesitas una cuenta para eso. 

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/7_image.png" />
</div>

A continuación, selecciona *Folder Structure* en el Formato y selecciona *show download code*. 

<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/8_image.png" />
</div>

A continuación, selecciona *Jupyter* si vas a usar un Jupyter Notebook o *Terminal* si planeas hacer esto en la terminal.

He seleccionado Jupyter, para usar esto en un notebook de Jupyter. Copia el código. 
<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/9_image.png" />
</div>

## Creando el entorno
Vamos a crear un entorno virtual, instalar PyTorch e instalar YOLOv8. 
[Según el consejo de la documentación de YOLOv8](https://docs.ultralytics.com/quickstart/#install-ultralytics), es mejor instalar PyTorch primero y luego ultralytics.

Además, estoy instalando paquetes de jupyterlab para usar con VSCode. El notebook está adjunto a este tutorial.

Vamos a instalar algunas dependencias primero.

**NOTA:** Debido a que vamos a usar YOLOv8, necesitamos hacer algunos pasos que normalmente no necesitaríamos.

Solo instalar Torch siguiendo la [documentación de aprendizaje profundo de NVIDIA](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html) es suficiente para tener Torch con soporte CUDA.

Si instalamos PyTorch normalmente con PIP, no tendría soporte CUDA. 
### Dependencias

```bash
sudo apt install libopenblas-dev cuda-toolkit libcudnn8 tensorrt python3-libnvinfer nvidia-l4t-dla-compiler
```
Crear el entorno virtual de Python
```bash
python -m venv birdClassificationModel
```
Si obtienes un error, es porque el paquete python3-venv no está instalado. Vamos a instalarlo y repetir el comando anterior.

```bash
sudo apt install python3-venv
```
Activar el entorno virtual

```bash
source birdClassificationModel/bin/activate
```

Puedes confirmar que está activo porque el nombre del mismo se coloca antes de tu prompt.

### YOLOv8

Antes, y para [seguir el consejo de la documentación](https://docs.ultralytics.com/quickstart/#conda-docker-image), instalemos primero PyTorch.

Estoy usando JetPack 6.0, que viene con NVIDIA Jetson Linux 36.3 y CUDA 12.2.
Actualicemos PIP primero

```bash
pip install -U pip
```

Instalando Torch para poder usarlo with YOLOv8, necesitamos [seguir los pasos en los foros de NVIDIA](https://forums.developer.nvidia.com/t/pytorch-for-jetson/72048).

Esto se hará con el entorno virtual activo, para que se instale en él.
Descargar Torch versión 2.3 de NVIDIA

```bash
wget https://nvidia.box.com/shared/static/mp164asf3sceb570wvjsrezk1p4ftj8t.whl -O torch-2.3.0-cp310-cp310-linux_aarch64.whl
sudo apt-get install python3-pip libopenblas-base libopenmpi-dev libomp-dev
pip3 install 'Cython<3'
pip install numpy torch-2.3.0-cp310-cp310-linux_aarch64.whl
```

Después de esto, compilemos torchvision. Si lo instalamos desde las wheels, no tendrá soporte para CUDA.

La versión de la rama es para la versión de Torch instalada. Puedes ver más detalles en la página del foro.

Recuerda, necesitas tener el entorno virtual activo para que todo esto se instale en él.

```bash
sudo apt-get install libjpeg-dev zlib1g-dev libpython3-dev libopenblas-dev libavcodec-dev libavformat-dev libswscale-dev
git clone --branch v0.18.0 https://github.com/pytorch/vision torchvision
cd torchvision/
export BUILD_VERSION=0.18.0
python setup.py install
```
Después de un tiempo, se compilará e instalará.
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/10_image.png" />
</div>
Después de instalar, veamos si Cuda está disponible.
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/11_image.png" />
</div>

Desde la línea de comandos
```bash
python -c "import torch;print (torch.cuda.is_available())"
```
Esto debería devolver True

#### Instalar YOLOv8

Ahora que tenemos PyTorch instalado con soporte CUDA, cuando instalemos YOLOv8, utilizará la versión instalada en lugar de intentar instalar un nuevo paquete (aunque sea la misma versión) sin el soporte CUDA. 

```bash
pip install ultralytics
```

Instalemos roboflow y jupyterlab
```bash
pip install roboflow jupyterlab
```

Ahora, descarguemos el conjunto de datos.
Si estás usando el notebook, simplemente reemplaza el código allí.

```python
rf = Roboflow(api_key="<your_api_key>")
project = rf.workspace("bruno-santos-omqsq").project("bird-classification-19z7c")
version = project.version(1)
dataset = version.download("folder")
```

Después de descargar el modelo, ahora tenemos un conjunto de tres directorios (test, train, valid), cada uno con un cierto número de imágenes de cada clase. Cada imagen de cada clase está en su propio directorio.
Debido a que esto es para clasificación de imágenes, no necesitamos etiquetar las imágenes.
YOLOv8 conocerá las clases, no solo del archivo de configuración que crearemos más tarde, sino también de los directorios.
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/12_image.png" />
</div>

### Entrenar
Usualmente un conjunto de datos tiene las imágenes y las etiquetas (o anotaciones) con las coordenadas del objeto. Dado que esta es una tarea de clasificación, no necesitamos nada de eso. Solo que las imágenes estén en cada directorio que tenga el nombre de la clase.

#### Preparando el archivo de configuración
Aún necesitamos un archivo de configuración para que YOLOv8 reconozca las clases.
Este archivo debe colocarse dentro del directorio del conjunto de datos, con extensión .yaml. El nombre no es importante. 

```bash
cd <dataset_directory>
vi birdClassificationModel.yaml
```
Inserta el siguiente texto en el archivo

```bash
train: train/
valid: valid/
test: test/

# number of classes
nc: 12

# class names

names: ["Barn Swallow","Common Firecrest","Common Nightingale","Eurasian Chaffinch","Eurasian Crag Martin","European Goldfinch","European Greenfinch","European Serin","House Sparrow","Spanish Sparrow","Western House Martin","white Wagtail"]
```

Para la clasificación, vamos a usar uno de los [modelos pre-entrenados ya disponibles de Ultralytics](https://docs.ultralytics.com/tasks/classify/).

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/13_image.png" />
</div>

Estos modelos han sido entrenados en ImageNet y están ajustados para clasificación.
Vamos a usarlo y entrenarlo con nuestros datos.

Esto es lo que se conoce como [aprendizaje por transferencia](https://neptune.ai/blog/transfer-learning-guide-examples-for-images-and-text-in-keras).

Voy a usar el modelo [YOLOv8l-cls](https://github.com/ultralytics/assets/releases/download/v8.2.0/yolov8l-cls.pt). Probablemente otros también funcionen bien, pero como no necesitamos tiempo real, es un equilibrio entre velocidad y precisión.

Entonces entrenemos el modelo, usando la interfaz CLI de YOLOv8

```bash
yolo task=classify mode=train model=yolov8l-cls.pt data=Bird-Classification-1 epochs=100
```
- task=classify : Vamos a clasificar imágenes
- mode=train : Estamos entrenando el modelo
- model=yolov8l-cls.pt : Estamos usando un modelo preentrenado en clasificación
- data=Bird-Classification-1 : el directorio donde se encuentra nuestro conjunto de datos
- epochs=100 : por cuánto tiempo estamos entrenando el modelo.

Ahora que está ejecutándose, aquí hay algunas estadísticas usando jtop (tegra-stats)

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/14_image.png" />
</div>
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/15_image.png" />
</div>
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/16_image.png" />
</div>

Después de un par de horas, el entrenamiento está completo.
<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/17_image.png" />
</div>

Ahora, veamos cómo se comporta el modelo. Vamos a probarlo.

```bash
yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=Bird-Classification-1/test/**/*.jpg
```
Esto hará que yolo vaya a los directorios de prueba e intente predecir cada
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/18_image.png" />
</div>
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/19_image.png" />
</div>
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/20_image.png" />
</div>
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/21_image.png" />
</div>

Los resultados son todos correctos. Probemos con dos imágenes que nunca ha visto.

<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/22_image.png" />
</div>
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/23_image.png" />
</div>

```bash
yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=house_sparrow.jpg
```
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/24_image.png" />
</div>

```bash
yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=white_wagtail.jpg
```
<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/25_image.png" />
</div>

Voy a decir que estos resultados son excelentes

## Exportando el modelo
Podemos usar el modelo tal como está para la inferencia, solo necesitamos abrirlo y usarlo.
Para tiempos de inferencia más rápidos podemos exportarlo a TensorRT, ya que estamos en un NVIDIA Jetson Orin NX, o incluso ONNX, por ejemplo.

No es que necesitemos tiempos de inferencia más rápidos para este proyecto - no voy a usar esto en video en tiempo real - pero es bueno que podamos aprovechar la plataforma en la que estamos.

Desafortunadamente, debido al entorno virtual no pude exportarlo a TensorRT. Por alguna razón, no pude importar tensorrt en Python, pero fuera del entorno virtual, no tuve problemas con las librerías de tensorrt.

### ONNX
Podemos exportar el modelo al formato ONNX de esta manera
```bash
yolo export model='./runs/classify/train6/weights/best.pt' format=onnx imgsz=640
```
Obtenemos un best.onnx que podemos usar para ejecutar inferencia.

Para ejecutar inferencia usando ONNX, necesitamos instalar el wheel onnxruntime_gpu.

Para instalar onnxruntime-gpu con JetPack 6.0, necesitamos descargarlo desde el [Jetson Zoo](https://elinux.org/Jetson_Zoo#ONNX_Runtime).

Vamos a descargar onnxruntime_gpu 1.18.0

Descarga el wheel pip para nuestra versión de Python (Python-3.10)
```bash
wget https://nvidia.box.com/shared/static/48dtuob7meiw6ebgfsfqakc9vse62sg4.whl -O onnxruntime_gpu-1.18.0-cp310-cp310-linux_aarch64.whl
```
y luego, instálalo
```bash
pip install onnxruntime_gpu-1.18.0-cp310-cp310-linux_aarch64.whl
```


## Inferencia
### foto
He usado el siguiente código para ejecutar la inferencia con el modelo best.pt y ver los resultados

```python
# running inference
from ultralytics import YOLO
# load the  model
bird_model = YOLO("./runs/classify/train6/weights/best.pt")
#run inference
results = bird_model("house_sparrow.jpg")[0]
# get class names
class_names = results.names
# get top class with more probability
top1 = results.probs.top1
# print the class name with the highest probability
print (f" The detected bird is: {class_names[top1]}")
```

Lo que hace el código anterior es cargar el modelo, ejecutar inferencia en una imagen y guardar los resultados en la variable results.

Debido a que results es un objeto [ultralytics.engine.results.Results](http://ultralytics.engine.results.results/) de tipo lista con un elemento, que es una instancia de Results. El [0] en la variable results para contener el resultado de inferencia nos permitirá obtener los resultados que queremos.

```python
results = bird_model("house_sparrow.jpg")[0]
```

A continuación, usamos los resultados para obtener los nombres de las clases. No es que no los conozcamos, sino que de esta manera permitiremos que este código funcione también en otros modelos.

```python
class_names = results.names
```

Uno de los resultados es una variable top1 que contiene la clase TOP 1 con más probabilidades. Ese TOP1 es proporcionado por la lista probs.

```python
top1 = results.probs.top1
```

A continuación, imprimimos la clase de mayor probabilidad que debería ser la especie de ave.

```python
print (f" The detected bird is: {class_names[top1]}")
The detected bird is: House Sparrow
```

### Cámara
Ahora, usemos una cámara para ejecutar inferencia.

Jetson puede usar una cámara USB o una cámara RPI. Voy a conectar una cámara USB.

El siguiente código verificará si se puede mostrar la transmisión de la cámara.
```python
#Lets test if we can use a USB camera
import cv2
cap = cv2.VideoCapture(0)
while True:
    ret, img = cap.read()
    cv2.imshow('Camera', img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
cap.release()
cv2.destroyAllWindows
```
Este soy yo, en mi computadora de escritorio. Solo usa *ssh -X nombre_usuario@jetson_ip* y la ventana X11 se reenviará a tu escritorio. Esto funciona porque también estoy usando Linux. Creo que WSL también podría funcionar.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/26_image.png" />
</div>

Ahora, intentemos ejecutar inferencia en un feed de video, mostrando la clase con la mayor probabilidad

Aquí está el código
```python
# again, save this code in a file a run it from the Jetson

import cv2
from ultralytics import YOLO
import time
#define confidence level
#only equal or above this level we say it's a class of bird
confidence = 0.95
# time when processed last frame
prev_frame = 0
# time processed current frame
cur_time = 0
# load the  model
bird_model = YOLO("./runs/classify/train6/weights/best.pt")
# cv2 font
font = cv2.FONT_HERSHEY_SIMPLEX
# open camera
cap = cv2.VideoCapture(0)
while True:
    ret, img = cap.read()
    # to display fps
    cur_frame = time.time()
    fps = 1 / (cur_frame - prev_frame)
    prev_frame = cur_frame
    fps = int(fps)
    fps = str(fps)
    cv2.putText (img, fps, (550,50), font, 1, (124,10,120), 2, cv2.LINE_AA)

    # inference current frame
    results = bird_model(img, verbose=False)[0]
    # get class names
    class_names = results.names
    # get top class with more probability
    top1 = results.probs.top1
    top1conf = results.probs.top1conf.tolist()
    # we will only show the class name if the confidence is higher than defined level
    # print the class name with the highest probability
    if (top1conf >= confidence):
        bird_class = class_names[top1]
        print (f" The detected bird is: {class_names[top1]}")
        # color is in BGR
        confid = round(top1conf,2)
        img = cv2.putText(img, bird_class, (50,50), font, 0.9, (0, 0, 255), 2, cv2.LINE_AA)
        img = cv2.putText(img, "Conf: " + str(confid), (50,80), font, 0.6, (255, 0, 255), 1, cv2.LINE_AA)
        cv2.imshow('Camera', img)
    else:
        img = cv2.imshow('Camera', img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
cap.release()
cv2.destroyAllWindows
```

<!-- este video también está en los archivos -->
Aquí hay un video que muestra la inferencia en una transmisión de video
<!-- <div class="table-center">
<iframe src="https://youtu.be/ovoSMaoA9As" frameBorder={0} />
</div> -->

<iframe width={560} height={315} src="https://www.youtube.com/embed/ovoSMaoA9As?si=-d2buntx0T5oRtr4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el Proyecto de Colaboradores de Seeed Studio.
- Gracias a **los esfuerzos de Bruno** y tu trabajo será [exhibido](https://wiki.seeedstudio.com/es/Honorary-Contributors/).

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