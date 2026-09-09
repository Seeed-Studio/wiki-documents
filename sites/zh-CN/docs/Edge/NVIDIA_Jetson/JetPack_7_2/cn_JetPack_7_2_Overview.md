---
description: 一个为 Seeed Studio NVIDIA Jetson 设备整理的 JetPack 7.2 分类资源中心，涵盖新平台特性、迁移指南、刷机、驱动、开发者工具、推理与应用。
title: JetPack 7.2 资源中心
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
url: https://wiki.seeedstudio.com/cn/jetpack_7_2_resource_hub/
---

# JetPack 7.2 资源中心

![JetPack 7.2 Resource Hub cover](https://files.seeedstudio.com/wiki/other/jp72-front.png)

本页面整理了当前适用于 Seeed Studio NVIDIA Jetson 产品的 JetPack 7.2 相关资源。你可以将其作为起点，用于理解新的软件栈、选择受支持的镜像、迁移现有 JetPack 6.x 项目、恢复外设驱动，以及部署优化后的 AI 工作负载。

:::info
JetPack 7.2 使用 **Jetson Linux 39.2**、**Ubuntu 24.04** 根文件系统以及 **Linux 内核 6.8**。NVIDIA Jetson Linux 39.2 同时支持 **Jetson Orin** 和 **Jetson Thor** 平台家族。
:::

## JetPack 7.2 有哪些新变化？

JetPack 7.2 不只是一次操作系统更新。它将 JetPack 7 软件架构扩展到 Jetson Orin，并为 Agentic AI、量产 Linux 定制、内存优化以及更高性能的边缘推理增加了平台能力。

### Agentic AI 与开发者工作流

- **NVIDIA NemoClaw 就绪**：JetPack 7.2 提供了一键安装 NemoClaw 以及本地或云端模型编排所需的平台依赖。
- **Jetson Agent 技能**：NVIDIA 提供可复用的设备端和 BSP 端工作流，用于 Jetson Linux 定制、内存优化、模型基准测试、软件包选择和应用原型开发。
- **云原生部署**：JetPack 软件栈持续支持用于边缘服务的容器化开发与部署工作流。

### 平台架构

- **JetPack 7 中的 Jetson Orin 支持**：JetPack 7.2 将 JetPack 7 软件栈带到 Jetson Orin 家族，同时保留对 Jetson Thor 的支持。
- **统一 ISO 安装**：Jetson Linux 39.2 为受支持的 Jetson Orin 和 Jetson Thor 开发套件引入了统一的基于 ISO 的安装路径。
- **SBSA 对齐**：Jetson Thor 遵循 Server Base System Architecture（服务器基础系统架构）软件模型，从而提升在 Arm 服务器级平台之间的可移植性。

### Yocto

- **官方 Yocto Project 支持**：经 NVIDIA 验证的 OpenEmbedded/Yocto 配方，为可复现、可定制、面向量产的 Linux 镜像提供了一条路径。

### 性能、内存与隔离

- **Jetson AGX Orin 32GB Super 模式**：JetPack 7.2 为受支持的 Jetson AGX Orin 32GB 配置新增 `MAXN_SUPER` 功耗模式。
- **内存效率工作流**：Jetson Agent 技能可以审计并减少 Bootloader 预留、内核保留以及不必要的用户态内存占用。
- **Jetson Thor 上的多实例 GPU**：MIG 作为技术预览在受支持的 Jetson Thor T5000 配置上提供，用于隔离的多工作负载执行。

:::warning
部分 JetPack 7.2 特性是平台特定的。MIG 和 SBSA 相关行为适用于 Jetson Thor，而 `MAXN_SUPER` 适用于受支持的 Jetson AGX Orin 32GB 配置。在启用新的功耗或加速模式前，请确认模组、载板、BSP、电源以及散热设计。
:::

## JetPack 7.2 软件基线

| 层级 | JetPack 7.2 基线 | 迁移影响 |
| --- | --- | --- |
| Jetson Linux | 39.2 | 重新构建树外内核模块和 BSP 定制内容。 |
| 根文件系统 | Ubuntu 24.04 | 重新验证软件包名称、软件源、Python 环境和系统服务。 |
| Linux 内核 | 6.8 | 针对新头文件重新构建相机、Wi-Fi、现场总线以及自定义外设驱动。 |
| CUDA 代际 | CUDA 13 | 重新构建 CUDA 应用，不要在未验证的情况下复用 JetPack 6.x 二进制文件。 |
| TensorRT 引擎 | JetPack 7.2 TensorRT 栈 | 在目标软件栈上重新构建序列化的 TensorRT 引擎。 |
| 支持的平台 | Jetson Orin 和 Jetson Thor | 为目标 GPU 架构使用正确的 BSP、工具链编译选项和精度支持。 |

## JetPack 7.2 生态地图

本合集特意仅包含 JetPack 7.2 相关内容。现有文章被复制到 `JetPack_7_2` 目录中，并使用 `_bk` slug，以便该系列可以独立于原始 Wiki 页面进行审阅、更新、翻译和发布。

| JetPack 7.2 能力 | 包含的资源 |
| --- | --- |
| 统一的 Orin 与 Thor 软件架构 | [统一平台、ISO 与 SBSA](/cn/jetpack_7_2_unified_platform_iso_sbsa/) **（规划中）** |
| Ubuntu 24.04、Linux 6.8 与 CUDA 13 迁移 | [JetPack 7.2 深度解析](/cn/jetpack72_deep_dive_bk/) 和 [迁移作战手册](/cn/jetpack_6_to_7_2_migration_playbook/) **（规划中）** |
| Agentic AI 与可复用 Jetson 技能 | [使用 NVIDIA Skills 在 Jetson 上快速原型开发](/cn/rapid_prototyping_on_jetson_with_nvidia_skills_bk/) 和 [在 Jetson Thor 上使用 NemoClaw 控制 reBot 机械臂](/cn/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor_bk/) |
| Yocto | [构建并刷写 Yocto 镜像](/cn/build_and_flash_yocto_for_seeed_jetson_carrier_boards/) |
| 使用 TensorRT Edge-LLM 的更高性能推理 | [在 JetPack 7.2 上部署 TensorRT Edge-LLM](/cn/deploy_tensorrt_edge_llm_on_jetpack7.2/) |
| 更低的系统与 LLM 内存占用 | [JetPack 7.2 内存优化](/cn/jetpack_7_2_memory_optimization/) |
| DeepStream 9.1 与自然语言视频工作流 | [JetPack 7.2 上的 DeepStream](/cn/jetpack_7_2_deepstream/) |
| AGX Orin `MAXN_SUPER` 与 Thor MIG | [MAXN_SUPER 与 MIG](/cn/jetpack_7_2_maxn_super_and_mig/) **（规划中）** |
| 内核 6.8 驱动迁移 | [JetPack 7.2 无线模组设置](/cn/jetpack72_ax210_ax200_wifi_setup_guide_bk/) 和 [相机与多媒体兼容性](/cn/jetpack_7_2_camera_multimedia_compatibility/) **（规划中）** |

## 刷机与 OTA

| 资源 | 覆盖范围 |
| --- | --- |
| [JetPack 7.2 深度解析](/cn/jetpack72_deep_dive_bk/) | 平台变更、与 JetPack 6.2 的对比、迁移影响以及 AGX Orin 推理结果。 |
| [刷机与 OTA 升级到 JetPack 7.2](/cn/flash_and_ota_jetpack_7.2/) | 全新刷机、基于镜像的 OTA 要求、版本验证以及部署选择。 |
| [JetPack 6.x 到 JetPack 7.2 迁移作战手册](/cn/jetpack_6_to_7_2_migration_playbook/) | **规划中：** 备份、依赖重建、验收测试、回滚以及集群迁移。 |
| [JetPack 7.2 统一平台、ISO 与 SBSA](/cn/jetpack_7_2_unified_platform_iso_sbsa/) | **规划中：** 统一安装、Orin/Thor 差异以及 Thor 的 SBSA 行为。 |
| [JetPack 7.2 MAXN_SUPER 与 MIG](/cn/jetpack_7_2_maxn_super_and_mig/) | **规划中：** AGX Orin 性能模式与 Thor 工作负载隔离。 |

## 内核 6.8 驱动与多媒体

| 资源 | 覆盖范围 |
| --- | --- |
| [JetPack 7.2 无线模组设置指南](/cn/jetpack72_ax210_ax200_wifi_setup_guide_bk/) | JetPack 7.2 上 Intel AX210/AX200 和 Realtek RTL8852BE 的驱动与固件恢复。 |
| [JetPack 7.2 相机与多媒体兼容性](/cn/jetpack_7_2_camera_multimedia_compatibility/) | **规划中：** CSI、GMSL、Argus、V4L2、GStreamer、编解码器以及多相机验证。 |

:::warning
JetPack 6.x 的内核模块、相机驱动、设备树二进制文件以及 TensorRT 引擎不得直接在 JetPack 7.2 上复用。请基于 Jetson Linux 39.2 软件栈重新构建它们。
:::

## Agentic AI 与 Jetson 技能

JetPack 7.2 通过将可复用的 Agent 技能和本地 Agentic 应用作为生态系统的一等公民，将 Jetson 开发者工作流扩展到超越手动配置的阶段。

| 资源 | 在生态中的角色 |
| --- | --- |
| [使用 NVIDIA Skills 在 Jetson 上快速原型开发](/cn/rapid_prototyping_on_jetson_with_nvidia_skills_bk/) | 设备检查、兼容性检测、内存分析、环境准备、原型构建与打包。 |
| [在 Jetson Thor 上使用 NemoClaw 控制 reBot 机械臂 B601](/cn/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor_bk/) | 在 JetPack 7 平台上实现本地感知、LLM 推理、工具执行、服务管理以及物理 AI 控制。 |

## 内存效率

| 资源 | 覆盖范围 |
| --- | --- |
| [JetPack 7.2 内存优化](/cn/jetpack_7_2_memory_optimization/) | 基于技能的审计、无显示/无相机 BSP 回收、SWIOTLB 安全性、量化、KV-Cache 控制以及更低内存的 LLM 推理。 |
| [JetPack 7.2 内存优化深度解析](/cn/jetpack_7_2_memory_optimization_deep_dive/) | 与 JetPack 6.2 的平台基线对比、LLM 内存预算（权重、运行时、KV Cache）、四层优化路径以及可复现的现场观测。 |

## Yocto

| 资源 | 在生态中的角色 |
| --- | --- |
| [为 Seeed Jetson 载板构建并刷写 Yocto](/cn/build_and_flash_yocto_for_seeed_jetson_carrier_boards/) | 为受支持的 Seeed Jetson 载板构建可复现的 OpenEmbedded/Yocto 镜像。 |

## AI 部署与应用

| 资源 | 覆盖范围 |
| --- | --- |
| [在 JetPack 7.2 上部署 TensorRT Edge-LLM](/cn/deploy_tensorrt_edge_llm_on_jetpack7.2/) | JetPack 7.2 模型导出、Orin/Thor 构建目标、引擎生成以及 C++ 推理。 |
| [JetPack 7.2 上的工业视觉监控](/cn/industrial_vision_monitoring_on_industrial_bk/) | 在 reComputer Industrial 和 reServer Industrial 上基于 L4T 39.2 验证的 YOLO 与 VLM 监控。 |
| [JetPack 7.2 上的 DeepStream](/cn/jetpack_7_2_deepstream/) | DeepStream 9.1 安装、Agentic 技能、自然语言管线编排、VLM 集成、迁移与内存规划。 |
| [在 JetPack 7.2 与 AGX Orin 上部署全量 GR00T N1.7](/cn/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin/) | 针对 AGX Orin 验证的七引擎 TensorRT 部署、数值校验、离线推理以及可移植路径配置。 |

序列化引擎和自定义 TensorRT 插件必须在目标 JetPack 7.2 软件栈上重新构建。

## 仍在预留覆盖范围

| JetPack 7.2 特性 | 预留页面 |
| --- | --- |
| 完整的 JetPack 6.x 迁移与回滚 | [迁移作战手册](/cn/jetpack_6_to_7_2_migration_playbook/) |
| 统一 ISO、Orin/Thor 区分与 SBSA | [统一平台、ISO 与 SBSA](/cn/jetpack_7_2_unified_platform_iso_sbsa/) |
| `MAXN_SUPER`、MIG 与性能隔离 | [MAXN_SUPER 与 MIG](/cn/jetpack_7_2_maxn_super_and_mig/) |
| CSI/GMSL 与加速多媒体 | [相机与多媒体兼容性](/cn/jetpack_7_2_camera_multimedia_compatibility/) |

## 推荐迁移顺序

1. 确认目标 Seeed 产品具备 JetPack 7.2 BSP 或镜像。
2. 备份应用数据、校准文件、容器卷以及自定义 device-tree 源文件。
3. 刷写 JetPack 7.2，并验证启动、存储、网络和恢复模式是否正常。
4. 使用 JetPack 7.2 构建的版本恢复 Wi-Fi、摄像头、CAN、EtherCAT 或其他 out-of-tree 驱动。
5. 重新构建 CUDA 应用、TensorRT 插件和 TensorRT 引擎。
6. 在启用 `MAXN_SUPER` 或其他性能模式之前，先在原始功耗模式下验证应用。
7. 在将设备投入生产之前，记录内存使用情况、热表现、功耗、延迟和吞吐量。

## NVIDIA 官方参考资料

- [NVIDIA JetPack](https://developer.nvidia.com/embedded/jetpack)
- [Jetson Linux 39.2 发行说明](https://docs.nvidia.com/jetson/archives/r39.2/ReleaseNotes/Jetson_Linux_Release_Notes_r39.2.pdf)
- [Jetson Linux 39.2 开发者指南](https://docs.nvidia.com/jetson/archives/r39.2/DeveloperGuide/index.html)
- [TensorRT Edge-LLM 文档](https://nvidia.github.io/TensorRT-Edge-LLM/)
- [TensorRT Edge-LLM 支持的模型](https://nvidia.github.io/TensorRT-Edge-LLM/user_guide/getting_started/supported-models.html)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
