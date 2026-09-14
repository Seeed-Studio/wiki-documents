---
description: Esta guía para desarrolladores presenta la consola web de reBot Arm B601-RS, ROS 2, RobStride/SocketCAN, simulación MuJoCo, agarre visual e instalación, ejecución y flujo de trabajo de desarrollo secundario de LLM/MCP Agent.
title: Guía para desarrolladores del simulador web de reBot Arm B601-RS y ROS 2/MuJoCo
keywords:
  - reBot Arm
  - B601-RS
  - Web Simulator
  - Three.js
  - ROS 2
  - RobStride
  - SocketCAN
  - MuJoCo
  - LLM
  - MCP
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_web_simulator_en.png
slug: /rebot_arm_b601_rs_web_simulator_developer_guide
last_update:
  date: 2026-08-24
  author: Yang-Ci
translation:
  skip: [zh-CN]
createdAt: '2026-08-13'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_web_simulator_developer_guide/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# Guía para desarrolladores del simulador web de reBot Arm B601-RS y ROS 2/MuJoCo

<RebotRsDocNav />

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License: Apache 2.0" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Jazzy-blue.svg" alt="ROS2 Jazzy" />
    <img src="https://img.shields.io/badge/Node.js-18%2B-green.svg" alt="Node.js 18+" />
    <img src="https://img.shields.io/badge/Three.js-r128-orange.svg" alt="Three.js r128" />
    <img src="https://img.shields.io/badge/Version-v1.0.0-brightgreen.svg" alt="Version v1.0.0" />
    <img src="https://img.shields.io/badge/Platform-Cross%20Platform-lightgrey.svg" alt="Platform" />
</p>

<p align="center">
  <strong>Visualización con Three.js · ROS 2 · SocketCAN · Simulación MuJoCo · Control LLM/MCP</strong>
</p>

El proyecto reBot Arm B601-RS integra una consola web basada en Three.js, un driver ROS 2 para el robot real, una escena dinámica MuJoCo específica para RS, detección visual, trayectoria y cinemática inversa, y un agente de agarre LLM/MCP opcional. Esta guía explica cómo instalar, iniciar y desarrollar sobre todo el sistema.

> **Nota importante de seguridad**
>
> Antes de poner en marcha el robot real, fija el brazo, despeja el área de trabajo, confirma que el paro de emergencia físico funciona y valida primero las acciones en simulación. Para la primera prueba con el robot real, mantén el límite de velocidad en `0.2-0.4 rad/s` y mueve una articulación cada vez.

## Funciones del proyecto

1. **Modelo de brazo específico para RS**

   La consola web y ROS 2 usan `ReBot_Arm_RS.urdf` y sus mallas STL correspondientes. El servidor web lee primero el modelo desde el espacio de trabajo `rebotarm_ros2_RS` y mantiene una copia local de respaldo.

2. **Enlace con robot real mediante RobStride + SocketCAN**

   El robot real utiliza la interfaz Linux SocketCAN `can0` a `1 Mbps` por defecto. El controlador se comunica con los motores RobStride a través de `reBotArm_control_py`.

3. **Control en línea MIT a 125 Hz**

   La consola web actualiza los objetivos hasta 60 Hz, mientras que el controlador del robot real genera una referencia en línea limitada por velocidad, aceleración y jerk a 125 Hz y envía comandos MIT `q/dq/kp/kd/tau`. Las actualizaciones de objetivos desde la web no bloquean el bucle de control de los motores.

4. **Aislamiento de espacios de nombres para robot real y simulación**

   El robot real usa `/rebotarm` por defecto y la simulación usa `/rebotarm_rs`. La misma consola web puede cambiar los objetivos de control, y puedes ejecutar el robot real y el Fake Driver al mismo tiempo para comparar interfaces.

5. **Escena MuJoCo específica para RS**

   MuJoCo admite modos `physics` y `kinematic`. El modo `physics` por defecto incluye gravedad, contacto, objetos sobre la mesa, una cámara cenital, detección de color y validación física del agarre.

6. **Animación web basada en retroalimentación**

   En modo de robot real, el modelo sólido muestra la retroalimentación real y el modelo translúcido muestra el objetivo de control. La consola web aplica filtrado paso bajo adaptativo, una zona muerta de retroalimentación e interpolación de visualización a las mediciones de rosbridge para que la animación local no se confunda con la pose real del brazo.

7. **Máquina de estados de seguridad**

   El sistema arbitra trayectorias, compensación de gravedad, homing seguro y comandos continuos desde la web. La desactivación desde una pose distinta de cero ejecuta primero un homing seguro y lo verifica; si la verificación falla, el brazo permanece habilitado para evitar una caída repentina.

8. **Agarre visual y LLM/MCP Agent**

   La escena de simulación proporciona objetos rojos, azules y amarillos con detección cenital, IK, agarre, validación de elevación y soporte para colocar. Las herramientas MCP pueden usarse de forma independiente o conectarse a un modelo de lenguaje grande para invocar operaciones estructuradas del robot mediante lenguaje natural.

## Notas sobre cableado y red

### Cableado CAN del robot real RS

1. Asegura el brazo y despeja su rango de movimiento.
2. Conecta el bus CAN de los motores RobStride, la fuente de alimentación y el adaptador USB-CAN.
3. Verifica que CAN_H, CAN_L y GND estén cableados correctamente y configura la resistencia de terminación según los requisitos de hardware.
4. Después de encender, confirma que el adaptador CAN de destino aparece en Ubuntu.

Configura `can0`:

```bash
sudo ip link set can0 down 2>/dev/null || true
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

Observa las tramas del bus en modo solo lectura:

```bash
candump can0
```

Las tramas CAN continuas significan que la interfaz está recibiendo datos. Pulsa `Ctrl+C` para salir de `candump`.

> Si la interfaz entra en `BUS-OFF`, primero revisa la alimentación, la puesta a tierra, la velocidad en baudios, las resistencias de terminación, los ID de los motores y el cableado CAN. No enmascares fallos de hardware reiniciando el controlador repetidamente.

### Red para Web y ROS 2

La consola web se comunica con ROS 2 a través del WebSocket de rosbridge, usando el puerto `9090` por defecto:

```text
Web console: http://<Ubuntu-IP>:3002
rosbridge:   ws://<Ubuntu-IP>:9090
MCP Server:  http://<Ubuntu-IP>:8081/mcp
Text Agent:  http://<Ubuntu-IP>:8082
```

Puedes usar `localhost` cuando la consola web y ROS 2 se ejecutan en la misma máquina. Al acceder desde otro ordenador en la LAN, no introduzcas el `localhost` del propio ordenador con el navegador; usa en su lugar la IP del host Ubuntu que ejecuta los servicios ROS 2.

El script de arranque del proyecto establece por defecto el rango de descubrimiento de ROS 2 en `LOCALHOST`, de modo que el roaming por Wi-Fi o los cambios de IP no dividan los nodos de la misma máquina en diferentes redes DDS. Esto no afecta al acceso a los puertos HTTP/WebSocket desde otros dispositivos. Para permitir que otro ordenador se una directamente al grafo ROS, establece el mismo valor en las terminales correspondientes:

```bash
export REBOTARM_ROS_DISCOVERY_RANGE=SUBNET
```

## Requisitos del entorno

| Elemento | Requisito recomendado |
|---|---|
| SO de backend | Ubuntu 24.04 |
| ROS 2 | Jazzy |
| Entorno de referencia compatible | Ubuntu 22.04 + ROS 2 Humble (el uso con robot real requiere tus propias pruebas de regresión) |
| Python | 3.12 (Jazzy) o 3.10 (Humble) |
| Node.js | 18 o más reciente |
| Navegador | Versión estable actual de Chrome, Chromium, Edge o Firefox |
| Herramientas CAN | `iproute2`, `can-utils` |
| CAN para robot real | `can0`, 1 Mbps |
| MuJoCo | Instalado por el entorno Python del proyecto |

## Pasos de instalación

### Paso 1: Obtener el proyecto

```bash
git clone https://github.com/Yang-Ci/ReBot_Arm_web_RS.git ~/reBot_Arm_Mujoco-RS
cd ~/reBot_Arm_Mujoco-RS
```

Los comandos siguientes usan `~/reBot_Arm_Mujoco-RS` como directorio del proyecto. Si tu directorio es diferente, sustituye las rutas en consecuencia.

### Paso 2: Comprobación de entorno de solo lectura

```bash
cd ~/reBot_Arm_Mujoco-RS
./setup.sh --check
```

Este comando solo comprueba el sistema y no modifica el entorno. Las comprobaciones incluyen:

- Versiones de Ubuntu, Python y Node.js;
- ROS 2, rosbridge, MoveIt y herramientas de compilación;
- Herramientas SocketCAN y `can0`;
- El entorno virtual de Python y módulos clave;
- Resultados de compilación del espacio de trabajo ROS 2;
- El `package.json` web y `.env`.

### Paso 3: Instalación y compilación con un solo clic

```bash
./setup.sh --yes
./rebotarm doctor
```

El script de instalación instala las dependencias que falten de ROS 2, Node.js, SocketCAN y compilación, crea `rebotarm_ros2_RS/.venv`, instala las dependencias de Python para el robot real RS, MuJoCo y Agent, ejecuta rosdep y compila el espacio de trabajo ROS 2 con:

```bash
colcon build --symlink-install
```

El SDK de control y los modelos MuJoCo son rastreados por el repositorio principal como archivos ordinarios. No son submódulos de Git y no contienen repositorios Git anidados. Los archivos `.env`, SDK y modelos existentes no se restablecen mediante el script de instalación.

Si las dependencias del sistema ya están completas, solo necesitas preparar y recompilar el espacio de trabajo ROS:

```bash
./scripts/setup_rs_workspace.sh
```

Tras modificar paquetes de Python, normalmente esto es suficiente:

```bash
source scripts/rs_env.sh
cd rebotarm_ros2_RS
colcon build --symlink-install
```

### Paso 4: Configurar variables de entorno web

En la primera instalación, `reBotArm_simulator-RS/.env` se crea a partir de `.env.example`. Campos clave:

```bash
PORT=3002
HTTPS=0
REBOTARM_TEXT_AGENT_URL=http://localhost:8082
REBOTARM_MCP_URL=http://localhost:8081/mcp
MOTORBRIDGE_WS_URL=ws://127.0.0.1:9002
MOTORBRIDGE_WS_TOKEN=
```

Si la consola web y ROS 2/Agent no están en la misma máquina, cambia las direcciones del proxy a la IP de la máquina de backend. Las claves de API y los tokens solo deben almacenarse en variables de entorno o en el `.env` local no versionado.

## Puesta en marcha del proyecto

<Tabs defaultValue="web" groupId="launch-mode" queryString>

<TabItem value="web" label="Demo web pura">

Inicia solo el servidor web de Node.js, sin rosbridge ni ROS 2:

```bash
cd ~/reBot_Arm_Mujoco-RS/reBotArm_simulator-RS
npm start
```

Abre el navegador en:

```text
http://localhost:3002
```

Este modo es adecuado para desarrollar el modelo 3D, la interfaz de usuario, las poses predefinidas y las funciones de front-end. Sin el backend ROS 2, la consola web no puede controlar el robot real ni la escena completa de MuJoCo.

<!-- Image: rebot_rs_web_simulator_en.png -->

![Interfaz del simulador web de reBot Arm B601-RS](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_web_simulator_en.png)
</TabItem>

<TabItem value="sim" label="Simulación MuJoCo RS completa">

La Terminal 1 inicia Fake Driver, MuJoCo, cámara, detección, MCP Agent y rosbridge:

```bash
cd ~/reBot_Arm_Mujoco-RS
./rebotarm start rs_sim
```

La Terminal 2 inicia la consola web:

```bash
cd ~/reBot_Arm_Mujoco-RS
./rebotarm start web
```

Abre `http://localhost:3002`, selecciona el objetivo de control "RS Simulation (`/rebotarm_rs`)" e introduce `ws://localhost:9090` como el WebSocket de ROS.

Opciones de simulación comunes:

```bash
# No native MuJoCo window; suitable for automated tests
REBOTARM_MUJOCO_VIEWER=false ./rebotarm start rs_sim

# Kinematic following only; does not validate contact, gravity, or physical grasping
REBOTARM_MUJOCO_MODE=kinematic ./rebotarm start rs_sim

# Do not start the MCP Agent
REBOTARM_START_AGENT=false ./rebotarm start rs_sim

# After confirming there are no active tasks, clean up leftover simulation processes, then start
./rebotarm start rs_sim --force
```

> El agarre visual debe usar el modo `physics` predeterminado. El modo `kinematic` sincroniza directamente las posiciones de las articulaciones y no se puede usar para evaluar ganancias de control, estabilidad de contacto o fuerza de agarre.

<!-- Image: rebot_rs_mujoco_physics.png -->

![Simulación física MuJoCo de reBot Arm B601-RS](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_mujoco_physics.png)
</TabItem>

<TabItem value="real" label="Control del robot real RS">

Primero configura y comprueba SocketCAN:

```bash
sudo ip link set can0 down 2>/dev/null || true
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details -statistics link show can0
```

Después de confirmar que el paro de emergencia funciona y que el espacio de trabajo está despejado, inicia el controlador del robot real en la terminal 1:

```bash
cd ~/reBot_Arm_Mujoco-RS
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE \
  ./rebotarm start rs
```

Inicia la consola web y rosbridge en la terminal 2:

```bash
./rebotarm start web
```

Abre `http://localhost:3002` y selecciona "RS Real Robot (`/rebotarm`)". Para la primera prueba, sigue este orden:

1. Comprueba que la consola web indica conectado, que el estado del brazo es normal y que no hay errores de motor.
2. Haz clic en enable.
3. Ajusta la velocidad a `0.2-0.4 rad/s`.
4. Mueve una articulación una pequeña cantidad cada vez y confirma dirección, límites y realimentación.
5. Luego prueba arrastre del TCP, trayectorias o compensación de gravedad.
6. Cuando termines, realiza un homing seguro y deshabilita, luego pulsa `Ctrl+C` en la terminal del controlador.

No uses `Ctrl+Z` para pausar el controlador del robot real y no trates un botón web como un paro de emergencia físico. Si queda una instancia antigua del controlador, el script de arranque del robot real pide a la instancia antigua que salga de forma segura y limpia los recursos residuales confirmados como pertenecientes a ese controlador.

<!-- Image: rebot_rs_real_robot_web_en.png -->

![Control web del robot real reBot Arm B601-RS](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_real_robot_web_en.png)
</TabItem>

<TabItem value="dual" label="Depuración dual real/Fake">

```bash
export REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE
./scripts/start_rs_dual.sh
```

Este script inicia:

- el robot real `/rebotarm`;
- el Fake Driver `/rebotarm_rs`;
- rosbridge `9090`.

Se usa para comparar interfaces, direcciones de articulaciones y estado. No inicia toda la pila de MuJoCo, visión, Agent ni el servidor web. Confirma de nuevo el espacio de nombres seleccionado en la consola web antes de enviar comandos.


</TabItem>

</Tabs>

## Línea de comandos unificada

| Comando | Descripción |
|---|---|
| `./rebotarm doctor` | Comprobación de entorno de solo lectura, equivalente a `./setup.sh --check` |
| `./rebotarm start web` | Inicia o reutiliza rosbridge e inicia el servidor web |
| `./rebotarm start rs_sim` | Inicia toda la pila de simulación RS MuJoCo |
| `./rebotarm start rs` | Inicia el controlador del robot real RS; se requiere la variable de confirmación de hardware |
| `./rebotarm status` | Ver procesos registrados, puertos y `can0` |
| `./rebotarm stop` | Detiene los procesos hijo web/rosbridge registrados por `start web` |

Los procesos de simulación y robot real que se ejecutan en primer plano deben finalizarse normalmente con `Ctrl+C` en sus propias terminales.

## Arquitectura del proyecto

```text
reBot_Arm_Mujoco-RS/
|-- setup.sh                              One-click check, install, and build
|-- rebotarm                              Unified start, status, and stop entry
|-- requirements-rs-hardware.txt          RS real-robot Python dependencies
|-- requirements-rs-mujoco.txt            MuJoCo/Agent Python dependencies
|-- scripts/
|   |-- rs_env.sh                         Load ROS, venv, and workspace
|   |-- setup_rs_workspace.sh             Prepare and build the ROS 2 workspace
|   |-- start_rs_sim.sh                   Full RS simulation stack
|   |-- start_rs_hardware.sh              RS real-robot controller
|   |-- start_rs_dual.sh                  Real-robot/Fake dual-namespace startup
|   `-- start_rs_text_agent.sh            Text Agent HTTP service
|-- rebotarm_ros2_RS/
|   |-- src/rebotarmcontroller/           Real-robot controller and Fake Driver
|   |-- src/rebotarm_msgs/                Custom msg/srv/action
|   |-- src/rebotarm_bringup/             Config, URDF, meshes, and launch
|   |-- src/rebotarm_mujoco_rs/           RS MuJoCo, camera, detection, and tasks
|   |-- src/rebotarm_agent/               MCP Server and Text Agent
|   |-- src/rebotarm_moveit_config/       MoveIt configuration
|   |-- src/rebotarm_moveit_demos/        Trajectory and picking/placing examples
|   `-- third_party/reBotArm_control_py/  Plain-source control SDK
`-- reBotArm_simulator-RS/
    |-- server.js                           Static server and Agent proxy
    |-- public/index.html                   Web entry point
    |-- public/js/rebot-sim.js              Three.js, IK, scene, and animation
    |-- public/js/ros/rebot-ros-client.js   rosbridge client
    |-- public/js/ros/rebot-ros-ui.js       ROS UI, control, and feedback logic
    |-- public/js/rebot-llm.js              LLM chat UI
    |-- description/                         Standalone fallback model for the web
    `-- split_meshes/grouped_gripper/        Optional web gripper meshes
```

## Flujo de datos del sistema

### Comandos web hacia el robot real RS

```text
User drags a joint slider or TCP handle
  -> Three.js / browser DLS IK
  -> 30 ms slider damping, 1 deg input dead zone, max 60 Hz throttle
  -> rosbridge WebSocket
  -> JointMitCmd ROS topic
  -> command state arbitration
  -> 125 Hz velocity/acceleration/jerk-limited online reference
  -> MIT q/dq/kp/kd/tau
  -> reBotArm_control_py
  -> MotorBridge + SocketCAN can0
  -> RobStride motors
```

Un nuevo objetivo web solo actualiza el punto final de la trayectoria en línea. Incluso si el navegador deja temporalmente de enviar el siguiente fotograma, el bucle de control de 125 Hz sigue generando una referencia continua. La profundidad de QoS del comando es 1, por lo que un nuevo objetivo sobrescribe el objetivo antiguo no procesado y evita reproducir una cola de posiciones después de que se detenga el arrastre.

### Realimentación del robot real RS hacia la web

```text
RobStride encoder/status
  -> SocketCAN can0
  -> SDK status cache
  -> 20 Hz real-robot sync query
  -> 60 Hz ROS JointState publication
  -> rosbridge subscription throttle
  -> adaptive low-pass + feedback dead zone
  -> 32-120 ms display interpolation
  -> Three.js solid feedback model
```

El modelo translúcido representa el objetivo de control. La sombra del objetivo desaparece automáticamente cuando los errores de articulaciones y pinza son lo suficientemente pequeños. El filtrado de visualización solo afecta a la imagen web y no cambia los objetivos enviados a los motores.

### Cadena de simulación MuJoCo

```text
Web console or Agent
  -> ROS 2 commands, services, or actions
  -> Fake RS Driver (100 Hz)
  -> MuJoCo Sync (250 Hz)
  -> RS MJCF dynamics and collision
  -> joint/object states, overhead camera, and color detection
  -> Web console and MCP Agent
```

## Notas sobre el control web

### Objetivo de control y espacio de nombres

| Modo | Namespace | Origen del modelo web |
|---|---|---|
| Robot real RS | `/rebotarm` | Realimentación real del robot `/joint_states` |
| Simulación RS | `/rebotarm_rs` | Usa primero el estado real de MuJoCo |

Después de cambiar de modo, la consola web recrea el cliente rosbridge y las rutas de interfaz según el espacio de nombres objetivo.

### Articulaciones y pinza

- J1-J6 se controlan en radianes, con límites coherentes con el URDF de RS.
- El rango de velocidad web es `0.05-1.50 rad/s` con un valor predeterminado de `1.2 rad/s`.
- J1-J6 usan un amortiguamiento del deslizador de `30 ms` y una zona muerta de entrada de `1 deg` por defecto; la posición final se confirma de forma forzada cuando sueltas el deslizador.
- J7/la pinza se muestra como anchura de apertura en la web, con un rango de `0-71.5 mm`.
- La pinza se convierte al rango de motor RS `0-5 rad` al publicar, y la realimentación de ROS se convierte de nuevo a milímetros.
- J7 no pasa por el amortiguamiento en radianes ni la zona muerta de entrada de J1-J6; solo se envía el objetivo más reciente por fotograma de renderizado del navegador.

### Arrastre del TCP e IK

La consola web usa mínimos cuadrados amortiguados (DLS) para resolver objetivos de TCP. La versión RS adapta el amortiguamiento según el nivel de singularidad y luego envía la solución de articulaciones a través de la misma cadena de control en línea MIT.

La escena web de Three.js usa eje Y hacia arriba y ROS usa eje Z hacia arriba. La lógica de conversión de coordenadas está en `rebot-sim.js`; al ampliar funciones de pose, reutiliza la conversión existente en lugar de intercambiar directamente los valores de los formularios.

La entrada de pose usa metros: X es hacia delante, Y es hacia la izquierda y Z es hacia arriba. Si un objetivo es inalcanzable, primero aumenta Z o reduce la distancia horizontal, luego comprueba las restricciones de orientación y los límites de las articulaciones.

### Enseñanza y reproducción de trayectorias

La consola web puede registrar trayectorias de articulaciones y llamar a:

```text
/<namespace>/follow_joint_trajectory
```

El servidor de acciones del robot real RS usa referencias continuas de posición/velocidad cúbicas de Hermite monótonas y amplía automáticamente los segmentos de trayectoria que son demasiado cortos, manteniendo las velocidades de trayectoria ordinarias del robot real por debajo de aproximadamente `0.60 rad/s`. Los llamadores deben esperar el resultado de la acción o la realimentación del robot real y no deben finalizar la animación de reproducción antes de tiempo según la duración original de la solicitud.

### Enable, homing seguro y disable

- El controlador del robot real debe habilitarse después de cada arranque.
- `safe_home` vuelve suavemente a cero y valida ángulo y velocidad.
- Hacer clic en disable desde una pose distinta de cero entra primero en `SAFE_HOMING`.
- Si la validación de homing falla, los motores permanecen habilitados y se devuelve un resultado de fallo.
- `set_zero` reescribe el punto cero del motor y no es un botón de homing normal. Solo llámalo cuando la estructura mecánica esté realmente en la pose calibrada.

### Compensación de gravedad

La compensación de gravedad de RS comienza desde la pose medida actualmente y cambia a MIT articulación por articulación, de modo que la pose cero no se confunda con el objetivo. Los inicios repetidos son idempotentes; al detenerse se mantiene la última posición medida.

Los comandos web de articulación, TCP, trayectoria y pinza se rechazan durante la compensación de gravedad. Servicios relacionados:

```text
/<namespace>/gravity_compensation/start
/<namespace>/gravity_compensation/stop
/<namespace>/gravity_compensation/status
```

## Interfaces ROS 2

Los ejemplos siguientes usan el `/rebotarm` del robot real. Para la simulación, reemplaza el prefijo por `/rebotarm_rs`.

### Tópicos de estado

| Tópico | Tipo | Descripción |
|---|---|---|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | Estado unificado de seis ejes y pinza |
| `/rebotarm/joints/<name>/state` | `rebotarm_msgs/msg/JointMotorState` | Posición, velocidad, par y código de estado de un solo motor |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | Estado bruto del motor de la pinza |
| `/rebotarm/control_target` | `sensor_msgs/msg/JointState` | Objetivo final desde la consola web o la capa de acciones |
| `/rebotarm/control_reference` | `sensor_msgs/msg/JointState` | Muestra ROS de la referencia de trayectoria en línea de 125 Hz; `effort` transporta la aceleración de referencia |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | Estado de habilitación, modo, máquina de estados y códigos de error |

### Tópicos de comandos de bajo nivel

| Tópico | Tipo | Descripción |
|---|---|---|
| `/rebotarm/joints/<joint1..joint6>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando de articulación predeterminado desde la consola web para el robot real |
| `/rebotarm/joints/<joint1..joint6>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando de posición-velocidad |
| `/rebotarm/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando MIT de la pinza RS |
| `/rebotarm/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando de posición-velocidad de la pinza |
| `/rebotarm/mujoco/target_pose` | `geometry_msgs/msg/PoseStamped` | Pose objetivo del TCP |

Antes de publicar tú mismo comandos de bajo nivel, revisa `arm_status.state_machine`. No interrumpas el control durante `GRAVITY_COMP`, `SAFE_HOMING` o la ejecución de trayectorias.

### Servicios

| Servicio | Tipo | Descripción |
|---|---|---|
| `/rebotarm/enable` | `std_srvs/srv/Trigger` | Habilitar el brazo |
| `/rebotarm/disable` | `std_srvs/srv/Trigger` | Deshabilitar de forma segura; primero hace homing cuando es necesario |
| `/rebotarm/safe_home` | `std_srvs/srv/Trigger` | Homing seguro con validación |
| `/rebotarm/set_zero` | `rebotarm_msgs/srv/SetZero` | Escribir el punto cero del motor; usar con precaución |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | Iniciar la compensación de gravedad |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | Detener la compensación de gravedad |
| `/rebotarm/gravity_compensation/status` | `std_srvs/srv/Trigger` | Consultar el estado de la compensación de gravedad |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | Resolución de IK de pose |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | Control de posición de la pinza |
| `/rebotarm/gripper/open` | `rebotarm_msgs/srv/GripperCommand` | Abrir la pinza |
| `/rebotarm/gripper/close` | `rebotarm_msgs/srv/GripperCommand` | Cerrar la pinza |

Ejemplo:

```bash
source scripts/rs_env.sh
ros2 service call /rebotarm/gravity_compensation/status std_srvs/srv/Trigger '{}'
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger '{}'
```

### Acciones

| Acción | Tipo | Descripción |
|---|---|---|
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | Trayectoria de articulaciones |
| `/rebotarm/gripper/command` | `control_msgs/action/GripperCommand` | Acción de la pinza |
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | Movimiento de pose cartesiana |

### Interfaces de MuJoCo y visión

| Interfaz | Tipo/Uso |
|---|---|
| `/rebotarm_rs/mujoco/joint_states` | Estados reales de articulaciones de MuJoCo |
| `/rebotarm_rs/mujoco/object_states` | Estados de objetos de la escena como JSON |
| `/rebotarm_rs/mujoco/overhead_rgb/image_raw` | Cámara RGB cenital |
| `/rebotarm_rs/vision/color_blocks/detections` | Detección de objetos por color en JSON |
| `/rebotarm_rs/mujoco/reset` | Reiniciar la simulación |
| `/rebotarm_rs/mujoco/record/start` | Iniciar la grabación |
| `/rebotarm_rs/mujoco/record/stop` | Detener la grabación |
| `/rebotarm_rs/mujoco/record/replay` | Reproducir una grabación |
| `/rebotarm_rs/mujoco/record/clear` | Borrar grabaciones |

## Agarre visual

La simulación completa incluye por defecto un cubo rojo, un cuboide azul y un cilindro amarillo. La consola web puede seleccionar un color objetivo o elegir automáticamente, luego realizar alineación, pre-agarre, descenso, cierre, elevación y colocación.

El éxito del agarre no se trata solo de completar la trayectoria. El sistema también comprueba si el objeto de MuJoCo fue realmente levantado, evitando un informe de éxito falso cuando la pinza se cierra vacía o la trayectoria se completa sin recoger el objeto.

Solucionar problemas de agarre visual:

```bash
source scripts/rs_env.sh
ros2 topic echo /rebotarm_rs/vision/color_blocks/detections --once
ros2 topic echo /rebotarm_rs/mujoco/object_states --once
ros2 service list | grep rebotarm_rs
```

Si la pinza se cierra pero no levanta el objeto:

- confirma que se usa el modo `physics`;
- comprueba si la cámara y la detección de color están publicando continuamente;
- revisa el ancho, la orientación y la altura de agarre del objetivo;
- revisa en los registros la estabilidad de contacto y los resultados de validación de elevación física;
- evita iniciar múltiples solicitudes de agarre o IK al mismo tiempo.

## Control de texto LLM/MCP

### Arquitectura

```text
Web rebot-llm.js
  -> Node.js /api/llm/chat
  -> Text Agent (default :8082)
  -> MCP Server (default :8081/mcp)
  -> ROS 2 service/action/topic
```

El LLM entiende el lenguaje natural, y la capa MCP restringe la intención en llamadas de herramientas estructuradas. Sin una configuración de LLM, las herramientas MCP de detección, IK, articulaciones, pinza y agarre aún se pueden llamar directamente.

### Iniciar el agente de texto

La simulación completa inicia el Agente MCP de forma predeterminada. Para habilitar el punto de entrada en lenguaje natural, abre otra terminal:

```bash
cd ~/reBot_Arm_Mujoco-RS
export DASHSCOPE_API_KEY='your-key'
export REBOTARM_LLM_MODEL='qwen-plus'
./scripts/start_rs_text_agent.sh
```

Direcciones predeterminadas:

```text
MCP Server: http://127.0.0.1:8081/mcp
Dashboard:  http://localhost:8082
```

En la consola web puedes:

- consultar el estado del brazo y de ROS;
- abrir o cerrar la pinza;
- comprobar si una pose objetivo es alcanzable;
- moverte a una pose especificada;
- agarrar un objeto de un color especificado.

Antes de habilitar herramientas de movimiento en un entorno de robot real, comprueba explícitamente el permiso de movimiento y el espacio de nombres del Agente. El punto de entrada en lenguaje natural no puede eludir la máquina de estados de seguridad del backend del brazo ni reemplazar la parada de emergencia física.

## Parámetros clave de control

La configuración predeterminada del robot real se encuentra en:

```text
rebotarm_ros2_RS/src/rebotarm_bringup/config/rebotarm_hardware.yaml
```

Parámetros clave actuales de RS:

```yaml
rate: 125
control:
  arm_control_mode: mit
  mit_kp: [80, 150, 150, 50, 50, 50]
  mit_kd: [5, 10, 10, 5, 4, 4]
  stream_acceleration_limit: 4.0
  stream_jerk_limit: 30.0
  stream_natural_frequency: 8.0
gravity_compensation:
  kp: 2.0
  kd: 1.0
```

Otras frecuencias predeterminadas:

| Capa | Frecuencia predeterminada | Descripción |
|---|---:|---|
| Objetivo de articulación web | Hasta 60 Hz | Los deslizadores y el IK de TCP actualizan continuamente el objetivo |
| Consulta de retroalimentación de sincronización del robot real | 20 Hz | Actualizar la caché de medición de RobStride |
| Estado ROS del robot real | 60 Hz | Publicar retroalimentación, objetivo y referencia desde la caché |
| Control MIT de RS | 125 Hz | Suavizado en línea y comandos de motor |
| Fake Driver | 100 Hz | Control y estado de simulación |
| Sincronización MuJoCo | 250 Hz | Sincronización de dinámica predeterminada |
| Estado de objetos MuJoCo | 30 Hz | Escena y Agente |
| Cámara cenital | 8 Hz | Imagen RGB |
| Detección de color | 10 Hz | Resultados de detección |

Antes de ajustar ganancias, registra todo lo siguiente al mismo tiempo:

```text
/rebotarm/control_target
/rebotarm/control_reference
/rebotarm/joint_states
```

Si el objetivo es discontinuo, revisa la capa de entrada web; si la referencia es discontinua, revisa la trayectoria en línea; si la referencia es continua pero la retroalimentación se sobrepasa, revisa las ganancias MIT, la carga, la fricción, la corriente y el aumento de temperatura; solo revisa el filtrado de retroalimentación y los intervalos de llegada de rosbridge cuando solo la animación web presenta vibraciones.

## Guía de desarrollo secundario

### Modificar límites de articulación web o poses preestablecidas

Archivo:

```text
reBotArm_simulator-RS/public/js/rebot-sim.js
```

Las definiciones de articulaciones están en `jointDefs` y los preajustes en `presets`. Al modificar los límites de articulación, verifica conjuntamente el URDF de RS, la configuración del SDK y los límites mecánicos reales; no cambies solo el rango de visualización en la web.

### Modificar la frecuencia, el filtrado y el amortiguamiento de comandos web

Archivo:

```text
reBotArm_simulator-RS/public/js/ros/rebot-ros-ui.js
```

Este archivo gestiona la limitación de comandos web, el filtrado de retroalimentación del robot real, la zona muerta de retroalimentación, la interpolación, la sombra del objetivo, los bloqueos de control y la lógica de visión. No compenses la latencia de animación web aumentando las ganancias MIT del robot real.

### Añadir interfaces ROS personalizadas

El contenedor del cliente se encuentra en:

```text
reBotArm_simulator-RS/public/js/ros/rebot-ros-client.js
```

Añade rutas de Topic, Service o Action en la capa de UI y llama a `subscribe()`, `callService()` o `sendActionGoal()` del cliente. Las interfaces siempre deben generarse a partir del `namespace` actual para evitar enviar comandos de simulación al robot real.

### Modificar el URDF o la malla de RS

Modelos principales de ROS 2:

```text
rebotarm_ros2_RS/src/rebotarm_bringup/description/urdf/ReBot_Arm_RS.urdf
rebotarm_ros2_RS/src/rebotarm_bringup/description/meshes_rs/
```

El servidor web lee primero los modelos anteriores. Si el directorio web se copia y ejecuta por separado, usa:

```text
reBotArm_simulator-RS/description/urdf/ReBot_Arm_RS.urdf
reBotArm_simulator-RS/description/meshes_rs/
```

Mantén ambas copias sincronizadas al modificarlas y comprueba las mayúsculas y minúsculas de los nombres de archivo en Linux.

### Modificar MuJoCo

| Archivo/directorio | Función |
|---|---|
| `rebotarm_ros2_RS/src/rebotarm_mujoco_rs/models/` | MJCF y STL de RS |
| `rebotarm_mujoco_rs/mujoco_sync.py` | Frecuencia de sincronización, dinámica y PD |
| `rebotarm_mujoco_rs/scene_camera.py` | Cámara cenital |
| `rebotarm_mujoco_rs/scene_detector.py` | Detección de color |
| `rebotarm_mujoco_rs/task_server.py` | Tareas, grabación y reproducción |
| `rebotarm_mujoco_rs/launch/mujoco_rs.launch.py` | Parámetros de lanzamiento |

### Ampliar las herramientas MCP

El servidor MCP se encuentra en:

```text
rebotarm_ros2_RS/src/rebotarm_agent/rebotarm_agent/rebotarm_mcp_server.py
```

Al añadir una herramienta:

1. define un esquema de entrada y unidades claros;
2. separa las herramientas de solo lectura de las herramientas de movimiento;
3. valida el espacio de nombres, el estado y el permiso de movimiento en las herramientas de movimiento;
4. llama al backend mediante ROS 2 Service/Action/Topic en lugar de omitir el controlador directamente;
5. recompila el espacio de trabajo y prueba las rutas de error, tiempo de espera y cancelación en simulación.

## Comandos de verificación

```bash
source scripts/rs_env.sh
python3 -m pytest rebotarm_ros2_RS/src/rebotarmcontroller/test -q

bash -n setup.sh rebotarm scripts/*.sh

node --check reBotArm_simulator-RS/server.js
node --check reBotArm_simulator-RS/public/js/rebot-sim.js
node --check reBotArm_simulator-RS/public/js/ros/rebot-ros-client.js
node --check reBotArm_simulator-RS/public/js/ros/rebot-ros-ui.js
node --check reBotArm_simulator-RS/public/js/rebot-llm.js
```

Comprobaciones en tiempo de ejecución:

```bash
./rebotarm status
ros2 node list
ros2 topic list | grep rebotarm
ros2 service list | grep rebotarm
ros2 action list | grep rebotarm
```

## Preguntas frecuentes

### 1. La página web se queda en la pantalla de carga del modelo

Abre el panel Network de las herramientas de desarrollador del navegador y comprueba si estas solicitudes devuelven `200`:

```text
/api/urdf
/api/description/meshes/*.STL
```

Causas comunes:

- el URDF o STL de RS no existe;
- el directorio web se movió solo y el modelo de reserva está incompleto;
- el mapeo de `package://` en el URDF es incorrecto;
- las mayúsculas y minúsculas del nombre de archivo en Linux no coinciden;
- el orden de carga de Three.js, STLLoader o URDFLoader es incorrecto.

### 2. ROS muestra "disconnected"

```bash
ss -ltnp | grep 9090
ros2 node list
./rebotarm status
```

Confirma que rosbridge escucha en `0.0.0.0:9090` y que la dirección WebSocket comienza con `ws://`. Los navegadores remotos deben introducir la IP de Ubuntu, no el `localhost` del ordenador del navegador.

### 3. La consola web se conecta, pero los deslizadores no pueden controlar el robot real

Comprueba en este orden:

1. La consola web está en el robot real RS `/rebotarm`.
2. El WebSocket de ROS está conectado.
3. El bloqueo de control web está habilitado.
4. El brazo está habilitado.
5. `arm_status` no está en `GRAVITY_COMP`, `TRAJ_RUNNING` o `SAFE_HOMING`.
6. No hay errores de CAN o del motor en el controlador del robot real.

### 4. El modelo web vibra o la sombra del objetivo persiste

- Confirma que solo existen un controlador y un publicador de estado para el mismo espacio de nombres.
- Comprueba si `/joint_states` tiene múltiples publicadores.
- Registra `control_target`, `control_reference` y `joint_states` al mismo tiempo.
- Comprueba los contadores de errores de CAN y los intervalos de llegada de la retroalimentación.
- No ejecutes la reproducción de trayectorias y el arrastre manual continuo al mismo tiempo.

Una sombra de objetivo de larga duración suele significar que la retroalimentación real no ha alcanzado el objetivo; esto no es necesariamente un problema de renderizado web.

### 5. No hay retroalimentación CAN, o BUS-OFF

```bash
ip -details -statistics link show can0
candump can0
```

Comprueba:

- si la velocidad en baudios es `1 Mbps`;
- si CAN_H/CAN_L están invertidos;
- las resistencias de terminación en ambos extremos;
- la alimentación de los motores y la masa común;
- los ID de los motores y la configuración del SDK;
- el controlador USB-CAN y el nombre de la interfaz.

Detén inmediatamente la prueba con el robot real si el contador de errores sigue aumentando.

### 6. El brazo no se apaga inmediatamente después de hacer clic en deshabilitar

Si el brazo no está cerca de la pose cero, el controlador realiza primero un homing seguro y lo valida. Este es el comportamiento esperado. Si el homing falla, el sistema mantiene el brazo habilitado para evitar que caiga desde una pose distinta de cero. Usa la parada de emergencia física en caso de emergencia.

### 7. La compensación de gravedad no se inicia o no puede controlar

- Confirma que el brazo está habilitado.
- Consulta `/gravity_compensation/status`.
- Confirma que no se está ejecutando ninguna trayectoria ni homing seguro.
- Otros comandos de movimiento se rechazan durante la compensación de gravedad.
- Soporta cualquier carga que pueda caer al cambiar de modo.

### 8. La sujeción visual no funciona

Confirma que el `rs_sim` completo se está ejecutando en modo `physics`, luego comprueba:

```bash
ros2 topic echo /rebotarm_rs/mujoco/overhead_rgb/image_raw --once
ros2 topic echo /rebotarm_rs/vision/color_blocks/detections --once
ros2 topic echo /rebotarm_rs/mujoco/object_states --once
```

Si el botón muestra que hay una tarea en cola, espera a que termine la acción en serie actual y no inicies varias solicitudes de sujeción repetidamente.

### 9. El asistente LLM no se puede conectar

Confirma que el Text Agent está iniciado:

```bash
./scripts/start_rs_text_agent.sh
```

Comprueba `REBOTARM_TEXT_AGENT_URL` y `REBOTARM_MCP_URL` en `reBotArm_simulator-RS/.env`. La consola web comprueba el backend a través de `/api/llm/health`. No escribas claves de API en el código fuente web ni las confirmes en el repositorio.

### 10. La página sigue mostrando una versión antigua después de modificar el front-end

La consola web de RS incluye compatibilidad con Service Worker/PWA. Primero usa `Ctrl+Shift+R` para una recarga forzada; si aún no se actualiza, borra los datos del sitio o anula el registro del Service Worker en las herramientas de desarrollador del navegador y luego vuelve a cargar la página.

### 11. `setup.sh` o `colcon build` falla

- Confirma que las versiones de Ubuntu, ROS 2 y Python coinciden.
- Confirma que rosdep está inicializado y puede actualizarse.
- Ejecuta `./setup.sh --check` para ver los elementos que faltan.
- Confirma que `numpy`, `scipy`, `mujoco`, `pinocchio`, `motorbridge` y `fastmcp` se pueden importar en `rebotarm_ros2_RS/.venv`.
- Haz copia de seguridad de los archivos de usuario antes de eliminarlos o restablecerlos, y no resuelvas problemas de compilación con comandos destructivos.

## Tabla rápida de comandos

```bash
# Check and install
./setup.sh --check
./setup.sh --yes
./rebotarm doctor

# Full simulation
./rebotarm start rs_sim
./rebotarm start web

# Natural-language Agent
export DASHSCOPE_API_KEY='your-key'
./scripts/start_rs_text_agent.sh

# RS real robot
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE ./rebotarm start rs

# Status and stop
./rebotarm status
./rebotarm stop
```

## Referencias

- Documentación de ROS 2 Jazzy: https://docs.ros.org/en/jazzy/
- rosbridge_suite: https://github.com/RobotWebTools/rosbridge_suite
- Three.js: https://threejs.org/docs/
- URDFLoader: https://github.com/gkjohnson/urdf-loaders
- MuJoCo: https://mujoco.readthedocs.io/
- Model Context Protocol: https://modelcontextprotocol.io/
- Documentación del proyecto B601-RS: `README.md`, `USER_MANUAL_ZH.md`, `DEVELOPER_GUIDE_ZH.md`, `DATA_FLOW_RS_ZH.md`
