---
description: Carga de datos y etiquetado con alwaysAI en dispositivos NVIDIA Jetson
title: Primeros pasos con alwaysAI
tags:
  - Data Label
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/alwaysAI-Jetson-Getting-Started
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Primeros pasos con alwaysAI en dispositivos NVIDIA® Jetson

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/thumb-5.gif"/></div>

[alwaysAI](https://alwaysai.co) es una plataforma esencial de desarrollo de Visión por Computadora para crear e implementar aplicaciones de aprendizaje automático en dispositivos Edge como los dispositivos NVIDIA® Jetson. Desarrollar e implementar estas aplicaciones es simplemente demasiado complejo y consume mucho tiempo, requiriendo un conocimiento profundo de una gran variedad de tecnologías y técnicas de visión por computadora que son más relevantes y accesibles para especialistas que para desarrolladores cotidianos. alwaysAI elimina estas barreras y hace que crear aplicaciones de visión por computadora sea fácil, rápido y efectivo.

## Hardware compatible

alwaysAI es compatible con el siguiente hardware relacionado con Jetson:

- Kits de Seeed:

  - reComputer J1010 construido con Jetson Nano
  - reComputer J1020 construido con Jetson Nano
  - reComputer J2011 construido con Jetson Xavier NX 8GB
  - reComputer J2012 construido con Jetson Xavier NX 16GB

- Placas portadoras de Seeed:

  - Jetson Mate
  - Jetson SUB Mini PC
  - Jetson Xavier AGX H01 Kit
  - A203 Carrier Board
  - A203 (Version 2) Carrier Board
  - A205 Carrier Board
  - A206 Carrier Board

- Kits de desarrollo oficiales de NVIDIA:

  - NVIDIA® Jetson Nano Developer Kit
  - NVIDIA® Jetson Xavier NX Developer Kit
  - NVIDIA® Jetson AGX Xavier Developer Kit
  - NVIDIA® Jetson TX2 Developer Kit
  - NVIDIA® Jetson AGX Orin Developer Kit

- SoMs oficiales de NVIDIA:
  
  - NVIDIA® Jetson Nano module
  - NVIDIA® Jetson Xavier NX module
  - NVIDIA® Jetson TX2 NX module
  - NVIDIA® Jetson TX2 module
  - NVIDIA® Jetson AGX Xavier module

## Prerrequisitos

- Cualquiera de los dispositivos Jetson mencionados ejecutando JetPack 4.6 con todos los componentes SDK instalados (consulta [esta wiki](https://wiki.seeedstudio.com/es/reComputer_J1020_A206_Flash_JetPack/) como referencia para la instalación)
- PC host con Windows, Linux o Mac
- Cámara web USB o cámara MIPI CSI compatible con tu dispositivo Jetson

## Primeros pasos

¡Implementar tu primer proyecto de visión por computadora solo toma un par de minutos! Al final de esta wiki, podrás detectar objetos en una transmisión de video en vivo desde una cámara conectada a un dispositivo Jetson y también en un archivo de video precargado.

1. Configurar entorno para computadora de desarrollo
2. Configurar entorno para dispositivo Jetson
3. Registrarse para una cuenta de alwaysAI
4. Crear un proyecto usando el panel de alwaysAI
5. Implementar tu proyecto en el dispositivo Jetson usando la computadora de desarrollo
6. Detección de objetos en transmisión de video en vivo desde cámara
7. Detección de objetos en archivo de video precargado

### Configurar entorno para computadora de desarrollo

Ahora necesitas configurar el entorno de desarrollo. Aquí puedes usar una computadora con Windows, Linux o Mac.

:::note
En esta guía, usaremos una computadora de desarrollo con Windows. Sin embargo, si quieres configurar Mac o Linux como tu PC de desarrollo, por favor [visita aquí](https://alwaysai.co/docs/get_started/development_computer_setup.html) para aprender más.
:::

- **Paso 1.** Descarga e instala la aplicación de escritorio de alwaysAI y la interfaz de línea de comandos haciendo clic [aquí](https://alwaysai.co/installer/windows)

- **Paso 2.** Después de que termine la instalación, abre una interfaz de línea de comandos y escribe lo siguiente

```sh
aai -v
```

Si ves un número de versión impreso, has instalado exitosamente alwaysAI CLI. El número de versión al momento de escribir este wiki es **1.4.3**

- **Paso 3.** Verifica si OpenSSH ya está instalado en tu SO. Necesitas OpenSSH en la máquina de desarrollo para conectarte a tu dispositivo edge y desplegar los proyectos de aprendizaje automático.

```sh
ssh -V
```

Si ves un número de versión impreso, ya tienes OpenSSH instalado. Por ejemplo **OpenSSH_for_Windows_8.1p1, LibreSSL 3.0.2**. A finales de 2018, Windows 10 soporta OpenSSH de forma nativa. Consulta [este artículo](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse) en el sitio de documentación de Microsoft para más información sobre la instalación de OpenSSH en Windows

### Configurar el entorno para el dispositivo Jetson

A continuación necesitas configurar el entorno en el dispositivo edge (dispositivo Jetson en este caso).

**Paso 1.** Al ejecutar nuestro proyecto de aprendizaje automático en el dispositivo Jetson, se utiliza el runtime edgeIQ que está disponible como una [imagen docker](https://hub.docker.com/r/alwaysai/edgeiq). No necesitas instalar Docker porque ya viene preinstalado con JetPack. Sin embargo necesitas añadir el grupo "docker" a tu usuario para que no necesites privilegios de root (sudo) para acceder a Docker. Accede al dispositivo Jetson y ejecuta lo siguiente en una terminal

```sh
sudo usermod -aG docker $USER
```

**Paso 2.** Para aplicar la nueva membresía de grupo, cierre sesión en el dispositivo Jetson y vuelva a iniciar sesión, o escriba lo siguiente

```sh
su - $USER
```

**Paso 3.** Prueba tu instalación de docker sin **sudo**

```sh
docker run hello-world
```

<div align="center"><img width= "{630}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/2.png"/></div>

### Registrarse para una cuenta de alwaysAI

- **Paso 1.** Visita [esta página](https://console.alwaysai.co/auth?register=true) para registrarte para una cuenta de alwaysAI

- **Paso 2.** Completa el formulario y haz clic en **Sign Up for Free** para finalizar el proceso de registro

### Crear un proyecto usando el panel de alwaysAI

Después de completar la configuración del entorno en la máquina de desarrollo y el dispositivo Jetson, registrarse para una cuenta de alwaysAI, podemos comenzar a crear un nuevo proyecto de detección de objetos usando el panel de alwaysAI.

**Paso 1.** Visita el [panel de alwaysAI](https://console.alwaysai.co/dashboard) y crea un nuevo proyecto haciendo clic en el botón **New Project**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/4.png"/></div>

**Paso 2.** Elige **Object Detection** como plantilla inicial, ingresa un nombre de proyecto y haz clic en **Create Project**

<div align="center"><img width="{550}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/5.png"/></div>

**Paso 3.** Haz clic en **Click Here To View Your Project** para ingresar a tu proyecto recién creado

Ahora verás información sobre el proyecto recién creado como el modelo utilizado y otros detalles útiles

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/6.png"/></div>

Para el **Proyecto de Detección de Objetos** predeterminado, **mobilenet_ssd** se usa como el modelo que ha sido entrenado con el **conjunto de datos Pascal VOC**. Esto significa que esta aplicación puede reconocer **20 clases de objetos** como persona, pájaro, gato, vaca, perro, caballo, oveja, avión, bicicleta, barco, autobús, coche, motocicleta, tren, botella, silla, mesa de comedor, planta en maceta, sofá, tv/monitor.

Sin embargo, este modelo no está optimizado para ejecutarse en hardware Jetson y funcionará con fps muy bajos. Por lo tanto, elegiremos un modelo que esté optimizado para **Jetson Xavier NX** con **soporte TensorRT**.

**Paso 4.** Haz clic en los tres puntos junto al modelo y haz clic en **Delete**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/32.png"/></div>

**Paso 5.** Haz clic en **Add New Model** y haz clic en **Go to Model Catalog** para ingresar al Catálogo de Modelos de alwaysAI

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/33.png"/></div>

**Paso 6.** Escribe **ssd_mobilenet_v1_coco_2018_01_28_xavier_nx** en el cuadro de búsqueda y haz clic en **+ Use this Model**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/34.png"/></div>

Este modelo que ha sido entrenado con el **conjunto de datos COCO** que puede reconocer **80 clases de objetos** como persona, bicicleta, coche, motocicleta, avión, autobús, tren, camión, barco, semáforo, boca de incendios, señal de alto, parquímetro, banco, pájaro, gato, perro, caballo, oveja, vaca, elefante, oso, cebra, jirafa, mochila, paraguas, bolso, corbata, maleta, frisbee, esquís, snowboard, pelota deportiva, cometa, bate de béisbol, guante de béisbol, patineta, tabla de surf, raqueta de tenis, botella, copa de vino, taza, tenedor, cuchillo, cuchara, tazón, plátano, manzana, sándwich, naranja, brócoli, zanahoria, perro caliente, pizza, dona, pastel, silla, sofá, planta en maceta, cama, mesa de comedor, inodoro, tv, laptop, ratón, control remoto, teclado, teléfono celular, microondas, horno, tostadora, fregadero, refrigerador, libro, reloj, florero, tijeras, oso de peluche, secador de pelo, cepillo de dientes

**Paso 7.** Selecciona el proyecto creado anteriormente (My First Project en este caso) y haz clic en **Add To Project**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/35.png"/></div>

¡Ahora hemos agregado exitosamente el modelo a nuestro proyecto!

### Desplegar tu proyecto en el dispositivo Jetson usando la computadora de desarrollo

Ahora desplegaremos el proyecto que creamos antes en el dispositivo Jetson usando la computadora de desarrollo vía SSH

**Paso 1.** En la máquina de desarrollo, crea una nueva carpeta, abre una interfaz de línea de comandos dentro de la nueva carpeta y escribe lo siguiente

```sh
aai app configure
```

:::note
Se te pedirá que ingreses el nombre de usuario y la contraseña de la cuenta de alwaysAI cuando ejecutes el comando anterior por primera vez
:::

**Paso 2.** Selecciona el proyecto que creaste anteriormente en el panel de alwaysAI

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/7.png"/></div>

**Paso 3.** Elige **Dispositivo remoto** como **destino**

<div align="center"><img width= "{600}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/8.png"/></div>

**Paso 4.** Presiona **Y** para crear el archivo de clave privada

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/9.png"/></div>

**Paso 5.** Haz clic en **Agregar un nuevo dispositivo** para añadir tu dispositivo Jetson como dispositivo remoto

<div align="center"><img width="{570}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/10.png"/></div>

**Paso 6.** Elige **modo de dispositivo** como **Desarrollo**

<div align="center"><img width="{570}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/11.png"/></div>

**Paso 7.** Ingresa un **nombre de dispositivo**

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/36.png"/></div>

**Paso 8.** Ingresa el **nombre de usuario** del dispositivo Jetson junto con **nombre de host/dirección IP** como sigue

```sh
lakshanthad@192.168.2.156
```

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/37.png"/></div>

:::note
Aquí el nombre de usuario del dispositivo Jetson es **lakshanthad** y la dirección IP es **192.168.2.156**
:::

**Paso 9.** Ingresa la **contraseña** del dispositivo Jetson cuando se te solicite

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/38.png"/></div>

**Paso 10.** Cuando pregunte por la **ubicación** para ejecutar la aplicación, deja la ubicación predeterminada y presiona **ENTER**. Aquí la ubicación predeterminada está configurada como **alwaysai/test**. Este es el directorio del proyecto dentro del dispositivo Jetson

<div align="center"><img width="{750}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/39.png"/></div>

Ahora hemos inicializado exitosamente el proyecto en el dispositivo Jetson usando la computadora de desarrollo vía SSH

<div align="center"><img width="{750}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/17.png"/></div>

Antes de proceder a instalar la aplicación en el dispositivo Jetson, necesitamos hacer un pequeño cambio en el código principal para cambiar el nombre del modelo y el tipo de motor de inferencia.

**Paso 11.** En el directorio que creaste en tu PC para alwaysAI, abre **app.py** y cambia el nombre del modelo y el tipo de motor de inferencia como sigue

```python
def main():
    obj_detect = edgeiq.ObjectDetection("alwaysai/ssd_mobilenet_v1_coco_2018_01_28_xavier_nx")
    obj_detect.load(engine=edgeiq.Engine.TENSOR_RT)
```

**Paso 12.** Escribe lo siguiente para instalar la aplicación

```sh
aai app install
```

Verás la siguiente salida si se instala exitosamente

<div align="center"><img width= "{600}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/40.png"/></div>

:::note
Si encuentras errores en este paso, puedes intentar primero volver a desplegar usando el método `aai app install --clean`. Verifica dos veces que la versión de jetpack sea la **versión solicitada 4.6. Esto se puede verificar escribiendo el comando `sudo apt-cache show nvidia-jetpack`. Si el número de versión es correcto, asegúrate de haber completado la instalación del sistema Jetson junto con los**componentes del SDK de Jetson**. Esto te ayudará a resolver la mayoría de los problemas.
:::

### Detección de objetos en transmisión de video en vivo desde cámara

Ahora ejecutaremos la detección de objetos en una transmisión de video en vivo desde una cámara USB conectada al dispositivo Jetson. También puedes usar cámaras MIPI CSI que son compatibles con el dispositivo Jetson que estés usando

**Paso 1.** Conecta la cámara USB/ cámara MIPI CSI al dispositivo Jetson

**Paso 2.** Ejecuta lo siguiente

```sh
aai app start
```

Ahora verás la siguiente salida en la línea de comandos

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/41.png"/></div>

**Paso 3.** Abre un navegador web y escribe **http://localhost:5000** para abrir la transmisión de video

```sh
http://localhost:5000
```

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/person-small.gif"/></div>

Como puedes ver, las personas están siendo detectadas en tiempo real y el porcentaje de confianza para cada etiqueta se muestra en la interfaz. También el tiempo de inferencia en el **Jetson Xavier** es de **0.009s que es aproximadamente 111 fps**.

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/car-small.gif"/></div>

Lo anterior es otra demostración usando el mismo modelo.

### Detección de objetos en archivo de video precargado

Aquí ejecutaremos la detección de objetos en un archivo de video precargado.

**Paso 1.** Coloca el archivo de video dentro del directorio del proyecto alwaysAI del dispositivo Jetson. Según nuestro ejemplo, es **/home/`<username>`/alwaysai/test**

**Paso 2.** En la computadora de desarrollo, abre el archivo **app.py** dentro de la carpeta **test** que creamos antes y reemplaza esta sección del código

```sh
with edgeiq.WebcamVideoStream(cam=0) as video_stream, \
                edgeiq.Streamer() as streamer:
```

con este

```sh
with edgeiq.FileVideoStream(
            'file name goes here', play_realtime=True) as video_stream, \
                edgeiq.Streamer() as streamer:
```

Y luego reemplaza **file name goes here** con el nombre del archivo de video y la extensión del archivo. Asegúrate de que el nombre del archivo esté entre comillas simples.

**Paso 3.** Instala la aplicación nuevamente

```sh
aai app install
```

**Paso 4.** Finalmente ejecuta la aplicación

```sh
aai app start
```

Aquí verás la misma salida en la línea de comandos que antes, y una vez que abras un navegador web con la misma dirección mencionada anteriormente, verás que se realiza la detección de objetos en el video precargado, dando una salida similar a la anterior.

### Filtrar objetos a detectar

También puedes filtrar objetos específicos que quieres que el modelo detecte. Por ejemplo, el conjunto de datos COCO que usamos anteriormente es capaz de detectar 80 tipos de objetos. Sin embargo, podemos filtrar para detectar solo personas.

Simplemente necesitas añadir la línea **results.predictions** después de **results** al archivo **app.py**

```python
while True:
    frame = video_stream.read()
    results = obj_detect.detect_objects(framconfidence_level=.5)
    results.predictions = edgefilter_predictions_by_label(resulpredictions, ['person'])
    frame = edgeiq.markup_image(
```

## Aplicaciones de alwaysAI en GitHub

alwaysAI proporciona una amplia gama de aplicaciones listas para usar en el repositorio de GitHub de alwaysAI. Puedes revisar las diferentes aplicaciones [aquí](https://github.com/alwaysai/Reference-Applications).

### Detector de Placas de Matrícula

Para fines de demostración, explicaremos cómo desplegar una de estas aplicaciones que es el [Detector de Placas de Matrícula](https://github.com/alwaysai/license-plate-detector) en un dispositivo Jetson. Así que puedes repetir los mismos pasos para otras aplicaciones también.

**Paso 1.** En la computadora de desarrollo, crea una nueva carpeta para nuestro proyecto y entra en ella

**Paso 2.** Descarga [este repositorio](https://github.com/alwaysai/license-plate-detector) como un **.zip** o clónalo si tienes **Git** instalado en tu PC

Por defecto, el modelo utilizado para este ejemplo no está optimizado para ejecutarse en Jetson Nano. Por lo tanto, primero cargaremos un modelo optimizado para Jetson nano.

**Paso 3.** Entra en el repositorio recién descargado/clonado, abre una línea de comandos dentro y ejecuta lo siguiente

```sh
aai app models add alwaysai/vehicle_license_mobilenet_ssd_nano
```

**Paso 4.** Abre **app.py**, cambia el nombre del modelo y el motor de inferencia

```python
def main():
    obj_detect = edgeiq.ObjectDetection(
            "alwaysai/vehicle_license_mobilenet_ssd_nano")
    obj_detect.load(engine=edgeiq.Engine.TENSOR_RT)
```

**Paso 5.** Ejecuta lo siguiente

```sh
aai app configure
```

:::note
Se te pedirá que ingreses el nombre de usuario y la contraseña de la cuenta de alwaysAI cuando ejecutes el comando anterior por primera vez
:::

**Paso 6.** Selecciona **Create new project**

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/21.jpg"/></div>

**Paso 7.** Escribe un **Project Name**

**Paso 8.** Selecciona inicializar el proyecto **As an empty app**

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/26.jpg"/></div>

**Paso 9.** Repite los mismos pasos de la sección **Deploy your project on the Jetson device using development computer**, comenzando desde el **Paso 3** hasta el **Paso 11**

**Paso 10.** Una vez que la aplicación esté instalada en Jetson, ejecuta el siguiente comando para iniciar la aplicación

```sh
aai app start
```

Ahora verás la siguiente salida en la línea de comandos

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/23.jpg"/></div>

Como puedes ver, estamos usando el **modelo vehicle_license_mobilenet_ssd** y este modelo es capaz de identificar vehículos y placas de matrícula.

**Paso 11.** Abre un navegador web en tu PC y escribe lo siguiente para abrir la transmisión de video

```sh
http://localhost:5000
```

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/25.gif"/></div>

En esta demostración, la inferencia se está realizando en los 2 videos [aquí](https://github.com/alwaysai/license-plate-detector/tree/main/video) y como puedes ver, los vehículos y las placas de matrícula en el flujo de video están siendo detectados y el porcentaje de confianza para cada etiqueta se muestra en la interfaz.

### Usar inferencia con cámara web

Si quieres realizar la misma inferencia que arriba en un flujo de video en tiempo real desde una cámara web, por favor sigue los pasos a continuación

**Paso 1.** Navega a la carpeta que creamos antes para nuestro proyecto y abre **app.py**

**Paso 2.** Copia y pega el código desde [aquí](https://github.com/lakshanthad/license-plate-detector-webcam/blob/main/app.py)

**Paso 3.** Instala la aplicación nuevamente

```sh
aai app install
```

**Paso 4.** Finalmente ejecuta la aplicación

```sh
aai app start
```

Aquí verás la misma salida en la línea de comandos que antes, y una vez que abras un navegador web con la misma dirección mencionada anteriormente, verás la detección de objetos siendo realizada en un flujo de video en tiempo real desde la cámara web dando una salida similar a la anterior.

## alwaysAI Enterprise Edition

alwaysAI también tiene una edición empresarial con las siguientes características:

- Acceso a Freemium con 1 despliegue de dispositivo de producción por un año
- 20 horas de entrenamiento de modelos en alwaysAI Cloud
- 30 días de acceso al almacenamiento de conjuntos de datos de alwaysAI Cloud

Puedes aprender más sobre alwaysAI Enterprise Edition aquí.

### Entrena tu propio modelo y despliégalo

**Paso 1.** Prepara tu conjunto de datos para el entrenamiento. Asegúrate de que tu conjunto de datos esté en **formato PascalVOC** y luego organiza todas las imágenes y etiquetas en 2 directorios y comprime el archivo como sigue

<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/27.jpg"/></div>

**Paso 2.** Ve al [panel de alwaysAI](https://console.alwaysai.co/dashboard), haz clic en **Datasets** en el panel de navegación izquierdo y haz clic en **Upload a Dataset**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/28.jpg"/></div>

**Paso 3.** Después de que termine la carga del conjunto de datos, haz clic en **Train**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/29.jpg"/></div>

**Paso 4.** Aquí puedes cambiar la configuración de entrenamiento según tu preferencia y luego hacer clic en **Start training**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/30.jpg"/></div>

Verás la siguiente salida después de que termine el entrenamiento

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/31.jpg"/></div>

Ahora el modelo entrenado está disponible en tu cuenta. Puedes usar este modelo en tu proyecto de detección de objetos como sigue

**Paso 5.** Navega a `Models > My Models` y haz clic en el modelo que acabamos de entrenar

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/42.png"/></div>

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/43.png"/></div>

**Paso 6.** Como puedes ver, puedes usar el comando de abajo en el directorio raíz de tu aplicación de detección de objetos

```sh
aai app models add lakshanthad/roadsign-mobilenet
```

**Paso 7.** Después de eso, cambia el nombre del modelo en **app.py** y ejecuta la aplicación nuevamente

```sh
lakshanthad/roadsign-mobilenet
```

## Recursos

- **[Página Web]** [Documentación de AlwaysAI](https://alwaysai.co/docs)

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
