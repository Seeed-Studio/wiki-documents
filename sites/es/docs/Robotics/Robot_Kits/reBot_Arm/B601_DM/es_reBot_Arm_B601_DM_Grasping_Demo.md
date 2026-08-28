---
description: Este tutorial muestra cómo construir una demo completa de agarre visual para el reBot Arm B601 utilizando la canalización de agarre YOLO/OBB.
title: Demo de agarre visual con reBot Arm B601
keywords:
  - reBot Arm
  - B601
  - Grasping
  - Gemini 2
  - YOLO
  - Hand-Eye Calibration
  - Robot
slug: /rebot_arm_b601_dm_grasping_demo
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-06-30
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-04-22'
updatedAt: '2026-08-11'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_grasping_demo/
---

import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

# Demo de agarre visual con reBot Arm B601

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" alt="reBot Arm B601-DM" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Camera-RGB--D-green.svg" alt="Camera" />
    <img src="https://img.shields.io/badge/Detection-YOLO-yellow.svg" alt="YOLO" />
</p>

<p align="center">
  <strong>Percepción de profundidad · Detección de objetos · Calibración mano-ojo · Agarre autónomo · Totalmente de código abierto</strong>
</p>

YOLO es una familia ampliamente utilizada de modelos de detección de objetos en tiempo real que puede localizar y clasificar objetivos en una sola pasada hacia adelante. Este tutorial utiliza YOLO, una cámara de profundidad RGB-D y el reBot Arm B601-DM para construir una demo funcional de agarre visual de escritorio, que cubre la configuración del entorno, la integración de la cámara, la calibración mano-ojo y la validación del agarre.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/demo.gif" alt="reBot Arm B601-DM visual grasping demo" />
</p>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/6dqKZNh_D7k?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
---

## Introducción al proyecto

**Demo de agarre visual con reBot Arm B601** es un proyecto de demostración de algoritmos de agarre visual basado en la biblioteca de control del brazo robótico [reBot Arm B601](https://github.com/Seeed-Projects/reBotArm_control_py) y una cámara de profundidad RGB-D. El sistema admite configuraciones DM y RS para el brazo B601. Utiliza el modelo YOLO para la detección de objetos de escritorio en tiempo real, estima las poses de agarre mediante rectángulos de área mínima OBB, realiza calibración mano-ojo para transformar los puntos de agarre del marco de la cámara al marco base del robot y acciona el brazo robótico para completar el agarre autónomo.

### Funciones principales

- 📷 **Percepción de profundidad** — Admite cámaras de profundidad RGB-D como Orbbec Gemini 2 e Intel RealSense D435i / D405
- 🔍 **Detección de objetos** — Reconocimiento basado en YOLO con soporte de clases personalizadas de vocabulario abierto
- 📐 **Estimación de pose** — Eje corto del rectángulo de área mínima OBB para la orientación del efector final, cuantil de profundidad para la estimación de la altura de agarre
- 🔄 **Transformación de coordenadas** — Calibración mano-ojo TSAI (Eye-in-Hand), transformando los puntos de agarre del marco de la cámara al marco base del robot
- 🦾 **Ejecución de movimiento** — Controlador de trayectoria + cinemática inversa de reBotArm_control_py con máquina de estados integrada para el control de fuerza del efector final

---

## Configuración de hardware

| Componente | Modelo / Requisitos |
|------|------------|
| Brazo robótico | reBot Arm B601 (configuraciones DM / RS) |
| Cámara de profundidad | Orbbec Gemini 2, Intel RealSense D435i / D405 |
| Interfaz de comunicación | Puente serie USB2CAN (brazo); USB 3.0 (cámara) |
| Host | Ubuntu 22.04+, Python 3.10, x86_64 |

**Instrucciones de cableado**

1. Conecta la cámara de profundidad al host mediante USB 3.0.
2. Conecta el adaptador USB2CAN al bus CAN del brazo.
3. Asegúrate de que la fuente de alimentación de 24 V, la cámara y el brazo robótico estén conectados de forma segura.
4. Establece los permisos:

```bash
sudo chmod a+rw /dev/bus/usb/*/*   # Depth camera USB permissions
sudo chmod 666 /dev/ttyUSB0        # USB2CAN (adjust port number as needed)
```

---

## Instalación del entorno

### Paso 1. Clonar el repositorio

Da preferencia al repositorio oficial de Seeed-Projects:

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

### Paso 2. Crear y configurar el entorno conda

```bash
conda env create -f environment.yml
conda activate rebotarm
```
:::tip
Si quieres usar un nombre de entorno diferente, reemplaza `rebotarm` en el comando por tu nombre personalizado.

:::


### Paso 3. Instalar la biblioteca de control del brazo robótico

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

Si `pip install -e .` muestra `Multiple top-level packages discovered in a flat-layout`, añade una configuración explícita de descubrimiento de paquetes al `pyproject.toml` de `reBotArm_control_py` y vuelve a ejecutar `pip install -e .`:

```toml
[build-system]
requires = ["setuptools>=61.0", "wheel"]
build-backend = "setuptools.build_meta"

[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

El programa de agarre visual lee la configuración del SDK y selecciona automáticamente el modo de control del brazo y los parámetros del efector final correspondientes.

### Paso 4. Instalar el SDK de la cámara de profundidad

Este proyecto admite cámaras de profundidad RGB-D como Orbbec Gemini 2 y RealSense D435i / D405. Instala el SDK correspondiente a tu cámara real; si el controlador de la cámara ya se puede importar con normalidad en el entorno actual, puedes omitir este paso.

**Orbbec Gemini 2**

Orbbec Gemini 2 depende de **pyorbbecsdk** (versión en Python de Orbbec SDK v2). Se recomienda instalar directamente el paquete de Python precompilado:

**Opción 1: Instalar vía pip (recomendado)**

```bash
pip install pyorbbecsdk2
```

**Opción 2: Obtener desde GitHub**

```bash
# Install build dependencies
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev

cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

Para usuarios de China continental, puedes usar:
```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

Al instalar desde el código fuente, primero compila la extensión nativa con CMake para asegurarte de que `install/lib` contenga `pyorbbecsdk*.so` y las bibliotecas compartidas de Orbbec, luego ejecuta `pip install -e .`.

Nota: Si todos los métodos de instalación anteriores fallan, consulta la documentación oficial de Orbbec que se indica a continuación para la instalación.

:::tip
Para el primer uso, se recomienda instalar las reglas de udev:

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

**Verificar la instalación**

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```
:::

**OrbbecViewer (opcional, para verificación de la cámara)**

Después de descargar el paquete precompilado y ejecutar `OrbbecViewer`, puedes verificar que la conexión de la cámara y el flujo de profundidad funcionen correctamente antes de ejecutar la demo.

- GitHub: https://github.com/orbbec/OrbbecSDK_v2/releases
- Gitee: https://gitee.com/orbbecdeveloper/OrbbecSDK_v2/releases

**RealSense D435i / D405**

Las cámaras RealSense dependen de `pyrealsense2`. Normalmente puedes instalarlo directamente mediante pip:

```bash
pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"
```

Si el sistema necesita el conjunto completo de herramientas de RealSense o reglas de udev, consulta la documentación oficial del SDK de RealSense para instalar `librealsense2`.


**Resumen de recursos del SDK**

| Recurso | Enlace |
|------|------|
| Página de producto de Gemini 2 | https://www.orbbec.com.cn/index/Product/info.html?cate=38&id=51 |
| Recursos de desarrollo | https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1 |
| Orbbec SDK v2 | https://github.com/orbbec/OrbbecSDK_v2 |
| Documentación del SDK v2 API | https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/ |
| pyorbbecsdk | https://github.com/orbbec/pyorbbecsdk |
| Documentación de pyorbbecsdk | https://orbbec.github.io/pyorbbecsdk/index.html |
| Wrapper ROS2 | https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main |
| Intel RealSense SDK | https://github.com/realsenseai/librealsense |

### Paso 5. Configurar GraspNet (opcional)

Para lograr una estimación de pose de agarre más precisa para los objetos, este proyecto adapta [graspnet-baseline](https://github.com/graspnet/graspnet-baseline) para mejorar el rendimiento de agarre del brazo robótico.

Las extensiones `pointnet2` / `knn` de GraspNet requieren un compilador CUDA. Antes de comenzar, confirma que `nvcc` esté disponible en el entorno actual y comprueba que la versión de CUDA reportada por `nvcc` coincida con la versión de CUDA utilizada para compilar PyTorch:

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

Si falta `nvcc`, o si la versión de CUDA reportada por `nvcc` no coincide con `torch.version.cuda`, instala un compilador CUDA que coincida con la versión CUDA actual de PyTorch. Por ejemplo, cuando PyTorch muestra `13.0`:

```bash
conda install -c nvidia cuda-nvcc=13.0
```

También puedes instalar una compilación de PyTorch que coincida con tu versión actual de `nvcc`. Las dos versiones deben coincidir; de lo contrario, la compilación de `pointnet2` / `knn` fallará con `The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)`.

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline

# Install PyTorch for your CUDA version first, then install GraspNet runtime dependencies
pip install open3d tensorboard Pillow tqdm

# Configure CUDA build paths before building the local operators.
export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="12.0"
export CPATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPLUS_INCLUDE_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

# Build CUDA operators
cd pointnet2
pip install . --no-build-isolation
cd ../knn
pip install . --no-build-isolation
cd ..

# Install GraspNet API
git clone https://github.com/graspnet/graspnetAPI.git
cd graspnetAPI
sed -i "s/'sklearn'/'scikit-learn'/" setup.py
pip install .
cd ../../..
```

:::tip
Nota: si sigues directamente la documentación del repositorio oficial graspnet-baseline y usas `python setup.py install`, pueden producirse errores relacionados con CUDA / PyTorch. Se recomienda usar `pip install . --no-build-isolation` para que la extensión se compile contra la configuración de PyTorch y CUDA ya instalada en el entorno conda actual.
:::

:::tip
Si la compilación falla con `fatal error: cusparse.h: No such file or directory`, ejecuta `find $CONDA_PREFIX -name cusparse.h` y añade el directorio que contiene `cusparse.h` a `CPATH` / `CPLUS_INCLUDE_PATH`. Si las cabeceras de CUDA provienen de `cuda-toolkit` de conda, la ruta suele ser `$CONDA_PREFIX/targets/x86_64-linux/include`, no la ruta de pip `nvidia/cu13/include` mostrada arriba.
:::

:::tip
Además, las dependencias antiguas de la API de GraspNet pueden seguir usando el nombre de paquete obsoleto `sklearn`. El comando `sed` anterior lo reemplaza por `scikit-learn` para evitar problemas de nombre de paquete durante la instalación. A menos que también actualices el conjunto de dependencias de la API de GraspNet, mantén su restricción `numpy==1.23.4` porque `transforms3d==0.3.1` sigue usando alias de NumPy como `np.float`.
:::

**Configurar modelo preentrenado**

Descarga los pesos preentrenados oficiales de GraspNet desde el repositorio oficial graspnet-baseline [Google](https://drive.google.com/file/d/1hd0G8LN6tRpi4742XOTEisbTXNZ-1jmk/view), [Baidu](https://pan.baidu.com/s/1Eme60l39tTZrilF0I86R5A), y coloca el archivo descargado `checkpoint-rs.tar` en:

```bash
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

Luego verifica en `config/default.yaml`:

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

El campo `checkpoint` admite tres formas: solo un nombre de archivo se resuelve bajo `sdk/graspnet-baseline/checkpoints/`; una ruta relativa se resuelve desde la raíz del proyecto; una ruta absoluta se usa directamente.

---

## Estructura de directorios

```
rebot_grasp/
├── config/
│   ├── default.yaml              # Main configuration file
│   └── calibration/
│       └── <camera_type>/
│           ├── intrinsics.npz    # Camera intrinsics
│           └── hand_eye.npz      # Hand-eye calibration results
├── drivers/
│   ├── camera/
│   │   ├── base.py               # Camera abstract base class
│   │   ├── orbbec_gemini2.py     # Gemini 2 driver
│   │   └── realsense.py          # RealSense driver (alternative)
│   └── robot/
│       └── grasp_driver.py       # Lightweight grasping helper based on arm SDK
├── calibration/
│   ├── aruco_pose.py             # ArUco pose estimation
│   └── hand_eye.py               # Hand-eye calibration solver
├── utils/
│   ├── ordinary_grasp.py         # OBB grasp pose estimation and visualization
│   └── transforms.py             # Coordinate transformation utilities
├── scripts/
│   ├── main.py                   # Main grasping program
│   ├── set.py                    # Grasp and place program
│   ├── ordinary_grasp_pipeline.py
│   ├── object_detection.py
│   └── collect_handeye_eih.py
├── sdk/
│   ├── pyorbbecsdk/              # Orbbec SDK Python wrapper
│   └── reBotArm_control_py/      # reBot Arm SDK
└── environment.yml               # Recommended conda environment file
```


## Ejecución y depuración

### 0. Confirmar versión del brazo y configuración del SDK

Antes de ejecutar scripts que se conectan al brazo robótico, confirma que la versión del brazo, la fuente de alimentación y la configuración del SDK sean coherentes:

- Completa primero la preparación básica del brazo: [B601-DM Inicio rápido](https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/) o [B601-RS Inicio rápido](https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/).
- En `sdk/reBotArm_control_py/config/rebotarm.yaml`, selecciona la configuración de hardware correspondiente:

```yaml
hardware_yaml: rebotarm_dm.yaml
```

O:

```yaml
hardware_yaml: rebotarm_rs.yaml
```

- B601-DM usa alimentación de CC de 24 V, B601-RS usa alimentación de CC de 48 V. Confirma que el adaptador de corriente y el cableado coincidan con la versión del brazo.
- Al usar B601-DM, confirma que la ruta del dispositivo del puente serie en la configuración del SDK coincida con el dispositivo real.
- Al usar B601-RS, inicia la interfaz CAN antes de ejecutar scripts de calibración o agarre:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

### 1. Calibración mano-ojo (requerida antes de agarrar)

```bash
python scripts/collect_handeye_eih.py
```

En el modo automático, el brazo recorre automáticamente 50 poses preestablecidas y toma muestras automáticamente cuando se detecta ArUco de forma estable. Al finalizar con normalidad o interrumpirse a mitad de camino, el script intenta calcular y guardar el resultado de la calibración; se requieren al menos 5 muestras, y se recomiendan 15 o más para obtener resultados más estables.

Si quieres mover manualmente el brazo para la recolección, usa:

```bash
python scripts/collect_handeye_eih.py --manual
```

En el modo manual, el brazo entra en modo de compensación de gravedad. Empuja el efector final hasta un ángulo de visión adecuado y pulsa `Enter` para capturar; pulsa `c` o `q` para finalizar y calcular.

:::tip
Si después de la calibración descubres que la precisión de agarre del brazo robótico no cumple tus requisitos, puedes configurar los parámetros `X` (adelante-atrás), `Y` (izquierda-derecha), `Z` (arriba-abajo) en `config/default.yaml` bajo `calibration.hand_eye_compensation_m` para proporcionar compensación de posición.
:::

### 2. `scripts/main.py` — Programa principal de agarre

Flujo completo de agarre visual:

1. Inicializar la cámara RGB-D, confirmar que el flujo de imagen está disponible
2. Habilitar brazo y pinza, mover a la posición de preparado
3. Vista previa de cámara en tiempo real + detección de objetos YOLO y segmentación de instancias
4. El eje corto del OBB estima la orientación de la pinza, el cuantil de profundidad estima la altura de agarre
5. Pulsa `G` para congelar el fotograma, calcular la pose objetivo del brazo mediante la transformación mano-ojo
6. El brazo se mueve al punto de preagarre → desciende → la pinza se cierra → eleva → vuelve a la posición de preparado

### 3. `scripts/set.py` — Programa de agarre y colocación

Función: agarrar el plátano y colocarlo en la caja

Flujo completado:
1. Inicialización de cámara y brazo, mover a la posición de preparado
2. Vista previa de cámara en tiempo real + detección de objetos YOLO y segmentación de instancias
3. Pulsa `G` para congelar el fotograma, calcular la pose objetivo del brazo mediante la transformación mano-ojo
4. El brazo se mueve para agarrar el plátano y elevarlo
5. El brazo coloca el plátano en la caja y vuelve a la pose inicial
6. Pulsa `Q` para salir del sistema, el brazo vuelve a la posición cero


### 4. `scripts/ordinary_grasp_pipeline.py` — Prueba de agarre simplificada

No depende del brazo robótico; solo verifica la estimación de la pose de agarre OBB y los efectos de visualización, adecuado para depurar el módulo de percepción.

### 5. `scripts/graspnet_camera_demo.py` — Demo de estimación con cámara GraspNet

No se conecta al brazo robótico; solo ejecuta la estimación de pose de agarre 6D de GraspNet usando la cámara RGB-D. El script mantiene una vista previa en vivo de la cámara, usa las cajas de detección de YOLO para seleccionar el área objetivo y luego filtra los candidatos de agarre factibles de los candidatos de escena completa de GraspNet dentro del bbox objetivo. Pulsa `G` o `Space` para ejecutar la inferencia en el fotograma actual, pulsa `R` para reanudar la vista previa en vivo, pulsa `Q` o `Esc` para salir; después de la inferencia, puedes ver la nube de puntos y los candidatos de agarre mediante Open3D.

```bash
python scripts/graspnet_camera_demo.py
```

### 6. `scripts/grasp.py` — Programa de agarre con brazo robótico GraspNet

Conecta los resultados de estimación de GraspNet con el flujo de ejecución del brazo robótico basado en `graspnet_camera_demo.py`: YOLO selecciona el objetivo, GraspNet produce la pose de agarre 6D, la calibración mano-ojo la transforma al marco base del robot, luego se comprueba la alcanzabilidad de la cinemática inversa (IK) y se ejecutan los movimientos de preagarre, agarre y retirada. Para depuración, se recomienda usar primero `--dry-run` para solo imprimir la pose objetivo y los resultados de filtrado de candidatos.

```bash
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

### 7. `scripts/object_detection.py` — Demo básica de detección

Demostración de detección pura con YOLO con visualización en tiempo real de cajas de detección y puntuaciones de confianza, sin lógica de agarre.

---

## Descripción de parámetros de default.yaml

#### 1. Configuración de cámara y calibración (`camera` & `calibration`)

| Parámetro | Tipo / Opciones | Significado y descripción |
| :--- | :--- | :--- |
| `camera.type` | `realsense_d435i`<br/>`realsense_d405`<br/>`orbbec_gemini2` | **Tipo de cámara**: especifica el hardware de cámara conectado al sistema actual. |
| `camera.serial` | `string` / `null` | **Número de serie del dispositivo**: especifica el número de serie (SN) del dispositivo. Establécelo en `null` para usar el primer dispositivo disponible detectado por el sistema. |
| `calibration.aruco.marker_length_m` | `float` | **Tamaño del marcador ArUco**: la longitud lateral física real del marcador de calibración ArUco usado para la calibración mano-ojo, en **metros (m)**. |
| `calibration.hand_eye_compensation_m` | `array` | **Compensación de traslación de calibración mano-ojo**: compensación de traslación manual XYZ (formato `[X, Y, Z]`) ejecutada en el **marco base del robot** después de completar la calibración mano-ojo, en **metros (m)**. Si los tres valores son `0.0`, la matriz de compensación es la matriz identidad. |

---

#### 2. Configuración de detección de objetos (`detection`)

| Parámetro | Tipo | Significado y descripción |
| :--- | :--- | :--- |
| `detection.conf_threshold` | `float` | **Umbral de confianza de detección YOLO**: las cajas de detección con puntuaciones por debajo de este valor se filtrarán. |
| `detection.iou_threshold` | `float` | **Umbral IoU de NMS de YOLO**: el umbral de Intersección sobre Unión (IoU) usado en la Supresión No Máxima (NMS) para filtrar cajas solapadas. |

---

#### 3. Configuración del robot y la pinza (`robot`)

| Parámetro | Tipo / Opciones | Significado y descripción |
| :--- | :--- | :--- |
| `robot.repo_root` | `string` / `null` | **Directorio raíz del repositorio**: ruta al repositorio `reBotArm_control_py`. Cuando es `null`, por defecto usa la ruta relativa interna `sdk/reBotArm_control_py`. |
| `robot.ready_pose` | `array` | **Pose de preparado**: la posición de preparado a la que se mueve el brazo del sistema al iniciar. Después de completar cada tarea de agarre, el brazo también vuelve automáticamente a esta posición. |
| `robot.gripper.dm`<br/>`robot.gripper.rs` | objeto struct | **Parámetros de hardware de la pinza**: el sistema selecciona y aplica automáticamente uno de estos dos grupos de parámetros según la configuración de hardware real actual en el SDK. |

#### Descripción de los parámetros internos del núcleo del gripper

Para los subparámetros dentro de `robot.gripper.dm` o `robot.gripper.rs`:

* **`angle_open`**, **`close_torque`**, **`default_force`**: Corresponden respectivamente al ángulo de apertura, par de cierre y fuerza de control predeterminada; todos deben rellenarse con **números positivos**.
* **`counterclockwise`**: Valor booleano. Indica la dirección de giro del motor utilizada al cerrar (si es en sentido antihorario). El código deduce automáticamente los signos del ángulo de apertura y del par de cierre basándose en esta lógica.
* **`tau_max`**: Límite superior del par.

:::tip
Nota: Para otros parámetros avanzados de comportamiento de control del gripper, consúltalos y defínelos en el archivo `drivers/robot/grasp_driver.py`.
:::

---

#### 4. Configuración del pipeline de agarre y de GraspNet (`grasp_pipeline` & `graspnet`)

| Parámetro | Tipo | Significado y descripción |
| :--- | :--- | :--- |
| `grasp_pipeline.infer_every_live` | `int` | **Intervalo de frames de inferencia**: Durante la previsualización de vídeo en tiempo real, ejecuta la detección de objetos cada N frames para reducir eficazmente la carga de cómputo en tiempo real de la CPU/GPU. |
| `grasp_pipeline.grasp.depth_quantile` | `float` | **Cuantil de profundidad**: El cuantil de cálculo de profundidad utilizado por el pipeline de agarre de eje corto. Un valor mayor normalmente da como resultado un punto de agarre más profundo. |
| `grasp_pipeline.grasp.pregrasp_offset_m` | `float` | **Desplazamiento de la posición de pre-agarre**: La distancia de retroceso a lo largo de la dirección de avance del efector final con respecto a la posición objetivo final de agarre, en **metros (m)**. |
| `grasp_pipeline.grasp.insertion_depth_m` | `float` | **Profundidad de inserción**: La profundidad adicional de empuje hacia adelante o inserción a lo largo de la dirección de avance cuando GraspNet ejecuta el agarre, en **metros (m)**. |
| `grasp_pipeline.grasp.min_base_z_m` | `float` | **Límite mínimo de altura de agarre**: La altura mínima permitida del eje Z de agarre en el **sistema de referencia base del robot**, en **metros (m)** (utilizada como un límite de seguridad de protección contra colisiones de bajo nivel). |
| `graspnet` | struct config | **Parámetros de ejecución de GraspNet**: Todos los subparámetros bajo este ítem de configuración se cargan al ejecutar `scripts/graspnet_camera_demo.py` y `scripts/grasp.py`. |

### Biblioteca de selección de modelos

El modelo YOLO se carga desde el directorio `rebot_grasp/models/`; si el archivo de modelo no existe, Ultralytics normalmente intenta descargarlo automáticamente.

Modelos comunes:

| Modelo | Descripción |
| --- | --- |
| `yoloe-26l-seg.pt` | Vocabulario abierto + segmentación, valor predeterminado actual |
| `yoloe-26s-seg.pt` | Más ligero, más rápido |
| `yolov8n-seg.pt` | Segmentación de categorías cerradas, modelo pequeño |
| `yolov8s-seg.pt` | Segmentación de categorías cerradas, mayor precisión |

Cuando el nombre del modelo contiene `world` / `yoloe` y `yolo.use_world=true`, el programa llama a `model.set_classes(custom_classes)` para inyectar `yolo.custom_classes` como clases de vocabulario abierto. Los modelos `yolov8*-seg.pt` normales ignoran este conjunto de clases de vocabulario abierto.

---

## ❓ Preguntas frecuentes (FAQ)

### 1. `ModuleNotFoundError: No module named 'motorbridge'`

Esto normalmente significa que las dependencias del SDK del brazo robótico no están instaladas en el entorno actual de Python. Confirma que el entorno del proyecto está activado y resincroniza el entorno e instala el SDK del brazo robótico:

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

### 2. Al pulsar `G` no se ejecuta el agarre

Causas comunes:

- `hand_eye.npz` no existe
- El modo de calibración mano-ojo no es `eye_in_hand`
- La pose objetivo actual no es alcanzable por IK

Se recomienda primero usar el modo de simulación (dry-run) para verificar los resultados de percepción y la pose objetivo:

```bash
python scripts/main.py --dry-run
```

### 3. La profundidad del punto de agarre es inestable

Se puede dar prioridad a comprobar y ajustar:

- `grasp_pipeline.grasp.depth_quantile`
- La altura de instalación de la cámara con respecto al espacio de trabajo objetivo
- La reflectividad de la superficie del objetivo

### 4. GraspNet informa que `pointnet2_utils` no se puede importar desde `pointnet2`

Esto suele deberse a que la extensión local de CUDA bajo `sdk/graspnet-baseline/pointnet2` no se compiló e instaló correctamente en el entorno conda actual, o a que Python está resolviendo un paquete `pointnet2` incorrecto. Se recomienda confirmar que el entorno del proyecto está activado y recompilar e instalar tanto `pointnet2` como `knn` en el mismo entorno:

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

Verificar:

```bash
python -c "from pointnet2 import pointnet2_utils; print('Submodule import works')"
```

### 5. Incompatibilidad de arquitectura CUDA al ejecutar GraspNet en la tarjeta gráfica actual

Si ves `no kernel image is available for execution on the device` o PyTorch informa que la capacidad CUDA de la GPU actual no es compatible, esto normalmente significa que la rueda de PyTorch actual no incluye kernels CUDA para la arquitectura de esa tarjeta gráfica. Se recomienda instalar una versión de PyTorch que admita la arquitectura CUDA/tarjeta gráfica actual y luego recompilar las extensiones locales de CUDA de GraspNet.

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.get_device_name(0))"

cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

Si necesitas especificar manualmente la arquitectura de compilación, establece `TORCH_CUDA_ARCH_LIST` antes de recompilar, confirmando el valor específico según la arquitectura de tu tarjeta gráfica actual y la versión de PyTorch/CUDA.

### 6. La inferencia de GraspNet informa `RuntimeError: CPU not supported`

Los operadores de muestreo en `pointnet2` solo admiten tensores CUDA. Confirma que CUDA está disponible, que la red GraspNet y la nube de puntos de entrada están en la GPU, y que `pointnet2` / `knn` se compilaron contra el entorno actual y la versión de PyTorch.

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

Si la salida es `False`, primero debes corregir la instalación de CUDA / PyTorch; si la salida es `True` pero el error persiste, se recomienda recompilar `pointnet2` y `knn`.

---

## 📄 Referencias

- [reBotArm_control_py](https://github.com/Seeed-Projects/reBotArm_control_py) — Biblioteca de control del brazo robótico
- [reBot-DevArm](https://github.com/Seeed-Projects/reBot-DevArm) — Proyecto de código abierto del brazo robótico reBot
- [Página de producto Orbbec Gemini 2](https://www.orbbec.com.cn/index/Product/info.html?cate=38&id=51)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [pyorbbecsdk](https://github.com/orbbec/pyorbbecsdk)
- [RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Ultralytics YOLOv11](https://github.com/ultralytics/ultralytics)

---

## ☎ Contáctanos

- **Soporte técnico**: [Submit an Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)

---

<p align="center">
  <strong>🌟 Si este proyecto te resulta útil, ¡por favor dale una estrella (Star)!</strong>
</p>
