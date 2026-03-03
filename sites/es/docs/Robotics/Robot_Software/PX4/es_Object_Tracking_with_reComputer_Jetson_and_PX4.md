---
description: El reComputer Mini, impulsado por NVIDIA Jetson Orin Nano/Orin NX, es una computadora de IA compacta diseñada para drones para realizar seguimiento de objetivos en tiempo real mediante la integración del controlador de vuelo PX4, ROS 2, y la cámara 3D Orbbec Gemini 2. Esta configuración involucra configurar la comunicación ROS2 para PX4, instalar el SDK de Python Gemini 2 para capturar datos RGB-D sincronizados, y usar un modelo YOLOv11n exportado con TensorRT para detección optimizada. El paquete ROS2 combina la detección YOLO con el algoritmo ByteTrack para seguimiento preciso de múltiples objetos, mientras que los datos de profundidad estiman la distancia entre el dron y el objetivo, permitiendo un seguimiento preciso de drones en tiempo real durante el vuelo.
title: Seguimiento de Objetos con reComputer Jetson y PX4
keywords:
- NVIDIA
- PX4
- ROS
- Jetson
- reComputer
- object tracking
- distance measure
- drone
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.webp
slug: /es/object_tracking_with_reComputer_jetson_and_pX4
sku: 101090144,100071398
last_update:
  date: 8/08/2025
  author: Zibo
---

## Introducción

<div style={{ textAlign: "justify" }}>
reComputer Mini es una computadora de IA diminuta impulsada por el módulo NVIDIA Jetson Orin Nano/Orin NX, que ofrece hasta 100 TOPS de rendimiento de IA.
Gracias a su diseño compacto, es altamente adecuado para ser instalado en drones para manejar algunas tareas de IA. Este Wiki te mostrará cómo usar reComputer y px4 para lograr seguimiento de objetivos en tiempo real en drones.
</div>

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

## Prerrequisitos

- Productos de la serie reComputer
- Controlador de vuelo PX4
- Jetson Pack 6.2 y [ROS 2 Humble](https://wiki.seeedstudio.com/es/install_ros2_humble/) han sido instalados
- [Cámara 3D Orbbec Gemini 2](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html)

## Configurar el entorno de comunicación PX4 de ROS2

Para implementar el monitoreo del estado del dron en Jetson, por favor primero consulta [este wiki](https://wiki.seeedstudio.com/es/control_px4_with_recomputer_jetson/) para configurar el entorno de comunicación ROS2 para PX4.

## Configurar el SDK de Python Gemini 2

El Orbbec Gemini 2 es una cámara 3D RGB-D de alta precisión que captura datos de profundidad y color sincronizados para aplicaciones como robótica, escaneo 3D y visión por computadora.

**Paso 1.** Instalar dependencias y clonar el repositorio:

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

**Paso 2.** Construir e instalar el proyecto:

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

## Leer los temas publicados por px4 en ROS2

Conecta el controlador PX4 al puerto serie UART1 del Jetson
<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Object_Tracking/px4_mini.jpg" />
</div>

Abre una terminal e inicia el Agent en el jetson:

```bash
cd /path/to/Micro-XRCE-DDS-Agent/build
./MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600
```

Usando el siguiente comando y abriendo otra terminal, puedes ver el topic de estado publicado por px4:

```bash
ros2 topic list | grep "/fmu/out/"
```

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Object_Tracking/px4_topic.png" />
</div>

:::info
Al leer el contenido de los siguientes temas, puedes obtener la información básica del estado del dron:

- /fmu/out/failsafe_flags -> Indicadores de las condiciones actuales de seguridad.
- /fmu/out/sensor_combined -> Datos sincronizados en bruto de IMU, magnetómetro y barómetro.
- /fmu/out/timesync_status -> Estado de la sincronización temporal con fuentes externas.
- /fmu/out/vehicle_attitude -> Orientación actual del vehículo como un cuaternión.
- /fmu/out/vehicle_control_mode -> Modos de control y navegación activos actuales.
- /fmu/out/vehicle_local_position -> Posición y velocidad en el marco NED local.
- /fmu/out/vehicle_odometry -> Datos completos de pose y velocidad de 6 grados de libertad.
- /fmu/out/vehicle_status -> Estado general del vehículo, modo y preparación.

:::

## Configurar rápidamente el entorno de detección de objetos

**Paso 1.** Según tu versión de Jetpack, puedes consultar esta wiki para [instalar PyTorch](https://wiki.seeedstudio.com/es/install_torch_on_recomputer/) y Torchvision.

**Paso 2.** Instala las dependencias y paquetes necesarios:

```bash
sudo apt-get update
sudo apt-get -y install libcusparselt0 libcusparselt-dev
pip install ultralytics
pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.20.0-cp310-cp310-linux_aarch64.whl
pip install numpy==1.23.5
```

**Paso 3.** Descarga el modelo pre-entrenado YOLOv11n:

```bash
wget -O yolo11n.pt https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n.pt
```

**Paso 4.** Exportar el modelo de motor para usar la inferencia tensorrt:

```bash
yolo export model=/path/to/yolo11n.pt format=engine device=0 half=True dynamic=True
```

## Instalar el paquete ROS2 para seguimiento de objetivos

```bash
cd /path/to/your/work_space/src

git clone https://github.com/zibochen6/ROS2-package-for-target-tracking.git

cd ..
# build the package
colcon build
```

:::note
Antes de ejecutar el nodo de detección, necesitas mover el archivo del modelo de motor generado previamente al directorio `/ROS2-package-for-target-tracking/models`. Además, debes clonar los paquetes `px4_msgs` y `px4_ros_com` (consulta [este wiki](https://wiki.seeedstudio.com/es/control_px4_with_recomputer_jetson/#step-2-build-the-px4_msgs-ros-2-package)) en el directorio src de tu espacio de trabajo.
La estructura de tu directorio src debería ser la siguiente:

```bash
└── src
    ├── detect
    ├── px4_msgs
    └── px4_ros_com
```

:::

Para ejecutar el paquete ROS2 para el funcionamiento normal del seguimiento de objetivos, necesitas abrir una terminal e iniciar el MicroXRCEAgent:

```bash
./MicroXRCEAgent serial --dev /dev/ttyTHS1 -b 921600

# Open another terminal and run the detection node
cd /path/to/your/work_space
source install/setup.bash
ros2 run detect detect
```

<div class="video-container">
  <iframe width="853" height="480" src="https://www.youtube.com/embed/YG1XmZL6kpU" title="🚁 Autonomous Drone Target Tracking by reComputer Mini" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style={{ textAlign: "justify" }}>
El video anterior presenta un ejemplo de cómo lograr el seguimiento de objetivos en un dron. Localiza el objetivo a través de la detección de objetivos y utiliza el algoritmo de seguimiento de objetivos ByteTrack para rastrear con precisión el objetivo específico. Al mismo tiempo, se utilizan imágenes de profundidad para estimar la distancia entre el dron y el objetivo.
</div>

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
