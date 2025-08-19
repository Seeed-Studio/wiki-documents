---
description: 本文主要介绍如何基于 CODESYS 使用 reComputer R1000 的 Modbus RTU 功能。

title: 如何使用 CODESYS 配置 R1000 的 Modbus RTU 功能
keywords:
  - 边缘控制器
  - reComputer R1000
  - CODESYS
  - Modbus
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/recomputer_r1000_use_modbus_rtu_with_codesys
last_update:
  date: 2024/10/10
  author: ShuishengPeng
---
## 简介
本文主要介绍如何基于 CODESYS 使用 reComputer R1000 的 Modbus RTU 功能。我们将使用 reComputer R1000 的两个 RS485 接口，一个接口用作 Modbus 主站，另一个接口用作 Modbus 从站。本文将详细说明如何在 CODESYS 上配置 Modbus 主站和从站，并展示如何将其部署到 reComputer R1000 上。

## 硬件准备

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

## 软件准备

* [CODESYS 开发系统 V3](https://store.codesys.com/de/codesys.html)
* [CODESYS Control for Raspberry Pi SL](https://store.codesys.com/de/codesys-control-for-raspberry-pi-sl.html)

## 开始使用

在开始之前，请确保您的 reComputer R1000 与主机处于同一网段，并且您已经在 reComputer R1000 上部署了 `CODESYS 运行时`。有关如何部署 `CODESYS 运行时` 的信息，请参考 [wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_install_codesys/)

### 硬件配置

将 R1000 的两个 RS485 接口连接，一个作为 Modbus 主站，另一个作为 Modbus 从站。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/hardware.png" /></center>

### 修改 R1000 的配置文件
输入以下命令：
```shell
    sudo nano /etc/codesyscontrol/CODESYSControl.cfg
```
在文件末尾添加以下内容：
```shell
# 在文件末尾添加以下内容，其中 ttyAMAx 是 reComputer R1000 的串口号。Linux.Devicefile.1~3 表示 CODESYS 中的串口号。这里将 CODESYS 的串口号绑定到 reComputer R1000 的串口号，否则 CODESYS 无法识别正确的串口。
    [SysCom]
    Linux.Devicefile.1=/dev/ttyAMAx
    Linux.Devicefile.2=/dev/ttyAMAx
    Linux.Devicefile.3=/dev/ttyAMAx
```
然后输入以下命令重启 CODESYS 服务：
```shell
    sudo systemctl restart codesyscontrol.service
    sudo systemctl restart codesysedge.service
```

### Modbus 主站配置
**步骤 1**：打开 CODESYS，点击 `File`--->`NEW Project` 创建一个新项目。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/1.png" /></center>

**步骤 2**：输入项目名称，选择 `Standard project`，然后点击 `OK`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/2.png" /></center>

**步骤 3**：在 `Device` 栏中选择 `CODESYS Control for Raspberry Pi 64 SL (CODESYS)`，在 `PLC_PRG in` 中选择 `Structured Text (ST)`，然后点击 `OK`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/3.png" /></center>

**步骤 4**：右键点击项目并选择 `Add Device` 添加设备。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/4.png" /></center>

**步骤 5**：点击 `Modbus`--->`Modbus serial Port`--->`Modbus COM` 添加一个 Modbus 串口设备。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/5.png" /></center>

**步骤 6**：双击新添加的 `Modbus_COM`，点击 `General`，可以设置串口号、波特率等信息。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/6.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/7.png" /></center>

**步骤 7**：右键点击 `Modbus_COM` 并点击 `Add Device`，为此端口添加一个 Modbus 设备。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/8.png" /></center>

**步骤 8**：选择 `Modbus Serial Master` ---> `Modbus Client, COM Port`，将一个 Modbus 主站设备绑定到此串口。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/9.png" /></center>

**步骤 9**：右键点击 `Modbus_Clent_COM_Port` 并选择 `Add Device`，为此 Modbus 主站添加要操作的从站设备。您可以在此处添加多个从站设备。这些从站设备表示主站需要操作的从站设备，稍后需要配置主站对这些从站的操作。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/10.png" /></center>

**步骤 10**：选择 `Modbus Serial Slave` ---> `Modbus Server, COM Port`，添加一个 Modbus 从站设备。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/11.png" /></center>

**步骤 11**：双击新添加的从设备，在 `General` 中可以设置 `Server address` 和 `Response timeout` 属性

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/12.png" /></center>

**步骤 12**：点击 `Modbus Server Channel`，然后点击右下角的 `Add Channel` 来配置主站对从站执行的操作，例如选择功能码、操作的寄存器数量等。您可以点击 `Add Channel` 添加多个操作

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/13.png" /></center>

**步骤 13**：点击 `ModbusGenericSerialServer I/O Mapping`，可以将数据映射到指定变量，并在右下角的 `Always update variables` 列中选择 `Enable 1`。至此，Modbus 主站的配置完成。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/master/14.png" /></center>



### Modbus 从站配置

**步骤 1**：右键点击项目并选择 `Add Device` 添加设备

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/1.png" /></center>

**步骤 2**：选择 `Modbus` ---> `Modbus Serial Port` ---> `Modbus COM` 添加一个 Modbus 串口

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/2.png" /></center>

**步骤 3**：点击新添加的 Modbus 串口，选择 `General`，并配置串口号、波特率等信息

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/3.png" /></center>

**步骤 4**：右键点击新添加的 Modbus 串口，选择 `Add Device`，并添加 Modbus 从设备

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/4.png" /></center>

**步骤 5**：选择 `Modbus` ---> `Modbus Serial Device` ---> `Modbus Serial Device` 添加一个从设备

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/5.png" /></center>

**步骤 6**：双击新添加的从设备。在 `General` 中可以配置该从设备的属性，例如寄存器和线圈的数量、地址等。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/6.png" /></center>

**步骤 7**：点击 `Modbus Serial Device I/O Mapping`，并在右下角的 `Always update variable` 中选择 `Enable 1`。至此，Modbus 从站配置完成。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/slave/7.png" /></center>

### Modbus 部署

**步骤 1**：双击项目，点击 `Scan Network`，然后选择您的设备并点击 `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/1.png" /></center>

**步骤 2**：输入 reComputer R1000 的用户名和密码以连接设备

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/2.png" /></center>

**步骤 3**：点击如图所示的按钮，将项目部署到 reComputer R1000

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/3.png" /></center>

**步骤 4**：点击 Start 按钮启动项目。您可以看到 Modbus 主站和从站的指示灯均为绿色，表示 Modbus 通信正常。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/4.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/MODBUS_RTU/deploy/5.png" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>