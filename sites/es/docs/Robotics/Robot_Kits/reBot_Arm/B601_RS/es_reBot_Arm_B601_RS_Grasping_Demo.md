---
description: Este tutorial muestra cómo construir una demostración completa de agarre visual para el reBot Arm B601-RS usando una cámara RGB-D, YOLO / OBB y canalizaciones de agarre opcionales de GraspNet.
title: Demostración de agarre visual con reBot Arm B601-RS
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif
keywords:
  - reBot Arm
  - B601-RS
  - Agarre
  - RGB-D
  - YOLO
  - GraspNet
  - Calibración mano-ojo
  - Robot
slug: /rebot_arm_b601_rs_grasping_demo
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-07-05
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-15'
updatedAt: '2026-07-05'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_grasping_demo/
---

# Demostración de agarre visual con reBot Arm B601-RS

<div className="rebot-page">
  <section className="doc-hero">
    <div>
      <span className="eyebrow">Seeed Studio Robotics Wiki</span>
      <h2>Construye un sistema de agarre visual de escritorio con visión RGB-D, YOLO y B601-RS</h2>
      <p>
        Esta guía recorre una demostración completa de agarre visual: configuración del entorno, integración de la cámara,
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
      <span>reBot Arm B601-RS</span>
      <span>Orbbec Gemini 2 o RealSense D435i / D405</span>
      <span>Ubuntu 22.04 + Python 3.10</span>
    </div>
  </section>


<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Advertencia de seguridad: despeja el espacio de trabajo del robot antes de ejecutar</strong>
    <p>Antes de ejecutar cualquier programa que mueva el brazo robótico, despeja todos los objetos de valor, objetos frágiles, herramientas, cables y objetos no relacionados dentro de un <strong>radio de 1 metro</strong> del espacio de trabajo del robot. Durante la depuración y la operación, el personal debe mantenerse alejado del rango de movimiento del robot.</p>
    <ul>
      <li>No toques las articulaciones, motores, eslabones, la garra ni el efector final después de encender el brazo robótico.</li>
      <li>Antes de ejecutar la calibración, MotorBridge, teleoperación, recopilación de datos, control de IK, control de trayectoria, compensación de gravedad, agarre visual, acciones ROS2 o ejecución con MoveIt, asegúrate de que el brazo robótico esté firmemente fijado.</li>
      <li>Si se produce un movimiento anormal, ruido, vibración, cables sueltos, mal contacto de alimentación o pérdida de comunicación, detén el programa inmediatamente y apaga el sistema antes de la inspección.</li>
      <li>Apaga siempre el sistema antes de conectar o desconectar cables de motor, cables CAN, adaptadores PCAN-USB, conectores XT30 o conectores de alimentación.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="visual grasping navigation">
    <a href="#quick-path">Flujo de trabajo</a>
    <a href="#hardware">Hardware</a>
    <a href="#install">Instalación</a>
    <a href="#camera-sdk">SDK de cámara</a>
    <a href="#graspnet">GraspNet</a>
    <a href="#run">Ejecución y depuración</a>
    <a href="#config">Configuración</a>
    <a href="#faq">Preguntas frecuentes</a>
  </nav>

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif" alt="reBot Arm B601-RS visual grasping demo" />
</p>

<p align="center">
  <strong>Percepción de profundidad · Detección de objetos · Calibración mano-ojo · Agarre autónomo · Totalmente de código abierto</strong>
</p>

<div className="video-placeholder">Enlace de video por añadir: demostración de agarre visual con B601-RS</div>

<section id="quick-path" className="section-card">

<div className="step-title-row"><span className="step-pill">Flujo de trabajo</span><div><h2>Flujo de trabajo recomendado</h2><p>Sigue las etapas siguientes para validar la percepción, la calibración y la ejecución segura con el brazo real.</p></div></div>

<div className="path-grid">
  <div className="path-card"><span>Paso 1</span><strong>Preparar el hardware</strong><p>Confirma la versión del brazo, la fuente de alimentación, la interfaz PCAN-USB / SocketCAN y la conexión de la cámara RGB-D.</p></div>
  <div className="path-card"><span>Paso 2</span><strong>Instalar el entorno</strong><p>Crea el entorno conda e instala el SDK del brazo, el SDK de la cámara, YOLO y GraspNet opcional.</p></div>
  <div className="path-card"><span>Paso 3</span><strong>Completar la calibración mano-ojo</strong><p>Recopila poses de ArUco y resuelve la transformación de calibración Eye-in-Hand.</p></div>
  <div className="path-card"><span>Paso 4</span><strong>Ejecutar la demo de agarre</strong><p>Valida primero la percepción y las poses objetivo con una ejecución en seco, luego ejecuta con el brazo real.</p></div>
</div>

:::tip
Completa la guía de inicio rápido para tu brazo antes de ejecutar esta demo: [B601-RS Quick Start](https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/).
:::

</section>

<section className="section-card">
  <div className="section-title">
    <span>Pasos detallados</span>
    <h2>Etapas detalladas de implementación</h2>
    <p>Usa esta lista de verificación para pasar de la validación solo de percepción a la ejecución segura con el brazo real.</p>
  </div>
  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">Paso 0</span><strong>Terminar primero el inicio rápido</strong><p>Verifica la alimentación, PCAN-USB / SocketCAN, la posición cero y el movimiento básico antes de conectar la percepción al movimiento del robot.</p></div>
    <div className="step-card"><span className="step-mini">Paso 1</span><strong>Preparar la visión RGB-D</strong><p>Instala el SDK de la cámara y verifica flujos estables de color / profundidad antes de la calibración.</p></div>
    <div className="step-card"><span className="step-mini">Paso 2</span><strong>Calibrar Eye-in-Hand</strong><p>Recopila suficientes muestras de ArUco y valida la precisión de la transformación mano-ojo.</p></div>
    <div className="step-card"><span className="step-mini">Paso 3</span><strong>Validar solo la percepción</strong><p>Ejecuta las demos de OBB o GraspNet sin movimiento del robot para comprobar las estimaciones de pose.</p></div>
    <div className="step-card"><span className="step-mini">Paso 4</span><strong>Ejecutar en seco</strong><p>Comprueba la pose objetivo, la alcanzabilidad de IK, la pose de pre-agarre y el riesgo de colisión.</p></div>
    <div className="step-card"><span className="step-mini">Paso 5</span><strong>Habilitar el agarre real</strong><p>Solo después de que todas las comprobaciones anteriores se superen, habilita el brazo y ejecuta el agarre real.</p></div>
  </div>
</section>


<section className="section-card">

## Introducción al proyecto

**Demostración de agarre visual con reBot Arm B601-RS** es un proyecto de agarre visual de código abierto construido alrededor de una cámara de profundidad RGB-D y la biblioteca de control del brazo robótico reBot. El sistema está diseñado para la configuración B601-RS. Utiliza YOLO para la detección de objetos en tiempo real sobre el escritorio, estima la orientación de agarre con un rectángulo de área mínima OBB, transforma los puntos de agarre en el marco de la cámara al marco base del robot mediante calibración mano-ojo y, finalmente, acciona el brazo robótico para completar el agarre autónomo.

### Capacidades principales

<div className="feature-grid">
  <div className="path-card"><span>Paso 1</span><strong>Percepción de profundidad RGB-D</strong><p>Admite Orbbec Gemini 2, RealSense D435i / D405 y cámaras RGB-D similares.</p></div>
  <div className="path-card"><span>Paso 2</span><strong>Detección de objetos con YOLO</strong><p>Admite clases de vocabulario abierto y modelos estándar de segmentación YOLO.</p></div>
  <div className="path-card"><span>Paso 3</span><strong>Estimación de agarre con OBB</strong><p>Utiliza el eje corto del rectángulo de área mínima para la orientación de la garra y cuantiles de profundidad para la altura de agarre.</p></div>
  <div className="path-card"><span>Paso 4</span><strong>Agarre 6D con GraspNet</strong><p>Opcionalmente añade candidatos de agarre 6D más ricos para objetos más complejos.</p></div>
  <div className="path-card"><span>Paso 5</span><strong>Calibración Eye-in-Hand</strong><p>Utiliza calibración mano-ojo TSAI para transformar los puntos de agarre en el marco de la cámara al marco base del robot.</p></div>
  <div className="path-card"><span>Paso 6</span><strong>Ejecución con el brazo real</strong><p>Utiliza reBotArm_control_py para IK, control de trayectoria y control de fuerza de la garra.</p></div>
</div>
</section>


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>Despeja los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del espacio de trabajo del robot. Asegúrate de que el brazo esté firmemente fijado antes de ejecutar esta sección.</p>
  </div>
</div>

<section id="hardware" className="section-card">

<div className="step-title-row"><span className="step-pill">Paso 1</span><div><h2>Configuración de hardware</h2><p>Confirma el brazo, la cámara RGB-D, la alimentación y la interfaz SocketCAN antes de instalar el software.</p></div></div>

| Componente | Modelo / Requisito |
|------|------------|
| Brazo robótico | reBot Arm B601-RS |
| Cámara de profundidad | Orbbec Gemini 2, Intel RealSense D435i / D405 |
| Interfaz de comunicación | PCAN-USB / SocketCAN, bitrate CAN 1 Mbps |
| Host | Ubuntu 22.04+, Python 3.10, x86_64 |

### Cableado y permisos

```bash
sudo chmod a+rw /dev/bus/usb/*/*   # Depth camera USB permissions
```

Para B601-RS, levanta la interfaz CAN antes de ejecutar scripts de calibración o agarre:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
ip -details link show can0
```

:::danger
B601-RS utiliza una fuente de alimentación de CC de 48 V. Asegúrate de que la fuente de alimentación, la interfaz PCAN-USB / SocketCAN y la configuración del SDK coincidan antes de ejecutar la demo.
:::

</section>

<section id="install" className="section-card">

<div className="step-title-row"><span className="step-pill">Paso 2</span><div><h2>Instalación del entorno</h2><p>Crea el entorno del proyecto e instala la biblioteca de control del robot.</p></div></div>

| Elemento | Requisito |
|------|------|
| OS | Ubuntu 22.04+ |
| Python | 3.10 |
| Entorno recomendado | conda |
| Espacio de trabajo recomendado | `rebot_grasp` |
| Nombre de entorno recomendado | `rebotarm` |

### Paso 1. Clonar el repositorio

Se prefiere el repositorio oficial Seeed-Projects:

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

También puedes usar el repositorio de desarrollo actual:

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
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

Si `pip install -e .` muestra `Multiple top-level packages discovered in a flat-layout`, añade la siguiente configuración de descubrimiento de paquetes a `pyproject.toml` en `reBotArm_control_py`:

```toml
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

Para B601-RS, confirma lo siguiente en `sdk/reBotArm_control_py/config/rebotarm.yaml`:

```yaml
hardware_yaml: rebotarm_rs.yaml
```

</section>

<section id="camera-sdk" className="section-card">

<div className="step-title-row"><span className="step-pill">Step 3</span><div><h2>Instalar el SDK de la cámara de profundidad</h2><p>Inicia la cámara RGB-D y verifica el SDK antes de la calibración.</p></div></div>

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

Para el primer uso, instala las reglas de udev:

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

Si necesitas el kit de herramientas completo de RealSense o las reglas de udev, consulta la documentación oficial del SDK de Intel RealSense e instala `librealsense2`.

</details>

</section>

<section id="graspnet" className="section-card">

<div className="step-title-row"><span className="step-pill">Optional</span><div><h2>Configurar GraspNet</h2><p>Usa esta ruta cuando necesites candidatos de agarre 6D más allá del flujo YOLO / OBB.</p></div></div>

[LINE_78>Omite esta sección si solo quieres ejecutar primero el flujo de agarre YOLO + OBB. Configura GraspNet cuando necesites candidatos de pose de agarre 6D más ricos.

Antes de compilar los operadores locales, asegúrate de que `nvcc` esté disponible y coincida con la versión de CUDA usada por PyTorch:

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

Si `nvcc` falta o no coincide con `torch.version.cuda`, instala un compilador CUDA que coincida con tu versión actual de CUDA de PyTorch. Por ejemplo, cuando PyTorch indica `13.0`:

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

Descarga el peso preentrenado oficial de GraspNet `checkpoint-rs.tar` y colócalo en:

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


<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Comprobación de seguridad antes de ejecutar</strong>
    <p>Retira los objetos de valor y mantén a todo el personal alejado dentro de un <strong>radio de 1 metro</strong> del espacio de trabajo del robot. Asegúrate de que el brazo esté firmemente fijado antes de ejecutar esta sección.</p>
  </div>
</div>

<section id="run" className="section-card">

<div className="step-title-row"><span className="step-pill">Step 4</span><div><h2>Ejecutar y depurar</h2><p>Comienza con scripts de simulación (dry-run) y solo percepción, luego habilita la ejecución con el brazo real.</p></div></div>

### 0. Confirmar la versión del brazo y la configuración del SDK

En `sdk/reBotArm_control_py/config/rebotarm.yaml`, selecciona la configuración de hardware correspondiente:

```yaml
hardware_yaml: rebotarm_dm.yaml
```

O:

```yaml
hardware_yaml: rebotarm_rs.yaml
```

### 1. Calibración mano-ojo (requerida antes del agarre)

```bash
python scripts/collect_handeye_eih.py
```

En modo automático, el brazo recorre poses preestablecidas y toma muestras automáticamente cuando la detección de ArUco es estable. Se requieren al menos 5 muestras, y se recomiendan 15 o más para una mejor estabilidad.

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
2. Habilita el brazo y el efector final (gripper), luego muévelo a la pose de preparado.
3. Ejecuta la vista previa en tiempo real de la cámara con detección de objetos YOLO y segmentación de instancias.
4. Estima la orientación del gripper usando el eje corto del OBB y estima la altura de agarre usando un cuantil de profundidad.
5. Pulsa `G` para congelar el fotograma y calcular la pose objetivo del brazo mediante la transformación mano-ojo.
6. Muévete al punto de pre-agarre, desciende, cierra el gripper, eleva y vuelve a la pose de preparado.

```bash
python scripts/main.py
```

Para depuración, comienza con:

```bash
python scripts/main.py --dry-run
```

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Ejecuta la simulación (dry-run) antes de la ejecución real</strong>
    <p>Usa la simulación (dry-run) para verificar la detección de la cámara, la calibración mano-ojo, la pose objetivo y la alcanzabilidad de la cinemática inversa (IK) antes de permitir que el robot se mueva.</p>
  </div>
</div>

### 3. Programa de agarre y colocación: `scripts/set.py`

Este script demuestra cómo agarrar un plátano y colocarlo en una caja.

```bash
python scripts/set.py
```

### 4. Prueba de agarre simplificada: `scripts/ordinary_grasp_pipeline.py`

Este script no se conecta al brazo. Solo verifica la estimación de la pose de agarre OBB y la visualización.

```bash
python scripts/ordinary_grasp_pipeline.py
```

### 5. Estimación de cámara con GraspNet: `scripts/graspnet_camera_demo.py`

Este script no se conecta al brazo. Ejecuta la estimación de pose de agarre 6D de GraspNet solo con la cámara RGB-D.

```bash
python scripts/graspnet_camera_demo.py
```

### 6. Agarre con brazo robótico usando GraspNet: `scripts/grasp.py`

```bash
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

</section>

<section id="config" className="section-card">

<div className="step-title-row"><span className="step-pill">Config</span><div><h2><code>default.yaml</code> Referencia de parámetros</h2><p>Revisa los parámetros de cámara, calibración, detección, agarre, robot y gripper antes de ejecutar la demostración.</p></div></div>

<details open className="content-details">
<summary>Cámara y calibración</summary>

| Parámetro | Tipo / Opciones | Significado |
| :--- | :--- | :--- |
| `camera.type` | `realsense_d435i` / `realsense_d405` / `orbbec_gemini2` | Tipo de cámara conectada al sistema. |
| `camera.serial` | `string` / `null` | Número de serie del dispositivo; establece `null` para usar el primer dispositivo disponible. |
| `calibration.aruco.marker_length_m` | `float` | Longitud del lado del marcador ArUco en metros. |
| `calibration.hand_eye_compensation_m` | `array` | Compensación de traslación XYZ en el marco base del robot, en metros. |

</details>

<details className="content-details">
<summary>Detección y flujo de agarre</summary>

| Parámetro | Tipo | Significado |
| :--- | :--- | :--- |
| `detection.conf_threshold` | `float` | Umbral de confianza de detección de YOLO. |
| `detection.iou_threshold` | `float` | Umbral de IoU para NMS de YOLO. |
| `grasp_pipeline.infer_every_live` | `int` | Ejecutar detección cada N fotogramas durante la vista previa en vivo. |
| `grasp_pipeline.grasp.depth_quantile` | `float` | Cuantil de profundidad usado por el flujo de agarre OBB. |
| `grasp_pipeline.grasp.pregrasp_offset_m` | `float` | Distancia de retroceso desde la pose final de agarre hasta la pose de pre-agarre. |
| `grasp_pipeline.grasp.insertion_depth_m` | `float` | Profundidad de inserción adicional usada por la ejecución de agarre de GraspNet. |
| `grasp_pipeline.grasp.min_base_z_m` | `float` | Altura mínima de agarre permitida en el marco base del robot. |

</details>

<details className="content-details">
<summary>Robot y gripper</summary>

| Parámetro | Tipo / Opciones | Significado |
| :--- | :--- | :--- |
| `robot.repo_root` | `string` / `null` | Ruta a `reBotArm_control_py`; cuando es `null`, se usa `sdk/reBotArm_control_py`. |
| `robot.ready_pose` | `array` | Pose de preparado usada al inicio y después de cada tarea de agarre. |
| `robot.gripper.dm` / `robot.gripper.rs` | object | Parámetros del gripper DM / RS seleccionados automáticamente según la configuración del SDK. |

`angle_open`, `close_torque` y `default_force` deben ser números positivos. `counterclockwise` define la dirección de cierre y `tau_max` es el límite de par.

</details>

### Selección de modelo

Los modelos YOLO se cargan desde `rebot_grasp/models/`. Si el archivo no existe, Ultralytics normalmente intenta descargarlo automáticamente.

| Modelo | Descripción |
| --- | --- |
| `yoloe-26l-seg.pt` | Vocabulario abierto + segmentación, valor predeterminado actual. |
| `yoloe-26s-seg.pt` | Más ligero y rápido. |
| `yolov8n-seg.pt` | Segmentación de categoría cerrada, modelo pequeño. |
| `yolov8s-seg.pt` | Segmentación de categoría cerrada con mayor precisión. |

</section>

<section id="faq" className="section-card">

<div className="step-title-row"><span className="step-pill">FAQ</span><div><h2>FAQ</h2><p>Problemas comunes durante la instalación, calibración, detección, compilación de GraspNet y ejecución.</p></div></div>

<details className="content-details">
<summary>1. `ModuleNotFoundError: No module named 'motorbridge'`</summary>

Confirma que el entorno del proyecto está activado, luego sincroniza el entorno y vuelve a instalar el SDK del brazo:

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

</details>

<details className="content-details">
<summary>2. Al presionar `G` no se ejecuta el agarre</summary>

Las causas comunes incluyen: falta `hand_eye.npz`, el modo de calibración mano-ojo no es `eye_in_hand`, o la pose objetivo no es alcanzable por IK. Comienza con la validación de prueba en seco:

```bash
python scripts/main.py --dry-run
```

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Ejecuta una prueba en seco antes de la ejecución real</strong>
    <p>Usa la prueba en seco para verificar la detección de la cámara, la calibración mano-ojo, la pose objetivo y la alcanzabilidad IK antes de permitir que el robot se mueva.</p>
  </div>
</div>

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

Los operadores de muestreo en `pointnet2` solo admiten tensores CUDA. Confirma que CUDA está disponible y vuelve a compilar las extensiones locales si es necesario:

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

</details>

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



<section className="section-card course-path-section">
  <div className="section-title">
    <span>Seguir aprendiendo</span>
    <h2>Ruta de aprendizaje de reBot B601-DM</h2>
    <p>Estos tutoriales siguen el mismo orden que la ruta de aprendizaje de la página de robótica: <strong>Primeros pasos → LeRobot → Pinocchio → Agarre visual → ROS2</strong>.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/es/rebot_b601_rs_getting_started/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>Primeros pasos</strong><span>Completa el desempaquetado, cableado, comprobaciones de energía, configuración de controladores, calibración y primeras pruebas de movimiento.</span></span>
      <span className="course-tag">Comienza aquí</span>
    </a>
    <a className="course-path-item" href="/es/rebot_arm_b601_rs_lerobot/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>Teleoperación y recopilación de datos con LeRobot</strong><span>Teleopera el brazo, conecta cámaras, registra conjuntos de datos, entrena políticas y evalúa el comportamiento del brazo real.</span></span>
      <span className="course-tag">Recopilación de datos</span>
    </a>
    <a className="course-path-item active" href="/es/rebot_arm_b601_rs_pinocchio_meshcat/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>Visualización de cinemática con Pinocchio</strong><span>Comprende modelos de robots, articulaciones, marcos de coordenadas, cinemática directa/inversa, trayectorias y compensación de gravedad.</span></span>
      <span className="course-tag">Artículo actual</span>
    </a>
    <a className="course-path-item active" href="/es/rebot_arm_b601_rs_grasping_demo/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Demostración de agarre visual</strong><span>Combina percepción RGB-D, calibración mano-ojo, YOLO / GraspNet y generación de poses de agarre para el agarre real de objetos.</span></span>
      <span className="course-tag">Artículo actual</span>
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
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
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
.content-details summary::after, .video-details summary::after { content: "展开"; float: right; color: var(--rb-primary); font-size: 0.78rem; }
.content-details[open] summary::after, .video-details[open] summary::after { content: "收起"; }
.content-details > :not(summary), .video-details > :not(summary) { margin-left: 1rem; margin-right: 1rem; }
.content-details > :last-child, .video-details > :last-child { margin-bottom: 1rem; }
.video-container { position: relative; width: 100%; padding-bottom: 56.25%; margin: 1rem 0; border-radius: 16px; overflow: hidden; border: 1px solid var(--rb-border); background: #000; }
.video-container iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.two-col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.danger-list { padding: 1rem; margin: 1rem 0; border-radius: 16px; border: 1px solid #fecaca; background: #fef2f2; color: #7f1d1d; }
.danger-list strong { display: block; margin-bottom: 0.5rem; }
.danger-list ul { margin-bottom: 0; }
.faq-images { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1rem 0; }
.faq-images img { max-width: 100%; border-radius: 14px; border: 1px solid var(--rb-border); }
.rebot-page table img { max-width: 220px; height: auto; border-radius: 10px; }
.rebot-page table { display: table; width: 100%; }
.rebot-page table { overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-accent-soft: rgba(45,212,191,0.14); --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .quick-note { color: #fed7aa; background: rgba(251,146,60,0.12); border-color: rgba(251,146,60,0.35); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .danger-list { background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.35); color: #fecaca; }
html[data-theme='dark'] .agent-inline-card { background: linear-gradient(135deg, rgba(96,165,250,0.12), rgba(45,212,191,0.10)); border-color: rgba(96,165,250,0.28); }
html[data-theme='dark'] .path-card em { color: #bbf7d0; background: rgba(34,197,94,0.18); }

.video-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 132px;
  margin: 1rem 0;
  padding: 1.1rem;
  border-radius: 16px;
  border: 1px dashed rgba(37,99,235,0.35);
  background: var(--rb-primary-soft);
  color: var(--rb-primary);
  font-weight: 850;
  text-align: center;
}
.rebot-page .section-card > h2, .rebot-page .section-card > h3 {
  color: var(--rb-text);
}
.rebot-page .section-card p, .rebot-page .section-card li {
  line-height: 1.7;
}
.rebot-page .feature-grid div p, .rebot-page .path-grid div p {
  margin: 0;
  color: var(--rb-muted);
  line-height: 1.6;
}
.rebot-page pre {
  border-radius: 14px;
}
html[data-theme='dark'] .video-placeholder {
  border-color: rgba(96,165,250,0.35);
}

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



/* Tarjetas de pasos pulidas y refinamientos de la ruta del curso */
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
