---
description: 为 Seeed Studio Jetson 设备预留的 JetPack 7.2 相机、GMSL、CSI、多媒体和加速视频兼容性指南。
title: JetPack 7.2 相机与多媒体兼容性
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
url: https://wiki.seeedstudio.com/cn/jetpack_7_2_camera_multimedia_compatibility/
---

# JetPack 7.2 相机与多媒体兼容性

:::info 规划内容
此页面预留用于记录在 JetPack 7.2 上经过专门验证的相机和多媒体工作流。在验证完成之前，现有相机相关文档已收录到 [JetPack 7.2 资源中心](/cn/jetpack_7_2_resource_hub/) 作为迁移参考。
:::

计划中的兼容性指南将包括：

- 按 Seeed 载板划分的 CSI 和 GMSL 相机支持情况；
- 设备树 overlay 与 out-of-tree 相机驱动重建步骤；
- Argus、V4L2、GStreamer、编解码器和加速视频验证；
- 多相机带宽与同步性检查；
- 已知的 JetPack 6.x 到 7.2 的 API 与流水线变更。

请勿在 JetPack 7.2 上复用 JetPack 6.x 的相机内核模块。
