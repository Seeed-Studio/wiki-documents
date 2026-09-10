---
description: Este tutorial cubre dos implementaciones de agarre visual para el reBot Arm B601-RS, incluyendo un pipeline YOLO/OBB y un flujo de agarre basado en ROS2.
title: Demo de agarre visual con reBot Arm B601-RS
keywords:
  - reBot Arm
  - B601-RS
  - Agarre
  - RGB-D
  - YOLO
  - Calibración mano-ojo
  - Robot
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif
slug: /rebot_arm_b601_rs_grasping_demo
last_update:
  date: 2026-09-10
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-15'
updatedAt: '2026-09-10'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_grasping_demo/
---

import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# Demo de agarre visual con reBot Arm B601-RS

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" alt="reBot Arm B601-RS" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="Licencia: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Versión de Python" />
    <img src="https://img.shields.io/badge/Platform-Ubuntu%2022.04+-orange.svg" alt="Plataforma" />
    <img src="https://img.shields.io/badge/Camera-RGB--D-green.svg" alt="Cámara" />
    <img src="https://img.shields.io/badge/Detection-YOLO-yellow.svg" alt="YOLO" />
</p>

<p align="center">
  <strong>Percepción de profundidad · Detección de objetos · Calibración mano-ojo · Agarre autónomo · Completamente de código abierto</strong>
</p>

Esta página cubre dos demos de agarre visual con implementaciones diferentes:

- **Método 1 de agarre visual**: Un pipeline de YOLO + RGB-D + SDK de Python que cubre la configuración del entorno, la integración de la cámara, la calibración mano-ojo y la depuración del agarre.
- **Método 2 de agarre visual**: Un flujo de trabajo ROS2 + YOLOE que inicia el brazo, la cámara Gemini 2 y los nodos de agarre en varios terminales para recoger y colocar objetos.

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif" alt="Demo de agarre visual con reBot Arm B601-RS" />
</p>

## Método 1 de agarre visual

### 1. Características del proyecto

1. **Estimación directa de la pose de agarre a partir de YOLO + OBB**
   El pipeline utiliza directamente las cajas de detección o los rectángulos de área mínima OBB y toma el eje corto como la dirección de apertura de la pinza, evitando el procesamiento complejo de nubes de puntos 3D.
2. **Estimación de pose de agarre 6D con GraspNet-Baseline (opcional)**
   El proyecto también es compatible con GraspNet-Baseline (`graspnet/graspnet-baseline`) para la estimación de la pose de agarre 6D a partir de nubes de puntos RGB-D, utilizando las cajas delimitadoras de YOLO para seleccionar candidatos objetivo para experimentos de agarre más complejos.
3. **Integración del controlador del brazo robótico y la pinza**
   El script principal de agarre se basa en el brazo robótico y el controlador de pose final de `reBotArm_control_py`, con un asistente de agarre ligero para la apertura de la pinza, el agarre controlado por fuerza y la lectura de la pose TCP.
4. **Código abierto y extensible**
   Todo el código fuente es abierto y los usuarios pueden personalizar los algoritmos de control y los efectos según sus propias necesidades.

### 2. Especificaciones

El hardware para este tutorial es proporcionado por [Seeed Studio](https://www.seeedstudio.com/)

<table>
  <thead>
    <tr>
      <th>Parámetro</th>
      <th>Especificación</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Modelo de brazo robótico</td>
      <td>reBot Arm B601-RS</td>
    </tr>
    <tr>
      <td>Grados de libertad</td>
      <td>6-DOF + pinza</td>
    </tr>
    <tr>
      <td>Modelo de cámara</td>
      <td>Orbbec Gemini 2 / Intel RealSense D435i / D405</td>
    </tr>
    <tr>
      <td>Método de detección</td>
      <td>YOLO + rectángulo de área mínima OBB</td>
    </tr>
    <tr>
      <td>Método de comunicación</td>
      <td>Bus CAN mediante adaptador USB2CAN; conexión de cámara USB 3.0</td>
    </tr>
    <tr>
      <td>Tensión de funcionamiento</td>
      <td>48V CC</td>
    </tr>
    <tr>
      <td>Plataforma host</td>
      <td>PC con Ubuntu 22.04+</td>
    </tr>
    <tr>
      <td>Versión recomendada de Python</td>
      <td>Python 3.10</td>
    </tr>
  </tbody>
</table>

### 3. Lista de materiales (BOM)

| Componente | Cantidad | Incluido |
|-----------|----------|----------|
| Brazo robótico reBot Arm B601-RS | 1 | ✅ |
| Pinza | 1 | ✅ |
| Puente serie USB2CAN | 1 | ✅ |
| Adaptador de corriente (48V) | 1 | ✅ |
| Cable USB-C / comunicación | 1 | ✅ |
| Cámara de profundidad RGB-D | 1 | ✅ |
| Conector de cámara / soporte de montaje | 1 | ✅ |

#### Cableado

1. Conecta la cámara de profundidad al host mediante USB 3.0.
2. Conecta el adaptador USB2CAN al bus CAN del brazo.
3. Asegúrate de que la fuente de alimentación de 48V, la cámara y el brazo robótico estén todos conectados de forma segura.
4. Establece los permisos:

```bash
sudo chmod a+rw /dev/bus/usb/*/*
sudo chmod 666 /dev/ttyUSB0
```

### 4. Requisitos del entorno

| Elemento | Requisito |
|------|-------------|
| Sistema operativo | Ubuntu 22.04+ |
| Python | 3.10 |

### 5. Pasos de instalación

#### Paso 0. Completa primero la preparación básica del brazo robótico

Antes de comenzar este tutorial, termina el contenido de [Guía rápida de inicio de reBot Arm B601-RS](https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/), incluyendo el montaje del brazo robótico, la inicialización del punto cero, la configuración de los ID de los motores y las comprobaciones básicas de conectividad.

#### Paso 1. Clona el repositorio

Da preferencia al repositorio oficial Seeed-Projects:

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

#### Paso 2. Crea y configura el entorno conda

```bash
conda env create -f environment.yml -n rebotarm
conda activate rebotarm
```

Si quieres usar un nombre de entorno diferente, reemplaza `rebotarm` en el comando por tu propio nombre.

#### Paso 3. Instala el SDK del brazo robótico

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

Si `pip install -e .` muestra `Multiple top-level packages discovered in a flat-layout`, añade una detección explícita de paquetes a `pyproject.toml` en `reBotArm_control_py` y luego ejecuta `pip install -e .` de nuevo:

```toml
[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

Las configuraciones B601 DM y RS se seleccionan mediante los archivos de configuración del SDK. Para B601-RS, confirma lo siguiente en `sdk/reBotArm_control_py/config/rebotarm.yaml`:

```yaml
hardware_yaml: rebotarm_rs.yaml
```

Los programas de agarre visual leen esta configuración del SDK y seleccionan automáticamente el modo de control del brazo y los parámetros de la pinza correspondientes.

#### Paso 4. Instala el SDK de la cámara de profundidad

Este proyecto es compatible con cámaras de profundidad RGB-D como Orbbec Gemini 2 y RealSense D435i / D405. Instala el SDK que coincida con tu cámara; si tu entorno ya puede importar el controlador de la cámara, puedes omitir este paso.

**Orbbec Gemini 2**

La cámara de profundidad Orbbec Gemini 2 depende de `pyorbbecsdk`, el wrapper de Python para Orbbec SDK v2. Primero se recomienda instalar el paquete de Python precompilado:

**Opción 1: Instalar desde pip (recomendado)**

```bash
pip install pyorbbecsdk2
```

**Opción 2: Obtenerlo desde GitHub**

```bash
sudo apt-get update
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev

cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
pip install -e .
```

Los usuarios de China continental pueden usar:

```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

Al instalar desde el código fuente, asegúrate de que la extensión nativa se haya compilado primero con CMake para que `install/lib` contenga `pyorbbecsdk*.so` y las bibliotecas compartidas de Orbbec antes de ejecutar `pip install -e .`.

Si todos los métodos de instalación anteriores fallan, consulta la documentación oficial de Orbbec a continuación.

**Verificar la instalación**

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```

Para el primer uso, se recomienda instalar las reglas udev:

```bash
sudo bash scripts/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

**RealSense D435i / D405**

Las cámaras RealSense dependen de `pyrealsense2`. Normalmente puedes instalarlo directamente con pip:

```bash
pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"
```

Si tu sistema necesita toda la cadena de herramientas de RealSense o las reglas udev, instala `librealsense2` siguiendo la documentación oficial del SDK de RealSense.

**Resumen de recursos del SDK**

| Recurso | Enlace |
|----------|------|
| Página de producto de Gemini 2 | https://www.orbbec.com.cn/index/Product/info.html?cate=38&id=51 |
| Recursos de desarrollo | https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1 |
| Orbbec SDK v2 | https://github.com/orbbec/OrbbecSDK_v2 |
| Documentación del SDK v2 API | https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/ |
| pyorbbecsdk | https://github.com/orbbec/pyorbbecsdk |
| Documentación de pyorbbecsdk | https://orbbec.github.io/pyorbbecsdk/index.html |
| Wrapper ROS2 | https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main |
| Intel RealSense SDK | https://github.com/realsenseai/librealsense |

#### Paso 5. Configura GraspNet (opcional)

No necesitas GraspNet para `scripts/main.py` o `scripts/ordinary_grasp_pipeline.py`. Configúralo solo cuando quieras ejecutar `scripts/graspnet_camera_demo.py` o `scripts/grasp.py`, que requieren GraspNet, PyTorch con CUDA habilitado, los operadores CUDA de PointNet2/knn y un checkpoint preentrenado.

Las extensiones `pointnet2` / `knn` de GraspNet requieren un compilador CUDA. Antes de empezar, asegúrate de que el entorno activo pueda encontrar `nvcc` y comprueba que la versión de CUDA reportada por `nvcc` coincida con la versión de CUDA usada para compilar PyTorch:

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

Si falta `nvcc`, o si la versión de CUDA reportada por `nvcc` no coincide con `torch.version.cuda`, instala un compilador CUDA que coincida con la versión CUDA actual de PyTorch. Por ejemplo, si PyTorch indica `13.0`:

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
Nota: Si sigues la documentación del repositorio oficial graspnet-baseline y usas `python setup.py install`, pueden producirse errores relacionados con CUDA / PyTorch. Recomendamos usar `pip install . --no-build-isolation` para que la extensión se compile con la configuración de PyTorch y CUDA ya instalada en el entorno conda activo.
:::

:::tip
Si la compilación falla con `fatal error: cusparse.h: No such file or directory`, ejecuta `find $CONDA_PREFIX -name cusparse.h` y asegúrate de que el directorio que contiene `cusparse.h` esté incluido en `CPATH` / `CPLUS_INCLUDE_PATH`. Si instalaste las cabeceras de CUDA desde el paquete conda `cuda-toolkit`, la ruta de inclusión suele ser `$CONDA_PREFIX/targets/x86_64-linux/include` en lugar de la ruta de pip `nvidia/cu13/include` mostrada arriba.
:::

:::tip
Además, las dependencias antiguas de la API de GraspNet pueden seguir usando el nombre de paquete obsoleto `sklearn`. El comando `sed` lo reemplaza por el nombre de paquete actualmente recomendado `scikit-learn` para evitar `The 'sklearn' PyPI package is deprecated` durante la instalación. A menos que también actualices las dependencias antiguas de la API de GraspNet, mantén su restricción `numpy==1.23.4` porque `transforms3d==0.3.1` sigue usando alias antiguos de NumPy como `np.float`.
:::

**Configurar el modelo preentrenado**

Descarga los pesos oficiales preentrenados de GraspNet desde el repositorio oficial graspnet-baseline [Google](https://drive.google.com/file/d/1hd0G8LN6tRpi4742XOTEisbTXNZ-1jmk/view), [Baidu](https://pan.baidu.com/s/1Eme60l39tTZrilF0I86R5A), luego coloca `checkpoint-rs.tar` en:

```bash
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

Después verifica en `config/default.yaml`:

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

El campo `checkpoint` admite tres formas: un nombre de archivo se resuelve bajo `sdk/graspnet-baseline/checkpoints/`; una ruta relativa se resuelve desde la raíz del proyecto; una ruta absoluta se usa directamente.

### 6. Estructura de directorios

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
│       └── grasp_driver.py       # Lightweight grasp helper based on arm SDK
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

### 7. Calibración mano-ojo

Antes de ejecutar el flujo completo de agarre, completa primero la calibración mano-ojo Eye-in-Hand.

Antes de ejecutar el script de calibración, levanta y verifica la interfaz CAN:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
ip -details link show can0
```

```bash
python scripts/collect_handeye_eih.py
```

Antes de ejecutarlo, asegúrate de que el siguiente parámetro de tamaño de ArUco en `config/default.yaml` coincida con el marcador impreso real:

```yaml
calibration:
  aruco:
    marker_length_m: 0.1
```

En el modo automático, el brazo recorre 50 poses preestablecidas y registra una muestra siempre que el marcador ArUco se detecta de forma estable. Incluso si interrumpes el proceso con `c` o `q`, el script sigue intentando calcular el resultado de calibración a partir de las muestras recopiladas.

Si quieres mover el brazo robótico manualmente durante la recopilación, usa el modo manual:

```bash
python scripts/collect_handeye_eih.py --manual
```

En el modo manual, el brazo entra en modo de compensación de gravedad. Mueve el efector final a un ángulo de visión adecuado, pulsa `Enter` para capturar y pulsa `c` o `q` para finalizar y calcular el resultado.

:::tip
Si después de la calibración descubres que la precisión de agarre del brazo robótico no puede cumplir tus requisitos, puedes establecer los parámetros `X` (adelante-atrás), `Y` (izquierda-derecha), `Z` (arriba-abajo) en `config/default.yaml` bajo `calibration.hand_eye_compensation_m` para proporcionar compensación posicional.
:::

El resultado de la calibración se guarda en:

```text
config/calibration/<camera_type>/hand_eye.npz
```

Se recomienda un recuento de muestras de al menos 5, siendo 15 o más lo recomendado.

### 8. Ejecución y depuración

#### 1. Verificar solo la detección de objetos

```bash
python scripts/object_detection.py
```

Si necesitas cambiar el modelo de detección o las clases, modifica `config/default.yaml`:

```yaml
yolo:
  model_name: "yoloe-26l-seg.pt"
  device: "cpu"
  use_world: true
  custom_classes:
    - "yellow banana"
    - "water bottle"
    - "cup"
```

Este paso es útil para confirmar:

- Que la cámara se abre correctamente
- Que el modelo YOLO se carga correctamente
- Que la detección de objetos con YOLO funciona como se espera

#### 2. Verificar solo la estimación de agarre

```bash
python scripts/ordinary_grasp_pipeline.py
```

Si necesitas ajustar la frecuencia de inferencia de agarre o la distancia de retirada previa al agarre, modifica:

```yaml
grasp_pipeline:
  infer_every_live: 3
  grasp:
    depth_quantile: 0.5
    pregrasp_offset_m: 0.080
    insertion_depth_m: 0.015
    min_base_z_m: 0.00
```

Este script no se conecta al brazo robótico. Solo se usa para verificar:

- Si el OBB o el rectángulo de área mínima es razonable
- Si el punto de agarre se encuentra cerca del área central del objetivo
- Si la dirección del eje corto coincide con la dirección esperada de apertura de la pinza

Controles clave:

- Botón izquierdo del ratón: inspeccionar la profundidad en el píxel seleccionado
- `G`: imprimir la pose de agarre actual óptima
- `Q` / `Esc`: salir

#### 3. Ejecutar el programa principal de agarre

```bash
python scripts/main.py
```

Si solo quieres validar la pose objetivo sin mover el brazo robótico:

```bash
python scripts/main.py --dry-run
```

Se recomienda verificar primero la pose y el espacio de trabajo alcanzable con `--dry-run` antes de ejecutar un agarre real.

Flujo principal del programa:

1. Inicializar la cámara RGB-D y confirmar que el flujo de imágenes está disponible.
2. Habilitar el brazo robótico y la pinza.
3. Mover a la pose de preparado. Si quieres cambiar la pose inicial de preparado, modifica `config/default.yaml`:

```yaml
robot:
  ready_pose:
    x: 0.3
    y: 0.0
    z: 0.3
    roll: 0.0
    pitch: 0.7
    duration: 3.0
```

4. Detectar en tiempo real los objetivos sobre la mesa.
5. Estimar la pose de agarre a partir del eje corto.
6. Pulsa `G` para capturar el fotograma actual y ejecutar el agarre.

Teclas en tiempo de ejecución:

- `G`: agarrar el mejor objetivo actual
- `R`: reanudar la vista previa en vivo
- `Q` / `Esc`: salir

#### 4. `scripts/set.py` — Programa de agarre y colocación

Función: Agarrar el plátano y colocarlo en la caja.

Flujo completado:

1. Inicialización de cámara y brazo, mover a la posición de preparado
2. Vista previa de cámara en tiempo real + detección de objetos YOLO y segmentación de instancias
3. Pulsar `G` para congelar el fotograma, calcular la pose objetivo del brazo mediante la transformación mano-ojo
4. El brazo se mueve para agarrar el plátano y levantarlo
5. El brazo coloca el plátano en la caja y vuelve a la pose inicial
6. Pulsar `Q` para salir del sistema, el brazo vuelve a la posición cero

#### 5. Demo de estimación con cámara GraspNet (opcional)

```bash
python scripts/graspnet_camera_demo.py
```

Este script ejecuta la estimación de pose de agarre 6D de GraspNet solo con la cámara RGB-D, sin conectar al brazo robótico. Mantiene una vista previa en vivo de la cámara, usa las cajas delimitadoras de YOLO para seleccionar el área objetivo y filtra los candidatos de escena completa de GraspNet factibles mediante el bbox objetivo.

Controles clave:

- `G` / `Space`: ejecutar la inferencia de GraspNet en el fotograma actual
- `R`: reanudar la vista previa en vivo
- `Q` / `Esc`: salir

Después de la inferencia, Open3D puede visualizar la nube de puntos y los candidatos de agarre.

#### 6. Programa de agarre robótico GraspNet (opcional)

```bash
python scripts/grasp.py
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

Este script conecta la estimación de GraspNet con el flujo de ejecución del brazo robótico. YOLO selecciona el objetivo, GraspNet produce una pose de agarre 6D, la calibración mano-ojo la transforma al marco base del robot y el script comprueba la alcanzabilidad por IK antes de ejecutar la secuencia de movimientos de pre-agarre, agarre y retirada.

Ejecutar `python scripts/grasp.py` inicia el flujo completo de agarre robótico con GraspNet y controla realmente el brazo robótico. `--dry-run` solo imprime la pose objetivo y el resultado del filtrado de candidatos sin ejecutar el movimiento de agarre. `--target-class "light blue coffee cup"` especifica la clase objetivo de YOLO y solo filtra y agarra candidatos de GraspNet para esa clase.

### 9. FAQ

<h4>1. <code>ModuleNotFoundError: No module named 'motorbridge'</code></h4>

Esto normalmente significa que las dependencias del SDK del brazo robótico no están instaladas en el entorno actual de Python. Por favor, comprueba:

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
cd sdk/reBotArm_control_py && pip install -e .
```

<h4>2. Al pulsar <code>G</code> no se ejecuta el agarre</h4>

Causas comunes:

- `hand_eye.npz` no existe
- El modo de calibración mano-ojo no es `eye_in_hand`
- La pose objetivo no es alcanzable por IK

Se recomienda ejecutar:

```bash
python scripts/main.py --dry-run
```

<h4>3. La profundidad de agarre es inestable</h4>

Puedes intentar ajustar:

- `grasp_pipeline.grasp.depth_quantile`
- La altura de instalación de la cámara con respecto al espacio de trabajo
- Las propiedades reflectantes de la superficie del objetivo

<h4>4. GraspNet informa que <code>pointnet2_utils</code> no se puede importar desde <code>pointnet2</code></h4>

Esto normalmente significa que la extensión local de CUDA en `sdk/graspnet-baseline/pointnet2` no se compiló en el entorno conda activo, o que Python está resolviendo un paquete `pointnet2` diferente. Asegúrate de que el entorno del proyecto esté activo y luego vuelve a compilar tanto `pointnet2` como `knn` en ese mismo entorno:

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

Verifica:

```bash
python -c "from pointnet2 import pointnet2_utils; print('Submodule import works')"
```

<h4>5. Problemas de compatibilidad de arquitectura CUDA en GPUs más recientes al ejecutar GraspNet</h4>

Si ves `no kernel image is available for execution on the device`, o PyTorch informa que la capacidad CUDA de la GPU actual no es compatible, es probable que la rueda de PyTorch instalada no incluya kernels CUDA para esa arquitectura de GPU. Instala una compilación de PyTorch que admita tu arquitectura actual de CUDA/GPU y luego vuelve a compilar las extensiones locales de CUDA de GraspNet.

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.get_device_name(0))"

cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

Si necesitas especificar manualmente la arquitectura de compilación, establece `TORCH_CUDA_ARCH_LIST` antes de recompilar. Elige el valor de acuerdo con la arquitectura de tu GPU y la versión de PyTorch/CUDA.

<h4>6. La inferencia de GraspNet informa <code>RuntimeError: CPU not supported</code></h4>

Los operadores de muestreo en `pointnet2` solo admiten tensores CUDA. Confirma que CUDA está disponible, que la red de GraspNet y la nube de puntos de entrada están en la GPU, y que `pointnet2` / `knn` se compilaron contra la versión de PyTorch en el entorno activo.

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

Si la salida es `False`, corrige primero la instalación de CUDA / PyTorch. Si es `True` pero el error persiste, vuelve a compilar `pointnet2` y `knn`.

## Método 2 de agarre visual

### 1. Presentación del proyecto

Esta solución usa **ROS2** y **YOLO** en el reBot Arm B601-RS para la detección de objetos, el agarre y la colocación. El sistema inicia el brazo, la cámara Gemini 2 y los nodos de agarre en terminales separados.

La cámara de profundidad actualmente solo es compatible con **Orbbec Gemini 2**. Este flujo de trabajo no requiere una placa de calibración para la calibración mano-ojo. Debido a las tolerancias de montaje y de las piezas impresas, cada brazo puede presentar un pequeño desfase de agarre.

### 2. Instalación del entorno

#### Paso 1. Instala el espacio de trabajo ROS2 del brazo robótico

Primero completa la instalación y la compilación del espacio de trabajo `rebotarm_ros2` siguiendo [Integración ROS2 de reBot Arm B601-RS](https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_ros2_integration/).

#### Paso 2. Instala la cámara

Clona el SDK ROS2 de Orbbec en el espacio de trabajo y cambia a la rama `v2-main`:

```bash
cd ~/rebotarm_ros2/src
git clone https://github.com/xiehuangbao888/OrbbecSDK_ROS2.git
cd OrbbecSDK_ROS2
git checkout v2-main
```

Compila el espacio de trabajo:

```bash
cd ~/rebotarm_ros2
colcon build --event-handlers console_direct+ --cmake-args -DCMAKE_BUILD_TYPE=Release
```

Instala las reglas udev:

```bash
cd ~/rebotarm_ros2/src/OrbbecSDK_ROS2/orbbec_camera/scripts
sudo bash install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

#### Paso 3. Importa el paquete de agarre visual

```bash
cd ~/rebotarm_ros2/src/
git clone https://github.com/xiehuangbao888/rebot_visual_grasp.git
```

#### Paso 4. Instala el entorno YOLO / YOLOE

`grasp_yolo` llama a Ultralytics YOLOE desde Python. Usa un entorno conda dedicado y no uses el `/usr/bin/python3` del sistema.

**Crear el entorno**

```bash
conda create -n yolo python=3.10
conda activate yolo

pip install -U ultralytics
pip install "numpy==1.26.4" transforms3d

# YOLOE open-vocabulary classes require the Ultralytics CLIP package, not the PyPI clip package
pip install git+https://github.com/ultralytics/CLIP.git
```

Si tienes una GPU NVIDIA, confirma primero que CUDA está disponible. Si la salida es `False`, instala una compilación de CUDA / PyTorch coincidente. También puedes continuar en CPU, pero la tasa de fotogramas de detección será menor:

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

Verifica YOLOE:

```bash
python -c "from ultralytics import YOLOE; print('YOLOE OK')"
```

**Descargar los pesos a `~/rebot_visual_model`**

```bash
mkdir -p ~/rebot_visual_model && cd ~/rebot_visual_model

# MobileCLIP (required by YOLOE set_classes, about 242MB)
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/mobileclip2_b.ts

# YOLOE segmentation weights can also download on first run; placing them here is recommended
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26s-seg.pt
```

#### Paso 5. Compila el espacio de trabajo

```bash
cd ~/rebotarm_ros2
source /opt/ros/humble/setup.bash
colcon build --symlink-install
source ~/rebotarm_ros2/install/setup.bash
```

El entorno de agarre visual ya está listo. En cada terminal nuevo, haz `source` de lo siguiente antes de ejecutar comandos de agarre visual:

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
```

### 3. Ejecutar el proyecto

Antes de empezar, confirma que el brazo está encendido, que la interfaz CAN es `can0` y que Gemini 2 está conectada por USB. Luego levanta CAN:

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

Inicia el conjunto en terminales separados para que la lógica de agarre sea más fácil de seguir. Si quieres un arranque con un solo clic, puedes escribir tu propio script de inicio.

#### Terminal A — Iniciar el brazo + RViz

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp bringup_with_camera.launch.py model:=rs channel:=can0 use_rviz:=true
```

#### Terminal B — Iniciar Gemini 2

```bash
source /opt/ros/humble/setup.bash

ros2 launch orbbec_camera gemini2.launch.py
```

#### Terminal C — Mover a la pose de observación + detección YOLO

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
conda activate yolo

python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:=$HOME/rebot_visual_model/yoloe-26s-seg.pt \
  -p target_class:="cube" \
  -p place_class:="box" \
  -p yolo_device:=0 \
  -p grasp_z_offset_m:=0.02 \
  -p place_z_offset_m:=0.1 \
  -p grasp_x_offset_m:=-0.04 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

| Parámetro | Descripción |
|-----------|-------------|
| `yolo_device:=0` | GPU 0; usa `cpu` si no tienes una GPU dedicada |
| `target_class` | Nombre de clase de texto YOLOE del objeto a agarrar; cámbialo para que coincida con el objeto real |
| `place_class` | Nombre de clase de texto YOLOE del objetivo de colocación; cámbialo para que coincida con el objeto real |
| `grasp_x_offset_m` | Desplazamiento adelante/atrás en `base_link`; un valor negativo retrasa la pose hacia atrás |
| `grasp_z_offset_m` | Ajuste fino de la altura de agarre. El valor predeterminado es para la pinza flexible, que es más larga que la pinza estándar |
| `place_z_offset_m` | Elevación adicional al colocar, para controlar a qué altura se suelta el objeto sobre el punto de colocación |

#### Terminal D — Agarre y colocación con un clic

El retardo de disparo predeterminado es de 3 segundos. Para cambiarlo, añade un parámetro. Por ejemplo, para disparar a los 5 segundos:

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp grasp_go.launch.py
```

```bash
ros2 launch rebot_visual_grasp grasp_go.launch.py trigger_delay_s:=5.0
```

#### Terminal E — Volver a home (opcional)

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger {}
```

## Contacto

- Soporte técnico: [Enviar un Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)
- Página del proyecto: [GitHub](https://github.com/Seeed-Projects/reBot-DevArm-Grasp)
- Foro: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## Referencias

- [Guía rápida de inicio de reBot Arm B601-RS](https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/)
- [Integración ROS2 de reBot Arm B601-RS](https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_ros2_integration/)
- [rebot_visual_grasp](https://github.com/xiehuangbao888/rebot_visual_grasp)
- [OrbbecSDK_ROS2](https://github.com/xiehuangbao888/OrbbecSDK_ROS2)
- [Página de producto Orbbec Gemini 2](https://www.orbbec.com/products/stereo-vision-camera/gemini-2/)
- [Recursos de desarrollo de Orbbec](https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1)
- [Orbbec SDK v2](https://github.com/orbbec/OrbbecSDK_v2)
- [Guía de API de Orbbec SDK v2](https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/)
- [Repositorio pyorbbecsdk](https://github.com/orbbec/pyorbbecsdk)
- [Documentación de pyorbbecsdk](https://orbbec.github.io/pyorbbecsdk/index.html)
- [Orbbec ROS2 Wrapper](https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main)
- [Intel RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Documentación de Graspnet(Anygrasp)](https://graspnet.net/)
