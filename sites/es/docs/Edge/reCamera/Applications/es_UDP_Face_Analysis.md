---
description: Esta demostración muestra cómo realizar detección de rostros en tiempo real, análisis de atributos (edad/género/raza) y reconocimiento de emociones en reCamera, y luego transmitir los resultados vía UDP a un PC para su visualización.
title: Análisis de Rostros por UDP con reCamera
keywords:
  - reCamera
  - Detección de Rostros
  - Edad Género Raza
  - Reconocimiento de Emociones
  - Transmisión UDP
  - Edge AI
  - YOLO
image: https://files.seeedstudio.com/wiki/reCamera/recamera-udp-face-show.gif
slug: /recamera_udp_face_analysis
sku: 102991897,102991896,102991894,102991895,101991223,102991898,101991224,102991899,108990119,108990120,E20245041001,100018917, 100041077, 100029708, 100074316
sidebar_position: 12
last_update:
  date: 04/30/2026
  author: Samuel
createdAt: '2026-04-30'
updatedAt: '2026-04-30'
url: https://wiki.seeedstudio.com/es/recamera_udp_face_analysis/
---

# Análisis de Rostros por UDP con reCamera

## Introducción

Esta demostración muestra cómo construir un sistema de análisis de rostros en tiempo real usando reCamera. El sistema realiza:

- **Detección de Rostros**: Usando el modelo de detección de rostros YOLO
- **Análisis de Atributos**: Estimación de edad, género y raza usando el modelo FairFace
- **Reconocimiento de Emociones**: Detección de emociones en 7 clases
- **Transmisión UDP**: Envía fotogramas JPEG con metadatos de detección al PC vía UDP

La aplicación en C++ se ejecuta en reCamera y envía fotogramas de video junto con los resultados de detección (cajas delimitadoras, atributos) a través de UDP. Un script receptor en Python ejecutándose en tu PC muestra el flujo de video anotado en tiempo real.

**Características clave**:
- Detección de rostros en tiempo real con control del umbral de confianza
- Análisis de múltiples atributos por rostro (género, edad, raza, emoción)
- Transmisión UDP eficiente con compresión JPEG
- Inferencia con salto de fotogramas para reducir la carga de CPU/TPU
- Estadísticas de rendimiento detalladas

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/recamera-udp-face-show.gif" /></div>

## Configuración de la Demo

Para configurar esta demostración, necesitas:

1. Compilar el programa en C++ en ReCamera
2. Ejecutar el ejecutable compilado en ReCamera
3. Ejecutar el script receptor en Python en tu PC

### 1. Compilar el Programa en C++

:::note
Antes de compilar esta solución, asegúrate de haber configurado el entorno de **ReCamera-OS** según la documentación principal del proyecto.
:::

Configura las siguientes variables de entorno para el entorno de compilación de **ReCamera-OS** antes de ejecutar `cmake`:

```bash
export PATH='current compile chain path'/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

Primero, asegúrate de tener los modelos requeridos:
- `yolo_face.cvimodel` - Modelo de detección de rostros YOLO
- `age_gender_race.cvimodel` - Modelo FairFace para edad/género/raza
- `emotion.cvimodel` - Modelo de reconocimiento de emociones

Puedes descargar estos tres archivos de modelo desde la [versión sscma-example-sg200x v1.0.1](https://github.com/RobotXTeam/sscma-example-sg200x/releases/tag/v1.0.1), o entrenar tus propios modelos y luego cuantizarlos/convertirlos al formato `.cvimodel`.

Navega al directorio de la solución y compila:

```bash
git clone https://github.com/RobotXTeam/sscma-example-sg200x.git
cd sscma-example-sg200x/solutions/sesg-project/face_udp
export SG200X_SDK_PATH='current clone path'/sg2002_recamera_emmc
rm -rf build && mkdir build && cd build
cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-std=c++17" ..
make -j$(nproc)
```

El ejecutable compilado estará en: `build/face_udp`

:::note
El repositorio incluye modelos precompilados en la carpeta de la solución:
- `yolo-face_mixfp16.cvimodel`
- `age_gender_race_bf16.cvimodel`
- `emotion_bf16.cvimodel`
:::

### 2. Configurar ReCamera

:::warning
Antes de ejecutar el programa en C++, debes detener los servicios predeterminados de Node-RED ya que ocupan los recursos de la cámara. Ejecuta los siguientes comandos vía SSH:
:::

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```

### 3. Ejecutar el Ejecutable en ReCamera

Sube el ejecutable compilado y los modelos a `/home/recamera/` en ReCamera, luego ejecuta:

```bash
chmod +x face_udp
./face_udp <yolo_face.cvimodel> <age_gender_race.cvimodel> <emotion.cvimodel> [single|multi] [threshold] [skip] [udp_ip] [udp_port] [log_every_n_infer]
```

#### Parámetros

| Parámetro | Descripción | Predeterminado |
|-----------|-------------|----------------|
| `yolo_face.cvimodel` | Modelo de detección de rostros YOLO (requerido) | - |
| `age_gender_race.cvimodel` | Modelo FairFace (requerido) | - |
| `emotion.cvimodel` | Modelo de emociones (requerido) | - |
| `single\|multi` | Tipo de cabeza YOLO | multi |
| `threshold` | Umbral de detección | 0.5 (multi) / 0.7 (single) |
| `skip` | Inferencia cada N fotogramas | 3 (multi) / 1 (single) |
| `udp_ip` | Dirección IP del PC para UDP | - |
| `udp_port` | Número de puerto UDP | - |
| `log_every_n_infer` | Imprimir registro cada N inferencias | 20 |

#### Comandos de Ejemplo

**Uso básico (sin transmisión UDP)**:
```bash
./face_udp yolo-face_mixfp16.cvimodel age_gender_race_bf16.cvimodel emotion_bf16.cvimodel
```

**Con transmisión UDP**:
```bash
./face_udp yolo-face_mixfp16.cvimodel age_gender_race_bf16.cvimodel emotion_bfpf16.cvimodel multi 0.5 3 192.168.31.100 5001
```

:::note
Recuerda reemplazar `192.168.31.100` con la dirección IP real de tu PC en la misma red que ReCamera.
:::

### 4. Ejecutar el Receptor en Python en el PC

En tu PC, asegúrate de tener instalado Python con las bibliotecas requeridas:

```bash
pip install opencv-python numpy
```

Navega al directorio de la solución y ejecuta:

```bash
cd sscma-example-sg200x/solutions/sesg-project/face_udp
python3 udp_receiver.py
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/udp_receiver_show.png" /></div>

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/udp_receiver_demo.gif" /></div>

## Salida Esperada

### En la Terminal de ReCamera

El programa mostrará estadísticas de rendimiento en tiempo real cada 2 segundos:

```
========== Performance Stats (Last 2 Seconds) ==========
Video FPS: 30.2 | UDP FPS: 9.8
Frames: 300 | Inferences: 100

Average YOLO Timing:
  Preprocess: 0.9 ms
  Inference:  35.5 ms
  Postprocess: 32.3 ms
  Total: 68.7 ms

Average Attribute/Emotion Overhead:
  mmap: 1.2 ms
  AGR: 45.3 ms/frame | 45.3 ms/face
  EMO: 12.1 ms/frame | 12.1 ms/face

UDP Send:
  avg_send: 2.1 ms | throughput: 850.5 kbps
======================================
```

### En la Ventana del Receptor en Python

El PC mostrará una ventana que contiene:
- Flujo de video en vivo con fotogramas JPEG
- Cajas delimitadoras de rostros (rectángulos verdes)
- Etiquetas de atributos en la esquina superior izquierda:
  - Género (Male/Female)
  - Rango de edad
  - Clasificación de raza
  - Emoción (angry/disgust/fear/happy/sad/surprise/neutral)



## Solución de Problemas

### Error de Acceso a la Cámara

Si ves el error "No camera":
- Asegúrate de que los servicios de Node-RED estén detenidos (ver Paso 2 arriba)
- Verifica la conexión de la cámara

### Error en la Conexión UDP

Si el PC no recibe datos:
- Verifica que el PC y ReCamera estén en la misma red
- Revisa la configuración del firewall en el PC
- Confirma que el puerto UDP 5001 no esté bloqueado
- Prueba con `ping` entre los dispositivos

### Error al Cargar el Modelo

Si el modelo no se carga:
- Verifica que los archivos de modelo estén subidos a `/home/recamera/`
- Revisa los permisos de archivo con `ls -la`
- Asegúrate de tener suficiente espacio de almacenamiento

## Soporte Técnico y Discusión de Productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
