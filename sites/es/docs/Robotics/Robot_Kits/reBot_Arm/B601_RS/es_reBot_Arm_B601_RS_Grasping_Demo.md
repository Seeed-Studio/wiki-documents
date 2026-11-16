---
description: Este tutorial cubre dos implementaciones de agarre visual para el reBot Arm B601-RS, incluyendo un flujo de trabajo YOLO/OBB y otro de agarre basado en ROS2.
title: B601-RS con agarre visual
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
  date: 2026-11-04
  author: YinHaizhou
translation:
  skip: [zh-CN]
createdAt: '2026-06-15'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_grasping_demo/
---
import '/src/css/rebot-wiki-style.css';

import GraspingTabs from '@site/src/components/robotics/RebotGraspingTabs';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/components/robotics/rebot-grasping-demo.module.css';

# Demostración de agarre visual con reBot Arm B601-RS

<div className={styles.page}>

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="reBot Arm B601-RS" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>Consigue uno ahora</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

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
  <strong>Percepción de profundidad · Detección de objetos · Calibración mano-ojo · Agarre autónomo · Totalmente de código abierto</strong>
</p>

<p align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/visual_grasp/grasp_rs.gif" alt="Demostración de agarre visual con reBot Arm B601-RS" />
</p>

## ¿En qué se diferencian los dos métodos de agarre?

Esta página cubre dos demostraciones de agarre visual con diferentes implementaciones. Compara sus marcos, requisitos de calibración y flujos de inicio, y luego elige un tutorial a continuación.

<div className={styles.comparison}>
  <section className={styles.methodCard} aria-label="Method 1: Python SDK">
    <span className={styles.methodNumber}>Método 01</span>
    <h3>Python SDK + YOLO / OBB</h3>
    <p>Utiliza YOLO, una cámara de profundidad RGB-D y el Python SDK para el flujo de trabajo completo, desde la configuración del entorno e integración de la cámara hasta la calibración mano-ojo y la depuración del agarre.</p>
    <dl>
      <div><dt>Lógica de agarre</dt><dd>Estima las poses de agarre a partir de cajas de detección o rectángulos de área mínima OBB; opcionalmente utiliza GraspNet para la estimación de pose 6D.</dd></div>
      <div><dt>Calibración mano-ojo</dt><dd>Completa la calibración Eye-in-Hand con un marcador ArUco antes de la primera ejecución completa de agarre.</dd></div>
      <div><dt>Inicio</dt><dd>Ejecuta scripts de Python para verificar paso a paso la detección, la estimación de pose y el agarre robótico.</dd></div>
    </dl>
  </section>
  <section className={styles.methodCard} aria-label="Method 2: ROS 2">
    <span className={styles.methodNumber}>Método 02</span>
    <h3>ROS 2 + YOLOE</h3>
    <p>Utiliza ROS 2 y YOLOE para iniciar el brazo, la cámara Gemini 2 / D405 / D435i y los nodos de agarre en terminales separadas para recoger y colocar.</p>
    <dl>
      <div><dt>Lógica de agarre</dt><dd>El nodo de agarre visual detecta, agarra y coloca objetos. Los nombres de clase en texto especifican los objetivos de agarre y colocación.</dd></div>
      <div><dt>Calibración mano-ojo</dt><dd>No se requiere tablero de calibración; ajusta los parámetros de desplazamiento para compensar pequeñas tolerancias de montaje y de piezas impresas.</dd></div>
      <div><dt>Inicio</dt><dd>Inicia el brazo, la cámara y el nodo de agarre en terminales separadas y luego dispara la recogida y colocación.</dd></div>
    </dl>
  </section>
</div>

## Elige un método de agarre

<p className={styles.selectionHint}>Cambia de pestaña para ver el tutorial del método que elijas y sigue sus pasos de instalación y ejecución.</p>

<GraspingTabs>
<TabItem value="python-sdk" label="Método 1 · Python SDK / OBB">

## Método de agarre visual 1

Esta ruta utiliza **Python SDK + cámara RGB-D + YOLO / OBB** sin un espacio de trabajo ROS 2. La ruta predeterminada se adapta a objetos ordinarios de sobremesa; activa el módulo opcional GraspNet más abajo cuando necesites un agarre 6D más complejo.

### 1. Características del proyecto

1. **Estimación directa de la pose de agarre desde YOLO + OBB**
   El flujo utiliza directamente cajas de detección o rectángulos de área mínima OBB y toma el eje corto como dirección de apertura de la pinza, evitando el procesamiento complejo de nubes de puntos 3D.
2. **Estimación de pose de agarre 6D con GraspNet-Baseline (opcional)**
   El proyecto también es compatible con GraspNet-Baseline (`graspnet/graspnet-baseline`) para la estimación de pose de agarre 6D a partir de nubes de puntos RGB-D, usando cajas delimitadoras de YOLO para seleccionar candidatos objetivo para experimentos de agarre más complejos.
3. **Integración del controlador del brazo robótico y la pinza**
   El script principal de agarre se basa en el brazo robótico y el controlador de pose final de `reBotArm_control_py`, con un asistente de agarre ligero para la apertura de la pinza, el agarre controlado por fuerza y la lectura de la pose TCP.
4. **Código abierto y extensible**
   Todo el código fuente es abierto y los usuarios pueden personalizar algoritmos de control y efectos según sus propias necesidades.

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
      <td>Orbbec Gemini 2 / RealSense D435i / D405</td>
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
| Cable USB-C / de comunicación | 1 | ✅ |
| Cámara de profundidad RGB-D | 1 | ✅ |
| Conector de cámara / soporte de montaje | 1 | ✅ |

#### Cableado

1. Conecta la cámara de profundidad al host mediante USB 3.0.
2. Conecta el adaptador USB2CAN al bus CAN del brazo.
3. Asegúrate de que la fuente de alimentación de 48V, la cámara y el brazo robótico estén todos conectados de forma segura.
4. Si encuentras problemas de permisos, ejecuta:

```bash
sudo chmod a+rw /dev/bus/usb/*/*
sudo chmod 666 /dev/ttyUSB0
```

### 4. Requisitos del entorno

| Elemento | Requisito |
|------|-------------|
| Sistema operativo | Ubuntu 22.04+ |
| Python | 3.10 |

### 5. Instalar el entorno básico

Sigue estos pasos en orden. Los pasos 0–3 son necesarios para la ruta predeterminada; elige el SDK de cámara en el paso 4 para que coincida con tu hardware. Las instrucciones de instalación y ejecución de GraspNet están en el módulo avanzado separado más abajo.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">0</span>
<div className="rebot-step-content">

#### Paso 0. Completa primero la preparación básica del brazo robótico

Antes de comenzar este tutorial, termina el contenido de [Inicio rápido de reBot Arm B601-RS](https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/), incluyendo el montaje del brazo robótico, la inicialización del punto cero, la configuración de ID de motor y las comprobaciones básicas de conectividad.

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### Paso 1. Clonar el repositorio

Da preferencia al repositorio oficial Seeed-Projects:

```bash
git clone https://github.com/Seeed-Projects/reBot-DevArm-Grasp.git rebot_grasp
cd rebot_grasp
```

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### Paso 2. Crear el entorno y elegir PyTorch para tu hardware

Completa estas tres fases en orden: crea el entorno base, instala PyTorch para tu hardware e instala las dependencias del proyecto.

<div className="rebot-step-flow rebot-step-flow--substeps">
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2.1</span>
<div className="rebot-step-content">

##### Crear el entorno base

```bash
conda env create -f environment.yml -n rebotarm
conda activate rebotarm
```

:::note Resultado esperado
El prompt de la terminal muestra `rebotarm`, lo que indica que el entorno está activo. PyTorch aún no está instalado; continúa con las dos fases siguientes.
:::

Para usar un nombre de entorno diferente, reemplaza `rebotarm` en ambos comandos anteriores. Para un entorno existente, actívalo y ejecuta `conda env update -n rebotarm -f environment.yml` para actualizar las dependencias base. Este comando no elimina los paquetes de pip existentes.

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2.2</span>
<div className="rebot-step-content">

##### Instalar PyTorch para tu hardware

Ambas pestañas usan las mismas versiones de paquetes compatibles; solo difiere el índice de descarga. El archivo de versión actual especifica PyTorch 2.9.1, torchvision 0.24.1 y torchaudio 2.9.1 para el entorno Python 3.10, Ubuntu x86_64 utilizado en este tutorial.

<Tabs groupId="rebot-pytorch-backend" defaultValue="cpu">
<TabItem value="cpu" label="CPU (sin GPU NVIDIA)">

Usa esta opción para ordenadores con gráficos integrados Intel / AMD, o para verificar primero el flujo de trabajo básico en CPU.

```bash
python -m pip install -r requirements-pytorch.txt --index-url https://download.pytorch.org/whl/cpu
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA available:', torch.cuda.is_available())"
```

:::note Resultado esperado
La ruta de PyTorch apunta dentro del entorno Conda activo. `CUDA available: False` es lo esperado.
:::

Mantén el siguiente ajuste en `config/default.yaml`:

```yaml
yolo:
  device: "cpu"
```

:::tip Flujo de trabajo compatible
El flujo de trabajo básico de YOLO / OBB puede ejecutarse en CPU. La velocidad de inferencia depende del modelo y de tu ordenador. Los operadores CUDA de GraspNet de este proyecto requieren una GPU NVIDIA, así que omite el módulo avanzado de GraspNet a continuación.
:::

</TabItem>
<TabItem value="nvidia" label="GPU NVIDIA (CUDA)">

Confirma que el controlador reconoce tu GPU antes de instalar PyTorch con soporte CUDA. El siguiente ejemplo usa la compilación CUDA 12.8, que requiere compatibilidad tanto de la arquitectura de tu GPU como del controlador:

```bash
nvidia-smi
python -m pip install -r requirements-pytorch.txt --index-url https://download.pytorch.org/whl/cu128
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA build:', torch.version.cuda); print('CUDA available:', torch.cuda.is_available())"
```

:::note Resultado esperado
`nvidia-smi` muestra tu GPU, la ruta de PyTorch apunta dentro del entorno Conda activo y se imprime `CUDA available: True`. Después de verificar esto, selecciona la GPU 0 en `config/default.yaml`:

```yaml
yolo:
  device: "0"
```
:::

:::tip Elige una compilación de CUDA
Usa la [lista oficial de versiones de PyTorch](https://pytorch.org/get-started/previous-versions/) para elegir una compilación que sea compatible con tu GPU, controlador y versión de Python. No elijas únicamente por la serie de GPU o por el número de CUDA mostrado por `nvidia-smi`.

Si necesitas una versión diferente de PyTorch, actualiza conjuntamente las tres versiones compatibles en `requirements-pytorch.txt` y en el índice de descarga. La inferencia estándar de YOLO usa ruedas precompiladas y no requiere una instalación separada de CUDA Toolkit. Se necesita un compilador CUDA compatible al compilar las extensiones de GraspNet.
:::

Si CUDA no está disponible, revisa tu controlador, la arquitectura de la GPU y la rueda seleccionada, o sigue la pestaña de CPU para verificar el flujo de trabajo básico.

</TabItem>
</Tabs>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2.3</span>
<div className="rebot-step-content">

##### Instala y verifica las dependencias del proyecto

Después de completar cualquiera de las opciones de hardware, ejecuta lo siguiente desde la raíz del proyecto:

```bash
python -m pip install -r requirements.txt -c requirements-pytorch.txt
python -m pip check
python -c "import torch, torchvision, torchaudio, cv2; from ultralytics import YOLO; from calibration.aruco_pose import ArUcoDetector; ArUcoDetector(); print('Vision dependencies OK:', cv2.__version__)"
```

:::note Resultado esperado
`pip check` imprime `No broken requirements found.`, y el comando de verificación imprime `Vision dependencies OK` sin errores de importación. Completa estas comprobaciones antes de instalar los SDK del brazo robótico y de la cámara.
:::

:::tip Fallos de instalación
`-c requirements-pytorch.txt` restringe las versiones compatibles del paquete PyTorch. Mantén este argumento y no añadas `--upgrade`. Si pip falla, revisa el error final y vuelve a intentar la fase correspondiente. Activar un entorno Conda no significa que todas las dependencias se hayan instalado correctamente.

Instala solo el paquete estándar de OpenCV especificado en `requirements.txt`. Las API ArUco del proyecto están disponibles en la versión 4.7; no instales ruedas adicionales de OpenCV junto con ella. CLIP se instala desde el repositorio Git de Ultralytics, por lo que Git debe estar disponible en tu sistema. Cargar YOLOE por primera vez también puede descargar pesos de modelo.
:::

</div>
</section>
</div>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### Paso 3. Instala el SDK del brazo robótico

```bash
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
cd sdk/reBotArm_control_py
pip install -e .
cd ../..
```

Si al ejecutar pip install -e . aparece 'Multiple top-level packages discovered in a flat-layout', añade una configuración explícita de descubrimiento de paquetes en el pyproject.toml de reBotArm_control_py y luego ejecuta de nuevo pip install -e .:

```bash
[tool.setuptools.packages.find]
include = ["reBotArm_control_py*"]
```

Las configuraciones B601 DM y RS se seleccionan a través de los archivos de configuración del SDK. Para B601-RS, confirma lo siguiente en `sdk/reBotArm_control_py/config/rebotarm.yaml`:

```yaml
hardware_yaml: rebotarm_rs.yaml
```

Los programas de agarre visual leen esta configuración del SDK y seleccionan automáticamente el modo de control del brazo y los parámetros del efector final correspondientes.

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### Paso 4. Instala el SDK de la cámara de profundidad

Este proyecto es compatible con cámaras de profundidad RGB-D como Orbbec Gemini 2 y RealSense D435i / D405. Instala el SDK que coincida con tu cámara; si tu entorno ya puede importar el controlador de la cámara, puedes omitir este paso.

<Tabs groupId="rebot-depth-camera" defaultValue="orbbec">
<TabItem value="orbbec" label="Orbbec Gemini 2">

La cámara de profundidad Orbbec Gemini 2 depende de `pyorbbecsdk`, el contenedor de Python para Orbbec SDK v2. Es preferible instalar primero el paquete de Python precompilado.

En Linux / Ubuntu, configura las reglas de udev antes de usar la cámara por primera vez, sea cual sea el método de instalación que elijas. Las reglas permiten que los usuarios normales accedan al dispositivo USB y se instalan a nivel de sistema, por lo que cada máquina solo necesita esta configuración una vez. Omite los comandos correspondientes si las reglas ya están configuradas.

<Tabs defaultValue="pip">
<TabItem value="pip" label="Opción 1: Instalar desde pip (recomendado)">

```bash
pip install pyorbbecsdk2
```

**Configurar reglas de udev (Linux / Ubuntu)**

`pyorbbecsdk2` 2.1.0 y posteriores incluyen un script de configuración de entorno. Mantén tu entorno conda activo y ejecuta el script desde el paquete instalado. Solicita permisos de sudo e instala y recarga automáticamente las reglas de udev.

```bash
orbbec_sdk_dir="$(python -c 'import os, pyorbbecsdk; print(os.path.dirname(pyorbbecsdk.__file__))')"
python "$orbbec_sdk_dir/shared/setup_env.py"
```

Si no se puede encontrar `shared/setup_env.py`, ejecuta `pip install --upgrade "pyorbbecsdk2>=2.1.0"`, y luego repite los comandos anteriores. Consulta la [guía oficial de instalación de Orbbec](https://orbbec.github.io/pyorbbecsdk/source/2_installation/install_the_package.html) para más detalles.

</TabItem>
<TabItem value="github" label="Opción 2: Obtenerlo desde GitHub">

Mantén activo el entorno `rebotarm`. Instala las dependencias de compilación y luego compila la extensión de Python:

```bash
sudo apt-get update
sudo apt-get install -y cmake build-essential libusb-1.0-0-dev python3-dev

cd sdk
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
git checkout v2-main
python -m pip install pybind11
mkdir -p build
cd build
cmake .. -DCMAKE_BUILD_TYPE=Release \
  -DPython3_EXECUTABLE="$(python -c 'import sys; print(sys.executable)')" \
  -Dpybind11_DIR="$(python -m pybind11 --cmakedir)"
cmake --build . --parallel "$(nproc)"
cmake --install .
cd ..
```

Los usuarios de China continental pueden reemplazar el comando de clonación de GitHub anterior por:

```bash
git clone https://gitee.com/orbbecdeveloper/pyorbbecsdk.git
```

Después de compilar, confirma que `install/lib` contiene `pyorbbecsdk*.so` y las bibliotecas compartidas de Orbbec (bajo `install/lib/pyorbbecsdk/` en versiones más recientes), y luego instala el paquete de Python. Consulta la [guía oficial de compilación desde el código fuente de Orbbec](https://orbbec.github.io/pyorbbecsdk/source/2_installation/build_the_package.html) para la configuración de CMake y conda.

```bash
pip install -e .
```

**Configurar reglas de udev (Linux / Ubuntu)**

Ejecuta lo siguiente desde la raíz del repositorio `pyorbbecsdk` clonado. Las versiones más recientes usan el script de configuración de entorno; las versiones antiguas usan `install_udev_rules.sh`:

```bash
if [ -f scripts/env_setup/setup_env.py ]; then
  python scripts/env_setup/setup_env.py
else
  sudo bash scripts/install_udev_rules.sh
  sudo udevadm control --reload-rules
  sudo udevadm trigger
fi
```

Vuelve a la raíz del proyecto antes de continuar con los pasos de verificación y ejecución:

```bash
cd ../..
```

</TabItem>
</Tabs>

Si ambos métodos de instalación fallan, consulta la documentación oficial de Orbbec a continuación.

**Verificar la instalación**

```bash
python -c "import pyorbbecsdk; print('pyorbbecsdk OK')"
```

</TabItem>
<TabItem value="realsense" label="RealSense D435i / D405">

Las cámaras RealSense dependen de `pyrealsense2`. Normalmente puedes instalarlo directamente con pip:

```bash
pip install pyrealsense2
python -c "import pyrealsense2; print('pyrealsense2 OK')"
```

Si tu sistema necesita la cadena de herramientas completa de RealSense o reglas de udev, sigue la [documentación oficial de librealsense](https://github.com/realsenseai/librealsense).

:::warning Usa un puerto USB 3.x
La D405 / D435i debe conectarse a un puerto USB 3.0/3.2 (normalmente azul). Si se conecta a un puerto USB 2.0, el síntoma típico es: **el sistema reconoce el dispositivo y `pipeline.start()` tiene éxito, pero los fotogramas nunca llegan** (`Frame didn't arrive within ...`). Comprueba la velocidad negociada con:

```bash
lsusb -t   # the camera line should show 5000M; 480M means it fell back to a USB 2.0 port — switch ports
```
:::

</TabItem>
</Tabs>

:::note Resultado esperado
El comando de verificación correspondiente imprime `pyorbbecsdk OK` o `pyrealsense2 OK` sin un `ModuleNotFoundError`.
:::

**Resumen de recursos de SDK**

| Recurso | Enlace |
|----------|------|
| Página de producto de Gemini 2 | https://www.orbbec.com.cn/index/Product/info.html?cate=38&id=51 |
| Recursos de desarrollo | https://www.orbbec.com.cn/index/Download2025/info.html?cate=121&id=1 |
| Orbbec SDK v2 | https://github.com/orbbec/OrbbecSDK_v2 |
| Documentación de la API de SDK v2 | https://orbbec.github.io/docs/OrbbecSDKv2_API_User_Guide/ |
| pyorbbecsdk | https://github.com/orbbec/pyorbbecsdk |
| Documentación de pyorbbecsdk | https://orbbec.github.io/pyorbbecsdk/index.html |
| Wrapper ROS2 | https://github.com/orbbec/OrbbecSDK_ROS2/tree/v2-main |
| RealSense SDK | https://github.com/realsenseai/librealsense |

</div>
</section>
</div>

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
│   ├── pyorbbecsdk/              # Orbbec SDK Python wrapper (source installation)
│   └── reBotArm_control_py/      # reBot Arm SDK
├── requirements-pytorch.txt      # Compatible versions installed from the CPU / CUDA index
├── requirements.txt              # Project dependencies installed after PyTorch
└── environment.yml               # Base Conda environment
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

Antes de ejecutarlo, asegúrate de que el siguiente parámetro de tamaño de ArUco en `config/default.yaml` coincida con el marcador impreso real:

```yaml
calibration:
  aruco:
    marker_length_m: 0.1
```

Después de confirmar la configuración, ejecuta la calibración automática:

```bash
python scripts/collect_handeye_eih.py
```

En el modo automático, el brazo recorre 50 poses preestablecidas y registra una muestra siempre que el marcador ArUco se detecta de forma estable. Incluso si interrumpes el proceso con `c` o `q`, el script sigue intentando calcular el resultado de calibración a partir de las muestras recopiladas.

Si quieres mover el brazo robótico manualmente durante la recopilación, usa el modo manual:

```bash
python scripts/collect_handeye_eih.py --manual
```

En el modo manual, el brazo entra en modo de compensación de gravedad. Mueve el efector final a un ángulo de visión adecuado, pulsa `Enter` para capturar y pulsa `c` o `q` para finalizar y calcular el resultado.

:::tip
Si después de la calibración descubres que la precisión de agarre del brazo robótico no cumple tus requisitos, puedes establecer los parámetros `X` (adelante-atrás), `Y` (izquierda-derecha), `Z` (arriba-abajo) en `config/default.yaml` bajo `calibration.hand_eye_compensation_m` para proporcionar compensación de posición.
:::

El resultado de la calibración se guarda en:

```text
config/calibration/<camera_type>/hand_eye.npz
```

Se recomienda un recuento de muestras de al menos 5, siendo 15 o más lo recomendado.

### 8. Ejecución y depuración

Verifica los escenarios en este orden: los dos primeros no se conectan al brazo robótico y ayudan a comprobar la cámara, la detección y la estimación de agarre. Los dos siguientes se conectan y controlan el brazo robótico.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

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

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

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

Este script no se conecta al brazo robótico. Solo se utiliza para verificar:

- Si el OBB o el rectángulo de área mínima es razonable
- Si el punto de agarre se encuentra cerca del área central del objetivo
- Si la dirección del eje corto coincide con la dirección esperada de apertura de la garra

Controles clave:

- Botón izquierdo del ratón: inspeccionar la profundidad en el píxel seleccionado
- `G`: imprimir la pose de agarre actual óptima
- `Q` / `Esc`: salir

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### 3. Ejecutar el programa principal de agarre

```bash
python scripts/main.py
```

Para validar la pose objetivo omitiendo el movimiento de agarre:

```bash
python scripts/main.py --dry-run
```

Verifica la pose y el espacio de trabajo con `--dry-run` antes de ejecutar un agarre real. En este modo, el script actual aún inicializa el brazo, se mueve a la pose de listo y realiza la limpieza y el retorno a origen al salir. Para una verificación solo de visión, usa los dos primeros scripts, que no se conectan al brazo.

Flujo principal del programa:

1. Inicializar la cámara RGB-D y confirmar que el flujo de imagen está disponible.
2. Habilitar el brazo robótico y la garra.
3. Mover a la pose de listo. Si quieres cambiar la pose de listo de inicio, modifica `config/default.yaml`:

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

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### 4. `scripts/set.py` — Programa de agarre y colocación

Función: Agarrar el plátano y colocarlo en la caja.

```bash
python scripts/set.py
```

Flujo completado:

1. Inicialización de cámara y brazo, movimiento a la posición de listo
2. Vista previa de cámara en tiempo real + detección de objetos YOLO y segmentación de instancias
3. Pulsar `G` para congelar el fotograma, calcular la pose objetivo del brazo mediante la transformación mano-ojo
4. El brazo se mueve para agarrar el plátano y levantarlo
5. El brazo coloca el plátano en la caja y vuelve a la pose inicial
6. Pulsar `Q` para salir del sistema, el brazo vuelve a la posición cero

</div>
</section>
</div>

### 9. Módulo avanzado GraspNet (opcional)

La ruta predeterminada del SDK de Python / OBB no requiere GraspNet. Sigue estos pasos solo cuando necesites estimación de pose de agarre 6D a partir de nubes de puntos RGB-D.

<div className="rebot-step-flow">
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### Paso 1. Instalar GraspNet y los operadores CUDA

No necesitas GraspNet para `scripts/main.py` o `scripts/ordinary_grasp_pipeline.py`. Configúralo solo cuando quieras ejecutar `scripts/graspnet_camera_demo.py` o `scripts/grasp.py`, que requieren GraspNet, PyTorch con CUDA habilitado, los operadores CUDA PointNet2/knn y un checkpoint preentrenado.

Las extensiones `pointnet2` / `knn` de GraspNet requieren un compilador CUDA. Antes de empezar, confirma que `nvcc` está disponible en el entorno actual y compara su versión de CUDA con la versión usada para compilar PyTorch:

```bash
nvcc --version
python -c "import torch; print(torch.__version__, torch.version.cuda)"
```

PyTorch se instala por separado en el Paso 2 de la instalación básica. GraspNet requiere una GPU NVIDIA y soporte CUDA funcional; omite esta sección si seguiste la opción de CPU. Completa las comprobaciones siguientes antes de configurar el compilador.

**Paso 1: Confirma tu GPU**

```bash
nvidia-smi
```

El controlador debe reconocer tu GPU NVIDIA. Instalar solo el CUDA Toolkit no permite que las gráficas integradas Intel / AMD ejecuten los operadores CUDA de este proyecto.

**Paso 2: Confirmar el soporte CUDA de PyTorch**

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())"
```

Si `torch.cuda.is_available()` imprime `True`, continúa con el siguiente paso. Si falta PyTorch, `torch.version.cuda` es `None` o CUDA no está disponible, vuelve al Paso 2 de la instalación básica y completa la instalación y verificación de NVIDIA. Al cambiar entre compilaciones de CPU y CUDA, elimina la compilación antigua antes de reinstalar.

**Paso 3: Instalar el compilador CUDA que coincida con tu PyTorch**

`pointnet2` / `knn` son extensiones CUDA locales: la versión de CUDA reportada por `nvcc --version` debe coincidir con `torch.version.cuda` al compilar, de lo contrario la compilación falla con `The detected CUDA version (...) mismatches the version that was used to compile PyTorch (...)`. Comprueba ambas versiones primero:

```bash
nvcc --version
python -c "import torch; print(torch.version.cuda)"
```

Tomando como ejemplo que `torch.version.cuda` muestre `12.8`, instala el compilador correspondiente dentro del entorno conda:

```bash
conda install -c nvidia cuda-nvcc=12.8 cuda-cudart-dev=12.8

which nvcc       # should point to $CONDA_PREFIX/bin/nvcc, not /usr/bin/nvcc
nvcc --version   # should match torch.version.cuda
```

`cuda-nvcc` proporciona el compilador y `cuda-cudart-dev` proporciona las cabeceras de CUDA bajo `targets/x86_64-linux/include`; ambos son necesarios. Una vez que el entorno de conda está activado, `$CONDA_PREFIX/bin` precede a las rutas del sistema, por lo que el `nvcc` de conda sustituye automáticamente al antiguo del sistema (por ejemplo CUDA 11.5 de los repositorios de Ubuntu); no es necesario desinstalar la CUDA del sistema.

:::warning
No rebajes la versión de PyTorch para que coincida con un `nvcc` antiguo del sistema: las versiones antiguas de CUDA pueden no ser compatibles con la arquitectura de tu GPU (CUDA 11.5 admite como máximo sm_86; la serie RTX 40 requiere CUDA 11.8+ y la serie RTX 50 requiere CUDA 12.8+), y las compilaciones antiguas de PyTorch pueden ser incompatibles con otras dependencias del proyecto, como las versiones recientes de ultralytics.
:::

**Paso 4: Verificar**

```bash
python -c "import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())"
nvcc --version
```

Cuando ambas versiones de CUDA coinciden y `torch.cuda.is_available()` imprime `True`, la configuración de PyTorch está completa y puedes continuar compilando los operadores CUDA.

```bash
cd sdk
git clone https://github.com/graspnet/graspnet-baseline.git
cd graspnet-baseline

# Install PyTorch for your CUDA version first, then install GraspNet runtime dependencies
pip install open3d tensorboard Pillow tqdm

# Configure CUDA build paths before building the local operators.
# Note: use the conda cuda-toolkit targets directory for headers/libraries;
# do not mix in the pip nvidia/cu13 directory (a version mismatch with conda nvcc causes build errors).
export CUDA_HOME=$CONDA_PREFIX
export TORCH_CUDA_ARCH_LIST="$(python -c 'import torch; major, minor = torch.cuda.get_device_capability(); print(f"{major}.{minor}")')"
export CPATH=$CONDA_PREFIX/targets/x86_64-linux/include:$CPATH
export CPLUS_INCLUDE_PATH=$CONDA_PREFIX/targets/x86_64-linux/include:$CPLUS_INCLUDE_PATH
export LIBRARY_PATH=$CONDA_PREFIX/targets/x86_64-linux/lib:$CONDA_PREFIX/lib:$LIBRARY_PATH
export LD_LIBRARY_PATH=$CONDA_PREFIX/targets/x86_64-linux/lib:$CONDA_PREFIX/lib:$LD_LIBRARY_PATH

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
Nota: Si sigues la documentación del repositorio oficial graspnet-baseline y usas `python setup.py install`, pueden producirse errores relacionados con CUDA / PyTorch. Recomendamos usar `pip install . --no-build-isolation` para que la extensión se compile contra la configuración de PyTorch y CUDA ya instalada en el entorno de conda activo.
:::

:::tip
Si la compilación falla con `fatal error: cusparse.h: No such file or directory`, ejecuta `find $CONDA_PREFIX -name cusparse.h` y añade el directorio que contiene `cusparse.h` a `CPATH` / `CPLUS_INCLUDE_PATH` (con el `cuda-toolkit` de conda esto suele ser `$CONDA_PREFIX/targets/x86_64-linux/include`). Si obtienes errores relacionados con cabeceras como `'__NV_IS_DEVICE' was not declared in this scope`, normalmente se deben a mezclar las cabeceras de `nvidia/cu13` instaladas por pip con la versión de `nvcc` de conda; cambia a las rutas `targets` de conda indicadas arriba y vuelve a compilar.
:::

:::tip
Además, las dependencias antiguas de la API de GraspNet pueden seguir usando el nombre de paquete obsoleto `sklearn`. El comando `sed` lo sustituye por el nombre de paquete actualmente recomendado `scikit-learn` para evitar `The 'sklearn' PyPI package is deprecated` durante la instalación. A menos que también actualices las dependencias antiguas de la API de GraspNet, mantén su restricción `numpy==1.23.4` porque `transforms3d==0.3.1` sigue usando alias antiguos de NumPy como `np.float`.
:::

**Configurar el modelo preentrenado**

Descarga los pesos preentrenados oficiales de GraspNet desde el repositorio oficial graspnet-baseline [Google](https://drive.google.com/file/d/1hd0G8LN6tRpi4742XOTEisbTXNZ-1jmk/view), [Baidu](https://pan.baidu.com/s/1Eme60l39tTZrilF0I86R5A), y luego coloca `checkpoint-rs.tar` en:

```bash
mkdir -p ~/rebot_grasp/sdk/graspnet-baseline/checkpoints

sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

Luego verifica en `config/default.yaml`:

```yaml
graspnet:
  checkpoint: "checkpoint-rs.tar"
```

El campo `checkpoint` admite tres formas: un nombre de archivo se resuelve bajo `sdk/graspnet-baseline/checkpoints/`; una ruta relativa se resuelve desde la raíz del proyecto; una ruta absoluta se usa directamente.

</div>
</section>
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### Paso 2. Ejecutar la demo de estimación con cámara de GraspNet

```bash
python scripts/graspnet_camera_demo.py
```

Este script ejecuta la estimación de poses de agarre 6D de GraspNet solo con la cámara RGB-D, sin conectar al brazo robótico. Mantiene una vista previa en vivo de la cámara, usa cajas delimitadoras de YOLO para seleccionar el área objetivo y filtra las candidatas de escena completa de GraspNet factibles según la bbox objetivo.

Controles clave:

- `G` / `Space`: ejecutar la inferencia de GraspNet en el fotograma actual
- `R`: reanudar la vista previa en vivo
- `Q` / `Esc`: salir

Después de la inferencia, Open3D puede visualizar la nube de puntos y las candidatas de agarre.

</div>
</section>
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### Paso 3. Ejecutar el programa de agarre robótico de GraspNet

```bash
python scripts/grasp.py
python scripts/grasp.py --dry-run
python scripts/grasp.py --target-class "light blue coffee cup"
```

Este script conecta la estimación de GraspNet con el flujo de ejecución del brazo robótico. YOLO selecciona el objetivo, GraspNet produce una pose de agarre 6D, la calibración mano-ojo la transforma al marco base del robot, y el script comprueba la alcanzabilidad por IK antes de ejecutar la secuencia de movimientos de pre-agarre, agarre y retirada.

Ejecutar `python scripts/grasp.py` inicia el flujo completo de agarre robótico de GraspNet y controla el brazo robótico. `--dry-run` imprime la pose objetivo y el resultado del filtrado de candidatas y omite el movimiento de agarre; el script actual aún inicializa el brazo, lo mueve a la pose de listo y realiza la limpieza y el retorno a origen al salir. `--target-class "light blue coffee cup"` especifica la clase objetivo de YOLO y solo filtra y agarra las candidatas de GraspNet para esa clase.

</div>
</section>
</div>

### 10. Preguntas frecuentes (FAQ)

<h4>1. <code>ModuleNotFoundError: No module named 'motorbridge'</code></h4>

Esto significa que las dependencias del SDK del brazo robótico no están instaladas en el entorno actual de Python. `conda env update` solo actualiza el entorno base; instala las dependencias del proyecto por separado. Ejecuta lo siguiente desde la raíz del proyecto:

```bash
conda activate rebotarm
conda env update -n rebotarm -f environment.yml
# Complete the PyTorch installation in basic installation Step 2 first.
python -m pip install -r requirements.txt -c requirements-pytorch.txt
cd sdk/reBotArm_control_py && python -m pip install -e .
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
- La altura de instalación de la cámara con respecto al área de trabajo
- Las propiedades reflectantes de la superficie del objetivo

<h4>4. GraspNet informa que <code>pointnet2_utils</code> no se puede importar desde <code>pointnet2</code></h4>

Esto normalmente significa que la extensión local de CUDA bajo `sdk/graspnet-baseline/pointnet2` no se compiló en el entorno de conda activo, o que Python está resolviendo un paquete `pointnet2` diferente. Asegúrate de que el entorno del proyecto esté activo y luego vuelve a compilar tanto `pointnet2` como `knn` en ese mismo entorno:

```bash
conda activate rebotarm
cd sdk/graspnet-baseline/pointnet2
pip install . --no-build-isolation

cd ../knn
pip install . --no-build-isolation
```

Verifica (`pointnet2_utils` / `knn_modules` se importan como módulos de nivel superior desde los directorios fuente, que es también como los importa `models/`; los scripts de agarre añaden automáticamente los directorios fuente a `sys.path`):

```bash
cd sdk/graspnet-baseline
python -c "import sys; sys.path[:0]=['pointnet2','knn']; import pointnet2_utils, knn_modules; print('import works')"
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

Si necesitas especificar manualmente la arquitectura de compilación, establece `TORCH_CUDA_ARCH_LIST` antes de volver a compilar. Elige el valor según la arquitectura de tu GPU y la versión de PyTorch/CUDA.

<h4>6. La inferencia de GraspNet informa <code>RuntimeError: CPU not supported</code></h4>

Los operadores de muestreo en `pointnet2` solo admiten tensores CUDA. Confirma que CUDA está disponible, que la red de GraspNet y la nube de puntos de entrada están en la GPU, y que `pointnet2` / `knn` se compilaron contra la versión de PyTorch en el entorno activo.

```bash
python -c "import torch; print(torch.cuda.is_available())"
```

Si la salida es `False`, corrige primero la instalación de CUDA / PyTorch. Si es `True` pero el error persiste, vuelve a compilar `pointnet2` y `knn`.

</TabItem>
<TabItem value="ros2-yoloe" label="Method 2 · ROS 2 / YOLOE">

## Método de agarre visual 2

### 1. Descripción general del proyecto

Este flujo de trabajo utiliza **ROS 2** y **YOLOE** para la detección de objetos, el agarre y la colocación en el reBot Arm B601-RS. Inicia el brazo, la cámara de profundidad y los nodos de agarre en terminales separadas.

Las cámaras de profundidad compatibles son **Orbbec Gemini 2** y **RealSense D405 / D435i**. El modelo del robot proporciona extrínsecos predefinidos para el montaje de la cámara, por lo que puedes omitir la recopilación de datos de calibración mano-ojo con una placa de calibración. Usa el soporte y la posición de montaje especificados para tu cámara. Las tolerancias de montaje y de las piezas impresas pueden introducir errores. Comprueba TF y la pose objetivo antes de ajustar finamente los desplazamientos.

### 2. Configuración del entorno

Este flujo de trabajo utiliza Ubuntu 22.04, ROS 2 Humble, Python 3.10 del sistema y un entorno Conda dedicado llamado `yolo`. Configura y compila juntos el brazo, el controlador de la cámara y los paquetes de agarre visual en el entorno del sistema antes de crear el entorno Conda para la inferencia con YOLOE.

Ejecuta los pasos 1–4 en una terminal nueva con Conda inactivo. Carga solo la configuración de ROS del sistema y deja sin cargar cualquier espacio de trabajo antiguo. Las terminales A, B, D y E también usan el entorno del sistema. Usa el entorno `yolo` solo en la terminal C. Los archivos de entorno y los comandos de instalación del flujo de trabajo del SDK de Python / OBB se aplican solo a ese flujo de trabajo.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">1</span>
<div className="rebot-step-content">

#### Paso 1. Instalar el espacio de trabajo ROS 2 del brazo robótico

Sigue la guía [reBot Arm B601-RS ROS 2 Integration](https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_ros2_integration/) para preparar el brazo e instalar ROS 2 Humble, las herramientas de compilación, el espacio de trabajo del brazo y el SDK de bajo nivel. Confirma que el espacio de trabajo del brazo se compila correctamente. Continúa usando el mismo espacio de trabajo `~/rebotarm_ros2` para esta guía.

```bash
source /opt/ros/humble/setup.bash
echo "$ROS_DISTRO"
sudo apt update
sudo apt install -y python3-rosdep python3-colcon-common-extensions git wget cmake build-essential
```

Espera que `ROS_DISTRO` muestre `humble`. Si el espacio de trabajo ya contiene alguno de los repositorios siguientes, comprueba su rama y contenido antes de continuar. Clona cada repositorio solo una vez por ruta.

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">2</span>
<div className="rebot-step-content">

#### Paso 2. Instalar la cámara

Despliega las instrucciones de configuración para tu cámara.

<details className="content-details">
<summary>Haz clic para desplegar la configuración de Gemini 2</summary>

Clona el SDK de Orbbec ROS 2 en el espacio de trabajo y cambia a la rama `v2-main`.

```bash
cd ~/rebotarm_ros2/src
git clone https://github.com/xiehuangbao888/OrbbecSDK_ROS2.git
cd OrbbecSDK_ROS2
git checkout v2-main
```

Instala las dependencias nativas indicadas en el repositorio del controlador. El paso 3 instala juntas las dependencias de ROS.

```bash
sudo apt install -y libgflags-dev nlohmann-json3-dev libgoogle-glog-dev libdw-dev libssl-dev mesa-utils libgl1 \
  ros-humble-image-transport-plugins ros-humble-compressed-image-transport
```

Instala las reglas de udev.

```bash
cd ~/rebotarm_ros2/src/OrbbecSDK_ROS2/orbbec_camera/scripts
sudo bash install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

</details>

<details className="content-details">
<summary>Haz clic para desplegar la configuración de D405 / D435i</summary>

1. Instala las dependencias de compilación y luego clona el SDK de RealSense y cambia a `v2.58.1`.

```bash
sudo apt update
sudo apt install -y cmake build-essential git pkg-config libusb-1.0-0-dev libudev-dev libssl-dev v4l-utils
```

```bash
cd ~
git clone https://github.com/realsenseai/librealsense.git
cd librealsense
git checkout v2.58.1
```

2. Instala las reglas de udev.

```bash
cd ~/librealsense
./scripts/setup_udev_rules.sh
```

3. Compila e instala el SDK.

Esta compilación utiliza el backend RSUSB para evitar parchear el módulo UVC del kernel. Desactiva los ejemplos y las extensiones GLSL. `BUILD_TOOLS=ON` mantiene disponibles las herramientas de línea de comandos como `rs-enumerate-devices`. `realsense-viewer` es un ejemplo gráfico.

```bash
cd ~/librealsense &&
mkdir -p build && cd build &&
cmake .. -DCMAKE_BUILD_TYPE=Release \
  -DFORCE_RSUSB_BACKEND=ON \
  -DBUILD_EXAMPLES=OFF \
  -DBUILD_TOOLS=ON \
  -DBUILD_GRAPHICAL_EXAMPLES=OFF \
  -DBUILD_GLSL_EXTENSIONS=OFF &&
cmake --build . --parallel 2 &&
sudo cmake --install . &&
sudo ldconfig
```

:::tip CMake no puede encontrar `OpenGL::GL`
En librealsense `v2.58.1`, desactivar solo `BUILD_GRAPHICAL_EXAMPLES` deja los ejemplos estándar enlazados todavía contra `OpenGL::GL`, lo que puede impedir que CMake genere los archivos de compilación. Si encontraste este error con `BUILD_EXAMPLES=ON`, vuelve a ejecutar los comandos anteriores para actualizar las opciones en el directorio `build` existente.
:::

4. Clona el controlador ROS 2 de RealSense.

```bash
cd ~/rebotarm_ros2/src
git clone https://github.com/xiehuangbao888/realsense-ros.git
```

Instala las dependencias ROS del controlador de la cámara en el paso 3 y compila el espacio de trabajo en el paso 4. Vuelve a conectar la cámara y ejecuta `lsusb -t` para verificar que está conectada por USB 3.x. La velocidad normalmente debería ser `5000M` o superior.

</details>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">3</span>
<div className="rebot-step-content">

#### Paso 3. Añadir el paquete de agarre visual e instalar dependencias de ROS

```bash
cd ~/rebotarm_ros2/src/
git clone https://github.com/xiehuangbao888/rebot_visual_grasp.git
```

Inicializa `rosdep` en el primer uso. Si informa `default sources list file already exists`, pasa directamente a actualizar el índice.

```bash
sudo rosdep init
```

```bash
rosdep update
cd ~/rebotarm_ros2
rosdep install --from-paths src --ignore-src -r -y --rosdistro humble --skip-keys="librealsense2 orbbec_description realsense2_description"
```

Este comando instala las dependencias del sistema declaradas por los paquetes ROS clonados, incluyendo `diagnostic_updater`, `cv_bridge` y `xacro`. La configuración de RealSense ya instala `librealsense2` desde el código fuente. Las otras dos claves son paquetes de descripción de cámara. La fuente clonada en el paso 2 proporciona el paquete de descripción para tu cámara, y el paquete de la otra cámara es opcional para esta configuración. Omitir estas claves evita reinstalar el SDK o quedar bloqueado por dependencias de la otra cámara.

Espera `All required rosdeps installed successfully`. Resuelve cualquier error de dependencia restante antes de compilar. Revisa toda la salida para confirmar que la instalación se completó correctamente.

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">4</span>
<div className="rebot-step-content">

#### Paso 4. Compilar el espacio de trabajo

Usa `--symlink-install` de forma consistente al compilar este espacio de trabajo, incluso después de añadir el controlador de la cámara y el paquete de agarre visual.

:::tip Conflictos con directorios de compilaciones anteriores
Si compilaste previamente sin `--symlink-install`, cambiar a esta opción puede producir `failed to create symbolic link` y `existing path cannot be removed: Is a directory`. Los directorios de la compilación anterior entran en conflicto con los nuevos enlaces simbólicos. Limpia las salidas de compilación y vuelve a compilar.

Abre una terminal nueva con Conda inactivo y sin haber cargado `install/setup.bash` del espacio de trabajo. Ejecuta los siguientes comandos.

```bash
cd ~/rebotarm_ros2
rm -rf build install log
```

Esto elimina los directorios build, install y log del espacio de trabajo y conserva `src` y otros archivos fuente. Luego vuelve a compilar todo el espacio de trabajo usando los comandos para tu cámara.
:::

```bash
cd ~/rebotarm_ros2
source /opt/ros/humble/setup.bash
```

<Tabs groupId="rebot-ros2-camera-build" defaultValue="realsense">
<TabItem value="realsense" label="RealSense D405 / D435i">

```bash
colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Release -DUSE_LIFECYCLE_NODE=OFF
```

</TabItem>
<TabItem value="orbbec" label="Orbbec Gemini 2">

```bash
colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Release
```

</TabItem>
</Tabs>

Después de que la compilación se complete correctamente, carga el espacio de trabajo y comprueba el paquete de agarre visual.

```bash
source ~/rebotarm_ros2/install/setup.bash
ros2 pkg prefix rebot_visual_grasp
```

Para RealSense, ejecuta también `ros2 pkg prefix realsense2_camera`. Para Gemini 2, ejecuta `ros2 pkg prefix orbbec_camera`. Espera la ruta de instalación del paquete seleccionado en el espacio de trabajo actual.

**Comprobar el resultado de la compilación**

Revisa el `Summary` final. La compilación se realizó correctamente si todos los paquetes muestran `Finished` y ninguno muestra `Failed` o `Aborted`. Por ejemplo, un espacio de trabajo con el controlador de RealSense y el paquete de agarre visual puede mostrar la siguiente salida.

```text
Summary: 11 packages finished [33.8s]
  4 packages had stderr output: realsense2_camera_msgs realsense2_description rebotarm_moveit_config rebotarm_msgs
```

El número de paquetes y los tiempos de compilación varían según el espacio de trabajo y el ordenador. `packages had stderr output` significa que esos paquetes escribieron en la salida de error estándar. Revisa sus registros para ver qué ocurrió. Si la salida consiste solo en las advertencias de CMake descritas a continuación, la compilación aún puede ser correcta.

:::tip Rutas obsoletas tras la limpieza y advertencias de CMake
Si cargaste `install/setup.bash` del espacio de trabajo, eliminaste `install` y volviste a compilar en la misma terminal, puedes ver advertencias sobre rutas inexistentes en `AMENT_PREFIX_PATH` o `CMAKE_PREFIX_PATH`. La terminal aún conserva las rutas de instalación anteriores. Si todos los paquetes se compilan correctamente, carga el nuevo `install/setup.bash` como se muestra arriba y continúa.

Para compilaciones posteriores, usa una terminal nueva y carga solo `/opt/ros/humble/setup.bash` antes de compilar. Si `~/.bashrc` carga automáticamente el espacio de trabajo, desactiva temporalmente esa línea antes de volver a compilar después de una limpieza.

Con `--cmake-args -DUSE_LIFECYCLE_NODE=OFF`, algunos paquetes pueden informar `Manually-specified variables were not used by the project: USE_LIFECYCLE_NODE`. Esta advertencia de CMake es esperada para los paquetes fuera del controlador que usa la opción.
:::

Después de compilar el espacio de trabajo de ROS, crea el entorno de inferencia Conda en el paso 5. En cada terminal nueva, carga ambos archivos de configuración antes de ejecutar comandos de ROS.

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
```

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">5</span>
<div className="rebot-step-content">

#### Paso 5. Configurar el entorno de YOLOE

`grasp_yolo` llama a Ultralytics YOLOE desde Python. Usa el intérprete de Python en un entorno Conda dedicado para este nodo.

Este paso se aplica a hosts x86_64 que ejecutan Ubuntu 22.04, ROS 2 Humble y Python 3.10. Crea el entorno, elige un backend de PyTorch y luego instala las dependencias de visión y de tiempo de ejecución de Python para ROS. Comprueba las dependencias dentro de Conda por separado porque los paquetes de Python instalados mediante apt pueden no estar disponibles allí.

<div className="rebot-step-flow rebot-step-flow--substeps">
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5.1</span>
<div className="rebot-step-content">

##### 5.1 Crear el entorno base

```bash
conda create -n yolo python=3.10
conda activate yolo
python -c "import sys; print(sys.executable)"
```

:::note Expected result
La ruta de Python termina en `envs/yolo/bin/python` dentro de tu instalación de Conda. Si ya tienes un entorno `yolo`, actívalo y continúa con PyTorch y las dependencias del proyecto a continuación.
:::

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5.2</span>
<div className="rebot-step-content">

##### 5.2 Instalar PyTorch para tu hardware

Ambas pestañas instalan PyTorch `2.9.1`, torchvision `0.24.1` y torchaudio `2.9.1` desde sus respectivos índices de paquetes. Selecciona un backend en el entorno `yolo` activo.

<Tabs groupId="rebot-ros2-pytorch-backend" defaultValue="cpu">
<TabItem value="cpu" label="CPU (no NVIDIA GPU)">

Usa esta opción en ordenadores con gráficos integrados Intel o AMD, o para verificar primero la configuración en la CPU.

```bash
python -m pip install torch==2.9.1 torchvision==0.24.1 torchaudio==2.9.1 --index-url https://download.pytorch.org/whl/cpu
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA available:', torch.cuda.is_available()); print(torch.rand(2, 3))"
```

:::note Expected result
La ruta de PyTorch está dentro del entorno Conda activo y el comando imprime un tensor aleatorio. `CUDA available: False` es lo esperado para este backend. Establece `-p yolo_device:=cpu` al iniciar `grasp_yolo`. La tasa de fotogramas de inferencia en CPU depende del modelo y del ordenador.
:::

</TabItem>
<TabItem value="nvidia" label="NVIDIA GPU (CUDA)">

Verifica que el controlador detecta la GPU NVIDIA antes de instalar una compilación CUDA de PyTorch. El ejemplo usa CUDA 12.8, que requiere compatibilidad tanto de la arquitectura de la GPU como del controlador.

```bash
nvidia-smi
python -m pip install torch==2.9.1 torchvision==0.24.1 torchaudio==2.9.1 --index-url https://download.pytorch.org/whl/cu128
python -c "import torch; print(torch.__version__, torch.__file__); print('CUDA build:', torch.version.cuda); print('CUDA available:', torch.cuda.is_available()); print(torch.rand(2, 3, device='cuda'))"
```

:::note Expected result
`nvidia-smi` lista la GPU, la ruta de PyTorch está dentro del entorno Conda activo y el comando imprime `CUDA available: True` y un tensor CUDA. Usa `-p yolo_device:=0` al iniciar `grasp_yolo` para seleccionar la GPU 0.
:::

:::tip Choose a CUDA build
Usa la [lista oficial de versiones de PyTorch](https://pytorch.org/get-started/previous-versions/) para elegir una compilación que sea compatible con tu GPU, controlador y versión de Python. Ten en cuenta los tres al seleccionar una compilación, ya que la versión de CUDA mostrada solo por `nvidia-smi` es insuficiente. La rueda precompilada proporciona el runtime de CUDA para la inferencia estándar de YOLOE.

Si CUDA no está disponible, comprueba el controlador, la arquitectura de la GPU y la rueda seleccionada, o cambia a la pestaña de CPU para verificar la configuración básica. Si cambias la versión de PyTorch, actualiza las versiones correspondientes de torchvision y torchaudio y los fijados en la siguiente fase.
:::

</TabItem>
</Tabs>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5.3</span>
<div className="rebot-step-content">

##### 5.3 Instalar y verificar las dependencias del proyecto

Después de instalar un backend, mantén `yolo` activo e instala las dependencias de visión y de tiempo de ejecución de Python. El comando conserva las versiones coincidentes de PyTorch y resuelve conjuntamente las restricciones de NumPy y OpenCV.

```bash
python -m pip install "ultralytics==8.4.202" "torch==2.9.1" "torchvision==0.24.1" "torchaudio==2.9.1" "numpy==1.26.4" "opencv-python==4.11.0.86" transforms3d pyyaml lark typeguard

# YOLOE open-vocabulary classes require the Ultralytics CLIP package.
python -m pip install git+https://github.com/ultralytics/CLIP.git
```

:::tip ROS dependency messages during PyTorch installation
Si ya has hecho source de ROS 2, pip puede informar de que `generate-parameter-library-py` requiere `pyyaml` y `typeguard`. Comprueba que la línea final `Successfully installed` incluya `torch`, `torchvision` y `torchaudio`. Instala ambas dependencias que faltan con el comando de esta fase y luego ejecuta `pip check` y las pruebas de importación que aparecen a continuación.
:::

Si compilaste `rebotarm_agent` con la configuración predeterminada del workspace de arm, instala su dependencia declarada para que `pip check` pueda pasar después de hacer source del workspace completo.

```bash
python -m pip install fastmcp
```

`fastmcp` es compatible con la función Agent. Instálalo solo si tu workspace contiene `rebotarm_agent`.

Este flujo de trabajo fija NumPy en `1.26.4` y OpenCV en `4.11.0.86`. Mantén estos fijados y las versiones coincidentes de PyTorch al instalar o actualizar Ultralytics.

:::tip OpenCV and NumPy dependency conflicts
Si ejecutaste `pip install -U ultralytics` antes de instalar por separado NumPy `1.26.4`, pip puede informar de que `opencv-python ... requires numpy>=2`. Por ejemplo, OpenCV `5.0.0.93` requiere NumPy 2, mientras que este flujo de trabajo usa NumPy `1.26.4`. Un mensaje final de `Successfully installed` aún puede dejar dependencias en conflicto.

Mantén el entorno `yolo` activo, instala las versiones compatibles y luego ejecuta las comprobaciones de dependencias e importación que aparecen a continuación.

```bash
conda activate yolo
python -m pip install "numpy==1.26.4" "opencv-python==4.11.0.86" transforms3d
```

Conserva solo un paquete de OpenCV que proporcione `cv2` en el entorno. Si instalaste varias variantes como `opencv-python`, `opencv-contrib-python` o los paquetes headless correspondientes, desinstálalos y vuelve a instalar el paquete fijado.

```bash
python -m pip uninstall -y opencv-python opencv-contrib-python opencv-python-headless opencv-contrib-python-headless
python -m pip install "numpy==1.26.4" "opencv-python==4.11.0.86" transforms3d
```
:::

**Comprobar dependencias y verificar YOLOE**

Haz source de la configuración de ROS del sistema y del workspace compilado, luego usa el Python de Conda activo para comprobar las dependencias.

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
python -m pip check
python -c "import sys, torch, torchvision, torchaudio, cv2, numpy, yaml, lark, transforms3d, clip; from ultralytics import YOLOE; print('Python:', sys.executable); print('PyTorch:', torch.__version__); print('OpenCV:', cv2.__version__); print('NumPy:', numpy.__version__); print('CUDA available:', torch.cuda.is_available()); print('YOLOE OK')"
python -c "import rclpy, cv_bridge, launch_ros; import rebot_visual_grasp.grasp_yolo; print('ROS grasp imports OK')"
```

:::note Expected result
`pip check` informa `No broken requirements found.` La ruta de Python está dentro del entorno Conda activo. La comprobación de visión imprime `OpenCV: 4.11.0`, `NumPy: 1.26.4` y `YOLOE OK`. La comprobación de importación de ROS imprime `ROS grasp imports OK`. Espera `CUDA available: False` para el backend de CPU y `True` para el backend de GPU. Estas comprobaciones solo importan módulos y dejan el brazo inactivo.
:::

Si `pip check` informa `launch-ros ... requires pyyaml`, verifica que instalaste las dependencias anteriores en `yolo`. Si informa `rebotarm-agent ... requires fastmcp`, instala la dependencia de Agent como se describió anteriormente. Si fallan las importaciones de `rclpy`, `cv_bridge` o de módulos del workspace, comprueba las dependencias de ROS del sistema, los resultados de compilación del workspace y ambos comandos `source`. Usa esos paquetes de ROS desde el sistema y el workspace.

Espera hasta que las comprobaciones de dependencias e importación pasen antes de descargar los pesos e iniciar los nodos de agarre.

</div>
</section>
</div>

**Descargar los pesos en `~/rebot_visual_model`**

```bash
mkdir -p ~/rebot_visual_model && cd ~/rebot_visual_model

# MobileCLIP is required by YOLOE set_classes and is about 242 MB.
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/mobileclip2_b.ts

# The segmentation weights can download on first use. Download them here to verify the setup before launch.
wget -c https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26s-seg.pt
```

Verifica que YOLOE puede cargar los pesos y establecer clases de texto desde el directorio del modelo. Esto detecta archivos de modelo o dependencias de CLIP que falten antes de iniciar el brazo.

```bash
cd ~/rebot_visual_model
python -c "from ultralytics import YOLOE; model = YOLOE('yoloe-26s-seg.pt'); model.set_classes(['cube', 'box']); print('YOLOE weights and text encoder OK')"
```

Espera `YOLOE weights and text encoder OK`. La primera carga puede tardar más. Este comando solo carga el modelo de visión y deja el brazo desconectado. Resuelve cualquier peso o dependencia que falte antes de ejecutar el proyecto.

</div>
</section>

</div>

### 3. Ejecutar el proyecto

Antes de empezar, confirma que el brazo está encendido, la interfaz CAN es `can0` y que la Gemini 2, D405 o D435i está conectada por USB. Luego levanta CAN.

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

:::warning The robotic arm will move
En la terminal C, `move_to_observation_on_start:=true` mueve el brazo a la pose de observación. La terminal D dispara el agarre y la colocación. Antes de empezar, comprueba la posición cero, el soporte de montaje, el espacio de trabajo y los offsets. Mantén a las personas y obstáculos fuera de la trayectoria de movimiento y prepárate para detener el brazo.
:::

Inicia las terminales A, B, C y D en ese orden, dejando las terminales anteriores en ejecución. Selecciona los comandos de lanzamiento para tu cámara. También puedes escribir un script de inicio para lanzar toda la pila a la vez.

<div className="rebot-step-flow">
<section className="rebot-step-item">
  <span className="rebot-step-number">A</span>
<div className="rebot-step-content">

#### Terminal A — Iniciar el brazo y RViz

<details className="content-details">
<summary>Haz clic para expandir Gemini 2</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp bringup_with_camera.launch.py model:=rs channel:=can0 use_rviz:=true
```

</details>

<details className="content-details">
<summary>Haz clic para expandir D405</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp bringup_with_d405.launch.py model:=rs channel:=can0 use_rviz:=true
```

</details>

<details className="content-details">
<summary>Haz clic para expandir D435i</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp bringup_with_d435i.launch.py model:=rs channel:=can0 use_rviz:=true
```

</details>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">B</span>
<div className="rebot-step-content">

#### Terminal B — Iniciar la cámara

<details className="content-details">
<summary>Haz clic para expandir Gemini 2</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch orbbec_camera gemini2.launch.py
```

</details>

<details className="content-details">
<summary>Haz clic para expandir D405</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch realsense2_camera rs_launch.py \
  align_depth.enable:=true \
  depth_module.depth_profile:=640x360x30 \
  depth_module.color_profile:=640x360x30
```

</details>

<details className="content-details">
<summary>Haz clic para expandir D435i</summary>

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch realsense2_camera rs_launch.py \
  align_depth.enable:=true \
  depth_module.depth_profile:=640x480x30 \
  rgb_camera.color_profile:=640x480x30
```

</details>

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">C</span>
<div className="rebot-step-content">

#### Terminal C — Mover a la pose de observación e iniciar la detección YOLOE

Ejecuta primero `conda activate yolo`, o activa el entorno por su nombre real. El comando `python` usa el entorno activo y funciona tanto con Miniconda como con Miniforge. Los ejemplos usan `yolo_device:=cpu` de forma predeterminada. Para inferencia con GPU, pasa la comprobación de CUDA en el paso 5 y luego establece `yolo_device:=0`.

<details className="content-details">
<summary>Haz clic para expandir Gemini 2</summary>

```bash
conda activate yolo
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:="$HOME/rebot_visual_model/yoloe-26s-seg.pt" \
  -p target_class:="cube" \
  -p place_class:="box" \
  -p yolo_device:=cpu \
  -p grasp_z_offset_m:=0.01 \
  -p place_z_offset_m:=0.1 \
  -p grasp_x_offset_m:=-0.02 \
  -p grasp_y_offset_m:=0.002 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>

<details className="content-details">
<summary>Haz clic para expandir D405</summary>

```bash
conda activate yolo
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:="$HOME/rebot_visual_model/yoloe-26s-seg.pt" \
  -p color_topic:=/camera/camera/color/image_raw \
  -p depth_topic:=/camera/camera/aligned_depth_to_color/image_raw \
  -p color_info_topic:=/camera/camera/color/camera_info \
  -p optical_frame:=camera_color_optical_frame \
  -p target_class:=cube \
  -p place_class:=box \
  -p yolo_device:=cpu \
  -p grasp_z_offset_m:=0.01 \
  -p grasp_y_offset_m:=-0.005 \
  -p place_z_offset_m:=0.1 \
  -p grasp_x_offset_m:=-0.01 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>

<details className="content-details">
<summary>Haz clic para expandir D435i</summary>

```bash
conda activate yolo
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

python -m rebot_visual_grasp.grasp_yolo --ros-args \
  -p yolo_model:="$HOME/rebot_visual_model/yoloe-26s-seg.pt" \
  -p color_topic:=/camera/camera/color/image_raw \
  -p depth_topic:=/camera/camera/aligned_depth_to_color/image_raw \
  -p color_info_topic:=/camera/camera/color/camera_info \
  -p optical_frame:=camera_color_optical_frame \
  -p target_class:="cube" \
  -p place_class:="box" \
  -p yolo_device:=cpu \
  -p grasp_z_offset_m:=0.01 \
  -p place_z_offset_m:=0.1 \
  -p grasp_y_offset_m:=0.01 \
  -p grasp_x_offset_m:=-0.04 \
  -p move_to_observation_on_start:=true \
  -p auto_publish_on_detect:=true
```

</details>

| Parámetro | Descripción |
| ------------------ | ---------------------------------------------------------------------------- |
| `yolo_device:=cpu` | Usar la CPU de forma predeterminada. Después de verificar CUDA, establece `yolo_device:=0` para usar la GPU 0. |
| `target_class` | Clase de texto YOLOE para el objeto a agarrar. Ajústala para que coincida con el objeto. Se admiten las clases YOLO predeterminadas. |
| `place_class` | Clase de texto YOLOE para el objetivo de colocación. Ajústala para que coincida con el objetivo. Se admiten las clases YOLO predeterminadas. |
| `grasp_x_offset_m` | Desplazamiento hacia adelante o hacia atrás en `base_link`. Un valor negativo mueve el agarre hacia atrás. |
| `grasp_y_offset_m` | Desplazamiento lateral del agarre. `0.01` mueve el agarre 1 cm a la izquierda. Un valor negativo lo mueve a la derecha. |
| `grasp_z_offset_m` | Ajuste de la altura de agarre. El valor predeterminado es para el efector final flexible, que es más largo que el efector estándar. Ajusta este valor a la altura de tu efector final. |
| `place_z_offset_m` | Altura adicional por encima del punto de colocación en la que el brazo suelta el objeto. |

</div>
</section>
<section className="rebot-step-item">
  <span className="rebot-step-number">D</span>
<div className="rebot-step-content">

#### Terminal D — Disparar el agarre y la colocación

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash

ros2 launch rebot_visual_grasp grasp_go.launch.py
```

Para cambiar el retardo, añade el parámetro de lanzamiento. En este ejemplo se dispara después de 5 segundos.

```bash
ros2 launch rebot_visual_grasp grasp_go.launch.py trigger_delay_s:=5.0
```

</div>
</section>
<section className="rebot-step-item rebot-step-item--optional">
  <span className="rebot-step-number">E</span>
<div className="rebot-step-content">

#### Terminal E — Volver a la posición inicial (opcional)

En un apagado normal, el controlador del brazo intenta devolver el brazo a su posición inicial y desactivar los motores. Después de una interrupción anómala o un fallo de comunicación, el retorno automático a casa no es fiable. Para volver manualmente a la posición inicial, mantén el controlador en la terminal A en ejecución y asegúrate de que la trayectoria de movimiento esté despejada.

```bash
source /opt/ros/humble/setup.bash
source ~/rebotarm_ros2/install/setup.bash
ros2 service call /rebotarm/safe_home std_srvs/srv/Trigger {}
```

</div>
</section>
</div>

</TabItem>
</GraspingTabs>

## Contacto

- Soporte técnico: [Submit an Issue](https://github.com/Seeed-Projects/reBot-DevArm-Grasp/issues)
- Página del proyecto: [GitHub](https://github.com/Seeed-Projects/reBot-DevArm-Grasp)
- Foro: [Seeed Studio Forum](https://forum.seeedstudio.com/)

## Referencias

- [reBot Arm B601-RS Inicio Rápido](https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/)
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
- [realsense-ros](https://github.com/xiehuangbao888/realsense-ros)
- [RealSense SDK](https://github.com/realsenseai/librealsense)
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline)
- [Documentación de Graspnet (Anygrasp)](https://graspnet.net/)

</div>
