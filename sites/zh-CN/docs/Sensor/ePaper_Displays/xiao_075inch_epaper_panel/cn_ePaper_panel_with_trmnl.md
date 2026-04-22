---
description: 本文介绍如何使用电子纸面板与 TRMNL 协同工作。
title: 与 TRMNL 协同工作
keywords:
  - 电子纸显示屏
  - TRMNL
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.webp
slug: /xiao_7_5_inch_epaper_panel_with_trmnl
sku: 114993635
sidebar_position: 3
last_update:
  date: 05/19/2025
  author: Citric
createdAt: '2025-05-21'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/xiao_7_5_inch_epaper_panel_with_trmnl/
---

# XIAO 7.5" 电子纸面板与 TRMNL 协同工作

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/202.png" style={{width:900, height:'auto'}}/></div>

<br></br>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

## 什么是 [TRMNL](https://trmnl.app/)？

TRMNL 是一个创新平台，旨在帮助人们在这个日益分心的数字世界中保持专注与平静。TRMNL 成立于 2023 年，很快就成为 E Ink® 仪表盘管理的领先解决方案，以独特的方式展示信息，同时避免传统屏幕上不断弹出的通知和干扰。

从本质上讲，TRMNL 建立在这样一种理念之上：技术应当提升我们的生活，而不是不断索取我们的注意力。该平台通过 E Ink® 显示屏，以优雅的方式让你一眼查看重要信息，从而带来更专注、更少打扰的技术体验。

### 为什么要将 TRMNL 与 XIAO 7.5" 电子纸面板集成？

将 TRMNL 与我们的 XIAO 7.5" 电子纸面板集成，可以带来以下几个显著优势：

- **简化仪表盘创建**：TRMNL 不断增长的应用和集成库，让你无需复杂编程即可轻松创建自定义信息显示界面
- **低功耗**：TRMNL 高效的软件与我们 E Ink® 显示屏极低的功耗相结合，打造出极其节能的解决方案
- **无干扰信息展示**：在没有传统屏幕上那些持续通知和视觉疲劳的情况下，获取你所需的信息
- **定期更新**：TRMNL 正在积极开发中，每周都会加入新功能和新集成，持续拓展你的显示屏使用可能性
- **对开发者友好**：借助 TRMNL 的开放 API 和开发者工具，你可以根据自己的特定需求创建自定义插件和集成

通过将 TRMNL 强大的平台与我们高品质的 E Ink® 显示屏相结合，我们为用户提供了一种优雅的解决方案，用于创建个性化、低功耗的信息仪表盘，同时尊重你的注意力和时间。

## TRMNL 入门

在开始将 XIAO 7.5" 电子纸面板与 TRMNL 进行设置之前，我们先准备好所需材料并配置好你的 TRMNL 凭据。

### 所需材料

在本次集成中，你需要：

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO 7.5" 电子纸面板</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/209.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### TRMNL 账号设置与 TRMNL 访问权限

在将电子纸面板连接到 TRMNL 之前，你需要：

1. **购买 TRMNL 访问权限**

   - 在此购买 TRMNL Web 应用 + 设备功能的访问权限：[https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - 这将为你提供使用 TRMNL 平台所需的凭据
   - 前往 [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) 激活一个虚拟设备（购买后可能需要最多 10 分钟）

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **创建 TRMNL 账号**

   - 访问 [TRMNL 官网](https://usetrmnl.com)
   - 点击 "Sign Up" 创建新账号
   - 按提示完成注册流程

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
你的 TRMNL 凭据属于敏感信息。切勿在公开场合分享，也不要将其提交到版本控制系统中。
:::

在你准备好材料并购买 TRMNL 访问权限后，就可以继续将电子纸面板连接到 TRMNL 平台。如果你遇到任何问题或有疑问，可以通过 team@usetrmnl.com 直接联系 TRMNL 团队。

### 固件烧录

要让 XIAO 7.5" 电子纸面板与 TRMNL 协同工作，你需要将合适的固件烧录到设备上。推荐的方式有三种：

#### 方法一：通过 TRMNL Web Flasher 烧录（最简单）

1. **前往 TRMNL Web Flasher**

:::tip
请使用 **FW 1.5.12** 或更新版本的固件以确保与 Seeed 兼容。
:::

- 访问 [https://usetrmnl.com/flash](https://usetrmnl.com/flash)
- 该工具允许你直接在浏览器中为设备烧录固件。
- 按照屏幕上的指引完成烧录流程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/224.png" style={{width:700, height:'auto'}}/></div>

#### 方法二：从源码构建并烧录（适合高级用户/开发者）

1. **克隆固件仓库**

- 访问[官方固件仓库](https://github.com/usetrmnl/trmnl-firmware)并克隆：

    ```
    git clone https://github.com/usetrmnl/trmnl-firmware.git
    ```

:::tip

有时我们会更新代码并需要向 TRMNL 提交 PR 并通过审核后才会展示，如果你想第一时间使用最新固件版本，也可以使用 Seeed Project 下的 TRMNL 仓库。

- 访问 [Seeed 仓库](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)并克隆：

    ```
    git clone https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project.git
    ```

:::

2. **安装 PlatformIO**

   - 将 [PlatformIO](https://platformio.org/) 作为 VSCode 扩展或通过命令行进行安装。

3. **打开项目**

   - 在 VSCode 中打开克隆下来的 `firmware` 文件夹。

4. **选择正确的环境**

   - 在 `platformio.ini` 中选择 `seeed_xiao_esp32c3` 环境。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/214.png" style={{width:1000, height:'auto'}}/></div>

5. **连接你的设备**

   - 插入你的 XIAO 7.5" 电子纸面板。

6. **构建并上传**

   - 在 PlatformIO 中点击 "Upload" 按钮，或运行：

     ```
     pio run --target upload
     ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

   - 固件将被编译并上传到你的设备。

## 配置 Wi-Fi 并向 TRMNL 发送播放列表

要将 XIAO 7.5" 电子纸面板与 TRMNL 搭配使用并发送播放列表，你首先需要将设备连接到你的 Wi-Fi 网络。这个过程称为“WiFi 配对模式”，通过一个简单的强制门户（captive portal）来完成。请按照以下步骤操作：

> 💡 **Wi-Fi 故障排查？** 如果你在将设备连接到 Wi-Fi 时遇到问题，请参考 [TRMNL 设备 Wi-Fi 故障排查指南](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting)，其中提供了常见网络和路由器兼容性问题的解决方案。

### 上电并进入配网模式

- 在烧录 TRMNL 固件并为设备上电后，如果尚未连接到 Wi-Fi，它会自动进入配网模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/216.jpg" style={{width:700, height:'auto'}}/></div>

### 连接到 TRMNL Wi-Fi

- 在你的**手机**或**电脑**上，打开可用 Wi-Fi 网络列表。
- 找到名为 **TRMNL** 的网络并连接。（默认不需要密码。）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### 打开强制门户页面

- 连接成功后，打开一个网页浏览器（例如 Chrome 或 Edge）。
- 设备应会自动将你重定向到 TRMNL 配置页面。如果没有自动跳转，请在浏览器中手动访问 [http://4.3.2.1](http://4.3.2.1)。

### 输入你的 Wi-Fi 凭据

- 在配置页面上，你会看到可用 Wi-Fi 网络列表。
- **选择你的 2.4GHz Wi-Fi 网络**（TRMNL 不支持 5GHz 网络）。
- 输入你的 Wi-Fi 密码。
- 点击 **Save** 或 **Connect**。

> ⚠️ **重要提示：** 请务必使用 2.4GHz Wi-Fi 网络。ESP32-C3 芯片不支持 5GHz 网络。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### 设备连接到你的网络

- 设备会尝试连接到你的 Wi-Fi。
- 连接成功后，它会断开 TRMNL Wi-Fi，并加入你的家庭网络。
- 窗口会显示设备的 MAC 地址。**请记录下该 MAC 地址**，后续步骤中会用到。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **注意：** MAC 地址只会在强制门户页面中显示 1–2 秒。如果你错过了它，也可以：
>
> - 从 VS Code > PlatformIO 构建/上传日志中获取。
> - 使用 [usetrmnl.com/flash](https://usetrmnl.com/flash) 方法，并在烧录过程中查看 Chrome/Edge/Firefox 开发者控制台中的 MAC 地址。
> - 在你的路由器或 Mesh 网络应用的已连接设备列表中查找。
>
> 更多详细信息和截图，请参阅官方指南：[Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)

### 访问 TRMNL Web 界面

在你的 XIAO 7.5" ePaper Panel 已连接到 Wi-Fi 并记录了其 MAC 地址（设备 ID）之后，你可以将其添加到你的 TRMNL 账户中：

1. **打开 TRMNL Web 界面**  
   - 在你的电脑或移动设备上打开浏览器，并访问 [TRMNL web interface](https://trmnl.app)。

2. **进入 Devices 页面**  
   - 在 TRMNL 界面中，导航到 **Devices** 部分。

3. **添加新设备**  
   - 点击 **Add new device** 按钮，它通常位于 Devices 页面右上角或页面中央。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **输入 Device ID**  
   - 在弹出的窗口中，输入你在购买 TRMNL 访问权限时收到的 Device ID（这不是 MAC 地址）。请使用购买确认邮件或 TRMNL 仪表盘中的 Device ID。
   - 点击 **Add new device** 完成此过程。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **注册 XIAO 7.5" 设备 MAC 地址**

   为了在 XIAO epaper panel 和 TRMNL 之间建立连接，我们需要在 TRMNL 设置页面中绑定正确的设备 MAC 地址。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   - 你可以在 PlatformIO 上传过程中获取 MAC 地址（查看上传日志），或者从配网门户中获取（在完成 Wi-Fi 设置后会显示）。
   - 提前添加你的 MAC 地址有助于确保顺利的接入流程和设备管理。

   - 然后你可以为你的 ePaper Panel 设置自定义名称，并根据需要调整其他设置。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

现在，你的 XIAO 7.5" ePaper Panel 已经与 TRMNL 账户关联！你现在可以通过 TRMNL 界面直接向显示屏发送播放列表、图片或其他内容。

> 💡 **提示：** 如果你有多个 ePaper Panel，请为每个设备使用其唯一的 Device ID 重复上述步骤。

:::caution
在 TRMNL Web 界面中添加设备后，请进入该设备的设置页面，并**关闭** **Firmware Early Release** 和 **OTA Updates Enabled** 这两个选项。  

如果保持这些选项为开启状态，当设备连接到互联网时，可能会自动从 TRMNL 下载并安装固件更新。这些更新是为官方 TRMNL 硬件设计的，**与 XIAO 7.5" ePaper Panel 不兼容**。安装不兼容的固件可能会导致设备故障或无响应。

请始终保持这两个选项为关闭状态，以确保你的 XIAO ePaper Panel 稳定运行。
:::

## 了解 TRMNL 播放列表功能

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

TRMNL 的 Playlist 功能允许你精确控制 ePaper Panel 上显示的内容以及显示时间。下面是对主要部分和控制项的说明，对应上方截图：

### 播放列表概览

- **播放列表标题**：顶部显示你的 TRMNL 设备名称（例如，“MengDu's TRMNL”）。
- **显示时间范围**：你可以设置播放列表生效的时间范围（例如，从 00:00 到 23:45）。
- **更新间隔**：选择显示内容刷新的频率（例如，每 5 分钟）。
- **Add a Group / Add a Plugin**：使用这些按钮将播放列表组织成不同分组，或添加新的内容插件（例如天气、日历或自定义文本）。

### 播放列表条目

播放列表中的每一行代表一个将在 ePaper Panel 上显示的屏幕或小部件（仅供参考）：

1. **Weather**
   - 显示你所选位置的当前天气信息。
   - 绿色的 "Displayed now" 标签表示该屏幕当前正在你的设备上显示。
2. **Days Left This Year**
   - 显示本年度剩余天数的倒计时（例如，“2025”）。
   - 标签（例如 “9 days ago”）显示该屏幕上次更新或显示的时间。
3. **Custom Text**
   - 允许你显示任意自定义消息（例如，“Hello World”）。
   - 同样会显示其上次更新时间。

对于每个条目，你都有多个控制选项：

- **设置（齿轮图标）**：配置插件选项。
- **删除（X 图标）**：从播放列表中移除该条目。
- **预览（眼睛图标）**：预览该屏幕的显示效果。
- **排序（横条图标）**：拖动以更改屏幕的显示顺序。

### 智能播放列表

- **Smart Playlist 选项**：在底部，你可以选择是否自动跳过内容未发生变化的屏幕（例如，“Never skip screens”）。

> 📖 想要了解更多？请阅读 [Smart Playlists 博客文章](https://usetrmnl.com/blog/smart-playlists)，获取高级技巧和详细说明。

这种灵活的播放列表系统让你可以完全自定义 ePaper Panel 显示的内容、更新频率以及显示顺序。你可以自由组合不同插件，创建符合自己需求的个性化信息面板。

## 探索 TRMNL 插件

TRMNL 的插件系统让你的 ePaper Panel 真正变得强大且可定制。插件是模块化的应用或小部件，你可以将其添加到设备上，以显示各种信息和内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

### 什么是插件？

插件是独立的内容块，可以显示天气、日历事件、股票价格、RSS 源、励志名言、GitHub 活动等多种信息。你可以自由组合插件，创建符合自己需求的仪表盘。

### 已连接插件

在 Plugins 页面顶部，你会看到已经连接到你 TRMNL 账户的所有插件。它们已准备好被添加到播放列表，并显示在 ePaper Panel 上。示例包括：

- **Weather**：显示当前天气状况。
- **Days Left This Year**：显示距离年末的倒计时。
- **Stock Price**：跟踪你关注的股票。
- **RSS Feed**：显示新闻或博客更新。
- **Reddit, Hacker News**：显示热门帖子。
- **Language Learning, Motivational Quote, Custom Text**：通过学习工具或自定义消息个性化你的显示内容。

### 插件市场

在已连接插件下方，你会看到插件市场。在这里，你可以浏览、搜索并发现新的插件添加到设备中。插件按类别和标签（例如 #productivity、#news、#ecommerce 等）进行组织，方便你快速找到所需内容。

- **浏览与搜索**：使用搜索栏或标签快速找到你感兴趣的插件。
- **添加插件**：点击任意插件即可将其连接到你的账户，并开始在播放列表中使用。

开发者甚至可以创建并发布自己的插件供他人使用，使整个生态系统不断扩展，带来更多可能性（[了解更多关于插件创建的信息](https://docs.usetrmnl.com/go/plugin-marketplace/introduction)）。

---

如果你在使用 TRMNL 时有任何疑问，或想探索更多高级功能，欢迎阅读 TRMNL 官方文档以获取更多信息：[https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)

## 特别鸣谢

特别感谢整个 **TRMNL 团队** 对本项目给予的大力支持和宝贵帮助。尤其要感谢 **Bogdan**、**Ryan Kulp**、**Fr3d**、**Schappi** 以及所有其他团队成员，在整个开发和文档编写过程中所付出的努力与协助。

你们的专业知识和投入使这次集成成为可能，并极大提升了 XIAO 7.5" ePaper Panel 社区的用户体验。

## 故障排查

### 如何重新配置网络？

按下 XIAO 上的 Reset 按钮并松开，然后按住 Boot 按钮 5 秒钟。设备将返回到初始 TRMNL 界面并激活 AP。

## 资源

- **[STP]**: [3D Model enclosure](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [ePaper Driver Board SCH PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[GITHUB]**: [TRMNL firmware repository](https://github.com/usetrmnl/firmware)
- **[GITHUB]**: [Seeed_TRMNL_Eink_Project repository](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
