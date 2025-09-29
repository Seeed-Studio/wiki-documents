---
description: reCamera 入门指南
title: 快速入门指南
keywords:
  - Edge
  - reCamera
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /cn/recamera_getting_started
sidebar_position: 1
last_update:
  date: 02/15/2025
  author: Evelyn Chen
---

# reCamera 快速入门指南

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" /></div>

欢迎使用 reCamera！本指南将帮助您快速设置设备并开始使用它来解锁强大的 AI 视觉功能。无论您是初学者还是经验丰富的用户，这个分步演练都将指导您完成安装、配置和首次使用。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱</font></span></strong>
    </a>
</div>

# 产品系列

reCamera 有 4 个版本：

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
        <td>无线(Wi-Fi/BT)</td>
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
        <td>电源供应</td>
        <td>Type - C 线缆</td>
        <td>Type - C 线缆</td>
        <td>Type - C 线缆</td>
        <td>Type - C 线缆</td>
    </tr>
</table>

## 开箱和开机

首先拆开您的 reCamera 包装。包装盒内应包含：

- reCamera
- Type-C 数据线
- 以太网线

确保所有部件都已包含在内。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/part_list.jpg" /></div>

使用提供的 type-C 数据线为设备供电即可。当您看到绿灯亮起时，表示 reCamera 已准备好连接到网络。

## 网络连接

有三种方法可以将 reCamera 连接到您的网络：

### 方法 1：USB 数据线

**通过 USB 数据线进行有线网络配置**

将 USB 数据线从 reCamera 连接到您的 PC，然后您可以访问 ```192.168.42.1``` 查看 reCamera 的加载页面。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

如果您的 reCamera 具有无线功能，我们建议设置 Wi-Fi 连接。只有 2002w 版本才会有 Wi-Fi 选择界面。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Wi-Fi_list.png" /></div>

如果您遇到任何问题，请查看[网络故障排除](https://wiki.seeedstudio.com/cn/recamera_network_connection/)。

### 方法 2：以太网

**以太网端口网络配置**

如果您想使用以太网端口，可以使用包装盒中的数据线连接到您的路由器。注意，这**不是 POE（以太网供电）**。您仍然需要 type-c 来为设备供电。您可以**拧开相机背面**并通过端口连接。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/IPmode.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

连接后，您可以在路由器后台找到 reCamera 的 IP，然后访问网站和 Node-RED 平台。

### 方法 3：AP 模式（仅适用于 2002w 版本）

**AP 模式下的无线网络配置**

开机时，reCamera 将为您开启接入点（AP），以便您更改网络偏好设置。打开您的手机或笔记本电脑的 Wi-Fi 列表，您应该能够看到一个名为 `reCamera_******` 的 Wi-Fi 名称。
命名系统是 ``"recamera_" + 该设备 mac 地址的最后六位数字``。
默认密码是 `12345678`。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/laptop_wifi_list.png" /></div>

连接到此 AP，网站应该会自动弹出。如果没有，您可以在浏览器中输入 **192.168.16.1** 来访问页面。然后您可以选择希望 reCamera 连接到哪个 wifi。
如果您有多个 reCamera，可以参考[设备管理](https://wiki.seeedstudio.com/cn/recamera_getting_started/#multi-devices-management)来找出哪个是哪个。

## 基本网页访问

一旦您将 reCamera 连接到网络，您可以通过在浏览器中访问 IP 地址来访问 reCamera 的网站界面。

- USB 连接 IP：192.168.42.1
- Wi-Fi 或以太网连接 IP：使用 `ifconfig` 查找或通过您的路由器网络管理检查。

网页 URL：

- **主页**：`ip_address/#/init`
- **工作区**：`ip_address/#/workspace`（适用于 OS 版本 0.1.4 及以上）
- **网络配置**：`ip_address/#/network`
- **安全**：`ip_address/#/security`
- **终端**：`ip_address/#/terminal`
- **系统**：`ip_address/#/system`
- **电源**：`ip_address/#/power`
- **原始 Node-RED**：```ip_address:1880```

**请检查您的设备 OS 版本**。版本 0.1.3 和 0.1.4 之间有重大升级。为了更流畅的用户体验，我们建议升级到 0.1.5 及以上版本。请转到 ```侧边栏 -> 系统 -> 软件更新``` 检查软件版本，并应用和安装最新版本的 OS。更新说明请参考 [OTA 升级指南](https://wiki.seeedstudio.com/cn/recamera_getting_started/#ota-upgrade-from-013-to-latest-version)。

### 从 0.1.3 OTA 升级到最新版本

如果您获得了第一批 reCamera，您可以按照此说明将 OS 升级到最新版本。

**步骤 1**：打开网站并导航到 ```侧边栏 -> 系统 -> 软件更新```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade1.png" /></div>

**步骤 2**：检查您的 OS 版本，然后点击 **检查** 和 **应用**。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade2.png" /></div>

**步骤 3**：等待几分钟更新系统。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade3.png" /></div>

**步骤 4**：重启设备并刷新网站。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade4.png" /></div>

**步骤 5**：您将进入加载页面来更改密码。现在您可以按照[此下载说明](https://wiki.seeedstudio.com/cn/recamera_getting_started/#access-recamera-preview-dashboard)体验带有 Node-RED 仪表板的最新版本 reCamera。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade5.png" /></div>

### 访问 reCamera 预览仪表板

通过将设备与 Node-RED 集成，我们提供了一个内置的仪表板 UI 示例，您可以在其中预览视频流、更改所需的模型。您可以自由调整并与您自己的应用程序集成。

如果您的 OS 版本是 0.1.5 或更高版本，预览仪表板将在您登录后显示。

如果您自己升级了 OS，您可以从 Sensecraft AI 下载仪表板 jsonflow

**步骤 1**。升级完成后，通过 `192.168.42.1` 或网络 IP 访问网页，然后点击 ```下载仪表板流```

 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload1.png" /></div>

**步骤 2**. 导航到 Sensecraft AI 平台，选择第一个官方 Dashboard Demo 并点击 ```Clone```。此网站需要登录。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload2.png" /></div>

**步骤 3**. 选择设备的连接方式。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload3.png" /></div>

**步骤 4**. 然后会显示带有预构建流程的 Node-RED 工作区。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload4.png" /></div>

**步骤 5**. 点击 ```Deploy``` 并检查流程是否已经启动，然后点击 ```dashboard```，仪表板就会显示出来。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" /></div>

确保检查流程是否已启动。有时导入流程不会自动启动流程，因此仪表板会是空的。请在下拉菜单中点击 `Start`。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload6.png" /></div>

成功！
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload7.png" /></div>

**步骤 6**. 您可以调整 ```IoU``` 和 ```Confidence``` 的阈值以获得更准确的结果。

- IoU=0，Confidence=0：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25，Confidence=33：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

### 快速理解流程

在这个示例流程中，我们构建了一个计算所需对象数量的演示，如人、猫、狗和瓶子，并提供了一个**计数选择**下拉列表。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard1.png" /></div>

通过更改流程中的 `function nodes`，您可以添加更多要计数的对象，或者完全将此功能更改为其他计算机视觉应用。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/counting_demo.png" /></div>

您可以通过查看 `model node` 来了解可以检测哪些类型的对象。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/model_list.png" /></div>

随意以任何您想要的方式调整和使用流程。只是要小心**不要**在模型节点后放置太多 `debug nodes` 或 `preview nodes`，因为打印出 AI 模型的多个结果会消耗 CPU 并导致设备崩溃。

### 计算机视觉模型

对于这些提供的工作流程，默认选择 `YOLO11n detection model`，这是用于实时对象检测的最新计算机视觉模型。您也可以在节点中将其替换为其他模型。如果您想了解还有哪些其他模型可用，可以参考这个[wiki](https://wiki.seeedstudio.com/cn/recamera_on_device_models/)。

**交并比 (IoU)**：IoU 是用于评估预测边界框与真实边界框之间重叠程度的指标。它计算为两个框交集面积与两个框并集面积的比值。IoU 的值通常在 0 到 1 的范围内。我们将其标准化为 0 - 100 的比例，IoU 值为 0 表示预测框与真实框之间没有重叠。值为 100 表示完美匹配，意味着两个框完全重叠。

**置信度**：YOLO 模型中的置信度表示预测边界框包含对象的概率以及预测的准确程度。它是一个介于 0 和 100.0 之间的值。

## 自定义您的仪表板并分享到社区

我们鼓励用户将他们开发和创建的仪表板分享到社区。我们在 [GitHub](https://github.com/Seeed-Studio/reCamera-Series/tree/main/Node-RED_Flow/public_flow) 上创建了一个文件夹。我们希望大家通过 **pull request** 在那里分享他们的仪表板，我们将对其进行整理和展示。
这里我们将以向仪表板添加补光灯功能为例，简单地添加一个节点并控制 reCamera。

**步骤 1**. 将 ```button group``` 节点拖拽到工作区。并按照以下设置进行编辑。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard2.png" /></div>

**步骤 2**. 添加一个名为 "Control Button" 的新 ui-group 配置节点，然后保存。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard3.png" /></div>

**步骤 3**. 转到仪表板 2.0，将控制按钮框架放置在模型选择下方。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard4.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.png" /></div>

**步骤 4**. 部署流程并转到仪表板。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard6.png" /></div>

**演示**:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.gif" /></div>

**步骤 5**: 不要忘记导出流程的 json 文件并将其分享到我们的 github。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard7.png" /></div>

## 端口列表

以下列出了 reCamera 使用的端口：

- **端口 22**: 用于远程 SSH 登录，处于开放状态。
- **端口 53**: 与 DNS 域名解析相关，对于网页重定向至关重要。默认开放。
- **端口 80**: 作为 Node-RED 应用程序 HTTP 显示的网页仪表板界面。
- **端口 554**: 用于 RTSP 视频流传输。
- **端口 9090**: 用于网页终端访问，需要密码登录。
- **端口 1880**: 专用于 Node-RED 操作。

## 恢复出厂设置

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

如果您想要重置设备（例如忘记了设备密码），您可以长按 **User** 按钮，然后将设备连接到电源。当设备的 `红灯` **常亮** 而不是闪烁时，松开 User 按钮。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-1.gif" /></div>

:::note
这将删除用户信息，包括您开发的应用程序或任何本地存储的图像和视频。请谨慎操作。
:::

如果您想将设备的固件恢复到特定版本，请访问 [操作系统版本控制](https://wiki.seeedstudio.com/cn/recamera_os_version_control)

## 多设备管理

如果您有多个 reCamera，您可以通过设备背面的 **mac 地址** 或 **S/N 编号** 来区分它们。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/mac_address_tag.png" /></div>

或者，一旦您通过 USB 或 AP 将设备连接到笔记本电脑，您可以使用以下命令查看 mac 地址

```
ifconfig wlan0
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/last_six_digits.png" /></div>

## 摄像头方向

默认的摄像头视图方向如下图所示，其中 type-c 接口**朝下**。请注意，其他方向可能会影响模型的准确性，这取决于您如何训练检测模型。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/default_orientation.jpeg" /></div>

## 资源

- [reCamera 宣传单](https://files.seeedstudio.com/wiki/reCamera/reCamera_one_pager.pdf)

- [reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

- [reCamera 系列](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

- [reCamera SSCMA](https://github.com/Seeed-Studio/sscma-example-sg200x)

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
