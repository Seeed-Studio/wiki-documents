---
description: Guia detalhado da arquitetura de mídia do Reachy Mini, explicando os recursos de streaming de áudio e vídeo em diferentes modelos de robô usando GStreamer e WebRTC.
title: Arquitetura de Mídia
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
url: https://wiki.seeedstudio.com/pt-br/reachymini_sdk_media-architecture/
---

# Arquitetura de Mídia

Compreender a arquitetura de mídia do Reachy Mini é essencial para utilizar de forma eficaz seus recursos de áudio e vídeo.

## Arquitetura Unificada

O daemon sempre gerencia o hardware de câmera e áudio via `GstMediaServer` (`media_server.py`), independentemente de você estar usando um Reachy Mini (Wireless) ou Reachy Mini Lite. Essa unificação significa que ambos os modelos funcionam da mesma maneira:

- O **daemon** é o proprietário dos dispositivos físicos de câmera e áudio.
- **Clientes locais** (mesma máquina) leem quadros da câmera a partir de um endpoint IPC local e abrem o dispositivo de áudio diretamente via GStreamer — o backend `LOCAL`.
- **Clientes remotos** fazem streaming de câmera + áudio via WebRTC a partir do daemon — o backend `WEBRTC`.
- O SDK detecta automaticamente qual backend usar com base em se o endpoint IPC do daemon é acessível ou não.

### Lado do Daemon

O daemon inicia seu pipeline de mídia automaticamente, a menos que a flag `--no-media` seja passada. Ele:
1. Abre a câmera (ciente da plataforma: v4l2, libcamera, DirectShow, AVFoundation ou UDP para simulação).
2. Abre o dispositivo de áudio (ciente da plataforma: PulseAudio, ALSA, WASAPI, CoreAudio).
3. Alimenta ambos em um servidor WebRTC (`webrtcsink`) para streaming remoto.
4. Expõe quadros brutos da câmera via um endpoint IPC local (`unixfdsink` em Linux/macOS, `win32ipcvideosink` no Windows).

[![Reachy Mini Media Daemon](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reachymini_media_daemon.png)](https://github.com/pollen-robotics/reachy_mini/tree/main/docs/assets)

### Lado do Cliente

O `MediaManager` do SDK seleciona o backend automaticamente:

- **LOCAL**: Usado quando o cliente é executado na mesma máquina que o daemon. Lê quadros da câmera a partir do IPC e abre o dispositivo de áudio diretamente via GStreamer. Sem sobrecarga de codificação/decodificação.
- **WEBRTC**: Usado quando o cliente é remoto. Faz streaming de câmera + áudio via WebRTC.
- **NO_MEDIA**: Ignora toda a inicialização de mídia (operação headless).

[![Reachy Mini Media Client](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reachymini_media_client.png)](https://github.com/pollen-robotics/reachy_mini/tree/main/docs/assets)

### Acesso via Web

Graças ao WebRTC, os streams de áudio e vídeo também podem ser acessados diretamente a partir de um navegador web. Por exemplo, o [aplicativo desktop](/pt-br/reachymini_platforms_reachy_mini_lite_get_started#3--download-reachy-mini-control) usa esse recurso.

[![Reachy Mini Media Web](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/reachymini_media_web.png)](https://github.com/pollen-robotics/reachy_mini/tree/main/docs/assets)

## Desativando Mídia / Acesso Direto ao Hardware

Por padrão, o daemon é o proprietário dos dispositivos de câmera e áudio. Se você precisar de acesso direto ao hardware — por exemplo, para usar OpenCV, sounddevice ou um pipeline de visão personalizado — você pode desativar o gerenciador de mídia embutido:

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

Quando `media_backend="no_media"` é passado, o SDK:
1. Pede ao daemon para **liberar** os dispositivos de câmera e áudio (interrompe o pipeline GStreamer).
2. Define o `MediaManager` local como `NO_MEDIA` (sem câmera/áudio através do SDK).
3. Ao sair do gerenciador de contexto (`__exit__`), instrui o daemon a **readquirir** o hardware automaticamente.

Você também pode chamar `release_media()` e `acquire_media()` manualmente a qualquer momento:

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

> **⚠️ Note:** Both methods are idempotent — calling `release_media()` twice is safe.

Para um exemplo completo com OpenCV e sounddevice, consulte [Custom Media Manager](/pt-br/reachymini_examples_custom_media_manager).

## Controles Avançados

Consulte as páginas dedicadas para ajustar com precisão os parâmetros de câmera e microfone para o [Reachy Mini](/pt-br/reachymini_platforms_reachy_mini_media_advanced_controls) e o [Reachy Mini Lite](/pt-br/reachymini_platforms_reachy_mini_lite_media_advanced_controls).