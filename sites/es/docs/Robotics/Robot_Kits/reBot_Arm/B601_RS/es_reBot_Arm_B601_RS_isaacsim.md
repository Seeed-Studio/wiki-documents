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
updatedAt: '2026-08-14'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_isaacsim/
---

## Introducción

reBot-Isaacsim es un proyecto de simulación NVIDIA Isaac Sim diseñado específicamente para reBotArm. Aprovecha el motor de física de alta fidelidad de Isaac Sim para replicar con precisión las características cinemáticas y la lógica de coordinación de la garra del brazo robótico en un entorno virtual, proporcionando un entorno independiente solo de simulación para el desarrollo de algoritmos de control, la verificación de planificación de trayectorias y las pruebas de protocolos de comunicación.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/reBot_Arm_RS_isaacsim.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

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

> 💡 Adecuado para la mayoría de los usuarios, no es necesario compilar, listo para usar directamente.

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

El primer arranque almacenará en caché los shaders, lo que puede tardar de 5 a 10 minutos, así que ten paciencia mientras aparece la interfaz gráfica.

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

Tras una compilación desde el código fuente, apunta `ISAACSIM_ROOT` a ese directorio de ejecución para que `run_isaacsim_receiver.sh` encuentre Isaac Sim:

```bash
export ISAACSIM_ROOT="$PWD/_build/linux-x86_64/release"
```

## Descargar proyecto

Este repositorio usa como git submodule la biblioteca de control upstream `reBotArm_control_py`. Clónalo con los submódulos:

```bash
git clone --recurse-submodules https://github.com/Seeed-Projects/reBot-Isaacsim.git
```

Si ya habías clonado el repo y `third_party/reBotArm_control_py` está vacío:

```bash
git submodule update --init --recursive
```

Instala las dependencias del emisor en la raíz del repositorio (`run_sender.sh` y `uv run` usan el workspace uv de la raíz):

```bash
cd reBot-Isaacsim
uv sync
```

### Cambiar la configuración de hardware a RS

El asset de Isaac Sim de este repo es RS (`usd/RS-rebot-dev-arm`). El `rebotarm.yaml` upstream usa DM por defecto. Tanto `RebotArm()` como `load_robot_model()` leen este archivo, así que compensación de gravedad, mapeo de solo lectura, IK y Traj necesitan RS primero; si se deja en DM, el protocolo de motores no coincidirá y Pinocchio cargará el URDF de DM. Solo ensucia el working tree del submodule: no hagas commit:

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
```

Si va bien, imprime `.../config/rebotarm.yaml -> rebotarm_rs.yaml`.

### Descripción general de los componentes funcionales

Este proyecto proporciona varios emisores para satisfacer diferentes escenarios de uso:

| Componente | Descripción |
|-----------|------------|
| `gravity_joint_sender` | **Modo de compensación de gravedad + asa**: para brazos modificados (pinza retirada, asa acoplada); la compensación la aporta el `GravityCompensation` upstream y este repo solo refleja los ángulos en Isaac Sim |
| `isaacsim_ik_sender` | **Modo de cinemática inversa (IK)**: Introduce la pose del efector final, utiliza el solucionador IK para obtener los ángulos articulares y los envía a Isaac Sim |
| `isaacsim_traj_sender` | **Modo de planificación de trayectoria (Traj)**: Añade planificación de trayectoria en el espacio articular (perfil de tiempo MIN_JERK) sobre la base de IK para lograr un control de movimiento suave |
| `isaacsim_joint_test_sender` | **Modo de prueba de articulaciones**: Envía trayectorias de ángulos articulares preestablecidas sin un robot real para verificar si el receptor y la comunicación de Isaac Sim funcionan correctamente |
| `joint_reader_sender` | **Modo de mapeo del mundo real a la simulación**: Solo lectura de ángulos articulares y mapeo a Isaac Sim, ideal para usar con otros proyectos de control (por ejemplo, sincronizar en Isaac Sim para visualización el robot real que ejecuta otras tareas) |

### Estructura de directorios

```
reBot-Isaacsim/
├── pyproject.toml                           # Configuración del workspace de uv
├── README.md
├── README_EN.md
├── README_ES.md
├── reBotArm_Isaacsim/                       # Directorio principal de ejemplos
│   ├── gravity_joint_sender.py              # Modo asa (GravityCompensation upstream + UDP)
│   ├── isaacsim_ik_sender.py                # Modo de cinemática inversa (control IK)
│   ├── isaacsim_traj_sender.py              # Modo de planificación de trayectorias (IK + trayectoria en espacio articular)
│   ├── isaacsim_joint_test_sender.py        # Modo de prueba de articulaciones (trayectoria predefinida, sin hardware)
│   ├── joint_reader_sender.py                # Modo de mapeo Real-to-Sim (solo lectura, visualización sincronizada)
│   ├── isaacsim_joint_receiver.py           # Receptor de Isaac Sim (sincronización de ángulos articulares)
│   ├── live_sync.py                         # Script auxiliar con instrucciones de arranque
│   ├── set_hw_rs.py                         # Cambia el YAML de hardware del submodule a RS (local; no hacer commit)
│   ├── run_sender.sh                        # Lanza el emisor
│   └── run_isaacsim_receiver.sh             # Lanza el receptor de Isaac Sim
├── .gitmodules
├── third_party/
│   └── reBotArm_control_py/                 # git submodule: biblioteca de control upstream
└── usd/
    └── RS-rebot-dev-arm/
        └── RS-rebot-dev-arm.usda            # Asset del robot para Isaac Sim
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

No se requiere hardware físico. Se envía continuamente una trayectoria articular predefinida para verificar la comunicación con el receptor de Isaac Sim.

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_joint_test_sender.py
```

El emisor interpola continuamente entre varias configuraciones articulares predefinidas y las transmite a Isaac Sim. No lee el YAML de hardware, así que no hacen falta `set_hw_rs.py` ni CAN.

#### ② Modo de cinemática inversa (`isaacsim_ik_sender`)

Introduce una pose del efector final (posición/orientación). El solucionador IK calcula la configuración articular y mueve el brazo robótico en Isaac Sim. `load_robot_model()` lee el `rebotarm.yaml` del submodule, así que cambia a RS primero:

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

Añade planificación de trayectoria en el espacio articular (MIN_JERK) sobre la base de IK para un movimiento suave del robot. También usa `load_robot_model()` contra ese YAML, así que cambia a RS primero:

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

#### ④ Modo de mango con compensación de gravedad (`gravity_joint_sender`)

Diseñado para brazos robóticos modificados (garra retirada y mango instalado). El robot puede ser guiado manualmente mientras Isaac Sim sigue el movimiento.

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
./run_sender.sh
```

**Comportamiento esperado:**
- `set_hw_rs.py` apunta el `rebotarm.yaml` del submodule a `rebotarm_rs.yaml` para que motores y el modelo de gravedad usen el mismo YAML (cambio local; no hacer commit)
- Se conecta el brazo físico y arranca el `GravityCompensation` upstream (mismo MIT + feed-forward `g(q)` que `example/9`)
- El brazo puede moverse libremente con la mano
- Este script solo envía los ángulos articulares a Isaac Sim por UDP a 60 Hz
- No ejecutes a la vez el `example/9` upstream: los dos procesos competirían por el CAN

#### ⑤ Modo de mapeo del mundo real a la simulación (`joint_reader_sender`)

Lee únicamente los ángulos articulares y refleja el estado del robot físico en Isaac Sim. Este modo está pensado para visualización mientras el robot real es controlado por otra aplicación. `RebotArm()` lee el `rebotarm.yaml` del submodule, así que cambia a RS primero:

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python joint_reader_sender.py
```

**Comportamiento esperado:**
- `set_hw_rs.py` cambia la configuración de motores a RS (cambio local; no hacer commit)
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
| `sequence` | int | Número de secuencia de trama incremental |
| `timestamp` | float | Marca de tiempo Unix (segundos) |
| `joint_positions` | float[6] | Primeras seis posiciones articulares (rad) |
| `gripper_position` | float | Objetivo de posición de los dedos de la pinza (m); cada emisor lo calcula con su propia conversión (véase más abajo) |

**Flujo de control de la pinza:**

El receptor aplica el `gripper_position` recibido directamente como objetivo de posición de las dos articulaciones prismáticas de los dedos, recortado por dedo a `[0, límite superior]` (límites superiores del USD: 0,05 m en ambos dedos; los dedos se accionan 1:1 por un solo motor a través de un piñón). El receptor no aplica ninguna escala adicional. Los emisores convierten su entrada a `gripper_position` de la siguiente manera:

| Emisor | Conversión a `gripper_position` (m) |
|------|------|
| `gravity_joint_sender` | `gripper_q × 0.03` (`GRIPPER_POSITION_SCALE = 0.03`) |
| `joint_reader_sender` | `gripper_q × 0.007` (`GRIPPER_POSITION_SCALE = 0.007`) |
| `isaacsim_traj_sender` | `ratio × 0.045` (entrada `gripper <0–1>`, recortado a 0,045 m) |
| `isaacsim_ik_sender` | `ratio ∈ [0, 1]` sin convertir, enviado como metros, de modo que cualquier ratio ≥ el límite superior de un dedo abre ese dedo por completo |

## Parámetros de configuración

### Emisor (`gravity_joint_sender.py`)

| Parámetro | Predeterminado | Descripción |
|------|--------|------|
| YAML de hardware | `set_hw_rs.py` → `rebotarm_rs.yaml` | `RebotArm()` lee `config/rebotarm.yaml` del submodule; motores y Pinocchio lo comparten |
| `ARM_JOINT_COUNT` | 6 | Número de articulaciones del brazo |
| `DEFAULT_PORT` | 5005 | Puerto UDP |
| `DEFAULT_SEND_HZ` | 60.0 | Frecuencia de transmisión (Hz) |
| `GRIPPER_POSITION_SCALE` | 0.03 | Factor de conversión de ángulo de pinza a posición |
| `position_alpha` | 0.2 | Coeficiente del filtro paso bajo |

### Receptor (`isaacsim_joint_receiver.py`)

| Parámetro | Predeterminado | Descripción |
|------|--------|------|
| `ARM_JOINT_COUNT` | 6 | Número de articulaciones del brazo |
| `DEFAULT_PORT` | 5005 | Puerto UDP |
| `DEFAULT_RENDER_HZ` | 120.0 | Frecuencia de renderizado de la simulación (Hz) |
| `ROBOT_PRIM_PATH` | `/World/reBotArm` | Ruta del Prim del robot en Isaac Sim |
| `ASSET_RELATIVE_PATH` | `usd/RS-rebot-dev-arm/RS-rebot-dev-arm.usda` | Ruta relativa al recurso USD |

## Solución de problemas

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

### Los ángulos de las articulaciones no se sincronizan

- Verifica que tanto el emisor como el receptor estén usando el puerto `5005`.
- Comprueba que el registro del emisor muestre continuamente `[send]`.
- Comprueba que el registro del receptor muestre continuamente `[recv]`.
- Prueba `isaacsim_joint_test_sender.py` para descartar problemas relacionados con el hardware.

### Componentes y entornos de Python

| Componente | Entorno de Python | Script de inicio |
|------|------|------|
| Emisor (Robot físico) | Entorno uv `reBotArm_control_py` | `run_sender.sh` |
| Emisor (Modo de prueba) | Entorno uv `reBotArm_control_py` | `isaacsim_joint_test_sender.py` |
| Receptor | Python oficial de Isaac Sim (`python.sh`) | `run_isaacsim_receiver.sh` |


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>




