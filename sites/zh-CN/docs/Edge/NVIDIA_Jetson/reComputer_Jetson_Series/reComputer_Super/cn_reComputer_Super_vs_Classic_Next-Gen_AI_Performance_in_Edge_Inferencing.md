---
description: 本文重点介绍了 reComputer Super 相比 reComputer Classic 的卓越 AI 性能，展示了搭载 NVIDIA Jetson Orin NX 16GB 的 reComputer Super 在 AI 计算能力上高达 1.7 倍的提升。通过使用 Ollama 运行 DeepSeek-R1:7B 模型进行 AI 文本生成的实际基准测试，以及使用 YOLOv11 目标检测模型进行 AI 视频处理的测试，结果显示 reComputer Super 提供了显著更快的推理速度和更高的 GPU 频率。值得注意的是，它每秒处理的图像数量约为 Classic 版本的 2.37 倍。文章还解释了基于终端报告的 FPS 而非屏幕显示 FPS 来评估性能的重要性，因为屏幕显示 FPS 可能受到显示器和系统因素的限制。
title: reComputer Super vs Classic 边缘推理中的下一代 AI 性能
tags:
  - reComputer Super
  - Super
  - deepseek
  - yolo
  - Jetson
  - AI
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/recomputer-super_robotics_2.webp
slug: /recomputer_jetson_super_performance
last_update:
  date: 06/04/2025
  author: Zibo
createdAt: '2025-08-07'
updatedAt: '2025-10-11'
url: https://wiki.seeedstudio.com/cn/recomputer_jetson_super_performance/
---


<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super.png"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

## 介绍

<div style={{ textAlign: "justify" }}>
reComputer Super 系列为 reComputer Classic 提供了强大的性能提升，在 AI 性能方面提供了高达 1.7 倍的提升，达到 157 TOPS。本文档比较了 reComputer Super 和 reComputer Classic 在 AI 文本生成和 AI 视频处理方面的性能差异。使用 <a href="https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html" target="_blank">NVIDIA Jetson Orin NX 16GB 模块</a>作为测试平台，清楚地展示了 reComputer Super 相比 reComputer Classic 提供了卓越的性能。
</div>

## AI 文本生成

<div style={{ textAlign: "justify" }}>
在本节中，我们使用 Ollama 加载 deepseek-r1:7b 模型，并比较该模型在不同设备上的推理速度。很明显，reComputer Super 在推理速度和 GPU 频率方面相比 reComputer Classic 有所提升。
</div>

:::info
部署此模型的主要步骤是：

**步骤 1.** 安装 jetson-containers。

**步骤 2.** 进入 Docker 容器运行 Ollama 服务。

**步骤 3.** 从 Ollama 拉取 deepseek-r1:7b 模型。
:::

<div class="video-container">
<iframe width="682" height="480" src="https://www.youtube.com/embed/nD1w-odV-ZU" title="Deepseek Inference on reComputer Classic and reComputer Super" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style={{ textAlign: "justify" }}>
为了便于演示，我们在终端中输入"tell me a story."，让 DeepSeek 为我们生成一个短故事。由于模型生成结果的随机性，我们获得的结果通常不会相同。我们可以根据模型生成 token 的速度来衡量设备推理的性能。（如视频中所示，使用 eval rate 指标）
</div>

:::note
如果您也想在您的 Jetson 设备上部署 Ollama，请参考[此教程](https://www.jetson-ai-lab.com/tutorial_ollama.html)了解如何在 Nvidia Jetson 上快速部署。
:::

## AI 视频处理

<div style={{ textAlign: "justify" }}>
在本节中，我们在两台设备上部署了目标检测模型 YOLOv11，并比较了它们在处理视频输入时的性能差异。结果表明，reComputer Super 每秒能够处理的图像数量大约是 reComputer Classic 的 2.37 倍。
</div>

:::info
参考[此仓库](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11)可以像我们一样在您的设备上部署 YOLOv11。
部署此模型的主要步骤如下：

**步骤 1.** 克隆此 [GitHub 仓库](https://github.com/wang-xinyu/tensorrtx/tree/master)。

**步骤 2.** 从 [ultralytics](https://github.com/ultralytics/ultralytics) 下载预训练权重文件 yolo11n.pt。

**步骤 3.** 按照[此仓库](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11)编译模型并运行推理。

**步骤 4.** 我们参考[此仓库](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11)中的 yolo11_det_trt.py 脚本来运行推理。
:::

<div class="video-container">
<iframe width="682" height="480" src="https://www.youtube.com/embed/ELbltFieez4" title="Yolo Inference on reComputer Classic and reComputer Super" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
终端中显示的平均 FPS 反映了模型的纯推理速度，直接表明了设备计算能力的差异，因此 reComputer Super 显示出明显更高的 FPS。然而，显示窗口左上角显示的实时 FPS 代表整个处理管道的帧率，包括图像捕获、预处理、推理、后处理和显示。此 FPS 受多种因素影响，如相机帧率、显示刷新率和程序帧率限制，导致两台设备显示的 FPS 相似，掩盖了推理性能的差异。因此，应该基于终端输出的平均推理 FPS 来评估设备性能，而不是仅仅依赖实时显示的 FPS。
:::

## 参考资料

- https://www.jetson-ai-lab.com/tutorial_ollama.html
- https://www.deepseek.com/
- https://wiki.seeedstudio.com/deploy_deepseek_on_jetson/
- https://www.seeedstudio.com/edge-ai/generative-ai
- https://github.com/ultralytics/ultralytics
- https://github.com/wang-xinyu/tensorrtx?tab=readme-ov-file

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
