---
description: Esta guía para desarrolladores presenta la arquitectura, el runtime, el puente ROS2, la integración LLM/MCP y el flujo de trabajo de desarrollo secundario del simulador web reBotArm_simulator-DM y la pila de simulación ROS2/MuJoCo.
title: Guía para Desarrolladores del Simulador Web reBot Arm B601-DM y ROS2/MuJoCo
keywords:
  - reBot Arm
  - B601-DM
  - Web Simulator
  - Three.js
  - URDF
  - rosbridge
  - LLM
  - MCP
  - Robot Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web/rebot_web_simulator.png
slug: /rebot_arm_b601_dm_web_simulator_developer_guide
sku: 100065783, 100095532
last_update:
  date: 2026-08-24
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-07-30'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_web_simulator_developer_guide/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

# Guía para Desarrolladores del Simulador Web reBot Arm B601-DM y ROS2/MuJoCo

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
        <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="Licencia: Apache 2.0" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Jazzy-blue.svg" alt="ROS2 Jazzy" />
    <img src="https://img.shields.io/badge/Node.js-18%2B-green.svg" alt="Node.js 18+" />
    <img src="https://img.shields.io/badge/Three.js-r128-orange.svg" alt="Three.js r128" />
    <img src="https://img.shields.io/badge/Version-v1.0.0-brightgreen.svg" alt="Versión v1.0.0" />
    <img src="https://img.shields.io/badge/Platform-Cross%20Platform-lightgrey.svg" alt="Plataforma" />
</p>

<p align="center">
  <strong>Visualización con Three.js · Carga de URDF · Puente rosbridge · Control LLM/MCP</strong>
</p>

Esta guía es para desarrolladores. Explica cómo ejecutar y ampliar el simulador web `reBotArm_simulator-DM`. El simulador es una consola web ligera basada en Node.js + Three.js que lee el URDF y las mallas STL del workspace de ROS2 en el mismo repositorio, renderiza en el navegador el cuerpo de 6 GDL y la garra del reBot Arm B601-DM, y se comunica con ROS2 a través de un WebSocket de rosbridge. Admite todo el flujo de trabajo de desarrollo: espejado de articulaciones, bloqueo de control, compensación de gravedad, agarre visual y control por texto mediante LLM.

:::note
Esta guía utiliza `Ubuntu 24.04 + ROS2 Jazzy` como backend de ROS2. El front-end web se ejecuta en cualquier navegador moderno en Windows, macOS o Linux. ROS2 Humble / Ubuntu 22.04 puede seguir el mismo flujo de trabajo.
:::

## Funciones del proyecto

1. **Front-end sin compilación**  
   No depende de empaquetadores como Webpack/Vite. Todos los recursos de front-end son HTML/CSS/JS simples servidos directamente por un servidor estático de Node.js, lo que mantiene muy bajos los costes de despliegue y depuración.

2. **Carga directa de URDF + STL**  
   `URDFLoader` lee `ReBot_Arm_DM.urdf` y las mallas STL desde `src/rebotarm_bringup/description/` en el workspace `reBotArm_ros2_DM` del mismo repositorio, por lo que el modelo del cuerpo no necesita una segunda copia en el directorio web. Este URDF incluye la definición completa de la garra. Durante el renderizado web, los elementos visuales originales de la garra bajo `end_link` se ocultan y se cargan cuatro mallas STL optimizadas de la garra desde `split_meshes/grouped_gripper/`.

3. **Puente rosbridge bidireccional**  
   `ReBotRosClient` encapsula el protocolo JSON de rosbridge y se suscribe al estado de las articulaciones, estado de la garra, estado del brazo, imagen de la cámara virtual y resultados de detección de visión, y publica comandos de articulación única, comandos de la garra y poses objetivo.

4. **Control por texto con LLM/MCP**  
   La página web no llama a ROS directamente. En su lugar, hace proxy a través del servidor Node.js hacia un servicio HTTP de agente de texto que se ejecuta en la VM, y un Servidor MCP restringe la intención en lenguaje natural a operaciones estructuradas del robot.

5. **Instalación con un clic y lanzamiento unificado**  
   `setup.sh` instala automáticamente las dependencias del sistema, clona el SDK, crea el entorno virtual de Python, instala las dependencias y ejecuta `colcon build`. El punto de entrada unificado `rebotarm` proporciona comandos como `start web / dm / sim`, `doctor`, `status` y `stop`. Es idempotente: los componentes que ya existen y cumplen los requisitos se omiten automáticamente.

## Notas sobre cableado y red

El propio simulador web no se conecta directamente al hardware. Todos los comandos de control se reenvían a ROS2 a través de rosbridge. Deben confirmarse dos cosas:

1. **Lado del host Ubuntu**: El puente serie USB2CAN conecta el bus CAN del brazo, el motor de la garra está en el mismo bus CAN y la alimentación de 24 V está conectada. Confirma que el host reconoce el puerto serie:

```bash
ls /dev/ttyACM*
```
<details>
<summary>Salida esperada</summary>

```text
/dev/ttyACM0
```

Ver `/dev/ttyACM0` (o `ttyACM1`, etc.) en la lista significa que se reconoce el puerto serie.

</details>

2. **Lado del host web**: Confirma que puedes alcanzar el puerto rosbridge del host Ubuntu (por defecto `9090`). Prueba la conectividad WebSocket desde el navegador o la terminal del host web, por ejemplo:

```bash
# Confirm the Ubuntu host IP is reachable
ping <Ubuntu IP>

# Confirm the rosbridge port is open (rosbridge must already be running on Ubuntu)
curl -i http://<Ubuntu IP>:9090
```

Si necesitas abrir temporalmente los permisos del puerto serie (en el lado de Ubuntu):

```bash
sudo chmod 666 /dev/ttyACM0
```

Es mejor añadir el usuario actual al grupo `dialout`, lo que surtirá efecto tras volver a iniciar sesión:

```bash
sudo usermod -a -G dialout $USER
```

## Requisitos de entorno

| Elemento | Recomendado |
|---|---|
| Sistema operativo (backend) | Ubuntu 24.04; Ubuntu 22.04 también funciona |
| ROS2 | Jazzy; Humble también funciona |
| Python | Python del sistema, 3.12 para Jazzy |
| Node.js | 18 o superior |
| Navegador | Chrome / Edge 90+, Firefox 90+, Safari 14+ |
| MuJoCo (opcional) | 3.10+, solo necesario para la pila completa de simulación física |

## Pasos de instalación

### Paso 0. Completar la configuración básica del brazo

Antes de comenzar el desarrollo del simulador web, completa los pasos de [reBot Arm B601-DM Quick Start](https://wiki.seeedstudio.com/es/rebot_b601_dm_getting_started/), incluyendo el montaje del brazo, la configuración de ID de los motores, la inicialización del punto cero y las comprobaciones básicas de conectividad.

El repositorio del proyecto ya contiene el workspace de ROS2, el URDF y las mallas STL que requiere el simulador web. No necesitas compilar otro workspace siguiendo la guía [reBot Arm B601-DM ROS2 Integration](https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_ros2_integration/).

:::tip
`reBotArm_control_py` es la dependencia externa principal, que proporciona drivers para el robot real, cinemática inversa, cálculo de dinámica y compensación de gravedad. El simulador web no importa directamente este SDK, pero el nodo de robot real `rebotarmcontroller` en el backend ROS2, el bucle de par de MuJoCo y la función de compensación de gravedad dependen de él. Si solo ejecutas el modo de simulación pura con Fake Driver + web, el SDK no es necesario; en cuanto quieras controlar el robot real o usar la compensación de gravedad, debe estar instalado.

`setup.sh` obtiene automáticamente el SDK desde [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py) y lo instala en `~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM/third_party/reBotArm_control_py/` (bloqueado a un commit verificado). Si `~/reBotArm_control_py/` ya existe, se detecta automáticamente y no se clona de nuevo.

Estructura de directorios después de la instalación:

```text
reBotArm_control_py/
├─ reBotArm_control_py/
│  ├─ actuator/          RebotArm class, JointGroup, motor control
│  ├─ controllers/       RebotArmEndPose (trajectory, IK, gravity compensation)
│  ├─ kinematics/        forward/inverse kinematics, load_robot_model, pad_q_for_model
│  └─ dynamics/          dynamics functions such as compute_generalized_gravity
├─ config/
│  └─ rebotarm_dm.yaml   DM motor config (ID, baud rate, limits, PID)
├─ urdf/                 Pinocchio dynamics model URDF
└─ pyproject.toml
```

El `pyproject.toml` del SDK declara `requires-python >=3.10,<3.12`, pero este proyecto lo referencia mediante `sys.path` en lugar de instalarlo con pip, por lo que funciona correctamente en Python 3.12. Si `pip install -e .` informa de un conflicto de versión, omite ese paso y solo asegúrate de que el directorio esté en `reBotArm_ros2_DM/third_party/reBotArm_control_py/` o `~/reBotArm_control_py/` (el código busca automáticamente en estas rutas).
:::

### Paso 1. Instalación con un clic

El proyecto open source oficial de reBot Arm está disponible en [Seeed-Projects/reBot-DevArm](https://github.com/Seeed-Projects/reBot-DevArm). El simulador web, el workspace de ROS2 y el código de simulación MuJoCo utilizados en esta guía están alojados en [Yang-Ci/Borot-Arm_Mujoco](https://github.com/Yang-Ci/Borot-Arm_Mujoco). Clona el repositorio de software en `~/reBot_Arm_Mujoco-DM/`:

```bash
git clone https://github.com/Yang-Ci/Borot-Arm_Mujoco.git ~/reBot_Arm_Mujoco-DM
cd ~/reBot_Arm_Mujoco-DM
```

El `setup.sh` en la raíz del repositorio es idempotente y configura automáticamente todo el entorno:

- Instala los paquetes de sistema apt que falten (ROS 2, Node.js, ros-dev-tools, etc.)
- Clona el SDK `reBotArm_control_py` en `third_party/` (se omite si ya existe)
- Crea el entorno virtual de Python (`reBotArm_ros2_DM/.venv`, con `--system-site-packages`)
- Instala las dependencias de Python desde `requirements.txt`
- Crea el `.env` web a partir de `.env.example`
- Ejecuta la resolución de dependencias `rosdep` y `colcon build --symlink-install`

```bash
./setup.sh
```

El instalador es idempotente: los componentes que ya existen y cumplen los requisitos se omiten, y nunca elimina el SDK existente, el entorno virtual ni el `.env` web; solo se instalan los elementos que faltan. Al final resume los elementos instalados, omitidos, con versiones no coincidentes y fallidos.

Solo comprobación, sin modificar el sistema:

```bash
./setup.sh --check
```

Después de la instalación, ejecuta diagnósticos para confirmar que el entorno está listo:

```bash
./rebotarm doctor
```

<details>
<summary>Salida esperada (resumen)</summary>

```text
[rebotarm-setup] Checking supported platform
[rebotarm-setup] Checking runtime versions
[rebotarm-setup] Checking reBotArm_control_py SDK
[rebotarm-setup] Checking project virtual environment
[rebotarm-setup] Checking web configuration
[rebotarm-setup] Resolving ROS dependencies and building the workspace

Installed/updated (6)
  - apt nodejs
  - SDK ...
  - virtual environment ...
  - Python requirements checked/updated in project venv
  - created .env from example
  - ROS workspace built with colcon

Already usable; skipped (5)
  - Ubuntu 24.04 supported
  - Python 3.12.3 compatible
  - Node.js v18.19.0 compatible
  - existing SDK preserved
  - critical Python and SDK imports pass

Setup complete. Next:
  ./rebotarm doctor
  ./rebotarm start web
  ./rebotarm start dm
```

Un mensaje `Setup complete` con una sección `Failed or still missing` vacía significa que todo salió bien.

</details>

:::note
Si `setup.sh` no instala automáticamente ROS 2 (por ejemplo, porque la fuente apt de ROS aún no se ha añadido al sistema), el instalador descarga automáticamente el paquete oficial `ros2-apt-source` desde GitHub, añade la fuente y vuelve a intentarlo. No necesitas configurar manualmente la fuente apt.
:::

### Paso 2. Configurar variables de entorno

`setup.sh` ya creó `.env` a partir de `.env.example`. Para cambiar el puerto o el destino del proxy, edita `.env`:

```bash
# reBotArm_simulator-DM/.env key fields
PORT=3001
REBOTARM_TEXT_AGENT_URL=http://localhost:8082
REBOTARM_MCP_URL=http://localhost:8081/mcp
```

Si la página web se ejecuta en Windows y ROS2 se ejecuta en una máquina virtual de Ubuntu, cambia `REBOTARM_TEXT_AGENT_URL` y `REBOTARM_MCP_URL` a la IP real de la máquina virtual de Ubuntu, por ejemplo `http://<Ubuntu IP>:8082`.

### Paso 3. Iniciar el servidor web

```bash
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start web
```

Este comando carga automáticamente el entorno de ROS2 y arranca rosbridge (reutilizando un listener existente si el puerto ya está en uso) y el servidor web de Node.js. Después de iniciarse, la terminal imprime la URL de acceso:

```text
ROS WebSocket: ws://localhost:9090 (started by this command)
Web: http://localhost:3001
Ctrl+C stops processes started by this command.
```

Abre `http://localhost:3001` en un navegador y espera a que terminen de cargarse el URDF y el STL; cuando aparezca el modelo 3D significa que el front-end está funcionando. La página ya está conectada por defecto al rosbridge local, así que puedes operar directamente en el panel "ROS2 Bridge".

:::note
Si solo quieres ejecutar una demo web pura (sin iniciar rosbridge), también puedes iniciarla manualmente desde el directorio web:

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_simulator-DM
node server.js
```

En este caso la página te permite arrastrar los deslizadores de las articulaciones, usar preajustes de pose y arrastre del TCP, pero no se conectará a ningún nodo ROS.
:::

## Puesta en marcha del proyecto

:::note
El comando `./rebotarm` carga internamente el entorno, por lo que no necesitas ejecutar manualmente `source scripts/source_rebotarm_env.sh`. Sin embargo, si ejecutas directamente comandos `ros2` sin envoltorio, cada nueva terminal sigue necesitando cargar el entorno primero.
:::

<Tabs defaultValue="fake" groupId="launch-mode" queryString>

<TabItem value="web" label="Demo web pura">

La forma más ligera de ejecutar: solo se inicia el servidor web, sin conexión ROS2. Es ideal para demostración de poses, enseñanza y desarrollo de la interfaz:

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_simulator-DM
node server.js
```

Abre `http://localhost:3001` en un navegador. Puedes arrastrar los deslizadores de las articulaciones, usar preajustes de pose, arrastre del TCP y enseñanza-grabación, pero todas las operaciones solo afectan al modelo 3D y no moverán ningún hardware ni nodo ROS.


![Interfaz del simulador web](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web/rebot_web_simulator.png)
</TabItem>

<TabItem value="fake" label="Simulación con Fake Driver">

Inicia el Fake Driver, rosbridge y el servidor web. La página web refleja el estado de las articulaciones a través de rosbridge y envía comandos de control. Es útil para verificar interfaces, direcciones de las articulaciones y límites.

Terminal 1 — iniciar el Fake Driver:

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
source scripts/source_rebotarm_env.sh
ros2 launch rebotarm_bringup fake_bringup.launch.py
```

Terminal 2 — iniciar rosbridge + web (un solo comando):

```bash
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start web
```

Después de que la página se conecte a `ws://localhost:9090`, marca "Mirror real joint state to the web" para ver el estado de las articulaciones del Fake Driver sincronizado con el modelo 3D. Tras marcar "Allow the web to send control to the real arm", los deslizadores de las articulaciones y el movimiento de Pose enviarán comandos a través de rosbridge.


![Visualización del modelo en RViz](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web/rebot_rviz_model.png)
</TabItem>

<TabItem value="mujoco" label="Simulación física completa">

Un solo comando inicia toda la pila: Fake Driver, agarre físico MuJoCo, servidor de tareas, cámara virtual, detector de color y rosbridge:

```bash
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start sim
```

<details>
<summary>Salida esperada</summary>

```text
[rebot-mujoco-all] starting fake_bringup...
[rebot-mujoco-all] starting mujoco_physics_grasp...
[rebot-mujoco-all] starting sim_task_server...
[rebot-mujoco-all] starting sim_rgb_camera...
[rebot-mujoco-all] starting sim_color_detector...
[rebot-mujoco-all] starting rosbridge_websocket on :9090...
```

Todos los nodos se inician en secuencia; si no aparece ningún `ERROR`, se considera correcto.

</details>

Este script es internamente equivalente a `reBotArm_ros2_DM/scripts/start_rebot_mujoco_all.sh`. De forma predeterminada inicia el Fake Driver, robot_state_publisher, el agarre físico MuJoCo, el servidor de tareas, la cámara RGB cenital, el detector de color y rosbridge. Luego ejecuta `./rebotarm start web` en otra terminal para iniciar la página web. Después de que el navegador se conecte a ROS, puedes usar la demo de agarre visual.


![Simulación física MuJoCo](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web/rebot_mujoco_physics.png)
</TabItem>

<TabItem value="real" label="Control del robot real">

El modo de robot real inicia el bringup/controlador real y rosbridge, y la página web controla a través de la misma interfaz ROS. Se recomienda primero verificar interfaces, direcciones de las articulaciones y límites con el Fake Driver antes de cambiar al robot real a baja velocidad:

```bash
# Before starting, confirm the device node and grant permissions
ls /dev/ttyACM0
sudo chmod 666 /dev/ttyACM0

# Start the real-robot driver (auto-sources the environment)
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start dm
```

En otra terminal, inicia rosbridge + web:

```bash
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start web
```

:::warning
Cuando estés conectado al controlador del robot real, los comandos web moverán hardware real. Verifica siempre primero las direcciones y límites de las articulaciones con el Fake Driver. Al usar el robot real por primera vez, prueba la articulación final con movimientos pequeños. Si algo es anómalo, haz clic inmediatamente en "Disable" o cancela el bloqueo de control. No confíes solo en las casillas de verificación de la web; mantén in situ un paro de emergencia, límites y aislamiento del espacio operativo.
:::

</TabItem>

</Tabs>

## Arquitectura del proyecto

```text
reBot_Arm_Mujoco-DM/
├─ setup.sh                         Idempotent one-click install and version check
├─ rebotarm                         Unified entry for start, stop, status, and diagnostics
├─ requirements.txt                 Python dependency version ranges
├─ PROJECT_ARCHITECTURE_ZH.md       Overall architecture, simulation principles, and debouncing notes
├─ reBotArm_ros2_DM/                ROS 2 workspace
│  ├─ scripts/                      One-click launch scripts and environment loading
│  ├─ third_party/                  reBotArm_control_py SDK for fresh installs
│  ├─ .venv/                        Project Python virtual environment (created by setup.sh)
│  └─ src/
│     ├─ rebotarm_msgs/             Custom msg/srv/action
│     ├─ rebotarmcontroller/        Real-robot driver, Fake Driver, hardware management
│     ├─ rebotarm_bringup/          URDF, STL, launch, motor config
│     ├─ rebotarm_mujoco/           MuJoCo simulation, IK, camera, vision
│     ├─ rebotarm_agent/            MCP Server and text agent
│     ├─ rebotarm_moveit_config/    MoveIt 2 configuration
│     └─ rebotarm_moveit_demos/     MoveIt 2 application demos
└─ reBotArm_simulator-DM/           Node.js + Three.js web console
   ├─ public/                       Pages, styles, front-end logic
   └─ split_meshes/grouped_gripper/ Web gripper meshes
```

Flujo de datos: el navegador accede al servidor estático de Node.js mediante `HTTP /api` y se comunica bidireccionalmente con ROS2 a través de `rosbridge WebSocket`; el lenguaje natural es reenviado por Node.js al Text Agent / MCP Server y luego se convierte en llamadas de herramientas estructuradas que entran en ROS2. ROS2 impulsa hacia abajo el driver falso/real y el brazo, y se conecta lateralmente a la simulación física MuJoCo, al servidor de tareas y a la cámara virtual. La página web, el Agente LLM y el robot real no codifican llamadas directas entre sí; están desacoplados mediante topics, servicios y acciones de ROS2.

El punto de entrada unificado `rebotarm` es la forma principal de operar el proyecto:

| Comando | Descripción |
|---|---|
| `./rebotarm start web` | Iniciar rosbridge + servidor web (carga automáticamente el entorno) |
| `./rebotarm start dm` | Iniciar el driver DM del robot real (terminal separada, carga automáticamente el entorno) |
| `./rebotarm start sim` | Iniciar toda la pila de simulación MuJoCo (no iniciar junto con el robot real) |
| `./rebotarm doctor` | Comprobación de diagnóstico (equivalente a `./setup.sh --check`) |
| `./rebotarm status` | Ver el estado de procesos, puertos, puertos serie y nodos ROS |
| `./rebotarm stop` | Detener los procesos en segundo plano gestionados por `start web` |

:::note
Todos los comandos `./rebotarm` ejecutan internamente `source scripts/source_rebotarm_env.sh`, por lo que no necesitas cargar el entorno manualmente. Sin embargo, si ejecutas directamente comandos `ros2` sin envoltorio (como iniciar manualmente un archivo de lanzamiento), aún necesitas cargar el entorno primero:

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
source scripts/source_rebotarm_env.sh
```

Este script carga, en orden, ROS2 (`/opt/ros/jazzy/setup.bash`), el entorno virtual de Python (`.venv/bin/activate`), las rutas de cmeel (extensiones C de Pinocchio) y el workspace (`install/setup.bash`).
:::

<details>
<summary><b>Notas sobre los módulos principales</b> (haz clic para desplegar)</summary>


**server.js — servidor estático de Node.js**

`server.js` es un servidor HTTP de Node.js sin dependencias. Sus principales responsabilidades:

- Servir los recursos estáticos del front-end bajo `public/`;
- Leer el URDF y las mallas STL desde el workspace de ROS2 en el mismo repositorio y exponer los endpoints `/api/urdf` y `/api/description/meshes/<file>`;
- Servir las mallas del gripper solo web `/api/gripper_meshes/<file>` (desde `split_meshes/grouped_gripper/`);
- Hacer proxy de las solicitudes de chat del LLM `/api/llm/chat` y de la comprobación de estado `/api/llm/health` al servicio HTTP del agente de texto en la VM;
- Proporcionar el endpoint de configuración MCP `/api/mcp/config`, devolviendo `textAgentUrl` y `mcpUrl`.

Resolución de ruta clave (`server.js`):

```javascript
const BRINGUP_DIR = path.resolve(
  path.join(ROOT, '..', 'reBotArm_ros2_DM', 'src', 'rebotarm_bringup')
);
const URDF_FILE = path.join(BRINGUP_DIR, 'description', 'urdf', 'ReBot_Arm_DM.urdf');
const MESHES_DIR = path.join(BRINGUP_DIR, 'description', 'meshes');
const GRIPPER_MESHES_DIR = path.join(ROOT, 'split_meshes', 'grouped_gripper');
```

:::note
`server.js` localiza el espacio de trabajo ROS2 mediante la ruta relativa `../reBotArm_ros2_DM/...`. Si mueves el directorio web a otra ubicación, debes actualizar estas rutas en consecuencia, o mantener una copia del modelo de la misma versión que el espacio de trabajo ROS2 en el directorio web.
:::

**rebot-sim.js — núcleo de la escena 3D**

`rebot-sim.js` es el núcleo del front-end (unas 1700 líneas), responsable de:

- Inicializar la escena de Three.js, la cámara, el renderizador y el controlador de órbita personalizado;
- Cargar el URDF mediante `URDFLoader`; `loader.packages` asigna `package://rebotarm_bringup` a `${origin}/api` para que las solicitudes de malla pasen por el endpoint de Node.js;
- Adjuntar el grupo visual del gripper solo web (4 STL) al `end_link`, con un rango de accionamiento de 0–90mm;
- Implementar el solucionador de cinemática inversa DLS (mínimos cuadrados amortiguados) `IKSolver`, que admite arrastre del TCP y resolución de pose objetivo;
- Proporcionar preajustes de pose, deslizadores de articulaciones, arrastre del TCP, grabación/reproducción/exportación de enseñanza, estimación del sobre de alcance y objetivo fantasma;
- Exponer la API a través del objeto `window.reBotSim` para que lo llame `rebot-ros-ui.js`.

Definiciones de articulaciones (`rebot-sim.js`):

```javascript
const jointDefs = [
  { name: 'joint1', label: 'J1 base yaw',    min: -2.8,  max: 2.8,  home: 0 },
  { name: 'joint2', label: 'J2 shoulder',     min: -3.14, max: 0,    home: 0 },
  { name: 'joint3', label: 'J3 elbow',       min: -3.14, max: 0,    home: 0 },
  { name: 'joint4', label: 'J4 wrist pitch', min: -1.87, max: 1.57, home: 0 },
  { name: 'joint5', label: 'J5 wrist yaw',   min: -1.57, max: 1.57, home: 0 },
  { name: 'joint6', label: 'J6 tool roll',   min: -3.14, max: 3.14, home: 0 },
  { name: 'gripper', label: 'J7 gripper', min: 0, max: 0.09, home: 0, unit: 'm' }
];
```

:::note
El sistema de coordenadas de Three.js en la web difiere del marco ROS. Three.js usa Y hacia arriba por defecto, mientras que ROS usa Z hacia arriba. `rebot-sim.js` realiza la conversión con `threeToRos(v)`: `{ x: v.x, y: -v.z, z: v.y }`. Al desarrollar funciones de pose personalizadas, debes usar esta conversión; de lo contrario, las coordenadas serán incorrectas.
:::

**rebot-ros-client.js — cliente rosbridge**

`ReBotRosClient` extiende `EventTarget` y envuelve el protocolo JSON de rosbridge v2, proporcionando:

- `connect(url)` / `disconnect()`: gestión de la conexión WebSocket, con reconexión automática (`autoReconnect`, `reconnectDelay`);
- `subscribe(topic, type, callback, options)`: suscribirse a un tópico, con soporte de limitación `throttleRate`;
- `callService(service, type, args)`: llamar a un servicio y devolver una Promise;
- `sendActionGoal(actionName, actionType, goal)`: llamar a una acción mediante `/_action/send_goal`;
- Envolturas de alto nivel: `enable()`, `disable()`, `safeHome()`, `startGravityCompensation()`, `setGripper()`, `moveToPose()`, `solveMoveToPoseIK()`, `followJointTrajectory()`;
- Envolturas de publicación: `publishJointCommand()`, `publishGripperCommand()`, `publishTargetPose()`.

El espacio de nombres predeterminado es `rebotarm`, y todas las rutas de tópicos/servicios se prefijan con `/rebotarm/`.

**rebot-ros-ui.js — panel de control ROS**

`rebot-ros-ui.js` (unas 1500 líneas) es la capa de negocio que conecta `ReBotRosClient` y `reBotSim`, responsable de:

- Suscribirse al estado de las articulaciones, estado del gripper, estado del brazo, imagen de la cámara virtual, resultados de detección de visión y eventos de animación de simulación;
- Implementar los dos interruptores "Reflejar el estado real de las articulaciones en la web" y "Permitir que la web envíe control al brazo real";
- Limitación de comandos de articulaciones (`COMMAND_INTERVAL_MS = 45ms`) y retención del espejo (`MIRROR_HOLD_MS = 1800ms`);
- Inicio/parada de la compensación de gravedad y consulta de estado;
- Control del gripper y espera hasta alcanzar (`commandGripperAndWait`);
- Comprobación de IK, movimiento de pose, envío de trayectorias y modo de reproducción de bajo nivel como respaldo;
- El flujo completo de agarre visual (retirada, alineación, pre-descenso, descenso, agarre, elevación, tránsito);
- Eventos de animación de simulación (`attach_object` / `release_object`) que hacen que el gripper web siga al objeto.

El bloqueo de control es una salvaguarda importante contra operaciones accidentales. `controlAllowed()` comprueba de forma uniforme: cuando ROS no está conectado o el bloqueo de control no está marcado, todos los comandos de control se interceptan y la página solo actualiza el modelo 3D.

**rebot-llm.js — interfaz de control de texto LLM**

`rebot-llm.js` implementa la interfaz de chat en lenguaje natural. La cadena es:

```text
web rebot-llm.js
  -> Node.js /api/llm/chat
  -> Text Agent HTTP service (default :8082)
  -> MCP Server (default :8081/mcp)
  -> ROS 2 service/action/topic
```

Al iniciarse, primero llama a `/api/llm/health` para comprobar el estado del agente de texto; tras el éxito habilita el cuadro de entrada. Los mensajes se envían al agente de texto a través de `/api/llm/chat`, y el `text` y los `events` devueltos (proceso de llamada de herramientas) se renderizan en el área de chat. Al detenerse, envía `{ text: '__reset__', reset: true }` para limpiar el contexto.

</details>

<details>
<summary><b>Resumen de la interfaz ROS2</b> (haz clic para expandir)</summary>


Las interfaces ROS2 clave a las que el simulador web se suscribe y publica se enumeran a continuación. El espacio de nombres predeterminado es `rebotarm`.

**Tópicos suscritos**

| Tópico | Tipo | Descripción |
|---|---|---|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | Posición en tiempo real de 6 articulaciones + gripper |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | Posición/velocidad/par del gripper |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | Habilitación, modo, máquina de estados |
| `/rebotarm/mujoco/overhead_rgb/image_raw` | `sensor_msgs/msg/Image` | Imagen de la cámara RGB cenital del escritorio |
| `/rebotarm/vision/color_blocks/detections` | `std_msgs/msg/String` | Resultado de detección de bloques de color (JSON) |
| `/rebotarm/sim/animation_event` | `std_msgs/msg/String` | Evento de animación de simulación (agarre/liberación) |

**Tópicos publicados**

| Tópico | Tipo | Descripción |
|---|---|---|
| `/rebotarm/joints/<jointN>/cmd` | `rebotarm_msgs/msg/JointMotorCmd` | Comando disperso de articulación única (mode=1 POS_VEL) |
| `/rebotarm/gripper/cmd` | `rebotarm_msgs/msg/JointMotorCmd` | Comando del gripper (m, 0~0.09) |
| `/rebotarm/mujoco/target_pose` | `geometry_msgs/msg/PoseStamped` | Pose objetivo de arrastre del TCP |

**Servicios llamados**

| Servicio | Tipo | Descripción |
|---|---|---|
| `/rebotarm/enable` | `std_srvs/srv/Trigger` | Habilitar todos los motores |
| `/rebotarm/disable` | `std_srvs/srv/Trigger` | Deshabilitar todos los motores |
| `/rebotarm/safe_home` | `std_srvs/srv/Trigger` | Retorno seguro a cero |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | Iniciar compensación de gravedad |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | Detener compensación de gravedad |
| `/rebotarm/gravity_compensation/status` | `std_srvs/srv/Trigger` | Consultar estado de la compensación de gravedad |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | Servicio de alcance del gripper |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | Servicio de resolución de IK |
| `/rosapi/topics` | `rosapi_msgs/srv/Topics` | Diagnóstico: listar todos los tópicos |
| `/rosapi/services` | `rosapi_msgs/srv/Services` | Diagnóstico: listar todos los servicios |

**Acciones llamadas**

| Acción | Tipo | Descripción |
|---|---|---|
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | Movimiento de pose cartesiana |
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | Ejecución de trayectoria de articulaciones |

:::note
Cuando el servicio `_action/send_goal` para `FollowJointTrajectory` o `MoveToPose` no se encuentra en el entorno ROS2, la página web vuelve automáticamente al modo de "reproducción de bajo nivel": publica comandos de articulación única punto por punto según las marcas de tiempo de los puntos de la trayectoria y sincroniza la interpolación en el modelo 3D. Esto permite que la página web demuestre trayectorias incluso en un entorno mínimo con solo el Fake Driver.
:::

</details>

## Unidades del gripper y convenciones de coordenadas

La web y las interfaces ROS usan **metros** como unidad del gripper:

```text
close: 0.00 m
open:  0.09 m
```

El firmware del motor usa **radianes** (0.0 = cerrado, −5.0 = abierto). La conversión se realiza en el `HardwareManager` del controlador ROS2; la página web no maneja radianes directamente.

En el URDF, `finger_left` / `finger_right` son articulaciones prismáticas con límites `0~0.0285` (m). La página web asigna la apertura de `finger_left` al rango de comando del gripper 0~0.09 m mediante `fingerOpeningToGripperCommand()`.

Para el sistema de coordenadas, Three.js en la web usa Y hacia arriba por defecto, mientras que ROS usa Z hacia arriba. Todas las poses del TCP se convierten con `threeToRos()` antes de publicarse en ROS:

```javascript
function threeToRos(v) {
  return { x: v.x, y: -v.z, z: v.y };
}
```

## Control de texto LLM/MCP

El control en lenguaje natural no se llama directamente desde el navegador a ROS. Se hace proxy a través de Node.js. El diseño por capas permite que el LLM entienda la intención mientras que la capa MCP restringe la intención en operaciones de robot estructuradas.

### Iniciar el servidor MCP y el agente de texto

Inicia el servidor MCP en la VM de Ubuntu (modo bloqueado por defecto, solo lectura):

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
source scripts/source_rebotarm_env.sh
ros2 launch rebotarm_agent rebotarm_mcp.launch.py
```

Modo de movimiento de simulación (movimiento permitido):

```bash
ros2 launch rebotarm_agent rebotarm_mcp.launch.py motion_mode:=allow
```

Inicia el servicio HTTP del agente de texto (para que lo llame la página web):

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
./scripts/start_rebotarm_text_agent_http.sh
```
<details>
<summary>Salida esperada</summary>

```text
[rebotarm-text-agent-http] MCP=http://127.0.0.1:8081/mcp
[rebotarm-text-agent-http] model=qwen-plus
INFO:     Uvicorn running on http://0.0.0.0:8082
```

Cuando aparezca `Uvicorn running on http://0.0.0.0:8082`, estará listo.

</details>

De forma predeterminada escucha en `0.0.0.0:8082`, MCP apunta a `http://127.0.0.1:8081/mcp`, y el LLM usa `qwen-plus` por defecto.

### Uso web

En el panel "LLM text control" de la página web, haz clic en "Start AI assistant". La página primero realiza un health-check del text-agent; tras tener éxito habilita el cuadro de entrada. Puedes escribir directamente comandos en lenguaje natural, por ejemplo:

- Consultar el estado del brazo
- Mover a X=0.3 Y=0 Z=0.3
- Abrir la pinza
- Agarrar el bloque rojo

La respuesta del text-agent y el proceso de llamada de herramientas se muestran en el área de chat.

### Configurar el destino del proxy

La página web localiza el backend mediante `REBOTARM_TEXT_AGENT_URL` y `REBOTARM_MCP_URL` en `.env`. Si la página web se ejecuta en Windows y ROS2 se ejecuta en una VM de Ubuntu, cámbialos a la IP real de la VM:

```bash
REBOTARM_TEXT_AGENT_URL=http://<Ubuntu IP>:8082
REBOTARM_MCP_URL=http://<Ubuntu IP>:8081/mcp
```

Después de cambiarlo, reinicia `./rebotarm start web` (o `node server.js`). Al iniciarse, la página lee y muestra el backend de proxy actual desde `/api/mcp/config`.

### Panel de visualización MCP Dashboard

El MCP Dashboard es una entrada de depuración independiente y no necesita el simulador web. Iniciarlo requiere dos pasos:
![MCP Dashboard](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web/rebot_mcp.png)

**Terminal 1 — iniciar el MCP Server:**

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
source scripts/source_rebotarm_env.sh
ros2 launch rebotarm_agent rebotarm_mcp.launch.py motion_mode:=allow
```

**Terminal 2 — iniciar el text-agent (incluye el MCP Dashboard):**

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
./scripts/start_rebotarm_text_agent_http.sh
```

**Acceso desde el navegador:**

```text
http://localhost:8082/
```

Abre `http://<Ubuntu IP>:8082/` en un navegador para acceder; no se necesita instalación adicional.

**Funciones**:

- **Resumen de herramientas**: obtiene automáticamente todas las herramientas registradas desde el MCP Server y las agrupa por categoría (estado y diagnóstico, habilitar control, control de movimiento, control de pinza, compensación de gravedad, agarre visual, grabación y reproducción);
- **Filtro de búsqueda**: el cuadro de búsqueda superior filtra en tiempo real los nombres y descripciones de las herramientas;
- **Formulario de parámetros**: genera automáticamente cuadros de entrada basados en el `inputSchema` de cada herramienta; rellena los parámetros y haz clic en "Call" para llamar directamente a la herramienta MCP correspondiente;
- **Etiqueta de movimiento**: las herramientas que requieren `motion_mode=allow` se marcan con una etiqueta "Motion";
- **Registro de herramientas personalizadas**: haz clic en el botón "Register new tool", rellena el nombre de la herramienta, descripción, categoría, URL del Webhook y el esquema de parámetros (JSON) para añadir una herramienta personalizada al panel. Al llamarla, los parámetros se envían por POST como JSON a la URL del Webhook;
- **Cambio CN/EN**: el botón de idioma en la esquina superior derecha cambia la interfaz CN/EN con un clic; la elección se guarda en el `localStorage` del navegador;
- **Entrada en lenguaje natural**: escribe comandos en lenguaje natural en el cuadro de chat de la derecha; pasan por el endpoint `/chat` a través de la cadena LLM → MCP, y la respuesta y el proceso de llamada de herramientas se muestran en el área de registro en tiempo real.

:::tip
El MCP Dashboard es una entrada de depuración independiente y no depende del simulador web. Mientras el MCP Server (`:8081`) y el Text Agent (`:8082`) estén en ejecución, abre `http://<Ubuntu IP>:8082/` para ver y llamar a las 18 herramientas MCP.
:::

**Resumen de endpoints**:

| Endpoint | Método | Descripción |
|---|---|---|
| `/` o `/dashboard` | GET | Devuelve la página HTML del Dashboard (tema de panel de vidrio oscuro, admite cambio CN/EN) |
| `/tools` | GET | Devuelve el JSON de la lista de herramientas MCP (nombre, descripción, esquema de parámetros, categoría, marca de personalizado) |
| `/call_tool` | POST | Llama directamente a la herramienta MCP especificada, cuerpo: `{"name":"...", "arguments":{...}}` |
| `/register_tool` | POST | Registra una herramienta personalizada, cuerpo: `{"name":"...", "description":"...", "category":"...", "webhook_url":"...", "parameters":{...}}` |
| `/unregister_tool` | POST | Elimina una herramienta personalizada registrada, cuerpo: `{"name":"..."}` |
| `/chat` | POST | Conversación en lenguaje natural, cuerpo: `{"text":"..."}` |
| `/health` | GET | Comprobación de estado |

## Guía de desarrollo secundario

### Modificar límites de articulaciones o preajustes

Los límites de articulaciones y las poses preestablecidas se definen en los objetos `jointDefs` y `presets` al principio de `rebot-sim.js`. Después de modificarlos, actualiza la página para que surtan efecto; no es necesario recompilar. Ten en cuenta que los límites de articulaciones deben ser coherentes con `<limit>` en el URDF, de lo contrario el modelo web y el comportamiento de ROS no coincidirán.

### Añadir una interfaz ROS personalizada

Si necesitas suscribirte a un nuevo tópico o llamar a un nuevo servicio, añádelo a `REQUIRED_TOPICS` o `REQUIRED_SERVICES` en `rebot-ros-ui.js`, y llama a `client.subscribe()` o `client.callService()` en los eventos de los botones. `ReBotRosClient` ya encapsula el protocolo rosbridge, por lo que no necesitas escribir la comunicación WebSocket a mano.

### Ampliar herramientas LLM

Las herramientas LLM están definidas por el MCP Server en `rebotarm_agent`. Añadir una nueva herramienta requiere implementarla en el paquete `rebotarm_agent` en el espacio de trabajo ROS2; después de recompilar, el text-agent la expone automáticamente. No se necesitan cambios en la parte web; el proceso de llamada de herramientas se devuelve a través del campo `events` de `/api/llm/chat` y se representa.

### Modificar las mallas de la pinza web

Los STLs de la pinza solo para web están en `split_meshes/grouped_gripper/`, incluyendo `gripper_base.stl`, `gripper_hardware.stl`, `left_finger.stl` y `right_finger.stl`. Sustituye estos archivos y actualiza la página. No añadas una segunda copia de `urdf/` o `meshes/` en el directorio web; en tiempo de ejecución solo se usan estos cuatro STLs de la pinza.

### Modificar la dirección de conexión de rosbridge

La dirección WebSocket de rosbridge la introduce manualmente el usuario en el panel "ROS2 Bridge" de la página web; no está codificada de forma fija por defecto. Para cambiar la dirección predeterminada o preestablecida:

- `reBotArm_simulator-DM/public/js/ros/rebot-ros-client.js` (el valor predeterminado del cliente está vacío y lo proporciona el cuadro de entrada)
- `reBotArm_simulator-DM/public/js/ros/rebot-ros-ui.js` (lee la última dirección desde `localStorage`)

La página intenta cargar la última dirección guardada cuando el cuadro de entrada está vacío. Modifica el valor predeterminado o introduce directamente la dirección real en el panel de conexión web.

<details>
<summary><b>Referencia rápida de archivos clave</b> (haz clic para expandir)</summary>


| Archivo | Propósito |
|---|---|
| `reBotArm_simulator-DM/server.js` | Servidor estático Node.js + proxy LLM |
| `reBotArm_simulator-DM/package.json` | Scripts npm (start / dev) |
| `reBotArm_simulator-DM/.env` | Configuración de puerto y destino del proxy |
| `reBotArm_simulator-DM/public/index.html` | Entrada de la aplicación de una sola página y diseño del panel de control |
| `reBotArm_simulator-DM/public/css/rebot-sim.css` | Estilos de tema oscuro |
| `reBotArm_simulator-DM/public/js/rebot-sim.js` | Escena 3D, IK, enseñanza, núcleo de arrastre |
| `reBotArm_simulator-DM/public/js/rebot-llm.js` | Interfaz de chat LLM |
| `reBotArm_simulator-DM/public/js/ros/rebot-ros-client.js` | Cliente WebSocket de rosbridge |
| `reBotArm_simulator-DM/public/js/ros/rebot-ros-ui.js` | Interfaz del panel de control ROS y lógica de negocio |
| `reBotArm_simulator-DM/public/lib/three-r128.min.js` | Motor de renderizado Three.js |
| `reBotArm_simulator-DM/public/lib/STLLoader-umd.js` | Cargador de mallas STL |
| `reBotArm_simulator-DM/public/lib/URDFLoader.js` | Analizador URDF |
| `reBotArm_simulator-DM/split_meshes/grouped_gripper/` | STLs de la pinza solo para web (4 archivos) |

</details>

## Preguntas frecuentes (FAQ)

### 1. Después de abrir el navegador, sigue mostrando "Loading Rebot_ARM-B601-DM arm model..."

Si la página se queda atascada en la superposición de carga, la solicitud del URDF o de la malla STL ha fallado. Abre el panel Network en las herramientas de desarrollador del navegador y comprueba si `/api/urdf` y `/api/description/meshes/*.STL` devuelven 200. Causas comunes:

- La ruta `BRINGUP_DIR` en `server.js` se resuelve incorrectamente (el directorio web se movió a una ubicación que no es monorepo), por lo que no se puede encontrar `src/rebotarm_bringup/description/`;
- `package://rebotarm_bringup/...` en el URDF no se puede mapear; confirma que `loader.packages` apunta a `${origin}/api`;
- Falta el archivo STL o la coincidencia de mayúsculas y minúsculas de la ruta no es correcta (Linux distingue entre mayúsculas y minúsculas).

### 2. Después de conectar a ROS, el estado permanece en "offline"

Comprueba en este orden:

- Que rosbridge se esté ejecutando en el lado de Ubuntu y escuchando en `0.0.0.0:9090` (no en `127.0.0.1`);
- Que el host web pueda alcanzar el puerto 9090 de Ubuntu (firewall, modo de red de la VM);
- Que la dirección WebSocket comience con `ws://` (como `ws://localhost:9090`);

### 3. El deslizador de articulaciones no puede controlar el robot real

Controlar el robot real desde la página web requiere tres pasos de desbloqueo:

1. Conectarse a ROS en el panel "ROS2 Bridge" (el WebSocket se conecta al rosbridge del controlador del robot real);
2. Marcar "Allow the web to send control to the real arm" → hacer clic en "OK" en el cuadro de confirmación;
3. Hacer clic en el botón "Enable".

Los tres pasos son necesarios. Cuando el bloqueo de control no está marcado, arrastrar el deslizador solo mueve el modelo 3D y no envía comandos ROS.

### 4. La pinza no se sincroniza con la web

La `position` de `/rebotarm/gripper/state` debe estar en metros (0~0.09), no en radianes. Si no se sincroniza, comprueba si `ros_publishers.py` en el controlador ROS2 usa `gripper_position_m()`. La página web también infiere la apertura de la pinza a partir de `finger_left` en `/rebotarm/joint_states` como fuente de retroalimentación alternativa.

### 5. El asistente LLM no se inicia

Cuando la página web muestra "Connection failed", confirma que el servicio HTTP del text-agent se está ejecutando en la VM de Ubuntu:

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
./scripts/start_rebotarm_text_agent_http.sh
```

Y confirma que `REBOTARM_TEXT_AGENT_URL` en `.env` apunta a la IP y puerto correctos de la VM (por defecto `8082`). La página primero llama a `/api/llm/health` para hacer un health-check; si falla, muestra el error específico en el área de mensajes.

### 6. La demostración de agarre visual no funciona

El agarre visual depende de toda la pila de simulación física. Comprueba:

- Si la cámara RGB cenital de MuJoCo se está ejecutando y `/rebotarm/mujoco/overhead_rgb/image_raw` tiene una imagen;
- Si el detector de color se está ejecutando y `/rebotarm/vision/color_blocks/detections` tiene resultados;
- Si la vista previa de la cámara web muestra un fotograma y el estado de reconocimiento de color muestra "N / target X";
- Si la selección del color objetivo es correcta (auto/rojo/amarillo/azul).

### 7. Los cambios en el código del front-end no surten efecto

Los recursos del front-end son servidos de forma estática por Node.js; después de cambiar, actualiza el navegador. La versión actual no registra un Service Worker, por lo que no hay caché sin conexión que impida que se actualice la versión antigua. Si el navegador sigue mostrando contenido antiguo, usa una actualización forzada (Ctrl+Shift+R) o borra la caché normal.

### 8. "URDFLoader" o "THREE" no encontrados

Son bibliotecas de terceros bajo `public/lib/`, cargadas por `index.html` mediante etiquetas `<script>`. Confirma:

- `public/lib/three-r128.min.js`, `public/lib/URDFLoader.js` y `public/lib/STLLoader-umd.js` existen;
- Las rutas de las etiquetas `<script>` en `index.html` son correctas, y el orden de carga es Three.js → STLLoader → URDFLoader → scripts de negocio;
- No hay errores 404 ni errores de orden de carga en la consola del navegador.

### 9. `setup.sh` informa de un error o la instalación falla

`setup.sh` es idempotente; los componentes que fallan se enumeran en el `Failed or still missing` del resumen final. Casos comunes:

- Fuente apt de ROS no configurada: el instalador descarga automáticamente el paquete `ros2-apt-source` y añade la fuente, lo cual requiere sudo;
- Incompatibilidad de versión de Python: Jazzy necesita 3.12, Humble necesita 3.10; una incompatibilidad se enumera en `Version/platform mismatches`;
- Fallo al clonar el SDK: comprueba la red y la accesibilidad a GitHub, o clona manualmente en `reBotArm_ros2_DM/third_party/reBotArm_control_py/` y vuelve a ejecutar;
- `colcon build` falló: comprueba si `rosdep` está inicializado (`sudo rosdep init && rosdep update`), luego vuelve a ejecutar `./setup.sh`.

## Contacto

- Soporte técnico: [Submit an Issue](https://github.com/Seeed-Projects/reBot-DevArm/issues)
- Repositorio del proyecto: [Github](https://github.com/Seeed-Projects/reBot-DevArm)
- Foro: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## Referencias

- [Guía de inicio rápido de reBot Arm B601-DM](https://wiki.seeedstudio.com/es/rebot_b601_dm_getting_started/)
- [Integración de reBot Arm B601-DM con ROS2](https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_ros2_integration/)
- [Demostración de agarre visual de reBot Arm B601-DM](https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_grasping_demo/)
- [reBot Arm B601-DM Pinocchio y MeshCat](https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_pinocchio_meshcat/)
- [Tutorial de reBot Arm B601-DM LeRobot](https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_lerobot/)
- [Documentación de ROS2 Jazzy](https://docs.ros.org/en/jazzy/)
- [Documentación de rosbridge_suite](http://wiki.ros.org/rosbridge_suite)
- [Documentación de Three.js](https://threejs.org/docs/)
- [URDFLoader (gkjohnson)](https://github.com/gkjohnson/urdf-loaders)
- [Model Context Protocol](https://modelcontextprotocol.io/)
