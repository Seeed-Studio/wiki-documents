---
description: 配置模拟传感器
title: 配置模拟传感器
keywords:
- SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger
last_update:
  date: 4/12/2023
  author: Yvonne
---

# S2100 模拟输入传感器入门

让我们开始学习如何将 S2100 与模拟输入传感器配合使用。一旦我们掌握了这一点，我们将继续学习 S2100 应用的基础知识。这将让您很好地了解如何在未来连接您自己的定制传感器。

## 准备这些物品

- 数据记录器
- 光传感器（作为示例）
- 十字螺丝刀（十字槽 No.2）
- SenseCAP Mate APP

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/2.png"/></div>

# 连接传感器探头

首先，我们需要进行接线。请按照以下步骤操作。

## 拆卸数据记录器

1. 拧下三颗螺丝。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/3.png"/></div>

2. 取下盖子。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/4.png"/></div>

3. 取下螺纹帽，将传感器的电缆穿过螺纹帽，穿过底盖，并连接到接线端子。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/5.png"/></div>
## 接线端子说明

| **编号** | **引脚** | **描述** |
| --- | --- | --- |
| 1 | 12V | 外部 12V 输入电压。数据记录器可以由外部 12V 直流电源供电。使用 12V 电源时，电池将作为备用电源。 |
| 2 | 5V | 5V 输出电压，为传感器提供 5V 电压。 |
| 3 | 3V | 3V 输出电压，为传感器提供 3V 电压。 |
| 4 | IO | 采集电平或脉冲输入 |
| 5 | V1 | 采集 0 到 10V 的电压输入 |
| 6 | V2 | 采集 0 到 10V 的电压输入 |
| 7 | A | RS485 A/+ |
| 8 | B | RS485 B/- |
| 9 | I1 | 采集 4 到 20mA 的电流输入 |
| 10 | I2 | 采集 4 到 20mA 的电流输入 |
| 11 | GND | 接地引脚 |
| 12 | GND | 接地引脚 |

## 传感器的电源选项

数据记录器支持两种电源模式，我们选择内置电池模式，因为光传感器只需要5v电源：

| **模式** | **描述** |
| --- | --- |
| 内置电池 | 数据记录器和传感器由电池供电。在这种情况下，数据记录器可以连接到5V传感器。 |

## 连接到数据记录器

数据记录器的接线顺序：

| **线缆类型** | **描述** |
| --- | --- |
| 红线 | 5V |
| 黑线 | GND（任何端口都可以。） |
| 黄线 | IO |

1. 将8芯线穿过底盖，并根据线序要求连接到数据记录器的底座；

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/6.png"/></div>

2. 依次连接上盖、橡胶圈和螺帽

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/7.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/8.png"/></div>

3. **拧紧螺丝和螺帽**以**检查防水性能**。如果线径太细，请添加防水胶带进行缠绕。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/9.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/10.png"/></div>

**\*注意：** 组装设备时，必须安装数据记录器和适配器盒的防水垫，并拧紧螺帽和螺丝，否则可能会影响设备的防水效果！

如果线径太小，可以用防水胶带缠绕，如下所示：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/11.png"/></div>

至此我们已经完成了接线。现在，让我们设置S2100并在APP上进行配置。

# 设置S2100

## 将传感器连接到APP

1. 按住按钮**3秒钟**，LED将以1秒频率闪烁。请在1分钟内使用APP连接传感器；否则，设备将关机或重启。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/12.png"/></div>

2. 请选择"S2100 Data Logger"。

请点击"Setup"按钮打开蓝牙，然后点击"Scan"开始扫描传感器的蓝牙。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/13.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/14.png"/></div>

3. 通过S/N选择传感器（S/N在传感器正面标签上）。然后，进入后将显示传感器的基本信息。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/15.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/16.png"/></div>

4. 蓝牙连接成功后进入配置模式：LED以2秒频率闪烁。

## 通过APP配置基本参数

### 选择平台和频率

S210x传感器制造时支持863MHz ~928MHz的通用频率计划，一个SKU即可支持。也就是说，每个设备都可以支持7个频率计划。

这里我们选择"SenseCAP for Helium"或"SenseCAP for TTN"。频率计划根据您的实际情况选择。

**\*注意：** 当用户周围有Helium网络时，数据记录器可以上传数据。它运行在SenseCAP私有Helium控制台上。用户无需在Helium控制台上创建设备；

SenseCAP for TTN平台需要与SenseCAP LoRaWAN室外网关配合使用(https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html)

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/17.png"/></div>

### 设置间隔

设备的工作模式：每隔一定间隔唤醒设备，收集测量值并通过LoRa上传。

例如，设备**默认每60分钟**收集和上传一次数据。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/18.png"/></div>

### 设置数据包策略

传感器上行数据包策略有三种模式，我们这里选择1N，或者您可以根据自己的需求选择。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/19.png"/></div>

| **参数** | **描述** |
| --- | --- |
| 2C+1N (默认) | 2C+1N（2个确认数据包和1个非确认数据包）是最佳策略，该模式可以最大限度地降低数据包丢失率，但设备在TTN中会消耗最多的数据包，或在Helium网络中消耗最多的数据积分。 |
| 1C | 1C（1个确认）设备在从服务器收到1个确认数据包后将进入睡眠状态。 |
| 1N | 1N（1个非确认）设备只发送数据包然后开始睡眠，无论服务器是否收到数据。 |

### 恢复出厂设置

当选择 SenseCAP 平台时，您必须使用固定的 EUI/App EUI/App Key。因此，在从其他平台切换回 SenseCAP 平台之前，您需要恢复出厂设置。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/20.png"/></div>

当我们犯错或想要重置所有设置时，我们可以点击该按钮。设备将恢复到出厂默认配置。

**\*注意：** "恢复出厂设置"功能只能重置基本设置。

## 通过 App 配置模拟传感器

选择"协议"为"模拟输入"。然后依次设置以下参数。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/21.png"/></div>

选择电源类型为**周期性供电**。

| 电源电压 | 我们在这里选择 **5V**。 |
| --- | --- |
| 传感器预热时间 | 预热时间表示传感器在施加电压供应后达到最高精度或性能水平所需的时间。我们在这里输入 **200(ms)**。 |
| 电压范围 | 0-10V（数据记录器可以采集 0~10V 范围内的电压信号，并自动调整上限以提高精度）。我们在这里选择**电压**。 |
| 接口 V1 | 数据记录器支持两个模拟电压信号。当传感器线缆连接到 V1/V2 时，可以启用该配置。我们在这里启用**接口 V1**。 |
| 接口 V2 |
| Y= Ax + B | "Y"：这是数据记录器将上传的值。"x"：这是原始电流值。系数 A：可以按"x"的倍数放大或缩小的自定义值。系数 B：增加或减少"x"值的自定义值。通过设置 A 和 B 的值，您可以计算出所需的值。我们在这里设置 A 为 **100**，B 为 **0**。 |

配置信息完成后，点击"返回主页"（此时节点和APP蓝牙将自动断开连接），数据记录器将尝试连接网络（尝试连接网络时LED指示灯缓慢闪烁红色，网络连接成功后快速闪烁绿色）；

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/22.png"/></div>

# 在SenseCAP门户上查看数据

## 将传感器绑定到SenseCAP门户

请打开SenseCAP Mate应用程序。

1. **扫描二维码**

1. 点击设备页面右上角的"添加设备"进入设备绑定页面。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/23.png"/></div>

1. 扫描设备上的二维码将设备绑定到您的账户。如果您没有将其设置到指定组，设备将被放入"默认"组。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/24.png"/></div>

1. **手动填写EUI**

如果二维码贴纸损坏，您可以手动填写设备的EUI将设备绑定到您的账户。请确保您按照系统建议的格式输入EUI，然后点击"确认"。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/25.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/26.png"/></div>

## 在SenseCAP Mate应用程序上查看数据

最后，在SenseCAP应用程序或网站[http://sensecap.seeed.cc/](http://sensecap.seeed.cc/)上，您可以查看设备在线状态和最新数据。在每个传感器的列表中，您可以查看其在线状态和最后一次数据上传的时间。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/27.png"/></div>

此外，您还可以在SenseCAP Mate应用程序上查看数据。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/28.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/1.png"/></div>
