---
description: Esta guía muestra cómo construir un sistema de procesamiento de imágenes con cámara USB dual basado en el modelo YOLOv26 y aceleración TensorRT en plataformas Jetson. Recorre la configuración del entorno Docker o local, descarga y preparación de modelos YOLOv26 (detección de objetos, estimación de pose, segmentación), configuración del sistema y despliegue del procesamiento de cámara dual. El sistema cuenta con procesamiento de flujo de video en tiempo real para dos cámaras USB simultáneamente con aceleración TensorRT, vista previa de interfaz web y compresión MJPEG para mejorar la estabilidad.
title: Sistema de Procesamiento de Imágenes con Cámara USB Dual YOLOv26 en Jetson
keywords:
  - reComputer
  - YOLOv26
  - Cámara Dual
  - TensorRT
  - Visión por Computadora
  - Jetson
  - Detección de Objetos
  - Estimación de Pose
  - Segmentación de Imágenes
image: https://files.seeedstudio.com/wiki/Yolo11/connection.webp
slug: /es/ai_robotics_yolov26_dual_camera_system
sku: 100090853,100076722,100060802,100032662
last_update:
  date: 01/28/2026
  author: Lorraine
---

<div style={{ textAlign: "justify" }}>
Esta wiki demuestra cómo construir un sistema de procesamiento de imágenes con cámara USB dual basado en el modelo YOLOv26 y aceleración TensorRT desde cero. El sistema incluye las siguientes características:
</div>

- **Procesamiento Paralelo de Cámara Dual**: Procesamiento de flujo de video en tiempo real para dos cámaras USB simultáneamente
- **Análisis de Visión Multi-tarea**: Detección de objetos, estimación de pose, segmentación de imágenes (modelo SAM)
- **Aceleración TensorRT**: Mejora significativamente la velocidad de inferencia usando el motor NVIDIA TensorRT
- **Vista Previa de Interfaz Web**: Ver resultados de procesamiento en tiempo real a través de un navegador
- **Compresión MJPEG**: Reduce el uso de ancho de banda USB y mejora la estabilidad del sistema

## Prerrequisitos

- [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html) u otros productos de la reComputer Serie
- 2 cámaras USB
- Cable de transmisión de datos USB Type-C (Conectar la cámara)

---

## Descargar desde GitHub

### Método 1: Clonar Todo el Repositorio (Recomendado)

Este es el método más simple para obtener todos los archivos de una vez:

```bash
# 1. Navigate to your home directory
# ！！Replace this with your own username
cd /home/seeed

# 2. Clone the repository
git clone https://github.com/bleaaach/yolov26_jetson.git

# 3. Navigate to the project directory
cd yolov26_jetson

# 4. View downloaded files
ls -la
```
<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/file.png"/></div>

Deberías ver los siguientes archivos:
- `run_dual_camera_docker.sh` - Script de despliegue Docker
- `run_dual_camera_local.sh` - Script de despliegue local
- `README.md` - Este archivo de documentación

### Método 2: Descargar Archivos Individuales

Si solo necesitas archivos de script específicos, puedes descargarlos individualmente usando wget:

```bash
# 1. Navigate to your home directory
cd /home/seeed

# 2. Create project directory
mkdir -p yolov26_jetson
cd yolov26_jetson

# 3. Download Docker script
wget https://raw.githubusercontent.com/bleaaach/yolov26_jetson/main/run_dual_camera_docker.sh

# 4. Download Local script
wget https://raw.githubusercontent.com/bleaaach/yolov26_jetson/main/run_dual_camera_local.sh

# 5. Download README documentation
wget https://raw.githubusercontent.com/bleaaach/yolov26_jetson/main/README.md

# 6. View downloaded files
ls -la
```

### Verificar Archivos Descargados

Después de descargar, verifica que los archivos existan:

```bash
# View file list
ls -la

# Check file permissions
```

Si los scripts no tienen permisos de ejecución, agrégalos:

```bash
# Add execute permissions
chmod +x run_dual_camera_docker.sh
chmod +x run_dual_camera_local.sh

# Check again
ls -la
```

### Comparación de Dos Métodos de Despliegue

| Característica | Método Docker | Método Local |
|---------|---------------|--------------|
| **Aislamiento de Entorno** | ✅ Completamente aislado, no contamina el entorno host | ❌ Instalado directamente en el host |
| **Velocidad de Despliegue** | ✅ Rápido, inicio con un clic | ❌ Requiere instalación manual de muchas dependencias |
| **Acceso a Hardware** | ⚠️ Requiere configuración de mapeo de dispositivos | ✅ Acceso directo a todo el hardware |
| **Rendimiento** | ⚠️ Tiene sobrecarga de contenedor | ✅ Mejor rendimiento |
| **Espacio de Almacenamiento** | ⚠️ Requiere imagen Docker de ~2GB | ✅ Menor uso de almacenamiento |
| **Caso de Uso Recomendado** | Pruebas rápidas, despliegue multi-dispositivo | Entorno de producción, mejor rendimiento |

---

## (Opción 1) Configuración de Entorno Local

**Paso 1.** Actualizar Lista de Paquetes e Instalar pip

```bash
# Update package list
sudo apt update

# Install pip
sudo apt install python3-pip -y

# Upgrade pip
pip install -U pip
```

Si pip no está preinstalado en el sistema, usa el siguiente comando para instalar:

```bash
# Download get-pip.py
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py

# Install pip
python3 get-pip.py --user
```

**Paso 2.** Instalar Paquete Ultralytics

Instala Ultralytics y sus dependencias opcionales (para exportación de modelos):

```bash
# Install Ultralytics
~/.local/bin/pip install ultralytics[export]
```

**Paso 3.** Instalar PyTorch y Torchvision

**Importante**: PyTorch y Torchvision instalados vía pip no son compatibles con la arquitectura ARM64 de Jetson. Necesitas instalar manualmente versiones construidas específicamente para Jetson.

Primero desinstala versiones incompatibles:

```bash
# Uninstall incompatible versions
~/.local/bin/pip uninstall torch torchvision -y
```

Luego instala versiones compatibles con JetPack 6.1:

```bash
# Install PyTorch 2.5.0
~/.local/bin/pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/torch-2.5.0a0+872d972e41.nv24.08-cp310-cp310-linux_aarch64.whl

# Install Torchvision 0.20
~/.local/bin/pip install https://github.com/ultralytics/assets/releases/download/v0.0.0/torchvision-0.20.0a0+afc54f7-cp310-cp310-linux_aarch64.whl
```

Si la descarga de GitHub es lenta, puedes usar un proxy de aceleración:

```bash
# Use gh proxy to download PyTorch
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/torch-2.5.0a0+872d972e41.nv24.08-cp310-cp310-linux_aarch64.whl

# Use gh proxy to download Torchvision
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/torchvision-0.20.0a0+afc54f7-cp310-cp310-linux_aarch64.whl
```

**Paso 4.** Instalar cuSPARSELt

cuSPARSELt es una dependencia de PyTorch 2.5.0 y necesita ser instalado por separado:

```bash
# Install cuSPARSELt
sudo apt-get install -y libcusparselt0
```

**Paso 5.** Instalar onnxruntime-gpu

onnxruntime-gpu se usa para algunas funciones de exportación de modelos. Dado que el paquete en PyPI no contiene binarios aarch64 para Jetson, se requiere instalación manual:

```bash
# Install onnxruntime-gpu 1.23.0
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.23.0-cp310-cp310-linux_aarch64.whl
```

O usa la versión 1.20.0:

```bash
# Install onnxruntime-gpu 1.20.0
~/.local/bin/pip install https://gh-proxy.com/https://github.com/ultralytics/assets/releases/download/v0.0.0/onnxruntime_gpu-1.20.0-cp310-cp310-linux_aarch64.whl
```

**Paso 6.** Configurar Variable de Entorno PATH

Dado que se usa el modo de instalación de usuario, los ejecutables instalados por pip se ubican en el directorio `~/.local/bin/`. Se recomienda agregar este directorio a la variable de entorno PATH:

```bash
# Add to .bashrc
echo 'export PATH=$PATH:~/.local/bin' >> ~/.bashrc

# Reload .bashrc
source ~/.bashrc
```

**Paso 7.** Verificar Instalación

Verifica las versiones de paquetes instalados:

```bash
# Check versions
python3 -c "import ultralytics; import torch; import torchvision; import onnxruntime; print('ultralytics version:', ultralytics.__version__); print('torch version:', torch.__version__); print('torchvision version:', torchvision.__version__); print('onnxruntime version:', onnxruntime.__version__)"
```

Salida esperada:

```
ultralytics version: 8.4.7
torch version: 2.5.0a0+872d972e41.nv24.08
torchvision version: 0.20.0a0+afc54f7
onnxruntime version: 1.23.0
```

**Paso 8.** Probar Funcionalidad de Inferencia YOLOv26

```python
from ultralytics import YOLO
import torch

# Check if CUDA is available
print(f"CUDA available: {torch.cuda.is_available()}")
if torch.cuda.is_available():
    print(f"CUDA device count: {torch.cuda.device_count()}")
    print(f"CUDA device name: {torch.cuda.get_device_name(0)}")

# Load YOLOv26n model
model = YOLO('yolo26v26n.pt')
print(f"Model loaded successfully!")

# Perform inference test
results = model('https://ultralytics.com/images/bus.jpg')
print(f"Inference successful! Detected {len(results[0].boxes)} objects")

# Display detection results
for i, box in enumerate(results[0].boxes):
    cls_id = int(box.cls[0])
    conf = float(box.conf[0])
    cls_name = model.names[cls_id]
    print(f"  Object {i+1}: {cls_name} (confidence: {conf:.2f})")
```

**Paso 9.** Preparar Archivos de Modelo

Asegúrate de que los archivos de modelo se descarguen en la ubicación correcta:

```bash
# Check model directory
ls -la /home/seeed/ultralytics_data/

# Create directory if it doesn't exist
mkdir -p /home/seeed/ultralytics_data
```

Si los archivos de modelo no existen, descárgalos primero:

```bash
# Navigate to model directory
cd /home/seeed/ultralytics_data

# Download object detection model
yolo export model=yolov26n.pt format=engine device=0

# Download pose estimation model
yolo export model=yolov26n-pose.pt format=engine device=0

# Download segmentation model
yolo export model=yolov26n-seg.pt format=engine device=0

# Verify model files
ls -la
```

Deberías ver los siguientes archivos:
- `yolo26n.engine`
- `yolo26n-pose.engine`
- `yolo26n-seg.engine`

**Paso 10.** Ejecutar Script Local

Ahora puedes ejecutar el script Local:

```bash
# 1. Navigate to project directory
cd /home/seeed/yolov26_jetson

# 2. Ensure script has execute permissions
chmod +x run_dual_camera_local.sh

# 3. Run Local script
./run_dual_camera_local.sh
```

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/local.png"/></div>

---

## (Opción 2) Configuración de Entorno Docker

**Paso 1.** Asegurar que Docker esté Instalado

Primero verifica si Docker está instalado:

```bash
# Check Docker version
docker --version
```

Si Docker no está instalado, instálalo primero:

```bash
# Update package list
sudo apt update

# Install Docker
sudo apt install docker.io -y

# Start Docker service
sudo systemctl start docker

# Add current user to docker group
sudo usermod -aG docker $USER

# Re-login to apply changes
newgrp docker
```

Para más detalles sobre la configuración del entorno Docker, consulta este repositorio de GitHub: https://github.com/zibochen6/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.7-Docker/

**Paso 2.** Asegurar que el Servicio Docker esté Ejecutándose

```bash
# Check Docker service status
sudo systemctl status docker
```

Si Docker no está ejecutándose, inícialo:

```bash
# Start Docker service
sudo systemctl start docker
```

**Paso 3.** Preparar Archivos de Modelo

Asegúrate de que los archivos del modelo se descarguen en la ubicación correcta:

```bash
# Check model directory
ls -la /home/seeed/ultralytics_data/

# Create directory if it doesn't exist
mkdir -p /home/seeed/ultralytics_data
```

Si los archivos del modelo no existen, descárgalos primero:

```bash
# Navigate to model directory
cd /home/seeed/ultralytics_data

# Download object detection model
yolo export model=yolov26n.pt format=engine device=0

# Download pose estimation model
yolo export model=yolov26n-pose.pt format=engine device=0

# Download segmentation model
yolo export model=yolov26n-seg.pt format=engine device=0

# Verify model files
ls -la
```

Deberías ver los siguientes archivos:
- `yolo26n.engine`
- `yolo26n-pose.engine`
- `yolo26n-seg.engine`

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/yolov26_on_jetson/export.png"/></div>

**Paso 4.** Ejecutar Script de Docker

Ahora puedes ejecutar el script de Docker:

```bash
# 1. Navigate to project directory
cd /home/seeed/yolov26_jetson

# 2. Ensure script has execute permissions
chmod +x run_dual_camera_docker.sh

# 3. Run Docker script
./run_dual_camera_docker.sh
```

**Paso 5.** Acceder a la Interfaz Web

Abre la siguiente dirección en tu navegador:

```
http://localhost:5000
```

En este momento el navegador mostrará las transmisiones en tiempo real de ambas cámaras lado a lado, similar a "Transmisión de Cámara Izquierda | Transmisión de Cámara Derecha". La velocidad de fotogramas y resolución reales dependen del rendimiento de tu hardware.

:::note
Si necesitas reiniciar el sistema:

```bash
# 1. Stop and remove existing container
docker rm -f dual-camera-system

# 2. Re-run script
cd /home/seeed/yolov26_jetson
./run_dual_camera_docker.sh
```

:::
---

## Recursos

- [Guía de Inicio Rápido: NVIDIA Jetson con Ultralytics YOLO26](https://docs.ultralytics.com/guides/nvidia-jetson/)
- [Instalar Docker](https://github.com/zibochen6/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.7-Docker/)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir productos de Seeed Studio! Para soporte técnico y discusión de productos, utiliza los siguientes canales:

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
