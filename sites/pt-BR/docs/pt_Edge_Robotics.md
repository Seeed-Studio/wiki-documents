---
description: Documentação e trilhas de aprendizado de robótica da Seeed Studio.
title: Robótica
keywords:
  - robotics
  - nvidia
  - ros
  - isaac
  - lerobot
  - learning
  - reinforcement learning
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /robotics_page
last_update:
  date: 07/04/2026
  author: ZhuYaohui
createdAt: '2023-01-12'
updatedAt: '2026-08-14'
url: https://wiki.seeedstudio.com/pt-br/robotics_page/
---

import '/src/css/robotics-page-style.css';

# 🤖 Robótica

> *"A ciência de hoje é a tecnologia de amanhã." - Edward Teller*

<div className="robotics-page">

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>Comece com o seu kit de robô</h2>
      <p>Encontre a trilha de robótica da Seeed Studio certa por produto. Escolha seu kit e siga as etapas desde a configuração até o desenvolvimento avançado.</p>
    </div>
    <div className="hero-tips">
      <div><strong>Novo dispositivo</strong><span>Desembale, faça a fiação, ligue, instale drivers e teste o movimento</span></div>
      <div><strong>Crie aplicações</strong><span>Use SDKs, LeRobot, ROS2, visão ou controle móvel</span></div>
      <div><strong>Robótica com IA</strong><span>Explore simulação, coleta de dados, GR00T, VLA e RL</span></div>
    </div>
  </section>

  <nav className="quick-nav" aria-label="Robotics page quick navigation">
    <a href="#robot-kits">📦 Kits de robô</a>
    <a href="#actuators">⚙️ Atuadores de junta</a>
    <a href="#sensors">👁️ Sensores</a>
    <a href="#software">💻 Ecossistema de software</a>
  </nav>

  <section className="kit-index-panel" aria-label="Quick robot kit selection">
    <div className="section-title-row compact-title">
      <div>
        <span className="section-kicker">Escolha um kit</span>
        <h2>Escolha sua trilha de aprendizado</h2>
      </div>
      <p>Os cartões ficam recolhidos por padrão. Abra o seu kit para ver a trilha correspondente.</p>
    </div>
    <div className="kit-index-grid">
      <a href="#rebot-rs"><span>🦾</span><strong>B601-RS</strong><small>Trilha do braço robótico RobStride</small></a>
      <a href="#rebot-dm"><span>🦾</span><strong>B601-DM</strong><small>Trilha do braço robótico Damiao</small></a>
      <a href="#soarm"><span>🤗</span><strong>SO100 / SO101</strong><small>Trilha LeRobot de baixo custo</small></a>
      <a href="#starai"><span>🦾</span><strong>StarAI</strong><small>ROS2 / MoveIt / GR00T</small></a>
      <a href="#lekiwi"><span>🚗</span><strong>Lekiwi</strong><small>Chassi móvel e demonstrações de aplicações</small></a>
      <a href="#stackforce"><span>🦿</span><strong>StackForce Mini</strong><small>Trilha de robô com rodas e pernas</small></a>
      <a href="#reachy"><span>🤗</span><strong>Reachy Mini</strong><small>Trilha de robô interativo de mesa</small></a>
      <a href="#atom"><span>🤖</span><strong>Atom</strong><small>Trilha de robô humanóide compacto</small></a>
    </div>
  </section>

  <section id="robot-kits" className="section-block">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Comece aqui</span>
        <h2>📦 Kits de robô</h2>
      </div>
      <p>Cada trilha começa com a configuração de hardware e depois avança para SDK, ROS, simulação e aplicações de IA.</p>
    </div>

    <div className="product-stack">

<details id="rebot-rs" className="product-card rebot">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦾</span>
      <div>
        <h3>reBot B601-RS Robotic Arm</h3>
        <span>Para teleoperação, preensão visual, ROS2 e coleta de dados de IA</span>
      </div>
    </div>
    <span className="summary-action">Expandir plano de aprendizado</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recomendado para</strong><span>Usuários iniciantes do reBot Arm</span></div>
      <div><strong>Objetivo de aprendizado</strong><span>Executar teleoperação, preensão visual e ROS2</span></div>
      <div><strong>Ordem recomendada</strong><span>Quick Start → LeRobot → Pinocchio → Visual Grasping → ROS2</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/pt-br/rebot_b601_rs_getting_started/"><span className="step-index">1</span><div><b>Quick Start</b><small>Desembale, faça a fiação, ligue, verifique os drivers e teste o movimento básico.</small></div><em>Obrigatório para iniciantes</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_rs_lerobot/"><span className="step-index">2</span><div><b>LeRobot Teleoperation and Data Collection</b><small>Colete dados de teleoperação para aprendizado por imitação e IA incorporada.</small></div><em>Coleta de dados</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_rs_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio Kinematics Visualization</b><small>Explore o modelo do braço, juntas, quadros e cinemática.</small></div><em>Controle avançado</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_rs_grasping_demo/"><span className="step-index">4</span><div><b>Visual Grasping Demo</b><small>Use visão e geração de pose de preensão para pegar objetos reais.</small></div><em>Demonstração de aplicação</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_rs_ros2_integration/"><span className="step-index">5</span><div><b>ROS2 Integration</b><small>Conecte o braço ao ROS2 para percepção, planejamento e simulação.</small></div><em>Integração de sistema</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_rs_web_simulator_developer_guide/"><span className="step-index">6</span><div><b>Web Simulator Development</b><small>Aprenda a integração do Web Simulator com ROS2/MuJoCo para controle sincronizado virtual-real.</small></div><em>Desenvolvimento de simulação</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_rs_isaacsim/"><span className="step-index">7</span><div><b>Isaac Sim Integration</b><small>Simule o braço no Isaac Sim e sincronize com o robô real.</small></div><em>Simulação</em></a>
      <a className="step-card" href="/pt-br/rebot_arm_b601_rs_mit_control/"><span className="step-index">8</span><div><b>MIT Position Control</b><small>Comece com o controle de posição MIT para o reBot Arm B601-RS.</small></div><em>Controle avançado</em></a>
    </div>
  </div>
</details>

<details id="rebot-dm" className="product-card rebot">
<summary>
  <div className="product-head">
    <span className="product-icon">🦾</span>
    <div>
      <h3>reBot B601-DM Robotic Arm</h3>
      <span>Para controle baseado em Damiao, LeRobot, Pinocchio e ROS2</span>
    </div>
  </div>
  <span className="summary-action">Expandir plano de aprendizado</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Usuários B601-DM e coleta de dados de IA</span></div>
    <div><strong>Objetivo de aprendizado</strong><span>Configurar drivers, cinemática, LeRobot e preensão</span></div>
    <div><strong>Ordem recomendada</strong><span>Quick Start → LeRobot → Pinocchio → Visual Grasping → ROS2</span></div>
  </div>
<div className="learning-steps">
  <a className="step-card" href="/pt-br/rebot_b601_dm_getting_started/"><span className="step-index">1</span><div><b>Quick Start</b><small>Verifique a alimentação, CAN, drivers e movimento básico.</small></div><em>Obrigatório para iniciantes</em></a>

  <a className="step-card" href="/pt-br/rebot_arm_b601_dm_lerobot/"><span className="step-index">2</span><div><b>LeRobot Data Collection</b><small>Registre dados de teleoperação para aprendizado por imitação.</small></div><em>Dados de IA</em></a>

  <a className="step-card" href="/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio and Meshcat</b><small>Carregue modelos, visualize movimento e aprenda cinemática.</small></div><em>Noções básicas de controle</em></a>

  <a className="step-card" href="/pt-br/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">4</span><div><b>Visual Grasping Demo</b><small>Combine o braço e a visão para preensão no mundo real.</small></div><em>Demonstração de aplicação</em></a>

  <a className="step-card" href="/pt-br/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">5</span><div><b>ROS2 Integration</b><small>Use ROS2 com MoveIt, percepção e aplicações de sistema.</small></div><em>Integração de sistema</em></a>

  <a className="step-card" href="/pt-br/rebot_arm_b601_dm_web_simulator_developer_guide/"><span className="step-index">6</span><div><b>Web Simulator Development</b><small>Aprenda a integração do Web Simulator com ROS2/MuJoCo para controle sincronizado virtual-real.</small></div><em>Desenvolvimento de simulação</em></a>
</div>
</div>
</details>

<details id="soarm" className="product-card soarm">
<summary>
  <div className="product-head">
    <span className="product-icon">🤗</span>
    <div>
      <h3>SO100 / SO101 Robotic Arm</h3>
      <span>Trilha de baixo custo para LeRobot, simulação, RL e GR00T/VLA</span>
    </div>
  </div>
  <span className="summary-action">Expandir plano de aprendizado</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Aprendizes de LeRobot e IA incorporada de baixo custo</span></div>
    <div><strong>Objetivo de aprendizado</strong><span>Aprender servos, simulação, RL, GR00T e braços duplos</span></div>
    <div><strong>Ordem recomendada</strong><span>Getting Started → Servo Debugging → Simulation → Isaac Lab → GR00T → Dual Arms</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/pt-br/lerobot_so100m_new/"><span className="step-index">1</span><div><b>SO100 / SO101 Quick Start</b><small>Instale o hardware, conecte, calibre e execute um teste básico.</small></div><em>Obrigatório para iniciantes</em></a>
    <a className="step-card" href="/pt-br/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>Servo Debugging Tool</b><small>Verifique o ID do servo, direção, ponto zero e comunicação.</small></div><em>Noções básicas de solução de problemas</em></a>
    <a className="step-card" href="/pt-br/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">3</span><div><b>SO101 and NVIDIA GR00T</b><small>Ajuste fino modelos VLA e faça o deploy no Jetson.</small></div><em>VLA avançado</em></a>
    <a className="step-card" href="/pt-br/lerobot_double_arm_so_arm_training/"><span className="step-index">4</span><div><b>Dual-Arm SO-ARM Training</b><small>Colete dados, treine e execute tarefas de braços duplos.</small></div><em>Tarefas complexas</em></a>
    <a className="step-card" href="/pt-br/soarm_amazinghand_teleop/"><span className="step-index">5</span><div><b>SO-ARM com Amazing Hand Dexterous Hand</b><small>Combine SO-ARM101 com Amazing Hand para LeRobot.</small></div><em>Integração de mão hábil</em></a>
    <a className="step-card" href="/pt-br/simulate_soarm101_by_leisaac/"><span className="step-index">6</span><div><b>Simulação LeIsaac</b><small>Prepare-se para Sim2Real com modelos e tarefas simulados.</small></div><em>Noções básicas de simulação</em></a>
    <a className="step-card" href="/pt-br/training_soarm101_policy_with_isaacLab/"><span className="step-index">7</span><div><b>Aprendizado por Reforço Isaac Lab</b><small>Treine políticas em simulação e revise o design de recompensas.</small></div><em>Treinamento avançado</em></a>
    <a className="step-card optional" href="/pt-br/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b><small>Experimente plataformas de terceiros para coleta de dados e treinamento.</small></div><em>Extensão opcional</em></a>
  </div>
</div>
</details>

<details id="starai" className="product-card starai">
<summary>
  <div className="product-head">
    <span className="product-icon">🦾</span>
    <div>
      <h3>Braço Robótico StarAI</h3>
      <span>Para controle básico, MoveIt 2, planejamento ROS2 e GR00T</span>
    </div>
  </div>
  <span className="summary-action">Expandir plano de aprendizado</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Demonstrações de planejamento ROS2 e controle com IA</span></div>
    <div><strong>Objetivo de aprendizado</strong><span>Executar controle básico, MoveIt 2 e GR00T</span></div>
    <div><strong>Ordem recomendada</strong><span>Início Rápido → MoveIt 2 → GR00T</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/pt-br/lerobot_starai_arm/"><span className="step-index">1</span><div><b>Início Rápido do Braço Robótico StarAI</b><small>Conecte o hardware, execute o controle básico e teste exemplos.</small></div><em>Obrigatório para iniciantes</em></a>
    <a className="step-card" href="/pt-br/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>Planejamento de Movimento com MoveIt 2</b><small>Importe modelos e planeje trajetórias com o MoveIt 2.</small></div><em>ROS2 avançado</em></a>
    <a className="step-card" href="/pt-br/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>StarAI e NVIDIA GR00T</b><small>Construa controle de braço robótico com LLMs / VLA.</small></div><em>Controle com IA</em></a>
  </div>
</div>
</details>

<details id="lekiwi" className="product-card lekiwi">
<summary>
  <div className="product-head">
    <span className="product-icon">🚗</span>
    <div>
      <h3>Chassi Móvel Lekiwi</h3>
      <span>Para controle de chassi e demonstrações de seguimento de som</span>
    </div>
  </div>
  <span className="summary-action">Expandir plano de aprendizado</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Usuários de chassi móvel de primeira viagem</span></div>
    <div><strong>Objetivo de aprendizado</strong><span>Executar controle de chassi e demonstrações de seguimento de som</span></div>
    <div><strong>Observação</strong><span>Etapas ROS2 removidas; permanece apenas o caminho do produto atual</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/pt-br/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Início Rápido do Chassi Móvel Lekiwi</b><small>Monte, conecte, teste o movimento e verifique a segurança.</small></div><em>Obrigatório para iniciantes</em></a>
    <a className="step-card" href="/pt-br/sound_follow_robot/"><span className="step-index">2</span><div><b>Demonstração de Seguimento de Som</b><small>Use entrada de som para conduzir uma demonstração móvel interativa.</small></div><em>Demonstração de aplicação</em></a>
  </div>
</div>
</details>

<details id="stackforce" className="product-card stackforce">
<summary>
  <div className="product-head">
    <span className="product-icon">🦿</span>
    <div>
      <h3>Robô Mini Híbrido com Rodas e Pernas StackForce</h3>
      <span>Para controle híbrido com rodas e pernas, equilíbrio e planejamento de movimento</span>
    </div>
  </div>
  <span className="summary-action">Expandir plano de aprendizado</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Estudantes de robôs móveis e híbridos com rodas e pernas</span></div>
    <div><strong>Objetivo de aprendizado</strong><span>Aprender estrutura, lógica de controle e movimento básico</span></div>
    <div><strong>Ordem recomendada</strong><span>Início Rápido → Princípios de Controle → Depuração de Movimento</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/pt-br/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>Início Rápido do StackForce Mini</b><small>Aprenda o hardware, faça a implantação básica e teste o movimento.</small></div><em>Curso de sistema</em></a>
  </div>
</div>
</details>

<details id="reachy" className="product-card reachy">
<summary>
  <div className="product-head">
    <span className="product-icon">🤗</span>
    <div>
      <h3>Reachy Mini</h3>
      <span>Para HRI de mesa, agentes, SDK, simulação e IA</span>
    </div>
  </div>
  <span className="summary-action">Expandir plano de aprendizado</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Interação com robô de mesa e demonstrações de agentes</span></div>
    <div><strong>Objetivo de aprendizado</strong><span>Começar com o básico, depois SDK, IA e solução de problemas</span></div>
    <div><strong>Documentação</strong><span>Organizada do básico à plataforma, SDK, IA e solução de problemas</span></div>
  </div>

<div className="reachy-path-grid">
            <div className="mini-track">
              <h4>① Conheça o produto primeiro</h4>
              <a href="/pt-br/reachymini_intro/">Introdução ao Produto Reachy Mini</a>
              <a href="/pt-br/reachymini_getting_started/">Guia de Introdução ao ReachyMini</a>
            </div>
            <div className="mini-track">
              <h4>② Escolha sua plataforma</h4>
              <a href="/pt-br/reachymini_platforms_simulation_get_started/">Início Rápido da Simulação</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_get_started/">Guia de Configuração Sem Fio do Reachy Mini</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_usage/">Usando o Reachy Mini</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_hardware/">Folha de Dados de Hardware do Reachy Mini</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_lite_get_started/">Guia de Configuração do Reachy Mini Lite</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_lite_usage/">Usando o Reachy Mini Lite</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_lite_hardware/">Folha de Dados de Hardware do Reachy Mini Lite</a>
            </div>
            <div className="mini-track">
              <h4>③ SDK e noções básicas de desenvolvimento</h4>
              <a href="/pt-br/reachymini_sdk_readme/">Reachy Mini SDK</a>
              <a href="/pt-br/reachymini_sdk_installation/">Guia de Instalação</a>
              <a href="/pt-br/reachymini_sdk_quickstart/">Guia de Início Rápido</a>
              <a href="/pt-br/reachymini_sdk_python-sdk/">Referência do Python SDK</a>
              <a href="/pt-br/reachymini_sdk_core-concept/">Conceitos Centrais e Arquitetura</a>
              <a href="/pt-br/reachymini_sdk_media-architecture/">Arquitetura de Mídia</a>
              <a href="/pt-br/reachymini_sdk_gstreamer-installation/">Instalação do GStreamer</a>
              <a href="/pt-br/reachymini_sdk_javascript-sdk/">JavaScript SDK e Aplicações Web</a>
            </div>
            <div className="mini-track">
              <h4>④ Aplicações e integração de IA</h4>
              <a href="/pt-br/reachymini_sdk_integration/">Integração e Aplicações</a>
              <a href="/pt-br/reachymini_sdk_apps/">Criar e Publicar Aplicações</a>
              <a href="/pt-br/reachymini_conversation/">Integrar a API Doubao LLM</a>
              <a href="/pt-br/reachymini_vibe-code-with-your-agent/">Vibe Coding com um Agente</a>
              <a href="/pt-br/reachymini_agents/">Guia de Desenvolvimento para Agentes de IA</a>
            </div>
            <div className="mini-track">
              <h4>⑤ Mídia, sistema e operações avançadas</h4>
              <a href="/pt-br/reachymini_platforms_reachy_mini_media_advanced_controls/">Controles Avançados de Mídia Sem Fio</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_lite_media_advanced_controls/">Controles Avançados de Mídia do Lite</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_lite_wizard/">Use o Dynamixel Wizard para Ler Parâmetros do Motor</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_development_workflow/">Fluxo de Trabalho de Desenvolvimento Sem Fio</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_install_daemon_from_branch/">Instalar o Daemon a partir de um Branch Específico</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_reflash_the_rpi_iso/">Regravar a Imagem do Raspberry Pi OS</a>
              <a href="/pt-br/reachymini_platforms_reachy_mini_reset/">Redefinir via Bluetooth</a>
            </div>
            <div className="mini-track">
              <h4>⑥ Tutoriais de exemplo</h4>
              <a href="/pt-br/reachymini_examples_minimal_demo/">Demonstração Mínima</a>
              <a href="/pt-br/reachymini_examples_goto_interpolation_playground/">Playground de Interpolação Goto</a>
              <a href="/pt-br/reachymini_examples_look_at/">Olhar para uma Imagem</a>
              <a href="/pt-br/reachymini_examples_mini_head_position_gui/">GUI de Posição da Cabeça</a>
              <a href="/pt-br/reachymini_examples_joy_controller/">Controlador Joystick</a>
              <a href="/pt-br/reachymini_examples_imu/">Exemplo de IMU</a>
              <a href="/pt-br/reachymini_examples_custom_media_manager/">Gerenciador de Mídia Personalizado</a>
              <a href="/pt-br/reachymini_examples_reachy_compliant_demo/">Demonstração de Modo Compliant</a>
              <a href="/pt-br/reachymini_examples_recorded_moves/">Movimentos Gravados</a>
              <a href="/pt-br/reachymini_examples_rerun_viewer/">Visualizador Rerun</a>
              <a href="/pt-br/reachymini_examples_sequence/">Demonstração de Sequência</a>
              <a href="/pt-br/reachymini_examples_sound_doa/">Direção de Chegada do Som</a>
              <a href="/pt-br/reachymini_examples_sound_play/">Reprodução de Som</a>
              <a href="/pt-br/reachymini_examples_sound_record/">Gravação de Som</a>
              <a href="/pt-br/reachymini_examples_take_picture/">Tirar uma Foto</a>
            </div>
            <div className="mini-track">
              <h4>⑦ Solução de problemas e manutenção</h4>
              <a href="/pt-br/reachymini_troubleshooting/">Solução de Problemas e FAQ</a>
              <a href="/pt-br/reachymini_troubleshooting_motors_diagnosis/">Diagnóstico e Solução de Problemas de Motores</a>
              <a href="/pt-br/reachymini_troubleshooting_change_mic_fpc_cable/">Substituir o Cabo FPC do Microfone</a>
              <a href="/pt-br/reachymini_troubleshooting_spherical_joints_maintenance/">Manutenção da Junta Esférica</a>
              <a href="/pt-br/reachymini_troubleshooting_roadmap/">Roteiro do Reachy Mini</a>
            </div>
            <div className="mini-track">
              <h4>⑧ Referência de API</h4>
              <a href="/pt-br/reachymini_api_reachymini/">Referência da ReachyMini API</a>
              <a href="/pt-br/reachymini_api_rest-api/">Referência da REST API</a>
              <a href="/pt-br/reachymini_api_daemon/">Daemon API</a>
              <a href="/pt-br/reachymini_api_motion/">Motion API</a>
              <a href="/pt-br/reachymini_api_media/">Media API</a>
              <a href="/pt-br/reachymini_api_apps/">Referência da Applications API</a>
              <a href="/pt-br/reachymini_api_tools/">Referência da Tools API</a>
              <a href="/pt-br/reachymini_api_utils/">Referência da Utilities API</a>
            </div>
          </div>
        </div>
      </details>

<details id="atom" className="product-card atom">
<summary>
  <div className="product-head">
    <span className="product-icon">🤖</span>
    <div>
      <h3>Robô Humanoide Compacto Atom</h3>
      <span>Para iniciantes em robôs humanoides, depuração de servos, ensino de movimentos e controle remoto via web</span>
    </div>
  </div>
  <span className="summary-action">Expandir plano de aprendizagem</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Usuários iniciantes de robôs humanoides bípedes de mesa que desejam experimentar rapidamente o ensino de movimentos e o controle remoto</span></div>
    <div><strong>Objetivo de aprendizagem</strong><span>Começar a usar imediatamente, ensinar movimentos com o editor de movimentos na web e exportar movimentos personalizados para o firmware do controlador</span></div>
    <div><strong>Ordem recomendada</strong><span>Introdução ao Atom-S → Controle Remoto Web → Editor de Movimentos → Desenvolvimento de Movimentos Personalizados</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/pt-br/atom_s/"><span className="step-index">1</span><div><b>Guia de Introdução ao Atom-S</b><small>Ligue, conecte o controlador remoto web e registre sua primeira sequência de movimento de ensino contínuo.</small></div><em>Obrigatório para iniciantes</em></a>
    <a className="step-card" href="/pt-br/atom_x/"><span className="step-index">2</span><div><b>Guia de Introdução ao Atom-X</b><small>O Atom-X funciona exatamente como o Atom-S — siga o mesmo fluxo de trabalho para começar rapidamente.</small></div><em>Mesma linha</em></a>
  </div>
</div>
</details>

    </div>
  </section>

  <section id="actuators" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referência</span>
        <h2>⚙️ Atuadores de Junta</h2>
      </div>
      <p>Para depuração de motores, protocolos de comunicação e solução de problemas de juntas.</p>
    </div>
    <div className="resource-grid">
      <a href="/pt-br/myactuator_series/">Série MyActuator X</a>
      <a href="/pt-br/damiao_series/">Série Damiao DM43</a>
      <a href="/pt-br/feetech_servo/">Servo Feetech STS3215</a>
      <a href="/pt-br/hightorque_control/">Série HighTorque</a>
      <a href="/pt-br/fashionstar_servo/">Série Fashionstar</a>
      <a href="/pt-br/stackforce_series/">Série Stackforce</a>
      <a href="/pt-br/robstride_control/">RobStride Control</a>
    </div>
  </section>

  <section id="sensors" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referência</span>
        <h2>👁️ Sensores</h2>
      </div>
      <p>Para preensão visual, SLAM, interação por voz e percepção do estado do robô.</p>
    </div>
    <div className="resource-columns">
      <div><h4>📡 LiDAR</h4><a href="/pt-br/robosense_lidar/">RoboSense</a><a href="/pt-br/mid360/">Livox MID360</a><a href="/pt-br/a_loam/">Algoritmo A-LOAM</a><a href="/pt-br/slamtec/">Série Slamtec</a></div>
      <div><h4>📷 Câmeras</h4><a href="/pt-br/orbbec_gemini2/">Orbbec Gemini 2</a><a href="/pt-br/orbbec_gemini_335lg/">Câmera de Profundidade Gemini 335Lg</a><a href="/pt-br/orbbec_gemini336">Câmera de Profundidade Gemini 336</a><a href="/pt-br/sensing_gmsl_cameras">Câmera SENSING GMSL2</a><a href="/pt-br/ac1">RoboSense AC1</a><a href="/pt-br/orbbec_depth_camera_on_ros/">Orbbec e ROS</a><a href="/pt-br/orb_slam3_orbbec_gemini2/">ORB-SLAM3 e Gemini2</a><a href="/pt-br/csi_camera_on_ros/">Câmera CSI no Jetson</a><a href="/pt-br/pycuvslam_recomputer_robotics/">PyCuVSLAM</a></div>
      <div><h4>🎤 Voz</h4><a href="/pt-br/ReSpeaker_Core_v2.0/">ReSpeaker Core v2.0</a><a href="/pt-br/ReSpeaker_Mic_Array_v2.0/">ReSpeaker Mic Array v2.0</a><h4>🧭 IMU</h4><a href="/pt-br/hexfellow_y200/">HEXFELLOW Y200</a><a href="/pt-br/wheeltec_imu/">WHEELTEC IMU</a></div>
    </div>
  </section>

  <section id="software" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referência</span>
        <h2>💻 Ecossistema de Software</h2>
      </div>
      <p>Após a configuração, avance para ROS, Isaac, PX4 ou VLA.</p>
    </div>
    <div className="resource-columns">
      <div><h4>Ecossistema ROS</h4><a href="/pt-br/installing_ros1/">Instalação do ROS 1</a><a href="/pt-br/install_ros2_humble/">Instalação do ROS 2</a><a href="/pt-br/install_isaacros/">Instalação do Isaac ROS</a><a href="/pt-br/isaac_ros_apriltag/">Isaac ROS AprilTag</a><a href="/pt-br/isaac_ros_visual_slam/">Isaac ROS V-SLAM</a></div>
      <div><h4>NVIDIA Isaac</h4><a href="/pt-br/install_isaaclab/">Instalação do Isaac Lab</a><a href="/pt-br/training_soarm101_policy_with_isaacLab/">Aprendizado por Reforço do Braço SO</a><a href="/pt-br/simulate_soarm101_by_leisaac/">Braço Robótico SO100 com IsaacSim</a></div>
      <div><h4>PX4 / VLA</h4><a href="/pt-br/control_px4_with_recomputer_jetson/">PX4 e Jetson</a><a href="/pt-br/object_tracking_with_reComputer_jetson_and_pX4/">Rastreamento de Objetos com PX4</a><a href="/pt-br/control_robotic_arm_via_gr00t/">StarAI e NVIDIA GR00T</a></div>
    </div>
  </section>

</div>
