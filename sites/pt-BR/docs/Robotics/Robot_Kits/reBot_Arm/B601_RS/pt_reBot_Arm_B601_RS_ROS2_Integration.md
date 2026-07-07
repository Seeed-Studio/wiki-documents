---
description: Este tutorial mostra como configurar o workspace de controle ROS2 para o reBot Arm B601-RS, incluindo conexão SocketCAN, controle do braço, visualização no RViz e integração com o MoveIt 2.
title: Integração ROS2 do reBot Arm B601-RS
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
  date: 2026-07-05
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-10'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_rs_ros2_integration/
---

# Integração ROS2 do reBot Arm B601-RS

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>Construa um workspace de controle ROS2 para o B601-RS com SocketCAN, RViz e MoveIt 2</h2>
    <p>Este guia transforma a pilha de controle de baixo nível do B601-RS em um fluxo de trabalho ROS2. Você irá iniciar o SocketCAN, compilar o workspace ROS2, verificar tópicos e serviços, executar exemplos de controle seguro e, em seguida, passar da simulação no MoveIt 2 para a execução em hardware real.</p>
    <div className="hero-actions">
      <a href="#quick-start">Ver fluxo de trabalho</a>
      <a href="#install">Instalar workspace</a>
      <a href="#moveit">MoveIt 2</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/ros2/MoveIt2_RS.gif" alt="reBot Arm B601-RS ROS2 Integration" />
    <strong>B601-RS · ROS2 / MoveIt 2</strong>
    <span>Use primeiro a simulação. Execute em hardware real somente depois que o CAN, os estados das juntas e as trajetórias planejadas forem verificados.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Aviso de segurança: Limpe a área de trabalho do robô antes de executar</strong>
    <p>Antes de executar qualquer programa que mova o braço robótico, remova todos os itens de valor, objetos frágeis, ferramentas, cabos e objetos não relacionados dentro de um raio de <strong>1 metro</strong> da área de trabalho do robô. Durante a depuração e operação, o pessoal deve permanecer afastado da faixa de movimento do robô.</p>
    <ul>
      <li>Não toque nas juntas, motores, elos, garra ou efetuador final depois que o braço robótico estiver energizado.</li>
      <li>Antes de executar ações ROS2, execução do MoveIt, compensação de gravidade, controle de trajetória, teleoperação ou demonstrações de preensão visual, certifique-se de que o braço esteja firmemente fixado.</li>
      <li>Se ocorrer movimento anormal, ruído, vibração, cabos soltos, mau contato de energia ou perda de comunicação, pare o programa imediatamente e desligue o sistema antes da inspeção.</li>
      <li>Sempre desligue o sistema antes de conectar ou desconectar cabos de motor, cabos CAN, adaptadores PCAN-USB, conectores XT30 ou conectores de alimentação.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="quick navigation">
  <a href="#quick-start">Fluxo de trabalho</a>
  <a href="#overview">Visão geral</a>
  <a href="#install">Instalação</a>
  <a href="#bringup">Inicialização</a>
  <a href="#api">APIs</a>
  <a href="#examples">Exemplos</a>
  <a href="#moveit">MoveIt 2</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="quick-start" className="section-card">
  <div className="section-title">
    <span>Comece aqui</span>
    <h2>Fluxo de trabalho recomendado de inicialização ROS2</h2>
    <p>Siga a ordem abaixo para separar comunicação de hardware, interfaces ROS2 e execução no MoveIt. Isso torna as falhas mais fáceis de diagnosticar e reduz o risco de movimentos inseguros do robô.</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#install"><span>Step 0</span><strong>Concluir o início rápido do B601-RS</strong><p>Confirme a alimentação de 48 V, PCAN-USB / SocketCAN, posição zero, verificações do MotorBridge e testes básicos de movimento.</p><em>Obrigatório</em></a>
    <a className="path-card" href="#install"><span>Step 1</span><strong>Instalar ROS2 e compilar</strong><p>Instale as dependências do ROS2, clone o workspace do controlador, instale o MotorBridge e compile com colcon.</p><em>Workspace</em></a>
    <a className="path-card" href="#bringup"><span>Step 2</span><strong>Inicializar o driver</strong><p>Comece com o driver de hardware e verifique a comunicação CAN e os estados das juntas antes de adicionar RViz ou MoveIt.</p><em>Driver primeiro</em></a>
    <a className="path-card" href="#api"><span>Step 3</span><strong>Validar APIs ROS2</strong><p>Verifique tópicos, serviços e ações. Comece com status somente leitura e serviços seguros antes de ações de movimento.</p><em>Verificação</em></a>
    <a className="path-card" href="#examples"><span>Step 4</span><strong>Executar exemplos de controle</strong><p>Use pequenas posições, durações longas e comandos de retorno seguro antes de tentar trajetórias maiores.</p><em>Movimento seguro</em></a>
    <a className="path-card" href="#moveit"><span>Step 5</span><strong>Usar MoveIt 2</strong><p>Planeje em simulação, inspecione o caminho no RViz e só então execute no braço robótico real.</p><em>Avançado</em></a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Passos detalhados</span>
    <h2>Caminho de inicialização ROS2 passo a passo</h2>
    <p>Esta página é organizada como um fluxo de trabalho de inicialização progressivo. Cada etapa adiciona uma camada de complexidade.</p>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Step 0</span><strong>Preparar o robô</strong><p>Conclua o início rápido do B601-RS, incluindo alimentação de 48 V, cabeamento, posição zero, PCAN-USB e verificações básicas do MotorBridge.</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>Compilar o workspace ROS2</strong><p>Instale os pacotes ROS2, clone o workspace, instale o MotorBridge, adicione o SDK de baixo nível e compile com colcon.</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>Iniciar o driver de hardware</strong><p>Inicialize o <code>{`can0`}</code>, lance o driver do B601-RS e verifique se os estados das juntas estão sendo publicados.</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>Validar interfaces</strong><p>Confirme tópicos, serviços, ações, namespace, comandos da garra e comportamento de retorno seguro.</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>Executar exemplos seguros</strong><p>Use alvos conservadores de juntas e poses com durações longas antes de testar demonstrações de aplicação.</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>Planejamento com MoveIt 2</strong><p>Execute primeiro em simulação, depois conecte o hardware real e execute somente após verificar o caminho planejado.</p></div>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Visão geral</span>
    <h2>O que este workspace ROS2 oferece</h2>
    <p>O workspace encapsula a pilha de controle de baixo nível do B601-RS em interfaces ROS2 padrão para que o braço possa ser usado com RViz, MoveIt 2 e aplicações de robótica em nível de tarefa.</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Interfaces ROS2 padrão</b><span>Fornece tópicos como <code>{`/rebotarm/joint_states`}</code> e ações como <code>{`FollowJointTrajectory`}</code> e <code>{`MoveToPose`}</code>.</span></div>
    <div className="module-summary-card"><b>Suporte a SocketCAN</b><span>O B601-RS se comunica por CAN. O canal padrão é <code>{`can0`}</code>, configurado a 1 Mbps.</span></div>
    <div className="module-summary-card"><b>Visualização no RViz</b><span>Use o modelo URDF e os estados das juntas para inspecionar o estado do robô e depurar problemas de inicialização.</span></div>
    <div className="module-summary-card"><b>Integração com MoveIt 2</b><span>Use o MoveIt 2 para IK, verificação de colisão, planejamento de trajetória, execução simulada e execução em hardware real.</span></div>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>Especificações e requisitos</h2>
    <p>Confirme os requisitos de hardware e software do B601-RS antes de compilar o workspace ROS2.</p>
  </div>

  <div className="spec-grid">
    <div className="spec-card"><b>Braço robótico</b><span>reBot Arm B601-RS</span></div>
    <div className="spec-card"><b>Graus de liberdade</b><span>6-DOF + garra</span></div>
    <div className="spec-card"><b>Comunicação</b><span>CAN via SocketCAN</span></div>
    <div className="spec-card"><b>Canal CAN padrão</b><span><code>{`can0`}</code></span></div>
    <div className="spec-card"><b>Modo de controle padrão</b><span><code>{`mit`}</code></span></div>
    <div className="spec-card"><b>Sistema recomendado</b><span>Ubuntu 24.04 + ROS2 Jazzy + Python 3.12</span></div>
    <div className="spec-card"><b>Sistema de referência</b><span>Ubuntu 22.04 + ROS2 Humble + Python 3.10</span></div>
    <div className="spec-card"><b>Alimentação</b><span>Fonte de alimentação DC 48 V para o B601-RS</span></div>
  </div>

  <details className="content-details" open>
    <summary>Lista de materiais</summary>

    | Componente | Quantidade | Incluído |
    |---|---|---|
    | Braço robótico reBot Arm B601-RS | 1 | ✅ |
    | Garra | 1 | ✅ |
    | Adaptador CAN | 1 | ✅ |
    | Adaptador de energia | 1 | ✅ |
    | Cabo de comunicação | 1 | ✅ |
    | PC host com Ubuntu | 1 | Preparado pelo usuário |
  </details>

  <details className="content-details" open>
    <summary>Fiação e verificação do CAN</summary>

    <div className="step-card-grid compact-grid">
      <div className="step-card"><span className="step-mini">1</span><strong>Conectar o adaptador CAN</strong><p>Conecte o adaptador CAN ao barramento CAN do braço robótico.</p></div>
      <div className="step-card"><span className="step-mini">2</span><strong>Conectar a garra</strong><p>Conecte o motor da garra ao mesmo barramento CAN.</p></div>
      <div className="step-card"><span className="step-mini">3</span><strong>Ligar o braço</strong><p>Conecte a alimentação de 48 V e conecte o adaptador CAN ao PC host.</p></div>
      <div className="step-card"><span className="step-mini">4</span><strong>Inicializar o CAN</strong><p>Confirme a interface CAN e defina a taxa de bits para 1 Mbps.</p></div>
    </div>

    <pre><code>{`ip -br link

sudo modprobe peak_usb
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
ip -details link show can0`}</code></pre>
  </details>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>Instalar o ROS2 e compilar o workspace</h2>
      <p>Instale os pacotes ROS2 que correspondem à sua versão do Ubuntu e, em seguida, clone, configure e compile o workspace ROS2 do reBot.</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">1.0</span><strong>Concluir o início rápido do B601-RS</strong><p>Antes da integração com ROS2, conclua a configuração básica, a inicialização de posição zero e as verificações de PCAN-USB / SocketCAN.</p></div>
    <div className="step-card"><span className="step-mini">1.1</span><strong>Instalar o ROS2</strong><p>Use Jazzy no Ubuntu 24.04 ou Humble no Ubuntu 22.04.</p></div>
    <div className="step-card"><span className="step-mini">1.2</span><strong>Instalar dependências</strong><p>Instale colcon, Git, mensagens de controle, mensagens de trajetória, RViz, robot-state-publisher e Pinocchio.</p></div>
    <div className="step-card"><span className="step-mini">1.3</span><strong>Clonar o workspace</strong><p>Use o repositório Seeed-Projects por padrão. Repositórios de desenvolvimento podem ser usados quando necessário.</p></div>
    <div className="step-card"><span className="step-mini">1.4</span><strong>Instalar o MotorBridge</strong><p>Instale o MotorBridge para que o nó ROS2 possa se comunicar com a interface de motor de baixo nível.</p></div>
    <div className="step-card"><span className="step-mini">1.5</span><strong>Compilar com colcon</strong><p>Compile e faça o source do workspace e, em seguida, verifique as entradas executáveis.</p></div>
  </div>

  <details className="content-details" open>
    <summary>Etapa 1.0: concluir o início rápido do B601-RS</summary>
    <p>Antes de iniciar a integração com ROS2, conclua o <a href="https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/">Início Rápido do reBot Arm B601-RS</a>, incluindo montagem, configuração de ID dos motores, inicialização de posição zero, verificações de energia e configuração de PCAN-USB / SocketCAN.</p>
  </details>

  <details className="content-details" open>
    <summary>Etapa 1.1: instalar o ROS2 para o seu sistema Ubuntu</summary>
    <p>Use a versão do ROS2 que corresponde à sua distribuição Ubuntu:</p>
    <ul>
      <li>Ubuntu 24.04: ROS2 Jazzy</li>
      <li>Ubuntu 22.04: ROS2 Humble</li>
    </ul>
    <p>Referências: <a href="https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html">Instalação do ROS2 Jazzy</a>, <a href="https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html">Instalação do ROS2 Humble</a> e <a href="https://wiki.seeedstudio.com/pt-br/install_ros2_humble/">Instalação do ROS2 Humble da Seeed</a>.</p>
  </details>

  <details className="content-details" open>
    <summary>Etapa 1.2: instalar ferramentas de compilação e dependências do ROS</summary>
    <pre><code>{`sudo apt update
sudo apt install -y python3-colcon-common-extensions python3-pip git
sudo apt install -y \
  ros-\${ROS_DISTRO}-control-msgs \
  ros-\${ROS_DISTRO}-trajectory-msgs \
  ros-\${ROS_DISTRO}-tf-transformations \
  ros-\${ROS_DISTRO}-robot-state-publisher \
  ros-\${ROS_DISTRO}-rviz2 \
  ros-\${ROS_DISTRO}-pinocchio

source /opt/ros/\${ROS_DISTRO}/setup.bash
python3 -c "import pinocchio; print('pinocchio', pinocchio.__version__)"`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Etapa 1.3: clonar o repositório de código</summary>
    <p>Dê preferência ao repositório oficial Seeed-Projects:</p>
    <pre><code>{`git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
    <p>Você também pode usar o repositório de desenvolvimento atual:</p>
    <pre><code>{`git clone https://github.com/EclipseaHime017/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Etapa 1.4: instalar o MotorBridge</summary>
    <pre><code>{`python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge

# No Ubuntu 22.04 / ROS2 Humble, você geralmente pode usar:
python3 -m pip install --user --index-url https://pypi.org/simple motorbridge`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Etapa 1.5: adicionar o SDK de baixo nível e compilar</summary>
    <pre><code>{`mkdir -p third_party
git clone https://github.com/vectorBH6/reBotArm_control_py.git third_party/reBotArm_control_py

source /opt/ros/\${ROS_DISTRO}/setup.bash
colcon build --symlink-install
source install/setup.bash

ros2 pkg executables rebotarmcontroller`}</code></pre>
    <p>As entradas esperadas incluem <code>{`reBotArmController`}</code>, <code>{`GravityCompensation`}</code>, <code>{`GripperControl`}</code>, <code>{`MoveTo`}</code> e <code>{`MoveToPose`}</code>.</p>
  </details>
</section>

<section id="bringup" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Verificação de segurança antes de executar</strong>
      <p>Remova todos os objetos de valor e mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Certifique-se de que o braço esteja firmemente fixado antes de executar esta seção.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>Inicializar o controlador B601-RS</h2>
      <p>Comece com a verificação de comunicação e de estados das juntas. Adicione o RViz somente depois que o driver de hardware estiver estável.</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Apenas driver</b><span>Melhor para a primeira verificação de hardware, pois inicia o controlador sem o RViz.</span></div>
    <div className="module-summary-card"><b>Inicialização completa</b><span>Inicia o controlador, o robot-state-publisher e a visualização opcional no RViz.</span></div>
    <div className="module-summary-card"><b>Suporte a namespace</b><span>Use um namespace personalizado ao executar vários braços ou integrar com sistemas ROS2 maiores.</span></div>
  </div>

  <details className="content-details" open>
    <summary>Etapa 2.1: confirmar a interface CAN</summary>
    <pre><code>{`ip -details link show can0`}</code></pre>
    <p>Se <code>{`can0`}</code> não estiver ativo, reconfigure-o:</p>
    <pre><code>{`sudo modprobe peak_usb
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Etapa 2.2: iniciar o sistema completo</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0`}</code></pre>
    <p>Se você usar apenas o B601-RS por um longo período, pode definir <code>{`default_model: rs`}</code> em <code>{`src/rebotarm_bringup/config/rebotarm_hardware.yaml`}</code>. Então você pode iniciar com:</p>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py channel:=can0`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Etapa 2.3: iniciar a visualização no RViz</summary>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=true`}</code></pre>
    <p>Se a visualização do modelo for inconveniente, defina <code>{`Target Frame`}</code> como <code>{`base_link`}</code>, altere o tipo de visualização para <code>{`Move Camera`}</code> e ajuste a distância para <code>{`1.0`}</code> ou <code>{`1.5`}</code>.</p>
  </details>

  <details className="content-details" open>
    <summary>Etapa 2.4: iniciar apenas o nó de controle de hardware</summary>
    <pre><code>{`ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0`}</code></pre>
    <p>Use o arquivo de launch em vez de executar o nó diretamente, porque o arquivo de launch passa a configuração de hardware de <code>{`rebotarm_bringup/config`}</code>.</p>
  </details>

  <details className="content-details">
    <summary>Opcional: alterar o namespace</summary>
    <p>O namespace padrão é <code>{`/rebotarm`}</code>. Para executar vários braços ou integrar com outros sistemas ROS2, passe um namespace personalizado:</p>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 arm_namespace:=right_arm`}</code></pre>
    <p>Por exemplo, <code>{`/rebotarm/joint_states`}</code> se torna <code>{`/right_arm/joint_states`}</code>.</p>
  </details>
</section>

<section id="api" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>Validar tópicos, serviços e ações do ROS2</h2>
      <p>Comece com verificações de status somente leitura. Em seguida, teste serviços e ações com alvos pequenos e conservadores.</p>
    </div>
  </div>

  <div className="api-grid">
    <div className="api-card"><b>Tópico de status</b><code>{`/rebotarm/joint_states`}</code><span>Posições, velocidades e esforços das juntas de 6 eixos, incluindo juntas visuais da garra para o RViz.</span></div>
    <div className="api-card"><b>Tópico de status</b><code>{`/rebotarm/arm_status`}</code><span>Modo de controle, estado habilitado, máquina de estados e códigos de erro.</span></div>
    <div className="api-card"><b>Serviço</b><code>{`/rebotarm/enable`}</code><span>Habilita o braço robótico.</span></div>
    <div className="api-card"><b>Serviço</b><code>{`/rebotarm/disable`}</code><span>Desabilita o braço robótico.</span></div>
    <div className="api-card"><b>Serviço</b><code>{`/rebotarm/safe_home`}</code><span>Move de volta para a posição inicial segura.</span></div>
    <div className="api-card"><b>Ação</b><code>{`/rebotarm/move_to_pose`}</code><span>Movimento de pose do efetuador final.</span></div>
    <div className="api-card"><b>Ação</b><code>{`/rebotarm/follow_joint_trajectory`}</code><span>Ponto de entrada padrão compatível com trajetória de juntas.</span></div>
    <div className="api-card"><b>Ação</b><code>{`/rebotarm/gripper/command`}</code><span>Ação padrão de garra.</span></div>
  </div>

  <details className="content-details" open>
    <summary>Ler tópicos de status</summary>
    <pre><code>{`ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Serviços comuns do gripper</summary>
    <pre><code>{`ros2 service call /rebotarm/gripper/open rebotarm_msgs/srv/GripperCommand "{}"
ros2 service call /rebotarm/gripper/close rebotarm_msgs/srv/GripperCommand "{}"
ros2 service call /rebotarm/gripper/set rebotarm_msgs/srv/SetGripper "{position: 5.0}"`}</code></pre>
  </details>
</section>

<section id="examples" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Verificação de segurança antes de executar</strong>
      <p>Remova todos os objetos de valor e mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong> da área de trabalho do robô. Use alvos pequenos e durações longas para os primeiros testes de movimento.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Etapa 4</span>
    <div>
      <h2>Execute exemplos de controle seguro</h2>
      <p>Todos os exemplos assumem que o controlador B601-RS já está em execução.</p>
    </div>
  </div>

  <div className="command-card">
    <h3>Inicie o controlador primeiro</h3>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0`}</code></pre>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">4.1</span><strong>Habilite o braço</strong><p>Habilite somente depois de verificar que a área de trabalho está livre e que o braço está firmemente fixado.</p></div>
    <div className="step-card"><span className="step-mini">4.2</span><strong>Mova para uma pequena pose</strong><p>Use uma posição alvo conservadora e uma duração de pelo menos 2 segundos para o primeiro teste.</p></div>
    <div className="step-card"><span className="step-mini">4.3</span><strong>Envie um alvo de junta</strong><p>Use um deslocamento de junta muito pequeno e uma duração longa para verificar a direção do movimento.</p></div>
    <div className="step-card"><span className="step-mini">4.4</span><strong>Retorne para a posição inicial</strong><p>Chame o home seguro e depois desabilite o braço antes de trocar cabos ou hardware.</p></div>
  </div>

  <details className="content-details" open>
    <summary>Etapa 4.1: habilitar o braço robótico</summary>
    <pre><code>{`ros2 service call /rebotarm/enable std_srvs/srv/Trigger`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Etapa 4.2: mover para uma pose do efetuador final</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {x: 0.0, y: 0.0, z: 0.0, w: 1.0}}, duration: 2.0}"`}</code></pre>
    <p>A ação <code>{`move_to_pose`}</code> é executada pelo controlador de pose final do SDK. O modo de controle do B601-RS é <code>{`mit`}</code> por padrão em <code>{`rebotarm_hardware.yaml`}</code>.</p>
  </details>

  <details className="content-details" open>
    <summary>Etapa 4.3: enviar um alvo de junta</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Etapa 4.4: home seguro e desabilitar</summary>
    <pre><code>{`ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Comandos de demonstração adicionais</summary>
    <pre><code>{`# Joint motion example, unit: rad
ros2 run rebotarmcontroller MoveTo -- \
  0.20 -0.20 -0.20 -0.20 0.10 -0.10 \
  --duration 8.0

# Single joint motion
ros2 run rebotarmcontroller MoveTo -- --joint joint3 --position -0.20 --duration 5.0

# End-effector pose example
ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0

# Interactive gripper example
ros2 run rebotarmcontroller GripperControl`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Exemplo de compensação de gravidade</summary>
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Verificação de segurança da compensação de gravidade</strong>
        <p>Segure o braço com cuidado, mantenha a área de trabalho livre e esteja preparado para parar o controlador. Não use compensação de gravidade até que a posição zero e as direções das juntas sejam verificadas.</p>
      </div>
    </div>
    <pre><code>{`ros2 run rebotarmcontroller GravityCompensation`}</code></pre>
    <p>O script chama <code>{`/rebotarm/enable`}</code>, inicia a compensação de gravidade e, ao pressionar <code>{`Ctrl+C`}</code>, chama <code>{`/rebotarm/gravity_compensation/stop`}</code>, <code>{`/rebotarm/safe_home`}</code> e <code>{`/rebotarm/disable`}</code>.</p>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Configuração</span>
    <h2>Arquivos de configuração principais</h2>
    <p>O workspace ROS2 do B601-RS usa um arquivo de configuração de hardware de camada superior para selecionar o modelo RS e substituir parâmetros do SDK.</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b><code>{`rebotarm_hardware.yaml`}</code></b><span>Seleção de hardware e substituições de parâmetros do SDK para o B601-RS.</span></div>
    <div className="module-summary-card"><b><code>{`driver_params.yaml`}</code></b><span>Exemplos de parâmetros ROS para o fluxo de trabalho de inicialização do driver.</span></div>
    <div className="module-summary-card"><b><code>{`default_model: rs`}</code></b><span>Usa RS automaticamente quando <code>{`model:=...`}</code> não é passado explicitamente.</span></div>
  </div>

  <details className="content-details" open>
    <summary>Parâmetros comuns de inicialização</summary>

    | Parâmetro | Padrão | Descrição |
    |---|---|---|
    | <code>{`hardware_config`}</code> | Configuração de hardware integrada | Caminho da configuração de hardware de camada superior do ROS2 |
    | <code>{`model`}</code> | <code>{`rs`}</code> | Seleciona a configuração do B601-RS |
    | <code>{`channel`}</code> | <code>{`can0`}</code> | Canal SocketCAN |
    | <code>{`joint_state_rate`}</code> | <code>{`100.0`}</code> | Taxa de publicação de <code>{`/rebotarm/joint_states`}</code> |
    | <code>{`cmd_arbitration`}</code> | <code>{`reject`}</code> | Arbitragem de comandos de junta do braço durante a execução da trajetória |
    | <code>{`arm_namespace`}</code> | <code>{`rebotarm`}</code> | Prefixo de namespace ROS |
    | <code>{`frame_id`}</code> | <code>{`base_link`}</code> | Quadro base do braço robótico |
    | <code>{`ee_frame_id`}</code> | <code>{`gripper_end`}</code> | Quadro do efetuador final |
    | <code>{`use_rviz`}</code> | <code>{`false`}</code> | Se deve iniciar o bringup do RViz |
    | <code>{`disable_after_safe_home`}</code> | <code>{`true`}</code> | Se os motores são desabilitados após a conclusão do home seguro |
  </details>

  <details className="content-details">
    <summary>Tópicos de comando de baixo nível</summary>
    <p>Tópicos de baixo nível são apenas para depuração. Eles não executam IK, planejamento de trajetória ou verificações de limites URDF.</p>

    | API | Tipo | Descrição |
    |---|---|---|
    | <code>{`/rebotarm/joints/<joint>/cmd/mit`}</code> | <code>{`rebotarm_msgs/msg/JointMitCmd`}</code> | Comando bruto MIT de junta única |
    | <code>{`/rebotarm/joints/<joint>/cmd/pos_vel`}</code> | <code>{`rebotarm_msgs/msg/JointPosVelCmd`}</code> | Comando bruto de posição-velocidade de junta única |
    | <code>{`/rebotarm/gripper/cmd/mit`}</code> | <code>{`rebotarm_msgs/msg/JointMitCmd`}</code> | Comando bruto MIT do gripper |
    | <code>{`/rebotarm/gripper/cmd/pos_vel`}</code> | <code>{`rebotarm_msgs/msg/JointPosVelCmd`}</code> | Comando bruto de posição-velocidade do gripper |
  </details>
</section>

<section id="moveit" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Etapa 5</span>
    <div>
      <h2>Use o MoveIt 2 para planejamento e execução</h2>
      <p>O MoveIt 2 lida com IK, verificação de colisão, planejamento de trajetória e execução. Sempre valide em simulação antes de usar o hardware real.</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">5.1</span><strong>Instale os pacotes do MoveIt</strong><p>Instale MoveIt, ros2_control, gerenciadores de controladores, planejadores OMPL e xacro.</p></div>
    <div className="step-card"><span className="step-mini">5.2</span><strong>Reconstrua e verifique</strong><p>Reconstrua o workspace e confirme que os pacotes MoveIt e pontos de entrada de demonstração estão disponíveis.</p></div>
    <div className="step-card"><span className="step-mini">5.3</span><strong>Execute primeiro em simulação</strong><p>Inicie a demonstração do MoveIt com hardware virtual e inspecione o plano no RViz.</p></div>
    <div className="step-card"><span className="step-mini">5.4</span><strong>Use hardware real</strong><p>Inicie primeiro o driver de hardware e depois inicie o arquivo de inicialização do MoveIt para hardware.</p></div>
    <div className="step-card"><span className="step-mini">5.5</span><strong>Execute as demos com cuidado</strong><p>Execute draw-square e pick-place somente depois que a trajetória tiver sido verificada.</p></div>
  </div>

  <details className="content-details" open>
    <summary>Etapa 5.1: instalar o ambiente MoveIt</summary>
    <pre><code>{`sudo apt update
sudo apt install -y \
  ros-\${ROS_DISTRO}-moveit \
  ros-\${ROS_DISTRO}-moveit-configs-utils \
  ros-\${ROS_DISTRO}-moveit-kinematics \
  ros-\${ROS_DISTRO}-moveit-planners-ompl \
  ros-\${ROS_DISTRO}-moveit-simple-controller-manager \
  ros-\${ROS_DISTRO}-ros2-control \
  ros-\${ROS_DISTRO}-ros2-controllers \
  ros-\${ROS_DISTRO}-xacro`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Etapa 5.2: reconstruir e verificar pacotes</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
colcon build --symlink-install
source install/setup.bash

ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos`}</code></pre>
    <p>As entradas esperadas incluem <code>{`draw_square`}</code> e <code>{`pick_place`}</code>.</p>
  </details>

  <details className="content-details" open>
    <summary>Etapa 5.3: usar o MoveIt em simulação</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs

# Without RViz:
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs use_rviz:=false`}</code></pre>
    <p>Isso inicia <code>{`move_group`}</code>, <code>{`robot_state_publisher`}</code>, <code>{`ros2_control_node`}</code>, controladores de juntas, controladores do gripper e RViz com o plugin MoveIt MotionPlanning.</p>
  </details>

  <details className="content-details" open>
    <summary>Etapa 5.4: usar o MoveIt com hardware real</summary>
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Verificação de segurança de hardware do MoveIt</strong>
        <p>Limpe a área de trabalho, verifique o caminho planejado no RViz e esteja pronto para parar o controlador antes de executar qualquer movimento real.</p>
      </div>
    </div>
    <pre><code>{`# Terminal 1: hardware driver
ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0

# Terminal 2: MoveIt hardware environment
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py model:=rs`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Etapa 5.5: executar a demonstração draw-square</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=rs`}</code></pre>
    <p>A demonstração draw-square move o <code>{`gripper_tcp`}</code> através de quatro cantos de um retângulo coplanar. Os parâmetros padrão estão em <code>{`src/rebotarm_moveit_demos/config/draw_square_rs.yaml`}</code>.</p>
  </details>

  <details className="content-details" open>
    <summary>Etapa 5.6: executar a demonstração pick-place</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py model:=rs`}</code></pre>
    <p>A demonstração pick-place adiciona um objeto à cena de planejamento, abre o gripper, move para a pose de coleta, fecha o gripper, move para a pose de colocação e solta o objeto. Os parâmetros padrão estão em <code>{`src/rebotarm_moveit_demos/config/pick_place_rs.yaml`}</code>.</p>
  </details>

  <details className="content-details">
    <summary>Arquivos de configuração do MoveIt</summary>

    | Arquivo | Descrição |
    |---|---|
    | <code>{`rebotarm_moveit_config/config/rebotarm_rs.urdf.xacro`}</code> | Modelo do robô B601-RS usado pelo MoveIt, incluindo o gripper e o <code>{`gripper_tcp`}</code> |
    | <code>{`rebotarm_moveit_config/config/rebotarm_rs.ros2_control.xacro`}</code> | Descrição de hardware simulado do ros2_control para simulação |
    | <code>{`rebotarm_moveit_config/config/rebotarm_rs.srdf`}</code> | Grupos do MoveIt, efetuador final, estados padrão e configuração semântica |
    | <code>{`rebotarm_moveit_config/config/kinematics.yaml`}</code> | Configuração do resolvedor de cinemática inversa (IK) |
    | <code>{`rebotarm_moveit_config/config/joint_limits.yaml`}</code> | Limites de juntas usados pelo planejamento do MoveIt |
    | <code>{`rebotarm_moveit_config/config/ompl_planning.yaml`}</code> | Parâmetros do planejador OMPL |
    | <code>{`rebotarm_moveit_config/config/moveit_controllers.yaml`}</code> | Configuração do controlador de execução de trajetória para simulação |
    | <code>{`rebotarm_moveit_config/config/moveit_hardware_controllers.yaml`}</code> | Configuração do controlador de execução de trajetória para hardware real |
    | <code>{`rebotarm_moveit_demos/config/draw_square_rs.yaml`}</code> | Parâmetros da demonstração draw-square |
    | <code>{`rebotarm_moveit_demos/config/pick_place_rs.yaml`}</code> | Parâmetros da demonstração pick-place |
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>Perguntas frequentes</span>
    <h2>Problemas comuns</h2>
    <p>A maioria dos problemas RS ROS2 é causada pelo estado da interface CAN, pelo sourcing do workspace, pela seleção do modelo, por processos ROS2 obsoletos ou pela configuração do alvo do MoveIt.</p>
  </div>

  <details className="content-details" open>
    <summary>1. <code>{`socketcan write failed: Network is down`}</code> aparece na inicialização</summary>
    <p>Isso significa que a interface CAN ainda não foi ativada.</p>
    <pre><code>{`ip -details link show can0

sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
  </details>

  <details className="content-details">
    <summary>2. <code>{`can0`}</code> não pode ser encontrado</summary>
    <pre><code>{`ip -br link
sudo modprobe peak_usb
ip -br link

# If the interface is can1, launch with:
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can1`}</code></pre>
  </details>

  <details className="content-details">
    <summary>3. O modelo do robô não é exibido no RViz</summary>
    <ul>
      <li>Verifique se o workspace foi carregado com source: <code>{`source install/setup.bash`}</code>.</li>
      <li>Verifique se <code>{`Fixed Frame`}</code> está definido como <code>{`base_link`}</code>.</li>
      <li>Verifique se <code>{`robot_state_publisher`}</code> foi iniciado corretamente.</li>
      <li>Verifique se o caminho da malha URDF começa com <code>{`package://rebotarm_bringup/description/...`}</code>.</li>
    </ul>
  </details>

  <details className="content-details">
    <summary>4. O planejamento do MoveIt falha</summary>
    <ul>
      <li>Confirme se <code>{`move_group`}</code> está em execução corretamente.</li>
      <li>Confirme se o estado atual das juntas não está obsoleto.</li>
      <li>Confirme se o ponto alvo está dentro da área de trabalho alcançável.</li>
      <li>Confirme se a orientação alvo não causa colisão do punho ou do gripper.</li>
      <li>Planeje manualmente no RViz primeiro e, em seguida, execute a demonstração.</li>
    </ul>
  </details>

  <details className="content-details">
    <summary>5. Aparece um aviso de porta FastDDS SHM</summary>
    <p>Se serviços e ações ainda responderem normalmente, esse aviso geralmente não afeta o controle. Para limpar arquivos de bloqueio de memória compartilhada remanescentes:</p>
    <pre><code>{`pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*

# Optional temporary workaround:
export FASTDDS_BUILTIN_TRANSPORTS=UDPv4`}</code></pre>
  </details>

  <details className="content-details">
    <summary>6. E se eu usar Humble?</summary>
    <p>Siga o mesmo fluxo de trabalho, substitua os pacotes Jazzy pelos pacotes Humble, faça o source do ambiente Humble e reconstrua o workspace.</p>
  </details>

  <details className="content-details">
    <summary>7. <code>{`pinocchio`}</code> não pode ser encontrado</summary>
    <pre><code>{`sudo apt install -y ros-\${ROS_DISTRO}-pinocchio
source /opt/ros/\${ROS_DISTRO}/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"
python3 -c "import sys; print('\\n'.join(sys.path))"`}</code></pre>
    <p>Depois de fazer o source do Jazzy, o caminho do Python deve incluir um caminho semelhante a <code>{`/opt/ros/jazzy/lib/python3.12/site-packages`}</code>. Para Humble, substitua <code>{`jazzy`}</code> por <code>{`humble`}</code>.</p>
  </details>
</section>

<section className="section-card course-path-section">
  <div className="section-title">
    <span>Continue aprendendo</span>
    <h2>Trilha de aprendizado do reBot B601-RS</h2>
    <p>Esses tutoriais foram projetados para serem seguidos em ordem: Introdução → LeRobot → Pinocchio → Visual Grasping → ROS2. Use os links abaixo para alternar entre os módulos.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/pt-br/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Getting Started</strong><span>Conclua o unboxing, a fiação, as verificações de energia de 48 V, a configuração do PCAN-USB, a calibração e os primeiros testes de movimento.</span></span>
      <span className="course-tag">Comece aqui</span>
    </a>
    <a className="course-path-item" href="/pt-br/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot Teleoperation and Data Collection</strong><span>Teleopere o braço, conecte câmeras, registre conjuntos de dados e prepare tarefas de aprendizado por imitação.</span></span>
      <span className="course-tag">Coleta de dados</span>
    </a>
    <a className="course-path-item" href="/pt-br/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio Kinematics Visualization</strong><span>Entenda modelos de robô, juntas, referenciais de coordenadas, cinemática direta/inversa, trajetórias e compensação de gravidade.</span></span>
      <span className="course-tag">Controle</span>
    </a>
    <a className="course-path-item" href="/pt-br/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Visual Grasping Demo</strong><span>Combine percepção RGB-D, calibração mão-olho, YOLO / GraspNet e geração de pose de preensão para agarrar objetos reais.</span></span>
      <span className="course-tag">Aplicação</span>
    </a>
    <a className="course-path-item active" href="/pt-br/rebot_arm_b601_rs_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>ROS2 Integration</strong><span>Conecte o braço ao ROS2, RViz, MoveIt 2, planejamento e fluxos de trabalho de robótica de nível superior.</span></span>
      <span className="course-tag">Artigo atual</span>
    </a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Referências</span>
    <h2>Referências e suporte</h2>
  </div>
  <div className="reference-grid">
    <a href="https://wiki.seeedstudio.com/pt-br/rebot_b601_rs_getting_started/">Guia rápido do braço reBot B601-RS</a>
    <a href="https://docs.ros.org/en/humble/">Documentação do ROS2 Humble</a>
    <a href="https://docs.ros.org/en/jazzy/">Documentação do ROS2 Jazzy</a>
    <a href="https://github.com/vectorBH6/reBotArm_control_py">reBotArm_control_py</a>
    <a href="https://moveit.picknik.ai/main/index.html">Documentação do MoveIt 2</a>
    <a href="https://forum.seeedstudio.com/">Fórum da Seeed Studio</a>
    <a href="https://github.com/EclipseaHime017/reBotArmController_ROS2/issues">Enviar um problema</a>
  </div>
</section>

</div>

<style>{`
.rebot-page {
  --rb-bg: #ffffff;
  --rb-surface: #ffffff;
  --rb-surface-soft: #f8fafc;
  --rb-text: #111827;
  --rb-muted: #64748b;
  --rb-border: rgba(148, 163, 184, 0.28);
  --rb-primary: #2563eb;
  --rb-primary-soft: #eff6ff;
  --rb-accent: #14b8a6;
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(n+2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card img { width: 100%; border-radius: 14px; border: 1px solid var(--rb-border); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.path-grid, .feature-grid, .checklist-grid, .step-card-grid, .module-summary-grid, .spec-grid, .api-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.95rem; }
.path-card, .step-card, .module-summary-card, .spec-card, .api-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: linear-gradient(180deg, var(--rb-surface), var(--rb-surface-soft)); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15,23,42,0.05); transition: all 0.18s ease; }
.path-card:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.36); box-shadow: 0 16px 32px rgba(37,99,235,0.10); }
.path-card span, .step-mini { display: inline-flex; align-items: center; justify-content: center; width: fit-content; min-height: 2rem; padding: 0.28rem 0.65rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-size: 0.82rem; font-weight: 900; }
.path-card strong, .step-card strong, .module-summary-card b, .spec-card b, .api-card b { color: var(--rb-text); font-size: 1rem; }
.path-card p, .path-card small, .step-card p, .step-card span, .module-summary-card span, .spec-card span, .api-card span { margin: 0; color: var(--rb-muted); line-height: 1.62; font-size: 0.92rem; }
.path-card em { width: fit-content; margin-top: 0.2rem; padding: 0.32rem 0.62rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.18); font-style: normal; font-weight: 800; font-size: 0.78rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.42); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.content-details { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; }
.command-card { margin: 1rem 0; padding: 1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface-soft); }
.command-card h3 { margin-top: 0; color: var(--rb-text); }
.step-title-row { display: flex; gap: 0.95rem; align-items: flex-start; margin-bottom: 1rem; }
.step-pill { display: inline-flex; padding: 0.45rem 0.8rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); border: 1px solid rgba(37,99,235,0.18); font-weight: 900; white-space: nowrap; }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem; }
.reference-grid a { padding: 0.9rem 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: var(--rb-primary); text-decoration: none !important; font-weight: 800; }
.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.course-path-section { margin-top: 2rem; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 14px 30px rgba(37,99,235,0.12); }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
pre { overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .path-card, html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .spec-card, html[data-theme='dark'] .api-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .command-card, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .path-card.recommended, html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
@media (max-width: 900px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 720px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .safety-alert { grid-template-columns: 1fr; } .step-title-row { display: grid; } }
`}</style>
