---
description: 在本wiki中，我们将探索如何使用reComputer 1000与N3uron和BACnet IoT构建楼宇管理系统(BMS)。学习如何集成和模拟设备，有效增强您的BMS解决方案。
title: 在reComputer R1000上连接N3uron与BACnet
keywords:
  - reComputer R1000
  - Getting started
  - IIoT
  - BMS
  - N3uron
  - BACnet
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/recomputer_r1000_n3uron_bacnet
last_update:
  date: 7/11/2024
  author: Kasun Thushara
---
## 介绍

BACnet是楼宇管理系统(BMS)中广泛采用的协议，因其开放标准而备受欢迎，允许不同制造商设备之间的无缝集成和通信。其受欢迎程度还得益于其灵活性，支持各种网络配置并提供强大的互操作性。[N3uron](https://n3uron.com/)是一个功能强大且多功能的平台，通过实现高效的数据采集和管理来增强BACnet的功能。使用BACnet TCP与YABE房间模拟器，用户可以模拟和可视化BACnet设备，便于测试和开发。这种组合确保了BMS解决方案的全面有效方法，充分利用了每种技术的优势。

## 先决条件

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### 软件

我们强烈建议学习[N3uron 入门指南](https://wiki.seeedstudio.com/cn/recomputer_r1000_n3uron/)。它提供了导航 N3uron Web 界面、理解 Web UI 和 Web Vision 模块等概念、掌握标签概念以及创建基本仪表板的重要见解。如果您还没有探索这些基础知识，建议在进一步操作之前先学习这些内容。您可以通过提供的链接访问该指南。

### YABE

请访问此[链接](https://sourceforge.net/projects/yetanotherbacnetexplorer/)并下载 YABE（Yet Another BACnet Explorer）。YABE 是一个多功能工具，允许您模拟和探索 BACnet 设备，非常适合测试和开发目的。在您的主机 PC 上下载并安装后，YABE 将用于模拟房间温度数据，然后我们将使用 reComputer R1000 上的 Node-RED 读取和处理这些数据。

### 为 BACnet TCP/IP 配置以太网设置

由于您的 PLC/设备 IP 域与您的无线设置不同，您可能需要手动更改 IP 配置。为此，

- **步骤 01**：如果您运行的是 **Bullseye**，请运行以下命令：

```sh
sudo nano /etc/dhcpcd.conf
```

- **步骤 02**：然后根据您的 PLC/设备网络域配置以太网端口设置，并使用 **metric** 命令设置优先级。最低的 metric 值具有最高优先级。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/ipconfig.PNG" /></center>

- **步骤 01**：如果您运行的是 **Bookworm OS**，您可以使用 GUI 点击网络图标。在高级选项下，选择"编辑连接"。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network1.PNG" /></center>

- **步骤 02**：选择"有线连接 2"（ETH 1），并在 IPv4 设置下添加地址、网络掩码和网关。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network2.PNG" /></center>

## 使用 N3uron 的 BACnet 客户端连接到房间控制系统

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
- 命名通道（例如，`CH01`）。
  
  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/channeladd.PNG" /></center>

**配置 BACnet 客户端**

- 点击网络接口字段右侧的 `Network interface discovery` 按钮。
- 选择您要连接的网络对应的接口（例如，使用 `0.0.0.0` 表示所有接口）。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/networkad.PNG" /></center>

- 默认的 BACnet 通信端口是 `47808`（十六进制的 BAC0）。
- 将广播地址保留为 `255.255.255.255`。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/CH1.PNG" /></center>

- 配置完模块后，点击 `Save`。
- 重启模块。

**发现并选择设备**

- 点击设备字段右侧的 `Browse Devices` 按钮。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/browsedevice.PNG" /></center>

- 发现并选择您要连接的相应设备。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/searcheddevices.PNG" /></center>

- 将其他参数保留为默认值。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/room_1.PNG" /></center>

- 配置完模块和设备后，点击 `Save`。
- 重启模块。

- N3uron 中的"BACnet 浏览器"被打开，选择设备后，点击"重新浏览"以查看对象列表。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/browser.PNG" /></center>

- 找到"Temperature Indoor"文件夹并将其拖拽到"模型"部分。在"数据"部分的"实时"选项卡下，"Temperature Indoor"的标签值正确显示。

 <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/drag.gif" /></center>

 此时，连接已准备就绪，我们可以继续从头开始创建新标签。

## 创建新标签

- 在资源管理器面板中，选择 `Tags`。
- 在模型面板中，创建一个新标签并将其命名为 `PRESENT_VALUE`。

**配置标签**

- 按如下设置配置参数：
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
      - **Property**: 通过点击右侧按钮浏览并发现属性。选择 `ANALOG_INPUT:0`，然后选择 `PRESENT_VALUE`。在写入优先级模式中选择 `From device`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/tag-config.PNG" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/search-tag.png" /></center>

现在，转到导航面板中的数据/实时部分，您应该能够看到从该设备读取的所有数据。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron_bacnet/realtime.png" /></center>

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
