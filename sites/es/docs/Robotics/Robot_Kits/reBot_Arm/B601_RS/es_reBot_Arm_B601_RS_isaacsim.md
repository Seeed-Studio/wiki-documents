---
description: Este tutorial muestra cómo descargar Isaac Sim y desplegar el robot reBotArm en un entorno de simulación para desarrollo y depuración.
title: B601-RS con Isaac Sim
keywords:
  - Isaac Sim
  - Brazo mecánico
  - Robot
  - Operación de control remoto
  - Cinemática
  - Robostride
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/reBot_Arm_RS_isaacsim.jpg
slug: /rebot_arm_b601_rs_isaacsim
last_update:
  date: 8/14/2026
  author: LiuJunjie
createdAt: '2026-07-07'
updatedAt: '2026-09-28'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_isaacsim/
---
import '/src/css/rebot-wiki-style.css';
import InstallTabs from '@site/src/components/robotics/RebotGraspingTabs';
import TabItem from '@theme/TabItem';
import graspingStyles from '@site/src/components/robotics/rebot-grasping-demo.module.css';


<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/reBot_Arm_RS_isaacsim.jpg" alt="reBot Arm B601-RS Isaac Sim" />
</div>

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

## Introducción

reBot-Isaacsim es un proyecto de simulación NVIDIA Isaac Sim diseñado específicamente para el reBotArm. Aprovecha el motor de física de alta fidelidad de Isaac Sim para replicar con precisión las características cinemáticas y la lógica de coordinación del efector final del brazo robótico en un entorno virtual, proporcionando un entorno independiente solo de simulación para el desarrollo de algoritmos de control, la verificación de planificación de trayectorias y las pruebas de protocolos de comunicación.

## Requisitos del entorno
- Sistema operativo: Ubuntu 22.04 LTS / 24.04 LTS (recomendado) o Windows 11 (requiere WSL2)  
- GPU: tarjeta gráfica NVIDIA serie RTX (se recomienda RTX 3070 o superior), VRAM ≥ 8 GB  
- Controlador: controlador oficial de NVIDIA ≥ 535.x, compatible con CUDA 12.x  
- Memoria: ≥ 32 GB de RAM (las escenas de Isaac Sim y las simulaciones físicas usan mucha memoria)  
- Almacenamiento: ≥ 100 GB de espacio disponible en SSD (para la instalación de Isaac Sim, caché y recursos USD)

:::info
Los ordenadores utilizados en este wiki están equipados con GPU NVIDIA RTX 4080 y ejecutan el sistema operativo Ubuntu 22.04 LTS.
:::

## Instalar Isaac Sim

Enlaces y recursos oficiales:

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/quick-install.html

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/download.html#isaac-sim-latest-release


Selecciona un método de instalación de Isaac Sim y luego continúa con la descarga del proyecto.

<div className={graspingStyles.page}>
<InstallTabs defaultValue="binary" queryString="isaac-install">
<TabItem value="binary" label="Método 1 · Binario precompilado">

### 🔧 Método 1: Instalación de binario precompilado

> 💡 Adecuado para la mayoría de los usuarios, no es necesario compilar, listo para usar.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### Descargar y descomprimir

En la [página de descarga de NVIDIA Isaac Sim 6.0.0](https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/download.html#isaac-sim-latest-release), selecciona **Linux (x86_64)** en la fila de Isaac Sim y descarga el paquete precompilado `isaac-sim-standalone-6.0.0-linux-x86_64.zip` en `~/Downloads`. Los siguientes comandos son para Linux x86_64.

```Bash
mkdir -p ~/isaacsim
cd ~/Downloads
unzip isaac-sim-standalone-6.0.0-linux-x86_64.zip -d ~/isaacsim
cd ~/isaacsim
./post_install.sh
```

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### Configurar variables de entorno

Añade lo siguiente a `~/.bashrc` o `~/.zshrc`:

```Bash
export ISAACSIM_PATH="${HOME}/isaacsim"
export ISAACSIM_PYTHON_EXE="${ISAACSIM_PATH}/python.sh"
export ISAACSIM_ROOT="${HOME}/isaacsim"
```

Luego ejecuta `source ~/.bashrc` para que surta efecto.

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### Iniciar verificación

```Bash
${ISAACSIM_PATH}/isaac-sim.sh
```

El primer inicio almacenará en caché los sombreadores, lo que puede tardar de 5 a 10 minutos, así que ten paciencia mientras aparece la interfaz gráfica.

</div>
</section>

</div>

</TabItem>
<TabItem value="source" label="Método 2 · Compilar desde el código fuente">

### ⚙️ Método 2: Compilar desde el código fuente

> 💡 Adecuado para desarrolladores que necesitan ajustar el código subyacente o depurar funciones centrales.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### Instalar dependencias

```Bash
sudo apt update
sudo apt install build-essential git git-lfs gcc-11 g++-11
```

Confirma que las salidas por defecto de `gcc --version` y `g++ --version` informan ambas de la versión 11. Consulta las [instrucciones de compilación desde código fuente de Isaac Sim 6.0.0](https://github.com/isaac-sim/IsaacSim/blob/v6.0.0/README.md#prerequisites-and-environment-setup) para la configuración del compilador y otros requisitos previos. Se requiere conexión a Internet para descargar las dependencias de compilación.

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### Clonado y compilación

El código fuente de Isaac Sim está en [isaac-sim/IsaacSim](https://github.com/isaac-sim/IsaacSim); la antigua dirección de NVIDIA-Omniverse ahora redirige a un repositorio de Dockerfile obsoleto. Los siguientes comandos usan la versión 6.0.0, que coincide con la instalación binaria de este tutorial:

```Bash
git clone --branch v6.0.0 https://github.com/isaac-sim/IsaacSim.git
cd IsaacSim
git lfs install
git lfs pull
./build.sh --release
```

El proceso de compilación puede tardar de 30 a 60 minutos, dependiendo de tu hardware.

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### Ejecutar prueba

```Bash
_build/linux-x86_64/release/isaac-sim.sh
```

Después de una compilación desde código fuente, apunta `ISAACSIM_ROOT` a ese directorio de runtime para que `run_isaacsim_receiver.sh` pueda encontrar Isaac Sim:

```bash
export ISAACSIM_ROOT="$PWD/_build/linux-x86_64/release"
```

</div>
</section>

</div>

</TabItem>
</InstallTabs>
</div>

## Descargar proyecto

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### Clonar el proyecto y los submódulos

Este repositorio utiliza el submódulo Git ascendente `reBotArm_control_py`. Clona desde el directorio donde quieras almacenar el proyecto:

```bash
git clone --recurse-submodules https://github.com/Seeed-Projects/reBot-Isaacsim.git
cd reBot-Isaacsim
```

Si ya clonaste el repositorio y `third_party/reBotArm_control_py` está vacío, ejecuta esto desde la raíz del proyecto:

```bash
git submodule update --init --recursive
```

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### Instalar dependencias del emisor

Ejecuta esto desde la raíz del proyecto. Tanto `run_sender.sh` como `uv run` usan el espacio de trabajo raíz de uv:

```bash
uv sync
```

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### Cambiar la configuración de hardware a RS

El recurso de Isaac Sim de este repositorio es RS (`usd/RS-rebot-dev-arm`), mientras que el `rebotarm.yaml` ascendente usa DM por defecto. Tanto `RebotArm()` como `load_robot_model()` usan este archivo, por lo que la compensación de gravedad, el lector de articulaciones, IK y Traj requieren la configuración RS; de lo contrario, el protocolo del motor no coincidirá y Pinocchio cargará el URDF de DM. La prueba de articulaciones no requiere este paso. Esto modifica el árbol de trabajo del submódulo localmente; no confirmes el cambio:

```bash
python reBotArm_Isaacsim/set_hw_rs.py
```

Si tiene éxito, imprimirá `.../config/rebotarm.yaml -> rebotarm_rs.yaml`. La shell permanece en la raíz del proyecto.

</div>
</section>
</div>

### Descripción general de los componentes funcionales

Este proyecto proporciona varios emisores para satisfacer diferentes escenarios de uso:

| Componente | Descripción |
|-----------|------------|
| `gravity_joint_sender` | **Compensación de gravedad + Modo de control mediante asa**: Para brazos robóticos modificados (pinza retirada, asa acoplada), guiado a mano; la compensación proviene de `GravityCompensation` ascendente, este repositorio solo refleja los ángulos de las articulaciones en Isaac Sim |
| `gravity_gripper_assist` | **Compensación de gravedad y asistencia de pinza**: Ejemplo experimental con una comprobación solo de modelo |
| `isaacsim_ik_sender` | **Modo de cinemática inversa (IK)**: Introduce la pose del efector final, utiliza el solucionador IK para obtener los ángulos de las articulaciones y los envía a Isaac Sim |
| `isaacsim_traj_sender` | **Modo de planificación de trayectoria (Traj)**: Añade planificación de trayectoria en el espacio articular (perfil de tiempo MIN_JERK) sobre IK para lograr un control de movimiento suave |
| `isaacsim_joint_test_sender` | **Modo de prueba de articulaciones**: Envía trayectorias de ángulos articulares preestablecidas sin un robot real para verificar si el receptor y la comunicación de Isaac Sim funcionan correctamente |
| `joint_reader_sender` | **Modo de mapeo del mundo real a la simulación**: Solo lectura de ángulos articulares y mapeo a Isaac Sim, ideal para usar con otros proyectos de control (por ejemplo, sincronizar en Isaac Sim el robot real que realiza otras tareas para visualización) |

### Estructura de directorios

```
reBot-Isaacsim/
├── pyproject.toml                           # uv workspace configuration
├── README.md
├── README_EN.md
├── README_ES.md
├── reBotArm_Isaacsim/                       # Main example directory
│   ├── gravity_joint_sender.py              # Gravity-comp handle mode (upstream GravityCompensation + UDP)
│   ├── gravity_gripper_assist.py             # Gravity compensation with gripper assist
│   ├── isaacsim_ik_sender.py                # Inverse kinematics mode (IK control)
│   ├── isaacsim_traj_sender.py              # Trajectory planning mode (IK + joint-space trajectory)
│   ├── isaacsim_joint_test_sender.py        # Joint test mode (preset trajectory, no hardware needed)
│   ├── joint_reader_sender.py                # Real-to-Sim mapping mode (read-only joints, sync visualization)
│   ├── isaacsim_joint_receiver.py           # Isaac Sim receiver (joint-angle sync)
│   ├── live_sync.py                         # Startup instruction script
│   ├── set_hw_rs.py                         # Point submodule hardware YAML at RS (local; do not commit)
│   ├── run_sender.sh                        # Launch the sender
│   └── run_isaacsim_receiver.sh             # Launch the Isaac Sim receiver
├── .gitmodules
├── third_party/
│   └── reBotArm_control_py/                 # git submodule: upstream control library
└── usd/
    └── RS-rebot-dev-arm/
        └── RS-rebot-dev-arm.usda            # Isaac Sim robot asset
```

## Lanzamiento (modo de doble terminal)

Se requieren dos terminales separados. **La Terminal 1 ejecuta el receptor de Isaac Sim**, mientras que **la Terminal 2 ejecuta el emisor apropiado según la funcionalidad deseada**. En cada terminal, entra en la raíz del proyecto `reBot-Isaacsim` clonada anteriormente antes de ejecutar los siguientes comandos.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### Terminal 1 — Iniciar el receptor de Isaac Sim (compartido por todos los modos)

<p className="rebot-step-label">Paso 1</p>

```bash
cd reBotArm_Isaacsim
./run_isaacsim_receiver.sh
```

**Comportamiento esperado:**
- Iniciar la GUI de Isaac Sim
- Cargar el plano de suelo y los recursos USD del brazo robótico
- Escuchar paquetes UDP en `127.0.0.1:5005`
- Esperar a que un emisor se conecte

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### Terminal 2 — Iniciar el emisor apropiado

<p className="rebot-step-label">Paso 2</p>

**Para el mirroring de simulación, inicia primero el receptor y luego el emisor.** La comprobación solo del modelo para la asistencia experimental del gripper que aparece más abajo no requiere el receptor.

:::tip

Algunos modos requieren un brazo robótico físico. Configura el adaptador USB-a-CAN como se muestra a continuación.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS_usb2can.png"/>
</div>

```bash
# Check the CAN interface status
ip link show can0

# Bring up the CAN interface with a bitrate of 1000000
sudo ip link set can0 up type can bitrate 1000000 restart-ms 100
```

:::

</div>
</section>
</div>

Elige uno de los siguientes modos. Son opciones independientes y no es necesario ejecutarlas en secuencia.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### Modo de prueba de articulaciones (`isaacsim_joint_test_sender`) {#-modo-de-prueba-de-articulaciones-isaacsim_joint_test_sender}

No se requiere hardware físico. Se envía continuamente una trayectoria de articulaciones predefinida para verificar la comunicación con el receptor de Isaac Sim.

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_joint_test_sender.py
```

El emisor interpola continuamente entre varias configuraciones de articulaciones predefinidas y las transmite a Isaac Sim. No lee el YAML de hardware, por lo que no se requieren ni `set_hw_rs.py` ni CAN.

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### Modo de cinemática inversa (`isaacsim_ik_sender`) {#-modo-de-cinemática-inversa-isaacsim_ik_sender}

Introduce una pose del efector final (posición/orientación). El solucionador de IK calcula la configuración de articulaciones y mueve el brazo robótico en Isaac Sim. `load_robot_model()` lee el submódulo `rebotarm.yaml`, así que cambia primero a RS:

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python isaacsim_ik_sender.py
```

**Formato de entrada (un comando por línea):**

```text
x y z                       # Position (meters), keep current orientation
x y z r p y                 # Position + orientation (meters/degrees)
q j1 j2 j3 j4 j5 j6         # Send joint angles directly (degrees)
gripper <0~1>               # Update gripper only
```

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### Modo de planificación de trayectoria (`isaacsim_traj_sender`) {#-modo-de-planificación-de-trayectoria-isaacsim_traj_sender}

Añade planificación de trayectoria en el espacio de articulaciones (MIN_JERK) sobre la IK para un movimiento suave del robot. También utiliza `load_robot_model()` con ese YAML, así que cambia primero a RS:

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python isaacsim_traj_sender.py
```

**Formato de entrada (un comando por línea):**

```text
x y z                       # Position (meters)
x y z r p y                 # Position + orientation (meters/degrees)
q j1 j2 j3 j4 j5 j6         # Send joint angles directly (degrees)
gripper <0~1>               # Update gripper only
speed <scale>               # Adjust trajectory duration scaling
resync                      # Re-read the current joint state from Isaac Sim
```

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### Modo de compensación de gravedad con asa (`gravity_joint_sender`) {#-modo-de-compensación-de-gravedad-con-asa-gravity_joint_sender}

Diseñado para brazos robóticos modificados (gripper retirado y asa instalada). El robot puede guiarse manualmente mientras Isaac Sim sigue el movimiento.

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
./run_sender.sh
```

**Comportamiento esperado:**
- `set_hw_rs.py` apunta el submódulo `rebotarm.yaml` a `rebotarm_rs.yaml` para que los motores y el modelo de gravedad compartan un único YAML (cambio local; no hacer commit)
- El brazo físico se conecta e inicia aguas arriba `GravityCompensation` (mismo MIT + `g(q)` feed-forward que `example/9`)
- El brazo puede moverse libremente a mano
- Este script solo reenvía ángulos de articulaciones a Isaac Sim por UDP a 60 Hz
- No ejecutes también aguas arriba `example/9` al mismo tiempo; ambos procesos competirían por el CAN

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">5</span>
<div className="rebot-step-content">

#### Compensación de gravedad y asistencia de gripper (`gravity_gripper_assist`) {#-compensación-de-gravedad-y-asistencia-de-gripper-gravity_gripper_assist}

Mueve manualmente un brazo RS y su gripper acoplado mientras los reflejas en Isaac Sim.

Ejecuta la comprobación del modelo desde la raíz del proyecto; no se conecta a CAN:

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python gravity_gripper_assist.py --check
```

Inicia el receptor de Isaac Sim, asegúrate de que `can0` esté disponible, fija y soporta el brazo, y detén otros programas que usen CAN. El gripper tiene por defecto 0 rad cerrado y 5 rad abierto; estos deben coincidir con la calibración de cero del brazo.

Inicia el brazo físico desde la misma terminal; este comando controla los motores:

```bash
uv run python gravity_gripper_assist.py
```

Si los extremos difieren, establece los valores medidos en radianes con `--closed-rad` y `--open-rad`. Introduce `assist`, `open`, `close` o `hold` para controlar el gripper; introduce `quit` o pulsa `Ctrl+C` para detener.

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">6</span>
<div className="rebot-step-content">

#### Modo de mapeo real-a-sim (`joint_reader_sender`) {#-modo-de-mapeo-real-a-sim-joint_reader_sender}

Lee solo los ángulos de articulaciones y refleja el estado del robot físico en Isaac Sim. Este modo está pensado para visualización mientras el robot real es controlado por otra aplicación. `RebotArm()` lee el submódulo `rebotarm.yaml`, así que cambia primero a RS:

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python joint_reader_sender.py
```

**Comportamiento esperado:**
- `set_hw_rs.py` cambia la configuración del motor a RS (cambio local; no hacer commit)
- Leer solo los ángulos de articulaciones (modo de retroalimentación pasiva), sin enviar ningún comando de control
- Transmitir continuamente los ángulos de articulaciones por UDP a 60 Hz
- Visualizar el robot físico en Isaac Sim mientras es controlado por otro proyecto

</div>
</section>

</div>

## Protocolo de comunicación

UDP JSON sobre el puerto `127.0.0.1:5005`.

**Carga útil del emisor (por frame):**

```json
{
  "sequence": 123,
  "timestamp": 1718000000.123,
  "joint_positions": [0.0, 0.1, 0.2, -0.1, 0.0, -0.02],
  "gripper_position": 0.05
}
```

| Campo | Tipo | Descripción |
|------|------|------|
| `sequence` | int | Número de secuencia de frame incremental |
| `timestamp` | float | Marca de tiempo Unix (segundos) |
| `joint_positions` | float[6] | Primeras seis posiciones de articulaciones (rad) |
| `gripper_position` | float | Posición objetivo del dedo del gripper (m); cada emisor la calcula con su propio mapeo (ver más abajo) |

**Canal de control del gripper:**

El receptor aplica la `gripper_position` recibida directamente como objetivo de posición de ambas articulaciones prismáticas de los dedos, recortada por dedo a `[0, upper limit]` (límites superiores USD: 0.05 m en ambos dedos; los dedos son accionados 1:1 por un motor a través de un único piñón). No hay escalado adicional en el lado del receptor. Los emisores mapean su entrada a `gripper_position` de la siguiente manera:

| Emisor | Mapeo a `gripper_position` (m) |
|------|------|
| `gravity_joint_sender` | `gripper_q × 0.03` (`GRIPPER_POSITION_SCALE = 0.03`) |
| `joint_reader_sender` | `gripper_q × 0.007` (`GRIPPER_POSITION_SCALE = 0.007`) |
| `isaacsim_traj_sender` | `ratio × 0.045` (entrada `gripper <0~1>`, recortada a 0.045 m) |
| `isaacsim_ik_sender` | `ratio ∈ [0, 1]` en bruto enviada como metros, por lo que cualquier ratio ≥ el límite superior de un dedo abre completamente ese dedo |

## Parámetros de configuración

### Emisor (`gravity_joint_sender.py`)

| Parámetro | Valor por defecto | Descripción |
|------|--------|------|
| YAML de hardware | `set_hw_rs.py` → `rebotarm_rs.yaml` | `RebotArm()` lee el submódulo `config/rebotarm.yaml`; los motores y Pinocchio lo comparten |
| `ARM_JOINT_COUNT` | 6 | Número de articulaciones del brazo |
| `DEFAULT_PORT` | 5005 | Puerto UDP |
| `DEFAULT_SEND_HZ` | 60.0 | Frecuencia de transmisión (Hz) |
| `GRIPPER_POSITION_SCALE` | 0.03 | Factor de conversión de ángulo del gripper a posición |
| `position_alpha` | 0.2 | Coeficiente del filtro pasa-bajos |

### Receptor (`isaacsim_joint_receiver.py`)

| Parámetro | Valor por defecto | Descripción |
|------|--------|------|
| `ARM_JOINT_COUNT` | 6 | Número de articulaciones del brazo |
| `DEFAULT_PORT` | 5005 | Puerto UDP |
| `DEFAULT_RENDER_HZ` | 120.0 | Frecuencia de renderizado de la simulación (Hz) |
| `ROBOT_PRIM_PATH` | `/World/reBotArm` | Ruta del Prim del robot en Isaac Sim |
| `ASSET_RELATIVE_PATH` | `usd/RS-rebot-dev-arm/RS-rebot-dev-arm.usda` | Ruta relativa al recurso USD |

## Resolución de problemas

### `OSError: [Errno 98] Address already in use`

El puerto `5005` ya está ocupado. Busca y termina el proceso que está usando el puerto:

```bash
# Find the process using port 5005
sudo lsof -i :5005

# Terminate the process (replace PID with the actual process ID)
kill <PID>
```

### Recurso de Isaac Sim no encontrado

Verifica que el recurso USD exista y que `REPO_ROOT` esté configurado correctamente:

```bash
ls usd/RS-rebot-dev-arm/RS-rebot-dev-arm.usda
```

### Bus CAN no listo

Asegúrate de que la interfaz CAN esté activa y configurada con la tasa de bits correcta:

```bash
can_restart can0

# Verify the bitrate
ip -details link show can0 | grep bitrate
```

### Ángulos de las articulaciones no se sincronizan

- Verifica que tanto el emisor como el receptor estén usando el puerto `5005`.
- Comprueba que el registro del emisor muestre continuamente `[send]`.
- Comprueba que el registro del receptor muestre continuamente `[recv]`.
- Prueba `isaacsim_joint_test_sender.py` para descartar problemas relacionados con el hardware.

### Componentes y entornos de Python

| Componente | Entorno de Python | Script de inicio |
|------|------|------|
| Emisor (Robot físico) | entorno uv `reBotArm_control_py` | `run_sender.sh` |
| Emisor (Modo de prueba) | entorno uv `reBotArm_control_py` | `isaacsim_joint_test_sender.py` |
| Receptor | Python oficial de Isaac Sim (`python.sh`) | `run_isaacsim_receiver.sh` |


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


