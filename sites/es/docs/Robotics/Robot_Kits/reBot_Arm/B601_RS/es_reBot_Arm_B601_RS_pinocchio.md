---
description: Este tutorial presenta cómo usar Pinocchio y MeshCat para el análisis de cinemática y la visualización en el brazo robótico reBot Arm B601-RS.
title: Introducción a Pinocchio y MeshCat para reBot Arm B601-RS
keywords:
  - Pinocchio
  - MeshCat
  - Brazo robótico
  - Robot
  - LeRobot
  - Cinemática
  - Robostride
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_arm_b601_rs_pinocchio_meshcat
sku: 100019336
last_update:
  date: 2026-07-05
  author: LiJie
translation:
  skip:
    - zh-CN
createdAt: '2026-06-11'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_pinocchio_meshcat/
---

# Introducción a Pinocchio y MeshCat para reBot Arm B601-RS

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Seeed Studio Robotics Wiki</span>
    <h2>Depura paso a paso la cinemática, trayectorias, compensación de gravedad y visualización en MeshCat del B601-RS</h2>
    <p>Esta guía convierte el flujo de trabajo de bajo nivel de reBotArm_control_py en una secuencia de aprendizaje más segura: instala el entorno, verifica la comunicación CAN, prueba un solo motor RobStride, valida FK / IK, simula trayectorias en MeshCat y solo entonces mueve el brazo real.</p>
    <div className="hero-actions">
      <a href="#workflow">Ver flujo de trabajo</a>
      <a href="#install">Instalar</a>
      <a href="#hardware-control">Control real</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
    <strong>B601-RS · Pinocchio / MeshCat</strong>
    <span>Primero simulación. Segundo movimientos pequeños. Último compensación de gravedad.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Advertencia de seguridad: despeja el espacio de trabajo del robot antes de ejecutar</strong>
    <p>Antes de ejecutar cualquier programa que mueva el brazo robótico, retira todos los objetos de valor, objetos frágiles, herramientas, cables y objetos no relacionados dentro de un <strong>radio de 1 metro</strong> del espacio de trabajo del robot. Durante la depuración y operación, el personal debe mantenerse alejado del rango de movimiento del robot.</p>
    <ul>
      <li>No toques las articulaciones, motores, eslabones, la garra ni el efector final después de encender el brazo robótico.</li>
      <li>Antes de ejecutar control MIT, control IK, control de trayectoria, compensación de gravedad o cualquier script para el brazo real, asegúrate de que la base del brazo esté firmemente fijada.</li>
      <li>Si se produce un movimiento anormal, ruido, vibración, cables sueltos, mal contacto de alimentación o pérdida de comunicación, detén el programa inmediatamente y apaga el sistema antes de la inspección.</li>
      <li>Apaga siempre el sistema antes de conectar o desconectar cables de motor, cables CAN, adaptadores PCAN-USB, conectores XT30 o conectores de alimentación.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="Pinocchio MeshCat navigation">
  <a href="#workflow">Flujo de trabajo</a>
  <a href="#overview">Descripción general</a>
  <a href="#install">Instalar</a>
  <a href="#debug">Depuración de motor</a>
  <a href="#kinematics">FK / IK</a>
  <a href="#simulation">MeshCat</a>
  <a href="#hardware-control">Control real</a>
  <a href="#gravity">Gravedad</a>
  <a href="#faq">Preguntas frecuentes</a>
</nav>

<section id="workflow" className="section-card step-section">
  <div className="section-title">
    <span>Comienza aquí</span>
    <h2>Flujo de trabajo seguro recomendado</h2>
    <p>Pinocchio y MeshCat son potentes herramientas de depuración de bajo nivel. Sigue el orden siguiente para pasar de comprobaciones solo de software a control de hardware real con menor riesgo.</p>
  </div>

  <div className="step-card-grid">
    <a className="step-card recommended" href="#install">
      <span className="step-mini">Paso 0</span>
      <strong>Completa la guía rápida de B601-RS</strong>
      <p>Completa las comprobaciones de alimentación, cableado, PCAN-USB / SocketCAN, posición cero y MotorBridge antes de usar scripts de bajo nivel.</p>
    </a>
    <a className="step-card" href="#install">
      <span className="step-mini">Paso 1</span>
      <strong>Instala y sincroniza el entorno</strong>
      <p>Clona reBotArm_control_py, ejecuta uv sync y cambia la configuración de hardware a la versión RS.</p>
    </a>
    <a className="step-card" href="#debug">
      <span className="step-mini">Paso 2</span>
      <strong>Verifica el estado de CAN y del motor</strong>
      <p>Levanta can0, ejecuta la consola de un solo motor RS06, comprueba la retroalimentación de estado y verifica las posiciones cero.</p>
    </a>
    <a className="step-card" href="#kinematics">
      <span className="step-mini">Paso 3</span>
      <strong>Valida FK / IK en software</strong>
      <p>Comprueba unidades, límites articulares, espacio de trabajo, definiciones de marcos y convergencia de IK antes de mover el hardware.</p>
    </a>
    <a className="step-card" href="#simulation">
      <span className="step-mini">Paso 4</span>
      <strong>Visualiza con MeshCat</strong>
      <p>Inspecciona las poses del robot, marcos objetivo y trayectorias planificadas en el navegador antes de la ejecución en el brazo real.</p>
    </a>
    <a className="step-card" href="#hardware-control">
      <span className="step-mini">Paso 5</span>
      <strong>Mueve el brazo real lentamente</strong>
      <p>Usa cambios pequeños de objetivo, duraciones largas y un plan claro de parada de emergencia para scripts de IK y de trayectoria.</p>
    </a>
    <a className="step-card" href="#gravity">
      <span className="step-mini">Paso 6</span>
      <strong>Ajusta la compensación de gravedad al final</strong>
      <p>Prueba la compensación de gravedad solo después de verificar los desplazamientos cero, direcciones de las articulaciones, parámetros URDF y comportamiento de los motores.</p>
    </a>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Descripción general</span>
    <h2>Qué cubre este tutorial</h2>
    <p>Este tutorial se centra en la cinemática, generación de trayectorias, visualización y compensación basada en dinámica para la versión B601-RS RobStride.</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Análisis del modelo con Pinocchio</b><span>Usa el modelo del robot para calcular FK, IK, jacobianos, par de gravedad y objetivos de seguimiento de trayectoria.</span></div>
    <div className="module-summary-card"><b>Visualización con MeshCat</b><span>Abre un visor 3D basado en navegador para inspeccionar el estado del robot, poses objetivo, trayectorias de referencia y trayectorias reales.</span></div>
    <div className="module-summary-card"><b>Ruta de control con MotorBridge</b><span>Usa MotorBridge y SocketCAN para comunicarte con los motores RobStride a través de la interfaz CAN.</span></div>
    <div className="module-summary-card"><b>Experimentos con el brazo real</b><span>Ejecuta scripts de IK, trayectoria suave y compensación de gravedad después de la simulación y la validación de movimientos pequeños.</span></div>
  </div>

  <div className="feature-grid">
    <div><strong>Cinemática directa / inversa</strong><span>Calcula la pose del efector final a partir de los ángulos articulares, o resuelve los ángulos articulares a partir de una pose objetivo.</span></div>
    <div><strong>Planificación y seguimiento de trayectorias</strong><span>Usa planificación de trayectorias geodésicas en SE(3) y seguimiento CLIK para reducir movimientos bruscos.</span></div>
    <div><strong>Compensación de gravedad</strong><span>Calcula los pares de gravedad en las articulaciones a partir del modelo dinámico y prueba efectos de flotación o bloqueo de pose.</span></div>
    <div><strong>Control de motor en múltiples modos</strong><span>Usa modos de control MIT, POS_VEL y de velocidad para diferentes etapas de depuración.</span></div>
  </div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Hardware</span>
    <h2>Especificaciones de hardware del B601-RS</h2>
    <p>La versión RS usa motores RobStride, comunicación CAN a 1 Mbps y una fuente de alimentación de 48V.</p>
  </div>

  <div className="spec-grid">
    <div className="spec-card"><b>Brazo robótico</b><span>Kit ensamblado reBot Arm B601-RS con garra</span></div>
    <div className="spec-card"><b>Grados de libertad</b><span>6 + 1 con garra</span></div>
    <div className="spec-card"><b>Alcance</b><span>754,7 mm con garra / 587,5 mm sin garra</span></div>
    <div className="spec-card"><b>Capacidad de carga</b><span>Nominal 2,5 kg / máxima 5 kg</span></div>
    <div className="spec-card"><b>Motores</b><span>RobStride 06 × 3 y RobStride 00 × 4</span></div>
    <div className="spec-card"><b>Comunicación</b><span>Bus CAN a 1 Mbps, normalmente mapeado como can0</span></div>
    <div className="spec-card"><b>Alimentación</b><span>DC 48V, fuente recomendada de 15A</span></div>
    <div className="spec-card"><b>Software</b><span>Ubuntu 22.04+, Python 3.10+, Pinocchio, MeshCat</span></div>
  </div>

  <details className="content-details">
    <summary>Rango de movimiento de las articulaciones e información de los motores</summary>

    | Elemento | Especificación |
    |------|---------------|
    | Rango articular | J1: ±150°, J2: 220° a 0°, J3: 220° a 0°, J4: ±90°, J5: ±90°, J6: ±180°, Garra: 345° a 0° |
    | Repetibilidad | 0,1 mm |
    | Peso propio | 6,7 kg |
    | Par nominal / máximo RobStride 00 | 5 N·m / 14 N·m |
    | Par nominal / máximo RobStride 06 | 11 N·m / 36 N·m |
    | Voltaje nominal | 48V |
    | Modos de control | Modo MIT, modo velocidad, modo posición, modo par |
  </details>

  <details className="content-details">
    <summary>Lista de materiales</summary>

    | Componente | Cantidad | Incluido |
    |-----------|----------|----------|
    | Brazo robótico reBot Arm B601-RS | 1 | ✅ |
    | Adaptador CAN | 1 | ✅ |
    | Adaptador de alimentación DC 48V | 1 | ✅ |
    | Cable USB-C | 1 | ✅ |
    | Garra | 1 | ✅ |
  </details>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Paso 1</span>
    <div>
      <h2>Instala el entorno y selecciona la configuración de hardware RS</h2>
      <p>Este paso prepara reBotArm_control_py y se asegura de que la configuración use el archivo de hardware RobStride RS en lugar del archivo Damiao DM.</p>
    </div>
  </div>

  <div className="command-grid">
    <div className="command-card">
      <h3>1. Instala uv</h3>
      <pre><code>{`curl -LsSf https://astral.sh/uv/install.sh | sh`}</code></pre>
    </div>
    <div className="command-card">
      <h3>2. Clona el repositorio</h3>
      <pre><code>{`git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py`}</code></pre>
    </div>
    <div className="command-card">
      <h3>3. Sincroniza las dependencias</h3>
      <pre><code>{`uv sync`}</code></pre>
    </div>
  </div>

  <div className="callout warning">
    <strong>Configuración importante para B601-RS:</strong> antes de ejecutar los ejemplos, abre <code>{`config/rebotarm.yaml`}</code> y cambia la configuración de hardware al archivo RS.
  </div>

  <pre><code>{`# Before modification
hardware_yaml: "rebotarm_dm.yaml"

# After modification
hardware_yaml: "rebotarm_rs.yaml"`}</code></pre>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Por qué esto es importante</b><span>Las versiones DM y RS usan diferentes protocolos de motor. Si la configuración aún apunta al archivo DM, es posible que los motores RS no se reconozcan o no se controlen correctamente.</span></div>
    <div className="module-summary-card"><b>Cuándo volver a comprobarlo</b><span>Vuelve a comprobar este archivo después de hacer pull de nuevo código, cambiar de rama o copiar el proyecto a otra máquina.</span></div>
  </div>
</section>

<section id="debug" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Comprobación de seguridad antes de la depuración de motores</strong>
      <p>Limpia el área de trabajo, mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> y asegúrate de que el brazo esté fijado mecánicamente antes de habilitar los motores.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Paso 2</span>
    <div>
      <h2>Levantar CAN y verificar el comportamiento del motor</h2>
      <p>No ejecutes movimiento de todo el brazo antes de confirmar la interfaz CAN, la respuesta del motor, las posiciones cero y las direcciones de las articulaciones.</p>
    </div>
  </div>

  <div className="command-card wide">
    <h3>Configurar SocketCAN para PCAN-USB</h3>
    <pre><code>{`sudo modprobe peak_usb
ip -br link

sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
ip -details link show can0`}</code></pre>
  </div>

  <div className="debug-grid">
    <details className="content-details" open>
      <summary>2.1 Consola de un solo motor: 0x01rs06_test.py</summary>
      <p>Usa esta consola para confirmar que un motor RobStride RS06 se puede habilitar, deshabilitar, hacer ping y comandar de forma segura.</p>
      <pre><code>{`uv run python example/0x01rs06_test.py`}</code></pre>
      <div className="content-table">
        <table>
          <thead><tr><th>Comando</th><th>Descripción</th></tr></thead>
          <tbody>
            <tr><td><code>enable</code> / <code>disable</code></td><td>Habilitar o deshabilitar el motor.</td></tr>
            <tr><td><code>set_zero</code></td><td>Establecer la posición actual como cero de software.</td></tr>
            <tr><td><code>state</code></td><td>Leer el estado actual del motor.</td></tr>
            <tr><td><code>ping</code></td><td>Comprobar si el motor responde.</td></tr>
            <tr><td><code>clear_error</code></td><td>Borrar las banderas de error del motor.</td></tr>
            <tr><td><code>mode mit</code> / <code>mode posvel</code> / <code>mode vel</code></td><td>Cambiar el modo de control.</td></tr>
            <tr><td><code>mit pos vel kp kd</code></td><td>Enviar un comando en modo MIT.</td></tr>
            <tr><td><code>posvel pos vlim</code></td><td>Enviar un comando de posición-velocidad.</td></tr>
            <tr><td><code>vel velocity</code></td><td>Enviar un comando de velocidad.</td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details className="content-details" open>
      <summary>2.2 Calibración de cero y monitorización de ángulos: 2_zero_and_read.py</summary>
      <p>Usa este script para establecer todos los ceros de las articulaciones y mostrar los ángulos de las articulaciones en tiempo real. Verifica la postura cero antes de usar FK / IK.</p>
      <pre><code>{`uv run python example/2_zero_and_read.py`}</code></pre>
    </details>

    <details className="content-details">
      <summary>2.3 Control MIT de todas las articulaciones: 3_mit_control.py</summary>
      <div className="callout danger"><strong>Advertencia de alto par:</strong> el modo MIT puede responder rápidamente. Empieza con ángulos muy pequeños y mantén a las personas y objetos alejados del brazo.</div>
      <pre><code>{`uv run python example/3_mit_control.py
> 0 0 0 0 0 0
> 0 0 0 0 0 0 2.0`}</code></pre>
    </details>

    <details className="content-details">
      <summary>2.4 Control POS_VEL de todas las articulaciones: 4_pos_vel_control.py</summary>
      <p>El modo POS_VEL suele ser un mejor punto de partida para pruebas de movimiento suave de las articulaciones.</p>
      <pre><code>{`uv run python example/4_pos_vel_control.py
> 0 0 0 0 0 0`}</code></pre>
    </details>
  </div>
</section>

<section id="kinematics" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Paso 3</span>
    <div>
      <h2>Validar la cinemática directa e inversa</h2>
      <p>Usa los scripts de FK / IK para verificar unidades, marcos de coordenadas, límites de articulaciones y espacio de trabajo alcanzable antes de mover el robot real.</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Cinemática directa</b><span>Introduce ángulos de articulación y calcula la posición del efector final, la matriz de rotación y los ángulos de Euler.</span></div>
    <div className="module-summary-card"><b>Cinemática inversa</b><span>Introduce una pose objetivo y resuelve los ángulos de las articulaciones. Empieza con objetivos solo de posición para reducir restricciones.</span></div>
    <div className="module-summary-card"><b>Comprobación de unidades</b><span>Las posiciones están en metros. Algunos ejemplos usan grados, mientras que los scripts de simulación pueden usar radianes.</span></div>
  </div>

  <details className="content-details" open>
    <summary>3.1 Cinemática directa: 5_fk_test.py</summary>
    <pre><code>{`uv run python example/5_fk_test.py
> 0 0 0 0 0 0
> 45 -30 15 -60 90 180`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>3.2 Cinemática inversa: 6_ik_test.py</summary>
    <pre><code>{`uv run python example/6_ik_test.py

# Position only, unit: m
> 0.25 0.0 0.15

# Position + orientation, position in m, orientation in degrees
> 0.25 0.0 0.15 0 0 0`}</code></pre>
  </details>
</section>

<section id="simulation" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Paso 4</span>
    <div>
      <h2>Ejecutar la simulación MeshCat antes del movimiento del brazo real</h2>
      <p>MeshCat te permite inspeccionar visualmente las poses y trayectorias del robot. Úsalo antes de enviar comandos de IK o de trayectoria al brazo físico.</p>
    </div>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/traj_sim_geodesic_rs.png" alt="B601-RS MeshCat trajectory simulation" />
  </div>

  <div className="debug-grid">
    <details className="content-details" open>
      <summary>4.1 Simulación de cinemática directa: sim/fk_sim.py</summary>
      <pre><code>{`uv run python example/sim/fk_sim.py

# Input six joint angles, unit: degrees
> 0 0 0 0 0 0
> 45 -30 15 -60 90 -180`}</code></pre>
    </details>

    <details className="content-details" open>
      <summary>4.2 Simulación de cinemática inversa: sim/ik_sim.py</summary>
      <pre><code>{`uv run python example/sim/ik_sim.py

# Position only, unit: m
> 0.25 0.0 0.25

# Position + orientation, orientation unit: radians
> 0.25 0.0 0.25 0 0 0`}</code></pre>
    </details>

    <details className="content-details" open>
      <summary>4.3 Simulación de planificación de trayectoria: sim/traj_sim.py</summary>
      <pre><code>{`uv run python example/sim/traj_sim.py

# Input x y z [roll pitch yaw], position in m, orientation in radians
> 0.25 0.0 0.25 0 0 0`}</code></pre>
      <p>Este script muestra estadísticas de la trayectoria, reproduce la trayectoria completa en MeshCat y muestra tanto las trayectorias de referencia como las reales.</p>
    </details>

    <details className="content-details">
      <summary>4.4 Asistente de visualización: sim/visualizer.py</summary>
      <pre><code>{`from example.sim.visualizer import Visualizer

viz = Visualizer()
viz.update(q)
viz.draw_path(points, "path_name", color)`}</code></pre>
    </details>
  </div>
</section>

<section id="hardware-control" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Comprobación de seguridad antes del control del brazo real</strong>
      <p>Retira todos los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong>. Usa cambios de objetivo pequeños y duraciones largas para la primera ejecución.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Paso 5</span>
    <div>
      <h2>Ejecutar con cuidado el control de IK y trayectoria en el brazo real</h2>
      <p>Ejecuta estos scripts solo después de haber verificado la comunicación CAN, las posiciones cero, la FK / IK y la simulación MeshCat.</p>
    </div>
  </div>

  <div className="debug-grid">
    <details className="content-details" open>
      <summary>5.1 Control IK en tiempo real: 7_arm_ik_control.py</summary>
      <p>Usa este script para controlar la pose objetivo del efector final. Empieza con una pose cercana a la pose actual.</p>
      <pre><code>{`uv run python example/7_arm_ik_control.py

# Position only
> 0.3 0.0 0.2

# Position + orientation
> 0.3 0.1 0.25 0 0.5 0

# Read current state
> state
> pos`}</code></pre>
    </details>

    <details className="content-details" open>
      <summary>5.2 Control de trayectoria suave: 8_arm_traj_control.py</summary>
      <p>Este script utiliza planificación de trayectoria geodésica en SE(3) y seguimiento CLIK. Usa una duración más larga para las primeras pruebas más seguras.</p>
      <pre><code>{`uv run python example/8_arm_traj_control.py

# x y z roll pitch yaw duration
> 0.3 0.0 0.3 0 0.4 0 5.0`}</code></pre>
    </details>
  </div>
</section>

<section id="gravity" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Comprobación de seguridad antes de la compensación de gravedad</strong>
      <p>La compensación de gravedad puede deshabilitar los motores directamente al detenerse. Sujeta el brazo o muévelo a una pose segura antes de salir.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Paso 6</span>
    <div>
      <h2>Prueba la compensación de gravedad después de todas las comprobaciones básicas</h2>
      <p>La compensación de gravedad depende de la masa del URDF, el centro de masa, la inercia, la dirección del motor, los desplazamientos de cero y la fricción. No ajustes las ganancias a ciegas.</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Modo flotante básico</b><span>Utiliza el par de alimentación anticipada de gravedad para que el brazo se sienta más ligero y se pueda mover manualmente.</span></div>
    <div className="module-summary-card"><b>Modo de bloqueo de velocidad</b><span>Bloquea la postura actual cuando la velocidad del efector final es baja y luego actualiza el objetivo cuando se empuja el brazo.</span></div>
    <div className="module-summary-card"><b>Ajuste de seguridad</b><span>Activa solo las articulaciones seleccionadas para las primeras pruebas y ajusta la escala de par gradualmente.</span></div>
  </div>

  <details className="content-details" open>
    <summary>6.1 Compensación de gravedad básica: 9_gravity_compensation.py</summary>
    <pre><code>{`uv run python example/9_gravity_compensation.py`}</code></pre>
    <div className="callout danger"><strong>Advertencia al salir:</strong> al detener el script con Ctrl+C, el programa puede desactivar directamente todos los motores y el brazo no volverá automáticamente a cero. Sujeta el brazo o muévelo a una postura segura antes de salir.</div>
  </details>

  <details className="content-details" open>
    <summary>6.2 Bloqueo de velocidad del efector final: 10_gravity_compensation_lock.py</summary>
    <pre><code>{`uv run python example/10_gravity_compensation_lock.py`}</code></pre>
    <p>El terminal muestra LOCKED o UPDATE, la velocidad del efector final, la velocidad angular y el par de compensación de gravedad.</p>
  </details>

  <details className="content-details">
    <summary>6.3 Activa solo las articulaciones seleccionadas para pruebas de seguridad</summary>
    <pre><code>{`ENABLED_JOINTS = ["joint1"]  # Enable only joint1 for first safety tests`}</code></pre>
  </details>

  <details className="content-details">
    <summary>6.4 Ajusta cuidadosamente la compensación de articulaciones individuales</summary>
    <pre><code>{`tau_g[x] *= y  # x is the joint motor id, y is the compensation factor, usually starting from 1
# This compensation is generally only used for joints 2 and 3`}</code></pre>
    <p>Por ejemplo, <code>{`tau_g[2] *= 1.2`}</code> aumenta el par de compensación de gravedad de la articulación 2 en un 20 %. Ajusta un elemento a la vez según el efecto flotante real.</p>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>Preguntas frecuentes</span>
    <h2>Problemas comunes</h2>
  </div>

  <details className="content-details" open>
    <summary>Permiso denegado</summary>
    <p>Para B601-RS, primero comprueba si la interfaz CAN existe y está activa. Si utilizas un dispositivo SocketCAN, configura <code>{`can0`}</code> antes de ejecutar los ejemplos.</p>
    <pre><code>{`ip -br link
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up`}</code></pre>
  </details>

  <details className="content-details">
    <summary>La resolución de IK falla o devuelve resultados anómalos</summary>
    <p>Comprueba si la postura objetivo está dentro del espacio de trabajo, si las restricciones de orientación son demasiado estrictas, si la estimación inicial de las articulaciones está demasiado alejada y si los límites de las articulaciones son correctos. Prueba primero IK solo de posición.</p>
  </details>

  <details className="content-details">
    <summary>Los motores RobStride no pueden leer el estado</summary>
    <p>Algunas rutas del protocolo MotorBridge pueden no exponer los mismos campos de estado que los motores DM. Utiliza la retroalimentación de movimiento real y el comando ping para confirmar la comunicación.</p>
  </details>

  <details className="content-details">
    <summary>La compensación de gravedad es deficiente</summary>
    <p>Comprueba la masa del URDF, el centro de masa, la inercia, la dirección de las articulaciones, los desplazamientos de cero, las constantes de par, la fricción y las diferencias de montaje. No aumentes simplemente las ganancias.</p>
  </details>

  <details className="content-details">
    <summary>Cómo cambiar entre configuraciones de motores Damiao y RobStride</summary>
    <p>Modifica el archivo de configuración y carga el YAML de hardware correspondiente. Para B601-RS, utiliza <code>{`rebotarm_rs.yaml`}</code>.</p>
  </details>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Referencias</span>
    <h2>Documentos de referencia</h2>
  </div>
  <div className="reference-grid">
    <a href="https://stack-of-tasks.github.io/pinocchio/" target="_blank">Documentación oficial de Pinocchio</a>
    <a href="https://github.com/rdeits/meshcat" target="_blank">MeshCat en GitHub</a>
    <a href="https://github.com/motorbridge/motorbridge" target="_blank">SDK de MotorBridge</a>
    <a href="https://github.com/vectorBH6/reBotArm_control_py" target="_blank">reBotArm_control_py</a>
    <a href="https://forum.seeedstudio.com/" target="_blank">Foro de Seeed Studio</a>
  </div>
</section>

<section className="section-card course-path-section">
  <div className="section-title">
    <span>Seguir aprendiendo</span>
    <h2>Ruta de aprendizaje de reBot B601-RS</h2>
    <p>Estos tutoriales están diseñados para seguirse en orden: Getting Started → LeRobot → Pinocchio → Visual Grasping → ROS2. Utiliza los enlaces siguientes para saltar entre módulos.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/es/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Getting Started</strong><span>Completa el unboxing, el cableado, las comprobaciones de alimentación, la configuración de PCAN-USB, la calibración y las primeras pruebas de movimiento.</span></span>
      <span className="course-tag">Empieza aquí</span>
    </a>
    <a className="course-path-item" href="/es/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>LeRobot Teleoperation and Data Collection</strong><span>Teleopera el brazo, conecta cámaras, registra conjuntos de datos y prepara tareas de aprendizaje por imitación.</span></span>
      <span className="course-tag">Recopilación de datos</span>
    </a>
    <a className="course-path-item active" href="/es/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Pinocchio Kinematics Visualization</strong><span>Comprende modelos de robots, articulaciones, marcos de coordenadas, cinemática directa/inversa, trayectorias y compensación de gravedad.</span></span>
      <span className="course-tag">Artículo actual</span>
    </a>
    <a className="course-path-item" href="/es/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Visual Grasping Demo</strong><span>Combina percepción RGB-D, calibración mano-ojo, YOLO / GraspNet y generación de posturas de agarre para el agarre real de objetos.</span></span>
      <span className="course-tag">Aplicación</span>
    </a>
    <a className="course-path-item" href="/es/rebot_arm_b601_rs_ros2_integration/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>Integración con ROS2</strong><span>Conecta el brazo a ROS2, RViz, MoveIt 2, la planificación y flujos de trabajo de robótica de nivel superior.</span></span>
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
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
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
.step-title-row { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 1rem; align-items: start; margin-bottom: 1.1rem; }
.step-pill, .step-mini { display: inline-flex; align-items: center; justify-content: center; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; }
.step-pill { padding: 0.5rem 0.8rem; white-space: nowrap; }
.step-card-grid, .module-summary-grid, .spec-grid, .debug-grid, .command-grid, .feature-grid, .reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1rem; }
.step-card, .module-summary-card, .spec-card, .command-card, .content-details, .reference-grid a, .feature-grid div { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15, 23, 42, 0.05); }
.step-card.recommended { border-color: rgba(37,99,235,0.42); background: linear-gradient(135deg, rgba(239,246,255,0.96), rgba(240,253,250,0.82)); }
.step-card .step-mini { width: fit-content; min-width: 2.1rem; height: 2.1rem; padding: 0 0.65rem; margin-bottom: 0.3rem; font-size: 0.86rem; }
.step-card strong, .module-summary-card b, .spec-card b, .feature-grid strong, .command-card h3 { color: var(--rb-text); margin: 0; }
.step-card p, .module-summary-card span, .spec-card span, .feature-grid span, .content-details p { color: var(--rb-muted); line-height: 1.65; margin: 0; }
.command-card.wide { grid-column: 1 / -1; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; }
.content-table { overflow-x: auto; }
.image-frame { margin: 1rem 0; padding: 0.7rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface-soft); }
.image-frame img { width: 100%; border-radius: 14px; display: block; }
.callout { margin: 1rem 0; padding: 0.95rem 1rem; border-radius: 16px; border: 1px solid var(--rb-border); background: var(--rb-surface-soft); color: var(--rb-muted); line-height: 1.65; }
.callout.warning { border-color: rgba(245,158,11,0.36); background: #fffbeb; color: #78350f; }
.callout.danger { border-color: rgba(239,68,68,0.38); background: #fef2f2; color: #7f1d1d; }
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
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary); color: #fff; font-weight: 900; box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .spec-card, html[data-theme='dark'] .command-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .feature-grid div, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .step-card.recommended, html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
html[data-theme='dark'] .callout.warning { background: rgba(245,158,11,0.12); color: #fde68a; }
html[data-theme='dark'] .callout.danger { background: rgba(127,29,29,0.26); color: #fecaca; }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
@media (max-width: 900px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 700px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .safety-alert, .step-title-row { grid-template-columns: 1fr; } }
`}</style>
