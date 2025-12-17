---
description: 本文介绍如何将 reTerminal E 系列 ePaper 显示器与 TRMNL 配合使用。
title: reTerminal E 系列 ePaper 显示器与 TRMNL 配合使用
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.webp
slug: /cn/reterminal_e10xx_trmnl
sidebar_position: 1
last_update:
  date: 09/19/2025
  author: Citric
---

:::caution
TRMNL 版本 1.6.7 现已正式支持 reTerminal E1001。由于软件架构限制，reTerminal E1002 全彩电子墨水显示器的支持**尚未**提供。
:::

# reTerminal E 系列 ePaper 显示器与 TRMNL 配合使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/140.jpg" style={{width:700, height:'auto'}}/></div>

## 什么是 [TRMNL](https://trmnl.app/)？

TRMNL 是一个创新平台，旨在帮助人们在日益分散注意力的数字世界中保持专注和冷静。TRMNL 成立于 2023 年，已迅速成为 E Ink® 仪表板管理的领先解决方案，提供了一种独特的信息显示方法，避免了传统屏幕的持续通知和干扰。

TRMNL 的核心理念是技术应该增强我们的生活，而不需要持续的关注。该平台提供了一种优雅的方式，通过 E Ink® 显示器一目了然地查看重要信息，创造了更加专注且不那么侵扰的技术体验。

### 为什么使用 TRMNL？

TRMNL 的集成将带来几个引人注目的好处：

- **简化仪表板创建**：TRMNL 不断增长的应用程序和集成库使得创建自定义信息显示变得容易，无需复杂的编程
- **低功耗**：TRMNL 高效软件与我们 E Ink® 显示器的最小功耗要求相结合，创造了极其节能的解决方案
- **无干扰信息**：获取您需要的信息，而无需传统屏幕带来的持续通知和眼部疲劳
- **定期更新**：TRMNL 的积极开发意味着每周都会添加新功能和集成，不断扩展您显示器的可能性
- **开发者友好**：通过 TRMNL 的开放 API 和开发者工具，您可以为特定需求创建自定义插件和集成

通过将 TRMNL 强大的平台与我们高质量的 E Ink® reTerminal E 系列 ePaper 显示器相结合，我们为用户提供了一个优雅的解决方案，用于创建个性化、低功耗的信息仪表板，既尊重他们的注意力，也尊重他们的时间。

## TRMNL 入门指南

### TRMNL 账户设置和 TRMNL 访问

在将您的套件连接到 TRMNL 之前，您需要：

1. **购买 TRMNL 访问权限**

   - 在以下网址购买 TRMNL 网络应用程序 + 设备功能的访问权限：[https://shop.usetrmnl.com/products/byod](https://shop.usetrmnl.com/products/byod)
   - 这将为您提供使用 TRMNL 平台所需的凭据
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

一旦您拥有材料并购买了 TRMNL 访问权限，就可以继续将设备连接到 TRMNL 平台。如果您遇到任何问题或有疑问，可以直接联系 TRMNL 团队：team@usetrmnl.com。

### 所需材料

立即开始。请准备以下任一 reTerminal 以完成后续教程内容。

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
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### 固件烧录

如果您仍在使用 reTerminal E 系列的出厂固件，那么在将设备插入 TRMNL 之前，您需要使用以下方法烧录 TRMNL 固件。

#### 方法 1：通过 TRMNL Web 烧录器烧录（最简单）

:::tip
请使用 **FW 1.6.7** 或更新的固件以获得 Seeed 兼容性。
:::

1. **前往 TRMNL Web 烧录器**

   - 访问 [https://usetrmnl.com/flash](https://usetrmnl.com/flash)
   - 此工具允许您直接从浏览器烧录设备。
   - 按照屏幕上的说明完成烧录过程。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/160.png" style={{width:700, height:'auto'}}/></div>

---

#### 方法 2：通过 Sensecraft HMI 平台烧录

1. 访问 [Sensecraft HMI 平台](https://sensecraft.seeed.cc/hmi/device)

2. 选择您的设备

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/164.jpg" style={{width:700, height:'auto'}}/></div>

3. 选择 TRMNL 固件。如果您想烧录 HMI 固件，也可以选择它们。之后，点击 **Full Flash** 和 **Flash**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/162.jpg" style={{width:700, height:'auto'}}/></div>

4. 将设备连接到计算机并选择串口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/163.jpg" style={{width:700, height:'auto'}}/></div>

5. 如果一切顺利，屏幕将刷新并显示 TRMNL 标志和 MAC 地址。现在您可以开始使用了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/165.jpeg" style={{width:700, height:'auto'}}/></div>

---

#### 方法 3：从源代码构建和烧录（适用于高级用户/开发者）

1. **克隆固件仓库**

- 访问 [官方固件仓库](https://github.com/usetrmnl/trmnl-firmware) 并克隆它：

    ```
    git clone https://github.com/usetrmnl/trmnl-firmware.git
    ```

:::tip

有时我们更新代码需要向 TRMNL 提交 PR 并在显示之前进行审查，如果您想第一时间使用最新的固件版本，也可以使用 Seeed Project 下的 TRMNL 仓库。

- 访问 [Seeed 仓库](https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project) 并克隆它：

    ```
    git clone https://github.com/Seeed-Projects/Seeed_TRMNL_Eink_Project.git
    ```

:::

2. **安装 PlatformIO**

   - 将 [PlatformIO](https://platformio.org/) 安装为 VSCode 扩展或通过命令行安装。

3. **打开项目**

   - 在 VSCode 中打开克隆的 `firmware` 文件夹。

4. **选择正确的环境**

- 在 `platformio.ini` 中，

  - 如果您使用的是 reTerminal E1001，选择 `seeed_reTerminal_E1001` 环境。

  <!-- - 如果您使用的是 reTerminal E1002，选择 `seeed_reTerminal_E1002` 环境。 -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/26.png" style={{width:1000, height:'auto'}}/></div>

5. **连接您的设备**

   - 插入您的 reTerminal E 系列 ePaper 显示器设备。

6. **构建和上传**

   - 在 PlatformIO 中，点击 "Upload" 按钮，或运行：

    ```
    pio run --target upload
    ```

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/215.png" style={{width:1000, height:'auto'}}/></div>

   - 固件将被编译并上传到您的设备。

## 配置 Wi-Fi 并向 TRMNL 发送播放列表

要将您的 reTerminal E 系列 ePaper 显示器与 TRMNL 配合使用并发送播放列表，您首先需要将设备连接到您的 Wi-Fi 网络。此过程称为"WiFi 配对模式"，通过简单的强制门户完成。请按照以下步骤操作：

> 💡 **Wi-Fi 故障排除？** 如果您在将设备连接到 Wi-Fi 时遇到问题，请参考 [TRMNL 设备 Wi-Fi 故障排除指南](https://help.usetrmnl.com/en/articles/10193157-device-wifi-troubleshooting) 以获得常见网络和路由器兼容性问题的解决方案。

### 开机并进入配置模式

- 烧录 TRMNL 固件并为设备通电后，如果尚未连接到 Wi-Fi，它将自动进入配置模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/161.jpg" style={{width:600, height:'auto'}}/></div>

### 连接到 TRMNL Wi-Fi

- 在您的**手机**或**计算机**上，打开可用 Wi-Fi 网络列表。
- 查找名为 **TRMNL** 的网络并连接到它。（默认情况下不需要密码。）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/217.png" style={{width:400, height:'auto'}}/></div>

### 打开强制门户

- 连接后，打开网络浏览器（如 Chrome 或 Edge）。
- 设备应自动将您重定向到 TRMNL 配置页面。如果没有，请在浏览器中手动访问 [http://4.3.2.1](http://4.3.2.1)。

### 输入您的 Wi-Fi 凭据

- 在配置页面上，您将看到可用 Wi-Fi 网络的列表。
- **选择您的 2.4GHz Wi-Fi 网络**（reTerminal E Series ePaper Display 不支持 5GHz 网络）。
- 输入您的 Wi-Fi 密码。
- 点击 **Save** 或 **Connect**。

> ⚠️ **重要提示：** 确保使用 2.4GHz Wi-Fi 网络。reTerminal E Series 不支持 5GHz 网络。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/218.png" style={{width:800, height:'auto'}}/></div>

### 设备连接到您的网络

- 设备将尝试连接到您的 Wi-Fi。
- 连接成功后，它将断开与 TRMNL Wi-Fi 的连接并加入您的家庭网络。
- 窗口将显示设备的 MAC 地址。**请记录 MAC 地址**，因为您在后续步骤中会需要它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/219.png" style={{width:800, height:'auto'}}/></div>

> ⚠️ **注意：** MAC 地址在强制门户中仅显示 1-2 秒。如果您错过了，您也可以：
>
> - 从 VS Code > PlatformIO 构建/上传日志中获取。
> - 使用 [usetrmnl.com/flash](https://usetrmnl.com/flash) 方法，并在刷写过程中检查 Chrome/Edge/Firefox 开发者控制台中的 MAC 地址。
> - 在您的路由器或 Mesh 网络应用的已连接设备列表中找到它。
>
> 有关更多详细信息和截图，请参阅官方指南：[Finding your TRMNL MAC address](https://help.usetrmnl.com/en/articles/10614205-finding-your-trmnl-mac-address)

### 访问 TRMNL Web 界面

在您的 reTerminal E Series ePaper Display 连接到 Wi-Fi 并记录其 MAC 地址（设备 ID）后，您可以将其添加到您的 TRMNL 账户：

1. **打开 TRMNL Web 界面**  
   - 在您的计算机或移动设备上，打开浏览器并访问 [TRMNL web interface](https://trmnl.app)。

2. **转到设备页面**  
   - 在 TRMNL 界面中，导航到 **Devices** 部分。

3. **添加新设备**  
   - 点击 **Add new device** 按钮，通常位于右上角或设备页面的中央。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/220.png" style={{width:800, height:'auto'}}/></div>

4. **输入设备 ID**  
   - 在弹出窗口中，输入您购买 TRMNL 访问权限时收到的设备 ID（这不是 MAC 地址）。使用购买确认邮件或 TRMNL 仪表板中的设备 ID。
   - 点击 **Add new device** 完成该过程。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/212.png" style={{width:700, height:'auto'}}/></div>

5. **注册 reTerminal E Series ePaper Display MAC 地址**

   为了在 reTerminal E Series ePaper Display 和 TRMNL 之间建立连接，我们需要在 TRMNL 设置页面中绑定正确的设备 MAC 地址。

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/223.png" style={{width:900, height:'auto'}}/></div>

   - 您可以在 PlatformIO 上传过程中获取 MAC 地址（检查上传日志），或从配置门户获取（在 Wi-Fi 设置后会显示）。
   - 提前添加您的 MAC 地址有助于确保顺畅的入门过程和设备管理。

   - 然后您可以为您的 reTerminal E Series ePaper Display 设置自定义名称，并根据需要调整其他设置。

您的 reTerminal E Series ePaper Display 现在已链接到您的 TRMNL 账户！您现在可以直接从 TRMNL 界面向您的显示器发送播放列表、图像或其他内容。

> 💡 **提示：** 如果您有多个 reTerminal E Series，请使用它们各自的唯一设备 ID 为每个设备重复上述步骤。

:::caution
在 TRMNL web 界面中添加设备后，请转到设备的设置页面并**关闭** **Firmware Early Release** 和 **OTA Updates Enabled** 两个选项。  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/213.png" style={{width:700, height:'auto'}}/></div>

如果这些选项保持启用状态，您的设备在连接到互联网时可能会自动下载并安装来自 TRMNL 的固件更新。这些更新是为官方 TRMNL 硬件设计的，**与 reTerminal E Series 不兼容**。安装不兼容的固件可能导致您的设备故障或无响应。

始终保持两个选项都禁用，以确保您的 reTerminal E Series 稳定运行。
:::

## 了解 TRMNL 播放列表功能

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/221.png" style={{width:1000, height:'auto'}}/></div>

TRMNL 播放列表功能允许您精确控制在 reTerminal E Series ePaper Display 上显示什么内容以及何时显示。以下是主要部分和控件的详细说明，如上面的截图所示：

### 播放列表概览

- **播放列表标题**：在顶部，您可以看到 TRMNL 设备的名称（例如，"MengDu's TRMNL"）。
- **显示时间范围**：您可以设置播放列表活跃的时间范围（例如，从 00:00 到 23:45）。
- **更新间隔**：选择显示器更新的频率（例如，每 5 分钟）。
- **Add a Group / Add a Plugin**：使用这些按钮将播放列表组织成组或添加新的内容插件（如天气、日历或自定义文本）。

### 播放列表项目

播放列表中的每一行代表将在您的 reTerminal E Series ePaper Display 上显示的屏幕或小部件（仅供参考）：

1. **Weather**
   - 显示您选定位置的当前天气信息。
   - 绿色的 "Displayed now" 标签表示此屏幕当前正在您的设备上显示。
2. **Days Left This Year**
   - 显示当前年份剩余天数的倒计时（例如，"2025"）。
   - 标签（例如，"9 days ago"）显示此屏幕上次更新或显示的时间。
3. **Custom Text**
   - 让您显示任何自定义消息（例如，"Hello World"）。
   - 也显示上次更新的时间。

对于每个项目，您有几个控件：

- **Settings（齿轮图标）**：配置插件的选项。
- **Delete（X 图标）**：从播放列表中删除项目。
- **Preview（眼睛图标）**：预览屏幕的外观。
- **Reorder（条形图标）**：拖动以更改屏幕显示的顺序。

### 智能播放列表

- **智能播放列表选项**：在底部，您可以选择是否自动跳过内容未更改的屏幕（例如，"Never skip screens"）。

> 📖 想了解更多？阅读 [Smart Playlists blog post](https://usetrmnl.com/blog/smart-playlists) 获取高级技巧和详细信息。

这个灵活的播放列表系统让您完全自定义 reTerminal E Series 的显示内容、更新频率和显示顺序。您可以混合搭配不同的插件来创建符合您需求的个性化仪表板。

## 探索 TRMNL 插件

TRMNL 的插件系统是让您的 reTerminal E Series ePaper Display 真正强大和可定制的关键。插件是模块化的应用程序或小部件，您可以将其添加到设备中以显示各种信息和内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/222.png" style={{width:900, height:'auto'}}/></div>

### 什么是插件？

插件是独立的内容块，可以显示天气、日历事件、股票价格、RSS 订阅、励志名言、GitHub 活动等内容。您可以混合搭配插件来创建符合您需求的仪表板。

### 已连接的插件

在插件页面的顶部，您将看到已连接到 TRMNL 账户的所有插件。这些插件已准备好添加到您的播放列表并在 reTerminal E Series 上显示。示例包括：

- **Weather**：显示当前天气状况。
- **Days Left This Year**：年末倒计时。
- **Stock Price**：跟踪您喜爱的股票。
- **RSS Feed**：显示新闻或博客更新。
- **Reddit, Hacker News**：显示热门帖子。
- **Language Learning, Motivational Quote, Custom Text**：使用学习工具或自定义消息个性化您的显示器。

### 插件市场

在您已连接的插件下方，您会找到插件市场。在这里您可以浏览、搜索和发现要添加到设备的新插件。插件按类别和标签（如 #productivity、#news、#ecommerce 等）组织，便于找到您需要的内容。

- **浏览和搜索**：使用搜索栏或标签快速找到您感兴趣的插件。
- **添加插件**：点击任何插件将其连接到您的账户并开始在播放列表中使用。

开发者甚至可以创建并发布自己的插件供他人使用，使生态系统不断扩展新的可能性（[了解更多关于插件创建的信息](https://docs.usetrmnl.com/go/plugin-marketplace/introduction)）。

---

如果您对使用 TRMNL 有任何疑问或想探索更多高级功能，欢迎阅读官方 TRMNL 文档获取更多信息：[https://docs.usetrmnl.com/go](https://docs.usetrmnl.com/go)

## 特别感谢

特别感谢整个 **TRMNL 团队**对这个项目的大力支持和宝贵帮助。特别是，我们要感谢 **Bogdan**、**Ryan Kulp**、**Fr3d** 以及所有其他团队成员在整个开发和文档编写过程中的奉献和协助。

您的专业知识和承诺使这种集成成为可能，并极大地改善了 reTerminal E Series ePaper Display 社区的用户体验。

## 故障排除

### 如何重新配置网络？

按住绿色按钮五秒钟。设备将返回到初始 TRMNL 界面并激活 AP。

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
