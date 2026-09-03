---
description: Este tutorial muestra cómo configurar el espacio de trabajo de control ROS2 para el reBot Arm B601-DM, incluyendo control del brazo, visualización en RViz e integración con MoveIt2.
title: Integración ROS2 de reBot Arm B601-DM
keywords:
  - reBot Arm
  - B601-DM
  - ROS2
  - Humble
  - Jazzy
  - RViz
  - Robot Arm
  - Robotics
slug: /rebot_arm_b601_dm_ros2_integration
sku: 100065783, 100095532
last_update:
  date: 2026-05-29
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-29'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_ros2_integration/
---

import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

# Guía de integración ROS2 de reBot Arm B601-DM

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Humble | Jazzy-blue.svg" alt="ROS2 Humble | Jazzy" />
    <img src="https://img.shields.io/badge/Python-3.10%2B-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Version-v0.2.3-brightgreen.svg" alt="Version v0.2.3" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
</p>

<p align="center">
  <strong>Control ROS2 · Visualización en RViz · Compatibilidad con MoveIt2</strong>
</p>

Este tutorial muestra cómo ejecutar el espacio de trabajo de control ROS2 `rebotarm_ros2` para el reBot Arm B601-DM. El espacio de trabajo envuelve el SDK de Python de bajo nivel `reBotArm_control_py` en tópicos, servicios y acciones de ROS2, lo que facilita la integración de planificación de alto nivel, agarre visual, visualización en RViz y desarrollo de aplicaciones personalizadas.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/v2MlI3zMi1k?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
Este tutorial usa `Ubuntu 24.04 + ROS2 Jazzy + Python 3.12` como entorno de referencia principal. ROS2 Humble / Ubuntu 22.04 pueden seguir el mismo flujo de trabajo con la distribución ROS2 correspondiente.
:::

## Características del proyecto

1. **Interfaces estándar de ROS2**  
   Proporciona interfaces ROS2 comunes como `/joint_states`, `FollowJointTrajectory`, `GripperCommand` y `MoveToPose`, lo que facilita la integración con MoveIt2, canalizaciones de agarre visual o sistemas a nivel de tareas.

2. **Nodos de cinemática, trayectoria y compensación de gravedad listos para usar**  
   Proporciona cinemática directa/inversa, ejecución de trayectorias, compensación de gravedad y compatibilidad con visualización en RViz listas para usar.

3. **Integración con MoveIt 2**  
   Incluye una configuración completa de MoveIt 2 y demostraciones de aplicaciones, compatible con el plugin MotionPlanning de RViz para planificación simulada y ejecución en hardware real.

## Especificaciones

El hardware para este tutorial es proporcionado por [Seeed Studio](https://www.seeedstudio.com/).

<table>
  <thead>
    <tr>
      <th>Parámetro</th>
      <th>Especificación</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Modelo de brazo robótico</td>
      <td>reBot Arm B601-DM</td>
    </tr>
    <tr>
      <td>Grados de libertad</td>
      <td>6-DOF + pinza</td>
    </tr>
    <tr>
      <td>Versión del motor</td>
      <td>Versión de motor DAMIAO</td>
    </tr>
    <tr>
      <td>Comunicación</td>
      <td>Bus CAN mediante puente serie USB2CAN</td>
    </tr>
    <tr>
      <td>Puerto serie predeterminado</td>
      <td><code>/dev/ttyACM0</code></td>
    </tr>
    <tr>
      <td>Sistema recomendado</td>
      <td>Ubuntu 24.04 + ROS2 Jazzy + Python 3.12</td>
    </tr>
    <tr>
      <td>Sistema de referencia</td>
      <td>Ubuntu 22.04 + ROS2 Humble + Python 3.10</td>
    </tr>
  </tbody>
</table>

## Lista de materiales (BOM)

| Componente | Cantidad | Incluido |
|--|--|--|
| Brazo robótico reBot Arm B601-DM | 1 | ✅ |
| Pinza | 1 | ✅ |
| Puente serie USB2CAN | 1 | ✅ |
| Adaptador de corriente (24V) | 1 | ✅ |
| Cable USB-C / comunicación | 1 | ✅ |
| PC host con Ubuntu | 1 | Preparado por el usuario |

## Cableado

1. Conecta el puente serie USB2CAN al bus CAN del brazo robótico.
2. Conecta la fuente de alimentación de 24V y enchufa el adaptador USB2CAN al PC host.
3. Confirma que el host reconoce el dispositivo serie:

```bash
ls /dev/ttyACM*
```

Si necesitas conceder temporalmente permisos del puerto serie:

```bash
sudo chmod 666 /dev/ttyACM0
```

Se recomienda añadir en su lugar el usuario actual al grupo `dialout`. Cierra sesión y vuelve a iniciarla para que el cambio surta efecto:

```bash
sudo usermod -a -G dialout $USER
```

## Requisitos del entorno

| Elemento | Requisito recomendado |
|------|------|
| Sistema operativo | Ubuntu 24.04, Ubuntu 22.04 se puede usar como referencia |
| ROS2 | Jazzy, Humble se puede usar como referencia |
| Python | Python del sistema. Jazzy suele usar 3.12, mientras que Humble suele usar 3.10 |

## Pasos de instalación

### Paso 0. Completar la configuración básica del brazo robótico

Antes de comenzar la integración con ROS2, completa la [Guía de inicio rápido de reBot Arm B601-DM](https://wiki.seeedstudio.com/es/rebot_b601_dm_getting_started/), incluyendo el montaje, la configuración de ID de los motores, la inicialización de la posición cero y la verificación básica de conectividad.

### Paso 1. Instalar la versión de ROS2 para tu sistema Ubuntu

Consulta la documentación oficial de ROS2:

- [Instalación de ROS2 Jazzy en Ubuntu](https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html)
- [Instalación de ROS2 Humble en Ubuntu](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)

:::tip

Si usas Ubuntu 24.04, debes instalar ROS 2 Jazzy.

Si usas Ubuntu 22.04, debes instalar ROS 2 Humble.

:::

### Paso 2. Instalar herramientas de compilación y dependencias de ROS

Instala colcon, pip, Git y los paquetes de ROS requeridos por este espacio de trabajo:

```bash
sudo apt update
sudo apt install -y python3-colcon-common-extensions python3-pip git
sudo apt install -y \
  ros-jazzy-control-msgs \
  ros-jazzy-trajectory-msgs \
  ros-jazzy-tf-transformations \
  ros-jazzy-robot-state-publisher \
  ros-jazzy-rviz2 \
  ros-jazzy-pinocchio
```

Verifica la instalación:

```bash
source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print('pinocchio', pinocchio.__version__)"
```

Si usas ROS2 Humble, reemplaza los nombres de paquetes `ros-jazzy-*` por `ros-humble-*` y
ejecuta `source /opt/ros/humble/setup.bash`.

### Paso 3. Clonar el repositorio de código

Usa por defecto el repositorio oficial de Seeed-Projects:

```bash
git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2
```

### Paso 4. Instalar motorbridge

Instala `motorbridge` desde la fuente oficial de PyPI:

```bash
python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge
```

### Paso 5. Obtener el SDK de bajo nivel

```bash
mkdir -p third_party
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git third_party/reBotArm_control_py
```

### Paso 6. Compilar el espacio de trabajo

```bash
source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash
```

Verifica las entradas ejecutables:

```bash
ros2 pkg executables rebotarmcontroller
```

Las entradas esperadas incluyen:

```text
rebotarmcontroller reBotArmController
rebotarmcontroller GravityCompensation
rebotarmcontroller GripperControl
rebotarmcontroller MoveTo
rebotarmcontroller MoveToPose
```

## Inicio rápido

:::caution
Antes de usar el robot, ten en cuenta lo siguiente: **El controlador del brazo tiene un alto grado de libertad. Antes de habilitar el controlador o alimentar el brazo, asegúrate de que el área de trabajo esté libre de personas y obstáculos. Revisa cuidadosamente cada comando de movimiento para evitar accidentes. Las operaciones peligrosas están estrictamente prohibidas; eres responsable de cualquier consecuencia.**
:::

### Iniciar el sistema completo

El arranque completo lanza:

- Nodo de control `reBotArmController`
- `robot_state_publisher`
- RViz opcional

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0  #Do not open the RViz visualization interface when starting communication
```

:::tip
Cada vez que abras una nueva terminal, primero debes ejecutar los dos comandos siguientes

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
```
:::

Si tu puerto serie no es `/dev/ttyACM0`, sustitúyelo por el nombre real del dispositivo:

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM1
```

### Iniciar la visualización en RViz

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0 use_rviz:=true   #Open the RViz visualization interface when starting communication
```

Si el modelo aparece demasiado pequeño en RViz, ajusta la vista desde el panel `Views` de la izquierda:

- Establece `Target Frame` en `base_link`
- Ajusta `Distance`, por ejemplo a `1.0` o `1.5`
- Usa la rueda del ratón para hacer zoom
- Confirma que `Fixed Frame` está configurado en `base_link`

### Iniciar solo el nodo de control

Si no se necesitan URDF y RViz:

```bash
ros2 launch rebotarm_bringup driver.launch.py channel:=/dev/ttyACM0
```

También puedes ejecutar el nodo directamente:

```bash
ros2 run rebotarmcontroller reBotArmController
```

:::tip
A diferencia de `driver.launch.py`, que pasa archivos de configuración desde `rebotarm_bringup/config`, ejecutar el controlador directamente recurre a la configuración de brazo predeterminada del SDK. Para un uso normal, se recomienda el lanzamiento a través de ROS.
:::

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

Si necesitas múltiples brazos robóticos o quieres ejecutarlo junto con otros sistemas ROS2, puedes cambiar el espacio de nombres en tiempo de lanzamiento:

```bash
ros2 launch rebotarm_bringup bringup.launch.py arm_namespace:=left_arm
```

En este caso, `/rebotarm/joint_states` se convierte en `/left_arm/joint_states`.

## APIs comunes

### Tópicos de estado

| API | Tipo | Descripción |
|---|---|---|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | Posiciones, velocidades y esfuerzos de las 6 articulaciones |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | Modo de control, estado de habilitación, máquina de estados y códigos de error |
| `/rebotarm/joints/<joint>/state` | `rebotarm_msgs/msg/JointMotorState` | Estado del motor de una sola articulación |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | Estado del motor de la pinza |

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
| `/rebotarm/set_mode` | `rebotarm_msgs/srv/SetMode` | Cambiar entre `mit`, `pos_vel` y `vel` |
| `/rebotarm/set_zero` | `rebotarm_msgs/srv/SetZero` | Establecer la posición cero para todas las articulaciones o una sola articulación |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | Precomprobación de IK y solución de articulaciones objetivo |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | Establecer la posición del motor de la pinza en rad |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | Iniciar la compensación de gravedad |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | Detener la compensación de gravedad |

### Acciones

| API | Tipo | Descripción |
|---|---|---|
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | Movimiento de la pose del efector final |
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | Punto de entrada estándar compatible con trayectorias de articulaciones |
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

### 3. Enviar un objetivo de articulaciones

```bash
ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"
```

### 4. Volver a origen seguro y deshabilitar

```bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

## Ejemplos de demostración

Todos los ejemplos suponen que `reBotArmController` ya se está ejecutando:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0
```

### Ejemplo de movimiento de articulaciones

Controlar las 6 articulaciones a la vez. La unidad es rad:

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

Esto detiene primero la compensación de gravedad, luego mueve el brazo de vuelta a la posición segura de origen y lo deshabilita.

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
| `arm.yaml` | ID de motor, de retroalimentación y parámetros de control para las 6 articulaciones del brazo |
| `gripper.yaml` | ID de motor de la pinza, ID de retroalimentación, proveedor y parámetros de control |
| `driver_params.yaml` | Ejemplos de parámetros de ROS |

Parámetros de lanzamiento comunes:

| Parámetro | Predeterminado | Descripción |
|---|---|---|
| `arm_config` | `arm.yaml` integrado de bringup | Ruta de configuración del brazo |
| `gripper_config` | `gripper.yaml` integrado de bringup | Ruta de configuración de la pinza |
| `channel` | Cadena vacía | Usar YAML por defecto. Sobrescribe el puerto serie cuando no está vacío |
| `joint_state_rate` | `100.0` | Frecuencia de publicación de `/rebotarm/joint_states` |
| `cmd_arbitration` | `reject` | Arbitraje de comandos de bajo nivel durante la ejecución de trayectorias del brazo. `reject` o `preempt`; los comandos de bajo nivel de la pinza no interrumpen las trayectorias del brazo |
| `arm_namespace` | `rebotarm` | Prefijo de espacio de nombres de ROS |
| `frame_id` | `base_link` | Marco base del brazo robótico |
| `ee_frame_id` | `end_link` | Marco del efector final |
| `use_rviz` | `false` | Indica si se inicia RViz |

## Tópicos de comandos de bajo nivel

El espacio de trabajo de ROS2 también proporciona tópicos de depuración de motores de bajo nivel:

| API | Tipo | Descripción |
|---|---|---|
| `/rebotarm/joints/<joint>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando MIT de articulación única en bruto |
| `/rebotarm/joints/<joint>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando en bruto de posición-velocidad de articulación única |
| `/rebotarm/joints/<joint>/cmd/vel` | `rebotarm_msgs/msg/JointVelCmd` | Comando en bruto de velocidad de articulación única |
| `/rebotarm/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando MIT en bruto de la pinza |
| `/rebotarm/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando en bruto de posición-velocidad de la pinza |
| `/rebotarm/gripper/cmd/vel` | `rebotarm_msgs/msg/JointVelCmd` | Comando en bruto de velocidad de la pinza |

:::caution
Los tópicos de comandos de bajo nivel están pensados para depuración y experimentos. No realizan IK, planificación de trayectorias ni comprobaciones de límites de URDF. Para movimiento a nivel de aplicación, es preferible usar servicios y acciones como `/move_to_pose`, `/follow_joint_trajectory` y `/gripper/set`.
:::

## MoveIt 2

MoveIt 2 es el framework de planificación de movimiento utilizado aquí para cinemática inversa, comprobación de colisiones, planificación de trayectorias y ejecución. Las demos están separadas en su propio paquete para que los flujos de aplicación permanezcan aislados del driver base.
Para más detalles, consulta la [Documentación oficial de MoveIt 2](https://moveit.picknik.ai/main/index.html).

El contenido relacionado con MoveIt se divide en dos paquetes:

| Paquete | Propósito |
|---|---|
| `rebotarm_moveit_config` | Modelo del robot, SRDF, cinemática, límites de articulaciones, controlador y configuración de RViz |
| `rebotarm_moveit_demos` | Demos de aplicación basadas en MoveIt 2 |

El entorno de MoveIt utiliza hardware simulado a través de `ros2_control` y `move_group` para la planificación y ejecución. Está pensado para validar el modelo, la IK, la planificación de trayectorias y el flujo de las demos en RViz.

Este repositorio también es compatible con hardware real. Antes de conectar hardware real, asegúrate de que la configuración de cero del brazo, las direcciones de las articulaciones, los límites de articulaciones, los límites de velocidad y el rango de la pinza sean todos correctos, o mantén la configuración predeterminada del repositorio.

### Configuración del entorno MoveIt

Primero asegúrate de que el entorno ROS2 esté disponible. Puedes instalar paquetes para la distribución de ROS actualmente cargada a través de `ROS_DISTRO`:

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

La configuración de MoveIt y las demos están incluidas en este espacio de trabajo. Después de instalar las dependencias, vuelve a compilar el espacio de trabajo:

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

Las entradas esperadas incluyen:

```text
rebotarm_moveit_demos draw_square
rebotarm_moveit_demos pick_place
```

### Usar MoveIt

La planificación con MoveIt se puede usar a través de la GUI de RViz o mediante nodos de ROS, tanto en simulación como en escenas reales.

#### Usar MoveIt en simulación

MoveIt utiliza la interfaz de hardware virtual de ros2_control para la simulación en RViz:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py
```

Por defecto esto inicia:

- `move_group`
- `robot_state_publisher`
- `ros2_control_node`
- `joint_state_broadcaster`
- `rebotarm_controller`
- `gripper_controller`
- RViz con el plugin MoveIt MotionPlanning

RViz se abre automáticamente y carga el modelo URDF del robot. Puedes controlar el movimiento a través del panel en el lado izquierdo de la GUI.

Para ejecutar el entorno MoveIt sin RViz:

```bash
ros2 launch rebotarm_moveit_config demo.launch.py use_rviz:=false
```

#### Usar MoveIt con hardware reBotArm

Para el robot real, primero inicia el controlador con la interfaz de hardware en lugar del controlador virtual, luego inicia el entorno MoveIt para hardware:

```bash
ros2 launch rebotarm_bringup driver.launch.py channel:=/dev/ttyACM0
```

En otra terminal:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py
```

Para repetir: antes de ejecutar cualquier demo en hardware real, asegúrate de que el espacio de trabajo esté libre de personas y obstáculos, verifica la trayectoria planificada en RViz y está listo para detener el controlador en cualquier momento.

### Ejecutar la demo draw-square

Inicia primero el entorno MoveIt y luego ejecuta en otra terminal:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py
```

`draw_square` mueve `gripper_tcp` a través de las cuatro esquinas de un rectángulo coplanar.
Parámetros predeterminados:

```text
src/rebotarm_moveit_demos/config/draw_square.yaml
```

Parámetros comunes:

| Parámetro | Descripción |
|---|---|
| `start_point` | Posición de reinicio de las articulaciones antes de que comience la demostración |
| `rectangle_center` | Centro del rectángulo en `base_link` |
| `rectangle_width` / `rectangle_height` | Dimensiones del rectángulo en metros |
| `tcp_rpy` | Orientación del TCP, por defecto una garra orientada hacia abajo |
| `tcp_yaw_offsets` | Valores alternativos de yaw de IK usados para evitar grandes giros de la articulación 6 |

### Ejecutar la demostración de pick-place

Inicia primero el entorno de MoveIt y luego ejecuta en otra terminal:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py
```

Parámetros predeterminados:

```text
src/rebotarm_moveit_demos/config/pick_place.yaml
```

Parámetros comunes:

| Parámetro | Descripción |
|---|---|
| `ready_point` | Posición de articulaciones de listo usada antes y después de pick/place |
| `pick_position` | Posición del centro inferior del objeto en `base_link` |
| `pick_tcp_rpy` / `place_tcp_rpy` | Orientación del TCP para pick y place |
| `object_dimensions` | Dimensiones del objeto de la escena de planificación en metros |
| `max_gripper_width` | Apertura total máxima de la garra, por defecto `0.09m` |
| `open_gripper_position` / `closed_gripper_position` | Posiciones de apertura/cierre de la articulación de la garra de un solo lado simulada |
| `hardware_open_gripper_position` / `hardware_closed_gripper_position` | Posiciones de apertura/cierre del motor de la garra de hardware |
| `grasp_gripper_to_object_width` | Calcula la posición de agarre a partir del ancho del objeto |

### Archivos de configuración de MoveIt

| Archivo | Descripción |
|---|---|
| `rebotarm_moveit_config/config/rebotarm.urdf.xacro` | Modelo de robot usado por MoveIt |
| `rebotarm_moveit_config/config/rebotarm.srdf` | Grupos de MoveIt, efector final y estados predeterminados |
| `rebotarm_moveit_config/config/kinematics.yaml` | Configuración del solucionador de IK |
| `rebotarm_moveit_config/config/joint_limits.yaml` | Límites de articulaciones usados por la planificación de MoveIt |
| `rebotarm_moveit_config/config/moveit_controllers.yaml` | Configuración del controlador de ejecución de trayectorias de MoveIt |
| `rebotarm_moveit_config/config/ros2_controllers.yaml` | Configuración de controladores de ros2_control |
| `rebotarm_moveit_config/config/initial_positions.yaml` | Posiciones iniciales de articulaciones para hardware simulado |
| `rebotarm_moveit_demos/config/draw_square.yaml` | Parámetros de la demostración de dibujar un cuadrado |
| `rebotarm_moveit_demos/config/pick_place.yaml` | Parámetros de la demostración de pick-place |

## Preguntas frecuentes (FAQ)

### 1. Aparece `open serial port /dev/ttyACM0 failed` al iniciar

Esto significa que el puerto serie predeterminado no existe o que el nombre del dispositivo ha cambiado. Primero comprueba el dispositivo serie real:

```bash
ls /dev/ttyACM*
```

Luego especifícalo con `channel`:

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM1
```

### 2. Aparece `Device or resource busy` al iniciar

Esto significa que el puerto serie ya está ocupado por otro proceso. Las causas comunes incluyen un nodo ROS2 lanzado previamente, un ejemplo del SDK o un script de depuración que no ha salido. Primero comprueba los procesos:

```bash
ps aux | grep -E "reBotArmController|ros2|python"
```

Detén el proceso que ocupa el puerto serie y reinicia. El brazo y la garra deben compartir el mismo controlador de bajo nivel. No abras el mismo puerto serie por separado para el brazo y la garra.

### 3. Permiso denegado

Si el dispositivo serie existe pero se deniega el permiso:

```bash
sudo usermod -a -G dialout $USER
```

Cierra sesión y vuelve a iniciarla para que el cambio surta efecto. Para depuración temporal, también puedes ejecutar:

```bash
sudo chmod 666 /dev/ttyACM0
```

### 4. El modelo del robot no se muestra en RViz

Comprueba lo siguiente:

- Si el espacio de trabajo ha sido cargado con: `source install/setup.bash`
- Si `Fixed Frame` está configurado como `base_link`
- Si `robot_state_publisher` se inició correctamente
- Si la ruta de malla URDF es `package://rebotarm_bringup/description/meshes/...`

### 5. Aparece una advertencia de puerto FastDDS SHM

Si la terminal muestra algo como:

```text
[RTPS_TRANSPORT_SHM Error] Failed init_port fastrtps_port7002: open_and_lock_file failed
```

Esto suele ser causado por archivos de bloqueo de memoria compartida de FastDDS sobrantes después de que un proceso ROS2 anterior haya salido de forma anormal. Si los servicios y acciones aún responden con normalidad, esta advertencia normalmente no afecta al control.

Para limpiarlo, detén primero los procesos ROS2 relacionados y luego ejecuta:

```bash
pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*
```

Si quieres omitir temporalmente el transporte de memoria compartida, establece lo siguiente antes de iniciar ROS2:

```bash
export FASTDDS_BUILTIN_TRANSPORTS=UDPv4
```

### 6. ¿Qué pasa si uso Humble?

Los usuarios de Humble pueden seguir el mismo flujo de trabajo, reemplazar `jazzy` por `humble` en los comandos e instalar las dependencias correspondientes según la documentación oficial de Humble. Después de cambiar de distribución de ROS2, ejecuta `colcon build` de nuevo.

### 7. No se puede encontrar `pinocchio`

Si un nodo o comando de verificación informa:

```text
ModuleNotFoundError: No module named 'pinocchio'
```

Primero asegúrate de que el paquete Pinocchio para tu distribución de ROS2 esté instalado:

```bash
sudo apt install -y ros-jazzy-pinocchio
```

Luego asegúrate de que la terminal actual haya cargado el entorno de ROS2:

```bash
source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"
```

Si aún no se puede encontrar, comprueba si la ruta de búsqueda de Python actual contiene la ruta del paquete Python de ROS2:

```bash
python3 -c "import sys; print('\n'.join(sys.path))"
```

Después de cargar Jazzy, deberías ver una ruta similar a
`/opt/ros/jazzy/lib/python3.12/site-packages`. Si usas Humble, reemplaza `jazzy` por
`humble` en los comandos.

## Contacto

- Soporte técnico: [Submit an Issue](https://github.com/Seeed-Projects/reBotArmController_ROS2/issues)
- Repositorio del proyecto: [Github](https://github.com/Seeed-Projects/reBotArmController_ROS2)
- Foro: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## Referencias

- [Guía de inicio rápido de reBot Arm B601-DM](https://wiki.seeedstudio.com/es/rebot_b601_dm_getting_started/)
- [Demostración de agarre visual de reBot Arm B601-DM](https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_grasping_demo/)
- [reBot Arm B601-DM Pinocchio y MeshCat](https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_pinocchio_meshcat/)
- [Tutorial de reBot Arm B601-DM LeRobot](https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_lerobot/)
- [Documentación de ROS2 Humble](https://docs.ros.org/en/humble/)
- [Documentación de ROS2 Jazzy](https://docs.ros.org/en/jazzy/)
- [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py)
