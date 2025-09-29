---
description: 本文将向您展示如何使用 FIN 框架的逻辑构建器

title: reComputer R1000 与 FIN 逻辑构建器
keywords:
  - Edge Controller
  - reComputer R1000
  - FIN
  - ModbusTCP
  - LOGIC
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fin_logic_builder
last_update:
  date: 07/16/2024
  author: ShuishengPeng
---

## 介绍

FIN 框架（FIN）是一个软件框架，具有可以集成、控制、管理、分析、可视化和连接的应用程序套件。其功能可以被 OEM 厂商集成到各种产品和服务中。

本文将向您展示如何使用 FIN 框架的`逻辑构建器`，并使用`逻辑构建器`实现报警功能。我们监控 Modbus 设备的值。当值超过临界值时，FIN 将发出报警。

## 开始使用

在开始此项目之前，您可能需要按照此处所述提前准备硬件和软件。

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

* 关于如何安装 FIN Framework，您可以参考这个[wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_install_fin/)。
- 关于 reComputer R1000 使用 FIN 进行Modbus通信，您可以参考这个[wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_use_rs485_modbus_rtu/)。
- 在 W10 PC 上使用[modbusmechanic](https://modbusmechanic.scifidryer.com/)。您也可以使用其他 modbus 测试工具。

### 硬件配置

对于 ModbusTCP，我们使用以太网电缆将 W10 PC 和 reComputer R1000 连接到交换机，以确保它们在同一网段内。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## 实现报警的步骤

### 创建新的 Logic Builder 程序

**步骤 1**：首先点击顶部的目录栏，将系统目录切换到所需的目标位置。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_path_location.png" /></center>

**步骤 2**：在设置界面点击 `Logic Builder => new`，将出现以下弹出窗口：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_create_logic.png" /></center>

填写以下参数：

- **Name** - 程序名称
- **Description** - 程序用途/功能的描述
- **Program On** - 用于指定程序将在什么设备上运行
- **Points** - 能够从设备中选择要使用的点
- **Tags** - 查找在设备或引用上使用的标签
- **Project Variables** - 如果其他程序中存在其他项目变量，它提供可在正在创建的新程序中使用的变量列表
- **Absolute Points** - 能够根据其 id 添加硬编码点
  
`Points` 可以输入多个点，但我们这里只输入了一个。填写信息后，点击 `OK`，然后在右侧弹出窗口中点击 `Edit` 进入 Logic 编辑界面。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_1.gif" /></center>

### 配置块逻辑

**步骤 1**：添加一个 `if` 块。在工作区中添加块有两种方法。第一种是点击块的端口来添加，如图所示：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_2.gif" /></center>

第二种方法是通过左下角的搜索框添加，如图所示：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_3.gif" /></center>

**步骤 2**：添加要判断的数据点。在左侧，您可以看到我们在创建 Logic Builder 程序时引入的数据点。它有两个功能：`get` 和 `set`。我们的逻辑是判断传感器值是否超过临界值，所以我们这里选择 `get`。点击 `get` 并将其拖入工作区，将出现一个 `sensor` 块。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_4.gif" /></center>

**步骤 3**：添加 `>=` 块。我们需要判断传感器值是否超过临界值，所以我们需要添加一个 `>=` 块，它将向 `if` 块输出一个结果。`if` 块通过判断 `>=` 块的结果来确定下一步操作。这里我们将临界值设置为 `23`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_5.gif" /></center>

**步骤 4**：添加延迟块。有时我们需要使系统更具抗干扰性，我们可以添加一个延迟模块，只有在满足某个条件一定时间后才会发生报警。我们将延迟时间设置为 3s，并将模块的输出连接到 `if` 块。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_6.gif" /></center>

**步骤 5**：创建变量。当传感器值超过临界值时，我们可以设置一个标志来标记传感器值为异常。这个标志可以通过创建一个 `variable` 来实现。`variable` 有以下类型：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_variable_type.png" /></center>

如图所示，我们添加了一个名为 `Alarm_bool` 的变量，它也有 `set` 和 `get` 功能块。我们将 `Alarm_bool` 的 `set` 块连接在 `if` 块之后。当传感器值超过临界值时，将其设置为 `True`。当传感器未超过临界值时，将其设置为 `False`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_7.gif" /></center>

**步骤 6**：点击顶部的 `alarm` 进入 `alarm` 配置界面。在左下角输入 `alarm` 找到 `alarmBlock` 并将其拖入工作区。我们需要为 `alarmBlock` 选择我们创建的 `Alarm_bool` 变量。当 `Alarm_bool` 变量为 `True` 时，将触发报警，当 `Alarm_bool` 变量为 `False` 时，将不触发报警。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_8.gif" /></center>

### 报警演示

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_9.gif" /></center>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
