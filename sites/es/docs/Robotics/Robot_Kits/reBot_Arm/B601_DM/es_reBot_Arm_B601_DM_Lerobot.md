---
description: Este wiki proporciona un flujo de trabajo completo para usar reBot Arm B601-DM con LeRobot, incluyendo configuración del entorno, calibración, teleoperación, integración de cámara, recopilación de conjuntos de datos, entrenamiento, evaluación y despliegue avanzado.
title: Introducción a reBot Arm B601-DM en LeRobot
keywords:
  - Lerobot
  - Huggingface
  - Robotic Arm
  - rebot arm
  - Robot
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/b601dm_zeroposition.jpg
slug: /rebot_arm_b601_dm_lerobot
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-04
  author: ZhuYaohui
translation:
  skip:
    - zh-CN
createdAt: '2026-04-09'
updatedAt: '2026-07-04'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_lerobot/
---

# Introducción a reBot Arm B601-DM en LeRobot

<div className="rebot-page">

  <section className="doc-hero">
    <div className="hero-copy">
      <span className="eyebrow">reBot Arm × LeRobot</span>
      <h2>Comienza con teleoperación, luego crea conjuntos de datos, entrena políticas y despliega en un brazo robótico real</h2>
      <p>Esta guía es para usuarios que ya han completado la puesta en marcha rápida de reBot Arm B601-DM y la configuración básica de hardware. Te guía a través de la instalación de LeRobot, calibración del brazo, teleoperación, integración de cámara, recopilación de conjuntos de datos, entrenamiento, evaluación y flujos de trabajo de despliegue avanzado.</p>
      <div className="hero-actions">
        <a href="#quick-path">Ver ruta de aprendizaje</a>
        <a href="#install-lerobot">Instalar LeRobot</a>
        <a href="#record-dataset">Comenzar recopilación de conjuntos de datos</a>
      </div>
    </div>
    <div className="hero-card image-card">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png" alt="reBot Arm B601-DM" />
      <span>Teleoperación · Conjunto de datos · Entrenamiento · Evaluación</span>
    </div>
  </section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Advertencia de seguridad: despeja el espacio de trabajo del robot antes de ejecutar</strong>
    <p>
      Antes de ejecutar cualquier programa que mueva el brazo robótico, despeja todos los objetos de valor,
      objetos frágiles, herramientas, cables y objetos no relacionados dentro de un <strong>radio de 1 metro</strong>
      del espacio de trabajo del robot. Durante la depuración y la operación, el personal debe permanecer fuera
      del rango de movimiento del robot.
    </p>
    <ul>
      <li>No toques las articulaciones, motores, eslabones, la garra ni el efector final después de encender el brazo robótico.</li>
      <li>Antes de la calibración, teleoperación, control IK, control de trayectoria, compensación de gravedad, ejecución con ROS2 / MoveIt o agarre visual, asegúrate de que la base del brazo esté firmemente fijada.</li>
      <li>Si se produce un movimiento anómalo, ruido, vibración, cables sueltos, mal contacto de alimentación o pérdida de comunicación, detén el programa inmediatamente y apaga el sistema antes de la inspección.</li>
      <li>Apaga siempre el sistema antes de conectar o desconectar cables de motor, cables CAN, adaptadores USB2CAN / PCAN-USB, conectores XT30 o conectores de alimentación.</li>
    </ul>
  </div>
</div>


  <nav className="doc-nav" aria-label="reBot LeRobot quick navigation">
    <a href="#quick-path">Ruta</a>
    <a href="#install-lerobot">Instalar</a>
    <a href="#calibration">Calibrar</a>
    <a href="#teleoperation">Teleoperar</a>
    <a href="#camera">Cámaras</a>
    <a href="#record-dataset">Conjunto de datos</a>
    <a href="#training">Entrenamiento</a>
    <a href="#faq">Preguntas frecuentes</a>
  </nav>

  <section id="quick-path" className="section-card">
    <div className="section-title">
      <span>Comienza aquí</span>
      <h2>Flujo de trabajo recomendado</h2>
      <p>Si este es tu primer proyecto con LeRobot, sigue la secuencia a continuación. Si ya estás familiarizado con LeRobot, puedes ir directamente al módulo que necesites.</p>
    </div>

    <div className="path-grid">
      <a className="path-card" href="#install-lerobot"><span>Paso 1</span><b>Instalar LeRobot</b><small>Crea el entorno conda, instala el fork de LeRobot verificado por Seeed e instala los paquetes requeridos.</small></a>
      <a className="path-card" href="#calibration"><span>Paso 2</span><b>Calibrar brazos</b><small>Calibra el brazo seguidor B601-DM y el brazo líder reBot 102 para que sus posiciones físicas coincidan.</small></a>
      <a className="path-card" href="#teleoperation"><span>Paso 3</span><b>Teleoperar</b><small>Ejecuta la teleoperación líder-seguidor y verifica que el brazo seguidor se mueva de forma correcta y segura.</small></a>
      <a className="path-card" href="#camera"><span>Paso 4</span><b>Añadir cámaras</b><small>Conecta cámaras OpenCV, RealSense u Orbbec y verifica los flujos de vídeo antes de grabar datos.</small></a>
      <a className="path-card" href="#record-dataset"><span>Paso 5</span><b>Registrar conjuntos de datos</b><small>Recopila demostraciones de tareas localmente o súbelas a Hugging Face Hub.</small></a>
      <a className="path-card" href="#training"><span>Paso 6</span><b>Entrenar y evaluar</b><small>Comienza con ACT, luego prueba SmolVLA, Pi0 / Pi0.5 o GR00T para experimentos más avanzados.</small></a>
    </div>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Pasos detallados</span>
      <h2>Flujo de trabajo de LeRobot paso a paso</h2>
      <p>Esta secuencia convierte el flujo de trabajo completo de LeRobot en hitos pequeños y comprobables. Completa cada paso antes de pasar a la recopilación de datos con el brazo real o al despliegue de políticas.</p>
    </div>
    <div className="step-card-grid">
      <div className="step-card"><span className="step-mini">Paso 0</span><strong>Completar la puesta en marcha rápida de B601-DM</strong><p>Verifica la alimentación, USB2CAN, IDs de motor, posición cero, dirección de la garra y movimiento básico antes de usar LeRobot.</p></div>
      <div className="step-card"><span className="step-mini">Paso 1</span><strong>Instalar el entorno de LeRobot</strong><p>Crea el entorno conda, instala el fork de LeRobot verificado por Seeed y comprueba la compatibilidad de PyTorch / ffmpeg.</p></div>
      <div className="step-card"><span className="step-mini">Paso 2</span><strong>Calibrar brazos seguidor y líder</strong><p>Calibra el seguidor B601-DM y el líder reBot 102 para que la teleoperación comience desde referencias físicas conocidas.</p></div>
      <div className="step-card"><span className="step-mini">Paso 3</span><strong>Ejecutar la teleoperación de forma segura</strong><p>Usa primero un espacio de trabajo pequeño y despejado. Confirma las direcciones de las articulaciones, el comportamiento de la garra, el procedimiento de parada de emergencia y el flujo de reinicio.</p></div>
      <div className="step-card"><span className="step-mini">Paso 4</span><strong>Añadir cámaras y validar flujos</strong><p>Comienza con una cámara OpenCV, luego añade flujos RGB-D de RealSense u Orbbec cuando la configuración básica sea estable.</p></div>
      <div className="step-card"><span className="step-mini">Paso 5</span><strong>Registrar e inspeccionar conjuntos de datos</strong><p>Recopila primero conjuntos de datos locales cortos, visualiza episodios, reprodúcelos solo cuando sea seguro y comprueba observaciones / acciones antes del entrenamiento.</p></div>
      <div className="step-card"><span className="step-mini">Paso 6</span><strong>Entrenar y evaluar políticas</strong><p>Comienza con ACT, luego pasa a SmolVLA, Pi0 / Pi0.5, GR00T, PEFT, entrenamiento multi-GPU o inferencia asíncrona.</p></div>
    </div>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Visión general</span>
      <h2>Descripción general del proyecto</h2>
      <p>reBot Arm B601-DM es un proyecto de brazo robótico de código abierto de Seeed Studio. Está diseñado para reducir la barrera de entrada al aprendizaje de IA encarnada proporcionando archivos mecánicos abiertos, listas de materiales (BOM), software y tutoriales.</p>
    </div>

    <div className="module-summary-grid">
      <div className="module-summary-card"><b>Objetivo</b><span>Construir un flujo de trabajo completo de aprendizaje por imitación desde la teleoperación hasta la evaluación de políticas.</span></div>
      <div className="module-summary-card"><b>Robot</b><span>Brazo seguidor B601-DM con motores Damiao y un brazo líder reBot 102.</span></div>
      <div className="module-summary-card"><b>Datos</b><span>Usar LeRobot para registrar estados del robot sincronizados, acciones, fotogramas de cámara y descripciones de tareas.</span></div>
      <div className="module-summary-card"><b>Entrenamiento</b><span>Comenzar con ACT y luego ampliar a VLA y flujos de trabajo con modelos fundacionales más grandes.</span></div>
    </div>

    <div className="info-grid">
      <div><strong>Brazo robótico</strong><span>Brazo seguidor reBot Arm B601-DM de 6 GDL con una versión de motor Damiao.</span></div>
      <div><strong>Brazo líder</strong><span>Brazo líder reBot Arm 102 para teleoperación en tiempo real y recopilación de demostraciones.</span></div>
      <div><strong>Framework</strong><span>LeRobot para teleoperación, registro de conjuntos de datos, entrenamiento, evaluación y despliegue de políticas.</span></div>
      <div><strong>Plataforma de cómputo</strong><span>Estación de trabajo Ubuntu x86, estación de trabajo con GPU NVIDIA o plataforma Jetson Orin según la tarea.</span></div>
    </div>

    <details className="content-details">
      <summary>Ver el vídeo de introducción al proyecto reBot</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/PoMv3mw8SGk" title="reBot Arm project introduction" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Sistema</span>
      <h2>Entorno inicial del sistema</h2>
      <p>Comienza desde un entorno limpio. Para usuarios de Jetson, asegúrate de que PyTorch y Torchvision con GPU estén instalados antes de instalar las dependencias de LeRobot.</p>
    </div>

    <div className="two-col">
      <div className="check-card">
        <h3>Ubuntu x86</h3>
        <ul>
          <li>Ubuntu 22.04</li>
          <li>CUDA 12+</li>
          <li>Python 3.10 / 3.12 según tu configuración</li>
          <li>Torch 2.6 o una compilación compatible con CUDA</li>
        </ul>
      </div>
      <div className="check-card">
        <h3>Jetson Orin</h3>
        <ul>
          <li>JetPack 6.0 o 6.1</li>
          <li>Python 3.10</li>
          <li>Torch 2.3+</li>
          <li>Instalar PyTorch con GPU antes de LeRobot</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="install-lerobot" className="section-card">
    <div className="section-title">
      <span>Paso 1</span>
      <h2>Instalar LeRobot</h2>
      <p>Esta sección prepara el entorno de trabajo, instala el repositorio de LeRobot verificado por Seeed y añade los paquetes específicos de reBot.</p>
    </div>
    <div className="module-summary-grid">
      <div className="module-summary-card"><b>1.1 Instalar Miniforge</b><span>Crea un entorno conda aislado en lugar de modificar el Python del sistema.</span></div>
      <div className="module-summary-card"><b>1.2 Clonar LeRobot</b><span>Utiliza el fork de Seeed-Projects validado para los ejemplos de B601-DM.</span></div>
      <div className="module-summary-card"><b>1.3 Instalar paquetes</b><span>Instala LeRobot, el paquete del robot B601, el paquete del teleoperador reBot 102 y MotorBridge.</span></div>
      <div className="module-summary-card"><b>1.4 Verificar la pila multimedia</b><span>Instala ffmpeg y confirma la compatibilidad de codificación de video antes de recopilar conjuntos de datos.</span></div>
    </div>

    <details className="content-details">
      <summary>Video de instalación</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/mWrWeqAPDSY" title="Install LeRobot" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>

    <div className="command-card">
      <h3>1. Instalar Miniforge</h3>
      <pre><code>{`cd ~
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh

~/miniforge3/bin/conda init bash
source ~/.bashrc`}</code></pre>
    </div>

    <div className="command-card">
      <h3>2. Clonar el repositorio LeRobot</h3>
      <pre><code>{`mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
git clone https://github.com/Seeed-Projects/lerobot.git`}</code></pre>
    </div>

    <div className="command-card">
      <h3>3. Crear el entorno conda e instalar paquetes</h3>
      <p>Utiliza el repositorio LeRobot verificado por Seeed para esta guía. El repositorio ascendente de LeRobot cambia rápidamente, por lo que los comandos y los formatos de los conjuntos de datos pueden diferir.</p>
      <pre><code>{`cd ~/rebot_lerobot

conda create -y -n lerobot python=3.12
conda activate lerobot

pip install -e ./lerobot
pip install lerobot-teleoperator-rebot-arm-102
pip install lerobot-robot-seeed-b601
pip install motorbridge`}</code></pre>
    </div>

    <div className="command-card">
      <h3>4. Instalar ffmpeg</h3>
      <pre><code>{`conda install ffmpeg -c conda-forge

# If you encounter compatibility issues:
conda install ffmpeg=7.1.1 -c conda-forge

# Check libsvtav1 support:
ffmpeg -encoders | grep svtav1`}</code></pre>
    </div>

    <details className="content-details">
      <summary>Configuración especial para Jetson JetPack 6.0+</summary>
      <p>Omite este paso en PCs normales. En Jetson, instala primero PyTorch y Torchvision con GPU habilitada y luego aplica los siguientes ajustes de dependencias cuando sea necesario.</p>
      <pre><code>{`conda install -y -c conda-forge "opencv>=4.10.0.84"
conda remove opencv
pip3 install opencv-python==4.10.0.84
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Comprobar PyTorch y Torchvision</summary>
      <p>La instalación con pip puede reemplazar tu PyTorch con GPU habilitada por una compilación para CPU. Verifica siempre la disponibilidad de CUDA antes de continuar.</p>
      <pre><code>{`python3

import torch
print(torch.cuda.is_available())  # Expected output: True`}</code></pre>
    </details>
  </section>

  <section id="calibration" className="section-card">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>Retira todos los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del espacio de trabajo del robot. Asegúrate de que el brazo esté firmemente fijado antes de ejecutar esta sección.</p>
  </div>
</div>

<div className="section-title">
      <span>Paso 2</span>
      <h2>Calibrar el brazo robótico</h2>
      <p>La calibración alinea las posiciones físicas de los brazos líder y seguidor. Esto es esencial para la teleoperación, la recopilación de conjuntos de datos y la transferencia de políticas entre robots.</p>
    </div>
    <div className="step-card-grid compact-grid">
      <div className="step-card"><span className="step-mini">2.1</span><strong>Conceder permisos</strong><p>Confirma que el puerto serie del líder y el puente serie USB2CAN B601-DM sean accesibles.</p></div>
      <div className="step-card"><span className="step-mini">2.2</span><strong>Calibrar el seguidor</strong><p>Establece la posición de referencia del seguidor B601-DM y verifica que la pinza esté en la postura cero correcta.</p></div>
      <div className="step-card"><span className="step-mini">2.3</span><strong>Calibrar el líder</strong><p>Calibra el brazo líder reBot 102 para que el mapeo de teleoperación sea coherente.</p></div>
    </div>

    <details className="content-details">
      <summary>Video de calibración</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/v8Ek1Ad1VWo" title="Calibrate reBot Arm B601-DM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>

    <div className="warning-card">
      <strong>Nota sobre recalibración</strong>
      <span>Si necesitas recalibrar, elimina los archivos de calibración en <code>{`~/.cache/huggingface/lerobot/calibration/robots`}</code> o <code>{`~/.cache/huggingface/lerobot/calibration/teleoperators`}</code> y luego ejecuta la calibración de nuevo.</span>
    </div>

    <div className="command-card">
      <h3>1. Conceder permisos de serie</h3>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB*  # Leader arm
sudo chmod 666 /dev/ttyACM*  # Follower arm / serial bridge`}</code></pre>
    </div>

    <div className="command-card">
      <h3>2. Calibrar el brazo seguidor B601-DM</h3>
      <p>Para B601-DM, la calibración del seguidor suele ser necesaria solo una vez después del montaje. La pinza debe estar completamente cerrada al seguir la referencia de posición cero.</p>
      <pre><code>{`lerobot-calibrate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao`}</code></pre>
      <div align="center">
        <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/b601dm_zeroposition.jpg" />
      </div>
    </div>

    <details className="content-details">
      <summary>3. Calibrar el brazo líder reBot 102</summary>
      <div className="warning-card">
        <strong>Importante</strong>
        <span>Cuando comienza la calibración, la posición actual de cada servo en el brazo líder reBot 102 se restablece a cero. Los límites de las articulaciones se definen en el archivo de configuración, no en los datos de calibración.</span>
      </div>
      <div align="center">
        <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/102_zeropposition.jpg" />
      </div>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB0

lerobot-calibrate \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader`}</code></pre>
      <p>Si esta es tu primera conexión y el dispositivo serie se desconecta inmediatamente, es posible que <code>brltty</code> esté ocupando el puerto. Elimínalo con <code>sudo apt remove brltty</code>.</p>
    </details>
  </section>

  <section id="teleoperation" className="section-card">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>Retira todos los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del espacio de trabajo del robot. Asegúrate de que el brazo esté firmemente fijado antes de ejecutar esta sección.</p>
  </div>
</div>

<div className="section-title">
      <span>Paso 3</span>
      <h2>Prueba de teleoperación</h2>
      <p>Después de la calibración, ejecuta una prueba básica de teleoperación líder-seguidor antes de añadir cámaras o grabar conjuntos de datos.</p>
    </div>
    <div className="module-summary-grid">
      <div className="module-summary-card"><b>Antes de empezar</b><span>Limpia el espacio de trabajo, fija la base del brazo y mantén una mano cerca del teclado para el procedimiento de parada.</span></div>
      <div className="module-summary-card"><b>Durante el movimiento</b><span>Mueve el líder lentamente y verifica la dirección de cada articulación antes de aumentar la velocidad o el rango.</span></div>
      <div className="module-summary-card"><b>Si se interrumpe</b><span>Detén el programa antes de reconectar la alimentación, USB, CAN o cables de cámara.</span></div>
    </div>

    <div className="danger-card">
      <strong>Recordatorio de seguridad</strong>
      <span>Si la alimentación, USB, CAN o los cables de señal se desconectan durante la teleoperación, detén primero el programa, devuelve el brazo a la posición cero, vuelve a conectar la alimentación y luego reinicia el programa.</span>
    </div>

    <div className="command-card">
      <h3>Ejecutar teleoperación</h3>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB*
sudo chmod 666 /dev/ttyACM*

lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader`}</code></pre>
    </div>

    <details className="content-details">
      <summary>Video de demostración de teleoperación</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/6_hXd_QXO2A" title="Teleoperation demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>
  </section>

  <section id="camera" className="section-card">
    <div className="section-title">
      <span>Paso 4</span>
      <h2>Añadir cámaras</h2>
      <p>Las cámaras proporcionan observaciones visuales para la recopilación de datos y el entrenamiento de políticas. Comienza con una cámara OpenCV sencilla y luego pasa a RealSense u Orbbec si necesitas datos RGB-D.</p>
    </div>
    <div className="module-summary-grid">
      <div className="module-summary-card"><b>Opción A: cámara USB</b><span>Mejor primera prueba para validar la configuración de cámara de LeRobot y display_data.</span></div>
      <div className="module-summary-card"><b>Opción B: RealSense</b><span>Úsala cuando necesites observaciones RGB-D y compatibilidad con Intel RealSense SDK.</span></div>
      <div className="module-summary-card"><b>Opción C: Orbbec</b><span>Usa Gemini2 / Gemini 336 cuando tu flujo de trabajo necesite flujos RGB-D de Orbbec.</span></div>
    </div>

    <div className="camera-grid">
      <details className="content-details" open>
        <summary>Cámara genérica USB / OpenCV</summary>
        <pre><code>{`lerobot-find-cameras opencv

lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}</code></pre>
        <p>Para varias cámaras USB, evita conectar demasiadas cámaras de alta resolución al mismo hub USB.</p>
      </details>

      <details className="content-details">
        <summary>RealSense D405 / D435i</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport
pip install -e ".[realsense]"
sudo chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras realsense

lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras='{
      d435i_color: {type: realsense_d435i_color, serial_number_or_name: "419522072950", width: 640, height: 480, fps: 30, color_mode: rgb, color_stream_format: rgb8, rotation: 0, warmup_s: 1},
      d435i_depth: {type: realsense_d435i_depth, serial_number_or_name: "419522072950", width: 640, height: 480, fps: 30, max_depth_m: 2.0, depth_alpha: 0.2, rotation: 0, warmup_s: 5}
    }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}</code></pre>
      </details>

      <details className="content-details">
        <summary>Orbbec Gemini2 / Gemini 336</summary>
        <pre><code>{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport
pip install -e ".[orbbec]"
sudo chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras orbbec

lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras='{
      orbbec_color: {type: orbbec_color, serial_number_or_name: "CP9JA530003A", width: 640, height: 480, fps: 30, color_mode: rgb, rotation: 0, warmup_s: 1},
      orbbec_depth: {type: orbbec_depth, serial_number_or_name: "CP9JA530003A", width: 640, height: 400, fps: 30, depth_alpha: 0.2, rotation: 0, warmup_s: 5}
    }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true`}</code></pre>
        <p>Si ves <code>No Orbbec camera found</code>, ejecuta <code>lerobot-find-cameras orbbec</code> y actualiza el número de serie en la configuración de tu cámara.</p>
      </details>
    </div>
  </section>

  <section id="record-dataset" className="section-card">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>Retira todos los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del espacio de trabajo del robot. Asegúrate de que el brazo esté firmemente fijado antes de ejecutar esta sección.</p>
  </div>
</div>

<div className="section-title">
      <span>Paso 5</span>
      <h2>Recopilar conjuntos de datos</h2>
      <p>Una vez que la teleoperación y las cámaras sean estables, graba demostraciones para tu tarea objetivo. Puedes guardar los conjuntos de datos localmente o subirlos a Hugging Face Hub.</p>
    </div>
    <div className="step-card-grid compact-grid">
      <div className="step-card"><span className="step-mini">5.1</span><strong>Graba primero localmente</strong><p>Usa un número reducido de episodios y mantén push_to_hub desactivado mientras validas el flujo de trabajo.</p></div>
      <div className="step-card"><span className="step-mini">5.2</span><strong>Comprueba los controles</strong><p>Usa atajos de teclado para finalizar, cancelar o detener episodios de forma segura durante la grabación.</p></div>
      <div className="step-card"><span className="step-mini">5.3</span><strong>Sube cuando sea estable</strong><p>Haz push a Hugging Face solo después de confirmar que la estructura y las estadísticas del conjunto de datos local son correctas.</p></div>
    </div>

    <details className="content-details">
      <summary>Vídeo de recopilación del conjunto de datos</summary>
      <div className="video-container">
        <iframe width="900" height="600" src="https://www.youtube.com/embed/PLACEHOLDER" title="Dataset collection video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </details>

    <details className="content-details" open>
      <summary>Guardar el conjunto de datos localmente</summary>
      <pre><code>{`lerobot-record \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30`}</code></pre>
      <p>El conjunto de datos se guardará en <code>{`~/.cache/huggingface/lerobot`}</code> usando el ID de repositorio que proporcionaste.</p>
    </details>

    <details className="content-details">
      <summary>Subir el conjunto de datos a Hugging Face Hub</summary>
      <pre><code>{`huggingface-cli login --token \${HUGGINGFACE_TOKEN} --add-to-git-credential

HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER

lerobot-record \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
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
      <div className="content-table">
        <table>
          <thead><tr><th>Tecla</th><th>Acción</th></tr></thead>
          <tbody>
            <tr><td>Flecha derecha</td><td>Finaliza el episodio actual o restablece antes de tiempo y pasa al siguiente.</td></tr>
            <tr><td>Flecha izquierda</td><td>Cancela el episodio actual y vuelve a grabarlo.</td></tr>
            <tr><td>ESC</td><td>Detiene la sesión inmediatamente, codifica los vídeos y sube el conjunto de datos si está habilitado.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Si los eventos de teclado no responden, prueba <code>pip install pynput==1.6.8</code>.</p>
    </details>

    <div className="tip-card">
      <strong>Consejos sobre la calidad del conjunto de datos</strong>
      <span>Mantén fijas las posiciones de las cámaras, mantén la iluminación estable, asegúrate de que el objeto objetivo sea visible y recopila suficientes episodios. Para una tarea de agarre sencilla, comienza con al menos 50 episodios cuando sea posible.</span>
    </div>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Conjunto de datos</span>
      <h2>Visualizar y reproducir conjuntos de datos</h2>
      <p>Antes de entrenar, inspecciona el conjunto de datos grabado y verifica que las imágenes, estados, acciones y descripciones de tareas sean correctos.</p>
    </div>

    <div className="command-card">
      <h3>Visualizar un conjunto de datos</h3>
      <pre><code>{`lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_dm/test \
  --episode-index 0 \
  --display-compressed-images=false`}</code></pre>
    </div>

    <details className="content-details">
      <summary>Reproducir un episodio en el robot</summary>
      <p>Este paso puede ser inestable, por lo que es opcional.</p>
      <pre><code>{`lerobot-replay \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.can_adapter=damiao \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.episode=0`}</code></pre>
    </details>
  </section>

  <section id="training" className="section-card">

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>Retira todos los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del espacio de trabajo del robot. Asegúrate de que el brazo esté firmemente fijado antes de ejecutar esta sección.</p>
  </div>
</div>

<div className="section-title">
      <span>Paso 6</span>
      <h2>Entrenamiento y evaluación</h2>
      <p>Comienza con ACT para validar tu canal de datos. Después de eso, puedes probar SmolVLA, Pi0 / Pi0.5, GR00T N1.5, PEFT, entrenamiento multi‑GPU o inferencia asíncrona.</p>
    </div>
    <div className="module-summary-grid">
      <div className="module-summary-card"><b>Primero ACT</b><span>Línea base recomendada para verificar la calidad del conjunto de datos y el formato de las acciones del robot.</span></div>
      <div className="module-summary-card"><b>Políticas VLA</b><span>Prueba SmolVLA, Pi0 o Pi0.5 después de que el flujo de trabajo de ACT sea estable.</span></div>
      <div className="module-summary-card"><b>Modelos avanzados</b><span>Usa GR00T o inferencia asíncrona solo después de validar las dependencias, CUDA y el flujo de despliegue.</span></div>
    </div>

    <details className="content-details" open>
      <summary>ACT: política inicial recomendada</summary>
      <pre><code>{`lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_dm/test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000`}</code></pre>
      <p>Para GPUs RTX serie 50, añade <code>--dataset.video_backend=pyav</code> si las API de vídeo de torchvision causan errores.</p>
      <pre><code>{`lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model`}</code></pre>
    </details>

    <details className="content-details">
      <summary>SmolVLA: modelo base ligero para robots</summary>
      <p>SmolVLA es un modelo base ligero para afinar con tus propios conjuntos de datos de LeRobot. Utiliza imágenes de cámara, estados del robot e instrucciones de tarea en lenguaje natural para predecir fragmentos de acciones.</p>
      <pre><code>{`pip install -e ".[smolvla]"

lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=\${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true`}</code></pre>
      <pre><code>{`lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.id=follower1 \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --dataset.single_task="Grasp a lego block and put it in the bin." \
  --dataset.repo_id=\${HF_USER}/eval_DATASET_NAME_test \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=\${HF_USER}/FINETUNE_MODEL_NAME`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Pi0 / Pi0.5: entrenamiento de políticas VLA</summary>
      <p>Pi0 y Pi0.5 son políticas de Visión‑Lenguaje‑Acción. Son útiles cuando quieres explorar el control robótico condicionado por lenguaje.</p>
      <pre><code>{`pip install -e ".[pi]"

lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.repo_id=\${HF_USER}/my_pi0_policy \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false

lerobot-train \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --policy.type=pi05 \
  --output_dir=outputs/pi05_training \
  --job_name=pi05_training \
  --policy.repo_id=\${HF_USER}/my_pi05_policy \
  --policy.pretrained_path=lerobot/pi05_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false`}</code></pre>
    </details>

    <details className="content-details">
      <summary>GR00T N1.5: afinado avanzado de modelo base</summary>
      <p>GR00T N1.5 tiene requisitos más estrictos de CUDA y FlashAttention. Haz funcionar primero ACT o Pi0 y luego prueba GR00T.</p>
      <pre><code>{`pip install "torch>=2.2.1,<2.8.0" "torchvision>=0.21.0,<0.23.0"
pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
pip install "lerobot[groot]"`}</code></pre>
      <pre><code>{`lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30} }' \
  --robot.id=follower1 \
  --display_data=true \
  --dataset.repo_id=\${HF_USER}/eval_groot_rebot \
  --dataset.num_episodes=10 \
  --dataset.single_task="Grab the black cube and put it in the box" \
  --policy.path=\${HF_USER}/groot-rebot`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Reanudar el entrenamiento desde un checkpoint</summary>
      <pre><code>{`lerobot-train \
  --config_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true`}</code></pre>
    </details>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Avanzado</span>
      <h2>Opciones avanzadas</h2>
      <p>Estas secciones son opcionales. Úsalas después de haber completado correctamente la recopilación básica de datos y el entrenamiento con ACT.</p>
    </div>

    <details className="content-details">
      <summary>Afinado eficiente con PEFT / LoRA</summary>
      <pre><code>{`pip install -e ".[peft]"
pip install "lerobot[peft]"

lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --policy.repo_id=\${HF_USER}/my_libero_smolvla_peft \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_spatial \
  --output_dir=outputs/train/my_libero_smolvla_peft \
  --job_name=my_libero_smolvla_peft \
  --policy.device=cuda \
  --steps=10000 \
  --batch_size=32 \
  --optimizer.lr=1e-3 \
  --peft.method_type=LORA \
  --peft.r=64`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Entrenamiento multi‑GPU</summary>
      <pre><code>{`pip install accelerate

accelerate launch \
  --multi_gpu \
  --num_processes=2 \
  $(which lerobot-train) \
  --dataset.repo_id=\${HF_USER}/my_dataset \
  --policy.type=act \
  --policy.repo_id=\${HF_USER}/my_trained_policy \
  --output_dir=outputs/train/act_multi_gpu \
  --job_name=act_multi_gpu \
  --wandb.enable=true`}</code></pre>
      <p>El entrenamiento multi‑GPU incrementa el tamaño de lote efectivo. Es posible que necesites reducir los pasos de entrenamiento o escalar la tasa de aprendizaje según tu configuración.</p>
    </details>

    <details className="content-details">
      <summary>Despliegue de inferencia asíncrona</summary>
      <p>La inferencia asíncrona permite que el robot ejecute el fragmento de acción actual mientras el servidor calcula el siguiente fragmento. Es útil para modelos más grandes o inferencia remota.</p>
      <pre><code>{`pip install -e ".[async]"

python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=127.0.0.1:8080

python -m lerobot.async_inference.robot_client \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras='{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"} }' \
  --robot.id=follower1 \
  --server_address=127.0.0.1:8080 \
  --actions_per_chunk=50 \
  --chunk_size_threshold=0.5 \
  --fixed_update_fps=30 \
  --visualize_action_queue=false`}</code></pre>
      <div className="danger-card">
        <strong>Nota de seguridad</strong>
        <span>No expongas directamente a internet pública un servidor de inferencia asíncrona sin autenticación. Usa VPN, túneles SSH o restricciones estrictas de IP de origen.</span>
      </div>
    </details>
  </section>

  <section id="faq" className="section-card">
    <div className="section-title">
      <span>FAQ</span>
      <h2>Problemas comunes</h2>
    </div>

    <details className="content-details">
      <summary>¿Por qué usar el repositorio Seeed-Projects/lerobot?</summary>
      <p>Esta guía está validada con <code>https://github.com/Seeed-Projects/lerobot.git</code>. El repositorio ascendente de LeRobot cambia rápidamente y puede introducir diferencias en comandos, dependencias o formato de conjuntos de datos.</p>
    </details>

    <details className="content-details">
      <summary>No se puede conectar a /dev/ttyUSB0 o /dev/ttyACM0</summary>
      <p>Si el dispositivo existe pero la conexión falla, concede permisos de serie:</p>
      <pre><code>{`sudo chmod 666 /dev/ttyUSB* /dev/ttyACM*`}</code></pre>
    </details>

    <details className="content-details">
      <summary>No se encontró un flujo válido en el archivo de entrada</summary>
      <p>Instala ffmpeg 7.1.1:</p>
      <pre><code>{`conda install ffmpeg=7.1.1 -c conda-forge`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Los atajos de teclado no responden durante la grabación</summary>
      <p>Comprueba la variable de entorno <code>$DISPLAY</code> en Linux. También puedes probar a hacer downgrade de pynput:</p>
      <pre><code>{`pip install pynput==1.6.8`}</code></pre>
    </details>

    <details className="content-details">
      <summary>Consejos para entrenamiento y recopilación de datos</summary>
      <p>Mantén las cámaras fijas, la iluminación estable, evita fondos inestables, recopila suficientes episodios y no detengas la recopilación de datos antes de que LeRobot calcule las estadísticas del conjunto de datos.</p>
    </details>
  </section>

  <section className="section-card">
    <div className="section-title">
      <span>Referencias</span>
      <h2>Referencias</h2>
    </div>
    <div className="reference-grid">
      <a href="https://wiki.seeedstudio.com/es/lerobot_so100m/">Brazo Seeed SO100 en LeRobot</a>
      <a href="https://github.com/TheRobotStudio/SO-ARM100">TheRobotStudio SO-ARM10x</a>
      <a href="https://github.com/huggingface/lerobot/tree/main">Hugging Face LeRobot</a>
      <a href="https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot">Jetson Containers</a>
      <a href="https://www.jetson-ai-lab.com/lerobot.html">Jetson AI Lab</a>
      <a href="https://diffusion-policy.cs.columbia.edu/">Diffusion Policy</a>
      <a href="https://tonyzhaozh.github.io/aloha/">ACT / ALOHA</a>
      <a href="https://sjlee.cc/vq-bet/">VQ-BeT</a>
    </div>
  </section>


<section className="course-nav-section section-card section-block">
  <div className="section-title">
    <span>Ruta de aprendizaje</span>
    <h2>Continúa con la ruta de aprendizaje de reBot B601-DM</h2>
    <p>Estos tutoriales están diseñados para leerse en el mismo orden que la página de robótica: comienza con la puesta en marcha básica, luego pasa a la recopilación de datos con LeRobot, depuración de cinemática, agarre visual y, por último, integración con ROS2.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-step" href="/es/rebot_b601_dm_getting_started/">
      <span className="course-index">1</span>
      <div>
        <strong>Primeros pasos</strong>
        <small>Desempaquetado completo, cableado, comprobaciones de alimentación, configuración del controlador, calibración y pruebas básicas de movimiento.</small>
      </div>
      <em>Empieza aquí</em>
    </a>
    <a className="course-step active" href="/es/rebot_arm_b601_dm_lerobot/">
      <span className="course-index">2</span>
      <div>
        <strong>Teleoperación y recopilación de datos con LeRobot</strong>
        <small>Teleopera el brazo, conecta cámaras, registra conjuntos de datos, entrena políticas y evalúa el comportamiento del brazo real.</small>
      </div>
      <em>Artículo actual</em>
    </a>
    <a className="course-step" href="/es/rebot_arm_b601_dm_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <div>
        <strong>Visualización de cinemática con Pinocchio</strong>
        <small>Comprende modelos de robots, marcos de coordenadas, FK / IK, planificación de trayectorias y compensación de gravedad.</small>
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
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.85fr);
  gap: 1.5rem;
  align-items: stretch;
  padding: 2rem;
  margin: 1.5rem 0 1.25rem;
  border: 1px solid var(--rb-border);
  border-radius: 28px;
  background:
    radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%),
    radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%),
    linear-gradient(135deg, rgba(248,250,252,0.96), rgba(255,255,255,0.94));
  box-shadow: var(--rb-shadow);
  overflow: hidden;
}
.eyebrow {
  display: inline-flex;
  padding: 0.35rem 0.7rem;
  margin-bottom: 0.85rem;
  border-radius: 999px;
  color: var(--rb-primary);
  background: var(--rb-primary-soft);
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(n+2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1rem; border-radius: 22px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card img { width: 100%; border-radius: 18px; border: 1px solid var(--rb-border); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; text-align: center; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.86rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.section-title { margin-bottom: 1rem; }
.section-title span { display: inline-flex; color: var(--rb-primary); font-size: 0.76rem; font-weight: 900; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); font-size: 1.55rem; }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.68; }
.path-grid, .info-grid, .two-col, .camera-grid, .module-summary-grid, .step-card-grid, .reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.9rem; }
.path-card, .info-grid > div, .check-card, .module-summary-card, .step-card, .content-details, .warning-card, .danger-card, .tip-card, .reference-grid a { border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface-soft); box-shadow: 0 10px 24px rgba(15,23,42,0.045); }
.path-card { display: block; padding: 1rem; text-decoration: none !important; color: inherit; transition: all 0.18s ease; }
.path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.42); }
.path-card span, .step-mini { display: inline-flex; align-items: center; justify-content: center; width: fit-content; min-width: 2.2rem; height: 2rem; padding: 0 0.65rem; margin-bottom: 0.65rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; font-size: 0.82rem; }
.path-card b, .module-summary-card b, .step-card strong, .info-grid strong, .check-card h3, .warning-card strong, .danger-card strong, .tip-card strong { display: block; color: var(--rb-text); margin-bottom: 0.35rem; }
.path-card small, .module-summary-card span, .step-card p, .info-grid span, .warning-card span, .danger-card span, .tip-card span { display: block; color: var(--rb-muted); line-height: 1.6; }
.module-summary-card, .step-card, .info-grid > div, .check-card, .warning-card, .danger-card, .tip-card { padding: 1rem; }
.compact-grid { grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); }
.content-details { margin: 0.9rem 0; overflow: hidden; }
.content-details summary { cursor: pointer; list-style: none; padding: 0.95rem 1rem; font-weight: 900; color: var(--rb-text); background: linear-gradient(90deg, rgba(37,99,235,0.08), transparent); }
.content-details[open] summary { border-bottom: 1px solid var(--rb-border); }
.content-details summary::-webkit-details-marker { display: none; }
.content-details > *:not(summary) { margin-left: 1rem; margin-right: 1rem; }
.command-card { margin: 1rem 0; padding: 1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: #fff; box-shadow: 0 10px 24px rgba(15,23,42,0.045); }
.command-card h3 { margin-top: 0; color: var(--rb-text); }
.command-card p, .content-details p { color: var(--rb-muted); line-height: 1.65; }
.warning-card { border-color: rgba(245,158,11,0.34); background: linear-gradient(180deg, #fffbeb, var(--rb-surface)); }
.danger-card { border-color: rgba(239,68,68,0.34); background: linear-gradient(180deg, #fef2f2, var(--rb-surface)); }
.tip-card { border-color: rgba(20,184,166,0.32); background: linear-gradient(180deg, #f0fdfa, var(--rb-surface)); }
.video-container { position: relative; width: calc(100% - 2rem); max-width: 960px; margin: 1rem auto; aspect-ratio: 16 / 9; border-radius: 18px; overflow: hidden; background: #0f172a; border: 1px solid var(--rb-border); }
.video-container iframe { width: 100%; height: 100%; border: 0; }
.image-wrap, div[align="center"] { text-align: center; margin: 1rem 0; }
.image-wrap img, div[align="center"] img { max-width: 820px; width: 100%; border-radius: 18px; border: 1px solid var(--rb-border); }
.content-table { overflow-x: auto; }
.content-table table { width: 100%; }
.reference-grid a { display: block; padding: 0.85rem 0.95rem; text-decoration: none !important; color: var(--rb-text); transition: all 0.18s ease; }
.reference-grid a:hover { color: var(--rb-primary); transform: translateY(-2px); }
.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.course-nav-section { margin-top: 1.6rem; }
.course-path-grid { display: grid; gap: 0.85rem; }
.course-step { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 10px 24px rgba(15,23,42,0.05); }
.course-step.active { border-color: rgba(37,99,235,0.42); background: linear-gradient(135deg, rgba(239,246,255,0.92), rgba(240,253,250,0.78)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; color: #fff; background: var(--rb-primary); font-weight: 900; box-shadow: 0 10px 22px rgba(37,99,235,0.24); }
.course-step strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.24rem; }
.course-step small { display: block; color: var(--rb-muted); line-height: 1.55; font-size: 0.92rem; }
.course-step em { justify-self: end; white-space: nowrap; font-style: normal; font-size: 0.78rem; font-weight: 800; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.2); border-radius: 999px; padding: 0.35rem 0.65rem; }
pre { overflow-x: auto; border-radius: 16px; border: 1px solid var(--rb-border); }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav, html[data-theme='dark'] .command-card { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .safety-alert { border-color: rgba(248,113,113,0.42); background: linear-gradient(135deg, rgba(127,29,29,0.26), rgba(124,45,18,0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0,0,0,0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248,113,113,0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
html[data-theme='dark'] .course-step.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.10)); }
@media (max-width: 900px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 640px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .safety-alert, .course-step { grid-template-columns: 1fr; } .course-step em { justify-self: start; } }
`}</style>
