---
description: Este tutorial mostra como configurar o workspace de controle ROS2 para o reBot Arm B601-RS, incluindo conexão SocketCAN, controle do braço, visualização no RViz e integração com o MoveIt 2.
title: Integração do reBot Arm B601-RS com ROS2
keywords:
  - reBot Arm
  - B601-RS
  - ROS2
  - Humble
  - Jazzy
  - SocketCAN
  - RViz
  - MoveIt 2
  - Robot Arm
  - Robotics
slug: /rebot_arm_b601_rs_ros2_integration
last_update:
  date: 2026-06-10
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-10'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_ros2_integration/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# Guia de Integração do reBot Arm B601-RS com ROS2

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Humble | Jazzy-blue.svg" alt="ROS2 Humble | Jazzy" />
    <img src="https://img.shields.io/badge/Python-3.10%2B-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Version-v0.3.0-brightgreen.svg" alt="Version v0.3.0" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
</p>

<p align="center">
  <strong>ROS2 Control · SocketCAN · Visualização no RViz · Suporte ao MoveIt 2 · Compensação de Gravidade</strong>
</p>

Este tutorial mostra como controlar o reBot Arm B601-RS por meio do workspace ROS2 `rebotarm_ros2`. O workspace encapsula o SDK Python `reBotArm_control_py`, incluindo cinemática inversa baseada em Pinocchio, planejamento de trajetória e compensação de gravidade, em tópicos, serviços e ações ROS2. Isso facilita o uso de planejamento de alto nível, visualização no RViz, compensação de gravidade, controle do gripper e desenvolvimento de aplicações personalizadas.

:::note
Este tutorial usa `Ubuntu 24.04 + ROS2 Jazzy` como ambiente de referência principal. ROS2 Humble / Ubuntu 22.04 podem seguir o mesmo fluxo de trabalho.
:::

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/ros2/MoveIt2_RS.gif" alt="Demonstração do reBot Arm B601-RS com MoveIt 2" />
</p>

## Recursos do Projeto

1. **Interfaces ROS2 Padrão**  
   Fornece interfaces comuns como `/rebotarm/joint_states`, `/rebotarm/arm_status`, `FollowJointTrajectory`, `GripperCommand` e `MoveToPose`.

2. **Nós Prontos para Uso de Cinemática, Planejamento de Trajetória e Compensação de Gravidade**  
   Fornece cinemática direta/inversa, planejamento de trajetória, compensação de gravidade e suporte à visualização no RViz prontos para uso.

3. **Integração com MoveIt 2**  
   Inclui configuração do MoveIt 2 e demos de aplicação, suportando planejamento simulado por meio do plugin MotionPlanning do RViz e execução em hardware real por meio do nó de controle de hardware.

## Especificações

O hardware para este tutorial é fornecido pela [Seeed Studio](https://www.seeedstudio.com/).

| Parâmetro | Especificação |
|---|---|
| Modelo do Braço Robótico | reBot Arm B601-RS |
| Graus de Liberdade | 6-DOF + Gripper |
| Comunicação | CAN |
| Canal CAN Padrão | `can0` |
| Modo de Controle Padrão do Braço | `mit` |
| Sistema Recomendado | Ubuntu 24.04 + ROS2 Jazzy + Python 3.12 |
| Sistema de Referência | Ubuntu 22.04 + ROS2 Humble + Python 3.10 |

## Lista de Materiais (BOM)

| Componente | Quantidade | Incluído |
|---|---|---|
| Braço Robótico reBot Arm B601-RS | 1 | ✅ |
| Gripper | 1 | ✅ |
| Adaptador CAN | 1 | ✅ |
| Fonte de Alimentação | 1 | ✅ |
| Cabo de Comunicação | 1 | ✅ |
| PC Host com Ubuntu | 1 | Preparado pelo usuário |

## Fiação

1. Conecte o adaptador CAN ao barramento CAN do braço robótico.
2. Conecte o motor do gripper ao mesmo barramento CAN.
3. Ligue o braço robótico e conecte o adaptador CAN ao host.
4. Confirme que o host reconhece a interface CAN:

```bash
ip -br link
```

Ative a interface CAN:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

## Requisitos de Ambiente

| Item | Requisito Recomendado |
|---|---|
| Sistema Operacional | Ubuntu 24.04, Ubuntu 22.04 pode ser usado como referência |
| ROS2 | Jazzy, Humble pode ser usado como referência |
| Python | Python do sistema. Jazzy geralmente usa 3.12, enquanto Humble geralmente usa 3.10 |

## Etapas de Instalação

### Etapa 0. Concluir a Preparação Básica do Braço Robótico

Antes de iniciar a integração com ROS2, conclua o [Guia de Início Rápido do reBot Arm B601-RS](https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/), incluindo montagem, configuração de ID dos motores, inicialização da posição zero e outras preparações básicas.

### Etapa 1. Instalar a Versão do ROS2 para o Seu Sistema Ubuntu

Consulte o guia de instalação do ROS2 no Wiki da Seeed Studio ou a documentação oficial do ROS2:

- [Instalação do ROS2 Jazzy no Ubuntu](https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html)
- [Instalação do ROS2 Humble no Ubuntu](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)
- [Instalação do ROS2 Humble no Wiki da Seeed Studio](https://wiki.seeedstudio.com/pt-br/install_ros2_humble/)

### Etapa 2. Instalar Ferramentas de Build e Dependências do ROS

Instale colcon, pip, Git e os pacotes ROS exigidos por este workspace. Os comandos a seguir usam o valor de `ROS_DISTRO` no terminal atual:

```bash
sudo apt update
sudo apt install -y python3-colcon-common-extensions python3-pip git
sudo apt install -y \
  ros-${ROS_DISTRO}-control-msgs \
  ros-${ROS_DISTRO}-trajectory-msgs \
  ros-${ROS_DISTRO}-tf-transformations \
  ros-${ROS_DISTRO}-robot-state-publisher \
  ros-${ROS_DISTRO}-rviz2 \
  ros-${ROS_DISTRO}-pinocchio
```

Verifique após a instalação:

```bash
source /opt/ros/${ROS_DISTRO}/setup.bash
python3 -c "import pinocchio; print('pinocchio', pinocchio.__version__)"
```

### Etapa 3. Clonar o Repositório de Código

Dê preferência ao repositório oficial Seeed-Projects:

```bash
git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2
```



### Etapa 4. Instalar o motorbridge

Instale `motorbridge` a partir da fonte oficial do PyPI:

```bash
python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge
```

Se você usar Ubuntu 22.04 / ROS2 Humble, geralmente pode remover `--break-system-packages`:

```bash
python3 -m pip install --user --index-url https://pypi.org/simple motorbridge
```

### Etapa 5. Obter o SDK de Baixo Nível

```bash
mkdir -p third_party
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git third_party/reBotArm_control_py
```

### Etapa 6. Compilar o Workspace

```bash
source /opt/ros/${ROS_DISTRO}/setup.bash
colcon build --symlink-install
source install/setup.bash
```

Verifique as entradas executáveis:

```bash
ros2 pkg executables rebotarmcontroller
```

As entradas esperadas incluem pelo menos:

```text
rebotarmcontroller reBotArmController
rebotarmcontroller GravityCompensation
rebotarmcontroller GripperControl
rebotarmcontroller MoveTo
rebotarmcontroller MoveToPose
```

## Início Rápido

:::caution
Antes de usar o braço robótico, observe o seguinte: **O controlador do braço robótico possui alto grau de liberdade. Antes de habilitar o controlador ou energizar o braço, certifique-se de que a área de trabalho esteja livre de pessoas e obstáculos. Revise cuidadosamente cada comando de movimento para evitar acidentes. Operações perigosas são estritamente proibidas; você é responsável por quaisquer consequências.**
:::

### Iniciar o Sistema Completo

Primeiro confirme que a interface CAN está ativa:

```bash
ip -details link show can0
```

A inicialização completa inclui:

- Nó de controle `reBotArmController`
- `robot_state_publisher`
- RViz opcional

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0
```

Se você usar apenas o B601-RS por um longo período, pode alterar manualmente `default_model` em `src/rebotarm_bringup/config/rebotarm_hardware.yaml` para `rs`. Depois disso, você pode omitir `model:=rs` e manter apenas o parâmetro real do canal CAN:

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=can0
```

### Iniciar a Visualização no RViz

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=true
```

Se o modelo parecer muito pequeno no RViz, ajuste a visualização no painel `Views` à esquerda:

- Defina `Target Frame` como `base_link`
- Altere o tipo de visualização para `Move Camera`
- Ajuste `Distance`, por exemplo para `1.0` ou `1.5`
- Confirme que `Fixed Frame` está definido como `base_link`

### Iniciar Apenas o Nó de Controle

Se URDF e RViz não forem necessários:

```bash
ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0
```

Use ros launch para iniciar o nó, porque o arquivo de launch passa a configuração de hardware a partir de `rebotarm_bringup/config`.

## Namespace do ROS2

O namespace padrão é:

```text
/rebotarm
```

Portanto, todos os tópicos, serviços e ações são prefixados com `/rebotarm`, por exemplo:

```text
/rebotarm/joint_states
/rebotarm/enable
/rebotarm/move_to_pose
```

Se você precisar de vários braços robóticos, pode alterar o namespace no momento do launch:

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 arm_namespace:=right_arm
```

Nesse caso, `/rebotarm/joint_states` se torna `/right_arm/joint_states`.

## APIs Comuns

### Tópicos de Status

| API | Tipo | Descrição |
|---|---|---|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | Posições, velocidades e esforços das 6 juntas, incluindo juntas visuais do gripper para o RViz |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | Modo de controle, estado habilitado, máquina de estados e códigos de erro |
| `/rebotarm/joints/<joint>/state` | `rebotarm_msgs/msg/JointMotorState` | Estado do motor de uma única junta |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | Estado do motor do gripper |

Exemplos:

```bash
ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once
```

### Serviços

| API | Tipo | Descrição |
|---|---|---|
| `/rebotarm/enable` | `std_srvs/srv/Trigger` | Habilita o braço robótico |
| `/rebotarm/disable` | `std_srvs/srv/Trigger` | Desabilita o braço robótico |
| `/rebotarm/safe_home` | `std_srvs/srv/Trigger` | Move de volta para a posição inicial segura |
| `/rebotarm/set_zero` | `rebotarm_msgs/srv/SetZero` | Define a posição zero para todas as juntas ou para uma única junta |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | Pré-verificação de IK e solução de juntas alvo |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | Define a posição do motor do gripper em rad |
| `/rebotarm/gripper/open` | `rebotarm_msgs/srv/GripperCommand` | Abre o gripper de acordo com o valor configurado |
| `/rebotarm/gripper/close` | `rebotarm_msgs/srv/GripperCommand` | Fecha o gripper de acordo com o valor configurado |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | Inicia a compensação de gravidade |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | Para a compensação de gravidade |

### Ações

| API | Tipo | Descrição |
|---|---|---|
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | Movimento de pose do efetuador final |
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | Ponto de entrada padrão compatível com trajetória de juntas |
| `/rebotarm/gripper/command` | `control_msgs/action/GripperCommand` | Ação padrão de garra |

## Exemplos de Controle Básico

### 1. Habilitar o Braço Robótico

```bash
ros2 service call /rebotarm/enable std_srvs/srv/Trigger
```

### 2. Mover para uma Pose do Efetuador Final

```bash
ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {x: 0.0, y: 0.0, z: 0.0, w: 1.0}}, duration: 2.0}"
```

A ação `move_to_pose` é executada pelo controlador de pose final do SDK. O modo de controle do braço B601-RS é `mit` por padrão em `rebotarm_hardware.yaml`.

### 3. Enviar um Alvo de Junta

```bash
ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"
```

### 4. Controlar a Garra

```bash
ros2 service call /rebotarm/gripper/open rebotarm_msgs/srv/GripperCommand "{}"
ros2 service call /rebotarm/gripper/close rebotarm_msgs/srv/GripperCommand "{}"
```

Você também pode enviar uma posição explícita do motor da garra:

```bash
ros2 service call /rebotarm/gripper/set rebotarm_msgs/srv/SetGripper "{position: 5.0}"
```

### 5. Retorno Seguro à Posição Inicial e Desabilitar

```bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

## Exemplos de Demonstração

Todos os exemplos assumem que `reBotArmController` já está em execução:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0
```

### Exemplo de Movimento de Juntas

Controle todas as 6 juntas de uma vez. A unidade é rad:

```bash
ros2 run rebotarmcontroller MoveTo -- \
  0.20 -0.20 -0.20 -0.20 0.10 -0.10 \
  --duration 8.0
```

Controlar apenas uma junta:

```bash
ros2 run rebotarmcontroller MoveTo -- --joint joint3 --position -0.20 --duration 5.0
```

### Exemplo de Pose do Efetuador Final

```bash
ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0
```

### Exemplo de Compensação de Gravidade

```bash
ros2 run rebotarmcontroller GravityCompensation
```

O script primeiro chama `/rebotarm/enable`, depois inicia a compensação de gravidade. Quando você pressionar `Ctrl+C`, o script chama os seguintes serviços em ordem:

1. `/rebotarm/gravity_compensation/stop`
2. `/rebotarm/safe_home`
3. `/rebotarm/disable`

Isso interrompe primeiro a compensação de gravidade, depois move o braço de volta para a posição inicial segura e o desabilita.

Você também pode chamar os serviços manualmente:

```bash
ros2 service call /rebotarm/enable std_srvs/srv/Trigger
ros2 service call /rebotarm/gravity_compensation/start std_srvs/srv/Trigger
ros2 service call /rebotarm/gravity_compensation/stop std_srvs/srv/Trigger
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

### Exemplo de Garra Interativa

```bash
ros2 run rebotarmcontroller GripperControl
```

Após iniciar, digite:

```text
o / open    Open the gripper
c / close   Close the gripper
q / quit    Quit
```

## Configuração

Os arquivos de configuração padrão estão localizados em:

```text
src/rebotarm_bringup/config/
```

| Arquivo | Descrição |
|---|---|
| `rebotarm_hardware.yaml` | Seleção de hardware de camada superior ROS2 e substituições de parâmetros do SDK para B601-RS |
| `driver_params.yaml` | Exemplos de parâmetros ROS |

O `default_model` no topo de `rebotarm_hardware.yaml` pode ser `dm` por padrão. Se você quiser que o B601-RS seja o modelo padrão, altere para:

```yaml
default_model: rs
```

Após essa alteração, o B601-RS será usado automaticamente quando `model:=...` não for passado explicitamente.

Parâmetros comuns de lançamento:

| Parâmetro | Padrão | Descrição |
|---|---|---|
| `hardware_config` | `rebotarm_hardware.yaml` interno do bringup | Caminho de configuração de hardware de camada superior ROS2 |
| `model` | `rs` | Este tutorial passa explicitamente `rs` para selecionar a configuração B601-RS |
| `channel` | `can0` | Canal SocketCAN |
| `joint_state_rate` | `100.0` | Taxa de publicação de `/rebotarm/joint_states` |
| `cmd_arbitration` | `reject` | Arbitragem de comandos de juntas de baixo nível durante a execução de trajetória, `reject` ou `preempt` |
| `arm_namespace` | `rebotarm` | Prefixo de namespace ROS |
| `frame_id` | `base_link` | Quadro base do braço robótico |
| `ee_frame_id` | `gripper_end` | Quadro do efetuador final |
| `use_rviz` | `false` | Se deve iniciar o RViz do bringup |
| `disable_after_safe_home` | `true` | Controla se os motores são desabilitados após a conclusão do retorno seguro à posição inicial |

Configuração padrão de chaves para B601-RS em `rebotarm_hardware.yaml`:

| Item | Padrão |
|---|---|
| Canal de comunicação | `can0` |
| Modo de controle do braço | `mit` |
| Posição de abertura da garra | `5.0` |
| Posição de fechamento da garra | `0.0` |
| Ganho de saída de compensação de gravidade para as juntas 2/3 | `1.5` |

## Tópicos de Comando de Baixo Nível

O workspace ROS2 também fornece tópicos de depuração de motor de baixo nível:

| API | Tipo | Descrição |
|---|---|---|
| `/rebotarm/joints/<joint>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando bruto MIT de junta única |
| `/rebotarm/joints/<joint>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando bruto de posição-velocidade de junta única |
| `/rebotarm/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando bruto MIT da garra |
| `/rebotarm/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando bruto de posição-velocidade da garra |

:::caution
Os tópicos de comando de baixo nível são destinados a depuração e experimentos. Eles não executam IK, planejamento de trajetória ou verificações de validade de URDF. Para movimento em nível de aplicação, prefira serviços e ações como `/move_to_pose`, `/follow_joint_trajectory` e `/gripper/set`.
:::

## MoveIt 2

MoveIt 2 é um framework de planejamento de movimento para braços robóticos. Aqui ele é principalmente responsável por cinemática inversa, verificação de colisão, planejamento de trajetória e execução de trajetória. O pacote de demonstração mantém os fluxos de aplicação separados do driver de baixo nível. Para mais detalhes, consulte a [Documentação do MoveIt 2](https://moveit.picknik.ai/main/index.html) oficial.

O conteúdo relacionado ao MoveIt é dividido em dois pacotes:

| Pacote | Finalidade |
|---|---|
| `rebotarm_moveit_config` | Modelo do robô, SRDF, cinemática, limites de juntas, configuração de controladores e RViz |
| `rebotarm_moveit_demos` | Demonstrações de aplicação baseadas em MoveIt 2 |

O ambiente MoveIt usa hardware simulado por meio de `ros2_control` e `move_group` para planejamento e execução. Ele é adequado para validar o modelo, IK, planejamento de trajetória e fluxo de demonstração no RViz.

Este repositório também oferece suporte a hardware real. Antes de conectar o hardware real, certifique-se de que a configuração de zero do braço, direções das juntas, limites de juntas, limites de velocidade e faixa de abertura/fechamento da garra estejam corretos, ou mantenha a configuração padrão do repositório.

### Configuração do Ambiente MoveIt

Primeiro, certifique-se de que o ambiente ROS2 esteja disponível. O comando a seguir instala dependências para o `ROS_DISTRO` atualmente carregado:

```bash
sudo apt update
sudo apt install -y \
  ros-${ROS_DISTRO}-moveit \
  ros-${ROS_DISTRO}-moveit-configs-utils \
  ros-${ROS_DISTRO}-moveit-kinematics \
  ros-${ROS_DISTRO}-moveit-planners-ompl \
  ros-${ROS_DISTRO}-moveit-simple-controller-manager \
  ros-${ROS_DISTRO}-ros2-control \
  ros-${ROS_DISTRO}-ros2-controllers \
  ros-${ROS_DISTRO}-xacro
```

A configuração e as demonstrações do MoveIt estão incluídas neste workspace. Após instalar as dependências, reconstrua o workspace:

```bash
cd your/path/to/rebotarm_ros2
colcon build --symlink-install
source install/setup.bash
```

Verifique os pacotes MoveIt e pontos de entrada das demonstrações:

```bash
ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos
```

As entradas esperadas incluem pelo menos:

```text
rebotarm_moveit_demos draw_square
rebotarm_moveit_demos pick_place
```

### Usar o MoveIt

O planejamento com MoveIt pode ser usado pela interface gráfica do RViz ou chamando nós, tanto em simulação quanto em cenas reais.

#### Usar o MoveIt em Simulação

O MoveIt usa a interface de hardware virtual do ros2_control para simulação no RViz:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs
```

Por padrão, isso inicia:

- `move_group`
- `robot_state_publisher`
- `ros2_control_node`
- `joint_state_broadcaster`
- `rebotarm_controller`
- `gripper_controller`
- RViz com o plugin MoveIt MotionPlanning

O RViz é aberto automaticamente e carrega o modelo B601-RS. Você pode controlar o movimento pelo painel da interface gráfica à esquerda.

Para executar o ambiente MoveIt sem RViz:

```bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs use_rviz:=false
```

#### Usar o MoveIt com o Hardware reBotArm

Para cenas reais, inicie primeiro o nó de controle de hardware e depois inicie o ambiente MoveIt para hardware real:

```bash
ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0
```

Em outro terminal:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py model:=rs
```

:::caution
Antes de executar qualquer demonstração em hardware real, certifique-se de que a área de trabalho do braço robótico esteja livre de pessoas e obstáculos, verifique primeiro o caminho planejado no RViz e esteja pronto para parar o controlador a qualquer momento.
:::

### Executar a Demonstração Draw-square

Inicie primeiro o ambiente MoveIt e depois execute em outro terminal:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=rs
```

`draw_square` move `gripper_tcp` pelos quatro cantos de um retângulo coplanar. Os parâmetros padrão estão em:

```text
src/rebotarm_moveit_demos/config/draw_square_rs.yaml
```

Parâmetros comuns:

| Parâmetro | Descrição |
|---|---|
| `start_point` | Posição de reset das juntas antes do início da demonstração |
| `rectangle_center` | Centro do retângulo em `base_link` |
| `rectangle_width` / `rectangle_height` | Dimensões do retângulo em metros |
| `tcp_rpy` | Orientação do TCP, com padrão de garra voltada para baixo |
| `tcp_yaw_offsets` | Valores alternativos de yaw de IK usados para evitar grandes voltas da junta 6 |

`draw_square` é útil para verificar se o IK do MoveIt, o planejamento de trajetória e a execução estão funcionando corretamente. Se o planejamento falhar, primeiro verifique se o estado articular inicial, o centro do retângulo, a orientação do TCP e os limites das juntas são razoáveis.

### Executar a demonstração de pick-and-place

Inicie primeiro o ambiente do MoveIt e, em seguida, execute em outro terminal:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py model:=rs
```

Os parâmetros padrão estão em:

```text
src/rebotarm_moveit_demos/config/pick_place_rs.yaml
```

Parâmetros comuns:

| Parâmetro | Descrição |
|---|---|
| `ready_point` | Posição articular de prontidão usada antes e depois do pick/place |
| `pick_position` | Posição central inferior do objeto em `base_link` |
| `pick_tcp_rpy` / `place_tcp_rpy` | Orientação do TCP para pick e place |
| `object_dimensions` | Dimensões do objeto na planning-scene em metros |
| `max_gripper_width` | Abertura total máxima do gripper, padrão `0.09m` |
| `open_gripper_position` / `grasp_gripper_position` / `closed_gripper_position` | Posições simuladas de junta de um lado do gripper |
| `hardware_open_gripper_position` / `hardware_closed_gripper_position` | Posições de abertura/fechamento do motor do gripper de hardware |

`pick_place` adiciona um objeto alvo à planning scene, abre o gripper, move para a pose de pick, fecha o gripper, move para a pose de place e solta o objeto. As posições simuladas de junta do gripper e as posições reais do motor do gripper de hardware são parâmetros diferentes. Antes de executar no hardware real, confirme a direção de abertura/fechamento do gripper e seus limites.

### Arquivos de configuração do MoveIt

| Arquivo | Descrição |
|---|---|
| `rebotarm_moveit_config/config/rebotarm_rs.urdf.xacro` | Modelo do robô B601-RS usado pelo MoveIt, incluindo o gripper e `gripper_tcp` |
| `rebotarm_moveit_config/config/rebotarm_rs.ros2_control.xacro` | Descrição de mock hardware do ros2_control para simulação |
| `rebotarm_moveit_config/config/rebotarm_rs.srdf` | Grupos do MoveIt, efetuador final, estados padrão e configuração semântica |
| `rebotarm_moveit_config/config/kinematics.yaml` | Configuração do solucionador de IK |
| `rebotarm_moveit_config/config/joint_limits.yaml` | Limites de juntas usados pelo planejamento do MoveIt |
| `rebotarm_moveit_config/config/ompl_planning.yaml` | Parâmetros do planejador OMPL |
| `rebotarm_moveit_config/config/moveit_controllers.yaml` | Configuração do controlador de execução de trajetória do MoveIt para simulação |
| `rebotarm_moveit_config/config/moveit_hardware_controllers.yaml` | Configuração do controlador de execução de trajetória do MoveIt para hardware real |
| `rebotarm_moveit_config/config/ros2_controllers.yaml` | Configuração de controladores do ros2_control para simulação |
| `rebotarm_moveit_config/config/initial_positions.yaml` | Posições articulares iniciais para hardware simulado |
| `rebotarm_moveit_demos/config/draw_square_rs.yaml` | Parâmetros da demonstração de desenho de quadrado |
| `rebotarm_moveit_demos/config/pick_place_rs.yaml` | Parâmetros da demonstração de pick-and-place |

## FAQ

### 1. `socketcan write failed: Network is down` aparece na inicialização

Isso significa que a interface CAN ainda não foi ativada. Primeiro verifique a interface:

```bash
ip -details link show can0
```

Reinicie o CAN:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

### 2. `can0` não pode ser encontrado

Primeiro confirme que o adaptador CAN está conectado e verifique o nome da interface:

```bash
ip -br link
```

Se você usar PCAN-USB:

```bash
sudo modprobe peak_usb
ip -br link
```

Se o nome da interface não for `can0`, substitua `channel` ao iniciar:

```bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can1
```

### 3. O modelo do robô não é exibido no RViz

Verifique o seguinte:

- Se o workspace foi carregado com `source install/setup.bash`
- Se `Fixed Frame` está definido como `base_link`
- Se `robot_state_publisher` foi iniciado corretamente
- Se o caminho da malha URDF é `package://rebotarm_bringup/description/...`

Se o modelo for exibido, mas a visualização for inconveniente, altere o tipo de visualização para `Move Camera` no painel `Views` do RViz, defina `Target Frame` como `base_link` e ajuste `Distance`.

### 4. O planejamento do MoveIt falha

Se a demonstração imprimir `MoveIt planning failed`, verifique o seguinte:

- Confirme que `demo.launch.py` ou `hardware.launch.py` foi iniciado e que `move_group` está em execução correta.
- Confirme que o estado articular atual não está desatualizado e que `/joint_states` ou `/rebotarm/joint_states` está sendo publicado normalmente.
- Confirme que o ponto alvo está dentro da área de trabalho alcançável e que a orientação alvo não faz com que o punho ou o gripper colida com o corpo do braço.
- Confirme que os limites de juntas e de velocidade em `joint_limits.yaml` correspondem ao braço robótico atual.
- Planeje manualmente primeiro no plugin MotionPlanning do RViz. Execute a demonstração somente depois de confirmar que o caminho está livre de colisões.

### 5. Aparece um aviso de porta FastDDS SHM

Se o terminal mostrar algo como:

```text
[RTPS_TRANSPORT_SHM Error] Failed init_port fastrtps_port7002: open_and_lock_file failed
```

Isso geralmente é causado por arquivos de bloqueio de memória compartilhada do FastDDS remanescentes após um processo ROS2 anterior ter sido encerrado de forma anormal. Se serviços e ações ainda responderem normalmente, esse aviso geralmente não afeta o controle.

Para limpar isso, pare primeiro os processos ROS2 relacionados e, em seguida, execute:

```bash
pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*
```

Se você quiser ignorar temporariamente o transporte por memória compartilhada, defina o seguinte antes de iniciar o ROS2:

```bash
export FASTDDS_BUILTIN_TRANSPORTS=UDPv4
```

### 6. E se eu usar Humble?

Usuários do Humble podem seguir o mesmo fluxo de trabalho, substituir `jazzy` por `humble` nos comandos e instalar as dependências correspondentes de acordo com a documentação oficial do Humble. Após trocar a distribuição do ROS2, execute `colcon build` novamente.

### 7. `pinocchio` não pode ser encontrado

Se um nó ou comando de verificação relatar:

```text
ModuleNotFoundError: No module named 'pinocchio'
```

Primeiro certifique-se de que o pacote Pinocchio para sua distribuição ROS2 está instalado:

```bash
sudo apt install -y ros-${ROS_DISTRO}-pinocchio
```

Depois certifique-se de que o terminal atual carregou o ambiente ROS2:

```bash
source /opt/ros/${ROS_DISTRO}/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"
```

Se ainda assim não puder ser encontrado, verifique se o caminho de busca do Python atual contém o caminho do pacote Python do ROS2:

```bash
python3 -c "import sys; print('\n'.join(sys.path))"
```

Após carregar o Jazzy, você deverá ver um caminho semelhante a `/opt/ros/jazzy/lib/python3.12/site-packages`. Se você usar Humble, substitua `jazzy` por `humble` nos comandos.

## Contato

- Suporte técnico: [Submit an Issue](https://github.com/Seeed-Projects/reBotArmController_ROS2/issues)
- Repositório do projeto: [Github](https://github.com/Seeed-Projects/reBotArmController_ROS2)
- Fórum: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## Referências

- [reBot Arm B601-RS Quick Start](https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/)
- [Documentação do ROS2 Humble](https://docs.ros.org/en/humble/)
- [Documentação do ROS2 Jazzy](https://docs.ros.org/en/jazzy/)
- [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py)
- [Documentação do MoveIt 2](https://moveit.picknik.ai/main/index.html)
