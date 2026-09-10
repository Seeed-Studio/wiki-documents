---
description: Este tutorial mostra como baixar o Isaac Sim e implantar o robô reBotArm em um ambiente de simulação para desenvolvimento e depuração.
title: Simulando o reBotArm com o Isaac Sim
keywords:
  - Isaacsim
  - Braço mecânico
  - Robô
  - Operação por controle remoto
  - Cinemática
  - Robostride
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/reBot_Arm_RS_isaacsim.jpg
slug: /rebot_arm_b601_rs_isaacsim
last_update:
  date: 8/14/2026
  author: LiuJunjie
createdAt: '2026-07-07'
updatedAt: '2026-08-17'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_isaacsim/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/reBot_Arm_RS_isaacsim.jpg" alt="reBot Arm B601-RS Isaac Sim" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

## Introdução

reBot-Isaacsim é um projeto de simulação NVIDIA Isaac Sim projetado especificamente para o reBotArm. Ele aproveita o mecanismo de física de alta fidelidade do Isaac Sim para replicar com precisão as características cinemáticas e a lógica de coordenação do gripper do braço robótico em um ambiente virtual, fornecendo um ambiente independente apenas de simulação para desenvolvimento de algoritmos de controle, verificação de planejamento de trajetória e teste de protocolos de comunicação.

## Requisitos de ambiente
- Sistema operacional: Ubuntu 22.04 LTS / 24.04 LTS (recomendado) ou Windows 11 (requer WSL2)  
- GPU: placa de vídeo da série NVIDIA RTX (recomendado RTX 3070 ou superior), VRAM ≥ 8GB  
- Driver: driver oficial NVIDIA ≥ 535.x, com suporte a CUDA 12.x  
- Memória: ≥ 32GB de RAM (cenas do Isaac Sim e simulações físicas usam muita memória)  
- Armazenamento: ≥ 100GB de espaço livre em SSD (para instalação do Isaac Sim, cache e assets USD)

:::info
Os computadores usados neste wiki estão equipados com GPUs NVIDIA RTX 4080 e executam o sistema operacional Ubuntu 22.04 LTS.
:::

## Instalar o Isaac Sim

Links e recursos oficiais:

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/quick-install.html

https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/download.html#isaac-sim-latest-release


### 🔧 Método 1: Instalação por binário pré-compilado

> 💡 Adequado para a maioria dos usuários, não é necessário compilar, pronto para uso imediato.

#### Download e descompactação

Baixe `isaac-sim-standalone-6.0.0-linux-x86_64.zip` do [site oficial da NVIDIA](https://developer.nvidia.com/isaac-sim).

```Bash
mkdir -p ~/isaacsim
cd ~/Downloads
unzip isaac-sim-standalone-6.0.0-linux-x86_64.zip -d ~/isaacsim
cd ~/isaacsim
./post_install.sh
```

#### Configurar variáveis de ambiente

Adicione o seguinte a `~/.bashrc` ou `~/.zshrc`:

```Bash
export ISAACSIM_PATH="${HOME}/isaacsim"
export ISAACSIM_PYTHON_EXE="${ISAACSIM_PATH}/python.sh"
export ISAACSIM_ROOT="${HOME}/isaacsim"
```

Em seguida, execute `source ~/.bashrc` para que tenha efeito.

#### Verificação de inicialização

```Bash
${ISAACSIM_PATH}/isaac-sim.sh
```

Na primeira inicialização, os shaders serão armazenados em cache, o que pode levar de 5 a 10 minutos, portanto, aguarde pacientemente até que a interface gráfica apareça.

### ⚙️ Método 2: Compilar a partir do código-fonte (recomendado)

> 💡 Bom para desenvolvedores que precisam ajustar o código subjacente ou depurar recursos centrais.

#### Instalar dependências

```Bash
sudo apt update
sudo apt install cmake build-essential git python3-pip
```

Certifique-se de que CUDA e cuDNN estejam instalados corretamente e correspondam ao driver da sua GPU.

#### Clonar e compilar

```Bash
git clone https://github.com/NVIDIA-Omniverse/IsaacSim.git
cd IsaacSim
./build.sh release
```

O processo de compilação pode levar de 30 a 60 minutos, dependendo do seu hardware.

#### Executar teste

```Bash
_build/linux-x86_64/release/isaac-sim.sh
```

Após a compilação a partir do código-fonte, aponte `ISAACSIM_ROOT` para esse diretório de runtime para que `run_isaacsim_receiver.sh` possa encontrar o Isaac Sim:

```bash
export ISAACSIM_ROOT="$PWD/_build/linux-x86_64/release"
```

## Baixar o projeto

Este repositório obtém a biblioteca de controle upstream `reBotArm_control_py` como um submódulo git. Faça o clone com submódulos:

```bash
git clone --recurse-submodules https://github.com/Seeed-Projects/reBot-Isaacsim.git
```

Se você já clonou o repositório e `third_party/reBotArm_control_py` está vazio:

```bash
git submodule update --init --recursive
```

Instale as dependências do sender na raiz do repositório (`run_sender.sh` e `uv run` usam o workspace raiz do uv):

```bash
cd reBot-Isaacsim
uv sync
```

### Alternar a configuração de hardware para RS

O asset do Isaac Sim deste repositório é RS (`usd/RS-rebot-dev-arm`). O `rebotarm.yaml` upstream é DM por padrão. Tanto `RebotArm()` quanto `load_robot_model()` seguem esse arquivo, portanto, compensação de gravidade, leitor de juntas, IK e Traj precisam de RS primeiro; se permanecer em DM, o protocolo do motor não irá corresponder e o Pinocchio carregará o URDF de DM. Isso apenas suja a árvore de trabalho do submódulo — não faça commit:

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
```

Em caso de sucesso, será impresso `.../config/rebotarm.yaml -> rebotarm_rs.yaml`.

### Visão geral dos componentes funcionais

Este projeto fornece vários senders para atender a diferentes cenários de uso:

| Componente | Descrição |
|-----------|------------|
| `gravity_joint_sender` | **Modo de compensação de gravidade + alça (Handle)**: Para braços robóticos modificados (gripper removido, alça acoplada), guiado à mão; a compensação vem do `GravityCompensation` upstream, este repositório apenas espelha os ângulos das juntas no Isaac Sim |
| `isaacsim_ik_sender` | **Modo de cinemática inversa (IK)**: Insira a pose do efetuador final, use o solucionador de IK para obter os ângulos das juntas e enviá-los ao Isaac Sim |
| `isaacsim_traj_sender` | **Modo de planejamento de trajetória (Traj)**: Adiciona planejamento de trajetória no espaço de juntas (perfil de tempo MIN_JERK) sobre o IK para obter controle de movimento suave |
| `isaacsim_joint_test_sender` | **Modo de teste de juntas**: Envia trajetórias de ângulos de juntas predefinidas sem um robô real para verificar se o receiver do Isaac Sim e a comunicação estão funcionando corretamente |
| `joint_reader_sender` | **Modo de mapeamento Real-para-Sim**: Apenas leitura dos ângulos das juntas e mapeamento para o Isaac Sim, ideal para uso com outros projetos de controle (por exemplo, sincronizar no Isaac Sim para visualização o robô real executando outras tarefas) |

### Estrutura de diretórios

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

## Inicialização (modo de dois terminais)

São necessários dois terminais separados. **O Terminal 1 executa o receiver do Isaac Sim**, enquanto **o Terminal 2 executa o sender apropriado, dependendo da funcionalidade desejada**.

### Terminal 1 — Iniciar o receiver do Isaac Sim (compartilhado por todos os modos)

```bash
cd reBotArm_Isaacsim
./run_isaacsim_receiver.sh
```

**Comportamento esperado:**
- Iniciar a interface gráfica do Isaac Sim
- Carregar o plano de chão e os assets USD do braço robótico
- Escutar pacotes UDP em `127.0.0.1:5005`
- Aguardar a conexão de um sender

### Terminal 2 — Iniciar o sender apropriado

**Sempre inicie primeiro o receiver e depois o sender.**

:::tip

Alguns modos exigem um braço robótico físico. Configure o adaptador USB-para-CAN conforme mostrado abaixo.

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

#### ① Modo de teste de juntas (`isaacsim_joint_test_sender`)

Nenhum hardware físico é necessário. Uma trajetória de juntas predefinida é enviada continuamente para verificar a comunicação com o receiver do Isaac Sim.

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_joint_test_sender.py
```

O sender interpola continuamente entre várias configurações de juntas predefinidas e as transmite para o Isaac Sim. Ele não lê o YAML de hardware, portanto, nem `set_hw_rs.py` nem CAN são necessários.

#### ② Modo de cinemática inversa (`isaacsim_ik_sender`)

Insira uma pose do efetuador final (posição/orientação). O solucionador de IK calcula a configuração das juntas e move o braço robótico no Isaac Sim. `load_robot_model()` lê o `rebotarm.yaml` do submódulo, portanto, altere para RS primeiro:

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python isaacsim_ik_sender.py
```

**Formato de entrada (um comando por linha):**

```text
x y z                       # Position (meters), keep current orientation
x y z r p y                 # Position + orientation (meters/degrees)
q j1 j2 j3 j4 j5 j6         # Send joint angles directly (degrees)
gripper <0~1>               # Update gripper only
```

#### ③ Modo de planejamento de trajetória (`isaacsim_traj_sender`)

Adiciona planejamento de trajetória no espaço de juntas (MIN_JERK) sobre o IK para um movimento suave do robô. Ele também usa `load_robot_model()` com base nesse YAML, portanto, altere para RS primeiro:

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python isaacsim_traj_sender.py
```

**Formato de entrada (um comando por linha):**

```text
x y z                       # Position (meters)
x y z r p y                 # Position + orientation (meters/degrees)
q j1 j2 j3 j4 j5 j6         # Send joint angles directly (degrees)
gripper <0~1>               # Update gripper only
speed <scale>               # Adjust trajectory duration scaling
resync                      # Re-read the current joint state from Isaac Sim
```

#### ④ Modo de Manuseio com Compensação de Gravidade (`gravity_joint_sender`)

Projetado para braços robóticos modificados (garra removida e manete instalada). O robô pode ser guiado manualmente enquanto o Isaac Sim segue o movimento.

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
./run_sender.sh
```

**Comportamento esperado:**
- `set_hw_rs.py` aponta o submódulo `rebotarm.yaml` para `rebotarm_rs.yaml` para que os motores e o modelo de gravidade compartilhem um único YAML (alteração local; não faça commit)
- O braço físico se conecta e inicia o `GravityCompensation` upstream (mesmo MIT + feed-forward `g(q)` que `example/9`)
- O braço pode ser movido livremente à mão
- Este script apenas encaminha os ângulos das juntas para o Isaac Sim via UDP a 60 Hz
- Não execute também o `example/9` upstream ao mesmo tempo; os dois processos competiriam pelo CAN

#### ⑤ Modo de Mapeamento Real-para-Sim (`joint_reader_sender`)

Lê apenas os ângulos das juntas e espelha o estado do robô físico no Isaac Sim. Este modo é destinado à visualização enquanto o robô real é controlado por outra aplicação. `RebotArm()` lê o submódulo `rebotarm.yaml`, portanto mude para RS primeiro:

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python joint_reader_sender.py
```

**Comportamento esperado:**
- `set_hw_rs.py` alterna a configuração do motor para RS (alteração local; não faça commit)
- Lê apenas os ângulos das juntas (modo de feedback passivo), sem enviar nenhum comando de controle
- Transmite continuamente os ângulos das juntas via UDP a 60 Hz
- Visualiza o robô físico no Isaac Sim enquanto ele é controlado por outro projeto

## Protocolo de Comunicação

UDP JSON na porta `127.0.0.1:5005`.

**Payload do remetente (por frame):**

```json
{
  "sequence": 123,
  "timestamp": 1718000000.123,
  "joint_positions": [0.0, 0.1, 0.2, -0.1, 0.0, -0.02],
  "gripper_position": 0.05
}
```

| Campo | Tipo | Descrição |
|------|------|------|
| `sequence` | int | Número de sequência de frame incremental |
| `timestamp` | float | Timestamp Unix (segundos) |
| `joint_positions` | float[6] | Primeiras seis posições de juntas (rad) |
| `gripper_position` | float | Posição alvo do dedo da garra (m); cada remetente a calcula com seu próprio mapeamento (veja abaixo) |

**Pipeline de controle da garra:**

O receptor aplica o `gripper_position` recebido diretamente como alvo de posição de ambas as juntas prismáticas dos dedos, limitado por dedo a `[0, upper limit]` (limites superiores em USD: 0,05 m em ambos os dedos; os dedos são acionados 1:1 por um motor através de um único pinhão). Não há escala extra no lado do receptor. Os remetentes mapeiam sua entrada para `gripper_position` da seguinte forma:

| Remetente | Mapeamento para `gripper_position` (m) |
|------|------|
| `gravity_joint_sender` | `gripper_q × 0.03` (`GRIPPER_POSITION_SCALE = 0.03`) |
| `joint_reader_sender` | `gripper_q × 0.007` (`GRIPPER_POSITION_SCALE = 0.007`) |
| `isaacsim_traj_sender` | `ratio × 0.045` (entrada `gripper <0~1>`, limitada a 0,045 m) |
| `isaacsim_ik_sender` | `ratio ∈ [0, 1]` bruto enviado em metros, então qualquer ratio ≥ ao limite superior de um dedo abre totalmente esse dedo |

## Parâmetros de Configuração

### Remetente (`gravity_joint_sender.py`)

| Parâmetro | Padrão | Descrição |
|------|--------|------|
| Hardware YAML | `set_hw_rs.py` → `rebotarm_rs.yaml` | `RebotArm()` lê o submódulo `config/rebotarm.yaml`; motores e Pinocchio o compartilham |
| `ARM_JOINT_COUNT` | 6 | Número de juntas do braço |
| `DEFAULT_PORT` | 5005 | Porta UDP |
| `DEFAULT_SEND_HZ` | 60.0 | Frequência de transmissão (Hz) |
| `GRIPPER_POSITION_SCALE` | 0.03 | Fator de conversão de ângulo da garra para posição |
| `position_alpha` | 0.2 | Coeficiente do filtro passa-baixa |

### Receptor (`isaacsim_joint_receiver.py`)

| Parâmetro | Padrão | Descrição |
|------|--------|------|
| `ARM_JOINT_COUNT` | 6 | Número de juntas do braço |
| `DEFAULT_PORT` | 5005 | Porta UDP |
| `DEFAULT_RENDER_HZ` | 120.0 | Frequência de renderização da simulação (Hz) |
| `ROBOT_PRIM_PATH` | `/World/reBotArm` | Caminho do Prim do robô no Isaac Sim |
| `ASSET_RELATIVE_PATH` | `usd/RS-rebot-dev-arm/RS-rebot-dev-arm.usda` | Caminho relativo para o asset USD |

## Solução de Problemas

### `OSError: [Errno 98] Address already in use`

A porta `5005` já está ocupada. Encontre e encerre o processo que está usando a porta:

```bash
# Find the process using port 5005
sudo lsof -i :5005

# Terminate the process (replace PID with the actual process ID)
kill <PID>
```

### Asset do Isaac Sim Não Encontrado

Verifique se o asset USD existe e se `REPO_ROOT` está configurado corretamente:

```bash
ls usd/RS-rebot-dev-arm/RS-rebot-dev-arm.usda
```

### Barramento CAN Não Pronto

Certifique-se de que a interface CAN está ativa e configurada com o bitrate correto:

```bash
can_restart can0

# Verify the bitrate
ip -details link show can0 | grep bitrate
```

### Ângulos das Juntas Não Sincronizando

- Verifique se tanto o remetente quanto o receptor estão usando a porta `5005`.
- Verifique se o log do remetente exibe continuamente `[send]`.
- Verifique se o log do receptor exibe continuamente `[recv]`.
- Tente `isaacsim_joint_test_sender.py` para descartar problemas relacionados ao hardware.

### Componentes e Ambientes Python

| Componente | Ambiente Python | Script de Inicialização |
|------|------|------|
| Remetente (Robô Físico) | Ambiente uv `reBotArm_control_py` | `run_sender.sh` |
| Remetente (Modo de Teste) | Ambiente uv `reBotArm_control_py` | `isaacsim_joint_test_sender.py` |
| Receptor | Python oficial do Isaac Sim (`python.sh`) | `run_isaacsim_receiver.sh` |


## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>




