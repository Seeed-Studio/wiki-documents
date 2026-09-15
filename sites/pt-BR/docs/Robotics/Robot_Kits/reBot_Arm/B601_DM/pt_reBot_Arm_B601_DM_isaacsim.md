---
description: Este tutorial mostra como baixar o Isaac Sim e implantar o robô reBot-B601-DM em um ambiente de simulação para desenvolvimento e depuração.
title: Simulando o reBot-B601-DM com Isaac Sim
keywords:
  - Isaacsim
  - braço robótico
  - robô
  - operação remota
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
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_isaacsim/
---

import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

## Introdução

Este é um projeto de simulação para o robô reBot-B601-DM construído com o NVIDIA Isaac Sim. Ele utiliza o mecanismo de física de alta fidelidade do Isaac Sim para reproduzir com precisão o comportamento cinemático do robô e a coordenação da garra em um ambiente virtual, fornecendo uma plataforma limpa, apenas de simulação, para desenvolvimento de algoritmos de controle, validação de planejamento de trajetória e teste de protocolos de comunicação.

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_dm_isaacsim.png" alt="reBot Arm B601-DM Isaac Sim" />
</div>

## Requisitos de sistema
- Sistema operacional: Ubuntu 22.04 LTS / 24.04 LTS (recomendado) ou Windows 11 (requer WSL2)
- GPU: placa de vídeo NVIDIA série RTX (recomendado RTX 3070 ou mais recente), VRAM ≥ 8GB
- Driver: driver oficial NVIDIA ≥ 535.x, com suporte a CUDA 12.x
- Memória: ≥ 32GB de RAM (o carregamento de cenas do Isaac Sim e a simulação física consomem muita memória)
- Armazenamento: ≥ 100GB de espaço livre em SSD (para instalação do Isaac Sim, cache e assets USD)

:::info
Neste wiki, o PC está conectado ao robô, enquanto o servidor executa a simulação do Isaac Sim. O servidor está equipado com uma GPU NVIDIA RTX 4090 e executa Ubuntu 22.04 LTS.
:::

## Instalando o Isaac Sim

Links e recursos oficiais:

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/quick-install.html

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/download.html#isaac-sim-latest-release

### Baixar o pacote Standalone do Isaac Sim

> 💡 Adequado para a maioria dos usuários; não requer compilação e funciona imediatamente.

#### Download e extração

Baixe `isaac-sim-standalone-6.0.0-linux-x86\_64.zip` no [site oficial da NVIDIA](https://developer.nvidia.com/isaac-sim).

```Bash
mkdir -p ~/isaacsim
cd ~/Downloads
unzip isaac-sim-standalone-6.0.0-linux-x86_64.zip -d ~/isaacsim
cd ~/isaacsim
./post_install.sh
```

#### Definir variáveis de ambiente

Adicione o seguinte a `~/.bashrc` ou `~/.zshrc`:

```Bash
export ISAACSIM_PATH="${HOME}/isaacsim"
export ISAACSIM_PYTHON_EXE="${ISAACSIM_PATH}/python.sh"
```

Em seguida, execute `source ~/.bashrc` para aplicar as alterações.

#### Verificação de inicialização

```Bash
${ISAACSIM_PATH}/isaac-sim.sh
```

## Baixar o projeto

```Bash
git clone https://github.com/hopcan/reBot-Isaacsim.git
```

Configure o ambiente uv para `reBotArm_control_py`:

```bash
cd third_party/reBotArm_control_py
uv sync
```

### Visão geral dos componentes funcionais

Este projeto fornece vários módulos de envio para suportar diferentes cenários de uso:

| Componente | Descrição |
|------|------|
| `gravity_joint_sender` | **Modo de compensação de gravidade com alça**: para um robô modificado (garra removida, alça instalada), a compensação de gravidade permite o movimento manual das juntas e a sincronização em tempo real dos ângulos das juntas com o Isaac Sim |
| `isaacsim_ik_sender` | **Modo de cinemática inversa (IK)**: insira a pose do efetuador final, resolva os ângulos das juntas por meio do solucionador de IK e envie-os para o Isaac Sim |
| `isaacsim_traj_sender` | **Modo de planejamento de trajetória (Traj)**: estende o IK com planejamento de trajetória no espaço de juntas (perfil de temporização MIN_JERK) para obter controle de movimento suave |
| `isaacsim_joint_test_sender` | **Modo de teste de juntas**: não requer robô real; envia uma trajetória de ângulos de junta predefinida para verificar o receptor do Isaac Sim e o link de comunicação |
| `joint_reader_sender` | **Modo de mapeamento Real-para-Sim**: lê apenas os ângulos das juntas e os mapeia para o Isaac Sim, adequado para uso com outros projetos de controle (por exemplo, enquanto o robô real executa outras tarefas, seus estados de junta são sincronizados com o Isaac Sim para visualização) |

### Estrutura de diretórios

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

## Inicialização (modo de dois terminais)

São necessários dois terminais separados. **O Terminal 1 é o receptor do Isaac Sim**, e **o Terminal 2 executa o sender com base no modo selecionado**.

### Terminal 1 — Iniciar o receptor do Isaac Sim (usado por todos os modos)
Execute o script do receptor com o Python do Isaac Sim.

:::tip
Modifique os valores de `DEFAULT_SIM_HOST` e `DEFAULT_REBOT_ARM_HOST` de acordo com a sua configuração.

`DEFAULT_SIM_HOST` é o endereço IP do host que executa o ambiente Isaac Sim.

`DEFAULT_REBOT_ARM_HOST` é o endereço IP do host conectado ao robô.

Se ambas as pontas estiverem sendo executadas na mesma máquina, defina `DEFAULT_SIM_HOST` como `"127.0.0.1"`.
:::

```bash
cd reBotArm_Isaacsim
${ISAACSIM_PYTHON_EXE}  gravity_joint_sender.py 
```

**Saída esperada:**
- Iniciar a interface gráfica (GUI) do Isaac Sim
- Carregar o chão e os assets USD do robô
- Escutar em UDP `DEFAULT_SIM_HOST:5005`
- Aguardar a conexão do sender

### Terminal 2 — Iniciar o sender apropriado para o modo selecionado

**Ordem de inicialização: primeiro o receptor, depois o sender.**

:::tip

Alguns recursos exigem conexão com o robô real. As etapas a seguir são necessárias ao usar um adaptador USB2CAN.

```bash
# Check the USB2CAN serial port to confirm it is detected
ls ttyACM*

# Grant port permissions
sudo chmod 666 /dev/ttyACM*
```
Defina `DEFAULT_SIM_HOST` de acordo com o seu dispositivo.

`DEFAULT_SIM_HOST` é o endereço IP do host que executa o ambiente Isaac Sim.

Se ambas as pontas estiverem sendo executadas na mesma máquina, defina `DEFAULT_SIM_HOST` como `"127.0.0.1"`.
:::

#### ① Modo de teste de juntas (`isaacsim_joint_test_sender`)

Não é necessário hardware real. Uma trajetória predefinida é enviada em loop para validar a comunicação e o receptor do Isaac Sim:

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_joint_test_sender.py
```

O sender interpola lentamente entre várias poses de junta predefinidas e as envia em loop sem exigir uma conexão CAN.

#### ② Modo de cinemática inversa (`isaacsim_ik_sender`)

Insira a pose do efetuador final (posição/orientação), resolva o IK e acione o robô simulado no Isaac Sim. Execute diretamente com `uv run` no diretório `reBotArm_Isaacsim/`:

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_ik_sender.py
```

**Formato de entrada (um comando por linha):**
```
x y z                       # position (meters), orientation remains unchanged
x y z r p y                 # position + orientation (meters/degrees)
q j1 j2 j3 j4 j5 j6         # send joint angles directly (degrees)
gripper <0~1>                # update the gripper independently
```

#### ③ Modo de planejamento de trajetória (`isaacsim_traj_sender`)

Este modo se baseia no IK e adiciona planejamento de trajetória no espaço de juntas (MIN_JERK) para um movimento suave. Execute diretamente com `uv run` no diretório `reBotArm_Isaacsim/`:

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_traj_sender.py
```

**Formato de entrada (um comando por linha):**
```
x y z                       # position (meters)
x y z r p y                 # position + orientation (meters/degrees)
q j1 j2 j3 j4 j5 j6         # direct joint-space command (degrees)
gripper <0~1>                # update the gripper independently
speed <scale>                # adjust trajectory duration ratio
resync                       # re-read the current joint angles from the simulation side
```

#### ④ Modo de compensação de gravidade com alça (`gravity_joint_sender`)

Adequado para um robô modificado (garra removida, alça acoplada), permitindo movimento manual para controlar o robô no Isaac Sim:

```bash
cd reBotArm_Isaacsim
./run_sender.sh
```

**Comportamento esperado:**
- Conectar ao robô real e habilitar MIT + compensação de alimentação de gravidade (gravity feedforward)
- O robô pode ser movido livremente à mão
- Os ângulos das juntas são enviados continuamente via UDP a 60 Hz

#### ⑤ Modo de mapeamento Real-para-Sim (`joint_reader_sender`)

Lê apenas os ângulos das juntas e os mapeia para o Isaac Sim. Isso é adequado quando o robô real está executando outras tarefas e você deseja visualizar o mesmo movimento no Isaac Sim. Execute diretamente com `uv run` no diretório `reBotArm_Isaacsim/`:

```bash
cd reBotArm_Isaacsim
uv run python joint_reader_sender.py
```

**Comportamento esperado:**
- Apenas lê os ângulos das juntas (modo de feedback passivo), sem enviar nenhum comando de controle
- Os ângulos das juntas são enviados continuamente via UDP a 60 Hz
- Quando o robô real é controlado por outro projeto, o movimento pode ser visualizado no Isaac Sim ao mesmo tempo

## Protocolo de comunicação

UDP JSON na porta `DEFAULT_SIM_HOST:5005`.

**Payload enviado pelo sender por frame:**

```json
{
  "sequence": 123,
  "timestamp": 1718000000.123,
  "joint_positions": [0.0, 0.1, 0.2, -0.1, 0.0, -0.02],
  "gripper_position": 0.01
}
```

| Campo | Tipo | Descrição |
|------|------|------|
| `sequence` | int | Número de sequência incremental |
| `timestamp` | float | Timestamp Unix (segundos) |
| `joint_positions` | float[6] | Primeiros 6 ângulos das juntas (rad) |
| `gripper_position` | float | Posição do gripper (m), convertida pelo remetente usando `GRIPPER_POSITION_SCALE` |

## Parâmetros de Configuração

### Remetente (`gravity_joint_sender.py`)

| Parâmetro | Valor Padrão | Descrição |
|------|--------|------|
| `ARM_JOINT_COUNT`| 6 | Número de juntas |
| `DEFAULT_PORT` | 5005 | Porta UDP |
| `DEFAULT_SEND_HZ` | 60.0 | Frequência de envio (Hz) |
| `GRIPPER_POSITION_SCALE` | 0.007 | Fator de escala do ângulo do gripper para posição |

### Receptor (`isaacsim_joint_receiver.py`)

| Parâmetro | Valor Padrão | Descrição |
|------|--------|------|
| `ARM_JOINT_COUNT` | 6 | Número de juntas |
| `DEFAULT_PORT` | 5005 | Porta UDP |
| `DEFAULT_RENDER_HZ` | 120.0 | Frequência de renderização da simulação (Hz) |
| `GRIPPER_POSITION_SCALE` | 0.0073 | Fator de escala da posição do gripper |
| `ROBOT_PRIM_PATH` | `/World/reBotArm` | Caminho do Prim do robô no Isaac Sim |
| `ASSET_RELATIVE_PATH` | usd/reBot_B601_DM/reBot_B601_DM.usda | Caminho relativo para o asset USD |

## Problemas Comuns

### `OSError: [Errno 98] Address already in use`

A porta 5005 já está em uso. Primeiro confirme e encerre o processo que está usando a porta:

```bash
# Check which process is using the port
sudo lsof -i :5005

# Terminate the process (replace PID with the actual value)
kill <PID>
```

### Ângulos das Juntas Estão Fora de Sincronização

- Confirme que o remetente e o receptor usam a mesma porta (ambos 5005)
- Verifique se `[send]` aparece continuamente nos logs do remetente
- Verifique se `[recv]` aparece continuamente nos logs do receptor
- Tente usar `isaacsim_joint_test_sender.py` para descartar problemas de hardware

### Componentes e Ambiente Python

| Componente | Ambiente Python | Script de Inicialização |
|------|------------|---------|
| Remetente (robô real) | Ambiente uv `reBotArm_control_py` | `gravity_joint_sender.py` |
| Remetente (modo de teste) | Ambiente uv `reBotArm_control_py` | `isaacsim_joint_test_sender.py` |
| Receptor | Python oficial do Isaac Sim (`python.sh`) | `isaacsim_joint_receiver.py` |

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Fornecemos vários canais de suporte para ajudar a garantir uma experiência tranquila com nossos produtos. Oferecemos diversos métodos de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

