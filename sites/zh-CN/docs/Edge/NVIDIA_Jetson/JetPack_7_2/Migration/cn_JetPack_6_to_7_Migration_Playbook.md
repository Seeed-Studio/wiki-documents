---
description: 为从 JetPack 6.x 迁移 Seeed Studio Jetson 部署到 JetPack 7.2 预留的指南。
title: JetPack 6.x 到 JetPack 7.2 迁移作战手册
keywords:
  - JetPack 7.2
  - 迁移
  - Jetson Orin
slug: /jetpack_6_to_7_2_migration_playbook
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/cn/jetpack_6_to_7_2_migration_playbook/
---

# JetPack 6.x 到 JetPack 7.2 迁移作战手册

:::info 规划中的内容
此页面预留用于经过验证的端到端迁移流程。在其完成之前，请使用 [JetPack 7.2 Resource Hub](/cn/jetpack_7_2_resource_hub/) 和 [JetPack 7.2 Deep Dive](/cn/jetpack72_deep_dive/) 来规划升级。
:::

计划中的指南将涵盖：

- 应用、容器、模型、标定和用户数据备份；
- JetPack 6.x 依赖项和内核模块清单；
- 选择全新刷机与基于镜像的 OTA；
- Ubuntu 24.04、CUDA 13、TensorRT、Python 和 ROS 兼容性检查；
- 重新构建自定义内核、设备树、驱动、插件和 TensorRT 引擎；
- 回滚判定标准和升级后验收测试。

请不要将此占位内容视为经过验证的迁移流程。
