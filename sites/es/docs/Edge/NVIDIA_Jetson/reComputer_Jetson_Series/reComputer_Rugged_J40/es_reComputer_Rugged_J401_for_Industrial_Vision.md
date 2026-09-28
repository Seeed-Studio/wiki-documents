---
description: Explora cuatro aplicaciones de visión por computadora para montacargas industriales usando reComputer Rugged J401, incluyendo seguimiento de objetivos, advertencia de área trasera, monitoreo del conductor y grabación de video.
title: reComputer Rugged J401 para Visión Industrial
keywords:
  - reComputer Rugged J401
  - Jetson Orin NX
  - Visión Industrial
  - EfficientTAM
  - Depth Anything V2
  - TensorRT
  - RTSP
  - MediaPipe
image: https://files.seeedstudio.com/wiki/rugged/rugged_banner.png
slug: /ai_robotics_recomputer_rugged_j401_cv_demo
sku: 100046979,100002634
last_update:
  date: 09/20/2026
  author: Zibo
createdAt: '2026-09-20'
updatedAt: '2026-09-20'
url: https://wiki.seeedstudio.com/es/ai_robotics_recomputer_rugged_j401_cv_demo/
---

## Introducción

Los montacargas industriales trabajan en muelles de carga, almacenes, patios exteriores, cámaras frigoríficas y zonas de lavado. El polvo, el agua, la vibración, los cambios de temperatura y la cobertura de red poco fiable hacen que estos sean lugares difíciles para un ordenador convencional. Un sistema de visión montado en el vehículo necesita hardware sellado, conectores seguros, alimentación de cámara estable y suficiente capacidad de cómputo local para procesar vídeo en el propio vehículo.

Este wiki presenta varias formas en que la visión por computadora puede utilizarse en montacargas industriales. El ejemplo usa reComputer Rugged J401 como controlador de borde. Su carcasa IP66, conectores M12, resistencia a la vibración, cuatro puertos PoE y Jetson Orin NX le permiten situarse cerca de las cámaras y ejecutar las cargas de trabajo de visión localmente.

El ejemplo cubre cuatro tareas prácticas: seguir un objeto seleccionado frente al montacargas, vigilar el área ciega trasera, comprobar la fatiga del conductor y el uso del casco, y grabar imágenes para su revisión posterior. Las cuatro se gestionan desde una única consola web.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/rugged_banner.png" alt="application banner" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Rugged-J4012-p-6920.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}>Consigue uno ahora 🖱️</font></span></strong>
</a>
</div>


:::warning
Este proyecto es un prototipo de asistencia, no un sistema de seguridad funcional. No tiene certificación de seguridad y no debe sustituir las comprobaciones del propio operador. La vista de advertencia trasera informa `SYSTEM ERROR` si la cámara o la canalización de inferencia falla.
:::

## Requisitos previos

- reComputer Rugged J4012 / J3011
- JetPack 5.1.3 ya instalado
- Cámara POE / Cámara USB
- Conexión a Internet para descargar paquetes y modelos
- Se recomiendan al menos 30 GB de almacenamiento libre


## Aplicaciones de Visión para Montacargas Industriales
Este caso utiliza dos cámaras POE de 48 V y una cámara USB. Dependiendo de los diferentes escenarios, estas cámaras se pueden sustituir libremente.
### Conexión de hardware
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/poe_connection.png" alt="application banner" />
</div>

### Seguimiento de objetivos en vista frontal

Durante la manipulación de palés, el operador puede necesitar mantener a la vista una carga o zona de trabajo concreta mientras el montacargas se mueve. La aplicación frontal utiliza EfficientTAM para seguimiento por segmentación mediante clic. El operador selecciona un objetivo en el vídeo y el sistema sigue su contorno a lo largo de los fotogramas posteriores.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/seg_demo.jpg" alt="" />
</div>


Se trata de un seguimiento interactivo, no de un reconocimiento automático de objetos. Es útil cuando el objetivo cambia de una tarea a otra y el operador puede seleccionarlo directamente.

### Advertencia de área trasera

El contrapeso y el mástil dejan grandes zonas ciegas alrededor de un montacargas. Una cámara PoE orientada hacia atrás utiliza Depth Anything V2 para estimar la profundidad de la escena y un detector de personas para vigilar el área de trabajo detrás del vehículo. La interfaz informa `SAFE`, `WARNING` o `DANGER` según los umbrales de distancia configurados.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/depth_demo.jpg" alt="" />
</div>

:::note
La estimación de profundidad monocular tiene limitaciones. La distancia real no es fiable. ¡Es necesario ajustar el umbral de alarma según las condiciones y requisitos in situ!
:::

### Monitoreo del conductor y EPP

Una cámara en la cabina puede comprobar condiciones que no son visibles desde el exterior. Los puntos de referencia faciales de MediaPipe proporcionan señales relacionadas con la fatiga, mientras que un modelo independiente comprueba el estado del casco. Cuando el algoritmo del modelo detecta fatiga del conductor durante la operación, activa una luz de advertencia para alertar al conductor y evitar accidentes de seguridad graves causados por la conducción fatigada.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/rugged/detect_demo.jpg" alt="" />
</div>


### Grabación multicámara

Podemos mostrar imágenes de monitoreo desde diferentes perspectivas en un solo panel, lo que facilita supervisar la situación en tiempo real.

<div align="center">
  <img width="1000" src="https://raw.githubusercontent.com/zibochen6/rugged_cv_demo/main/docs/images/dashboard.png" alt="Industrial forklift vision dashboard" />
</div>


## Descripción general del sistema

| Aplicación | Cámara | Método de visión |
| --- | --- | --- |
| Frontal | PoE RTSP | Seguimiento por segmentación con clic EfficientTAM |
| Trasera | PoE RTSP | Advertencia de profundidad métrica Depth Anything V2 con estados `SAFE`, `WARNING`, `DANGER` y `SYSTEM ERROR` |
| Cabina | USB UVC | Detección de fatiga con MediaPipe y estado del casco |
| Grabación | Cualquier cámara configurada | Grabación MP4 H.264 1080p sin inferencia de IA |

El servidor FastAPI inicia y detiene cada aplicación, evita que dos aplicaciones abran la misma cámara y envía los flujos de vídeo al navegador. Los modelos y cámaras permanecen inactivos hasta que se solicitan, por lo que una aplicación no utilizada no ocupa memoria de la GPU.

## Desplegar la aplicación de ejemplo

### Paso 1. Instalar paquetes del sistema

```bash
sudo apt-get update
sudo apt-get install -y python3.8-venv python3-opencv libopenblas-base logrotate nodejs npm

python3 -c "import cv2; print([line.strip() for line in cv2.getBuildInformation().splitlines() if 'GStreamer' in line])"
```

La salida debe mostrar `GStreamer: YES`. No reemplaces el OpenCV del sistema con la rueda de PyPI `opencv-python`; esa rueda no proporciona la compatibilidad con GStreamer utilizada para la captura RTSP en esta configuración.

### Paso 2. Clonar el proyecto y crear el entorno

```bash
git clone https://github.com/zibochen6/rugged_cv_demo.git /home/seeed/workspace/seg_demo
cd /home/seeed/workspace/seg_demo

python3 -m venv .venv
.venv/bin/python -m pip install --upgrade pip setuptools wheel
.venv/bin/pip install "numpy==1.24.4"

curl -fL --retry 3 -o /tmp/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl \
  https://developer.download.nvidia.com/compute/redist/jp/v512/pytorch/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl
.venv/bin/pip install /tmp/torch-2.1.0a0+41361538.nv23.06-cp38-cp38-linux_aarch64.whl

git clone --branch v0.16.2 --depth 1 https://github.com/pytorch/vision.git /tmp/vision
cd /tmp/vision
MAX_JOBS=4 /home/seeed/workspace/seg_demo/.venv/bin/python setup.py install
cd /home/seeed/workspace/seg_demo
```

Apunta el entorno virtual a los paquetes JetPack OpenCV y TensorRT, luego instala las dependencias del proyecto:

```bash
SP="$(.venv/bin/python -c 'import site; print(site.getsitepackages()[0])')"
printf "import sys; sys.path.insert(0, '/usr/lib/python3.8/dist-packages')\n" \
  > "$SP/_system_opencv_prepend.pth"

.venv/bin/pip install -r requirements-jetson.txt
.venv/bin/pip install -r backend/requirements.txt

cd frontend
npm ci
npm run build
cd ..
```

### Paso 3. Instalar EfficientTAM y descargar los modelos

```bash
mkdir -p third_party checkpoints models/onnx models/tensorrt models/mediapipe
git clone --depth 1 https://github.com/yformer/EfficientTAM.git third_party/EfficientTAM

Efficient_Track_Anything_BUILD_CUDA=0 .venv/bin/pip install \
  -e third_party/EfficientTAM --no-build-isolation --no-deps --ignore-requires-python

.venv/bin/pip install --no-deps "ultralytics==8.3.40" "ultralytics-thop==2.0.14"
.venv/bin/pip install "onnx==1.14.1" "matplotlib==3.7.5" "pandas==2.0.3" \
  "seaborn==0.13.2" "psutil==6.1.1" "py-cpuinfo==9.0.0" "scipy==1.10.1"

curl -fL --retry 3 -o checkpoints/efficienttam_ti_512x512.pt \
  https://huggingface.co/yunyangx/efficient-track-anything/resolve/main/efficienttam_ti_512x512.pt

.venv/bin/huggingface-cli download depth-anything/Depth-Anything-V2-Metric-Indoor-Small-hf \
  --local-dir checkpoints/depth_anything_v2_metric_indoor_small

curl -fL --retry 3 -o models/mediapipe/face_landmarker.task \
  https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/latest/face_landmarker.task

curl -fL --retry 3 -o checkpoints/yolov8n.pt \
  https://github.com/ultralytics/assets/releases/download/v8.3.0/yolov8n.pt
```

<details>
<summary>Export the ONNX models and build the TensorRT engines</summary>

Crea `export_depth_onnx.py` en la raíz del proyecto:

```python
import os
import torch
from transformers import DepthAnythingForDepthEstimation

cam_w, cam_h = 2304, 1296
longest, multiple = 518, 14
scale = longest / float(max(cam_h, cam_w))
in_h = max(multiple, (int(round(cam_h * scale)) // multiple) * multiple)
in_w = max(multiple, (int(round(cam_w * scale)) // multiple) * multiple)
output = "models/onnx/depth_metric_small_518.onnx"

model = DepthAnythingForDepthEstimation.from_pretrained(
    "checkpoints/depth_anything_v2_metric_indoor_small"
).eval()


class Wrapped(torch.nn.Module):
    def __init__(self, depth_model):
        super().__init__()
        self.depth_model = depth_model

    def forward(self, pixel_values):
        return self.depth_model(pixel_values=pixel_values).predicted_depth


os.makedirs(os.path.dirname(output), exist_ok=True)
torch.onnx.export(
    Wrapped(model),
    (torch.zeros((1, 3, in_h, in_w), dtype=torch.float32),),
    output,
    input_names=["pixel_values"],
    output_names=["predicted_depth"],
    opset_version=16,
    do_constant_folding=True,
)
print("ONNX written:", output)
```

Exporta los modelos de profundidad y de persona, luego descarga el modelo experimental de casco:

```bash
.venv/bin/python export_depth_onnx.py

.venv/bin/python - <<'PY'
from pathlib import Path
from ultralytics import YOLO

result = Path(YOLO("checkpoints/yolov8n.pt").export(
    format="onnx", imgsz=640, opset=12, simplify=False, dynamic=False
))
Path("models/onnx/yolov8n_person.onnx").write_bytes(result.read_bytes())
PY

curl -fL --retry 3 -o models/onnx/ppe_hard_hat.experimental.onnx \
  https://raw.githubusercontent.com/Sanaurrehmanarain/object-detection-yolov8/main/best.onnx
```

Compila los tres motores en el J401. Los motores de TensorRT están vinculados a la arquitectura de la GPU y a la versión de TensorRT, así que no copies motores compilados en otro ordenador.

```bash
TRTEXEC=/usr/src/tensorrt/bin/trtexec
[ -x "$TRTEXEC" ] || TRTEXEC="$(command -v trtexec)"

"$TRTEXEC" --onnx=models/onnx/depth_metric_small_518.onnx \
  --saveEngine=models/tensorrt/depth_metric_small_518_fp16.engine \
  --fp16 --workspace=1024

"$TRTEXEC" --onnx=models/onnx/yolov8n_person.onnx \
  --saveEngine=models/tensorrt/yolov8n_person_fp16.engine \
  --fp16 --workspace=2048

"$TRTEXEC" --onnx=models/onnx/ppe_hard_hat.experimental.onnx \
  --saveEngine=models/tensorrt/ppe_hard_hat_fp16.engine \
  --fp16 --workspace=1024
```

</details>

### Paso 4. Instalar el servicio y configurar las cámaras

Previsualiza los cambios del sistema antes de instalar el servicio:

```bash
sudo ./deploy/install.sh --dry-run
sudo ./deploy/install.sh
```

Almacena las credenciales RTSP en el archivo de entorno protegido:

```bash
sudo tee /etc/seg-demo/visual-hub.env >/dev/null <<'EOF'
FRONT_CAMERA_URL=rtsp://<user>:<password>@192.168.10.20:554/
REAR_CAMERA_URL=rtsp://<user>:<password>@192.168.10.21:554/
DMS_CAMERA=usb:0
EOF
sudo chmod 600 /etc/seg-demo/visual-hub.env

sudo systemctl start visual-hub
curl -s http://127.0.0.1:8000/api/health
```

## Prueba las aplicaciones

Abre la siguiente dirección desde un navegador en la misma LAN:

```text
http://<Jetson-LAN-IP>:8000/
```

Usa el selector de cámara en cada tarjeta para confirmar las fuentes frontal, trasera y de cabina. Una cámara que ya está en uso no está disponible para las otras aplicaciones hasta que se detenga. Prueba cada aplicación por separado antes de usar **Start All**.

### Sigue un objeto delante de la carretilla elevadora

1. Selecciona la cámara PoE orientada hacia delante y arranca la aplicación frontal.
2. Haz clic en el objeto o carga que se debe seguir.
3. Añade puntos negativos si la máscara incluye parte del fondo.
4. Borra la selección antes de elegir otro objetivo.

La primera carga del modelo tarda varios segundos. Una vez que se selecciona un objetivo, la máscara lo sigue a través de los fotogramas posteriores e intenta volver a fijarlo si sale brevemente del campo de visión.

### Comprueba la zona de trabajo trasera

Selecciona la cámara PoE orientada hacia atrás y arranca la aplicación trasera. El panel de estado cambia entre `SAFE`, `WARNING` y `DANGER` a medida que la distancia estimada cruza los umbrales configurados.

Antes de usar la distancia mostrada, ajusta los parámetros intrínsecos de la cámara, la altura de montaje, el ángulo de inclinación y la corrección de distancia en `configs/warning.yaml`. Una cámara o posición de montaje diferente requiere una nueva calibración.

### Activa la monitorización de la cabina

Selecciona la cámara USB de cabina y arranca la aplicación de cabina. Las comprobaciones de fatiga y casco tienen interruptores separados. Apaga la ruta que no sea necesaria; su modelo no se cargará.

Coloca la cámara donde la cara del conductor sea visible sin bloquear la vista del operador. Pruébala bajo las mismas condiciones de iluminación que se usan durante los turnos normales.


Comandos de servicio útiles:

```bash
sudo systemctl restart visual-hub
./scripts/run_visual_hub.sh status
./scripts/run_visual_hub.sh stop
journalctl -u visual-hub -f
```

## Rendimiento medido

Estas cifras se midieron con las cuatro aplicaciones ejecutándose en un reComputer Rugged J401 con Jetson Orin NX 16GB. Ejecuta `sudo nvpmodel -m 0 && sudo jetson_clocks` antes de comparar resultados.

| Aplicación | Configuración | Resultado medido |
| --- | --- | --- |
| Segmentación frontal | EfficientTAM-Ti, 512, PyTorch bf16 | Alrededor de 13,2 FPS; la primera carga tarda de 7 a 8 segundos |
| Aviso trasero | Depth Anything V2 Metric Small, TensorRT FP16 | Alrededor de 21 FPS de procesamiento de profundidad |
| Monitorización de cabina | Cámara USB 1280x720 | Alrededor de 5,4 FPS con comprobaciones de fatiga y casco |
| Grabación | Tres flujos, `nvv4l2h264enc` | 3 x 1920x1080 a 15 FPS H.264 |

El rendimiento real depende de la resolución de la cámara, el modo de energía, la temperatura y el número de aplicaciones activas.

## Solución de problemas

| Síntoma | Comprobar | Solución |
| --- | --- | --- |
| El puerto 8000 no está disponible | `systemctl status visual-hub` | Reinicia el servicio e inspecciona `journalctl -u visual-hub` |
| Una aplicación informa `CAMERA_BUSY` | `curl -s http://127.0.0.1:8000/api/hub/status` | Detén la aplicación o la tarea de grabación que mantiene la cámara |
| Una cámara USB no se abre | `sudo dmesg \| grep -i "not enough bandwidth"` | Muévela a USB 3 o detén el otro flujo USB |
| Un flujo RTSP se congela | Comprueba `frame_age_s` en el estado de la aplicación | Confirma la alimentación de la cámara, el presupuesto PoE, la ruta de red y las credenciales RTSP |
| La vista frontal tarda varios segundos en aparecer | `journalctl -u visual-hub` | La primera carga del modelo EfficientTAM normalmente tarda de 7 a 8 segundos |

Para una cámara que falta en el selector, comprueba primero el inventario:

```bash
curl -s http://127.0.0.1:8000/api/hub/cameras
```

Añade fuentes RTSP adicionales a `HUB_EXTRA_CAMERAS` en `/etc/seg-demo/visual-hub.env`, o introduce la URL mediante la fila manual en el selector.

## Seguridad y límites de la aplicación

- La advertencia de zona trasera usa profundidad monocular, no un sensor de distancia física. Poca luz, reflejos, objetos transparentes, una lente sucia o una fuerte vibración pueden producir estimaciones erróneas.
- La monitorización de cabina usa imágenes RGB y reglas de temporización fijas. No tiene calibración por conductor ni soporte de visión nocturna.
- El seguimiento frontal sigue un objetivo seleccionado por el usuario. No identifica el objeto ni decide si es seguro moverlo.
- El modelo de casco es experimental. Revisa su precisión, datos de entrenamiento y licencia antes de usarlo de forma operativa.
## Vídeo de demostración

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/X2OEmbMKadA" title="reComputer Rugged J401 industrial forklift vision demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Recursos
- [Hoja de datos de reComputer Rugged J40](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_rugged_J401_datasheet.pdf) 
- [Esquemático de la placa carrier](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20Carrier%20Board%20V1.1_SCH.pdf)
- [Esquemático de la placa PSE](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20PSE%20Board%20V1.1_SCH.pdf)
- [Archivo 3D](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Rugged_asm.stp)
- [Código fuente de Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [Comparación de dispositivos NVIDIA Jetson](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [Repositorio del proyecto rugged_cv_demo](https://github.com/zibochen6/rugged_cv_demo)
- [EfficientTAM](https://github.com/yformer/EfficientTAM)
- [Depth Anything V2 Metric Indoor Small](https://huggingface.co/depth-anything/Depth-Anything-V2-Metric-Indoor-Small-hf)
- [MediaPipe Face Landmarker](https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker)
- [Primeros pasos con reComputer Rugged J40](https://wiki.seeedstudio.com/es/ai_robotics_recomputer_rugged_j40_getting_started/)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
