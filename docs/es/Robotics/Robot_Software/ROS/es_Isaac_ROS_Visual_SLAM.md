---
description: Esta wiki proporciona una guía paso a paso para usar Isaac ROS Visual SLAM.
title: Isaac ROS Visual SLAM
keywords:
- NVIDIA
- Isaac ROS
- ROS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/isaac_ros_visual_slam
last_update:
  date: 5/28/2025
  author: ZhuYaoHui
---


# Despliegue de Isaac ROS Visual SLAM  

## Prerrequisitos  
Antes de desplegar Visual SLAM, asegúrate de que el entorno Isaac ROS esté configurado correctamente en tu ReComputer [Guía de Instalación](/es/install_isaacros). Si ROS2 no está instalado, consulta [este documento](/es/install_ros2_humble).  


## 1. Configuración del Entorno  

### Crear Espacio de Trabajo (Omitir si ya existe)  
```bash
mkdir -p ~/workspaces/isaac_ros-dev/src
echo "export ISAAC_ROS_WS=${HOME}/workspaces/isaac_ros-dev/" >> ~/.bashrc
source ~/.bashrc
```

### Clonar Paquete Visual SLAM  
```bash
cd ${ISAAC_ROS_WS}/src
git clone https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_visual_slam.git
```

### Entrar al Contenedor Docker  
```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && \
  ./scripts/run_dev.sh
```

## 2. Pruebas con Datos ROS Bag  

### Instalar Paquete Visual SLAM (Dentro de Docker)  
```bash
sudo apt-get install -y ros-humble-isaac-ros-visual-slam
```

### Lanzar Nodo Visual SLAM  
```bash
ros2 launch isaac_ros_visual_slam isaac_ros_visual_slam.launch.py
```

### Abrir RViz2 para Visualización  
En una **terminal local** (fuera de Docker):  
```bash
cd ${ISAAC_ROS_WS}/src
rviz2 -d isaac_ros_visual_slam/isaac_ros_visual_slam/rviz/default.cfg.rviz
```

### Reproducir ROS Bag de Cámara Estéreo  
En una **tercera terminal**:  
```bash
cd ${ISAAC_ROS_WS}/src
ros2 bag play isaac_ros_visual_slam/isaac_ros_visual_slam/test/test_cases/rosbags/small_pol_test/
```

### Salida Esperada:  

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/software/apriltag/6.png" />
</div>


### Notas:  
1. Asegúrate de que el ROS bag contenga **imágenes de cámara estéreo** (fotogramas izquierdo/derecho).  
2. Ajusta la configuración de RViz2 según sea necesario (p. ej., visualización de mapa, configuraciones de trayectoria).  

Para solución de problemas, consulta la [documentación oficial](https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_visual_slam).  

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>