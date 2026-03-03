---
description: 配置计数器和GPIO传感器
title: 配置计数器和GPIO传感器
keywords:
- SenseCAP data logger
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger
last_update:
  date: 4/12/2023
  author: Yvonne
---

# # S2100 计数器和GPIO传感器入门

让我们开始学习如何使用 S2100 配合计数器和GPIO传感器。一旦我们掌握了这些，我们将继续学习 S2100 应用的基础知识。这将让您很好地了解如何在未来连接您自己的定制传感器。

## 传感器探头

准备好这些物品：

- 数据记录器
- 雨量计 RG-15 雨量传感器（作为示例）
- 8 芯线
- 十字螺丝刀（十字槽 No.2）
- SenseCAP Mate APP

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/2.png"/></div>

# 连接传感器探头

## 拆卸数据记录器

1. 拧下三颗螺丝。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/3.png"/></div>

2. 取下盖子。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/4.png"/></div>

3. 取下螺纹帽，将传感器的电缆穿过螺纹帽，穿过底盖，然后连接到接线端子。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/5.png"/></div>

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

## 传感器的供电选项

数据记录器支持两种供电模式，我们选择内置电池模式：

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

1. 将8芯线穿过底盖，并根据接线顺序要求将其连接到数据记录器的底座；

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/6.png"/></div>

2. 依次连接上盖、橡胶圈和螺帽

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/7.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/8.png"/></div>

3. **拧紧螺丝和螺帽**以检查防水性。如果线径太细，请添加防水胶带进行缠绕。

**\*注意：** 组装设备时，必须安装数据记录器和适配器盒的防水垫，并拧紧螺帽和螺丝，否则可能会影响设备的防水效果！

如果线径太小，可以用防水胶带缠绕，如下所示：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/9.png"/></div>

## 连接到雨量计传感器

雨量计传感器的接线顺序：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/10.png"/></div>

1. 拧下四颗螺丝，取下盖子。将8芯线穿过底盖，并根据接线顺序要求将其连接到J1的底座；

|线缆类型|描述|
| --- | --- |
|红线|  V+|
|黑线| GND|
|黄线|OUT|

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/11.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/12.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/13.png"/></div>

2. 将雨量传感器 S1 底座的 DIP 开关 **1** 拨到 ON 位置，将开关 **2** 拨到 OFF 位置，将 **3** 和 **4** 拨到 OFF 位置；

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/14.png"/></div>

3. 安装盖子并拧紧螺丝。完成连接。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/15.png"/></div>

至此我们已经完成了接线。现在，让我们设置 S2100 并在 APP 上进行配置

# 设置 S2100

## 将传感器连接到 App

1. 按住按钮 **3 秒钟**，LED 将以 1 秒频率闪烁。请在 1 分钟内使用 App 连接传感器；否则，设备将关机或重启。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/16.png"/></div>

2. 请选择"S2100 Data Logger"。

请点击"Setup"按钮打开蓝牙，然后点击"Scan"开始扫描传感器的蓝牙。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/17.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/18.png"/></div>

3. 通过 S/N 选择传感器（S/N 在传感器正面标签上）。然后，进入后将显示传感器的基本信息。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/19.png"/></div>

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/20.png"/></div>

4. 蓝牙连接成功后进入配置模式：LED 以 2 秒频率闪烁。

## 通过 App 配置基本参数

### 选择平台和频率

S210x 传感器制造时支持 863MHz ~928MHz 的通用频率计划，一个 SKU 即可。也就是说，每个设备都可以支持 7 个频率计划。

这里我们选择"SenseCAP for Helium"或"SenseCAP for TTN"。频率计划根据您的实际情况选择。

**\*注意：** 当用户周围有 Helium 网络时，数据记录器可以上传数据。它运行在 SenseCAP 私有 Helium 控制台上。用户无需在 Helium 控制台上创建设备；

SenseCAP for TTN 平台需要与 SenseCAP LoRaWAN 室外[网关](https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html)配合使用

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/21.png"/></div>

### 设置间隔

设备的工作模式：每隔一定间隔唤醒设备，收集测量值并通过 LoRa 上传。

例如，设备**默认每 60 分钟**收集并上传一次数据。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/22.png"/></div>

### 设置数据包策略

传感器上行数据包策略有三种模式，我们这里选择 1N 或者您可以根据自己的需求选择。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/23.png"/></div>

| **参数** | **描述** |
| --- | --- |
| 2C+1N（默认） | 2C+1N（2 个确认数据包和 1 个非确认数据包）是最佳策略，该模式可以最大程度地降低数据包丢失率，但是设备在 TTN 中会消耗最多的数据包，或在 Helium 网络中消耗最多的数据积分。 |
| 1C | 1C（1 个确认）设备在从服务器获得 1 个接收确认数据包后将进入睡眠状态。 |
| 1N | 1N（1 个非确认）设备只发送数据包然后开始睡眠，无论服务器是否接收到数据。 |

### 恢复出厂设置

当选择 SenseCAP 平台时，您必须使用固定的 EUI/App EUI/App Key。因此，在从其他平台切换回 SenseCAP 平台之前，您需要恢复出厂设置。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/24.png"/></div>

当我们出现错误或想要重置所有内容时，我们可以点击该按钮。设备将恢复到出厂默认配置。

**\*注意：** "恢复出厂设置"功能只能重置基本设置。

## 通过 App 配置 GPIO 传感器

选择"协议"为"GPIO"。然后依次设置以下参数。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/25.png"/></div>

1. 选择传感器的供电电压。支持 3V/5V/12V。这里我们选择 **5V**。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/26.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/27.png"/></div>

2. 设置"传感器预热时间"，预热时间表示传感器在施加电压供电后达到最高精度或性能水平所需的时间。我们在这里输入 **50(ms)**。
2. 选择输入类型：

| 电平模式 | 采集输入电平信号，高电平为 1，低电平为 0 |
| --- | --- |
| 计数模式 | 采集脉冲信号，记录脉冲数量 |

我们在这里选择**计数器模式**。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/28.png"/></div>

### 设置计数器传感器

选择"计数器模式"作为输入类型。然后依次设置以下参数。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/29.png"/></div>

| 数字输入 | 设置输入脉冲的类型。上拉高电平：检测到上升沿时有效。下拉低电平：检测到下降沿时有效。我们在这里选择**上拉高电平**。 |
| --- | --- |
| 数字滤波器 | 当脉冲宽度超过10毫秒时，建议启用此功能。默认情况下已启用。在这里**启用**它。 |
| 重启清零计数 | 当数据记录器重启时，计数清零为0。默认情况下已禁用。在这里**禁用**它。 |
| Y= Ax + B | "Y"：这是数据记录器将上传的值。"x"：这是原始计数器值。系数A：可以按"x"的倍数放大或缩小的自定义值。系数B：增加或减少"x"值的自定义值。通过设置A和B的值，您可以计算出所需的值。设置**A=0.2**和**B=0**。 |
| 单位时间采集 | 启用此功能会增加一个上传值：每小时累计量。例如，如果一小时内Y的值为1000，将上传1000/h。在这里**禁用**它。 |

配置信息完成后，点击"返回主页"（此时节点和APP蓝牙将自动断开连接），数据记录器将尝试连接网络（尝试连接网络时LED指示灯缓慢闪烁红色，网络连接成功后快速闪烁绿色）；

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/30.png"/></div>

# 在SenseCAP门户上查看数据

## 将传感器绑定到SenseCAP门户

请打开SenseCAP Mate应用程序。

1. 扫描二维码

2. 点击设备页面右上角的"添加设备"进入设备绑定页面。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/31.png"/></div>

3. 扫描设备上的二维码将设备绑定到您的账户。如果您没有将其设置到指定组，设备将被放入"默认"组。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/32.png"/></div>

4. 手动填写EUI

如果二维码贴纸损坏，您可以手动填写设备的EUI将设备绑定到您的账户。请确保您按照系统建议的格式输入EUI，然后点击"确认"。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/33.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/34.png"/></div>

## 在SenseCAP门户上查看数据

在SenseCAP应用程序或网站[http://sensecap.seeed.cc/](http://sensecap.seeed.cc/)上，您可以查看设备在线状态和最新数据。在每个传感器的列表中，您可以查看其在线状态和最后一次数据上传的时间。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/35.png"/></div>

此外，您还可以在SenseCAP Mate应用程序上查看数据。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/36.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/1.png"/></div>
