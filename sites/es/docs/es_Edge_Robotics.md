---
description: Documentación y rutas de aprendizaje de robótica de Seeed Studio.
title: Wiki de Robótica con IA
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
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/es/robotics_page/
---

import '/src/css/robotics-page-style.css';
import RoboticsPageSearch from '@site/src/components/robotics/RoboticsPageSearch';

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

  <nav className="quick-nav" aria-label="Robotics page quick navigation">
    <a href="#robot-kits">📦 Kits de robots</a>
    <a href="#rebot-hardware-inventory">🧰 Recursos de código abierto de rebot</a>
    <a href="#actuators">⚙️ Actuadores de articulación</a>
    <a href="#sensors">👁️ Sensores</a>
    <a href="#software">💻 Ecosistema de software</a>
  </nav>


  <section id="robot-kits" className="section-block">
    <div className="product-stack">

<article id="rebot-rs" className="product-card rebot product-card--cover">
  <div className="product-head">
    <h3>Brazo robótico reBot B601-RS</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
      <a className="step-card" href="/es/rebot_b601_rs_getting_started/"><span className="step-index">1</span><div><b>Inicio rápido</b><small>Desempaqueta, cablea, enciende, comprueba los controladores y prueba el movimiento básico.</small></div><em>Obligatorio para principiantes</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_rs_lerobot/"><span className="step-index">2</span><div><b>Teleoperación y recopilación de datos con LeRobot</b><small>Recopila datos de teleoperación para aprendizaje por imitación e IA encarnada.</small></div><em>Recopilación de datos</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_rs_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Visualización de cinemática con Pinocchio</b><small>Explora el modelo del brazo, articulaciones, marcos y cinemática.</small></div><em>Control avanzado</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_rs_grasping_demo/"><span className="step-index">4</span><div><b>Demostración de agarre visual</b><small>Usa visión y generación de poses de agarre para recoger objetos reales.</small></div><em>Demostración de aplicación</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_rs_ros2_integration/"><span className="step-index">5</span><div><b>Integración con ROS2</b><small>Conecta el brazo a ROS2 para percepción, planificación y simulación.</small></div><em>Integración de sistema</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_rs_web_simulator_developer_guide/"><span className="step-index">6</span><div><b>Desarrollo de simulador web</b><small>Aprende la integración del simulador web con ROS2/MuJoCo para control sincronizado virtual-real.</small></div><em>Desarrollo de simulación</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_rs_isaacsim/"><span className="step-index">7</span><div><b>Integración con Isaac Sim</b><small>Simula el brazo en Isaac Sim y sincronízalo con el robot real.</small></div><em>Simulación</em></a>
      <a className="step-card" href="/es/rebot_arm_b601_rs_mit_control/"><span className="step-index">8</span><div><b>Control de posición MIT</b><small>Comienza con el control de posición MIT para el brazo reBot B601-RS.</small></div><em>Control avanzado</em></a>
      <a className="step-card" href="/es/wrc_demo_tutorial/"><span className="step-index">9</span><div><b>Marco de diseño de agentes encarnados</b><small>Conecta un VLM al brazo para que comandos en lenguaje natural impulsen el agarre basado en visión con control protegido por seguridad.</small></div><em>Marco de agente</em></a>
    </div>
  </div>
</article>


<article id="rebot-dm" className="product-card rebot product-card--cover">
  <div className="product-head">
    <h3>Brazo robótico reBot B601-DM</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
  <a className="step-card" href="/es/rebot_b601_dm_getting_started/"><span className="step-index">1</span><div><b>Inicio rápido</b><small>Comprueba la alimentación, el CAN, los controladores y el movimiento básico.</small></div><em>Obligatorio para principiantes</em></a>

  <a className="step-card" href="/es/rebot_arm_b601_dm_lerobot/"><span className="step-index">2</span><div><b>Recopilación de datos con LeRobot</b><small>Registra datos de teleoperación para aprendizaje por imitación.</small></div><em>Datos de IA</em></a>

  <a className="step-card" href="/es/rebot_arm_b601_dm_pinocchio_meshcat/"><span className="step-index">3</span><div><b>Pinocchio y Meshcat</b><small>Carga modelos, visualiza el movimiento y aprende cinemática.</small></div><em>Fundamentos de control</em></a>

  <a className="step-card" href="/es/rebot_arm_b601_dm_grasping_demo/"><span className="step-index">4</span><div><b>Demostración de agarre visual</b><small>Combina el brazo y la visión para agarre en el mundo real.</small></div><em>Demostración de aplicación</em></a>

  <a className="step-card" href="/es/rebot_arm_b601_dm_ros2_integration/"><span className="step-index">5</span><div><b>Integración con ROS2</b><small>Usa ROS2 con MoveIt, percepción y aplicaciones de sistema.</small></div><em>Integración de sistema</em></a>

  <a className="step-card" href="/es/rebot_arm_b601_dm_web_simulator_developer_guide/"><span className="step-index">6</span><div><b>Desarrollo de simulador web</b><small>Aprende la integración del simulador web con ROS2/MuJoCo para control sincronizado virtual-real.</small></div><em>Desarrollo de simulación</em></a>

  <a className="step-card" href="/es/rebot_arm_b601_dm_isaacsim/"><span className="step-index">7</span><div><b>Integración con Isaac Sim</b><small>Despliega reBot B601-DM en Isaac Sim para simulación, depuración y validación de algoritmos de control.</small></div><em>Simulación</em></a>
</div>
  </div>
</article>


<article id="soarm" className="product-card soarm product-card--cover">
  <div className="product-head">
    <h3>Brazo robótico SO100 / SO101</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/es/lerobot_so100m_new/"><span className="step-index">1</span><div><b>Inicio rápido de SO100 / SO101</b><small>Instala el hardware, conecta, calibra y ejecuta una prueba básica.</small></div><em>Obligatorio para principiantes</em></a>
    <a className="step-card" href="/es/lerobot_steering_gear_debugging_tool/"><span className="step-index">2</span><div><b>Herramienta de depuración de servos</b><small>Comprueba el ID del servo, la dirección, el punto cero y la comunicación.</small></div><em>Fundamentos de resolución de problemas</em></a>
    <a className="step-card" href="/es/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/"><span className="step-index">3</span><div><b>SO101 y NVIDIA GR00T</b><small>Ajusta modelos VLA y despliega en Jetson.</small></div><em>VLA avanzado</em></a>
    <a className="step-card" href="/es/lerobot_double_arm_so_arm_training/"><span className="step-index">4</span><div><b>Entrenamiento de doble brazo SO-ARM</b><small>Recopila datos, entrena y ejecuta tareas de doble brazo.</small></div><em>Tareas complejas</em></a>
    <a className="step-card" href="/es/soarm_amazinghand_teleop/"><span className="step-index">5</span><div><b>SO-ARM con mano hábil Amazing Hand</b><small>Combina SO-ARM101 con Amazing Hand para LeRobot.</small></div><em>Integración de mano hábil</em></a>
    <a className="step-card" href="/es/simulate_soarm101_by_leisaac/"><span className="step-index">6</span><div><b>Simulación LeIsaac</b><small>Prepárate para Sim2Real con modelos y tareas simuladas.</small></div><em>Fundamentos de simulación</em></a>
    <a className="step-card" href="/es/training_soarm101_policy_with_isaacLab/"><span className="step-index">7</span><div><b>Aprendizaje por refuerzo con Isaac Lab</b><small>Entrena políticas en simulación y revisa el diseño de recompensas.</small></div><em>Entrenamiento avanzado</em></a>
    <a className="step-card optional" href="/es/control_robotic_arm_via_phospho/"><span className="step-index">+</span><div><b>Phospho LeRobot</b><small>Prueba plataformas de terceros para recopilación de datos y entrenamiento.</small></div><em>Extensión opcional</em></a>
  </div>
  </div>
</article>


<article id="reachy" className="product-card reachy product-card--cover">
  <div className="product-head">
    <h3>Reachy Mini</h3>
  </div>
  <div className="product-body">
    <div className="reachy-path-grid">
            <div className="mini-track">
              <h4>① Conoce primero el producto</h4>
              <a href="/es/reachymini_intro/">Introducción al producto Reachy Mini</a>
              <a href="/es/reachymini_getting_started/">Guía de inicio de ReachyMini</a>
            </div>
            <div className="mini-track">
              <h4>② Elige tu plataforma</h4>
              <a href="/es/reachymini_platforms_simulation_get_started/">Inicio rápido de simulación</a>
              <a href="/es/reachymini_platforms_reachy_mini_get_started/">Guía de configuración inalámbrica de Reachy Mini</a>
              <a href="/es/reachymini_platforms_reachy_mini_usage/">Uso de Reachy Mini</a>
              <a href="/es/reachymini_platforms_reachy_mini_hardware/">Hoja de datos de hardware de Reachy Mini</a>
              <a href="/es/reachymini_platforms_reachy_mini_lite_get_started/">Guía de configuración de Reachy Mini Lite</a>
              <a href="/es/reachymini_platforms_reachy_mini_lite_usage/">Uso de Reachy Mini Lite</a>
              <a href="/es/reachymini_platforms_reachy_mini_lite_hardware/">Hoja de datos de hardware de Reachy Mini Lite</a>
            </div>
            <div className="mini-track">
              <h4>③ SDK y fundamentos de desarrollo</h4>
              <a href="/es/reachymini_sdk_readme/">SDK de Reachy Mini</a>
              <a href="/es/reachymini_sdk_installation/">Guía de instalación</a>
              <a href="/es/reachymini_sdk_quickstart/">Guía de inicio rápido</a>
              <a href="/es/reachymini_sdk_python-sdk/">Referencia del SDK de Python</a>
              <a href="/es/reachymini_sdk_core-concept/">Conceptos básicos y arquitectura</a>
              <a href="/es/reachymini_sdk_media-architecture/">Arquitectura de medios</a>
              <a href="/es/reachymini_sdk_gstreamer-installation/">Instalación de GStreamer</a>
              <a href="/es/reachymini_sdk_javascript-sdk/">SDK de JavaScript y aplicaciones web</a>
            </div>
            <div className="mini-track">
              <h4>④ Aplicaciones e integración de IA</h4>
              <a href="/es/reachymini_sdk_integration/">Integración y aplicaciones</a>
              <a href="/es/reachymini_sdk_apps/">Crear y publicar aplicaciones</a>
              <a href="/es/reachymini_conversation/">Integrar la API de Doubao LLM</a>
              <a href="/es/reachymini_vibe-code-with-your-agent/">Vibe Coding con un agente</a>
              <a href="/es/reachymini_agents/">Guía de desarrollo para agentes de IA</a>
            </div>
            <div className="mini-track">
              <h4>⑤ Medios, sistema y operaciones avanzadas</h4>
              <a href="/es/reachymini_platforms_reachy_mini_media_advanced_controls/">Controles avanzados de medios inalámbricos</a>
              <a href="/es/reachymini_platforms_reachy_mini_lite_media_advanced_controls/">Controles avanzados de medios Lite</a>
              <a href="/es/reachymini_platforms_reachy_mini_lite_wizard/">Usar Dynamixel Wizard para leer parámetros del motor</a>
              <a href="/es/reachymini_platforms_reachy_mini_development_workflow/">Flujo de trabajo de desarrollo inalámbrico</a>
              <a href="/es/reachymini_platforms_reachy_mini_install_daemon_from_branch/">Instalar el daemon desde una rama específica</a>
              <a href="/es/reachymini_platforms_reachy_mini_reflash_the_rpi_iso/">Reflashear la imagen del sistema operativo Raspberry Pi</a>
              <a href="/es/reachymini_platforms_reachy_mini_reset/">Restablecer vía Bluetooth</a>
            </div>
            <div className="mini-track">
              <h4>⑥ Tutoriales de ejemplo</h4>
              <a href="/es/reachymini_examples_minimal_demo/">Demostración mínima</a>
              <a href="/es/reachymini_examples_goto_interpolation_playground/">Zona de pruebas de interpolación Goto</a>
              <a href="/es/reachymini_examples_look_at/">Mirar una imagen</a>
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
              <a href="/es/reachymini_examples_take_picture/">Tomar una foto</a>
            </div>
            <div className="mini-track">
              <h4>⑦ Solución de problemas y mantenimiento</h4>
              <a href="/es/reachymini_troubleshooting/">Solución de problemas y FAQ</a>
              <a href="/es/reachymini_troubleshooting_motors_diagnosis/">Diagnóstico y solución de problemas del motor</a>
              <a href="/es/reachymini_troubleshooting_change_mic_fpc_cable/">Sustituir el cable FPC del micrófono</a>
              <a href="/es/reachymini_troubleshooting_spherical_joints_maintenance/">Mantenimiento de las articulaciones esféricas</a>
              <a href="/es/reachymini_troubleshooting_roadmap/">Hoja de ruta de Reachy Mini</a>
            </div>
            <div className="mini-track">
              <h4>⑧ Referencia de API</h4>
              <a href="/es/reachymini_api_reachymini/">Referencia de la API de ReachyMini</a>
              <a href="/es/reachymini_api_rest-api/">Referencia de la API REST</a>
              <a href="/es/reachymini_api_daemon/">API de daemon</a>
              <a href="/es/reachymini_api_motion/">API de movimiento</a>
              <a href="/es/reachymini_api_media/">API de medios</a>
              <a href="/es/reachymini_api_apps/">Referencia de la API de aplicaciones</a>
              <a href="/es/reachymini_api_tools/">Referencia de la API de herramientas</a>
              <a href="/es/reachymini_api_utils/">Referencia de la API de utilidades</a>
            </div>
          </div>
  </div>
</article>


<article id="lekiwi" className="product-card lekiwi product-card--cover">
  <div className="product-head">
    <h3>Chasis móvil Lekiwi</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/es/lerobot_lekiwi/"><span className="step-index">1</span><div><b>Guía rápida del chasis móvil Lekiwi</b><small>Ensambla, conecta, prueba el movimiento y comprueba la seguridad.</small></div><em>Requerido para principiantes</em></a>
    <a className="step-card" href="/es/sound_follow_robot/"><span className="step-index">2</span><div><b>Demostración de seguimiento de sonido</b><small>Usa la entrada de sonido para ejecutar una demostración móvil interactiva.</small></div><em>Demostración de aplicación</em></a>
  </div>
  </div>
</article>


<article id="stackforce" className="product-card stackforce product-card--cover">
  <div className="product-head">
    <h3>Robot Mini StackForce con ruedas y patas</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/es/StackForce_Mini_Wheeled_Legged_Robot/"><span className="step-index">1</span><div><b>Guía rápida de StackForce Mini</b><small>Conoce el hardware, despliega lo básico y prueba el movimiento.</small></div><em>Curso de sistema</em></a>
  </div>
  </div>
</article>


<article id="starai" className="product-card starai">
  <div className="product-head">
    <h3>Brazo robótico StarAI</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/es/lerobot_starai_arm/"><span className="step-index">1</span><div><b>Guía rápida del brazo robótico StarAI</b><small>Conecta el hardware, ejecuta el control básico y prueba ejemplos.</small></div><em>Requerido para principiantes</em></a>
    <a className="step-card" href="/es/starai_arm_ros_moveit/"><span className="step-index">2</span><div><b>Planificación de movimiento con MoveIt 2</b><small>Importa modelos y planifica trayectorias con MoveIt 2.</small></div><em>ROS2 avanzado</em></a>
    <a className="step-card" href="/es/control_robotic_arm_via_gr00t/"><span className="step-index">3</span><div><b>StarAI y NVIDIA GR00T</b><small>Construye control de brazo robótico con LLM / VLA.</small></div><em>Control de IA</em></a>
  </div>
  </div>
</article>


<article id="atom" className="product-card atom">
  <div className="product-head">
    <h3>Robot humanoide compacto Atom</h3>
  </div>
  <div className="product-body">
    <div className="learning-steps">
    <a className="step-card" href="/es/atom_s/"><span className="step-index">1</span><div><b>Guía de inicio de Atom-S</b><small>Enciende, conecta el controlador remoto web y graba tu primera secuencia de movimiento de enseñanza continua.</small></div><em>Requerido para principiantes</em></a>
    <a className="step-card" href="/es/atom_x/"><span className="step-index">2</span><div><b>Guía de inicio de Atom-X</b><small>Atom-X funciona exactamente igual que Atom-S: sigue el mismo flujo de trabajo para comenzar rápidamente.</small></div><em>Misma serie</em></a>
  </div>
  </div>
</article>


    </div>
  </section>

  <section id="rebot-hardware-inventory" className="section-block compact-section">
    <div className="section-title-row">
      <div>
        <span className="section-kicker">Referencia</span>
        <h2>Recursos de código abierto de rebot</h2>
      </div>
      <p>Comienza con el B601-RS y el B601-DM. Cada directorio de hardware contiene piezas impresas en 3D, piezas metálicas mecanizadas por CNC, piezas compradas, la lista de materiales (BOM), pasos de montaje de la fuente de alimentación y el ensamblaje completo en STEP. Los paquetes de descripción proporcionan modelos URDF / Mesh para simulación. Los soportes de cámara son compartidos por ambos brazos.</p>
    </div>
    <div className="resource-columns">
      <div>
        <h4>B601-RS</h4>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_RS" target="_blank" rel="noopener noreferrer">Colección de hardware</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/RS" target="_blank" rel="noopener noreferrer">Paquete de descripción del brazo robótico</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_RS" target="_blank" rel="noopener noreferrer">Gemelo digital / simulador web</a>
      </div>
      <div>
        <h4>B601-DM</h4>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM" target="_blank" rel="noopener noreferrer">Colección de hardware</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/Rebot_Arm_description/DM" target="_blank" rel="noopener noreferrer">Paquete de descripción del brazo robótico</a>
        <a href="https://github.com/Yang-Ci/ReBot_Arm_DigitalTwin_DM" target="_blank" rel="noopener noreferrer">Gemelo digital / simulador web</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM/performance_testing" target="_blank" rel="noopener noreferrer">Pruebas de rendimiento en máquina real</a>
      </div>
      <div>
        <h4>Soportes de cámara (B601-RS / B601-DM)</h4>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_DM/3D_Printed_Parts/D435_Gemini2_Mount.step" target="_blank" rel="noopener noreferrer">Soporte para cámara Orbbec Gemini 2</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_DM/3D_Printed_Parts/D405_305_Mount.step" target="_blank" rel="noopener noreferrer">Soporte para cámara Intel D405 / Gemini 305</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_DM/3D_Printed_Parts/D455f_Mount.step" target="_blank" rel="noopener noreferrer">Soporte para cámara Intel RealSense D455f</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_DM/3D_Printed_Parts/UVC32_mount.step" target="_blank" rel="noopener noreferrer">Soporte para cámara UVC 32×32</a>
        <a href="https://github.com/xiehuangbao888/Camera-Mount" target="_blank" rel="noopener noreferrer">Colección de soportes de cámara cenital globales</a>
      </div>
      <div>
        <h4>Recursos compartidos</h4>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank" rel="noopener noreferrer">Repositorio principal de reBot-DevArm</a>
        <a href="https://github.com/Seeed-Projects/reBotArm_control_py" target="_blank" rel="noopener noreferrer">SDK de Python</a>
        <a href="https://github.com/Seeed-Projects/reBotArmController_ROS2" target="_blank" rel="noopener noreferrer">Controlador ROS2</a>
        <a href="https://github.com/Seeed-Projects/lerobot-robot-seeed-b601" target="_blank" rel="noopener noreferrer">Adaptador de robot LeRobot</a>
        <a href="https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102" target="_blank" rel="noopener noreferrer">Adaptador de teleoperador LeRobot</a>
        <a href="https://github.com/Seeed-Projects/reBot-Isaacsim" target="_blank" rel="noopener noreferrer">Isaac Sim</a>
        <a href="https://github.com/yuyoujiang/rebot-arm-dli-isaacsim/blob/main/assets/workspace/box.usdz" target="_blank" rel="noopener noreferrer">Recurso de entorno de recopilación de datos</a>
        <a href="https://github.com/Seeed-Projects/reBot-DevArm-Grasp" target="_blank" rel="noopener noreferrer">Demostración de agarre visual</a>
      </div>
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
        <h2>Sensores</h2>
      </div>
      <p>Para agarre visual, SLAM, interacción por voz y percepción del estado del robot.</p>
    </div>
    <div className="resource-columns">
      <div><h4>LiDAR</h4><a href="/es/robosense_lidar/">RoboSense</a><a href="/es/mid360/">Livox MID360</a><a href="/es/a_loam/">Algoritmo A-LOAM</a><a href="/es/slamtec/">Slamtec Serie</a></div>
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
      <p>Después de la configuración, continúa con ROS, Isaac, PX4 o VLA.</p>
    </div>
    <div className="resource-columns">
      <div><h4>Ecosistema ROS</h4><a href="/es/installing_ros1/">Instalación de ROS 1</a><a href="/es/install_ros2_humble/">Instalación de ROS 2</a><a href="/es/install_isaacros/">Instalación de Isaac ROS</a><a href="/es/isaac_ros_apriltag/">Isaac ROS AprilTag</a><a href="/es/isaac_ros_visual_slam/">Isaac ROS V-SLAM</a></div>
      <div><h4>NVIDIA Isaac</h4><a href="/es/install_isaaclab/">Instalación de Isaac Lab</a><a href="/es/training_soarm101_policy_with_isaacLab/">Aprendizaje por refuerzo del brazo SO</a><a href="/es/simulate_soarm101_by_leisaac/">Brazo robótico SO100 con IsaacSim</a></div>
      <div><h4>PX4 / VLA</h4><a href="/es/control_px4_with_recomputer_jetson/">PX4 y Jetson</a><a href="/es/object_tracking_with_reComputer_jetson_and_pX4/">Seguimiento de objetos con PX4</a><a href="/es/control_robotic_arm_via_gr00t/">StarAI y NVIDIA GR00T</a></div>
    </div>
  </section>

</div>
