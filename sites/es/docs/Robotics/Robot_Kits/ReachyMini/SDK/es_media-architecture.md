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
createdAt: '2026-02-28'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/es/reachymini_sdk_media-architecture/
---

# Arquitectura multimedia

Comprender la arquitectura multimedia de Reachy Mini es esencial para utilizar de forma eficaz sus capacidades de audio y vídeo. Funcionan de manera diferente según el modelo específico de Reachy Mini que estés utilizando.

> **Nota** : Hay un trabajo en curso para unificar la arquitectura multimedia en todos los modelos de Reachy Mini. La información siguiente refleja el estado actual en el momento de la última actualización.

## Reachy Mini

Los flujos de vídeo y audio pueden accederse localmente en el caso de una aplicación embebida, o de forma remota (a través del protocolo WebRTC) con el SDK de Python desde una máquina remota. GStreamer se utiliza para gestionar este aspecto.

Los flujos son gestionados por el Daemon para que varias aplicaciones puedan acceder a ellos simultáneamente. Técnicamente, el flujo de vídeo se comparte entre un socket Unix y un servidor WebRTC. La tarjeta de audio se configura con `.asoundrc` para que sea accesible por varias aplicaciones, bajo los nombres `reachymini_audio_src` y `reachymini_audio_sink`.

![Reachy Mini Media Daemon](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachymini_media_daemon.png)

![Reachy Mini Media Client](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachymini_media_client.png)

Gracias a webrtc, los flujos de audio y vídeo también pueden accederse directamente desde un navegador web. Por ejemplo, la [desktop application](/es/reachymini_platforms_reachy_mini_lite_get_started#3--download-reachy-mini-control) utiliza esta función.

![Reachy Mini Media Web](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachymini_media_web.png)

## Reachy Mini Lite

En el caso de Reachy Mini Lite, el Daemon no gestiona la cámara, el micrófono ni el altavoz. Solo reproduce un sonido durante el arranque y la salida o si se activan movimientos desde el dashboard.

> **Nota:** Sounddevice bloquea la tarjeta de audio cuando reproduce un sonido. Ten esto en cuenta cuando utilices el sonido desde el SDK y actives un movimiento desde el dashboard.

![Reachy Mini Lite Media Daemon](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachyminilite_media_daemon.png)

Hay dos backends disponibles. El predeterminado se basa en la combinación de OpenCV para la cámara y sounddevice para la tarjeta de audio.

También hay disponible un backend experimental de GStreamer. Aunque está principalmente ajustado para sistemas Linux, debería funcionar en otras plataformas. Por el momento requiere una instalación más manual (consulta [gstreamer-installation](/es/reachymini_sdk_gstreamer-installation))

![Reachy Mini Lite Media Client](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachyminilite_media_client.png)

## Controles avanzados

Consulta las páginas dedicadas para ajustar con precisión los parámetros de la cámara y el micrófono de [Reachy Mini](/es/reachymini_platforms_reachy_mini_media_advanced_controls) y [Reachy Mini Lite](/es/reachymini_platforms_reachy_mini_lite_media_advanced_controls).
