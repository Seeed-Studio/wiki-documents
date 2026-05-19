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
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/es/reachymini_sdk_python-sdk/
---

# Referencia del SDK de Python

> **💡 Recordatorio:** El SDK ahora detecta automáticamente si debe conectarse por USB/localhost o por la red, por lo que `ReachyMini()` funciona directamente. Aun así puedes forzar un modo con `ReachyMini(connection_mode="localhost_only" | "network")` si es necesario.

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
- `get_audio_sample()` devuelve un array de numpy con forma `(samples, 2)` y tipo de dato `float32`, muestreado a 16 kHz.
- `push_audio_sample()` espera un array de numpy con forma `(samples, 1 or 2)` y tipo de dato `float32`, muestreado a 16 kHz.

En ambos casos, la información de canales y frecuencia de muestreo se puede recuperar de forma fiable con `get_input/output_audio_samplerate()` y `get_input/output_channels()`.

> **⚠️ Nota:** `push_audio_sample()` no es bloqueante, lo que significa que devuelve inmediatamente mientras el audio se reproduce en segundo plano. Si necesitas esperar a que termine la reproducción, calcula la duración en función de la longitud de la muestra y la frecuencia de muestreo.

## Opciones de backend de medios

Elige el backend de medios apropiado según tu versión de Reachy Mini y tus requisitos:

- `media_backend="default"` - Detecta automáticamente el mejor backend: LOCAL cuando se ejecuta en la misma máquina que el daemon, WEBRTC cuando es remoto (recomendado para la mayoría de usuarios).
- `media_backend="local"` - Fuerza el backend LOCAL (cámara IPC de GStreamer + audio de GStreamer). Úsalo cuando se ejecute en la misma máquina que el daemon.
- `media_backend="webrtc"` - Fuerza el backend WEBRTC. El daemon transmite vídeo H.264 y audio Opus por WebRTC al cliente.
- `media_backend="no_media"` - Desactiva el gestor de medios e indica al daemon que libere el hardware de cámara y audio. Úsalo cuando necesites acceso directo mediante OpenCV, sounddevice u otra biblioteca externa. El hardware se vuelve a adquirir automáticamente cuando el gestor de contexto termina. Consulta [Media Architecture - Disabling Media](/es/reachymini_sdk_media-architecture#desactivación-de-medios--acceso-directo-al-hardware) y el ejemplo [Custom Media Manager](../examples/custom_media_manager.md).

> **💡 Consejo:** En la mayoría de las configuraciones, el backend se selecciona automáticamente según si estás ejecutando localmente o de forma remota. ¡No es necesario especificar el valor de `media_backend`!

> **💡 Consejo:** El backend WebRTC requiere que GStreamer esté instalado en la máquina cliente. Consulta [GStreamer Installation](/es/reachymini_sdk_gstreamer-installation). Por ahora solo Linux está totalmente soportado como cliente remoto. Otras plataformas (Windows, macOS) serán compatibles en [versiones futuras](https://github.com/pollen-robotics/reachy_mini/issues/572).

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