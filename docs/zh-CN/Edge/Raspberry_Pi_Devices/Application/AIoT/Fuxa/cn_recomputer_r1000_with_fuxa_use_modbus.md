---
description: 本文主要介绍如何使用 fuxa 进行 ModbusRTU/TCP 通信。

title: reComputer R1000 使用 fuxa 进行 modbus RTU/TCP 通信
keywords:
  - Edge Controller
  - reComputer R1000
  - fuxa
  - ModbusRTU/TCP
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fuxa_modbus_rtu_and_tcp
last_update:
  date: 10/8/2024
  author: ShuishengPeng
---

## 介绍

FUXA 是一个基于 Web 的过程可视化（SCADA/HMI/仪表板）软件。使用 FUXA，您可以为您的机器创建具有个性化设计的现代过程可视化界面和实时数据显示。它支持 Modbus RTU/TCP、西门子 S7 协议、OPC-UA、BACnet IP、MQTT 和其他协议。

本文主要介绍如何使用 fuxa 进行 ModbusRTU/TCP 通信。

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

- Python 3.11 可能与 fuxa 不兼容。如果您的 Python 版本是 3.11，请考虑更换为其他 Python 版本。

- 在 W10 PC 上使用 [modbusmechanic](https://modbusmechanic.scifidryer.com/)。您也可以使用其他 modbus 测试工具
- 在 reComputer R1000 上使用 [fuxa](https://github.com/frangoteam/FUXA)。您可以参考以下步骤在 reComputer R1000 上安装 fuxa

  ```shell
    ## You need to have installed Node Version 14 || 16 || 18.
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## Next install FUXA from npm
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```

- 关于如何使用 reComputer R1000 的 modbus 功能，您可以参考这个 [wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_use_rs485_modbus_rtu/)。

### 硬件配置

对于 ModbustRTU，我们使用了一个 rs485 转 USB 模块来连接 reComuputer R1000 与 W10 电脑。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

对于 ModbusTCP，我们使用以太网线将 W10 电脑和 reComputer R1000 连接到交换机，以确保它们在同一网段内。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## ModbusRTU 通信步骤

**步骤 1**：在 Win10 电脑上打开 ModbusMechanic，选择相应的串口和波特率，然后点击右上角的 `Tools`，选择 `Start Slave Simulator`，然后选择 `RTU`，输入 `slave ID`，然后您可以设置从机的数据字段，我们添加了三个线圈和一个 `Holding Register`，供后续从 Modbus 主机读取。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusRTU_slva_data.gif" /></center>

**步骤 2**：在 `fuxa` 中，点击右下角的 `+` 按钮，输入模块名称，`Type` 选择 `modbusRTU`，`Connection options` 选择 `SeriaPort`，然后选择您需要使用的串口号并设置相应的波特率和其他参数，最后点击 `OK`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/first_configure.png" /></center>

**步骤 3**：之后，我们进入 `Devices settings` 页面，点击左上角的 `+` 按钮来设置我们需要读取的数据字段。我们设置相应的参数并点击 `OK`，可以看到 `fuxa` 已经成功获取了 Modbus 从机数据。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusRTU_master.gif" /></center>

## ModbusTCP 通信步骤

**步骤 1**：在 Win10 电脑中打开 ModbusMechanic，然后点击右上角的 `Tools`，选择 `Start Slave Simulator`，然后选择 `TCP`，输入 `slave ID`，您可以设置从机的数据字段。我们添加了两个线圈和一个 `holding register`，供后续从 Modbus 主机读取。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_slava_data.gif" /></center>

**步骤 2**：点击 `fuxa` 右下角的 `+` 按钮，输入模块名称，`Type` 选择 `modbusTCP`，`Connection options` 选择 `TcpPort`，`Slave IP and port` 选择从机的 IP 地址，默认端口号为 502，然后输入 `Slave ID`，最后点击 `OK`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbustcp_first_configure.png" /></center>

**步骤 3**：之后，我们进入 `Devices settings` 页面，点击左上角的 `+` 按钮来设置我们需要读取的数据字段。我们设置相应的参数并点击 `OK`，可以看到 `fuxa` 已经成功获取了 Modbus 从机数据。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/ModbusTcp_master.gif" /></center>

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
