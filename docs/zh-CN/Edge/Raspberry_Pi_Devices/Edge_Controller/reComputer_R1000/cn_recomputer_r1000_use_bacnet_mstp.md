---
description: 本文主要介绍如何在 reComputer R1000 上进行 bacnet MS/TP 协议的功能测试。
title: reComputer R1000 使用 bacnet MS/TP
keywords:
  - Edge
  - reComputer R1000
  - Modbus RTU
  - rs485
image: https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/wirshark_capture.webp
slug: /cn/reComputer_r1000_use_bacnet_mstp
last_update:
  date: 10/25/2024
  author: ShuishengPeng
---

# reComputer R1000 使用 bacnet MS/TP

## 介绍
BACnet MS/TP（主从/令牌传递）是一种用于楼宇自动化和控制网络的通信协议。它是 BACnet（楼宇自动化和控制网络）协议套件的一部分。MS/TP 通常使用 RS-485 物理层和总线拓扑。所有设备都连接到同一根双绞线电缆上。MS/TP 网络中有主站和从站。主站负责生成和传递令牌，而从站只在收到请求时响应。主设备通过传递令牌来确定哪个设备可以发送数据。令牌传递机制确保总线上的通信是有序且无冲突的。

本文主要介绍如何在 reComputer R1000 上进行 bacnet MS/TP 协议的功能测试。我们在 reComputer R1000 上模拟了一个 bacnet MS/TP 服务器，然后在 W10 PC 上使用 YABE 检查设备是否存在。如果能正常找到我们模拟的设备，说明 bacnet MS/TP 通信正常。

## 开始使用

在开始这个项目之前，您可能需要按照这里的描述提前准备硬件和软件。

### 硬件准备

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
* 由于 bacnet MS/TP 使用 RS485 物理层，您可以参考这个 [wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_use_rs485_modbus_rtu/) 了解如何在 reComputer R1000 V1.0 上正常使用 RS485 功能。
* 我们借助 `bacnet-stack` 库应用程序来模拟服务器，因此您需要输入以下命令来下载它：
  ```shell
  git clone https://github.com/bacnet-stack/bacnet-stack.git
  cd bacnet-stack
  ```
* 请访问此 [链接](https://sourceforge.net/projects/yetanotherbacnetexplorer/) 并下载 YABE（Yet Another BACnet Explorer）。
* 请访问此 [链接](https://www.wireshark.org/) 并下载 wireshark。
### 硬件配置

此测试使用 RS485 转 USB 模块连接 reComputer R1000 和 W10 PC。
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

## 测试 bacnet mstp 通信功能的步骤
**步骤 1**：下载 `bacnet-stack`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/downloadbacnet-stack.gif" /></center>

**步骤 2**：`bacnet-stack` 的默认串口号是 `/dev/ttyUSB0`。如果您实际使用的端口号不是这个，将无法通信，因此您需要修改端口号。需要修改的文件名是 `ports/ linux/rs485.c`。将其更改为您需要使用的端口号。我将其更改为 `/dev/ttyAMA30`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/change_serial_port.gif" /></center>

**步骤 3**：输入以下指令进行编译。编译结果可以在 bin 目录中看到。
```shell
make clean
make mstp
# wait
cd bin/
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/build_bacnet_stack.gif" /></center>

**步骤 4**：运行 `bacserv` 并使用 `YABE` 搜索模拟设备。您可以看到我们模拟的设备被成功搜索到。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/mstp_connection.gif" /></center>


**步骤 5**：使用 wireshark 查看 bacnet MS/TP 消息。您可以看到我们模拟的设备传递令牌。由于我的总线上没有其他设备，它一直在传递令牌。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Wirshark_capture.gif" /></center>

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