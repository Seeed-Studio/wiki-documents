---
description: Detección de cascos de seguridad, etiquetado de datos, entrenamiento de modelos de IA, implementación de modelos de IA con Edge Impulse en NVIDIA Jetson
title: Primeros pasos con Edge Impulse
tags:
  - Etiquetado de datos
  - Entrenamiento de modelo de IA
  - Despliegue de modelo de IA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/HardHat
last_update:
  date: 01/04/2023
  author: Bill
---

# Detección de casco industrial impulsado por Edge Impulse

<iframe width={560} height={315} src="https://www.youtube.com/embed/e5pZdJhoeqM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## Introducción

En entornos de trabajo como sitios industriales o de construcción, un casco es necesario y esencial para que las personas protejan sus cabezas de lesiones debido a la caída de escombros, lluvia y descargas eléctricas. Mejora la seguridad, pero a veces la gente subestima su importancia. Por lo tanto, un sistema de monitoreo basado en vídeo para detectar cascos puede ser una solución optimizada para este problema de seguridad.

Damos crédito a Louis Moreau y Mihajlo Raljic. En esta wiki proporcionamos este proyecto fundamental en el que vamos a entrenar un modelo de aprendizaje automático integrado para detectar cascos y lo desplegaremos en un dispositivo Jetsonn, **Jetson Nano**. **Jetson NX** y **Jetson AGX** son compatibles con las herramientas utilizadas en esta wiki.

<div align="center"><img width="auto" src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonedge.png" /></div>

## Primeros pasos

Edge Impulse permite a los desarrolladores crear la próxima generación de soluciones de dispositivos inteligentes con aprendizaje automático integrado. El aprendizaje automático en dispositivos de borde permitirá un uso valioso del 99% de los datos de los sensores que hoy se descartan debido a limitaciones de costo, ancho de banda o energía. Aquí aplicaremos Edge Impulse para entrenar un modelo de aprendizaje automático integrado.

### Hardware

**Hardware requerido**

Los dispositivos necesarios para desarrollar este proyecto se muestran a continuación:

- NVIDIA Jetson Nano o [NVIDIA Xavier NX](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) o [NVIDIA Xavier AGX](https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html)
- PC
- Cámara web USB
- Pantalla HDMI

**Configuración del Hardware**

Tanto la PC como la NVIDIA Jetson deben estar encendidos y conectados a Internet. Se recomienda configurar la NVIDIA Jetson como una PC.

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsongsa.jpg" /></div>

### Software

- [Edge Impusle](https://www.edgeimpulse.com)
- [Ubuntu OS](https://www.linux.org/pages/download/) para NVIDIA Jetson

Aquí vamos a entrenar un modelo de aprendizaje automático integrado para detectar cascos.

### Preparación

Antes de comenzar nuestro proyecto, hay algunos preparativos que debemos efectuar.

- **Paso 1**. Abre la [página web de Edge Impulse](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1), y crea tu propia cuenta.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs.png" /></div>

- **Paso 2**. Haz dlick en "Create new project" y escribe el nombre que quieras darle a tu proyecto.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots2.png" /></div>

Nosotros lo llamamos "Hard hat detection" (Detección de cascos).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs1.png" /></div>

- **Paso 3**. Vamos a entrenar un modelo de ML integrado para detectar cascos, por lo que aquí se debe seleccionar la opción "image".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs2.png" /></div>

- **Paso 4**. Ajusta la configuración con la opción "Classify multiple objects (object detection)" (Clasificar multiples objetos).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs3.png" /></div>

Ahora podemos comenzar con el proyecto.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs4.png" /></div>

## Entrenamiento del modelo de detección de cascos

### Entrenamiento del modelo con un conjunto de datos público

Edge Impulse proporciona varias formas de recopilar datos. Primero, cargaremos el conjunto de datos público en el sitio web e intentaremos desarrollar un aprendizaje automático integrado.

- **Paso 1**. Selecciona la opción "Data acauistion" (Adquisición de datos).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup.png" /></div>

- **Paso 2**. Elige y descarga tu conjunto de datos de [Flickr-Faces-HQ Dataset Github](https://github.com/NVlabs/ffhq-dataset).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup1.png" /></div>

Haz click en el botón "Upload Data" en la página "Data acquisition" y cargas los conjuntos de datos descargados.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup2.png" /></div>

Es opcional cargar datos existentes al proyecto en el formato de adquisición de datos (CBOR, JSON, CSV), como archivos WAV, JPG o PNG.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs2b.png" /></div>

- **Paso 3**. Una vez cargados, los datos recopilados se completan con imágenes etiquetadas. Continúa haciendo click en "Impulse design" a la izquierda de la página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup3.png" /></div>

- **Paso 4**. Elije el bloque de procesamiento de imágenes adecuado y el bloque de aprendizaje de imágenes y guarda el impulso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **Paso 5**. Haz click en "image" a la izquierda de la página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

Configura como "GRB" y haz click en "Save Parameters" (Guardar Parámetros), la página pasará automáticamente al sitio "Generate features" (Generar características).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

Luego podemos generar las características.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **Paso 6**. Cuando aparezca un mensaje que diga "Job Completed" (Trabajo completado), haz click en "Detección de objetos" a la izquierda de la página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

Haz click en "start training" y deja que Edge Impulse entrene el modelo en función de las características generadas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **Paso 7**. Una vez salte el siguiente mensaje "job done", haz click en "Model Testing" para comprobar cómo funciona el modelo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

### Entrenamiento de modelos de aprendizaje automático basado en conjuntos de datos personalizados

Edge Impulse proporciona varias formas de recopilar datos. Aquí vamos a personalizar nuestras propias imágenes y subirlas al sitio web capturándolas a través de la cámara web de la PC.

- **Paso 1**. Permanece en el "Dashboard" y haz click en la opción "LET'S COLLECT SOME DATA".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc.png" /></div>

Hay múltiples opciones que podemos elegir para recopilar datos, aquí estamos usando nuestra computadora para continuar.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc1.png" /></div>

- **Paso 2**. Después de un rato, la página mostrará que se ha conectado a la computadora. Haz click en "Collecting Images?" y luego en "Give access to the camera".

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc2.png" /></div>

- **Paso 3**. Haz click en "Capture" para tomar una fotografía del objeto que deseas identificar, en este caso de ti o de alguien más con casco. Los datos de la imagen deben etiquetarse como "Hard Hat" (casco) y "Head" (Cabeza) en la sección. Para etiquetar rápidamente la imagen, se recomienda encarecidamente finalizar la adquisición de datos de una categoría antes de pasar a la siguiente, es decir, se recomienda terminar de capturar las imágenes de "Hard Hat" (casco) y luego continuar con la captura de las imágenes de "Head" (cabeza).

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc3a.png" /></div>

Las imágenes capturadas se almacenarán automáticamente en la pestaña de "Data acquisition" (Adquisición de datos). Para un mejor rendimiento del modelo de entrenamiento, se recomienda recopilar tantas imágenes como sea posible y recopilar la misma cantidad de datos en diferentes categorías.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc4.png" /></div>

- **Paso 4**. Haz click en la "Labeling queue" (cola de etiquetado) para etiquetar los datos rodeando la cabeza con un cuadrado en la imagen.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc5.png" /></div>

Utiliza el mouse para arrastrar un cuadro alrededor de un objeto para agregar una etiqueta. Luego haz click en **Save Labels** para avanzar al siguiente elemento.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc6.png" /></div>

Establece las etiquetas como "Head" (cabeza) y "Hard Hat" (casco) y completa el cuadro de diálogo. Asegúrate de que el cuadrado enmarque el área de la cabeza de las personas.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc7.png" /></div>

- **Paso 5**. Cuando los datos hayan sido etiquetados, haz click en "Save labels" para pasar a la opción de "Impulse design"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc8a.png" /></div>

- **Paso 6**. Elige el bloque de procesamiento de imágenes adecuado y el bloque de aprendizaje de imágenes y guarda el progreso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **Paso 7**. Haz click en "image" en la parte izquierda de la página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

Configura como "GRB" y haz click en "Save Parameters", la página pasará automáticamente al sitio "Generate Features".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

Ahora podemos generar las características

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **Paso 8**. Cuando aparezca "Job completed", haz click en "Object detection" en la izquierda de la página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

Haz click en "start training" y deje que Edge Impulse entrene el modelo en función de las características generadas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **Paso 9**. Una vez que aparezca el mensaje "job done", haz click en "Model testing" para comprobar cómo funciona el modelo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

### Entrenamiento de modelos de aprendizaje automático basado en conjuntos de datos personalizados de cámaras NAVDIA Jetson

Edge Impulse proporciona varias formas de recopilar datos. Aquí vamos a personalizar nuestras propias imágenes y subirlas al sitio web capturándolas a través de la cámara conectada con Nivdia Jetson Nano.

- **Paso 1**. Según el hardware, configura la [NVIDIA Jetson Nano Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#write) o la [NVIDIA Jetson Nano 2GB Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit#write). Para la conexión de un monitor y teclado externos. Conéctate con la Jetson a una pantalla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsonnano.png" /></div>

- **Paso 2**. Asegúrate que tu dispositivo Jetson esté conectado a Internet y configura el dispositivo en Edge Impulse.

Puedes verificar tu red con los siguientes comandos:

```cpp
ping -c 3 www.google.com
```

Si la red funciona bien, el resultado debería lucir como a continuación:

```cpp
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
```

La instalación comienza a ejecutarse con el siguiente comando:

```cpp
edge-impulse-linux
```

Luego, el sitio web solicitará tu cuenta de Edge Impulse.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnanoa.png" /></div>

El contenido que se muestra a continuación significa que la conexión está completa. Todos los proyectos que guardamos en Edge Impulse son elegibles en la plataforma.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano1a.png" /></div>

Estamos capturando las fotos, por lo que aquí debemos seleccionar nuestra cámara USB en el sitio web.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano2a.png" /></div>

Nombra el dispositivo que quieras conectar al sitio web.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano3a.png" /></div>

Se ve claramente que el dispositivo Jetson ahora está conectado al proyecto.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano4a.png" /></div>

- **Paso 3**. Vuelve a la página Edge Impulse y selecciona la columna "Devices". El dispositivo Jetson conectado se muestra a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano5.png" /></div>

- **Paso 4**. Selecciona el dispositivo que conectaste a Edge Impulse y accede a la página "Data Acquisition". Haz click en "Capture" para tomar una fotografía e integrarla a tu conjunto de datos. Los datos de la imagen deben etiquetarse como "Hard Hat" (casco) y "Head" (Cabeza) en la sección. Para etiquetar rápidamente la imagen, se recomienda encarecidamente finalizar la adquisición de datos de una categoría antes de pasar a la siguiente, es decir, se recomienda terminar de capturar las imágenes de "Hard Hat" (casco) y luego continuar con la captura de las imágenes de la clase "Head" (cabeza).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc4.png" /></div>

Las imágenes capturadas se almacenarán automáticamente en la pestaña de "Data acquisition". Para un mejor rendimiento del modelo, se recomienda recopilar tantas imágenes como sea posible y recopilar la misma cantidad de datos en diferentes categorías.

- **Paso 5**. Cuando los datos hayan terminado de recopilarse, pasa a la sección de "Impulse Design".

- **Paso 6**. Elige el bloque de procesamiento de imágenes adecuado y el bloque de aprendizaje de imágenes y guarda el impulso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **Paso 7**. Haz click en la opción "image" que está al lado izquierdo de la página web.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

Configura como "GRB" y haz click en "Save parameters", la página pasará automáticamente al sitio "Generate Features".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

Ahora puedes generar las características.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **Paso 8**. Cuando aparezca el mensaje "Job completed", haz click en "Object detection" a la izquierda de la página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

Haz click en "Start training" y deja que Edge Impulse entrene el modelo en función de las características generadas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **Paso 9**. Una vez que aparezca el mensaje "job done", haz click en "Model training" para comprobar cómo funciona el modelo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

Se recomienda combinar los métodos que proporcionamos anteriormente y verificar el rendimiento de cada modelo para ver cuál es mejor.

## Despliegue del modelo de ML en el dispositivo Jetson

Ahora implementaremos el modelo ML entrenado en el dispositivo Jetson y aplicaremos los códigos para crearlo.

### Desplegar el modelo de ML mediante la CLI de Edge Impulse para Linux

- **Paso 1**. Según el hardware, configura la [NVIDIA Jetson Nano Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#write) o la [NVIDIA Jetson Nano 2GB Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit#write). Para conectar un monitor y teclado externos. Conéctate con la Jetson a una pantalla.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsonnano.png" /></div>

- **Paso 2**. Asegúrate de que tu Jetson Nano esté conectada a Internet y configura el dispositivo en Edge Impulse.

¡¡¡Nota!!! Si ya conectaste tu dispositivo Jetson con Edge Impulse en la sección "ML Model Training based on Custimized NVDIA Jetson Camera Datasets". Este paso se puede omitir.

Puedes verificar tu red con los siguientes comandos:

```cpp
ping -c 3 www.google.com
```

Si la red funciona bien, el resultado debería lucir como a continuación:

```cpp
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
```

La instalación comienza a ejecutarse con el siguiente comando:

```cpp
edge-impulse-linux
```

El sitio web solicitará la cuenta Edge Impulse.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnanoa.png" /></div>

El contenido que se muestra a continuación significa que la conexión está completa. Todos los proyectos que guardes en Edge Impulse son seleccionables a partir de ahora.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano1a.png" /></div>

Para capturar las fotos, debes seleccionar tu cámara USB para utilizarla en el sitio web.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano2a.png" /></div>

Nombra el dispositivo que deseas conectar al sitio web.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano3a.png" /></div>

Se ve claramente que el dispositivo Jetson Nano ahora está conectado al proyecto.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano4a.png" /></div>

- **Paso 3**. Descarga el modelo de ML al dispositivo Jetson siguiendo el código.

```cpp
edge-impulse-linux-runner
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy.png" /></div>

Si la conexión es exitosa se mostrará inmediatamente y el modelo se activará automáticamente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy1.png" /></div>

- **Paso 4**. Copia la dirección que se muestra y ábrela con un navegador.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy2.png" /></div>

La detección se mostrará en el navegador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy3a.png" /></div>

Y el resultado de los datos se mostrará a continuación:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy4.png" /></div>

### Despliegue del modelo de ML mediante el Linux Python SDK

En este proyecto, vamos a aplicar el modelo para mostrar la detección de cascos y en la pantalla mostrar los siguientes mensajes: "Prohibido el ingreso" y "Bienvenido".  Edge Impulse proporciona una biblioteca que hace posible la ejecución de modelos de aprendizaje automático y la recopilación de datos de sensores en máquinas Linux que utilizan Python. El SDK es de código abierto y está disponible en [GitHub](https://github.com/edgeimpulse/linux-sdk-python). También puedes probar la [mirror image](https://github.com/Zachay-NAU/Hard-Hat-Detectation) que ya configuramos.

- **Paso 1**. Instala la última versión de [Python 3](https://www.python.org/downloads/)(>=3.7) para Linux.

- **Paso 2**. Instala el Linux Python SDK utilizando el siguiente comando:

```cpp
sudo apt-get install libatlas-base-dev libportaudio2 libportaudiocpp0 portaudio19-dev
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk.png" /></div>

```cpp
pip3 install edge_impulse_linux
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk1.png" /></div>

- **Paso 3**. Instala el CLI de [Edge Impulse para Linux](https://docs.edgeimpulse.com/docs/edge-impulse-for-linux) con el siguiente comando:

```cpp
sudo apt install python3.7-dev
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk2.png" /></div>

```cpp
wget -q -0 - https://cdn.edgeimpulse.com/firmware/linux/jetson.sh | bash
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk3.png" /></div>

- **Paso 4**. Descarga el modelo de ML en el dispositivo Jetson utilizando el siguiente comando:

```cpp
edge-impulse-linux-runner --download modelfile.eim
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk5.png" /></div>

Si esta es la primera vez que realizas una conexión entre tu dispositivo Jetson y Edge Impulse, el sitio web solicitará la información de tu cuenta Edge Impulse para iniciar sesión.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk4.png" /></div>

¡¡¡Nota!!! Esto descargará el archivo en modelfile.eim, si deseas cambiar de proyecto, puedes hacerlo agregando '--clean'.

- **Paso 5**. Ejecuta [hardhat_detectation.py](https://files.seeedstudio.com/wiki/2.23jetsonedge/hardhat_detectation.py) para aplicar el modelo ML con el siguiente comando. Es posible que los códigos requieran de este [archivo] externo (https://files.seeedstudio.com/wiki/2.23jetsonedge/device_patches.py).

```cpp
python3 hardhat_detectation.py /home/jetson-nano/modelfile.eim
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk8.png" /></div>

- **Pas  6**. El resultado debería lucir como se muestra a continuación:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/nvresult.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/nvresult1.png" /></div>

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

