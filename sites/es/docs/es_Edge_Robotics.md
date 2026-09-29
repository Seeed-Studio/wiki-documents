---
description: Documentación y rutas de aprendizaje de robótica de Seeed Studio.
title: Wiki de Robótica con IA
keywords:
  - robótica
  - nvidia
  - ros
  - isaac
  - lerobot
  - aprendizaje
  - aprendizaje por refuerzo
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /robotics_page
last_update:
  date: 07/04/2026
  author: ZhuYaohui
createdAt: '2023-01-12'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/es/robotics_page/
---

import '/src/css/robotics-page-style.css';
import RoboticsPageSearch from '@site/src/components/robotics/RoboticsPageSearch';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# Wiki de Robótica con IA

> *"La ciencia de hoy es la tecnología de mañana." - Edward Teller*

<div className="robotics-page">

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Wiki de Robótica de Seeed Studio</span>
      <h2>¿No sabes por dónde empezar? Elige el kit de robot que tienes</h2>
    </div>
  </section>

  <RoboticsPageSearch />

  <div className="robotics-quicklinks">
    <a href="https://279070161-sketch.github.io/reBot/" target="_blank" rel="noopener noreferrer">🚀 Página de inicio</a>
    <GitHubStarButton owner="Seeed-Projects" repo="reBot-DevArm" />
    <a href="https://www.seeedstudio.com/Robotics-c-2427.html" target="_blank" rel="noopener noreferrer">🛒 Tienda</a>
  </div>

  <section id="robot-kits" className="section-block">
    <div className="product-stack">

<details id="rebot-rs" className="product-card rebot product-card--cover">
  <summary className="product-head">
    <h3>Brazo Robótico reBot B601-RS</h3>
  </summary>
  <div className="product-body">
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
        <a className="step-card" href="/es/rebot_arm_b601_rs_web_simulator_developer_guide/"><span className="step-index">4</span><div><b>B601-RS con controlador web</b></div></a>
        <a className="step-card" href="/es/wrc_demo_tutorial/"><span className="step-index">5</span><div><b>B601-RS con Agent Claw</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Curso</h4>
      <div className="learning-steps">
        <a className="step-card" href="/es/rebot_physical_ai_course_introduction/"><span className="step-index">🎓</span><div><b>Curso para principiantes</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Recursos de código abierto</h4>
      <div className="rebot-resource-list">
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_RS" target="_blank" rel="noopener noreferrer">Colección de hardware B601-RS</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/RS" target="_blank" rel="noopener noreferrer">Paquete de descripción B601-RS (URDF / Mesh)</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS" target="_blank" rel="noopener noreferrer">Gemelo digital B601-RS / simulador web</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">Repositorio principal reBot-DevArm</a>
        <a href="https://github.com/Seeed-Projects/reBotArm_control_py" target="_blank" rel="noopener noreferrer">SDK de Python</a>
        <a href="https://github.com/Seeed-Projects/reBotArmController_ROS2" target="_blank" rel="noopener noreferrer">Controlador ROS2</a>
        <a href="https://github.com/Seeed-Projects/lerobot-robot-seeed-b601" target="_blank" rel="noopener noreferrer">Adaptador de robot LeRobot</a>
        <a href="https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102" target="_blank" rel="noopener noreferrer">Adaptador de teleoperador LeRobot</a>
        <a href="https://github.com/Seeed-Projects/reBot-Isaacsim" target="_blank" rel="noopener noreferrer">Isaac Sim</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm-Grasp" target="_blank" rel="noopener noreferrer">Demostración de agarre visual</a>
        <a href="https://github.com/xiehuangbao888/Camera-Mount" target="_blank" rel="noopener noreferrer">Colección de monturas de cámara</a>
      </div>
    </div>
  </div>
</details>


<details id="rebot-dm" className="product-card rebot product-card--cover">
  <summary className="product-head">
    <h3>Brazo Robótico reBot B601-DM</h3>
  </summary>
  <div className="product-body">
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
        <a className="step-card" href="/es/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">1</span><div><b>Agarre visual B601-DM</b></div></a>
        <a className="step-card" href="/es/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">2</span><div><b>B601-DM con ROS2</b></div></a>
        <a className="step-card" href="/es/rebot_arm_b601_dm_isaacsim/"><span className="step-index">3</span><div><b>B601-DM con Isaac Sim</b></div></a>
        <a className="step-card" href="/es/rebot_arm_b601_dm_web_simulator_developer_guide/"><span className="step-index">4</span><div><b>B601-DM con controlador web</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Curso</h4>
      <div className="learning-steps">
        <a className="step-card" href="/es/rebot_physical_ai_course_introduction/"><span className="step-index">🎓</span><div><b>Curso para principiantes</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Recursos de código abierto</h4>
      <div className="rebot-resource-list">
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM" target="_blank" rel="noopener noreferrer">Colección de hardware B601-DM</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/DM" target="_blank" rel="noopener noreferrer">Paquete de descripción B601-DM (URDF / Mesh)</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM/performance_testing" target="_blank" rel="noopener noreferrer">Pruebas de rendimiento en máquina real B601-DM</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_DM" target="_blank" rel="noopener noreferrer">Gemelo digital B601-DM / simulador web</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">Repositorio principal reBot-DevArm</a>
        <a href="https://github.com/Seeed-Projects/reBotArm_control_py" target="_blank" rel="noopener noreferrer">SDK de Python</a>
        <a href="https://github.com/Seeed-Projects/reBotArmController_ROS2" target="_blank" rel="noopener noreferrer">Controlador ROS2</a>
        <a href="https://github.com/Seeed-Projects/lerobot-robot-seeed-b601" target="_blank" rel="noopener noreferrer">Adaptador de robot LeRobot</a>
        <a href="https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102" target="_blank" rel="noopener noreferrer">Adaptador de teleoperador LeRobot</a>
        <a href="https://github.com/Seeed-Projects/reBot-Isaacsim" target="_blank" rel="noopener noreferrer">Isaac Sim</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm-Grasp" target="_blank" rel="noopener noreferrer">Demostración de agarre visual</a>
        <a href="https://github.com/xiehuangbao888/Camera-Mount" target="_blank" rel="noopener noreferrer">Colección de monturas de cámara</a>
      </div>
    </div>
  </div>
</details>


<details id="soarm" className="product-card soarm product-card--cover">
  <summary className="product-head">
    <h3>Brazo Robótico SO100 / SO101</h3>
  </summary>
  <div className="product-body">
    <div className="learning-group">
      <h4>Inicio rápido y herramientas</h4>
      <div className="learning-steps">
        <a className="step-card" href="/es/lerobot_so100m_new/"><span className="step-index">1</span><div><b>Inicio rápido SO100 / SO101</b></div></a>
        <a className="step-card" href="/es/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>Herramienta de depuración de servos</b></div></a>
      </div>
    </div>
    <div className="learning-group">
      <h4>Aplicaciones</h4>
      <div className="learning-steps">
        <a className="step-card" href="/es/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">3</span><div><b>SO101 y NVIDIA GR00T</b></div></a>
        <a className="step-card" href="/es/lerobot_double_arm_so_arm_training/"><span className="step-index">4</span><div><b>Entrenamiento de doble brazo SO-ARM</b></div></a>
        <a className="step-card" href="/es/soarm_amazinghand_teleop/"><span className="step-index">5</span><div><b>SO-ARM con mano hábil Amazing Hand</b></div></a>
        <a className="step-card" href="/es/simulate_soarm101_by_leisaac/"><span className="step-index">6</span><div><b>Simulación LeIsaac</b></div></a>
        <a className="step-card" href="/es/training_soarm101_policy_with_isaacLab/"><span className="step-index">7</span><div><b>Aprendizaje por refuerzo con Isaac Lab</b></div></a>
        <a className="step-card optional" href="/es/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b></div></a>
      </div>
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
        <h4>Inicio rápido</h4>
        <a href="/es/reachymini_platforms_reachy_mini_get_started/">Inicio rápido de Reachy Mini (inalámbrico)</a>
        <a href="/es/reachymini_platforms_reachy_mini_lite_get_started/">Inicio rápido de Reachy Mini Lite</a>
      </div>
      <div className="mini-track">
        <h4>Casos de desarrollo</h4>
        <a href="/es/reachymini_development_cases_home_assistant/">Integración con Home Assistant</a>
        <a href="/es/reachymini_development_cases_gripper_voice_control/">Control por voz de Reachy Mini para SO-ARM</a>
        <a href="/es/reachymini_development_cases_sway_screen/">Control de movimiento de pantalla de Reachy Mini</a>
      </div>
    </div>
  </div>
</details>


<details id="lekiwi" className="product-card lekiwi product-card--cover">
  <summary className="product-head">
    <h3>Chasis móvil Lekiwi</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/es/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Inicio rápido del chasis móvil Lekiwi</b></div></a>
    <a className="step-card" href="/es/sound_follow_robot/"><span className="step-index">2</span><div><b>Demostración de seguimiento de sonido</b></div></a>
  </div>
  </div>
</details>


<details id="stackforce" className="product-card stackforce product-card--cover">
  <summary className="product-head">
    <h3>Robot mini StackForce con ruedas y patas</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/es/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>Inicio rápido de StackForce Mini</b></div></a>
  </div>
  </div>
</details>


<details id="starai" className="product-card starai product-card--cover">
  <summary className="product-head">
    <h3>Brazo robótico StarAI</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/es/lerobot_starai_arm/"><span className="step-index">1</span><div><b>Inicio rápido del brazo robótico StarAI</b></div></a>
    <a className="step-card" href="/es/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>Planificación de movimiento con MoveIt 2</b></div></a>
    <a className="step-card" href="/es/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>StarAI y NVIDIA GR00T</b></div></a>
  </div>
  </div>
</details>


<details id="atom" className="product-card atom product-card--cover">
  <summary className="product-head">
    <h3>Robot humanoide compacto Atom</h3>
  </summary>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/es/atom_s/"><span className="step-index">1</span><div><b>Guía de inicio para Atom-S</b></div></a>
    <a className="step-card" href="/es/atom_x/"><span className="step-index">2</span><div><b>Guía de inicio para Atom-X</b></div></a>
  </div>
  </div>
</details>


    </div>
  </section>

  <section id="actuators" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Actuadores</span>
        <h2>Actuadores de articulación y motores</h2>
      </div>
      <p>Para depuración de motores, protocolos de comunicación y resolución de problemas de articulaciones.</p>
    </div>
    <div className="resource-columns">
      <div>
        <h4>Motores de articulación reBot</h4>
        <a href="/es/damiao_series/">Damiao DM43 Serie</a>
        <a href="/es/robstride_control/">Control RobStride</a>
      </div>
      <div>
        <h4>Otros motores de articulación</h4>
        <a href="/es/myactuator_series/">MyActuator X Serie</a>
        <a href="/es/hightorque_control/">HighTorque Serie</a>
        <a href="/es/stackforce_series/">Stackforce Serie</a>
      </div>
      <div>
        <h4>Servos</h4>
        <a href="/es/feetech_servo/">Servo Feetech STS3215</a>
        <a href="/es/fashionstar_servo/">Fashionstar Serie</a>
      </div>
    </div>
  </section>

  <section id="sensors" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Sensores</span>
        <h2>Sensores y percepción</h2>
      </div>
      <p>Para agarre visual, SLAM, interacción por voz y percepción del estado del robot.</p>
    </div>
    <div className="resource-columns">
      <div><h4>LiDAR</h4><a href="/es/robosense_lidar/">RoboSense</a><a href="/es/mid360/">Livox MID360</a><a href="/es/a_loam/">Algoritmo A-LOAM</a><a href="/es/slamtec/">Slamtec Serie</a></div>
      <div><h4>Cámaras</h4><a href="/es/orbbec_gemini2/">Orbbec Gemini 2</a><a href="/es/orbbec_gemini_335lg/">Cámara de profundidad Gemini 335Lg</a><a href="/es/orbbec_gemini336">Cámara de profundidad Gemini 336</a><a href="/es/sensing_gmsl_cameras">Cámara SENSING GMSL2</a><a href="/es/ac1">RoboSense AC1</a><a href="/es/orbbec_depth_camera_on_ros/">Orbbec y ROS</a><a href="/es/orb_slam3_orbbec_gemini2/">ORB-SLAM3 y Gemini2</a><a href="/es/csi_camera_on_ros/">Cámara CSI en Jetson</a><a href="/es/pycuvslam_recomputer_robotics/">PyCuVSLAM</a></div>
      <div><h4>Voz</h4><a href="/es/ReSpeaker_Core_v2.0/">ReSpeaker Core v2.0</a><a href="/es/ReSpeaker_Mic_Array_v2.0/">ReSpeaker Mic Array v2.0</a></div>
      <div><h4>IMU</h4><a href="/es/hexfellow_y200/">HEXFELLOW Y200</a><a href="/es/wheeltec_imu/">WHEELTEC IMU</a></div>
    </div>
  </section>

  <section id="software" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Software</span>
        <h2>Software y herramientas</h2>
      </div>
      <p>Después de la configuración, continúa con ROS, Isaac, PX4 o VLA.</p>
    </div>
    <div className="resource-columns">
      <div><h4>Ecosistema ROS</h4><a href="/es/installing_ros1/">Instalación de ROS 1</a><a href="/es/install_ros2_humble/">Instalación de ROS 2</a><a href="/es/install_isaacros/">Instalación de Isaac ROS</a><a href="/es/isaac_ros_apriltag/">Isaac ROS AprilTag</a><a href="/es/isaac_ros_visual_slam/">Isaac ROS V-SLAM</a></div>
      <div><h4>NVIDIA Isaac</h4><a href="/es/install_isaaclab/">Instalación de Isaac Lab</a><a href="/es/training_soarm101_policy_with_isaacLab/">Aprendizaje por refuerzo de SO Arm</a><a href="/es/simulate_soarm101_by_leisaac/">Brazo robótico SO100 con IsaacSim</a></div>
      <div><h4>PX4 / VLA</h4><a href="/es/control_px4_with_recomputer_jetson/">PX4 y Jetson</a><a href="/es/object_tracking_with_reComputer_jetson_and_pX4/">Seguimiento de objetos con PX4</a><a href="/es/control_robotic_arm_via_gr00t/">StarAI y NVIDIA GR00T</a></div>
    </div>
  </section>

</div>
