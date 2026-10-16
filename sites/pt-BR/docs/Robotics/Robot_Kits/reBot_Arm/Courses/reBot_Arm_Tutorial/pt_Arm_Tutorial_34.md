---
description: "Capítulo 34 do Curso para Iniciantes em IA Física da Seeed — Planejamento de movimento com MoveIt 2 no reBot Arm: a arquitetura do move_group, grupos de planejamento no SRDF, limites de juntas, o modelo de colisão e a matriz de autocolisão, a cena de planejamento, caminhos cartesianos, planejamento com obstáculos, execução de trajetórias e os demos draw_square / pick_place."
title: Capítulo 34 - Planejamento de Movimento com MoveIt2
hide_title: true
keywords:
  - reBot
  - Robotic Arm
  - ROS2
  - MoveIt2
  - SRDF
  - OMPL
  - Motion Planning
  - RViz
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/rebot_physical_ai_course_chapter_34
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-09
  author: Seeed Studio Robotics Team
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
url: https://wiki.seeedstudio.com/pt-br/robotics/rebot_physical_ai_course_chapter_34/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 7 · Capítulo 34 · Teoria &amp; Prática</span>
    <h2>34. Planejamento de Movimento com MoveIt2</h2>
    <p>
      Capítulo 34 do Curso para Iniciantes em IA Física da Seeed — Planejamento de movimento com MoveIt 2 no reBot Arm: a arquitetura do move_group, grupos de planejamento no SRDF, limites de juntas, o modelo de colisão e a matriz de autocolisão, a cena de planejamento, caminhos cartesianos, planejamento com obstáculos, execução de trajetórias e os demos draw_square / pick_place.
    </p>
    <div className="hero-actions">
      <a href="#overview">Visão geral do capítulo</a>
      <a href="#srdf">SRDF e grupos de planejamento</a>
      <a href="#planning">Cena de planejamento e caminhos</a>
      <a href="#demos">Executando os demos</a>
    </div>
  </div>
</section>

{/* TODO: this section of the original document ends with a screen recording (`409527786.mp4`, `18446744072629597584.mp4`). The file(s) are not in 图片和附件/ yet — upload them to the course CDN and link them here once they are available. */}
MoveIt 2 é o framework de planejamento de movimento mais mainstream para braços robóticos no ecossistema ROS2, responsável por resolver cinemática inversa, detecção de colisão, planejamento de trajetória e execução de trajetória. Para o reBot Arm B601-DM, o MoveIt 2 separa o planejamento de alto nível da direção de baixo nível: o planejamento acontece no nó `move_group`, e a execução é enviada para `reBotArmController` por meio da ação `follow_joint_trajectory`. Este capítulo disseca a teoria e a prática do MoveIt 2 camada por camada, desde a arquitetura do sistema até a execução no robô real. Objetivo didático: fazer o braço planejar automaticamente movimentos seguros em ambientes complexos.

<a id="overview"></a>

## 34.1 Arquitetura de Sistema do MoveIt2

O núcleo do MoveIt 2 é o nó `move_group`, que atua como o agendador mestre do planejamento de movimento. Em torno do `move_group`, a integração do MoveIt 2 com o reBot Arm envolve os seguintes componentes:

|Componente|Função|Arquivo/pacote correspondente|
|---|---|---|
|`move_group`|Agendador mestre de planejamento: recebe objetivos, chama IK e planejadores, gera trajetórias, despacha a execução|`rebotarm_moveit_config`|
|URDF/Xacro|Descrição do modelo do robô (links, juntas, malhas, gripper, gripper_tcp)|`rebotarm.urdf.xacro`|
|SRDF|Modelo semântico: grupos de planejamento, efetuador final, estados padrão, matriz de autocolisão|`rebotarm.srdf`|
|Kinematics Plugin|Resolvedor de IK|`kinematics.yaml` (KDL)|
|Planejador OMPL|Planejador de movimento baseado em amostragem|`ompl_planning.yaml` (RRTConnect)|
|Execução de Trajetória|Controlador de execução de trajetória|`moveit_controllers.yaml`|
|Cena de Planejamento|Modelo de ambiente: objetos, colisões, ACM|Operações de cena em `pick_place.py`|
|RViz MotionPlanning|Interface de visualização e interação|`moveit.rviz`|

### Cadeia de lançamento no ambiente de simulação

```bash
ros2 launch rebotarm_moveit_config demo.launch.py
```

Este comando inicia `move_group`, `robot_state_publisher`, `ros2_control_node` (hardware simulado), `joint_state_broadcaster`, `rebotarm_controller`, `gripper_controller` e RViz.

O ambiente de simulação usa `mock_components/GenericSystem` como hardware virtual; não é necessário um braço real.

### Cadeia de lançamento no ambiente com robô real

```bash
#RS:
# Terminal 1: start the hardware driver
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0

#DM:
ros2 launch rebotarm_bringup bringup.launch.py model:=dm channel:=/dev/ttyACM0

# Terminal 2: start MoveIt (connecting to the running driver)
ros2 launch rebotarm_moveit_config hardware.launch.py
```

`hardware.launch.py` não inicia `ros2_control_node`; em vez disso, ele remapeia `/joint_states` para `/<arm_namespace>/joint_states`, lendo diretamente os estados de junta publicados pelo driver real e enviando a trajetória planejada para `reBotArmController` por meio da ação `follow_joint_trajectory`.

<a id="srdf"></a>

## 34.2 SRDF e Grupo de Planejamento

SRDF (Semantic Robot Description Format) é a camada de complemento semântico ao URDF. O URDF descreve a estrutura física do robô (links, juntas, malhas), mas não sabe quais juntas "se movem juntas", qual link é o "efetuador final" ou quais links "nunca irão colidir". O SRDF responde a essas perguntas.

O SRDF do reBot Arm define dois grupos de planejamento:

|Grupo de planejamento|Composição|Uso|
|---|---|---|
|`arm`|Cadeia cinemática `base_link` → `gripper_tcp`|Planejamento de movimento do braço de 6 eixos|
|`gripper`|`gripper_joint1`, `gripper_joint2`|Controle de abrir/fechar o gripper|

O grupo `arm` é definido com `<chain>`, de `base_link` até `gripper_tcp`, cobrindo 6 juntas mais os links do gripper. O grupo `gripper` lista as juntas uma a uma com `<joint>`, contendo apenas as duas juntas do gripper.

O SRDF também define estados nomeados (`group_state`) para reset rápido:

|Nome do estado|Grupo|Significado|
|---|---|---|
|`home`|`arm`|Todas as 6 juntas em zero|
|`open`|`gripper`|Juntas do gripper em `0.0715` rad (totalmente aberto)|
|`closed`|`gripper`|Juntas do gripper em `0.0` rad (totalmente fechado)|

Declaração do efetuador final:

```xml
<end_effector name="gripper" parent_link="gripper_link"
              group="gripper" parent_group="arm"/>
```

`name="gripper"`: o nome do efetuador final

`parent_link="gripper_link"`: em qual link o gripper está montado (o último link do braço)

`group="gripper"`: o grupo de planejamento correspondente ao gripper

`parent_group="arm"`: o grupo de planejamento pai ao qual ele pertence (o grupo do braço)

A junta virtual fixa o braço ao referencial do mundo:

```xml
<virtual_joint name="FixedBase" type="fixed"
               parent_frame="world" child_link="base_link"/>
```

## 34.3 Limites de Juntas

Os limites de juntas são divididos em duas camadas: os limites físicos no URDF e os limites de planejamento no MoveIt.

A camada URDF define a faixa de ângulo de cada junta (posição mínima/máxima), que são limites rígidos no nível de hardware.

A camada MoveIt define limites de velocidade e aceleração em `joint_limits.yaml`, usados para a parametrização temporal da trajetória:

```yaml
joint_limits:
  joint1:
    has_velocity_limits: true
    max_velocity: 1.0          # rad/s
    has_acceleration_limits: true
    max_acceleration: 1.0      # rad/s^2
  # joint2 ~ joint6 same as above
  gripper_joint1:
    has_velocity_limits: true
    max_velocity: 0.2          # rad/s
    has_acceleration_limits: true
    max_acceleration: 0.5      # rad/s^2
```

Fatores globais de escala:

```yaml
default_velocity_scaling_factor: 0.2
default_acceleration_scaling_factor: 0.2
```

Isso significa que o planejamento, por padrão, usa apenas 20% da velocidade e aceleração máximas — uma configuração segura e conservadora. Em demos isso pode ser sobrescrito individualmente; por exemplo, `velocity_scaling: 1.0` em `pick_place.yaml` significa planejamento em velocidade máxima.

## 34.4 Modelo de Colisão e Autocolisão

A detecção de colisão do MoveIt 2 é baseada na FCL (Flexible Collision Library), usando as malhas ou geometrias primitivas no URDF para detecção de colisão. Para acelerar, o SRDF predefine a matriz de autocolisão (ACM, AllowedCollision Matrix), declarando quais pares de links "nunca precisam de verificação de colisão".

A matriz de autocolisão do reBot Arm se divide em duas categorias:

**Adjacentes (links vizinhos)**: pares de links conectados diretamente por uma junta, fisicamente sempre em contato, sem necessidade de verificação:

|Par de links|Motivo|
|---|---|
|`base_link` - `link1`|Adjacentes|
|`link1` - `link2`|Adjacentes|
|`link2` - `link3`|Adjacentes|
|`link3` - `link4`|Adjacentes|
|`link4` - `link5`|Adjacentes|
|`link5` - `link6`|Adjacentes|
|`link6` - `gripper_link`|Adjacentes|
|`gripper_link` - `gripper_left`|Adjacentes|
|`gripper_link` - `gripper_right`|Adjacentes|
|`gripper_link` - `gripper_tcp`|Adjacentes|

**Nunca (nunca colidem)**: pares de links que geometricamente não podem se tocar:

|Par de links|Motivo|
|---|---|
|`gripper_left` - `gripper_tcp`|Nunca|
|`gripper_right` - `gripper_tcp`|Nunca|
|`gripper_left` - `gripper_right`|Nunca|

Pares de links que não estão na ACM (como `base_link` e `link6`) são verificados quanto a colisão normalmente. Durante o planejamento, o OMPL evita configurações de juntas que causem colisões no espaço de amostragem.

<a id="planning"></a>

## 34.5 Cena de Planejamento

A Cena de Planejamento é o modelo do MoveIt para o "mundo", contendo o corpo do robô, objetos do ambiente e relações de colisão. Ela é o pré-requisito para o planejamento: antes de cada plano, o MoveIt verifica se o estado inicial colide com objetos na Cena de Planejamento.

As operações centrais da Cena de Planejamento são feitas por meio de três serviços:

|Serviço|Tipo|Função|
|---|---|---|
|`/apply_planning_scene`|`ApplyPlanningScene`|Adicionar/remover objetos, modificar ACM, anexar objetos|
|`/get_planning_scene`|`GetPlanningScene`|Consultar a cena atual|
|`/plan_kinematic_path`|`GetMotionPlan`|Solicitar planejamento (sem executar)|

## 34.6 Caminhos Cartesianos

Um caminho cartesiano significa que o efetuador final se move ao longo de uma linha reta ou curva no espaço cartesiano, em vez de interpolar ponto a ponto no espaço de juntas. O MoveIt 2 implementa isso via `compute_cartesian_path`. No demo do reBot Arm, `draw_square` usa a ideia de caminho cartesiano: ele controla o `gripper_tcp` para visitar os quatro cantos de um retângulo no mesmo plano. A implementação concreta é:

1. Para cada canto, resolver os ângulos de junta correspondentes com IK:

```python
target = self.compute_ik_joint_target(
    pose_stamped, seed_values, ik_link_name,
    timeout_sec, avoid_collisions=True, label=label
)
```

2. Usar o OMPL para planejar uma trajetória dos ângulos de junta atuais até os ângulos de junta alvo:

```python
request = GetMotionPlan.Request()
request.motion_plan_request.group_name = self.group_name
request.motion_plan_request.pipeline_id = "ompl"
request.motion_plan_request.planner_id = "RRTConnect"
request.motion_plan_request.allowed_planning_time = 5.0
```

3. Executar a trajetória por meio da ação `/execute_trajectory`.

Parâmetros principais de `draw_square`:

|Parâmetro|Valor padrão|Descrição|
|---|---|---|
|`rectangle_center`|`[0.28, 0.0, 0.12]`|Centro do retângulo, no referencial de `base_link`|
|`rectangle_width`|`0.04`|Largura do retângulo (m)|
|`rectangle_height`|`0.08`|Altura do retângulo (m)|
|`tcp_rpy`|`[0.0, 1.57, 0.0]`|Pose final; por padrão o gripper fica apontado para baixo|
|`tcp_yaw_offsets`|`[0.0, 3.1416, -3.1416]`|Yaws alternativos para IK, evitando grandes rotações da junta 6|
|`avoid_collisions`|`true`|Se deve evitar colisões durante a resolução de IK|

`tcp_yaw_offsets` é um truque prático: o IK pode retornar múltiplas soluções, e algumas delas fazem o `joint6` girar significativamente. Ao fornecer vários yaws alternativos, o demo escolhe a solução com a menor variação de junta, reduzindo rotações desnecessárias.

## 34.7 Planejamento com Obstáculos

Quando existem obstáculos na Planning Scene, o OMPL os evita automaticamente durante o planejamento. A configuração do OMPL do reBot Arm é:

```yaml
planning_plugins:
  - ompl_interface/OMPLPlanner

request_adapters:
  - default_planning_request_adapters/ResolveConstraintFrames
  - default_planning_request_adapters/ValidateWorkspaceBounds
  - default_planning_request_adapters/CheckStartStateBounds
  - default_planning_request_adapters/CheckStartStateCollision

response_adapters:
  - default_planning_response_adapters/AddTimeOptimalParameterization
  - default_planning_response_adapters/ValidateSolution
  - default_planning_response_adapters/DisplayMotionPath

arm:
  default_planner_config: RRTConnect
  projection_evaluator: joints(joint1,joint2)
  longest_valid_segment_fraction: 0.005
```

Observações importantes da configuração:

|Configuração|Valor|Descrição|
|---|---|---|
|Planejador padrão|`RRTConnect`|Árvore de exploração rápida bidirecional, adequada para a maioria dos cenários|
|Projection evaluator|`joints(joint1,joint2)`|Dimensão de projeção do espaço de amostragem, afeta a eficiência do planejamento|
|Longest valid segment fraction|`0.005`|Granularidade de interpolação da verificação de colisão; menor é mais seguro, porém mais lento|

A cadeia de adaptadores de requisição (request_adapters) faz quatro coisas antes do planejamento:

1. `ResolveConstraintFrames` — alinhar os frames de restrição ao frame de planejamento
2. `ValidateWorkspaceBounds` — verificar se o objetivo está dentro dos limites da área de trabalho
3. `CheckStartStateBounds` — verificar se o estado inicial está dentro dos limites das juntas
4. `CheckStartStateCollision` — verificar se o estado inicial não colide

A cadeia de adaptadores de resposta (response_adapters) faz três coisas após o planejamento:

1. `AddTimeOptimalParameterization` — adicionar parametrização temporal (velocidade, aceleração) à trajetória
2. `ValidateSolution` — verificar se a trajetória satisfaz as restrições
3. `DisplayMotionPath` — pré-visualizar a trajetória no RViz

O demo `pick_place` demonstra completamente o fluxo de planejamento com obstáculos: adicionar um objeto → planejar até a pose de preensão (evitando colisões) → anexar o objeto → planejar até a pose de colocação (o objeto se move com o braço, ainda evitando colisões) → desanexar o objeto → limpar a cena.

## 34.8 Execução de Trajetória

A trajetória planejada pelo MoveIt 2 deve ser enviada ao hardware para execução por meio de um controlador. A simulação e o robô real usam configurações de controlador diferentes.

**Ambiente de simulação** (`moveit_controllers.yaml`)

```yaml
moveit_simple_controller_manager:
  controller_names:
    - rebotarm_controller
    - gripper_controller

  rebotarm_controller:
    action_ns: follow_joint_trajectory
    type: FollowJointTrajectory
    default: true
    joints: [joint1, joint2, joint3, joint4, joint5, joint6]

  gripper_controller:
    action_ns: follow_joint_trajectory
    type: FollowJointTrajectory
    default: false
    joints: [gripper_joint1, gripper_joint2]
```

Na simulação, `rebotarm_controller` e `gripper_controller` são ambos controladores de mock-hardware do `ros2_control`; as trajetórias são executadas diretamente em hardware virtual.

**Ambiente de robô real** (`moveit_hardware_controllers.yaml`)

```yaml
moveit_simple_controller_manager:
  controller_names:
    - rebotarm

  rebotarm:
    action_ns: follow_joint_trajectory
    type: FollowJointTrajectory
    default: true
    joints: [joint1, joint2, joint3, joint4, joint5, joint6]
```

A configuração do robô real tem apenas um controlador `rebotarm`, apontando para a action `/rebotarm/follow_joint_trajectory` do `reBotArmController`. No robô real, o gripper é controlado por meio da action separada `/rebotarm/gripper/command` (tipo `GripperCommand`), não por `follow_joint_trajectory`.

Tolerâncias de execução de trajetória:

```yaml
trajectory_execution:
  allowed_execution_duration_scaling: 1.2   # allow 20% longer execution time
  allowed_goal_duration_margin: 0.5          # extra 0.5s wait after arrival
  allowed_start_tolerance: 0.05              # start-state deviation tolerance 0.05 rad
  execution_duration_monitoring: true        # enable execution time monitoring
```

Fluxo de execução no robô real:

1. `move_group` planeja uma `RobotTrajectory`
2. Envia a trajetória para `MoveItSimpleControllerManager` via a action `/execute_trajectory`
3. O gerenciador de controladores converte a trajetória em uma meta `follow_joint_trajectory` e a envia para o `reBotArmController`

`/rebotarm/follow_joint_trajectory`

4. O `reBotArmController` executa a trajetória internamente (validação → modo pos_vel → envio temporizado → verificação de chegada)
5. O resultado da execução é enviado de volta para o `move_group`

Se a execução falhar (timeout, desvio de chegada excessivo), o `move_group` retorna um código de erro, e o script de demonstração decide se deve abortar com base nele.

<a id="demos"></a>

## 34.9 Executando os Demos

### Demo de desenhar um retângulo

Primeiro inicie o ambiente de simulação do MoveIt e, em seguida, abra outro terminal e execute:

```bash

#RS real robot
#Terminal 1:
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=false
#Terminal 2:
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs
#Terminal 3:
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=rs
#Before the real robot, make sure the area around the arm is clear and the emergency stop works. demo.launch.py is simulation—do not run it together with the real bringup.
```

```bash
#DM real robot
#Terminal 1:
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm use_rviz:=false
#Terminal 2:
ros2 launch rebotarm_moveit_config hardware.launch.py model:=dm
#Terminal 3:
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=dm
#Before the real robot, make sure the area around the arm is clear and the emergency stop works. demo.launch.py is simulation—do not run it together with the real bringup.
```

`draw_square` controla o `gripper_tcp` para visitar os quatro cantos de um retângulo, verificando se o IK, o planejamento de trajetória e a cadeia de execução funcionam. Os parâmetros padrão estão em `src/rebotarm_moveit_demos/config/draw_square.yaml`.

### Demo de pick-and-place

`pick_place` adiciona um objeto a ser agarrado à planning scene e, em seguida, controla o gripper para abrir → mover para a pose de preensão → fechar o gripper → anexar o objeto → mover para a pose de colocação → soltar o objeto. Os parâmetros padrão estão em `src/rebotarm_moveit_demos/config/pick_place.yaml`.

Antes de executar no robô real, primeiro confirme a direção de abertura/fechamento e os limites do gripper. As posições de junta do gripper na simulação e as posições do motor do gripper no hardware real são dois conjuntos diferentes de parâmetros:

|Parâmetro|Valor na simulação|Valor no hardware|
|---|---|---|
|Gripper totalmente aberto|`0.045` (por lado, rad)|`-5.0` (posição do motor)|
|Gripper totalmente fechado|`0.0` (por lado, rad)|`0.0` (posição do motor)|

```bash
#RS real robot
#Terminal 1:
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=false
#Terminal 2:
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs
#Terminal 3:
ros2 launch rebotarm_moveit_demos pick_place.launch.py
```

```bash
#DM real robot
#Terminal 1:
cd /home/robot/reBotArmController_ROS2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=dm use_rviz:=false
#Terminal 2:
ros2 launch rebotarm_moveit_config hardware.launch.py model:=dm
#Terminal 3:
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=dm
```

**Antes de executar no robô real, certifique-se de que a área ao redor do braço esteja livre e que o botão de parada de emergência funcione. `demo.launch.py` é simulação — não o execute junto com o bringup real.**

## 34.10 FAQ

### E se o planejamento do MoveIt falhar?

Verifique o seguinte:

- Se o estado inicial das juntas está dentro dos limites (o adaptador `CheckStartStateBounds` relata erros)
- Se o estado inicial colide com objetos da cena (o adaptador `CheckStartStateCollision` relata erros)
- Se a pose alvo está dentro da área de trabalho (o adaptador `ValidateWorkspaceBounds` relata erros)
- Se o IK consegue resolver o alvo (`ik_timeout` é 5s por padrão; pode ser aumentado)
- Se o tempo de planejamento é suficiente (`planning_time` é 5s por padrão; pode ser aumentado)

### O plugin MotionPlanning não aparece no RViz?

Confirme se `demo.launch.py` foi iniciado e se o arquivo de configuração do RViz carregou `moveit.rviz`. Se você abrir o RViz manualmente, será necessário adicionar manualmente o display MotionPlanning.

### A simulação funciona, mas o robô real falha?

Verifique se `hardware.launch.py` remapeia corretamente `/joint_states` para `/<arm_namespace>/joint_states`. Confirme se o `reBotArmController` está em execução e habilitado.

O desvio do primeiro ponto da trajetória deve ser menor que `0.10 rad`, e o desvio de chegada final menor que `0.03 rad`.

### O joint6 gira demais?

O IK pode retornar múltiplas soluções, fazendo o `joint6` girar significativamente. `draw_square` atenua isso com o parâmetro `tcp_yaw_offsets`, fornecendo yaws alternativos. Aplicações personalizadas podem escolher a solução com a menor variação de junta após a resolução do IK.

### A direção do gripper está invertida no robô real?

Verifique `hardware_open_gripper_position` e `hardware_closed_gripper_position` em `pick_place.yaml`. O padrão do B601-DM é abrir em `-5.0` e fechar em `0.0`; se a direção do motor estiver invertida, troque esses dois valores.

{/* Observação: partes deste capítulo foram redigidas com a ajuda da Doubao AI. */}

</div>
