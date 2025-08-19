---
description: 本文将向您展示如何使用 FIN 框架的逻辑构建器

title: 使用 FIN 逻辑构建器的 reComputer R1000
keywords:
  - 边缘控制器
  - reComputer R1000
  - FIN
  - ModbusTCP
  - 逻辑
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/reComputer_r1000_fin_logic_builder
last_update:
  date: 07/16/2024
  author: ShuishengPeng
---

## 简介
FIN 框架（FIN）是一款带有应用套件的软件框架，可用于集成、控制、管理、分析、可视化和连接。其功能可以被 OEM 集成到一系列产品和服务中。

本文将向您展示如何使用 FIN 框架的 `逻辑构建器`，并通过 `逻辑构建器` 实现一个报警功能。我们将监控一个 Modbus 设备的值。当该值超过临界值时，FIN 将发出报警。

## 开始准备

在开始这个项目之前，您需要按照以下描述提前准备好硬件和软件。

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
* 关于如何安装 FIN 框架，您可以参考此 [wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_install_fin/)。
* 关于使用 FIN 进行 Modbus 通信的 reComputer R1000，您可以参考此 [wiki](https://wiki.seeedstudio.com/cn/reComputer_r1000_use_rs485_modbus_rtu/)。
* 在 W10 PC 上使用 [modbusmechanic](https://modbusmechanic.scifidryer.com/)。您也可以使用其他 Modbus 测试工具。

### 硬件配置

对于 ModbusTCP，我们使用以太网线将 W10 PC 和 reComputer R1000 连接到交换机，以确保它们处于同一网络段。

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## 实现报警的步骤
### 创建新的逻辑构建器程序
**步骤 1**：首先点击顶部的目录栏，将系统目录切换到目标位置。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_path_location.png" /></center>

**步骤 2**：在设置界面点击 `Logic Builder => new`，会出现以下弹窗：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_create_logic.png" /></center>

填写以下参数：
  - **名称** - 程序名称
  - **描述** - 程序用途/功能的描述
  - **程序运行** - 用于指定程序将在何处运行
  - **点** - 可选择设备中的点进行使用
  - **标签** - 查找设备或引用中使用的标签
  - **项目变量** - 如果其他程序中存在项目变量，则提供可用于新创建程序的变量列表
  - **绝对点** - 可根据其 ID 添加硬编码点
  
`点` 可以输入多个点，但这里我们只输入了一个。填写信息后，点击 `OK`，然后在右侧弹窗中点击 `Edit` 进入逻辑编辑界面。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_1.gif" /></center>

### 配置块逻辑
**步骤 1**：添加一个 `if` 块。在工作区中添加块有两种方式。第一种是点击块的端口进行添加，如图所示：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_2.gif" /></center>

第二种方式是通过左下角的搜索框添加，如图所示：

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_3.gif" /></center>

**步骤 2**：添加需要判断的数据点。在左侧可以看到我们在创建逻辑构建器程序时引入的数据点。它有两个功能：`get` 和 `set`。我们的逻辑是判断传感器值是否超过临界值，因此这里选择 `get`。点击 `get` 并将其拖入工作区，会出现一个 `sensor` 块。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_4.gif" /></center>

**步骤 3**：添加 `>=` 块。我们需要判断传感器值是否超过临界值，因此需要添加一个 `>=` 块，它会将结果输出到 `if` 块。`if` 块通过判断 `>=` 块的结果来决定下一步的动作。这里我们将临界值设置为 `23`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_5.gif" /></center>

**步骤 4**：添加延迟块。有时我们需要让系统更具抗干扰性，可以添加一个延迟模块，只有在某个条件满足一定时间后才会触发报警。我们将延迟时间设置为 3 秒，并将模块的输出连接到 `if` 块。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_6.gif" /></center>

**步骤 5**：创建变量。当传感器值超过临界值时，我们可以设置一个标志来标记传感器值异常。这个标志可以通过创建一个 `变量` 来实现。`变量` 有以下类型：


<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_variable_type.png" /></center>

如图所示，我们添加了一个名为 `Alarm_bool` 的变量，该变量也具有 `set` 和 `get` 功能块。我们将 `Alarm_bool` 的 `set` 块连接到 `if` 块之后。当传感器值超过临界值时，它将被设置为 `True`；当传感器值未超过临界值时，它将被设置为 `False`。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_7.gif" /></center>

**步骤 6**：点击顶部的 `alarm` 进入 `alarm` 配置界面。在左下角输入 `alarm`，找到 `alarmBlock` 并将其拖入工作区。我们需要为 `alarmBlock` 选择我们创建的 `Alarm_bool` 变量。当 `Alarm_bool` 变量为 `True` 时，警报将被触发；当 `Alarm_bool` 变量为 `False` 时，警报将不会触发。

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_8.gif" /></center>

### 警报演示

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_9.gif" /></center>


## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有流畅的体验。我们提供了多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>