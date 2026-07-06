---
description: Este tema presenta la documentación de productos de robótica de Seeed Studio y las rutas de aprendizaje.
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
updatedAt: '2026-07-04'
url: https://wiki.seeedstudio.com/es/robotics_page/
---

# 🤖 Robótica

> *"La ciencia de hoy es la tecnología de mañana." - Edward Teller*

<div className="robotics-page">

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>¿No estás seguro de qué guía leer primero? Empieza con el kit de robot que tienes en tus manos.</h2>
      <p>Esta página reorganiza la documentación de robótica de Seeed Studio en rutas de aprendizaje basadas en productos. Tanto si estás desempaquetando tu primer robot como si te estás preparando para teleoperación, ROS2, simulación, entrenamiento de IA o despliegue en el mundo real, comienza eligiendo tu kit de robot y luego sigue los pasos recomendados desde la puesta en marcha del hardware hasta el desarrollo avanzado.</p>
    </div>
    <div className="hero-tips">
      <div><strong>Usuarios nuevos</strong><span>Empieza con desempaquetado, cableado, alimentación, controladores y comprobaciones básicas de movimiento</span></div>
      <div><strong>Creadores de aplicaciones</strong><span>Continúa con SDK, LeRobot, ROS2, agarre visual o control móvil</span></div>
      <div><strong>Usuarios de robótica con IA</strong><span>Pasa a simulación, recopilación de datos, GR00T, VLA y aprendizaje por refuerzo</span></div>
    </div>
  </section>

  <nav className="quick-nav" aria-label="Robotics page quick navigation">
    <a href="#robot-kits">📦 Kits de robots</a>
    <a href="#actuators">⚙️ Actuadores de articulación</a>
    <a href="#sensors">👁️ Sensores</a>
    <a href="#software">💻 Ecosistema de software</a>
  </nav>

  <section className="kit-index-panel" aria-label="Choose a robotics learning path">
    <div className="section-title-row compact-title">
      <div>
        <span className="section-kicker">Elige un kit</span>
        <h2>Elige rápidamente tu ruta de aprendizaje</h2>
      </div>
      <p>Todas las tarjetas de producto están contraídas por defecto. Elige el kit que tienes en tus manos y luego despliega la ruta de aprendizaje correspondiente.</p>
    </div>
    <div className="kit-index-grid">
      <a href="#rebot-rs"><span>🦾</span><strong>B601-RS</strong><small>Ruta de aprendizaje del brazo RobStride</small></a>
      <a href="#rebot-dm"><span>🦾</span><strong>B601-DM</strong><small>Ruta de aprendizaje del brazo Damiao</small></a>
      <a href="#soarm"><span>🤗</span><strong>SO100 / SO101</strong><small>Ruta económica de LeRobot</small></a>
      <a href="#starai"><span>🦾</span><strong>StarAI</strong><small>ROS2 / MoveIt / GR00T</small></a>
      <a href="#lekiwi"><span>🚗</span><strong>Lekiwi</strong><small>Base móvil y demostraciones</small></a>
      <a href="#stackforce"><span>🦿</span><strong>StackForce Mini</strong><small>Ruta de robot con ruedas y patas</small></a>
      <a href="#reachy"><span>🤗</span><strong>Reachy Mini</strong><small>Ruta de robot interactivo de escritorio</small></a>
    </div>
  </section>

  <section id="robot-kits" className="section-block">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Empieza aquí</span>
        <h2>📦 Kits de robots</h2>
      </div>
      <p>Cada kit sigue la misma lógica: primero pon en marcha el hardware, luego entra en el ecosistema de software y finalmente pasa a aplicaciones de IA, ROS o simulación. Despliega la tarjeta de tu producto y sigue los pasos en orden.</p>
    </div>

    <div className="product-stack">

<details id="rebot-rs" className="product-card rebot">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦾</span>
      <div>
        <h3>Brazo reBot B601-RS</h3>
        <span>Para incorporación con brazo robótico, teleoperación, agarre visual, integración con ROS2 y recopilación de datos de IA</span>
      </div>
    </div>
    <span className="summary-action">Abrir ruta de aprendizaje</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recomendado para</strong><span>Usuarios primerizos del brazo reBot que quieren poner en marcha rápidamente un brazo robótico real</span></div>
      <div><strong>Objetivo de aprendizaje</strong><span>Pasar de las comprobaciones de encendido a la teleoperación con LeRobot, agarre visual e integración con ROS2</span></div>
      <div><strong>Orden sugerido</strong><span>Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/es/rebot_b601_rs_getting_started/"><span className="step-index">1</span><div><b>Getting Started</b><small>Completa el desempaquetado, cableado, comprobaciones de alimentación, configuración de controladores y pruebas básicas de movimiento para verificar que el brazo funciona.</small></div><em>Empieza aquí</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_rs_lerobot/"><span className="step-index">2</span><div><b>LeRobot Teleoperation and Data Collection</b><small>Aprende a teleoperar el brazo y registrar datos para aprendizaje por imitación y tareas de IA encarnada.</small></div><em>Recopilación de datos</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_rs_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio Kinematics Visualization</b><small>Comprende los modelos de robot, articulaciones, marcos de coordenadas y cinemática directa/inversa.</small></div><em>Control</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_rs_grasping_demo/"><span className="step-index">4</span><div><b>Visual Grasping Demo</b><small>Combina la percepción por cámara y la generación de poses de agarre para completar el agarre de objetos reales.</small></div><em>Aplicación</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_rs_ros2_integration/"><span className="step-index">5</span><div><b>ROS2 Integration</b><small>Conecta el brazo al ecosistema ROS2 para flujos de trabajo de percepción, planificación, navegación y simulación.</small></div><em>Integración</em></a>
    </div>
  </div>
</details>

<details id="rebot-dm" className="product-card rebot">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦾</span>
      <div>
        <h3>Brazo reBot B601-DM</h3>
        <span>Para usuarios de motores Damiao que aprenden control de robots, LeRobot, Pinocchio y ROS2</span>
      </div>
    </div>
    <span className="summary-action">Abrir ruta de aprendizaje</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recomendado para</strong><span>Usuarios de B601-DM que quieren control de brazo robótico y recopilación de datos de IA</span></div>
      <div><strong>Objetivo de aprendizaje</strong><span>Completar controladores básicos, modelado cinemático, recopilación de datos con LeRobot y demostraciones de agarre visual</span></div>
      <div><strong>Orden sugerido</strong><span>Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/es/rebot_b601_dm_getting_started/"><span className="step-index">1</span><div><b>Getting Started</b><small>Comprueba la alimentación, la comunicación CAN, los controladores y el movimiento básico para confirmar que el hardware está listo.</small></div><em>Empieza aquí</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_dm_lerobot/"><span className="step-index">2</span><div><b>LeRobot Data Collection</b><small>Usa LeRobot para teleoperación, grabación y preparación de conjuntos de datos para aprendizaje por imitación.</small></div><em>Datos de IA</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_dm_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio and Meshcat</b><small>Carga y visualiza el modelo del robot y luego aprende los fundamentos de cinemática y control en espacio articular.</small></div><em>Control</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">4</span><div><b>Visual Grasping Demo</b><small>Combina el brazo con algoritmos de visión para agarrar objetos reales en una escena física.</small></div><em>Aplicación</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">5</span><div><b>ROS2 Integration</b><small>Conecta el brazo a ROS2 para MoveIt, nodos de percepción y aplicaciones a nivel de sistema.</small></div><em>Integración</em></a>
    </div>
  </div>
</details>

<details id="soarm" className="product-card soarm">
  <summary>
    <div className="product-head">
      <span className="product-icon">🤗</span>
      <div>
        <h3>Brazo SO100 / SO101</h3>
        <span>Para incorporación de brazo robótico de bajo coste, LeRobot, simulación, aprendizaje por refuerzo y experimentos con GR00T/VLA</span>
      </div>
    </div>
    <span className="summary-action">Abrir ruta de aprendizaje</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recomendado para</strong><span>Usuarios que quieren empezar con IA encarnada usando un brazo robótico asequible</span></div>
      <div><strong>Objetivo de aprendizaje</strong><span>Pasar de la depuración de servos a simulación, aprendizaje por refuerzo, GR00T y entrenamiento de doble brazo</span></div>
      <div><strong>Orden sugerido</strong><span>Setup → Servo Debugging → Simulation → Isaac Lab → GR00T → Dual Arm</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/es/lerobot_so100m_new/"><span className="step-index">1</span><div><b>SO100 / SO101 Getting Started</b><small>Completa la configuración de hardware, conexión, calibración y la prueba mínima ejecutable.</small></div><em>Empieza aquí</em></a>
      <a className="step-card" href="/es/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>Servo Debugging Tool</b><small>Comprueba los ID de los servos, la dirección, los puntos cero y el estado de la comunicación antes del entrenamiento.</small></div><em>Depuración</em></a>
      <a className="step-card" href="/es/simulate_soarm101_by_leisaac/"><span className="step-index">3</span><div><b>LeIsaac Simulation</b><small>Comprende el modelo del robot, la escena y la configuración de tareas en simulación antes de Sim2Real.</small></div><em>Simulación</em></a>
      <a className="step-card" href="/es/training_soarm101_policy_with_isaacLab/"><span className="step-index">4</span><div><b>Isaac Lab Reinforcement Learning</b><small>Aprende la configuración de tareas, recompensas, entrenamiento de políticas y flujo de despliegue en simulación.</small></div><em>Avanzado</em></a>
      <a className="step-card" href="/es/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">5</span><div><b>SO101 con NVIDIA GR00T</b><small>Entra en el flujo de trabajo de ajuste fino de modelos VLA y de IA incorporada con despliegue en Jetson.</small></div><em>VLA</em></a>
      <a className="step-card" href="/es/lerobot_double_arm_so_arm_training/"><span className="step-index">6</span><div><b>Entrenamiento de SO-ARM de doble brazo</b><small>Aprende flujos de trabajo más complejos de recopilación de datos de doble brazo, entrenamiento y ejecución de tareas.</small></div><em>Tareas complejas</em></a>
      <a className="step-card optional" href="/es/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b><small>Extensión opcional para usuarios que quieran probar una plataforma de terceros de recopilación de datos y entrenamiento.</small></div><em>Opcional</em></a>
    </div>
  </div>
</details>

<details id="starai" className="product-card starai">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦾</span>
      <div>
        <h3>Brazo StarAI</h3>
        <span>Para control básico de brazo robótico, planificación con MoveIt 2 y ROS2, y aplicaciones con GR00T</span>
      </div>
    </div>
    <span className="summary-action">Abrir ruta de aprendizaje</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recomendado para</strong><span>Usuarios que aprenden planificación de brazo robótico con ROS2 y demostraciones de control con IA</span></div>
      <div><strong>Objetivo de aprendizaje</strong><span>Ejecutar control básico, planificación con MoveIt 2 y control basado en GR00T</span></div>
      <div><strong>Orden sugerido</strong><span>Introducción → MoveIt 2 → GR00T</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/es/lerobot_starai_arm/"><span className="step-index">1</span><div><b>Introducción al brazo StarAI</b><small>Completa la conexión de hardware, el control básico y el ejemplo mínimo ejecutable.</small></div><em>Empieza aquí</em></a>
      <a className="step-card" href="/es/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>Planificación de movimiento con MoveIt 2</b><small>Aprende importación de modelos, escenas de planificación, planificación de trayectorias y desarrollo de brazo con ROS2.</small></div><em>ROS2</em></a>
      <a className="step-card" href="/es/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>StarAI con NVIDIA GR00T</b><small>Entra en aplicaciones de control de brazo robótico basadas en modelos grandes y VLA.</small></div><em>Control con IA</em></a>
    </div>
  </div>
</details>

<details id="lekiwi" className="product-card lekiwi">
  <summary>
    <div className="product-head">
      <span className="product-icon">🚗</span>
      <div>
        <h3>Base móvil Lekiwi</h3>
        <span>Para incorporación a robots móviles, control de la base y aplicaciones de seguimiento de sonido</span>
      </div>
    </div>
    <span className="summary-action">Abrir ruta de aprendizaje</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recomendado para</strong><span>Usuarios primerizos de bases móviles que quieren poner el robot en movimiento</span></div>
      <div><strong>Objetivo de aprendizaje</strong><span>Completar el control básico de la base y probar demostraciones de seguimiento de sonido</span></div>
      <div><strong>Nota</strong><span>El paso de ROS2 se ha eliminado aquí para mantener esta ruta centrada en el flujo actual de incorporación al producto</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/es/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Introducción a la base móvil Lekiwi</b><small>Completa el montaje, la conexión, el control básico del movimiento y las comprobaciones de seguridad.</small></div><em>Empieza aquí</em></a>
      <a className="step-card" href="/es/sound_follow_robot/"><span className="step-index">2</span><div><b>Demostración de seguimiento de sonido</b><small>Combina entrada de audio y control de movimiento de la base para una demostración intuitiva de robot móvil interactivo.</small></div><em>Aplicación</em></a>
    </div>
  </div>
</details>

<details id="stackforce" className="product-card stackforce">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦿</span>
      <div>
        <h3>Robot mini con ruedas y patas StackForce</h3>
        <span>Para estructuras con ruedas y patas, control de equilibrio, planificación de movimiento y algoritmos de control</span>
      </div>
    </div>
    <span className="summary-action">Abrir ruta de aprendizaje</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recomendado para</strong><span>Usuarios interesados en robots móviles, robots con ruedas y patas y control de equilibrio</span></div>
      <div><strong>Objetivo de aprendizaje</strong><span>Comprender la estructura de hardware, la lógica de control y las capacidades básicas de movimiento</span></div>
      <div><strong>Orden sugerido</strong><span>Introducción → Principios de control → Depuración de movimiento</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/es/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>Introducción a StackForce Mini</b><small>Aprende el hardware, el despliegue básico, el control de movimiento y experimentos introductorios con ruedas y patas.</small></div><em>Curso</em></a>
    </div>
  </div>
</details>

<details id="reachy" className="product-card reachy">
  <summary>
    <div className="product-head">
      <span className="product-icon">🤗</span>
      <div>
        <h3>Reachy Mini</h3>
        <span>Para robótica de escritorio, interacción humano-robot, agentes, SDK de Python, simulación e integración de IA</span>
      </div>
    </div>
    <span className="summary-action">Abrir ruta de aprendizaje</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recomendado para</strong><span>Usuarios que quieren interacción con robot de escritorio, diálogo por voz, control de movimiento y aplicaciones con agentes</span></div>
      <div><strong>Objetivo de aprendizaje</strong><span>Comenzar con el uso básico, elegir Wireless o Lite, y luego aprender desarrollo con SDK, integración de IA y resolución de problemas</span></div>
      <div><strong>Mapa de documentación</strong><span>Organizado como Descripción general del producto → Configuración de la plataforma → Desarrollo con SDK → Apps de IA → Resolución de problemas → Referencia de API</span></div>
    </div>

    <div className="reachy-path-grid">
      <div className="mini-track">
        <h4>① Comprender el producto</h4>
        <a href="/es/reachymini_intro/">Descripción general de Reachy Mini</a>
        <a href="/es/reachymini_getting_started/">Introducción a ReachyMini</a>
      </div>
      <div className="mini-track">
        <h4>② Elige tu plataforma</h4>
        <a href="/es/reachymini_platforms_simulation_get_started/">Configuración de la simulación</a>
        <a href="/es/reachymini_platforms_reachy_mini_get_started/">Configuración de Reachy Mini Wireless</a>
        <a href="/es/reachymini_platforms_reachy_mini_usage/">Uso de Reachy Mini</a>
        <a href="/es/reachymini_platforms_reachy_mini_hardware/">Hoja de datos de hardware de Reachy Mini</a>
        <a href="/es/reachymini_platforms_reachy_mini_lite_get_started/">Configuración de Reachy Mini Lite</a>
        <a href="/es/reachymini_platforms_reachy_mini_lite_usage/">Uso de Reachy Mini Lite</a>
        <a href="/es/reachymini_platforms_reachy_mini_lite_hardware/">Hoja de datos de hardware de Reachy Mini Lite</a>
      </div>
      <div className="mini-track">
        <h4>③ SDK y fundamentos de desarrollo</h4>
        <a href="/es/reachymini_sdk_readme/">Reachy Mini SDK</a>
        <a href="/es/reachymini_sdk_installation/">Guía de instalación</a>
        <a href="/es/reachymini_sdk_quickstart/">Guía de inicio rápido</a>
        <a href="/es/reachymini_sdk_python-sdk/">Referencia del SDK de Python</a>
        <a href="/es/reachymini_sdk_core-concept/">Conceptos básicos y arquitectura</a>
        <a href="/es/reachymini_sdk_media-architecture/">Arquitectura de medios</a>
        <a href="/es/reachymini_sdk_gstreamer-installation/">Instalación de GStreamer</a>
        <a href="/es/reachymini_sdk_javascript-sdk/">SDK de JavaScript y aplicaciones web</a>
      </div>
      <div className="mini-track">
        <h4>④ Apps e integración de IA</h4>
        <a href="/es/reachymini_sdk_integration/">Integración y aplicaciones</a>
        <a href="/es/reachymini_sdk_apps/">Crear y publicar apps</a>
        <a href="/es/reachymini_conversation/">Demostración de conversación con Doubao LLM</a>
        <a href="/es/reachymini_vibe-code-with-your-agent/">Programación Vibe con un agente</a>
        <a href="/es/reachymini_agents/">Guía de desarrollo para agentes de IA</a>
      </div>
      <div className="mini-track">
        <h4>⑤ Medios, sistema y operaciones avanzadas</h4>
        <a href="/es/reachymini_platforms_reachy_mini_media_advanced_controls/">Controles avanzados de medios para Wireless</a>
        <a href="/es/reachymini_platforms_reachy_mini_lite_media_advanced_controls/">Controles avanzados de medios para Lite</a>
        <a href="/es/reachymini_platforms_reachy_mini_lite_wizard/">Leer parámetros del motor con Dynamixel Wizard</a>
        <a href="/es/reachymini_platforms_reachy_mini_development_workflow/">Flujo de trabajo de desarrollo para Wireless</a>
        <a href="/es/reachymini_platforms_reachy_mini_install_daemon_from_branch/">Instalar Daemon desde una rama</a>
        <a href="/es/reachymini_platforms_reachy_mini_reflash_the_rpi_iso/">Reflashear la imagen de Raspberry Pi OS</a>
        <a href="/es/reachymini_platforms_reachy_mini_reset/">Restablecer Bluetooth</a>
      </div>
      <div className="mini-track">
        <h4>⑥ Ejemplos</h4>
        <a href="/es/reachymini_examples_minimal_demo/">Demostración mínima</a>
        <a href="/es/reachymini_examples_goto_interpolation_playground/">Zona de pruebas de interpolación Goto</a>
        <a href="/es/reachymini_examples_look_at/">Mirar imagen</a>
        <a href="/es/reachymini_examples_mini_head_position_gui/">GUI de posición de la cabeza</a>
        <a href="/es/reachymini_examples_joy_controller/">Controlador de joystick</a>
        <a href="/es/reachymini_examples_imu/">Ejemplo de IMU</a>
        <a href="/es/reachymini_examples_custom_media_manager/">Gestor de medios personalizado</a>
        <a href="/es/reachymini_examples_reachy_compliant_demo/">Demostración de modo compliant</a>
        <a href="/es/reachymini_examples_recorded_moves/">Movimientos grabados</a>
        <a href="/es/reachymini_examples_rerun_viewer/">Visor Rerun</a>
        <a href="/es/reachymini_examples_sequence/">Demostración de secuencia</a>
        <a href="/es/reachymini_examples_sound_doa/">Dirección de llegada del sonido</a>
        <a href="/es/reachymini_examples_sound_play/">Reproducción de sonido</a>
        <a href="/es/reachymini_examples_sound_record/">Grabación de sonido</a>
        <a href="/es/reachymini_examples_take_picture/">Tomar foto</a>
      </div>
      <div className="mini-track">
        <h4>⑦ Resolución de problemas y mantenimiento</h4>
        <a href="/es/reachymini_troubleshooting/">Resolución de problemas y FAQ</a>
        <a href="/es/reachymini_troubleshooting_motors_diagnosis/">Diagnóstico y resolución de problemas de motores</a>
        <a href="/es/reachymini_troubleshooting_change_mic_fpc_cable/">Sustituir el cable FPC del micrófono</a>
        <a href="/es/reachymini_troubleshooting_spherical_joints_maintenance/">Mantenimiento de juntas esféricas</a>
        <a href="/es/reachymini_troubleshooting_roadmap/">Hoja de ruta de Reachy Mini</a>
      </div>
      <div className="mini-track">
        <h4>⑧ Referencia de API</h4>
        <a href="/es/reachymini_api_reachymini/">Referencia de API de ReachyMini</a>
        <a href="/es/reachymini_api_rest-api/">Referencia de REST API</a>
        <a href="/es/reachymini_api_daemon/">Daemon API</a>
        <a href="/es/reachymini_api_motion/">Motion API</a>
        <a href="/es/reachymini_api_media/">Media API</a>
        <a href="/es/reachymini_api_apps/">Referencia de API de Apps</a>
        <a href="/es/reachymini_api_tools/">Referencia de API de Tools</a>
        <a href="/es/reachymini_api_utils/">Referencia de API de Utils</a>
      </div>
    </div>
  </div>
</details>

    </div>
  </section>

  <section id="actuators" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referencia</span>
        <h2>⚙️ Actuadores de articulación</h2>
      </div>
      <p>Utiliza estas referencias cuando necesites depurar motores, comprender protocolos de comunicación o diagnosticar problemas a nivel de articulación.</p>
    </div>
    <div className="resource-grid">
      <a href="/es/myactuator_series/">MyActuator X Serie</a>
      <a href="/es/damiao_series/">Damiao DM43 Serie</a>
      <a href="/es/feetech_servo/">Feetech STS3215 Servo</a>
      <a href="/es/hightorque_control/">HighTorque Serie</a>
      <a href="/es/fashionstar_servo/">Fashionstar Serie</a>
      <a href="/es/stackforce_series/">Stackforce Serie</a>
      <a href="/es/robstride_control/">RobStride Control</a>
    </div>
  </section>

  <section id="sensors" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referencia</span>
        <h2>👁️ Sensores</h2>
      </div>
      <p>Útiles para agarre visual, SLAM, interacción por voz y percepción del estado del robot.</p>
    </div>
    <div className="resource-columns">
      <div><h4>📡 LiDAR</h4><a href="/es/robosense_lidar/">RoboSense</a><a href="/es/mid360/">Livox MID360</a><a href="/es/a_loam/">A-LOAM Algorithm</a><a href="/es/slamtec/">Slamtec Serie</a></div>
      <div><h4>📷 Cámara</h4><a href="/es/orbbec_gemini2/">Orbbec Gemini 2</a><a href="/es/orbbec_gemini_335lg/">Gemini 335Lg Cámara de profundidad</a><a href="/es/orbbec_gemini336/">Gemini 336 Cámara de profundidad</a><a href="/es/sensing_gmsl_cameras/">SENSING GMSL2 Cámara</a><a href="/es/ac1/">RoboSense AC1</a><a href="/es/orbbec_depth_camera_on_ros/">Orbbec con ROS</a><a href="/es/orb_slam3_orbbec_gemini2/">ORB-SLAM3 con Gemini2</a><a href="/es/csi_camera_on_ros/">Cámara CSI en Jetson</a><a href="/es/pycuvslam_recomputer_robotics/">PyCuVSLAM</a></div>
      <div><h4>🎤 Voz</h4><a href="/es/ReSpeaker_Core_v2.0/">ReSpeaker Core v2.0</a><a href="/es/ReSpeaker_Mic_Array_v2.0/">ReSpeaker Mic Array v2.0</a><h4>🧭 IMU</h4><a href="/es/hexfellow_y200/">HEXFELLOW Y200</a><a href="/es/wheeltec_imu/">WHEELTEC IMU</a></div>
    </div>
  </section>

  <section id="software" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referencia</span>
        <h2>💻 Ecosistema de software</h2>
      </div>
      <p>Después de que tu kit esté en funcionamiento, elige una dirección de software según el objetivo de tu proyecto: ROS, Isaac, PX4 o VLA.</p>
    </div>
    <div className="resource-columns">
      <div><h4>Ecosistema ROS</h4><a href="/es/installing_ros1/">Instalación de ROS 1</a><a href="/es/install_ros2_humble/">Instalación de ROS 2</a><a href="/es/install_isaacros/">Instalación de Isaac ROS</a><a href="/es/isaac_ros_apriltag/">Isaac ROS AprilTag</a><a href="/es/isaac_ros_visual_slam/">Isaac ROS V-SLAM</a></div>
      <div><h4>NVIDIA Isaac</h4><a href="/es/install_isaaclab/">Instalación de Isaac Lab</a><a href="/es/training_soarm101_policy_with_isaacLab/">Aprendizaje por refuerzo del brazo SO</a><a href="/es/simulate_soarm101_by_leisaac/">Brazo SO100 con IsaacSim</a></div>
      <div><h4>PX4 / VLA</h4><a href="/es/control_px4_with_recomputer_jetson/">PX4 con Jetson</a><a href="/es/object_tracking_with_reComputer_jetson_and_pX4/">Seguimiento de objetos con PX4</a><a href="/es/control_robotic_arm_via_gr00t/">StarAI con NVIDIA GR00T</a></div>
    </div>
  </section>

</div>

<style>{`
.robotics-page {
  --rp-page-bg: #ffffff;
  --rp-card-bg: #ffffff;
  --rp-card-bg-soft: #f8fafc;
  --rp-card-bg-hover: #ffffff;
  --rp-text: #0f172a;
  --rp-text-muted: #64748b;
  --rp-text-soft: #94a3b8;
  --rp-border: rgba(148, 163, 184, 0.28);
  --rp-border-strong: rgba(148, 163, 184, 0.42);
  --rp-shadow-sm: 0 8px 22px rgba(15, 23, 42, 0.06);
  --rp-shadow-md: 0 16px 40px rgba(15, 23, 42, 0.10);
  --rp-shadow-accent: 0 16px 34px rgba(37, 99, 235, 0.12);
  --rp-accent: #2563eb;
  --rp-accent-soft: rgba(37, 99, 235, 0.10);
  --rp-accent-border: rgba(37, 99, 235, 0.24);
  width: 100%;
  color: var(--rp-text);
}

.robotics-page * { box-sizing: border-box; }
.robotics-page a { -webkit-tap-highlight-color: transparent; }
.robotics-page a:focus-visible, .robotics-page summary:focus-visible { outline: 3px solid var(--rp-accent-border); outline-offset: 3px; }

.hero-panel {
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.8fr);
  gap: 1.5rem;
  padding: 2.1rem;
  border-radius: 28px;
  background:
    radial-gradient(circle at 12% 18%, rgba(37, 99, 235, 0.18), transparent 34%),
    radial-gradient(circle at 88% 76%, rgba(20, 184, 166, 0.18), transparent 38%),
    linear-gradient(135deg, rgba(248, 250, 252, 0.94), rgba(239, 246, 255, 0.96));
  border: 1px solid var(--rp-accent-border);
  margin: 1.5rem 0 1.25rem;
  box-shadow: var(--rp-shadow-sm);
}
.hero-panel::after {
  content: "";
  position: absolute;
  right: -80px;
  top: -80px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: rgba(37, 99, 235, 0.08);
  pointer-events: none;
}
.eyebrow, .section-kicker {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.76rem;
  font-weight: 850;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--rp-accent);
  margin-bottom: 0.6rem;
}
.eyebrow::before, .section-kicker::before {
  content: "";
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 999px;
  background: var(--rp-accent);
  box-shadow: 0 0 0 4px var(--rp-accent-soft);
}
.hero-panel h2 { margin: 0 0 0.75rem; font-size: clamp(1.55rem, 3vw, 2.35rem); line-height: 1.16; letter-spacing: -0.03em; }
.hero-panel p { margin: 0; color: var(--rp-text-muted); line-height: 1.78; max-width: 780px; }
.hero-tips { display: grid; gap: 0.75rem; position: relative; z-index: 1; }
.hero-tips div {
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid var(--rp-border);
  border-radius: 18px;
  padding: 0.95rem 1rem;
  box-shadow: var(--rp-shadow-sm);
  backdrop-filter: blur(10px);
}
.hero-tips strong { display: block; color: var(--rp-text); margin-bottom: 0.28rem; }
.hero-tips span { color: var(--rp-text-muted); font-size: 0.92rem; line-height: 1.5; }

.quick-nav {
  position: sticky;
  top: 0.75rem;
  z-index: 3;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  padding: 0.75rem;
  margin: 1rem 0 2rem;
  border-radius: 20px;
  background: color-mix(in srgb, var(--rp-card-bg) 88%, transparent);
  border: 1px solid var(--rp-border);
  backdrop-filter: blur(14px);
  box-shadow: var(--rp-shadow-sm);
}
.quick-nav a {
  text-align: center;
  padding: 0.85rem 1rem;
  border-radius: 14px;
  text-decoration: none !important;
  font-weight: 780;
  color: var(--rp-text);
  background: var(--rp-card-bg-soft);
  border: 1px solid transparent;
  transition: transform 0.2s ease, color 0.2s ease, border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}
.quick-nav a:hover { transform: translateY(-2px); color: var(--rp-accent); border-color: var(--rp-accent-border); background: var(--rp-card-bg-hover); box-shadow: var(--rp-shadow-accent); }

.section-block { margin: 2.6rem 0; scroll-margin-top: 6rem; }
.section-title-row { display: flex; justify-content: space-between; align-items: flex-end; gap: 1.25rem; margin-bottom: 1.25rem; }
.section-title-row h2 { margin: 0.15rem 0 0; font-size: 1.7rem; letter-spacing: -0.02em; }
.section-title-row p { margin: 0; max-width: 580px; color: var(--rp-text-muted); line-height: 1.68; }

.product-stack { display: grid; gap: 1rem; }
.product-card {
  --rp-accent: #2563eb;
  --rp-accent-soft: rgba(37, 99, 235, 0.10);
  --rp-accent-border: rgba(37, 99, 235, 0.26);
  position: relative;
  border: 1px solid var(--rp-border);
  border-radius: 24px;
  background: var(--rp-card-bg);
  box-shadow: var(--rp-shadow-sm);
  overflow: hidden;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}
.product-card::before {
  content: "";
  position: absolute;
  inset: 0 auto 0 0;
  width: 5px;
  background: linear-gradient(180deg, var(--rp-accent), color-mix(in srgb, var(--rp-accent) 52%, #14b8a6));
  opacity: 0.88;
}
.product-card:hover { border-color: var(--rp-accent-border); box-shadow: var(--rp-shadow-md); }
.product-card[open] { border-color: var(--rp-accent-border); }
.product-card.rebot { --rp-accent: #2563eb; --rp-accent-soft: rgba(37, 99, 235, 0.10); --rp-accent-border: rgba(37, 99, 235, 0.28); }
.product-card.soarm { --rp-accent: #f97316; --rp-accent-soft: rgba(249, 115, 22, 0.12); --rp-accent-border: rgba(249, 115, 22, 0.30); }
.product-card.starai { --rp-accent: #7c3aed; --rp-accent-soft: rgba(124, 58, 237, 0.12); --rp-accent-border: rgba(124, 58, 237, 0.30); }
.product-card.lekiwi { --rp-accent: #0891b2; --rp-accent-soft: rgba(8, 145, 178, 0.12); --rp-accent-border: rgba(8, 145, 178, 0.30); }
.product-card.stackforce { --rp-accent: #ca8a04; --rp-accent-soft: rgba(202, 138, 4, 0.13); --rp-accent-border: rgba(202, 138, 4, 0.30); }
.product-card.reachy { --rp-accent: #0d9488; --rp-accent-soft: rgba(13, 148, 136, 0.12); --rp-accent-border: rgba(13, 148, 136, 0.30); }
.product-card summary {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;
  padding: 1.18rem 1.28rem 1.18rem 1.45rem;
  background: linear-gradient(90deg, var(--rp-accent-soft), transparent 46%);
}
.product-card summary::-webkit-details-marker { display: none; }
.product-card summary::after {
  content: "⌄";
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  color: var(--rp-accent);
  background: var(--rp-accent-soft);
  font-size: 1.15rem;
  font-weight: 900;
  transition: transform 0.2s ease;
}
.product-card[open] summary::after { transform: rotate(180deg); }
.product-head { display: flex; align-items: center; gap: 0.95rem; min-width: 0; }
.product-icon { width: 46px; height: 46px; display: inline-flex; align-items: center; justify-content: center; border-radius: 16px; background: var(--rp-accent-soft); color: var(--rp-accent); font-size: 1.45rem; flex: 0 0 auto; }
.product-head h3 { margin: 0 0 0.25rem; font-size: 1.18rem; letter-spacing: -0.01em; }
.product-head span { color: var(--rp-text-muted); font-size: 0.92rem; line-height: 1.48; }
.summary-action { flex: 0 0 auto; padding: 0.42rem 0.7rem; border-radius: 999px; font-size: 0.76rem; font-weight: 850; color: var(--rp-accent); background: var(--rp-accent-soft); border: 1px solid var(--rp-accent-border); }
.product-card[open] .summary-action { color: #047857; background: rgba(16, 185, 129, 0.12); border-color: rgba(16, 185, 129, 0.26); }
.product-body { border-top: 1px solid var(--rp-border); padding: 1.25rem; background: linear-gradient(180deg, var(--rp-card-bg), var(--rp-card-bg-soft)); }

.product-meta-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.8rem; margin-bottom: 1rem; }
.product-meta-grid div { padding: 0.95rem; border-radius: 16px; background: color-mix(in srgb, var(--rp-card-bg) 82%, var(--rp-accent-soft)); border: 1px solid var(--rp-border); }
.product-meta-grid strong { display: block; margin-bottom: 0.35rem; color: var(--rp-text); }
.product-meta-grid span { color: var(--rp-text-muted); font-size: 0.88rem; line-height: 1.58; }
.learning-steps { display: grid; gap: 0.75rem; }
.step-card {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.9rem;
  padding: 0.96rem;
  border-radius: 17px;
  background: var(--rp-card-bg);
  border: 1px solid var(--rp-border);
  text-decoration: none !important;
  color: inherit;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}
.step-card:hover { transform: translateX(4px); border-color: var(--rp-accent-border); box-shadow: var(--rp-shadow-accent); background: var(--rp-card-bg-hover); }
.step-index { width: 36px; height: 36px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; background: var(--rp-accent); color: #fff; font-weight: 900; box-shadow: 0 8px 18px var(--rp-accent-soft); }
.step-card b { display: block; margin-bottom: 0.25rem; color: var(--rp-text); }
.step-card small { display: block; color: var(--rp-text-muted); line-height: 1.58; font-size: 0.86rem; }
.step-card em { justify-self: end; font-style: normal; font-size: 0.72rem; font-weight: 850; color: var(--rp-accent); background: var(--rp-accent-soft); border: 1px solid var(--rp-accent-border); border-radius: 999px; padding: 0.32rem 0.58rem; white-space: nowrap; }
.step-card.optional .step-index { background: #64748b; }
.step-card.optional em { color: #475569; background: #e2e8f0; border-color: rgba(100, 116, 139, 0.28); }

.reachy-path-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(235px, 1fr)); gap: 0.9rem; align-items: start; }
.mini-track { background: var(--rp-card-bg); border: 1px solid var(--rp-border); border-radius: 18px; padding: 1rem; box-shadow: 0 6px 18px rgba(15, 23, 42, 0.035); }
.mini-track h4 { margin: 0 0 0.75rem; color: var(--rp-text); font-size: 0.98rem; }
.mini-track a { display: block; padding: 0.58rem 0.68rem; margin: 0.42rem 0; border-radius: 11px; background: var(--rp-card-bg-soft); text-decoration: none !important; color: var(--rp-text-muted); font-size: 0.88rem; border: 1px solid transparent; transition: all 0.18s ease; }
.mini-track a:hover { color: var(--rp-accent); background: var(--rp-accent-soft); border-color: var(--rp-accent-border); transform: translateX(2px); }

.note-box { margin-top: 1rem; padding: 0.9rem 1rem; border-radius: 14px; color: #92400e; background: #fffbeb; border: 1px solid #fde68a; font-size: 0.88rem; line-height: 1.6; }
.resource-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; }
.resource-grid a, .resource-columns a { display: block; padding: 0.75rem 0.85rem; border-radius: 13px; text-decoration: none !important; color: var(--rp-text-muted); background: var(--rp-card-bg); border: 1px solid var(--rp-border); transition: all 0.2s ease; }
.resource-grid a:hover, .resource-columns a:hover { color: var(--rp-accent); border-color: var(--rp-accent-border); transform: translateY(-2px); box-shadow: var(--rp-shadow-accent); }
.resource-columns { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
.resource-columns div { padding: 1rem; border-radius: 19px; background: var(--rp-card-bg-soft); border: 1px solid var(--rp-border); }
.resource-columns h4 { margin: 0 0 0.75rem; color: var(--rp-text); }
.resource-columns a { margin-bottom: 0.55rem; }

html[data-theme='dark'] .robotics-page {
  --rp-page-bg: #111317;
  --rp-card-bg: #1b1d22;
  --rp-card-bg-soft: #23262d;
  --rp-card-bg-hover: #262a32;
  --rp-text: #f8fafc;
  --rp-text-muted: #cbd5e1;
  --rp-text-soft: #94a3b8;
  --rp-border: rgba(148, 163, 184, 0.18);
  --rp-border-strong: rgba(148, 163, 184, 0.28);
  --rp-shadow-sm: 0 10px 26px rgba(0, 0, 0, 0.28);
  --rp-shadow-md: 0 18px 42px rgba(0, 0, 0, 0.36);
  --rp-shadow-accent: 0 16px 34px rgba(96, 165, 250, 0.10);
}
html[data-theme='dark'] .hero-panel {
  background:
    radial-gradient(circle at 12% 18%, rgba(96, 165, 250, 0.20), transparent 34%),
    radial-gradient(circle at 88% 76%, rgba(45, 212, 191, 0.14), transparent 38%),
    linear-gradient(135deg, #171a20, #111827);
  border-color: var(--rp-border-strong);
}
html[data-theme='dark'] .hero-tips div { background: rgba(27, 29, 34, 0.78); }
html[data-theme='dark'] .quick-nav { background: rgba(17, 19, 23, 0.82); }
html[data-theme='dark'] .note-box { color: #fde68a; background: rgba(146, 64, 14, 0.18); border-color: rgba(253, 230, 138, 0.24); }
html[data-theme='dark'] .step-card.optional em { color: #cbd5e1; background: rgba(100, 116, 139, 0.20); }

@media (max-width: 900px) {
  .hero-panel, .product-meta-grid, .resource-columns { grid-template-columns: 1fr; }
  .section-title-row { display: block; }
  .section-title-row p { margin-top: 0.5rem; }
  .quick-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); position: static; }
  .step-card { grid-template-columns: auto minmax(0, 1fr); }
  .step-card em { grid-column: 2; justify-self: start; }
}
@media (max-width: 560px) {
  .hero-panel { padding: 1.25rem; border-radius: 20px; }
  .quick-nav { grid-template-columns: 1fr; }
  .product-card summary { align-items: flex-start; padding-right: 0.9rem; }
  .summary-action { display: none; }
  .product-card summary::after { margin-top: 0.45rem; }
  .product-icon { width: 40px; height: 40px; }
  .product-body { padding: 1rem; }
}
@media (prefers-reduced-motion: reduce) {
  .robotics-page *, .robotics-page *::before, .robotics-page *::after { transition: none !important; animation: none !important; scroll-behavior: auto !important; }
}


/* Optimized collapsed-card learning path additions */
.kit-index-panel {
  margin: 1.6rem 0 2.2rem;
  padding: 1.25rem;
  border-radius: 24px;
  border: 1px solid var(--rp-border);
  background: linear-gradient(135deg, var(--rp-card-bg), var(--rp-card-bg-soft));
  box-shadow: var(--rp-shadow-sm);
}
.compact-title { margin-bottom: 1rem; }
.kit-index-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 0.8rem;
}
.kit-index-grid a {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  grid-template-areas: "icon title" "icon desc";
  gap: 0.18rem 0.75rem;
  align-items: center;
  padding: 0.9rem;
  border-radius: 16px;
  border: 1px solid var(--rp-border);
  background: var(--rp-card-bg);
  text-decoration: none !important;
  color: inherit;
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}
.kit-index-grid a:hover {
  transform: translateY(-2px);
  border-color: var(--rp-accent-border);
  box-shadow: var(--rp-shadow-accent);
}
.kit-index-grid span {
  grid-area: icon;
  width: 2.35rem;
  height: 2.35rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: var(--rp-accent-soft);
  font-size: 1.2rem;
}
.kit-index-grid strong { grid-area: title; color: var(--rp-text); }
.kit-index-grid small { grid-area: desc; color: var(--rp-text-muted); line-height: 1.35; }
.product-card { scroll-margin-top: 6rem; }
.product-card .summary-action { position: relative; min-width: 6.3rem; text-align: center; }
.product-card[open] .summary-action { font-size: 0; }
.product-card[open] .summary-action::after { content: "Close learning path"; font-size: 0.76rem; }
.product-card:not([open]) summary { background: linear-gradient(90deg, var(--rp-card-bg), var(--rp-card-bg-soft)); }
.product-card:not([open]) .product-head span { color: var(--rp-text-muted); }
.product-body { animation: rpFadeIn 0.18s ease-out; }
@keyframes rpFadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
.product-meta-grid div, .mini-track, .resource-columns div, .kit-index-panel {
  backdrop-filter: blur(6px);
}
html[data-theme='dark'] .kit-index-panel {
  background: linear-gradient(135deg, var(--rp-card-bg), var(--rp-card-bg-soft));
}
html[data-theme='dark'] .kit-index-grid a { background: var(--rp-card-bg); }
@media (max-width: 900px) {
  .kit-index-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 560px) {
  .kit-index-panel { padding: 1rem; border-radius: 20px; }
  .kit-index-grid { grid-template-columns: 1fr; }
}

`}</style>
