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
  date: 2025/02/15
  author: Evelyn Chen
---

# reCamera 快速入门指南

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" /></div>

欢迎使用 reCamera！本指南将帮助您快速设置设备并开始使用其强大的 AI 视觉功能。无论您是初学者还是经验丰富的用户，这份分步指南都将引导您完成安装、配置和首次使用。

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
        <td>无线功能（Wi-Fi/蓝牙）</td>
        <td> </td>
        <td> </td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>安装方式</td>
        <td>磁吸/摄像头支架安装</td>
        <td>磁吸/摄像头支架安装</td>
        <td>磁吸/摄像头支架安装</td>
        <td>磁吸/摄像头支架安装</td>
    </tr>
    <tr>
        <td>电源供应</td>
        <td>Type-C 电缆</td>
        <td>Type-C 电缆</td>
        <td>Type-C 电缆</td>
        <td>Type-C 电缆</td>
    </tr>
</table>

## 开箱与开机

首先，打开 reCamera 包装盒。盒内应包含以下物品：
- reCamera
- Type-C 电缆
- 以太网电缆

确保所有部件齐全。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/part_list.jpg" /></div>

使用随附的 Type-C 电缆为设备供电。当您看到绿色指示灯亮起时，表示 reCamera 已准备好连接到网络。

## 网络连接

将 reCamera 连接到网络有三种方法：

### 方法 1：USB 电缆
**通过 USB 电缆进行有线网络配置**

将 USB 电缆从 reCamera 连接到您的电脑，然后访问 ```192.168.42.1``` 查看 reCamera 的加载页面。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

如果您使用的是带无线功能的 reCamera，我们建议设置 Wi-Fi 连接。只有 2002w 版本具有 Wi-Fi 选择界面。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Wi-Fi_list.png" /></div>

如果遇到任何问题，请查看 [网络故障排查](https://wiki.seeedstudio.com/cn/recamera_network_connection/)。 

### 方法 2：以太网

**通过以太网端口进行网络配置**

如果您希望使用以太网端口，可以使用包装盒内的电缆连接到路由器。注意，这不是 **POE（以太网供电）**。您仍然需要使用 Type-C 电缆为设备供电。您可以**拧开摄像头背面**并通过端口连接。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/IPmode.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

连接后，您可以在路由器后台找到 reCamera 的 IP 地址，然后访问网站和 Node-RED 平台。

### 方法 3：AP 模式（仅适用于 2002w 版本）

**AP 模式下的无线网络配置**

开机时，reCamera 会开启接入点（AP），供您更改网络偏好设置。打开手机或笔记本的 Wi-Fi 列表，您应该能看到一个名为 `reCamera_******` 的 Wi-Fi 名称。
命名规则为 ``"recamera_" + 设备 MAC 地址的最后六位``。
默认密码为 `12345678`。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/laptop_wifi_list.png" /></div>

连接到此 AP 后，网页应自动弹出。如果没有，您可以在浏览器中输入 **192.168.16.1** 访问页面。然后，您可以选择要让 reCamera 连接的 Wi-Fi。
如果您有多个 reCamera，可以参考 [设备管理](https://wiki.seeedstudio.com/cn/recamera_getting_started/#multi-devices-management) 找到对应的设备。 

## 基本网页访问

一旦将 reCamera 连接到您的网络，您可以通过浏览器访问其 IP 地址来访问 reCamera 的网站界面。
- USB 连接 IP: 192.168.42.1
- Wi-Fi 或以太网连接 IP: 使用 `ifconfig` 命令查询，或通过路由器的网络管理界面查看。

网页地址：
- **主页**: `ip_address/#/init`
- **工作区**: `ip_address/#/workspace`（适用于 OS 版本 0.1.4 及以上）
- **网络配置**: `ip_address/#/network`
- **安全**: `ip_address/#/security`
- **终端**: `ip_address/#/terminal`
- **系统**: `ip_address/#/system`
- **电源**: `ip_address/#/power`
- **原始 Node-RED**: ```ip_address:1880```

**请检查您的设备操作系统版本**。版本 0.1.3 和 0.1.4 之间有重大升级。为了获得更流畅的用户体验，我们推荐升级到 0.1.5 或更高版本。请前往 ```侧边栏 -> 系统 -> 软件更新``` 检查软件版本，并应用和安装最新的操作系统版本。有关更新说明，请参考 [OTA 升级指南](https://wiki.seeedstudio.com/cn/recamera_getting_started/#ota-upgrade-from-013-to-latest-version)。

### 从 0.1.3 升级到最新版本的 OTA 升级

如果您购买的是第一批 reCamera，您可以按照以下说明将操作系统升级到最新版本。

**步骤 1**: 打开网站并导航到 ```侧边栏 -> 系统 -> 软件更新```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade1.png" /></div>

**步骤 2**: 检查您的操作系统版本，然后点击 **检查** 和 **应用**。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade2.png" /></div>

**步骤 3**: 等待几分钟以更新系统。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade3.png" /></div>

**步骤 4**: 重启设备并刷新网页。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade4.png" /></div>

**步骤 5**: 您将进入加载页面以更改密码。现在，您可以按照 [此下载说明](https://wiki.seeedstudio.com/cn/recamera_getting_started/#access-recamera-preview-dashboard) 体验最新版本的 reCamera 和 Node-RED 仪表板。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade5.png" /></div>

### 访问 reCamera 预览仪表板

通过将设备集成到 Node-RED 中，我们提供了一个内置的仪表板 UI 示例，您可以在其中预览视频流并更改所需的模型。您可以自由调整并集成到自己的应用程序中。

如果您的操作系统版本是 0.1.5 或更高版本，登录后将显示预览仪表板。

如果您自行升级了操作系统，可以从 Sensecraft AI 下载仪表板 jsonflow。

**步骤 1**. 升级完成后，通过 `192.168.42.1` 或网络 IP 访问网页，然后点击 ```下载仪表板流```。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload1.png" /></div>

**步骤 2**. 导航到 Sensecraft AI 平台，选择第一个官方仪表板示例并点击 ```克隆```。此网站需要登录。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload2.png" /></div>

**步骤 3**. 选择设备的连接方式。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload3.png" /></div>

**步骤 4**. 然后将显示带有预构建流的 Node-RED 工作区。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload4.png" /></div>

**步骤 5**. 点击 ```部署``` 并检查流是否已启动，然后点击 ```仪表板```，仪表板将显示。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" /></div>

请确保检查流是否已启动。有时导入流不会自动启动流，因此仪表板将为空。请在下拉菜单中点击 `启动`。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload6.png" /></div>

成功！
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload7.png" /></div>

**步骤 6**. 您可以调整 ```IoU``` 和 ```Confidence``` 的阈值以获得更准确的结果。

- IoU=0, Confidence=0:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25, Confidence=33:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

### 快速了解流：
在此示例流中，我们构建了一个用于统计目标对象（如人、猫、狗和瓶子）数量的演示，带有一个 **计数选择** 下拉列表。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard1.png" /></div>

通过更改流中的 `function 节点`，您可以添加更多要统计的对象，或者完全将此功能更改为其他计算机视觉应用程序。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/counting_demo.png" /></div>

您可以通过查看 `model 节点` 来查看可以检测到哪些类型的对象。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/model_list.png" /></div>

您可以随意调整和使用流，但请注意，**不要** 在模型节点后放置太多的 `调试节点` 或 `预览节点`，因为从 AI 模型中打印出多个结果会消耗 CPU 并导致设备崩溃。

### 计算机视觉模型

对于这些提供的工作流，默认选择了 `YOLO11n 检测模型`，这是最新的实时目标检测模型。您也可以在节点中将其替换为其他模型。如果您想了解其他可用模型，可以参考此 [wiki](https://wiki.seeedstudio.com/cn/recamera_on_device_models/)。

**交并比 (IoU)**: IoU 是一种用于评估预测边界框与真实边界框之间重叠程度的指标。它的计算方法是两个框的交集面积与并集面积的比值。IoU 的值通常在 0 到 1 的范围内。我们将其标准化为 0 - 100 的范围，IoU 值为 0 表示预测框与真实框之间没有重叠，而值为 100 表示完全匹配，即两个框完全重叠。

**置信度 (Confidence)**: 在 YOLO 模型中，置信度表示预测边界框中包含目标的概率以及预测的准确性。它的值在 0 到 100.0 之间。

## 自定义您的仪表板并分享至社区

我们鼓励用户将他们开发和创建的仪表板分享至社区。我们在 [GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/Node-RED_Flow/public_flow) 上创建了一个文件夹。希望大家通过 **pull request** 的方式将仪表板分享至此，我们会对其进行整理和展示。
这里我们以在仪表板中添加补光灯功能为例，简单地添加一个节点并控制 reCamera。

**步骤 1**. 将 ```button group``` 节点拖到工作区，并按照以下设置进行编辑。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard2.png" /></div>

**步骤 2**. 添加一个新的 ui-group 配置节点，命名为 "Control Button"，然后保存。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard3.png" /></div>

**步骤 3**. 进入仪表板 2.0，将控制按钮框放置在模型选择下方。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard4.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.png" /></div>

**步骤 4**. 部署流程并进入仪表板。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard6.png" /></div>

**演示**:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.gif" /></div>

**步骤 5**: 别忘了导出流程的 json 文件并将其分享至我们的 GitHub。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard7.png" /></div>

## 端口列表
以下列出了 reCamera 使用的端口：

- **端口 22**: 用于远程 SSH 登录，默认开启。
- **端口 53**: 与 DNS 域名解析相关，用于网页重定向，默认开启。
- **端口 80**: 用于 HTTP 显示 Node-RED 应用的网页仪表板界面。
- **端口 554**: 用于 RTSP 视频流传输。
- **端口 9090**: 用于网页终端访问，登录需要密码。
- **端口 1880**: 专用于 Node-RED 操作。

## 恢复出厂设置
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

如果您需要重置设备，例如忘记设备的密码，可以长按 **User** 按钮，然后将设备连接到电源。当设备的 `红灯` **常亮**而不是闪烁时，松开 User 按钮。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-1.gif" /></div>

:::note
此操作将删除用户信息，包括您开发的应用程序或任何本地存储的图像和视频。请谨慎操作。
:::

如果您想将设备的固件恢复到特定版本，请访问 [操作系统版本控制](https://wiki.seeedstudio.com/cn/recamera_os_version_control)

## 多设备管理

如果您有多台 reCamera，可以通过设备背面的 **MAC 地址** 或 **S/N 编号**来区分它们。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/mac_address_tag.png" /></div>

或者，当您通过 USB 或 AP 将设备连接到笔记本电脑时，可以使用以下命令查看 MAC 地址：
```
ifconfig wlan0
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/last_six_digits.png" /></div>

## 摄像头方向
默认的摄像头视图方向如下图所示，其中 Type-C 接口**朝下**。请注意，其他方向可能会影响基于您训练的检测模型的准确性。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/default_orientation.jpeg" /></div>

## 资源

- [reCamera 宣传单](https://files.seeedstudio.com/wiki/reCamera/reCamera_one_pager.pdf)

- [reCamera 操作系统](https://github.com/Seeed-Studio/reCamera-OS)

- [reCamera 系列](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

- [reCamera SSCMA](https://github.com/Seeed-Studio/sscma-example-sg200x)


## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>