---
description: 本指南详细介绍了 reComputer Super 的硬件组件和接口，包括如何连接和使用设备，如 CSI 摄像头、USB 接口、各种 M.2 接口、mini PCIe、RTC、以太网、LED、风扇、CAN、扩展端口和 HDMI，并提供分步说明和命令示例。
title: reComputer Super 硬件和接口使用
keywords:
  - reComputer Super
  - 接口使用
  - Jetson
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /cn/recomputer_jetson_super_hardware_interfaces_usage
last_update:
  date: 2025/05/26
  author: Zibo
---

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super.png"/>  
</div>

本 Wiki 介绍了 reComputer Super 上的各种硬件和接口，以及如何使用它们来扩展您的项目创意。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>



## CSI 摄像头

reComputer Super 支持标准的 4 个 MIPI CSI 摄像头，用于图像和视频捕捉。请按照以下步骤连接和测试您的摄像头。

### 硬件连接
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/sci.jpg"/>  
</div>

**步骤1.** 打开 reComputer Super 的后盖。

**步骤2.** 将 MIPI CSI 摄像头连接到 reComputer Super 板上的相应 CSI 接口。

**步骤3.** 固定摄像头并确保连接牢固。

### 使用说明

:::note
在使用 CSI 摄像头之前，请确保您已安装包含必要摄像头驱动的 JetPack 版本。
:::

**步骤1.** 检查系统是否识别到摄像头：

```bash
ls /dev/video*
```

**步骤2.** （可选）如果尚未安装视频工具，请安装：

```bash
sudo apt install v4l-utils
```

**步骤3.** 使用以下命令启动摄像头并显示视频流：

```bash
nvgstcapture-1.0 --sensor-id=0
```
:::info
如果您有多个摄像头，请将 `--sensor-id` 更改为相应的值。
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/csi.png"/>
</div>


---



## USB 
reComputer Super 配备了 4 个 USB 3.2 接口和 1 个用于调试的 USB 2.0 Type-C 接口。

### USB 3.2 接口

我们可以在 Jetson 终端中输入 `watch -n 1 lsusb -tv` 来探测 USB 接口。一旦连接了 USB 设备，该接口的详细信息将显示在这里。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

此外，您可以使用 `dd` 命令测试 USB 存储设备的读写速度：

- **读取：**
  ```bash
  sudo dd if=/dev/sda of=/dev/null bs=1024M count=5 iflag=direct
  ```
 <div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_read.png"/>
</div>

- **写入：**
  ```bash
  sudo dd if=/dev/zero of=/dev/sda bs=1024M count=5 conv=fdatasync
  ```
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_w.png"/>
</div>


### USB 2.0 Type-C 接口

通过此串口，使用 USB C 数据线，您可以在 PC 端监控输入和输出的调试信息。

**步骤1.** 将开关切换到调试模式。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug.jpg"/>
</div>

**步骤2.** 使用 USB 数据线连接 PC，下载并安装 [CP210X 驱动](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads)。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**步骤3.** 使用 USB 数据线连接 PC，解压下载的文件并在 PC 上安装驱动。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**步骤4.** 在 Windows PC 上打开设备管理器，检查分配给 reComputer Super 的 COM 端口号。它应显示在 "端口 (COM 和 LPT)" 下，名称为 "Silicon Labs CP210x USB to UART Bridge (COMX)"，其中 X 是 COM 端口号。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug1.png"/>
</div>

**步骤5.** 打开串口工具（这里以 MobaXterm 工具为例），创建一个新会话。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**步骤6.** 选择串口工具。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**步骤7.** 选择相应的串口，将波特率设置为 115200，然后点击 "OK"。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/3.png"/>
</div>

**步骤8.** 使用用户名和密码登录您的 reComputer Super。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4.png"/>
</div>

## M.2 Key M

M.2 Key M 是一种专为高速固态硬盘（SSD）设计的接口，提供超快的数据传输速度，非常适合高性能应用。

### 支持的 SSD 如下：
- [128GB NVMe M.2 PCle Gen3x4 2280 内部 SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 内部 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 内部 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 内部 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 内部 SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html)

### 硬件连接
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd.jpg"/>  
</div>

### 使用说明

在 Jetson 设备中打开终端并输入以下命令测试 SSD 的读写速度。

```bash
# 首先创建一个空白测试文件
sudo touch /ssd/test
dd if=/dev/zero of=/home/seeed/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd_w.png"/>
</div>

:::danger
测试完成后，请运行 `sudo rm /home/seeed/ssd/test` 命令删除缓存文件。
:::

## M.2 Key E

M.2 Key E 接口是一种紧凑型高速数据接口，专为无线通信模块（如 Wi-Fi 和蓝牙）设计，用于扩展无线功能。

### 硬件连接

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/wifi_c.png"/>
</div>

### 使用说明

安装 Wi-Fi 模块并启动设备后，我们可以配置设备的 Wi-Fi 和蓝牙设置。

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

**蓝牙:**
  ```bash
  bluetoothctl
  scan on
  ```
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/bluetooth.png"/>
</div>

## Mini PCIe

reComputer super 配备了一个 mini-PCIe 接口，用于 LTE 4G 模块。

#### 硬件连接

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/mini_p.png"/>
</div>

:::note
如果需要移除 SIM 卡，请将卡推入以触发内部弹簧，使 SIM 卡从插槽中弹出。
:::

### 使用说明

**步骤1.** 安装 minicom：

```bash
sudo apt update
sudo apt install minicom -y
```

**步骤2.** 进入连接的 4G 模块的串行控制台，以便输入 AT 命令并与 4G 模块交互：

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**步骤3.** 按 Ctrl+A，然后按 E 打开本地回显。

**步骤4.** 输入命令 "AT" 并按回车。如果看到响应 "OK"，则说明 4G 模块工作正常。

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/>
</div>

**步骤5.** 输入命令 "ATI" 检查模块信息。

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/>
</div>

使用 4G 网络进行互联网访问

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4g2.png"/>
</div>

## RTC

reComputer Super 配备了 RTC 接口，即使系统断电也能提供精确的时间保持功能。

### 硬件连接

将一块 3V CR1225 纽扣电池连接到板上的 RTC 插槽，如下图所示。确保电池的**正极 (+)** 朝上。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc.jpg"/>
</div>

### 使用说明

**步骤1.** 按上述方法连接 RTC 电池。

**步骤2.** 打开 reComputer Super。

**步骤3.** 在 Ubuntu 桌面上，点击右上角的下拉菜单，导航到 `设置 > 日期和时间`，通过以太网线连接网络，并选择**自动日期和时间**以自动获取日期/时间。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/>
</div>

:::note
如果未通过以太网连接到互联网，您可以在此手动设置日期/时间。
:::

**步骤4.** 打开终端窗口，执行以下命令以检查硬件时钟时间：

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time1(1).png"/>
</div>

**步骤5.** 断开网络连接并重启设备。您会发现系统时间在断电后仍能正常运行。

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time2.png"/>
</div>

## 以太网

reComputer Super 配备了 2 个 RJ45 千兆以太网接口，支持 10/100/1000M。ETH0 是原生以太网端口，另一个 ETH1 是通过 PCIe 转换的。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth.jpg"/>
</div>

每个以太网端口上有 2 个 LED 指示灯（绿色和黄色）：
- 绿色 LED：仅在连接到 1000M/10G 网络时亮起。
- 黄色 LED：显示网络活动状态。

测试以太网速度：

```bash
iperf3 -c 192.168.254.100 -R
```

:::info
-c `<ip address>` 是服务器的 IP 地址，-R 表示反向模式。
:::

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_a.png"/>
</div>

```bash
iperf3 -c 192.168.254.100
```

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_p.png"/>
</div>

## LED 指示灯

reComputer Super 配备了 2 个 LED 指示灯（PWR 和 ACT），用于显示电源状态和系统活动，方便用户实时监控设备运行状态。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/led.jpg"/>
</div>

## 风扇

reComputer Super 配备了两种类型的风扇连接器，以满足不同电压和散热需求：

- 1x 4 针风扇连接器（5V PWM）：专为低电压、低功耗的静音风扇设计，支持 PWM 转速控制，可根据系统温度智能调节风扇速度，提高能效并降低噪音。

- 1x 4 针风扇连接器（12V PWM）：兼容标准 12V PWM 风扇，同样支持精确的转速控制，非常适合高性能散热需求。

### 硬件连接

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/fan.jpg"/>
</div>

:::note
更多信息请参考 [这里](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)。
:::

**设置风扇速度：**
```bash
sudo -i
echo 100 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
```

此外，我们还可以使用 jtop 工具手动设置风扇速度。

## CAN
CAN（控制器局域网）接口是一种用于微控制器和设备之间通信的串行通信协议，具有高速、抗干扰能力强和支持多节点通信的特点。

### 硬件连接
- 请注意连接线的顺序（R OUT ↔ RX，D IN ↔ TX），然后通过 CAN 总线收发器将其转换为 CAN_L 和 CAN_H。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can1.png"/>
</div>

- [PC CAN 工具下载](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)
- 3.3V CMOS 电平 CAN 总线（非差分）

:::note
CAN 接口使用隔离电源，这意味着连接到 CAN 接口的外部设备的地信号应连接到 **GND_ISO** 引脚。
:::

这里我们使用了 [USB 转 CAN 分析仪适配器](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) 和 Bazaar 上提供的 USB 数据线。

### 使用说明

**步骤1.** 从制造商网站下载并安装您所使用的 USB 转 CAN 适配器的驱动程序。在我们的案例中，根据我们使用的适配器，可以在[这里](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver)找到驱动程序。

**步骤2.** 一些适配器还附带了用于 PC 与 CAN 设备通信的必要软件。在我们的案例中，根据我们使用的适配器，我们下载并安装了可以在[这里](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)找到的软件。

**步骤3.** 初始化 Jetson 的 CAN 接口。

在 Jetson 中创建一个名为 **`can_init.sh`** 的新文件，并写入以下内容：

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

**步骤4.** 在终端中输入 `ifconfig`，您将看到 CAN 接口已启用。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/can.png"/>
</div>

**步骤5.** 打开之前安装的 CAN 软件。在本例中，我们将打开根据我们使用的 CAN 适配器安装的软件。

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/>
</div>

**步骤6.** 将 USB 转 CAN 适配器连接到 PC，并通过 Windows 搜索栏搜索 **设备管理器** 打开它。现在，您将在 **端口 (COM & LPT)** 下看到已连接的适配器。记下此处列出的串口号。根据下图，串口号为 **COM9**。

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/>
</div>

**步骤7.** 打开 CAN 软件，点击 **COM** 部分旁边的 **刷新**，点击下拉菜单并根据已连接的适配器选择串口号。保持 **COM bps** 为默认值，然后点击 **打开**。

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/>
</div>

**步骤8.** 保持 **模式** 和 **CAN bps** 为默认值，将 **类型** 更改为 **标准帧**，然后点击 **设置并启动**。

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/>
</div>

**步骤9.** 在 reComputer Industrial 上执行以下命令，将 CAN 信号发送到 PC：

```sh
cansend can0 123#abcdabcd
```

现在，您将在软件中看到接收到的信号，如下所示：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/>
</div>

**步骤10.** 在 reComputer Industrial 上执行以下命令，等待接收来自 PC 的 CAN 信号：

```sh
candump can0 &
```

**步骤11.** 在 CAN 软件中，点击 **发送单帧**：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/>
</div>

现在，您将在 reComputer Industrial 上看到接收到的信号，如下所示：

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/>
</div>

## 扩展端口

扩展端口包括一个 40 针扩展头和一个 12 针控制与 UART 头，为外设和通信接口提供了多种连接选项。

40 针扩展头

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40pin3.jpg"/>
</div>

40 针扩展头是一个多功能的扩展接口，提供了 GPIO、I2C、SPI 和 UART 等多种功能，方便连接传感器、外设或其他模块。

### 使用说明
**启用 40 针扩展头：**
  ```bash
  sudo /opt/nvidia/jetson-io/jetson-io.py
  ```
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_2.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_3.png"/>
</div>

保存并重启。

**通过 Overlay 配置未控制的 GPIO：**

**步骤 1.** 下载并解压 [overlay 包](https://drive.weixin.qq.com/s?k=AGEAZwfLABEmqim3hXAXcApwZFAKM) 到你的 Jetson 设备。

**步骤 2.** 将 build.sh 和 gpio-overlay.dts 复制到 Jetson。

**步骤 3.** 运行 sudo ./build.sh。

**步骤 4.** 运行 sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "seeed gpio config Overlay"。

:::note
此操作仅需执行一次，之后无需重复运行。
:::

```bash
cd overlay/
ls -l
#total 16
#-rwxrwxr-x 1 seeed seeed  147 Sep  9 07:33 build.sh
#-rw-r--r-- 1 root  root  1353 Sep  9 07:36 gpio-overlay.cpp.dts
#-rw-r--r-- 1 root  root  1214 Sep  9 07:36 gpio-overlay.dtbo
#-rw-rw-r-- 1 seeed seeed 1879 Sep  9 07:35 gpio-overlay.dts
sudo ./build.sh
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "seeed gpio config Overlay"
#Modified /boot/extlinux/extlinux.conf to add following DTBO entries:
#/boot/gpio-overlay.dtbo
#Reboot system to reconfigure.

```
以下是使用 gpiod 工具包操作 GPIO 引脚的命令示例。

**步骤 1.** 安装 gpiod：
  ```bash
  sudo apt-get install gpiod
  ```
**步骤 2.** 查找引脚编号：
  ```bash
  sudo gpiofind PH.00
  ```
**步骤 3.** 设置引脚为高电平：
  ```bash
  sudo gpioset --mode=wait 0 43=1
  ```
**步骤 4.** 设置引脚为低电平：
  ```bash
  sudo gpioset --mode=wait 0 43=0
  ```
**步骤 5.** 读取输入：
  ```bash
  gpioget 0 4
  ```

GPIO 控制脚本示例
```bash
#!/bin/bash

# GPIO 控制脚本
# 用法:
#   gpio_ctrl.sh <pin_name> <command>
# 命令:
#   get    - 读取当前引脚电平
#   set    - 将引脚设置为高电平
#   clear  - 将引脚设置为低电平

# 参数验证
if [ $# -ne 2 ]; then
    echo "Usage: $0 <pin_name> <command>"
    echo "Commands:"
    echo "  get    - 读取引脚状态"
    echo "  set    - 设置为高电平"
    echo "  clear  - 设置为低电平"
    exit 1
fi

# 映射并解析参数
PIN_NAME=$1
COMMAND=$2

# 定位 GPIO
GPIO_INFO=$(gpiofind "$PIN_NAME" 2>/dev/null)
if [ -z "$GPIO_INFO" ]; then
    echo "硬件警告: 未找到 GPIO 引脚 $PIN_NAME"
    exit 1
fi

# 将信息拆分为芯片和偏移量
GPIO_CHIP=$(echo "$GPIO_INFO" | cut -d' ' -f1 | tr -d 'gpiochip')
GPIO_OFFSET=$(echo "$GPIO_INFO" | awk '{print $2}')

# 执行命令
case $COMMAND in
    "get")
        gpioget $GPIO_CHIP $GPIO_OFFSET
        ;;
    "set")
        echo "将 $PIN_NAME 设置为高电平..."
        gpioset --mode=wait $GPIO_CHIP $GPIO_OFFSET=1
        ;;
    "clear")
        echo "将 $PIN_NAME 设置为低电平..."
        gpioset --mode=wait $GPIO_CHIP $GPIO_OFFSET=0
        ;;
    *)
        echo "错误: 无效命令。请使用 get、set 或 clear。"
        exit 1
        ;;
esac

```
12 针控制与 UART 头

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/12pin2.jpg"/>
</div>

12 针控制与 UART 头提供了基本的控制信号和 UART 通信接口，用于连接和管理外部设备。

## HDMI
reComputer Super 配备了一个 HDMI 2.1 Type A 接口，支持 7680x4320 的分辨率。这使得超高清视频输出成为可能。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时能够获得顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>