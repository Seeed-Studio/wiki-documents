---
description: Detección de Cascos de Seguridad - Etiquetado de Datos, Entrenamiento de Modelo de IA, Despliegue de Modelo de IA con Edge Impulse en NVIDIA Jetson
title: Comenzando con Edge Impulse
tags:
  - Data Label
  - AI model train
  - AI model deploy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/HardHat
last_update:
  date: 01/04/2023
  author: Bill
---

# Detección de Cascos de Seguridad Impulsada por Edge Impulse

<iframe width={560} height={315} src="https://www.youtube.com/embed/e5pZdJhoeqM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## Introducción

En entornos de trabajo como sitios industriales o de construcción, se requiere un casco de seguridad y es esencial para que las personas protejan sus cabezas de lesiones debido a objetos que caen, impacto con otros objetos, escombros, lluvia y descargas eléctricas. Mejora la seguridad pero a veces las personas subestiman su importancia tanto individual como industrialmente. Por lo tanto, un monitor basado en video para detectar cascos de seguridad puede ser una solución optimizada para este problema de seguridad.

Por ello, gracias a Louis Moreau y Mihajlo Raljic, proporcionamos este proyecto fundamental en el que vamos a entrenar un modelo de Aprendizaje Automático embebido para detectar cascos de seguridad y desplegarlo en el **Jetson Nano**. El **Jetson NX** y el **Jetson AGX** también son compatibles.

<div align="center"><img width="auto" src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonedge.png" /></div>

## Comenzando

Edge Impulse permite a los desarrolladores crear la próxima generación de soluciones de dispositivos inteligentes con Aprendizaje Automático embebido. El Aprendizaje Automático en el borde permitirá el uso valioso del 99% de los datos de sensores que se descartan hoy debido a restricciones de costo, ancho de banda o energía. Aquí vamos a aplicar Edge Impulse para entrenar un modelo de Aprendizaje Automático embebido.

### Hardware

**Hardware Requerido**

En este proyecto los dispositivos requeridos se muestran a continuación:

- NVIDIA Jetson Nano o [NVIDIA Xavier NX](https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html) o [NVIDIA Xavier AGX](https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html)
- PC
- Cámara USB
- Pantalla HDMI

**Configuración del Hardware**

Tanto la PC como el NVIDIA Jetson Nano deben estar encendidos y conectados a internet. Se recomienda configurar el NVIDIA Jetson Nano como una PC.

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsongsa.jpg" /></div>

### Software

- [Edge Impusle](https://www.edgeimpulse.com)
- [Sistema Ubuntu](https://www.linux.org/pages/download/) para NVIDIA Jetson Nano

Aquí vamos a entrenar un modelo de Aprendizaje Automático embebido para detectar cascos de seguridad. Hay varias formas de contribuir a ello.

### Preparación

Antes de comenzar nuestro proyecto, hay algunos trabajos de preparación que necesitamos hacer primero.

- **Paso 1**. Abrir el [sitio web de Edge Impulse](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1), y registrar una cuenta.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs.png" /></div>

- **Paso 2**. Hacer clic en "Create new project" y escribir el nombre del proyecto.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Alots/Alots2.png" /></div>

Aquí escribimos "Hard hat detection".

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs1.png" /></div>

- **Paso 3**. Vamos a entrenar un modelo ML embebido para detectar Cascos de Seguridad, por lo tanto aquí se debe seleccionar la opción "image".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs2.png" /></div>

- **Paso 4**. Configurar la configuración como "Classify multiple objects (object detection)".

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs3.png" /></div>

Ahora podemos comenzar con el proyecto.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs4.png" /></div>

## Entrenamiento del Modelo ML de Detección de Cascos de Seguridad

### Entrenamiento del Modelo ML basado en Conjuntos de Datos Públicos de Entrada

Edge Impulse ha proporcionado varias formas de recopilar datos. Primero vamos a subir los datos públicos al sitio web y tratar de desarrollar un Aprendizaje Automático embebido.

- **Paso 1**. Seleccionar la página "Data acauistion" en la columna izquierda y recopilar datos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup.png" /></div>

- **Paso 2**. Elegir y descargar los conjuntos de datos del [Github del Conjunto de Datos Flickr-Faces-HQ](https://github.com/NVlabs/ffhq-dataset).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup1.png" /></div>

Hacer clic en el botón "upload data" en la página "Data acquisition" y subir los conjuntos de datos descargados.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup2.png" /></div>

Es opcional subir datos existentes al proyecto en el Formato de Adquisición de Datos (CBOR, JSON, CSV), como archivos WAV, JPG o PNG.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs2b.png" /></div>

- **Paso 3**. Una vez subidos, los datos recopilados se llenan con imágenes etiquetadas. Continuar haciendo clic en "Impulse desigh" en la izquierda de la página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup3.png" /></div>

- **Paso 4**. Elegir el bloque de procesamiento de imagen adecuado y el bloque de aprendizaje de imagen y guardar el impulso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **Paso 5**. Hacer clic en "image" en la izquierda de la página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

Configurar como "GRB" y hacer clic en "Save Parameters", la página se dirigirá al sitio "Generate features" automáticamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

Entonces podemos generar las características.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **Paso 6**. Cuando aparezca "Job completed", hacer clic en "Object detection" en la izquierda de la página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

Hacer clic en "start training" y permitir que Edge Impulse entrene un modelo basado en las características generadas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **Paso 7**. Una vez que aparezca "job done", hacer clic en "Model testing" para verificar cómo funciona el modelo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

### Entrenamiento del Modelo ML basado en Conjuntos de Datos Personalizados de Cámara PC

Edge Impulse ha proporcionado varias formas de recopilar datos. Aquí vamos a personalizar nuestras propias imágenes y subirlas al sitio web capturando las imágenes a través de la cámara de la PC.

- **Paso 1**. Permanecer en la página "Dashboard" y luego hacer clic en "LET'S COLLECT SOME DATA".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc.png" /></div>

Hay múltiples opciones que podemos elegir para recopilar datos, aquí estamos usando nuestra computadora para proceder.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc1.png" /></div>

- **Paso 2**. Después de un tiempo, la página mostrará que se ha conectado a la computadora. Hacer clic en "Collecting images?" y luego "Give access to the camera".

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc2.png" /></div>

- **Paso 3**. Hacer clic en "Capture" para tomar la foto de ti mismo o de otros. Los datos de imagen necesitan ser etiquetados como "Hard Hat" y "Head" en la sección. Para etiquetar rápidamente la imagen, se recomienda encarecidamente terminar la adquisición de datos de una categoría antes de pasar a la siguiente, es decir, se recomienda terminar de capturar las imágenes de "Hard Hat" y luego pasar a capturar las imágenes de "Head".

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc3a.png" /></div>

Las imágenes capturadas se almacenarán en "Data acquistion" automáticamente. Para un mejor rendimiento del modelo de entrenamiento, se recomienda encarecidamente recopilar tantas imágenes como sea posible y recopilar la misma cantidad de datos en diferentes categorías.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc4.png" /></div>

- **Paso 4**. Hacer clic en "Labeling queue" para etiquetar los datos rodeando la cabeza con un cuadrado en la imagen.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc5.png" /></div>

Usar el mouse para arrastrar una caja alrededor de un objeto para agregar una etiqueta. Luego hacer clic en Save labels para avanzar al siguiente elemento.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc6.png" /></div>

Establecer las etiquetas como "Head" y "Hard Hat" y llenar el diálogo. Por favor asegúrate de que el cuadrado enmarque el área de la cabeza de las personas.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc7.png" /></div>

- **Paso 5**. Cuando los datos hayan sido etiquetados, hacer clic en "Save labels" para pasar al "Impulse design"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc8a.png" /></div>

- **Paso 6**. Elegir el bloque de procesamiento de imagen adecuado y el bloque de aprendizaje de imagen y guardar el impulso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **Paso 7**. Hacer clic en "image" en la izquierda de la página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

Configure como "GRB" y haga clic en "Save Parameters", la página se dirigirá automáticamente al sitio "Generate features".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

Entonces podemos generar las características.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **Paso 8**. Cuando aparezca "Job completed", haga clic en "Object detection" en el lado izquierdo de la página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

Haga clic en "start training" y permita que Edge Impulse entrene un modelo basado en las características generadas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **Paso 9**. Una vez que aparezca "job done", haga clic en "Model testing" para verificar cómo funciona el modelo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

### Entrenamiento de Modelo ML basado en Conjuntos de Datos de Cámara NVIDIA Jetson Personalizados

Edge Impulse ha proporcionado varias formas de recopilar datos. Aquí vamos a personalizar nuestras propias imágenes y subirlas al sitio web capturando las imágenes a través de la cámara conectada con el Nvidia Jetson Nano.

- **Paso 1**. Según el hardware, configure [NVIDIA Jetson Nano Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#write) o [NVIDIA Jetson Nano 2GB Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit#write) para la conexión de monitor externo y teclado. Conecte con Jetson Nano una pantalla de visualización.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsonnano.png" /></div>

- **Paso 2**. Asegúrese de que su Jetson Nano esté conectado a internet y configure el dispositivo en Edge Impulse.

Puede verificar su red con los siguientes comandos:

```cpp
ping -c 3 www.google.com
```

Si la red funciona correctamente, el resultado debería ser como:

```cpp
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
```

La configuración comienza a ejecutarse con el comando siguiente:

```cpp
edge-impulse-linux
```

Luego el sitio web solicitará la cuenta de Edge Impulse.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnanoa.png" /></div>

El contenido mostrado como se ve a continuación significa que la conexión está completa. Todos los proyectos que guardamos en Edge Impulse son seleccionables.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano1a.png" /></div>

Estamos capturando las fotos, así que aquí necesitamos seleccionar nuestra cámara USB para aplicar en el sitio web.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano2a.png" /></div>

Nombra el dispositivo que queremos conectar al sitio web

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano3a.png" /></div>

Se ve claramente que el dispositivo Jetson Nano ahora está conectado al proyecto.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano4a.png" /></div>

- **Paso 3**. Regresa a la página de Edge Impulse y selecciona la columna "Devices". El Jetson Nano conectado se muestra como se ve a continuación:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano5.png" /></div>

- **Paso 4**. Selecciona el dispositivo que conectamos a Edge Impulse y ve a la página "Data acquisition". Haz clic en "Capture" para tomar la foto de ti mismo o de otros. Los datos de imagen necesitan ser etiquetados como "Hard Hat" y "Head" en la sección. Para etiquetar rápidamente la imagen, se recomienda encarecidamente terminar la adquisición de datos de una categoría antes de pasar a la siguiente, es decir, se recomienda terminar de capturar las imágenes de "Hard Hat" y luego pasar a capturar las imágenes de "Head".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc4.png" /></div>

Las imágenes capturadas se almacenarán en "Data acquisition" automáticamente. Para un mejor rendimiento del modelo de entrenamiento, se recomienda encarecidamente recopilar tantas imágenes como sea posible y recopilar la misma cantidad de datos en diferentes categorías.

- **Paso 5**. Cuando se haya terminado de recopilar los datos, ve a "Impulse design"

- **Paso 6**. Elige el bloque de procesamiento de imagen adecuado y el bloque de aprendizaje de imagen y guarda el impulso.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png" /></div>

- **Paso 7**. Haz clic en "image" en el lado izquierdo de la página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png" /></div>

Configura como "GRB" y haz clic en "Save Parameters", la página cambiará al sitio "Generate features" automáticamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png" /></div>

Entonces podemos generar las características.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png" /></div>

- **Paso 8**. Cuando aparezca "Job completed", haz clic en "Object detection" en el lado izquierdo de la página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png" /></div>

Haz clic en "start training" y deja que Edge Impulse entrene un modelo basado en las características generadas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png" /></div>

- **Paso 9**. Una vez que aparezca "job done", haz clic en "Model testing" para verificar cómo funciona el modelo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png" /></div>

Se recomienda mezclar los métodos que proporcionamos arriba y verificar el rendimiento de cada modelo para ver cuál es mejor.

## Desplegar el modelo ML en el Jetson Nano

Ahora vamos a desplegar el modelo ML entrenado en el Jetson Nano y aplicar los códigos para hacerlo ().

### Desplegar el modelo ML a través del Edge Impulse Linux CLI

- **Paso 1**. Según el hardware, configura [NVIDIA Jetson Nano Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#write) o [NVIDIA Jetson Nano 2GB Developer Kit](https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit#write) para la conexión de monitor externo y teclado. Conecta con Jetson Nano una pantalla de visualización.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsonnano.png" /></div>

- **Paso 2**. Asegúrate de que tu Jetson Nano esté conectado a internet y configura el dispositivo en Edge Impulse.

!!!Note Si ya conectaste Jetson Nano con Edge Impulse en la sección "Entrenamiento de modelo ML basado en conjuntos de datos de cámara NVIDIA Jetson personalizados". Este paso se puede omitir.

Puedes verificar tu red con los siguientes comandos:

```cpp
ping -c 3 www.google.com
```

Si la red está funcionando correctamente, el resultado debería ser como:

```cpp
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
```

La configuración comienza a ejecutarse con el comando siguiente:

```cpp
edge-impulse-linux
```

El sitio web solicitará la cuenta de Edge Impulse.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnanoa.png" /></div>

El contenido mostrado como se ve a continuación significa que la conexión está completa. Todos los proyectos que guardamos en Edge Impulse son seleccionables.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano1a.png" /></div>

Estamos capturando las fotos, así que aquí necesitamos seleccionar nuestra cámara USB para aplicar en el sitio web.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano2a.png" /></div>

Nombra el dispositivo que queremos conectar al sitio web

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano3a.png" /></div>

Se puede ver claramente que el dispositivo Jetson Nano ahora está conectado al proyecto.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano4a.png" /></div>

- **Paso 3**. Descarga el modelo ML al Jetson Nano siguiendo el código.

```cpp
edge-impulse-linux-runner
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy.png" /></div>

La conexión exitosa se muestra a continuación y el modelo se activará automáticamente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy1.png" /></div>

- **Paso 4**. Copia la dirección que aparece y ábrela con un navegador.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy2.png" /></div>

La detección se mostrará en el navegador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy3a.png" /></div>

Y el resultado de los datos se mostrará como se indica a continuación:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy4.png" /></div>

### Desplegar el modelo ML a través del SDK de Python para Linux

En este proyecto, vamos a aplicar el modelo para mostrar la detección de Casco de Seguridad en la pantalla mostrando "No entry" y "Welcome". Edge Impulse proporciona una biblioteca que hace posible la ejecución de modelos ML y la recolección de datos de sensores en máquinas Linux usando Python. El SDK es de código abierto y está alojado en [GitHub](https://github.com/edgeimpulse/linux-sdk-python). También puedes probar la [imagen espejo](https://github.com/Zachay-NAU/Hard-Hat-Detectation) que ya hemos configurado.

- **Paso 1**. Instala una versión reciente de [Python 3](https://www.python.org/downloads/)(>=3.7) para Linux.

- **Paso 2**. Instala el SDK de Python para Linux con el siguiente comando:

```cpp
sudo apt-get install libatlas-base-dev libportaudio2 libportaudiocpp0 portaudio19-dev
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk.png" /></div>

```cpp
pip3 install edge_impulse_linux
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk1.png" /></div>

- **Paso 3**. Instala el [Edge Impulse para Linux CLI](https://docs.edgeimpulse.com/docs/edge-impulse-for-linux) con el siguiente comando:

```cpp
sudo apt install python3.7-dev
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk2.png" /></div>

```cpp
wget -q -0 - https://cdn.edgeimpulse.com/firmware/linux/jetson.sh | bash
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk3.png" /></div>

- **Paso 4**. Descarga el modelo ML al Jetson Nano con el siguiente comando:

```cpp
edge-impulse-linux-runner --download modelfile.eim
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk5.png" /></div>

Si esta es la primera vez que se conecta entre Jetson Nano y Edge Impulse, el sitio web requerirá la información de su cuenta de Edge Impulse para iniciar sesión.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk4.png" /></div>

!!!Note Esto descarga el archivo en modelfile.eim, si desea cambiar de proyecto, se puede hacer agregando '--clean'.

- **Paso 5**. Ejecute el [hardhat_detectation.py](https://files.seeedstudio.com/wiki/2.23jetsonedge/hardhat_detectation.py) para aplicar el modelo ML con el siguiente comando. Los códigos podrían requerir un [archivo](https://files.seeedstudio.com/wiki/2.23jetsonedge/device_patches.py) externo.

```cpp
python3 hardhat_detectation.py /home/jetson-nano/modelfile.eim
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk8.png" /></div>

- **Paso 6**. El resultado debería verse familiar a estos:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/nvresult.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/2.23jetsonedge/nvresult1.png" /></div>

¿O puede ser una imagen, desplegar tu aplicación ML para el pipeline de detección de EPP en 5 minutos? ¡Mantente atento con nosotros!

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

