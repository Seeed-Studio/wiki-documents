---
description: 本文介绍如何使用 TRMNL 7.5inch(OG) DIY Kit 与 TRMNL 配合工作。
title: 与 TRMNL 配合工作
keywords:
- ePaper display
- TRMNL
image: https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/trmnl_head.webp
slug: /cn/ogdiy_kit_works_with_trmnl
sidebar_position: 2
last_update:
  date: 06/29/2025
  author: Allen
---

# TRMNL 7.5inch(OG) DIY Kit 与 TRMNL 配合工作

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:1000, height:'auto'}}/></div>

<br></br>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/TRMNL-7-5-Inch-OG-DIY-Kit-p-6481.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 什么是 [TRMNL](https://trmnl.app/)？

TRMNL 是一个创新平台，旨在帮助人们在日益分散注意力的数字世界中保持专注和冷静。成立于 2023 年，TRMNL 迅速成为 E Ink® 仪表板管理的领先解决方案，为显示信息提供了一种独特的方法，避免了传统屏幕的持续通知和干扰。

TRMNL 的核心理念是技术应该增强我们的生活，而不是要求持续的关注。该平台提供了一种优雅的方式，通过 E Ink® 显示屏一目了然地查看重要信息，创造了一种更加专注且不那么侵扰的技术体验。

### 为什么使用 TRMNL？

集成 TRMNL 将带来几个引人注目的好处：

- **简化仪表板创建**：TRMNL 不断增长的应用程序和集成库使得创建自定义信息显示变得容易，无需复杂的编程
- **低功耗**：TRMNL 高效软件与我们 E Ink® 显示屏的最小功耗要求相结合，创造了一个极其节能的解决方案
- **无干扰信息**：获取您需要的信息，而无需传统屏幕带来的持续通知和眼部疲劳
- **定期更新**：TRMNL 的积极开发意味着每周都会添加新功能和集成，不断扩展您显示屏的可能性
- **开发者友好**：通过 TRMNL 的开放 API 和开发者工具，您可以为特定需求创建自定义插件和集成

通过将 TRMNL 强大的平台与我们高质量的 E Ink® 显示屏相结合，我们为用户提供了一个优雅的解决方案，用于创建个性化、低功耗的信息仪表板，既尊重他们的注意力，也尊重他们的时间。

## TRMNL 入门指南

### 设备安装

**步骤 1. 将显示屏连接到驱动板**  
将 FPC 排线与 XIAO ePaper Display Board 上的连接器对齐，然后固定锁扣以确保牢固连接。  

:::tip
FPC 排线的金属面应朝上，否则不会显示任何内容。

请按照下面的安装教程操作，很多人都会弄错。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**步骤 2. 连接电池**  
将电池线缆连接到驱动板上的 JST 连接器，确保极性正确（红线接 +，黑线接 -）。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**步骤 3. 外壳组装（可选）**  

:::tip
请注意屏幕的柔性排线非常脆弱。操作时要小心。如果损坏，整个屏幕将停止工作。
:::
从[资源部分](#resources)打印开源外壳部件并在内部组装组件。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

首先，组装驱动板和电池。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

测试 TRMNL 套件是否工作正常。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

将屏幕插入外壳并使 FPC 排线伸出。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

连接 FPC 延长线并组装整个外壳。

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

L 型外壳非常相似。

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
如果您的 TRMNL 套件距离路由器较远，您可以将天线移到外壳外面。这样会有更好的性能。
:::

### TRMNL 账户设置和 TRMNL 访问

在将您的套件连接到 TRMNL 之前，您需要：

1. **购买 TRMNL 访问权限**

   - 在以下网址购买 TRMNL 网络应用 + 设备功能的访问权限：[https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - 这为您提供了使用 TRMNL 平台所需的凭据
   - 前往 [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) 激活虚拟设备（购买后可能需要最多 10 分钟）

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **创建 TRMNL 账户**

   - 访问 [TRMNL 网站](https://usetrmnl.com)
   - 点击 "Sign Up" 创建新账户
   - 按照注册流程操作

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
您的 TRMNL 凭据是敏感信息。切勿公开分享或将其提交到版本控制系统。
:::

一旦您拥有材料并购买了 TRMNL 访问权限，您就可以继续将设备连接到 TRMNL 平台。如果您遇到任何问题或有疑问，可以直接通过 team@usetrmnl.com 联系 TRMNL 团队。

### 固件刷写

:::tip
如果您得到的是全新套件，它内部会有固件。所以您可以跳过这一步。
:::

要让您的 TRMNL 7.5inch(OG) DIY 套件与 TRMNL 配合工作，您需要将适当的固件刷写到您的设备上。有三种推荐的方法：

#### 方法 1：通过 TRMNL 网络刷写器刷写（最简单）

:::tip
请使用 **FW 1.5.12** 或更新的固件以获得 Seeed 兼容性。
:::

1. **前往 TRMNL 网络刷写器**

   - 访问 [https://usetrmnl.com/flash](https://usetrmnl.com/flash)
   - 此工具允许您直接从浏览器刷写设备。
   - 按照屏幕上的说明完成刷写过程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/224.png" style={{width:700, height:'auto'}}/></div>

---

#### 方法 2：从源代码构建和刷写（适用于高级用户/开发者）

1. **克隆固件仓库**

- 访问[官方固件仓库](https://github.com/usetrmnl/trmnl-firmware)并克隆它：

    ```
    git clone https://github.com/usetrmnl/trmnl-firmware.git
    ```

:::tip

有时我们更新代码需要向 TRMNL 提交 PR 并在显示之前进行审查，如果您想第一时间使用最新的固件版本，您也可以使用 Seeed Project 下的 TRMNL 仓库。

- 访问 [Seeed 仓库](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)并克隆它：

    ```
    git clone https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project.git
    ```

:::

2. **安装 PlatformIO**

   - 将 [PlatformIO](https://platformio.org/) 安装为 VSCode 扩展或通过命令行安装。

3. **打开项目**

   - 在 VSCode 中打开克隆的 `firmware` 文件夹。

4. **选择正确的环境**

   - 在 `platformio.ini` 中，选择 `TRMNL_7inch5_OG_DIY_Kit` 环境。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/5.png" style={{width:1000, height:'auto'}}/></div>

5. **连接您的设备**

   - 插入您的 TRMNL 7.5inch(OG) DIY 套件。

6. **构建和上传**

   - 在 PlatformIO 中，点击 "Upload" 按钮，或运行：

     ```
     pio run --target upload
     ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

   - 固件将被编译并上传到您的设备。

## 配置 Wi-Fi 并向 TRMNL 发送播放列表

要将您的 TRMNL 7.5inch(OG) DIY 套件与 TRMNL 一起使用并发送播放列表，您首先需要将设备连接到您的 Wi-Fi 网络。这个过程称为"WiFi 配对模式"，通过一个简单的强制门户完成。请按照以下步骤操作：

> 💡 **Wi-Fi 故障排除？** 如果您在将设备连接到 Wi-Fi 时遇到问题，请参考 [TRMNL 设备 Wi-Fi 故障排除指南](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting)以获得常见网络和路由器兼容性问题的解决方案。

### 开机并进入配置模式

- 刷写 TRMNL 固件并为设备通电后，如果尚未连接到 Wi-Fi，它将自动进入配置模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

### 连接到 TRMNL Wi-Fi

- 在您的**手机**或**电脑**上，打开可用 Wi-Fi 网络列表。
- 查找名为 **TRMNL** 的网络并连接到它。（默认情况下不需要密码。）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### 打开强制门户

- 连接后，打开网络浏览器（如 Chrome 或 Edge）。
- 设备应该会自动重定向您到 TRMNL 配置页面。如果没有，请在浏览器中手动访问 [http://4.3.2.1](http://4.3.2.1)。

### 输入您的 Wi-Fi 凭据

- 在配置页面上，您将看到可用 Wi-Fi 网络的列表。
- **选择您的 2.4GHz Wi-Fi 网络**（TRMNL 不支持 5GHz 网络）。
- 输入您的 Wi-Fi 密码。
- 点击 **Save** 或 **Connect**。

> ⚠️ **重要提示：** 确保使用 2.4GHz Wi-Fi 网络。ESP32-C3 芯片不支持 5GHz 网络。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### 设备连接到您的网络

- 设备将尝试连接到您的 Wi-Fi。
- 成功后，它将断开与 TRMNL Wi-Fi 的连接并加入您的家庭网络。
- 窗口和电子墨水屏幕将显示设备的 MAC 地址。**请记录 MAC 地址**，因为您在后续步骤中会需要它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **注意：** MAC 地址在强制门户中只显示 1-2 秒。如果您错过了，您也可以：
>
> - 从 VS Code > PlatformIO 构建/上传日志中获取它。
> - 使用 [usetrmnl.com/flash](https://usetrmnl.com/flash) 方法，并在刷写过程中检查 Chrome/Edge/Firefox 开发者控制台中的 MAC 地址。
> - 在您的路由器或 Mesh 网络应用的已连接设备列表中找到它。
>
> 有关更多详细信息和截图，请参阅官方指南：[Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)

### 访问 TRMNL Web 界面

在您的 TRMNL 7.5inch(OG) DIY 套件连接到您的 Wi-Fi 并记录了其 MAC 地址（设备 ID）后，您可以将其添加到您的 TRMNL 账户：

1. **打开 TRMNL Web 界面**  
   - 在您的电脑或移动设备上，打开浏览器并访问 [TRMNL web interface](https://trmnl.app)。

2. **转到设备页面**  
   - 在 TRMNL 界面中，导航到 **Devices** 部分。

3. **添加新设备**  
   - 点击 **Add new device** 按钮，通常位于设备页面的右上角或中央。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **输入设备 ID**  
   - 在弹出窗口中，输入您购买 TRMNL 访问权限时收到的设备 ID（这不是 MAC 地址）。使用购买确认邮件或 TRMNL 仪表板中的设备 ID。
   - 点击 **Add new device** 完成该过程。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **注册 XIAO 7.5" 设备 MAC 地址**

   为了在 XIAO 电子纸面板和 TRMNL 之间建立连接，我们需要在 TRMNL 设置页面中绑定正确的设备 MAC 地址。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   - 您可以在 PlatformIO 上传过程中获取 MAC 地址（检查上传日志），或从配置门户获取（它将在 Wi-Fi 设置后显示）。
   - 提前添加您的 MAC 地址有助于确保顺畅的入门过程和设备管理。

   - 然后您可以为您的电子纸面板设置自定义名称并根据需要调整其他设置。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

您的 TRMNL 7.5inch(OG) DIY 套件现在已链接到您的 TRMNL 账户！您现在可以直接从 TRMNL 界面向您的显示器发送播放列表、图像或其他内容。

> 💡 **提示：** 如果您有多个电子纸面板，请使用它们各自的设备 ID 为每个设备重复上述步骤。

:::caution
在 TRMNL web 界面中添加您的设备后，请转到设备的设置页面并**关闭** **Firmware Early Release** 和 **OTA Updates Enabled** 两个选项。  

如果这些选项保持启用状态，您的设备在连接到互联网时可能会自动从 TRMNL 下载并安装固件更新。这些更新是为官方 TRMNL 硬件设计的，**与 TRMNL 7.5inch(OG) DIY 套件不兼容**。安装不兼容的固件可能导致您的设备故障或无响应。

始终保持这两个选项禁用，以确保您的 XIAO 电子纸面板稳定运行。
:::

### 按钮使用

我们在这个开发板上有 4 个按钮。它们是 RESET、KEY1、KEY2、KEY3，**我们在 TRMNL 固件中只使用 RESET 和 KEY3 按钮。**

**KEY3 使用方法：**

1. **单击：** 立即刷新页面。
2. **双击：** 自定义功能，您可以在设置页面中找到它。
3. **长按：** 约 5 秒，重新配置网络。

**RESET 使用方法：** 只需单击一次即可重置设备。

## 了解 TRMNL 播放列表功能

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

TRMNL 播放列表功能允许您精确控制在您的电子纸面板上显示什么内容以及何时显示。以下是主要部分和控件的详细说明，如上面的截图所示：

### 播放列表概览

- **播放列表标题**：在顶部，您可以看到您的 TRMNL 设备的名称（例如，"MengDu's TRMNL"）。
- **显示时间范围**：您可以设置播放列表活跃的时间范围（例如，从 00:00 到 23:45）。
- **更新间隔**：选择显示更新的频率（例如，每 5 分钟）。
- **Add a Group / Add a Plugin**：使用这些按钮将您的播放列表组织成组或添加新的内容插件（如天气、日历或自定义文本）。

### 播放列表项目

播放列表中的每一行代表将在您的电子纸面板上显示的屏幕或小部件（仅供参考）：

1. **Weather**
   - 显示您选择位置的当前天气信息。
   - 绿色的 "Displayed now" 标签表示此屏幕当前正在您的设备上显示。
2. **Days Left This Year**
   - 显示当前年份剩余天数的倒计时（例如，"2025"）。
   - 标签（例如，"9 days ago"）显示此屏幕上次更新或显示的时间。
3. **Custom Text**
   - 让您显示任何自定义消息（例如，"Hello World"）。
   - 也显示上次更新的时间。

对于每个项目，您有几个控件：

- **Settings（齿轮图标）**：配置插件的选项。
- **Delete（X 图标）**：从您的播放列表中删除项目。
- **Preview（眼睛图标）**：预览屏幕的外观。
- **Reorder（条形图标）**：拖动以更改屏幕显示的顺序。

### 智能播放列表

- **智能播放列表选项**：在底部，您可以选择是否自动跳过内容未更改的屏幕（例如，"Never skip screens"）。

> 📖 想了解更多？阅读 [Smart Playlists blog post](https://usetrmnl.com/blog/smart-playlists) 获取高级技巧和详细信息。

这个灵活的播放列表系统让您完全自定义电子纸面板显示的内容、更新频率和显示顺序。您可以混合搭配不同的插件来创建符合您需求的个性化仪表板。

## 探索 TRMNL 插件

TRMNL 的插件系统是让您的电子纸面板真正强大和可定制的关键。插件是模块化的应用程序或小部件，您可以将其添加到设备中以显示各种信息和内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

### 什么是插件？

插件是可以显示天气、日历事件、股票价格、RSS 订阅、励志名言、GitHub 活动等内容的独立内容块。您可以混合搭配插件来创建符合您需求的仪表板。

### 已连接的插件

在插件页面的顶部，您将看到已连接到您的 TRMNL 账户的所有插件。这些插件已准备好添加到您的播放列表并在您的电子纸面板上显示。示例包括：

- **Weather**：显示当前天气状况。
- **Days Left This Year**：年底倒计时。
- **Stock Price**：跟踪您喜爱的股票。
- **RSS Feed**：显示新闻或博客更新。
- **Reddit, Hacker News**：显示热门帖子。
- **Language Learning, Motivational Quote, Custom Text**：使用学习工具或自定义消息个性化您的显示。

### 插件市场

在您的已连接插件下方，您将找到插件市场。在这里您可以浏览、搜索和发现要添加到您设备的新插件。插件按类别和标签（如 #productivity、#news、#ecommerce 等）组织，便于找到您需要的内容。

- **浏览和搜索**：使用搜索栏或标签快速找到您感兴趣的插件。
- **添加插件**：点击任何插件将其连接到您的账户并开始在您的播放列表中使用它。

开发者甚至可以创建和发布自己的插件供他人使用，使生态系统不断扩展新的可能性（[了解更多关于插件创建的信息](https://docs.usetrmnl.com/go/plugin-marketplace/introduction)）。

---

如果您对使用 TRMNL 有任何疑问或想要探索更多高级功能，欢迎阅读官方 TRMNL 文档以获取更多信息：[https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)

## 故障排除

### Q1：使用网页或 PlatformIO 时，遇到无法刷写固件的问题，应该怎么办？

有时，使用错误的程序可能会导致 XIAO 失去端口或无法正常工作。常见问题包括：

- XIAO 已连接到计算机，但*找不到端口号*。
- XIAO 已连接，出现端口号，但*程序上传失败*。

当您遇到上述两种情况时，可以尝试将 XIAO 置于 BootLoader 模式，这可以解决大多数设备无法识别和上传失败的问题。具体方法是：

- **步骤 1**。按住 XIAO ESP32S3 上的 `BOOT` 按钮不松开。
- **步骤 2**。保持按住 `BOOT` 按钮，然后通过数据线连接到计算机。连接到计算机后松开 `BOOT` 按钮。
- **步骤 3**。上传程序或刷写固件以检查 XIAO ESP32S3 的运行情况。

## 特别感谢

特别感谢整个 **TRMNL 团队**对本项目的大力支持和宝贵帮助。特别是，我们要感谢 **Bogdan**、**Ryan Kulp**、**Fr3d** 以及所有其他团队成员在整个开发和文档编写过程中的奉献和协助。

您的专业知识和承诺使这种集成成为可能，并极大地改善了 TRMNL 7.5inch(OG) DIY 套件社区的用户体验。

## 故障排除

### 如何重新配置网络？

按住 Key3（Reset 按钮旁边的按钮）五秒钟。设备将返回到初始 TRMNL 界面并激活 AP。

## 资源

- **[固件]** [TRMNL ePaper 库 (GitHub)](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)
- **[硬件]** [驱动板原理图](https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/XIAO_ePaper_driver_board_sch.pdf)
- **[可打印]** [三角形底座](https://www.printables.com/model/1354873)  
- **[可打印]** [保护型三角形底座](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)  
- **[可打印]** [L 型底座](https://www.printables.com/model/1354879)  
- **[Thingiverse]** [三角形底座](https://www.thingiverse.com/thing:7091094)
- **[Thingiverse]** [保护型三角形底座](https://www.thingiverse.com/thing:7097231)
- **[Thingiverse]** [L 型底座](https://www.thingiverse.com/thing:7091096)
- **[Makerworld]** [三角形底座](https://makerworld.com/en/models/1625037-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [保护型三角形底座](https://makerworld.com/en/models/1625119-trmnl-7-5-og-diy-triangular-prism-shell-kit)
- **[Makerworld]** [L 型底座](https://makerworld.com/en/models/1625065-trmnl-7-5-og-diy-l-shaped-case-kit)

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
