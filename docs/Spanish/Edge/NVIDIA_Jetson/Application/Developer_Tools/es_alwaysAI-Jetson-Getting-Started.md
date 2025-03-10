---
description: Carga y etiquetado de datos con alwaysAI en dispositivos NVIDIA Jetson
title: Introducción a alwaysAI
tags:
  - Etiquetado de datos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/alwaysAI-Jetson-Getting-Started
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Primeros pasos con alwaysAI en dispositivos NVIDIA® Jetson

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/thumb-5.gif"/></div>

[alwaysAI](https://alwaysai.co) es una plataforma de desarrollo de visión por computadora esencial para crear e implementar aplicaciones de aprendizaje automático en dispositivos de borde como los dispositivos NVIDIA® Jetson. Desarrollar e implementar estas aplicaciones es simplemente demasiado complejo y requiere mucho tiempo, y requiere un conocimiento profundo de una enorme variedad de tecnologías y técnicas de visión por computadora que son más relevantes y accesibles para los especialistas que para los desarrolladores comunes. AlwaysAI elimina estas barreras y hace que la creación de aplicaciones de visión por computadora sea fácil, rápida y efectiva.

## Hardware soportado

AlwaysAI es compatible con el siguiente hardware Jetson:

- Kits de Seeed:

  - reComputer J1010 potenciada por Jetson Nano
  - reComputer J1020 potenciada por Jetson Nano
  - reComputer J2011 potenciada por Jetson Xavier NX 8GB
  - reComputer J2012 potenciada por Jetson Xavier NX 16GB

- Carrier Boards de Seeed:

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

## Prerequisitos

- Cualquiera de los dispositivos Jetson anteriores con JetPack 4.6 y todos los componentes SDK instalados (consulta [esta wiki](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack/) para obtener una referencia sobre la instalación)
- PC con Windows, Linux o Mac OS
- Cámara web USB o Cámara MIPI CSI soportada por tu dispositivo Jetson

## Primeros pasos

¡Implementar tu primer proyecto de visión por computadora solo te llevará un par de minutos! Al final de esta wiki, podrás detectar objetos en una transmisión de video en vivo desde una cámara conectada a un dispositivo Jetson y también en un archivo de video precargado.

1. Configuración del entorno de desarrollo en tu ordenador
2. Configuración del entorno de desarrollo en tu dispositivo Jetson
3. Creación de una cuenta en alwaysAI
4. Creación de un proyecto utilizando el dashboard de alwaysAI
5. Implementación de tu proyecto en tu dispositivo Jetson utilizando tu PC
6. Detección de objetos en video en vivo desde la cámara
7. Detección de objetos en archivos de vídeo precargados

### Configuración del entorno de desarrollo en tu ordenador

Ahora necesitas configurar el entorno de desarrollo. Aquí puedes utilizar una computadora con Windows, Linux o Mac OS.

:::nota
En esta guía, usaremos una computadora de desarrollo con Windows. Sin embargo, si deseas configurar Mac o Linux como tu PC de desarrollo, [visita este link](https://alwaysai.co/docs/get_started/development_computer_setup.html) para obtener más información.
:::

- **Paso 1.** Descarga e instala la aplicación de escritorio y la interfaz de línea de comandos de AlwaysAI haciendo click [aquí](https://alwaysai.co/installer/windows)

- **Paso 2.** Una vez finalizada la instalación, abre una interfaz de línea de comandos y escribe lo siguiente

```sh
aai -v
```

Si ves un número de versión impreso, has instalado con éxito la CLI de AlwaysAI. El número de versión al momento de escribir esta wiki es **1.4.3**

- **Paso 3.** Comprueba si OpenSSH ya está instalado en tu sistema operativo. Necesitas OpenSSH en la máquina de desarrollo para conectarte a tu dispositivo Jetson e implementar tus propios proyectos de aprendizaje automático.

```sh
ssh -V
```

Si ves un número de versión impreso, ya tienes OpenSSH instalado. Por ejemplo **OpenSSH_for_Windows_8.1p1, LibreSSL 3.0.2**. A finales de 2018, Windows 10 admite OpenSSH de fábrica. Consulta [este artículo](https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse) en el sitio de documentos de Microsoft para obtener más información sobre la instalación de OpenSSH en Windows.

### Configuración del entorno de desarrollo en tu dispositivo Jetson

A continuación, debes configurar el entorno de desarrollo en tu dispositivo Jetson.

**Paso 1.** Al ejecutar nuestro proyecto de aprendizaje automático en el dispositivo Jetson, se utiliza el tiempo de ejecución de edgeIQ, que está disponible como [imagen docker](https://hub.docker.com/r/alwaysai/edgeiq). No es necesario instalar Docker porque ya viene preinstalado con JetPack. Sin embargo, debes agregar el grupo "docker" a tu usuario para que no necesites privilegios de super usuario (sudo) para acceder a Docker. Accede al dispositivo Jetson y ejecuta lo siguiente en una terminal

```sh
sudo usermod -aG docker $USER
```

**Paso 2.** Para aplicar la nueva membresía de grupo, cierra sesión en el dispositivo Jetson y vuelve a iniciarla, o escribe lo siguiente

```sh
su - $USER
```

**Paso 3.** Prueba la instalación docker sin **sudo**

```sh
docker run hello-world
```

<div align="center"><img width= "{630}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/2.png"/></div>

### Sign up for alwaysAI account

- **Step 1.** Visit [this page](https://console.alwaysai.co/auth?register=true) to sign up for an alwaysAI account

- **Step 2.** Fill out the form and click **Sign Up for Free** to finish the sign up process

### Creación de una cuenta en alwaysAI

Después de completar las configuraciones del entorno en la máquina de desarrollo y en el dispositivo Jetson, registrate para obtener una cuenta de AlwaysAI, puedes comenzar a crear un nuevo proyecto de detección de objetos utilizando el panel de control de AlwaysAI.

**Paso 1.** Visita el [dashboard de AlwaysAI](https://console.alwaysai.co/dashboard) y crea un nuevo proyecto haciendo click en el botón **New project**.

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/4.png"/></div>

**Paso 2.** Elige la opción **Object Detection** como plantilla para comenzar, ingresa un nombre para tu proyecto y haz click en **Create Project**

<div align="center"><img width="{550}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/5.png"/></div>

**Paso 3.** Haz click en **Click Here To View Your Project** para ingresar al proycto que creaste

Ahora verás información sobre el proyecto recién creado, como el modelo utilizado y otros detalles útiles.

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/6.png"/></div>

Para el **Object Detection Project** (Proyecto de detección de objetos) predeterminado, se utiliza **mobilenet_ssd** como modelo pre entrenado con el **conjunto de datos Pascal VOC**. Esto significa que esta aplicación puede reconocer **20 clases de objetos** como persona, pájaro, gato, vaca, perro, caballo, oveja, avión, bicicleta, barco, autobús, automóvil, motocicleta, tren, botella, silla, mesa de comedor, planta en maceta, sofá, televisor/monitor.

Sin embargo, este modelo no está optimizado para funcionar con hardware Jetson y funcionará a muy bajos fps. Por lo tanto, elegiremos un modelo optimizado para **Jetson Xavier NX** con **TensorRT support** (Soporte TensorRT).

**Paso 4.** Haz click en los tres puntos al lado del modelo y haz click en **Delete** (eliminar)

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/32.png"/></div>

**Paso 5.** Haz click en **Add New Model** y haz click en **Go to Model Catalog** para ingresar al catálogo de modelos AlwaysAI.

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/33.png"/></div>

**Paso 6.** Escribe **ssd_mobilenet_v1_coco_2018_01_28_xavier_nx** en la barra de búsquedas y haz click en **+ Use this Model**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/34.png"/></div>

Este modelo fue entrenado con el **conjunto de datos COCO** que puede reconocer **80 clases de objetos** como persona, bicicleta, coche, motocicleta, avión, autobús, tren, camión, barco, semáforo, boca de incendio, señal de alto, parquímetro, banco, pájaro, gato, perro, caballo, oveja, vaca, elefante, oso, cebra, jirafa, mochila, paraguas, bolso, corbata, maleta, disco volador, esquís, tabla de snowboard, pelota deportiva, cometa, bate de béisbol, guante de béisbol, patineta, tabla de surf, tenis. raqueta, botella, copa de vino, vaso, tenedor, cuchillo, cuchara, cuenco, plátano, manzana, sándwich, naranja, brócoli, zanahoria, pancho, pizza, rosquilla, pastel, silla, sofá, planta en maceta, cama, comedor, baño, televisión, ordenador portátil, ratón, control remoto, teclado, teléfono móvil, microondas, horno, tostadora, lavabo, refrigerador, libro, reloj, florero, tijeras, osito de peluche, secador de pelo, cepillo de dientes

**Paso 7.** Selecciona el proyecto creado anteriormente (Mi primer proyecto en este caso) y haz click en **Add to project**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/35.png"/></div>

¡Has añadido correctamente el modelo a tu proyecto!

### Implementación de tu proyecto en tu dispositivo Jetson utilizando tu PC

Ahora implementaremos el proyecto que creamos antes en el dispositivo Jetson usando la computadora de desarrollo a través de SSH.

**Paso 1.** En la máquina de desarrollo, crea una nueva carpeta, abre una interfaz de línea de comandos dentro de la nueva carpeta y escribe lo siguiente

```sh
aai app configure
```

:::nota
Se te pedirá que ingreses el nombre de usuario y la contraseña de la cuenta AlwaysAI cuando ejecutes el comando anterior por primera vez.
:::

**Paso 2.** Selecciona el proyecto que creaste antes en el dashboard de alwaysAI

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/7.png"/></div>

**Paso 3.** Elige la opción **Remote device** en **destination**

<div align="center"><img width= "{600}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/8.png"/></div>

**Paso 4.** Presiona **Y** para crear el archivo de clave privada

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/9.png"/></div>

**Paso 5.** Haz click en **Add a new device** para añadir tu dispositivo Jetson como un **remote device** (dispositivo remoto)

<div align="center"><img width="{570}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/10.png"/></div>

**Paso 6.** En **device mode** selecciona la opción **Development**

<div align="center"><img width="{570}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/11.png"/></div>

**Paso 7.** Ingresa un **device name** (Nombre del dispositivo)

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/36.png"/></div>

**Paso 8.** Ingresa el**username** (usuario) de tu dispositivo Jetson y **hostname/IP address** (nombre del host/dirección IP del host) como se muestra a continuación:

```sh
lakshanthad@192.168.2.156
```

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/37.png"/></div>

:::nota
Aquí el nombre de usuario del dispositivo Jetson es **laksanthad** y la dirección IP es **192.168.2.156**
:::

**Paso 9.** Ingresa el **password** de tu dispositivo Jetson cuando se te solicite

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/38.png"/></div>

**Paso 10.** Cuando se solicite el dato **location** para ejecutar la aplicación, deja la ubicación predeterminada y presiona **ENTER**. Aquí la ubicación predeterminada se establece como **alwaysai/test**. Este es el directorio del proyecto dentro del dispositivo Jetson.

<div align="center"><img width="{750}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/39.png"/></div>

Ahora hemos inicializado con éxito el proyecto en el dispositivo Jetson usando la computadora de desarrollo a través de SSH.

<div align="center"><img width="{750}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/17.png"/></div>

Antes de pasar a instalar la aplicación en el dispositivo Jetson, debemos realizar un pequeño cambio en el código principal para cambiar el nombre del modelo y el tipo de motor de inferencia.

**Paso 11.** En el directorio que creaste en tu PC para AlwaysAI, abre **app.py** y cambia el nombre del modelo y el tipo de motor de inferencia de la siguiente manera

```python
def main():
    obj_detect = edgeiq.ObjectDetection("alwaysai/ssd_mobilenet_v1_coco_2018_01_28_xavier_nx")
    obj_detect.load(engine=edgeiq.Engine.TENSOR_RT)
```

**Paso 12.** Escribe lo siguiente para instalar la app

```sh
aai app install
```

Verás el siguiente output si la instalación se logró exitosamente:

<div align="center"><img width= "{600}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/40.png"/></div>

:::nota
Si encuentras errores en este paso, primero puedes intentar volver a implementar usando el método `aai app install --clean`. Verifica que la versión del jetpack sea la **versión solicitada 4.6. Esto se puede comprobar escribiendo el comando `sudo apt-cache show nvidia-jetpack`. Si el número de versión es correcto, asegúrate de haber completado la instalación del sistema Jetson junto con los** componentes Jetson SDK**. Esto te ayudará a resolver la mayoría de los problemas.
:::

### Detección de objetos en video en vivo desde la cámara

Ahora ejecutaremos la detección de objetos en una transmisión de video en vivo desde una cámara USB conectada al dispositivo Jetson. También puedes utilizar cámaras MIPI CSI que sean compatibles con el dispositivo Jetson que estás utilizando

**Paso 1.** Conecta la cámara USB/cámara MIPI CSI al dispositivo Jetson

**Paso 2.** Ejecuta lo siguiente:

```sh
aai app start
```

Ahora deberías ver el siguiente output en tu línea de comandos:

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/41.png"/></div>

**Paso 3.** Abre un navegador web y escribe **<http://localhost:5000>** para abrir la transmisión de video.

```sh
http://localhost:5000
```

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/person-small.gif"/></div>

Como puedes ver, las personas se detectan en tiempo real y el porcentaje de confianza para cada etiqueta se muestra en la interfaz. Además, el tiempo de inferencia en la **Jetson Xavier** es **0,009 s, lo que equivale aproximadamente a 111 fps**.

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/car-small.gif"/></div>

Arriba se muestra otro demo utilizando el mismo modelo.

### Detección de objetos en archivos de vídeo precargados

Aquí ejecutaremos la detección de objetos en un archivo de video precargado.

**Paso 1.** Coloca el archivo de video dentro del directorio del proyecto AlwaysAI del dispositivo Jetson. Según nuestro ejemplo, es **/home/{username}/alwaysai/test**

**Paso 2.** En la computadora de desarrollo, abre el archivo **app.py** dentro de la carpeta **test** que creamos antes y reemplaza esta sección del código.

```sh
with edgeiq.WebcamVideoStream(cam=0) as video_stream, \
                edgeiq.Streamer() as streamer:
```

Con esta otra

```sh
with edgeiq.FileVideoStream(
            'file name goes here', play_realtime=True) as video_stream, \
                edgeiq.Streamer() as streamer:
```

Y luego reemplace **file name goes here** con el nombre del archivo de video y la extensión del archivo. Asegúrate de que el nombre del archivo esté entre comillas simples.

**Paso 3.** Instala nuevamente la app

```sh
aai app install
```

**Paso 4.** Finalmente corre la app

```sh
aai app start
```

Aquí verás el mismo resultado en la línea de comandos que antes, y una vez que abras un navegador web con la misma dirección mencionada anteriormente, verás que se realiza la detección de objetos en el video precargado, dando un resultado similar al anterior.

### Filtrar objetos a detectar

También puedes filtrar objetos específicos que desees que detecte el modelo. Por ejemplo, el conjunto de datos COCO anterior que utilizamos es capaz de detectar 80 tipos de objetos. Sin embargo, podemos filtrar para detectar solo personas.

Simplemente necesitas agregar la línea **results.predictions** después de **resultados** al archivo **app.py**

```python
while True:
    frame = video_stream.read()
    results = obj_detect.detect_objects(framconfidence_level=.5)
    results.predictions = edgefilter_predictions_by_label(resulpredictions, ['person'])
    frame = edgeiq.markup_image(
```

## Aplicaciones de alwaysAI en GitHub

AlwaysAI proporciona una amplia gama de aplicaciones listas para usar en el repositorio AlwaysAI GitHub. Puedes consultar las diferentes aplicaciones [aquí](https://github.com/alwaysai/Reference-Applications).

### Detector de matrículas

Para fines de demostración, explicaremos cómo implementar una de estas aplicaciones, que es el [Detector de matrículas](https://github.com/alwaysai/license-plate-detector) en un dispositivo Jetson. Por lo tanto, también puedes repetir los mismos pasos para otras aplicaciones.

**Paso 1.** En la computadora de desarrollo, crea una nueva carpeta para nuestro proyecto e ingresa a ella

**Paso 2.** Descarga [este repositorio](https://github.com/alwaysai/license-plate-detector) como **.zip** o clónalo si tienes **Git** instalado en tu PC

De forma predeterminada, el modelo utilizado para este ejemplo no está optimizado para ejecutarse en Jetson Nano. Por lo tanto, primero cargaremos un modelo nano optimizado de Jetson.

**Paso 3.** Ingresa al repositorio recién descargado/clonado, abre una línea de comandos dentro y ejecuta lo siguiente

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

**Paso 5.** Ejecuta lo siguiente:

```sh
aai app configure
```

:::nota
Se te pedirá que ingreses el nombre de usuario y la contraseña de la cuenta AlwaysAI cuando ejecutes el comando anterior por primera vez.
:::

**Paso 6.** Selecciona la opción **Create new project**

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/21.jpg"/></div>

**Paso 7.** Escribe en **Project Name** un nombre para tu proyecto

**Paso 8.** Selecciona la opción **As an empty app** para inicializar tu proyecto

<div align="center"><img width= "{720}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/26.jpg"/></div>

**Paso 9.** Repite los mismos pasos de la sección **Implementación de tu proyecto en tu dispositivo Jetson utilizando tu PC**, especificamente del **Paso 3** al **Paso 11**

**Paso 10.** Una vez que la aplicación esté instalada en la Jetson, ejecuta el siguiente comando para iniciar la aplicación

```sh
aai app start
```

Ahora verás el siguiente resultado en la línea de comandos

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/23.jpg"/></div>

Como puedes ver, estamos utilizando el modelo **vehicle_license_mobilenet_ssd** y este modelo es capaz de identificar vehículos y matrículas.

**Paso 11.** Abre un navegador web en tu PC y escribe lo siguiente para abrir la transmisión de video:

```sh
http://localhost:5000
```

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/25.gif"/></div>

En esta demostración, la inferencia se realiza en los 2 videos [obtenidos de aquí](https://github.com/alwaysai/license-plate-detector/tree/main/video) y, como puedes ver, los vehículos y las placas en la transmisión de video se detectan y el porcentaje de confianza para cada etiqueta se muestra en la interfaz.

### Inferencias con la cámara web

Si deseas realizar la misma inferencia anterior en una transmisión de video en tiempo real desde una cámara web, sigue los siguientes pasos

**Paso 1.** Navega a la carpeta que creamos antes para nuestro proyecto y abre **app.py**

**Paso 2.** Copia y pega [este código](https://github.com/lakshanthad/license-plate-detector-webcam/blob/main/app.py)

**Paso 3.** Instala nuevamente la app

```sh
aai app install
```

**Paso 4.** Ejecuta la app

```sh
aai app start
```

Aquí verás el mismo resultado en la línea de comandos que antes, y una vez que abras un navegador web con la misma dirección mencionada anteriormente, verás que la detección de objetos se realiza en una transmisión de video en tiempo real desde la cámara web, dando un resultado similar al anterior.

## Software Empresarial alwaysAI 

AlwaysAI también tiene una edición empresarial con las siguientes características:

- Acceso Freemium con implementación de 1 dispositivo de producción durante - un año
- 20 horas de entrenamiento de alwaysAI en la nube
- 30 días de acceso a almacenamiento de la nuvedel dataset de alwaysAI

Puedes obtener más información sobre AlwaysAI Enterprise Edition aquí.

### Entrena y despliega tu propio modelo

**Paso 1.** Prepara tu conjunto de datos para el entrenamiento. Asegúrate de que tu conjunto de datos esté en **formato PascalVOC** y luego organiza todas las imágenes y etiquetas en 2 directorios y comprime el archivo de la siguiente manera

<div align="center"><img width="{350}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/27.jpg"/></div>

**Paso 2.** Ve al [alwaysAI dashboard](https://console.alwaysai.co/dashboard), haz click en **Datasets** y haz click en **Upload a Dataset**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/28.jpg"/></div>

**Paso 3.** Al terminar la subida del conjunto de datos, haz click en **Train**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/29.jpg"/></div>

**Paso 4.** Aquí puedes cambiar la configuración de entrenamiento según tus preferencias y luego hacer click en **Start Training**

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/30.jpg"/></div>

Verás el siguiente output una vez termine el entrenamiento de tu modelo:

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/31.jpg"/></div>

Ahora el modelo entrenado está disponible en tu cuenta. Puedes utilizar este modelo en tu proyecto de detección de objetos de la siguiente manera

**Paso 5.** Navega a `Models > My Models` y haz click en el modelo que acabas de entrenar

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/42.png"/></div>

<div align="center"><img width= "{1000}" src="https://files.seeedstudio.com/wiki/alwaysAI/pics/43.png"/></div>

**Paso 6.** Como puedes ver, puedes usar el siguiente comando en el directorio raíz de tu aplicación de detección de objetos.

```sh
aai app models add lakshanthad/roadsign-mobilenet
```

**Paso 7.** Después de eso, cambia el nombre del modelo en **app.py** y ejecuta la aplicación nuevamente.

```sh
lakshanthad/roadsign-mobilenet
```

## Recursos

- **[Página web]** [AlwaysAI Documentation](https://alwaysai.co/docs)

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
