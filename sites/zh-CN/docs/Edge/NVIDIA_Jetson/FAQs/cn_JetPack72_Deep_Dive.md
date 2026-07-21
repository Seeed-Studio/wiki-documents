---
description: 本常见问题解答说明了 JetPack 7.2 对 Jetson AGX Orin 的关键变更，总结了 Seeed 对 JetPack 7.2 与 JetPack 6.2 推理性能的对比结果，并展示了如何使用 Seeed Jetson DevelopTool 进行升级。
title: JetPack 7.2 深度解析
keywords:
  - Jetson
  - JetPack 7.2
  - Jetson AGX Orin
  - 边缘 AI
  - 大语言模型
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-e26020301-recomputer-jetson-agx-orin_-developer-kit-gmsl-bundle.jpg
slug: /jetpack72_deep_dive
sku: E26020301
last_update:
  date: 06/11/2026
  author: Dayu
createdAt: '2026-06-11'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/cn/jetpack72_deep_dive/
---

# JetPack 7.2 深度解析：Jetson AGX Orin 推理发生了哪些变化？

本常见问题解答总结了 JetPack 7.2 对 Jetson AGX Orin 用户的重要性、Seeed 在对比 JetPack 7.2 与 JetPack 6.2 时测得的结果，以及如何使用 Seeed Jetson DevelopTool 评估升级路径。

Seeed 使用的测试平台是 reComputer Jetson AGX Orin Developer Kit GMSL Bundle。

<div align="center">
  <img width={800} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-e26020301-recomputer-jetson-agx-orin_-developer-kit-gmsl-bundle.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Jetson-AGX-Orintm-Developer-Kit-GMSL-Bundle.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 </font></span></strong>
  </a>
</div>

## 常见问题

#### Q1: JetPack 7.2 对 Jetson 用户的主要变化是什么？

JetPack 7.2 通过更新的 Jetson Linux 基线、Ubuntu 24.04、CUDA 13、更新的 AI 运行时组件，以及在内存效率和 Agentic AI 工作流方面的平台级改进，推动了 Jetson 软件栈的升级。

对于 Jetson AGX Orin 32GB 用户，其中一个最重要的变化是 Seeed 测试中使用的新高性能功耗模式。当载板的供电和散热设计能够支撑时，该模式允许同一模组以更高的 GPU 频率运行，并提供更高的 AI 吞吐量。

:::note
请始终查看 NVIDIA 发布说明和 Seeed BSP 发布说明，以确认目标载板和镜像所支持的精确组件版本。
:::

#### Q2: Seeed 对比了哪些软硬件？

Seeed 使用 JetPack 6.2 和 JetPack 7.2 软件环境以及相同的大语言模型推理负载，对比了 AGX Orin 32GB Developer Kit 与 reComputer J5011。

| 项目 | JetPack 6.2 测试 | JetPack 7.2 测试 |
| --- | --- | --- |
| 模组 | Jetson AGX Orin 32GB | Jetson AGX Orin 32GB |
| 测试设备 | AGX Orin 32GB Developer Kit | reComputer J5011 |
| Jetson Linux | L4T 36.4.3 | L4T 39.2 |
| Ubuntu | 22.04 | 24.04 |
| CUDA | 12.6 | 13.x |
| 推理引擎 | llama.cpp | llama.cpp |
| 模型 | Qwen3.5-27B-Q4_K_M.gguf | Qwen3.5-27B-Q4_K_M.gguf |
| 主要参数 | `-ngl 999 -fa on -ub 512 -t 12` | `-ngl 999 -fa on -ub 512 -t 12` |

#### Q3: Seeed 观察到哪些内存和性能改进？

在 Seeed 的对比中，JetPack 7.2 降低了模型加载后的内存占用，并提升了提示处理速度和 Token 生成速度。

| 指标 | JetPack 6.2 | JetPack 7.2 | 观察到的变化 |
| --- | --- | --- | --- |
| 模型加载后内存占用 | 24.6 GB / 30 GB | 14.7 GB / 30 GB | 降低约 40% |
| 推理期间 GPU 频率 | 930 MHz | 1.36 GHz | 更高的加速频率 |
| 提示处理 | 18.2 tokens/s | 25.8 tokens/s | 约快 41.8% |
| Token 生成 | 4.3 tokens/s | 5.5 tokens/s | 约快 27.9% |

最实用的结果是内存余量。在 JetPack 6.2 运行中，27B 模型在加载后占用了大部分可用内存。在 JetPack 7.2 运行中，系统大约多保留了 10 GB 可用内存，这在与 LLM 负载同时运行视觉预处理、机器人中间件或其他服务时非常有用。

#### Q4: 我可以观看 JetPack 7.2 与 JetPack 6.2 的对比结果吗？

可以。下面的视频展示了对比效果。

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/rO0ZPA2VK9w" title="JetPack 7.2 and JetPack 6.2 comparison on Jetson AGX Orin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### Q5: 我是否应该将 Jetson 设备升级到 JetPack 7.2？

可以先参考下表：

| 场景 | 建议 |
| --- | --- |
| 新的 Jetson AGX Orin 项目 | 如果所需的 BSP、驱动和应用栈已经可用，可考虑直接从 JetPack 7.2 起步。 |
| 现有 JetPack 6.x 项目 | 迁移前请验证内核模块、CUDA 依赖、TensorRT 引擎、相机驱动和外设驱动。 |
| 受内存限制的 LLM 或 VLM 负载 | JetPack 7.2 值得评估，因为测得的内存占用降低可以让更大的模型或多服务流水线更易运行。 |
| 使用自定义载板的量产系统 | 不要仅通过运行 `apt upgrade` 来升级。请使用经过验证的完整镜像，或 Seeed 官方支持的 OTA 路径。 |

:::caution
更高的性能模式会提高功耗和散热需求。在启用高功耗模式之前，请确认载板、电源适配器、机箱以及散热设计能够持续支撑目标负载。
:::

#### Q6: 如何使用 Seeed Jetson DevelopTool 升级到 JetPack 7.2？

Seeed Jetson DevelopTool 为 Jetson 固件下载、烧录、设备连接和 OTA 操作提供了引导式工作流。

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/flash-page.png" />
</div>

对于 JetPack 6.x 到 JetPack 7.x 这类大版本迁移，除非 Seeed 明确为你的具体产品和源镜像提供了经过验证的 OTA 路径，否则建议执行完整刷机。

通用流程：

1. 安装并打开 Seeed Jetson DevelopTool。
2. 选择 Jetson 产品或载板型号。
3. 选择与 JetPack 7.2 匹配的目标 L4T 或 JetPack 版本。
4. 通过工具下载并解压 BSP 包。
5. 将 Jetson 设备置于 Force Recovery Mode。
6. 从主机电脑上检测到该设备。
7. 开始刷机并等待设备重启。
8. 完成首次开机设置并验证系统版本。

有关该工具的更多详情，请参考 [Seeed Jetson DevelopTool](https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool)。

#### Q7: 升级后我应该验证哪些内容？

在刷机或升级完成后，在运行生产负载之前，请验证以下项目：

- JetPack、L4T、CUDA、cuDNN 和 TensorRT 版本。
- 负载下的 GPU 频率、电源模式和散热行为。
- 摄像头、GMSL、以太网、CAN、USB、M.2 以及其他外设接口。
- 自定义内核模块和 out-of-tree 驱动。
- AI 框架兼容性，包括 PyTorch、TensorRT 引擎、llama.cpp 构建以及 CUDA 扩展。
- 电源与温度稳定性的长时间压力测试。

## 资源

- [reComputer Jetson AGX Orin Developer Kit GMSL Bundle](https://www.seeedstudio.com/reComputer-Jetson-AGX-Orintm-Developer-Kit-GMSL-Bundle.html)
- [Seeed Jetson DevelopTool](https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool)
- [NVIDIA JetPack Archive](https://developer.nvidia.com/embedded/jetpack-archive)
- [Seeed Jetson Wiki](https://wiki.seeedstudio.com/cn/)

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
