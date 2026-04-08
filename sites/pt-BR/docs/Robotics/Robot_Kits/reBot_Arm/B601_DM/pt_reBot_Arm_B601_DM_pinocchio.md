---
description: Este tutorial apresenta como usar Pinocchio e MeshCat para análise cinemática e visualização no braço robótico reBot Arm B601-DM.
title: Introdução ao Pinocchio e MeshCat para reBot Arm B601-DM
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
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/
---

# Introdução ao Pinocchio e MeshCat para reBot Arm B601-DM

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
  <strong>Braço Robótico 6-DOF · Suporte a Múltiplos Motores · Solucionador de Cinemática · Planejamento de Trajetória · Totalmente Open Source</strong>
</p>

---

## 📖 Introdução

**reBotArm Control** é uma biblioteca de controle em Python para o braço robótico reBot Arm B601, oferecendo uma solução completa desde o controle de motor de baixo nível até o cálculo de cinemática de alto nível.

### ✨ Recursos Principais

- 🦾 **Suporte a Dois Modelos** — B601-DM (motores Damiao) e B601-RS (motores RobStride)
- 🧮 **Solucionador de Cinemática** — Cinemática direta/inversa baseada em Pinocchio
- 🛤️ **Planejamento de Trajetória** — Trajetória geodésica em SE(3) + rastreamento CLIK
- 🔧 **Configuração Flexível** — Arquivo de configuração YAML para rápida adaptação de hardware

---

## ⚙️ Início Rápido

### Requisitos

| Item | Requisito |
|------|-------------|
| **Python** | 3.10+ |
| **Sistema Operacional** | Ubuntu 22.04+ |
| **Interface de Comunicação** | Ponte Serial USB2CAN ou Interface CAN |

### Etapas de Instalação

#### Etapa 1. Instalar uv (se ainda não estiver instalado)

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

#### Etapa 2. Sincronizar Ambiente (Instalar Todas as Dependências)

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

:::tip
`uv sync` criará automaticamente um ambiente virtual (se não existir) e instalará todas as dependências de acordo com `pyproject.toml` e `uv.lock`.
:::

---

## 🔌 Configuração de Hardware

### Padrão: Ponte Serial USB2CAN Damiao

O reBot Arm B601-DM utiliza por padrão o módulo de ponte serial USB2CAN da Damiao.

**Conexão de Hardware**:

1. Conecte o módulo USB2CAN ao seu computador via cabo USB
2. O sistema irá reconhecê-lo automaticamente como dispositivo `/dev/ttyACM0`

**Verificação de Configuração**:

```bash
# Check device
ls /dev/ttyACM0

# Scan motors
motorbridge-cli scan --vendor damiao --transport dm-serial \
    --serial-port /dev/ttyACM0 --serial-baud 921600
```

### Opcional: Interface CAN Padrão

Usando outros adaptadores USB-CAN (CANable, PCAN, etc.):

```bash
# Start CAN interface
sudo ip link set can0 up type can bitrate 500000

# Verify interface
ip -details link show can0
```

### Configuração da Marca dos Motores

| Marca do Motor | Transmissão | Configuração | Taxa de Baud |
|-------------|--------------|---------------|-----------|
| **Damiao** | Ponte Serial | `dm-serial` | 921600 |
| **Damiao** | Interface CAN | `socketcan` | 500000 |
| **RobStride** | Interface CAN | `socketcan` | 500000 |

:::tip

- Para motores Damiao usando ponte serial, é obrigatório definir `--transport dm-serial`
- Regra de ID de feedback: `feedback_id = motor_id + 0x10`

:::

---

## 📁 Estrutura do Projeto

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

## 🎮 Programas de Exemplo

### Ferramentas de Depuração

#### 1️⃣ Console de Motor Único (`1_damiao_text.py`)

Teste direto de um único motor via SDK motorbridge com três modos de controle.

**Uso**:

```bash
uv run python example/1_damiao_text.py
```

**Comandos Interativos**:

| Comando | Descrição |
|---------|-------------|
| `mit <pos_deg> [vel kp kd tau]` | Modo MIT |
| `posvel <pos_deg> [vlim]` | Modo POS_VEL |
| `vel <vel_rad_s>` | Modo de Velocidade |
| `enable` / `disable` | Habilitar/Desabilitar |
| `set_zero` | Definir posição zero |
| `state` | Ver estado |

---

#### 2️⃣ Calibração de Zero & Monitor de Ângulo (`2_zero_and_read.py`)

Define automaticamente o zero de todas as juntas e exibe os ângulos das juntas em tempo real.

**Uso**:

```bash
uv run python example/2_zero_and_read.py
```

---

### Testes de Cinemática

#### 5️⃣ Teste de Cinemática Direta (`5_fk_test.py`)

Calcula a pose do efetuador final a partir dos ângulos das juntas.

**Entrada**: 6 ângulos de junta (graus)

**Saída**:

- Posição do efetuador final (X, Y, Z) — Unidade: metros
- Matriz de rotação (3×3)
- Ângulos de Euler (Rolagem/Tangagem/Guinada) — Unidade: graus

**Exemplo**:

```bash
uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180
```

---

#### 6️⃣ Teste de Cinemática Inversa (`6_ik_test.py`)

Resolve os ângulos das juntas a partir da pose desejada do efetuador final.

**Formato de Entrada**:

- Apenas posição: `<x> <y> <z>` (metros)
- Posição + Orientação: `<x> <y> <z> <roll> <pitch> <yaw>` (graus)

**Exemplo**:

```bash
uv run python example/6_ik_test.py
> 0.25 0.0 0.15              # Position only
> 0.25 0.0 0.15 0 0 0        # Position + Orientation
```

---

### Controle em Máquina Real

:::tip Configuração de Permissões
Antes de executar os exemplos de controle em máquina real, é necessário definir as permissões do dispositivo:

```bash
# Set serial device permission (Damiao USB2CAN)
sudo chmod 666 /dev/ttyACM0

# Or for CAN interface (e.g., can0)
sudo chmod 666 /dev/can0
```

:::

#### 7️⃣ Controle em Tempo Real por IK (`7_arm_ik_control.py`)

Controle em tempo real do efetuador final baseado no solucionador de IK.

**Comandos Interativos**:

| Comando | Descrição |
|---------|-------------|
| `x y z [roll pitch yaw]` | Pose alvo do efetuador final |
| `state` | Ver estado atual/alvo |
| `pos` | Posição atual do efetuador final |
| `q/quit/exit` | Sair |

**Uso**:

```bash
uv run python example/7_arm_ik_control.py
> 0.3 0.0 0.2
> 0.3 0.1 0.25 0 0.5 0
```

---

#### 8️⃣ Controle por Planejamento de Trajetória (`8_arm_traj_control.py`)

Planejamento de trajetória geodésica em SE(3) + rastreamento CLIK.

**Formato de Entrada**:

```
x y z [roll pitch yaw] [duration]
```

**Parâmetros**:

- `x, y, z`: Posição alvo (metros)
- `roll, pitch, yaw`: Orientação alvo (radianos)
- `duration`: Duração do movimento (segundos), padrão 2,0 s

**Uso**:

```bash
uv run python example/8_arm_traj_control.py
> 0.3 0.0 0.3 0 0.4 0 2.0
```

---

#### 9️⃣ Controle de Compensação de Gravidade (`9_gravity_compensation.py`)

Compensa a gravidade das juntas usando o modelo dinâmico do Pinocchio.

**Lei de Controle**:

```
tau = g(q)          — Gravity feedforward
pos = current motor position  — Joint position follows current position
kp = 2,  kd = 1     — Unified stiffness/damping for all motors
```

**Comportamento Esperado**:

- O braço robótico pode "flutuar" em qualquer postura
- Não cairá devido ao próprio peso quando solto
- Pode ser movido manualmente para qualquer posição

**Uso**:

```bash
uv run python example/9_gravity_compensation.py
```

**Saída**:

- Exibição em tempo real do torque esperado para cada junta (N·m)
- Pressione `Ctrl+C` para parar e desconectar

---

## 📄 Licença

Este projeto é open source sob a **Licença MIT**.

---

## ☎ Contato

- **Suporte Técnico**: [Submit Issue](https://github.com/vectorBH6/reBotArm_control_py/issues)
- **Repositório**: [GitHub](https://github.com/vectorBH6/reBotArm_control_py)

---

<p align="center">
  <strong>🌟 Se este projeto for útil para você, por favor, nos dê uma Star!</strong>
</p>
