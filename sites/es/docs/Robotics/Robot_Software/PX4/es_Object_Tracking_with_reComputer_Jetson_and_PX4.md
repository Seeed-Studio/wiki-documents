---
description: "Rastrea objetos en un reComputer Jetson y envía la posición a PX4 a través de ROS 2: entrada de profundidad de Gemini 2, detección con YOLO y salida con MAVROS."
title: Seguimiento de objetos con reComputer Jetson y PX4
keywords:
  - NVIDIA
  - PX4
  - ROS
  - Jetson
  - reComputer
  - seguimiento de objetos
  - medición de distancia
  - dron
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.webp
slug: /object_tracking_with_reComputer_jetson_and_pX4
sku: 101090144,100071398
last_update:
  date: 8/08/2025
  author: Zibo
createdAt: '2025-08-08'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/object_tracking_with_reComputer_jetson_and_pX4/
---

## Introducción

<div style={{ textAlign: "justify" }}>
reComputer Mini incorpora un módulo Jetson Orin Nano u Orin NX y ofrece hasta 100 TOPS en una carcasa lo suficientemente pequeña como para montarse en una estructura aérea. Esta configuración lo conecta a PX4 a través de ROS 2, ejecuta detección YOLO con ByteTrack en el flujo de color de Gemini 2 y utiliza el frame de profundidad para medir a qué distancia está el objetivo rastreado del dron.
</div>

<div align="center">
  <img alt="Dos unidades reComputer Mini con antenas Wi‑Fi, con distintivo NVIDIA Jetson Orin Nano / Orin NX" width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

## Requisitos previos

- Serie de productos reComputer
- Controlador de vuelo PX4
- JetPack 6.2 y [ROS 2 Humble](https://wiki.seeedstudio.com/es/install_ros2_humble/) instalados
- [Cámara 3D Orbbec Gemini 2](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html)

## Configurar el entorno de comunicación PX4 de ROS2

Para implementar la monitorización del estado del dron en Jetson, primero consulta [este wiki](https://wiki.seeedstudio.com/es/control_px4_with_recomputer_jetson/) para configurar el entorno de comunicación de ROS2 para PX4.

## Configurar el SDK de Python de Gemini 2

La Orbbec Gemini 2 es una cámara 3D RGB‑D de alta precisión que captura datos sincronizados de profundidad y color para aplicaciones como robótica, escaneado 3D y visión por computador.

**Paso 1.** Instala las dependencias y clona el repositorio:

```bash
sudo apt-get install python3-dev python3-venv python3-pip python3-opencv
#install pybind11
pip install pybind11
#clone the repository
git clone https://github.com/orbbec/pyorbbecsdk.git
#Install the necessary packages
cd pyorbbecsdk
pip install -r requirements.txt
```

**Paso 2.** Compila e instala el proyecto:

```bash
mkdir build && cd build
#Build the project
cmake \
  -Dpybind11_DIR=`pybind11-config --cmakedir` \
  -DPython3_EXECUTABLE=/usr/bin/python3.10 \
  -DPython3_INCLUDE_DIR=/usr/include/python3.10 \
  -DPython3_LIBRARY=/usr/lib/aarch64-linux-gnu/libpython3.10.so \
  ..
make -j4
sudo make install
#apply the python SDK
pip install wheel
python setup.py bdist_wheel
pip install dist/*.whl
#Configure udev_rules
export PYTHONPATH=$PYTHONPATH:$(pwd)/install/lib/
sudo bash ./scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

## Leer los topics publicados por px4 en ROS2

Conecta el controlador PX4 al puerto serie UART1 de Jetson

<div align="center">
    <img alt="Controlador PX4 cableado al puerto serie UART1 en el Jetson para el enlace Micro-XRCE-DDS" width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Object_Tracking/px4_mini.jpg" />
</div>

Abre una terminal e inicia el Agent en el Jetson:

```bash
cd /path/to/Micro-XRCE-DDS-Agent/build
./MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600
```

Usando el siguiente comando y abriendo otra terminal, puedes ver el topic de estado publicado por px4:

```bash
ros2 topic list | grep "/fmu/out/"
```

<div align="center">
    <img alt="lista de topics de ros2 filtrada en /fmu/out/ mostrando los topics de estado de PX4" width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Object_Tracking/px4_topic.png" />
</div>

:::info
Leyendo el contenido de los siguientes topics, puedes obtener la información básica de estado del dron:

- /fmu/out/failsafe_flags -> Indicadores de las condiciones actuales de failsafe.
- /fmu/out/sensor_combined -> Datos sin procesar sincronizados de IMU, magnetómetro y barómetro.
- /fmu/out/timesync_status -> Estado de la sincronización de tiempo con fuentes externas.
- /fmu/out/vehicle_attitude -> Orientación actual del vehículo como un cuaternión.
- /fmu/out/vehicle_control_mode -> Modos de control y navegación activos actuales.
- /fmu/out/vehicle_local_position -> Posición y velocidad en el marco local NED.
- /fmu/out/vehicle_odometry -> Datos completos de pose y velocidad de 6 DoF.
- /fmu/out/vehicle_status -> Estado general del vehículo, modo y disponibilidad.

:::

## Configurar rápidamente el entorno de detección de objetos

**Paso 1.** Según tu versión de Jetpack, puedes consultar este wiki para [instalar PyTorch](https://wiki.seeedstudio.com/es/install_torch_on_recomputer/) y Torchvision.

**Paso 2.** Instala las dependencias y paquetes necesarios:

```bash
sudo apt-get update
sudo apt-get -y install libcusparselt0 libcusparselt-dev
pip install ultralytics
pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.20.0-cp310-cp310-linux_aarch64.whl
pip install numpy==1.23.5
```

**Paso 3.** Descarga el modelo preentrenado YOLOv11n:

```bash
wget -O yolo11n.pt https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n.pt
```

**Paso 4.** Exporta el modelo de engine para usar inferencia con tensorrt:

```bash
yolo export model=/path/to/yolo11n.pt format=engine device=0 half=True dynamic=True
```

## Instalar el paquete de ROS2 para seguimiento de objetivos

```bash
cd /path/to/your/work_space/src

git clone https://github.com/zibochen6/ROS2-package-for-target-tracking.git

cd ..
# build the package
colcon build
```

:::note
Antes de ejecutar el nodo de detección, debes mover el archivo de modelo de engine generado previamente al directorio `/ROS2-package-for-target-tracking/models`. Además, debes clonar los paquetes `px4_msgs` y `px4_ros_com` (consulta [este wiki](https://wiki.seeedstudio.com/es/control_px4_with_recomputer_jetson/#step-2-build-the-px4_msgs-ros-2-package)) en el directorio src de tu espacio de trabajo.

La estructura de tu directorio src debería ser la siguiente:

```bash
└── src
    ├── detect
    ├── px4_msgs
    └── px4_ros_com
```

:::

Para ejecutar el paquete de ROS2 para el funcionamiento normal del seguimiento de objetivos, necesitas abrir una terminal e iniciar MicroXRCEAgent:

```bash
./MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600

# Open another terminal and run the detection node
cd /path/to/your/work_space
source install/setup.bash
ros2 run detect detect
```

<div class="video-container">
  <iframe width="853" height="480" src="https://www.youtube.com/embed/YG1XmZL6kpU" title="🚁 Seguimiento autónomo de objetivos con dron por reComputer Mini" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style={{ textAlign: "justify" }}>
El vídeo anterior presenta un ejemplo de cómo lograr el seguimiento de objetivos en un dron. Localiza el objetivo mediante detección de objetivos y utiliza el algoritmo de seguimiento ByteTrack para rastrear con precisión el objetivo específico. Al mismo tiempo, se utilizan imágenes de profundidad para estimar la distancia entre el dron y el objetivo.
</div>

## Preguntas frecuentes

**¿Qué hace el Jetson y qué hace PX4?**
El Jetson ejecuta la detección YOLO con ByteTrack y lee la distancia del frame de profundidad de Gemini 2, luego envía la posición del objetivo a PX4 a través de ROS 2. PX4 sigue pilotando la estructura aérea; esta configuración no sustituye al controlador de vuelo.

**¿Qué puerto serie transporta el enlace ROS 2 hacia PX4?**
`/dev/ttyTHS1` a 921600 baudios, a través de Micro-XRCE-DDS Agent: `./MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600`. Ejecuta primero el agent y luego inicia el nodo de detección en una segunda terminal.

**¿Cómo sé que el enlace está activo?**
`ros2 topic list | grep "/fmu/out/"` debería listar `vehicle_status`, `vehicle_local_position`, `vehicle_attitude` y el resto de los topics de estado de PX4. Si no aparece ningún topic, significa que el agent o el cableado están mal, no el detector.

**¿Qué versión de JetPack utiliza esta configuración?**
JetPack 6.2 con ROS 2 Humble, además de la Orbbec Gemini 2 y las reglas udev de `./scripts/install_udev_rules.sh`. El nodo de detección se compila en un espacio de trabajo ROS 2 y necesita que `PYTHONPATH` se amplíe a `install/lib/`.

## Recursos relacionados

- [Cámara 3D Orbbec Gemini 2 en ROS 2](/es/orbbec_gemini2/)
- [Emparejar la Gemini 2 con YOLOv11 para medición de distancia](/es/yolov11_with_depth_camera/)
- [Instalar ROS 2 Humble en reComputer](/es/install_ros2_humble/)
- [Página de producto de Orbbec Gemini 2](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
