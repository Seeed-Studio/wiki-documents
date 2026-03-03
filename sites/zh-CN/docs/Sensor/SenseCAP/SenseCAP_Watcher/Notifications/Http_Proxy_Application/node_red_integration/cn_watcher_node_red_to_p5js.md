---
description: 从 Watcher & Node-RED 发送消息到 p5js
title: Watcher & Node-RED 到 P5JS
keywords:
- watcher
- p5js
image: https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/headpic.png
slug: /cn/watcher_node_red_to_p5js
last_update:
  date: 08/12/2024
  author: Allen
---

# Watcher & Node-RED 到 p5.js 快速入门

<div class="table-center">
<iframe width="800" height="450" src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/p5js_video.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 什么是 [p5.js](https://p5js.org/)

p5.js 是一个 JavaScript 库，让艺术家和设计师能够轻松进行编程。它提供了一种简单的方式来创建图形、动画和交互式应用程序，使用简洁的语法。凭借在画布上绘图、处理用户输入和支持多媒体等功能，p5.js 非常适合创意编程项目、教育目的和数字艺术。其活跃的社区和丰富的资源帮助各种技能水平的用户快速入门。

## Node-RED 配置

### 步骤 1. 在 Watcher 中运行任务

首先，您需要按照下面的视频在 Watcher 中运行一个任务。如果您想了解更多信息，[请点击这里](https://wiki.seeedstudio.com/cn/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### 步骤 2. 配置

您需要配置 4 个模块：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/1.png" style={{width:800, height:'auto'}}/></div>

1. **OpenStream：** 从 Watcher 获取数据到 Node-RED。[详细信息请点击这里](https://wiki.seeedstudio.com/cn/watcher_to_node_red/)。

2. **function：** 处理来自 Watcher 的数据。**双击** function 模块并将以下代码粘贴到其中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/2.png" style={{width:800, height:'auto'}}/></div>

```javascript
msg.payload = {
    content: msg.payload.value[0].content,
    image_url: msg.payload.value[0].image_url
};
return msg;
```

3. **http request:** 向**服务器**发送一个<span id="post">POST请求</span>，然后发送到p5.js。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/3.png" style={{width:800, height:'auto'}}/></div>

4. **debug:** 查看输出信息，用于调试。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/4.png" style={{width:600, height:'auto'}}/></div>

### 步骤3.部署

完成配置后，不要忘记**部署**它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/5.png" style={{width:800, height:'auto'}}/></div>

## 构建服务器

### 步骤4.下载服务器代码

[请点击此链接](https://github.com/Seeed-Projects/SenseCAP_Watcher_WebSocket_P5js)下载完整的项目代码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/7.png" style={{width:1000, height:'auto'}}/></div>

### 步骤5.运行服务器

在运行服务器之前，您应该先安装一些包。 

```npm install express body-parser cors ws```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/14.png" style={{width:600, height:'auto'}}/></div>

解压包并进入其中，然后运行 ```node server.js``` 来启动服务器。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/8.png" style={{width:800, height:'auto'}}/></div>

现在服务器正在监听端口 3000，因此来自 [Node-RED](#post) 的消息将被发送到此服务器，然后传递给 p5.js。

## VScode 配置

### 步骤 6. 安装扩展

您需要安装 2 个扩展，分别是 **Live Server** 和 **p5.vscode**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/6.png" style={{width:600, height:'auto'}}/></div>

### 步骤 7. 打开项目

打开您刚刚下载的项目。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/12.png" style={{width:600, height:'auto'}}/></div>

打开后的结构如下图所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/13.png" style={{width:600, height:'auto'}}/></div>

### 步骤 7. 运行项目

打开 **sketch.js** 并点击 **Go Live** 按钮，这将在默认浏览器中本地运行项目。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/9.png" style={{width:1000, height:'auto'}}/></div>

效果如下图所示，此服务运行在端口 5500 上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/10.png" style={{width:1000, height:'auto'}}/></div>

当检测到人员时，它将如下所示。

:::tip
您需要保持 Node-RED 和 server.js 运行
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_p5js_image/11.png" style={{width:1000, height:'auto'}}/></div>

恭喜您成功完成了从 Watcher 到 p5.js 的旅程！您已经获得了宝贵的技能，还有许多令人兴奋的功能等待您去探索。继续实验并享受前方的创意可能性！

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