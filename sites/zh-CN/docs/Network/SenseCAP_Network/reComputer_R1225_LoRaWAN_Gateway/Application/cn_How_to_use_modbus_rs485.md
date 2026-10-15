---
description: 本文主要介绍如何使用 reComputer R1225 的 485 通信功能，并测试 RS485 和 Modbus 通信功能。
title: 如何在 R1225 上使用 RS485 和 Modbus
keywords:
  - 网关
  - SenseCAP
  - 边缘控制器
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /how_to_use_modbus_rs485_with_r1225
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 04/14/2026
  author: Kian
createdAt: '2026-05-25'
url: https://wiki.seeedstudio.com/cn/how_to_use_modbus_rs485_with_r1225/
updatedAt: '2026-04-30'
---

## 介绍

本文主要介绍如何使用 reComputer R1225 的 485 通信功能，并测试 RS485 和 Modbus 通信功能。

## 入门

在开始这个项目之前，你可能需要按照这里的说明提前准备好硬件和软件。

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

* 在你的 W10 电脑上使用 [modbus poll](https://www.modbustools.com/modbus_poll.html)。你也可以使用其他 Modbus 测试工具
* 在 reComputer R1225 和 W10 电脑上使用 [modbusmechanic](https://modbusmechanic.scifidryer.com/)。你也可以使用其他 Modbus 测试工具
* 在你的 W10 电脑上使用 [mobaxterm](https://mobaxterm.mobatek.net/)。你也可以使用其他串口测试工具
* 你需要在 reComputer R1225 上使用以下命令下载 **minicom** 工具：

```sh
sudo apt-get install minicom
```

### 硬件连接

对于 Modbus RTU，我们使用 RS485 转 USB 转换器将 R1225 连接到 Windows 10 电脑进行测试。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

对于 Modbus TCP，我们使用网线将 W10 电脑和 reComputer R1225 连接到交换机，以确保它们处于同一网段。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

### 方法一：使用命令行界面（CLI）

#### 使用 Modbus RTU 测试的步骤

##### 安装和配置 minicom

在主机电脑和 reComputer R1225 上使用下面的命令安装 minicom：

```
sudo apt install minicom
```

打开终端，并输入如下命令：

```
sudo minicom -D /dev/ttyAMA*
```

`ttyAMA*` 应该是 `ttyAMA2, ttyAMA3 or ttyAMA4`，具体取决于你使用的是哪个 RS485。

然后输入 `Ctal+A` 再输入 `Z`，你会看到如下所示的 minicom：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom0.png" alt="pir" width="700" height="auto" /></div>

输入 `o` 来配置 minicom，并选择 `Serial port setup`，你会看到如下界面：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom1.png" alt="pir" width="700" height="auto" /></div>

然后输入 `F` 和 `H` 将 minicom 设置为 RS485 模式，结果如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom2.png" alt="pir" width="700" height="auto" /></div>

最后，选择 `Exit` 并按下 `Enter` 退出配置，如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/minicom3.png" alt="pir" width="700" height="auto" /></div>

**步骤 1**：测试 RS485 功能

在 reComputer R1225 上输入以下脚本以打开 minicom 软件

```shell
minicom -D /dev/ttyAMAx -b 9600
```

参数说明：

-D：在下面的字段中输入你想要打开的设备号。设备号需要是新创建的设备号。

-b：在下面输入波特率

然后在 W10 电脑上打开 MobaXterm，新建一个串口终端，选择串口号，波特率为 9600；最后，你就可以通过 RS485 进行双向通信。如图所示，在 reComputer R1000 上输入的内容可以通过 RS485 发送到 W10 电脑。在 W10 电脑上输入的内容也可以发送到 reComputer R1225，双向通信正常。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/RS485_test.gif" /></center>

**步骤 2**：测试 R1225 作为 Modbus 从机

在 reComputer R1225 上打开 ModbusMechanic 软件，选择设备号和波特率，然后点击左上角的模拟从机功能添加两个线圈；接着在 W10 上打开 Modbus poll 作为主站读取从站的线圈。然后打开 Modbus poll 的显示窗口，你可以看到 Modbus RTU 的收发报文正常。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_RTU_test.gif" /></center>

**步骤 3**：测试 R1225 作为 Modbus 主机

在 reComputer R1225 和 W10 电脑上都打开 ModbusMechanic 软件，并选择设备号和波特率。W10 电脑参考第三步的设置。在 reComputer R1000 上选择 `Read Coils(0x01)` 来读取从机的线圈，将 `Slave Node` 设置为 1，`Register` 选择你想要读取的地址，最后点击 `Transmit packet`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_master_test.gif" /></center>

#### 使用 Modbus TCP 测试的步骤

**步骤 1**：在 Win10 电脑和 R1000 上打开 modbusmechanic

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbusmac_two.png" /></center>

**步骤 2**：测试 R1225 作为 Modbus TCP 主机

在 W10 电脑上点击 `Tool => Start Slave Simulator`，在 TYPE 中选择 `TCP`，在 Slave ID 中选择 `1`，然后添加 `Coils`；接着在 R1225 中输入 `IP`，在 Scan group 中选择 `Read Coil`。输入 `Slave Node` 和 `Register`，最后点击 `Transmit packet`。你可以看到从机数据已被成功读取。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_MASTER_MODBUS_TCP.gif" /></center>

**步骤 3**：测试 R1225 作为 Modbus TCP 从机

参考第二步进行配置。你可以看到 R1225 作为从机可以正常读取数据。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_SLAVE_MODBUS_TCP.gif" /></center>

:::note
在 R1000 中运行 Modbus TCP 从机程序需要监听 502 端口，这可能需要 sudo 权限。如果你的应用程序无法监听 502 端口，请尝试为其添加权限。
:::

### 方法二：使用图形用户界面（GUI）

#### RS485 参数配置

按照 [Quick Start](https://wiki.seeedstudio.com/cn/r1225_quick_start/) 指南访问 SenseCAP Gateway OS 的 Web 界面。

**步骤 1**：登录 Luci

在浏览器中输入设备的 IP 地址进入 Luci 页面。
然后输入设备的用户名和密码进行登录，并点击 Login 按钮。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Luci_login.png" alt="pir" width={800} height="auto" /></p>

**步骤 2** 点击 `RS485` - `Serial Settings`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_1.png" alt="pir" width={200} height="auto" /></p>

R1225 的三个 485 通道的参数设置都集成在这里。

首先，选择你想要使用的通道（CH1、CH2、CH3）；

接下来，配置参数：波特率、数据位、停止位、校验位、流控和读取超时。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_2.png" alt="pir" width={800} height="auto" /></p>

**步骤 3**：点击 `Save & Apply` 以应用你的设置

#### Modbus RTU 参数配置

在配置完三个 RS-485 端口的参数后（默认设置为 “9600, 8, 1, N”），你就可以继续进行 Modbus RTU 配置。

**步骤 4**：点击 `RS485` - `Protocol Configuration`

选择你想要调试的通道（CH1、CH2、CH3）。

在协议状态中选择 “Enable”，在协议类型中选择 “Modbus RTU”。

启用后，你会看到 Modbus RTU 设置界面；只需根据所连接传感器的规格书进行配置即可。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_3.png" alt="pir" width={800} height="auto" /></p>

**步骤 5**：Modbus RTU 参数设置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_4.png" alt="pir" width={800} height="auto" /></p>

**步骤 6**：点击 `Save & Apply`

设置生效后，点击 `Read Data`，你可以在 `Frame Data` 中看到读取到的数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/rs485_5.png" alt="pir" width={800} height="auto" /></p>

#### Modbus TCP 参数配置

**步骤 7**：点击 `RS485` - `MQTT Setttings`

选择你想要使用的通道（CH1、CH2、CH3）。

选择 TCP 作为传输协议。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/tcp1.png" alt="pir" width={800} height="auto" /></p>

**步骤 8**：MQTT 设置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/How_to_use_modbus_rs485/tcp2.png" alt="pir" width={800} height="auto" /></p>

**步骤 9**: 点击`Save & Apply`

现在你的配置已生效。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
