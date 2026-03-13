---
description: reServer Industrial 硬件接口使用
title: reServer Industrial 硬件接口使用
keywords:
- reServer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reserver_industrial_hardware_interface_usage
last_update:
  date: 09/22/2023
  author: Lakshantha
sku: 114110247
createdAt: '2023-06-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/reserver_industrial_hardware_interface_usage/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 硬件与接口使用

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/2.jpg"/></div>

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/3.jpg"/></div>

reServer Industrial 配备 2 个 2.5" SATA HDD/ SSD 硬盘位，可在视频分析应用中轻松存储数百段本地视频录像。同时，它还提供多种连接选项，包括 5 个 RJ-45 以太网端口、1 个 RS232/422/485、4 路隔离 DI/DO、1 路 CAN、4× USB3.1。无风扇设计配合多样化的安装方式，可在 -20 至 60 ℃ 范围内部署，非常适合更为严苛的环境和更重的负载。

reServer Industrial 采用被动散热片和无风扇设计，非常适合在高要求环境中使用。被动散热片无需风扇即可实现高效散热，降低因灰尘或其他污染物导致元器件故障的风险。无风扇设计还可降低噪音水平和功耗，适用于对噪音敏感的环境，同时最大限度地减少能源成本。

reServer Industrial 具有 5 个 RJ45 GbE 端口，其中 4 个为 PoE PSE 端口，可通过以太网为 IP 摄像头等设备供电。这消除了单独电源的需求，使在缺乏现成电源插座的区域部署网络设备更加容易。剩余的 GbE 端口用于连接到网络交换机或路由器，从而与网络上的其他设备通信并访问互联网。

- **无风扇紧凑型边缘 AI 服务器：** 由 NVIDIA Jetson™ Orin Nano/Orin NX 模组驱动，AI 性能范围为 20 TOPS 至 100 TOPS，支持更宽的工作温度范围 -20 ~ 60°C（0.7m/s 气流）
- **多路流处理：** 5× GbE RJ45（其中 4 个为 802.3af PSE），可实时处理多路数据流
- **可扩展存储：** 2 个 2.5" SATA HDD/SSD 硬盘位，外加一个用于 NVMe SSD 的 M.2 2280 插槽
- **工业接口：** 包含 COM 口、DI/DO 端口、CAN 端口、USB 3.1，以及可选 TPM2.0 模块
- **混合连接：** 支持 5G/4G/LTE/LoRaWAN®（模块可选），带 Nano SIM 卡槽
- **认证：** FCC、CE、UKCA、ROHS、KC

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

## 拆解 reServer Industrial

首先，最好先拆下外部机壳以访问所有接口。请参考[此文档](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Assembly-Guide.pdf)了解更多信息。

## 千兆以太网连接器

reServer Industrial 上有 5 个以太网端口，规格为 10/100/1000Mbps，其中 4 个端口支持 PSE 802.3 af 15 W，您可以将 PoE 摄像头直接连接到这些端口（LAN1-LAN4）。这些端口通过 PCIe 转以太网（LAN7430-I/Y9X）模块连接。然而，最左侧剩余的以太网端口（LAN0）仅用于连接到路由器以访问互联网。

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reServer-Industrial/5.jpg"/></div>

每个以太网端口上有 2 个 LED（绿色和黄色），其指示含义如下

- 绿色 LED：仅在连接到 1000M 网络时常亮
- 黄色 LED：显示网络活动状态

### 使用方法

- 在连接 PoE 摄像头之前，需要先为这 4 个以太网端口启用 PoE 功能。按如下方式启用：

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

  **接口 LAN1 到 LAN4 被指定用于 PoE。**

  如果需要为每个 PoE 接口配置不同的 IP 地址，请按照以下说明操作：

  :::warning
  接口名称（例如 `enP1p1s0`）可能会因系统而异。继续之前，请先运行以下命令检查设备上的实际接口名称。下面的命令仅供参考——请将接口名称替换为系统中显示的名称。

  ```bash
  ifconfig
  ```
  :::

  **步骤 1**：将 PoE 设备连接到 reServer Industrial。为目标接口创建一个新连接。例如，要配置接口 `enP1p1s0` 并将其命名为 `POE1`：

  ```bash
  sudo nmcli connection add type ethernet ifname enP1p1s0 con-name POE1
  ```

  **步骤 2**：配置 IP 地址。IP 地址可以根据实际使用情况自定义。

  ```bash
  sudo nmcli connection modify POE1 ipv4.addresses 192.168.6.6/24
  ```

  **步骤 3**：将 IPv4 方法设置为手动（静态 IP）。

  ```bash
  sudo nmcli connection modify POE1 ipv4.method manual
  ```

  **步骤 4**：启用该连接。

  ```bash
  sudo nmcli connection up POE1
  ```

  **步骤 5**：验证配置。

  ```bash
  ifconfig
  ```

## SATA 接口

reServer Industrial 支持 2 个 SATA 2.5" HDD/SSD，并配备 SATA 数据和电源连接器。您可以按如下方式连接 HDD/ SSD

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/23.jpg"/></div>

### 使用方法

系统启动后，您可以通过以下方式验证已连接的 SATA 硬盘

```sh
lsblk
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/28.png"/></div>

## RTC

reServer Industrial 提供 2 种不同方式连接 RTC 电池

### 连接概览

- 方法 1：

将一颗 **3V CR1220 纽扣电池** 连接到板上的 RTC 插座，如下图所示。请确保电池的 **正极 (+)** 朝上

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/6.jpg"/></div>

- 方法 2：

将一颗带 JST 连接器的 **3V CR2302 纽扣电池** 连接到板上的 2 针 1.25mm JST 插座，如下图所示

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reServer-Industrial/7.jpg"/></div>

### 使用方法

- **步骤 1：** 按上述说明连接 RTC 电池

- **步骤 2：** 打开 reServer Industrial 电源

- **步骤 3：** 在 Ubuntu 桌面上，点击右上角的下拉菜单，导航到 `Settings > Date & Time`，通过以太网线连接到网络，并选择 **Automatic Date & Time** 以自动获取日期/时间

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/></div>

:::note
如果尚未通过以太网连接到互联网，可以在此手动设置日期/时间
:::

- **步骤 4：** 打开终端窗口，执行以下命令检查硬件时钟时间

```sh
sudo hwclock
```

您将看到类似如下的输出，这并不是正确的日期/时间

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/14.png"/></div>

- **步骤 5：** 通过输入以下命令，将硬件时钟时间更改为当前系统时钟时间

```sh
sudo hwclock --systohc
```

- **步骤 6：** 拔掉所有已连接的以太网线，以确保不会从互联网获取时间，然后重启主板

```sh
sudo reboot
```

- **步骤 7：** 再次检查硬件时钟时间，以确认即使设备断电，日期/时间仍保持不变

现在我们将创建一个脚本，在每次启动时始终从硬件时钟同步系统时钟。

- **步骤 8：** 使用任意你喜欢的文本编辑器创建一个新的 shell 脚本。这里我们使用 **vi** 文本编辑器

```sh
sudo vi /usr/bin/hwtosys.sh 
```

- **步骤 9：** 按 **i** 进入 **插入模式**，将以下内容复制并粘贴到文件中

```sh
#!/bin/bash

sudo hwclock --hctosys
```

- **步骤 10：** 使脚本具有可执行权限

```sh
sudo chmod +x /usr/bin/hwtosys.sh 
```

- **步骤 11：** 创建一个 systemd 文件

```sh
sudo nano /lib/systemd/system/hwtosys.service 
```

- **步骤 12：** 在文件中添加以下内容

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

- **步骤 14：** 使新创建的服务在开机时自动启动并立即启动该服务

```sh
sudo systemctl enable hwtosys.service
sudo systemctl start hwtosys.service
```

- **步骤 15：** 验证脚本已作为 systemd 服务正常运行

```sh
sudo systemctl status hwtosys.service
```

- **步骤 16：** 重启主板，你会发现系统时钟现在已与硬件时钟同步

## M.2 Key M

开箱即用时，reServer Industrial 已在 M.2 Key M 插槽中安装了一块 128GB SSD，并预装了 JetPack 系统。

### 连接概览

如果你想移除随附的 SSD 并安装新的 SSD，可以按照以下步骤操作。这里我们仅推荐使用 Seeed 的 SSD，容量为 [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)、[256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)、[512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) 和 [1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)，因为我们只对这些 SSD 进行了测试。此外，该接口支持 PCIe Gen4.0 SSD。

- **步骤 1：** 拆下预装 SSD 的固定螺丝

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/8.jpg"/></div>

- **步骤 2：** 将 SSD 从 SSD 连接器中滑出以移除

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/9.jpg"/></div>

- **步骤 3：** 插入新的 SSD 并重新拧紧螺丝

### 使用方法

我们将说明如何对已连接的 SSD 进行一个简单的基准测试

- **步骤 1：** 通过执行以下命令检查写入速度

```sh
sudo dd if=/dev/zero of=/home/$USER/test bs=1M count=512 conv=fdatasync
```

- **步骤 2：** 通过执行以下命令检查读取速度。请确保在执行完上面的写入速度测试命令之后再执行本步骤。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/home/$USER/test of=/dev/null bs=1M count=512
```

### mini PCIe

reServer Industrial 配备了一个 mini PCIe 接口，支持 4G 和 LoRa 模块。但是，同一时间你只能连接一个 4G 模块或一个 LoRa 模块。一些 4G 模块内置了 GPS 功能，我们也会进行说明。

#### 4G 模块连接概览

目前该板卡支持 EC25EUXGA 和 EC20CEHCLG 模块。

- **步骤 1：** 如果板卡已经上电，请先断电

- **步骤 2：** 拆下预装的支柱。只有在使用 M.2 Key B 接口时才需要这个支柱

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/10.jpg"/></div>

- **步骤 3：** 将 4G 模块插入 mini PCIe 插槽，使用预装的螺丝并拧紧到 2 个螺丝孔上，以固定 4G 模块

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/11.jpg"/></div>

- **步骤 4：** 将天线连接到标有 **MAIN** 的天线接口。这里需要使用 IPEX 接头

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/12.jpg"/></div>

- **步骤 5：** 将支持 4G 的 nano SIM 卡插入板卡上的 SIM 卡槽，确保 SIM 卡的金属面朝上。将卡完全推入，直到顶到内部弹簧并弹回，即可锁定到位。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
如果你想取出 SIM 卡，向内按压 SIM 卡以顶到内部弹簧，这样 SIM 卡就会从卡槽中弹出
:::

- **步骤 6：** 在 **J8（控制和 UART）排针** 上的 **SIM_MUX_SEL** 和 **GND** 引脚之间添加一个跳线帽

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/14.jpg"/></div>

- **步骤 6：** 给板卡上电

#### 4G 模块使用 - 拨号测试

当使用 EC25 模块时，模块会自动启动并准备就绪。但是，当使用 EC20 模块时，你需要复位模块才能正常工作

- **步骤 1：** 如果你使用的是 EC25 模块，可以跳过此步骤。但是如果你使用的是 EC20 模块，请输入以下命令以访问负责复位 4G 模块的 GPIO309 引脚

```sh
sudo su 
cd /sys/class/gpio
echo 309 > export 
cd gpio309
echo out > direction
echo 1 > value
```

对于 EC25 模块，板卡启动后 LED2 会立即亮起绿色。对于 EC20 模块，在按照上述说明复位模块之后，LED2 会亮起绿色

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

- **步骤 2：** 安装 minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **步骤 3：** 进入已连接 4G 模块的串口终端，这样我们就可以输入 AT 命令并与 4G 模块交互

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **步骤 4：** 按下 **Ctrl+A**，然后按 **E** 打开本地回显

- **步骤 5：** 输入命令 **"AT"** 并按回车。如果你看到响应为 "OK"，说明 4G 模块工作正常

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/></div>

- **步骤 6：** 输入命令 **"ATI"** 来查看模块信息

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/></div>

- **步骤 7：** 为了测试模块，输入以下命令拨打另一个电话号码

```sh
ATD<phone_number>;
```

你将会看到如下输出

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/24.jpg"/></div>

如果输入的电话号码能够接到来电，则说明模块工作正常

#### 4G 模块使用 - 连接到互联网

##### EC25 模块

如果你使用的是 EC25 模块，请按照以下步骤操作

- **步骤 1：** 在按照上文（4G 模块使用 - 拨号测试部分）打开 4G 模块串口终端之后，执行以下命令连接到互联网。这里将 **YOUR_APN** 替换为你的网络运营商的 APN

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/89.jpg"/></div>

连接成功后，它应输出 **OK**，如上图所示

- **步骤 2：** 通过执行以下命令重启 4G 模块

```sh
AT+CFUN=1,1
```

现在你将在串口终端上失去与 4G 模块的连接

- **步骤 3：** 按 **CTRL + A**，然后按 **Q** 关闭 **minicom**

- **步骤 4：** 输入 **ifconfig**，你会在 **usb0** 接口上看到一个 IP 地址

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/93.png"/></div>

- **步骤 5：** 你可以尝试按如下方式 ping 一个网站，以检查是否具有互联网连接

```sh
ping -I usb0 www.bing.com -c 5
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/94.png"/></div>

##### EC20 模块

如果你使用的是 EC20 模块，请按照以下步骤操作

- **步骤 1：** 如果你已经按照上一节（4G 模块使用 - 拨号测试部分）中的说明为 EC20 模块复位了 4G 模块，可以跳过此步骤。但是如果你还没有执行，请现在进行复位

- **步骤 2：** 进入 4G 模块的串口终端，并输入以下命令将其设置为 ECM 模式

```sh
AT+QCFG="usbnet",1
```

- **步骤 3：** 复位 4G 模块

- **步骤 4：** 在 4G 模块控制台中，执行以下命令连接到互联网。这里将 **YOUR_APN** 替换为你的网络运营商的 APN

```sh
AT+CGDCONT=1,"IP","YOUR_APN"
```

- **步骤 6：** 输入 **ifconfig**，你会在 **usb1** 接口上看到一个 IP 地址

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/90.jpg"/></div>

- **步骤 7：** 你可以尝试按如下方式 ping 一个 URL，以检查是否具有互联网连接

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/92.png"/></div>

#### 4G 模块使用 - 连接到 GPS

一些 4G 模块内置了 GPS 模块。EC25EUXGA 和 EC20CEHCLG 模块都内置了 4G 模块。

- **步骤 1：** 通过执行以下命令重启 GPS 模块

```sh
echo -e "AT+QGPS=1\r\n" > /dev/ttyUSB2
echo -e "AT+QGPS=0\r\n" > /dev/ttyUSB2
```

- **步骤 2：** 通过执行以下命令获取 GPS 数据

```sh
sudo cat /dev/ttyUSB1
```

你将会看到如下输出

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

#### LoRa 模块连接概览

目前该板卡支持 WM1302 SPI 模块。你可以使用 [US version](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html) 或 [EU version](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)，它们都可以在我们的 Bazaar 上购买。

- **步骤 1：** 如果板卡已经上电，请先断电

- **步骤 2：** 将 LoRa 模块插入 mini PCIe 插槽，并使用预装的螺丝拧紧到 2 个螺丝孔上，以固定 LoRa 模块

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/16.jpg"/></div>

- **步骤 3：** 将天线连接到天线接口。这里需要使用 IPEX 接头

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/17.jpg"/></div>

:::note
确保在 **J8（控制和 UART）排针** 上的 **SIM_MUX_SEL** 和 **GND** 引脚之间没有跳线帽。该跳线帽只在使用 4G 模块时才需要
:::

- **步骤 4：** 给板卡上电

#### LoRa 模块使用 - 测试 LoRa 射频

当 LoRa 模块连接好后，你会看到模块上的绿色和蓝色 LED 亮起

- **步骤 1：** 输入以下命令检查系统是否检测到 LoRa 模块

```sh
i2cdetect -r -y 7
```

如果你看到如下输出，说明系统已经检测到该模块

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/29.png"/></div>

- **步骤 2：** 输入以下命令来编译并构建 LoRa 信号发送工具

```sh
git clone https://github.com/lakshanthad/sx1302_hal
cd sx1302_hal
make
cd libloragw
cp ../tools/reset_lgw.sh .
sudo ./test_loragw_hal_tx -r 1250 -m LORA -f 867.1 -s 12 -b 125 -n 1000 -z 100 --dig 3 --pa 0 --pwid 13 -d /dev/spidev2.0
```

如果你看到如下结果，并且 LoRa 模块上的 LED 变为红色，则表示模块正在成功发送射频信号

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/78.jpg"/></div>

要停止发送，你可以在键盘上按 **CTRL + C**。

#### LoRa 模块使用 - 连接到 TTN

现在我们将连接到 TTN（The Things Network），并将 reServer Industrial 用作 TTN LoRaWAN 网关

- **步骤 1：** 输入以下内容以使数据包转发器做好准备

```sh
cd ..
cd packet_forwarder
cp ../tools/reset_lgw.sh .
```

- **步骤 2：** 根据你正在使用的 LoRa 模块运行以下命令。这里我们测试的是 SPI US915 版本

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

运行上述命令后，你会看到如下输出，最后一行会显示 **concentrator EUI** 信息。请保存好这条信息，因为我们稍后在使用 TTN 配置网关时会用到它

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/79.jpg"/></div>

- **步骤 3：** 访问 [此 URL](https://console.cloud.thethings.network) 进入 TTN 控制台，并选择你所在的区域

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/80.png"/></div>

- **步骤 4：** 如果你已经有账号，请登录；如果还没有账号，请注册一个新账号

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/81.png"/></div>

- **步骤 5：** 点击 **Go to gateways**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/82.png"/></div>

- **步骤 6：** 点击 **+ Register gateway**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/83.png"/></div>

- **步骤 7：** 在 **Gateway EUI** 部分输入之前获取到的 **Concentrator EUI**，然后点击 **Confirm**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/84.jpg"/></div>

- **步骤 8：** 根据你正在使用的 LoRa 模块输入 **Frequency plan**。这里我们使用的是该模块的 US915 版本，因此选择 **United Stated 902-928 MHz, FSB 2 (used by TTN)**。之后点击 **Register gateway**

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/85.jpg"/></div>

:::note
**Gateway ID** 已经为你自动填写。不过，你可以将其更改为任意你喜欢的内容。**Gateway name** 不是必填项，不过你也可以根据自己的喜好填写
:::

- **步骤 9：** 在网关的主主页上记下 **Gateway Server Address**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/86.jpg"/></div>

- **步骤 9：** 在 reTerminal Industrial 上，编辑我们之前与 **lora_pkt_fwd** 命令一起使用的 **global_conf_json** 文件。这里你需要按如下方式更改 **gateway_ID**、**server_address**、**serv_port_up** 和 **serv_port_down** 选项

  - gateway_ID: 来自设备的 Concentrator EUI
  - server_address: 来自 TTN 的 Gateway Server Address
  - serv_port_up: 1700
  - serv_port_down: 1700

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/87.png"/></div>

- **步骤 10：** 重新运行数据包转发器

```sh
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

如果你看到如下输出，则表示设备已成功连接到 TTN

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/88.jpg"/></div>

## M.2 Key B

reServer Industrial 配备了一个 M.2 Key B 接口，支持 4G 和 5G 模块。目前我们已经测试了 **SIM8202G-M2 5G 模块**

### 5G 模块连接概览

- **步骤 1：** 如果板子已经上电，请先断电

- **步骤 2：** 确保支柱已安装到位，然后卸下支柱上的顶端螺丝

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/18.jpg"/></div>

- **步骤 2：** 将 5G 模块滑入 M.2 Key B 插槽，并拧上支柱螺丝以固定 5G 模块（此处说明支柱）

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/19.jpg"/></div>

- **步骤 3：** 将 4 根天线连接到模块上的天线连接器。这里你需要使用 IPEX 4 连接器

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/20.jpg"/></div>

- **步骤 4：** 将支持 5G 的 nano SIM 卡插入板子上的 SIM 卡槽，确保 SIM 卡的金属面朝下。这里需要将卡完全插入，使其在碰到内部弹簧后弹回并锁定到位。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/13.jpg"/></div>

:::note
如果你想取出 SIM 卡，向内按压卡片以触发内部弹簧，这样 SIM 卡就会从卡槽中弹出
:::

- **步骤 5：** 给板子上电

### 5G 模块使用 - 拨号测试

使用 SIM8202G-M2 5G 模块时，模块不会自动启动。因此我们首先需要切换几个 GPIO 让它启动

- **步骤 1：** 输入以下内容以启动 5G 模块

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

执行完上述操作后，LED2 会亮起绿色

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/15.jpg"/></div>

- **步骤 2：** 安装 minicom

```sh
sudo apt update
sudo apt install minicom -y
```

- **步骤 3：** 进入已连接 5G 模块的串口控制台，这样我们就可以输入 AT 命令并与 5G 模块交互

```sh
sudo minicom -D /dev/ttyUSB2 -b 115200
```

- **步骤 4：** 输入命令 **"AT"** 并按回车。如果你看到响应为 "OK"，则说明 5G 模块工作正常

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/107.png"/></div>

- **步骤 6：** 输入命令 **"ATI"** 来查看模块信息

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/108.png"/></div>

- **步骤 7：** 为了测试模块，输入以下命令拨打另一个电话号码

```sh
ATD<phone_number>;
```

然后你会看到如下输出

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/109.png"/></div>

### 5G 模块使用 - 连接到互联网

即将推出

## DI/ DO

reServer Industrial 支持 4 路数字输入和 4 路数字输出通道，全部采用光耦隔离，可有效保护主板免受电压尖峰或其他电气干扰的影响。在同一连接器上还有一个 CAN 接口，我们将在本 wiki 的后面进行讨论

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/37.png"/></div>

### DI/ DO 引脚分配表

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
      <td>453</td>
      <td rowSpan={4}>12V/ 20mA current in total</td>
      <td rowSpan={4}>12V 数字输入，地信号需要<br />连接到 GND_DI（引脚 2/4/6）</td>
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
      <td rowSpan={4}>Output</td>
      <td>DO1</td>
      <td>DO_1_GPIO</td>
      <td>193</td>
      <td>PI.00</td>
      <td>399</td>
      <td rowSpan={4}>每个引脚 40V/40mA 负载</td>
      <td rowSpan={4}>数字输出，最大耐压<br />40V，地信号需要连接到<br />GND_DO（引脚 8/10）</td>
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
      <td rowSpan={2}>具有标准差分信号的 CAN 总线，<br />地信号需要连接到 GND_ISO（引脚 12）</td>
    </tr>
    <tr>
      <td />
      <td>CL</td>
    </tr>
    <tr>
      <td>Ground</td>
      <td>GND_DI</td>
      <td colSpan={5} rowSpan={3}>/</td>
      <td>12V 数字输入的参考地信号，<br />同时也是 DI 的回流路径</td>
    </tr>
    <tr>
      <td />
      <td>GND_DO</td>
      <td>数字输出的参考地信号，同时也是 DO 的回流路径</td>
    </tr>
    <tr>
      <td />
      <td>CG</td>
      <td>CAN 的参考地信号</td>
    </tr>
  </tbody>
</table>

### DI 连接概览

你可以按照下图为 DI 进行连接。最好在 DI 线上串联一个电阻。这里我们测试时在 DI1 引脚上连接了一个 4.7kΩ 电阻。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/38.png"/></div>

### DI 使用方法

你需要在 DI 线上输入 12V 电压才能被检测为输入。启用 DI / DO 的命令在 Jetpack 5 和 Jetpack 6 之间是不同的。 



<Tabs>
<TabItem value="Jetpack 5" label="Jetpack 5">

- **步骤 1：** 按照上图所示连接到 **DI1 引脚** 并输入 **12V**

- **步骤 2：** 按如下方式打开 DI1 的 GPIO

```sh
sudo su 
cd /sys/class/gpio
echo 453 > export 
cd PQ.05
```

:::note
你可以参考 **DI/ DO 引脚分配表** 来查找 GPIO 编号和 BGA 编号。在上述示例中，对于 DI1 引脚，GPIO 编号为 453，BGA 编号为 PQ.05
:::

- **步骤 3：** 执行以下命令检查状态

```sh
cat value
```

如果输出为 0，表示有 12V 输入。如果输出为 1，表示没有输入电压。

</TabItem>
<TabItem value="Jetpack 6" label="Jetpack 6">

- **步骤 1：** 按照上图所示连接到 **DI1 引脚** 并输入 **12V**

- **步骤 2：** 检查 chip0 上 DI1 的 **line offset**：

```sh
gpioinfo gpiochip0
```
根据 BGA 编号找到对应的 **line offset**。DI1 的 **line offset** 为 `105`。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/reserver-di.jpg"/></div>


:::note
你可以参考 **DI/ DO 引脚分配表** 来查找 GPIO 编号和 BGA 编号。在上述示例中，对于 DI1 引脚，GPIO 编号为 453，BGA 编号为 PQ.05	
:::

- **步骤 3：**
在 gpiochip0 中读取对应 DI1 的 **line offset 105**：
```sh
sudo gpioget gpiochip0 105
```
输出为 0 表示低电平。输出为 1 表示高电平。  
命令格式如下：`sudo gpioset <gpiochip> <line>`。

</TabItem>
</Tabs>


### DO 接线概览

你可以按照下图为 DO 进行连接。最好在 DO 线上串联一个电阻。这里我们使用了 4.7kΩ 电阻进行测试。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/39.png"/></div>

### DO 使用方法

这里你需要按照上图所示连接负载。最简单的测试方法是连接一个万用表（如果你有的话），否则连接一个最大电压小于 40V 的负载。启用 DI / DO 的命令在 Jetpack 5 和 Jetpack 6 之间是不同的。 


<Tabs>
<TabItem value="Jetpack 5" label="Jetpack 5">

- **步骤 1：** 按照上图所示连接到 **DO1 引脚** 并输入 **最大 40V**

- **步骤 2：** 按如下方式打开 DO1 的 GPIO

```sh
sudo su 
cd /sys/class/gpio
echo 399 > export 
cd PI.00
echo out > direction
```

:::note
你可以参考 **DI/ DO 引脚分配表** 来查找 GPIO 编号和 BGA 编号。在上述示例中，对于 DO1 引脚，GPIO 编号为 399，BGA 编号为 PI.00
:::

- **步骤 3：** 执行以下命令以打开该引脚

```sh
echo 1 > value
```

</TabItem>
<TabItem value="Jetpack 6" label="Jetpack 6">

- **步骤 1：** 按照上图所示连接到 **DO1 引脚** 并输入 **最大 40V**

- **步骤 2：** 检查 chip0 上 DO1 的 **line offset**：

```sh
gpioinfo gpiochip0
```
根据 BGA 编号找到对应的 **line offset**。DO1 的 **line offset** 为 `51`。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/reserver-do.jpg"/></div>



:::note
你可以参考 **DI/ DO 引脚分配表** 来查找 GPIO 编号和 BGA 编号。在上述示例中，对于 DO1 引脚，GPIO 编号为 399，BGA 编号为 PI.00
:::

- **步骤 3：**
使用以下命令来控制 DO1 的状态：
```sh
# set to 12v
sudo gpioset --mode=wait gpiochip0 51=0

# set to 0v
sudo gpioset --mode=wait gpiochip0 51=1
```
命令格式如下：`sudo gpioset <gpiochip> <line>=<value>`。

</TabItem>
</Tabs>

如果负载被打开，或者万用表输出了你输入的电压，则说明测试工作正常。

## CAN

reServer Industrial 具有一个 CAN 接口，支持 5Mbps 速率的 CAN FD（控制器局域网灵活数据速率）协议。CAN 接口通过电容隔离实现隔离，这提供了出色的 EMI 防护，并确保在工业和自动化应用中的可靠通信。默认安装了一个 120Ω 终端电阻，你可以使用 GPIO 将该电阻切换为 ON 或 OFF。

注意：CAN 接口使用隔离电源，这意味着连接到 CAN 接口的外部设备的地信号应连接到 CG 引脚。

### 使用 USB 转 CAN 适配器的接线概览

要测试并与 CAN 总线进行通信，请将 USB 转 CAN 适配器连接到板上的 CAN 接口，如下图所示。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/40.png"/></div>

这里我们使用了在 Bazaar 上提供的 [USB to CAN Analyzer Adapter with USB Cable](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)。

### 使用 USB 转 CAN 适配器

- **步骤 1：** 从适配器制造商的网站下载你所使用的 USB 转 CAN 适配器的驱动并安装。在我们的示例中，根据我们使用的适配器，驱动可以在[这里](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)找到。

- **步骤 2：** 一些适配器还会附带用于 PC 与 CAN 设备通信所需的软件。在我们的示例中，根据我们使用的适配器，我们已经下载并安装了软件，可以在[这里](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)找到。

- **步骤 3：** 在 reServer Industrial 上打开终端窗口，并执行以下命令来配置和启用 CAN 接口

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 4：** 在终端中输入 **ifconfig**，你将看到 CAN 接口已启用

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **步骤 5：** 打开你之前安装的 CAN 软件。在本例中，我们将打开根据所用 CAN 适配器安装的软件。

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/></div>

- **步骤 6：** 将 USB 转 CAN 适配器连接到 PC，并通过 Windows 搜索栏搜索打开 **Device Manager**。现在你会在 **Ports (COM & LPT)** 下看到已连接的适配器。记下这里列出的串口。根据下图，串口为 **COM9**。

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/></div>

- **步骤 7：** 打开 CAN 软件，点击 **COM** 部分旁边的 **Refresh**，点击下拉菜单并根据已连接的适配器选择串口。保持 **COM bps** 为默认值并点击 **Open**。

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/></div>

- **步骤 8：** 保持 **Mode** 和 **CAN bps** 为默认值，将 **Type** 更改为 **Standard frame** 并点击 **Set and Start**

<div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/></div>

- **步骤 9：** 在 reServer Industrial 上执行以下命令，将 CAN 信号发送到 PC

```sh
cansend can0 123#abcdabcd
```

现在你会看到软件接收到上述信号，如下图所示

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/></div>

- **步骤 10：** 在 reServer Industrial 上执行以下命令，等待从 PC 接收 CAN 信号

```sh
candump can0 &
```

- **步骤 11：** 在 CAN 软件上点击 **Send a single frame**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/></div>

现在你会看到 reServer Industrial 收到了该信号，如下所示

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

#### 与 reTerminal DM 的接线概览

如果你有一台 [reTerminal DM](https://www.seeedstudio.com/reTerminal-DM-p-5616.html)，可以直接与其通信，因为 reTerminal DM 也具有 CAN 接口。

参考下图，通过 CAN 连接 reServer Industrial 和 reTerminal DM

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/49.png"/></div>

### 与 reTerminal DM 的使用方法

- **步骤 1：** 在使用 reTerminal DM 之前，访问[此 wiki](https://wiki.seeedstudio.com/cn/reterminal-dm) 以开始使用 reTerminal DM

- **步骤 2：** 在 reServer Industrial 上打开终端窗口，并执行以下命令来配置和启用 CAN 接口

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 3：** 在 reTerminal DM 上打开终端窗口，并执行以下命令来配置和启用 CAN 接口

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 4：** 在 reTerminal DM 上打开终端窗口，并执行以下命令来配置和启用 CAN 接口

```sh
sudo modprobe mttcan
sudo ip link set can0 type can bitrate 125000
sudo ip link set can0 up
```

- **步骤 5：** 如果你在两台设备上都输入 **ifconfig**，你会看到 CAN 接口已启用

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/41.png"/></div>

- **步骤 6：** 在 reTerminal DM 上执行以下命令，等待从 reServer Industrial 接收 CAN 信号

```sh
candump can0 &
```

- **步骤 7：** 在 reServer Industrial 上执行以下命令，将 CAN 信号发送到 reTerminal Industrial

```sh
cansend can0 123#abcdabcd
```

现在你会看到 reTerminal DM 收到了如下信息

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/></div>

- **步骤 8：** 重复 **步骤 6 和步骤 7**，但交换设备的角色。使用 reTerminal DM 发送 CAN 信号，并使用 reServer Industrial 接收

## RS232/ RS422/ RS485 接口

reServer Industrial 具有一个 DB9 接口，支持 RS232、RS422 和 RS485 通信协议，并且板载有一个 DIP 拨码开关面板，用于在不同接口选项之间切换

你可以看到如下所示的 DIP 拨码开关面板：

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/21.jpg"/></div>

下面的表格根据 DIP 拨码开关的位置解释了不同的模式

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
      <td>带终端电阻的 1T/1R RS-422</td>
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
      <td>不需要总线的应用</td>
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
      <td>带终端电阻的 1T/1R RS-485</td>
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
      <td rowSpan={2}>所有 I/O 引脚为高阻态</td>
    </tr>
    <tr>
      <td>关断</td>
    </tr>
  </tbody>
</table>

:::note
开箱即用时，拨码开关的默认模式在出厂时被设置为 RS485，编码为 010
:::

上表考虑的是 DIP 拨码开关面板的前三个开关。然而，第 4 个开关负责切换转换速率（slew rate），它与数据速率直接相关

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
      <td>SLEW= Vcc<br />该 RS232/RS422/RS485 多协议收发器限制通信速率如下：<br />RS-232：最大数据速率为 1.5Mbps<br />RS-485/RS-422：最大数据速率为 10Mbps<br />实际最大数据速率取决于所使用的 Jetson SOM</td>
    </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/63.png" alt="Image" width={200} height={127} /></td>
      <td>0</td>
      <td>SLEW = GND<br />RS-232：最大数据速率为 250Kbps<br />RS-485/RS-422：最大数据速率为 250kbps</td>
    </tr>
  </tbody>
</table>

这里我们将使用 USB 转 RS232、RS485 和 RS422 适配器来测试这些接口。所以在继续之前，你需要在电脑上安装一个串口终端应用程序。这里我们推荐你安装 **Putty**，它易于设置和使用。

- **步骤 1：** 访问[这个网站](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)，并根据你电脑的架构下载 Putty

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/60.png"/></div>

这里我们根据所使用的电脑选择了 Putty，该电脑是一台 X86 Windows 64 位机器

- **步骤 2：** 打开下载好的安装程序，并按照提示安装应用

### 通用连接概览

你可以参考 DB9 接口的引脚编号和下表来进行连接

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

### RS232 连接概览

这里你可以使用 USB 转 RS232 适配器来测试该接口。我们在测试中使用了 [UGREEN USB to RS232 Adapter](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1)。

- **步骤 1：** 关闭主板电源

- **步骤 2：** 这里我们有 2 种方式来设置 DIP 拨码开关：001 模式或 101 模式。每种模式下的开关位置如下所示

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/64.png"/></div>

- **步骤 3：** 将 USB 转 RS232 适配器连接到 DB9 接口

- **步骤 4：** 将另一端连接到电脑上的任意一个 USB 端口

- **步骤 5：** 打开主板电源

### RS232 使用方法

- **步骤 1：** 你可能需要为所使用的适配器安装驱动程序，或者 Windows 会自动为你安装驱动。通过在 Windows 搜索中输入 **Device Manager** 打开设备管理器，并检查是否可以看到已连接的适配器作为一个 COM 设备。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/67.jpg"/></div>

- **步骤 2：** 如果你看不到该适配器，则需要根据你使用的适配器安装相应的驱动。通常可以在制造商网站上找到这些驱动。对于我们使用的适配器，你可以访问[此页面](https://www.ugreen.com/pages/download)，搜索型号 **20201** 并下载相应驱动

- **步骤 3：** 在电脑上打开 Putty，选择 **Terminal** 部分并进行如下设置

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **步骤 4：** 选择 **Session**，在 **Coonection type** 下选择 **Serial**，根据你在 **Device Manager** 中看到的内容设置串口号，保持速率为默认值（9600），然后点击 **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/71.jpg"/></div>

- **步骤 4：** 在 reServer Industrial 终端窗口中输入以下内容，将信号从 reServer Industrial 发送到电脑

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS232 message from reServer Industrial" > /dev/ttyTHS0
```

现在你会在 Putty 上看到这条消息

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/72.jpg"/></div>

- **步骤 5：** 在 reTerminal Industrial 终端窗口中输入以下内容，以等待从电脑接收信号

```sh
sudo cat /dev/ttyTHS0
```

- **步骤 6：** 在 Putty 中输入任意内容，按下 **ENTER**，它将显示在 reServer Industrial 的终端窗口中

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/73.png"/></div>

### RS422 连接概览

这里你可以使用 USB 转 RS422 适配器来测试该接口。我们在测试中使用了 [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K)。

- **步骤 1：** 关闭主板电源

- **步骤 2：** 这里我们有 2 种方式来设置 DIP 开关。可以设置为 000 模式或 100 模式。每种模式下的开关位置如下所示

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/65.png"/></div>

- **步骤 3：** 按如下所示使用跳线将 USB 转 RS422 适配器连接到 DB9 接头。这里我们连接的是上面提到的适配器

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/74.png"/></div>

- **步骤 4：** 将另一端连接到 PC 上的一个 USB 端口

- **步骤 5：** 打开主板电源

### RS422 使用方法

- **步骤 1：** 你可能需要为正在使用的适配器安装驱动程序，或者 Windows 会自动为你安装驱动程序。在 Windows 搜索中输入 **Device Manager** 进入设备管理器，并检查是否可以看到已连接的适配器作为一个 COM 设备。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **步骤 2：** 如果你看不到适配器，则需要根据你正在使用的适配器来安装驱动程序。通常可以在制造商网站上找到这些驱动程序。对于我们正在使用的适配器，你可以参考 [this page](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

- **步骤 3：** 在 PC 上打开 Putty，选择 **Terminal** 部分并进行如下设置

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **步骤 4：** 选择 **Session**，在 **Coonection type** 下选择 **Serial**，根据在 **Device Manager** 中看到的内容设置串口号，将 Speed 保持默认值（9600），然后点击 **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **步骤 4：** 在 reServer Industrial 终端窗口中输入以下内容，从 reServer Industrial 向 PC 发送信号

```sh
sudo chmod 777 /dev/ttyTHS0
sudo echo "RS422 message from reComputer Industrial" > /dev/ttyTHS0
```

现在你会在 Putty 上看到如下消息

- **步骤 5：** 在 reTerminal Industrial 终端窗口中输入以下内容，以等待从 PC 接收信号

```sh
sudo cat /dev/ttyTHS0
```

- **步骤 6：** 在 Putty 中输入任意内容，按下 **ENTER**，它将显示在 reServer Industrial 终端窗口中

### RS485 连接概览

这里你可以使用 USB 转 RS422 适配器来测试该接口。我们在测试中使用了 [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K)。

- **步骤 1：** 关闭主板电源

- **步骤 2：** 这里我们有 3 种方式来设置 DIP 开关。可以设置为 010 模式、011 模式或 110 模式。每种模式下的开关位置如下所示

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/66.png"/></div>

- **步骤 3：** 按如下所示使用跳线将 USB 转 RS422 适配器连接到 DB9 接头。这里我们连接的是上面提到的适配器

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/77.png"/></div>

- **步骤 4：** 将另一端连接到 PC 上的一个 USB 端口

- **步骤 5：** 打开主板电源

### RS485 使用方法

- **步骤 1：** 你可能需要为正在使用的适配器安装驱动程序，或者 Windows 会自动为你安装驱动程序。在 Windows 搜索中输入 **Device Manager** 进入设备管理器，并检查是否可以看到已连接的适配器作为一个 COM 设备。

<div align="center"><img width ="450" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/75.png"/></div>

- **步骤 2：** 如果你看不到适配器，则需要根据你正在使用的适配器来安装驱动程序。通常可以在制造商网站上找到这些驱动程序。对于我们正在使用的适配器，你可以参考 [this page](https://www.dtechelectronics.com/front/downloads/downloadssearch/user_downloadscat_id/0/search_value/rs485)

- **步骤 3：** 在 PC 上打开 Putty，选择 **Terminal** 部分并进行如下设置

  - Local echo: Force on
  - Local line editing: Force on

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/69.png"/></div>

- **步骤 4：** 选择 **Session**，在 **Coonection type** 下选择 **Serial**，根据在 **Device Manager** 中看到的内容设置串口号，将 Speed 保持默认值（9600），然后点击 **Open**

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/76.png"/></div>

- **步骤 4：** 在 reServer Industrial 终端窗口中输入以下内容，从 reServer Industrial 向 PC 发送信号

```sh
sudo su 
cd /sys/class/gpio 
echo 460 > export 
cd PR.04
echo out > direction
echo 0 > value
echo "RS485 message from reServer Industrial" > /dev/ttyTHS0
```

现在你会在 Putty 上看到如下消息

- **步骤 5：** 在 reTerminal Industrial 终端窗口中输入以下内容，以等待从 PC 接收信号

```sh
sudo su
cd /sys/class/gpio
echo 460 > export
cd PR.04
echo out > direction
echo 1 > value
cat /dev/ttyTHS0
```

- **步骤 6：** 在 Putty 中输入任意内容，按下 **ENTER**，它将显示在 reServer Industrial 终端窗口中

## USB

reServer Industrial 板载 3 个 USB3.2 接口，并具有以下特性：

- 在双层叠 USB 接口上，上下 USB 端口共享一个限流 IC，总供电能力为 2.1A 最大输出电流（单个端口也可以是 2.1A）。如果超过 2.1A，将进入过流保护状态。
- 在双层叠 USB 接口旁边的单个 USB 接口上，其总供电能力为 2.1A 最大输出电流。如果超过 2.1A，将进入过流保护状态。
- Orin NX 模块自带 3 个 USB3.2，其中只有一个在 reServer Industrial 中被使用并分成 3 路。（USB3.1 TYPE-A x2 - J4 和 USB3.1 TYPE-A
x1 -J3)。
- 只支持 USB Host，不支持 Device 模式
- 提供 5V 2.1A
- 支持热插拔

### 使用方法

我们将说明如何在连接的 USB 闪存盘上做一个简单的基准测试

- **步骤 1：** 通过执行下面的命令检查写入速度

```sh
sudo dd if=/dev/zero of=/dev/$1 bs=100M count=10 conv=fdatasync
```

- **步骤 2：** 通过执行下面的命令检查读取速度。请确保在执行完上面的写入速度命令之后再执行此命令。

```sh
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sudo dd if=/dev/$1 of=/dev/null bs=100M count=10
```

### 可配置 LED

板上有一个绿色 LED，如下图所示。默认情况下，它用作指示设备运行正常的 LED。不过，你也可以通过系统编程来控制该 LED 的开和关

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/reServer-Industrial/22.jpg"/></div>

### 使用方法

- **步骤 1：** 在终端窗口中输入以下命令以访问绿色 LED

```sh
sudo -i
cd /sys/class/gpio
echo 329 > export 
cd PCC.01
echo out > direction 
```

- **步骤 2：** 关闭 LED

```sh
echo 0 > value 
```

- **步骤 3：** 打开 LED

```sh
echo 1 > value 
```

如果你已经使用完 LED，可以执行以下命令

```sh
cd ..
echo 329 > unexport
```

## 监控系统性能

我们可以使用 **jetson stats** 应用来监控系统组件的温度，并检查其他系统信息，例如

- 查看 CPU、GPU、RAM 的使用率
- 更改电源模式
- 设置为最大时钟频率
- 检查 JetPack 信息

- **步骤 1：** 在 reServer Industrial 终端窗口中输入以下内容

```sh
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

- **步骤 2：** 重启主板

```sh
sudo reboot
```

- **步骤 3：** 在终端中输入以下内容

```sh
jtop
```

现在 **jtop** 应用将如下所示打开

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/30.png"/></div>

- **步骤 4：** 在这里你可以在应用的不同页面之间切换，并探索所有功能！

## TPM

reServer Industrial 提供 TPM 接口以连接外部 TPM 模块。这里我们使用基于 Infineon SLB9670 的 TPM2.0 模块进行了测试。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/24.jpg"/></div>

### 连接概览

按如下所示将 TPM 模块连接到 TPM 接口

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reServer-Industrial/27.jpg"/></div>

### 使用方法

在终端中执行以下命令，检查 TPM 模块是否已正确加载

```sh
sudo dmesg | grep TPM
ls /dev/tpm* -l
```

然后你会看到如下输出

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/116.png"/></div>

## reServer Industrial 的最大性能

如果你想在 reServer Industrial 上启用最大性能，请按照以下说明操作

- **步骤 1：** 输入以下命令以启用最大功率模式

```sh
sudo nvpmodel -m 0
```

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/35.jpg"/></div>

此时系统会要求输入 **YES** 以重启主板  

- **步骤 2：** 主板启动完成后，输入以下命令将 CPU 时钟设置为最高频率

```sh
sudo jetson_clocks
```

## GPIO 表

你可以访问 reServer Industrial 的 GPIO 表，以熟悉所有引脚映射。

在终端中执行以下命令以访问它

```sh
sudo cat /sys/kernel/debug/gpio
```

然后你会看到如下输出

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

（更改这些链接）

- [reServer Industrial 数据手册](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)
- [reServer Industrial 参考指南](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Reference-Guide.pdf)
- [NVIDIA Jetson 设备与载板对比](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [reServer Industrial 3D 文件](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## 技术支持

如有任何问题，欢迎在我们的[论坛](https://forum.seeedstudio.com/)中提交。

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
