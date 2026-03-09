---
description: Esta guía muestra cómo construir un sistema de procesamiento de imágenes con cámara GMSL dual basado en el modelo YOLOv26 y aceleración TensorRT en plataformas Jetson. Está dirigido específicamente a las cámaras Sensing SG3S-ISX031C-GMSL2F en reComputer J4012/AGX Orin, logrando un rendimiento de 1920x1536@30fps.
title: Sistema de Procesamiento de Imágenes con Cámara GMSL Dual YOLOv26 en Jetson
keywords:
  - re
  - YOLOv26
  - Dual GMSL Camera
  - TensorRT
  - SG3S-ISX031C-GMSL2F
  - Computer Vision
  - Jetson
  - Object Detection
  - Pose Estimation
  - Image Segmentation
image: https://files.seeedstudio.com/wiki/yolov26_on_jetson/local.png
slug: /esai_roboticsyolov26_dual_camera_system
sku: 100090853,100076722,100060802,100032662
last_update:
  date: 02/10/2026
  author: Lorraine
createdAt: '2026-01-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/esai_roboticsyolov26_dual_camera_system/
---
## Introducción

Con el rápido avance de la inteligencia artificial y la tecnología de computación en el borde, los sistemas de visión industrial están evolucionando hacia una mayor inteligencia y capacidades de procesamiento en tiempo real. Los sistemas de procesamiento de imágenes con cámara dual impulsados por modelos de aprendizaje profundo permiten el análisis simultáneo desde múltiples perspectivas, la detección de objetos, la estimación de pose y la segmentación por instancias. Esto mejora la eficiencia y la precisión de las aplicaciones de inspección industrial, robótica y monitorización automatizada. Esta guía presentará cómo construir un sistema de procesamiento de imágenes con cámara GMSL dual de alto rendimiento utilizando YOLOv26 y aceleración TensorRT en la plataforma NVIDIA Jetson.

<div align="center">
    <img width={1000}
     src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/detect.png" />
</div>

En este wiki, desplegaremos modelos **YOLOv26** optimizados con **TensorRT** en el **reComputer Robotics J5011** para lograr análisis de visión multitarea en tiempo real. El sistema utiliza cámaras GMSL (Gigabit Multimedia Serial Link) para transmisión de vídeo de gran ancho de banda y baja latencia, lo que lo hace ideal para aplicaciones industriales en entornos exigentes. Ejecutaremos simultáneamente tres variantes del modelo YOLOv26: Detección de Objetos, Estimación de Pose y Segmentación por Instancias, todas aceleradas por TensorRT para obtener el máximo rendimiento en la potente GPU de Jetson Orin.

**¿Qué es un Sistema de Procesamiento de Imágenes con Cámara GMSL Dual?**

Un sistema de procesamiento de imágenes con cámara GMSL dual es una solución de IA en el borde que integra dos cámaras de alta resolución con capacidades de inferencia de aprendizaje profundo. A diferencia de los sistemas de visión tradicionales de una sola cámara, una configuración de cámara dual proporciona:
- **Visión Estéreo**: Permite la percepción de profundidad y la reconstrucción de escenas 3D
- **Campo de Visión Más Amplio**: Cubre áreas más grandes con perspectivas superpuestas
- **Redundancia**: Garantiza el funcionamiento continuo incluso si una cámara falla
- **Análisis Multiángulo**: Captura objetos desde diferentes puntos de vista para una mejor precisión de reconocimiento

El sistema aprovecha la interfaz GMSL para una transmisión de vídeo fiable a largas distancias (hasta 15 metros) con cables apantallados, lo que lo hace adecuado para entornos industriales con interferencias electromagnéticas.

**¿Por qué YOLOv26 en Jetson?**

La [Ultralytics Jetson Guide](https://docs.ultralytics.com/guides/nvidia-jetson/) enumera varias ventajas de YOLOv26 para el despliegue embebido:

1. **Alta Eficiencia en ARM64**: La arquitectura del modelo está optimizada para el procesador ARM64 en los dispositivos Jetson, manteniendo un bajo consumo de energía mientras conserva un alto rendimiento.
2. **Aceleración con Tensor Cores**: Cuando se exporta a **TensorRT**, YOLOv26 utiliza los Tensor Cores dedicados en la arquitectura de GPU Ampere de Jetson Orin. Esto permite:
    -   **Baja Latencia**: Fundamental para la inspección industrial en tiempo real.
    -   **Alto Rendimiento**: Capaz de procesar múltiples flujos de alta resolución simultáneamente.
3. **Marco Unificado**: Una sola arquitectura admite múltiples tareas (Detección, Segmentación, Pose), lo que simplifica el despliegue en dispositivos de borde con recursos limitados.

<div align="center">
    <img width={600}
    src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J5011-with-GMSL-extension-board-p-6681.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={'4'}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

## Características Clave

- **Captura GMSL de Alta Resolución**: Admite dos cámaras [Sensing SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html) a una resolución de **1920x1536**.
- **Inferencia Solo con TensorRT**: Elimina la sobrecarga de tiempo de ejecución de PyTorch utilizando motores puros de TensorRT para el máximo rendimiento.
- **Análisis de Visión Multitarea**: Detección de Objetos, Estimación de Pose y Segmentación por Instancias de forma concurrente.
- **Optimización Industrial**:
    - **Entrada**: 1920x1536 @ 30fps (Raw YUY2)
    - **Latencia**: Minimizada mediante búferes DMA y una canalización multihilo

## Descripción General del Modelo YOLOv26

El sistema utiliza la arquitectura **YOLOv26** para visión por computadora en tiempo real. Desplegamos modelos de la serie **Nano (n)**, que funcionan bien en dispositivos de IA en el borde como NVIDIA Jetson Orin.

**Modelos Desplegados**

Ejecutamos tres variantes de modelo simultáneamente:

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/file2.png"/></div>

1.  **Detección de Objetos (`yolov26n`)**:
    -   **Tarea**: Detección y clasificación mediante cajas delimitadoras.
    -   **Clases**: 80 clases COCO estándar (Persona, Vehículo, etc.).
    -   **Ventaja**: Inferencia extremadamente rápida para la localización primaria de objetos.

2.  **Estimación de Pose (`yolov26n-pose`)**:
    -   **Tarea**: Detección de puntos clave del esqueleto humano (17 puntos clave).
    -   **Ventaja**: Análisis de comportamiento en tiempo real sin bibliotecas externas de pose pesadas.

3.  **Segmentación por Instancias (`yolov26n-seg`)**:
    -   **Tarea**: Enmascaramiento de objetos a nivel de píxel.
    -   **Ventaja**: Proporciona contornos precisos de los objetos, útil para la detección de defectos donde las cajas delimitadoras no son suficientes.

**Estrategia de Optimización**: Todos los modelos se exportan al formato **TensorRT Engine (.engine)** con **precisión FP16**. Esto elimina la sobrecarga del tiempo de ejecución de PyTorch y maximiza el uso de los más de 100 TOPS (Tera Operaciones por Segundo) de rendimiento de IA de Orin.

## Requisitos Previos

**Hardware**

- **[reComputer Robotics J5011](https://www.seeedstudio.com/reComputer-Robotics-J5011-with-GMSL-extension-board-p-6681.html)**
- **2x [Sensing SG3S-ISX031C-GMSL2F Camera](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)**
- **Placa Deserializadora GMSL**: Compatible con Jetson Orin (asegúrate de que los controladores estén instalados)
- **Cables**: Cables Fakra de alta calidad

**Software**
- **JetPack 6.x** (L4T 36.x)
- **GStreamer** con complementos de aceleración NVIDIA (`nvv4l2camerasrc` o `v4l2src` estándar con `io-mode=dmabuf`)
- **Python 3.10+**
- **Ultralytics YOLOv26**

---

## Instalación y Configuración

**Paso 0:Comprobar Parámetros de la Cámara**

Primero, comprueba los formatos y tasas de fotogramas compatibles con tu cámara usando v4l2-ctl:

```bash
v4l2-ctl -d /dev/video0 --list-formats-ext
v4l2-ctl -d /dev/video1 --list-formats-ext
```

Este comando mostrará la tasa de fotogramas máxima de la cámara a diferentes resoluciones. Usando la cámara SG3S-ISX031C-GMSL2F como ejemplo, la salida muestra:

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/dp.png"/></div>

:::note
<mark>El límite de 30fps a una resolución de 1920x1536 es una limitación del hardware de la cámara, no el techo de rendimiento del AGX Orin.</mark> El AGX Orin es capaz de procesar tasas de fotogramas mucho más altas con resoluciones más bajas o modelos más ligeros. Si estás utilizando un modelo de cámara diferente, consulta su hoja de datos para conocer la tasa de fotogramas máxima a tu resolución objetivo.
:::

**Paso 1:Clonar el Repositorio**

```bash
cd /home/seeed
git clone https://github.com/bleaaach/yolov26_jetson.git
cd yolov26_jetson
```
<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/file.png"/></div>

**Pasos Detallados de Instalación**

Sigue estos pasos para configurar el entorno desde cero.

**Paso 1:Actualizar la Lista de Paquetes e Instalar pip**

```bash
sudo apt update
sudo apt install python3-pip -y
pip install -U pip
```

Si pip no está preinstalado en el sistema, utiliza este comando para instalarlo:

```bash
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3 get-pip.py --user
```

**Paso 2:Instalar el Paquete Ultralytics**

```bash
~/.local/bin/pip install ultralytics[export]
```

**Paso 3:Instalar PyTorch y Torchvision**

PyTorch y Torchvision instalados mediante pip no son compatibles con la arquitectura ARM64 de Jetson. Debes instalar manualmente versiones construidas específicamente para Jetson.

Primero desinstala las versiones incompatibles:

```bash
~/.local/bin/pip uninstall torch torchvision -y
```

Luego instala las versiones compatibles con JetPack 6.1:

```bash
~/.local/bin/pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/torch-2.5.0a0+872d972e41.nv24.08-cp310-cp310-linux_aarch64.whl
~/.local/bin/pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/torchvision-0.20.0a0+afc54f7-cp310-cp310-linux_aarch64.whl
```

Si la descarga desde GitHub es lenta, puedes usar un proxy de aceleración:

```bash
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/torch-2.5.0a0+872d972e41.nv24.08-cp310-cp310-linux_aarch64.whl
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/torchvision-0.20.0a0+afc54f7-cp310-cp310-linux_aarch64.whl
```

**Paso 4:Instalar cuSPARSELt**

```bash
sudo apt-get install -y libcusparselt0
```

**Paso 5:Instalar onnxruntime-gpu**

onnxruntime-gpu se utiliza para algunas funciones de exportación de modelos. Dado que el paquete en PyPI no contiene binarios aarch64 para Jetson, se requiere instalación manual:

```bash
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.23.0-cp310-cp310-linux_aarch64.whl
```

O utiliza la versión 1.20.0:

```bash
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.20.0-cp310-cp310-linux_aarch64.whl
```

**Paso 6:Configurar la Variable de Entorno PATH**

```bash
echo 'export PATH=$PATH:~/.local/bin' >> ~/.bashrc
source ~/.bashrc
```

**Paso 7:Verificar la Instalación**

```bash
python3 -c "import ultralytics; import torch; import torchvision; import onnxruntime; print('ultralytics version:', ultralytics.__version__); print('torch version:', torch.__version__); print('torchvision version:', torchvision.__version__); print('onnxruntime version:', onnxruntime.__version__)"
```

Salida esperada:

```
ultralytics version: 8.4.7
torch version: 2.5.0a0+872d972e41.nv24.08
torchvision version: 0.20.0a0+afc54f7
onnxruntime version: 1.23.0
```

**Paso 8:Probar la funcionalidad de inferencia de YOLOv26**

```python
from ultralytics import YOLO
import torch

print(f"CUDA available: {torch.cuda.is_available()}")
if torch.cuda.is_available():
    print(f"CUDA device count: {torch.cuda.device_count()}")
    print(f"CUDA device name: {torch.cuda.get_device_name(0)}")

model = YOLO('yolov26n.pt')
print(f"Model loaded successfully!")

results = model('https://ultralytics.com/images/bus.jpg')
print(f"Inference successful! Detected {len(results[0].boxes)} objects")

for i, box in enumerate(results[0].boxes):
    cls_id = int(box.cls[0])
    conf = float(box.conf[0])
    cls_name = model.names[cls_id]
    print(f"  Object {i+1}: {cls_name} (confidence: {conf:.2f})")
```

**Paso 9:Preparar archivos de modelo**

```bash
ls -la /home/seeed/ultralytics_data/
mkdir -p /home/seeed/ultralytics_data
```

Si los archivos de modelo no existen, descárgalos primero:

```bash
cd /home/seeed/ultralytics_data
yolo export model=yolov26n.pt format=engine device=0 half=True
yolo export model=yolov26n-pose.pt format=engine device=0 half=True
yolo export model=yolov26n-seg.pt format=engine device=0 half=True
ls -la
```

Deberías ver los siguientes archivos:
- `yolov26n.engine`
- `yolov26n-pose.engine`
- `yolov26n-seg.engine`

**Paso 10:Ejecutar script local**

```bash
cd /home/seeed/yolov26_jetson
chmod +x run_dual_gmsl_local.sh
./run_dual_gmsl_local.sh
```

---

## Configuración y ejecución

El sistema utiliza `run_dual_gmsl_local.sh`, que está preconfigurado para la cámara SG3S-ISX031C.

**Detalles de configuración de la cámara**

| Parámetro | Valor | Nota |
|-----------|-------|------|
| **Modelo de cámara** | SG3S-ISX031C-GMSL2F | Cámara Sensing GMSL2 |
| **Resolución de captura** | **1920 x 1536** | Resolución completa del sensor |
| **FPS de captura** | **30 FPS** | Frecuencia de fotogramas nativa |
| **Resolución de proceso** | 640 x 480 | Reducción de escala mediante hardware (VIC) para inferencia |
| **Formato de píxel** | YUY2 | Convertido a BGR mediante hardware |

**Ejecución del sistema**

```bash
cd /home/seeed/yolov26_jetson
chmod +x run_dual_gmsl_local.sh
./run_dual_gmsl_local.sh
```

<video src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/test.mp4" controls width="800"></video>

:::note
La cámara SG3S-ISX031C-G-GMSL2F tiene una frecuencia máxima de visualización de 30 fps a resolución completa (1920x1536). Esta es una limitación del hardware de la cámara, no el techo de rendimiento del AGX Orin. El AGX Orin es capaz de procesar frecuencias de fotogramas mucho más altas con resoluciones más bajas o modelos más ligeros. Para obtener una referencia sobre el rendimiento típico de inferencia del AGX Orin, consulta la [Guía de Jetson de Ultralytics](https://docs.ultralytics.com/guides/nvidia-jetson/#nvidia-jetson-agx-orin-developer-kit-64gb).
:::

## Solución de problemas

- **¿FPS bajos?**: Asegúrate de estar usando los modelos `.engine`, no `.pt`. El script fuerza el uso de `.engine`.
- **¿Sin vídeo?**: Comprueba las conexiones GMSL y asegúrate de que existan los dispositivos `/dev/video*`. Verifica los controladores con `v4l2-ctl --list-devices`.

## Recursos

- [Página de producto Sensing SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- [Centro de descargas de NVIDIA Jetson](https://developer.nvidia.com/embedded/downloads)
- [Guía de Ultralytics YOLOv26 en NVIDIA Jetson](https://docs.ultralytics.com/guides/nvidia-jetson/)


## Soporte técnico y debate sobre el producto

Gracias por elegir productos de Seeed Studio. Para soporte técnico y debate sobre el producto, utiliza los siguientes canales:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
