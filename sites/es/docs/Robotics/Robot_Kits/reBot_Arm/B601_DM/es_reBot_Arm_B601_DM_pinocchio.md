---
description: Este tutorial presenta cómo usar Pinocchio y MeshCat para análisis cinemático y visualización en el brazo robótico reBot Arm B601-DM.
title: Introducción a Pinocchio y MeshCat para reBot Arm B601-DM
keywords:
  - Pinocchio
  - MeshCat
  - Robotic Arm
  - Robot
  - LeRobot
  - Kinematics
slug: /rebot_arm_b601_dm_pinocchio_meshcat
last_update:
  date: 2026-03-24
  author: LiuJunjie
translation:
  skip:
    - [zh-CN]
createdAt: '2026-03-24'
updatedAt: '2026-03-25'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_pinocchio_meshcat/
---

# Introducción a Pinocchio y MeshCat para reBot Arm B601-DM

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>Brazo robótico de 6 GDL · Soporte multi-motor · Solucionador de cinemática · Planificación de trayectorias · Completamente de código abierto</strong>
</p>

---

## 📖 Introducción

**reBotArm Control** es una biblioteca de control en Python para el brazo robótico reBot Arm B601, que proporciona una solución completa desde el control de motor de bajo nivel hasta el cálculo de cinemática de alto nivel.

### ✨ Funciones principales

- 🦾 **Soporte de doble modelo** — B601-DM (motores Damiao) y B601-RS (motores RobStride)
- 🧮 **Solucionador de cinemática** — Cinemática directa/inversa basada en Pinocchio
- 🛤️ **Planificación de trayectorias** — Trayectoria geodésica en SE(3) + seguimiento CLIK
- 🔧 **Configuración flexible** — Archivo de configuración YAML para una rápida adaptación de hardware

---

## ⚙️ Inicio rápido

### Requisitos

| Elemento | Requisito |
|------|-------------|
| **Python** | 3.10+ |
| **Sistema operativo** | Ubuntu 22.04+ |
| **Interfaz de comunicación** | Puente serie USB2CAN o interfaz CAN |

### Pasos de instalación

#### Paso 1. Instalar uv (si no está instalado)

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

#### Paso 2. Sincronizar entorno (instalar todas las dependencias)

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` creará automáticamente un entorno virtual (si no existe) e instalará todas las dependencias según `pyproject.toml` y `uv.lock`.
:::

---

## 🔌 Configuración de hardware

### Predeterminado: puente serie Damiao USB2CAN

reBot Arm B601-DM utiliza por defecto el módulo de puente serie Damiao USB2CAN.

**Conexión de hardware**:

1. Conecta el módulo USB2CAN a tu ordenador mediante un cable USB
2. El sistema lo reconocerá automáticamente como el dispositivo `/dev/ttyACM0`

**Verificación de configuración**:

```bash
# Check device
ls /dev/ttyACM0

# Scan motors
motorbridge-cli scan --vendor damiao --transport dm-serial \
    --serial-port /dev/ttyACM0 --serial-baud 921600
```

### Opcional: interfaz CAN estándar

Usando otros adaptadores USB-CAN (CANable, PCAN, etc.):

```bash
# Start CAN interface
sudo ip link set can0 up type can bitrate 500000

# Verify interface
ip -details link show can0
```

### Configuración de la marca de motor

| Marca de motor | Transmisión | Configuración | Tasa de baudios |
|-------------|--------------|---------------|-----------|
| **Damiao** | Puente serie | `dm-serial` | 921600 |
| **Damiao** | Interfaz CAN | `socketcan` | 500000 |
| **RobStride** | Interfaz CAN | `socketcan` | 500000 |

:::tip

- Para motores Damiao que usan puente serie, se debe establecer `--transport dm-serial`
- Regla de ID de feedback: `feedback_id = motor_id + 0x10`

:::

---

## 📁 Estructura del proyecto

```
reBotArm_control_py/
├── config/                     # Configuration files
│   └── robot.yaml              # Joint parameter configuration
├── example/                    # Example programs
│   ├── Debug Tools/
│   │   ├── 1_damiao_text.py        # Single motor console
│   │   └── 2_zero_and_read.py      # Zero calibration
│   ├── Kinematics Tests/
│   │   ├── 5_fk_test.py            # Forward kinematics
│   │   └── 6_ik_test.py            # Inverse kinematics
│   ├── Real Machine Control/
│   │   ├── 7_arm_ik_control.py     # IK real-time control
│   │   ├── 8_arm_traj_control.py   # Trajectory planning
│   │   └── 9_gravity_compensation.py  # Gravity compensation
│   └── sim/                    # Simulation tools
├── reBotArm_control_py/        # Core library
│   ├── actuator/               # Actuator module
│   ├── kinematics/             # Kinematics module
│   ├── controllers/            # Controller module
│   └── trajectory/             # Trajectory planning module
├── urdf/                       # URDF model
└── README.md
```

---

## 🎮 Programas de ejemplo

### Herramientas de depuración

#### 1️⃣ Consola de un solo motor (`1_damiao_text.py`)

Prueba de un solo motor mediante el SDK motorbridge con tres modos de control.

**Uso**:

```bash
uv run python example/1_damiao_text.py
```

**Comandos interactivos**:

| Comando | Descripción |
|---------|-------------|
| `mit <pos_deg> [vel kp kd tau]` | Modo MIT |
| `posvel <pos_deg> [vlim]` | Modo POS_VEL |
| `vel <vel_rad_s>` | Modo velocidad |
| `enable` / `disable` | Activar/Desactivar |
| `set_zero` | Establecer posición cero |
| `state` | Ver estado |

---

#### 2️⃣ Calibración de cero y monitor de ángulo (`2_zero_and_read.py`)

Configura automáticamente todos los ceros de las articulaciones y muestra los ángulos articulares en tiempo real.

**Uso**:

```bash
uv run python example/2_zero_and_read.py
```

---

### Pruebas de cinemática

#### 5️⃣ Prueba de cinemática directa (`5_fk_test.py`)

Calcular la pose del efector final a partir de los ángulos de las articulaciones.

**Entrada**: 6 ángulos articulares (grados)

**Salida**:

- Posición del efector final (X, Y, Z) — Unidad: metros
- Matriz de rotación (3×3)
- Ángulos de Euler (Roll/Pitch/Yaw) — Unidad: grados

**Ejemplo**:

```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180
```

---

#### 6️⃣ Prueba de cinemática inversa (`6_ik_test.py`)

Resolver los ángulos articulares a partir de la pose deseada del efector final.

**Formato de entrada**:

- Solo posición: `<x> <y> <z>` (metros)
- Posición + orientación: `<x> <y> <z> <roll> <pitch> <yaw>` (grados)

**Ejemplo**:

```bash
uv run python example/6_ik_test.py
> 0.25 0.0 0.15              # Position only
> 0.25 0.0 0.15 0 0 0        # Position + Orientation
```

---

### Control de máquina real

:::tip Configuración de permisos
Antes de ejecutar los ejemplos de control de máquina real, necesitas configurar los permisos del dispositivo:

```bash
# Set serial device permission (Damiao USB2CAN)
sudo chmod 666 /dev/ttyACM0

# Or for CAN interface (e.g., can0)
sudo chmod 666 /dev/can0
```

:::

#### 7️⃣ Control IK en tiempo real (`7_arm_ik_control.py`)

Control del efector final en tiempo real basado en el solucionador IK.

**Comandos interactivos**:

| Comando | Descripción |
|---------|-------------|
| `x y z [roll pitch yaw]` | Pose objetivo del efector final |
| `state` | Ver estado actual/objetivo |
| `pos` | Posición actual del efector final |
| `q/quit/exit` | Salir |

**Uso**:

```bash
uv run python example/7_arm_ik_control.py
> 0.3 0.0 0.2
> 0.3 0.1 0.25 0 0.5 0
```

---

#### 8️⃣ Control de planificación de trayectorias (`8_arm_traj_control.py`)

Planificación de trayectorias geodésicas en SE(3) + seguimiento CLIK.

**Formato de entrada**:

```
x y z [roll pitch yaw] [duration]
```

**Parámetros**:

- `x, y, z`: Posición objetivo (metros)
- `roll, pitch, yaw`: Orientación objetivo (radianes)
- `duration`: Duración del movimiento (segundos), por defecto 2.0 s

**Uso**:

```bash
uv run python example/8_arm_traj_control.py
> 0.3 0.0 0.3 0 0.4 0 2.0
```

---

#### 9️⃣ Control de compensación de gravedad (`9_gravity_compensation.py`)

Compensa la gravedad de las articulaciones utilizando el modelo dinámico de Pinocchio.

**Ley de control**:

```
tau = g(q)          — Gravity feedforward
pos = current motor position  — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all motors
```

**Comportamiento esperado**:

- El brazo robótico puede "flotar" en cualquier postura
- No caerá por su propio peso cuando se suelte
- Se puede mover manualmente a cualquier posición

**Uso**:

```bash
uv run python example/9_gravity_compensation.py
```

**Salida**:

- Visualización en tiempo real del par esperado para cada articulación (N·m)
- Pulsa `Ctrl+C` para detener y desconectar

---

## 📄 Licencia

Este proyecto es de código abierto bajo la **Licencia MIT**.

---

## ☎ Contáctanos

- **Soporte técnico**: [Submit Issue](https://github.com/vectorBH6/reBotArm_control_py/issues)
- **Repositorio**: [GitHub](https://github.com/vectorBH6/reBotArm_control_py)

---

<p align="center">
  <strong>🌟 Si este proyecto te resulta útil, ¡por favor danos una estrella!</strong>
</p>
