---
description: Este wiki proporciona un flujo de trabajo completo de LeRobot para SO-ARM100 / SO-ARM101, incluyendo montaje, calibración, teleoperación, cámaras, grabación de conjuntos de datos, entrenamiento, evaluación y consejos de despliegue.
title: Introducción a SO-ARM10x en LeRobot
keywords:
  - Lerobot
  - Huggingface
  - Arm
  - Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_so100m_new
sku: 114993666,114993667,114993668,101090144
last_update:
  date: 3/11/2026
  author: ZhangJiaQuan
createdAt: '2025-06-05'
updatedAt: '2026-08-18'
translation:
  skip: [zh-CN]
url: https://wiki.seeedstudio.com/es/lerobot_so100m_new/
---

import '/src/css/rebot-wiki-style.css';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introducción a los brazos robóticos SO-ARM100 y SO-ARM101 en LeRobot

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM10x × LeRobot</span>
    <h2>Desde el montaje y la calibración hasta la recopilación de datos, el entrenamiento y el despliegue en robots reales</h2>
    <p>
      Este wiki te guía a través del flujo de trabajo completo de SO-ARM100 / SO-ARM101 en LeRobot:
      configuración de hardware, configuración de servos, calibración del brazo, teleoperación, integración de cámaras,
      grabación de conjuntos de datos, visualización, reproducción, entrenamiento de políticas, evaluación y consejos de despliegue.
    </p>
    <div className="hero-actions">
      <a href="#quick-path">Ver ruta de aprendizaje</a>
      <a href="#install-lerobot">Instalar LeRobot</a>
      <a href="#record-dataset">Grabar un conjunto de datos</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Ruta de lectura recomendada</strong>
    <span>Nuevos usuarios: comienza con las especificaciones, las reglas de alimentación y la configuración de los servos.</span>
    <span>Usuarios con brazo preensamblado: salta a la calibración del brazo completo y la teleoperación.</span>
    <span>Usuarios existentes de LeRobot: ve directamente a cámaras, grabación de conjuntos de datos, entrenamiento o FAQ.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Advertencia de seguridad: despeja el espacio de trabajo del brazo robótico antes de ejecutar programas de movimiento</strong>
    <p>
      Antes de ejecutar cualquier programa que pueda mover el brazo robótico, retira objetos de valor, objetos frágiles,
      herramientas, cables y objetos no relacionados dentro de 1 metro del espacio de trabajo. Durante la depuración y la operación,
      mantén a las personas alejadas del rango de movimiento del brazo.
    </p>
    <ul>
      <li>No toques las articulaciones, motores, eslabones, la garra ni las herramientas finales después de encender el brazo.</li>
      <li>Antes de la configuración de servos, calibración, teleoperación, grabación de conjuntos de datos, reproducción o evaluación de políticas, asegúrate de que el brazo esté firmemente fijado.</li>
      <li>Mantén al menos 1 metro de distancia de seguridad y asegúrate de que las personas cercanas entiendan que el brazo puede moverse repentinamente.</li>
      <li>Si se produce un movimiento anormal, ruido, vibración, cables sueltos, mal contacto de alimentación o pérdida de comunicación, detén el programa inmediatamente y apaga la alimentación antes de la inspección.</li>
      <li>Apaga la alimentación antes de conectar o desconectar cables de servos, cables USB, conectores de alimentación o cables de la placa de control del motor.</li>
    </ul>
  </div>
</div>

{/* Markdown headings are intentionally kept outside visual cards so Docusaurus can generate the right-side table of contents. */}

<nav className="doc-nav" aria-label="SO-ARM10x LeRobot quick navigation">
  <a href="#quick-path">Ruta de aprendizaje</a>
  <a href="#overview">Descripción general</a>
  <a href="#specifications">Especificaciones</a>
  <a href="#install-lerobot">Instalar</a>
  <a href="#setup-motors-assembly">Motores</a>
  <a href="#calibration">Calibración</a>
  <a href="#teleoperation">Teleoperación</a>
  <a href="#camera">Cámaras</a>
  <a href="#record-dataset">Conjunto de datos</a>
  <a href="#training">Entrenamiento</a>
  <a href="#faq">FAQ</a>
</nav>

## Ruta de aprendizaje recomendada

<section id="quick-path" className="section-card course-path-section">
  <div className="section-title">
    <span>Resumen de pasos</span>
    <h2>Sigue paso a paso el flujo de trabajo real de depuración</h2>
    <p>Para una configuración inicial de SO-ARM10x, completa la preparación de hardware, la configuración del entorno y la calibración antes de pasar a la teleoperación, cámaras, conjuntos de datos, entrenamiento y evaluación.</p>
  </div>

  <div className="course-path-grid">
    <div className="course-path-item"><span className="course-index">1</span><div className="course-path-copy"><strong>Comprender el kit</strong><p>Confirma tu versión de SO-ARM100 / SO-ARM101, tipo de motor, voltaje y lista de materiales (BOM).</p></div><span className="course-tag">Preparar</span></div>
    <div className="course-path-item"><span className="course-index">2</span><div className="course-path-copy"><strong>Instalar LeRobot</strong><p>Configura Miniforge, el repositorio verificado de Seeed LeRobot, ffmpeg, PyTorch y las dependencias de cámara.</p></div><span className="course-tag">Entorno</span></div>
    <div className="course-path-item"><span className="course-index">3</span><div className="course-path-copy"><strong>Configurar motores y ensamblar</strong><p>Configura los ID de los servos y las tasas de baudios, luego ensambla los brazos líder y seguidor.</p></div><span className="course-tag">Hardware</span></div>
    <div className="course-path-item"><span className="course-index">4</span><div className="course-path-copy"><strong>Calibrar y teleoperar</strong><p>Calibra ambos brazos y verifica que la cadena de control de líder a seguidor sea estable.</p></div><span className="course-tag">Control</span></div>
    <div className="course-path-item"><span className="course-index">5</span><div className="course-path-copy"><strong>Añadir cámaras y grabar datos</strong><p>Conecta cámaras OpenCV, RealSense u Orbbec y graba episodios limpios y repetibles.</p></div><span className="course-tag">Datos</span></div>
    <div className="course-path-item"><span className="course-index">6</span><div className="course-path-copy"><strong>Entrenar y evaluar políticas</strong><p>Comienza con ACT, luego explora SmolVLA, Pi0, Pi0.5, GR00T, PEFT e inferencia asíncrona.</p></div><span className="course-tag">IA</span></div>
  </div>
</section>

## Descripción general

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Descripción general</span>
    <h2>Introducción al proyecto</h2>
    <p>SO-ARM10x combina un brazo robótico de bajo costo y código abierto con el ecosistema LeRobot para la recopilación de datos, el aprendizaje por imitación y el despliegue en robots reales.</p>
  </div>

:::tip
Este tutorial se ha actualizado para la última versión de [LeRobot](https://huggingface.co/docs/lerobot/index). Para ver la versión anterior, haz clic [aquí](https://wiki.seeedstudio.com/es/lerobot_so100m/).
:::

[SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100) es un proyecto de brazo robótico totalmente de código abierto lanzado por [TheRobotStudio](https://www.therobotstudio.com/). Incluye tanto un brazo seguidor como un brazo líder, con archivos detallados de impresión 3D y guías de operación. [LeRobot](https://github.com/huggingface/lerobot/tree/main) proporciona modelos PyTorch, conjuntos de datos y herramientas para robótica en el mundo real, reduciendo la barrera de entrada para el aprendizaje por imitación y el despliegue de políticas.

<div className="video-container">
  <iframe
    loading="lazy"
    width="900"
    height="600"
    src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd&autoplay=0&mute=1"
    title="SO-ARM10x LeRobot overview video"
    frameBorder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

SO-ARM10x y el kit de robótica con IA reComputer Jetson combinan el control de brazo robótico de alta precisión con una plataforma de computación de IA. Junto con Jetson Orin o AGX Orin y el framework LeRobot, esta configuración puede utilizarse para educación, investigación y experimentos de automatización industrial.

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" alt="Kit SO-ARM10x" />
</div>

<div className="get-one-now-panel">
  <a className="get-one-now-button" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank" rel="noopener noreferrer">
    Consigue uno ahora 🖱️
  </a>
</div>

:::caution
Seeed Studio es responsable de la calidad del hardware del kit. El tutorial de software sigue la documentación oficial de LeRobot tan de cerca como es posible. Si encuentras problemas de software o dependencias que no puedas resolver, consulta las FAQ al final de esta página e informa de los problemas en el [repositorio de GitHub de LeRobot](https://github.com/huggingface/lerobot) o en el [canal de Discord de LeRobot](https://discord.gg/8TnwDdjFGU).
:::

<div className="video-container">
  <iframe
    loading="lazy"
    width="900"
    height="600"
    src="https://www.youtube.com/embed/JrF_ymUvrqc?si=vslu5NNI-ZIzVXLc&autoplay=0&mute=1"
    title="SO-ARM10x project video"
    frameBorder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

</section>

## Características principales

<section id="features" className="section-card">
  <div className="section-title">
    <span>Características</span>
    <h2>Características principales</h2>
    <p>SO-ARM10x se centra en el aprendizaje de código abierto, la robótica de bajo costo, la integración con LeRobot y el despliegue en NVIDIA.</p>
  </div>

  <div className="feature-grid">
    <div><strong>Código abierto y bajo costo</strong><span>Una solución de brazo robótico de código abierto basada en el proyecto SO-ARM de TheRobotStudio.</span></div>
    <div><strong>Integración con LeRobot</strong><span>Diseñado para teleoperación, grabación de conjuntos de datos, entrenamiento y evaluación en robots reales en LeRobot.</span></div>
    <div><strong>Ricos recursos de aprendizaje</strong><span>Incluye guías de montaje, calibración, pruebas, conjuntos de datos, entrenamiento y despliegue.</span></div>
    <div><strong>Compatible con NVIDIA</strong><span>Se puede desplegar con plataformas como reComputer Mini J4012 Orin NX 16GB.</span></div>
    <div><strong>Aplicaciones en múltiples escenarios</strong><span>Adecuado para educación, investigación, demostraciones de automatización y aprendizaje de robótica.</span></div>
  </div>
</section>

## Novedades

<section id="updates" className="section-card">
  <div className="section-title">
    <span>Actualizaciones</span>
    <h2>Novedades en SO-ARM101</h2>
    <p>SO-ARM101 mejora el cableado, las relaciones de engranajes del brazo líder y el comportamiento de seguimiento en tiempo real.</p>
  </div>

  <div className="notice-grid">
    <div className="notice-card"><strong>Optimización del cableado</strong><span>En comparación con SO-ARM100, SO-ARM101 mejora el cableado y evita el problema de desconexión de la articulación 3. El nuevo enrutamiento ya no limita el rango de movimiento de la articulación.</span></div>
    <div className="notice-card"><strong>Actualización de la relación de engranajes del líder</strong><span>El brazo líder utiliza motores con una relación de engranajes optimizada, lo que mejora el rendimiento y elimina la necesidad de cajas de engranajes externas.</span></div>
    <div className="notice-card"><strong>Seguimiento en tiempo real</strong><span>El brazo líder puede seguir al brazo seguidor en tiempo real, lo que ayuda en futuros flujos de trabajo de políticas donde una persona puede intervenir y corregir las acciones del robot.</span></div>
  </div>
</section>


## Especificación

<section id="specifications" className="section-card">
  <div className="section-title">
    <span>Especificaciones</span>
    <h2>Especificación</h2>
    <p>Consulta las especificaciones de motor, alimentación, comunicación y control de SO-ARM100 y SO-ARM101.</p>
  </div>

<details className="content-details">
<summary>Ver especificaciones de SO-ARM10x</summary>

<table>
  <thead>
    <tr>
      <th>Tipo</th>
      <th colSpan="2">SO-ARM100</th>
      <th colSpan="2">SO-ARM101</th>
    </tr>
    <tr>
      <th></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank" rel="noopener noreferrer">Arm Kit</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank" rel="noopener noreferrer">Arm Kit Pro</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank" rel="noopener noreferrer">Arm Kit</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank" rel="noopener noreferrer">Arm Kit Pro</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Brazo líder</td>
      <td rowSpan="2">12x motores ST-3215- C001 (7.4V) con relación de engranajes 1:345 para todas las articulaciones</td>
      <td rowSpan="2">12x motores ST-3215-C018/ST-3215-C047 (12V) con relación de engranajes 1:345 para todas las articulaciones</td>
      <td colSpan="2">
        1x motor ST-3215- C001 (7.4V) con relación de engranajes 1:345 solo para la articulación 2<br />
        2x motores ST-3215-C044 (7.4V) con relación de engranajes 1:191 para las articulaciones 1 y 3<br />
        3x motores ST-3215-C046 (7.4V) con relación de engranajes 1:147 para las articulaciones 4, 5 y la pinza (articulación 6)
      </td>
    </tr>
    <tr>
      <td>Brazo seguidor</td>
      <td colSpan="2">Igual que SO-ARM100</td>
    </tr>
    <tr>
      <td>Fuente de alimentación</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>5.5 mm × 2.1 mm DC 12 V 2 A</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>
        5.5 mm × 2.1 mm DC 12 V 2 A (Brazo seguidor)<br />
        5.5 mm × 2.1 mm DC 5 V 4 A (Brazo líder)
      </td>
    </tr>
    <tr>
      <td>Sensor de ángulo</td>
      <td colSpan="4">Codificador magnético de 12 bits</td>
    </tr>
    <tr>
      <td>Temperatura de funcionamiento recomendada</td>
      <td colSpan="4">0 °C a 40 °C</td>
    </tr>
    <tr>
      <td>Comunicación</td>
      <td colSpan="4">UART</td>
    </tr>
    <tr>
      <td>Método de control</td>
      <td colSpan="4">PC</td>
    </tr>
  </tbody>
</table>

:::danger

Si compras la versión Arm Kit, ambas fuentes de alimentación son de 5V. Si compras la versión Arm Kit Pro, utiliza la fuente de alimentación de 5V para la calibración y cada paso del brazo robótico líder, y la fuente de alimentación de 12V para la calibración y cada paso del brazo robótico seguidor.

:::

</details>

</section>

## Lista de materiales (BOM)

<section id="bom" className="section-card">
  <div className="section-title">
    <span>BOM</span>
    <h2>Lista de materiales (BOM)</h2>
    <p>Consulta los servos, placas de control de motor, cables, fuentes de alimentación, abrazaderas y piezas opcionales impresas en 3D incluidas en el kit.</p>
  </div>

<details className="content-details">
<summary>Ver lista de materiales</summary>

| Parte | Cantidad | Incluido|
|--|--|--|
|  Servomotores | 12 | ✅ |
| Placa de control de motor | 2 | ✅ |
| Cable USB-C 2 uds | 1 | ✅ |
| Fuente de alimentación2 | 2 | ✅ |
| Abrazadera de mesa| 4 | ✅ |
| Piezas impresas en 3D del brazo | 1 | Opcional |

</details>

</section>

## Guía de impresión 3D

<section id="3d-printing" className="section-card">
  <div className="section-title">
    <span>Impresión 3D</span>
    <h2>Guía de impresión 3D</h2>
    <p>Elige los archivos STL correctos y la configuración de impresión antes de ensamblar una versión en kit del brazo.</p>
  </div>

<details className="content-details">
<summary>Ver parámetros de impresión 3D</summary>

:::caution
Tras la actualización oficial de SO101, SO100 ya no será compatible y los archivos fuente se eliminarán según lo indicado oficialmente, pero los archivos fuente aún se pueden encontrar en nuestro [Makerworld](https://makerworld.com/zh/models/908660). Sin embargo, para los usuarios que hayan comprado previamente SO100, los tutoriales y métodos de instalación siguen siendo compatibles. La impresión de SO101 es totalmente compatible con la instalación del kit de motor de SO100.
:::

**Paso 1: Elige una impresora**

Los archivos STL proporcionados están listos para imprimirse en muchas impresoras FDM. A continuación se muestran los ajustes probados y sugeridos, aunque otros también pueden funcionar.

- Material: PLA+
- Diámetro de boquilla y precisión: boquilla de 0.4mm con altura de capa de 0.2mm o boquilla de 0.6mm con altura de capa de 0.4mm.
- Densidad de relleno: 15%  

**Paso 2: Configura la impresora**

- Asegúrate de que la impresora esté calibrada y que la cama esté correctamente nivelada siguiendo las instrucciones específicas de la impresora.
- Limpia la cama de impresión, asegurándote de que esté libre de polvo o grasa. Si limpias la cama con agua u otro líquido, sécala.
- Si tu impresora lo recomienda, utiliza un pegamento en barra estándar y aplica una capa fina y uniforme de pegamento en el área de impresión de la cama. Evita grumos o una aplicación desigual.
- Carga el filamento de la impresora siguiendo las instrucciones específicas de la impresora.
- Asegúrate de que la configuración de la impresora coincida con la sugerida anteriormente (la mayoría de las impresoras tienen múltiples configuraciones, así que elige las que más se acerquen).
- Configura soportes en todas partes, pero ignora las pendientes mayores de 45 grados respecto a la horizontal.
- No debe haber soportes en los orificios de los tornillos con ejes horizontales.

**Paso 3: Imprime las piezas**

Todas las piezas para el líder o el seguidor están ya contenidas en un solo archivo para facilitar la impresión 3D, correctamente orientadas con el eje z hacia arriba para minimizar los soportes.

- Para tamaños de cama de impresora de 220mmx220mm (como la Ender), imprime estos archivos:
  - [Seguidor](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [Líder](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)

- Para tamaños de cama de impresora de 205mm x 250mm (como la Prusa/Up):
  - [Seguidor](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [Líder](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

**Paso 4: Imprime la pinza blanda (opcional)**

Si quieres que el brazo robótico pueda agarrar objetos blandos, frágiles o de forma irregular, puedes imprimir una pinza blanda para sustituir la pinza rígida predeterminada. Los archivos de impresión están disponibles en el repositorio [soarm_soft_gripper](https://github.com/xiehuangbao888/soarm_soft_gripper.git).

Instrucciones sobre el material de impresión:

- Dos dedos de la pinza: imprimir con material **TPU**
- Otras piezas: imprimir con material **PLA**

</details>

</section>

## Entorno inicial del sistema

<section id="environment" className="section-card">
  <div className="section-title">
    <span>Entorno</span>
    <h2>Entorno inicial del sistema</h2>
    <p>Confirma los requisitos de Ubuntu, Jetson, CUDA, Python, PyTorch y Torchvision antes de la instalación.</p>
  </div>

**Para Ubuntu x86:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6+  

**Para Jetson Orin:**

- Jetson JetPack 6.0 y 6.1, JetPack 6.2 aún no es compatible
- Python 3.10  
- Torch 2.3+

</section>

## Instalar LeRobot

<section id="install-lerobot" className="section-card">
  <div className="section-title">
    <span>Paso 1</span>
    <h2>Instalar LeRobot</h2>
    <p>Instala Miniforge, el repositorio verificado Seeed LeRobot, ffmpeg, PyTorch y dependencias específicas de hardware.</p>
  </div>

Entornos como pytorch y torchvision deben instalarse en función de tu versión de CUDA.

<Tabs defaultValue="Jetson">

<TabItem value="Jetson" label="Jetson">

1. Instala Miniforge:

<CodeBlock language="bash">
{`wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
chmod +x Miniforge3-Linux-aarch64.sh
./Miniforge3-Linux-aarch64.sh
# Follow the prompts by entering 'yes' or pressing Enter. Once the installation is complete:
source ~/.bashrc`}
</CodeBlock>

2. Crea y activa un entorno conda nuevo para lerobot

<CodeBlock language="bash">
{`conda create -y -n lerobot python=3.10 && conda activate lerobot`}
</CodeBlock>

3. Clona Lerobot:

<CodeBlock language="bash">
{`git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot`}
</CodeBlock>

4. Al usar miniforge, instala ffmpeg en tu entorno:

<CodeBlock language="bash">
{`conda install ffmpeg -c conda-forge`}
</CodeBlock>

:::tip
Esto normalmente instala ffmpeg 7.X para tu plataforma compilado con el codificador libsvtav1. Si libsvtav1 no es compatible (comprueba los codificadores compatibles con `ffmpeg -encoders`), puedes:

- [En cualquier plataforma] Instalar explícitamente ffmpeg 7.X usando:

<CodeBlock language="bash">
{`conda install ffmpeg=7.1.1 -c conda-forge`}
</CodeBlock>

- [Solo en Linux] Instalar las dependencias de compilación de ffmpeg y compilar ffmpeg desde el código fuente con libsvtav1, y asegurarte de usar el binario de ffmpeg correspondiente a tu instalación con `which ffmpeg`.

Si encuentras un error como este, también puedes usar este comando.

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" alt="" />
</div>

:::

5. Instala LeRobot con dependencias para los motores feetech:

<CodeBlock language="bash">
{`cd ~/lerobot && pip install -e ".[feetech]"`}
</CodeBlock>

6. Para dispositivos Jetson Jetpack 6.0+ (asegúrate de instalar [Pytorch-gpu and Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) desde el paso 5 antes de ejecutar este paso):

<CodeBlock language="bash">
{`conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision`}
</CodeBlock>

7. Comprobar Pytorch y Torchvision

Dado que instalar el entorno lerobot mediante pip desinstalará las versiones originales de Pytorch y Torchvision e instalará las versiones de CPU de Pytorch y Torchvision, necesitas realizar una comprobación en Python.

<CodeBlock language="python">
{`python   # Command to start Python in the terminal
import torch
print(torch.cuda.is_available())
exit()   # Exit Python`}
</CodeBlock>

Si el resultado impreso es `False`, el entorno actual está usando la versión de CPU de PyTorch. Si necesitas PyTorch y Torchvision con GPU en Jetson, instálalos de acuerdo con [este tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson). Para entornos que necesitan entrenamiento o inferencia con GPU, el resultado final de la comprobación debe ser `True`.

</TabItem>

<TabItem value="X86" label="X86 Ubuntu 22.04">

1. Instalar Miniforge:

<CodeBlock language="bash">
{`wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
chmod +x Miniforge3-Linux-x86_64.sh
./Miniforge3-Linux-x86_64.sh
# Once the installation is complete:
source ~/.bashrc
# Initialize all shells
conda init --all`}
</CodeBlock>

2. Crear y activar un entorno conda nuevo para lerobot

<CodeBlock language="bash">
{`conda create -y -n lerobot python=3.10 && conda activate lerobot`}
</CodeBlock>

3. Clonar Lerobot:

<CodeBlock language="bash">
{`git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot`}
</CodeBlock>

4. Al usar miniforge, instala ffmpeg en tu entorno:

<CodeBlock language="bash">
{`conda install ffmpeg -c conda-forge`}
</CodeBlock>

:::tip
Esto normalmente instala ffmpeg 7.X para tu plataforma compilado con el codificador libsvtav1. Si libsvtav1 no es compatible (comprueba los codificadores compatibles con `ffmpeg -encoders`), puedes:

- [En cualquier plataforma] Instalar explícitamente ffmpeg 7.X usando:

<CodeBlock language="bash">
{`conda install ffmpeg=7.1.1 -c conda-forge`}
</CodeBlock>

- [Solo en Linux] Instalar las dependencias de compilación de ffmpeg y compilar ffmpeg desde el código fuente con libsvtav1, y asegurarte de usar el binario de ffmpeg correspondiente a tu instalación con `which ffmpeg`.

Si encuentras un error como este, también puedes usar este comando.

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" alt="" />
</div>

:::

5. Instalar LeRobot con dependencias para los motores feetech:

:::tip
En una máquina virtual Ubuntu 22.04 recién configurada, especialmente en una instalación mínima, es posible que `gcc` y otras herramientas de compilación en C no estén instaladas por defecto. En ese caso, la instalación de LeRobot con dependencias de feetech puede fallar porque no se puede compilar el paquete de Python `evdev`.

Instala primero las herramientas de compilación básicas:

<CodeBlock language="bash">
{`sudo apt update
sudo apt install build-essential`}
</CodeBlock>

Después de la instalación, vuelve a ejecutar el comando de instalación de LeRobot.
:::

<CodeBlock language="bash">
{`cd ~/lerobot && pip install -e ".[feetech]"`}
</CodeBlock>

6. Comprobar Pytorch y Torchvision

Dado que instalar el entorno lerobot mediante pip desinstalará las versiones originales de Pytorch y Torchvision e instalará las versiones de CPU de Pytorch y Torchvision, necesitas realizar una comprobación en Python.

<CodeBlock language="python">
{`python   # Command to start Python in the terminal
import torch
print(torch.cuda.is_available())
exit()   # Exit Python`}
</CodeBlock>

Si el resultado impreso es `False`, el entorno actual está usando la versión de CPU de PyTorch. Si necesitas entrenamiento o inferencia con GPU, instala las versiones de Pytorch y Torchvision que coincidan con tu versión de CUDA según la [guía oficial de PyTorch](https://pytorch.org/index.html). Para entornos con una GPU NVIDIA que necesitan aceleración por GPU, el resultado final de la comprobación debe ser `True`.

:::tip

Nota: las GPU NVIDIA RTX serie 50 requieren la versión preliminar de CUDA 12.8 o superior.

El comando de descarga es el siguiente:

<CodeBlock language="bash">
{`pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cu128`}
</CodeBlock>

:::

</TabItem>

</Tabs>

</section>

## Configurar los motores y ensamblar el brazo

<section id="setup-motors-assembly" className="section-card">
  <div className="section-title">
    <span>Paso 2</span>
    <h2>Configurar los motores y ensamblar el brazo</h2>
    <p>Configura los ID de los servos y las tasas de baudios, verifica el cableado y la alimentación, y luego ensambla los brazos líder y seguidor.</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Comprobación de seguridad antes de ejecutar</strong>
      <p>
        Retira objetos de valor y personas no relacionadas en un radio de 1 metro del espacio de trabajo del brazo robótico.
        Asegúrate de que el brazo esté firmemente montado y de que la alimentación y los cables estén conectados correctamente antes de ejecutar esta sección.
      </p>
    </div>
  </div>

:::tip
Si compraste un brazo robótico preensamblado, omite esta parte y pasa a la sección de calibración.
:::
<details className="content-details">

<summary> Para la versión en kit, sigue los pasos a continuación </summary>

El proceso de calibración e inicialización de los servos para el SO-ARM101 es el mismo que para el SO-ARM100 tanto en método como en código. Sin embargo, ten en cuenta que las relaciones de engranajes de las tres primeras articulaciones del brazo líder SO-ARM101 difieren de las del SO-ARM100, por lo que es importante distinguirlas y calibrarlas cuidadosamente.

Para configurar los motores, designa un adaptador de bus de servos y 6 motores para tu brazo líder, y de manera similar el otro adaptador de bus de servos y 6 motores para el brazo seguidor. Es conveniente etiquetarlos y escribir en cada motor si es para el seguidor F o para el líder L y su ID del 1 al 6. Usamos **F1–F6** para representar las articulaciones 1 a 6 del **Brazo Seguidor**, y **L1–L6** para representar las articulaciones 1 a 6 del **Brazo Líder**. El modelo de servo correspondiente, la asignación de articulaciones y los detalles de la relación de engranajes son los siguientes:

| Modelo de servo                            | Relación de engranajes | Articulaciones correspondientes         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
Ahora debes conectar la fuente de alimentación de 5V o 12V al bus de motores. 5V para los motores STS3215 de 7.4V y 12V para los motores STS3215 de 12V. Ten en cuenta que el brazo líder siempre usa los motores de 7.4V, así que asegúrate de conectar la fuente de alimentación correcta si tienes motores de 12V y 7.4V, ¡de lo contrario podrías quemar tus motores! Ahora, conecta el bus de motores a tu ordenador mediante USB. Ten en cuenta que el USB no proporciona alimentación, y tanto la fuente de alimentación como el USB deben estar conectados.
:::

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" alt="" />
</div>

***Los siguientes son los pasos de calibración del código, calibra con el servo de cableado de referencia en la imagen de arriba***

Encuentra los puertos USB asociados a tus brazos
Para encontrar los puertos correctos para cada brazo, ejecuta el script de utilidad dos veces:

<CodeBlock language="bash">
{`lerobot-find-port`}
</CodeBlock>

Salida de ejemplo:

<CodeBlock language="bash">
{`Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the usb cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/ttyACM1
Reconnect the USB cable.`}
</CodeBlock>

:::tip
Recuerda retirar el USB, de lo contrario la interfaz no será detectada.
:::

Salida de ejemplo al identificar el puerto del brazo seguidor (por ejemplo, `/dev/tty.usbmodem575E0031751` en Mac, o posiblemente `/dev/ttyACM0` en Linux):

Salida de ejemplo al identificar el puerto del brazo líder (por ejemplo, `/dev/tty.usbmodem575E0032081`, o posiblemente `/dev/ttyACM1` en Linux):

Es posible que necesites dar acceso a los puertos USB ejecutando:

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1`}
</CodeBlock>

:::tip

Al conectar los brazos, el primer dispositivo conectado se asignará a ttyACM0 (brazo Esclavo/Seguidor), y el segundo dispositivo conectado se asignará a ttyACM1 (brazo Maestro/Líder).

:::

**Configura tus motores**

**Imágenes de referencia para la calibración de los servos del brazo líder**

| **Calibración de la articulación 6 del brazo líder** | **Calibración de la articulación 5 del brazo líder** | **Calibración de la articulación 4 del brazo líder** | **Calibración de la articulación 3 del brazo líder** | **Calibración de la articulación 2 del brazo líder** | **Calibración de la articulación 1 del brazo líder** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

**Imágenes de referencia para la calibración del servo del seguidor**

| **Calibración de la articulación 6 del brazo seguidor** | **Calibración de la articulación 5 del brazo seguidor** | **Calibración de la articulación 4 del brazo seguidor** | **Calibración de la articulación 3 del brazo seguidor** | **Calibración de la articulación 2 del brazo seguidor** | **Calibración de la articulación 1 del brazo seguidor** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |

:::tip
De nuevo, asegúrate de que los IDs de las articulaciones de los servos y las relaciones de engranajes correspondan estrictamente a las del SO-ARM101.
:::

**Calibrar los servos del brazo seguidor**

Conecta el cable USB desde tu ordenador y la fuente de alimentación a la placa controladora del brazo seguidor. Luego, ejecuta el siguiente comando.

<CodeBlock language="bash">
{`lerobot-setup-motors \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0  # <- paste here the port found at previous step`}
</CodeBlock>

Deberías ver la siguiente instrucción.

<CodeBlock language="bash">
{`Connect the controller board to the 'gripper' motor only and press enter.`}
</CodeBlock>

Según se indica, conecta el motor de la pinza. Asegúrate de que sea el único motor conectado a la placa y de que el propio motor aún no esté conectado en cadena con ningún otro motor. Cuando pulses [Enter], el script configurará automáticamente el id y la velocidad en baudios de ese motor.

A continuación deberías ver el siguiente mensaje:

<CodeBlock language="bash">
{`'gripper' motor id set to 6`}
</CodeBlock>

Seguido de la siguiente instrucción:

<CodeBlock language="bash">
{`Connect the controller board to the 'wrist_roll' motor only and press enter.`}
</CodeBlock>

Puedes desconectar el cable de 3 pines de la placa controladora, pero puedes dejarlo conectado al motor de la pinza en el otro extremo, ya que ya estará en el lugar correcto. Ahora, conecta otro cable de 3 pines al motor de giro de muñeca y conéctalo a la placa controladora. Como con el motor anterior, asegúrate de que sea el único motor conectado a la placa y de que el propio motor no esté conectado a ningún otro.

:::caution
Repite la operación para cada motor según se indique.
:::

:::tip
Comprueba el cableado en cada paso antes de pulsar Enter. Por ejemplo, el cable de la fuente de alimentación podría desconectarse mientras manipulas la placa.
:::

Cuando hayas terminado, el script simplemente finalizará, momento en el cual los motores estarán listos para usarse. Ahora puedes conectar en cadena el cable de 3 pines de cada motor al siguiente, y el cable del primer motor (el “giro de hombro” con id=1) a la placa controladora, que ahora puede fijarse a la base del brazo.

**Calibrar los servos del brazo líder**

Realiza los mismos pasos para el brazo líder.

<CodeBlock language="bash">
{`lerobot-setup-motors \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM0  # <- paste here the port found at previous step`}
</CodeBlock>

**Montaje**

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/hbW6eFYkHTg?si=jKdpTyI8wRC-iHxO" title="youtube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

:::tip

- El proceso de montaje de doble brazo del SO-ARM101 es el mismo que el del SO-ARM100. Las únicas diferencias son la adición de clips para cables en el SO-ARM101 y las diferentes relaciones de engranajes de los servos de las articulaciones en el brazo líder. Por lo tanto, tanto el SO100 como el SO101 pueden instalarse haciendo referencia al siguiente contenido.
- Antes del montaje, vuelve a comprobar el modelo de tu motor, la relación de engranajes y el voltaje de la fuente de alimentación. Si compraste el SO101, consulta la tabla anterior de modelos de servos y mapeo de articulaciones para distinguir F1 a F6 y L1 a L6.

:::

**Montar el brazo líder**

| **Paso 1** | **Paso 2** | **Paso 3** | **Paso 4** | **Paso 5** | **Paso 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **Paso 7** | **Paso 8** | **Paso 9** | **Paso 10** | **Paso 11** | **Paso 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **Paso 13** | **Paso 14** | **Paso 15** | **Paso 16** | **Paso 17** | **Paso 18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **Paso 19** | **Paso 20** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

**Montar el brazo seguidor**

:::tip

- Los pasos para montar el brazo seguidor son, en general, los mismos que para el brazo líder. La única diferencia radica en el método de instalación del efector final (pinza y empuñadura) después del Paso 12.

:::

| **Paso 1** | **Paso 2** | **Paso 3** | **Paso 4** | **Paso 5** | **Paso 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **Paso 7** | **Paso 8** | **Paso 9** | **Paso 10** | **Paso 11** | **Paso 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **Paso 13** | **Paso 14** | **Paso 15** | **Paso 16** | **Paso 17** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |

</details>

</section>

## Calibrar el brazo robótico

<section id="calibration" className="section-card">
  <div className="section-title">
    <span>Paso 3</span>
    <h2>Calibrar el brazo robótico</h2>
    <p>Calibra los brazos seguidor y líder para que sus posiciones físicas coincidan con su estado en el software.</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Comprobación de seguridad antes de ejecutar</strong>
      <p>
        Retira objetos de valor y personas no relacionadas en un radio de 1 metro del espacio de trabajo del brazo robótico.
        Asegúrate de que el brazo esté firmemente montado y de que la alimentación y los cables estén conectados correctamente antes de ejecutar esta sección.
      </p>
    </div>
  </div>

:::tip
Los códigos de SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y el código de SO101 para su funcionamiento.
:::

:::danger
Si compraste el **SO101 Arm Kit Standard Edition**, todas las fuentes de alimentación son de 5V. Si compraste el **SO101 Arm Kit Pro Edition**, el brazo líder debe calibrarse y operarse en cada paso utilizando una fuente de alimentación de 5V, mientras que el brazo seguidor debe calibrarse y operarse en cada paso utilizando una fuente de alimentación de 12V.
:::

A continuación, debes conectar la fuente de alimentación y el cable de datos a tu robot SO-10x para la calibración, a fin de garantizar que los brazos líder y seguidor tengan los mismos valores de posición cuando estén en la misma posición física. Esta calibración es esencial porque permite que una red neuronal entrenada en un robot SO-10x funcione en otro.

### Recalibrar el brazo robótico

<details className="content-details">
<summary>Ver opciones de recalibración</summary>

Si necesitas recalibrar los brazos robóticos, hay dos opciones disponibles:

**Opción 1: Eliminar archivos de calibración locales**

Elimina completamente los archivos en `~/.cache/huggingface/lerobot/calibration/robots` o `~/.cache/huggingface/lerobot/calibration/teleoperators` antes de recalibrar. De lo contrario, el sistema puede mostrar un mensaje de error porque los datos de calibración anteriores se almacenan en archivos JSON dentro de estos directorios.

**Opción 2: Elegir recalibración en el comando de calibración**

Ejecuta directamente el comando de calibración en la terminal. Si el brazo ya ha sido calibrado antes, aparecerá el siguiente mensaje:

<CodeBlock language="bash">
{`Press ENTER to use provided calibration file associated with the id my_awesome_leader_arm, or type 'c' and press ENTER to run calibration:`}
</CodeBlock>

Escribe `c` y pulsa **Enter** para iniciar la recalibración. Pulsa **Enter** directamente para mantener y usar los datos de calibración existentes.

</details>

Conecta los 6 servos del robot a través de las interfaces de 3 pines y conecta el servo del chasis a la placa controladora de servos. Luego, ejecuta el siguiente comando o ejemplo de API para calibrar el brazo:

:::tip
En PC (Linux) y dispositivos Jetson, el primer dispositivo USB que conectas normalmente se asigna a `ttyACM0`, y el segundo a `ttyACM1`. Verifica dos veces qué puerto está asignado al líder y al seguidor antes de ejecutar los comandos.
:::

**Calibración manual del brazo seguidor**

Conecta las interfaces de los 6 servos del robot mediante un cable de 3 pines y conecta el servo del chasis a la placa controladora de servos, luego ejecuta el siguiente comando o ejemplo de API para calibrar el brazo robótico:

***Primero se otorgan los permisos de la interfaz***

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM*`}
</CodeBlock>

***Luego calibra el brazo seguidor***

<CodeBlock language="bash">
{`lerobot-calibrate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 # <- The port of your robot
    --robot.id=my_awesome_follower_arm  # <- Give the robot a unique name`}
</CodeBlock>

El siguiente video muestra cómo realizar la calibración. Primero debes mover el robot a la posición en la que todas las articulaciones estén en el centro de sus rangos. Luego, después de pulsar Enter, debes mover cada articulación a través de todo su rango de movimiento.

:::tip
Debido a la actualización del repositorio de lerobot, es normal que la terminal no reciba una señal del servo 5 al realizar la calibración del brazo maestro-esclavo. Puedes continuar con la operación.
:::

**Calibración manual del brazo líder**

Realiza los mismos pasos para calibrar el brazo líder, ejecuta el siguiente comando o ejemplo de API:

<CodeBlock language="bash">
{`lerobot-calibrate \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 # <- The port of your robot
    --teleop.id=my_awesome_leader_arm  # <- Give the robot a unique name`}
</CodeBlock>

:::tip

Si encuentras el error “Could not connect on port '/dev/ttyACM0'. Make sure you are using the correct port., Try running lerobot-find-port” mientras calibras los brazos Líder o Seguidor, necesitas otorgar los permisos necesarios ejecutando: `sudo chmod 666 /dev/ttyACM*`
:::

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="youtube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

### (Opcional) Calibración de posición media con la herramienta rápida Seeed Studio SoARM

Al calibrar o ejecutar el robot, si ves errores como:

`Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)`

Esto generalmente significa que la posición actual / el desplazamiento de cero de un servo es anormal, lo que hace que el ángulo leído exceda el rango esperado. En ese caso, puedes usar la herramienta SoARM de Seeed Studio para hacer una **calibración de posición media** (escribir la posición actual en el valor medio **2048**), y luego repetir la calibración de todo el brazo.

#### 1) Clonar la herramienta desde GitHub e instalar dependencias

<CodeBlock language="bash">
{`git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController
pip install -r requirements.txt`}
</CodeBlock>

#### 2) Calibración de posición media y verificación

Ubicación de los scripts:

- `src/tools/servo_middle_calibration.py`: calibración de posición media (escribe la posición actual como **2048**)
- `src/tools/servo_disable.py`: desactivar el par del servo (más fácil girar las articulaciones a mano)
- `src/tools/servo_center_test.py`: mover a **2048** para verificar el resultado de la calibración

Ejecuta en orden (los comandos te pedirán interactivamente que selecciones un puerto):

1. (Opcional) Desactivar el par para ajustar las articulaciones manualmente:

<CodeBlock language="bash">
{`python -m src.tools.servo_disable`}
</CodeBlock>

2. Realizar la calibración de posición media (establecer la posición actual en 2048):

<CodeBlock language="bash">
{`python -m src.tools.servo_middle_calibration`}
</CodeBlock>

3. Verificar: mover el servo a 2048 y comprobar si vuelve a la posición media esperada:

<CodeBlock language="bash">
{`python -m src.tools.servo_center_test`}
</CodeBlock>

Después de la calibración de posición media, vuelve a los pasos de `lerobot-calibrate` anteriores y repite la calibración de todo el brazo.

Si encuentras los errores anteriores, puedes usar la Herramienta de Depuración de Engranajes de Dirección para depurar. Es compatible con Windows, Ubuntu y Mac.

<div className="hero-actions">
    <a href="/es/lerobot_steering_gear_debugging_tool">▶ Abrir tutorial de la Herramienta de Depuración de Engranajes de Dirección</a>
</div>

</section>

## Teleoperación

<section id="teleoperation" className="section-card">
  <div className="section-title">
    <span>Paso 4</span>
    <h2>Teleoperación</h2>
    <p>Ejecuta una prueba de teleoperación de líder a seguidor antes de añadir cámaras o recopilar datos.</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Comprobación de seguridad antes de ejecutar</strong>
      <p>
        Retira objetos de valor y personas no relacionadas dentro de 1 metro del espacio de trabajo del brazo robótico.
        Asegúrate de que el brazo esté firmemente montado y de que la alimentación y los cables estén conectados correctamente antes de ejecutar esta sección.
      </p>
    </div>
  </div>

**Teleoperación simple**
¡Entonces ya estás listo para teleoperar tu robot! Ejecuta este script sencillo (no conectará ni mostrará las cámaras):

Ten en cuenta que el id asociado a un robot se utiliza para almacenar el archivo de calibración. Es importante usar el mismo id al teleoperar, grabar y evaluar cuando se utiliza la misma configuración.

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM*`}
</CodeBlock>

<CodeBlock language="bash">
{`lerobot-teleoperate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 \\
    --teleop.id=my_awesome_leader_arm`}
</CodeBlock>

El comando de teleoperación hará automáticamente lo siguiente:

1. Identificar cualquier calibración faltante e iniciar el procedimiento de calibración.
2. Conectar el robot y el dispositivo de teleoperación e iniciar la teleoperación.

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</section>

## Añadir cámaras

<section id="camera" className="section-card">
  <div className="section-title">
    <span>Paso 5</span>
    <h2>Añadir cámaras</h2>
    <p>Añade cámaras OpenCV, RealSense u Orbbec y verifica los flujos de imagen antes de grabar conjuntos de datos.</p>
  </div>

<details className="content-details">
<summary> If using RealSense D435i/D405 </summary>

Las cámaras de profundidad RealSense pueden proporcionar percepción RGB-D para LeRobot y son adecuadas para tareas como reconocimiento de objetos, reconstrucción de nubes de puntos y manipulación sobre mesa. Los modelos recomendados aquí son **RealSense D405** y **RealSense D435i**.

**RealSense D405**

<div className="image-frame">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" alt="" />
</div>

La RealSense D405 es una cámara estéreo de profundidad de corto alcance diseñada para tareas de alta precisión a corta distancia, como la manipulación robótica sobre mesa, con un rango de trabajo típico de **7 cm a 50 cm**.

**RealSense D435i**

<div className="image-frame">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" alt="" />
</div>

La RealSense D435i combina percepción de profundidad, imagen RGB y una IMU, lo que la hace adecuada para aplicaciones de rango medio a corto, como reconstrucción 3D, SLAM y percepción del entorno robótico.

**1. Cambiar a la rama Camera**

El soporte actual de cámaras está disponible en la rama `DepthCameraSupport`:

<CodeBlock language="bash">
{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport`}
</CodeBlock>

Confirma la rama actual:

<CodeBlock language="bash">
{`git branch --show-current`}
</CodeBlock>

Salida esperada:

<CodeBlock language="bash">
{`DepthCameraSupport`}
</CodeBlock>

**2. Instalar RealSense en modo editable**

Si solo utilizas RealSense:

<CodeBlock language="bash">
{`pip install -e ".[realsense]"`}
</CodeBlock>

**3. Conceder permisos a la cámara**

<CodeBlock language="bash">
{`chmod a+rw /dev/bus/usb/*/*`}
</CodeBlock>

**4. Detectar cámaras**

<CodeBlock language="bash">
{`lerobot-find-cameras realsense`}
</CodeBlock>

Este paso generará:

- Modelo de cámara
- Número de serie
- Información USB
- Configuración de flujo predeterminada

Introduce el `Serial number` obtenido en el parámetro `serial_number_or_name` del comando de cámara que aparece a continuación.

**5. Ejemplo de RealSense**

Prueba de RealSense dual:

<CodeBlock language="bash">
{`lerobot-teleoperate \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.id=my_awesome_follower_arm \\
  --robot.cameras='{
    d435i_color: {
      type: realsense_d435i_color,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d435i_depth: {
      type: realsense_d435i_depth,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      max_depth_m: 2.0,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    },
    d405_color: {
      type: realsense_d405_color,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d405_depth: {
      type: realsense_d405_depth,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      depth_alpha: 0.03,
      rotation: 0,
      warmup_s: 5
    }
  }' \\
  --teleop.type=so101_leader \\
  --teleop.port=/dev/ttyACM1 \\
  --teleop.id=my_awesome_leader_arm \\
  --display_data=true`}
</CodeBlock>

**6. Notas sobre parámetros**

- `depth_alpha` controla el factor de escala de la imagen de profundidad y se puede ajustar según el resultado de la visualización y el rango de distancia objetivo.
- Si conectas tres o más cámaras de profundidad, se recomienda reducir `fps` a `15` para mejorar la estabilidad general.
- Se recomienda mantener la resolución en `640x480` para un mejor equilibrio entre estabilidad y rendimiento en tiempo real.

</details>

<details className="content-details">
<summary> If using Orbbec Gemini2/Gemini336 cameras </summary>


<div className="image-frame">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" alt="" />
</div>
<div className="get-one-now-panel">
  <a className="get-one-now-button" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer">
    Consigue uno ahora 🖱️
  </a>
</div>

Orbbec Gemini 2 es una cámara RGB-D de alto rendimiento para aplicaciones de robótica, que proporciona flujos sincronizados de RGB y profundidad con una alineación precisa de profundidad a color. Combinada con detección de profundidad estéreo y una IMU integrada de 6 ejes, es muy adecuada para tareas robóticas como detección de objetos, percepción 3D, mapeo y navegación. Su diseño compacto y la compatibilidad completa con el SDK de Orbbec la hacen adecuada tanto para investigación como para despliegues en el mundo real.

<div className="image-frame">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" alt="" />
</div>

Gemini 336 es un nuevo miembro de la serie Gemini 330. Hereda el sólido rendimiento de profundidad de Gemini 335 y mejora aún más la calidad de la imagen de profundidad en áreas interiores reflectantes, regiones oscuras en escenas de alto rango dinámico y entornos exteriores brillantes. Para aplicaciones de robótica, puede proporcionar datos de profundidad más estables y de alta calidad para tareas como percepción, localización y manipulación.

**1. Cambiar a la rama Camera**

La compatibilidad actual con cámaras está disponible en la rama `DepthCameraSupport`:

<CodeBlock language="bash">
{`git checkout DepthCameraSupport
git pull origin DepthCameraSupport`}
</CodeBlock>

Confirma la rama actual:

<CodeBlock language="bash">
{`git branch --show-current`}
</CodeBlock>

Salida esperada:

<CodeBlock language="bash">
{`DepthCameraSupport`}
</CodeBlock>

**2. Instalar LeRobot en modo editable**

Si solo utilizas Orbbec:

<CodeBlock language="bash">
{`pip install -e ".[orbbec]"`}
</CodeBlock>

**3. Conceder permisos a la cámara**

<CodeBlock language="bash">
{`chmod a+rw /dev/bus/usb/*/*`}
</CodeBlock>

**4. Configuración del tamaño de caché de USBFS**

De forma predeterminada, el tamaño de caché de USBFS es de 16 MB. Este valor es insuficiente para imágenes de alta resolución, múltiples flujos de datos y escenarios con varios dispositivos. Los usuarios pueden aumentar el tamaño de la caché hasta 128 MB.

Comprobar el tamaño de caché de USBFS
<CodeBlock language="bash">
{`cat /sys/module/usbcore/parameters/usbfs_memory_mb`}
</CodeBlock>

Aumentar temporalmente el tamaño de caché de USBFS
<CodeBlock language="bash">
{`sudo sh -c 'echo 128> /sys/module/usbcore/parameters/usbfs_memory_mb'`}
</CodeBlock>

:::tip

Si sigues encontrando el `timeout error TimeoutError: Timed out waiting for frame from <lerobot.cameras.orbbec.camera_orbbec.OrbbecDepthCamera object at 0x7ba4ba130910.........>`, simplemente vuelve a conectar la cámara.

:::

**5. Detectar cámaras**

<CodeBlock language="bash">
{`lerobot-find-cameras orbbec`}
</CodeBlock>

Este paso generará:

- Modelo de cámara（Name）
- Número de serie（Serial number）
- Información USB
- Configuración de flujo predeterminada

Introduce el `Serial Number` obtenido en el parámetro `serial_number_or_name` del comando de cámara que se muestra a continuación.

**6. Ejemplo de Orbbec**

Prueba de Orbbec única:

<CodeBlock language="bash">
{`lerobot-teleoperate \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.id=my_awesome_follower_arm \\
  --robot.cameras='{
    orbbec_color: {
      type: orbbec_color,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      rotation: 0,
      warmup_s: 1
    },
    orbbec_depth: {
      type: orbbec_depth,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 400,
      fps: 30,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    }
  }' \\
  --teleop.type=so101_leader \\
  --teleop.port=/dev/ttyACM1 \\
  --teleop.id=my_awesome_leader_arm \\
  --display_data=true`}
</CodeBlock>

Prueba de cámara Orbbec única + prueba de cámara estándar:

<CodeBlock language="bash">
{`  lerobot-teleoperate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --robot.cameras='{
      orbbec_color: {
        type: orbbec_color,
        serial_number_or_name: "CP9JA530003A",
        width: 640,
        height: 480,
        fps: 30,
        color_mode: rgb,
        rotation: 0,
        warmup_s: 1
      },
      orbbec_depth: {
        type: orbbec_depth,
        serial_number_or_name: "CP9JA530003A",
        width: 640,
        height: 400,
        fps: 30,
        depth_alpha: 0.2,
        rotation: 0,
        warmup_s: 5
      },
      side: {
      type: opencv,
      index_or_path: 8,
      width: 640,
      height: 480,
      fps: 30,
      fourcc: "MJPG"} 
    }' \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 \\
    --teleop.id=my_awesome_leader_arm \\
    --display_data=true`}
</CodeBlock>

:::tip
Cuando utilices una sola cámara Orbbec junto con una cámara estándar, se recomienda conectar primero la cámara Orbbec y después la cámara estándar.

Al ejecutar el comando lerobot-find-cameras opencv para detectar los ID de las cámaras, verás que la cámara Orbbec ocupa 3 números de cámara consecutivos. Por lo tanto, es aconsejable conectar la cámara estándar al final para que su número se asigne al final.
:::

**7. Notas sobre parámetros**

- `depth_alpha` controla el factor de escala de la imagen de profundidad. Un buen punto de partida es `0.2`, luego puedes ajustarlo según el resultado de la visualización.
- Si conectas tres o más cámaras de profundidad, se recomienda reducir `fps` a `15` para una mejor estabilidad.
- Se recomienda mantener la resolución en `640x480` para una visualización y transferencia de datos más estables.

Para errores relacionados con la cámara, consulta la sección de Preguntas frecuentes al final de esta página.

</details>

<details className="content-details">

<summary> If using a regular camera </summary>



:::tip
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y el código de SO101 para su funcionamiento.
:::

Para instanciar una cámara, necesitas un identificador de cámara. Este identificador puede cambiar si reinicias tu ordenador o vuelves a conectar la cámara, un comportamiento que depende principalmente de tu sistema operativo.

Para encontrar los índices de las cámaras conectadas a tu sistema, ejecuta el siguiente script:

<CodeBlock language="python">
{`lerobot-find-cameras opencv # or realsense for Intel Realsense cameras`}
</CodeBlock>

La terminal imprimirá la siguiente información.

<CodeBlock language="text">
{`--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)`}
</CodeBlock>

Puedes encontrar las imágenes tomadas por cada cámara en el directorio `outputs/captured_images`.

:::warning
When using Intel RealSense cameras in , you could get this error: , this can be solved by running the same command with permissions. Note that using RealSense cameras in is unstable.macOSError finding RealSense cameras: failed to set power statesudomacOS.
:::

Después podrás mostrar las cámaras en tu ordenador mientras teleoperas ejecutando el siguiente código. Esto es útil para preparar tu configuración antes de grabar tu primer conjunto de datos.

<CodeBlock language="bash">
{`lerobot-teleoperate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 \\
    --teleop.id=my_awesome_leader_arm \\
    --display_data=true`}
</CodeBlock>

Si tienes más cámaras, puedes cambiar `--robot.cameras` para añadir cámaras. Debes tener en cuenta el formato de index_or_path, que está determinado por el último dígito del ID de la cámara que se muestra al ejecutar `python -m lerobot.find_cameras opencv`.

:::tip
Las imágenes en el formato `fourcc: "MJPG"` están comprimidas. Puedes probar resoluciones más altas y también puedes intentar el formato `YUYV`. Sin embargo, este último reducirá la resolución de la imagen y los FPS, lo que provocará retrasos en el funcionamiento del brazo robótico. Actualmente, con el formato `MJPG`, puede soportar 3 cámaras a una resolución de `1920*1080` manteniendo `30FPS`. Dicho esto, seguir sin recomendar conectar 2 cámaras a un ordenador a través del mismo USB HUB.
:::

Por ejemplo, si quieres añadir una cámara lateral:

<CodeBlock language="bash">
{`lerobot-teleoperate \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 \\
    --teleop.id=my_awesome_leader_arm \\
    --display_data=true`}
</CodeBlock>

:::tip
Las imágenes en el formato `fourcc: "MJPG"` están comprimidas. Puedes probar resoluciones más altas y también puedes intentar el formato `YUYV`. Sin embargo, este último reducirá la resolución de la imagen y los FPS, lo que provocará retrasos en el funcionamiento del brazo robótico. Actualmente, con el formato `MJPG`, puede soportar 3 cámaras a una resolución de `1920*1080` manteniendo `30FPS`. Dicho esto, seguir sin recomendar conectar 2 cámaras a un ordenador a través del mismo USB HUB.
:::

:::tip
Si encuentras un bug como este.

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" alt="" />
</div>

Puedes hacer un downgrade de la versión de rerun para resolver el problema.

<CodeBlock language="bash">
{`pip3 install rerun-sdk==0.23`}
</CodeBlock>

:::

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</details>

</section>

## Registrar conjunto de datos

<section id="record-dataset" className="section-card">
  <div className="section-title">
    <span>Paso 6</span>
    <h2>Registrar conjunto de datos</h2>
    <p>Registra conjuntos de datos locales o súbelos a Hugging Face Hub, luego mantén el conjunto de datos limpio y coherente.</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Comprobación de seguridad antes de ejecutar</strong>
      <p>
        Retira objetos de valor y personas no relacionadas en un radio de 1 metro del espacio de trabajo del brazo robótico.
        Asegúrate de que el brazo esté firmemente montado y de que la alimentación y los cables estén conectados correctamente antes de ejecutar esta sección.
      </p>
    </div>
  </div>

- Si quieres guardar el conjunto de datos localmente, puedes ejecutarlo directamente:

<CodeBlock language="bash">
{`lerobot-record \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 \\
    --teleop.id=my_awesome_leader_arm \\
    --display_data=true \\
    --dataset.repo_id=seeedstudio123/test \\
    --dataset.num_episodes=5 \\
    --dataset.single_task="Grab the black cube" \\
    --dataset.push_to_hub=false \\
    --dataset.episode_time_s=30 \\
    --dataset.reset_time_s=30`}
</CodeBlock>

Entre ellos, `repo_id` se puede modificar de forma personalizada, y `push_to_hub=false`. Finalmente, el conjunto de datos se guardará en el directorio `~/.cache/huggingface/lerobot` de la carpeta de inicio, donde se creará la carpeta `seeedstudio123/test` mencionada anteriormente.

- Si quieres usar las funciones del hub de Hugging Face para subir tu conjunto de datos y no lo has hecho antes, asegúrate de haber iniciado sesión usando un token con permisos de escritura, que se puede generar desde los [ajustes de Hugging Face](https://huggingface.co/settings/tokens):

<CodeBlock language="bash">
{`huggingface-cli login --token \${HUGGINGFACE_TOKEN} --add-to-git-credential`}
</CodeBlock>

Guarda el nombre de tu repositorio de Hugging Face en una variable para ejecutar estos comandos:

<CodeBlock language="bash">
{`HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER`}
</CodeBlock>

Registra 5 episodios y sube tu conjunto de datos al hub:

<CodeBlock language="bash">
{`lerobot-record \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
    --teleop.type=so101_leader \\
    --teleop.port=/dev/ttyACM1 \\
    --teleop.id=my_awesome_leader_arm \\
    --display_data=true \\
    --dataset.repo_id=\${HF_USER}/record-test \\
    --dataset.num_episodes=5 \\
    --dataset.single_task="Grab the black cube" \\
    --dataset.push_to_hub=true \\
    --dataset.episode_time_s=30 \\
    --dataset.reset_time_s=30`}
</CodeBlock>

Verás que aparecen muchas líneas como esta:

<CodeBlock language="bash">
{`INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)`}
</CodeBlock>

**Función de registro**

La función **record** proporciona un conjunto de herramientas para capturar y gestionar datos durante el funcionamiento del robot.  

**1. Almacenamiento de datos**

- Los datos se almacenan usando el formato `LeRobotDataset` y se guardan en disco durante la grabación.
- De forma predeterminada, el conjunto de datos se envía a tu página de Hugging Face después de la grabación.  
- Para desactivar la subida, usa: `--dataset.push_to_hub=False`

**2. Puntos de control y reanudación**

- Los puntos de control se crean automáticamente durante la grabación.  
- Para reanudar después de una interrupción, vuelve a ejecutar el mismo comando con: `--resume=true`

⚠️ Nota crítica: Al reanudar, establece `--dataset.num_episodes` en el número de episodios adicionales que se van a registrar (no en el número total de episodios objetivo del conjunto de datos).  

- Para empezar a grabar desde cero, **elimina manualmente** el directorio del conjunto de datos.

**3. Parámetros de grabación**

Configura el flujo de grabación de datos usando argumentos de línea de comandos:

| Parámetro | Descripción | Predeterminado |  
|-----------|-------------|---------|  
| --dataset.episode_time_s | Duración por episodio de datos (segundos) | 60 |  
| --dataset.reset_time_s | Tiempo de reinicio del entorno después de cada episodio (segundos) | 60 |  
| --dataset.num_episodes | Número total de episodios a registrar | 50 |  

**4. Controles de teclado durante la grabación**

Controla el flujo de grabación de datos usando atajos de teclado:

| Tecla | Acción |  
|-----|--------|  
| → (Flecha derecha) | Detener anticipadamente el episodio actual/reiniciar; pasar al siguiente. |  
| ← (Flecha izquierda) | Cancelar el episodio actual; volver a grabarlo. |  
| ESC | Detener la sesión inmediatamente, codificar los vídeos y subir el conjunto de datos. |  

:::tip

Si el teclado no funciona, es posible que necesites instalar otra versión de pynput.

<CodeBlock language="bash">
{`pip install pynput==1.6.8`}
</CodeBlock>

:::

**Consejos para recopilar datos**

- Sugerencia de tarea: Agarra objetos en diferentes ubicaciones y colócalos en un contenedor.  
- Escala: Registra ≥50 episodios (10 episodios por ubicación).  
- Coherencia:  
  - Mantén las cámaras fijas.  
  - Mantén un comportamiento de agarre idéntico.  
  - Asegúrate de que los objetos manipulados sean visibles en las transmisiones de la cámara.  
- Progresión:  
  - Comienza con agarres fiables antes de añadir variaciones (nuevas ubicaciones, técnicas, ajustes de cámara).  
  - Evita aumentos rápidos de complejidad para prevenir fallos.  

💡 Regla general: Deberías ser capaz de realizar la tarea tú mismo solo mirando las imágenes de la cámara.  

Si quieres profundizar en este tema importante, puedes consultar la [entrada de blog](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) que escribimos sobre qué hace que un conjunto de datos sea bueno.

Para problemas con los atajos de teclado durante la grabación, consulta la sección de Preguntas Frecuentes al final de esta página.
<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</section>

## Visualizar conjunto de datos

<section id="visualize-dataset" className="section-card">
  <div className="section-title">
    <span>Conjunto de datos</span>
    <h2>Visualizar conjunto de datos</h2>
    <p>Inspecciona las imágenes, acciones y episodios registrados antes del entrenamiento.</p>
  </div>

:::tip
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y el código de SO101 para la operación.
:::

Si subiste tu conjunto de datos al hub con `--control.push_to_hub=true`, puedes [visualizar tu conjunto de datos en línea](https://huggingface.co/spaces/lerobot/visualize_dataset) copiando y pegando tu id de repositorio obtenido mediante:

<CodeBlock language="bash">
{`echo \${HF_USER}/so101_test`}
</CodeBlock>

Si no lo subiste con `--dataset.push_to_hub=false`, también puedes visualizarlo localmente con:

<CodeBlock language="bash">
{`lerobot-dataset-viz \\
  --repo-id \${HF_USER}/so101_test \\`}
</CodeBlock>

Si lo subes con `--dataset.push_to_hub=false`, también puedes visualizarlo localmente con:

<CodeBlock language="bash">
{`lerobot-dataset-viz \\
  --repo-id seeed_123/so101_test \\`}
</CodeBlock>

**Aquí, `seeed_123` es el nombre personalizado de `repo_id` definido al recopilar datos.**

<div className="image-frame">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" alt="" />
</div>

</section>

## Reproducir dataset

<section id="replay-dataset" className="section-card">
  <div className="section-title">
    <span>Dataset</span>
    <h2>Reproducir dataset</h2>
    <p>Reproduce un episodio grabado en el brazo real para comprobar la consistencia de las acciones.</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Comprobación de seguridad antes de ejecutar</strong>
      <p>
        Retira objetos de valor y personas no relacionadas en un radio de 1 metro del área de trabajo del brazo robótico.
        Asegúrate de que el brazo esté firmemente montado y de que la alimentación y los cables estén conectados correctamente antes de ejecutar esta sección.
      </p>
    </div>
  </div>

:::tip
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y el código de SO101 para la operación.
:::

Una función útil es `replay`, que te permite reproducir cualquier episodio que hayas grabado o episodios de cualquier dataset disponible. Esta función te ayuda a probar la repetibilidad de las acciones de tu robot y evaluar la transferibilidad entre robots del mismo modelo.

Puedes reproducir el primer episodio en tu robot con el siguiente comando o con el ejemplo de la API:

<CodeBlock language="bash">
{`lerobot-replay \\
    --robot.type=so101_follower \\
    --robot.port=/dev/ttyACM0 \\
    --robot.id=my_awesome_follower_arm \\
    --dataset.repo_id=seeedstudio123 \\
    --dataset.root=~/.cache/huggingface/lerobot/seeedstudio123 \\
    --dataset.episode=0 \\`}
</CodeBlock>

Tu robot debería replicar movimientos similares a los que grabaste.

En este comando, `dataset.root` especifica la ruta física al dataset, y dataset.`repo_id` es el nombre personalizado definido durante la recopilación de datos.

</section>

## Entrenar y evaluar

<section id="training" className="section-card">
  <div className="section-title">
    <span>Paso 7</span>
    <h2>Entrenar y evaluar</h2>
    <p>Entrena y evalúa políticas como ACT, SmolVLA, Pi0, Pi0.5, GR00T, PEFT e inferencia asíncrona.</p>
  </div>

  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Comprobación de seguridad antes de ejecutar</strong>
      <p>
        Retira objetos de valor y personas no relacionadas en un radio de 1 metro del área de trabajo del brazo robótico.
        Asegúrate de que el brazo esté firmemente montado y de que la alimentación y los cables estén conectados correctamente antes de ejecutar esta sección.
      </p>
    </div>
  </div>

<details className="content-details">

<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>

Consulta [ACT](https://huggingface.co/docs/lerobot/act)

Para entrenar una política que controle tu robot, utiliza el script [lerobot-train](https://github.com/huggingface/lerobot/blob/main/src/lerobot/scripts/train.py).

**Entrenar**

<CodeBlock language="bash">
{`lerobot-train \\
  --dataset.repo_id=\${HF_USER}/so101_test \\
  --policy.type=act \\
  --output_dir=outputs/train/act_so101_test \\
  --job_name=act_so101_test \\
  --policy.device=cuda \\
  --wandb.enable=false \\
  --steps=300000`}
</CodeBlock>


**Si quieres entrenar en un dataset local, asegúrate de que `repo_id` coincida con el utilizado durante la recopilación de datos y añade `--policy.push_to_hub=False`.**

<CodeBlock language="bash">
{`lerobot-train \\
  --dataset.repo_id=seeedstudio123/test \\
  --policy.type=act \\
  --output_dir=outputs/train/act_so101_test \\
  --job_name=act_so101_test \\
  --policy.device=cuda \\
  --wandb.enable=false \\
  --policy.push_to_hub=false\\
  --steps=300000`}
</CodeBlock>

:::tip

Si estás utilizando una GPU de la serie RTX 50, debes añadir --dataset.video_backend=pyav al comando de entrenamiento. Esto evita APIs faltantes en la versión preliminar de torchvision. El comando de entrenamiento completo debería verse así:

<CodeBlock language="bash">
{`lerobot-train \\
  --dataset.repo_id=seeedstudio123/test \\
  --dataset.video_backend=pyav \\
  --policy.type=act \\
  --output_dir=outputs/train/act_so101_test \\
  --policy.device=cuda \\
  --wandb.enable=false \\
  --policy.push_to_hub=false \\
  --steps=300000 \\`}
</CodeBlock>

:::

Vamos a explicarlo:

- **Especificación del dataset**: Proporcionamos el dataset mediante el parámetro `--dataset.repo_id=\${HF_USER}/so101_test`.
- **Pasos de entrenamiento**: Modificamos el número de pasos de entrenamiento usando `--steps=300000`. El algoritmo usa por defecto 800000 pasos, y puedes ajustarlo según la dificultad de tu tarea y observando la pérdida durante el entrenamiento.
- **Tipo de política**: Proporcionamos la política con `policy.type=act`. Del mismo modo, puedes cambiar entre políticas como [`act`, `diffusion`, `pi0`, `pi0fast`, `pi0fast`, `sac`, `smolvla`], lo que cargará la configuración desde `configuration_act.py`. Es importante destacar que esta política se adaptará automáticamente a los estados de los motores, las acciones de los motores y el número de cámaras de tu robot (por ejemplo, `laptop` y `phone`), ya que esta información ya está almacenada en tu dataset.
- **Selección de dispositivo**: Proporcionamos `policy.device=cuda` porque estamos entrenando en una GPU Nvidia, pero puedes usar `policy.device=mps` para entrenar en Apple Silicon.
- **Herramienta de visualización**: Proporcionamos `wandb.enable=true` para visualizar las gráficas de entrenamiento usando [Weights and Biases](https://docs.wandb.ai/quickstart). Esto es opcional, pero si lo utilizas, asegúrate de haber iniciado sesión ejecutando `wandb login`.

**Evaluar**

:::tip
Los códigos SO100 y SO101 son compatibles. Los usuarios de SO100 pueden utilizar directamente los parámetros y el código de SO101 para la operación.
:::

Puedes usar la función `record` de [`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) pero con un checkpoint de política como entrada. Por ejemplo, ejecuta este comando para grabar 10 episodios de evaluación:

<CodeBlock language="bash">
{`lerobot-record \\
  --robot.type=so100_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video10, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: intelrealsense, serial_number_or_name: 233522074606, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
  --robot.id=my_awesome_follower_arm \\
  --display_data=false \\
  --dataset.repo_id=\${HF_USER}/eval_so100 \\
  --dataset.single_task="Put lego brick into the transparent box" \\
  --policy.path=\${HF_USER}/my_policy`}
</CodeBlock>

por ejemplo:

<CodeBlock language="bash">
{`lerobot-record \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
  --robot.id=my_awesome_follower_arm \\
  --display_data=false \\
  --dataset.repo_id=seeed/eval_test123 \\
  --dataset.single_task="Put lego brick into the transparent box" \\
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model`}
</CodeBlock>

1. El parámetro `--policy.path` indica la ruta al archivo de pesos de los resultados del entrenamiento de tu política (por ejemplo, `outputs/train/act_so101_test/checkpoints/last/pretrained_model`). Si subes el archivo de pesos del resultado del entrenamiento del modelo a Hub, también puedes usar el repositorio del modelo (por ejemplo, `\${HF_USER}/act_so100_test`).

2. El nombre del dataset `dataset.repo_id` comienza con `eval_`. Esta operación grabará por separado vídeos y datos durante la evaluación, que se guardarán en la carpeta que comience con `eval_`, como `seeed/eval_test123`.

3. Si encuentras `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` durante la fase de evaluación, elimina primero la carpeta que comience con `eval_` y luego ejecuta de nuevo el programa.

4. Cuando te encuentres con `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, ten en cuenta que palabras clave como front y side en el parámetro `--robot.cameras` deben ser estrictamente coherentes con las utilizadas al recopilar el dataset.

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</details>

<details className="content-details">
<summary> SmolVLA </summary>

[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) es el modelo base ligero de Hugging Face para robótica. Diseñado para un ajuste fino sencillo en datasets de LeRobot, ¡ayuda a acelerar tu desarrollo!

**Configura tu entorno**

Instala las dependencias de SmolVLA ejecutando:

<CodeBlock language="bash">
{`pip install -e ".[smolvla]"`}
</CodeBlock>

**Ajusta finamente SmolVLA con tus datos**

Utiliza [smolvla_base](https://hf.co/lerobot/smolvla_base), nuestro modelo preentrenado de 450M, y ajústalo finamente con tus datos. Entrenar el modelo durante 20k pasos llevará aproximadamente ~4 horas en una sola GPU A100. Debes ajustar el número de pasos en función del rendimiento y de tu caso de uso.

Si no tienes un dispositivo GPU, puedes entrenar usando nuestro cuaderno en [Google Colab](https://colab.research.google.com/github/huggingface/notebooks/blob/main/lerobot/training-smolvla.ipynb).

Pasa tu dataset al script de entrenamiento usando `--dataset.repo_id`. Si quieres probar tu instalación, ejecuta el siguiente comando donde usamos uno de los datasets que recopilamos para el [artículo de SmolVLA](https://huggingface.co/papers/2506.01844).

<CodeBlock language="bash">
{`lerobot-train \\
  --policy.path=lerobot/smolvla_base \\
  --dataset.repo_id=\${HF_USER}/mydataset \\
  --batch_size=64 \\
  --steps=20000 \\
  --output_dir=outputs/train/my_smolvla \\
  --job_name=my_smolvla_training \\
  --policy.device=cuda \\
  --wandb.enable=true`}
</CodeBlock>

:::tip
Puedes comenzar con un tamaño de lote pequeño e incrementarlo gradualmente, si la GPU lo permite, siempre que los tiempos de carga se mantengan cortos.
:::

El ajuste fino es un arte. Para una visión completa de las opciones para el ajuste fino, ejecuta

<CodeBlock language="bash">
{`lerobot-train --help`}
</CodeBlock>

**Evalúa el modelo ajustado y ejecútalo en tiempo real**

De forma similar a cuando grabas un episodio, se recomienda que hayas iniciado sesión en HuggingFace Hub. Puedes seguir los pasos correspondientes: [Record a dataset](https://huggingface.co/docs/lerobot/il_robots). Una vez que hayas iniciado sesión, puedes ejecutar la inferencia en tu configuración haciendo:

<CodeBlock language="bash">
{`lerobot-rollout \\
  --strategy.type=base \\
  --policy.path=\${HF_USER}/act_policy \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.cameras=="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \\
  --display_data=true \\
  --task="Your task description" \\ # can be skipped for ACT
  --duration=60`}
</CodeBlock>


Dependiendo de tu configuración de evaluación, puedes configurar la duración y el número de episodios que se grabarán para tu conjunto de evaluación.

</details>

<details className="content-details">
<summary> LIBERO </summary>

[LIBERO](https://huggingface.co/docs/lerobot/libero) es un benchmark diseñado para estudiar el aprendizaje robótico de por vida. La idea es que los robots no solo se preentrenarán una vez en una fábrica, sino que necesitarán seguir aprendiendo y adaptándose con sus usuarios humanos a lo largo del tiempo. Esta adaptación continua se denomina aprendizaje de por vida en la toma de decisiones (LLDM), y es un paso clave hacia la construcción de robots que se conviertan en ayudantes verdaderamente personalizados.

- 📄 [Artículo de LIBERO](https://arxiv.org/abs/2306.03310)
- 💻 [Repositorio original de LIBERO](https://github.com/Lifelong-Robot-Learning/LIBERO)

**Evaluación con LIBERO**

En **LeRobot**, portamos LIBERO a nuestro framework y lo usamos principalmente para **evaluar** [SmolVLA](https://huggingface.co/docs/lerobot/en/smolvla), nuestro modelo ligero de Visión-Lenguaje-Acción.

LIBERO es ahora parte de nuestra **simulación con evaluación múltiple**, lo que significa que puedes evaluar tus políticas en un **único conjunto de tareas** o en **múltiples conjuntos a la vez** con solo una bandera.

Para instalar LIBERO, después de seguir las instrucciones oficiales de LeRobot, simplemente haz: `pip install -e ".[libero]"`

***Evaluación de un solo conjunto***

Evalúa una política en un conjunto LIBERO:

<CodeBlock language="bash">
{`lerobot-eval \\
  --policy.path="your-policy-id" \\
  --env.type=libero \\
  --env.task=libero_object \\
  --eval.batch_size=2 \\
  --eval.n_episodes=3`}
</CodeBlock>

- `--env.task` selecciona el conjunto (`libero_object`, `libero_spatial`, etc.).
- `--eval.batch_size` controla cuántos entornos se ejecutan en paralelo.
- `--eval.n_episodes` establece cuántos episodios se ejecutan en total.

***Evaluación de múltiples conjuntos***

Evalúa una política en múltiples conjuntos a la vez:

<CodeBlock language="bash">
{`lerobot-eval \\
  --policy.path="your-policy-id" \\
  --env.type=libero \\
  --env.task=libero_object,libero_spatial \\
  --eval.batch_size=1 \\
  --eval.n_episodes=2`}
</CodeBlock>

- Pasa una lista separada por comas a `--env.task` para la evaluación de múltiples conjuntos.

**Ejemplo de comando de entrenamiento**

<CodeBlock language="bash">
{`lerobot-train \\
  --policy.type=smolvla \\
  --policy.repo_id=\${HF_USER}/libero-test \\
  --dataset.repo_id=HuggingFaceVLA/libero \\
  --env.type=libero \\
  --env.task=libero_10 \\
  --output_dir=./outputs/ \\
  --steps=100000 \\
  --batch_size=4 \\
  --eval.batch_size=1 \\
  --eval.n_episodes=1 \\
  --eval_freq=1000 \\`}
</CodeBlock>

-----

**Nota sobre el renderizado**

LeRobot utiliza MuJoCo para la simulación. Debes establecer el backend de renderizado antes del entrenamiento o la evaluación:

- `export MUJOCO_GL=egl` → para servidores sin pantalla (por ejemplo, HPC, nube)

</details>

<details className="content-details">
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

Consulta [Pi0](https://huggingface.co/docs/lerobot/pi0)

<CodeBlock language="bash">
{`pip install -e ".[pi]"`}
</CodeBlock>

**Entrenar**

<CodeBlock language="bash">
{`lerobot-train \\
    --dataset.repo_id=your_dataset \\
    --policy.type=pi0 \\
    --output_dir=./outputs/pi0_training \\
    --job_name=pi0_training \\
    --policy.pretrained_path=lerobot/pi0_base \\
    --policy.repo_id=your_repo_id \\
    --policy.compile_model=true \\
    --policy.gradient_checkpointing=true \\
    --policy.dtype=bfloat16 \\
    --policy.freeze_vision_encoder=false \\
    --policy.train_expert_only=false \\
    --steps=3000 \\
    --policy.device=cuda \\
    --batch_size=32`}
</CodeBlock>

**Evaluar**

<CodeBlock language="bash">
{`lerobot-record \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \\
  --robot.id=my_awesome_follower_arm \\
  --display_data=false \\
  --dataset.repo_id=seeed/eval_test123 \\
  --dataset.single_task="Put lego brick into the transparent box" \\
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model`}
</CodeBlock>

</details>

<details className="content-details">
<summary>[Pi0.5](https://huggingface.co/docs/lerobot/pi05) </summary>

Consulta [Pi0.5](https://huggingface.co/docs/lerobot/pi05)

<CodeBlock language="bash">
{`pip install -e ".[pi]"`}
</CodeBlock>

**Entrenar**

<CodeBlock language="bash">
{`lerobot-train \\
    --dataset.repo_id=seeed/eval_test123 \\
    --policy.type=pi05 \\
    --output_dir=./outputs/pi05_training \\
    --job_name=pi05_training \\
    --policy.repo_id=your_repo_id \\
    --policy.pretrained_path=lerobot/pi05_base \\
    --policy.compile_model=true \\
    --policy.gradient_checkpointing=true \\
    --wandb.enable=true \\
    --policy.dtype=bfloat16 \\
    --policy.freeze_vision_encoder=false \\
    --policy.train_expert_only=false \\
    --steps=3000 \\
    --policy.device=cuda \\
    --batch_size=32`}
</CodeBlock>

**Evaluar**

<CodeBlock language="bash">
{`lerobot-record \\
  --robot.type=so101_follower \\
  --robot.port=/dev/ttyACM0 \\
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \\
  --robot.id=my_awesome_follower_arm \\
  --display_data=false \\
  --dataset.repo_id=seeed/eval_test123 \\
  --dataset.single_task="Put lego brick into the transparent box" \\
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model`}
</CodeBlock>

</details>

<details className="content-details">
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) </summary>

Consulta la documentación oficial: [GR00T N1.5](https://huggingface.co/docs/lerobot/groot).

GR00T N1.5 es un modelo base abierto de NVIDIA para un razonamiento robótico y aprendizaje de habilidades más generales. Es un modelo de **cruzamiento de morfologías**: puede tomar entradas multimodales como **lenguaje** e **imágenes**, y ejecutar tareas de manipulación en diferentes entornos.

En LeRobot, la clave es establecer el tipo de política a `--policy.type=groot`. Ten en cuenta que GR00T N1.5 tiene requisitos de entorno más altos (depende de FlashAttention y requiere una GPU CUDA). Se recomienda primero hacer que ACT / Pi0 se ejecuten de extremo a extremo y luego probar GR00T.

**Instalación (importante)**

Según la documentación oficial actual, GR00T N1.5 requiere `flash-attn` y solo puede utilizarse en hardware compatible con CUDA.

Orden recomendado:

1. Prepara primero tu entorno base (Python, CUDA, controladores, etc.). **No** instales aún `lerobot`.
2. Instala PyTorch para tu versión de CUDA (las diferentes versiones de CUDA pueden requerir un `--index-url` diferente; sigue la página de instalación de PyTorch).

<CodeBlock language="bash">
{`pip install "torch>=2.2.1,<2.8.0" "torchvision>=0.21.0,<0.23.0"`}
</CodeBlock>

:::tip

Si estás utilizando una GPU RTX Serie 50, se deben cumplir los siguientes requisitos: Python=3.10, CUDA=12.8, Torch=2.7.1

El comando de descarga es el siguiente:
<CodeBlock language="bash">
{`pip install torch==2.7.1 torchvision==0.22.1 torchaudio==2.7.1 --index-url https://download.pytorch.org/whl/cu128`}
</CodeBlock>
:::

3. Instala las dependencias de compilación para `flash-attn`, luego instala `flash-attn` en sí.

<CodeBlock language="bash">
{`pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
python -c "import flash_attn; print(f'Flash Attention {flash_attn.__version__} imported successfully')"`}
</CodeBlock>

:::tip

Si estás utilizando una GPU RTX Serie 50, se debe cumplir el siguiente requisito: flash_attn=2.8.0

El comando de descarga es el siguiente:
<CodeBlock language="bash">
{`pip install flash_attn==2.8.0.post2 torch==2.7.1 --no-build-isolation`}
</CodeBlock>
:::

4. Instala LeRobot con las dependencias opcionales de `groot` (`lerobot[groot]`).

<CodeBlock language="bash">
{`pip install "lerobot[groot]"`}
</CodeBlock>

:::tip
Si la instalación de `flash-attn` falla, normalmente se debe a (1) una incompatibilidad entre PyTorch y CUDA, (2) dependencias de compilación faltantes o (3) un entorno demasiado nuevo/demasiado antiguo. Verifica primero la documentación oficial de GR00T y las instrucciones de instalación de PyTorch.
:::

**Entrenamiento (ajuste fino)**

La documentación oficial proporciona un ejemplo multi-GPU con `accelerate launch --multi_gpu ...`. Si solo tienes una GPU, aún puedes comenzar haciendo que primero funcione una ejecución de un solo proceso (la compatibilidad/argumentos exactos dependen de la documentación oficial).

<CodeBlock language="bash">
{`accelerate launch \\
  --multi_gpu \\
  --num_processes=$NUM_GPUS \\
  $(which lerobot-train) \\
  --output_dir=$OUTPUT_DIR \\
  --save_checkpoint=true \\
  --batch_size=$BATCH_SIZE \\
  --steps=$NUM_STEPS \\
  --save_freq=$SAVE_FREQ \\
  --log_freq=$LOG_FREQ \\
  --policy.push_to_hub=true \\
  --policy.type=groot \\
  --policy.repo_id=$REPO_ID \\
  --policy.tune_diffusion_model=false \\
  --dataset.repo_id=$DATASET_ID \\
  --wandb.enable=true \\
  --wandb.disable_artifact=true \\
  --job_name=$JOB_NAME`}
</CodeBlock>

**Validación (evaluación) en el robot**

Después del entrenamiento, puedes evaluar y registrar reproducciones con `lerobot-record` como con otras políticas. La documentación oficial incluye un ejemplo bimanual; los usuarios de SO101 de un solo brazo no necesitan argumentos del estilo `left_arm_port/right_arm_port`.

<CodeBlock language="bash">
{`lerobot-record \\
  --robot.type=bi_so_follower \\
  --robot.left_arm_port=/dev/ttyACM1 \\
  --robot.right_arm_port=/dev/ttyACM0 \\
  --robot.id=bimanual_follower \\
  --robot.cameras='{ right: {"type": "opencv", "index_or_path": 0, "width": 640, "height": 480, "fps": 30}, left: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}, top: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30} }' \\
  --display_data=true \\
  --dataset.repo_id=\${HF_USER}/eval_groot_bimanual \\
  --dataset.num_episodes=10 \\
  --dataset.single_task="Grab and handover the red cube to the other arm" \\
  --policy.path=\${HF_USER}/groot-bimanual \\
  --dataset.episode_time_s=30 \\
  --dataset.reset_time_s=10`}
</CodeBlock>

Licencia: Apache 2.0 (igual que el repositorio original de GR00T).

</details>

<details className="content-details">
<summary>(Opcional) Fine-tuning eficiente en parámetros (PEFT)</summary>

PEFT (Parameter-Efficient Fine-Tuning) es una familia de métodos y herramientas que ayudan a que un modelo grande preentrenado se adapte a nuevas tareas **sin actualizar todos los parámetros**. Para políticas LeRobot preentrenadas (por ejemplo, SmolVLA, Pi0), a menudo puedes entrenar solo un pequeño conjunto de parámetros “adaptadores” (por ejemplo, LoRA) para reducir el uso de VRAM y el coste de entrenamiento, manteniendo al mismo tiempo un rendimiento cercano al del fine-tuning completo.

**Instalación**

Después de instalar LeRobot con las dependencias opcionales de `peft`, puedes usar argumentos relacionados con PEFT en el entrenamiento.

<CodeBlock language="bash">
{`pip install -e ".[peft]"`}
</CodeBlock>

<CodeBlock language="bash">
{`pip install "lerobot[peft]"`}
</CodeBlock>

Más conceptos y métodos: [🤗 documentación de PEFT](https://huggingface.co/docs/peft/index).

**Ejemplo: Fine-tuning de SmolVLA con LoRA (subtarea LIBERO `libero_spatial`)**

Este ejemplo realiza fine-tuning de `lerobot/smolvla_base` con LoRA en el conjunto de datos `HuggingFaceVLA/libero`. Los nombres de los argumentos dependen de la versión de LeRobot; se recomienda también consultar `lerobot-train --help`.

<CodeBlock language="bash">
{`lerobot-train \\
  --policy.path=lerobot/smolvla_base \\
  --policy.repo_id=\${HF_USER}/my_libero_smolvla_peft \\
  --dataset.repo_id=HuggingFaceVLA/libero \\
  --env.type=libero \\
  --env.task=libero_spatial \\
  --output_dir=outputs/train/my_libero_smolvla_peft \\
  --job_name=my_libero_smolvla_peft \\
  --policy.device=cuda \\
  --steps=10000 \\
  --batch_size=32 \\
  --optimizer.lr=1e-3 \\
  --peft.method_type=LORA \\
  --peft.r=64`}
</CodeBlock>

**Argumentos PEFT clave**

- `--peft.method_type`: Selecciona el método PEFT. LoRA (Low-Rank Adapter) es una de las opciones más comunes.
- `--peft.r`: Rango de LoRA. Un rango más alto suele aumentar la capacidad, pero también incrementa el número de parámetros y el uso de VRAM.

**Elegir en qué capas/módulos inyectar LoRA (opcional)**

De forma predeterminada, PEFT suele inyectar LoRA en las capas de proyección más importantes (por ejemplo, `q_proj`, `v_proj` de atención) y también puede cubrir proyecciones de estado/acción. Si quieres personalizarlo, usa `--peft.target_modules`.

Patrones comunes:

1) Proporcionar una lista de sufijos de nombres de módulo (ejemplo):

<CodeBlock language="bash">
{`--peft.target_modules="['q_proj', 'v_proj']"`}
</CodeBlock>

2) Proporcionar una expresión regular (ejemplo; ajústala a los nombres reales de los módulos en el modelo):

<CodeBlock language="bash">
{`--peft.target_modules='(model\\\\.vlm_with_expert\\\\.lm_expert\\\\..*\\\\.(down|gate|up)_proj|.*\\\\.(state_proj|action_in_proj|action_out_proj|action_time_mlp_in|action_time_mlp_out))'`}
</CodeBlock>

**Entrenar completamente algunos módulos (opcional)**

Si quieres que algunos módulos se entrenen completamente (en lugar de solo inyectar LoRA), usa `--peft.full_training_modules`. Por ejemplo, entrenar completamente solo `state_proj`:

<CodeBlock language="bash">
{`--peft.full_training_modules="['state_proj']"`}
</CodeBlock>

**Sugerencia de tasa de aprendizaje (regla general)**

Las tasas de aprendizaje de LoRA suelen ser ~10× más altas que en el fine-tuning completo. Por ejemplo, si el fine-tuning completo usa comúnmente `1e-4`, LoRA puede empezar desde `1e-3`. Si utilizas un programador de tasa de aprendizaje, la tasa de aprendizaje final suele estar alrededor de `1e-4` como referencia.

</details>

<details className="content-details">
<summary>(Opcional) Entrenamiento multi-GPU con Accelerate</summary>

**Pasos de entrenamiento**

Método 1: usar flags de la CLI.

1. Instala `accelerate` en tu entorno de `lerobot`.

<CodeBlock language="bash">
{`pip install accelerate`}
</CodeBlock>

2. Inicia el entrenamiento multi-GPU con `accelerate launch` y las flags `--multi_gpu` y `--num_processes`.

<CodeBlock language="bash">
{`accelerate launch \\

--multi_gpu \\

--num_processes=2 \\

$(which lerobot-train) \\

--dataset.repo_id=\${HF_USER}/my_dataset \\

--policy.type=act \\

--policy.repo_id=\${HF_USER}/my_trained_policy \\

--output_dir=outputs/train/act_multi_gpu \\

--job_name=act_multi_gpu \\

--wandb.enable=true`}
</CodeBlock>

Flags clave de `accelerate`:

- `--multi_gpu`: habilita el entrenamiento multi-GPU.
- `--num_processes`: número de GPUs a usar (normalmente igual al número de GPUs disponibles en la máquina).
- `--mixed_precision=fp16`: usa precisión mixta fp16 (si tu hardware lo soporta, también puedes usar bf16).

Ten en cuenta: **bf16 requiere soporte de hardware** y no está disponible en todas las GPUs.

| Precisión | Soporte de hardware |
|--|--|
| fp16 | Compatible con casi todas las GPUs NVIDIA |
| bf16 | Solo compatible con algunas GPUs más recientes (Ampere y posteriores) |

Si tu GPU no soporta bf16, elige fp16 en la configuración de Accelerate o especifica fp16 explícitamente.

Método 2: usar un archivo de configuración de `accelerate` (opcional).

Si entrenas con múltiples GPUs con frecuencia, puedes guardar la configuración para evitar escribir repetidamente las mismas flags.

`accelerate config` guarda la configuración de tu hardware (número de GPUs, precisión mixta, etc.) en un archivo de configuración, de modo que no tengas que volver a introducir esas opciones al ejecutar `accelerate launch` más tarde. No cambia la lógica de entrenamiento de LeRobot; solo reduce las entradas repetidas en la CLI.

Si solo usas multi-GPU ocasionalmente (o es tu primera vez), omitir esto está perfectamente bien.

En la configuración interactiva, para el escenario común de “una sola máquina + múltiples GPUs”, las opciones típicas son:

- Entorno de cómputo: Esta máquina
- Número de máquinas: 1
- Número de procesos: número de GPUs que quieres usar
- IDs de GPU a usar: pulsa Enter (usar todas las GPUs)
- Precisión mixta: se prefiere fp16; elige bf16 solo si sabes que tu GPU lo soporta

<CodeBlock language="bash">
{`accelerate config`}
</CodeBlock>

<CodeBlock language="bash">
{`accelerate launch $(which lerobot-train) \\

--dataset.repo_id=\${HF_USER}/my_dataset \\

--policy.type=act \\

--policy.repo_id=\${HF_USER}/my_trained_policy \\

--output_dir=outputs/train/act_multi_gpu \\

--job_name=act_multi_gpu \\

--wandb.enable=true`}
</CodeBlock>

**Cómo el uso de múltiples GPUs afecta a los hiperparámetros (y cómo ajustarlos)**

LeRobot no ajusta automáticamente la tasa de aprendizaje ni los pasos de entrenamiento en función del número de GPUs, para evitar cambiar silenciosamente el comportamiento del entrenamiento. Esto difiere de algunos otros frameworks de entrenamiento distribuido.

Si quieres ajustar los hiperparámetros para multi-GPU, un enfoque común es:

- **Pasos**: el tamaño de lote efectivo aumenta (batch_size × num_gpus), por lo que puedes reducir los pasos aproximadamente de forma proporcional a `1 / num_gpus` para mantener un número similar de muestras vistas en total.

<CodeBlock language="bash">
{`accelerate launch --num_processes=2 $(which lerobot-train) \\

--batch_size=8 \\

--steps=50000 \\

--dataset.repo_id=lerobot/pusht \\

--policy=act`}
</CodeBlock>

- **Tasa de aprendizaje**: dado que cada paso usa más muestras, a menudo puedes escalar la tasa de aprendizaje linealmente con el número de GPUs:
  new_lr = single_gpu_lr × num_gpus

<CodeBlock language="bash">
{`accelerate launch --num_processes=2 $(which lerobot-train) \\

--optimizer.lr=2e-4 \\

--dataset.repo_id=lerobot/pusht \\

--policy=act`}
</CodeBlock>

Estas no son reglas estrictas; son heurísticas comunes. Si no estás seguro, también puedes mantener la tasa de aprendizaje y los pasos sin cambios siempre que el entrenamiento siga siendo estable.

Para configuración avanzada y resolución de problemas, consulta la documentación de Accelerate: [Accelerate](https://huggingface.co/docs/accelerate/index).

</details>

<details className="content-details">

<summary>(Opcional) Inferencia asíncrona</summary>

Cuando la inferencia asíncrona no está habilitada, el flujo de control de LeRobot puede entenderse como **inferencia secuencial / síncrona convencional**: la política primero predice un segmento de acciones, luego ejecuta ese segmento y solo después espera la siguiente predicción.

Para modelos más grandes, esto puede hacer que el robot se detenga de forma notable mientras espera el siguiente bloque de acciones.

El objetivo de la inferencia asíncrona es permitir que el robot ejecute el bloque de acciones actual mientras calcula el siguiente por adelantado, reduciendo así el tiempo de inactividad y mejorando la capacidad de respuesta.

La inferencia asíncrona es aplicable a las políticas compatibles con LeRobot, incluidas las **políticas de acciones basadas en bloques** como **ACT, OpenVLA, Pi0 y SmolVLA**.

Dado que la inferencia está desacoplada del control real, la inferencia asíncrona también ayuda a aprovechar máquinas con mayores recursos de cómputo para realizar la inferencia del robot.

Puedes leer más sobre inferencia asíncrona en el [blog de Hugging Face](https://huggingface.co/blog/async-robot-inference)

Primero presentemos algunos conceptos básicos:

- **Cliente**: se conecta al brazo robótico y a las cámaras, recopila datos de observación (como imágenes y poses del robot), envía estas observaciones al servidor y recibe los bloques de acciones devueltos por el servidor y los ejecuta en orden.

- **Servidor**: el dispositivo que proporciona recursos de cómputo. Recibe datos de la cámara y del brazo robótico, realiza la inferencia (es decir, el cálculo) para producir bloques de acciones y los envía de vuelta al cliente. Puede ser el mismo dispositivo conectado al brazo robótico y a las cámaras, otro ordenador en la misma red local o un servidor en la nube alquilado en Internet.

- **Fragmento de acciones**: una secuencia de comandos de acción del brazo robótico obtenidos mediante inferencia de la política en el lado del servidor.

Tres escenarios de despliegue para inferencia asíncrona

1. Despliegue en una sola máquina

El robot, las cámaras, el cliente y el servidor están todos en el mismo dispositivo.

Este es el caso más sencillo: el servidor puede escuchar en 127.0.0.1, y el cliente también puede conectarse a 127.0.0.1:port. El ejemplo de comando en la documentación oficial es para este escenario.

2. Despliegue en LAN

El robot y las cámaras están conectados a un dispositivo ligero, mientras que el servidor de políticas se ejecuta en otra máquina de alto cómputo en la misma red local.

En este caso, el servidor debe escuchar en una dirección a la que puedan acceder otras máquinas, y el cliente también debe conectarse a la IP de la LAN del servidor, en lugar de 127.0.0.1.

3. Despliegue entre redes / en la nube

El servidor de políticas se ejecuta en un host en la nube accesible públicamente, y el cliente se conecta a él a través de Internet pública.

Este enfoque puede aprovechar la GPU más potente del host en la nube. Cuando las condiciones de red son buenas, el tiempo de ida y vuelta de la red (latencia de red) a veces puede ser relativamente pequeño en comparación con el tiempo de inferencia, pero esto depende de tu entorno de red real.

Nota de seguridad: el flujo de inferencia asíncrona de LeRobot tiene un riesgo relacionado con gRPC sin autenticación + deserialización con pickle. Si hay información o servicios importantes en el servidor, no se recomienda exponer el servicio directamente a Internet en un despliegue público. Un enfoque más seguro es usar VPN o túneles SSH, o al menos restringir en el grupo de seguridad las IP de origen permitidas a la IP pública de tu propio cliente.

**Primeros pasos con el despliegue de inferencia asíncrona**

**Paso 1: Configuración del entorno**

Primero, usa pip para instalar las dependencias adicionales requeridas para la inferencia asíncrona. Tanto el cliente como el servidor necesitan tener lerobot instalado junto con las dependencias extra:

<CodeBlock language="bash">
{`pip install -e ".[async]"`}
</CodeBlock>

**Paso 2: Configuración y comprobaciones de red**

1. **Problemas de proxy**

Si tu terminal actual está configurado para usar un proxy y la conexión se comporta de forma anómala, puedes desactivar temporalmente las variables de entorno del proxy:

<CodeBlock language="bash">
{`unset http_proxy https_proxy ftp_proxy all_proxy HTTP_PROXY HTTPS_PROXY FTP_PROXY ALL_PROXY`}
</CodeBlock>

Nota: el comando anterior solo afecta a la sesión de terminal actual. Si abres otra ventana de terminal, necesitas ejecutarlo de nuevo.

2. **Abrir el puerto en el firewall / grupo de seguridad**

Despliegue en una sola máquina: normalmente se puede omitir.

Despliegue en LAN: necesitas abrir el puerto de escucha en el lado del servidor.

Ejemplo para abrir el puerto de escucha en una configuración LAN (ejecutar en el lado del servidor):

<CodeBlock language="bash">
{`sudo ufw allow 8080/tcp`}
</CodeBlock>

Despliegue en la nube: necesitas abrir este puerto en el grupo de seguridad del servidor en la nube, y se recomienda restringir las IP de origen tanto como sea posible.

Si estás ejecutando en un servidor en la nube:

Abre el puerto 8080 en el grupo de seguridad de la consola de gestión del servidor, o usa otro puerto que ya esté abierto. Las distintas plataformas de servicios en la nube manejan esto de forma diferente; consulta la documentación de tu proveedor de nube.

3. **Confirmar la dirección IP**

Este paso se puede omitir para el despliegue en una sola máquina (la dirección IP para una sola máquina siempre es 127.0.0.1).

Si se trata de un despliegue en LAN:

Necesitas confirmar y recordar la dirección IP de la LAN del lado del servidor. Cuando el cliente se conecte, lo que debe rellenarse es la IP de la LAN de la máquina que ejecuta policy_server, no la IP propia del cliente.

Linux / Jetson / Raspberry Pi:

<CodeBlock language="bash">
{`hostname -I`}
</CodeBlock>

Si se muestran varias direcciones, generalmente elige la que corresponda a la interfaz de red de la LAN actual, por ejemplo 192.168.x.x.

También puedes usar:

<CodeBlock language="bash">
{`ip addr`}
</CodeBlock>

para ver el campo inet bajo la interfaz de red actualmente conectada.

Windows:

<CodeBlock language="shell">
{`ipconfig`}
</CodeBlock>

Busca un campo como Dirección IPv4 . . . . . . . . . . . : 192.168.14.140; esa es la dirección IP de la LAN de esa máquina.

macOS:

<CodeBlock language="bash">
{`ifconfig`}
</CodeBlock>

Busca el campo inet correspondiente a la interfaz de red actualmente conectada; esa es la dirección IP de la LAN.

Necesitamos recordar la dirección IP de la LAN del lado del servidor. Usaremos `<LAN IP address>` para referirnos a ella.

Si se trata de un despliegue en un servidor en la nube:

Busca la IP pública en el panel de control del servidor. Normalmente se llama de una de las siguientes formas:

Public IPv4

External IP

Public IP address

EIP

Public IP

Necesitamos recordar la dirección IP pública. Usaremos `<server public IP>` para referirnos a ella.

4. **Prueba de conexión**

Despliegue en una sola máquina: este paso se puede omitir

Despliegue en LAN / en la nube: se recomienda probar desde el lado del cliente si el puerto del servidor es accesible. Los ejemplos de prueba son los siguientes:

Ejemplo en LAN: ejecutar en el lado del cliente

<CodeBlock language="bash">
{`nc -vz <LAN IP address> 8080`}
</CodeBlock>

Ejemplo en la nube: ejecutar en el lado del cliente

<CodeBlock language="bash">
{`nc -vz <server public IP> 8080`}
</CodeBlock>

**Paso 3: Iniciar el servicio**

**Escenario A: Despliegue en una sola máquina**

Inicia el servicio local en una terminal:

<CodeBlock language="bash">
{`python -m lerobot.async_inference.policy_server \\
--host=127.0.0.1 \\
--port=8080`}
</CodeBlock>

Después de que se inicie correctamente, necesitas mantener esta terminal abierta. Tendrás que abrir una nueva terminal para ejecutar otros comandos.

**Escenario B: Despliegue en LAN**

Ejecutar en el lado del servidor:

<CodeBlock language="bash">
{`python -m lerobot.async_inference.policy_server \\
--host=0.0.0.0 \\
--port=8080`}
</CodeBlock>

En este caso, cuando el cliente se conecte, el valor de `--server_address` debe ser la dirección IP de la LAN del lado del servidor, como `<LAN IP address>:8080`.

**Escenario C: Despliegue en servidor en la nube**

Ejecutar en el lado del servidor:

<CodeBlock language="bash">
{`python -m lerobot.async_inference.policy_server \\
--host=0.0.0.0 \\
--port=8080`}
</CodeBlock>

En este caso, cuando el cliente se conecte, el valor de `--server_address` debe ser la dirección IP pública del servidor, como `<server public IP>:8080`.

**Paso 4: Elegir los parámetros de inferencia**

Ejecutar en el lado del cliente:

<CodeBlock language="bash">
{`python -m lerobot.async_inference.robot_client \\
--server_address=<ip address>:8080 \\
--robot.type=so100_follower \\
--robot.port=/dev/tty.usbmodem585A0076841 \\
--robot.id=follower_so100 \\
--robot.cameras="{ laptop: {type: opencv, index_or_path: 0, width: 1920, height: 1080, fps: 30}, phone: {type: opencv, index_or_path: 0, width: 1920, height: 1080, fps: 30}}" \\
--task="dummy" \\
--policy_type=your_policy_type \\
--pretrained_name_or_path=user/model \\
--policy_device=cuda \\
--actions_per_chunk=50 \\
--chunk_size_threshold=0.5 \\
--aggregate_fn_name=weighted_average \\
--debug_visualize_queue_size=True`}
</CodeBlock>

Explicación de los parámetros:

- `--server_address`

Especifica la dirección y el puerto del servidor de políticas. `<ip address>` debe sustituirse por 127.0.0.1 (máquina local), `<LAN IP address>` (LAN), o `<server public IP>` (servidor en la nube).

- `--robot.type, --robot.port, --robot.id, --robot.cameras`

Parámetros de los dispositivos de hardware. Deben mantenerse coherentes con los parámetros usados durante la recopilación del conjunto de datos.

- `--task`

La descripción de la tarea. Las políticas de visión y lenguaje como SmolVLA pueden determinar el objetivo de la acción basándose en el texto de la tarea.

- `--policy_type`

Sustituye esto por el nombre específico de la política, por ejemplo:

- smolvla

- act

- `--pretrained_name_or_path`

Este valor debe sustituirse por la ruta del modelo en el lado del servidor, o una ruta de modelo en Hugging Face.

- `--policy_device`

Especifica el dispositivo de inferencia usado en el lado del servidor.

Puede ser cuda, mps o cpu.

- `--actions_per_chunk=50`

Especifica cuántas acciones se generan en cada inferencia.

Cuanto mayor sea este valor:

Ventaja: el búfer de acciones es más abundante, por lo que es menos probable que se agote
Desventaja: el horizonte de predicción es más largo, por lo que el error de control puede acumularse de forma más notable

- `--chunk_size_threshold=0.5`

Especifica cuándo solicitar el siguiente fragmento de acciones al servidor.

Este es un umbral, normalmente en el rango de 0 a 1.

Se puede entender como: cuando la proporción restante de la cola de acciones actual cae por debajo de este umbral, el cliente enviará por adelantado una nueva observación y solicitará el siguiente fragmento de acciones.

Ajustarlo a 0.5 aquí significa:

cuando el fragmento de acciones actual se ha consumido aproximadamente a la mitad

el cliente empieza a solicitar el siguiente fragmento de acciones

Cuanto mayor sea este valor, con más frecuencia se enviarán solicitudes y más receptivo se volverá el sistema, pero también aumentará la carga en el servidor.

Cuanto menor sea este valor, más se acercará el comportamiento a la inferencia síncrona.

- `--aggregate_fn_name=weighted_average`

Especifica el método de agregación para los intervalos de acciones superpuestos.

En la inferencia asíncrona, cuando el fragmento de acciones antiguo aún no se ha ejecutado por completo, el nuevo fragmento de acciones puede haber llegado ya.

En ese caso, los dos fragmentos se superponen durante parte del intervalo de tiempo, y se necesita una función de agregación para combinarlos en la acción final ejecutada.

El significado de weighted_average es:

usar un promedio ponderado para fusionar la parte superpuesta.

Esto normalmente hace que el cambio de acciones sea más suave y reduce los cambios bruscos.

- `--debug_visualize_queue_size=True`

Indica si se visualiza el tamaño de la cola de acciones en tiempo de ejecución.

Cuando está activado, te permite ver de forma más directa si la cola llega con frecuencia al fondo, lo que te ayuda a ajustar actions_per_chunk y chunk_size_threshold.

**Paso 5: Ajustar los parámetros según el comportamiento del robot**

En la inferencia asíncrona, hay dos parámetros adicionales que necesitan ajuste y que no existen en la inferencia síncrona:

Parámetro Valor inicial sugerido Descripción

actions_per_chunk 50 Cuántas acciones produce la política de una vez. Valores típicos: 10–50.

chunk_size_threshold 0.5 Cuando la proporción restante de la cola de acciones es ≤ chunk_size_threshold, el cliente envía una nueva solicitud de fragmento de acciones. El rango de valores es [0, 1].

Cuando --debug_visualize_queue_size=True, el cambio en el tamaño de la cola de acciones se representará gráficamente en tiempo de ejecución.

Lo que la inferencia asíncrona necesita equilibrar es: la velocidad a la que el servidor genera fragmentos de acciones debe ser mayor o igual que la velocidad a la que el cliente consume fragmentos de acciones. De lo contrario, la cola de acciones se vaciará y el robot comenzará a tartamudear de nuevo (esto se puede ver como la curva tocando el fondo en la visualización de la cola).

La velocidad a la que el servidor genera fragmentos de acciones se ve afectada por factores como el tamaño del modelo, el tipo de dispositivo, la VRAM / memoria y la potencia de cómputo de la GPU.

La velocidad a la que el cliente consume fragmentos de acciones se ve afectada por los fps de ejecución configurados.

Si la cola se vacía con frecuencia, debes aumentar actions_per_chunk, aumentar chunk_size_threshold o reducir los fps.

Si la curva de la cola fluctúa con frecuencia pero las acciones restantes en la cola siempre son suficientes, puedes disminuir adecuadamente chunk_size_threshold.

En general:

el rango empírico para actions_per_chunk es 10–50

el rango empírico para chunk_size_threshold es 0.5–0.7; al ajustar, se recomienda comenzar desde 0.5 e incrementarlo gradualmente

</details>

Si encuentras el siguiente error:

<CodeBlock language="bash">
{`TypeError: stack(): argument 'tensors' (position 1) must be tuple of Tensors, not Column`}
</CodeBlock>

Intenta ejecutar el siguiente comando para resolverlo:

<CodeBlock language="bash">
{`pip install datasets==2.19`}
</CodeBlock>

El entrenamiento debería tardar varias horas. Encontrarás checkpoints en `outputs/train/act_so100_test/checkpoints`.

Para reanudar el entrenamiento desde un checkpoint, a continuación se muestra un comando de ejemplo para reanudar desde el checkpoint `last` de la política `act_so101_test`:

<CodeBlock language="bash">
{`lerobot-train \\
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \\
  --resume=true`}
</CodeBlock>

**Subir checkpoints de la política**

Una vez finalizado el entrenamiento, sube el checkpoint más reciente con:

<CodeBlock language="bash">
{`huggingface-cli upload \${HF_USER}/act_so101_test \\
  outputs/train/act_so101_test/checkpoints/last/pretrained_model`}
</CodeBlock>

También puedes subir checkpoints intermedios con:

<CodeBlock language="bash">
{`CKPT=010000
huggingface-cli upload \${HF_USER}/act_so101_test\${CKPT} \\
  outputs/train/act_so101_test/checkpoints/\${CKPT}/pretrained_model`}
</CodeBlock>

</section>

## Preguntas frecuentes (FAQ)

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>FAQ</h2>
    <p>Solución de problemas centralizada para puertos, IDs de servos, ffmpeg, cámaras, datasets, evaluación y entrenamiento.</p>
  </div>

<details className="content-details">
<summary>¿Qué repositorio de LeRobot debo usar?</summary>

Usa el repositorio recomendado en este wiki:

<CodeBlock language="bash">
{`git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot`}
</CodeBlock>

Esta versión ha sido verificada con SO-ARM10x. El repositorio ascendente de LeRobot cambia rápidamente, por lo que los argumentos de los comandos, los formatos de los datasets y las dependencias pueden diferir de este tutorial.

</details>

<details className="content-details">
<summary>`Motor 'gripper' was not found` durante la configuración del ID del servo</summary>

Si ves el siguiente error:

<CodeBlock language="text">
{`Motor 'gripper' was not found, Make sure it is connected`}
</CodeBlock>

comprueba si el cable de comunicación está conectado correctamente y si el bus del servo está alimentado con el voltaje correcto.

</details>

<details className="content-details">
<summary>`Could not connect on port "/dev/ttyACM0"`</summary>

Si `/dev/ttyACM0` existe pero LeRobot no puede conectarse a él, normalmente faltan permisos del puerto serie. Ejecuta:

<CodeBlock language="bash">
{`sudo chmod 666 /dev/ttyACM*`}
</CodeBlock>

Además, comprueba de nuevo si los brazos líder y seguidor están asignados a los puertos esperados.

</details>

<details className="content-details">
<summary>`No valid stream found in input file`</summary>

Si ves:

<CodeBlock language="text">
{`No valid stream found in input file. Is -1 of the desired media type?`}
</CodeBlock>

instala ffmpeg 7.1.1:

<CodeBlock language="bash">
{`conda install ffmpeg=7.1.1 -c conda-forge`}
</CodeBlock>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" alt="No valid stream error" />
</div>

</details>

<details className="content-details">
<summary>`Present_Position` sync read failed</summary>

Si ves:

<CodeBlock language="text">
{`ConnectionError: Failed to sync read 'Present_Position' on ids=[1,2,3,4,5,6] after 1 tries. [TxRxResult] There is no status packet!`}
</CodeBlock>

comprueba si el brazo correspondiente está encendido y si los cables de datos del bus-servo están flojos o desconectados. Si el LED de un servo está apagado, es posible que el cable antes de ese servo esté suelto.

</details>

<details className="content-details">
<summary>`Magnitude 30841 exceeds 2047` durante la calibración</summary>

Si ves:

<CodeBlock language="text">
{`Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)`}
</CodeBlock>

apaga y reinicia el brazo, luego calibra de nuevo. Si el problema persiste, usa la herramienta de calibración rápida Seeed Studio SoARM para realizar la calibración de la posición media y la verificación del ID de los servos, y luego vuelve a hacer la calibración de todo el brazo.

</details>

<details className="content-details">
<summary>¿Cómo vuelvo a calibrar después de una reparación o sustitución de piezas?</summary>

Elimina los archivos de calibración antiguos y vuelve a calibrar:

<CodeBlock language="bash">
{`rm -rf ~/.cache/huggingface/lerobot/calibration/robots
rm -rf ~/.cache/huggingface/lerobot/calibration/teleoperators`}
</CodeBlock>

La información de calibración se almacena como archivos JSON en estos directorios. Si el hardware cambia pero los archivos de calibración antiguos permanecen, LeRobot puede reutilizar offsets desactualizados.

</details>

<details className="content-details">
<summary>Los atajos de teclado no funcionan durante la grabación</summary>

Si la flecha derecha, la flecha izquierda o la tecla ESC no responden durante la grabación del dataset, primero comprueba que la variable de entorno `$DISPLAY` esté configurada. También puedes intentar hacer un downgrade de `pynput`:

<CodeBlock language="bash">
{`pip install pynput==1.6.8`}
</CodeBlock>

</details>

<details className="content-details">
<summary>¿Cómo debo manejar los episodios fallidos durante la grabación?</summary>

Si el objeto se cae, la pinza falla o la calidad del episodio es mala, mueve el brazo de vuelta a una postura de reposo segura y pulsa la tecla de flecha izquierda para descartar y volver a grabar el episodio. Si la tarea termina antes de tiempo y el robot ha vuelto al reposo, pulsa la tecla de flecha derecha para pasar al siguiente episodio sin esperar todo el tiempo restante.

</details>

<details className="content-details">
<summary>¿A qué debo prestar atención durante la recopilación del dataset?</summary>

Mantén estables la posición de la cámara, el ángulo de la cámara y la iluminación ambiental. Evita fondos inestables o peatones en el campo de visión de la cámara, porque grandes diferencias entre el entorno de grabación y el de despliegue pueden hacer que la política falle.

Configura `--dataset.num_episodes` lo suficientemente alto antes de empezar. No detengas manualmente la grabación a mitad de camino a menos que sea necesario, porque las estadísticas del dataset, como la media y la varianza, se calculan después de que finaliza la recopilación y son necesarias para el entrenamiento.

</details>

<details className="content-details">
<summary>¿Cómo elimino o modifico datasets grabados?</summary>

Para eliminar o editar datasets grabados, consulta el tutorial de la herramienta de datasets:

[Herramienta de Dataset](/es/lerobot_dataset_tool)

</details>

<details className="content-details">
<summary>No se pueden leer los datos de imagen de la cámara USB</summary>

Evita conectar la cámara USB a través de un hub USB. Conéctala directamente al dispositivo, preferiblemente a través de un puerto USB 3.0, para garantizar un ancho de banda de transmisión de imagen suficiente.

</details>

<details className="content-details">
<summary>Timeout de la cámara Orbbec o desajuste del número de serie</summary>

Si ves un timeout mientras esperas los fotogramas, desconecta y vuelve a conectar la cámara. Si ves:

<CodeBlock language="text">
{`No Orbbec camera found for 'XXXX'`}
</CodeBlock>

ejecuta el comando de detección de la cámara y actualiza `serial_number_or_name` con el número de serie real:

<CodeBlock language="bash">
{`lerobot-find-cameras orbbec`}
</CodeBlock>

</details>

<details className="content-details">
<summary>`File exists` durante la evaluación</summary>

Si la evaluación informa de que ya existe un directorio `eval_`, elimina primero la carpeta de evaluación existente y ejecuta el programa de nuevo.

<CodeBlock language="text">
{`File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'`}
</CodeBlock>

</details>

<details className="content-details">
<summary>`mean is infinity` durante la evaluación</summary>

Si ves:

<CodeBlock language="text">
{`mean is infinity. You should either initialize with stats as an argument or use a pretrained model`}
</CodeBlock>

asegúrate de que las claves de cámara en `--robot.cameras`, como `front` y `side`, coincidan exactamente con las claves usadas durante la grabación del dataset.

</details>

<details className="content-details">
<summary>`TypeError: stack(): argument 'tensors' must be tuple of Tensors`</summary>

Si ves:

<CodeBlock language="text">
{`TypeError: stack(): argument 'tensors' (position 1) must be tuple of Tensors, not Column`}
</CodeBlock>

intenta instalar la versión compatible de datasets:

<CodeBlock language="bash">
{`pip install datasets==2.19`}
</CodeBlock>

</details>

<details className="content-details">
<summary>`rerun` no tiene el atributo `scalar`</summary>

Si ves:

<CodeBlock language="text">
{`AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?`}
</CodeBlock>

haz un downgrade del SDK de rerun:

<CodeBlock language="bash">
{`pip3 install rerun-sdk==0.23`}
</CodeBlock>

</details>

<details className="content-details">
<summary>¿Cuánto tiempo suele tardar el entrenamiento de ACT?</summary>

Como referencia aproximada, entrenar ACT en 50 episodios toma alrededor de 6 horas en una laptop con RTX 3060 de 8 GB, y alrededor de 2–3 horas en una RTX 4090 o A100. El tiempo real depende del tamaño del conjunto de datos, la resolución de la imagen, el tamaño del lote y el hardware.

</details>

:::tip
Si encuentras problemas de software o dependencias sin resolver después de revisar este FAQ, repórtalos en el [repositorio de GitHub de LeRobot](https://github.com/huggingface/lerobot) o en el [canal de Discord de LeRobot](https://discord.gg/8TnwDdjFGU).
:::

</section>


## Citación

<section id="references" className="section-card">
  <div className="section-title">
    <span>Referencias</span>
    <h2>Citación</h2>
    <p>Documentación relacionada, proyectos, artículos y recursos externos.</p>
  </div>

[Chinese Document](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/)

Proyecto TheRobotStudio: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Proyecto Huggingface: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

</section>

## Soporte técnico y debate sobre productos

<section id="support" className="section-card">
  <div className="section-title">
    <span>Soporte</span>
    <h2>Soporte técnico y debate sobre productos</h2>
    <p>Contacta con Seeed Studio y únete a los debates de la comunidad para preguntas sobre productos.</p>
  </div>

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.


<div className="path-grid">
  <a className="path-card" href="https://forum.seeedstudio.com/" target="_blank" rel="noopener noreferrer"><strong>Foro</strong><span>Haz preguntas sobre productos y cuestiones técnicas en el foro de Seeed.</span></a>
  <a className="path-card" href="https://www.seeedstudio.com/contacts" target="_blank" rel="noopener noreferrer"><strong>Soporte por correo electrónico</strong><span>Contacta directamente con el soporte de Seeed Studio.</span></a>
  <a className="path-card" href="https://discord.gg/eWkprNDMU7" target="_blank" rel="noopener noreferrer"><strong>Discord</strong><span>Únete a la comunidad de Seeed en Discord.</span></a>
  <a className="path-card" href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" target="_blank" rel="noopener noreferrer"><strong>GitHub Discussion</strong><span>Debate sobre el contenido del wiki y problemas de documentación.</span></a>
</div>


</section>

</div>
