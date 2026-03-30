---
description: Este wiki proporciona una guía completa paso a paso para desplegar Depth Anything V3 en dispositivos Jetson AGX Orin. Cubre la configuración del entorno, instalación de dependencias clave (CUDA, ROS2, TensorRT), conversión de modelos a motores TensorRT, y estimación de profundidad en tiempo real con integración de cámara USB. La guía destaca la capacidad de Depth Anything V3 para generar mapas de profundidad de alta calidad a partir de imágenes RGB individuales con mínima sobrecarga computacional, haciéndolo ideal para aplicaciones de robótica, navegación autónoma y percepción 3D en dispositivos edge.
title: Desplegar Depth Anything V3 en Jetson AGX Orin
keywords:
  - Depth Anything V3
  - Jetson AGX Orin
  - Estimación de Profundidad
  - TensorRT
  - ROS2
  - Visión por Computadora
  - Robótica
  - Percepción 3D
  - Cámara USB
  - Edge AI
image: https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/da3_head.webp
slug: /deploy_depth_anything_v3_jetson_agx_orin
last_update:
  date: 2026-01-09T00:00:00.000Z
  author: Zibo
createdAt: '2026-01-12'
updatedAt: '2026-01-16'
url: https://wiki.seeedstudio.com/es/deploy_depth_anything_v3_jetson_agx_orin/
---

<div align="center">
  <img width="600" src="https://github.com/ByteDance-Seed/Depth-Anything-3/raw/main/assets/images/demo320-2.gif"/>
</div>

## Introducción

<div style={{ textAlign: "justify" }}>
[Depth Anything V3](https://github.com/ByteDance-Seed/depth-anything-3) es un modelo de estimación de profundidad monocular de última generación que revoluciona la percepción 3D al generar mapas de profundidad de alta calidad a partir de imágenes RGB individuales. A diferencia de los métodos tradicionales de estimación de profundidad que requieren hardware especializado o múltiples entradas de cámara, Depth Anything V3 aprovecha técnicas avanzadas de aprendizaje profundo para predecir información de profundidad precisa usando solo imágenes 2D estándar. Esto lo hace particularmente valioso para aplicaciones de Edge AI donde las limitaciones de hardware y la eficiencia computacional son consideraciones críticas. Este wiki te guiará a través del despliegue de Depth Anything V3 en Jetson AGX Orin con integración ROS2 para aplicaciones de robótica en tiempo real.
</div>

<div align="center">
    <img width={700}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/5/-/5-100020039-recomputer-mini-j501---carrier-board-for-jetson-agx-orin.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-for-Jetson-AGX-Orin-p-6606.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

## Prerrequisitos

- **[reComputer Mini J501 Carrier Board](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)** (Jetson AGX Orin) con JetPack 6.2
- Cámara USB
- Entorno [ROS2 Humble](https://wiki.seeedstudio.com/es/install_ros2_humble/) instalado


<div align="center">
    <img width={700}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/demo.gif"/>
</div>


## Características Técnicas Destacadas

- **Estimación de Profundidad Monocular de Alta Calidad**: Depth Anything V3 genera mapas de profundidad precisos a partir de imágenes RGB individuales sin requerir sensores de profundidad especializados o configuraciones de cámara estéreo.

- **Optimizado para Despliegue Edge**: El modelo está específicamente diseñado para inferencia eficiente en dispositivos edge como Jetson AGX Orin, con optimización TensorRT para máximo rendimiento.

- **Procesamiento en Tiempo Real**: Capaz de procesar imágenes de alta resolución en tiempo real, haciéndolo adecuado para navegación autónoma, evitación de obstáculos y tareas de manipulación robótica.

- **Integración ROS2**: Proporciona soporte nativo para ROS2 Humble con publicación de mapas de profundidad y nubes de puntos para integración perfecta en sistemas robóticos.

- **Soporte de Entrada Flexible**: Funciona con varias fuentes de entrada incluyendo cámaras USB, tópicos de imagen ROS y flujos de video pregrabados.

## Configuración del Entorno

**Paso 1.**Instalar Dependencias

```bash
sudo apt update
sudo apt install -y \
    build-essential \
    cmake \
    git \
    libopencv-dev \
    python3-pip \
    python3-colcon-common-extensions \
    v4l-utils
```

**Paso 2.** Instalar Dependencias de Python

```bash
pip3 install numpy opencv-python
```

**Paso 3.** Configurar Variables de Entorno CUDA

```bash
# Add CUDA environment variables to .bashrc
echo '
# CUDA Environment
export CUDA_HOME=/usr/local/cuda
export PATH=$CUDA_HOME/bin:$PATH
export LD_LIBRARY_PATH=$CUDA_HOME/lib64:$LD_LIBRARY_PATH
export CUDACXX=$CUDA_HOME/bin/nvcc
' >> ~/.bashrc

# Reload shell configuration
source ~/.bashrc

# Verify CUDA installation
nvcc --version
```
<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/nvcc.png"/>
</div>


**Paso 4.** Instalar Paquete de Cámara USB ROS2

```bash
# Install USB camera driver for ROS2
sudo apt install -y ros-humble-usb-cam

# Install additional ROS2 dependencies
sudo apt install -y ros-humble-cv-bridge
sudo apt install -y ros-humble-image-transport
sudo apt install -y ros-humble-image-geometry
sudo apt install -y ros-humble-cv-bridge ros-humble-image-transport ros-humble-rviz2

```

**Paso 5.** Configurar Entorno ROS2 de Depth Anything V3

```bash
# Clone the repository
git clone https://github.com/zibochen6/ros2-depth-anything-v3-trt.git

# Navigate to the project directory
cd ros2-depth-anything-v3-trt
```

**Paso 6.** Construir el Paquete ROS2

```bash
# Build the depth_anything_v3 package with Release configuration
colcon build --packages-select depth_anything_v3 --cmake-args -DCMAKE_BUILD_TYPE=Release

# Source the workspace
source install/setup.bash
```

**Paso 7.** Generar Motores TensorRT

:::note
Antes de generar el archivo de motor, necesitas descargar el [modelo `.onnx` de Depth Anything V3](https://huggingface.co/TillBeemelmanns/Depth-Anything-V3-ONNX) con anticipación y colocarlo en el directorio de ros2-depth-anything-v3-trt/onnx.
:::

```bash
# Make the engine generation script executable
chmod +x generate_engines.sh

# Generate TensorRT engines from ONNX models
./generate_engines.sh onnx
```
Por favor ten paciencia mientras se genera el archivo `.engine`. Una vez que la conversión esté completa, se crearán dos archivos en el directorio `onnx` como se muestra a continuación.

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/engine.png"/>
</div>


## Ejecutar Estimación de Profundidad

### Cámara para Estimación de Profundidad

**Paso 1.** Conectar Cámara USB

Conecta tu cámara USB al dispositivo Jetson AGX Orin. Verifica que la cámara sea detectada:

```bash
# Check if USB camera is detected
ls /dev/video*
```
**Salida Esperada:**

```
/dev/video0  /dev/video1
```

**Paso 2.** Calibración de cámara

El paquete `v4l2_camera` actúa como un puente entre la API Linux Video4Linux2 (V4L2) y los tópicos ROS 2, publicando mensajes de imagen e información de cámara que pueden ser fácilmente utilizados en pipelines de calibración.

Instalar Paquete de Calibración de Cámara:

```bash
# Install Camera Calibration Package
sudo apt install ros-humble-camera-calibration

# v4l2_camera is the official ROS2 maintained node that can directly publish USB camera images
sudo apt install ros-${ROS_DISTRO}-v4l2-camera
```

lanzar nodo de cámara:

```bash
# Launch camera node
ros2 run v4l2_camera v4l2_camera_node \
  --ros-args \
  -p image_size:=[640,480] \
  -p pixel_format:=YUYV
```

Los tópicos publicados por defecto son:

- `/image_raw` - Imagen cruda de la cámara
- `/camera` - Información de la cámara

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/image.png" />
</div>

Ejecutar calibración de cámara:

```bash
# In another terminal
ros2 run camera_calibration cameracalibrator \
  --size 8x6 \
  --square 0.025 \
  --fisheye-recompute-extrinsicsts \
  --fisheye-fix-skew \
  --ros-args --remap image:=/image_raw --remap camera:=/v4l2_camera
```

:::note
- `--size 8x6` se refiere al número de esquinas internas (8×6 = 48 esquinas para una cuadrícula de 9×7)
- `--square 0.025` se refiere al tamaño del cuadrado en metros (25mm)
- Mueve la cámara alrededor para capturar imágenes desde diferentes ángulos hasta que el botón `CALIBRATE` se ilumine

:::

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/cal2.png" />
</div>

Después de una calibración exitosa, obtendrás parámetros de cámara en el terminal similares a:

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/cal3.png" />
</div>

Puedes consultar [este wiki](https://wiki.seeedstudio.com/es/pycuvslam_recomputer_robotics/#camera-calibration) para calibración de cámara.
Escribe los parámetros calibrados en el archivo `camera_info_example.yaml`

**Paso 3.** Lanzar Nodo de Cámara USB

Guarda los parámetros de calibración en el archivo `camera_info_example.yaml` para rectificar la distorsión ojo de pez de la cámara GMSL. Luego, ejecuta el siguiente comando para estimación de profundidad en tiempo real:
```bash
#Start the script for camera depth estimation
CAMERA_INFO_FILE=camera_info_example.yaml ENABLE_UNDISTORTION=1 ./run_camera_depth.sh
```

<div class="video-container">
  <iframe width="1029" height="579" src="https://www.youtube.com/embed/3Khm3OpLg3M" title="Deploy Depth Anything V3 on reComputer Mini J501" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


### Video para Estimación de Profundidad

**Paso 1.** Preparar Archivo de Video

Prepara un archivo de video para estimación de profundidad.

**Paso 2.** Lanzar Nodo de Estimación de Profundidad de Video

```bash
#Start the script for video depth estimation
./run_video_depth.sh
```

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/da3.gif"/>
</div>


## Referencias

- [Repositorio GitHub de Depth Anything V3](https://github.com/DepthAnything/Depth-Anything-V3)
- [Repositorio ROS2 Depth Anything V3 TRT](https://github.com/ika-rwth-aachen/ros2-depth-anything-v3-trt)
- [Documentación TensorRT](https://developer.nvidia.com/tensorrt)
- [Documentación ROS2 Humble](https://docs.ros.org/en/humble/)


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

