---
description: Configura la consola web B601-RS con los espacios de nombres actuales de hardware y simulación, agarre visual MuJoCo, el DeepSeek Agent predeterminado y la teleoperación Arm102 Leader con pasos de calibración y recuperación.
title: "Control web de reBot-RS: MuJoCo, DeepSeek y teleoperación Leader"
keywords:
  - reBot Arm
  - B601-RS
  - Simulador web
  - Three.js
  - ROS 2
  - RobStride
  - SocketCAN
  - MuJoCo
  - LLM
  - MCP
  - DeepSeek
  - Teleoperación Leader
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_web_simulator_en.png
slug: /rebot_arm_b601_rs_web_simulator_developer_guide
last_update:
  date: 2026-11-03
  author: Yang-Ci
translation:
  skip: [zh-CN]
createdAt: '2026-08-13'
updatedAt: '2026-11-03'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_web_simulator_developer_guide/
---
import '/src/css/rebot-wiki-style.css';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm B601-RS Gemelo Digital y Pila de Control

<p align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="reBot Arm B601-RS" />
</p>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>Consigue uno ahora</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="Licencia: Apache 2.0" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Jazzy-blue.svg" alt="ROS 2 Jazzy" />
    <img src="https://img.shields.io/badge/Node.js-18%2B-green.svg" alt="Node.js 18+" />
    <img src="https://img.shields.io/badge/Three.js-r128-orange.svg" alt="Three.js r128" />
    <img src="https://img.shields.io/badge/Version-v1.0.0-brightgreen.svg" alt="Versión v1.0.0" />
    <img src="https://img.shields.io/badge/Platform-Cross%20Platform-lightgrey.svg" alt="Plataforma" />
</p>

<p align="center">
  <strong>Visualización con Three.js · ROS 2 · Simulación MuJoCo · DeepSeek/MCP · Teleoperación Leader</strong>
</p>

La pila de Gemelo Digital y Control de reBot Arm B601-RS integra una consola web Three.js, un driver ROS 2 para el robot real, una escena de dinámica MuJoCo específica para RS, detección por visión, trayectoria y cinemática inversa, un Agent en lenguaje natural que usa DeepSeek por defecto y teleoperación Arm102 Leader. Esta guía sigue el proyecto actual a través de la instalación, simulación, control web, configuración del Agent y operación líder/seguidor.

El robot real usa `/rebot_arm_rs`; la simulación usa `/rebot_arm_rs_sim`. Los usuarios de versiones antiguas deben ejecutar primero `git pull --ff-only` en el directorio del proyecto para actualizar el repositorio, luego actualizar los scripts personalizados, los prefijos de la interfaz ROS y la configuración del Agent y reiniciar el controlador, rosbridge y la consola web. Cambiar el selector de destino en la web no configura el espacio de nombres del backend.

<GitHubStarButton owner="Yang-Ci" repo="ReBot_Arm_DigitalTwin_RS" />

## Funciones del proyecto

1. **Modelo de brazo específico para RS**

   La consola web y ROS 2 usan `ReBot_Arm_RS.urdf` y sus mallas STL correspondientes. El servidor web lee primero el modelo desde el espacio de trabajo `rebotarm_ros2_RS` y mantiene una copia local de respaldo.

2. **Enlace RobStride + SocketCAN con el robot real**

   El robot real usa por defecto la interfaz Linux SocketCAN `can0` a `1 Mbps`. El controlador se comunica con los motores RobStride a través de `reBotArm_control_py`.

3. **Control en línea MIT a 125 Hz**

   La consola web actualiza los objetivos hasta 60 Hz, mientras que el controlador del robot real genera una referencia en línea limitada por velocidad, aceleración y jerk a 125 Hz y envía comandos MIT `q/dq/kp/kd/tau`. Las actualizaciones de objetivo desde la web no bloquean el bucle de control de los motores.

4. **Aislamiento de espacios de nombres para robot real y simulación**

   El robot real usa `/rebot_arm_rs` por defecto y la simulación usa `/rebot_arm_rs_sim`. La misma consola web puede cambiar los objetivos de control, y puedes ejecutar el robot real y el Fake Driver al mismo tiempo para comparar interfaces.

5. **Escena MuJoCo específica para RS**

   MuJoCo admite modos `physics` y `kinematic`. El modo `physics` predeterminado incluye gravedad, contacto, objetos sobre la mesa, una cámara cenital, detección de color y validación física del agarre.

6. **Animación web basada en retroalimentación**

   En modo de robot real, el modelo sólido muestra la retroalimentación real y el modelo translúcido muestra el objetivo de control. La consola web aplica filtrado paso bajo adaptativo, una zona muerta de retroalimentación e interpolación de visualización a las mediciones de rosbridge para que la animación local no se confunda con la pose real del brazo.

7. **Máquina de estados de seguridad**

   El sistema arbitra trayectorias, compensación de gravedad, homing seguro y comandos web continuos. Deshabilitar desde una pose distinta de cero ejecuta primero un homing seguro y lo verifica; si la verificación falla, el brazo permanece habilitado para evitar que caiga de forma repentina.

8. **Agarre visual y Agent LLM/MCP**

   La escena de simulación proporciona objetos rojos, azules y amarillos con detección cenital, IK, agarre, validación de elevación y soporte para colocar. El punto de entrada en lenguaje natural usa por defecto DeepSeek `deepseek-flash`; las herramientas MCP también se pueden invocar de forma independiente.

9. **Teleoperación Arm102 Leader**

   El líder se conecta por USB/UART al host ROS. La consola web gestiona el escaneo, vista previa, desbloqueo, calibración y sesiones; el controlador ROS gestiona el mapeo, los límites de velocidad, la propiedad del control y las retenciones por timeout. El seguimiento relativo es el valor predeterminado, con seguimiento opcional del gripper y reajuste de base tras una pausa.

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

Puedes usar `localhost` cuando la consola web y ROS 2 se ejecutan en la misma máquina. Al acceder desde otro ordenador en la LAN, no introduzcas el `localhost` del propio navegador; usa la IP del host Ubuntu que ejecuta los servicios ROS 2.

El script de arranque del proyecto establece por defecto el rango de descubrimiento de ROS 2 en `LOCALHOST`, de modo que el roaming por Wi-Fi o los cambios de IP no dividan los nodos de la misma máquina en diferentes redes DDS. Esto no afecta al acceso a los puertos HTTP/WebSocket desde otros dispositivos. Para permitir que otro ordenador se una directamente al grafo ROS, establece el mismo valor en las terminales correspondientes:

```bash
export REBOTARM_ROS_DISCOVERY_RANGE=SUBNET
```

## Requisitos del entorno

| Elemento | Requisito recomendado |
| --- | --- |
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

<div className="rebot-step-flow">
<section className="rebot-step-item">
    <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

      #### Paso 1: Obtener el proyecto

      <p className="rebot-step-label">Paso 1</p>

```bash
git clone https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS.git ~/ReBot_Arm_DigitalTwin_RS
cd ~/ReBot_Arm_DigitalTwin_RS
```

Los comandos siguientes usan `~/ReBot_Arm_DigitalTwin_RS` como directorio del proyecto. Si tu directorio es diferente, sustituye las rutas en consecuencia.

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

      #### Paso 2: Comprobación de entorno de solo lectura

      <p className="rebot-step-label">Paso 2</p>

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
./setup.sh --check
```

Este comando solo comprueba el sistema y no modifica el entorno. Las comprobaciones incluyen:

- Versiones de Ubuntu, Python y Node.js;
- ROS 2, rosbridge, MoveIt y herramientas de compilación;
- Herramientas SocketCAN y `can0`;
- El entorno virtual de Python y módulos clave;
- Resultados de compilación del espacio de trabajo ROS 2;
- El `package.json` web y `.env`.

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

      #### Paso 3: Instalación y compilación con un clic

      <p className="rebot-step-label">Paso 3</p>

```bash
./setup.sh --yes
./rebotarm doctor
```

El script de instalación instala las dependencias que falten de ROS 2, Node.js, SocketCAN y compilación, crea `rebotarm_ros2_RS/.venv`, instala las dependencias de Python para el robot real RS, MuJoCo y el Agent, ejecuta rosdep y compila el espacio de trabajo ROS 2 con:

```bash
colcon build --symlink-install
```

El SDK de control y los modelos MuJoCo son rastreados por el repositorio principal como archivos ordinarios. No son submódulos de Git y no contienen repositorios Git anidados. Los archivos `.env`, SDK y modelos existentes no se restablecen mediante el script de instalación.

Si las dependencias del sistema ya están completas, solo necesitas preparar y recompilar el espacio de trabajo ROS:

```bash
./scripts/setup_rs_workspace.sh
```

Después de modificar paquetes de Python, normalmente esto es suficiente:

```bash
source scripts/rs_env.sh
cd rebotarm_ros2_RS
colcon build --symlink-install
```

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

      #### Paso 4: Configurar las variables de entorno web

      <p className="rebot-step-label">Paso 4</p>

En la primera instalación, `reBotArm_simulator-RS/.env` se crea a partir de `.env.example`. Campos clave:

```bash
PORT=3002
HTTPS=0
REBOTARM_TEXT_AGENT_URL=http://localhost:8082
REBOTARM_MCP_URL=http://localhost:8081/mcp
MOTORBRIDGE_WS_URL=ws://127.0.0.1:9002
MOTORBRIDGE_WS_TOKEN=
```

Si la consola web y ROS 2/Agent no están en la misma máquina, cambia las direcciones del proxy a la IP de la máquina backend. Las claves de API y los tokens solo deben almacenarse en variables de entorno o en el `.env` local no versionado.

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">5</span>
<div className="rebot-step-content">

      #### Paso 5 (Opcional): Configurar e iniciar el DeepSeek Agent predeterminado

      <p className="rebot-step-label">Paso 5 (Opcional)</p>

Para usar el asistente web de lenguaje natural, sigue “Launching the Project” más abajo para iniciar la simulación completa en la terminal 1 (`./rebotarm start rs_sim`) y la consola web en la terminal 2 (`./rebotarm start web`). Luego configura la clave de API e inicia el Agent en una tercera terminal:

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
export DEEPSEEK_API_KEY='your-key'
./scripts/start_rs_text_agent.sh
```

El modelo predeterminado es DeepSeek `deepseek-flash`; no es necesario sobrescribir el modelo. Si configuraste previamente otro modelo, revisa las antiguas variables de entorno `REBOTARM_LLM_*` para que no sobrescriban los valores predeterminados. Configura la clave de API solo en el servidor y mantenla fuera del repositorio.

Después de que aparezca `[text-agent-http] listening on http://0.0.0.0:8082/`, haz clic en “Connect AI assistant” en la consola web y envía “Query the arm status” para verificar la conexión. Consulta “DeepSeek / MCP Text Control” más abajo para el cambio de modelo, comprobaciones de estado y resolución de problemas.

</div>
</section>
</div>

## Puesta en marcha del proyecto

<Tabs defaultValue="sim" groupId="launch-mode" queryString>

<TabItem value="web" label="Demostración web pura">

Inicia solo el servidor web de Node.js, sin rosbridge ni ROS 2:

```bash
cd ~/ReBot_Arm_DigitalTwin_RS/reBotArm_simulator-RS
npm start
```

Abre el navegador en:

```text
http://localhost:3002
```

Este modo es adecuado para desarrollar el modelo 3D, la interfaz de usuario, las poses predefinidas y las funciones de front-end. Sin el backend de ROS 2, la consola web no puede controlar el robot real ni la escena completa de MuJoCo.

<!-- Image: rebot_rs_web_simulator_en.png -->

![Interfaz del simulador web reBot Arm B601-RS](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_web_simulator_en.png)
</TabItem>

<TabItem value="sim" label="Simulación completa RS MuJoCo">

La terminal 1 inicia Fake Driver, MuJoCo, cámara, detección, MCP Agent y rosbridge:

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
./rebotarm start rs_sim
```

La terminal 2 inicia la consola web:

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
./rebotarm start web
```

Abre `http://localhost:3002`, selecciona el objetivo de control "RS Simulation (`/rebot_arm_rs_sim`)" e introduce `ws://localhost:9090` como WebSocket de ROS.

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

> El agarre visual debe usar el modo `physics` predeterminado. El modo `kinematic` sincroniza directamente las posiciones articulares y no puede utilizarse para evaluar ganancias de control, estabilidad de contacto o fuerza de agarre.

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
cd ~/ReBot_Arm_DigitalTwin_RS
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE \
  ./rebotarm start rs
```

Inicia la consola web y rosbridge en la terminal 2:

```bash
./rebotarm start web
```

Abre `http://localhost:3002` y selecciona "RS Real Robot (`/rebot_arm_rs`)". Para la primera prueba, sigue este orden:

1. Comprueba que la consola web indica conectado, que el estado del brazo es normal y que no hay errores de motor.
2. Haz clic en habilitar.
3. Ajusta la velocidad a `0.2-0.4 rad/s`.
4. Mueve una articulación una pequeña cantidad cada vez y confirma dirección, límites y retroalimentación.
5. Luego prueba el arrastre TCP, trayectorias o compensación de gravedad.
6. Al terminar, realiza un homing seguro y deshabilita, luego pulsa `Ctrl+C` en la terminal del controlador.

No uses `Ctrl+Z` para pausar el controlador del robot real y no trates un botón web como un paro de emergencia físico. Si queda una instancia antigua del controlador, el script de arranque del robot real le pide a la instancia antigua que salga de forma segura y limpia los recursos residuales confirmados como pertenecientes a ese controlador.

<!-- Image: rebot_rs_real_robot_web_en.png -->

![Control web del robot real reBot Arm B601-RS](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_real_robot_web_en.png)
</TabItem>

<TabItem value="dual" label="Depuración dual real/Fake">

```bash
export REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE
./scripts/start_rs_dual.sh
```

Este script inicia:

- el robot real `/rebot_arm_rs`;
- el Fake Driver `/rebot_arm_rs_sim`;
- rosbridge `9090`.

Se utiliza para comparar interfaces, direcciones articulares y estado. No inicia la pila completa de MuJoCo, visión, Agent ni servidor web. Vuelve a confirmar el espacio de nombres seleccionado en la consola web antes de enviar comandos.

</TabItem>

</Tabs>

## Teleoperación con Leader

### Conexión e instalación

El Arm102 / 102-LD Leader se conecta por serie USB al **host Ubuntu que ejecuta ROS 2**. Si ROS se ejecuta en una máquina virtual, pasa el dispositivo USB del leader a esa VM. Un puerto COM en el ordenador del navegador no puede sustituir a un puerto serie en el host ROS.

```text
Arm102 Leader (servo IDs 0–6, UART 1 Mbps)
  -> ROS host USB serial / leader_worker.py
  -> LeaderTeleop: calibration, mapping, sessions, and status
  -> RS controller: control ownership, speed limits, and timeout holds
  -> Fake Driver / MuJoCo, or SocketCAN can0 / RS follower
```

Completa primero la instalación base. Detén el controlador antiguo, la simulación y rosbridge, luego instala las dependencias del Leader y recompila las interfaces:

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
bash scripts/setup_rs_leader.sh
```

El script reutiliza el entorno virtual de Python de ROS, instala `motorbridge-smart-servo==0.0.4` y `pyserial==3.5`, y recompila `rebotarm_msgs` y `rebotarmcontroller`. El entorno completo de entrenamiento LeRobot no es necesario para esta función. Reinicia el controlador, rosbridge y la consola web, luego actualiza el navegador forzando la recarga.

Comprueba en una nueva terminal:

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
source scripts/rs_env.sh
python -c 'from motorbridge_smart_servo import FashionStarServo; from serial.tools import list_ports; print([(p.device, p.description) for p in list_ports.comports()])'
ros2 interface show rebotarm_msgs/srv/LeaderControl
```

Usa `/dev/ttyUSB0`, `/dev/ttyACM0` o una ruta estable `/dev/serial/by-id/...`. En caso de error de permisos, ejecuta el siguiente comando e inicia sesión de nuevo antes de reintentar:

```bash
sudo usermod -aG dialout "$USER"
```

### Verificar el flujo de trabajo en simulación

Ejecuta en dos terminales separadas:

```bash
# Terminal 1
./rebotarm start rs_sim
```

```bash
# Terminal 2
./rebotarm start web
```

Selecciona el modo de control ROS y “RS simulation (`/rebot_arm_rs_sim`)”, luego conéctate a rosbridge. En la tarjeta “Leader teleoperation”, borra cualquier puerto antiguo, haz clic en “Scan leader” y selecciona `mock`; también puedes introducir `mock` directamente en el campo de puerto. Sigue los pasos de conexión, desbloqueo, calibración y seguimiento que aparecen a continuación, luego prueba pausar, reanudar y detener.

Solo el Fake Driver permite `mock`; el hardware RS real lo rechaza. El modo mock verifica la interfaz de usuario, el mapeo y el flujo de trabajo de la sesión. No valida el enlace serie real, las direcciones articulares ni la seguridad del hardware.

### Conectar, calibrar y comenzar el seguimiento

Para pruebas de hardware, lanza `/rebot_arm_rs` y la consola web usando las instrucciones del robot real. Habilita el seguidor, confirma que está en `IDLE` y habilita el bloqueo de control ROS. Detén trayectorias, seguimiento de mano y compensación de gravedad; devuelve el efector final al modo de mantenimiento de posición. No ejecutes un proceso de teleoperación LeRobot separado que acceda al mismo `can0`.

1. **Escanear y conectar.** Escanea los puertos serie en el host ROS en la tarjeta “Leader teleoperation”. Un leader completo responde con los siete IDs de servo `0–6`. Selecciona el dispositivo y haz clic en “Connect”, o introduce su ruta serie manualmente.
2. **Comprobar la vista previa de solo lectura.** El modelo Arm102 / 102-LD, los siete ángulos, la tasa de muestreo y el retardo aparecen mientras el seguidor mantiene su pose actual. Arrastra para rotar; usa la rueda o un gesto de dos dedos para hacer zoom. “Reset view” solo cambia la vista mostrada.
3. **Desbloquear y calibrar el cero del leader.** Sujeta el leader, haz clic en “Unlock leader”, colócalo en la [pose de calibración del Arm102](/es/rebot_arm_b601_rs_lerobot/) y cierra su pinza. Marca “Leader is at reference zero with gripper closed”, luego haz clic en “Confirm and set leader zero”. Mueve ligeramente cada eje y verifica las direcciones J1–J6 y la apertura del anillo de dedo J7 con respecto a la vista previa.
4. **Establecer parámetros iniciales.** Ajusta la velocidad objetivo a `0.1 rad/s`, desmarca “Follow gripper” y deja “Absolute follow” sin marcar. El rango de velocidad de hardware actual del Leader es `0.05–1.0 rad/s`, independiente del ajuste de velocidad articular normal de la web.
5. **Iniciar el seguimiento relativo.** Haz clic en “Start following”. El modo relativo establece desplazamientos a partir de las poses iniciales de ambos brazos; el seguidor no debería saltar a la pose absoluta del leader en el primer fotograma. Comienza con pequeños movimientos de J6, luego comprueba individualmente las direcciones, la retroalimentación y los límites de J1–J5.
6. **Probar pausa y reanudación.** Mueve el leader después de hacer clic en “Pause and hold”; el seguidor debería mantenerse. En modo relativo, “Resume” vuelve a basar los brazos en sus poses actuales en lugar de ponerse al día con los movimientos realizados durante la pausa.
7. **Liberar el control antes de probar la pinza.** Haz clic en “Stop and release control” y confirma que los deslizadores normales vuelven a funcionar. Después de validar los seis ejes, inicia otra sesión con el seguimiento de la pinza habilitado y comprueba su dirección de apertura y puntos extremos con movimientos pequeños.

:::warning Calibración del líder y cero del seguidor

“Confirm and set leader zero” calibra el Arm102 Leader. El servicio RS `set_zero` reescribe los puntos cero de los motores seguidores. No uses el ajuste a cero del seguidor para corregir la vista previa del líder ni el desfase de seguimiento. El seguimiento absoluto requiere que los brazos estén alineados primero; el controlador rechaza diferencias de pose excesivas. Mantén el modo relativo predeterminado para el uso inicial.

:::

### Pausa, parada y recuperación de conexión

- **Pausar y mantener:** el seguidor mantiene su pose actual mientras la sesión conserva el control. El modo relativo se reajusta al reanudar.
- **Detener y liberar el control:** el seguimiento termina y el seguidor mantiene su pose actual. Los deslizadores, trayectorias, compensación de gravedad, homing seguro y desactivación pasan a estar disponibles después de liberar. Ni la pausa ni la parada eliminan directamente el par del motor.
- **Muestras obsoletas, extracción del USB del líder o tiempo de espera del latido del navegador:** el controlador deja de avanzar los objetivos y mantiene; la interfaz informa de un fallo o datos obsoletos. La reconexión no reanuda el seguimiento automáticamente. Comprueba la conexión, recalibra e inicia de nuevo explícitamente.
- **Otra página posee la sesión:** detén y libera el control en la página original. Si se cerró inesperadamente, espera al tiempo de espera del latido para liberar la sesión.

La aceptación inicial del hardware debe incluir extracción del USB, desconexión del navegador, movimiento del líder mientras está en pausa y recuperación de los deslizadores después de detener. El proyecto incluye pruebas simuladas y de políticas de control; el enlace de hardware real Leader → RS aún requiere aceptación in situ.

### Frecuencia de seguimiento y límites de velocidad

El muestreo UART del líder apunta a `60 Hz`; la frecuencia real depende del tiempo de lectura serie. Cada nueva muestra válida actualiza el objetivo. El bucle MIT de hardware sigue el último objetivo a `125 Hz` con límites de velocidad y feedforward de gravedad en caché, sin añadir el suavizado de segundo orden ni el filtro de sacudidas del objetivo web ordinario. El seguidor aún puede quedarse atrás cuando el líder se mueve más rápido que el límite de velocidad seleccionado.

El seguimiento del líder usa ganancias `leader_mit_kp` / `leader_mit_kd` separadas y `v_des=0` para los seis ejes. Pausar o detener restaura las ganancias de mantenimiento ordinarias. La velocidad de referencia del gripper es `min(6 × teleoperation speed, leader_gripper_velocity_limit)`, actualmente limitada a `3 rad/s` por configuración. Los límites de articulación, tiempos de espera de realimentación y el watchdog de sesión permanecen activos. Consulta “Key Control Parameters” más abajo para la ubicación de la configuración.

### Inspeccionar el estado del líder

```bash
source scripts/rs_env.sh
ros2 topic echo /rebot_arm_rs/leader/status --once
```

Para simulación, usa `/rebot_arm_rs_sim/leader/status`. Comprueba `state`, `calibrated`, `following`, `paused`, `sample_hz`, `sample_age` y `angles_deg`. Los ángulos del líder mostrados están en grados; `targets_rad` contiene los seis objetivos de articulaciones del seguidor en radianes.

## Línea de comandos unificada

| Command | Description |
| --- | --- |
| `./rebotarm doctor` | Comprobación de entorno de solo lectura, equivalente a `./setup.sh --check` |
| `./rebotarm start web` | Inicia o reutiliza rosbridge e inicia el servidor web |
| `./rebotarm start rs_sim` | Inicia toda la pila de simulación RS MuJoCo |
| `./rebotarm start rs` | Inicia el controlador RS del robot real; se requiere la variable de confirmación de hardware |
| `./rebotarm status` | Ver procesos registrados, puertos y `can0` |
| `./rebotarm stop` | Detiene los procesos hijo web/rosbridge registrados por `start web` |

Los procesos de simulación y robot real que se ejecutan en primer plano deben finalizarse normalmente con `Ctrl+C` en sus propios terminales.

## Arquitectura del proyecto

```text
ReBot_Arm_DigitalTwin_RS/
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

Un nuevo objetivo web solo actualiza el punto final de la trayectoria en línea. Incluso si el navegador deja temporalmente de enviar el siguiente fotograma, el bucle de control de 125 Hz sigue generando una referencia continua. La profundidad de QoS del comando es 1, por lo que un nuevo objetivo sobrescribe el objetivo antiguo no procesado y evita reproducir una cola de posiciones después de que termine el arrastre.

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

El modelo translúcido representa el objetivo de control. La sombra del objetivo desaparece automáticamente cuando los errores de articulaciones y gripper son lo suficientemente pequeños. El filtrado de visualización solo afecta a la imagen web y no cambia los objetivos enviados a los motores.

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

| Mode | Namespace | Web model source |
| --- | --- | --- |
| RS real robot | `/rebot_arm_rs` | Real-robot `/joint_states` feedback |
| RS simulation | `/rebot_arm_rs_sim` | Usa primero el estado real de MuJoCo |

Después de cambiar de modo, la consola web recrea el cliente rosbridge y las rutas de interfaz según el espacio de nombres de destino. La simulación refleja el estado real de MuJoCo por defecto; el modo hardware muestra la realimentación medida y un modelo objetivo translúcido.

Usa estos comandos de solo lectura para comprobar los objetivos disponibles:

```bash
source scripts/rs_env.sh
ros2 topic list | grep /rebot_arm_rs
ros2 service list | grep /rebot_arm_rs
```

Comprueba el prefijo completo: `/rebot_arm_rs` es hardware y `/rebot_arm_rs_sim` es simulación. La presencia de `rs` por sí sola no identifica el objetivo.

### Articulaciones y gripper

- J1-J6 se controlan en radianes, con límites coherentes con el URDF de RS.
- El límite de velocidad de articulaciones en la web para el robot real va de `0.05–1.50 rad/s`; comienza en `0.2–0.4 rad/s`. Este panel está oculto en simulación. La teleoperación con líder tiene un ajuste de velocidad separado; comienza en `0.1 rad/s`.
- J1-J6 usan un amortiguamiento de deslizadores de `30 ms` y una zona muerta de entrada de `1 deg` por defecto; la posición final se fija de forma forzada cuando sueltas el deslizador.
- J7/el gripper se muestra como anchura de apertura en la web, con un rango de `0-71.5 mm`.
- El gripper se convierte al rango de motor RS `0-5 rad` al publicar, y la realimentación ROS se convierte de nuevo a milímetros.
- J7 no pasa por el amortiguamiento en radianes ni la zona muerta de entrada de J1-J6; solo se envía el último objetivo por fotograma de renderizado del navegador.

### Arrastre del TCP e IK

La consola web usa mínimos cuadrados amortiguados (DLS) para resolver objetivos de TCP. La versión RS adapta el amortiguamiento según el nivel de singularidad y luego envía la solución de articulaciones a través de la misma cadena de control en línea MIT.

La escena Three.js de la web usa Y hacia arriba y ROS usa Z hacia arriba. La lógica de conversión de coordenadas está en `rebot-sim.js`; al ampliar funciones de pose, reutiliza la conversión existente en lugar de intercambiar directamente valores de formularios.

La entrada de pose usa metros: X es hacia delante, Y es hacia la izquierda y Z es hacia arriba. Si un objetivo es inalcanzable, primero aumenta Z o reduce la distancia horizontal, luego comprueba las restricciones de orientación y los límites de articulaciones.

### Enseñanza y reproducción de trayectorias

La consola web puede grabar trayectorias de articulaciones y llamar a:

```text
/<namespace>/follow_joint_trajectory
```

El servidor de acciones RS del robot real usa referencias continuas de posición/velocidad cúbicas de Hermite monótonas y amplía automáticamente los segmentos de trayectoria que son demasiado cortos, manteniendo las velocidades de trayectoria ordinarias del robot real por debajo de aproximadamente `0.60 rad/s`. Los llamadores deben esperar el resultado de la acción o la realimentación del robot real y no deben finalizar la animación de reproducción antes de tiempo según la duración original de la petición.

### Habilitar, Homing Seguro y Deshabilitar

- El controlador del robot real debe habilitarse después de cada inicio.
- `safe_home` vuelve suavemente a cero y valida el ángulo y la velocidad.
- Al hacer clic en deshabilitar desde una pose distinta de cero, primero se entra en `SAFE_HOMING`.
- Si la validación de homing falla, los motores permanecen habilitados y se devuelve un resultado de fallo.
- `set_zero` reescribe el punto cero del motor y no es un botón de homing normal. Llámalo solo cuando la estructura mecánica esté realmente en la pose calibrada.

### Compensación de Gravedad

La compensación de gravedad RS comienza desde la pose medida y realiza una transición suave de las ganancias. Los inicios repetidos son idempotentes; al detenerse mantiene la última posición medida. La pinza usa por defecto asistencia de movimiento de baja resistencia y vuelve a mantener la posición cuando la compensación se detiene. Retira los objetos sujetos y mantén los dedos alejados antes de iniciar; detén la compensación antes de trayectorias, agarres o seguimiento con Leader.

Los comandos web de articulaciones, TCP, trayectoria y pinza se rechazan durante la compensación de gravedad. Servicios relacionados:

```text
/<namespace>/gravity_compensation/start
/<namespace>/gravity_compensation/stop
/<namespace>/gravity_compensation/status
```

## Interfaces ROS 2

Los ejemplos siguientes usan el robot real `/rebot_arm_rs`. Para simulación, reemplaza el prefijo por `/rebot_arm_rs_sim`.

### Tópicos de Estado

| Tópico | Tipo | Descripción |
| --- | --- | --- |
| `/rebot_arm_rs/joint_states` | `sensor_msgs/msg/JointState` | Estado unificado de seis ejes y pinza |
| `/rebot_arm_rs/joints/<name>/state` | `rebotarm_msgs/msg/JointMotorState` | Posición, velocidad, par y código de estado de un solo motor |
| `/rebot_arm_rs/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | Estado bruto del motor de la pinza |
| `/rebot_arm_rs/control_target` | `sensor_msgs/msg/JointState` | Objetivo final desde la consola web o la capa de acciones |
| `/rebot_arm_rs/control_reference` | `sensor_msgs/msg/JointState` | Muestra ROS de la referencia de trayectoria en línea de 125 Hz; `effort` transporta la aceleración de referencia |
| `/rebot_arm_rs/arm_status` | `rebotarm_msgs/msg/ArmStatus` | Estado de habilitación, modo, máquina de estados y códigos de error |
| `/rebot_arm_rs/leader/status` | `rebotarm_msgs/msg/LeaderStatus` | Conexión, calibración, sesión, ángulos y estado de muestreo de Leader |

### Tópicos de Comandos de Bajo Nivel

| Tópico | Tipo | Descripción |
| --- | --- | --- |
| `/rebot_arm_rs/joints/<joint1..joint6>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando de articulación predeterminado desde la consola web para el robot real |
| `/rebot_arm_rs/joints/<joint1..joint6>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando de posición-velocidad |
| `/rebot_arm_rs/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando MIT de la pinza RS |
| `/rebot_arm_rs/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando de posición-velocidad de la pinza |
| `/rebot_arm_rs/mujoco/target_pose` | `geometry_msgs/msg/PoseStamped` | Pose objetivo del TCP |

Antes de publicar tú mismo comandos de bajo nivel, revisa `arm_status.state_machine`. No interrumpas el control durante `GRAVITY_COMP`, `SAFE_HOMING`, la ejecución de trayectorias o una sesión activa de Leader.

### Servicios

| Servicio | Tipo | Descripción |
| --- | --- | --- |
| `/rebot_arm_rs/leader/control` | `rebotarm_msgs/srv/LeaderControl` | Escanear, conectar, desbloquear, calibrar, seguir y gestionar sesiones |
| `/rebot_arm_rs/enable` | `std_srvs/srv/Trigger` | Habilitar el brazo |
| `/rebot_arm_rs/disable` | `std_srvs/srv/Trigger` | Deshabilitar de forma segura; hace homing primero cuando es necesario |
| `/rebot_arm_rs/safe_home` | `std_srvs/srv/Trigger` | Homing seguro con validación |
| `/rebot_arm_rs/set_zero` | `rebotarm_msgs/srv/SetZero` | Escribir el punto cero del motor; usar con precaución |
| `/rebot_arm_rs/gravity_compensation/start` | `std_srvs/srv/Trigger` | Iniciar compensación de gravedad |
| `/rebot_arm_rs/gravity_compensation/stop` | `std_srvs/srv/Trigger` | Detener compensación de gravedad |
| `/rebot_arm_rs/gravity_compensation/status` | `std_srvs/srv/Trigger` | Consultar el estado de la compensación de gravedad |
| `/rebot_arm_rs/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | Resolución de IK de pose |
| `/rebot_arm_rs/gripper/set` | `rebotarm_msgs/srv/SetGripper` | Control de posición de la pinza |
| `/rebot_arm_rs/gripper/open` | `rebotarm_msgs/srv/GripperCommand` | Abrir la pinza |
| `/rebot_arm_rs/gripper/close` | `rebotarm_msgs/srv/GripperCommand` | Cerrar la pinza |

Ejemplo:

```bash
source scripts/rs_env.sh
ros2 service call /rebot_arm_rs/gravity_compensation/status std_srvs/srv/Trigger '{}'
ros2 service call /rebot_arm_rs/safe_home std_srvs/srv/Trigger '{}'
```

### Acciones

| Acción | Tipo | Descripción |
| --- | --- | --- |
| `/rebot_arm_rs/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | Trayectoria de articulaciones |
| `/rebot_arm_rs/gripper/command` | `control_msgs/action/GripperCommand` | Acción de la pinza |
| `/rebot_arm_rs/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | Movimiento de pose cartesiana |

### Interfaces de MuJoCo y Visión

| Interfaz | Tipo/Uso |
| --- | --- |
| `/rebot_arm_rs_sim/mujoco/joint_states` | Estados reales de las articulaciones en MuJoCo |
| `/rebot_arm_rs_sim/mujoco/object_states` | Estados de objetos de la escena como JSON |
| `/rebot_arm_rs_sim/mujoco/overhead_rgb/image_raw` | Cámara RGB cenital |
| `/rebot_arm_rs_sim/vision/color_blocks/detections` | Detección de objetos por color en JSON |
| `/rebot_arm_rs_sim/mujoco/reset` | Reiniciar la simulación |
| `/rebot_arm_rs_sim/mujoco/record/start` | Iniciar grabación |
| `/rebot_arm_rs_sim/mujoco/record/stop` | Detener grabación |
| `/rebot_arm_rs_sim/mujoco/record/replay` | Reproducir una grabación |
| `/rebot_arm_rs_sim/mujoco/record/clear` | Borrar grabaciones |

## Agarre Visual

La simulación completa incluye por defecto un cubo rojo, un cuboide azul y un cilindro amarillo. La consola web puede seleccionar un color objetivo o elegir automáticamente, y luego realizar alineación, pre-agarre, descenso, cierre, elevación y colocación.

El éxito del agarre no se basa solo en la finalización de la trayectoria. El sistema también comprueba si el objeto de MuJoCo fue realmente levantado, evitando un informe de éxito falso cuando la pinza se cierra vacía o la trayectoria termina sin recoger el objeto.

Solucionar problemas de agarre visual:

```bash
source scripts/rs_env.sh
ros2 topic echo /rebot_arm_rs_sim/vision/color_blocks/detections --once
ros2 topic echo /rebot_arm_rs_sim/mujoco/object_states --once
ros2 service list | grep /rebot_arm_rs_sim/
```

Si la pinza se cierra pero no levanta el objeto:

- confirma que se usa el modo `physics`;
- comprueba si la cámara y la detección de color están publicando continuamente;
- revisa el ancho objetivo, la orientación y la altura de agarre;
- revisa en los registros la estabilidad del contacto y los resultados de validación de elevación física;
- evita iniciar múltiples solicitudes de agarre o IK al mismo tiempo.

## Control de Texto DeepSeek / MCP

### Funciones de los Tres Servicios

```text
Web rebot-llm.js
  -> Node.js /api/llm/chat
  -> Text Agent (:8082, default DeepSeek deepseek-flash)
  -> MCP Server (:8081/mcp, bound to a target namespace)
  -> ROS 2 service/action/topic
```

El servidor web, el MCP Server y el Text Agent son procesos separados. El `rs_sim` completo inicia el MCP Server por defecto. “Connect AI assistant” solo comprueba y se conecta al Text Agent; no puede iniciar el servicio de Python en Ubuntu. Los clientes MCP pueden llamar a las herramientas directamente sin un LLM.

### Iniciar el Agente DeepSeek Predeterminado

Inicia la simulación completa y la consola web, luego ejecuta en un tercer terminal:

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
export DEEPSEEK_API_KEY='your-key'
./scripts/start_rs_text_agent.sh
```

Valores predeterminados de la fuente actual:

| Ajuste | Predeterminado / uso |
|---|---|
| Endpoint de LLM | `https://api.deepseek.com` |
| Modelo | `deepseek-flash` |
| Clave de DeepSeek | `DEEPSEEK_API_KEY` |
| Endpoint de herramientas MCP | `http://127.0.0.1:8081/mcp` |
| Text Agent / Dashboard | `http://localhost:8082` |
| Espacio de nombres objetivo predeterminado | `/rebot_arm_rs_sim` |

Los valores previamente exportados de `REBOTARM_LLM_BASE_URL`, `REBOTARM_LLM_MODEL` o `REBOTARM_LLM_API_KEY` anulan los valores predeterminados. Borra los valores antiguos o establece explícitamente la configuración deseada antes de usar DeepSeek predeterminado. Mantén las claves reales en variables de entorno del lado del servidor o en configuración local no versionada.

Después de que aparezca `[text-agent-http] listening on http://0.0.0.0:8082/`, comprueba:

```bash
curl http://127.0.0.1:8082/health
```

Respuesta esperada:

```json
{"ok": true, "service": "rebotarm-text-agent"}
```

Esto confirma la accesibilidad HTTP. Haz clic en “Connect AI assistant” y envía una consulta de solo lectura para verificar la autenticación del modelo y el enlace MCP. Luego prueba comandos de movimiento en simulación:

```text
Query the arm status
Detect the colored blocks on the table
Open the gripper
Move to X=0.30 Y=0 Z=0.30
Grasp the red block
Return safely to zero
```

MCP `pick_color` mantiene el objeto después de un agarre exitoso. El botón web “Grasp into storage” ejecuta un flujo de trabajo separado con un comportamiento de colocación diferente.

### Cambiar el Modelo o la Dirección del Backend

Para usar otro servicio compatible con OpenAI, establece los tres valores en el terminal del Text Agent y reinícialo:

```bash
export REBOTARM_LLM_BASE_URL='https://<provider-host>/v1'
export REBOTARM_LLM_MODEL='<model-id>'
export REBOTARM_LLM_API_KEY='<api-key>'
./scripts/start_rs_text_agent.sh
```

Sustituye los marcadores de posición por valores de tu proveedor. `REBOTARM_MCP_URL` selecciona el endpoint MCP usado por el Text Agent.

Si el servidor web y el Agent se ejecutan en máquinas diferentes, actualiza `REBOTARM_TEXT_AGENT_URL` y `REBOTARM_MCP_URL` en `reBotArm_simulator-RS/.env` a las direcciones del backend y luego reinicia el servidor web. Si solo el navegador es remoto y los tres servicios permanecen en el mismo host Ubuntu, mantén las direcciones de proxy locales.

### Comprobar el Espacio de Nombres de MCP y los Permisos de Movimiento

El script de simulación inicia MCP con `arm_namespace:=rebot_arm_rs_sim motion_mode:=allow`. Un MCP Server lanzado manualmente usa por defecto `motion_mode:=locked`. Cambiar el objetivo web no reinicia MCP ni cambia su espacio de nombres. Cuando un script de inicio reutiliza un servicio existente en `8081`, comprueba también el objetivo de ese servicio.

Para la inspección con el robot real, detén el servicio MCP anterior y lánzalo por separado con el movimiento bloqueado:

```bash
source scripts/rs_env.sh
ros2 launch rebotarm_agent rebotarm_mcp.launch.py \
  arm_namespace:=rebot_arm_rs motion_mode:=locked
```

El Agente de Texto selecciona su servicio de herramientas por URL de MCP; el espacio de nombres de destino real proviene de los argumentos de lanzamiento de ese servicio MCP. Reinicia el Agente de Texto contra el servicio recién lanzado:

```bash
REBOTARM_MCP_URL=http://127.0.0.1:8081/mcp ./scripts/start_rs_text_agent.sh
```

Primero verifica el estado de solo lectura y luego sigue el flujo de trabajo de permisos de movimiento del backend. El control en lenguaje natural no puede omitir la máquina de estados de seguridad. Detén y libera una sesión de Leader activa antes de llamar a las herramientas de movimiento del Agente.

## Parámetros Clave de Control

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
  leader_mit_kp: [50, 50, 50, 30, 50, 50]
  leader_mit_kd: [3, 5, 5, 3, 4, 4]
  leader_gripper_velocity_limit: 3.0
  stream_acceleration_limit: 4.0
  stream_jerk_limit: 30.0
  stream_natural_frequency: 8.0
gravity_compensation:
  kp: 1.5
  kd: 1.0
```

Otras frecuencias predeterminadas:

| Capa | Frecuencia predeterminada | Descripción |
| --- | ---: | --- |
| Objetivo de articulación web | Hasta 60 Hz | Los deslizadores y la cinemática inversa TCP actualizan continuamente el objetivo |
| Consulta de sincronización de feedback del robot real | 20 Hz | Actualiza la caché de mediciones de RobStride |
| Estado del robot real en ROS | 60 Hz | Publica feedback, objetivo y referencia desde la caché |
| Control RS MIT | 125 Hz | Suavizado en línea y comandos de motor |
| Fake Driver | 100 Hz | Control y estado de simulación |
| Sincronización MuJoCo | 250 Hz | Sincronización de dinámica predeterminada |
| Estado de objeto MuJoCo | 30 Hz | Escena y Agente |
| Cámara cenital | 8 Hz | Imagen RGB |
| Detección de color | 10 Hz | Resultados de detección |

Antes de ajustar las ganancias, registra todo lo siguiente al mismo tiempo:

```text
/rebot_arm_rs/control_target
/rebot_arm_rs/control_reference
/rebot_arm_rs/joint_states
```

Si el objetivo es discontinuo, revisa la capa de entrada web; si la referencia es discontinua, revisa la trayectoria en línea; si la referencia es continua pero el feedback se pasa de largo, revisa las ganancias MIT, la carga, la fricción, la corriente y el aumento de temperatura; solo revisa el filtrado de feedback y los intervalos de llegada de rosbridge cuando solo la animación web presenta jitter.

## Guía de Desarrollo Secundario

### Modificar Límites de Articulación Web o Poses Preestablecidas

Archivo:

```text
reBotArm_simulator-RS/public/js/rebot-sim.js
```

Las definiciones de articulaciones están en `jointDefs` y las poses preestablecidas están en `presets`. Al modificar los límites de articulación, verifica juntos el URDF de RS, la configuración del SDK y los límites mecánicos reales; no cambies solo el rango de visualización en la web.

### Modificar Frecuencia, Filtrado y Amortiguamiento de Comandos Web

Archivo:

```text
reBotArm_simulator-RS/public/js/ros/rebot-ros-ui.js
```

Este archivo gestiona la limitación de frecuencia de comandos web, el filtrado de feedback del robot real, la zona muerta del feedback, la interpolación, la sombra del objetivo, los bloqueos de control y la lógica de visión. No compenses la latencia de animación web aumentando las ganancias MIT del robot real.

### Añadir Interfaces ROS Personalizadas

El contenedor del cliente se encuentra en:

```text
reBotArm_simulator-RS/public/js/ros/rebot-ros-client.js
```

Añade rutas de Topic, Service o Action en la capa de UI y llama a `subscribe()`, `callService()` o `sendActionGoal()` del cliente. Las interfaces siempre deben generarse desde el `namespace` actual para evitar enviar comandos de simulación al robot real.

### Modificar el URDF o Mesh de RS

Modelos principales de ROS 2:

```text
rebotarm_ros2_RS/src/rebotarm_bringup/description/urdf/ReBot_Arm_RS.urdf
rebotarm_ros2_RS/src/rebotarm_bringup/description/meshes_rs/
```

El servidor web lee primero los modelos anteriores. Si el directorio web se copia y ejecuta de forma independiente, utiliza:

```text
reBotArm_simulator-RS/description/urdf/ReBot_Arm_RS.urdf
reBotArm_simulator-RS/description/meshes_rs/
```

Mantén ambas copias sincronizadas al modificarlas y revisa las mayúsculas y minúsculas de los nombres de archivo en Linux.

### Modificar MuJoCo

| Archivo/directorio | Función |
| --- | --- |
| `rebotarm_ros2_RS/src/rebotarm_mujoco_rs/models/` | MJCF y STL de RS |
| `rebotarm_mujoco_rs/mujoco_sync.py` | Frecuencia de sincronización, dinámica y PD |
| `rebotarm_mujoco_rs/scene_camera.py` | Cámara cenital |
| `rebotarm_mujoco_rs/scene_detector.py` | Detección de color |
| `rebotarm_mujoco_rs/task_server.py` | Tareas, grabación y reproducción |
| `rebotarm_mujoco_rs/launch/mujoco_rs.launch.py` | Parámetros de lanzamiento |

### Modificar el Mapeo y Control de Leader

| Archivo | Propósito |
|---|---|
| `reBotArm_simulator-RS/public/js/ros/rebot-leader-ui.js` | Llamadas de servicio con espacio de nombres, suscripción de estado y latido del navegador |
| `reBotArm_simulator-RS/public/js/ros/leader-model.js` | Visualización del modelo Arm102 y mapeo de ángulos |
| `rebotarm_ros2_RS/src/rebotarmcontroller/rebotarmcontroller/leader_worker.py` | Muestreo UART y calibración en un proceso separado |
| `rebotarm_ros2_RS/src/rebotarmcontroller/rebotarmcontroller/leader_teleop.py` | Servicios ROS, estado e integración del mapeo líder/seguidor |
| `rebotarm_ros2_RS/src/rebotarmcontroller/rebotarmcontroller/leader_policy.py` | Mapeo, validez de muestras y política de sesión |
| `rebotarm_ros2_RS/src/rebotarmcontroller/rebotarmcontroller/hardware_manager.py` | Propiedad de hardware, seguimiento MIT, límites de velocidad y retención |

Los recursos del modelo Leader se encuentran en `reBotArm_simulator-RS/public/models/leader-arm102/`. Las direcciones de visualización del modelo y el mapeo de control del seguidor se mantienen por separado; no cambies los parámetros de dirección de hardware para corregir la vista previa. Valida el modo simulado, los timeouts, pausar/reanudar y la liberación de control antes de la aceptación de hardware de un solo eje y baja velocidad.

### Ampliar Herramientas MCP

El Servidor MCP se encuentra en:

```text
rebotarm_ros2_RS/src/rebotarm_agent/rebotarm_agent/rebotarm_mcp_server.py
```

Al añadir una herramienta:

1. define un esquema de entrada claro y sus unidades;
2. separa las herramientas de solo lectura de las herramientas de movimiento;
3. valida el espacio de nombres, el estado y el permiso de movimiento en las herramientas de movimiento;
4. llama al backend a través de ROS 2 Service/Action/Topic en lugar de omitir el controlador directamente;
5. recompila el workspace y prueba las rutas de error, timeout y cancelación en simulación.

## Comandos de Verificación

```bash
source scripts/rs_env.sh
python3 -m pytest rebotarm_ros2_RS/src/rebotarmcontroller/test -q

bash -n setup.sh rebotarm scripts/*.sh

node --check reBotArm_simulator-RS/server.js
node --check reBotArm_simulator-RS/public/js/rebot-sim.js
node --check reBotArm_simulator-RS/public/js/ros/rebot-ros-client.js
node --check reBotArm_simulator-RS/public/js/ros/rebot-ros-ui.js
node --check reBotArm_simulator-RS/public/js/rebot-llm.js
node --check reBotArm_simulator-RS/public/js/ros/rebot-leader-ui.js
node --check reBotArm_simulator-RS/public/js/ros/leader-model.js
node reBotArm_simulator-RS/scripts/ros-namespaces.test.js
```

Comprobaciones en tiempo de ejecución:

```bash
./rebotarm status
ros2 node list
ros2 topic list | grep /rebot_arm_rs
ros2 service list | grep /rebot_arm_rs
ros2 action list | grep /rebot_arm_rs
```

## FAQ

### 1. La página web se queda en la pantalla de carga del modelo

Abre el panel Network de las herramientas de desarrollador del navegador y comprueba si estas solicitudes devuelven `200`:

```text
/api/urdf
/api/description/meshes/*.STL
```

Causas comunes:

- el URDF o STL de RS no existe;
- el directorio web se movió solo y el modelo de respaldo está incompleto;
- el mapeo `package://` en el URDF es incorrecto;
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

1. La consola web está en el robot real RS `/rebot_arm_rs`.
2. El WebSocket de ROS está conectado.
3. El bloqueo de control web está habilitado.
4. El brazo está habilitado.
5. `arm_status` no está en `GRAVITY_COMP`, `TRAJ_RUNNING` o `SAFE_HOMING`.
6. No hay errores de CAN o de motor en el controlador del robot real.

### 4. El modelo web presenta jitter o la sombra del objetivo persiste

- Confirma que solo existen un controlador y un publicador de estado para el mismo espacio de nombres.
- Comprueba si `/joint_states` tiene múltiples publicadores.
- Registra `control_target`, `control_reference` y `joint_states` al mismo tiempo.
- Revisa los contadores de error de CAN y los intervalos de llegada del feedback.
- No ejecutes la reproducción de trayectorias y el arrastre manual continuo al mismo tiempo.

Una sombra de objetivo de larga duración generalmente significa que el feedback real no ha alcanzado el objetivo; esto no es necesariamente un problema de renderizado web.

### 5. No hay feedback CAN, o BUS-OFF

```bash
ip -details -statistics link show can0
candump can0
```

Comprueba:

- si la velocidad en baudios es `1 Mbps`;
- si CAN_H/CAN_L están invertidos;
- las resistencias de terminación en ambos extremos;
- la alimentación de los motores y la masa común;
- los IDs de los motores y la configuración del SDK;
- el driver USB-CAN y el nombre de la interfaz.

Detén inmediatamente la prueba con el robot real si el contador de errores sigue aumentando.

### 6. El brazo no se apaga inmediatamente después de hacer clic en deshabilitar

Si el brazo no está cerca de la pose cero, el controlador realiza primero un homing seguro y lo valida. Este comportamiento es esperado. Si el homing falla, el sistema mantiene el brazo habilitado para evitar que caiga desde una pose distinta de cero. Usa la parada de emergencia física en una emergencia.

### 7. La compensación de gravedad no se inicia o no puede controlar

- Confirma que el brazo está habilitado.
- Consulta `/gravity_compensation/status`.
- Confirma que no se está ejecutando ninguna trayectoria ni homing seguro.
- Otros comandos de movimiento se rechazan durante la compensación de gravedad.
- Soporta cualquier carga que pueda caer al cambiar de modo.

### 8. La sujeción visual no funciona

Confirma que el `rs_sim` completo se está ejecutando en modo `physics` y luego comprueba:

```bash
ros2 topic echo /rebot_arm_rs_sim/mujoco/overhead_rgb/image_raw --once
ros2 topic echo /rebot_arm_rs_sim/vision/color_blocks/detections --once
ros2 topic echo /rebot_arm_rs_sim/mujoco/object_states --once
```

Si el botón muestra que una tarea está en cola, espera a que termine la acción serie actual y no inicies varias solicitudes de agarre repetidamente.

### 9. El Asistente de IA no puede conectarse o informa que falta una clave

Configura `DEEPSEEK_API_KEY` en la tercera terminal e inicia el Text Agent, luego comprueba:

```bash
ss -ltnp | grep 8082
curl http://127.0.0.1:8082/health
ss -ltnp | grep 8081
```

`ECONNREFUSED 127.0.0.1:8082` significa que el servidor web no puede alcanzar el Text Agent. Comprueba `REBOTARM_TEXT_AGENT_URL` en `reBotArm_simulator-RS/.env`; usa la dirección host del Agent para un despliegue entre máquinas y reinicia el servidor web. Si las comprobaciones de estado pasan pero el chat falla, revisa la clave, las antiguas anulaciones `REBOTARM_LLM_*`, el modelo y los registros de MCP. La comprobación web `/api/llm/health` no sustituye a una llamada real al modelo.

### 10. La página sigue mostrando una versión antigua después de modificar el front end

La consola web de RS incluye compatibilidad con Service Worker/PWA. Primero usa `Ctrl+Shift+R` para una recarga forzada; si aún no se actualiza, borra los datos del sitio o anula el registro del Service Worker en las herramientas de desarrollador del navegador y luego vuelve a cargar la página.

### 11. `setup.sh` o `colcon build` fallan

- Confirma que las versiones de Ubuntu, ROS 2 y Python coinciden.
- Confirma que rosdep está inicializado y puede actualizarse.
- Ejecuta `./setup.sh --check` para ver los elementos que faltan.
- Confirma que `numpy`, `scipy`, `mujoco`, `pinocchio`, `motorbridge` y `fastmcp` se pueden importar en `rebotarm_ros2_RS/.venv`.
- Haz una copia de seguridad de los archivos de usuario antes de eliminarlos o restablecerlos, y no resuelvas problemas de compilación con comandos destructivos.

### 12. Fallan el escaneo, la calibración o el seguimiento del líder

| Síntoma | Comprobación |
|---|---|
| Esperando el servicio ROS del líder | Reconstruye `rebotarm_msgs` / `rebotarmcontroller`, reinicia el controlador y rosbridge, comprueba el espacio de nombres y fuerza la recarga de la página |
| Sin puerto serie / sonda agotó el tiempo de espera | Conexión USB al host ROS o passthrough de la VM, alimentación, permisos `dialout` y otros procesos que ocupan el puerto |
| Faltan IDs de servos | Los siete IDs `0–6` deberían responder; comprueba el cableado, la alimentación y la velocidad en baudios de `1 Mbps` |
| sin calibrar / muestras obsoletas | Vuelve a conectar para la vista previa, desbloquea y calibra de nuevo; inspecciona Hz y la latencia en lugar de relajar los tiempos de espera |
| el seguidor está ocupado | Detén trayectorias, seguimiento manual y compensación de gravedad; restaura `IDLE` habilitado y el mantenimiento de posición del efector |
| las poses absolutas difieren | Usa primero el modo relativo predeterminado; el modo absoluto requiere poses alineadas |
| el latido del navegador agotó el tiempo de espera | Comprueba cierre de la página, pérdida de red o limitación en segundo plano; recalibra e inicia de nuevo explícitamente |
| Error al cargar el modelo del líder | Comprueba los recursos locales `public/models/leader-arm102/urdf/leader.urdf` y `meshes/`, luego fuerza la recarga |

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
export DEEPSEEK_API_KEY='your-key'
./scripts/start_rs_text_agent.sh

# Optional Leader dependencies and interfaces (stop old controller and rosbridge first)
bash scripts/setup_rs_leader.sh

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
- [Proyecto actual B601-RS](https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS)
- Documentación del proyecto B601-RS: `README.md`, `USER_MANUAL_ZH.md`, `DEVELOPER_GUIDE_ZH.md`, `DATA_FLOW_RS_ZH.md`, `LEADER_TELEOP_TEST_ZH.md`
