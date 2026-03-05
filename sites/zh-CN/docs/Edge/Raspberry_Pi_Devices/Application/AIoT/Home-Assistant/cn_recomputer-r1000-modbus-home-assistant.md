---
description: 学习如何在 reComputer R1000 上使用 Home Assistant 设置和配置 Modbus TCP 和 Modbus RTU，这是一个基于树莓派的强大解决方案，可在楼宇管理系统 (BMS) 中实现 Modbus 设备的无缝集成和控制。
title: reComputer R1000 和 Modbus 与 Home Assistant
keywords:
  - Home Assistant
  - reComputer R1000
  - Home Automation
  - BMS
  - Modbus
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_home_assistant_modbus
last_update:
  date: 08/07/2024
  author: Kasun Thushara
createdAt: '2025-05-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/recomputer_r1000_home_assistant_modbus/
---

## 介绍

在现代楼宇管理系统 (BMS) 中，集成各种协议和设备对于高效监控和控制至关重要。本指南重点介绍如何利用 Modbus 通信协议（Modbus TCP 和 Modbus RTU）与 Home Assistant OS 的功能，使用强大的 reComputer R1000，这是一个基于树莓派的解决方案。无论您是在设置新系统还是增强现有系统，本指南都将引导您完成将 Modbus 设备连接到 Home Assistant 的过程，确保无缝集成和控制。

## 开始使用

在开始此项目之前，您可能需要按照此处所述提前准备硬件。

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

在深入集成过程之前，确保安装所有必要的驱动程序和工具至关重要。正确[安装驱动程序](https://wiki.seeedstudio.com/cn/reComputer_r1000_use_rs485_modbus_rtu/)是Modbus RTU设备与Home Assistant之间无缝通信的先决条件。强烈建议在继续本指南之前彻底研究并安装所需的驱动程序。

此外，如果您尚未安装Home Assistant，请按照[Home Assistant安装指南](https://wiki.seeedstudio.com/cn/recomputer_r1000_home_automation/)在您的reComputer R1000上进行设置。

## 文件编辑器插件

虽然您可以在设置下直接从用户界面配置Home Assistant的大部分功能，但某些部分需要您编辑文件，如configuration.yaml。此文件包含要加载的集成及其配置。通过向此配置文件添加代码片段，您可以启用特定功能，包括Modbus集成。

要开始，您需要在Home Assistant中安装文件编辑器插件：

- 打开Home Assistant。
- 导航到`设置 > 插件`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/settings.PNG" style={{width:600}}/></div>

- 点击`插件商店`。
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/add-ons.PNG" style={{width:600}}/></div>

- 搜索`File Editor`并点击它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/fileeditor.PNG" style={{width:600}}/></div>

- 点击安装按钮。
- 安装完成后，点击启动来启动文件编辑器。
- 可选择启用在侧边栏显示以便快速访问。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/fileeditor-start.PNG" style={{width:600}}/></div>

使用文件编辑器插件，您现在可以编辑`configuration.yaml`文件来添加Modbus集成

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/config.PNG" style={{width:600}}/></div>

## 启用Modbus TCP集成

要在Home Assistant中启用Modbus集成，您需要向configuration.yaml文件添加特定参数。以下是您需要配置的参数及其描述：

- **name**: 此集线器的名称。必须是唯一的。
- **host**: 您的Modbus设备的IP地址或名称，例如`192.168.1.1`。
- **port**: 通信的网络端口。
- **type**: Modbus连接的类型。选项有tcp或serial。这里我们使用`tcp`

要为您的Modbus集成配置实体，您需要为每个实体定义各种参数。以下是设置二进制传感器所需的参数：
有几种实体类型。您可以查看[官方modbus Home Assistant页面](https://www.home-assistant.io/integrations/modbus)。

- **binary_sensors**: 为此连接配置的所有二进制传感器的列表。
- **address**: 线圈/寄存器的地址。
- **name**: 实体的名称，在实体类型内必须是唯一的。
- **scan_interval**: 更新间隔（秒）。设置scan_interval = 0表示不轮询。实体在启动后不久被读取，然后根据scan_interval进行读取。
- **slave**: 与device_address相同。
- **input_type**: 请求的类型。选项有coil、holding或input。

**示例**：

```bash
modbus:
  - name: modbus_hub
    type: tcp
    host: IP_ADDRESS_of_PLC
    port: 502
    binary_sensors:
      - name: Relay_1
        address: 8193
        slave: 1
        input_type: coil
        scan_interval: 1
      - name: Relay_2
        address: 8194
        slave: 1
        input_type: coil
        scan_interval: 1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/modbus-settings.PNG" style={{width:600}}/></div>

:::note
修改 configuration.yml 文件后，必须保存并重启 HA
:::

## 启用 Modbus RTU 集成

要在 Home Assistant 中启用 Modbus RTU 集成，您需要在 configuration.yaml 文件中添加以下参数：

- **name**: 此集线器的名称。必须是唯一的。
- **type**: Modbus 连接的类型。这里应该是 serial。
- **port**: 您的 Modbus 设备连接到 Home Assistant 主机的串行端口或 USB 设备。我们发现它是 `/dev/ttyAMA30`
- **baudrate**: 串行连接的速度。
- **method**: 连接到 Modbus 的方法。选项有 rtu 和 ascii。
- **parity**: 数据字节的奇偶校验。选项有 E（偶校验）、O（奇校验）、N（无校验）。
- **bytesize**: 每个字节的数据大小（以位为单位）。通常为 8。
- **stopbits**: 数据字节的停止位。

要为您的 Modbus RTU 集成配置实体，您需要为每个传感器定义各种参数。以下是设置传感器所需的参数：

- **sensors**: Modbus 传感器允许您从 Modbus 寄存器收集数据。
- **name**: 实体的名称，在实体类型内必须是唯一的。
- **address**: 寄存器的地址。
- **slave**: 与 device_address 相同。
- **input_type**: 传感器的 Modbus 寄存器类型。选项有 holding 或 input。
- **scale**: 比例因子。
- **device_class**: 传感器的类型/类别，用于在前端设置图标。
- **unit_of_measurement**: 附加到值的单位。

示例：

```bash
modbus:
  - name: modbus_hub2
    type: serial
    port: /dev/ttyAMA30
    baudrate: 9600
    bytesize: 8
    method: rtu
    parity: N
    stopbits: 1
    sensors:
      - name: Room Temperature
        address: 1
        input_type: input
        slave: 1
        scale: 0.01
        device_class: temperature
        unit_of_measurement: °C
      - name: Room Humidity
        address: 2
        input_type: input
        slave: 1
        scale: 0.01
        unit_of_measurement: '%'
        device_class: humidity
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/modbus-rtu-setting.PNG" style={{width:600}}/></div>

:::note
修改 configuration.yml 文件后，必须保存并重启 HA
:::

最后，您将能够看到工作现象。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/demo.gif" style={{width:600}}/></div>

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
