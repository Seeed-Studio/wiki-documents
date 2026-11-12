---
description: "在 Orin NX 上对比 reComputer Super 与 Classic：在相同功耗模式下的 llama.cpp token 速率、视频解码和 TensorRT 推理表现。"
title: reComputer Super 与 Classic 下一代边缘推理 AI 性能对比
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
createdAt: '2025-06-09'
updatedAt: '2025-10-11'
url: https://wiki.seeedstudio.com/cn/recomputer_jetson_super_performance/
---


<div align="center">
  <img alt="reComputer board with the fan fitted next to the assembled unit used in this comparison" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super.png"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

## 介绍

<div style={{ textAlign: "justify" }}>
reComputer Super 系列为 reComputer Classic 带来强劲升级，在 AI 性能上最高可实现 1.7 倍提升，达到 157 TOPS。本 Wiki 对比了 reComputer Super 与 reComputer Classic 在 AI 文本生成和 AI 视频处理方面的性能差异。以 <a href="https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html" target="_blank">NVIDIA Jetson Orin NX 16GB 模组</a> 作为测试平台，可以清晰地看到 reComputer Super 相比 reComputer Classic 具有更出色的性能表现。
</div>

## AI 文本生成

<div style={{ textAlign: "justify" }}>
在本节中，我们使用 Ollama 加载 deepseek-r1:7b 模型，并对比该模型在不同设备上的推理速度。reComputer Super 在推理速度和 GPU 频率方面相较 reComputer Classic 有所提升。
</div>

:::info
部署此模型的主要步骤如下：

**步骤 1.** 安装 jetson-containers。

**步骤 2.** 进入 Docker 容器运行 Ollama 服务。

**步骤 3.** 从 Ollama 拉取 deepseek-r1:7b 模型。
:::

<div class="video-container">
<iframe width="682" height="480" src="https://www.youtube.com/embed/nD1w-odV-ZU" title="Deepseek Inference on reComputer Classic and reComputer Super" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<div style={{ textAlign: "justify" }}>
为了便于演示，我们在终端中输入 "tell me a story."，让 DeepSeek 为我们生成一个短故事。由于模型生成结果具有随机性，我们得到的结果通常不会完全相同，因此我们可以根据模型生成 token 的速度来衡量设备的推理性能。（如视频中所示，我们使用 eval rate 指标）
</div>

:::note
如果你也想在 Jetson 设备上部署 Ollama，请参考[本教程](https://www.jetson-ai-lab.com/tutorial_ollama.html)，了解如何在 Nvidia Jetson 上快速部署。
:::

## AI 视频处理

<div style={{ textAlign: "justify" }}>
在本节中，我们在两台设备上部署了目标检测模型 YOLOv11，并对比它们在处理视频输入时的性能差异。结果表明，reComputer Super 每秒可处理的图像数量约为 reComputer Classic 的 2.37 倍。
</div>

:::info
参考[此仓库](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11)即可像我们一样在你的设备上部署 YOLOv11。
部署此模型的主要步骤如下：

**步骤 1.** 克隆此 [GitHub 仓库](https://github.com/wang-xinyu/tensorrtx/tree/master)。

**步骤 2.** 从 [ultralytics](https://github.com/ultralytics/ultralytics) 下载预训练权重文件 yolo11n.pt。

**步骤 3.** 按照[此仓库](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11)中的说明编译模型并运行推理。

**步骤 4.** 我们参考[此仓库](https://github.com/wang-xinyu/tensorrtx/tree/master/yolo11)中的 yolo11_det_trt.py 脚本来运行推理。
:::

<div class="video-container">
<iframe width="682" height="480" src="https://www.youtube.com/embed/ELbltFieez4" title="Yolo Inference on reComputer Classic and reComputer Super" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::note
终端中显示的 Average FPS 反映的是模型纯推理速度，能够直接体现设备算力差异，因此 reComputer Super 显示出明显更高的 FPS。而显示窗口左上角实时显示的 FPS 则代表整个处理流水线的帧率，包括图像采集、预处理、推理、后处理和显示等环节。该 FPS 会受到摄像头帧率、显示刷新率以及程序帧率限制等多种因素影响，导致两台设备上显示的 FPS 相近，从而掩盖推理性能差异。因此，在评估设备性能时，应以终端输出的平均推理 FPS 为准，而不是仅依赖实时显示的 FPS。
:::

## 参考资料

- https://www.jetson-ai-lab.com/tutorial_ollama.html
- https://www.deepseek.com/
- https://wiki.seeedstudio.com/cn/deploy_deepseek_on_jetson/
- https://www.seeedstudio.com/edge-ai/generative-ai
- https://github.com/ultralytics/ultralytics
- https://github.com/wang-xinyu/tensorrtx?tab=readme-ov-file

## 相关资源

- [reComputer Super 硬件与接口使用](/cn/recomputer_jetson_super_hardware_interfaces_usage/)
- [为 reComputer Jetson 安装 PyTorch](/cn/install_torch_on_recomputer/)
- [使用 MTP 加速 Jetson 上的 llama.cpp](/cn/jetson/accelerate_llm_inference_mtp/)
- [reComputer Super 产品页面](https://www.seeedstudio.com/reComputer-Super-p-6617.html)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
