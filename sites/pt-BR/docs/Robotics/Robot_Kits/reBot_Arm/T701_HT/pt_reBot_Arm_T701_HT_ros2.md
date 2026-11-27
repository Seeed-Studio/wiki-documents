---
title: reBot Arm T701 HT ROS 2 SDK
sidebar_label: ROS 2 SDK
toc_max_heading_level: 2
description: Instale o T701-HT ROS 2 SDK no Ubuntu 22.04 com ROS 2 Humble, use o RViz2 e exemplos de simulação cinemática ou de hardware e controle os braços por meio de tópicos, serviços e uma ação de trajetória.
keywords:
  - reBot
  - T701 HT
  - ROS 2
  - Humble
  - RViz2
  - QP IK
slug: /rebot_t701_ht_ros2
translation:
  skip: [zh-CN]
last_update:
  date: 11/24/2026
  author: liujunjie
---

import '/src/css/rebot-wiki-style.css';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reBot Arm T701 HT ROS 2 SDK

<div className="rebot-page">

<div align="center">
  <img
    width={800}
    height={586}
    style={{ height: 'auto', aspectRatio: '800 / 586', objectFit: 'contain', backgroundColor: '#000' }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp"
    alt="reBot Arm T701 HT bimanual robot"
  />
</div>

<GitHubStarButton
  owner="Welt-liu"
  repo="T701_ROS2_SDK"
  fallbackCount={0}
  ariaLabel="Star T701-HT ROS 2 SDK on GitHub"
/>

O T701-HT ROS 2 SDK oferece controle de juntas, trajetórias multiponto, cinemática inversa QP, controle de garra, homing e freio de amortecimento. Comece com o RViz2 e os exemplos sem conectar um robô, depois mude para o hardware e envie comandos a partir dos seus próprios nós ROS 2.

O [repositório do SDK](https://github.com/Welt-liu/T701_ROS2_SDK) inclui código-fonte, o modelo, wheels de dependências e READMEs em chinês e inglês. Execute todos os comandos desta página a partir do **diretório raiz `T701_ROS2_SDK`** que contém `start.sh`.

:::note[Instale separadamente do Python SDK]

Este capítulo usa o Python 3.10 do sistema e o `.venv` do SDK; você não precisa ativar o ambiente Conda `t701-ht` do Guia de Início Rápido. Execute apenas um SDK por vez em uma placa de comunicação. As páginas existentes de [Pinocchio](./reBot_Arm_T701_HT_pinocchio.md) e [Teleoperação em VR](./reBot_Arm_T701_HT_vr.md) descrevem exemplos do Python SDK. Este pacote ROS 2 não inclui um receptor de entrada de VR, MoveIt, um plugin `ros2_control` ou simulação física no Gazebo.

:::

<section className="section-card">

## Instalar e compilar

### Instalar dependências do sistema

| Item de ambiente | Requisito |
| --- | --- |
| Sistema operacional | Ubuntu 22.04 |
| Versão do ROS | ROS 2 Humble |
| Python | Python 3.10 do sistema com o `.venv` do SDK |
| Arquitetura do processador | Linux x86_64 ou ARM64 |
| Modelo e bibliotecas numéricas | Pinocchio e FCL via apt, além de NumPy 1.x; exigidos tanto para simulação quanto para hardware |

Configure o repositório do ROS usando as [instruções oficiais de instalação do ROS 2 Humble](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html) e depois instale as dependências:

```bash
sudo apt update
sudo apt install python3-venv python3-pip python3-pytest \
  python3-colcon-common-extensions python3-numpy python3-scipy python3-yaml \
  python3-jinja2 python3-joblib \
  ros-humble-desktop ros-humble-control-msgs ros-humble-diagnostic-msgs \
  ros-humble-pinocchio ros-humble-hpp-fcl
```

Pinocchio e FCL fornecem cinemática, cálculo de gravidade e verificações de colisão de malha. Tanto a simulação quanto o hardware precisam deles. Use as bibliotecas de modelo via apt e o NumPy 1.x descritos aqui em vez de reutilizar o ambiente Conda do Python SDK.

### Obter o SDK

```bash
git clone https://github.com/Welt-liu/T701_ROS2_SDK.git
cd T701_ROS2_SDK
```

### Criar o ambiente e compilar

```bash
python3.10 -m venv --system-site-packages .venv
.venv/bin/python -m pip install \
  'numpy>=1.23,<2' 'scipy>=1.9,<2' 'PyYAML>=6,<7' 'osqp>=1,<2' pytest
./build.sh
```

`build.sh` e `start.sh` carregam o ROS 2 Humble e este workspace. Após a configuração inicial, use `start.sh` para a operação diária. Recrie o `.venv` e recompile depois de mover o diretório ou copiá-lo para outro computador. A simulação não precisa do SDK de motor; consulte a aba **Connect hardware** abaixo para a instalação dele.

</section>

<section className="section-card">

## Escolher um modo de execução

| Comparação | Simulação `sim` | Hardware `real` |
| --- | --- | --- |
| Conexão do robô | Nenhum robô ou placa de comunicação necessária | Ligue o robô e conecte a placa de comunicação |
| SDK de motor | Não é necessário | Instale o wheel para a arquitetura do seu computador |
| Movimento habilitado na inicialização | Habilitado automaticamente | Desabilitado por padrão; verifique o feedback antes de habilitar |
| Domínio de comunicação padrão | `20` | `21` |

Abra dois terminais: **mantenha o driver em execução no terminal A e execute os exemplos no terminal B**. Ambos os terminais devem estar na raiz do SDK e usar o mesmo prefixo `sim` ou `real`. Escolha os exemplos de que você precisa e execute um por vez.

<Tabs defaultValue="sim" groupId="t701-ros2-mode">
<TabItem value="sim" label="Simulação e RViz2">

Nenhuma conexão com o robô é necessária. A simulação atualiza os estados das juntas a partir dos comandos para exibição do modelo e prática da interface ROS. Ela não simula dinâmica, contato ou queda sob gravidade.

### Terminal A: iniciar a simulação

```bash
./start.sh sim arms:=dual
```

Mantenha este terminal em execução. Defina o Fixed Frame do RViz2 como `base_link`; o modelo deve ser atualizado durante os exemplos. Para usar um braço, feche o driver atual e substitua `arms:=dual` por `arms:=left` ou `arms:=right`.

### Terminal B: ler estado

```bash
./start.sh sim demo --mode state --duration 5
```

Leia uma vez a posição, velocidade e torque das juntas e a pose da ferramenta esquerda:

```bash
./start.sh sim topic echo /t701_ht/motor_states --once
./start.sh sim topic echo /t701_ht/left_tool_pose --once
```

### Terminal B: executar exemplos de movimento

| Exemplo | Comportamento esperado | Parâmetros e seleção de braço |
| --- | --- | --- |
| Movimento de junta | J1 de cada braço selecionado se move para frente e para trás a partir de sua posição atual | Amplitude de `0.10 rad` ao longo de `5 s` |
| Trajetória multiponto | Executa quatro pequenos segmentos de trajetória a partir da posição atual | Tempo de movimento de `8 s` |
| Cinemática inversa QP | Gera um alvo de ferramenta próximo a partir da pose atual, resolve e verifica a chegada medida | O exemplo usa o braço esquerdo; use `--side right` com o braço direito ou com ambos os braços selecionados pelo driver |
| Controle da garra (atualmente sem efeito visível) | Apenas define um alvo simulado interno. O modelo atual não mostra o movimento dos dedos, portanto a abertura ou a preensão não podem ser verificadas | Alvo esquerdo `0.4 rad`, observado por `5 s` por padrão; use `--side right` para a garra direita |

Cada bloco de comando abaixo executa um exemplo.

**Movimento de junta**

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode joint --duration 5 --amplitude 0.10
```

**Trajetória multiponto**

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode trajectory --duration 8 --amplitude 0.10
```

**Cinemática inversa QP**

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode ik --side left
```

**Controle da garra (atualmente sem efeito visível)**

:::info[Limitação atual da simulação]

A garra é exibida como um único modelo rígido de efetuador final, sem juntas de dedos separadas. Este exemplo apenas define um alvo simulado interno; o RViz2 não mostra movimento de abertura ou fechamento. Os estados das juntas do braço impressos no terminal também omitem a posição da garra, portanto não podem verificar largura de abertura, chegada ao alvo ou preensão. Essa limitação se aplica ao exemplo `sim` atual.

:::

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode gripper --side left --gripper 0.4
```

Esses exemplos de movimento retornam à posição inicial (home) e aplicam freio de amortecimento ao concluir, portanto habilite o controle antes de cada novo exemplo. Os valores `--duration` de junta e trajetória excluem o tempo final de homing. O RViz2 não anima a abertura e o fechamento individuais dos dedos da garra.

### Terminal B: retornar à posição inicial e parar

Para solicitar um retorno ao zero separado:

```bash
./start.sh sim demo --mode enable
./start.sh sim demo --mode home
```

Para parar o movimento simulado imediatamente e desabilitar o controle:

```bash
./start.sh sim demo --mode stop
```

</TabItem>
<TabItem value="real" label="Connect hardware">

Siga o [Guia de Início Rápido](./reBot_Arm_T701_HT_Getting_Started.md) para montar e ligar o robô e verificar suas posições zero. Este capítulo usa o diretório e a configuração separados do ROS 2 SDK.

:::warning[Primeira execução em hardware]

Fixe o robô, remova qualquer carga e desobstrua sua faixa de movimento e o caminho de retorno ao zero. Comece com um braço e supervisione a execução. Verifique o feedback após iniciar o driver antes de habilitar o movimento.

:::

### Instalar o SDK de motor

Escolha um comando para a arquitetura do seu computador. Instale apenas uma vez.

Linux x86_64, Python 3.10:

```bash
.venv/bin/python -m pip install hardware_wheels/hightorque_robot-1.2.0-cp310-cp310-linux_x86_64.whl
```

Linux ARM64, Python 3.10:

```bash
.venv/bin/python -m pip install hardware_wheels/hightorque_robot-1.0.0-cp310-cp310-linux_aarch64.whl
```

### Verificar cabeamento e portas seriais

| Conexão | Porta |
| --- | --- |
| Braço esquerdo | CAN1 na placa de comunicação |
| Braço direito | CAN2 na placa de comunicação |
| Computador | Conexão USB à placa de comunicação |

Verifique a identidade USB da placa e defina `board_serial` em `src/t701_ht_description/config/serial_binding.yaml` para o número de série real dela. O driver resolve as portas pela identidade da placa, portanto mudanças na enumeração ACM não exigem alterações manuais de configuração.

```bash
ls -l /dev/serial/by-id/
ls -l /dev/ttyACM*
id -nG
```

Se o seu usuário não estiver no grupo `dialout`, execute o comando a seguir, depois saia da sessão gráfica e entre novamente:

```bash
sudo usermod -aG dialout "$USER"
```

### Terminal A: iniciar o driver de hardware

Use o braço esquerdo para a primeira execução:

```bash
./start.sh real arms:=left
```

Use `arms:=right` para o braço direito ou `arms:=dual` para ambos. Feche o driver atual antes de alterar a seleção de braço. A inicialização lê o feedback com o movimento desabilitado por padrão; mantenha o terminal A em execução.

### Terminal B: verificar feedback

```bash
./start.sh real demo --mode state --duration 5
./start.sh real topic echo /t701_ht/motor_states --once
./start.sh real topic echo /diagnostics --once
```

Verifique o feedback de juntas e os diagnósticos do braço selecionado antes de executar um exemplo de movimento. Use o exemplo de garra abaixo para observar a resposta física da garra.

### Terminal B: executar exemplos de movimento

| Exemplo | Comportamento esperado | Parâmetros e seleção de braço |
| --- | --- | --- |
| Movimento de junta | J1 de cada braço selecionado se move para frente e para trás a partir de sua posição atual | Amplitude de `0.10 rad` ao longo de `5 s` |
| Trajetória multiponto | Executa quatro pequenos segmentos de trajetória a partir da posição atual | Tempo de movimento de `8 s` |
| Cinemática inversa QP | Gera um alvo de ferramenta próximo a partir da pose atual, resolve e verifica a chegada medida | O exemplo usa o braço esquerdo; use `--side right` com o braço direito ou com ambos os braços selecionados pelo driver |
| Controle da garra | Define um alvo de motor da garra e observe sua resposta | Alvo esquerdo `0.4 rad`, observado por `5 s` por padrão; use `--side right` para a garra direita |

Cada bloco de comando abaixo executa um exemplo.

**Movimento das juntas**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode joint --duration 5 --amplitude 0.10
```

**Trajetória multiponto**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode trajectory --duration 8 --amplitude 0.10
```

**Cinemática inversa QP**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode ik --side left
```

**Controle do gripper**

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode gripper --side left --gripper 0.4
```

Ao concluir, esses exemplos de movimento retornam as juntas e os grippers de todos os braços selecionados pelo driver para zero e, em seguida, aplicam o freio de amortecimento. Habilite o controle novamente antes de cada novo exemplo. Os tempos de movimento de juntas e trajetórias excluem o homing.

### Terminal B: homing e parada

Para solicitar um retorno a zero separado:

```bash
./start.sh real demo --mode enable
./start.sh real demo --mode home
```

Para solicitar freio de amortecimento do motor imediatamente e desabilitar o controle sem seguir o caminho de homing:

```bash
./start.sh real demo --mode stop
```

</TabItem>
</Tabs>

| Parâmetro | Finalidade | Faixa ou comportamento |
| --- | --- | --- |
| `arms` | Selecionar braços na inicialização do driver para movimento de juntas, trajetórias multiponto e homing | `left`, `right` ou `dual` |
| `--side` | Selecionar o lado da IK ou do gripper | `left` ou `right`; o driver deve ter iniciado esse lado |
| `--amplitude` | Amplitude dos exemplos de juntas e trajetórias | `(0, 0.20]` rad |
| `--gripper` | Alvo de ângulo do motor do gripper | `[-0.2, 2.2]` rad |
| `--duration` | Tempo de movimento de juntas e trajetórias, ou tempo de observação de estado e gripper | Os tempos de juntas e trajetórias excluem o homing final. A IK termina com base em verificações de chegada em vez dessa duração |

No modo de dois braços, o movimento das juntas é executado em ambos os braços juntos, com o sinal de J1 direito invertido. Durante o exemplo de IK, o outro braço mantém sua posição atual.

</section>

<section className="section-card">

## RViz2 e operação sem interface gráfica

<div className="image-frame">

![Modelo do T701-HT ROS 2 SDK e frames de coordenadas no RViz2](https://raw.githubusercontent.com/Welt-liu/T701_ROS2_SDK/main/assets/docs/rviz_overview.png)

</div>

| Configuração do RViz2 | Valor ou ação | Finalidade |
| --- | --- | --- |
| Fixed Frame | `base_link` | Usar a base do robô como frame de referência de exibição |
| TF | Enable | Exibir frames de coordenadas |
| RobotModel → Collision Enabled | Enable | Exibir malhas de colisão |

O modo de hardware usa feedback medido das juntas; a simulação usa estados de juntas simulados.

Em um computador sem desktop gráfico, inicie o driver no terminal A sem RViz2:

```bash
./start.sh sim arms:=dual rviz:=false
```

Para hardware, use `./start.sh real arms:=left rviz:=false`. Com o driver já em execução, abra o RViz2 separadamente em outro terminal:

```bash
./start.sh sim run rviz2 rviz2 -d src/t701_ht_ros2/config/t701_ht.rviz
```

Use o prefixo `real` para hardware. Se GLX/OpenGL falhar, feche o driver original e reinicie com `T701_HT_SOFTWARE_RENDERING=1 ./start.sh sim` ou o comando `real` correspondente.

Quando o driver e o RViz2 são executados em computadores separados, use o mesmo modo de SDK e domínio de comunicação em ambos. Defina `export ROS_LOCALHOST_ONLY=0` antes da inicialização e permita a comunicação DDS pela LAN. Inicie apenas um driver.

</section>

<section className="section-card">

## Conecte seu programa ROS 2

### Interfaces comuns

| Interface | Tipo de mensagem | Finalidade |
| --- | --- | --- |
| `/joint_states` | `sensor_msgs/msg/JointState` | Estado em coordenadas URDF para TF e RViz2 |
| `/t701_ht/motor_states` | `sensor_msgs/msg/JointState` | Posição, velocidade e torque das juntas em coordenadas de motor |
| `/t701_ht/joint_command` | `sensor_msgs/msg/JointState` | Alvos completos de juntas para os braços selecionados |
| `/t701_ht/follow_joint_trajectory` | `control_msgs/action/FollowJointTrajectory` | Trajetórias multiponto, feedback, resultados e cancelamento |
| `/t701_ht/left_tool_pose`, `/t701_ht/right_tool_pose` | `geometry_msgs/msg/PoseStamped` | Poses medidas da ferramenta |
| `/t701_ht/left_target_pose`, `/t701_ht/right_target_pose` | `geometry_msgs/msg/PoseStamped` | Alvos de ferramenta QP |
| `/t701_ht/left_gripper`, `/t701_ht/right_gripper` | `std_msgs/msg/Float64` | Alvos de ângulo do motor do gripper |
| `/t701_ht/home`, `/t701_ht/stop` | `std_srvs/srv/Trigger` | Solicitar homing ou freio de amortecimento imediato |
| `/t701_ht/set_enabled` | `std_srvs/srv/SetBool` | Habilitar ou desabilitar movimento |
| `/diagnostics` | `diagnostic_msgs/msg/DiagnosticArray` | Modo, estado de habilitação, objetivo ativo e erros |

O modo de braço único cria apenas as interfaces de ferramenta e gripper do lado selecionado. Posição, velocidade e torque do motor usam rad, rad/s e N·m; posições da ferramenta usam metros.

:::note[Coordenadas do motor e do modelo]

Comandos de juntas usam `left_joint1` até `left_joint7` e `right_joint1` até `right_joint7`. `/joint_states` usa nomes URDF como `A_l_joint1_link` com sinais de eixo já convertidos; não o envie sem alterações como comando de motor. Cada comando de junta deve incluir todas as juntas selecionadas pelo driver: 14 juntas no modo de dois braços.

:::

### Enviar um alvo de juntas

Este exemplo requer um **driver de simulação do braço esquerdo**. Feche o driver atual e, em seguida, execute no terminal A:

```bash
./start.sh sim arms:=left
```

Envie um alvo de sete eixos a partir do terminal B. O tempo padrão de transição suave é de 2 segundos:

```bash
./start.sh sim demo --mode enable
./start.sh sim topic pub --once /t701_ht/joint_command sensor_msgs/msg/JointState \
  '{name: [left_joint1, left_joint2, left_joint3, left_joint4, left_joint5, left_joint6, left_joint7], position: [0.10, 0, 0, 0, 0, 0, 0]}'
```

Alvos diretos por tópico e ações de trajetória mantêm seus pontos finais após a conclusão. Execute `./start.sh sim demo --mode home` quando quiser retornar a zero. Consulte o [SDK README standard ROS commands](https://github.com/Welt-liu/T701_ROS2_SDK/blob/main/README_EN.md) para exemplos completos de dois braços, ação de trajetória e mensagens de pose QP.

Alvos de pose são expressos em `base_link`, com quaternions normalizados na ordem x, y, z, w. Apenas uma tarefa de movimento é executada por vez; essa interface não é um receptor direto para alvos de teleoperação contínua em alta taxa.

</section>

<section className="section-card">

## Parâmetros de inicialização e desligamento

| Parâmetro | Padrão | Descrição |
| --- | --- | --- |
| `arms` | `dual` | `left`, `right` ou `dual` |
| `rviz` | `true` | Iniciar RViz2 |
| `state_rate` | `50.0` | Taxa de controle e publicação de estado, de 5 a 100 Hz |
| `enable_on_start` | `false` | Habilitar movimento na inicialização de hardware; a simulação habilita automaticamente |

Reinicie o driver após alterar parâmetros. Executar `./start.sh` sem argumentos inicia a simulação, e os exemplos verificam o modo do driver.

| Modo | Domínio de comunicação padrão | Variável de ambiente para personalização |
| --- | --- | --- |
| Simulação | `20` | `T701_HT_SIM_DOMAIN_ID` |
| Hardware | `21` | `T701_HT_REAL_DOMAIN_ID` |

Para vários robôs, defina valores correspondentes de variáveis de ambiente nos terminais relevantes. Os valores de simulação e hardware devem ser diferentes e estar na faixa de 0–232.

| Gatilho | Comportamento do driver | Observações |
| --- | --- | --- |
| Exemplo de juntas, trajetória, IK ou gripper concluído | Retornar ao home, aplicar freio de amortecimento e, em seguida, desabilitar o movimento | Reabilite antes do próximo movimento |
| Primeiro Ctrl+C no terminal B | Solicitar que o movimento atual termine e retorne ao home | Mantenha o terminal A em execução até que as ações de desligamento terminem |
| Ctrl+C no terminal A | Retornar ao home e frear antes de sair quando as condições permitirem | O controle deve estar habilitado, o feedback válido e o caminho de homing verificado |
| Segunda interrupção | Solicitar freio de amortecimento imediatamente | Parar de aguardar o homing |
| Parada ou desabilitação explícita | Solicitar freio de amortecimento imediatamente | Não seguir o caminho de homing |
| Cancelamento de trajetória | Encerrar a trajetória original e solicitar homing | Confirme a conclusão do homing a partir do estado real |

Uma resposta de serviço com `success: true` significa que a solicitação foi aceita; confirme a conclusão real do homing a partir do estado das juntas e do diagnóstico com `mode=braked`.

As verificações de geometria padrão cobrem autocolisão dos braços selecionados, colisões com o corpo e colisões entre braços no modo de dois braços. O modo de braço único não verifica o outro braço. Dedos, cabos e obstáculos externos estão ausentes do modelo, e verificações discretas de malha não representam uma distância de parada medida. Feedback inválido ou um caminho de homing rejeitado relatam um erro e tentam frear em vez de relatar homing bem-sucedido.

</section>

<section className="section-card">

## Solução de problemas

| Sintoma | Ação |
| --- | --- |
| `ros2` ou `rclpy` ausente | Verifique a instalação do ROS 2 Humble e reconstrua usando o ambiente Python 3.10 do sistema deste capítulo |
| Erro de importação de extensão NumPy ou Python | Use NumPy 1.x, mantenha o Conda separado das bibliotecas nativas do ROS e recrie `.venv` na raiz do SDK |
| `control is disabled` | Execute `demo --mode enable` no terminal B usando o mesmo modo. Reabilite após cada exemplo que faz homing e freia |
| Driver ausente ou exemplo relata incompatibilidade de modo | Mantenha o terminal A em execução e combine o prefixo `sim` / `real` e o domínio de comunicação em ambos os terminais |
| Erro de SDK do motor, porta serial ou identidade USB | Instale o wheel para sua arquitetura e verifique a fiação, `board_serial` e permissões `dialout` |
| RViz2 sem modelo ou relatando erro de TF | Verifique `/joint_states` e `/robot_description`, e use `base_link` como Fixed Frame |
| Trajetória rejeitada ou QP não converge | Verifique nomes de juntas, contagem completa de juntas, temporização, limites, frame de pose e diagnósticos. Comece com os pequenos exemplos desta página |

</section>

</div>
