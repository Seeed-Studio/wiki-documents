---
description: "Capítulo 35 del Curso de Introducción a la IA Física de Seeed — simulación de robots desde cero: por qué la simulación es un simulador de vuelo para robots, los tres elementos clave (modelo, entorno, controlador), los avatares visual / de colisión / inercial del modelo del robot, articulaciones, actuadores y sensores, tamaño de paso de simulación frente a frecuencia de control, los formatos URDF / MJCF / USD, MuJoCo frente a Isaac Sim y el gemelo digital."
title: Capítulo 35 - Fundamentos de la simulación de robots e introducción a plataformas
hide_title: true
keywords:
  - reBot
  - Robotic Arm
  - Simulation
  - MuJoCo
  - Isaac Sim
  - MJCF
  - USD
  - Digital Twin
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/rebot_physical_ai_course_chapter_35
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/es/robotics/rebot_physical_ai_course_chapter_35/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 8 · Capítulo 35 · Teoría</span>
    <h2>35. Fundamentos de la simulación de robots e introducción a plataformas</h2>
    <p>
      Capítulo 35 del Curso de Introducción a la IA Física de Seeed — simulación de robots desde cero: por qué la simulación es un simulador de vuelo para robots, los tres elementos clave (modelo, entorno, controlador), los avatares visual / de colisión / inercial del modelo del robot, articulaciones, actuadores y sensores, tamaño de paso de simulación frente a frecuencia de control, los formatos URDF / MJCF / USD, MuJoCo frente a Isaac Sim y el gemelo digital.
    </p>
    <div className="hero-actions">
      <a href="#overview">Resumen del capítulo</a>
      <a href="#elements">Elementos clave</a>
      <a href="#formats">URDF, MJCF, USD</a>
      <a href="#choose">Elegir un simulador</a>
    </div>
  </div>
</section>

### Hardware necesario para esta etapa

Qué preparar para esta etapa. La lista completa para cada etapa está en el [Capítulo 3](/es/robotics/rebot_physical_ai_course_chapter_3/).

**Unidad de control principal**

| Elemento | Comprar | Cant. |
| :--- | :---: | :---: |
| [reComputer Robotics J4012](https://www.seeedstudio.com/reComputer-Robotics-J3011-with-GMSL-extension-board-p-6538.html) | 🛒 | 1 |
| [NVIDIA Jetson AGX Thor 128G](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html) | 🛒 | 1 |

También se requiere un ordenador de sobremesa o portátil: Ubuntu 22.04, GTX 4080 o superior con 12GB+ de VRAM, 16GB+ de RAM.

**Para esta etapa**

| Elemento | Comprar | Cant. |
| :--- | :---: | :---: |
| [reBot Arm B601 DM/RS](https://www.seeedstudio.com/reBot-Arm-B601-DM-Assembled-Kit-with-Power-Supply-Bundle.html) | 🛒 | 1 |


{/* TODO: the original document shows a figure here (image 1.png) that was not exported - the file is not in 图片和附件/ and there is nothing to upload, so the figure has to be re-created before the page is complete. */}
<a id="overview"></a>

## 35.1 ¿Por qué usar simulación? — La lógica del "simulador de vuelo"

La simulación de robots no es una "pieza de exhibición"; es el campo de pruebas seguro de la robótica moderna.

- **Reducir el riesgo de depuración**: Un brazo real fuera de control puede destrozar equipos o herir a personas; en simulación, el peor caso es que el modelo salga volando (explosión del motor físico).
- **Romper los límites de tiempo y dinero**: Puedes ejecutar algoritmos 24/7 sin esperar a que el brazo real se cargue o repare, y sin ocupar una línea de producción física.
- **Obtener "etiquetas perfectas"**: En simulación, conoces el par de cada articulación, la fuerza de cada eslabón y la pose 6D del efector final con precisión absoluta, cosas que en el mundo físico real a menudo requieren sensores caros para medirse.

Para el reBot Arm, la simulación no es opcional; es la ruta de desarrollo por defecto. El script `start_fake_bringup.sh` en el espacio de trabajo inicia un entorno de simulación puro: usando interfaces de hardware simuladas, puede completar toda la validación desde el control de articulaciones hasta la planificación de movimiento con MoveIt2 sin conectar un brazo real.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35/ch35-01.png" alt="Por qué usar simulación: riesgo de depuración, coste y etiquetas" />
</div>

## 35.2 Los tres roles clave de la simulación en el desarrollo

|Etapa de desarrollo|En qué te ayuda la simulación|
|---|---|
|Validación de algoritmos (cinemática/dinámica)|Probar si el algoritmo de cinemática inversa (IK) converge, si la planificación de trayectoria es suave y si el controlador (PID/MPC) es estable.|
|Pruebas software-in-the-loop (SIL)|Tu código de decisión de alto nivel (por ejemplo, comandos de salida del modelo VLA) permanece completamente sin cambios; solo se sustituye la interfaz de comunicación de bajo nivel por Topics simulados, para verificar que la lógica de software funciona de extremo a extremo.|
|Entrenamiento de aprendizaje por refuerzo (RL)|Dejar que el brazo "muera" decenas de miles de veces en simulación para aprender políticas, obteniendo enormes cantidades de datos de entrenamiento a coste cero (transferencia Sim2Real).|

<a id="elements"></a>

## 35.3 Los tres elementos clave de la simulación: modelo, entorno, controlador

Un sistema de simulación completo consta de estas tres partes, ninguna de las cuales puede faltar:

**Modelo de robot (Agente)**: describe "cómo me veo, cuánto peso y cómo giran mis articulaciones".

**Entorno**: describe "dónde estoy y qué hay a mi alrededor". (suelo, mesa, objetos a agarrar, obstáculos)

**Controlador**: describe "cómo me muevo". (política VLA, interpolación de trayectorias, PID de bajo nivel)

En una frase: el controlador emite comandos de par/posición -> impulsa al modelo a moverse en el entorno -> los sensores retroalimentan el estado al controlador, formando un bucle cerrado.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35/ch35-02.png" alt="Los tres elementos clave: modelo de robot, entorno y controlador" />
</div>

En el modelo MJCF del reBot Arm, las tres partes tienen manifestaciones concretas: modelo de robot—empezando desde `base_link`, construyendo la cadena cinemática completa mediante elementos `<body>` anidados:

```bash
base_link -> link1 -> link2 -> link3 -> link4 -> link5 -> link6 -> end_link
                                                              |- finger_left_link
                                                               `- finger_right_link
```

Entorno—MJCF define una escena de agarre completa:

```xml
<geom name="floor" type="plane" size="1.0 1.0 0.02" material="floor_mat"/>

<body name="task_table" pos="0.42 0 0.015">
  <geom name="task_table_top" type="box" size="0.30 0.26 0.015"
        contype="1" conaffinity="1" condim="6" friction="2.2 0.12 0.02"/>
</body>

<body name="red_cube" pos="0.34 -0.13 0.061">
  <freejoint/>
  <geom type="box" size="0.025 0.025 0.025" mass="0.04" contype="1" conaffinity="1"/>
</body>
```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35/ch35-03.jpg" alt="Una escena de agarre en MuJoCo con objetos de tarea coloreados" />
</div>

La escena contiene una mesa, tres objetos para agarrar (un cubo rojo, un bloque azul, un cilindro amarillo) y una esfera objetivo de IK de tipo mocap. Estos elementos de entorno hacen que la simulación sea más que simplemente "ver moverse el brazo": puedes probar el flujo de pick-and-place en una escena de agarre completa.

El controlador—la simulación de MuJoCo del reBot Arm tiene dos métodos de control:

- Establecer directamente `qpos` (modo cinemático): `real2sim_sync.py` escribe los estados de las articulaciones de ROS en `data.qpos`, llama a `mj_forward` para corregir la cinemática y no implica fuerzas ni dinámica.
- Aplicar par (modo dinámico): `mujoco_torque_control.py` aplica pares de articulación a través de `data.qfrc_applied` y llama a `mj_step` para avanzar la simulación física.

## 35.4 Los "tres avatares" del modelo de robot: visual, colisión, inercial

En archivos de simulación (como URDF / MJCF), un eslabón suele contener estos tres atributos, cada uno con su propia función:

|Atributo|Metáfora|Papel|Requisito gráfico|
|---|---|---|---|
|Visual (modelo visual)|La "piel/apariencia" del actor|Se usa solo para la visualización en renderizado, para que se vea bien en la GUI.|Mallas finas (STL/DAE), muchos triángulos.|
|Colisión (modelo de colisión)|La "burbuja de seguridad/esqueleto" del actor|Usado por el motor físico para calcular detección de colisiones y fuerzas de contacto.|Extremadamente simplificado (envuelto en esferas, cápsulas, cajas), muy pocas caras, garantizando un cálculo rápido.|
|Inercial (modelo inercial)|El "peso y centro de gravedad" del actor|Define la masa, la posición del centro de masa (origen) y el momento de inercia (matriz de inercia). La clave del realismo físico.|Solo parámetros matemáticos, sin gráficos.|

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35/ch35-04.png" alt="Representaciones visual, de colisión e inercial de un eslabón de robot" />
</div>

**Advertencia de trampa**: Muchas personas copian Visual directamente en Colisión por conveniencia, lo que hace que la simulación se vuelva lenta (la GPU no puede seguir el ritmo) y la detección de colisiones sea extremadamente inestable. ¡La colisión debe simplificarse con Convex Hull!

El modelo MJCF del reBot Arm hace exactamente esto: visual usa mallas STL, colisión usa cajas:

```xml
<!-- Visual: fine STL mesh, only for looks -->
<geom name="gripper_base_visual" type="mesh" mesh="gripper_base_mesh" material="gripper_mat"/>

<!-- Collision: simplified box, only for collision detection -->
<geom name="gripper_palm_collision" type="box" pos="-0.090 0 0"
      size="0.018 0.090 0.034" contype="1" conaffinity="1" condim="6"/>
```

Para las partes de eslabón (link1-link6), las geoms visuales tienen por defecto `contype="0" conaffinity="0"`, sin participar en la detección de colisiones. Esto es un diseño intencional: la autocolisión del brazo se gestiona mediante la matriz ACM del SRDF (ver Capítulo 34),

y a nivel de MuJoCo solo se manejan las colisiones entre la garra y los objetos. Para el modelo Inercial, el modelo STL MJCF del reBot Arm define parámetros inerciales completos para cada cuerpo:

```xml
<inertial pos="-0.000007849 -0.0000011531 0.029841"
          mass="0.8366"
          diaginertia="0.00133040 0.00213119 0.00275877"/>
```

Distribución de masa de cada eslabón

|Eslabón|Masa (kg)|Descripción|
|---|---|---|
|base_link|0.8366|Base, el más pesado|
|link2|1.3266|Brazo superior, el segundo más pesado|
|link3|0.8353|Antebrazo|
|link4|0.52|Pitch de muñeca|
|link5|0.383|Yaw de muñeca|
|link6|0.3663|Rotación de herramienta|
|end_link|0.5|Base de la garra|

Cabe destacar que el modelo cinemático (`rebotarm_b601_kinematic.xml`) omite los datos inerciales de la mayoría de los eslabones, porque el modo cinemático no necesita calcular fuerzas y dinámica, solo relaciones geométricas.

## 35.5 Articulaciones, actuadores y sensores (las "terminaciones nerviosas" en simulación)

&#123;&#123;/* TODO: the original document shows a figure here (image 1.png) that was not exported - the file is not in the folder and there is nothing to upload, so the figure has to be re-created. */&#125;&#125;

### **Articulación**: define el movimiento relativo entre eslabones.

Tipos comunes:

|Tipo de articulación|Nombre en URDF|Nombre en MJCF|Descripción|
|---|---|---|---|
|Articulación rotativa|`revolute`|`hinge`|Como un servo, con límites.|
|Rotación continua|`continuous`|`hinge` (sin rango)|Como una rueda, rotación ilimitada.|
|Articulación prismática|`prismatic`|`slide`|Como una varilla hidráulica.|
|Articulación fija|`fixed`|Ninguna (soldada directamente)|Sueldan dos eslabones juntos.|

El reBot Arm usa `hinge` (joint1-joint6) y `slide` (finger_left, finger_right):

```xml
<joint name="joint1" type="hinge" axis="0 0 1" range="-2.8 2.8"/>
<joint name="joint2" type="hinge" axis="0 0 -1" range="-3.14 0"/>
<joint name="finger_left" type="slide" axis="0 1 0" range="0 0.0285"/>
```

Cada articulación en MJCF tiene parámetros de amortiguamiento y de inercia del rotor (armature):

```xml
<default>
  <joint damping="0.8" armature="0.01" limited="true"/>
</default>
```

`damping="0.8"` simula la fricción de la articulación, haciendo que la articulación desacelere de forma natural sin fuerzas externas. `armature="0.01"` simula la inercia equivalente del rotor del motor, haciendo que la simulación se acerque a las características de respuesta de un motor real.

### **Actuador**: en simulación, define los límites de fuerza/par de accionamiento y el retardo de transmisión. Por ejemplo, si envías un comando de par de -10~10 Nm, el actuador lo recorta antes de pasarlo al motor físico.

Pero el modelo MJCF del reBot Arm no define ningún elemento `<actuator>`; esto no es una omisión,

sino un diseño intencional:

- `real2sim_sync.py` escribe directamente `data.qpos`, pasando por alto el actuador, para lograr sincronización cinemática.
- `mujoco_torque_control.py` escribe directamente `data.qfrc_applied`, pasando por alto el actuador,

para lograr control por par. El recorte de par se hace a nivel de código: `torque_limit=18.0`.

Este diseño "sin actuador" da a los desarrolladores la máxima libertad de control: puedes elegir el modo cinemático (establecer posiciones directamente) o el modo dinámico (establecer pares directamente), sin estar limitado por el modelo de actuador.

### **Sensor**: el simulador puede simular perfectamente (o añadir ruido para simular la realidad)

|Tipo de sensor|Método de simulación|Manifestación en el reBot Arm|
|---|---|---|
|Codificador de posición/velocidad de articulación|Leer directamente `data.qpos` / `data.qvel`|`mujoco_torque_control.py` lee los estados de las articulaciones|
|Sensor de fuerza/par (F/T)|Leer `data.qfrc_bias` (fuerza de sesgo = gravedad + fuerza de Coriolis)|El núcleo de la función de comparación de par|
|IMU|Leer la aceleración y velocidad angular del cuerpo|No se usa en el proyecto|
|Cámara/LiDAR|Generar RGB o nubes de puntos mediante el motor de renderizado|MJCF define la cámara `overhead_rgb`|

El modelo MJCF del reBot Arm no define elementos `<sensor>`; los datos de los sensores se leen directamente a través de la API de Python:

```python
# Read joint position
qpos = self.data.qpos[joint.qpos_addr]

# Read joint velocity
qd = self.data.qvel[joint.dof_addr]

# Read the gravity compensation torque (bias force)
mujoco.mj_forward(self.model, self.gravity_data)
tau_g = self.gravity_data.qfrc_bias[joint.dof_addr]
```

## 35.6 Parámetros clave de tiempo: tamaño de paso de simulación vs frecuencia de control (fácil de confundir)

**dt de física**: el intervalo de tiempo de la iteración interna de integración del motor físico. Por ejemplo, 0.001 s = 1 kHz. Cuanto más pequeño el paso, más precisa y estable la física, pero mayor la carga de CPU.

**Frecuencia de control**: la frecuencia a la que el nodo de control envía comandos a la simulación.

Por ejemplo, 100 Hz. El período de control debe ser un múltiplo entero del paso de simulación (por ejemplo, calcular un comando de control cada 10 pasos de física).

**Regla de oro**: la frecuencia de control debe cubrir suficientemente el ancho de banda mecánico del brazo (típicamente lazo de velocidad de articulación > 1 kHz, lazo de posición > 100 Hz), mientras que el paso de simulación debe ser 5-10 veces más rápido que la frecuencia de control para mantener los comandos de par suaves en el tiempo.

Los dos modelos MJCF del reBot Arm usan diferentes pasos de tiempo:

|Modelo|timestep|Significado|
|---|---|---|
|`rebotarm_b601_stl.xml` (modelo físico)|0.001 s (1 ms = 1 kHz)|Avanza 1 ms de física por paso|
|`rebotarm_b601_kinematic.xml` (modelo cinemático)|0.002 s (2 ms = 500 Hz)|Avanza 2 ms por paso, sin cómputo físico|

El modelo físico usa un paso de tiempo más pequeño (1 ms), porque la simulación dinámica necesita suficiente resolución para garantizar la estabilidad numérica. El modelo cinemático no necesita resolver ecuaciones de movimiento, así que 2 ms son suficientes.

```xml
<option timestep="0.001" gravity="0 0 -9.81" iterations="100" noslip_iterations="20"/>
```

`iterations="100"` y `noslip_iterations="20"` son parámetros del solucionador de restricciones, que afectan la precisión de la solución de contactos y fricción. Valores mayores son más precisos pero más costosos computacionalmente.

En `mujoco_torque_control.py`, la frecuencia de control y la frecuencia de publicación están separadas:

```python
self.declare_parameter("control_hz", 500.0)   # control loop 500 Hz
self.declare_parameter("publish_hz", 60.0)     # state publishing 60 Hz
```

El bucle de control se ejecuta a 500 Hz (cada 2 ms), coincidiendo con el paso de tiempo de 1 ms de MuJoCo; cada ciclo de control llama a `mj_step` para avanzar la simulación física. La publicación de estados se ejecuta a 60 Hz y publica externamente a través de tópicos de ROS2, evitando inundar a los suscriptores con datos de alta frecuencia.

La frecuencia de sincronización de `real2sim_sync.py` es mucho más baja:

```python
self.declare_parameter("sync_hz", 60.0)  # sync rendering at 60 Hz
```

Porque real2sim solo hace sincronización cinemática (escribir qpos + mj_forward), sin llamar a mj_step, no necesita cómputo físico de alta frecuencia. 60 Hz son suficientes para mantener la visualización fluida.

<a id="formats"></a>

## 35.7 Comparación de los tres formatos de modelo: URDF, MJCF y USD

|Formato|Nombre completo / origen|Características|Escenarios aplicables|
|---|---|---|---|
|URDF|Unified Robot Description Format (estándar de ROS)|Estructura en árbol (sin bucles cerrados); extremadamente fuerte para cinemática, pero débil para descripción de dinámica (inercia), y no soporta terrenos complejos.|Brazos tradicionales, bases móviles, estándar del ecosistema ROS.|
|MJCF|MuJoCo XML Format|Optimizado específicamente para dinámica de cuerpos múltiples y contacto; descripción de parámetros físicos extremadamente detallada (fricción, elasticidad, amortiguamiento). Soporta generación automática de envolventes convexas.|Aprendizaje por refuerzo (RL), tareas de contacto de alta precisión (por ejemplo, agarre con mano diestra).|
|USD|Universal Scene Description (liberado por Pixar)|Gestión de escenas de nivel Hollywood; soporta escenas ultra grandes, composición jerárquica y materiales e iluminación extremadamente realistas.|Isaac Sim, gemelos digitales, generación de datos sintéticos de alta fidelidad (profundamente integrado con NVIDIA Omniverse).|

**Recomendación de ruta de desarrollo**: usa URDF para algoritmos de brazo tradicionales; usa MJCF para aprendizaje por refuerzo/manipulación diestra; elige USD para generación de datos de simulación/renderizado fotorrealista.

El desarrollo del reBot Arm implica los dos primeros:

URDF—exportado desde SolidWorks, cada eslabón contiene los tres subelementos `<inertial>`, `<visual>`,

y `<collision>`, usados para visualización en RViz y planificación en MoveIt2:

```xml
<link name="base_link">
  <inertial>
    <mass value="0.79874480798149"/>
    <inertia ixx="..." iyy="..." izz="..."/>
  </inertial>
  <visual>
    <geometry>
      <mesh filename="package://rebotarm_bringup/description/meshes_b601_gripper/base_link.STL"/>
    </geometry>
  </visual>
  <collision>
    <geometry>
      <mesh filename="package://rebotarm_bringup/description/meshes_b601_gripper/base_link.STL"/>
    </geometry>
  </collision>
</link>
```

Observa la limitación de URDF: la colisión solo puede reutilizar la malla visual; no puedes definir por separado un cuerpo de colisión simplificado.

Esta es también la razón por la que el reBot Arm mantiene MJCF en paralelo: MJCF puede definir de forma independiente visual (malla) y colisión (caja) en el mismo eslabón.

MJCF—el MJCF del reBot Arm también soporta elementos de escena que URDF no puede expresar (mesa, objetos, cámara):

```xml
<camera name="overhead_rgb" mode="fixed" pos="0.42 0 0.86" fovy="50"/>
<body name="red_cube" pos="0.34 -0.13 0.061">
  <freejoint/>
  <geom type="box" size="0.025 0.025 0.025" mass="0.04"/>
</body>
```

USD—el reBot Arm no lo usa actualmente, pero si en el futuro se necesita migrar a Isaac Sim, se puede hacer la conversión con las herramientas `urdf_to_usd` o `mjcf_to_usd`.

<a id="choose"></a>

## 35.8 Los dos gigantes de simuladores: MuJoCo VS Isaac Sim (respondiendo "Cuál debería elegir")

|Dimensión de comparación|MuJoCo|Isaac Sim|
|---|---|---|
|Posicionamiento central|Laboratorio de física ligero (la herramienta del matemático)|Plataforma de gemelo digital de nivel empresarial (el metaverso del ingeniero)|
|Motor físico|Basado en optimización convexa/complementariedad cónica; contactos estables y resistentes a explosiones numéricas, simulación extremadamente rápida (puede correr a 10x de velocidad o más).|Basado en PhysX 5 (acelerado por GPU); soporta cuerpos rígidos/blandos y fluidos; gran realismo físico.|
|Capacidad de renderizado|Burda (OpenGL), casi sin iluminación ni sombras.|Trazado de rayos cinematográfico (RTX); puede generar imágenes perfectas semánticas/de profundidad/de segmentación.|
|Requisito de hardware|Funciona fluidamente en CPU (incluso sin GPU).|Requiere una GPU NVIDIA RTX (al menos una 3060 para empezar).|
|Escenarios típicos|Entrenamiento de políticas de aprendizaje por refuerzo (por ejemplo, OpenAI Gym), control óptimo (MPC), dispositivos de bajo cómputo.|Generación de datos sintéticos (entrenar modelos fundacionales de visión), hardware-in-the-loop (HIL), simulación de líneas de producción completas.|

La razón del reBot Arm para elegir MuJoCo es clara: el proyecto necesita validación dinámica precisa (comparación de par de compensación de gravedad) y reflejo en tiempo real del robot real (real2sim). Estas tareas exigen alta precisión física y velocidad de cómputo pero baja calidad de renderizado. MuJoCo satisface exactamente esta necesidad.

Criterios de selección entre ambos:

|Requisito|Plataforma recomendada|Razón|
|---|---|---|
|Modelado dinámico y análisis de par|MuJoCo|Alta precisión física, la API da acceso directo a los pares|
|Planificación de movimiento y validación de trayectorias|MuJoCo / RViz|Ligero, arranque rápido|
|Percepción visual y simulación de sensores|Isaac Sim|Soporta cámaras, LiDAR y otros sensores|
|Entrenamiento de aprendizaje por refuerzo|Isaac Sim|Paralelismo en GPU, entornos a gran escala|
|Reflejo en tiempo real del robot real|MuJoCo|Funciona en CPU, baja latencia|
|Renderizado fotorrealista de escenas|Isaac Sim|Trazado de rayos RTX|

## 35.9 Brazo simulado vs brazo real: "Espejo" y "Brecha"

**Relación**: el brazo simulado es una "proyección matemática idealizada" del brazo real.

**Similitudes**: la cinemática (soluciones directa/inversa) es completamente idéntica; los límites articulares y los límites de velocidad se pueden rellenar exactamente según los parámetros reales.

Las seis articulaciones del reBot Arm tienen exactamente los mismos límites en MJCF y URDF:

|Articulación|Rango|Límites URDF|Límites MJCF|
|---|---|---|---|
|joint1|-2.8 ~ 2.8 rad|lower="-2.8" upper="2.8"|range="-2.8 2.8"|
|joint2|-3.14 ~ 0 rad|lower="-3.14" upper="0"|range="-3.14 0"|
|joint3|-3.14 ~ 0 rad|lower="-3.14" upper="0"|range="-3.14 0"|
|joint4|-1.87 ~ 1.57 rad|lower="-1.87" upper="1.57"|range="-1.87 1.57"|
|joint5|-1.57 ~ 1.57 rad|lower="-1.57" upper="1.57"|range="-1.57 1.57"|
|joint6|-3.14 ~ 3.14 rad|lower="-3.14" upper="3.14"|range="-3.14 3.14"|

**Diferencias (brecha Sim2Real, la brecha a superar)**:

### **1. Diferencias de dinámica**

En la realidad hay fricción, holgura mecánica y deformación flexible; la simulación suele ser un cuerpo rígido perfecto o tiene un modelo de fricción simplificado. En el MJCF del reBot Arm, `damping="0.8"` y `armature="0.01"` son valores estimados; la fricción real de las articulaciones y la inercia del rotor del motor deben obtenerse mediante identificación de sistema. La función de comparación de par de `mujoco_torque_control.py` existe precisamente para cuantificar este error: calcula simultáneamente el par de compensación de gravedad de MuJoCo y el par de compensación de gravedad del SDK, y publica la diferencia:

```python
tau_mujoco = self._compute_mujoco_tau_g(q)  # computed by MuJoCo
tau_sdk = self._sdk_gravity(q=q)              # computed by SDK
diff = tau_mujoco - tau_sdk                    # difference
```

El resultado de la comparación se publica a través de tres tópicos:

|Tópico|Contenido|
|---|---|
|`/rebotarm/mujoco/tau_g`|Par de compensación de gravedad calculado por MuJoCo|
|`/rebotarm/mujoco/sdk_tau_g`|Par de compensación de gravedad calculado por el SDK|
|`/rebotarm/mujoco/tau_g_diff`|La diferencia entre ambos|

Si la diferencia es pequeña, el modelo de simulación coincide bien con la dinámica del robot real y el riesgo de transferencia sim-to-real es bajo. Si la diferencia es grande, es necesario calibrar los parámetros del modelo.

### **2. Diferencias de latencia**

Los comandos de control en simulación se ejecutan casi al instante con latencia cero; en la realidad se debe pasar por "retardo de comunicación -> aceleración del motor -> establecimiento del par". `real2sim_sync.py` maneja esto con el parámetro `stale_timeout`:

```python
self.declare_parameter("stale_timeout", 1.0)  # stop syncing after 1 second without data
```

Si el estado articular del brazo real no se actualiza durante más de 1 segundo, el modelo de simulación deja de seguirlo, evitando mostrar posturas obsoletas.

### **3. Diferencias de percepción**

La cámara simulada genera RGB perfecto sin desenfoque de movimiento; una cámara real tiene retardo de exposición, deriva de balance de blancos y desenfoque dinámico. El MJCF del reBot Arm define una cámara fija:

```xml
<camera name="overhead_rgb" mode="fixed" pos="0.42 0 0.86" fovy="50"/>
```

Esta cámara puede renderizar la escena en el visor de MuJoCo, pero existe una brecha entre ella y la calidad de imagen de una cámara real.

## 35.10 Gemelo digital: la forma definitiva de simulación

**Definición**: no es solo "simulación offline", sino establecer un canal de datos en tiempo real para que cada ángulo articular, par y temperatura del brazo real se mapee al modelo virtual en tiempo real, mientras que el modelo virtual también puede "ensayar" al revés los próximos segundos de movimiento (mantenimiento predictivo).

Los tres niveles de gemelos digitales:

|Nivel|Nombre|Capacidad|
|---|---|---|
|Nivel 1|Visualización|Panel 3D, solo para observar.|
|Nivel 2|Diagnóstico|Cuando ocurre un error real, el gemelo resalta la parte defectuosa y rastrea los registros.|
|Nivel 3|Predicción|Basándose en la carga actual, el cuerpo virtual calcula por adelantado que "el motor puede sobrecargarse en 2 segundos", activando la protección de reducción de velocidad en el mundo real.|

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-35/ch35-05.png" alt="reBot Arm digital twin architecture" />
</div>

**Suavizado y tiempo de espera**: los gemelos digitales necesitan manejar el jitter y la interrupción de los datos del robot real. El parámetro `smoothing_alpha` controla la suavidad del seguimiento (1.0 es seguimiento directo; menor que 1.0 es suavizado exponencial), y `stale_timeout` controla el comportamiento tras el tiempo de espera de los datos.

**Agarre virtual**: `real2sim_sync.py` también implementa el agarre virtual: cuando el efector final se cierra hasta cierto grado y el TCP está cerca de un objeto, el objeto se "adhiere" al TCP y se mueve junto con él; cuando el efector final se abre, el objeto se libera y cae libremente. Esto permite que el gemelo digital no solo refleje posturas, sino que también simule interacciones de agarre.

**Gemelo a nivel de par**: `mujoco_torque_control.py` eleva el gemelo digital del nivel de cinemática al nivel de dinámica. No solo sincroniza posiciones articulares, sino también pares: utiliza el lazo cerrado de par de MuJoCo para seguir la trayectoria articular del brazo real, mientras compara los pares de compensación de gravedad de MuJoCo y del SDK. Este es el paso clave para que el gemelo digital pase de "puede ver" a "calcula con precisión", y la base para avanzar hacia el Nivel 2 (diagnóstico) y el Nivel 3 (predicción).

---

</div>
