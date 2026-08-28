---
description: Este tutorial muestra cómo configurar el espacio de trabajo de control de ROS2 para el reBot Arm B601-RS, incluyendo la conexión SocketCAN, el control del brazo, la visualización en RViz y la integración con MoveIt 2.
title: Integración ROS2 de reBot Arm B601-RS
keywords:
  - reBot Arm
  - B601-RS
  - ROS2
  - Humble
  - Jazzy
  - SocketCAN
  - RViz
  - MoveIt 2
  - Robot Arm
  - Robotics
slug: /rebot_arm_b601_rs_ros2_integration
last_update:
  date: 2026-06-10
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-10'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_ros2_integration/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# Guía de Integración ROS2 de reBot Arm B601-RS

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Humble | Jazzy-blue.svg" alt="ROS2 Humble | Jazzy" />
    <img src="https://img.shields.io/badge/Python-3.10%2B-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Version-v0.3.0-brightgreen.svg" alt="Version v0.3.0" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
</p>

<p align="center">
  <strong>ROS2 Control · SocketCAN · Visualización en RViz · Compatibilidad con MoveIt 2 · Compensación de gravedad</strong>
</p>

Este tutorial muestra cómo controlar el reBot Arm B601-RS a través del espacio de trabajo ROS2 `rebotarm_ros2`. El espacio de trabajo encapsula el SDK de Python `reBotArm_control_py`, incluyendo cinemática inversa basada en Pinocchio, planificación de trayectorias y compensación de gravedad, en tópicos, servicios y acciones de ROS2. Esto facilita el uso de planificación de alto nivel, visualización en RViz, compensación de gravedad, control del efector final y desarrollo de aplicaciones personalizadas.

:::note
Este tutorial usa `Ubuntu 24.04 + ROS2 Jazzy` como entorno de referencia principal. ROS2 Humble / Ubuntu 22.04 pueden seguir el mismo flujo de trabajo.
:::

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/ros2/MoveIt2_RS.gif" alt="reBot Arm B601-RS MoveIt 2 demo" />
</p>

## Características del proyecto

1. **Interfaces ROS2 estándar**  
   Proporciona interfaces comunes como `/rebotarm/joint_states`, `/rebotarm/arm_status`, `FollowJointTrajectory`, `GripperCommand` y `MoveToPose`.

2. **Nodos de cinemática, planificación de trayectorias y compensación de gravedad listos para usar**  
   Proporciona cinemática directa/inversa, planificación de trayectorias, compensación de gravedad y compatibilidad con visualización en RViz listas para usar.

3. **Integración con MoveIt 2**  
   Incluye configuración de MoveIt 2 y demostraciones de aplicaciones, admitiendo planificación simulada mediante el plugin MotionPlanning de RViz y ejecución en hardware real a través del nodo de control de hardware.

## Especificaciones

El hardware para este tutorial es proporcionado por [Seeed Studio](https://www.seeedstudio.com/).

| Parámetro | Especificación |
|---|---|
| Modelo de brazo robótico | reBot Arm B601-RS |
| Grados de libertad | 6-DOF + efector final |
| Comunicación | CAN |
| Canal CAN predeterminado | `can0` |
| Modo de control del brazo predeterminado | `mit` |
| Sistema recomendado | Ubuntu 24.04 + ROS2 Jazzy + Python 3.12 |
| Sistema de referencia | Ubuntu 22.04 + ROS2 Humble + Python 3.10 |

## Lista de materiales (BOM)

| Componente | Cantidad | Incluido |
|---|---|---|
| Brazo robótico reBot Arm B601-RS | 1 | ✅ |
| Efector final | 1 | ✅ |
| Adaptador CAN | 1 | ✅ |
| Adaptador de corriente | 1 | ✅ |
| Cable de comunicación | 1 | ✅ |
| PC host con Ubuntu | 1 | Preparado por el usuario |

## Cableado

1. Conecta el adaptador CAN al bus CAN del brazo robótico.
2. Conecta el motor del efector final al mismo bus CAN.
3. Enciende el brazo robótico y conecta el adaptador CAN al host.
4. Confirma que el host reconoce la interfaz CAN:

```bash
ip -br link
```

Levanta la interfaz CAN:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

## Requisitos del entorno

| Elemento | Requisito recomendado |
|---|---|
| Sistema operativo | Ubuntu 24.04, Ubuntu 22.04 se puede usar como referencia |
| ROS2 | Jazzy, Humble se puede usar como referencia |
| Python | Python del sistema. Jazzy suele usar 3.12, mientras que Humble suele usar 3.10 |

## Pasos de instalación

### Paso 0. Completar la preparación básica del brazo robótico

Antes de comenzar la integración con ROS2, completa la [Guía rápida de inicio de reBot Arm B601-RS](https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/), incluyendo el montaje, la configuración de ID de los motores, la inicialización de la posición cero y otras preparaciones básicas.

### Paso 1. Instalar la versión de ROS2 para tu sistema Ubuntu

Consulta la guía de instalación de ROS2 en el Wiki de Seeed Studio o la documentación oficial de ROS2:

- [Instalación de ROS2 Jazzy en Ubuntu](https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html)
- [Instalación de ROS2 Humble en Ubuntu](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)
- [Guía de instalación de ROS2 Humble en el Wiki de Seeed Studio](https://wiki.seeedstudio.com/es/install_ros2_humble/)

### Paso 2. Instalar herramientas de compilación y dependencias de ROS

Instala colcon, pip, Git y los paquetes de ROS requeridos por este espacio de trabajo. Los siguientes comandos usan el valor de `ROS_DISTRO` en la terminal actual:

```bash
sudo apt update
sudo apt install -y python3-colcon-common-extensions python3-pip git
sudo apt install -y \
  ros-${ROS_DISTRO}-control-msgs \
  ros-${ROS_DISTRO}-trajectory-msgs \
  ros-${ROS_DISTRO}-tf-transformations \
  ros-${ROS_DISTRO}-robot-state-publisher \
  ros-${ROS_DISTRO}-rviz2 \
  ros-${ROS_DISTRO}-pinocchio
```

Verifica después de la instalación:

```bash
source /opt/ros/${ROS_DISTRO}/setup.bash
python3 -c "import pinocchio; print('pinocchio', pinocchio.__version__)"
```

### Paso 3. Clonar el repositorio de código

Da preferencia al repositorio oficial Seeed-Projects:

```bash
git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2
```



### Paso 4. Instalar motorbridge

Instala `motorbridge` desde la fuente oficial de PyPI:

```bash
python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge
```

Si usas Ubuntu 22.04 / ROS2 Humble, normalmente puedes eliminar `--break-system-packages`:

```bash
python3 -m pip install --user --index-url https://pypi.org/simple motorbridge
```

### Paso 5. Obtener el SDK de bajo nivel

```bash
mkdir -p third_party
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git third_party/reBotArm_control_py
```

### Paso 6. Compilar el espacio de trabajo

```bash
source /opt/ros/${ROS_DISTRO}/setup.bash
colcon build --symlink-install
source install/setup.bash
```

Verifica las entradas ejecutables:

```bash
ros2 pkg executables rebotarmcontroller
```

Las entradas esperadas incluyen al menos:

```text
rebotarmcontroller reBotArmController
rebotarmcontroller GravityCompensation
rebotarmcontroller GripperControl
rebotarmcontroller MoveTo
rebotarmcontroller MoveToPose
```

## Inicio rápido

:::caution
Antes de usar el brazo robótico, ten en cuenta lo siguiente: **El controlador del brazo robótico tiene un alto grado de libertad. Antes de habilitar el controlador o alimentar el brazo, asegúrate de que el área de trabajo esté libre de personas y obstáculos. Revisa cuidadosamente cada comando de movimiento para evitar accidentes. La operación peligrosa está estrictamente prohibida; eres responsable de cualquier consecuencia.**
:::

### Iniciar el sistema completo

Primero confirma que la interfaz CAN está levantada:

```bash
ip -details link show can0
```

El arranque completo inicia:

- Nodo de control `reBotArmController`
- `robot_state_publisher`
- RViz opcional

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0
```

Si solo usas B601-RS durante mucho tiempo, puedes cambiar manualmente `default_model` en `src/rebotarm_bringup/config/rebotarm_hardware.yaml` a `rs`. Después de eso, puedes omitir `model:=rs` y solo mantener el parámetro real del canal CAN:

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=can0
```

### Iniciar la visualización en RViz

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=true
```

Si el modelo aparece demasiado pequeño en RViz, ajusta la vista desde el panel `Views` en la izquierda:

- Establece `Target Frame` en `base_link`
- Cambia el tipo de vista a `Move Camera`
- Ajusta `Distance`, por ejemplo a `1.0` o `1.5`
- Confirma que `Fixed Frame` está configurado en `base_link`

### Iniciar solo el nodo de control

Si no se necesitan URDF y RViz:

```bash
ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0
```

Usa ros launch para iniciar el nodo, porque el archivo launch pasa la configuración de hardware desde `rebotarm_bringup/config`.

## Espacio de nombres de ROS2

El espacio de nombres predeterminado es:

```text
/rebotarm
```

Por lo tanto, todos los tópicos, servicios y acciones tienen el prefijo `/rebotarm`, por ejemplo:

```text
/rebotarm/joint_states
/rebotarm/enable
/rebotarm/move_to_pose
```

Si necesitas múltiples brazos robóticos, puedes cambiar el espacio de nombres en tiempo de lanzamiento:

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 arm_namespace:=right_arm
```

En este caso, `/rebotarm/joint_states` se convierte en `/right_arm/joint_states`.

## APIs comunes

### Tópicos de estado

| API | Tipo | Descripción |
|---|---|---|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | Posiciones, velocidades y esfuerzos de las 6 articulaciones, incluyendo articulaciones visuales del efector final para RViz |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | Modo de control, estado habilitado, máquina de estados y códigos de error |
| `/rebotarm/joints/<joint>/state` | `rebotarm_msgs/msg/JointMotorState` | Estado del motor de una sola articulación |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | Estado del motor del efector final |

Ejemplos:

```bash
ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once
```

### Servicios

| API | Tipo | Descripción |
|---|---|---|
| `/rebotarm/enable` | `std_srvs/srv/Trigger` | Habilitar el brazo robótico |
| `/rebotarm/disable` | `std_srvs/srv/Trigger` | Deshabilitar el brazo robótico |
| `/rebotarm/safe_home` | `std_srvs/srv/Trigger` | Volver a la posición segura de origen |
| `/rebotarm/set_zero` | `rebotarm_msgs/srv/SetZero` | Establecer la posición cero para todas las articulaciones o una sola articulación |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | Precomprobación de IK y solución de articulaciones objetivo |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | Establecer la posición del motor del efector final en rad |
| `/rebotarm/gripper/open` | `rebotarm_msgs/srv/GripperCommand` | Abrir el efector final según el valor configurado |
| `/rebotarm/gripper/close` | `rebotarm_msgs/srv/GripperCommand` | Cerrar el efector final según el valor configurado |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | Iniciar la compensación de gravedad |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | Detener la compensación de gravedad |

### Acciones

| API | Tipo | Descripción |
|---|---|---|
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | Movimiento de la pose del efector final |
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | Punto de entrada estándar compatible con trayectorias articulares |
| `/rebotarm/gripper/command` | `control_msgs/action/GripperCommand` | Acción estándar de pinza |

## Ejemplos de control básico

### 1. Habilitar el brazo robótico

```bash
ros2 service call /rebotarm/enable std_srvs/srv/Trigger
```

### 2. Mover a una pose del efector final

```bash
ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {x: 0.0, y: 0.0, z: 0.0, w: 1.0}}, duration: 2.0}"
```

La acción `move_to_pose` se ejecuta mediante el controlador de pose final del SDK. El modo de control del brazo B601-RS es `mit` por defecto en `rebotarm_hardware.yaml`.

### 3. Enviar un objetivo articular

```bash
ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"
```

### 4. Controlar la pinza

```bash
ros2 service call /rebotarm/gripper/open rebotarm_msgs/srv/GripperCommand "{}"
ros2 service call /rebotarm/gripper/close rebotarm_msgs/srv/GripperCommand "{}"
```

También puedes enviar una posición explícita del motor de la pinza:

```bash
ros2 service call /rebotarm/gripper/set rebotarm_msgs/srv/SetGripper "{position: 5.0}"
```

### 5. Posición segura inicial y deshabilitar

```bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

## Ejemplos de demostración

Todos los ejemplos suponen que `reBotArmController` ya se está ejecutando:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0
```

### Ejemplo de movimiento articular

Controla las 6 articulaciones a la vez. La unidad es rad:

```bash
ros2 run rebotarmcontroller MoveTo -- \
  0.20 -0.20 -0.20 -0.20 0.10 -0.10 \
  --duration 8.0
```

Controlar solo una articulación:

```bash
ros2 run rebotarmcontroller MoveTo -- --joint joint3 --position -0.20 --duration 5.0
```

### Ejemplo de pose del efector final

```bash
ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0
```

### Ejemplo de compensación de gravedad

```bash
ros2 run rebotarmcontroller GravityCompensation
```

El script primero llama a `/rebotarm/enable`, luego inicia la compensación de gravedad. Cuando presionas `Ctrl+C`, el script llama a los siguientes servicios en orden:

1. `/rebotarm/gravity_compensation/stop`
2. `/rebotarm/safe_home`
3. `/rebotarm/disable`

Esto detiene primero la compensación de gravedad, luego mueve el brazo de vuelta a la posición segura inicial y lo deshabilita.

También puedes llamar a los servicios manualmente:

```bash
ros2 service call /rebotarm/enable std_srvs/srv/Trigger
ros2 service call /rebotarm/gravity_compensation/start std_srvs/srv/Trigger
ros2 service call /rebotarm/gravity_compensation/stop std_srvs/srv/Trigger
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

### Ejemplo de pinza interactiva

```bash
ros2 run rebotarmcontroller GripperControl
```

Después de lanzar, introduce:

```text
o / open    Open the gripper
c / close   Close the gripper
q / quit    Quit
```

## Configuración

Los archivos de configuración predeterminados se encuentran en:

```text
src/rebotarm_bringup/config/
```

| Archivo | Descripción |
|---|---|
| `rebotarm_hardware.yaml` | Selección de hardware de capa superior ROS2 y anulaciones de parámetros del SDK para B601-RS |
| `driver_params.yaml` | Ejemplos de parámetros ROS |

El `default_model` en la parte superior de `rebotarm_hardware.yaml` puede ser `dm` por defecto. Si quieres que B601-RS sea el modelo predeterminado, cámbialo a:

```yaml
default_model: rs
```

Después de este cambio, B601-RS se usará automáticamente cuando no se pase explícitamente `model:=...`.

Parámetros de lanzamiento comunes:

| Parámetro | Predeterminado | Descripción |
|---|---|---|
| `hardware_config` | `rebotarm_hardware.yaml` integrado desde bringup | Ruta de configuración de hardware de capa superior ROS2 |
| `model` | `rs` | Este tutorial pasa explícitamente `rs` para seleccionar la configuración B601-RS |
| `channel` | `can0` | Canal SocketCAN |
| `joint_state_rate` | `100.0` | Frecuencia de publicación de `/rebotarm/joint_states` |
| `cmd_arbitration` | `reject` | Arbitraje de comandos de articulaciones de bajo nivel durante la ejecución de trayectorias, `reject` o `preempt` |
| `arm_namespace` | `rebotarm` | Prefijo de espacio de nombres ROS |
| `frame_id` | `base_link` | Marco base del brazo robótico |
| `ee_frame_id` | `gripper_end` | Marco del efector final |
| `use_rviz` | `false` | Indica si se inicia el bringup de RViz |
| `disable_after_safe_home` | `true` | Controla si los motores se deshabilitan después de completar la posición segura inicial |

Configuración clave predeterminada para B601-RS en `rebotarm_hardware.yaml`:

| Elemento | Predeterminado |
|---|---|
| Canal de comunicación | `can0` |
| Modo de control del brazo | `mit` |
| Posición de apertura de la pinza | `5.0` |
| Posición de cierre de la pinza | `0.0` |
| Ganancia de salida de compensación de gravedad para las articulaciones 2/3 | `1.5` |

## Tópicos de comandos de bajo nivel

El espacio de trabajo ROS2 también proporciona tópicos de depuración de motores de bajo nivel:

| API | Tipo | Descripción |
|---|---|---|
| `/rebotarm/joints/<joint>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando MIT bruto de una sola articulación |
| `/rebotarm/joints/<joint>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando bruto de posición-velocidad de una sola articulación |
| `/rebotarm/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando MIT bruto de la pinza |
| `/rebotarm/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando bruto de posición-velocidad de la pinza |

:::caution
Los tópicos de comandos de bajo nivel están pensados para depuración y experimentos. No realizan IK, planificación de trayectorias ni comprobaciones de validez URDF. Para movimiento a nivel de aplicación, es preferible usar servicios y acciones como `/move_to_pose`, `/follow_joint_trajectory` y `/gripper/set`.
:::

## MoveIt 2

MoveIt 2 es un framework de planificación de movimiento para brazos robóticos. Aquí es principalmente responsable de la cinemática inversa, la comprobación de colisiones, la planificación de trayectorias y la ejecución de trayectorias. El paquete de demostración mantiene los flujos de aplicación separados del controlador de bajo nivel. Para más detalles, consulta la [Documentación oficial de MoveIt 2](https://moveit.picknik.ai/main/index.html).

El contenido relacionado con MoveIt se divide en dos paquetes:

| Paquete | Propósito |
|---|---|
| `rebotarm_moveit_config` | Modelo del robot, SRDF, cinemática, límites articulares, configuración del controlador y de RViz |
| `rebotarm_moveit_demos` | Demos de aplicación basadas en MoveIt 2 |

El entorno MoveIt utiliza hardware simulado a través de `ros2_control` y `move_group` para la planificación y ejecución. Es adecuado para validar el modelo, la IK, la planificación de trayectorias y el flujo de demostración en RViz.

Este repositorio también es compatible con hardware real. Antes de conectar hardware real, asegúrate de que la configuración cero del brazo, las direcciones de las articulaciones, los límites articulares, los límites de velocidad y el rango de apertura/cierre de la pinza sean correctos, o mantén la configuración predeterminada del repositorio.

### Configuración del entorno MoveIt

Primero asegúrate de que el entorno ROS2 esté disponible. El siguiente comando instala dependencias para el `ROS_DISTRO` actualmente cargado:

```bash
sudo apt update
sudo apt install -y \
  ros-${ROS_DISTRO}-moveit \
  ros-${ROS_DISTRO}-moveit-configs-utils \
  ros-${ROS_DISTRO}-moveit-kinematics \
  ros-${ROS_DISTRO}-moveit-planners-ompl \
  ros-${ROS_DISTRO}-moveit-simple-controller-manager \
  ros-${ROS_DISTRO}-ros2-control \
  ros-${ROS_DISTRO}-ros2-controllers \
  ros-${ROS_DISTRO}-xacro
```

La configuración y las demos de MoveIt están incluidas en este espacio de trabajo. Después de instalar las dependencias, vuelve a compilar el espacio de trabajo:

```bash
cd your/path/to/rebotarm_ros2
colcon build --symlink-install
source install/setup.bash
```

Verifica los paquetes de MoveIt y los puntos de entrada de las demos:

```bash
ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos
```

Las entradas esperadas incluyen al menos:

```text
rebotarm_moveit_demos draw_square
rebotarm_moveit_demos pick_place
```

### Usar MoveIt

La planificación con MoveIt se puede usar a través de la interfaz gráfica de RViz o llamando a nodos, tanto en simulación como en escenas reales.

#### Usar MoveIt en simulación

MoveIt utiliza la interfaz de hardware virtual de ros2_control para la simulación en RViz:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs
```

Por defecto esto inicia:

- `move_group`
- `robot_state_publisher`
- `ros2_control_node`
- `joint_state_broadcaster`
- `rebotarm_controller`
- `gripper_controller`
- RViz con el plugin MoveIt MotionPlanning

RViz se abre automáticamente y carga el modelo B601-RS. Puedes controlar el movimiento mediante el panel de la interfaz gráfica a la izquierda.

Para ejecutar el entorno MoveIt sin RViz:

```bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs use_rviz:=false
```

#### Usar MoveIt con hardware reBotArm

Para escenas reales, inicia primero el nodo de control de hardware y luego inicia el entorno MoveIt para hardware real:

```bash
ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0
```

En otra terminal:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py model:=rs
```

:::caution
Antes de ejecutar cualquier demo en hardware real, asegúrate de que el espacio de trabajo del brazo robótico esté libre de personas y obstáculos, verifica primero la trayectoria planificada en RViz y estate preparado para detener el controlador en cualquier momento.
:::

### Ejecutar la demo de dibujar un cuadrado

Inicia primero el entorno MoveIt y luego ejecuta en otra terminal:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=rs
```

`draw_square` mueve `gripper_tcp` a través de las cuatro esquinas de un rectángulo coplanar. Los parámetros predeterminados están en:

```text
src/rebotarm_moveit_demos/config/draw_square_rs.yaml
```

Parámetros comunes:

| Parámetro | Descripción |
|---|---|
| `start_point` | Posición de reinicio de las articulaciones antes de que comience la demo |
| `rectangle_center` | Centro del rectángulo en `base_link` |
| `rectangle_width` / `rectangle_height` | Dimensiones del rectángulo en metros |
| `tcp_rpy` | Orientación del TCP, con una pinza orientada hacia abajo por defecto |
| `tcp_yaw_offsets` | Valores alternativos de yaw de IK usados para evitar grandes giros de la articulación 6 |

`draw_square` es útil para verificar si MoveIt IK, la planificación de trayectorias y la ejecución funcionan correctamente. Si la planificación falla, primero comprueba si el estado articular inicial, el centro del rectángulo, la orientación del TCP y los límites articulares son razonables.

### Ejecutar la demo de Pick-place

Inicia primero el entorno de MoveIt y luego ejecuta en otra terminal:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py model:=rs
```

Los parámetros predeterminados están en:

```text
src/rebotarm_moveit_demos/config/pick_place_rs.yaml
```

Parámetros comunes:

| Parámetro | Descripción |
|---|---|
| `ready_point` | Posición articular de preparado usada antes y después de pick/place |
| `pick_position` | Posición del centro de la base del objeto en `base_link` |
| `pick_tcp_rpy` / `place_tcp_rpy` | Orientación del TCP para pick y place |
| `object_dimensions` | Dimensiones del objeto de la escena de planificación en metros |
| `max_gripper_width` | Apertura total máxima del efector de agarre, por defecto `0.09m` |
| `open_gripper_position` / `grasp_gripper_position` / `closed_gripper_position` | Posiciones articulares simuladas de un solo lado del efector de agarre |
| `hardware_open_gripper_position` / `hardware_closed_gripper_position` | Posiciones de apertura/cierre del motor del efector de agarre de hardware |

`pick_place` añade un objeto objetivo a la escena de planificación, abre el efector de agarre, se mueve a la pose de recogida, cierra el efector de agarre, se mueve a la pose de colocación y suelta el objeto. Las posiciones articulares simuladas del efector de agarre y las posiciones reales del motor del efector de agarre de hardware son parámetros diferentes. Antes de ejecutar en hardware real, confirma la dirección de apertura/cierre del efector de agarre y sus límites.

### Archivos de configuración de MoveIt

| Archivo | Descripción |
|---|---|
| `rebotarm_moveit_config/config/rebotarm_rs.urdf.xacro` | Modelo de robot B601-RS usado por MoveIt, incluyendo el efector de agarre y `gripper_tcp` |
| `rebotarm_moveit_config/config/rebotarm_rs.ros2_control.xacro` | Descripción de hardware simulado de ros2_control para simulación |
| `rebotarm_moveit_config/config/rebotarm_rs.srdf` | Grupos de MoveIt, efector final, estados predeterminados y configuración semántica |
| `rebotarm_moveit_config/config/kinematics.yaml` | Configuración del solucionador IK |
| `rebotarm_moveit_config/config/joint_limits.yaml` | Límites articulares usados por la planificación de MoveIt |
| `rebotarm_moveit_config/config/ompl_planning.yaml` | Parámetros del planificador OMPL |
| `rebotarm_moveit_config/config/moveit_controllers.yaml` | Configuración del controlador de ejecución de trayectorias de MoveIt para simulación |
| `rebotarm_moveit_config/config/moveit_hardware_controllers.yaml` | Configuración del controlador de ejecución de trayectorias de MoveIt para hardware real |
| `rebotarm_moveit_config/config/ros2_controllers.yaml` | Configuración de controladores de ros2_control para simulación |
| `rebotarm_moveit_config/config/initial_positions.yaml` | Posiciones articulares iniciales para hardware simulado |
| `rebotarm_moveit_demos/config/draw_square_rs.yaml` | Parámetros de la demo de dibujar cuadrado |
| `rebotarm_moveit_demos/config/pick_place_rs.yaml` | Parámetros de la demo de Pick-place |

## Preguntas frecuentes (FAQ)

### 1. Aparece `socketcan write failed: Network is down` al iniciar

Esto significa que la interfaz CAN aún no se ha levantado. Primero comprueba la interfaz:

```bash
ip -details link show can0
```

Reinicia CAN:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### 2. No se puede encontrar `can0`

Primero confirma que el adaptador CAN está conectado y comprueba el nombre de la interfaz:

```bash
ip -br link
```

Si utilizas PCAN-USB:

```bash
sudo modprobe peak_usb
ip -br link
```

Si el nombre de la interfaz no es `can0`, reemplaza `channel` al lanzar:

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can1
```

### 3. El modelo del robot no se muestra en RViz

Comprueba lo siguiente:

- Si el espacio de trabajo ha sido cargado con: `source install/setup.bash`
- Si `Fixed Frame` está configurado como `base_link`
- Si `robot_state_publisher` se inició correctamente
- Si la ruta de las mallas URDF es `package://rebotarm_bringup/description/...`

Si el modelo se muestra pero la vista no es conveniente, cambia el tipo de vista a `Move Camera` en el panel `Views` de RViz, establece `Target Frame` en `base_link` y ajusta `Distance`.

### 4. La planificación de MoveIt falla

Si la demo imprime `MoveIt planning failed`, comprueba lo siguiente:

- Confirma que `demo.launch.py` o `hardware.launch.py` se ha iniciado y que `move_group` se está ejecutando correctamente.
- Confirma que el estado articular actual no está desactualizado y que `/joint_states` o `/rebotarm/joint_states` se está publicando con normalidad.
- Confirma que el punto objetivo está dentro del espacio de trabajo alcanzable y que la orientación objetivo no hace que la muñeca o el efector de agarre colisionen con el cuerpo del brazo.
- Confirma que los límites articulares y de velocidad en `joint_limits.yaml` coinciden con el brazo robótico actual.
- Primero planifica manualmente en el plugin MotionPlanning de RViz. Ejecuta la demo solo después de confirmar que la trayectoria está libre de colisiones.

### 5. Aparece una advertencia de puerto SHM de FastDDS

Si la terminal muestra algo como:

```text
[RTPS_TRANSPORT_SHM Error] Failed init_port fastrtps_port7002: open_and_lock_file failed
```

Esto suele deberse a archivos de bloqueo de memoria compartida de FastDDS que quedaron después de que un proceso ROS2 anterior saliera de forma anómala. Si los servicios y acciones siguen respondiendo con normalidad, esta advertencia normalmente no afecta al control.

Para limpiarlo, detén primero los procesos ROS2 relacionados y luego ejecuta:

```bash
pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*
```

Si quieres omitir temporalmente el transporte por memoria compartida, establece lo siguiente antes de iniciar ROS2:

```bash
export FASTDDS_BUILTIN_TRANSPORTS=UDPv4
```

### 6. ¿Qué pasa si uso Humble?

Los usuarios de Humble pueden seguir el mismo flujo de trabajo, reemplazar `jazzy` por `humble` en los comandos e instalar las dependencias correspondientes según la documentación oficial de Humble. Después de cambiar de distribución ROS2, ejecuta `colcon build` de nuevo.

### 7. No se puede encontrar `pinocchio`

Si un nodo o un comando de verificación informa:

```text
ModuleNotFoundError: No module named 'pinocchio'
```

Primero asegúrate de que el paquete Pinocchio para tu distribución ROS2 esté instalado:

```bash
sudo apt install -y ros-${ROS_DISTRO}-pinocchio
```

Luego asegúrate de que la terminal actual haya cargado el entorno de ROS2:

```bash
source /opt/ros/${ROS_DISTRO}/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"
```

Si aún no se puede encontrar, comprueba si la ruta de búsqueda de Python actual contiene la ruta del paquete Python de ROS2:

```bash
python3 -c "import sys; print('\n'.join(sys.path))"
```

Después de cargar Jazzy, deberías ver una ruta similar a `/opt/ros/jazzy/lib/python3.12/site-packages`. Si utilizas Humble, reemplaza `jazzy` por `humble` en los comandos.

## Contacto

- Soporte técnico: [Submit an Issue](https://github.com/Seeed-Projects/reBotArmController_ROS2/issues)
- Repositorio del proyecto: [Github](https://github.com/Seeed-Projects/reBotArmController_ROS2)
- Foro: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## Referencias

- [Guía rápida de inicio de reBot Arm B601-RS](https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/)
- [Documentación de ROS2 Humble](https://docs.ros.org/en/humble/)
- [Documentación de ROS2 Jazzy](https://docs.ros.org/en/jazzy/)
- [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py)
- [Documentación de MoveIt 2](https://moveit.picknik.ai/main/index.html)
