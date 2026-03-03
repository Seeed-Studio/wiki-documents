---
description: Frigate es un NVR (Grabador de Video en Red) de código abierto con Detección de Objetos en Tiempo Real para cámaras IP. En esta guía, recorreremos los pasos para desplegar Frigate en un dispositivo NVIDIA Jetson.
title: Desplegar Frigate en Jetson 
image: https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/3.png
slug: /es/deploy_frigate_on_jetson
last_update:
  date: 08/29/2024
  author: kourosh
---

# Desplegar Frigate en un dispositivo reComputer(NVIDIA Jetson)

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/3.png)

Frigate es un NVR (Grabador de Video en Red) de código abierto con Detección de Objetos en Tiempo Real para cámaras IP. En esta guía, recorreremos los pasos para desplegar Frigate en un dispositivo NVIDIA Jetson. NVIDIA Jetson es una plataforma de IA de borde que permite el despliegue eficiente de cargas de trabajo de IA. Combinar Frigate con Jetson aprovecha el aprendizaje automático acelerado por hardware para procesar eficientemente flujos de video y detectar objetos.

Objetivos del Proyecto:

* Configurar un entorno Frigate en un dispositivo NVIDIA Jetson para el procesamiento eficiente de video.
* Habilitar la detección de objetos en tiempo real en flujos de video de múltiples cámaras IP.

Al final de este proyecto, los usuarios tendrán un sistema de vigilancia completamente operativo que puede detectar objetos en tiempo real, enviar alertas e integrarse con otros dispositivos inteligentes. Esta solución no solo mejora la seguridad sino que también asegura que el procesamiento se realice localmente, preservando la privacidad y reduciendo la dependencia de servicios en la nube.

<p style={{textAlign: 'center'}}><img src="https://docs.frigate.video/assets/images/media_browser-min-1f8a7c629d1bdbee1c78f99a97a0219a.png" alt="pir" width={900} height="auto" /></p>

## Preparación del Hardware

Para desplegar exitosamente Frigate en un NVIDIA Jetson usando una cámara IP, necesitarás preparar los siguientes componentes de hardware. Esta sección describe el equipo necesario y proporciona breves descripciones para ayudarte a comenzar.

### 1. Dispositivo NVIDIA Jetson:

Un dispositivo NVIDIA Jetson sirve como la unidad de procesamiento central para ejecutar Frigate y realizar detección de objetos en tiempo real. Dependiendo de tus requisitos y presupuesto, puedes elegir entre varios modelos:

* Jetson Nano: Una opción rentable con suficiente poder de procesamiento para configuraciones de vigilancia a pequeña escala con unas pocas cámaras.
* Jetson Xavier NX: Ofrece más potencia y puede manejar despliegues a mayor escala o tareas de detección de objetos más complejas.
* Serie Jetson Orin: La opción más potente, adecuada para aplicaciones de alto rendimiento y configuraciones con múltiples cámaras.

:::info
**Accesorios Necesarios**:

* Fuente de alimentación apropiada para el modelo Jetson.
* Tarjeta MicroSD (para Jetson Nano y Orin) o eMMC (para Jetson Xavier NX/AGX Orin) con al menos 32GB de capacidad.
* Una solución de enfriamiento (ej., un ventilador o disipador de calor) para asegurar temperaturas de operación óptimas.
Monitor, teclado y ratón para la configuración inicial.
:::


### 2. Cámara IP:
Las cámaras IP proporcionan flujos de video de alta calidad esenciales para la detección efectiva de objetos. Necesitarás al menos una cámara IP Dahua compatible con RTSP (Protocolo de Transmisión en Tiempo Real), que permite a Frigate recibir flujos de video.

### 3. Resumen del Hardware Requerido:

* Dispositivo Jetson: Jetson Nano, Xavier NX, o serie Orin
* Cámara IP: Compatible con RTSP
* Tarjeta MicroSD/eMMC: Al menos 32GB (para configuración de Jetson)
* Fuente de Alimentación y Enfriamiento: Para dispositivo Jetson
* Equipo de Red: Cables Ethernet
* Opcional: Almacenamiento externo, inyector/switch PoE

## Preparación del Software

Configurar el entorno de software es un paso crucial para desplegar Frigate en tu dispositivo NVIDIA Jetson. Esta sección describe los componentes de software necesarios y los pasos de instalación para asegurar que tu sistema esté listo para ejecutar Frigate y procesar flujos de video desde la cámara IP.

### 1. Sistema Operativo(Jetpack):

Asegúrate de que tu dispositivo NVIDIA Jetson esté ejecutando la última versión del SDK NVIDIA JetPack. JetPack proporciona un sistema operativo basado en Linux junto con bibliotecas y herramientas esenciales para el desarrollo de IA.

* Descargar el SDK JetPack: Visita la página de Descargas de NVIDIA JetPack para descargar el último SDK JetPack compatible con tu dispositivo Jetson (Usé Jetpack 5.1.3 con Xavier NX).

* Flashear el Dispositivo Jetson: Usa el SDK Manager para flashear la imagen de JetPack en la tarjeta SD del dispositivo Jetson (para Jetson Nano) o eMMC (para Jetson Xavier NX/AGX Orin).

Para las guías de flasheo de dispositivos Jetson de Seeed, por favor consulta los siguientes enlaces:

* [reComputer J1010 | J101](https://wiki.seeedstudio.com/es/reComputer_J1010_J101_Flash_Jetpack)
* [reComputer J2021 | J202](https://wiki.seeedstudio.com/es/reComputer_J2021_J202_Flash_Jetpack)
* [reComputer J1020 | A206](https://wiki.seeedstudio.com/es/reComputer_J1020_A206_Flash_JetPack)
* [reComputer J4012 | J401](https://wiki.seeedstudio.com/es/reComputer_J4012_Flash_Jetpack)
* [A203 Carrier Board](https://wiki.seeedstudio.com/es/reComputer_A203_Flash_System)
* [A205 Carrier Board](https://wiki.seeedstudio.com/es/reComputer_A205_Flash_System)
* [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/es/Jetson_Xavier_AGX_H01_Driver_Installation)
* [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/es/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

### 2. Actualizaciones del Sistema y Dependencias:

Después de configurar el sistema operativo, realiza una actualización del sistema e instala las dependencias requeridas.

:::info
**Actualizar el Sistema: Abre una terminal en el dispositivo Jetson y ejecuta:**

```
sudo apt-get update && sudo apt-get upgrade
```

**Instalar Dependencias Adicionales: Instala las dependencias comunes requeridas para construir y ejecutar software en Jetson:**
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

Frigate se ejecuta como un contenedor de Docker. Instala Docker en el dispositivo Jetson usando los siguientes pasos:

##### 1. instalar docker:
* Instalar las dependencias de Docker:
```
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
```
* Agregar la clave GPG oficial de Docker:
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
* Agregar el repositorio de Docker:
```
sudo add-apt-repository "deb [arch=arm64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```
* instalar docker:
```
sudo apt-get update
sudo apt-get install -y docker-ce
```

##### 2. Instalación de Docker Compose:
Docker Compose se usa para definir y ejecutar aplicaciones Docker multi-contenedor, como Frigate y manejar archivos yaml para ejecutar contenedores docker.

*  Instalar Docker Compose: Usa el siguiente comando para instalar Docker Compose:
```
sudo apt-get install -y python3-pip
sudo pip3 install docker-compose
```
*  Verificar la Instalación de Docker Compose:
```
docker-compose --version
```


##### 3. NVIDIA Container Toolkit:

Para instalar el Nvidia container toolkit puedes ir al enlace en la referencia. basado en tu sistema puedes seguir las siguientes pautas de instalación. necesitas instalarlo para usar la GPU en el contenedor docker.

##### 4. Configuración de Frigate:
*  Configurar el Directorio de Configuración: Crea un directorio para contener los archivos de configuración de Frigate:
```
mkdir ~/frigate
cd ~/frigate
```
*  Crear Archivos de Configuración: Necesitarás crear un archivo docker-compose.yml y un archivo config.yml dentro del directorio ~/frigate. Estos archivos definirán cómo se despliega Frigate y cómo se conecta a tus cámaras IP. docker-compose.yml Define los servicios de Docker para Frigate y config.yml: Especifica la configuración de Frigate como flujos de cámara, configuración de detección e integración con MQTT.

Al completar estos pasos, tu dispositivo NVIDIA Jetson estará completamente preparado para ejecutar Frigate, y estarás listo para proceder con el despliegue de Frigate e integrar tu cámara IP para detección de objetos en tiempo real.

## Comenzando

Ahora que tienes tu hardware preparado y el entorno de software configurado, es hora de desplegar Frigate en tu dispositivo NVIDIA Jetson y conectarlo a tu cámara IP Dahua. Sigue estos pasos para comenzar con tu despliegue:

### 1. Descargar la imagen docker de Frigate:

En el sitio web de Frigate, ejecutar en Docker con compose es el método de instalación recomendado. Primero, necesitas descargar la imagen Docker de Frigate optimizada para TensorRT. Esta imagen está específicamente diseñada para aprovechar las capacidades de GPU de los dispositivos NVIDIA Jetson para una detección de objetos eficiente.

Aquí estamos trabajando en JP5.1.3 y la solicitud de descarga es:
```
docker pull ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5
```

Las etiquetas oficiales de imagen docker para la versión estable actual son:

* stable : Compilación estándar de Frigate para amd64 y compilación optimizada de Frigate para RPi para arm64
* stable-standard-arm64 : Compilación estándar de Frigate para arm64
* stable-tensorrt : Compilación de Frigate específica para dispositivos amd64 ejecutando una GPU nvidia

Las etiquetas de imagen docker soportadas por la comunidad para la versión estable actual son:

* stable-tensorrt-jp5 : Compilación de Frigate optimizada para dispositivos nvidia Jetson ejecutando Jetpack 5
* stable-tensorrt-jp4 : Compilación de Frigate optimizada para dispositivos nvidia Jetson ejecutando Jetpack 4.6
* stable-rk : Compilación de Frigate para SBCs con SoC Rockchip
* stable-rocm : Compilación de Frigate para GPUs AMD e iGPUs

Puedes usar cada una de estas etiquetas basándote en tu despliegue. pero aquí estamos trabajando con Jetson y tensorrt y Jetpack 5.1.3 así que necesitamos descargar 'stable-tensorrt-jp5'. esta imagen docker contiene todos los paquetes que necesitas para ejecutar Frigate y no necesitas instalar tensorrt o etc.

### 2. Preparar los Archivos de Configuración de Frigate:

Antes de comenzar el despliegue, necesitas configurar Frigate para trabajar con tu configuración específica, incluyendo flujos de cámara y configuraciones de detección.

archivo config.yml: Este archivo contendrá la configuración para Frigate, incluyendo configuraciones de cámara y parámetros de detección. Crea un nuevo archivo llamado config.yml usando un editor de texto, y añade el siguiente contenido. Esta configuración configura Frigate en un dispositivo NVIDIA Jetson usando TensorRT para detección eficiente de objetos desde una cámara IP Dahua.
```
mqtt:
  enabled: False

cameras:
  dummy_camera: # <--- esto será cambiado a tu cámara real más tarde
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
    device: 0 #Este es el predeterminado, selecciona la primera GPU

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

Los puntos clave incluyen:

**MQTT Deshabilitado**: La integración MQTT está desactivada, por lo que Frigate no enviará eventos de detección vía MQTT.

**Configuración de Cámara**: Una cámara de marcador de posición llamada dummy_camera está habilitada, usando aceleración de hardware para flujos de video H.264 vía FFmpeg. Se conecta a la cámara IP Dahua usando una URL RTSP para detección.

**Vista Birdseye Habilitada**: Proporciona una vista general mostrando solo objetos detectados de todos los feeds de cámara.

**Detector TensorRT**: Usa TensorRT para inferencia en la GPU primaria, optimizando la velocidad y eficiencia de detección.

**Detalles del Modelo**: Especifica un modelo YOLOv7 optimizado para TensorRT para detección de objetos, con un tamaño de entrada de 320x320 y formato RGB.

**Configuraciones de Detección**: Procesa video a 20 fotogramas por segundo, con una resolución de detección de 1280x720.
Seguimiento de Objetos: Configurado para rastrear solo personas, reduciendo la carga computacional y enfocándose en detección relevante.

### 2. Preparar el Archivo docker-compose.yml:
Este archivo define el servicio Frigate y cómo será ejecutado usando Docker Compose. Crea un nuevo archivo llamado docker-compose.yml en el mismo directorio con el siguiente contenido:
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
      #- type: tmpfs # Opcional: 1GB de memoria, reduce el desgaste de SSD/Tarjeta SD
        #target: /tmp/cache
        #tmpfs:
          #size: 1000000000
    ports:
      - "5000:5000"
      - "8554:8554"
    image: ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5
```
El fragmento de código proporcionado parece ser una configuración para el servicio Frigate dentro de una configuración de Docker Compose. Frigate es un sistema de videovigilancia de código abierto impulsado por IA que puede ser usado para detectar y rastrear objetos en tiempo real.

Aquí hay un desglose de la configuración:

1. **services**: Esta sección define los servicios que serán parte de la configuración de Docker Compose.

2. **frigate**: Este es el nombre del servicio para el contenedor Frigate.

3. **privileged: true**: Esto otorga al contenedor Frigate acceso privilegiado, que a menudo es requerido para acceder a dispositivos de hardware como cámaras.

4. **environment**: Esta sección establece dos variables de entorno para el contenedor Frigate:
   - `YOLO_MODELS=yolov7-320`: Especifica el modelo YOLO (You Only Look Once) a ser usado para detección de objetos.
   - `USE_FP16=false`: Deshabilita el uso de precisión de punto flotante de 16 bits, que puede mejorar el rendimiento en algunos hardware.

5. **container_name: frigate**: Establece el nombre del contenedor Frigate.

6. **runtime: nvidia**: Especifica el entorno de tiempo de ejecución a ser usado para el contenedor Frigate, en este caso, el tiempo de ejecución NVIDIA para procesamiento acelerado por GPU.

7. **volumes**: Monta los siguientes directorios:
   - `/home/jetson/frigate/config:/config`: Monta el directorio de configuración local al directorio `/config` del contenedor.
   - `/home/jetson/frigate/storage:/media/frigate`: Monta el directorio de almacenamiento local al directorio `/media/frigate` del contenedor.
   - Las líneas comentadas muestran una configuración opcional para usar un tmpfs (sistema de archivos en memoria) para caché, que puede ayudar a reducir el desgaste en dispositivos de almacenamiento.

8. **ports**: Expone los siguientes puertos:
   - `5000:5000`: Mapea el puerto 5000 del contenedor al puerto 5000 del host.
   - `8554:8554`: Mapea el puerto 8554 del contenedor al puerto 8554 del host.

9. **image: ghcr.io/blakeblackshear/frigate:stable-tensorrt-jp5**: Especifica la imagen de Docker que se utilizará para el contenedor de Frigate, en este caso, la etiqueta `stable-tensorrt-jp5` del repositorio `blakeblackshear/frigate` en GitHub Container Registry.

Esta configuración establece un servicio de Frigate dentro de un entorno de Docker Compose, proporcionando una forma de ejecutar el sistema de videovigilancia Frigate con configuraciones personalizadas y soporte de aceleración de hardware.

### 3. Desplegar Frigate Usando Docker Compose:
Con los archivos de configuración configurados y la imagen de Docker descargada, ahora puedes desplegar Frigate usando Docker Compose.

1.  Navegar al Directorio de Frigate: Asegúrate de estar en el directorio donde creaste los archivos de configuración:
```
cd ~/frigate
```

2.  Iniciar Frigate con Docker Compose: Ejecuta el siguiente comando para iniciar Frigate:
```
docker-compose up -d
```
Este comando inicia el servicio de Frigate en modo desconectado. El contenedor de Docker ahora se ejecutará en segundo plano.

3.  Verificar que Frigate esté Ejecutándose: Verifica que el contenedor de Frigate esté ejecutándose usando:
```
docker ps
```
4.  Después de ejecutar docker puedes ver los logs de Tensorrt que significa que Frigate está ejecutándose en GPU.

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/1.png)


### 4. Acceder a la Interfaz Web de Frigate:
Una vez que Frigate esté funcionando, puedes acceder a la interfaz web para monitorear las transmisiones de video y configurar ajustes:

1.  Abrir un Navegador Web: En un dispositivo conectado a la misma red que tu dispositivo Jetson, abre un navegador web.
2.  Ingresar la Dirección IP del Dispositivo Jetson: En la barra de direcciones, ingresa la dirección IP de tu dispositivo Jetson seguida del puerto 5000 (por ejemplo, `http://jetson-ip-address:5000` o `http://127.0.0.1:5000`).
3. Ver el Panel de Control: El panel de control de Frigate mostrará transmisiones de video en vivo de la(s) cámara(s) IP Dahua conectada(s), eventos de detección y opciones de configuración.
4.  Ahora puedes verificar que el Jetson esté usando GPU para detección con jtop o en el sistema frigate. A continuación podemos ver que la parte de detección está ejecutándose aproximadamente 33ms por cada frame.

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/2.png)

![image1](https://files.seeedstudio.com/wiki/reComputer/Application/Deploy_Frigate_On_Jetson/4.png)

## Solución de Problemas

Algunos problemas pueden surgir en el proceso de conexión de hardware, depuración de software o carga. Especialmente al ejecutar docker. puedes usar docker log para superar los errores.
```
docker logs frigate
```

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

## Referencias
1.  [Sitio web de Frigate](https://frigate.video/)
2.  [Github de Frigate](https://github.com/blakeblackshear/frigate)
3.  [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)