---
description: Reserved guide for JetPack 7.2 MAXN_SUPER on Jetson AGX Orin 32GB and Multi-Instance GPU on Jetson Thor.
title: JetPack 7.2 MAXN_SUPER and MIG
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
---

# JetPack 7.2 MAXN_SUPER and MIG

:::info Planned content
This page is reserved for two platform-specific JetPack 7.2 capabilities: `MAXN_SUPER` on supported Jetson AGX Orin 32GB configurations and Multi-Instance GPU on supported Jetson Thor configurations.
:::

The planned guide will include:

- supported modules, carrier boards, power supplies, and thermal requirements;
- enabling, confirming, benchmarking, and reverting `MAXN_SUPER`;
- MIG partition creation, workload placement, monitoring, and teardown on Thor;
- memory, power, thermal, latency, and throughput comparison methodology;
- production safety limits and unsupported configuration warnings.

Do not enable a new power mode or GPU partitioning scheme before confirming the complete hardware and BSP support matrix.
