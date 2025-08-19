---
description: 本文介绍如何使用 `FIN Framework` 的 `Modbus Connector`。

title: 使用 FIN 在 reComputer R1000 上实现 Modbus TCP/RTU
keywords:
  - 边缘控制器
  - reComputer R1000
  - FIN
  - ModbusTCP/RTU
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fin_modbus_tcp_and_rtu
last_update:
  date: 2024/07/15
  author: ShuishengPeng
---

## 介绍
FIN Framework（FIN）是一款软件框架，包含一系列应用套件，可用于集成、控制、管理、分析、可视化和连接。其功能可以被 OEM 集成到各种产品和服务中。

本文介绍了如何使用 `FIN Framework` 的 `Modbus Connector`，详细讲解了在 FIN Framework 中使用 Modbus TCP/RTU 的方法，主要包括三个方面：创建 `FIN Framework` 项目、配置 `串口号`、配置 `Modbus Connector`，以及向 `Equip` 添加数据点。

## 开始

在开始此项目之前，您需要提前准备好硬件和软件，如下所述。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### 软件准备
* 关于如何安装 FIN Framework，可以参考此 [wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_install_fin/)。
* 关于如何使用 reComputer R1000 的 Modbus 功能，可以参考此 [wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_use_rs485_modbus_rtu/)。
* 在 W10 PC 上使用 [modbusmechanic](https://modbusmechanic.scifidryer.com/)。您也可以使用其他 Modbus 测试工具。

### 硬件配置

对于 ModbusTCP，我们使用以太网线将 W10 PC 和 reComputer R1000 连接到交换机，以确保它们在同一网络段。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

对于 ModbusRTU，我们使用 rs485 转 USB 模块将 reComputer R1000 与 W10 PC 连接。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

### 创建新项目
**步骤 1**：点击主页左下角的 `Create` 按钮，会弹出一个新窗口。弹窗主要有三个属性需要填写：
  - NAME：新项目的名称
  - DISPLAY NAME：显示的项目名称
  - DESCRIPTION：项目描述

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_1.gif" /></center>

**步骤 2**：打开项目，进入 `DB Builder`，点击 `Connectors`，此时可以看到没有 `Modbus` 选项。我们需要打开 `FIN Framework` 的 `Modbus Connector`，然后这里会出现 `Modbus` 选项。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_2.gif" /></center>

### 为 Modbus TCP 配置 `Modbus Connector`

**步骤 1**：打开 `Modbus Connector`。点击 `Settings => Ext` 并找到 `Modbus`。此时，`Modbus` 标记为红色。点击 `Enable`，可以看到 `Modbus` 标记变为绿色，表示 `Modbus Connector` 已成功打开。再次进入 `DB Builder`，可以看到已经有 `Modbus` 选项。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_3.gif" /></center>

**步骤 2**：添加一个新的 `Modbus` 连接。点击 `Modbus => Add`，弹出的新窗口主要有以下参数需要填写：
  - Dis：连接器的名称
  - ModbusSlave：这是所连接的 Modbus 设备的从站编号（默认是 1）
  - Existing Register Map：如果用户已经配置了一个 `Modbus` 连接器，可以在这里选择可用的寄存器，或者通过下一个属性 ModbusRegMapUri 创建一个新的寄存器。
  - ModbusRegMapUri：用户需要在此指定与该连接器关联的寄存器映射的名称。将 "xxx" 替换为寄存器映射的名称。
  - Uri：在此指定 Modbus 连接器的 URI。URI 的格式如下表所示：
   <div class="table-center">

  | 协议                                              | URI 设置        | 示例    | 备注 |
  | ------------------------------------------------------------ | ----------- | -------------- | --------- |
  | TCP/IP | `modbus-tcp://host:port/` | `modbus-tcp://10.0.0.17/` | 默认端口是 502，如果是标准端口可以省略       |
  | RTU over TCP/IP  | `modbus-rtutcp://host:port/`  | `modbus-rtutcp://192.168.1.120:9001/`  | 默认端口是 502，如果是标准端口可以省略      |
  | RTU over RS-485  | `modbus-rtu://<port>-<baud>-<dataBits>-<parity>`  | `modbus-rtu://serial0-9600-8n1-none`  |       |

  </div>

在我们的示例中，我们将寄存器映射指定为 "r1000_demo"，然后在 Uri 中添加了设备的 IP。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_4.gif" /></center>

**步骤 3**：添加新的 `Register Maps`。点击 `Register Maps => Add`，输入 `Name`，该名称需要与第二步中的 `ModbusRegMapUri` 名称保持一致，最后点击 `ADD`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_5.gif" /></center>

系统将在目录 `opt/finFramework_5.1.6.55/var/proj/recomputer_R1000_demo/data/modbus/` 中创建一个新的 `r1000_demo.csv` 文件。该文件描述了我们需要读取的 Modbus 寄存器信息。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_register_map_addr.png" /></center>


**步骤 4**：添加需要读取的寄存器信息。`Modbus Connector` 作为 Modbus 主设备存在，它将读取从设备的寄存器。我们需要配置需要读取的寄存器信息。点击 `r1000_demo`，可以看到默认情况下有一个 `ping` 的描述，这是必须的。我们继续添加新的寄存器信息，点击 `Register Maps => r1000_demo => Add`。弹出的新窗口主要有以下参数需要填写：

- name（必填）：寄存器名称。

  - 必须唯一
  - 必须以小写字母 a-z 开头
  - 仅允许使用 a-z、A-Z、0-9 和下划线。不允许使用空格或其他特殊字符。

- addr（必填）：这是遵循 Modbus 规范的寄存器地址。

  - 0xxxx - 线圈 (00001-065536)
  - 1xxxx - 离散输入 (10001-165536)
  - 3xxxx - 输入寄存器 (30001-365536)
  - 4xxxx - 保持寄存器 (40001-465536)

- data（必填）：定义寄存器的数据类型。

  - 类型：
    - bit - 布尔值
    - u1 - 无符号 8 位整数
    - u2 - 无符号 16 位整数
    - u4 - 无符号 32 位整数
    - s1 - 有符号 8 位整数
    - s2 - 有符号 16 位整数
    - s4 - 有符号 32 位整数
    - s8 - 有符号 64 位整数
    - f4 - 32 位浮点数
    - f8 - 64 位浮点数

- rw（必填）：确定读写权限。

  - rw - 寄存器可读写
  - r - 寄存器只读
  - w - 寄存器只写

- scale（可选）：允许用户对寄存器应用比例因子。格式为 [操作符] [数字]，其中因子是一个数值常量。

  - 示例：
    - 加：+1.5
    - 减：-0.25
    - 乘：*10
    - 除：/1000

- dis（可选）：这是一个可选标签，用户可以为寄存器指定一个友好的显示名称。

- unit（可选）：定义寄存器使用的单位。

- tags（可选）：这是应用于数据库中点的标签。

- folderPath（可选）：如果用户希望组织点，可以通过应用 folderPath 来实现。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_6.gif" /></center>

**步骤 5**：通信测试。添加寄存器的描述信息后，可以进行通信测试。这里我们使用 `ModbusMechanic` 作为 Modbus 从设备。点击 `Modbus => Ping`，可以看到 `Status` 变为 `OK`，表示通信正常。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_7.gif" /></center>


### 配置 `Modbus Connector` 用于 Modbus RTU
#### 配置串口
需要执行的脚本如下：
```shell
## 关闭 FIN 服务
sudo systemctl stop fin
## 下载配置文件后，将其放置在 /opt/finFramework_5.1.6.55/etc/finStackSerial/ 目录中
sudo cp ~/config.props  /opt/finFramework_5.1.6.55/etc/finStackSerial/
## 修改 config.props 文件为：serialPorts=/dev/ttyAMA30, /dev/ttyAMA31, /dev/ttyAMA32
sudo nano /opt/finFramework_5.1.6.55/etc/finStackSerial/config.props
## 重启 FIN 服务，稍等片刻后使用浏览器打开 FIN
sudo systemctl restart fin

```
**步骤 1**：关闭 FIN 服务，然后下载 [配置文件](https://drive.google.com/file/d/1j1aGGSsGPjGCYfUGcXTqL2XGP2EuqFw2/view?usp=share_link) 并将其保存到 `/opt/finFramework_5.1.6.55/etc/finStackSerial/` 目录中。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_1.gif" /></center>

**步骤 2**：修改 config.props 文件为：
```shell
serialPorts=/dev/ttyAMA30, /dev/ttyAMA31, /dev/ttyAMA32
```
修改完成后，重启 FIN 服务。
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_2.gif" /></center>

**步骤 3**：点击 `Folio => launch`，并插入以下查询：`serialPorts()`。结果将显示需要为您的特定端口使用的名称。端口名称不是物理端口的名称，而是设备的物理端口与要使用的端口名称之间的匹配，例如 `serial0`、`serial1` ...

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_3.gif" /></center>

#### 配置 Modbus RTU

**步骤 1**：打开 `Modbus Connector`。点击 `Settings => Ext` 并找到 `Modbus`。此时，`Modbus` 被标记为红色。点击 `Enable`，可以看到 `Modbus` 标记变为绿色，表示 `Modbus Connector` 已成功打开。再次进入 `DB Builder`，可以看到已经有一个 `Modbus` 选项。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_3.gif" /></center>

**步骤 2**：添加新的 Modbus 连接。点击 `Modbus => Add`。在我们的示例中，我们指定了 "r1000_demo_rtu" 作为寄存器映射。然后将串口添加到设备的 Uri 中。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_4.gif" /></center>

**步骤 3**：添加新的 `Register Maps`。点击 `Register Maps => Add`，输入 `Name`，该名称需要与第二步中的 `ModbusRegMapUri` 名称保持一致，最后点击 `ADD`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_5.gif" /></center>

系统将在 `opt/finFramework_5.1.6.55/var/proj/recomputer_R1000_demo/data/modbus/` 目录下创建一个新的 `r1000_demo_rtu.csv` 文件。该文件描述了我们需要读取的 Modbus 寄存器信息。

**步骤 4**：添加需要读取的寄存器信息。`Modbus Connector` 作为一个 Modbus 主设备存在，它将读取从设备的寄存器。我们需要配置需要读取的寄存器信息。点击 `r1000_demo_rtu`，可以看到默认有一个 `ping` 的描述，这是必须的。我们继续添加新的寄存器信息，点击 `Register Maps => r1000_demo_rtu => Add`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_6.gif" /></center>

**步骤 5**：通信测试。添加寄存器的描述信息后，即可进行通信。在这里我们使用 `ModbusMechanic` 作为 Modbus 从设备。点击 `Modbus => Ping`，可以看到 `Status` 变为 `OK`，表示通信正常。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_7.gif" /></center>


### 向 `Equip Tree` 添加数据点

**步骤 1**：添加 `Equip`。点击 `Equip Tree => + => Add site`，输入 `Name`，这里我输入 `Tower`，它会添加一个名为 `Tower` 的 `site`；然后点击 `Equip Tree => Tower => + => Add Floor`，输入 `Name`，这里我输入 `Floor1`，它会添加一个名为 `Floor1` 的 `Floor`；再次点击 `Equip Tree => Tower => Floor1 => + => Add Equip`，输入 `Name`，这里我输入 `ModbusEquip`，以添加一个新的 `Equip`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_8.gif" /></center>

**步骤 2**：点击 `ModbusEquip` 右侧的 `->`，使系统路径变为 `Tower/Floor1/ModbusEquip`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbustcp_modbusequip_path.png" /></center>

**步骤 3**：添加数据点。点击 `Modbus => Modbus Conn`，在新窗口中点击 `Discover Points`，我们设置的寄存器信息点将会出现，选择一个需要读取的寄存器并点击 `Add`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_9.gif" /></center>


## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>