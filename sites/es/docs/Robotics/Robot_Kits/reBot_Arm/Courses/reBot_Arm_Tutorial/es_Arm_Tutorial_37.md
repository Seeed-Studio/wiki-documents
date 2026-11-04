---
description: "Capítulo 37 del Curso de Introducción a la IA Física de Seeed: cinemática y control de trayectoria en MuJoCo: espacio articular frente a espacio cartesiano, lectura de la pose del efector final, cinemática directa e inversa con el algoritmo DLS, posición y orientación objetivo, interpolación articular, trayectorias lineales y de mínimo tirón, frecuencia de control, límites articulares y cuatro demostraciones ejecutables."
title: Capítulo 37 - Cinemática y control de trayectoria en MuJoCo
hide_title: true
keywords:
  - reBot
  - Brazo robótico
  - MuJoCo
  - Cinemática directa
  - Cinemática inversa
  - DLS
  - Trayectoria
  - Mínimo tirón
  - Curso
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/rebot_physical_ai_course_chapter_37
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/es/robotics/rebot_physical_ai_course_chapter_37/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 8 · Capítulo 37 · Teoría y práctica</span>
    <h2>37. Cinemática y control de trayectoria en MuJoCo</h2>
    <p>
      Capítulo 37 del Curso de Introducción a la IA Física de Seeed: cinemática y control de trayectoria en MuJoCo: espacio articular frente a espacio cartesiano, lectura de la pose del efector final, cinemática directa e inversa con el algoritmo DLS, posición y orientación objetivo, interpolación articular, trayectorias lineales y de mínimo tirón, frecuencia de control, límites articulares y cuatro demostraciones ejecutables.
    </p>
    <div className="hero-actions">
      <a href="#overview">Resumen del capítulo</a>
      <a href="#kinematics">Cinemática directa e inversa</a>
      <a href="#trajectory">Trayectorias</a>
      <a href="#demos">Las cuatro demostraciones</a>
    </div>
  </div>
</section>

{/* TODO: this section of the original document ends with a screen recording (`2026-08-19%2017-21-02.mkv`, `2026-08-19%2017-03-15.mkv`). The file(s) are in 图片和附件/ but recordings are not published through the course CDN path - upload them and link them here once they are available. */}
> En el capítulo 36 hicimos que el brazo se moviera en MuJoCo, pero eso era solo un control a nivel de “arrastrar deslizadores”. Este capítulo sube un nivel: de “ángulos articulares” a “poses espaciales”, de “saltos instantáneos” a “trayectorias suaves”. Objetivo didáctico: permitir que los usuarios practiquen cinemática directa, cinemática inversa y control de trayectoria en un entorno de simulación seguro, y observen los efectos de distintos métodos de control.
>
>

<a id="overview"></a>

## 37.1 Espacio articular y espacio cartesiano

El control de robots tiene dos sistemas de coordenadas principales; entender su diferencia es el punto de partida de toda planificación de movimiento.

### Espacio articular

Indicas directamente a cada articulación “gira cuántos grados”. El espacio articular de un brazo de 6 GDL es de 6 dimensiones, y cada dimensión corresponde al ángulo de un motor.

```text
Joint space goal = [j1, j2, j3, j4, j5, j6]  # unit: radians
```

Ventajas: directo, inequívoco, sin problema de inalcanzabilidad (mientras esté dentro de los límites).

Desventajas: no sabes adónde fue el efector final: necesitas cinemática directa para calcularlo.

### Espacio cartesiano

Indicas al efector final “ve a qué punto del espacio”. Usas x, y, z para describir la posición,

y una matriz de rotación o un cuaternión para describir la orientación.

```text
Cartesian goal = [x, y, z, qx, qy, qz, qw]  # position + orientation
```

Ventajas: intuitivo: “mueve el efector final 30 cm por encima de la mesa”.

Desventajas: necesitas cinemática inversa para traducir la pose a ángulos articulares; puede no tener solución o tener múltiples soluciones.

|Dimensión de comparación|Espacio articular|Espacio cartesiano|
|---|---|---|
|Magnitud descrita|6 ángulos articulares|3 de posición + 3 de orientación|
|¿Requiere resolución?|No, se envía directamente|Requiere resolver la CI|
|Interfaz típica|`/rebotarm/follow_joint_trajectory`|`/rebotarm/move_to_pose`|
|Riesgo de singularidad|Ninguno|Sí (la matriz Jacobiana se degenera en ciertas poses)|
|Escenarios aplicables|Referencia de articulaciones, poses predefinidas|Agarre, evitación de obstáculos, trayectorias espaciales|

> En una frase: el espacio articular es el “idioma nativo del brazo”, el espacio cartesiano es “el idioma de los humanos”, y la cinemática es el intérprete entre ambos.
>
>

## 37.2 Lectura de la pose del efector final

En MuJoCo, la pose del efector final se obtiene mediante objetos de tipo site. El reBot Arm define

un site llamado `tcp` en el MJCF, fijado al extremo de la garra:

```xml
<site name="tcp" pos="-0.105 0 0" size="0.008" rgba="1 0.34 0.16 1"/>
```

`tcp` significa Tool Center Point (punto central de la herramienta), es decir, el punto donde la garra sujeta los objetos. `pos="-0.105 0 0"` significa que está 10,5 cm hacia delante a lo largo del eje X; `size="0.008"` es el radio de visualización. Después de cada `mj_forward` o `mj_step`, MuJoCo escribe las coordenadas en el mundo de todos los sites en `data.site_xpos` y `data.site_xmat`:

```python
import mujoco
import numpy as np

model = mujoco.MjModel.from_xml_path("rebotarm_b601_stl.xml")
data = mujoco.MjData(model)

# write joint angles
data.qpos[:] = [0, -0.5, -1.0, 0, 0, 0, 0]
mujoco.mj_forward(model, data)

# read the TCP pose
tcp_id = mujoco.mj_name2id(model, mujoco.mjtObj.mjOBJ_SITE, "tcp")
position = data.site_xpos[tcp_id]          # [x, y, z]
rotation = data.site_xmat[tcp_id].reshape(3, 3)  # 3x3 rotation matrix

print(f"TCP position: {position}")
print(f"TCP rotation:\n{rotation}")
```

`site_xpos` es un array de longitud 3 (xyz en el marco del mundo), y `site_xmat` es un array de longitud 9 (una matriz de rotación 3x3 aplanada) que necesita ser remodelada.

<a id="kinematics"></a>

## 37.3 Cálculo de la cinemática directa

La cinemática directa (FK) significa “dado el conjunto de ángulos articulares, encontrar la pose del efector final”. En el código de simulación del reBot Arm, la implementación de FK es muy directa: no llama a ninguna librería externa de CI y se basa por completo en el motor de cinemática propio de MuJoCo. El método central es

`_fk_pose` en `sim_task_server.py`. Véase también https://docs.mujoco.cn/en/stable/APIreference/APIfunctions.html

Puntos clave:

|Paso|Código|Función|
|---|---|---|
|Reiniciar estado|`qpos[:] = base_qpos`|Borrar el estado articular previo para evitar residuos|
|Escribir ángulos articulares|`qpos[qpos_addr] = ...`|Escribir cada articulación según las direcciones internas de MuJoCo|
|Cálculo directo|`mj_forward`|Actualizar la cinemática sin integrar la física|
|Leer pose|`site_xpos / site_xmat`|Obtener la pose del efector final desde el site TCP|

Ten en cuenta que aquí se usa `mj_forward`, no `mj_step`. `mj_forward` solo realiza el cálculo de cinemática directa (actualiza coordenadas de sites, jacobianos, etc.), sin integración física: más rápido y limpio para cálculos puramente cinemáticos.

El método `ros_to_mujoco_position` gestiona el mapeo de ángulos articulares de ROS a ángulos articulares de MuJoCo (incluyendo escala y desplazamiento), garantizando que ambos sistemas de coordenadas sean coherentes.

## 37.4 Resolución de la cinemática inversa

### Cinemática inversa (IK)

La CI significa “dada la pose del efector final, encontrar los ángulos articulares”, el núcleo del control en espacio cartesiano. El reBot Arm no usa CI analítica (soluciones en forma cerrada), sino un método numérico: el algoritmo de mínimos cuadrados amortiguados (DLS) basado en el Jacobiano.

**¿Por qué no usar la solución analítica?**

La CI analítica para un brazo de 6 GDL requiere condiciones geométricas específicas (por ejemplo, muñeca esférica), y la deducción es compleja y propensa a errores. Los métodos numéricos no garantizan optimalidad global, pero son generales, concisos y aplicables a cualquier configuración.

### Principio del algoritmo DLS

La ecuación central de la CI estándar es `J * dq = dx`, donde J es la matriz Jacobiana, dx es el error de pose del efector final y dq es la corrección de ángulo articular. Invertir directamente `dq = J^(-1) * dx` explota cerca de singularidades (J no es invertible).

DLS añade un término de amortiguamiento:

```text
dq = J^T * (J * J^T + lambda^2 * I)^(-1) * dx
```

donde lambda es el coeficiente de amortiguamiento. Un lambda mayor es más estable pero converge más despacio; un lambda menor es más preciso pero propenso a la oscilación. Los parámetros de CI del reBot Arm (definidos en `declare_parameter` de `sim_task_server.py`):

|Parámetro|Valor por defecto|Significado|
|---|---|---|
|`ik_iterations`|360|Número máximo de iteraciones|
|`ik_tolerance`|0.004|Umbral de convergencia de posición (4 mm)|
|`ik_damping`|0.035|Coeficiente de amortiguamiento lambda de DLS|
|`ik_orientation_weight`|0.75|Peso del error de orientación|
|`ik_orientation_tolerance`|0.07|Umbral de convergencia de orientación|

## 37.5 Posición objetivo y orientación objetivo

Los objetivos en espacio cartesiano vienen en dos granularidades:

|Tipo de objetivo|Información incluida|Comportamiento de la CI|
|---|---|---|
|Solo posición|[x, y, z]|Solo optimiza las coordenadas del efector final; la orientación es libre|
|Posición + orientación|[x, y, z, qx, qy, qz, qw]|Optimiza posición y orientación simultáneamente|

En la interfaz de ROS2, los objetivos se pasan mediante el mensaje `Pose`. El método `_pose_to_matrix_if_requested` decide: si el cuaternión está cerca de `[1, 0, 0, 0]` (cuaternión identidad, es decir, sin rotación), devuelve `None` y la CI solo resuelve la posición; en caso contrario lo convierte en una matriz de rotación y la pasa al solucionador de CI.

En la práctica, el modo solo posición es más común: las tareas de agarre normalmente no se preocupan por la orientación del efector final, siempre que se alcance el punto objetivo. Los escenarios que requieren orientación precisa (como montaje, enchufar/desenchufar) activan la restricción de orientación.

## 37.6 Interpolación articular

Con los ángulos articulares iniciales y finales, ¿cómo haces que el brazo vaya “suavemente” de A a B?

El método más sencillo es la interpolación lineal:

```text
q(t) = q0 + (q1 - q0) * ratio       # ratio is in [0, 1]
```

Pero la interpolación lineal tiene un salto de velocidad al inicio y al final (de 0 instantáneamente a la velocidad máxima), lo que hace que el brazo vibre.

El reBot Arm usa interpolación smoothstep (Hermite cúbica) en el método `_execute_joint_path`:

```python
ratio = self._clamp((now - t0) / (t1 - t0), 0.0, 1.0)
eased = ratio * ratio * (3.0 - 2.0 * ratio)
q = q0 + (q1 - q0) * eased
```

Esta función tiene derivada cero en `ratio=0` y `ratio=1`, lo que significa que las velocidades de inicio y fin

son cero: el brazo arranca suavemente y se detiene suavemente.

|Método de interpolación|Fórmula|Velocidad de inicio/parada|Aceleración continua|Escenarios aplicables|
|---|---|---|---|---|
|Lineal|`ratio`|Salto|No|Pruebas sencillas|
|Smoothstep|`ratio^2 * (3 - 2*ratio)`|Cero|No|Movimiento suave general|
|Mínimo tirón|`10*r^3 - 15*r^4 + 6*r^5`|Cero|Sí|Trayectorias de alta precisión|

## 37.7 Trayectorias lineales

Una trayectoria lineal significa que el efector final se mueve en línea recta en el espacio cartesiano. Hay dos enfoques de implementación:

### Método 1: interpolación en espacio articular (no es una recta cartesiana)

Interpolar directamente en el espacio articular: el efector final en realidad recorre un arco, no una línea recta. El método `_execute_joint_path` del reBot Arm es este enfoque. Sencillo, rápido, nunca entra en singularidades, pero la trayectoria del efector final es impredecible.

### Método 2: línea recta en espacio cartesiano

Interpolar linealmente la pose del efector final en el espacio cartesiano, convirtiéndola de nuevo a ángulos articulares con CI en cada paso:

```python
for t in np.linspace(0, 1, n_steps):
    target_pos = start_pos + (end_pos - start_pos) * t
    q = solve_ik(target_pos, current_q)
    publish(q)
```

Este enfoque hace que el efector final recorra una línea recta verdadera, pero cada paso necesita una resolución de IK (computacionalmente pesada), y puede encontrar singularidades que hagan que IK no converja.

|Dimensión de comparación|Interpolación en espacio articular|Línea recta en espacio cartesiano|
|---|---|---|
|Trayectoria del efector final|Arco|Línea recta|
|Carga de cómputo|Baja (interpolación directa)|Alta (IK en cada paso)|
|Riesgo de singularidad|Ninguno|Sí|
|Valor predeterminado de reBot Arm|Sí|No|

<a id="trajectory"></a>

## 37.8 Trayectorias de Jerk Mínimo

Jerk Mínimo es un método óptimo de planificación de trayectorias que minimiza la integral del "jerk" (la derivada de la aceleración). Su fórmula es:

```text
s(t) = 10*t^3 - 15*t^4 + 6*t^5       # t is in [0, 1]
```

Características:

- La posición, velocidad y aceleración son todas cero al inicio y al final
- La aceleración es continua, sin saltos
- Movimiento extremadamente suave, adecuado para tareas de alta precisión

Actualmente, el reBot Arm usa smoothstep (Hermite cúbico), que logra un buen equilibrio entre suavidad y coste computacional. Si se necesita mayor precisión, se puede reemplazar con Jerk Mínimo:

```python
def minimum_jerk(ratio):
    return 10 * ratio**3 - 15 * ratio**4 + 6 * ratio**5

# replace eased in _execute_joint_path
eased = minimum_jerk(ratio)
```

## 37.9 Frecuencia de Control de Trayectoria

El parámetro central de la ejecución de trayectorias es la frecuencia de control (`command_hz`), es decir, cuántos comandos articulares se envían a la simulación por segundo.

La configuración predeterminada del reBot Arm:

|Parámetro|Valor predeterminado|Significado|
|---|---|---|
|`command_hz`|60 Hz|Frecuencia de envío de comandos de trayectoria|
|`max_joint_speed`|1.4 rad/s|Límite máximo de velocidad articular|
|`record_hz`|30 Hz|Frecuencia de muestreo de grabación|

El bucle central de `_execute_joint_path`:

```python
period = 1.0 / self.command_hz  # 1/60 = 0.0167s

while True:
    now = time.monotonic() - started
    ratio = clamp((now - t0) / (t1 - t0), 0.0, 1.0)
    eased = ratio * ratio * (3.0 - 2.0 * ratio)
    q = q0 + (q1 - q0) * eased
    self._publish_joint_targets(q)
    if ratio >= 1.0:
        break
    time.sleep(period)
```

60 Hz significa que se envía un comando cada 16,7 ms. Para un brazo de 6 GDL, esta frecuencia es suficientemente suave—el ojo humano no puede percibir saltos por encima de 30 Hz. Pero atención: `command_hz` es la frecuencia de la capa de trayectoria, no la de la capa de física. La simulación física

(`mujoco_physics_grasp.py`) se ejecuta a `control_hz=500`, es decir, control de par PD cada 2 ms. Estos son bucles de control en diferentes capas:

|Capa de control|Frecuencia|Módulo responsable|Tipo de comando|
|---|---|---|---|
|Bucle de control de física|500 Hz|`mujoco_physics_grasp`|Par PD|
|Bucle de control de trayectoria|60 Hz|`sim_task_server`|Objetivos de posición articular|
|Bucle de publicación de estado|30 Hz|`real2sim_sync`|JointState|
|Bucle de muestreo de grabación|30 Hz|`sim_task_server`|Registros CSV|

## 37.10 Límites de Rango y Velocidad Articular

### Rango articular

Los límites de las 6 articulaciones y la pinza del reBot Arm están definidos en el MJCF. Durante la resolución de IK, cada paso actualiza y restringe los ángulos articulares dentro del rango mediante el método `clamp_ros`:

```python
def ros_to_mujoco_position(self, value: float) -> float:
    mapped = float(value) * self.scale + self.offset
    if self.lower is not None:
        mapped = max(mapped, self.lower)
    if self.upper is not None:
        mapped = min(mapped, self.upper)
    return mapped
```

### Límites de velocidad

Durante la ejecución de la trayectoria, cada comando articular lleva un límite de velocidad `vlim`:

```python
msg = JointMotorCmd()
msg.use_pos = True
msg.use_vlim = True
msg.vlim = float(self.max_joint_speed)  # 1.4 rad/s
```

`max_joint_speed=1.4` rad/s son aproximadamente 80 deg/s. Este valor limita el límite superior de la velocidad angular articular, evitando que el brazo se mueva a velocidades peligrosas.

La duración de la trayectoria está determinada por las diferencias articulares entre el inicio y el final y el límite de velocidad:

```text
Minimum time = max(|q1[i] - q0[i]| / max_joint_speed)   for each joint i
```

Por ejemplo, la articulación2 pasando de 0 a -1,57 rad: tiempo mínimo = 1,57 / 1,4 = 1,12 segundos.

Si la `duration` especificada es menor que el tiempo mínimo, el brazo se mueve a máxima velocidad (`max_joint_speed`) y puede terminar antes de alcanzar el objetivo—por lo tanto, deja suficiente margen en `duration`.

<a id="demos"></a>

## 37.11 Demo 1: Cinemática Directa

Objetivo: introducir un conjunto de ángulos articulares, calcular y mostrar la pose del efector final (TCP). Este Demo no necesita iniciar ROS2—

llamadas puras de MuJoCo en Python, verificando si el mapeo de ángulo articular a posición final es correcto.

```python
DM:
cd ~/ReBot_Arm_DigitalTwin_DM/reBotArmController_ROS2-main
source scripts/source_rebotarm_env.sh
python3 demo1_fk.py
RS:
cd ~/ReBot_Arm_DigitalTwin_RS
source scripts/rs_env.sh
python3 demo1_fk.py
```

La salida esperada es similar a:

```text
Model: DM (rebotarm_b601_stl.xml)

--- Pose 1 ---
Joint angles: [0, 0, 0, 0, 0, 0]
TCP position: x=0.1553, y=0.0000, z=0.1917
TCP rotation matrix:
  [1.0000 0.0000 -0.0000]
  [0.0000 1.0000 0.0001]
  [0.0000 -0.0001 1.0000]

--- Pose 2 ---
Joint angles: [0, -0.5, -1.0, 0, 0, 0]
TCP position: x=0.1141, y=0.0000, z=0.5034
TCP rotation matrix:
  [0.8776 0.0000 -0.4794]
  [0.0000 1.0000 0.0001]
  [0.4794 -0.0001 0.8776]

--- Pose 3 ---
Joint angles: [0, -0.8, -1.5, 0.5, 0, 0]
TCP position: x=0.1409, y=0.0000, z=0.5559
TCP rotation matrix:
  [0.9801 0.0000 -0.1987]
  [0.0000 1.0000 0.0001]
  [0.1987 -0.0001 0.9801]

```

El Demo 1 es cálculo puro: cargar el modelo MJCF -> establecer ángulos articulares -> calcular la cinemática directa con `mj_forward` -> imprimir la pose del TCP. Todo el proceso ocurre en memoria: sin visor, sin tópicos ROS2, sin driver falso, por lo que el brazo no se mueve. Llamadas puras de MuJoCo en Python. Verifica si el mapeo de ángulo articular a pose final es correcto—si mides manualmente la posición final del brazo en la pose cero, debería coincidir con el resultado de la CD.

## 37.12 Demo 2: Cinemática Inversa

**Objetivo**: dada una posición objetivo, resolver los ángulos articulares y mover el brazo allí. Usa la interfaz de Servicio de ROS2 `/rebotarm/move_to_pose_ik`:

Antes de ejecutar, necesitas iniciar la pila de simulación:

```bash
RS:
cd ~/ReBot_Arm_DigitalTwin_RS
./scripts/start_rs_sim.sh
DM:
cd ~/ReBot_Arm_DigitalTwin_DM
./rebotarm start sim

# Terminal 2: run the IK client
python3 demo2_ik.py
```

Salida esperada:

```text
Namespace: /rebotarm
Success: True
Message: IK success, error=9.6 mm, orient=0.000
Joint solution: [-0.3425787656649655, -1.5209255751808715, -0.707446304651899, -0.39301552902275094, 0.08498990704705993, -4.1821209004842323e-07]
```

Nota: move_to_pose_ik solo devuelve la solución articular; no ejecuta el movimiento. Para ver el brazo moverse realmente allí, usa la interfaz de Acción en el Demo 3.

error indica la distancia (en mm) entre la posición final resuelta por IK y el objetivo. El script de lanzamiento establece ik_tolerance en 0,020 (20 mm); un error dentro de 20 mm se considera éxito.

## 37.13 Demo 3: Control de Trayectoria

**Objetivo**: mover el efector final al punto objetivo del objeto y observar el efecto de transición suave.

Usa la interfaz de Acción `/rebotarm/move_to_pose` para ejecutar trayectorias de múltiples segmentos:

1. Asegúrate de que la pila de simulación esté en ejecución
2. Ejecuta el script

```bash
./rebotarm start web
```

3. Observa el movimiento del brazo en el visor de MuJoCo

**Experimento de comparación**: para comparar la diferencia entre interpolación lineal y smoothstep, puedes modificar

la función de interpolación de `_execute_joint_path` en `sim_task_server.py`:

```python
# Linear interpolation (will shake)
eased = ratio

# Smoothstep (current default)
eased = ratio * ratio * (3.0 - 2.0 * ratio)

# Minimum Jerk (smoothest)
eased = 10 * ratio**3 - 15 * ratio**4 + 6 * ratio**5
```

Ejecuta cada una y observa el movimiento del efector final: la interpolación lineal tiene sacudidas evidentes en los cambios de puntos de paso, smoothstep inicia y se detiene suavemente, y Jerk Mínimo es sedosamente suave en todo el recorrido.

## 37.14 Demo 4: Una Acción de Agarre Sencilla

**Objetivo**: colocar un bloque en la escena y completar el flujo de pick-and-place.

La escena ya tiene tres objetos (definidos en el MJCF `rebotarm_b601_stl.xml`):

|Objeto|Posición [x, y, z]|Color|
|---|---|---|
|red_cube|[0.34, -0.13, 0.061]|Cubo rojo|
|blue_block|[0.50, 0.11, 0.055]|Bloque azul|
|yellow_cylinder|[0.44, -0.02, 0.065]|Cilindro amarillo|

Flujo de agarre:

```text
Move above the object -> descend -> close the gripper -> lift -> move to the target position -> open the gripper
```

Ejecutar:

```bash
# Terminal 1: start the physics simulation (physics grasp mode is needed to grasp objects)
./scripts/start_rebot_mujoco_all.sh

# Terminal 2: run the grasping demo on the web page
./rebotarm start web
```

## 37.15 Preguntas Frecuentes

**P1: La resolución de IK falla (error > 20 mm). ¿Qué debo hacer?**

Causas comunes:

1. La posición objetivo está fuera del espacio de trabajo—el alcance del reBot Arm es de unos 50 cm; los objetivos demasiado lejanos no tienen solución
2. El objetivo está cerca de una singularidad—por ejemplo, cuando el efector final está completamente extendido, la matriz Jacobiana se degenera
3. Los límites articulares impiden la convergencia—algunas poses requieren que las articulaciones excedan los límites para alcanzarse

Soluciones: ajusta la posición objetivo, o incrementa `ik_tolerance` e `ik_damping`:

```bash
ros2 launch rebotarm_mujoco mujoco_sim_task_server.launch.py \
  ik_tolerance:=0.010 ik_damping:=0.05
```

**P2: El brazo tiembla durante la ejecución de la trayectoria. ¿Qué debo hacer?**

Comprueba si `command_hz` es demasiado bajo (por debajo de 30 Hz causa sacudidas visibles). Los 60 Hz predeterminados suelen ser suficientes.

Si usas el modo de física, comprueba si los parámetros PD son apropiados—un `arm_kp` demasiado grande causa oscilación.

**P3: El objeto es golpeado y se aleja durante el agarre. ¿Qué debo hacer?**

En modo de física, el par PD es demasiado grande. Reduce `arm_torque_limit`:

```bash
ros2 launch rebotarm_mujoco mujoco_physics_grasp.launch.py \
  arm_torque_limit:=10.0
```

También puedes reducir la velocidad de descenso (aumentar el parámetro `duration`) para que la pinza se acerque al objeto lentamente.

**P4: ¿Cuál es la diferencia entre `move_to_pose` y `move_to_pose_ik`?**

|Interfaz|Tipo|Comportamiento|
|---|---|---|
|`/rebotarm/move_to_pose_ik`|Service|Solo resuelve la cinemática inversa y devuelve los ángulos articulares; no ejecuta el movimiento|
|`/rebotarm/move_to_pose`|Action|Resuelve la cinemática inversa y ejecuta una trayectoria suave; admite retroalimentación y cancelación|

**P5: ¿Cómo cambiar entre modo cinemático y modo físico?**

```bash
# Kinematics mode (directly writes qpos, no physical interaction)
MUJOCO_GRASP_MODE=kinematic ./scripts/start_rebot_mujoco_all.sh

# Physics mode (PD torque control, can grasp objects)
MUJOCO_GRASP_MODE=physics ./scripts/start_rebot_mujoco_all.sh
```

El modo cinemático es adecuado para depurar cinemática y planificación de trayectorias; el modo físico es adecuado para probar agarres e interacción.

**P6: ¿Cuál es la diferencia entre `mj_forward` y `mj_step`?**

`mj_forward` solo realiza el cálculo directo (cinemática, jacobiano, coordenadas de sitios), sin integración física.

`mj_step` también realiza la integración física (fuerzas, contactos, colisiones) además de `mj_forward`.

Usa `mj_forward` para cálculo puro de IK/FK, y `mj_step` para simulación física.

- El espacio articular es el lenguaje nativo del brazo, el espacio cartesiano es el lenguaje humano, y la cinemática es el intérprete.
- `mj_forward` calcula la cinemática, `mj_step` calcula la dinámica: el primero solo mira la geometría, el segundo realmente calcula la física.
- Añadir amortiguamiento en DLS no es un compromiso sino sabiduría de ingeniería: es mejor converger un poco más lento que explotar en una singularidad.
- Smoothstep hace que el brazo "empiece suavemente y llegue con estabilidad"; Minimum Jerk hace que sea "suavísimo de principio a fin".
- 60 Hz envía comandos, 500 Hz calcula pares, 30 Hz publica estados: tres bucles de control cada uno con su propia función.

---

</div>
