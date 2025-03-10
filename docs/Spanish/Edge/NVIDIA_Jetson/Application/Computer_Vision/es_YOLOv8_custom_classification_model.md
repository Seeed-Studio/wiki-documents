---
description: Entrena e implementa un modelo de clasificación personalizado con YOLOv8
title: Entrena e implementa un modelo de clasificación personalizado con YOLOv8
keywords: 
  - yolov8
  - modelo de clasificación personalizado
  - modelo de clasificación
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/train_and_deploy_a_custom_classification_model_with_yolov8
last_update:
  date: 06/11/2024
  author: Bruno
---


# Entrena e implementa un modelo de clasificación personalizado con YOLOv8

## Introducción
En esta guía explicaremos cómo entrenar e implementar un modelo de clasificación personalizado con YOLOv8

## Descripción general
Crearemos un entorno virtual donde instalaremos YOLOv8, descargaremos un modelo de clasificación de roboflow, lo entrenaremos y lo implementaremos.

### Clasificación de imágenes
La clasificación de imágenes es la tarea más simple de la visión por computadora e implica clasificar una imagen en una de las clases predefinidas. 
Lo que obtenemos como resultado es una etiqueta de clase única y una puntuación de confianza.

La clasificación de imágenes es útil cuando no necesitamos saber la ubicación del objeto en la imagen y solo necesitamos saber a qué clase pertenece la imagen.

## Materiales requeridos

### Configuración de hardware

Para este tutorial, necesitaremos una Nvidia [Jetson Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html).

<div align="center">
    <img width={600} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/reComputer_J4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?queryID=3d7dba9378be2accafeaff54420edb6a&objectID=5586&indexName=bazaar_retailer_products"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

### Configuración de Software

- JetPack 6.0 instalado en una reComputer
- Una cuenta de Roboflow account para descargar el conjunto de datos

## Preparación de la reComputer
La reComputer J4012 de Seeed Studio es una Jetson Orin NX de 16 GB.
Es una máquina potente, pero Tegra Linux viene con muchas cosas y arranca en modo gráfico. Cambiemos eso.

:::nota
Voy a ejecutar los ejemplos y la programación de forma remota usando VScode y una terminal SSH con habilitación de reenvío X. 
El reenvío X es una opción con SSH que puede ejecutar algunas aplicaciones gráficas en nuestro lado de la conexión, en lugar de en la computadora remota.
:::

Si vas a conectarte a tu reComputadora con monitor, teclado y mouse, omite el siguiente paso.

### Cambiar el boot mode
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/1_image.png" />
</div>
Está todo bien, pero no vamos a necesitar gráficos y, en modo inactivo, consume alrededor de 1,5 GB de memoria.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/2_image.png" />
</div>

En su lugar, haremos que arranque desde la línea de comando.
```bash
sudo systemctl set-default multi-user
```
A partir de ahora, nuestra reComputer al arrancar arrancará desde la CLI. 
Si lo desea, puede reiniciar ahora o simplemente podemos ingresar a la CLI con un comando.
```bash
sudo systemctl isolate multi-user
```
Ahora hemos pasado de utilizar 1,5 GB de memoria a 700 MB. Cada byte de memoria cuenta cuando se utiliza Machine Learning.

### Cambiar el power mode
De forma predeterminada, nuestra reComputer debería estar funcionando en el nivel 2 - 15W. Al entrenar, o incluso inferir un modelo de ML, si podemos ejecutar a máxima potencia, debería ser mejor.

Aprendamos a cambiar el power mode.

En el archivo /etc/nvpmodel.conf, tenemos listados los powe mode's disponibles:
```bash
< POWER_MODEL ID=0 NAME=MAXN >
< POWER_MODEL ID=1 NAME=10W >
< POWER_MODEL ID=2 NAME=15W >
< POWER_MODEL ID=3 NAME=25W >
```
Luego podemos usar *sudo nvpmodel -m <#power model>* para cambiar el modo de energía. Y, según [esta publicación](https://forums.developer.nvidia.com/t/power-mode-in-terminal/287224), la configuración se mantiene incluso después de reiniciar.
Para ver en qué nivel de potencia estamos ahora:

```bash
sudo nvpmodel -q
```
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/3_image.png" />
</div>

Seleccionamos el modo de potencia máxima para el entrenamiento de nuestro modelo.
```bash
sudo nvpmodel -m 0
```
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/4_image.png" />
</div>

Después de reiniciar, podemos confirmar que la Jetson está funcionando a plena potencia.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/5_image.png" />
</div>

## Entrenamiento del modelo
Para el entrenamiento del modelo, usaremos YOLOv8. A continuación se detallan los pasos necesarios para instalarlo con soporte CUDA.
También necesitaremos una cuenta [roboflow](https://roboflow.com/).

### El modelo
Voy a crear un modelo para clasificar aves. 
Esto es parte de un proyecto de un comedero inteligente para pájaros que voy a colocar en mi jardín y quiero saber qué pájaros son los que se alimentan allí.

Debido a que se trata de una tarea de clasificación, no necesitamos saber la posición del pájaro en la foto. 

Puedes utilizar otro conjunto de datos de tu preferencia, siempre que sea un conjunto de datos o modelo de clasificación.

Adquirí 12 clases de aves que sé que viven en mi área y son comunes cerca de mí casa y creé un [conjunto de datos de clasificación] (https://universe.roboflow.com/bruno-santos-omqsq/bird-classification-19z7c/dataset/1) en Roboflow.

Las clases de aves que voy a intentar clasificar son:
- Golondrina común
- Reyezuelo común
- Ruiseñor común
- Pinzón vulgar euroasiático
- Avión roquero euroasiático
- Jilguero europeo
- Verderón europeo
- Verdecillo europeo
- Gorrión común
- Gorrión Español
- Avión doméstico occidental
- Motacilla alba

Elije tu conjunto de datos y descárgalo de roboflow.
Una vez que hayas seleccionado tu conjunto de datos, selecciona "Download Dataset". - Necesitas una cuenta para eso.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/7_image.png" />
</div>

A continuación, selecciona *Folder structure* (Estructura de folders) en Format y seleccione *show download code* (mostrar código de descarga).

<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/8_image.png" />
</div>

A continuación, selecciona *Jupyter* si vas a utilizar un Jupyter Notebook o *Terminal* si planeas hacer esto en la terminal.

Seleccioné Jupyter para usarlo en un cuaderno Jupyter. Copia el código.
<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/9_image.png" />
</div>

## Creando el entorno de desarrollo
Vamos a crear un entorno virtual, instalaremos PyTorch e instalaremos YOLOv8. 
[Según el consejo de la documentación de YOLOv8](https://docs.ultralytics.com/quickstart/#install-ultralytics), es mejor instalar PyTorch primero y luego ultralytics.

Además, estoy instalando paquetes jupyterlab para usarlos con VSCode. El cuaderno se adjunta a este tutorial.

Primero, instalemos algunas dependencias.

**NOTA:** Como vamos a utilizar YOLOv8, debemos realizar algunos pasos que normalmente no necesitaríamos.

Simplemente instalar Torch siguiendo la [documentación de aprendizaje profundo de NVIDIA](https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html) es suficiente para tener Torch con soporte CUDA.

Si instalamos PyTorch normalmente con PIP no tendría soporte CUDA.
### Dependencias

```bash
sudo apt install libopenblas-dev cuda-toolkit libcudnn8 tensorrt python3-libnvinfer nvidia-l4t-dla-compiler
```
Crear un entorno virtual de Python
```bash
python -m venv birdClassificationModel
```
Si te sale un error, es porque el paquete python3-venv no está instalado. Instalémoslo y repitamos el comando anterior.

```bash
sudo apt install python3-venv
```
Activa el entorno virtual

```bash
source birdClassificationModel/bin/activate
```

Puedes confirmar que está activo porque su nombre se coloca antes del mensaje en la línea de comandos.

### YOLOv8

Antes, y para [seguir el consejo de documentación](https://docs.ultralytics.com/quickstart/#conda-docker-image), primero instalaremos PyTorch.

Estoy usando JetPack 6.0, que viene con NVIDIA Jetson Linux 36.3 y CUDA 12.2.
Actualicemos PIP primero

```bash
pip install -U pip
```

Instala Torch para poder usarlo con YOLOv8, necesitas [seguir los pasos en los foros de NVIDIA](https://forums.developer.nvidia.com/t/pytorch-for-jetson/72048).

Esto se hará con el entorno virtual activo, para que quede instalado en el mismo.
Descarga la versión 2.3 de Torch de NVIDIA

```bash
wget https://nvidia.box.com/shared/static/mp164asf3sceb570wvjsrezk1p4ftj8t.whl -O torch-2.3.0-cp310-cp310-linux_aarch64.whl
sudo apt-get install python3-pip libopenblas-base libopenmpi-dev libomp-dev
pip3 install 'Cython<3'
pip install numpy torch-2.3.0-cp310-cp310-linux_aarch64.whl
```

Después de esto, vamos a compilar torchvision. Si lo instalamos desde wheels no tendrá soporte CUDA.

La versión de branch es para la versión de Torch instalada. Puedes ver más detalles en la página del foro.

Recuerda, necesitas tener el entorno virtual activo para que todo se instale en él.

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
Después de la instalación, veamos si Cuda está disponible.
<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/11_image.png" />
</div>

Ejecuta el siguiente comando desde la CLI:
```bash
python -c "import torch;print (torch.cuda.is_available())"
```
Esto debería mostrar "True" como output

#### Instalar YOLOv8

Ahora que tenemos PyTorch instalado con soporte CUDA, cuando instalemos YOLOv8, utilizará la versión instalada en lugar de intentar instalar un nuevo paquete (aunque sea la misma versión) sin soporte CUDA.

```bash
pip install ultralytics
```

Ahora instalemos roboflow y jupyterlab
```bash
pip install roboflow jupyterlab
```

Ahora, descarguemos el conjunto de datos. 
Si estás utilizando una laptip, simplemente reemplaza el código como se muestra:

```python
rf = Roboflow(api_key="<your_api_key>")
project = rf.workspace("bruno-santos-omqsq").project("bird-classification-19z7c")
version = project.version(1)
dataset = version.download("folder")
```

Después de descargar el modelo, tenemos un conjunto de tres directorios (test, train, valid), cada uno con una cierta cantidad de imágenes de cada clase. Cada imagen de cada clase está en su propio directorio.
Debido a que esto es para clasificar imágenes, no necesitamos etiquetar las imágenes. 
YOLOv8 reconocerá las clases, no sólo desde el archivo de configuración que crearemos más adelante, sino también desde los directorios.

<div align="center">
    <img width={300} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/12_image.png" />
</div>

### Entrenamiento
Normalmente un conjunto de datos tiene las imágenes y las etiquetas (o anotaciones) con las coordenadas del objeto. Dado que se trata de una tarea de clasificación, no necesitamos nada de eso. Solo que las imágenes estén en cada directorio, ese es el nombre de la clase.

#### Preparando el archivo de configuración
Todavía necesitamos un archivo de configuración para que YOLOv8 reconozca las clases. Este archivo debe colocarse dentro del directorio del conjunto de datos, con la extensión .yaml. El nombre no es importante.

```bash
cd <dataset_directory>
vi birdClassificationModel.yaml
```
Inserta el siguiente texto al archivo

```bash
train: train/
valid: valid/
test: test/

# number of classes
nc: 12

# class names

names: ["Barn Swallow","Common Firecrest","Common Nightingale","Eurasian Chaffinch","Eurasian Crag Martin","European Goldfinch","European Greenfinch","European Serin","House Sparrow","Spanish Sparrow","Western House Martin","white Wagtail"]
```

Para la clasificación, usaremos uno de los [modelos pre - entrenados que ya están disponibles en Ultralytics](https://docs.ultralytics.com/tasks/classify/).

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/13_image.png" />
</div>

Estos modelos han sido entrenados en ImageNet y están ajustados tareas de clasificación. Lo usaremos y lo entrenaremos con nuestros datos.

Esto es conocido como [transfer learning (Aprendizaje por transferencia)](https://neptune.ai/blog/transfer-learning-guide-examples-for-images-and-text-in-keras).

Utilizaré el modelo [YOLOv8l-cls](https://github.com/ultralytics/assets/releases/download/v8.2.0/yolov8l-cls.pt). Probablemente otros también funcionarán bien, pero como no necesitamos tiempo real, hay que sacrificaremso velocidad por precisión.

Entrenemos el modelo usando la interfaz CLI de YOLOv8.

```bash
yolo task=classify mode=train model=yolov8l-cls.pt data=Bird-Classification-1 epochs=100
```
- task=classify : We're going to classify images
- mode=train : We're training the model
- model=yolov8l-cls.pt : We're using a pre-trained model on classification
- data=Bird-Classification-1 : the directory where our dataset is located
- epochs=100 : for how long we're training the model. 

Ahora que está funcionando, aquí hay algunas estadísticas usando jtop (tegra-stats)

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

Tras un par de horas, el entrenamiento está completo.
<div align="center">
    <img width={500} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/17_image.png" />
</div>

Ahora veamos como se comporta el modelo ¡Pongámoslo a prueba!

```bash
yolo task=classify mode=predict model='./runs/classify/train6/weights/best.pt' source=Bird-Classification-1/test/**/*.jpg
```
Esto hará que yolo acceda a los directorios de prueba e intente predecir cada uno.
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

Estos resultados son geniales

## Exportando el modelo
Podemos usar el modelo tal como está para la inferencia, solo necesitamos abrirlo y usarlo. Para tiempos de inferencia más rápidos podemos exportarlo a TensorRT, ya que estamos en una NVIDIA Jetson Orin NX, o incluso a ONNX.

No es que necesitemos tiempos de inferencia más rápidos para este proyecto (no voy a usar esto en video en tiempo real), pero es bueno que podamos aprovechar la plataforma en la que estamos.

Desafortunadamente, debido al entorno virtual no pude exportarlo a TensorRT. Por alguna razón, no pude importar tensorrt en Python, pero fuera del entorno virtual, no tuve ningún problema con las bibliotecas tensorrt.

### ONNX
Podemos exportar el modelo a formato ONNX así
```bash
yolo export model='./runs/classify/train6/weights/best.pt' format=onnx imgsz=640
```
Obtenemos un best.onnx que podemos usar para correr las inferencias.

Para ejecutar la inferencia usando ONNX, necesitamos instalar "onnxruntime_gpu wheel".

Para instalar onnxruntime-gpu con JetPack 6.0, debemos descargarlo desde [Jetson Zoo](https://elinux.org/Jetson_Zoo#ONNX_Runtime).

Ahora descargaremos onnxruntime_gpu 1.18.0

Descarga el pip wheel para nuestra versión de Python (Python-3.10)
```bash
wget https://nvidia.box.com/shared/static/48dtuob7meiw6ebgfsfqakc9vse62sg4.whl -O onnxruntime_gpu-1.18.0-cp310-cp310-linux_aarch64.whl
```
Luego, corre la instalación
```bash
pip install onnxruntime_gpu-1.18.0-cp310-cp310-linux_aarch64.whl
```



## Inferencia
### Foto
He utilizado el siguiente código para ejecutar la inferencia con el modelo best.pt y ver los resultados.

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

Lo que hace el código anterior es cargar el modelo, ejecutar la inferencia en una imagen y guardar los resultados en la variable de resultados.

Debido a que "results" es un objeto [ultralytics.engine.results.Results](http://ultralytics.engine.results.results/) de tipo lista con un solo elemento, que es una instancia de los resultados. El elemento [0] en la variable de tipo lista "results" guardará la inferencia que deseamos conocer.

```python
results = bird_model("house_sparrow.jpg")[0]
```

A continuación, usamos los resultados para obtener los nombres de las clases. No es que no los conozcamos, pero así permitirá que este código funcione también en otros modelos.

```python
class_names = results.names
```

Uno de los resultados es una variable top1 que ocupa la clase TOP 1 con más probabilidades. Ese TOP1 lo da la lista de problemas.

```python
top1 = results.probs.top1
```

A continuación, imprimimos la clase de probabilidad más alta que debería ser la especie de ave detectada.

```python
print (f" The detected bird is: {class_names[top1]}")
The detected bird is: House Sparrow
```

### Cámara
Ahora, usemos una cámara para realizar inferencias.

La Jetson puede usar una cámara USB o una cámara RPI. Voy a conectar una cámara USB.

El siguiente código comprobará si puede mostrar una transmisión de cámara.
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
Este soy yo, en mi computadora de escritorio. Simplemente usa *ssh -X nombre de usuario@jetson_ip* y la ventana X11 se reenviará a su escritorio. Esto funciona porque también estoy usando Linux. Creo que WSL también podría funcionar.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/YOLOv8_custom_classification_reComputer_J4012/26_image.png" />
</div>

Ahora, intentemos realizar inferencias en una transmisión de video, mostrando la clase con mayor probabilidad.

El código se muestra a continuación:
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

<!-- this video is also on the files -->
Aquí hay un video mostrando la inferencia sobre una transmisión de video
<!-- <div class="table-center">
<iframe src="https://youtu.be/ovoSMaoA9As" frameBorder={0} />
</div> -->

<iframe width={560} height={315} src="https://www.youtube.com/embed/ovoSMaoA9As?si=-d2buntx0T5oRtr4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

## ✨ Proyecto de un contribuidor

- Este proyecto cuenta con el apoyo del proyecto colaborador de Seeed Studio.
- Gracias al esfuerzo de **Bruno**, tu trabajo será expuesto [aquí](https://wiki.seeedstudio.com/Honorary-Contributors/).

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