---
description: 为 JetPack 7.2 统一 Orin 与 Thor 平台、ISO 安装流程以及 SBSA 架构注意事项预留的指南。
title: JetPack 7.2 统一平台、ISO 与 SBSA
keywords:
  - JetPack 7.2
  - 统一 ISO
  - SBSA
  - Jetson Orin
  - Jetson Thor
slug: /jetpack_7_2_unified_platform_iso_sbsa
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/cn/jetpack_7_2_unified_platform_iso_sbsa/
---

# JetPack 7.2 统一平台、ISO 与 SBSA

:::info 规划内容
此页面预留用于 Seeed 验证的 JetPack 7.2 统一平台架构指南。它将说明哪些安装和 BSP 工作流适用于 Jetson Orin，哪些适用于 Jetson Thor，以及这两个平台家族在设计上有意保持差异的地方。
:::

计划中的指南将涵盖：

- 随 Jetson Linux 39.2 引入的统一 ISO 安装路径；
- Orin 与 Thor 在安装、恢复、存储和预配置方面的差异；
- Jetson Thor 上的 SBSA 行为和软件可移植性注意事项；
- 何时应使用 NVIDIA 开发套件工作流，何时应使用 Seeed 产品 BSP；
- 在将通用应用部署到 Orin 和 Thor 之前的验证检查点。

在验证完成之前，请使用 [资源中心](/cn/jetpack_7_2_resource_hub/) 中与产品对应的 JetPack 7.2 烧录页面。
