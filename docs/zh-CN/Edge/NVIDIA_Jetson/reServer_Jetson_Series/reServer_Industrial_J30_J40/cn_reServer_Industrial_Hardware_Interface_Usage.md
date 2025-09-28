---
description: reServer Industrial 硬件接口使用
title: reServer Industrial 硬件接口使用
keywords:
- reServer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reserver_industrial_hardware_interface_usage
last_update:
  date: 09/22/2023
  author: Lakshantha
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 硬件和接口使用

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/2.jpg"/></div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/3.jpg"/></div>

reServer Industrial 配备 2 个 2.5" SATA HDD/SSD 驱动器插槽，可在视频分析应用中轻松存储数百个本地视频录像。它还支持多种连接选项，包括 5 个 RJ-45 以太网端口、1 个 RS232/422/485、4 个隔离 DI/DO、1 个 CAN、4 个 USB3.1。无风扇设计和多样化的安装选项允许在 -20 到 60 ℃ 的环境中部署，非常适合更恶劣的环境和更重的负载。

reServer Industrial 配备被动散热器和无风扇设计，使其非常适合在苛刻环境中使用。被动散热器无需风扇即可实现高效散热，降低了因灰尘或其他污染物导致组件故障的风险。无风扇设计还降低了噪音水平和功耗，使其适合在对噪音敏感的环境中使用，并最大限度地降低能源成本。

reServer industrial 有 5 个 RJ45 千兆以太网端口，其中 4 个是 PoE PSE 端口，用于通过以太网为 IP 摄像头等设备供电。这消除了对单独电源的需求，使在没有现成电源插座的区域部署网络设备变得更容易。其余的千兆以太网端口用于连接到网络交换机或路由器，实现与网络上其他设备的通信和访问互联网。

- **无风扇紧凑型边缘 AI 服务器：** 由 NVIDIA Jetson™ Orin Nano/Orin NX 模块驱动，AI 性能范围从 20 TOPS 到 100 TOPS，在 0.7m/s 气流下工作温度范围更宽，从 -20 ~ 60°C
- **多流处理：** 5 个千兆以太网 RJ45（4 个用于 802.3af PSE），处理多个流并进行实时处理
- **可扩展存储：** 2 个驱动器插槽用于 2.5" SATA HDD/SSD，加上一个 M.2 2280 插槽用于 NVMe SSD
- **工业接口：** 包括 COM 端口、DI/DO 端口、CAN 端口、USB 3.1 和可选的 TPM2.0 模块
- **混合连接：** 支持 5G/4G/LTE/LoRaWAN®（模块可选），配备 Nano SIM 卡插槽
- **认证：** FCC、CE、UKCA、ROHS、KC

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

## 拆卸 reServer Industrial

首先，最好拆卸外壳以访问所有接口。请参考[此文档](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Assembly-Guide.pdf)了解更多信息。

## 千兆以太网连接器

reServer Industrial 上有 5 个以太网端口，规格为 10/100/1000Mbps，其中 4 个端口支持 PSE 802.3 af 15 W 标准，您可以直接将 PoE 摄像头连接到这些端口（LAN1-LAN4）。这些端口通过 PCIe 转以太网（LAN7430-I/Y9X）模块连接。但是，最左侧的剩余以太网端口（LAN0）仅用于连接路由器以获取互联网连接。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reServer-Industrial/5.jpg"/></div>

每个以太网端口上有 2 个 LED 指示灯（绿色和黄色），指示以下状态：

- 绿色 LED：仅在连接到 1000M 网络时点亮
- 黄色 LED：显示网络活动状态

### 使用方法

- 在连接 PoE 摄像头之前，您需要为 4 个以太网端口启用 PoE 功能。启用方法如下：

  <Tabs>
  <TabItem value="Jetpack 5.1.x" label="Jetpack 5.1.x">

    ```sh
    sudo -i
    cd /sys/class/gpio
    echo 315 > export 
    cd gpio315
    echo "out" > direction
    echo 1 > value
    ```

  </TabItem>
  <TabItem value="Jetpack 6" label="Jetpack 6">

    ```sh
    sudo apt update
    sudo apt install gpiod
    gpioset gpiochip2 15=1
    ```

  </TabItem>
  </Tabs>

### 将物理网络 IP 绑定到 eth 编号

  **接口 eth0 到 eth3 专用于 PoE，其中 eth3 特指 PoE4。**

  如果您需要为每个 POE 接口配置不同的 IP 地址，请按照以下说明操作：

  **步骤 1**：将 POE 连接到 reServer Industrial 设备。例如，要配置 eth3，请将 eth3 的名称设置为 POE3。

  ```bash
  sudo nmcli connection add type ethernet ifname eth4 con-name POE3
  ```

  **步骤 2**：将 POE3 的 IP 地址配置为 **192.168.6.6**。IP 地址可以根据实际使用情况进行自定义。

  ```bash
  sudo nmcli connection modify POE3 ipv4.addresses 192.168.6.6/24
  ```

  **步骤 3**: 将 POE3 的 IPv4 地址设置为手动配置。

  ```bash
  sudo nmcli connection modify POE3 ipv4.method manual
  ```

  **步骤 4**: 开始连接

  ```bash
  sudo nmcli connection up POE3
  ```

## SATA 连接器

reServer Industrial 支持 2 个 SATA 2.5" HDD/SSD，并配备了 SATA 数据和电源连接器。您可以按如下方式连接 HDD/SSD

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/23.jpg"/></div>

### 使用方法

系统启动后，您可以通过以下方式验证已连接的 SATA 驱动器

```sh
lsblk
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/28.png"/></div>

## RTC

reServer Industrial 配备了 2 种不同的方式来连接 RTC 电池

### 连接概述

- 方法 1：

将 **3V CR1220 纽扣电池** 连接到板上的 RTC 插座，如下所示。确保电池的 **正极 (+)** 端朝上

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/6.jpg"/></div>

- 方法 2：

将 **带 JST 连接器的 3V CR2302 纽扣电池** 连接到板上的 2 针 1.25mm JST 插座，如下所示

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/7.jpg"/></div>

### 使用方法

- **步骤 1：** 按照上述方法连接 RTC 电池

- **步骤 2：** 打开 reServer Industrial

- **步骤 3：** 在 Ubuntu 桌面上，点击右上角的下拉菜单，导航到 `Settings > Date & Time`，通过以太网线连接到网络并选择 **Automatic Date & Time** 以自动获取日期/时间

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
如果您没有通过以太网连接到互联网，您可以在此处手动设置日期/时间
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

开箱即用，reServer Industrial 包含一个连接到 M.2 Key M 插槽的 128GB SSD，该 SSD 预装了 JetPack 系统。

### 连接概述

如果您想要移除包含的 SSD 并安装新的 SSD，可以按照以下步骤操作。这里我们只推荐使用 Seeed 的 [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) 和 [1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html) 存储容量的 SSD，因为我们只测试了这些 SSD。此外，该接口支持 PCIe Gen4.0 SSD。

- **步骤 1：** 移除预装的 SSD 螺丝

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/8.jpg"/></div>

- **步骤 2：** 通过从 SSD 连接器滑出来移除 SSD

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/9.jpg"/></div>

- **步骤 3：** 插入新的 SSD 并重新拧紧螺丝

### 使用方法

我们将解释如何对连接的 SSD 进行简单的基准测试

- **步骤 1：** 通过执行以下命令检查写入速度

```sh
sudo dd if=/dev/zero of=/home/$USER/test bs=1M count=512 conv=fdatasync
```

- **步骤 2：** 通过执行以下命令检查读取速度。确保在执行上述写入速度命令后再执行此命令。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/$USER/test of=/dev/null bs=1M count=512
```

### mini PCIe

reServer Industrial 配备了一个 mini PCIe 连接器，支持 4G 和 LoRa 模块。但是，您一次只能连接 4G 模块或 LoRa 模块中的一个。一些 4G 模块内置了 GPS 功能。我们也会讨论这个功能。

#### 4G 模块连接概述

目前该板支持 EC25EUXGA 和 EC20CEHCLG 模块。

- **步骤 1：** 如果板子已经开机，请先关机

- **步骤 2：** 移除附带的支柱。该支柱仅在使用 M.2 Key B 接口时需要

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/10.jpg"/></div>

- **步骤 3：** 将 4G 模块滑入 mini PCIe 插槽，使用预装的螺丝将其固定到 2 个孔中以固定 4G 模块

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/11.jpg"/></div>

- **步骤 4：** 将天线连接到标记为 **MAIN** 的天线连接器。这里您需要使用 IPEX 连接器

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/12.jpg"/></div>

- **步骤 5：** 将支持 4G 的 nano SIM 卡插入板上的 SIM 卡插槽，确保 SIM 卡的金属表面朝上。这里要将卡完全插入，使其撞击内部弹簧后弹回并锁定到位。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
如果您想要取出 SIM 卡，请将卡推入以撞击内部弹簧，这样 SIM 卡就会从插槽中弹出
:::

- **步骤 6：** 在 **J8 (Control and UART) Header** 上的 **SIM_MUX_SEL** 和 **GND** 引脚之间添加跳线

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/14.jpg"/></div>

- **步骤 6：** 开机

#### 4G 模块使用 - 测试拨号

使用 EC25 模块时，模块会自动启动并准备使用。但是，使用 EC20 模块时，您需要重置模块才能使其工作

- **步骤 1：** 如果您使用的是 EC25 模块，可以跳过此步骤。但如果您使用的是 EC20 模块，请输入以下命令来访问 GPIO309 引脚，该引脚负责重置 4G 模块

```sh
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 1 > value
```

对于 EC25 模块，LED2 将在板子启动后立即亮起绿灯。对于 EC20 模块，LED2 将在按照上述说明重置模块后亮起绿灯

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

- **步骤 2：** 安装 minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **步骤 3：** 进入连接的 4G 模块的串口控制台，这样我们就可以输入 AT 命令并与 4G 模块进行交互

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

#### 4G 模块使用 - 连接到互联网

##### EC25 模块

如果您使用的是 EC25 模块，请按照以下步骤操作

- **步骤 1：** 按照上述说明打开 4G 模块的串口控制台（4G 模块使用 - 测试拨号部分）后，执行以下命令连接到互联网。这里请将 **YOUR_APN** 替换为您的网络提供商的 APN

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

##### EC20 模块

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

#### 4G 模块使用 - 连接到 GPS

一些 4G 模块内置了 GPS 模块。EC25EUXGA 和 EC20CEHCLG 模块都内置了 4G 模块。

- **步骤 1：** 通过执行以下命令重启 GPS 模块

```sh
echo -e "AT+QGPS=1\r\n" > /dev/ttyUSB2
echo -e "AT+QGPS=0\r\n" > /dev/ttyUSB2
```

- **步骤 2:** 通过执行以下命令获取 GPS 数据

```sh
sudo cat /dev/ttyUSB1
```

您将看到如下输出

```sh
seeed@seeed-x:~$ sudo cat /dev/ttyUSB1
[sudo] password for seeed:
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSA,A,1,,,,,,,,,,,,,,,,*32
$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPVTG,,T,,M,,N,,K,N*2C
$GPGSA,A,1,,,,,,,,,,,,,,,,*32
$GPGGA,,,,,,0,,,,,,,,*66
$GPRMC,,V,,,,,,,,,,N*53
$GPVTG,,T,,M,,N,,K,N*2C
```

#### LoRa 模块连接概述

目前此板卡支持 WM1302 SPI 模块。您可以使用我们商城上提供的 [美国版本](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html) 或 [欧洲版本](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)。

- **步骤 1：** 如果板卡已经开机，请先关闭电源

- **步骤 2：** 将 LoRa 模块滑入 mini PCIe 插槽，使用预装的螺丝将其固定到 2 个孔位上，以确保 LoRa 模块牢固就位

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/16.jpg"/></div>

- **步骤 3：** 将天线连接到天线连接器。这里您需要使用 IPEX 连接器

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/17.jpg"/></div>

:::note
确保在 **J8 (Control and UART) Header** 上的 **SIM_MUX_SEL** 和 **GND** 引脚之间没有跳线。此跳线仅在使用 4G 模块时需要
:::

- **步骤 4：** 给板卡上电

#### LoRa 模块使用 - 测试 LoRa RF

当 LoRa 模块连接后，您将看到模块上的绿色和蓝色 LED 灯亮起

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

如果您看到以下结果并且 LoRa 模块上的 LED 变为红色，这意味着模块正在成功传输射频信号

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

要停止传输，您可以在键盘上按 **CTRL + C**。

#### LoRa 模块使用 - 连接到 TTN

现在我们将连接到 TTN（The Things Network）并将 reServer Industrial 用作 TTN LoRaWAN 网关

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
**Gateway ID** 已经自动为您填写。但是，您可以将其更改为您喜欢的任何内容。**Gateway name** 不是必须填写的。但是，您也可以根据您的偏好填写
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

reServer Industrial 配备了一个 M.2 Key B 连接器，支持 4G 和 5G 模块。目前我们已经测试了 **SIM8202G-M2 5G 模块**

### 5G 模块连接概述

- **步骤 1：** 如果板子已经开机，请先关机

- **步骤 2：** 确保支撑柱已就位，然后拆下支撑柱上的顶部螺丝

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/18.jpg"/></div>

- **步骤 2：** 将 5G 模块滑入 M.2 Key B 插槽，并拧入支撑柱螺丝以固定 5G 模块（关于支撑柱的说明）

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/19.jpg"/></div>

- **步骤 3：** 将 4 根天线连接到模块上的天线连接器。这里您需要使用 IPEX 4 连接器

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/20.jpg"/></div>

- **步骤 4：** 将支持 5G 的 nano SIM 卡插入板子上的 SIM 卡插槽，确保 SIM 卡的金属表面朝下。这里要将卡片完全插入，使其撞击内部弹簧后弹回并锁定到位。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
如果您想要取出 SIM 卡，请将卡片推入以撞击内部弹簧，这样 SIM 卡就会从插槽中弹出
:::

- **步骤 5：** 给板子上电

### 5G 模块使用 - 测试拨号

使用 SIM8202G-M2 5G 模块时，模块不会自动启动。因此我们首先需要切换几个 GPIO 来使其启动

- **步骤 1：** 输入以下命令来启动 5G 模块

```sh
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

一旦执行上述操作，LED2 将亮起绿色

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

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

reServer Industrial 支持 4 个数字输入和 4 个数字输出通道，所有通道都经过光学隔离，可有效保护主板免受电压尖峰或其他电气干扰的影响。在同一个连接器上还有一个 CAN 接口，我们将在本 wiki 的后面部分讨论。

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
      <td rowSpan={4}>12V 数字输入，接地信号需要<br />连接到 GND_DI (引脚2/4/6)</td>
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
      <td rowSpan={4}>数字输出，最大耐受<br />电压 40V，接地信号需要<br />连接到 GND_DO(引脚8/10)</td>
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
      <td rowSpan={2}>具有标准差分信号的 CAN 总线，<br />接地信号需要连接到 GND_ISO (引脚 12)</td>
    </tr>
    <tr>
      <td />
      <td>CL</td>
    </tr>
    <tr>
      <td>接地</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>12V 数字输入的参考接地信号，<br />也是 DI 的回流路径</td>
    </tr>
    <tr>
      <td />
      <td>GND_DO</td>
      <td>数字输出的参考接地信号，也是 DO 的回流路径</td>
    </tr>
    <tr>
      <td />
      <td>CG</td>
      <td>CAN 的参考接地信号</td>
    </tr>
  </tbody>
</table>

### DI 连接概述

您可以按照下图进行 DI 连接。最好在 DI 线路上串联一个电阻。我们已经测试了连接到 DI1 引脚的 4.7kΩ 电阻。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### DI 使用方法

您需要在 DI 线路上输入 12V 电压才能被检测为输入。启用 DI / DO 的命令在 Jetpack 5 和 Jetpack 6 之间有所不同。

<Tabs>
<TabItem value="Jetpack 5" label="Jetpack 5">

- **步骤 1：** 按照上图所示连接到 **DI1 引脚** 并输入 **12V**

- **步骤 2：** 为 DI1 打开 GPIO，如下所示

```sh
sudo su 
cd /sys/class/gpio
echo 453 > export 
cd PQ.05
```

:::note
您可以参考 **DI/ DO 引脚分配表** 来查找 GPIO 编号和 BGA 编号。在上面的示例中，对于 DI1 引脚，GPIO 编号是 453，BGA 编号是 PQ.05
:::

- **步骤 3：** 执行以下命令检查状态

```sh
cat value
```

如果输出为0，表示有12V输入。如果输出为1，表示没有输入电压。

</TabItem>
<TabItem value="Jetpack 6" label="Jetpack 6">

- **步骤1：** 按照上图所示连接到 **DI1 引脚** 并输入 **12V**

- **步骤2：** 检查chip0上DI1的 **线偏移量**：

```sh
gpioinfo gpiochip0
```

根据 BGA 编号找到对应的**线偏移量**。DI1 的**线偏移量**是 `105`。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/reserver-di.jpg"/></div>

:::note
您可以参考 **DI/ DO 引脚分配表** 来找到 GPIO 编号和 BGA 编号。在上面的示例中，对于 DI1 引脚，GPIO 编号是 453，BGA 编号是 PQ.05
:::

- **步骤 3：**
读取 gpiochip0 中对应 DI1 的**线偏移量 105**：

```sh
sudo gpioget gpiochip0 105
```

输出 0 表示低电平。输出 1 表示高电平。  
命令格式如下 `sudo gpioset <gpiochip> <line>`。

</TabItem>
</Tabs>

### DO 连接概述

您可以按照下图进行 DO 连接。最好在 DO 线路中串联一个电阻。这里我们使用 4.7kΩ 电阻进行了测试

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### DO 使用方法

这里您需要按照上图连接负载。测试的最简单方法是连接万用表（如果您有的话），或者连接需要最大电压小于 40V 的负载。启用 DI / DO 的命令在 Jetpack 5 和 Jetpack 6 之间有所不同。

<Tabs>
<TabItem value="Jetpack 5" label="Jetpack 5">

- **步骤 1：** 按照上图所示连接到 **DO1 引脚**，输入**最大 40V**

- **步骤 2：** 按如下方式打开 D01 的 GPIO

```sh
sudo su 
cd /sys/class/gpio
echo 399 > export 
cd PI.00
echo out > direction
```

:::note
您可以参考 **DI/ DO 引脚分配表** 来查找 GPIO 编号和 BGA 编号。在上面的示例中，对于 DO1 引脚，GPIO 编号是 399，BGA 编号是 PI.00
:::

- **步骤 3：** 执行以下命令来打开引脚

```sh
echo 1 > value
```

</TabItem>
<TabItem value="Jetpack 6" label="Jetpack 6">

- **步骤 1：** 按照上图所示连接到 **DO1 引脚**，输入**最大 40V**

- **步骤 2：** 检查 chip0 上 DO1 的**线路偏移**：

```sh
gpioinfo gpiochip0
```

根据 BGA 编号找到对应的**线路偏移量**。DO1 的**线路偏移量**是 `51`。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/reserver-do.jpg"/></div>

:::note
您可以参考 **DI/ DO 引脚分配表** 来找到 GPIO 编号和 BGA 编号。在上面的示例中，对于 DO1 引脚，GPIO 编号是 399，BGA 编号是 PI.00
:::

- **步骤 3：**
使用以下命令控制 DO1 的状态：

```sh
# set to 12v
sudo gpioset --mode=wait gpiochip0 51=0

# set to 0v
sudo gpioset --mode=wait gpiochip0 51=1
```

命令格式如下 `sudo gpioset <gpiochip> <line>=<value>`。

</TabItem>
</Tabs>

如果负载被打开或万用表输出您输入的电压，则测试正常工作。

## CAN

reServer Industrial 具有支持 5Mbps CAN FD（控制器局域网灵活数据速率）协议的 CAN 接口。CAN 接口使用电容隔离进行隔离，提供出色的 EMI 保护，确保在工业和自动化应用中的可靠通信。默认安装了 120Ω 的终端电阻，您可以使用 GPIO 切换此电阻的开关状态。

注意：CAN 接口使用隔离电源，这意味着连接到 CAN 接口的外部设备的地信号应连接到 CG 引脚

### 与 USB 转 CAN 适配器的连接概述

要测试 CAN 总线并与其接口，请将 USB 转 CAN 适配器连接到板上的 CAN 连接器，如下所示

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

这里我们使用了我们商城中提供的 [USB 转 CAN 分析仪适配器（带 USB 线）](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)。

### 与 USB 转 CAN 适配器的使用

- **步骤 1：** 从制造商网站下载您使用的 USB 转 CAN 适配器的驱动程序并安装。在我们的情况下，根据我们使用的适配器，驱动程序可以在[这里](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)找到

- **步骤 2：** 一些适配器还为 PC 提供必要的软件，以便与 CAN 设备通信。在我们的情况下，根据我们使用的适配器，我们已经下载并安装了软件，可以在[这里](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)找到

- **步骤 3：** 在 reServer Industrial 上打开终端窗口，执行以下命令来配置和启用 CAN 接口

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

- **步骤 9：** 在 reServer Industrial 上，执行以下命令向 PC 发送 CAN 信号

```sh
cansend can0 123#abcdabcd
```

现在您将看到软件接收到的上述信号，如下所示

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **步骤 10：** 在 reServer Industrial 上，执行以下命令等待接收来自 PC 的 CAN 信号

```sh
candump can0 &
```

- **步骤 11：** 在 CAN 软件上，点击 **Send a single frame**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

现在您将看到 reServer Industrial 接收到的数据，如下所示

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

#### 与 reTerminal DM 的连接概述

如果您有 [reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html)，您可以直接与其通信，因为 reTerminal DM 也有 CAN 接口。

参考下图通过 CAN 连接 reServer Industrial 和 reTerminal DM

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

### 与 reTerminal DM 的使用

- **步骤 1：** 在使用 reTerminal DM 之前，请访问[此 wiki](https://wiki.seeedstudio.com/cn/reterminal-dm) 来开始使用 reTerminal DM

- **步骤 2：** 在 reServer Industrial 上打开终端窗口，执行以下命令来配置和启用 CAN 接口

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

- **步骤 6：** 在 reTerminal DM 上，执行以下命令等待接收来自 reServer Industrial 的 CAN 信号

```sh
candump can0 &
```

- **步骤 7：** 在 reServer Industrial 上，执行以下命令向 reTerminal Industrial 发送 CAN 信号

```sh
cansend can0 123#abcdabcd
```

现在您将看到它被 reTerminal DM 接收，如下所示

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **步骤 8：** 重复**步骤 6 和步骤 7**，但交换设备。使用 reTerminal DM 发送 CAN 信号，使用 reServer Industrial 接收信号

## RS232/ RS422/ RS485 接口

reServer Industrial 具有一个 DB9 连接器，支持 RS232、RS422 和 RS485 通信协议，板载有一个 DIP 开关面板，用于在不同接口选项之间切换

您可以看到 DIP 开关面板如下：

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/21.jpg"/></div>

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

上表考虑了DIP开关面板的前三个开关。然而，第四个开关负责切换转换速率，这与数据速率直接相关

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
      <td>SLEW= Vcc<br />此RS232/RS422/RS485多协议收发器限制通信速率如下：<br />RS-232：最大数据速率为1.5Mbps<br />RS-485/RS-422：最大数据速率为10Mbps<br />实际最大数据速率取决于所使用的Jetson SO M</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232：最大数据速率为250Kbps<br />RS-485/RS-422：最大数据速率为250kbps</td>
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

在这里，您可以使用 USB 转 RS232 适配器来测试接口。我们使用了 [UGREEN USB 转 RS232 适配器](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1) 进行测试。

- **步骤 1：** 关闭设备

- **步骤 2：** 这里我们有 2 个选项来设置 DIP 开关。可以选择 001 模式或 101 模式。每种模式的开关位置如下所示

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

- **步骤 3：** 将 USB 转 RS232 适配器连接到 DB9 连接器

- **步骤 4：** 将另一端连接到您 PC 上的一个 USB 端口

- **步骤 5：** 开启设备

### RS232 使用方法

- **步骤 1：** 您可能需要为正在使用的适配器安装驱动程序，或者 Windows 会自动为您安装驱动程序。在 Windows 搜索中输入 **设备管理器** 来打开设备管理器，检查是否可以看到连接的适配器作为 COM 设备。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

- **步骤 2：** 如果您看不到适配器，需要根据您使用的适配器安装驱动程序。您通常可以在制造商网站上找到这些驱动程序。对于我们使用的适配器，您可以访问[此页面](https://www.ugreen.com/pages/download)，搜索型号 **20201** 并相应地下载驱动程序

- **步骤 3：** 在 PC 上打开 Putty，选择 **Terminal** 部分并设置以下内容

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **步骤 4：** 选择 **Session**，在 **Connection type** 下选择 **Serial**，根据您在 **设备管理器** 中看到的内容设置串口号，保持速度为默认值（9600）并点击 **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

- **步骤 4：** 在 reServer Industrial 终端窗口中，输入以下内容从 reServer Industrial 向 PC 发送信号

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reServer Industrial" > /dev/ttyTHS0
```

现在您将在 Putty 上看到此消息显示

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

- **步骤 5：** 在 reTerminal Industrial 终端窗口中，输入以下命令等待接收来自 PC 的信号

```sh
sudo cat /dev/ttyTHS0
```

- **步骤 6：** 在 Putty 中，输入任何内容，按 **ENTER** 键，它将显示在 reServer Industrial 终端窗口中

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

- **步骤 3：** 在 PC 上打开 Putty，选择 **Terminal** 部分，设置以下内容

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **步骤 4：** 选择 **Session**，在 **Connection type** 下，选择 **Serial**，根据您在 **Device Manager** 中看到的内容设置串口号，保持速度为默认值 (9600)，然后点击 **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **步骤 4：** 在 reServer Industrial 终端窗口中，输入以下内容以从 reServer Industrial 向 PC 发送信号

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

现在您将在 Putty 上看到此消息显示

- **步骤 5：** 在 reTerminal Industrial 终端窗口中，输入以下命令等待接收来自 PC 的信号

```sh
sudo cat /dev/ttyTHS0
```

- **步骤 6：** 在 Putty 上，输入任何内容，按 **ENTER** 键，它将显示在 reServer Industrial 终端窗口中

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

- **步骤 1：** 您可能需要为正在使用的适配器安装驱动程序，或者 Windows 会自动为您安装驱动程序。通过在 Windows 搜索中输入 **Device Manager** 来打开设备管理器，检查是否可以看到连接的适配器作为 COM 设备。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **步骤 2：** 如果您看不到适配器，您需要根据正在使用的适配器安装驱动程序。您通常可以在制造商网站上找到这些驱动程序。对于我们使用的适配器，您可以访问[此页面](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

- **步骤 3：** 在 PC 上打开 Putty，选择 **Terminal** 部分并设置以下内容

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **步骤 4：** 选择 **Session**，在 **Connection type** 下，选择 **Serial**，根据您在 **Device Manager** 中看到的内容设置串口号，保持速度为默认值 (9600) 并点击 **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **步骤 4：** 在 reServer Industrial 终端窗口中，输入以下内容以从 reServer Industrial 向 PC 发送信号

```sh
sudo su 
cd /sys/class/gpio 
echo 460 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reServer Industrial" > /dev/ttyTHS0
```

现在您将在 Putty 上看到此消息显示

- **步骤 5：** 在 reTerminal Industrial 终端窗口中，输入以下命令等待接收来自 PC 的信号

```sh
sudo su
cd /sys/class/gpio
echo 460 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

- **步骤 6：** 在 Putty 上，输入任何内容，按 **ENTER** 键，它将显示在 reServer Industrial 终端窗口中

## USB

reServer Industrial 板载 3 个 USB3.2 连接器，具有以下特性：

- 在双层堆叠 USB 连接器上，上下 USB 端口共享一个限流 IC，总供电能力为最大输出电流 2.1A（单个也可以是 2.1A）。如果超过 2.1A，将进入过流保护状态。
- 在双层堆叠 USB 连接器旁边的单个 USB 连接器上，它的总供电能力为最大输出电流 2.1A。如果超过 2.1A，将进入过流保护状态。
- Orin NX 模块配备 3 个 USB3.2，其中只有一个在 reServer Industrial 中使用并转换为 3 路。（USB3.1 TYPE-A x2 - J4 和 USB3.1 TYPE-A x1 -J3）。
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

### 可配置LED

如下图所示，板上有一个绿色LED。默认情况下，它作为显示设备正常运行的LED。但是，您也可以通过系统编程控制此LED的开启和关闭

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/22.jpg"/></div>

### 使用方法

- **步骤 1：** 在终端窗口中输入以下命令来访问绿色LED

```sh
sudo -i
cd /sys/class/gpio
echo 329 > export 
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
echo 329 > unexport
```

## 监控系统性能

我们可以使用 **jetson stats** 应用程序来监控系统组件的温度并检查其他系统详细信息，例如

- 查看 CPU、GPU、RAM 使用率
- 更改电源模式
- 设置为最大时钟频率
- 检查 JetPack 信息

- **步骤 1：** 在 reServer Industrial 终端窗口中，输入以下内容

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

## TPM

reServer Industrial 配备了 TPM 接口，用于连接外部 TPM 模块。在这里我们已经使用基于 Infineon SLB9670 的 TPM2.0 模块进行了测试。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/24.jpg"/></div>

### 连接概述

将 TPM 模块连接到 TPM 连接器，如下所示

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/27.jpg"/></div>

### 使用方法

通过执行以下命令检查 TPM 模块是否正确加载

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

您将看到如下输出

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

## reServer Industrial 上的最大性能

如果您想在 reServer Industrial 上启用最大性能，请按照以下说明操作

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

您可以访问 reServer Industrial 的 GPIO 表格来熟悉所有引脚映射。

在终端中执行以下命令来访问它

```sh
sudo cat /sys/kernel/debug/gpio
```

你将看到输出如下

```sh
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

## 资源

(更改链接)

- [reServer Industrial 数据表](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)
- [reServer Industrial 参考指南](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Reference-Guide.pdf)
- [NVIDIA Jetson 设备和载板对比](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [reServer Industrial 3D 文件](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## 技术支持

请随时将问题提交到我们的[论坛](https://forum.seeedstudio.com/)。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
