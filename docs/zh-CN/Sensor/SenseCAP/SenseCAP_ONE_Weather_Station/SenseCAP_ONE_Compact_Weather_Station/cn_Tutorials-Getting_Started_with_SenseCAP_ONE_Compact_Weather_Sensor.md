---
description:  SenseCAP ONE 紧凑型气象传感器入门指南
title:  SenseCAP ONE 紧凑型气象传感器入门指南
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor
last_update:
  date: 12/25/2025
  author: Janet
---
# SenseCAP ONE 紧凑型气象传感器入门指南

# 安装前准备

## 安装

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image2.png" /></div>

# 安装

### 设备接口介绍

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image3.png" /></div>

设备底部有两个连接器。

- USB Type-C 接口允许您使用普通的 USB Type-C 线缆将计算机连接到设备进行配置。

- 主数据接口可连接 M12 8 针线缆，支持多种总线协议

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image4.png" /></div>

### 使用 USB 线缆连接

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image5.png" /></div>

### M12 线缆

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image6.png" /></div>

设备采用 M12 8 针连接器，不同颜色的引脚提供电源和数据通信（如上图所示）。

使用 RS-485 时，您只需连接 4 根线（不使用加热功能），其余线缆可单独用胶带包裹以防止短路

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image7.png" /></div>

插入线缆时，线缆的孔位必须与设备连接器的引脚对齐。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image8.png" /></div>

插入线缆并顺时针拧紧

注意：插入底部之前，线缆应对准底部。否则，引脚偏斜可能导致通信异常。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image9.png" /></div>

使用带加热功能的设备时，需要单独的 24V 电源（推荐 24V@1A）。灰色线 5 连接电源负极，粉色线 6 连接电源正极。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image10.png" /></div>

### 安装设备

有两种主要的安装方法，可以使用套筒安装在杆上，或使用法兰盘安装在平台上。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image11.png" /></div>

套筒的尺寸如下所示。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image12.png" /></div>

建议杆的直径应小于或等于 75cm。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image13.png" /></div>

法兰盘的尺寸如下所示。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image14.png" /></div>

> 注意：为了获得尽可能准确的风向数据，请在安装时确保物理北向定位，将底座上的**箭头**直接指向真北。否则，请在配置期间启用电子罗盘。

# 设备工作模式

安装后，您可以为设备通电、配置设备并从设备收集数据。

设备有两种工作模式，**配置模式和工作模式。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image15.png" /></div>

### 通过 USB 端口配置设备

设备底部有一个防水圆形盖子。逆时针转动以取下此盖子，您可以看到一个 USB Type-C 连接器和一个配置按钮。

使用 USB Type-C 线缆将设备连接到计算机。计算机将自动安装设备驱动程序。驱动程序成功安装后，您可以在设备管理器中看到一个串口。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image16.png" /></div>

如果驱动程序未自动安装，请点击此链接[手动下载](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)并[安装](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)[驱动程序](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)。（版本为 CP210x Windows Drivers）

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image17.png" /></div>

**有两种方法配置设备：**

- SenseCAP ONE 配置工具

- 串口调试工具

### SenseCAP ONE 配置工具

SenseCAP ONE 配置工具为您提供图形界面来配置设备。您可以从下面的 GitHub 链接下载该工具：

&lt;https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases&gt;

根据您的需要，选择相应操作系统的软件，Windows、macOS 或 Linux。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image18.png" /></div>

下图显示了 SenseCAP ONE 配置工具的主界面。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image19.png" /></div>

1. 打开软件，点击串口的下拉框，选择设备对应的串口。

2. 将波特率设置为 9600。

3. 点击连接，如果连接成功，右侧的传感器数据区域将显示相应的测量值。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image20.png" /></div>

点击 Settings 进入设备设置，点击"Read From Device"获取设备信息。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image21.png" /></div>

1. 选择通信协议。在此示例中，我们选择 RS-485 Modbus RTU。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image22.png" /></div>

2. 修改 Modbus 地址：在 Modbus 地址中写入地址，然后点击"Write to Device"。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image23.png" /></div>

在配置页面，您可以修改以下内容：设备名称、数据类型和数据上传间隔。任何修改后，您都需要点击"Write to Device"使更改生效。

在应用程序设置中，您可以设置工具读取传感器数据的周期，最小为 2S，以及曲线的点范围。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image24.png" /></div>

点击"Firmware Update"更新设备固件。请联系销售或技术支持 (sensecap@seeed.cc) 获取固件。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image25.png" /></div>

在升级页面，您需要选择更新主板固件或驱动板固件。在本地存储库中选择固件文件，然后点击"Update Now"。如果在更新过程中出现意外断电，更新将不会执行。您需要重复相同的过程来更新固件。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image26.png" /></div>

#### 固件升级

1. 打开 `SenseCAP One Configuration Tool`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/SenseCAP_One_Configuration_Tool.png" /></div>

2. 通过 Type-C 线缆将设备连接到计算机

3. 打开软件，为设备选择正确的 `COM` 端口，然后点击 `"Connect"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Connect.png" /></div>

4. 连接后，点击 `"Firmware Update"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Firmware_Update.png" /></div>

5. 选择目标板和相应的固件文件

- 选择 `Master board`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Master_board.png" /></div>

- 点击 `"Local File"` 并浏览到固件文件夹

- 点击 `"Update"`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update.png" /></div>

6. 点击 `"Update"` 后，按下设备上的复位按钮（位于 Type-C 端口旁边）。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset.png" /></div>

按下按钮几秒钟后，更新过程将开始。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Update2.png" /></div>

7. 更新完成后，再次按下复位按钮，然后点击屏幕上的 `"OK"`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Reset2.png" /></div>

8. 重复上述步骤，将另一个固件刷入 `Slave Board 1`。

9. 完成后关闭固件更新窗口，点击 `"Disconnect"`。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/Disconnect.png" /></div>

这样就完成了气象站的所有固件升级步骤。

### 串口调试工具

通信设置如下：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image27.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image28.png" /></div>

- 在串口调试助手中，选择对应的 COM 端口。

- 勾选"点击回车开始新行"复选框。

- 将波特率设置为 9,600。

- 在发送区域发送。

- 如果在串口接收窗口中收到相应的 0XA 消息，则配置成功。如果没有，请检查 COM 端口和波特率。

请在下一章查看详细的 ASIIC 命令。

# 通信协议

设备支持以下通信协议：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image29.png" /></div>

## Modbus-RTU 协议

**协议通信参数**

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/DefaultDeviceAddress.png" /></div>

### Modbus-RTU 协议消息格式

传感器数据存储在输入寄存器中，为只读。

设备地址和 RS-485 的通信波特率存储在保持寄存器中，可以修改。

每个寄存器为 16 位，占用 2 字节。

**从输入寄存器读取消息。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image32.png" /></div>

**读写保持寄存器。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image33.png" /></div>

### 寄存器地址定义

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image34.png" /></div>

### Modbus-RTU 读取

这里是 **Modbus Poll 工具** 的示例

（从 &lt;https://www.modbustools.com/download.html&gt; 下载）。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image35.png" /></div>

配置连接参数：波特率 9600bps，8 数据位，
无校验，1 停止位。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image36.png" /></div>

读取空气温度寄存器 0x0000 到 0x0001，点击 Setup，选择 Read/Write Definition

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image37.png" /></div>

设置默认从机 ID（5-in-1 为 10，7-in-1 为 20，9-in-1 为 38），功能码 04，起始地址 0，数量（5-in-1 为 6，7-in-1 为
28，9-in-1 为 32）；

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image38.png" /></div>

现在计算机每 1 秒读取一次传感器数据，测量值（第 0 行和第 1 行）如下图所示，将测量值除以 1000 后，即为真实温度值，28300/1000 = 28.3 °C

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image39.png" /></div>

在右侧，您可以查看原始发送和接收的数据包。

当温度为正值时：

1. 主机发送 01 04 00 00 00 02 71 CB

2. 从机响应 01 04 04 00 00 6E 8C D6 41

3. 返回温度数据 0x00006E8C（十六进制），转换为十进制 = 28300，通过除以 1000 得到相应的空气温度，空气温度 = 28300/1000 = 28.3 °C

**当温度为负值时**

需要通过补码计算获得温度。

1. 主机发送 01 04 00 00 00 02 71 CB

2. 从机响应 01 04 04 FF FF FC 18 D6 41

3. 返回温度数据 FFFFFC18H（十六进制补码）。

4. 原码为 - (FF FF FC 18-1 = FF FF FC 17) = 80 00 03 E8（十六进制）= -1000（十进制）。

5. 然后温度测量值为 -1000/1000 = -1°

**S500 解码**

读取寄存器 0x0000~0x0005。

发送命令：0A 04 00 00 00 06 71 73（校验码）；

返回：26 04 40 00 00 70 80（温度）00 00 95 10（湿度） 06 07 94 40（气压）99 09（校验码）；读取寄存器 0x0008~0x0013。发送命令：0A 04 00 08 00 0C 70 B6（校验码）；

返回：0A 04 0C 00 00 00 00（最小风向）00 03 6E 84（最大风向）00 03 C8 C0（平均风向）00 00 00 00（最小风速）00 00 04 BC（最大风速）00 00 02 10（平均风速）BC 78（校验码）

**S600 解码**

读取寄存器 0x0000~0x0013

发送命令：45 03 00 00 00 13 0B 43

返回：45 04 40 00 00 70 80（温度） 00 00 95 10（湿度） 06 07 94 40（气压） 00 00 00 00（光照） 00 00 00 00（最小风向） 00 00 00 00（最大风速） 00 00 00 00（平均风向） 00 00 00 00 （最小风速） 00 00 00 00（最大风速） 00 00 00 00（平均风速）77FD（校验码）

**S700 解码**

读取寄存器 0x0000-0x001F 和 0x0030-0x0033。

发送命令：14 04 00 00 00 20 F3 06

返回：14 04 40 00 00 70 80（温度） 00 00 95 10（湿度） 06 07 94 40（气压） 00 00 00 00（光照） 00 00 00 00（最小风向） 00 00 00 00（最大风向） 00 00 00 00（平均风向） 00 00 00 00 （最小风速）00 00 00 00（最大风速) 00 00 00 00（平均风速） 00 00 00 00（累计降雨量） 00 00 00 00（累计降雨持续时间） 00 00 00 00（降雨强度） 00 00 00 00（最大降雨强度） 00 00 6A 7C（加热温度） 00 00 00 00（倾倒状态） 99 09（校验码）

**S900 解码**

读取寄存器 0x0000-0x001F 和 0x0030-0x0033。

发送命令：26 04 00 00 00 20 F7 05

返回：26 04 40 00 00 70 80 (温度) 00 00 95 10(湿度) 06 07 94 40(气压) 00 00 00 00(光照) 00 00 00 00(最小风向) 00 00 00 00(最大风向) 00 00 00 00(平均风向) 00 00 00 00 (最小风速) 00 00 00 00(最大风速) 00 00 00 00(平均风速) 00 00 00 00(累计降雨量) 00 00 00 00(累计降雨持续时间) 00 00 00 00(降雨强度) 00 00 00 00(最大降雨强度)00 00 6A 7C(加热温度) 00 00 00 00(倾倒状态) 99 09(校验码)

PM2.5 和 PM10 需要单独读取：

发送命令：26 04 00 30 00 04 F7 11

返回：26 04 08 00 00 90 88(PM2.5) 00 00 A4 10(PM10) 13 FA(校验码)

**S1000 解码**

读取寄存器 0x0000-0x001F 和 0x0030-0x0033。

发送命令：2B 04 00 00 00 20 F6 18

返回：2B 04 40 00 00 70 80 (温度) 00 00 95 10(湿度) 06 07 94 40(气压) 00 00 00 00(光照) 00 00 00 00(最小风向) 00 00 00 00(最大风向) 00 00 00 00(平均风向) 00 00 00 00 (最小风速) 00 00 00 00(最大风速) 00 00 00 00(平均风速) 00 00 00 00(累计降雨量) 00 00 00 00(累计降雨持续时间) 00 00 00 00(降雨强度) 00 00 00 00(最大降雨强度)00 00 6A 7C(加热温度) 00 00 00 00(倾倒状态) 99 09(校验码)

PM2.5、PM10 和 CO2 需要单独读取：

发送命令：2B 04 00 30 00 04 F6 0C

返回：2B 04 08 00 00 90 88(PM2.5) 00 00 A4 10(PM10) 13 FA(校验码)

读取寄存器 0x0040~0x0041。

发送命令：2B 04 00 40 00 02 77 D5

返回：2B 04 04 00 0C EC 98 （CO2） FD 2F （校验码）；

### 噪声传感器

噪声传感器作为独立的 RS485 传感器使用，与同一 RS-485 总线上的其他测量单元并联，因此需要单独读取和配置。

规格：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image40.png" /></div>

数据读取协议和配置：

通信协议采用标准 RS485 Modbus-RTU 协议，协议通信参数如下：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image41.png" /></div>

查询噪声传感器的数据（地址：40，0x28）：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image42.png" /></div>

如果查询成功，返回以下信息：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image01.png" /></div>

真实 DB = 寄存器值 /100

噪声寄存器值为 0x128E=4750，值为 =4750/100=47.5dB

## ASCII 协议

### 命令定义

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image44.png" /></div>

### 查询命令格式

命令有两种格式：

**1.** **不带 = 的命令** **指的是基本查询方法。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/11.png" /></div>

*示例：`?<CR><LF>` 表示查询设备地址*

**2.** **带 = 的命令指的是带参数的查询**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/22.png" /></div>

*示例：0XA;BD=`?<CR><LF>` 表示查询设备波特率*

### 设置命令格式

**设置指定参数，例如设置波特率。**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/33.png" /></div>

*示例：0XA;BD=96`<CR><LF>` 表示查询设备波特率*

### 命令列表

请参考：
[SenseCAP ONE/SenseCAP ONE V3 紧凑型气象站用户指南](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/SenseCAP_ONE_V3_Compact_Weather_Station_User_Guide_V1.6.pdf)

## SDI-12

SDI-12 通信采用三线制，其中两根是传感器电源线，另一根是 SDI-12 信号线。

SDI-12 总线上的每个传感器都有一个唯一的地址，可以设置为 '0'、'1' ~ '9'、'A' ~ 'Z'、'a' ~ 'z'。SenseCAP ONE 的 SDI-12 地址默认为 '0'。该传感器支持的指令如下一章所示，每个指令都符合 SDI-12 v1.4 标准。

传感器由 3.6~16V 的直流电源供电。传感器上电后，会立即进入睡眠模式，等待数据采集设备发出指令。SDI-12 使用 9600bps 波特率，1 个起始位（高电平），7 个数据位（高 0 低 1，反逻辑），1 个偶校验位，1 个停止位。

每个字节发送的序列如下图所示：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/44.png" /></div>

### SDI-12 命令和响应

请参考 [SenseCAP ONE/SenseCAP ONE V3 紧凑型气象站用户指南](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/SenseCAP_ONE_V3_Compact_Weather_Station_User_Guide_V1.6.pdf)

### SDI-12 读取

**SDI-12 接线**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image47.png" /></div>

**使用 USB 转 SDI-12 调试器与设备通信**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image48.png" /></div>

**通信设置：**
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image49.png" /></div>

将绿线（GND Data）和黄线（SDI-12 Data）连接到 **USB 转 SDI-12** 调试器。

将红线（Vin+ 电源正极）和棕线（Vin- 电源地）连接到 12V 电源。

下载串口调试助手：
&lt;https://github.com/Neutree/COMTool&gt;，然后打开串口调试工具。

- 选择正确的端口号

- 将波特率设置为 USB 转 SDI-12 调试器的波特率（注意这不是 SDI-12 协议的波特率）

- 勾选 "CRLF"

- 点击打开串口。

- 发送查询设备地址命令 "?!"，如果能看到响应 "0"，说明连接正常。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image50.png" /></div>

**开始测量**

读取空气温度、空气湿度、大气压力、光照强度

发送 "开始测量命令 0M!"，传感器首先响应 "00024"，表示 "0M!" 命令需要 2 秒进行测量并返回 4 个测量值。2 秒后，传感器响应自己的地址 "0"，表示测量已完成。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image51.png" /></div>

然后发送 "读取测量值命令 0D0!" 获取本次测量的 4 个测量值，分别是空气温度 +27.01℃、空气湿度 64.74%、大气压力 100720Pa、光照强度 10Lux。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image52.png" /></div>

使用扩展测量命令 0M1! 读取最小风向、最大风向、平均风向、最小风速、最大风速和平均风速。设备响应 "00056"，表示 "0M1!" 命令需要 5 秒进行测量并返回 6 个测量值。5 秒后，设备响应自己的地址 "0"，表示测量已完成。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image53.png" /></div>

然后发送 "读取测量值命令 0D0!" 获取本次测量的 6 个测量值，分别是最小风向 345.9 度、最大风向 347.5 度、平均风向 346.3 度、最小风速 2.8m/s、最大风速 2.8m/s、平均风速 2.8m/s。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image54.png" /></div>

然后发送 "连续测量命令 0R2!" 设备返回 4 个测量值：累计降雨量 1.2mm、累计降雨持续时间 20 秒、降雨强度 1.2mm/h、最大降雨强度 72.0mm/h。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image55.png" /></div>

## 错误代码

### Modbus 错误代码

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image56.png" /></div>

### ASCII 错误代码

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image57.png" /></div>

### SDI-12 错误代码

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image58.png" /></div>

## 资源

[SenseCAP ONE/SenseCAP ONE V3 紧凑型气象站用户指南](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_ONE/SenseCAP_ONE_V3_Compact_Weather_Station_User_Guide_V1.6.pdf)

## 常见问题（FAQ）

**平均风速和风向是如何计算的？**

默认的平均时间窗口为 5 秒。在该时间窗口内，设备会采集 5 次风速和风向数据，并计算后返回一个平均值。
