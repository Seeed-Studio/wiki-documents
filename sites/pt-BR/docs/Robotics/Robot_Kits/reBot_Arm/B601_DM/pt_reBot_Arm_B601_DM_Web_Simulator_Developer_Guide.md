---
description: Este guia de desenvolvedor apresenta a arquitetura, o runtime, a ponte ROS2, a integração LLM/MCP e o fluxo de trabalho de desenvolvimento secundário do simulador web reBotArm_simulator-DM e da pilha de simulação ROS2/MuJoCo.
title: Guia do Desenvolvedor do Simulador Web reBot Arm B601-DM e ROS2/MuJoCo
keywords:
  - reBot Arm
  - B601-DM
  - Web Simulator
  - Three.js
  - URDF
  - rosbridge
  - LLM
  - MCP
  - Robot Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web/rebot_web_simulator.png
slug: /rebot_arm_b601_dm_web_simulator_developer_guide
sku: 100065783, 100095532
last_update:
  date: 2026-08-24
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-07-30'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_web_simulator_developer_guide/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

# Guia do Desenvolvedor do Simulador Web reBot Arm B601-DM e ROS2/MuJoCo

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License: Apache 2.0" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Jazzy-blue.svg" alt="ROS2 Jazzy" />
    <img src="https://img.shields.io/badge/Node.js-18%2B-green.svg" alt="Node.js 18+" />
    <img src="https://img.shields.io/badge/Three.js-r128-orange.svg" alt="Three.js r128" />
    <img src="https://img.shields.io/badge/Version-v1.0.0-brightgreen.svg" alt="Version v1.0.0" />
    <img src="https://img.shields.io/badge/Platform-Cross%20Platform-lightgrey.svg" alt="Platform" />
</p>

<p align="center">
  <strong>Visualização com Three.js · Carregamento de URDF · Ponte rosbridge · Controle por LLM/MCP</strong>
</p>

Este guia é para desenvolvedores. Ele explica como executar e estender o simulador web `reBotArm_simulator-DM`. O simulador é um console web leve em Node.js + Three.js que lê o URDF e as malhas STL do workspace ROS2 no mesmo repositório, renderiza no navegador o corpo de 6 DOF e o gripper do reBot Arm B601-DM e se comunica com o ROS2 por meio de um WebSocket rosbridge. Ele oferece suporte a todo o fluxo de trabalho de desenvolvimento: espelhamento de juntas, trava de controle, compensação de gravidade, preensão visual e controle por texto via LLM.

:::note
Este guia usa `Ubuntu 24.04 + ROS2 Jazzy` como backend ROS2. O front-end web é executado em qualquer navegador moderno no Windows, macOS ou Linux. ROS2 Humble / Ubuntu 22.04 podem seguir o mesmo fluxo de trabalho.
:::

## Funcionalidades do Projeto

1. **Front-end sem build**  
   Ele não depende de empacotadores como Webpack/Vite. Todos os assets de front-end são HTML/CSS/JS simples servidos diretamente por um servidor estático em Node.js, o que mantém os custos de implantação e depuração muito baixos.

2. **Carregamento direto de URDF + STL**  
   `URDFLoader` lê `ReBot_Arm_DM.urdf` e as malhas STL de `src/rebotarm_bringup/description/` no workspace `reBotArm_ros2_DM` no mesmo repositório, portanto o modelo do corpo não precisa de uma segunda cópia no diretório web. Este URDF inclui a definição completa do gripper. Durante a renderização web, os visuais originais do gripper sob `end_link` são ocultados e quatro malhas STL otimizadas do gripper são carregadas de `split_meshes/grouped_gripper/`.

3. **Ponte rosbridge bidirecional**  
   `ReBotRosClient` encapsula o protocolo JSON do rosbridge e assina o estado das juntas, estado do gripper, status do braço, imagem da câmera virtual e resultados de detecção de visão, além de publicar comandos de junta única, comandos do gripper e poses alvo.

4. **Controle por texto com LLM/MCP**  
   A página web não chama o ROS diretamente. Em vez disso, ela faz proxy por meio do servidor Node.js para um serviço HTTP de agente de texto em execução na VM, e um MCP Server restringe a intenção em linguagem natural em operações estruturadas do robô.

5. **Instalação com um clique e inicialização unificada**  
   `setup.sh` instala automaticamente as dependências do sistema, clona o SDK, cria o ambiente virtual Python, instala dependências e executa `colcon build`. O ponto de entrada unificado `rebotarm` fornece comandos como `start web / dm / sim`, `doctor`, `status` e `stop`. Ele é idempotente: componentes que já existem e atendem aos requisitos são ignorados automaticamente.

## Observações sobre Fiação e Rede

O próprio simulador web não se conecta diretamente ao hardware. Todos os comandos de controle são encaminhados ao ROS2 por meio do rosbridge. Duas coisas devem ser confirmadas:

1. **Lado do host Ubuntu**: A ponte serial USB2CAN conecta o barramento CAN do braço, o motor do gripper está no mesmo barramento CAN e a alimentação de 24 V está conectada. Confirme que o host reconhece a porta serial:

```bash
ls /dev/ttyACM*
```
<details>
<summary>Saída esperada</summary>

```text
/dev/ttyACM0
```

Listar `/dev/ttyACM0` (ou `ttyACM1`, etc.) significa que a porta serial foi reconhecida.

</details>

2. **Lado do host web**: Confirme que você consegue alcançar a porta rosbridge do host Ubuntu (padrão `9090`). Teste a conectividade WebSocket a partir do navegador ou terminal do host web, por exemplo:

```bash
# Confirm the Ubuntu host IP is reachable
ping <Ubuntu IP>

# Confirm the rosbridge port is open (rosbridge must already be running on Ubuntu)
curl -i http://<Ubuntu IP>:9090
```

Se você precisar abrir temporariamente as permissões da porta serial (no lado do Ubuntu):

```bash
sudo chmod 666 /dev/ttyACM0
```

É melhor adicionar o usuário atual ao grupo `dialout`, o que entra em vigor após novo login:

```bash
sudo usermod -a -G dialout $USER
```

## Requisitos de Ambiente

| Item | Recomendado |
|---|---|
| Sistema operacional (backend) | Ubuntu 24.04; Ubuntu 22.04 também funciona |
| ROS2 | Jazzy; Humble também funciona |
| Python | Python do sistema, 3.12 para Jazzy |
| Node.js | 18 ou superior |
| Navegador | Chrome / Edge 90+, Firefox 90+, Safari 14+ |
| MuJoCo (opcional) | 3.10+, necessário apenas para a pilha completa de simulação física |

## Etapas de Instalação

### Etapa 0. Concluir a configuração básica do braço

Antes de iniciar o desenvolvimento do simulador web, conclua as etapas em [reBot Arm B601-DM Quick Start](https://wiki.seeedstudio.com/pt-br/rebot_b601_dm_getting_started/), incluindo montagem do braço, configuração de ID dos motores, inicialização do ponto zero e verificações básicas de conectividade.

O repositório do projeto já contém o workspace ROS2, o URDF e as malhas STL exigidos pelo simulador web. Você não precisa construir outro workspace seguindo o guia [reBot Arm B601-DM ROS2 Integration](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_ros2_integration/).

:::tip
`reBotArm_control_py` é a principal dependência externa, fornecendo drivers para o robô real, cinemática inversa, cálculo de dinâmica e compensação de gravidade. O simulador web não importa esse SDK diretamente, mas o nó `rebotarmcontroller` do robô real no backend ROS2, o loop de torque do MuJoCo e o recurso de compensação de gravidade dependem dele. Se você executar apenas o modo de simulação pura com Fake Driver + web, o SDK não é necessário; assim que quiser controlar o robô real ou usar compensação de gravidade, ele deve ser instalado.

`setup.sh` obtém automaticamente o SDK de [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py) e o instala em `~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM/third_party/reBotArm_control_py/` (travado em um commit verificado). Se `~/reBotArm_control_py/` já existir, ele será reconhecido automaticamente e não será clonado novamente.

Estrutura de diretórios após a instalação:

```text
reBotArm_control_py/
├─ reBotArm_control_py/
│  ├─ actuator/          RebotArm class, JointGroup, motor control
│  ├─ controllers/       RebotArmEndPose (trajectory, IK, gravity compensation)
│  ├─ kinematics/        forward/inverse kinematics, load_robot_model, pad_q_for_model
│  └─ dynamics/          dynamics functions such as compute_generalized_gravity
├─ config/
│  └─ rebotarm_dm.yaml   DM motor config (ID, baud rate, limits, PID)
├─ urdf/                 Pinocchio dynamics model URDF
└─ pyproject.toml
```

O `pyproject.toml` do SDK declara `requires-python >=3.10,<3.12`, mas este projeto o referencia via `sys.path` em vez de instalação via pip, portanto ele funciona bem no Python 3.12. Se `pip install -e .` relatar conflito de versão, ignore essa etapa e apenas certifique-se de que o diretório esteja em `reBotArm_ros2_DM/third_party/reBotArm_control_py/` ou `~/reBotArm_control_py/` (o código pesquisa esses caminhos automaticamente).
:::

### Etapa 1. Instalação com um clique

O projeto open-source oficial do reBot Arm está disponível em [Seeed-Projects/reBot-DevArm](https://github.com/Seeed-Projects/reBot-DevArm). O simulador web, o workspace ROS2 e o código de simulação MuJoCo usados neste guia estão hospedados em [Yang-Ci/Borot-Arm_Mujoco](https://github.com/Yang-Ci/Borot-Arm_Mujoco). Clone o repositório de software em `~/reBot_Arm_Mujoco-DM/`:

```bash
git clone https://github.com/Yang-Ci/Borot-Arm_Mujoco.git ~/reBot_Arm_Mujoco-DM
cd ~/reBot_Arm_Mujoco-DM
```

O `setup.sh` na raiz do repositório é idempotente e configura todo o ambiente automaticamente:

- Instala pacotes de sistema ausentes via apt (ROS 2, Node.js, ros-dev-tools, etc.)
- Clona o SDK `reBotArm_control_py` para `third_party/` (ignorado se já existir)
- Cria o ambiente virtual Python (`reBotArm_ros2_DM/.venv`, com `--system-site-packages`)
- Instala as dependências Python a partir de `requirements.txt`
- Cria o `.env` da web a partir de `.env.example`
- Executa a resolução de dependências `rosdep` e `colcon build --symlink-install`

```bash
./setup.sh
```

O instalador é idempotente: componentes que já existem e atendem aos requisitos são ignorados, e ele nunca exclui o SDK existente, o ambiente virtual ou o `.env` da web; apenas itens ausentes são instalados. Ao final, ele resume os itens instalados, ignorados, com incompatibilidade de versão e com falha.

Apenas verificação, sem modificar o sistema:

```bash
./setup.sh --check
```

Após a instalação, execute diagnósticos para confirmar que o ambiente está pronto:

```bash
./rebotarm doctor
```

<details>
<summary>Saída esperada (resumo)</summary>

```text
[rebotarm-setup] Checking supported platform
[rebotarm-setup] Checking runtime versions
[rebotarm-setup] Checking reBotArm_control_py SDK
[rebotarm-setup] Checking project virtual environment
[rebotarm-setup] Checking web configuration
[rebotarm-setup] Resolving ROS dependencies and building the workspace

Installed/updated (6)
  - apt nodejs
  - SDK ...
  - virtual environment ...
  - Python requirements checked/updated in project venv
  - created .env from example
  - ROS workspace built with colcon

Already usable; skipped (5)
  - Ubuntu 24.04 supported
  - Python 3.12.3 compatible
  - Node.js v18.19.0 compatible
  - existing SDK preserved
  - critical Python and SDK imports pass

Setup complete. Next:
  ./rebotarm doctor
  ./rebotarm start web
  ./rebotarm start dm
```

Uma mensagem `Setup complete` com a seção `Failed or still missing` vazia significa sucesso.

</details>

:::note
Se o `setup.sh` não instalar o ROS 2 automaticamente (por exemplo, a fonte apt do ROS ainda não foi adicionada ao sistema), o instalador baixa automaticamente o pacote oficial `ros2-apt-source` do GitHub, adiciona a fonte e tenta novamente. Você não precisa configurar a fonte apt manualmente.
:::

### Etapa 2. Configurar variáveis de ambiente

`setup.sh` já criou `.env` a partir de `.env.example`. Para alterar a porta ou o destino do proxy, edite `.env`:

```bash
# reBotArm_simulator-DM/.env key fields
PORT=3001
REBOTARM_TEXT_AGENT_URL=http://localhost:8082
REBOTARM_MCP_URL=http://localhost:8081/mcp
```

Se a página web estiver em execução no Windows e o ROS2 em uma VM Ubuntu, altere `REBOTARM_TEXT_AGENT_URL` e `REBOTARM_MCP_URL` para o IP real da VM Ubuntu, por exemplo `http://<Ubuntu IP>:8082`.

### Etapa 3. Iniciar o servidor web

```bash
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start web
```

Este comando carrega automaticamente o ambiente ROS2 e inicia o rosbridge (reutilizando um listener existente se a porta já estiver em uso) e o servidor web Node.js. Depois que ele iniciar, o terminal imprime a URL de acesso:

```text
ROS WebSocket: ws://localhost:9090 (started by this command)
Web: http://localhost:3001
Ctrl+C stops processes started by this command.
```

Abra `http://localhost:3001` em um navegador e aguarde o carregamento do URDF e STL; o aparecimento do modelo 3D significa que o front-end está funcionando. A página já está conectada ao rosbridge local por padrão, então você pode operar diretamente no painel "ROS2 Bridge".

:::note
Se você quiser apenas executar um demo puramente web (sem iniciar o rosbridge), também pode iniciá-lo manualmente a partir do diretório web:

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_simulator-DM
node server.js
```

Nesse caso, a página permite arrastar os sliders das juntas, usar predefinições de pose e arrastar o TCP, mas não se conectará a nenhum nó ROS.
:::

## Inicializando o projeto

:::note
O comando `./rebotarm` carrega o ambiente internamente, então você não precisa executar `source scripts/source_rebotarm_env.sh` manualmente. No entanto, se você executar comandos `ros2` puros diretamente, cada novo terminal ainda precisa carregar o ambiente primeiro.
:::

<Tabs defaultValue="fake" groupId="launch-mode" queryString>

<TabItem value="web" label="Demo puramente web">

A forma mais leve de executar: apenas o servidor web é iniciado, sem conexão ROS2. Bom para demonstração de poses, ensino e desenvolvimento de UI:

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_simulator-DM
node server.js
```

Abra `http://localhost:3001` em um navegador. Você pode arrastar os sliders das juntas, usar predefinições de pose, arrastar o TCP e usar teach-record, mas todas as operações afetam apenas o modelo 3D e não acionam nenhum hardware ou nó ROS.


![Interface do simulador web](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web/rebot_web_simulator.png)
</TabItem>

<TabItem value="fake" label="Simulação com Fake Driver">

Inicie o Fake Driver, o rosbridge e o servidor web. A página web espelha o estado das juntas via rosbridge e envia comandos de controle. Bom para verificar interfaces, direções das juntas e limites.

Terminal 1 — iniciar o Fake Driver:

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
source scripts/source_rebotarm_env.sh
ros2 launch rebotarm_bringup fake_bringup.launch.py
```

Terminal 2 — iniciar rosbridge + web (um comando):

```bash
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start web
```

Depois que a página se conectar a `ws://localhost:9090`, marque "Mirror real joint state to the web" para ver o estado das juntas do Fake Driver sincronizar com o modelo 3D. Depois de marcar "Allow the web to send control to the real arm", os sliders das juntas e o movimento de Pose enviarão comandos via rosbridge.


![Visualização do modelo no RViz](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web/rebot_rviz_model.png)
</TabItem>

<TabItem value="mujoco" label="Simulação física completa">

Um comando inicia toda a pilha: Fake Driver, grasp físico MuJoCo, servidor de tarefas, câmera virtual, detector de cores e rosbridge:

```bash
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start sim
```

<details>
<summary>Saída esperada</summary>

```text
[rebot-mujoco-all] starting fake_bringup...
[rebot-mujoco-all] starting mujoco_physics_grasp...
[rebot-mujoco-all] starting sim_task_server...
[rebot-mujoco-all] starting sim_rgb_camera...
[rebot-mujoco-all] starting sim_color_detector...
[rebot-mujoco-all] starting rosbridge_websocket on :9090...
```

Todos os nós iniciam em sequência; é sucesso se não houver `ERROR`.

</details>

Este script é internamente equivalente a `reBotArm_ros2_DM/scripts/start_rebot_mujoco_all.sh`. Por padrão, ele inicia o Fake Driver, o robot_state_publisher, o grasp físico MuJoCo, o servidor de tarefas, a câmera RGB aérea, o detector de cores e o rosbridge. Em seguida, execute `./rebotarm start web` em outro terminal para iniciar a página web. Depois que o navegador se conectar ao ROS, você pode usar o demo de grasp visual.


![Simulação física MuJoCo](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web/rebot_mujoco_physics.png)
</TabItem>

<TabItem value="real" label="Controle do robô real">

O modo de robô real inicia o bringup/driver real e o rosbridge, e a página web controla por meio da mesma interface ROS. Recomenda-se primeiro verificar interfaces, direções das juntas e limites com o Fake Driver antes de mudar para o robô real em baixa velocidade:

```bash
# Before starting, confirm the device node and grant permissions
ls /dev/ttyACM0
sudo chmod 666 /dev/ttyACM0

# Start the real-robot driver (auto-sources the environment)
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start dm
```

Em outro terminal, inicie rosbridge + web:

```bash
cd ~/reBot_Arm_Mujoco-DM
./rebotarm start web
```

:::warning
Quando conectado ao controlador do robô real, os comandos da web acionam o hardware real. Sempre verifique primeiro as direções e limites das juntas com o Fake Driver. Ao usar o robô real pela primeira vez, teste a junta final com pequenos movimentos. Se algo estiver anormal, clique imediatamente em "Disable" ou cancele o bloqueio de controle. Não confie apenas nas caixas de seleção da web; mantenha um botão de parada de emergência, limites e isolamento do espaço operacional no local.
:::

</TabItem>

</Tabs>

## Arquitetura do projeto

```text
reBot_Arm_Mujoco-DM/
├─ setup.sh                         Idempotent one-click install and version check
├─ rebotarm                         Unified entry for start, stop, status, and diagnostics
├─ requirements.txt                 Python dependency version ranges
├─ PROJECT_ARCHITECTURE_ZH.md       Overall architecture, simulation principles, and debouncing notes
├─ reBotArm_ros2_DM/                ROS 2 workspace
│  ├─ scripts/                      One-click launch scripts and environment loading
│  ├─ third_party/                  reBotArm_control_py SDK for fresh installs
│  ├─ .venv/                        Project Python virtual environment (created by setup.sh)
│  └─ src/
│     ├─ rebotarm_msgs/             Custom msg/srv/action
│     ├─ rebotarmcontroller/        Real-robot driver, Fake Driver, hardware management
│     ├─ rebotarm_bringup/          URDF, STL, launch, motor config
│     ├─ rebotarm_mujoco/           MuJoCo simulation, IK, camera, vision
│     ├─ rebotarm_agent/            MCP Server and text agent
│     ├─ rebotarm_moveit_config/    MoveIt 2 configuration
│     └─ rebotarm_moveit_demos/     MoveIt 2 application demos
└─ reBotArm_simulator-DM/           Node.js + Three.js web console
   ├─ public/                       Pages, styles, front-end logic
   └─ split_meshes/grouped_gripper/ Web gripper meshes
```

Fluxo de dados: o navegador acessa o servidor estático Node.js via `HTTP /api` e se comunica bidirecionalmente com o ROS2 via `rosbridge WebSocket`; a linguagem natural é encaminhada pelo Node.js para o Text Agent / MCP Server e então convertida em chamadas de ferramentas estruturadas que entram no ROS2. O ROS2 aciona o driver Fake/real e o braço para baixo, e se conecta lateralmente à simulação física MuJoCo, ao servidor de tarefas e à câmera virtual. A página web, o LLM Agent e o robô real não codificam chamadas uns para os outros; eles são desacoplados por meio de tópicos, serviços e ações do ROS2.

O ponto de entrada unificado `rebotarm` é a principal forma de operar o projeto:

| Comando | Descrição |
|---|---|
| `./rebotarm start web` | Iniciar rosbridge + servidor web (carrega o ambiente automaticamente) |
| `./rebotarm start dm` | Iniciar o driver de robô real DM (terminal separado, carrega o ambiente automaticamente) |
| `./rebotarm start sim` | Iniciar toda a pilha de simulação MuJoCo (não iniciar junto com o robô real) |
| `./rebotarm doctor` | Verificação de diagnóstico (equivalente a `./setup.sh --check`) |
| `./rebotarm status` | Ver status de processos, portas, porta serial e nós ROS |
| `./rebotarm stop` | Parar processos em segundo plano gerenciados por `start web` |

:::note
Todos os comandos `./rebotarm` executam internamente `source scripts/source_rebotarm_env.sh`, então você não precisa carregar o ambiente manualmente. No entanto, se você executar comandos `ros2` puros diretamente (como iniciar manualmente um arquivo de launch), ainda precisa carregar o ambiente primeiro:

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
source scripts/source_rebotarm_env.sh
```

Este script carrega, na ordem, o ROS2 (`/opt/ros/jazzy/setup.bash`), o venv do Python (`.venv/bin/activate`), os caminhos do cmeel (extensões C do Pinocchio) e o workspace (`install/setup.bash`).
:::

<details>
<summary><b>Notas dos módulos centrais</b> (clique para expandir)</summary>


**server.js — servidor estático Node.js**

`server.js` é um servidor HTTP Node.js sem dependências. Suas principais responsabilidades:

- Servir os assets estáticos de front-end em `public/`;
- Ler o URDF e as malhas STL do workspace ROS2 no mesmo repositório e expor os endpoints `/api/urdf` e `/api/description/meshes/<file>`;
- Servir as malhas do gripper apenas para web `/api/gripper_meshes/<file>` (de `split_meshes/grouped_gripper/`);
- Fazer proxy das requisições de chat do LLM `/api/llm/chat` e do health check `/api/llm/health` para o serviço HTTP do text-agent na VM;
- Fornecer o endpoint de configuração MCP `/api/mcp/config`, retornando `textAgentUrl` e `mcpUrl`.

Resolução de caminho de chave (`server.js`):

```javascript
const BRINGUP_DIR = path.resolve(
  path.join(ROOT, '..', 'reBotArm_ros2_DM', 'src', 'rebotarm_bringup')
);
const URDF_FILE = path.join(BRINGUP_DIR, 'description', 'urdf', 'ReBot_Arm_DM.urdf');
const MESHES_DIR = path.join(BRINGUP_DIR, 'description', 'meshes');
const GRIPPER_MESHES_DIR = path.join(ROOT, 'split_meshes', 'grouped_gripper');
```

:::note
`server.js` localiza o workspace ROS2 através do caminho relativo `../reBotArm_ros2_DM/...`. Se você mover o diretório web para outro local, será necessário atualizar esses caminhos de acordo ou manter uma cópia do modelo da mesma versão que o workspace ROS2 no diretório web.
:::

**rebot-sim.js — núcleo da cena 3D**

`rebot-sim.js` é o núcleo de front-end (cerca de 1700 linhas), responsável por:

- Inicializar a cena Three.js, câmera, renderizador e controlador de órbita personalizado;
- Carregar o URDF através de `URDFLoader`; `loader.packages` mapeia `package://rebotarm_bringup` para `${origin}/api` para que as requisições de malha passem pelo endpoint Node.js;
- Anexar o grupo visual do gripper apenas para web (4 STLs) ao `end_link`, com um intervalo de curso de 0–90mm;
- Implementar o solucionador de cinemática inversa DLS (damped least squares) `IKSolver`, com suporte a arraste do TCP e resolução de pose alvo;
- Fornecer predefinições de pose, sliders de juntas, arraste de TCP, gravação/reprodução/exportação de ensino, estimativa de envelope de alcance e alvo fantasma;
- Expor a API através do objeto `window.reBotSim` para ser chamado por `rebot-ros-ui.js`.

Definições de juntas (`rebot-sim.js`):

```javascript
const jointDefs = [
  { name: 'joint1', label: 'J1 base yaw',    min: -2.8,  max: 2.8,  home: 0 },
  { name: 'joint2', label: 'J2 shoulder',     min: -3.14, max: 0,    home: 0 },
  { name: 'joint3', label: 'J3 elbow',       min: -3.14, max: 0,    home: 0 },
  { name: 'joint4', label: 'J4 wrist pitch', min: -1.87, max: 1.57, home: 0 },
  { name: 'joint5', label: 'J5 wrist yaw',   min: -1.57, max: 1.57, home: 0 },
  { name: 'joint6', label: 'J6 tool roll',   min: -3.14, max: 3.14, home: 0 },
  { name: 'gripper', label: 'J7 gripper', min: 0, max: 0.09, home: 0, unit: 'm' }
];
```

:::note
O sistema de coordenadas Three.js na web difere do sistema ROS. O Three.js usa Y para cima por padrão, enquanto o ROS usa Z para cima. `rebot-sim.js` realiza a conversão com `threeToRos(v)`: `{ x: v.x, y: -v.z, z: v.y }`. Ao desenvolver recursos de pose personalizados, você deve usar essa conversão, caso contrário as coordenadas ficarão incorretas.
:::

**rebot-ros-client.js — cliente rosbridge**

`ReBotRosClient` estende `EventTarget` e encapsula o protocolo JSON rosbridge v2, fornecendo:

- `connect(url)` / `disconnect()`: gerenciamento de conexão WebSocket, com reconexão automática (`autoReconnect`, `reconnectDelay`);
- `subscribe(topic, type, callback, options)`: assinar um tópico, com suporte a limitação `throttleRate`;
- `callService(service, type, args)`: chamar um serviço e retornar uma Promise;
- `sendActionGoal(actionName, actionType, goal)`: chamar uma ação através de `/_action/send_goal`;
- Wrappers de alto nível: `enable()`, `disable()`, `safeHome()`, `startGravityCompensation()`, `setGripper()`, `moveToPose()`, `solveMoveToPoseIK()`, `followJointTrajectory()`;
- Wrappers de publicação: `publishJointCommand()`, `publishGripperCommand()`, `publishTargetPose()`.

O namespace padrão é `rebotarm`, e todos os caminhos de tópicos/serviços são prefixados com `/rebotarm/`.

**rebot-ros-ui.js — painel de controle ROS**

`rebot-ros-ui.js` (cerca de 1500 linhas) é a camada de negócios que conecta `ReBotRosClient` e `reBotSim`, responsável por:

- Assinar o estado das juntas, estado do gripper, status do braço, imagem da câmera virtual, resultados de detecção de visão e eventos de animação da simulação;
- Implementar os dois interruptores "Espelhar o estado real das juntas na web" e "Permitir que a web envie controle para o braço real";
- Limitação de comandos de juntas (`COMMAND_INTERVAL_MS = 45ms`) e retenção de espelhamento (`MIRROR_HOLD_MS = 1800ms`);
- Início/parada da compensação de gravidade e consulta de status;
- Controle do gripper e espera até alcançar (`commandGripperAndWait`);
- Verificação de IK, movimento de Pose, envio de trajetória e fallback de reprodução em baixo nível;
- Todo o fluxo de preensão visual (recuar, alinhar, pré-descida, descida, agarrar, erguer, transitar);
- Eventos de animação da simulação (`attach_object` / `release_object`) que fazem o gripper na web seguir o objeto.

O bloqueio de controle é uma proteção importante contra operação acidental. `controlAllowed()` verifica de forma uniforme: quando o ROS não está conectado ou o bloqueio de controle não está marcado, todos os comandos de controle são interceptados e a página apenas atualiza o modelo 3D.

**rebot-llm.js — UI de controle por texto via LLM**

`rebot-llm.js` implementa a interface de chat em linguagem natural. A cadeia é:

```text
web rebot-llm.js
  -> Node.js /api/llm/chat
  -> Text Agent HTTP service (default :8082)
  -> MCP Server (default :8081/mcp)
  -> ROS 2 service/action/topic
```

Na inicialização, ele primeiro chama `/api/llm/health` para verificar a integridade do text-agent; após o sucesso, ele habilita a caixa de entrada. As mensagens são encaminhadas para o text-agent através de `/api/llm/chat`, e o `text` e `events` retornados (processo de chamada de ferramenta) são renderizados na área de chat. Ao parar, ele envia `{ text: '__reset__', reset: true }` para limpar o contexto.

</details>

<details>
<summary><b>Visão geral da interface ROS2</b> (clique para expandir)</summary>


As principais interfaces ROS2 às quais o simulador web assina e publica estão listadas abaixo. O namespace padrão é `rebotarm`.

**Tópicos assinados**

| Tópico | Tipo | Descrição |
|---|---|---|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | Posição em tempo real de 6 juntas + gripper |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | Posição/velocidade/torque do gripper |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | Habilitação, modo, máquina de estados |
| `/rebotarm/mujoco/overhead_rgb/image_raw` | `sensor_msgs/msg/Image` | Imagem RGB aérea da mesa |
| `/rebotarm/vision/color_blocks/detections` | `std_msgs/msg/String` | Resultado da detecção de blocos coloridos (JSON) |
| `/rebotarm/sim/animation_event` | `std_msgs/msg/String` | Evento de animação da simulação (agarrar/soltar) |

**Tópicos publicados**

| Tópico | Tipo | Descrição |
|---|---|---|
| `/rebotarm/joints/<jointN>/cmd` | `rebotarm_msgs/msg/JointMotorCmd` | Comando esparso de junta única (mode=1 POS_VEL) |
| `/rebotarm/gripper/cmd` | `rebotarm_msgs/msg/JointMotorCmd` | Comando do gripper (m, 0~0.09) |
| `/rebotarm/mujoco/target_pose` | `geometry_msgs/msg/PoseStamped` | Pose alvo de arraste do TCP |

**Serviços chamados**

| Serviço | Tipo | Descrição |
|---|---|---|
| `/rebotarm/enable` | `std_srvs/srv/Trigger` | Habilitar todos os motores |
| `/rebotarm/disable` | `std_srvs/srv/Trigger` | Desabilitar todos os motores |
| `/rebotarm/safe_home` | `std_srvs/srv/Trigger` | Retorno seguro ao zero |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | Iniciar compensação de gravidade |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | Parar compensação de gravidade |
| `/rebotarm/gravity_compensation/status` | `std_srvs/srv/Trigger` | Consultar status da compensação de gravidade |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | Serviço de alcance do gripper |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | Serviço de solução de IK |
| `/rosapi/topics` | `rosapi_msgs/srv/Topics` | Diagnóstico: listar todos os tópicos |
| `/rosapi/services` | `rosapi_msgs/srv/Services` | Diagnóstico: listar todos os serviços |

**Ações chamadas**

| Ação | Tipo | Descrição |
|---|---|---|
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | Movimento de pose cartesiana |
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | Execução de trajetória de juntas |

:::note
Quando o serviço `_action/send_goal` para `FollowJointTrajectory` ou `MoveToPose` não é encontrado no ambiente ROS2, a página web automaticamente faz fallback para o modo de "reprodução em baixo nível": ela publica comandos de junta única ponto a ponto de acordo com os timestamps dos pontos da trajetória e sincroniza a interpolação no modelo 3D. Isso permite que a página web demonstre trajetórias mesmo em um ambiente mínimo com apenas o Fake Driver.
:::

</details>

## Unidades do Gripper e Convenções de Coordenadas

A web e as interfaces ROS usam **metros** como unidade do gripper:

```text
close: 0.00 m
open:  0.09 m
```

O firmware do motor usa **radianos** (0.0 = fechado, −5.0 = aberto). A conversão é feita no `HardwareManager` do controlador ROS2; a página web não lida diretamente com radianos.

No URDF, `finger_left` / `finger_right` são juntas prismáticas com limites `0~0.0285` (m). A página web mapeia a abertura de `finger_left` para o intervalo de comando do gripper 0~0.09 m através de `fingerOpeningToGripperCommand()`.

Para o sistema de coordenadas, o Three.js na web usa Y para cima por padrão, enquanto o ROS usa Z para cima. Todas as poses de TCP são convertidas com `threeToRos()` antes de serem publicadas no ROS:

```javascript
function threeToRos(v) {
  return { x: v.x, y: -v.z, z: v.y };
}
```

## Controle por Texto LLM/MCP

O controle em linguagem natural não é chamado diretamente do navegador para o ROS. Ele é encaminhado através do Node.js. O design em camadas permite que o LLM compreenda a intenção enquanto a camada MCP restringe a intenção em operações estruturadas do robô.

### Iniciar o Servidor MCP e o Text Agent

Inicie o Servidor MCP na VM Ubuntu (modo bloqueado por padrão, somente leitura):

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
source scripts/source_rebotarm_env.sh
ros2 launch rebotarm_agent rebotarm_mcp.launch.py
```

Modo de movimento de simulação (movimento permitido):

```bash
ros2 launch rebotarm_agent rebotarm_mcp.launch.py motion_mode:=allow
```

Inicie o serviço HTTP do text-agent (para a página web chamar):

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
./scripts/start_rebotarm_text_agent_http.sh
```
<details>
<summary>Saída esperada</summary>

```text
[rebotarm-text-agent-http] MCP=http://127.0.0.1:8081/mcp
[rebotarm-text-agent-http] model=qwen-plus
INFO:     Uvicorn running on http://0.0.0.0:8082
```

Quando `Uvicorn running on http://0.0.0.0:8082` aparecer, estará pronto.

</details>

Por padrão ele escuta em `0.0.0.0:8082`, o MCP aponta para `http://127.0.0.1:8081/mcp`, e o LLM usa `qwen-plus` por padrão.

### Uso via web

No painel "LLM text control" na página web, clique em "Start AI assistant". A página primeiro faz um health-check do text-agent; após o sucesso, ela habilita a caixa de entrada. Você pode digitar diretamente comandos em linguagem natural, por exemplo:

- Consultar o status do braço
- Mover para X=0.3 Y=0 Z=0.3
- Abrir a garra
- Agarrar o bloco vermelho

A resposta do text-agent e o processo de chamada de ferramentas são renderizados na área de chat.

### Configurar o destino do proxy

A página web localiza o backend por meio de `REBOTARM_TEXT_AGENT_URL` e `REBOTARM_MCP_URL` em `.env`. Se a página web roda no Windows e o ROS2 roda em uma VM Ubuntu, altere-os para o IP real da VM:

```bash
REBOTARM_TEXT_AGENT_URL=http://<Ubuntu IP>:8082
REBOTARM_MCP_URL=http://<Ubuntu IP>:8081/mcp
```

Após alterar, reinicie `./rebotarm start web` (ou `node server.js`). Na inicialização, a página lê e exibe o backend de proxy atual a partir de `/api/mcp/config`.

### Painel de visualização MCP Dashboard

O MCP Dashboard é uma entrada de depuração independente e não precisa do simulador web. Iniciá-lo leva duas etapas:
![MCP Dashboard](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web/rebot_mcp.png)

**Terminal 1 — iniciar o MCP Server:**

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
source scripts/source_rebotarm_env.sh
ros2 launch rebotarm_agent rebotarm_mcp.launch.py motion_mode:=allow
```

**Terminal 2 — iniciar o text-agent (inclui o MCP Dashboard):**

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
./scripts/start_rebotarm_text_agent_http.sh
```

**Acesso via navegador:**

```text
http://localhost:8082/
```

Abra `http://<Ubuntu IP>:8082/` em um navegador para acessá-lo; nenhuma instalação extra é necessária.

**Recursos**:

- **Visão geral das ferramentas**: obtém automaticamente todas as ferramentas registradas do MCP Server e as agrupa por categoria (status e diagnóstico, controle de habilitação, controle de movimento, controle da garra, compensação de gravidade, preensão visual, gravação e reprodução);
- **Filtro de busca**: a caixa de busca superior filtra nomes e descrições de ferramentas em tempo real;
- **Formulário de parâmetros**: gera automaticamente caixas de entrada com base no `inputSchema` de cada ferramenta; preencha os parâmetros e clique em "Call" para chamar diretamente a ferramenta MCP correspondente;
- **Tag de movimento**: ferramentas que exigem `motion_mode=allow` são marcadas com um rótulo "Motion";
- **Registro de ferramenta personalizada**: clique no botão "Register new tool", preencha o nome da ferramenta, descrição, categoria, URL do Webhook e Schema de parâmetros (JSON) para adicionar uma ferramenta personalizada ao painel. Quando chamada, os parâmetros são enviados via POST como JSON para a URL do Webhook;
- **Alternância CN/EN**: o botão de idioma no canto superior direito alterna a interface CN/EN com um clique; a escolha é salva no `localStorage` do navegador;
- **Entrada em linguagem natural**: digite comandos em linguagem natural na caixa de chat à direita; eles passam pelo endpoint `/chat` via cadeia LLM → MCP, e a resposta e o processo de chamada de ferramentas são exibidos na área de log em tempo real.

:::tip
O MCP Dashboard é uma entrada de depuração independente e não depende do simulador web. Contanto que o MCP Server (`:8081`) e o Text Agent (`:8082`) estejam em execução, abra `http://<Ubuntu IP>:8082/` para visualizar e chamar todas as 18 ferramentas MCP.
:::

**Visão geral dos endpoints**:

| Endpoint | Método | Descrição |
|---|---|---|
| `/` ou `/dashboard` | GET | Retorna a página HTML do Dashboard (tema de painel de vidro escuro, suporta alternância CN/EN) |
| `/tools` | GET | Retorna o JSON da lista de ferramentas MCP (nome, descrição, schema de parâmetros, categoria, flag de personalizado) |
| `/call_tool` | POST | Chama diretamente a ferramenta MCP especificada, corpo: `{"name":"...", "arguments":{...}}` |
| `/register_tool` | POST | Registra uma ferramenta personalizada, corpo: `{"name":"...", "description":"...", "category":"...", "webhook_url":"...", "parameters":{...}}` |
| `/unregister_tool` | POST | Exclui uma ferramenta personalizada registrada, corpo: `{"name":"..."}` |
| `/chat` | POST | Conversa em linguagem natural, corpo: `{"text":"..."}` |
| `/health` | GET | Health check |

## Guia de desenvolvimento secundário

### Modificar limites de juntas ou predefinições

Os limites de juntas e poses predefinidas são definidos nos objetos `jointDefs` e `presets` no topo de `rebot-sim.js`. Após modificar, atualize a página para surtir efeito; não é necessário reconstruir. Observe que os limites de juntas devem ser consistentes com o `<limit>` no URDF, caso contrário o modelo web e o comportamento do ROS não irão corresponder.

### Adicionar uma interface ROS personalizada

Se você precisar assinar um novo tópico ou chamar um novo serviço, adicione-o a `REQUIRED_TOPICS` ou `REQUIRED_SERVICES` em `rebot-ros-ui.js`, e chame `client.subscribe()` ou `client.callService()` nos eventos de botão. `ReBotRosClient` já encapsula o protocolo rosbridge, então você não precisa escrever a comunicação WebSocket manualmente.

### Estender ferramentas do LLM

As ferramentas do LLM são definidas pelo MCP Server em `rebotarm_agent`. Adicionar uma nova ferramenta requer implementá-la no pacote `rebotarm_agent` no workspace ROS2; após reconstruir, o text-agent a expõe automaticamente. Nenhuma alteração no lado web é necessária; o processo de chamada de ferramentas é retornado por meio do campo `events` de `/api/llm/chat` e renderizado.

### Modificar as malhas da garra na web

Os STLs da garra apenas para web estão em `split_meshes/grouped_gripper/`, incluindo `gripper_base.stl`, `gripper_hardware.stl`, `left_finger.stl` e `right_finger.stl`. Substitua esses arquivos e atualize a página. Não adicione uma segunda cópia de `urdf/` ou `meshes/` no diretório web; em tempo de execução apenas esses quatro STLs da garra são usados.

### Modificar o endereço de conexão do rosbridge

O endereço WebSocket do rosbridge é inserido manualmente pelo usuário no painel "ROS2 Bridge" na página web; ele não é codificado por padrão. Para alterar o endereço padrão ou predefinido:

- `reBotArm_simulator-DM/public/js/ros/rebot-ros-client.js` (o padrão do cliente é vazio e fornecido pela caixa de entrada)
- `reBotArm_simulator-DM/public/js/ros/rebot-ros-ui.js` (lê o último endereço a partir do `localStorage`)

A página tenta carregar o último endereço salvo quando a caixa de entrada está vazia. Modifique o padrão ou insira diretamente o endereço real no painel de conexão web.

<details>
<summary><b>Referência rápida de arquivos-chave</b> (clique para expandir)</summary>


| Arquivo | Finalidade |
|---|---|
| `reBotArm_simulator-DM/server.js` | Servidor estático Node.js + proxy LLM |
| `reBotArm_simulator-DM/package.json` | Scripts npm (start / dev) |
| `reBotArm_simulator-DM/.env` | Configuração de porta e destino do proxy |
| `reBotArm_simulator-DM/public/index.html` | Entrada de single-page app e layout do painel de controle |
| `reBotArm_simulator-DM/public/css/rebot-sim.css` | Estilos de tema escuro |
| `reBotArm_simulator-DM/public/js/rebot-sim.js` | Cena 3D, IK, ensino, núcleo de arrastar |
| `reBotArm_simulator-DM/public/js/rebot-llm.js` | UI de chat do LLM |
| `reBotArm_simulator-DM/public/js/ros/rebot-ros-client.js` | Cliente WebSocket do rosbridge |
| `reBotArm_simulator-DM/public/js/ros/rebot-ros-ui.js` | UI do painel de controle ROS e lógica de negócio |
| `reBotArm_simulator-DM/public/lib/three-r128.min.js` | Motor de renderização Three.js |
| `reBotArm_simulator-DM/public/lib/STLLoader-umd.js` | Carregador de malhas STL |
| `reBotArm_simulator-DM/public/lib/URDFLoader.js` | Parser URDF |
| `reBotArm_simulator-DM/split_meshes/grouped_gripper/` | STLs da garra apenas para web (4 arquivos) |

</details>

## FAQ

### 1. Após abrir o navegador, ele continua mostrando "Loading Rebot_ARM-B601-DM arm model..."

Se a página ficar travada na sobreposição de carregamento, a requisição de URDF ou malha STL falhou. Abra o painel Network nas ferramentas de desenvolvedor do navegador e verifique se `/api/urdf` e `/api/description/meshes/*.STL` retornam 200. Causas comuns:

- O caminho `BRINGUP_DIR` em `server.js` é resolvido incorretamente (o diretório web foi movido para um local fora do monorepo), então `src/rebotarm_bringup/description/` não pode ser encontrado;
- `package://rebotarm_bringup/...` no URDF não pode ser mapeado; confirme que `loader.packages` aponta para `${origin}/api`;
- O arquivo STL está faltando ou o caso do caminho não corresponde (Linux diferencia maiúsculas de minúsculas).

### 2. Após conectar ao ROS, o status permanece "offline"

Verifique nesta ordem:

- Se o rosbridge está em execução no lado Ubuntu e escutando em `0.0.0.0:9090` (não em `127.0.0.1`);
- Se o host web consegue alcançar a porta 9090 do Ubuntu (firewall, modo de rede da VM);
- Se o endereço WebSocket começa com `ws://` (como `ws://localhost:9090`);

### 3. O controle deslizante de juntas não consegue controlar o robô real

Controlar o robô real a partir da página web requer três etapas de desbloqueio:

1. Conectar ao ROS no painel "ROS2 Bridge" (WebSocket conecta ao rosbridge do controlador do robô real);
2. Marcar "Allow the web to send control to the real arm" → clicar em "OK" na caixa de diálogo de confirmação;
3. Clicar no botão "Enable".

As três etapas são necessárias. Quando o bloqueio de controle não está marcado, arrastar o controle deslizante apenas move o modelo 3D e não envia comandos ROS.

### 4. A garra não sincroniza com a web

O `position` de `/rebotarm/gripper/state` deve estar em metros (0~0.09), não em radianos. Se não sincronizar, verifique se `ros_publishers.py` no controlador ROS2 usa `gripper_position_m()`. A página web também infere a abertura da garra a partir de `finger_left` em `/rebotarm/joint_states` como fonte de feedback alternativa.

### 5. O assistente LLM não inicia

Quando a página web mostra "Connection failed", confirme que o serviço HTTP do text-agent está em execução na VM Ubuntu:

```bash
cd ~/reBot_Arm_Mujoco-DM/reBotArm_ros2_DM
./scripts/start_rebotarm_text_agent_http.sh
```

E confirme que `REBOTARM_TEXT_AGENT_URL` em `.env` aponta para o IP e porta corretos da VM (padrão `8082`). A página primeiro chama `/api/llm/health` para fazer o health-check; em caso de falha, ela mostra o erro específico na área de mensagens.

### 6. A demonstração de apreensão visual não funciona

A apreensão visual depende de toda a pilha de simulação física. Verifique:

- Se a câmera RGB aérea do MuJoCo está em execução e `/rebotarm/mujoco/overhead_rgb/image_raw` possui uma imagem;
- Se o detector de cores está em execução e `/rebotarm/vision/color_blocks/detections` possui resultados;
- Se a visualização da webcam mostra um quadro e o status de reconhecimento de cor mostra "N / target X";
- Se a seleção de cor alvo está correta (auto/vermelho/amarelo/azul).

### 7. As alterações no código de front-end não têm efeito

Os recursos de front-end são servidos estaticamente pelo Node.js; após alterar, atualize o navegador. A versão atual não registra um Service Worker, portanto não há cache offline fazendo com que a versão antiga não seja atualizada. Se o navegador ainda mostrar conteúdo antigo, use uma atualização forçada (Ctrl+Shift+R) ou limpe o cache normal.

### 8. "URDFLoader" ou "THREE" não encontrado

Estas são bibliotecas de terceiros em `public/lib/`, carregadas por `index.html` por meio de tags `<script>`. Confirme:

- `public/lib/three-r128.min.js`, `public/lib/URDFLoader.js` e `public/lib/STLLoader-umd.js` existem;
- Os caminhos das tags `<script>` em `index.html` estão corretos, e a ordem de carregamento é Three.js → STLLoader → URDFLoader → scripts de negócio;
- Não há erros 404 ou de ordem de carregamento no console do navegador.

### 9. `setup.sh` relata um erro ou a instalação falha

`setup.sh` é idempotente; os componentes com falha são listados em `Failed or still missing` no resumo final. Casos comuns:

- Fonte apt do ROS não configurada: o instalador baixa automaticamente o pacote `ros2-apt-source` e adiciona a fonte, o que requer sudo;
- Incompatibilidade de versão do Python: Jazzy precisa de 3.12, Humble precisa de 3.10; uma incompatibilidade é listada em `Version/platform mismatches`;
- Falha ao clonar o SDK: verifique a rede e a acessibilidade ao GitHub, ou clone manualmente para `reBotArm_ros2_DM/third_party/reBotArm_control_py/` e execute novamente;
- `colcon build` falhou: verifique se o `rosdep` está inicializado (`sudo rosdep init && rosdep update`), depois execute novamente `./setup.sh`.

## Contato

- Suporte técnico: [Submit an Issue](https://github.com/Seeed-Projects/reBot-DevArm/issues)
- Repositório do projeto: [Github](https://github.com/Seeed-Projects/reBot-DevArm)
- Fórum: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## Referências

- [reBot Arm B601-DM Quick Start](https://wiki.seeedstudio.com/pt-br/rebot_b601_dm_getting_started/)
- [reBot Arm B601-DM ROS2 Integration](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_ros2_integration/)
- [reBot Arm B601-DM Visual Grasping Demo](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_grasping_demo/)
- [reBot Arm B601-DM Pinocchio and MeshCat](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/)
- [reBot Arm B601-DM LeRobot Tutorial](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_lerobot/)
- [Documentação do ROS2 Jazzy](https://docs.ros.org/en/jazzy/)
- [Documentação do rosbridge_suite](http://wiki.ros.org/rosbridge_suite)
- [Documentação do Three.js](https://threejs.org/docs/)
- [URDFLoader (gkjohnson)](https://github.com/gkjohnson/urdf-loaders)
- [Model Context Protocol](https://modelcontextprotocol.io/)
