---
description: 从 Watcher 和 Node-RED 发送数据到 Discord
title: Watcher 和 Node-RED 到 Discord
keywords:
- Watcher
- Discord
- Node-RED
image: https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Watcher_Discord_Cover.png
slug: /cn/watcher_node_red_to_discord
last_update:
  date: 08/02/2024
  author: Vincent
---

# Watcher 到 Discord 快速入门

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Watcher_Discord_Cover.png" style={{width:1000, height:'auto'}}/></div>

[**Discord**](https://discord.com/) 是一个即时通讯和 VoIP 社交平台，支持语音通话、视频通话、文本消息和媒体分享等通信方式。Discord 上的对话可以是私人的，也可以在被称为"服务器"的虚拟社区中进行。

本教程将指导您将 Watcher API 与 Node-RED 集成，以便无缝地将数据从 Watcher 发送到 Discord。这种集成提供了一种简单高效的方法来**接收通知，并为进一步的应用和集成打开了大门**。

## 第一部分：在 Node-RED 中设置 Watcher

### 步骤 1：设置 Node-RED

首先，您需要按照下面的视频在 Watcher 中运行一个任务。如果您想了解更多信息，[请点击这里](https://wiki.seeedstudio.com/cn/getting_started_with_watcher_task/)。

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

此设置需要 Node-RED 以及 Watcher API。如果您尚未安装 Node-RED 或将其与 Watcher API 连接，请从这里开始：[**Watcher 到 Node-RED 快速入门**](https://wiki.seeedstudio.com/cn/watcher_to_node_red)。

### 步骤 2：准备来自 Watcher 的数据

在设置 Watcher 与 Node-RED 协作后，下一步是为 Discord 准备来自 Watcher 的数据。双击功能节点以适当地格式化数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

在本教程中，我们将发送内容以及图像。但是，我们鼓励您根据应用程序的需要转换数据。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_2.png" style={{width:700, height:'auto'}}/></div>

#### 格式化数据的 Node-RED 功能示例

```sh
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

## 第二部分. 设置 Discord 机器人

### 步骤 3. 注册 Discord

需要一个 Discord 账户才能继续。如果您还没有账户，请[**点击这里**](https://discord.com)并完成创建账户的步骤。

如果您已经有账户，请继续进行[**步骤 4**](#step-4-create-development-application)。

如果您已经有一个想要在 Node-RED 中配置的 Discord 机器人，请跳转到[**第三部分**](#part-3-integrate-discord-with-node-red)。

### 步骤 4. 创建开发应用程序

设置好 Discord 账户并登录后，前往[**Discord 开发者门户**](https://discord.com/developers/applications)并创建一个新应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_1.png" style={{width:1000, height:'auto'}}/></div>

为您的应用程序输入名称，同意 Discord [**开发者服务条款**](https://support-dev.discord.com/hc/articles/8562894815383-Discord-Developer-Terms-of-Service)和[**开发者政策**](https://support-dev.discord.com/hc/articles/8563934450327-Discord-Developer-Policy)，然后点击**创建**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_2.png" style={{width:1000, height:'auto'}}/></div>

:::note
您需要一个与 Discord 账户关联的有效电子邮件地址才能继续。如果您的 Discord 账户没有关联电子邮件，请按照以下说明操作：[如何更改您账户的电子邮件地址](https://support.discord.com/hc/en-us/articles/4423385681175-How-to-Change-Your-Account-s-Email-Address)
:::

### 步骤 5. 配置机器人设置

现在我们将配置机器人设置。请按照以下步骤操作：

1. 在应用程序页面的左侧边栏中，点击**设置**下的**机器人**选项卡。

2. 在**特权网关意图**部分，您会看到几个选项。对于本教程，我们只需要启用**消息内容意图**。这允许您的机器人读取消息内容。切换**消息内容意图**旁边的开关以启用它。启用后，开关将变为蓝色。

每当您对机器人进行更改时，底部会出现一个弹出窗口，提示您**保存更改**。请确保在继续之前执行此操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_3.png" style={{width:1000, height:'auto'}}/></div>

:::note
根据您打算对应用程序执行的操作，您可能需要启用其他意图。对于更复杂的机器人功能，您可能需要启用其他意图，如**在线状态意图**或**服务器成员意图**。但是，对于本教程的目的，我们只发送消息，启用**消息内容意图**就足够了。
:::

在机器人页面上，您还会在页面顶部看到一个标题为**令牌**的部分。点击**重置令牌**按钮为您的机器人生成新令牌。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_4.png" style={{width:1000, height:'auto'}}/></div>

请注意，重置令牌将导致您的机器人停止工作，直到您在机器人代码中更新令牌。在继续重置之前，请确保您已准备好更新机器人的配置。

您可能会被提示进行多因素身份验证。如果是这样，请根据需要完成此步骤，然后再继续。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_5.png" style={{width:1000, height:'auto'}}/></div>

复制此令牌并妥善保管。稍后您需要此令牌在 Node-RED 中验证您的机器人。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_6.png" style={{width:1000, height:'auto'}}/></div>

:::warning
永远不要公开分享您的机器人令牌。任何拥有您令牌的人都可以控制您的机器人。如果您意外暴露了令牌，请立即在此页面上重置它。
:::

### 步骤 6. 配置 OAuth2 设置

现在，切换到**设置**下的**OAuth2**选项卡，向下滚动直到看到**OAuth2 URL 生成器**。在这里，我们将勾选**机器人**范围，因为我们正在创建一个机器人应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_7.png" style={{width:1000, height:'auto'}}/></div>

选择机器人范围后，将出现一个新框，允许您选择**机器人权限**。对于本教程的目的，我们将给机器人**管理员**权限，这为机器人提供了对所有功能的访问权限。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_8.png" style={{width:1000, height:'auto'}}/></div>

:::warning
授予机器人管理员权限会给它完全访问所有服务器功能的权限。在生产环境中，建议遵循最小权限原则，只授予机器人执行其预期功能所需的特定权限。
:::

最后，向下滚动查看您新生成的 URL。复制此 URL 并将其粘贴到您的网络浏览器地址栏中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_9.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 7. 授予机器人访问服务器的权限

系统会提示您选择要添加机器人的服务器。从下拉菜单中选择适当的服务器，然后点击**继续**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_10.png" style={{width:1000, height:'auto'}}/></div>

在下一个屏幕上，您将看到您授予机器人的权限的完整列表。这些权限基于您在[**步骤 6**](#step-6-configure-oauth2-settings)中的 OAuth2 URL 生成器中选择的内容。仔细查看每个权限，然后点击**授权**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_11.png" style={{width:1000, height:'auto'}}/></div>

与[**步骤 5**](#step-5-configure-bot-settings)类似，您可能会再次被提示进行多因素身份验证。如果是这样，请在继续之前按要求完成此步骤。

成功授权后，您将看到一条确认消息，表明机器人已添加到您选择的 Discord 服务器。现在，返回到您的 Discord 服务器继续操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_12.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 8. 获取频道 ID

到达您的 Discord 服务器后，点击屏幕底部附近的齿轮图标（⚙️），位于您的个人资料信息旁边。这将打开您的用户设置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_13.png" style={{width:1000, height:'auto'}}/></div>

在用户设置侧边栏中，向下滚动到**应用设置**部分，然后点击**高级**。确保**开发者模式**开关已打开。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_14.png" style={{width:1000, height:'auto'}}/></div>

关闭用户设置并返回到您的 Discord 服务器。右键点击您要使用的频道（在本教程中，我们使用**general**频道）。在出现的上下文菜单底部，点击**复制频道 ID**。保存此频道 ID 以在您的 Node-RED 流程中使用。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_15.png" style={{width:1000, height:'auto'}}/></div>

:::note
频道 ID 是每个 Discord 频道的唯一标识符。请确保保持其安全，不要公开分享。
:::

## 第 3 部分. 将 Discord 与 Node-RED 集成

### 步骤 9. 安装 Discord 模块

点击三条横线图标，然后点击**管理调色板**选项。这将打开一个新窗口，您可以在其中添加或删除节点。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_2.5.png" style={{width:1000, height:'auto'}}/></div>

在调色板管理窗口中切换到**安装**选项卡。在搜索栏中，输入`discord`来查找模块。然后，点击**node-red-contrib-discord-advanced**条目旁边的**安装**按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

我们还建议查看[**节点文档**](https://github.com/Markoudstaal/node-red-contrib-discord-advanced/blob/main/README.md)和相关的[**Github 仓库**](https://github.com/Markoudstaal/node-red-contrib-discord-advanced)，如果您想更深入地了解模块的工作原理以及如何最大化其潜力。

:::note
**node-red-contrib-discord-advanced**模块因其在编写本教程时（2024年8月）的当前兼容性和可靠性而被推荐。但是，Node-RED 模块的可用性和功能可能会随时间而变化。建议查看 Node-RED 库或 GitHub 仓库中最新的用户反馈和兼容性说明。如果您在使用此模块时遇到问题，请考虑探索 Node-RED 库中列出的其他 Discord 模块以获得更合适的选择。
:::

### 步骤 10. 配置 Discord 节点

安装 Discord 模块后，将**discordMessageManager**节点拖到您的 Node-RED 流程中，并将其连接到函数节点

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

双击**discordMessageManager**节点打开其配置面板。点击**token**字段旁边的加号图标来添加新的 Discord API 令牌配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_5.png" style={{width:700, height:'auto'}}/></div>

在新窗口中，输入以下信息：

- Token：输入您在[**步骤 5**](#step-5-configure-bot-settings)中获得的令牌
- Name：为您的令牌配置命名

然后，点击**添加**或**更新**来保存配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_6.png" style={{width:700, height:'auto'}}/></div>

在**Channel**字段中，输入您在[步骤 8](#step-8-obtain-channel-id)中获得的频道 ID。然后，点击**完成**关闭配置面板。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_6.5.png" style={{width:700, height:'auto'}}/></div>

:::note
对于具有多个频道和触发条件的更复杂设置，您可以将频道字段留空并使用`msg.channel`来动态设置频道。但是，对于这个基础教程，我们将使用静态频道 ID。
:::

### 步骤 11. 部署

最后，点击 Node-RED 界面右上角的**部署**按钮。部署完成后，您的 Watcher 将向 Node-RED 发送消息，然后 Node-RED 会将消息转发到您的 Discord 频道。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_16.png" style={{width:1000, height:'auto'}}/></div>

恭喜！您已成功配置您的 Watcher 通过 Node-RED 向 Discord 发送消息。此设置确保您在 Watcher 被触发时能在 Discord 频道中收到实时通知。通过这样做，您已经为您的开发项目解锁了大量令人兴奋的机会。我们热切期待您接下来将创造的创新解决方案！

## 故障排除

在将 Discord 与 Node-RED 集成时，您可能会遇到一些错误。以下是两个常见错误及其详细解决步骤：

### 错误：Used disallowed intents

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_Error_1.png" style={{width:1000, height:'auto'}}/></div>

当您的机器人尝试使用在 Discord 开发者门户中未启用的意图时，会出现此错误。要修复此问题：

1. 前往 [**Discord 开发者门户**](https://discord.com/developers/applications)。
2. 选择您的应用程序。
3. 点击左侧边栏中的 **Bot**。
4. 向下滚动到 **Privileged Gateway Intents** 部分。
5. 启用您的机器人需要的意图（通常是 **Presence Intent**、**Server Members Intent** 和 **Message Content Intent**）。
6. 点击页面底部的 **Save Changes**。
7. 重新部署您的 Node-RED 流程。

### DiscordAPIError&#91;50001&#93;: Missing Access

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_Error_2.png" style={{width:1000, height:'auto'}}/></div>

此错误表明您的机器人没有执行该操作的必要权限。要解决此问题：

1. 确保您的机器人已使用正确的权限被邀请到服务器：

- 前往 [**Discord 开发者门户**](https://discord.com/developers/applications)。
- 选择您的应用程序并转到 **OAuth2** 部分。
- 在 **URL Generator** 中，在 **SCOPES** 下选择 **bot**。
- 在 **BOT PERMISSIONS** 下，选择您的机器人需要的权限（至少需要 **Send Messages** 和 **View Channels**）。
- 复制生成的 URL 并在新标签页中打开它，以使用这些权限将机器人邀请到您的服务器。

2. 检查频道权限：

- 在 Discord 中，右键点击您尝试发送消息的频道。
- 点击 **Edit Channel** > **Permissions**。
- 确保您的机器人角色具有必要的权限，特别是 **View Channel** 和 **Send Messages**。

3. 验证频道 ID：

- 仔细检查您的 Node-RED 配置中的频道 ID 是否正确。
- 确保您使用的是文本频道的 ID，而不是语音频道或类别的 ID。

4. 检查您的机器人令牌：

- 确保您的 Node-RED 配置中的令牌是正确且最新的。
- 如果不确定，您可以在 Discord 开发者门户的 **Bot** 部分重新生成令牌。

5. 进行这些更改后重新部署您的 Node-RED 流程。

如果在尝试这些步骤后仍然遇到问题，请考虑查看 [**Discord API 文档**](https://discord.com/developers/docs/reference) 或在 [**Discord 开发者社区**](https://discord.com/invite/discord-developers) 中寻求帮助以获得更具体的故障排除。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
