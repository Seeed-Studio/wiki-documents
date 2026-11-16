---
description: Este tutorial mostra como baixar o Isaac Sim e implantar o robô reBotArm em um ambiente de simulação para desenvolvimento e depuração.
title: B601-RS com Isaac Sim
keywords:
  - Isaac Sim
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
updatedAt: '2026-09-28'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_isaacsim/
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
    <span>Adquira agora</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

## Introdução

reBot-Isaacsim é um projeto de simulação NVIDIA Isaac Sim projetado especificamente para o reBotArm. Ele aproveita o mecanismo de física de alta fidelidade do Isaac Sim para replicar com precisão as características cinemáticas e a lógica de coordenação do gripper do braço robótico em um ambiente virtual, fornecendo um ambiente independente apenas de simulação para desenvolvimento de algoritmos de controle, verificação de planejamento de trajetória e teste de protocolos de comunicação.

## Requisitos de ambiente
- Sistema operacional: Ubuntu 22.04 LTS / 24.04 LTS (recomendado) ou Windows 11 (requer WSL2)  
- GPU: placa de vídeo NVIDIA RTX (recomendada RTX 3070 ou superior), VRAM ≥ 8GB  
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


Selecione um método de instalação do Isaac Sim e, em seguida, continue com o download do projeto.

<div className={graspingStyles.page}>
<InstallTabs defaultValue="binary" queryString="isaac-install">
<TabItem value="binary" label="Método 1 · Binário pré-compilado">

### 🔧 Método 1: Instalação por binário pré-compilado

> 💡 Adequado para a maioria dos usuários, não é necessário compilar, pronto para uso imediato.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### Baixar e descompactar

Na [página de download do NVIDIA Isaac Sim 6.0.0](https://docs.isaacsim.omniverse.nvidia.com/6.0.0/installation/download.html#isaac-sim-latest-release), selecione **Linux (x86_64)** na linha do Isaac Sim e baixe o pacote pré-compilado `isaac-sim-standalone-6.0.0-linux-x86_64.zip` para `~/Downloads`. Os comandos a seguir são para Linux x86_64.

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

#### Configurar variáveis de ambiente

Adicione o seguinte a `~/.bashrc` ou `~/.zshrc`:

```Bash
export ISAACSIM_PATH="${HOME}/isaacsim"
export ISAACSIM_PYTHON_EXE="${ISAACSIM_PATH}/python.sh"
export ISAACSIM_ROOT="${HOME}/isaacsim"
```

Em seguida, execute `source ~/.bashrc` para que tenha efeito.

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### Iniciar verificação

```Bash
${ISAACSIM_PATH}/isaac-sim.sh
```

No primeiro lançamento, os shaders serão armazenados em cache, o que pode levar de 5 a 10 minutos, portanto, aguarde pacientemente até que a interface gráfica apareça.

</div>
</section>

</div>

</TabItem>
<TabItem value="source" label="Método 2 · Compilar a partir do código-fonte">

### ⚙️ Método 2: Compilar a partir do código-fonte

> 💡 Bom para desenvolvedores que precisam ajustar o código subjacente ou depurar recursos centrais.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### Instalar dependências

```Bash
sudo apt update
sudo apt install build-essential git git-lfs gcc-11 g++-11
```

Confirme que os comandos padrão `gcc --version` e `g++ --version` ambos reportam a versão 11. Consulte as [instruções de compilação do código-fonte do Isaac Sim 6.0.0](https://github.com/isaac-sim/IsaacSim/blob/v6.0.0/README.md#prerequisites-and-environment-setup) para configuração do compilador e outros pré-requisitos. É necessária uma conexão com a internet para baixar as dependências de compilação.

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### Clonar e compilar

O código-fonte do Isaac Sim está em [isaac-sim/IsaacSim](https://github.com/isaac-sim/IsaacSim); o antigo endereço NVIDIA-Omniverse agora redireciona para um repositório de Dockerfile obsoleto. Os comandos a seguir usam a versão 6.0.0, correspondendo à instalação binária neste tutorial:

```Bash
git clone --branch v6.0.0 https://github.com/isaac-sim/IsaacSim.git
cd IsaacSim
git lfs install
git lfs pull
./build.sh --release
```

O processo de compilação pode levar de 30 a 60 minutos, dependendo do seu hardware.

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### Executar teste

```Bash
_build/linux-x86_64/release/isaac-sim.sh
```

Após uma compilação a partir do código-fonte, aponte `ISAACSIM_ROOT` para esse diretório de runtime para que `run_isaacsim_receiver.sh` possa encontrar o Isaac Sim:

```bash
export ISAACSIM_ROOT="$PWD/_build/linux-x86_64/release"
```

</div>
</section>

</div>

</TabItem>
</InstallTabs>
</div>

## Baixar o projeto

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### Clonar o projeto e os submódulos

Este repositório usa o submódulo Git upstream `reBotArm_control_py`. Faça o clone a partir do diretório onde você deseja armazenar o projeto:

```bash
git clone --recurse-submodules https://github.com/Seeed-Projects/reBot-Isaacsim.git
cd reBot-Isaacsim
```

Se você já clonou o repositório e `third_party/reBotArm_control_py` estiver vazio, execute isto a partir da raiz do projeto:

```bash
git submodule update --init --recursive
```

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### Instalar dependências do sender

Execute isto a partir da raiz do projeto. Tanto `run_sender.sh` quanto `uv run` usam o workspace raiz do uv:

```bash
uv sync
```

</div>
</section>

<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### Alternar a configuração de hardware para RS

O asset Isaac Sim deste repositório é RS (`usd/RS-rebot-dev-arm`), enquanto o `rebotarm.yaml` upstream é DM por padrão. Tanto `RebotArm()` quanto `load_robot_model()` usam este arquivo, portanto, compensação de gravidade, joint-reader, IK e Traj exigem a configuração RS; caso contrário, o protocolo do motor não corresponderá e o Pinocchio carregará o URDF DM. O teste de juntas não requer esta etapa. Isso modifica a árvore de trabalho do submódulo localmente; não faça commit da alteração:

```bash
python reBotArm_Isaacsim/set_hw_rs.py
```

Em caso de sucesso, será impresso `.../config/rebotarm.yaml -> rebotarm_rs.yaml`. O shell permanece na raiz do projeto.

</div>
</section>
</div>

### Visão geral dos componentes funcionais

Este projeto fornece vários senders para atender a diferentes cenários de uso:

| Componente | Descrição |
|-----------|------------|
| `gravity_joint_sender` | **Compensação de gravidade + modo de manete**: Para braços robóticos modificados (gripper removido, manete acoplado), guiado à mão; a compensação vem do `GravityCompensation` upstream, este repositório apenas espelha os ângulos das juntas para o Isaac Sim |
| `gravity_gripper_assist` | **Compensação de gravidade e assistência do gripper**: Exemplo experimental com uma verificação apenas de modelo |
| `isaacsim_ik_sender` | **Modo de cinemática inversa (IK)**: Insira a pose do efetuador final, use o solucionador de IK para obter os ângulos das juntas e envie-os para o Isaac Sim |
| `isaacsim_traj_sender` | **Modo de planejamento de trajetória (Traj)**: Adiciona planejamento de trajetória no espaço de juntas (perfil de tempo MIN_JERK) sobre o IK para alcançar controle de movimento suave |
| `isaacsim_joint_test_sender` | **Modo de teste de juntas**: Envia trajetórias de ângulos de juntas predefinidas sem um robô real para verificar se o receiver do Isaac Sim e a comunicação estão funcionando corretamente |
| `joint_reader_sender` | **Modo de mapeamento Real-para-Sim**: Apenas leitura dos ângulos das juntas e mapeamento para o Isaac Sim, ideal para uso com outros projetos de controle (por exemplo, sincronizar o robô real executando outras tarefas com o Isaac Sim para visualização) |

### Estrutura de diretórios

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

## Inicialização (Modo de Dois Terminais)

São necessários dois terminais separados. **O Terminal 1 executa o receptor do Isaac Sim**, enquanto **o Terminal 2 executa o remetente apropriado dependendo da funcionalidade desejada**. Em cada terminal, entre no diretório raiz do projeto `reBot-Isaacsim` clonado acima antes de executar os comandos abaixo.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### Terminal 1 — Iniciar o Receptor do Isaac Sim (Compartilhado por Todos os Modos)

<p className="rebot-step-label">Etapa 1</p>

```bash
cd reBotArm_Isaacsim
./run_isaacsim_receiver.sh
```

**Comportamento esperado:**
- Iniciar a interface gráfica do Isaac Sim
- Carregar o plano de chão e os assets USD do braço robótico
- Escutar pacotes UDP em `127.0.0.1:5005`
- Aguardar a conexão de um remetente

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### Terminal 2 — Iniciar o Remetente Apropriado

<p className="rebot-step-label">Etapa 2</p>

**Para espelhamento de simulação, inicie primeiro o receptor e depois o remetente.** A verificação apenas do modelo para a assistência experimental do gripper abaixo não requer o receptor.

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

</div>
</section>
</div>

Escolha um dos seguintes modos. Estas são opções independentes e não precisam ser executadas em sequência.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### Modo de Teste de Juntas (`isaacsim_joint_test_sender`) {#-modo-de-teste-de-juntas-isaacsim_joint_test_sender}

Nenhum hardware físico é necessário. Uma trajetória de juntas predefinida é enviada continuamente para verificar a comunicação com o receptor do Isaac Sim.

```bash
cd reBotArm_Isaacsim
uv run python isaacsim_joint_test_sender.py
```

O remetente interpola continuamente entre várias configurações de juntas predefinidas e as transmite para o Isaac Sim. Ele não lê o YAML de hardware, portanto nem `set_hw_rs.py` nem CAN são necessários.

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### Modo de Cinemática Inversa (`isaacsim_ik_sender`) {#-modo-de-cinemática-inversa-isaacsim_ik_sender}

Insira uma pose de efetuador final (posição/orientação). O solucionador de IK calcula a configuração das juntas e movimenta o braço robótico no Isaac Sim. `load_robot_model()` lê o submódulo `rebotarm.yaml`, portanto altere para RS primeiro:

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

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### Modo de Planejamento de Trajetória (`isaacsim_traj_sender`) {#-modo-de-planejamento-de-trajetória-isaacsim_traj_sender}

Adiciona planejamento de trajetória no espaço de juntas (MIN_JERK) sobre a IK para um movimento suave do robô. Ele também usa `load_robot_model()` com esse YAML, portanto altere para RS primeiro:

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

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### Modo de Compensação de Gravidade com Alça (`gravity_joint_sender`) {#-modo-de-compensação-de-gravidade-com-alça-gravity_joint_sender}

Projetado para braços robóticos modificados (gripper removido e alça instalada). O robô pode ser guiado manualmente enquanto o Isaac Sim segue o movimento.

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
./run_sender.sh
```

**Comportamento esperado:**
- `set_hw_rs.py` aponta o submódulo `rebotarm.yaml` para `rebotarm_rs.yaml` para que os motores e o modelo de gravidade compartilhem um YAML (alteração local; não faça commit)
- O braço físico se conecta e inicia o `GravityCompensation` upstream (mesmo MIT + `g(q)` feed-forward que `example/9`)
- O braço pode ser movido livremente à mão
- Este script apenas encaminha ângulos de juntas para o Isaac Sim via UDP a 60 Hz
- Não execute também o `example/9` upstream ao mesmo tempo; os dois processos competiriam pelo CAN

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">5</span>
<div className="rebot-step-content">

#### Compensação de Gravidade e Assistência de Gripper (`gravity_gripper_assist`) {#-compensação-de-gravidade-e-assistência-de-gripper-gravity_gripper_assist}

Mova manualmente um braço RS e seu gripper acoplado enquanto os espelha no Isaac Sim.

Execute a verificação do modelo a partir da raiz do projeto; ela não se conecta ao CAN:

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python gravity_gripper_assist.py --check
```

Inicie o receptor do Isaac Sim, certifique-se de que `can0` está disponível, fixe e apoie o braço e pare outros programas que estejam usando CAN. O gripper tem como padrão 0 rad fechado e 5 rad aberto; estes devem corresponder à calibração de zero do braço.

Inicie o braço físico a partir do mesmo terminal; este comando controla os motores:

```bash
uv run python gravity_gripper_assist.py
```

Se os pontos finais forem diferentes, defina os valores medidos em radianos com `--closed-rad` e `--open-rad`. Digite `assist`, `open`, `close` ou `hold` para controlar o gripper; digite `quit` ou pressione `Ctrl+C` para parar.

</div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number">6</span>
<div className="rebot-step-content">

#### Modo de Mapeamento Real-para-Sim (`joint_reader_sender`) {#-modo-de-mapeamento-real-para-sim-joint_reader_sender}

Lê apenas ângulos de juntas e espelha o estado do robô físico no Isaac Sim. Este modo é destinado à visualização enquanto o robô real é controlado por outra aplicação. `RebotArm()` lê o submódulo `rebotarm.yaml`, portanto altere para RS primeiro:

```bash
cd reBotArm_Isaacsim
python set_hw_rs.py
uv run python joint_reader_sender.py
```

**Comportamento esperado:**
- `set_hw_rs.py` alterna a configuração do motor para RS (alteração local; não faça commit)
- Ler apenas ângulos de juntas (modo de feedback passivo), sem enviar nenhum comando de controle
- Transmitir continuamente ângulos de juntas via UDP a 60 Hz
- Visualizar o robô físico no Isaac Sim enquanto ele é controlado por outro projeto

</div>
</section>

</div>

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
| `gripper_position` | float | Posição alvo do dedo do gripper (m); cada remetente a calcula com seu próprio mapeamento (veja abaixo) |

**Pipeline de controle do gripper:**

O receptor aplica o `gripper_position` recebido diretamente como alvo de posição de ambas as juntas prismáticas dos dedos, limitado por dedo a `[0, upper limit]` (limites superiores USD: 0,05 m em ambos os dedos; os dedos são acionados 1:1 por um motor através de um único pinhão). Não há escala extra no lado do receptor. Os remetentes mapeiam sua entrada para `gripper_position` da seguinte forma:

| Remetente | Mapeamento para `gripper_position` (m) |
|------|------|
| `gravity_joint_sender` | `gripper_q × 0.03` (`GRIPPER_POSITION_SCALE = 0.03`) |
| `joint_reader_sender` | `gripper_q × 0.007` (`GRIPPER_POSITION_SCALE = 0.007`) |
| `isaacsim_traj_sender` | `ratio × 0.045` (entrada `gripper <0~1>`, limitada a 0,045 m) |
| `isaacsim_ik_sender` | `ratio ∈ [0, 1]` bruto enviado como metros, então qualquer ratio ≥ ao limite superior de um dedo abre totalmente esse dedo |

## Parâmetros de Configuração

### Remetente (`gravity_joint_sender.py`)

| Parâmetro | Padrão | Descrição |
|------|--------|------|
| Hardware YAML | `set_hw_rs.py` → `rebotarm_rs.yaml` | `RebotArm()` lê o submódulo `config/rebotarm.yaml`; motores e Pinocchio o compartilham |
| `ARM_JOINT_COUNT` | 6 | Número de juntas do braço |
| `DEFAULT_PORT` | 5005 | Porta UDP |
| `DEFAULT_SEND_HZ` | 60.0 | Frequência de transmissão (Hz) |
| `GRIPPER_POSITION_SCALE` | 0.03 | Fator de conversão de ângulo do gripper para posição |
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

- Verifique se tanto o emissor quanto o receptor estão usando a porta `5005`.
- Verifique se o log do emissor exibe continuamente `[send]`.
- Verifique se o log do receptor exibe continuamente `[recv]`.
- Tente `isaacsim_joint_test_sender.py` para descartar problemas relacionados ao hardware.

### Componentes e Ambientes Python

| Componente | Ambiente Python | Script de Inicialização |
|------|------|------|
| Emissor (Robô Físico) | ambiente uv `reBotArm_control_py` | `run_sender.sh` |
| Emissor (Modo de Teste) | ambiente uv `reBotArm_control_py` | `isaacsim_joint_test_sender.py` |
| Receptor | Python oficial do Isaac Sim (`python.sh`) | `run_isaacsim_receiver.sh` |


## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


