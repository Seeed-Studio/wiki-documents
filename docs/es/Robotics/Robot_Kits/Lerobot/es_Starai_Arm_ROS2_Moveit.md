---
description: Esta wiki proporciona la Guía de MoveIt para ROS2 del Manipulador de Brazo Starai.
title: Manipulador de Brazo Starai - Guía de ROS2 MoveIt
keywords:
- Moveit
- ROS2
- Arm
- Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /es/starai_arm_ros_moveit
last_update:
  date: 8/1/2025
  author: LiShanghang
---

# Manipulador de Brazo Starai - Guía de ROS2 MoveIt

<div align="center">
  <img width={800}
  src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_and_violin.png" />
</div>

<div align="center">
  <img width={800}
  src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png" />
</div>


## Entorno de Dependencias

No hay módulos LSB disponibles.

ID del Distribuidor: Ubuntu

Descripción:    Ubuntu 22.04.5 LTS

Versión:        22.04

Nombre en clave:       Jammy

ROS2:           Humble

### Instalar ROS2 Humble

[Instalación de ROS2 Humble](https://wiki.seeedstudio.com/es/install_ros2_humble/)


### Instalar Moveit2

```bash
sudo apt install ros-humble-moveit*
```

### Instalar SDK del Motor Servo

```bash
sudo pip install pyserial
sudo pip install fashionstar-uart-sdk
```

### Crear un espacio de trabajo e Inicialización.

```bash
mkdir -p ~/starai_ws/src
cd ~/starai_ws
colcon build
```

### Clonar el Paquete de ROS2 `starai-arm-moveit2`
```
cd ~/starai_ws/src
git clone https://github.com/Welt-liu/starai-arm-moveit2.git
cd ~/starai_ws
colcon build
echo "source ~/starai_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```


## Script de Simulación MoveIt2 del Brazo Starai

```bash
ros2 launch viola_configure demo.launch.py 
```


## Usando un Brazo Robótico Real

### Terminal 1: Iniciar el Nodo de Control del Brazo

El Brazo se Moverá a la Posición Cero.

```bash
ros2 run robo_driver driver
```

### Iniciar el Nodo del Controlador

```bash
ros2 run viola_controller controller
```

### Iniciar Moveit2

```bash
ros2 launch viola_configure actual_robot_demo.launch.py
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/L82y7e9uk9Q?si=Fa8YorBPgbRszYGn" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## FAQ

- Si experimentas parpadeo en la interfaz de RViz2, prueba los siguientes comandos:

    ```bash
    export QT_AUTO_SCREEN_SCALE_FACTOR=0
    ```