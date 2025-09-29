---
description: reTerminal DM Ignition Edge Panel Builder Hello World
title: reTerminal DM Ignition Edge Panel Builder Hello World
keywords:
  - Edge
  - reTerminal-DM
  - Ignition Edge
  - Panel Builder
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reTerminal-DM-Ignition-Edge-Panel-Builder
last_update:
  date: 09/29/2023
  author: Corey Thompson
---

:::note
本文档假设您已经有一个运行中的 Ignition Edge 网关并连接到您的网络。
在尝试这些说明之前，如果您需要帮助，请先按照[Ignition Edge 入门指南](/cn/reTerminal-DM-Getting-Started-with-Ignition-Edge)进行操作。
:::

## 硬件先决条件
- 具有 SSH 终端功能的 PC / Mac
- 具有足够硬盘容量安装 Ignition Designer 应用程序的 PC / Mac
- 12-24V 直流电源
- 以太网线
- reTerminal DM x 1

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

<br />

## 许可证
本教程不需要激活任何产品，尽管根据您在学习过程中的进度，可能会在系列教程中造成一些中断。Ignition Edge 产品在生产环境中完全使用需要许可证。该产品有试用版本，具有完整的功能支持，但是每两小时会清除一次数据。

要获取产品许可证，您需要联系 Inductive Automation 销售代表，或者您可以在 [Inductive Automation Ignition 定价](https://inductiveautomation.com/pricing/ignition) 页面上自行购买。

要输入许可证，只需按照 Ignition Edge 网关主页上提示激活 ignition 的绿色横幅进行操作。确保您的边缘设备具有互联网连接，输入 6 或 8 个字符的字符串，设备将需要几秒钟来激活。

## 使用 Panel Designer 创建 Hello World 视图

为了演示如何创建基本页面并在固定 URL 上显示它，我们将创建一个 'hello world' perspective 项目，并使用网络浏览器在网关上查看它。

要加载网关的主页，请启动网络浏览器，可以在 reTerminal 本身上访问 `localhost:8088`，或者从网络上的其他设备访问 `{reterminalhostname}:8088`，或者从网络上的任何地方使用 reTerminal 本身的 IP 地址访问 `{reterminalip}:8088`

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-launch-screen.png" />
</p>

### 安装和设置 Ignition Edge Panel Builder

在网关的主屏幕上有一个下载 Designer Launcher 的按钮。Designer Launcher 是 HMI 设计软件，它安装在您的本地 PC/Mac 上，并远程将设计加载到 reTerminal DM 上。

首先下载并执行此安装程序。它将检测您的操作系统并使用非常基本的安装程序在您的机器上安装应用程序。安装完成后，它会提示您是否要从网关导入设置 - 点击**是**。

启动新安装的 Ignition Designer Launcher，它应该显示与您设备的连接。点击您的设备，然后点击现在在底角启用的"打开设计器"按钮。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-designer-launcher.png" />
</p>

您现在应该看到登录提示出现。输入在设置 Edge Gateway 期间输入的 Ignition 管理员凭据。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-designer-login.png" />
</p>

### 创建和加载面板

1. 在左列中，展开 'Perspectives' 并右键点击 'Views'
2. 创建一个新视图并给它命名为 'hello-world'
3. 找到组件面板，它有时在您右侧的隐藏选项卡容器中。搜索 'label' 并将其拖到画布上。
4. 双击标签并将您的文本更改为 'hello world'
5. 保存文件，在顶部菜单栏中导航到 File -> Update Project 以将更新的项目（即 'Perspective session'）发布到网关。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-create-helloworld.gif" />
</p>

现在您已经更新了 Perspective session，它已经上线，您可以使用网络浏览器导航到它！
要获得帮助找到我们刚创建的视图的 URL，您可以返回到 Edge Gateway Launcher 并查看活动的 Perspective sessions。这将在您的 session 主页 URL 上启动浏览器。

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-panel-view-helloworld.gif" />
</p>

## 扩展您的 HMI
您现在已经设置了 Ignition Perspective 模块的基础功能来为您的 ReTerminal 提供可视化界面。要创建更强大的可视化界面并充分利用完整的 Ignition 平台，您可能需要设置标签服务器、历史数据库等，这些内容超出了本教程的范围。要了解更多关于 Ignition 平台的信息，请使用他们优秀的文档和免费教程，访问 [Inductive University。](https://inductiveuniversity.com/)

## Perspective 与 Vision 的对比
Ignition 提供两种面板构建软件，选择使用哪一种是一个常见问题。两者在功能上有很多重叠，但有几个关键的决定因素可以帮助做出决定。

### 您的用户是否以移动设备为主？选择 Perspective。
如果您希望使用 iOS 或 Android 原生功能包，如位置服务或摄像头，您只能通过 Perspective 访问这些功能。

### 您是否希望比网页浏览器更原生的体验？选择 Vision。
如果您想避免许多现代网页应用程序的感觉（如 Google Drive、Outlook 网页版、Zoom 网页版等）并完全沉浸用户体验，那么您应该选择 Vision。

### 您的用户是否会在此设备上进行多任务处理？选择 Perspective
Perspective 是基于 javascript 的技术栈，依赖网页浏览器来显示应用程序。Vision 是基于 Java 的应用程序，最初是为专用 HMI 面板构建的，并假设主机将完全专用于您的应用程序。如果您的用户有时想要最小化 HMI 以使用操作系统上的其他应用程序，您应该选择 Perspective。

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
