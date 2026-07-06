---
description: Este tutorial explica cómo usar Pinocchio y MeshCat con el reBot Arm B601-DM para análisis cinemático, planificación de trayectorias, compensación de gravedad y depuración visual.
title: Introducción a Pinocchio y MeshCat para reBot Arm B601-DM
keywords:
  - Pinocchio
  - MeshCat
  - reBot Arm
  - B601-DM
  - Cinemática
  - Planificación de trayectorias
  - Compensación de gravedad
  - Robot
slug: /rebot_arm_b601_dm_pinocchio_meshcat
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-05
  author: LiuJunjie
translation:
  skip:
    - zh-CN
createdAt: '2026-03-24'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_pinocchio_meshcat/
---

# Introducción a Pinocchio y MeshCat para reBot Arm B601-DM

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>Analiza, visualiza y depura la cinemática del reBot Arm B601-DM con Pinocchio y MeshCat</h2>
    <p>Esta guía es para usuarios que ya han completado las comprobaciones básicas de alimentación y comunicación del B601-DM. Explica la configuración del entorno, pruebas de un solo motor, lectura de la posición cero, validación de FK / IK, control de trayectoria, compensación de gravedad y visualización con MeshCat.</p>
    <div className="hero-actions">
      <a href="#quick-path">Ver flujo de trabajo</a>
      <a href="#debug-tools">Herramientas de depuración</a>
      <a href="#simulation">Abrir simulación</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Orden recomendado</strong>
    <span>Comienza con la simulación, luego valida FK / IK y solo después conéctate al brazo robótico real.</span>
    <span>El B601-DM usa alimentación de 24V y motores Damiao DM. Comprueba el USB2CAN y el cableado de alimentación antes de las pruebas con el brazo real.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Advertencia de seguridad: despeja el espacio de trabajo del robot antes de ejecutar</strong>
    <p>
      Antes de ejecutar cualquier programa que mueva el brazo robótico, retira todos los objetos de valor,
      objetos frágiles, herramientas, cables y objetos no relacionados dentro de un <strong>radio de 1 metro</strong>
      del espacio de trabajo del robot. Durante la depuración y la operación, el personal debe permanecer fuera
      del rango de movimiento del robot.
    </p>
    <ul>
      <li>No toques las articulaciones, motores, eslabones, la garra ni el efector final después de encender el brazo robótico.</li>
      <li>Antes de la calibración, teleoperación, control IK, control de trayectoria, compensación de gravedad, ejecución con ROS2 / MoveIt o agarre visual, asegúrate de que la base del brazo esté firmemente fijada.</li>
      <li>Si se produce un movimiento anormal, ruido, vibración, cables sueltos, mal contacto de alimentación o pérdida de comunicación, detén el programa inmediatamente y apaga el sistema antes de la inspección.</li>
      <li>Apaga siempre el sistema antes de conectar o desconectar cables de motor, cables CAN, adaptadores USB2CAN / PCAN-USB, conectores XT30 o conectores de alimentación.</li>
    </ul>
  </div>
</div>


<div className="quick-note">
  <strong>Recordatorio de seguridad:</strong> El control MIT y el control IK con el brazo real pueden moverse muy rápido. Sujeta la base, mantente al menos a 1 metro del brazo y comienza con ángulos pequeños, bajas velocidades y movimientos objetivo cortos.
</div>

<nav className="doc-nav" aria-label="Pinocchio MeshCat quick navigation">
  <a href="#quick-path">Ruta</a>
  <a href="#overview">Resumen</a>
  <a href="#install">Instalación</a>
  <a href="#debug-tools">Depuración de motores</a>
  <a href="#kinematics">Cinemática</a>
  <a href="#gravity">Gravedad</a>
  <a href="#simulation">Simulación</a>
</nav>

<section id="quick-path" className="section-card">
  <div className="section-title">
    <span>Comienza aquí</span>
    <h2>Flujo de trabajo recomendado</h2>
    <p>Pinocchio y MeshCat son herramientas de bajo nivel para cinemática, dinámica y depuración de control. Comienza con scripts que no mueven el robot real y luego pasa gradualmente al control del hardware.</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#install"><b>1. Instalar el entorno</b><span>Usa uv para sincronizar las dependencias de reBotArm_control_py y confirma que Python, Pinocchio, MeshCat y MotorBridge están disponibles.</span><em>Empieza aquí</em></a>
    <a className="path-card" href="#debug-tools"><b>2. Probar motores y ceros</b><span>Usa la consola de un solo motor y los scripts de lectura de articulaciones para verificar USB2CAN, IDs de motor, posiciones cero y direcciones.</span><em>Comprobación de hardware</em></a>
    <a className="path-card" href="#kinematics"><b>3. Validar FK / IK</b><span>Usa scripts de FK e IK para verificar el URDF, límites de articulación, marco del efector final y espacio de trabajo objetivo.</span><em>Paso clave</em></a>
    <a className="path-card" href="#simulation"><b>4. Usar simulación con MeshCat</b><span>Visualiza la pose del brazo, el marco objetivo, la trayectoria de referencia y la trayectoria real en un navegador.</span><em>Altamente recomendado</em></a>
    <a className="path-card" href="#gravity"><b>5. Probar compensación de gravedad</b><span>Intenta la compensación de gravedad solo después de haber verificado los parámetros URDF y las direcciones de los motores.</span><em>Avanzado</em></a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Pasos detallados</span>
    <h2>Secuencia de depuración segura</h2>
    <p>Sigue esta secuencia para pasar de la validación solo por software al control del brazo real con menor riesgo.</p>
  </div>
  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Paso 0</span><strong>Completar la guía rápida</strong><p>Verifica alimentación, cableado, posición cero y comunicación antes de usar scripts de control de bajo nivel.</p></div>
    <div className="step-card"><span className="step-mini">Paso 1</span><strong>Instalar y sincronizar el entorno</strong><p>Usa uv para crear un entorno de Python reproducible y confirma las importaciones de Pinocchio / MeshCat.</p></div>
    <div className="step-card"><span className="step-mini">Paso 2</span><strong>Comprobar el comportamiento de un solo motor</strong><p>Verifica la comunicación CAN / USB2CAN, ID de motor, cero, retroalimentación de estado y dirección.</p></div>
    <div className="step-card"><span className="step-mini">Paso 3</span><strong>Validar FK / IK en software</strong><p>Comprueba unidades, marcos, espacio de trabajo y límites de articulación antes de enviar comandos al brazo real.</p></div>
    <div className="step-card"><span className="step-mini">Paso 4</span><strong>Visualizar con MeshCat</strong><p>Usa la visualización en el navegador para inspeccionar poses, trayectorias y marcos objetivo.</p></div>
    <div className="step-card"><span className="step-mini">Paso 5</span><strong>Mover el hardware real lentamente</strong><p>Comienza con distancias cortas, ángulos pequeños, duraciones largas y procedimientos de parada segura.</p></div>
  </div>
</section>


<section id="overview" className="section-card">
  <div className="section-title">
    <span>Resumen</span>
    <h2>Resumen del proyecto</h2>
    <p>Pinocchio proporciona cinemática y dinámica de cuerpos rígidos, Jacobianos y cálculo de trayectorias de forma eficiente. MeshCat proporciona visualización en tiempo real basada en navegador del modelo del robot, poses objetivo y trayectorias. Juntos, son útiles para la depuración de algoritmos de control de brazos robóticos.</p>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png" alt="reBot Arm B601-DM Pinocchio MeshCat" />
  </div>

  <div className="badge-row">
    <span>Pinocchio</span>
    <span>MeshCat</span>
    <span>Cinemática directa / inversa</span>
    <span>Trayectoria SE(3)</span>
    <span>Compensación de gravedad</span>
  </div>

  <div className="feature-grid">
    <div><strong>Cinemática directa / inversa</strong><span>Calcula la pose del efector final a partir de los ángulos articulares, o resuelve los ángulos articulares a partir de una pose objetivo para validar el espacio de trabajo y los límites de articulación.</span></div>
    <div><strong>Visualización con MeshCat</strong><span>Muestra el modelo URDF, el marco del efector final, la pose objetivo y las trayectorias planificadas en un navegador para diagnosticar fallos de IK.</span></div>
    <div><strong>Planificación de trayectorias</strong><span>Usa trayectorias geodésicas en SE(3), perfiles de mínimo tirón y seguimiento CLIK para reducir movimientos articulares bruscos.</span></div>
    <div><strong>Compensación de gravedad</strong><span>Calcula los pares de gravedad de las articulaciones a partir del modelo dinámico. Los resultados reales dependen de la precisión de la masa URDF, centro de masa, relación de engranajes, fricción y dirección del motor.</span></div>
  </div>

  <div className="buy-box">
    <a href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">Obtener reBot Arm B601-DM</a>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>Requisitos de hardware y entorno</h2>
    <p>La versión B601-DM usa motores Damiao y comunicación USB2CAN. El voltaje de funcionamiento predeterminado es 24V CC.</p>
  </div>

  | Elemento | Requisito |
  |------|-------------|
  | Brazo robótico | reBot Arm B601-DM |
  | Motores | Damiao DM4340 / DM4310 |
  | Comunicación | Puente serie USB2CAN o interfaz CAN |
  | Alimentación | 24V CC |
  | SO | Ubuntu 22.04+ |
  | Python | 3.10+ |

  <div className="callout warning">
    <strong>Antes del control del brazo real:</strong> Completa primero las comprobaciones básicas de inicio rápido, incluyendo alimentación, cableado, posición cero y comprobaciones de ID de motor. Si solo quieres aprender FK / IK y MeshCat, puedes ejecutar los scripts de simulación sin conectar el robot.
  </div>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Paso 1</span>
    <div>
      <h2>Instalar el entorno</h2>
      <p>Este proyecto usa uv para la gestión de dependencias. uv crea un entorno virtual e instala dependencias basadas en pyproject.toml y uv.lock.</p>
    </div>
  </div>

  <div className="command-card">
    <h3>1. Instalar uv</h3>
    <pre><code>{`curl -LsSf https://astral.sh/uv/install.sh | sh`}</code></pre>
  </div>

  <div className="command-card">
    <h3>2. Clonar el repositorio y sincronizar dependencias</h3>
    <pre><code>{`git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py
uv sync`}</code></pre>
  </div>

  <details className="content-details" open>
    <summary>Permisos del dispositivo antes de ejecutar ejemplos</summary>

    Damiao USB2CAN suele asignarse a <code>/dev/ttyACM0</code>. Si la ruta de tu dispositivo es diferente, compruébala con <code>dmesg</code> o <code>ls /dev/ttyACM*</code>.

    <pre><code>{`sudo chmod 666 /dev/ttyACM0

# If using a SocketCAN interface, you can also check can0:
ip -br link
sudo chmod 666 /dev/can0 2>/dev/null || true`}</code></pre>
  </details>
</section>

<section id="debug-tools" className="section-card step-section">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>Retira todos los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del espacio de trabajo del robot. Asegúrate de que el brazo esté firmemente fijado antes de ejecutar esta sección.</p>
  </div>
</div>

<div className="step-title-row">
    <span className="step-pill">Paso 2</span>
    <div>
      <h2>Herramientas de depuración de motores</h2>
      <p>Verifica la comunicación de un solo motor, las posiciones cero y los ángulos de las articulaciones antes de ejecutar IK o el control de trayectoria.</p>
    </div>
  </div>

  <details className="content-details" open>
    <summary>Consola de un solo motor: 0x01damiao_test.py</summary>
    <p>Usa este script para probar la comunicación del SDK de MotorBridge con un solo motor Damiao, incluyendo habilitación, cambio de modo y ajuste de cero.</p>
    <pre><code>{`uv run python example/0x01damiao_test.py`}</code></pre>

    | Command | Description |
    |---------|-------------|
    | `enable` / `disable` | Habilitar / deshabilitar motor |
    | `set_zero` | Establecer la posición cero actual del motor |
    | `state` | Leer el estado del motor |
    | `mode mit` | Modo MIT |
    | `mode posvel` | Modo posición-velocidad con parámetros PID opcionales |
    | `mode vel` | Modo de velocidad |
  </details>

  <details className="content-details">
    <summary>Ajuste de cero y monitorización de articulaciones: 2_zero_and_read.py</summary>
    <p>Establece todos los ceros de las articulaciones e imprime los ángulos de las articulaciones en tiempo real. Ejecuta esto antes de las pruebas de FK / IK para verificar las posiciones cero y las direcciones de las articulaciones.</p>
    <pre><code>{`uv run python example/2_zero_and_read.py

# Example output
-0.12  +0.23  -6.42  +41.74  -0.45  -0.01  -0.01`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Modo de control MIT: 3_mit_control.py</summary>
    <div className="callout danger"><strong>Advertencia:</strong> El modo MIT responde rápidamente y puede generar un par elevado. Para la primera prueba, usa ángulos muy pequeños y mantén a las personas y al equipo alejados del brazo.</div>
    <pre><code>{`uv run python example/3_mit_control.py
> 30 0 0 0 0 0
> state
> q`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Control de posición-velocidad: 4_pos_vel_control.py</summary>
    <p>El modo POS_VEL suele ser más suave que enviar directamente ángulos objetivo MIT, lo que lo convierte en un buen punto de partida para pruebas básicas de movimiento de articulaciones.</p>
    <pre><code>{`uv run python example/4_pos_vel_control.py
> 30 0 0 0 0 0
> state
> q`}</code></pre>
  </details>
</section>

<section id="kinematics" className="section-card step-section">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>Retira todos los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del espacio de trabajo del robot. Asegúrate de que el brazo esté firmemente fijado antes de ejecutar esta sección.</p>
  </div>
</div>

<div className="step-title-row">
    <span className="step-pill">Paso 3</span>
    <div>
      <h2>Pruebas de cinemática</h2>
      <p>La cinemática directa calcula la pose del efector final a partir de los ángulos de las articulaciones. La cinemática inversa resuelve los ángulos de las articulaciones a partir de una pose objetivo. Comienza sin movimiento real del brazo para verificar si el objetivo está dentro del espacio de trabajo.</p>
    </div>
  </div>

  <div className="callout">
    <strong>Nota adicional:</strong> Los resultados de FK / IK dependen del URDF, los límites de las articulaciones, las definiciones de marcos y las unidades. Las posiciones están en metros. Algunos scripts usan grados para los ángulos de Euler, mientras que los scripts de simulación pueden usar radianes. Sigue cuidadosamente la descripción de entrada de cada script.</p>
  </div>

  <details className="content-details" open>
    <summary>Cinemática directa: 5_fk_test.py</summary>
    <p>Introduce seis ángulos de articulación e imprime la posición del efector final, la matriz de rotación y los ángulos de Euler XYZ.</p>
    <pre><code>{`uv run python example/5_fk_test.py
> 0 0 0 0 0 0`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Cinemática inversa: 6_ik_test.py</summary>
    <p>Introduce una posición objetivo, o posición objetivo más orientación. El script intenta resolver los ángulos de las articulaciones correspondientes.</p>
    <pre><code>{`uv run python example/6_ik_test.py

# Position only, unit: m
> 0.28 0 0.3

# Position + orientation, position in m, orientation in deg
> 0.28 0 0.3 0 1 0`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Control de IK con brazo real en modo MIT: 7_arm_ik_control.py</summary>
    <div className="callout danger"><strong>Riesgo con brazo real:</strong> Este script mueve el brazo robótico real. Para la primera ejecución, usa un objetivo pequeño cercano a la pose actual en lugar de un objetivo lejano.</div>
    <pre><code>{`uv run python example/7_arm_ik_control.py

# Position only
> 0.3 0.0 0.4

# Position + orientation
> 0.3 0.0 0.4 0.0 0.0 0.5

# Read current joint state
> state

# Read current end-effector state
> end_state`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Control suave de trayectoria IK: 8_arm_traj_control.py</summary>
    <p>Este script interpola una trayectoria suave durante la duración objetivo. Generalmente es más seguro para pruebas con el brazo real que saltar directamente a una pose objetivo.</p>
    <pre><code>{`uv run python example/8_arm_traj_control.py

# Position only, default 2 seconds
> 0.3 0.0 0.4

# Position + orientation + duration
> 0.3 0.0 0.4 0.0 0.0 0.0 5.0`}</code></pre>
  </details>
</section>

<section id="gravity" className="section-card step-section">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>Retira todos los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del espacio de trabajo del robot. Asegúrate de que el brazo esté firmemente fijado antes de ejecutar esta sección.</p>
  </div>
</div>

<div className="step-title-row">
    <span className="step-pill">Paso 4</span>
    <div>
      <h2>Pruebas de compensación de gravedad</h2>
      <p>La compensación de gravedad depende de la coherencia entre el modelo dinámico y el robot real. Los errores en la masa del URDF, el centro de masa, la inercia o la dirección de las articulaciones reducirán la calidad de la compensación.</p>
    </div>
  </div>

  <div className="feature-grid">
    <div><strong>Compensación de gravedad básica</strong><span>Usa <code>tau = g(q)</code> para cancelar el par de gravedad de las articulaciones y hacer que el brazo se sienta flotante y movible manualmente.</span></div>
    <div><strong>Modo de bloqueo con alta amortiguación</strong><span>Bloquea la posición actual de la articulación a baja velocidad del efector final, resiste pequeñas perturbaciones y actualiza el objetivo solo cuando se empuja más allá del umbral de velocidad.</span></div>
  </div>

  <details className="content-details" open>
    <summary>9_gravity_compensation.py</summary>
    <pre><code>{`uv run python example/9_gravity_compensation.py`}</code></pre>
    <p>La terminal imprime el par de gravedad deseado para cada articulación. Pulsa <code>Ctrl+C</code> para detener.</p>
  </details>

  <details className="content-details">
    <summary>10_gravity_compensation_lock.py</summary>
    <pre><code>{`uv run python example/10_gravity_compensation_lock.py`}</code></pre>
    <p>La terminal muestra <code>LOCKED</code> o <code>UPDATE</code>, así como la velocidad lineal del efector final, la velocidad angular y el par de gravedad para cada articulación.</p>
  </details>

  <div className="callout warning">
    <strong>Consejos de depuración:</strong> Si el brazo cae lentamente, vibra o compensa en la dirección equivocada, primero revisa la masa / centro de masa del URDF, la dirección de las articulaciones, los desplazamientos de cero, las constantes de par del motor y las zonas muertas de fricción. No aumentes simplemente las ganancias.</p>
  </div>
</section>

<section id="simulation" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Paso 5</span>
    <div>
      <h2>Simulación y visualización con MeshCat</h2>
      <p>MeshCat inicia un visualizador basado en la web de forma local. Después de lanzar un script, abre la URL impresa en la terminal para ver el modelo del robot.</p>
    </div>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic.png" alt="MeshCat trajectory simulation" />
  </div>

  <details className="content-details" open>
    <summary>Simulación de cinemática directa: sim/fk_sim.py</summary>
    <pre><code>{`uv run python example/sim/fk_sim.py

# Input six joint angles, unit: deg
> 0 0 0 0 0 0
> 45 -30 15 -60 90 -180`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Simulación de cinemática inversa: sim/ik_sim.py</summary>
    <pre><code>{`uv run python example/sim/ik_sim.py

# Position only, unit: m
> 0.25 0.0 0.25

# Position + orientation, orientation unit: rad
> 0.25 0.0 0.25 0 0 0`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Simulación de planificación de trayectoria: sim/traj_sim.py</summary>
    <pre><code>{`uv run python example/sim/traj_sim.py

# Input x y z [roll pitch yaw], position in m, orientation in rad
> 0.25 0.0 0.25 0 0 0`}</code></pre>
    <p>Este script muestra la trayectoria de referencia y la trayectoria real, y reproduce la animación completa de la trayectoria en MeshCat.</p>
  </details>

  <details className="content-details">
    <summary>Asistente de visualización: sim/visualizer.py</summary>
    <pre><code>{`from example.sim.visualizer import Visualizer
viz = Visualizer()
viz.update(q)
viz.draw_path(points, "path_name", color)`}</code></pre>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>Problemas comunes</h2>
  </div>

  <details className="content-details" open>
    <summary>Permiso denegado</summary>
    <p>Concede permiso al dispositivo serie o CAN:</p>
    <pre><code>{`sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/can0 2>/dev/null || true`}</code></pre>
  </details>

  <details className="content-details">
    <summary>El IK falla o devuelve resultados anómalos</summary>
    <p>Comprueba si el objetivo está fuera del espacio de trabajo, si las restricciones de orientación son demasiado estrictas, si la estimación inicial de las articulaciones está demasiado alejada y si los límites articulares son correctos. Al depurar, prueba primero el IK solo de posición.</p>
  </details>

  <details className="content-details">
    <summary>No se puede abrir la página de MeshCat</summary>
    <p>Comprueba la URL impresa por el terminal. Si se ejecuta en una máquina remota, asegúrate de que el reenvío de puertos o el acceso de red a ese host estén disponibles.</p>
  </details>

  <details className="content-details">
    <summary>La compensación de gravedad no es precisa</summary>
    <p>La compensación de gravedad es sensible a la masa del eslabón, al centro de masa y a la inercia en el URDF. Si la estructura real o las piezas impresas en 3D difieren del URDF, mide los parámetros reales y actualiza el URDF antes de probar de nuevo.</p>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Referencias</span>
    <h2>Referencias</h2>
  </div>
  <div className="reference-grid">
    <a href="https://stack-of-tasks.github.io/pinocchio/">Documentación de Pinocchio</a>
    <a href="https://github.com/rdeits/meshcat">MeshCat GitHub</a>
    <a href="https://github.com/vectorBH6/reBotArm_control_py">reBotArm_control_py</a>
    <a href="https://github.com/motorbridge/motorbridge">MotorBridge SDK</a>
    <a href="https://forum.seeedstudio.com/">Foro de Seeed Studio</a>
  </div>
</section>


<section className="section-card course-path-section">
  <div className="section-title">
    <span>Seguir aprendiendo</span>
    <h2>Ruta de aprendizaje de reBot B601-DM</h2>
    <p>Estos tutoriales siguen el mismo orden que la ruta de aprendizaje de la página de robótica: <strong>Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2</strong>.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/es/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Getting Started</strong><span>Completa el unboxing, el cableado, las comprobaciones de alimentación, la configuración del controlador, la calibración y las primeras pruebas de movimiento.</span></span>
      <span className="course-tag">Empieza aquí</span>
    </a>
    <a className="course-path-item" href="/es/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot Teleoperation and Data Collection</strong><span>Teleopera el brazo, conecta cámaras, registra conjuntos de datos, entrena políticas y evalúa el comportamiento del brazo real.</span></span>
      <span className="course-tag">Recopilación de datos</span>
    </a>
    <a className="course-path-item active" href="/es/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Visualización de cinemática con Pinocchio</strong><span>Comprende modelos de robots, articulaciones, marcos de coordenadas, cinemática directa/inversa, trayectorias y compensación de gravedad.</span></span>
      <span className="course-tag">Artículo actual</span>
    </a>
    <a className="course-path-item" href="/es/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Demostración de agarre visual</strong><span>Combina percepción RGB-D, calibración mano-ojo, YOLO / GraspNet y generación de poses de agarre para el agarre real de objetos.</span></span>
      <span className="course-tag">Aplicación</span>
    </a>
    <a className="course-path-item" href="/es/rebot_arm_b601_dm_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>Integración con ROS2</strong><span>Conecta el brazo a ROS2, RViz, MoveIt 2, planificación y flujos de trabajo de robótica de nivel superior.</span></span>
      <span className="course-tag">Integración</span>
    </a>
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
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(2), .hero-actions a:nth-child(3) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.quick-note { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; color: #7c2d12; background: #fff7ed; border: 1px solid #fed7aa; line-height: 1.65; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.86rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.image-frame { margin: 1rem 0; text-align: center; }
.image-frame img { max-width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.badge-row { display: flex; flex-wrap: wrap; gap: 0.55rem; margin: 1rem 0; }
.badge-row span { padding: 0.35rem 0.65rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 800; font-size: 0.78rem; }
.buy-box { margin: 1rem 0; }
.buy-box a { display: inline-flex; padding: 0.74rem 1.05rem; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); border-radius: 999px; text-decoration: none !important; font-weight: 850; }
.path-grid, .checklist-grid, .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.9rem; }
.path-card, .checklist-grid div, .feature-grid div { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; transition: all 0.2s ease; }
.path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.path-card b, .checklist-grid strong, .feature-grid strong { color: var(--rb-text); }
.path-card span, .checklist-grid span, .feature-grid span { color: var(--rb-muted); line-height: 1.6; font-size: 0.92rem; }
.path-card em { width: fit-content; padding: 0.32rem 0.6rem; border-radius: 999px; color: #047857; background: #d1fae5; font-style: normal; font-weight: 850; font-size: 0.75rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.35); background: linear-gradient(135deg, rgba(37,99,235,0.10), rgba(20,184,166,0.09)); }
.step-title-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
.step-pill { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; min-width: 74px; padding: 0.55rem 0.7rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; }
.step-title-row h2 { margin: 0 0 0.25rem; color: var(--rb-text); }
.step-title-row p { margin: 0; color: var(--rb-muted); line-height: 1.55; }
.content-details, .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.content-details summary, .video-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker, .video-details summary::-webkit-details-marker { display: none; }
.content-details summary::after, .video-details summary::after { content: "Open"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.content-details[open] summary::after, .video-details[open] summary::after { content: "Close"; }
.content-details > :not(summary), .video-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.content-details > :last-child, .video-details > :last-child { margin-bottom: 1rem; }
.command-card { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); }
.command-card h3 { margin-top: 0; color: var(--rb-text); }
.command-card p { color: var(--rb-muted); line-height: 1.65; }
.callout { margin: 1rem 0; padding: 0.95rem 1rem; border-radius: 16px; border: 1px solid rgba(37,99,235,0.22); background: var(--rb-primary-soft); color: var(--rb-text); line-height: 1.65; }
.callout.warning { border-color: rgba(245,158,11,0.34); background: #fffbeb; color: #78350f; }
.callout.danger { border-color: rgba(239,68,68,0.34); background: #fef2f2; color: #7f1d1d; }
.video-container { position: relative; width: 100%; padding-bottom: 56.25%; margin: 1rem 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.two-col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; }
.reference-grid a { display: block; padding: 0.85rem 0.95rem; border-radius: 14px; text-decoration: none !important; color: var(--rb-text); background: var(--rb-surface-soft); border: 1px solid var(--rb-border); transition: all 0.18s ease; }
.reference-grid a:hover { color: var(--rb-primary); transform: translateY(-2px); }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
.rebot-page table { display: table; width: 100%; }
pre { overflow-x: auto; border-radius: 16px; border: 1px solid var(--rb-border); }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .quick-note { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .callout.warning { background: rgba(245,158,11,0.12); color: #fde68a; }
html[data-theme='dark'] .callout.danger { background: rgba(239,68,68,0.12); color: #fecaca; }
html[data-theme='dark'] .path-card em { color: #bbf7d0; background: rgba(34,197,94,0.18); }
@media (max-width: 900px) { .doc-hero, .two-col { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } .step-title-row { align-items: flex-start; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .step-title-row { display: block; } .step-pill { margin-bottom: 0.75rem; } }

/* Advertencia de seguridad compartida y navegación del curso */
.safety-alert {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 0.9rem;
  align-items: flex-start;
  margin: 1.15rem 0 1.35rem;
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
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact {
  margin: 1rem 0;
  padding: 0.9rem 1rem;
  border-radius: 16px;
}
.safety-alert.compact .safety-alert-content strong { margin-bottom: 0.25rem; }
.course-nav-section {
  margin-top: 1.4rem;
}
.course-path-grid {
  display: grid;
  gap: 0.85rem;
}
.course-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border, rgba(148, 163, 184, 0.28));
  background: var(--rb-surface, var(--panel-bg, #ffffff));
  text-decoration: none !important;
  color: var(--rb-text, var(--text-main, #111827));
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.course-step:hover {
  transform: translateY(-1px);
  border-color: rgba(37, 99, 235, 0.32);
  box-shadow: 0 16px 32px rgba(37, 99, 235, 0.10);
}
.course-step.active {
  border-color: rgba(37, 99, 235, 0.42);
  background: linear-gradient(135deg, rgba(239, 246, 255, 0.92), rgba(240, 253, 250, 0.78));
}
.course-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 999px;
  color: #ffffff;
  background: #2563eb;
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.24);
}
.course-step strong {
  display: block;
  color: var(--rb-text, var(--text-main, #111827));
  font-size: 1rem;
  margin-bottom: 0.24rem;
}
.course-step small {
  display: block;
  color: var(--rb-muted, var(--text-muted, #64748b));
  line-height: 1.55;
  font-size: 0.92rem;
}
.course-step em {
  justify-self: end;
  white-space: nowrap;
  font-style: normal;
  font-size: 0.78rem;
  font-weight: 800;
  color: #2563eb;
  background: #eff6ff;
  border: 1px solid rgba(37, 99, 235, 0.2);
  border-radius: 999px;
  padding: 0.35rem 0.65rem;
}
html[data-theme='dark'] .safety-alert {
  border-color: rgba(248, 113, 113, 0.42);
  background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18));
  color: #fecaca;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28);
}
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong,
html[data-theme='dark'] .safety-alert-content p,
html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
html[data-theme='dark'] .course-step {
  background: rgba(31, 32, 35, 0.84);
  border-color: rgba(148, 163, 184, 0.22);
}
html[data-theme='dark'] .course-step.active {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.18), rgba(20, 184, 166, 0.10));
  border-color: rgba(96, 165, 250, 0.38);
}
html[data-theme='dark'] .course-step strong { color: #e5e7eb; }
html[data-theme='dark'] .course-step small { color: #cbd5e1; }
html[data-theme='dark'] .course-step em { color: #93c5fd; background: rgba(37, 99, 235, 0.16); border-color: rgba(96, 165, 250, 0.28); }
@media (max-width: 640px) {
  .safety-alert { grid-template-columns: 1fr; }
  .course-step { grid-template-columns: auto minmax(0, 1fr); }
  .course-step em { grid-column: 2; justify-self: start; }
}




/* Tarjetas de pasos pulidas y mejoras en la ruta del curso */
.step-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
  margin: 1rem 0 1.35rem;
}
.step-card {
  position: relative;
  padding: 1rem 1.05rem 1rem 1.1rem;
  border: 1px solid var(--rb-border);
  border-radius: 18px;
  background: linear-gradient(180deg, var(--rb-surface, #fff), var(--rb-surface-soft, #f8fafc));
  box-shadow: 0 12px 26px rgba(15, 23, 42, 0.06);
}
.step-card .step-mini {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.1rem;
  height: 2.1rem;
  padding: 0 0.65rem;
  margin-bottom: 0.65rem;
  border-radius: 999px;
  color: #fff;
  background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent));
  font-weight: 900;
  font-size: 0.86rem;
}
.step-card strong {
  display: block;
  color: var(--rb-text);
  font-size: 1rem;
  margin-bottom: 0.35rem;
}
.step-card p,
.step-card span {
  display: block;
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.65;
}
.module-summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1rem;
  margin: 1rem 0 1.35rem;
}
.module-summary-card {
  padding: 1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface, #fff);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.module-summary-card b {
  display: block;
  margin-bottom: 0.35rem;
  color: var(--rb-text);
}
.module-summary-card span {
  display: block;
  color: var(--rb-muted);
  line-height: 1.65;
}
.path-grid > div:not([class]) {
  padding: 1rem;
  border: 1px solid var(--rb-border);
  border-radius: 18px;
  background: var(--rb-surface, #fff);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.path-card p { margin: 0.35rem 0 0; color: var(--rb-muted); line-height: 1.6; }
.course-path-section { margin-top: 2rem; }
.course-path-grid {
  display: grid;
  gap: 0.85rem;
  margin-top: 1rem;
}
.course-path-item,
.course-step {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  gap: 0.95rem;
  align-items: center;
  padding: 1rem 1.1rem;
  border-radius: 18px;
  border: 1px solid var(--rb-border);
  background: var(--rb-surface, #fff);
  text-decoration: none !important;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05);
}
.course-path-item.active,
.course-step.active {
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
.course-path-copy strong,
.course-step strong {
  display: block;
  color: var(--rb-text);
  font-size: 1rem;
  margin-bottom: 0.25rem;
}
.course-path-copy span,
.course-step small {
  display: block;
  color: var(--rb-muted);
  line-height: 1.6;
}
.course-tag,
.course-step em {
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
@media (max-width: 720px) {
  .course-path-item,
  .course-step { grid-template-columns: auto minmax(0, 1fr); }
  .course-tag,
  .course-step em { grid-column: 2; justify-self: start; }
}
html[data-theme='dark'] .step-card,
html[data-theme='dark'] .module-summary-card,
html[data-theme='dark'] .course-path-item,
html[data-theme='dark'] .course-step,
html[data-theme='dark'] .path-grid > div:not([class]) {
  background: rgba(15, 23, 42, 0.72);
  border-color: rgba(148, 163, 184, 0.22);
}
html[data-theme='dark'] .course-path-item.active,
html[data-theme='dark'] .course-step.active {
  background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12));
}

`}</style>
