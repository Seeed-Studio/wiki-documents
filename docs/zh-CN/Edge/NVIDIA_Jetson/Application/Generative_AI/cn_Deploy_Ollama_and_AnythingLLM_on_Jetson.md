---
description: 本文档将演示如何在 Jetson 设备上使用 Ollama 和 AnythingLLM 设置本地知识库。通过利用大型语言模型的强大功能，我们旨在提高工作效率。
title: 本地 AI 助手
keywords:
- reComputer
- LLM
- 聊天机器人
- Ollama
- AnythingLLM
- Llama
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/local_ai_ssistant
last_update:
  date: 07/30/2024
  author: Youjiang
---

# 本地 AI 助手：在 Jetson 上部署 Ollama 和 AnythingLLM

## 简介

本地 AI 助手是一种运行在本地硬件和软件上的人工智能应用程序，提供智能交互和数据处理能力。它独立于云服务运行，保护用户隐私，同时提供快速响应和高度定制化的服务。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/ai-assistant.png" />
</div>

在本文档中，我们将演示如何在 Jetson 设备上使用 [Ollama](https://ollama.com/) 和 [AnythingLLM](https://anythingllm.com/) 设置本地知识库。通过利用大型语言模型的强大功能，我们旨在提高工作效率。

## 前置条件

- 具有 16GB 以上内存的 Jetson 设备。
- 硬件设备需要预先刷入 Jetpack [5.1.1](https://wiki.seeedstudio.com/cn/reComputer_Intro/) 操作系统。

:::note
在本文档中，我们将使用 [NVIDIA® Jetson AGX Orin™ 64GB 开发者套件](https://www.seeedstudio.com/NVIDIArJetson-AGX-Orintm-64GB-Developer-Kit-p-5641.html) 完成以下任务，但您也可以尝试使用其他 Jetson 设备。
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

## 快速开始

### 硬件连接
- 将 Jetson 设备连接到网络、鼠标、键盘和显示器。

:::note
当然，您也可以通过本地网络使用 SSH 远程访问 Jetson 设备。
:::

### 安装并运行 Ollama

在这里，我们强烈推荐使用 [jetson-examples](https://github.com/Seeed-Projects/jetson-examples) 快速在 Jetson 设备上部署 Ollama。

**步骤1.** 在 Jetson 设备上打开终端并运行以下命令安装 `jetson-examples`：

```bash
sudo apt install python3-pip
pip3 install jetson-examples
```

**步骤2.** 要在 Jetson 设备上通过一条命令部署 Ollama，可以运行：

```bash
reComputer run ollama
```

**步骤3.** 使用 Ollama 下载 Llama3 大型模型：

```bash
ollama run llama3
```

:::info
请保持此终端处于活动状态。
:::

### 安装并运行 AnythingLLM

我们可以使用 [本地 Docker 设置](https://docs.anythingllm.com/installation/self-hosted/local-docker#recommend-way-to-run-dockerized-anythingllm) 方便地安装 AnythingLLM。

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

在浏览器中访问 `http://<jetson-ip>:3001` 以访问完整应用程序。

:::note
您可以在 Jetson 终端中输入 `ifconfig` 命令以查找其 IP 地址。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/anythingllm-init.png" />
</div>

按照屏幕上的提示完成 AnythingLLM 的配置。

:::danger
请注意，在 `LLM Perference` 配置页面上，我们应选择 Ollama 的 Llama 3.1 大型语言模型。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/select-ollama.png" />
</div>

最后，导入必要的文档。大型语言模型随后将根据导入的文档回答问题。

`导入` --> `点击上传或拖放` --> `选择文档` --> `移动到工作区` --> `保存并嵌入`

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/inport-doc.png" />
</div>

至此，您已成功设置自己的本地知识库。

:::note
有关更深入的配置教程，请参考[此链接](https://docs.anythingllm.com/)。
:::

### 运行测试

在对话框中输入问题，大型语言模型将根据知识库提供答案。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer/Application/local-ai-assistant/test.png" />
</div>

<details>

<summary> story1.txt </summary>

```txt
从前，在一个坐落于连绵山丘之间的宁静村庄里，有一个名叫 Eliza 的小女孩，她喜欢探索家后面的树林。那片森林是一个神奇的地方，长满了高大的树木，树叶沙沙作响，仿佛在低语秘密；溪流轻声吟唱，花朵在月光下仿佛在发光。

一个阳光明媚的早晨，Eliza 开始了一次冒险，她的心中充满了兴奋。当她走进森林深处时，她发现了一条以前从未见过的隐藏小路。这条小路两旁布满了像星星一样闪闪发光的石头。出于好奇，Eliza 顺着小路走了下去。

走了一小段路后，小路把她带到了一片壮丽的空地，中央矗立着一棵雄伟的橡树。树底部有一扇小巧而精致的门，上面雕刻着复杂的动物和藤蔓图案。Eliza 心跳加速，既兴奋又紧张，她轻轻推开了门。

门内，她发现自己置身于一个温馨而神奇的房间。房间里有书架，上面摆满了书籍和奇怪的物品，石头壁炉里燃烧着温暖的火焰。房间中央，一只睿智的老猫头鹰栖息在一株大叶植物的枝干上。

猫头鹰用慈爱而洞悉一切的眼神看着 Eliza。“欢迎你，年轻的旅行者，”它轻声地咕咕叫道。“我是 Oliver，这片神奇领域的守护者。很少有人能找到这里。你一定有一颗特别的心。”

Eliza 睁大了眼睛，充满敬畏地问：“这里是什么地方？”

“这是奇迹之境，”Oliver 解释道。“这是一个梦想成真的地方，那些怀有纯洁意图的人可以在这里找到他们内心真正的渴望。”

Eliza 环顾四周，充满了好奇。“我在这里能做什么？”

Oliver 微笑着说：“你可以许一个愿望。但请记住，这里的愿望伴随着巨大的责任。它们不仅能改变你的生活，还能改变周围人的生活。”

Eliza 深思熟虑了一会儿。她想起了她的村庄正在遭受干旱，她的朋友和家人都在受苦。带着坚定的目光，她许下了愿望。

“我希望雨水降临到我的村庄，为土地带来生机。”

Oliver 赞许地点了点头。“一个无私的愿望。它将会实现。”

第二天早晨，当 Eliza 回到村庄时，天空聚集了乌云，温柔的雨水开始降落。村民们惊讶地抬头看着干涸的土地吸收着生命的水分。田野开始变绿，村庄再次繁荣起来。

Eliza 的心中充满了喜悦，她意识到她的愿望带来的影响。奇迹之境给了她一个机会去改变，她明白了真正的魔法来自于关爱他人。

从那天起，Eliza 继续探索树林，知道生活中真正的奇迹源于善良和无私。

于是，村庄繁荣昌盛，Eliza 的冒险故事成为了传奇，提醒着每个人，魔法确实始于一颗善良的心。
```

</details>



## 效果演示

在这里，我们使用配置好的本地个人助手来查询我们需要的信息。

<div align="center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/JjPfXNqhO1g" title="本地 AI 助手：在 Jetson 上部署 Ollama 和 AnythingLLM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考资料
- https://ollama.com/library/llama3.1
- https://anythingllm.com/
- https://www.youtube.com/watch?v=4UFrVvy7VlA&t=4s


## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>