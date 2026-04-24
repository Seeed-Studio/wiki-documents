---
description: 本文介绍如何在 TRMNL 中使用 reTerminal E 系列电子纸显示屏。
title: 兼容 TRMNL
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.webp
slug: /reterminal_e10xx_trmnl
sku: 100073581
sidebar_position: 3
last_update:
  date: 09/19/2025
  author: Citric
createdAt: '2025-05-21'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/reterminal_e10xx_trmnl/
---

:::caution
TRMNL 1.6.7 版本现已正式支持 reTerminal E1001。由于软件架构限制，目前**尚不**支持 reTerminal E1002 全彩电子墨水屏。
:::

# reTerminal E 系列电子纸显示屏兼容 TRMNL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.jpg" style={{width:700, height:'auto'}}/></div>

## 什么是 [TRMNL](https://trmnl.app/)？

TRMNL 是一个创新平台，旨在帮助人们在日益分心的数字世界中保持专注与平静。TRMNL 成立于 2023 年，很快就成为 E Ink® 仪表盘管理的领先解决方案，以独特的方式展示信息，同时避免传统屏幕带来的持续通知和干扰。

从本质上讲，TRMNL 建立在这样一种理念之上：技术应当提升我们的生活，而不是不断索取我们的注意力。该平台通过 E Ink® 显示屏，以优雅的方式让你一眼查看重要信息，打造更专注、更少打扰的技术体验。

### 为什么要使用 TRMNL？

集成 TRMNL 将带来以下几个显著优势：

- **简化仪表盘创建**：TRMNL 不断增长的应用和集成库，让你无需复杂编程即可轻松创建自定义信息显示界面
- **低功耗**：TRMNL 高效的软件与我们 E Ink® 显示屏极低的功耗相结合，打造出极其节能的解决方案
- **无干扰信息展示**：在没有传统屏幕持续通知和视觉疲劳的情况下，获取你所需的信息
- **定期更新**：TRMNL 处于积极开发中，每周都会加入新功能和新集成，不断拓展你的显示屏使用可能性
- **对开发者友好**：借助 TRMNL 的开放 API 和开发者工具，你可以根据自身需求创建自定义插件和集成

通过将 TRMNL 强大的平台与我们高品质的 E Ink® reTerminal E 系列电子纸显示屏相结合，我们为用户提供了一种优雅的解决方案，用于创建个性化、低功耗的信息仪表盘，同时兼顾注意力与时间。

## TRMNL 入门

### TRMNL 账号设置与 TRMNL 访问权限

在将套件连接到 TRMNL 之前，你需要先完成以下步骤：

1. **购买 TRMNL 访问权限**

   - 在此购买 TRMNL 网页应用 + 设备功能的访问权限：[https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - 这将为你提供使用 TRMNL 平台所需的凭据
   - 前往 [https://usetrmnl.com/claim-a-device](https://usetrmnl.com/claim-a-device) 激活虚拟设备（购买后可能需要等待最多 10 分钟）

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/211.png" style={{width:700, height:'auto'}}/></div>

2. **创建 TRMNL 账号**

   - 访问 [TRMNL 官网](https://usetrmnl.com)
   - 点击 "Sign Up" 创建新账号
   - 按提示完成注册流程

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/210.png" style={{width:900, height:'auto'}}/></div>

:::note
你的 TRMNL 凭据属于敏感信息。切勿公开分享，也不要将其提交到版本控制系统中。
:::

在你准备好材料并购买 TRMNL 访问权限后，就可以继续将设备连接到 TRMNL 平台。如果遇到任何问题或有疑问，可以通过 team@usetrmnl.com 直接联系 TRMNL 团队。

### 所需材料

从现在开始，请准备以下任意一款 reTerminal，以便后续完成本教程内容。

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/145.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/146.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### 固件烧录

如果你仍在使用 reTerminal E 系列的出厂固件，那么在将设备插入 TRMNL 之前，需要先通过以下方法烧录 TRMNL 固件。

#### 方法一：通过 TRMNL Web Flasher 烧录（最简单）

:::tip
请使用 **FW 1.6.7** 或更新版本的固件以确保与 Seeed 兼容。
:::

1. **打开 TRMNL Web Flasher**

   - 访问 [https://usetrmnl.com/flash](https://usetrmnl.com/flash)
   - 该工具允许你直接在浏览器中为设备烧录固件。
   - 按照屏幕上的指引完成烧录流程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/160.png" style={{width:700, height:'auto'}}/></div>

---

#### 方法二：通过 Sensecraft HMI 平台烧录

1. 访问 [Sensecraft HMI 平台](https://sensecraft.seeed.cc/hmi/device)

2. 选择你的设备

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/164.jpg" style={{width:700, height:'auto'}}/></div>

3. 选择 TRMNL 固件。如果你想烧录 HMI 固件，也可以在此选择。之后点击 **Full Flash** 和 **Flash**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/162.jpg" style={{width:700, height:'auto'}}/></div>

4. 将设备连接到电脑并选择串口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/163.jpg" style={{width:700, height:'auto'}}/></div>

5. 如果一切顺利，屏幕会刷新并显示 TRMNL 标志和 MAC 地址。现在你就可以开始使用它了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/165.jpeg" style={{width:700, height:'auto'}}/></div>

---

#### 方法三：从源码构建并烧录（适用于高级用户/开发者）

1. **克隆固件仓库**

- 访问[官方固件仓库](https://github.com/usetrmnl/trmnl-firmware)并克隆：

    ```
    git clone https://github.com/usetrmnl/trmnl-firmware.git
    ```

:::tip

有时我们会更新代码，需要向 TRMNL 提交 PR 并在审核后才能展示。如果你想第一时间使用最新固件版本，也可以使用 Seeed Project 下的 TRMNL 仓库。

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

- 在 `platformio.ini` 中，

  - 如果你使用的是 reTerminal E1001，请选择 `seeed_reTerminal_E1001` 环境。

  <!-- - If you are using reTerminal E1002, select the `seeed_reTerminal_E1002` environment. -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/26.png" style={{width:1000, height:'auto'}}/></div>

5. **连接你的设备**

   - 插入你的 reTerminal E 系列电子纸显示屏设备。

6. **构建并上传**

   - 在 PlatformIO 中点击 "Upload" 按钮，或运行：

    ```
    pio run --target upload
    ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

   - 固件将被编译并上传到你的设备。

## 配置 Wi-Fi 并向 TRMNL 发送播放列表

要将 reTerminal E 系列电子纸显示屏与 TRMNL 搭配使用并发送播放列表，你首先需要将设备连接到 Wi-Fi 网络。此过程称为“WiFi 配对模式”，通过一个简单的强制门户页面完成。请按照以下步骤操作：

> 💡 **Wi-Fi 故障排查？** 如果你在将设备连接到 Wi-Fi 时遇到问题，请参考 [TRMNL 设备 Wi-Fi 故障排查指南](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting)，获取常见网络和路由器兼容性问题的解决方案。

### 开机并进入配网模式

- 在烧录 TRMNL 固件并为设备上电后，如果尚未连接到 Wi-Fi，它会自动进入配网模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/161.jpg" style={{width:600, height:'auto'}}/></div>

### 连接到 TRMNL Wi-Fi

- 在你的**手机**或**电脑**上，打开可用 Wi-Fi 网络列表。
- 找到名为 **TRMNL** 的网络并连接。（默认不需要密码。）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### 打开强制门户页面

- 连接成功后，打开浏览器（例如 Chrome 或 Edge）。
- 设备应会自动将你重定向到 TRMNL 配置页面。如果没有，请在浏览器中手动访问 [http://4.3.2.1](http://4.3.2.1)。

### 输入你的 Wi-Fi 凭据

- 在配置页面，你会看到可用 Wi-Fi 网络的列表。
- **选择你的 2.4GHz Wi-Fi 网络**（reTerminal E 系列电子纸显示屏不支持 5GHz 网络）。
- 输入你的 Wi-Fi 密码。
- 点击 **Save** 或 **Connect**。

> ⚠️ **重要：** 请务必使用 2.4GHz Wi-Fi 网络。reTerminal E 系列不支持 5GHz 网络。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### 设备连接到你的网络

- 设备会尝试连接到你的 Wi-Fi。
- 连接成功后，它会从 TRMNL Wi-Fi 断开并加入你的家庭网络。
- 窗口会显示设备的 MAC 地址。**请记录下这个 MAC 地址**，你将在后续步骤中用到它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **注意：** MAC 地址只会在强制门户中显示 1-2 秒。如果你错过了它，你也可以：
>
> - 从 VS Code > PlatformIO 的构建/上传日志中获取。
> - 使用 [usetrmnl.com/flash](https://usetrmnl.com/flash) 方法，并在刷写过程中在 Chrome/Edge/Firefox 开发者控制台中查看 MAC 地址。
> - 在你的路由器或 Mesh 网络应用的已连接设备列表中找到它。
>
> 如需更多细节和截图，请参阅官方指南：[Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)

### 访问 TRMNL Web 界面

在你的 reTerminal E 系列电子纸显示屏连接到 Wi-Fi 并且你已经记录了它的 MAC 地址（设备 ID）之后，你就可以将它添加到你的 TRMNL 账户中：

1. **打开 TRMNL Web 界面**  
   - 在你的电脑或移动设备上打开浏览器，访问 [TRMNL web interface](https://trmnl.app)。

2. **进入 Devices 页面**  
   - 在 TRMNL 界面中，导航到 **Devices** 部分。

3. **添加新设备**  
   - 点击 **Add new device** 按钮，它通常位于 Devices 页面右上角或页面中央。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **输入 Device ID**  
   - 在弹出的窗口中，输入你在购买 TRMNL 访问权限时获得的 Device ID（这不是 MAC 地址）。请使用你在购买确认邮件或 TRMNL 控制面板中获得的 Device ID。
   - 点击 **Add new device** 完成此过程。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **注册 reTerminal E 系列电子纸显示屏的 MAC 地址**

   为了在 reTerminal E 系列电子纸显示屏和 TRMNL 之间建立连接，我们需要在 TRMNL 设置页面中绑定正确的设备 MAC 地址。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   - 你可以在 PlatformIO 上传过程中获取 MAC 地址（查看上传日志），或者从配网门户中获取（它会在 Wi-Fi 设置完成后显示）。
   - 提前添加你的 MAC 地址有助于确保顺畅的接入流程和设备管理。

   - 然后你可以为 reTerminal E 系列电子纸显示屏设置自定义名称，并根据需要调整其他设置。

现在，你的 reTerminal E 系列电子纸显示屏已经与 TRMNL 账户关联！你现在可以直接从 TRMNL 界面向显示屏发送播放列表、图片或其他内容。

> 💡 **提示：** 如果你有多台 reTerminal E 系列设备，请为每台设备使用其唯一的 Device ID 重复上述步骤。

:::caution
在 TRMNL Web 界面中添加设备后，请进入该设备的设置页面，并**关闭** **Firmware Early Release** 和 **OTA Updates Enabled** 这两个选项。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

如果保持这些选项为启用状态，你的设备在连接到互联网时可能会自动从 TRMNL 下载并安装固件更新。这些更新是为官方 TRMNL 硬件设计的，**与 reTerminal E 系列不兼容**。安装不兼容的固件可能会导致设备故障或无响应。

请始终保持这两个选项为禁用状态，以确保 reTerminal E 系列的稳定运行。
:::

## 了解 TRMNL 播放列表功能

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

TRMNL 播放列表功能允许你精确控制 reTerminal E 系列电子纸显示屏上显示的内容以及显示时间。下面是对主要区域和控件的说明，对应上方截图：

### 播放列表概览

- **播放列表标题**：顶部显示你的 TRMNL 设备名称（例如 “MengDu's TRMNL”）。
- **显示时间范围**：你可以设置播放列表生效的时间范围（例如，从 00:00 到 23:45）。
- **更新间隔**：选择显示内容刷新的频率（例如，每 5 分钟）。
- **Add a Group / Add a Plugin**：使用这些按钮将播放列表组织成不同分组，或添加新的内容插件（例如天气、日历或自定义文本）。

### 播放列表条目

播放列表中的每一行代表一个将在 reTerminal E 系列电子纸显示屏上显示的屏幕或小部件（仅供参考）：

1. **Weather**
   - 显示你所选位置的当前天气信息。
   - 绿色的 “Displayed now” 标签表示该屏幕当前正在你的设备上显示。
2. **Days Left This Year**
   - 显示本年度剩余天数的倒计时（例如 “2025”）。
   - 标签（例如 “9 days ago”）显示该屏幕上次更新或显示的时间。
3. **Custom Text**
   - 允许你显示任意自定义消息（例如 “Hello World”）。
   - 同样会显示其上次更新的时间。

对于每个条目，你都有多个控制选项：

- **设置（齿轮图标）**：配置插件选项。
- **删除（X 图标）**：从播放列表中移除该条目。
- **预览（眼睛图标）**：预览该屏幕的显示效果。
- **排序（横条图标）**：拖动以更改屏幕的显示顺序。

### 智能播放列表

- **Smart Playlist 选项**：在底部，你可以选择是否自动跳过内容未发生变化的屏幕（例如 “Never skip screens”）。

> 📖 想要了解更多？请阅读 [Smart Playlists 博客文章](https://usetrmnl.com/blog/smart-playlists)，获取高级技巧和详细信息。

这个灵活的播放列表系统让你可以完全自定义 reTerminal E 系列的显示内容、更新频率以及显示顺序。你可以自由组合不同插件，创建符合你需求的个性化信息面板。

## 探索 TRMNL 插件

TRMNL 的插件系统让你的 reTerminal E 系列电子纸显示屏真正变得强大且可定制。插件是模块化的应用或小部件，你可以将它们添加到设备上，以显示各种信息和内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

### 什么是插件？

插件是独立的内容块，可以显示天气、日历事件、股票价格、RSS 源、励志语录、GitHub 活动等多种信息。你可以自由组合插件，创建符合你需求的仪表盘。

### 已连接的插件

在 Plugins 页面顶部，你会看到已经连接到你 TRMNL 账户的所有插件。它们已经可以被添加到播放列表中，并显示在 reTerminal E 系列上。示例包括：

- **Weather**：显示当前天气状况。
- **Days Left This Year**：显示距离年末的倒计时。
- **Stock Price**：跟踪你关注的股票。
- **RSS Feed**：显示新闻或博客更新。
- **Reddit, Hacker News**：显示热门帖子。
- **Language Learning, Motivational Quote, Custom Text**：通过学习工具或自定义消息个性化你的显示屏。

### 插件市场

在已连接插件下方，你会看到插件市场。在这里你可以浏览、搜索并发现新的插件，将它们添加到你的设备。插件按类别和标签（例如 #productivity、#news、#ecommerce 等）进行组织，方便你快速找到所需内容。

- **浏览与搜索**：使用搜索栏或标签快速找到你感兴趣的插件。
- **添加插件**：点击任意插件即可将其连接到你的账户，并开始在播放列表中使用。

开发者甚至可以创建并发布自己的插件供他人使用，使整个生态系统不断扩展，带来新的可能性（[learn more about plugin creation](https://docs.usetrmnl.com/go/plugin-marketplace/introduction)）。

---

如果你在使用 TRMNL 时有任何疑问，或想探索更多高级功能，欢迎阅读 TRMNL 官方文档以获取更多信息：[https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)

## 特别鸣谢

特别感谢整个 **TRMNL 团队** 对本项目给予的大力支持和宝贵帮助。尤其要感谢 **Bogdan**、**Ryan Kulp**、**Fr3d** 以及所有其他团队成员在整个开发和文档编写过程中所付出的努力与协助。

你们的专业知识和投入使这次集成成为可能，并极大提升了 reTerminal E 系列电子纸显示屏社区的用户体验。

## 故障排查

### 如何重新配置网络？

长按绿色按钮五秒钟。设备将返回初始 TRMNL 界面并激活 AP。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
