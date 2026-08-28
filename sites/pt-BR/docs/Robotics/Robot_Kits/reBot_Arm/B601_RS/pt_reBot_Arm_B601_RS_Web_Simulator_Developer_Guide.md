---
description: Este guia de desenvolvimento apresenta o console web do reBot Arm B601-RS, ROS 2, RobStride/SocketCAN, simulação MuJoCo, preensão visual e instalação, execução e fluxo de trabalho de desenvolvimento secundário de Agente LLM/MCP.
title: Guia de Desenvolvimento do Simulador Web e ROS 2/MuJoCo do reBot Arm B601-RS
keywords:
  - reBot Arm
  - B601-RS
  - Web Simulator
  - Three.js
  - ROS 2
  - RobStride
  - SocketCAN
  - MuJoCo
  - LLM
  - MCP
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_web_simulator_en.png
slug: /rebot_arm_b601_rs_web_simulator_developer_guide
last_update:
  date: 2026-08-24
  author: Yang-Ci
translation:
  skip: [zh-CN]
createdAt: '2026-08-13'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_web_simulator_developer_guide/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# Guia de Desenvolvimento do Simulador Web e ROS 2/MuJoCo do reBot Arm B601-RS

<RebotRsDocNav />

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
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
  <strong>Visualização em Three.js · ROS 2 · SocketCAN · Simulação MuJoCo · Controle por LLM/MCP</strong>
</p>

O projeto reBot Arm B601-RS integra um console web em Three.js, um driver ROS 2 para robô real, uma cena dinâmica MuJoCo específica para RS, detecção visual, trajetória e cinemática inversa, e um agente de preensão LLM/MCP opcional. Este guia explica como instalar, iniciar e desenvolver em todo o sistema.

> **Nota importante de segurança**
>
> Antes de iniciar o robô real, fixe o braço, limpe a área de trabalho, confirme que o botão físico de parada de emergência funciona e valide as ações primeiro na simulação. Para o primeiro teste com o robô real, mantenha o limite de velocidade em `0.2-0.4 rad/s` e mova uma articulação por vez.

## Funcionalidades do projeto

1. **Modelo de braço específico para RS**

   O console web e o ROS 2 usam `ReBot_Arm_RS.urdf` e suas malhas STL correspondentes. O servidor web lê o modelo primeiro do workspace `rebotarm_ros2_RS` e mantém uma cópia offline de reserva.

2. **Link de robô real RobStride + SocketCAN**

   O robô real usa a interface Linux SocketCAN `can0` a `1 Mbps` por padrão. O controlador se comunica com os motores RobStride por meio de `reBotArm_control_py`.

3. **Controle online MIT a 125 Hz**

   O console web atualiza os alvos em até 60 Hz, enquanto o controlador do robô real gera uma referência online limitada por velocidade, aceleração e jerk a 125 Hz e envia comandos MIT `q/dq/kp/kd/tau`. As atualizações de alvo vindas da web não bloqueiam o loop de controle dos motores.

4. **Isolamento de namespace entre robô real e simulação**

   O robô real usa `/rebotarm` por padrão e a simulação usa `/rebotarm_rs`. O mesmo console web pode alternar os alvos de controle, e você pode executar o robô real e o Fake Driver ao mesmo tempo para comparar interfaces.

5. **Cena MuJoCo específica para RS**

   O MuJoCo oferece suporte aos modos `physics` e `kinematic`. O modo padrão `physics` inclui gravidade, contato, objetos sobre a mesa, uma câmera superior, detecção de cores e validação física de preensão.

6. **Animação web guiada por feedback**

   No modo de robô real, o modelo sólido mostra o feedback real e o modelo translúcido mostra o alvo de controle. O console web aplica filtragem passa-baixa adaptativa, zona morta de feedback e interpolação de exibição às medições do rosbridge para que a animação local não seja confundida com a pose real do braço.

7. **Máquina de estados de segurança**

   O sistema arbitra trajetórias, compensação de gravidade, homing seguro e comandos contínuos vindos da web. Desabilitar a partir de uma pose diferente de zero executa primeiro o homing seguro e o verifica; se a verificação falhar, o braço permanece habilitado para evitar queda repentina.

8. **Preensão visual e Agente LLM/MCP**

   A cena de simulação fornece objetos vermelhos, azuis e amarelos com detecção superior, IK, preensão, validação de elevação e suporte a posicionamento. As ferramentas MCP podem ser usadas de forma independente ou conectadas a um modelo de linguagem grande para chamar operações estruturadas do robô por meio de linguagem natural.

## Observações sobre cabeamento e rede

### Cabeamento CAN do robô real RS

1. Fixe o braço e limpe sua faixa de movimento.
2. Conecte o barramento CAN dos motores RobStride, a fonte de alimentação e o adaptador USB-CAN.
3. Verifique se CAN_H, CAN_L e GND estão cabeados corretamente e configure o resistor de terminação de acordo com os requisitos de hardware.
4. Após ligar, confirme que o adaptador CAN de destino aparece no Ubuntu.

Configure `can0`:

```bash
sudo ip link set can0 down 2>/dev/null || true
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

Observe os quadros do barramento em modo somente leitura:

```bash
candump can0
```

Quadros CAN contínuos significam que a interface está recebendo dados. Pressione `Ctrl+C` para sair do `candump`.

> Se a interface entrar em `BUS-OFF`, primeiro verifique alimentação, aterramento, taxa de baud, resistores de terminação, IDs dos motores e cabeamento CAN. Não mascare falhas de hardware reiniciando o controlador repetidamente.

### Rede para Web e ROS 2

O console web se comunica com o ROS 2 por meio do WebSocket do rosbridge, usando a porta `9090` por padrão:

```text
Web console: http://<Ubuntu-IP>:3002
rosbridge:   ws://<Ubuntu-IP>:9090
MCP Server:  http://<Ubuntu-IP>:8081/mcp
Text Agent:  http://<Ubuntu-IP>:8082
```

Você pode usar `localhost` quando o console web e o ROS 2 estiverem em execução na mesma máquina. Ao acessar de outro computador na LAN, não insira o próprio `localhost` do computador com o navegador; em vez disso, use o IP do host Ubuntu que está executando os serviços ROS 2.

O script de inicialização do projeto define o alcance de descoberta do ROS 2 como `LOCALHOST` por padrão, de modo que roaming de Wi-Fi ou mudanças de IP não dividam nós da mesma máquina em redes DDS diferentes. Isso não afeta o acesso às portas HTTP/WebSocket a partir de outros dispositivos. Para permitir que outro computador entre diretamente no grafo ROS, defina o mesmo valor nos terminais relevantes:

```bash
export REBOTARM_ROS_DISCOVERY_RANGE=SUBNET
```

## Requisitos de ambiente

| Item | Requisito recomendado |
|---|---|
| Backend OS | Ubuntu 24.04 |
| ROS 2 | Jazzy |
| Ambiente de referência compatível | Ubuntu 22.04 + ROS 2 Humble (uso com robô real requer seus próprios testes de regressão) |
| Python | 3.12 (Jazzy) ou 3.10 (Humble) |
| Node.js | 18 ou mais recente |
| Navegador | Versão estável atual do Chrome, Chromium, Edge ou Firefox |
| Ferramentas CAN | `iproute2`, `can-utils` |
| CAN do robô real | `can0`, 1 Mbps |
| MuJoCo | Instalado pelo ambiente Python do projeto |

## Etapas de instalação

### Etapa 1: Obter o projeto

```bash
git clone https://github.com/Yang-Ci/ReBot_Arm_web_RS.git ~/reBot_Arm_Mujoco-RS
cd ~/reBot_Arm_Mujoco-RS
```

Os comandos abaixo usam `~/reBot_Arm_Mujoco-RS` como diretório do projeto. Se o seu diretório for diferente, substitua os caminhos de acordo.

### Etapa 2: Verificação de ambiente somente leitura

```bash
cd ~/reBot_Arm_Mujoco-RS
./setup.sh --check
```

Este comando apenas verifica o sistema e não modifica o ambiente. As verificações incluem:

- Versões de Ubuntu, Python e Node.js;
- ROS 2, rosbridge, MoveIt e ferramentas de build;
- Ferramentas SocketCAN e `can0`;
- O ambiente virtual Python e módulos principais;
- Resultados de build do workspace ROS 2;
- O `package.json` e o `.env` da web.

### Etapa 3: Instalação e build em um clique

```bash
./setup.sh --yes
./rebotarm doctor
```

O script de instalação instala ROS 2, Node.js, SocketCAN e dependências de build ausentes, cria `rebotarm_ros2_RS/.venv`, instala as dependências Python para o robô real RS, MuJoCo e Agent, executa o rosdep e faz o build do workspace ROS 2 com:

```bash
colcon build --symlink-install
```

O SDK de controle e os modelos MuJoCo são rastreados pelo repositório principal como arquivos comuns. Eles não são submódulos Git e não contêm repositórios Git aninhados. Arquivos `.env`, SDKs e modelos existentes não são redefinidos pelo script de instalação.

Se as dependências do sistema já estiverem completas, você só precisa preparar e reconstruir o workspace ROS:

```bash
./scripts/setup_rs_workspace.sh
```

Após modificar pacotes Python, geralmente isto é suficiente:

```bash
source scripts/rs_env.sh
cd rebotarm_ros2_RS
colcon build --symlink-install
```

### Etapa 4: Configurar variáveis de ambiente da web

Na primeira instalação, `reBotArm_simulator-RS/.env` é criado a partir de `.env.example`. Campos principais:

```bash
PORT=3002
HTTPS=0
REBOTARM_TEXT_AGENT_URL=http://localhost:8082
REBOTARM_MCP_URL=http://localhost:8081/mcp
MOTORBRIDGE_WS_URL=ws://127.0.0.1:9002
MOTORBRIDGE_WS_TOKEN=
```

Se o console web e o ROS 2/Agent não estiverem na mesma máquina, altere os endereços de proxy para o IP da máquina de backend. Chaves de API e tokens devem ser armazenados apenas em variáveis de ambiente ou no `.env` local não versionado.

## Inicializando o projeto

<Tabs defaultValue="web" groupId="launch-mode" queryString>

<TabItem value="web" label="Demo somente web">

Inicie apenas o servidor web Node.js, sem rosbridge ou ROS 2:

```bash
cd ~/reBot_Arm_Mujoco-RS/reBotArm_simulator-RS
npm start
```

Abra o navegador em:

```text
http://localhost:3002
```

Este modo é adequado para desenvolver o modelo 3D, UI, poses predefinidas e recursos de front-end. Sem o backend ROS 2, o console web não pode controlar o robô real nem a cena completa do MuJoCo.

<!-- Image: rebot_rs_web_simulator_en.png -->

![Interface do simulador web do reBot Arm B601-RS](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_web_simulator_en.png)
</TabItem>

<TabItem value="sim" label="Simulação MuJoCo RS completa">

O Terminal 1 inicia o Fake Driver, MuJoCo, câmera, detecção, Agente MCP e rosbridge:

```bash
cd ~/reBot_Arm_Mujoco-RS
./rebotarm start rs_sim
```

O Terminal 2 inicia o console web:

```bash
cd ~/reBot_Arm_Mujoco-RS
./rebotarm start web
```

Abra `http://localhost:3002`, selecione o alvo de controle "RS Simulation (`/rebotarm_rs`)" e insira `ws://localhost:9090` como o WebSocket ROS.

Opções comuns de simulação:

```bash
# No native MuJoCo window; suitable for automated tests
REBOTARM_MUJOCO_VIEWER=false ./rebotarm start rs_sim

# Kinematic following only; does not validate contact, gravity, or physical grasping
REBOTARM_MUJOCO_MODE=kinematic ./rebotarm start rs_sim

# Do not start the MCP Agent
REBOTARM_START_AGENT=false ./rebotarm start rs_sim

# After confirming there are no active tasks, clean up leftover simulation processes, then start
./rebotarm start rs_sim --force
```

> A preensão visual deve usar o modo `physics` padrão. O modo `kinematic` sincroniza diretamente as posições das juntas e não pode ser usado para avaliar ganhos de controle, estabilidade de contato ou força de preensão.

<!-- Image: rebot_rs_mujoco_physics.png -->

![Simulação física MuJoCo do reBot Arm B601-RS](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_mujoco_physics.png)
</TabItem>

<TabItem value="real" label="Controle do robô real RS">

Primeiro configure e verifique o SocketCAN:

```bash
sudo ip link set can0 down 2>/dev/null || true
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details -statistics link show can0
```

Depois de confirmar que o botão de parada de emergência funciona e que a área de trabalho está livre, inicie o controlador do robô real no terminal 1:

```bash
cd ~/reBot_Arm_Mujoco-RS
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE \
  ./rebotarm start rs
```

Inicie o console web e o rosbridge no terminal 2:

```bash
./rebotarm start web
```

Abra `http://localhost:3002` e selecione "RS Real Robot (`/rebotarm`)". Para o primeiro teste, siga esta ordem:

1. Verifique se o console web indica conectado, se o status do braço está normal e se não há erros de motor.
2. Clique em enable.
3. Defina a velocidade para `0.2-0.4 rad/s`.
4. Movimente uma junta de cada vez por uma pequena quantidade e confirme direção, limites e feedback.
5. Em seguida, teste arraste por TCP, trajetórias ou compensação de gravidade.
6. Ao terminar, execute o homing seguro e desabilite, depois pressione `Ctrl+C` no terminal do controlador.

Não use `Ctrl+Z` para pausar o controlador do robô real e não trate um botão da web como um botão físico de parada de emergência. Se uma instância antiga do controlador ficar para trás, o script de inicialização do robô real solicita que a instância antiga saia com segurança e limpa os recursos residuais confirmados como pertencentes a esse controlador.

<!-- Image: rebot_rs_real_robot_web_en.png -->

![Controle web do robô real reBot Arm B601-RS](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_real_robot_web_en.png)
</TabItem>

<TabItem value="dual" label="Depuração dupla real/Fake">

```bash
export REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE
./scripts/start_rs_dual.sh
```

Este script inicia:

- o robô real `/rebotarm`;
- o Fake Driver `/rebotarm_rs`;
- rosbridge `9090`.

Ele é usado para comparar interfaces, direções das juntas e status. Ele não inicia a pilha completa do MuJoCo, visão, Agent ou servidor web. Confirme novamente o namespace selecionado no console web antes de enviar comandos.


</TabItem>

</Tabs>

## Linha de comando unificada

| Comando | Descrição |
|---|---|
| `./rebotarm doctor` | Verificação de ambiente somente leitura, equivalente a `./setup.sh --check` |
| `./rebotarm start web` | Inicia ou reutiliza o rosbridge e inicia o servidor web |
| `./rebotarm start rs_sim` | Inicia a pilha completa de simulação MuJoCo RS |
| `./rebotarm start rs` | Inicia o controlador RS do robô real; a variável de confirmação de hardware é obrigatória |
| `./rebotarm status` | Visualiza processos registrados, portas e `can0` |
| `./rebotarm stop` | Encerra os processos filhos web/rosbridge registrados por `start web` |

Processos de simulação e de robô real em execução em primeiro plano devem ser encerrados normalmente com `Ctrl+C` em seus próprios terminais.

## Arquitetura do projeto

```text
reBot_Arm_Mujoco-RS/
|-- setup.sh                              One-click check, install, and build
|-- rebotarm                              Unified start, status, and stop entry
|-- requirements-rs-hardware.txt          RS real-robot Python dependencies
|-- requirements-rs-mujoco.txt            MuJoCo/Agent Python dependencies
|-- scripts/
|   |-- rs_env.sh                         Load ROS, venv, and workspace
|   |-- setup_rs_workspace.sh             Prepare and build the ROS 2 workspace
|   |-- start_rs_sim.sh                   Full RS simulation stack
|   |-- start_rs_hardware.sh              RS real-robot controller
|   |-- start_rs_dual.sh                  Real-robot/Fake dual-namespace startup
|   `-- start_rs_text_agent.sh            Text Agent HTTP service
|-- rebotarm_ros2_RS/
|   |-- src/rebotarmcontroller/           Real-robot controller and Fake Driver
|   |-- src/rebotarm_msgs/                Custom msg/srv/action
|   |-- src/rebotarm_bringup/             Config, URDF, meshes, and launch
|   |-- src/rebotarm_mujoco_rs/           RS MuJoCo, camera, detection, and tasks
|   |-- src/rebotarm_agent/               MCP Server and Text Agent
|   |-- src/rebotarm_moveit_config/       MoveIt configuration
|   |-- src/rebotarm_moveit_demos/        Trajectory and picking/placing examples
|   `-- third_party/reBotArm_control_py/  Plain-source control SDK
`-- reBotArm_simulator-RS/
    |-- server.js                           Static server and Agent proxy
    |-- public/index.html                   Web entry point
    |-- public/js/rebot-sim.js              Three.js, IK, scene, and animation
    |-- public/js/ros/rebot-ros-client.js   rosbridge client
    |-- public/js/ros/rebot-ros-ui.js       ROS UI, control, and feedback logic
    |-- public/js/rebot-llm.js              LLM chat UI
    |-- description/                         Standalone fallback model for the web
    `-- split_meshes/grouped_gripper/        Optional web gripper meshes
```

## Fluxo de dados do sistema

### Comandos web para o robô real RS

```text
User drags a joint slider or TCP handle
  -> Three.js / browser DLS IK
  -> 30 ms slider damping, 1 deg input dead zone, max 60 Hz throttle
  -> rosbridge WebSocket
  -> JointMitCmd ROS topic
  -> command state arbitration
  -> 125 Hz velocity/acceleration/jerk-limited online reference
  -> MIT q/dq/kp/kd/tau
  -> reBotArm_control_py
  -> MotorBridge + SocketCAN can0
  -> RobStride motors
```

Um novo alvo web apenas atualiza o ponto final da trajetória online. Mesmo que o navegador pare temporariamente de enviar o próximo quadro, o loop de controle de 125 Hz continua gerando uma referência contínua. A profundidade de QoS do comando é 1, então um novo alvo sobrescreve o alvo antigo não processado e evita reproduzir um acúmulo de posições depois que o arraste termina.

### Feedback do robô real RS para a web

```text
RobStride encoder/status
  -> SocketCAN can0
  -> SDK status cache
  -> 20 Hz real-robot sync query
  -> 60 Hz ROS JointState publication
  -> rosbridge subscription throttle
  -> adaptive low-pass + feedback dead zone
  -> 32-120 ms display interpolation
  -> Three.js solid feedback model
```

O modelo translúcido representa o alvo de controle. A sombra do alvo desaparece automaticamente quando os erros das juntas e do gripper são pequenos o suficiente. A filtragem de exibição afeta apenas a imagem na web e não altera os alvos enviados aos motores.

### Cadeia de simulação MuJoCo

```text
Web console or Agent
  -> ROS 2 commands, services, or actions
  -> Fake RS Driver (100 Hz)
  -> MuJoCo Sync (250 Hz)
  -> RS MJCF dynamics and collision
  -> joint/object states, overhead camera, and color detection
  -> Web console and MCP Agent
```

## Observações sobre o controle via web

### Alvo de controle e namespace

| Modo | Namespace | Fonte do modelo web |
|---|---|---|
| Robô real RS | `/rebotarm` | Feedback real do robô `/joint_states` |
| Simulação RS | `/rebotarm_rs` | Usa primeiro o estado real do MuJoCo |

Após alternar modos, o console web recria o cliente rosbridge e os caminhos de interface de acordo com o namespace de destino.

### Juntas e gripper

- J1-J6 são controladas em radianos, com limites consistentes com o URDF do RS.
- A faixa de velocidade na web é `0.05-1.50 rad/s` com padrão de `1.2 rad/s`.
- J1-J6 usam amortecimento do slider de `30 ms` e uma zona morta de entrada de `1 deg` por padrão; a posição final é confirmada à força quando você solta o slider.
- J7/o gripper é exibido como largura de abertura na web, com faixa de `0-71.5 mm`.
- O gripper é convertido para a faixa do motor RS `0-5 rad` ao publicar, e o feedback ROS é convertido de volta para milímetros.
- J7 não passa pelo amortecimento em radianos ou zona morta de entrada de J1-J6; apenas o alvo mais recente é enviado por quadro de renderização do navegador.

### Arraste por TCP e IK

O console web usa mínimos quadrados amortecidos (DLS) para resolver alvos de TCP. A versão RS adapta o amortecimento de acordo com o nível de singularidade e então envia a solução de juntas pela mesma cadeia de controle online MIT.

A cena Three.js da web usa eixo Y para cima e o ROS usa eixo Z para cima. A lógica de conversão de coordenadas está em `rebot-sim.js`; ao estender recursos de pose, reutilize a conversão existente em vez de trocar valores de formulário diretamente.

A entrada de pose usa metros: X é para frente, Y é para a esquerda e Z é para cima. Se um alvo for inalcançável, primeiro aumente Z ou reduza a distância horizontal, depois verifique as restrições de orientação e os limites das juntas.

### Ensino e reprodução de trajetórias

O console web pode gravar trajetórias de juntas e chamar:

```text
/<namespace>/follow_joint_trajectory
```

O servidor de ações do robô real RS usa referências contínuas de posição/velocidade cúbicas de Hermite monótonas e estende automaticamente segmentos de trajetória que são muito curtos, mantendo velocidades de trajetória típicas do robô real abaixo de cerca de `0.60 rad/s`. Os chamadores devem aguardar o resultado da ação ou o feedback do robô real e não devem encerrar a animação de reprodução antecipadamente de acordo com a duração original da requisição.

### Enable, homing seguro e disable

- O controlador do robô real precisa ser habilitado após cada inicialização.
- `safe_home` retorna suavemente para zero e valida ângulo e velocidade.
- Clicar em disable a partir de uma pose diferente de zero entra primeiro em `SAFE_HOMING`.
- Se a validação de homing falhar, os motores permanecem habilitados e um resultado de falha é retornado.
- `set_zero` reescreve o ponto zero do motor e não é um botão de homing comum. Só o chame quando a estrutura mecânica estiver realmente na pose calibrada.

### Compensação de Gravidade

A compensação de gravidade do RS começa a partir da pose atualmente medida e alterna para MIT junta a junta, para que a pose zero não seja confundida com o alvo. Inícios repetidos são idempotentes; ao parar, mantém a última posição medida.

Comandos de junta, TCP, trajetória e garra via web são rejeitados durante a compensação de gravidade. Serviços relacionados:

```text
/<namespace>/gravity_compensation/start
/<namespace>/gravity_compensation/stop
/<namespace>/gravity_compensation/status
```

## Interfaces ROS 2

Os exemplos abaixo usam o robô real `/rebotarm`. Para simulação, substitua o prefixo por `/rebotarm_rs`.

### Tópicos de Status

| Tópico | Tipo | Descrição |
|---|---|---|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | Status unificado dos seis eixos e da garra |
| `/rebotarm/joints/<name>/state` | `rebotarm_msgs/msg/JointMotorState` | Posição, velocidade, torque e código de status de um único motor |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | Status bruto do motor da garra |
| `/rebotarm/control_target` | `sensor_msgs/msg/JointState` | Alvo final vindo do console web ou da camada de ações |
| `/rebotarm/control_reference` | `sensor_msgs/msg/JointState` | Amostra ROS da referência de trajetória online de 125 Hz; `effort` carrega a aceleração de referência |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | Estado de habilitação, modo, máquina de estados e códigos de erro |

### Tópicos de Comando de Baixo Nível

| Tópico | Tipo | Descrição |
|---|---|---|
| `/rebotarm/joints/<joint1..joint6>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando de junta padrão do console web para o robô real |
| `/rebotarm/joints/<joint1..joint6>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando de posição e velocidade |
| `/rebotarm/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando MIT da garra RS |
| `/rebotarm/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando de posição e velocidade da garra |
| `/rebotarm/mujoco/target_pose` | `geometry_msgs/msg/PoseStamped` | Pose alvo do TCP |

Antes de publicar comandos de baixo nível por conta própria, verifique `arm_status.state_machine`. Não antecipe o controle durante `GRAVITY_COMP`, `SAFE_HOMING` ou execução de trajetória.

### Serviços

| Serviço | Tipo | Descrição |
|---|---|---|
| `/rebotarm/enable` | `std_srvs/srv/Trigger` | Habilitar o braço |
| `/rebotarm/disable` | `std_srvs/srv/Trigger` | Desabilitar com segurança; faz homing antes quando necessário |
| `/rebotarm/safe_home` | `std_srvs/srv/Trigger` | Homing seguro com validação |
| `/rebotarm/set_zero` | `rebotarm_msgs/srv/SetZero` | Gravar o ponto zero do motor; use com cautela |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | Iniciar compensação de gravidade |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | Parar compensação de gravidade |
| `/rebotarm/gravity_compensation/status` | `std_srvs/srv/Trigger` | Consultar o status da compensação de gravidade |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | Resolução de IK de pose |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | Controle de posição da garra |
| `/rebotarm/gripper/open` | `rebotarm_msgs/srv/GripperCommand` | Abrir a garra |
| `/rebotarm/gripper/close` | `rebotarm_msgs/srv/GripperCommand` | Fechar a garra |

Exemplo:

```bash
source scripts/rs_env.sh
ros2 service call /rebotarm/gravity_compensation/status std_srvs/srv/Trigger '{}'
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger '{}'
```

### Ações

| Ação | Tipo | Descrição |
|---|---|---|
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | Trajetória de juntas |
| `/rebotarm/gripper/command` | `control_msgs/action/GripperCommand` | Ação da garra |
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | Movimento de pose cartesiana |

### Interfaces MuJoCo e de Visão

| Interface | Tipo/Uso |
|---|---|
| `/rebotarm_rs/mujoco/joint_states` | Estados reais de juntas do MuJoCo |
| `/rebotarm_rs/mujoco/object_states` | Estados de objetos da cena em JSON |
| `/rebotarm_rs/mujoco/overhead_rgb/image_raw` | Câmera RGB superior |
| `/rebotarm_rs/vision/color_blocks/detections` | Detecção de objetos por cor em JSON |
| `/rebotarm_rs/mujoco/reset` | Reiniciar a simulação |
| `/rebotarm_rs/mujoco/record/start` | Iniciar gravação |
| `/rebotarm_rs/mujoco/record/stop` | Parar gravação |
| `/rebotarm_rs/mujoco/record/replay` | Reproduzir uma gravação |
| `/rebotarm_rs/mujoco/record/clear` | Limpar gravações |

## Agarramento Visual

A simulação completa inclui por padrão um cubo vermelho, um paralelepípedo azul e um cilindro amarelo. O console web pode selecionar uma cor alvo ou escolher automaticamente, depois executar alinhamento, pré-agarre, descida, fechamento, elevação e posicionamento.

O sucesso do agarramento não se resume apenas à conclusão da trajetória. O sistema também verifica se o objeto do MuJoCo foi realmente levantado, evitando um relatório de sucesso falso quando a garra fecha vazia ou quando a trajetória é concluída sem pegar o objeto.

Solucionar problemas de agarramento visual:

```bash
source scripts/rs_env.sh
ros2 topic echo /rebotarm_rs/vision/color_blocks/detections --once
ros2 topic echo /rebotarm_rs/mujoco/object_states --once
ros2 service list | grep rebotarm_rs
```

Se a garra fecha mas não levanta o objeto:

- confirme que o modo `physics` está sendo usado;
- verifique se a câmera e a detecção de cor estão publicando continuamente;
- verifique a largura, orientação e altura de agarramento do alvo;
- revise a estabilidade de contato e os resultados de validação de elevação física nos logs;
- evite iniciar múltiplos pedidos de agarramento ou IK ao mesmo tempo.

## Controle por Texto com LLM/MCP

### Arquitetura

```text
Web rebot-llm.js
  -> Node.js /api/llm/chat
  -> Text Agent (default :8082)
  -> MCP Server (default :8081/mcp)
  -> ROS 2 service/action/topic
```

O LLM entende linguagem natural, e a camada MCP restringe a intenção em chamadas de ferramentas estruturadas. Sem uma configuração de LLM, as ferramentas de detecção, IK, juntas, garra e agarramento do MCP ainda podem ser chamadas diretamente.

### Iniciar o Agente de Texto

A simulação completa inicia o MCP Agent por padrão. Para habilitar o ponto de entrada em linguagem natural, abra outro terminal:

```bash
cd ~/reBot_Arm_Mujoco-RS
export DASHSCOPE_API_KEY='your-key'
export REBOTARM_LLM_MODEL='qwen-plus'
./scripts/start_rs_text_agent.sh
```

Endereços padrão:

```text
MCP Server: http://127.0.0.1:8081/mcp
Dashboard:  http://localhost:8082
```

No console web você pode:

- consultar o status do braço e do ROS;
- abrir ou fechar a garra;
- verificar se uma pose alvo é alcançável;
- mover para uma pose especificada;
- agarrar um objeto de uma cor especificada.

Antes de habilitar ferramentas de movimento em um ambiente de robô real, verifique explicitamente a permissão de movimento e o namespace do Agent. O ponto de entrada em linguagem natural não pode contornar a máquina de estados de segurança do backend do braço nem substituir o botão físico de parada de emergência.

## Principais Parâmetros de Controle

A configuração padrão do robô real está localizada em:

```text
rebotarm_ros2_RS/src/rebotarm_bringup/config/rebotarm_hardware.yaml
```

Parâmetros-chave atuais do RS:

```yaml
rate: 125
control:
  arm_control_mode: mit
  mit_kp: [80, 150, 150, 50, 50, 50]
  mit_kd: [5, 10, 10, 5, 4, 4]
  stream_acceleration_limit: 4.0
  stream_jerk_limit: 30.0
  stream_natural_frequency: 8.0
gravity_compensation:
  kp: 2.0
  kd: 1.0
```

Outras frequências padrão:

| Camada | Frequência padrão | Descrição |
|---|---:|---|
| Alvo de junta via web | Até 60 Hz | Sliders e IK de TCP atualizam continuamente o alvo |
| Consulta de feedback de sincronização do robô real | 20 Hz | Atualiza o cache de medições do RobStride |
| Estado ROS do robô real | 60 Hz | Publica feedback, alvo e referência a partir do cache |
| Controle MIT do RS | 125 Hz | Suavização online e comandos de motor |
| Fake Driver | 100 Hz | Controle e estado da simulação |
| Sincronização MuJoCo | 250 Hz | Sincronização de dinâmica padrão |
| Estado de objeto MuJoCo | 30 Hz | Cena e Agent |
| Câmera superior | 8 Hz | Imagem RGB |
| Detecção de cor | 10 Hz | Resultados de detecção |

Antes de ajustar ganhos, registre todos os itens a seguir ao mesmo tempo:

```text
/rebotarm/control_target
/rebotarm/control_reference
/rebotarm/joint_states
```

Se o alvo for descontínuo, verifique a camada de entrada web; se a referência for descontínua, verifique a trajetória online; se a referência for contínua mas o feedback ultrapassar o alvo, verifique ganhos MIT, carga, atrito, corrente e aumento de temperatura; verifique filtragem de feedback e intervalos de chegada do rosbridge apenas quando a animação web sozinha estiver tremendo.

## Guia de Desenvolvimento Secundário

### Modificar Limites de Junta ou Poses Pré-definidas na Web

Arquivo:

```text
reBotArm_simulator-RS/public/js/rebot-sim.js
```

As definições de juntas estão em `jointDefs` e os presets em `presets`. Ao modificar limites de juntas, verifique em conjunto o URDF do RS, a configuração do SDK e os limites mecânicos reais; não altere apenas a faixa de exibição na web.

### Modificar Frequência, Filtragem e Amortecimento de Comandos Web

Arquivo:

```text
reBotArm_simulator-RS/public/js/ros/rebot-ros-ui.js
```

Este arquivo lida com limitação de taxa de comandos web, filtragem de feedback do robô real, zona morta de feedback, interpolação, sombra de alvo, travas de controle e lógica de visão. Não compense a latência da animação web aumentando os ganhos MIT do robô real.

### Adicionar Interfaces ROS Personalizadas

O wrapper do cliente está localizado em:

```text
reBotArm_simulator-RS/public/js/ros/rebot-ros-client.js
```

Adicione caminhos de Topic, Service ou Action na camada de UI e chame `subscribe()`, `callService()` ou `sendActionGoal()` do cliente. As interfaces devem sempre ser geradas a partir do `namespace` atual para evitar enviar comandos de simulação para o robô real.

### Modificar o URDF ou Mesh do RS

Modelos principais do ROS 2:

```text
rebotarm_ros2_RS/src/rebotarm_bringup/description/urdf/ReBot_Arm_RS.urdf
rebotarm_ros2_RS/src/rebotarm_bringup/description/meshes_rs/
```

O servidor web lê primeiro os modelos acima. Se o diretório web for copiado e executado isoladamente, ele usa:

```text
reBotArm_simulator-RS/description/urdf/ReBot_Arm_RS.urdf
reBotArm_simulator-RS/description/meshes_rs/
```

Mantenha ambas as cópias sincronizadas ao modificá-las e verifique a diferenciação de maiúsculas/minúsculas em nomes de arquivos no Linux.

### Modificar o MuJoCo

| Arquivo/diretório | Função |
|---|---|
| `rebotarm_ros2_RS/src/rebotarm_mujoco_rs/models/` | MJCF e STL do RS |
| `rebotarm_mujoco_rs/mujoco_sync.py` | Sincronizar frequência, dinâmica e PD |
| `rebotarm_mujoco_rs/scene_camera.py` | Câmera superior |
| `rebotarm_mujoco_rs/scene_detector.py` | Detecção de cor |
| `rebotarm_mujoco_rs/task_server.py` | Tarefas, gravação e reprodução |
| `rebotarm_mujoco_rs/launch/mujoco_rs.launch.py` | Parâmetros de inicialização |

### Estender as ferramentas MCP

O servidor MCP está localizado em:

```text
rebotarm_ros2_RS/src/rebotarm_agent/rebotarm_agent/rebotarm_mcp_server.py
```

Ao adicionar uma ferramenta:

1. defina um esquema de entrada claro e unidades;
2. separe ferramentas somente leitura de ferramentas de movimento;
3. valide namespace, estado e permissão de movimento em ferramentas de movimento;
4. chame o backend por meio de ROS 2 Service/Action/Topic em vez de contornar o controlador diretamente;
5. reconstrua o workspace e teste caminhos de erro, timeout e cancelamento na simulação.

## Comandos de verificação

```bash
source scripts/rs_env.sh
python3 -m pytest rebotarm_ros2_RS/src/rebotarmcontroller/test -q

bash -n setup.sh rebotarm scripts/*.sh

node --check reBotArm_simulator-RS/server.js
node --check reBotArm_simulator-RS/public/js/rebot-sim.js
node --check reBotArm_simulator-RS/public/js/ros/rebot-ros-client.js
node --check reBotArm_simulator-RS/public/js/ros/rebot-ros-ui.js
node --check reBotArm_simulator-RS/public/js/rebot-llm.js
```

Verificações em tempo de execução:

```bash
./rebotarm status
ros2 node list
ros2 topic list | grep rebotarm
ros2 service list | grep rebotarm
ros2 action list | grep rebotarm
```

## FAQ

### 1. A página da web permanece na tela de carregamento do modelo

Abra o painel Network nas ferramentas de desenvolvedor do navegador e verifique se estas requisições retornam `200`:

```text
/api/urdf
/api/description/meshes/*.STL
```

Causas comuns:

- o URDF ou STL do RS não existe;
- o diretório web foi movido sozinho e o modelo de fallback está incompleto;
- o mapeamento `package://` no URDF está incorreto;
- a diferenciação de maiúsculas/minúsculas em nomes de arquivos no Linux não corresponde;
- a ordem de carregamento de Three.js, STLLoader ou URDFLoader está errada.

### 2. O ROS mostra "disconnected"

```bash
ss -ltnp | grep 9090
ros2 node list
./rebotarm status
```

Confirme que o rosbridge está escutando em `0.0.0.0:9090` e que o endereço WebSocket começa com `ws://`. Navegadores remotos devem inserir o IP do Ubuntu, não o `localhost` do computador do navegador.

### 3. O console web conecta, mas os sliders não conseguem controlar o robô real

Verifique na seguinte ordem:

1. O console web está no robô real RS `/rebotarm`.
2. O WebSocket do ROS está conectado.
3. O bloqueio de controle web está habilitado.
4. O braço está habilitado.
5. `arm_status` não está em `GRAVITY_COMP`, `TRAJ_RUNNING` ou `SAFE_HOMING`.
6. Não há erros de CAN ou motor no controlador do robô real.

### 4. O modelo web treme ou a sombra do alvo persiste

- Confirme que existe apenas um controlador e um publicador de estado para o mesmo namespace.
- Verifique se `/joint_states` tem múltiplos publicadores.
- Registre `control_target`, `control_reference` e `joint_states` ao mesmo tempo.
- Verifique contadores de erro de CAN e intervalos de chegada de feedback.
- Não execute reprodução de trajetória e arraste manual contínuo ao mesmo tempo.

Uma sombra de alvo de longa duração geralmente significa que o feedback real não atingiu o alvo; isso não é necessariamente um problema de renderização web.

### 5. Sem feedback CAN ou BUS-OFF

```bash
ip -details -statistics link show can0
candump can0
```

Verifique:

- se a taxa de baud é `1 Mbps`;
- se CAN_H/CAN_L estão invertidos;
- resistores de terminação em ambas as extremidades;
- alimentação do motor e terra comum;
- IDs dos motores e configuração do SDK;
- driver USB-CAN e nome da interface.

Pare imediatamente o teste com o robô real se o contador de erros continuar aumentando.

### 6. O braço não desliga imediatamente após clicar em desabilitar

Se o braço não estiver próximo da pose zero, o controlador executa primeiro o homing seguro e o valida. Este é o comportamento esperado. Se o homing falhar, o sistema mantém o braço habilitado para evitar queda a partir de uma pose diferente de zero. Use o botão físico de parada de emergência em uma emergência.

### 7. A compensação de gravidade não inicia ou não consegue controlar

- Confirme que o braço está habilitado.
- Consulte `/gravity_compensation/status`.
- Confirme que nenhuma trajetória ou homing seguro está em execução.
- Outros comandos de movimento são rejeitados durante a compensação de gravidade.
- Suporte qualquer carga que possa cair ao alternar modos.

### 8. A preensão visual não funciona

Confirme que o `rs_sim` completo está em execução no modo `physics`, depois verifique:

```bash
ros2 topic echo /rebotarm_rs/mujoco/overhead_rgb/image_raw --once
ros2 topic echo /rebotarm_rs/vision/color_blocks/detections --once
ros2 topic echo /rebotarm_rs/mujoco/object_states --once
```

Se o botão mostrar que uma tarefa está enfileirada, aguarde a ação serial atual terminar e não inicie várias requisições de preensão repetidamente.

### 9. O assistente LLM não consegue conectar

Confirme que o Text Agent foi iniciado:

```bash
./scripts/start_rs_text_agent.sh
```

Verifique `REBOTARM_TEXT_AGENT_URL` e `REBOTARM_MCP_URL` em `reBotArm_simulator-RS/.env`. O console web verifica o backend por meio de `/api/llm/health`. Não escreva chaves de API no código-fonte web nem as envie para o repositório.

### 10. A página ainda mostra uma versão antiga após modificar o front-end

O console web RS inclui suporte a Service Worker/PWA. Primeiro use `Ctrl+Shift+R` para um hard refresh; se ainda não atualizar, limpe os dados do site ou cancele o registro do Service Worker nas ferramentas de desenvolvedor do navegador e recarregue a página.

### 11. `setup.sh` ou `colcon build` falha

- Confirme que as versões de Ubuntu, ROS 2 e Python correspondem.
- Confirme que o rosdep está inicializado e pode atualizar.
- Execute `./setup.sh --check` para ver os itens ausentes.
- Confirme que `numpy`, `scipy`, `mujoco`, `pinocchio`, `motorbridge` e `fastmcp` podem ser importados em `rebotarm_ros2_RS/.venv`.
- Faça backup dos arquivos do usuário antes de excluí-los ou redefini-los e não resolva problemas de build com comandos destrutivos.

## Tabela rápida de comandos

```bash
# Check and install
./setup.sh --check
./setup.sh --yes
./rebotarm doctor

# Full simulation
./rebotarm start rs_sim
./rebotarm start web

# Natural-language Agent
export DASHSCOPE_API_KEY='your-key'
./scripts/start_rs_text_agent.sh

# RS real robot
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE ./rebotarm start rs

# Status and stop
./rebotarm status
./rebotarm stop
```

## Referências

- Documentação do ROS 2 Jazzy: https://docs.ros.org/en/jazzy/
- rosbridge_suite: https://github.com/RobotWebTools/rosbridge_suite
- Three.js: https://threejs.org/docs/
- URDFLoader: https://github.com/gkjohnson/urdf-loaders
- MuJoCo: https://mujoco.readthedocs.io/
- Model Context Protocol: https://modelcontextprotocol.io/
- Documentação do projeto B601-RS: `README.md`, `USER_MANUAL_ZH.md`, `DEVELOPER_GUIDE_ZH.md`, `DATA_FLOW_RS_ZH.md`
