---
description: 从 Watcher 和 Node-RED 发送消息到 Telegram
title: Watcher 和 Node-RED 到 Telegram
keywords:
- watcher
- Telegram
image: https://files.seeedstudio.com/wiki/watcher_to_telegram_image/telhead.png
slug: /cn/watcher_node_red_to_telegram
last_update:
  date: 06/07/2024
  author: Allen
---

# Watcher 到 Telegram 快速入门

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/watcher_telegram.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 什么是 [Telegram](https://telegram.org/)

Telegram 是一款流行的消息应用程序，为用户和开发者提供了广泛的功能。凭借其开放的 API 和协议，开发者可以创建自定义的 Telegram 客户端、机器人，并将 Telegram 的服务集成到他们自己的应用程序中。Telegram 提供了一个安全可靠的实时通信平台，支持各种媒体类型、群聊和端到端加密。其基于云的基础设施确保了设备间的无缝同步，并允许轻松扩展。开发者可以利用 Telegram 的功能和工具来构建创新解决方案，并在他们的项目中增强用户体验。

## 如何访问 Telegram API

### 步骤 1. 获取机器人令牌

1. 首先您需要下载 Telegram 应用程序并进入 **BotFather** 页面。发送 **/newbot** 并根据提示为您的机器人**命名**。

2. 之后，**点击**第 2 页中的链接跳转到您的机器人（第 3 页），然后**向您的机器人发送一些内容**。记住要发送一些内容，否则您无法获取您的聊天 ID。

3. 另一个重要的事情是**保存您的令牌**，就是我在第 2 页中打马赛克的地方。我们稍后会用到它。

<div class="table-center">
  <table align="center">
    <tr>
      <th>第 1 页</th>
      <th>第 2 页</th>
      <th>第 3 页</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/10.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/11.png" style={{width:400, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/12.png" style={{width:400, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

### 步骤 2. 获取机器人聊天 ID

根据前面的步骤，当您创建机器人时，BotFather 会给您一些反馈。您会在反馈中找到**令牌**，格式类似于：**123456789:AoUJnnpoFlkkdfJbCXlo....** 然后使用您的令牌访问此链接以获取您的**聊天 ID**。

```python
#access this link using your Token
https://api.telegram.org/bot{Token}/getUpdates

#example
https://api.telegram.org/bot123456789:AoUJnnpoFlkkdfJbCXlo.../getUpdates
```

您将在下图中找到您的 **ChatId**。ChatId 看起来像这样：**7283028524**。**保存您的 Token 和 ChatId**，我们稍后会使用它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/1.png" style={{width:800, height:'auto'}}/></div>

## 在 Node-RED 中配置 Telegram 模块

### 步骤 3. 安装 Telegram 模块

按照下图安装 Telegram 模块。如果您还没有安装 Node-RED，[请参考这里](https://wiki.seeedstudio.com/cn/watcher_to_node_red/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/2.png" style={{width:500, height:'auto'}}/></div>

**搜索 telegram** 并安装第三个。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/3.png" style={{width:800, height:'auto'}}/></div>

### 步骤 4. 连接和配置模块

**拖拽** 这些模块到工作区并将它们连接在一起。如果您不知道如何配置 **OpenStream**，您仍然可以[参考此链接](https://wiki.seeedstudio.com/cn/watcher_to_node_red/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/4.png" style={{width:1000, height:'auto'}}/></div>

现在我们要配置 **function** 模块。双击它并将以下代码粘贴到其中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/5.png" style={{width:1000, height:'auto'}}/></div>

```javascript
msg.image_url = msg.payload.value[0].image_url;
msg.content = msg.payload.value[0].content;
msg.chatId = "7098248409";  // change to your Telegram Chat ID

// set payload to send photo
var photoPayload = {
    chatId: msg.chatId,
    type: "photo",
    content: msg.image_url
};

// set payload to send message
var messagePayload = {
    chatId: msg.chatId,
    type: "message",
    content: msg.content
};

// send photo
node.send({ payload: photoPayload });

// send message
node.send({ payload: messagePayload });
```

接下来，我们将配置**发送器**模块，按照下面的图片进行操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/6.png" style={{width:800, height:'auto'}}/></div>

在这里粘贴你的**机器人名称、Token、ChatId**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/7.png" style={{width:800, height:'auto'}}/></div>

另一个**发送器**的配置类似，只需按照下面的图片操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/14.png" style={{width:800, height:'auto'}}/></div>

## 发送信息到 Telegram

### 步骤 5. 在 Watcher 中运行任务

首先，你需要按照下面的视频在 Watcher 中运行一个任务。如果你想了解更多信息，[请点击这里](https://wiki.seeedstudio.com/cn/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 步骤 6. 发送消息和照片到 Telegram

当任务被触发时，你将收到来自 Watcher 的消息。在 Node-RED 和 Telegram 应用中都会收到。

<div class="table-center">
  <table align="center">
    <tr>
      <th>Node-RED</th>
      <th>Telegram</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/8.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_telegram_image/13.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

恭喜您成功将 Watcher 连接到 Telegram！您已经解锁了开发之旅中令人兴奋的无限可能。准备好探索和创建利用 Telegram 强大功能的创新应用程序吧。未来一片光明，我们迫不及待地想看到您接下来将构建什么！

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
