---
description: 从 Watcher 发送消息到 Node-RED
title: Watcher 到 Node-RED
keywords:
- watcher
- Node-Red
image: https://files.seeedstudio.com/wiki/watcher_getting_started/cover.png
slug: /cn/watcher_to_node_red
sidebar_position: 1
last_update:
  date: 06/28/2024
  author: Allen
---

# Watcher 到 Node-RED 快速入门

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/Ono_v759R0Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

[**Node-RED**](https://nodered.org/) 是一个编程工具，用于以新颖有趣的方式将硬件设备、API 和在线服务连接在一起。

它提供了一个基于浏览器的编辑器，使用调色板中的各种节点可以轻松地将流程连接在一起，并且可以一键部署到其运行时环境中。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/cover.png" style={{width:1000, height:'auto'}}/></div> -->

为了让我们的用户更容易地**将 Watcher 的数据连接到各种其他 PaaS 平台进行更深入的数据处理**。例如，从 Watcher 到 IFTTT、Telegram、Twilio 等。我们将制作一系列 **Watcher & Node-RED** 教程。

本教程是系列教程中的第一个，将指导您安装和使用 Node-RED，并调用 Watcher API 连接到 Node-RED。

## 第一部分：安装 Node.js®

要在本地安装 Node-RED，您需要一个[支持的 Node.js 版本](https://nodered.org/docs/faq/node-versions)。

从官方 [Node.js 主页](https://nodejs.org/en/)下载最新的 14.x LTS 版本的 Node.js。它会为您的系统提供最佳版本。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/1.png" /></div>

:::note
运行下载的 MSI 文件。安装 Node.js 需要本地管理员权限；如果您不是本地管理员，安装时会提示您输入管理员密码。安装时接受默认设置。安装完成后，关闭任何打开的命令提示符并重新打开，以确保获取新的环境变量。
:::
在安装 Node.js 时，如果您使用的是没有安装过任何编程环境的计算机，我们建议您在安装 Node.js 时勾选安装必要工具的选项，这将为您省去很多必要的麻烦。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/k1100-nodered/2.png" /></div>

安装 Node-RED 最简单的方法是使用 Node 的包管理工具 **npm**。但是，我们不建议使用 npm 1.x 安装 Node-RED，而是建议升级到最新的 **npm 2.x** 版本。

:::note
在 **Windows** 上（需要 Windows 10 及以上版本），使用 **Win+R** 快捷键并在弹出窗口中输入 `cmd` 来调出终端并执行以下命令。

如果您使用的是 **MacOS** 或 **Linux**，请在终端中执行以下命令，非 root 用户请在命令前添加 `sudo`。
:::

```sh
npm install -g npm@2.x
```

安装完成后，打开命令提示符并运行以下命令，以确保 Node.js 和 npm 已正确安装。

```sh
node --version && npm --version
```

你应该收到看起来类似这样的输出：

```sh
> v16.17.0
> 2.15.12
```

## 第二部分. 安装 Node-RED

将 Node-RED 作为全局模块安装会将命令 `node-red` 添加到您的系统路径中。在命令提示符下执行以下命令：

```sh
npm install -g --unsafe-perm node-red
```

如果 Node-RED 被安装为全局 npm 包，那么直接执行命令 node-red：

```sh
node-red
```

这将把 Node-RED 日志输出到终端。您必须保持终端打开以保持 Node-RED 运行。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/k1100-nodered/3.png" /></div>

这将允许您在 http://localhost:1880 上查看 Node-RED 编辑器。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/k1100-nodered/4.png" /></div>

## 第三部分：在 Watcher 中运行任务

告诉 Watcher 您希望它帮助您做什么。您只需要在输入框中输入一些命令。例如，**检测到人时通知我** 或 **如果有火灾请告诉我** 等。如果您想了解更多，[**请跳转到这里**](https://wiki.seeedstudio.com/cn/getting_started_with_watcher_task/)。

因此，当 Watcher 检测到火灾时，它将通过 SenseCraft APP 以及音频警报和闪烁的 RGB 灯通知您。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/svg10.svg" style={{width:600, height:'auto'}}/></div>

## 第四部分：Watcher 向 Node-RED 发送消息

我们提供两种方法将消息从 watcher 发送到 Node-RED：SenseCAP 节点和 HTTP 协议。您可以选择任何您喜欢的方法。

### 方法 1：使用 SenseCAP 节点

#### 步骤 1：获取 Watcher API 密钥

打开您的 SenseCraft APP 并按照以下步骤获取 **组织 ID** 和 **API 密钥**。我们稍后会使用它们。

<div class="table-center">
  <table align="center">
    <tr>
      <th>页面 1</th>
      <th>页面 2</th>
      <th>页面 3</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/first.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/1.svg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/2.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>页面 4</th>
      <th>页面 5</th>
      <th>页面 6</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/3.svg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/4.svg" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/5.svg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

#### 步骤 2. 安装 SenseCAP 节点

点击三条横线图标，然后点击 **Manage palette** 选项。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/1.png" style={{width:800, height:'auto'}}/></div>

点击 **Install** 选项，输入 **sensecap** 进行搜索，然后 **安装** 它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/2.png" style={{width:600, height:'auto'}}/></div>

将 **OpenStream** 和 **debug** 模块拖拽到工作区域，然后用线 **连接** 它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/3.png" style={{width:800, height:'auto'}}/></div>

**双击** OpenStram 模块，然后会打开一个侧边窗口。给它命名并创建一个新账户。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/4.png" style={{width:800, height:'auto'}}/></div>

为您的账户命名，并输入您刚才获得的 **Organization ID** 和 **API key**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/5.png" style={{width:800, height:'auto'}}/></div>

点击 **Done** 按钮以获取平台的所有消息，或者您可以选择您想要接收的特定消息。例如，如果您只想接收您的 Watcher 消息，您可以填入 **EUI** 代码，该代码可以在设备 **Setting** -> **About Device** 中找到，或者在 **步骤 6** 的消息中找到。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/6.png" style={{width:800, height:'auto'}}/></div>

点击 **Deploy** 按钮。这个按钮就像编译和运行按钮。无论您做什么更改，都需要点击这个按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/7.png" style={{width:800, height:'auto'}}/></div>

之后，您将看到一个连接标志，这意味着它按预期工作。当 Watcher 发送消息时，您将在 Node-RED 中接收到它们。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/9.png" style={{width:800, height:'auto'}}/></div>

### 方法 2：使用 HTTP 协议

#### 步骤 1. 开启 HTTP 块功能

当您运行任务时，点击 **Detail Configs** 按钮，然后开启 **HTTP Push Notification** 并点击 **Go Setup**。您需要填入 **您的计算机 IP 地址** 和 **Node-RED 访问端口**（默认端口是 1880）。然后点击 **Update Now** 和 **Run Task**。

<div class="table-center">
  <table align="center">
    <tr>
      <th>页面 1</th>
      <th>页面 2</th>
      <th>页面 3</th>
      <th>页面 4</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/26.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/27.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/28.png" style={{width:200, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/29.png" style={{width:200, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

#### 步骤 2. 在 Node-RED 中配置

首先，您需要在 Node-RED 中导入工作流。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/24.png" style={{width:600, height:'auto'}}/></div>

将以下代码粘贴到其中并点击 **Import** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/25.png" style={{width:600, height:'auto'}}/></div>

```
[
    {
        "id": "99b783856e77b41f",
        "type": "tab",
        "label": "Flow 2",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "2791b077ca7367c9",
        "type": "http in",
        "z": "99b783856e77b41f",
        "name": "",
        "url": "/v1/notification/event",
        "method": "post",
        "upload": false,
        "swaggerDoc": "",
        "x": 450,
        "y": 460,
        "wires": [
            [
                "5de4e51231d87d00"
            ]
        ]
    },
    {
        "id": "61c50a0666f83a50",
        "type": "http response",
        "z": "99b783856e77b41f",
        "name": "",
        "statusCode": "200",
        "headers": {},
        "x": 830,
        "y": 460,
        "wires": []
    },
    {
        "id": "5de4e51231d87d00",
        "type": "function",
        "z": "99b783856e77b41f",
        "name": "",
        "func": "// here to process data\n// for example, extract alarm info \n// msg.payload = {\n//     alertMsg: msg.payload.events.text\n// }\n msg.payload = {\n    code: 200,\n    msg:\"ok\",\n    data: msg.payload\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 660,
        "y": 460,
        "wires": [
            [
                "61c50a0666f83a50",
                "852490a1c300cd94"
            ]
        ]
    },
    {
        "id": "852490a1c300cd94",
        "type": "debug",
        "z": "99b783856e77b41f",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 840,
        "y": 520,
        "wires": []
    }
]
```

现在，当 watcher 检测到人员时，它会自动向 Node-RED 发送消息~

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/23.png" style={{width:800, height:'auto'}}/></div>

## 第 5 部分. 预览图像

如果您想预览来自 Watcher 的图像，您需要在 Node-RED 中安装一个库。

如果不需要，您可以忽略这部分。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n1.png" style={{width:800, height:'auto'}}/></div>

安装后，您可以在**输出部分**找到它，将其拖拽到您想要预览图像的位置并连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n3.png" style={{width:800, height:'auto'}}/></div>

这一步非常重要。您需要**双击图像预览节点**并**在此节点中填写 base64 url**。不要忘记**点击右上角的 Done 和 Deploy 按钮**。之后，当 Watcher 消息再次到来时，我们将预览图像~

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_nodered_setup/n2.png" style={{width:800, height:'auto'}}/></div>

恭喜！现在数据已成功从 Watcher 传输到 Node-RED。下一个 wiki 我们将引导您了解如何将数据从 Watcher 传输到其他平台，欢迎尝试~

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
