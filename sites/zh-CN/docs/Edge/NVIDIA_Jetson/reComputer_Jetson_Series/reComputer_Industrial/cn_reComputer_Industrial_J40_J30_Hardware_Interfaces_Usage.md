---
description: reComputer Industrial J30 系列和 J40 系列的硬件和接口使用说明
title: reComputer Industrial J40, J30 硬件和接口使用说明
tags:
  - reComputer Industrial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Industrial_J40_J30_Hardware_Interfaces_Usage
last_update:
  date: 05/16/2023
  author: Lakshantha
---

本 wiki 介绍了 reComputer Industrial J4012、J4011、J3011、J3010 上各种不同的硬件和接口，以及如何使用它们来扩展您的项目想法。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/2.png"/></div>

## CSI 摄像头

reComputer Industrial 配备了 **2 个 2 通道 15 针 MIPI CSI 摄像头连接器**，支持以下摄像头：

- IMX219 摄像头

  - [树莓派相机 V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
  - [IMX219-77 8MP 相机，77° FOV](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
  - [IMX219 M12/CS 安装 CMOS 相机模块](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
  - [IMX219-83 8MP 3D 立体相机模块](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
  - [IMX219-77IR 8MP IR 夜视相机，77° FOV](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
  - [IMX219 M12/CS 安装 CMOS 相机模块](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

- IMX477 摄像头

  - [树莓派高质量相机](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
  - [树莓派 HQ 相机 - M12 接口](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
  - [树莓派高质量相机](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

<!-- - [IMX219-160IR 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html) -->
<!-- - [IMX219-130 8MP Camera with 130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html) -->
<!-- - [IMX219-160 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
- [IMX219-200 8MP Camera with 200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html) -->

### 连接概述

这里的 2 个 CSI 摄像头连接器标记为 **CAM0 和 CAM1**。您可以将一个摄像头连接到 2 个连接器中的任意一个，或者同时将 2 个摄像头连接到两个连接器上。

**步骤 1：** 轻轻拉出 CSI 连接器上的黑色锁扣

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/5.png"/></div>

**步骤 2：** 将 15 针排线插入连接器，确保金手指朝下

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/6.png"/></div>

**步骤 3：** 推入黑色锁扣以将排线锁定到位

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/10.png"/></div>

### 使用方法

首先，您需要配置开发板以加载您将使用的特定摄像头的相应驱动程序。为此，JetPack 系统有一个内置工具来支持 IMX219 和 IMX477 摄像头。

**步骤 1：** 打开终端并执行以下命令

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

**步骤 2：** 选择 **Configure Jetson Nano CSI Connector**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/119.jpg"/></div>

**步骤 3：** 选择 **Configure for compatible hardware**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/120.jpg"/></div>

**步骤 4：** 选择您想要使用的摄像头

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/121.jpg"/></div>

**步骤 5：** 选择 **Save pin changes**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/122.jpg"/></div>

**步骤 6：** 选择 **Save and reboot to reconfigure pins**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/123.jpg"/></div>

**步骤 7：** 在键盘上按任意键，设备将重启并应用摄像头配置

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/124.jpg"/></div>

您可以通过 2 种不同的方法使用 CSI 摄像头。根据摄像头连接器按照以下命令操作。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Method 1">

对于 CAM0 端口

```sh
nvgstcapture-1.0 sensor-id=0 
```

For CAM1 port

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::note
如果您想进一步更改相机设置，可以输入 **"nvgstcapture-1.0 --help"** 来访问所有可用的可配置选项
:::

</TabItem>

<TabItem value="Method 2" label="Method 2">

对于 CAM0 端口

```bash
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

For CAM1 port

```bash
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::note
如果您想进一步更改相机设置，可以更新参数，如 **width、height、framerate、format** 等。
:::

</TabItem>
</Tabs>

## RTC

reComputer Industrial 配备了 2 种不同的方式来连接 RTC 电池

### 连接概述

- 方法 1：

将 **3V CR1220 纽扣电池** 连接到板上的 RTC 插座，如下所示。确保电池的 **正极 (+)** 端朝上

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/11.jpg"/></div>

- 方法 2：

将 **带 JST 连接器的 3V CR2302 纽扣电池** 连接到板上的 2 针 1.25mm JST 插座，如下所示

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/12.jpg"/></div>

### 使用方法

:::danger
请注意，如果您的 reComputer 设备已经更新到 JetPack 6 或更高版本，RTC 将正常工作，无需任何额外配置。如果您使用的是 JetPack 5，您需要参考以下内容来配置时钟同步服务。
:::

**步骤 1：** 按照上述方法连接 RTC 电池

**步骤 2：** 打开 reComputer Industrial

**步骤 3：** 在 Ubuntu 桌面上，点击右上角的下拉菜单，导航到 `Settings > Date & Time`，通过以太网电缆连接到网络，并选择 **Automatic Date & Time** 以自动获取日期/时间

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
如果您没有通过以太网连接到互联网，可以在此处手动设置日期/时间
:::

**步骤 4：** 打开终端窗口，执行以下命令检查硬件时钟时间

```sh
sudo hwclock
```

您将看到类似下面的输出，这不是正确的日期/时间

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

**步骤 5：** 通过输入以下命令将硬件时钟时间更改为当前系统时钟时间

```sh
sudo hwclock --systohc
```

**步骤 6：** 移除任何连接的以太网电缆，确保它不会从互联网获取时间，然后重启开发板

```sh
sudo reboot
```

**步骤 7：** 检查硬件时钟时间，以验证即使设备断电后日期/时间仍保持不变

现在我们将创建一个脚本，在每次启动时始终从硬件时钟同步系统时钟。

**步骤 8：** 使用您偏好的任何文本编辑器创建一个新的 shell 脚本。这里我们使用 **vi** 文本编辑器

```sh
sudo vi /usr/bin/hwtosys.sh 
```

**步骤 9:** 按下 **i** 进入**插入模式**，复制并粘贴以下内容到文件中

```sh
#!/bin/bash

sudo hwclock --hctosys
```

**步骤 10:** 使脚本可执行

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

**步骤 11：** 创建一个 systemd 文件

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

**步骤 12:** 在文件内添加以下内容

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

**步骤 13：** 重新加载 systemctl 守护进程

```sh
sudo systemctl daemon-reload 
```

**步骤 14:** 启用新创建的服务在系统启动时自动启动，并启动该服务

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

**步骤 15:** 验证脚本作为 systemd 服务正在运行

```sh
sudo systemctl status hwtosys.service
```

**步骤 16：** 重启开发板，您将看到系统时钟现在与硬件时钟同步

## M.2 Key M

开箱即用，reComputer Industrial 包含一个连接到 M.2 Key M 插槽的 128GB SSD，预装了 JetPack 系统。

### 连接概述

如果您想要移除包含的 SSD 并安装新的 SSD，可以按照以下步骤操作。这里我们只推荐使用 Seeed 的 [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html) 和 [512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) 存储容量的 SSD，因为我们只测试过这些 SSD。此外，此接口支持 PCIe Gen4.0 SSD。

- **步骤 1：** 移除预装的 SSD 螺丝

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/15.png"/></div>

- **步骤 2：** 通过从 SSD 连接器滑出来移除 SSD

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/16.png"/></div>

- **步骤 3：** 插入新的 SSD 并重新拧紧螺丝

### 使用方法

我们将解释如何对连接的 SSD 进行简单的基准测试

- **步骤 1：** 通过执行以下命令检查写入速度

```sh
sudo dd if=/dev/zero of=/home/nvidia/test bs=1M count=512 conv=fdatasync
```

- **步骤 2：** 通过执行以下命令检查读取速度。确保在执行上述写入速度命令后再执行此命令。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/nvidia/test of=/dev/null bs=1M count=512
```

## mini PCIe

reComputer Industrial 配备了一个 mini PCIe 连接器，支持 4G 和 LoRa 模块。但是，您一次只能连接 4G 模块或 LoRa 模块中的一个。

### 4G 模块连接概述

目前该板支持 EC25EUXGA 和 EC20CEHCLG 模块。

- **步骤 1：** 如果板子已经开机，请先关闭电源

- **步骤 2：** 移除附带的支撑柱。该支撑柱仅在使用 M.2 Key B 接口时需要

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/110.jpg"/></div>

- **步骤 3：** 将 4G 模块滑入 mini PCIe 插槽，使用预装的螺丝将其固定到 2 个孔中以固定 4G 模块

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/17.png"/></div>

- **步骤 4：** 将天线连接到标有 **MAIN** 的天线连接器。这里您需要使用 IPEX 连接器

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/18.png"/></div>

- **步骤 5：** 将支持 4G 的 nano SIM 卡插入板上的 SIM 卡插槽，确保 SIM 卡的金色表面朝下。这里要将卡完全插入，使其撞击内部弹簧后弹回并锁定到位。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
如果您想要取出 SIM 卡，请将卡推入以撞击内部弹簧，这样 SIM 卡就会从插槽中弹出
:::

- **步骤 6：** 在 **J8 (Control and UART) Header** 上的 **SIM_MUX_SEL** 和 **GND** 引脚之间添加跳线

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/20.png"/></div>

- **步骤 6：** 开启板子电源

### 4G 模块使用 - 测试拨号

使用 EC25 模块时，模块会自动启动并准备使用。但是，使用 EC20 模块时，您需要重置模块才能使其工作

**步骤 1：** 如果您使用的是 EC25 模块，可以跳过此步骤。但如果您使用的是 EC20 模块，请输入以下命令来访问 GPIO309 引脚，该引脚负责重置 4G 模块。

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 1 > value
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo gpioset --mode=wait gpiochip2 9=1
```

</TabItem>
</Tabs>

对于 EC25 模块，LED2 将在板子启动后立即亮起绿灯。对于 EC20 模块，LED2 将在按照上述说明重置模块后亮起绿灯

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/118.jpg"/></div>

**步骤 2：** 安装 minicom

```sh
sudo apt update
sudo apt install minicom -y
```

**步骤 3：** 进入已连接的 4G 模块的串口控制台，这样我们就可以输入 AT 命令并与 4G 模块进行交互

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**步骤 4：** 按 **Ctrl+A**，然后按 **E** 开启本地回显

**步骤 5：** 输入命令 **"AT"** 并按回车键。如果看到响应为 "OK"，则 4G 模块工作正常

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

**步骤 6：** 输入命令 **"ATI"** 检查模块信息

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

**步骤 7：** 要测试模块，输入以下命令拨打另一个电话号码

```sh
ATD<phone_number>;
```

您将看到以下输出

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

如果输入的电话号码能够接收到呼叫，则模块工作正常

### 4G 模块使用 - 连接到互联网

#### EC25 模块

如果您使用的是 EC25 模块，请按照以下步骤操作

- **步骤 1：** 按照上述说明打开 4G 模块的串口控制台（4G 模块使用 - 测试拨号部分）后，执行以下命令连接到互联网。这里请将 **YOUR_APN** 替换为您的网络运营商的 APN

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/89.jpg"/></div>

连接成功后，应该输出 **OK**，如上图所示

- **步骤 2：** 通过执行以下命令重启 4G 模块

```sh
AT+CFUN=1,1
```

现在您将在串口终端上失去与4G模块的连接

- **步骤 3：** 按 **CTRL + A** 然后按 **Q** 关闭 **minicom**

- **步骤 4：** 输入 **ifconfig**，您将在 **usb0** 接口上看到一个IP地址

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/93.png"/></div>

- **步骤 5：** 您可以尝试ping一个网站来检查是否有互联网连接，如下所示

```sh
ping -I usb0 www.bing.com -c 5
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/94.png"/></div>

#### EC20 模块

如果您使用的是 EC20 模块，请按照以下步骤操作

- **步骤 1：** 如果您已经按照前面章节（4G 模块使用 - 测试拨号章节）中针对 EC20 模块的说明重置了 4G 模块，您可以跳过此步骤。但是，如果您尚未完成此操作，请现在执行

- **步骤 2：** 进入 4G 模块的串口控制台，输入以下命令设置为 ECM 模式

```sh
AT+QCFG="usbnet",1
```

- **步骤 3：** 重置 4G 模块

- **步骤 4：** 在 4G 模块控制台内，执行以下命令连接到互联网。这里将 **YOUR_APN** 替换为您网络提供商的 APN

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

- **步骤 6：** 输入 **ifconfig**，您将在 **usb1** 接口上看到一个 IP 地址

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/90.jpg"/></div>

- **步骤 7：** 您可以尝试 ping 一个 URL 来检查是否有互联网连接，如下所示

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/92.png"/></div>

### LoRa 模块连接概述

目前该板支持 WM1302 SPI 模块。您可以使用我们商城上提供的[美国版本](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html)或[欧洲版本](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)。

- **步骤 1：** 如果板子已经开机，请先关机

- **步骤 2：** 将 LoRa 模块滑入 mini PCIe 插槽，使用预装的螺丝将其固定到 2 个孔上，以确保 4G 模块牢固就位

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/25.png"/></div>

- **步骤 3：** 将天线连接到天线连接器。这里您需要使用 IPEX 连接器

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/26.png"/></div>

:::note
确保在 **J8（控制和 UART）接头**上的 **SIM_MUX_SEL** 和 **GND** 引脚之间没有跳线。此跳线仅在使用 4G 模块时需要
:::

- **步骤 4：** 给板子上电

### LoRa 模块使用 - 测试 LoRa RF

当 LoRa 模块连接后，您将看到模块上的绿色和蓝色 LED 灯亮起

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/27.png"/></div>

- **步骤 1：** 输入以下命令检查系统是否检测到 LoRa 模块

```sh
i2cdetect -r -y 7
```

如果您看到以下输出，说明模块已被系统检测到

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **步骤 2：** 输入以下命令来编译和构建 LoRa 信号发送工具

:::danger
请注意，此 **LoRa 信号发送工具** 仅适用于 Jetpack5。如果您想在 Jetpack6 中测试 LoRa 模块功能，请参考 [原理图](https://github.com/Seeed-Studio/OSHW-Jetson-Series/blob/main/reComputer%20Jetson%20carrier%20board/reComputer%20Industrial%20J201/Schematic/reComputer%20Industrial%20J201_V1.2.pdf) 和 [引脚复用配置](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template) 来确定引脚名称，并使用 `gpioset` 命令设置引脚状态。
:::

```bash
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

如果您看到以下结果并且 LoRa 模块上的 LED 变为红色，这意味着模块正在成功传输射频信号

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/28.png"/></div>

要停止传输，您可以在键盘上按 **CTRL + C**。

### LoRa 模块使用 - 连接到 TTN

现在我们将连接到 TTN（The Things Network）并将 reComputer Industrial 用作 TTN LoRaWAN 网关

- **步骤 1：** 输入以下命令使数据包转发器准备就绪

```sh
cd ..
cd packet_forwarder
cp ../tools/reset_lgw.sh .
```

- **步骤 2:** 根据您正在使用的LoRa模块运行以下内容。这里我们测试了SPI US915版本

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

然而，不同其他模块的命令如下

```sh
# USB 915
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB

# SPI EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# USB EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

运行上述命令后，您将看到以下输出，最后一行显示**集中器 EUI** 信息。请保留此信息，因为我们稍后在设置网关与 TTN 连接时会用到它

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/79.jpg"/></div>

- **步骤 3：** 访问 [此 URL](https://console.cloud.thethings.network) 进入 TTN 控制台并选择您所在的区域

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/80.png"/></div>

- **步骤 4：** 如果您已有账户请登录，如果没有账户请注册新账户

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/81.png"/></div>

- **步骤 5：** 点击 **Go to gateways**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/82.png"/></div>

- **步骤 6：** 点击 **+ Register gateway**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/83.png"/></div>

- **步骤 7：** 在 **Gateway EUI** 部分输入您之前获得的 **Concentrator EUI**，然后点击 **Confirm**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/84.jpg"/></div>

- **步骤 8：** 根据您使用的 LoRa 模块输入 **Frequency plan**。这里我们使用的是 US915 版本的模块，因此选择了 **United Stated 902-928 MHz, FSB 2 (used by TTN)**。然后点击 **Register gateway**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/85.jpg"/></div>

:::note
**Gateway ID** 已为您自动填写。但是，您可以将其更改为任何您喜欢的名称。**Gateway name** 不是必填项。但是，您也可以根据自己的喜好填写
:::

- **步骤 9：** 记下网关主页上的 **Gateway Server Address**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/86.jpg"/></div>

- **步骤 9：** 在 reTerminal Industrial 上，编辑我们与 **lora_pkt_fwd** 命令一起使用的 **global_conf_json** 文件。这里您需要按如下方式更改 **gateway_ID**、**server_address**、**serv_port_up** 和 **serv_port_down** 选项

  - gateway_ID: 设备的集中器 EUI
  - server_address: 来自 TTN 的网关服务器地址
  - serv_port_up: 1700
  - serv_port_down: 1700

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/87.png"/></div>

- **步骤 10：** 重新运行数据包转发器

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

如果您看到以下输出，这意味着设备已成功连接到 TTN

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/88.jpg"/></div>

## M.2 Key B

reComputer Industrial 配备了一个 M.2 Key B 连接器，支持 4G 和 5G 模块。目前我们已经测试了 **SIM8202G-M2 5G 模块**

### 5G 模块连接概述

- **步骤 1：** 如果板子已经开机，请先关机

- **步骤 2：** 确保支撑柱已就位，然后拆下支撑柱上的顶部螺丝

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/111.jpg"/></div>

- **步骤 2：** 将 5G 模块滑入 M.2 Key B 插槽，并拧入支撑柱螺丝以固定 5G 模块（关于支撑柱的说明）

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/112.jpg"/></div>

- **步骤 3：** 将 4 根天线连接到模块上的天线连接器。这里您需要使用 IPEX 4 连接器

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/113.jpg"/></div>

- **步骤 4：** 将支持 5G 的 nano SIM 卡插入板子上的 SIM 卡插槽，确保 SIM 卡的金属表面朝下。这里要将卡片完全插入，使其在碰到内部弹簧后弹回并锁定到位。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
如果您想要取出 SIM 卡，请将卡片推入以碰到内部弹簧，这样 SIM 卡就会从插槽中弹出
:::

- **步骤 5：** 给板子上电

### 5G 模块使用 - 测试拨号

使用 SIM8202G-M2 5G 模块时，模块不会自动启动。因此我们首先需要切换几个 GPIO 来使其启动

**步骤 1：** 输入以下命令来启动 5G 模块

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 0 > value

cd..
echo 341 > export 
cd PEE.02
echo out > direction
echo 1 > value

cd..
echo 330 > export 
cd PCC.02
echo out > direction
echo 0 > value
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo gpioset --mode=wait gpiochip2 9=0
sudo gpioset --mode=wait gpiochip1 25=1
sudo gpioset --mode=wait gpiochip1 14=0
```

:::note
请打开多个终端来运行这些命令，并确保每个终端窗口保持活动状态。
:::

</TabItem>
</Tabs>

一旦执行上述操作，LED2 将亮起绿色，如下所示

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/117.jpg"/></div>

**步骤 2：** 安装 minicom

```sh
sudo apt update
sudo apt install minicom -y
```

**步骤 3：** 进入已连接的 5G 模块的串行控制台，这样我们就可以输入 AT 命令并与 5G 模块进行交互

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**步骤 4：** 输入命令 **"AT"** 并按回车键。如果您看到响应为 "OK"，则 5G 模块工作正常

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

**步骤 5：** 输入命令 **"ATI"** 来检查模块信息

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>

**步骤 6：** 要测试模块，请输入以下命令来拨打另一个电话号码

```sh
ATD<phone_number>;
```

您将看到以下输出

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

## DI/ DO

reComputer Industrial 支持 4 个数字输入和 4 个数字输出通道，所有通道都经过光学隔离，可有效保护主板免受电压尖峰或其他电气干扰的影响。在同一个连接器上还有一个 CAN 接口，我们将在本 wiki 的后面部分讨论。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/37.png"/></div>

### DI/ DO 引脚分配表

<table>
  <thead>
    <tr>
      <th>类型</th>
      <th>标签名称</th>
      <th>原理图信号</th>
      <th>模块引脚号</th>
      <th>BGA 编号</th>
      <th>GPIO 编号</th>
      <th>电压/电流限制</th>
      <th>备注</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>输入</td>
      <td>DI1</td>
      <td>DI_1_GPIO01</td>
      <td>118</td>
      <td>PQ.05</td>
      <td>453</td>
      <td rowSpan={4}>12V/ 总电流 20mA</td>
      <td rowSpan={4}>12V 数字输入，接地信号需要<br />连接到 GND_DI（引脚2/4/6）</td>
    </tr>
    <tr>
      <td>DI2</td>
      <td>DI_2_GPIO09</td>
      <td>211</td>
      <td>PAC.06</td>
      <td>492</td>
    </tr>
    <tr>
      <td>DI3</td>
      <td>DI_3_GPIO11</td>
      <td>216</td>
      <td>PQ.06</td>
      <td>454</td>
    </tr>
    <tr>
      <td>DI4</td>
      <td>DI_4_GPIO13</td>
      <td>228</td>
      <td>PH.00</td>
      <td>391</td>
    </tr>
    <tr>
      <td rowSpan={4}>输出</td>
      <td>DO1</td>
      <td>DO_1_GPIO</td>
      <td>193</td>
      <td>PI.00</td>
      <td>399</td>
      <td rowSpan={4}>每个引脚 40V/40mA 负载</td>
      <td rowSpan={4}>数字输出，最大耐受<br />电压 40V，接地信号需要<br />连接到 GND_DO（引脚8/10）</td>
    </tr>
    <tr>
      <td>DO2</td>
      <td>DO_2_GPIO</td>
      <td>195</td>
      <td>PI.01</td>
      <td>400</td>
    </tr>
    <tr>
      <td>DO3</td>
      <td>DO_3_GPIO</td>
      <td>197</td>
      <td>PI.02</td>
      <td>401</td>
    </tr>
    <tr>
      <td>DO4</td>
      <td>DO_4_GPIO</td>
      <td>199</td>
      <td>PH.07</td>
      <td>398</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>CH</td>
      <td colSpan={5} rowSpan={2}>/</td>
      <td rowSpan={2}>具有标准差分信号的 CAN 总线，<br />接地信号需要连接到 GND_ISO（引脚 12）</td>
    </tr>
    <tr>
      <td />
      <td>CL</td>
    </tr>
    <tr>
      <td>接地</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>12V 数字输入的参考接地信号，<br />也是 DI 的回路路径</td>
    </tr>
    <tr>
      <td />
      <td>GND_DO</td>
      <td>数字输出的参考接地信号，也是 DO 的回路路径</td>
    </tr>
    <tr>
      <td />
      <td>CG</td>
      <td>CAN 的参考接地信号</td>
    </tr>
  </tbody>
</table>

:::danger
请注意，上表中的引脚编号仅适用于 Jetpack5。我们可以通过以下方式获取 Jetpack6 的引脚编号：

1. 使用 `gpioinfo` 命令获取 GPIO 表。
2. 检查 **BGA 编号** 以找到 Jetpack6 上对应的引脚编号。

:::

### DI 连接概述

您可以按照下图进行 DI 连接。最好在 DI 线路中串联一个电阻。这里我们已经测试了将 4.7kΩ 电阻连接到 DI1 引脚。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### DI 使用方法

您需要在 DI 线路上输入 12V 电压才能被检测为输入

**步骤 1：** 按照上图所示连接到 **DI1 引脚** 并输入 **12V**

**步骤 2：** 打开并检查 DI1 的状态，如下所示：

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo su 
cd /sys/class/gpio
echo 453 > export 
cd PQ.05

cat value
```

:::note
您可以参考 **DI/ DO 引脚分配表** 来查找 GPIO 编号和 BGA 编号。在上面的示例中，对于 DI1 引脚，GPIO 编号是 453，BGA 编号是 PQ.05
:::

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo gpioget gpiochip0 105
```

</TabItem>
</Tabs>

如果输出为0，表示有12V输入。如果输出为1，表示没有输入电压。

### DO连接概述

您可以按照下图进行DO连接。最好在DO线路中串联一个电阻。这里我们使用4.7kΩ电阻进行了测试

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### DO使用方法

这里您需要按照上图连接一个负载。测试的最简单方法是连接一个万用表（如果您有的话），或者连接一个需要最大电压小于40V的负载

**步骤1：** 按照上图所示连接到**DO1引脚**，输入**最大40V**

**步骤2：** 打开并启用D01的GPIO，如下所示：

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```sh
sudo su 
cd /sys/class/gpio
echo 399 > export 
cd PI.00
echo out > direction

echo 1 > value
```

:::note
您可以参考 **DI/ DO 引脚分配表** 来查找 GPIO 编号和 BGA 编号。在上面的示例中，对于 DO1 引脚，GPIO 编号是 399，BGA 编号是 PI.00
:::

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo gpioset --mode=wait gpiochip0 51=1
```

</TabItem>
</Tabs>

如果负载被打开或万用表输出您输入的电压，则测试功能正常。

## CAN

reComputer Industrial 具有支持 CAN FD（控制器局域网灵活数据速率）协议的 CAN 接口，速率为 5Mbps。CAN 接口使用电容隔离进行隔离，提供出色的 EMI 保护，确保在工业和自动化应用中的可靠通信。默认安装了 120Ω 的终端电阻，您可以使用 GPIO 切换此电阻的开关状态。

注意：CAN 接口使用隔离电源，这意味着连接到 CAN 接口的外部设备的接地信号应连接到 CG 引脚

### 与 USB 转 CAN 适配器的连接概述

要测试和与 CAN 总线接口，请将 USB 转 CAN 适配器连接到板上的 CAN 连接器，如下所示

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

这里我们使用了我们商城中提供的 [USB 转 CAN 分析仪适配器（带 USB 线）](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)。

### 与 USB 转 CAN 适配器的使用

- **步骤 1：** 从制造商网站下载您使用的 USB 转 CAN 适配器的驱动程序并安装。在我们的情况下，根据我们使用的适配器，驱动程序可以在[这里](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)找到

- **步骤 2：** 一些适配器还为 PC 提供必要的软件，以便与 CAN 设备通信。在我们的情况下，根据我们使用的适配器，我们已经下载并安装了软件，可以在[这里](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)找到

- **步骤 3：** 在 reComputer Industrial 上打开终端窗口，执行以下命令来配置和启用 CAN 接口

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 4：** 在终端中输入 **ifconfig**，您将看到 CAN 接口已启用

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **步骤 5：** 打开您之前安装的 CAN 软件。在这种情况下，我们将根据所使用的 CAN 适配器打开相应的软件

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/></div>

- **步骤 6：** 将 USB 转 CAN 适配器连接到 PC，并通过在 Windows 搜索栏中搜索来打开**设备管理器**。现在您将在**端口 (COM 和 LPT)** 下看到已连接的适配器。记下此处列出的串行端口。根据下图，串行端口是 **COM9**

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/></div>

- **步骤 7：** 打开 CAN 软件，点击 **COM** 部分旁边的**刷新**，点击下拉菜单并根据连接的适配器选择串行端口。保持 **COM bps** 为默认值，然后点击**打开**

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/></div>

- **步骤 8：** 保持**模式**和 **CAN bps** 为默认值，将**类型**更改为**标准帧**，然后点击**设置并启动**

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/></div>

- **步骤 9：** 在 reComputer Industrial 上，执行以下命令向 PC 发送 CAN 信号

```sh
cansend can0 123#abcdabcd
```

现在您将看到软件接收到的上述信号，如下所示

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **步骤 10：** 在 reComputer Industrial 上，执行以下命令等待接收来自 PC 的 CAN 信号

```sh
candump can0 &
```

- **步骤 11：** 在 CAN 软件上，点击 **Send a single frame**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

现在您将看到 reComputer Industrial 接收到的数据，如下所示

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

### 与 reTerminal DM 的连接概述

如果您有 [reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html)，您可以直接与其通信，因为 reTerminal DM 也有 CAN 接口。

参考下图通过 CAN 连接 reComputer Industrial 和 reTerminal DM

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

### 与 reTerminal DM 的使用

- **步骤 1：** 在使用 reTerminal DM 之前，请访问[此 wiki](https://wiki.seeedstudio.com/cn/reterminal-dm) 来开始使用 reTerminal DM

- **步骤 2：** 在 reComputer Industrial 上打开终端窗口并执行以下命令来配置和启用 CAN 接口

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 3：** 在 reTerminal DM 上打开终端窗口，执行以下命令来配置和启用 CAN 接口

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 4：** 在 reTerminal DM 上打开终端窗口，执行以下命令来配置和启用 CAN 接口

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 5：** 如果您在两个设备上输入 **ifconfig**，您将看到 CAN 接口已启用

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **步骤 6：** 在 reTerminal DM 上，执行以下命令等待接收来自 reComputer Industrial 的 CAN 信号

```sh
candump can0 &
```

- **步骤 7：** 在 reComputer Industrial 上，执行以下命令向 reTerminal Industrial 发送 CAN 信号

```sh
cansend can0 123#abcdabcd
```

现在您将看到它被 reTerminal DM 接收，如下所示

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **步骤 8：** 重复**步骤 6 和步骤 7**，但交换设备。使用 reTerminal DM 发送 CAN 信号，使用 reComputer Industrial 接收它们

## RS232/ RS422/ RS485 接口

reComputer Industrial 有一个 DB9 连接器，支持 RS232、RS422 和 RS485 通信协议，板载有一个 DIP 开关面板，用于在不同接口选项之间切换

您可以看到 DIP 开关面板如下：

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/51.png"/></div>

:::note
使用 DIP 开关面板之前，请确保移除黄色塑料盖
:::

下表说明了基于 DIP 开关位置的不同模式

<table>
  <thead>
    <tr>
      <th />
      <th>MODE_0</th>
      <th>MODE_1</th>
      <th>MODE_2</th>
      <th>模式</th>
      <th>状态</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/52.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 全双工</td>
      <td>1T/1R RS-422</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/53.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>纯 RS-232</td>
      <td>3T/5R RS-232</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/54.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>RS-485 半双工</td>
      <td>1T/1R RS-485，TX ENABLE 低电平有效</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/55.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>RS-485 半双工</td>
      <td>1T/1R RS-485，TX ENABLE 高电平有效</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/56.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 全双工</td>
      <td>1T/1R RS-422 带终端电阻</td>
    </tr>
    <tr>
      <td rowSpan={3}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/57.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>0</td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>纯 RS-232</td>
      <td>1T/1R RS-232 与 RS485 共存</td>
    </tr>
    <tr>
      <td>应用程序无需总线</td>
    </tr>
    <tr>
      <td>开关 IC（特殊用途）。</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/58.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>0</td>
      <td rowSpan={2}>RS-485 半双工</td>
      <td>1T/1R RS-485 带终端电阻</td>
    </tr>
    <tr>
      <td>TX ENABLE 低电平有效</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/59.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td>低功耗</td>
      <td rowSpan={2}>所有 I/O 引脚均为高阻抗</td>
    </tr>
    <tr>
      <td>关断</td>
    </tr>
  </tbody>
</table>

:::note
开箱即用，交换机的默认模式将从工厂设置为 RS485，DIP开关为 010
:::

上表考虑了 DIP 开关面板的前三个开关。但是，第四个开关负责切换转换速率，这与数据速率直接相关

<table>
  <thead>
    <tr>
      <th />
      <th>状态</th>
      <th>注释</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/62.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>SLEW= Vcc<br />此 RS232/RS422/RS485 多协议收发器限制通信速率如下：<br />RS-232：最大数据速率为 1.5Mbps<br />RS-485/RS-422：最大数据速率为 10Mbps<br />实际最大数据速率取决于所使用的 Jetson SO M</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232：最大数据速率为 250Kbps<br />RS-485/RS-422：最大数据速率为 250kbps</td>
    </tr>
  </tbody>
</table>

这里我们将使用USB转RS232、RS485和RS422适配器来测试这些接口。因此在继续之前，您需要在PC上安装一个串口终端应用程序。这里我们推荐您安装**Putty**，它易于设置和使用。

- **步骤1：** 访问[此网站](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)并根据您的PC架构下载Putty

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/60.png"/></div>

这里我们根据所使用的PC选择了Putty，这是一台X86 Windows 64位机器

- **步骤2：** 打开下载的安装程序，按照提示安装应用程序

### 通用连接概述

您可以参考DB9连接器的引脚编号和表格来进行连接

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/61.png"/></div>

<table>
  <thead>
    <tr>
      <th>模式</th>
      <th>001/101</th>
      <th>000/100</th>
      <th>010/011/110</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>引脚</td>
      <td>RS232</td>
      <td>RS422</td>
      <td>RS485</td>
    </tr>
    <tr>
      <td>1</td>
      <td />
      <td>TXD-</td>
      <td>Data-</td>
    </tr>
    <tr>
      <td>2</td>
      <td>RXD</td>
      <td>TXD+</td>
      <td>Data+</td>
    </tr>
    <tr>
      <td>3</td>
      <td>TXD</td>
      <td>RXD+</td>
      <td />
    </tr>
    <tr>
      <td>4</td>
      <td />
      <td>RXD-</td>
      <td />
    </tr>
    <tr>
      <td>5</td>
      <td>GND</td>
      <td>GND</td>
      <td>GND</td>
    </tr>
    <tr>
      <td>6</td>
      <td />
      <td />
      <td />
    </tr>
    <tr>
      <td>7</td>
      <td>RTS</td>
      <td />
      <td />
    </tr>
    <tr>
      <td>8</td>
      <td>CTS</td>
      <td />
      <td />
    </tr>
    <tr>
      <td>9</td>
      <td />
      <td />
      <td />
    </tr>
  </tbody>
</table>

### RS232 连接概述

在这里，您可以使用 USB 转 RS232 适配器来测试接口。我们使用了 [UGREEN USB 转 RS232 适配器](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1) 进行测试。

**步骤 1：** 关闭设备

**步骤 2：** 这里我们有 2 个选项来设置 DIP 开关。可以选择 001 模式或 101 模式。每种模式的开关位置如下所示

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

**步骤 3：** 将 USB 转 RS232 适配器连接到 DB9 连接器。这里我们连接了上面提到的适配器

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/68.jpg"/></div>

**步骤 4：** 将另一端连接到 PC 上的一个 USB 端口

**步骤 5：** 打开设备

### RS232 使用方法

**步骤 1：** 您可能需要为正在使用的适配器安装驱动程序，或者 Windows 会自动为您安装驱动程序。在 Windows 搜索中输入 **Device Manager** 打开设备管理器，检查是否可以看到连接的适配器作为 COM 设备。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

**步骤 2：** 如果您看不到适配器，需要根据您使用的适配器安装驱动程序。您通常可以在制造商网站上找到这些驱动程序。对于我们使用的适配器，您可以访问[此页面](https://www.ugreen.com/pages/download)，搜索型号 **20201** 并相应下载驱动程序

**步骤 3：** 在 PC 上打开 Putty，选择 **Terminal** 部分并设置以下内容

- Local echo: Force on
- Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

**步骤 4：** 选择 **Session**，在 **Connection type** 下选择 **Serial**，根据您在 **Device Manager** 中看到的内容设置串口号，保持速度为默认值（9600）并点击 **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

**步骤 5：** 在 reTerminal Industrial 终端窗口中，输入以下内容从 reComputer 向 PC 发送信号

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reComputer Industrial" > /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo chmod 777 /dev/ttyTHS1
sudo echo "RS232 message from reComputer Industrial" > /dev/ttyTHS1
```

</TabItem>
</Tabs>

现在您将在 Putty 上看到显示的消息

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

**步骤 6：** 在 reTerminal Industrial 终端窗口中，输入以下命令等待接收来自 PC 的信号

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo cat /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo cat /dev/ttyTHS1
```

</TabItem>
</Tabs>

在 Putty 上，输入任何内容，按 **ENTER** 键，它将显示在 reComputer Industrial 终端窗口中

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### RS422 连接概述

这里您可以使用 USB 转 RS422 适配器来测试接口。我们使用了 [DTech USB 转 RS485 适配器](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) 进行测试。

**步骤 1：** 关闭设备

**步骤 2：** 这里我们有 2 个选项来设置 DIP 开关。可以选择 000 模式或 100 模式。每种模式的开关位置如下所示

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

**步骤 3：** 使用跳线将 USB 转 RS422 适配器连接到 DB9 连接器，如下所示。这里我们连接了上面提到的适配器

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

**步骤 4：** 将另一端连接到 PC 上的一个 USB 端口

**步骤 5：** 打开设备

### RS422 使用方法

**步骤 1：** 您可能需要为正在使用的适配器安装驱动程序，或者 Windows 会自动为您安装驱动程序。在 Windows 搜索中输入 **Device Manager** 打开设备管理器，检查是否可以看到连接的适配器作为 COM 设备。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

**步骤 2：** 如果您看不到适配器，需要根据您使用的适配器安装驱动程序。您通常可以在制造商网站上找到这些驱动程序。对于我们使用的适配器，您可以访问[此页面](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

**步骤 3：** 在 PC 上打开 Putty，选择 **Terminal** 部分并设置以下内容

- Local echo: Force on
- Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

**步骤 4：** 选择 **Session**，在 **Connection type** 下选择 **Serial**，根据您在 **Device Manager** 中看到的内容设置串口号，保持速度为默认值（9600）并点击 **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

**步骤 5：** 在 reTerminal Industrial 终端窗口中，输入以下内容从 reComputer 向 PC 发送信号

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo chmod 777 /dev/ttyTHS1
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS1
```

</TabItem>
</Tabs>

现在您将在 Putty 上看到此消息显示

**步骤 6：** 在 reTerminal Industrial 终端窗口中，输入以下命令等待接收来自 PC 的信号

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo cat /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo cat /dev/ttyTHS1
```

</TabItem>
</Tabs>

在 Putty 上，输入任何内容，按 **ENTER** 键，它将显示在 reComputer Industrial 终端窗口中

### RS485 连接概述

这里您可以使用 USB 转 RS422 适配器来测试接口。我们使用了 [DTech USB 转 RS485 适配器](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) 进行测试。

**步骤 1：** 关闭开发板

**步骤 2：** 这里我们有 3 个选项来设置 DIP 开关。可以是 010 模式、011 模式或 110 模式。每种模式的开关位置如下所示

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

**步骤 3：** 使用跳线将 USB 转 RS422 适配器连接到 DB9 连接器，如下所示。这里我们连接了上面提到的适配器

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

**步骤 4：** 将另一端连接到 PC 上的一个 USB 端口

**步骤 5：** 打开开发板

### RS485 使用方法

**步骤 1：** 您可能需要为正在使用的适配器安装驱动程序，或者 Windows 会自动为您安装驱动程序。在 Windows 搜索中输入 **Device Manager** 打开设备管理器，检查是否可以看到连接的适配器作为 COM 设备。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

**步骤 2：** 如果您看不到适配器，需要根据您使用的适配器安装驱动程序。您通常可以在制造商网站上找到这些驱动程序。对于我们使用的适配器，您可以访问[此页面](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

**步骤 3：** 在 PC 上打开 Putty，选择 **Terminal** 部分，设置如下：

- Local echo: Force on
- Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

**步骤 4：** 选择 **Session**，在 **Connection type** 下选择 **Serial**，根据您在 **Device Manager** 中看到的设置串口号，保持速度为默认值（9600），然后点击 **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

**步骤 5：** 在 reTerminal Industrial 终端窗口中，输入以下命令从 reComputer 向 PC 发送信号

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo su 
cd /sys/class/gpio 
echo 460 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reComputer Industrial" > /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo chmod 777 /dev/ttyTHS1
sudo gpioset gpiochip0 112=0
echo "RS485 message from reComputer Industrial" > /dev/ttyTHS1
```

</TabItem>
</Tabs>

现在您将在 Putty 上看到此消息显示

**步骤 6：** 在 reTerminal Industrial 终端窗口中，输入以下命令等待接收来自 PC 的信号

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

```bash
sudo su
cd /sys/class/gpio
echo 460 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

```bash
sudo chmod 777 /dev/ttyTHS1
sudo gpioset gpiochip0 112=1
cat /dev/ttyTHS1
```

</TabItem>
</Tabs>

在 Putty 上，输入任何内容，按 **ENTER** 键，它将显示在 reComputer Industrial 终端窗口中

## 千兆以太网连接器

reComputer Industrial 上有两个千兆以太网（10/100/1000M）连接器，它们的功能不同

- 最左边的连接器直接连接到 Jetson 模块，能够提供 PoE 功能，规格为 **PSE 802.3 af, 15W**。这意味着您可以将 PoE IP 摄像头或任何其他 PoE 设备连接到此端口，为连接的设备供电。
- 另一个连接器通过 PCIe 转以太网（LAN7430-I/Y9X）模块连接

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/36.png"/></div>

每个以太网端口上有 2 个 LED（绿色和黄色），指示以下状态

- 绿色 LED：仅在连接到 1000M 网络时点亮
- 黄色 LED：显示网络活动状态

## USB

reComputer Industrial 板载 3 个 USB3.2 连接器，具有以下特性：

- 在双层堆叠的 USB 连接器上，上下 USB 端口共享一个限流 IC，总供电能力为最大输出电流 2.1A（单个也可以是 2.1A）。如果超过 2.1A，将进入过流保护状态。
- 在双层堆叠 USB 连接器旁边的单个 USB 连接器上，总供电能力为最大输出电流 2.1A。如果超过 2.1A，将进入过流保护状态。
- Orin NX 模块配备 3 个 USB3.2，其中只有一个在 reComputer 中使用并转换为 3 路。（USB3.1 TYPE-A x2 - J4 和 USB3.1 TYPE-A x1 -J3）。
- 仅支持 USB Host，不支持 Device 模式
- 提供 5V 2.1A
- 支持热插拔

### 使用方法

我们将解释如何对连接的 USB 闪存驱动器进行简单的基准测试

- **步骤 1：** 通过执行以下命令检查写入速度

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **步骤 2：** 通过执行以下命令检查读取速度。确保在执行上述写入速度命令后再执行此命令。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

## 可配置LED

板子上有一个绿色LED，位置如下图所示。默认情况下，它作为显示设备正常运行的LED。但是，您也可以通过系统编程控制这个LED的开启和关闭

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/21.png"/></div>

### 使用方法

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

**步骤 1：** 在终端窗口中输入以下命令来访问绿色LED

```sh
sudo -i
cd /sys/class/gpio
echo 329 > export 
cd PCC.01
echo out > direction 
```

**步骤 2:** 打开 OFF LED

```sh
echo 0 > value 
```

**步骤 3:** 打开 ON LED

```sh
echo 1 > value 
```

如果你已经完成使用LED,你可以执行以下操作

```sh
cd ..
echo 329 > unexport
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

Turn OFF the LED:

```sh
sudo gpioset gpiochip1 13=0
```

打开LED：

```bash
sudo gpioset gpiochip1 13=1
```

</TabItem>
</Tabs>

## 监控系统性能

我们可以使用 **jetson stats** 应用程序来监控系统组件的温度并检查其他系统详细信息，例如

- 查看 CPU、GPU、RAM 使用率
- 更改电源模式
- 设置为最大时钟频率
- 检查 JetPack 信息

- **步骤 1：** 在 reComputer Industrial 终端窗口中，输入以下内容

```sh
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

- **步骤 2：** 重启开发板

```sh
sudo reboot
```

- **步骤 3:** 在终端中输入以下内容

```sh
jtop
```

现在 **jtop** 应用程序将按如下方式打开

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/30.png"/></div>

- **步骤 4：** 在这里您可以循环浏览应用程序的不同页面并探索所有功能！

## WiFi 和蓝牙

reComputer Industrial 开箱即用时不带有 WiFi 和蓝牙功能。但是 PCB 上有一个预留区域，可以将 WiFi/蓝牙模块焊接到板上。这里我们预留了空间来支持 **BL-M8723DU1** 模块。

### 连接概述

- **步骤 1：** 如果您想自己焊接 **BL-M8723DU1** 模块，您可以进行焊接。但我们不建议这样做，因为如果您在过程中损坏了板子，保修将失效。我们建议使用我们的专业服务来帮助您将此模块焊接到板上，您可以发送电子邮件至 order@seeed.cc 提出您的请求。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/31.jpg"/></div>

- **步骤 2：** 将两根天线连接到板上的两个天线连接器，用于 WiFi 和蓝牙。这里您需要使用 IPEX 连接器

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/32.png"/></div>

### 使用方法

- **步骤 1：** 打开板子，一旦设备启动进入 Ubuntu 桌面，点击右上角的下拉菜单，导航到 `Settings > Wi-Fi` 并切换标题栏上的按钮以启用 WiFi。之后选择一个 WiFi 网络，输入所需的密码并连接到它

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/33.png"/></div>

- **步骤 2：** 在同一窗口中，选择 **Bluetooth** 并切换标题栏上的按钮以启用蓝牙。之后选择一个蓝牙设备来连接到它

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/34.png"/></div>

## TPM

reComputer Industrial 配备了 TPM 接口来连接外部 TPM 模块。这里我们已经使用基于 Infineon SLB9670 的 TPM2.0 模块进行了测试。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/114.jpg"/></div>

### 连接概述

将 TPM 模块连接到 TPM 连接器，如下所示

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/115.jpg"/></div>

### 使用方法

通过执行以下命令检查 TPM 模块是否正确加载

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

您将看到如下输出

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

## reComputer Industrial 上的最大性能

如果您想在 reComputer Industrial 上启用最大性能，请按照以下说明操作

- **步骤 1：** 输入以下命令以启用最大功率模式

```sh
sudo nvpmodel -m 0
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/35.jpg"/></div>

这里会要求输入 **YES** 来重启开发板

- **步骤 2：** 开发板启动后，输入以下命令将 CPU 时钟设置为最大频率

```sh
sudo jetson_clocks
```

## GPIO 表

您可以访问 reComputer Industrial 的 GPIO 表来熟悉所有引脚映射。

<Tabs>
<TabItem value="Jetpack5" label="Jetpack5">

在终端中执行以下命令来访问它

```bash
sudo cat /sys/kernel/debug/gpio
```

你将看到输出如下

```bash
gpiochip2: GPIOs 300-315, parent: i2c/1-0021, 1-0021, can sleep:
 gpio-300 (wl_dis              |gpio_xten_pin@0     ) out hi
 gpio-301 (hst_wake_wl         |gpio_xten_pin@1     ) out hi
 gpio-302 (wl_wake_hst         |gpio_xten_pin@2     ) out hi ACTIVE LOW
 gpio-303 (bt_dis              |gpio_xten_pin@3     ) out hi
 gpio-304 (hst_wake_bt         )
 gpio-305 (bt_wake_hst         )
 gpio-306 (spi0_rst_3v3        |gpio_xten_pin@6     ) out lo ACTIVE LOW
 gpio-307 (gpio_pin7           |gpio_xten_pin@7     ) out lo ACTIVE LOW
 gpio-308 (can_120R_en         )
 gpio-309 (M2B_PCIe_rst        )
 gpio-310 (USB_HUB_rst         |gpio_xten_pin@10    ) out hi
 gpio-311 (PCIe_ETH_rst        )
 gpio-312 (M2B_WOWWAN          )
 gpio-313 (M2B_DPR_3V3         )
 gpio-314 (SIM_MUX_SEL         )
 gpio-315 (gpio_pin15          )

gpiochip1: GPIOs 316-347, parent: platform/c2f0000.gpio, tegra234-gpio-aon:
 gpio-316 (PAA.00              )
 gpio-317 (PAA.01              )
 gpio-318 (PAA.02              )
 gpio-319 (PAA.03              )
 gpio-320 (PAA.04              )
 gpio-321 (PAA.05              |fixed-regulators:reg) out hi
 gpio-322 (PAA.06              )
 gpio-323 (PAA.07              )
 gpio-324 (PBB.00              )
 gpio-325 (PBB.01              )
 gpio-326 (PBB.02              )
 gpio-327 (PBB.03              )
 gpio-328 (PCC.00              )
 gpio-329 (PCC.01              )
 gpio-330 (PCC.02              )
 gpio-331 (PCC.03              |mux                 ) out hi
 gpio-332 (PCC.04              )
 gpio-333 (PCC.05              )
 gpio-334 (PCC.06              )
 gpio-335 (PCC.07              )
 gpio-336 (PDD.00              )
 gpio-337 (PDD.01              )
 gpio-338 (PDD.02              )
 gpio-339 (PEE.00              )
 gpio-340 (PEE.01              )
 gpio-341 (PEE.02              )
 gpio-342 (PEE.03              )
 gpio-343 (PEE.04              |power-key           ) in  hi IRQ ACTIVE LOW
 gpio-344 (PEE.05              )
 gpio-345 (PEE.06              )
 gpio-346 (PEE.07              )
 gpio-347 (PGG.00              )
gpiochip0: GPIOs 348-511, parent: platform/2200000.gpio, tegra234-gpio:
 gpio-348 (PA.00               |fixed-regulators:reg) out lo
 gpio-349 (PA.01               )
 gpio-350 (PA.02               )
 gpio-351 (PA.03               )
 gpio-352 (PA.04               )
 gpio-353 (PA.05               )
 gpio-354 (PA.06               )
 gpio-355 (PA.07               )
 gpio-356 (PB.00               )
 gpio-357 (PC.00               )
 gpio-358 (PC.01               )
 gpio-359 (PC.02               )
 gpio-360 (PC.03               )
 gpio-361 (PC.04               )
 gpio-362 (PC.05               )
 gpio-363 (PC.06               )
 gpio-364 (PC.07               )
 gpio-365 (PD.00               )
 gpio-366 (PD.01               )
 gpio-367 (PD.02               )
 gpio-368 (PD.03               )
 gpio-369 (PE.00               )
 gpio-370 (PE.01               )
 gpio-371 (PE.02               )
 gpio-372 (PE.03               )
 gpio-373 (PE.04               )
 gpio-374 (PE.05               )
 gpio-375 (PE.06               )
 gpio-376 (PE.07               )
 gpio-377 (PF.00               )
 gpio-378 (PF.01               )
 gpio-379 (PF.02               )
 gpio-380 (PF.03               )
 gpio-381 (PF.04               )
 gpio-382 (PF.05               )
 gpio-383 (PG.00               |force-recovery      ) in  hi IRQ ACTIVE LOW
 gpio-384 (PG.01               )
 gpio-385 (PG.02               )
 gpio-386 (PG.03               )
 gpio-387 (PG.04               )
 gpio-388 (PG.05               )
 gpio-389 (PG.06               )
 gpio-390 (PG.07               |cd                  ) in  lo IRQ
 gpio-391 (PH.00               )
 gpio-392 (PH.01               )
 gpio-393 (PH.02               )
 gpio-394 (PH.03               )
 gpio-395 (PH.04               )
 gpio-396 (PH.05               )
 gpio-397 (PH.06               )
 gpio-398 (PH.07               )
 gpio-399 (PI.00               )
 gpio-400 (PI.01               )
 gpio-401 (PI.02               )
 gpio-402 (PI.03               )
 gpio-403 (PI.04               )
 gpio-404 (PI.05               )
 gpio-405 (PI.06               )
 gpio-406 (PJ.00               )
 gpio-407 (PJ.01               )
 gpio-408 (PJ.02               )
 gpio-409 (PJ.03               )
 gpio-410 (PJ.04               )
 gpio-411 (PJ.05               )
 gpio-412 (PK.00               )
 gpio-413 (PK.01               )
 gpio-414 (PK.02               )
 gpio-415 (PK.03               )
 gpio-416 (PK.04               )
 gpio-417 (PK.05               )
 gpio-418 (PK.06               )
 gpio-419 (PK.07               )
 gpio-420 (PL.00               )
 gpio-421 (PL.01               )
 gpio-422 (PL.02               |nvidia,pex-wake     ) in  hi ACTIVE LOW
 gpio-423 (PL.03               )
 gpio-424 (PM.00               )
 gpio-425 (PM.01               )
 gpio-426 (PM.02               )
 gpio-427 (PM.03               )
 gpio-428 (PM.04               )
 gpio-429 (PM.05               )
 gpio-430 (PM.06               )
 gpio-431 (PM.07               )
 gpio-432 (PN.00               )
 gpio-433 (PN.01               )
 gpio-434 (PN.02               )
 gpio-435 (PN.03               )
 gpio-436 (PN.04               )
 gpio-437 (PN.05               )
 gpio-438 (PN.06               )
 gpio-439 (PN.07               )
 gpio-440 (PP.00               )
 gpio-441 (PP.01               )
 gpio-442 (PP.02               )
 gpio-443 (PP.03               )
 gpio-444 (PP.04               )
 gpio-445 (PP.05               )
 gpio-446 (PP.06               )
 gpio-447 (PP.07               )
 gpio-448 (PQ.00               )
 gpio-449 (PQ.01               )
 gpio-450 (PQ.02               )
 gpio-451 (PQ.03               )
 gpio-452 (PQ.04               )
 gpio-453 (PQ.05               )
 gpio-454 (PQ.06               )
 gpio-455 (PQ.07               )
 gpio-456 (PR.00               )
 gpio-457 (PR.01               )
 gpio-458 (PR.02               )
 gpio-459 (PR.03               )
 gpio-460 (PR.04               )
 gpio-461 (PR.05               )
 gpio-462 (PX.00               )
 gpio-463 (PX.01               )
 gpio-464 (PX.02               )
 gpio-465 (PX.03               )
 gpio-466 (PX.04               )
 gpio-467 (PX.05               )
 gpio-468 (PX.06               )
 gpio-469 (PX.07               )
 gpio-470 (PY.00               )
 gpio-471 (PY.01               )
 gpio-472 (PY.02               )
 gpio-473 (PY.03               )
 gpio-474 (PY.04               )
 gpio-475 (PY.05               )
 gpio-476 (PY.06               )
 gpio-477 (PY.07               )
 gpio-478 (PZ.00               )
 gpio-479 (PZ.01               |vbus                ) in  hi IRQ ACTIVE LOW
 gpio-480 (PZ.02               )
 gpio-481 (PZ.03               )
 gpio-482 (PZ.04               )
 gpio-483 (PZ.05               )
 gpio-484 (PZ.06               |cs_gpio             ) out lo
 gpio-485 (PZ.07               )
 gpio-486 (PAC.00              )
 gpio-487 (PAC.01              )
 gpio-488 (PAC.02              )
 gpio-489 (PAC.03              )
 gpio-490 (PAC.04              )
 gpio-491 (PAC.05              )
 gpio-492 (PAC.06              )
 gpio-493 (PAC.07              )
 gpio-494 (PAD.00              )
 gpio-495 (PAD.01              )
 gpio-496 (PAD.02              )
 gpio-497 (PAD.03              )
 gpio-498 (PAE.00              )
 gpio-499 (PAE.01              )
 gpio-500 (PAF.00              )
 gpio-501 (PAF.01              )
 gpio-502 (PAF.02              )
 gpio-503 (PAF.03              )
 gpio-504 (PAG.00              )
 gpio-505 (PAG.01              )
 gpio-506 (PAG.02              )
 gpio-507 (PAG.03              )
 gpio-508 (PAG.04              )
 gpio-509 (PAG.05              )
 gpio-510 (PAG.06              )
 gpio-511 (PAG.07              )
```

</TabItem>

<TabItem value="Jetpack6" label="Jetpack6">

在终端内执行以下命令以访问它。

```bash
gpioinfo
```

你将看到输出如下

```bash
seeed@seeed-desktop:~$ gpioinfo 
gpiochip0 - 164 lines:
 line   0:      "PA.00" "regulator-vdd-3v3-sd" output active-high [used]
 line   1:      "PA.01"       unused   input  active-high 
 line   2:      "PA.02"       unused   input  active-high 
 line   3:      "PA.03"       unused   input  active-high 
 line   4:      "PA.04"       unused   input  active-high 
 line   5:      "PA.05"       unused   input  active-high 
 line   6:      "PA.06"       unused   input  active-high 
 line   7:      "PA.07"       unused   input  active-high 
 line   8:      "PB.00"       unused   input  active-high 
 line   9:      "PC.00"       unused   input  active-high 
 line  10:      "PC.01"       unused   input  active-high 
 line  11:      "PC.02"       unused   input  active-high 
 line  12:      "PC.03"       unused   input  active-high 
 line  13:      "PC.04"       unused   input  active-high 
 line  14:      "PC.05"       unused   input  active-high 
 line  15:      "PC.06"       unused   input  active-high 
 line  16:      "PC.07"       unused   input  active-high 
 line  17:      "PD.00"       unused   input  active-high 
 line  18:      "PD.01"       unused   input  active-high 
 line  19:      "PD.02"       unused   input  active-high 
 line  20:      "PD.03"       unused   input  active-high 
 line  21:      "PE.00"       unused   input  active-high 
 line  22:      "PE.01"       unused   input  active-high 
 line  23:      "PE.02"       unused   input  active-high 
 line  24:      "PE.03"       unused   input  active-high 
 line  25:      "PE.04"       unused   input  active-high 
 line  26:      "PE.05"       unused   input  active-high 
 line  27:      "PE.06"       unused   input  active-high 
 line  28:      "PE.07"       unused   input  active-high 
 line  29:      "PF.00"       unused   input  active-high 
 line  30:      "PF.01"       unused   input  active-high 
 line  31:      "PF.02"       unused   input  active-high 
 line  32:      "PF.03"       unused   input  active-high 
 line  33:      "PF.04"       unused   input  active-high 
 line  34:      "PF.05"       unused   input  active-high 
 line  35:      "PG.00" "Force Recovery" input active-low [used]
 line  36:      "PG.01"       unused   input  active-high 
 line  37:      "PG.02"    "Suspend"   input   active-low [used]
 line  38:      "PG.03"       unused   input  active-high 
 line  39:      "PG.04"       unused   input  active-high 
 line  40:      "PG.05"       unused   input  active-high 
 line  41:      "PG.06"       unused   input  active-high 
 line  42:      "PG.07"       unused   input  active-high 
 line  43:      "PH.00"       unused   input  active-high 
 line  44:      "PH.01"       unused   input  active-high 
 line  45:      "PH.02"       unused   input  active-high 
 line  46:      "PH.03" "camera-control-output-low" output active-high [used]
 line  47:      "PH.04"       unused   input  active-high 
 line  48:      "PH.05"       unused   input  active-high 
 line  49:      "PH.06"       unused  output  active-high 
 line  50:      "PH.07"       unused   input  active-high 
 line  51:      "PI.00"       unused  output  active-high 
 line  52:      "PI.01"       unused   input  active-high 
 line  53:      "PI.02"       unused   input  active-high 
 line  54:      "PI.03"       unused   input  active-high 
 line  55:      "PI.04"       unused   input  active-high 
 line  56:      "PI.05"       kernel   input  active-high [used]
 line  57:      "PI.06"       unused   input  active-high 
 line  58:      "PJ.00"       unused   input  active-high 
 line  59:      "PJ.01"       unused   input  active-high 
 line  60:      "PJ.02"       unused   input  active-high 
 line  61:      "PJ.03"       unused   input  active-high 
 line  62:      "PJ.04"       unused   input  active-high 
 line  63:      "PJ.05"       unused   input  active-high 
 line  64:      "PK.00"       unused   input  active-high 
 line  65:      "PK.01"       unused   input  active-high 
 line  66:      "PK.02"       unused   input  active-high 
 line  67:      "PK.03"       unused   input  active-high 
 line  68:      "PK.04"       unused  output  active-high 
 line  69:      "PK.05"       unused  output  active-high 
 line  70:      "PK.06"       unused   input  active-high 
 line  71:      "PK.07"       unused   input  active-high 
 line  72:      "PL.00"       unused   input  active-high 
 line  73:      "PL.01"       unused   input  active-high 
 line  74:      "PL.02"       unused   input  active-high 
 line  75:      "PL.03"       unused   input  active-high 
 line  76:      "PM.00"       kernel   input  active-high [used]
 line  77:      "PM.01"       unused   input  active-high 
 line  78:      "PM.02"       unused   input  active-high 
 line  79:      "PM.03"       unused   input  active-high 
 line  80:      "PM.04"       unused   input  active-high 
 line  81:      "PM.05"       unused   input  active-high 
 line  82:      "PM.06"       unused   input  active-high 
 line  83:      "PM.07"       unused   input  active-high 
 line  84:      "PN.00"       unused   input  active-high 
 line  85:      "PN.01"  "interrupt"   input  active-high [used]
 line  86:      "PN.02"       unused   input  active-high 
 line  87:      "PN.03"       unused   input  active-high 
 line  88:      "PN.04"       unused   input  active-high 
 line  89:      "PN.05"       unused   input  active-high 
 line  90:      "PN.06"       unused   input  active-high 
 line  91:      "PN.07"       unused   input  active-high 
 line  92:      "PP.00"       unused   input  active-high 
 line  93:      "PP.01"       unused   input  active-high 
 line  94:      "PP.02"       unused   input  active-high 
 line  95:      "PP.03"       unused   input  active-high 
 line  96:      "PP.04"       unused   input  active-high 
 line  97:      "PP.05"       unused   input  active-high 
 line  98:      "PP.06"       unused   input  active-high 
 line  99:      "PP.07"       unused   input  active-high 
 line 100:      "PQ.00"       unused   input  active-high 
 line 101:      "PQ.01"       unused   input  active-high 
 line 102:      "PQ.02"       unused   input  active-high 
 line 103:      "PQ.03"       unused  output  active-high 
 line 104:      "PQ.04"       unused   input  active-high 
 line 105:      "PQ.05"       unused   input  active-high 
 line 106:      "PQ.06"       unused   input  active-high 
 line 107:      "PQ.07"       unused   input  active-high 
 line 108:      "PR.00"       unused   input  active-high 
 line 109:      "PR.01"       unused   input  active-high 
 line 110:      "PR.02"       unused   input  active-high 
 line 111:      "PR.03"       unused   input  active-high 
 line 112:      "PR.04"       unused   input  active-high 
 line 113:      "PR.05"       unused   input  active-high 
 line 114:      "PX.00"       kernel   input  active-high [used]
 line 115:      "PX.01"       kernel   input  active-high [used]
 line 116:      "PX.02"       unused   input  active-high 
 line 117:      "PX.03"       unused   input  active-high 
 line 118:      "PX.04"       unused   input  active-high 
 line 119:      "PX.05"       unused   input  active-high 
 line 120:      "PX.06"       unused   input  active-high 
 line 121:      "PX.07"       unused   input  active-high 
 line 122:      "PY.00"       unused   input  active-high 
 line 123:      "PY.01"       unused   input  active-high 
 line 124:      "PY.02"       unused   input  active-high 
 line 125:      "PY.03"       unused   input  active-high 
 line 126:      "PY.04"       unused   input  active-high 
 line 127:      "PY.05"       unused   input  active-high 
 line 128:      "PY.06"       unused   input  active-high 
 line 129:      "PY.07"       unused   input  active-high 
 line 130:      "PZ.00"       unused   input  active-high 
 line 131:      "PZ.01"       "vbus"   input   active-low [used]
 line 132:      "PZ.02"       unused   input  active-high 
 line 133:      "PZ.03"       unused   input  active-high 
 line 134:      "PZ.04"       unused   input  active-high 
 line 135:      "PZ.05"       unused   input  active-high 
 line 136:      "PZ.06"   "spi0 CS0"  output   active-low [used]
 line 137:      "PZ.07"       unused   input  active-high 
 line 138:     "PAC.00"       unused  output  active-high 
 line 139:     "PAC.01"       unused   input  active-high 
 line 140:     "PAC.02"       unused   input  active-high 
 line 141:     "PAC.03"       unused   input  active-high 
 line 142:     "PAC.04"       unused   input  active-high 
 line 143:     "PAC.05"       unused   input  active-high 
 line 144:     "PAC.06"       unused   input  active-high 
 line 145:     "PAC.07"       unused   input  active-high 
 line 146:     "PAD.00"       unused   input  active-high 
 line 147:     "PAD.01"       unused   input  active-high 
 line 148:     "PAD.02"       unused   input  active-high 
 line 149:     "PAD.03"       unused   input  active-high 
 line 150:     "PAE.00"       unused   input  active-high 
 line 151:     "PAE.01"       unused   input  active-high 
 line 152:     "PAF.00"       unused   input  active-high 
 line 153:     "PAF.01"       unused   input  active-high 
 line 154:     "PAF.02"       unused   input  active-high 
 line 155:     "PAF.03"       unused   input  active-high 
 line 156:     "PAG.00"       unused   input  active-high 
 line 157:     "PAG.01"       unused   input  active-high 
 line 158:     "PAG.02"       unused   input  active-high 
 line 159:     "PAG.03"       unused   input  active-high 
 line 160:     "PAG.04"       unused   input  active-high 
 line 161:     "PAG.05"       unused   input  active-high 
 line 162:     "PAG.06"       unused   input  active-high 
 line 163:     "PAG.07"       unused   input  active-high 
gpiochip1 - 32 lines:
 line   0:     "PAA.00"       unused   input  active-high 
 line   1:     "PAA.01"       unused   input  active-high 
 line   2:     "PAA.02"       unused   input  active-high 
 line   3:     "PAA.03"       unused   input  active-high 
 line   4:     "PAA.04"       unused  output  active-high 
 line   5:     "PAA.05" "regulator-vdd-3v3-pcie" output active-high [used]
 line   6:     "PAA.06"       unused   input  active-high 
 line   7:     "PAA.07"       unused   input  active-high 
 line   8:     "PBB.00"       unused   input  active-high 
 line   9:     "PBB.01"       unused   input  active-high 
 line  10:     "PBB.02"       unused   input  active-high 
 line  11:     "PBB.03"       unused  output  active-high 
 line  12:     "PCC.00"       unused  output  active-high 
 line  13:     "PCC.01"       unused  output  active-high 
 line  14:     "PCC.02"       unused  output  active-high 
 line  15:     "PCC.03"        "mux"  output  active-high [used]
 line  16:     "PCC.04"       unused   input  active-high 
 line  17:     "PCC.05"       unused   input  active-high 
 line  18:     "PCC.06"       unused   input  active-high 
 line  19:     "PCC.07"       unused   input  active-high 
 line  20:     "PDD.00"       unused   input  active-high 
 line  21:     "PDD.01"       unused   input  active-high 
 line  22:     "PDD.02"       unused   input  active-high 
 line  23:     "PEE.00"       unused   input  active-high 
 line  24:     "PEE.01"       unused   input  active-high 
 line  25:     "PEE.02"       unused   input  active-high 
 line  26:     "PEE.03"       unused   input  active-high 
 line  27:     "PEE.04"      "Power"   input   active-low [used]
 line  28:     "PEE.05"       unused   input  active-high 
 line  29:     "PEE.06"       unused   input  active-high 
 line  30:     "PEE.07"       unused   input  active-high 
 line  31:     "PGG.00"       unused   input  active-high 
gpiochip2 - 16 lines:
 line   0:     "wl_dis" "gpio_xten_pin@0" output active-high [used]
 line   1: "hst_wake_wl" "gpio_xten_pin@1" output active-high [used]
 line   2: "wl_wake_hst" "gpio_xten_pin@2" output active-low [used]
 line   3:     "bt_dis" "gpio_xten_pin@3" output active-high [used]
 line   4: "hst_wake_bt" unused input active-high 
 line   5: "bt_wake_hst" unused input active-high 
 line   6: "spi0_rst_3v3" "gpio_xten_pin@6" output active-low [used]
 line   7:  "gpio_pin7" "gpio_xten_pin@7" output active-low [used]
 line   8: "can_120R_en" unused input active-high 
 line   9: "M2B_PCIe_rst" unused input active-high 
 line  10: "USB_HUB_rst" "gpio_xten_pin@10" output active-high [used]
 line  11: "PCIe_ETH_rst" unused input active-high 
 line  12: "M2B_WOWWAN"       unused   input  active-high 
 line  13: "M2B_DPR_3V3" unused input active-high 
 line  14: "SIM_MUX_SEL" unused input active-high 
 line  15: "gpio_pin15"       unused   input  active-high 
```

</TabItem>
</Tabs>

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
