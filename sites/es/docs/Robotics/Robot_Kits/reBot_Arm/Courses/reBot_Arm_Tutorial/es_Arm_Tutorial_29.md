---
description: "Capítulo 29 del Curso de Introducción a la IA Física de Seeed: práctica de agarre visual autónomo con el reBot Arm: instalación del SDK de la cámara RGB-D y del repositorio de agarre, ejecución de los programas de agarre y agarre‑y‑colocación, compensación de posición y una pista opcional de agarre con nubes de puntos usando GraspNet."
title: Capítulo 29 - Agarre Visual Autónomo con reBot Arm
keywords:
  - reBot
  - Brazo robótico
  - Agarre visual
  - Cámara RGB-D
  - Calibración mano-ojo
  - GraspNet
  - Curso
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_29
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-08
  author: Seeed Studio Robotics Team
createdAt: '2026-10-08'
updatedAt: '2026-10-08'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_29/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

#

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 6 · Capítulo 29 · Práctica</span>
    <h2>29. Agarre visual autónomo con reBot Arm</h2>
    <p>
      Capítulo 29 del Curso de Introducción a la IA Física de Seeed: práctica de agarre visual autónomo con el reBot Arm: instalación del SDK de la cámara RGB-D y del repositorio de agarre, ejecución de los programas de agarre y agarre‑y‑colocación, compensación de posición y una pista opcional de agarre con nubes de puntos usando GraspNet.
    </p>
    <div className="hero-actions">
      <a href="#overview">Resumen del capítulo</a>
      <a href="#setup">Configuración del entorno</a>
      <a href="#grasping">Agarre visual</a>
      <a href="#graspnet">GraspNet</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 29.1 Resumen del capítulo

Este capítulo utiliza la demo de agarre visual del reBot Arm como caso de estudio para construir un sistema completo de agarre visual robótico.

Resultado final: el brazo observa el área de trabajo mediante una cámara RGB-D, reconoce el objeto objetivo con un modelo de detección, calcula la posición espacial del objetivo a partir de la profundidad y controla el brazo para agarrarlo y colocarlo automáticamente.

Esta práctica cubre:

- Despliegue de la cámara RGB-D;
- Ejecución del modelo de detección;
- Localización visual;
- Calibración mano-ojo;
- Cálculo de la pose de agarre;
- Control de agarre del brazo.


## 29.2 Configuración de hardware

| Componente | Modelo / Requisitos |
| ---- | ---- |
| Brazo robótico | reBot Arm B601 (2 configuraciones: DM / RS) |
| Cámara de profundidad | Orbbec Gemini 2, Intel RealSense D435i / D405 |
| Interfaz de comunicación | Puente serie USB2CAN (para el brazo robótico); USB 3.0 (para la cámara) |
| PC host | Ubuntu 22.04+, Python 3.10+, x86_64 |


### Cableado

- Conecta la cámara de profundidad al host mediante USB 3.0.
- Conecta el adaptador USB2CAN al bus CAN del brazo.
- Confirma que la alimentación de 24 V, la cámara y el brazo estén bien conectados.
- Configura los permisos:

    ```text
    sudo chmod a+rw /dev/bus/usb/*/*   # depth camera USB permission
    sudo chmod 666 /dev/ttyUSB0        # USB2CAN (adjust port as needed)
    ```

<a id="setup"></a>

## 29.3 Configuración del entorno

### Paso 1: Clonar el repositorio de agarre visual

- Se recomienda usar el repositorio oficial Seeed-Projects; solo contiene la parte de agarre visual y el SDK de control del brazo debe instalarse por separado.

    ```bash
    git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
    cd rebot_grasp
    ```

### Paso 2: Crear y configurar el entorno conda

```bash
conda env create -f environment.yml
conda activate rebotarm
```

- Consejo: para usar un nombre de entorno diferente, sustituye `rebotarm` en los comandos por el nombre que elijas.

### Paso 3. Instalar la biblioteca de control del brazo

```text
git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

- Si `pip install -e .` muestra `Multiple top-level packages discovered in a flat-layout`, añade una detección explícita de paquetes en `reBotArm_control_py/pyproject.toml` y vuelve a ejecutar `pip install -e .`:

    ```toml
    [build-system]
    requires = ["setuptools>=61.0", "wheel"]
    build-backend = "setuptools.build_meta"

    [tool.setuptools.packages.find]
    include = ["reBotArm_control_py*"]
    ```

- El programa de agarre visual lee esta configuración del SDK y selecciona automáticamente el modo de control del brazo y los parámetros del efector final correspondientes.

### Paso 4. Configurar el modelo de brazo

- En `/rebot_grasp/sdk/reBotArm_control_py/config/`, localiza el `rebotarm.yaml` del brazo. Establece `hardware_yaml:` para que coincida con el modelo de brazo; el programa cargará entonces los parámetros de hardware de los motores correspondientes.

    ```text
    # reBotArm global config
    # Hardware config (motor type, comm params, PID, etc.)

    hardware_yaml: "rebotarm_rs.yaml"

    # rebotarm_rs.yaml is B601 RS
    # rebotarm_dm.yaml is B601 DM
    ```

### Paso 5. Instalar el SDK de la cámara de profundidad

- Este proyecto es compatible con cámaras RGB-D como Orbbec Gemini 2 y RealSense D435i / D405. Instala el SDK correspondiente a tu cámara; omite este paso si el controlador de la cámara ya se importa correctamente en el entorno actual.
- **Orbbec Gemini 2**
    - Orbbec Gemini 2 requiere **pyorbbecsdk** (la versión en Python del Orbbec SDK v2). Se recomienda instalar el paquete de Python precompilado:
        - **Opción 1: instalar mediante pip (recomendado)**

            ```bash
            pip install pyorbbecsdk2
            ```

        - **Opción 2: compilar desde GitHub**

            ```bash
            # install build deps
            sudo apt-get install -y cmake build-essential libusb-1.0-0-dev

            cd sdk
            git clone https://github.com/orbbec/pyorbbecsdk.git
            cd pyorbbecsdk
            pip install -e .
            ```

        - **Para usuarios en China continental, se puede usar**

            ```bash
            git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
            ```

        - Al instalar desde el código fuente, primero usa CMake para compilar la extensión nativa y asegúrate de que `install/lib` contenga `pyorbbecsdk*.so` y la biblioteca compartida de Orbbec; luego ejecuta `pip install -e .`.
        - Nota: si todos los intentos anteriores fallan, consulta la documentación oficial de Orbbec.
        - **Verificar la instalación**

            ```bash
            python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
            ```

        - **OrbbecViewer (opcional, para verificar la cámara)**
            - Descarga el paquete precompilado y ejecuta `OrbbecViewer` para confirmar la conexión de la cámara y el flujo de profundidad antes de ejecutar la demo.
            - GitHub: [https://github.com/orbbec/OrbbecSDK_v2/releases](https://github.com/orbbec/OrbbecSDK_v2/releases)
            - Gitee: [https://gitee.com/orbbecdeveloper/OrbbecSDK_v2/releases](https://gitee.com/orbbecdeveloper/OrbbecSDK_v2/releases)
- **RealSense D435i / D405**
    - Las cámaras RealSense requieren `pyrealsense2`, que normalmente se instala directamente mediante pip:

        ```bash
        pip install pyrealsense2
        python -c "import pyrealsense2; print('pyrealsense2 OK')"
        ```


## 29.4 Instalación de la cámara RGB-D

<div className="image-frame">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-29/ch29-01.png" alt="Hand-eye calibration AX = XB" />
</div>

<div className="image-frame">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-29/ch29-02.png" alt="Hand-eye calibration AX = XB" />
</div>


<a id="grasping"></a>

## 29.5 Agarre visual

### Programa principal de agarre

`scripts/main.py` — el programa principal de agarre, una canalización completa de agarre visual:

- Inicializar la cámara RGB-D y confirmar que el flujo de imagen está disponible
- Habilitar el brazo y el efector final, y moverse a la posición de altura previa
- Vista previa en tiempo real de la cámara + detección YOLO y segmentación por instancias
- Estimar la orientación del efector final a partir del eje corto del OBB; estimar la altura de agarre a partir del cuantil de profundidad
- Pulsar `G` para congelar el fotograma; calcular la pose objetivo del brazo mediante la transformación mano-ojo
- El brazo se mueve al punto de preagarre -> desciende -> cierra el efector final -> eleva -> vuelve a la posición previa

    ```text
    python scripts/main.py
    ```

### Programa de agarre y colocación

`scripts/set.py` — programa de agarre y colocación: agarra un plátano y lo coloca en una caja.

- Inicializar la cámara y el brazo; moverse a la pre‑posición
- Vista previa en tiempo real de la cámara + detección YOLO y segmentación por instancias
- Pulsar `G` para congelar el fotograma; calcular la pose objetivo del brazo mediante la transformación mano-ojo
- El brazo agarra el plátano y lo eleva
- El brazo coloca el plátano en la caja y vuelve a la pose inicial
- Pulsar `Q` para salir; el brazo vuelve a cero.

    ```text
    python scripts/set.py
    ```

### Compensación de posición

Si después de la calibración la precisión de agarre del brazo no es suficiente, abre `config/default.yaml` y ajusta los valores de `X (adelante/atrás), Y (izquierda/derecha), Z (arriba/abajo)` en `calibration.hand_eye_compensation_m` para compensar la posición.

```yaml
------------------------------------
calibration:
  aruco:
    marker_length_m: 0.1
    dict_id: 0
    target_marker_id: 0
  hand_eye_method: TSAI
  hand_eye_compensation_m:
    x: 0.00
    y: 0.00
    z: -0.02
------------------------------------
```

<a id="graspnet"></a>

## 29.6 Agarre 3D con nubes de puntos [Optativo]

### ¿Qué es GraspNet?

GraspNet responde principalmente: dado la forma 3D del objeto, ¿dónde debería agarrar el robot y con qué pose?

GraspNet es un método de agarre robótico basado en nubes de puntos; más precisamente, un marco de generación y evaluación de poses de agarre en 6 GDL para nubes de puntos 3D. En pocas palabras, la nube de puntos es “los datos del mundo 3D que ve el robot”, y GraspNet es “cómo el robot encuentra la mejor pose de agarre a partir de esos datos 3D”.

Entrada: datos RGB-D -> nube de puntos -> GraspNet -> pose de agarre

Salida: una pose de agarre en 6 GDL $G=(x,y,z,R)$, que incluye:

- Posición, a dónde debe ir el efector final del brazo:

    ```text
    x,y,z
    ```

- Pose, en qué dirección debe mirar el efector final:

    ```text
    roll,pitch,yaw
    ```

- Finalmente, indicarle al brazo: agarra desde esta dirección

### Configurar GraspNet

Para estimar con mayor precisión las poses de agarre de los objetos, este proyecto adapta [graspnet-baseline](https://github.com/graspnet/graspnet-baseline) para mejorar el rendimiento de agarre del brazo.

Las extensiones `pointnet2` / `knn` de GraspNet necesitan un compilador CUDA. Antes de empezar, confirma que se encuentra `nvcc` y que su versión de CUDA coincide con la usada para compilar PyTorch:

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

Si falta `nvcc` o su versión de CUDA difiere de `torch.version.cuda`, instala el compilador CUDA que coincida con la versión de CUDA de PyTorch. Por ejemplo, cuando PyTorch muestra `13.0`:

```bash
conda install -c nvidia cuda-nvcc=13.0
```

Las dos deben coincidir; de lo contrario, al compilar `pointnet2` / `knn` aparecerá `The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)`.

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline

# after installing PyTorch for your CUDA version, install GraspNet runtime deps
pip install open3d tensorboard Pillow tqdm

# configure CUDA build paths before compiling local ops.
export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="12.0"
export CPATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/include:$CPLUS_INCLUDE_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/lib/python3.10/site-packages/nvidia/cu13/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

# compile CUDA ops
cd pointnet2
pip install . --no-build-isolation
cd ../knn
pip install . --no-build-isolation
cd ..

# install GraspNet API
git clone https://github.com/graspnet/graspnetAPI.git
cd graspnetAPI
sed -i "s/'sklearn'/'scikit-learn'/" setup.py
pip install .
cd ../../..
```

Tres problemas a tener en cuenta antes de empezar:

| Síntoma | Qué hacer |
| :--- | :--- |
| `python setup.py install` genera errores de versión de CUDA/PyTorch | Usa `pip install . --no-build-isolation` para que la extensión reutilice el PyTorch y CUDA que ya están en el entorno conda |
| La compilación informa `fatal error: cusparse.h: No such file or directory` | Ejecuta `find $CONDA_PREFIX -name cusparse.h` y añade ese directorio a `CPATH` / `CPLUS_INCLUDE_PATH`; con el `cuda-toolkit` de conda suele ser `$CONDA_PREFIX/targets/x86_64-linux/include`, no la ruta de pip `nvidia/cu13/include` anterior |
| Una advertencia sobre el nombre del paquete `sklearn` | El `sed` anterior lo renombra a `scikit-learn`. Mantén el pin `numpy==1.23.4` a menos que cambie la pila de dependencias, porque `transforms3d==0.3.1` sigue usando alias de NumPy como `np.float` |

#### Configurar el modelo preentrenado

- Descarga los pesos oficiales preentrenados de GraspNet desde el repositorio graspnet-baseline ([Google](https://drive.google.com/file/d/1hd0G8LN6tRpi4742XOTEisbTXNZ-1jmk/view), [Baidu](https://pan.baidu.com/s/1Eme60l39tTZrilF0I86R5A)), y coloca `checkpoint-rs.tar` en:

    ```bash
    sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
    ```

- Luego confirma en `config/default.yaml`:

    ```yaml
    graspnet:
      checkpoint: "checkpoint-rs.tar"
    ```

- `checkpoint` admite tres formas: un nombre de archivo simple se busca bajo `sdk/graspnet-baseline/checkpoints/`; una ruta relativa se resuelve desde la raíz del proyecto; una ruta absoluta se usa directamente.

### Ejecución y depuración

1. Demo de estimación con cámara de GraspNet — `scripts/graspnet_camera_demo.py`
- Sin conectar el brazo, ejecuta la estimación de agarre 6D de GraspNet usando solo la cámara RGB-D. El script mantiene una vista previa en vivo de la cámara, usa la caja de YOLO para seleccionar la región objetivo y filtra los agarres factibles dentro de ese bbox a partir de los candidatos de toda la escena de GraspNet. Pulsa `G` o `Space` para inferir el fotograma actual, `R` para reanudar la vista previa en vivo, `Q` o `Esc` para salir. Tras la inferencia, visualiza la nube de puntos y los candidatos de agarre mediante Open3D.

    ```bash
    python scripts/graspnet_camera_demo.py
    ```

2. Programa de agarre con brazo de GraspNet — `scripts/grasp.py`
- Basado en las estimaciones de `graspnet_camera_demo.py`, controla la ejecución del brazo: YOLO selecciona el objetivo, GraspNet produce una pose de agarre 6D, la calibración mano-ojo la transforma al marco base del brazo, luego se comprueba la alcanzabilidad por IK y se ejecutan pre-agarre/agarre/retirada. Durante la depuración, es preferible `--dry-run` para imprimir solo las poses objetivo y el filtrado de candidatos.

    ```bash
    python scripts/grasp.py --dry-run
    python scripts/grasp.py --target-class "light blue coffee cup"
    ```

---

</div>
