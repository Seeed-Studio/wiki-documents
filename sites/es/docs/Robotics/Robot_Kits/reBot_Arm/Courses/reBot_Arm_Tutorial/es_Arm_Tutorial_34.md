---
description: "Capítulo 34 del Curso de Introducción a la IA Física de Seeed — Planificación de movimiento con MoveIt 2 en el reBot Arm: la arquitectura de move_group, los grupos de planificación SRDF, los límites de las articulaciones, el modelo de colisión y la matriz de autocolisión, la escena de planificación, las trayectorias cartesianas, la planificación con obstáculos, la ejecución de trayectorias y las demos draw_square / pick_place."
title: Capítulo 34 - Planificación de movimiento con MoveIt2
hide_title: true
keywords:
  - reBot
  - Brazo robótico
  - ROS2
  - MoveIt2
  - SRDF
  - OMPL
  - Planificación de movimiento
  - RViz
  - Curso
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_34
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_34/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 7 · Capítulo 34 · Teoría y práctica</span>
    <h2>34. Planificación de movimiento con MoveIt2</h2>
    <p>
      Capítulo 34 del Curso de Introducción a la IA Física de Seeed — Planificación de movimiento con MoveIt 2 en el reBot Arm: la arquitectura de move_group, los grupos de planificación SRDF, los límites de las articulaciones, el modelo de colisión y la matriz de autocolisión, la escena de planificación, las trayectorias cartesianas, la planificación con obstáculos, la ejecución de trayectorias y las demos draw_square / pick_place.
    </p>
    <div className="hero-actions">
      <a href="#overview">Resumen del capítulo</a>
      <a href="#srdf">SRDF y grupos de planificación</a>
      <a href="#planning">Escena de planificación y trayectorias</a>
      <a href="#demos">Ejecución de las demos</a>
    </div>
  </div>
</section>

{/* TODO: this section of the original document ends with a screen recording (`409527786.mp4`, `18446744072629597584.mp4`). The file(s) are not in 图片和附件/ yet — upload them to the course CDN and link them here once they are available. */}
MoveIt 2 es el framework de planificación de movimiento más extendido para brazos robóticos en el ecosistema ROS2, responsable de la resolución de cinemática inversa, la detección de colisiones, la planificación de trayectorias y la ejecución de trayectorias. Para el reBot Arm B601-DM, MoveIt 2 separa la planificación de alto nivel del accionamiento de bajo nivel: la planificación ocurre en el nodo `move_group`, y la ejecución se envía a `reBotArmController` a través de la acción `follow_joint_trajectory`. Este capítulo descompone la teoría y la práctica de MoveIt 2 capa por capa, desde la arquitectura del sistema hasta la ejecución en el robot real. Objetivo didáctico: permitir que el brazo planifique automáticamente movimientos seguros en entornos complejos.

<a id="overview"></a>

## 34.1 Arquitectura del sistema MoveIt2

El núcleo de MoveIt 2 es el nodo `move_group`, que actúa como planificador maestro de la planificación de movimiento. En torno a `move_group`, la integración de MoveIt 2 del reBot Arm implica los siguientes componentes:

|Componente|Rol|Archivo/paquete correspondiente|
|---|---|---|
|`move_group`|Planificador maestro: recibe objetivos, llama a la IK y a los planificadores, genera trayectorias y envía la ejecución|`rebotarm_moveit_config`|
|URDF/Xacro|Descripción del modelo del robot (links, articulaciones, mallas, gripper, gripper_tcp)|`rebotarm.urdf.xacro`|
|SRDF|Modelo semántico: grupos de planificación, efector final, estados por defecto, matriz de autocolisión|`rebotarm.srdf`|
|Kinematics Plugin|Solver de IK|`kinematics.yaml` (KDL)|
|Planificador OMPL|Planificador de movimiento basado en muestreo|`ompl_planning.yaml` (RRTConnect)|
|Ejecución de trayectorias|Controlador de ejecución de trayectorias|`moveit_controllers.yaml`|
|Planning Scene|Modelo del entorno: objetos, colisiones, ACM|Operaciones de escena en `pick_place.py`|
|RViz MotionPlanning|Interfaz de visualización e interacción|`moveit.rviz`|

### Cadena de lanzamiento en el entorno de simulación

```bash
ros2 launch rebotarm_moveit_config demo.launch.py
```

Este comando inicia `move_group`, `robot_state_publisher`, `ros2_control_node` (hardware simulado), `joint_state_broadcaster`, `rebotarm_controller`, `gripper_controller` y RViz.

El entorno de simulación utiliza `mock_components/GenericSystem` como hardware virtual; no se necesita un brazo real.

### Cadena de lanzamiento en el entorno con robot real

```bash
#RS:
# Terminal 1: start the hardware driver
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0

#DM:
ros2 launch rebotarm_bringup bringup.launch.py model:=dm channel:=/dev/ttyACM0

# Terminal 2: start MoveIt (connecting to the running driver)
ros2 launch rebotarm_moveit_config hardware.launch.py
```

`hardware.launch.py` no inicia `ros2_control_node`; en su lugar, remapea `/joint_states` a `/<arm_namespace>/joint_states`, leyendo directamente los estados de las articulaciones publicados por el driver real, y envía la trayectoria planificada a `reBotArmController` a través de la acción `follow_joint_trajectory`.

<a id="srdf"></a>

## 34.2 SRDF y grupo de planificación

SRDF (Semantic Robot Description Format) es la capa de complemento semántico del URDF. El URDF describe la estructura física del robot (links, articulaciones, mallas), pero no sabe qué articulaciones "se mueven juntas", qué link es el "efector final" o qué links "nunca colisionarán". SRDF responde a estas preguntas.

El SRDF del reBot Arm define dos grupos de planificación:

|Grupo de planificación|Composición|Uso|
|---|---|---|
|`arm`|Cadena cinemática `base_link` → `gripper_tcp`|Planificación de movimiento del brazo de 6 ejes|
|`gripper`|`gripper_joint1`, `gripper_joint2`|Control de apertura/cierre del gripper|

El grupo `arm` se define con `<chain>`, desde `base_link` hasta `gripper_tcp`, cubriendo 6 articulaciones más los links del gripper. El grupo `gripper` enumera las articulaciones una por una con `<joint>`, conteniendo solo las dos articulaciones del gripper.

SRDF también define estados con nombre (`group_state`) para un reinicio rápido:

|Nombre del estado|Grupo|Significado|
|---|---|---|
|`home`|`arm`|Las 6 articulaciones a cero|
|`open`|`gripper`|Articulaciones del gripper a `0.0715` rad (totalmente abierto)|
|`closed`|`gripper`|Articulaciones del gripper a `0.0` rad (totalmente cerrado)|

Declaración del efector final:

```xml
<end_effector name="gripper" parent_link="gripper_link"
              group="gripper" parent_group="arm"/>
```

`name="gripper"`: el nombre del efector final

`parent_link="gripper_link"`: sobre qué link está montado el gripper (el último link del brazo)

`group="gripper"`: el grupo de planificación correspondiente al gripper

`parent_group="arm"`: el grupo de planificación padre al que pertenece (el grupo del brazo)

La articulación virtual fija el brazo al marco del mundo:

```xml
<virtual_joint name="FixedBase" type="fixed"
               parent_frame="world" child_link="base_link"/>
```

## 34.3 Límites de las articulaciones

Los límites de las articulaciones se dividen en dos capas: los límites físicos en el URDF y los límites de planificación en MoveIt.

La capa URDF define el rango angular de cada articulación (posición mínima/máxima), que son límites duros a nivel de hardware.

La capa MoveIt define los límites de velocidad y aceleración en `joint_limits.yaml`, usados para la parametrización temporal de la trayectoria:

```yaml
joint_limits:
  joint1:
    has_velocity_limits: true
    max_velocity: 1.0          # rad/s
    has_acceleration_limits: true
    max_acceleration: 1.0      # rad/s^2
  # joint2 ~ joint6 same as above
  gripper_joint1:
    has_velocity_limits: true
    max_velocity: 0.2          # rad/s
    has_acceleration_limits: true
    max_acceleration: 0.5      # rad/s^2
```

Factores de escala globales:

```yaml
default_velocity_scaling_factor: 0.2
default_acceleration_scaling_factor: 0.2
```

Esto significa que, por defecto, la planificación usa solo el 20% de la velocidad y aceleración máximas, una configuración segura y conservadora. En las demos se puede sobrescribir de forma individual; por ejemplo, `velocity_scaling: 1.0` en `pick_place.yaml` significa planificación a máxima velocidad.

## 34.4 Modelo de colisión y autocolisión

La detección de colisiones de MoveIt 2 se basa en FCL (Flexible Collision Library), utilizando las mallas o geometrías primitivas del URDF para la detección de colisiones. Para acelerar el proceso, el SRDF predefine la matriz de autocolisión (ACM, AllowedCollision Matrix), declarando qué pares de links "no necesitan comprobación de colisión nunca".

La matriz de autocolisión del reBot Arm se divide en dos categorías:

**Adyacentes (links vecinos)**: pares de links conectados directamente por una articulación, físicamente siempre en contacto, sin necesidad de comprobación:

|Par de links|Motivo|
|---|---|
|`base_link` - `link1`|Adyacentes|
|`link1` - `link2`|Adyacentes|
|`link2` - `link3`|Adyacentes|
|`link3` - `link4`|Adyacentes|
|`link4` - `link5`|Adyacentes|
|`link5` - `link6`|Adyacentes|
|`link6` - `gripper_link`|Adyacentes|
|`gripper_link` - `gripper_left`|Adyacentes|
|`gripper_link` - `gripper_right`|Adyacentes|
|`gripper_link` - `gripper_tcp`|Adyacentes|

**Nunca (nunca colisionan)**: pares de links que geométricamente no pueden tocarse:

|Par de links|Motivo|
|---|---|
|`gripper_left` - `gripper_tcp`|Nunca|
|`gripper_right` - `gripper_tcp`|Nunca|
|`gripper_left` - `gripper_right`|Nunca|

Los pares de links que no están en el ACM (como `base_link` y `link6`) se comprueban normalmente para colisiones. Durante la planificación, OMPL evita configuraciones articulares que provoquen colisiones en el espacio de muestreo.

<a id="planning"></a>

## 34.5 Planning Scene

La Planning Scene es el modelo de MoveIt del "mundo", que contiene el cuerpo del robot, los objetos del entorno y las relaciones de colisión. Es el requisito previo para la planificación: antes de cada planificación, MoveIt comprueba si el estado inicial colisiona con objetos en la Planning Scene.

Las operaciones centrales de la Planning Scene se realizan a través de tres servicios:

|Servicio|Tipo|Rol|
|---|---|---|
|`/apply_planning_scene`|`ApplyPlanningScene`|Añadir/eliminar objetos, modificar el ACM, adjuntar objetos|
|`/get_planning_scene`|`GetPlanningScene`|Consultar la escena actual|
|`/plan_kinematic_path`|`GetMotionPlan`|Solicitar planificación (sin ejecutar)|

## 34.6 Trayectorias cartesianas

Una trayectoria cartesiana significa que el efector final se mueve a lo largo de una línea recta o curva en el espacio cartesiano, en lugar de interpolar punto a punto en el espacio articular. MoveIt 2 implementa esto mediante `compute_cartesian_path`. En la demo del reBot Arm, `draw_square` utiliza la idea de trayectoria cartesiana: controla `gripper_tcp` para visitar las cuatro esquinas de un rectángulo en el mismo plano. La implementación concreta es:

1. Para cada esquina, resolver los ángulos articulares correspondientes con IK:

```python
target = self.compute_ik_joint_target(
    pose_stamped, seed_values, ik_link_name,
    timeout_sec, avoid_collisions=True, label=label
)
```

2. Usar OMPL para planificar una trayectoria desde los ángulos articulares actuales hasta los ángulos articulares objetivo:

```python
request = GetMotionPlan.Request()
request.motion_plan_request.group_name = self.group_name
request.motion_plan_request.pipeline_id = "ompl"
request.motion_plan_request.planner_id = "RRTConnect"
request.motion_plan_request.allowed_planning_time = 5.0
```

3. Ejecutar la trayectoria a través de la acción `/execute_trajectory`.

Parámetros clave de `draw_square`:

|Parámetro|Valor por defecto|Descripción|
|---|---|---|
|`rectangle_center`|`[0.28, 0.0, 0.12]`|Centro del rectángulo, en el marco `base_link`|
|`rectangle_width`|`0.04`|Anchura del rectángulo (m)|
|`rectangle_height`|`0.08`|Altura del rectángulo (m)|
|`tcp_rpy`|`[0.0, 1.57, 0.0]`|Pose final; por defecto el gripper apunta directamente hacia abajo|
|`tcp_yaw_offsets`|`[0.0, 3.1416, -3.1416]`|Yaws alternativos para la IK, evitando grandes giros de la articulación 6|
|`avoid_collisions`|`true`|Si se deben evitar colisiones durante la resolución de la IK|

`tcp_yaw_offsets` es un truco práctico: IK puede devolver múltiples soluciones, y algunas de ellas hacen que `joint6` gire significativamente. Al proporcionar múltiples yaw alternativas, la demo elige la solución con el menor cambio articular, reduciendo giros innecesarios.

## 34.7 Planificación con obstáculos

Cuando existen obstáculos en la Planning Scene, OMPL los evita automáticamente durante la planificación. La configuración de OMPL del reBot Arm es:

```yaml
planning_plugins:
  - ompl_interface/OMPLPlanner

request_adapters:
  - default_planning_request_adapters/ResolveConstraintFrames
  - default_planning_request_adapters/ValidateWorkspaceBounds
  - default_planning_request_adapters/CheckStartStateBounds
  - default_planning_request_adapters/CheckStartStateCollision

response_adapters:
  - default_planning_response_adapters/AddTimeOptimalParameterization
  - default_planning_response_adapters/ValidateSolution
  - default_planning_response_adapters/DisplayMotionPath

arm:
  default_planner_config: RRTConnect
  projection_evaluator: joints(joint1,joint2)
  longest_valid_segment_fraction: 0.005
```

Notas clave de configuración:

|Configuración|Valor|Descripción|
|---|---|---|
|Planificador predeterminado|`RRTConnect`|Árbol aleatorio de exploración rápida bidireccional, adecuado para la mayoría de escenarios|
|Evaluador de proyección|`joints(joint1,joint2)`|Dimensión de proyección del espacio de muestreo, afecta a la eficiencia de planificación|
|Fracción del segmento válido más largo|`0.005`|Granularidad de interpolación de comprobación de colisiones; más pequeño es más seguro pero más lento|

La cadena de adaptadores de petición (request_adapters) hace cuatro cosas antes de la planificación:

1. `ResolveConstraintFrames` — alinear los marcos de las restricciones con el marco de planificación
2. `ValidateWorkspaceBounds` — verificar que el objetivo esté dentro de los límites del espacio de trabajo
3. `CheckStartStateBounds` — comprobar que el estado inicial esté dentro de los límites articulares
4. `CheckStartStateCollision` — comprobar que el estado inicial no colisione

La cadena de adaptadores de respuesta (response_adapters) hace tres cosas después de la planificación:

1. `AddTimeOptimalParameterization` — añadir parametrización temporal (velocidad, aceleración) a la trayectoria
2. `ValidateSolution` — verificar que la trayectoria satisfaga las restricciones
3. `DisplayMotionPath` — previsualizar la trayectoria en RViz

La demo `pick_place` demuestra completamente el flujo de planificación con obstáculos: añadir un objeto → planificar hasta la pose de agarre (evitando colisiones) → adjuntar el objeto → planificar hasta la pose de colocación (el objeto se mueve con el brazo, aún evitando colisiones) → desadjuntar el objeto → limpiar la escena.

## 34.8 Ejecución de trayectorias

La trayectoria planificada por MoveIt 2 debe enviarse al hardware para su ejecución a través de un controlador. La simulación y el robot real usan configuraciones de controlador diferentes.

**Entorno de simulación** (`moveit_controllers.yaml`)

```yaml
moveit_simple_controller_manager:
  controller_names:
    - rebotarm_controller
    - gripper_controller

  rebotarm_controller:
    action_ns: follow_joint_trajectory
    type: FollowJointTrajectory
    default: true
    joints: [joint1, joint2, joint3, joint4, joint5, joint6]

  gripper_controller:
    action_ns: follow_joint_trajectory
    type: FollowJointTrajectory
    default: false
    joints: [gripper_joint1, gripper_joint2]
```

En simulación, `rebotarm_controller` y `gripper_controller` son ambos controladores de hardware simulado de `ros2_control`; las trayectorias se ejecutan directamente en hardware virtual.

**Entorno de robot real** (`moveit_hardware_controllers.yaml`)

```yaml
moveit_simple_controller_manager:
  controller_names:
    - rebotarm

  rebotarm:
    action_ns: follow_joint_trajectory
    type: FollowJointTrajectory
    default: true
    joints: [joint1, joint2, joint3, joint4, joint5, joint6]
```

La configuración del robot real tiene solo un controlador `rebotarm`, apuntando a la acción `/rebotarm/follow_joint_trajectory` de `reBotArmController`. En el robot real, la pinza se controla a través de la acción separada `/rebotarm/gripper/command` (tipo `GripperCommand`), no a través de `follow_joint_trajectory`.

Tolerancias de ejecución de trayectorias:

```yaml
trajectory_execution:
  allowed_execution_duration_scaling: 1.2   # allow 20% longer execution time
  allowed_goal_duration_margin: 0.5          # extra 0.5s wait after arrival
  allowed_start_tolerance: 0.05              # start-state deviation tolerance 0.05 rad
  execution_duration_monitoring: true        # enable execution time monitoring
```

Flujo de ejecución en el robot real:

1. `move_group` planifica una `RobotTrajectory`
2. Envía la trayectoria a `MoveItSimpleControllerManager` mediante la acción `/execute_trajectory`
3. El gestor de controladores convierte la trayectoria en un objetivo `follow_joint_trajectory` y lo envía al `reBotArmController`

`/rebotarm/follow_joint_trajectory`

4. `reBotArmController` ejecuta internamente la trayectoria (validación → modo pos_vel → envío temporizado → comprobación de llegada)
5. El resultado de la ejecución se envía de vuelta a `move_group`

Si la ejecución falla (tiempo de espera agotado, desviación de llegada excesiva), `move_group` devuelve un código de error, y el script de demostración decide si abortar en función de él.

<a id="demos"></a>

## 34.9 Ejecución de las demos

### Demo de dibujar un rectángulo

Primero inicia el entorno de simulación de MoveIt y luego abre otra terminal y ejecuta:

```bash

#RS real robot
#Terminal 1:
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=false
#Terminal 2:
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs
#Terminal 3:
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=rs
#Before the real robot, make sure the area around the arm is clear and the emergency stop works. demo.launch.py is simulation—do not run it together with the real bringup.
```

```bash
#DM real robot
#Terminal 1:
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm use_rviz:=false
#Terminal 2:
ros2 launch rebotarm_moveit_config hardware.launch.py model:=dm
#Terminal 3:
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=dm
#Before the real robot, make sure the area around the arm is clear and the emergency stop works. demo.launch.py is simulation—do not run it together with the real bringup.
```

`draw_square` controla `gripper_tcp` para visitar las cuatro esquinas de un rectángulo, verificando si la cadena de IK, planificación de trayectoria y ejecución funciona. Los parámetros predeterminados están en `src/rebotarm_moveit_demos/config/draw_square.yaml`.

### Demo de pick-and-place

`pick_place` añade un objeto a agarrar a la escena de planificación, luego controla la pinza para abrirse → moverse a la pose de agarre → cerrar la pinza → adjuntar el objeto → moverse a la pose de colocación → soltar el objeto. Los parámetros predeterminados están en `src/rebotarm_moveit_demos/config/pick_place.yaml`.

Antes de ejecutar en el robot real, primero confirma la dirección de apertura/cierre de la pinza y sus límites. Las posiciones articulares de la pinza simulada y las posiciones del motor de la pinza en el hardware real son dos conjuntos de parámetros diferentes:

|Parámetro|Valor en simulación|Valor en hardware|
|---|---|---|
|Pinza completamente abierta|`0.045` (por lado, rad)|`-5.0` (posición del motor)|
|Pinza completamente cerrada|`0.0` (por lado, rad)|`0.0` (posición del motor)|

```bash
#RS real robot
#Terminal 1:
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=false
#Terminal 2:
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs
#Terminal 3:
ros2 launch rebotarm_moveit_demos pick_place.launch.py
```

```bash
#DM real robot
#Terminal 1:
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm use_rviz:=false
#Terminal 2:
ros2 launch rebotarm_moveit_config hardware.launch.py model:=dm
#Terminal 3:
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=dm
```

**Antes de ejecutar en el robot real, asegúrate de que el área alrededor del brazo esté despejada y que el paro de emergencia funcione. `demo.launch.py` es simulación: no lo ejecutes junto con el bringup real.**

## 34.10 Preguntas frecuentes (FAQ)

### ¿Qué pasa si falla la planificación de MoveIt?

Comprueba lo siguiente:

- Si el estado articular inicial está dentro de los límites (el adaptador `CheckStartStateBounds` informa de errores)
- Si el estado inicial colisiona con objetos de la escena (el adaptador `CheckStartStateCollision` informa de errores)
- Si la pose objetivo está dentro del espacio de trabajo (el adaptador `ValidateWorkspaceBounds` informa de errores)
- Si IK puede resolver la solución para el objetivo (`ik_timeout` es 5 s por defecto; se puede aumentar)
- Si el tiempo de planificación es suficiente (`planning_time` es 5 s por defecto; se puede aumentar)

### ¿El plugin MotionPlanning no aparece en RViz?

Confirma que `demo.launch.py` se haya iniciado y que el archivo de configuración de RViz haya cargado `moveit.rviz`. Si abres RViz manualmente, necesitas añadir la visualización MotionPlanning manualmente.

### ¿La simulación funciona pero el robot real falla?

Comprueba si `hardware.launch.py` remapea correctamente `/joint_states` a `/<arm_namespace>/joint_states`. Confirma que `reBotArmController` esté en ejecución y habilitado.

La desviación del primer punto de la trayectoria debe ser menor que `0.10 rad`, y la desviación de llegada final menor que `0.03 rad`.

### ¿joint6 gira demasiado?

IK puede devolver múltiples soluciones, haciendo que `joint6` gire significativamente. `draw_square` mitiga esto con el parámetro `tcp_yaw_offsets`, que proporciona yaw alternativas. Las aplicaciones personalizadas pueden elegir la solución con el menor cambio articular después de resolver IK.

### ¿La dirección de la pinza está invertida en el robot real?

Comprueba `hardware_open_gripper_position` y `hardware_closed_gripper_position` en `pick_place.yaml`. B601-DM tiene por defecto abrir en `-5.0` y cerrar en `0.0`; si la dirección del motor está invertida, intercambia estos dos valores.

{/* Nota: partes de este capítulo se redactaron con la ayuda de Doubao AI. */}

</div>
