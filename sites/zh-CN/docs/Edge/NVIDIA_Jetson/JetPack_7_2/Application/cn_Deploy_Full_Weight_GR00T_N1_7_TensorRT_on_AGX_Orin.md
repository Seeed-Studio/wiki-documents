---
description: 计划中的 JetPack 7.2 应用指南，用于在 Jetson AGX Orin 上通过基于 TensorRT 的推理流水线运行完整的 NVIDIA GR00T N1.7 checkpoint。
title: 在 JetPack 7.2 和 Jetson AGX Orin 上使用 TensorRT 部署完整权重 GR00T N1.7
keywords:
  - Jetson AGX Orin
  - JetPack 7.2
  - GR00T N1.7
  - TensorRT
  - Physical AI
  - VLA
image: https://github.com/NVIDIA/Isaac-GR00T/raw/main/media/model-architecture.png
slug: /deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/cn/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin/
---

# 在 JetPack 7.2 和 Jetson AGX Orin 上使用 TensorRT 部署完整权重 GR00T N1.7

:::info 计划中的应用
本页面预留了在 Jetson AGX Orin 上完成 GR00T N1.7 TensorRT 部署的 JetPack 7.2 应用入口。在端到端复现实现之后，将补充命令、引擎产物、基准测试结果以及机器人验证步骤。
:::

## 项目目标

在 **Jetson AGX Orin** 上，结合 **JetPack 7.2** 和基于 TensorRT 的推理流水线，运行 **完整 GR00T N1.7 checkpoint**。最终指南将记录模型转换边界、支持的精度、TensorRT 插件、引擎构建流程、运行时集成以及机器人控制验证。

本工作有意与现有的[在 Jetson Thor 上部署 GR00T N1.7](/cn/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601/)分开。Jetson AGX Orin 具有不同的 GPU 架构、精度矩阵、内存上限和性能特征，因此 Thor 引擎和 Thor 专用优化无法直接复用。

## 目标环境

| 项目 | 计划目标 |
| --- | --- |
| 计算模块 | NVIDIA Jetson AGX Orin |
| 软件 | JetPack 7.2 / Jetson Linux 39.2 |
| 模型 | NVIDIA GR00T N1.7 完整 checkpoint |
| 推理后端 | 基于 TensorRT 的运行时 |
| 初始精度候选 | FP16 和 Orin 支持的 INT8/INT4 路径 |
| 验证 | 离线动作生成、闭环机器人控制、时延、内存、功耗和热特性测量 |

:::warning
截至 2026 年 7 月 31 日，GR00T N1.7 尚未列入 TensorRT Edge-LLM v0.9.1 支持模型矩阵。因此，在官方添加 TensorRT Edge-LLM 支持之前，本项目应被视为原生 TensorRT 与自定义集成工作。
:::

## 为什么选择 JetPack 7.2

本次实现将评估 JetPack 7.2 是否消除了此前 JetPack 6.2 尝试中遇到的阻碍。调研应评估以下因素的影响：

- Jetson Linux 39.2 和 Ubuntu 24.04
- CUDA 13 和 JetPack 7.2 的 TensorRT 软件栈
- 在硬件配置支持的情况下，Jetson AGX Orin 32GB `MAXN_SUPER`
- 降低系统内存开销和 JetPack 7.2 的内存优化工作流
- 更新后的模型导出、TensorRT 计算图和插件支持

最终文章必须将实测改进与假设区分开来，并记录所有仍不受支持的算子或运行时回退。

## 计划实施阶段

### 1. 冻结可复现基线

- 记录精确的 JetPack 7.2 镜像、Jetson Linux 构建版本、CUDA 版本、TensorRT 版本、电源模式、时钟和存储布局。
- 固定 GR00T 仓库提交版本、N1.7 checkpoint 修订版本、Python 环境和宿主导出环境。
- 在 TensorRT 转换之前，复现原生框架推理输出。

### 2. 审核完整模型计算图

- 识别视觉编码器、语言或推理骨干网络、状态和本体感受编码器、动作专家、扩散或流匹配循环、分词器以及后处理阶段。
- 记录动态形状、序列长度、观测窗口、动作视野以及循环状态。
- 生成算子清单，并隔离不受 ONNX 或 TensorRT 支持的算子。

### 3. 定义 TensorRT 引擎边界

- 仅在计算图和内存占用可行的情况下测试单引擎导出。
- 否则，将流水线拆分为稳定的 TensorRT 子引擎，并使用显式 CUDA 缓冲区交接。
- 保持 CPU 或框架回退可见且可测量；最终结论必须说明哪些部分实际在 TensorRT 中运行。

### 4. 选择 Orin 兼容精度

- 建立 FP16 正确性基线。
- 仅在 Jetson AGX Orin 上完成标定、内核和精度验证的情况下评估 INT8 或 INT4。
- 不要将仅适用于 Thor 的 FP8、FP4 或 NVFP4 假设用于 Orin 部署。
- 比较动作质量和闭环成功率，而不仅仅是模型吞吐量。

### 5. 构建并打包运行时

- 添加所需的 TensorRT 插件，并与项目一起进行版本管理。
- 在 JetPack 7.2 目标设备上，或使用严格匹配目标的工具链构建引擎。
- 添加确定性的预处理、异步 CUDA 执行、可复用缓冲区以及引擎元数据校验。
- 将模型文件、引擎文件、标定数据、配置和启动脚本打包到可复现的目录或容器中。

### 6. 在机器人上验证

- 在启用执行器命令之前，先验证离线观测。
- 添加命令限制、急停处理、看门狗以及陈旧观测检测。
- 使用相同的录制片段，对比原生与 TensorRT 的动作轨迹。
- 在逐步提高任务复杂度的情况下运行闭环测试。

## 待完成的基准测试表

| 指标 | JetPack 6.2 尝试 | JetPack 7.2 FP16 | JetPack 7.2 优化版本 |
| --- | --- | --- | --- |
| TensorRT 中的模型覆盖率 | 待定 | 待定 | 待定 |
| 引擎构建峰值内存 | 待定 | 待定 | 待定 |
| 运行时内存 | 待定 | 待定 | 待定 |
| 从观测到动作的时延 | 待定 | 待定 | 待定 |
| 动作生成速率 | 待定 | 待定 | 待定 |
| 平均板载功耗 | 待定 | 待定 | 待定 |
| 峰值温度 | 待定 | 待定 | 待定 |
| 闭环任务成功率 | 待定 | 待定 | 待定 |

## 验收标准

在满足以下所有条件后，本页面即可从“计划中”转为“已验证”：

- 已固定且可复现的宿主导出环境
- 面向 AGX Orin 的 JetPack 7.2 TensorRT 引擎构建命令
- 清晰列出的 TensorRT 与非 TensorRT 模型组件
- 在不移除模型组件的前提下成功完成完整 checkpoint 推理
- 原生与 TensorRT 的数值或轨迹对比
- 内存、时延、吞吐量、功耗和热特性测量结果
- 至少一个带安全控制的闭环机器人任务
- 已记录的回滚和故障排查步骤

## 相关资源

- [JetPack 7.2 资源中心](/cn/jetpack_7_2_resource_hub/)
- [在 JetPack 7.2 上部署 TensorRT Edge-LLM](/cn/deploy_tensorrt_edge_llm_on_jetpack7.2/)
- [为 reBot 机械臂微调 GR00T N1.7 并部署到 Jetson Thor](/cn/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601/)
- [JetPack 7.2 深度解析](/cn/jetpack72_deep_dive/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品时的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
