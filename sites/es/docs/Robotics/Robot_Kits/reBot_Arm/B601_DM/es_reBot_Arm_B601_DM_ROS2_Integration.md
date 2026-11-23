---
description: Este tutorial muestra cómo configurar el espacio de trabajo de control ROS2 para el reBot Arm B601-DM, incluyendo control del brazo, visualización en RViz e integración con MoveIt2.
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_dm.png
title: B601-DM con ROS2
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
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_ros2_integration/
---
import '/src/css/rebot-wiki-style.css';


# Integración de reBot Arm B601-DM con ROS2

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_dm.png" alt="reBot Arm B601-DM" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>Consigue uno ahora</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

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

Este tutorial muestra cómo ejecutar el espacio de trabajo de control ROS2 `rebotarm_ros2` para el reBot Arm B601-DM. El espacio de trabajo encapsula el SDK de Python de bajo nivel `reBotArm_control_py` en tópicos, servicios y acciones de ROS2, lo que facilita la integración de planificación de alto nivel, agarre visual, visualización en RViz y desarrollo de aplicaciones personalizadas.

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

Si necesitas conceder temporalmente permisos para el puerto serie:

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

Este tutorial usa `~/rebotarm_ros2` como directorio del espacio de trabajo y el repositorio oficial de Seeed-Projects:

```bash
cd ~
git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd ~/rebotarm_ros2
```

Si clonaste en otro directorio, reemplaza cada `~/rebotarm_ros2` que aparezca más abajo por su ruta absoluta. Las rutas relativas como `third_party`, `src` e `install` son relativas a la raíz del espacio de trabajo.

### Paso 4. Instalar motorbridge

Instala `motorbridge` desde la fuente oficial de PyPI:

```bash
python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge
```

### Paso 5. Obtener el SDK de bajo nivel

```bash
cd ~/rebotarm_ros2
mkdir -p third_party
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git third_party/reBotArm_control_py
```

### Paso 6. Compilar el espacio de trabajo

:::note Versión del código
El latido de estado, la detección de salida de compensación de gravedad y el trazado de rectángulos descritos aquí corresponden al [PR #7 del controlador ROS2](https://github.com/Seeed-Projects/reBotArmController_ROS2/pull/7). Antes de usar estos comportamientos, asegúrate de que tu copia incluya esos cambios, luego recompila y reinicia el nodo de control.
:::

```bash
cd ~/rebotarm_ros2
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
Antes de usar el robot, ten en cuenta lo siguiente: **El controlador del brazo tiene un alto grado de libertad. Antes de habilitar el controlador o alimentar el brazo, asegúrate de que el área de trabajo esté libre de personas y obstáculos. Revisa cuidadosamente cada comando de movimiento para evitar accidentes. La operación peligrosa está estrictamente prohibida; eres responsable de cualquier consecuencia.**
:::

### Iniciar el sistema completo

En cada nueva terminal, entra en el espacio de trabajo y ejecuta `source` tanto del entorno de ROS2 como del espacio de trabajo. Los comandos siguientes usan `/opt/ros/jazzy/setup.bash`; para ROS2 Humble, usa en su lugar `/opt/ros/humble/setup.bash`.

El arranque completo lanza:

- Nodo de control `reBotArmController`
- `robot_state_publisher`
- RViz opcional

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm channel:=/dev/ttyACM0  #Do not open the RViz visualization interface when starting communication
```

:::tip
Cada vez que abras una nueva terminal, primero debes ejecutar los siguientes comandos

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
```
:::

Si tu puerto serie no es `/dev/ttyACM0`, reemplázalo por el nombre real del dispositivo:

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm channel:=/dev/ttyACM1
```

### Iniciar la visualización en RViz

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm channel:=/dev/ttyACM0 use_rviz:=true   #Open the RViz visualization interface when starting communication
```

Si el modelo aparece demasiado pequeño en RViz, ajusta la vista desde el panel `Views` de la izquierda:

- Establece `Target Frame` en `base_link`
- Ajusta `Distance`, por ejemplo a `1.0` o `1.5`
- Usa la rueda del ratón para hacer zoom
- Confirma que `Fixed Frame` está configurado en `base_link`

### Iniciar solo el nodo de control

Si no se necesitan URDF y RViz:

```bash
ros2 launch rebotarm_bringup driver.launch.py model:=dm channel:=/dev/ttyACM0
```

También puedes ejecutar el nodo directamente:

```bash
ros2 run rebotarmcontroller reBotArmController
```

:::tip
A diferencia de `driver.launch.py`, que pasa archivos de configuración desde `rebotarm_bringup/config`, ejecutar el controlador directamente recurre a la configuración predeterminada del brazo del SDK. Para un uso normal, se recomienda el lanzamiento a través de ROS.
:::

## Namespace de ROS2

El namespace predeterminado es:

```text
/rebotarm
```

Por lo tanto, todos los topics, servicios y acciones tienen el prefijo `/rebotarm`, por ejemplo:

```text
/rebotarm/joint_states
/rebotarm/enable
/rebotarm/move_to_pose
```

Si necesitas múltiples brazos robóticos o quieres ejecutarlo junto con otros sistemas ROS2, puedes cambiar el namespace en el momento del lanzamiento:

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm arm_namespace:=left_arm
```

En este caso, `/rebotarm/joint_states` se convierte en `/left_arm/joint_states`.

## APIs comunes

### Topics de estado

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

`--once` sale después de recibir un mensaje. El nodo de control publica `arm_status` cada segundo y al inicio o cuando hay cambios de estado, por lo que no se necesitan opciones QoS adicionales. Después de recompilar el código fuente modificado, reinicia el nodo de control. Si no llega ninguna salida, pulsa `Ctrl+C` para detener la comprobación y confirma que el nodo de control en la terminal A está en ejecución.

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

### Actions

| API | Tipo | Descripción |
|---|---|---|
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | Movimiento de la pose del efector final |
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | Punto de entrada estándar compatible con trayectorias de articulaciones |
| `/rebotarm/gripper/command` | `control_msgs/action/GripperCommand` | Acción estándar de la pinza |

## Ejemplos de control básico

### 1. Iniciar el nodo de control y comprobar su estado

**Terminal A: inicia el nodo de control y mantenlo en ejecución.** Gestiona continuamente las solicitudes de topics, servicios y acciones. Si `bringup.launch.py` o `driver.launch.py` ya se está ejecutando desde el Inicio Rápido, mantén esa terminal abierta; no inicies un segundo driver para el mismo brazo.

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup driver.launch.py model:=dm channel:=/dev/ttyACM0
```

Después de que aparezca `reBotArmController started`, mantén la terminal A en ejecución y usa otra terminal para los comandos posteriores.

**Terminal B: carga el entorno y comprueba que llegan los mensajes de estado.**

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once
```

Cada comando `--once` sale después de un mensaje. Continúa con los pasos 2–5 en la terminal B. Para monitorizar continuamente, carga el mismo entorno en una terminal adicional y ejecuta `ros2 topic echo /rebotarm/joint_states`. No se requiere un listener continuo de topics para enviar comandos; el driver en la terminal A debe permanecer en ejecución.

El nodo de control habilita automáticamente el brazo e inicia su bucle de control después de conectarse. Normalmente, `enabled` y `control_loop_active` en `arm_status` son ambos `true`, por lo que no se necesita una llamada manual a `/rebotarm/enable`. Si deshabilitaste el brazo anteriormente, primero confirma que no haya ninguna tarea activa de trayectoria, homing o compensación de gravedad y luego vuelve a habilitarlo:

```bash
# Only needed to resume control after the arm was disabled
ros2 service call /rebotarm/enable std_srvs/srv/Trigger "{}"
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

### 4. Safe Home y deshabilitar

```bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

## Ejemplos de demostración

Mantén el nodo de control en ejecución en la terminal A y usa la terminal B para los ejemplos siguientes. No repitas el comando de lanzamiento cuando un driver ya está en ejecución. En cada terminal nueva, carga primero el entorno:

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
```

`MoveTo` y `MoveToPose` pueden ejecutarse directamente después de que el nodo de control se inicie. `GravityCompensation` y `GripperControl` llaman internamente a `/rebotarm/enable`; no habilites manualmente el brazo antes de iniciarlos. Ejecuta los ejemplos de uno en uno, esperando a que cada uno termine antes de iniciar otro.

### Ejemplo de movimiento de articulaciones

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

El script primero llama a `/rebotarm/enable` y luego inicia la compensación de gravedad. Al pulsar `Ctrl+C`, llama a `/rebotarm/safe_home` seguido de `/rebotarm/disable`. `safe_home` se encarga de salir de la compensación de gravedad antes de moverse a la posición segura de origen.

Si el nodo de control en la terminal A se cierra, el programa de compensación de gravedad en la terminal B también sale automáticamente. También sale si falta el latido de estado durante unos 3 segundos, sin enviar solicitudes duplicadas de homing o deshabilitación. Cuando RS ya está en su modo MIT predeterminado, al entrar en compensación de gravedad se conserva el estado habilitado. DM mantiene su procedimiento existente de cambio de modo al pasar de modo de posición/velocidad a MIT.

Como alternativa, llama a los servicios manualmente; no ejecutes esta secuencia junto con el script. Un nodo de control iniciado normalmente no necesita otra solicitud de habilitación. Si estaba deshabilitado, sigue los Ejemplos de control básico para volver a habilitarlo primero.

```bash
ros2 service call /rebotarm/gravity_compensation/start std_srvs/srv/Trigger
ros2 service call /rebotarm/gravity_compensation/stop std_srvs/srv/Trigger
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

### Ejemplo interactivo de la pinza

```bash
ros2 run rebotarmcontroller GripperControl
```

Al salir, el script cierra la pinza y llama a `/rebotarm/disable`. Vuelve a habilitar el brazo antes de enviar más comandos manuales a la pinza. Ejecutar este script de nuevo habilita el brazo internamente.

Después del lanzamiento, introduce:

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
| `arm.yaml` | Parámetros de motor, ID de feedback y control para las 6 articulaciones del brazo |
| `gripper.yaml` | ID de motor de la pinza, ID de feedback, proveedor y parámetros de control |
| `driver_params.yaml` | Ejemplos de parámetros de ROS |

Parámetros de lanzamiento comunes:

| Parámetro | Predeterminado | Descripción |
|---|---|---|
| `arm_config` | `arm.yaml` integrado desde bringup | Ruta de configuración del brazo |
| `gripper_config` | `gripper.yaml` integrado desde bringup | Ruta de configuración de la pinza |
| `channel` | Cadena vacía | Usar YAML por defecto. Sobrescribe el puerto serie cuando no está vacío |
| `joint_state_rate` | `100.0` | Frecuencia de publicación de `/rebotarm/joint_states` |
| `cmd_arbitration` | `reject` | Arbitraje de comandos de bajo nivel durante la ejecución de trayectorias del brazo. `reject` o `preempt`; los comandos de bajo nivel de la pinza no tienen prioridad sobre las trayectorias del brazo |
| `arm_namespace` | `rebotarm` | Prefijo de namespace de ROS |
| `frame_id` | `base_link` | Frame base del brazo robótico |
| `ee_frame_id` | `end_link` | Frame del efector final |
| `use_rviz` | `false` | Si se inicia RViz o no |

## Topics de comandos de bajo nivel

El workspace de ROS2 también proporciona topics de depuración de motores de bajo nivel:

| API | Tipo | Descripción |
|---|---|---|
| `/rebotarm/joints/<joint>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando MIT bruto de una sola articulación |
| `/rebotarm/joints/<joint>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando bruto de posición-velocidad de una sola articulación |
| `/rebotarm/joints/<joint>/cmd/vel` | `rebotarm_msgs/msg/JointVelCmd` | Comando bruto de velocidad de una sola articulación |
| `/rebotarm/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando MIT bruto de la pinza |
| `/rebotarm/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando bruto de posición-velocidad de la pinza |
| `/rebotarm/gripper/cmd/vel` | `rebotarm_msgs/msg/JointVelCmd` | Comando bruto de velocidad de la pinza |

:::caution
Los temas de comandos de bajo nivel están pensados para depuración y experimentos. No realizan IK, planificación de trayectorias ni comprobaciones de límites URDF. Para movimiento a nivel de aplicación, es preferible usar servicios y acciones como `/move_to_pose`, `/follow_joint_trajectory` y `/gripper/set`.
:::

## MoveIt 2

MoveIt 2 es el framework de planificación de movimiento utilizado aquí para cinemática inversa, comprobación de colisiones, planificación de trayectorias y ejecución. Las demos están separadas en su propio paquete para que los flujos de aplicación permanezcan aislados del driver base.
Para más detalles, consulta la [Documentación oficial de MoveIt 2](https://moveit.picknik.ai/main/index.html).

El contenido relacionado con MoveIt se divide en dos paquetes:

| Paquete | Propósito |
|---|---|
| `rebotarm_moveit_config` | Modelo del robot, SRDF, cinemática, límites de articulaciones, configuración del controlador y de RViz |
| `rebotarm_moveit_demos` | Demos de aplicación basadas en MoveIt 2 |

El entorno de MoveIt usa hardware simulado a través de `ros2_control` y `move_group` para la planificación y ejecución. Está pensado para validar el modelo, la IK, la planificación de trayectorias y el flujo de las demos en RViz.

Este repositorio también es compatible con hardware real. Antes de conectar hardware real, asegúrate de que la configuración cero del brazo, las direcciones de las articulaciones, los límites de articulaciones, los límites de velocidad y el rango del gripper sean correctos, o mantén la configuración predeterminada del repositorio.

### Configuración del entorno MoveIt

Primero asegúrate de que el entorno ROS2 esté disponible. Puedes instalar paquetes para la distribución ROS actualmente cargada mediante `ROS_DISTRO`:

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

La configuración de MoveIt y las demos están incluidas en este workspace. Después de instalar las dependencias, recompila el workspace:

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
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

La planificación con MoveIt se puede usar a través de la GUI de RViz o mediante nodos ROS, tanto en simulación como en escenas reales.

#### Usar MoveIt en simulación

MoveIt usa la interfaz de hardware virtual de ros2_control para la simulación en RViz:

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=dm
```

De forma predeterminada esto inicia:

- `move_group`
- `robot_state_publisher`
- `ros2_control_node`
- `joint_state_broadcaster`
- `rebotarm_controller`
- `gripper_controller`
- RViz con el plugin MoveIt MotionPlanning

RViz se abre automáticamente y carga el modelo URDF del robot. Puedes controlar el movimiento mediante el panel en el lado izquierdo de la GUI.

Para ejecutar el entorno MoveIt sin RViz:

```bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=dm use_rviz:=false
```

#### Usar MoveIt con hardware reBotArm

Para el robot real, primero inicia el controlador con la interfaz de hardware en lugar del controlador virtual, luego inicia el entorno MoveIt para hardware:

```bash
ros2 launch rebotarm_bringup driver.launch.py model:=dm channel:=/dev/ttyACM0
```

En otra terminal:

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py model:=dm
```

Para repetir: antes de ejecutar cualquier demo en hardware real, asegúrate de que el área de trabajo esté libre de personas y obstáculos, verifica la trayectoria planificada en RViz y prepárate para detener el controlador en cualquier momento.

#### Establecer un objetivo y ejecutar en RViz

1. En `MotionPlanning` → `Planning`, establece `Start State` en `<current>` para planificar desde la retroalimentación actual de las articulaciones. Si ya muestra `<current>`, selecciona `home`, luego vuelve a cambiar a `<current>` y espera a que el estado se actualice.
2. Establece `Goal State` en `home`, luego abre `Joints` para ajustar el objetivo. Si `home` ya está seleccionado, elige otra opción y selecciona `home` de nuevo. **Confirma que el encabezado de la tabla diga `Group joints of goal state` antes de editar.** Si dice `Group joints of start state`, estás editando el inicio; vuelve a `Planning` y selecciona `Goal State` otra vez.
3. Para una comprobación inicial en simulación, establece solo la articulación objetivo `joint1` en alrededor de `10°` y deja las otras articulaciones en cero. Los valores de articulaciones rotacionales en el editor `Joints` usan grados; los estados de articulaciones y trayectorias de ROS usan radianes.
4. Haz clic en `Plan`, inspecciona la vista previa y luego haz clic en `Execute`. Si el estado del brazo cambia después de planificar, vuelve a planificar desde el estado actual.

En el plugin RViz de ROS2 Humble, `Joints` edita el estado de inicio o de objetivo que se actualizó más recientemente. Después de establecer `Start State` o de terminar la ejecución, confirma `Group joints of goal state` antes de volver a editar.

La esfera cian y los anillos rojo, verde y azul son controles de interacción del efector final para planificación manual. En el panel `Displays` de la esquina inferior izquierda, expande `MotionPlanning` → `Planning Request`:

- **Arrastrar el efector final manualmente:** desactiva `Query Start State` y activa `Query Goal State` para editar el objetivo.
- **Ejecutar scripts de rectángulo o pick-place:** desactiva tanto `Query Start State` como `Query Goal State` para ocultar la esfera y los anillos. Activa `Query Goal State` de nuevo para reanudar el arrastre manual.
- **Mantener visibles el robot y la traza:** mantén `PlanningScene` y `RectangleTrace` activados. Establece el tópico de `RectangleTrace` en `/draw_square/markers`. Si una ventana antigua de RViz no tiene visualización de traza, elige `Add` → `By display type` → `MarkerArray` y establece su `Topic` en `/draw_square/markers`, o reinicia MoveIt para cargar la configuración actualizada de RViz.

Si la ejecución informa `Invalid Trajectory: start point deviates from current robot state more than 0.05`, seguido de `failed or timeout reached`, el inicio de la trayectoria no coincide con la retroalimentación actual de las articulaciones. En este error, `expected` es el inicio de la trayectoria y `current` es la retroalimentación, en lugar del objetivo final. Restablece el inicio, confirma que estás editando el objetivo y vuelve a planificar. Aumentar los tiempos de espera de ejecución o relajar la tolerancia del inicio no corrige este desajuste.

Usa `demo.launch.py` para simulación, o el driver de hardware más `hardware.launch.py` para el brazo real. No ejecutes ambos entornos MoveIt a la vez. Para inspeccionar los publicadores de estados de articulaciones, ejecuta:

```bash
ros2 topic info /joint_states --verbose
ros2 topic info /rebotarm/joint_states --verbose
```

### Ejecutar la demo Draw-square

Este ejemplo usa **simulación simulada (mock)**: una interfaz de hardware `ros2_control` simulada muestra el robot y su movimiento en RViz sin simular contacto físico. La demo se conecta al entorno MoveIt en ejecución. `model:=dm` selecciona el modelo de robot; no selecciona simulación ni hardware real.

**1. Terminal A: inicia la simulación y mantenla en ejecución.** Si esta simulación ya se está ejecutando, no la inicies de nuevo:

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=dm
```

Para ROS2 Humble, reemplaza `jazzy` por `humble` en estos y en los comandos posteriores. La demo mueve el brazo real solo cuando iniciaste el driver de hardware y `hardware.launch.py` como se describió arriba. No ejecutes ambos entornos a la vez.

**2. Terminal B: ejecuta la demo de rectángulo.** Después de cambiar el código de la demo, ejecuta `colcon build --symlink-install --packages-select rebotarm_moveit_demos rebotarm_moveit_config` desde el workspace y vuelve a cargar el entorno. No necesitas hacer clic en `Plan` ni en `Execute` en RViz:

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=dm
```

`draw_square` primero cierra el gripper. Después de confirmar el éxito, reinicia el brazo, se mueve por las cuatro esquinas de un rectángulo coplanar y vuelve a la primera esquina. Si la interfaz del gripper no está disponible o el cierre falla, la demo se detiene.

En RViz, **la línea cian fina es el rectángulo de referencia; la línea amarilla es el movimiento real de `gripper_tcp` muestreado desde TF**. La grabación comienza después de alcanzar la primera esquina, excluyendo los movimientos de reinicio y aproximación. Ejecutar la demo de nuevo borra la traza anterior. La demo usa planificación en espacio de articulaciones entre esquinas, por lo que no se garantiza que el movimiento real siga los cuatro bordes rectos de referencia.

Los parámetros predeterminados están en:

```text
src/rebotarm_moveit_demos/config/draw_square.yaml
```

Parámetros comunes:

| Parámetro | Descripción |
|---|---|
| `start_point` | Posición de reinicio de articulaciones antes de que comience la demo |
| `closed_gripper_position` | Posición de la articulación del gripper de un solo lado simulada cuando está cerrado, por defecto `0.0` |
| `hardware_closed_gripper_position` | Posición del motor del gripper de hardware cuando está cerrado, por defecto `0.0`; verifica los límites de hardware antes de usar |
| `rectangle_center` | Centro del rectángulo en `base_link` |
| `rectangle_width` / `rectangle_height` | Dimensiones del rectángulo en metros |
| `tcp_rpy` | Orientación del TCP, con valor predeterminado de un gripper orientado hacia abajo |
| `tcp_yaw_offsets` | Valores alternativos de yaw de IK usados para evitar grandes giros de la articulación 6 |

### Ejecutar la demo Pick-place

Mantén la simulación simulada (mock) en ejecución en la terminal A. Después de que termine la demo de rectángulo, ejecuta lo siguiente en la terminal B. Mantén tanto `Query Goal State` como `Query Start State` desactivados en RViz; no hagas clic en `Plan` ni en `Execute`.

Si en su lugar iniciaste el driver de hardware y `hardware.launch.py`, el mismo comando mueve el brazo real. La demo pick-place no inicia ni cambia entre entornos de simulación y hardware:

```bash
cd ~/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py model:=dm
```

Los parámetros predeterminados están en:

```text
src/rebotarm_moveit_demos/config/pick_place.yaml
```

Parámetros comunes:

| Parámetro | Descripción |
|---|---|
| `ready_point` | Posición de articulación de espera usada antes y después de recoger/colocar |
| `pick_position` | Posición inferior-central del objeto en `base_link` |
| `pick_tcp_rpy` / `place_tcp_rpy` | Orientación del TCP para recoger y colocar |
| `object_dimensions` | Dimensiones del objeto de la escena de planificación en metros |
| `max_gripper_width` | Apertura total máxima del efector de agarre, por defecto `0.09m` |
| `open_gripper_position` / `closed_gripper_position` | Posiciones de apertura/cierre de la articulación del efector de agarre simulado de un solo lado |
| `hardware_open_gripper_position` / `hardware_closed_gripper_position` | Posiciones de apertura/cierre del motor del efector de agarre de hardware |
| `grasp_gripper_to_object_width` | Calcula la posición de agarre a partir del ancho del objeto |

En la simulación ficticia, `pick_place` añade un objeto virtual a la escena de planificación. La unión y separación de la escena hacen que el objeto siga al efector de agarre; esto no simula el contacto físico ni la fuerza de agarre.

`pick_place` abre el efector de agarre, se mueve a la pose de recogida, cierra el efector de agarre, se mueve a la pose de colocación y suelta el objeto. Las posiciones de la articulación del efector de agarre simulado y las posiciones del motor del efector de agarre de hardware real son parámetros diferentes. Antes de ejecutar en hardware real, confirma la dirección de apertura/cierre del efector de agarre y sus límites.

### Archivos de configuración de MoveIt

| Archivo | Descripción |
|---|---|
| `rebotarm_moveit_config/config/rebotarm.urdf.xacro` | Modelo de robot usado por MoveIt |
| `rebotarm_moveit_config/config/rebotarm.srdf` | Grupos de MoveIt, efector final y estados predeterminados |
| `rebotarm_moveit_config/config/kinematics.yaml` | Configuración del solucionador IK |
| `rebotarm_moveit_config/config/joint_limits.yaml` | Límites de articulación usados por la planificación de MoveIt |
| `rebotarm_moveit_config/config/moveit_controllers.yaml` | Configuración del controlador de ejecución de trayectorias de MoveIt |
| `rebotarm_moveit_config/config/ros2_controllers.yaml` | Configuración de controladores de ros2_control |
| `rebotarm_moveit_config/config/initial_positions.yaml` | Posiciones iniciales de articulaciones para hardware simulado |
| `rebotarm_moveit_demos/config/draw_square.yaml` | Parámetros de la demo de dibujar un cuadrado |
| `rebotarm_moveit_demos/config/pick_place.yaml` | Parámetros de la demo de recoger y colocar |

## Preguntas frecuentes (FAQ)

### 1. Aparece `open serial port /dev/ttyACM0 failed` al iniciar

Esto significa que el puerto serie predeterminado no existe o que el nombre del dispositivo ha cambiado. Primero comprueba el dispositivo serie real:

```bash
ls /dev/ttyACM*
```

Luego especifícalo con `channel`:

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm channel:=/dev/ttyACM1
```

### 2. Aparece `Device or resource busy` al iniciar

Esto significa que el puerto serie ya está ocupado por otro proceso. Las causas comunes incluyen un nodo ROS2 lanzado previamente, un ejemplo del SDK o un script de depuración que no ha salido. Primero comprueba los procesos:

```bash
ps aux | grep -E "reBotArmController|ros2|python"
```

Detén el proceso que ocupa el puerto serie y reinicia. El brazo y el efector de agarre deben compartir el mismo controlador de bajo nivel. No abras el mismo puerto serie por separado para el brazo y el efector de agarre.

### 3. Permiso denegado

Si el dispositivo serie existe pero se deniega el permiso:

```bash
sudo usermod -a -G dialout $USER
```

Cierra la sesión y vuelve a iniciarla para que el cambio surta efecto. Para depuración temporal, también puedes ejecutar:

```bash
sudo chmod 666 /dev/ttyACM0
```

### 4. El modelo del robot no se muestra en RViz

Comprueba lo siguiente:

- Si el espacio de trabajo ha sido cargado: `source install/setup.bash`
- Si `Fixed Frame` está configurado como `base_link`
- Si `robot_state_publisher` se inició correctamente
- Si la ruta de malla del URDF es `package://rebotarm_bringup/description/meshes/...`

### 5. Aparece una advertencia de puerto SHM de FastDDS

Si la terminal muestra algo como:

```text
[RTPS_TRANSPORT_SHM Error] Failed init_port fastrtps_port7002: open_and_lock_file failed
```

Esto suele deberse a archivos de bloqueo de memoria compartida de FastDDS sobrantes después de que un proceso ROS2 anterior saliera de forma anormal. Si los servicios y acciones aún responden con normalidad, esta advertencia normalmente no afecta al control.

Para limpiarlo, primero detén los procesos ROS2 relacionados y luego ejecuta:

```bash
pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*
```

Si quieres omitir temporalmente el transporte de memoria compartida, establece lo siguiente antes de lanzar ROS2:

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

- [reBot Arm B601-DM Getting Started](https://wiki.seeedstudio.com/es/rebot_b601_dm_getting_started/)
- [reBot Arm B601-DM Visual Grasping Demo](https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_grasping_demo/)
- [reBot Arm B601-DM Pinocchio and MeshCat](https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_pinocchio_meshcat/)
- [reBot Arm B601-DM LeRobot Tutorial](https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_lerobot/)
- [Documentación de ROS2 Humble](https://docs.ros.org/en/humble/)
- [Documentación de ROS2 Jazzy](https://docs.ros.org/en/jazzy/)
- [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py)
