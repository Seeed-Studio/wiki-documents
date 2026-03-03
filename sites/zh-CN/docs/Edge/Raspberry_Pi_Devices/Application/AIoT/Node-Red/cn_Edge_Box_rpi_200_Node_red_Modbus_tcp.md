---
description: 学习如何在 EdgeBox RPi 200 上将 Modbus TCP 与 Node-RED 集成。本指南涵盖硬件设置、Modbus 设备配置以及创建 Node-RED 流程，以实现高效的工业自动化和监控。
title: Edge Box RPi 200 与 Node Red 和 Modbus TCP
keywords:
  - Edge Controller
  - Edge-Box
  - Node-Red
  - Modbus
image: https://files.seeedstudio.com/wiki/Edge_Box/nodered/EdgeBox-RPi-200-font.jpg
slug: /cn/edge_box_rpi_200_node_red_modbus_tcp
last_update:
  date: 05/27/2024
  author: Kasun Thushara
---
## 介绍

**Modbus** 是工业环境中广泛使用的通信协议，以其简单性和稳健性而闻名。**Modbus RTU（远程终端单元）** 是一种串行通信协议，运行在 RS-232 或 RS-485 物理层上。它使用紧凑的二进制数据表示，使其在长距离传输和噪声环境中高效运行。另一方面，**Modbus TCP** 将协议扩展到以太网网络，将 Modbus 帧封装在 TCP/IP 数据包中。这允许更快的通信速度，并将 Modbus 与现代 IT 基础设施集成。由于其可靠性、易于实现以及能够促进各种设备和系统（如 PLC、传感器和 SCADA 系统）之间的通信，这两个版本在工业环境中都备受青睐。

## 开始使用

在开始此项目之前，您可能需要按照此处描述的方式提前准备硬件和软件。

### 硬件准备

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Box RPi 200</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

#### Modbus 支持设备

EdgeBox RPi 200 支持与各种设备进行 Modbus 通信，包括 **PLC、变频器、HMI、电能表和 BMS** 系统。在本案例中，将使用支持 **Modbus TCP/IP 协议** 的西门子 LOGO PLC。

### 软件准备

Edge Box-200 出厂时预装了树莓派操作系统。如果您是第一次启动此设备，请阅读我们的[入门指南](https://wiki.seeedstudio.com/cn/Edge_Box_introduction/)。
我们准备了一份[Node-RED 入门指南](https://wiki.seeedstudio.com/cn/Edge-Box-Getting-Started-with-Node-Red/)。建议您在继续阅读本文档之前先查看此指南。

### 为 Modbus TCP/IP 配置以太网设置

由于您的 PLC/设备 IP 域与无线设置不同，您可能需要手动更改 IP 配置。为此，

- **步骤 01**：运行以下命令：

```sh
sudo nano /etc/dhcpcd.conf
```

- **步骤 02**：然后根据您的 PLC/设备网络域配置以太网端口设置，并使用 **metric** 命令设置优先级。最低的 metric 值具有最高优先级。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/ipconfig.PNG" /></center>

## 安装 Modbus 节点

要安装 Modbus 节点，请按照以下步骤操作：

**步骤 1.** 点击设置按钮，该按钮由位于右上角的**三条横线**图标表示，然后选择**管理调色板**。

**步骤 2.** 在调色板选项卡中，导航到**安装选项卡**。

**步骤 3.** 使用节点搜索栏查找所需的 [Modbus 节点](https://flows.nodered.org/node/node-red-contrib-modbus)。

<center><img width={600} src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/pallet.PNG" /></center>

**步骤 4.** 点击节点旁边的**安装**按钮。

**步骤 5.** 如果出现提示，请从下拉警告窗口中点击**安装**按钮以确认安装。

**步骤 6.** 等待安装过程完成。完成后，**安装**按钮应该变为**已安装**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/nodered-edgebox1.gif" style={{width:800, height:'auto'}}/></div>

## 识别 Modbus 地址

识别正确的 Modbus 地址是一个关键步骤。建议**查阅 PLC 或设备制造商的数据表，以获取有关 Modbus 地址的详细信息，包括输入、输出和保持寄存器**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus.PNG" style={{width:600, height:'auto'}}/></div>

基于这些信息，您可以在标签配置中调整 Modbus 地址。例如，如果数据表将输出线圈 Q1 列为 8193，您应该在 Node-RED 中将地址配置为 8192（**从原始地址减去一**）。同样，如果网络输入列为 1 且为线圈类型，则在 Node-RED 中地址应设置为 0。

## 配置 Modbus-Write 节点

**步骤 1**. **拖放** Modbus-Write 节点到工作区，然后**双击**节点以打开其设置。

**步骤 2**. 在**服务器**选项卡中，编辑它以通过输入以下详细信息来添加您的设备：

- **名称**：服务器名称
- **类型**：TCP
- **主机**：Modbus 服务器的 IP 地址
- **端口**：Modbus 服务器的端口地址（通常为 502）
- **Unit-Id**：255（Unit-ID 用于识别 Modbus 网络中的各个设备，特别是当多个设备共享同一通信线路时）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/server.PNG" style={{width:600, height:'auto'}}/></div>

**步骤 3**. **为您的节点指定一个合适的名称**，例如"Network IP 1"。在此演示中，您正在控制 PLC 程序中的网络输入。

**步骤 4**. 将 **FC 选项**设置为 **FC 5: Force Single Coil**。

**步骤 5**. 将**地址设置为 0**（因为我们正在寻址输入 0）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/networkip1.PNG" style={{width:600, height:'auto'}}/></div>

**步骤 6**. 使用注入节点，我们可以注入布尔值。在这里，我们将为此目的使用几个注入节点。

整体步骤可以演示如下

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus-write.gif" style={{width:800, height:'auto'}}/></div>

## 配置 Modbus-Read 节点

**步骤 1**. **拖拽** Modbus-Read 节点到流程中。您可以在调色板的 Modbus 选项卡中找到此节点。

**步骤 2**. **双击** Modbus-Read 节点以打开其设置。

**步骤 3**. **配置以下设置：**

- **Name**：给它一个合适的名称，例如 "ReadOutputs"。
- **FC value**：将 FC 值更改为 FC 5: Read Coil Status。
- **Address**：将地址设置为 8192（根据制造商的数据表）。
- **Quantity**：将数量设置为 4，在这种情况下，有 4 个数字输出。
- **Poll Rate**：将轮询速率更改为适合您应用需求的值。
- **Server**：将服务器设置为 "MyPLC"（在前面的示例中配置）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbusread.PNG" style={{width:600, height:'auto'}}/></div>

## 配置 Modbus-Response 节点

**Modbus-Response 节点** 用于显示 Modbus Read/Write 节点的响应。

**步骤 1**. **拖拽** Modbus-Response 节点到流程中。

**步骤 2**. 与 **Modbus Read** 节点连接。响应将在您的 Modbus-Response 节点下显示一个数字数组。这些数字表示每个数字输出的计数。

**步骤 3**. **拖拽调试节点** 用于检查目的。然后与 **Modbus Read 节点** 连接。

通过遵循这些步骤，您可以有效地读取和显示来自 Modbus TCP 设备的寄存器/线圈值

整体步骤可以如下演示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Edge_Box/nodered/modbus-read.gif" style={{width:800, height:'auto'}}/></div>

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
