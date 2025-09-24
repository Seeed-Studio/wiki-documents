---
description: reComputer Industrial J20 系列的硬件和接口使用说明
title: reComputer Industrial J20 硬件和接口使用说明
tags:
  - reComputer Industrial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Industrial_J20_Hardware_Interfaces_Usage
last_update:
  date: 05/16/2023
  author: Lakshantha
---

本文档介绍了 reComputer Industrial J2012、J2011 上各种不同的硬件和接口，以及如何使用它们来扩展您的项目想法。

## 拆解 reComputer Industrial

首先，最好拆解外壳以访问所有接口。按照以下步骤拧下位于背面的 4 颗螺丝来拆解 reComputer Industrial

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/98.png"/></div>

## CSI 摄像头

reComputer Industrial 配备了 **2 个 2 通道 15 针 MIPI CSI 摄像头连接器**，支持以下摄像头

- IMX219 摄像头

  - [树莓派相机 V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
  - [IMX219-130 8MP 相机，130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)
  - [IMX219-160 8MP 相机，160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
  - [IMX219-200 8MP 相机，200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html)
  - [IMX219-77 8MP 相机，77° FOV](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
  - [IMX219 M12/CS 安装 CMOS 相机模块](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
  - [IMX219-83 8MP 3D 立体相机模块](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
  - [IMX219-77IR 8MP IR 夜视相机，77° FOV](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
  - [IMX219-160IR 8MP 相机，160° FOV](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html)
  - [IMX219 M12/CS 安装 CMOS 相机模块](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

- IMX477 摄像头

  - [树莓派高质量相机](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
  - [树莓派 HQ 相机 - M12 接口](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
  - [树莓派高质量相机](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

### 连接概述

这里的 2 个 CSI 摄像头连接器标记为 **CAM0 和 CAM1**。您可以将一个摄像头连接到 2 个连接器中的任意一个，或者同时将 2 个摄像头连接到两个连接器。

- **步骤 1：** 轻轻拉出 CSI 连接器上的黑色锁扣

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/5.png"/></div>

- **步骤 2：** 将 15 针排线插入连接器，确保金手指朝下

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/6.png"/></div>

- **步骤 3：** 推入黑色锁扣以将排线锁定到位

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/10.png"/></div>

### 使用方法

首先，您需要配置开发板以加载您将使用的特定摄像头的适当驱动程序。为此，JetPack 系统有一个内置工具来支持 IMX219 和 IMX477 摄像头。

- **步骤 1：** 打开终端并执行以下命令

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

- **步骤 2：** 选择 **Configure Jetson Nano CSI Connector**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/119.jpg"/></div>

- **步骤 3：** 选择 **Configure for compatible hardware**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/120.jpg"/></div>

- **步骤 4：** 选择您想要使用的摄像头

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/121.jpg"/></div>

- **步骤 5：** 选择 **Save pin changes**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/122.jpg"/></div>

- **步骤 6：** 选择 **Save and reboot to reconfigure pins**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/123.jpg"/></div>

- **步骤 7：** 在键盘上按任意键，设备将重启并应用摄像头配置

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/124.jpg"/></div>

您可以通过 2 种不同的方法使用 CSI 摄像头。根据摄像头连接器按照以下命令操作

- 方法 1：

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

- 方法 2：

对于 CAM0 端口

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

For CAM1 port

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::note
如果您想要更改相机的进一步设置，您可以更新参数，如 **width, height, framerate, format** 等。
:::

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

- **步骤 1：** 如上所述连接 RTC 电池

- **步骤 2：** 打开 reComputer Industrial

- **步骤 3：** 在 Ubuntu 桌面上，点击右上角的下拉菜单，导航到 `Settings > Date & Time`，通过以太网电缆连接到网络并选择 **Automatic Date & Time** 以自动获取日期/时间

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
如果您没有通过以太网连接到互联网，您可以在这里手动设置日期/时间
:::

- **步骤 4：** 打开终端窗口，执行以下命令检查硬件时钟时间

```sh
sudo hwclock
```

您将看到类似下面的输出，这不是正确的日期/时间

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

- **步骤 5：** 通过输入以下命令将硬件时钟时间更改为当前系统时钟时间

```sh
sudo hwclock --systohc
```

- **步骤 6：** 移除任何连接的以太网电缆，确保它不会从互联网获取时间，然后重启开发板

```sh
sudo reboot
```

- **步骤 7：** 检查硬件时钟时间，以验证即使设备断电后日期/时间仍保持不变

现在我们将创建一个脚本，在每次启动时始终从硬件时钟同步系统时钟。

- **步骤 8：** 使用您偏好的任何文本编辑器创建一个新的 shell 脚本。这里我们使用 **vi** 文本编辑器

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **步骤 9:** 按下 **i** 进入**插入模式**，复制并粘贴以下内容到文件中

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **步骤 10:** 使脚本可执行

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **步骤 11：** 创建一个 systemd 文件

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

- **步骤 12:** 在文件内添加以下内容

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

- **步骤 13：** 重新加载 systemctl 守护进程

```sh
sudo systemctl daemon-reload 
```

- **步骤 14:** 启用新创建的服务在启动时自动运行并启动该服务

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **步骤 15:** 验证脚本作为 systemd 服务正在运行

```sh
sudo systemctl status hwtosys.service
```

- **步骤 16：** 重启开发板，您将看到系统时钟现在与硬件时钟同步

## M.2 Key M

开箱即用，reComputer Industrial 包含一个连接到 M.2 Key M 插槽的 128GB SSD，预装了 JetPack 系统。

### 连接概述

如果您想要移除包含的 SSD 并安装新的 SSD，可以按照以下步骤操作。这里我们只推荐使用 Seeed 的 [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html) 和 [512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) 存储容量的 SSD，因为我们只测试了这些 SSD。此外，此接口支持 PCIe Gen4.0 SSD。

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

目前此板支持 EC25EUXGA 和 EC20CEHCLG 模块。

- **步骤 1：** 如果板子已经开机，请先关闭电源

- **步骤 2：** 移除附带的支撑柱。此支撑柱仅在使用 M.2 Key B 接口时需要

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/110.jpg"/></div>

- **步骤 3：** 将 4G 模块滑入 mini PCIe 插槽，使用预装的螺丝将其固定到 2 个孔中以固定 4G 模块

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/17.png"/></div>

- **步骤 4：** 将天线连接到标有 **MAIN** 的天线连接器。这里您需要使用 IPEX 连接器

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/18.png"/></div>

- **步骤 5：** 将支持 4G 的 nano SIM 卡插入板上的 SIM 卡插槽，确保 SIM 卡的金属表面朝下。这里要将卡完全插入，使其撞击内部弹簧后弹回并锁定到位。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
如果您想要取出 SIM 卡，请将卡推入以撞击内部弹簧，这样 SIM 卡就会从插槽中弹出
:::

- **步骤 6：** 在 **J8 (Control and UART) Header** 上的 **SIM_MUX_SEL** 和 **GND** 引脚之间添加跳线

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/20.png"/></div>

- **步骤 6：** 开启板子电源

### 4G 模块使用 - 测试拨号

使用 EC25 模块时，模块会自动启动并准备使用。但是，使用 EC20 模块时，您需要重置模块才能使其工作

- **步骤 1：** 如果您使用的是 EC25 模块，可以跳过此步骤。但如果您使用的是 EC20 模块，请输入以下命令来访问 GPIO298 引脚，该引脚负责重置 4G 模块

```sh
sudo su 
cd /sys/class/gpio
echo 298 > export 
cd gpio298
echo out > direction
echo 1 > value
```

对于 EC25 模块，LED2 会在板子启动后立即亮绿灯。对于 EC20 模块，LED2 会在按照上述说明重置模块后亮绿灯

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/118.jpg"/></div>

- **步骤 2：** 安装 minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **步骤 3：** 进入已连接的 4G 模块的串口控制台，这样我们就可以输入 AT 命令并与 4G 模块进行交互

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **步骤 4：** 按 **Ctrl+A**，然后按 **E** 开启本地回显

- **步骤 5：** 输入命令 **"AT"** 并按回车键。如果看到响应为 "OK"，则 4G 模块工作正常

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

- **步骤 6：** 输入命令 **"ATI"** 检查模块信息

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

- **步骤 7：** 要测试模块，输入以下命令拨打另一个电话号码

```sh
ATD<phone_number>;
```

您将看到以下输出

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

如果输入的电话号码能够接收到呼叫，则模块工作正常

### 4G 模块使用 - 连接到互联网

#### EC25 模块

如果您使用的是 EC25 模块，请按照以下步骤操作

- **步骤 1：** 按照上述说明打开 4G 模块的串行控制台（4G 模块使用 - 测试拨号部分）后，执行以下命令连接到互联网。这里请将 **YOUR_APN** 替换为您的网络提供商的 APN

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

目前此板支持 WM1302 SPI 模块。您可以使用我们商城上提供的 [美国版本](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html) 或 [欧洲版本](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)。

- **步骤 1：** 如果板子已经开机，请先关机

- **步骤 2：** 将 LoRa 模块滑入 mini PCIe 插槽，使用预装的螺丝将其拧入 2 个孔中，以固定 4G 模块

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/25.png"/></div>

- **步骤 3：** 将天线连接到天线连接器。这里您需要使用 IPEX 连接器

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/26.png"/></div>

:::note
确保在 **J8（控制和 UART）接头** 上的 **SIM_MUX_SEL** 和 **GND** 引脚之间没有跳线。此跳线仅在使用 4G 模块时需要
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

- **步骤 2：** 输入以下命令来编译和构建 LoRa 信号传输工具

```sh
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

如果您看到以下结果并且 LoRa 模块上的 LED 变为红色，这意味着模块正在成功传输 RF 信号

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

- **步骤 3：** 访问[此 URL](https://console.cloud.thethings.network) 进入 TTN 控制台并选择您所在的区域

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
  - server_address: TTN 的网关服务器地址
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

- **步骤 2：** 将 5G 模块滑入 M.2 Key B 插槽，并拧入支撑柱螺丝以固定 5G 模块（关于支撑柱）

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/112.jpg"/></div>

- **步骤 3：** 将 4 根天线连接到模块上的天线连接器。这里您需要使用 IPEX 4 连接器

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/113.jpg"/></div>

- **步骤 4：** 将支持 5G 的 nano SIM 卡插入板子上的 SIM 卡插槽，确保 SIM 卡的金色表面朝下。这里要将卡片完全插入，使其在碰到内部弹簧后弹回并锁定到位。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::note
如果您想要取出 SIM 卡，请将卡片推入以碰到内部弹簧，这样 SIM 卡就会从插槽中弹出
:::

- **步骤 5：** 开机

### 5G 模块使用 - 测试拨号

使用 SIM8202G-M2 5G 模块时，模块不会自动启动。因此我们首先需要切换几个 GPIO 来使其启动

- **步骤 1：** 输入以下命令来启动 5G 模块

```sh
sudo su 
cd /sys/class/gpio
echo 298 > export 
cd gpio298
echo out > direction
echo 0 > value

cd..
echo 330 > export 
cd PEE.02
echo out > direction
echo 1 > value

cd..
echo 319 > export 
cd PCC.02
echo out > direction
echo 0 > value
```

一旦执行上述操作，LED2 将亮起绿色，如下所示

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/117.jpg"/></div>

- **步骤 2：** 安装 minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **步骤 3：** 进入已连接的 5G 模块的串行控制台，这样我们就可以输入 AT 命令并与 5G 模块进行交互

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **步骤 4：** 输入命令 **"AT"** 并按回车键。如果您看到响应为 "OK"，则 5G 模块工作正常

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

- **步骤 6：** 输入命令 **"ATI"** 来检查模块信息

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>

- **步骤 7：** 要测试模块，请输入以下命令来拨打另一个电话号码

```sh
ATD<phone_number>;
```

您将看到以下输出

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

### 5G 模块使用 - 连接到互联网

即将推出

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
      <td>440</td>
      <td rowSpan={4}>12V/ 总电流 20mA</td>
      <td rowSpan={4}>12V 数字输入，接地信号需要<br />连接到 GND_DI (引脚2/4/6)</td>
    </tr>
    <tr>
      <td>DI2</td>
      <td>DI_2_GPIO09</td>
      <td>211</td>
      <td>PS.04</td>
      <td>453</td>
    </tr>
    <tr>
      <td>DI3</td>
      <td>DI_3_GPIO11</td>
      <td>216</td>
      <td>PQ.06</td>
      <td>441</td>
    </tr>
    <tr>
      <td>DI4</td>
      <td>DI_4_GPIO13</td>
      <td>228</td>
      <td>PN.01</td>
      <td>419</td>
    </tr>
    <tr>
      <td rowSpan={4}>输出</td>
      <td>DO1</td>
      <td>DO_1_GPIO</td>
      <td>193</td>
      <td>PT.06</td>
      <td>463</td>
      <td rowSpan={4}>每个引脚 40V/40mA 负载</td>
      <td rowSpan={4}>数字输出，最大耐压<br />40V，接地信号需要<br />连接到 GND_DO(引脚8/10)</td>
    </tr>
    <tr>
      <td>DO2</td>
      <td>DO_2_GPIO</td>
      <td>195</td>
      <td>PT.07</td>
      <td>464</td>
    </tr>
    <tr>
      <td>DO3</td>
      <td>DO_3_GPIO</td>
      <td>197</td>
      <td>PU.00</td>
      <td>465</td>
    </tr>
    <tr>
      <td>DO4</td>
      <td>DO_4_GPIO</td>
      <td>199</td>
      <td>PT.05</td>
      <td>462</td>
    </tr>
    <tr>
      <td rowSpan={2}>CAN</td>
      <td>CH</td>
      <td colSpan={5} rowSpan={2}>/</td>
      <td rowSpan={2}>具有标准差分信号的 CAN 总线，<br />接地信号需要连接到 GND_ISO (引脚 12)</td>
    </tr>
    <tr>
      <td>CL</td>
    </tr>
    <tr>
      <td rowSpan={3}>接地</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>12V 数字输入的参考接地信号，<br />也是 DI 的回路路径</td>
    </tr>
    <tr>
      <td>GND_DO</td>
      <td>数字输出的参考接地信号，也是 DO 的回路路径</td>
    </tr>
    <tr>
      <td>CG</td>
      <td>CAN 的参考接地信号</td>
    </tr>
  </tbody>
</table>

### DI 连接概述

您可以按照下图进行 DI 连接。最好在 DI 线路上串联一个电阻。我们已经测试了将 4.7kΩ 电阻连接到 DI1 引脚。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### DI 使用方法

您需要在 DI 线路上输入 12V 电压才能被检测为输入

- **步骤 1：** 按照上图所示连接到 **DI1 引脚** 并输入 **12V**

- **步骤 2：** 按如下方式打开 DI1 的 GPIO

```sh
sudo su 
cd /sys/class/gpio
echo 440 > export 
cd PQ.05
```

:::note
您可以参考 **DI/ DO 引脚分配表** 来查找 GPIO 编号和 BGA 编号。在上面的示例中，对于 DI1 引脚，GPIO 编号是 440，BGA 编号是 PQ.05
:::

- **步骤 3：** 执行以下命令检查状态

```sh
cat value
```

如果输出为0，表示有12V输入。如果输出为1，表示没有输入电压。

### DO连接概述

您可以按照下图进行DO连接。最好在DO线路中串联一个电阻。我们已经用4.7kΩ电阻进行了测试

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### DO使用方法

这里您需要按照上图连接一个负载。测试的最简单方法是连接一个万用表（如果您有的话），或者连接一个需要最大电压小于40V的负载

- **步骤1：** 按照上图所示连接到**DO1引脚**并输入**最大40V**

- **步骤2：** 按如下方式打开D01的GPIO

```sh
sudo su 
cd /sys/class/gpio
echo 463 > export 
cd PT.06
echo out > direction
```

:::note
您可以参考 **DI/ DO 引脚分配表** 来查找 GPIO 编号和 BGA 编号。在上面的示例中，对于 DO1 引脚，GPIO 编号是 463，BGA 编号是 PT.06
:::

- **步骤 3：** 执行以下命令来打开引脚

```sh
echo 1 > value
```

如果负载已开启或万用表输出您输入的电压，则测试功能正常。

## CAN

reComputer Industrial 具有支持 CAN FD（控制器局域网灵活数据速率）协议的 CAN 接口，速率为 5Mbps。CAN 接口使用电容隔离进行隔离，提供出色的 EMI 保护，确保在工业和自动化应用中的可靠通信。默认安装了 120Ω 的终端电阻，您可以使用 GPIO 开启和关闭此电阻。

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

- **步骤 8：** 重复**步骤 6 和步骤 7**，但交换设备。使用 reTerminal DM 发送 CAN 信号，使用 reComputer Industrial 接收信号

## RS232/ RS422/ RS485 接口

reComputer Industrial 具有一个 DB9 连接器，支持 RS232、RS422 和 RS485 通信协议，板载有一个 DIP 开关面板，用于在不同接口选项之间切换

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
      <th>说明</th>
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

- **步骤2：** 打开下载的安装程序，按照提示完成应用程序的安装

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

这里您可以使用 USB 转 RS232 适配器来测试接口。我们使用了 [UGREEN USB 转 RS232 适配器](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1) 进行测试。

- **步骤 1：** 关闭开发板

- **步骤 2：** 这里我们有 2 种选项来设置 DIP 开关。可以选择 001 模式或 101 模式。每种模式的开关位置如下所示

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

- **步骤 3：** 将 USB 转 RS232 适配器连接到 DB9 连接器。这里我们连接了上面提到的适配器

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/68.jpg"/></div>

- **步骤 4：** 将另一端连接到您 PC 上的一个 USB 端口

- **步骤 5：** 打开开发板

### RS232 使用方法

- **步骤 1：** 您可能需要为正在使用的适配器安装驱动程序，或者 Windows 会自动为您安装驱动程序。在 Windows 搜索中输入 **Device Manager** 打开设备管理器，检查是否可以看到连接的适配器作为 COM 设备。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

- **步骤 2：** 如果您看不到适配器，您需要根据正在使用的适配器安装驱动程序。您通常可以在制造商网站上找到这些驱动程序。对于我们使用的适配器，您可以访问[此页面](https://www.ugreen.com/pages/download)，搜索型号 **20201** 并相应地下载驱动程序

- **步骤 3：** 在 PC 上打开 Putty，选择 **Terminal** 部分并设置以下内容

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **步骤 4：** 选择 **Session**，在 **Connection type** 下选择 **Serial**，根据您在 **Device Manager** 中看到的内容设置串口号，保持速度为默认值 (9600) 并点击 **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

- **步骤 4：** 在 reTerminal Industrial 终端窗口中，输入以下内容从 reComputer 向 PC 发送信号

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reComputer Industrial" > /dev/ttyTHS0
```

现在您将在 Putty 上看到此消息显示

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

- **步骤 5：** 在 reTerminal Industrial 终端窗口中，输入以下命令等待接收来自 PC 的信号

```sh
sudo cat /dev/ttyTHS0
```

- **步骤 6：** 在 Putty 中，输入任何内容，按 **ENTER** 键，它将显示在 reComputer Industrial 终端窗口中

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### RS422 连接概述

这里您可以使用 USB 转 RS422 适配器来测试接口。我们使用了 [DTech USB 转 RS485 适配器](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) 进行测试。

- **步骤 1：** 关闭开发板

- **步骤 2：** 这里我们有 2 个选项来设置 DIP 开关。可以选择 000 模式或 100 模式。每种模式的开关位置如下所示

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

- **步骤 3：** 使用跳线将 USB 转 RS422 适配器连接到 DB9 连接器，如下所示。这里我们连接了上面提到的适配器

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

- **步骤 4：** 将另一端连接到 PC 上的一个 USB 端口

- **步骤 5：** 打开开发板

### RS422 使用方法

- **步骤 1：** 您可能需要为正在使用的适配器安装驱动程序，或者 Windows 会自动为您安装驱动程序。在 Windows 搜索中输入 **Device Manager** 打开设备管理器，检查是否可以看到连接的适配器作为 COM 设备。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **步骤 2：** 如果您看不到适配器，您需要根据您使用的适配器安装驱动程序。您通常可以在制造商网站上找到这些驱动程序。对于我们使用的适配器，您可以访问[此页面](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

- **步骤 3：** 在 PC 上打开 Putty，选择 **Terminal** 部分，设置如下

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **步骤 4：** 选择 **Session**，在 **Connection type** 下，选择 **Serial**，根据您在 **Device Manager** 中看到的设置串口号，保持速度为默认值（9600）并点击 **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **步骤 4：** 在 reTerminal Industrial 终端窗口中，输入以下内容以从 reComputer 向 PC 发送信号

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

现在您将在 Putty 上看到此消息显示

- **步骤 5：** 在 reTerminal Industrial 终端窗口中，输入以下命令等待接收来自 PC 的信号

```sh
sudo cat /dev/ttyTHS0
```

- **步骤 6：** 在 Putty 中，输入任何内容，按 **ENTER** 键，它将显示在 reComputer Industrial 终端窗口中

### RS485 连接概述

这里您可以使用 USB 转 RS422 适配器来测试接口。我们使用了 [DTech USB 转 RS485 适配器](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) 进行测试。

- **步骤 1：** 关闭开发板

- **步骤 2：** 这里我们有 3 个选项来设置 DIP 开关。可以是 010 模式、011 模式或 110 模式。每种模式的开关位置如下所示

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

- **步骤 3：** 使用跳线将 USB 转 RS422 适配器连接到 DB9 连接器，如下所示。这里我们连接了上面提到的适配器

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

- **步骤 4：** 将另一端连接到 PC 上的一个 USB 端口

- **步骤 5：** 打开开发板

### RS485 使用方法

- **步骤 1：** 您可能需要为正在使用的适配器安装驱动程序，或者 Windows 会自动为您安装驱动程序。在 Windows 搜索中输入 **Device Manager** 打开设备管理器，检查是否可以看到连接的适配器作为 COM 设备。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **步骤 2：** 如果您看不到适配器，需要根据您使用的适配器安装驱动程序。您通常可以在制造商网站上找到这些驱动程序。对于我们使用的适配器，您可以访问[此页面](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

- **步骤 3：** 在 PC 上打开 Putty，选择 **Terminal** 部分并设置以下内容

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **步骤 4：** 选择 **Session**，在 **Connection type** 下，选择 **Serial**，根据您在 **Device Manager** 中看到的内容设置串口号，保持速度为默认值 (9600) 并点击 **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **步骤 4：** 在 reTerminal Industrial 终端窗口中，输入以下内容从 reComputer 向 PC 发送信号

```sh
sudo su 
cd /sys/class/gpio 
echo 447 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reComputer Industrial" > /dev/ttyTHS0
```

现在您将在 Putty 上看到此消息显示

- **步骤 5：** 在 reTerminal Industrial 终端窗口中，输入以下命令等待接收来自 PC 的信号

```sh
sudo su
cd /sys/class/gpio
echo 447 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

- **步骤 6：** 在 Putty 中，输入任何内容，按 **ENTER** 键，它将显示在 reComputer Industrial 终端窗口中

## 千兆以太网连接器

reComputer Industrial 上有两个千兆以太网（10/100/1000M）连接器，它们的功能不同

- 最左边的连接器直接连接到 Jetson 模块，能够提供 **PSE 802.3 af, 15W** 规格的 PoE 功能。这意味着您可以将 PoE IP 摄像头或任何其他 PoE 设备连接到此端口，为连接的设备供电。
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
- 热插拔

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

如下图所示，板上有一个绿色LED。默认情况下，它作为显示设备正常运行的LED。但是，您也可以通过系统编程控制此LED的开启和关闭

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/21.png"/></div>

### 使用方法

- **步骤 1：** 在终端窗口中输入以下命令来访问绿色LED

```sh
sudo -i
cd /sys/class/gpio
echo 318 > export 
cd PCC.01
echo out > direction 
```

- **步骤 2:** 打开 OFF LED

```sh
echo 0 > value 
```

- **步骤 3:** 打开 ON LED

```sh
echo 1 > value 
```

如果你已经完成使用LED,你可以执行以下操作

```sh
cd ..
echo 318 > unexport
```

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

现在 **jtop** 应用程序将如下打开

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

- **步骤 1：** 打开板子，一旦设备启动到 Ubuntu 桌面，点击右上角的下拉菜单，导航到 `Settings > Wi-Fi` 并切换标题栏上的按钮以启用 WiFi。之后选择一个 WiFi 网络，输入所需的密码并连接到它

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

## GPIO 表格

您可以访问 reComputer Industrial 的 GPIO 表格来熟悉所有引脚映射。

在终端中执行以下命令来访问它

```sh
sudo cat /sys/kernel/debug/gpio
```

你将看到输出如下

```sh
gpiochip3: GPIOs 289-304, parent: i2c/1-0021, 1-0021, can sleep:
 gpio-289 (wl_dis              |gpio_xten_pin@0     ) out hi
 gpio-290 (hst_wake_wl         |gpio_xten_pin@1     ) out hi
 gpio-291 (wl_wake_hst         |gpio_xten_pin@2     ) out hi ACTIVE LOW
 gpio-292 (bt_dis              |gpio_xten_pin@3     ) out hi
 gpio-293 (hst_wake_bt         |gpio_xten_pin@4     ) out hi
 gpio-294 (bt_wake_hst         |gpio_xten_pin@5     ) out hi ACTIVE LOW
 gpio-295 (spi0_rst_3v3        |gpio_xten_pin@6     ) out lo ACTIVE LOW
 gpio-296 (gpio_pin7           |gpio_xten_pin@7     ) out lo ACTIVE LOW
 gpio-297 (can_120R_en         )
 gpio-298 (M2B_PCIe_rst        )
 gpio-299 (USB_HUB_rst         |gpio_xten_pin@10    ) out hi
 gpio-300 (PCIe_ETH_rst        )
 gpio-301 (M2B_WOWWAN          |gpio_xten_pin@12    ) out hi ACTIVE LOW
 gpio-302 (M2B_DPR_3V3         |gpio_xten_pin@13    ) out hi ACTIVE LOW
 gpio-303 (SIM_MUX_SEL         |gpio_xten_pin@14    ) out hi ACTIVE LOW
 gpio-304 (gpio_pin15          |gpio_xten_pin@15    ) out hi ACTIVE LOW

gpiochip2: GPIOs 305-334, parent: platform/c2f0000.gpio, tegra194-gpio-aon:
 gpio-305 (PAA.00              )
 gpio-306 (PAA.01              )
 gpio-307 (PAA.02              )
 gpio-308 (PAA.03              )
 gpio-309 (PAA.04              )
 gpio-310 (PAA.05              )
 gpio-311 (PAA.06              )
 gpio-312 (PAA.07              )
 gpio-313 (PBB.00              )
 gpio-314 (PBB.01              )
 gpio-315 (PBB.02              )
 gpio-316 (PBB.03              )
 gpio-317 (PCC.00              )
 gpio-318 (PCC.01              |pwr                 ) out hi
 gpio-319 (PCC.02              )
 gpio-320 (PCC.03              |mux                 ) out hi
 gpio-321 (PCC.04              )
 gpio-322 (PCC.05              )
 gpio-323 (PCC.06              )
 gpio-324 (PCC.07              )
 gpio-325 (PDD.00              )
 gpio-326 (PDD.01              )
 gpio-327 (PDD.02              )
 gpio-328 (PEE.00              )
 gpio-329 (PEE.01              )
 gpio-330 (PEE.02              )
 gpio-331 (PEE.03              )
 gpio-332 (PEE.04              |power-key           ) in  hi IRQ ACTIVE LOW
 gpio-333 (PEE.05              )
 gpio-334 (PEE.06              )
gpiochip1: GPIOs 335-503, parent: platform/2200000.gpio, tegra194-gpio:
 gpio-335 (PA.00               )
 gpio-336 (PA.01               )
 gpio-337 (PA.02               )
 gpio-338 (PA.03               )
 gpio-339 (PA.04               )
 gpio-340 (PA.05               )
 gpio-341 (PA.06               )
 gpio-342 (PA.07               )
 gpio-343 (PB.00               )
 gpio-344 (PB.01               )
 gpio-345 (PC.00               )
 gpio-346 (PC.01               )
 gpio-347 (PC.02               )
 gpio-348 (PC.03               )
 gpio-349 (PC.04               )
 gpio-350 (PC.05               )
 gpio-351 (PC.06               )
 gpio-352 (PC.07               )
 gpio-353 (PD.00               )
 gpio-354 (PD.01               )
 gpio-355 (PD.02               )
 gpio-356 (PD.03               )
 gpio-357 (PE.00               )
 gpio-358 (PE.01               )
 gpio-359 (PE.02               )
 gpio-360 (PE.03               )
 gpio-361 (PE.04               )
 gpio-362 (PE.05               )
 gpio-363 (PE.06               )
 gpio-364 (PE.07               )
 gpio-365 (PF.00               )
 gpio-366 (PF.01               )
 gpio-367 (PF.02               )
 gpio-368 (PF.03               )
 gpio-369 (PF.04               )
 gpio-370 (PF.05               )
 gpio-371 (PG.00               |force-recovery      ) in  hi IRQ ACTIVE LOW
 gpio-372 (PG.01               )
 gpio-373 (PG.02               |fixed-regulators:reg) out lo
 gpio-374 (PG.03               |wifi-enable         ) out hi
 gpio-375 (PG.04               )
 gpio-376 (PG.05               )
 gpio-377 (PG.06               )
 gpio-378 (PG.07               )
 gpio-379 (PH.00               )
 gpio-380 (PH.01               )
 gpio-381 (PH.02               )
 gpio-382 (PH.03               )
 gpio-383 (PH.04               )
 gpio-384 (PH.05               )
 gpio-385 (PH.06               )
 gpio-386 (PH.07               )
 gpio-387 (PI.00               )
 gpio-388 (PI.01               )
 gpio-389 (PI.02               )
 gpio-390 (PI.03               )
 gpio-391 (PI.04               )
 gpio-392 (PJ.00               )
 gpio-393 (PJ.01               )
 gpio-394 (PJ.02               )
 gpio-395 (PJ.03               )
 gpio-396 (PJ.04               )
 gpio-397 (PJ.05               )
 gpio-398 (PK.00               )
 gpio-399 (PK.01               )
 gpio-400 (PK.02               )
 gpio-401 (PK.03               )
 gpio-402 (PK.04               )
 gpio-403 (PK.05               )
 gpio-404 (PK.06               )
 gpio-405 (PK.07               )
 gpio-406 (PL.00               )
 gpio-407 (PL.01               )
 gpio-408 (PL.02               )
 gpio-409 (PL.03               )
 gpio-410 (PM.00               )
 gpio-411 (PM.01               |hdmi2.0_hpd         ) in  lo IRQ
 gpio-412 (PM.02               )
 gpio-413 (PM.03               )
 gpio-414 (PM.04               )
 gpio-415 (PM.05               )
 gpio-416 (PM.06               )
 gpio-417 (PM.07               )
 gpio-418 (PN.00               |fixed-regulators:reg) out lo
 gpio-419 (PN.01               )
 gpio-420 (PN.02               )
 gpio-421 (PO.00               )
 gpio-422 (PO.01               )
 gpio-423 (PO.02               )
 gpio-424 (PO.03               )
 gpio-425 (PO.04               )
 gpio-426 (PO.05               )
 gpio-427 (PP.00               )
 gpio-428 (PP.01               )
 gpio-429 (PP.02               )
 gpio-430 (PP.03               )
 gpio-431 (PP.04               )
 gpio-432 (PP.05               )
 gpio-433 (PP.06               )
 gpio-434 (PP.07               )
 gpio-435 (PQ.00               )
 gpio-436 (PQ.01               )
 gpio-437 (PQ.02               )
 gpio-438 (PQ.03               )
 gpio-439 (PQ.04               )
 gpio-440 (PQ.05               )
 gpio-441 (PQ.06               )
 gpio-442 (PQ.07               )
 gpio-443 (PR.00               )
 gpio-444 (PR.01               |phy_reset           ) out hi
 gpio-445 (PR.02               )
 gpio-446 (PR.03               )
 gpio-447 (PR.04               )
 gpio-448 (PR.05               )
 gpio-449 (PS.00               )
 gpio-450 (PS.01               )
 gpio-451 (PS.02               )
 gpio-452 (PS.03               )
 gpio-453 (PS.04               )
 gpio-454 (PS.05               )
 gpio-455 (PS.06               )
 gpio-456 (PS.07               )
 gpio-457 (PT.00               )
 gpio-458 (PT.01               )
 gpio-459 (PT.02               )
 gpio-460 (PT.03               )
 gpio-461 (PT.04               )
 gpio-462 (PT.05               )
 gpio-463 (PT.06               )
 gpio-464 (PT.07               )
 gpio-465 (PU.00               )
 gpio-466 (PV.00               )
 gpio-467 (PV.01               )
 gpio-468 (PV.02               )
 gpio-469 (PV.03               )
 gpio-470 (PV.04               )
 gpio-471 (PV.05               )
 gpio-472 (PV.06               )
 gpio-473 (PV.07               )
 gpio-474 (PW.00               )
 gpio-475 (PW.01               )
 gpio-476 (PX.00               )
 gpio-477 (PX.01               )
 gpio-478 (PX.02               )
 gpio-479 (PX.03               )
 gpio-480 (PX.04               )
 gpio-481 (PX.05               )
 gpio-482 (PX.06               )
 gpio-483 (PX.07               )
 gpio-484 (PY.00               )
 gpio-485 (PY.01               )
 gpio-486 (PY.02               )
 gpio-487 (PY.03               )
 gpio-488 (PY.04               )
 gpio-489 (PY.05               )
 gpio-490 (PY.06               )
 gpio-491 (PY.07               )
 gpio-492 (PZ.00               )
 gpio-493 (PZ.01               |vbus                ) in  hi IRQ ACTIVE LOW
 gpio-494 (PZ.02               )
 gpio-495 (PZ.03               )
 gpio-496 (PZ.04               )
 gpio-497 (PZ.05               )
 gpio-498 (PZ.06               |cs_gpio             ) out lo
 gpio-499 (PZ.07               |cs_gpio             ) out hi
 gpio-500 (PFF.00              )
 gpio-501 (PFF.01              )
 gpio-502 (PGG.00              )
 gpio-503 (PGG.01              )

gpiochip0: GPIOs 504-511, parent: i2c/4-003c, max77620-gpio, can sleep:
 gpio-510 (                    |gpio_default        ) in  hi
 gpio-511 (                    |gpio_default        ) in  hi
```

## 技术支持

请随时将问题提交到我们的[论坛](https://forum.seeedstudio.com/)。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
