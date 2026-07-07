---
description: Este tutorial muestra cómo configurar el espacio de trabajo de control ROS2 para el reBot Arm B601-DM, incluyendo control del brazo, visualización en RViz e integración con MoveIt 2.
title: Integración ROS2 de reBot Arm B601-DM
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
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_ros2_integration/
---

# Integración ROS2 de reBot Arm B601-DM

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Wiki de robótica de Seeed Studio</span>
    <h2>Construye un espacio de trabajo de control ROS2 para B601-DM con RViz y MoveIt 2</h2>
    <p>
      Esta guía encapsula el SDK de bajo nivel reBotArm_control_py en tópicos,
      servicios y acciones de ROS2. Cubre la puesta en marcha del hardware, nodos de control, visualización en RViz,
      planificación con MoveIt 2 y ejecución en el brazo real para el B601-DM.
    </p>
    <div className="hero-actions">
      <a href="#workflow">Ver flujo de trabajo</a>
      <a href="#install">Instalar espacio de trabajo</a>
      <a href="#moveit">MoveIt 2</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM ROS2 Integration" />
    <strong>B601-DM · ROS2 / RViz / MoveIt 2</strong>
    <span>Primero valida la comunicación, después simula el movimiento y solo entonces ejecuta en el hardware real.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Advertencia de seguridad: despeja el espacio de trabajo del robot antes de ejecutar</strong>
    <p>
      Antes de ejecutar cualquier programa que mueva el brazo robótico, retira todos los objetos de valor,
      objetos frágiles, herramientas, cables y objetos no relacionados dentro de un
      <strong> radio de 1 metro </strong>
      del espacio de trabajo del robot. Durante la depuración y la operación, el personal debe mantenerse alejado
      del rango de movimiento del robot.
    </p>
    <ul>
      <li>No toques las articulaciones, motores, eslabones, la garra ni el efector final después de encender el brazo robótico.</li>
      <li>Antes de ejecutar acciones ROS2, ejecución de MoveIt, compensación de gravedad, control IK, control de trayectoria, teleoperación o demostraciones de agarre, asegúrate de que la base del brazo esté firmemente fijada.</li>
      <li>Si se produce un movimiento anómalo, ruido, vibración, cables sueltos, mal contacto de alimentación o pérdida de comunicación, detén el programa inmediatamente y apaga el sistema antes de la inspección.</li>
      <li>Apaga siempre el sistema antes de conectar o desconectar cables de motor, cables CAN, adaptadores USB2CAN, conectores XT30 o conectores de alimentación.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="quick navigation">
  <a href="#workflow">Flujo de trabajo</a>
  <a href="#overview">Descripción general</a>
  <a href="#install">Instalar</a>
  <a href="#bringup">Puesta en marcha</a>
  <a href="#api">APIs</a>
  <a href="#examples">Ejemplos</a>
  <a href="#moveit">MoveIt 2</a>
  <a href="#faq">Preguntas frecuentes</a>
</nav>

<section id="workflow" className="section-card">
  <div className="section-title">
    <span>Comienza aquí</span>
    <h2>Flujo de trabajo ROS2 recomendado</h2>
    <p>
      Esta página ahora está organizada como un módulo de curso paso a paso. Sigue las tarjetas en orden:
      primero verifica el hardware, luego construye el espacio de trabajo ROS2, después valida la comunicación
      y finalmente pasa a la planificación con MoveIt 2 y la ejecución en hardware real.
    </p>
  </div>

  <div className="step-card-grid">
    <a className="step-card recommended" href="/es/rebot_b601_dm_getting_started/">
      <span className="step-mini">Paso 0</span>
      <strong>Completa la guía rápida de B601-DM</strong>
      <p>Realiza las comprobaciones de alimentación, cableado, verificación de ID de motor, calibración de la posición cero y validación de MotorBridge antes de usar ROS2.</p>
      <em>Requerido primero</em>
    </a>
    <a className="step-card" href="#install">
      <span className="step-mini">Paso 1</span>
      <strong>Instala ROS2 y dependencias</strong>
      <p>Usa ROS2 Jazzy en Ubuntu 24.04 o ROS2 Humble en Ubuntu 22.04, luego instala colcon, RViz, Pinocchio y los mensajes de control.</p>
      <em>Entorno</em>
    </a>
    <a className="step-card" href="#install">
      <span className="step-mini">Paso 2</span>
      <strong>Construye el espacio de trabajo del controlador</strong>
      <p>Clona el controlador ROS2, instala MotorBridge, añade el SDK de bajo nivel y construye el espacio de trabajo con colcon.</p>
      <em>Compilación</em>
    </a>
    <a className="step-card" href="#bringup">
      <span className="step-mini">Paso 3</span>
      <strong>Inicia el driver de forma segura</strong>
      <p>Inicia primero el nodo de control sin RViz, confirma el canal serie y verifica la retroalimentación del estado de las articulaciones.</p>
      <em>Driver</em>
    </a>
    <a className="step-card" href="#api">
      <span className="step-mini">Paso 4</span>
      <strong>Valida tópicos, servicios y acciones</strong>
      <p>Comienza con tópicos de solo lectura y servicios seguros, luego prueba acciones controladas de articulaciones y de pose con duraciones largas.</p>
      <em>APIs ROS</em>
    </a>
    <a className="step-card" href="#moveit">
      <span className="step-mini">Paso 5</span>
      <strong>Usa MoveIt 2 con cuidado</strong>
      <p>Planifica primero en simulación, inspecciona la trayectoria en RViz y ejecuta en hardware real solo después de que la ruta sea segura.</p>
      <em>Planificación</em>
    </a>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Descripción general</span>
    <h2>Lo que proporciona esta integración ROS2</h2>
    <p>
      El espacio de trabajo ROS2 del B601-DM expone el brazo robótico mediante interfaces
      estándar de ROS2, lo que facilita conectar el brazo con percepción, planificación,
      visualización y aplicaciones de robótica de nivel superior.
    </p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card">
      <b>Interfaces ROS2 estándar</b>
      <span>Publica estados de articulaciones y estado del brazo, y expone servicios y acciones para habilitar, deshabilitar, hacer homing, controlar la garra, movimiento por pose y ejecución de trayectorias de articulaciones.</span>
    </div>
    <div className="module-summary-card">
      <b>Visualización en RViz</b>
      <span>Visualiza el modelo del robot, los estados de las articulaciones y los marcos de planificación para que los usuarios puedan depurar el estado del robot antes de ejecutar movimiento real.</span>
    </div>
    <div className="module-summary-card">
      <b>Planificación con MoveIt 2</b>
      <span>Proporciona configuración de MoveIt 2 y paquetes de demostración para planificación simulada, ejecución en hardware, demostraciones de dibujo de cuadrados y demostraciones de pick-and-place.</span>
    </div>
    <div className="module-summary-card">
      <b>Puente hacia hardware real</b>
      <span>Conecta los comandos ROS2 con el SDK reBotArm_control_py y el control de motor de bajo nivel basado en MotorBridge.</span>
    </div>
  </div>

  <div className="spec-card-grid">
    <div className="spec-card"><span>Brazo robótico</span><strong>reBot Arm B601-DM</strong></div>
    <div className="spec-card"><span>GDL</span><strong>6 GDL + garra</strong></div>
    <div className="spec-card"><span>Versión del motor</span><strong>Versión de motor Damiao</strong></div>
    <div className="spec-card"><span>Comunicación</span><strong>Puente serie USB2CAN</strong></div>
    <div className="spec-card"><span>Puerto predeterminado</span><strong>/dev/ttyACM0</strong></div>
    <div className="spec-card"><span>Alimentación</span><strong>24V CC</strong></div>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>Lista de materiales, cableado y lista de verificación del entorno</h2>
    <p>
      Prepara el brazo robótico, la fuente de alimentación, el puente serie USB2CAN y el host Ubuntu
      antes de construir el espacio de trabajo ROS2.
    </p>
  </div>

  <div className="two-col">
    <div className="info-card">
      <h3>Lista de materiales</h3>
      <ul>
        <li>Brazo robótico reBot Arm B601-DM × 1</li>
        <li>Garra × 1</li>
        <li>Puente serie USB2CAN × 1</li>
        <li>Adaptador de alimentación de 24V × 1</li>
        <li>Cable USB-C / comunicación × 1</li>
        <li>PC host con Ubuntu × 1</li>
      </ul>
    </div>
    <div className="info-card">
      <h3>Requisitos del entorno</h3>
      <ul>
        <li>Ubuntu 24.04 con ROS2 Jazzy, o Ubuntu 22.04 con ROS2 Humble</li>
        <li>Python del sistema que coincida con la distribución ROS2</li>
        <li>Herramientas de compilación colcon</li>
        <li>Paquete Python MotorBridge</li>
        <li>SDK de bajo nivel reBotArm_control_py</li>
      </ul>
    </div>
  </div>

  <div className="callout warning">
    <strong>Antes de encender:</strong> Confirma que el B601-DM usa la fuente de alimentación de 24V correcta, que el adaptador USB2CAN está conectado correctamente y que el brazo ha completado la verificación de posición cero y de conectividad básica.
  </div>

  <div className="command-card">
    <h3>Comprueba el dispositivo serie</h3>
    <pre><code>{`ls /dev/ttyACM*`}</code></pre>
  </div>

  <div className="command-card">
    <h3>Concede permiso serie temporal</h3>
    <pre><code>{`sudo chmod 666 /dev/ttyACM0`}</code></pre>
  </div>

  <div className="command-card">
    <h3>Permiso persistente recomendado</h3>
    <pre><code>{`sudo usermod -a -G dialout $USER

# Log out and log back in for the group change to take effect.`}</code></pre>
  </div>
</section>

<section id="install" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Paso 1</span>
    <div>
      <h2>Instala ROS2 y construye el espacio de trabajo</h2>
      <p>
        Instala la distribución ROS2 que coincida con tu versión de Ubuntu y luego construye
        el espacio de trabajo del controlador ROS2 del B601-DM.
      </p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card">
      <span className="step-mini">1.1</span>
      <strong>Instala ROS2</strong>
      <p>Usa Jazzy para Ubuntu 24.04 y Humble para Ubuntu 22.04.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">1.2</span>
      <strong>Instala dependencias</strong>
      <p>Instala colcon, mensajes de control, mensajes de trayectoria, RViz, robot_state_publisher y Pinocchio.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">1.3</span>
      <strong>Clona el repositorio del controlador</strong>
      <p>Usa el repositorio Seeed-Projects por defecto, o el repositorio de desarrollo si así se indica.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">1.4</span>
      <strong>Instalar MotorBridge</strong>
      <p>Instala MotorBridge en el mismo entorno de Python utilizado por los nodos de ROS2.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">1.5</span>
      <strong>Añadir SDK de bajo nivel</strong>
      <p>Clona reBotArm_control_py en third_party para que el controlador de ROS2 pueda llamar al SDK del brazo.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">1.6</span>
      <strong>Compilar y hacer source</strong>
      <p>Compila con colcon y ejecuta source install/setup.bash antes de ejecutar cualquier comando de ROS2.</p>
    </div>
  </div>

  <details className="content-details" open>
    <summary>Paso 1.1 Instalar ROS2 para tu versión de Ubuntu</summary>
    <div className="link-grid">
      <a href="https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html" target="_blank">Instalación de ROS2 Jazzy en Ubuntu</a>
      <a href="https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html" target="_blank">Instalación de ROS2 Humble en Ubuntu</a>
    </div>
    <div className="tip-card">
      <strong>Regla de versión</strong>
      <span>Usa ROS2 Jazzy en Ubuntu 24.04. Usa ROS2 Humble en Ubuntu 22.04.</span>
    </div>
  </details>

  <details className="content-details" open>
    <summary>Paso 1.2 Instalar herramientas de compilación y dependencias de ROS</summary>
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
    <p>Si usas ROS2 Humble, reemplaza <code>{`ros-jazzy-*`}</code> por <code>{`ros-humble-*`}</code> y ejecuta source de <code>{`/opt/ros/humble/setup.bash`}</code>.</p>
  </details>

  <details className="content-details" open>
    <summary>Paso 1.3 Clonar el repositorio del controlador ROS2</summary>
    <pre><code>{`git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
    <p>También puedes usar el repositorio de desarrollo cuando pruebes nuevas funciones:</p>
    <pre><code>{`git clone https://github.com/EclipseaHime017/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Paso 1.4 Instalar MotorBridge</summary>
    <pre><code>{`python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Paso 1.5 Añadir el SDK de bajo nivel</summary>
    <pre><code>{`mkdir -p third_party
git clone https://github.com/vectorBH6/reBotArm_control_py.git third_party/reBotArm_control_py`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Paso 1.6 Compilar el espacio de trabajo</summary>
    <pre><code>{`source /opt/ros/jazzy/setup.bash
colcon build --symlink-install
source install/setup.bash

ros2 pkg executables rebotarmcontroller`}</code></pre>
    <p>Las entradas ejecutables esperadas incluyen:</p>
    <pre><code>{`rebotarmcontroller reBotArmController
rebotarmcontroller GravityCompensation
rebotarmcontroller GripperControl
rebotarmcontroller MoveTo
rebotarmcontroller MoveToPose`}</code></pre>
  </details>
</section>

<section id="bringup" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>Iniciar el controlador del robot</h2>
      <p>Comienza con el controlador de hardware mínimo. Añade RViz solo después de que la comunicación sea estable.</p>
    </div>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Comprobación de seguridad antes del inicio</strong>
      <p>Retira todos los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong>. Asegúrate de que la base B601-DM esté firmemente fijada antes de habilitar el controlador.</p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card">
      <span className="step-mini">2.1</span>
      <strong>Hacer source del espacio de trabajo</strong>
      <p>Cada nueva terminal debe entrar en el espacio de trabajo y hacer source del archivo de instalación.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">2.2</span>
      <strong>Iniciar solo el driver</strong>
      <p>Usa primero el lanzamiento del driver para aislar la comunicación de hardware de la visualización.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">2.3</span>
      <strong>Iniciar el bringup completo</strong>
      <p>Lanza el controlador, robot_state_publisher y opcionalmente RViz después de que el driver sea estable.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">2.4</span>
      <strong>Verificar los estados de las articulaciones</strong>
      <p>Lee /rebotarm/joint_states una vez antes de enviar cualquier comando de movimiento.</p>
    </div>
  </div>

  <div className="command-card">
    <h3>Hacer source del espacio de trabajo</h3>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash`}</code></pre>
  </div>

  <div className="command-card">
    <h3>Iniciar solo el nodo de control</h3>
    <pre><code>{`ros2 launch rebotarm_bringup driver.launch.py channel:=/dev/ttyACM0`}</code></pre>
  </div>

  <div className="command-card">
    <h3>Iniciar el sistema completo sin RViz</h3>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0`}</code></pre>
  </div>

  <div className="command-card">
    <h3>Iniciar con visualización en RViz</h3>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM0 use_rviz:=true`}</code></pre>
  </div>

  <details className="content-details">
    <summary>Consejos para ver en RViz</summary>
    <ul>
      <li>Configura <code>{`Fixed Frame`}</code> en <code>{`base_link`}</code>.</li>
      <li>Configura <code>{`Target Frame`}</code> en <code>{`base_link`}</code>.</li>
      <li>Ajusta <code>{`Distance`}</code> a alrededor de <code>{`1.0`}</code> o <code>{`1.5`}</code> si el modelo parece demasiado pequeño.</li>
      <li>Usa la rueda del ratón para hacer zoom e inspeccionar el movimiento de las articulaciones.</li>
    </ul>
  </details>

  <details className="content-details">
    <summary>Configuración de namespace</summary>
    <p>El namespace predeterminado es <code>{`/rebotarm`}</code>. Para múltiples brazos, cambia el namespace en el momento del lanzamiento:</p>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py arm_namespace:=left_arm`}</code></pre>
  </details>
</section>

<section id="api" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>Validar las API de ROS2</h2>
      <p>Comienza con tópicos de solo lectura y servicios seguros, luego prueba las acciones de movimiento.</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card">
      <b>Tópicos de estado</b>
      <span>Úsalos primero. Son de solo lectura y ayudan a confirmar que el controlador está activo y publicando el estado.</span>
    </div>
    <div className="module-summary-card">
      <b>Servicios</b>
      <span>Usa servicios para habilitar, deshabilitar, posición segura de inicio, ajuste de cero, cambio de modo, ajuste del gripper y activación / parada de la compensación de gravedad.</span>
    </div>
    <div className="module-summary-card">
      <b>Acciones</b>
      <span>Usa acciones para movimiento por pose, seguimiento de trayectorias articulares y comandos del gripper. Las acciones pueden mover el robot, así que pruébalas con cuidado.</span>
    </div>
  </div>

  <details className="content-details" open>
    <summary>Tópicos de estado</summary>
    <div className="table-wrap">
      <table>
        <thead><tr><th>API</th><th>Tipo</th><th>Descripción</th></tr></thead>
        <tbody>
          <tr><td><code>{`/rebotarm/joint_states`}</code></td><td><code>{`sensor_msgs/msg/JointState`}</code></td><td>Posiciones, velocidades y esfuerzos de las articulaciones de 6 ejes</td></tr>
          <tr><td><code>{`/rebotarm/arm_status`}</code></td><td><code>{`rebotarm_msgs/msg/ArmStatus`}</code></td><td>Modo de control, estado habilitado, máquina de estados y códigos de error</td></tr>
          <tr><td><code>{`/rebotarm/joints/&lt;joint&gt;/state`}</code></td><td><code>{`rebotarm_msgs/msg/JointMotorState`}</code></td><td>Estado del motor de una sola articulación</td></tr>
          <tr><td><code>{`/rebotarm/gripper/state`}</code></td><td><code>{`rebotarm_msgs/msg/JointMotorState`}</code></td><td>Estado del motor del gripper</td></tr>
        </tbody>
      </table>
    </div>
    <pre><code>{`ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Servicios comunes</summary>
    <div className="table-wrap">
      <table>
        <thead><tr><th>API</th><th>Tipo</th><th>Descripción</th></tr></thead>
        <tbody>
          <tr><td><code>{`/rebotarm/enable`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>Habilitar el brazo robótico</td></tr>
          <tr><td><code>{`/rebotarm/disable`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>Deshabilitar el brazo robótico</td></tr>
          <tr><td><code>{`/rebotarm/safe_home`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>Volver a la posición segura de inicio</td></tr>
          <tr><td><code>{`/rebotarm/set_mode`}</code></td><td><code>{`rebotarm_msgs/srv/SetMode`}</code></td><td>Cambiar entre <code>{`mit`}</code>, <code>{`pos_vel`}</code> y <code>{`vel`}</code></td></tr>
          <tr><td><code>{`/rebotarm/set_zero`}</code></td><td><code>{`rebotarm_msgs/srv/SetZero`}</code></td><td>Establecer la posición cero para todas las articulaciones o una sola articulación</td></tr>
          <tr><td><code>{`/rebotarm/move_to_pose_ik`}</code></td><td><code>{`rebotarm_msgs/srv/MoveToPoseIK`}</code></td><td>Precomprobación de IK y solución de articulaciones objetivo</td></tr>
          <tr><td><code>{`/rebotarm/gripper/set`}</code></td><td><code>{`rebotarm_msgs/srv/SetGripper`}</code></td><td>Establecer la posición del motor del gripper en radianes</td></tr>
          <tr><td><code>{`/rebotarm/gravity_compensation/start`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>Iniciar la compensación de gravedad</td></tr>
          <tr><td><code>{`/rebotarm/gravity_compensation/stop`}</code></td><td><code>{`std_srvs/srv/Trigger`}</code></td><td>Detener la compensación de gravedad</td></tr>
        </tbody>
      </table>
    </div>
  </details>

  <details className="content-details">
    <summary>Acciones de movimiento</summary>
    <div className="table-wrap">
      <table>
        <thead><tr><th>API</th><th>Tipo</th><th>Descripción</th></tr></thead>
        <tbody>
          <tr><td><code>{`/rebotarm/move_to_pose`}</code></td><td><code>{`rebotarm_msgs/action/MoveToPose`}</code></td><td>Movimiento de la pose del efector final</td></tr>
          <tr><td><code>{`/rebotarm/follow_joint_trajectory`}</code></td><td><code>{`control_msgs/action/FollowJointTrajectory`}</code></td><td>Punto de entrada estándar compatible con trayectorias articulares</td></tr>
          <tr><td><code>{`/rebotarm/gripper/command`}</code></td><td><code>{`control_msgs/action/GripperCommand`}</code></td><td>Acción estándar del efector de agarre</td></tr>
        </tbody>
      </table>
    </div>
  </details>
</section>

<section id="examples" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Paso 4</span>
    <div>
      <h2>Ejecutar ejemplos de control básicos</h2>
      <p>Utiliza estos comandos después de que el controlador esté en ejecución y la retroalimentación del estado articular sea correcta.</p>
    </div>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Comprobación de seguridad antes del movimiento</strong>
      <p>Utiliza valores objetivo pequeños, duraciones largas y mantén despejado el espacio de trabajo. Prepárate para detener el controlador en cualquier momento.</p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card">
      <span className="step-mini">4.1</span>
      <strong>Habilitar el brazo</strong>
      <p>Habilita solo después de que el espacio de trabajo esté despejado y los estados articulares sean válidos.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">4.2</span>
      <strong>Mover a una pose</strong>
      <p>Utiliza primero una pose conservadora cercana a la pose actual.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">4.3</span>
      <strong>Enviar un objetivo articular</strong>
      <p>Utiliza valores en radianes pequeños y un `time_from_start` largo.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">4.4</span>
      <strong>Posición inicial segura y deshabilitar</strong>
      <p>Termina cada prueba volviendo a la posición inicial segura y deshabilitando el robot.</p>
    </div>
  </div>

  <details className="content-details" open>
    <summary>4.1 Habilitar el brazo robótico</summary>
    <pre><code>{`ros2 service call /rebotarm/enable std_srvs/srv/Trigger`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>4.2 Mover a una pose del efector final</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {x: 0.0, y: 0.0, z: 0.0, w: 1.0}}, duration: 2.0}"`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>4.3 Enviar un objetivo articular</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>4.4 Posición inicial segura y deshabilitar</summary>
    <pre><code>{`ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger`}</code></pre>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Ejemplos</span>
    <h2>Comandos de demostración</h2>
    <p>Estos ejemplos suponen que <code>{`reBotArmController`}</code> ya se está ejecutando.</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card">
      <b>Movimiento articular</b>
      <span>Envía objetivos en radianes a todas las articulaciones o a una articulación seleccionada.</span>
    </div>
    <div className="module-summary-card">
      <b>Pose del efector final</b>
      <span>Mueve el TCP a una pose cartesiana especificada usando el controlador de pose del SDK.</span>
    </div>
    <div className="module-summary-card">
      <b>Compensación de gravedad</b>
      <span>Inicia la compensación de gravedad a través del nodo de ROS2 y deténla de forma segura con llamadas a servicios.</span>
    </div>
    <div className="module-summary-card">
      <b>Efector de agarre interactivo</b>
      <span>Abre y cierra el efector de agarre mediante un bucle de interacción en la terminal.</span>
    </div>
  </div>

  <details className="content-details" open>
    <summary>Ejemplo de movimiento articular</summary>
    <pre><code>{`ros2 run rebotarmcontroller MoveTo -- \
  0.20 -0.20 -0.20 -0.20 0.10 -0.10 \
  --duration 8.0

ros2 run rebotarmcontroller MoveTo -- --joint joint3 --position -0.20 --duration 5.0`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Ejemplo de pose del efector final</summary>
    <pre><code>{`ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Ejemplo de compensación de gravedad</summary>
    <pre><code>{`ros2 run rebotarmcontroller GravityCompensation`}</code></pre>
    <p>Cuando pulses <code>{`Ctrl+C`}</code>, el script llama a estos servicios en orden:</p>
    <ol>
      <li><code>{`/rebotarm/gravity_compensation/stop`}</code></li>
      <li><code>{`/rebotarm/safe_home`}</code></li>
      <li><code>{`/rebotarm/disable`}</code></li>
    </ol>
  </details>

  <details className="content-details">
    <summary>Ejemplo de efector de agarre interactivo</summary>
    <pre><code>{`ros2 run rebotarmcontroller GripperControl

# o / open    Open the gripper
# c / close   Close the gripper
# q / quit    Quit`}</code></pre>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Configuración</span>
    <h2>Archivos de configuración y tópicos de bajo nivel</h2>
    <p>
      Los archivos de configuración predeterminados se encuentran en
      <code>{` src/rebotarm_bringup/config/`}</code>. Utiliza servicios y acciones a nivel de aplicación
      siempre que sea posible. Los tópicos de motor de bajo nivel están pensados para depuración.
    </p>
  </div>

  <div className="two-col">
    <div className="info-card">
      <h3>Archivos de configuración</h3>
      <ul>
        <li><code>{`arm.yaml`}</code>: ID del motor, ID de retroalimentación y parámetros de control para las 6 articulaciones del brazo</li>
        <li><code>{`gripper.yaml`}</code>: ID del motor del efector de agarre, ID de retroalimentación, proveedor y parámetros de control</li>
        <li><code>{`driver_params.yaml`}</code>: ejemplos de parámetros de ROS</li>
      </ul>
    </div>
    <div className="info-card">
      <h3>Parámetros de lanzamiento comunes</h3>
      <ul>
        <li><code>{`channel`}</code>: puerto serie como <code>{`/dev/ttyACM0`}</code></li>
        <li><code>{`joint_state_rate`}</code>: frecuencia de publicación de <code>{`/rebotarm/joint_states`}</code></li>
        <li><code>{`cmd_arbitration`}</code>: <code>{`reject`}</code> o <code>{`preempt`}</code></li>
        <li><code>{`arm_namespace`}</code>: prefijo del espacio de nombres, por defecto <code>{`rebotarm`}</code></li>
        <li><code>{`use_rviz`}</code>: si se debe iniciar RViz</li>
      </ul>
    </div>
  </div>

  <div className="callout danger">
    <strong>Los tópicos de bajo nivel son solo para depuración:</strong> No realizan cinemática inversa, planificación de trayectorias ni comprobaciones de límites de URDF. Para movimiento a nivel de aplicación, utiliza preferentemente <code>{`/move_to_pose`}</code>, <code>{`/follow_joint_trajectory`}</code> y <code>{`/gripper/set`}</code>.
  </div>
</section>

<section id="moveit" className="section-card">
  <div className="step-title-row">
    <span className="step-pill">Paso 5</span>
    <div>
      <h2>Usar MoveIt 2</h2>
      <p>
        MoveIt 2 proporciona cinemática inversa, comprobación de colisiones, planificación de trayectorias
        y ejecución de trayectorias. Comienza con la simulación antes de conectar el hardware real.
      </p>
    </div>
  </div>

  <div className="step-card-grid small">
    <div className="step-card">
      <span className="step-mini">5.1</span>
      <strong>Instalar paquetes de MoveIt</strong>
      <p>Instala los paquetes MoveIt, ros2_control, controladores y xacro para tu distribución de ROS.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">5.2</span>
      <strong>Compilar y verificar las demos</strong>
      <p>Vuelve a compilar el espacio de trabajo y confirma que los paquetes de MoveIt y los ejecutables de demostración están disponibles.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">5.3</span>
      <strong>Ejecutar primero la simulación</strong>
      <p>Utiliza el lanzamiento de demostración de MoveIt con hardware simulado e inspecciona el movimiento en RViz.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">5.4</span>
      <strong>Conectar el hardware real</strong>
      <p>Inicia el controlador de hardware y luego lanza el entorno de MoveIt para hardware solo después de verificar la trayectoria planificada.</p>
    </div>
    <div className="step-card">
      <span className="step-mini">5.5</span>
      <strong>Ejecutar demostraciones de aplicación</strong>
      <p>Prueba draw-square y pick-place después de comprobar todos los marcos, límites y parámetros del efector de agarre.</p>
    </div>
  </div>

  <details className="content-details" open>
    <summary>5.1 Instalar paquetes de MoveIt 2</summary>
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
    <summary>5.2 Volver a compilar y verificar los paquetes de MoveIt</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
colcon build --symlink-install
source install/setup.bash

ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos`}</code></pre>
    <p>Las entradas esperadas incluyen:</p>
    <pre><code>{`rebotarm_moveit_demos draw_square
rebotarm_moveit_demos pick_place`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>5.3 Usar MoveIt en simulación</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py

# Without RViz:
ros2 launch rebotarm_moveit_config demo.launch.py use_rviz:=false`}</code></pre>
  </details>

  <details className="content-details">
    <summary>5.4 Usar MoveIt con hardware real</summary>
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Comprobación de seguridad antes de la ejecución en hardware</strong>
        <p>Despeja el espacio de trabajo del robot, verifica la trayectoria planificada en RViz y prepárate para detener el controlador en cualquier momento.</p>
      </div>
    </div>
    <pre><code>{`ros2 launch rebotarm_bringup driver.launch.py channel:=/dev/ttyACM0

# In another terminal:
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py`}</code></pre>
  </details>

  <details className="content-details">
    <summary>5.5 Ejecutar la demo draw-square</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py`}</code></pre>
    <p><code>{`draw_square`}</code> mueve <code>{`gripper_tcp`}</code> a través de las cuatro esquinas de un rectángulo coplanar. Los parámetros predeterminados se almacenan en <code>{`src/rebotarm_moveit_demos/config/draw_square.yaml`}</code>.</p>
  </details>

  <details className="content-details">
    <summary>5.6 Ejecutar la demo pick-place</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py`}</code></pre>
    <p><code>{`pick_place`}</code> utiliza poses preparadas, dimensiones del objeto, orientación TCP de recogida / colocación y posiciones de apertura / cierre del gripper definidas en <code>{`src/rebotarm_moveit_demos/config/pick_place.yaml`}</code>.</p>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>Problemas comunes y soluciones</h2>
    <p>Utiliza esta sección cuando ROS2 no pueda abrir el dispositivo, RViz no muestre el modelo o MoveIt no logre ejecutar.</p>
  </div>

  <div className="faq-grid">
    <details className="content-details" open>
      <summary>1. Aparece <code>{`open serial port /dev/ttyACM0 failed`}</code> al inicio</summary>
      <p>El puerto serie predeterminado no existe o el nombre del dispositivo ha cambiado. Comprueba el dispositivo serie real y pásalo a <code>{`channel`}</code>.</p>
      <pre><code>{`ls /dev/ttyACM*
ros2 launch rebotarm_bringup bringup.launch.py channel:=/dev/ttyACM1`}</code></pre>
    </details>

    <details className="content-details">
      <summary>2. Aparece <code>{`Device or resource busy`}</code> al inicio</summary>
      <p>El puerto serie está ocupado por otro proceso, como un nodo ROS2 anterior, un ejemplo del SDK o un script de depuración.</p>
      <pre><code>{`ps aux | grep -E "reBotArmController|ros2|python"`}</code></pre>
    </details>

    <details className="content-details">
      <summary>3. Permiso denegado</summary>
      <p>Añade el usuario actual al grupo <code>{`dialout`}</code> o concede permiso temporalmente.</p>
      <pre><code>{`sudo usermod -a -G dialout $USER
sudo chmod 666 /dev/ttyACM0`}</code></pre>
    </details>

    <details className="content-details">
      <summary>4. El modelo del robot no se muestra en RViz</summary>
      <p>Comprueba si el workspace ha sido cargado con `source`, si <code>{`Fixed Frame`}</code> está configurado como <code>{`base_link`}</code> y si <code>{`robot_state_publisher`}</code> se inició correctamente.</p>
    </details>

    <details className="content-details">
      <summary>5. Aparece una advertencia de puerto FastDDS SHM</summary>
      <p>Esto suele deberse a archivos de bloqueo de memoria compartida de FastDDS que quedaron después de que un proceso ROS2 anterior terminara de forma anómala.</p>
      <pre><code>{`pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*

# Optional bypass:
export FASTDDS_BUILTIN_TRANSPORTS=UDPv4`}</code></pre>
    </details>

    <details className="content-details">
      <summary>6. No se puede encontrar <code>{`pinocchio`}</code></summary>
      <pre><code>{`sudo apt install -y ros-jazzy-pinocchio
source /opt/ros/jazzy/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"`}</code></pre>
    </details>
  </div>
</section>

<section className="course-path-section section-card">
  <div className="section-title">
    <span>Seguir aprendiendo</span>
    <h2>Ruta de aprendizaje de reBot B601-DM</h2>
    <p>
      Estos tutoriales siguen el mismo orden que la página de robótica: Getting Started →
      LeRobot → Pinocchio → Visual Grasping → ROS2. Utiliza los enlaces siguientes para saltar
      entre módulos.
    </p>
  </div>

  <div className="course-path-grid">
    <a className="course-path-item" href="/es/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy">
        <strong>Getting Started</strong>
        <span>Completa el unboxing, el cableado, las comprobaciones de alimentación, la configuración del controlador, la calibración y las pruebas básicas de movimiento.</span>
      </span>
      <span className="course-tag">Empieza aquí</span>
    </a>
    <a className="course-path-item" href="/es/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy">
        <strong>Teleoperación y recopilación de datos con LeRobot</strong>
        <span>Teleopera el brazo, conecta cámaras, registra conjuntos de datos, entrena políticas y evalúa el comportamiento del brazo real.</span>
      </span>
      <span className="course-tag">Recopilación de datos</span>
    </a>
    <a className="course-path-item" href="/es/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy">
        <strong>Visualización de cinemática con Pinocchio</strong>
        <span>Comprende los modelos de robot, los marcos de coordenadas, FK / IK, la planificación de trayectorias y la compensación de la gravedad.</span>
      </span>
      <span className="course-tag">Control</span>
    </a>
    <a className="course-path-item" href="/es/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy">
        <strong>Demo de agarre visual</strong>
        <span>Combina percepción RGB-D, YOLO / OBB o GraspNet, calibración mano-ojo y agarre de objetos reales.</span>
      </span>
      <span className="course-tag">Aplicación</span>
    </a>
    <a className="course-path-item active" href="/es/rebot_arm_b601_dm_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy">
        <strong>Integración con ROS2</strong>
        <span>Conecta el brazo a ROS2, RViz, MoveIt 2, servicios estándar, acciones y flujos de trabajo de planificación.</span>
      </span>
      <span className="course-tag">Artículo actual</span>
    </a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Referencias</span>
    <h2>Referencias</h2>
  </div>
  <div className="reference-grid">
    <a href="https://wiki.seeedstudio.com/es/rebot_b601_dm_getting_started/">reBot Arm B601-DM Getting Started</a>
    <a href="https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_lerobot/">Tutorial de reBot Arm B601-DM LeRobot</a>
    <a href="https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_pinocchio_meshcat/">reBot Arm B601-DM Pinocchio y MeshCat</a>
    <a href="https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_grasping_demo/">Demo de agarre visual de reBot Arm B601-DM</a>
    <a href="https://docs.ros.org/en/humble/">Documentación de ROS2 Humble</a>
    <a href="https://docs.ros.org/en/jazzy/">Documentación de ROS2 Jazzy</a>
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
