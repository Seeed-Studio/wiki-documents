---
description: 配置计数器和 GPIO 传感器
title: 配置计数器和 GPIO 传感器
keywords:
  - SenseCAP 数据记录仪
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger
last_update:
  date: 4/12/2023
  author: Yvonne
createdAt: '2023-02-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger/
---

# # 使用计数器和 GPIO 传感器开始使用 S2100

让我们开始学习如何将 S2100 与计数器和 GPIO 传感器一起使用。掌握这一点之后，我们将继续了解 S2100 应用的基础知识。这将帮助你在未来更好地了解如何连接你自己定制的传感器。

## 传感器探头

准备以下物品：

- 数据记录仪
- 雨量计 RG-15 雨量传感器（作为示例）
- 8 芯线
- 十字螺丝刀（十字槽 2 号）
- SenseCAP Mate APP

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/2.png"/></div>

# 连接传感器探头

## 拆卸数据记录仪

1. 拧下三个螺丝。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/3.png"/></div>

2. 取下上盖。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/4.png"/></div>

3. 取下螺纹帽，并将其套在传感器的电缆上，使电缆穿过底盖，然后连接到接线端子。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/5.png"/></div>

| **编号** | **引脚** | **描述** |
| --- | --- | --- |
| 1 | 12V | 外部 12V 输入电压。数据记录仪可以由外部 12V 直流电源供电。当使用 12V 电源时，电池将作为备用电源。 |
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

## 传感器供电选项

数据记录仪支持两种供电模式，我们选择内置电池模式：

| **模式** | **描述** |
| --- | --- |
| 内置电池 | 数据记录仪和传感器由电池供电。在这种情况下，数据记录仪可以连接到 5V 传感器。 |

## 连接到数据记录仪

数据记录仪的接线顺序：

| **线缆类型** | **描述** |
| --- | --- |
| 红线 | 5V |
| 黑线 | GND（任意端口均可。） |
| 黄线 | IO |

1. 将 8 芯线穿过底盖，并根据接线顺序要求连接到数据记录仪底座；

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/6.png"/></div>

2. 依次连接上盖、橡胶圈和螺帽

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/7.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/8.png"/></div>

3. **拧紧螺丝和螺帽**，检查防水性能。如果线径过细，请缠绕防水胶带。

**\*注意：** 组装设备时，需要安装好数据记录仪和适配盒的防水垫，并拧紧螺帽和螺丝，否则可能会影响设备的防水效果！

如果线径过小，可以用防水胶带缠绕，如下图所示：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/9.png"/></div>

## 连接到雨量计传感器

雨量计传感器的接线顺序：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/10.png"/></div>

1. 拧下四个螺丝，取下上盖。将 8 芯线穿过底盖，并根据接线顺序要求连接到 J1 底座；

|Wire Type|Description|
| --- | --- |
|Red|  V+|
|Black| GND|
|Yellow|OUT|

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/11.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/12.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/13.png"/></div>

2. 将雨量传感器 S1 底座的 DIP 开关 **1** 拨到 ON，将开关 **2** 拨到 OFF，将 **3** 和 **4** 也拨到 OFF；

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/14.png"/></div>

3. 安装上盖并拧紧螺丝。完成连接。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/15.png"/></div>

至此我们已经完成了接线。现在，让我们设置 S2100 并在我们的 APP 上进行配置。

## 连接到漏水探测器

漏水探测器传感器的接线顺序：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/37.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/38.png"/></div>

|Wire Type|Description|
| --- | --- |
|Red|V+|
|Blue|NC (normally closed signal)|
|Yellow|COM|
|White|IN IO|
|Brown|V-|

1. 将 5 芯电缆穿过底盖，并根据接线顺序要求连接到数据记录仪底座；

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/39.png"/></div>

| **传感器线缆颜色** | **功能** | **在 S2100 上的端子** |
| --- | --- | --- |
| **Red** | 正电源 | **`5V OUT`** |
| **Brown** | 负电源 | **`GND`** |
| **Yellow** | 信号公共端 | **`GND`** |
| **White** | 数字开关信号 | **`IO IN`** |
| **Blue** | 常闭信号 | *(悬空并用胶带绝缘)* |

2. 依次重新安装上盖、橡胶圈和电缆螺帽。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/41.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/42.png"/></div>

# 设置 S2100

## 将传感器连接到 App

1. 长按按键 **3 秒**，LED 将以 1 秒的频率闪烁。请在 1 分钟内使用 App 连接传感器；否则，设备将断电或重启。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/16.png"/></div>

2. 请选择 "S2100 Data Logger"。

请点击 "User" 按钮进入用户设置，然后点击 "Bluetooth Configuration" 开始扫描传感器的蓝牙。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/50.png"/></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/51.png"/></div>

3. 通过 S/N 选择传感器（S/N 位于传感器正面的标签上）。然后，进入后会显示传感器的基本信息。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/52.png"/></div>

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/53.png"/></div>

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/54.png"/></div>

 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/55.png"/></div>

4. 蓝牙连接成功后进入配置模式：LED 以 2 秒的频率闪烁。

## 通过 App 配置基本参数

### 选择平台和频段

S210x 传感器在生产时即支持 863MHz ~928MHz 的通用频段计划，集成在一个 SKU 中。也就是说，每一台设备都可以支持 7 种频段计划。

这里我们选择 "SenseCAP for Helium" 或 "SenseCAP for TTN"。频段计划根据你的实际情况进行选择。

**\*注意：** 当用户周围有 Helium 网络时，数据记录仪可以上传数据。它运行在 SenseCAP 私有 Helium Console 上。用户无需在 Helium Console 上创建设备；

SenseCAP for TTN 平台需要与 SenseCAP LoRaWAN 室外 [网关](https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html) 搭配使用

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/56.png"/></div>

### 设置上报间隔

设备的工作模式为：每隔一个设定的时间间隔唤醒设备，采集测量值并通过 LoRa 上传。

例如，设备**默认每 5 分钟采集并上传一次数据**。

### 设置上报策略

传感器上行数据包策略有三种模式，我们在此选择 1N，你也可以根据自己的需求进行选择。

| **参数** | **描述** |
| --- | --- |
| 2C+1N (default) | 2C+1N（2 个确认包和 1 个非确认包）是最佳策略，该模式可以最大限度地降低丢包率，但设备将在 TTN 中消耗最多的数据包，或在 Helium 网络中消耗最多的数据积分。 |
| 1C | 1C（1 个确认包）设备在从服务器收到 1 个确认包后将进入休眠。 |
| 1N | 1N（1 个非确认包）设备只发送数据包然后开始休眠，而不管服务器是否收到数据。 |

### 恢复出厂设置

在选择 SenseCAP 平台时，必须使用固定的 EUI/App EUI/App Key。因此，在从其他平台切换回 SenseCAP 平台之前，需要先恢复出厂设置。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/57.png"/></div>

当我们出错或想要重置所有内容时，可以点击该按钮。设备将恢复到出厂默认配置。

**\*注意：** "Restore Factory" 功能只能重置基础设置（Basic Setting）。

## 通过 App 配置 GPIO 传感器

将 "Protocol" 选择为 "GPIO"。然后依次设置以下参数。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/25.png"/></div>

1. 选择传感器的供电电压。它支持 3V/5V/12V。这里我们选择 **5V**。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/26.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/27.png"/></div>

2. 设置 "Sensor Warm-up time"，预热时间表示在加上电压供电后，传感器达到最高精度或性能水平所需的时间。我们在这里输入 **50(ms)**。
2. 选择输入类型：

| 电平模式 | 采集输入电平信号，高电平为 1，低电平为 0 |
| --- | --- |
| 计数模式 | 采集脉冲信号，并记录脉冲次数 |

我们在这里选择 **Counter Mode**。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/28.png"/></div>

### 设置计数传感器

将 "Counter Mode" 选择为输入类型。然后依次设置以下参数。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/29.png"/></div>

| 数字输入 | 设置输入脉冲的类型。Pull High：检测到上升沿时有效。Pull Low：检测到下降沿时有效。我们在这里选择 **Pull High**。 |
| --- | --- |
| 数字滤波 | 当脉冲宽度超过 10 ms 时，建议启用。默认启用。这里将其 **Enable**。 |
| 重启清零计数 | 当 Datalogger 发生重启时，计数会被清零为 0。默认禁用。这里将其 **Disable**。 |
| Y= Ax + B | "Y"：为 Datalogger 将要上传的数值。"x"：为原始计数值。Factory A：可自定义数值，用于将 "x" 按倍数放大或缩小。Factory B：可自定义数值，用于增加或减少 "x" 的数值。通过设置 A 和 B 的数值，可以计算出所需的数值。这里设置 **A=0.2** 和 **B=0**。 |
| 单位时间采集 | 启用此功能会额外上传一个数值：每小时的累计量。例如，如果一小时内 Y 的数值为 1000，则会上传 1000/h。这里将其 **Disable**。 |

完成配置信息后，点击 "Back to Home"（此时节点与 APP 的蓝牙会自动断开），Data Logger 将尝试连接网络（尝试连接网络时 LED 指示灯红灯慢闪，网络连接成功后绿灯快闪）；

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/30.png"/></div>

# 在 SenseCAP Portal 上查看数据

## 将传感器绑定到 SenseCAP Portal

请打开 SenseCAP Mate App。

1. 扫描二维码

2. 点击设备页面右上角的 "Add device" 进入设备绑定页面。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/31.png"/></div>

3. 扫描设备上的二维码，将设备绑定到你的账号。如果你没有将其设置到指定分组，设备将被放入 "default" 分组。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/32.png"/></div>

4. 手动填写 EUI

如果二维码贴纸损坏，你可以手动填写设备的 EUI，将设备绑定到你的账号。请确保按照系统提示的格式输入 EUI，然后点击 "confirm"。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/33.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/34.png"/></div>

## 在 SenseCAP Portal 上查看数据

在 SenseCAP App 或网站 [http://sensecap.seeed.cc/](http://sensecap.seeed.cc/) 上，你可以查看设备的在线状态和最新数据。在每个传感器的列表中，你可以查看其在线状态以及最近一次数据上传的时间。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/35.png"/></div>

你也可以在 SenseCAP Mate APP 上查看数据。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/36.png"/></div>
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/1.png"/></div>
