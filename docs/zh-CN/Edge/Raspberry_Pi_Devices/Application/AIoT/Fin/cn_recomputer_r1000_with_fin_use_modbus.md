---
description: 本文介绍如何使用 `FIN Framework` 的 `Modbus Connector`。

title: reComputer R1000 与 FIN 使用 modbus TCP/RTU
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP/RTU
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fin_modbus_tcp_and_rtu
last_update:
  date: 07/15/2024
  author: ShuishengPeng
---

## 介绍

FIN Framework (FIN) 是一个软件框架，具有可以集成、控制、管理、分析、可视化和连接的应用程序套件。其功能可以被 OEM 厂商集成到各种产品和服务中。

本文介绍如何使用 `FIN Framework` 的 `Modbus Connector`，详细说明了 FIN Framework 中 Modbus TCP/RTU 的使用方法。主要包括三个方面：创建 `FIN Framework` 项目、配置 `串口号`、配置 `Modbus Connector`，以及向 `Equip` 添加数据点。

## 开始使用

在开始这个项目之前，您可能需要按照此处描述的内容提前准备硬件和软件。

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

### 软件准备

* 关于如何安装 FIN Framework，您可以参考这个 [wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_install_fin/)。
- 关于如何使用 reComputer R1000 的 modbus 功能，您可以参考这个 [wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_use_rs485_modbus_rtu/)。
- 在 W10 PC 上使用 [modbusmechanic](https://modbusmechanic.scifidryer.com/)。您也可以使用其他 modbus 测试工具。

### 硬件配置

对于 ModbusTCP，我们使用以太网线将 W10 PC 和 reComputer R1000 连接到交换机，以确保它们在同一网段内。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

对于 ModbusRTU，我们使用 rs485 转 USB 模块将 reComputer R1000 与 W10 PC 连接。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

### 创建新项目

**步骤 1**：点击主页左下角的 `Create` 按钮，将出现一个新的弹出窗口。弹出窗口主要有三个需要填写的属性：

- NAME：新项目的名称
- DISPLAY NAME：显示的项目名称
- DESCRIPTION：项目描述

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_1.gif" /></center>

**步骤 2**：打开项目，进入 `DB Builder`，点击 `Connectors`，您可以看到此时没有 `Modbus` 选项，我们需要打开 `FIN Framework` 的 `Modbus Connector`，然后 `Modbus` 选项将出现在这里。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_2.gif" /></center>

### 为 Modbus TCP 配置 `Modbus Connector`

**步骤 1**：打开 `Modbus Connector`。点击 `Settings => Ext` 并找到 `Modbus`。此时 `Modbus` 标记为红色。点击 `Enable`，您可以看到 `Modbus` 标记变为绿色，表示 `Modbus Connector` 已成功打开。再次进入 `DB Builder`，您可以看到已经有了 `Modbus` 选项。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_3.gif" /></center>

**步骤 2**：添加新的 Modbus 连接。点击 `Modbus => Add`，新弹出窗口主要有以下参数需要填写：

- Dis：连接器的名称
- ModbusSlave：这将是被连接的 modbus 设备的从站（默认为 1）
- Existing Register Map：如果用户已经配置了 Modbus 连接器，他们将在这里看到可用的寄存器可供选择，或者使用下一个属性 ModbusRegMapUri 创建新的寄存器映射。
- ModbusRegMapUri：这是用户指定要与此连接器链接的寄存器映射名称的地方。将 "xxx" 替换为寄存器映射的名称。
- Uri：这是指定 modbus 连接器 uri 的地方。URI 的格式如表所示：

   <div class="table-center">

  | 协议                                              | URI 设置        | 示例    | 注释 |
  | ------------------------------------------------------------ | ----------- | -------------- | --------- |
  | TCP/IP | `modbus-tcp://host:port/` | `modbus-tcp://10.0.0.17/` | 默认端口是 502，如果是标准端口可以省略       |
  | RTU over TCP/IP  | `modbus-rtutcp://host:port/`  | `modbus-rtutcp://192.168.1.120:9001/`  | 默认端口是 502，如果是标准端口可以省略      |
  | RTU over RS-485  | `modbus-rtu://<port>-<baud>-<dataBits>-<parity>`  | `modbus-rtu://serial0-9600-8n1-none`  |       |

  </div>

在我们的示例中，我们指定 "r1000_demo" 作为我们的寄存器映射。然后在 Uri 中添加了我们设备的 IP。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_4.gif" /></center>

**步骤 3**：添加新的 `Register Maps`。点击 `Register Maps => Add`，输入 `Name`，需要与第二步中 `ModbusRegMapUri` 的名称一致，最后点击 `ADD`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_5.gif" /></center>

系统将在 `opt/finFramework_5.1.6.55/var/proj/recomputer_R1000_demo/data/modbus/` 目录中创建一个新的 `r1000_demo.csv` 文件。此文件描述了我们需要读取的 Modbus 寄存器信息。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_register_map_addr.png" /></center>

**步骤 4**：添加要读取的寄存器信息。`Modbus Connector` 作为 Modbus 主站存在。它将读取从站的寄存器。我们需要配置要读取的寄存器信息。点击 `r1000_demo`，您可以看到默认有一个 `ping` 的描述，这是必须的。我们继续添加新的寄存器信息，点击 `Register Maps => r1000_demo => Add`。新弹出窗口主要有以下参数需要填写：

- name（必需）：寄存器名称。

  - 必须是唯一的

  - 必须以小写字母 a-z 开头
  - 只允许 a-z、A-Z、0-9 和下划线。不允许空格或其他特殊字符。

- addr（必需）：这将是遵循 modbus 约定的寄存器地址。

  - 0xxxx - 线圈（00001-065536）
  - 1xxxx - 离散输入（10001-165536）
  - 3xxxx - 输入寄存器（30001-365536）
  - 4xxxx - 保持寄存器（40001-465536）

- data（必需）：这定义了寄存器的数据类型。

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

- rw（必需）：这将确定读/写权限

  - rw - 寄存器可以读写
  - r - 寄存器只读
  - w - 寄存器只写

- scale(可选): 这允许用户对寄存器应用比例因子。格式为 [操作符] [数字]，其中因子是一个数值常量。

  - 示例:
    - 加法: +1.5
    - 减法: -0.25
    - 乘法: *10
    - 除法: /1000

- dis(可选): 这是一个可选标签，用户可以为寄存器指定一个友好的显示名称。

- unit(可选): 这将定义寄存器使用的单位。

- tags(可选): 这将是学习到数据库中的点时应用的标签。

- folderPath(可选): 如果用户想要组织这些点，他们可以通过应用 folderPath 来实现。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_6.gif" /></center>

**步骤 5**: 通信测试。添加寄存器的描述信息后，可以进行通信。这里我们使用 `ModbusMechanic` 作为 Modbus 从设备。点击 `Modbus => Ping`，您可以看到 `Status` 变为 `OK`，表示通信正常。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_7.gif" /></center>

### 为 Modbus RTU 配置 `Modbus Connector`

#### 配置串口

需要执行的脚本如下：

```shell
## Turn off FIN service
sudo systemctl stop fin
## After downloading the config file, place it in /opt/finFramework_5.1.6.55/etc/finStackSerial/
sudo cp ~/config.props  /opt/finFramework_5.1.6.55/etc/finStackSerial/
## Modify the config.props file to: serialPorts=/dev/ttyAMA30, /dev/ttyAMA31, /dev/ttyAMA32
sudo nano /opt/finFramework_5.1.6.55/etc/finStackSerial/config.props
## Restart the FIN service, wait for a while and then use a browser to open FIN
sudo systemctl restart fin

```

**步骤 1**：关闭 FIN 服务，然后下载[配置文件](https://drive.google.com/file/d/1j1aGGSsGPjGCYfUGcXTqL2XGP2EuqFw2/view?usp=share_link)并将其保存到 `/opt/finFramework_5.1.6 .55/etc/finStackSerial/` 目录

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_1.gif" /></center>

**步骤 2**：将 config.props 修改为：

```shell
serialPorts=/dev/ttyAMA30, /dev/ttyAMA31, /dev/ttyAMA32
```

修改完成后，重启FIN服务
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_2.gif" /></center>

**步骤3**：点击`Folio => launch`，并插入以下查询：`serialPorts()`，结果将显示您的特定端口需要使用的名称。端口不是物理端口的名称，但设备的物理端口与要使用的端口名称之间存在匹配关系，如`serial0`、`serial1`...

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_3.gif" /></center>

#### 配置Modbus RTU

**步骤1**：打开`Modbus Connector`。点击`Settrings => Ext`并找到`Modbus`。此时，`Modbus`标记为红色。点击`Enable`，您可以看到`Modbus`标记变为绿色，表示`Modbus Connector`已成功打开。再次进入`DB Builder`，您可以看到已经有一个`Modbus`选项。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_3.gif" /></center>

**步骤2**：添加新的Modbus连接。点击`Modbus => Add`。在我们的示例中，我们指定"r1000_demo_rtu"作为我们的寄存器映射。然后在Uri中将我们的串口添加到设备。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_4.gif" /></center>

**步骤3**：添加新的`Register Maps`。点击`Register Maps => Add`，输入`Name`，需要与第二步中`ModbusRegMapUri`的名称一致，最后点击`ADD`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_5.gif" /></center>

系统将在`opt/finFramework_5.1.6.55/var/proj/recomputer_R1000_demo/data/modbus/`目录中创建一个新的`r1000_demo_rtu.csv`文件。该文件描述了我们需要读取的Modbus寄存器信息。

**步骤4**：添加要读取的寄存器信息。`Modbus Connector`作为Modbus主站存在。它将读取从站的寄存器。我们需要配置要读取的寄存器信息。点击`r1000_demo_rtu`，您可以看到默认有一个`ping`的描述，这是必须的。我们继续添加新的寄存器信息，点击`Register Maps => r1000_demo_rtu => Add`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_6.gif" /></center>

**步骤5**：通信测试。添加寄存器的描述信息后，可以进行通信。这里我们使用`ModbusMechanic`作为Modbus从站。点击`Modbus => Ping`，您可以看到`Status`变为`OK`，表示通信正常。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/RTU_7.gif" /></center>

### 将数据点添加到`Equip Tree`

**步骤1**：添加`Equip`。点击`Equip Tree => + => Add site`，输入`Name`，这里我输入`Tower`，它可以添加一个名为`Tower`的`site`；然后点击`Equip Tree => Tower => + => Add Floor`，输入`Name`，这里我输入`Floor1`，它可以添加一个名为`Floor1`的`Floor`；再次点击`Equip Tree => Tower => Floor1 => + => Add Equip`，输入`Name`，这里我输入`ModbusEquip`来添加一个新的`Equip`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_8.gif" /></center>

**步骤2**：点击`ModbusEquip`右侧的`->`，使系统路径位于`Tower/Floor1/ModbusEquip`下。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbustcp_modbusequip_path.png" /></center>

**步骤3**：添加数据点。点击`Modbus => Modbus Conn`，在新窗口中点击`Discover Points`，我们设置的寄存器信息点将出现，选择要读取的寄存器，然后点击`Add`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/modbus_tcp_9.gif" /></center>

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
