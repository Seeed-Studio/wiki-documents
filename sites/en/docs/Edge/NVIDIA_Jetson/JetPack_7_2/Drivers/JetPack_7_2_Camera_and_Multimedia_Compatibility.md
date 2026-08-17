---
description: Reserved JetPack 7.2 camera, GMSL, CSI, multimedia, and accelerated video compatibility guide for Seeed Studio Jetson devices.
title: JetPack 7.2 Camera and Multimedia Compatibility
keywords:
  - JetPack 7.2
  - camera
  - GMSL
  - multimedia
slug: /jetpack_7_2_camera_multimedia_compatibility
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/jetpack_7_2_camera_multimedia_compatibility/
---

# JetPack 7.2 Camera and Multimedia Compatibility

:::info Planned content
This page is reserved for camera and multimedia workflows validated specifically on JetPack 7.2. Existing camera articles are collected in the [JetPack 7.2 Resource Hub](/jetpack_7_2_resource_hub/) as migration references until validation is complete.
:::

The planned compatibility guide will include:

- CSI and GMSL camera support by Seeed carrier board;
- device-tree overlay and out-of-tree camera driver rebuild steps;
- Argus, V4L2, GStreamer, codec, and accelerated video validation;
- multi-camera bandwidth and synchronization checks;
- known JetPack 6.x to 7.2 API and pipeline changes.

Do not reuse JetPack 6.x camera kernel modules on JetPack 7.2.
