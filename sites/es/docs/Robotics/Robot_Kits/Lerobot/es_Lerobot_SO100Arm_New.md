---
description: Este Wiki proporciona un flujo de trabajo estructurado de LeRobot para SO-ARM100 / SO-ARM101 que abarca impresión 3D, configuración de servos, ensamblaje, calibración, teleoperación, integración de cámara, recopilación de conjuntos de datos, entrenamiento y evaluación.
title: SO-ARM100 / SO-ARM101 con LeRobot
keywords:
  - Lerobot
  - Huggingface
  - SO-ARM100
  - SO-ARM101
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_so100m_new
sku: 114993666,114993667,114993668,101090144
last_update:
  date: 2026-07-05
  author: ZhangJiaQuan
translation:
  skip:
    - zh-CN
createdAt: '2025-06-05'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/es/lerobot_so100m_new/
---

# SO-ARM100 / SO-ARM101 con LeRobot

<div className="rebot-page">

  <section className="doc-hero">
    <div>
      <span className="eyebrow">SO-ARM × LeRobot</span>
      <h2>Pasa desde el ensamblaje y la configuración de servos hasta la teleoperación, la recopilación de datos y el entrenamiento de políticas</h2>
      <p>Esta guía está organizada como una ruta práctica de puesta en marcha para usuarios de SO-ARM100 / SO-ARM101. Prepararás las piezas impresas, instalarás LeRobot, configurarás los ID de los servos, ensamblarás los brazos líder y seguidor, calibrarás el sistema completo, teleoperarás el robot, añadirás cámaras, registrarás conjuntos de datos, entrenarás políticas y las evaluarás en hardware real.</p>
      <div className="hero-actions">
        <a href="#course-steps">Ver flujo de pasos</a>
        <a href="#install-lerobot">Instalar LeRobot</a>
        <a href="#record-dataset">Iniciar recopilación de datos</a>
      </div>
    </div>
    <div className="hero-card image-card">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="SO-ARM100 and SO-ARM101 with LeRobot" />
      <strong>SO-ARM10x · LeRobot</strong>
      <span>Impresión 3D · Configuración de servos · Teleoperación · Conjunto de datos · Entrenamiento</span>
    </div>
  </section>

  <div className="safety-alert">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Advertencia de seguridad: despeja el área de trabajo del robot antes de ejecutar</strong>
      <p>Antes de ejecutar cualquier programa que mueva el brazo robótico, despeja todos los objetos de valor, objetos frágiles, herramientas, cables y objetos no relacionados dentro de un <strong>radio de 1 metro</strong> del área de trabajo del robot. Mantén a las personas alejadas del rango de movimiento durante la calibración, teleoperación, grabación, reproducción, evaluación y despliegue de políticas.</p>
      <ul>
        <li>No toques las articulaciones, servos, eslabones, pinza o efector final después de encender el robot.</li>
        <li>Comprueba la fuente de alimentación correcta antes de cada paso. SO101 Pro usa <strong>5V para el brazo líder</strong> y <strong>12V para el brazo seguidor</strong>.</li>
        <li>Si se produce un movimiento anómalo, ruido, vibración, cables sueltos, pérdida de alimentación o pérdida de comunicación, detén el programa inmediatamente y apaga el sistema antes de la inspección.</li>
        <li>Apaga siempre el sistema antes de conectar o desconectar cables de servos, placas controladoras, cables USB-C o conectores de alimentación.</li>
      </ul>
    </div>
  </div>

  <nav className="doc-nav" aria-label="SO-ARM LeRobot quick navigation">
    <a href="#course-steps">Flujo de trabajo</a>
    <a href="#overview">Descripción general</a>
    <a href="#printing">Impresión 3D</a>
    <a href="#install-lerobot">Instalar</a>
    <a href="#motor-setup">Configuración de servos</a>
    <a href="#calibration">Calibración</a>
    <a href="#teleoperation">Teleoperación</a>
    <a href="#camera">Cámara</a>
    <a href="#record-dataset">Conjunto de datos</a>
    <a href="#training">Entrenamiento</a>
    <a href="#faq">Preguntas frecuentes</a>
  </nav>

  <section id="course-steps" className="section-card">
    <div className="section-title">
      <span>Resumen de pasos</span>
      <h2>Flujo de trabajo recomendado de puesta en marcha de SO-ARM</h2>
      <p>Sigue este orden para una experiencia de depuración más segura y sencilla. Cada paso añade solo una nueva capa de complejidad.</p>
    </div>
    <div className="step-card-grid">
      <div className="step-card"><span className="step-mini">Step 0</span><strong>Confirmar modelo y alimentación</strong><p>Identifica SO100 / SO101, kit estándar / pro, motores de brazo líder / seguidor y el voltaje correcto de la fuente de alimentación.</p></div>
      <div className="step-card"><span className="step-mini">Step 1</span><strong>Preparar piezas impresas y hardware</strong><p>Imprime o revisa las piezas mecánicas, etiqueta los servos y verifica las placas controladoras y los cables USB-C.</p></div>
      <div className="step-card"><span className="step-mini">Step 2</span><strong>Instalar LeRobot</strong><p>Crea un entorno limpio, instala LeRobot verificado por Seeed, ffmpeg, dependencias de Feetech y PyTorch con GPU si es necesario.</p></div>
      <div className="step-card"><span className="step-mini">Step 3</span><strong>Configurar IDs de servos</strong><p>Usa <code>{`lerobot-setup-motors`}</code> para inicializar los ID de los servos del seguidor y del líder antes del ensamblaje final.</p></div>
      <div className="step-card"><span className="step-mini">Step 4</span><strong>Ensamblar y calibrar</strong><p>Ensamblar los brazos líder y seguidor, y luego ejecutar la calibración de brazo completo de LeRobot.</p></div>
      <div className="step-card"><span className="step-mini">Step 5</span><strong>Teleoperar y añadir cámaras</strong><p>Primero prueba una teleoperación sencilla sin cámaras y luego conecta cámaras OpenCV, RealSense u Orbbec.</p></div>
      <div className="step-card"><span className="step-mini">Step 6</span><strong>Registrar, entrenar y evaluar</strong><p>Registra demostraciones estables, visualiza el conjunto de datos, entrena primero ACT y luego prueba SmolVLA / Pi / GR00T.</p></div>
    </div>
  </section>

  <section id="overview" className="section-card">
    <div className="section-title">
      <span>Descripción general</span>
      <h2>Qué cubre este tutorial</h2>
      <p>SO-ARM10x es una plataforma de brazo robótico de código abierto y bajo costo diseñada para aprender manipulación, teleoperación, aprendizaje por imitación y flujos de trabajo de IA encarnada con LeRobot.</p>
    </div>
    <div className="info-card">
      <p><a href="https://github.com/TheRobotStudio/SO-ARM100">SO-10xARM</a> es un proyecto de brazo robótico totalmente de código abierto de TheRobotStudio. Proporciona diseños de brazo líder y seguidor, archivos de impresión 3D y guías de operación.</p>
      <p><a href="https://github.com/huggingface/lerobot/tree/main">LeRobot</a> proporciona modelos, conjuntos de datos y herramientas para robótica en el mundo real en PyTorch, incluidos flujos de trabajo de teleoperación, registro de conjuntos de datos, visualización, entrenamiento y evaluación.</p>
    </div>
    <div className="feature-grid">
      <div><b>Código abierto y bajo costo</b><span>Adecuado para educación, laboratorios de robótica, investigación y experimentos de manipulación con IA.</span></div>
      <div><b>Listo para LeRobot</b><span>Admite teleoperación, recopilación de conjuntos de datos, entrenamiento de políticas, evaluación y flujos de trabajo con Hugging Face Hub.</span></div>
      <div><b>Flujo de trabajo líder-seguidor</b><span>Usa un brazo líder para controlar un brazo seguidor y recopilar demostraciones para aprendizaje por imitación.</span></div>
      <div><b>Compatible con Jetson</b><span>Se puede usar con plataformas reComputer Jetson tras instalar la pila correcta de PyTorch / Torchvision.</span></div>
    </div>
    <details className="content-details">
      <summary>Ver el video de descripción general de SO-ARM</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd" title="SO-ARM LeRobot overview video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>
  </section>

  <section id="hardware" className="section-card">
    <div className="section-title">
      <span>Hardware</span>
      <h2>Modelo, alimentación y requisitos del sistema</h2>
      <p>Antes de configurar los servos o ejecutar la calibración, confirma qué kit SO-ARM tienes y usa la fuente de alimentación correcta.</p>
    </div>

    <div className="module-summary-grid">
      <div className="module-summary-card"><b>SO-ARM100</b><span>Versión clásica de SO-ARM. Los usuarios existentes de SO100 pueden seguir usando las rutas de código de SO101 en esta guía.</span></div>
      <div className="module-summary-card"><b>SO-ARM101</b><span>Cableado actualizado y relaciones de engranajes optimizadas para el brazo líder. La impresión y la configuración siguen siendo compatibles con el flujo de trabajo estilo SO100.</span></div>
      <div className="module-summary-card"><b>Kit estándar</b><span>Usa fuentes de alimentación de 5V. Comprueba la alimentación y el modelo de servo antes de conectar el bus.</span></div>
      <div className="module-summary-card warning-card"><b>Kit Pro</b><span>El brazo líder usa 5V; el brazo seguidor usa 12V. Mezclar las fuentes de alimentación puede dañar los motores.</span></div>
    </div>

    <details className="content-details">
      <summary>Tabla de especificaciones</summary>
      <table>
        <thead><tr><th>Elemento</th><th>SO-ARM100</th><th>SO-ARM101</th></tr></thead>
        <tbody>
          <tr><td>Estructura del robot</td><td>Brazo líder + brazo seguidor</td><td>Brazo líder + brazo seguidor</td></tr>
          <tr><td>Comunicación</td><td>UART</td><td>UART</td></tr>
          <tr><td>Sensor de ángulo</td><td>Codificador magnético de 12 bits</td><td>Codificador magnético de 12 bits</td></tr>
          <tr><td>Motores del seguidor</td><td>Serie STS3215, según la versión del kit</td><td>Igual que SO-ARM100</td></tr>
          <tr><td>Motores del líder</td><td>Misma relación de engranajes en todas las articulaciones</td><td>Relaciones de engranajes optimizadas para las articulaciones L1, L3, L4-L6</td></tr>
          <tr><td>Temperatura recomendada</td><td>0°C a 40°C</td><td>0°C a 40°C</td></tr>
        </tbody>
      </table>
    </details>

    <details className="content-details">
      <summary>Lista de materiales</summary>
      <table>
        <thead><tr><th>Pieza</th><th>Cantidad</th><th>Incluido</th></tr></thead>
        <tbody>
          <tr><td>Servomotores</td><td>12</td><td>✅</td></tr>
          <tr><td>Placa de control de motores</td><td>2</td><td>✅</td></tr>
          <tr><td>Cables USB-C</td><td>2</td><td>✅</td></tr>
          <tr><td>Fuentes de alimentación</td><td>2</td><td>✅</td></tr>
          <tr><td>Abrazaderas de mesa</td><td>4</td><td>✅</td></tr>
          <tr><td>Piezas de brazo impresas en 3D</td><td>1 juego</td><td>Opcional / preparado por el usuario</td></tr>
        </tbody>
      </table>
    </details>

    <details className="content-details">
      <summary>Entorno de sistema recomendado</summary>
      <div className="env-grid">
        <div>
          <h3>Ubuntu x86</h3>
          <ul>
            <li>Ubuntu 22.04</li>
            <li>CUDA 12+</li>
            <li>Python 3.10</li>
            <li>Torch 2.6+ o una versión que coincida con tu pila de CUDA</li>
          </ul>
        </div>
        <div>
          <h3>Jetson Orin</h3>
          <ul>
            <li>JetPack 6.0 / 6.1</li>
            <li>Python 3.10</li>
            <li>Torch 2.3+</li>
            <li>Confirma que PyTorch y Torchvision tienen compatibilidad con GPU</li>
          </ul>
        </div>
      </div>
    </details>
  </section>

  <section id="printing" className="section-card">
    <div className="section-title">
      <span>Paso 1</span>
      <h2>Prepara las piezas impresas en 3D y el hardware</h2>
      <p>Utiliza los archivos de impresión SO101 para nuevas construcciones. Los usuarios existentes de SO100 aún pueden seguir el mismo flujo de instalación y software.</p>
    </div>
    <div className="step-card-grid">
      <div className="step-card"><span className="step-mini">1.1</span><strong>Elige los archivos de impresión</strong><p>Usa los archivos de Ender para camas de 220 mm × 220 mm, o los archivos de Prusa / Up para camas de 205 mm × 250 mm.</p></div>
      <div className="step-card"><span className="step-mini">1.2</span><strong>Usa los ajustes recomendados</strong><p>PLA+, boquilla de 0,4 mm con altura de capa de 0,2 mm, o boquilla de 0,6 mm con altura de capa de 0,4 mm.</p></div>
      <div className="step-card"><span className="step-mini">1.3</span><strong>Etiqueta los servos</strong><p>Antes del cableado, etiqueta F1-F6 y L1-L6 para evitar errores de calibración y montaje.</p></div>
    </div>
    <details className="content-details">
      <summary>Referencias de impresión 3D</summary>
      <ul>
        <li>Tamaño de cama Ender: <a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl">Follower</a> y <a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl">Leader</a>.</li>
        <li>Tamaño de cama Prusa / Up: <a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl">Follower</a> y <a href="https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl">Leader</a>.</li>
        <li>Densidad de relleno sugerida: 15%.</li>
        <li>Usa soportes donde sea necesario, pero evita soportes innecesarios dentro de los orificios horizontales para tornillos.</li>
      </ul>
    </details>
  </section>

  <section id="install-lerobot" className="section-card">
    <div className="section-title">
      <span>Paso 2</span>
      <h2>Instala LeRobot</h2>
      <p>Comienza con un entorno Miniforge limpio y luego instala el repositorio de LeRobot verificado por Seeed y las dependencias de los motores Feetech.</p>
    </div>
    <div className="command-flow">
      <div>
        <h3>1. Instala Miniforge</h3>
        <pre><code>{`# Jetson / aarch64
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
chmod +x Miniforge3-Linux-aarch64.sh
./Miniforge3-Linux-aarch64.sh
source ~/.bashrc

# x86_64 Ubuntu
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
chmod +x Miniforge3-Linux-x86_64.sh
./Miniforge3-Linux-x86_64.sh
source ~/.bashrc
conda init --all`}</code></pre>
      </div>
      <div>
        <h3>2. Crea el entorno de LeRobot</h3>
        <pre><code>{`conda create -y -n lerobot python=3.10
conda activate lerobot`}</code></pre>
      </div>
      <div>
        <h3>3. Clona e instala LeRobot</h3>
        <pre><code>{`git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
cd ~/lerobot
conda install ffmpeg -c conda-forge
pip install -e ".[feetech]"`}</code></pre>
      </div>
      <div>
        <h3>4. Comprueba PyTorch con GPU</h3>
        <pre><code>{`python3
import torch
print(torch.cuda.is_available())
exit()`}</code></pre>
      </div>
    </div>
    <details className="content-details">
      <summary>Configuración adicional para Jetson JetPack 6.0+</summary>
      <p>En Jetson, instala PyTorch / Torchvision con compatibilidad GPU antes de instalar las dependencias de LeRobot. Si pip las reemplaza por versiones para CPU, vuelve a instalar los paquetes compatibles con Jetson.</p>
      <pre><code>{`conda install -y -c conda-forge "opencv>=4.10.0.84"
conda remove opencv
pip3 install opencv-python==4.10.0.84
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Nota sobre la compatibilidad de ffmpeg</summary>
      <p>Si la grabación o visualización del conjunto de datos informa errores relacionados con códecs, instala una versión de ffmpeg conocida por funcionar.</p>
      <pre><code>{`conda install ffmpeg=7.1.1 -c conda-forge`}</code></pre>
    </details>
  </section>

  <section id="motor-setup" className="section-card">
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Comprobación de alimentación antes de configurar los servos</strong>
        <p>Los servos del brazo Leader deben usar 5V. Para SO101 Pro, los servos del brazo Follower usan 12V. El USB no alimenta los servos; deben estar conectados tanto el USB como la fuente de alimentación correcta.</p>
      </div>
    </div>
    <div className="section-title">
      <span>Paso 3</span>
      <h2>Configura los ID de los servos antes del montaje</h2>
      <p>Para las versiones en kit, configura un servo a la vez. Los usuarios con brazos preensamblados pueden omitir esta sección e ir directamente a la calibración del brazo completo.</p>
    </div>
    <div className="module-summary-grid">
      <div className="module-summary-card"><b>Etiquetas del Follower</b><span>Usa F1-F6 para representar el brazo follower desde la base hasta la pinza.</span></div>
      <div className="module-summary-card"><b>Etiquetas del Leader</b><span>Usa L1-L6 para representar el brazo leader desde la base hasta el mango / pinza.</span></div>
      <div className="module-summary-card warning-card"><b>Relaciones de engranajes de SO101</b><span>L1 y L3 usan 1:191; L2 usa 1:345; L4-L6 usan 1:147.</span></div>
    </div>
    <details className="content-details">
      <summary>Encuentra los puertos USB</summary>
      <pre><code>{`lerobot-find-port

# If needed on Linux:
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1`}</code></pre>
      <p>En muchas configuraciones de Linux y Jetson, el primer dispositivo conectado se asigna a <code>{`/dev/ttyACM0`}</code> y el segundo a <code>{`/dev/ttyACM1`}</code>. Verifícalo siempre antes de ejecutar comandos de configuración o calibración.</p>
    </details>
    <details className="content-details">
      <summary>Modelo de servo y asignación de articulaciones para SO101</summary>
      <table>
        <thead><tr><th>Modelo de servo</th><th>Relación de engranajes</th><th>Articulaciones</th></tr></thead>
        <tbody>
          <tr><td>ST-3215-C044 (7.4V)</td><td>1:191</td><td>L1</td></tr>
          <tr><td>ST-3215-C001 (7.4V)</td><td>1:345</td><td>L2</td></tr>
          <tr><td>ST-3215-C044 (7.4V)</td><td>1:191</td><td>L3</td></tr>
          <tr><td>ST-3215-C046 (7.4V)</td><td>1:147</td><td>L4-L6</td></tr>
          <tr><td>ST-3215-C001 / C018 / C047</td><td>1:345</td><td>F1-F6</td></tr>
        </tbody>
      </table>
    </details>
    <details className="content-details">
      <summary>Configura los servos del brazo Follower</summary>
      <pre><code>{`lerobot-setup-motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0`}</code></pre>
      <p>Conecta solo el servo solicitado por el mensaje del terminal. Después de cada paso, comprueba la alimentación y el cableado antes de pulsar Enter.</p>
    </details>
    <details className="content-details">
      <summary>Configura los servos del brazo Leader</summary>
      <pre><code>{`lerobot-setup-motors \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1`}</code></pre>
      <p>Usa 5V para la configuración de los servos del brazo Leader. No conectes todos los servos a la vez durante la escritura de IDs.</p>
    </details>
  </section>

  <section id="assembly" className="section-card">
    <div className="section-title">
      <span>Paso 4</span>
      <h2>Ensamblar los brazos Leader y Follower</h2>
      <p>Después de configurar los ID de los servos, ensambla los brazos según la guía mecánica de SO101. El montaje del Follower y del Leader es en su mayoría el mismo, excepto por la sección del efector final / mango después del Paso 12.</p>
    </div>
    <div className="step-card-grid">
      <div className="step-card"><span className="step-mini">4.1</span><strong>Vuelve a comprobar las etiquetas de los servos</strong><p>Confirma F1-F6 y L1-L6 antes de instalarlos en las piezas impresas.</p></div>
      <div className="step-card"><span className="step-mini">4.2</span><strong>Ensamblar el brazo Leader</strong><p>Sigue las imágenes numeradas y enruta los cables con cuidado para evitar interferencias en las articulaciones.</p></div>
      <div className="step-card"><span className="step-mini">4.3</span><strong>Ensamblar el brazo Follower</strong><p>Sigue la misma estructura de base y luego instala el efector final y la sección de la pinza del follower.</p></div>
    </div>
    <details className="content-details">
      <summary>Imágenes de referencia para el montaje</summary>
      <p>El tutorial original incluye tablas completas de imágenes de montaje para los brazos leader y follower. Mantén esta página concisa usando esta sección como un punto de referencia antes de la calibración completa.</p>
      <ul>
        <li>Montaje del Leader: Paso 1 al Paso 20.</li>
        <li>Montaje del Follower: Paso 1 al Paso 17.</li>
        <li>Comprueba el enrutamiento de los cables después de instalar cada articulación principal.</li>
      </ul>
    </details>
  </section>

  <section id="calibration" className="section-card">
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Comprobación de seguridad para la calibración</strong>
        <p>Sujeta el robot con cuidado, despeja el área de trabajo y asegúrate de tener la alimentación correcta antes de la calibración. La calidad de la calibración afecta directamente a la teleoperación, la grabación y la evaluación de políticas.</p>
      </div>
    </div>
    <div className="section-title">
      <span>Paso 5</span>
      <h2>Calibra los brazos Leader y Follower</h2>
      <p>La calibración alinea las posiciones físicas de las articulaciones con los estados de articulación esperados por LeRobot. Usa los mismos ID de robot para teleoperación, grabación, reproducción y evaluación.</p>
    </div>
    <details className="content-details">
      <summary>Opciones de recalibración</summary>
      <p>Para recalibrar, elimina los archivos de calibración relacionados en <code>{`~/.cache/huggingface/lerobot/calibration/robots`}</code> y <code>{`~/.cache/huggingface/lerobot/calibration/teleoperators`}</code>, o escribe <code>{`c`}</code> cuando LeRobot pregunte si deseas reutilizar el archivo de calibración existente.</p>
    </details>
    <details className="content-details">
      <summary>Calibrar el brazo seguidor</summary>
      <pre><code>{`sudo chmod 666 /dev/ttyACM*

lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Calibrar el brazo líder</summary>
      <pre><code>{`lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Opcional: calibración de posición media con la herramienta Seeed SoARM</summary>
      <p>Si ves errores como <code>{`Magnitude 30841 exceeds 2047`}</code>, usa la herramienta rápida SoARM para escribir la posición actual como el valor medio 2048 y luego vuelve a realizar la calibración de todo el brazo.</p>
      <pre><code>{`git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController
pip install -r requirements.txt

python -m src.tools.servo_disable
python -m src.tools.servo_middle_calibration
python -m src.tools.servo_center_test`}</code></pre>
      <p><a href="/es/lerobot_steering_gear_debugging_tool/">Abrir el tutorial de la herramienta de depuración del engranaje de dirección</a></p>
    </details>
  </section>

  <section id="teleoperation" className="section-card">
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Comprobación de seguridad para teleoperación</strong>
        <p>Empieza primero sin cámaras. Usa un área de trabajo despejada y detente inmediatamente si cualquiera de los brazos pierde alimentación o comunicación.</p>
      </div>
    </div>
    <div className="section-title">
      <span>Paso 6</span>
      <h2>Ejecutar teleoperación simple</h2>
      <p>La teleoperación simple verifica la cadena de control de líder a seguidor antes de añadir flujos de cámara y grabar conjuntos de datos.</p>
    </div>
    <details className="content-details">
      <summary>Comando de teleoperación simple</summary>
      <pre><code>{`sudo chmod 666 /dev/ttyACM*

lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Video de demostración de teleoperación</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="SO-ARM teleoperation video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>
  </section>

  <section id="camera" className="section-card">
    <div className="section-title">
      <span>Paso 7</span>
      <h2>Añadir cámaras para datos de observación</h2>
      <p>La configuración de la cámara afecta directamente a la calidad del conjunto de datos. Empieza con un flujo de baja resolución y luego añade más cámaras o flujos de profundidad cuando el sistema sea estable.</p>
    </div>
    <div className="camera-grid">
      <details className="content-details">
        <summary>Usar cámaras USB / OpenCV normales</summary>
        <pre><code>{`lerobot-find-cameras opencv`}</code></pre>
        <pre><code>{`lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true`}</code></pre>
        <div className="callout"><b>Recomendación MJPG</b><p><code>{`MJPG`}</code> está comprimido y normalmente ofrece mejor resolución / FPS. Evita colocar varias cámaras USB de alta resolución en el mismo hub USB.</p></div>
      </details>
      <details className="content-details">
        <summary>Usar RealSense D405 / D435i</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport
pip install -e ".[realsense]"
sudo chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras realsense`}</code></pre>
        <pre><code>{`lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    d435i_color: {type: realsense_d435i_color, serial_number_or_name: "419522072950", width: 640, height: 480, fps: 30, color_mode: rgb, color_stream_format: rgb8, rotation: 0, warmup_s: 1},
    d435i_depth: {type: realsense_d435i_depth, serial_number_or_name: "419522072950", width: 640, height: 480, fps: 30, max_depth_m: 2.0, depth_alpha: 0.2, rotation: 0, warmup_s: 5}
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true`}</code></pre>
      </details>
      <details className="content-details">
        <summary>Usar Orbbec Gemini2 / Gemini 336</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport
pip install -e ".[orbbec]"
sudo chmod a+rw /dev/bus/usb/*/*
cat /sys/module/usbcore/parameters/usbfs_memory_mb
sudo sh -c 'echo 128> /sys/module/usbcore/parameters/usbfs_memory_mb'
lerobot-find-cameras orbbec`}</code></pre>
        <pre><code>{`lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    orbbec_color: {type: orbbec_color, serial_number_or_name: "CP9JA530003A", width: 640, height: 480, fps: 30, color_mode: rgb, rotation: 0, warmup_s: 1},
    orbbec_depth: {type: orbbec_depth, serial_number_or_name: "CP9JA530003A", width: 640, height: 400, fps: 30, depth_alpha: 0.2, rotation: 0, warmup_s: 5}
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true`}</code></pre>
      </details>
    </div>
  </section>

  <section id="record-dataset" className="section-card">
    <div className="safety-alert compact">
      <div className="safety-alert-icon">⚠️</div>
      <div className="safety-alert-content">
        <strong>Comprobación de seguridad para grabación</strong>
        <p>Empieza primero con una tarea sencilla y repetible. Mantén constantes las posiciones de las cámaras, la iluminación, la colocación de los objetos y el estilo de movimiento.</p>
      </div>
    </div>
    <div className="section-title">
      <span>Paso 8</span>
      <h2>Grabar y gestionar conjuntos de datos de LeRobot</h2>
      <p>Empieza con un conjunto de datos local pequeño, verifica los vídeos y los estados, y luego súbelo a Hugging Face Hub cuando la configuración sea estable.</p>
    </div>
    <div className="tips-grid">
      <div><b>Escala sugerida</b><span>Empieza con 5 episodios de prueba y luego graba al menos 50 episodios para una ejecución de entrenamiento real.</span></div>
      <div><b>Consistencia</b><span>Mantén las cámaras fijas y asegúrate de que el objeto manipulado sea siempre visible en las vistas de cámara.</span></div>
      <div><b>Diseño de la tarea</b><span>Deberías poder completar la tarea mirando solo las imágenes de la cámara.</span></div>
    </div>
    <details className="content-details">
      <summary>Grabar un conjunto de datos local</summary>
      <pre><code>{`lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30`}</code></pre>
      <p>Cuando <code>{`--dataset.push_to_hub=false`}</code>, el conjunto de datos se guarda en <code>{`~/.cache/huggingface/lerobot`}</code>.</p>
    </details>
    <details className="content-details">
      <summary>Grabar y subir a Hugging Face Hub</summary>
      <pre><code>{`huggingface-cli login --token \${HUGGINGFACE_TOKEN} --add-to-git-credential
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER

lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=\${HF_USER}/record-test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Controles de teclado durante la grabación</summary>
      <table>
        <thead><tr><th>Tecla</th><th>Acción</th></tr></thead>
        <tbody>
          <tr><td>Flecha derecha</td><td>Terminar el episodio actual / reiniciar antes de tiempo y pasar al siguiente.</td></tr>
          <tr><td>Flecha izquierda</td><td>Cancelar el episodio actual y grabarlo de nuevo.</td></tr>
          <tr><td>ESC</td><td>Detener la sesión inmediatamente, codificar los vídeos y guardar / subir el conjunto de datos.</td></tr>
        </tbody>
      </table>
      <pre><code>{`# If keyboard shortcuts do not respond:
pip install pynput==1.6.8`}</code></pre>
    </details>
  </section>

  <section id="visualize" className="section-card">
    <div className="section-title">
      <span>Paso 9</span>
      <h2>Visualizar y reproducir conjuntos de datos</h2>
      <p>Inspecciona siempre el conjunto de datos antes de entrenar. Revisa las imágenes de la cámara, los estados del robot, las acciones y la temporización de los episodios.</p>
    </div>
    <details className="content-details">
      <summary>Visualizar un conjunto de datos</summary>
      <pre><code>{`# Hub dataset
lerobot-dataset-viz \
  --repo-id \${HF_USER}/so101_test

# Local dataset
lerobot-dataset-viz \
  --repo-id seeedstudio123/test`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Reproducir un episodio</summary>
      <div className="callout warning"><b>Paso opcional</b><p>La reproducción puede mover el robot físico. Úsala solo después de confirmar la calibración y la seguridad del espacio de trabajo.</p></div>
      <pre><code>{`lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.episode=0`}</code></pre>
    </details>
  </section>

  <section id="training" className="section-card">
    <div className="section-title">
      <span>Paso 10</span>
      <h2>Entrenar y evaluar políticas</h2>
      <p>Para el primer flujo de trabajo completo, utiliza ACT. Después de que ACT funcione de extremo a extremo, puedes probar SmolVLA, Pi0, Pi0.5, GR00T, PEFT, entrenamiento multi-GPU o inferencia asíncrona.</p>
    </div>
    <details className="content-details">
      <summary>ACT: política inicial recomendada</summary>
      <h3>Entrenar</h3>
      <pre><code>{`lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000`}</code></pre>
      <h3>Evaluar</h3>
      <pre><code>{`lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_so101_test \
  --dataset.single_task="Put the cube into the box" \
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Opciones avanzadas SmolVLA / Pi0 / Pi0.5 / GR00T</summary>
      <div className="module-summary-grid">
        <div className="module-summary-card"><b>SmolVLA</b><span>Punto de entrada ligero para ajuste fino VLA. Pruébalo después de que ACT sea estable.</span></div>
        <div className="module-summary-card"><b>Pi0 / Pi0.5</b><span>Útiles para experimentos de políticas condicionadas por lenguaje.</span></div>
        <div className="module-summary-card"><b>GR00T</b><span>Requiere una pila más estricta de CUDA / PyTorch / FlashAttention. Trátalo como un experimento avanzado.</span></div>
      </div>
      <pre><code>{`# SmolVLA
pip install -e ".[smolvla]"

lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=\${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true

# Pi0 / Pi0.5
pip install -e ".[pi]"

# GR00T
pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
pip install "lerobot[groot]"`}</code></pre>
    </details>
    <details className="content-details">
      <summary>Opcional: PEFT, multi-GPU e inferencia asíncrona</summary>
      <ul>
        <li><b>PEFT / LoRA:</b> reduce el coste de ajuste fino entrenando parámetros adaptadores en lugar de todos los pesos del modelo.</li>
        <li><b>Multi-GPU:</b> usa <code>{`accelerate launch`}</code> al entrenar políticas más grandes o lotes más grandes.</li>
        <li><b>Inferencia asíncrona:</b> ejecuta la inferencia de la política en un servidor mientras el cliente del robot ejecuta bloques de acciones.</li>
      </ul>
      <pre><code>{`# PEFT
pip install -e ".[peft]"

# Multi-GPU helper
pip install accelerate
accelerate config

# Async inference dependencies
pip install -e ".[async]"`}</code></pre>
    </details>
  </section>

  <section id="faq" className="section-card">
    <div className="section-title">
      <span>FAQ</span>
      <h2>Problemas comunes y soluciones</h2>
      <p>La mayoría de los problemas de SO-ARM LeRobot están relacionados con permisos de serie, alimentación incorrecta, cables de servos sueltos, versiones de ffmpeg, caché de calibración o nombres de cámara que no coinciden.</p>
    </div>
    <details className="content-details">
      <summary>No se pudo conectar en el puerto /dev/ttyACM0</summary>
      <p>Concede permisos de serie y confirma que el dispositivo existe.</p>
      <pre><code>{`ls /dev/ttyACM*
sudo chmod 666 /dev/ttyACM*`}</code></pre>
    </details>
    <details className="content-details">
      <summary>El motor 'gripper' no se encontró</summary>
      <p>Comprueba si el servo solicitado es el único servo conectado, si el cable del servo está completamente insertado y si la fuente de alimentación es correcta.</p>
    </details>
    <details className="content-details">
      <summary>No se encontró un flujo válido en el archivo de entrada</summary>
      <pre><code>{`conda install ffmpeg=7.1.1 -c conda-forge`}</code></pre>
    </details>
    <details className="content-details">
      <summary>ConnectionError: no status packet</summary>
      <p>Comprueba si el brazo en el puerto seleccionado está encendido. Si el LED de un servo está apagado, inspecciona el cable del servo anterior en la cadena en margarita.</p>
    </details>
    <details className="content-details">
      <summary>La magnitud supera 2047 durante la calibración</summary>
      <p>Apaga y enciende el robot e inténtalo de nuevo. Si el problema persiste, ejecuta la calibración de posición media y luego repite la calibración de todo el brazo.</p>
    </details>
    <details className="content-details">
      <summary>La media de los informes de evaluación es infinita</summary>
      <p>Los nombres de cámara como <code>{`front`}</code> y <code>{`side`}</code> deben coincidir con los nombres utilizados durante la grabación del conjunto de datos.</p>
    </details>
    <details className="content-details">
      <summary>Los atajos de teclado no funcionan durante la grabación</summary>
      <pre><code>{`echo $DISPLAY
pip install pynput==1.6.8`}</code></pre>
    </details>
    <details className="content-details">
      <summary>rerun no tiene el atributo scalar</summary>
      <pre><code>{`pip3 install rerun-sdk==0.23`}</code></pre>
    </details>
  </section>

  <section className="section-card course-path-section">
    <div className="section-title">
      <span>Seguir aprendiendo</span>
      <h2>Ruta de aprendizaje de SO-ARM</h2>
      <p>Después de completar esta guía de LeRobot, continúa con la depuración de servos, simulación, aprendizaje por refuerzo, GR00T y flujos de trabajo de doble brazo.</p>
    </div>
    <div className="course-path-grid">
      <a className="course-path-item active" href="/es/lerobot_so100m_new/">
        <span className="course-index">1</span>
        <span className="course-path-copy"><strong>SO100 / SO101 con LeRobot</strong><span>Montaje, calibración, teleoperación, recopilación de conjuntos de datos, entrenamiento y evaluación.</span></span>
        <span className="course-tag">Artículo actual</span>
      </a>
      <a className="course-path-item" href="/es/lerobot_steering_gear_debugging_tool/">
        <span className="course-index">2</span>
        <span className="course-path-copy"><strong>Herramienta de depuración de servos</strong><span>Comprueba IDs de servos, posición cero, dirección, comunicación y calibración de posición media.</span></span>
        <span className="course-tag">Depuración</span>
      </a>
      <a className="course-path-item" href="/es/simulate_soarm101_by_leisaac/">
        <span className="course-index">3</span>
        <span className="course-path-copy"><strong>Simulación LeIsaac</strong><span>Comprende la simulación de SO-ARM, las escenas y la configuración de tareas antes de Sim2Real.</span></span>
        <span className="course-tag">Simulación</span>
      </a>
      <a className="course-path-item" href="/es/training_soarm101_policy_with_isaacLab/">
        <span className="course-index">4</span>
        <span className="course-path-copy"><strong>Aprendizaje por refuerzo con Isaac Lab</strong><span>Entrena políticas en simulación y aprende el diseño de recompensas y el flujo de despliegue.</span></span>
        <span className="course-tag">RL</span>
      </a>
      <a className="course-path-item" href="/es/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/">
        <span className="course-index">5</span>
        <span className="course-path-copy"><strong>SO101 con NVIDIA GR00T</strong><span>Ajusta modelos de IA encarnada / VLA y despliega en Jetson Thor.</span></span>
        <span className="course-tag">VLA</span>
      </a>
      <a className="course-path-item" href="/es/lerobot_double_arm_so_arm_training/">
        <span className="course-index">6</span>
        <span className="course-path-copy"><strong>Entrenamiento de SO-ARM de doble brazo</strong><span>Pasa de tareas de un solo brazo a recopilación de datos y entrenamiento de doble brazo.</span></span>
        <span className="course-tag">Doble brazo</span>
      </a>
    </div>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Referencias</span>
      <h2>Referencias y soporte</h2>
    </div>
    <div className="reference-grid">
      <a href="https://github.com/TheRobotStudio/SO-ARM100">TheRobotStudio SO-ARM10x</a>
      <a href="https://github.com/huggingface/lerobot/tree/main">Hugging Face LeRobot</a>
      <a href="https://huggingface.co/docs/lerobot/index">Documentación de LeRobot</a>
      <a href="https://github.com/Seeed-Projects/lerobot">Seeed-Projects LeRobot</a>
      <a href="https://forum.seeedstudio.com/">Foro de Seeed Studio</a>
      <a href="https://discord.gg/8TnwDdjFGU">LeRobot Discord</a>
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
.hero-card strong { color: var(--rb-text); text-align: center; }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; text-align: center; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.82rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); scroll-margin-top: 6rem; }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.step-card-grid, .module-summary-grid, .spec-grid, .tips-grid, .notice-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.95rem; }
.step-card, .module-summary-card, .spec-card, .tips-grid div, .notice-card, .command-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: linear-gradient(180deg, var(--rb-surface), var(--rb-surface-soft)); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15,23,42,0.05); transition: all 0.18s ease; }
.step-card:hover, .course-path-item:hover, .reference-grid a:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.36); box-shadow: 0 16px 32px rgba(37,99,235,0.10); }
.step-mini { display: inline-flex; align-items: center; justify-content: center; width: fit-content; min-height: 2rem; padding: 0.28rem 0.65rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-size: 0.82rem; font-weight: 900; }
.step-card strong, .module-summary-card b, .spec-card b, .tips-grid b, .notice-card strong { color: var(--rb-text); font-size: 1rem; }
.step-card p, .module-summary-card span, .spec-card span, .tips-grid span, .notice-card span { margin: 0; color: var(--rb-muted); line-height: 1.62; font-size: 0.92rem; }
.notice-card.warning { border-color: rgba(245,158,11,0.35); background: linear-gradient(180deg, #fffbeb, var(--rb-surface)); }
.content-details { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; overflow: hidden; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker { display: none; }
.content-details summary::after { content: "Expandir"; float: right; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; }
.content-details[open] summary::after { content: "Contraer"; }
.command-flow > div, .command-card { margin: 1rem 0; }
.command-flow h3, .command-card h3 { margin-top: 0; color: var(--rb-text); }
.callout { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; border: 1px solid rgba(37,99,235,0.22); background: var(--rb-primary-soft); color: var(--rb-text); line-height: 1.65; }
.callout p { margin: 0.35rem 0 0; color: var(--rb-muted); line-height: 1.65; }
.callout.warning { color: #7c2d12; background: #fff7ed; border-color: #fed7aa; }
.callout.danger { color: #7f1d1d; background: #fef2f2; border-color: #fecaca; }
.video-container { position: relative; width: 100%; max-width: 960px; margin: 1rem auto; aspect-ratio: 16 / 9; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem; }
.reference-grid a { padding: 0.9rem 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: var(--rb-primary); text-decoration: none !important; font-weight: 800; transition: all 0.18s ease; }
.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
.rebot-page pre { overflow-x: auto; border-radius: 16px; border: 1px solid var(--rb-border); }
.rebot-page table { display: table; width: 100%; border-collapse: collapse; }
.rebot-page table th, .rebot-page table td { border: 1px solid var(--rb-border); padding: 0.65rem; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .spec-card, html[data-theme='dark'] .tips-grid div, html[data-theme='dark'] .notice-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .command-card, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .notice-card.warning, html[data-theme='dark'] .callout.warning { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .callout.danger { color: #fecaca; background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.35); }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
@media (max-width: 980px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { grid-template-columns: repeat(3, minmax(0, 1fr)); position: static; } }
@media (max-width: 720px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); } .hero-actions a { width: 100%; justify-content: center; } .safety-alert { grid-template-columns: 1fr; } }
`}</style>
