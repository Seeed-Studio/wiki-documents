---
description: Este tutorial muestra cómo descargar Isaacsim y desplegar el robot reBotArm en un entorno de simulación para desarrollo y depuración.
title: Simulación de reBotArm mediante Isaacsim
keywords:
  - Isaacsim
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
updatedAt: '2026-08-17'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_isaacsim/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/reBot_Arm_RS_isaacsim.jpg" alt="reBot Arm B601-RS Isaac Sim" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

## Introducción

reBot-Isaacsim es un proyecto de simulación NVIDIA Isaac Sim diseñado específicamente para el reBotArm. Aprovecha el motor de física de alta fidelidad de Isaac Sim para replicar con precisión las características cinemáticas y la lógica de coordinación de la pinza del brazo robótico en un entorno virtual, proporcionando un entorno independiente solo de simulación para el desarrollo de algoritmos de control, la verificación de planificación de trayectorias y las pruebas de protocolos de comunicación.

## Requisitos del entorno
- Sistema operativo: Ubuntu 22.04 LTS / 24.04 LTS (recomendado) o Windows 11 (requiere WSL2)  
- GPU: Tarjeta gráfica NVIDIA serie RTX (se recomienda RTX 3070 o superior), VRAM ≥ 8GB  
- Controlador: Controlador oficial de NVIDIA ≥ 535.x, compatible con CUDA 12.x  
- Memoria: ≥ 32GB de RAM (las escenas de Isaac Sim y las simulaciones físicas usan mucha memoria)  
- Almacenamiento: ≥ 100GB de espacio disponible en SSD (para la instalación de Isaac Sim, caché y recursos USD)

:::info
Los ordenadores utilizados en este wiki están equipados con GPU NVIDIA RTX 4080 y ejecutan el sistema operativo Ubuntu 22.04 LTS.
:::

## Instalar Isaacsim

Enlaces y recursos oficiales:

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/quick-install.html

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/download.html#isaac-sim-latest-release


### 🔧 Método 1: Instalación de binarios precompilados

> 💡 Adecuado para la mayoría de los usuarios, no es necesario compilar, listo para usar.

#### Descargar y descomprimir

Descarga `isaac-sim-standalone-6.0.0-linux-x86_64.zip` desde el [sitio web oficial de NVIDIA](https://developer.nvidia.com/isaac-sim).

```Bash
mkdir -p ~/isaacsim
cd ~/Downloads
unzip isaac-sim-standalone-6.0.0-linux-x86_64.zip -d ~/isaacsim
cd ~/isaacsim
./post_install.sh
```

#### Configurar variables de entorno

Añade lo siguiente a `~/.bashrc` o `~/.zshrc`:

```Bash
export ISAACSIM_PATH="${HOME}/isaacsim"
export ISAACSIM_PYTHON_EXE="${ISAACSIM_PATH}/python.sh"
export ISAACSIM_ROOT="${HOME}/isaacsim"
```

Luego ejecuta `source ~/.bashrc` para que surta efecto.

#### Verificación de inicio

```Bash
${ISAACSIM_PATH}/isaac-sim.sh
```

El primer inicio almacenará en caché los sombreadores, lo que puede tardar de 5 a 10 minutos, así que ten paciencia mientras aparece la interfaz gráfica.

### ⚙️ Método 2: Compilar desde el código fuente (recomendado)

> 💡 Adecuado para desarrolladores que necesitan ajustar el código subyacente o depurar funciones centrales.

#### Instalar dependencias

```Bash
sudo apt update
sudo apt install cmake build-essential git python3-pip
```

Asegúrate de que CUDA y cuDNN estén correctamente instalados y coincidan con el controlador de tu GPU.

#### Clonado y compilación

```Bash
git clone https://github.com/NVIDIA-Omniverse/IsaacSim.git
cd IsaacSim
./build.sh release
```

El proceso de compilación puede tardar entre 30 y 60 minutos, dependiendo de tu hardware.

#### Ejecutar prueba

```Bash
_build/linux-x86_64/release/isaac-sim.sh
```

Después de compilar desde el código fuente, apunta `ISAACSIM_ROOT` a ese directorio de runtime para que `run_isaacsim_receiver.sh` pueda encontrar Isaac Sim:

```bash
export ISAACSIM_ROOT="$PWD/_build/linux-x86_64/release"
```

## Descargar el proyecto

Este repositorio extrae la biblioteca de control ascendente `reBotArm_control_py` como un submódulo de git. Clona con submódulos:

```bash
git clone --recurse-submodules https://github.com/Seeed-Projects/reBot-Isaacsim.git
```

Si ya clonaste el repositorio y `third_party/reBotArm_control_py` está vacío:

```bash
git submodule update --init --recursive
```

Instala las dependencias del emisor en la raíz del repositorio (`run_sender.sh` y `uv run` usan ambos el workspace raíz de uv):

```bash
cd reBot-Isaacsim
uv sync
```

### Cambiar la configuración de hardware a RS

El recurso de Isaac Sim de este repositorio es RS (`usd/RS-rebot-dev-arm`). El `rebotarm.yaml` ascendente usa DM por defecto. Tanto `RebotArm()` como `load_robot_model()` siguen este archivo, por lo que la compensación de gravedad, el lector de articulaciones, IK y Traj necesitan RS primero; si lo dejas en DM, el protocolo del motor no coincidirá y Pinocchio cargará el URDF de DM. Esto solo ensucia el árbol de trabajo del submódulo — no lo confirmes (commit):

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
```

Si tiene éxito, imprimirá `.../config/rebotarm.yaml -> rebotarm_rs.yaml`.

### Descripción general de los componentes funcionales

Este proyecto proporciona varios emisores para satisfacer diferentes escenarios de uso:

| Componente | Descripción |
|-----------|------------|
| `gravity_joint_sender` | **Modo de compensación de gravedad + modo de mando**: Para brazos robóticos modificados (pinza retirada, mando acoplado), guiado a mano; la compensación proviene de `GravityCompensation` ascendente, este repositorio solo refleja los ángulos de las articulaciones en Isaac Sim |
| `isaacsim_ik_sender` | **Modo de cinemática inversa (IK)**: Introduce la pose del efector final, utiliza el solucionador IK para obtener los ángulos de las articulaciones y los envía a Isaac Sim |
| `isaacsim_traj_sender` | **Modo de planificación de trayectoria (Traj)**: Añade planificación de trayectoria en el espacio articular (perfil de tiempo MIN_JERK) sobre IK para lograr un control de movimiento suave |
| `isaacsim_joint_test_sender` | **Modo de prueba de articulaciones**: Envía trayectorias de ángulos de articulaciones preestablecidas sin un robot real para verificar si el receptor de Isaac Sim y la comunicación funcionan correctamente |
| `joint_reader_sender` | **Modo de mapeo Real-a-Sim**: Solo lectura de ángulos de articulaciones y mapeo a Isaac Sim, ideal para usar con otros proyectos de control (por ejemplo, sincronizar en Isaac Sim para visualización el robot real que realiza otras tareas) |

### Estructura de directorios

```
reBot-Isaacsim/
├── pyproject.toml                           # uv workspace configuration
├── README.md
├── README_EN.md
├── README_ES.md
├── reBotArm_Isaacsim/                       # Main example directory
│   ├── gravity_joint_sender.py              # Gravity-comp handle mode (upstream GravityCompensation + UDP)
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

## Puesta en marcha (modo de doble terminal)

Se requieren dos terminales separados. **El Terminal 1 ejecuta el receptor de Isaac Sim**, mientras que **el Terminal 2 ejecuta el emisor apropiado según la funcionalidad deseada**.

### Terminal 1 — Iniciar el receptor de Isaac Sim (compartido por todos los modos)

```bash
cd reBotArm_Isaacsim
./run_isaacsim_receiver.sh
```

**Comportamiento esperado:**
- Iniciar la interfaz gráfica de Isaac Sim
- Cargar el plano de suelo y los recursos USD del brazo robótico
- Escuchar paquetes UDP en `127.0.0.1:5005`
- Esperar a que se conecte un emisor

### Terminal 2 — Iniciar el emisor apropiado

**Inicia siempre primero el receptor y luego el emisor.**

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

#### ① Modo de prueba de articulaciones (`isaacsim_joint_test_sender`)

No se requiere hardware físico. Se envía continuamente una trayectoria de articulaciones predefinida para verificar la comunicación con el receptor de Isaac Sim.

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_joint_test_sender.py
```

El emisor interpola continuamente entre varias configuraciones de articulaciones predefinidas y las transmite a Isaac Sim. No lee el YAML de hardware, por lo que no se requieren ni `set_hw_rs.py` ni CAN.

#### ② Modo de cinemática inversa (`isaacsim_ik_sender`)

Introduce una pose del efector final (posición/orientación). El solucionador IK calcula la configuración de las articulaciones y mueve el brazo robótico en Isaac Sim. `load_robot_model()` lee el submódulo `rebotarm.yaml`, así que cambia primero a RS:

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

#### ③ Modo de planificación de trayectoria (`isaacsim_traj_sender`)

Añade planificación de trayectoria en el espacio articular (MIN_JERK) sobre IK para un movimiento suave del robot. También utiliza `load_robot_model()` con ese YAML, así que cambia primero a RS:

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

#### ④ Modo de manejo con compensación de gravedad (`gravity_joint_sender`)

Diseñado para brazos robóticos modificados (garra retirada y empuñadura instalada). El robot puede guiarse manualmente mientras Isaac Sim sigue el movimiento.

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
./run_sender.sh
```

**Comportamiento esperado:**
- `set_hw_rs.py` hace que el submódulo `rebotarm.yaml` apunte a `rebotarm_rs.yaml` para que los motores y el modelo de gravedad compartan un único YAML (cambio local; no hacer commit)
- El brazo físico se conecta e inicia aguas arriba `GravityCompensation` (mismo MIT + `g(q)` feed-forward que `example/9`)
- El brazo puede moverse libremente a mano
- Este script solo reenvía ángulos articulares a Isaac Sim por UDP a 60 Hz
- No ejecutes también aguas arriba `example/9` al mismo tiempo; los dos procesos competirían por el bus CAN

#### ⑤ Modo de mapeo Real-a-Sim (`joint_reader_sender`)

Lee únicamente los ángulos articulares y refleja el estado del robot físico en Isaac Sim. Este modo está pensado para visualización mientras el robot real es controlado por otra aplicación. `RebotArm()` lee el submódulo `rebotarm.yaml`, así que cambia primero a RS:

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python joint_reader_sender.py
```

**Comportamiento esperado:**
- `set_hw_rs.py` cambia la configuración del motor a RS (cambio local; no hacer commit)
- Leer solo los ángulos articulares (modo de retroalimentación pasiva), sin enviar ningún comando de control
- Transmitir continuamente los ángulos articulares vía UDP a 60 Hz
- Visualizar el robot físico en Isaac Sim mientras es controlado por otro proyecto

## Protocolo de comunicación

UDP JSON sobre el puerto `127.0.0.1:5005`.

**Carga útil del emisor (por fotograma):**

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
| `sequence` | int | Número de secuencia de fotograma incremental |
| `timestamp` | float | Marca de tiempo Unix (segundos) |
| `joint_positions` | float[6] | Primeras seis posiciones articulares (rad) |
| `gripper_position` | float | Posición objetivo de los dedos de la garra (m); cada emisor la calcula con su propio mapeo (ver abajo) |

**Canal de control de la garra:**

El receptor aplica la `gripper_position` recibida directamente como objetivo de posición de ambas articulaciones prismáticas de los dedos, recortada por dedo a `[0, upper limit]` (límites superiores en el USD: 0.05 m en ambos dedos; los dedos son accionados 1:1 por un motor a través de un único piñón). No hay escalado adicional en el lado del receptor. Los emisores mapean su entrada a `gripper_position` de la siguiente manera:

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
| `GRIPPER_POSITION_SCALE` | 0.03 | Factor de conversión de ángulo de garra a posición |
| `position_alpha` | 0.2 | Coeficiente del filtro paso bajo |

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

El puerto `5005` ya está ocupado. Localiza y termina el proceso que está usando el puerto:

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

### Los ángulos articulares no se sincronizan

- Verifica que tanto el emisor como el receptor estén usando el puerto `5005`.
- Comprueba que el registro del emisor muestre continuamente `[send]`.
- Comprueba que el registro del receptor muestre continuamente `[recv]`.
- Prueba `isaacsim_joint_test_sender.py` para descartar problemas relacionados con el hardware.

### Componentes y entornos de Python

| Componente | Entorno de Python | Script de inicio |
|------|------|------|
| Emisor (robot físico) | Entorno uv `reBotArm_control_py` | `run_sender.sh` |
| Emisor (modo de prueba) | Entorno uv `reBotArm_control_py` | `isaacsim_joint_test_sender.py` |
| Receptor | Python oficial de Isaac Sim (`python.sh`) | `run_isaacsim_receiver.sh` |


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>




