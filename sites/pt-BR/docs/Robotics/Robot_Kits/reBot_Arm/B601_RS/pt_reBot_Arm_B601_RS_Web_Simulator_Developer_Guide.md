---
description: Configure o console web do B601-RS com os namespaces atuais de hardware e simulação, visualização de preensão no MuJoCo, o DeepSeek Agent padrão e teleoperação Leader do Arm102 com etapas de calibração e recuperação.
title: "Controle Web do reBot-RS: MuJoCo, DeepSeek e Teleoperação Leader"
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
  - DeepSeek
  - Leader Teleoperation
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_web_simulator_en.png
slug: /rebot_arm_b601_rs_web_simulator_developer_guide
last_update:
  date: 2026-11-03
  author: Yang-Ci
translation:
  skip: [zh-CN]
createdAt: '2026-08-13'
updatedAt: '2026-11-03'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_web_simulator_developer_guide/
---
import '/src/css/rebot-wiki-style.css';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm B601-RS Digital Twin & Control Stack

<p align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="reBot Arm B601-RS" />
</p>

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

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="License: Apache 2.0" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Jazzy-blue.svg" alt="ROS 2 Jazzy" />
    <img src="https://img.shields.io/badge/Node.js-18%2B-green.svg" alt="Node.js 18+" />
    <img src="https://img.shields.io/badge/Three.js-r128-orange.svg" alt="Three.js r128" />
    <img src="https://img.shields.io/badge/Version-v1.0.0-brightgreen.svg" alt="Version v1.0.0" />
    <img src="https://img.shields.io/badge/Platform-Cross%20Platform-lightgrey.svg" alt="Platform" />
</p>

<p align="center">
  <strong>Visualização em Three.js · ROS 2 · Simulação MuJoCo · DeepSeek/MCP · Teleoperação Leader</strong>
</p>

O reBot Arm B601-RS Digital Twin & Control Stack integra um console web em Three.js, um driver ROS 2 para o robô real, uma cena de dinâmica MuJoCo específica para RS, detecção por visão, trajetória e cinemática inversa, um Agent em linguagem natural usando DeepSeek por padrão e teleoperação Leader com o Arm102. Este guia acompanha o projeto atual passando por instalação, simulação, controle via web, configuração do Agent e operação líder/seguidor.

O robô real usa `/rebot_arm_rs`; a simulação usa `/rebot_arm_rs_sim`. Usuários de versões antigas devem primeiro executar `git pull --ff-only` no diretório do projeto para atualizar o repositório, depois atualizar scripts personalizados, prefixos de interface ROS e configuração do Agent e reiniciar o controlador, o rosbridge e o console web. Alterar o seletor de alvo na web não configura o namespace do backend.

<GitHubStarButton owner="Yang-Ci" repo="ReBot_Arm_DigitalTwin_RS" />

## Recursos do projeto

1. **Modelo de braço específico para RS**

   O console web e o ROS 2 usam `ReBot_Arm_RS.urdf` e suas malhas STL correspondentes. O servidor web lê primeiro o modelo do workspace `rebotarm_ros2_RS` e mantém uma cópia offline de fallback.

2. **Link do robô real com RobStride + SocketCAN**

   O robô real usa por padrão a interface Linux SocketCAN `can0` a `1 Mbps`. O controlador se comunica com os motores RobStride por meio de `reBotArm_control_py`.

3. **Controle online MIT a 125 Hz**

   O console web atualiza os alvos em até 60 Hz, enquanto o controlador do robô real gera uma referência online limitada por velocidade, aceleração e jerk a 125 Hz e envia comandos MIT `q/dq/kp/kd/tau`. As atualizações de alvo da web não bloqueiam o loop de controle dos motores.

4. **Isolamento de namespaces de robô real e simulação**

   O robô real usa `/rebot_arm_rs` por padrão e a simulação usa `/rebot_arm_rs_sim`. O mesmo console web pode alternar os alvos de controle, e você pode executar o robô real e o Fake Driver ao mesmo tempo para comparar interfaces.

5. **Cena MuJoCo específica para RS**

   O MuJoCo oferece suporte aos modos `physics` e `kinematic`. O modo padrão `physics` inclui gravidade, contato, objetos sobre a mesa, uma câmera superior, detecção de cores e validação física de preensão.

6. **Animação web guiada por feedback**

   No modo de robô real, o modelo sólido mostra o feedback real e o modelo translúcido mostra o alvo de controle. O console web aplica filtragem passa-baixa adaptativa, zona morta de feedback e interpolação de exibição às medições do rosbridge para que a animação local não seja confundida com a pose real do braço.

7. **Máquina de estados de segurança**

   O sistema arbitra trajetórias, compensação de gravidade, homing seguro e comandos contínuos da web. Desabilitar a partir de uma pose diferente de zero executa primeiro o homing seguro e o verifica; se a verificação falhar, o braço permanece habilitado para evitar queda repentina.

8. **Preensão visual e Agent LLM/MCP**

   A cena de simulação fornece objetos vermelhos, azuis e amarelos com detecção superior, IK, preensão, validação de elevação e suporte a posicionamento. O ponto de entrada em linguagem natural usa por padrão o DeepSeek `deepseek-flash`; ferramentas MCP também podem ser chamadas de forma independente.

9. **Teleoperação Leader com Arm102**

   O leader se conecta à USB/UART no host ROS. O console web cuida de varredura, pré-visualização, desbloqueio, calibração e sessões; o controlador ROS cuida de mapeamento, limites de velocidade, propriedade do controle e retenções por timeout. O seguimento relativo é o padrão, com opção de seguimento do gripper e redefinição de base após uma pausa.

## Observações sobre cabeamento e rede

### Cabeamento CAN do robô real RS

1. Prenda o braço e libere sua área de movimento.
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

Você pode usar `localhost` quando o console web e o ROS 2 estiverem em execução na mesma máquina. Ao acessar de outro computador na LAN, não digite o `localhost` do próprio computador do navegador; use o IP do host Ubuntu que está executando os serviços ROS 2.

O script de inicialização do projeto define o alcance de descoberta do ROS 2 como `LOCALHOST` por padrão, para que roaming de Wi-Fi ou mudanças de IP não dividam nós da mesma máquina em redes DDS diferentes. Isso não afeta o acesso às portas HTTP/WebSocket a partir de outros dispositivos. Para permitir que outro computador entre diretamente no grafo ROS, defina o mesmo valor nos terminais relevantes:

```bash
export REBOTARM_ROS_DISCOVERY_RANGE=SUBNET
```

## Requisitos de ambiente

| Item | Requisito recomendado |
| --- | --- |
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

<div className="rebot-step-flow">
<section className="rebot-step-item">
    <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

      #### Etapa 1: Obter o projeto

      <p className="rebot-step-label">Etapa 1</p>

```bash
git clone https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS.git ~/ReBot_Arm_DigitalTwin_RS
cd ~/ReBot_Arm_DigitalTwin_RS
```

Os comandos abaixo usam `~/ReBot_Arm_DigitalTwin_RS` como diretório do projeto. Se o seu diretório for diferente, substitua os caminhos de acordo.

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

      #### Etapa 2: Verificação de ambiente somente leitura

      <p className="rebot-step-label">Etapa 2</p>

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
./setup.sh --check
```

Este comando apenas verifica o sistema e não modifica o ambiente. As verificações incluem:

- Versões de Ubuntu, Python e Node.js;
- ROS 2, rosbridge, MoveIt e ferramentas de build;
- Ferramentas SocketCAN e `can0`;
- O ambiente virtual Python e módulos principais;
- Resultados de build do workspace ROS 2;
- O `package.json` e o `.env` da web.

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

      #### Etapa 3: Instalação e build em um clique

      <p className="rebot-step-label">Etapa 3</p>

```bash
./setup.sh --yes
./rebotarm doctor
```

O script de instalação instala dependências ausentes de ROS 2, Node.js, SocketCAN e build, cria `rebotarm_ros2_RS/.venv`, instala as dependências Python para o robô real RS, MuJoCo e Agent, executa o rosdep e faz o build do workspace ROS 2 com:

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

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

      #### Etapa 4: Configurar variáveis de ambiente da web

      <p className="rebot-step-label">Etapa 4</p>

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

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">5</span>
<div className="rebot-step-content">

      #### Etapa 5 (Opcional): Configurar e iniciar o DeepSeek Agent padrão

      <p className="rebot-step-label">Etapa 5 (Opcional)</p>

Para usar o assistente de linguagem natural na web, siga “Launching the Project” abaixo para iniciar a simulação completa no terminal 1 (`./rebotarm start rs_sim`) e o console web no terminal 2 (`./rebotarm start web`). Em seguida, configure a chave de API e inicie o Agent em um terceiro terminal:

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
export DEEPSEEK_API_KEY='your-key'
./scripts/start_rs_text_agent.sh
```

O modelo padrão é DeepSeek `deepseek-flash`; não é necessário substituir o modelo. Se você tiver configurado outro modelo anteriormente, verifique as antigas variáveis de ambiente `REBOTARM_LLM_*` para que elas não substituam os padrões. Configure a chave de API apenas no servidor e mantenha-a fora do repositório.

Depois que `[text-agent-http] listening on http://0.0.0.0:8082/` aparecer, clique em “Connect AI assistant” no console web e envie “Query the arm status” para verificar a conexão. Consulte “DeepSeek / MCP Text Control” abaixo para troca de modelo, verificações de integridade e solução de problemas.

</div>
</section>
</div>

## Iniciando o Projeto

<Tabs defaultValue="sim" groupId="launch-mode" queryString>

<TabItem value="web" label="Demonstração somente web">

Inicie apenas o servidor web Node.js, sem rosbridge ou ROS 2:

```bash
cd ~/ReBot_Arm_DigitalTwin_RS/reBotArm_simulator-RS
npm start
```

Abra o navegador em:

```text
http://localhost:3002
```

Este modo é adequado para desenvolver o modelo 3D, UI, predefinições de pose e recursos de front-end. Sem o backend ROS 2, o console web não pode controlar o robô real nem a cena completa do MuJoCo.

<!-- Image: rebot_rs_web_simulator_en.png -->

![Interface do simulador web reBot Arm B601-RS](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_web_simulator_en.png)
</TabItem>

<TabItem value="sim" label="Simulação completa RS MuJoCo">

O Terminal 1 inicia Fake Driver, MuJoCo, câmera, detecção, MCP Agent e rosbridge:

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
./rebotarm start rs_sim
```

O Terminal 2 inicia o console web:

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
./rebotarm start web
```

Abra `http://localhost:3002`, selecione o alvo de controle "RS Simulation (`/rebot_arm_rs_sim`)" e insira `ws://localhost:9090` como o WebSocket ROS.

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

<TabItem value="real" label="Controle do robô RS real">

Primeiro configure e verifique o SocketCAN:

```bash
sudo ip link set can0 down 2>/dev/null || true
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details -statistics link show can0
```

Depois de confirmar que o botão de parada de emergência funciona e que a área de trabalho está livre, inicie o controlador do robô real no terminal 1:

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE \
  ./rebotarm start rs
```

Inicie o console web e o rosbridge no terminal 2:

```bash
./rebotarm start web
```

Abra `http://localhost:3002` e selecione "RS Real Robot (`/rebot_arm_rs`)". Para o primeiro teste, siga esta ordem:

1. Verifique se o console web indica conectado, se o status do braço está normal e se não há erros de motor.
2. Clique em enable.
3. Defina a velocidade para `0.2-0.4 rad/s`.
4. Movimente uma junta de cada vez por uma pequena quantidade e confirme direção, limites e retorno.
5. Em seguida, teste arraste TCP, trajetórias ou compensação de gravidade.
6. Ao terminar, faça o homing seguro e desabilite, depois pressione `Ctrl+C` no terminal do controlador.

Não use `Ctrl+Z` para pausar o controlador do robô real e não trate um botão da web como um botão físico de parada de emergência. Se uma instância antiga do controlador ficar em execução, o script de inicialização do robô real solicita que a instância antiga saia com segurança e limpa os recursos residuais confirmados como pertencentes a esse controlador.

<!-- Image: rebot_rs_real_robot_web_en.png -->

![Controle web do robô real reBot Arm B601-RS](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_web_rs/rebot_rs_real_robot_web_en.png)
</TabItem>

<TabItem value="dual" label="Depuração dupla real/Fake">

```bash
export REBOTARM_RS_HARDWARE_CONFIRM=I_UNDERSTAND_RS_WILL_MOVE
./scripts/start_rs_dual.sh
```

Este script inicia:

- o robô real `/rebot_arm_rs`;
- o Fake Driver `/rebot_arm_rs_sim`;
- rosbridge `9090`.

Ele é usado para comparar interfaces, direções das juntas e status. Ele não inicia a pilha completa do MuJoCo, visão, Agent ou servidor web. Confirme novamente o namespace selecionado no console web antes de enviar comandos.

</TabItem>

</Tabs>

## Teleoperação Leader

### Conexão e Instalação

O Leader Arm102 / 102-LD se conecta por serial USB ao **host Ubuntu executando ROS 2**. Se o ROS estiver em uma VM, passe o dispositivo USB do leader para essa VM. Uma porta COM no computador do navegador não pode substituir uma porta serial no host ROS.

```text
Arm102 Leader (servo IDs 0–6, UART 1 Mbps)
  -> ROS host USB serial / leader_worker.py
  -> LeaderTeleop: calibration, mapping, sessions, and status
  -> RS controller: control ownership, speed limits, and timeout holds
  -> Fake Driver / MuJoCo, or SocketCAN can0 / RS follower
```

Conclua primeiro a instalação básica. Pare o controlador antigo, a simulação e o rosbridge, depois instale as dependências do Leader e reconstrua as interfaces:

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
bash scripts/setup_rs_leader.sh
```

O script reutiliza o ambiente virtual Python do ROS, instala `motorbridge-smart-servo==0.0.4` e `pyserial==3.5`, e recompila `rebotarm_msgs` e `rebotarmcontroller`. O ambiente completo de treinamento LeRobot não é necessário para este recurso. Reinicie o controlador, o rosbridge e o console web e, em seguida, faça um hard refresh no navegador.

Verifique em um novo terminal:

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
source scripts/rs_env.sh
python -c 'from motorbridge_smart_servo import FashionStarServo; from serial.tools import list_ports; print([(p.device, p.description) for p in list_ports.comports()])'
ros2 interface show rebotarm_msgs/srv/LeaderControl
```

Use `/dev/ttyUSB0`, `/dev/ttyACM0` ou um caminho estável `/dev/serial/by-id/...`. Para um erro de permissões, execute o seguinte comando e faça login novamente antes de tentar novamente:

```bash
sudo usermod -aG dialout "$USER"
```

### Verificar o fluxo de trabalho em simulação

Execute em dois terminais separados:

```bash
# Terminal 1
./rebotarm start rs_sim
```

```bash
# Terminal 2
./rebotarm start web
```

Selecione o modo de controle ROS e “RS simulation (`/rebot_arm_rs_sim`)”, depois conecte ao rosbridge. No card “Leader teleoperation”, limpe qualquer porta antiga, clique em “Scan leader” e selecione `mock`; você também pode inserir `mock` diretamente no campo de porta. Siga as etapas de conexão, desbloqueio, calibração e acompanhamento abaixo e, em seguida, teste pausar, retomar e parar.

Apenas o Fake Driver permite `mock`; o hardware RS real o rejeita. O modo mock verifica a UI, o mapeamento e o fluxo de trabalho da sessão. Ele não valida o link serial real, as direções das juntas ou a segurança do hardware.

### Conectar, Calibrar e Iniciar o Acompanhamento

Para testes de hardware, inicie `/rebot_arm_rs` e o console web usando as instruções do robô real. Habilite o seguidor, confirme que ele está em `IDLE` e habilite o bloqueio de controle ROS. Pare trajetórias, acompanhamento de mão e compensação de gravidade; retorne a garra para manutenção de posição. Não execute um processo separado de teleoperação LeRobot acessando o mesmo `can0`.

1. **Escanear e conectar.** Escaneie as portas seriais no host ROS no card “Leader teleoperation”. Um leader completo responde com todos os sete IDs de servo `0–6`. Selecione o dispositivo e clique em “Connect”, ou insira manualmente seu caminho serial.
2. **Verificar a pré-visualização somente leitura.** O modelo Arm102 / 102-LD, sete ângulos, taxa de amostragem e atraso aparecem enquanto o seguidor mantém sua pose atual. Arraste para girar; use a roda ou um gesto de dois dedos para aplicar zoom. “Reset view” altera apenas a visualização exibida.
3. **Desbloquear e calibrar o zero do leader.** Apoie o leader, clique em “Unlock leader”, coloque-o na [pose de calibração do Arm102](/pt-br/rebot_arm_b601_rs_lerobot/) e feche sua garra. Marque “Leader is at reference zero with gripper closed” e clique em “Confirm and set leader zero”. Movimente cada eixo levemente e verifique as direções J1–J6 e a abertura do anel de dedo J7 em relação à pré-visualização.
4. **Definir parâmetros iniciais.** Defina a velocidade alvo para `0.1 rad/s`, limpe “Follow gripper” e deixe “Absolute follow” desmarcado. A faixa de velocidade atual do hardware Leader é `0.05–1.0 rad/s`, independente da configuração de velocidade de junta comum da web.
5. **Iniciar acompanhamento relativo.** Clique em “Start following”. O modo relativo estabelece deslocamentos a partir das poses iniciais dos dois braços; o seguidor não deve saltar para a pose absoluta do leader no primeiro frame. Comece com pequenos movimentos de J6 e, em seguida, verifique individualmente direções, retorno e limites de J1–J5.
6. **Testar pausar e retomar.** Movimente o leader após clicar em “Pause and hold”; o seguidor deve manter a posição. No modo relativo, “Resume” redefine a base dos braços em suas poses atuais em vez de alcançar os movimentos feitos durante a pausa.
7. **Liberar o controle antes de testar a garra.** Clique em “Stop and release control” e confirme que os sliders comuns voltam a funcionar. Depois de validar todos os seis eixos, inicie outra sessão com acompanhamento da garra habilitado e verifique sua direção de abertura e pontos finais com pequenos movimentos.

:::warning Calibração do líder e zero do seguidor

“Confirm and set leader zero” calibra o Arm102 Leader. O serviço RS `set_zero` reescreve os pontos de zero dos motores do seguidor. Não use o zeramento do seguidor para corrigir a pré-visualização do líder ou o desvio de acompanhamento. O acompanhamento absoluto exige que os braços sejam alinhados primeiro; o controlador rejeita diferenças de pose excessivas. Mantenha o modo relativo padrão para uso inicial.

:::

### Pausa, parada e recuperação de conexão

- **Pausar e manter:** o seguidor mantém sua pose atual enquanto a sessão retém o controle. O modo relativo é redefinido quando retomado.
- **Parar e liberar o controle:** o acompanhamento termina e o seguidor mantém sua pose atual. Deslizantes, trajetórias, compensação de gravidade, retorno seguro à posição inicial e desativação ficam disponíveis após a liberação. Nem a pausa nem a parada removem diretamente o torque do motor.
- **Amostras obsoletas, remoção do USB do líder ou tempo limite do heartbeat do navegador:** o controlador para de avançar os alvos e mantém a posição; a interface relata uma falha ou dados obsoletos. A reconexão não retoma o acompanhamento automaticamente. Verifique a conexão, recalibre e inicie novamente explicitamente.
- **Outra página possui a sessão:** pare e libere o controle na página original. Se ela foi fechada inesperadamente, aguarde o tempo limite do heartbeat para liberar a sessão.

A aceitação inicial de hardware deve incluir remoção do USB, desconexão do navegador, movimento do líder enquanto em pausa e recuperação dos deslizantes após a parada. O projeto inclui testes de simulação e de política de controle; o link de hardware real Leader → RS ainda requer aceitação em campo.

### Taxa de acompanhamento e limites de velocidade

A amostragem UART do líder tem como alvo `60 Hz`; a taxa real depende do tempo de leitura serial. Cada nova amostra válida atualiza o alvo. O loop MIT de hardware segue o alvo mais recente a `125 Hz` com limites de velocidade e feedforward de gravidade em cache, sem adicionar o amortecimento de segunda ordem ou filtro de jerk do alvo web comum. O seguidor ainda pode ficar atrasado quando o líder se move mais rápido que o limite de velocidade selecionado.

O acompanhamento do líder usa ganhos `leader_mit_kp` / `leader_mit_kd` separados e `v_des=0` para os seis eixos. Pausar ou parar restaura os ganhos de manutenção comuns. A velocidade de referência do gripper é `min(6 × teleoperation speed, leader_gripper_velocity_limit)`, atualmente limitada a `3 rad/s` pela configuração. Limites de junta, tempos limite de feedback e o watchdog da sessão permanecem ativos. Veja “Parâmetros de controle principais” abaixo para a localização da configuração.

### Inspecionar o status do líder

```bash
source scripts/rs_env.sh
ros2 topic echo /rebot_arm_rs/leader/status --once
```

Para simulação, use `/rebot_arm_rs_sim/leader/status`. Verifique `state`, `calibrated`, `following`, `paused`, `sample_hz`, `sample_age` e `angles_deg`. Os ângulos exibidos do líder estão em graus; `targets_rad` contém os seis alvos das juntas do seguidor em radianos.

## Linha de comando unificada

| Command | Description |
| --- | --- |
| `./rebotarm doctor` | Verificação de ambiente somente leitura, equivalente a `./setup.sh --check` |
| `./rebotarm start web` | Inicia ou reutiliza o rosbridge e inicia o servidor web |
| `./rebotarm start rs_sim` | Inicia toda a pilha de simulação RS MuJoCo |
| `./rebotarm start rs` | Inicia o controlador RS do robô real; a variável de confirmação de hardware é obrigatória |
| `./rebotarm status` | Visualiza processos registrados, portas e `can0` |
| `./rebotarm stop` | Encerra os processos filhos web/rosbridge registrados por `start web` |

Processos de simulação e de robô real em execução em primeiro plano devem ser encerrados normalmente com `Ctrl+C` em seus próprios terminais.

## Arquitetura do projeto

```text
ReBot_Arm_DigitalTwin_RS/
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

O modelo translúcido representa o alvo de controle. A sombra do alvo desaparece automaticamente quando os erros das juntas e do gripper são pequenos o suficiente. O filtro de exibição afeta apenas a imagem na web e não altera os alvos enviados aos motores.

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

## Notas sobre controle via web

### Alvo de controle e namespace

| Mode | Namespace | Web model source |
| --- | --- | --- |
| RS real robot | `/rebot_arm_rs` | Feedback real do robô `/joint_states` |
| RS simulation | `/rebot_arm_rs_sim` | Usa primeiro o estado real do MuJoCo |

Após alternar modos, o console web recria o cliente rosbridge e os caminhos de interface de acordo com o namespace de destino. A simulação espelha o estado real do MuJoCo por padrão; o modo de hardware mostra o feedback medido e um modelo alvo translúcido.

Use estes comandos somente leitura para verificar os alvos disponíveis:

```bash
source scripts/rs_env.sh
ros2 topic list | grep /rebot_arm_rs
ros2 service list | grep /rebot_arm_rs
```

Verifique o prefixo completo: `/rebot_arm_rs` é hardware e `/rebot_arm_rs_sim` é simulação. A presença de `rs` sozinha não identifica o alvo.

### Juntas e gripper

- J1-J6 são controladas em radianos, com limites consistentes com o URDF do RS.
- O limite de velocidade das juntas na web para o robô real varia de `0.05–1.50 rad/s`; comece em `0.2–0.4 rad/s`. Este painel fica oculto na simulação. A teleoperação do líder tem uma configuração de velocidade separada; comece em `0.1 rad/s`.
- J1-J6 usam amortecimento de deslizante de `30 ms` e uma zona morta de entrada de `1 deg` por padrão; a posição final é confirmada de forma forçada quando você solta o deslizante.
- J7/o gripper é exibido como largura de abertura na web, com faixa de `0-71.5 mm`.
- O gripper é convertido para a faixa de motor RS `0-5 rad` ao publicar, e o feedback ROS é convertido de volta para milímetros.
- J7 não passa pelo amortecimento em radianos ou zona morta de entrada de J1-J6; apenas o alvo mais recente é enviado por quadro de renderização do navegador.

### Arraste do TCP e IK

O console web usa mínimos quadrados amortecidos (DLS) para resolver alvos de TCP. A versão RS adapta o amortecimento de acordo com o nível de singularidade e então envia a solução de juntas pela mesma cadeia de controle online MIT.

A cena Three.js da web usa Y para cima e o ROS usa Z para cima. A lógica de conversão de coordenadas está em `rebot-sim.js`; ao estender recursos de pose, reutilize a conversão existente em vez de trocar valores de formulário diretamente.

A entrada de pose usa metros: X é para frente, Y é para a esquerda e Z é para cima. Se um alvo for inalcançável, primeiro aumente Z ou reduza a distância horizontal, depois verifique as restrições de orientação e os limites das juntas.

### Ensino e reprodução de trajetórias

O console web pode gravar trajetórias de juntas e chamar:

```text
/<namespace>/follow_joint_trajectory
```

O servidor de ações RS do robô real usa referências contínuas de posição/velocidade cúbicas de Hermite monótonas e estende automaticamente segmentos de trajetória que são muito curtos, mantendo as velocidades de trajetória comuns do robô real abaixo de cerca de `0.60 rad/s`. Os chamadores devem aguardar o resultado da ação ou o feedback do robô real e não devem finalizar a animação de reprodução antecipadamente de acordo com a duração original da requisição.

### Enable, Safe Homing e Disable

- O controlador do robô real precisa ser habilitado após cada inicialização.
- `safe_home` retorna suavemente para zero e valida o ângulo e a velocidade.
- Clicar em disable a partir de uma pose diferente de zero entra primeiro em `SAFE_HOMING`.
- Se a validação de homing falhar, os motores permanecem habilitados e um resultado de falha é retornado.
- `set_zero` reescreve o ponto zero do motor e não é um botão de homing comum. Chame-o apenas quando a estrutura mecânica estiver realmente na pose calibrada.

### Compensação de Gravidade

A compensação de gravidade RS começa a partir da pose medida e faz a transição suave dos ganhos. Inícios repetidos são idempotentes; ao parar, mantém a última posição medida. O gripper fica, por padrão, em assistência de movimento de baixa resistência e volta para manutenção de posição quando a compensação é interrompida. Remova objetos segurados e mantenha os dedos afastados antes de iniciar; pare a compensação antes de trajetórias, agarrar ou seguir o Leader.

Comandos web de junta, TCP, trajetória e gripper são rejeitados durante a compensação de gravidade. Serviços relacionados:

```text
/<namespace>/gravity_compensation/start
/<namespace>/gravity_compensation/stop
/<namespace>/gravity_compensation/status
```

## Interfaces ROS 2

Os exemplos abaixo usam o robô real `/rebot_arm_rs`. Para simulação, substitua o prefixo por `/rebot_arm_rs_sim`.

### Tópicos de Status

| Tópico | Tipo | Descrição |
| --- | --- | --- |
| `/rebot_arm_rs/joint_states` | `sensor_msgs/msg/JointState` | Status unificado dos seis eixos e do gripper |
| `/rebot_arm_rs/joints/<name>/state` | `rebotarm_msgs/msg/JointMotorState` | Posição, velocidade, torque e código de status de um único motor |
| `/rebot_arm_rs/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | Status bruto do motor do gripper |
| `/rebot_arm_rs/control_target` | `sensor_msgs/msg/JointState` | Alvo final do console web ou da camada de ação |
| `/rebot_arm_rs/control_reference` | `sensor_msgs/msg/JointState` | Amostra ROS da referência de trajetória online de 125 Hz; `effort` carrega a aceleração de referência |
| `/rebot_arm_rs/arm_status` | `rebotarm_msgs/msg/ArmStatus` | Estado de enable, modo, máquina de estados e códigos de erro |
| `/rebot_arm_rs/leader/status` | `rebotarm_msgs/msg/LeaderStatus` | Conexão, calibração, sessão, ângulos e status de amostra do Leader |

### Tópicos de Comando de Baixo Nível

| Tópico | Tipo | Descrição |
| --- | --- | --- |
| `/rebot_arm_rs/joints/<joint1..joint6>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando de junta padrão do console web para o robô real |
| `/rebot_arm_rs/joints/<joint1..joint6>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando de posição e velocidade |
| `/rebot_arm_rs/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando MIT do gripper RS |
| `/rebot_arm_rs/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando de posição e velocidade do gripper |
| `/rebot_arm_rs/mujoco/target_pose` | `geometry_msgs/msg/PoseStamped` | Pose alvo do TCP |

Antes de publicar comandos de baixo nível por conta própria, verifique `arm_status.state_machine`. Não faça preempção de controle durante `GRAVITY_COMP`, `SAFE_HOMING`, execução de trajetória ou uma sessão ativa do Leader.

### Serviços

| Serviço | Tipo | Descrição |
| --- | --- | --- |
| `/rebot_arm_rs/leader/control` | `rebotarm_msgs/srv/LeaderControl` | Fazer varredura, conectar, desbloquear, calibrar, seguir e gerenciar sessões |
| `/rebot_arm_rs/enable` | `std_srvs/srv/Trigger` | Habilitar o braço |
| `/rebot_arm_rs/disable` | `std_srvs/srv/Trigger` | Desabilitar com segurança; faz homing primeiro quando necessário |
| `/rebot_arm_rs/safe_home` | `std_srvs/srv/Trigger` | Homing seguro com validação |
| `/rebot_arm_rs/set_zero` | `rebotarm_msgs/srv/SetZero` | Gravar o ponto zero do motor; use com cautela |
| `/rebot_arm_rs/gravity_compensation/start` | `std_srvs/srv/Trigger` | Iniciar compensação de gravidade |
| `/rebot_arm_rs/gravity_compensation/stop` | `std_srvs/srv/Trigger` | Parar compensação de gravidade |
| `/rebot_arm_rs/gravity_compensation/status` | `std_srvs/srv/Trigger` | Consultar o status da compensação de gravidade |
| `/rebot_arm_rs/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | Resolução de IK de pose |
| `/rebot_arm_rs/gripper/set` | `rebotarm_msgs/srv/SetGripper` | Controle de posição do gripper |
| `/rebot_arm_rs/gripper/open` | `rebotarm_msgs/srv/GripperCommand` | Abrir o gripper |
| `/rebot_arm_rs/gripper/close` | `rebotarm_msgs/srv/GripperCommand` | Fechar o gripper |

Exemplo:

```bash
source scripts/rs_env.sh
ros2 service call /rebot_arm_rs/gravity_compensation/status std_srvs/srv/Trigger '{}'
ros2 service call /rebot_arm_rs/safe_home std_srvs/srv/Trigger '{}'
```

### Actions

| Action | Tipo | Descrição |
| --- | --- | --- |
| `/rebot_arm_rs/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | Trajetória de juntas |
| `/rebot_arm_rs/gripper/command` | `control_msgs/action/GripperCommand` | Ação do gripper |
| `/rebot_arm_rs/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | Movimento de pose cartesiana |

### Interfaces MuJoCo e de Visão

| Interface | Tipo/Uso |
| --- | --- |
| `/rebot_arm_rs_sim/mujoco/joint_states` | Estados reais de junta do MuJoCo |
| `/rebot_arm_rs_sim/mujoco/object_states` | Estados de objetos da cena em JSON |
| `/rebot_arm_rs_sim/mujoco/overhead_rgb/image_raw` | Câmera RGB superior |
| `/rebot_arm_rs_sim/vision/color_blocks/detections` | Detecção de objetos por cor em JSON |
| `/rebot_arm_rs_sim/mujoco/reset` | Reiniciar a simulação |
| `/rebot_arm_rs_sim/mujoco/record/start` | Iniciar gravação |
| `/rebot_arm_rs_sim/mujoco/record/stop` | Parar gravação |
| `/rebot_arm_rs_sim/mujoco/record/replay` | Reproduzir uma gravação |
| `/rebot_arm_rs_sim/mujoco/record/clear` | Limpar gravações |

## Agarrar com Visão

A simulação completa inclui, por padrão, um cubo vermelho, um paralelepípedo azul e um cilindro amarelo. O console web pode selecionar uma cor alvo ou escolher automaticamente e, em seguida, executar alinhamento, pré-agarre, descida, fechamento, elevação e posicionamento.

O sucesso do agarre não se resume apenas à conclusão da trajetória. O sistema também verifica se o objeto MuJoCo foi realmente levantado, evitando um relatório de sucesso falso quando o gripper fecha vazio ou quando a trajetória é concluída sem pegar o objeto.

Solucionar problemas de agarre com visão:

```bash
source scripts/rs_env.sh
ros2 topic echo /rebot_arm_rs_sim/vision/color_blocks/detections --once
ros2 topic echo /rebot_arm_rs_sim/mujoco/object_states --once
ros2 service list | grep /rebot_arm_rs_sim/
```

Se o gripper fecha mas não levanta o objeto:

- confirme que o modo `physics` está sendo usado;
- verifique se a câmera e a detecção de cor estão publicando continuamente;
- verifique a largura, orientação e altura de agarre do alvo;
- revise, nos logs, a estabilidade de contato e os resultados de validação da elevação física;
- evite iniciar múltiplos pedidos de agarre ou IK ao mesmo tempo.

## Controle por Texto com DeepSeek / MCP

### Funções dos Três Serviços

```text
Web rebot-llm.js
  -> Node.js /api/llm/chat
  -> Text Agent (:8082, default DeepSeek deepseek-flash)
  -> MCP Server (:8081/mcp, bound to a target namespace)
  -> ROS 2 service/action/topic
```

O servidor web, o MCP Server e o Text Agent são processos separados. O `rs_sim` completo inicia o MCP Server por padrão. “Connect AI assistant” apenas verifica e conecta ao Text Agent; ele não pode iniciar o serviço Python no Ubuntu. Clientes MCP podem chamar as ferramentas diretamente sem um LLM.

### Iniciar o Agente DeepSeek Padrão

Inicie a simulação completa e o console web e, em seguida, execute em um terceiro terminal:

```bash
cd ~/ReBot_Arm_DigitalTwin_RS
export DEEPSEEK_API_KEY='your-key'
./scripts/start_rs_text_agent.sh
```

Padrões atuais da origem:

| Configuração | Padrão / uso |
|---|---|
| Endpoint do LLM | `https://api.deepseek.com` |
| Modelo | `deepseek-flash` |
| Chave DeepSeek | `DEEPSEEK_API_KEY` |
| Endpoint de ferramentas MCP | `http://127.0.0.1:8081/mcp` |
| Text Agent / Dashboard | `http://localhost:8082` |
| Namespace alvo padrão | `/rebot_arm_rs_sim` |

Valores `REBOTARM_LLM_BASE_URL`, `REBOTARM_LLM_MODEL` ou `REBOTARM_LLM_API_KEY` exportados anteriormente substituem os padrões. Limpe valores antigos ou defina explicitamente a configuração desejada antes de usar o DeepSeek padrão. Mantenha chaves reais em variáveis de ambiente do lado do servidor ou em configuração local não versionada.

Depois que `[text-agent-http] listening on http://0.0.0.0:8082/` aparecer, verifique:

```bash
curl http://127.0.0.1:8082/health
```

Resposta esperada:

```json
{"ok": true, "service": "rebotarm-text-agent"}
```

Isso confirma a alcançabilidade via HTTP. Clique em “Connect AI assistant” e envie uma consulta somente leitura para verificar a autenticação do modelo e o link MCP. Em seguida, tente comandos de movimento na simulação:

```text
Query the arm status
Detect the colored blocks on the table
Open the gripper
Move to X=0.30 Y=0 Z=0.30
Grasp the red block
Return safely to zero
```

O MCP `pick_color` mantém o objeto após um agarre bem-sucedido. O botão web “Grasp into storage” executa um fluxo de trabalho separado com comportamento de posicionamento diferente.

### Alterar o Modelo ou o Endereço do Backend

Para usar outro serviço compatível com OpenAI, defina todos os três valores no terminal do Text Agent e reinicie-o:

```bash
export REBOTARM_LLM_BASE_URL='https://<provider-host>/v1'
export REBOTARM_LLM_MODEL='<model-id>'
export REBOTARM_LLM_API_KEY='<api-key>'
./scripts/start_rs_text_agent.sh
```

Substitua os placeholders por valores do seu provedor. `REBOTARM_MCP_URL` seleciona o endpoint MCP usado pelo Text Agent.

Se o servidor web e o Agent estiverem em máquinas diferentes, atualize `REBOTARM_TEXT_AGENT_URL` e `REBOTARM_MCP_URL` em `reBotArm_simulator-RS/.env` para os endereços de backend e reinicie o servidor web. Se apenas o navegador for remoto e os três serviços permanecerem no mesmo host Ubuntu, mantenha os endereços de proxy locais.

### Verificar o Namespace do MCP e as Permissões de Movimento

O script de simulação inicia o MCP com `arm_namespace:=rebot_arm_rs_sim motion_mode:=allow`. Um MCP Server iniciado manualmente usa, por padrão, `motion_mode:=locked`. Alternar o alvo no web não reinicia o MCP nem altera seu namespace. Quando um script de inicialização reutiliza um serviço existente em `8081`, verifique também o alvo desse serviço.

Para inspeção com robô real, pare o serviço MCP anterior e inicie-o separadamente com movimento bloqueado:

```bash
source scripts/rs_env.sh
ros2 launch rebotarm_agent rebotarm_mcp.launch.py \
  arm_namespace:=rebot_arm_rs motion_mode:=locked
```

O Agente de Texto seleciona seu serviço de ferramentas pelo URL MCP; o namespace de destino real vem dos argumentos de inicialização desse serviço MCP. Reinicie o Agente de Texto apontando para o serviço recém-iniciado:

```bash
REBOTARM_MCP_URL=http://127.0.0.1:8081/mcp ./scripts/start_rs_text_agent.sh
```

Primeiro verifique o status somente leitura e, em seguida, siga o fluxo de trabalho de permissão de movimento do backend. O controle em linguagem natural não pode contornar a máquina de estados de segurança. Pare e libere uma sessão Leader ativa antes de chamar as ferramentas de movimento do Agent.

## Parâmetros-chave de Controle

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
  leader_mit_kp: [50, 50, 50, 30, 50, 50]
  leader_mit_kd: [3, 5, 5, 3, 4, 4]
  leader_gripper_velocity_limit: 3.0
  stream_acceleration_limit: 4.0
  stream_jerk_limit: 30.0
  stream_natural_frequency: 8.0
gravity_compensation:
  kp: 1.5
  kd: 1.0
```

Outras frequências padrão:

| Camada | Frequência padrão | Descrição |
| --- | ---: | --- |
| Alvo de junta na web | Até 60 Hz | Sliders e IK de TCP atualizam continuamente o alvo |
| Consulta de sincronização de feedback do robô real | 20 Hz | Atualiza o cache de medições do RobStride |
| Estado do robô real no ROS | 60 Hz | Publica feedback, alvo e referência a partir do cache |
| Controle RS MIT | 125 Hz | Suavização online e comandos de motor |
| Fake Driver | 100 Hz | Controle e estado da simulação |
| MuJoCo Sync | 250 Hz | Sincronização de dinâmica padrão |
| Estado de objeto MuJoCo | 30 Hz | Cena e Agent |
| Câmera aérea | 8 Hz | Imagem RGB |
| Detecção de cor | 10 Hz | Resultados de detecção |

Antes de ajustar ganhos, registre todos os itens a seguir ao mesmo tempo:

```text
/rebot_arm_rs/control_target
/rebot_arm_rs/control_reference
/rebot_arm_rs/joint_states
```

Se o alvo for descontínuo, verifique a camada de entrada web; se a referência for descontínua, verifique a trajetória online; se a referência for contínua, mas o feedback ultrapassar o alvo, verifique ganhos MIT, carga, atrito, corrente e aumento de temperatura; verifique apenas filtragem de feedback e intervalos de chegada do rosbridge quando somente a animação web estiver tremendo.

## Guia de Desenvolvimento Secundário

### Modificar Limites de Junta ou Poses Predefinidas na Web

Arquivo:

```text
reBotArm_simulator-RS/public/js/rebot-sim.js
```

As definições de juntas estão em `jointDefs` e as predefinições em `presets`. Ao modificar limites de juntas, verifique em conjunto o URDF do RS, a configuração do SDK e os limites mecânicos reais; não altere apenas a faixa de exibição na web.

### Modificar Frequência, Filtragem e Amortecimento de Comandos Web

Arquivo:

```text
reBotArm_simulator-RS/public/js/ros/rebot-ros-ui.js
```

Este arquivo lida com limitação de taxa de comandos web, filtragem de feedback do robô real, zona morta de feedback, interpolação, sombra do alvo, travas de controle e lógica de visão. Não compense a latência da animação web aumentando os ganhos MIT do robô real.

### Adicionar Interfaces ROS Personalizadas

O wrapper do cliente está localizado em:

```text
reBotArm_simulator-RS/public/js/ros/rebot-ros-client.js
```

Adicione caminhos de Topic, Service ou Action na camada de UI e chame `subscribe()`, `callService()` ou `sendActionGoal()` do cliente. As interfaces devem sempre ser geradas a partir do `namespace` atual para evitar enviar comandos de simulação para o robô real.

### Modificar o URDF ou Mesh do RS

Modelos principais ROS 2:

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

### Modificar MuJoCo

| Arquivo/diretório | Função |
| --- | --- |
| `rebotarm_ros2_RS/src/rebotarm_mujoco_rs/models/` | MJCF e STL do RS |
| `rebotarm_mujoco_rs/mujoco_sync.py` | Frequência de sincronização, dinâmica e PD |
| `rebotarm_mujoco_rs/scene_camera.py` | Câmera aérea |
| `rebotarm_mujoco_rs/scene_detector.py` | Detecção de cor |
| `rebotarm_mujoco_rs/task_server.py` | Tarefas, gravação e reprodução |
| `rebotarm_mujoco_rs/launch/mujoco_rs.launch.py` | Parâmetros de inicialização |

### Modificar Mapeamento e Controle do Leader

| Arquivo | Finalidade |
|---|---|
| `reBotArm_simulator-RS/public/js/ros/rebot-leader-ui.js` | Chamadas de serviço com namespace, assinatura de status e heartbeat do navegador |
| `reBotArm_simulator-RS/public/js/ros/leader-model.js` | Exibição do modelo Arm102 e mapeamento de ângulos |
| `rebotarm_ros2_RS/src/rebotarmcontroller/rebotarmcontroller/leader_worker.py` | Amostragem UART e calibração em um processo separado |
| `rebotarm_ros2_RS/src/rebotarmcontroller/rebotarmcontroller/leader_teleop.py` | Serviços ROS, status e integração de mapeamento leader/follower |
| `rebotarm_ros2_RS/src/rebotarmcontroller/rebotarmcontroller/leader_policy.py` | Mapeamento, validade de amostras e política de sessão |
| `rebotarm_ros2_RS/src/rebotarmcontroller/rebotarmcontroller/hardware_manager.py` | Propriedade de hardware, acompanhamento MIT, limites de velocidade e retenção |

Os assets do modelo Leader ficam em `reBotArm_simulator-RS/public/models/leader-arm102/`. As direções de exibição do modelo e o mapeamento de controle do follower são mantidos separadamente; não altere parâmetros de direção de hardware para corrigir a pré-visualização. Valide modo simulado, timeouts, pausar/retomar e liberação de controle antes da aceitação de hardware em baixa velocidade e eixo único.

### Estender Ferramentas MCP

O MCP Server está localizado em:

```text
rebotarm_ros2_RS/src/rebotarm_agent/rebotarm_agent/rebotarm_mcp_server.py
```

Ao adicionar uma ferramenta:

1. defina um esquema de entrada claro e unidades;
2. separe ferramentas somente leitura de ferramentas de movimento;
3. valide namespace, estado e permissão de movimento em ferramentas de movimento;
4. chame o backend por meio de ROS 2 Service/Action/Topic em vez de contornar o controlador diretamente;
5. reconstrua o workspace e teste caminhos de erro, timeout e cancelamento em simulação.

## Comandos de Verificação

```bash
source scripts/rs_env.sh
python3 -m pytest rebotarm_ros2_RS/src/rebotarmcontroller/test -q

bash -n setup.sh rebotarm scripts/*.sh

node --check reBotArm_simulator-RS/server.js
node --check reBotArm_simulator-RS/public/js/rebot-sim.js
node --check reBotArm_simulator-RS/public/js/ros/rebot-ros-client.js
node --check reBotArm_simulator-RS/public/js/ros/rebot-ros-ui.js
node --check reBotArm_simulator-RS/public/js/rebot-llm.js
node --check reBotArm_simulator-RS/public/js/ros/rebot-leader-ui.js
node --check reBotArm_simulator-RS/public/js/ros/leader-model.js
node reBotArm_simulator-RS/scripts/ros-namespaces.test.js
```

Verificações em tempo de execução:

```bash
./rebotarm status
ros2 node list
ros2 topic list | grep /rebot_arm_rs
ros2 service list | grep /rebot_arm_rs
ros2 action list | grep /rebot_arm_rs
```

## FAQ

### 1. A página web fica presa na tela de carregamento do modelo

Abra o painel Network das ferramentas de desenvolvedor do navegador e verifique se estas requisições retornam `200`:

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

Confirme que o rosbridge escuta em `0.0.0.0:9090` e que o endereço WebSocket começa com `ws://`. Navegadores remotos devem inserir o IP do Ubuntu, não o `localhost` do computador do navegador.

### 3. O console web conecta, mas os sliders não conseguem controlar o robô real

Verifique na seguinte ordem:

1. O console web está no robô real RS em `/rebot_arm_rs`.
2. O WebSocket do ROS está conectado.
3. A trava de controle web está habilitada.
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
- alimentação dos motores e terra comum;
- IDs dos motores e configuração do SDK;
- driver USB-CAN e nome da interface.

Interrompa imediatamente o teste com o robô real se o contador de erros continuar aumentando.

### 6. O braço não desliga imediatamente após clicar em desabilitar

Se o braço não estiver próximo da pose zero, o controlador executa primeiro um homing seguro e o valida. Este é o comportamento esperado. Se o homing falhar, o sistema mantém o braço habilitado para evitar queda a partir de uma pose diferente de zero. Use o botão físico de parada de emergência em uma emergência.

### 7. A compensação de gravidade não inicia ou não consegue controlar

- Confirme que o braço está habilitado.
- Consulte `/gravity_compensation/status`.
- Confirme que nenhuma trajetória ou homing seguro está em execução.
- Outros comandos de movimento são rejeitados durante a compensação de gravidade.
- Suporte qualquer carga que possa cair ao alternar modos.

### 8. A preensão visual não funciona

Confirme que o `rs_sim` completo está em execução no modo `physics` e, em seguida, verifique:

```bash
ros2 topic echo /rebot_arm_rs_sim/mujoco/overhead_rgb/image_raw --once
ros2 topic echo /rebot_arm_rs_sim/vision/color_blocks/detections --once
ros2 topic echo /rebot_arm_rs_sim/mujoco/object_states --once
```

Se o botão mostrar que uma tarefa está na fila, aguarde a ação serial atual terminar e não inicie várias solicitações de preensão repetidamente.

### 9. O Assistente de IA não consegue conectar ou relata uma chave ausente

Defina `DEEPSEEK_API_KEY` no terceiro terminal e inicie o Text Agent, depois verifique:

```bash
ss -ltnp | grep 8082
curl http://127.0.0.1:8082/health
ss -ltnp | grep 8081
```

`ECONNREFUSED 127.0.0.1:8082` significa que o servidor web não consegue alcançar o Text Agent. Verifique `REBOTARM_TEXT_AGENT_URL` em `reBotArm_simulator-RS/.env`; use o endereço do host do Agent para uma implantação entre máquinas e reinicie o servidor web. Se as verificações de integridade passarem, mas o chat falhar, inspecione a chave, substituições antigas `REBOTARM_LLM_*`, modelo e logs do MCP. A verificação de integridade da web `/api/llm/health` não substitui uma chamada real de modelo.

### 10. A página ainda mostra uma versão antiga após modificar o front-end

O console web RS inclui suporte a Service Worker/PWA. Primeiro use `Ctrl+Shift+R` para um hard refresh; se ainda não atualizar, limpe os dados do site ou cancele o registro do Service Worker nas ferramentas de desenvolvedor do navegador e recarregue a página.

### 11. `setup.sh` ou `colcon build` falha

- Confirme que as versões do Ubuntu, ROS 2 e Python correspondem.
- Confirme que o rosdep está inicializado e consegue atualizar.
- Execute `./setup.sh --check` para ver os itens ausentes.
- Confirme que `numpy`, `scipy`, `mujoco`, `pinocchio`, `motorbridge` e `fastmcp` podem ser importados em `rebotarm_ros2_RS/.venv`.
- Faça backup dos arquivos do usuário antes de excluí-los ou redefini-los e não resolva problemas de build com comandos destrutivos.

### 12. Varredura, calibração ou acompanhamento do líder falha

| Sintoma | Verificação |
|---|---|
| Aguardando serviço ROS do líder | Recompile `rebotarm_msgs` / `rebotarmcontroller`, reinicie o controlador e o rosbridge, verifique o namespace e faça um hard refresh na página |
| Sem porta serial / sondagem expirou | Conexão USB com o host ROS ou passthrough da VM, alimentação, permissões `dialout` e outros processos ocupando a porta |
| IDs de servo ausentes | Todos os sete IDs `0–6` devem responder; verifique a fiação, a alimentação e a taxa de baud de `1 Mbps` |
| não calibrado / amostras obsoletas | Reconecte para pré-visualização, destrave e calibre novamente; inspecione Hz e atraso em vez de relaxar timeouts |
| seguidor está ocupado | Pare trajetórias, acompanhamento manual e compensação de gravidade; restaure `IDLE` habilitado e manutenção da posição do gripper |
| poses absolutas diferem | Use primeiro o modo relativo padrão; o modo absoluto requer poses alinhadas |
| heartbeat do navegador expirou | Verifique fechamento da página, perda de rede ou limitação em segundo plano; recalibre e inicie novamente explicitamente |
| Falha ao carregar o modelo do líder | Verifique `public/models/leader-arm102/urdf/leader.urdf` local e os assets em `meshes/`, depois faça um hard refresh |

## Tabela Rápida de Comandos

```bash
# Check and install
./setup.sh --check
./setup.sh --yes
./rebotarm doctor

# Full simulation
./rebotarm start rs_sim
./rebotarm start web

# Natural-language Agent
export DEEPSEEK_API_KEY='your-key'
./scripts/start_rs_text_agent.sh

# Optional Leader dependencies and interfaces (stop old controller and rosbridge first)
bash scripts/setup_rs_leader.sh

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
- [Projeto B601-RS atual](https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS)
- Documentação do projeto B601-RS: `README.md`, `USER_MANUAL_ZH.md`, `DEVELOPER_GUIDE_ZH.md`, `DATA_FLOW_RS_ZH.md`, `LEADER_TELEOP_TEST_ZH.md`
