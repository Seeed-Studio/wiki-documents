---
description: Esta guía te ayuda a comenzar de forma segura con el reBot Arm B601-DM, incluyendo la selección del kit, comprobaciones de alimentación, montaje, configuración de ID de motor, calibración y configuración de MotorBridge.
title: Inicio rápido de reBot Arm B601-DM
keywords:
  - reBot
  - B601-DM
  - Brazo robótico
  - Robot
  - LeRobot
  - Pinocchio
  - 6 DOF
slug: /rebot_b601_dm_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-07-04
  author: ZhuYaohui
createdAt: '2026-04-13'
updatedAt: '2026-07-04'
url: https://wiki.seeedstudio.com/es/rebot_b601_dm_getting_started/
---

# Primeros pasos con reBot Arm B601-DM

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Wiki de robótica de Seeed Studio</span>
    <h2>Pon en línea el reBot Arm B601-DM de forma segura, desde el desempaquetado hasta la calibración</h2>
    <p>Esta guía está organizada en torno al flujo real de configuración inicial: identifica tu tipo de kit, comprueba la fuente de alimentación, monta el brazo si es necesario, escribe los ID de los motores, calibra la posición cero y ejecuta tu primera prueba con MotorBridge.</p>
    <div className="hero-actions">
      <a href="#start-path">Elige tu ruta de configuración</a>
      <a href="#motorbridge">Saltar a MotorBridge</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Ruta de lectura recomendada</strong>
    <span>Kit preensamblado: omite el montaje y la configuración de ID de motor. Comienza desde el Paso 3.</span>
    <span>Kit DIY: sigue en orden Paso 1 → Paso 2 → Paso 3.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Advertencia de seguridad: despeja el área de trabajo del robot antes de ejecutar</strong>
    <p>
      Antes de ejecutar cualquier programa que mueva el brazo robótico, despeja todos los objetos de valor,
      objetos frágiles, herramientas, cables y objetos no relacionados dentro de un <strong>radio de 1 metro</strong>
      del área de trabajo del robot. Durante la depuración y la operación, el personal debe permanecer fuera
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
  <strong>Recordatorio de seguridad:</strong> La configuración del reBot Arm implica una fuente de alimentación de 24 V, motores habilitados y articulaciones mecánicas en movimiento. Trabaja sobre un escritorio estable, mantente al menos a 1 metro de distancia durante la depuración y apaga siempre antes de conectar o desconectar motores o conectores XT30.
</div>

<nav className="doc-nav" aria-label="reBot B601-DM quick navigation">
  <a href="#start-path">Ruta de configuración</a>
  <a href="#power">Comprobación de alimentación</a>
  <a href="#assembly">Paso 1 Montaje</a>
  <a href="#motor-id">Paso 2 ID de motores</a>
  <a href="#motorbridge">Paso 3 Calibración</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="start-path" className="section-card">
  <div className="section-title">
    <span>Comienza aquí</span>
    <h2>Primero, identifica qué kit tienes</h2>
    <p>Diferentes configuraciones de kit requieren distintos pasos de configuración. Elegir primero la ruta correcta ayuda a evitar trabajo repetido y previene operaciones inseguras.</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#motorbridge">
      <b>Compré un kit preensamblado</b>
      <span>Omite el Paso 1 y el Paso 2. Comprueba el mazo de cables y la fuente de alimentación, luego ve directamente al Paso 3 para la calibración del punto cero y la primera prueba de movimiento.</span>
      <em>Comienza desde el Paso 3</em>
    </a>
    <a className="path-card" href="#assembly">
      <b>Compré un kit DIY o necesito montarlo yo mismo</b>
      <span>Monta primero la estructura mecánica, luego escribe cada CAN ID / Master ID de motor y finalmente ejecuta la calibración del punto cero.</span>
      <em>Sigue Paso 1 → 2 → 3</em>
    </a>
  </div>

  <div className="tip-box">Se ha verificado que las máquinas virtuales tienen un rendimiento insuficiente para ejecutar la demo y pueden introducir problemas de configuración. Recomendamos usar una máquina física con Ubuntu para controlar el brazo robótico.</div>
</section>

<section className="section-card">
  <div className="section-title">
    <span>Descripción general</span>
    <h2>Proyecto y opciones de compra</h2>
    <p>El proyecto reBot Arm es de código abierto en <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank">GitHub</a>. Esta guía te acompaña a través del flujo básico de trabajo del B601-DM, desde el montaje hasta la operación.</p>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png" alt="reBot Arm B601-DM" />
  </div>

  <div className="badge-row">
    <span>Python 3.10+</span>
    <span>Linux / Ubuntu</span>
    <span>Pinocchio</span>
    <span>MotorBridge</span>
  </div>

  <div className="buy-box">
    <a href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">Obtener reBot Arm B601-DM</a>
  </div>

  | Configuración | Cuerpo | Garra | Motores | Estructura | Recomendado para |
  |:---|:---:|:---:|:---:|:---:|:---|
  | **Kit completo** | ✅ | ✅ | ✅ | ✅ | Usuarios que quieren la experiencia completa de brazo robótico |
  | **Solo garra** | ❌ | ✅ | ❌ | ❌ | Usuarios que ya tienen un brazo y solo necesitan un efector final |
  | **Solo cuerpo (estructura)** | ✅ | ❌ | ❌ | ✅ | Usuarios que ya tienen motores y quieren construir la estructura |
  | **Solo cuerpo (motores)** | ✅ | ❌ | ✅ | ❌ | Usuarios que necesitan el cuerpo motorizado del brazo |
</section>

<section id="power" className="section-card warning-section">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>Despeja todos los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del área de trabajo del robot. Asegúrate de que el brazo esté firmemente fijado antes de ejecutar esta sección.</p>
  </div>
</div>

<div className="section-title">
    <span>Antes de encender</span>
    <h2>Fuente de alimentación: comprueba esto antes de encender</h2>
    <p>El brazo robótico puede no incluir una fuente de alimentación por defecto. Usa una fuente de alimentación fiable de 24 V y ajusta el selector de voltaje según el voltaje de red de tu región.</p>
  </div>

  <div className="danger-box">No uses fuentes de alimentación sin marca o inseguras. Desconecta siempre la alimentación antes de cablear, conectar o desconectar conectores XT30 o cables de motor.</div>

  <div className="power-grid">
    <div>
      <h4>Regiones de 220 V</h4>
      <p>Ajusta el selector de la fuente de alimentación a <strong>230V</strong>.</p>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" alt="Interruptor 230V" />
    </div>
    <div>
      <h4>Regiones de 110 V</h4>
      <p>Ajusta el selector de la fuente de alimentación a <strong>115V</strong>.</p>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" alt="Interruptor 115V" />
    </div>
  </div>

  <p>Puedes comprar el <a href="https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-DM-p-6874.html" target="_blank">kit de adaptador de alimentación MeanWell de 24V 14.6A</a> de código abierto, o usar una fuente compatible MeanWell LRS-350-24 de un distribuidor de confianza. La lista de materiales (BOM) de la carcasa de código abierto está disponible en el repositorio de GitHub y se recomienda solo para desarrolladores con experiencia en montaje de fuentes de alimentación.</p>

  <details className="video-details">
    <summary>Ver vídeo de montaje de la carcasa de la fuente de alimentación</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/DHFA2UfQzUo?si=GYy-Z38qTUW6KPqq" title="Power supply assembly video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>

<section id="assembly" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Paso 1</span>
    <div>
      <h2>Monta el brazo robótico</h2>
      <p>Este paso solo es necesario para kits DIY. Si compraste un kit preensamblado, omite este paso.</p>
    </div>
  </div>

  <div className="tip-box">Si compraste la versión preensamblada, omite este paso y ve directamente a <a href="#motorbridge">Paso 3: Calibración y primera ejecución</a>.</div>

  <div className="checklist-grid">
    <div><strong>Revisa con cuidado</strong><span>El kit contiene muchos tornillos y piezas de aspecto similar. Verifica la especificación y orientación de cada pieza antes de fijarla.</span></div>
    <div><strong>Recomendación de herramienta</strong><span>Se recomienda un destornillador eléctrico. Ajusta el par a un rango bajo-medio, alrededor de 3–6 kgf·cm.</span></div>
    <div><strong>Opera con seguridad</strong><span>Evita lesiones por pellizcos o impactos. Los niños solo deben montar el kit bajo la supervisión de un adulto.</span></div>
  </div>

  <div className="warning-box">En el vídeo de montaje, no es necesario instalar el tornillo D4 × 7 entre el Motor 5 y el Motor 6. Para el kit DIY, los 7 tornillos D4 × 7 incluidos son suficientes para completar el montaje.</div>

  <details className="content-details" open>
    <summary>Abrir vídeo de montaje</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/rfTQoFCfnMc?si=KkEfY0NePxC96Xdu" title="reBot Arm B601-DM assembly video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>

<section id="motor-id" className="section-card step-section">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>Despeja todos los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del área de trabajo del robot. Asegúrate de que el brazo esté firmemente fijado antes de ejecutar esta sección.</p>
  </div>
</div>

<div className="step-title-row">
    <span className="step-pill">Paso 2</span>
    <div>
      <h2>Escribir IDs de motor y posiciones cero</h2>
      <p>Este paso solo es necesario para los kits DIY. Configura el CAN ID y el Master ID para cada motor de articulación.</p>
    </div>
  </div>

  <div className="tip-box">Si compraste la versión preensamblada, omite este paso y continúa directamente a <a href="#motorbridge">Paso 3</a>.</div>

  <div className="danger-list">
    <strong>Antes de reiniciar el motor</strong>
    <ul>
      <li>Prepara 2 abrazaderas de sujeción, preferiblemente de 3 pulgadas o más grandes.</li>
      <li>Utiliza una fuente de alimentación conmutada confiable de 24V 15A con salida XT30.</li>
      <li>Mantente al menos a 1 metro de distancia durante la depuración y el funcionamiento.</li>
      <li>No conectes ni desconectes los motores en caliente. Apaga la alimentación antes de enchufar o desenchufar los conectores XT30 2+2.</li>
      <li>No sobrecargues ni hagas funcionar los motores a exceso de velocidad. Revisa el cableado y los elementos de fijación antes de arrancar.</li>
      <li>Utiliza parámetros de control razonables y una estrategia de parada de emergencia para evitar movimientos fuera de control.</li>
    </ul>
  </div>

  <details className="content-details">
    <summary>Prompt de ayuda para agente de IA</summary>
    <div className="warning-box">Esta sección está en beta. Sigue todas las precauciones de seguridad. Si la sugerencia de la IA entra en conflicto con esta guía, sigue esta guía y contacta con nuestros ingenieros para obtener soporte.</div>
    <p>Copia el siguiente prompt en tu asistente de IA:</p>
    <pre><code>{`Please follow the workflow in AGENTS.md (https://github.com/Welt-liu/reBot-B601-RS-Skills/blob/main/en/AGENTS.md) to help me initialize the robotic arm.`}</code></pre>
  </details>

  <details className="content-details" open>
    <summary>Lista de verificación de preparación</summary>
    <div className="two-col">
      <div>
        <h4>Hardware</h4>
        <ul>
          <li><a href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">reBot Arm B601-DM Robotic Arm × 1</a></li>
          <li><a href="https://www.seeedstudio.com/DM-CAN-USB-Driver-Borad-p-6706.html" target="_blank">Placa adaptadora USB-CAN × 1</a></li>
          <li><a href="https://www.seeedstudio.com/XT30-2-2-Power-Separation-Board-p-6707.html" target="_blank">Placa de separación de señal y potencia × 1</a></li>
          <li>Abrazaderas de carpintería × 2</li>
          <li>Cable USB-C × 1</li>
          <li><a href="https://www.seeedstudio.com/AC-DC-Power-Adapter-IEC-60320-C14-XT30-Female-24V-4-5A-1200mm-L190-W92-5-H36mm-p-6764.html" target="_blank">Fuente de alimentación de 24V 15A × 1</a></li>
        </ul>
      </div>
      <div>
        <h4>Ordenador y software</h4>
        <ul>
          <li>PC con arranque dual: Windows + Ubuntu, o macOS.</li>
          <li><a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DMTool_v2.1.6.8.zip" target="_blank">DM_Tools_v.2.1.6.8.exe</a>, solo para Windows.</li>
        </ul>
      </div>
    </div>
  </details>

  <h3>Asignación de ID de motor</h3>
  <p>Configura el CAN ID y el Master ID para cada motor de articulación según la tabla siguiente.</p>

  | Número de motor | CAN ID | Master ID |
  |:---:|:---:|:---:|
  | Motor 1 | 0x01 | 0x11 |
  | Motor 2 | 0x02 | 0x12 |
  | Motor 3 | 0x03 | 0x13 |
  | Motor 4 | 0x04 | 0x14 |
  | Motor 5 | 0x05 | 0x15 |
  | Motor 6 | 0x06 | 0x16 |
  | Motor 7 | 0x07 | 0x17 |

  <div className="danger-box">El siguiente ejemplo utiliza el Motor 1. Para cada motor de articulación, asegúrate de que el CAN ID y el Master ID coincidan con la tabla anterior.</div>

  <ol className="ordered-steps">
    <li>Abre <strong>DM_Tools</strong>, selecciona el puerto COM USB y establece la velocidad en baudios en <code>921600</code>. Después de la conexión, aparecerán registros en el panel Serial.</li>
    <li>Utiliza el cable de 3 pines para conectar el Motor 1 a la placa adaptadora USB-CAN.</li>
    <li>Abre la página de <strong>Parameter Settings</strong>, haz clic en <strong>Read Parameters</strong>, luego establece <strong>CAN ID</strong> en <code>0x01</code> y <strong>Master ID</strong> en <code>0x11</code>.</li>
    <li>Haz clic en <strong>Write Parameters</strong> para guardar los valores.</li>
    <li>Abre la página de <strong>Debug</strong>, verifica los IDs y haz clic en <strong>Enable</strong>. El LED del motor debería encenderse en verde fijo.</li>
  </ol>

  <div className="image-grid three">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/motor_connect_en.png" alt="Conexión de DM Tools" />
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/motor_id_set_en.png" alt="Configurar ID de motor" />
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/motor_enable_en.png" alt="Habilitar motor" />
  </div>

  <div className="tip-box">Después de la prueba, haz clic en <strong>Disable</strong> para salir del estado habilitado.</div>

  <details className="content-details">
    <summary>Ver puntos de conexión de cables para todos los motores</summary>
    <div className="wide-scroll">
      <table>
        <thead><tr><th>Motor 1</th><th>Motor 2</th><th>Motor 3</th><th>Motor 4</th><th>Motor 5</th><th>Motor 6</th><th>Motor 7</th></tr></thead>
        <tbody><tr>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_ID_set.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_ID_set.jpg" /></td>
        </tr></tbody>
      </table>
    </div>
  </details>

  <details className="content-details">
    <summary>Ver ejemplos de habilitación de motor</summary>
    <div className="wide-scroll">
      <table>
        <thead><tr><th>Motor 1</th><th>Motor 2</th><th>Motor 3</th><th>Motor 4</th><th>Motor 5</th><th>Motor 6</th><th>Motor 7</th></tr></thead>
        <tbody><tr>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_Enable.jpg" /></td>
          <td><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_Enable2.jpg" /></td>
        </tr></tbody>
      </table>
    </div>
  </details>

  <details className="video-details">
    <summary>Ver video de configuración de ID de motor</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/uXuzs1qmj6A?si=lfgXXlF1awhtnvaA" title="Video de configuración de ID de motor" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>

<section id="motorbridge" className="section-card step-section">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificación de seguridad antes de ejecutar</strong>
    <p>Retira todos los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del espacio de trabajo del robot. Asegúrate de que el brazo esté firmemente fijado antes de ejecutar esta sección.</p>
  </div>
</div>

<div className="step-title-row">
    <span className="step-pill">Paso 3</span>
    <div>
      <h2>Calibrar el brazo y ejecutar la primera prueba</h2>
      <p>Este paso se aplica tanto a los kits preensamblados como a los kits DIY. Antes de controlar el brazo, restablece el punto cero e inicia MotorBridge.</p>
    </div>
  </div>

  <div className="tip-box">En las unidades preensambladas, el mazo de cables entre la Articulación 1 y la Articulación 2 puede dejarse sin instalar para evitar la abrasión del cable durante el envío. Después de desempaquetar, localiza el mazo de cables con un conector en codo y un conector recto, luego instálalo entre la Articulación 1 y la Articulación 2.</div>

  <h3>Opcional: imprime las abrazaderas del mazo de cables del Motor 1</h3>
  <p>La tensión a largo plazo en el mazo de cables del Motor 1 puede desgastar el conector y causar un mal contacto eléctrico. Imprimir las piezas siguientes puede reducir este riesgo.</p>

  | Pieza | Imagen | Archivo | Material | Cant. | Ajustes de impresión |
  |:---|:---:|:---|:---|:---:|:---|
  | Abrazadera de mazo de cables de doble cara para Motor 1 | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/DM_Motor1_wiring_harness_clip.jpg" width="100" /> | [Archivo 3D](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/DM_Motor1_wiring_harness_clip.stp) | Bambu Lab PLA negro | 2 | Boquilla de 0,4 mm, altura de capa de 0,2 mm, 30% de relleno |

  <details className="video-details" open>
    <summary>Ver video de calibración y primera ejecución</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/SI1PRQYkhdg?si=E0m7uTF4IhCVZYl_" title="Video de calibración y primera ejecución" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>

  <div className="feature-grid">
    <div><strong>Plataforma MotorBridge</strong><span>Una solución integral de control de motores que admite brazos Damiao, Robstride, Hightorque, MyActuator, Hexfellow y reBot.</span></div>
    <div><strong>Herramientas específicas para reBot</strong><span>Incluye calibración de cero con un clic, escritura de parámetros, control de motor de arrastrar y soltar y visualización de modelo integrada.</span></div>
    <div><strong>Multiplataforma</strong><span>Compatible con Windows, Ubuntu y macOS.</span></div>
  </div>

  <h3>Instalar y iniciar MotorBridge</h3>

  <div className="install-steps">
    <div><span>1</span><div><b>Instalar Miniforge</b><p>Instala Miniforge para crear un entorno aislado de Python y evitar conflictos de paquetes.</p></div></div>
    <div><span>2</span><div><b>Crear el entorno</b><p>Crea un entorno de Python 3.12 y actívalo cada vez que utilices las herramientas de reBot.</p></div></div>
    <div><span>3</span><div><b>Instalar motorbridge</b><p>Instala el paquete de Python MotorBridge en el entorno activado.</p></div></div>
    <div><span>4</span><div><b>Conectar el brazo</b><p>Conecta el brazo por USB y enciéndelo. Los usuarios de Linux deben otorgar permisos de serie.</p></div></div>
    <div><span>5</span><div><b>Iniciar MotorBridge Studio</b><p>Abre MotorBridge Studio en tu navegador y ejecuta el comando de gateway para tu sistema operativo y placa controladora.</p></div></div>
  </div>

  <details className="content-details" open>
    <summary>Referencia de comandos</summary>

    <h4>Ubuntu / Jetson / Raspberry Pi</h4>
    <pre><code>{`wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh`}</code></pre>

    <h4>macOS</h4>
    <pre><code>{`curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
bash Miniforge3-MacOSX-$(uname -m).sh`}</code></pre>

    <h4>Windows</h4>
    <pre><code>{`https://github.com/conda-forge/miniforge/releases`}</code></pre>

    <h4>Crear y activar el entorno</h4>
    <pre><code>{`conda create -y -n rebot python=3.12
conda activate rebot`}</code></pre>

    <h4>Instalar motorbridge</h4>
    <pre><code>{`pip install motorbridge`}</code></pre>

    <h4>Permisos de serie en Linux</h4>
    <pre><code>{`sudo chmod 666 /dev/ttyACM*`}</code></pre>

    <h4>Ejemplo de gateway en Windows</h4>
    <pre><code>{`motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --model 4340P --motor-id 0x01 --feedback-id 0x11 --dt-ms 20`}</code></pre>
  </details>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/motorbridge_help.png" alt="Panel de ayuda de MotorBridge" />
  </div>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>Problemas comunes</h2>
    <p>Utiliza esta sección si el brazo se comporta de forma anormal durante la configuración de ID, la calibración o el arranque del motor.</p>
  </div>

  <details className="content-details" open>
    <summary>Se produce un ruido anormal fuerte inmediatamente después del arranque del motor</summary>
    <p>Esto puede ocurrir si la calibración de parámetros se activó accidentalmente durante la configuración de ID, sobrescribiendo parámetros de fábrica como la inercia del motor. Utiliza <a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe" target="_blank">DM_Tools_v.1.8.0.1.exe</a> en Windows para exportar parámetros de un motor en buen estado del mismo modelo, importarlos en el motor anormal, actualizar el ID CAN correspondiente, escribir los parámetros y continuar con la calibración del punto cero.</p>
    <div className="image-grid two">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/csbd_en.png" alt="Exportación de parámetros en DM tools" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/fix_param_en.png" alt="Importación de parámetros en DM tools" />
    </div>
    <p><a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4310_Default_Parameters.txt" target="_blank">Parámetros predeterminados DM4310</a> · <a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4340P_Default_Parameters.txt" target="_blank">Parámetros predeterminados DM4340P</a></p>
  </details>

  <details className="content-details">
    <summary>Todos los motores comparten el mismo ID CAN</summary>
    <p>Cuando utilices <strong>DM_Tools_v.1.8.0.1.exe</strong> para la calibración del punto cero, no hagas clic en los botones Read o Set junto al campo CAN ID. La página de depuración se comunica a través del bus CAN; hacer clic en Set puede asignar el mismo ID CAN a todos los motores en el bus CAN.</p>
  </details>
</section>

<section className="course-nav-section section-card section-block">
  <div className="section-title">
    <span>Ruta de aprendizaje</span>
    <h2>Continúa con la ruta de aprendizaje de reBot B601-DM</h2>
    <p>Estos tutoriales están diseñados para leerse en el mismo orden que la página de robótica: comienza con la puesta en marcha básica, luego pasa a la recopilación de datos con LeRobot, depuración de cinemática, agarre visual y, por último, integración con ROS2.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-step active" href="/es/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <div>
        <strong>Primeros pasos</strong>
        <small>Completa el desempaquetado, el cableado, las comprobaciones de alimentación, la configuración del controlador, la calibración y las pruebas básicas de movimiento.</small>
      </div>
      <em>Artículo actual</em>
    </a>
    <a className="course-step" href="/es/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <div>
        <strong>Teleoperación y recopilación de datos con LeRobot</strong>
        <small>Teleopera el brazo, conecta cámaras, registra conjuntos de datos, entrena políticas y evalúa el comportamiento del brazo real.</small>
      </div>
      <em>Recopilación de datos</em>
    </a>
    <a className="course-step" href="/es/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <div>
        <strong>Visualización de cinemática con Pinocchio</strong>
        <small>Comprende los modelos de robot, los marcos de coordenadas, FK / IK, la planificación de trayectorias y la compensación de gravedad.</small>
      </div>
      <em>Control</em>
    </a>
    <a className="course-step" href="/es/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <div>
        <strong>Demostración de agarre visual</strong>
        <small>Combina percepción RGB-D, YOLO / OBB o GraspNet, calibración mano-ojo y agarre de objetos reales.</small>
      </div>
      <em>Aplicación</em>
    </a>
    <a className="course-step" href="/es/rebot_arm_b601_dm_ros2_integration/">
      <span className="course-index">5</span>
      <div>
        <strong>Integración con ROS2</strong>
        <small>Conecta el brazo a ROS2, RViz, MoveIt 2, servicios estándar, acciones y flujos de trabajo de planificación.</small>
      </div>
      <em>Integración</em>
    </a>
  </div>
</section>

</div>

<style>{`
.rebot-page { --rb-bg: #ffffff; --rb-card: #ffffff; --rb-soft: #f8fafc; --rb-text: #111827; --rb-muted: #64748b; --rb-border: rgba(148,163,184,0.28); --rb-primary: #2563eb; --rb-primary-soft: #eff6ff; --rb-green: #0f766e; --rb-green-soft: #ccfbf1; --rb-warn: #b45309; --rb-warn-soft: #fffbeb; --rb-danger: #b91c1c; --rb-danger-soft: #fef2f2; --rb-shadow: 0 18px 45px rgba(15,23,42,0.08); color: var(--rb-text); }
.doc-hero { position: relative; overflow: hidden; display: grid; grid-template-columns: minmax(0,1.35fr) minmax(270px,0.75fr); gap: 1.4rem; padding: 2rem; margin: 1.4rem 0 1rem; border: 1px solid rgba(37,99,235,0.18); border-radius: 28px; background: radial-gradient(circle at 12% 10%, rgba(37,99,235,0.16), transparent 36%), radial-gradient(circle at 88% 78%, rgba(20,184,166,0.16), transparent 38%), linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.88)); box-shadow: var(--rb-shadow); }
.eyebrow { display: inline-flex; margin-bottom: 0.65rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.75rem; font-size: clamp(1.55rem, 3vw, 2.35rem); line-height: 1.15; }
.doc-hero p { margin: 0; max-width: 760px; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.15rem; }
.hero-actions a, .buy-box a { display: inline-flex; align-items: center; justify-content: center; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, #2563eb, #14b8a6); box-shadow: 0 12px 24px rgba(37,99,235,0.16); }
.hero-actions a:nth-child(2) { color: var(--rb-primary); background: rgba(255,255,255,0.84); border: 1px solid rgba(37,99,235,0.18); box-shadow: none; }
.hero-card { display: grid; gap: 0.65rem; align-content: center; padding: 1.1rem; border-radius: 20px; background: rgba(255,255,255,0.76); border: 1px solid rgba(148,163,184,0.25); backdrop-filter: blur(10px); }
.hero-card strong { font-size: 1.02rem; }
.hero-card span { display: block; color: var(--rb-muted); line-height: 1.55; font-size: 0.92rem; }
.quick-note, .tip-box, .warning-box, .danger-box { margin: 1rem 0; padding: 0.95rem 1rem; border-radius: 16px; line-height: 1.7; border: 1px solid var(--rb-border); }
.quick-note, .tip-box { color: #075985; background: #f0f9ff; border-color: #bae6fd; }
.warning-box { color: var(--rb-warn); background: var(--rb-warn-soft); border-color: #fde68a; }
.danger-box { color: var(--rb-danger); background: var(--rb-danger-soft); border-color: #fecaca; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(6, minmax(0,1fr)); gap: 0.55rem; margin: 1rem 0 1.8rem; padding: 0.65rem; border-radius: 18px; border: 1px solid var(--rb-border); background: rgba(255,255,255,0.88); backdrop-filter: blur(12px); box-shadow: 0 12px 28px rgba(15,23,42,0.06); }
.doc-nav a { padding: 0.68rem 0.5rem; border-radius: 12px; text-align: center; text-decoration: none !important; color: #334155; background: var(--rb-soft); font-weight: 760; font-size: 0.84rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(37,99,235,0.10); }
.section-card { margin: 1.4rem 0; padding: 1.45rem; border-radius: 24px; background: var(--rb-card); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title span { display: inline-flex; margin-bottom: 0.3rem; color: var(--rb-primary); font-size: 0.76rem; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 850; }
.section-title h2, .step-title-row h2 { margin: 0.15rem 0 0.45rem; }
.section-title p, .step-title-row p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.path-grid, .power-grid, .checklist-grid, .feature-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0.9rem; margin-top: 1rem; }
.checklist-grid, .feature-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
.path-card, .checklist-grid div, .feature-grid div, .power-grid div { display: block; padding: 1rem; border-radius: 18px; background: var(--rb-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; }
.path-card:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.path-card b, .checklist-grid strong, .feature-grid strong { display: block; margin-bottom: 0.45rem; }
.path-card span, .checklist-grid span, .feature-grid span { display: block; color: var(--rb-muted); line-height: 1.58; font-size: 0.91rem; }
.path-card em { display: inline-flex; margin-top: 0.8rem; padding: 0.32rem 0.58rem; border-radius: 999px; color: var(--rb-green); background: var(--rb-green-soft); font-style: normal; font-size: 0.75rem; font-weight: 850; }
.path-card.recommended { border-color: rgba(20,184,166,0.36); background: linear-gradient(180deg, rgba(240,253,250,0.8), var(--rb-soft)); }
.image-frame { margin: 1rem 0; padding: 0.7rem; border-radius: 18px; background: var(--rb-soft); border: 1px solid var(--rb-border); text-align: center; }
.image-frame img, .image-grid img, .power-grid img { max-width: 100%; border-radius: 12px; }
.badge-row { display: flex; flex-wrap: wrap; gap: 0.55rem; margin: 1rem 0; }
.badge-row span { padding: 0.42rem 0.68rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); font-size: 0.8rem; font-weight: 850; }
.buy-box { margin: 1rem 0; text-align: center; }
.step-title-row { display: flex; gap: 0.9rem; align-items: flex-start; margin-bottom: 1rem; }
.step-pill { flex: 0 0 auto; padding: 0.5rem 0.75rem; border-radius: 999px; background: var(--rb-primary); color: #fff; font-weight: 900; }
.danger-list { margin: 1rem 0; padding: 1rem 1.1rem; border-radius: 18px; color: var(--rb-danger); background: var(--rb-danger-soft); border: 1px solid #fecaca; }
.danger-list strong { display: block; margin-bottom: 0.5rem; }
.danger-list ul { margin: 0; padding-left: 1.2rem; }
.content-details, .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 18px; background: var(--rb-soft); overflow: hidden; }
.content-details summary, .video-details summary { cursor: pointer; padding: 0.9rem 1rem; font-weight: 850; color: var(--rb-text); }
.content-details > *:not(summary), .video-details > *:not(summary) { margin-left: 1rem; margin-right: 1rem; }
.video-container { position: relative; width: calc(100% - 2rem); margin: 0 1rem 1rem; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 16px; background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.two-col, .image-grid.three, .image-grid.two { display: grid; gap: 1rem; }
.two-col, .image-grid.two { grid-template-columns: repeat(2, minmax(0,1fr)); }
.image-grid.three { grid-template-columns: repeat(3, minmax(0,1fr)); }
.ordered-steps li { margin: 0.5rem 0; line-height: 1.65; }
.wide-scroll { overflow-x: auto; padding-bottom: 0.75rem; }
.wide-scroll table { min-width: 900px; }
.wide-scroll img { max-width: 120px; border-radius: 10px; }
.install-steps { display: grid; gap: 0.75rem; margin: 1rem 0; }
.install-steps > div { display: grid; grid-template-columns: auto minmax(0,1fr); gap: 0.8rem; align-items: start; padding: 0.9rem; border-radius: 16px; background: var(--rb-soft); border: 1px solid var(--rb-border); }
.install-steps span { width: 32px; height: 32px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; background: var(--rb-primary); color: #fff; font-weight: 900; }
.install-steps b { display: block; margin-bottom: 0.25rem; }
.install-steps p { margin: 0; color: var(--rb-muted); line-height: 1.55; }
.rebot-page pre { border-radius: 14px; overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111315; --rb-card: #1f2023; --rb-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343842; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-green: #5eead4; --rb-green-soft: rgba(20,184,166,0.16); --rb-shadow: 0 18px 45px rgba(0,0,0,0.30); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 10%, rgba(37,99,235,0.25), transparent 36%), radial-gradient(circle at 88% 78%, rgba(20,184,166,0.18), transparent 38%), linear-gradient(135deg, rgba(30,41,59,0.94), rgba(17,24,39,0.9)); border-color: #334155; }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a, html[data-theme='dark'] .hero-actions a:nth-child(2) { background: #24262a; color: #e5e7eb; border-color: #343842; }
html[data-theme='dark'] .quick-note, html[data-theme='dark'] .tip-box { color: #bae6fd; background: rgba(14,165,233,0.10); border-color: rgba(125,211,252,0.22); }
html[data-theme='dark'] .warning-box { color: #fde68a; background: rgba(245,158,11,0.12); border-color: rgba(253,230,138,0.22); }
html[data-theme='dark'] .danger-box, html[data-theme='dark'] .danger-list { color: #fecaca; background: rgba(239,68,68,0.10); border-color: rgba(252,165,165,0.22); }
@media (max-width: 920px) { .doc-hero, .path-grid, .power-grid, .checklist-grid, .feature-grid, .two-col, .image-grid.two, .image-grid.three { grid-template-columns: 1fr; } .doc-nav { grid-template-columns: repeat(2, minmax(0,1fr)); position: static; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.05rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .step-title-row { display: block; } .step-pill { display: inline-flex; margin-bottom: 0.7rem; } }

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


`}</style>
