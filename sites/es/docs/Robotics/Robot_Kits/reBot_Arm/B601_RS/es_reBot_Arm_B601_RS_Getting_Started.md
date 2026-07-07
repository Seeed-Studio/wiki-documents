---
description: Esta guía te ayudará a comenzar con el reBot Arm B601-RS, incluyendo comprobaciones de la fuente de alimentación, montaje, calibración, configuración de MotorBridge y configuración básica de software.
title: Inicio rápido de reBot Arm B601-RS
keywords:
  - reBot
  - B601-RS
  - Brazo robótico
  - Robot
  - LeRobot
  - Pinocchio
  - 6 DOF
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_b601_rs_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-07-04
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/
---

# Inicio rápido de reBot Arm B601-RS

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Wiki de robótica de Seeed Studio</span>
    <h2>Pon tu reBot Arm B601-RS en línea de forma segura, desde el desempaquetado hasta la calibración</h2>
    <p>Esta guía sigue el flujo real de primer uso: identifica tu tipo de kit, comprueba la fuente de alimentación de 48 V, monta el brazo si es necesario, inspecciona el mazo de cables, configura PCAN-USB, calibra las posiciones cero y prueba el brazo en MotorBridge.</p>
    <div className="hero-actions">
      <a href="#agent">Comenzar con el Agente de IA</a>
      <a href="#start-path">Elegir tu ruta de configuración</a>
      <a href="#motorbridge">Saltar a MotorBridge</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Ruta de lectura recomendada</strong>
    <span>Si utilizas Codex, Cursor, Trae u otras herramientas similares, comienza primero con el flujo de trabajo del Agente de IA.</span>
    <span>Kit preensamblado: los ID de los motores ya están escritos. Concéntrate en el cableado, la alimentación, PCAN-USB y la calibración de la posición cero.</span>
  </div>
</section>

<div className="quick-note">
  <strong>Recordatorio de seguridad:</strong> El B601-RS utiliza una fuente de alimentación de 48 V y actuadores articulares RobStride. Asegura el brazo antes de depurar, mantente al menos a 1 metro de distancia durante las pruebas de movimiento y apaga siempre la alimentación antes de conectar o desconectar cables de motor o conectores XT30.
</div>


<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Advertencia de seguridad: despeja el área de trabajo del robot antes de ejecutar</strong>
    <p>Antes de ejecutar cualquier programa que mueva el brazo robótico, retira todos los objetos de valor, objetos frágiles, herramientas, cables y objetos no relacionados dentro de un <strong>radio de 1 metro</strong> del área de trabajo del robot. Durante la depuración y la operación, el personal debe mantenerse alejado del rango de movimiento del robot.</p>
    <ul>
      <li>No toques las articulaciones, motores, eslabones, la garra ni el efector final después de encender el brazo robótico.</li>
      <li>Antes de ejecutar la calibración, MotorBridge, teleoperación, recopilación de datos, control IK, control de trayectoria, compensación de gravedad, agarre visual, acciones ROS2 o ejecución con MoveIt, asegúrate de que el brazo robótico esté firmemente fijado.</li>
      <li>Si se produce un movimiento anómalo, ruido, vibración, cables sueltos, mal contacto de alimentación o pérdida de comunicación, detén el programa inmediatamente y apaga el sistema antes de la inspección.</li>
      <li>Apaga siempre el sistema antes de conectar o desconectar cables de motor, cables CAN, adaptadores PCAN-USB, conectores XT30 o conectores de alimentación.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="reBot B601-RS quick navigation">
  <a href="#start-path">Ruta de configuración</a>
  <a href="#power">Comprobación de alimentación</a>
  <a href="#assembly">Paso 1 Montaje</a>
  <a href="#motorbridge">Paso 2 Calibración / Agente de IA</a>
  <a href="#pcan">PCAN-USB</a>
</nav>

<section id="start-path" className="section-card">
  <div className="section-title">
    <span>Comienza aquí</span>
    <h2>Primero, identifica tu tipo de kit</h2>
    <p>El flujo de trabajo es diferente para un kit B601-RS preensamblado y para un kit DIY. Confirmar esto primero ayuda a evitar escrituras innecesarias de ID de motor u otras operaciones de riesgo.</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#motorbridge">
      <b>Compré un kit preensamblado</b>
      <span>Los ID de los motores ya se han escrito. Después de desempaquetar, conecta el mazo de cables de las articulaciones 1-2, comprueba la fuente de alimentación, configura PCAN-USB y procede a la calibración de la posición cero.</span>
      <em>Comienza desde el Paso 2</em>
    </a>
    <a className="path-card" href="#assembly">
      <b>Compré un kit DIY o necesito montarlo yo mismo</b>
      <span>Recomendamos abrir primero el flujo de trabajo del Agente de IA para que el Agente pueda guiar las comprobaciones de entorno y seguridad antes de que completes el montaje, el cableado, las comprobaciones de alimentación, la configuración de PCAN-USB y la calibración.</span>
      <em>Sigue Paso 1 → Paso 2</em>
    </a>
  </div>

  :::tip
  Se ha verificado que las máquinas virtuales tienen un rendimiento insuficiente para la demostración y pueden introducir problemas de configuración. Recomendamos utilizar siempre que sea posible una máquina física con Ubuntu.
  :::
</section>

<section className="section-card">
  <div className="section-title">
    <span>Descripción general</span>
    <h2>Descripción general del proyecto</h2>
    <p>El proyecto reBot Arm es de código abierto en <a href="https://github.com/Seeed-Projects/reBot-DevArm" target="_blank">GitHub</a>. Esta guía te acompaña a través del flujo básico del B601-RS desde el montaje hasta el control con MotorBridge.</p>
  </div>

  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
  </div>

  <div className="badge-row">
    <span>Brazo robótico de 6 DOF</span>
    <span>Motores RobStride</span>
    <span>MotorBridge</span>
    <span>Código abierto</span>
  </div>

  <div className="buy-box">
    <a href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Bundle-p-6898.html" target="_blank">Obtener reBot Arm B601-RS</a>
  </div>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>Retira los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del área de trabajo del robot. Asegúrate de que el brazo esté firmemente fijado antes de ejecutar esta sección.</p>
  </div>
</div>

<section id="power" className="section-card warning-section">
  <div className="section-title">
    <span>Antes de encender</span>
    <h2>Fuente de alimentación: comprueba esto antes de encender el brazo</h2>
    <p>El B601-RS no incluye una fuente de alimentación por defecto en algunas configuraciones. Utiliza una fuente de alimentación de 48 V de buena reputación y ajusta correctamente el selector de voltaje para tu región antes de encender.</p>
  </div>

  :::danger
  No utilices fuentes de alimentación sin marca o inseguras. Desconecta siempre la alimentación antes de cablear, conectar o desconectar conectores XT30 o conectar cables de motor.
  :::

  <div className="power-grid">
    <div>
      <h4>Regiones de 220 V</h4>
      <p>Ajusta el interruptor selector de voltaje en el lateral de la fuente de alimentación a <strong>230V</strong>.</p>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" alt="Interruptor 230V" />
    </div>
    <div>
      <h4>Regiones de 110 V</h4>
      <p>Ajusta el interruptor selector de voltaje en el lateral de la fuente de alimentación a <strong>115V</strong>.</p>
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" alt="Interruptor 115V" />
    </div>
  </div>

  <p>Puedes comprar el <a href="https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-RS-p-6873.html" target="_blank">kit de adaptador de alimentación MeanWell de 48V 12.5A</a> de código abierto, o consultar la lista de materiales (BOM) en el repositorio de GitHub para montar tú mismo la carcasa de la fuente de alimentación. El autoensamblaje solo se recomienda para desarrolladores con experiencia en montaje de fuentes de alimentación.</p>

  <div className="image-frame compact-image">
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100054289-gallery-6.jpg" alt="Fuente de alimentación de reBot Arm B601-RS" />
  </div>

  <details className="video-details">
    <summary>Ver el video de referencia de la fuente de alimentación</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/5GitUWT9gx0?si=I_dnd2bSNHbB95BW" title="Power supply reference video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>
</section>

<section id="assembly" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Paso 1</span>
    <div>
      <h2>Monta el brazo robótico</h2>
      <p>Este paso es obligatorio para los kits DIY. Si compraste un kit preensamblado, puedes omitir esta sección e ir directamente a la calibración y la operación básica.</p>
    </div>
  </div>

  <div className="checklist-grid">
    <div><strong>Revisa con cuidado</strong><span>El kit incluye muchos tornillos y piezas estructurales, algunas de las cuales se parecen. Confirma las especificaciones y la orientación antes de fijarlas.</span></div>
    <div><strong>Sugerencia de herramienta</strong><span>Se recomienda un destornillador eléctrico. Ajusta el par a un nivel bajo a medio, alrededor de 3-6 kgf.cm, para evitar barrer los tornillos.</span></div>
    <div><strong>Aviso de seguridad</strong><span>El cuerpo del brazo contiene piezas metálicas. Evita pellizcarte los dedos o sufrir lesiones por aplastamiento. Los niños solo deben montarlo bajo la supervisión de un adulto.</span></div>
  </div>

  :::warning
  El enlace del video de montaje se deja intencionadamente en blanco por ahora y se añadirá después de subir el video. Pueden producirse pequeños ajustes de piezas con el tiempo; las piezas enviadas deben considerarse como la referencia final.
  :::

  <details className="content-details" open>
    <summary>Marcador de posición del video de montaje</summary>
    <div className="video-placeholder">
      Enlace del video de montaje: <span>se añadirá</span>
    </div>
  </details>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>Retira los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del área de trabajo del robot. Asegúrate de que el brazo esté firmemente fijado antes de ejecutar esta sección.</p>
  </div>
</div>

<section id="motorbridge" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Paso 2</span>
    <div>
      <h2>Calibra el brazo robótico y ejecuta la primera prueba</h2>
      <p>Este paso cubre la inspección del mazo de cables, la calibración de la posición cero, la instalación de MotorBridge y la depuración básica.</p>
    </div>
  </div>

  :::tip
  Si compraste una unidad preensamblada, todos los ID de los motores ya se han escrito y no es necesario volver a escribirlos. Para reducir la abrasión de los cables durante el envío, el mazo entre la Articulación 1 y la Articulación 2 no viene preinstalado. Después de desempaquetar, busca en el paquete el mazo con un conector en codo y un conector recto y conéctalo entre la Articulación 1 y la Articulación 2.
  :::

  <div id="agent" className="agent-inline-card">
    <div className="section-title">
      <span>Recomendado primero</span>
      <h2>Usa primero un Agente de IA para la inicialización guiada</h2>
      <p>Si estás utilizando herramientas de programación con IA como Codex, Cursor, Trae o Claude Code, recomendamos comenzar con el flujo de trabajo del Agente de IA. El Agente puede seguir AGENTS.md para guiarte en las comprobaciones del entorno, el escaneo en línea de los motores, la configuración de PCAN-USB, el arranque de MotorBridge Gateway y la calibración de la posición cero.</p>
    </div>

    :::warning
    El flujo de trabajo del Agente de IA aún está en beta. Mantén el brazo robótico asegurado, mantente fuera de su rango de movimiento durante la depuración y apaga la alimentación antes de conectar o desconectar cables de motor o conectores XT30. Si el Agente da instrucciones que entren en conflicto con esta guía, sigue esta guía.
    :::

    <div className="path-grid">
      <div className="path-card recommended">
        <b>Prompt recomendado para kits preensamblados</b>
        <span>Los ID de los motores ya se han escrito. Pídele al Agente que escanee los motores, compruebe el cableado, verifique el PCAN-USB, inicie MotorBridge y guíe la calibración de la posición cero. No vuelvas a escribir los ID de los motores.</span>
        <em>Recomendado</em>
      </div>
      <div className="path-card">
        <b>Prompt recomendado para kits DIY o recién ensamblados</b>
        <span>Si necesitas una inicialización completa, pídele al Agente que siga AGENTS.md paso a paso, desde las comprobaciones del entorno y el escaneo de motores hasta el arranque del gateway y la calibración.</span>
        <em>Flujo de trabajo completo</em>
      </div>
    </div>

    Copia el siguiente prompt en tu herramienta de programación con IA:

    ```text
    Please follow the workflow in AGENTS.md (https://github.com/Welt-liu/reBot-B601-Agent-Guide/blob/main/en/AGENTS.md) to help me initialize the reBot Arm B601-RS.

    If I am using a pre-assembled kit, do not rewrite the motor IDs. Only scan motors 1-7, verify that all motors are online, and continue with PCAN-USB, MotorBridge Gateway, and zero-position calibration checks.

    If I am using a DIY or newly assembled kit, confirm the safety requirements before each step and guide me through the full initialization workflow.
    ```

    :::tip
    Las herramientas recomendadas incluyen Codex, Cursor, Trae, Claude Code y asistentes de programación con IA similares. El flujo de trabajo de la interfaz web en este Wiki se mantiene para los usuarios que prefieren seguir los pasos manualmente.
    :::
  </div>

  <details className="content-details">
    <summary>Pieza de protección del mazo de cables del Motor 1</summary>

    La tensión prolongada sobre el mazo de cables del Motor 1 puede desgastar el conector del motor y provocar un mal contacto eléctrico. Imprimir la siguiente pieza puede reducir este riesgo.

    | Descripción de la pieza | Imagen | Nombre de archivo | Material | Cantidad | Especificaciones de impresión |
    | ---- | ---- | ---- | ---- | ---- | ---- |
    | Clips de mazo de cables de doble cara para Motor 1 | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/RS_Motor1_wiring_harness_clip.jpg" width="100" /> | [3D File](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/RS_Motor1_wiring_harness_clip.stp) | Bambu Lab PLA negro | 2 uds | Boquilla de 0,4 mm, altura de capa de 0,2 mm, 30% de relleno |
  </details>

  <div className="feature-grid">
    <div><strong>Control todo en uno de MotorBridge</strong><span>Es compatible con RobStride, Damiao, Hightorque, MyActuator, Hexfellow y más, y sigue dando soporte continuamente a la serie de brazos reBot.</span></div>
    <div><strong>Funciones para reBot</strong><span>Incluye calibración de posición cero con un clic, escritura de parámetros, control de motores mediante arrastrar y soltar y visualización de modelos integrada.</span></div>
    <div><strong>Compatibilidad multiplataforma</strong><span>Funciona en Windows, Ubuntu y macOS, con un SDK de Python que proporciona una funcionalidad coherente.</span></div>
  </div>

  <details className="video-details" open>
    <summary>Ver vídeo de calibración y primeros pasos</summary>
    <div className="video-container">
      <iframe src="https://www.youtube.com/embed/llSa6qn3yrY?si=hMuZKVDY9yqx3qHx" title="reBot Arm B601-RS calibration video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </details>

  <section className="sub-step-block">
    <h3>1. Instalar Miniforge (recomendado)</h3>
    <p>Instala Miniforge y crea un entorno virtual aislado para evitar conflictos de paquetes. Este flujo de trabajo es compatible con Windows, Ubuntu, macOS, Jetson y Raspberry Pi.</p>

    <details className="content-details">
      <summary>Ver comandos de instalación de Miniforge</summary>

      Ubuntu / Jetson / Raspberry Pi:

      ```bash
      wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
      bash Miniforge3-$(uname)-$(uname -m).sh
      ```

      macOS:

      ```bash
      curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
      bash Miniforge3-MacOSX-$(uname -m).sh
      ```

      Windows: abre la página de lanzamientos de Miniforge y descarga el último `Miniforge3-Windows-x86_64.exe`:

      ```text
      https://github.com/conda-forge/miniforge/releases
      ```
    </details>

    :::tip
    Si Git Bash no puede encontrar el comando `conda`, inicializa conda primero:

    ```bash
    source <install_path>/etc/profile.d/conda.sh
    echo 'source <install_path>/etc/profile.d/conda.sh' >> ~/.bashrc
    source ~/.bashrc
    ```

    Los usuarios de PowerShell pueden ejecutar:

    ```bash
    conda init powershell
    ```
    :::
  </section>

  <section className="sub-step-block">
    <h3>2. Crear y activar el entorno de reBot</h3>

    ```bash
    conda create -y -n rebot python=3.12
    conda activate rebot
    ```

    <p>Cada vez que abras una nueva terminal para usar funciones relacionadas con reBot, ejecuta de nuevo <code>conda activate rebot</code>.</p>
  </section>

  <section className="sub-step-block">
    <h3>3. Instalar MotorBridge</h3>

    :::tip Nota para usuarios de macOS
    Si la frecuencia de fotogramas de teleoperación es baja en macOS, puede deberse a un controlador WCH CH34x desactualizado. Para macOS 10.14 y posteriores, AppleUSBCHC0M ya está integrado en el sistema. Puedes desinstalar el controlador antiguo y usar el controlador integrado en su lugar.
    :::

    ```bash
    pip install motorbridge
    ```
  </section>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>Retira los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del espacio de trabajo del robot. Asegúrate de que el brazo esté firmemente fijado antes de ejecutar esta sección.</p>
  </div>
</div>

<section id="pcan" className="section-card">
  <div className="section-title">
    <span>Interfaz CAN</span>
    <h2>Configurar PCAN-USB</h2>
    <p>PCAN-USB permite que tu ordenador acceda al bus CAN a 1 Mbps para que pueda comunicarse con los actuadores RobStride en el B601-RS.</p>
  </div>

  <details className="content-details" open>
    <summary>Ubuntu / Jetson / Raspberry Pi</summary>

    ```bash
    sudo modprobe peak_usb
    ip -br link

    sudo ip link set can0 down 2>/dev/null
    sudo ip link set can0 type can bitrate 1000000 restart-ms 100
    sudo ip link set can0 up
    ```
  </details>

  <details className="content-details">
    <summary>macOS</summary>

    Instala primero PCBUSB:

    ```bash
    curl -L -o macOS_Library_for_PCANUSB_v0.13.tar.gz \
      https://raw.githubusercontent.com/tianrking/motorbridge/main/third_party/pcan/macos/macOS_Library_for_PCANUSB_v0.13.tar.gz
    tar -xzf macOS_Library_for_PCANUSB_v0.13.tar.gz
    cd PCBUSB
    sudo ./install.sh
    ```

    Configura `DYLD_LIBRARY_PATH` para que `motorbridge-gateway` pueda encontrar la biblioteca de tiempo de ejecución de PCBUSB:

    ```bash
    mkdir -p "$CONDA_PREFIX/etc/conda/activate.d"
    cat > "$CONDA_PREFIX/etc/conda/activate.d/env_vars.sh" << 'EOF'
    export DYLD_LIBRARY_PATH="/usr/local/lib${DYLD_LIBRARY_PATH:+:$DYLD_LIBRARY_PATH}"
    EOF

    echo $DYLD_LIBRARY_PATH
    ```

    Comprueba si el entorno está listo:

    ```bash
    python3 -c "import motorbridge; print('motorbridge OK')"
    motorbridge-cli --help
    python3 -c "import ctypes; ctypes.CDLL('libPCBUSB.dylib'); print('PCBUSB load OK')"
    ```
  </details>

  <details className="content-details">
    <summary>Windows</summary>
    Visita la <a href="https://www.peak-system.com/products/hardware/external-pc-interfaces/pcan-usb/" target="_blank">página oficial de PCAN-USB</a> e instala el controlador de PCAN-USB.
  </details>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>Retira los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del espacio de trabajo del robot. Asegúrate de que el brazo esté firmemente fijado antes de ejecutar esta sección.</p>
  </div>
</div>

<section className="section-card warning-section">
  <div className="section-title">
    <span>Restablecer posición cero</span>
    <h2>Iniciar MotorBridge Gateway para escritura y depuración de la posición cero</h2>
    <p>Después de abrir MotorBridge Studio, copia el comando que coincida con tu sistema operativo y placa controladora, luego confirma la dirección IP y el puerto antes de ejecutarlo.</p>
  </div>

  <div className="danger-list">
    <strong>Normas de seguridad antes de depurar</strong>
    <ul>
      <li>Prepara 2 mordazas de sujeción; se recomienda un tamaño ≥ 3 pulgadas.</li>
      <li>Utiliza una fuente de alimentación conmutada de 48 V de buena reputación con salida XT30.</li>
      <li>Mantente al menos a 1 metro de distancia durante la depuración y el funcionamiento.</li>
      <li>No conectes ni desconectes los motores en caliente. Desconecta la alimentación antes de conectar o desconectar los conectores XT30 2+2.</li>
      <li>No sobrecargues ni hagas funcionar los motores a exceso de velocidad. Comprueba el cableado y los elementos de fijación antes de arrancar.</li>
      <li>Configura parámetros de programa razonables y un mecanismo de parada de emergencia para evitar movimientos fuera de control.</li>
    </ul>
  </div>

  Abre <a href="https://motorbridge.github.io/motorbridge-studio/" target="_blank">MotorBridge Studio</a> en tu navegador, haz clic en Help y copia el comando correspondiente para tu sistema y placa controladora.

  ```bash
  motorbridge-gateway --bind 127.0.0.1:9002
  ```

  En macOS, si no se puede cargar la biblioteca de tiempo de ejecución PCBUSB, usa:

  ```bash
  DYLD_LIBRARY_PATH=/usr/local/lib motorbridge-gateway --bind 127.0.0.1:9002
  ```
</section>


<section className="section-card course-path-section">
  <div className="section-title">
    <span>Seguir aprendiendo</span>
    <h2>Ruta de aprendizaje de reBot B601-RS</h2>
    <p>Estos tutoriales están diseñados para seguirse en orden: Introducción → LeRobot → Pinocchio → Agarre visual → ROS2. Usa los enlaces de abajo para saltar entre módulos.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item active" href="/es/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Introducción</strong><span>Completa el desempaquetado, el cableado, las comprobaciones de alimentación, la configuración de PCAN-USB, la calibración y las primeras pruebas de movimiento.</span></span>
      <span className="course-tag">Empieza aquí</span>
    </a>
    <a className="course-path-item" href="/es/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>Teleoperación y recopilación de datos con LeRobot</strong><span>Teleopera el brazo, conecta cámaras, registra conjuntos de datos y prepara tareas de aprendizaje por imitación.</span></span>
      <span className="course-tag">Recopilación de datos</span>
    </a>
    <a className="course-path-item" href="/es/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Visualización de cinemática con Pinocchio</strong><span>Comprende los modelos de robot, articulaciones, marcos de coordenadas, cinemática directa/inversa, trayectorias y compensación de la gravedad.</span></span>
      <span className="course-tag">Control</span>
    </a>
    <a className="course-path-item" href="/es/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Demostración de agarre visual</strong><span>Combina percepción RGB-D, calibración mano-ojo, YOLO / GraspNet y generación de poses de agarre para sujetar objetos reales.</span></span>
      <span className="course-tag">Aplicación</span>
    </a>
    <a className="course-path-item" href="/es/rebot_arm_b601_rs_ros2_integration/">
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
.hero-actions a:nth-child(2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.quick-note { margin: 1rem 0; padding: 0.95rem 1.1rem; border-radius: 16px; color: #7c2d12; background: #fff7ed; border: 1px solid #fed7aa; line-height: 1.65; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.agent-inline-card { margin: 1rem 0 1.25rem; padding: 1.15rem; border-radius: 18px; background: linear-gradient(135deg, rgba(37,99,235,0.08), rgba(20,184,166,0.08)); border: 1px solid rgba(37,99,235,0.22); }
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
.power-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1rem 0; }
.power-grid div { padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-align: center; }
.power-grid h4 { margin: 0 0 0.35rem; color: var(--rb-text); }
.power-grid p { margin: 0.25rem 0 0.75rem; color: var(--rb-muted); }
.power-grid img { max-width: 100%; border-radius: 14px; }
.step-title-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
.step-pill { flex: 0 0 auto; display: inline-flex; align-items: center; justify-content: center; min-width: 74px; padding: 0.55rem 0.7rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-weight: 900; }
.step-title-row h2 { margin: 0 0 0.25rem; color: var(--rb-text); }
.step-title-row p { margin: 0; color: var(--rb-muted); line-height: 1.55; }
.content-details, .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.content-details summary, .video-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.content-details summary::-webkit-details-marker, .video-details summary::-webkit-details-marker { display: none; }
.content-details summary::after, .video-details summary::after { content: "Expand"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.content-details[open] summary::after, .video-details[open] summary::after { content: "Collapse"; }
.content-details > :not(summary), .video-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.content-details > :last-child, .video-details > :last-child { margin-bottom: 1rem; }
.video-container { position: relative; width: 100%; padding-bottom: 56.25%; margin: 1rem 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.video-placeholder { margin: 1rem; padding: 2.5rem 1rem; border: 1px dashed var(--rb-border); border-radius: 16px; text-align: center; color: var(--rb-muted); background: var(--rb-surface); }
.video-placeholder span { color: var(--rb-primary); font-weight: 850; }
.two-col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.danger-list { padding: 1rem; margin: 1rem 0; border-radius: 16px; border: 1px solid #fecaca; background: #fef2f2; color: #7f1d1d; }
.danger-list strong { display: block; margin-bottom: 0.5rem; }
.danger-list ul { margin-bottom: 0; }
.faq-images { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1rem 0; }
.faq-images img { max-width: 100%; border-radius: 14px; border: 1px solid var(--rb-border); }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
.rebot-page table { display: table; width: 100%; }
.rebot-page :global(table) { overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .quick-note { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .danger-list { background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.35); color: #fecaca; }
html[data-theme='dark'] .agent-inline-card { background: linear-gradient(135deg, rgba(96,165,250,0.12), rgba(45,212,191,0.10)); border-color: rgba(96,165,250,0.28); }
html[data-theme='dark'] .path-card em { color: #bbf7d0; background: rgba(34,197,94,0.18); }
@media (max-width: 900px) { .doc-hero, .power-grid, .two-col, .faq-images { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } .step-title-row { align-items: flex-start; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .step-title-row { display: block; } .step-pill { margin-bottom: 0.75rem; } }


.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239,68,68,0.38); background: linear-gradient(135deg, rgba(254,242,242,0.98), rgba(255,247,237,0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239,68,68,0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.safety-alert.compact .safety-alert-content strong { margin-bottom: 0.25rem; }
html[data-theme='dark'] .safety-alert { border-color: rgba(248,113,113,0.42); background: linear-gradient(135deg, rgba(127,29,29,0.26), rgba(124,45,18,0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0,0,0,0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248,113,113,0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }

.course-path-section { margin-top: 2rem; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface, var(--rb-card, #fff)); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 14px 30px rgba(37,99,235,0.12); }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
html[data-theme='dark'] .course-path-item { background: #111827; border-color: rgba(148,163,184,0.24); }
html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
@media (max-width: 700px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } }

`}</style>
