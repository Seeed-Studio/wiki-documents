---
description: "Capítulo 33 do Curso para Iniciantes em IA Física da Seeed — integração prática do reBot Arm com ROS2: criação do workspace ROS2, encapsulamento do SDK em Python em um nó driver, inicialização e visualização do braço no RViz, controle via interfaces de Tópico / Serviço / Ação e parada segura com solução de problemas."
title: Capítulo 33 - Integração do reBot Arm com ROS2
hide_title: true
keywords:
  - reBot
  - Robotic Arm
  - ROS2
  - B601-RS
  - B601-DM
  - RViz
  - MoveIt2
  - USB2CAN
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_33
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_chapter_33/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 7 · Capítulo 33 · Prática</span>
    <h2>33. Integração do reBot Arm com ROS2</h2>
    <p>
      Capítulo 33 do Curso para Iniciantes em IA Física da Seeed — integração prática do reBot Arm com ROS2: criação do workspace ROS2, encapsulamento do SDK em Python em um nó driver, inicialização e visualização do braço no RViz, controle via interfaces de Tópico / Serviço / Ação e parada segura com solução de problemas.
    </p>
    <div className="hero-actions">
      <a href="#overview">Visão geral do capítulo</a>
      <a href="#workspace">Criar o workspace</a>
      <a href="#launch">Inicializar e visualizar</a>
      <a href="#control">Tópico, Serviço e Ação</a>
    </div>
  </div>
</section>

{/* TODO: this section of the original document ends with a screen recording (`file_v3_0014l_8f7e605c-e0f9-4176-be18-997f8682e72g.mp4`, `18446744073566823104.mp4`, `1126939039.mp4`, `video_20260817_142623.mp4`). The file(s) are not in 图片和附件/ yet — upload them to the course CDN and link them here once they are available. */}
<a id="overview"></a>

## 33.1 Criando o Workspace ROS2 do reBot

### Preparação: Ambiente e Hardware

Antes de começar oficialmente, certifique-se de que o hardware está corretamente conectado e o ambiente de software está pronto. Esta é a base de todas as etapas subsequentes.

- **Fiação de hardware**: faça a ponte entre a porta `USB2CAN` / serial e a placa adaptadora de barramento CAN do braço. Após ligar a alimentação, conecte o `USB2CAN` ao host e confirme que o sistema reconhece o dispositivo CAN/serial.
- **Sistema operacional**: recomenda-se usar **Ubuntu 24.04** com **ROS2 Jazzy**, ou **Ubuntu 22.04** com **ROS2 Humble**.

RS:

```bash
sudo ip link set can0 down 2>/dev/null || true
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

DM:

```bash
sudo chmod 666 /dev/ttyACM*
```

### Workspace principal

Este é o repositório de código principal de todo o trabalho de integração; ele contém todos os componentes necessários para encapsular o reBot Arm como um robô ROS2 padrão.

- **Obter o código**: clone o workspace a partir do repositório oficial:

```bash
#RS:
git clone https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS.git ~/ReBot_Arm_DigitalTwin_RS

#DM:
git clone https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_DM.git ~/ReBot_Arm_DigitalTwin_DM
```

**Estrutura do workspace**: as versões RS e DM usam nomes de diretório de workspace diferentes (RS é `rebotarm_ros2_RS`, DM é `rebotarm_ros2_DM`). Ele contém sete pacotes ROS2 principais:

- `rebotarm_msgs`: interfaces personalizadas de mensagem, serviço e ação.
- `rebotarmcontroller`: o nó driver, contendo o controlador principal `reBotArmController`.
- `rebotarm_bringup`: arquivos de launch, arquivos de configuração, modelos URDF e recursos do RViz.
- `rebotarm_moveit_config`: arquivos de configuração do MoveIt 2.
- `rebotarm_moveit_demos`: programas de exemplo do MoveIt 2.
- `rebotarm_mujoco`: nó de sincronização de simulação MuJoCo da versão DM (nome do pacote `rebotarm_mujoco`; a versão RS é `rebotarm_mujoco_rs`).
- `rebotarm_agent`: nó Agent de alto nível da versão DM.

## 33.2 A Ponte Entre o SDK em Python e o Driver ROS2

`reBotArm_control_py` é a biblioteca de controle em Python de baixo nível, e o papel do workspace `rebotarm_ros2` é "encapsulá-la" em interfaces ROS2 padrão.

- **Instalar o SDK de baixo nível**:

No diretório third_party do workspace, obtenha esta biblioteca de baixo nível (RS fica em rebotarm_ros2/third_party; DM faz a correspondência automaticamente — setup.sh verifica, em ordem, os três caminhos candidatos reBotArmController_ROS2-main/third_party, reBotArmController_ROS2-main/sdk e ~/reBotArm_control_py):

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git third_party/reBotArm_control_py

#reBotArm_control_py's default yaml config is dm; change the one in /reBotArm_control_py/config to the matching option

#RS:
hardware_yaml: "rebotarm_rs.yaml"

#DM:
hardware_yaml: "rebotarm_dm.yaml"
```

- **Instalar o motorbridge**: este é o middleware-chave que conecta os motores ao software de alto nível; instale-o via pip:

```bash
python3 -m pip install motorbridge

#verify
motorbridge -v
#output
motorbridge 0.5.0
```

<a id="launch"></a>

## 33.3 Inicialização e Visualização

- Verifique os pontos de entrada executáveis:

RS:

```bash
cd ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2
source install/setup.bash
ros2 pkg executables rebotarmcontroller
```

DM:

```bash
cd ~/ReBot_Arm_DigitalTwin_DM/rebotarm_ros2
source install/setup.bash
ros2 pkg executables rebotarmcontroller
```

- Você deve esperar ver pelo menos:

```bash
rebotarmcontroller GravityCompensation
rebotarmcontroller GripperControl
rebotarmcontroller MoveTo
rebotarmcontroller MoveToPose
rebotarmcontroller reBotArmController
```

A versão RS possui dois pontos de entrada executáveis adicionais:

```text
rebotarmcontroller FakeRsDriver        # RS-only: MuJoCo simulation fake driver (fake_rs_driver.py)
rebotarmcontroller CancelAction        # RS-only: cancel an executing Action goal
```

A versão DM possui um ponto de entrada executável adicional:

```text
rebotarmcontroller FakeReBotArmDriver  # DM-only: MuJoCo simulation fake driver (fake_driver.py)
```

Observação: a versão RS também inclui os dois arquivos de planejamento de movimento `motion_profiles.py` e `trajectory_profiles.py`; a versão DM não inclui.

- Após compilar o workspace, você pode inicializar o sistema completo com um único comando, conectando o controle do braço, a publicação de estado e a visualização.

```bash
# Build the workspace
source /opt/ros/${ROS_DISTRO}/setup.bash
colcon build --symlink-install
source install/setup.bash

# Launch the full system and enable RViz visualization
# RS:
cd ~/ReBot_Arm_DigitalTwin_RS/rebotarm_ros2
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=true

# DM:
cd ~/ReBot_Arm_DigitalTwin_DM
./rebotarm start dm use_rviz:=true
```

- **Publicação de estado**: após a inicialização, o nó `reBotArmController` publica continuamente o estado do braço, por exemplo, estados das juntas (`/rebotarm/joint_states`) e status geral (`/rebotarm/arm_status`).

```bash
#show active topic names
ros2 topic list
#list topics and their message types; adding the -t flag also shows each topic's message type:
ros2 topic list -t
#example output:
/client_count
/connected_clients
/goal_pose
/initialpose
/parameter_events
/rebotarm/arm_status
/rebotarm/control_reference
/rebotarm/control_target
/rebotarm/gripper/cmd/mit
/rebotarm/gripper/cmd/pos_vel
/rebotarm/gripper/state
/rebotarm/joint_states
/rebotarm/joints/joint1/cmd/mit
/rebotarm/joints/joint1/cmd/pos_vel
/rebotarm/joints/joint1/state
/rebotarm/joints/joint2/cmd/mit
/rebotarm/joints/joint2/cmd/pos_vel
/rebotarm/joints/joint2/state
/rebotarm/joints/joint3/cmd/mit
/rebotarm/joints/joint3/cmd/pos_vel
/rebotarm/joints/joint3/state
/rebotarm/joints/joint4/cmd/mit
/rebotarm/joints/joint4/cmd/pos_vel
/rebotarm/joints/joint4/state
/rebotarm/joints/joint5/cmd/mit
/rebotarm/joints/joint5/cmd/pos_vel
/rebotarm/joints/joint5/state
/rebotarm/joints/joint6/cmd/mit
/rebotarm/joints/joint6/cmd/pos_vel
/rebotarm/joints/joint6/state
/rebotarm/mujoco/object_states
/rebotarm/mujoco/overhead_rgb/image_raw
/rebotarm/sim/animation_event
/rebotarm/vision/color_blocks/detections
/robot_description
/rosout
/tf
/tf_static
```

- **Exibição no RViz**: por meio do RViz, você pode observar o braço baseado em URDF se mover em tempo real, obtendo um efeito de monitoramento "o que você vê é o que você obtém".

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-33/ch33-01.png" alt="O modelo do reBot arm exibido no RViz" />
</div>

Após a inicialização, o nó `reBotArmController` publica continuamente o estado do braço. A publicação de estado é gerenciada de forma unificada pela classe `JointStatePublisher` (`ros_publishers.py`), acionada por um temporizador em uma frequência configurável (100 Hz por padrão), sem necessidade de gatilho externo.

Visão geral dos tópicos publicados:

|Topic|Message type|Description|
|---|---|---|
|`/rebotarm/joint_states`|`sensor_msgs/msg/JointState`|Posição, velocidade e torque das 6 juntas, além do gripper `finger_left`|
|`/rebotarm/arm_status`|`rebotarm_msgs/msg/ArmStatus`|Modo de controle, estado de habilitação, máquina de estados, códigos de status por junta, códigos de erro (QoS latched)|
|`/rebotarm/joints/<joint>/state`|`rebotarm_msgs/msg/JointMotorState`|Estado em nível de motor de uma única junta; `<joint>` é de `joint1` a `joint6`|
|`/rebotarm/gripper/state`|`rebotarm_msgs/msg/JointMotorState`|Estado em nível de motor do gripper; não é publicado quando nenhum gripper está configurado|

A mensagem `ArmStatus` usa durabilidade `TRANSIENT_LOCAL` (QoS latched), o que significa que assinantes que entram depois recebem imediatamente o snapshot mais recente de estado — adequado para componentes de UI e monitoramento de integridade sincronizarem o estado:

```bash
# View joint states
ros2 topic echo /rebotarm/joint_states --once

# View overall status (including state machine and error codes)
ros2 topic echo /rebotarm/arm_status --once

# View a single joint's motor state
ros2 topic echo /rebotarm/joints/joint1/state --once
```

Campos da mensagem `ArmStatus`:

```text
std_msgs/Header header
string mode               # current control mode: mit / pos_vel / vel
bool enabled              # whether the arm is enabled
bool control_loop_active  # whether the internal pos_vel control loop is running
string state_machine      # state machine: IDLE / TRAJ_RUNNING / LOWLEVEL_STREAMING / GRAVITY_COMP
string[] joint_names      # list of joint names
uint8[] per_joint_status_code  # status code of each joint motor
string[] error_codes     # list of error codes
```

<a id="control"></a>

## 33.4 Controle por Tópico, Serviço e Ação

rebotarm_ros2 fornece uma variedade de interfaces de controle padrão ROS2 para escolha com base no cenário de aplicação. Todas as interfaces estão sob o namespace `/rebotarm` por padrão, podendo ser sobrescrito por meio do parâmetro de launch `arm_namespace`.

Unifique as unidades antes do controle: ângulos em radianos (rad); tempo em segundos.

### Fluxo de exemplo para controle via Topic, Service e Action

```bash
#1 Power on and enable the motors
ros2 service call /rebotarm/enable std_srvs/srv/Trigger
#2 Return to the safe home (verify the zero position is correct)
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
# Now you can send move_to_pose / follow_joint_trajectory action goals
# ...execute motion...
# Disable after finishing
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

### Topic: passagem direta de baixo nível para motor único

Para depuração e experimentos de controle de baixo nível, `motor_passthrough.py` fornece topics de comando bruto esparsos por junta:

|Topic|Tipo de mensagem|Descrição|
|---|---|---|
|`/rebotarm/joints/<joint>/cmd`|`rebotarm_msgs/msg/JointMotorCmd`|Comando bruto esparso de junta única|
|`/rebotarm/gripper/cmd`|`rebotarm_msgs/msg/JointMotorCmd`|Comando bruto esparso do gripper|

`JointMotorCmd` usa um design com sinalizadores esparsos: somente os campos cujos `use_pos`, `use_vel`, `use_kp`, `use_kd`, `use_tau`, `use_vlim` são `true` substituem os padrões. `mode` pode ser `0` (MIT), `1` (POS_VEL), `2` (VEL).

```bash
# Single-joint MIT mode command
ros2 topic pub --once /rebotarm/joints/joint1/cmd/mit \
  rebotarm_msgs/msg/JointMitCmd \
  "{pos: 0.2, vel: 0.0, kp: 80.0, kd: 4.0, tau: 0.0}"
```

Durante a execução de trajetória, o comando de baixo nível é rejeitado por padrão (`cmd_arbitration:=reject`). Para substituição preemptiva, passe `cmd_arbitration:=preempt` no lançamento.

### Service: controle em estilo de gatilho

Service é adequado para operações em estilo de gatilho, como habilitar/desabilitar, homing seguro e troca de modo. Ele é definido na classe `ArmServices` de `ros_services.py`.

|Service|Tipo|Descrição|
|---|---|---|
|`/rebotarm/enable`|`std_srvs/srv/Trigger`|Habilita o braço e o gripper, inicia o loop de controle pos_vel|
|`/rebotarm/disable`|`std_srvs/srv/Trigger`|Para o loop de controle e desabilita o braço|
|`/rebotarm/safe_home`|`std_srvs/srv/Trigger`|Retorna ao zero em velocidade segura (juntas + gripper)|
|`/rebotarm/set_zero`|`rebotarm_msgs/srv/SetZero`|Define a posição zero de todas ou de juntas especificadas|
|`/rebotarm/move_to_pose_ik`|`rebotarm_msgs/srv/MoveToPoseIK`|Apenas realiza a solução de IK e atualiza os ângulos de junta alvo|
|`/rebotarm/gripper/set`|`rebotarm_msgs/srv/SetGripper`|Define a distância de abertura do gripper e o torque máximo|
|`/rebotarm/gravity_compensation/start`|`std_srvs/srv/Trigger`|Inicia o loop fechado de compensação de gravidade interno ao controlador|
|`/rebotarm/gravity_compensation/stop`|`std_srvs/srv/Trigger`|Para o loop fechado de compensação de gravidade|
|`/rebotarm/gravity_compensation/status`|`std_srvs/srv/Trigger`|Consulta o status da compensação de gravidade; `success=true` significa em execução|

Exemplos comuns de comando:

```bash
# Enable
ros2 service call /rebotarm/enable std_srvs/srv/Trigger

# Safe homing
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger

# IK solve (!!! note the arm moves very fast)
ros2 service call /rebotarm/move_to_pose_ik rebotarm_msgs/srv/MoveToPoseIK \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {w: 1.0}}}"

# Send a Cartesian pose goal (3 s total motion time)
ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {w: 1.0}}, duration: 3.0}"

# Set the gripper opening (rad; 0-5)
ros2 service call /rebotarm/gripper/set rebotarm_msgs/srv/SetGripper \
  "{position: 2.5, max_effort: 0.5}"

# DM
ros2 service call /rebotarm/gripper/set \
  rebotarm_msgs/srv/SetGripper "{position: -1.0, max_effort: 0.0}"
```

### Action: controle orientado a processo

Action é adequado para movimentos de longa duração que exigem feedback e cancelamento, como execução de trajetória. Ele é definido na classe `ArmActions` de `ros_actions.py`.

|Action|Tipo|Descrição|
|---|---|---|
|`/rebotarm/move_to_pose`|`rebotarm_msgs/action/MoveToPose`|Trajetória de pose cartesiana do efetuador final; internamente usa `ArmEndPos.move_to_traj()`|
|`/rebotarm/follow_joint_trajectory`|`control_msgs/action/FollowJointTrajectory`|Interface padrão de trajetória de juntas; interface padrão do MoveIt2|
|`/rebotarm/gripper/command`|`control_msgs/action/GripperCommand`|Action padrão de gripper|

Exemplo de `move_to_pose`: enviar uma meta de movimento para o serviço Action do reBot Arm — mover o braço para uma pose especificada, manter o tempo total de movimento em 3 segundos e imprimir o feedback em tempo real durante o movimento.

```bash
ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {w: 1.0}}, duration: 3.0}" \
  --feedback
```

Ver a definição de mensagem da Action

```bash
ros2 interface show rebotarm_msgs/action/MoveToPose
#You can see the complete Goal / Feedback / Result fields.
```

### Exemplos de Demonstração

Todos os exemplos assumem que `reBotArmController` já foi iniciado:

```bash
cd ~/seeed/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0
```

Os exemplos são registrados como entry points executáveis ROS2 e podem ser chamados diretamente com `ros2 run`. Os arquivos-fonte estão em `src/rebotarmcontroller/rebotarmcontroller/examples/`.

#### Exemplo de Pose do Efetuador Final

`move_to_pose.py` — movimento de pose do efetuador final. O script envia uma meta `geometry_msgs/Pose` através da action `/rebotarm/move_to_pose`; o nó de controle lida internamente com a troca de modo e a execução da trajetória. Ele corresponde à cadeia de capacidades `ArmEndPos.move_to_traj()` do SDK de baixo nível. É uma demonstração de ação única e não executa automaticamente `safe_home` ou `disable`.

```bash
ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0
```

#### Exemplo de Compensação de Gravidade

`gravity_compensation.py` — um exemplo de trava de compensação de gravidade. O script não reescreve o loop de controle; ele chama diretamente o serviço de compensação de gravidade dentro de `reBotArmController`; o loop fechado real de compensação de gravidade é executado dentro do processo do controlador, usando o `RobotArm.get_positions/get_velocities/mit` do SDK.

```bash
ros2 run rebotarmcontroller GravityCompensation
```

Quando o script inicia, ele primeiro chama `/rebotarm/enable`, depois inicia a compensação de gravidade. Ao sair com `Ctrl+C`, o script chama sequencialmente `/rebotarm/gravity_compensation/stop` → `/rebotarm/safe_home` → `/rebotarm/disable`, então o braço primeiro para a compensação de gravidade, depois retorna à posição zero segura e é desabilitado.

<a id="safety"></a>

## 33.5 Parada Segura e Solução de Problemas

A segurança é a primeira prioridade na operação de robôs. rebotarm_ros2 fornece mecanismos de segurança em vários níveis.

### **safe_home service**: via o serviço `/rebotarm/safe_home`, o braço retorna à posição zero predefinida em velocidade segura.

Internamente, esse serviço primeiro para a compensação de gravidade, depois alterna para o modo `pos_vel` e então executa o homing:

```bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
```

### **disable service**: para o loop de controle e desabilita o braço; é a primeira escolha para parada de emergência

```bash
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

**hold_current_position**: quando uma trajetória é cancelada ou ocorre uma exceção, o controlador chama automaticamente esse método para travar as posições atuais das juntas, evitando que o braço caia livremente.

### Monitoramento da máquina de estados

O campo `state_machine` no topic `/rebotarm/arm_status` reflete o estado de execução atual e é o primeiro ponto de entrada para solução de problemas:

|Estado|Significado|
|---|---|
|`IDLE`|Ocioso, aguardando comandos|
|`TRAJ_RUNNING`|Executando uma trajetória|
|`LOWLEVEL_STREAMING`|Transmitindo comandos de baixo nível para motor único|
|`GRAVITY_COMP`|Loop fechado de compensação de gravidade em execução|

```bash
# Continuously monitor the state machine
ros2 topic echo /rebotarm/arm_status --field state_machine
```

### Solução de problemas por código de erro

Os campos `per_joint_status_code` e `error_codes` na mensagem `ArmStatus` são usados para localização de falhas:

`per_joint_status_code`: código de status (`uint8`) de cada motor de junta, vindo de `motor.get_state().status_code` do SDK de baixo nível; um valor diferente de zero significa que o motor está anormal. `error_codes`: strings de código de erro em nível de controlador

```bash
# View the full status (including error codes)
ros2 topic echo /rebotarm/arm_status --once
```

## 33.6 FAQ: Problemas Comuns e Solução de Problemas

#### Porta serial não encontrada: ao iniciar, aparece `open serial port /dev/ttyACM0 failed`; use `ls /dev/ttyACM*`

para ver o dispositivo real e então sobrescreva com `channel:=/dev/ttyACM1`.

**Permissões insuficientes**: se a porta serial existir mas você não tiver permissão, execute `sudo usermod -a -G dialout $USER`,

e isso terá efeito após fazer login novamente.

#### Modelo RViz não exibido: confirme que o caminho da malha URDF é `package://rebotarm_bringup/description/meshes/...`.

#### Execução de trajetória falhou: verifique se o primeiro ponto da trajetória está próximo dos ângulos de junta atuais (o desvio deve ser menor que `0.10 rad`),

e o erro de posição final deve ser menor que `0.03 rad`. Você pode usar `ros2 topic echo /rebotarm/joint_states --once`

para ver os ângulos de junta atuais.

</div>
