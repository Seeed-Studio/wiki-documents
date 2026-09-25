---
description: Documentación y rutas de aprendizaje de robótica de Seeed Studio.
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
url: https://wiki.seeedstudio.com/es/robotics_page/
---

import '/src/css/robotics-page-style.css';
import RoboticsPageSearch from '@site/src/components/robotics/RoboticsPageSearch';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# Robótica

> *"La ciencia de hoy es la tecnología de mañana." - Edward Teller*

<div className="robotics-page">

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>Empieza con tu kit de robot</h2>
      <p>Encuentra la ruta de robótica de Seeed Studio adecuada según el producto. Elige tu kit y sigue los pasos desde la configuración hasta el desarrollo avanzado.</p>
    </div>
    <div className="hero-tips">
      <div><strong>Nuevo dispositivo</strong><span>Desempaqueta, cablea, enciende, instala controladores y prueba el movimiento</span></div>
      <div><strong>Crear aplicaciones</strong><span>Usa SDKs, LeRobot, ROS2, visión o control móvil</span></div>
      <div><strong>Robótica con IA</strong><span>Explora simulación, recopilación de datos, GR00T, VLA y RL</span></div>
    </div>
  </section>

  <RoboticsPageSearch />

  <div className="robotics-quicklinks">
    <a href="https://279070161-sketch.github.io/reBot/" target="_blank" rel="noopener noreferrer">🚀 Página de producto</a>
    <GitHubStarButton owner="Seeed-Projects" repo="reBot-DevArm" />
    <a href="https://www.seeedstudio.com/Robotics-c-2427.html" target="_blank" rel="noopener noreferrer">🛒 Tienda</a>
  </div>

  <section className="kit-index-panel" aria-label="Quick robot kit selection">
    <div className="section-title-row compact-title">
      <div>
        <span className="section-kicker">Elige un kit</span>
        <h2>Elige tu ruta de aprendizaje</h2>
      </div>
      <p>Las tarjetas están contraídas de forma predeterminada. Abre tu kit para ver su ruta.</p>
    </div>
    <div className="kit-index-grid">
      <a href="#rebot-rs"><strong>B601-RS</strong><small>Ruta del brazo robótico RobStride</small></a>
      <a href="#rebot-dm"><strong>B601-DM</strong><small>Ruta del brazo robótico Damiao</small></a>
      <a href="#soarm"><strong>SO100 / SO101</strong><small>Ruta LeRobot de bajo coste</small></a>
      <a href="#starai"><strong>StarAI</strong><small>ROS2 / MoveIt / GR00T</small></a>
      <a href="#lekiwi"><strong>Lekiwi</strong><small>Chasis móvil y demostraciones de aplicaciones</small></a>
      <a href="#stackforce"><strong>StackForce Mini</strong><small>Ruta de robot con ruedas y patas</small></a>
      <a href="#reachy"><strong>Reachy Mini</strong><small>Ruta de robot interactivo de escritorio</small></a>
      <a href="#atom"><strong>Atom</strong><small>Ruta de robot humanoide compacto</small></a>
    </div>
  </section>

  <section id="robot-kits" className="section-block">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Empieza aquí</span>
        <h2>Kits de robots</h2>
      </div>
      <p>Cada ruta comienza con la configuración del hardware y luego pasa al SDK, ROS, simulación y aplicaciones de IA.</p>
    </div>

    <div className="product-stack">

<details id="rebot-rs" className="product-card rebot">
  <summary>
    <div className="product-head">
      <div>
        <h3>Brazo robótico reBot B601-RS</h3>
        <span>Para teleoperación, agarre visual, ROS2 y recopilación de datos de IA</span>
      </div>
    </div>
    <span className="summary-action">Ampliar plan de aprendizaje</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recomendado para</strong><span>Usuarios primerizos del brazo reBot</span></div>
      <div><strong>Objetivo de aprendizaje</strong><span>Ejecutar teleoperación, agarre visual y ROS2</span></div>
<div><strong>Orden recomendado</strong><span>Quick Start → LeRobot → Pinocchio → Visual Grasping → ROS2 → Web Simulator → Isaac Sim → MIT Position Control → Embodied Agent</span></div>
    </div>
    <div className="learning-group">
      <h4>Inicio rápido y SDK</h4>
      <div className="learning-steps">
        <a className="step-card" href="/es/rebot_b601_rs_getting_started/"><span className="step-index">1</span><div><b>Inicio rápido de B601-RS</b></div></a>
        <a className="step-card" href="/es/rebot_arm_b601_rs_lerobot/"><span className="step-index">2</span><div><b>B601-RS con LeRobot</b></div></a>
        <a className="step-card" href="/es/rebot_arm_b601_rs_pinocchio_meshcat/"><span className="step-index">3</span><div><b>B601-RS con Pinocchio</b></div></a>
        <a className="step-card" href="/es/rebot_arm_b601_rs_mit_control/"><span className="step-index">4</span><div><b>SDK de motor B601-RS</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Aplicaciones</h4>
      <div className="learning-steps">
        <a className="step-card" href="/es/rebot_arm_b601_rs_grasping_demo/"><span className="step-index">1</span><div><b>B601-RS con agarre visual</b></div></a>
        <a className="step-card" href="/es/rebot_arm_b601_rs_ros2_integration/"><span className="step-index">2</span><div><b>B601-RS con ROS2</b></div></a>
        <a className="step-card" href="/es/rebot_arm_b601_rs_isaacsim/"><span className="step-index">3</span><div><b>B601-RS con Isaacsim</b></div></a>
        <a className="step-card" href="/es/rebot_arm_b601_rs_web_simulator_developer_guide/"><span className="step-index">4</span><div><b>B601-RS con Controlador Web</b></div></a>
        <a className="step-card" href="/es/wrc_demo_tutorial/"><span className="step-index">5</span><div><b>B601-RS con Agent Claw</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Recursos de código abierto</h4>
      <div className="rebot-resource-list">
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_RS" target="_blank" rel="noopener noreferrer">Colección de hardware B601-RS</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/RS" target="_blank" rel="noopener noreferrer">Paquete de descripción B601-RS (URDF / Mesh)</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS" target="_blank" rel="noopener noreferrer">Gemelo digital B601-RS / Simulador web</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">Repositorio principal de reBot-DevArm</a>
        <a href="https://github.com/Seeed-Projects/reBotArm_control_py" target="_blank" rel="noopener noreferrer">SDK de Python</a>
        <a href="https://github.com/Seeed-Projects/reBotArmController_ROS2" target="_blank" rel="noopener noreferrer">Controlador ROS2</a>
        <a href="https://github.com/Seeed-Projects/lerobot-robot-seeed-b601" target="_blank" rel="noopener noreferrer">Adaptador de robot LeRobot</a>
        <a href="https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102" target="_blank" rel="noopener noreferrer">Adaptador de teleoperador LeRobot</a>
        <a href="https://github.com/Seeed-Projects/reBot-Isaacsim" target="_blank" rel="noopener noreferrer">Isaac Sim</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm-Grasp" target="_blank" rel="noopener noreferrer">Demostración de agarre visual</a>
        <a href="https://github.com/xiehuangbao888/Camera-Mount" target="_blank" rel="noopener noreferrer">Colección de soportes de cámara</a>
      </div>
    </div>
  </div>
</details>

<details id="rebot-dm" className="product-card rebot">
<summary>
  <div className="product-head">
    <div>
      <h3>Brazo robótico reBot B601-DM</h3>
      <span>Para control basado en Damiao, LeRobot, Pinocchio y ROS2</span>
    </div>
  </div>
  <span className="summary-action">Ampliar plan de aprendizaje</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Usuarios de B601-DM y recopilación de datos de IA</span></div>
    <div><strong>Objetivo de aprendizaje</strong><span>Configurar controladores, cinemática, LeRobot y agarre</span></div>
    <div><strong>Orden recomendado</strong><span>Quick Start → LeRobot → Pinocchio → Visual Grasping → ROS2</span></div>
  </div>
    <div className="learning-group">
      <h4>Inicio rápido y SDK</h4>
      <div className="learning-steps">
        <a className="step-card" href="/es/rebot_b601_dm_getting_started/"><span className="step-index">1</span><div><b>Inicio rápido de B601-DM</b></div></a>
        <a className="step-card" href="/es/rebot_arm_b601_dm_lerobot/"><span className="step-index">2</span><div><b>B601-DM con LeRobot</b></div></a>
        <a className="step-card" href="/es/rebot_arm_b601_dm_pinocchio_meshcat/"><span className="step-index">3</span><div><b>B601-DM con Pinocchio</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Aplicaciones</h4>
      <div className="learning-steps">
        <a className="step-card" href="/es/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">1</span><div><b>B601-DM Agarre Visual</b></div></a>
        <a className="step-card" href="/es/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">2</span><div><b>B601-DM con ROS2</b></div></a>
        <a className="step-card" href="/es/rebot_arm_b601_dm_isaacsim/"><span className="step-index">3</span><div><b>B601-DM con Isaac Sim</b></div></a>
        <a className="step-card" href="/es/rebot_arm_b601_dm_web_simulator_developer_guide/"><span className="step-index">4</span><div><b>B601-DM con Controlador Web</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Recursos de código abierto</h4>
      <div className="rebot-resource-list">
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM" target="_blank" rel="noopener noreferrer">Colección de hardware B601-DM</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/DM" target="_blank" rel="noopener noreferrer">Paquete de descripción B601-DM (URDF / Mesh)</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM/performance_testing" target="_blank" rel="noopener noreferrer">Pruebas de rendimiento en máquina real B601-DM</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_DM" target="_blank" rel="noopener noreferrer">Gemelo digital B601-DM / Simulador web</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">Repositorio principal de reBot-DevArm</a>
        <a href="https://github.com/Seeed-Projects/reBotArm_control_py" target="_blank" rel="noopener noreferrer">SDK de Python</a>
        <a href="https://github.com/Seeed-Projects/reBotArmController_ROS2" target="_blank" rel="noopener noreferrer">Controlador ROS2</a>
        <a href="https://github.com/Seeed-Projects/lerobot-robot-seeed-b601" target="_blank" rel="noopener noreferrer">Adaptador de robot LeRobot</a>
        <a href="https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102" target="_blank" rel="noopener noreferrer">Adaptador de teleoperador LeRobot</a>
        <a href="https://github.com/Seeed-Projects/reBot-Isaacsim" target="_blank" rel="noopener noreferrer">Isaac Sim</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm-Grasp" target="_blank" rel="noopener noreferrer">Demostración de agarre visual</a>
        <a href="https://github.com/xiehuangbao888/Camera-Mount" target="_blank" rel="noopener noreferrer">Colección de soportes de cámara</a>
      </div>
    </div>
</div>
</details>

<details id="soarm" className="product-card soarm">
<summary>
  <div className="product-head">
    <div>
      <h3>Brazo robótico SO100 / SO101</h3>
      <span>Ruta de bajo coste para LeRobot, simulación, RL y GR00T/VLA</span>
    </div>
  </div>
  <span className="summary-action">Ampliar plan de aprendizaje</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Estudiantes de LeRobot y de IA encarnada de bajo coste</span></div>
    <div><strong>Objetivo de aprendizaje</strong><span>Aprender servos, simulación, RL, GR00T y brazos dobles</span></div>
    <div><strong>Orden recomendado</strong><span>Getting Started → Servo Debugging → Simulation → Isaac Lab → GR00T → Dual Arms</span></div>
  </div>
  <div className="learning-group">
    <h4>Inicio rápido y herramientas</h4>
    <div className="learning-steps">
    <a className="step-card" href="/es/lerobot_so100m_new/"><span className="step-index">1</span><div><b>SO100 / SO101 Quick Start</b></div></a>
    <a className="step-card" href="/es/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>Herramienta de depuración de servos</b></div></a>
    </div>
  </div>
  <div className="learning-group">
    <h4>Aplicaciones</h4>
    <div className="learning-steps">
    <a className="step-card" href="/es/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">3</span><div><b>SO101 y NVIDIA GR00T</b></div></a>
    <a className="step-card" href="/es/lerobot_double_arm_so_arm_training/"><span className="step-index">4</span><div><b>Entrenamiento de SO-ARM de doble brazo</b></div></a>
    <a className="step-card" href="/es/soarm_amazinghand_teleop/"><span className="step-index">5</span><div><b>SO-ARM con Amazing Hand Mano Destreza</b></div></a>
    <a className="step-card" href="/es/simulate_soarm101_by_leisaac/"><span className="step-index">6</span><div><b>Simulación LeIsaac</b></div></a>
    <a className="step-card" href="/es/training_soarm101_policy_with_isaacLab/"><span className="step-index">7</span><div><b>Aprendizaje por refuerzo en Isaac Lab</b></div></a>
    <a className="step-card optional" href="/es/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b></div></a>
    </div>
  </div>
</div>
</details>

<details id="starai" className="product-card starai product-card--cover">
<summary>
  <div className="product-head">
    <div>
      <h3>Brazo robótico StarAI</h3>
      <span>Para control básico, MoveIt 2, planificación con ROS2 y GR00T</span>
    </div>
  </div>
  <span className="summary-action">Ampliar plan de aprendizaje</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Planificación con ROS2 y demostraciones de control con IA</span></div>
    <div><strong>Objetivo de aprendizaje</strong><span>Ejecutar control básico, MoveIt 2 y GR00T</span></div>
    <div><strong>Orden recomendado</strong><span>Inicio rápido → MoveIt 2 → GR00T</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/es/lerobot_starai_arm/"><span className="step-index">1</span><div><b>Inicio rápido del brazo robótico StarAI</b></div></a>
    <a className="step-card" href="/es/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>Planificación de movimiento con MoveIt 2</b></div></a>
    <a className="step-card" href="/es/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>StarAI y NVIDIA GR00T</b></div></a>
  </div>
</div>
</details>

<details id="lekiwi" className="product-card lekiwi">
<summary>
  <div className="product-head">
    <div>
      <h3>Chasis móvil Lekiwi</h3>
      <span>Para control de chasis y demostraciones de seguimiento de sonido</span>
    </div>
  </div>
  <span className="summary-action">Ampliar plan de aprendizaje</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Usuarios primerizos de chasis móvil</span></div>
    <div><strong>Objetivo de aprendizaje</strong><span>Ejecutar control de chasis y demostraciones de seguimiento de sonido</span></div>
    <div><strong>Nota</strong><span>Se eliminaron los pasos de ROS2; solo se mantiene la ruta del producto actual</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/es/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Inicio rápido del chasis móvil Lekiwi</b></div></a>
    <a className="step-card" href="/es/sound_follow_robot/"><span className="step-index">2</span><div><b>Demostración de seguimiento de sonido</b></div></a>
  </div>
</div>
</details>

<details id="stackforce" className="product-card stackforce">
<summary>
  <div className="product-head">
    <div>
      <h3>Robot mini con ruedas y patas StackForce</h3>
      <span>Para control con ruedas y patas, equilibrio y planificación de movimiento</span>
    </div>
  </div>
  <span className="summary-action">Ampliar plan de aprendizaje</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Aprendices de robots móviles y con ruedas y patas</span></div>
    <div><strong>Objetivo de aprendizaje</strong><span>Aprender estructura, lógica de control y movimiento básico</span></div>
    <div><strong>Orden recomendado</strong><span>Inicio rápido → Principios de control → Depuración de movimiento</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/es/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>Inicio rápido de StackForce Mini</b></div></a>
  </div>
</div>
</details>

<details id="reachy" className="product-card reachy">
<summary>
  <div className="product-head">
    <div>
      <h3>Reachy Mini</h3>
      <span>Para HRI de escritorio, agentes, SDK, simulación e IA</span>
    </div>
  </div>
  <span className="summary-action">Ampliar plan de aprendizaje</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Interacción con robots de escritorio y demostraciones de agentes</span></div>
    <div><strong>Objetivo de aprendizaje</strong><span>Comenzar con lo básico y luego SDK, IA y resolución de problemas</span></div>
    <div><strong>Documentación</strong><span>Organizada desde lo básico hasta plataforma, SDK, IA y resolución de problemas</span></div>
  </div>

<div className="reachy-path-grid">
      <div className="mini-track">
        <h4>Inicio rápido</h4>
        <a href="/es/reachymini_platforms_reachy_mini_get_started/">Inicio rápido de Reachy Mini (inalámbrico)</a>
        <a href="/es/reachymini_platforms_reachy_mini_lite_get_started/">Inicio rápido de Reachy Mini Lite</a>
      </div>
      <div className="mini-track">
        <h4>Casos de desarrollo</h4>
        <a href="/es/reachymini_development_cases_home_assistant/">Integración con Home Assistant</a>
        <a href="/es/reachymini_development_cases_gripper_voice_control/">Control por voz de Reachy Mini para SO-ARM</a>
        <a href="/es/reachymini_development_cases_sway_screen/">Control de movimiento de la pantalla de Reachy Mini</a>
      </div>
    </div>
        </div>
      </details>

<details id="atom" className="product-card atom product-card--cover">
<summary>
  <div className="product-head">
    <div>
      <h3>Robot humanoide compacto Atom</h3>
      <span>Para principiantes en robots humanoides, depuración de servos, enseñanza de movimientos y control remoto web</span>
    </div>
  </div>
  <span className="summary-action">Ampliar plan de aprendizaje</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Usuarios de escritorio bipedal humanoide por primera vez que quieran experimentar rápidamente la enseñanza de movimientos y el control remoto</span></div>
    <div><strong>Objetivo de aprendizaje</strong><span>Comenzar a usarlo nada más sacarlo de la caja, enseñar movimientos con el editor de movimientos web y exportar movimientos personalizados al firmware del controlador</span></div>
    <div><strong>Orden recomendado</strong><span>Atom-S Introducción → Control remoto web → Editor de movimientos → Desarrollo de movimientos personalizados</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/es/atom_s/"><span className="step-index">1</span><div><b>Guía de inicio de Atom-S</b></div></a>
    <a className="step-card" href="/es/atom_x/"><span className="step-index">2</span><div><b>Guía de inicio de Atom-X</b></div></a>
  </div>
</div>
</details>

    </div>
  </section>

  <section id="actuators" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referencia</span>
        <h2>Actuadores de articulación</h2>
      </div>
      <p>Para depuración de motores, protocolos de comunicación y resolución de problemas de articulaciones.</p>
    </div>
    <div className="resource-grid">
      <a href="/es/myactuator_series/">Serie MyActuator X</a>
      <a href="/es/damiao_series/">Serie Damiao DM43</a>
      <a href="/es/feetech_servo/">Servo Feetech STS3215</a>
      <a href="/es/hightorque_control/">Serie HighTorque</a>
      <a href="/es/fashionstar_servo/">Serie Fashionstar</a>
      <a href="/es/stackforce_series/">Serie Stackforce</a>
      <a href="/es/robstride_control/">Control RobStride</a>
    </div>
  </section>

  <section id="sensors" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referencia</span>
        <h2>Sensores</h2>
      </div>
      <p>Para agarre visual, SLAM, interacción por voz y percepción del estado del robot.</p>
    </div>
    <div className="resource-columns">
      <div><h4>LiDAR</h4><a href="/es/robosense_lidar/">RoboSense</a><a href="/es/mid360/">Livox MID360</a><a href="/es/a_loam/">Algoritmo A-LOAM</a><a href="/es/slamtec/">Serie Slamtec</a></div>
      <div><h4>Cámaras</h4><a href="/es/orbbec_gemini2/">Orbbec Gemini 2</a><a href="/es/orbbec_gemini_335lg/">Cámara de profundidad Gemini 335Lg</a><a href="/es/orbbec_gemini336">Cámara de profundidad Gemini 336</a><a href="/es/sensing_gmsl_cameras">Cámara SENSING GMSL2</a><a href="/es/ac1">RoboSense AC1</a><a href="/es/orbbec_depth_camera_on_ros/">Orbbec y ROS</a><a href="/es/orb_slam3_orbbec_gemini2/">ORB-SLAM3 y Gemini2</a><a href="/es/csi_camera_on_ros/">Cámara CSI en Jetson</a><a href="/es/pycuvslam_recomputer_robotics/">PyCuVSLAM</a></div>
      <div><h4>Voz</h4><a href="/es/ReSpeaker_Core_v2.0/">ReSpeaker Core v2.0</a><a href="/es/ReSpeaker_Mic_Array_v2.0/">ReSpeaker Mic Array v2.0</a><h4>IMU</h4><a href="/es/hexfellow_y200/">HEXFELLOW Y200</a><a href="/es/wheeltec_imu/">WHEELTEC IMU</a></div>
    </div>
  </section>

  <section id="software" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referencia</span>
        <h2>Ecosistema de software</h2>
      </div>
      <p>Después de la configuración, pasa a ROS, Isaac, PX4 o VLA.</p>
    </div>
    <div className="resource-columns">
      <div><h4>Ecosistema ROS</h4><a href="/es/installing_ros1/">Instalación de ROS 1</a><a href="/es/install_ros2_humble/">Instalación de ROS 2</a><a href="/es/install_isaacros/">Instalación de Isaac ROS</a><a href="/es/isaac_ros_apriltag/">Isaac ROS AprilTag</a><a href="/es/isaac_ros_visual_slam/">Isaac ROS V-SLAM</a></div>
      <div><h4>NVIDIA Isaac</h4><a href="/es/install_isaaclab/">Instalación de Isaac Lab</a><a href="/es/training_soarm101_policy_with_isaacLab/">Aprendizaje por refuerzo del brazo SO</a><a href="/es/simulate_soarm101_by_leisaac/">Brazo robótico SO100 con IsaacSim</a></div>
      <div><h4>PX4 / VLA</h4><a href="/es/control_px4_with_recomputer_jetson/">PX4 y Jetson</a><a href="/es/object_tracking_with_reComputer_jetson_and_pX4/">Seguimiento de objetos con PX4</a><a href="/es/control_robotic_arm_via_gr00t/">StarAI y NVIDIA GR00T</a></div>
    </div>
  </section>

</div>
