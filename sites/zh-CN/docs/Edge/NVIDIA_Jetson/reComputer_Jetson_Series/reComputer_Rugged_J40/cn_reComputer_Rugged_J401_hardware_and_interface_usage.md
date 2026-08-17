---
description: reComputer Rugged J401 的硬件和接口使用
title: reComputer Rugged J401 硬件与接口使用
keywords:
  - reComputer Rugged
  - reComputer Rugged J401
  - IP66
  - Jetson
  - 硬件接口
image: https://files.seeedstudio.com/wiki/rugged_J401/interface/1.png
slug: /ai_robotics_recomputer_rugged_j401_hardware_and_interface_usage
sku: 100046979,100002634
last_update:
  date: 08/14/2026
  author: Dongxu Jin
createdAt: '2026-08-14'
updatedAt: '2026-08-14'
url: https://wiki.seeedstudio.com/cn/ai_robotics_recomputer_rugged_j401_hardware_and_interface_usage/
---

# reComputer Rugged J401 硬件与接口使用

本 wiki 介绍 reComputer Rugged J40 的各类硬件和接口，并说明如何使用它们来扩展你的项目创意。reComputer Rugged J40 上的大多数接口采用 M12 连接器，具备 IP66 级防水防尘能力以及出色的抗震性能。这使其非常适合在恶劣的户外环境中长期部署，例如船载系统和港口监控系统。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/1.png" alt="Image" width={800} height="auto" /></p>

# 硬件接口概览

## 电源

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/2.jpg" alt="Image" width={800} height="auto" /></p>

reComputer Rugged J401 配备了一个 M12 A-code 直流 19-48V 电源接口，兼容宽电压输入范围，适用于多种供电环境。接口定义如下表所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/3.png" alt="Image" width={400} height="auto" /></p>

|Pin|用途|类型|线缆颜色|
|---|---|---|---|
|1|直流电源输入|电源|棕色|
|2|||白色|
|3|接地|接地|蓝色|
|4|||黑色|

## 显示

卸下固定防水侧盖的两颗螺丝并打开侧盖，即可访问 HDMI 2.1 接口，从而获得高质量的显示输出。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/4.jpg" alt="Image" width={800} height="auto" /></p>

## 用于 SSD 的 M.2 Key M 和用于 Wi-Fi 与蓝牙的 M.2 Key E

reComputer Rugged J401 提供一个 M.2 Key E 接口，通过该接口你可以扩展设备的蓝牙和 Wi-Fi 功能。我们推荐使用 Intel Dual Band RTL8822CE 无线网卡。

M.2 Key M 是为高速固态硬盘（SSD）设计的接口，提供超高速数据传输速率，非常适合高性能应用。

接口位置如下图所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/5.jpg" alt="Image" width={800} height="auto" /></p>

### **使用说明**

如果你想拆下随设备附带的 SSD 并安装新的 SSD，需要确保你的 SSD 满足以下两个条件：

- 支持 **M.2 Key M slot with x4 PCIe Gen3** 接口。

- 符合 **2242** 尺寸规格。



在 Jetson 设备中打开终端，输入以下命令测试 SSD 的读写速度。

```Bash
sudo dd if=/dev/zero of=tempfile bs=1M count=1024 conv=fdatasync
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/6.png" alt="Image" width={800} height="auto" /></p>

测试完成后，请运行 `sudo rm tempfile` 命令删除缓存文件。

安装好 Wi-Fi 模块并为设备上电后，我们就可以配置设备的 Wi-Fi 和蓝牙设置。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/7.gif" alt="Image" width={800} height="auto" /></p>

当然，我们也可以通过以下命令检查设备的运行状态。

```Bash
ifconfig
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/8.png" alt="Image" width={800} height="auto" /></p>

```Bash
bluetoothctl
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/9.png" alt="Image" width={800} height="auto" /></p>

## 用于 4G/5G 模块的 M.2 Key B

M.2 Key B 插槽支持带 Nano SIM 卡座的 4G/5G 蜂窝模块。

### 硬件连接

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/10.png" alt="Image" width={800} height="auto" /></p>

### 使用说明

**步骤 1.** 检查硬件识别情况

```Bash
lsusb 
```

该命令会显示系统中连接的所有 USB 设备列表，以及它们的厂商（ID）、类型和其他信息。例如，输出中可能会显示来自 Quectel Wireless Solutions Co., Ltd. 的 EM12-G 设备，表明 5G 模块已存在。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/11.png" alt="Image" width={800} height="auto" /></p>

**步骤 2.** 确认驱动加载情况

必须确保 5G 模块所需的 option 驱动已被加载。我们可以使用 lsmod 命令进行检查。

```Bash
lsmod | grep option 
```

如果 option 驱动加载成功，输出中会显示与该驱动相关的信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/12.png" alt="Image" width={800} height="auto" /></p>

**步骤 3.** 配置 ModemManager

ModemManager 是一个用于管理调制解调器设备的工具，需要安装并重启。

```Bash
sudo apt install modemmanager 
sudo systemctl restart ModemManager 
```

apt install 命令用于安装 ModemManager 软件包，而 systemctl restart 用于重启 ModemManager 服务，以确保新设置生效。

**步骤 4.** 验证模块识别情况

我们可以使用 mmcli -L 命令检查 ModemManager 是否能够正确识别 5G 模块。

```Bash
mmcli -L 
```

如果 5G 模块被识别，将会显示类似 /org/freedesktop/ModemManager1/Modem/0 的输出，表示检测到的调制解调器设备路径。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/13.png" alt="Image" width={800} height="auto" /></p>

**步骤 5.** 设置 APN

APN（接入点名称，Access Point Name）对于移动设备连接网络至关重要。我们将使用 nmcli 命令创建一个承载配置文件。以中国移动为例，可以通过以下命令创建配置文件：

```Bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

该命令会新增一个 GSM（全球移动通信系统，Global System for Mobile Communications）类型的连接，将 APN 指定为 "CMNET"，并使用自动 IPv4 配置。

**步骤 6.** 激活连接

创建承载配置文件后，我们需要激活该连接。

```Bash
sudo nmcli con up "gsm" 
```

该命令会激活 GSM 连接，如果成功，将显示确认信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/14.png" alt="Image" width={800} height="auto" /></p>

**步骤 7.** 再次验证模块识别情况

再次运行 mmcli -L 命令，以确保在配置 APN 之后模块仍然被识别。

```Bash
mmcli -L 
```

**步骤 8.** 检查模块状态

最后，我们可以使用 mmcli -m 0 命令查看模块的详细信息，例如 IP 分配、运营商以及网络连接状态。

```Bash
mmcli -m 0 
```

该命令会提供有关 5G 模块的全面信息，包括其制造商、型号、支持和当前使用的网络技术、设备状态以及已连接的网络运营商。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/15.png" alt="Image" width={800} height="auto" /></p>

## 以太网

reComputer Rugged J401 提供 1 个标准千兆以太网（10/100/1000M）RJ45 接口（J35）和 4 个千兆 PSE（供电设备，Power Sourcing Equipment）RJ45 接口（J36–J39）。标准千兆接口用于常规网络连接。PSE 接口支持 IEEE 802.3af/at 标准，可通过以太网为连接的设备（如 IP 摄像头和无线接入点）供电，单口最大输出功率为 15.4W（802.3af）。这使其非常适合工业、AMR 和户外边缘计算应用，无需单独铺设电源线。所有千兆接口均源自 Jetson Orin 模块内部的 PCIe 控制器，并支持 10/100/1000M 自适应协商。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/16.jpg" alt="Image" width={800} height="auto" /></p>

## USB

reComputer Rugged J401 提供 4 个 USB 3.2 Type-A 接口（通过内部 USB 3.1 Gen1 集线器实现，支持最高 5Gbps 数据速率，可连接高速外设、存储设备或摄像头）以及 1 个 USB 2.0 Type-C 调试接口（作为串口控制台，用于访问系统日志、调试启动问题以及执行固件更新）。

### USB-A 速度测试

创建一个脚本来测试 USB 设备速度：

```Bash
vim test_usb.sh
```

粘贴以下内容：

```Bash
cat <<'EOF' | sudo tee test_usb.sh >/dev/null
#!/bin/bash
set -e

MOUNT_POINT="$1"
TEST_FILE="$MOUNT_POINT/test_usb_speed.bin"

if [ -z "$MOUNT_POINT" ]; then
  echo "Usage: $0 <mount_point>"
  echo "Example: $0 /media/seeed/USB"
  exit 1
fi

if [ ! -d "$MOUNT_POINT" ]; then
  echo "Error: $MOUNT_POINT is not a directory"
  exit 1
fi

echo "Write test..."
dd if=/dev/zero of="$TEST_FILE" bs=1M count=2048 conv=fdatasync status=progress

echo
echo "Drop caches..."
sync
echo 3 | sudo tee /proc/sys/vm/drop_caches >/dev/null

echo "Read test..."
dd if="$TEST_FILE" of=/dev/null bs=1M count=2048 status=progress

echo
echo "Cleaning up..."
rm -f "$TEST_FILE"
EOF
```

按 Esc 退出插入模式，然后输入 `:w` 并回车保存脚本，之后退出进程。

使脚本具有可执行权限并进行测试：

```Bash
sudo chmod +x test_usb.sh
./test_usb.sh /mnt          # If your USB drive is mounted at /mnt
# Or
./test_usb.sh /media/usb    # If your USB drive is mounted at /media/usb
# Or
./test_usb.sh /path/to/your/usb/mount_point
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/17.png" alt="Image" width={800} height="auto" /></p>

### USB 2.0 Type-C 接口

通过此串口，使用 USB-C 数据线，你可以在 PC 端监控输入和输出的调试信息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/18.jpg" alt="Image" width={400} height="auto" /></p>

在 Windows 上安装 Silicon Labs CP210x Universal Windows VCP Driver。

在设备管理器中，找到并确认分配给串行设备的 COM 端口

（截图中为 COM8）。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/19.png" alt="Image" width={800} height="auto" /></p>

在 PowerShell 中运行以下命令：

```PowerShell
#Choose your own serial port 
python -m serial.tools.miniterm COM8 115200
```

使用用户名和密码登录。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/20.png" alt="Image" width={800} height="auto" /></p>

## RTC

reComputer Rugged J401 集成了带电池备份的硬件 RTC，用于精确计时。

### 硬件连接

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/21.jpg" alt="Image" width={400} height="auto" /></p>

### 使用说明

**步骤 1.** 按上述说明连接 RTC 电池。

**步骤 2.** 打开 reComputer Rugged J401。

**步骤 3.** 在 Ubuntu 桌面上，点击右上角的下拉菜单，进入 `Settings > Date & Time`，通过以太网线连接网络并选择 **Automatic Date & Time**，以自动获取日期/时间。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/22.png" alt="Image" width={800} height="auto" /></p>

如果你尚未通过以太网连接到互联网，可以在此手动设置日期/时间。

**步骤 4.** 打开终端窗口，执行以下命令检查硬件时钟时间：

```Bash
cat /sys/devices/platform/bpmp/bpmp:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

**步骤 5.** 断开网络连接并重启设备。你会发现系统时间虽然断电，但仍能正常工作。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/23.png" alt="Image" width={800} height="auto" /></p>

## CAN

> 测试和介绍将在文档完成后补充。
> 
> 

## DI/DO

reComputer Rugged J401 的 DI/DO 接口集成在 J47 2x10P 连接器上，与 CAN 接口共用该接口。它们支持 2 路数字输入和 2 路数字输出，具有信号传输稳定和工业级电压适配能力，适用于连接数字传感器、继电器等外设设备。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/24.png" alt="Image" width={500} height="auto" /></p>

### 硬件连接

M12 接口上对应的 DI/DO 引脚如下图所示。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/25.png" alt="Image" width={500} height="auto" /></p>

数字输入（DI）/ 数字输出（DO）通道

### 使用说明

#### 数字输出（DO）操作

DO 接口采用开漏输出。你可以通过命令设置输出电平（高/低），以控制继电器、LED 等外设。

运行以下命令以使能 DO 通道（输出 12V，由外部上拉电阻和 12V 电源供电）：

```Markdown
# Enable DO_30V_1 (gpiochip0 106)
sudo gpioset --mode=wait 0 106=1

# Enable DO_30V_2 (gpiochip0 43)
sudo gpioset --mode=wait 0 43=1
```

运行以下命令以关闭 DO 通道（输出约 0V）：

```PowerShell
# Disable DO_30V_1 (gpiochip0 106)
sudo gpioset --mode=wait 0 106=0

# Disable DO_30V_2 (gpiochip0 43)
sudo gpioset --mode=wait 0 43=0
```

DO 拉高前：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/26.png" alt="Image" width={800} height="auto" /></p>

DO 拉高后：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/27.png" alt="Image" width={800} height="auto" /></p>

#### **数字输入（DI）操作**

使用 `gpioget` 命令读取 DI 通道的输入电平（返回值 `1` = 高电平，`0` = 低电平），以获取外设设备的状态。

```PowerShell
# Read DI_12V_1 (gpiochip0 105) status
gpioget gpiochip0 105

# Read DI_12V_2 (gpiochip0 144) status
gpioget gpiochip0 144
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/28.png" alt="Image" width={400} height="auto" /></p>



## UART

reComputer Rugged J401 配备了独立的 UART 接口（UART1），支持 RS232、RS422 和 RS485 通信模式，具有信号传输稳定、与外设设备兼容性强等特点。

### 硬件连接

UART 接口通道

通过拨动 SW3 开关在 RS232、RS485 和 RS422 模式之间切换。

注意：当开关按下（ON）时，该位为 0；未按下时，该位为 1。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/29.png" alt="Image" width={500} height="auto" /></p>

|Mode_0|Mode_1|Mode_2|Mode|Status|
|---|---|---|---|---|
|0|0|0|RS-422 全双工|1T/1R RS-422|
|0|0|1|纯 RS-232|3T/5R RS-232|
|0|1|0|RS-485 半双工|1T/1R RS-485，TX ENABLE <br />低电平有效|
|0|1|1|RS-485 半双工|1T/1R RS-485，TX ENABLE 高电平有效|
|1|0|0|RS-422 全双工|带终端电阻的 RS-422|
|1|0|1|RS-232|1T/1R RS-232 与 RS485 应用共存，无需总线开关（用于特殊用途）|
|1|1|0|RS-485|带终端电阻的 1T/1R RS-485，TX ENABLE 低电平有效|
|1|1|1|关闭|所有 I/O 引脚为高阻态|



## SPI

### 硬件连接

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/30.jpg" alt="Image" width={800} height="auto" /></p>

### 使用说明

使用杜邦线连接目标 SPI 通道的核心引脚（以 /dev/spidev0.0 为例）：将 MOSI 引脚连接到其 MISO 引脚（实现数据回环收发）。

接线示意图如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/31.jpg" alt="Image" width={500} height="auto" /></p>

**步骤 1：加载 SPI 内核模块（前提条件）**

在操作 SPI 接口之前，确保已加载 `spidev` 内核模块（默认系统可能已预加载，但建议手动确认）：

```Bash
sudo modprobe spidev
```

如果命令执行后没有错误提示，则表示模块加载成功；如果模块已经加载，该命令不会返回任何信息，这是正常现象。

**步骤 2：查看 SPI 设备节点**

在终端中输入以下命令，查看 reComputer Rugged J401 的 SPI 接口映射出的设备名称：

```Bash
ls /dev/spidev*
```

如果未显示任何设备节点，说明 `spidev` 模块未成功加载。请重新运行 `sudo modprobe spidev` 并检查系统日志进行排查。

**步骤 3：获取并编译 SPI 测试代码**

从 GitHub 拉取 `spidev-test` 测试代码并进行编译：

```Bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

**步骤 4：运行 SPI 测试程序**

在终端中输入以下命令运行 SPI 测试程序（以 `/dev/spidev2.0` 为例）：

```Bash
sudo ./spidev_test -v -D /dev/spidev0.0 -s 100000 -p "Hello SPI"
```

**步骤 5：验证测试结果**

运行测试命令后，你可以在终端中观察 SPI0.0 接口的数据收发情况。核心输出如下：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/32.png" alt="Image" width={800} height="auto" /></p>

> 关键判断标准：TX（发送）数据与 RX（接收）数据一致，表明 SPI 回环测试成功，SPI 接口功能正常。
> 
> 

## **I2C**

Rugged J401 通过 J8 2x10 Pin 连接器提供 I2C 接口，可方便连接传感器和外设，实现系统扩展。

### **硬件连接**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/33.png" alt="Image" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/34.jpg" alt="Image" width={500} height="auto" /></p>

将你的 I2C 设备连接到载板上的 I2C 接口：

- Ground -> Ground（引脚 1）

- SDA -> SDA（引脚 16）

- SCL -> SCL（引脚 14）

- VCC -> 3V3（引脚 20）

### **使用说明**

**步骤 1.** 安装 I2C 测试工具：

```Bash
sudo apt update
sudo apt-get install i2c-tools
```

**步骤 2.** 查看 I2C 总线映射：

```Bash
i2cdetect -l
```

**步骤 3.** 扫描 I2C 总线上的设备：

```Bash
sudo i2cdetect -y -r 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/35.png" alt="Image" width={500} height="auto" /></p>



## 资源

- [reComputer Rugged J40 规格书](#) *(即将推出)*
- [Linux_for_Tegra 源代码](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [NVIDIA Jetson 设备对比](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品的过程中尽可能顺畅。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
