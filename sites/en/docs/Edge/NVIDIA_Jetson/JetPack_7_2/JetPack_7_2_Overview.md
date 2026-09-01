---
description: A categorized JetPack 7.2 resource hub for Seeed Studio NVIDIA Jetson devices, covering new platform features, migration guidance, flashing, drivers, developer tools, inference, and applications.
title: JetPack 7.2 Resource Hub
keywords:
  - NVIDIA Jetson
  - JetPack 7.2
  - Jetson Linux 39.2
  - Jetson Orin
  - Jetson Thor
  - TensorRT Edge-LLM
image: https://files.seeedstudio.com/wiki/other/jp72-front.png
slug: /jetpack_7_2_resource_hub
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/jetpack_7_2_resource_hub/
---

# JetPack 7.2 Resource Hub

![JetPack 7.2 Resource Hub cover](https://files.seeedstudio.com/wiki/other/jp72-front.png)

This page organizes the JetPack 7.2 resources currently available for Seeed Studio NVIDIA Jetson products. Use it as the starting point for understanding the new software stack, selecting a supported image, migrating an existing JetPack 6.x project, restoring peripheral drivers, and deploying optimized AI workloads.

:::info
JetPack 7.2 uses **Jetson Linux 39.2**, an **Ubuntu 24.04** root filesystem, and **Linux kernel 6.8**. NVIDIA Jetson Linux 39.2 supports both the **Jetson Orin** and **Jetson Thor** platform families.
:::

## What Is New in JetPack 7.2?

JetPack 7.2 is more than an operating-system update. It extends the JetPack 7 software architecture to Jetson Orin and adds platform capabilities for agentic AI, production Linux customization, memory optimization, and higher-performance edge inference.

### Agentic AI and Developer Workflows

- **NVIDIA NemoClaw readiness**: JetPack 7.2 provides the required platform dependencies for one-command NemoClaw installation and local or cloud model orchestration.
- **Jetson agent skills**: NVIDIA provides reusable device-side and BSP-side workflows for Jetson Linux customization, memory optimization, model benchmarking, package selection, and application prototyping.
- **Cloud-native deployment**: The JetPack stack continues to support containerized development and deployment workflows for edge services.

### Platform Architecture

- **Jetson Orin support in JetPack 7**: JetPack 7.2 brings the JetPack 7 software stack to the Jetson Orin family while retaining Jetson Thor support.
- **Unified ISO installation**: Jetson Linux 39.2 introduces a unified ISO-based installation path for supported Jetson Orin and Jetson Thor developer kits.
- **SBSA alignment**: Jetson Thor follows the Server Base System Architecture software model, improving portability across Arm server-class platforms.

### Yocto

- **Official Yocto Project support**: NVIDIA-validated OpenEmbedded/Yocto recipes provide a path to reproducible, customized, and production-oriented Linux images.

### Performance, Memory, and Isolation

- **Jetson AGX Orin 32GB Super Mode**: JetPack 7.2 adds the `MAXN_SUPER` power mode for supported Jetson AGX Orin 32GB configurations.
- **Memory-efficiency workflows**: Jetson agent skills can audit and reduce bootloader carveouts, kernel reservations, and unnecessary user-space memory consumption.
- **Multi-Instance GPU on Jetson Thor**: MIG is available as a technology preview on supported Jetson Thor T5000 configurations for isolated multi-workload execution.

:::warning
Some JetPack 7.2 features are platform-specific. MIG and SBSA-specific behavior apply to Jetson Thor, while `MAXN_SUPER` applies to supported Jetson AGX Orin 32GB configurations. Confirm the module, carrier board, BSP, power supply, and thermal design before enabling a new power or acceleration mode.
:::

## JetPack 7.2 Software Baseline

| Layer | JetPack 7.2 baseline | Migration impact |
| --- | --- | --- |
| Jetson Linux | 39.2 | Rebuild out-of-tree kernel modules and BSP customizations. |
| Root filesystem | Ubuntu 24.04 | Revalidate package names, repositories, Python environments, and system services. |
| Linux kernel | 6.8 | Rebuild camera, Wi-Fi, fieldbus, and custom peripheral drivers against the new headers. |
| CUDA generation | CUDA 13 | Rebuild CUDA applications and do not reuse JetPack 6.x binaries without validation. |
| TensorRT engines | JetPack 7.2 TensorRT stack | Rebuild serialized TensorRT engines on the target software stack. |
| Supported platforms | Jetson Orin and Jetson Thor | Use the correct BSP, toolchain flags, and precision support for the target GPU architecture. |

## JetPack 7.2 Ecosystem Map

This collection is intentionally limited to JetPack 7.2 material. Existing articles are copied into the `JetPack_7_2` tree and use an `_bk` slug so the series can be reviewed, updated, translated, and released independently from the original Wiki pages.

| JetPack 7.2 capability | Included resource |
| --- | --- |
| Unified Orin and Thor software architecture | [Unified Platform, ISO, and SBSA](/jetpack_7_2_unified_platform_iso_sbsa/) **(planned)** |
| Ubuntu 24.04, Linux 6.8, and CUDA 13 migration | [JetPack 7.2 Deep Dive](/jetpack72_deep_dive_bk/) and [Migration Playbook](/jetpack_6_to_7_2_migration_playbook/) **(planned)** |
| Agentic AI and reusable Jetson skills | [Rapid Prototyping with NVIDIA Skills](/rapid_prototyping_on_jetson_with_nvidia_skills_bk/) and [NemoClaw on Jetson Thor](/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor_bk/) |
| Yocto | [Build and Flash a Yocto Image](/build_and_flash_yocto_for_recomputer_super_bk/) |
| Higher-performance inference with TensorRT Edge-LLM | [Deploy TensorRT Edge-LLM on JetPack 7.2](/deploy_tensorrt_edge_llm_on_jetpack7.2/) |
| Lower system and LLM memory use | [JetPack 7.2 Memory Optimization](/jetpack_7_2_memory_optimization/) |
| DeepStream 9.1 and natural-language video workflows | [DeepStream on JetPack 7.2](/jetpack_7_2_deepstream/) |
| AGX Orin `MAXN_SUPER` and Thor MIG | [MAXN_SUPER and MIG](/jetpack_7_2_maxn_super_and_mig/) **(planned)** |
| Kernel 6.8 driver transition | [JetPack 7.2 Wireless Module Setup](/jetpack72_ax210_ax200_wifi_setup_guide_bk/) and [Camera and Multimedia Compatibility](/jetpack_7_2_camera_multimedia_compatibility/) **(planned)** |

## Flash & OTA

| Resource | Coverage |
| --- | --- |
| [JetPack 7.2 Deep Dive](/jetpack72_deep_dive_bk/) | Platform changes, JetPack 6.2 comparison, migration impact, and AGX Orin inference results. |
| [Flash and OTA Upgrade to JetPack 7.2](/flash_and_ota_jetpack_7.2/) | Clean flashing, image-based OTA requirements, version verification, and deployment choice. |
| [JetPack 6.x to JetPack 7.2 Migration Playbook](/jetpack_6_to_7_2_migration_playbook/) | **Planned:** backup, dependency rebuild, acceptance testing, rollback, and fleet migration. |
| [JetPack 7.2 Unified Platform, ISO, and SBSA](/jetpack_7_2_unified_platform_iso_sbsa/) | **Planned:** unified installation, Orin/Thor differences, and Thor SBSA behavior. |
| [JetPack 7.2 MAXN_SUPER and MIG](/jetpack_7_2_maxn_super_and_mig/) | **Planned:** AGX Orin performance mode and Thor workload isolation. |

## Kernel 6.8 Drivers and Multimedia

| Resource | Coverage |
| --- | --- |
| [JetPack 7.2 Wireless Module Setup Guide](/jetpack72_ax210_ax200_wifi_setup_guide_bk/) | JetPack 7.2 driver and firmware recovery for Intel AX210/AX200 and Realtek RTL8852BE. |
| [JetPack 7.2 Camera and Multimedia Compatibility](/jetpack_7_2_camera_multimedia_compatibility/) | **Planned:** CSI, GMSL, Argus, V4L2, GStreamer, codecs, and multi-camera validation. |

:::warning
JetPack 6.x kernel modules, camera drivers, device-tree binaries, and TensorRT engines must not be reused directly on JetPack 7.2. Rebuild them against the Jetson Linux 39.2 software stack.
:::

## Agentic AI and Jetson Skills

JetPack 7.2 expands the Jetson developer workflow beyond manual setup by making reusable agent skills and local agentic applications first-class parts of the ecosystem.

| Resource | Ecosystem role |
| --- | --- |
| [Rapid Prototyping on Jetson with NVIDIA Skills](/rapid_prototyping_on_jetson_with_nvidia_skills_bk/) | Device inspection, compatibility checks, memory analysis, environment preparation, prototype construction, and packaging. |
| [Control reBot Arm B601 with NemoClaw on Jetson Thor](/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor_bk/) | Local perception, LLM reasoning, tool execution, service management, and physical-AI control on the JetPack 7 platform. |

## Memory Efficiency

| Resource | Coverage |
| --- | --- |
| [JetPack 7.2 Memory Optimization](/jetpack_7_2_memory_optimization/) | Skills-based auditing, headless/no-camera BSP reclamation, SWIOTLB safety, quantization, KV-cache control, and lower-memory LLM inference. |
| [JetPack 7.2 Memory Optimization Deep Dive](/jetpack_7_2_memory_optimization_deep_dive/) | Platform baseline vs JetPack 6.2, the LLM memory budget (weights, runtime, KV cache), the four-layer optimization path, and reproducible field observations. |

## Yocto

| Resource | Ecosystem role |
| --- | --- |
| [Build and Flash a Yocto Image for reComputer Super](/build_and_flash_yocto_for_recomputer_super_bk/) | Reproducible OpenEmbedded/Yocto image construction for a production-oriented Jetson Linux deployment. |

## AI Deployment & Applications

| Resource | Coverage |
| --- | --- |
| [Deploy TensorRT Edge-LLM on JetPack 7.2](/deploy_tensorrt_edge_llm_on_jetpack7.2/) | JetPack 7.2 model export, Orin/Thor build targets, engine generation, and C++ inference. |
| [Industrial Vision Monitoring on JetPack 7.2](/industrial_vision_monitoring_on_industrial_bk/) | YOLO and VLM monitoring verified on reComputer Industrial and reServer Industrial with L4T 39.2. |
| [DeepStream on JetPack 7.2](/jetpack_7_2_deepstream/) | DeepStream 9.1 installation, agentic skills, natural-language pipeline authoring, VLM integration, migration, and memory planning. |
| [Deploy Full-Weight GR00T N1.7 on JetPack 7.2 and AGX Orin](/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin/) | Validated seven-engine TensorRT deployment, numerical verification, offline inference, and portable path configuration for AGX Orin. |

Serialized engines and custom TensorRT plugins must be rebuilt on the target JetPack 7.2 software stack.

## Coverage Still Reserved

| JetPack 7.2 feature | Reserved page |
| --- | --- |
| Full JetPack 6.x migration and rollback | [Migration Playbook](/jetpack_6_to_7_2_migration_playbook/) |
| Unified ISO, Orin/Thor split, and SBSA | [Unified Platform, ISO, and SBSA](/jetpack_7_2_unified_platform_iso_sbsa/) |
| `MAXN_SUPER`, MIG, and performance isolation | [MAXN_SUPER and MIG](/jetpack_7_2_maxn_super_and_mig/) |
| CSI/GMSL and accelerated multimedia | [Camera and Multimedia Compatibility](/jetpack_7_2_camera_multimedia_compatibility/) |

## Recommended Migration Order

1. Confirm that the target Seeed product has a JetPack 7.2 BSP or image.
2. Back up application data, calibration files, container volumes, and custom device-tree sources.
3. Flash JetPack 7.2 and validate boot, storage, networking, and recovery mode.
4. Restore Wi-Fi, camera, CAN, EtherCAT, or other out-of-tree drivers with JetPack 7.2 builds.
5. Rebuild CUDA applications, TensorRT plugins, and TensorRT engines.
6. Validate the application in the original power mode before enabling `MAXN_SUPER` or other performance modes.
7. Record memory use, thermals, power consumption, latency, and throughput before moving the device into production.

## Official NVIDIA References

- [NVIDIA JetPack](https://developer.nvidia.com/embedded/jetpack)
- [Jetson Linux 39.2 Release Notes](https://docs.nvidia.com/jetson/archives/r39.2/ReleaseNotes/Jetson_Linux_Release_Notes_r39.2.pdf)
- [Jetson Linux 39.2 Developer Guide](https://docs.nvidia.com/jetson/archives/r39.2/DeveloperGuide/index.html)
- [TensorRT Edge-LLM Documentation](https://nvidia.github.io/TensorRT-Edge-LLM/)
- [TensorRT Edge-LLM Supported Models](https://nvidia.github.io/TensorRT-Edge-LLM/user_guide/getting_started/supported-models.html)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
