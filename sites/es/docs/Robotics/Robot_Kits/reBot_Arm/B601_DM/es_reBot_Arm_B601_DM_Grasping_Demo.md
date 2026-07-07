---
description: Este tutorial muestra cómo construir una demo completa de agarre visual para el reBot Arm B601 usando una cámara RGB-D, YOLO / OBB y canalizaciones de agarre opcionales de GraspNet.
title: Demo de agarre visual con reBot Arm B601
keywords:
  - reBot Arm
  - B601-DM
  - B601-RS
  - Agarre
  - RGB-D
  - YOLO
  - GraspNet
  - Calibración mano-ojo
  - Robot
slug: /rebot_arm_b601_dm_grasping_demo
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-05
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-22'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_grasping_demo/
---

# Demo de agarre visual con reBot Arm B601

<div className="rebot-page">
  <section className="doc-hero">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>Construye un sistema de agarre visual de escritorio con visión RGB-D, YOLO y reBot Arm</h2>
      <p>
        Esta guía recorre una demo completa de agarre visual: configuración del entorno, integración de la cámara,
        configuración del SDK del brazo robótico, calibración mano-ojo, estimación de agarre con YOLO / OBB / GraspNet,
        y ejecución real con el brazo robótico.
      </p>
      <div className="hero-actions">
        <a href="#quick-path">Ver flujo de trabajo</a>
        <a href="#run">Ejecutar la demo</a>
      </div>
    </div>
    <div className="hero-card">
      <strong>Configuración recomendada</strong>
      <span>reBot Arm B601-DM / B601-RS</span>
      <span>Orbbec Gemini 2 o RealSense D435i / D405</span>
      <span>Ubuntu 22.04 + Python 3.10</span>
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
      <li>Si se produce un movimiento anómalo, ruido, vibración, cables sueltos, mal contacto de alimentación o pérdida de comunicación, detén el programa inmediatamente y apaga el sistema antes de la inspección.</li>
      <li>Apaga siempre el sistema antes de conectar o desconectar cables de motor, cables CAN, adaptadores USB2CAN / PCAN-USB, conectores XT30 o conectores de alimentación.</li>
    </ul>
  </div>
</div>


  <nav className="doc-nav" aria-label="visual grasping navigation">
    <a href="#quick-path">Flujo de trabajo</a>
    <a href="#hardware">Hardware</a>
    <a href="#install">Instalación</a>
    <a href="#camera-sdk">SDK de la cámara</a>
    <a href="#graspnet">GraspNet</a>
    <a href="#run">Ejecución y depuración</a>
    <a href="#config">Configuración</a>
    <a href="#faq">Preguntas frecuentes</a>
  </nav>
</div>

<div className="rebot-page">
  <div className="image-frame">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/demo.gif" alt="reBot Arm B601 visual grasping demo" />
  </div>
</div>

<p align="center">
  <strong>Percepción de profundidad · Detección de objetos · Calibración mano-ojo · Agarre autónomo · Totalmente de código abierto</strong>
</p>

<div className="video-container">
  <iframe
    width="900"
    height="600"
    src="https://www.youtube.com/embed/6dqKZNh_D7k?autoplay=0"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen>
  </iframe>
</div>

<div className="rebot-page">

<section id="quick-path" className="section-card">

## Flujo de trabajo recomendado

<div className="path-grid">
  <div className="path-card"><span>Paso 1</span><strong>Preparar el hardware</strong><p>Confirma la versión del brazo, la fuente de alimentación, la interfaz USB2CAN / CAN y la conexión de la cámara RGB-D.</p></div>
  <div className="path-card"><span>Paso 2</span><strong>Instalar el entorno</strong><p>Crea el entorno conda e instala el SDK del brazo, el SDK de la cámara, YOLO y el GraspNet opcional.</p></div>
  <div className="path-card"><span>Paso 3</span><strong>Completar la calibración mano-ojo</strong><p>Recopila poses de ArUco y resuelve la transformación de calibración Eye-in-Hand.</p></div>
  <div className="path-card"><span>Paso 4</span><strong>Ejecutar la demo de agarre</strong><p>Valida primero la percepción y las poses objetivo con una ejecución en seco y luego ejecuta con el brazo real.</p></div>
</div>

:::tip
Completa la guía de inicio rápido para tu brazo antes de ejecutar esta demo: [B601-DM Quick Start](https://wiki.seeedstudio.com/es/rebot_b601_dm_getting_started/) o [B601-RS Quick Start](https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/).
:::

</section>

<section className="section-card">

## Introducción al proyecto

**reBot Arm B601 Visual Grasping Demo** es un proyecto de agarre visual de código abierto construido en torno a una cámara de profundidad RGB-D y la biblioteca de control del brazo robótico reBot. El sistema es compatible con las configuraciones B601-DM y B601-RS. Utiliza YOLO para la detección de objetos en tiempo real sobre el escritorio, estima la orientación de agarre con un rectángulo de área mínima OBB, transforma los puntos de agarre en el marco de la cámara al marco base del robot mediante calibración mano-ojo y, finalmente, acciona el brazo robótico para completar el agarre autónomo.

### Capacidades principales

<div className="feature-grid">
  <div><strong>Percepción de profundidad RGB-D</strong><span>Compatible con Orbbec Gemini 2, RealSense D435i / D405 y cámaras RGB-D similares.</span></div>
  <div><strong>Detección de objetos con YOLO</strong><span>Compatible con clases de vocabulario abierto y modelos estándar de segmentación YOLO.</span></div>
  <div><strong>Estimación de agarre con OBB</strong><span>Utiliza el eje corto del rectángulo de área mínima para la orientación de la garra y cuantiles de profundidad para la altura de agarre.</span></div>
  <div><strong>Agarre 6D con GraspNet</strong><span>Opcionalmente añade candidatos de agarre 6D más ricos para objetos más complejos.</span></div>
  <div><strong>Calibración Eye-in-Hand</strong><span>Utiliza calibración mano-ojo TSAI para transformar los puntos de agarre en el marco de la cámara al marco base del robot.</span></div>
  <div><strong>Ejecución con el brazo real</strong><span>Utiliza reBotArm_control_py para IK, control de trayectoria y control de fuerza de la garra.</span></div>
</div>

</section>

<section id="hardware" className="section-card">


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>Retira todos los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del espacio de trabajo del robot. Asegúrate de que el brazo esté firmemente fijado antes de ejecutar esta sección.</p>
  </div>
</div>

## Configuración de hardware

| Componente | Modelo / Requisito |
|------|------------|
| Brazo robótico | reBot Arm B601-DM o reBot Arm B601-RS |
| Cámara de profundidad | Orbbec Gemini 2, Intel RealSense D435i / D405 |
| Interfaz de comunicación | B601-DM usa un puente serie USB2CAN; B601-RS usa PCAN-USB / SocketCAN |
| Host | Ubuntu 22.04+, Python 3.10, x86_64 |

### Cableado y permisos

```bash
sudo chmod a+rw /dev/bus/usb/*/*   # Depth camera USB permissions
sudo chmod 666 /dev/ttyUSB0        # B601-DM USB2CAN; adjust the port if needed
```

Para B601-RS, levanta la interfaz CAN antes de ejecutar scripts de calibración o agarre:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
ip -details link show can0
```

:::danger
B601-DM usa una fuente de alimentación de CC de 24 V, mientras que B601-RS usa una fuente de alimentación de CC de 48 V. Asegúrate de que la fuente de alimentación, la versión del brazo y la configuración del SDK coincidan. No los mezcles.
:::

</section>

<section id="install" className="section-card">

## Instalación del entorno

| Elemento | Requisito |
|------|------|
| OS | Ubuntu 22.04+ |
| Python | 3.10 |
| Entorno recomendado | conda |
| Espacio de trabajo recomendado | `rebot_grasp` |
| Nombre de entorno recomendado | `rebotarm` |

### Paso 1. Clonar el repositorio

Da preferencia al repositorio oficial Seeed-Projects:

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

También puedes usar el repositorio de desarrollo actual:

```bash
git clone https://github.com/EclipseaHime017/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

### Paso 2. Crear y activar el entorno conda

```bash
conda env create -f environment.yml
conda activate rebotarm
```

### Paso 3. Instalar la biblioteca de control del brazo robótico

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

Si `pip install -e .` informa `Multiple top-level packages discovered in a flat-layout`, añade la siguiente configuración de descubrimiento de paquetes a `pyproject.toml` en `reBotArm_control_py`:

```toml
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

</section>

<section id="camera-sdk" className="section-card">

## Instalar el SDK de la cámara de profundidad

<details open className="content-details">
<summary>Orbbec Gemini 2</summary>

Orbbec Gemini 2 depende de `pyorbbecsdk`. El enfoque recomendado es instalar el paquete de Python precompilado:

```bash
pip install pyorbbecsdk2
```

También puedes compilar desde el código fuente:

```bash
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev
cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

Para usuarios de China continental:

```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

Para el primer uso, instala las reglas udev:

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```

</details>

<details className="content-details">
<summary>Intel RealSense D435i / D405</summary>

```bash
pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"
```

Si necesitas el conjunto completo de herramientas RealSense o reglas udev, consulta la documentación oficial del SDK Intel RealSense e instala `librealsense2`.

</details>

</section>

<section id="graspnet" className="section-card">

## Configurar GraspNet (opcional)

Omite esta sección si solo quieres ejecutar primero el flujo de trabajo de agarre YOLO + OBB. Configura GraspNet cuando necesites candidatos de pose de agarre 6D más ricos.

Antes de compilar los operadores locales, asegúrate de que `nvcc` esté disponible y coincida con la versión de CUDA utilizada por PyTorch:

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

Si falta `nvcc` o no coincide con `torch.version.cuda`, instala un compilador CUDA que coincida con tu versión actual de CUDA de PyTorch. Por ejemplo, cuando PyTorch indica `13.0`:

```bash
conda install -c nvidia cuda-nvcc=13.0
```

Compila los operadores locales de GraspNet:

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline
pip install open3d tensorboard Pillow tqdm

export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="12.0"
export CPATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPLUS_INCLUDE_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

cd pointnet2
pip install . --no-build-isolation
cd ../knn
pip install . --no-build-isolation
cd ..

git clone https://github.com/graspnet/graspnetAPI.git
cd graspnetAPI
sed -i "s/'sklearn'/'scikit-learn'/" setup.py
pip install .
cd ../../..
```

### Configurar el modelo preentrenado

Descarga el peso oficial preentrenado de GraspNet `checkpoint-rs.tar` y colócalo en:

```bash
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

Luego verifica `config/default.yaml`:

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

</section>

<section className="section-card">

## Estructura de directorios

```text
rebot_grasp/
├── config/
│   ├── default.yaml
│   └── calibration/
│       └── <camera_type>/
│           ├── intrinsics.npz
│           └── hand_eye.npz
├── drivers/
│   ├── camera/
│   └── robot/
├── calibration/
│   ├── aruco_pose.py
│   └── hand_eye.py
├── utils/
├── scripts/
│   ├── main.py
│   ├── set.py
│   ├── ordinary_grasp_pipeline.py
│   ├── graspnet_camera_demo.py
│   ├── grasp.py
│   └── collect_handeye_eih.py
├── sdk/
└── environment.yml
```

</section>

<section id="run" className="section-card">


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>Retira todos los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del espacio de trabajo del robot. Asegúrate de que el brazo esté firmemente fijado antes de ejecutar esta sección.</p>
  </div>
</div>

## Ejecutar y depurar

### 0. Confirmar la versión del brazo y la configuración del SDK

En `sdk/reBotArm_control_py/config/rebotarm.yaml`, selecciona la configuración de hardware correspondiente:

```yaml
hardware_yaml: rebotarm_dm.yaml
```

O:

```yaml
hardware_yaml: rebotarm_rs.yaml
```

### 1. Calibración mano-ojo (requerida antes de agarrar)

```bash
python scripts/collect_handeye_eih.py
```

En el modo automático, el brazo recorre poses preestablecidas y toma muestras automáticamente cuando la detección de ArUco es estable. Se requieren al menos 5 muestras y se recomiendan 15 o más para una mejor estabilidad.

Para mover manualmente el brazo para la recolección de muestras:

```bash
python scripts/collect_handeye_eih.py --manual
```

:::tip
Si la precisión de agarre no es suficientemente buena después de la calibración, ajusta `X`, `Y` y `Z` en `calibration.hand_eye_compensation_m` en `config/default.yaml`.
:::

### 2. Programa principal de agarre: `scripts/main.py`

Flujo completo de agarre visual:

1. Inicializa la cámara RGB-D y confirma que el flujo de imágenes esté disponible.
2. Habilita el brazo y el efector final, luego muévelo a la pose de preparado.
3. Ejecuta la vista previa en tiempo real de la cámara con detección de objetos YOLO y segmentación por instancias.
4. Estima la orientación del efector final usando el eje corto del OBB y estima la altura de agarre usando un cuantil de profundidad.
5. Pulsa `G` para congelar el fotograma y calcular la pose objetivo del brazo mediante la transformación mano-ojo.
6. Muévete al punto de pre-agarre, desciende, cierra el efector final, eleva y vuelve a la pose de preparado.

```bash
python scripts/main.py
```

Para depuración, comienza con:

```bash
python scripts/main.py --dry-run
```

### 3. Programa de agarrar y colocar: `scripts/set.py`

Este script demuestra cómo agarrar un plátano y colocarlo en una caja.

```bash
python scripts/set.py
```

### 4. Prueba de agarre simplificada: `scripts/ordinary_grasp_pipeline.py`

Este script no se conecta al brazo. Solo verifica la estimación de la pose de agarre OBB y la visualización.

```bash
python scripts/ordinary_grasp_pipeline.py
```

### 5. Estimación con cámara GraspNet: `scripts/graspnet_camera_demo.py`

Este script no se conecta al brazo. Ejecuta la estimación de pose de agarre 6D de GraspNet solo con la cámara RGB-D.

```bash
python scripts/graspnet_camera_demo.py
```

### 6. Agarre con brazo robótico GraspNet: `scripts/grasp.py`

```bash
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

</section>

<section id="config" className="section-card">

## Referencia de parámetros de `default.yaml`

<details open className="content-details">
<summary>Cámara y calibración</summary>

| Parámetro | Tipo / Opciones | Significado |
| :--- | :--- | :--- |
| `camera.type` | `realsense_d435i` / `realsense_d405` / `orbbec_gemini2` | Tipo de cámara conectada al sistema. |
| `camera.serial` | `string` / `null` | Número de serie del dispositivo; establécelo en `null` para usar el primer dispositivo disponible. |
| `calibration.aruco.marker_length_m` | `float` | Longitud del lado del marcador ArUco en metros. |
| `calibration.hand_eye_compensation_m` | `array` | Compensación de traslación XYZ en el marco base del robot, en metros. |

</details>

<details className="content-details">
<summary>Detección y flujo de agarre</summary>

| Parámetro | Tipo | Significado |
| :--- | :--- | :--- |
| `detection.conf_threshold` | `float` | Umbral de confianza de detección YOLO. |
| `detection.iou_threshold` | `float` | Umbral de IoU para NMS de YOLO. |
| `grasp_pipeline.infer_every_live` | `int` | Ejecutar detección cada N fotogramas durante la vista previa en vivo. |
| `grasp_pipeline.grasp.depth_quantile` | `float` | Cuantil de profundidad utilizado por el flujo de agarre OBB. |
| `grasp_pipeline.grasp.pregrasp_offset_m` | `float` | Distancia de retroceso desde la pose final de agarre hasta la pose de pre-agarre. |
| `grasp_pipeline.grasp.insertion_depth_m` | `float` | Profundidad de inserción adicional utilizada por la ejecución de agarre de GraspNet. |
| `grasp_pipeline.grasp.min_base_z_m` | `float` | Altura mínima de agarre permitida en el marco base del robot. |

</details>

<details className="content-details">
<summary>Robot y efector final</summary>

| Parámetro | Tipo / Opciones | Significado |
| :--- | :--- | :--- |
| `robot.repo_root` | `string` / `null` | Ruta a `reBotArm_control_py`; cuando es `null`, se usa `sdk/reBotArm_control_py`. |
| `robot.ready_pose` | `array` | Pose de preparado utilizada al inicio y después de cada tarea de agarre. |
| `robot.gripper.dm` / `robot.gripper.rs` | object | Parámetros del efector final DM / RS seleccionados automáticamente según la configuración del SDK. |

`angle_open`, `close_torque` y `default_force` deben ser números positivos. `counterclockwise` define la dirección de cierre y `tau_max` es el límite de par.

</details>

### Selección de modelo

Los modelos YOLO se cargan desde `rebot_grasp/models/`. Si el archivo no existe, Ultralytics normalmente intenta descargarlo automáticamente.

| Modelo | Descripción |
| --- | --- |
| `yoloe-26l-seg.pt` | Vocabulario abierto + segmentación, valor predeterminado actual. |
| `yoloe-26s-seg.pt` | Más ligero y rápido. |
| `yolov8n-seg.pt` | Segmentación de categorías cerradas, modelo pequeño. |
| `yolov8s-seg.pt` | Segmentación de categorías cerradas con mayor precisión. |

</section>

<section id="faq" className="section-card">

## Preguntas frecuentes

<details className="content-details">
<summary>1. `ModuleNotFoundError: No module named 'motorbridge'`</summary>

Confirma que el entorno del proyecto esté activado, luego sincroniza el entorno y reinstala el SDK del brazo:

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

</details>

<details className="content-details">
<summary>2. Al pulsar `G` no se ejecuta el agarre</summary>

Las causas comunes incluyen: falta `hand_eye.npz`, el modo de calibración mano-ojo no es `eye_in_hand`, o la pose objetivo no es alcanzable por IK. Comienza con una validación de prueba en seco:

```bash
python scripts/main.py --dry-run
```

</details>

<details className="content-details">
<summary>3. La profundidad de agarre es inestable</summary>

Comprueba `grasp_pipeline.grasp.depth_quantile`, la altura de montaje de la cámara, la reflectividad de la superficie objetivo y la calidad de profundidad en el espacio de trabajo.

</details>

<details className="content-details">
<summary>4. GraspNet no puede importar `pointnet2_utils` desde `pointnet2`</summary>

Esto normalmente significa que las extensiones CUDA locales `pointnet2` / `knn` no se compilaron correctamente en el entorno conda actual. Vuelve a compilarlas:

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

</details>

<details className="content-details">
<summary>5. GraspNet informa `RuntimeError: CPU not supported`</summary>

Los operadores de muestreo en `pointnet2` solo admiten tensores CUDA. Confirma que CUDA esté disponible y vuelve a compilar las extensiones locales si es necesario:

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

</details>

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
        <small>Desempaquetado completo, cableado, comprobaciones de alimentación, configuración de controladores, calibración y pruebas básicas de movimiento.</small>
      </div>
      <em>Empieza aquí</em>
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
        <small>Comprende los modelos del robot, los marcos de coordenadas, FK / IK, la planificación de trayectorias y la compensación de la gravedad.</small>
      </div>
      <em>Control</em>
    </a>
    <a className="course-step active" href="/es/rebot_arm_b601_dm_grasping_demo/">
      <span className="course-index">4</span>
      <div>
        <strong>Demostración de agarre visual</strong>
        <small>Combina percepción RGB-D, YOLO / OBB o GraspNet, calibración mano-ojo y agarre de objetos reales.</small>
      </div>
      <em>Artículo actual</em>
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


## Referencias

- [reBotArm_control_py](https://github.com/vectorBH6/reBotArm_control_py)
- [reBot-DevArm](https://github.com/Seeed-Projects/reBot-DevArm)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [pyorbbecsdk](https://github.com/orbbec/pyorbbecsdk)
- [RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Ultralytics YOLO](https://github.com/ultralytics/ultralytics)

## Soporte técnico

- [Submit an Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)

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
.rebot-page .doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.rebot-page .doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.rebot-page .eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.rebot-page .doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.rebot-page .doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.rebot-page .hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.rebot-page .hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.rebot-page .hero-actions a:nth-child(2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.rebot-page .hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.rebot-page .hero-card strong { color: var(--rb-text); }
.rebot-page .hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.rebot-page .doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.rebot-page .doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.88rem; transition: all 0.2s ease; }
.rebot-page .doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.rebot-page .section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); }
.rebot-page .section-card > h2 { margin-top: 0; color: var(--rb-text); }
.rebot-page .section-card > h3, .rebot-page .section-card h3 { color: var(--rb-text); }
.rebot-page .section-card p, .rebot-page .section-card li { color: var(--rb-muted); line-height: 1.65; }
.rebot-page .path-grid, .rebot-page .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.9rem; }
.rebot-page .path-card, .rebot-page .feature-grid div { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); text-decoration: none !important; color: inherit; transition: all 0.2s ease; }
.rebot-page .path-card:hover { transform: translateY(-3px); border-color: rgba(37,99,235,0.35); box-shadow: 0 12px 26px rgba(37,99,235,0.10); }
.rebot-page .path-card > span:first-child { width: fit-content; padding: 0.32rem 0.6rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); font-weight: 900; font-size: 0.75rem; }
.rebot-page .path-card strong, .rebot-page .feature-grid strong { color: var(--rb-text); }
.rebot-page .path-card p, .rebot-page .feature-grid span { color: var(--rb-muted); line-height: 1.6; font-size: 0.92rem; margin: 0; }
.rebot-page .image-frame { margin: 1rem 0; text-align: center; }
.rebot-page .image-frame img { max-width: 100%; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.08); }
.rebot-page .content-details, .rebot-page .video-details { margin: 1rem 0; border: 1px solid var(--rb-border); border-radius: 16px; background: var(--rb-surface-soft); overflow: hidden; }
.rebot-page .content-details summary, .rebot-page .video-details summary { cursor: pointer; padding: 0.95rem 1rem; color: var(--rb-text); font-weight: 850; list-style: none; }
.rebot-page .content-details summary::-webkit-details-marker, .rebot-page .video-details summary::-webkit-details-marker { display: none; }
.rebot-page .content-details summary::after, .rebot-page .video-details summary::after { content: "Open"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.rebot-page .content-details[open] summary::after, .rebot-page .video-details[open] summary::after { content: "Close"; }
.rebot-page .content-details > :not(summary), .rebot-page .video-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.rebot-page .content-details > :last-child, .rebot-page .video-details > :last-child { margin-bottom: 1rem; }
.rebot-page .video-container, .video-container { position: relative; width: 100%; padding-bottom: 56.25%; margin: 1rem 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border, rgba(148,163,184,0.28)); background: #000; }
.rebot-page .video-container iframe, .video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.rebot-page table { width: 100%; display: table; }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
.rebot-page code { word-break: break-word; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .rebot-page .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .rebot-page .hero-card, html[data-theme='dark'] .rebot-page .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .rebot-page .doc-nav a:hover { background: #1f2023; }
@media (max-width: 900px) { .rebot-page .doc-hero { grid-template-columns: 1fr; } .rebot-page .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 560px) { .rebot-page .doc-hero, .rebot-page .section-card { padding: 1.1rem; border-radius: 18px; } .rebot-page .doc-nav { grid-template-columns: 1fr; } }

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
