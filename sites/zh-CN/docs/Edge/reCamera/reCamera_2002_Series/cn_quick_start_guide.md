---
description: reCamera 入门指南
title: 快速上手指南
keywords:
  - Edge
  - reCamera
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_getting_started
sku: 102991897,102991896,102991894,102991895,101991223,102991898,101991224,102991899
sidebar_position: 1
last_update:
  date: 04/10/2026
  author: Samuel Yang
createdAt: '2024-11-11'
updatedAt: '2026-04-10'
url: https://wiki.seeedstudio.com/cn/recamera_getting_started/
---

# reCamera 快速上手指南

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" /></div>

欢迎使用 reCamera！本指南将帮助你快速完成设备设置，并开始使用它来解锁强大的 AI 视觉功能。无论你是初学者还是有经验的用户，本分步教程都会引导你完成安装、配置和首次使用。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱</font></span></strong>
    </a>
</div>

# 产品系列

reCamera 一共有 4 个版本：

<table border="1">
    <tr>
        <th> </th>
        <th>reCamera 2002 8GB</th>
        <th>reCamera 2002 64GB</th>
        <th>reCamera 2002w 8GB</th>
        <th>reCamera 2002w 64GB</th>
    </tr>
    <tr>
        <td>核心板</td>
        <td>Core 2002 8GB</td>
        <td>Core 2002 64GB</td>
        <td>Core 2002w 8GB</td>
        <td>Core 2002w 64GB</td>
    </tr>
    <tr>
        <td>传感器板</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
    </tr>
    <tr>
        <td>底板</td>
        <td>B101</td>
        <td>B101</td>
        <td>B101</td>
        <td>B101</td>
    </tr>
    <tr>
        <td>无线（Wi-Fi/BT）</td>
        <td> </td>
        <td> </td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>安装方式</td>
        <td>磁吸/相机支架安装</td>
        <td>磁吸/相机支架安装</td>
        <td>磁吸/相机支架安装</td>
        <td>磁吸/相机支架安装</td>
    </tr>
    <tr>
        <td>供电方式</td>
        <td>Type - C 线缆</td>
        <td>Type - C 线缆</td>
        <td>Type - C 线缆</td>
        <td>Type - C 线缆</td>
    </tr>
</table>

## 开箱与上电

首先打开你的 reCamera 包装盒。盒子内应包含：

- reCamera
- Type-C 线缆
- 以太网线

请确认所有部件都已包含在内。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/part_list.jpg" /></div>

只需使用随附的 Type-C 线缆为设备供电即可。当你看到绿色指示灯亮起时，表示 reCamera 已准备好连接到网络世界。

## 网络连接

将 reCamera 连接到你的网络有三种方式：

### 方式 1：USB 线缆

**通过 USB 线缆进行有线网络配置**

将 USB 线缆从 reCamera 连接到你的电脑，然后在浏览器中访问 ```192.168.42.1```，即可查看 reCamera 的加载页面。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

如果你使用的是带无线功能的 reCamera，我们推荐设置 Wi-Fi 连接。只有 2002w 版本才会显示 Wi-Fi 选择界面。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Wi-Fi_list.png" /></div>

**WiFi 网络配置注意事项：**

1. **确保同一网络**：请确保 reCamera 和你的电脑连接到**同一个 WiFi 网络**。这样可以保证后续的开发与调试正常进行。

2. **关闭电脑上的 VPN**：如果你的电脑开启了 VPN，请在配置 WiFi 之前**关闭 VPN**。VPN 可能导致网络连接问题，从而无法正常访问 reCamera。

3. **如何切换 WiFi 连接**：
   - 在 reCamera 配置页面（192.168.42.1）中，找到 **Network** 设置选项
   - 点击 **Enable WI-FI botton**
   - 从列表中选择你想连接的 WiFi 网络（SSID）
   - 输入 WiFi 密码
   - 点击 **Confirm** 按钮

4. 成功连接到 Wi-Fi 后，点击 “Settings” 按钮进入设置页面。你可以在 “Wi-Fi IP” 一栏旁边查看 Wi-Fi IP 地址。

如果你遇到任何问题，请查看 [网络故障排查](https://wiki.seeedstudio.com/cn/recamera_network_connection/)。

### 方式 2：以太网

**以太网端口网络配置**

如果你希望使用以太网端口，可以使用盒内附带的网线连接到你的路由器。注意，这**不是 POE（以太网供电）**，你仍然需要通过 Type-C 为设备供电。你可以**卸下摄像头背部的螺丝**，通过端口进行连接。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/IPmode.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

连接完成后，你可以在路由器后台找到 reCamera 的 IP，然后访问网页界面和 Node-RED 平台。

### 方式 3：AP 模式（仅适用于 2002w 版本）

**AP 模式下的无线网络配置**

开机后，reCamera 会打开接入点（AP），供你更改网络偏好设置。打开手机或笔记本电脑的 Wi-Fi 列表，你应该能看到一个名为 `reCamera_******` 的 Wi-Fi。
命名规则为 ``"recamera_" + 该设备 MAC 地址的最后六位``。
默认密码为 `12345678`。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/laptop_wifi_list.png" /></div>

连接到这个 AP 后，网页应会自动弹出。如果没有，你也可以在浏览器中输入 **192.168.16.1** 访问该页面。然后你可以选择希望 reCamera 连接到哪个 WiFi。
如果你有多台 reCamera，可以参考 [设备管理](https://wiki.seeedstudio.com/cn/recamera_getting_started/#multi-devices-management) 来区分每一台设备。

## 基础网页访问

当你已将 reCamera 连接到网络后，可以在浏览器中访问其 IP 地址，进入 reCamera 的网页界面。

- USB 连接 IP：192.168.42.1
- Wi-Fi 或以太网连接 IP：使用 `ifconfig` 查找，或在路由器的网络管理页面中查看。

网页地址如下：

- **主页**：`ip_address/#/init`
- **工作区**：`ip_address/#/workspace`（适用于 OS 版本 0.1.4 及以上）
- **网络配置**：`ip_address/#/network`
- **安全**：`ip_address/#/security`
- **终端**：`ip_address/#/terminal`
- **系统**：`ip_address/#/system`
- **电源**：`ip_address/#/power`
- **原始 Node-RED**：```ip_address:1880```

**请检查你的设备 OS 版本**。在 0.1.3 和 0.1.4 版本之间有一次重大升级。为获得更顺畅的使用体验，我们推荐升级到 0.1.5 及以上版本。请前往 ```Sidebar -> System -> Software Update``` 查看软件版本，并下载并安装最新的 OS 版本。更新说明请参考 [OTA 升级指南](https://wiki.seeedstudio.com/cn/recamera_getting_started/#ota-升级-from-013-to-latest-version)。

### 从 0.1.3 OTA 升级到最新版本

如果你拿到的是首批 reCamera，可以按照以下说明将 OS 升级到最新版本。

**步骤 1**：打开网页并导航到 ```Sidebar -> System -> Software Update```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade1.png" /></div>

**步骤 2**：检查你的 OS 版本，然后点击 **Check** 和 **Apply**。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade2.png" /></div>

**步骤 3**：等待几分钟，让系统完成更新。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade3.png" /></div>

**步骤 4**：重启设备并刷新网页。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade4.png" /></div>

**步骤 5**：你将进入加载页面以修改密码。现在，你可以按照[此下载说明](https://wiki.seeedstudio.com/cn/recamera_getting_started/#access-recamera-preview-dashboard)体验带有 Node-RED 仪表盘的最新版 reCamera。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade5.png" /></div>

### 访问 reCamera 预览仪表盘

通过与 Node-RED 的集成，我们提供了一个内置的仪表盘 UI 示例，你可以在其中预览视频流、切换所需模型。你也可以自由调整并集成到自己的应用中。

如果你的 OS 版本为 0.1.5 或更高版本，登录后会自动显示预览仪表盘。

如果你是自己升级的 OS，可以从 Sensecraft AI 下载仪表盘 jsonflow。

**步骤 1**。升级完成后，通过 `192.168.42.1` 或网络 IP 访问网页，然后点击 ```Download dashborad flow```。

 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload1.png" /></div>

**步骤 2**。进入 Sensecraft AI 平台，选择第一个官方 Dashboard Demo 并点击 ```Clone```。访问该网站需要登录。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload2.png" /></div>

**步骤 3**。选择你的设备连接方式。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload3.png" /></div>

**步骤 4**。此时会显示带有预置流程的 Node-RED 工作区。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload4.png" /></div>

**步骤 5**。点击 ```Deploy``` 并确认流程已启动，然后点击 ```dashboard```，仪表盘即会显示。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" /></div>

确保检查流程是否已启动。有时导入流程不会自动启动，因此仪表盘会是空的。请在下拉菜单中点击 `Start`。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload6.png" /></div>

成功！
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload7.png" /></div>

**步骤 6**. 你可以调整 ```IoU``` 和 ```Confidence``` 的阈值以获得更准确的结果。

- IoU=0,Confidence=0：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25,Confidence=33：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

### 快速理解流程

在这个示例流程中，我们构建了一个用于计数目标物体数量的演示，例如 Person、Cat、Dog 和 Bottle，并配有一个 **Counting Selection** 下拉列表。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard1.png" /></div>

通过更改流程中的 `function nodes`，你可以添加更多需要计数的目标，或者将该功能完全改为其他计算机视觉应用。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/counting_demo.png" /></div>

你可以通过查看 `model node` 来了解可以被检测到的物体类型。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/model_list.png" /></div>

你可以随意调整和玩转这个流程。不过请注意，**不要**在模型节点后面放置太多 `debug nodes` 或 `preview nodes`，因为从 AI 模型打印出多个结果会消耗 CPU，并导致设备崩溃。

### 计算机视觉模型

对于这些提供的工作流，默认选择的是 `YOLO11n detection model`，这是最新的实时目标检测计算机视觉模型。你也可以在节点中将其替换为其他模型。如果你想查看还有哪些可用模型，可以参考这个 [wiki](https://wiki.seeedstudio.com/cn/recamera_on_device_models/)。

**Intersection over Union (IoU)**：IoU 是一种用于评估预测边界框与真实边界框重叠程度的度量。它被计算为两个框交集面积与并集面积的比值。IoU 的取值通常在 0 到 1 之间。我们将其标准化为 0 - 100 的刻度，IoU 值为 0 表示预测框与真实框完全不重叠，值为 100 表示完美匹配，即两个框完全重叠。

**Confidence**：在 YOLO 模型中，Confidence 表示预测边界框中包含物体的概率以及预测的准确程度。其取值范围在 0 到 100.0 之间。

## 自定义你的仪表盘并分享给社区

我们鼓励用户在社区分享他们开发和创建的仪表盘。我们在 [GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/Node-RED_Flow/public_flow) 上创建了一个文件夹。我们希望大家通过 **pull request** 的方式将自己的仪表盘分享在那里，我们会进行整理和展示。
这里我们以在仪表盘中添加补光灯功能为例，简单演示如何添加一个节点并控制 reCamera。

**步骤 1**. 将 ```button group``` 节点拖动到工作区，并按以下设置进行编辑。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard2.png" /></div>

**步骤 2**. 添加一个名为 "Control Button" 的新 ui-group 配置节点，然后保存。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard3.png" /></div>

**步骤 3**. 进入 dashboard 2.0，并将控制按钮框放置在模型选择下面。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard4.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.png" /></div>

**步骤 4**. 部署该流程并进入仪表盘。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard6.png" /></div>

**演示**：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.gif" /></div>

**步骤 5**：别忘了导出该流程的 json 文件并将其分享至我们的 GitHub。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard7.png" /></div>

## 端口列表

以下列出了 reCamera 使用的端口：

- **端口 22**：用于远程 SSH 登录，处于开放状态。
- **端口 53**：与 DNS 域名解析相关，是网页重定向必需端口，默认开放。
- **端口 80**：作为 Node-RED 应用的 HTTP Web 仪表盘界面。
- **端口 554**：用于 RTSP 视频流。
- **端口 9090**：用于 Web 终端访问，登录需要密码。
- **端口 1880**：用于 Node-RED 运行。

## 恢复出厂设置

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

如果你想重置设备，例如忘记了设备的密码，可以长按 **User** 按钮，然后给设备接通电源。当设备的 `red light` **常亮** 而不是闪烁时，松开 User 按钮。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-1.gif" /></div>

:::note
这将删除用户信息，包括你开发的应用程序，或任何本地存储的图像和视频。请谨慎操作。
:::

如果你想将设备的固件恢复到特定版本，请访问 [os version control](https://wiki.seeedstudio.com/cn/recamera_os_version_control)

## 多设备管理

如果你拥有多台 reCamera，你可以通过设备背面的 **mac 地址** 或 **S/N 编号** 来区分它们。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/mac_address_tag.png" /></div>

或者，当你通过 USB 或 AP 将设备连接到笔记本电脑时，可以使用以下命令查看 mac 地址

```
ifconfig wlan0
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/last_six_digits.png" /></div>

## 相机方向

默认的相机视角方向如下面的图片所示，此时 type-c 接口是**朝下**的。请注意，其他方向可能会影响模型的精度，这取决于你是如何训练检测模型的。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/default_orientation.jpeg" /></div>

## 资源

- [reCamera 宣传单](https://files.seeedstudio.com/wiki/reCamera/reCamera_one_pager.pdf)

- [reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

- [reCamera 系列](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

- [reCamera SSCMA](https://github.com/Seeed-Studio/sscma-example-sg200x)

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品的过程中尽可能顺利。我们提供了多种交流渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
