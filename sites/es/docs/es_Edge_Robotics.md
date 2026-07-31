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
updatedAt: '2026-07-04'
url: https://wiki.seeedstudio.com/es/robotics_page/
---

import '/src/css/robotics-page-style.css';

# 🤖 Robótica

> *"La ciencia de hoy es la tecnología de mañana." - Edward Teller*

<div className="robotics-page">

  <section className="hero-panel">
    <div>
      <span className="eyebrow">Wiki de Robótica de Seeed Studio</span>
      <h2>Empieza con tu kit de robot</h2>
      <p>Encuentra la ruta de robótica de Seeed Studio adecuada según el producto. Elige tu kit y sigue los pasos desde la configuración hasta el desarrollo avanzado.</p>
    </div>
    <div className="hero-tips">
      <div><strong>Nuevo dispositivo</strong><span>Desempaqueta, cablea, enciende, instala controladores y prueba el movimiento</span></div>
      <div><strong>Crear aplicaciones</strong><span>Usa SDKs, LeRobot, ROS2, visión o control móvil</span></div>
      <div><strong>Robótica con IA</strong><span>Explora simulación, recopilación de datos, GR00T, VLA y RL</span></div>
    </div>
  </section>

  <nav className="quick-nav" aria-label="Robotics page quick navigation">
    <a href="#robot-kits">📦 Kits de robots</a>
    <a href="#actuators">⚙️ Actuadores de articulaciones</a>
    <a href="#sensors">👁️ Sensores</a>
    <a href="#software">💻 Ecosistema de software</a>
  </nav>

  <section className="kit-index-panel" aria-label="Quick robot kit selection">
    <div className="section-title-row compact-title">
      <div>
        <span className="section-kicker">Elige un kit</span>
        <h2>Elige tu ruta de aprendizaje</h2>
      </div>
      <p>Las tarjetas están contraídas de forma predeterminada. Abre tu kit para ver su ruta.</p>
    </div>
    <div className="kit-index-grid">
      <a href="#rebot-rs"><span>🦾</span><strong>B601-RS</strong><small>Ruta del brazo robótico RobStride</small></a>
      <a href="#rebot-dm"><span>🦾</span><strong>B601-DM</strong><small>Ruta del brazo robótico Damiao</small></a>
      <a href="#soarm"><span>🤗</span><strong>SO100 / SO101</strong><small>Ruta económica de LeRobot</small></a>
      <a href="#starai"><span>🦾</span><strong>StarAI</strong><small>ROS2 / MoveIt / GR00T</small></a>
      <a href="#lekiwi"><span>🚗</span><strong>Lekiwi</strong><small>Chasis móvil y demostraciones de aplicaciones</small></a>
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
      <p>Cada ruta comienza con la configuración del hardware y luego pasa al SDK, ROS, simulación y aplicaciones de IA.</p>
    </div>

    <div className="product-stack">

<details id="rebot-rs" className="product-card rebot">
  <summary>
    <div className="product-head">
      <span className="product-icon">🦾</span>
      <div>
        <h3>Brazo robótico reBot B601-RS</h3>
        <span>Para teleoperación, agarre visual, ROS2 y recopilación de datos de IA</span>
      </div>
    </div>
    <span className="summary-action">Ampliar plan de aprendizaje</span>
  </summary>
  <div className="product-body">
    <div className="product-meta-grid">
      <div><strong>Recomendado para</strong><span>Usuarios de reBot Arm por primera vez</span></div>
      <div><strong>Objetivo de aprendizaje</strong><span>Ejecutar teleoperación, agarre visual y ROS2</span></div>
      <div><strong>Orden recomendado</strong><span>Inicio rápido → LeRobot → Pinocchio → Agarre visual → ROS2</span></div>
    </div>
    <div className="learning-steps">
      <a className="step-card" href="/es/rebot_b601_rs_getting_started/"><span className="step-index">1</span><div><b>Inicio rápido</b><small>Desempaqueta, cablea, enciende, comprueba los controladores y prueba el movimiento básico.</small></div><em>Obligatorio para principiantes</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_rs_lerobot/"><span className="step-index">2</span><div><b>Teleoperación y recopilación de datos con LeRobot</b><small>Recopila datos de teleoperación para aprendizaje por imitación e IA encarnada.</small></div><em>Recopilación de datos</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_rs_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Visualización de cinemática con Pinocchio</b><small>Explora el modelo del brazo, articulaciones, marcos y cinemática.</small></div><em>Control avanzado</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_rs_grasping_demo/"><span className="step-index">4</span><div><b>Demostración de agarre visual</b><small>Usa visión y generación de poses de agarre para recoger objetos reales.</small></div><em>Demostración de aplicación</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_rs_ros2_integration/"><span className="step-index">5</span><div><b>Integración con ROS2</b><small>Conecta el brazo a ROS2 para percepción, planificación y simulación.</small></div><em>Integración de sistemas</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_rs_isaacsim/"><span className="step-index">6</span><div><b>Integración con ROS2</b><small>Simula el brazo en Isaac Sim y sincronízalo con el robot real.</small></div><em>Simulación</em></a>
    </div>
  </div>
</details>

<details id="rebot-dm" className="product-card rebot">
<summary>
  <div className="product-head">
    <span className="product-icon">🦾</span>
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
    <div><strong>Orden recomendado</strong><span>Inicio rápido → LeRobot → Pinocchio → Agarre visual → ROS2</span></div>
  </div>
<div className="learning-steps">
  <a className="step-card" href="/es/rebot_b601_dm_getting_started/"><span className="step-index">1</span><div><b>Inicio rápido</b><small>Comprueba la alimentación, CAN, controladores y movimiento básico.</small></div><em>Obligatorio para principiantes</em></a>

  <a className="step-card" href="/es/rebot_arm_b601_dm_lerobot/"><span className="step-index">2</span><div><b>Recopilación de datos con LeRobot</b><small>Registra datos de teleoperación para aprendizaje por imitación.</small></div><em>Datos de IA</em></a>

  <a className="step-card" href="/es/rebot_arm_b601_dm_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio y Meshcat</b><small>Carga modelos, visualiza el movimiento y aprende cinemática.</small></div><em>Fundamentos de control</em></a>

  <a className="step-card" href="/es/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">4</span><div><b>Demostración de agarre visual</b><small>Combina el brazo y la visión para agarre en el mundo real.</small></div><em>Demostración de aplicación</em></a>

  <a className="step-card" href="/es/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">5</span><div><b>Integración con ROS2</b><small>Usa ROS2 con MoveIt, percepción y aplicaciones de sistema.</small></div><em>Integración de sistemas</em></a>
</div>
</div>
</details>

<details id="soarm" className="product-card soarm">
<summary>
  <div className="product-head">
    <span className="product-icon">🤗</span>
    <div>
      <h3>Brazo robótico SO100 / SO101</h3>
      <span>Ruta económica para LeRobot, simulación, RL y GR00T/VLA</span>
    </div>
  </div>
  <span className="summary-action">Ampliar plan de aprendizaje</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Estudiantes de LeRobot e IA encarnada de bajo coste</span></div>
    <div><strong>Objetivo de aprendizaje</strong><span>Aprender servos, simulación, RL, GR00T y brazos dobles</span></div>
    <div><strong>Orden recomendado</strong><span>Primeros pasos → Depuración de servos → Simulación → Isaac Lab → GR00T → Brazos dobles</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/es/lerobot_so100m_new/"><span className="step-index">1</span><div><b>Inicio rápido SO100 / SO101</b><small>Instala el hardware, conecta, calibra y ejecuta una prueba básica.</small></div><em>Obligatorio para principiantes</em></a>
    <a className="step-card" href="/es/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>Herramienta de depuración de servos</b><small>Comprueba el ID del servo, la dirección, el punto cero y la comunicación.</small></div><em>Fundamentos de resolución de problemas</em></a>
    <a className="step-card" href="/es/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">3</span><div><b>SO101 y NVIDIA GR00T</b><small>Ajusta finamente modelos VLA y despliega en Jetson.</small></div><em>VLA avanzada</em></a>
    <a className="step-card" href="/es/lerobot_double_arm_so_arm_training/"><span className="step-index">4</span><div><b>Entrenamiento de brazo doble SO-ARM</b><small>Recopila datos, entrena y ejecuta tareas de brazo doble.</small></div><em>Tareas complejas</em></a>
    <a className="step-card" href="/es/soarm_amazinghand_teleop/"><span className="step-index">5</span><div><b>SO-ARM con mano hábil Amazing Hand</b><small>Combina SO-ARM101 con Amazing Hand para LeRobot.</small></div><em>Integración de mano hábil</em></a>
    <a className="step-card" href="/es/simulate_soarm101_by_leisaac/"><span className="step-index">6</span><div><b>Simulación LeIsaac</b><small>Prepárate para Sim2Real con modelos y tareas simuladas.</small></div><em>Fundamentos de simulación</em></a>
    <a className="step-card" href="/es/training_soarm101_policy_with_isaacLab/"><span className="step-index">7</span><div><b>Aprendizaje por refuerzo con Isaac Lab</b><small>Entrena políticas en simulación y revisa el diseño de recompensas.</small></div><em>Entrenamiento avanzado</em></a>
    <a className="step-card optional" href="/es/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b><small>Prueba plataformas de terceros para recopilación de datos y entrenamiento.</small></div><em>Extensión opcional</em></a>
  </div>
</div>
</details>

<details id="starai" className="product-card starai">
<summary>
  <div className="product-head">
    <span className="product-icon">🦾</span>
    <div>
      <h3>Brazo Robótico StarAI</h3>
      <span>Para control básico, MoveIt 2, planificación con ROS2 y GR00T</span>
    </div>
  </div>
  <span className="summary-action">Ampliar plan de aprendizaje</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Demostraciones de planificación con ROS2 y control con IA</span></div>
    <div><strong>Objetivo de aprendizaje</strong><span>Ejecutar control básico, MoveIt 2 y GR00T</span></div>
    <div><strong>Orden recomendado</strong><span>Inicio rápido → MoveIt 2 → GR00T</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/es/lerobot_starai_arm/"><span className="step-index">1</span><div><b>Inicio Rápido del Brazo Robótico StarAI</b><small>Conecta el hardware, ejecuta el control básico y prueba ejemplos.</small></div><em>Obligatorio para principiantes</em></a>
    <a className="step-card" href="/es/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>Planificación de Movimiento con MoveIt 2</b><small>Importa modelos y planifica trayectorias con MoveIt 2.</small></div><em>ROS2 avanzado</em></a>
    <a className="step-card" href="/es/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>StarAI y NVIDIA GR00T</b><small>Construye control de brazo robótico con LLM / VLA.</small></div><em>Control con IA</em></a>
  </div>
</div>
</details>

<details id="lekiwi" className="product-card lekiwi">
<summary>
  <div className="product-head">
    <span className="product-icon">🚗</span>
    <div>
      <h3>Chasis Móvil Lekiwi</h3>
      <span>Para control de chasis y demostraciones de seguimiento de sonido</span>
    </div>
  </div>
  <span className="summary-action">Ampliar plan de aprendizaje</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Usuarios primerizos de chasis móvil</span></div>
    <div><strong>Objetivo de aprendizaje</strong><span>Ejecutar control de chasis y demostraciones de seguimiento de sonido</span></div>
    <div><strong>Nota</strong><span>Pasos de ROS2 eliminados; solo se mantiene la ruta del producto actual</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/es/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Inicio Rápido del Chasis Móvil Lekiwi</b><small>Ensamblar, conectar, probar el movimiento y comprobar la seguridad.</small></div><em>Obligatorio para principiantes</em></a>
    <a className="step-card" href="/es/sound_follow_robot/"><span className="step-index">2</span><div><b>Demostración de Seguimiento de Sonido</b><small>Usa entrada de sonido para ejecutar una demostración móvil interactiva.</small></div><em>Demostración de aplicación</em></a>
  </div>
</div>
</details>

<details id="stackforce" className="product-card stackforce">
<summary>
  <div className="product-head">
    <span className="product-icon">🦿</span>
    <div>
      <h3>Robot Mini con Ruedas y Piernas StackForce</h3>
      <span>Para control con ruedas y piernas, equilibrio y planificación de movimiento</span>
    </div>
  </div>
  <span className="summary-action">Ampliar plan de aprendizaje</span>
</summary>
<div className="product-body">
  <div className="product-meta-grid">
    <div><strong>Recomendado para</strong><span>Aprendices de robots móviles y con ruedas y piernas</span></div>
    <div><strong>Objetivo de aprendizaje</strong><span>Aprender estructura, lógica de control y movimiento básico</span></div>
    <div><strong>Orden recomendado</strong><span>Inicio rápido → Principios de control → Depuración de movimiento</span></div>
  </div>
  <div className="learning-steps">
    <a className="step-card" href="/es/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>Inicio Rápido de StackForce Mini</b><small>Aprende el hardware, despliega lo básico y prueba el movimiento.</small></div><em>Curso de sistema</em></a>
  </div>
</div>
</details>

<details id="reachy" className="product-card reachy">
<summary>
  <div className="product-head">
    <span className="product-icon">🤗</span>
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
    <div><strong>Objetivo de aprendizaje</strong><span>Comenzar con lo básico, luego SDK, IA y resolución de problemas</span></div>
    <div><strong>Documentación</strong><span>Organizada desde lo básico hasta la plataforma, SDK, IA y resolución de problemas</span></div>
  </div>

<div className="reachy-path-grid">
            <div className="mini-track">
              <h4>① Conoce primero el producto</h4>
              <a href="/es/reachymini_intro/">Introducción al Producto Reachy Mini</a>
              <a href="/es/reachymini_getting_started/">Guía de Inicio para ReachyMini</a>
            </div>
            <div className="mini-track">
              <h4>② Elige tu plataforma</h4>
              <a href="/es/reachymini_platforms_simulation_get_started/">Inicio Rápido de Simulación</a>
              <a href="/es/reachymini_platforms_reachy_mini_get_started/">Guía de Configuración Inalámbrica de Reachy Mini</a>
              <a href="/es/reachymini_platforms_reachy_mini_usage/">Uso de Reachy Mini</a>
              <a href="/es/reachymini_platforms_reachy_mini_hardware/">Hoja de Datos de Hardware de Reachy Mini</a>
              <a href="/es/reachymini_platforms_reachy_mini_lite_get_started/">Guía de Configuración de Reachy Mini Lite</a>
              <a href="/es/reachymini_platforms_reachy_mini_lite_usage/">Uso de Reachy Mini Lite</a>
              <a href="/es/reachymini_platforms_reachy_mini_lite_hardware/">Hoja de Datos de Hardware de Reachy Mini Lite</a>
            </div>
            <div className="mini-track">
              <h4>③ SDK y fundamentos de desarrollo</h4>
              <a href="/es/reachymini_sdk_readme/">SDK de Reachy Mini</a>
              <a href="/es/reachymini_sdk_installation/">Guía de Instalación</a>
              <a href="/es/reachymini_sdk_quickstart/">Guía de Inicio Rápido</a>
              <a href="/es/reachymini_sdk_python-sdk/">Referencia del SDK de Python</a>
              <a href="/es/reachymini_sdk_core-concept/">Conceptos Fundamentales y Arquitectura</a>
              <a href="/es/reachymini_sdk_media-architecture/">Arquitectura de Medios</a>
              <a href="/es/reachymini_sdk_gstreamer-installation/">Instalación de GStreamer</a>
              <a href="/es/reachymini_sdk_javascript-sdk/">SDK de JavaScript y Aplicaciones Web</a>
            </div>
            <div className="mini-track">
              <h4>④ Aplicaciones e integración de IA</h4>
              <a href="/es/reachymini_sdk_integration/">Integración y Aplicaciones</a>
              <a href="/es/reachymini_sdk_apps/">Crear y Publicar Aplicaciones</a>
              <a href="/es/reachymini_conversation/">Integrar la API de Doubao LLM</a>
              <a href="/es/reachymini_vibe-code-with-your-agent/">Programación Vibe con un Agente</a>
              <a href="/es/reachymini_agents/">Guía de Desarrollo para Agentes de IA</a>
            </div>
            <div className="mini-track">
              <h4>⑤ Medios, sistema y operaciones avanzadas</h4>
              <a href="/es/reachymini_platforms_reachy_mini_media_advanced_controls/">Controles Avanzados de Medios Inalámbricos</a>
              <a href="/es/reachymini_platforms_reachy_mini_lite_media_advanced_controls/">Controles Avanzados de Medios en Lite</a>
              <a href="/es/reachymini_platforms_reachy_mini_lite_wizard/">Usar Dynamixel Wizard para Leer Parámetros del Motor</a>
              <a href="/es/reachymini_platforms_reachy_mini_development_workflow/">Flujo de Trabajo de Desarrollo Inalámbrico</a>
              <a href="/es/reachymini_platforms_reachy_mini_install_daemon_from_branch/">Instalar el Daemon desde una Rama Específica</a>
              <a href="/es/reachymini_platforms_reachy_mini_reflash_the_rpi_iso/">Reflashear la Imagen del SO de Raspberry Pi</a>
              <a href="/es/reachymini_platforms_reachy_mini_reset/">Restablecer vía Bluetooth</a>
            </div>
            <div className="mini-track">
              <h4>⑥ Tutoriales de ejemplo</h4>
              <a href="/es/reachymini_examples_minimal_demo/">Demostración Mínima</a>
              <a href="/es/reachymini_examples_goto_interpolation_playground/">Zona de Pruebas de Interpolación Goto</a>
              <a href="/es/reachymini_examples_look_at/">Mirar una Imagen</a>
              <a href="/es/reachymini_examples_mini_head_position_gui/">GUI de Posición de la Cabeza</a>
              <a href="/es/reachymini_examples_joy_controller/">Controlador de Joystick</a>
              <a href="/es/reachymini_examples_imu/">Ejemplo de IMU</a>
              <a href="/es/reachymini_examples_custom_media_manager/">Gestor de Medios Personalizado</a>
              <a href="/es/reachymini_examples_reachy_compliant_demo/">Demostración de Modo Compliant</a>
              <a href="/es/reachymini_examples_recorded_moves/">Movimientos Grabados</a>
              <a href="/es/reachymini_examples_rerun_viewer/">Visor Rerun</a>
              <a href="/es/reachymini_examples_sequence/">Demostración de Secuencia</a>
              <a href="/es/reachymini_examples_sound_doa/">Dirección de Llegada del Sonido</a>
              <a href="/es/reachymini_examples_sound_play/">Reproducción de Sonido</a>
              <a href="/es/reachymini_examples_sound_record/">Grabación de Sonido</a>
              <a href="/es/reachymini_examples_take_picture/">Tomar una Foto</a>
            </div>
            <div className="mini-track">
              <h4>⑦ Resolución de problemas y mantenimiento</h4>
              <a href="/es/reachymini_troubleshooting/">Resolución de Problemas y Preguntas Frecuentes</a>
              <a href="/es/reachymini_troubleshooting_motors_diagnosis/">Diagnóstico y Resolución de Problemas de Motores</a>
              <a href="/es/reachymini_troubleshooting_change_mic_fpc_cable/">Sustituir el Cable FPC del Micrófono</a>
              <a href="/es/reachymini_troubleshooting_spherical_joints_maintenance/">Mantenimiento de Articulaciones Esféricas</a>
              <a href="/es/reachymini_troubleshooting_roadmap/">Hoja de Ruta de Reachy Mini</a>
            </div>
            <div className="mini-track">
              <h4>⑧ Referencia de API</h4>
              <a href="/es/reachymini_api_reachymini/">Referencia de la API de ReachyMini</a>
              <a href="/es/reachymini_api_rest-api/">Referencia de la REST API</a>
              <a href="/es/reachymini_api_daemon/">Daemon API</a>
              <a href="/es/reachymini_api_motion/">Motion API</a>
              <a href="/es/reachymini_api_media/">Media API</a>
              <a href="/es/reachymini_api_apps/">Referencia de la API de Aplicaciones</a>
              <a href="/es/reachymini_api_tools/">Referencia de la API de Herramientas</a>
              <a href="/es/reachymini_api_utils/">Referencia de la API de Utilidades</a>
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
      <p>Para depuración de motores, protocolos de comunicación y resolución de problemas de articulaciones.</p>
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
      <p>Para agarre visual, SLAM, interacción por voz y percepción del estado del robot.</p>
    </div>
    <div className="resource-columns">
      <div><h4>📡 LiDAR</h4><a href="/es/robosense_lidar/">RoboSense</a><a href="/es/mid360/">Livox MID360</a><a href="/es/a_loam/">Algoritmo A-LOAM</a><a href="/es/slamtec/">Slamtec Serie</a></div>
      <div><h4>📷 Cámaras</h4><a href="/es/orbbec_gemini2/">Orbbec Gemini 2</a><a href="/es/orbbec_gemini_335lg/">Cámara de profundidad Gemini 335Lg</a><a href="/es/orbbec_gemini336">Cámara de profundidad Gemini 336</a><a href="/es/sensing_gmsl_cameras">Cámara SENSING GMSL2</a><a href="/es/ac1">RoboSense AC1</a><a href="/es/orbbec_depth_camera_on_ros/">Orbbec y ROS</a><a href="/es/orb_slam3_orbbec_gemini2/">ORB-SLAM3 y Gemini2</a><a href="/es/csi_camera_on_ros/">Cámara CSI en Jetson</a><a href="/es/pycuvslam_recomputer_robotics/">PyCuVSLAM</a></div>
      <div><h4>🎤 Voz</h4><a href="/es/ReSpeaker_Core_v2.0/">ReSpeaker Core v2.0</a><a href="/es/ReSpeaker_Mic_Array_v2.0/">ReSpeaker Mic Array v2.0</a><h4>🧭 IMU</h4><a href="/es/hexfellow_y200/">HEXFELLOW Y200</a><a href="/es/wheeltec_imu/">WHEELTEC IMU</a></div>
    </div>
  </section>

  <section id="software" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referencia</span>
        <h2>💻 Ecosistema de software</h2>
      </div>
      <p>Después de la configuración, continúa con ROS, Isaac, PX4 o VLA.</p>
    </div>
    <div className="resource-columns">
      <div><h4>Ecosistema ROS</h4><a href="/es/installing_ros1/">Instalación de ROS 1</a><a href="/es/install_ros2_humble/">Instalación de ROS 2</a><a href="/es/install_isaacros/">Instalación de Isaac ROS</a><a href="/es/isaac_ros_apriltag/">Isaac ROS AprilTag</a><a href="/es/isaac_ros_visual_slam/">Isaac ROS V-SLAM</a></div>
      <div><h4>NVIDIA Isaac</h4><a href="/es/install_isaaclab/">Instalación de Isaac Lab</a><a href="/es/training_soarm101_policy_with_isaacLab/">Aprendizaje por refuerzo del brazo SO</a><a href="/es/simulate_soarm101_by_leisaac/">Brazo robótico SO100 con IsaacSim</a></div>
      <div><h4>PX4 / VLA</h4><a href="/es/control_px4_with_recomputer_jetson/">PX4 y Jetson</a><a href="/es/object_tracking_with_reComputer_jetson_and_pX4/">Seguimiento de objetos con PX4</a><a href="/es/control_robotic_arm_via_gr00t/">StarAI y NVIDIA GR00T</a></div>
    </div>
  </section>

</div>
