---
description: Train and Deploy Your Own AI Model Into SenseCAP A1101
title: Entrena y Despliega tu Modelo de IA al SenseCAP A1101
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Train-Deploy-AI-Model-A1101
last_update:
  date: 07/22/2025
  author: Guillermo
---

# Entrena y Despliega Tu Propio Modelo de IA en SenseCAP A1101

## Descripción general

En este wiki, te enseñaremos cómo entrenar tu propio modelo de IA para tu aplicación específica y luego desplegarlo fácilmente en el SenseCAP A1101 - Sensor IA de Visión LoRaWAN. ¡Comencemos!

:::caution **Nota:**  
El firmware actual del dispositivo es compatible con [EI](https://wiki.seeedstudio.com/One-Stop-Model-Training-with-Edge-Impulse/). Si compraste el dispositivo después del **30 de marzo de 2023**, debes flashearlo de nuevo al [firmware por defecto](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101/#change-device-firmware-after-image-collection) para seguir este wiki.  
:::

## Introducción al hardware

A lo largo de este wiki utilizaremos principalmente el SenseCAP A1101 - Sensor IA de Visión LoRaWAN. Primero, familiaricémonos con este hardware.

[SenseCAP A1101 - Sensor IA de Visión LoRaWAN](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html) combina tecnología TinyML y transmisión LoRaWAN de largo alcance para ofrecer una solución de IA de bajo consumo y alto rendimiento para exteriores. Integra la solución de visión IA de Himax, compatible con TensorFlow Lite y múltiples plataformas TinyML, capaz de ejecutar distintos modelos para funciones como detección de plagas, conteo de personas y reconocimiento de objetos. Los usuarios pueden usar modelos proporcionados por Seeed, generar modelos propios con herramientas de entrenamiento o adquirir modelos comerciales de proveedores asociados.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/60.jpg"/></div>

## Introducción al software

En este wiki utilizaremos las siguientes tecnologías:

- **Roboflow** – para anotar imágenes.  
- **YOLOv5** – para entrenar el modelo.  
- **TensorFlow Lite** – para la inferencia.

<div align="center"><img width="600" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/57.png"/></div>

### ¿Qué es Roboflow?

[Roboflow](https://roboflow.com) es una herramienta de anotación basada en la web. Permite anotar imágenes fácilmente, aplicar preprocesamiento y exportar el conjunto etiquetado en formatos como YOLOv5 PyTorch, Pascal VOC, ¡y más! Además, ofrece conjuntos de datos públicos listos para usar.

### ¿Qué es YOLOv5?

YOLO significa “You Only Look Once”. Es un algoritmo que detecta y reconoce objetos en tiempo real. Ultralytics [YOLOv5](https://ultralytics.com/yolov5) es la implementación basada en PyTorch.

### ¿Qué es TensorFlow Lite?

[TensorFlow Lite](https://www.tensorflow.org/lite) es un framework de aprendizaje profundo multiplataforma y listo para producción. Convierte un modelo preentrenado de TensorFlow a un formato optimizado para velocidad o tamaño, para desplegar inferencia en dispositivos edge como móviles, Raspberry Pi o microcontroladores.

## Estructura del wiki

Este wiki se divide en tres secciones principales:

1. [Entrena tu propio modelo con un dataset público](#1-entrena-tu-propio-modelo-con-un-dataset-público)  
2. [Entrena tu propio modelo con tu propio dataset](#2-entrena-tu-propio-modelo-con-tu-propio-dataset)  
3. [Despliega el modelo entrenado en SenseCAP A1101](#3-despliega-el-modelo-entrenado-en-sensecap-a1101)

La sección 1 es la forma más rápida de crear tu modelo con pocos pasos. La sección 2 requiere más tiempo y esfuerzo, pero aporta mayor conocimiento. La sección 3 explica el despliegue del modelo y puede realizarse tras completar la 1 o la 2.

### Opciones de seguimiento

1. Sigue la [sección 1](#1-entrena-tu-propio-modelo-con-un-dataset-público) y luego la [sección 3](#3-despliega-el-modelo-entrenado-en-sensecap-a1101) – rápido.  
2. Sigue la [sección 2](#2-entrena-tu-propio-modelo-con-tu-propio-dataset) y luego la [sección 3](#3-despliega-el-modelo-entrenado-en-sensecap-a1101) – detallado.

Recomendamos empezar por la primera opción y luego avanzar a la segunda.

## 1. Entrena tu propio modelo con un dataset público

El primer paso en un proyecto de detección de objetos es obtener datos para entrenamiento. Puedes descargar datasets públicos o crear el tuyo propio. Usar datasets públicos te ahorra tiempo de recolección y anotación, ya están listos para usar.

### Preparación de hardware

- SenseCAP A1101 – Sensor IA de Visión LoRaWAN  
- Cable USB tipo C  
- Windows/Linux/macOS con Internet

### Preparación de software

- No se requiere software adicional

### Uso de un dataset público anotado

Puedes descargar datasets públicos como el [COCO dataset](https://cocodataset.org) o el [Pascal VOC dataset](http://host.robots.ox.ac.uk/pascal/VOC). Se recomienda [Roboflow Universe](https://universe.roboflow.com), que ofrece más de 90 000 datasets con 66 millones de imágenes. También puedes buscar “open-source datasets” en Google.

- **Paso 1.** Visita [este enlace de Roboflow](https://universe.roboflow.com/lakshantha-dissanayake/apple-detection-5z37o/dataset/1) para acceder a un dataset de detección de manzanas.  
- **Paso 2.** Haz clic en **Create Account** para crear una cuenta Roboflow.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/53.png"/></div>

- **Paso 3.** Haz clic en **Download**, selecciona **YOLO v5 PyTorch** como **Format**, pulsa **show download code** y luego **Continue**.

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/51.png"/></div>

Se generará un snippet de código que usaremos luego en Google Colab. Mantén esta ventana abierta.

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/52.png"/></div>

### Entrena usando YOLOv5 en Google Colab

Tras elegir el dataset, usamos Google Colab para entrenar en la nube. Integramos la API de Roboflow en Colab para descargar fácilmente el dataset.

Abre este [notebook preconfigurado](https://colab.research.google.com/github/Seeed-Studio/yolov5-swift/blob/master/tutorial.ipynb), sigue los pasos y ejecuta las celdas de código en orden.

> **Nota:** En Colab, en la celda de **Step 4**, copia directamente el código generado por Roboflow.

El notebook hará:

- Configurar entorno de entrenamiento  
- Descargar el dataset  
- Entrenar el modelo  
- Descargar el modelo entrenado  

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/18.png"/></div>

Para un dataset de detección de manzanas con 699 imágenes, tardó unos 7 min en completarse en Colab con GPU NVIDIA Tesla T4 (16 GB).

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/43.png"/></div>

Aunque Colab permite guardar 4 modelos, el dispositivo carga uno a la vez; el usuario seleccionará cuál usar más adelante.

### Despliegue e inferencia

Si deseas ir directamente a la sección 3 sobre cómo desplegar e inferir, [haz clic aquí](#3-despliega-el-modelo-entrenado-en-sensecap-a1101).

## 2. Entrena tu propio modelo con tu dataset

Si los objetos que necesitas no existen en datasets públicos, crea tu propio dataset. Graba muestras cubriendo todos los ángulos (360 °), entornos, iluminación y condiciones climáticas. Luego anota las imágenes. Recomendamos usar la cámara integrada del A1101 para uniformidad en colores y calidad.

### Preparación de hardware

- SenseCAP A1101 – Sensor IA de Visión LoRaWAN  
- Cable USB tipo C  
- Windows/Linux/macOS con Internet

### Preparación de software

En la siguiente sección configuraremos el software para Windows, Linux e Intel Mac; para Mac M1/M2 el proceso difiere.  

#### Windows, Linux, Mac con Intel

- **Paso 1.** Asegúrate de tener Python instalado. Si no es así, visita [python.org](https://www.python.org/downloads/) para descargar e instalar la última versión.

- **Paso 2.** Instala la siguiente dependencia:

```sh
pip3 install libusb1
```

#### Mac con M1/M2 (Apple Silicon)

- **Paso 1.** Instala Homebrew

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- **Paso 2.** Instala conda

```sh
brew install conda
```

- **Paso 3.** Descarga libusb

```sh
wget https://conda.anaconda.org/conda-forge/osx-arm64/libusb-1.0.26-h1c322ee_100.tar.bz2
```

- **Paso 4.** Instala libusb

```sh
conda install libusb-1.0.26-h1c322ee_100.tar.bz2
```

:::caution
Debes asegurarte de que la versión de tu **BootLoader sea mayor a 2.0.0** antes de poder cambiar el firmware y continuar con los siguientes pasos.  
Si no estás seguro, revisa la versión del BootLoader siguiendo los pasos en [esta sección](#check-bootloader-version).  
Si la versión es menor a 2.0.0, actualiza el BootLoader siguiendo las instrucciones de [esta sección](#update-bootloader).
:::

### Recolección del conjunto de datos (dataset)

- **Paso 1.** Conecta el SenseCAP A1101 a la PC mediante un cable USB Tipo-C.

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **Paso 2.** Haz doble clic en el botón de arranque para ingresar al **modo boot**.

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

Después de esto, verás que aparece una nueva unidad de almacenamiento en tu explorador de archivos con el nombre **SENSECAP**.

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **Paso 3.** Arrastra y suelta [este archivo `.uf2`](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_capture_firmware_v01-00.uf2) dentro de la unidad **SENSECAP**.

Una vez que el archivo `.uf2` se haya copiado completamente, la unidad desaparecerá. Esto indica que el firmware se cargó exitosamente en el módulo.

- **Paso 4.** Copia y pega [este script en Python](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/blob/master/tools/capture_images_script.py) en un archivo nuevo llamado **capture_images_script.py** en tu PC.

- **Paso 5.** Ejecuta el script de Python para comenzar a capturar imágenes.

```sh
python3 capture_images_script.py
```

Por defecto, capturará una imagen cada 300ms. Si quieres cambiar esto, puedes correr el script en este formato.

```sh
python3 capture_images_script.py --interval <time_in_ms>
```

Por ejemplo, para acpturar una imágen cada segundo:

```sh
python3 capture_images_script.py --interval 1000
```

Después de ejecutar el script anterior, el SenseCAP A1101 comenzará a capturar imágenes continuamente desde su cámara integrada y guardará todas en una carpeta llamada **save_img**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/41.png"/></div>

También se abrirá una ventana de vista previa mientras se graban las imágenes:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/40.jpg"/></div>

Cuando hayas capturado suficientes imágenes, haz clic en la ventana del terminal y presiona la siguiente combinación de teclas para detener el proceso de captura:

- **Windows:** Ctrl + Break  
- **Linux:** Ctrl + Shift + \\  
- **Mac:** CMD + Shift + \\  

### Cambiar el firmware del dispositivo después de capturar imágenes

Una vez que hayas terminado de grabar imágenes para tu dataset, debes volver a cargar el firmware original en el SenseCAP A1101 para poder usar los modelos de detección de objetos nuevamente.

- **Paso 1.** Entra al **modo boot** como se explicó anteriormente.

- **Paso 2.** Arrastra y suelta [este archivo `.uf2`](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases/download/v1.1.0/sensecap_ai_v01-30.uf2) en la unidad **SENSECAP**.

Una vez que termine la copia del archivo `.uf2`, la unidad desaparecerá. Esto indica que el firmware fue cargado exitosamente en el módulo.

### Anotar el dataset usando Roboflow

Si usas tu propio dataset, deberás **anotar manualmente** todas las imágenes. Anotar significa dibujar recuadros alrededor de cada objeto que deseas detectar y asignarles una etiqueta.

Usaremos [Roboflow](https://roboflow.com), una herramienta de anotación en línea muy práctica. Roboflow te permite importar directamente imágenes, dividir el dataset en entrenamiento, validación y prueba, aplicar procesamiento posterior y exportarlo en formato **YOLOv5 PyTorch**, que es el que necesitamos.

Usaremos un conjunto de imágenes con manzanas como ejemplo para detección y conteo.

- **Paso 1.** Accede a [Roboflow](https://app.roboflow.com/login) y crea una cuenta.

- **Paso 2.** Haz clic en **Create New Project** para comenzar tu proyecto.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/2.jpg"/></div>

- **Paso 3.** Rellena:
  - **Project Name**
  - Licencia: **CC BY 4.0** (por defecto)
  - Tipo de proyecto: **Object Detection (Bounding Box)**
  - ¿Qué predecirá tu modelo?: por ejemplo, **apples**

Luego haz clic en **Create Public Project**.

<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/6.jpg"/></div>

- **Paso 4.** Arrastra y suelta las imágenes que capturaste con el SenseCAP A1101.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/7.png"/></div>

- **Paso 5.** Una vez procesadas, haz clic en **Finish Uploading** y espera a que se completen.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/4.jpg"/></div>

- **Paso 6.** Haz clic en **Assign Images**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/5.jpg"/></div>

- **Paso 7.** Selecciona una imagen, dibuja un cuadro alrededor de una manzana, selecciona la etiqueta **apple** y presiona **ENTER**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/9.png"/></div>

- **Paso 8.** Repite lo mismo para las demás manzanas.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/10.png"/></div>

:::note
Intenta etiquetar **todas** las manzanas visibles, incluso si solo se ve una parte.
:::

- **Paso 9.** Continúa anotando todas las imágenes.

Roboflow tiene una función llamada **Label Assist** que predice etiquetas automáticamente para acelerar el proceso. Solo funciona con 80 clases predefinidas. Para activarlo:

<div align="center"><img width="{200}" src="https://files.seeedstudio.com/wiki/YOLOV5/41.png"/></div>
<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/YOLOV5/39.png"/></div>
<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/YOLOV5/40.png"/></div>

- **Paso 10.** Una vez finalizada la anotación, haz clic en **Add images to Dataset**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/25.jpg"/></div>

- **Paso 11.** Divide las imágenes entre **Train**, **Valid** y **Test** (deja los porcentajes por defecto) y haz clic en **Add Images**.

<div align="center"><img width="{330}" src="https://files.seeedstudio.com/wiki/YOLOV5/26.png"/></div>

- **Paso 12.** Haz clic en **Generate New Version**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/YOLOV5/27.jpg"/></div>

- **Paso 13.** En la sección de **Preprocessing**, cambia el tamaño de las imágenes a **192x192**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/11.png"/></div>
<div align="center"><img width="{450}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/13.png"/></div>

Esto acelera el entrenamiento y reduce el consumo de recursos.

- **Paso 14.** Haz clic en **Generate**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/14.png"/></div>

- **Paso 15.** Finalmente, haz clic en **Export**, selecciona **Formato: YOLO v5 PyTorch**, haz clic en **show download code** y luego en **Continue**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/54.png"/></div>

Esto generará un fragmento de código que utilizarás más adelante en Google Colab para el entrenamiento.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/55.png"/></div>

### Entrenar usando YOLOv5 en Google Colab

Una vez que hayas terminado de anotar tu dataset, necesitas entrenarlo. Salta a [esta sección](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101/#train-using-yolov5-on-google-colab) para ver cómo entrenar un modelo AI con YOLOv5 en Google Colab.

## 3. Cargar el modelo entrenado y realizar inferencia

Ahora transferiremos el archivo **model-1.uf2** (obtenido tras el entrenamiento) al SenseCAP A1101.

- **Paso 1.** Instala la última versión de [Google Chrome](https://www.google.com/chrome) o [Microsoft Edge](https://www.microsoft.com/en-us/edge?r=1) y ábrelo.

- **Paso 2.** Conecta el SenseCAP A1101 a tu PC mediante un cable USB Tipo-C.

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/38.png"/></div>

- **Paso 3.** Haz doble clic en el botón **boot** del SenseCAP A1101 para entrar en modo de almacenamiento masivo.

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/39.png"/></div>

Aparecerá una nueva unidad llamada **SENSECAP** en el explorador de archivos.

<div align="center"><img width="{280}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

- **Paso 4.** Arrastra y suelta el archivo **model-1.uf2** en la unidad **SENSECAP**.

Una vez completada la copia del archivo `.uf2`, la unidad desaparecerá, indicando que el firmware fue cargado con éxito.

:::note
Si tienes 4 modelos listos, puedes cargarlos uno por uno repitiendo el proceso: arrastrar modelo → esperar que desaparezca la unidad → entrar en modo boot de nuevo → cargar el siguiente.
:::

- **Paso 5.** Abre la aplicación **SenseCAP Mate App**. Si no la tienes, descárgala:

  - [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US)
  - [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)

- **Paso 6.** En la app, en la pantalla **Config**, selecciona **Vision AI Sensor**.

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/21.jpg"/></div>

- **Paso 7.** Mantén presionado el botón de configuración del SenseCAP A1101 durante 3 segundos para activar el modo de emparejamiento por Bluetooth.

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/37.png"/></div>

- **Paso 8.** Toca **Setup** en la app y comenzará a buscar dispositivos SenseCAP A1101 cercanos.

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/23.jpg"/></div>

- **Paso 9.** Selecciona tu dispositivo en la lista.

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/24.jpg"/></div>

- **Paso 10.** Ve a **Settings** y asegúrate de que **Object Detection** esté seleccionado. Si no lo está, selecciónalo y presiona **Send**.

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/25.jpg"/></div>

- **Paso 11.** En la pestaña **General**, toca **Detect**.

<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/26.jpg"/></div>

- **Paso 12.** Abre [este visor web](https://files.seeedstudio.com/grove_ai_vision/index.html).

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/31.png"/></div>

- **Paso 13.** Haz clic en el botón **Connect**. Aparecerá una ventana emergente, selecciona **SenseCAP Vision AI - Paired** y haz clic en **Connect**.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/32.png"/></div>

- **Paso 14.** ¡Visualiza los resultados de inferencia en tiempo real!

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/33.jpg"/></div>

Como puedes ver, las manzanas son detectadas con cuadros delimitadores. El número "0" indica la clase detectada (en este caso, manzana). Si hubiera más clases, se enumerarían como 0, 1, 2, etc. También se muestra el **score de confianza** (por ejemplo, 0.8 y 0.84).

## Contenido adicional

¿Quieres ir más allá? Puedes entrenar tu modelo de IA directamente en tu PC.

### ¿Puedo entrenar un modelo AI en mi PC?

Sí. Puedes usar tu propia PC con Linux (por ejemplo, Ubuntu 20.04) para entrenar un modelo de detección de objetos. El rendimiento dependerá de tu hardware.

- **Paso 1.** Clona el repositorio `yolov5-swift` e instala los requisitos en un entorno con **Python >= 3.7.0**:

```sh
git clone https://github.com/Seeed-Studio/yolov5-swift
cd yolov5-swift
pip install -r requirements.txt
```

- **Paso 2.** Si seguiste los pasos anteriores, probablemente exportaste tu dataset desde Roboflow. Allí tuviste la opción de descargar como archivo .zip en formato YOLO v5 PyTorch. Ahora hazlo:

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/16.png"/></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/17.png"/></div>

- **Paso 3.** Copia ese archivo .zip descargado dentro del directorio yolov5-swift y extráelo.

```sh
# example
cp ~/Downloads/Apples.v1i.yolov5pytorch.zip ~/yolov5-swift
unzip Apples.v1i.yolov5pytorch.zip
```

- **Paso 4.** Abre el archivo **data.yaml** y edita los directorios **train** y **val** de la siguiente forma

```sh
train: train/images
val: valid/images
```

- **Paso 5.** Descarga el modelo pre-entrenado que sirve para nuestro entrenamienot

```sh
sudo apt install wget
wget https://github.com/Seeed-Studio/yolov5-swift/releases/download/v0.1.0-alpha/yolov5n6-xiao.pt
```

- **Paso 6.** Ejecuta el siguiente comando para iniciar el entrenamiento.

Aquí podemos pasar varios argumentos:

- **img:** tamaño de imagen de entrada
- **batch:** tamaño del batch
- **epochs:** número de épocas de entrenamiento
- **data:** ruta al archivo yaml con la configuración del dataset
- **cfg:** configuración del modelo (arquitectura)
- **weights:** ruta personalizada a pesos preentrenados
- **name:** nombre para los resultados generados
- **nosave:** guarda sólo el checkpoint final
- **cache:** cachea las imágenes para acelerar el entrenamiento

```sh
python3 train.py --img 192 --batch 64 --epochs 100 --data data.yaml --cfg yolov5n6-xiao.yaml --weights yolov5n6-xiao.pt --name yolov5n6_results --cache
```

Para un dataset de detección de manzanas con 987 imágenes, el proceso tomó aproximadamente 30 minutos en una PC local con GPU NVIDIA GeForce GTX 1660 Super (6GB VRAM).

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/44.png"/></div>

Si seguiste el proyecto de Colab, sabes que puedes cargar hasta 4 modelos en el dispositivo simultáneamente. Sin embargo, solo un modelo puede estar activo a la vez; esto lo puede configurar el usuario (se explica más adelante).

- **Paso 7.** Navega a `runs/train/exp/weights`, y verás el archivo **best.pt**, que es el modelo entrenado resultante.

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/YOLOV5/33.jpg"/></div>

- **Paso 8.** Exporta el modelo entrenado a TensorFlow Lite

```sh
python3 export.py --data {dataset.location}/data.yaml --weights runs/train/yolov5n6_results/weights/best.pt --imgsz 192 --int8 --include tflite
```

- **Paso 9.** Convierte el archivo TensorFlow Lite a formato UF2

El formato UF2, desarrollado por Microsoft, es usado por Seeed para almacenar modelos .tflite en dispositivos AIoT. Actualmente, los dispositivos Seeed soportan hasta 4 modelos, cada uno menor a 1 MB.

Puedes especificar el índice del modelo con la opción -t. Por ejemplo:

- `-t 1`: index 1
- `-t 2`: index 2

```sh
# Place the model to index 1
python3 uf2conv.py -f GROVEAI -t 1 -c runs//train/yolov5n6_results//weights/best-int8.tflite -o model-1.uf2
```

Aunque puedes cargar hasta 4 modelos simultáneamente, recuerda que solo uno estará activo a la vez, y esta selección la puede hacer el usuario (se explica más adelante).

- **Paso 10.** Se generará un archivo llamado **model-1.uf2**, que es el que cargarás en el SenseCAP A1101 para hacer inferencias.

## Verificar versión de BootLoader
- Haz doble clic en el botón BOOT y espera que se monte la unidad extraíble.
- Abre el archivo INFO_UF2.TXT dentro de esa unidad.
<div align="center"><img width="{600}" src="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/raw/master/assert/q2.png"/></div>

## Actualizar BootLoader

Si tu SenseCAP A1101 no es reconocido por la computadora y no aparece ningún puerto, puede que necesites actualizar el BootLoader.

- **Paso 1.** Descarga el archivo BootLoader `.bin` en tu PC con Windows.

Por favor, descarga la última versión del BootLoader en el siguiente enlace. El nombre suele ser `tinyuf2-sensecap_vision_ai_vx.x.x.bin`.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descarga el Firware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Este firmware controla el chip BL702, que gestiona la conexión entre la computadora y el chip Himax. La versión más reciente soluciona problemas de reconocimiento en Mac y Linux.

- **Paso 2.** Descarga y abre el software [**BLDevCube.exe**](https://files.seeedstudio.com/wiki/Grove_AI_Module/BouffaloLabDevCube-1.6.6-win32.rar), selecciona **BL702/704/706** y luego haz clic en **Finish**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI01a.png" style={{width:300, height:'auto'}}/></div>

- **Paso 3.** En el software, haz clic en **View**, elige **MCU**, luego en **Image file** haz clic en **Browse** y selecciona el archivo `.bin` que descargaste.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/1.png" style={{width:800, height:'auto'}}/></div>

- **Paso 4.** Asegúrate de no tener otros dispositivos conectados a la PC. Mantén presionado el botón Boot en el módulo y conéctalo al PC.

- **Paso 5.** En BLDevCube, haz clic en **Refresh**, selecciona el puerto correcto, haz clic en **Open UART**, activa **Chip Erase** (colócalo en True) y luego haz clic en **Create&Program**. Espera a que termine el proceso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI07.png" style={{width:800, height:'auto'}}/></div>

## Resources

- **[Página Web]** [Documentación YOLOv5](https://docs.ultralytics.com)

- **[Página Web]** [Ultralytics HUB](https://ultralytics.com/hub)

- **[Página Web]** [Documentación Roboflow](https://docs.roboflow.com)

- **[Página Web]** [Guía TensorFlow Lite](https://www.tensorflow.org/lite/guide)

- **[PDF]** [Ficha técnica SenseCAP A1101 LoRaWAN Vision AI Sensor](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf)

- **[PDF]** [Guía de usuario SenseCAP A1101 LoRaWAN Vision AI Sensor](https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_LoRaWAN_Vision_AI_Sensor_User_Guide_V1.0.2.pdf)

- **[PDF]** [Catálogo SenseCAP S210X LoRaWAN Sensor](https://files.seeedstudio.com/products/114992867/SenseCAP%20S210X%20LoRaWAN%20Sensor%20Catalogue.pdf)

- **[PDF]** [FAQ SenseCAP A1101 LoRaWAN Vision AI Sensor](https://files.seeedstudio.com/wiki/SenseCAP-A1101/FAQ_for_SenseCAP_A1101_LoRaWAN_AI_Vision_Sensor_v1.0.0.pdf)

## Soporte Técnico y Discusión de Producto

 <br />

¡Gracias por elegir nuestros productos! Estamos disponibles para brindarte soporte y asegurar que tu experiencia sea lo más fluida posible. Ofrecemos varios canales de comunicación para diferentes necesidades y preferencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
