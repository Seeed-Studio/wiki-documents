---
description: Comenzando con Docker
title: Comenzando con Docker
keywords:
  - Edge
  - reComputer Application
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/jetson-docker-getting-started
last_update:
  date: 01/04/2023
  author: w0x7ce
---

# Comenzando con Docker

> Esta es una republicación del [blog](https://collabnix.com/getting-started-with-docker-on-seeed-studios-recomputer-powered-by-nvidia-jetson) escrito por [Ajeet](https://collabnix.com/author/ajeetraina) en [collabnix.com](https://collabnix.com). Todos los créditos van para él.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/1.jpeg" /></div>

La semana pasada, tuve la suerte de obtener acceso al último dispositivo de IA de borde [reComputer J1020](https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html) de Seeed Studio por primera vez. El reComputer J1020 está alimentado por el kit de desarrollo Jetson Nano. Es una computadora pequeña, del tamaño de una mano y poderosa que trae el poder de la IA moderna para desarrolladores embebidos. Este pequeño dispositivo de $259 está construido alrededor del sistema en módulo NVIDIA Jetson Nano y diseñado para aplicaciones de IA de borde. Este dispositivo te permite ejecutar múltiples redes neuronales en paralelo para aplicaciones como clasificación de imágenes, detección de objetos, segmentación y procesamiento de voz. Con módulos de extensión ricos, periféricos industriales y gestión térmica, el reComputer J1020 está listo para ayudarte a acelerar y escalar el producto de IA de próxima generación mediante el despliegue de modelos DNN populares y marcos de ML al borde e inferencia con alto rendimiento, para tareas como clasificación en tiempo real y detección de objetos, estimación de pose, segmentación semántica y procesamiento de lenguaje natural (NLP).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/2.jpg" /></div>

## ¿Qué es único sobre el reComputer J1020?

[Seeed Studio reComputer J1020](https://wiki.seeedstudio.com/es/reComputer_Jetson_Series_Introduction/#recomputer-j1020) viene con todo lo que necesitas para comenzar a construir tu aplicación basada en IA. Comparado con el kit de desarrollo Jetson Nano suministrado por NVIDIA, no requiere flashear el sistema operativo en una tarjeta SD desde cero. Viene con el SO Ubuntu ya preinstalado en 16 GB eMMC. El reComputer preinstalado con Jetpack 4.6 incluye un paquete de soporte de placa (BSP), SO Linux, NVIDIA CUDA, cuDNN y librerías de software TensorRT para aprendizaje profundo, visión por computadora, computación GPU, procesamiento multimedia, etc. Soporta toda la [pila de software Jetson](https://developer.nvidia.com/embedded/develop/software) y varias [herramientas de desarrollador](https://wiki.seeedstudio.com/es/Jetson-AI-developer-tools) para [construir aplicaciones de IA rápidas y robustas](https://wiki.seeedstudio.com/es/Jetson-AI-developer-tools) proporcionadas por los socios de IA de borde de Seeed.

## Algunas características notables incluyen

- 128 núcleos NVIDIA CUDA® – entregan 0.5 TFLOPs (FP16) para ejecutar marcos y modelos de IA para aplicaciones como clasificación de imágenes, detección de objetos, segmentación y procesamiento de voz.
- Equipado con procesador Armv8
- Viene con NVIDIA Tegra X1(nvgpu)/Integrado
- Tamaño de disco de 16GB
- 4GB de memoria
- Tipo de SO de 64 bits
- Ubuntu 18.04.5
- Seeed Studio reComputer viene con el sistema JetPack 4.6 ya instalado
- No necesitas flashear tarjeta SD, viene con el sistema operativo ya instalado
- CUDA 10.2.300 soportado
- Arquitectura CUDA: 5.3
- Versión OpenCV: 4.1.1

[Aprende más sobre el diseño de hardware del reComputer](https://wiki.seeedstudio.com/es/reComputer_Jetson_Series_Hardware_Layout)

## Componentes del reComputer

Viene con la siguiente lista de partes:

- NVIDIA Jetson Nano x1
- Placa portadora de referencia Seed x1
- Disipador de calor de aluminio pasivo x1
- Carcasa de aluminio x1
- Adaptador de corriente de 12V x1
- 4x puertos USB 3.0
- 2x puertos HDMI
- Conector de cámara MIPI-CSI
- Encabezado de control y UART
- Encabezado de expansión de 40 pines (GPIO, I2C, Header)
- SODIMM de 260 pines
- MicroUSB
- Puerto Ethernet Gigabit
- Luces LED

## Configuración de hardware

Para comenzar, requerirás los siguientes conectores mínimos en su lugar:

- Cable de alimentación
- Módulo Wifi / Cable Ethernet Gigabit
- Receptor USB para teclado y ratón WiFi
- Conectividad HDMI a tu pantalla

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/3.jpg" /></div>

## Ejecutando CUDA deviceQuery

```sh
cd /usr/local/cuda/samples/1_Utilities/deviceQuery
sudo make 
./deviceQuery
```

Aquí están los resultados:

```sh
./deviceQuery Starting...

 CUDA Device Query (Runtime API) version (CUDART static linking
Detected 1 CUDA Capable device(s)

Device 0: "NVIDIA Tegra X1"
  CUDA Driver Version / Runtime Version          10.2 / 10.2
  CUDA Capability Major/Minor version number:    5.3
  Total amount of global memory:                 3956 MBytes (4148273152 bytes)
  ( 1) Multiprocessors, (128) CUDA Cores/MP:     128 CUDA Cores
  GPU Max Clock rate:                            922 MHz (0.92 GHz)
  Memory Clock rate:                             13 Mhz
  Memory Bus Width:                              64-bit
  L2 Cache Size:                                 262144 bytes
  Maximum Texture Dimension Size (x,y,z)         1D=(65536), 2D=(65536, 65536), 3D=(4096, 4096, 4096)
  Maximum Layered 1D Texture Size, (num) layers  1D=(16384), 2048 layers
  Maximum Layered 2D Texture Size, (num) layers  2D=(16384, 16384), 2048 layers
  Total amount of constant memory:               65536 bytes
  Total amount of shared memory per block:       49152 bytes
  Total number of registers available per block: 32768
  Warp size:                                     32
  Maximum number of threads per multiprocessor:  2048
  Maximum number of threads per block:           1024
  Max dimension size of a thread block (x,y,z): (1024, 1024, 64)
  Max dimension size of a grid size    (x,y,z): (2147483647, 65535, 65535)
  Maximum memory pitch:                          2147483647 bytes
  Texture alignment:                             512 bytes
  Concurrent copy and kernel execution:          Yes with 1 copy engine(s)
  Run time limit on kernels:                     Yes
  Integrated GPU sharing Host Memory:            Yes
  Support host page-locked memory mapping:       Yes
  Alignment requirement for Surfaces:            Yes
  Device has ECC support:                        Disabled
  Device supports Unified Addressing (UVA):      Yes
  Device supports Compute Preemption:            No
  Supports Cooperative Kernel Launch:            No
  Supports MultiDevice Co-op Kernel Launch:      No
  Device PCI Domain ID / Bus ID / location ID:   0 / 0 / 0
  Compute Mode:
     < Default (multiple host threads can use ::cudaSetDevice() with device simultaneously) >
deviceQuery, CUDA Driver = CUDART, CUDA Driver Version = 10.2, CUDA Runtime Version = 10.2, NumDevs = 1

Result = PASS
```

## Ejecutando Docker en reComputer Jetson Nano

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/jetson-docker/4.png" /></div>

[Docker](https://www.docker.com) es un conjunto de herramientas de desarrollo de software para crear, compartir y ejecutar contenedores individuales. Es una plataforma de contenedorización que empaqueta tu aplicación y todas sus dependencias juntas en forma de un contenedor docker para asegurar que tu aplicación funcione sin problemas en cualquier entorno. El Contenedor Docker es una unidad estandarizada que puede ser creada al vuelo para desplegar una aplicación o entorno particular.

Desarrollar cualquier tipo de aplicación hoy en día es complejo. Es mucho más que escribir código. Hay multitud de lenguajes de programación, marcos de trabajo web, arquitecturas complejas, e interfaces discontinuas entre herramientas para cada etapa del ciclo de vida y eso crea una enorme complejidad. Docker simplifica y acelera tu flujo de trabajo, mientras da a los desarrolladores la libertad de innovar con su elección de herramientas, pilas de aplicaciones, y entornos de despliegue para cada proyecto. Te permite separar tus aplicaciones de tu infraestructura para que puedas entregar software rápidamente.

Docker es oficialmente soportado en reComputer J1020, un kit de desarrollo alimentado por Jetson Nano. El kit viene con la última versión de Docker preinstalada por defecto. Puedes verificar la versión de Docker ejecutando el siguiente comando:

```sh
sudo docker version

Client: Docker Engine - Community
 Cloud integration: v1.0.25
 Version:           20.10.17
 API version:       1.41
 Go version:        go1.17.11
 Git commit:        100c701
 Built:             Mon Jun  6 23:02:19 2022
 OS/Arch:           linux/arm64
 Context:           default
 Experimental:      true


Server: Docker Engine - Community
 Engine:
  Version:          20.10.17
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.17.11
  Git commit:       a89b842
  Built:            Mon Jun  6 23:00:46 2022
  OS/Arch:          linux/arm64
  Experimental:     false
 containerd:
  Version:          1.6.6
  GitCommit:        10c12954828e7c7c9b6e0ea9b0c02b01407d3ae1
 runc:
  Version:          1.1.2
  GitCommit:        v1.1.2-0-ga916309
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```

## Instalando Docker Compose

reComputer Jetson no viene con Docker compose instalado. Puedes seguir los siguientes pasos para instalar Docker Compose en tu sistema:

```sh
export DOCKER_COMPOSE_VERSION=2.6.0
sudo apt-get install libhdf5-dev
sudo apt-get install libssl-dev
sudo pip3 install docker-compose=="${DOCKER_COMPOSE_VERSION}"
apt install python3
apt install python3-pip
pip install docker-compose
```

## Instalar la última versión del kit de herramientas CUDA

```sh
wget https://developer.download.nvidia.com/compute/cuda/repos/ubuntu1804/sbsa/cuda-ubuntu1804.pin
sudo mv cuda-ubuntu1804.pin /etc/apt/preferences.d/cuda-repository-pin-600
wget https://developer.download.nvidia.com/compute/cuda/11.3.1/local_installers/cuda-repo-ubuntu1804-11-3-local_11.3.1-465.19.01-1_arm64.deb
sudo dpkg -i cuda-repo-ubuntu1804-11-3-local_11.3.1-465.19.01-1_arm64.deb
sudo apt-key add /var/cuda-repo-ubuntu1804-11-3-local/7fa2af80.pub
sudo apt-get update
sudo apt-get -y install cuda
```

## Verificar el tiempo de ejecución de Docker

```sh
docker info | grep runtime

 Runtimes: nvidia runc io.containerd.runc.v2 io.containerd.runtime.v1.linuxs
```

## Ejecutando tu primer Contenedor de Python

Probemos una imagen simple de Python basada en Arm Docker ejecutando el siguiente comando:

```sh
sudo docker run arm64v8/python:slim ls
```

## Monitoreo de CPU, GPU y Memoria usando contenedor JTOP Docker

En esta sección, verás cómo configurar una utilidad de monitoreo del sistema para monitorear CPU, RAM y GPU. Utilizaremos la utilidad JTOP. Jtop es una utilidad de monitoreo del sistema que se ejecuta en la terminal y ve y controla en tiempo real el estado de tu kit reComputer Jetson Nano, el estado y la frecuencia de CPU, RAM y GPU. Verás cómo puedes contenerizar la utilidad. Comencemos –

Primero, crea un Dockerfile con el siguiente contenido:

```sh
FROM python:3-alpine

RUN apk update \

    && apk --no-cache add bash \

    && pip install jetson-stats \

    && rm -rf /var/cache/apk/*
```

La primera línea muestra que hemos seleccionado python:3-alpine como imagen base. La segunda línea instala jetson-stats y los paquetes dependientes

## Construyendo la Imagen Docker de JTOP

Usa la CLI de docker build para construir la imagen Docker

```sh
docker build -t ajeetraina/jetson-stats-nano .
```

## Ejecutando el Contenedor Docker de JTOP

Es hora de ejecutar el contenedor Docker pasando –gpus como parámetro y montándolo al socket de jtop.

```sh
docker run --rm -it --gpus all -v /run/jtop.sock:/run/jtop.sock ajeetraina/jetson-stats-nano jtop
```

Verás los siguientes resultados:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/jetson-docker/5.png" /></div>

En nuestra próxima publicación del blog, veremos cómo implementar la identificación de vehículos usando OpenDatacam ejecutándose dentro de un contenedor Docker. ¡Mantente atento!

¡Asegúrate de revisar el siguiente ejemplo de aplicación con tutoriales!

- [Detección de peatones por Edge Impulse](https://www.edgeimpulse.com/blog/recognizing-your-blind-spots-pedestrian-detection-system-with-nvidia-jetson-nano)
- [Detección de cascos de seguridad](https://www.seeedstudio.com/blog/2022/03/03/deploy-hard-hat-detection-for-enforcing-workplace-safety) y construye detección personalizada de EPP
- [Estimación de pose con alwaysAI](https://alwaysai.co/blog/using-pose-estimation-on-the-jetson-nano-with-alwaysai)
- [Detección de anomalías visuales usando NVIDIA Deepstream IoT](https://developer.nvidia.com/gtc/2020/video/s22675-vid)
- [Detección de artículos de tienda minorista](https://www.seeedstudio.com/blog/2022/06/08/retail-store-items-detection-using-yolov5-roboflow-and-node-red)
- [Detección de incendios forestales](https://github.com/Seeed-Studio/node-red-contrib-ml)
- [Detección de animales](https://github.com/Seeed-Studio/node-red-contrib-ml)

Sigue a Ajeet en:

- [Twitter](https://twitter.com/ajeetsraina)
- [LinkedIn](https://www.linkedin.com/in/ajeetsraina)
- [collabnix](https://collabnix.com/author/ajeetraina)

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

