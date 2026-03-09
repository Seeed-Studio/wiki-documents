---
description: Referencia completa del SDK de Python para Reachy Mini que cubre control de movimiento, cámara, IMU, grabación y reproducción de audio, y opciones de backend de medios.
title: Referencia del SDK de Python
slug: /reachymini_sdk_python-sdk
keywords:
  - python
  - sdk
  - movement
  - camera
  - imu
  - audio
  - media backend
  - goto_target
  - set_target
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/reachymini_sdk_python-sdk/
---

# Referencia del SDK de Python

> **💡 Recordatorio:** El SDK ahora detecta automáticamente si debe conectarse por USB/localhost o por red, así que `ReachyMini()` funciona directamente. Aun así puedes forzar un modo con `ReachyMini(connection_mode="localhost_only" | "network")` si es necesario.

## Movimiento

### Control básico (`goto_target`)
Interpolación suave entre puntos. Puedes controlar `head`, `antennas` y `body_yaw`.

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose
import numpy as np

with ReachyMini() as mini:
    # Move everything at once
    mini.goto_target(
        head=create_head_pose(z=10, mm=True),    # Up 10mm
        antennas=np.deg2rad([45, 45]),           # Antennas out
        body_yaw=np.deg2rad(30),                 # Turn body
        duration=2.0,                            # Take 2 seconds
        method="minjerk"                         # Smooth acceleration
    )
```

**Métodos de interpolación:** `linear`, `minjerk` (predeterminado), `ease_in_out`, `cartoon`.

### Control instantáneo (`set_target`)
Omite la interpolación. Úsalo para control de alta frecuencia (por ejemplo, seguir un joystick o una trayectoria generada).

## Sensores y medios

La arquitectura de medios se describe en detalle en la sección [Media Architecture](/es/reachymini_sdk_media-architecture). Aunque acceder al audio y al vídeo desde el SDK es similar entre las versiones de Reachy Mini, la implementación subyacente es diferente.

### Cámara 📷

Los fotogramas de la cámara se pueden acceder de la siguiente manera:

```python
from reachy_mini import ReachyMini

with ReachyMini(media_backend="default") as mini:
    frame = mini.media.get_frame()
```
El fotograma devuelto es un array de numpy con forma `(height, width, 3)` y tipo de dato `uint8`.

### IMU 🧭

> ⚠️ La IMU solo está disponible con la versión inalámbrica de Reachy Mini

Echa un vistazo a [este ejemplo](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/imu_example.py)
```python
with ReachyMini() as mini:
    imu_data = mini.imu
    accel_x, accel_y, accel_z = imu_data["accelerometer"] # (m/s^2)
    gyro_x, gyro_y, gyro_z = imu_data["gyroscope"] # (rad/s)
    quat_w, quat_x, quat_y, quat_z = imu_data["quaternion"] # (w, x, y, z)
    temperature = imu_data["temperature"] # (°C)

```


### Audio 🎙️ 🔊

Las entradas de audio (micrófonos) y salidas (altavoz) se gestionan de la siguiente manera:

```python
from reachy_mini import ReachyMini
from scipy.signal import resample
import time

with ReachyMini(media_backend="default") as mini:
    # Initialization - After this point, both audio devices (input/output) will be seen as busy by other applications!
    mini.media.start_recording()
    mini.media.start_playing()

    # Record
    samples = mini.media.get_audio_sample()

    # Resample (if needed)
    samples = resample(samples, mini.media.get_output_audio_samplerate()*len(samples)/mini.media.get_input_audio_samplerate())

    # Play
    mini.media.push_audio_sample(samples)
    time.sleep(len(samples) / mini.media.get_output_audio_samplerate())

    # Get Direction of Arrival
    # 0 radians is left, π/2 radians is front/back, π radians is right.
    doa, is_speech_detected = mini.media.get_DoA()
    print(doa, is_speech_detected)

    # Release audio devices (input/output)
    mini.media.stop_recording()
    mini.media.stop_playing()
```

**Formato de datos de audio:**
- `get_audio_sample()` devuelve un array de numpy con forma `(samples, 2)` y tipo de dato `float32`, muestreado a 16kHz.
- `push_audio_sample()` espera un array de numpy con forma `(samples, 1 or 2)` y tipo de dato `float32`, muestreado a 16kHz.

En ambos casos, la información de canales y frecuencia de muestreo se puede recuperar de forma fiable con `get_input/output_audio_samplerate()` y `get_input/output_channels()`.

> **⚠️ Nota:** `push_audio_sample()` es no bloqueante, lo que significa que devuelve inmediatamente mientras el audio se reproduce en segundo plano. Si necesitas esperar a que termine la reproducción, calcula la duración en función de la longitud de la muestra y la frecuencia de muestreo.

## Opciones de backend de medios

Elige el backend de medios apropiado según tu versión de Reachy Mini y tus requisitos:

**Reachy Mini Lite:**
- `media_backend="default"` - Usa OpenCV para la cámara y Sounddevice para el audio (recomendado para la mayoría de usuarios)
- `media_backend="gstreamer"` - Usa GStreamer tanto para la cámara como para el audio ([installation required](/es/reachymini_sdk_gstreamer-installation))

**Reachy Mini Wireless:**
- **Ejecución local** (ejecutando en el robot con SSH): Usa automáticamente `"gstreamer"`
- **Ejecución remota** (controlando desde tu ordenador): Usa automáticamente `"webrtc"`. Con este backend, GStreamer se ejecuta localmente en la Raspberry Pi y transmite tanto audio como vídeo al ordenador remoto usando WebRTC.

> **💡 Consejo:** Para configuraciones inalámbricas, el backend se selecciona automáticamente según si estás ejecutando localmente o de forma remota. No es necesario especificar el valor de `media_backend`.

> **💡 Consejo:** Para configuraciones inalámbricas, el backend WebRTC requiere una instalación específica, consulta [gstreamer-installation.md](/es/reachymini_sdk_gstreamer-installation). Por ahora solo se admite la plataforma Linux como cliente. Otras plataformas (Windows, macOS) serán compatibles en [future releases](https://github.com/pollen-robotics/reachy_mini/issues/572).

## Grabación de movimientos
Puedes grabar un movimiento moviendo el robot (modo compliant) o enviando comandos, y guardarlo para reproducirlo más tarde.

```python
from reachy_mini import ReachyMini
with ReachyMini() as mini:
    mini.start_recording()
    # ... robot moves ...
    recorded_data = mini.stop_recording()
```

## Próximos pasos
* **[Explora la carpeta de ejemplos](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)**
* **[Integraciones de IA](/es/reachymini_sdk_integration)**: Conecta LLMs, crea Apps y publícalas en Hugging Face.
* **[Conceptos básicos](/es/reachymini_sdk_core-concept)**: Arquitectura, sistemas de coordenadas y límites de seguridad.

## ❓ Resolución de problemas

¿Tienes algún problema? 👉 **[Consulta la guía de resolución de problemas y preguntas frecuentes](/es/reachymini_troubleshooting)**
