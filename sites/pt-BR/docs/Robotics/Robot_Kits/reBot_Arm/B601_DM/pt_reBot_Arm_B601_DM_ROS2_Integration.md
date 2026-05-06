---
description: Este tutorial mostra como configurar o workspace de controle ROS2 para o reBot Arm B601-DM, incluindo controle do braço, controle da garra, interfaces de trajetória, compensação de gravidade e visualização no RViz.
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
  date: 2026-04-29
  author: YinHaizhou
translation:
  skip:
    - [zh-CN]
createdAt: '2026-04-29'
updatedAt: '2026-04-29'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_ros2_integration/
---

# Guia de Integração do reBot Arm B601-DM com ROS2

<p align="center">
  <img src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</p>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/ROS2-Jazzy-blue.svg" alt="ROS2 Jazzy" />
    <img src="https://img.shields.io/badge/Python-3.10%2B-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2024.04-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Hardware-B601--DM-lightgrey.svg" alt="Hardware" />
</p>

<p align="center">
  <strong>ROS2 Control · Controle da Garra · Interface de Trajetória Padrão · Compensação de Gravidade · Visualização no RViz · Totalmente Open Source</strong>
</p>

Este tutorial mostra como executar o workspace de controle ROS2 `rebotarm_ros2` para o reBot Arm B601-DM. O workspace encapsula o SDK Python de baixo nível `reBotArm_control_py` em tópicos, serviços e ações ROS2, facilitando a integração com planejamento de alto nível, preensão visual, visualização no RViz e desenvolvimento de aplicações personalizadas.

:::note
Este tutorial usa `Ubuntu 24.04 + ROS2 Jazzy + Python 3.12` como ambiente de referência principal. ROS2 Humble / Ubuntu 22.04 podem seguir o mesmo fluxo de trabalho com a distribuição ROS2 correspondente.
:::

## Recursos do Projeto

1. **Interfaces ROS2 Padrão**  
   Fornece interfaces ROS2 comuns como `/joint_states`, `FollowJointTrajectory`, `GripperCommand` e `MoveToPose`, facilitando a integração com MoveIt2, pipelines de preensão visual ou sistemas em nível de tarefa.

2. **Nós de Cinemática, Trajetória e Compensação de Gravidade Prontos para Uso**  
   Fornece cinemática direta/inversa, execução de trajetória, compensação de gravidade e suporte de visualização no RViz prontos para uso.

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
| Adaptador de Energia (24V) | 1 | ✅ |
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
faça source em `/opt/ros/humble/setup.bash`.

### Etapa 3. Clonar o Repositório de Código

Use por padrão o repositório oficial Seeed-Projects:

```bash
mkdir -p ~/seeed
cd ~/seeed
git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2
```

Você também pode usar o repositório de desenvolvimento atual:

```bash
mkdir -p ~/seeed
cd ~/seeed
git clone https://github.com/EclipseaHime017/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2
```

### Etapa 4. Instalar motorbridge

Instale `motorbridge` a partir da fonte oficial do PyPI:

```bash
python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge
```

### Etapa 5. Obter o SDK de Baixo Nível

```bash
cd ~/seeed/rebotarm_ros2
mkdir -p third_party
git clone https://github.com/vectorBH6/reBotArm_control_py.git third_party/reBotArm_control_py
```

### Etapa 6. Compilar o Workspace

```bash
cd ~/seeed/rebotarm_ros2
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

### Iniciar o Sistema Completo

O bringup completo inicia:

- Nó de controle `reBotArmController`
- `robot_state_publisher`
- RViz opcional

```bash
cd ~/seeed/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0
```

Se a sua porta serial não for `/dev/ttyACM0`, substitua-a pelo nome real do dispositivo:

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM1
```

### Iniciar a Visualização no RViz

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0 use_rviz:=true
```

Se o modelo parecer muito pequeno no RViz, ajuste a visualização no painel `Views` à esquerda:

- Defina `Target Frame` como `base_link`
- Ajuste `Distance`, por exemplo para `1.0` ou `1.5`
- Use a roda do mouse para dar zoom
- Confirme que `Fixed Frame` está definido como `base_link`

### Iniciar Apenas o Nó de Controle

Se URDF e RViz não forem necessários:

```bash
ros2 launch rebotarm_bringup driver_only.launch.py channel:=/dev/ttyACM0
```

Você também pode executar o nó diretamente:

```bash
ros2 run rebotarmcontroller reBotArmController
```

## Namespace ROS2

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

Se você precisar de múltiplos braços robóticos ou quiser executar em paralelo com outros sistemas ROS2, pode alterar o namespace em tempo de lançamento:

```bash
ros2 launch rebotarm_bringup bringup.launch.py arm_namespace:=left_arm
```

Nesse caso, `/rebotarm/joint_states` se torna `/left_arm/joint_states`. O namespace afeta apenas os nomes de tópicos, serviços e ações no grafo ROS. Ele não altera automaticamente os nomes dos frames TF no URDF.

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
| `/rebotarm/enable` | `std_srvs/srv/Trigger` | Habilitar o braço robótico |
| `/rebotarm/disable` | `std_srvs/srv/Trigger` | Desabilitar o braço robótico |
| `/rebotarm/safe_home` | `std_srvs/srv/Trigger` | Voltar para a posição inicial segura |
| `/rebotarm/set_mode` | `rebotarm_msgs/srv/SetMode` | Alternar entre `mit`, `pos_vel` e `vel` |
| `/rebotarm/set_zero` | `rebotarm_msgs/srv/SetZero` | Definir a posição zero para todas as juntas ou para uma única junta |
| `/rebotarm/move_to_pose_ik` | `rebotarm_msgs/srv/MoveToPoseIK` | Pré-verificação de IK e solução de juntas alvo |
| `/rebotarm/gripper/set` | `rebotarm_msgs/srv/SetGripper` | Definir a posição do motor da garra em rad |
| `/rebotarm/gravity_compensation/start` | `std_srvs/srv/Trigger` | Iniciar compensação de gravidade |
| `/rebotarm/gravity_compensation/stop` | `std_srvs/srv/Trigger` | Parar compensação de gravidade |

### Ações

| API | Tipo | Descrição |
|---|---|---|
| `/rebotarm/move_to_pose` | `rebotarm_msgs/action/MoveToPose` | Movimento de pose do efetuador final |
| `/rebotarm/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | Ponto de entrada padrão compatível com trajetória de juntas |
| `/rebotarm/gripper/command` | `control_msgs/action/GripperCommand` | Ação padrão da garra |

## Exemplos Básicos de Controle

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
cd ~/seeed/rebotarm_ros2
source /opt/ros/jazzy/setup.bash
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0
```

### Exemplo de Movimento das Juntas

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

O script primeiro chama `/rebotarm/enable`, depois inicia a compensação de gravidade. Quando você pressionar `Ctrl+C`, o script chama os seguintes serviços na ordem:

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

### Exemplo Interativo de Garra

```bash
ros2 run rebotarmcontroller GripperControl
```

Após o lançamento, digite:

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
| `arm.yaml` | Parâmetros de motor, ID de feedback e controle para as 6 juntas do braço |
| `gripper.yaml` | ID do motor da garra, ID de feedback, fornecedor e parâmetros de controle |
| `driver_params.yaml` | Exemplos de parâmetros ROS |

Parâmetros comuns de lançamento:

| Parâmetro | Padrão | Descrição |
|---|---|---|
| `arm_config` | `arm.yaml` interno do bringup | Caminho da configuração do braço |
| `gripper_config` | `gripper.yaml` interno do bringup | Caminho da configuração da garra |
| `channel` | String vazia | Usa YAML por padrão. Sobrescreve a porta serial quando não estiver vazia |
| `joint_state_rate` | `100.0` | Taxa de publicação de `/rebotarm/joint_states` |
| `cmd_arbitration` | `reject` | Política de arbitragem para comandos de baixo nível durante a execução de trajetórias |
| `arm_namespace` | `rebotarm` | Prefixo de namespace ROS |
| `frame_id` | `base_link` | Quadro base do braço robótico |
| `ee_frame_id` | `end_link` | Quadro do efetuador final |
| `use_rviz` | `false` | Se deve iniciar o RViz |

## Tópicos de Comando de Baixo Nível

O workspace ROS2 também fornece tópicos de depuração de motor de baixo nível:

| API | Tipo | Descrição |
|---|---|---|
| `/rebotarm/joints/<joint>/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando bruto MIT de junta única |
| `/rebotarm/joints/<joint>/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando bruto de posição-velocidade de junta única |
| `/rebotarm/joints/<joint>/cmd/vel` | `rebotarm_msgs/msg/JointVelCmd` | Comando bruto de velocidade de junta única |
| `/rebotarm/gripper/cmd/mit` | `rebotarm_msgs/msg/JointMitCmd` | Comando bruto MIT da garra |
| `/rebotarm/gripper/cmd/pos_vel` | `rebotarm_msgs/msg/JointPosVelCmd` | Comando bruto de posição-velocidade da garra |
| `/rebotarm/gripper/cmd/vel` | `rebotarm_msgs/msg/JointVelCmd` | Comando bruto de velocidade da garra |

:::caution
Os tópicos de comando de baixo nível são destinados a depuração e experimentos. Eles não executam IK, planejamento de trajetória ou verificações de limite de URDF. Para movimento em nível de aplicação, prefira serviços e ações como `/move_to_pose`, `/follow_joint_trajectory` e `/gripper/set`.
:::

## FAQ

### 1. `open serial port /dev/ttyACM0 failed` aparece na inicialização

Isso significa que a porta serial padrão não existe ou o nome do dispositivo foi alterado. Primeiro verifique o dispositivo serial real:

```bash
ls /dev/ttyACM*
```

Depois especifique-o com `channel`:

```bash
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM1
```

### 2. `Device or resource busy` aparece na inicialização

Isso significa que a porta serial já está ocupada por outro processo. Causas comuns incluem um nó ROS2 iniciado anteriormente, um exemplo de SDK ou um script de depuração que não foi encerrado. Verifique primeiro os processos:

```bash
ps aux | grep -E "reBotArmController|ros2|python"
```

Pare o processo que está ocupando a porta serial e reinicie. O braço e a garra devem compartilhar o mesmo controlador de baixo nível. Não abra a mesma porta serial separadamente para o braço e a garra.

### 3. Permissão negada

Se o dispositivo serial existir, mas a permissão for negada:

```bash
sudo usermod -a -G dialout $USER
```

Saia e entre novamente para que a alteração tenha efeito. Para depuração temporária, você também pode executar:

```bash
sudo chmod 666 /dev/ttyACM0
```

### 4. O modelo do robô não é exibido no RViz

Verifique o seguinte:

- Se o workspace foi carregado: `source install/setup.bash`
- Se `Fixed Frame` está definido como `base_link`
- Se `robot_state_publisher` iniciou corretamente
- Se o caminho da malha URDF é `package://rebotarm_bringup/description/meshes/...`

### 5. Aparece um aviso de porta FastDDS SHM

Se o terminal mostrar algo como:

```text
[RTPS_TRANSPORT_SHM Error] Failed init_port fastrtps_port7002: open_and_lock_file failed
```

Isso geralmente é causado por arquivos de bloqueio de memória compartilhada do FastDDS remanescentes após um processo ROS2 anterior ter sido encerrado de forma anormal. Se os serviços e ações ainda responderem normalmente, esse aviso geralmente não afeta o controle.

Para limpá-lo, pare primeiro os processos ROS2 relacionados e depois execute:

```bash
pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*
```

Se você quiser ignorar temporariamente o transporte de memória compartilhada, defina o seguinte antes de iniciar o ROS2:

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

Primeiro certifique-se de que o pacote Pinocchio para sua distribuição ROS2 esteja instalado:

```bash
sudo apt install -y ros-jazzy-pinocchio
```

Depois certifique-se de que o terminal atual carregou o ambiente ROS2:

```bash
source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"
```

Se ainda assim não puder ser encontrado, verifique se o caminho de busca atual do Python contém o caminho do pacote Python do ROS2:

```bash
python3 -c "import sys; print('\n'.join(sys.path))"
```

Após carregar o Jazzy, você deverá ver um caminho semelhante a
`/opt/ros/jazzy/lib/python3.12/site-packages`. Se você usar Humble, substitua `jazzy` por
`humble` nos comandos.

## Contato

- Suporte Técnico: [Submit an Issue](https://github.com/EclipseaHime017/reBotArmController_ROS2/issues)
- Repositório do Projeto: [Github](https://github.com/EclipseaHime017/reBotArmController_ROS2)
- Fórum: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## Referências

- [Introdução ao reBot Arm B601-DM](https://wiki.seeedstudio.com/pt-br/rebot_b601_dm_getting_started/)
- [Demonstração de Pega Visual do reBot Arm B601-DM](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_grasping_demo/)
- [reBot Arm B601-DM Pinocchio e MeshCat](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/)
- [Tutorial reBot Arm B601-DM LeRobot](https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_lerobot/)
- [Documentação do ROS2 Humble](https://docs.ros.org/en/humble/)
- [Documentação do ROS2 Jazzy](https://docs.ros.org/en/jazzy/)
- [reBotArm_control_py](https://github.com/vectorBH6/reBotArm_control_py)
