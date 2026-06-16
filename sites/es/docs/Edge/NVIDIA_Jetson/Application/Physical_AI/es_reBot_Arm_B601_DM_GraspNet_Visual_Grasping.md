---
description: Este wiki muestra cómo desplegar la demo de agarre visual GraspNet para reBot Arm B601-DM en NVIDIA Jetson. Cubre la configuración del entorno Jetson, operadores CUDA de GraspNet, configuración de la cámara RGB-D Orbbec Gemini 2, exportación de YOLO TensorRT, calibración mano-ojo, uso de la interfaz web, uso por CLI y control mediante API HTTP.
title: Agarre visual GraspNet en Jetson con reBot-DM
keywords:
  - reBot Arm
  - B601-DM
  - GraspNet
  - Jetson
  - Physical AI
  - Orbbec Gemini 2
  - YOLO
  - TensorRT
  - Visual Grasping
image: https://files.seeedstudio.com/wiki/graspnet/front-graspnet.png
slug: /rebot_arm_b601_dm_graspnet_visual_grasping
sku: E26051901
last_update:
  date: 06/15/2026
  author: Dayu
createdAt: '2026-06-15'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/es/rebot_arm_b601_dm_graspnet_visual_grasping/
---

# Agarre visual GraspNet con reBot Arm B601-DM en Jetson

Este wiki explica cómo desplegar la **demo de agarre visual reBot Arm B601-DM** en NVIDIA Jetson. La demo combina una cámara RGB-D, segmentación por instancias con YOLO, estimación de pose de agarre 6-DoF con GraspNet, calibración ojo-en-mano y control de robot real, de modo que el brazo pueda seleccionar y agarrar objetos comunes sobre una mesa.

La versión 1.0 de esta guía se centra en un despliegue fiable con un solo Jetson y un flujo de operación diario. La configuración predeterminada usa **Orbbec Gemini 2** como cámara RGB-D, **YOLO11n-seg TensorRT** para el filtrado de objetivos y **GraspNet** para la generación genérica de poses de agarre 6-DoF.

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/graspnet/front-graspnet.png" />
</div>

<div class="table-center">
<table style={{ textAlign: 'center' }}>
  <tr>
    <th>Kit reBot Arm B601-DM con Jetson Orin</th>
  </tr>
  <tr>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-e26052001-rebot-arm-b601-dm-bundle-with-jetson-thor.jpg" style={{ width: 600, height: 'auto' }} />
      </div>
    </td>
  </tr>
  <tr>
    <td>
      <div class="get_one_now_container" style={{ textAlign: 'center' }}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle-with-Jetson-Orin.html">
          <strong><span><font color={'FFFFFF'} size={"4"}>Consigue uno ahora</font></span></strong>
        </a>
      </div>
    </td>
  </tr>
</table>
</div>

## Qué vas a construir

El flujo de ejecución es:

```text
Orbbec Gemini 2 RGB-D camera
        |
YOLO instance segmentation for target filtering
        |
GraspNet 6-DoF grasp pose estimation
        |
Eye-in-hand calibration transform
        |
reBot Arm IK trajectory and gripper force control
        |
Optional base rotation and object placement
```

El proyecto proporciona tres formas prácticas de usar el sistema:

| Modo | Punto de entrada | Uso típico |
| --- | --- | --- |
| Web UI | `scripts/grasp_web.py` | Vídeo en vivo, selección de objetivo, vista previa de agarre, agarre real, ajuste de offset |
| CLI | `scripts/grasp.py` | Agarre sin pantalla o pruebas por script |
| HTTP API | `scripts/grasp_curl.sh` and `scripts/grasp_api_client.py` | Control remoto, automatización, integración con otras aplicaciones |

## Preparación de hardware y sistema

Prepara el siguiente hardware antes de empezar:

- reBot Arm B601-DM
- Dispositivo NVIDIA Jetson ejecutando JetPack 6.x o JetPack 7.x
- Cámara RGB-D Orbbec Gemini 2
- Adaptador USB2CAN para el bus CAN del robot
- Cable USB 3.0 para la cámara
- Marcador ArUco para la calibración mano-ojo, `DICT_4X4_50`, ID `0`, longitud de arista de 0.1 m
- Una mesa estable, suficiente espacio libre alrededor del brazo y un método de corte de energía de emergencia

:::warning
Esta demo controla un brazo robótico real. Durante todas las pruebas de movimiento y de agarre, mantén las manos, cables y objetos sueltos fuera del espacio de trabajo del brazo. Empieza con `--dry-run`, comprobaciones de solo lectura y valores de desplazamiento pequeños antes de habilitar la ejecución completa del robot.
:::

Conecta el hardware:

1. Conecta Gemini 2 al Jetson mediante USB 3.0.
2. Conecta el adaptador USB2CAN al bus CAN del reBot Arm y luego al Jetson.
3. Enciende el reBot Arm.
4. Confirma que los dispositivos son visibles:

```bash
lsusb
ls /dev/ttyUSB* /dev/ttyACM* 2>/dev/null || true
```

Establece permisos temporales de dispositivo para la primera puesta en marcha:

```bash
sudo chmod a+rw /dev/bus/usb/*/*
sudo chmod 666 /dev/ttyUSB0 2>/dev/null || true
sudo chmod 666 /dev/ttyACM0 2>/dev/null || true
```

Para dispositivos serie, también se recomienda añadir el usuario actual a `dialout`, luego cerrar sesión y volver a iniciarla:

```bash
sudo usermod -aG dialout $USER
```

## Desplegar el proyecto en Jetson

**Paso 1. Instalar paquetes de sistema y Miniconda**

```bash
sudo apt update
sudo apt install -y git wget curl build-essential cmake libusb-1.0-0-dev python3-pip

wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
bash Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

**Paso 2. Clonar el proyecto**

```bash
git clone https://github.com/jjjadand/reBot-DevArm-Grasp.git rebot_grasp-jetson
cd rebot_grasp-jetson
```

Si estás usando un paquete interno en lugar del repositorio público, copia ese directorio de proyecto al Jetson y ejecuta los comandos restantes desde la raíz del proyecto.

**Paso 3. Crear el entorno de Python**

Usa Python 3.10 en JetPack 6.x. Usa Python 3.12 en JetPack 7.x / Thor.

```bash
# JetPack 6.x
conda create -y -n graspnet python=3.10

# JetPack 7.x / Thor
# conda create -y -n graspnet python=3.12

conda activate graspnet
python -m pip install -U pip wheel setuptools
```

Comprueba tus versiones de JetPack y CUDA:

```bash
cat /etc/nv_tegra_release
nvcc --version
```

**Paso 4. Instalar PyTorch compatible con Jetson**

No instales el paquete genérico PyTorch CPU/GPU de PyPI en Jetson. Instala un wheel que coincida con tus versiones de JetPack, Python y CUDA. Para usuarios de reComputer, también puedes seguir la guía dedicada: [Install Pytorch for reComputer Jetson](https://wiki.seeedstudio.com/es/install_torch_on_recomputer/).

Los puntos de partida habituales son:

```bash
# JetPack 6.x, CUDA 12.x, Python 3.10
pip install --extra-index-url https://pypi.jetson-ai-lab.io/jp6/cu126 torch torchvision

# JetPack 7.x / Thor, CUDA 13.x, Python 3.12
pip install --extra-index-url https://pypi.jetson-ai-lab.io/sbsa/cu130 torch torchvision
```

Verifica CUDA desde Python:

```bash
python - <<'PY'
import torch
print("torch:", torch.__version__)
print("cuda available:", torch.cuda.is_available())
print("device:", torch.cuda.get_device_name(0) if torch.cuda.is_available() else "none")
PY
```

`cuda available` debe ser `True` antes de continuar.

**Paso 5. Instalar dependencias de Python**

```bash
pip install -r requirements-graspnet-jetson.txt
```

**Paso 6. Instalar los SDK de robot, GraspNet y GraspNet API**

```bash
mkdir -p sdk

git clone https://github.com/vectorBH6/reBotArm_control_py.git sdk/reBotArm_control_py
pip install -e sdk/reBotArm_control_py

git clone https://github.com/graspnet/graspnet-baseline.git sdk/graspnet-baseline
git clone https://github.com/graspnet/graspnetAPI.git sdk/graspnetAPI
pip install -e sdk/graspnetAPI
```

Descarga el checkpoint preentrenado de GraspNet desde la página de descargas de GraspNet y colócalo aquí:

```text
sdk/graspnet-baseline/checkpoints/checkpoint-rs.tar
```

**Paso 7. Establecer rutas de CUDA y compilar los operadores CUDA de GraspNet**

Establece la ruta de CUDA para tu versión de JetPack:

```bash
# JetPack 6.x example
export CUDA_HOME=/usr/local/cuda-12.6

# JetPack 7.x / Thor example
# export CUDA_HOME=/usr/local/cuda-13.0

export PATH="$CUDA_HOME/bin:$PATH"
export LD_LIBRARY_PATH="$CUDA_HOME/lib64:$LD_LIBRARY_PATH"
```

Compila las extensiones CUDA usadas por GraspNet:

```bash
bash scripts/install_graspnet_cuda_ops.sh
bash scripts/install_graspnet_cuda_ops.sh --check
```

Si más adelante cambias JetPack, Python, CUDA o PyTorch, recompila con:

```bash
bash scripts/install_graspnet_cuda_ops.sh --force
```

**Paso 8. Instalar el SDK de la cámara Orbbec**

El proyecto incluye un asistente que instala `pyorbbecsdk2` en el entorno de Python activo:

```bash
bash scripts/install_pyorbbecsdk.sh
```

Si necesitas compilar el SDK localmente, clona primero el árbol de código fuente y ejecuta el modo de código fuente:

```bash
git clone https://github.com/orbbec/pyorbbecsdk.git sdk/pyorbbecsdk
bash scripts/install_pyorbbecsdk.sh --from-source
```

Instala las reglas udev de Orbbec cuando el árbol de código fuente del SDK esté disponible:

```bash
sudo bash sdk/pyorbbecsdk/scripts/env_setup/install_udev_rules.sh
sudo udevadm control --reload-rules
sudo udevadm trigger
```

**Paso 9. Descargar pesos de YOLO y exportar TensorRT en el Jetson de destino**

Los archivos de motor TensorRT son específicos del dispositivo. Siempre exporta el `.engine` en el Jetson que ejecutará la demo.

```bash
mkdir -p models
wget https://github.com/ultralytics/assets/releases/download/v8.3.0/yolo11n-seg.pt -O models/yolo11n-seg.pt

yolo export model=models/yolo11n-seg.pt format=engine imgsz=640 half=True device=0 workspace=4
```

La salida esperada es:

```text
models/yolo11n-seg.engine
```

Si la exportación FP16 falla en tu plataforma, exporta sin `half=True`:

```bash
yolo export model=models/yolo11n-seg.pt format=engine imgsz=640 device=0 workspace=4
```

## Verificar y calibrar

Ejecuta estas comprobaciones en orden antes de intentar un agarre real.

**1. Comprobar la cámara RGB-D**

```bash
conda activate graspnet
cd ~/rebot_grasp-jetson

python scripts/verify_pyorbbec_stream.py
python scripts/verify_pyorbbec_stream.py --preview --seconds 10
```

La comprobación solo de texto debería informar de la información de los fotogramas RGB y de profundidad. La comprobación con vista previa debería mostrar ventanas RGB y de profundidad cuando haya una pantalla de escritorio disponible.

**2. Comprobar la conexión del robot**

Empieza con el modo de solo lectura:

```bash
python scripts/verify_rebot_arm_motion.py --read-only
```

Luego ejecuta un pequeño movimiento de la articulación 6 después de confirmar que la trayectoria del brazo está despejada:

```bash
python scripts/verify_rebot_arm_motion.py --deg 5
```

**3. Comprobar la pila de GraspNet**

```bash
python scripts/verify_graspnet_stack.py
```

Si la cámara aún no está conectada pero solo quieres comprobar Python, CUDA, GraspNet y los archivos de YOLO:

```bash
python scripts/verify_graspnet_stack.py --skip-camera
```

**4. Realizar la calibración ojo-en-mano**

Este proyecto utiliza calibración ojo-en-mano: la cámara está montada en el efector final y el marcador ArUco está fijo en la mesa. La configuración predeterminada espera un marcador `DICT_4X4_50`, ID `0`, de 0.1 m. El repositorio incluye archivos de marcadores imprimibles como `aruco100x100.pdf`.

Recogida automática:

```bash
python scripts/collect_handeye_eih.py
```

Recogida manual con compensación de gravedad:

```bash
python scripts/collect_handeye_eih.py --manual
```

Los resultados de la calibración se guardan en el directorio de la cámara activa:

```text
config/calibration/orbbec_gemini2/hand_eye.npz
config/calibration/orbbec_gemini2/intrinsics.npz
```

Verifica la calibración guardada:

```bash
python scripts/verify_handeye_calibration.py
```

Recalibra siempre que cambie el soporte de la cámara, el efector final, el tamaño de la placa ArUco o la geometría de la mesa.

## Ejecutar la demostración web

La interfaz web es la primera interfaz de usuario recomendada. Proporciona vídeo MJPEG en vivo, selección de objetivo, vista previa de agarre, ejecución real de agarre, ajuste de compensación, movimiento manual de la base, control del efector final, postura de preparado y operaciones de reinicio.

Comienza primero en modo de vista previa. Esto no ejecuta movimiento real del robot:

```bash
conda activate graspnet
cd ~/rebot_grasp-jetson

python scripts/grasp_web.py \
  --host 0.0.0.0 \
  --port 8000 \
  --num-point 12000 \
  --cloud-crop-nsample 32
```

Abre la interfaz web desde un navegador:

```text
http://<jetson_ip>:8000
```

<div align="center">
  <img width={900} src="https://files.seeedstudio.com/wiki/graspnet/web.png" />
</div>

Utiliza el modo de vista previa para confirmar el flujo de la cámara, las detecciones de YOLO, el filtrado de objetivos y la generación de puntos de agarre. Haz clic en el control de inferencia o actualización en la interfaz web para actualizar la vista previa de GraspNet.

Cuando la escena sea estable y los pasos de verificación se hayan superado, comienza con la ejecución real del robot:

```bash
python scripts/grasp_web.py \
  --host 0.0.0.0 \
  --port 8000 \
  --enable-robot \
  --num-point 12000 \
  --cloud-crop-nsample 32
```

Para las primeras pruebas reales, desactiva la colocación posterior al agarre para que el brazo solo realice el movimiento de agarre y recuperación:

```bash
python scripts/grasp_web.py \
  --host 0.0.0.0 \
  --port 8000 \
  --enable-robot \
  --no-place-after-grasp \
  --num-point 12000 \
  --cloud-crop-nsample 32
```

Opciones de inicio útiles:

| Opción | Propósito |
| --- | --- |
| `--enable-robot` | Permitir movimiento real del brazo y del efector final |
| `--target-class cup` | Preseleccionar una clase objetivo |
| `--no-yolo` | Desactivar el filtrado YOLO y ejecutar GraspNet en toda la escena |
| `--camera-type orbbec_gemini2` | Forzar el controlador de la cámara |
| `--no-place-after-grasp` | Omitir la rotación de la base y la colocación después del agarre |
| `--num-point 12000` | Reducir el recuento de puntos de GraspNet para la memoria de Jetson |
| `--cloud-crop-nsample 32` | Reducir las muestras de CloudCrop para la memoria de Jetson |
| `--graspnet-interval 2.0` | Establecer el intervalo de actualización automática de GraspNet cuando esté habilitado |

El flujo de trabajo normal de la interfaz web es:

1. Haz clic en **Ready** para mover el brazo a la postura de preparado.
2. Selecciona una clase objetivo o déjala vacía para usar los objetos detectados.
3. Haz clic en **Infer** o **Refresh** para calcular una postura de agarre.
4. Comprueba que el marcador de agarre parezca razonable en el vídeo.
5. Ajusta el efector final, la cámara o la compensación de la base si es necesario.
6. Haz clic en **Real Grasp** solo cuando la trayectoria del brazo esté despejada.
7. Usa **Reset** si la escena cambia o si el robot necesita volver a un estado seguro.

Los valores de compensación se utilizan para corregir pequeños errores mecánicos y de calibración. Después de ajustarlos en la interfaz web, persiste los valores en `config/compensation.json` o copia los valores estables en tus notas de despliegue. Usa incrementos pequeños, por ejemplo 0.005 m para desplazamientos de posición y de 1 a 2 grados para desplazamientos de rotación.

## Uso de la CLI y la API

Para una ejecución de prueba sin interfaz gráfica, usa:

```bash
python scripts/grasp.py --dry-run --camera-type orbbec_gemini2 --target-class cup
```

Para GraspNet en toda la escena sin filtrado YOLO:

```bash
python scripts/grasp.py --dry-run --camera-type orbbec_gemini2 --no-yolo
```

Para ejecución real desde la CLI:

```bash
python scripts/grasp.py --camera-type orbbec_gemini2 --target-class cup
```

Desactiva la colocación durante la puesta en marcha con la CLI:

```bash
python scripts/grasp.py \
  --camera-type orbbec_gemini2 \
  --target-class cup \
  --no-place-after-grasp
```

Para inspeccionar la salida en vivo de GraspNet sin ejecutar el robot:

```bash
python scripts/graspnet_camera_demo.py --auto --target-class cup
python scripts/graspnet_camera_demo.py --auto --no-yolo --no-visualizer
```

Para automatización HTTP, inicia el servicio web con el asistente:

```bash
bash scripts/grasp_curl.sh serve --enable-robot --no-auto-graspnet
```

En otra terminal:

```bash
bash scripts/grasp_curl.sh state
bash scripts/grasp_curl.sh ready
bash scripts/grasp_curl.sh target bottle
bash scripts/grasp_curl.sh infer
bash scripts/grasp_curl.sh grasp
bash scripts/grasp_curl.sh reset
```

Las mismas operaciones se pueden llamar directamente con `curl`:

```bash
BASE=http://127.0.0.1:8000

curl -s "$BASE/state"
curl -s -X POST "$BASE/ready" -H "Content-Type: application/json" -d "{}"
curl -s -X POST "$BASE/target" -H "Content-Type: application/json" -d '{"class_name":"bottle"}'
curl -s -X POST "$BASE/infer" -H "Content-Type: application/json" -d "{}"
curl -s -X POST "$BASE/grasp" -H "Content-Type: application/json" -d "{}"
```

Otros endpoints útiles:

| Endpoint | Método | Propósito |
| --- | --- | --- |
| `/state` | GET | Detección actual, agarre y estado de ejecución web |
| `/robot/state` | GET | Articulaciones del robot, postura TCP, estado del efector final |
| `/stream.mjpg` | GET | Flujo de cámara MJPEG |
| `/compensation` | POST | Establecer compensación del efector final, cámara y base |
| `/joint/limits` | GET | Leer posiciones y límites de las articulaciones |
| `/joint/jog` | POST | Mover una articulación, a menudo `joint1` para pruebas de base |
| `/move/joints` | POST | Mover todas las articulaciones a posiciones absolutas |
| `/move/pose` | POST | Mover el TCP a una postura objetivo mediante IK o modo de trayectoria |
| `/gripper` | POST | Abrir, cerrar, liberar o leer el estado del efector final |
| `/auto_grasp` | POST | Ejecutar un ciclo en segundo plano de búsqueda de objetivo y agarre |

## Configuración y ajuste

El archivo de configuración principal es:

```text
config/default.yaml
```

Ajustes predeterminados de la cámara:

```yaml
camera:
  type: orbbec_gemini2
  color_width: 1280
  color_height: 720
  depth_width: 1280
  depth_height: 720
  fps: 30
```

Ajustes predeterminados de detección y de GraspNet:

```yaml
yolo:
  model_name: "yolo11n-seg.engine"
  device: "auto"

graspnet:
  checkpoint: "checkpoint-rs.tar"
```

Comportamiento de colocación predeterminado:

```yaml
grasp_pipeline:
  place:
    enabled: true
    base_joint: joint1
    base_delta_deg: 90.0
    base_direction: auto
    base_rotate_duration: 2.5
    base_safety_margin_deg: 5.0
    return_home: false
```

Si el efector final falla sistemáticamente al sujetar el objeto, ajusta en este orden:

| Síntoma | Primer objetivo de ajuste |
| --- | --- |
| El efector final queda demasiado adelantado o atrasado | `grasp_forward_offset` / avance del efector final en la web |
| El efector final falla a la izquierda o a la derecha | `grasp_lateral_offset` o compensación X/Y de la cámara |
| El efector final queda demasiado alto o bajo | `grasp_vertical_offset` o compensación Z de la cámara |
| El ángulo de la muñeca es incorrecto | Compensación de giro, cabeceo y guiñada del efector final |
| Todos los agarres se desplazan en la misma dirección | Compensación de la cámara o de la base |

## Solución de problemas

`torch.cuda.is_available()` devuelve `False`: vuelve a instalar una rueda de PyTorch que coincida con JetPack. El paquete genérico `torch` de PyPI no es adecuado para despliegue en Jetson.

`No module named pointnet2._ext` o `No module named knn_pytorch.knn_pytorch`: vuelve a compilar los operadores CUDA de GraspNet:

```bash
bash scripts/install_graspnet_cuda_ops.sh --force
```

`pyorbbecsdk import failed` o la cámara no puede abrirse: vuelve a instalar el SDK y comprueba los permisos USB:

```bash
bash scripts/install_pyorbbecsdk.sh
sudo chmod a+rw /dev/bus/usb/*/*
python scripts/verify_pyorbbec_stream.py
```

El archivo `.engine` de YOLO no se carga: vuelve a exportarlo en el mismo Jetson. No se deben copiar archivos de motor entre modelos de Jetson, versiones de JetPack o versiones de TensorRT.

El marcador ArUco no se detecta: confirma que el diccionario del marcador es `DICT_4X4_50`, el ID es `0`, la longitud del borde del marcador es 0.1 m, la iluminación es estable y el marcador está plano y completamente visible.

El robot se conecta pero el movimiento falla: ejecuta `verify_rebot_arm_motion.py --read-only`, confirma el dispositivo USB2CAN, comprueba la alimentación de los motores y prueba un pequeño movimiento de `--deg 5` antes de volver a intentar la ejecución de agarre.

GraspNet se queda sin memoria: reduce `--num-point`, reduce `--cloud-crop-nsample`, cierra aplicaciones de escritorio y evita ejecutar varios procesos de inferencia pesados al mismo tiempo.

## Recursos

- Referencia de la demostración GraspNet del reBot Arm: https://github.com/EclipseaHime017/reBot-DevArm-Grasp
- SDK de reBot Arm: https://github.com/vectorBH6/reBotArm_control_py
- GraspNet baseline: https://github.com/graspnet/graspnet-baseline
- GraspNet API: https://github.com/graspnet/graspnetAPI
- Orbbec pyorbbecsdk: https://github.com/orbbec/pyorbbecsdk
- Instalar Pytorch para reComputer Jetson: https://wiki.seeedstudio.com/es/install_torch_on_recomputer/

## Vídeo de demostración

<div align="center">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/_44o0oZ9nqI" title="reBot Arm B601-DM GraspNet Visual Grasping Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Ofrecemos varios canales de soporte para preguntas, debates e informes de incidencias.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
