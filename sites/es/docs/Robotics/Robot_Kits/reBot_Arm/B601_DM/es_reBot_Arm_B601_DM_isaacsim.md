---
description: Este tutorial muestra cómo descargar Isaac Sim y desplegar el robot reBot-B601-DM en un entorno de simulación para desarrollo y depuración.
title: Simulación de reBot-B601-DM con Isaac Sim
keywords:
  - Isaacsim
  - brazo robótico
  - robot
  - operación remota
  - cinemática
  - Damiao
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_arm_b601_dm_isaacsim
last_update:
  date: 2026-08-17
  author: PanYiWei
translation:
  skip: [zh-CN]
createdAt: '2026-08-77'
updatedAt: '2026-08-19'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_isaacsim/
---

import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

## Introducción

Este es un proyecto de simulación para el robot reBot-B601-DM construido con NVIDIA Isaac Sim. Utiliza el motor de física de alta fidelidad de Isaac Sim para reproducir con precisión el comportamiento cinemático del robot y la coordinación del efector final en un entorno virtual, proporcionando una plataforma limpia solo de simulación para el desarrollo de algoritmos de control, la validación de planificación de trayectorias y las pruebas de protocolos de comunicación.

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_dm_isaacsim.png" alt="reBot Arm B601-DM Isaac Sim" />
</div>

## Requisitos del sistema
- Sistema operativo: Ubuntu 22.04 LTS / 24.04 LTS (recomendado) o Windows 11 (requiere WSL2)
- GPU: tarjeta gráfica NVIDIA RTX series (se recomienda RTX 3070 o más reciente), VRAM ≥ 8GB
- Controlador: controlador oficial de NVIDIA ≥ 535.x, compatible con CUDA 12.x
- Memoria: ≥ 32GB de RAM (la carga de escenas de Isaac Sim y la simulación física consumen mucha memoria)
- Almacenamiento: ≥ 100GB de espacio libre en SSD (para la instalación de Isaac Sim, caché y recursos USD)

:::info
En este wiki, el PC está conectado al robot, mientras que el servidor ejecuta la simulación de Isaac Sim. El servidor está equipado con una GPU NVIDIA RTX 4090 y ejecuta Ubuntu 22.04 LTS.
:::

## Instalación de Isaac Sim

Enlaces y recursos oficiales:

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/quick-install.html

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/download.html#isaac-sim-latest-release

### Descargar el paquete Standalone de Isaac Sim

> 💡 Adecuado para la mayoría de los usuarios; no requiere compilación y funciona directamente.

#### Descargar y extraer

Descarga `isaac-sim-standalone-6.0.0-linux-x86\_64.zip` desde el [sitio web oficial de NVIDIA](https://developer.nvidia.com/isaac-sim).

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
```

Luego ejecuta `source ~/.bashrc` para aplicar los cambios.

#### Verificación de inicio

```Bash
${ISAACSIM_PATH}/isaac-sim.sh
```

## Descargar el proyecto

```Bash
git clone https://github.com/hopcan/reBot-Isaacsim.git
```

Configura el entorno uv para `reBotArm_control_py`:

```bash
cd third_party/reBotArm_control_py
uv sync
```

### Descripción general de los componentes funcionales

Este proyecto proporciona múltiples módulos emisores para admitir diferentes escenarios de uso:

| Componente | Descripción |
|------|------|
| `gravity_joint_sender` | **Modo de compensación de gravedad con asa**: para un robot modificado (efector final retirado, asa instalada), la compensación de gravedad permite el movimiento manual de las articulaciones y la sincronización en tiempo real de los ángulos articulares con Isaac Sim |
| `isaacsim_ik_sender` | **Modo de cinemática inversa (IK)**: introduce la pose del efector final, resuelve los ángulos articulares mediante el solucionador IK y los envía a Isaac Sim |
| `isaacsim_traj_sender` | **Modo de planificación de trayectoria (Traj)**: amplía IK con planificación de trayectorias en el espacio articular (perfil de temporización MIN_JERK) para lograr un control de movimiento suave |
| `isaacsim_joint_test_sender` | **Modo de prueba de articulaciones**: no se requiere un robot real; envía una trayectoria de ángulos articulares preestablecida para verificar el receptor de Isaac Sim y el enlace de comunicación |
| `joint_reader_sender` | **Modo de mapeo Real-a-Sim**: solo lee los ángulos articulares y los mapea a Isaac Sim, adecuado para usar con otros proyectos de control (por ejemplo, mientras el robot real ejecuta otras tareas, sus estados articulares se sincronizan con Isaac Sim para visualización) |

### Estructura de directorios

```
reBot-Isaacsim/
├── pyproject.toml                           # uv workspace configuration
├── README.md
├── README_EN.md
├── README_ES.md
├── reBotArm_Isaacsim/                       # main example directory
│   ├── gravity_joint_sender.py              # real robot sender (uv environment)
│   ├── isaacsim_ik_sender.py                # IK sender script (must use Isaac python.sh)
│   ├── isaacsim_traj_sender.py              # trajectory sender script (must use Isaac python.sh)
│   ├── isaacsim_joint_test_sender.py        # test sender script (use python.sh as needed)
│   ├── joint_reader_sender.py               # read-only mapping script (real robot / other projects)
│   ├── isaacsim_joint_receiver.py           # Isaac Sim receiver (must use Isaac python.sh)
│   ├── live_sync.py                         # startup instructions script
│   └── ...
├── third_party/
│   └── reBotArm_control_py/                 # robot control library (independent uv environment)
│       ├── pyproject.toml
│       └── ...
├── urdf/
│   └── ...                                  # robot URDF / configuration
├── usd/
│   └── reBot_B601_DM/
│       └── reBot_B601_DM.usda               # reBot-B601-DM asset
└── ...
```

## Inicio (modo de doble terminal)

Se requieren dos terminales independientes. **La Terminal 1 es el receptor de Isaac Sim**, y **la Terminal 2 ejecuta el emisor según el modo seleccionado**.

### Terminal 1 — Iniciar el receptor de Isaac Sim (usado por todos los modos)
Ejecuta el script receptor con el Python de Isaac Sim.

:::tip
Modifica los valores de `DEFAULT_SIM_HOST` y `DEFAULT_REBOT_ARM_HOST` según tu configuración.

`DEFAULT_SIM_HOST` es la dirección IP del host que ejecuta el entorno Isaac Sim.

`DEFAULT_REBOT_ARM_HOST` es la dirección IP del host conectado al robot.

Si ambos extremos se ejecutan en la misma máquina, establece `DEFAULT_SIM_HOST` en `"127.0.0.1"`.
:::

```bash
cd reBotArm_Isaacsim
${ISAACSIM_PYTHON_EXE}  gravity_joint_sender.py 
```

**Salida esperada:**
- Iniciar la interfaz gráfica de Isaac Sim
- Cargar el suelo y los recursos USD del robot
- Escuchar en UDP `DEFAULT_SIM_HOST:5005`
- Esperar a que el emisor se conecte

### Terminal 2 — Iniciar el emisor apropiado para el modo seleccionado

**Orden de inicio: primero el receptor, luego el emisor.**

:::tip

Algunas funciones requieren una conexión con el robot real. Los siguientes pasos son necesarios cuando se utiliza un adaptador USB2CAN.

```bash
# Check the USB2CAN serial port to confirm it is detected
ls ttyACM*

# Grant port permissions
sudo chmod 666 /dev/ttyACM*
```
Configura `DEFAULT_SIM_HOST` según tu dispositivo.

`DEFAULT_SIM_HOST` es la dirección IP del host que ejecuta el entorno Isaac Sim.

Si ambos extremos se ejecutan en la misma máquina, establece `DEFAULT_SIM_HOST` en `"127.0.0.1"`.
:::

#### ① Modo de prueba de articulaciones (`isaacsim_joint_test_sender`)

No se necesita hardware real. Se envía en bucle una trayectoria preestablecida para validar la comunicación y el receptor de Isaac Sim:

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_joint_test_sender.py
```

El emisor interpola lentamente entre varias poses articulares preestablecidas y las envía en bucle sin requerir una conexión CAN.

#### ② Modo de cinemática inversa (`isaacsim_ik_sender`)

Introduce la pose del efector final (posición/orientación), resuelve la IK y mueve el robot simulado en Isaac Sim. Ejecútalo directamente con `uv run` en el directorio `reBotArm_Isaacsim/`:

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_ik_sender.py
```

**Formato de entrada (un comando por línea):**
```
x y z                       # position (meters), orientation remains unchanged
x y z r p y                 # position + orientation (meters/degrees)
q j1 j2 j3 j4 j5 j6         # send joint angles directly (degrees)
gripper <0~1>                # update the gripper independently
```

#### ③ Modo de planificación de trayectoria (`isaacsim_traj_sender`)

Este se basa en IK y añade planificación de trayectorias en el espacio articular (MIN_JERK) para un movimiento suave. Ejecútalo directamente con `uv run` en el directorio `reBotArm_Isaacsim/`:

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_traj_sender.py
```

**Formato de entrada (un comando por línea):**
```
x y z                       # position (meters)
x y z r p y                 # position + orientation (meters/degrees)
q j1 j2 j3 j4 j5 j6         # direct joint-space command (degrees)
gripper <0~1>                # update the gripper independently
speed <scale>                # adjust trajectory duration ratio
resync                       # re-read the current joint angles from the simulation side
```

#### ④ Modo de compensación de gravedad con asa (`gravity_joint_sender`)

Adecuado para un robot modificado (efector final retirado, asa acoplada), lo que permite el movimiento manual para controlar el robot en Isaac Sim:

```bash
cd reBotArm_Isaacsim
./run_sender.sh
```

**Comportamiento esperado:**
- Conectarse al robot real y habilitar MIT + compensación de alimentación directa de gravedad
- El robot puede moverse libremente a mano
- Los ángulos articulares se envían continuamente por UDP a 60 Hz

#### ⑤ Modo de mapeo Real-a-Sim (`joint_reader_sender`)

Lee únicamente los ángulos articulares y los mapea a Isaac Sim. Esto es adecuado cuando el robot real está ejecutando otras tareas y quieres visualizar el mismo movimiento en Isaac Sim. Ejecútalo directamente con `uv run` en el directorio `reBotArm_Isaacsim/`:

```bash
cd reBotArm_Isaacsim
uv run python joint_reader_sender.py
```

**Comportamiento esperado:**
- Solo lee los ángulos articulares (modo de retroalimentación pasiva), sin enviar ningún comando de control
- Los ángulos articulares se envían continuamente por UDP a 60 Hz
- Cuando el robot real es controlado por otro proyecto, el movimiento puede visualizarse en Isaac Sim al mismo tiempo

## Protocolo de comunicación

UDP JSON sobre el puerto `DEFAULT_SIM_HOST:5005`.

**Carga útil enviada por el emisor por fotograma:**

```json
{
  "sequence": 123,
  "timestamp": 1718000000.123,
  "joint_positions": [0.0, 0.1, 0.2, -0.1, 0.0, -0.02],
  "gripper_position": 0.01
}
```

| Campo | Tipo | Descripción |
|------|------|------|
| `sequence` | int | Número de secuencia incremental |
| `timestamp` | float | Marca de tiempo Unix (segundos) |
| `joint_positions` | float[6] | Primeros 6 ángulos de las articulaciones (rad) |
| `gripper_position` | float | Posición de la pinza (m), convertida por el emisor usando `GRIPPER_POSITION_SCALE` |

## Parámetros de configuración

### Emisor (`gravity_joint_sender.py`)

| Parámetro | Valor predeterminado | Descripción |
|------|--------|------|
| `ARM_JOINT_COUNT`| 6 | Número de articulaciones |
| `DEFAULT_PORT` | 5005 | Puerto UDP |
| `DEFAULT_SEND_HZ` | 60.0 | Frecuencia de envío (Hz) |
| `GRIPPER_POSITION_SCALE` | 0.007 | Factor de escala del ángulo de la pinza a posición |

### Receptor (`isaacsim_joint_receiver.py`)

| Parámetro | Valor predeterminado | Descripción |
|------|--------|------|
| `ARM_JOINT_COUNT` | 6 | Número de articulaciones |
| `DEFAULT_PORT` | 5005 | Puerto UDP |
| `DEFAULT_RENDER_HZ` | 120.0 | Frecuencia de renderizado de la simulación (Hz) |
| `GRIPPER_POSITION_SCALE` | 0.0073 | Factor de escala de la posición de la pinza |
| `ROBOT_PRIM_PATH` | `/World/reBotArm` | Ruta Prim del robot en Isaac Sim |
| `ASSET_RELATIVE_PATH` | usd/reBot_B601_DM/reBot_B601_DM.usda | Ruta relativa al recurso USD |

## Problemas comunes

### `OSError: [Errno 98] Address already in use`

El puerto 5005 ya está en uso. Primero confirma y termina el proceso que mantiene el puerto:

```bash
# Check which process is using the port
sudo lsof -i :5005

# Terminate the process (replace PID with the actual value)
kill <PID>
```

### Los ángulos de las articulaciones están desincronizados

- Confirma que el emisor y el receptor usan el mismo puerto (ambos 5005)
- Comprueba si `[send]` aparece continuamente en los registros del emisor
- Comprueba si `[recv]` aparece continuamente en los registros del receptor
- Intenta usar `isaacsim_joint_test_sender.py` para descartar problemas de hardware

### Componentes y entorno de Python

| Componente | Entorno de Python | Script de inicio |
|------|------------|---------|
| Emisor (robot real) | entorno uv `reBotArm_control_py` | `gravity_joint_sender.py` |
| Emisor (modo de prueba) | entorno uv `reBotArm_control_py` | `isaacsim_joint_test_sender.py` |
| Receptor | Python oficial de Isaac Sim (`python.sh`) | `isaacsim_joint_receiver.py` |

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Proporcionamos múltiples canales de soporte para ayudar a garantizar una experiencia fluida con nuestros productos. Ofrecemos varios métodos de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

