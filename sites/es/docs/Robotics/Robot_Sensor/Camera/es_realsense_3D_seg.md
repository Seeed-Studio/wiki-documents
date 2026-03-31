---
description: Este wiki demuestra la reconstrucción de nubes de puntos con una cámara de profundidad RealSense y la detección de cajas delimitadoras 3D para objetos objetivo.
title: Segmentación 3D con RealSense
keywords:
  - RealSense
  - YOLO
  - realsense camera
  - GPU acceleration
  - RGB-D camera
image: https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/3D_Seg/tableseg.webp
slug: /realsense_3d_seg
sku: 113990795,100000540
last_update:
  date: 2025-10-10T00:00:00.000Z
  author: ZhangJiaQuan
createdAt: '2026-03-28'
updatedAt: '2026-03-31'
url: https://wiki.seeedstudio.com/es/realsense_3d_seg/
translation:
  skip:
    - zh-CN
---
# Segmentación 3D con RealSense
<div align="center">
    <img width={900}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/3D_Seg/tableseg.jpg" />
</div>
## Descripción del dispositivo

### RealSense D405

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" />
</div>

La cámara de profundidad RealSense D405 es una cámara estéreo de corto alcance diseñada para tareas de visión por computadora de cerca con precisión submilimétrica. Su rango de funcionamiento ideal es de **7 cm a 50 cm**. Incorpora sensores de obturador global de alta resolución y utiliza un procesador de señal de imagen (ISP) para generar datos RGB alineados sin necesidad de un sensor RGB dedicado. Esta cámara compacta está optimizada para robótica de precisión, imágenes médicas y escenarios de inspección automatizada.

### RealSense D435i

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" />
</div>

La cámara de profundidad RealSense D435i es una cámara estéreo que combina percepción de profundidad y seguimiento de movimiento, diseñada para robótica, reconstrucción 3D, SLAM y aplicaciones de percepción automatizada. Utiliza tecnología de profundidad estéreo activa y proporciona un amplio campo de visión, sensores de profundidad con obturador global, imagen en color RGB y una IMU integrada, lo que permite la salida sincronizada de datos de profundidad, color y movimiento. Esta cámara compacta es adecuada para tareas de visión por computadora de corto a medio alcance, como evitación de obstáculos para robots móviles, modelado espacial, planificación de trayectorias y percepción del entorno en tiempo real.

## Introducción

Esta demostración se basa en segmentación con OpenCV y utiliza una cámara de profundidad para la reconstrucción de nubes de puntos y la detección de objetos objetivo sobre la nube de puntos reconstruida. Produce la siguiente información:

- Categoría del objeto
- Coordenadas XYZ del centro del objeto
- Dimensiones de la caja delimitadora
- Ángulo de guiñada (yaw) de la caja delimitadora

También admite visualización mediante Open3D. Esta solución es adecuada para tareas de percepción robótica como agarre sobre mesa, localización de objetos y filtrado de poses de agarre candidatas, y puede proporcionar información geométrica 3D estable para la planificación de agarre de brazos robóticos y operaciones posteriores.

## Requisitos previos

- RealSense D435i o RealSense D405

## Inicio rápido

### 1. Obtener el código del proyecto

Primero, clona el proyecto localmente y entra en el directorio del proyecto:

```bash
git clone git@github.com:Miscanthus40076/TabletopSeg3D.git
cd TabletopSeg3D
```

> Nota: Todos los comandos de instalación y ejecución siguientes se ejecutan desde el directorio raíz del proyecto `TabletopSeg3D` por defecto.

### 2. Entorno virtual de Python

Se recomienda usar un entorno virtual de Python dedicado. La versión sugerida es **Python 3.11**.

Crea un entorno con `conda`:

```bash
conda create -n tabletopseg3d python=3.11
conda activate tabletopseg3d
```

Crea un entorno con `venv`:

```bash
python3.11 -m venv .venv
source .venv/bin/activate
```

### 3. Dependencias del sistema

Antes de ejecutar este proyecto, tu sistema debe tener instalado el **Intel RealSense SDK / librealsense** para admitir la adquisición de datos y el acceso al controlador de la cámara de profundidad.

Notas:

- Si solo quieres leer el código, escribir documentación o realizar análisis estático, puedes omitir por ahora esta dependencia.
- Si quieres conectar una cámara de profundidad y ejecutar realmente esta demostración, esta dependencia debe instalarse de antemano.

### 4. Instalar dependencias de Python

Este proyecto proporciona dos rutas de instalación recomendadas:

- Instalación por defecto en CPU
- Instalación acelerada por GPU

Puedes elegir la opción adecuada según tu hardware.

#### 4.1 Instalación por defecto en CPU

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
python -m pip install -r requirements.txt
```

#### 4.2 Aceleración por GPU

Si tu dispositivo tiene una GPU NVIDIA y un entorno CUDA configurado correctamente, puedes usar la ruta de instalación con GPU para mejorar el rendimiento de inferencia de segmentación de YOLO.

Antes de continuar, asegúrate de que tu sistema cumpla los siguientes requisitos:

- El controlador de la GPU NVIDIA está instalado
- Está instalado un entorno de ejecución CUDA compatible con el controlador
- Planeas instalar compilaciones GPU de `torch` y `torchvision` que coincidan con tu versión de CUDA

Instala las versiones para GPU de `torch` y `torchvision` que coincidan con tu versión de CUDA:

```bash
pip install torch torchvision --index-url https://download.pytorch.org/whl/cuXXX
```

Donde:

- Sustituye `cuXXX` por la etiqueta real de la versión de CUDA
- Algunos ejemplos comunes incluyen `cu121` y `cu124`

## 5. Ejecución

### 5.1 Obtener el número de serie del dispositivo

```bash
python scripts/realtime_open3d_scene.py --list-devices
```

### 5.2 Iniciar el modo de visualización

Sustituye el número de serie por el número de serie real de tu dispositivo:

```bash
python scripts/realtime_open3d_scene.py \
  --serial 419522072950 \
  --device cpu \
  --show-labels
```

### 5.3 Ejecutar sin interfaz gráfica

Si no necesitas la interfaz gráfica de Open3D y quieres obtener directamente resultados de detección estructurados para cada fotograma, puedes ejecutar en modo sin cabeza (headless):

```bash
python scripts/realtime_open3d_scene.py \
  --serial 419522072950 \
  --device cpu \
  --frames 10 \
  --no-display
```

En este modo, el programa genera datos JSON fotograma a fotograma, que incluyen principalmente:

- Categoría del objetivo
- Coordenadas 3D del centro del objetivo
- Dimensiones de la caja delimitadora del objetivo
- Ángulo de guiñada (yaw) de la caja delimitadora del objetivo

### 5.4 Parámetros recomendados para la D405

Para cámaras de profundidad de corto alcance como la D405, normalmente se recomienda estrechar el rango de profundidad válido para obtener resultados de nube de puntos más estables.

```bash
python scripts/realtime_open3d_scene.py \
  --serial 409122273421 \
  --device cpu \
  --min-depth 0.02 \
  --max-depth 0.50
```
