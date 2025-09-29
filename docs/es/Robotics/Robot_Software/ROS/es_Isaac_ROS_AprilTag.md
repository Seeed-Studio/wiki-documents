---
description: Esta wiki proporciona una guía paso a paso para usar Isaac ROS AprilTag.
title: Isaac ROS AprilTag
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/isaac_ros_apriltag
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---

# Isaac ROS AprilTag  

## Prerrequisitos  
Antes de desplegar AprilTag, asegúrate de que el entorno básico de Isaac ROS se haya configurado exitosamente en tu reComputer [Guía de Instalación](/es/install_isaacros). Si ROS2 no está instalado, consulta [este documento](/es/install_ros2_humble).  

### Temas del Paquete Isaac ROS AprilTag  
**Temas Suscritos:**  

| Tema ROS        | Interfaz                   | Descripción                     |  
|-----------------|----------------------------|---------------------------------|  
| image         | sensor_msgs/Image        | Flujo de cámara de entrada.     |  
| camera_info   | sensor_msgs/CameraInfo   | Flujo de intrínsecos de cámara de entrada. |  

**Temas Publicados:**  

| Tema ROS           | Tipo                                              | Descripción                                      |  
|--------------------|---------------------------------------------------|--------------------------------------------------|  
| tag_detections   | isaac_ros_apriltag_interfaces/AprilTagDetectionArray | Array de mensajes de detección de AprilTag.     |  
| tf              | tf2_msgs/TFMessage                             | Poses de AprilTags detectados (TagFamily:ID) relativas al frame_id de la cámara. |  


## 1. Configuración del Entorno Isaac ROS AprilTag  

### Crear Espacio de Trabajo (Omitir si ya está hecho)  
```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

### Clonar Paquetes y Datos de ROS Bag  
```bash
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_apriltag.git
cd ${ISAAC_ROS_WS}/src/isaac_ros_apriltag && \
  git lfs pull -X "" -I "resources/rosbags/quickstart.bag"
```

### Entrar al Contenedor Docker  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```


## 2. Pruebas con Datos de ROS Bag  

### Instalar Paquete AprilTag (Dentro de Docker)  
```bash
sudo apt-get install -y ros-humble-isaac-ros-apriltag
```

### Lanzar Nodo AprilTag  
```bash
ros2 launch isaac_ros_apriltag isaac_ros_apriltag.launch.py
```

### Abrir Nueva Terminal (Dentro de Docker)  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

### Reproducir ROS Bag  
```bash
ros2 bag play --loop src/isaac_ros_apriltag/resources/rosbags/quickstart.bag
```

### Visualizar en RViz2  
Abre RViz2 en una terminal local y añade componentes **Image** y **TF**:  
```bash
ros2 run rviz2 rviz2
```

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/1.png" />
</div>


## 3. Pruebas con Cámara USB  
Asegúrate de que ROS2 esté instalado localmente.  

### Crear Espacio de Trabajo para Cámara USB  
```bash
cd ~/
mkdir -p usbcam/src
cd usbcam/src
```

### Clonar y Construir Paquete `usb_cam`  
```bash
git clone https://github.com/ros-drivers/usb_cam.git
cd ..
colcon build
echo "source ~/usbcam/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

### Verificar Formato de Cámara  
Conecta la cámara y verifica su ruta de dispositivo (ej., `/dev/video*`). Prueba con:  
```bash
cd ~/usbcam
ros2 run usb_cam usb_cam_node_exe
```

<div align="center">
    <img width={400} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/2.png" />
</div>


#### Formatos de Píxel Soportados:  
`rgb8`, `yuyv`, `yuyv2rgb`, `uyvy`, `uyvy2rgb`, `m4202rgb`, `mono8`, `mono16`, `y102mono8`, `raw_mjpeg`  

### Configurar Cámara  
1. Modifica `pixel_format` en `/usbcam/src/usb_cam/config/params_1.yaml`.  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/3.png" />
</div>

2. Ajusta `frame_id` (por defecto: `camera`).  
3. Remapea nombres de temas en `/usbcam/src/usb_cam/launch/camera_config.py` (líneas 58 y 62) para coincidir con los requisitos de AprilTag (`/image` y `/camera_info`).  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/4.png" />
</div>

### Reconstruir y Lanzar Cámara  
```bash
cd ~/usbcam
colcon build
ros2 launch usb_cam camera.launch.py
```

### Ejecutar Nodo AprilTag (Dentro de Docker)  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
ros2 launch isaac_ros_apriltag isaac_ros_apriltag.launch.py
```

### Visualizar en RViz2  
Establece **Fixed Frame** al `frame_id` de la cámara, añade un componente **Image** suscrito a `/image`, y habilita **TF**.  
*Nota: Esta prueba usa un AprilTag de 200mm × 200mm.*  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/5.png" />
</div>

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