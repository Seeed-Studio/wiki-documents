---
description: Frigate es un NVR (grabador de vídeo en red) de código abierto con detección de objetos en tiempo real para cámaras IP. En esta guía, explicaremos los pasos para implementar Frigate en un dispositivo NVIDIA Jetson.
title: Despliegue de Frigate en la Jetson
image: https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/3.png
slug: /es/deploy_frigate_on_jetson
last_update:
  date: 08/29/2024
  author: kourosh
---

# Implementar Frigate en un dispositivo reComputer(NVIDIA Jetson)

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/3.png)

Frigate es un NVR (Network Video Recorder) de código abierto con detección de objetos en tiempo real para cámaras IP. En esta guía, recorreremos los pasos para implementar Frigate en un dispositivo NVIDIA Jetson. NVIDIA Jetson es una plataforma de inteligencia artificial en el borde (edge AI) que permite el despliegue eficiente de cargas de trabajo de IA. Combinar Frigate con Jetson aprovecha la aceleración de hardware para el aprendizaje automático, lo que permite procesar eficientemente las transmisiones de video y detectar objetos.

Objetivos del proyecto:

* Configurar un entorno Frigate en un dispositivo Jetson para procesamiento eficiente de video.
* Habilitar detección de objetos en tiempo real en streaming de video para múltiples cámaras IP.

Al final de este proyecto, los usuarios tendrán un sistema de vigilancia completamente operativo que puede detectar objetos en tiempo real, enviar alertas e integrarse con otros dispositivos inteligentes. Esta solución no solo mejora la seguridad, sino que también garantiza que el procesamiento se realice localmente, preservando la privacidad y reduciendo la dependencia de servicios en la nube.

<p style={{textAlign: 'center'}}><img src="https://docs.frigate.video/assets/images/media_browser-min-1f8a7c629d1bdbee1c78f99a97a0219a.png" alt="pir" width={900} height="auto" /></p>

## Preparación del hardware

Para implementar con éxito Frigate en un NVIDIA Jetson utilizando una cámara IP, necesitarás preparar los siguientes componentes de hardware. Esta sección describe el equipo necesario y proporciona breves descripciones para ayudarte a comenzar.

### 1. Dispositivo NVIDIA Jetson:

Un dispositivo NVIDIA Jetson sirve como unidad central de procesamiento para ejecutar Frigate y realizar la detección de objetos en tiempo real. Dependiendo de tus necesidades y presupuesto, puedes elegir entre varios modelos:

* Jetson Nano: Una opción rentable con suficiente potencia de procesamiento para configuraciones de vigilancia a pequeña escala con pocas cámaras.
* Jetson Xavier NX: Ofrece más potencia y puede gestionar implementaciones a mayor escala o tareas de detección de objetos más complejas.
* Jetson Orin Series: La opción más potente, adecuada para aplicaciones de alto rendimiento y configuraciones con múltiples cámaras.

:::info
**Accesorios necesarios**:

* Fuente de poder apropiada para el modelo de Jetson.
* Tarjeta MicroSD (para Jetson Nano y Orin) o eMMC (para Jetson Xavier NX/AGX Orin) con una capacidad mínima de 32 GB.
* Una solución de enfriamiento (por ejemplo, un ventilador o disipador de calor) para garantizar temperaturas de funcionamiento óptimas.
Monitor, teclado y mouse para la configuración inicial.
:::


### 2. Cámara IP:
Las cámaras IP proporcionan transmisiones de video de alta calidad, esenciales para una detección de objetos efectiva. Necesitarás al menos una cámara IP Dahua compatible con RTSP (Real-Time Streaming Protocol), lo que permitirá a Frigate recibir las transmisiones de video.

### 3. Resumen del hardware requerido:

* Dispositivo Jetson: Jetson Nano, Xavier NX, o serie Orin
* Cámara IP: Compatible con RTSP
* Tarjeta MicroSD/eMMC: Por lo menos de 32GB (para la configuración de la Jetson)
* Fuente de poder y refrigeración: Para el dispositivo Jetson
* Equipo de red: Cables Ethernet
* Opcional: Almacenamiento externo, inyector/switch PoE


## Preparación de Software

Configurar el entorno de software es un paso crucial para implementar Frigate en tu dispositivo NVIDIA Jetson. Esta sección describe los componentes de software necesarios y los pasos de instalación para garantizar que tu sistema esté listo para ejecutar Frigate y procesar las transmisiones de video desde la cámara IP.

### 1. Sistema operativo(Jetpack):

Asegúrate de que tu dispositivo NVIDIA Jetson esté ejecutando la versión más reciente del NVIDIA JetPack SDK. JetPack proporciona un sistema operativo basado en Linux junto con bibliotecas y herramientas esenciales para el desarrollo de IA.

* Descargar JetPack SDK: Visita la página de descargas de NVIDIA JetPack para descargar la versión más reciente del SDK de JetPack compatible con tu dispositivo Jetson (yo utilicé JetPack 5.1.3 con Xavier NX).

* Flashear el dispositivo Jetson: Usa el SDK Manager para flashear la imagen de JetPack en la tarjeta SD (para Jetson Nano) o eMMC (para Jetson Xavier NX/AGX Orin) del dispositivo Jetson.

Para dispositivos Seeed impulsados por dispositivos Jetson y sus guías de flasheado, consultar los siguientes links:

* [reComputer J1010 | J101](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack)
* [reComputer J2021 | J202](https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack)
* [reComputer J1020 | A206](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack)
* [reComputer J4012 | J401](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack)
* [A203 Carrier Board](https://wiki.seeedstudio.com/reComputer_A203_Flash_System)
* [A205 Carrier Board](https://wiki.seeedstudio.com/reComputer_A205_Flash_System)
* [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation)
* [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

### 2. Actualizaciones de sistema y dependencias:

Después de configurar el sistema operativo, realiza una actualización del sistema e instala las dependencias necesarias.

:::info
**Actualizar el sistema: Abre la terminal en el dispositivo Jetson y corre el siguiente comando:**

```
sudo apt-get update && sudo apt-get upgrade
```

**Instalar dependencias adicionales: Instalar dependencias comúnmente requeridas para compillar y correr el software en la Jetson:**
```
sudo apt-get install -y \
python3-pip \
python3-dev \
python3-venv \
build-essential \
libssl-dev \
libffi-dev \
git
```

:::



### 2. Instalación de Docker:

Frigate se ejecuta como un contenedor Docker. Instala Docker en el dispositivo Jetson siguiendo los siguientes pasos:

##### 1. Instala Docker:
* Instalar las dependencias de Docker:
```
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
```
* Añadir la GPC Key oficial de Docker:
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
* Añadir el repositorio de Docker:
```
sudo add-apt-repository "deb [arch=arm64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```
* Instalar Docker:
```
sudo apt-get update
sudo apt-get install -y docker-ce
```

##### 2. Instalación de Docker Compose:
Docker Compose se utiliza para definir y ejecutar aplicaciones Docker de múltiples contenedores, como Frigate, y manejar archivos YAML para ejecutar contenedores Docker.

*  Instalar Docker Compose: Utilice el siguiente comando para instalar Docker Compose:
```
sudo apt-get install -y python3-pip
sudo pip3 install docker-compose
```
*  Verifique la instalación de Docker Compose:
```
docker-compose --version
```


##### 3. NVIDIA Container Toolkit:

Para instalar el toolkit de contenedores de Nvidia, puedes seguir el enlace en la referencia. Según tu sistema, puedes seguir las siguientes pautas de instalación. Es necesario instalarlo para poder utilizar la GPU en el contenedor Docker.

##### 4. Configuración de Frigate:
*  Configurar el fichero de configuración: Crea un directorio donde colocarás los archivos de configuración de frigate:
```
mkdir ~/frigate
cd ~/frigate
```
*  Crear archivos de configuración: Necesitarás crear un archivo docker-compose.yml y un archivo config.yml dentro del directorio ~/frigate. Estos archivos definirán cómo se despliega Frigate y cómo se conecta a tus cámaras IP. docker-compose.yml: Define los servicios Docker para Frigate. config.yml: Especifica la configuración de Frigate, como las transmisiones de las cámaras, la configuración de detección e integración con MQTT.

Al completar estos pasos, tu dispositivo NVIDIA Jetson estará completamente preparado para ejecutar Frigate, y estarás listo para continuar con el despliegue de Frigate e integrar tu cámara IP para la detección de objetos en tiempo real.

## Primeros pasos

Ahora que tienes tu hardware preparado y el entorno de software configurado, es hora de desplegar Frigate en tu dispositivo NVIDIA Jetson y conectarlo a tu cámara IP Dahua. Sigue estos pasos para comenzar con el despliegue:

### 1. Pull de la imagen de Frigate docker:

En el sitio web de Frigate, la instalación recomendada es utilizando Docker con Compose. Primero, necesitas obtener la imagen de Docker de Frigate optimizada para TensorRT. Esta imagen está diseñada específicamente para aprovechar las capacidades de la GPU de los dispositivos NVIDIA Jetson, lo que permite una detección de objetos más eficiente.

Aquí estamos trabajando con JP5.1.3 y el pull request es:
```
docker pull ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5
```

Las etiquetas oficiales de la imagen de Docker para la versión estable actual son:

* stable : Construcción estándar de Frigate para amd64 y versión optimizada de Frigate para RPi en arm64.
* stable-standard-arm64 : Construcción estándar de Frigate para arm64.
* stable-tensorrt : Construcción de Frigate específica para dispositivos amd64 con GPU NVIDIA.

Las etiquetas de imagen de Docker soportadas por la comunidad para la versión estable actual son:

* stable-tensorrt-jp5 : Construcción de Frigate optimizada para dispositivos NVIDIA Jetson que ejecutan Jetpack 5.
* stable-tensorrt-jp4 : Construcción de Frigate optimizada para dispositivos NVIDIA Jetson que ejecutan Jetpack 4.6.
* stable-rk : Construcción de Frigate para SBCs con SoC Rockchip.
* stable-rocm : Construcción de Frigate para GPUs y iGPUs AMD.

Puedes usar cualquiera de estas etiquetas según tu implementación. Pero aquí estamos trabajando con Jetson, TensorRT y Jetpack 5.1.3, por lo que necesitamos obtener 'stable-tensorrt-jp5'. Esta imagen de Docker contiene todos los paquetes necesarios para ejecutar Frigate, por lo que no es necesario instalar TensorRT u otros componentes adicionales.

### 2. Preparación de los archivos de configuración de Frigate:

Antes de comenzar con el despliegue, necesitas configurar Frigate para que funcione con tu configuración específica, incluyendo las transmisiones de las cámaras y la configuración de detección.

config.yml file: Este archivo contendrá la configuración de Frigate, incluyendo los ajustes de las cámaras y los parámetros de detección. Crea un nuevo archivo llamado config.yml utilizando un editor de texto y agrega el siguiente contenido. Esta configuración establece Frigate en un dispositivo NVIDIA Jetson utilizando TensorRT para una detección de objetos eficiente desde una cámara IP Dahua.
```
mqtt:
  enabled: False

cameras:
  dummy_camera: # <--- this will be changed to your actual camera later
    enabled: True
    ffmpeg:
      hwaccel_args: preset-jetson-h264
      inputs:
        - path: rtsp://admin:admin1234@192.168.1.108:554/cam/realmonitor?channel=1&subtype=0
          roles:
            - detect

birdseye:

  enabled: True
  mode: objects
         
detectors:
  tensorrt:
    type: tensorrt
    device: 0 #This is the default, select the first GPU

model:
  path: /config/model_cache/tensorrt/yolov7-320.trt
  input_tensor: nchw
  input_pixel_format: rgb
  width: 320
  height: 320

detect:
  fps : 20
  width: 1280
  height: 720
  
objects:
  track:
    - person 
```

Puntos clave:

**MQTT Deshabilitado**: La integración de MQTT está desactivada, por lo que Frigate no enviará eventos de detección a través de MQTT.

**Configuración de la cámara**: Una cámara de marcador de posición llamada dummy_camera está habilitada, utilizando aceleración de hardware para flujos de video H.264 a través de FFmpeg. Se conecta a la cámara IP Dahua usando una URL RTSP para la detección.

**Visión Birdseye habilitada**: Proporciona una vista general que muestra solo los objetos detectados de todas las transmisiones de las cámaras.

**Detector TensorRT**: Utiliza TensorRT para la inferencia en la GPU principal, optimizando la velocidad y eficiencia de la detección.

**Detalles del modelo**: Especifica un modelo YOLOv7 optimizado con TensorRT para la detección de objetos, con un tamaño de entrada de 320x320 y formato RGB.

**Ajustes de detección**: Procesa video a 20 fotogramas por segundo, con una resolución de detección de 1280x720.
Seguimiento de objetos: Configurado para rastrear solo personas, reduciendo la carga computacional y enfocándose en la detección relevante.

### 2. Preparación del archivo docker-compose.yml:
Este archivo define el servicio de Frigate y cómo se ejecutará utilizando Docker Compose. Crea un nuevo archivo llamado docker-compose.yml en el mismo directorio con el siguiente contenido:
```
services:
  frigate:
    privileged: true
    environment:
      - YOLO_MODELS=yolov7-320
      - USE_FP16=false
    container_name: frigate
    runtime: nvidia 
    #devices:
      #- /dev/video0:/dev/video0 
    volumes:
      - /home/jetson/frigate/config:/config
      - /home/jetson/frigate/storage:/media/frigate
      #- type: tmpfs # Optional: 1GB of memory, reduces SSD/SD Card wear
        #target: /tmp/cache
        #tmpfs:
          #size: 1000000000
    ports:
      - "5000:5000"
      - "8554:8554"
    image: ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5
```
El fragmento de código proporcionado parece ser una configuración para el servicio de Frigate dentro de una configuración de Docker Compose. Frigate es un sistema de videovigilancia de código abierto impulsado por IA que se puede utilizar para detectar y rastrear objetos en tiempo real.

Aquí hay un desgloce de la configuración:

1. **services**: Esta sección define los servicios que formarán parte de la configuración de Docker Compose.

2. **frigate**: Este es el nombre del servicio para el contenedor de Frigate.

3. **privileged: true**: Esto otorga acceso privilegiado al contenedor de Frigate, lo cual es necesario a menudo para acceder a dispositivos de hardware como cámaras.

4. **environment**: Esta sección establece dos variables de entorno para el contenedor de Frigate:
   - `YOLO_MODELS=yolov7-320`: Especifica el modelo YOLO (You Only Look Once) que se utilizará para la detección de objetos.
   - `USE_FP16=false`: Desactiva el uso de precisión de punto flotante de 16 bits, lo que puede mejorar el rendimiento en algunos hardware.

5. **container_name: frigate**: Coloca el nombre del contenedor Frigate.

6. **runtime: nvidia**: Especifica el entorno de ejecución que se utilizará para el contenedor de Frigate, en este caso, el runtime de NVIDIA para el procesamiento acelerado por GPU.

7. **volumes**: Genera los siguientes directorios:
   - `/home/jetson/frigate/config:/config`: Monta el directorio de configuración local en el contenedor `/config`.
   - `/home/jetson/frigate/storage:/media/frigate`: Monta el directorio de almacenamiento local en el del contenedor `/media/frigate`.
   - Las líneas comentadas muestran una configuración opcional para usar un tmpfs (sistema de archivos en memoria) para el almacenamiento en caché, lo que puede ayudar a reducir el desgaste de los dispositivos de almacenamiento.

8. **ports**: Expone los siguientes puertos:
   - `5000:5000`: Mapea el puerto 5000 del contenedor al puerto 5000 del host.
   - `8554:8554`: Mapea el puerto 8554 del contenedor al puerto 8554 del host.

9. **image: ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5**: Especifica la imagen de Docker que se utilizará para el contenedor de Frigate, en este caso, la etiqueta`stable-tensorrt-jp5` del repositorio `blakeblackshear/frigate` en GitHub Container Registry.

Esta configuración establece un servicio de Frigate dentro de un entorno de Docker Compose, proporcionando una forma de ejecutar el sistema de videovigilancia Frigate con ajustes personalizados y soporte para aceleración de hardware.

### 3. Desplegar Frigate utilizando Docker Compose:
Con los archivos de configuración configurados y la imagen de Docker descargada, ahora puedes desplegar Frigate usando Docker Compose.

1.  Navega al directorio de Frigate: Asegúrate de estar en el directorio donde creaste los archivos de configuración:
```
cd ~/frigate
```

2.  Inicia Frigate con Docker Compose: Ejecuta el siguiente comando para iniciar Frigate:
```
docker-compose up -d
```
Este comando inicia el servicio de Frigate en modo desacoplado. El contenedor de Docker ahora se ejecutará en segundo plano.

3.  Verifica que Frigate esté en funcionamiento: Revisa que el contenedor de Frigate esté corriendo usando el siguiente comando:
```
docker ps
```
4.  Después de ejecutar el comando docker, puedes ver los logs de TensorRT, lo que indica que Frigate está corriendo en la GPU.

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/1.png)


### 4. Acceder a la interfaz web de Frigate:
Una vez que Frigate esté en funcionamiento, puedes acceder a la interfaz web para monitorear las transmisiones de video y configurar los ajustes:

1.  Abre un navegador web: En un dispositivo conectado a la misma red que tu dispositivo Jetson, abre un navegador web.
2.  Ingresa la dirección IP del dispositivo Jetson: En la barra de direcciones, ingresa la dirección IP de tu dispositivo Jetson seguida del puerto 5000 (por ejemplo, http://<jetson-ip-address or 127.0.0.1>:5000).
3. Ver el dashboard: El dashboard de Frigate mostrará las transmisiones de video en vivo de las cámaras IP Dahua conectadas, eventos de detección y opciones de configuración.
4.  Ahora puedes verificar que el Jetson está utilizando la GPU para la detección con jtop o en el sistema de Frigate. A continuación, podemos ver que la parte de detección está ejecutándose en aproximadamente 33 ms por cada fotograma.

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/2.png)

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/4.png)

## Solución de problemas

Es posible que se presenten algunos problemas durante el proceso de conexión de hardware, depuración de software o carga, especialmente al ejecutar Docker. Puedes utilizar los logs de Docker para solucionar los errores. 
```
docker logs frigate
```

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

## Referencias
1.  [Frigate Website](https://frigate.video/)
2.  [Frigate Github](https://github.com/blakeblackshear/frigate)
3.  [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)


