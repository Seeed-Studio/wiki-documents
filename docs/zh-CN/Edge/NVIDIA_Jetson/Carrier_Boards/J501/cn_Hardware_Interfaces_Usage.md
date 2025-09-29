---
description: J501载板的硬件和接口使用说明
title: 接口使用说明
tags:
  - J501
  - Jetson
  - Interface
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/j501_carrier_board_interfaces_usage
last_update:
  date: 08/20/2024
  author: Youjiang
---

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/j501.png"/>
</div>

本wiki介绍了J501载板上各种不同的硬件和接口，以及如何使用它们来扩展您的项目想法。

## GMSL摄像头

我们需要将J501载板与[GMSL扩展板](https://www.seeedstudio.com/reServer-Industrial-J501-GMSL-extension-board-p-5949.html)结合使用来激活GMSL功能。J501 GMSL扩展板专为与reServer Industrial J501载板连接多达8个GMSL摄像头而设计，兼容NVIDIA® Jetson AGX Orin™。该扩展板使用反序列化器'MAX96724'。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl.png"/>
</div>

### 兼容摄像头

- [[3MP] SG3S-ISX031C-GMSL2F](https://www.sensing-world.com/en/pd.jsp?recommendFromPid=0&id=23&fromMid=1544)

### 硬件连接

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl_connectoin.png"/>
</div>

- **步骤1.** 在J501载板上安装铜柱。
- **步骤2.** 将GMSL扩展板连接到J501载板并使用螺丝固定。
- **步骤3.** 连接GMSL摄像头。

### 使用说明

:::note
在启用GMSL功能之前，请确保您已安装了带有GMSL扩展板驱动程序的JetPack版本。
:::

**步骤1.** 在jetson设备终端中，输入以下命令检查连接的摄像头是否被正确识别。

```bash
ls /dev/video*
```

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/ls_cam.png"/>
</div>

**步骤2.** 安装视频接口配置工具。

```bash
sudo apt install v4l-utils
```

**步骤3.** 设置序列化器和反序列化器的通道格式。

```bash
media-ctl -d /dev/media0 --set-v4l2 '"ser_0_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_1_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_2_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_3_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_4_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_5_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_6_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"ser_7_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_3":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_3":0[fmt:YUYV8_1X16/1920x1536]'
```

:::note
我们需要在设备每次重启时为序列化器和反序列化器设置通道格式。
:::

**步骤4.** 我们可以使用以下命令快速启动摄像头并打开一个窗口来显示视频流。

```bash
gst-launch-1.0 v4l2src device=/dev/video0  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video1  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video2  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video3  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video4  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video5  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video6  ! xvimagesink -ev 
gst-launch-1.0 v4l2src device=/dev/video7  ! xvimagesink -ev 
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/gmsl_result.png"/>
</div>

## 千兆以太网连接器

J501 上有 2 个以太网端口。

- eth0：标准千兆以太网端口，支持 10/100/1000Mbps 规格。
- eth1：万兆以太网端口。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/internet.png"/>
</div>

每个以太网端口上有 2 个 LED 指示灯（绿色和黄色）：

- 绿色 LED：仅在连接到 1000M/10G 网络时点亮。
- 黄色 LED：显示网络活动状态。

## SATA 连接器

reServer J501 载板支持 2x SATA 2.5" HDD/SSD，并配有 SATA 数据和电源连接器。您可以按如下方式连接 HDD/SSD：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/sata_connection.jpeg"/>
</div>

### 使用说明

Jetson 设备系统启动后，您可以通过 `lsblk` 验证已连接的 SATA 驱动器。

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsblk.png"/>
</div>

## M.2 Key M

M.2 Key M 是专为高速固态硬盘（SSD）设计的接口，提供超快的数据传输速度，非常适合高性能应用。

### 支持的 SSD 如下：

- [128GB NVMe M.2 PCle Gen3x4 2280 内置 SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 内置 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 内置 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 内置 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)

### 使用说明

在 Jetson 设备中打开终端并输入以下命令来测试 SSD 的读写速度。

```bash
sudo dd if=/dev/zero of=tempfile bs=1M count=1024 conv=fdatasync
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/test_nvme.png"/>
</div>

:::danger
测试完成后，请运行 `sudo rm tempfile` 命令删除缓存文件。
:::

## M.2 Key E

J501载板配备了M.2 Key E接口，通过该接口您可以扩展设备的蓝牙和Wi-Fi功能。

我们推荐使用Intel Dual Band Wireless-Ac 8265 w/Bluetooth 8265.NGWMG模块。

### 硬件连接

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_connection.jpeg"/>
</div>

### 使用说明

安装Wi-Fi模块并给设备上电后，我们可以配置设备的Wi-Fi和蓝牙设置。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/>
</div>

当然，我们也可以使用以下命令检查设备的运行状态。

```bash
ifconfig
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_ifconfig.png"/>
</div>

```bash
bluetoothctl
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/bluetoothctl.png"/>
</div>

## M.2 Key B

J501载板配备了一个M.2 Key B连接器，支持4G和5G模块。目前我们已经测试了**SIM8202G-M2 5G模块**。

### 硬件连接

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/5G_connection.png"/>
</div>
  
## Mini PCIe

J501载板配备了一个mini PCIe连接器，支持4G和LoRa模块。但是，您一次只能连接4G模块或LoRa模块中的一个。一些4G模块内置了GPS功能。我们也会讨论这个功能。

### 4G模块

#### 硬件连接

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/minipcie_4g.jpeg"/>
</div>

- **步骤1.** 在20Pin接头上的**SIM_MUX_SEL**和**GND**引脚之间添加跳线。

- **步骤2.** 将4G模块滑入mini PCIe插槽并用螺丝固定。

- **步骤3.** 将支持4G的nano SIM卡插入板上的SIM卡插槽。

:::note
如果您想要取出SIM卡，请将卡片推入以触发内部弹簧，这样SIM卡就会从插槽中弹出
:::

### 使用说明

**步骤1.** 安装minicom：

```bash
sudo apt update
sudo apt install minicom -y
```

**步骤2.** 进入已连接的4G模块的串口控制台，这样我们就可以输入AT命令并与4G模块进行交互：

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**步骤3.** 按 Ctrl+A，然后按 E 开启本地回显。

**步骤4.** 输入命令"AT"并按回车。如果看到响应为"OK"，则4G模块工作正常。

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/>
</div>

**步骤5.** 输入命令"ATI"检查模块信息。

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/>
</div>

## DI/DO/CAN

J501载板支持4个数字输入和4个数字输出通道，所有通道都采用光电隔离，有效保护主板免受电压尖峰或其他电气干扰。在同一个连接器上还有两个CAN接口，我们将在本wiki的后续部分讨论。

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido.jpeg"/>
</div>

<table>
  <thead>
    <tr>
      <th>类型</th>
      <th>标签名称</th>
      <th>原理图信号</th>
      <th>模块引脚编号</th>
      <th>BGA编号</th>
      <th>GPIO编号</th>
      <th>电压/电流限制</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>输入</td>
      <td>DI1</td>
      <td>DI_12V_1/DI_1_GPIO17</td>
      <td>A54</td>
      <td>PP.04</td>
      <td>444</td>
      <td rowSpan={4}>12V/ 总电流20mA</td>
    </tr>
    <tr>
      <td>DI2</td>
      <td>DI_12V_2/DI_2_GPIO18</td>
      <td>C55</td>
      <td>PQ.04</td>
      <td>452</td>
    </tr>
    <tr>
      <td>DI3</td>
      <td>DI_12V_3/DI_3_GPIO19</td>
      <td>K56</td>
      <td>PN.02</td>
      <td>434</td>
    </tr>
    <tr>
      <td>DI4</td>
      <td>DI_12V_4/DI_4_GPIO33</td>
      <td>C54</td>
      <td>PM.07</td>
      <td>431</td>
    </tr>
    <tr>
      <td rowSpan={4}>输出</td>
      <td>DO1</td>
      <td>DO_40V_1/DI_1_GPIO</td>
      <td>E59</td>
      <td>PAA.04</td>
      <td>320</td>
      <td rowSpan={4}>40V/每引脚40mA负载</td>
    </tr>
    <tr>
      <td>DO2</td>
      <td>DO_40V_2/DI_2_GPIO</td>
      <td>F59</td>
      <td>PAA.07</td>
      <td>323</td>
    </tr>
    <tr>
      <td>DO3</td>
      <td>DO_40V_3/DI_3_GPIO</td>
      <td>B62</td>
      <td>PBB.01</td>
      <td>325</td>
    </tr>
    <tr>
      <td>DO4</td>
      <td>DO_40V_4/DI_4_GPIO</td>
      <td>C61</td>
      <td>PBB.00</td>
      <td>324</td>
    </tr>
  </tbody>
</table>

:::note

- 12V 数字输入，接地信号需要连接到 **GND_DI**。

- 数字输出，最大耐受电压 40V，接地信号需要连接到 **GND_DO**。

- CAN 总线采用标准差分信号，接地信号需要连接到 **GND_ISO**。

:::

### DI 连接概述

我们可以按照下图进行 DI 连接。最好在 DI 线路上串联一个电阻。这里我们测试时在 DI1 引脚上连接了一个 4.7kΩ 电阻。

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_di.png"/>
</div>

### DI 使用说明

我们需要在 DI 线路上输入 12V 电压才能被检测为输入。

**步骤1.** 按照上图所示连接到 DI1 引脚并输入 12V。

**步骤2.** 按如下方式打开 DI1 的 GPIO：

```bash
sudo su 
cd /sys/class/gpio
echo 444 > export 
cd PP.04
```

:::note
我们可以参考 DI/DO 引脚分配表来查找 GPIO 编号和 BGA 编号。在上面的示例中，对于 DI1 引脚，GPIO 编号是 444，BGA 编号是 PP.04。
:::

**步骤3.** 执行以下命令检查状态：

```bash
cat value
```

如果输出为0，表示有12V输入。如果输出为1，表示没有输入电压。

### DO连接概述

我们可以按照下图进行DO连接。最好在DO线路中串联一个电阻。这里我们使用4.7kΩ电阻进行了测试。

<div align="center">
  <img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_do.png"/>
</div>

### DO使用说明

这里我们需要按照上图所示连接一个负载。测试的最简单方法是连接一个万用表（如果有的话），或者连接一个最大电压要求低于40V的负载。

**步骤1.** 按照上图所示连接DO1引脚，输入最大40V电压。

**步骤2.** 按如下方式打开D01的GPIO：

```bash
sudo su 
cd /sys/class/gpio
echo 320 > export 
cd PAA.04
echo out > direction
```
**步骤3.** 执行以下操作以打开引脚：

```bash
echo 1 > value
```

如果负载被打开或万用表输出您输入的电压，则测试其功能正常。

### CAN

J501载板具有两个CAN接口，支持5Mbps的CAN FD（控制器局域网灵活数据速率）协议。CAN接口使用电容隔离，提供出色的EMI保护，确保在工业和自动化应用中的可靠通信。默认安装了120Ω的终端电阻，您可以使用GPIO来切换此电阻的开关状态。

:::note
CAN接口使用隔离电源，这意味着连接到CAN接口的外部设备的地信号应连接到**GND_ISO**引脚。
:::

### 与USB转CAN适配器的连接概述

要测试和与CAN总线接口，请将USB转CAN适配器连接到板上的CAN连接器，如下所示：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/dido_can.png"/>
</div>

这里我们使用了我们商城中提供的[USB转CAN分析仪适配器](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)和USB电缆。

### 与USB转CAN适配器的使用说明

**步骤1.** 从制造商网站下载您使用的USB转CAN适配器的驱动程序并安装。在我们的情况下，根据我们使用的适配器，驱动程序可以在[这里](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)找到。

**步骤2.** 一些适配器还为PC提供必要的软件，以便与CAN设备通信。在我们的情况下，根据我们使用的适配器，我们已经下载并安装了软件，可以在[这里](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)找到。

**步骤3.** 初始化Jetson的CAN接口。

在Jetson中创建一个名为**`can_init.sh`**的新文件，并写入以下内容：

```bash
#!/bin/bash

sudo gpioset gpiochip2 9=0 
sudo gpioset gpiochip2 8=0

sudo busybox devmem 0x0c303018 w 0xc458
sudo busybox devmem 0x0c303010 w 0xc400
sudo busybox devmem 0x0c303008 w 0xc458
sudo busybox devmem 0x0c303000 w 0xc400

sudo modprobe can
sudo modprobe can_raw
sudo modprobe mttcan

sudo ip link set can0 down
sudo ip link set can1 down

sudo ip link set can0 type can bitrate 125000
sudo ip link set can1 type can bitrate 125000
sudo ip link set can0 up
sudo ip link set can1 up

```

然后，在 Jetson 终端窗口中运行我们刚刚创建的文件：

```bash
sudo apt-get install gpiod
cd <path to can_init.sh>
sudo chmod +x can_init.sh
./can_init.sh
```

**步骤4.** 在终端中输入 ifconfig，您将看到 CAN 接口已启用。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/can.png"/>
</div>

**步骤5.** 打开您之前安装的 CAN 软件。在这种情况下，我们将根据所使用的 CAN 适配器打开相应的软件。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/>
</div>

**步骤6.** 将 USB 转 CAN 适配器连接到 PC，并通过在 Windows 搜索栏中搜索来打开**设备管理器**。现在您将在**端口 (COM 和 LPT)** 下看到已连接的适配器。记下此处列出的串行端口。根据下图，串行端口是 **COM9**。

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/>
</div>

**步骤7.** 打开 CAN 软件，点击 **COM** 部分旁边的**刷新**，点击下拉菜单并根据连接的适配器选择串行端口。保持 **COM bps** 为默认值，然后点击**打开**。

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/>
</div>

**步骤8.** 保持**模式**和 **CAN bps** 为默认值，将**类型**更改为**标准帧**，然后点击**设置并启动**。

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/>
</div>

**步骤9.** 在 reComputer Industrial 上，执行以下命令向 PC 发送 CAN 信号：

```sh
cansend can0 123#abcdabcd
```

现在您将看到软件接收到的上述信号，如下所示

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/>
</div>

**步骤10.** 在reComputer Industrial上，执行以下命令等待接收来自PC的CAN信号：

```sh
candump can0 &
```

**步骤11.** 在CAN软件上，点击 **发送单帧**：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/>
</div>

现在您将看到reComputer Industrial接收到的信息如下：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/>
</div>

:::info
我们也可以参考[这里](https://wiki.seeedstudio.com/cn/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage/#connection-overview-with-reterminal-dm)来建立J501载板与reTerminal DM之间通过CAN的通信。
:::

## USB

reServer J501载板总共有5个USB端口：3个USB 3.1 Type-A端口，1个USB 3.1 Type-C端口，以及1个用于调试的USB 2.0 Type-C端口。

### 使用说明

我们可以在Jetson终端中输入`watch -n 1 lsusb -tv`来探测USB端口。一旦连接USB设备，该端口的详细信息将显示在这里。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

此外，您可以参考[M.2 Key M](#m2-key-m)来测试USB存储设备的读写速度。

:::note
请注意，在测试之前，使用`cd`命令导航到USB存储设备挂载的文件夹。
:::

## RTC

J501载板具有RTC接口，即使在系统断电时也能提供准确的计时。

### 连接方式

J501载板配备了2种不同的RTC电池连接方式。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="RTC socket" label="RTC插座">

将3V CR1220纽扣电池连接到板上的RTC插座，如下所示。确保电池的**正极（+）**端朝上。

<div align="center">
  <img width ="220" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/11.jpg"/>
</div>

</TabItem>

<TabItem value="JST socket" label="JST插座">

将带有JST连接器的3V CR2302纽扣电池连接到板上的**2针1.25mm** JST插座，如下所示

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/12.jpg"/>
</div>

</TabItem>
</Tabs>

### 使用说明

**步骤1.** 如上所述连接RTC电池。

**步骤2.** 打开J501。

**步骤3.** 在Ubuntu桌面上，点击右上角的下拉菜单，导航到`设置 > 日期和时间`，通过以太网线连接到网络并选择**自动日期和时间**来自动获取日期/时间。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/>
</div>

:::note
如果您没有通过以太网连接到互联网，您可以在这里手动设置日期/时间。
:::

**步骤4.** 打开终端窗口，执行以下命令检查硬件时钟时间：

```bash
sudo hwclock
```

您将看到类似下面的输出，这不是正确的日期/时间：

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/>
</div>

**步骤5.** 通过输入以下命令将硬件时钟时间更改为当前系统时钟时间：

```bash
sudo hwclock --systohc
```

**步骤6.** 移除任何连接的以太网电缆，确保它不会从互联网获取时间，然后重启开发板：

```bash
sudo reboot
```

**步骤7.** 检查硬件时钟时间，以验证即使设备断电后日期/时间仍保持不变。

现在我们将创建一个脚本，在每次启动时始终从硬件时钟同步系统时钟。

**步骤8.** 使用您偏好的任何文本编辑器创建一个新的shell脚本。这里我们使用 **vi** 文本编辑器

```bash
sudo vi /usr/bin/hwtosys.sh 
```

**步骤9.** 按下 **i** 进入**插入模式**，复制并粘贴以下内容到文件中：

```bash
#!/bin/bash

sudo hwclock --hctosys
```
**步骤10.** 使脚本可执行。

```bash
sudo chmod +x /usr/bin/hwtosys.sh 
```

**步骤11.** 创建一个 systemd 文件:

```bash
sudo vim /lib/systemd/system/hwtosys.service 
```
**步骤12.** 在文件内添加以下内容：

```bash
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

**步骤13.** 重新加载 systemctl daemon:

```bash
sudo systemctl daemon-reload 
```

**步骤14.** 启用新创建的服务在系统启动时自动启动，并立即启动该服务：

```bash
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

**步骤15.** 验证脚本作为 systemd 服务正在运行：

```bash
sudo systemctl status hwtosys.service
```

**步骤16** 重启开发板，您将看到系统时钟现在与硬件时钟同步。

## 风扇

J501 开发板的板载风扇接口由 nvfancontrol 守护进程管理，该进程根据 Jetson 模块的运行状态自适应调节风扇转速。我们可以通过其配置文件 `/etc/nvfancontrol.conf` 来配置守护进程的工作模式。

:::note
更多信息，请查看[这里](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)。
:::

此外，我们可以使用 jtop 工具手动设置风扇转速。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>

## HDMI

J501 配备了一个 HDMI 2.1 Type A 端口，支持 7680x4320 分辨率。这允许超高清视频输出。

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
