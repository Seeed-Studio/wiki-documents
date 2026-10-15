---
description: 为 Jetson AGX Orin 32GB 上的 JetPack 7.2 MAXN_SUPER 和 Jetson Thor 上的多实例 GPU 预留的指南。
title: JetPack 7.2 MAXN_SUPER 和 MIG
keywords:
  - JetPack 7.2
  - MAXN_SUPER
  - MIG
  - Jetson AGX Orin
  - Jetson Thor
slug: /jetpack_7_2_maxn_super_and_mig
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/cn/jetpack_7_2_maxn_super_and_mig/
---

# JetPack 7.2 MAXN_SUPER 和 MIG

:::info 规划内容
本页面为两个特定平台的 JetPack 7.2 功能预留：适用于受支持 Jetson AGX Orin 32GB 配置的 `MAXN_SUPER`，以及适用于受支持 Jetson Thor 配置的多实例 GPU。
:::

计划中的指南将包括：

- 受支持的模组、载板、电源以及散热要求；
- 启用、确认、基准测试和回退 `MAXN_SUPER`；
- 在 Thor 上进行 MIG 分区创建、负载放置、监控和拆除；
- 内存、功耗、散热、时延和吞吐量的对比方法；
- 量产安全限制以及不受支持配置的警告。

在确认完整的硬件和 BSP 支持矩阵之前，请勿启用新的功耗模式或 GPU 分区方案。
