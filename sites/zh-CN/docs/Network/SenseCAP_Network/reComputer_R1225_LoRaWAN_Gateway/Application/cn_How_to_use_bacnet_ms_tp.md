---
description: 本文主要介绍如何在 reComputer R1225 上进行 bacnet MS/TP 协议的功能测试。
title: 如何在 R1225 上使用 bacnet MS/TP
keywords:
  - 网关
  - SenseCAP
  - 边缘控制器
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /how_to_use_bacnet_ms_tp_with_r1225
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 04/017/2026
  author: Kian
---

## 介绍

BACnet MS/TP（主从/令牌传递，Master-Slave/Token Passing）是一种用于楼宇自动化和控制网络的通信协议，它是 BACnet（Building Automation and Control Networks，楼宇自动化与控制网络）协议族的一部分。MS/TP 通常使用 RS-485 物理层和总线拓扑结构，所有设备都连接在同一根双绞线上。在 MS/TP 网络中存在主站和从站，主站负责生成和传递令牌，而从站只在接收到请求时进行响应。主站设备通过传递令牌来决定哪个设备可以发送数据。令牌传递机制确保了总线上通信的有序性和无冲突性。

本文主要介绍如何在 reComputer R1225 上进行 bacnet MS/TP 协议的功能测试。我们在 reComputer R1225 上模拟了一个 bacnet MS/TP 服务器，然后在 W10 PC 上使用 YABE 检查设备是否存在。如果能够正常发现我们模拟的设备，则说明 bacnet MS/TP 通信正常。

## 入门准备

在开始本项目之前，你可能需要按照这里的说明提前准备好硬件和软件。

### 硬件准备

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1225</th>
</tr>
    <tr class="table-trnobg"></tr>
<tr class="table-trnobg">
<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/reComputer-R1225.jpg" style={{width:300, height:'auto'}}/></div></td>
</tr>
    <tr class="table-trnobg"></tr>
<tr class="table-trnobg">
<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1225-LoRaWAN-Gateway-Industrial-Controller-US915-p-6722.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
  </table>
</div>

### 软件

* 由于 bacnet MS/TP 使用 RS485 物理层，你可以参考这篇关于如何在 reComputer R1225 上使用 RS485 功能的 [wiki](https://wiki.seeedstudio.com/cn/how_to_use_modbus_rs485_with_r1225/)。
* 我们借助 `bacnet-stack` 库应用来模拟服务器，因此你需要输入以下命令来下载它：

  ```shell
  git clone https://github.com/bacnet-stack/bacnet-stack.git
  cd bacnet-stack
  ```
* 请访问此 [链接](https://sourceforge.net/projects/yetanotherbacnetexplorer/) 下载 YABE（Yet Another BACnet Explorer）。
* 请访问此 [链接](https://www.wireshark.org/) 下载 wireshark。

### 硬件连接配置

我们使用 RS485 转 USB 转换器将 R1225 与 Windows 10 PC 连接进行测试。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

## 测试 bacnet MS/TP 通信功能的步骤

### 方法一：使用命令行界面（CLI）

**步骤 1**：下载 `bacnet-stack`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/downloadbacnet-stack.gif" /></center>

**步骤 2**：修改端口号

`bacnet-stack` 的默认串口号是 `/dev/ttyUSB0`。如果你实际使用的端口号不是它，将无法通信，因此需要修改端口号。需要修改的文件名为 `ports/ linux/rs485.c`。将其中的端口号改为你需要使用的端口号。我这里改成了 `/dev/ttyAMA30`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/change_serial_port.gif" /></center>

**步骤 3**：输入以下指令进行编译。编译结果可以在 bin 目录中看到。
```shell
make clean
make mstp
# wait
cd bin/
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/build_bacnet_stack.gif" /></center>

**步骤 4**：运行 `bacserv`，并使用 `YABE` 搜索模拟设备。你可以看到我们模拟的设备已被成功搜索到。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/mstp_connection.gif" /></center>


**步骤 5**：使用 wireshark 查看 bacnet MS/TP 报文。你可以看到我们模拟的设备在传递令牌。由于我的总线上没有其他设备，所以它会一直传递令牌。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Wirshark_capture.gif" /></center>

### 方法二：使用图形用户界面（GUI）

#### RS485 参数配置

按照 [Quick Start](https://wiki.seeedstudio.com/cn/r1225_quick_start/) 指南访问 SenseCAP Gateway OS 的 Web 界面。

**步骤 1**：登录 Luci

在浏览器中输入设备的 IP 地址进入 Luci 页面。
然后输入设备的用户名和密码进行登录，并点击 Login 按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Luci_login.png" alt="pir" width={800} height="auto" /></p>

**步骤 2**：点击 `RS485` - `Serial Settings`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_1.png" alt="pir" width={200} height="auto" /></p>

R1225 的三个 485 通道的参数设置都集成在这里。

首先，选择你要使用的通道（CH1、CH2、CH3）；

接着，配置参数：波特率、数据位、停止位、校验位、流控以及读取超时时间。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_2.png" alt="pir" width={800} height="auto" /></p>

#### BACnet MS/TP 参数配置

在完成三个 RS-485 端口的参数配置后（默认设置为 “9600, 8, 1, N”），即可进行 BACnet MS/TP 的配置。

**步骤 3**：点击 `RS485` - `Protocol Configuration`

选择你要调试的通道（CH1、CH2、CH3）。

在协议状态中选择 “Enable”，在协议类型中选择 “BACnet MS/TP”。

启用后，你会看到 BACnet MS/TP 设置界面；只需根据所连接传感器的规格书进行配置即可。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/bacnet1.png" alt="pir" width={800} height="auto" /></p>

**步骤 4**：BACnet MS/TP 参数设置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/bacnet2.png" alt="pir" width={800} height="auto" /></p>

**步骤 5**：点击 `Save & Apply`

设置生效后，点击 `Read Data`，你可以在 `Frame Sata` 中看到读取到的数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/bacnet3.png" alt="pir" width={800} height="auto" /></p>

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
