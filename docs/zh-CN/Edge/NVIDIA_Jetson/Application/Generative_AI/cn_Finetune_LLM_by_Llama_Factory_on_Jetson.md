---
description: 在 reComputer 上部署 Riva 和 Llama2
title: 使用 Llama-Factory 进行微调
keywords:
- reComputer
- LLM
- Chatbot
- Finetune
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Finetune_LLM_on_Jetson
last_update:
  date: 07/03/2024
  author: Youjiang
---


# 自定义本地 LLM：在 Jetson 上使用 Llama-Factory 微调 LLM


## 介绍

🚀在 Jetson 上使用 Llama-Factory 微调 LLM！现在您可以定制一个符合您需求的自定义私有本地 LLM。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run.gif" />
</div>

Llama-Factory 提供了一个高度便捷的大语言模型微调工具，支持常见的大语言模型、数据集和微调方法。通过这个平台，我们可以轻松定制私有大语言模型。

在本教程中，我们将学习如何在 Nvidia Jetson 上部署 Llama-Factory，并使用 Llama-Factory 训练一个支持中文问答的大语言模型。


## 先决条件

- 具有超过 16GB 内存的 Jetson 设备。
- 显示器、鼠标、键盘和网络。（非必需）

:::note
我们已经在 reComputer [Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 和 [AGX Orin 64GB](https://www.seeedstudio.com/NVIDIArJetson-AGX-Orintm-64GB-Developer-Kit-p-5641.html) 开发套件上测试了本教程的可行性。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/agx_orin.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 开始使用

### 硬件连接

1. 将以太网线连接到 reComputer（由 Jetson 驱动）。
2. 将鼠标、键盘和显示器连接到 reComputer。
3. 开启 reComputer 电源。

<!-- Need a GIF here! -->

### 安装 Jetson-Examples

:::note
由 Seeed Studio 开发的 [jetson-examples](https://github.com/Seeed-Projects/jetson-examples) 提供了无缝的一行命令部署，可在 NVIDIA Jetson 平台上运行视觉 AI 和生成式 AI 模型。
:::

要安装该包，请在 Jetson 中打开终端并运行：

```bash
pip3 install jetson-examples
sudo reboot
```
### 在 Jetson 上安装和运行 Llama-Factory

使用一行命令部署 jetson-examples 的 `Llama-Factory`：

```bash
reComputer run llama-factory
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run_llama_factory.png" />
</div>

然后我们可以打开网页浏览器并访问该地址来打开 WebUI：
```bash
# http://<jetson-ip>:7860
http://127.0.0.1:7860
```

### 开始训练

在这里，我们使用 `alpaca_zh` 数据集来微调 `Phi-1.5` 模型，使其具备中文对话能力。因此，在 web UI 中，我们只配置训练的 `Model name` 和 `Dataset`，其他训练参数保持默认设置。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run_train.png" />
</div>

最后，点击 `start` 按钮开始训练。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/training.png" />
</div>

:::note
训练过程大约需要 18 小时。
:::

完成微调后，您可以在保存目录中找到微调后的模型。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/train_result.png" />
</div>

### 测试微调后的模型


最后，我们可以使用 Llama-Factory 和微调后的模型来测试它是否确实获得了中文对话能力。具体步骤如下。


**步骤1.** 通过 Llama-Factory WebUI 加载微调后的模型。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/load_model.png" />
</div>

**步骤2.** 在 `Input` 文本框中输入中文提示，点击 `Submit` 按钮，并在 `Chatbot` 文本框中查看大语言模型的输出结果。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/test_model.png" />
</div>

从测试结果可以看出，微调后的模型已经具备了用中文与人类对话的能力。如果您希望您的模型具有更高级的能力，请尝试使用更多样化的微调数据集来训练您的模型！


### 演示

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/OaGEn7pVve0" title="Finetune LLM by Llama-Factory on Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## 参考资料
- [https://github.com/hiyouga/LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory)
- [https://github.com/dusty-nv/jetson-containers](
https://github.com/dusty-nv/jetson-containers/tree/cb6c847f88df221e705397a1ee98424c2e893243/packages/llm/text-generation-inference)
- [https://github.com/Seeed-Projects/jetson-examples](https://github.com/Seeed-Projects/jetson-examples/tree/main/reComputer/scripts/llama-factory)

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