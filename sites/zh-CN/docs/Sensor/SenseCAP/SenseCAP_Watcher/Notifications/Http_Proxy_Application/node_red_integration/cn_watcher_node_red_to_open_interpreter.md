---
description: 从 Watcher 和 Node-RED 向 Open Interpreter 发送消息
title: Watcher 和 Node-RED 到 Open Interpreter
keywords:
- watcher
- Open Interpreter
image: https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/banner.png
slug: /cn/watcher_node_red_to_open_interpreter
last_update:
  date: 08/19/2024
  author: Allen
---

# Watcher 到 Open Interpreter 快速入门

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/banner.png" style={{width:1000, height:'auto'}}/></div>

## 第一部分：什么是 [Open Interpreter](https://docs.openinterpreter.com/getting-started/introduction)

Open Interpreter 是一个开源工具，通过启用自然语言命令来执行各种编程语言的代码，从而促进用户与计算机之间的交互。它充当桥梁，允许用户用简单的语言编写指令，然后解释器将其转换为可执行代码。这提高了生产力，使编程更加易于访问，特别是对于那些可能不熟悉编码语法的人。

## 第二部分：Node-RED 中的操作

在这一部分中，我们需要 4 个模块来完成工作。它们是 **SenseCap Watcher OpenSteam、function、http request 和 debug** 模块。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/6.png" style={{width:1000, height:'auto'}}/></div>

1. **SenseCap Watcher OpenSteam 模块**：从 Watcher 获取消息到 Node-RED。
2. **function 模块**：处理数据以获取您想要的消息。
3. **http request 模块**：通过 http 协议向 Open Interpreter 发送消息。
4. **debug 模块**：调试整个工作流程以检查一切是否正常。

我们将在以下步骤中向您展示如何配置这些模块。

### 步骤 1：配置 SenseCap Watcher OpenSteam 模块

首先，您需要按照下面的视频在 Watcher 中运行任务。如果您想了解更多信息，[请点击这里](https://wiki.seeedstudio.com/cn/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

如果您还不知道如何从 Watcher 向 Node_RED 发送消息，[请点击这里](https://wiki.seeedstudio.com/cn/watcher_to_node_red/)。

### 步骤 2：配置 function 模块

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/7.png" style={{width:800, height:'auto'}}/></div>

```javascript
msg.payload = {
    content: msg.payload.value[0].content,
    image_url: msg.payload.value[0].image_url
};
return msg;
```

### 步骤 3. 配置 http 请求模块

我们使用 POST 请求来确保安全性，并发送到端口 3000，稍后我们将使用 Open Interpreter 来持续监听端口 3000。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/8.png" style={{width:800, height:'auto'}}/></div>

### 步骤 4. 配置调试模块

按照以下图片进行选择。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/9.png" style={{width:800, height:'auto'}}/></div>

完成配置后，不要忘记**部署**它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/10.png" style={{width:1000, height:'auto'}}/></div>

## 第 3 部分. Open Interpreter 中的操作

:::tip
在我们继续之前，前提条件是您需要在计算机中拥有 Python 开发环境。

如果您还没有，[请点击这里参考。](https://phoenixnap.com/kb/how-to-install-python-3-windows)
:::

### 步骤 5. 安装 Open Interpreter

安装 Python 后，您可以通过 Python 轻松安装 Open Interpreter，只需一个命令。

```python
pip install open-interpreter
```

### 步骤 6. 启动 Open Interpreter

Interpreter 有两种模式，在线模式和本地模式。默认情况下，Interpreter 选择在线模式，使用 OpenAI ChatGPT gpt-4-turbo API Key。您也可以将其设置为本地模式，这意味着您需要下载模型在本地运行。

:::tip
我推荐使用在线模式，因为在线模式比本地模式更快更智能，而且本地模式经常会卡住。
:::

#### 在线模式

1. 在开始之前，我们需要一个 OpenAI API Key。[如果您是 OpenAI GPT-4 付费会员，可以点击这里](https://platform.openai.com/api-keys)获取一个。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/16.png" style={{width:1000, height:'auto'}}/></div>

2. 然后，我们输入 ```interpreter``` 这个命令来启动它，它会要求我们输入 API Key。之后，我们成功将模型设置为 gpt-4-turbo。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/2_1.png" style={{width:1000, height:'auto'}}/></div>

#### 本地模式

1. 在开始之前，我们需要下载一个模型在本地运行。我推荐使用 **Ollama**。[点击这里跳转。](https://ollama.com/) 您应该下载这个应用程序并安装它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/12.png" style={{width:1000, height:'auto'}}/></div>

2. 当您成功安装后，在您的 **PowerShell（或终端）** 中运行 ```ollama```，它会像下面的图片一样。然后，运行 ```ollama run llama3.1``` 来下载模型 **llama3.1** 并运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/15.png" style={{width:1000, height:'auto'}}/></div>

3. 如果您想尝试其他模型，[点击这里跳转。](https://ollama.com/library) 只需运行 ```ollama run xxx```。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/13.png" style={{width:1000, height:'auto'}}/></div>

4. 安装模型并成功运行后，我们可以继续。我们需要输入 ```interpreter -l``` 这个命令进入它，然后选择 **ollama** 和 **llama3.1**（您刚刚下载的模型）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/11.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 7. 运行命令

:::tip
我多次尝试在 Interpreter 中运行以下命令，但 Interpreter 的反应并不是每次都相同。

所以您需要根据 Interpreter 的反应与其交互。有时您需要重启它并重新尝试。
:::

这是我发送给 Open Interpreter 的自然语言命令。

```
i want you to keep listening computer port 3000 and extract the image_url and open it in browser.
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/2.png" style={{width:1000, height:'auto'}}/></div>

第一次运行时，Interpreter 说她的初始设置为了简单起见只支持 GET 请求，但我的请求是 POST（出于安全考虑），所以她无法支持，并建议我修改服务器来处理 POST 请求。我同意了，她会自动运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/3.png" style={{width:1000, height:'auto'}}/></div>

如你所见，代码运行成功，监听端口 3000。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/4.png" style={{width:1000, height:'auto'}}/></div>

现在，使用 Watcher 来检测你自己。图像将被捕获并自动在浏览器中打开。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/5.png" style={{width:1000, height:'auto'}}/></div>

恭喜你成功集成了 Watcher 和 Open Interpreter 应用程序！这一成就标志着你旅程中的重要一步，展现了你的奉献精神和技能。随着你的前进，你会发现更多令人着迷的概念和工具等待探索。拥抱前方的挑战和发现，享受这激动人心的冒险的每一刻！

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