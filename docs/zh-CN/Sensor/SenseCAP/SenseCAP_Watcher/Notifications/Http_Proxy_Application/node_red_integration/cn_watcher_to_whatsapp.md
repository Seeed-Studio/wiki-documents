---
description: 从 Watcher 和 Node-RED 发送数据到 WhatsApp
title: Watcher 和 Node-RED 到 WhatsApp
keywords:
- Watcher
- WhatsApp
- Node-RED
image: https://files.seeedstudio.com/wiki/Watcher_WhatsApp/watcher_whatsapp.png
slug: /cn/watcher_node_red_to_whatsapp
last_update:
  date: 07/25/2024
  author: Vincent
---

# Watcher 到 WhatsApp 快速入门

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/watcher_whatsapp.png" style={{width:1000, height:'auto'}}/></div>

[**WhatsApp**](https://web.whatsapp.com/) 是 Meta 旗下的即时通讯和网络电话服务。它允许用户发送文本、语音和视频消息，进行语音和视频通话，以及分享图片、文档、位置和其他内容。

本教程将指导您将 Watcher API 与 Node-RED 集成，以便无缝地将数据从 Watcher 发送到 WhatsApp。这种集成提供了一种简单高效的方法来**接收通知，并为进一步的应用和集成打开了大门**。

## 第一部分：在 Node-RED 中设置 Watcher

### 步骤 1：设置 Node-RED

首先，您需要按照下面的视频在 Watcher 中运行一个任务。如果您想了解更多信息，[请点击这里](https://wiki.seeedstudio.com/cn/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

此设置需要 Node-RED 以及 Watcher API。如果您尚未安装 Node-RED 或将其与 Watcher API 连接，请从这里开始：[**Watcher 到 Node-RED 快速入门**](https://wiki.seeedstudio.com/cn/watcher_to_node_red)。

### 步骤 2：从 Watcher 获取数据

在设置 Watcher 与 Node-RED 协作后，下一步是为 WhatsApp 准备来自 Watcher 的数据。双击功能节点以适当格式化数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

在本教程中，我们将发送内容以及图片 URL。但是，我们鼓励您根据应用程序的需要转换数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_2.png" style={{width:1000, height:'auto'}}/></div>

#### 格式化数据的 Node-RED 功能示例

```sh
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

## 第二部分. 设置 WhatsApp API 

### 步骤 3. 注册 WhatsApp

需要一个 WhatsApp 账户才能继续。如果您还没有账户，请[**点击这里**](https://www.whatsapp.com)并完成创建账户的步骤。

如果您已经有账户，请继续进行[**步骤 4**](#step-4-get-callmebot-api-key)。

### 步骤 4. 获取 CallMeBot API 密钥

一旦您设置好 WhatsApp 账户并登录，现在是时候设置 CallMeBot API 了。这是连接 Node-RED 和 WhatsApp 的 API。

要获取您的 CallMeBot API 密钥，请按照以下步骤操作（取自[**这个 Github 仓库**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/blob/main/README.md#create-api-key)）：

1. 将电话号码 +34 644 66 32 62 添加到您的手机联系人中。（随意命名）
2. 向新创建的联系人发送消息"I allow callmebot to send me messages"（当然是使用 WhatsApp）
3. 等待直到您收到机器人发送的消息"API Activated for your phone number. Your APIKEY is 123123"。由于这仍在测试阶段，激活可能需要长达 2 分钟。
4. 来自机器人的 WhatsApp 消息将包含使用 API 发送消息所需的 apikey。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_API.png" style={{width:1000, height:'auto'}}/></div>

:::note
本教程中为 CallMeBot API 提供的电话号码可能已满，无法接受更多请求。如果发生这种情况，CallMeBot 会向您发送一条 WhatsApp 消息，提供替代的电话号码。

如果您没有收到此类消息且所有提供的电话号码都已满，您可能需要寻找替代的 API 来连接 Node-RED 和 WhatsApp。请确保查看 CallMeBot 网站上的最新更新和文档，或探索其他与 Node-RED 兼容的 WhatsApp 消息 API。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_Full.png" style={{width:1000, height:'auto'}}/></div>
:::

## 第三部分. 将 WhatsApp 与 Node-RED 集成 

### 步骤 5. 安装 WhatsApp 模块 

点击三条横线图标，然后点击**管理调色板**选项。这会打开一个新窗口，您可以在其中添加或删除节点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

在调色板管理窗口中切换到**安装**选项卡。在搜索栏中，输入 `whatsapp` 来查找模块。然后，点击 **node-red-contrib-whatsapp-cmb** 条目旁边的**安装**按钮。

我们还建议查看[**节点文档**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/blob/main/README.md)和相关的[**Github 仓库**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb)，如果您想更深入地了解模块的工作原理以及如何最大化其潜力。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

:::note
**node-red-contrib-whatsapp-cmb** 模块因其在编写本教程时（2024年7月）的当前兼容性和可靠性而被推荐。但是，Node-RED 模块的可用性和功能可能会随时间变化。建议查看 Node-RED 库或 GitHub 仓库中最新的用户反馈和兼容性说明。如果您在使用此模块时遇到问题，请考虑探索 Node-RED 库中列出的其他 WhatsApp 模块以寻找更合适的选项。
:::

### 步骤 6. 配置 WhatsApp 节点 

安装 WhatsApp 模块后，将**发送消息**节点拖到您的 Node-RED 流程中，并将其连接到函数节点。

双击**发送消息**节点进行配置。然后，点击账户字段旁边的加号图标来添加新的账户配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_5.png" style={{width:1000, height:'auto'}}/></div>

1. 输入您想要用于此账户的名称。
2. 输入与您的 WhatsApp 账户关联的电话号码。
3. 输入您的 API 密钥。

然后，点击**添加**或**更新**来保存账户配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_6.png" style={{width:1000, height:'auto'}}/></div>

配置好账户后，将消息字段旁边的下拉菜单更改为 **msg.**，并在文本字段中输入 `payload`。最后，点击**完成**来完成 WhatsApp 节点的配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 7. 部署

最后，通过点击 Node-RED 界面右上角的部署按钮来部署您的流程。此操作会激活您配置的节点，允许数据从您的函数节点流向 CallMeBot API。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_8.png" style={{width:1000, height:'auto'}}/></div>

现在，每当您的 Watcher 被触发时，您都会收到来自 WhatsApp 的通知。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_Result.png" style={{width:1000, height:'auto'}}/></div>

## 调试：Node-RED 错误

在尝试将 Node-RED 与 WhatsApp 集成时，您可能会遇到这样的错误。如果确实发生这种情况，您可以按照以下步骤来修复它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_Error.png" style={{width:300, height:'auto'}}/></div>

要解决此问题，您可以尝试以下步骤：

1. 通过在您的 Node-RED 用户目录中运行以下命令来安装缺失的 `aws4` 模块：

   ```sh
   npm install aws4
   ```

2. 如果那样不起作用，你可能需要重新安装 `request` 包：

   ```sh
   npm install request
   ```

3. 如果问题仍然存在，您可能需要重新安装 WhatsApp 节点：

   ```sh
   npm install node-red-contrib-whatsapp-cmb
   ```

4. 作为最后的办法，你可以尝试清除 npm 缓存并重新安装所有依赖：

   ```sh
    npm cache clean --force
    npm install
   ```

尝试这些步骤后，重启 Node-RED 并查看错误是否已解决。如果您仍然遇到问题，您可能需要检查您的 Node.js 版本、Node-RED 版本以及您正在使用的软件包版本之间的兼容性。

恭喜您成功将 Watcher 与 WhatsApp 集成！您已经为开发工作中的大量令人兴奋的机会打开了大门。准备好深入创建利用 WhatsApp 强大功能的创新应用程序吧。我们期待看到您接下来将开发的卓越解决方案！

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
