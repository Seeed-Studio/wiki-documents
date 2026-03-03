---
description: 介绍如何使用 Espressif 的 Matter 部署工具快速体验 Matter 照明功能。
title: 使用 XIAO ESP32 快速入门 Matter
keywords:
- ESP-IDF
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/getting_started_with_matter
last_update:
  date: 05/11/2024
  author: Citric
---

# 使用 XIAO ESP32 系列快速入门 Matter

:::tip
本文是 Seeed Studio XIAO ESP32 开发 Matter 系列的第二个教程。如果您还没有配置 ESP-IDF 环境，请先阅读第一个教程：

- **[在 XIAO 上使用 Espressif ESP-IDF 进行开发](https://wiki.seeedstudio.com/cn/xiao_idf)**

本教程适用于 XIAO ESP32C3、XIAO ESP32S3。由于 GPIO8 引脚未引出，Espressif 提供的 Matter 示例暂时不适用于 XIAO ESP32C6。
:::

在智能家居技术领域，Matter 已经成为一个改变游戏规则的技术，有望彻底改变设备之间的通信和交互方式。Matter 是一个开源的标准化协议，能够实现来自不同制造商的智能家居设备之间的无缝互操作性。通过提供通用语言和框架，Matter 旨在简化物联网设备的开发和部署，创造更加互联和用户友好的智能家居体验。

作为开发者或爱好者，您可能渴望探索 Matter 的潜力并开始构建自己的 Matter 兼容设备。这就是 XIAO ESP32 系列和 ESPLaunchPad 发挥作用的地方。XIAO ESP32 系列，特别是 XIAO ESP32C3、XIAO ESP32S3 和 XIAO ESP32C6，是紧凑而强大的开发板，为创建 Matter 设备提供了理想的平台。凭借其强大的功能和广泛的外设接口，这些开发板为您的 Matter 项目提供了必要的硬件基础。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/15.png" style={{width:800, height:'auto'}}/></div>

为了简化开发过程并使其更易于使用，Espressif Systems 推出了 ESPLaunchPad，这是一个综合平台，简化了 ESP32 设备的固件刷写和配置。ESPLaunchPad 利用 ESP RainMaker 生态系统的强大功能，允许您使用智能手机应用程序轻松配置和控制您的设备。通过将 XIAO ESP32 系列与 ESPLaunchPad 结合使用，您可以快速开始 Matter 开发并体验这一变革性协议的优势。

在本教程中，我们将指导您使用 ESPLaunchPad 快速将固件刷写到 XIAO ESP32 开发板上，并使用二维码与您的 iPhone 配对。通过遵循这些步骤，您将能够在手机和 XIAO ESP32 设备之间建立连接，使您能够无缝地控制和与其交互。这种实践体验将为您提供对 Matter 及其在智能家居生态系统中潜力的基础理解。

在本教程中，您将学习如何：

1. 设置您的 XIAO ESP32 开发板并为固件刷写做准备。
2. 使用 ESPLaunchPad 轻松将 Matter 固件刷写到您的 XIAO ESP32 设备上。
3. 使用二维码将您的 XIAO ESP32 开发板与您的 iPhone 配对。
4. 使用 iPhone 应用程序控制和与您的 Matter 设备交互。
5. 在实际环境中探索 Matter 的基本功能和能力。

在本教程结束时，您将对 Matter 及其使用 XIAO ESP32 系列和 ESPLaunchPad 的实现有扎实的理解。您将具备进一步进行 Matter 开发的知识和技能，创建利用这一突破性协议强大功能的创新智能家居解决方案。

那么，让我们深入了解并开始使用 XIAO ESP32 系列和 ESPLaunchPad 踏上激动人心的 Matter 世界之旅！

## 准备软件

以下列出了本教程支持使用的系统和版本。

- **主机**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/) 或 macOS 10.15 或更高版本。

<!-- Matter's ESPLaunchPad is **not supported on Windows**. -->

## 准备硬件

在本教程的最后，我们将向您展示如何将 XIAO ESP32 系列作为 Matter 端点添加到 Apple Home，以通过 Apple 的生态系统控制 LED 灯带。到目前为止，本教程支持以下 XIAO，您可以直接选择它们来学习本课程的内容。

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO ESP32C3</th>
   <th>XIAO ESP32S3</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a></div></td>
  </tr>
 </table>
</div>

除了 XIAO 之外，我们还需要 WS281x 型号的灯条或灯珠。目前 Espressif 提供的灯光示例仅支持单个灯珠，所以无论您使用灯条还是灯珠，都只会点亮一个灯。我们还建议您购买 Grove Base for XIAO 以便于接线。

<div class="table-center">
 <table align="center">
  <tr>
   <th>Grove Base for XIAO</th>
   <th>Grove - RGB LED Ring (20 - WS2813 Mini)</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a></div></td>
  </tr>
 </table>
</div>

如果您使用的是 XIAO ESP32C3，请将 LED 灯带连接到引脚 **D8**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/16.png" style={{width:400, height:'auto'}}/></div>

如果您使用的是 XIAO ESP32S3，请将 LED 灯带连接到引脚 **D9**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/17.png" style={{width:400, height:'auto'}}/></div>

本教程将以 **XIAO ESP32C3** 为例，为您概述如何刷写固件、添加设备等操作。

## 视频教程

<div class="video-container">
<iframe width="750" height="450" src="https://www.youtube.com/embed/bhHVbRe_Gtw?si=iH-oouOl_ItkG7vF?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## 步骤 1. 为 XIAO ESP32 刷写 Matter 固件

使用 USB 线将 XIAO ESP32C3 开发板连接到您的计算机。确保开发板被您的计算机正确识别。

<!-- :::caution
请不要使用 Windows 计算机，您会注意到在 Windows 计算机上 Flash 按钮始终是灰色的。
::: -->

在您的计算机上打开 ESPLaunchPad 网站。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://espressif.github.io/esp-launchpad/?flashConfigURL=https://espressif.github.io/esp-matter/launchpad.toml" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>前往 ESPLaunchPAD</font></span></strong>
    </a>
</div>

<br />

在 **Select Application** 中选择 **light**，在 **ESP Chipset Type** 中选择 **ESP32C3**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/18.png" style={{width:800, height:'auto'}}/></div>

然后点击右上角的 **Connect** 按钮，选择您已连接到计算机的 XIAO 设备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/19.png" style={{width:800, height:'auto'}}/></div>

然后点击下方的 **flash** 按钮，等待固件上传。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/20.png" style={{width:800, height:'auto'}}/></div>

固件上传完成后，您会看到一些操作提示框以及一个二维码，我们只需点击 **Done**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/21.png" style={{width:800, height:'auto'}}/></div>

然后点击屏幕右侧的 **Reset Device** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/22.png" style={{width:800, height:'auto'}}/></div>

当您看到调试信息时，说明一切进展顺利。现在我们可以继续进行设备绑定。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/23.png" style={{width:800, height:'auto'}}/></div>

## 步骤 2. 使用 iPhone Home APP 扫码添加设备

在添加设备的部分，我们将以苹果设备为例（因为这是我手头唯一的设备）。如果您手头有 [Google 设备](https://support.google.com/googlenest/answer/12391458?hl=en&co=GENIE.Platform%3DAndroid) 或 [Amazon 设备](https://developer.amazon.com/en-US/alexa/matter)，也许您也可以使用它们。

如果像本文一样，您想使用 iPhone 的 Home APP 添加设备，您需要有一个苹果设备作为家庭中枢。目前 Home Hub 支持的设备是 HomePod 和 Apple TV，请阅读 [Apple 官网了解更多详情](https://support.apple.com/en-hk/102557)。为了本教程的目的，假设您已经在 Home APP 中添加了 Home Hub。

Home APP 默认安装在 iOS 设备上。如果您曾经删除过它，您可以在 App Store 中 [再次搜索](https://apps.apple.com/cn/app/home/id1110145103?l=en-GB) 并下载它。

在您的 iPhone 上打开 Home App。点击屏幕右上角的 **+** 按钮。从菜单中选择 **Add or Scan Accessory**。使用您的 iPhone 摄像头扫描 XIAO ESP32C3 提供的二维码。Home App 将识别 Matter 配件并将其显示为新配件。点击 **Add to Home** 将 XIAO ESP32C3 添加到您的 Home App。请参考下面的详细操作图片。

<div class="table-center">
  <table align="center">
    <tr>
      <th>页面 1</th>
      <th>页面 2</th>
      <th>页面 3</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/24.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/25.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/26.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>页面 4</th>
      <th>页面 5</th>
      <th>页面 6</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/27.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/28.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/32.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>页面 7</th>
      <th>页面 8</th>
      <th>页面 9</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/29.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/31.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## 步骤 3. 在 Home APP 中使用 XIAO

在 Home App 中，找到新添加的 XIAO ESP32C3 配件。点击该配件以访问其控制功能。使用亮度滑块来调整连接灯具的亮度。点击颜色图标来改变灯具的颜色。您可以从各种预定义颜色中选择，或使用颜色选择器创建自定义颜色。连接到 XIAO ESP32C3 的灯具将实时响应在 Home App 中进行的调整。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/30.png" style={{width:300, height:'auto'}}/></div>

恭喜！您已成功使用 ESPLaunchPad 将灯光固件刷入 XIAO ESP32C3 开发板，并将其与您的 iPhone Home App 配对。现在您可以直接从 iPhone 控制连接灯具的亮度和颜色，创造个性化且便捷的照明体验。

欢迎探索 Home App 中提供的更多高级功能和自定义选项，并尝试与 XIAO ESP32C3 开发板兼容的不同灯光配件。有了这个基础，您可以进一步扩展您的智能家居设置，创建一个真正互联和自动化的生活空间。

## 故障排除

### Q1: 在 Home APP 中长时间无法连接到设备

如果您长时间无法连接到设备，请确保在上传固件后看到日志消息。如果此时您长时间没有配对设备，XIAO 可能会进入待机模式，此时您需要按下 XIAO 上的 Reset 按钮或在 ESPLaunchPad 上使用 Reset Device 来重启设备。之后再次尝试添加。

除此之外，可能存在网络问题。请确保 XIAO 和您的 iPhone 在同一个局域网下。并且它们都需要连接到 2.4GHz 网络，不支持 5GHz 网络。配置完成后，手机可以使用其他网络。但 XIAO 只支持 2.4GHz 网络。

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
