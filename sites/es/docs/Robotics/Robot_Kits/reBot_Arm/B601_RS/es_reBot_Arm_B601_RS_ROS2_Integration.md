---
description: Este tutorial muestra cómo configurar el espacio de trabajo de control ROS2 para el reBot Arm B601-RS, incluyendo la conexión SocketCAN, el control del brazo, la visualización en RViz y la integración con MoveIt 2.
title: Integración ROS2 de reBot Arm B601-RS
keywords:
  - reBot Arm
  - B601-RS
  - ROS2
  - Humble
  - Jazzy
  - SocketCAN
  - RViz
  - MoveIt 2
  - Robot Arm
  - Robotics
slug: /rebot_arm_b601_rs_ros2_integration
last_update:
  date: 2026-07-05
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-10'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_ros2_integration/
---

# Integración ROS2 de reBot Arm B601-RS

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Wiki de robótica de Seeed Studio</span>
    <h2>Construye un espacio de trabajo de control ROS2 para B601-RS con SocketCAN, RViz y MoveIt 2</h2>
    <p>Esta guía convierte la pila de control de bajo nivel del B601-RS en un flujo de trabajo ROS2. Pondrás en marcha SocketCAN, compilarás el espacio de trabajo ROS2, verificarás tópicos y servicios, ejecutarás ejemplos de control seguro y luego pasarás de la simulación en MoveIt 2 a la ejecución en hardware real.</p>
    <div className="hero-actions">
      <a href="#quick-start">Ver flujo de trabajo</a>
      <a href="#install">Instalar espacio de trabajo</a>
      <a href="#moveit">MoveIt 2</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/ros2/MoveIt2_RS.gif" alt="reBot Arm B601-RS ROS2 Integration" />
    <strong>B601-RS · ROS2 / MoveIt 2</strong>
    <span>Utiliza primero la simulación. Ejecuta en hardware real solo después de verificar CAN, estados de las articulaciones y trayectorias planificadas.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Advertencia de seguridad: despeja el espacio de trabajo del robot antes de ejecutar</strong>
    <p>Antes de ejecutar cualquier programa que mueva el brazo robótico, retira todos los objetos de valor, objetos frágiles, herramientas, cables y objetos no relacionados dentro de un <strong>radio de 1 metro</strong> del espacio de trabajo del robot. Durante la depuración y la operación, el personal debe mantenerse alejado del rango de movimiento del robot.</p>
    <ul>
      <li>No toques las articulaciones, motores, eslabones, la garra ni el efector final después de encender el brazo robótico.</li>
      <li>Antes de ejecutar acciones ROS2, ejecución de MoveIt, compensación de gravedad, control de trayectoria, teleoperación o demostraciones de agarre visual, asegúrate de que el brazo esté firmemente fijado.</li>
      <li>Si se produce un movimiento anormal, ruido, vibración, cables sueltos, mal contacto de alimentación o pérdida de comunicación, detén el programa inmediatamente y apaga el sistema antes de la inspección.</li>
      <li>Apaga siempre el sistema antes de conectar o desconectar cables de motor, cables CAN, adaptadores PCAN-USB, conectores XT30 o conectores de alimentación.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="quick navigation">
  <a href="#quick-start">Flujo de trabajo</a>
  <a href="#overview">Descripción general</a>
  <a href="#install">Instalar</a>
  <a href="#bringup">Puesta en marcha</a>
  <a href="#api">APIs</a>
  <a href="#examples">Ejemplos</a>
  <a href="#moveit">MoveIt 2</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="quick-start" className="section-card">
  <div className="section-title">
    <span>Comienza aquí</span>
    <h2>Flujo de trabajo recomendado de puesta en marcha ROS2</h2>
    <p>Sigue el orden siguiente para separar la comunicación de hardware, las interfaces ROS2 y la ejecución en MoveIt. Esto facilita el diagnóstico de fallos y reduce el riesgo de movimientos inseguros del robot.</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#install"><span>Paso 0</span><strong>Completa la guía rápida del B601-RS</strong><p>Confirma la alimentación de 48V, PCAN-USB / SocketCAN, posición cero, comprobaciones de MotorBridge y pruebas básicas de movimiento.</p><em>Obligatorio</em></a>
    <a className="path-card" href="#install"><span>Paso 1</span><strong>Instalar ROS2 y compilar</strong><p>Instala las dependencias de ROS2, clona el espacio de trabajo del controlador, instala MotorBridge y compila con colcon.</p><em>Espacio de trabajo</em></a>
    <a className="path-card" href="#bringup"><span>Paso 2</span><strong>Poner en marcha el driver</strong><p>Comienza con el driver de hardware y verifica la comunicación CAN y los estados de las articulaciones antes de añadir RViz o MoveIt.</p><em>Primero el driver</em></a>
    <a className="path-card" href="#api"><span>Paso 3</span><strong>Validar APIs de ROS2</strong><p>Comprueba tópicos, servicios y acciones. Comienza con estado de solo lectura y servicios seguros antes de acciones de movimiento.</p><em>Verificación</em></a>
    <a className="path-card" href="#examples"><span>Paso 4</span><strong>Ejecutar ejemplos de control</strong><p>Utiliza posiciones pequeñas, duraciones largas y comandos de retorno seguro a casa antes de probar trayectorias más grandes.</p><em>Movimiento seguro</em></a>
    <a className="path-card" href="#moveit"><span>Paso 5</span><strong>Usar MoveIt 2</strong><p>Planifica en simulación, inspecciona la trayectoria en RViz y solo entonces ejecuta en el brazo robótico real.</p><em>Avanzado</em></a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Pasos detallados</span>
    <h2>Ruta de puesta en marcha ROS2 paso a paso</h2>
    <p>Esta página está organizada como un flujo de trabajo de puesta en marcha progresivo. Cada paso añade una capa de complejidad.</p>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Step 0</span><strong>Preparar el robot</strong><p>Completa la guía rápida del B601-RS, incluyendo alimentación de 48V, cableado, posición cero, PCAN-USB y comprobaciones básicas de MotorBridge.</p></div>
    <div className="step-card"><span className="step-mini">Step 1</span><strong>Compilar el espacio de trabajo ROS2</strong><p>Instala paquetes ROS2, clona el espacio de trabajo, instala MotorBridge, añade el SDK de bajo nivel y compila con colcon.</p></div>
    <div className="step-card"><span className="step-mini">Step 2</span><strong>Iniciar el driver de hardware</strong><p>Pon en marcha <code>{`can0`}</code>, lanza el driver del B601-RS y verifica que se publiquen los estados de las articulaciones.</p></div>
    <div className="step-card"><span className="step-mini">Step 3</span><strong>Validar interfaces</strong><p>Confirma tópicos, servicios, acciones, espacio de nombres, comandos de la garra y comportamiento de retorno seguro a casa.</p></div>
    <div className="step-card"><span className="step-mini">Step 4</span><strong>Ejecutar ejemplos seguros</strong><p>Utiliza objetivos conservadores de articulaciones y poses con duraciones largas antes de probar demostraciones de aplicación.</p></div>
    <div className="step-card"><span className="step-mini">Step 5</span><strong>Planificación con MoveIt 2</strong><p>Ejecuta primero la simulación, luego conecta el hardware real y ejecuta solo después de comprobar la trayectoria planificada.</p></div>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Descripción general</span>
    <h2>Qué proporciona este espacio de trabajo ROS2</h2>
    <p>El espacio de trabajo envuelve la pila de control de bajo nivel del B601-RS en interfaces ROS2 estándar para que el brazo pueda utilizarse con RViz, MoveIt 2 y aplicaciones robóticas a nivel de tareas.</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Interfaces ROS2 estándar</b><span>Proporciona tópicos como <code>{`/rebotarm/joint_states`}</code> y acciones como <code>{`FollowJointTrajectory`}</code> y <code>{`MoveToPose`}</code>.</span></div>
    <div className="module-summary-card"><b>Compatibilidad con SocketCAN</b><span>El B601-RS se comunica mediante CAN. El canal predeterminado es <code>{`can0`}</code>, configurado a 1 Mbps.</span></div>
    <div className="module-summary-card"><b>Visualización en RViz</b><span>Utiliza el modelo URDF y los estados de las articulaciones para inspeccionar el estado del robot y depurar problemas de puesta en marcha.</span></div>
    <div className="module-summary-card"><b>Integración con MoveIt 2</b><span>Utiliza MoveIt 2 para IK, comprobación de colisiones, planificación de trayectorias, ejecución simulada y ejecución en hardware real.</span></div>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>Especificaciones y requisitos</h2>
    <p>Confirma los requisitos de hardware y software del B601-RS antes de compilar el espacio de trabajo ROS2.</p>
  </div>

  <div className="spec-grid">
    <div className="spec-card"><b>Brazo robótico</b><span>reBot Arm B601-RS</span></div>
    <div className="spec-card"><b>Grados de libertad</b><span>6-DOF + garra</span></div>
    <div className="spec-card"><b>Comunicación</b><span>CAN mediante SocketCAN</span></div>
    <div className="spec-card"><b>Canal CAN predeterminado</b><span><code>{`can0`}</code></span></div>
    <div className="spec-card"><b>Modo de control predeterminado</b><span><code>{`mit`}</code></span></div>
    <div className="spec-card"><b>Sistema recomendado</b><span>Ubuntu 24.04 + ROS2 Jazzy + Python 3.12</span></div>
    <div className="spec-card"><b>Sistema de referencia</b><span>Ubuntu 22.04 + ROS2 Humble + Python 3.10</span></div>
    <div className="spec-card"><b>Alimentación</b><span>Fuente de alimentación de 48V CC para B601-RS</span></div>
  </div>

  <details className="content-details" open>
    <summary>Lista de materiales</summary>

    | Componente | Cantidad | Incluido |
    |---|---|---|
    | Brazo robótico reBot Arm B601-RS | 1 | ✅ |
    | Garra | 1 | ✅ |
    | Adaptador CAN | 1 | ✅ |
    | Adaptador de alimentación | 1 | ✅ |
    | Cable de comunicación | 1 | ✅ |
    | PC host con Ubuntu | 1 | Preparado por el usuario |
  </details>

  <details className="content-details" open>
    <summary>Conexión de cables y comprobación CAN</summary>

    <div className="step-card-grid compact-grid">
      <div className="step-card"><span className="step-mini">1</span><strong>Conectar el adaptador CAN</strong><p>Conecta el adaptador CAN al bus CAN del brazo robótico.</p></div>
      <div className="step-card"><span className="step-mini">2</span><strong>Conectar la garra</strong><p>Conecta el motor de la garra al mismo bus CAN.</p></div>
      <div className="step-card"><span className="step-mini">3</span><strong>Alimentar el brazo</strong><p>Conecta la alimentación de 48V y conecta el adaptador CAN al PC host.</p></div>
      <div className="step-card"><span className="step-mini">4</span><strong>Poner en marcha CAN</strong><p>Confirma la interfaz CAN y establece la velocidad de transmisión en 1 Mbps.</p></div>
    </div>

    <pre><code>{`ip -br link

sudo modprobe peak_usb
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
ip -details link show can0`}</code></pre>
  </details>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>Instalar ROS2 y compilar el espacio de trabajo</h2>
      <p>Instala los paquetes de ROS2 que coincidan con tu versión de Ubuntu y luego clona, configura y compila el espacio de trabajo ROS2 de reBot.</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">1.0</span><strong>Completar la guía rápida de B601-RS</strong><p>Antes de la integración con ROS2, completa la configuración básica, la inicialización de la posición cero y las comprobaciones de PCAN-USB / SocketCAN.</p></div>
    <div className="step-card"><span className="step-mini">1.1</span><strong>Instalar ROS2</strong><p>Usa Jazzy en Ubuntu 24.04 o Humble en Ubuntu 22.04.</p></div>
    <div className="step-card"><span className="step-mini">1.2</span><strong>Instalar dependencias</strong><p>Instala colcon, Git, mensajes de control, mensajes de trayectoria, RViz, robot-state-publisher y Pinocchio.</p></div>
    <div className="step-card"><span className="step-mini">1.3</span><strong>Clonar el espacio de trabajo</strong><p>Usa por defecto el repositorio Seeed-Projects. Los repositorios de desarrollo se pueden usar cuando sea necesario.</p></div>
    <div className="step-card"><span className="step-mini">1.4</span><strong>Instalar MotorBridge</strong><p>Instala MotorBridge para que el nodo ROS2 pueda comunicarse con la interfaz de motor de bajo nivel.</p></div>
    <div className="step-card"><span className="step-mini">1.5</span><strong>Compilar con colcon</strong><p>Compila y carga el espacio de trabajo y luego verifica las entradas ejecutables.</p></div>
  </div>

  <details className="content-details" open>
    <summary>Paso 1.0: completar la guía rápida de B601-RS</summary>
    <p>Antes de comenzar la integración con ROS2, completa la <a href="https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/">guía rápida de reBot Arm B601-RS</a>, incluyendo el montaje, la configuración de ID de motor, la inicialización de la posición cero, las comprobaciones de alimentación y la configuración de PCAN-USB / SocketCAN.</p>
  </details>

  <details className="content-details" open>
    <summary>Paso 1.1: instalar ROS2 para tu sistema Ubuntu</summary>
    <p>Usa la versión de ROS2 que coincida con tu distribución de Ubuntu:</p>
    <ul>
      <li>Ubuntu 24.04: ROS2 Jazzy</li>
      <li>Ubuntu 22.04: ROS2 Humble</li>
    </ul>
    <p>Referencias: <a href="https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html">Instalación de ROS2 Jazzy</a>, <a href="https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debs.html">Instalación de ROS2 Humble</a> y <a href="https://wiki.seeedstudio.com/es/install_ros2_humble/">Instalación de Seeed ROS2 Humble</a>.</p>
  </details>

  <details className="content-details" open>
    <summary>Paso 1.2: instalar herramientas de compilación y dependencias de ROS</summary>
    <pre><code>{`sudo apt update
sudo apt install -y python3-colcon-common-extensions python3-pip git
sudo apt install -y \
  ros-\${ROS_DISTRO}-control-msgs \
  ros-\${ROS_DISTRO}-trajectory-msgs \
  ros-\${ROS_DISTRO}-tf-transformations \
  ros-\${ROS_DISTRO}-robot-state-publisher \
  ros-\${ROS_DISTRO}-rviz2 \
  ros-\${ROS_DISTRO}-pinocchio

source /opt/ros/\${ROS_DISTRO}/setup.bash
python3 -c "import pinocchio; print('pinocchio', pinocchio.__version__)"`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Paso 1.3: clonar el repositorio de código</summary>
    <p>Da preferencia al repositorio oficial Seeed-Projects:</p>
    <pre><code>{`git clone https://github.com/Seeed-Projects/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
    <p>También puedes usar el repositorio de desarrollo actual:</p>
    <pre><code>{`git clone https://github.com/EclipseaHime017/reBotArmController_ROS2.git rebotarm_ros2
cd rebotarm_ros2`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Paso 1.4: instalar MotorBridge</summary>
    <pre><code>{`python3 -m pip install --user --break-system-packages --index-url https://pypi.org/simple motorbridge

# On Ubuntu 22.04 / ROS2 Humble, you can usually use:
python3 -m pip install --user --index-url https://pypi.org/simple motorbridge`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Paso 1.5: añadir el SDK de bajo nivel y compilar</summary>
    <pre><code>{`mkdir -p third_party
git clone https://github.com/vectorBH6/reBotArm_control_py.git third_party/reBotArm_control_py

source /opt/ros/\${ROS_DISTRO}/setup.bash
colcon build --symlink-install
source install/setup.bash

ros2 pkg executables rebotarmcontroller`}</code></pre>
    <p>Las entradas esperadas incluyen <code>{`reBotArmController`}</code>, <code>{`GravityCompensation`}</code>, <code>{`GripperControl`}</code>, <code>{`MoveTo`}</code> y <code>{`MoveToPose`}</code>.</p>
  </details>
</section>

<section id="bringup" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Comprobación de seguridad antes de ejecutar</strong>
      <p>Retira todos los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del espacio de trabajo del robot. Asegúrate de que el brazo esté firmemente fijado antes de ejecutar esta sección.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>Iniciar el controlador B601-RS</h2>
      <p>Comienza con la comunicación y la verificación del estado de las articulaciones. Añade RViz solo después de que el controlador de hardware sea estable.</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Solo controlador</b><span>La mejor opción para la primera verificación de hardware porque inicia el controlador sin RViz.</span></div>
    <div className="module-summary-card"><b>Inicio completo</b><span>Inicia el controlador, robot-state-publisher y la visualización opcional en RViz.</span></div>
    <div className="module-summary-card"><b>Compatibilidad con espacios de nombres</b><span>Usa un espacio de nombres personalizado al ejecutar varios brazos o al integrarte con sistemas ROS2 más grandes.</span></div>
  </div>

  <details className="content-details" open>
    <summary>Paso 2.1: confirmar la interfaz CAN</summary>
    <pre><code>{`ip -details link show can0`}</code></pre>
    <p>Si <code>{`can0`}</code> no está activa, vuelve a configurarla:</p>
    <pre><code>{`sudo modprobe peak_usb
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Paso 2.2: iniciar el sistema completo</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0`}</code></pre>
    <p>Si solo usas B601-RS durante mucho tiempo, puedes establecer <code>{`default_model: rs`}</code> en <code>{`src/rebotarm_bringup/config/rebotarm_hardware.yaml`}</code>. Entonces podrás lanzar con:</p>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py channel:=can0`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Paso 2.3: iniciar la visualización en RViz</summary>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 use_rviz:=true`}</code></pre>
    <p>Si la vista del modelo no es conveniente, establece <code>{`Target Frame`}</code> en <code>{`base_link`}</code>, cambia el tipo de vista a <code>{`Move Camera`}</code> y ajusta la distancia a <code>{`1.0`}</code> o <code>{`1.5`}</code>.</p>
  </details>

  <details className="content-details" open>
    <summary>Paso 2.4: iniciar solo el nodo de control de hardware</summary>
    <pre><code>{`ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0`}</code></pre>
    <p>Usa el archivo de lanzamiento en lugar de ejecutar el nodo directamente, porque el archivo de lanzamiento pasa la configuración de hardware desde <code>{`rebotarm_bringup/config`}</code>.</p>
  </details>

  <details className="content-details">
    <summary>Opcional: cambiar el espacio de nombres</summary>
    <p>El espacio de nombres predeterminado es <code>{`/rebotarm`}</code>. Para ejecutar varios brazos o integrarte con otros sistemas ROS2, pasa un espacio de nombres personalizado:</p>
    <pre><code>{`ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0 arm_namespace:=right_arm`}</code></pre>
    <p>Por ejemplo, <code>{`/rebotarm/joint_states`}</code> se convierte en <code>{`/right_arm/joint_states`}</code>.</p>
  </details>
</section>

<section id="api" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>Validar los topics, servicios y acciones de ROS2</h2>
      <p>Comienza con comprobaciones de estado de solo lectura. Luego prueba servicios y acciones con objetivos pequeños y conservadores.</p>
    </div>
  </div>

  <div className="api-grid">
    <div className="api-card"><b>Topic de estado</b><code>{`/rebotarm/joint_states`}</code><span>Posiciones, velocidades y esfuerzos de las articulaciones de 6 ejes, incluyendo articulaciones visuales del gripper para RViz.</span></div>
    <div className="api-card"><b>Topic de estado</b><code>{`/rebotarm/arm_status`}</code><span>Modo de control, estado habilitado, máquina de estados y códigos de error.</span></div>
    <div className="api-card"><b>Servicio</b><code>{`/rebotarm/enable`}</code><span>Habilita el brazo robótico.</span></div>
    <div className="api-card"><b>Servicio</b><code>{`/rebotarm/disable`}</code><span>Deshabilita el brazo robótico.</span></div>
    <div className="api-card"><b>Servicio</b><code>{`/rebotarm/safe_home`}</code><span>Vuelve a la posición segura de inicio.</span></div>
    <div className="api-card"><b>Acción</b><code>{`/rebotarm/move_to_pose`}</code><span>Movimiento de la pose del efector final.</span></div>
    <div className="api-card"><b>Acción</b><code>{`/rebotarm/follow_joint_trajectory`}</code><span>Punto de entrada estándar compatible con trayectorias de articulaciones.</span></div>
    <div className="api-card"><b>Acción</b><code>{`/rebotarm/gripper/command`}</code><span>Acción estándar del gripper.</span></div>
  </div>

  <details className="content-details" open>
    <summary>Leer topics de estado</summary>
    <pre><code>{`ros2 topic echo /rebotarm/joint_states --once
ros2 topic echo /rebotarm/arm_status --once`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Servicios comunes del efector de agarre</summary>
    <pre><code>{`ros2 service call /rebotarm/gripper/open rebotarm_msgs/srv/GripperCommand "{}"
ros2 service call /rebotarm/gripper/close rebotarm_msgs/srv/GripperCommand "{}"
ros2 service call /rebotarm/gripper/set rebotarm_msgs/srv/SetGripper "{position: 5.0}"`}</code></pre>
  </details>
</section>

<section id="examples" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Comprobación de seguridad antes de ejecutar</strong>
      <p>Retira todos los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del espacio de trabajo del robot. Usa objetivos pequeños y duraciones largas para las primeras pruebas de movimiento.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Paso 4</span>
    <div>
      <h2>Ejecutar ejemplos de control seguro</h2>
      <p>Todos los ejemplos suponen que el controlador B601-RS ya se está ejecutando.</p>
    </div>
  </div>

  <div className="command-card">
    <h3>Inicia primero el controlador</h3>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can0`}</code></pre>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">4.1</span><strong>Habilitar el brazo</strong><p>Habilita solo después de comprobar que el espacio de trabajo está despejado y que el brazo está firmemente fijado.</p></div>
    <div className="step-card"><span className="step-mini">4.2</span><strong>Mover a una pequeña pose</strong><p>Usa una posición objetivo conservadora y una duración de al menos 2 segundos para la primera prueba.</p></div>
    <div className="step-card"><span className="step-mini">4.3</span><strong>Enviar un objetivo articular</strong><p>Usa un desplazamiento articular muy pequeño y una duración larga para verificar la dirección del movimiento.</p></div>
    <div className="step-card"><span className="step-mini">4.4</span><strong>Volver a la posición inicial</strong><p>Llama a la posición inicial segura y luego deshabilita el brazo antes de cambiar cables o hardware.</p></div>
  </div>

  <details className="content-details" open>
    <summary>Paso 4.1: habilitar el brazo robótico</summary>
    <pre><code>{`ros2 service call /rebotarm/enable std_srvs/srv/Trigger`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Paso 4.2: mover a una pose del efector final</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/move_to_pose rebotarm_msgs/action/MoveToPose \
  "{target_pose: {position: {x: 0.30, y: 0.0, z: 0.30}, orientation: {x: 0.0, y: 0.0, z: 0.0, w: 1.0}}, duration: 2.0}"`}</code></pre>
    <p>La acción <code>{`move_to_pose`}</code> es ejecutada por el controlador de pose final del SDK. El modo de control B601-RS es por defecto <code>{`mit`}</code> en <code>{`rebotarm_hardware.yaml`}</code>.</p>
  </details>

  <details className="content-details" open>
    <summary>Paso 4.3: enviar un objetivo articular</summary>
    <pre><code>{`ros2 action send_goal /rebotarm/follow_joint_trajectory \
  control_msgs/action/FollowJointTrajectory \
  "{trajectory: {joint_names: ['joint1','joint2','joint3','joint4','joint5','joint6'],
    points: [{positions: [0.1,0,0,0,0,0], time_from_start: {sec: 5}}]}}"`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Paso 4.4: posición inicial segura y deshabilitar</summary>
    <pre><code>{`ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger
ros2 service call /rebotarm/disable std_srvs/srv/Trigger`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Comandos de demostración adicionales</summary>
    <pre><code>{`# Ejemplo de movimiento articular, unidad: rad
ros2 run rebotarmcontroller MoveTo -- \
  0.20 -0.20 -0.20 -0.20 0.10 -0.10 \
  --duration 8.0

# Movimiento de una sola articulación
ros2 run rebotarmcontroller MoveTo -- --joint joint3 --position -0.20 --duration 5.0

# Ejemplo de pose del efector final
ros2 run rebotarmcontroller MoveToPose -- --x 0.30 --y 0.0 --z 0.30 --qw 1.0 --duration 2.0

# Ejemplo interactivo del efector de agarre
ros2 run rebotarmcontroller GripperControl`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Ejemplo de compensación de gravedad</summary>
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Comprobación de seguridad de la compensación de gravedad</strong>
        <p>Sujeta el brazo con cuidado, mantén el espacio de trabajo despejado y prepárate para detener el controlador. No uses la compensación de gravedad hasta que se hayan verificado la posición cero y las direcciones de las articulaciones.</p>
      </div>
    </div>
    <pre><code>{`ros2 run rebotarmcontroller GravityCompensation`}</code></pre>
    <p>El script llama a <code>{`/rebotarm/enable`}</code>, inicia la compensación de gravedad y, al presionar <code>{`Ctrl+C`}</code>, llama a <code>{`/rebotarm/gravity_compensation/stop`}</code>, <code>{`/rebotarm/safe_home`}</code> y <code>{`/rebotarm/disable`}</code>.</p>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Configuración</span>
    <h2>Archivos de configuración clave</h2>
    <p>El espacio de trabajo ROS2 del B601-RS usa un archivo de configuración de hardware de capa superior para seleccionar el modelo RS y sobrescribir parámetros del SDK.</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b><code>{`rebotarm_hardware.yaml`}</code></b><span>Selección de hardware y sobrescritura de parámetros del SDK para B601-RS.</span></div>
    <div className="module-summary-card"><b><code>{`driver_params.yaml`}</code></b><span>Ejemplos de parámetros ROS para el flujo de lanzamiento del driver.</span></div>
    <div className="module-summary-card"><b><code>{`default_model: rs`}</code></b><span>Usa RS automáticamente cuando <code>{`model:=...`}</code> no se pasa explícitamente.</span></div>
  </div>

  <details className="content-details" open>
    <summary>Parámetros comunes de lanzamiento</summary>

    | Parámetro | Predeterminado | Descripción |
    |---|---|---|
    | <code>{`hardware_config`}</code> | Configuración de hardware integrada | Ruta de configuración de hardware de capa superior de ROS2 |
    | <code>{`model`}</code> | <code>{`rs`}</code> | Selecciona la configuración B601-RS |
    | <code>{`channel`}</code> | <code>{`can0`}</code> | Canal SocketCAN |
    | <code>{`joint_state_rate`}</code> | <code>{`100.0`}</code> | Frecuencia de publicación de <code>{`/rebotarm/joint_states`}</code> |
    | <code>{`cmd_arbitration`}</code> | <code>{`reject`}</code> | Arbitraje de comandos articulares del brazo durante la ejecución de trayectorias |
    | <code>{`arm_namespace`}</code> | <code>{`rebotarm`}</code> | Prefijo del espacio de nombres ROS |
    | <code>{`frame_id`}</code> | <code>{`base_link`}</code> | Marco base del brazo robótico |
    | <code>{`ee_frame_id`}</code> | <code>{`gripper_end`}</code> | Marco del efector final |
    | <code>{`use_rviz`}</code> | <code>{`false`}</code> | Indica si se inicia el bringup de RViz |
    | <code>{`disable_after_safe_home`}</code> | <code>{`true`}</code> | Indica si los motores se deshabilitan después de que la posición inicial segura se complete |
  </details>

  <details className="content-details">
    <summary>Tópicos de comandos de bajo nivel</summary>
    <p>Los tópicos de bajo nivel son solo para depuración. No realizan IK, planificación de trayectorias ni comprobaciones de límites URDF.</p>

    | API | Tipo | Descripción |
    |---|---|---|
    | <code>{`/rebotarm/joints/<joint>/cmd/mit`}</code> | <code>{`rebotarm_msgs/msg/JointMitCmd`}</code> | Comando MIT bruto de una sola articulación |
    | <code>{`/rebotarm/joints/<joint>/cmd/pos_vel`}</code> | <code>{`rebotarm_msgs/msg/JointPosVelCmd`}</code> | Comando bruto de posición-velocidad de una sola articulación |
    | <code>{`/rebotarm/gripper/cmd/mit`}</code> | <code>{`rebotarm_msgs/msg/JointMitCmd`}</code> | Comando MIT bruto del efector de agarre |
    | <code>{`/rebotarm/gripper/cmd/pos_vel`}</code> | <code>{`rebotarm_msgs/msg/JointPosVelCmd`}</code> | Comando bruto de posición-velocidad del efector de agarre |
  </details>
</section>

<section id="moveit" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Paso 5</span>
    <div>
      <h2>Usar MoveIt 2 para planificación y ejecución</h2>
      <p>MoveIt 2 gestiona IK, comprobación de colisiones, planificación de trayectorias y ejecución. Siempre valida en simulación antes de usar hardware real.</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">5.1</span><strong>Instalar paquetes de MoveIt</strong><p>Instala MoveIt, ros2_control, gestores de controladores, planificadores OMPL y xacro.</p></div>
    <div className="step-card"><span className="step-mini">5.2</span><strong>Reconstruir y verificar</strong><p>Reconstruye el espacio de trabajo y confirma que los paquetes de MoveIt y los puntos de entrada de demostración están disponibles.</p></div>
    <div className="step-card"><span className="step-mini">5.3</span><strong>Ejecutar primero la simulación</strong><p>Inicia la demostración de MoveIt con hardware virtual e inspecciona el plan en RViz.</p></div>
    <div className="step-card"><span className="step-mini">5.4</span><strong>Usar hardware real</strong><p>Inicia primero el driver de hardware y luego inicia el archivo de lanzamiento de MoveIt para hardware.</p></div>
    <div className="step-card"><span className="step-mini">5.5</span><strong>Ejecutar las demos con cuidado</strong><p>Ejecuta draw-square y pick-place solo después de que la trayectoria haya sido verificada.</p></div>
  </div>

  <details className="content-details" open>
    <summary>Paso 5.1: instalar el entorno MoveIt</summary>
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
    <summary>Paso 5.2: reconstruir y verificar paquetes</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
colcon build --symlink-install
source install/setup.bash

ros2 pkg list | grep rebotarm_moveit
ros2 pkg executables rebotarm_moveit_demos`}</code></pre>
    <p>Las entradas esperadas incluyen <code>{`draw_square`}</code> y <code>{`pick_place`}</code>.</p>
  </details>

  <details className="content-details" open>
    <summary>Paso 5.3: usar MoveIt en simulación</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs

# Without RViz:
ros2 launch rebotarm_moveit_config demo.launch.py model:=rs use_rviz:=false`}</code></pre>
    <p>Esto inicia <code>{`move_group`}</code>, <code>{`robot_state_publisher`}</code>, <code>{`ros2_control_node`}</code>, controladores de articulaciones, controladores del efector final y RViz con el plugin MoveIt MotionPlanning.</p>
  </details>

  <details className="content-details" open>
    <summary>Paso 5.4: usar MoveIt con hardware real</summary>
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Comprobación de seguridad de hardware de MoveIt</strong>
        <p>Despeja el área de trabajo, verifica la trayectoria planificada en RViz y prepárate para detener el controlador antes de ejecutar cualquier movimiento real.</p>
      </div>
    </div>
    <pre><code>{`# Terminal 1: hardware driver
ros2 launch rebotarm_bringup driver.launch.py model:=rs channel:=can0

# Terminal 2: MoveIt hardware environment
cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_config hardware.launch.py model:=rs`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Paso 5.5: ejecutar la demo draw-square</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos draw_square.launch.py model:=rs`}</code></pre>
    <p>La demo draw-square mueve <code>{`gripper_tcp`}</code> a través de cuatro esquinas de un rectángulo coplanar. Los parámetros predeterminados están en <code>{`src/rebotarm_moveit_demos/config/draw_square_rs.yaml`}</code>.</p>
  </details>

  <details className="content-details" open>
    <summary>Paso 5.6: ejecutar la demo pick-place</summary>
    <pre><code>{`cd your/path/to/rebotarm_ros2
source install/setup.bash
ros2 launch rebotarm_moveit_demos pick_place.launch.py model:=rs`}</code></pre>
    <p>La demo pick-place añade un objeto a la escena de planificación, abre el efector final, se mueve a la pose de recogida, cierra el efector final, se mueve a la pose de colocación y suelta el objeto. Los parámetros predeterminados están en <code>{`src/rebotarm_moveit_demos/config/pick_place_rs.yaml`}</code>.</p>
  </details>

  <details className="content-details">
    <summary>Archivos de configuración de MoveIt</summary>

    | File | Description |
    |---|---|
    | <code>{`rebotarm_moveit_config/config/rebotarm_rs.urdf.xacro`}</code> | Modelo de robot B601-RS usado por MoveIt, incluyendo el efector final y <code>{`gripper_tcp`}</code> |
    | <code>{`rebotarm_moveit_config/config/rebotarm_rs.ros2_control.xacro`}</code> | Descripción de hardware simulado de ros2_control para simulación |
    | <code>{`rebotarm_moveit_config/config/rebotarm_rs.srdf`}</code> | Grupos de MoveIt, efector final, estados predeterminados y configuración semántica |
    | <code>{`rebotarm_moveit_config/config/kinematics.yaml`}</code> | Configuración del solucionador de IK |
    | <code>{`rebotarm_moveit_config/config/joint_limits.yaml`}</code> | Límites articulares usados por la planificación de MoveIt |
    | <code>{`rebotarm_moveit_config/config/ompl_planning.yaml`}</code> | Parámetros del planificador OMPL |
    | <code>{`rebotarm_moveit_config/config/moveit_controllers.yaml`}</code> | Configuración del controlador de ejecución de trayectorias para simulación |
    | <code>{`rebotarm_moveit_config/config/moveit_hardware_controllers.yaml`}</code> | Configuración del controlador de ejecución de trayectorias para hardware real |
    | <code>{`rebotarm_moveit_demos/config/draw_square_rs.yaml`}</code> | Parámetros de la demo draw-square |
    | <code>{`rebotarm_moveit_demos/config/pick_place_rs.yaml`}</code> | Parámetros de la demo pick-place |
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>Problemas comunes</h2>
    <p>La mayoría de los problemas de RS ROS2 son causados por el estado de la interfaz CAN, el entorno del workspace, la selección del modelo, procesos ROS2 obsoletos o la configuración del objetivo de MoveIt.</p>
  </div>

  <details className="content-details" open>
    <summary>1. Aparece <code>{`socketcan write failed: Network is down`}</code> al inicio</summary>
    <p>Esto significa que la interfaz CAN aún no se ha activado.</p>
    <pre><code>{`ip -details link show can0

sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
  </details>

  <details className="content-details">
    <summary>2. No se puede encontrar <code>{`can0`}</code></summary>
    <pre><code>{`ip -br link
sudo modprobe peak_usb
ip -br link

# If the interface is can1, launch with:
ros2 launch rebotarm_bringup bringup.launch.py model:=rs channel:=can1`}</code></pre>
  </details>

  <details className="content-details">
    <summary>3. El modelo del robot no se muestra en RViz</summary>
    <ul>
      <li>Comprueba si el workspace ha sido cargado: <code>{`source install/setup.bash`}</code>.</li>
      <li>Comprueba si <code>{`Fixed Frame`}</code> está configurado como <code>{`base_link`}</code>.</li>
      <li>Comprueba si <code>{`robot_state_publisher`}</code> se inició correctamente.</li>
      <li>Comprueba si la ruta de las mallas URDF comienza con <code>{`package://rebotarm_bringup/description/...`}</code>.</li>
    </ul>
  </details>

  <details className="content-details">
    <summary>4. La planificación de MoveIt falla</summary>
    <ul>
      <li>Confirma que <code>{`move_group`}</code> se está ejecutando correctamente.</li>
      <li>Confirma que el estado articular actual no está obsoleto.</li>
      <li>Confirma que el punto objetivo está dentro del espacio de trabajo alcanzable.</li>
      <li>Confirma que la orientación objetivo no provoca colisión de muñeca o del efector final.</li>
      <li>Planifica manualmente en RViz primero y luego ejecuta la demo.</li>
    </ul>
  </details>

  <details className="content-details">
    <summary>5. Aparece una advertencia de puerto FastDDS SHM</summary>
    <p>Si los servicios y acciones siguen respondiendo con normalidad, esta advertencia normalmente no afecta al control. Para limpiar archivos de bloqueo de memoria compartida sobrantes:</p>
    <pre><code>{`pkill -f ros2
pkill -f reBotArmController
rm -f /dev/shm/fastrtps_port*

# Optional temporary workaround:
export FASTDDS_BUILTIN_TRANSPORTS=UDPv4`}</code></pre>
  </details>

  <details className="content-details">
    <summary>6. ¿Qué pasa si uso Humble?</summary>
    <p>Sigue el mismo flujo de trabajo, reemplaza los paquetes de Jazzy por paquetes de Humble, carga el entorno de Humble y reconstruye el workspace.</p>
  </details>

  <details className="content-details">
    <summary>7. No se puede encontrar <code>{`pinocchio`}</code></summary>
    <pre><code>{`sudo apt install -y ros-\${ROS_DISTRO}-pinocchio
source /opt/ros/\${ROS_DISTRO}/setup.bash
python3 -c "import pinocchio; print(pinocchio.__version__)"
python3 -c "import sys; print('\\n'.join(sys.path))"`}</code></pre>
    <p>Después de cargar Jazzy, la ruta de Python debería incluir una ruta similar a <code>{`/opt/ros/jazzy/lib/python3.12/site-packages`}</code>. Para Humble, reemplaza <code>{`jazzy`}</code> por <code>{`humble`}</code>.</p>
  </details>
</section>

<section className="section-card course-path-section">
  <div className="section-title">
    <span>Seguir aprendiendo</span>
    <h2>Ruta de aprendizaje de reBot B601-RS</h2>
    <p>Estos tutoriales están diseñados para seguirse en orden: Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2. Usa los enlaces de abajo para saltar entre módulos.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/es/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Getting Started</strong><span>Completa el unboxing, el cableado, las comprobaciones de alimentación de 48 V, la configuración de PCAN-USB, la calibración y las primeras pruebas de movimiento.</span></span>
      <span className="course-tag">Empieza aquí</span>
    </a>
    <a className="course-path-item" href="/es/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot Teleoperation and Data Collection</strong><span>Teleopera el brazo, conecta cámaras, registra conjuntos de datos y prepara tareas de aprendizaje por imitación.</span></span>
      <span className="course-tag">Recopilación de datos</span>
    </a>
    <a className="course-path-item" href="/es/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio Kinematics Visualization</strong><span>Comprende modelos de robots, articulaciones, marcos de coordenadas, cinemática directa/inversa, trayectorias y compensación de gravedad.</span></span>
      <span className="course-tag">Control</span>
    </a>
    <a className="course-path-item" href="/es/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Visual Grasping Demo</strong><span>Combina percepción RGB-D, calibración mano-ojo, YOLO / GraspNet y generación de poses de agarre para la sujeción real de objetos.</span></span>
      <span className="course-tag">Aplicación</span>
    </a>
    <a className="course-path-item active" href="/es/rebot_arm_b601_rs_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>ROS2 Integration</strong><span>Conecta el brazo a ROS2, RViz, MoveIt 2, planificación y flujos de trabajo de robótica de nivel superior.</span></span>
      <span className="course-tag">Artículo actual</span>
    </a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Referencias</span>
    <h2>Referencias y soporte</h2>
  </div>
  <div className="reference-grid">
    <a href="https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/">Guía rápida de inicio de reBot Arm B601-RS</a>
    <a href="https://docs.ros.org/en/humble/">Documentación de ROS2 Humble</a>
    <a href="https://docs.ros.org/en/jazzy/">Documentación de ROS2 Jazzy</a>
    <a href="https://github.com/vectorBH6/reBotArm_control_py">reBotArm_control_py</a>
    <a href="https://moveit.picknik.ai/main/index.html">Documentación de MoveIt 2</a>
    <a href="https://forum.seeedstudio.com/">Foro de Seeed Studio</a>
    <a href="https://github.com/EclipseaHime017/reBotArmController_ROS2/issues">Enviar una incidencia</a>
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
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(n+2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card img { width: 100%; border-radius: 14px; border: 1px solid var(--rb-border); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.path-grid, .feature-grid, .checklist-grid, .step-card-grid, .module-summary-grid, .spec-grid, .api-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.95rem; }
.path-card, .step-card, .module-summary-card, .spec-card, .api-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: linear-gradient(180deg, var(--rb-surface), var(--rb-surface-soft)); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15,23,42,0.05); transition: all 0.18s ease; }
.path-card:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.36); box-shadow: 0 16px 32px rgba(37,99,235,0.10); }
.path-card span, .step-mini { display: inline-flex; align-items: center; justify-content: center; width: fit-content; min-height: 2rem; padding: 0.28rem 0.65rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-size: 0.82rem; font-weight: 900; }
.path-card strong, .step-card strong, .module-summary-card b, .spec-card b, .api-card b { color: var(--rb-text); font-size: 1rem; }
.path-card p, .path-card small, .step-card p, .step-card span, .module-summary-card span, .spec-card span, .api-card span { margin: 0; color: var(--rb-muted); line-height: 1.62; font-size: 0.92rem; }
.path-card em { width: fit-content; margin-top: 0.2rem; padding: 0.32rem 0.62rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.18); font-style: normal; font-weight: 800; font-size: 0.78rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.42); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.content-details { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; }
.command-card { margin: 1rem 0; padding: 1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface-soft); }
.command-card h3 { margin-top: 0; color: var(--rb-text); }
.step-title-row { display: flex; gap: 0.95rem; align-items: flex-start; margin-bottom: 1rem; }
.step-pill { display: inline-flex; padding: 0.45rem 0.8rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); border: 1px solid rgba(37,99,235,0.18); font-weight: 900; white-space: nowrap; }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem; }
.reference-grid a { padding: 0.9rem 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: var(--rb-primary); text-decoration: none !important; font-weight: 800; }
.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.course-path-section { margin-top: 2rem; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 14px 30px rgba(37,99,235,0.12); }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
pre { overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .path-card, html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .spec-card, html[data-theme='dark'] .api-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .command-card, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .path-card.recommended, html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
@media (max-width: 900px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 720px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .safety-alert { grid-template-columns: 1fr; } .step-title-row { display: grid; } }
`}</style>
