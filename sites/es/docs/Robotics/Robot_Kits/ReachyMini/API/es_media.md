---
description: Referencia de la API de medios para Reachy Mini que cubre el gestor de medios, audio, cámara y componentes WebRTC.
title: API de medios
slug: /reachymini_api_media
keywords:
  - media
  - api
  - audio
  - camera
  - webrtc
  - gstreamer
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/es/reachymini_api_media/
---

# Medios

## Gestor de medios

[[autodoc]] reachy_mini.media.media_manager.MediaManager


## Audio

[[autodoc]] reachy_mini.media.audio_base.AudioBase

[[autodoc]] reachy_mini.media.audio_gstreamer.GStreamerAudio

### Funciones de utilidades de audio

[[autodoc]] reachy_mini.media.audio_utils.get_respeaker_card_number

[[autodoc]] reachy_mini.media.audio_utils.has_reachymini_asoundrc

[[autodoc]] reachy_mini.media.audio_utils.check_reachymini_asoundrc

[[autodoc]] reachy_mini.media.audio_utils.write_asoundrc_to_home

### Funciones de utilidades de control de audio

[[autodoc]] reachy_mini.media.audio_control_utils.ReSpeaker

[[autodoc]] reachy_mini.media.audio_control_utils.find

[[autodoc]] reachy_mini.media.audio_control_utils.init_respeaker_usb

## Cámara

[[autodoc]] reachy_mini.media.camera_gstreamer.GStreamerCamera

### Funciones de utilidades de cámara

[[autodoc]] reachy_mini.media.camera_utils.undistort_points

[[autodoc]] reachy_mini.media.camera_utils.scale_intrinsics

### Constantes de cámara

[[autodoc]] reachy_mini.media.camera_constants.CameraResolution

[[autodoc]] reachy_mini.media.camera_constants.CameraSpecs

[[autodoc]] reachy_mini.media.camera_constants.ArducamSpecs

[[autodoc]] reachy_mini.media.camera_constants.ReachyMiniLiteCamSpecs

[[autodoc]] reachy_mini.media.camera_constants.ReachyMiniWirelessCamSpecs

[[autodoc]] reachy_mini.media.camera_constants.OlderRPiCamSpecs

[[autodoc]] reachy_mini.media.camera_constants.MujocoCameraSpecs

[[autodoc]] reachy_mini.media.camera_constants.GenericWebcamSpecs

## WebRTC

[[autodoc]] reachy_mini.media.webrtc_client_gstreamer.GstWebRTCClient

[[autodoc]] reachy_mini.media.media_server.GstMediaServer