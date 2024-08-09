---
description: reComputer Industrial J20 系列硬件和接口使用
title: reComputer Industrial J20 系列硬件和接口使用
tags:
  - reComputer Industrial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reComputer_Industrial_J20_Hardware_Interfaces_Usage
last_update:
  date: 05/16/2023
  author: Lakshantha
---

这页Wiki介绍了reComputer Industrial J2012和J2011上的各种硬件和接口，以及如何使用它们来扩展您的项目创意。

## 拆解 reComputer Industrial

首先我们最好先拆下外层外壳以便访问所有接口。按照下图所示，拧下背面的4颗螺丝，以拆解 reComputer Industrial。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/98.png"/></div>

## CSI 摄像头接口

reComputer Industrial 配备了 **2x 2-lane 15pin MIPI CSI camera connectors** 并且支持如下摄像头。

- IMX219 cameras

  - [Raspberry Pi Camera V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
  - [IMX219-130 8MP Camera with 130° FOV](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html)
  - [IMX219-160 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160-Camera-160-FOV-Applicable-for-Jetson-Nano-p-4603.html)
  - [IMX219-200 8MP Camera with 200° FOV](https://www.seeedstudio.com/IMX219-200-Camera-200-FOV-Applicable-for-Jetson-Nano-p-4609.html)
  - [IMX219-77 8MP Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77-Camera-77-FOV-Applicable-for-Jetson-Nano-p-4608.html)
  - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)
  - [IMX219-83 8MP 3D Stereo Camera Module](https://www.seeedstudio.com/IMX219-83-Stereo-Camera-8MP-Binocular-Camera-Module-Depth-Vision-Applicable-for-Jetson-Nano-p-4610.html)
  - [IMX219-77IR 8MP IR Night Vision Camera with 77° FOV](https://www.seeedstudio.com/IMX219-77IR-Camera-77-FOV-Infrared-Applicable-for-Jetson-Nano-p-4607.html)
  - [IMX219-160IR 8MP Camera with 160° FOV](https://www.seeedstudio.com/IMX219-160IR-Camera160-FOV-Infrared-Applicable-for-Jetson-Nano-p-4602.html)
  - [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

- IMX477 cameras

  - [Raspberry Pi High Quality Camera](https://www.seeedstudio.com/Raspberry-Pi-High-Quality-Cam-p-4463.html)
  - [Raspberry Pi HQ Camera - M12 mount](https://www.seeedstudio.com/Raspberry-Pi-HQ-Camera-M12-mount-p-5578.html)
  - [High Quality Camera for Raspberry Pi](https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html)

### 连接概述

这里的2个CSI摄像头连接器标记为 **CAM0 and CAM1**。 您可以将一个摄像头连接到任意一个连接器，也可以同时将两个摄像头分别连接到两个连接器上。

- **步骤 1:** 轻轻地拉出CSI连接器上的黑色锁扣

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/5.png"/></div>

- **步骤 2:** 将15针排线插入连接器，确保gold fingers朝下

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/6.png"/></div>

- **步骤 3:** 推入黑色锁扣，将排线固定到位。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/10.png"/></div>

### 使用方法：

首先，您需要配置板子以加载适用于您将使用的特定摄像头的驱动程序。对于此JetPack系统，内置了支持IMX219和IMX477摄像头的工具

- **步骤 1:** 打开终端并允许以下代码：

```sh
sudo /opt/nvidia/jetson-io/jetson-io.py
```

- **步骤 2:** 选择 **Configure Jetson Nano CSI Connector**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/119.jpg"/></div>

- **步骤 3:** 选择 **Configure for compatible hardware**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/120.jpg"/></div>

- **步骤 4:** 选择你想使用的摄像头

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/121.jpg"/></div>

- **步骤 5:** 选择 **Save pin changes**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/122.jpg"/></div>

- **步骤 6:** 选择 **Save and reboot to reconfigure pins**

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/123.jpg"/></div>

- **步骤 7:** 按下键盘上的任意键，设备将重新启动并应用摄像头配置。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/124.jpg"/></div>

您可以通过两种不同的方法使用CSI摄像头。根据摄像头连接器，按照以下命令操作。 

- 方法 1:

对于 CAM0 端口

```sh
nvgstcapture-1.0 sensor-id=0 
```

对于 CAM1 端口

```sh
nvgstcapture-1.0 sensor-id=1  
```

:::注意
如果你想要改变更多摄像头的设置，可以输入 **"nvgstcapture-1.0 --help"** 去获得所有可配置选项
:::

- 方法 2:

对于 CAM0 端口

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=0 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

对于 CAM1 端口

```sh
gst-launch-1.0 nvarguscamerasrc sensor-id=1 sensor-mode=0 ! 'video/x-raw(memory:NVMM),width=1920, height=1080, framerate=20/1, format=NV12' ! nvvidconv ! xvimagesink
```

:::注意
如果你想修改更多关于摄像头的设置, 你可以修改例如 **width, height, framerate, format**等的参数。
:::

## RTC

reComputer Industrial配备了两种不同的方式去连接RTC电池

### 连接概述

- 方法 1:

将 **3V CR1220 纽扣电池** 插入板子上的RTC插座，如下所示。确保电池 **正极 (+)** 朝上。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/11.jpg"/></div>

- 方法 2:

将**带有JST连接器的 3V CR2302 纽扣** 连接到板子上的2针1.25mm JST插座，如下所示。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/12.jpg"/></div>

### 使用方法：

- **步骤 1:** 按照上述提到的方式连接RTC电池。

- **步骤 2:** 打开 reComputer Industrial

- **步骤 3:** 在Ubuntu桌面上，点击右上角的下拉菜单，导航到 `Settings > Date & Time`, 通过以太网电缆连接到网络，然后选择 **Automatic Date & Time** 以自动获取日期和时间。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::注意
如果您尚未通过以太网连接到互联网，您可以在此手动设置日期/时间
:::

- **步骤 4:** 打开终端窗口，执行以下命令以检查硬件时钟时间 

```sh
sudo hwclock
```

您将看到类似于以下内容的输出，其中显示的日期/时间并不正确

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

- **步骤 5:** 通过输入以下命令，将硬件时钟时间更改为当前系统时钟时间：

```sh
sudo hwclock --systohc
```

- **步骤 6:** 拔掉所有已连接的以太网电缆，以确保系统不会从互联网抓取时间，然后重新启动板子。

```sh
sudo reboot
```

- **步骤 7:** 检查硬件时钟时间以验证即使设备已关闭，日期/时间仍保持不变：

现在，我们将创建一个脚本，以便在每次启动时始终从硬件时钟同步系统时钟：

- **步骤 8:** 您可以使用任何文本编辑器创建一个新的 Shell 脚本文件。这里我们使用 **vi** 文本编辑器

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **步骤 9:** 进入**插入模式**，按下 **i** 键，然后复制并粘贴以下内容到文件中

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **步骤 10:** 修改脚本为可执行文件

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **步骤 11:** 创建一个 Systemd 文件

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

- **步骤 12:** 请将以下内容添加到 Systemd 服务文件中 

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

- **步骤 13:** 重新加载 Systemd 守护进程

```sh
sudo systemctl daemon-reload 
```

- **步骤 14:** 启用新创建的服务开机自启并启动服务

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **步骤 15:** 验证脚本作为 Systemd 服务正在运行

```sh
sudo systemctl status hwtosys.service
```

- **步骤 16:** 重新启动板子。此时，你会发现系统时间已经正确设置并自动同步到硬件时钟上。 

## M.2 Key M

reComputer Industrial 出厂时包括一个连接到 M.2 Key M 插槽的 128GB SSD，预装有 JetPack 系统

### 连接概述 

如果您想要更换机器中预装的 SSD 并安装新的 SSD，可以按照以下步骤进行操作。 这里我们仅建议使用容量为 [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html), [256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html) 和 [512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) Seeed SSD ，因为我们只测试过这些 SSD。此外，这个接口支持 PCIe Gen4.0 SSD。

- **步骤 1:** 拆卸预安装的硬盘螺丝

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/15.png"/></div>

- **步骤 2:** 将原装SSD从连接处取下

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/16.png"/></div>

- **步骤 3:** 插入新的 SSD 并拧紧螺丝

### 使用方法

接下来，我们将为您解答如何对连接的 SSD 进行简单的基准测试。 

- **步骤 1:** 通过运行以下指令测试写入速度

```sh
sudo dd if=/dev/zero of=/home/nvidia/test bs=1M count=512 conv=fdatasync
```

- **步骤 2:** 通过运行以下指令测试读入速度 ，确保运行完上述测试写入速度的指令后再运行本指令。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/nvidia/test of=/dev/null bs=1M count=512
```

## mini PCIe

reComputer Industrial 配备了一个 mini PCIe 插槽，可以支持 4G 模块和 LoRa 模块。然而，您一次只能连接一个 4G 模块或一个 LoRa 模块。

### 4G模块连接概述

目前板子支持 EC25EUXGA 和 EC20CEHCLG 模块.

- **步骤 1:** 请关闭板子电源如果板子开启着

- **步骤 2:** 移除配件中的支撑垫。 当你使用 M.2 Key B 接口时才需要此支撑垫。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/110.jpg"/></div>

- **步骤 3:** 将 4G 模块插入 mini PCIe 槽中，使用预装的螺钉，将其拧到两个孔上以确保 4G 模块稳固插入

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/17.png"/></div>

- **步骤 4:** 将天线插接到标有 **MAIN** 的天线连接器上。在这里，需要使用 IPEX 连接器。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/18.png"/></div>

- **步骤 5:** 将支持 4G 的 Nano SIM 卡插入板上的 SIM 卡槽中，确保 SIM 卡底部的金属表面朝下。请将 SIM 卡插入到底部，以使其击中内部弹簧后会反弹并锁定在位

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::注意
如果你想要取下SIM卡, 请将卡向里按压后，其会被弹簧弹出。
:::

- **步骤 6:** 在 **J8 (Control and UART) Header**的 **SIM_MUX_SEL** 和 **GND**引脚之间添加一条跳线

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/20.png"/></div>

- **步骤 7:** 打开板子电源

### 4G模块使用说明 - 测试拨号

使用EC25模块时，模块将自动启动并准备就绪。然而，使用EC20模块时，您需要重置该模块才能正常工作。

- **步骤 1:** 如果您正在使用EC25模块，则可以跳过此步骤。但是，如果您正在使用EC20模块，则需要输入以下命令来访问GPIO298引脚，该引脚负责重置4G模块。

```sh
sudo su 
cd /sys/class/gpio
echo 298 > export 
cd gpio298
echo out > direction
echo 1 > value
```

对于EC25模块，在板子启动后，LED2会立即亮起绿色。而对于EC20模块，通过上述步骤重置模块后，LED2将会亮起绿色。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/118.jpg"/></div>

- **步骤 2:** 安装 minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **步骤 3:** 进入已连接的4G模块的串行控制台，以便我们可以输入AT命令并与4G模块进行交互。

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **步骤 4:** 按下**Ctrl+A**，然后按下**E**，以开启本地回显功能 

- **步骤 5:** 输入命令**"AT"**，然后按回车键。如果您看到响应为“OK”，则说明4G模块正常工作。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

- **步骤 6:** 输入命令**"ATI"**，以检查模块信息。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

- **步骤 7:** 若要测试模块，请输入以下命令来拨打另一个电话号码：

```sh
ATD<phone_number>;
```

然后你会看到如下输出

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

如果输入的电话号码可以接收来电，则说明模块正在按预期工作。

### 4G模块使用说明 - 连接互联网

#### EC25模块

如果你使用EC25模块,请跟随以下步骤

- **步骤 1:** 在完成上面所述的打开4G模块的串行控制台之后（4G模块使用说明-测试拨号部分），执行以下命令来连接互联网。在此将**YOUR_APN**替换为您的网络运营商的APN。

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/89.jpg"/></div>

成功连接后，它应该会输出**OK**，如上面的图像所示。

- **步骤 2:** 执行以下命令来重新启动4G模块：

```sh
AT+CFUN=1,1
```

现在，您将会失去对串行终端上4G模块的连接。

- **步骤 3:** 按下**CTRL + A**，然后按**Q**来关闭**minicom**。

- **步骤 4:** 输入**ifconfig**，然后会在**usb0**接口上看到一个IP地址。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/93.png"/></div>

- **步骤 5:** 您可以尝试使用以下方法对一个网站进行ping测试，以检查是否有互联网连接：

```sh
ping -I usb0 www.bing.com -c 5
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/94.png"/></div>

#### EC20模块

如果你使用EC20模块,请跟随以下步骤

- **步骤 1:** 如果您已经按照前面的步骤（4G模块使用说明-测试拨号部分）重置了EC20模块，则可以跳过此步骤。但是，如果您还没有执行重置，请现在执行重置。

- **步骤 2:** 进入4G模块的串行控制台，并输入以下命令将其设置为ECM模式：

```sh
AT+QCFG="usbnet",1
```

- **步骤 3:** 重置4G模块。

- **步骤 4:** 在4G模块控制台内，执行以下命令连接到互联网。在此将 **YOUR_APN** 替换为您的网络运营商的APN。

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

- **步骤 6:** 输入**ifconfig**，然后在**usb1**接口上看到一个IP地址。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/90.jpg"/></div>

- **步骤 7:** 您可以尝试使用以下方法对一个URL进行ping测试，以检查是否有互联网连接：

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/92.png"/></div>

### LoRa模块连接概述。

目前，此板支持WM1302 SPI模块。您可以使用我们的Bazaar上 [美版](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html) 或 [欧版](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html) 

- **步骤 1:** 如果板子已经开启，请关闭它。

- **步骤 2:** 将LoRa模块滑入mini PCIe插槽，并使用预安装的螺丝将其固定在2个孔上，以确保4G模块处于正确的位置。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/25.png"/></div>

- **步骤 3:** 将天线连接到天线接头上。在这里，您需要使用IPEX连接器。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/26.png"/></div>

:::注意
确保**J8（控制和UART）标头**上的**SIM_MUX_SEL**引脚和**GND**引脚之间没有跳线。这个跳线只在使用4G模块时需要。
:::

- **步骤 4:** 打开板子电源

### LoRa模块使用说明 - 测试 LoRa RF

当连接LoRa模块时，您会看到模块上的绿色和蓝色LED灯亮起。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/27.png"/></div>

- **步骤 1:** 输入以下命令以检查系统是否检测到LoRa模块：

```sh
i2cdetect -r -y 7
```

如果您看到如下输出，则系统已检测到该模块：

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **步骤 2:** 输入以下命令编译和构建LoRa信号传输工具：

```sh
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

如果您看到以下结果并且LoRa模块上的LED灯变成了红色，则表示该模块已成功传输射频信号：

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/28.png"/></div>

要停止发送信号，您可以在键盘上按下**CTRL + C**。

### LoRa 模块使用说明 - 连接TTN

现在，我们将连接到TTN（The Things Network），并将reComputer Industrial用作TTN LoRaWAN网关。

- **步骤 1:** 输入以下命令使数据包转发器准备就绪：
```sh
cd ..
cd packet_forwarder
cp ../tools/reset_lgw.sh .
```

- **步骤 2:** 根据您使用的LoRa模块运行以下命令。在这里，我们已经测试了SPI US915版本。

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

但是，其他模块的命令如下所示：

```sh
# USB 915
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB

# SPI EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# USB EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

运行上述命令后，您将看到以下输出，并且最后一行将显示**concentrator EUI**信息。请保存此信息，因为我们在设置与TTN网关时将使用它：

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/79.jpg"/></div>

- **步骤 3:** 访问 [URL](https://console.cloud.thethings.network) 进入TTN控制台，选择您喜欢的地区。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/80.png"/></div>

- **步骤 4:** 如果您已经有一个帐号，请登录，如果您没有帐号，请注册一个新帐号。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/81.png"/></div>

- **步骤 5:** 点击 **Go to gateways**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/82.png"/></div>

- **步骤 6:** 点击 **+ Register gateway**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/83.png"/></div>

- **步骤 7:** 在 **Gateway EUI** 部分输入你之前获得的 **Concentrator EUI** ，然后点击 **Confirm**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/84.jpg"/></div>


- **步骤 8:** 根据您使用的LoRa模块输入**Frequency plan**。这里我们使用的是US915模块的版本，因此选择 **United Stated 902-928 MHz, FSB 2 (used by TTN)**。然后单击 **Register gateway**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/85.jpg"/></div>

:::注意
 **Gateway ID** 已经自动填充。但是，您可以更改它为任何您喜欢的内容。 **Gateway name** 不是必须填写的。但是，您也可以根据个人喜好填写。
:::

- **步骤 9:** 在网关主页上记录 **Gateway Server Address** 

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/86.jpg"/></div>

- **步骤 10:** 在reTerminal Industrial上，编辑我们与**lora_pkt_fwd**命令一起使用的**global_conf_json**文件。在这里，您需要更改以下选项：**gateway_ID**、**server_address**、**serv_port_up**和**serv_port_down**。

  - gateway_ID: 设备中的Concentrator EUI
  - server_address: 从TTN获取的网关服务器地址
  - serv_port_up: 1700
  - serv_port_down: 1700

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/87.png"/></div>

- **步骤 11:** 重新运行数据包转发器。

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

如果您看到以下输出，那么设备已经成功连接到TTN：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/88.jpg"/></div>

## M.2 Key B

reComputer Industrial带有一个M.2 Key B连接器，支持4G和5G模块。目前，我们已经测试了**SIM8202G-M2 5G模块**。

### 5G 模块连接概况

- **步骤 1:** 如果板子已经开启，请关闭它。

- **步骤 2:** 确保支架已经就位，然后取下支架上的螺钉。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/111.jpg"/></div>

- **步骤 3:** 将5G模块滑入M.2 Key B插槽中，并将支架螺钉拧紧以固定5G模块的位置（关于支架的说明）。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/112.jpg"/></div>

- **步骤 4:** 将4根天线连接到模块上的天线接头上。在这里，您需要使用IPEX 4连接器。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/113.jpg"/></div>

- **步骤 5:** 将一张支持5G的nano SIM卡插入板子上的SIM卡槽中，确保SIM卡的金色表面朝下。在这里，将卡片插入到底部，使其在撞到内部弹簧后反弹回来并锁定。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/19.png"/></div>

:::注意
如果您想要取出SIM卡，请将卡片推入，撞到内部弹簧以便SIM卡从插槽中被弹出。
:::

- **步骤 6:** 打开板子电源

### 5G 模块使用说明 - 测试拨号

当使用SIM8202G-M2 5G模块时，模块不会自动启动。因此，我们需要先切换一些GPIO以使其启动。

- **步骤 1:** 输入以下命令以启动5G模块：

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

执行上述命令后，LED2将亮起绿色，如下图所示：

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/117.jpg"/></div>

- **步骤 2:** 安装 minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **步骤 3:** 进入已连接的5G模块的串行控制台，以便我们可以输入AT命令并与5G模块进行交互。

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **步骤 4:** 输入命令**AT**，然后按回车键。如果您看到响应为“OK”，则说明5G模块正常工作。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

- **步骤 5:** 输入命令 **"ATI"** 检查模块信息

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>


- **步骤 6:** 若要测试模块，请输入以下命令来拨打另一个电话号码：

```sh
ATD<phone_number>;
```

然后你会看到如下输出：

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

### 5G 模块使用说明 - 连接互联网

更新中......

## DI/ DO 

reComputer Industrial支持4个数字输入和4个数字输出通道，全部都进行了光电隔离，以有效地保护主板免受电压峰值或其他电气干扰的影响。这个连接器上还有一个CAN接口，我们稍后会在本文档中讨论。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/37.png"/></div>

### DI/DO引脚分配表：

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Label Name</th>
      <th>Schematic Signal</th>
      <th>Module Pin Number</th>
      <th>BGA Number</th>
      <th>GPIO Number</th>
      <th>V/A Limits</th>
      <th>Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>Input</td>
      <td>DI1</td>
      <td>DI_1_GPIO01</td>
      <td>118</td>
      <td>PQ.05</td>
      <td>440</td>
      <td rowSpan={4}>12V/ 20mA current in total</td>
      <td rowSpan={4}>12V Digital Input, ground signal needs to<br />be connected to GND_DI (Pin2/4/6)</td>
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
      <td rowSpan={4}>Output</td>
      <td>DO1</td>
      <td>DO_1_GPIO</td>
      <td>193</td>
      <td>PT.06</td>
      <td>463</td>
      <td rowSpan={4}>40V/40mA load per pin</td>
      <td rowSpan={4}>Digital output, maximum withstand<br />voltage 40V, ground signal needs to be<br />connected to GND_DO(Pin8/10)</td>
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
      <td rowSpan={2}>CAN bus with standard differential signals, <br />ground signal needs to be connected to GND_ISO (Pin 12)</td>
    </tr>
    <tr>
      <td>CL</td>
    </tr>
    <tr>
      <td rowSpan={3}>Ground</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>The reference ground signal for the 12V Digital<br />Input, which is also the return path for the DI</td>
    </tr>
    <tr>
      <td>GND_DO</td>
      <td>The reference ground signal of the digital output, which is also the return path of the DO</td>
    </tr>
    <tr>
      <td>CG</td>
      <td>The reference ground signal for CAN</td>
    </tr>
  </tbody>
</table>

### DI（数字输入）的连接概述：

您可以按照下图所示进行DI的连接。最好为DI线添加上串联电阻。这里我们已经测试将一个4.7kΩ电阻连接到DI1引脚。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### DI使用说明

您需要在DI线上输入12V的电压才能被检测为输入。

- **步骤 1:** 按照上图所示连接到**DI1引脚**，并输入**12V**。

- **步骤 2:** 按照以下步骤打开DI1的GPIO：

```sh
sudo su 
cd /sys/class/gpio
echo 440 > export 
cd PQ.05
```

:::注意
您可以参考**DI/DO引脚分配表**查找GPIO编号和BGA编号。在上面的例子中，DI1引脚的GPIO编号为440，BGA编号为PQ.05。
:::

- **步骤 3:** 执行以下命令以检查DI线状态：

```sh
cat value
```

如果输出0，则表示有12V输入。如果输出1，则表示没有输入电压。

### DO（数字输出）的连接概述：

您可以按照下面的图示进行DO的连接。最好为DO线加上串联电阻。这里我们已经测试使用一个4.7kΩ电阻：

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### DO使用说明

在此，您需要按照上面的图示连接一个负载。如果您有万用表，则最简单的测试方法是连接一个万用表，否则请连接一个最大电压不超过40V的负载。

- **步骤 1:** 按照上图所示连接到**DO1引脚**，并输入**最大40V**。

- **步骤 2:** 按照以下步骤打开DO1的GPIO：

```sh
sudo su 
cd /sys/class/gpio
echo 463 > export 
cd PT.06
echo out > direction
```

:::注意
您可以参考**DI/DO引脚分配表**查找GPIO编号和BGA编号。在上面的例子中，DO1引脚的GPIO编号为463，BGA编号为PT.06。
:::

- **步骤 3:** 执行以下命令以打开该引脚：

```sh
echo 1 > value
```

如果负载锁定开启，或者万用表输出您输入的电压，则测试正确运行

## CAN

reComputer Industrial具有支持5Mbps的CAN FD（控制器区域网络灵活数据速率）协议的CAN接口。CAN接口使用电容隔离进行隔离，从而提供出色的EMI保护，并确保在工业和自动化应用中进行可靠的通信。默认情况下安装了120Ω的终端电阻器，您可以使用GPIO切换此电阻器的开关。

注意: CAN接口使用隔离电源，这意味着连接到CAN接口的外部设备的地信号应连接到CG引脚。

### USB转CAN适配器的连接概述：

要测试和连接CAN总线，请按照下面的方式将USB转CAN适配器连接到板子上的CAN接口上：

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

在这里，我们使用我们Bazaar上提供的[USB to CAN Analyzer Adapter with USB Cable](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)

### USB转CAN适配器的使用说明：

- **步骤 1:** 从制造商的网站下载您使用的USB转CAN适配器的驱动程序，并安装它。在我们的情况下，根据我们使用的适配器，驱动程序可以在以下位置找到：[这](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)

- **步骤 2:** 有些适配器还配备了必要的PC软件，以便与CAN设备通信。在我们的情况下，根据我们使用的适配器，我们已经下载并安装了可以在以下位置找到的软件：[这](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)

- **步骤 3:** 在reComputer Industrial上打开终端窗口，并执行以下命令配置和启用CAN接口：

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 4:** 在终端上输入**ifconfig**，您会看到已启用CAN接口:

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **步骤 5:** 打开之前安装的CAN软件。我们将打开根据我们使用的CAN适配器安装的软件。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/></div>

- **步骤 6:** 将USB转CAN适配器连接到PC上，并通过在Windows搜索栏中进行搜索打开**设备管理器**。现在，您会在**端口(COM和LPT)**下看到已连接的适配器。在这里列出串口。根据下面的图像，串口为**COM9**

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/></div>

- **步骤 7:** 打开CAN软件，单击**COM**部分旁边的**刷新**，然后单击下拉菜单并根据连接的适配器选择串行端口。将**COM bps**保持默认设置，然后单击**打开**。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/></div>

- **步骤 8:** 将**模式**和**CAN bps**保持默认设置，将**类型**更改为**标准帧**，然后单击**设置及启动**。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/></div>

- **步骤 9:** 在reComputer Industrial上，执行以下命令向PC发送CAN信号：

```sh
cansend can0 123#abcdabcd
```

现在，您将会看到上述信号被软件接收并显示如下。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **步骤 10:** 在reComputer Industrial上，执行以下命令等待接收来自PC的CAN信号。

```sh
candump can0 &
```

- **步骤 11:** 在CAN软件上，点击“发送单帧”。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

现在，您将会看到reComputer Industrial已接收到该数据，如下所示：

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

### reTerminal DM的连接概览

如果您拥有一台[reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html),你就可以直接与其通信，因为reTerminal DM也有CAN接口。

请参照下图通过CAN连接reComputer Industrial和reTerminal DM：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

### reTerminal DM的使用说明

- **步骤 1:** 在使用reTerminal DM之前，请访问[wiki](https://wiki.seeedstudio.com/reterminal-dm)以开始使用reTerminal DM。

- **步骤 2:** 在reComputer Industrial上打开一个终端窗口，并执行以下命令以配置并启用CAN接口

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 3:** 在reTerminal DM上打开一个终端窗口，并执行以下命令以配置并启用CAN接口

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 4:** 如果在两台设备上都输入**ifconfig**，您将会看到CAN接口已启用 。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **步骤 5:** 在reTerminal DM上执行以下操作以等待从reComputer Industrial接收CAN信号

```sh
candump can0 &
```

- **步骤 6:** 在reComputer Industrial上执行以下命令以向reTerminal Industrial发送CAN信号

```sh
cansend can0 123#abcdabcd
```

现在，您将会看到reTerminal DM已接收到该CAN信号，如下所示：

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **步骤 7:** 重复**步骤5和步骤6**，但交换设备。使用reTerminal DM发送CAN信号，使用reComputer Industrial接收CAN信号。

## RS232/ RS422/ RS485 接口

reComputer Industrial有一个DB9连接器，支持RS232，RS422和RS485通信协议，并且设备板上还有一个DIP开关面板可用于在不同的接口选项之间进行切换。

您可以看到如下所示的 DIP 开关面板：

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/51.png"/></div>

:::注意
在使用 DIP 开关面板之前，请确保先移除黄色塑料盖板。
:::

下面的表格解释了基于 DIP 开关位置的不同模式： 

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
      <td>RS-422 Full Duplex</td>
      <td>1T/1R RS-422</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/53.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>0</td>
      <td>1</td>
      <td>Pure RS-232</td>
      <td>3T/5R RS-232</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/54.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>0</td>
      <td>RS-485 Half Duplex</td>
      <td>1T/1R RS-485 ,TX ENABLE Low Active</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/55.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>1</td>
      <td>1</td>
      <td>RS-485 Half Duplex</td>
      <td>1T/1R RS-485 ,TX ENABLE High Active</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/56.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>0</td>
      <td>0</td>
      <td>RS-422 Full Duplex</td>
      <td>1T/1R RS-422 with termination resistor</td>
    </tr>
    <tr>
      <td rowSpan={3}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/57.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>0</td>
      <td rowSpan={3}>1</td>
      <td rowSpan={3}>Pure RS-232</td>
      <td>1T/1R RS-232 co-exists with RS485</td>
    </tr>
    <tr>
      <td>无需总线即可进行的应用</td>
    </tr>
    <tr>
      <td>开关集成电路（用于特殊用途）</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/58.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>0</td>
      <td rowSpan={2}>RS-485 Half Duplex</td>
      <td>1T/1R RS-485 with termination resistor</td>
    </tr>
    <tr>
      <td>TX ENABLE 低电平有效</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/59.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td>Low Power</td>
      <td rowSpan={2}>All I/O pins are High Impedance</td>
    </tr>
    <tr>
      <td>关机</td>
    </tr>
  </tbody>
</table>

:::注意
开箱即用，开关的默认模式将设置为工厂预置的 RS485 010 模式。
:::

上述表格只考虑了 DIP 开关面板的前三个开关。然而，第四个开关的功能是切换斜率控制（slew rate），该控制器与数据传输速率直接相关。

<table>
  <thead>
    <tr>
      <th />
      <th>状态</th>
      <th>注意</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/62.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>SLEW= Vcc<br />这种RS232 / RS422 / RS485多协议收发器限制了通信速率，如下所示：<br/> RS-232：最大数据率为1.5Mbps <br/> RS-485 / RS-422：最大数据率为10Mbps<br/>实际的最大数据速率取决于所使用的Jetson SO使用情况。</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232：最大数据率为250Kbps<br/> RS-485 / RS-422：最大数据率为250Kbps。</td>
    </tr>
  </tbody>
</table>

在此我们将使用 USB 转 RS232、RS485 和 RS422 适配器来测试接口。因此，在继续之前，您需要在您的 PC 上安装一个串行终端应用程序。这里我们建议您安装 **Putty**，它易于设置和使用。

- **步骤 1:** 访问 网页](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) 根据您的PC架构下载 Putty。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/60.png"/></div>

在这里，我们根据使用的PC选择了 X86 Windows 64位机器的 Putty。

- **步骤 2:** 打开下载的设置文件，并按照提示安装该应用程序。

### 通用连接概述

您可以参考DB9连接器的引脚编号和表格进行连接。

<div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/61.png"/></div>

<table>
  <thead>
    <tr>
      <th>MODE</th>
      <th>001/101</th>
      <th>000/100</th>
      <th>010/011/110</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>PIN</td>
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

在这里，您可以使用 USB 转 RS232 适配器来测试接口。我们使用了 [UGREEN USB to RS232 Adapter](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1) 进行测试。

- **步骤 1:** 将板子关机

- **步骤 2:** 这里我们有两个选项来设置开关（DIP switches）：001模式或101模式。每种模式对应的开关位置如下所示：

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

- **步骤 3:** 将 USB 转 RS232 适配器连接到 DB9 连接器上。这里我们已经连接了上面提到的适配器。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/68.jpg"/></div>

- **步骤 4:** 将另一端连接到您计算机上的一个 USB 端口。

- **步骤 5:** 打开板子

### RS232 Usage

- **步骤 1:** 您可能需要为所使用的适配器安装驱动程序，或者 Windows 将自动为您安装驱动程序。在 Windows 搜索中键入 **设备管理器**，以查看连接的适配器是否被识别为 COM 设备。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

- **步骤 2:** 如果您无法看到适配器，则需要根据所使用的适配器安装驱动程序。通常，您可以在制造商的网站上找到这些驱动程序。对于我们使用的适配器，您可以访问 [页面](https://www.ugreen.com/pages/download)，搜索 **20201** 作为型号，并相应地下载驱动程序。

- **步骤 3:** 在 PC 上打开 Putty，将 **终端** 部分并设置以下内容：

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **步骤 4:** 选择 **会话**，在 **连接类型** 下选择 **串行**，根据在设备管理器中看到的串口号设置串口号，保持速度为默认值（9600），然后单击 **打开**。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

- **步骤 4:** 在 reTerminal Industrial 终端窗口中，输入以下内容以从 reComputer 发送信号到 PC

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reComputer Industrial" > /dev/ttyTHS0
```

现在你会看到这些消息在putty上显示

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

- **步骤 5:** 在 reTerminal Industrial 终端窗口中，输入以下内容以等待从 PC 接收信号：

```sh
sudo cat /dev/ttyTHS0
```

- **步骤 6:**在 Putty 中输入任何内容，按 **ENTER**，然后它将在 reComputer Industrial 终端窗口中显示。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### RS422 连接概述 

在这里，您可以使用 USB 转 RS422 适配器来测试接口。我们使用了 [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) 进行测试。

- **步骤 1:** 将板子关机

- **步骤 2:** 这里我们有两个选项来设置开关（DIP switches）：000模式或100模式。每种模式对应的开关位置如下所示：

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

- **步骤 3:** 将 USB 转 RS422 适配器通过跳线或线材连接到 DB9 连接器上，如下所示。这里我们连接的是上述提到的适配器。 

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

- **步骤 4:** 将另一端连接至您 PC 上的一个 USB 端口。

- **步骤 5:** 打开板子

### RS422 使用说明

- **步骤 1:** 您可能需要为所使用的适配器安装驱动程序，否则 Windows 将自动为您安装驱动程序。通过在 Windows 搜索栏中输入 **Device Manager** ，进入设备管理器，查看您是否可以将连接的适配器识别为一个 COM 设备。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **步骤 2:** 如果您无法看到适配器，则需要根据您所使用的适配器安装驱动程序。通常情况下，您可以在制造商网站上找到这些驱动程序。对于我们正在使用的适配器，您可以通过[网页](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

- **步骤 3:** 在 PC 上打开 Putty，选择“Terminal”选项卡，进行以下设置：

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **步骤 4:** 选择 **Session**, 在 **Coonection type**下拉列表中选择 **Serial**, 根据**Device Manager**中显示的串口号设置相应的串口号，保持默认的波特率（9600），然后点击**Open**。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **步骤 5:** 在 reTerminal industrial 终端窗口中输入以下内容，以便从 reComputer 发送信号到 PC。

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

现在你会看到这条信息在Putty上显示

- **步骤 5:** 在 reTerminal industrial 终端窗口中输入以下内容，以便等待接收来自 PC 的信号。

```sh
sudo cat /dev/ttyTHS0
```

- **步骤 6:** 在 Putty 中随便输入一些文字，按下“ENTER”键，这些文字将会显示在 reComputer industrial 终端窗口中。

### RS485 连接概述 

在这里，您可以使用 USB 转 RS422 适配器来测试接口。我们在测试中使用了 [DTech USB 转 RS485 适配器](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) 

- **步骤 1:** 关闭板子

- **步骤 2:** 这里有三个设置 DIP 开关的选项。可以是 010 模式、011 模式或者 110 模式。每种模式对应的开关位置如下所示：

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

- **步骤 3:** 请按照下面所示的跳线线路图，将 USB 转 RS422 转换器通过跳线线连接到 DB9 连接器上。这里我们连接了上述提到过的适配器。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

- **步骤 4:** 将另一端连接到您 PC 上的一个 USB 端口。

- **步骤 5:** 打开板子

### RS485 使用说明

- **步骤 1:** 您可能需要为所使用的适配器安装驱动程序，或者 Windows 将自动为您安装驱动程序。通过在 Windows 搜索栏中键入“Device Manager”，进入设备管理器，检查您是否可以将连接的适配器识别为一个 COM 设备。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **步骤 2:** 如果您无法看到适配器，则需根据您所使用的适配器安装驱动程序。通常情况下，您可以在制造商的网站上找到这些驱动程序。对于我们正在使用的适配器，您可以访问 [这个页面](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

- **步骤 3:** 在PC端打开putty, 选择 **Terminal** 选项并进行如下设置：

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **步骤 4:** 选择 **Session**, 在 **Coonection type**下拉列表中选择 **Serial**,，根据**Device Manager**中显示的串口号设置相应的串口号，保持默认的波特率（9600），然后点击 **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **步骤 4:** 在 reTerminal industrial 终端窗口中，输入以下命令，以将信号从 reComputer 发送到 PC：

```sh
sudo su 
cd /sys/class/gpio 
echo 447 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reComputer Industrial" > /dev/ttyTHS0
```

现在我们会看到信息在putty上显示

- **步骤 5:** 在 reTerminal industrial 终端窗口中，输入以下命令，以等待从 PC 接收信号：

```sh
sudo su
cd /sys/class/gpio
echo 447 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

- **步骤 6:** 在Putty输入任何东西，然后点击**ENTER** ，信息会在reComputer Industrial终端窗口中显示。

## 千兆以太网连接器

reComputer Industrial 上有两个千兆以太网（10/100/1000M）连接器，它们的功能不同：

- 最左边的连接器直接连接到 Jetson 模块，可以提供 **PSE 802.3 af, 15W** 规格的 PoE 功能。这意味着您可以将 PoE IP 摄像机或任何其他 PoE 设备连接到此端口，为连接的设备提供电力。
- 另一个连接器通过 PCIe 到以太网 (LAN7430-I/Y9X) 模块连接。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/36.png"/></div>

每个以太网端口都有 2 个 LED（绿色和黄色），分别表示以下内容：

- 绿色 LED：只有在连接到 1000M 网络时才会点亮
- 黄色 LED：显示网络活动状态

## USB

reComputer Industrial 配备了 3 个 USB3.2 连接器，并拥有以下特性：
- 在双重叠加 USB 连接器上，上下 USB 端口共享一个限流集成电路，最大输出电流为 2.1A（单个也可以是 2.1A）。如果超过了 2.1A，则会进入过流保护状态。
- 在双重叠加 USB 连接器旁边的单个 USB 连接器上，最大输出电流为 2.1A。如果超过了 2.1A，则会进入过流保护状态。
- Orin NX 模块配备了 3 个 USB3.2，只有一个被用于 reComputer，并转换成 3 种方式。（USB3.1 TYPE-A x2 - J4 和 USB3.1 TYPE-A x1 - J3)。
- 仅支持 USB Host，不支持设备模式。
- 提供 5V 2.1A 电源。
- 可热插拔。

### 使用说明

我们会解释如何对连接的 USB 闪存驱动器进行简单的基准测试。

- **步骤 1:** 通过执行下面的命令来检查写入速度：

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **步骤 2:** 通过执行以下命令来检查读取速度。请确保在执行上面的写入速度命令后再执行此命令：

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

## 可配置 LED

板子上有一个绿色 LED，如下图所示。默认情况下，它作为显示设备正常运行的 LED。但是，您也可以通过系统编程来控制此 LED 开关。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/21.png"/></div>

### 使用说明 

- **步骤 1:** 在终端窗口中输入以下命令，以访问绿色 LED：

```sh
sudo -i
cd /sys/class/gpio
echo 318 > export 
cd PCC.01
echo out > direction 
```

- **步骤 2:** 关闭LED：

```sh
echo 0 > value 
```

- **步骤 3:** 打开LED：

```sh
echo 1 > value 
```

如果您想结束使用LED，可以执行以下命令：

```sh
cd ..
echo 318 > unexport
```

## 监控系统性能

我们可以使用 **jetson stats** 应用程序来监视系统组件的温度并检查其他系统详细信息，例如：

- 查看 CPU、GPU、RAM 使用率。
- 更改电源模式。
- 设置为最大时钟频率。
- 查看 JetPack 信息。

- **步骤 1:** 在 reComputer industrial 终端窗口中，输入以下命令

```sh
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

- **步骤 2:** 重启板子

```sh
sudo reboot
```

- **步骤 3:** 在终端中输入如下指令

```sh
jtop
```

现在 **jtop** 应用将会被打开，如下所示：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/30.png"/></div>

- **步骤 4:** 在此您可以浏览应用程序的不同页面，探索所有功能！

## WiFi 和 蓝牙

reComputer Industrial 在开箱时不具备 WiFi 和蓝牙功能。但是，板子上留有保留区域，以便将 WiFi / 蓝牙模块焊接到板子上。在这里，我们预留了支持 **BL-M8723DU1** 模块的空间。

### 连接概述 

- **步骤 1:** 如果您想自己焊接 **BL-M8723DU1** 模块，您可以进行焊接。但是我们不建议这么做，因为如果在此过程中损坏了板子，那么保修将会失效。我们建议使用我们的专业服务来帮助您将该模块焊接到板子上，并通过发送电子邮件至 order@seeed.cc 来提出您的要求。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/31.jpg"/></div>

- **步骤 2:** 连接两个天线到板子上的两个天线连接器，一个用于 WiFi，一个用于蓝牙。在这里，您需要使用一个 IPX 连接器。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/32.png"/></div>

### 使用说明

- **步骤 1:** 打开板子电源，一旦设备进入 Ubuntu 桌面，请单击右上角的下拉菜单，导航到 `Settings > Wi-Fi`，切换标题栏上的按钮以启用 WiFi。之后选择一个 WiFi 网络，输入所需的密码并连接到该网络。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/33.png"/></div>

- **步骤 2:** 在同一窗口中，选择“Bluetooth”，切换标题栏上的按钮以启用蓝牙。之后选择一个蓝牙设备连接到它。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/34.png"/></div>

## TPM

reComputer Industrial 配备了 TPM 接口，用于连接外部 TPM 模块。在这里，我们使用基于 Infineon SLB9670 的 TPM2.0 模块进行测试。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/114.jpg"/></div>

### 连接概述

按照下面的图示将 TPM 模块连接到 TPM 连接器上： 

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/115.jpg"/></div>

### 使用说明

通过执行以下命令来检查 TPM 模块是否被正确加载：

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

然后你会看到如下输出

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

## reComputer Industrial最优性能表现

如果您想在 reComputer industrial 版上启用最大性能，请按照以下说明操作：

- **步骤 1:** 输入以下命令以启用最大功率模式：

```sh
sudo nvpmodel -m 0
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/35.jpg"/></div>

这里它会要求输入 **YES** 以重新启动板子。 

- **步骤 2:** 板子启动后，输入以下命令以将 CPU 时钟频率设置为最大频率。

```sh
sudo jetson_clocks
```

## GPIO 表 

您可以访问 reComputer industrial 版的 GPIO 表格，以熟悉所有引脚映射。

在终端中执行以下命令即可进入 GPIO 表格：

```sh
sudo cat /sys/kernel/debug/gpio
```

然后，您将看到以下输出：

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

如遇到问题，请提交到 [论坛](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>