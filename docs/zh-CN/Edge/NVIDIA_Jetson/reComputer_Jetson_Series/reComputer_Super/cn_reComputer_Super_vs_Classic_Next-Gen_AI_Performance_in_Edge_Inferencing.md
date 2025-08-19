---
description: 本文重点介绍了 reComputer Super 相较于 reComputer Classic 的卓越 AI 性能，使用 NVIDIA Jetson Orin NX 16GB 展现了高达 1.7 倍的 AI 计算能力提升。通过实际基准测试，包括使用 Ollama 的 DeepSeek-R1:7B 模型进行 AI 文本生成，以及使用 YOLOv11 目标检测模型进行 AI 视频处理，结果显示 reComputer Super 提供了显著更快的推理速度和更高的 GPU 频率。尤其是，它每秒处理的图像数量约为 Classic 的 2.37 倍。文章还解释了基于终端报告的 FPS 而非屏幕 FPS 来评估性能的重要性，因为屏幕 FPS 可能受到显示和系统因素的限制。
title: reComputer Super 与 Classic 的下一代边缘推理 AI 性能对比
tags:
  - reComputer Super
  - Super
  - deepseek
  - yolo
  - Jetson
  - AI
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/recomputer-super_robotics_2.webp
slug: /cn/recomputer_jetson_super_performance
last_update:
  date: 06/04/2025
  author: Zibo
---


<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super.png"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

## 简介

<div style={{ textAlign: "justify" }}>
reComputer Super 系列通过提供高达 157 TOPS 的 AI 性能，提升了 reComputer Classic 的能力，达到了 1.7 倍的性能提升。本篇 Wiki 比较了 reComputer Super 和 reComputer Classic 在 AI 文本生成和 AI 视频处理方面的性能差异。以 <a href="https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html" target="_blank">NVIDIA Jetson Orin NX 16GB 模块</a>作为测试平台，清晰地展示了 reComputer Super 相较于 reComputer Classic 的卓越性能。
</div>

## AI 文本生成
<div style={{ textAlign: "justify" }}>
在本节中，我们使用 Ollama 加载 deepseek-r1:7b 模型，并比较该模型在不同设备上的推理速度。显而易见，reComputer Super 在推理速度和 GPU 频率方面相较于 reComputer Classic 有显著提升。
</div>

:::info
部署此模型的主要步骤如下：

**步骤 1.** 安装 jetson-containers。

**步骤 2.** 进入 Docker 容器运行 Ollama 服务。

**步骤 3.** 从 Ollama 拉取 deepseek-r1:7b 模型。
:::

<div align="center">
<iframe width="682" height="480" src="https://www.youtube.com/embed/nD1w-odV-ZU" title="Deepseek 在 reComputer Classic 和 reComputer Super 上的推理演示" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style={{ textAlign: "justify" }}>
为了便于演示，我们在终端中输入 "tell me a story." 并要求 DeepSeek 为我们生成一个短故事。由于模型生成结果的随机性，我们获得的结果通常不会完全相同。我们可以通过模型生成 token 的速度来衡量设备推理性能。（如视频中所示，使用 eval rate 指标进行测量）
</div>

:::note
如果您也希望将 Ollama 部署到您的 Jetson 设备上，请参考 [此教程](https://www.jetson-ai-lab.com/tutorial_ollama.html)，了解如何快速在 Nvidia Jetson 上部署。
:::



## AI 视频处理

<div style={{ textAlign: "justify" }}>
在本节中，我们在两台设备上部署了目标检测模型 YOLOv11，并比较了它们在处理视频输入时的性能差异。结果表明，reComputer Super 每秒处理的图像数量约为 reComputer Classic 的 2.37 倍。
</div>

:::info
参考 [此仓库](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11)，可以像我们一样在您的设备上部署 YOLOv11。
部署此模型的主要步骤如下：

**步骤 1.** 克隆此 [GitHub 仓库](https://github.com/wang-xinyu/tensorrtx/tree/master)。

**步骤 2.** 从 [ultralytics](https://github.com/ultralytics/ultralytics) 下载预训练权重文件 yolo11n.pt。

**步骤 3.** 按照 [此仓库](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11) 的说明编译模型并运行推理。

**步骤 4.** 我们参考了 [此仓库](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11) 中的 yolo11_det_trt.py 脚本来运行推理。
:::

<div align="center">
<iframe width="682" height="480" src="https://www.youtube.com/embed/ELbltFieez4" title="Yolo 在 reComputer Classic 和 reComputer Super 上的推理演示" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
终端中显示的平均 FPS 反映了模型的纯推理速度，直接表明设备计算能力的差异，因此 reComputer Super 显示了显著更高的 FPS。然而，显示窗口左上角的实时 FPS 表示整个处理管道的帧率，包括图像捕获、预处理、推理、后处理和显示。此 FPS 受到多个因素的影响，例如摄像头帧率、显示刷新率和程序帧率限制，导致两台设备上显示的 FPS 相似，从而掩盖了推理性能的差异。因此，设备性能应基于终端输出的平均推理 FPS 进行评估，而不是仅依赖实时显示的 FPS。
:::

## 参考资料
- https://www.jetson-ai-lab.com/tutorial_ollama.html
- https://www.deepseek.com/
- https://wiki.seeedstudio.com/cn/deploy_deepseek_on_jetson/
- https://www.seeedstudio.com/edge-ai/generative-ai
- https://github.com/ultralytics/ultralytics
- https://github.com/wang-xinyu/tensorrtx?tab=readme-ov-file




## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>