---
description: Reachy Mini媒体API参考，涵盖媒体管理器、音频、摄像头和WebRTC组件。
title: 媒体API
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
url: https://wiki.seeedstudio.com/reachymini_api_media/
---

# 媒体

## 媒体管理器

[[autodoc]] reachy_mini.media.media_manager.MediaManager

## 音频

[[autodoc]] reachy_mini.media.audio_base.AudioBase

[[autodoc]] reachy_mini.media.audio_gstreamer.GStreamerAudio

### 音频工具函数

[[autodoc]] reachy_mini.media.audio_utils.get_respeaker_card_number

[[autodoc]] reachy_mini.media.audio_utils.has_reachymini_asoundrc

[[autodoc]] reachy_mini.media.audio_utils.check_reachymini_asoundrc

[[autodoc]] reachy_mini.media.audio_utils.write_asoundrc_to_home

### 音频控制工具函数

[[autodoc]] reachy_mini.media.audio_control_utils.ReSpeaker

[[autodoc]] reachy_mini.media.audio_control_utils.find

[[autodoc]] reachy_mini.media.audio_control_utils.init_respeaker_usb

## 摄像头

[[autodoc]] reachy_mini.media.camera_gstreamer.GStreamerCamera

### 摄像头工具函数

[[autodoc]] reachy_mini.media.camera_utils.undistort_points

[[autodoc]] reachy_mini.media.camera_utils.scale_intrinsics

### 摄像头常量

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