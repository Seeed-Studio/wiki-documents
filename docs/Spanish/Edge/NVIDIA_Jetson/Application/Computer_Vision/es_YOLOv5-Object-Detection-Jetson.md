---
description: Detección de objetos con pocos disparos, etiquetado de datos, entrenamiento de modelos de IA, implementación de modelos de IA con Yolov5 y roboflow en dispositivos NVIDIA Jetson
title: Introducción a Yolov5 y roboflow
tags:
  - Etiquetado de datos
  - Entrenamiento de modelo de IA
  - Despliegue de modelo de IA
  - Roboflow
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/YOLOv5-Object-Detection-Jetson
last_update:
  date: 01/04/2023
  author: w0x7ce
---

# Detección de objetos con pocos ejemplos utilizando YOLOv5 y Roboflow

## Introducción

[YOLO](https://docs.ultralytics.com) es uno de los algoritmos de detección de objetos más famosos disponibles. Solo necesita unas pocas muestras para entrenar, mientras proporciona tiempos de entrenamiento más rápidos y alta precisión. Demostraremos estas características una por una en esta wiki, explicando todo el flujo de trabajo de aprendizaje automático paso a paso, donde recoges datos, los etiquetas, los entrenas y finalmente detectas objetos utilizando los datos entrenados ejecutando el modelo entrenado en un dispositivo de borde como la plataforma NVIDIA Jetson. Además, compararemos la diferencia entre usar conjuntos de datos personalizados y conjuntos de datos públicos.

## Qué es YOLOv5?

YOLO es la abreviatura de "You Only Look Once" (Solo Miras Una Vez). Es un algoritmo que detecta y reconoce varios objetos en una imagen en tiempo real. Ultralytics [YOLOv5](https://ultralytics.com/yolov5) es la versión más reciente de YOLO y ahora está basado en el marco de trabajo PyTorch.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/YOLOv5_banner.jpg" /></div>

## ¿Qué es la detección de objetos con pocos ejemplos?

Tradicionalmente, si deseas entrenar un modelo de aprendizaje automático, usarías un conjunto de datos público como el conjunto de datos Pascal VOC 2012, que consta de alrededor de 17112 imágenes. Sin embargo, utilizaremos el aprendizaje por transferencia para realizar detección de objetos con pocos ejemplos con YOLOv5, que solo necesita unas pocas muestras de entrenamiento. Demostraremos esto en esta wiki.

## Hardware soportado

YOLOv5 es soportado por el siguiente Hardware:

- Kits de desarrollo oficiales de NVIDIA:

  - NVIDIA® Jetson Nano Developer Kit
  - NVIDIA® Jetson Xavier NX Developer Kit
  - NVIDIA® Jetson AGX Xavier Developer Kit
  - NVIDIA® Jetson TX2 Developer Kit

- SoMs oficiales de NVIDIA:
  
  - NVIDIA® Jetson Nano module
  - NVIDIA® Jetson Xavier NX module
  - NVIDIA® Jetson TX2 NX module
  - NVIDIA® Jetson TX2 module
  - NVIDIA® Jetson AGX Xavier module

- Carrier Boards de Seeed:

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 Kit
  - A203 Carrier Board
  - A203 (Version 2) Carrier Board
  - A205 Carrier Board
  - A206 Carrier Board

## Prerequisitos

- Cualquiera de los dispositivos Jetson mencionados ejecutando la última versión de JetPack v4.6.1 con todos los componentes del SDK instalados (consulta [esta wiki](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack/) para obtener una referencia sobre la instalación).

- PC host

  - El entrenamiento local necesita una PC con Linux (preferentemente Ubuntu)
  - El entrenamiento en la nube se puede realizar en cualquier PC con cualquier sistema operativo

## Primeros pasos

¡Ejecutar tu primer proyecto de detección de objetos en un dispositivo de borde como la plataforma Jetson implica simplemente 4 pasos principales!

1. Recolectar tu conjunto de datos o usar uno publicamente disponible

    - Recolectar un conjunto de datos manualmente
    - Utilizar un conjunto de datos publicamente disponible

2. Etiquetar el conjunto de datos utilizando Roboflow

3. Entrenar localmente en una PC o en la nube

    - Entrenar localmente en una PC (Linux)
    - Entrenar en Google Colab

4. Inferencia en un dispositivo Jetson

## Recolectar tu conjunto de datos o usar uno publicamente disponible

El primer paso de un proyecto de detección de objetos es obtener datos para el entrenamiento. ¡Puedes descargar conjuntos de datos disponibles públicamente o crear tu propio conjunto de datos! Usualmente, los conjuntos de datos públicos se utilizan con fines educativos y de investigación. Sin embargo, si deseas construir proyectos de detección de objetos específicos donde los conjuntos de datos públicos no tengan los objetos que deseas detectar, es posible que quieras crear tu propio conjunto de datos.

### Recolectar el conjunto de datos manualmente

Se recomienda que primero grabes un video del objeto que deseas reconocer. Debes asegurarte de cubrir todos los ángulos (360 grados) del objeto, colocarlo en diferentes entornos, con diferentes iluminaciones y en distintas condiciones climáticas.
El video total que grabamos tiene una duración de 9 minutos, donde 4.5 minutos son para flores y los 4.5 minutos restantes son para hojas. La grabación se puede desglosar de la siguiente manera:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/pink-flowers-2.gif" /></div>

1. Clima normal por la mañana
2. Clima nublado por la mañana
3. Clima lluvioso por la mañana
4. Clima normal al medio día
5. Clima nublado al medio día
6. Clima lluvioso al medio día
7. Clima normal en la noche
8. Clima nublado en la noche
9. Clima lluvioso en la noche

**Nota:** Más adelante, convertiremos este video en una serie de imágenes para conformar el conjunto de datos para el entrenamiento.

### Usar un conjunto de datos publicamente disponible

Puedes descargar varios conjuntos de datos disponibles públicamente, como el [conjunto de datos COCO](https://cocodataset.org), el [conjunto de datos Pascal VOC](http://host.robots.ox.ac.uk/pascal/VOC) y muchos más. [Roboflow Universe](https://universe.roboflow.com) es una plataforma recomendada que ofrece una amplia gama de conjuntos de datos y cuenta con [90,000+ conjuntos de datos con  66+ millones de imagenes](https://blog.roboflow.com/computer-vision-datasets-and-apis) disponibles para crear modelos de visión por computadora. Además, puedes buscar fácilmente **conjuntos de datos de código abierto** en Google y elegir entre una variedad de conjuntos de datos disponibles.

## Etiquetar el conjunto de datos utilizando Roboflow

A continuación, pasaremos a etiquetar el conjunto de datos que tenemos. Etiquetar significa simplemente dibujar cuadros rectangulares alrededor de cada objeto que queremos detectar y asignarles etiquetas. Explicaremos cómo hacerlo utilizando Roboflow.

[Roboflow](https://roboflow.com) es una herramienta en línea utilizada para el etiquetado de imagenes. Aquí podemos importar directamente el video que grabamos previamente a Roboflow, y se exportará en una serie de imágenes. Esta herramienta es muy conveniente porque nos ayudará a distribuir el conjunto de datos en "entrenamiento, validación y prueba". Además, esta herramienta nos permitirá agregar procesamiento adicional a estas imágenes después de etiquetarlas. ¡Además, puede exportar fácilmente el conjunto de datos etiquetado en formato YOLOV5 PyTorch, que es exactamente lo que necesitamos!

- **Paso 1.** Haz click [aquí](https://app.roboflow.com/login) para crear una cuenta de Roboflow

- **Paso 2.** Haz click en **Create New Project** para iniciar tu proyecto

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg" /></div>

- **Paso 3.** Rellena el campo de **Project Name** con el nombre de tu proyecto, mantén la **License (CC BY 4.0)** y en el **Project type** (Tipo de Proyecto) deja seleccionada la opción estándar que dice **Object Detection (Bounding Box)**. En la columna **What will your model will predict?** (¿Qué predecirá tu modelo?), ingresa un nombre para el grupo de anotaciones. Por ejemplo, en nuestro caso elegimos plantas. Este nombre debe resaltar todas las clases de tu conjunto de datos. Finalmente, haz click en **Create Public Project** (Crear proyecto público).

<div align="center"><img width={360} src="https://files.seeedstudio.com/wiki/YOLOV5/20.jpg" /></div>

- **Paso 4.** Arrastra y suelta el video que grabaste anteriormente.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/4.jpg" /></div>

- **Paso 5.** Elige una tasa de fotogramas para que el video se divida en una serie de imágenes. Aquí utilizaremos la tasa de fotogramas predeterminada, que es **1 frame/second**, y esto generará un total de 542 imágenes. Una vez que selecciones la tasa de fotogramas desplazándote por el control deslizante, haz click en **Choose Frame Rate**. Este proceso tomará desde unos pocos segundos hasta algunos minutos (dependiendo de la longitud del video).

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/5.png" /></div>

- **Paso 6.** Después de que las imágenes sean procesadas, haz click en **Finish Uploading** (Terminar subida). Espera pacientemente hasta que las imágenes se suban.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/6.jpg" /></div>

- **Paso 7.** Cuando las imagenes estén subidas, haz click en **Assign Images** (Asignar imágenes)

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/YOLOV5/7.jpg" /></div>

- **Paso 8.** Selecciona una imagen, dibuja un cuadro rectangular alrededor de una flor, elige la etiqueta como **pink flower** (flor rosa) y presiona **ENTER**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/21.jpg" /></div>

- **Paso 9.** Repetir el procedimiento con las flores restantes.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/22.jpg" /></div>

- **Paso 10.** Dibuja un cuadro rectangular alrededor de una hoja, elige la etiqueta como **leaf** (hoja) y presiona **ENTER**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/23.jpg" /></div>

- **Paso 11.** Repetir el procedimiento para las hojas restantes.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/24.jpg" /></div>

**Nota:** Intenta etiquetar todos los objetos que veas dentro de la imagen. Si solo una parte del objeto es visible, trata también de etiquetar esa parte.

- **Paso 12.** Continua etiquetando todas las imágenes en el conjunto de datos.

Roboflow tiene una función llamada Label Assist que puede predecir las etiquetas de antemano, lo que hace que tu etiquetado sea mucho más rápido. Sin embargo, no funcionará con todos los tipos de objetos, sino solo con un tipo seleccionado de objetos. Para activar esta función, simplemente debes presionar el botón **Label Assist** (Asistente de etiquetado), **select a model** (seleccionar un modelo), **select de classes** (seleccionar las clases) y navegar a través de las imágenes para ver las etiquetas predichas con los cuadros delimitadores.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/YOLOV5/41.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/39.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/40.png" /></div>

Como puedes ver arriba, solo puede ayudar a predecir anotaciones para las 80 clases mencionadas. Si tus imágenes no contienen las clases de objetos mencionadas, no podrás utilizar la función de Label Assist.

- **Paso 13.** Una vez termines el etiquetado, haz click en **Add Images to Dataset** (Añadir imágenes al conjunto de datos)

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg" /></div>

- **Paso 14.** A continuación, dividiremos las imágenes entre "Entrenamiento, Validación y Prueba". Mantén los porcentajes predeterminados para la distribución y haz click en **Add Images** (Añadir imágenes).

<div align="center"><img width={330} src="https://files.seeedstudio.com/wiki/YOLOV5/26.png" /></div>

- **Paso 15.** Haz click en **Generate New Version** (Generar una nueva versión)

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg" /></div>

- **Paso 16.** En este paso puedes añadir **Preprocessing** (pre procesamiento) y **Augmentation** (Aumentación) si prefieres. Aquí eliminarás la opción de **Resize** (Re escalado) para mantener el tamaño original

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/28.jpg" /></div>

- **Paso 17.** Luego, dejarás en default las opciones restantes y harás click en **Generate** (generar)
 
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/29.jpg" /></div>

- **Paso 18.** Haz click en **Export** (Exportar)

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/17.jpg" /></div>

- **Paso 19.** Selecciona **donwload zip to computer** (descargar zip al ordenador), y en "Select format" (seleccionar formato) selecciona **YOLO v5 PyTorch** y haz click en **Continue**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/18.jpg" /></div>

- **Paso 20.** Tras ello, un **.zip file** (archivo .zip) será descargado en tu ordenador. necesitarás este .zip más tarde para el entrenamiento de tu modelo.

## Entrenar localmente en una PC o en la nube

Después de haber terminado de anotar el conjunto de datos, necesitamos entrenarlo. Para el entrenamiento, presentaremos dos métodos. Uno será basado en línea (Google Colab) y el otro será basado en PC local (Linux).

Para el entrenamiento en Google Colab, utilizaremos dos métodos. En el primer método, usaremos Ultralytics HUB para cargar el conjunto de datos, configurar el entrenamiento en Colab, monitorear el entrenamiento y obtener el modelo entrenado. En el segundo método, obtendremos el conjunto de datos de Roboflow a través de la API de Roboflow, entrenaremos y descargaremos el modelo desde Colab.

### Usar Google Colab con Ultralytics HUB

[Ultralytics HUB](https://hub.ultralytics.com) es una plataforma donde puedes entrenar tus modelos sin necesidad de escribir una sola línea de código. ¡Simplemente sube tus datos a Ultralytics HUB, entrena tu modelo y desplégalo en el mundo real! Es rápido, sencillo y fácil de usar. ¡Cualquiera puede comenzar!

- **Paso 1.** Visita [este link](https://hub.ultralytics.com) para crearte una cuenta de Ultralytics HUB

- **Paso 2.** Ingresa tus credenciales para la opción **sign up with email** o entra directamente con **Google, GitHub o una cuenta de Apple**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/1.png" /></div>

Tras ingresar a Ultralytics HUB, verás el dashboard como se muestra a continuación

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/2.png" /></div>

- **Paso 3.** Extrae el archivo zip que descargamos anteriormente de Roboflow y coloca todos los archivos incluidos dentro de una nueva carpeta.

- **Paso 4.** Asegúrate de que tu **dataset YAML** (archivo YAML del conjunto de datos) y la **root folder** (la carpeta que creamos antes) tengan el mismo nombre. Por ejemplo, si nombras tu archivo yaml como **pinkflowers.yaml**, la carpeta raíz debe llamarse **pinkflowers**.

- **Paso 5.** Abre el archivo **pinkflowers.yaml** y edita los directorios **train** y **val** como se muestra a continuación

```sh
train: train/images
val: valid/images
```

- **Paso 6.** Comprime la carpeta raíz como un archivo **.zip** y nómbralo de la misma manera que la carpeta raíz (**pinkflowers.zip** en este ejemplo).

Ahora hemos preparado el conjunto de datos, el cual está listo para ser subido a Ultralytics HUB.

- **Paso 7.** Haz click en la pestaña **Datasets** y haz click en **Upload Dataset**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/6.jpg" /></div>

- **Paso 8.** Ingresa un **nombre** para tu conjunto de datos, redacta una **descripción** de ser necesario, arrastra y suelta el archivo .zip creado anteriormente en el espacio con la etiqueta **Dataset** y haz click  en**Upload Dataset**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOv5-2/24.png" /></div>

- **Paso 9.** Una vez terminada la subida, haz click en el conjunto de datos para ver más información sobre él. 

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/25.png" /></div>

- **Paso 10.** Haz click en la pestaña **Projects** (Proyectos) y luego haz click en **Create Project** (Crear proyecto)

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/5.jpg" /></div>

- **Paso 11.** Ingresa un nombre para tu proyecto en el campo **Name**, de ser necesario añade una descripción en el campo **Description**, de ser necesario añade una imagén de portada con la opción **cover image**, y finalmente haz click en **Create Project** (Crear nuevo proyecto)

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/YOLOv5-2/26.png" /></div>

- **Paso 12.** Entra al nuevo proyecto creado y da click en el botón **Create Model** (Crear modelo)

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/27.png" /></div>

- **Paso 13.** Ingresa el nombre que desees que lleve tu modelo en el campo **Model name**, elige **YOLOv5n** como modelo pre entrenado y haz click en el botón **Next**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/28.png" /></div>

**Nota:** Por lo general, se prefiere **YOLOv5n6** como modelo pre entrenado porque es adecuado para su uso en dispositivos de borde como la plataforma Jetson. Sin embargo, Ultralytics HUB todavía no cuenta con soporte para ello. Entonces usamos **YOLOv5n** que es un modelo similar.

- **Paso 14.** Selecciona el conjunto de datos que subiste anteriormente y haz click en el botón **Next**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/29.png" /></div>

- **Paso 15.** Elije **Google Colab** como la plataforma de entrenamiento y haz click en el menú desplegable **Advanced Options** (Opciones avanzadas). Aquí puedes cambiar algunas configuraciones para el entrenamiento. Por ejemplo, cambiaremos el número de épocas de 300 a 100 y mantendremos las demás configuraciones como están. Haz click en **Save** (Guardar)

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/30.png" /></div>

**Nota:** También puedes elegir la opción **Bring your own agent** (Trae tu propio agente) si planeas realizar el entrenamiento localmente

- **Paso 16.** Copia la **API key** y haz click en **Open Colab**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/31.png" /></div>

- **Paso 17.** Remplaza el texto **MODEL_KEY** con tu **API key** que copiaste previamente

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/YOLOv5-2/16.jpg" /></div>

- **Paso 18.** Haz click en `Runtime > Run All` para correr todas las celdas de código y comenzar el entrenamiento del modelo

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/YOLOv5-2/17.jpg" /></div>

- **Paso 19.** Regresa a Ultralytics HUB y haz Click en **Done** cuando se ponga azul. También verás que Colab muestra un mensaje que dice **Connected**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/32.png" /></div>

Ahora podrás ver el progreso del proceso de entrenamiento en el HUB

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/33.png" /></div>

- **Paso 20.** Una vez finalizado el entrenamiento, haz click en PyTorch para descargar el modelo entrenado en formato PyTorch (.pt). PyTorch es el formato que necesitamos para realizar inferencia en el dispositivo Jetson

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/37.png" /></div>

**Nota:** También puedes exortar el modelo en otros formatos que se muestran en la opción **Formats**

Si vas atrás a Google Colab, podrás obserbar información más detallada como se muestra a continuación:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/36.png" /></div>

Aquí la exactitud `mAP@.5` está alrededor del 90% y 99.4% para la clase **leaf** (hoja) y la clase **flower** (flor) respectivamente, la exactitud total `mAP@.5` está alrededor del 94.7%.

### Usar Google Colab con la API de Roboflow

Aquí utilizamos un entorno Google Colab para ejecutar el entrenamiento en la nube. Además, utilizamos la API de Roboflow dentro de Colab para descargar fácilmente nuestro conjunto de datos.

- **Paso 1.** Haz click [aquí](https://colab.research.google.com/gist/lakshanthad/645de50b7cc5870f4070b720be770f8b/yolov5-training-for-jetson.ipynb) Para abrir un entorno Google Colab previamente preparado y poder seguir los pasos mencionados en esta wiki

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/82.png" /></div>

Una vez el entrenamiento termine, verás el siguiente output:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/37.png" /></div>

Aquí la exactitud `mAP@.5` es de alrededor del 91.6% y 99.4% para la clase **leaf** (hoja) y la clase **flower** (flor) respectivamente, la exactitud total `mAP@.5` ronda el 95.5%.

- **Paso 2.** En la pestaña **Archivos**, si navegas hasta `runs/train/exp/weights`, verás un archivo llamado **best.pt**. Este es el modelo generado a partir del entrenamiento. Descarga este archivo y cópialo en tu dispositivo Jetson porque este es el modelo que usaremos más adelante para inferir en el dispositivo Jetson.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/52.png" /></div>

### Entrenar localmente en el PC

Aquí puedes utilizar una PC con sistema operativo Linux para el entrenamiento. Nosotros utilizamos Ubuntu 20.04 para esta wiki.

- **Paso 1.** Clona el repositorio **YOLOv5 repo** e instala **requirements.txt** en un entorno con **Python>=3.7.0**

```sh
git clone https://github.com/ultralytics/yolov5 
cd yolov5
pip install -r requirements.txt
```

- **Paso 2.** Copia y pega el archivo .zip que descargaste previamente de Roboflow en el directorio **yolov5** y extra el archivo ahí

```sh
# example
cp ~/Downloads/pink-flowers.v1i.yolov5pytorch.zip ~/yolov5
unzip pink-flowers.v1i.yolov5pytorch.zip
```

- **Paso 3.** Abre el archivo **data.yaml** y edita los directorios de **train** y **val** como se muestra a continuación:

```sh
train: train/images
val: valid/images
```

- **Paso 4.** Ejecuta el siguiente comando para empezar el entrenamiento:

```sh
python3 train.py --data data.yaml --img-size 640 --batch-size -1 --epoch 100 --weights yolov5n6.pt
```

Dado que nuestro conjunto de datos es relativamente pequeño (~500 imágenes), se espera que el **transfer learning** (Aprendizaje por transferencia) produzca mejores resultados que el entrenamiento desde cero. Nuestro modelo se inicializó con pesos de un modelo COCO previamente entrenado, pasando el nombre del modelo (yolov5n6) al argumento "pesos". Aquí usamos **yolov5n6** porque es ideal para dispositivos en el borde (como la Jetson). Aquí el **image size** (tamaño de imágen) se establece en **640x640**. Usamos **batch-size** como **-1** porque eso determinará automáticamente el mejor tamaño de lote. Sin embargo, si hay un error que dice "La memoria de la GPU no es suficiente", elija el tamaño del lote como **32** o incluso **16**. También puedes cambiar **epoch** (épocas) según tus preferencias.

Una vez termine el entrenamiento, verás el siguiente output:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/65.png" /></div>

Aquí la exactitud `mAP@.5` ronda el 90.6% y 99.4% para la clase **leaf** (hoja) y la clase **flower** (flor) respectivamente y la exactitud total `mAP@.5` ronda el 95%.

- **Paso 5.** Si navegas a `runs/train/exp/weights`, verás un archivo llamado **best.pt**. Este es el modelo generado a partir del entrenamiento. Copia y pega este archivo en tu dispositivo Jetson porque este es el modelo que usaremos más adelante para inferir en el dispositivo Jetson.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/YOLOV5/33.jpg" /></div>

## Inferencia en el dispositivo Jetson

### Utilizando TensorRT

Ahora usaremos un dispositivo Jetson para realizar inferencias (detectar objetos) en imágenes con la ayuda del modelo generado a partir de nuestro entrenamiento anterior. Aquí usaremos [NVIDIA TensorRT](https://developer.nvidia.com/tensorrt) para aumentar el rendimiento de inferencia en el dispositivo Jetson

- **Paso 1.** Accede a la terminal del dispositivo Jetson, instala pip y actualízalo

```sh
sudo apt update
sudo apt install -y python3-pip
pip3 install --upgrade pip
```

- **Paso 2.** Clona el siguiente repositorio

```sh
git clone https://github.com/ultralytics/yolov5
```

- **Paso 3.** Abre el archivo **requirements.txt**

```sh
cd yolov5
vi requirements.txt
```

- **Paso 4.** Edita las siguientes líneas. Aquí debes presionar **i** primero para ingresar al modo de edición. Presiona **ESC**, luego escribe **:wq** para guardar y salir.

```sh
matplotlib==3.2.2
numpy==1.19.4
# torch>=1.7.0
# torchvision>=0.8.1
```

**Nota:** Incluimos versiones corregidas para **matplotlib** y **numpy** para asegurarnos de que no haya errores al ejecutar YOLOv5 más adelante. Además, torch y torchvision están excluidos por ahora porque se instalarán más adelante.

- **Paso 5.** Instala la dependencia mostrada a continuación:

```sh
sudo apt install -y libfreetype6-dev
```

- **Paso 6.** Instala los paquetes necesarios con el siguiente comando:

```sh
pip3 install -r requirements.txt
```

- **Paso 7.** Instala torch

```sh
cd ~
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://nvidia.box.com/shared/static/fjtbno0vpo676a25cgvuqc1wty0fkkg6.whl -O torch-1.10.0-cp36-cp36m-linux_aarch64.whl
pip3 install torch-1.10.0-cp36-cp36m-linux_aarch64.whl
```

- **Paso 8.** Instala torchvision

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone --branch v0.9.0 https://github.com/pytorch/vision torchvision
cd torchvision
sudo python3 setup.py install 
```

- **Paso 9.** Clona el siguiente repositorio

```sh
cd ~
git clone https://github.com/wang-xinyu/tensorrtx
```

- **Paso 10.** Copia el archivo obtenido tras el entrenamiento del modelo **best.pt** en el directorio **yolov5**

- **Paso 11.** Copia **gen_wts.py** de **tensorrtx/yolov5** en el directorio **yolov5**

```sh
cp tensorrtx/yolov5/gen_wts.py yolov5
```

- **Paso 12.** Genera un archivo **.wts** de PyTorch a partir del archivo **.pt**

```sh
cd yolov5
python3 gen_wts.py -w best.pt -o best.wts
```

- **Paso 13.** Navega al directorio **tensorrtx/yolov5**

```sh
cd ~
cd tensorrtx/yolov5
```

- **Paso 14.** Abre **yololayer.h** con **vi text editor**

```sh
vi yololayer.h
```

- **Paso 15.** Cambia **CLASS_NUM** al número de clases con las que fue entrenado tu modelo. En nuestro ejemplo, el número de clases es 2.

```sh
CLASS_NUM = 2
```

- **Paso 16.** Crea un nuevo directorio llamado **build** y navega hacia dentro de este.

```sh
mkdir build 
cd build
```

- **Paso 17.** Copia el archivo generado anteriormente **best.wts** dentro del directorio **build**

```sh
cp ~/yolov5/best.wts .
```

- **Paso 18.** Compila

```sh
cmake ..
make
```

- **Paso 19.** Seriliza el model

```sh
sudo ./yolov5 -s [.wts] [.engine] [n/s/m/l/x/n6/s6/m6/l6/x6 or c/c6 gd gw]
#example
sudo ./yolov5 -s best.wts best.engine n6
```

Aquí usamos **n6** porque se recomienda para dispositivos en el borde como el dispositivo NVIDIA Jetson. Sin embargo, si usas Ultralytics HUB para configurar el entrenamiento, solo puedes usar **n** porque **n6** aún no es compatible con HUB.

- **Paso 20.** Copia las imágenes que deseas utilizar para probar el modelo en un nuevo directorio, por ejemplo: **tensorrtx/yolov5/images**

- **Paso 21.** Deserializa y corre el modelo para realizar inferencias sobre tus imágenes con el siguiente comando:

```sh
sudo ./yolov5 -d best.engine images
```

A continuación se muestra una comparación del tiempo de inferencia ejecutado en Jetson Nano y Jetson Xavier NX.

#### Jetson Nano

Aquí la cuantificación está configurada en FP16.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/58.png" /></div>

De los resultados anteriores, podemos tomar el promedio como aproximadamente **47 ms**. Convirtiendo este valor a fotogramas por segundo: 1000/47 = 21,2766 = **21 fps**.

#### Jetson Xavier NX

Aquí la cuantificación está configurada en FP16.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/59.jpg" /></div>

De los resultados anteriores, podemos tomar el promedio como unos **20 ms**. Convirtiendo este valor a fotogramas por segundo: 1000/20 = **50 fps**.

Además, las imágenes de salida serán las siguientes con los objetos detectados:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/55.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/56.jpg" /></div>

### Usando TensorRT y DeepStream SDK

Aquí utilizaremos [NVIDIA TensorRT](https://developer.nvidia.com/tensorrt) en combo con [NVIDIA DeepStream SDK](https://developer.nvidia.com/deepstream-sdk) para realizar inferencias sobre un metraje de video.

- **Paso 1.** Asegúrate de haber instalado correctamente todos los **Componentes SDK** y **DeepStream SDK** en el dispositivo Jetson. (consulta [esta wiki](https://wiki.seeedstudio.com/Tutorial-of-A20X-Carrier-Boards) para obtener una referencia sobre la instalación)

**Nota:** Se recomienda utilizar NVIDIA SDK Manager para instalar todos los componentes del SDK y DeepStream SDK.

- **Paso 2.** Accede a una terminal de tu dispositivo Jetson, instala pip y actualízalo.

```sh
sudo apt update
sudo apt install -y python3-pip
pip3 install --upgrade pip
```

- **Paso 3.** Clona el siguiente repositorio:

```sh
git clone https://github.com/ultralytics/yolov5
```

- **Paso 4.** Abre el archivo **requirements.txt**

```sh
cd yolov5
vi requirements.txt
```

- **Paso 5.** Edita las siguientes líneas. Aquí debes presionar **i** primero para ingresar al modo de edición. Presiona **ESC**, luego escribe **:wq** para guardar y salir.

```sh
matplotlib==3.2.2
numpy==1.19.4
# torch>=1.7.0
# torchvision>=0.8.1
```

**Nota:** Incluimos versiones corregidas para **matplotlib** y **numpy** para asegurarnos de que no haya errores al ejecutar YOLOv5 más adelante. Además, torch y torchvision están excluidos por ahora porque se instalarán más adelante.

- **Paso 6.** Instalar la siguiente dependencia:

```sh
sudo apt install -y libfreetype6-dev
```

- **Paso 7.** Instalar los paquetes necesarios

```sh
pip3 install -r requirements.txt
```

- **Paso 8.** Instalar torch

```sh
cd ~
sudo apt-get install -y libopenblas-base libopenmpi-dev
wget https://nvidia.box.com/shared/static/fjtbno0vpo676a25cgvuqc1wty0fkkg6.whl -O torch-1.10.0-cp36-cp36m-linux_aarch64.whl
pip3 install torch-1.10.0-cp36-cp36m-linux_aarch64.whl
```

- **Paso 9.** Instalar torchvision

```sh
sudo apt install -y libjpeg-dev zlib1g-dev
git clone --branch v0.9.0 https://github.com/pytorch/vision torchvision
cd torchvision
sudo python3 setup.py install 
```

- **Paso 10.** Clona el siguiente repositorio:

```sh
cd ~
git clone https://github.com/marcoslucianops/DeepStream-Yolo
```

- **Paso 11.** Copia **gen_wts_yoloV5.py** de **DeepStream-Yolo/utils** al directorio **yolov5**

```sh
cp DeepStream-Yolo/utils/gen_wts_yoloV5.py yolov5
```

- **Paso 12.** Dentro del repositorio yolov5, descarga el **pt file** de las versiones de YOLOv5 (ejemplo para YOLOv5s 6.1)

```sh
cd yolov5
wget https://github.com/ultralytics/yolov5/releases/download/v6.1/yolov5s.pt
```

- **Paso 13.** Genera los archivos **cfg** y **wts**

```sh
python3 gen_wts_yoloV5.py -w yolov5s.pt
```

**Nota**: Para cambiar el tamaño de la inferencia (predeterminado: 640)

```sh
-s SIZE
--size SIZE
-s HEIGHT WIDTH
--size HEIGHT WIDTH

Example for 1280:
-s 1280
or
-s 1280 1280
```

- **Paso 14.** Copia los archivos generados **cfg** y **wts** en la carpeta **DeepStream-Yolo**

```sh
cp yolov5s.cfg ~/DeepStream-Yolo
cp yolov5s.wts ~/DeepStream-Yolo
```

- **Paso 15.** Abre el folder **DeepStream-Yolo** y compila la librería

```sh
cd ~/DeepStream-Yolo
# For DeepStream 6.1
CUDA_VER=11.4 make -C nvdsinfer_custom_impl_Yolo
# For DeepStream 6.0.1 / 6.0
CUDA_VER=10.2 make -C nvdsinfer_custom_impl_Yolo
```

- **Paso 16.** Edita el archivo **config_infer_primary_yoloV5.txt** de acuerdo a tu modelo

```sh
[property]
...
custom-network-config=yolov5s.cfg
model-file=yolov5s.wts
...
```

- **Paso 17.** Edita el archivp **deepstream_app_config**

```sh
...
[primary-gie]
...
config-file=config_infer_primary_yoloV5.txt
```

- **Paso 18.** Ejecuta la inferencia

```sh
deepstream-app -c deepstream_app_config.txt
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/FP32-yolov5s.gif" /></div>

El resultado anterior se ejecutaó en una **Jetson Xavier NX** con **FP32** y **YOLOv5s 640x640**. Podemos ver que los **FPS** rondan los **30**.

#### Calibración INT8

Si deseas utilizar la precisión INT8 para la inferencia, debes seguir los siguientes pasos:

- **Paso 1.** Instala OpenCV

```sh
sudo apt-get install libopencv-dev
```

- **Paso 2.** Compila/recompila la librería **nvdsinfer_custom_impl_Yolo** con el soporte de OpenCV

```sh
cd ~/DeepStream-Yolo
# For DeepStream 6.1
CUDA_VER=11.4 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo
# For DeepStream 6.0.1 / 6.0
CUDA_VER=10.2 OPENCV=1 make -C nvdsinfer_custom_impl_Yolo
```

- **Paso 3.** Para el conjunto de datos COCO, descarga [val2017](https://drive.google.com/file/d/1gbvfn7mcsGDRZ_luJwtITL-ru2kK99aK/view?usp=sharing), extrae el archivo, y muévelo al folder **DeepStream-Yolo**

- **Paso 4.** Crear un nuevo directorio para imágenes de calibración

```sh
mkdir calibration
```

- **Paso 5.** Ejecuta lo siguiente para seleccionar 1000 imágenes aleatorias del conjunto de datos COCO para ejecutar la calibración

```sh
for jpg in $(ls -1 val2017/*.jpg | sort -R | head -1000); do \
    cp ${jpg} calibration/; \
done
```

**Nota:** NVIDIA recomienda al menos 500 imágenes para obtener una buena precisión. En este ejemplo, se eligen 1000 imágenes para obtener una mayor precisión (más imágenes = más precisión). Los valores más altos de INT8_CALIB_BATCH_SIZE darán como resultado una mayor precisión y una velocidad de calibración más rápida. Configúrelo según la memoria de su GPU. Puedes configurarlo desde **head -1000**. Por ejemplo, para 2000 imágenes, **head -2000**. Este proceso puede llevar mucho tiempo.

- **Paso 6.** Crea un archivo **calibration.txt** con todas las imágenes seleccionadas:

```sh
realpath calibration/*jpg > calibration.txt
```

- **Paso 7.** Configura las variables de entorno:

```sh
export INT8_CALIB_IMG_PATH=calibration.txt
export INT8_CALIB_BATCH_SIZE=1
```

- **Paso 8.** Actualiza el archivo **config_infer_primary_yoloV5.txt**

De:

```sh
...
model-engine-file=model_b1_gpu0_fp32.engine
#int8-calib-file=calib.table
...
network-mode=0
...
```

A:

```sh
...
model-engine-file=model_b1_gpu0_int8.engine
int8-calib-file=calib.table
...
network-mode=1
...
```

- **Paso 9.** Ejecuta la inferencia

```sh
deepstream-app -c deepstream_app_config.txt
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/INT8-yolov5s.gif" /></div>

El resultado anterior se ejecutó en la **Jetson Xavier NX** con **INT8** y **YOLOv5s 640x640**. Podemos ver que los **FPS** rondan los **60**.

#### Resultados de referencia

La siguiente tabla resume el rendimiento de los diferentes modelos en **Jetson Xavier NX**.

<table>
<thead>
  <tr>
    <th>Nombre del modelo</th>
    <th>Precisión</th>
    <th>Tamaño de inferencia</th>
    <th>Tiempo de inferencia (ms)</th>
    <th>FPS</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">YOLOv5s</td>
    <td>FP32</td>
    <td>320x320</td>
    <td>16.66</td>
    <td>60</td>
  </tr>
  <tr>
    <td>FP32</td>
    <td>640x640</td>
    <td>33.33</td>
    <td>30</td>
  </tr>
  <tr>
    <td>INT8</td>
    <td>640x640</td>
    <td>16.66</td>
    <td>60</td>
  </tr>
  <tr>
    <td>YOLOv5n</td>
    <td>FP32</td>
    <td>640x640</td>
    <td>16.66</td>
    <td>60</td>
  </tr>
</tbody>
</table>

## Comparison between using public datasets and custom datasets

Ahora compararemos la diferencia entre la cantidad de muestras de entrenamiento y el tiempo de entrenamiento cuando utilizamos conjuntos de datos públicos y conjuntos de datos personalizados.

### Número de ejemplos de entrenamiento

#### Conjunto de datos personalizados

En esta wiki, primero recopilamos el conjunto de datos de nuestra planta como un video y luego convertimos el video en una serie de imágenes usando Roboflow. Aquí obtuvimos 542 imágenes, que es un conjunto de datos muy pequeño en comparación con los conjuntos de datos públicos.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/YOLOV5/62.jpg" /></div>

#### Conjunto de datos públicos

Los conjuntos de datos públicos como **Pascal VOC 2012** y **Microsoft COCO 2017** tienen alrededor de **17112** y **121408** imágenes respectivamente.

##### Conjunto de datos Pascal VOC 2012

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/63.png" /></div>

##### Conjunto de datos Microsoft COCO 2017

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/64.png" /></div>

### Tiempo de entrenamiento

#### Entrenamiento local

La capacitación se realizó en una tarjeta gráfica NVIDIA GeForce GTX 1660 con 6GB de memoria

##### Entrenamiento local con conjunto de datos personalizado

###### Conjunto de datos de 540 imágenes

De acuerdo con el entrenamiento local que realizamos anteriormente para las plantas, obtuvimos los siguientes resultados

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/65.png" /></div>

Aquí solo tomó **2,2 horas** ejecutar 100 épocas. Esto es más rápido que entrenar utilizando conjuntos de datos públicos.

###### Conjunto de datos de 240 imágenes

Redujimos el conjunto de datos a 240 imágenes, realizamos el entrenamiento nuevamente y obtuvimos los siguientes resultados.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/83.png" /></div>

Aquí solo tomó alrededor de **1 hora** ejecutar 100 épocas. Esto nuevamente más rápido que entrenar utilizando conjuntos de datos públicos.

##### Entrenamiento local con conjunto de datos Pascal VOC 2012

Utilizamos el conjunto de datos Pascal VOC 2012 para el entrenamiento, en este escenario manteniendo los mismos parámetros de entrenamiento. Descubrimos que se tardaba aproximadamente **50 minutos (0,846 horas * 60)** en ejecutar 1 época y, por lo tanto, detuvimos el entrenamiento en 1 época.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/66.png" /></div>

Si calculamos el tiempo de entrenamiento para 100 épocas, tomaría aproximadamente **50 * 100 minutos = 5000 minutos = 83 horas**, que es mucho más que el tiempo de entrenamiento para el conjunto de datos personalizado.

##### Entrenamiento local con conjunto de datos Microsoft COCO 2017

Usamos el conjunto de datos Microsoft COCO 2017 para el entrenamiento, en este escenario manteniendo los mismos parámetros de entrenamiento. Descubrimos que tomaría alrededor de **7,5 horas** ejecutar 1 época y, por lo tanto, detuvimos el entrenamiento antes de que finalizara 1 época.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/68.png" /></div>

Si calculamos el tiempo de entrenamiento para 100 épocas, tomaría aproximadamente **7,5 horas * 100 = 750 horas**, que es mucho más que el tiempo de entrenamiento para el conjunto de datos personalizado.

#### Entrenamiento en Google Colab

El entrenamiento se realizó en una Tarjeta Gráfica NVIDIA Tesla K80 con 12GB de memoria

##### Conjunto de datos personalizado

###### Conjunto de datos de 540 imágenes

Según el entrenamiento con Google Colab que realizamos anteriormente para las plantas con 540 imágenes, obtuvimos los siguientes resultados

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/37.png" /></div>

Aquí solo tomó alrededor de **1,3 horas** ejecutar 100 épocas. Esto también es comparativamente más rápido que el entrenamiento utilizando conjuntos de datos públicos.

###### Conjunto de datos de 240 imágenes

Redujimos el conjunto de datos a 240 imágenes, realizamos el entrenamiento nuevamente y obtuvimos los siguientes resultados.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/79.png" /></div>

Aquí solo tomó unos **42 minutos (0,697 horas * 60)** ejecutar 100 épocas. Esto es más rápido que entrenar utilizando conjuntos de datos públicos.

##### Entrenamiento en Google Colab con conjunto de datos Pascal VOC 2012

Utilizamos un conjunto de datos Pascal VOC 2012 para el entrenamiento, en este escenario manteniendo los mismos parámetros de entrenamiento. Descubrimos que se tardaban aproximadamente **9 minutos (0,148 horas * 60)** en ejecutar 1 época y, por lo tanto, detuvimos el entrenamiento en 1 época.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/67.png" /></div>

Si calculamos el tiempo de entrenamiento para 100 épocas, tomaría aproximadamente **9 * 100 minutos = 900 minutos = 15 horas**, lo cual es mucho más que el tiempo de entrenamiento para el conjunto de datos personalizado.

##### Entrenamiento en Google Colab con conjunto de datos Microsoft COCO 2017

Usamos el conjunto de datos Microsoft COCO 2017 para el entrenamiento, en este escenario manteniendo los mismos parámetros de entrenamiento. Descubrimos que tomaría alrededor de **1,25 horas** ejecutar 1 época y, por lo tanto, detuvimos el entrenamiento antes de que finalizara.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/69.png" /></div>

Si calculamos el tiempo de entrenamiento para 100 épocas, tomaría aproximadamente **1,25 horas * 100 = 125 horas**, que es mucho más que el tiempo de entrenamiento para el conjunto de datos personalizado.

### Resumen del número de ejemplos de entrenamiento vs tiempo de entrenamiento

| Conjunto de datos | Ejemplos de entrenamiento | Tiempo de entreno en local (GTX 1660 Super) | Tiempo de entreno en Google Colab (NVIDIA Tesla K80) |
|---|---|---|---|
| Personalizado | 542 | 2.2 horas | 1.3 horas |
|  | 240 | 1 hour | 42 minutes |
| Pascal VOC 2012 | 17112 | 83 horas | 15 horas |
| Microsoft COCO 2017 | 121408 | 750 horas | 125 horas |

## Comparación pretrained checkpoints

Puedes obtener más información sobre los "pretrained checkpoints" en la siguiente tabla. Aquí hemos resaltado nuestro escenario cuando se entrenó con **Google Colab** y la inferencia se realizó en **Jetson Nano** y **Jetson Xavier NX** con **YOLOv5n6** como "pretrained checkpoint".

| Modelo | Tamaño (pixels) | mAPval 0.5:0.95 | mAPval 0.5 | Velocidad CPU b1 (ms) | Velocidad V100 b1 (ms) | Velocidad V100 b32 (ms) | Velocidad Jetson  Nano FP16 (ms) | Velocidad Jetson Xavier NX FP16 (ms) | params (M) | FLOPs @640 (B) |
|---|---|---|---|---|---|---|---|---|---|---|
| YOLOv5n | 640 | 28.0 | 45.7 | 45 | 6.3 | 0.6 |  |  | 1.9 | 4.5 |
| YOLOv5s | 640 | 37.4 | 56.8 | 98 | 6.4 | 0.9 |  |  | 7.2 | 16.5 |
| YOLOv5m | 640 | 45.4 | 64.1 | 224 | 8.2 | 1.7 |  |  | 21.2 | 49.0 |
| YOLOv5l | 640 | 49.0 | 67.3 | 430 | 10.1 | 2.7 |  |  | 46.5 | 109.1 |
| YOLOv5x | 640 | 50.7 | 68.9 | 766 | 12.1 | 4.8 |  |  | 86.7 | 205.7 |
| **YOLOv5n6** | **640** | **71.7** | **95.5** | **153** | **8.1** | **2.1** | **47** | **20** | **3.1** | **4.6** |
| YOLOv5s6 | 1280 | 44.8 | 63.7 | 385 | 8.2 | 3.6 |  |  | 12.6 | 16.8 |
| YOLOv5m6 | 1280 | 51.3 | 69.3 | 887 | 11.1 | 6.8 |  |  | 35.7 | 50.0 |
| YOLOv5l6 | 1280 | 53.7 | 71.3 | 1784 | 15.8 | 10.5 |  |  | 76.8 | 111.4 |
| YOLOv5x6 + [TTA] | 1280 1536 | 55.0 55.8 | 72.7 72.7 | 3136 - | 26.2 - | 19.4 - |  |  | 140.7 - | 209.8 - |

> Referencia: [YOLOv5 GitHub](https://github.com/ultralytics/yolov5)

## Puntos extra

Dado que todos los pasos que explicamos anteriormente son comunes para cualquier tipo de aplicación de detección de objetos, ¡solo necesitas cambiar el conjunto de datos para tu propia aplicación de detección de objetos!

### Detección de señales de tráfico

Aquí utilizamos el [conjunto de datos de señales de tráfico](https://universe.roboflow.com/usmanchaudhry622-gmail-com/traffic-and-road-signs/1) de Roboflow y realizó inferencias en un dispositivo NVIDIA Jetson.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOv5-2/thumb-2.png" /></div>

### Detección de humo de incendios forestales

Aquí utilizamos el [conjunto de datos de humo de incendios forestales](https://public.roboflow.com/object-detection/wildfire-smoke) de Roboflow y realizó inferencias en un dispositivo NVIDIA Jetson.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Roboflow/20.jpg" /></div>

## Recursos

- **[Página Web]** [Documentación YOLOv5](https://docs.ultralytics.com)

- **[Página Web]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[Página Web]** [Documentación Roboflow](https://docs.roboflow.com)

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
