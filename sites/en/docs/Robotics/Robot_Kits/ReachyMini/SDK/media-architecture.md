---
description: Detailed guide to Reachy Mini's media architecture, explaining audio and video streaming capabilities across different robot models using GStreamer and WebRTC.
title: Media Architecture
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
url: https://wiki.seeedstudio.com/reachymini_sdk_media-architecture/
---

# Media Architecture

Understanding the media architecture of Reachy Mini is essential for effectively utilizing its audio and visual capabilities. They operate differently based on the specific model of Reachy Mini you are using.

> **Note** : There is ongoing work to unify the media architecture across all Reachy Mini models. The information below reflects the current state as of the latest update.

## Reachy Mini

Video and audio streams can be accessed locally in the case of an embedded app, or remotely (through WebRTC protocol) with the Python SDK from a remote machine. GStreamer is used to handle this aspect.

The streams are managed by the Daemon so that multiple applications can access them simultaneously. Technically, the video stream is shared between a Unix socket and a WebRTC server. The audio card is configured with `.asoundrc` to be accessible by multiple applications, under the names `reachymini_audio_src` and `reachymini_audio_sink`.

![Reachy Mini Media Daemon](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachymini_media_daemon.png)

![Reachy Mini Media Client](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachymini_media_client.png)

Thanks to webrtc, the audio and video streams can also be accessed directly from a web browser. For instance the [desktop application](/reachymini_platforms_reachy_mini_lite_get_started#3--download-reachy-mini-control) uses this feature.

![Reachy Mini Media Web](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachymini_media_web.png)

## Reachy Mini Lite

In the case of Reachy Mini Lite, the Daemon doesn't manage the camera, microphone, and speaker. It only plays a sound during startup and exit or if moves are triggered from the dashboard.

> **Note:** Sounddevice locks the audio card when playing a sound. Keep this in mind when you use the sound from the SDK and trigger a move from the dashboard.

![Reachy Mini Lite Media Daemon](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachyminilite_media_daemon.png)

Two backends are available. The default one relies on the combination of OpenCV for the camera and sounddevice for the audio card.

An experimental GStreamer backend is also available. While it is mostly tuned for Linux systems, it should work on other platforms. It requires more manual installation at the moment (see [gstreamer-installation](/reachymini_sdk_gstreamer-installation))

![Reachy Mini Lite Media Client](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachyminilite_media_client.png)

## Advanced Controls

Please refer to the dedicated pages to fine-tune camera and microphone parameters for [Reachy Mini](/reachymini_platforms_reachy_mini_media_advanced_controls) and [Reachy Mini Lite](/reachymini_platforms_reachy_mini_lite_media_advanced_controls).
