---
description: 从 Watcher & Node-RED 发送消息到 IFTTT
title: Watcher & Node-RED 到 IFTTT
keywords:
- watcher
- IFTTT
image: https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/ifttthead.png
slug: /cn/watcher_node_red_to_ifttt
last_update:
  date: 06/28/2024
  author: Allen
---

# Watcher 到 IFTTT 快速入门

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/watcher_ifttt.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 第一部分. 什么是 [IFTTT (If This Then That)](https://ifttt.com/)

IFTTT 是一个基于网络的服务，允许开发者在各种应用程序、设备和服务之间创建自动化和集成，而无需复杂的编程。它使用户能够定义简单的条件语句，称为"小程序"，根据特定事件触发操作。它提供了用户友好的界面和庞大的预构建小程序库，使开发者能够高效地创建强大的自动化和集成。

## 第二部分. 如何配置 IFTTT

### 步骤 1. 配置 Webhooks

首先，我们需要**创建**一个 IFTTT 小程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/1.png" style={{width:1000, height:'auto'}}/></div>

我们需要**添加**一个触发器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/2.png" style={{width:500, height:'auto'}}/></div>

搜索 **Webhooks** 并点击该服务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/3.png" style={{width:500, height:'auto'}}/></div>

您将看到 Webhooks 触发器的简要介绍，我们将选择第二个。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/4.png" style={{width:500, height:'auto'}}/></div>

为您的触发器命名并创建它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/5.png" style={{width:500, height:'auto'}}/></div>

### 步骤 2. 配置邮件

当触发器触发时，我们需要执行操作。所以这里是您想要执行的操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/6.png" style={{width:500, height:'auto'}}/></div>

我们将在触发器触发时通过 Gmail 发送邮件。当然，您可以使用数百万种服务。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/7.png" style={{width:800, height:'auto'}}/></div>

选择 Gmail 账户并填入您想要发送到的邮件地址。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/8.png" style={{width:600, height:'auto'}}/></div>

根据您的需要自定义**主题**和**正文**，或使用默认设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/9.png" style={{width:600, height:'auto'}}/></div>

点击**继续**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/11.png" style={{width:600, height:'auto'}}/></div>

### 步骤 3. 完成小程序

您可以编辑您的**小程序标题**或保持默认，然后点击**完成**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/12.png" style={{width:600, height:'auto'}}/></div>

完成后，您可以保存此链接，因为我们稍后会使用它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/13.png" style={{width:600, height:'auto'}}/></div>

## 第三部分. 在 Node-RED 中访问 IFTTT

### 步骤 4. Watcher 消息发送到 Node-RED

将这些模块拖拽到工作区并将它们连接在一起。如果您还不知道如何从 watcher 发送消息到 Node-RED，[请点击这里](https://wiki.seeedstudio.com/cn/watcher_to_node_red/)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/20.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 5. 处理您想要发送到 IFTTT 的消息

双击 **function** 模块并编写一些代码来获取 **value1** 和 **value2**，也许还有 **value3**。这些值将被发送到 IFTTT。

```javascript
var content = msg.payload.value[0].content;
var image_url = msg.payload.value[0].image_url;

msg.payload = {
    value1: content,
    value2: image_url,
};
return msg;
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/21.png" style={{width:1000, height:'auto'}}/></div>

双击 **http request** 模块，选择 **POST** 方法并**粘贴您刚从 IFTTT 复制的 URL**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/22.png" style={{width:1000, height:'auto'}}/></div>

完成后，不要忘记**部署**它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/23.png" style={{width:800, height:'auto'}}/></div>

## 第四部分. 通过 IFTTT 发送消息

### 步骤 6. 向 Watcher 发送任务

首先，您需要按照下面的视频在 Watcher 中运行任务。如果您想了解更多信息，[请点击这里](https://wiki.seeedstudio.com/cn/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 步骤 7. 在 IFTTT 和手机中查看这些消息

打开 **My Applets** 并点击您之前创建的小程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/14.png" style={{width:1000, height:'auto'}}/></div>

向下滚动页面并点击 **View activity** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/15.png" style={{width:800, height:'auto'}}/></div>

继续向下滚动并点击这两个按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/16.png" style={{width:800, height:'auto'}}/></div>

然后您将看到 Watcher 发送的这些消息以及您的电子邮件。

<div class="table-center">
  <table align="center">
    <tr>
      <th>IFTTT 消息</th>
      <th>电子邮件消息</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/16_1.png" style={{width:1000, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_ifttt_image/wm.png" style={{width:320, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

恭喜您完成了 Watcher 到 IFTTT 邮件演示！这只是您使用 IFTTT 旅程的开始。还有无数的应用程序和集成等待您去发现。继续探索、学习和自动化，让您的生活更加高效和富有成效。IFTTT 的可能性是无限的，所以尽情享受和愉快地实验吧！

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
