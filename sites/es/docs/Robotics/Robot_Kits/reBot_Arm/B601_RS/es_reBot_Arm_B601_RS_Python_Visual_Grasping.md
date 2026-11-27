---
description: Configura el agarre visual sobre mesa en el reBot Arm B601-RS con una Orbbec Gemini 336 y YOLOE. Previsualiza agarres OBB, realiza la calibración mano-ojo y ejecuta el brazo con backends opcionales AnyGrasp o GraspNet-Baseline.
title: reBot-RS Multi-Backend Visual Grasping
sidebar_label: reBot-RS Multi-Backend Visual Grasping
keywords:
  - reBot Arm B601-RS
  - RGB-D
  - YOLOE
  - OBB
  - AnyGrasp
  - GraspNet
  - Calibración mano-ojo
slug: /rebot_arm_b601_rs_python_visual_grasping
sku: 100019336
last_update:
  date: 2026-11-24
  author: LiJie
translation:
  skip: [zh-CN]
createdAt: '2026-11-23'
updatedAt: '2026-11-25'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_python_visual_grasping/
---

import '/src/css/rebot-wiki-style.css';
import GraspingTabs from '@site/src/components/robotics/RebotGraspingTabs';
import styles from '@site/src/components/robotics/rebot-grasping-demo.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="text--center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.webp" alt="reBot Arm B601-RS" width={800} height={586} style={{ height: 'auto' }} />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true" />
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>Consigue uno ahora</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7" />
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4" />
    </svg>
  </a>
</div>

<p className="text--center">
  <img src="https://img.shields.io/badge/Camera-Gemini%20336-teal.svg" alt="Cámara RGB-D Orbbec Gemini 336" />{' '}
  <img src="https://img.shields.io/badge/Python-3.10-blue.svg" alt="Python 3.10" />{' '}
  <img src="https://img.shields.io/badge/Version-v0.1.0-brightgreen.svg" alt="Versión v0.1.0" />{' '}
  <img src="https://img.shields.io/badge/Platform-Ubuntu%20x86--64-orange.svg" alt="Ubuntu x86-64" />
</p>

<p className="text--center"><strong>AnyGrasp · GraspNet · OBB · Calibración mano-ojo · YOLOE</strong></p>

Este tutorial utiliza una Orbbec Gemini 336 montada en el efector final del reBot Arm B601-RS para identificar y agarrar objetos sobre la mesa. YOLOE segmenta objetos usando etiquetas de texto. El backend de agarre estima poses de agarre a partir del contorno objetivo y los datos de profundidad. Tras la calibración mano-ojo, el software transforma los candidatos al marco de referencia de la base del robot y comprueba los límites del espacio de trabajo y la cinemática inversa (IK).

Comienza previsualizando candidatos de agarre desde el backend de caja delimitadora orientada (OBB) filtrada. Luego calibra la cámara y prueba un agarre con el brazo. Usa AnyGrasp o GraspNet-Baseline para estimar poses de agarre de seis grados de libertad a partir de nubes de puntos. Para un flujo de trabajo de pick-and-place con ROS 2, consulta el método ROS 2 en la [Demostración de agarre visual B601-RS](https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_grasping_demo/).

## Prepara el hardware y el host

- **Brazo robótico.** Reúne un reBot Arm B601-RS, una garra, una fuente de alimentación adecuada y un adaptador USB-a-CAN configurado. Completa primero el montaje, el ajuste de la posición cero y las comprobaciones básicas de comunicación. [Inicio rápido del B601-RS](https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/)
- **Cámara.** Usa una Orbbec Gemini 336, un cable de datos USB 3.0 y un soporte de cámara para el efector final. El proyecto también proporciona controladores para la Orbbec Gemini 2, RealSense D405 y RealSense D435i. Vuelve a comprobar la vista de la cámara y repite la calibración mano-ojo después de sustituir la cámara o el soporte. [Configuración del SDK de la cámara](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md#cameras)
- **Host.** Usa una máquina Ubuntu x86-64 con escritorio gráfico, Git y curl. Los scripts crean un entorno Conda llamado `rebot` con Python 3.10. AnyGrasp y GraspNet-Baseline requieren una GPU NVIDIA y un controlador compatibles.
- **Objeto de prueba y tablero de calibración.** Prepara un plátano u otro objeto de la lista de clases configurada. Para la calibración mano-ojo, fija de forma segura un tablero de calibración ArUco a la superficie de trabajo. [Descarga el tablero ArUco de 100 mm (PDF)](https://raw.githubusercontent.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/main/examples/hand_eye/boards/aruco_100mm.pdf)

## 1. Configura el entorno y los SDK

Clona el proyecto desde una terminal de Ubuntu. Ejecuta los comandos restantes desde la raíz del repositorio.

```bash
git clone https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping.git
cd Rebot-Arm-B601-Visual-Grasping
```

Abre `config/default.yaml` y establece `camera.type` para que coincida con tu dispositivo. Los valores predeterminados de la Gemini 336 son `orbbec_gemini336`, 640 × 480 y 30 FPS. Establece `camera.serial` si tienes varias cámaras del mismo modelo. Selecciona el modelo antes de ejecutar el script de configuración para que instale el controlador correspondiente.

**Elige configuración automática o manual.** La configuración automática te permite instalar lo que necesitas, desde una previsualización de cámara OBB en la CPU hasta todos los backends de agarre. Elige la configuración manual para instalar las dependencias componente por componente.

<div className={styles.page}>
<GraspingTabs defaultValue="automatic" queryString="grasping-setup">

<TabItem value="automatic" label="Configuración automática">

<h3 id="option-a--automatic-setup">Opción A — Configuración automática</h3>

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Comprueba e instala las dependencias</h4>

Elige uno de los siguientes conjuntos de comandos. Ejecuta en orden la comprobación inicial, el script de configuración y la comprobación posterior a la instalación. Si la comprobación inicial informa de dependencias que faltan, continúa con el comando de configuración. Puedes desconectar la cámara y el brazo durante la configuración.

**Solo para previsualización de cámara OBB**, puedes usar la CPU. Después de instalar y activar el entorno, continúa con la Sección 2.

```bash
bash scripts/check_env.sh --backend obb
bash scripts/setup_env.sh --backend obb
bash scripts/check_env.sh --backend obb
```

**Para agarre OBB con el brazo**, añade `--robot` para instalar y comprobar el SDK de control del B601. OBB puede ejecutarse en la CPU.

```bash
bash scripts/check_env.sh --backend obb --robot
bash scripts/setup_env.sh --backend obb --robot
bash scripts/check_env.sh --backend obb --robot
```

**Para instalar todos los backends y el SDK de control del B601**, usa una GPU NVIDIA y un controlador compatibles. Ejecuta `nvidia-smi -L` para confirmar que el host detecta la GPU antes de ejecutar estos comandos. El script de configuración compila los operadores CUDA necesarios.

```bash
bash scripts/check_env.sh
bash scripts/setup_env.sh
bash scripts/check_env.sh
```

- **Instala un único backend de nube de puntos.** Usa `--backend anygrasp` o `--backend graspnet` en los comandos de configuración y comprobación. Añade `--robot` si planeas agarrar con el brazo. Si la descarga de los pesos de GraspNet falla, añade `--checkpoint-file /path/to/checkpoint-rs.tar` al comando de configuración y sustituye la ruta por tu copia local.
- **Revisa los cambios.** El script instala los componentes que faltan y reutiliza los SDK de Git existentes. Muestra los cambios y pregunta antes de cambiar versiones de dependencias, compilaciones de Conda o ramas de SDK. Introduce `y` para confirmar. Pulsar Enter, introducir `n` o ejecutar de forma no interactiva omite estos cambios. Consulta los cambios aplicados debajo de `----`.
- **Comprueba el resultado.** Revisa el resumen debajo de `----`. El código de salida `3` significa que solo quedan elementos `[MANUAL]`. Para AnyGrasp, configura la licencia y los pesos como se describe a continuación. Para agarre con el brazo, genera la matriz mano-ojo en la Sección 3. Después de proporcionar los archivos para tu configuración, vuelve a ejecutar la comprobación con las mismas opciones.

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Activa el entorno</h4>

Si el script instaló Miniforge, ejecuta primero `source ~/miniforge3/etc/profile.d/conda.sh` en la terminal actual. Luego activa el entorno.

```bash
conda activate rebot
```

</div>
</div>

</div>

</TabItem>

<TabItem value="manual" label="Configuración manual">

<h3 id="option-b--manual-setup">Opción B — Configuración manual</h3>

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">

#### Crea el entorno e instala PyTorch

Ejecuta los siguientes comandos en una terminal con Conda disponible. El archivo `environment.yml` especifica Python 3.10, NumPy por debajo de la versión 2 y Pinocchio 3.9.0 para el B601. Si ya tienes un entorno `rebot`, actívalo y comprueba sus dependencias frente al archivo de entorno.

```bash
conda env create -f environment.yml
conda activate rebot
```

<Tabs defaultValue="cuda">

<TabItem value="cuda" label="GPU NVIDIA">

Instala la compilación de GPU de PyTorch para usar todos los backends o para ejecutar AnyGrasp o GraspNet. El proyecto ha verificado PyTorch 2.5.1 con CUDA 12.1. La comprobación debería mostrar `12.1` y `True`.

```bash
python -m pip install 'torch==2.5.1+cu121' 'torchvision==0.20.1+cu121' 'torchaudio==2.5.1+cu121' \
  --index-url https://download.pytorch.org/whl/cu121
python -c 'import torch; print(torch.__version__, torch.version.cuda, torch.cuda.is_available())'
```

</TabItem>

<TabItem value="cpu" label="CPU">

Para OBB en un sistema solo con CPU, instala la compilación de CPU de PyTorch.

```bash
python -m pip install -r requirements-pytorch.txt --index-url https://download.pytorch.org/whl/cpu
```

</TabItem>

</Tabs>

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">

#### Instala el controlador de la cámara, YOLOE y el SDK del B601

Para la Orbbec Gemini 336, ejecuta `python -m pip install 'pyorbbecsdk2==2.0.18'`. Para la RealSense D405 o D435i, ejecuta `python -m pip install 'pyrealsense2>=2.54'`. Sigue las instrucciones del fabricante de la cámara para configurar el acceso USB. [Configuración del SDK de la cámara](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md#cameras)

```bash
python -m pip install -e '.[obb,yolo,visualization]' scipy
python -m pip install 'git+https://github.com/ultralytics/CLIP.git@7ffa84b3bfa40c42ecc1c77147a855e69cb2dd40'
mkdir -p models
curl -fL --retry 3 -o models/yoloe-26s-seg.pt \
  https://github.com/ultralytics/assets/releases/download/v8.4.0/yoloe-26s-seg.pt
curl -fL --retry 3 -o mobileclip2_b.ts \
  https://github.com/ultralytics/assets/releases/download/v8.4.0/mobileclip2_b.ts
git clone https://github.com/Seeed-Projects/reBotArm_control_py.git sdk/reBotArm_control_py
python -m pip install 'motorbridge==0.6.0' 'meshcat>=0.3.2' 'matplotlib>=3.10'
```

Si OBB es el único backend que planeas usar con el brazo, ejecuta `bash scripts/check_env.sh --backend obb --robot` para comprobar las dependencias y continúa con la Sección 2. Generarás la matriz mano-ojo en la Sección 3.

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">

#### Configura la cadena de herramientas CUDA para AnyGrasp y GraspNet

En el entorno `rebot` activo, instala un compilador y una cadena de herramientas compatibles con CUDA 12.1. Confirma que `nvcc --version` muestre `release 12.1` antes de continuar.

```bash
conda install --override-channels -c conda-forge 'gcc_linux-64=12' 'gxx_linux-64=12'
conda install --override-channels -c nvidia/label/cuda-12.1.1 -c conda-forge 'cuda-toolkit=12.1'
conda activate rebot
export CUDA_HOME="$CONDA_PREFIX"
export PATH="$CUDA_HOME/bin:$PATH"
export MAX_JOBS=2
nvcc --version
python -m pip install wheel ninja
python -m pip install 'transforms3d>=0.4.2' \
  'graspnetAPI @ git+https://github.com/graspnet/graspnetAPI.git@eb57dd2092d8dbe05312a29c3d0c22f3226efbfc'
```

**AnyGrasp.** Instala el SDK y su extensión PointNet2, luego compila MinkowskiEngine con OpenBLAS. Sigue [AnyGrasp license and weights](#anygrasp-license-and-weights) para colocar los archivos requeridos.

```bash
git clone https://github.com/graspnet/anygrasp_sdk.git sdk/anygrasp_sdk
git clone --branch cuda-12-1 https://github.com/chenxi-wang/MinkowskiEngine.git sdk/MinkowskiEngine-cuda-12-1
conda install --override-channels -c conda-forge 'openblas>=0.3.30,<0.4' 'numpy<2'
python -c 'import ctypes, sys; ctypes.CDLL(sys.prefix + "/lib/libopenblas.so")'
python -m pip install --no-build-isolation --no-deps ./sdk/anygrasp_sdk/pointnet2
(
  cd sdk/MinkowskiEngine-cuda-12-1 &&
  python setup.py bdist_wheel --force_cuda --blas=openblas \
    --blas_include_dirs="$CONDA_PREFIX/include" --blas_library_dirs="$CONDA_PREFIX/lib" &&
  python -m pip install --no-deps dist/*.whl
)
```

**GraspNet-Baseline.** Instala las extensiones PointNet2 y kNN en subdirectorios separados del SDK de GraspNet-Baseline. Esto permite que AnyGrasp y GraspNet usen sus propias compilaciones de PointNet2 en el mismo entorno `rebot`. Descarga los pesos preentrenados de RealSense y guárdalos en `sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar`. [Official GraspNet-Baseline pretrained weights](https://github.com/graspnet/graspnet-baseline#training-and-testing)

```bash
git clone https://github.com/graspnet/graspnet-baseline.git sdk/graspnet-baseline
baseline="$PWD/sdk/graspnet-baseline"
python -m pip install --no-build-isolation --no-deps --upgrade --target "$baseline/pointnet2" "$baseline/pointnet2"
touch "$baseline/pointnet2/pointnet2/__init__.py"
python -m pip install --no-build-isolation --no-deps --upgrade --target "$baseline/knn" "$baseline/knn"
mkdir -p "$baseline/checkpoints"
```

Después de completar toda la configuración manual, ejecuta `bash scripts/check_env.sh`. Si configuraste solo algunos de los backends, usa `--backend obb`, `--backend anygrasp` o `--backend graspnet` para comprobar las dependencias relevantes. Añade `--robot` para comprobar también el brazo. [Project manual setup guide](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/README.md#2-manual-environment-and-sdk-setup)

</div>
</div>

</div>

</TabItem>

</GraspingTabs>
</div>

### Licencia y pesos de AnyGrasp

Para usar AnyGrasp, obtén la licencia oficial y los pesos de detección, luego configúralos con `bash scripts/anygrasp_license.sh`. Los pasos se aplican tanto a la configuración automática como a la manual. Ejecutar el script sin argumentos abre un menú interactivo.

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Obtén el ID de características de la máquina</h4>

En la máquina que ejecutará la inferencia, usa la interfaz de red que utilizarás en el despliegue. Selecciona `1` para obtener el `feature_id`, luego úsalo para solicitar la licencia y los pesos correspondientes. [Official AnyGrasp license registration](https://github.com/graspnet/anygrasp_sdk/tree/main/license_registration)

```bash
bash scripts/anygrasp_license.sh 1
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Instala la licencia y los pesos</h4>

Coloca el ZIP de la licencia oficial o el directorio de licencia extraído junto a `checkpoint_detection.tar` en el mismo directorio de entrega. Selecciona `2` para instalar ambos. Sustituye `/path/to/delivery` por la ruta a tu directorio de entrega.

```bash
bash scripts/anygrasp_license.sh 2 "/path/to/delivery"
```

El script usa el SDK oficial para validar la licencia y comprueba que puede leer los pesos. Luego instala los archivos según `config/backends/anygrasp.yaml`.

**Ubicaciones de archivos predeterminadas.** Busca los archivos de licencia en `license/` y los pesos de detección, `checkpoint_detection.tar`, en `log/`.

```text
sdk/anygrasp_sdk/grasp_detection/
├── gsnet.so
├── license/
│   ├── licenseCfg.json
│   ├── *.lic
│   ├── *.public_key
│   └── *.signature
└── log/
    └── checkpoint_detection.tar
```

Cuando sea necesario, el script de configuración del entorno y la opción `2` colocan una versión de `gsnet.so` compatible con el entorno Python activo junto a `license/`.

**Si el backend filtrado usa un SDK o una ruta de pesos separados**, usa el siguiente comando. El script instala los archivos según `config/backends/anygrasp_filtered.yaml`.

```bash
bash scripts/anygrasp_license.sh --backend anygrasp_filtered 2 "/path/to/delivery"
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>Verifica la instalación</h4>

Revisa el estado de la licencia y los pesos debajo de `----`. `[PARTIAL]` y el código de salida `3` significan que la licencia está lista y que los pesos de detección aún faltan. Una vez que tengas los pesos, pasa la ruta a `checkpoint_detection.tar` directamente a la opción `2`. Si el script informa `[ERROR]`, comprueba la causa indicada, como una discrepancia en el ID de la máquina o pesos ilegibles. Vuelve a ejecutar la comprobación del entorno de AnyGrasp.

```bash
bash scripts/check_env.sh --backend anygrasp
```

Una vez que la comprobación pase, usa la vista previa de cámara de AnyGrasp en la Sección 5 para verificar la carga del modelo y la inferencia.

</div>
</div>

</div>

## 2. Previsualizar fotogramas de la cámara y candidatos de agarre

Ejecuta `conda activate rebot` antes de lanzar los ejemplos. Usan `scripts/run_python.sh` para ejecutar Python desde ese entorno. De forma predeterminada, el lanzador aísla `rebot` de `PYTHONPATH`, `LD_LIBRARY_PATH` y paquetes Python de usuario heredados, de modo que no se carguen dependencias de ROS Humble u otros entornos. [Python launcher](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md#python-launcher)

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Graba un fotograma RGB-D</h4>

Conecta la cámara y graba un fotograma. El comando debería escribir un archivo `.npz`.

```bash
bash examples/rgbd_capture/run.sh --output "outputs/rgbd/frame-$(date +%s%N).npz"
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Abre la vista previa OBB filtrada</h4>

Coloca el objetivo en el centro de la imagen y abre la vista previa OBB filtrada. El ejemplo usa por defecto `yellow banana`. Usa `--target-class` para seleccionar otra clase de la lista configurada. Este comando solo se conecta a la cámara.

```bash
bash examples/obb_filtered/run.sh
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>Compara candidatos de agarre</h4>

Pulsa **G** en la ventana de imagen para guardar una captura y comparar los candidatos sin filtrar y filtrados para el mismo fotograma. Confirma que la máscara cubre el objetivo y que el centro de agarre filtrado y el eje de apertura de la pinza se adaptan al objeto. Pulsa **Q** o **Esc** para salir. Para inspeccionar la calidad de la segmentación o de la nube de puntos, ejecuta `bash examples/camera_check/run.sh --target-class "yellow banana"`. [Filtered OBB details](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/obb_filtered.md)

</div>
</div>

</div>

## 3. Realizar la calibración mano-ojo

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Prepara la placa de calibración</h4>

Descarga `aruco_100mm.pdf` e imprímelo a escala 100%. Mide la longitud del lado del cuadrado negro. En `config/default.yaml`, establece `calibration.aruco.marker_length_m` a esa longitud en metros. La longitud predeterminada es `0.100` m y el ID del marcador es `0`. Fija la placa a la superficie de trabajo donde la cámara pueda verla desde varias poses. [Download the 100 mm ArUco board (PDF)](https://raw.githubusercontent.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/main/examples/hand_eye/boards/aruco_100mm.pdf)

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Comprueba la detección del marcador</h4>

Comprueba el marcador con la cámara. La terminal informa cuántos de 10 fotogramas contienen una detección del marcador configurado. Si la detección es inconsistente, ajusta la iluminación, la distancia o el ángulo de la placa.

```bash
bash examples/hand_eye/run.sh --check-marker
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>Comprueba la conexión del brazo</h4>

En `sdk/reBotArm_control_py/config/rebotarm.yaml`, confirma que `hardware_yaml: rebotarm_rs.yaml` está configurado. Comprueba la interfaz CAN y el modelo cinemático para ese perfil de hardware. Sustituye el `can0` de ejemplo por el nombre de la interfaz que configuraste. [SDK de control B601-RS y configuración CAN](https://wiki.seeedstudio.com/es/rebot_arm_b601_rs_pinocchio_meshcat/)

```bash
ip -details link show can0
```

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">
    <h4>Ejecuta la calibración automática</h4>

:::warning
La calibración automática mueve el brazo siguiendo trayectorias predefinidas. Asegura la base, despeja todo el volumen de movimiento y deja suficiente holgura en el cable de la cámara. Prepárate para cortar la alimentación de los actuadores si es necesario. Puedes hacer una copia de seguridad de un `hand_eye.npz` existente antes de recalibrar.
:::

Inicia la calibración automática. El programa empareja las poses del efector final con las poses del marcador observadas por la cámara. Después de recopilar las muestras, resuelve la transformación fija de la cámara al efector final.

```bash
bash examples/hand_eye/run.sh
```

<div className="text--center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/Cal.gif" alt="Demostración de calibración automática mano-ojo de reBot Arm B601-RS" width={1138} height={640} loading="lazy" style={{ height: 'auto' }} />
</div>

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">5</span>
  <div className="rebot-step-content">
    <h4>Verifica el resultado de la calibración</h4>

Confirma que el terminal informa `[OK] Saved to .../hand_eye.npz` para la ejecución actual. Si el script informa menos de 15 muestras válidas, ajusta la posición de la placa o la iluminación para que el marcador sea visible desde más poses y luego ejecuta la calibración de nuevo.

El archivo de calibración de Gemini 336 es `config/calibration/orbbec_gemini336/hand_eye.npz`. Para otras cámaras, la salida va al directorio de modelo correspondiente bajo `config/calibration/`. En `config/default.yaml`, comprueba `calibration.hand_eye_path`. Las rutas relativas se resuelven desde `config/`. Luego comprueba las dependencias del brazo y el archivo de calibración.

```bash
bash scripts/check_env.sh --backend obb --robot
```

</div>
</div>

</div>

## 4. Ejecutar una sujeción OBB filtrada

<div className="rebot-step-flow" role="list">

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Comprueba el objetivo y la configuración del brazo</h4>

Confirma que la vista previa encuentra el objetivo de forma consistente. Comprueba `robot.ready_pose`, la orientación de la garra y los límites del espacio de trabajo. Si has modificado la garra, comprueba también `planning.T_grasp_tcp`.

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Ejecuta la sujeción</h4>

:::warning
`--execute` habilita el brazo y lo mueve a la pose de espera al inicio. Pulsar **G** inicia la sujeción. Antes de ejecutar el comando, confirma que el área de movimiento esté libre de personas, cables y obstáculos.
:::

```bash
bash examples/obb_filtered/run.sh --execute --target-class "yellow banana"
```

Espera a que el brazo se detenga en la pose de espera. Pulsa **G** en la ventana de imagen para capturar la escena actual y seleccionar un candidato de sujeción filtrado que supere las comprobaciones. El programa omite el intento si no encuentra objetivo o ningún candidato ejecutable. Pulsa **Q** o **Esc** para finalizar la sesión.

<div className="text--center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/obb.gif" alt="Demostración de sujeción OBB filtrada con reBot Arm B601-RS" loading="lazy" style={{ height: 'auto' }} />
</div>

</div>
</div>

<div className="rebot-step-item" role="listitem">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>Inspecciona los resultados</h4>

Abre el directorio de ejecución impreso en el terminal. El directorio `result/snapshot-NNN/` contiene el `frame.npz` capturado, los candidatos y planes de sujeción en `result.json`, y los resultados sin filtrar frente a filtrados en `comparison.png` y `comparison.json`. Después de que comience un intento de sujeción, el programa también escribe `execution.json`. El campo `object_held` registra el estado de agarre informado por el controlador.

</div>
</div>

</div>

## 5. Prueba backends de sujeción con nube de puntos

<div className={styles.page}>
<GraspingTabs defaultValue="anygrasp" queryString="grasping-backend">

<TabItem value="anygrasp" label="AnyGrasp">

<h3 id="anygrasp">AnyGrasp</h3>

Después de completar la configuración del entorno en la Sección 1 y colocar los archivos de [AnyGrasp license and weights](#anygrasp-license-and-weights), inicia la vista previa de la cámara.

```bash
bash examples/anygrasp_filtered/run.sh --target-class "yellow banana"
```

Pulsa **G** en la ventana de imagen para guardar una instantánea. El panel izquierdo muestra la referencia de nube de puntos sin filtrar y el panel derecho muestra el resultado filtrado. El orden de clases predeterminado es `pen`, `orange` y `yellow banana`. Pulsa **1**, **2** o **3** en la ventana de imagen para cambiar de clase. Después de revisar los candidatos, pulsa **Q** o **Esc** para salir de la vista previa.

Después de verificar la vista previa y la calibración mano-ojo, comprueba las dependencias del brazo.

```bash
bash scripts/check_env.sh --backend anygrasp --robot
```

:::warning
El comando de sujeción habilita el brazo y lo mueve a la pose de espera al inicio. Antes de ejecutarlo, despeja de personas, cables y obstáculos el área de movimiento.
:::

Una vez que las comprobaciones se superen, ejecuta el siguiente comando para iniciar la sujeción con el brazo.

```bash
bash examples/anygrasp_filtered/run.sh --target-class "yellow banana" --execute
```

Espera a que el brazo se detenga en la pose de espera. Pulsa **G** en la ventana de imagen para capturar un nuevo fotograma y ejecutar un candidato del panel derecho que supere las comprobaciones de espacio de trabajo e IK. Pulsa **Q** o **Esc** para finalizar la sesión. [Detalles de AnyGrasp filtrado](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/examples/anygrasp_filtered/README.md)

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/any.gif" alt="Demostración AnyGrasp 1" width={1138} height={640} loading="lazy" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_python_visual_grasping/anygrasp.gif" alt="Demostración AnyGrasp 2" width={1024} height={640} loading="lazy" />
  </figure>
</div>

</TabItem>

<TabItem value="graspnet" label="GraspNet-Baseline">

<h3 id="graspnet-baseline">GraspNet-Baseline</h3>

Después de configurar el entorno y los pesos de GraspNet-Baseline en la Sección 1, comprueba las dependencias y abre la vista previa de la cámara.

```bash
bash scripts/check_env.sh --backend graspnet
bash examples/graspnet_camera/run.sh
```

Pulsa **G** o **Space** en la ventana de la cámara para generar candidatos y luego revísalos en la ventana de nube de puntos. Pulsa **R** para reanudar la transmisión en vivo. Después de revisar los candidatos, pulsa **Q** o **Esc** para salir de la vista previa.

Completa la calibración mano-ojo y la comprobación de conexión del brazo en la Sección 3, luego comprueba las dependencias para la sujeción con GraspNet.

```bash
bash scripts/check_env.sh --backend graspnet --robot
```

:::warning
El comando de sujeción habilita el brazo y lo mueve a la pose de espera al inicio, incluso con `--dry-run`. Antes de ejecutarlo, despeja de personas, cables y obstáculos el área de movimiento.
:::

Una vez que las comprobaciones se superen, ejecuta el siguiente comando para iniciar la sujeción con el brazo.

```bash
bash examples/graspnet_grasp/run.sh --target-class "yellow banana"
```

Espera a que el brazo se detenga en la pose de espera. Pulsa **G** o **Space** en la ventana de imagen para ejecutar la inferencia y realizar una sujeción alcanzable. Pulsa **Q** o **Esc** para finalizar la sesión y devolver el brazo a su posición inicial. [Ejemplo de brazo con GraspNet](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/examples/graspnet_grasp/README.md)

</TabItem>

</GraspingTabs>
</div>

## Solución de problemas

- **La cámara no puede grabar.** Comprueba `camera.type`, el número de serie y los permisos USB. Confirma que la cámara admite la resolución y la frecuencia de fotogramas seleccionadas y vuelve a ejecutar el comando de captura en la Sección 2.
- **El brazo permanece inmóvil después de pulsar G.**
  - **OBB filtrado o AnyGrasp.** Confirma que el comando incluye `--execute`. Comprueba `result.json` y los registros del terminal para ver si el detector no encontró el objetivo, si la nube de puntos no superó las comprobaciones de calidad, si el candidato estaba fuera del espacio de trabajo o si IK no encontró solución.
  - **GraspNet-Baseline.** Confirma que estás ejecutando `examples/graspnet_grasp/run.sh`. Con `--dry-run`, el programa omite el movimiento de sujeción. Comprueba el terminal por una calibración mano-ojo ausente o no válida, o una indicación de que ningún candidato es alcanzable.
- **El candidato se ve correcto en la imagen, pero la sujeción está desfasada.** Comprueba si el soporte de la cámara se ha movido, si la matriz mano-ojo pertenece a la cámara actual y si `planning.T_grasp_tcp` coincide con la garra actual. Después de confirmar un desfase a lo largo de la dirección de aproximación, usa `--insertion-depth-mm` con los backends filtrados para anular la distancia de inserción adicional para la ejecución, en milímetros. OBB filtrado tiene un valor predeterminado de 0 mm y AnyGrasp filtrado tiene un valor predeterminado de 5 mm. Comprueba el candidato y la holgura entre la garra y la mesa después de cada ajuste.
- **La comprobación del entorno informa `[MANUAL]`.** El código de salida `3` significa que debes proporcionar manualmente los elementos restantes, como la licencia de AnyGrasp, los pesos de detección o la matriz mano-ojo. Añade los archivos y vuelve a ejecutar la comprobación con los mismos argumentos. [Solución de problemas del entorno y del SDK](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/sdk_setup.md)
- **Falta un script antiguo.** Inicia cada ejemplo con el archivo `run.sh` en su directorio. Los lanzadores de compatibilidad están bajo `scripts/legacy/`, por ejemplo `bash scripts/legacy/anygrasp.sh`. Ejecuta `bash scripts/run_python.sh -m rebot_grasp --help` para ver las opciones de la CLI del proyecto.

Para la lista completa de puntos de entrada y convenciones de coordenadas, consulta el [índice de ejemplos](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/examples/README.md) y la [arquitectura del proyecto](https://github.com/LAN-GER/Rebot-Arm-B601-Visual-Grasping/blob/main/docs/architecture.md).
