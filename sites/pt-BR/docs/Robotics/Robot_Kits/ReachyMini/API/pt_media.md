---
description: Referência da API de mídia do Reachy Mini cobrindo o gerenciador de mídia, áudio, câmera e componentes WebRTC.
title: API de mídia
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
url: https://wiki.seeedstudio.com/pt-br/reachymini_api_media/
---

# Mídia

## Gerenciador de mídia

[[autodoc]] reachy_mini.media.media_manager.MediaManager


## Áudio

[[autodoc]] reachy_mini.media.audio_base.AudioBase

[[autodoc]] reachy_mini.media.audio_gstreamer.GStreamerAudio

### Funções utilitárias de áudio

[[autodoc]] reachy_mini.media.audio_utils.get_respeaker_card_number

[[autodoc]] reachy_mini.media.audio_utils.has_reachymini_asoundrc

[[autodoc]] reachy_mini.media.audio_utils.check_reachymini_asoundrc

[[autodoc]] reachy_mini.media.audio_utils.write_asoundrc_to_home

### Funções utilitárias de controle de áudio

[[autodoc]] reachy_mini.media.audio_control_utils.ReSpeaker

[[autodoc]] reachy_mini.media.audio_control_utils.find

[[autodoc]] reachy_mini.media.audio_control_utils.init_respeaker_usb

## Câmera

[[autodoc]] reachy_mini.media.camera_gstreamer.GStreamerCamera

### Funções utilitárias de câmera

[[autodoc]] reachy_mini.media.camera_utils.undistort_points

[[autodoc]] reachy_mini.media.camera_utils.scale_intrinsics

### Constantes de câmera

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