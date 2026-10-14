---
description: "Capítulo 38 del Curso de Introducción a la IA Física de Seeed — ejecución del brazo reBot en Isaac Sim: instalación e inicio de Isaac Sim, estructura de la escena, fundamentos de USD, importación del brazo con el URDF Importer, comprobación de eslabones, articulaciones, visuales y colisiones, configuración de la raíz de articulación y de los accionamientos de las articulaciones, rigidez y amortiguamiento, el mecanismo de la pinza, el suelo y el banco de trabajo, control en Python y cuatro demos de práctica."
title: Capítulo 38 - Ejecución del brazo reBot en Isaac Sim
hide_title: true
keywords:
  - reBot
  - Robotic Arm
  - Isaac Sim
  - USD
  - Articulation
  - Joint Drive
  - Gripper
  - Simulation
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_38
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_38/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 8 · Capítulo 38 · Práctica</span>
    <h2>38. Ejecución del brazo reBot en Isaac Sim</h2>
    <p>
      Capítulo 38 del Curso de Introducción a la IA Física de Seeed — ejecución del brazo reBot en Isaac Sim: instalación e inicio de Isaac Sim, estructura de la escena, fundamentos de USD, importación del brazo con el URDF Importer, comprobación de eslabones, articulaciones, visuales y colisiones, configuración de la raíz de articulación y de los accionamientos de las articulaciones, rigidez y amortiguamiento, el mecanismo de la pinza, el suelo y el banco de trabajo, control en Python y cuatro demos de práctica.
    </p>
    <div className="hero-actions">
      <a href="#overview">Resumen del capítulo</a>
      <a href="#usd">Fundamentos de USD</a>
      <a href="#import">Importar el brazo</a>
      <a href="#demos">Demos de práctica</a>
    </div>
  </div>
</section>

Este capítulo explica la importación del modelo y el control básico del brazo reBotArm-RS en NVIDIA Isaac Sim. Isaac Sim utiliza USD (Universal Scene Description) como formato de escena, lo que difiere fundamentalmente del MJCF de MuJoCo. La asignación de nombres de articulaciones, la conversión de unidades de la pinza, la frecuencia de comunicación y el diseño de seguridad se tratan en detalle en el Capítulo 39 y no se repetirán aquí; este capítulo se centra únicamente en los conceptos y operaciones específicos de Isaac Sim.

> Permitir que los usuarios dominen la importación del modelo del brazo reBot, la configuración de la Articulation y el control básico de articulaciones en Isaac Sim.
>
>

<a id="overview"></a>

## 38.1 Instalación e inicio de Isaac Sim

Isaac Sim se basa en la plataforma NVIDIA Omniverse y requiere una GPU RTX. Hay dos formas de ejecutarlo:

1. **Aplicación de escritorio**: descarga el instalador de Isaac Sim desde la página web de NVIDIA y lanza directamente la interfaz gráfica.
2. **Scripts de Python**: ejecútalo sin interfaz (headless) en una terminal mediante los paquetes de Python `isaaclab` o `isaacsim`.

Tras el inicio se entra en la interfaz de Isaac Sim: a la izquierda está el Stage Tree, a la derecha el panel Property,

y en el centro el visor 3D.

```bash
# Launch via a Python script (Isaac Sim 4.x+)
./python.sh my_script.py
```

Punto clave: Isaac Sim es esencialmente una aplicación Omn Kit; toda la funcionalidad se expone a través de la API de Python (`omni.isaac.*` / `isaacsim.*`), y las operaciones por GUI y por script son equivalentes.

## 38.2 Comprender la estructura de la escena de Isaac Sim

La escena de Isaac Sim está enraizada en el **Stage** (stage de USD), y cada objeto es un **Prim** (primitiva de escena).

Es suficiente con entender tres niveles:

```text
Stage (root)
  └── Prim (an object, e.g., arm, ground, workbench)
        └── child Prims (e.g., each link)
              └── Properties (e.g., joint, mesh, material)
```

Diferencias con MuJoCo:

|Concepto|MuJoCo (MJCF)|Isaac Sim (USD)|
|---|---|---|
|Raíz de la escena|`<mujoco>`|Stage|
|Objeto|`<body>`|Prim|
|Articulación|`<joint>`|Joint Prim (adjunto bajo un eslabón)|
|Actuador|`<actuator>`|Joint Drive (propiedad de USD)|
|Colisión|`<geom confluence>`|Collision API (adjunta a una malla)|

MuJoCo define los actuadores como elementos independientes; Isaac Sim adjunta el “drive” como una propiedad Drive directamente en la articulación. Esta es la diferencia arquitectónica más fundamental entre los dos motores.

<a id="usd"></a>

## 38.3 Fundamentos del modelo USD

USD (Universal Scene Description) es un formato de descripción de escenas desarrollado por Pixar; Isaac Sim lo utiliza en lugar de URDF/MJCF.

### USD vs URDF

Este repositorio ya contiene el archivo URDF del brazo RS:

Isaac Sim no utiliza URDF directamente; en su lugar lo convierte a USD mediante el URDF Importer.

|Función|URDF|USD|
|---|---|---|
|Formato|XML|Binario/texto|
|Sobrescrituras en capas|No compatible|Admite referencias y sobrescrituras de Layer|
|Separación colisión/visual|Etiquetas `<visual>` / `<collision>`|Collision API / Mesh API|
|Accionamiento de articulación|Ninguno (requiere un controlador externo)|Propiedad Joint Drive integrada|
|Acoplamiento con motor físico|No acoplado|Puede vincular propiedades de PhysX|

### Conceptos clave de USD

- **Reference**: un archivo USD hace referencia a otro, similar al `<include>` de MuJoCo.
- **Override**: modifica propiedades sobre una referencia sin cambiar el archivo original.
- **Payload**: una referencia cargada de forma diferida, usada para la optimización de escenas grandes.
- **Variant**: diferentes variantes del mismo modelo (por ejemplo, “con pinza” y “sin pinza”).

Resumen de la estructura del brazo reBot (a partir del análisis del URDF):

```text
base_link
  └── joint1 (revolute, -2.8~2.8 rad) → link1
        └── joint2 (revolute, 0~3.14) → link2
              └── joint3 (revolute, 0~3.14) → link3
                    └── joint4 (revolute, -1.57~1.57) → link4
                          └── joint5 (revolute, -1.57~1.57) → link5
                                └── joint6 (revolute, -3.14~3.14) → link6
                                      └── j_gripper_end (fixed) → gripper_end
                                            ├── gripper_joint1 (prismatic, 0~0.05) → gripper_left
                                            └── gripper_joint2 (prismatic, 0~0.0715) → gripper_right
```

Seis articulaciones rotativas más una articulación fija conectan el efector final, y dos articulaciones prismáticas accionan los dedos izquierdo y derecho de la pinza.

<a id="import"></a>

## 38.4 Importación del USD del brazo reBot

### URDF Importer

Isaac Sim incluye la herramienta URDF Importer; la ruta de menú es:

```text
Isaac Utils → Workflows → URDF Importer
```

O utiliza la API de Python:

```python
from isaacsim.import_config.urdf import ImportConfig
from omni.importer.urdf import _urdf

import_config = ImportConfig()
import_config.merge_fixed_joints = False      # keep the fixed joint structure
import_config.make_default_prim = True
import_config.create_physics_scene = False     # do not recreate if a scene already exists
import_config.fix_base = True                 # fix the arm base
import_config.default_drive_type = _urdf.UrdfJointTargetType.JOINT_DRIVE_POSITION

_urdf.import_urdf(urdf_path, output_usd_path, import_config)
```

### Opciones clave al importar

1. **merge_fixed_joints**: establécelo en False para conservar la articulación fija `j_gripper_end`; de lo contrario

`gripper_end` se fusiona en `link6`. Conservarla es más intuitivo; fusionarla es más eficiente.

2. **fix_base**: establécelo en True para fijar `base_link` al mundo y que el brazo no caiga por la gravedad.
3. **default_drive_type**: elige accionamiento de posición (POSITION), de modo que se puedan enviar ángulos objetivo directamente tras la importación.

### Rutas de archivos de malla

Las mallas STL referenciadas por el URDF están en el directorio `meshes_rs/`. El importador resuelve automáticamente el prefijo `package://rebotarm_bringup/description/meshes_rs/`. Si la importación falla, comprueba la variable de entorno `ROS_PACKAGE_PATH` o cambia manualmente las rutas de las mallas a rutas absolutas.

## 38.5 Comprobación de eslabones y articulaciones

Tras la importación, comprueba la estructura en el Stage Tree:

```text
/rebotarm_rs          ← root Prim
  /base_link
    /link1
      /link2
        ...
          /gripper_end
            /gripper_left
            /gripper_right
```

Principio: Isaac Sim convierte los `<joint>` del URDF en Joint Prims de USD. Una articulación rotativa se convierte en `PhysicsRevoluteJoint`, una articulación prismática se convierte en `PhysicsPrismaticJoint`, y una articulación fija se convierte en `PhysicsFixedJoint`. El eje de la articulación, los límites y otros atributos se asignan directamente a propiedades de USD.

## 38.6 Comprobación de visual y colisión

Los `<visual>` y `<collision>` del URDF se anotan con diferentes APIs en USD:

```python
from pxr import UsdPhysics

# check collision bodies
for prim in stage.Traverse():
    if prim.HasAPI(UsdPhysics.CollisionAPI):
        print("Collision:", prim.GetPath())

# check visual meshes
for prim in stage.Traverse():
    if prim.IsA(UsdGeom.Mesh):
        print("Mesh:", prim.GetPath())
```

Principio: Isaac Sim no marca cuerpos puramente visuales con `<geom contype="0" conaffinity="0">` como MuJoCo. En USD, cada malla es renderizable por defecto; solo las mallas con un `CollisionAPI` participan en colisiones físicas. Esto significa que la misma malla puede ser tanto visual como de colisión, o solo visual.

## 38.7 Configuración de la raíz de Articulation

Este es el concepto más importante en Isaac Sim, sin un equivalente directo en MuJoCo.

### Qué es una raíz de Articulation

La raíz de Articulation le indica a PhysX: “estas articulaciones y eslabones forman un sistema articulado; resuélvelo de forma unificada con el algoritmo de Featherstone

en lugar de tratarlos como cuerpos rígidos independientes conectados por restricciones”.

```text
Without an Articulation Root:
  base_link ←constraint→ link1 ←constraint→ link2 ...
  each parent-child link pair is a separate constraint solver; with many joints this becomes unstable.

With an Articulation Root:
  [Articulation Root] → base_link → link1 → link2 → ...
  the whole kinematic chain is solved in one pass with the Featherstone algorithm, numerically stable.
```

### Cómo configurarla

Añade la `PhysicsArticulationRootAPI` en `base_link`:

```python
from pxr import UsdPhysics

base_link = stage.GetPrimAtPath("/rebotarm_rs/base_link")
UsdPhysics.ArticulationRootAPI.Apply(base_link)
```

Principio: la raíz de Articulation debe colocarse en el eslabón raíz de la cadena cinemática. Para el brazo reBot ese es *`base_link`*. Si se coloca en el eslabón equivocado, PhysX trunca la cadena y las articulaciones posteriores pierden su accionamiento. El URDF Importer suele añadir la raíz de Articulation automáticamente, pero si editas el USD manualmente, comprueba que siga ahí.

## 38.8 Configuración de los Joint Drives

### Principio del Drive

MuJoCo utiliza actuadores *`<motor>`* o *`<position>`*, con pares de accionamiento calculados externamente en Python. El Drive de Isaac Sim es un **controlador PD integrado en la articulación**; el par se calcula dentro de PhysX:

```bash
tau = kp * (target_pos - current_pos) + kv * (target_vel - current_vel) + feedforward
#This is almost the same PD control formula as MuJoCo's physics mode; the difference is that Isaac Sim puts the PD loop inside the engine, while MuJoCo computes it in Python and writes it into `data.ctrl`.
```

### Cómo configurarlo

```python
from pxr import UsdPhysics

joint_path = "/rebotarm_rs/base_link/link1/joint1"
joint = UsdPhysics.Joint.Get(stage, joint_path)

drive = UsdPhysics.DriveAPI.Get(joint, "angular")  # revolute joints use angular, prismatic use linear
drive.GetTargetPositionsAttr().Set([0.0])    # target angle
drive.GetTargetVelocitiesAttr().Set([0.0])  # target velocity
drive.GetStiffnessAttr().Set(80.0)          # kp
drive.GetDampingAttr().Set(5.0)             # kv
drive.GetMaxForceAttr().Set(36.0)           # torque limit
```

### Correspondencia con las ganancias del robot real

`Stiffness` y `Damping` de Isaac Sim Drive corresponden a `kp` y `kd` en modo MIT del brazo real.

Puedes usar directamente los valores de configuración del robot real (ver [rebotarm_hardware.yaml]/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/src/rebotarm_bringup/config/rebotarm_hardware.yaml)):

```yaml
# Real-robot RS MIT gains
mit_kp: [80.0, 150.0, 150.0, 50.0, 50.0, 50.0]
mit_kd: [5.0, 10.0, 10.0, 5.0, 4.0, 4.0]
```

Rellena estos valores en las propiedades Drive de cada articulación, y el comportamiento de la simulación será cercano al del robot real.

## 38.9 Configuración de la rigidez y el amortiguamiento de las articulaciones

Principios de ajuste para rigidez y amortiguamiento:

1. **Rigidez demasiado baja**: la articulación es blanda, alcanza el ángulo objetivo lentamente y se hunde visiblemente bajo carga.
2. **Rigidez demasiado alta**: la articulación es demasiado dura, puede oscilar y PhysX se vuelve numéricamente inestable.
3. **Amortiguamiento demasiado bajo**: oscila después de alcanzar el objetivo, con un sobreimpulso evidente.
4. **Amortiguamiento demasiado alto**: el movimiento es lento, como moverse en jarabe.

Valores iniciales recomendados (correspondientes al robot real):

|Joint|Stiffness (kp)|Damping (kd)|Max Force|
|---|---|---|---|
|joint1|80|5|36|
|joint2|150|10|36|
|joint3|150|10|36|
|joint4|50|5|14|
|joint5|50|4|14|
|joint6|50|4|14|

Estrategia de ajuste: comienza con valores bajos para asegurarte de que no haya oscilaciones, luego aumenta gradualmente la rigidez hasta que la respuesta sea lo suficientemente rápida y después aumenta el amortiguamiento para eliminar la oscilación residual. No empieces con valores altos.

## 38.10 Configuración de la biela del efector de agarre

### El método de Isaac Sim

Isaac Sim no tiene restricción de igualdad; utiliza **Mimic Joint** para la biela. La etiqueta `<mimic>` del URDF se convierte durante la importación:

```python
# The mimic in URDF (if the URDF does not have it, you need to add it manually in USD)
# <mimic joint="gripper_joint1" multiplier="1.43" offset="0"/>
```

El URDF RS actual no tiene etiqueta `<mimic>`, por lo que la biela debe configurarse manualmente después de la importación. Dos métodos:

**Método 1: PhysX Mimic Joint API**

```python
from pxr import UsdPhysics

left_joint = UsdPhysics.Joint.Get(stage, ".../gripper_joint1")
UsdPhysics.MimicAPI.Apply(left_joint)
mimic = UsdPhysics.MimicAPI(left_joint)
mimic.GetReferenceJointRel().SetTargetPath(".../gripper_joint2")
mimic.GetMultiplierAttr().Set(1.43)  # 0.0715 / 0.05 = 1.43
```

**Método 2: enviar comandos de forma síncrona en el control con Python**

Si no utilizas la Mimic API, simplemente envía el mismo objetivo a ambas articulaciones del efector de agarre en el código de control:

```python
# The left and right gripper strokes differ: left 0-0.05m, right 0-0.0715m
# When sending commands, scale by each stroke ratio
left_target = target_ratio * 0.05
right_target = target_ratio * 0.0715
```

Principio: la igualdad de MuJoCo es una restricción dura a nivel del motor físico; la Mimic API de Isaac Sim también es una biela a nivel de motor, mientras que el Método 2 es una biela de software a nivel de control. El Método 1 es más estable; el Método 2 es más flexible.

## 38.11 Añadir el suelo y la mesa de trabajo

### Suelo

Isaac Sim tiene una herramienta integrada para generar el suelo:

```python
from isaacsim.core.api import World

world = World(stage_units_in_meters=1.0)
world.scene.add_default_ground_plane()  # add a Z=0 ground collision plane
```

`add_default_ground_plane()` crea un Prim plano con una CollisionAPI; el coeficiente de fricción por defecto es

0.5. En MuJoCo el suelo es `<geom type="plane"/>`; en Isaac Sim es una malla plana con colisión.

### Mesa de trabajo

Añade una Box como mesa de trabajo:

```python
from isaacsim.core.api.objects import DynamicCuboid

table = DynamicCuboid(
    prim_path="/World/table",
    name="table",
    position=np.array([0.5, 0.0, 0.4]),  # table top height 0.4m
    scale=np.array([0.6, 0.6, 0.02]),     # 60cm x 60cm x 2cm
    color=np.array([0.5, 0.4, 0.3]),
)
```

### Un objeto de tarea sencillo

```python
red_cube = DynamicCuboid(
    prim_path="/World/red_cube",
    name="red_cube",
    position=np.array([0.5, 0.0, 0.42]),
    scale=np.array([0.03, 0.03, 0.03]),   # 3cm cube
    color=np.array([1.0, 0.0, 0.0]),
)
```

Principio: Isaac Sim adjunta directamente propiedades de colisión y dinámica a los Prims de los objetos. `DynamicCuboid` crea automáticamente un cuerpo de colisión y una API de cuerpo rígido; `FixedCuboid` solo crea un cuerpo de colisión sin cuerpo rígido. Esto es más conciso que en MuJoCo, donde tienes que escribir `<geom contype>` y `<body>` por separado en XML.

## 38.12 Control del brazo con Python

### Articulation API

Isaac Sim encapsula toda la interfaz de control del brazo con la clase `Articulation`, por lo que no necesitas operar articulación por articulación:

```python
from isaacsim.core.api import World
from isaacsim.core.primitives import Articulation

world = World()
world.scene.add_default_ground_plane()

robot = Articulation(prim_path="/rebotarm_rs")
world.reset()

# get joint information
num_joints = robot.num_joints
joint_names = robot.get_dof_names()
```

Principio: internamente, `Articulation` llama a la Articulation API de PhysX para obtener/establecer todos los estados de las articulaciones de una sola vez. Corresponde a la forma de MuJoCo de operar las articulaciones a través de los arrays `data.qpos` y `data.ctrl`, pero lo envuelve en una interfaz de objeto de Python.

<a id="demos"></a>

## 38.13 Demos de práctica

### Demo 1: Cargar el USD del reBot Arm

**Principio**: cuando Isaac Sim carga un archivo USD, construye el árbol Stage y PhysX crea un cuerpo articulado para el subárbol Prim con una Articulation Root. Las mallas visuales se enlazan a la capa de renderizado; las mallas con una CollisionAPI se enlazan a la capa de física.

```python
from isaacsim.core.api import World
from isaacsim.core.primitives import Articulation
import numpy as np

world = World(stage_units_in_meters=1.0)
world.scene.add_default_ground_plane()       # ground

# add the workbench
from isaacsim.core.api.objects import FixedCuboid
table = FixedCuboid(
    prim_path="/World/table", name="table",
    position=np.array([0.5, 0.0, 0.4]),
    scale=np.array([0.6, 0.6, 0.02]),
)

# add the task object
from isaacsim.core.api.objects import DynamicCuboid
cube = DynamicCuboid(
    prim_path="/World/red_cube", name="red_cube",
    position=np.array([0.5, 0.0, 0.42]),
    scale=np.array([0.03, 0.03, 0.03]),
    color=np.array([1.0, 0.0, 0.0]),
)

# load the arm (assuming the USD has been imported)
robot = Articulation(prim_path="/rebotarm_rs")
world.reset()

# verify the loading result
print("Number of joints:", robot.num_joints)
print("Joint names:", robot.get_dof_names())
```

**Resultado esperado**: la vista 3D muestra el modelo del brazo de pie sobre la mesa de trabajo en el suelo, con el cubo rojo sobre la mesa. El Stage Tree muestra la jerarquía completa desde base_link hasta gripper_right.

### Demo 2: Lectura de estados de las articulaciones

**Principio**: `Articulation` lee los arrays de estado de las articulaciones del cuerpo articulado desde PhysX en cada frame. La posición y la velocidad son salidas del solucionador interno de PhysX, no se leen de sensores externos; al igual que `data.qpos` / `data.qvel` de MuJoCo, son estados de simulación.

```python
world.step(render=True)  # first advance one physics frame

# joint positions (radians)
positions = robot.get_joint_positions()
print("Joint positions:", positions)

# joint velocities
velocities = robot.get_joint_velocities()
print("Joint velocities:", velocities)

# joint names and count
joint_names = robot.get_dof_names()
print("Joint names:", joint_names)
print("Number of joints:", robot.num_joints)

# end-effector pose (world frame)
ee_position, ee_orientation = robot.get_local_pose()  # end link pose
```

**Nota de principio**: `get_joint_positions()` devuelve un array de NumPy cuyo orden coincide con `get_dof_names()`. La Articulation Root determina qué articulaciones pertenecen a este cuerpo articulado; las articulaciones fuera del cuerpo articulado no se pueden leer.

### Demo 3: Control de posición de articulaciones

**Principio**: después de establecer la posición objetivo del Drive, el controlador PD dentro de PhysX calcula el par en cada frame y acciona la articulación. Solo necesitas enviar el objetivo una vez; el motor completa por sí mismo el proceso de llegada. Esto difiere del modo de física de MuJoCo, donde Python calcula los pares PD en cada frame y los escribe en `data.ctrl`; Isaac Sim coloca el bucle PD dentro del motor.

```python
# target pose (radians): zero all joints
target_positions = np.array([0.0, 0.0, 0.0, 0.0, 0.0, 0.0])

# Method 1: set the target through the Drive API
robot.set_joint_position_targets(target_positions)

# advance the simulation and let the PD controller drive to the target
for _ in range(100):
    world.step(render=True)

# check whether it has arrived
current = robot.get_joint_positions()
error = np.abs(current[:6] - target_positions)
print("Arrival error:", error)
```

También puedes enviar un objetivo distinto de cero para mover el brazo a una pose especificada:

```python
wave_pose = np.array([0.0, 0.5, 1.0, 0.0, 0.5, 0.0])  # raise the arm and wave
robot.set_joint_position_targets(wave_pose)
for _ in range(200):
    world.step(render=True)
```

**Nota de principio**: `set_joint_position_targets` solo actualiza la propiedad de posición objetivo del Drive; no

aplica fuerza directamente. El par real está determinado por `Stiffness` y `Damping`, y la velocidad de llegada depende de estos dos parámetros y de

`Max Force`.

### Demo 4: Control del efector de agarre

**Principio**: las dos articulaciones prismáticas del efector de agarre (gripper_joint1 y gripper_joint2) tienen diferentes recorridos (0.05 m y 0.0715 m) pero deben moverse sincronizadas. El principio es mapear la misma relación de apertura/cierre a las posiciones objetivo de ambas articulaciones simultáneamente.

```python
GRIPPER_LEFT_RANGE = 0.05      # gripper_joint1 stroke
GRIPPER_RIGHT_RANGE = 0.0715   # gripper_joint2 stroke

def set_gripper(robot, open_ratio: float):
    """open_ratio: 0=fully closed, 1=fully open"""
    open_ratio = max(0.0, min(1.0, open_ratio))
    left_target = open_ratio * GRIPPER_LEFT_RANGE
    right_target = open_ratio * GRIPPER_RIGHT_RANGE

    # assume the gripper joints come after the arm joints
    joint_names = robot.get_dof_names()
    arm_joints = 6  # the first 6 are arm joints

    positions = robot.get_joint_positions()
    positions[arm_joints]     = left_target    # gripper_joint1
    positions[arm_joints + 1] = right_target   # gripper_joint2
    robot.set_joint_position_targets(positions)

    for _ in range(50):
        world.step(render=True)

# open the gripper
set_gripper(robot, 1.0)

# close the gripper
set_gripper(robot, 0.0)

# half open
set_gripper(robot, 0.5)
```

**Nota de principio**: aquí el enlace por software a nivel de control reemplaza la restricción física. Si la Mimic API está configurada (Método 1 en 38.10), solo necesitas controlar una articulación y la otra la seguirá automáticamente. El ejemplo actual usa sincronización por software, que es más intuitiva y adecuada para la enseñanza.

**Puntos clave de la sincronización de dos dedos**

Los recorridos de las pinzas izquierda y derecha son diferentes pero las direcciones de movimiento son las mismas (ambas se abren hacia afuera), así que usa el mismo `open_ratio` para escalar

cada límite de recorrido. Si las direcciones de los ejes de las dos articulaciones fueran opuestas (una positiva y otra negativa), también tendrías que aplicar un signo negativo,

pero en el URDF del reBot Arm, ambas articulaciones de la pinza tienen el eje `0 0 1`, por lo que las direcciones son coherentes.

## 38.14 Resumen

Las diferencias conceptuales principales entre Isaac Sim y MuJoCo:

1. **Formato de modelo**: USD reemplaza MJCF, y admite referencias en capas y sobrescrituras.
2. **Cuerpo articulado**: el Articulation Root es un concepto específico de Isaac Sim, que entrega toda la cadena cinemática al algoritmo de Featherstone para una resolución unificada. MuJoCo no tiene tal concepto; todos los cuerpos viven de forma natural en un solo árbol.
3. **Método de accionamiento**: Drive es un controlador PD integrado en la articulación, que calcula el par internamente en PhysX. El actuador `<motor>` de MuJoCo calcula el par externamente en Python y lo escribe en `data.ctrl`.
4. **Vinculación de la pinza**: Isaac Sim usa la Mimic API o sincronización por software; MuJoCo usa la restricción de igualdad.
5. **Anotación de colisión**: USD usa la CollisionAPI para distinguir cuerpos de colisión de cuerpos puramente visuales; MuJoCo usa los atributos `contype` / `conaffinity`.

Una vez domines estas diferencias, el contenido sobre mapeo de articulaciones, conversión de unidades, comunicación y diseño de seguridad del Capítulo 39 puede aplicarse directamente a la escena de Isaac Sim.

---

</div>
