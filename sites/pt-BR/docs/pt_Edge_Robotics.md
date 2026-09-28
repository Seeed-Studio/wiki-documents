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
updatedAt: '2026-09-11'
url: https://wiki.seeedstudio.com/pt-br/robotics_page/
---

import '/src/css/robotics-page-style.css';
import RoboticsPageSearch from '@site/src/components/robotics/RoboticsPageSearch';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# Robótica

> *"A ciência de hoje é a tecnologia de amanhã." - Edward Teller*

<div className="robotics-page">

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>Comece com o seu kit de robô</h2>
      <p>Encontre o caminho de robótica da Seeed Studio certo por produto. Escolha seu kit e siga as etapas desde a configuração até o desenvolvimento avançado.</p>
    </div>
    <div className="hero-tips">
      <div><strong>Novo dispositivo</strong><span>Desembale, faça a fiação, ligue, instale drivers e teste o movimento</span></div>
      <div><strong>Crie aplicações</strong><span>Use SDKs, LeRobot, ROS2, visão ou controle móvel</span></div>
      <div><strong>Robótica com IA</strong><span>Explore simulação, coleta de dados, GR00T, VLA e RL</span></div>
    </div>
  </section>

  <RoboticsPageSearch />

  <div className="robotics-quicklinks">
    <a href="https://279070161-sketch.github.io/reBot/" target="_blank" rel="noopener noreferrer">🚀 Página de produto</a>
    <GitHubStarButton owner="Seeed-Projects" repo="reBot-DevArm" />
    <a href="https://www.seeedstudio.com/Robotics-c-2427.html" target="_blank" rel="noopener noreferrer">🛒 Loja</a>
  </div>

  <section className="kit-index-panel" aria-label="Quick robot kit selection">
    <div className="section-title-row compact-title">
      <div>
        <span className="section-kicker">Escolha um kit</span>
        <h2>Escolha sua trilha de aprendizado</h2>
      </div>
      <p>Os cartões ficam recolhidos por padrão. Abra o seu kit para ver a trilha.</p>
    </div>
    <div className="kit-index-grid">
      <a href="#rebot-rs"><strong>B601-RS</strong><small>Trilha do braço robótico RobStride</small></a>
      <a href="#rebot-dm"><strong>B601-DM</strong><small>Trilha do braço robótico Damiao</small></a>
      <a href="#soarm"><strong>SO100 / SO101</strong><small>Trilha LeRobot de baixo custo</small></a>
      <a href="#starai"><strong>StarAI</strong><small>ROS2 / MoveIt / GR00T</small></a>
      <a href="#lekiwi"><strong>Lekiwi</strong><small>Chassi móvel e demonstrações de aplicações</small></a>
      <a href="#stackforce"><strong>StackForce Mini</strong><small>Trilha de robô com rodas e pernas</small></a>
      <a href="#reachy"><strong>Reachy Mini</strong><small>Trilha de robô interativo de mesa</small></a>
      <a href="#atom"><strong>Atom</strong><small>Trilha de robô humanóide compacto</small></a>
    </div>
  </section>

  <section id="robot-kits" className="section-block">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Comece aqui</span>
        <h2>Kits de robô</h2>
      </div>
      <p>Cada trilha começa com a configuração de hardware e depois avança para SDK, ROS, simulação e aplicações de IA.</p>
    </div>

    <div className="product-stack">

<details id="rebot-rs" className="product-card rebot">
  <summary>
    <div className="product-head">
      <div>
        <h3>reBot B601-RS Robotic Arm</h3>
        <span>Para teleoperação, apreensão visual, ROS2 e coleta de dados de IA</span>
      </div>
    </div>
    <span className="summary-action">Expandir plano de aprendizado</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recomendado para</strong><span>Usuários iniciantes do reBot Arm</span></div>
      <div><strong>Objetivo de aprendizado</strong><span>Executar teleoperação, apreensão visual e ROS2</span></div>
<div><strong>Ordem recomendada</strong><span>Quick Start → LeRobot → Pinocchio → Visual Grasping → ROS2 → Web Simulator → Isaac Sim → MIT Position Control → Embodied Agent</span></div>
    </div>
    <div className="learning-group">
      <h4>Início rápido e SDK</h4>
      <div className="learning-steps">
        <a className="step-card" href="/pt-br/rebot_b601_rs_getting_started/"><span className="step-index">1</span><div><b>B601-RS Início Rápido</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_rs_lerobot/"><span className="step-index">2</span><div><b>B601-RS com LeRobot</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_rs_pinocchio_meshcat/"><span className="step-index">3</span><div><b>B601-RS com Pinocchio</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_rs_mit_control/"><span className="step-index">4</span><div><b>SDK de Motor B601-RS</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Aplicações</h4>
      <div className="learning-steps">
        <a className="step-card" href="/pt-br/rebot_arm_b601_rs_grasping_demo/"><span className="step-index">1</span><div><b>B601-RS com Preensão Visual</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_rs_ros2_integration/"><span className="step-index">2</span><div><b>B601-RS com ROS2</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_rs_isaacsim/"><span className="step-index">3</span><div><b>B601-RS com Isaacsim</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_rs_web_simulator_developer_guide/"><span className="step-index">4</span><div><b>B601-RS com Web Controler</b></div></a>
        <a className="step-card" href="/pt-br/wrc_demo_tutorial/"><span className="step-index">5</span><div><b>B601-RS com Agent Claw</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Recursos de código aberto</h4>
      <div className="rebot-resource-list">
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_RS" target="_blank" rel="noopener noreferrer">Coleção de hardware B601-RS</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/RS" target="_blank" rel="noopener noreferrer">Pacote de descrição B601-RS (URDF / Mesh)</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS" target="_blank" rel="noopener noreferrer">Gêmeo digital B601-RS / Simulador web</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">Repositório principal do reBot-DevArm</a>
        <a href="https://github.com/Seeed-Projects/reBotArm_control_py" target="_blank" rel="noopener noreferrer">SDK em Python</a>
        <a href="https://github.com/Seeed-Projects/reBotArmController_ROS2" target="_blank" rel="noopener noreferrer">Controlador ROS2</a>
        <a href="https://github.com/Seeed-Projects/lerobot-robot-seeed-b601" target="_blank" rel="noopener noreferrer">Adaptador de robô LeRobot</a>
        <a href="https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102" target="_blank" rel="noopener noreferrer">Adaptador de teleoperador LeRobot</a>
        <a href="https://github.com/Seeed-Projects/reBot-Isaacsim" target="_blank" rel="noopener noreferrer">Isaac Sim</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm-Grasp" target="_blank" rel="noopener noreferrer">Demo de preensão visual</a>
        <a href="https://github.com/xiehuangbao888/Camera-Mount" target="_blank" rel="noopener noreferrer">Coleção de suportes de câmera</a>
      </div>
    </div>
  </div>
</details>

<details id="rebot-dm" className="product-card rebot">
<summary>
  <div className="product-head">
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
    <div><strong>Objetivo de aprendizado</strong><span>Configurar drivers, cinemática, LeRobot e apreensão</span></div>
    <div><strong>Ordem recomendada</strong><span>Quick Start → LeRobot → Pinocchio → Visual Grasping → ROS2</span></div>
  </div>
    <div className="learning-group">
      <h4>Início rápido e SDK</h4>
      <div className="learning-steps">
        <a className="step-card" href="/pt-br/rebot_b601_dm_getting_started/"><span className="step-index">1</span><div><b>Início Rápido B601-DM</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_dm_lerobot/"><span className="step-index">2</span><div><b>B601-DM com LeRobot</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/"><span className="step-index">3</span><div><b>B601-DM com Pinocchio</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Aplicações</h4>
      <div className="learning-steps">
        <a className="step-card" href="/pt-br/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">1</span><div><b>B601-DM Preensão Visual</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">2</span><div><b>B601-DM com ROS2</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_dm_isaacsim/"><span className="step-index">3</span><div><b>B601-DM com Isaac Sim</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_dm_web_simulator_developer_guide/"><span className="step-index">4</span><div><b>B601-DM com Web Controler</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Recursos de código aberto</h4>
      <div className="rebot-resource-list">
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM" target="_blank" rel="noopener noreferrer">Coleção de hardware B601-DM</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/DM" target="_blank" rel="noopener noreferrer">Pacote de descrição B601-DM (URDF / Mesh)</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM/performance_testing" target="_blank" rel="noopener noreferrer">Teste de desempenho em máquina real B601-DM</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_DM" target="_blank" rel="noopener noreferrer">Gêmeo digital B601-DM / Simulador web</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">Repositório principal do reBot-DevArm</a>
        <a href="https://github.com/Seeed-Projects/reBotArm_control_py" target="_blank" rel="noopener noreferrer">SDK em Python</a>
        <a href="https://github.com/Seeed-Projects/reBotArmController_ROS2" target="_blank" rel="noopener noreferrer">Controlador ROS2</a>
        <a href="https://github.com/Seeed-Projects/lerobot-robot-seeed-b601" target="_blank" rel="noopener noreferrer">Adaptador de robô LeRobot</a>
        <a href="https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102" target="_blank" rel="noopener noreferrer">Adaptador de teleoperador LeRobot</a>
        <a href="https://github.com/Seeed-Projects/reBot-Isaacsim" target="_blank" rel="noopener noreferrer">Isaac Sim</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm-Grasp" target="_blank" rel="noopener noreferrer">Demo de preensão visual</a>
        <a href="https://github.com/xiehuangbao888/Camera-Mount" target="_blank" rel="noopener noreferrer">Coleção de suportes de câmera</a>
      </div>
    </div>
</div>
</details>

<details id="soarm" className="product-card soarm">
<summary>
  <div className="product-head">
    <div>
      <h3>SO100 / SO101 Robotic Arm</h3>
      <span>Trilha de baixo custo para LeRobot, simulação, RL e GR00T/VLA</span>
    </div>
  </div>
  <span className="summary-action">Expandir plano de aprendizado</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Estudantes de LeRobot e IA incorporada de baixo custo</span></div>
    <div><strong>Objetivo de aprendizado</strong><span>Aprender servos, simulação, RL, GR00T e braços duplos</span></div>
    <div><strong>Ordem recomendada</strong><span>Getting Started → Servo Debugging → Simulation → Isaac Lab → GR00T → Dual Arms</span></div>
  </div>
  <div className="learning-group">
    <h4>Início rápido e ferramentas</h4>
    <div className="learning-steps">
    <a className="step-card" href="/pt-br/lerobot_so100m_new/"><span className="step-index">1</span><div><b>SO100 / SO101 Quick Start</b></div></a>
    <a className="step-card" href="/pt-br/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>Servo Debugging Tool</b></div></a>
    </div>
  </div>
  <div className="learning-group">
    <h4>Aplicações</h4>
    <div className="learning-steps">
    <a className="step-card" href="/pt-br/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">3</span><div><b>SO101 e NVIDIA GR00T</b></div></a>
    <a className="step-card" href="/pt-br/lerobot_double_arm_so_arm_training/"><span className="step-index">4</span><div><b>Treinamento SO-ARM de dois braços</b></div></a>
    <a className="step-card" href="/pt-br/soarm_amazinghand_teleop/"><span className="step-index">5</span><div><b>SO-ARM com Amazing Hand Dexterous Hand</b></div></a>
    <a className="step-card" href="/pt-br/simulate_soarm101_by_leisaac/"><span className="step-index">6</span><div><b>Simulação LeIsaac</b></div></a>
    <a className="step-card" href="/pt-br/training_soarm101_policy_with_isaacLab/"><span className="step-index">7</span><div><b>Aprendizado por reforço no Isaac Lab</b></div></a>
    <a className="step-card optional" href="/pt-br/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b></div></a>
    </div>
  </div>
</div>
</details>

<details id="starai" className="product-card starai product-card--cover">
<summary>
  <div className="product-head">
    <div>
      <h3>StarAI Robotic Arm</h3>
      <span>Para controle básico, MoveIt 2, planejamento ROS2 e GR00T</span>
    </div>
  </div>
  <span className="summary-action">Expandir plano de aprendizado</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Planejamento ROS2 e demonstrações de controle com IA</span></div>
    <div><strong>Objetivo de aprendizado</strong><span>Executar controle básico, MoveIt 2 e GR00T</span></div>
    <div><strong>Ordem recomendada</strong><span>Quick Start → MoveIt 2 → GR00T</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/pt-br/lerobot_starai_arm/"><span className="step-index">1</span><div><b>StarAI Robotic Arm Quick Start</b></div></a>
    <a className="step-card" href="/pt-br/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>Planejamento de movimento com MoveIt 2</b></div></a>
    <a className="step-card" href="/pt-br/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>StarAI e NVIDIA GR00T</b></div></a>
  </div>
</div>
</details>

<details id="lekiwi" className="product-card lekiwi">
<summary>
  <div className="product-head">
    <div>
      <h3>Lekiwi Mobile Chassis</h3>
      <span>Para controle de chassi e demonstrações de seguimento de som</span>
    </div>
  </div>
  <span className="summary-action">Expandir plano de aprendizado</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Usuários de chassi móvel pela primeira vez</span></div>
    <div><strong>Objetivo de aprendizado</strong><span>Executar controle de chassi e demonstrações de seguimento de som</span></div>
    <div><strong>Observação</strong><span>Etapas ROS2 removidas; apenas o caminho do produto atual permanece</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/pt-br/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Lekiwi Mobile Chassis Quick Start</b></div></a>
    <a className="step-card" href="/pt-br/sound_follow_robot/"><span className="step-index">2</span><div><b>Demonstração de seguimento de som</b></div></a>
  </div>
</div>
</details>

<details id="stackforce" className="product-card stackforce">
<summary>
  <div className="product-head">
    <div>
      <h3>StackForce Mini Wheeled-Legged Robot</h3>
      <span>Para controle com rodas e pernas, equilíbrio e planejamento de movimento</span>
    </div>
  </div>
  <span className="summary-action">Expandir plano de aprendizado</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Estudantes de robôs móveis e com rodas e pernas</span></div>
    <div><strong>Objetivo de aprendizado</strong><span>Aprender estrutura, lógica de controle e movimento básico</span></div>
    <div><strong>Ordem recomendada</strong><span>Quick Start → Princípios de controle → Depuração de movimento</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/pt-br/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>StackForce Mini Quick Start</b></div></a>
  </div>
</div>
</details>

<details id="reachy" className="product-card reachy">
<summary>
  <div className="product-head">
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
        <h4>Início rápido</h4>
        <a href="/pt-br/reachymini_platforms_reachy_mini_get_started/">Início rápido do Reachy Mini (sem fio)</a>
        <a href="/pt-br/reachymini_platforms_reachy_mini_lite_get_started/">Início rápido do Reachy Mini Lite</a>
      </div>
      <div className="mini-track">
        <h4>Casos de desenvolvimento</h4>
        <a href="/pt-br/reachymini_development_cases_home_assistant/">Integração com Home Assistant</a>
        <a href="/pt-br/reachymini_development_cases_gripper_voice_control/">Controle por voz do Reachy Mini para o SO-ARM</a>
        <a href="/pt-br/reachymini_development_cases_sway_screen/">Reachy Mini controle de movimento de tela</a>
      </div>
    </div>
        </div>
      </details>

<details id="atom" className="product-card atom product-card--cover">
<summary>
  <div className="product-head">
    <div>
      <h3>Atom Compact Humanoid Robot</h3>
      <span>Para iniciantes em robôs humanóides, depuração de servos, ensino de movimentos e controle remoto via web</span>
    </div>
  </div>
  <span className="summary-action">Expandir plano de aprendizado</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Usuários iniciantes de robôs humanóides bípedes de mesa que desejam experimentar rapidamente o ensino de movimentos e o controle remoto</span></div>
    <div><strong>Objetivo de aprendizado</strong><span>Começar a usar imediatamente, ensinar movimentos com o editor de movimentos na web e exportar movimentos personalizados para o firmware do controlador</span></div>
    <div><strong>Ordem recomendada</strong><span>Introdução ao Atom-S → Controle remoto via Web → Editor de movimentos → Desenvolvimento de movimentos personalizados</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/pt-br/atom_s/"><span className="step-index">1</span><div><b>Guia de Introdução ao Atom-S</b></div></a>
    <a className="step-card" href="/pt-br/atom_x/"><span className="step-index">2</span><div><b>Guia de Introdução ao Atom-X</b></div></a>
  </div>
</div>
</details>

    </div>
  </section>

  <section id="actuators" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referência</span>
        <h2>Atuadores de juntas</h2>
      </div>
      <p>Para depuração de motores, protocolos de comunicação e solução de problemas das juntas.</p>
    </div>
    <div className="resource-grid">
      <a href="/pt-br/myactuator_series/">Série MyActuator X</a>
      <a href="/pt-br/damiao_series/">Série Damiao DM43</a>
      <a href="/pt-br/feetech_servo/">Servo Feetech STS3215</a>
      <a href="/pt-br/hightorque_control/">Série HighTorque</a>
      <a href="/pt-br/fashionstar_servo/">Série Fashionstar</a>
      <a href="/pt-br/stackforce_series/">Série Stackforce</a>
      <a href="/pt-br/robstride_control/">Controle RobStride</a>
    </div>
  </section>

  <section id="sensors" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referência</span>
        <h2>Sensores</h2>
      </div>
      <p>Para preensão visual, SLAM, interação por voz e percepção do estado do robô.</p>
    </div>
    <div className="resource-columns">
      <div><h4>LiDAR</h4><a href="/pt-br/robosense_lidar/">RoboSense</a><a href="/pt-br/mid360/">Livox MID360</a><a href="/pt-br/a_loam/">Algoritmo A-LOAM</a><a href="/pt-br/slamtec/">Série Slamtec</a></div>
      <div><h4>Câmeras</h4><a href="/pt-br/orbbec_gemini2/">Orbbec Gemini 2</a><a href="/pt-br/orbbec_gemini_335lg/">Câmera de profundidade Gemini 335Lg</a><a href="/pt-br/orbbec_gemini336">Câmera de profundidade Gemini 336</a><a href="/pt-br/sensing_gmsl_cameras">Câmera SENSING GMSL2</a><a href="/pt-br/ac1">RoboSense AC1</a><a href="/pt-br/orbbec_depth_camera_on_ros/">Orbbec e ROS</a><a href="/pt-br/orb_slam3_orbbec_gemini2/">ORB-SLAM3 e Gemini2</a><a href="/pt-br/csi_camera_on_ros/">Câmera CSI no Jetson</a><a href="/pt-br/pycuvslam_recomputer_robotics/">PyCuVSLAM</a></div>
      <div><h4>Voz</h4><a href="/pt-br/ReSpeaker_Core_v2.0/">ReSpeaker Core v2.0</a><a href="/pt-br/ReSpeaker_Mic_Array_v2.0/">ReSpeaker Mic Array v2.0</a><h4>IMU</h4><a href="/pt-br/hexfellow_y200/">HEXFELLOW Y200</a><a href="/pt-br/wheeltec_imu/">WHEELTEC IMU</a></div>
    </div>
  </section>

  <section id="software" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referência</span>
        <h2>Ecossistema de Software</h2>
      </div>
      <p>Após a configuração, avance para ROS, Isaac, PX4 ou VLA.</p>
    </div>
    <div className="resource-columns">
      <div><h4>Ecossistema ROS</h4><a href="/pt-br/installing_ros1/">Instalação do ROS 1</a><a href="/pt-br/install_ros2_humble/">Instalação do ROS 2</a><a href="/pt-br/install_isaacros/">Instalação do Isaac ROS</a><a href="/pt-br/isaac_ros_apriltag/">Isaac ROS AprilTag</a><a href="/pt-br/isaac_ros_visual_slam/">Isaac ROS V-SLAM</a></div>
      <div><h4>NVIDIA Isaac</h4><a href="/pt-br/install_isaaclab/">Instalação do Isaac Lab</a><a href="/pt-br/training_soarm101_policy_with_isaacLab/">Aprendizado por reforço do braço SO</a><a href="/pt-br/simulate_soarm101_by_leisaac/">Braço robótico SO100 com IsaacSim</a></div>
      <div><h4>PX4 / VLA</h4><a href="/pt-br/control_px4_with_recomputer_jetson/">PX4 e Jetson</a><a href="/pt-br/object_tracking_with_reComputer_jetson_and_pX4/">Rastreamento de objetos com PX4</a><a href="/pt-br/control_robotic_arm_via_gr00t/">StarAI e NVIDIA GR00T</a></div>
    </div>
  </section>

</div>
