---
description: SenseCAP S2120 8合1 LoRaWAN 气象传感器入门指南
title: SenseCAP S2120 8合1 LoRaWAN 气象传感器入门指南
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Getting_Started_with_SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor
last_update:
  date: 7/26/2023
  author: Jessie
---

## 安装前准备

### 示意图

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor95.png" /></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor98.png" /></div>

### 安装雨量计

> 安装雨量计漏斗并顺时针旋转，将漏斗锁定到气象站上。
>
<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor220.png" /></div>

### 供电模式

> 气象站不包含电池，因此需要额外的电池。
>
> 传感器由太阳能电池板和电池组合供电。当太阳能电池板工作时，设备由太阳能电池板供电；当太阳能不足时，由电池供电。
>
> 不同类型的电池会影响传感器的工作温度范围。此外，电池数量的不同决定了传感器的电池寿命。
>
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor699.png" /></div>

**选项1：使用内置电池盒安装电池**

- **步骤1：** 拧开气象站底部的电池门。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor817.png" /></div>

- **步骤2：** 按照标示的+/-极性插入3节AA电池。然后关闭电池门。拧紧电池门螺丝。安装完成后，气象站底部的红色LED指示灯将开始闪烁。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1069.png" /></div>

**选项2：使用外置电池盒安装电池**

- **步骤1：** 将电池盒锁定开关滑动到解锁位置。按照箭头方向推开电池盒门。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1250.png" /></div>

- **步骤2：** 按照标示的+/-极性插入6节AA电池。然后放置并锁定电池盒门。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1375.png" /></div>

- **步骤3：** 拧开气象站底部的电池门。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1451.png" /></div>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1452.png" /></div>

- **步骤4：** 将假电池插入电池仓，确保"OUTSIDE"标记朝外，+/-极性方向正确。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor1615.png" /></div>

**步骤5：** 更换外置电池盒附带的电池门，然后拧紧电池门螺丝。安装完成后，气象站底部的红色LED指示灯将开始闪烁。

:::tip **注意**
如果假电池安装方向不正确，电池电源连接将失败，LED指示灯不会闪烁。
:::

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2013.png" /></div>

- **步骤 6：** 使用扎带将电池盒固定到安装杆上。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2093.png" /></div>

## 指示灯状态

气象站底部有按钮和指示灯：

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2193.png" /></div>

您可以通过传感器的 LED 指示灯了解其工作状态。请参考下表中的状态说明：

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2327.png" /></div>

:::tip **注意**
首次安装电池后，您必须连接蓝牙并配置频率以加入 LoRaWAN 网络并正常工作。如果未设置频率，红色 LED 将持续亮起。
:::

## 连接到 SenseCAP Mate 应用

**步骤 1：** 下载应用

作为一个工具，SenseCAP Mate 应用用于配置 LoRa 参数、设置间隔、将设备绑定到您的账户以及查看设备基本信息。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor2808.png" /></div>

**步骤 2：** 创建新账户

SenseCAP Mate 支持设备配置和远程管理。要使用 SenseCAP Portal 平台和其他功能，请注册一个账户。

SenseCAP Mate 支持离线功能，如果您只使用配置传感器功能，可以选择不创建账户。只需点击 **跳过**。

请选择 **全球** 作为服务器位置。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor3406.png" /></div>

您也可以通过 SenseCAP Portal 创建账户：http://sensecap.seeed.cc

:::tip **注意**
如果您找不到邮件，它可能被自动识别为"垃圾邮件"并放入"垃圾箱"中。
:::

**步骤 3：** 将传感器连接到应用

安装电池后，红色 LED 将持续亮起。同时，激活蓝牙。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4059.png" /></div>

请选择"S2120 Weather Station"。
请点击"Setup"按钮打开蓝牙，然后点击"Scan"开始扫描传感器的蓝牙。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4213.png" /></div>

输入配对密码。**默认密码是 000000**。

通过 BT ID 选择传感器（BT ID 在传感器底部标签上）。然后，进入后将显示传感器的基本信息。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4428.png" /></div>

**步骤 4：** 通过应用配置参数

- 选择平台

S2120 气象站制造时支持从 863MHz~928MHz 的通用频率计划，一个 SKU 即可。也就是说，每个设备都可以支持 7 种频率计划。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4675.png" /></div>

- 选择频率

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor4678.png" /></div>

:::tip **注意**
不同国家和 LoRaWAN 网络服务器使用不同的频率计划。

- 对于 Helium 网络，请参考：

https://docs.helium.com/lorawan-on-helium/frequency-plans

- 对于 The Things Network，请参考：

https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/

- 使用 SenseCAP 平台时，EUI、APP EUI 和 APP Key 是固定的，与传感器标签上的相同。
- 当传感器被选择用于 Helium 或 TTN 等公共平台时，EUI 不会改变，传感器将生成新的固定 App EUI 和 App Key 用于网络接入。
:::

- **设置间隔**

设备的工作模式：每隔一定间隔唤醒设备，收集测量值并通过 LoRa 上传。例如，设备**默认每 60 分钟**收集并上传一次数据。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor7708.png" /></div>

- **设置 EUI 和密钥**

设备默认使用 OTAA 方式加入 LoRaWAN 网络。因此，可以设置设备 EUI 和 App EUI。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor7835.png" /></div>

- **设置数据包策略**

传感器上行数据包策略有三种模式。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor7913.png" /></div>

- **设置激活类型**

传感器支持两种网络接入模式，默认为 OTAA。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor8003.png" /></div>

使用 ABP 模式时，需要配置以下信息：

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor8076.png" /></div>

:::tip **注意**
出厂默认为固定值。
:::

- **恢复出厂设置**

选择 SenseCAP 平台时，必须使用固定的 EUI/App EUI/App Key。因此，从其他平台切换回 SenseCAP 平台之前，需要恢复出厂设置。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor8357.png" /></div>

当我们出现错误或想要重置所有设置时，可以点击该按钮。设备将恢复到出厂默认配置。

## 连接到 SenseCAP 门户

[SenseCAP 门户](http://sensecap.seeed.cc)的主要功能是管理 SenseCAP 设备和存储数据。它构建在微软安全可靠的云服务 Azure 之上。您可以申请一个账户并将所有设备绑定到该账户。SenseCAP 提供 Web 门户和 API。Web 门户包括仪表板、设备管理、数据管理和访问密钥管理，而 API 则向用户开放以供进一步开发。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor8976.png" /></div>

>**仪表板：** 包括设备概览、公告、场景数据和数据图表等。
>**设备管理：** 管理 SenseCAP 设备。
>
>**数据管理：** 管理数据，包括数据表和图表部分，提供数据搜索方法。
>
>**子账户系统：** 注册具有不同权限的子账户。
>
>**访问密钥管理：** 管理访问密钥（用于访问 API 服务），包括密钥创建、密钥更新和密钥检查。

查看[快速开始](https://sensecap-docs.seeed.cc/quickstart.html)了解更多详情。

>**API 说明**
>
> SenseCAP API 供用户管理物联网设备和数据。它包括 3 种类型的 API 方法：HTTP 协议、MQTT 协议和 Websocket 协议。
>
>- 使用 HTTP API，用户可以管理 LoRa 设备，获取原始数据或
   历史数据。
>
>- 使用 MQTT API，用户可以通过 MQTT 协议订阅传感器的实时
    > 测量数据。
>
>- 使用 Websocket API，用户可以通过 Websocket 协议获取传感器的实时测量数据。
>

请参考此链接获取 [API 用户指南](https://sensecap-docs.seeed.cc/)

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor10672.png" /></div>

## 连接到 Helium 网络

请参考手册将传感器连接到 Helium 公共控制台：

[连接到 Helium 网络](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20Helium%20Network.pdf)

[S2120 Helium 解码器](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/S2120/Helium)

## 连接到 The Things Network

- **请参考此手册：**

[连接到 TTN](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)

- **请参考链接使用 TTN 平台：**

[The Things Network 网站](https://www.thethingsnetwork.org)

[The Things Industries 登录](https://accounts.thethingsindustries.com/login)

[TTN 快速入门](https://www.thethingsnetwork.org/docs/quick-start/)

[S2120 TTN 解码器](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main/S2120/TTN)

## 设备安装

**步骤 1：** 选择合适的安装位置

在安装气象站之前，请考虑以下几点：

**(1)** 雨量计必须每隔几个月清洁一次。

**(2)** 避免来自任何相邻建筑物和结构的辐射热反射。理想情况下，气象站应安装在距离任何建筑物、结构、地面或屋顶 1.5 米（5 英尺）的位置。

**(3)** 选择一个开阔的空间区域，在阳光直射下，没有任何雨水、风和阳光的阻挡。

**(4)** 气象站和网关之间的传输距离在视线范围内可达 2~10 公里，前提是中间或附近没有干扰障碍物，如树木、塔楼或高压线。检查接收信号质量以确保良好的接收效果。

**(5)** 冰箱、照明和调光器等家用电器可能造成电磁干扰（EMI），而在相同频率范围内工作的设备产生的射频干扰（RFI）可能导致信号间歇性中断。选择距离这些干扰源至少 1-2 米（3-5 英尺）的位置，以确保最佳接收效果。

**步骤 2：** 安装气象站

**(1)** 调整太阳能板

太阳能板的倾斜角度可以根据您所在的地区垂直调整为 0°、15°、30°、45° 和 60° 位置。为了全年获得最佳功率输出，请设置最接近您所在纬度的倾斜角度。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor21897.png" /></div>

安装在南半球的传感器必须将太阳能板朝向北方。

**(2)** 撕掉太阳能板保护膜，轻轻松开螺丝，直到对面的齿轮从锁定位置分离。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor22132.png" /></div>

**(3)** 根据您所在位置的纬度调整太阳能板的垂直角度（0°、15°、30°、45°、60°），推动齿轮并拧紧螺丝，直到齿轮牢固锁定。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor22334.png" /></div>

**步骤 3：** 安装安装杆

**(1)** 使用安装底座、夹具、垫圈、螺丝和螺母将塑料杆固定到您的固定杆上。按照以下顺序：
将塑料杆插入安装支架的孔中，然后用螺丝和螺母固定。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture%2001.png" /></div>

在安装夹具上贴上 2 个橡胶垫。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture%2002.png" /></div>

用 4 个长螺丝和螺母将安装支架和夹具一起固定到固定杆上。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture%2003.png" /></div>

**(2)** 在安装底座内侧贴上 2 个橡胶垫，夹住气象站，并松散地将它们固定在一起。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor.files/Tutorials-Getting%20Started%20with%20SenseCAP%20S2120%208-in-1%20LoRaWAN%20Weather%20Sensor22882.png" /></div>

**(3)** 将气象站放置在安装杆上，在拧紧螺丝之前将其对准北方。

:::info 注意
任何金属物体都可能吸引雷击，包括安装杆。切勿在暴风雨天气安装气象站。
如果您想在房屋或建筑物上安装气象站，请咨询持证电气工程师以确保适当的接地。金属杆的直接雷击可能损坏或摧毁您的房屋。

在高处安装传感器可能导致人身伤害或死亡。尽可能多地在地面和建筑物或房屋内进行初始检查和操作。只在晴朗、干燥的天气安装气象站。
:::

**步骤 4：** 方向对准

将气象站安装在开阔的位置，传感器上方和周围没有障碍物，以便准确测量雨量和风力。

找到气象站顶部的北方（N）标记，在最终安装时使用指南针或GPS将标记对准北方。使用提供的两个螺丝和螺母将安装支架紧固在直径30至40毫米的杆子上（不包含在内）。

使用气象站上的水平仪确保传感器完全水平，以便正确测量降雨量、紫外线和光照强度。

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture%2004.png" /></div>

>**最佳无线通信建议**
>
> 有效的无线通信容易受到环境中的噪声干扰，以及传感器
> 发射器和网关之间的距离和障碍物的影响。
>
>- 安装方向。安装设备时，除了考虑风向方向外，还需要考虑无线传输的方向。在所示方向中，指向网关将获得更好的信号。
>

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture05.png" /></div>

>
>- 距离。路径损耗随距离自然发生。该设备在视线范围内的额定距离为10公里（在无干扰环境且无障碍物的情况下）。然而，在实际安装中，通常最大距离为1~3公里，包括穿过障碍物。
>
>- 障碍物。无线电信号会被金属障碍物（如铝包层）阻挡。如果您有金属包层，请对准气象站和网关，使它们通过窗户保持清晰的视线。
>
> 下表显示了信号每次穿过这些建筑材料时信号强度的典型降低水平（RF信号衰减参考）：

<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/wiki%20images/8%20in%201/new/picture06.png" /></div>

## 故障排除

### 气象站维护

![](https://files.seeedstudio.com/wiki/wiki%20images/S2120%20Trouble%20Shooting%20&%20Tech%20Support.files/Trouble%20Shooting%20&%20Tech%20Support49.png)

### 传感器无法加入LoRa网络，如何处理？

1. 检查网关频率配置。确保网关和传感器具有相同的上行和下行频率。

2. 检查实时日志并点击传感器的配置按钮，查看是否有任何传感器数据包。如果有数据包，检查网关是否正在发送下行数据包。

3. 如果信道和其他配置正确，但网关日志中没有数据包，请联系技术支持。

### 电池寿命预测

> 功耗表仅供参考。电池寿命
> 取决于各种因素，如频段、与
> 网关的距离和环境温度。
>

[电池寿命预测](https://files.seeedstudio.com/SenseCAP_S21XX_Sensor_%20Battery_Life_Prediction.xlsx)
