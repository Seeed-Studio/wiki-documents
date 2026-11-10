---
description: "Implementa Depth Anything V3 en Jetson AGX Orin: configuración de CUDA y ROS 2, conversión de ONNX a TensorRT y profundidad en tiempo real desde vídeo."
title: Implementar Depth Anything V3 en Jetson AGX Orin
keywords:
  - Depth Anything V3
  - Jetson AGX Orin
  - Estimación de profundidad
  - TensorRT
  - ROS2
  - Visión por computador
  - Robótica
  - Percepción 3D
  - Cámara USB
  - Edge AI
image: https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/da3_head.webp
slug: /deploy_depth_anything_v3_jetson_agx_orin
last_update:
  date: 2026-01-09
  author: Zibo
createdAt: '2026-01-09'
updatedAt: '2026-01-16'
url: https://wiki.seeedstudio.com/es/deploy_depth_anything_v3_jetson_agx_orin/
---

<div align="center">
  <img alt="Salida de ejemplo de Depth Anything 3: el fotograma de entrada, un mapa de profundidad en color y la nube de puntos resultante" width="600" src="https://github.com/ByteDance-Seed/Depth-Anything-3/raw/main/assets/images/demo320-2.gif"/>
</div>

## Introducción

<div style={{ textAlign: "justify" }}>
[Depth Anything V3](https://github.com/ByteDance-Seed/depth-anything-3) estima la profundidad a partir de una sola imagen RGB, de modo que un robot con una cámara obtiene un mapa de profundidad denso sin un sistema estéreo ni un sensor de profundidad. En Jetson AGX Orin el modelo se convierte en un motor TensorRT y publica la profundidad en un tópico de ROS 2, donde un detector o planificador posterior puede utilizarla. Las secciones siguientes configuran CUDA y ROS 2, convierten ONNX a un motor TensorRT y lo ejecutan con entrada de cámara y de vídeo.
</div>

<div align="center">
    <img alt="Placa carrier reComputer Mini J501 para Jetson AGX Orin, foto del producto" width={700}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/5/-/5-100020039-recomputer-mini-j501---carrier-board-for-jetson-agx-orin.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-for-Jetson-AGX-Orin-p-6606.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

## Requisitos previos

- **[Placa carrier reComputer Mini J501](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)** (Jetson AGX Orin) con JetPack 6.2
- Cámara USB
- Entorno [ROS2 Humble](https://wiki.seeedstudio.com/es/install_ros2_humble/) instalado


<div align="center">
    <img alt="Estimación de profundidad en tiempo real desde una cámara USB ejecutándose en la reComputer Mini J501" width={700}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/demo.gif"/>
</div>


## Aspectos técnicos destacados

- **Estimación de profundidad monocular de alta calidad**: Depth Anything V3 genera mapas de profundidad precisos a partir de imágenes RGB individuales sin necesidad de sensores de profundidad especializados ni configuraciones de cámaras estéreo.

- **Optimizado para despliegue en el borde**: El modelo está diseñado específicamente para inferencia eficiente en dispositivos edge como Jetson AGX Orin, con optimización TensorRT para el máximo rendimiento.

- **Procesamiento en tiempo real**: Capaz de procesar imágenes de alta resolución en tiempo real, lo que lo hace adecuado para navegación autónoma, evitación de obstáculos y tareas de manipulación robótica.

- **Integración con ROS2**: Proporciona compatibilidad nativa con ROS2 Humble con publicación de mapas de profundidad y nubes de puntos para una integración fluida en sistemas robóticos.

- **Compatibilidad flexible de entrada**: Funciona con varias fuentes de entrada, incluidas cámaras USB, tópicos de imagen ROS y flujos de vídeo pregrabados.

## Configuración del entorno

**Paso 1.** Instalar dependencias

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

**Paso 2.** Instalar dependencias de Python

```bash
pip3 install numpy opencv-python
```

**Paso 3.** Configurar variables de entorno de CUDA

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
    <img alt="Salida de nvcc --version que confirma que el toolkit de CUDA está en PATH" width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/nvcc.png"/>
</div>


**Paso 4.** Instalar el paquete de cámara USB para ROS2

```bash
# Install USB camera driver for ROS2
sudo apt install -y ros-humble-usb-cam

# Install additional ROS2 dependencies
sudo apt install -y ros-humble-cv-bridge
sudo apt install -y ros-humble-image-transport
sudo apt install -y ros-humble-image-geometry
sudo apt install -y ros-humble-cv-bridge ros-humble-image-transport ros-humble-rviz2

```

**Paso 5.** Configurar el entorno ROS2 de Depth Anything V3

```bash
# Clone the repository
git clone https://github.com/zibochen6/ros2-depth-anything-v3-trt.git

# Navigate to the project directory
cd ros2-depth-anything-v3-trt
```

**Paso 6.** Compilar el paquete de ROS2

```bash
# Build the depth_anything_v3 package with Release configuration
colcon build --packages-select depth_anything_v3 --cmake-args -DCMAKE_BUILD_TYPE=Release

# Source the workspace
source install/setup.bash
```

**Paso 7.** Generar motores TensorRT

:::note
Antes de generar el archivo de motor, debes descargar previamente el [modelo `.onnx` de Depth Anything V3](https://huggingface.co/TillBeemelmanns/Depth-Anything-V3-ONNX) y colocarlo en el directorio ros2-depth-anything-v3-trt/onnx.
:::

```bash
# Make the engine generation script executable
chmod +x generate_engines.sh

# Generate TensorRT engines from ONNX models
./generate_engines.sh onnx
```
Ten paciencia mientras se genera el archivo `.engine`. Una vez completada la conversión, se crearán dos archivos en el directorio `onnx` como se muestra a continuación.

<div align="center">
    <img alt="Listado del directorio onnx con los archivos .engine de TensorRT generados junto a los modelos ONNX" width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/engine.png"/>
</div>


## Ejecución de la estimación de profundidad

### Cámara para estimación de profundidad

**Paso 1.** Conectar la cámara USB

Conecta tu cámara USB al dispositivo Jetson AGX Orin. Verifica que la cámara sea detectada:

```bash
# Check if USB camera is detected
ls /dev/video*
```
**Salida esperada:**

```
/dev/video0  /dev/video1
```

**Paso 2.** Calibración de la cámara

El paquete `v4l2_camera` actúa como un puente entre la API Video4Linux2 (V4L2) de Linux y los tópicos de ROS 2, publicando mensajes de imagen e información de cámara que pueden utilizarse fácilmente en flujos de calibración.

Instalar el paquete de calibración de cámara:

```bash
# Install Camera Calibration Package
sudo apt install ros-humble-camera-calibration

# v4l2_camera is the official ROS2 maintained node that can directly publish USB camera images
sudo apt install ros-${ROS_DISTRO}-v4l2-camera
```

Lanzar el nodo de la cámara:

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
    <img alt="Nodo v4l2_camera ejecutándose con los tópicos /image_raw y /camera publicados" width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/image.png" />
</div>

Ejecutar la calibración de la cámara:

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
- Mueve la cámara para capturar imágenes desde distintos ángulos hasta que el botón `CALIBRATE` se ilumine

:::

<div align="center">
    <img alt="Ventana de camera_calibrator con la vista del tablero de ajedrez y el botón CALIBRATE" width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/cal2.png" />
</div>

Tras una calibración correcta, obtendrás parámetros de la cámara en la terminal similares a:

<div align="center">
    <img alt="Parámetros intrínsecos de la cámara y coeficientes de distorsión impresos tras finalizar la calibración" width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/PyCuVSLAM/cal3.png" />
</div>

Puedes consultar [este wiki](https://wiki.seeedstudio.com/es/pycuvslam_recomputer_robotics/#calibración-de-la-cámara) para la calibración de la cámara.
Escribe los parámetros calibrados en el archivo `camera_info_example.yaml`

**Paso 3.** Lanzar el nodo de cámara USB 

Guarda los parámetros de calibración en el archivo `camera_info_example.yaml` para rectificar la distorsión ojo de pez de la cámara GMSL. Luego, ejecuta el siguiente comando para la estimación de profundidad en tiempo real:
```bash
#Start the script for camera depth estimation
CAMERA_INFO_FILE=camera_info_example.yaml ENABLE_UNDISTORTION=1 ./run_camera_depth.sh
```

<div class="video-container">
  <iframe width="1029" height="579" src="https://www.youtube.com/embed/3Khm3OpLg3M" title="Deploy Depth Anything V3 on reComputer Mini J501" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


### Vídeo para estimación de profundidad

**Paso 1.** Preparar el archivo de vídeo

Prepara un archivo de vídeo para la estimación de profundidad.

**Paso 2.** Lanzar el nodo de estimación de profundidad desde vídeo 

```bash
#Start the script for video depth estimation
./run_video_depth.sh
```

<div align="center">
    <img alt="RViz mostrando el mapa de profundidad, la vista de la cámara y la nube de puntos construida a partir del fotograma de vídeo" width={1000}
     src="https://files.seeedstudio.com/wiki/deploy_depth_anything_v3/da3.gif"/>
</div>


## Referencias

- [Repositorio de GitHub de Depth Anything V3](https://github.com/DepthAnything/Depth-Anything-V3)
- [Repositorio ROS2 Depth Anything V3 TRT](https://github.com/ika-rwth-aachen/ros2-depth-anything-v3-trt)
- [Documentación de TensorRT](https://developer.nvidia.com/tensorrt)
- [Documentación de ROS2 Humble](https://docs.ros.org/en/humble/)


## Preguntas frecuentes

**¿A qué versión de JetPack está dirigida esta compilación?**
JetPack 6.2 en Jetson AGX Orin con la placa carrier reComputer Mini J501, además de ROS 2 Humble. Los motores TensorRT se generan en el propio dispositivo, por lo que una versión diferente de JetPack implica regenerarlos a partir de los modelos ONNX.

**¿Necesito una cámara de profundidad o un sistema estéreo?**
No. Depth Anything V3 predice la profundidad a partir de un solo fotograma RGB, por lo que una cámara USB es suficiente. Como la profundidad proviene de la apariencia en lugar de una señal medida, comprueba la escala absoluta frente a un objeto conocido antes de alimentarla a un planificador.

**¿Dónde va el modelo ONNX?**
Coloca el archivo `.onnx` en `ros2-depth-anything-v3-trt/onnx` y ejecuta `./generate_engines.sh onnx`. Aparecerán dos archivos `.engine` en ese directorio cuando termine la conversión.

**El mapa de profundidad se ve deformado cerca de los bordes del fotograma. ¿Qué debo cambiar?**
Eso es distorsión de lente. Ejecuta `camera_calibrator`, escribe los parámetros intrínsecos resultantes en `camera_info_example.yaml`, y luego inicia con `CAMERA_INFO_FILE=camera_info_example.yaml ENABLE_UNDISTORTION=1`.

**¿Puede procesar un video grabado en lugar de una cámara en vivo?**
Sí. `./run_video_depth.sh` ejecuta el mismo motor sobre un archivo de video, lo cual es la forma más rápida de comprobar la calidad de salida antes de montar una cámara en el robot.

## Recursos relacionados

- [Calibración de cámara con PyCuVSLAM en reComputer](/es/pycuvslam_recomputer_robotics/)
- [Emparejar una cámara de profundidad Orbbec con YOLOv11 para medición de distancia](/es/yolov11_with_depth_camera/)
- [Motor eficiente de inferencia de visión multitarea en Jetson](/es/deploy_visual_perception_engine_recomputer/)
- [Página de producto de reComputer Mini J501](https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-for-Jetson-AGX-Orin-p-6606.html)
- [Repositorio de ROS 2 Depth Anything V3 TensorRT](https://github.com/zibochen6/ros2-depth-anything-v3-trt)

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

