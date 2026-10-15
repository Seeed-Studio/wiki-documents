---
description: "Capítulo 39 del Curso de Introducción a la IA Física de Seeed — Sincronización Real-a-Sim: mapeo en tiempo real de los estados articulares del brazo real en MuJoCo, conversión de unidades entre DM y RS, frecuencias de comunicación, UDP frente a ROS2, actualización de estados y latencia, sincronización del estado de la pinza, el diseño de seguridad del programa de sincronización y dos flujos de trabajo de demostración."
title: Capítulo 39 - Sincronización de los Brazos Real y Simulado
hide_title: true
keywords:
  - reBot
  - Brazo Robótico
  - Real-to-Sim
  - Gemelo Digital
  - MuJoCo
  - ROS2
  - Latencia
  - Compensación de Gravedad
  - Curso
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/rebot_physical_ai_course_chapter_39
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/es/robotics/rebot_physical_ai_course_chapter_39/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 8 · Capítulo 39 · Práctica</span>
    <h2>39. Sincronización de los Brazos Real y Simulado</h2>
    <p>
      Capítulo 39 del Curso de Introducción a la IA Física de Seeed — Sincronización Real-a-Sim: mapeo en tiempo real de los estados articulares del brazo real en MuJoCo, conversión de unidades entre DM y RS, frecuencias de comunicación, UDP frente a ROS2, actualización de estados y latencia, sincronización del estado de la pinza, el diseño de seguridad del programa de sincronización y dos flujos de trabajo de demostración.
    </p>
    <div className="hero-actions">
      <a href="#overview">Resumen del capítulo</a>
      <a href="#units">Unidades y frecuencias</a>
      <a href="#transport">UDP, Socket o ROS2</a>
      <a href="#safety">Diseño de seguridad</a>
    </div>
  </div>
</section>

{/* TODO: this section of the original document ends with a screen recording (`重力补偿.mp4`). The file(s) are in 图片和附件/ but recordings are not published through the course CDN path - upload them and link them here once they are available. */}
Using the actual source code of the reBotArm-RS project as an example, this chapter explains how to synchronize the joint states of the real arm to the MuJoCo simulation environment in real time. All code references point to the real files in this repository and can be read side by side.

<a id="overview"></a>

## 39.1 Qué es Real-to-Sim

Real-to-Sim significa transmitir en tiempo real los ángulos articulares, velocidades, pares y otros estados del brazo físico real al entorno de simulación, de modo que el brazo virtual reproduzca de forma síncrona el movimiento del brazo real. Es la dirección opuesta a Sim-to-Real: Sim-to-Real entrena políticas en simulación y luego las despliega en el robot real, mientras que Real-to-Sim mapea el estado del robot real en el modelo virtual.

Usos típicos de Real-to-Sim:

1. Gemelo digital: observar en tiempo real la pose del brazo real en una página web sin mirar el dispositivo físico.
2. Grabación y reproducción: registrar el movimiento del brazo real como datos de trayectoria y reproducirlo repetidamente en simulación para depuración.
3. Monitorización de seguridad: el entorno de simulación puede superponer capacidades de las que carece el brazo real, como detección de colisiones y visualización del espacio de trabajo.
4. Reproducción por enseñanza: arrastrar manualmente el brazo real (modo de compensación de gravedad) mientras el modelo de simulación lo sigue de forma síncrona, usado para recopilar datos de enseñanza.

En este proyecto, la cadena central de Real-to-Sim es:

```text
Real RobStride motors → SocketCAN can0 → MotorBridge SDK state cache
→ HardwareManager._get_arm_state() → ROS JointState topic (60 Hz)
→ MuJoCo Sync node subscribes → MuJoCo qpos update → virtual arm moves
```

Archivos fuente clave:

- Lectura y almacenamiento en caché del estado del hardware: `hardware_manager.py`
- Publicación de estados articulares en ROS: `ros_publishers.py`
- Nodo de sincronización de MuJoCo: `mujoco_sync.py`
- Controlador simulado en el lado de la simulación: `fake_rs_driver.py`

<a id="units"></a>

## 39.2 Conversión de Unidades Articulares entre DM y RS

DM (motores Damiao) y RS (motores RobStride) usan radianes como unidad de ángulo, pero las unidades de la pinza difieren significativamente—

este es un eslabón propenso a errores en la sincronización.

### Articulaciones del brazo

Las seis articulaciones del brazo tanto de DM como de RS usan radianes, y el modelo de MuJoCo también usa radianes (`<compiler angle="radian"/>`),

por lo que las articulaciones del brazo no necesitan conversión de unidades.

### Diferencias de unidades de la pinza

La pinza implica cuatro magnitudes diferentes con unidades distintas:

|Magnitud|Rango|Unidad|Uso|
|---|---|---|---|
|Ángulo del motor de la pinza RS|0-5|rad|Comandos y retroalimentación del SDK del robot real|
|Anchura de apertura de la pinza en web/tarea|0-0.0715|m|Semántica del comando del usuario|
|Estado ROS de un solo dedo|0-0.045|m|Desplazamiento visual tras el mapeo por el publicador de estados|
|Desplazamiento de la pinza en MuJoCo|0-0.05|m|Recorrido de deslizamiento de la articulación 7 en simulación|

## 39.3 Frecuencias de Comunicación

Hay múltiples eslabones con diferentes frecuencias en la cadena Real-to-Sim; comprender sus relaciones es la base para solucionar problemas de latencia y tirones.

|Enlace|Frecuencia|Descripción|
|---|---|---|
|Bucle de control del robot real RS|125 Hz|Los comandos MIT que finalmente se envían a los motores|
|Sondeo de retroalimentación de hardware para sincronización|20 Hz|Consulta los estados de RobStride y actualiza la caché|
|Publicación de estados articulares en ROS|60 Hz|Publica el tópico JointState desde la caché|
|Sincronización de simulación MuJoCo|250 Hz|Frecuencia de paso de la simulación|
|Recepción en el navegador de estados de MuJoCo|Hasta 25 Hz|Suscripción de rosbridge limitada a 40 ms|
|Renderizado en el navegador|Alrededor de 60 Hz|requestAnimationFrame|

Puntos clave a entender:

- La página web envía comandos hasta a 60 Hz, lo que no significa que los motores solo se controlen a 60 Hz. Después de que el controlador RS recibe un nuevo objetivo, sigue generando y enviando comandos MIT con su propio bucle de 125 Hz.
- La retroalimentación de hardware actualiza la caché a 20 Hz, y ROS publica desde la caché a 60 Hz. El bucle MIT en tiempo real no realiza consultas síncronas de parámetros por CAN.
- MuJoCo avanza a 250 Hz, pero su entrada proviene del tópico ROS de 60 Hz, por lo que MuJoCo mantiene el último objetivo entre entradas adyacentes.

<a id="transport"></a>

## 39.4 Comunicación por UDP, Socket o ROS2

Este proyecto elige tópicos ROS2 como capa de comunicación para Real-to-Sim, en lugar de UDP o Sockets en bruto. Entender el motivo de esta elección ayuda a tomar decisiones de arquitectura correctas en otros escenarios.

### Por qué ROS2

1. Abstracción de tópicos: `sensor_msgs/JointState` es un tipo de mensaje estándar; los publicadores y suscriptores no necesitan acordar el formato de datos.
2. Políticas de QoS: `qos_profile_sensor_data` proporciona fiabilidad BEST_EFFORT y una pequeña profundidad, adecuado para datos de sensores de alta frecuencia.
3. Comunicación de muchos a muchos: un único tópico de estados articulares puede ser suscrito simultáneamente por la sincronización de MuJoCo, la página web, el registro y múltiples otros nodos.
4. Integración con el ecosistema: rosbridge puede enlazar directamente tópicos ROS con WebSocket, por lo que la página web no necesita una capa de comunicación adicional.

### Topología de tópicos

```text
/rebotarm/joint_states          ← published by the real-robot controller (60 Hz)
    ↓
MuJoCo Sync node subscribes
    ↓
/rebotarm/mujoco/joint_states   ← published by the MuJoCo sync node (250 Hz)
    ↓
rosbridge WebSocket → browser
```

La suscripción y publicación del nodo de sincronización de MuJoCo se definen en `mujoco_sync.py`:

```python
self.subscription = self.create_subscription(
    JointState, input_topic, self._joint_state_callback, qos_profile_sensor_data,
)
self.publisher = self.create_publisher(
    JointState, output_topic, qos_profile_sensor_data,
)
```

### Aislamiento por espacios de nombres

El robot real y la simulación usan diferentes espacios de nombres para evitar conflictos de tópicos:

|Entorno|Espacio de nombres por defecto|Script de lanzamiento|
|---|---|---|
|Robot real|`/rebotarm`|`scripts/start_rs_hardware.sh`|
|Controlador simulado + MuJoCo|`/rebotarm_rs`|`scripts/start_rs_sim.sh`|
|MuJoCo siguiendo al robot real|`/rebotarm` (seguimiento)|`scripts/start_rs_mujoco_follow.sh`|

En el escenario Real-to-Sim, el nodo de sincronización de MuJoCo se suscribe a `/rebotarm/joint_states` del robot real, y su propio

espacio de nombres también se establece en `rebotarm`, pero solo se suscribe y nunca envía comandos a los motores, por lo que no entra en conflicto con el controlador del robot real.

### Alcance de descubrimiento DDS

`rs_env.sh` restringe el alcance de descubrimiento DDS al host local, evitando que los nodos se pierdan entre sí tras el roaming por Wi-Fi:

```bash
export ROS_AUTOMATIC_DISCOVERY_RANGE="${REBOTARM_ROS_DISCOVERY_RANGE:-LOCALHOST}"
```

### Escenarios aplicables de UDP frente a ROS2

|Característica|Tópicos ROS2|UDP|
|---|---|---|
|Latencia|A nivel de milisegundos, con sobrecarga del middleware DDS|Más baja, a nivel de microsegundos|
|Fiabilidad|Configurable BEST_EFFORT / RELIABLE|Debes implementarla tú mismo|
|Múltiples suscriptores|Soportado de forma nativa|Debes implementar tú mismo la difusión|
|Herramientas de depuración|ros2 topic echo / hz|Debes implementarlas tú mismo|
|Escenarios aplicables|Colaboración multinodo, necesita el ecosistema|Latencia ultrabaja punto a punto|

Los requisitos de latencia de este proyecto (estados a 60 Hz, aceptable para el ojo humano) están muy lejos de necesitar UDP; los tópicos ROS2 son la opción más natural.

## 39.5 Actualización de Estados y Latencia

### Separar la caché asíncrona de la frecuencia de retroalimentación

`hardware_manager.py` está diseñado en torno a separar la frecuencia de sondeo de retroalimentación de hardware de la

frecuencia de publicación en ROS:

```python
# JointStatePublisher in ros_publishers.py
period = 1.0 / max(float(rate_hz), 1.0)           # publish at 60 Hz
self._feedback_poll_period = 1.0 / max(float(feedback_poll_rate_hz), 1.0)  # feedback at 20 Hz

def publish(self) -> None:
    now = time.monotonic()
    request_feedback = now - self._last_feedback_poll >= self._feedback_poll_period
    if request_feedback:
        self._last_feedback_poll = now
    pos, vel, effort = self._hardware.get_joint_state(request_feedback=request_feedback)
```
Among the 60 Hz publish frames, one third (20 Hz) triggers a synchronous CAN read, and the remaining frames return directly from the cache. This
both keeps the ROS topic refresh rate high and prevents the CAN bus from being occupied by feedback polling.

### Tiempo de expiración por obsolescencia en el lado de MuJoCo

El nodo de sincronización de MuJoCo tiene un parámetro `stale_timeout` (por defecto 1.0 segundo). Si no se recibe
ningún nuevo mensaje JointState dentro de este tiempo, la simulación deja de actualizarse:

```python
def _update(self) -> None:
    if self.last_input_time == 0.0:
        return
    if (self.stale_timeout > 0.0
        and time.monotonic() - self.last_input_time > self.stale_timeout):
        return
```

Esto evita que la simulación siga moviéndose con datos obsoletos después de que el robot real se desconecte.

### Estratificación de la latencia y solución de problemas

Cuando la sincronización se retrasa o no responde, mide capa por capa a lo largo de la cadena en lugar de ajustar un único parámetro:

1. Capa de retroalimentación del robot real: usa `ros2 topic hz /rebotarm/joint_states` para confirmar que se mantiene estable en 60 Hz.
2. Capa de sincronización de MuJoCo: confirma si `last_input_time` sigue actualizándose.
3. Capa de recepción web: la limitación de la suscripción de rosbridge puede mantener el lado del navegador por debajo de 25 Hz.
4. Capa de interpolación de visualización: el navegador interpola entre 32 y 120 ms entre mediciones adyacentes.

Para el flujo de datos detallado y los métodos de resolución de problemas, consulta `DATA_FLOW_RS_ZH.md`.

## 39.6 Sincronización del estado de la pinza

La sincronización de la pinza es más compleja que la de las articulaciones del brazo, porque implica conversión de unidades y el acoplamiento por restricciones de igualdad de MuJoCo.

### Modelo de pinza en MuJoCo

En `rs_arm.xml`, la pinza consta de tres articulaciones:

```xml
<joint name="joint7" type="slide" axis="0 1 0" range="0 0.05"/>
<joint name="joint_left" type="slide" .../>
<joint name="joint_right" type="slide" .../>

<equality>
  <joint joint1="joint7" joint2="joint_left" polycoef="0 1 0 0 0"/>
  <joint joint1="joint7" joint2="joint_right" polycoef="0 1 0 0 0"/>
</equality>
```

`joint7` es la articulación motriz, y `joint_left` y `joint_right` la siguen 1:1 mediante la restricción de igualdad. Al sincronizar, solo necesitas establecer el `qpos` de `joint7`; los dedos izquierdo y derecho lo siguen automáticamente.

### Código de sincronización

Cuando el nodo de sincronización de MuJoCo recibe un mensaje JointState, primero convierte las unidades de la pinza y luego establece el qpos de las tres articulaciones durante la actualización:

```python
def _joint_state_callback(self, msg: JointState) -> None:
    if "gripper_joint1" in values:
        self.target_gripper = self._visual_to_mujoco_gripper(
            values["gripper_joint1"], _RS_ROS_VISUAL_OPEN_M
        )

def _update_kinematic(self) -> None:
    self.data.qpos[self.gripper_qpos_addr] = next_gripper      # joint7
    self.data.qpos[self.left_qpos_addr] = next_gripper         # joint_left
    self.data.qpos[self.right_qpos_addr] = next_gripper        # joint_right
```

Nota: en modo cinemático, las tres articulaciones se escriben directamente con el mismo valor; en modo físico, solo se acciona `joint7_motor`, y los dedos izquierdo/derecho lo siguen automáticamente mediante la restricción de igualdad.

<a id="safety"></a>

## 39.7 Diseño de seguridad del programa de sincronización

### Puerta de confirmación de hardware

`start_rs_hardware.sh` requiere una confirmación explícita antes de iniciar el controlador del robot real, para evitar que una operación accidental mueva el brazo:

```bash
if [[ "${REBOTARM_RS_HARDWARE_CONFIRM:-}" != "I_UNDERSTAND_RS_WILL_MOVE" ]]; then
  echo "Hardware launch blocked." >&2
  exit 2
fi
```

Pero el script de seguimiento de MuJoCo `start_rs_mujoco_follow.sh` no necesita esta confirmación, porque solo se suscribe a los tópicos del robot real y no envía comandos a los motores ni abre SocketCAN:

### Bloqueo mutex de procesos

`start_rs_hardware.sh` usa flock como mutex de procesos al iniciar el hardware, evitando que dos controladores compitan por los motores al mismo tiempo:

```bash
exec 9>"${REBOTARM_HARDWARE_LOCK}"
if ! flock -n 9; then
  # identify and safely terminate the previous launch
  stop_processes "the previous RS hardware launch" "${REBOTARM_LOCK_HOLDERS[@]}"
fi
```

También puede reconocer controladores pausados con Ctrl+Z, enviar primero SIGCONT y luego SIGINT, y finalmente limpiar la memoria compartida sobrante de Fast DDS.

### Arbitraje mediante máquina de estados

`hardware_manager.py` usa una máquina de estados para rechazar comandos inseguros:

```python
def _begin_lowlevel_streaming(self, required_mode: str) -> None:
    if not self._enabled:
        raise RuntimeError("rejecting low-level command while arm is disabled")
    if self._gravity_comp_active or self.state_machine == "GRAVITY_COMP":
        raise RuntimeError("rejecting low-level command during gravity compensation")
    if self.state_machine == "SAFE_HOMING":
        raise RuntimeError("rejecting low-level command during safe home")
```

Los estados incluyen: `IDLE`, `LOWLEVEL_STREAMING`, `TRAJ_RUNNING`, `GRAVITY_COMP`, `SAFE_HOMING`. Cada estado acepta solo tipos de comando específicos y rechaza todo lo demás.

### Homing seguro

Antes de deshabilitar, si el brazo no está cerca de la pose cero (el ángulo absoluto de cualquier articulación supera los 2 grados, o la velocidad supera 0.15 rad/s), el controlador primero entra en el estado `SAFE_HOMING`: limpia los objetivos antiguos, cierra la pinza, realiza el homing, verifica la llegada y solo entonces deshabilita los motores. Para el flujo detallado, consulta la Sección 5 de `DATA_FLOW_RS_ZH.md`.

---

## 39.8 Demos de práctica

### Demo 1: Sincronizar el brazo real con MuJoCo

#### Cadena completa

```text
Real reBot Arm (RobStride motors)
  ↓  CAN bus
Python SDK (motorbridge + reBotArm_control_py)
  ↓  read encoder feedback
ROS controller (rebotarmcontroller)
  ↓  publish JointState topics
MuJoCo sync node (mujoco_sync.py)
  ↓  kinematics mode directly writes qpos
MuJoCo virtual arm
```

#### Lanzamiento del DEMO

Los 6 motores RobStride (articulaciones 1–6) y 1 motor de la pinza en el brazo informan continuamente sus estados de encoder (posición, velocidad, par, códigos de estado) por el bus SocketCAN `can0` a 1 Mbps. Esta capa es puramente hardware y no implica software.

Antes de lanzar, configura la interfaz CAN:

```text
sudo ip link set can0 down 2>/dev/null || true
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

Lanza el controlador del robot real:

```text
# Terminal 1: real-robot controller
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE ./rebotarm start rs

# Terminal 2: MuJoCo follow (same as Demo 1)
./scripts/start_rs_mujoco_follow.sh

# Terminal 3: web page
./rebotarm start web
```

### Demo 2: Sincronización de enseñanza manual con compensación de gravedad

#### Cadena completa

```text
Click "Start gravity comp" on the web page
  ↓  rosbridge → ROS Service
The real-robot controller enters gravity compensation mode (GRAVITY_COMP)
  ↓  Pinocchio computes gravity torques + low-gain MIT holding
The user manually drags the real arm
  ↓  motor encoders report new angles
The controller publishes JointState (60 Hz, same as normal motion)
  ↓
The MuJoCo follow node subscribes → the virtual arm reproduces in real time
Meanwhile the web 3D model also displays the feedback in real time
```

Diferencia clave con el Demo 1: el robot real ya no es accionado pasivamente por objetivos de posición; entra en **modo de compensación de gravedad**: el usuario arrastra el brazo real con la mano, la retroalimentación de los encoders sigue cambiando, JointState se publica como de costumbre, y tanto MuJoCo como la página web lo siguen. La parte de seguimiento de MuJoCo reutiliza completamente el script del Demo 1 y no necesita configuración adicional.

#### Paso 1: Operación en la web — iniciar la compensación de gravedad

###### Requisitos previos

Tres terminales, lanzando respectivamente el robot real, el seguimiento de MuJoCo y la página web:

```text
# Terminal 1: real-robot controller
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE ./rebotarm start rs

# Terminal 2: MuJoCo follow (same as Demo 1)
./scripts/start_rs_mujoco_follow.sh

# Terminal 3: web page
./rebotarm start web
```

Abre `http://localhost:3002` en el navegador y sigue estos pasos:

1. **Seleccionar el namespace**: elige "RS real robot (`/rebotarm`)" como objetivo de control;
2. **Conectar**: rellena el ROS WebSocket con `ws://localhost:9090` y haz clic en conectar;
3. **Abrir el bloqueo de control**: marca la casilla de bloqueo de control;
4. **Enable**: haz clic en el botón "Enable" y espera hasta que el estado muestre enabled;
5. **Start gravity comp**: haz clic en el botón "Start gravity comp".

#### Paso 2: El controlador del robot real entra en compensación de gravedad

Varios puntos clave de diseño:

- **Transición suave de ganancias**: usar smoothstep para hacer una transición gradual dentro de `transition_duration` (por defecto 0.5 s) desde las ganancias rígidas `[80,150,150,50,50,50]` / `[5,10,10,5,4,4]` a las ganancias flexibles `kp=2.0` / `kd=1.0` (config de RS). smoothstep tiene derivadas cero en ambos extremos, evitando una caída brusca de rigidez en el instante del cambio.
- **El objetivo sigue al ángulo medido**: `q_target` se interpola suavemente desde el ángulo de sujeción al inicio hasta el ángulo medido en tiempo real. Tras completarse la transición, `q_target = q`, es decir, el objetivo siempre es igual al ángulo actual—dondequiera que el usuario arrastre, el brazo sigue.
- **Feedforward de gravedad**: en cada ciclo, se vuelve a calcular `compute_generalized_gravity` con los ángulos en caché (sin lectura CAN) y se suma al par MIT. Los motores solo necesitan generar una pequeña fuerza por error de posición; el `tau` cancela principalmente la gravedad.
- **Caché en lugar de lecturas CAN en tiempo real**: `_read_gravity_comp_positions(request=False)` toma los ángulos de la caché actualizada a 20 Hz; el bucle de 125 Hz no hace consultas síncronas de parámetros por CAN, evitando bloqueos.

###### Reglas de seguridad durante la compensación de gravedad

Mientras la máquina de estados está en `GRAVITY_COMP`, el controlador rechaza todos los comandos de articulaciones desde la web, el arrastre TCP, la reproducción de trayectorias y los comandos de la pinza. Solo el botón "Stop gravity comp" y las solicitudes de deshabilitar pueden interrumpirlo.

---

#### Flujo de datos completo

```text
User clicks "Start gravity compensation" on the web page
  → rosbridge WebSocket
  → /rebotarm/gravity_compensation/start service
  → HardwareManager.start_gravity_compensation()
  → per-joint switch to MIT + gravity feedforward
  → 125 Hz compliant control loop
The user manually drags the real robot
  → encoder feedback → SocketCAN → state cache
  → /rebotarm/joint_states (60 Hz)
  → web mirror (Three.js model follows)
  → MuJoCo Sync (virtual arm follows)
```

###### Brazo virtual de MuJoCo + modelo 3D web + brazo real reproducidos en tiempo real

## 39.9 Resumen

El núcleo de la sincronización Real-to-Sim es pasar los estados de las articulaciones del robot real al entorno de simulación con una frecuencia y un formato adecuados. Los puntos prácticos de este proyecto

son:

1. Mapear las articulaciones por nombre, no por el orden del array.
2. La pinza implica cuatro unidades; cada paso de la cadena de conversión debe estar claro.
3. Separar la frecuencia de sondeo de feedback de hardware de la frecuencia de publicación ROS; no hacer lecturas CAN síncronas en el bucle en tiempo real.
4. Los tópicos de ROS2 superan a UDP en este escenario; las ventajas del ecosistema y de las herramientas de depuración superan la diferencia de latencia a nivel de microsegundos.
5. El diseño de seguridad atraviesa toda la cadena: puerta de confirmación de hardware, bloqueo mutex de procesos, arbitraje por máquina de estados, homing seguro.
6. La enseñanza con compensación de gravedad es un escenario Real-to-Sim de alto valor: baja rigidez + feedforward de gravedad + el objetivo siguiendo la retroalimentación

de actualizaciones son el diseño clave.

## 39.10 FAQ

---

{/* Nota: partes de esta etapa fueron redactadas con la ayuda de Doubao AI. */}

</div>
