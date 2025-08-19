---
description: reServer 工业硬件接口使用
title: reServer 工业硬件接口使用
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


要了解如何使用 reServer Industrial 板上的所有硬件和接口，我们建议您参考以下 Wiki 部分。

reServer Industrial 配备了 2 个 2.5 英寸 SATA HDD/SSD 驱动器托架，可轻松在视频分析应用中存储数百个本地视频片段。此外，它支持多种连接选项，包括 5 个 RJ-45 以太网端口、1 个 RS232/422/485 接口、4 个隔离 DI/DO 接口、1 个 CAN 接口和 4 个 USB3.1 接口。无风扇设计和多样化的安装选项允许其在 -20 至 60 ℃ 的环境中部署，非常适合更恶劣的环境和更重的负载。

reServer Industrial 配备了被动散热片和无风扇设计，使其非常适合在苛刻的环境中使用。被动散热片无需风扇即可实现高效散热，从而降低了因灰尘或其他污染物导致组件故障的风险。无风扇设计还降低了噪音水平和功耗，非常适合在对噪音敏感的环境中使用，同时还能最大限度地降低能源成本。

reServer Industrial 配备了 5 个 RJ45 GbE 端口，其中 4 个是 PoE PSE 端口，可为 IP 摄像头等设备提供以太网供电。这消除了单独电源的需求，使得在没有现成电源插座的区域更容易部署网络设备。剩余的 GbE 端口用于连接到网络交换机或路由器，从而实现与网络上其他设备的通信以及访问互联网。

- **无风扇紧凑型边缘 AI 服务器：** 搭载 NVIDIA Jetson™ Orin Nano/Orin NX 模块，AI 性能范围从 20 TOPS 到 100 TOPS，支持 -20 ~ 60°C 的更宽温度范围，气流为 0.7m/s
- **多流处理：** 5× GbE RJ45（其中 4 个支持 802.3af PSE），可处理多路流的实时处理
- **可扩展存储：** 提供 2 个 2.5 英寸 SATA HDD/SSD 驱动器托架，以及一个用于 NVMe SSD 的 M.2 2280 插槽
- **工业接口：** 包括 COM 端口、DI/DO 端口、CAN 端口、USB 3.1，以及可选的 TPM2.0 模块
- **混合连接：** 支持 5G/4G/LTE/LoRaWAN®（模块可选），配备 Nano SIM 卡插槽
- **认证：** FCC、CE、UKCA、ROHS、KC

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a></div>

## 拆解 reServer Industrial

首先，最好先拆解外部外壳以便访问所有接口。请参考[此文档](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Assembly-Guide.pdf)了解更多信息。

## 千兆以太网连接器

reServer Industrial 配备了 5 个以太网端口，支持 10/100/1000Mbps 规格，其中 4 个端口支持 PSE 802.3 af 15 W 功率（LAN1-LAN4），可直接连接 PoE 摄像头。这些端口通过 PCIe 到以太网模块（LAN7430-I/Y9X）连接。然而，最左侧的以太网端口（LAN0）仅用于连接路由器以访问互联网。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reServer-Industrial/5.jpg"/></div>

每个以太网端口上都有 2 个 LED 指示灯（绿色和黄色），其含义如下：

- 绿色 LED：仅在连接到 1000M 网络时亮起
- 黄色 LED：显示网络活动状态

### 使用方法

- 在连接 PoE 摄像头之前，需要为 4 个以太网端口启用 PoE 功能。启用方法如下：

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

### 将物理网络 IP 绑定到 eth 接口
  **接口 eth0 到 eth3 被指定用于 PoE，其中 eth3 特别被称为 PoE4。**

  如果需要为每个 PoE 接口配置不同的 IP 地址，请按照以下步骤操作：

  **步骤 1**：将 PoE 连接到 reServer Industrial 设备。例如，要配置 eth3，将 eth3 的名称设置为 POE3。

  ```bash
  sudo nmcli connection add type ethernet ifname eth4 con-name POE3
  ```

  **步骤 2**：将 POE3 的 IP 地址配置为 **192.168.6.6**。IP 地址可以根据实际使用情况自定义。
  ```bash
  sudo nmcli connection modify POE3 ipv4.addresses 192.168.6.6/24
  ```

  **步骤 3**：将 POE3 的 IPv4 地址设置为手动配置。

  ```bash
  sudo nmcli connection modify POE3 ipv4.method manual
  ```

  **步骤 4**：启动连接
  ```bash
  sudo nmcli connection up POE3
  ```

## SATA 连接器

reServer Industrial 支持 2 个 SATA 2.5" HDD/SSD，并配备 SATA 数据和电源连接器。您可以按以下方式连接 HDD/SSD：

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/23.jpg"/></div>

### 使用方法

系统启动后，您可以通过以下命令验证连接的 SATA 驱动器：

```sh
lsblk
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/28.png"/></div>

## RTC

reServer Industrial 配备了两种不同方式连接 RTC 电池。

### 连接概览

- 方法 1：

将 **3V CR1220 纽扣电池**连接到主板上的 RTC 插槽，如下图所示。确保电池的**正极（+）**朝上。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/6.jpg"/></div>

- 方法 2：

将带有 JST 接头的 **3V CR2302 纽扣电池**连接到主板上的 2 针 1.25mm JST 插槽，如下图所示。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/7.jpg"/></div>

### 使用方法

- **步骤 1：** 按上述方法连接 RTC 电池。

- **步骤 2：** 打开 reServer Industrial。

- **步骤 3：** 在 Ubuntu 桌面上，点击右上角的下拉菜单，导航到 `Settings > Date & Time`，通过以太网线连接到网络，并选择**自动日期和时间**以自动获取日期/时间。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
如果您未通过以太网连接到互联网，可以在此手动设置日期/时间。
:::

- **步骤 4：** 打开终端窗口，执行以下命令检查硬件时钟时间：

```sh
sudo hwclock
```

您将看到如下输出，但这不是正确的日期/时间：

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

- **步骤 5：** 通过以下命令将硬件时钟时间更改为当前系统时钟时间：

```sh
sudo hwclock --systohc
```

- **步骤 6：** 移除任何连接的以太网线，以确保不会从互联网获取时间，然后重启设备：

```sh
sudo reboot
```

- **步骤 7：** 检查硬件时钟时间，验证即使设备断电，日期/时间仍保持不变。

现在我们将创建一个脚本，在每次启动时始终从硬件时钟同步系统时钟。

- **步骤 8：** 使用您喜欢的文本编辑器创建一个新的 shell 脚本。这里我们使用 **vi** 文本编辑器：

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **步骤 9：** 按 **i** 进入**插入模式**，复制并粘贴以下内容到文件中：

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **步骤 10：** 使脚本可执行：

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **步骤 11：** 创建一个 systemd 文件：

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

- **步骤 12：** 在文件中添加以下内容：

```sh
[Unit]
Description=Change system clock from hardware clock

[Service]
ExecStart=/usr/bin/hwtosys.sh

[Install]
WantedBy=multi-user.target
```

- **步骤 13：** 重新加载 systemctl 守护进程：

```sh
sudo systemctl daemon-reload 
```

- **步骤 14：** 启用新创建的服务以在启动时运行，并启动服务：

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **步骤 15：** 验证脚本是否作为 systemd 服务运行：

```sh
sudo systemctl status hwtosys.service
```

- **步骤 16：** 重启设备，您将看到系统时钟现在与硬件时钟同步。

## M.2 Key M

开箱即用，reServer Industrial 配备了一个连接到 M.2 Key M 插槽的 128GB SSD，并预装了 JetPack 系统。

### 连接概览

如果您想移除预装的 SSD 并安装新的 SSD，可以按照以下步骤操作。我们仅推荐使用 Seeed 的 SSD，包括 [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) 和 [1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html) 存储容量，因为我们仅测试过这些 SSD。此外，该接口支持 PCIe Gen4.0 SSD。

- **步骤 1：** 移除预装 SSD 的螺丝

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/8.jpg"/></div>

- **步骤 2：** 将 SSD 从 SSD 连接器中滑出以移除

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/9.jpg"/></div>

- **步骤 3：** 插入新的 SSD 并重新拧紧螺丝

### 使用方法

我们将解释如何对连接的 SSD 进行简单的基准测试。

- **步骤 1：** 通过执行以下命令检查写入速度

```sh
sudo dd if=/dev/zero of=/home/$USER/test bs=1M count=512 conv=fdatasync
```

- **步骤 2：** 通过执行以下命令检查读取速度。在执行写入速度测试后再执行此命令。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/$USER/test of=/dev/null bs=1M count=512
```

### mini PCIe

reServer Industrial 配备了一个 mini PCIe 连接器，支持 4G 和 LoRa 模块。然而，您一次只能连接一个 4G 模块或一个 LoRa 模块。一些 4G 模块还嵌入了 GPS 功能，我们也会对此进行讨论。

#### 4G 模块连接概览

目前该主板支持 EC25EUXGA 和 EC20CEHCLG 模块。

- **步骤 1：** 如果主板已通电，请先关闭电源

- **步骤 2：** 移除预装的支架。该支架仅在使用 M.2 Key B 接口时需要。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/10.jpg"/></div>

- **步骤 3：** 将 4G 模块插入 mini PCIe 插槽，使用预装的螺丝将其固定在两个孔上

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/11.jpg"/></div>

- **步骤 4：** 将天线连接到标有 **MAIN** 的天线连接器。这里需要使用 IPEX 连接器。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/12.jpg"/></div>

- **步骤 5：** 将支持 4G 的 nano SIM 卡插入主板上的 SIM 卡插槽，确保 SIM 卡的金色表面朝上。将卡完全插入，直到触碰到内部弹簧并锁定到位。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
如果您想移除 SIM 卡，请按下卡片以触碰内部弹簧，这样 SIM 卡就会从插槽中弹出。
:::

- **步骤 6：** 在 **J8（控制和 UART）接头** 上的 **SIM_MUX_SEL** 和 **GND** 引脚之间添加跳线。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/14.jpg"/></div>

- **步骤 7：** 打开主板电源

#### 4G 模块使用 - 测试拨号

使用 EC25 模块时，模块会自动启动并准备就绪。然而，使用 EC20 模块时，您需要重置模块才能使其工作。

- **步骤 1：** 如果您使用的是 EC25 模块，可以跳过此步骤。如果您使用的是 EC20 模块，请输入以下命令以访问负责重置 4G 模块的 GPIO309 引脚：

```sh
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 1 > value
```

对于 EC25 模块，当主板启动时，LED2 会亮起绿色。对于 EC20 模块，在按照上述步骤重置模块后，LED2 会亮起绿色。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

- **步骤 2：** 安装 minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **步骤 3：** 进入连接的 4G 模块的串行控制台，以便输入 AT 命令并与 4G 模块交互

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **步骤 4：** 按 **Ctrl+A**，然后按 **E** 打开本地回显

- **步骤 5：** 输入命令 **"AT"** 并按回车键。如果您看到响应为 "OK"，则说明 4G 模块工作正常。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

- **步骤 6：** 输入命令 **"ATI"** 检查模块信息

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

- **步骤 7：** 测试模块，输入以下命令拨打另一个电话号码：

```sh
ATD<phone_number>;
```

您将看到以下输出：

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

如果输入的电话号码可以接听电话，则说明模块工作正常。

#### 4G 模块使用 - 连接到互联网

##### EC25 模块

如果您使用的是 EC25 模块，请按照以下步骤操作：

- **步骤 1：** 按照上述步骤打开 4G 模块的串行控制台（参见“4G 模块使用 - 测试拨号”部分），然后执行以下命令连接到互联网。这里将 **YOUR_APN** 替换为您的网络提供商的 APN。

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/89.jpg"/></div>

连接成功后，应该输出 **OK**，如上图所示。

- **步骤 2：** 通过执行以下命令重启 4G 模块

```sh
AT+CFUN=1,1
```

现在，您将在串口终端上失去与 4G 模块的连接。

- **步骤 3：** 按下 **CTRL + A** 然后 **Q** 关闭 **minicom**

- **步骤 4：** 输入 **ifconfig**，您将在 **usb0** 接口上看到一个 IP 地址

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/93.png"/></div>

- **步骤 5：** 您可以尝试通过以下命令 ping 一个网站，以检查是否有互联网连接

```sh
ping -I usb0 www.bing.com -c 5
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/94.png"/></div>

##### EC20 模块

如果您使用的是 EC20 模块，请按照以下步骤操作：

- **步骤 1：** 如果您已经按照前一部分（4G 模块使用 - 测试拨号部分）中针对 EC20 模块的说明重置了 4G 模块，则可以跳过此步骤。但是，如果尚未完成，请立即执行。

- **步骤 2：** 进入 4G 模块的串口控制台，并输入以下命令将其设置为 ECM 模式

```sh
AT+QCFG="usbnet",1
```

- **步骤 3：** 重置 4G 模块

- **步骤 4：** 在 4G 模块控制台中，执行以下命令连接到互联网。这里将 **YOUR_APN** 替换为您的网络提供商的 APN

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

- **步骤 6：** 输入 **ifconfig**，您将在 **usb1** 接口上看到一个 IP 地址

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/90.jpg"/></div>

- **步骤 7：** 您可以尝试通过以下命令 ping 一个 URL，以检查是否有互联网连接

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/92.png"/></div>

#### 4G 模块使用 - 连接 GPS

某些 4G 模块内嵌了 GPS 模块。EC25EUXGA 和 EC20CEHCLG 模块均包含 4G 模块。

- **步骤 1：** 通过执行以下命令重启 GPS 模块

```sh
echo -e "AT+QGPS=1\r\n" > /dev/ttyUSB2
echo -e "AT+QGPS=0\r\n" > /dev/ttyUSB2
```

- **步骤 2：** 通过执行以下命令获取 GPS 数据

```sh
sudo cat /dev/ttyUSB1
```

您将看到如下输出：

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

目前此板支持 WM1302 SPI 模块。您可以使用 [美国版本](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html) 或 [欧洲版本](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)，它们均可在我们的商城中找到。

- **步骤 1：** 如果板子已通电，请先关闭电源

- **步骤 2：** 将 LoRa 模块插入 mini PCIe 插槽，并使用预装的螺丝将其固定在两个孔上

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/16.jpg"/></div>

- **步骤 3：** 将天线连接到天线接口。这里需要使用 IPEX 接头

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/17.jpg"/></div>

:::note
确保 **J8（控制和 UART 接头）** 上的 **SIM_MUX_SEL** 和 **GND** 引脚之间没有跳线。仅在使用 4G 模块时需要此跳线。
:::

- **步骤 4：** 打开板子的电源

#### LoRa 模块使用 - 测试 LoRa RF

当 LoRa 模块连接后，您会看到模块上的绿色和蓝色 LED 灯亮起。

- **步骤 1：** 输入以下命令检查系统是否检测到 LoRa 模块

```sh
i2cdetect -r -y 7
```

如果看到以下输出，则表示系统已检测到模块

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **步骤 2：** 输入以下命令编译并构建 LoRa 信号传输工具

```sh
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

如果看到以下结果，并且 LoRa 模块上的 LED 变为红色，则表示模块成功传输 RF 信号

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

要停止传输，您可以按下键盘上的 **CTRL + C**。

#### LoRa 模块使用 - 连接到 TTN

现在我们将连接到 TTN（The Things Network），并将 reServer Industrial 用作 TTN LoRaWAN 网关。

- **步骤 1：** 输入以下命令准备数据包转发器

```sh
cd ..
cd packet_forwarder
cp ../tools/reset_lgw.sh .
```

- **步骤 2：** 根据您使用的 LoRa 模块运行以下命令。这里我们测试的是 SPI US915 版本

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

然而，不同模块的命令如下：

```sh
# USB 915
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB

# SPI EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# USB EU868
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

运行上述命令后，您将看到以下输出，最后一行显示 **concentrator EUI** 信息。请保留此信息，因为稍后在设置网关与 TTN 时会用到。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/79.jpg"/></div>

- **步骤 3：** 访问 [此 URL](https://console.cloud.thethings.network) 进入 TTN 控制台，并选择您所在的区域

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/80.png"/></div>

- **步骤 4：** 如果您已有账户，请登录；如果没有账户，请注册一个新账户

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/81.png"/></div>

- **步骤 5：** 点击 **Go to gateways**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/82.png"/></div>

- **步骤 6：** 点击 **+ Register gateway**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/83.png"/></div>

- **步骤 7：** 在 **Gateway EUI** 部分输入之前获取的 **Concentrator EUI**，然后点击 **Confirm**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/84.jpg"/></div>

- **步骤 8：** 根据您使用的 LoRa 模块输入 **Frequency plan**。这里我们使用的是 US915 版本的模块，因此选择了 **United States 902-928 MHz, FSB 2 (used by TTN)**。之后点击 **Register gateway**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/85.jpg"/></div>

:::note
**Gateway ID** 已自动为您填写。不过，您可以根据需要更改它。**Gateway name** 不是必填项，但您可以根据需要填写。
:::

- **步骤 9：** 在网关主页面上记录 **Gateway Server Address**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/86.jpg"/></div>

- **步骤 9：** 在 reTerminal Industrial 上，编辑我们与 **lora_pkt_fwd** 命令一起使用的 **global_conf_json** 文件。您需要更改以下选项：

  - gateway_ID: 来自设备的 Concentrator EUI
  - server_address: 来自 TTN 的 Gateway Server Address
  - serv_port_up: 1700
  - serv_port_down: 1700

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/87.png"/></div>

- **步骤 10：** 重新运行数据包转发器

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

如果您看到以下输出，则表示设备已成功连接到 TTN

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/88.jpg"/></div>

## M.2 Key B

reServer Industrial 配备了一个支持 4G 和 5G 模块的 M.2 Key B 接口。目前我们已测试 **SIM8202G-M2 5G 模块**

### 5G 模块连接概述

- **步骤 1：** 如果板子已通电，请先关闭电源

- **步骤 2：** 确保支架已就位，然后移除支架上的顶部螺丝

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/18.jpg"/></div>

- **步骤 2：** 将 5G 模块插入 M.2 Key B 插槽，并用支架螺丝固定 5G 模块（关于支架的说明）

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/19.jpg"/></div>

- **步骤 3：** 将 4 根天线连接到模块上的天线接口。这里需要使用 IPEX 4 接头

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/20.jpg"/></div>

- **步骤 4：** 将支持 5G 的 nano SIM 卡插入板上的 SIM 卡槽，确保 SIM 卡的金色表面朝下。将卡完全插入，直到触碰到内部弹簧并锁定到位。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
如果您想取出 SIM 卡，请将卡推入以触碰内部弹簧，这样 SIM 卡就会从卡槽弹出。
:::

- **步骤 5：** 打开板子的电源

### 5G 模块使用 - 测试拨号

使用 SIM8202G-M2 5G 模块时，模块不会自动启动。因此我们需要先切换一些 GPIO 以启动模块。

- **步骤 1：** 输入以下命令以启动 5G 模块

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

执行上述命令后，LED2 将亮起绿色

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

- **步骤 2：** 安装 minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **步骤 3：** 进入已连接 5G 模块的串行控制台，以便输入 AT 命令并与 5G 模块交互

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **步骤 4：** 输入命令 **"AT"** 并按回车键。如果您看到响应为 "OK"，则表示 5G 模块工作正常

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

- **步骤 6：** 输入命令 **"ATI"** 以检查模块信息

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>

- **步骤 7：** 为测试模块，输入以下命令拨打另一个电话号码

```sh
ATD<phone_number>;
```

您将看到以下输出

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

### 5G 模块使用 - 连接到互联网

即将推出

## DI/ DO

reServer Industrial 支持 4 路数字输入（DI）和 4 路数字输出（DO）通道，所有通道均采用光电隔离，有效保护主板免受电压尖峰或其他电气干扰的影响。在同一连接器上还有一个 CAN 接口，我们将在本 Wiki 的后续部分讨论。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/37.png"/></div>

### DI/ DO 引脚分配表

<table>
  <thead>
    <tr>
      <th>类型</th>
      <th>标签名称</th>
      <th>原理图信号</th>
      <th>模块引脚编号</th>
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
      <td rowSpan={4}>总电流 12V/20mA</td>
      <td rowSpan={4}>12V 数字输入，接地信号需要<br />连接到 GND_DI (Pin2/4/6)</td>
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
      <td rowSpan={4}>每引脚负载 40V/40mA</td>
      <td rowSpan={4}>数字输出，最大耐压<br />40V，接地信号需要<br />连接到 GND_DO(Pin8/10)</td>
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
      <td rowSpan={2}>标准差分信号的 CAN 总线，<br />接地信号需要连接到 GND_ISO (Pin 12)</td>
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

### DI 连接概览

您可以按照下图进行 DI 的连接。建议在 DI 线上串联一个电阻。我们测试时在 DI1 引脚上连接了一个 4.7kΩ 的电阻。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### DI 使用方法

您需要在 DI 线上输入 12V 电压才能被检测为输入信号。

- **步骤 1：** 按照上图连接到 **DI1 引脚** 并输入 **12V**

- **步骤 2：** 按如下方式打开 DI1 的 GPIO

```sh
sudo su 
cd /sys/class/gpio
echo 453 > export 
cd PQ.05
```

:::note
您可以参考 **DI/ DO 引脚分配表** 查找 GPIO 编号和 BGA 编号。在上述示例中，DI1 引脚的 GPIO 编号为 453，BGA 编号为 PQ.05。
:::

- **步骤 3：** 执行以下命令检查状态

```sh
cat value
```

如果输出为 0，表示有 12V 输入；如果输出为 1，表示没有输入电压。

### DO 连接概览

您可以按照下图进行 DO 的连接。建议在 DO 线上串联一个电阻。我们测试时使用了一个 4.7kΩ 的电阻。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### DO 使用方法

您需要按照上述图示连接负载。最简单的测试方法是使用万用表，如果没有万用表，可以连接一个最大电压小于 40V 的负载。

- **步骤 1：** 按照上图连接到 **DO1 引脚** 并输入 **最大 40V**

- **步骤 2：** 按如下方式打开 DO1 的 GPIO

```sh
sudo su 
cd /sys/class/gpio
echo 399 > export 
cd PI.00
echo out > direction
```

:::note
您可以参考 **DI/ DO 引脚分配表** 查找 GPIO 编号和 BGA 编号。在上述示例中，DO1 引脚的 GPIO 编号为 399，BGA 编号为 PI.00。
:::

- **步骤 3：** 执行以下命令打开引脚

```sh
echo 1 > value
```

如果负载被打开或万用表显示您输入的电压，则测试正常运行。

## CAN

reServer Industrial 配备了一个支持 CAN FD（控制器局域网灵活数据速率）协议的 CAN 接口，速率为 5Mbps。CAN 接口采用电容隔离技术，提供出色的 EMI 保护，确保在工业和自动化应用中的可靠通信。默认安装了一个 120Ω 的终端电阻，您可以通过 GPIO 切换该电阻的开启和关闭状态。

注意：CAN 接口使用隔离电源，这意味着连接到 CAN 接口的外部设备的地信号应连接到 CG 引脚。

### 使用 USB 转 CAN 适配器的连接概览

为了测试和连接 CAN 总线，请将 USB 转 CAN 适配器连接到板上的 CAN 接口，如下图所示：

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

这里我们使用了 [带 USB 线的 USB 转 CAN 分析仪适配器](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)，可在我们的商城中购买。

### 使用 USB 转 CAN 适配器

- **步骤 1：** 从制造商的网站下载您所使用的 USB 转 CAN 适配器的驱动程序并安装。在我们的案例中，根据我们使用的适配器，驱动程序可以在[这里](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)找到。

- **步骤 2：** 一些适配器还附带了必要的软件，用于 PC 与 CAN 设备通信。在我们的案例中，根据我们使用的适配器，我们下载并安装了可以在[这里](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)找到的软件。

- **步骤 3：** 在 reServer Industrial 上打开终端窗口，执行以下命令以配置和启用 CAN 接口：

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 4：** 在终端中输入 **ifconfig**，您将看到 CAN 接口已启用。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **步骤 5：** 打开您之前安装的 CAN 软件。在本例中，我们将打开根据我们使用的 CAN 适配器安装的软件。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/></div>

- **步骤 6：** 将 USB 转 CAN 适配器连接到 PC，并通过 Windows 搜索栏搜索 **设备管理器** 打开它。现在，您将在 **端口 (COM & LPT)** 下看到已连接的适配器。记下此处列出的串口号。根据下图，串口号为 **COM9**。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/></div>

- **步骤 7：** 打开 CAN 软件，点击 **COM** 部分旁边的 **刷新**，点击下拉菜单并根据已连接的适配器选择串口号。保持 **COM bps** 为默认值，然后点击 **打开**。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/></div>

- **步骤 8：** 保持 **模式** 和 **CAN bps** 为默认值，将 **类型** 更改为 **标准帧**，然后点击 **设置并启动**。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/></div>

- **步骤 9：** 在 reServer Industrial 上执行以下命令，将 CAN 信号发送到 PC：

```sh
cansend can0 123#abcdabcd
```

现在，您将在软件中看到接收到的信号，如下所示：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **步骤 10：** 在 reServer Industrial 上执行以下命令，等待接收来自 PC 的 CAN 信号：

```sh
candump can0 &
```

- **步骤 11：** 在 CAN 软件中，点击 **发送单帧**。

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

现在，您将在 reServer Industrial 上看到接收到的信号，如下所示：

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

#### 使用 reTerminal DM 的连接概览

如果您有 [reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html)，您可以直接与其通信，因为 reTerminal DM 也具有 CAN 接口。

请参考下图，通过 CAN 连接 reServer Industrial 和 reTerminal DM：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

### 使用 reTerminal DM

- **步骤 1：** 在使用 reTerminal DM 之前，请访问[此 Wiki](https://wiki.seeedstudio.com/cn/reterminal-dm)以开始使用 reTerminal DM。

- **步骤 2：** 在 reServer Industrial 上打开终端窗口，执行以下命令以配置和启用 CAN 接口：

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 3：** 在 reTerminal DM 上打开终端窗口，执行以下命令以配置和启用 CAN 接口：

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 4：** 在 reTerminal DM 上打开终端窗口，执行以下命令以配置和启用 CAN 接口：

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 5：** 如果您在两个设备上输入 **ifconfig**，您将看到 CAN 接口已启用。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **步骤 6：** 在 reTerminal DM 上执行以下命令，等待接收来自 reServer Industrial 的 CAN 信号：

```sh
candump can0 &
```

- **步骤 7：** 在 reServer Industrial 上执行以下命令，将 CAN 信号发送到 reTerminal DM：

```sh
cansend can0 123#abcdabcd
```

现在，您将看到通过 reTerminal DM 接收到的内容如下所示：

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **步骤 8：** 重复 **步骤 6 和步骤 7**，但交换设备。使用 reTerminal DM 发送 CAN 信号，并使用 reServer Industrial 接收这些信号。

## RS232/ RS422/ RS485 接口

reServer Industrial 配备了一个支持 RS232、RS422 和 RS485 通信协议的 DB9 接口，并且板载有一个 DIP 开关面板，用于在不同接口选项之间切换。

您可以看到下面的 DIP 开关面板：

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/21.jpg"/></div>

以下表格解释了基于 DIP 开关位置的不同模式：

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
      <td>1T/1R RS-422，带终端电阻</td>
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
      <td>无需总线的应用</td>
    </tr>
    <tr>
      <td>切换 IC（用于特殊用途）。</td>
    </tr>
    <tr>
      <td rowSpan={2}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/58.png" alt="Image" width={200} height={127} /></td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>1</td>
      <td rowSpan={2}>0</td>
      <td rowSpan={2}>RS-485 半双工</td>
      <td>1T/1R RS-485，带终端电阻</td>
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
      <td rowSpan={2}>所有 I/O 引脚均为高阻态</td>
    </tr>
    <tr>
      <td>关闭</td>
    </tr>
  </tbody>
</table>

:::note
出厂时，开关的默认模式设置为 RS485，DIP 开关位置为 010。
:::

上述表格仅考虑了 DIP 开关面板的前三个开关。然而，第四个开关负责切换斜率速率，这与数据速率直接相关。

<table>
  <thead>
    <tr>
      <th />
      <th>状态</th>
      <th>备注</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/62.png" alt="Image" width={200} height={127} /></td>
      <td>1</td>
      <td>SLEW= Vcc<br />此 RS232/RS422/RS485 多协议收发器限制通信速率如下：<br />RS-232：最大数据速率为 1.5Mbps<br />RS-485/RS-422：最大数据速率为 10Mbps<br />实际最大数据速率取决于使用的 Jetson SOM</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232：最大数据速率为 250Kbps<br />RS-485/RS-422：最大数据速率为 250Kbps</td>
    </tr>
  </tbody>
</table>

在这里，我们将使用 USB 转 RS232、RS485 和 RS422 适配器来测试这些接口。因此，在继续之前，您需要在 PC 上安装一个串行终端应用程序。我们推荐您安装 **Putty**，因为它易于设置和使用。

- **步骤 1：** 访问 [此网站](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) 并根据您的 PC 架构下载 Putty。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/60.png"/></div>

这里我们根据所用的 PC（X86 Windows 64 位机器）选择了 Putty。

- **步骤 2：** 打开下载的安装程序并按照提示安装应用程序。

### 通用连接概述

您可以参考 DB9 接口的引脚编号和下表进行连接。

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

- **步骤 1：** 关闭开发板

- **步骤 2：** 这里有两种设置 DIP 开关的选项，可以选择 001 模式或 101 模式。每种模式的开关位置如下图所示：

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

- **步骤 3：** 将 USB 转 RS232 适配器连接到 DB9 接头

- **步骤 4：** 将适配器的另一端连接到 PC 的 USB 端口之一

- **步骤 5：** 打开开发板

### RS232 使用方法

- **步骤 1：** 您可能需要为所使用的适配器安装驱动程序，或者 Windows 会自动为您安装驱动程序。在 Windows 搜索框中输入 **设备管理器** 打开设备管理器，检查是否可以看到连接的适配器作为 COM 设备。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

- **步骤 2：** 如果看不到适配器，您需要根据所使用的适配器安装驱动程序。通常可以在制造商的网站上找到这些驱动程序。对于我们使用的适配器，您可以访问 [此页面](https://www.ugreen.com/pages/download)，搜索型号 **20201** 并下载相应的驱动程序。

- **步骤 3：** 在 PC 上打开 Putty，选择 **Terminal** 部分并设置以下内容：

  - 本地回显：强制开启
  - 本地行编辑：强制开启

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **步骤 4：** 选择 **Session**，在 **Connection type** 下选择 **Serial**，根据 **设备管理器** 中显示的串口号设置串口号，保持速率为默认值（9600），然后点击 **Open**。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

- **步骤 5：** 在 reServer Industrial 终端窗口中输入以下命令，从 reServer Industrial 向 PC 发送信号：

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reServer Industrial" > /dev/ttyTHS0
```

现在您将在 Putty 上看到此消息。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

- **步骤 6：** 在 reTerminal Industrial 终端窗口中输入以下命令以等待接收来自 PC 的信号：

```sh
sudo cat /dev/ttyTHS0
```

- **步骤 7：** 在 Putty 上输入任意内容，按下 **ENTER** 键，内容将显示在 reServer Industrial 终端窗口中。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### RS422 连接概述

在这里，您可以使用 USB 转 RS422 适配器来测试接口。我们使用了 [DTech USB 转 RS485 适配器](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) 进行测试。

- **步骤 1：** 关闭开发板

- **步骤 2：** 这里有两种设置 DIP 开关的选项，可以选择 000 模式或 100 模式。每种模式的开关位置如下图所示：

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

- **步骤 3：** 使用跳线将 USB 转 RS422 适配器连接到 DB9 接头，如下图所示。这里我们连接了上述提到的适配器。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

- **步骤 4：** 将适配器的另一端连接到 PC 的 USB 端口之一

- **步骤 5：** 打开开发板

### RS422 使用方法

- **步骤 1：** 您可能需要为所使用的适配器安装驱动程序，或者 Windows 会自动为您安装驱动程序。在 Windows 搜索框中输入 **设备管理器** 打开设备管理器，检查是否可以看到连接的适配器作为 COM 设备。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **步骤 2：** 如果看不到适配器，您需要根据所使用的适配器安装驱动程序。通常可以在制造商的网站上找到这些驱动程序。对于我们使用的适配器，您可以访问 [此页面](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)。

- **步骤 3：** 在 PC 上打开 Putty，选择 **Terminal** 部分并设置以下内容：

  - 本地回显：强制开启
  - 本地行编辑：强制开启

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **步骤 4：** 选择 **Session**，在 **Connection type** 下选择 **Serial**，根据 **设备管理器** 中显示的串口号设置串口号，保持速率为默认值（9600），然后点击 **Open**。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **步骤 5：** 在 reServer Industrial 终端窗口中输入以下命令，从 reServer Industrial 向 PC 发送信号：

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

现在您将在 Putty 上看到此消息。

- **步骤 6：** 在 reTerminal Industrial 终端窗口中输入以下命令以等待接收来自 PC 的信号：

```sh
sudo cat /dev/ttyTHS0
```

- **步骤 7：** 在 Putty 上输入任意内容，按下 **ENTER** 键，内容将显示在 reServer Industrial 终端窗口中。

### RS485 连接概述

在这里，您可以使用 USB 转 RS422 适配器来测试接口。我们使用了 [DTech USB 转 RS485 适配器](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) 进行测试。

- **步骤 1：** 关闭开发板

- **步骤 2：** 这里我们有 3 种选项来设置 DIP 开关。可以设置为 010 模式、011 模式或 110 模式。每种模式的开关位置如下所示：

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

- **步骤 3：** 使用跳线将 USB 转 RS422 适配器连接到 DB9 接头，如下图所示。这里我们连接了上面提到的适配器。

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

- **步骤 4：** 将另一端连接到 PC 的一个 USB 端口。

- **步骤 5：** 打开开发板。

### RS485 使用方法

- **步骤 1：** 您可能需要为所使用的适配器安装驱动程序，或者 Windows 会自动为您安装驱动程序。在 Windows 搜索框中输入 **Device Manager** 打开设备管理器，检查是否可以看到连接的适配器作为 COM 设备。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **步骤 2：** 如果看不到适配器，您需要根据所使用的适配器安装驱动程序。通常可以在制造商的网站上找到这些驱动程序。对于我们使用的适配器，您可以访问[此页面](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)。

- **步骤 3：** 在 PC 上打开 Putty，选择 **Terminal** 部分并设置以下内容：

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **步骤 4：** 选择 **Session**，在 **Connection type** 下选择 **Serial**，根据设备管理器中看到的内容设置串口号，保持默认波特率（9600），然后点击 **Open**。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **步骤 5：** 在 reServer Industrial 的终端窗口中输入以下命令，从 reServer Industrial 向 PC 发送信号：

```sh
sudo su 
cd /sys/class/gpio 
echo 460 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reServer Industrial" > /dev/ttyTHS0
```

现在您将在 Putty 上看到此消息。

- **步骤 6：** 在 reTerminal Industrial 的终端窗口中输入以下命令，等待接收来自 PC 的信号：

```sh
sudo su
cd /sys/class/gpio
echo 460 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

- **步骤 7：** 在 Putty 上输入任意内容，按下 **ENTER**，它将显示在 reServer Industrial 的终端窗口中。

## USB

reServer Industrial 板载 3 个 USB3.2 接口，具有以下特性：
- 在双层堆叠 USB 接口中，上下 USB 端口共享一个限流 IC，总供电能力为最大输出电流 2.1A（单个端口也可以达到 2.1A）。如果超过 2.1A，将进入过流保护状态。
- 在双层堆叠 USB 接口旁边的单个 USB 接口，总供电能力为最大输出电流 2.1A。如果超过 2.1A，将进入过流保护状态。
- Orin NX 模块自带 3 个 USB3.2，其中只有一个在 reServer Industrial 中使用，并转换为 3 路（USB3.1 TYPE-A x2 - J4 和 USB3.1 TYPE-A x1 - J3）。
- 仅支持 USB 主机模式，不支持设备模式。
- 提供 5V 2.1A 电源。
- 支持热插拔。

### 使用方法

我们将说明如何对连接的 USB 闪存驱动器进行简单的基准测试。

- **步骤 1：** 执行以下命令检查写入速度：

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **步骤 2：** 执行以下命令检查读取速度。请确保在执行上述写入速度命令后再执行此命令。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

### 可配置 LED

板上有一个绿色 LED，如下图所示。默认情况下，它作为指示设备运行正常的 LED。然而，您也可以通过系统编程控制此 LED 的开关。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/22.jpg"/></div>

### 使用方法

- **步骤 1：** 在终端窗口中输入以下命令以访问绿色 LED：

```sh
sudo -i
cd /sys/class/gpio
echo 329 > export 
cd PCC.01
echo out > direction 
```

- **步骤 2：** 关闭 LED：

```sh
echo 0 > value 
```

- **步骤 3：** 打开 LED：

```sh
echo 1 > value 
```

如果您已完成对 LED 的使用，可以执行以下命令：

```sh
cd ..
echo 329 > unexport
```

## 监控系统性能

我们可以使用 **jetson stats** 应用程序来监控系统组件的温度，并检查其他系统详细信息，例如：

- 查看 CPU、GPU、RAM 的使用情况
- 更改电源模式
- 设置为最大时钟频率
- 检查 JetPack 信息

- **步骤 1：** 在 reServer Industrial 的终端窗口中输入以下命令：

```sh
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

- **步骤 2：** 重启开发板

```sh
sudo reboot
```

- **步骤 3：** 在终端中输入以下命令：

```sh
jtop
```

现在 **jtop** 应用程序将会打开，如下所示：

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/30.png"/></div>

- **步骤 4：** 在这里，您可以浏览应用程序的不同页面并探索所有功能！

## TPM

reServer Industrial 配备了一个 TPM 接口，用于连接外部 TPM 模块。这里我们测试了基于 Infineon SLB9670 的 TPM2.0 模块。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/24.jpg"/></div>

### 连接概览

将 TPM 模块连接到 TPM 接口，如下图所示：

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/27.jpg"/></div>

### 使用方法

通过执行以下命令检查 TPM 模块是否正确加载：

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

您将看到如下输出：

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

## reServer Industrial 的最大性能

如果您想在 reServer Industrial 上启用最大性能，请按照以下说明操作：

- **步骤 1：** 输入以下命令以启用最大功率模式：

```sh
sudo nvpmodel -m 0
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/35.jpg"/></div>

此时系统会要求您输入 **YES** 以重启开发板。

- **步骤 2：** 开发板启动后，输入以下命令将 CPU 时钟设置为最大频率：

```sh
sudo jetson_clocks
```

## GPIO 表

您可以访问 reServer Industrial 的 GPIO 表，以熟悉所有引脚映射。

在终端中执行以下命令以访问：

```sh
sudo cat /sys/kernel/debug/gpio
```

您将看到如下输出：

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

（更改链接）
- [reServer Industrial 数据表](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)
- [reServer Industrial 参考指南](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Reference-Guide.pdf)
- [NVIDIA Jetson 设备和载板比较](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [reServer Industrial 3D 文件](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## 技术支持

请随时在我们的 [论坛](https://forum.seeedstudio.com/) 提交问题。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>