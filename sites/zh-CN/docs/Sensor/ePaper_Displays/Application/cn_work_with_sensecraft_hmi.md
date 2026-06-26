---
description: 使用 SenseCraft HMI 为兼容的 Seeed 电子纸显示设备设计并部署零代码仪表盘。
title: 搭配 SenseCraft HMI 使用
keywords:
  - 电子纸显示屏
  - SenseCraft HMI
  - 零代码仪表盘
  - reTerminal
  - XIAO 电子纸
image: https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.webp
slug: /EE04_with_hmi
sidebar_position: 1
last_update:
  date: 06/15/2026
  author: dimo
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/cn/EE04_with_hmi/
updatedAt: '2026-06-15'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 搭配 SenseCraft HMI 使用

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 是 Seeed Studio 面向电子纸显示设备的零代码界面设计平台。你可以在浏览器中设计仪表盘、图片库、日历、RSS 页面、网页内容页以及其他常亮信息屏，然后通过 Wi-Fi 将它们部署到兼容设备上。

本 Wiki 是电子纸显示屏应用指南。它说明了从 Seeed 电子纸设备到可用 SenseCraft HMI 页面之间的最短路径，并使用一块电子纸显示板加一块电子纸屏幕作为示例硬件配置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hmi61.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 打开 SenseCraft HMI</font></span></strong>
    </a>
</div><br />

## 何时使用本指南

当你希望将 SenseCraft HMI 与兼容的 Seeed 电子纸产品配合使用，并快速完成以下工作流程时，请使用本指南：

1. 确认或烧录 SenseCraft HMI 固件。
2. 将设备连接到 Wi-Fi。
3. 将设备添加到你的 SenseCraft HMI 工作区。
4. 将你的第一个页面部署到电子纸显示屏。

如需完整的平台手册，包括账号设置、编辑器细节、模板、数据组件和发行说明，请参阅[官方 SenseCraft HMI 文档](https://sensecraft-hmi-docs.seeed.cc/en/overview/)。

## 开始之前

在使用 SenseCraft HMI 之前，请准备以下物品：

- 一款兼容的 Seeed 电子纸显示设备。
- 一个 SenseCraft 账号。你可以在 [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 登录页面创建账号。
- 一个 2.4 GHz Wi-Fi 网络。
- 如果你的设备需要烧录固件，则需要一根 USB-C 数据线。
- 一台运行浏览器的电脑，该浏览器支持通过 SenseCraft HMI 网页工具进行串口烧录。

:::tip
不同的电子纸产品使用不同的 HMI 固件构建版本。务必选择与你的具体设备和屏幕尺寸相匹配的固件。
:::

## 官方 SenseCraft HMI 文档

SenseCraft HMI 拥有独立的文档站点。使用本 Wiki 完成电子纸显示屏的快速入门流程，使用官方文档获取完整的平台使用说明。

<div class="table-center">
  <table align="center">
    <tr>
      <th>主题</th>
      <th>在你需要以下内容时使用</th>
      <th>链接</th>
    </tr>
    <tr>
      <td>概览</td>
      <td>了解 SenseCraft HMI 是什么以及它能做什么。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">打开概览</a></td>
    </tr>
    <tr>
      <td>支持的硬件</td>
      <td>查看当前的设备和屏幕兼容性列表。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/supported_hardware/" target="_blank" rel="noopener noreferrer">打开支持的硬件</a></td>
    </tr>
    <tr>
      <td>快速入门</td>
      <td>按照官方的账号、固件、连接和部署流程操作。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/getting_started/" target="_blank" rel="noopener noreferrer">打开快速入门</a></td>
    </tr>
    <tr>
      <td>工作区与画布</td>
      <td>了解编辑器布局、组件、数据源以及页面构建流程。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/workspace/" target="_blank" rel="noopener noreferrer">打开工作区指南</a></td>
    </tr>
    <tr>
      <td>AI 生成</td>
      <td>通过文本提示生成图片或页面布局。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/ai_gen/" target="_blank" rel="noopener noreferrer">打开 AI 生成</a></td>
    </tr>
    <tr>
      <td>发行说明</td>
      <td>查看最新的平台和固件更新。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/release_note/" target="_blank" rel="noopener noreferrer">打开发行说明</a></td>
    </tr>
  </table>
</div>

## 示例硬件配置

以下步骤以 **XIAO ePaper Display Board (ESP32-S3) - EE04** 搭配 **7.3" Spectra 6 电子纸显示屏** 为例。其他兼容的 Seeed 电子纸设备遵循相同的平台流程，但固件构建版本、屏幕尺寸和硬件组装可能不同。

<div class="table-center">
  <table align="center">
    <tr>
      <th>XIAO ePaper Display Board (ESP32-S3) - EE04</th>
      <th>7.3" Spectra 6 电子纸显示屏</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/60hmi.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

:::note
此示例并非兼容性列表。关于当前支持的硬件和固件矩阵，请始终参考 [SenseCraft HMI 支持的硬件页面](https://sensecraft-hmi-docs.seeed.cc/en/supported_hardware/)。
:::

## 步骤 1：确认或烧录 HMI 固件

第一步是确保你的电子纸设备正在运行 SenseCraft HMI 固件。

<Tabs groupId="hmi-hardware">
<TabItem value="reterminal" label="reTerminal E 系列" default>

reTerminal E 系列开箱即可搭配 SenseCraft HMI 使用。给设备上电，然后继续阅读[步骤 2：将设备连接到 Wi-Fi](#step-2-connect-the-device-to-wi-fi)。

如果你之前烧录过其他固件，请打开 [SenseCraft HMI 设备页面](https://sensecraft.seeed.cc/hmi/device)，选择你的设备型号，并按照屏幕上的固件说明操作。

:::tip
仅当你希望清除已存储的 Wi-Fi 信息、配对数据和现有设备内容时，才使用 **Full Flash**。
:::

</TabItem>
<TabItem value="display-board" label="电子纸显示板 + 屏幕">

对于显示板加独立电子纸屏幕的组合，请烧录与你的开发板和面板相匹配的 HMI 固件。

**步骤 1。** 登录 [SenseCraft HMI](https://sensecraft.seeed.cc/hmi)，然后从顶部菜单中打开 **Tools**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/256.png" style={{width:1000, height:'auto'}}/></div>

**步骤 2。** 选择与你的显示屏相匹配的固件条目。本示例中，选择 **7.3" Full-Color Display 800 x 480** 条目。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi92.png" style={{width:1000, height:'auto'}}/></div>

**步骤 3。** 选择适用于你硬件的最新固件版本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi5.png" style={{width:1000, height:'auto'}}/></div>

**步骤 4。** 使用 USB-C 数据线将开发板连接到电脑，然后点击 **Flash**。

点击 **Flash** 后，浏览器会弹出串口选择窗口。选择属于你设备的端口。

:::tip
如果没有出现任何端口，请按下开发板上的 **RESET** 按钮后重试。同时确认你的 USB-C 线缆支持数据传输。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi65.png" style={{width:1000, height:'auto'}}/></div>

**步骤 5。** 等待电子纸显示屏刷新并显示设置用的二维码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi67.png" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

## 步骤 2：将设备连接到 Wi-Fi

在设备运行 HMI 固件后，将其连接到你的本地 Wi-Fi 网络。

**步骤 1。** 将你的手机或电脑连接到电子纸屏幕上显示的 Wi-Fi 接入点。这个临时接入点不需要密码。

接入点名称取决于设备类型。对于带独立屏幕的电子纸显示板，名称可能显示为 `ePaper DIY Kit-xxxx`。对于 reTerminal E 系列设备，名称可能显示为 `reTerminal E100x-xxxx`。在这两种情况下，`xxxx` 通常代表 MAC 地址的最后四个字符。

<div class="table-center">
  <table align="center">
    <tr>
      <th>电子纸显示板 + 屏幕</th>
      <th>reTerminal E 系列</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi31.png" style={{width:360, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:360, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td>AP 名称示例：<code>ePaper DIY Kit-xxxx</code></td>
      <td>AP 名称示例：<code>reTerminal E100x-xxxx</code></td>
    </tr>
  </table>
</div>

**步骤 2。** 扫描电子纸屏幕上的二维码。如果配置页面没有自动打开，请在浏览器中访问 `192.168.4.1`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi32.png" style={{width:500, height:'auto'}}/></div>

**步骤 3.** 选择你的本地 Wi-Fi 网络，输入密码，然后点击 **Connect**。

:::tip
请使用 2.4 GHz Wi-Fi 网络。许多基于 ESP32-S3 的设备无法连接到 5 GHz Wi-Fi 网络。
:::

**步骤 4.** 等待设备加入网络并显示配对码。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi13.jpg" style={{width:700, height:'auto'}}/></div>

## 步骤 3：将设备添加到 SenseCraft HMI

完成 Wi-Fi 设置后，将设备添加到你的 SenseCraft HMI 工作区。

**步骤 1.** 打开 **Device** 页面并点击 **Add Device**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/255.png" style={{width:700, height:'auto'}}/></div>

**步骤 2.** 输入设备名称和 ePaper 屏幕上显示的配对码，然后点击 **Create**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/251.png" style={{width:700, height:'auto'}}/></div>

**步骤 3.** 确认设备已出现在你的 Panel 中。

## 步骤 4：部署你的第一个页面

设备配对完成后，你就可以将 SenseCraft HMI 中的内容部署到 ePaper 屏幕上。

最快的入门方式是使用现有模板或内置的创建工具之一。有关详细的编辑器流程，请参阅[官方入门指南](https://sensecraft-hmi-docs.seeed.cc/en/guides/getting_started/)。

<div class="table-center">
  <table align="center">
    <tr>
      <th>功能</th>
      <th>用途说明</th>
      <th>官方指南</th>
    </tr>
    <tr>
      <td>Canvas</td>
      <td>通过文本、图像、小部件、形状和数据源来构建页面。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/workspace/" target="_blank" rel="noopener noreferrer">打开指南</a></td>
    </tr>
    <tr>
      <td>AI Generation</td>
      <td>根据文本提示创建图像或布局。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/guides/ai_gen/" target="_blank" rel="noopener noreferrer">打开指南</a></td>
    </tr>
    <tr>
      <td>Gallery</td>
      <td>展示已上传的图像或幻灯片式内容。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">打开文档</a></td>
    </tr>
    <tr>
      <td>RSS</td>
      <td>显示来自 RSS 源的标题或文章内容。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">打开文档</a></td>
    </tr>
    <tr>
      <td>Web Content</td>
      <td>在 ePaper 显示屏上渲染网页或基于 Web 的信息面板。</td>
      <td><a href="https://sensecraft-hmi-docs.seeed.cc/en/overview/" target="_blank" rel="noopener noreferrer">打开文档</a></td>
    </tr>
  </table>
</div>

下面的示例展示了部署到 7.3 英寸 ePaper 显示屏上的 SenseCraft HMI 页面。

<div style={{textAlign:'center'}}>
    <img src="https://files.seeedstudio.com/wiki/Epaper/EE04/HMI/hmi42.png" alt="SenseCraft HMI page on a 7.3 inch ePaper display" style={{width:700, height:'auto', border:'1px solid #ccc', borderRadius:5, boxShadow:'2px 2px 8px rgba(0,0,0,0.2)'}}/>
    <p style={{fontSize:'0.9em', color:'#555', marginTop:10}}><em>7.3 英寸 ePaper 显示屏上的示例效果</em></p>
</div>

## 故障排查

### Q1：为什么在烧录过程中我的电脑检测不到设备？

这通常意味着浏览器无法访问串口、数据线仅支持充电，或者开发板没有进入正确的 USB 状态。

- 使用支持数据传输的 USB-C 线缆。
- 将设备直接连接到电脑，而不是通过 USB 集线器。
- 按下 **RESET** 按钮，然后重新打开端口选择窗口。
- 如果当前浏览器不支持 Web 串口烧录，请尝试基于 Chromium 的浏览器。

### Q2：为什么设备无法连接到 Wi-Fi？

最常见的原因是使用了不支持的 Wi-Fi 频段或输入了错误的密码。

- 使用 2.4 GHz Wi-Fi 网络。
- 仔细重新输入 Wi-Fi 密码。
- 在设置过程中将设备移近路由器。
- 如果设备之前已经配置过，仅当你希望清除已保存的网络设置并重新开始时才使用 **Full Flash**。

### Q3：为什么烧录后屏幕没有显示预期的设置二维码？

固件可能与所连接的屏幕不匹配，或者屏幕连接不正确。

- 在 SenseCraft HMI Tools 页面重新检查设备型号、屏幕尺寸和固件条目。
- 在重新连接 ePaper 软排线前先断电。
- 确认软排线方向和连接器类型与你的硬件相匹配。
- 再次烧录匹配的固件，并等待 ePaper 刷新完成。

### Q4：为什么部署后的页面与编辑器预览看起来不一样？

不同的 ePaper 面板在分辨率、色彩能力、灰度表现和刷新特性方面各不相同。

- 按照目标屏幕的分辨率来构建页面。
- 如果屏幕分辨率较低，请避免使用非常小的文字。
- 对于单色或灰度屏幕，请使用高对比度的颜色。
- 查看官方文档以获取编辑器和部署的详细信息。

## 资源

- [SenseCraft HMI 平台](https://sensecraft.seeed.cc/hmi)
- [SenseCraft HMI 官方文档](https://sensecraft-hmi-docs.seeed.cc/en/overview/)
- [SenseCraft HMI 支持的硬件](https://sensecraft-hmi-docs.seeed.cc/en/supported_hardware/)
- [SenseCraft HMI 入门指南](https://sensecraft-hmi-docs.seeed.cc/en/guides/getting_started/)
- [SenseCraft HMI 发行说明](https://sensecraft-hmi-docs.seeed.cc/en/release_note/)

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
