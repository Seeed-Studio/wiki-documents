---
description: Este tutorial mostra como configurar o workspace de controle ROS2 para o reBot Arm B601-DM, incluindo controle do braço, visualização no RViz e integração com o MoveIt2.
title: Integração do reBot Arm B601-DM com ROS2
keywords:
  - reBot Arm
  - B601-DM
  - ROS2
  - Humble
  - Jazzy
  - RViz
  - Robot Arm
  - Robotics
slug: /rebot_arm_b601_dm_ros2_integration
sku: 100065783, 100095532
last_update:
  date: 2026-05-29
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-29'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_ros2_integration/
---

import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

# Guia de Integração do reBot Arm B601-DM com ROS2

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
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Humble | Jazzy-blue.svg" alt="ROS2 Humble | Jazzy" />
    <img src="https://img.shields.io/badge/Python-3.10%2B-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Version-v0.2.3-brightgreen.svg" alt="Version v0.2.3" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
</p>

<p align="center">
  <strong>Controle ROS2 · Visualização no RViz · Suporte ao MoveIt2</strong>
</p>

Este tutorial mostra como executar o workspace de controle ROS2 `rebotarm_ros2` para o reBot Arm B601-DM. O workspace encapsula o SDK Python de baixo nível `reBotArm_control_py` em tópicos, serviços e ações ROS2, facilitando a integração com planejamento de alto nível, preensão visual, visualização no RViz e desenvolvimento de aplicações personalizadas.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/v2MlI3zMi1k?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
Este tutorial usa `Ubuntu 24.04 + ROS2 Jazzy + Python 3.12` como ambiente de referência principal. ROS2 Humble / Ubuntu 22.04 podem seguir o mesmo fluxo de trabalho com a distribuição ROS2 correspondente.
:::

## Funcionalidades do Projeto

1. **Interfaces ROS2 Padrão**  
   Fornece interfaces ROS2 comuns como `/joint_states`, `FollowJointTrajectory`, `GripperCommand` e `MoveToPose`, facilitando a integração com MoveIt2, pipelines de preensão visual ou sistemas em nível de tarefa.

2. **Nós Prontos para Uso de Cinemática, Trajetória e Compensação de Gravidade**  
   Fornece cinemática direta/inversa, execução de trajetória, compensação de gravidade e suporte à visualização no RViz prontos para uso.

3. **Integração com MoveIt 2**  
   Inclui configuração completa do MoveIt 2 e demonstrações de aplicação, suportando o plugin MotionPlanning do RViz para planejamento simulado e execução em hardware real.

## Especificações

O hardware para este tutorial é fornecido pela [Seeed Studio](https://www.seeedstudio.com/).

<table>
  <thead>
    <tr>
      <th>Parâmetro</th>
      <th>Especificação</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Modelo do Braço Robótico</td>
      <td>reBot Arm B601-DM</td>
    </tr>
    <tr>
      <td>Graus de Liberdade</td>
      <td>6-DOF + Garra</td>
    </tr>
    <tr>
      <td>Versão do Motor</td>
      <td>Versão do motor DAMIAO</td>
    </tr>
    <tr>
      <td>Comunicação</td>
      <td>Barramento CAN via bridge serial USB2CAN</td>
    </tr>
    <tr>
      <td>Porta Serial Padrão</td>
      <td><code>/dev/ttyACM0</code></td>
    </tr>
    <tr>
      <td>Sistema Recomendado</td>
      <td>Ubuntu 24.04 + ROS2 Jazzy + Python 3.12</td>
    </tr>
    <tr>
      <td>Sistema de Referência</td>
      <td>Ubuntu 22.04 + ROS2 Humble + Python 3.10</td>
    </tr>
  </tbody>
</table>

## Lista de Materiais (BOM)

| Componente | Quantidade | Incluído |
|--|--|--|
| Braço Robótico reBot Arm B601-DM | 1 | ✅ |
| Garra | 1 | ✅ |
| Bridge Serial USB2CAN | 1 | ✅ |
| Fonte de Alimentação (24V) | 1 | ✅ |
| Cabo USB-C / Comunicação | 1 | ✅ |
| PC Host com Ubuntu | 1 | Preparado pelo usuário |

## Fiação

1. Conecte a bridge serial USB2CAN ao barramento CAN do braço robótico.
2. Conecte a fonte de alimentação de 24V e conecte o adaptador USB2CAN ao PC host.
3. Confirme que o host reconhece o dispositivo serial:

```bash
ls /dev/ttyACM*
```

Se você precisar conceder permissão de porta serial temporariamente:

```bash
sudo chmod 666 /dev/ttyACM0
```

É recomendável adicionar o usuário atual ao grupo `dialout` em vez disso. Faça logout e login novamente para que a alteração tenha efeito:

```bash
sudo usermod -a -G dialout $USER
```

## Requisitos de Ambiente

| Item | Requisito Recomendado |
|------|------|
| Sistema Operacional | Ubuntu 24.04, Ubuntu 22.04 pode ser usado como referência |
| ROS2 | Jazzy, Humble pode ser usado como referência |
| Python | Python do sistema. Jazzy geralmente usa 3.12, enquanto Humble geralmente usa 3.10 |

## Etapas de Instalação

### Etapa 0. Concluir a Configuração Básica do Braço Robótico

Antes de iniciar a integração com ROS2, conclua o [Guia de Introdução ao reBot Arm B601-DM](https://wiki.seeedstudio.com/pt-br/rebot_b601_dm_getting_started/), incluindo montagem, configuração de ID dos motores, inicialização da posição zero e verificação básica de conectividade.

### Etapa 1. Instalar a Versão do ROS2 para o Seu Sistema Ubuntu

Consulte a documentação oficial do ROS2:

- [Instalação do ROS2 Jazzy no Ubuntu](https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html)
- [Instalação do ROS2 Humble no Ubuntu](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html)

:::tip

Se você estiver usando Ubuntu 24.04, deve instalar o ROS 2 Jazzy.

Se você estiver usando Ubuntu 22.04, deve instalar o ROS 2 Humble.

:::

### Etapa 2. Instalar Ferramentas de Build e Dependências do ROS

Instale colcon, pip, Git e os pacotes ROS exigidos por este workspace:

```bash
sudo apt update
sudo apt install -y python3-colcon-common-extensions python3-pip git
sudo apt install -y \
  ros-jazzy-control-msgs \
  ros-jazzy-trajectory-msgs \
  ros-jazzy-tf-transformations \
  ros-jazzy-robot-state-publisher \
  ros-jazzy-rviz2 \
  ros-jazzy-pinocchio
```

Verifique a instalação:

```bash
source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print('pinocchio', pinocchio.__version__)"
```

Se você usar ROS2 Humble, substitua os nomes de pacotes `ros-jazzy-*` por `ros-humble-*` e
execute `source /opt/ros/humble/setup.bash`.

### Etapa 3. Clonar o Repositório de Código

Use por padrão o repositório oficial Seeed-Projects:

```bash
git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2
```

### Etapa 4. Instalar o motorbridge

Instale `motorbridge` a partir da fonte oficial do PyPI:

```bash
python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge
```

### Etapa 5. Obter o SDK de Baixo Nível

```bash
mkdir -p third_party
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git third_party/reBotArm_control_py
```

### Etapa 6. Compilar o Workspace

```bash
source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash
```

Verifique as entradas executáveis:

```bash
ros2 pkg executables rebotarmcontroller
```

As entradas esperadas incluem:

```text
rebotarmcontroller reBotArmController
rebotarmcontroller GravityCompensation
rebotarmcontroller GripperControl
rebotarmcontroller MoveTo
rebotarmcontroller MoveToPose
```

## Início Rápido

:::caution
Antes de usar o robô, observe o seguinte: **O controlador do braço possui alto grau de liberdade. Antes de habilitar o controlador ou energizar o braço, certifique-se de que a área de trabalho esteja livre de pessoas e obstáculos. Revise cuidadosamente cada comando de movimento para evitar acidentes. Operações perigosas são estritamente proibidas; você é responsável por quaisquer consequências.**
:::

### Iniciar o Sistema Completo

A inicialização completa executa:

- Nó de controle `reBotArmController`
- `robot_state_publisher`
- RViz opcional

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0  #Do not open the RViz visualization interface when starting communication
```

:::tip
Sempre que você abrir um novo terminal, precisa executar primeiro os dois comandos a seguir

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
```
:::

Se a sua porta serial não for `/dev/ttyACM0`, substitua-a pelo nome real do dispositivo:

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM1
```

### Iniciar a Visualização no RViz

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0 use_rviz:=true   #Open the RViz visualization interface when starting communication
```

Se o modelo parecer muito pequeno no RViz, ajuste a visualização no painel `Views` à esquerda:

- Defina `Target Frame` como `base_link`
- Ajuste `Distance`, por exemplo para `1.0` ou `1.5`
- Use a roda do mouse para dar zoom
- Confirme que `Fixed Frame` está definido como `base_link`

### Iniciar Apenas o Nó de Controle

Se URDF e RViz não forem necessários:

```bash
ros2 launch rebotarm_bringup driver.launch.py channel:=/dev/ttyACM0
```

Você também pode executar o nó diretamente:

```bash
ros2 run rebotarmcontroller reBotArmController
```

:::tip
Diferente de `driver.launch.py`, que passa arquivos de configuração de `rebotarm_bringup/config`, executar o controlador diretamente faz com que ele use a configuração padrão do braço do SDK. Para uso normal, é recomendável iniciar via ROS.
:::

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

Se você precisar de vários braços robóticos ou quiser executar em paralelo com outros sistemas ROS2, poderá alterar o namespace no momento da inicialização:

```bash
ros2 launch rebotarm_bringup bringup.launch.py arm_namespace:=left_arm
```

Nesse caso, `/rebotarm/joint_states` se torna `/left_arm/joint_states`.

## APIs Comuns

### Tópicos de Status

| API | Tipo | Descrição |
|---|---|---|
| `/rebotarm/joint_states` | `sensor_msgs/msg/JointState` | Posições, velocidades e esforços das juntas de 6 eixos |
| `/rebotarm/arm_status` | `rebotarm_msgs/msg/ArmStatus` | Modo de controle, estado de habilitação, máquina de estados e códigos de erro |
| `/rebotarm/joints/<joint>/state` | `rebotarm_msgs/msg/JointMotorState` | Estado do motor de uma única junta |
| `/rebotarm/gripper/state` | `rebotarm_msgs/msg/JointMotorState` | Estado do motor da garra |

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
| `/rebotarm/set_mode` | `rebotarm_msgs/srv/SetMode` | Alterna entre `mit`, `pos_vel` e `vel` |
| `/rebotarm/set_zero` | `rebotarm_msgs/srv/SetZero` | Define a posição zero para todas as juntas ou para uma única junta |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | Pré-verificação de IK e solução de juntas alvo |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | Define a posição do motor do gripper em rad |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | Inicia a compensação de gravidade |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | Para a compensação de gravidade |

### Ações

| API | Tipo | Descrição |
|---|---|---|
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | Movimento de pose do efetuador final |
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | Ponto de entrada padrão compatível com trajetória de juntas |
| `/rebotarm/gripper/command` | `control_msgs/action/GripperCommand` | Ação padrão de gripper |

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

### 3. Enviar um Alvo de Junta

```bash
ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"
```

### 4. Posição Inicial Segura e Desabilitar

```bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

## Exemplos de Demonstração

Todos os exemplos assumem que `reBotArmController` já está em execução:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0
```

### Exemplo de Movimento de Juntas

Controle todas as 6 juntas de uma vez. A unidade é rad:

```bash
ros2 run rebotarmcontroller MoveTo -- \
  0.20 -0.20 -0.20 -0.20 0.10 -0.10 \
  --duration 8.0
```

Controle apenas uma junta:

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

O script primeiro chama `/rebotarm/enable`, depois inicia a compensação de gravidade. Quando você pressionar `Ctrl+C`, o script chama os seguintes serviços na ordem:

1. `/rebotarm/gravity_compensation/stop`
2. `/rebotarm/safe_home`
3. `/rebotarm/disable`

Isso para primeiro a compensação de gravidade, depois move o braço de volta para a posição inicial segura e o desabilita.

Você também pode chamar os serviços manualmente:

```bash
ros2 service call /rebotarm/enable std_srvs/srv/Trigger
ros2 service call /rebotarm/gravity_compensation/start std_srvs/srv/Trigger
ros2 service call /rebotarm/gravity_compensation/stop std_srvs/srv/Trigger
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger
```

### Exemplo Interativo de Gripper

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
| `arm.yaml` | ID do motor, ID de feedback e parâmetros de controle para as 6 juntas do braço |
| `gripper.yaml` | ID do motor do gripper, ID de feedback, fornecedor e parâmetros de controle |
| `driver_params.yaml` | Exemplos de parâmetros ROS |

Parâmetros comuns de launch:

| Parâmetro | Padrão | Descrição |
|---|---|---|
| `arm_config` | `arm.yaml` embutido do bringup | Caminho da configuração do braço |
| `gripper_config` | `gripper.yaml` embutido do bringup | Caminho da configuração do gripper |
| `channel` | String vazia | Usa YAML por padrão. Sobrescreve a porta serial quando não estiver vazia |
| `joint_state_rate` | `100.0` | Taxa de publicação de `/rebotarm/joint_states` |
| `cmd_arbitration` | `reject` | Arbitragem de comandos de baixo nível durante a execução da trajetória do braço. `reject` ou `preempt`; comandos de baixo nível do gripper não preemptam trajetórias do braço |
| `arm_namespace` | `rebotarm` | Prefixo de namespace ROS |
| `frame_id` | `base_link` | Frame base do braço robótico |
| `ee_frame_id` | `end_link` | Frame do efetuador final |
| `use_rviz` | `false` | Se deve iniciar o RViz |

## Tópicos de Comando de Baixo Nível

O workspace ROS2 também fornece tópicos de depuração de motor de baixo nível:

| API | Tipo | Descrição |
|---|---|---|
| `/rebotarm/joints/<joint>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando bruto MIT de junta única |
| `/rebotarm/joints/<joint>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando bruto de posição-velocidade de junta única |
| `/rebotarm/joints/<joint>/cmd/vel` | `rebotarm_msgs/msg/JointVelCmd` | Comando bruto de velocidade de junta única |
| `/rebotarm/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando bruto MIT do gripper |
| `/rebotarm/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando bruto de posição-velocidade do gripper |
| `/rebotarm/gripper/cmd/vel` | `rebotarm_msgs/msg/JointVelCmd` | Comando bruto de velocidade do gripper |

:::caution
Os tópicos de comando de baixo nível são destinados a depuração e experimentos. Eles não executam IK, planejamento de trajetória ou verificações de limites de URDF. Para movimento em nível de aplicação, prefira serviços e ações como `/move_to_pose`, `/follow_joint_trajectory` e `/gripper/set`.
:::

## MoveIt 2

MoveIt 2 é o framework de planejamento de movimento usado aqui para cinemática inversa, verificação de colisão, planejamento de trajetória e execução. As demos são separadas em seu próprio pacote para que os fluxos de aplicação permaneçam isolados do driver base.
Para mais detalhes, consulte a [Documentação oficial do MoveIt 2](https://moveit.picknik.ai/main/index.html).

O conteúdo relacionado ao MoveIt é dividido em dois pacotes:

| Pacote | Finalidade |
|---|---|
| `rebotarm_moveit_config` | Modelo do robô, SRDF, cinemática, limites de juntas, configuração de controladores e do RViz |
| `rebotarm_moveit_demos` | Demos de aplicação baseadas em MoveIt 2 |

O ambiente MoveIt usa hardware simulado através de `ros2_control` e `move_group` para planejamento e execução. Ele é destinado a validar o modelo, IK, planejamento de trajetória e fluxo de demos no RViz.

Este repositório também oferece suporte a hardware real. Antes de conectar o hardware real, certifique-se de que a configuração de zero do braço, direções das juntas, limites de juntas, limites de velocidade e faixa do gripper estejam todos corretos, ou mantenha a configuração padrão do repositório.

### Configuração do Ambiente MoveIt

Primeiro, certifique-se de que o ambiente ROS2 esteja disponível. Você pode instalar pacotes para a distribuição ROS atualmente carregada através de `ROS_DISTRO`:

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

A configuração do MoveIt e as demos estão incluídas neste workspace. Após instalar as dependências, reconstrua o workspace:

```bash
cd your/path/to/rebotarm_ros2
colcon build --symlink-install
source install/setup.bash
```

Verifique os pacotes MoveIt e os pontos de entrada das demos:

```bash
ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos
```

As entradas esperadas incluem:

```text
rebotarm_moveit_demos draw_square
rebotarm_moveit_demos pick_place
```

### Usar o MoveIt

O planejamento com MoveIt pode ser usado pela interface gráfica do RViz ou por nós ROS, tanto em simulação quanto em cenas reais.

#### Usar o MoveIt em simulação

O MoveIt usa a interface de hardware virtual do ros2_control para simulação no RViz:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py
```

Por padrão, isso inicia:

- `move_group`
- `robot_state_publisher`
- `ros2_control_node`
- `joint_state_broadcaster`
- `rebotarm_controller`
- `gripper_controller`
- RViz com o plugin MoveIt MotionPlanning

O RViz é aberto automaticamente e carrega o modelo URDF do robô. Você pode controlar o movimento pelo painel no lado esquerdo da interface gráfica.

Para executar o ambiente MoveIt sem o RViz:

```bash
ros2 launch rebotarm_moveit_config demo.launch.py use_rviz:=false
```

#### Usar o MoveIt com o hardware reBotArm

Para o robô real, primeiro inicie o controlador com a interface de hardware em vez do controlador virtual, depois inicie o ambiente MoveIt para hardware:

```bash
ros2 launch rebotarm_bringup driver.launch.py channel:=/dev/ttyACM0
```

Em outro terminal:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py
```

Reforçando: antes de executar qualquer demo em hardware real, certifique-se de que a área de trabalho esteja livre de pessoas e obstáculos, verifique o caminho planejado no RViz e esteja pronto para parar o controlador a qualquer momento.

### Executar a demo draw-square

Inicie primeiro o ambiente MoveIt e, em seguida, execute em outro terminal:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py
```

`draw_square` move `gripper_tcp` pelos quatro cantos de um retângulo coplanar.
Parâmetros padrão:

```text
src/rebotarm_moveit_demos/config/draw_square.yaml
```

Parâmetros comuns:

| Parâmetro | Descrição |
|---|---|
| `start_point` | Posição de reset das juntas antes do início da demonstração |
| `rectangle_center` | Centro do retângulo em `base_link` |
| `rectangle_width` / `rectangle_height` | Dimensões do retângulo em metros |
| `tcp_rpy` | Orientação do TCP, padrão para um gripper voltado para baixo |
| `tcp_yaw_offsets` | Valores alternativos de yaw de IK usados para evitar grandes voltas da junta6 |

### Executar a demonstração de pick-place

Inicie primeiro o ambiente MoveIt e, em seguida, execute em outro terminal:

```bash
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py
```

Parâmetros padrão:

```text
src/rebotarm_moveit_demos/config/pick_place.yaml
```

Parâmetros comuns:

| Parâmetro | Descrição |
|---|---|
| `ready_point` | Posição de junta de prontidão usada antes e depois de pick/place |
| `pick_position` | Posição inferior-central do objeto em `base_link` |
| `pick_tcp_rpy` / `place_tcp_rpy` | Orientação do TCP para pick e place |
| `object_dimensions` | Dimensões do objeto da planning-scene em metros |
| `max_gripper_width` | Abertura total máxima do gripper, padrão `0.09m` |
| `open_gripper_position` / `closed_gripper_position` | Posições de abertura/fechamento da junta do gripper de um lado simulado |
| `hardware_open_gripper_position` / `hardware_closed_gripper_position` | Posições de abertura/fechamento do motor do gripper de hardware |
| `grasp_gripper_to_object_width` | Calcula a posição de apreensão a partir da largura do objeto |

### Arquivos de configuração do MoveIt

| Arquivo | Descrição |
|---|---|
| `rebotarm_moveit_config/config/rebotarm.urdf.xacro` | Modelo de robô usado pelo MoveIt |
| `rebotarm_moveit_config/config/rebotarm.srdf` | Grupos do MoveIt, efetuador final e estados padrão |
| `rebotarm_moveit_config/config/kinematics.yaml` | Configuração do solucionador de IK |
| `rebotarm_moveit_config/config/joint_limits.yaml` | Limites de juntas usados pelo planejamento do MoveIt |
| `rebotarm_moveit_config/config/moveit_controllers.yaml` | Configuração do controlador de execução de trajetórias do MoveIt |
| `rebotarm_moveit_config/config/ros2_controllers.yaml` | Configuração de controladores do ros2_control |
| `rebotarm_moveit_config/config/initial_positions.yaml` | Posições iniciais das juntas para hardware simulado |
| `rebotarm_moveit_demos/config/draw_square.yaml` | Parâmetros da demonstração de desenho de quadrado |
| `rebotarm_moveit_demos/config/pick_place.yaml` | Parâmetros da demonstração de pick-place |

## FAQ

### 1. `open serial port /dev/ttyACM0 failed` aparece na inicialização

Isso significa que a porta serial padrão não existe ou o nome do dispositivo foi alterado. Primeiro verifique o dispositivo serial real:

```bash
ls /dev/ttyACM*
```

Em seguida, especifique-o com `channel`:

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM1
```

### 2. `Device or resource busy` aparece na inicialização

Isso significa que a porta serial já está ocupada por outro processo. Causas comuns incluem um nó ROS2 iniciado anteriormente, um exemplo do SDK ou um script de depuração que não foi encerrado. Verifique primeiro os processos:

```bash
ps aux | grep -E "reBotArmController|ros2|python"
```

Pare o processo que está ocupando a porta serial e reinicie. O braço e o gripper devem compartilhar o mesmo controlador de baixo nível. Não abra a mesma porta serial separadamente para o braço e o gripper.

### 3. Permissão negada

Se o dispositivo serial existir, mas a permissão for negada:

```bash
sudo usermod -a -G dialout $USER
```

Saia da sessão e entre novamente para que a alteração tenha efeito. Para depuração temporária, você também pode executar:

```bash
sudo chmod 666 /dev/ttyACM0
```

### 4. O modelo do robô não é exibido no RViz

Verifique o seguinte:

- Se o workspace foi carregado com `source install/setup.bash`
- Se `Fixed Frame` está definido como `base_link`
- Se `robot_state_publisher` foi iniciado corretamente
- Se o caminho da malha URDF é `package://rebotarm_bringup/description/meshes/...`

### 5. Aviso de porta FastDDS SHM aparece

Se o terminal mostrar algo como:

```text
[RTPS_TRANSPORT_SHM Error] Failed init_port fastrtps_port7002: open_and_lock_file failed
```

Isso geralmente é causado por arquivos de bloqueio de memória compartilhada do FastDDS remanescentes após um processo ROS2 anterior ter sido encerrado de forma anormal. Se serviços e ações ainda responderem normalmente, esse aviso geralmente não afeta o controle.

Para limpar, pare primeiro os processos ROS2 relacionados e, em seguida, execute:

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

Usuários do Humble podem seguir o mesmo fluxo de trabalho, substituir `jazzy` por `humble` nos comandos e instalar as dependências correspondentes de acordo com a documentação oficial do Humble. Após alternar as distribuições ROS2, execute `colcon build` novamente.

### 7. `pinocchio` não pode ser encontrado

Se um nó ou comando de verificação relatar:

```text
ModuleNotFoundError: No module named 'pinocchio'
```

Primeiro, certifique-se de que o pacote Pinocchio para sua distribuição ROS2 esteja instalado:

```bash
sudo apt install -y ros-jazzy-pinocchio
```

Em seguida, certifique-se de que o terminal atual carregou o ambiente ROS2:

```bash
source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"
```

Se ainda assim não puder ser encontrado, verifique se o caminho de busca do Python atual contém o caminho do pacote Python do ROS2:

```bash
python3 -c "import sys; print('\n'.join(sys.path))"
```

Após carregar o Jazzy, você deverá ver um caminho semelhante a
`/opt/ros/jazzy/lib/python3.12/site-packages`. Se você usar Humble, substitua `jazzy` por
`humble` nos comandos.

## Contato

- Suporte técnico: [Submit an Issue](https://github.com/Seeed-Projects/reBotArmController_ROS2/issues)
- Repositório do projeto: [Github](https://github.com/Seeed-Projects/reBotArmController_ROS2)
- Fórum: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## Referências

- [Introdução ao reBot Arm B601-DM](https://wiki.seeedstudio.com/pt-br/rebot_b601_dm_getting_started/)
- [Demonstração de apreensão visual do reBot Arm B601-DM](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_grasping_demo/)
- [reBot Arm B601-DM Pinocchio e MeshCat](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/)
- [Tutorial reBot Arm B601-DM LeRobot](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_lerobot/)
- [Documentação do ROS2 Humble](https://docs.ros.org/en/humble/)
- [Documentação do ROS2 Jazzy](https://docs.ros.org/en/jazzy/)
- [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py)
