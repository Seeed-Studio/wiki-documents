---
description: Este tutorial mostra como configurar o workspace de controle ROS2 para o reBot Arm B601-DM, incluindo controle do braço, visualização no RViz e integração com o MoveIt 2.
title: Integração ROS2 do reBot Arm B601-DM
keywords:
  - reBot Arm
  - B601-DM
  - ROS2
  - Humble
  - Jazzy
  - RViz
  - MoveIt 2
  - Robot Arm
  - Robotics
slug: /rebot_arm_b601_dm_ros2_integration
sku: 100065783, 100095532
last_update:
  date: 2026-07-05
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-29'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_ros2_integration/
---

# Integração ROS2 do reBot Arm B601-DM

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>Construa um workspace de controle ROS2 para o B601-DM com RViz e MoveIt 2</h2>
    <p>
      Este guia encapsula o SDK de baixo nível reBotArm_control_py em tópicos,
      serviços e ações ROS2. Ele abrange inicialização do hardware, nós de controle, visualização no RViz,
      planejamento com MoveIt 2 e execução no braço real para o B601-DM.
    </p>
    <div className="hero-actions">
      <a href="#workflow">Ver fluxo de trabalho</a>
      <a href="#install">Instalar workspace</a>
      <a href="#moveit">MoveIt 2</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM ROS2 Integration" />
    <strong>B601-DM · ROS2 / RViz / MoveIt 2</strong>
    <span>Primeiro valide a comunicação, depois simule o movimento e só então execute no hardware real.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Alerta de segurança: Limpe a área de trabalho do robô antes de executar</strong>
    <p>
      Antes de executar qualquer programa que mova o braço robótico, remova todos os itens de valor,
      objetos frágeis, ferramentas, cabos e objetos não relacionados dentro de um
      <strong> raio de 1 metro </strong>
      da área de trabalho do robô. Durante a depuração e operação, o pessoal deve permanecer afastado
      da faixa de movimento do robô.
    </p>
    <ul>
      <li>Não toque nas juntas, motores, elos, garra ou efetuador final após o braço robótico ser energizado.</li>
      <li>Antes de executar ações ROS2, execução do MoveIt, compensação de gravidade, controle de IK, controle de trajetória, teleoperação ou demonstrações de preensão, certifique-se de que a base do braço esteja firmemente fixada.</li>
      <li>Se ocorrer movimento anormal, ruído, vibração, cabos soltos, mau contato de energia ou perda de comunicação, pare o programa imediatamente e desligue o sistema antes da inspeção.</li>
      <li>Sempre desligue o sistema antes de conectar ou desconectar cabos de motor, cabos CAN, adaptadores USB2CAN, conectores XT30 ou conectores de energia.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="quick navigation">
  <a href="#workflow">Fluxo de trabalho</a>
  <a href="#overview">Visão geral</a>
  <a href="#install">Instalar</a>
  <a href="#bringup">Inicialização</a>
  <a href="#api">APIs</a>
  <a href="#examples">Exemplos</a>
  <a href="#moveit">MoveIt 2</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="workflow" className="section-card">
  <div className="section-title">
    <span>Comece aqui</span>
    <h2>Fluxo de trabalho ROS2 recomendado</h2>
    <p>
      Esta página agora está organizada como um módulo de curso passo a passo. Siga os cartões na ordem:
      primeiro verifique o hardware, depois construa o workspace ROS2, em seguida valide a comunicação
      e, por fim, avance para o planejamento com MoveIt 2 e execução no hardware real.
    </p>
  </div>

  <div className="step-card-grid">
    <a className="step-card recommended" href="/pt-br/rebot_b601_dm_getting_started/">
      <span className="step-mini">Passo 0</span>
      <strong>Concluir o início rápido do B601-DM</strong>
      <p>Conclua as verificações de energia, cabeamento, verificação de ID dos motores, calibração de posição zero e validação do MotorBridge antes de usar o ROS2.</p>
      <em>Obrigatório primeiro</em>
    </a>
    <a className="step-card" href="#install">
      <span className="step-mini">Passo 1</span>
      <strong>Instalar ROS2 e dependências</strong>
      <p>Use ROS2 Jazzy no Ubuntu 24.04 ou ROS2 Humble no Ubuntu 22.04 e, em seguida, instale colcon, RViz, Pinocchio e mensagens de controle.</p>
      <em>Ambiente</em>
    </a>
    <a className="step-card" href="#install">
      <span className="step-mini">Passo 2</span>
      <strong>Construir o workspace do controlador</strong>
      <p>Clone o controlador ROS2, instale o MotorBridge, adicione o SDK de baixo nível e construa o workspace com colcon.</p>
      <em>Build</em>
    </a>
    <a className="step-card" href="#bringup">
      <span className="step-mini">Passo 3</span>
      <strong>Inicializar o driver com segurança</strong>
      <p>Inicie o nó de controle primeiro sem o RViz, confirme o canal serial e verifique o feedback de estado das juntas.</p>
      <em>Driver</em>
    </a>
    <a className="step-card" href="#api">
      <span className="step-mini">Passo 4</span>
      <strong>Validar tópicos, serviços e ações</strong>
      <p>Comece com tópicos somente leitura e serviços seguros, depois teste ações controladas de juntas e pose com durações longas.</p>
      <em>APIs ROS</em>
    </a>
    <a className="step-card" href="#moveit">
      <span className="step-mini">Passo 5</span>
      <strong>Usar o MoveIt 2 com cuidado</strong>
      <p>Planeje primeiro na simulação, inspecione a trajetória no RViz e execute no hardware real somente depois que o caminho estiver seguro.</p>
      <em>Planejamento</em>
    </a>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Visão geral</span>
    <h2>O que esta integração ROS2 oferece</h2>
    <p>
      O workspace ROS2 do B601-DM expõe o braço robótico por meio de interfaces ROS2
      padrão, facilitando a conexão do braço com percepção, planejamento,
      visualização e aplicações de robótica de nível superior.
    </p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card">
      <b>Interfaces ROS2 padrão</b>
      <span>Publica estados de juntas e status do braço e expõe serviços e ações para habilitar, desabilitar, fazer homing, controlar a garra, mover por pose e executar trajetórias de juntas.</span>
    </div>
    <div className="module-summary-card">
      <b>Visualização no RViz</b>
      <span>Visualiza o modelo do robô, estados de juntas e frames de planejamento para que os usuários possam depurar o estado do robô antes de executar movimentos reais.</span>
    </div>
    <div className="module-summary-card">
      <b>Planejamento com MoveIt 2</b>
      <span>Fornece configuração do MoveIt 2 e pacotes de demonstração para planejamento simulado, execução em hardware, demonstrações de desenho de quadrado e de pick-and-place.</span>
    </div>
    <div className="module-summary-card">
      <b>Ponte para hardware real</b>
      <span>Conecta comandos ROS2 ao SDK reBotArm_control_py e ao controle de motor de baixo nível baseado em MotorBridge.</span>
    </div>
  </div>

  <div className="spec-card-grid">
    <div className="spec-card"><span>Braço robótico</span><strong>reBot Arm B601-DM</strong></div>
    <div className="spec-card"><span>DOF</span><strong>6-DOF + Garra</strong></div>
    <div className="spec-card"><span>Versão do motor</span><strong>Versão com motor Damiao</strong></div>
    <div className="spec-card"><span>Comunicação</span><strong>Ponte serial USB2CAN</strong></div>
    <div className="spec-card"><span>Porta padrão</span><strong>/dev/ttyACM0</strong></div>
    <div className="spec-card"><span>Alimentação</span><strong>24V DC</strong></div>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>BOM, cabeamento e checklist de ambiente</h2>
    <p>
      Prepare o braço robótico, a fonte de alimentação, a ponte serial USB2CAN e o host Ubuntu
      antes de construir o workspace ROS2.
    </p>
  </div>

  <div className="two-col">
    <div className="info-card">
      <h3>Lista de materiais (BOM)</h3>
      <ul>
        <li>Braço robótico reBot Arm B601-DM × 1</li>
        <li>Garra × 1</li>
        <li>Ponte serial USB2CAN × 1</li>
        <li>Adaptador de energia 24V × 1</li>
        <li>Cabo USB-C / Comunicação × 1</li>
        <li>PC host com Ubuntu × 1</li>
      </ul>
    </div>
    <div className="info-card">
      <h3>Requisitos de ambiente</h3>
      <ul>
        <li>Ubuntu 24.04 com ROS2 Jazzy ou Ubuntu 22.04 com ROS2 Humble</li>
        <li>Python do sistema compatível com a distribuição ROS2</li>
        <li>Ferramentas de build colcon</li>
        <li>Pacote Python MotorBridge</li>
        <li>SDK de baixo nível reBotArm_control_py</li>
      </ul>
    </div>
  </div>

  <div className="callout warning">
    <strong>Antes de ligar:</strong> Confirme que o B601-DM usa a fonte de alimentação de 24V correta, que o adaptador USB2CAN está conectado corretamente e que o braço concluiu a verificação de posição zero e de conectividade básica.
  </div>

  <div className="command-card">
    <h3>Verificar o dispositivo serial</h3>
    <pre><code>{`ls /dev/ttyACM*`}</code></pre>
  </div>

  <div className="command-card">
    <h3>Conceder permissão serial temporária</h3>
    <pre><code>{`sudo chmod 666 /dev/ttyACM0`}</code></pre>
  </div>

  <div className="command-card">
    <h3>Permissão persistente recomendada</h3>
    <pre><code>{`sudo usermod -a -G dialout $USER

# Log out and log back in for the group change to take effect.`}</code></pre>
  </div>
</section>

<section id="install" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Passo 1</span>
    <div>
      <h2>Instalar ROS2 e construir o workspace</h2>
      <p>
        Instale a distribuição ROS2 que corresponde à sua versão do Ubuntu e, em seguida, construa o
        workspace do controlador ROS2 do B601-DM.
      </p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card">
      <span className="step-mini">1.1</span>
      <strong>Instalar ROS2</strong>
      <p>Use Jazzy para Ubuntu 24.04 e Humble para Ubuntu 22.04.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">1.2</span>
      <strong>Instalar dependências</strong>
      <p>Instale colcon, mensagens de controle, mensagens de trajetória, RViz, robot_state_publisher e Pinocchio.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">1.3</span>
      <strong>Clonar o repositório do controlador</strong>
      <p>Use o repositório Seeed-Projects por padrão ou o repositório de desenvolvimento se for instruído.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">1.4</span>
      <strong>Instalar o MotorBridge</strong>
      <p>Instale o MotorBridge no mesmo ambiente Python usado pelos nós ROS2.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">1.5</span>
      <strong>Adicionar SDK de baixo nível</strong>
      <p>Clone o reBotArm_control_py em third_party para que o controlador ROS2 possa chamar o SDK do braço.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">1.6</span>
      <strong>Compilar e fazer source</strong>
      <p>Compile com colcon e faça source de install/setup.bash antes de executar qualquer comando ROS2.</p>
    </div>
  </div>

  <details className="content-details" open>
    <summary>Etapa 1.1 Instalar o ROS2 para a sua versão do Ubuntu</summary>
    <div className="link-grid">
      <a href="https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html" target="_blank">Instalação do ROS2 Jazzy no Ubuntu</a>
      <a href="https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html" target="_blank">Instalação do ROS2 Humble no Ubuntu</a>
    </div>
    <div className="tip-card">
      <strong>Regra de versão</strong>
      <span>Use ROS2 Jazzy no Ubuntu 24.04. Use ROS2 Humble no Ubuntu 22.04.</span>
    </div>
  </details>

  <details className="content-details" open>
    <summary>Etapa 1.2 Instalar ferramentas de compilação e dependências do ROS</summary>
    <pre><code>{`sudo apt update
sudo apt install -y python3-colcon-common-extensions python3-pip git
sudo apt install -y \
  ros-jazzy-control-msgs \
  ros-jazzy-trajectory-msgs \
  ros-jazzy-tf-transformations \
  ros-jazzy-robot-state-publisher \
  ros-jazzy-rviz2 \
  ros-jazzy-pinocchio

source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print('pinocchio', pinocchio.__version__)"`}</code></pre>
    <p>Se você usar ROS2 Humble, substitua <code>{`ros-jazzy-*`}</code> por <code>{`ros-humble-*`}</code> e faça source de <code>{`/opt/ros/humble/setup.bash`}</code>.</p>
  </details>

  <details className="content-details" open>
    <summary>Etapa 1.3 Clonar o repositório do controlador ROS2</summary>
    <pre><code>{`git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
    <p>Você também pode usar o repositório de desenvolvimento ao testar novos recursos:</p>
    <pre><code>{`git clone https://github.com/EclipseaHime017/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Etapa 1.4 Instalar o MotorBridge</summary>
    <pre><code>{`python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Etapa 1.5 Adicionar o SDK de baixo nível</summary>
    <pre><code>{`mkdir -p third_party
git clone https://github.com/vectorBH6/reBotArm_control_py.git third_party/reBotArm_control_py`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Etapa 1.6 Compilar o workspace</summary>
    <pre><code>{`source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash

ros2 pkg executables rebotarmcontroller`}</code></pre>
    <p>As entradas de executáveis esperadas incluem:</p>
    <pre><code>{`rebotarmcontroller reBotArmController
rebotarmcontroller GravityCompensation
rebotarmcontroller GripperControl
rebotarmcontroller MoveTo
rebotarmcontroller MoveToPose`}</code></pre>
  </details>
</section>

<section id="bringup" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Etapa 2</span>
    <div>
      <h2>Inicializar o controlador do robô</h2>
      <p>Comece pelo driver de hardware mínimo. Adicione o RViz somente depois que a comunicação estiver estável.</p>
    </div>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Verificação de segurança antes da inicialização</strong>
      <p>Remova todos os objetos de valor e mantenha todas as pessoas afastadas dentro de um <strong>raio de 1 metro</strong>. Certifique-se de que a base B601-DM esteja firmemente fixada antes de habilitar o controlador.</p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card">
      <span className="step-mini">2.1</span>
      <strong>Fazer source do workspace</strong>
      <p>Todo novo terminal deve entrar no workspace e fazer source do arquivo de instalação.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">2.2</span>
      <strong>Iniciar apenas o driver</strong>
      <p>Use primeiro o launch do driver para isolar a comunicação de hardware da visualização.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">2.3</span>
      <strong>Iniciar a inicialização completa</strong>
      <p>Inicie o controlador, o robot_state_publisher e, opcionalmente, o RViz depois que o driver estiver estável.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">2.4</span>
      <strong>Verificar estados das juntas</strong>
      <p>Leia /rebotarm/joint_states uma vez antes de enviar qualquer comando de movimento.</p>
    </div>
  </div>

  <div className="command-card">
    <h3>Fazer source do workspace</h3>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash`}</code></pre>
  </div>

  <div className="command-card">
    <h3>Iniciar apenas o nó de controle</h3>
    <pre><code>{`ros2 launch rebotarm_bringup driver.launch.py channel:=/dev/ttyACM0`}</code></pre>
  </div>

  <div className="command-card">
    <h3>Iniciar o sistema completo sem RViz</h3>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0`}</code></pre>
  </div>

  <div className="command-card">
    <h3>Iniciar com visualização no RViz</h3>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0 use_rviz:=true`}</code></pre>
  </div>

  <details className="content-details">
    <summary>Dicas de visualização no RViz</summary>
    <ul>
      <li>Defina <code>{`Fixed Frame`}</code> como <code>{`base_link`}</code>.</li>
      <li>Defina <code>{`Target Frame`}</code> como <code>{`base_link`}</code>.</li>
      <li>Ajuste <code>{`Distance`}</code> para cerca de <code>{`1.0`}</code> ou <code>{`1.5`}</code> se o modelo parecer muito pequeno.</li>
      <li>Use a roda do mouse para dar zoom e inspecionar o movimento das juntas.</li>
    </ul>
  </details>

  <details className="content-details">
    <summary>Configuração de namespace</summary>
    <p>O namespace padrão é <code>{`/rebotarm`}</code>. Para múltiplos braços, altere o namespace no momento do launch:</p>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py arm_namespace:=left_arm`}</code></pre>
  </details>
</section>

<section id="api" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Etapa 3</span>
    <div>
      <h2>Validar as APIs ROS2</h2>
      <p>Comece com tópicos somente leitura e serviços seguros, depois teste ações de movimento.</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card">
      <b>Tópicos de status</b>
      <span>Use estes primeiro. Eles são somente leitura e ajudam a confirmar que o controlador está ativo e publicando o estado.</span>
    </div>
    <div className="module-summary-card">
      <b>Serviços</b>
      <span>Use serviços para habilitar, desabilitar, retorno seguro à posição inicial, definição de zero, troca de modo, configuração do gripper e início / parada da compensação de gravidade.</span>
    </div>
    <div className="module-summary-card">
      <b>Ações</b>
      <span>Use ações para movimento de pose, seguimento de trajetória de juntas e comandos do gripper. Ações podem mover o robô, portanto teste com cuidado.</span>
    </div>
  </div>

  <details className="content-details" open>
    <summary>Tópicos de status</summary>
    <div className="table-wrap">
      <table>
        <thead><tr><th>API</th><th>Tipo</th><th>Descrição</th></tr></thead>
        <tbody>
          <tr><td><code>{`/rebotarm/joint_states`}</code></td><td><code>{`sensor_msgs/msg/JointState`}</code></td><td>Posições, velocidades e esforços das juntas de 6 eixos</td></tr>
          <tr><td><code>{`/rebotarm/arm_status`}</code></td><td><code>{`rebotarm_msgs/msg/ArmStatus`}</code></td><td>Modo de controle, estado habilitado, máquina de estados e códigos de erro</td></tr>
          <tr><td><code>{`/rebotarm/joints/&lt;joint&gt;/state`}</code></td><td><code>{`rebotarm_msgs/msg/JointMotorState`}</code></td><td>Estado do motor de uma única junta</td></tr>
          <tr><td><code>{`/rebotarm/gripper/state`}</code></td><td><code>{`rebotarm_msgs/msg/JointMotorState`}</code></td><td>Estado do motor do gripper</td></tr>
        </tbody>
      </table>
    </div>
    <pre><code>{`ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Serviços comuns</summary>
    <div className="table-wrap">
      <table>
        <thead><tr><th>API</th><th>Tipo</th><th>Descrição</th></tr></thead>
        <tbody>
          <tr><td><code>{`/rebotarm/enable`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>Habilitar o braço robótico</td></tr>
          <tr><td><code>{`/rebotarm/disable`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>Desabilitar o braço robótico</td></tr>
          <tr><td><code>{`/rebotarm/safe_home`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>Retornar à posição inicial segura</td></tr>
          <tr><td><code>{`/rebotarm/set_mode`}</code></td><td><code>{`rebotarm_msgs/srv/SetMode`}</code></td><td>Alternar entre <code>{`mit`}</code>, <code>{`pos_vel`}</code> e <code>{`vel`}</code></td></tr>
          <tr><td><code>{`/rebotarm/set_zero`}</code></td><td><code>{`rebotarm_msgs/srv/SetZero`}</code></td><td>Definir posição zero para todas as juntas ou para uma única junta</td></tr>
          <tr><td><code>{`/rebotarm/move_to_pose_ik`}</code></td><td><code>{`rebotarm_msgs/srv/MoveToPoseIK`}</code></td><td>Pré-verificação de IK e solução de juntas alvo</td></tr>
          <tr><td><code>{`/rebotarm/gripper/set`}</code></td><td><code>{`rebotarm_msgs/srv/SetGripper`}</code></td><td>Definir a posição do motor do gripper em radianos</td></tr>
          <tr><td><code>{`/rebotarm/gravity_compensation/start`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>Iniciar compensação de gravidade</td></tr>
          <tr><td><code>{`/rebotarm/gravity_compensation/stop`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>Parar compensação de gravidade</td></tr>
        </tbody>
      </table>
    </div>
  </details>

  <details className="content-details">
    <summary>Ações de movimento</summary>
    <div className="table-wrap">
      <table>
        <thead><tr><th>API</th><th>Tipo</th><th>Descrição</th></tr></thead>
        <tbody>
          <tr><td><code>{`/rebotarm/move_to_pose`}</code></td><td><code>{`rebotarm_msgs/action/MoveToPose`}</code></td><td>Movimento de pose do efetuador final</td></tr>
          <tr><td><code>{`/rebotarm/follow_joint_trajectory`}</code></td><td><code>{`control_msgs/action/FollowJointTrajectory`}</code></td><td>Ponto de entrada padrão compatível com trajetória de juntas</td></tr>
          <tr><td><code>{`/rebotarm/gripper/command`}</code></td><td><code>{`control_msgs/action/GripperCommand`}</code></td><td>Ação padrão de garra</td></tr>
        </tbody>
      </table>
    </div>
  </details>
</section>

<section id="examples" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Etapa 4</span>
    <div>
      <h2>Executar exemplos básicos de controle</h2>
      <p>Use estes comandos depois que o controlador estiver em execução e o feedback do estado das juntas estiver correto.</p>
    </div>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Verificação de segurança antes do movimento</strong>
      <p>Use valores de destino pequenos, durações longas e mantenha a área de trabalho desobstruída. Esteja pronto para parar o controlador a qualquer momento.</p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card">
      <span className="step-mini">4.1</span>
      <strong>Habilitar o braço</strong>
      <p>Habilite somente depois que a área de trabalho estiver desobstruída e os estados das juntas forem válidos.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">4.2</span>
      <strong>Mover para uma pose</strong>
      <p>Use primeiro uma pose conservadora próxima da pose atual.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">4.3</span>
      <strong>Enviar um alvo de junta</strong>
      <p>Use pequenos valores em radianos e um `time_from_start` longo.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">4.4</span>
      <strong>Retornar para posição inicial segura e desabilitar</strong>
      <p>Finalize cada teste retornando para a posição inicial segura e desabilitando o robô.</p>
    </div>
  </div>

  <details className="content-details" open>
    <summary>4.1 Habilitar o braço robótico</summary>
    <pre><code>{`ros2 service call /rebotarm/enable std_srvs/srv/Trigger`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>4.2 Mover para uma pose do efetuador final</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {x: 0.0, y: 0.0, z: 0.0, w: 1.0}}, duration: 2.0}"`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>4.3 Enviar um alvo de junta</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>4.4 Retornar para posição inicial segura e desabilitar</summary>
    <pre><code>{`ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger`}</code></pre>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Exemplos</span>
    <h2>Comandos de demonstração</h2>
    <p>Estes exemplos assumem que <code>{`reBotArmController`}</code> já está em execução.</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card">
      <b>Movimento das juntas</b>
      <span>Envie alvos em radianos para todas as juntas ou para uma junta selecionada.</span>
    </div>
    <div className="module-summary-card">
      <b>Pose do efetuador final</b>
      <span>Mova o TCP para uma pose cartesiana especificada usando o controlador de pose do SDK.</span>
    </div>
    <div className="module-summary-card">
      <b>Compensação de gravidade</b>
      <span>Inicie a compensação de gravidade através do nó ROS2 e pare com segurança usando chamadas de serviço.</span>
    </div>
    <div className="module-summary-card">
      <b>Garra interativa</b>
      <span>Abra e feche a garra por meio de um loop de interação no terminal.</span>
    </div>
  </div>

  <details className="content-details" open>
    <summary>Exemplo de movimento das juntas</summary>
    <pre><code>{`ros2 run rebotarmcontroller MoveTo -- \
  0.20 -0.20 -0.20 -0.20 0.10 -0.10 \
  --duration 8.0

ros2 run rebotarmcontroller MoveTo -- --joint joint3 --position -0.20 --duration 5.0`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Exemplo de pose do efetuador final</summary>
    <pre><code>{`ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Exemplo de compensação de gravidade</summary>
    <pre><code>{`ros2 run rebotarmcontroller GravityCompensation`}</code></pre>
    <p>Quando você pressionar <code>{`Ctrl+C`}</code>, o script chama estes serviços na seguinte ordem:</p>
    <ol>
      <li><code>{`/rebotarm/gravity_compensation/stop`}</code></li>
      <li><code>{`/rebotarm/safe_home`}</code></li>
      <li><code>{`/rebotarm/disable`}</code></li>
    </ol>
  </details>

  <details className="content-details">
    <summary>Exemplo de garra interativa</summary>
    <pre><code>{`ros2 run rebotarmcontroller GripperControl

# o / open    Open the gripper
# c / close   Close the gripper
# q / quit    Quit`}</code></pre>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Configuração</span>
    <h2>Arquivos de configuração e tópicos de baixo nível</h2>
    <p>
      Os arquivos de configuração padrão estão localizados em
      <code>{` src/rebotarm_bringup/config/`}</code>. Use serviços e ações em nível de aplicação
      sempre que possível. Os tópicos de motor de baixo nível são destinados à depuração.
    </p>
  </div>

  <div className="two-col">
    <div className="info-card">
      <h3>Arquivos de configuração</h3>
      <ul>
        <li><code>{`arm.yaml`}</code>: ID do motor, ID de feedback e parâmetros de controle para as 6 juntas do braço</li>
        <li><code>{`gripper.yaml`}</code>: ID do motor da garra, ID de feedback, fornecedor e parâmetros de controle</li>
        <li><code>{`driver_params.yaml`}</code>: exemplos de parâmetros ROS</li>
      </ul>
    </div>
    <div className="info-card">
      <h3>Parâmetros comuns de lançamento</h3>
      <ul>
        <li><code>{`channel`}</code>: porta serial como <code>{`/dev/ttyACM0`}</code></li>
        <li><code>{`joint_state_rate`}</code>: taxa de publicação de <code>{`/rebotarm/joint_states`}</code></li>
        <li><code>{`cmd_arbitration`}</code>: <code>{`reject`}</code> ou <code>{`preempt`}</code></li>
        <li><code>{`arm_namespace`}</code>: prefixo de namespace, padrão <code>{`rebotarm`}</code></li>
        <li><code>{`use_rviz`}</code>: se deve iniciar o RViz</li>
      </ul>
    </div>
  </div>

  <div className="callout danger">
    <strong>Tópicos de baixo nível são apenas para depuração:</strong> Eles não executam cinemática inversa (IK), planejamento de trajetória ou verificações de limites do URDF. Para movimento em nível de aplicação, prefira <code>{`/move_to_pose`}</code>, <code>{`/follow_joint_trajectory`}</code> e <code>{`/gripper/set`}</code>.
  </div>
</section>

<section id="moveit" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Etapa 5</span>
    <div>
      <h2>Usar o MoveIt 2</h2>
      <p>
        O MoveIt 2 fornece cinemática inversa, verificação de colisão, planejamento de trajetória
        e execução de trajetória. Comece pela simulação antes de conectar o hardware real.
      </p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card">
      <span className="step-mini">5.1</span>
      <strong>Instalar pacotes MoveIt</strong>
      <p>Instale os pacotes MoveIt, ros2_control, controladores e xacro para a sua distribuição ROS.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">5.2</span>
      <strong>Compilar e verificar demos</strong>
      <p>Recompile o workspace e confirme que os pacotes MoveIt e os executáveis de demonstração estão disponíveis.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">5.3</span>
      <strong>Executar primeiro a simulação</strong>
      <p>Use o lançamento de demonstração do MoveIt com hardware simulado e inspecione o movimento no RViz.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">5.4</span>
      <strong>Conectar o hardware real</strong>
      <p>Inicie o driver de hardware e, em seguida, inicie o ambiente MoveIt de hardware somente depois de verificar o caminho planejado.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">5.5</span>
      <strong>Executar demos de aplicação</strong>
      <p>Experimente draw-square e pick-place depois de verificar todos os frames, limites e parâmetros da garra.</p>
    </div>
  </div>

  <details className="content-details" open>
    <summary>5.1 Instalar pacotes MoveIt 2</summary>
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
    <summary>5.2 Recompilar e verificar pacotes MoveIt</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
colcon build --symlink-install
source install/setup.bash

ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos`}</code></pre>
    <p>As entradas esperadas incluem:</p>
    <pre><code>{`rebotarm_moveit_demos draw_square
rebotarm_moveit_demos pick_place`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>5.3 Usar o MoveIt na simulação</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py

# Without RViz:
ros2 launch rebotarm_moveit_config demo.launch.py use_rviz:=false`}</code></pre>
  </details>

  <details className="content-details">
    <summary>5.4 Usar o MoveIt com hardware real</summary>
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Verificação de segurança antes da execução no hardware</strong>
        <p>Limpe a área de trabalho do robô, verifique o caminho planejado no RViz e esteja pronto para parar o controlador a qualquer momento.</p>
      </div>
    </div>
    <pre><code>{`ros2 launch rebotarm_bringup driver.launch.py channel:=/dev/ttyACM0

# In another terminal:
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py`}</code></pre>
  </details>

  <details className="content-details">
    <summary>5.5 Executar a demonstração draw-square</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py`}</code></pre>
    <p><code>{`draw_square`}</code> move o <code>{`gripper_tcp`}</code> pelos quatro cantos de um retângulo coplanar. Os parâmetros padrão são armazenados em <code>{`src/rebotarm_moveit_demos/config/draw_square.yaml`}</code>.</p>
  </details>

  <details className="content-details">
    <summary>5.6 Executar a demonstração pick-place</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py`}</code></pre>
    <p><code>{`pick_place`}</code> usa poses prontas, dimensões do objeto, orientação de pick / place do TCP e posições de abertura / fechamento do gripper definidas em <code>{`src/rebotarm_moveit_demos/config/pick_place.yaml`}</code>.</p>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>Perguntas frequentes</span>
    <h2>Problemas comuns e correções</h2>
    <p>Use esta seção quando o ROS2 não conseguir abrir o dispositivo, o RViz não mostrar o modelo ou o MoveIt falhar na execução.</p>
  </div>

  <div className="faq-grid">
    <details className="content-details" open>
      <summary>1. <code>{`open serial port /dev/ttyACM0 failed`}</code> aparece na inicialização</summary>
      <p>A porta serial padrão não existe ou o nome do dispositivo foi alterado. Verifique o dispositivo serial real e passe-o para <code>{`channel`}</code>.</p>
      <pre><code>{`ls /dev/ttyACM*
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM1`}</code></pre>
    </details>

    <details className="content-details">
      <summary>2. <code>{`Device or resource busy`}</code> aparece na inicialização</summary>
      <p>A porta serial está ocupada por outro processo, como um nó ROS2 anterior, exemplo de SDK ou script de depuração.</p>
      <pre><code>{`ps aux | grep -E "reBotArmController|ros2|python"`}</code></pre>
    </details>

    <details className="content-details">
      <summary>3. Permissão negada</summary>
      <p>Adicione o usuário atual ao grupo <code>{`dialout`}</code> ou conceda permissão temporariamente.</p>
      <pre><code>{`sudo usermod -a -G dialout $USER
sudo chmod 666 /dev/ttyACM0`}</code></pre>
    </details>

    <details className="content-details">
      <summary>4. O modelo do robô não é exibido no RViz</summary>
      <p>Verifique se o workspace foi carregado com source, se <code>{`Fixed Frame`}</code> está definido como <code>{`base_link`}</code> e se o <code>{`robot_state_publisher`}</code> foi iniciado corretamente.</p>
    </details>

    <details className="content-details">
      <summary>5. Aviso de porta FastDDS SHM aparece</summary>
      <p>Isso geralmente é causado por arquivos de bloqueio de memória compartilhada do FastDDS remanescentes após um processo ROS2 anterior ter sido encerrado de forma anormal.</p>
      <pre><code>{`pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*

# Optional bypass:
export FASTDDS_BUILTIN_TRANSPORTS=UDPv4`}</code></pre>
    </details>

    <details className="content-details">
      <summary>6. <code>{`pinocchio`}</code> não pode ser encontrado</summary>
      <pre><code>{`sudo apt install -y ros-jazzy-pinocchio
source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"`}</code></pre>
    </details>
  </div>
</section>

<section className="course-path-section section-card">
  <div className="section-title">
    <span>Continue aprendendo</span>
    <h2>Caminho de aprendizado do reBot B601-DM</h2>
    <p>
      Estes tutoriais seguem a mesma ordem da página de robótica: Getting Started →
      LeRobot → Pinocchio → Visual Grasping → ROS2. Use os links abaixo para alternar
      entre módulos.
    </p>
  </div>

  <div className="course-path-grid">
    <a className="course-path-item" href="/pt-br/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy">
        <strong>Getting Started</strong>
        <span>Conclua o unboxing, a fiação, as verificações de energia, a configuração do driver, a calibração e os testes básicos de movimento.</span>
      </span>
      <span className="course-tag">Comece aqui</span>
    </a>
    <a className="course-path-item" href="/pt-br/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy">
        <strong>Teleoperação e coleta de dados com LeRobot</strong>
        <span>Teleopere o braço, conecte câmeras, registre conjuntos de dados, treine políticas e avalie o comportamento do braço real.</span>
      </span>
      <span className="course-tag">Coleta de dados</span>
    </a>
    <a className="course-path-item" href="/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy">
        <strong>Visualização de cinemática com Pinocchio</strong>
        <span>Entenda modelos de robôs, frames de coordenadas, FK / IK, planejamento de trajetórias e compensação de gravidade.</span>
      </span>
      <span className="course-tag">Controle</span>
    </a>
    <a className="course-path-item" href="/pt-br/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy">
        <strong>Demonstração de preensão visual</strong>
        <span>Combine percepção RGB-D, YOLO / OBB ou GraspNet, calibração mão-olho e preensão de objetos reais.</span>
      </span>
      <span className="course-tag">Aplicação</span>
    </a>
    <a className="course-path-item active" href="/pt-br/rebot_arm_b601_dm_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy">
        <strong>Integração com ROS2</strong>
        <span>Conecte o braço ao ROS2, RViz, MoveIt 2, serviços padrão, ações e fluxos de trabalho de planejamento.</span>
      </span>
      <span className="course-tag">Artigo atual</span>
    </a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Referências</span>
    <h2>Referências</h2>
  </div>
  <div className="reference-grid">
    <a href="https://wiki.seeedstudio.com/pt-br/rebot_b601_dm_getting_started/">reBot Arm B601-DM Getting Started</a>
    <a href="https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_lerobot/">Tutorial reBot Arm B601-DM LeRobot</a>
    <a href="https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/">reBot Arm B601-DM Pinocchio e MeshCat</a>
    <a href="https://wiki.seeedstudio.com/pt-br/rebot_arm_b601_dm_grasping_demo/">Demonstração de preensão visual reBot Arm B601-DM</a>
    <a href="https://docs.ros.org/en/humble/">Documentação do ROS2 Humble</a>
    <a href="https://docs.ros.org/en/jazzy/">Documentação do ROS2 Jazzy</a>
    <a href="https://github.com/vectorBH6/reBotArm_control_py">reBotArm_control_py</a>
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
  --rb-accent-soft: #ccfbf1;
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}

.doc-hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr);
  gap: 1.5rem;
  padding: 2rem;
  margin: 1.5rem 0 1.25rem;
  border: 1px solid var(--rb-border);
  border-radius: 26px;
  background:
    radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%),
    radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%),
    linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92));
  box-shadow: var(--rb-shadow);
  overflow: hidden;
}

.eyebrow {
  display: inline-flex;
  margin-bottom: 0.6rem;
  color: var(--rb-primary);
  font-size: 0.78rem;
  font-weight: 850;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.doc-hero h2 {
  margin: 0 0 0.8rem;
  color: var(--rb-text);
  font-size: clamp(1.6rem, 3vw, 2.35rem);
  line-height: 1.18;
}

.doc-hero p {
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.2rem;
}

.hero-actions a {
  display: inline-flex;
  padding: 0.72rem 1rem;
  border-radius: 999px;
  text-decoration: none !important;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent));
  box-shadow: 0 12px 24px rgba(37,99,235,0.18);
}

.hero-actions a:nth-child(n+2) {
  color: var(--rb-primary);
  background: var(--rb-primary-soft);
  box-shadow: none;
}

.hero-card {
  position: relative;
  z-index: 1;
  display: grid;
  align-content: center;
  gap: 0.75rem;
  padding: 1.1rem;
  border-radius: 18px;
  background: rgba(255,255,255,0.78);
  border: 1px solid rgba(148,163,184,0.22);
  box-shadow: 0 10px 26px rgba(15,23,42,0.06);
  backdrop-filter: blur(10px);
}

.hero-card img {
  width: 100%;
  border-radius: 14px;
  border: 1px solid var(--rb-border);
}

.hero-card strong {
  color: var(--rb-text);
}

.hero-card span {
  color: var(--rb-muted);
  font-size: 0.92rem;
  line-height: 1.55;
}

.doc-nav {
  position: sticky;
  top: 0.75rem;
  z-index: 5;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.65rem;
  padding: 0.7rem;
  margin: 1.1rem 0 2rem;
  border-radius: 18px;
  background: rgba(255,255,255,0.88);
  border: 1px solid var(--rb-border);
  box-shadow: 0 12px 28px rgba(15,23,42,0.07);
  backdrop-filter: blur(14px);
}

.doc-nav a {
  text-align: center;
  padding: 0.72rem 0.7rem;
  border-radius: 13px;
  color: #334155;
  background: var(--rb-surface-soft);
  text-decoration: none !important;
  font-weight: 800;
  font-size: 0.88rem;
  transition: all 0.2s ease;
}

.doc-nav a:hover {
  color: var(--rb-primary);
  background: #fff;
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(37,99,235,0.12);
}

.section-card {
  margin: 1.6rem 0;
  padding: 1.45rem;
  border-radius: 22px;
  background: var(--rb-surface);
  border: 1px solid var(--rb-border);
  box-shadow: 0 10px 30px rgba(15,23,42,0.055);
}

.section-title {
  margin-bottom: 1rem;
}

.section-title span {
  color: var(--rb-primary);
  font-size: 0.76rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.section-title h2 {
  margin: 0.18rem 0 0.45rem;
  color: var(--rb-text);
}

.section-title p {
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.65;
}

.step-title-row {
  display: flex;
  align-items: flex-start;
  gap: 0.95rem;
  margin-bottom: 1rem;
}

.step-pill,
.step-mini {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent));
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37,99,235,0.22);
}

.step-pill {
  min-width: 4.6rem;
  height: 2.35rem;
}

.step-title-row h2 {
  margin: 0 0 0.35rem;
  color: var(--rb-text);
}

.step-title-row p {
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.65;
}

.step-card-grid,
.module-summary-grid,
.spec-card-grid,
.two-col,
.faq-grid,
.reference-grid {
  display: grid;
  gap: 1rem;
  margin: 1rem 0 1.35rem;
}

.step-card-grid {
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
}

.step-card-grid.small {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.module-summary-grid,
.two-col {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.spec-card-grid {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

.faq-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.reference-grid {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.step-card,
.module-summary-card,
.spec-card,
.info-card,
.content-details,
.tip-card,
.command-card,
.reference-grid a {
  padding: 1rem 1.05rem;
  border: 1px solid var(--rb-border);
  border-radius: 18px;
  background: linear-gradient(180deg, var(--rb-surface), var(--rb-surface-soft));
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
  text-decoration: none !important;
}

.step-card {
  color: inherit;
  transition: all 0.2s ease;
}

.step-card:hover {
  transform: translateY(-2px);
  border-color: rgba(37,99,235,0.35);
  box-shadow: 0 16px 32px rgba(37,99,235,0.10);
}

.step-card.recommended {
  border-color: rgba(37, 99, 235, 0.42);
  background: linear-gradient(135deg, rgba(239, 246, 255, 0.92), rgba(240, 253, 250, 0.78));
}

.step-card .step-mini {
  min-width: 2.1rem;
  height: 2.1rem;
  padding: 0 0.65rem;
  margin-bottom: 0.65rem;
  font-size: 0.86rem;
}

.step-card strong,
.module-summary-card b,
.spec-card strong,
.info-card h3,
.command-card h3 {
  display: block;
  color: var(--rb-text);
  margin: 0 0 0.35rem;
}

.step-card p,
.step-card span,
.module-summary-card span,
.spec-card span,
.info-card li,
.tip-card span {
  display: block;
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.65;
}

.step-card em {
  display: inline-flex;
  width: fit-content;
  margin-top: 0.75rem;
  padding: 0.32rem 0.62rem;
  border-radius: 999px;
  color: var(--rb-primary);
  background: var(--rb-primary-soft);
  font-style: normal;
  font-size: 0.78rem;
  font-weight: 850;
}

.command-card pre,
.content-details pre {
  margin: 0.75rem 0 0;
}

.content-details summary {
  cursor: pointer;
  color: var(--rb-text);
  font-weight: 850;
}

.callout {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 16px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface-soft);
  color: var(--rb-muted);
  line-height: 1.65;
}

.callout.warning {
  border-color: rgba(245, 158, 11, 0.35);
  background: #fffbeb;
  color: #92400e;
}

.callout.danger {
  border-color: rgba(239, 68, 68, 0.35);
  background: #fef2f2;
  color: #991b1b;
}

.link-grid {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.link-grid a,
.reference-grid a {
  color: var(--rb-primary);
  font-weight: 800;
}

.table-wrap {
  overflow-x: auto;
}

.safety-alert {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.9rem;
  align-items: flex-start;
  margin: 1.2rem 0 1.6rem;
  padding: 1.05rem 1.15rem;
  border-radius: 18px;
  border: 1px solid rgba(239, 68, 68, 0.38);
  background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92));
  color: #7f1d1d;
  box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12);
}

.safety-alert-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.35rem;
  height: 2.35rem;
  border-radius: 999px;
  background: #fee2e2;
  color: #dc2626;
  font-size: 1.25rem;
  line-height: 1;
  flex-shrink: 0;
}

.safety-alert-content strong {
  display: block;
  margin-bottom: 0.45rem;
  color: #991b1b;
  font-size: 1.05rem;
  font-weight: 900;
}

.safety-alert-content p,
.safety-alert-content ul {
  margin: 0;
  color: #7f1d1d;
  line-height: 1.68;
}

.safety-alert-content ul {
  margin-top: 0.65rem;
  padding-left: 1.2rem;
}

.safety-alert-content li + li {
  margin-top: 0.35rem;
}

.safety-alert.compact {
  margin: 1rem 0;
  padding: 0.9rem 1rem;
  border-radius: 16px;
}

.course-path-section {
  margin-top: 2rem;
}

.course-path-grid {
  display: grid;
  gap: 0.85rem;
  margin-top: 1rem;
}

.course-path-item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.95rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface);
  text-decoration: none !important;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}

.course-path-item.active {
  border-color: rgba(37, 99, 235, 0.45);
  background: linear-gradient(135deg, rgba(37,99,235,0.08), rgba(20,184,166,0.06));
}

.course-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.45rem;
  height: 2.45rem;
  border-radius: 999px;
  color: #fff;
  background: var(--rb-primary);
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37,99,235,0.24);
}

.course-path-copy strong {
  display: block;
  color: var(--rb-text);
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.course-path-copy span {
  display: block;
  color: var(--rb-muted);
  line-height: 1.6;
}

.course-tag {
  justify-self: end;
  white-space: nowrap;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  color: var(--rb-primary);
  background: var(--rb-primary-soft);
  border: 1px solid rgba(37,99,235,0.18);
  font-style: normal;
  font-weight: 800;
  font-size: 0.78rem;
}

html[data-theme='dark'] .rebot-page {
  --rb-bg: #111827;
  --rb-surface: #1f2023;
  --rb-surface-soft: #24262a;
  --rb-text: #f9fafb;
  --rb-muted: #a1a1aa;
  --rb-border: #343840;
  --rb-primary: #60a5fa;
  --rb-primary-soft: rgba(96,165,250,0.14);
  --rb-accent: #2dd4bf;
  --rb-shadow: 0 18px 42px rgba(0,0,0,0.34);
}

html[data-theme='dark'] .doc-hero {
  background:
    radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%),
    radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%),
    linear-gradient(135deg, #1f2023, #16181d);
}

html[data-theme='dark'] .hero-card,
html[data-theme='dark'] .doc-nav,
html[data-theme='dark'] .step-card,
html[data-theme='dark'] .module-summary-card,
html[data-theme='dark'] .spec-card,
html[data-theme='dark'] .info-card,
html[data-theme='dark'] .content-details,
html[data-theme='dark'] .tip-card,
html[data-theme='dark'] .command-card,
html[data-theme='dark'] .reference-grid a,
html[data-theme='dark'] .course-path-item {
  background: rgba(31, 32, 35, 0.86);
}

html[data-theme='dark'] .step-card.recommended,
html[data-theme='dark'] .course-path-item.active {
  background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12));
}

html[data-theme='dark'] .callout.warning {
  background: rgba(245, 158, 11, 0.12);
  color: #fde68a;
}

html[data-theme='dark'] .callout.danger {
  background: rgba(239, 68, 68, 0.12);
  color: #fecaca;
}

html[data-theme='dark'] .safety-alert {
  border-color: rgba(248, 113, 113, 0.42);
  background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18));
  color: #fecaca;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28);
}

html[data-theme='dark'] .safety-alert-icon {
  background: rgba(248, 113, 113, 0.18);
  color: #fca5a5;
}

html[data-theme='dark'] .safety-alert-content strong,
html[data-theme='dark'] .safety-alert-content p,
html[data-theme='dark'] .safety-alert-content ul {
  color: #fecaca;
}

@media (max-width: 900px) {
  .doc-hero {
    grid-template-columns: 1fr;
  }

  .doc-nav {
    position: static;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .course-path-item {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .course-tag {
    grid-column: 2;
    justify-self: start;
  }
}

@media (max-width: 560px) {
  .doc-hero,
  .section-card {
    padding: 1.1rem;
    border-radius: 18px;
  }

  .doc-nav {
    grid-template-columns: 1fr;
  }

  .safety-alert {
    grid-template-columns: 1fr;
  }
}
`}</style>
