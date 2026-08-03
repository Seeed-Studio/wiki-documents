---
description: Reserved guide for migrating Seeed Studio Jetson deployments from JetPack 6.x to JetPack 7.2.
title: JetPack 6.x to JetPack 7.2 Migration Playbook
keywords:
  - JetPack 7.2
  - migration
  - Jetson Orin
slug: /jetpack_6_to_7_2_migration_playbook
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
---

# JetPack 6.x to JetPack 7.2 Migration Playbook

:::info Planned content
This page is reserved for a validated, end-to-end migration procedure. Until it is completed, use the [JetPack 7.2 Resource Hub](/jetpack_7_2_resource_hub/) and [JetPack 7.2 Deep Dive](/jetpack72_deep_dive/) to plan an upgrade.
:::

The planned guide will cover:

- application, container, model, calibration, and user-data backup;
- JetPack 6.x dependency and kernel-module inventory;
- clean flashing versus image-based OTA selection;
- Ubuntu 24.04, CUDA 13, TensorRT, Python, and ROS compatibility checks;
- rebuilding custom kernels, device trees, drivers, plugins, and TensorRT engines;
- rollback criteria and post-upgrade acceptance testing.

Do not treat this placeholder as a validated migration procedure.
