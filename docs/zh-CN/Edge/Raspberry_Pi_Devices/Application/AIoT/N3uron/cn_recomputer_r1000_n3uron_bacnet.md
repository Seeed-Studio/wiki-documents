---
description: 在本篇 Wiki 中，我们将探讨如何使用 reComputer 1000 配合 N3uron 和 BACnet IoT 构建楼宇管理系统 (BMS)。学习如何集成和模拟设备，从而有效提升您的 BMS 解决方案。
title: 在 reComputer R1000 上连接 N3uron 和 BACnet
keywords:
  - reComputer R1000
  - 入门指南
  - 工业物联网 (IIoT)
  - 楼宇管理系统 (BMS)
  - N3uron
  - BACnet
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/recomputer_r1000_n3uron_bacnet
last_update:
  date: 2024/7/11
  author: Kasun Thushara
---
## 介绍

BACnet 是楼宇管理系统 (BMS) 中广泛采用的协议，其开放标准允许来自不同制造商的设备之间实现无缝集成和通信。它的流行还得益于其灵活性，支持多种网络配置并提供强大的互操作性。[N3uron](https://n3uron.com/) 是一个强大且多功能的平台，通过高效的数据采集和管理进一步增强了 BACnet 的能力。使用 BACnet TCP 和 YABE Room Simulator，用户可以模拟和可视化 BACnet 设备，从而促进测试和开发。这种组合充分利用了每种技术的优势，确保了全面且高效的 BMS 解决方案。

## 前置条件

### 硬件

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件

我们强烈建议先学习 [N3uron 入门指南](https://wiki.seeedstudio.com/cn/recomputer_r1000_n3uron/)。该指南提供了关于如何使用 N3uron Web 界面的基本知识，包括 Web UI 和 Web Vision 模块的概念、标签的使用以及创建基础仪表板的操作。如果您尚未了解这些基础内容，建议先通过提供的链接进行学习。

### YABE

请访问此 [链接](https://sourceforge.net/projects/yetanotherbacnetexplorer/) 下载 YABE (Yet Another BACnet Explorer)。YABE 是一个多功能工具，可用于模拟和探索 BACnet 设备，非常适合测试和开发用途。下载并安装到您的主机 PC 上后，YABE 将用于模拟房间温度数据，我们随后会使用 reComputer R1000 上的 Node-RED 读取和处理这些数据。

### 配置 BACnet TCP/IP 的以太网设置

由于您的 PLC/设备 IP 域与无线设置不同，您可能需要手动更改 IP 配置。具体操作如下：

- **步骤 01**：如果您运行的是 **Bullseye**，请运行以下命令：

```sh
sudo nano /etc/dhcpcd.conf
```

- **步骤 02**：然后根据您的 PLC/设备网络域配置以太网端口设置，并使用 **metric** 命令设置优先级。数值越低，优先级越高。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/ipconfig.PNG" /></center>

- **步骤 01**：如果您运行的是 **Bookworm OS**，可以通过 GUI 点击网络图标。在高级选项中，选择“编辑连接”。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network1.PNG" /></center>

- **步骤 02**：选择“Wired Connection 2”（ETH 1），然后在 IPv4 设置中添加地址、子网掩码和网关。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network2.PNG" /></center>

## 从 N3uron 使用 BACnet 客户端连接到房间控制器

**创建模块**
- 导航到 `Config => Modules => Model => New Module`。

  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/Module.PNG" /></center>

**配置模块**
- 为模块提供一个名称（例如，`BACnetClient`）。
- 分配模块类型（`BacnetClient`）。
- 保存新配置。

  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/bacnetmodule.PNG" /></center>

**创建新通道**
- 点击模型标题左侧的按钮。
- 选择 `New Channel`。
- 为通道命名（例如，`CH01`）。

  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/channeladd.PNG" /></center>

**配置 BACnet 客户端**
- 点击网络接口字段右侧的 `Network interface discovery` 按钮。
- 选择要连接的网络的对应接口（例如，使用 `0.0.0.0` 表示所有接口）。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/networkad.PNG" /></center>

- 默认的 BACnet 通信端口是 `47808`（十六进制为 BAC0）。
- 将广播地址保留为 `255.255.255.255`。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/CH1.PNG" /></center>

- 配置完成后，点击 `Save`。
- 重启模块。

**发现并选择设备**
- 点击设备字段右侧的 `Browse Devices` 按钮。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/browsedevice.PNG" /></center>

- 发现并选择要连接的对应设备。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/searcheddevices.PNG" /></center>

- 将其他参数保留为默认值。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/room_1.PNG" /></center>

- 配置模块和设备后，点击 `Save`。
- 重启模块。

- 打开 N3uron 中的 "BACnet Browser"，选择设备后，点击 "Rebrowse" 查看对象列表。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/browser.PNG" /></center>

- 找到 "Temperature Indoor" 文件夹并将其拖动到 "Model" 部分。在 "Real Time" 标签下的 "Data" 部分中，可以正确显示 "Temperature Indoor" 的标签值。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/drag.gif" /></center>

此时，连接已准备就绪，我们可以继续从头创建新标签。

## 创建新标签
- 在 Explorer 面板中，选择 `Tags`。
- 在 Model 面板中，创建一个新标签并命名为 `PRESENT_VALUE`。

**配置标签**

- 按以下方式设置配置参数：
  - **Type**: `Number`
  - **Format**: `Default`
  - **Client Access**: `R`
  - **Details**:
    - **Description**: `Present value`（可选）
  - **Scaling**:
    - **Enabled**: `Yes`
  - **Source**:
    - **Enabled**: `Yes`
    - **Module type**: `BacnetClient`
    - **Module name**: `BACnetClient`
    - **Config**:
      - **Scan rate**: `5000`
      - **Property**: 点击右侧按钮浏览并发现属性。选择 `ANALOG_INPUT:0`，然后选择 `PRESENT_VALUE`。在写入优先级模式中选择 `From device`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/tag-config.PNG" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/search-tag.png" /></center>

现在，转到导航面板中的 Data/Real-Time 部分，您应该能够看到从该设备读取的所有数据。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/realtime.png" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>