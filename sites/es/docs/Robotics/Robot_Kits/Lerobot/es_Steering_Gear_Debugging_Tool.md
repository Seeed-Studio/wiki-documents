---
description: Herramienta de depuración de engranajes de dirección para SO-ARM en LeRobot.
title: Herramienta de depuración de engranajes de dirección para SO-ARM en LeRobot
keywords:
  - Lerobot
  - SO-ARM
  - Robótica
  - Servo
  - Calibración
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_steering_gear_debugging_tool
last_update:
  date: 6/29/2026
  author: ZhangJiaQuan
url: https://wiki.seeedstudio.com/es/lerobot_steering_gear_debugging_tool/
createdAt: '2026-06-29'
updatedAt: '2026-06-29'
---

# Herramienta de depuración de engranajes de dirección para SO-ARM en LeRobot

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM × LeRobot</span>
    <h2>Depura IDs de servos, posiciones neutras, par y archivos de calibración de LeRobot con una herramienta GUI</h2>
    <p>La herramienta de depuración de engranajes de dirección, también llamada <strong>Seeed_RoboController</strong>, te ayuda a inspeccionar el estado de los servos de SO-ARM, reescribir IDs de servos, establecer valores neutros, controlar servos individuales y gestionar archivos de calibración de LeRobot tanto para el brazo líder como para el seguidor.</p>
    <div className="hero-actions">
      <a href="#quick-path">Ver flujo de trabajo</a>
      <a href="#install">Instalar herramienta</a>
      <a href="#servo-id">Corregir IDs de servos</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" alt="SO-ARM Steering Gear Debugging Tool" />
    <strong>Depuración de servos · Recuperación de ID · Calibración neutra</strong>
    <span>Utiliza esta herramienta cuando falte un servo, haya un ID duplicado, la posición neutra sea incorrecta o sea necesario inspeccionar archivos de calibración de LeRobot.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Advertencia de seguridad: la alimentación y el par pueden mover el brazo de forma inesperada</strong>
    <p>Antes de habilitar el par o mover cualquier servo, despeja el espacio de trabajo del robot y mantén las manos alejadas de las articulaciones, engranajes, eslabones y la garra. Al deshabilitar el par, el brazo puede quedar flojo y caer, así que sujétalo con la mano.</p>
    <ul>
      <li>Para SO101 Pro, usa <strong>5V para el brazo líder</strong> y <strong>12V para el brazo seguidor</strong>.</li>
      <li>No escribas IDs de servos mientras varios servos con IDs duplicados estén conectados al mismo bus.</li>
      <li>Mueve los deslizadores lentamente. Las partes mecánicas pueden bloquear el servo antes de que la GUI alcance su valor mínimo o máximo.</li>
      <li>Apaga el brazo antes de reconectar los mazos de cables de los servos o cambiar el cableado.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="SO-ARM debugging tool quick navigation">
  <a href="#quick-path">Flujo de trabajo</a>
  <a href="#overview">Descripción general</a>
  <a href="#install">Instalar</a>
  <a href="#check-servos">Comprobar</a>
  <a href="#servo-id">IDs de servos</a>
  <a href="#neutral">Neutro</a>
  <a href="#single-servo">Control</a>
  <a href="#calibration-files">Archivos</a>
  <a href="#faq">Preguntas frecuentes</a>
</nav>

<section id="quick-path" className="section-card">
  <div className="section-title">
    <span>Comienza aquí</span>
    <h2>Flujo de trabajo de depuración recomendado</h2>
    <p>Sigue este orden cuando un brazo líder o seguidor SO-ARM no pueda detectarse, tenga IDs de servos duplicados, tenga una posición neutra incorrecta o no pueda completar la calibración de LeRobot.</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#install"><span>Paso 0</span><strong>Instalar y lanzar la herramienta</strong><p>Clona Seeed_RoboController, instala las dependencias, comprueba el entorno y abre la GUI.</p><em>Obligatorio</em></a>
    <a className="path-card" href="#check-servos"><span>Paso 1</span><strong>Comprobar el estado de los servos</strong><p>Confirma si se detectan los servos 1-6. Los servos que faltan suelen indicar problemas de cableado, alimentación o ID.</p><em>Leer primero</em></a>
    <a className="path-card" href="#servo-id"><span>Paso 2</span><strong>Recuperar IDs duplicados</strong><p>Desconecta la cadena de servos y conecta solo un servo a la vez antes de reescribir los IDs.</p><em>Reparación de ID</em></a>
    <a className="path-card" href="#neutral"><span>Paso 3</span><strong>Escribir valores neutros</strong><p>Mueve el brazo a la postura neutra correcta y luego escribe la posición actual como el valor neutro del servo.</p><em>Centrado</em></a>
    <a className="path-card" href="#single-servo"><span>Paso 4</span><strong>Probar servos individuales</strong><p>Habilita el par y mueve cada servo lentamente para verificar dirección, voltaje, temperatura, carga y estado.</p><em>Prueba de movimiento</em></a>
    <a className="path-card" href="#calibration-files"><span>Paso 5</span><strong>Gestionar archivos de calibración</strong><p>Ejecuta, modifica, elimina o crea archivos de calibración de LeRobot para los brazos líder y seguidor.</p><em>LeRobot</em></a>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Descripción general</span>
    <h2>Para qué se utiliza esta herramienta</h2>
    <p>La GUI está diseñada para el montaje, reparación y mantenimiento de SO-ARM100 / SO-ARM101. Es especialmente útil antes o después de ejecutar <code>{`lerobot-setup-motors`}</code> y <code>{`lerobot-calibrate`}</code>.</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Detección del estado de los servos</b><span>Comprueba rápidamente si se detectan los IDs de servos 1-6 y si la comunicación básica funciona.</span></div>
    <div className="module-summary-card"><b>Recuperación de ID</b><span>Reescribe IDs de servos incorrectos o duplicados conectando un servo a la vez.</span></div>
    <div className="module-summary-card"><b>Calibración neutra</b><span>Establece la posición actual del servo como valor neutro y verifica si el brazo vuelve a la postura media esperada.</span></div>
    <div className="module-summary-card"><b>Control de un solo servo</b><span>Habilita el par, mueve un servo lentamente e inspecciona posición, voltaje, temperatura, velocidad, carga, corriente, movimiento, modelo y estado.</span></div>
    <div className="module-summary-card"><b>Registros avanzados</b><span>Lee y escribe datos de registros, cambia la velocidad en baudios o restaura los ajustes de fábrica cuando sea necesario.</span></div>
    <div className="module-summary-card"><b>Gestión de archivos de calibración</b><span>Selecciona, ejecuta, modifica, elimina o crea archivos de calibración de LeRobot para los brazos líder y seguidor.</span></div>
  </div>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Paso 0</span>
    <div>
      <h2>Instalar y lanzar Seeed_RoboController</h2>
      <p>La herramienta es compatible con Windows, Ubuntu y macOS. Se recomienda instalarla dentro de tu entorno virtual de LeRobot.</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">0.1</span><strong>Clonar repositorio</strong><p>Descarga la herramienta de depuración GUI desde el repositorio de GitHub de Seeed-Projects.</p></div>
    <div className="step-card"><span className="step-mini">0.2</span><strong>Instalar dependencias</strong><p>Instala las dependencias de Python en el entorno de LeRobot u otro entorno virtual dedicado.</p></div>
    <div className="step-card"><span className="step-mini">0.3</span><strong>Comprobar entorno</strong><p>Ejecuta la comprobación de configuración y asegúrate de que informe que el entorno ha sido aprobado.</p></div>
    <div className="step-card"><span className="step-mini">0.4</span><strong>Lanzar GUI</strong><p>Inicia la GUI con selección interactiva de puertos o especifica manualmente los puertos si es necesario.</p></div>
  </div>

  <details className="content-details">
    <summary>Comandos de instalación</summary>
    <pre><code>{`git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController

# Recommended: run this inside your LeRobot virtual environment.
pip install -r requirements.txt

# Environment check. Expected result: [OK] Environment check passed
python setup.py`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Lanzar la GUI</summary>
    <pre><code>{`# Interactive port selection
python -m src.gui.factory_calibration_tool

# Optional: manually specify ports if needed
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1`}</code></pre>
  </details>
</section>

<section id="check-servos" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Paso 1</span>
    <div>
      <h2>Comprobar si los servos se detectan correctamente</h2>
      <p>Comienza comprobando si se detectan los servos 1-6. Si los seis servos se detectan correctamente, el bus de servos y las funciones básicas suelen estar funcionando.</p>
    </div>
  </div>

  <div className="image-wrap">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" alt="All servos detected in the debugging tool" />
  </div>

  <div className="notice-grid">
    <div className="notice-card"><strong>Caso normal</strong><span>Los servos 1-6 se detectan todos. Puedes continuar con las pruebas de neutro, el control de un solo servo o la gestión de archivos de calibración de LeRobot.</span></div>
    <div className="notice-card warning"><strong>Caso anómalo</strong><span>Si algunos servos no se detectan, primero comprueba el cableado y la alimentación. Luego cierra y vuelve a abrir la GUI. Si el problema persiste, es posible que los IDs de los servos estén duplicados o escritos de forma incorrecta.</span></div>
  </div>

  <details className="content-details">
    <summary>Ejemplo: servos ausentes o detectados incorrectamente</summary>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" alt="Servo missing or not detected" />
    </div>
    <p>Esto puede ocurrir si el comando para la calibración de todo el brazo se utilizó accidentalmente como comando de configuración de IDs de servos, o si varios servos ahora comparten el mismo ID.</p>
  </details>
</section>

<section id="servo-id" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Importante: conecta solo un servo al reescribir IDs</strong>
      <p>Los servos comparten un bus serie. Si varios servos con el mismo ID están conectados, cambiar un ID puede cambiar todos los servos con ese ID. Desconecta la cadena de servos y reescribe los IDs uno por uno.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Paso 2</span>
    <div>
      <h2>Recuperar IDs de servos duplicados o incorrectos</h2>
      <p>Si un servo conectado físicamente se muestra con un número incorrecto, haz clic en el servo detectado y cambia el ID de nuevo al número de articulación correcto.</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">2.1</span><strong>Desconectar los mazos de servos</strong><p>Retira los mazos en cadena para que solo un servo pueda estar conectado a la placa controladora.</p></div>
    <div className="step-card"><span className="step-mini">2.2</span><strong>Conectar un solo servo</strong><p>Conecta únicamente el servo que quieres reescribir. No es necesario desmontar completamente el brazo.</p></div>
    <div className="step-card"><span className="step-mini">2.3</span><strong>Comparar la articulación física y el ID detectado</strong><p>Por ejemplo, el servo conectado puede ser la articulación 6, mientras que la GUI lo detecta como ID 4.</p></div>
    <div className="step-card"><span className="step-mini">2.4</span><strong>Escribir el ID correcto</strong><p>Haz clic en el servo detectado en la GUI y cambia su ID al número de articulación esperado.</p></div>
    <div className="step-card"><span className="step-mini">2.5</span><strong>Repetir y volver a conectar</strong><p>Repite para otros servos y luego vuelve a conectar los mazos uno por uno.</p></div>
  </div>

  <details className="content-details">
    <summary>Paso 2.1: retirar los mazos de cables de los servos</summary>
    <p>Retira los mazos en este orden: servo 6 a 5, servo 5 a 4, servo 4 a 3, servo 3 a 2, servo 2 a 1 y, por último, servo 1 a la placa de control.</p>
    <div className="image-grid">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/03.webp" alt="Remove harness between servo 6 and servo 5" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/04.webp" alt="Remove harness between servo 5 and servo 4" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/05.webp" alt="Remove harness between servo 4 and servo 3" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/06.webp" alt="Remove harness between servo 3 and servo 2" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/07.webp" alt="Remove harness between servo 2 and servo 1" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/08.webp" alt="Remove harness between servo 1 and control board" />
    </div>
  </details>

  <details className="content-details">
    <summary>Paso 2.2: conectar un servo y reescribir su ID</summary>
    <p>Conecta solo un servo a la placa controladora. El siguiente ejemplo muestra cómo conectar el servo 6 para la recuperación del ID.</p>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" alt="Connect only one servo to the driver board" />
    </div>
    <p>Si la GUI muestra el ID 4 pero el servo conectado físicamente debería ser el servo 6, haz clic en el servo 4 y cambia su ID a 6.</p>
    <div className="image-grid two-col">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" alt="Wrong servo ID detected" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" alt="Change servo ID in GUI" />
    </div>
  </details>
</section>

<section id="neutral" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Sujeta el brazo al desactivar el par</strong>
      <p>Después de hacer clic en <strong>Serial Port Disable Motors</strong>, el brazo quedará flojo. Sujeta el brazo antes de desactivar el par.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>Escribir el valor neutro en el servo</h2>
      <p>La calibración neutra escribe la postura física actual como el valor medio de cada servo. Esto es útil cuando la calibración de LeRobot informa valores anómalos de magnitud o de rango.</p>
    </div>
  </div>

  <div className="image-wrap">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" alt="SO-ARM neutral position" />
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">3.1</span><strong>Ejecutar prueba neutra</strong><p>Haz clic en <strong>Serial Port Neutral Test</strong> y comprueba si el brazo se mueve a la postura neutra esperada.</p></div>
    <div className="step-card"><span className="step-mini">3.2</span><strong>Mover a la postura neutra</strong><p>Si la postura es incorrecta, mueve manualmente el brazo a la posición neutra mostrada arriba.</p></div>
    <div className="step-card"><span className="step-mini">3.3</span><strong>Escribir valor neutro</strong><p>Haz clic en <strong>Serial Port Neutral Calibration</strong> para escribir la posición actual como el valor neutro del servo.</p></div>
    <div className="step-card"><span className="step-mini">3.4</span><strong>Desactivar el par con cuidado</strong><p>Haz clic en <strong>Serial Port Disable Motors</strong> solo mientras sostienes el brazo con la mano.</p></div>
  </div>

  <details className="content-details">
    <summary>GUI de calibración neutra</summary>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" alt="Neutral calibration in GUI" />
    </div>
  </details>
</section>

<section id="single-servo" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 4</span>
    <div>
      <h2>Controlar e inspeccionar un solo servo</h2>
      <p>Utiliza el control de un solo servo para verificar la dirección, la comunicación, el par, la temperatura y el estado. Muévete lentamente y evita los topes mecánicos.</p>
    </div>
  </div>

  <div className="image-grid two-col">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" alt="Single servo control neutral positions" />
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/15.png" alt="Single servo movement after torque is enabled" />
  </div>

  <div className="notice-grid">
    <div className="notice-card warning"><strong>No arrastres los deslizadores hasta el extremo</strong><span>La estructura impresa del brazo puede bloquear físicamente algunas posiciones antes de que el deslizador llegue a 0 o al máximo.</span></div>
    <div className="notice-card"><strong>Activa primero el par</strong><span>Puedes activar todo el par con un solo clic o activar el par de un solo servo antes de moverlo.</span></div>
  </div>

  <details className="content-details">
    <summary>Campos de estado del servo</summary>
    <div className="api-grid">
      <div className="api-card"><b>Pos</b><span>Posición</span></div>
      <div className="api-card"><b>V</b><span>Voltaje</span></div>
      <div className="api-card"><b>T</b><span>Temperatura</span></div>
      <div className="api-card"><b>Spd</b><span>Velocidad</span></div>
      <div className="api-card"><b>Load</b><span>Par / carga</span></div>
      <div className="api-card"><b>Cur</b><span>Corriente</span></div>
      <div className="api-card"><b>Mov</b><span>Estado de movimiento</span></div>
      <div className="api-card"><b>Model</b><span>Modelo y autoridad</span></div>
      <div className="api-card"><b>Status</b><span>Normal, sobrecorriente o sobrecarga</span></div>
    </div>
  </details>
</section>

<section id="advanced" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 5</span>
    <div>
      <h2>Usar herramientas avanzadas solo cuando sea necesario</h2>
      <p>El panel avanzado puede leer o escribir datos de registros, modificar la velocidad en baudios y restaurar los ajustes de fábrica. Úsalo con cuidado porque los valores incorrectos pueden hacer que el servo sea difícil de acceder.</p>
    </div>
  </div>

  <details className="content-details">
    <summary>Panel de herramientas avanzadas</summary>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" alt="Advanced servo tools" />
    </div>
    <ul>
      <li>Leer los datos de la dirección de registro correspondiente.</li>
      <li>Escribir los datos de registro correspondientes.</li>
      <li>Modificar la velocidad en baudios.</li>
      <li>Restaurar los ajustes de fábrica.</li>
    </ul>
  </details>
</section>

<section id="calibration-files" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 6</span>
    <div>
      <h2>Gestionar archivos de calibración de LeRobot</h2>
      <p>La GUI puede ejecutar, modificar, eliminar o crear archivos de calibración para los brazos líder y seguidor de SO-ARM. Esto es útil al sustituir servos o al recuperarse de una calibración incorrecta.</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Ejecutar archivo de calibración</b><span>Selecciona un archivo de calibración existente de líder o seguidor y úsalo para una prueba.</span></div>
    <div className="module-summary-card"><b>Modificar archivo de calibración</b><span>Inspecciona y ajusta un archivo de calibración existente cuando sepas qué parámetro debe cambiar.</span></div>
    <div className="module-summary-card"><b>Eliminar archivo de calibración</b><span>Elimina los archivos de calibración incorrectos antes de ejecutar de nuevo una calibración limpia de LeRobot.</span></div>
    <div className="module-summary-card"><b>Crear archivo nuevo</b><span>Utiliza el asistente de calibración de la GUI para registrar los valores neutros, mínimos y máximos de cada servo.</span></div>
  </div>

  <details className="content-details">
    <summary>Panel de gestión de archivos de calibración</summary>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/17.png" alt="Robotic arm calibration file management" />
    </div>
  </details>

  <details className="content-details">
    <summary>Crear un nuevo archivo de calibración con el asistente de calibración de la GUI</summary>
    <p>Haz clic en <strong>GUI Calibration Wizard</strong> y luego selecciona el tipo de robot y el número de puerto correspondientes.</p>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/18.png" alt="GUI Calibration Wizard" />
    </div>
    <p>El asistente puede registrar los valores de calibración mínimos, máximos y neutros de cada servo.</p>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/19.png" alt="Record range and neutral values" />
    </div>
    <p>Primero, coloca cada servo en la posición neutra y haz clic en <strong>Record Neutral Value</strong> para los servos 1-6 uno por uno.</p>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/20.png" alt="Record neutral value for each servo" />
    </div>
    <p>Luego haz clic en <strong>Start Recording Range</strong> para cada servo, gíralo hasta los rangos máximo y mínimo y haz clic en <strong>Stop Recording Range</strong>. Repite esto para cada servo, pon nombre al archivo de calibración y guárdalo.</p>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>Casos comunes de depuración</h2>
    <p>La mayoría de los problemas de depuración de servos SO-ARM son causados por el cableado, una fuente de alimentación incorrecta, IDs duplicados, permisos faltantes o archivos de calibración de LeRobot desactualizados.</p>
  </div>

  <details className="content-details">
    <summary>1. Algunos servos no se detectan</summary>
    <ul>
      <li>Comprueba si la fuente de alimentación está conectada y utiliza el voltaje correcto.</li>
      <li>Comprueba si el mazo de cables de 3 pines del servo está suelto o desconectado.</li>
      <li>Cierra la GUI y vuelve a abrirla.</li>
      <li>Si el problema persiste, desconecta la cadena de servos y reescribe los IDs uno por uno.</li>
    </ul>
  </details>

  <details className="content-details">
    <summary>2. El servo conectado se muestra con el ID incorrecto</summary>
    <p>Esto significa que el ID del servo es incorrecto. Conecta solo ese servo a la placa controladora, haz clic en el servo detectado en la GUI y cambia el ID de nuevo al número de articulación esperado.</p>
  </details>

  <details className="content-details">
    <summary>3. ¿Por qué debo conectar solo un servo al escribir IDs?</summary>
    <p>Los servos SO-ARM comparten el mismo bus serie. Si se conectan varios servos con el mismo ID, escribir un nuevo ID puede cambiar todos los servos con ese ID duplicado al mismo tiempo.</p>
  </details>

  <details className="content-details">
    <summary>4. El brazo cae después de desactivar el par</summary>
    <p>Esto es esperado. Cuando el par está desactivado, los servos dejan de mantener la posición y el brazo queda flojo. Sujeta siempre el brazo con la mano antes de desactivar el par.</p>
  </details>

  <details className="content-details">
    <summary>5. La calibración de LeRobot sigue mostrando valores anómalos después de la calibración neutral</summary>
    <p>Elimina los archivos de calibración antiguos y ejecuta de nuevo la calibración de LeRobot. Comprueba los directorios de calibración tanto del robot como del teleoperador:</p>
    <pre><code>{`rm -rf ~/.cache/huggingface/lerobot/calibration/robots/*
rm -rf ~/.cache/huggingface/lerobot/calibration/teleoperators/*`}</code></pre>
  </details>
</section>

<section className="section-card course-path-section">
  <div className="section-title">
    <span>Seguir aprendiendo</span>
    <h2>Ruta de aprendizaje de SO-ARM</h2>
    <p>Utiliza la herramienta de depuración junto con el tutorial de SO-ARM LeRobot. Una vez que los IDs de los servos y las posiciones neutrales sean correctos, continúa con la teleoperación, la recopilación de datos, la simulación y el entrenamiento de políticas.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/es/lerobot_so100m_new/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Introducción a SO-ARM LeRobot</strong><span>Ensamblar SO-ARM100 / SO-ARM101, instalar LeRobot, calibrar, teleoperar, registrar conjuntos de datos, entrenar y evaluar políticas.</span></span>
      <span className="course-tag">Guía principal</span>
    </a>
    <a className="course-path-item active" href="/es/lerobot_steering_gear_debugging_tool/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>Herramienta de depuración de servos</strong><span>Recuperar IDs de servos, escribir valores neutrales, probar servos individuales y gestionar archivos de calibración.</span></span>
      <span className="course-tag">Artículo actual</span>
    </a>
    <a className="course-path-item" href="/es/simulate_soarm101_by_leisaac/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Simulación con LeIsaac</strong><span>Comprender el modelo SO-ARM, la escena de simulación y la configuración de tareas antes de Sim2Real.</span></span>
      <span className="course-tag">Simulación</span>
    </a>
    <a className="course-path-item" href="/es/training_soarm101_policy_with_isaacLab/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Aprendizaje por refuerzo con Isaac Lab</strong><span>Entrenar políticas en simulación y aprender el flujo de trabajo de aprendizaje por refuerzo.</span></span>
      <span className="course-tag">RL</span>
    </a>
    <a className="course-path-item" href="/es/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>SO101 con NVIDIA GR00T</strong><span>Ajustar y desplegar un modelo VLA / IA encarnada para flujos de trabajo de SO-ARM.</span></span>
      <span className="course-tag">VLA</span>
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
.rebot-page * { box-sizing: border-box; }
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
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(92px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.86rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); scroll-margin-top: 6rem; }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.path-grid, .step-card-grid, .module-summary-grid, .notice-grid, .api-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.95rem; }
.path-card, .step-card, .module-summary-card, .notice-card, .api-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: linear-gradient(180deg, var(--rb-surface), var(--rb-surface-soft)); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15,23,42,0.05); transition: all 0.18s ease; }
.path-card:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.36); box-shadow: 0 16px 32px rgba(37,99,235,0.10); }
.path-card span, .step-mini { display: inline-flex; align-items: center; justify-content: center; width: fit-content; min-height: 2rem; padding: 0.28rem 0.65rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-size: 0.82rem; font-weight: 900; }
.path-card strong, .step-card strong, .module-summary-card b, .notice-card strong, .api-card b { color: var(--rb-text); font-size: 1rem; }
.path-card p, .step-card p, .module-summary-card span, .notice-card span, .api-card span { margin: 0; color: var(--rb-muted); line-height: 1.62; font-size: 0.92rem; }
.path-card em { width: fit-content; margin-top: 0.2rem; padding: 0.32rem 0.62rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.18); font-style: normal; font-weight: 800; font-size: 0.78rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.42); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.notice-card.warning { border-color: rgba(245,158,11,0.34); background: linear-gradient(135deg, rgba(255,251,235,0.95), rgba(255,247,237,0.88)); }
.content-details { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; }
.content-details summary::after { content: "Expand"; float: right; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; }
.content-details[open] summary::after { content: "Collapse"; }
.step-title-row { display: flex; gap: 0.95rem; align-items: flex-start; margin-bottom: 1rem; }
.step-pill { display: inline-flex; padding: 0.45rem 0.8rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); border: 1px solid rgba(37,99,235,0.18); font-weight: 900; white-space: nowrap; }
.image-wrap { margin: 1rem 0; text-align: center; }
.image-wrap img, .image-grid img { width: 100%; max-width: 900px; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 10px 24px rgba(15,23,42,0.06); background: #fff; }
.image-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.85rem; margin: 1rem 0; }
.image-grid.two-col { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); }
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
html[data-theme='dark'] .path-card, html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .notice-card, html[data-theme='dark'] .api-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .path-card.recommended, html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
html[data-theme='dark'] .notice-card.warning { background: linear-gradient(135deg, rgba(245,158,11,0.14), rgba(251,146,60,0.10)); }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
@media (max-width: 900px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 720px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } .step-title-row { display: grid; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .safety-alert { grid-template-columns: 1fr; } .image-grid.two-col { grid-template-columns: 1fr; } }
`}</style>
