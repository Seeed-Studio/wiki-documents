---
description: SenseCAP ONE 紧凑型气象传感器快速上手
title: SenseCAP ONE 紧凑型气象传感器快速上手
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor
sku: 101990787,101990693,101990784,101990902,101990961,101991022,101991021,101991023,101991024,101991044,101991102,101991050,101991232,101991141
last_update:
  date: 03/18/2026
  author: Kian
createdAt: '2023-04-13'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/cn/Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor/
---
# SenseCAP ONE 紧凑型气象传感器快速上手

# 安装前准备

## 安装

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image2.png" /></div>

# 安装

### 设备接口介绍

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image3_V2.png" /></div>

设备底部有两个连接器。

- USB Type-C 接口允许你使用普通 USB Type-C 线将电脑连接到设备进行配置。

- 主数据接口可连接 M12 8 针电缆，支持多种总线协议

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image4.png" /></div>

### 使用 USB 线连接

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image5.png" /></div>

### M12 电缆

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image6.png" /></div>

设备采用 M12 8 针连接器，不同颜色的引脚提供电源和数据通信（如上图所示）。

在使用 RS-485 时，你可以只连接 4 根线（不使用加热功能），其余的可以单独用胶带包裹以防止短路

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image7.png" /></div>

插入电缆时，必须对齐电缆上的孔与设备连接器上的引脚。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image8.png" /></div>

插入电缆并顺时针拧紧

注意：插入前请先将电缆对准底部插座再插入。否则引脚歪斜可能导致通信异常。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image9.png" /></div>

当使用带加热功能的设备时，需要单独提供 24V 电源（推荐 24V@1A）。灰色 5 号线连接到电源负极，粉色 6 号线连接到电源正极。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image10.png" /></div>

### 安装设备

主要有两种安装方式：使用套筒安装在杆上，或使用法兰盘安装在平台上。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image11.png" /></div>

套筒的尺寸如下所示。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image12.png" /></div>

建议杆的直径应小于或等于 75cm。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image13.png" /></div>

法兰盘的尺寸如下所示。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image14.png" /></div>

> 注意：为尽可能获得最精确的风向数据，请在安装时确保物理北向，通过将底座上的**箭头**直接对准真北来实现。否则，请在配置过程中启用电子罗盘。

# 设备工作模式

安装完成后，你可以给设备上电，对其进行配置并从设备采集数据。

设备有两种工作模式，**配置模式和工作模式。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image15.png" /></div>

### 通过 USB 接口配置设备

设备底部有一个防水圆形盖子。逆时针旋转即可取下该盖子，你就可以看到 USB Type-C 接口和一个配置按钮。

使用 USB Type-C 线将设备连接到电脑。电脑会自动安装设备驱动。驱动成功安装后，你可以在设备管理器中看到一个串口。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image16.png" /></div>

如果驱动没有自动安装，请点击此链接[手动下载](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)并[安装](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)[驱动](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)。（版本为 CP210x Windows Drivers）

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image17.png" /></div>

**配置设备有两种方法：**

- SenseCAP ONE Configuration Tool

- 串口调试工具

### SenseCAP ONE Configuration Tool

SenseCAP ONE Configuration Tool 提供图形界面，方便你对设备进行配置。你可以通过下面的 GitHub 链接下载该工具：

&lt;https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases&gt;

根据需要选择对应操作系统的软件下载包：Windows、macOS 或 Linux。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image18.png" /></div>

下图展示了 SenseCAP ONE Configuration Tool 的主界面。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image19.png" /></div>

1. 打开软件，点击串口下拉框，选择设备对应的串口。

2. 将波特率设置为 9600。

3. 点击 Connect，如果连接成功，右侧的传感器数据区域会显示相应的测量值。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image20.png" /></div>

点击 Settings 进入设备设置界面，并点击 "Read From Device" 获取设备信息。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image21.png" /></div>

1. 选择通信协议。本示例中我们选择 RS-485 Modbus RTU。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image22.png" /></div>

2. 修改 Modbus 地址：在 Modbus address 中写入地址，然后点击 "Write to Device"。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image23.png" /></div>

在配置页面，你可以修改以下内容：设备名称、数据类型和数据上传间隔。每次修改后，都需要点击 "Write to Device" 使更改生效。

在应用设置中，你可以设置工具读取传感器数据的周期，最小为 2S，并设置曲线的点范围。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image24.png" /></div>

点击 "Firmware Update" 可更新设备固件。请联系销售或技术支持（sensecap@seeed.cc）获取固件。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image25.png" /></div>

在升级页面，你需要选择更新主板固件或驱动板固件。在本地仓库中选择固件文件，然后点击 "Update Now"。如果在更新过程中意外断电，更新将不会执行，你需要重新按照相同流程更新固件。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image26.png" /></div>

#### 固件升级

1. 打开 `SenseCAP One Configuration Tool`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_One_Configuration_Tool.png" /></div>

2. 通过 Type-C 线将设备连接到电脑

3. 打开软件，选择设备正确的 `COM` 端口，并点击 `"Connect"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Connect.png" /></div>

4. 连接后，点击 `"Firmware Update"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Firmware_Update.png" /></div>

5. 选择目标板和对应的固件文件

- 选择 `Master board`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Master_board.png" /></div>

- 点击 `"Local File"` 并浏览到固件文件夹

- 点击 `"Update"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update.png" /></div>

6. 点击 `"Update"` 后，按下设备上的 Reset 按钮（位于 Type-C 接口旁边）。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset.png" /></div>

按下按钮几秒钟后，将开始更新过程。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update2.png" /></div>

7. 更新完成后，再次按下 Reset 按钮，然后在屏幕上点击 `"OK"`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset2.png" /></div>

8. 重复上述步骤，将另一份固件烧录到 `Slave Board 1` 上。

9. 完成后关闭 Firmware Update 窗口，点击 `"Disconnect"`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Disconnect.png" /></div>

至此，气象站的所有固件升级步骤已全部完成。

### 串口调试工具

通信设置如下：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image27.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image28.png" /></div>

- 在串口调试助手中，选择对应的 COM 端口。

- 勾选 "click Enter to start a new line" 复选框。

- 将波特率设置为 9,600。

- 在发送区中发送。

- 如果在串口接收窗口中收到对应的 0XA 消息，则表示配置成功；否则，请检查 COM 端口和波特率。

请在下一章中查看详细的 ASIIC 命令。

# 通信协议

设备支持以下通信协议：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image29.png" /></div>

## Modbus-RTU 协议

**协议通信参数**

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/DefaultDeviceAddress.png" /></div>

### Modbus-RTU 协议报文格式

传感器数据存储在 Input Register 中，为只读。

RS-485 的设备地址和通信波特率存储在 Holding Register 中，可进行修改。

每个寄存器为 16 位，占用 2 个字节。

**从输入寄存器中读取报文。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image32.png" /></div>

**读写保持寄存器。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image33.png" /></div>

### 寄存器地址定义

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image34.png" /></div>

### Modbus-RTU 读取

下面是 **Modbus Poll 工具** 的一个示例

(从 &lt;https://www.modbustools.com/download.html&gt; 下载)。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image35.png" /></div>

配置连接参数：波特率 9600bps，8 个数据位，
无校验，1 个停止位。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image36.png" /></div>

读取空气温度寄存器 0x0000 到 0x0001，点击 Setup，并选择 Read/Write Definition

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image37.png" /></div>

设置默认从机 ID（5 合 1 为 10，7 合 1 为 20，9 合 1 为 38），功能码 04，起始地址 0，数量（5 合 1 为 6，7 合 1 为
28，9 合 1 为 32）；

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image38.png" /></div>

现在电脑每 1 秒读取一次传感器数据，测量值（第 0 行和第 1 行）如下面图片所示，将测量值除以 1000 后即为真实温度值，28300/1000 = 28.3 °C

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image39.png" /></div>

在右侧可以查看原始发送和接收的数据包。

当温度为正数时：

1. 主机发送 01 04 00 00 00 02 71 CB

2. 从机响应 01 04 04 00 00 6E 8C D6 41

3. 返回温度数据 0x00006E8C（十六进制），转换为十进制 = 28300，通过除以 1000 得到对应的空气温度，空气温度 = 28300/1000 = 28.3 °C

**当温度为负数时**

需要通过补码计算来获得温度。

1. 主机发送 01 04 00 00 00 02 71 CB

2. 从机响应 01 04 04 FF FF FC 18 D6 41

3. 返回温度数据 FFFFFC18H（十六进制补码）。

4. 原码为 - (FF FF FC 18-1 = FF FF FC 17) = 80 00 03 E8（十六进制）= -1000（十进制）。

5. 则温度测量值为 -1000/1000 = -1°

**S500 解码**

读取寄存器 0x0000~0x0005。

发送命令：0A 04 00 00 00 06 71 73（校验码）；

返回：26 04 40 00 00 70 80（温度）00 00 95 10（湿度）06 07 94 40（气压）99 09（校验码）；读取寄存器 0x0008~0x0013。发送命令：0A 04 00 08 00 0C 70 B6（校验码）；

返回：0A 04 0C 00 00 00 00（最小风向）00 03 6E 84（最大风向）00 03 C8 C0（平均风向）00 00 00 00（最小风速）00 00 04 BC（最大风速）00 00 02 10（平均风速）BC 78（校验码）

**S600 解码**

读取寄存器 0x0000~0x0013

发送命令：45 03 00 00 00 13 0B 43

返回：45 04 40 00 00 70 80（温度）00 00 95 10（湿度）06 07 94 40（气压）00 00 00 00（光照）00 00 00 00（最小风向）00 00 00 00（最大风速）00 00 00 00（平均风向）00 00 00 00（最小风速）00 00 00 00（最大风速）00 00 00 00（平均风速）77FD（校验码）

**S700 解码**

读取寄存器 0x0000-0x001F 和 0x0030-0x0033。

发送命令：14 04 00 00 00 20 F3 06

返回：14 04 40 00 00 70 80（温度）00 00 95 10（湿度）06 07 94 40（气压）00 00 00 00（光照）00 00 00 00（最小风向）00 00 00 00（最大风向）00 00 00 00（平均风向）00 00 00 00（最小风速）00 00 00 00（最大风速）00 00 00 00（平均风速）00 00 00 00（累计降雨量）00 00 00 00（累计降雨时长）00 00 00 00（雨强）00 00 00 00（最大雨强）00 00 6A 7C（加热温度）00 00 00 00（倾倒状态）99 09（校验码）

**S900 解码**

读取寄存器 0x0000-0x001F 和 0x0030-0x0033。

发送命令：26 04 00 00 00 20 F7 05

返回：26 04 40 00 00 70 80（温度）00 00 95 10（湿度）06 07 94 40（气压）00 00 00 00（光照）00 00 00 00（最小风向）00 00 00 00（最大风向）00 00 00 00（平均风向）00 00 00 00（最小风速）00 00 00 00（最大风速）00 00 00 00（平均风速）00 00 00 00（累计降雨量）00 00 00 00（累计降雨时长）00 00 00 00（雨强）00 00 00 00（最大雨强）00 00 6A 7C（加热温度）00 00 00 00（倾倒状态）99 09（校验码）

PM2.5 和 PM10 需要单独读取：

发送命令：26 04 00 30 00 04 F7 11

返回：26 04 08 00 00 90 88（PM2.5）00 00 A4 10（PM10）13 FA（校验码）

**S1000 解码**

读取寄存器 0x0000-0x001F 和 0x0030-0x0033。

发送命令：2B 04 00 00 00 20 F6 18

返回：2B 04 40 00 00 70 80（温度）00 00 95 10（湿度）06 07 94 40（气压）00 00 00 00（光照）00 00 00 00（最小风向）00 00 00 00（最大风向）00 00 00 00（平均风向）00 00 00 00（最小风速）00 00 00 00（最大风速）00 00 00 00（平均风速）00 00 00 00（累计降雨量）00 00 00 00（累计降雨时长）00 00 00 00（雨强）00 00 00 00（最大雨强）00 00 6A 7C（加热温度）00 00 00 00（倾倒状态）99 09（校验码）

PM2.5、PM10 和 CO2 需要单独读取：

发送命令：2B 04 00 30 00 04 F6 0C

返回：2B 04 08 00 00 90 88（PM2.5）00 00 A4 10（PM10）13 FA（校验码）

读取寄存器 0x0040~0x0041。

发送命令：2B 04 00 40 00 02 77 D5

返回：2B 04 04 00 0C EC 98（CO2）FD 2F（校验码）；

### 噪声传感器

噪声传感器作为一个独立的 RS485 传感器使用，与其他测量单元并联在同一 RS-485 总线上，因此需要单独读取和配置。

规格：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image40.png" /></div>

数据读取协议和配置：

通信协议采用标准 RS485 Modbus-RTU 协议，协议通信参数如下：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image41.png" /></div>

查询噪声传感器（地址：40，0x28）数据：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image42.png" /></div>

如果查询成功，将返回以下信息：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image01.png" /></div>

实际分贝值 Real DB = 寄存器数值 /100

噪声寄存器数值为 0x128E=4750，对应的数值为 4750/100=47.5dB

## ASCII 协议

### 命令定义

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image44.png" /></div>

### 查询命令格式

命令有两种格式：

**1.** **不带 = 的命令** **表示基本查询方式。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/11.png" /></div>

*示例：`?<CR><LF>` 表示查询设备地址*

**2.** 带有 **= 的命令表示带参数的查询**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/22.png" /></div>

*示例：0XA;BD=`?<CR><LF>` 表示查询设备的波特率*

### 设置命令格式

**设置指定参数，例如设置波特率。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/33.png" /></div>

*示例：0XA;BD=96`<CR><LF>` 表示设置设备的波特率*

### 命令列表

请参考：
[SenseCAP ONE/SenseCAP ONE V3 Compact Weather Station User Guide](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/SenseCAP_ONE_V3_Compact_Weather_Station_User_Guide_V1.6.pdf)

## SDI-12

SDI-12 通信采用三根线，其中两根为传感器电源线，另一根为 SDI-12 信号线。

SDI-12 总线上的每个传感器都有唯一地址，可设置为 '0'、'1' ~ '9'、'A' ~ 'Z'、'A' ~ 'Z'。SenseCAP ONE 的 SDI-12 地址默认为 '0'。该传感器支持的指令见下一章节，每条指令均符合 SDI-12 v1.4 标准。

传感器由 3.6~16V 的直流电源供电。传感器上电后会立即进入休眠模式，等待数据采集设备下发指令。SDI-12 使用 9600bps 波特率，1 个起始位（高电平）、7 个数据位（高为 0、低为 1，反逻辑）、1 个偶校验位和 1 个停止位。

每个字节发送的时序如下图所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/44.png" /></div>

### SDI-12 命令与响应

请参考 [SenseCAP ONE/SenseCAP ONE V3 Compact Weather Station User Guide](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/SenseCAP_ONE_V3_Compact_Weather_Station_User_Guide_V1.6.pdf)

### SDI-12 读取

**SDI-12 接线**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image47.png" /></div>

**使用 USB 转 SDI-12 调试器与设备通信**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image48.png" /></div>

**通信设置：**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image49.png" /></div>

将绿色线（GND Data）和黄色线（SDI-12 Data）连接到 **USB 转 SDI-12** 调试器。

并将红色线（Vin+ 电源正极）和棕色线（Vin- 电源地）连接到 12V 电源。

下载串口调试助手：
&lt;https://github.com/Neutree/COMTool&gt;，然后打开串口调试工具。

- 选择正确的端口号

- 将波特率设置为 USB 转 SDI-12 调试器的波特率（注意这不是 SDI-12 协议的波特率）

- 勾选 "CRLF"

- 点击打开串口。

- 发送查询设备地址命令 "?!", 如果能看到响应 "0"，则表示连接正常。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image50.png" /></div>

**开始测量**

读取空气温度、空气湿度、大气压、光照强度

发送“开始测量命令 0M!”，传感器首先响应 "00024"，表示 "0M!" 命令测量耗时 2 秒并返回 4 个测量值。2 秒后，传感器响应自身地址 "0"，表示测量已完成。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image51.png" /></div>

然后发送“读取测量值命令 0D0!”即可获得本次测量的 4 个测量值，分别为空气温度 +27.01℃、空气湿度 64.74%、大气压 100720Pa 和光照强度 10Lux。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image52.png" /></div>

使用扩展测量命令 0M1! 读取最小风向、最大风向、平均风向、最小风速、最大风速和平均风速。设备响应 "00056"，表示 "0M1!" 命令测量耗时 5 秒并返回 6 个测量值。5 秒后，设备响应自身地址 "0"，表示测量已完成。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image53.png" /></div>

然后发送“读取测量值命令 0D0!”即可获得本次测量的 6 个测量值，分别为最小风向 345.9 度、最大风向 347.5 度、平均风向 346.3 度、最小风速 2.8m/s、最大风速 2.8m/s、平均风速 2.8m/s。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image54.png" /></div>

然后发送“连续测量命令 0R2!”，设备返回 4 个测量值：累计降雨量 1.2mm、累计降雨时长 20 秒、降雨强度 1.2mm/h、最大降雨强度 72.0mm/h。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image55.png" /></div>

## 错误码

### Modbus 错误码

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image56.png" /></div>

### ASCII 错误码

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image57.png" /></div>

### SDI-12 错误码

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image58.png" /></div>

## 资源

[SenseCAP ONE/SenseCAP ONE V3 Compact Weather Station User Guide](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/SenseCAP_ONE_V3_Compact_Weather_Station_User_Guide_V1.6.pdf)

## 常见问题

**平均风速和风向是如何计算的？**

默认平均时间窗口为 5 秒。在此时间窗口内，设备会采集 5 次风速和风向数据，并返回一个平均值。
