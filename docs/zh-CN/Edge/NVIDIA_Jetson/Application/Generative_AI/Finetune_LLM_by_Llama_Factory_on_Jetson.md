---
description: 自定义本地LLM：在Jetson上通过Llama-Factory微调LLM
title: 自定义本地LLM：在Jetson上通过Llama-Factory微调LLM
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


# 自定义本地LLM：在Jetson上通过Llama-Factory微调LLM


## 介绍

🚀通过Llama-Factory在Jetson上微调LLM！现在您可以定制一个符合您需求的私有本地LLM. 

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run.gif" />
</div>

Llama-Factory提供了一个非常方便的大型语言模型微调工具，支持常见的大型语言模型、数据集和微调方法。 通过这个平台，我们可以轻松定制私有大型语言模型。

在本资料中，我们将学习如何在Nvidia Jetson上部署Llama-Factory，并使用Llama-Factory训练一个支持中文问答的大型语言模型。


## 前置条件

- 拥有超过16GB内存的Jetson设备.
- 显示器、鼠标、键盘和网络.（非必需）

:::标注
我们已经在reComputer上测试了本篇资料的可行性 [Orin NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) 和 [AGX Orin 64GB](https://www.seeedstudio.com/NVIDIArJetson-AGX-Orintm-64GB-Developer-Kit-p-5641.html) 开发套件.
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/agx_orin.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products">
      <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    </a>
</div>

## 开始

### 硬件连接

1. 将以Jetson为动力的reComputer连接以太网电缆。
2. 将鼠标、键盘和显示器连接到reComputer。
3. 打开reComputer电源。

<!-- Need a GIF here! -->

### 安装Jetson-Examples

:::标注

 由Seeed Studio提供的[jetson-examples](https://github.com/Seeed-Projects/jetson-examples) 无缝的单线命令部署，可在英伟达 Jetson 平台上运行视觉 AI 和生成 AI 模型。

:::

要安装该软件包，请在Jetson中打开终端并运行：

```bash
pip3 install jetson-examples
sudo reboot
```

### 在Jetson上安装并运行Llama-Factory

部署 `Llama-Factory` 通过jetson-examples一行命令:

```bash
reComputer run llama-factory
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run_llama_factory.png" />
</div>

然后我们可以打开一个网页浏览器，访问该地址以打开WebUI：
```bash
# http://<jetson-ip>:7860
http://127.0.0.1:7860
```

###  开始训练

我们使用 `alpaca_zh` 数据集来微调 `Phi-1.5` 模型，使其具备中文对话能力。 因此，在网页UI中，我们只需配置训练 `Model name` 和 `Dataset`，保持其他训练参数为默认值。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/run_train.png" />
</div>

最后，点击 `start` 按钮以启动训练。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/training.png" />
</div>

:::note
训练过程大约需要18小时。
:::

完成微调后，您可以在保存目录中找到微调后的模型.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/train_result.png" />
</div>

### 测试微调后的模型.


最后，我们可以使用Llama-Factory与微调后的模型测试它是否确实具备中文对话能力。 
具体步骤如下。


**步骤1.** 通过Llama-Factory WebUI加载微调后的模型.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/load_model.png" />
</div>

**步骤2.** 在 `Input` 文本框中输入中文提示，点击 `Submit` 按钮，并检查大型语言模型在 `Chatbot` 文本框中的输出结果.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Llama-Factory/test_model.png" />
</div>

从测试结果来看，我们可以看到微调后的模型已经具备用中文与人对话的能力。如果您希望您的模型具备更高级的能力，请尝试使用更丰富的微调数据集来训练您的模型！


### 演示

<div align="center">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/OaGEn7pVve0" title="Finetune LLM by Llama-Factory on Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


### 参考文档
- [https://github.com/hiyouga/LLaMA-Factory](https://github.com/hiyouga/LLaMA-Factory)
- [https://github.com/dusty-nv/jetson-containers](
https://github.com/dusty-nv/jetson-containers/tree/cb6c847f88df221e705397a1ee98424c2e893243/packages/llm/text-generation-inference)
- [https://github.com/Seeed-Projects/jetson-examples](https://github.com/Seeed-Projects/jetson-examples/tree/main/reComputer/scripts/llama-factory)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们的产品时体验尽可能顺畅。 我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>