---
description: 本wiki将演示如何在Jetson设备上使用ollama和AnythingLLM搭建本地知识库。通过利用大型语言模型的强大功能，我们旨在提高工作效率。
title: 本地AI助手
keywords:
- reComputer
- LLM
- Chatbot
- ollama
- AnythingLLM
- llama
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/local_ai_ssistant
last_update:
  date: 07/30/2024
  author: Youjiang
---


# 本地AI助手：在Jetson上部署Ollama和AnytingLLM

## 介绍

本地AI助手是一个运行在本地硬件和软件上的人工智能应用程序，提供智能交互和数据处理功能。它独立于云服务运行，在保护用户隐私的同时提供快速响应时间和高度定制化。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/ai-assistant.png" />
</div>

在本wiki中，我们将演示如何在Jetson设备上使用[ollama](https://ollama.com/)和[AnythingLLM](https://anythingllm.com/)搭建本地知识库。通过利用大型语言模型的强大功能，我们旨在提高工作效率。

## 先决条件

- 具有超过16GB内存的Jetson设备。
- 硬件设备需要预先刷入jetpack [5.1.1](https://wiki.seeedstudio.com/cn/reComputer_Intro/)操作系统。

:::note
在本wiki中，我们将使用[NVIDIA® Jetson AGX Orin™ 64GB开发者套件](https://www.seeedstudio.com/NVIDIArJetson-AGX-Orintm-64GB-Developer-Kit-p-5641.html)完成以下任务，但您也可以尝试使用其他Jetson设备。
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/AGX-Orin.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/AGX-Orin-32GB-H01-Kit-p-5569.html?queryID=a07376a957f072a4f755e1832fa0e544&objectID=5569&indexName=bazaar_retailer_products" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 开始使用

### 硬件连接

- 将Jetson设备连接到网络、鼠标、键盘和显示器。

:::note
当然，您也可以通过本地网络的SSH远程访问Jetson设备。
:::

### 安装和运行Ollama

在这里，我们强烈推荐使用[jetson-examples](https://github.com/Seeed-Projects/jetson-examples)在您的Jetson设备上快速部署Ollama。

**步骤1.** 在jetson设备上打开终端并运行以下命令来安装`jetson-examples`：

```bash
sudo apt install python3-pip
pip3 install jetson-examples
```

**步骤2.** 要使用单个命令在 Jetson 设备上部署 ollama，我们可以运行：

```bash
reComputer run ollama
```

**步骤3.** 使用 Ollama 下载 Llama3 large model:

```bash
ollama run llama3
```

:::info
请保持此终端处于活动状态。
:::

### 安装并运行 AnythingLLM

我们可以使用[本地 Docker 设置](https://docs.anythingllm.com/installation/self-hosted/local-docker#recommend-way-to-run-dockerized-anythingllm)方便地安装 AnythingLLM。

**步骤1.** 在 Jetson 上运行 AnythingLLM。

重新打开终端并输入以下命令：

```bash
docker pull mintplexlabs/anythingllm

export STORAGE_LOCATION=$HOME/anythingllm 
mkdir -p $STORAGE_LOCATION 
touch "$STORAGE_LOCATION/.env" 
docker run -d -p 3001:3001 --cap-add SYS_ADMIN \
    -v ${STORAGE_LOCATION}:/app/server/storage \
    -v ${STORAGE_LOCATION}/.env:/app/server/.env \
    -e STORAGE_DIR="/app/server/storage" \
    mintplexlabs/anythingllm
```

**步骤2.** 配置您自己的本地知识库。

要访问完整的应用程序，请在浏览器中访问 `http://<jetson-ip>:3001`。

:::note
您可以在 Jetson 终端中输入 `ifconfig` 命令来查找其 IP 地址。
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/anythingllm-init.png" />
</div>

按照屏幕提示完成 AnythingLLM 的配置。

:::danger
请注意，在 `LLM Perference` 配置页面上，我们应该选择 Ollama 的 Llama 3.1 大语言模型。
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/select-ollama.png" />
</div>

最后，导入必要的文档。大语言模型将基于导入的文档回答问题。

`import` --> `click to upload or drag and drop` --> `select document` --> `move to Workspace` --> `save and embed`

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/inport-doc.png" />
</div>

至此，您已成功设置了自己的本地知识库。

:::note
有关更深入的配置教程，请参考[此链接](https://docs.anythingllm.com/)。
:::

### 让我们运行它

在对话框中输入问题，大语言模型将基于知识库提供答案。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/test.png" />
</div>

<details>

<summary> story1.txt </summary>

```txt
Once upon a time in a quaint village nestled between rolling hills, there was a young girl named Eliza who loved to explore the woods behind her home. The forest was a magical place, filled with tall trees that whispered secrets, streams that sang soft melodies, and flowers that seemed to glow under the moonlight.

One sunny morning, Eliza set out on one of her adventures, her heart brimming with excitement. As she wandered deeper into the forest, she discovered a hidden path she had never seen before. The path was lined with shimmering stones that sparkled like stars. Curious and intrigued, Eliza followed it.

After a short walk, the path led her to a magnificent clearing where a majestic oak tree stood in the center. At the base of the tree was a small, ornate door. It was covered in intricate carvings of animals and vines. Eliza, with her heart pounding with both excitement and nervousness, gently pushed the door open.

Inside, she found herself in a cozy, enchanted room. There were shelves lined with books and strange artifacts, and a warm fire crackling in a stone hearth. In the middle of the room, a wise old owl perched on a branch of a large, leafy plant.

The owl looked at Eliza with kind, knowing eyes. “Welcome, young traveler,” it hooted softly. “I am Oliver, the guardian of this magical realm. Few people find their way here. You must have a special heart.”

Eliza’s eyes widened in awe. “What is this place?” she asked.

“This is the Realm of Wonders,” Oliver explained. “It is a place where dreams come to life and where those with pure intentions can find their heart’s true desire.”

Eliza gazed around the room, her curiosity piqued. “What can I do here?”

Oliver smiled. “You can make a wish. But remember, wishes made here come with great responsibility. They have the power to change not just your life but the lives of those around you.”

Eliza thought long and hard. She remembered how her village had been struggling with drought and how her friends and family were suffering. With a determined look, she made her wish.

“I wish for rain to fall upon my village and bring life back to the land.”

Oliver nodded approvingly. “A selfless wish. It will be granted.”

The next morning, as Eliza returned to her village, dark clouds gathered in the sky, and a gentle rain began to fall. The villagers looked up in amazement as the parched earth drank in the life-giving water. The fields began to turn green, and the village flourished once more.

Eliza’s heart swelled with joy as she realized the impact of her wish. The Realm of Wonders had given her the chance to make a difference, and she learned that true magic comes from caring for others.

From that day on, Eliza continued to explore the woods, knowing that the true wonders of life were found in kindness and selflessness.

And so, the village thrived, and Eliza’s adventures became the stuff of legends, reminding everyone that magic, indeed, begins with a kind heart.
```

</details>

## 效果演示

在这里，我们使用配置好的本地个人助手来查询我们需要的信息。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/JjPfXNqhO1g" title="Local AI Assistant : Deploy Ollama and AnytingLLM on Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考资料

- https://ollama.com/library/llama3.1
- https://anythingllm.com/
- https://www.youtube.com/watch?v=4UFrVvy7VlA&t=4s

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
