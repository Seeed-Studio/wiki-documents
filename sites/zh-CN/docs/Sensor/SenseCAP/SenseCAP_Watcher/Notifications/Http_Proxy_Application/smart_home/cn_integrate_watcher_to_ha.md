---
description: 描述如何在本地将 Watcher 接入 Home Assistant。
title: 将 Watcher 集成到 Home Assistant
image: https://files.seeedstudio.com/wiki/watcher_ha/10.png
slug: /integrate_watcher_to_ha
sidebar_position: 1
last_update:
  date: 10/11/2025
  author: Twelve
createdAt: '2025-05-30'
updatedAt: '2025-10-11'
url: https://wiki.seeedstudio.com/cn/integrate_watcher_to_ha/
---

# 将 Watcher 集成到 Home Assistant

:::caution 注意
本教程不适用于小智固件版本。  
对于小智固件，请访问 [小智 Watcher 指南](https://wiki.seeedstudio.com/cn/ha_dify_watcher_llms/) 获取详细说明。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/10.png" style={{width:1000, height:'auto'}}/></div>

人工智能（AI）的集成已经彻底改变了智能家居技术的世界，而 Watcher 作为一款尖端的 AI 驱动设备，已经成为游戏规则的改变者。通过将 Watcher 与 Home Assistant（一个流行的开源家庭自动化平台）无缝集成，用户可以在智能家居中解锁全新水平的便利性、安全性和效率。

在这个全面的 wiki 中，我们将指导您完成将 Watcher 与 Home Assistant 集成的过程，使您能够在智能家居设置中充分发挥 AI 的潜力。无论您是经验丰富的 Home Assistant 用户还是家庭自动化的新手，这种集成都开启了令人兴奋的可能性领域，让您的家变得更智能、更具响应性，并根据您的独特需求量身定制。

以下是本文的主要内容框架。

1. [安装 HACS 插件](#安装-hacs-插件)：安装 Home Assistant Community Store (HACS) 以在 Home Assistant 中启用 Seeed Studio 的 SenseCraft 插件安装。
2. [安装 SenseCraft 插件](#安装-sensecraft-插件)：安装 Seeed Studio 的 SenseCraft 插件，该插件允许将 Seeed Studio 的产品快速部署到 Home Assistant 中。
3. [将 SenseCAP Watcher 集成到 Home Assistant](#将-sensecap-watcher-集成到-home-assistant)：将 SenseCAP Watcher 集成到 Home Assistant 并设置可视化仪表板进行配置。

## 入门指南

在本文的教程内容开始之前，您可能需要准备以下硬件。

### 所需材料

<div class="table-center">
  <table align="center">
    <tr>
      <th>SenseCAP Watcher</th>
      <th>Home Assistant Green</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/1.png" style={{width:180, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/ha.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

Home Assistant Green 是自动化您家庭的最简单且最注重隐私的方式。它提供轻松的设置，让您只需一个系统就能控制所有智能设备，默认情况下所有数据都存储在本地。这块板受益于蓬勃发展的 Home Assistant 生态系统，并且每月都会通过开源得到改进。

我们建议在本教程中使用 Home Assistant Green 作为 Home Assistant 主机，或者您可以使用任何带有 Supervisor 的 Home Assistant 主机。

## 安装 HACS 插件

### 步骤 1. 在 Home Assistant 中开启高级模式

要解锁 Home Assistant 的全部潜力并访问高级功能，您可以在用户界面中启用 "Advanced Mode"。

导航到您的 [Home Assistant 网页界面](http://homeassistant.local:8123)。点击 Home Assistant 侧边栏左下角的个人资料图标。在您的个人资料页面上，向下滚动找到 **Advanced Mode** 切换开关。将切换开关切换到开启位置。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/2.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 2. 安装 Terminal & SSH

点击侧边栏中的 **Settings** 以访问设置菜单。点击 **Add-ons** 以访问附加组件商店。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/3.png" style={{width:1000, height:'auto'}}/></div>

使用搜索栏或浏览可用的附加组件来查找 **Terminal & SSH**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/4.png" style={{width:1000, height:'auto'}}/></div>

找到 **Terminal & SSH** 后，点击它查看详细信息。在附加组件页面上，您将看到概述、文档和配置选项。要安装附加组件，请点击 **Install** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/5.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 3. 安装 HACS

在侧边栏中找到最近下载的 **Terminal & SSH**。在终端中，导航到 config 目录，这是您的 Home Assistant 配置的根目录：

```
cd /config
```

执行以下命令下载并运行 HACS 安装脚本：

```
wget -q -O - https://install.hacs.xyz | bash -
```

安装脚本完成后，您需要重启 Home Assistant 以应用更改。您可以通过 UI 重启 Home Assistant，方法是转到 **Settings > System > Restart**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/6.png" style={{width:1000, height:'auto'}}/></div>

重启后，点击侧边栏中的 **Settings** 打开设置菜单。在设置菜单中，导航到 **Devices & Services**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/7.png" style={{width:1000, height:'auto'}}/></div>

点击 **ADD INTEGRATION** 向您的 Home Assistant 设置添加新的集成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/8.png" style={{width:1000, height:'auto'}}/></div>

在搜索栏中，输入 **HACS** 来查找 Home Assistant Community Store 集成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/9.png" style={{width:1000, height:'auto'}}/></div>

如果找到 HACS，它应该出现在可用集成列表中。点击它开始安装过程。

可能会弹出许可协议或服务条款。仔细阅读协议，如果您同意条款，请勾选所有复选框以表示您的同意。点击 **SUBMIT** 继续安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/10.png" style={{width:600, height:'auto'}}/></div>

接下来，系统会提示您使用 GitHub 账户登录。这是必要的，因为 HACS 与 GitHub 集成以管理社区创建的集成和插件的安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/11.png" style={{width:600, height:'auto'}}/></div>

按照说明授权 Home Assistant 访问您的 GitHub 账户。这通常涉及输入 GitHub 提供的验证码来确认您的身份。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png" style={{width:600, height:'auto'}}/></div>

一旦您授权 Home Assistant 使用您的 GitHub 账户，HACS 将完成安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/13.png" style={{width:1000, height:'auto'}}/></div>

您可能需要重启 Home Assistant 以使 HACS 完全集成到您的系统中。

## 安装 SenseCraft 插件

### 步骤 4. 通过 HACS 安装 SenseCraft 插件

在侧边栏中查找 HACS 并点击它打开 HACS 界面。在右下角，您会找到一个菜单按钮（三个点或加号，取决于您的 HACS 版本）。点击 **Custom repositories**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png" style={{width:1000, height:'auto'}}/></div>

将出现一个对话框，要求您输入存储库 URL。在这里，您将输入 SenseCraft 集成的自定义存储库 URL。输入 URL 后，选择类别（对于 SenseCraft 集成，您应该选择 **Integration**）。

```
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/15.png" style={{width:1000, height:'auto'}}/></div>

点击 **Add**。存储库现在已添加到您的 HACS 中，您应该能够在 **Integrations** 下的列表中找到 SenseCraft 集成。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/16.png" style={{width:1000, height:'auto'}}/></div>

找到 SenseCraft 集成并点击 "DOWNLOAD"。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" style={{width:1000, height:'auto'}}/></div>

到此为止，我们已经成功完成了 SenseCraft 插件的安装。

## 将 SenseCAP Watcher 集成到 Home Assistant

### 步骤 5. 从 SenseCraft 添加 Watcher

在 **Settings** 页面中，选择 **Devices & Services**。

然后点击右下角的 **ADD INTEGRATION** 按钮并搜索 **SenseCraft**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/38.png" style={{width:1000, height:'auto'}}/></div>

点击 SenseCraft 并选择 Action 为 **Add device using host/id (局域网集成)**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/39.png" style={{width:500, height:'auto'}}/></div>

:::note
目前，**Add devices using SenseCraft Account（账号集成）** 不可用。
:::

然后在设备选项中选择 **Watcher**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/4.png" style={{width:500, height:'auto'}}/></div>

在下一页中，请输入 Watcher 的设备 EUI，您可以在 [SenseCraft APP 的 Watcher 设置](https://wiki.seeedstudio.com/cn/integrate_watcher_to_ha/#step-6-place-the-task-and-configure-the-http-message-block) 中找到 Watcher 的 EUI。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/5.png" style={{width:500, height:'auto'}}/></div>

:::note
请确保 EUI 全部大写！
:::

点击 **SUBMIT** 后，Watcher 的 Home Assistant 组件将自动添加并显示在仪表板中，目前应该处于无数据状态。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/6.png" style={{width:1000, height:'auto'}}/></div>

### 步骤 6. 放置任务并配置 HTTP 消息块

要让 Watcher 的数据到达 Home Assistant，您需要让 Watcher 处于任务运行状态，并配置 HTTP 消息块向 Home Assistant 发送警报流。

例如，我现在在 Watcher 上放置一个任务来检测猫是否在吃东西。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/23.png" style={{width:250, height:'auto'}}/></div><br />

在 **Detail Config** 中，找到"If yes, then do the following"并勾选下方的 **HTTP Push Notification** 框。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/7.png" style={{width:250, height:'auto'}}/></div><br />

然后点击 **Go Setup** 按钮，在其中配置 Home Assistant 信息，确保数据能够到达 Home Assistant。

- **HTTP URL**：填写 Home Assistant 的完整 IP 地址，端口号 8887。例如 `http://192.168.1.151:8887`。

- **HTTP Token**：留空。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/8.png" style={{width:250, height:'auto'}}/></div><br />

确认填写正确后，点击底部的 Update Now。然后任务就会下发到 Watcher。

接下来，当 Watcher 检测到您的猫在吃东西时，它会触发警报并将传感器数据报告给 Home Assistant。基于此，您可以自由设置智能家居的自动化。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_ha/10.png" style={{width:1000, height:'auto'}}/></div>

<details>

<summary>点击查看示例仪表板代码</summary>

```javascript
views:
  - type: sections
    title: Home Assistant
    path: home
    icon: mdi:home-assistant
    sections:
      - cards:
          - type: tile
            entity: sensor.air_humidity
            name: SenseCAP Watcher Air Humidity
            color: blue
            show_entity_picture: true
          - type: tile
            entity: sensor.co2
            name: SenseCAP Watcher CO2
            color: deep-orange
          - type: tile
            entity: sensor.temperature
            name: SenseCAP Watcher Air Temperature
            color: purple
            show_entity_picture: true
          - type: tile
            entity: sensor.alarm
            name: SenseCAP Watcher Alarm Message
            color: red
            show_entity_picture: true
          - type: picture
            image_entity: image.alarm_image
```

</details>

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
