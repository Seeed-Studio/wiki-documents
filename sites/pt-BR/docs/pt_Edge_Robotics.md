---
description: Documentação e trilhas de aprendizado de robótica da Seeed Studio.
title: AI Robotics Wiki
hide_title: true
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
updatedAt: '2026-09-29'
url: https://wiki.seeedstudio.com/pt-br/robotics_page/
---

import '/src/css/robotics-page-style.css';
import RoboticsPageSearch from '@site/src/components/robotics/RoboticsPageSearch';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';
import RotatingProductShowcase from '@site/src/components/robotics/RotatingProductShowcase';
import RoboticsQuote from '@site/src/components/robotics/RoboticsQuote';

<h1 className="robotics-page-title">AI Robotics Wiki</h1>

<div className="robotics-page">
  <RoboticsQuote />

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>Não sabe por onde começar? Escolha o kit de robô que você tem</h2>
    </div>
  </section>

  <RoboticsPageSearch />

  <div className="robotics-quicklinks">
    <a href="https://279070161-sketch.github.io/reBot/" target="_blank" rel="noopener noreferrer">🚀 Landing Page</a>
    <GitHubStarButton owner="Seeed-Projects" repo="reBot-DevArm" />
    <a href="https://www.seeedstudio.com/Robotics-c-2427.html" target="_blank" rel="noopener noreferrer">🛒 Loja</a>
  </div>

  <section id="robot-kits" className="section-block">
    <RotatingProductShowcase>

<details id="rebot-rs" className="product-card rebot product-card--cover">
  <summary className="product-head">
    <h3>reBot-RS Braço Robótico</h3>
  </summary>
  <div className="product-body">
    <div className="learning-group">
      <h4>Início Rápido &amp; SDK</h4>
      <div className="learning-steps">
        <a className="step-card" href="/pt-br/rebot_b601_rs_getting_started/"><span className="step-index">1</span><div><b>Início Rápido do reBot-RS</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_rs_lerobot/"><span className="step-index">2</span><div><b>reBot-RS com LeRobot</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_rs_pinocchio_meshcat/"><span className="step-index">3</span><div><b>reBot-RS com Pinocchio</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_rs_mit_control/"><span className="step-index">4</span><div><b>SDK de Motor do reBot-RS</b></div></a>
        <a className="step-card" href="/pt-br/sensecraft_robotics/"><span className="step-index">🖥️</span><div><b>VLA sem código: Plataforma SenseCraft Robotics</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Aplicações</h4>
      <div className="learning-steps rebot-rs-applications">
        <a className="step-card" href="/pt-br/rebot_arm_b601_rs_grasping_demo/"><span className="step-index">1</span><div><b>reBot-RS com Pega Visual</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_rs_camera_follow/"><span className="step-index">2</span><div><b>reBot-RS Seguimento de Pulso</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_rs_bimanual/"><span className="step-index">3</span><div><b>Colaboração Bimanual reBot-RS</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_rs_ros2_integration/"><span className="step-index">4</span><div><b>reBot-RS com ROS2</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_rs_isaacsim/"><span className="step-index">5</span><div><b>reBot-RS com Isaac Sim</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_rs_web_simulator_developer_guide/"><span className="step-index">6</span><div><b>Sistema de Controle Web reBot-RS: Robô Real &amp; MuJoCo</b></div></a>
        <a className="step-card" href="/pt-br/wrc_demo_tutorial/"><span className="step-index">7</span><div><b>reBot-RS com Agent Claw</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Recursos Comuns</h4>
      <div className="rebot-resource-list">
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/RS" target="_blank" rel="noopener noreferrer">Descrição e modelos de simulação do reBot-RS (URDF / MJCF / Malha)</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/camera-mounts" target="_blank" rel="noopener noreferrer">Coleção de suportes de câmera</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_RS/3D_Printed_Parts/Soft_Gripper" target="_blank" rel="noopener noreferrer">Kit de garra macia (compartilhado por RS / DM)</a>
        <a href="https://motorbridge.seeedstudio.com/" target="_blank" rel="noopener noreferrer">SDK de motor MotorBridge e guia de depuração</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_RS/README.md" target="_blank" rel="noopener noreferrer">Documentação de hardware do reBot-RS e lista de materiais (BOM)</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_RS/reBot_B601_RS_v1.0_20260625.step" target="_blank" rel="noopener noreferrer">Modelo STEP completo do reBot-RS (v1.0)</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS" target="_blank" rel="noopener noreferrer">Gêmeo digital / sistema de controle Web do reBot-RS</a>
        <a href="https://github.com/Seeed-Projects/reBotArm_control_py" target="_blank" rel="noopener noreferrer">Código de cinemática e controle Pinocchio</a>
        <a href="https://github.com/Seeed-Projects/reBotArmController_ROS2" target="_blank" rel="noopener noreferrer">Controlador ROS2</a>
        <a href="https://github.com/Seeed-Projects/lerobot-robot-seeed-b601" target="_blank" rel="noopener noreferrer">Adaptador seguidor LeRobot (B601)</a>
        <a href="https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102" target="_blank" rel="noopener noreferrer">Adaptador de teleoperação líder LeRobot (102)</a>
      </div>
    </div>
  </div>
</details>


<details id="rebot-dm" className="product-card rebot product-card--cover">
  <summary className="product-head">
    <h3>reBot-DM Braço Robótico</h3>
  </summary>
  <div className="product-body">
    <div className="learning-group">
      <h4>Início Rápido &amp; SDK</h4>
      <div className="learning-steps">
        <a className="step-card" href="/pt-br/rebot_b601_dm_getting_started/"><span className="step-index">1</span><div><b>Início Rápido do reBot-DM</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_dm_lerobot/"><span className="step-index">2</span><div><b>reBot-DM com LeRobot</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_dm_pinocchio_meshcat/"><span className="step-index">3</span><div><b>reBot-DM com Pinocchio</b></div></a>
        <a className="step-card" href="/pt-br/sensecraft_robotics/"><span className="step-index">🖥️</span><div><b>VLA sem código: Plataforma SenseCraft Robotics</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Aplicações</h4>
      <div className="learning-steps">
        <a className="step-card" href="/pt-br/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">1</span><div><b>Pega Visual reBot-DM</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">2</span><div><b>reBot-DM com ROS2</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_dm_bimanual/"><span className="step-index">3</span><div><b>Colaboração Bimanual reBot-DM</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_dm_isaacsim/"><span className="step-index">4</span><div><b>reBot-DM com Isaac Sim</b></div></a>
        <a className="step-card" href="/pt-br/rebot_arm_b601_dm_web_simulator_developer_guide/"><span className="step-index">5</span><div><b>Sistema de Controle Web reBot-DM: Robô Real &amp; MuJoCo</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Recursos Comuns</h4>
      <div className="rebot-resource-list">
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/DM" target="_blank" rel="noopener noreferrer">Descrição e modelos de simulação do reBot-DM (URDF / MJCF / Malha)</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/camera-mounts" target="_blank" rel="noopener noreferrer">Coleção de suportes de câmera</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM/3D_Printed_Parts/Soft_Gripper" target="_blank" rel="noopener noreferrer">Kit de garra macia (compartilhado por RS / DM)</a>
        <a href="https://motorbridge.seeedstudio.com/" target="_blank" rel="noopener noreferrer">SDK de motor MotorBridge e guia de depuração</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_DM/readme.md" target="_blank" rel="noopener noreferrer">Documentação de hardware do reBot-DM e lista de materiais (BOM)</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_DM/reBot_B601_DM_v1.1_20260625.step" target="_blank" rel="noopener noreferrer">Modelo STEP completo do reBot-DM (v1.1)</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM/performance_testing" target="_blank" rel="noopener noreferrer">Teste de desempenho em máquina real do reBot-DM</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_DM" target="_blank" rel="noopener noreferrer">Gêmeo digital / sistema de controle Web do reBot-DM</a>
        <a href="https://github.com/Seeed-Projects/reBotArm_control_py" target="_blank" rel="noopener noreferrer">Código de cinemática e controle Pinocchio</a>
        <a href="https://github.com/Seeed-Projects/reBotArmController_ROS2" target="_blank" rel="noopener noreferrer">Controlador ROS2</a>
        <a href="https://github.com/Seeed-Projects/lerobot-robot-seeed-b601" target="_blank" rel="noopener noreferrer">Adaptador seguidor LeRobot (B601)</a>
        <a href="https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102" target="_blank" rel="noopener noreferrer">Adaptador de teleoperação líder LeRobot (102)</a>
      </div>
    </div>
  </div>
</details>


<details id="rebot-t701-ht" className="product-card rebot product-card--cover">
  <summary className="product-head">
    <img className="t701-ht-cover" src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/T701_HT/rebot-t701-ht-cover.webp" alt="" width={921} height={904} loading="lazy" decoding="async" draggable={false} />
    <h3>reBot Arm T701 HT</h3>
  </summary>
  <div className="product-body">
    <div className="learning-group">
      <h4>Início Rápido &amp; SDK</h4>
      <div className="learning-steps">
        <a className="step-card" href="/pt-br/rebot_t701_ht_getting_started/"><span className="step-index" aria-hidden="true">→</span><b>Início Rápido</b></a>
        <a className="step-card" href="/pt-br/rebot_t701_ht_control_mit/"><span className="step-index" aria-hidden="true">→</span><b>SDK de Controle MIT</b></a>
        <a className="step-card" href="/pt-br/rebot_t701_ht_pinocchio/"><span className="step-index" aria-hidden="true">→</span><b>Pinocchio</b></a>
        <a className="step-card" href="/pt-br/rebot_t701_ht_vr/"><span className="step-index" aria-hidden="true">→</span><b>Teleoperação em VR</b></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Recursos Comuns</h4>
      <div className="rebot-resource-list">
        <a href="https://github.com/Seeed-Projects/reBot-Arm-T701-SDK/tree/main/T701-HT_URDF" target="_blank" rel="noopener noreferrer">Descrição e modelos de simulação (URDF / Malha)</a>
        <a href="https://github.com/Seeed-Projects/reBot-Arm-T701/blob/main/hardware/reBot_T701/README_zh.md" target="_blank" rel="noopener noreferrer">Documentação de hardware e lista de materiais (BOM)</a>
      </div>
    </div>
  </div>
</details>


<details id="soarm" className="product-card soarm product-card--cover">
  <summary className="product-head">
    <h3>SO100 / SO101 Braço Robótico</h3>
  </summary>
  <div className="product-body">
    <div className="learning-group">
      <h4>Início Rápido &amp; Ferramentas</h4>
      <div className="learning-steps">
        <a className="step-card" href="/pt-br/lerobot_so100m_new/"><span className="step-index">1</span><div><b>SO100 / SO101 Início Rápido</b></div></a>
        <a className="step-card" href="/pt-br/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>Ferramenta de Depuração de Servo</b></div></a>
        <a className="step-card" href="/pt-br/lerobot_dataset_tool/"><span className="step-index">3</span><div><b>Ferramenta de Conjunto de Dados SO-Arm</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Aplicações</h4>
      <div className="learning-steps">
        <a className="step-card" href="/pt-br/lerobot_double_arm_so_arm_training/"><span className="step-index">4</span><div><b>Treinamento SO-ARM de Dois Braços</b></div></a>
        <a className="step-card" href="/pt-br/soarm_amazinghand_teleop/"><span className="step-index">5</span><div><b>SO-ARM com Mão Hábil Amazing Hand</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Aplicações</h4>
      <div className="learning-steps">
        <a className="step-card" href="/pt-br/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">6</span><div><b>SO101 e NVIDIA GR00T</b></div></a>
        <a className="step-card" href="/pt-br/simulate_soarm101_by_leisaac/"><span className="step-index">7</span><div><b>Simulação LeIsaac</b></div></a>
        <a className="step-card" href="/pt-br/training_soarm101_policy_with_isaacLab/"><span className="step-index">8</span><div><b>Aprendizado por Reforço Isaac Lab</b></div></a>
        <a className="step-card" href="/pt-br/soarm101_isaac_sim_dli/"><span className="step-index">9</span><div><b>SO-ARM101 com Isaac Sim</b></div></a>
        <a className="step-card optional" href="/pt-br/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b></div></a>
      </div>
    </div>
  </div>
</details>


<details id="amazinghand" className="product-card amazinghand product-card--cover">
  <summary className="product-head">
    <h3>Mão Hábil AmazingHand</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
      <a className="step-card" href="/pt-br/hand_amazinghand/"><span className="step-index">1</span><div><b>Início Rápido AmazingHand</b></div></a>
      <a className="step-card" href="/pt-br/soarm_amazinghand_teleop/"><span className="step-index">2</span><div><b>SO-ARM com AmazingHand</b></div></a>
    </div>
  </div>
</details>


<details id="reachy" className="product-card reachy product-card--cover">
  <summary className="product-head">
    <h3>Reachy Mini</h3>
  </summary>
  <div className="product-body">
    <div className="reachy-path-grid">
      <div className="mini-track">
        <h4>Início Rápido</h4>
        <a href="/pt-br/reachymini_platforms_reachy_mini_get_started/">Reachy Mini (Sem Fio) Início Rápido</a>
        <a href="/pt-br/reachymini_platforms_reachy_mini_lite_get_started/">Reachy Mini Lite Início Rápido</a>
      </div>
      <div className="mini-track">
        <h4>Casos de Desenvolvimento</h4>
        <a href="/pt-br/reachymini_development_cases_home_assistant/">Integração com Home Assistant</a>
        <a href="/pt-br/reachymini_development_cases_gripper_voice_control/">Controle de Voz Reachy Mini para SO-ARM</a>
        <a href="/pt-br/reachymini_development_cases_sway_screen/">Controle de Movimento de Tela Reachy Mini</a>
      </div>
    </div>
  </div>
</details>


<details id="lekiwi" className="product-card lekiwi product-card--cover">
  <summary className="product-head">
    <h3>Chassi Móvel Lekiwi</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/pt-br/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Início Rápido do Chassi Móvel Lekiwi</b></div></a>
    <a className="step-card" href="/pt-br/sound_follow_robot/"><span className="step-index">2</span><div><b>Demo de Seguimento de Som</b></div></a>
  </div>
  </div>
</details>


<details id="stackforce" className="product-card stackforce product-card--cover">
  <summary className="product-head">
    <h3>Robô Mini com Rodas e Pernas StackForce</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/pt-br/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>Início Rápido StackForce Mini</b></div></a>
  </div>
  </div>
</details>


<details id="starai" className="product-card starai product-card--cover">
  <summary className="product-head">
    <h3>Braço Robótico StarAI</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/pt-br/lerobot_starai_arm/"><span className="step-index">1</span><div><b>Início Rápido do Braço Robótico StarAI</b></div></a>
    <a className="step-card" href="/pt-br/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>Planejamento de Movimento MoveIt 2</b></div></a>
    <a className="step-card" href="/pt-br/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>StarAI e NVIDIA GR00T</b></div></a>
  </div>
  </div>
</details>


<details id="atom" className="product-card atom product-card--cover">
  <summary className="product-head">
    <h3>Robô Humanoide Compacto Atom</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/pt-br/atom_s/"><span className="step-index">1</span><div><b>Guia de Introdução Atom-S</b></div></a>
    <a className="step-card" href="/pt-br/atom_x/"><span className="step-index">2</span><div><b>Guia de Introdução Atom-X</b></div></a>
  </div>
  </div>
</details>


  <section id="courses" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Aprendizado</span>
        <h2>Cursos</h2>
      </div>
      <p>Uma série de cursos gratuitos escritos e compartilhados pela equipe de Robótica da Seeed.</p>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/pt-br/robotics/rebot_physical_ai_course_introduction/">
        <span className="step-index">🎓</span>
        <div><b>Curso para Iniciantes</b></div>
        <span className="course-compatibility" aria-label="Supported robotic arms">
          <span className="course-compatibility-badge">reBot-rs</span>
          <span className="course-compatibility-badge">reBot-dm</span>
        </span>
      </a>
      <a className="step-card" href="/pt-br/robotics/soarm_physical_ai_course_introduction/">
        <span className="step-index">🎓</span>
        <div><b>Curso para Iniciantes</b></div>
        <span className="course-compatibility" aria-label="Supported robotic arms">
          <span className="course-compatibility-badge">SO101</span>
        </span>
      </a>
      <a className="step-card" href="/pt-br/robotics/paper_reading_getting_started/">
        <span className="step-index">📄</span>
        <div><b>Análise Detalhada de Artigos</b></div>
        <span className="course-compatibility" aria-label="Supported robotic arms">
          <span className="course-compatibility-badge">reBot-rs</span>
          <span className="course-compatibility-badge">reBot-dm</span>
          <span className="course-compatibility-badge">SO101</span>
        </span>
      </a>
      <a className="step-card" href="/pt-br/robotics/soarm_sim2real_vla_course/">
        <span className="step-index">🚀</span>
        <div><b>Curso VLA Sim-to-Real</b></div>
        <span className="course-compatibility" aria-label="Supported robotic arms">
          <span className="course-compatibility-badge">SO101</span>
        </span>
      </a>
      <a className="step-card" href="https://www.seeedstudio.com/sim-to-real-with-seeed-rebot-and-nvidia-isaac" target="_blank" rel="noopener noreferrer">
        <span className="step-index">📘</span>
        <div><b>Sim-to-Real com NVIDIA Isaac</b></div>
        <span className="course-compatibility" aria-label="Supported robotic arms">
          <span className="course-compatibility-badge">reBot-rs</span>
        </span>
      </a>
    </div>
  </section>

    </RotatingProductShowcase>
  </section>

  <section id="actuators" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Atuadores</span>
        <h2>Atuadores de Junta &amp; Motores</h2>
      </div>
      <p>Para depuração de motores, protocolos de comunicação e solução de problemas de juntas.</p>
    </div>
    <div className="resource-columns">
      <div>
        <h4>Motores de Junta reBot</h4>
        <a href="/pt-br/damiao_series/">Série Damiao DM43</a>
        <a href="/pt-br/robstride_control/">Controle RobStride</a>
      </div>
      <div>
        <h4>Outros Motores de Junta</h4>
        <a href="/pt-br/myactuator_series/">Série MyActuator X</a>
        <a href="/pt-br/hightorque_series/">Série HighTorque / SDK</a>
        <a href="/pt-br/hightorque_getting_started/">Introdução ao HighTorque</a>
        <a href="/pt-br/hightorque_control/">Controle de Motor HighTorque</a>
        <a href="/pt-br/stackforce_series/">Série Stackforce</a>
      </div>
      <div>
        <h4>Servos</h4>
        <a href="/pt-br/feetech_servo/">Servo Feetech STS3215</a>
        <a href="/pt-br/fashionstar_servo/">Série Fashionstar</a>
      </div>
    </div>
  </section>

  <section id="sensors" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Sensores</span>
        <h2>Sensores &amp; Percepção</h2>
      </div>
      <p>Para preensão visual, SLAM, interação por voz e percepção do estado do robô.</p>
    </div>
    <div className="resource-columns">
      <div><h4>LiDAR</h4><a href="/pt-br/robosense_lidar/">RoboSense</a><a href="/pt-br/mid360/">Livox MID360</a><a href="/pt-br/a_loam/">Algoritmo A-LOAM</a><a href="/pt-br/slamtec/">Série Slamtec</a><h4>Voz</h4><a href="/pt-br/ReSpeaker_Core_v2.0/">ReSpeaker Core v2.0</a><a href="/pt-br/ReSpeaker_Mic_Array_v2.0/">ReSpeaker Mic Array v2.0</a><h4>IMU</h4><a href="/pt-br/hexfellow_y200/">HEXFELLOW Y200</a><a href="/pt-br/wheeltec_imu/">WHEELTEC IMU</a></div>
      <div><h4>Câmeras</h4><a href="/pt-br/orbbec_gemini2/">Orbbec Gemini 2</a><a href="/pt-br/orbbec_gemini305/">Orbbec Gemini 305</a><a href="/pt-br/orbbec_gemini_335lg/">Câmera de Profundidade Gemini 335Lg</a><a href="/pt-br/orbbec_gemini336">Câmera de Profundidade Gemini 336</a><a href="/pt-br/sensing_gmsl_cameras">Câmera SENSING GMSL2</a><a href="/pt-br/ac1">RoboSense AC1</a><a href="/pt-br/orbbec_depth_camera_on_ros/">Orbbec e ROS</a><a href="/pt-br/orb_slam3_orbbec_gemini2/">ORB-SLAM3 e Gemini2</a><a href="/pt-br/csi_camera_on_ros/">Câmera CSI no Jetson</a><a href="/pt-br/pycuvslam_recomputer_robotics/">PyCuVSLAM</a></div>
    </div>
  </section>

  <section id="software" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Software</span>
        <h2>Software &amp; Ferramentas</h2>
      </div>
      <p>Após a configuração, avance para ROS, Isaac, PX4 ou VLA.</p>
    </div>
    <div className="resource-columns">
      <div><h4>Ecossistema ROS</h4><a href="/pt-br/installing_ros1/">Instalação do ROS 1</a><a href="/pt-br/install_ros2_humble/">Instalação do ROS 2</a><a href="/pt-br/install_isaacros/">Instalação do Isaac ROS</a><a href="/pt-br/isaac_ros_apriltag/">Isaac ROS AprilTag</a><a href="/pt-br/isaac_ros_visual_slam/">Isaac ROS V-SLAM</a></div>
      <div><h4>NVIDIA Isaac</h4><a href="/pt-br/install_isaaclab/">Instalação do Isaac Lab</a><a href="/pt-br/training_soarm101_policy_with_isaacLab/">SO Arm 101 Aprendizado por Reforço</a><a href="/pt-br/simulate_soarm101_by_leisaac/">SO Arm 101 Braço Robótico com Isaac Sim</a><a href="/pt-br/soarm101_isaac_sim_dli/">SO-ARM101 Isaac Sim DLI</a></div>
      <div><h4>PX4 / VLA</h4><a href="/pt-br/control_px4_with_recomputer_jetson/">PX4 e Jetson</a><a href="/pt-br/object_tracking_with_reComputer_jetson_and_pX4/">Rastreamento de Objetos com PX4</a><a href="/pt-br/control_robotic_arm_via_gr00t/">StarAI e NVIDIA GR00T</a></div>
    </div>
  </section>

</div>
