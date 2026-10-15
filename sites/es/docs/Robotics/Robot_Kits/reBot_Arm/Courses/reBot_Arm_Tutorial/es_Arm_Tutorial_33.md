---
description: "Capítulo 33 del Curso de Introducción a la IA Física de Seeed: integración práctica de ROS2 con el reBot Arm: creación del espacio de trabajo ROS2, encapsulado del SDK de Python en un nodo driver, lanzamiento y visualización del brazo en RViz, control mediante interfaces de Topic / Service / Action y parada segura con resolución de problemas."
title: Capítulo 33 - Integración ROS2 del reBot Arm
hide_title: true
keywords:
  - reBot
  - Brazo robótico
  - ROS2
  - B601-RS
  - B601-DM
  - RViz
  - MoveIt2
  - USB2CAN
  - Curso
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/rebot_physical_ai_course_chapter_33
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/es/robotics/rebot_physical_ai_course_chapter_33/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 7 · Capítulo 33 · Práctica</span>
    <h2>33. Integración ROS2 del reBot Arm</h2>
    <p>
      Capítulo 33 del Curso de Introducción a la IA Física de Seeed: integración práctica de ROS2 con el reBot Arm: creación del espacio de trabajo ROS2, encapsulado del SDK de Python en un nodo driver, lanzamiento y visualización del brazo en RViz, control mediante interfaces de Topic / Service / Action y parada segura con resolución de problemas.
    </p>
    <div className="hero-actions">
      <a href="#overview">Resumen del capítulo</a>
      <a href="#workspace">Crear el espacio de trabajo</a>
      <a href="#launch">Lanzar y visualizar</a>
      <a href="#control">Topic, Service y Action</a>
    </div>
  </div>
</section>

{/* TODO: this section of the original document ends with a screen recording (`file_v3_0014l_8f7e605c-e0f9-4176-be18-997f8682e72g.mp4`, `18446744073566823104.mp4`, `1126939039.mp4`, `video_20260817_142623.mp4`). The file(s) are not in 图片和附件/ yet — upload them to the course CDN and link them here once they are available. */}
<a id="overview"></a>

## 33.1 Creación del espacio de trabajo ROS2 de reBot

### Preparación: entorno y hardware

Antes de comenzar oficialmente, asegúrate de que el hardware esté correctamente conectado y de que el entorno de software esté listo. Esta es la base de todos los pasos posteriores.

- **Cableado de hardware**: conecta el `USB2CAN` / puerto serie con la placa adaptadora de bus CAN del brazo. Después de encender, conecta el `USB2CAN` al host y confirma que el sistema reconoce el dispositivo CAN/serie.
- **Sistema operativo**: se recomienda usar **Ubuntu 24.04** con **ROS2 Jazzy**, o **Ubuntu 22.04** con **ROS2 Humble**.

RS:

```bash
sudo ip link set can0 down 2>/dev/null || true
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

DM:

```bash
sudo chmod 666 /dev/ttyACM*
```

### Espacio de trabajo principal

Este es el repositorio de código principal de todo el trabajo de integración; contiene todos los componentes necesarios para encapsular el reBot Arm como un robot ROS2 estándar.

- **Obtener el código**: clona el espacio de trabajo desde el repositorio oficial:

```bash
#RS:
git clone https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS.git ~/ReBot_Arm_DigitalTwin_RS

#DM:
git clone https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_DM.git ~/ReBot_Arm_DigitalTwin_DM
```

**Estructura del espacio de trabajo**: las versiones RS y DM usan diferentes nombres de directorio de espacio de trabajo (RS es `rebotarm_ros2_RS`, DM es `rebotarm_ros2_DM`). Contiene siete paquetes ROS2 principales:

- `rebotarm_msgs`: interfaces personalizadas de mensajes, servicios y acciones.
- `rebotarmcontroller`: el nodo driver, que contiene el controlador principal `reBotArmController`.
- `rebotarm_bringup`: archivos launch, archivos de configuración, modelos URDF y recursos de RViz.
- `rebotarm_moveit_config`: archivos de configuración de MoveIt 2.
- `rebotarm_moveit_demos`: programas de ejemplo de MoveIt 2.
- `rebotarm_mujoco`: nodo de sincronización de simulación MuJoCo de la versión DM (nombre del paquete `rebotarm_mujoco`; la versión RS es `rebotarm_mujoco_rs`).
- `rebotarm_agent`: nodo Agent de alto nivel de la versión DM.

## 33.2 El puente entre el SDK de Python y el driver ROS2

`reBotArm_control_py` es la biblioteca de control de bajo nivel en Python, y el papel del espacio de trabajo `rebotarm_ros2` es "encapsularla" en interfaces ROS2 estándar.

- **Instalar el SDK de bajo nivel**:

En el directorio third_party del espacio de trabajo, obtén esta biblioteca de bajo nivel (RS está bajo rebotarm_ros2/third_party; DM la empareja automáticamente—setup.sh comprueba en orden las tres rutas candidatas reBotArmController_ROS2-main/third_party, reBotArmController_ROS2-main/sdk y ~/reBotArm_control_py):

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git third_party/reBotArm_control_py

#reBotArm_control_py's default yaml config is dm; change the one in /reBotArm_control_py/config to the matching option

#RS:
hardware_yaml: "rebotarm_rs.yaml"

#DM:
hardware_yaml: "rebotarm_dm.yaml"
```

- **Instalar motorbridge**: este es el middleware clave que conecta los motores y el software de alto nivel; instálalo mediante pip:

```bash
python3 -m pip install motorbridge

#verify
motorbridge -v
#output
motorbridge 0.5.0
```

<a id="launch"></a>

## 33.3 Lanzamiento y visualización

- Verifica los puntos de entrada ejecutables:

RS:

```bash
cd ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2
source install/setup.bash
ros2 pkg executables rebotarmcontroller
```

DM:

```bash
cd ~/ReBot_Arm_DigitalTwin_DM/rebotarm_ros2
source install/setup.bash
ros2 pkg executables rebotarmcontroller
```

- Deberías esperar ver al menos:

```bash
rebotarmcontroller GravityCompensation
rebotarmcontroller GripperControl
rebotarmcontroller MoveTo
rebotarmcontroller MoveToPose
rebotarmcontroller reBotArmController
```

La versión RS tiene dos puntos de entrada ejecutables adicionales:

```text
rebotarmcontroller FakeRsDriver        # RS-only: MuJoCo simulation fake driver (fake_rs_driver.py)
rebotarmcontroller CancelAction        # RS-only: cancel an executing Action goal
```

La versión DM tiene un punto de entrada ejecutable adicional:

```text
rebotarmcontroller FakeReBotArmDriver  # DM-only: MuJoCo simulation fake driver (fake_driver.py)
```

Nota: la versión RS también incluye los dos archivos de planificación de movimiento `motion_profiles.py` y `trajectory_profiles.py`; la versión DM no los incluye.

- Después de compilar el espacio de trabajo, puedes lanzar el sistema completo con un solo comando, conectando el control del brazo, la publicación de estado y la visualización.

```bash
# Build the workspace
source /opt/ros/${ROS_DISTRO}/setup.bash
colcon build --symlink-install
source install/setup.bash

# Launch the full system and enable RViz visualization
# RS:
cd ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=true

# DM:
cd ~/ReBot_Arm_DigitalTwin_DM
./rebotarm start dm use_rviz:=true
```

- **Publicación de estado**: después del lanzamiento, el nodo `reBotArmController` publica continuamente el estado del brazo, por ejemplo, estados de las articulaciones (`/rebotarm/joint_states`) y estado general (`/rebotarm/arm_status`).

```bash
#show active topic names
ros2 topic list
#list topics and their message types; adding the -t flag also shows each topic's message type:
ros2 topic list -t
#example output:
/client_count
/connected_clients
/goal_pose
/initialpose
/parameter_events
/rebotarm/arm_status
/rebotarm/control_reference
/rebotarm/control_target
/rebotarm/gripper/cmd/mit
/rebotarm/gripper/cmd/pos_vel
/rebotarm/gripper/state
/rebotarm/joint_states
/rebotarm/joints/joint1/cmd/mit
/rebotarm/joints/joint1/cmd/pos_vel
/rebotarm/joints/joint1/state
/rebotarm/joints/joint2/cmd/mit
/rebotarm/joints/joint2/cmd/pos_vel
/rebotarm/joints/joint2/state
/rebotarm/joints/joint3/cmd/mit
/rebotarm/joints/joint3/cmd/pos_vel
/rebotarm/joints/joint3/state
/rebotarm/joints/joint4/cmd/mit
/rebotarm/joints/joint4/cmd/pos_vel
/rebotarm/joints/joint4/state
/rebotarm/joints/joint5/cmd/mit
/rebotarm/joints/joint5/cmd/pos_vel
/rebotarm/joints/joint5/state
/rebotarm/joints/joint6/cmd/mit
/rebotarm/joints/joint6/cmd/pos_vel
/rebotarm/joints/joint6/state
/rebotarm/mujoco/object_states
/rebotarm/mujoco/overhead_rgb/image_raw
/rebotarm/sim/animation_event
/rebotarm/vision/color_blocks/detections
/robot_description
/rosout
/tf
/tf_static
```

- **Visualización en RViz**: a través de RViz, puedes observar el movimiento del brazo basado en URDF en tiempo real, logrando un efecto de monitorización "lo que ves es lo que obtienes".

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-33/ch33-01.png" alt="El modelo del brazo reBot mostrado en RViz" />
</div>

Después del lanzamiento, el nodo `reBotArmController` publica continuamente el estado del brazo. La publicación de estado se gestiona de forma unificada mediante la clase `JointStatePublisher` (`ros_publishers.py`), impulsada por un temporizador a una frecuencia configurable (100 Hz por defecto), sin necesidad de disparadores externos.

Resumen de los topics publicados:

|Topic|Tipo de mensaje|Descripción|
|---|---|---|
|`/rebotarm/joint_states`|`sensor_msgs/msg/JointState`|Posición, velocidad y par de las 6 articulaciones, más el efector `finger_left`|
|`/rebotarm/arm_status`|`rebotarm_msgs/msg/ArmStatus`|Modo de control, estado de habilitación, máquina de estados, códigos de estado por articulación, códigos de error (QoS latched)|
|`/rebotarm/joints/<joint>/state`|`rebotarm_msgs/msg/JointMotorState`|Estado a nivel de motor de una sola articulación; `<joint>` es de `joint1` a `joint6`|
|`/rebotarm/gripper/state`|`rebotarm_msgs/msg/JointMotorState`|Estado a nivel de motor de la pinza; no se publica cuando no hay pinza configurada|

El mensaje `ArmStatus` usa durabilidad `TRANSIENT_LOCAL` (QoS latched), lo que significa que los suscriptores que se unan tarde reciben inmediatamente la instantánea de estado más reciente; esto es adecuado para que componentes de interfaz de usuario y monitorización de salud sincronicen el estado:

```bash
# View joint states
ros2 topic echo /rebotarm/joint_states --once

# View overall status (including state machine and error codes)
ros2 topic echo /rebotarm/arm_status --once

# View a single joint's motor state
ros2 topic echo /rebotarm/joints/joint1/state --once
```

Campos del mensaje `ArmStatus`:

```text
std_msgs/Header header
string mode               # current control mode: mit / pos_vel / vel
bool enabled              # whether the arm is enabled
bool control_loop_active  # whether the internal pos_vel control loop is running
string state_machine      # state machine: IDLE / TRAJ_RUNNING / LOWLEVEL_STREAMING / GRAVITY_COMP
string[] joint_names      # list of joint names
uint8[] per_joint_status_code  # status code of each joint motor
string[] error_codes     # list of error codes
```

<a id="control"></a>

## 33.4 Control mediante Topic, Service y Action

rebotarm_ros2 proporciona una variedad de interfaces de control estándar de ROS2 para elegir según el escenario de aplicación. Todas las interfaces están bajo el espacio de nombres `/rebotarm` por defecto, que se puede sobrescribir mediante el parámetro de launch `arm_namespace`.

Unifica las unidades antes del control: ángulos en radianes (rad); tiempo en segundos.

### Flujo de ejemplo para control mediante Topic, Service y Action

```bash
#1 Power on and enable the motors
ros2 service call /rebotarm/enable std_srvs/srv/Trigger
#2 Return to the safe home (verify the zero position is correct)
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
# Now you can send move_to_pose / follow_joint_trajectory action goals
# ...execute motion...
# Disable after finishing
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

### Topic: paso directo de bajo nivel para un solo motor

Para depuración y experimentos de control de bajo nivel, `motor_passthrough.py` proporciona topics de comandos en crudo dispersos por articulación:

|Topic|Tipo de mensaje|Descripción|
|---|---|---|
|`/rebotarm/joints/<joint>/cmd`|`rebotarm_msgs/msg/JointMotorCmd`|Comando en crudo disperso para una sola articulación|
|`/rebotarm/gripper/cmd`|`rebotarm_msgs/msg/JointMotorCmd`|Comando en crudo disperso para la pinza|

`JointMotorCmd` usa un diseño de flags dispersos: solo los campos cuyos `use_pos`, `use_vel`, `use_kp`, `use_kd`, `use_tau`, `use_vlim` son `true` sobrescriben los valores predeterminados. `mode` puede ser `0` (MIT), `1` (POS_VEL), `2` (VEL).

```bash
# Single-joint MIT mode command
ros2 topic pub --once /rebotarm/joints/joint1/cmd/mit \
  rebotarm_msgs/msg/JointMitCmd \
  "{pos: 0.2, vel: 0.0, kp: 80.0, kd: 4.0, tau: 0.0}"
```

Durante la ejecución de trayectorias, el comando de bajo nivel se rechaza por defecto (`cmd_arbitration:=reject`). Para una anulación preventiva, pasa `cmd_arbitration:=preempt` al lanzar.

### Service: control de tipo disparo

Service es adecuado para operaciones de tipo disparo como habilitar/deshabilitar, homing seguro y cambio de modo. Está definido en la clase `ArmServices` de `ros_services.py`.

|Service|Tipo|Descripción|
|---|---|---|
|`/rebotarm/enable`|`std_srvs/srv/Trigger`|Habilita el brazo y la pinza, inicia el bucle de control pos_vel|
|`/rebotarm/disable`|`std_srvs/srv/Trigger`|Detiene el bucle de control y deshabilita el brazo|
|`/rebotarm/safe_home`|`std_srvs/srv/Trigger`|Vuelve a cero a una velocidad segura (articulaciones + pinza)|
|`/rebotarm/set_zero`|`rebotarm_msgs/srv/SetZero`|Establece la posición cero de todas o de las articulaciones especificadas|
|`/rebotarm/move_to_pose_ik`|`rebotarm_msgs/srv/MoveToPoseIK`|Solo realiza la resolución IK y actualiza los ángulos objetivo de las articulaciones|
|`/rebotarm/gripper/set`|`rebotarm_msgs/srv/SetGripper`|Establece la distancia de apertura de la pinza y el par máximo|
|`/rebotarm/gravity_compensation/start`|`std_srvs/srv/Trigger`|Inicia el bucle cerrado de compensación de gravedad interno del controlador|
|`/rebotarm/gravity_compensation/stop`|`std_srvs/srv/Trigger`|Detiene el bucle cerrado de compensación de gravedad|
|`/rebotarm/gravity_compensation/status`|`std_srvs/srv/Trigger`|Consulta el estado de la compensación de gravedad; `success=true` significa en ejecución|

Ejemplos de comandos comunes:

```bash
# Enable
ros2 service call /rebotarm/enable std_srvs/srv/Trigger

# Safe homing
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger

# IK solve (!!! note the arm moves very fast)
ros2 service call /rebotarm/move_to_pose_ik rebotarm_msgs/srv/MoveToPoseIK \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {w: 1.0}}}"

# Send a Cartesian pose goal (3 s total motion time)
ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {w: 1.0}}, duration: 3.0}"

# Set the gripper opening (rad; 0-5)
ros2 service call /rebotarm/gripper/set rebotarm_msgs/srv/SetGripper \
  "{position: 2.5, max_effort: 0.5}"

# DM
ros2 service call /rebotarm/gripper/set \
  rebotarm_msgs/srv/SetGripper "{position: -1.0, max_effort: 0.0}"
```

### Action: control orientado a procesos

Action es adecuado para movimientos de larga duración que requieren retroalimentación y cancelación, como la ejecución de trayectorias. Está definido en la clase `ArmActions` de `ros_actions.py`.

|Action|Tipo|Descripción|
|---|---|---|
|`/rebotarm/move_to_pose`|`rebotarm_msgs/action/MoveToPose`|Trayectoria de pose cartesiana del efector final; internamente usa `ArmEndPos.move_to_traj()`|
|`/rebotarm/follow_joint_trajectory`|`control_msgs/action/FollowJointTrajectory`|Interfaz estándar de trayectoria de articulaciones; interfaz estándar de MoveIt2|
|`/rebotarm/gripper/command`|`control_msgs/action/GripperCommand`|Acción estándar de pinza|

Ejemplo de `move_to_pose`: envía un objetivo de movimiento al servicio Action del reBot Arm: mueve el brazo a una pose especificada, mantiene el tiempo total de movimiento en 3 segundos e imprime la retroalimentación en tiempo real durante el movimiento.

```bash
ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {w: 1.0}}, duration: 3.0}" \
  --feedback
```

Ver la definición del mensaje de Action

```bash
ros2 interface show rebotarm_msgs/action/MoveToPose
#You can see the complete Goal / Feedback / Result fields.
```

### Ejemplos de demostración

Todos los ejemplos asumen que `reBotArmController` ya ha sido lanzado:

```bash
cd ~/seeed/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0
```

Los ejemplos están registrados como puntos de entrada ejecutables de ROS2 y se pueden invocar directamente con `ros2 run`. Los archivos fuente están bajo `src/rebotarmcontroller/rebotarmcontroller/examples/`.

#### Ejemplo de pose del efector final

`move_to_pose.py` — movimiento de la pose del efector final. El script envía un objetivo `geometry_msgs/Pose` a través de la acción `/rebotarm/move_to_pose`; el nodo de control gestiona internamente el cambio de modo y la ejecución de la trayectoria. Corresponde a la cadena de capacidades `ArmEndPos.move_to_traj()` del SDK de bajo nivel. Es una demo de una sola acción y no realiza automáticamente `safe_home` ni `disable`.

```bash
ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0
```

#### Ejemplo de compensación de gravedad

`gravity_compensation.py` — un ejemplo de bloqueo por compensación de gravedad. El script no reescribe el bucle de control; llama directamente al servicio de compensación de gravedad dentro de `reBotArmController`; el bucle cerrado real de compensación de gravedad se ejecuta dentro del proceso del controlador, usando el SDK `RobotArm.get_positions/get_velocities/mit`.

```bash
ros2 run rebotarmcontroller GravityCompensation
```

Cuando el script se inicia, primero llama a `/rebotarm/enable`, luego inicia la compensación de gravedad. Al salir con `Ctrl+C`, el script llama secuencialmente a `/rebotarm/gravity_compensation/stop` → `/rebotarm/safe_home` → `/rebotarm/disable`, por lo que el brazo primero detiene la compensación de gravedad, luego vuelve a la posición cero segura y se deshabilita.

<a id="safety"></a>

## 33.5 Parada segura y resolución de problemas

La seguridad es la primera prioridad en la operación de robots. rebotarm_ros2 proporciona mecanismos de seguridad en múltiples niveles.

### **safe_home service**: mediante el servicio `/rebotarm/safe_home`, el brazo vuelve a la posición cero preestablecida a una velocidad segura.

Internamente, este servicio primero detiene la compensación de gravedad, luego cambia al modo `pos_vel` y después ejecuta el homing:

```bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
```

### **disable service**: detiene el bucle de control y deshabilita el brazo; es la primera opción para la parada de emergencia

```bash
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

**hold_current_position**: cuando se cancela una trayectoria o se produce una excepción, el controlador llama automáticamente a este método para bloquear las posiciones actuales de las articulaciones, evitando que el brazo caiga libremente.

### Monitorización de la máquina de estados

El campo `state_machine` en el topic `/rebotarm/arm_status` refleja el estado de ejecución actual y es el primer punto de entrada para la resolución de problemas:

|Estado|Significado|
|---|---|
|`IDLE`|Inactivo, esperando comandos|
|`TRAJ_RUNNING`|Ejecutando una trayectoria|
|`LOWLEVEL_STREAMING`|Transmitiendo comandos de bajo nivel para un solo motor|
|`GRAVITY_COMP`|Bucle cerrado de compensación de gravedad en ejecución|

```bash
# Continuously monitor the state machine
ros2 topic echo /rebotarm/arm_status --field state_machine
```

### Resolución de problemas mediante códigos de error

Los campos `per_joint_status_code` y `error_codes` en el mensaje `ArmStatus` se usan para la localización de fallos:

`per_joint_status_code`: código de estado (`uint8`) de cada motor de articulación, proveniente de `motor.get_state().status_code` del SDK de bajo nivel; un valor distinto de cero significa que el motor es anómalo. `error_codes`: cadenas de códigos de error a nivel de controlador

```bash
# View the full status (including error codes)
ros2 topic echo /rebotarm/arm_status --once
```

## 33.6 FAQ: Problemas comunes y resolución

#### Puerto serie no encontrado: al lanzar, aparece `open serial port /dev/ttyACM0 failed`; usa `ls /dev/ttyACM*`

para ver el dispositivo real y luego sobrescribe con `channel:=/dev/ttyACM1`.

**Permisos insuficientes**: si el puerto serie existe pero no tienes permiso, ejecuta `sudo usermod -a -G dialout $USER`,

y surtirá efecto después de volver a iniciar sesión.

#### Modelo de RViz no mostrado: confirma que la ruta de la malla URDF es `package://rebotarm_bringup/description/meshes/...`.

#### Fallo en la ejecución de la trayectoria: comprueba si el primer punto de la trayectoria está cerca de los ángulos articulares actuales (la desviación debe ser menor que `0.10 rad`),

y el error de posición final debe ser menor que `0.03 rad`. Puedes usar `ros2 topic echo /rebotarm/joint_states --once`

para ver los ángulos articulares actuales.

</div>
