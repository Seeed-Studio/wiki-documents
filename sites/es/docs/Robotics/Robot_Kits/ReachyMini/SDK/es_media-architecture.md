---
description: Guía detallada de la arquitectura multimedia de Reachy Mini, que explica las capacidades de transmisión de audio y vídeo en diferentes modelos de robot usando GStreamer y WebRTC.
title: Arquitectura multimedia
slug: /reachymini_sdk_media-architecture
keywords:
  - media
  - audio
  - video
  - gstreamer
  - webrtc
  - streaming
  - camera
  - microphone
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/es/reachymini_sdk_media-architecture/
---

# Arquitectura multimedia

Comprender la arquitectura multimedia de Reachy Mini es esencial para utilizar de forma eficaz sus capacidades de audio y vídeo.

## Arquitectura unificada

El daemon siempre gestiona el hardware de cámara y audio mediante `GstMediaServer` (`media_server.py`), independientemente de si estás usando un Reachy Mini (Wireless) o Reachy Mini Lite. Esta unificación significa que ambos modelos funcionan de la misma manera:

- El **daemon** es el propietario de los dispositivos físicos de cámara y audio.
- Los **clientes locales** (misma máquina) leen los fotogramas de la cámara desde un endpoint IPC local y abren el dispositivo de audio directamente a través de GStreamer — el backend `LOCAL`.
- Los **clientes remotos** transmiten cámara + audio por WebRTC desde el daemon — el backend `WEBRTC`.
- El SDK detecta automáticamente qué backend usar en función de si el endpoint IPC del daemon es accesible.

### Lado daemon

El daemon inicia su canalización multimedia automáticamente a menos que se pase la opción `--no-media`. Este:
1. Abre la cámara (con conocimiento de la plataforma: v4l2, libcamera, DirectShow, AVFoundation o UDP para simulación).
2. Abre el dispositivo de audio (con conocimiento de la plataforma: PulseAudio, ALSA, WASAPI, CoreAudio).
3. Alimenta ambos a un servidor WebRTC (`webrtcsink`) para la transmisión remota.
4. Expone fotogramas de cámara sin procesar mediante un endpoint IPC local (`unixfdsink` en Linux/macOS, `win32ipcvideosink` en Windows).

[![Reachy Mini Media Daemon](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reachymini_media_daemon.png)](https://github.com/pollen-robotics/reachy_mini/tree/main/docs/assets)

### Lado cliente

El `MediaManager` del SDK selecciona el backend automáticamente:

- **LOCAL**: Se usa cuando el cliente se ejecuta en la misma máquina que el daemon. Lee los fotogramas de la cámara desde IPC y abre el dispositivo de audio directamente a través de GStreamer. Sin sobrecarga de codificación/decodificación.
- **WEBRTC**: Se usa cuando el cliente es remoto. Transmite cámara + audio por WebRTC.
- **NO_MEDIA**: Omite toda la inicialización multimedia (funcionamiento sin interfaz gráfica).

[![Reachy Mini Media Client](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reachymini_media_client.png)](https://github.com/pollen-robotics/reachy_mini/tree/main/docs/assets)

### Acceso web

Gracias a WebRTC, los flujos de audio y vídeo también pueden accederse directamente desde un navegador web. Por ejemplo, la [aplicación de escritorio](/es/reachymini_platforms_reachy_mini_lite_get_started#3--download-reachy-mini-control) utiliza esta función.

[![Reachy Mini Media Web](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reachymini_media_web.png)](https://github.com/pollen-robotics/reachy_mini/tree/main/docs/assets)

## Desactivar multimedia / Acceso directo al hardware

De forma predeterminada el daemon es el propietario de los dispositivos de cámara y audio. Si necesitas acceso directo al hardware — por ejemplo para usar OpenCV, sounddevice o una canalización de visión personalizada — puedes desactivar el gestor multimedia integrado:

```python
from reachy_mini import ReachyMini

with ReachyMini(media_backend="no_media") as mini:
    # The daemon has released camera and audio hardware.
    # Use OpenCV, sounddevice, or any other library directly.
    import cv2
    cap = cv2.VideoCapture(0)
    ret, frame = cap.read()
    cap.release()

    # Robot control still works normally.
    mini.goto_target(antennas=[0.3, -0.3], duration=0.5)

# On exit, the daemon automatically re-acquires the hardware.
```

Cuando se pasa `media_backend="no_media"`, el SDK:
1. Pide al daemon que **libere** los dispositivos de cámara y audio (detiene la canalización de GStreamer).
2. Establece el `MediaManager` local en `NO_MEDIA` (sin cámara/audio a través del SDK).
3. Al salir del gestor de contexto (`__exit__`), indica al daemon que **vuelva a adquirir** el hardware automáticamente.

También puedes llamar a `release_media()` y `acquire_media()` manualmente en cualquier momento:

```python
mini = ReachyMini()

# ... use the built-in media manager ...
frame = mini.media.get_frame()

# Switch to direct access
mini.release_media()
# ... use OpenCV, sounddevice, etc. ...

# Switch back to the SDK media manager
mini.acquire_media()
frame = mini.media.get_frame()
```

> **⚠️ Nota:** Ambos métodos son idempotentes — llamar a `release_media()` dos veces es seguro.

Para un ejemplo completo con OpenCV y sounddevice, consulta [Gestor multimedia personalizado](/es/reachymini_examples_custom_media_manager).

## Controles avanzados

Consulta las páginas dedicadas para ajustar con precisión los parámetros de cámara y micrófono para [Reachy Mini](/es/reachymini_platforms_reachy_mini_media_advanced_controls) y [Reachy Mini Lite](/es/reachymini_platforms_reachy_mini_lite_media_advanced_controls).