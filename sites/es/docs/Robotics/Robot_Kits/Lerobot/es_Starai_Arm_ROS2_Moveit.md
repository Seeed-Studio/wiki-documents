---
description: Este wiki proporciona la Guía de Starai Arm Manipulator - ROS2 MoveIt.
title: Starai Arm en ROS2 MoveIt
keywords:
- Moveit
- ROS2
- Arm
- Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /starai_arm_ros_moveit
last_update:
  date: 8/1/2025
  author: LiShanghang
---

# Starai Arm Manipulator - Guía de ROS2 MoveIt

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/IJKTeBYAG7k?si=iS-jqT27fDjeI6yX" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

| **Seguidor Viola** | **Líder Violin** | **Seguidor Cello** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png) |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Star-Arm-Viola-Violin-p-6497.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> ¡Obtener Uno Ahora! 🖱️</font></span></strong>
</a></div>

## Introducción del Producto

1. **Código Abierto y Fácil para Desarrollo Secundario**
    Esta serie de servomotores, proporcionada por [Fashion Star Robotics](https://fashionrobo.com/), ofrece una solución de brazo robótico de código abierto y fácilmente personalizable con 6+1 grados de libertad.

2. **Sistemas de Doble Brazo con Varias Cargas Útiles**
    El Violin sirve como el brazo robótico líder. Cuando está al 70% de su alcance del brazo, el brazo seguidor Viola tiene una carga útil operativa de 300g, mientras que el brazo seguidor Cello tiene una carga útil operativa de 750g.

3. **Compatible con ROS2, Moveit2 e Isaac Sim**
    Es compatible con ROS2 para publicar y suscribirse a temas de datos del brazo robótico y controlar el brazo robótico, y también es compatible con MoveIt2 para cálculo de cinemática inversa, así como simulación en Isaac Sim.

4. **Soporte de Integración con la Plataforma LeRobot**
    Está específicamente diseñado para integración con la [plataforma LeRobot](https://github.com/huggingface/lerobot). Esta plataforma proporciona modelos PyTorch, conjuntos de datos y herramientas para aprendizaje por imitación en tareas de robótica del mundo real, incluyendo recolección de datos, simulación, entrenamiento y despliegue.

5. **SDK de Código Abierto**
     Compatible con desarrollo de SDK en Python y C++

6. **Botón de Flotación**
    Simula compensación de gravedad, permitiendo que el brazo robótico flote en cualquier posición mediante un botón.

7. **Efector Final Modular**
    Permite reemplazo DIY rápido.

8. **Abundantes Recursos de Aprendizaje**
    Ofrecemos recursos de aprendizaje de código abierto integrales, incluyendo configuración de entorno, guías de instalación y depuración, y ejemplos de tareas de agarre personalizadas para ayudar a los usuarios a comenzar rápidamente y desarrollar aplicaciones robóticas.

9. **Compatibilidad con Plataforma Nvidia**
    El despliegue es compatible a través de la plataforma Nvidia Jetson.

## Especificaciones

| Elemento                 | Brazo Seguidor \| Viola                             | Brazo Líder \|Violin                                |    Brazo Seguidor \|Cello    |
| -------------------- | ------------------------------------------------- | ------------------------------------------------- |-----------------|
| Grados de Libertad   | 6+1                                               | 6+1                                               | 6+1             |
| Alcance                | 470mm                                             | 470mm                                             | 670mm |
| Envergadura                 | 940mm                                             | 940mm                                             | 1340mm |
| Repetibilidad        | 2mm                                               | -                                                 | 1mm  |
| Carga Útil de Trabajo      | 300g (con 70% de Alcance)                            | -                                                 |  750g (con 70% de Alcance)   |
| Servos               | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 |RX18-U100H-M x3<br/> RX8-U50H-M x3<br/> RX8-U51H-M x1|
| Kit de Pinza Paralela  | ✅                                                 | -                                                 | ✅   |
| Rotación de Muñeca         | Sí                                               | Sí                                               | Sí |
| Mantener en Cualquier Posición | Sí                                               | Sí (con botón de mango)                          |  Sí|
| Montaje de Cámara en Muñeca   |Proporciona archivos de referencia de impresión 3D | | Proporciona archivos de referencia de impresión 3D
| Funciona con LeRobot   | ✅                                                 | ✅                                                 | ✅|
| Funciona con ROS 2     | ✅                                                 | ✅                                                | ✅|
| Funciona con MoveIt2    | ✅                                                 | ✅                                               |✅ |
| Funciona con Gazebo    | ✅                                                 |✅                                              |✅ |
| Hub de Comunicación    | UC-01                                             | UC-01                                             | UC-01 |
| Fuente de Alimentación         | 12V10A/120w XT30                                   | 12V10A/120w XT30                                 |12V25A/300w XT60  |

Para más información sobre servomotores, por favor visite el siguiente enlace.

[RA8-U25H-M](https://fashionrobo.com/actuator-u25/23396/)

[RX18-U100H-M](https://fashionrobo.com/actuator-u100/22853/)

[RX8-U50H-M](https://fashionrobo.com/actuator-u50/136/)

## Entorno Dependiente

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

### Instalar SDK del Servomotor

```bash
sudo pip install pyserial
sudo pip install fashionstar-uart-sdk
```

### Crear un espacio de trabajo e Inicialización

```bash
mkdir -p ~/starai_ws/src
cd ~/starai_ws
colcon build
```

### Clonar el Paquete de ROS2 `starai-arm-moveit2`

```
cd ~/starai_ws/src
git clone https://github.com/Seeed-Projects/fashionstar-starai-arm-ros2.git
cd ~/starai_ws
colcon build
echo "source ~/starai_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```


## Viola
### Script de Simulación MoveIt2 de Starai Arm (Opcional)

```bash
ros2 launch viola_moveit_config demo.launch.py 
```

### Usando un Brazo Robótico Real

### Paso 1: Iniciar el Nodo de Control del Brazo

Iniciar el controlador de hardware del brazo, el Brazo se Moverá a la Posición Cero.

```bash
ros2 launch viola_moveit_config driver.launch.py
```

### Paso 2: Iniciar Moveit2

```bash
ros2 launch viola_moveit_config moveit_write_read.launch.py
```

### Demo de lectura/escritura de pose del efector final

```bash
ros2 run arm_moveit_write topic_publisher 
```

## Cello
### Script de Simulación MoveIt2 de Starai Arm (Opcional)

```bash
ros2 launch cello_moveit_config demo.launch.py 
```

### Usando un Brazo Robótico Real

### Paso 1: Iniciar el Nodo de Control del Brazo

Iniciar el controlador de hardware del brazo, el Brazo se Moverá a la Posición Cero.

```bash
ros2 launch cello_moveit_config driver.launch.py
```

### Paso 2: Iniciar Moveit2

```bash
ros2 launch cello_moveit_config actual_robot_demo.launch.py
```

### Demo de lectura/escritura de pose del efector final

```bash
ros2 launch cello_moveit_config moveit_write_read.launch.py
```

## Demo de nodo de envío de tema de posición y orientación

actualizar aquí `src/arm_moveit_write/src/topic_publisher.cpp`

```bash
    // // viola
    // dataset1_ = { 
    //   {0.003, -0.204, 0.274},       // position
    //   {0.014, 0.717, 0.017, 0.696}, // orientation
    //   "open"                         // gripper_state
    // };
    // dataset2_ = {
    //   {-0.00, -0.34, 0.177},        // position
    //   {0.0, 0.7071, 0.0, 0.7071},   // orientation
    //   "close"                        // gripper_state
    // };

    // cello
    dataset1_ = {
      {-0.278, 0.000, 0.438},       // position
      {0.707, 0.000, -0.707, 0.000}, // orientation
      "open"                         // gripper_state
    };
    dataset2_ = {
      {-0.479, -0.000, 0.369},        // position
      {0.707, -0.000, -0.707, 0.000},   // orientation
      "close"                        // gripper_state
    }

```

```bash
colcon build
source install/setup.sh
ros2 run arm_moveit_write topic_publisher 
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/L82y7e9uk9Q?si=Fa8YorBPgbRszYGn" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## FAQ

- Si experimentas parpadeo en la interfaz de RViz2, prueba los siguientes comandos:

    ```bash
    export QT_AUTO_SCREEN_SCALE_FACTOR=0
    ```
