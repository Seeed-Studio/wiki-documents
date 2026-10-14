---
description: "Capítulo 36 del Curso de iniciación a la IA Física de Seeed — ejecución del reBot Arm en MuJoCo: instalación del entorno de desarrollo de MuJoCo, lectura de la estructura del modelo MJCF, importación del modelo del reBot Arm a través de los paquetes de ROS2, lanzamiento de la simulación completa y accionamiento de las articulaciones desde la interfaz gráfica de deslizadores de ROS2."
title: Capítulo 36 - Ejecución del reBot Arm en MuJoCo
hide_title: true
keywords:
  - reBot
  - Robotic Arm
  - MuJoCo
  - MJCF
  - ROS2
  - B601-RS
  - B601-DM
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_36
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_36/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 8 · Capítulo 36 · Práctica</span>
    <h2>36. Ejecución del reBot Arm en MuJoCo</h2>
    <p>
      Capítulo 36 del Curso de iniciación a la IA Física de Seeed — ejecución del reBot Arm en MuJoCo: instalación del entorno de desarrollo de MuJoCo, lectura de la estructura del modelo MJCF, importación del modelo del reBot Arm a través de los paquetes de ROS2, lanzamiento de la simulación completa y accionamiento de las articulaciones desde la interfaz gráfica de deslizadores de ROS2.
    </p>
    <div className="hero-actions">
      <a href="#overview">Resumen del capítulo</a>
      <a href="#install">Instalar MuJoCo</a>
      <a href="#mjcf">El modelo MJCF</a>
      <a href="#import">Importar el brazo</a>
    </div>
  </div>
</section>

El capítulo 35 cubrió la teoría de simulación; este capítulo es práctico. El objetivo es sencillo: hacer que el reBot Arm se ejecute en MuJoCo, verlo moverse y comprender la relación entre el modelo, las articulaciones y las órdenes de control.

Objetivo didáctico: permitir que los usuarios completen la primera ejecución del reBot Arm en MuJoCo y comprendan la relación entre el modelo del robot,

las articulaciones y las órdenes de control.

<a id="overview"></a>

## 36.1 Instalación del entorno de desarrollo de MuJoCo

Los bindings de Python de MuJoCo se instalan mediante pip; no es necesaria la compilación de bibliotecas en C. El espacio de trabajo del reBot Arm

usa un entorno virtual (`.venv`) para gestionar las dependencias de Python, y MuJoCo se instala dentro de él.

**Método 1: usar el entorno virtual integrado del espacio de trabajo (recomendado)**

```bash
#RS:
cd ~/ReBot_Arm_DigitalTwin_RS
source scripts/rs_env.sh
python3 -c "import mujoco; print(mujoco.__version__)"

#DM:
cd ~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main
source scripts/source_rebotarm_env.sh
python3 -c "import mujoco; print(mujoco.__version__)"
```

Si la salida es algo como `3.10.0`, MuJoCo está listo. `source_rebotarm_env.sh` carga automáticamente ROS2, el entorno virtual y PYTHONPATH; todos los comandos posteriores necesitan hacer source de este script primero.

**Método 2: instalación manual**

Si no estás en el entorno virtual del espacio de trabajo, puedes instalar con pip directamente:

```bash
pip3 install mujoco
#MuJoCo 3.x is a pure pip package with built-in binary libraries; no extra system dependencies needed. After installation, `import mujoco` and `mujoco.viewer` are ready to use.
```

### Verificar la instalación de mujoco

```bash
python3 -c "
import mujoco
print('MuJoCo version:', mujoco.version)
print('GPU rendering:', mujoco.GL_CONTEXT_BACKENDS if hasattr(mujoco, 'GL_CONTEXT_BACKENDS') else 'auto')
"
```

### Resultado esperado

- **Éxito**: si el entorno está configurado correctamente, verás una salida similar a la siguiente (el número de versión puede variar):

```bash
MuJoCo version: 3.2.0
GPU rendering: ['egl', 'glfw']
```

- O `GPU rendering: auto` (dependiendo de las opciones de compilación).
- **Fallo**: si `mujoco` no está instalado o la ruta no está configurada, se lanzará un `ModuleNotFoundError`, lo que indica un problema de instalación.

<a id="mjcf"></a>

## 36.2 Comprender la estructura del modelo MJCF

MJCF (MuJoCo XML) es el formato de modelo nativo de MuJoCo. Un archivo MJCF consta de los siguientes elementos de nivel superior:

|Element|Role|Embodiment in the reBot Arm|
|---|---|---|
|`<compiler>`|Opciones de compilación: unidad de ángulo, sistema de coordenadas, ruta de mallas|`angle="radian" coordinate="local" meshdir="../meshes"`|
|`<option>`|Parámetros físicos: paso de tiempo, gravedad, solver|`timestep="0.001" gravity="0 0 -9.81"`|
|`<visual>`|Parámetros de renderizado: luces, niebla, vista global|`headlight`, `azimuth="135"`|
|`<asset>`|Declaraciones de recursos: mallas, materiales, texturas|10 mallas STL + múltiples materiales|
|`<default>`|Valores por defecto: amortiguamiento de articulaciones, colisión de geoms|`damping="0.8" armature="0.01"`|
|`<worldbody>`|Cuerpo mundo: suelo, luces, cámaras, robot|Mesa, objetos, cadena cinemática del brazo|

Los archivos MJCF del reBot Arm se encuentran en:

```bash
RS version (rebotarm_mujoco_rs package):
src/rebotarm_mujoco_rs/models/
  rs_arm.xml                   # physics model (STL mesh + full inertia + 7 actuators)
  rs_grasp_scene.xml            # grasping scene (with objects)
DM version (rebotarm_mujoco package):
src/rebotarm_mujoco/models/
  rebotarm_b601_stl.xml        # physics model (STL mesh + full inertia)
  rebotarm_b601_kinematic.xml  # kinematics model (simplified geometry + no inertia)
  rebotarm_b601_stl.xml         # physics model (STL mesh + full inertia, with scene objects)
  rebotarm_b601_kinematic.xml   # kinematics model (simplified geometry + no inertia)
  rebotarm_b601_colored.xml     # colored model (multi-material STL)
  simple_rebotarm.xml           # simplified model (primitive geometries)
```

Los dos modelos comparten la misma estructura cinemática (nombres de articulaciones, ejes, límites). Las diferencias son:

|Feature|STL model|Kinematics model|
|---|---|---|
|Visual|Malla STL (detallada)|cápsula/esfera/cilindro (simplificado)|
|Inertial|Definida para cada eslabón|Mayormente omitida|
|Collision|La garra tiene colisión tipo caja|Sin colisión|
|timestep|0.001 s|0.002 s|
|Use|Simulación física, real2sim|Visualización ligera|

Este capítulo utiliza el modelo STL, porque se ve bien y admite simulación física.

<a id="import"></a>

## 36.3 Importar el modelo del reBot Arm en MuJoCo

### Compilar los paquetes de ROS2

```bash
#RS:
cd ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash

#DM:
cd ~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main
source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash
```

Después de compilar, el directorio share del paquete de MuJoCo contendrá los archivos de modelo y las mallas STL:

```bash
# Verify the share directory (RS)
ros2 pkg prefix rebotarm_mujoco_rs
# output: ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/install/rebotarm_mujoco_rs
ls $(ros2 pkg prefix rebotarm_mujoco_rs)/share/rebotarm_mujoco_rs/models/
# meshes/  rs_arm.xml  rs_grasp_scene.xml

# Verify the share directory (DM)
ros2 pkg prefix rebotarm_mujoco
ls $(ros2 pkg prefix rebotarm_mujoco)/share/rebotarm_mujoco/models/
# rebotarm_b601_stl.xml  rebotarm_b601_kinematic.xml  rebotarm_b601_colored.xml  simple_rebotarm.xml
```

#### Iniciar mediante launch

```bash
#RS:
ros2 launch rebotarm_mujoco_rs mujoco_rs.launch.py use_viewer:=true
#DM:
ros2 launch rebotarm_mujoco real2sim.launch.py
```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-36/ch36-01.png" alt="La escena de agarre del reBot Arm en el visor de MuJoCo" />
</div>

### Iniciar mediante ROS2 launch (con el entorno completo)

```bash
#RS:
./scripts/start_rs_sim.sh
#DM:
./rebotarm start sim
or call the script directly:
~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main/scripts/start_rebot_mujoco_all.sh
```

### Control mediante la interfaz gráfica de deslizadores de articulaciones de ROS2

El reBot Arm proporciona una interfaz gráfica de deslizadores de articulaciones en Tkinter (joint_slider_gui.py) para controlar cada articulación a través de una interfaz gráfica:

#### 1. Inicia primero la simulación

```bash
#1. First start the sim (full physics simulation)
#RS:
cd ~/ReBot_Arm_DigitalTwin_RS
./scripts/start_rs_sim.sh
#DM:
cd ~/ReBot_Arm_DigitalTwin_DM
./rebotarm start sim
```

#### 2. Abre otra terminal

```bash
#The slider GUI defines 7 joint controls:
#RS:
source /opt/ros/jazzy/setup.bash
source ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2/install/setup.bash
ros2 launch rebotarm_mujoco_rs joint_slider_gui.launch.py

#DM:
source /opt/ros/jazzy/setup.bash
source ~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main/install/setup.bash
ros2 launch rebotarm_mujoco joint_slider_gui.launch.py
```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-36/ch36-02.png" alt="Accionando el brazo simulado desde la interfaz gráfica de deslizadores de articulaciones de ROS2" />
</div>

<a id="faq"></a>

## 36.4 Preguntas frecuentes

**P1: El visor de MuJoCo muestra una pantalla negra o se bloquea después de abrirse. ¿Qué debo hacer?**

Normalmente se trata de un problema de renderizado por GPU. Intenta configurar el backend de renderizado:

```bash
export MUJOCO_GL=egl    # use EGL (recommended, no display needed)
export MUJOCO_GL=glfw    # use GLFW (requires a desktop environment)
export MUJOCO_GL=osmesa  # use software rendering (slowest but most compatible)
```

En servidores sin pantalla (por ejemplo, vía SSH), usa `egl` u `osmesa`.

**P2: "mesh file not found" al cargar MJCF. ¿Qué debo hacer?**

En MJCF, `meshdir="../meshes"` es una ruta relativa. Si ejecutas el script desde otro directorio, los archivos de malla

pueden no encontrarse. Soluciones:

1. Después de compilar los paquetes de ROS2, carga desde el directorio share (recomendado): ros2 pkg prefix rebotarm_mujoco_rs (RS) o ros2 pkg prefix rebotarm_mujoco (DM)
2. O asegúrate de ejecutar el script desde el directorio models/ (su directorio padre contiene meshes/)
3. El mujoco_sync.py de RS resuelve automáticamente las rutas de malla; DM necesita cargar desde el directorio install

**P3: Después de arrastrar la interfaz gráfica de deslizadores de articulaciones, el brazo en MuJoCo no se mueve. ¿Qué debo hacer?**

Comprueba los tres enlaces:

1. ¿Está ejecutándose el driver falso? RS: ros2 topic echo /rebotarm_rs/joint_states --once; DM: ros2 topic echo /rebotarm/joint_states --once
2. ¿El nodo de sincronización está suscrito al tópico correcto? RS se suscribe a /rebotarm_rs/joint_states por defecto; DM se suscribe a /rebotarm/joint_states por defecto
3. ¿Está abierto el visor? La terminal debería mostrar que el nodo de sincronización está listo

Si el nombre del tópico no coincide, especifícalo con un parámetro:

```bash
RS: REAL2SIM_JOINT_STATE_TOPIC=/rebotarm_rs/joint_states ./scripts/start_rs_sim.sh
DM: REAL2SIM_JOINT_STATE_TOPIC=/rebotarm/joint_states ./rebotarm start sim
```

**P4: Solo se mueve un lado de la garra. ¿Qué debo hacer?**

RS: comprueba si la restricción `equality` está configurada correctamente (`joint_left` y `joint_right` deben seguir a `joint7`).

DM: verifica si tanto `finger_left` como `finger_right` reciben comandos. Si solo se envía `finger_left` sin un `target` para `finger_right`, solo se moverá un lado.

**P5: Los objetos salen volando en el modo de agarre con física. ¿Qué debo hacer?**

Es posible que los parámetros PD sean demasiado agresivos. Intenta reducir `arm_kp` y `arm_kd`:

```bash
RS: ros2 launch rebotarm_mujoco_rs mujoco_rs.launch.py simulation_mode:=physics arm_torque_limit:=10.0
DM: ros2 launch rebotarm_mujoco mujoco_physics_grasp.launch.py arm_torque_limit:=10.0
```

Reducir el límite de par desde el valor predeterminado de 30.0 a 10.0 evita que los objetos sean expulsados por pares articulares excesivos. También puedes reducir `control_hz` para disminuir la agresividad del bucle de control.

---

</div>
