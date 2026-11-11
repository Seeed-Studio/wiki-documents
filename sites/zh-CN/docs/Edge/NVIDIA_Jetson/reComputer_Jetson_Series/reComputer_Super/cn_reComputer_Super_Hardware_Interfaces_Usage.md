---
description: "reComputer Super 接口：CSI、USB、M.2 Key M 和 E、Mini PCIe、RTC、以太网、LED、风扇和 CAN。引脚定义、接线方式和已测试命令。"
title: reComputer Super 硬件与接口使用
keywords:
  - reComputer Super
  - 接口使用
  - Jetson
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /recomputer_jetson_super_hardware_interfaces_usage
last_update:
  date: 11/06/2026
  author: Zibo
createdAt: '2025-05-29'
updatedAt: '2026-11-06'
url: https://wiki.seeedstudio.com/cn/recomputer_jetson_super_hardware_interfaces_usage/
---

<div align="center">
  <img alt="reComputer Super，裸露载板与已组装整机并排放置，展示前面板接口" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super.png"/>  
</div>

reComputer Super 引出了 4 个 MIPI CSI 摄像头接口、USB 3.2 和 USB 2.0 Type-C、M.2 Key M 和 Key E、Mini PCIe、RTC、CAN、以太网以及一个 40 针扩展排针。下面每一节都会连接一个接口，并给出用于确认其工作的命令或检查方法。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

## CSI 摄像头

reComputer Super 支持标准的 4 路 MIPI CSI 摄像头用于图像和视频采集。请按照以下步骤连接并测试你的摄像头。

### 硬件连接

<div align="center">
  <img alt="MIPI CSI 摄像头软排线连接到 reComputer Super 机壳内部的 CSI 插槽" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/sci.jpg"/>  
</div>

**步骤 1.** 打开 reComputer Super 的后盖。

**步骤 2.** 将 MIPI CSI 摄像头连接到 reComputer Super 板上的对应 CSI 接口。

**步骤 3.** 固定摄像头并确保连接牢固。

### 使用说明

:::note
在使用 CSI 摄像头之前，请确保你已安装带有必要摄像头驱动的 JetPack 版本。
:::

:::info
**适用版本范围：**下面的命令基于 JetPack 6.x 中相机和 GPIO 工具的布局。NVIDIA 在后续版本中更改了部分相机软件栈，因此在 JetPack 7.2 上运行前，请先确认已安装 `nvgstcapture-1.0`——如果该二进制不存在，请改用 `gst-launch-1.0` 搭配 `nvarguscamerasrc` 来驱动传感器。
:::

**步骤 1.** 检查系统是否识别到摄像头：

```bash
ls /dev/video*
```

**步骤 2.**（可选）如果尚未安装视频工具，请安装：

```bash
sudo apt install v4l-utils
```

**步骤 3.** 使用以下命令启动摄像头并显示视频流：

```bash
nvgstcapture-1.0 --sensor-id=0
```

:::info
如果你连接了多个摄像头，请将 `--sensor-id` 修改为对应的值。
:::

<div align="center">
  <img alt="reComputer Super 桌面上显示 CSI 摄像头预览窗口" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/csi.png"/>
</div>

---

## USB

reComputer Super 共提供 4 个 USB 3.2 接口和 1 个用于调试的 USB 2.0 Type-C 接口。

### USB 3.2 接口

我们可以在 Jetson 终端中输入 `watch -n 1 lsusb -tv` 来检测 USB 接口。一旦连接 USB 设备，该接口的详细信息就会显示在这里。

<div align="center">
  <img alt="watch lsusb 输出列出连接到 reComputer Super 的 USB 设备" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

此外，你还可以使用 `dd` 命令测试 USB 存储设备的读写速度：

- **读：**

  ```bash
  sudo dd if=/dev/sda of=/dev/null bs=1024M count=5 iflag=direct
  ```

 <div align="center">
  <img alt="dd 读测试输出，测量从 USB 盘读取速度" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_read.png"/>
</div>

- **写：**

  ```bash
  sudo dd if=/dev/zero of=/dev/sda bs=1024M count=5 conv=fdatasync
  ```

<div align="center">
  <img alt="dd 写测试输出，测量向 USB 盘写入速度" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_w.png"/>
</div>

### USB 2.0 Type-C 接口

通过这个串口，使用 USB-C 数据线，你可以在 PC 端监控输入和输出的调试信息。

**步骤 1.** 将拨码开关切换到调试模式。

<div align="center">
  <img alt="reComputer Super 上的调试与烧录模式拨码开关被拨到调试模式" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug.jpg"/>
</div>

**步骤 2.** 使用 USB 数据线连接 PC，在 PC 上下载 [CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads)。

<div align="center">
  <img alt="Silicon Labs CP210x VCP 驱动下载页面" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**步骤 3.** 使用 USB 数据线连接 PC，解压已下载的文件并在 PC 上安装驱动。

<div align="center">
  <img alt="在解压后的驱动文件夹中选中 CP210xVCPInstaller_x64.exe" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**步骤 4.** 在 Windows PC 上打开设备管理器，检查分配给 reComputer Super 的 COM 端口号。它应显示在“Ports (COM & LPT)”下，名称为“Silicon Labs CP210x USB to UART Bridge (COMX)”，其中 X 为 COM 端口号。

<div align="center">
  <img alt="Windows 设备管理器中在“端口”下显示的 CP210x COM 端口" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug1.png"/>
</div>

**步骤 5.** 打开串口工具（这里以 MobaXterm 工具为例），创建一个新会话。

<div align="center">
  <img alt="MobaXterm 主窗口，最近会话列表中包含 COM3" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**步骤 6.** 选择 Serial 工具。

<div align="center">
  <img alt="MobaXterm 会话类型选择界面，Serial 被高亮选中" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**步骤 7.** 选择对应的串口，将波特率设置为 115200 并点击 "OK"。

<div align="center">
  <img alt="MobaXterm 串口设置界面，已选择 COM 端口和 115200 波特率" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/3.png"/>
</div>

**步骤 8.** 使用用户名和密码登录你的 reComputer Super。

<div align="center">
  <img alt="通过调试端口的串口控制台登录到 reComputer Super" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4.png"/>
</div>

## M.2 Key M

M.2 Key M 是为高速固态硬盘（SSD）设计的接口，提供超高速数据传输速率，非常适合高性能应用。

### 支持的 SSD 如下

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html)

### 硬件连接

<div align="center">
  <img alt="NVMe SSD 插在 reComputer Super 上的 M.2 Key M 插槽中" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd.jpg"/>  
</div>

### 使用说明

在 Jetson 设备中打开终端，输入以下命令测试 SSD 的读写速度。

```bash
#create a blank test file first
sudo touch /ssd/test
dd if=/dev/zero of=/home/seeed/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img alt="终端中 dd 写测试输出，测量 NVMe SSD 吞吐量" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd_w.png"/>
</div>

:::danger
测试完成后，请运行 `sudo rm /home/seeed/ssd/test` 命令删除缓存文件。
:::

## M.2 Key E

M.2 Key E 接口是一种紧凑型高速数据接口，专为 Wi-Fi 和蓝牙等无线通信模块设计，用于扩展无线功能。

### 硬件连接

<div align="center">
  <img alt="Wi-Fi 模块安装在 M.2 Key E 插槽中，并已连接天线线缆" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/wifi_c.png"/>
</div>

### 使用说明

安装好 Wi-Fi 模块并给设备上电后，我们可以配置设备的 Wi-Fi 和蓝牙设置。

<div align="center">
  <img alt="在安装无线模块后，Ubuntu 桌面上显示 Wi-Fi 和蓝牙指示图标" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/>
</div>

当然，我们也可以使用以下命令检查设备的运行状态。

```bash
ifconfig
```

<div align="center">
  <img alt="ifconfig 输出中列出 reComputer Super 上的无线网络接口" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_ifconfig.png"/>
</div>

**蓝牙：**

  ```bash
  bluetoothctl
  scan on
  ```

<div align="center">
  <img alt="在 reComputer Super 上运行 bluetoothctl scan 开始搜索设备" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/bluetooth.png"/>
</div>

## Mini PCIe

reComputer Super 自带一个用于 LTE 4G 模块的 Mini PCIe 接口。

### 硬件连接

<div align="center">
  <img alt="Quectel EC25 4G 模块插在 Mini PCIe 插槽中，并连接了三根天线线缆" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/mini_p.png"/>
</div>

:::note
如果你想取出 SIM 卡，请向内按压卡片以触发内部弹簧，这样 SIM 卡就会从卡槽中弹出。
:::

### 使用说明

**步骤 1.** 安装 minicom：

```bash
sudo apt update
sudo apt install minicom -y
```

**步骤 2.** 进入已连接 4G 模块的串口终端，这样我们就可以输入 AT 指令并与 4G 模块交互：

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**步骤 3.** 先按 Ctrl+A，然后按 E 打开本地回显。

**步骤 4.** 输入命令 "AT" 并按回车。如果你看到返回 "OK"，说明 4G 模块工作正常。

<div align="center">
  <img alt="在向 4G 模块发送 AT 指令后串口终端返回 OK" width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/>
</div>

**步骤 5.** 输入命令 "ATI" 来查看模块信息。

<div align="center">
  <img alt="在输入 ATI 指令后串口终端返回模块信息" width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/>
</div>

使用 4G 网络访问互联网

<div align="center">
  <img alt="网络设置中显示 4G 连接正在承载互联网流量" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4g2.png"/>
</div>

## RTC

reComputer Super 提供 RTC 接口，即使系统断电也能保持精确计时。

### 硬件连接

将一颗 3V CR1225 纽扣电池按如下图所示连接到板上的 RTC 插座。请确保电池的**正极 (+)** 朝上。

<div align="center">
  <img alt="安装在 reComputer Super 上 RTC 插座中的 CR1225 纽扣电池" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc.jpg"/>
</div>

### 使用说明

**步骤 1.** 按上述说明连接 RTC 电池。

**步骤 2.** 打开 reComputer Super。

**步骤 3.** 在 Ubuntu 桌面上，点击右上角的下拉菜单，进入 `Settings > Date & Time`，通过以太网线连接到网络，并选择 **Automatic Date & Time** 以自动获取日期/时间。

<div align="center">
  <img alt="Ubuntu 日期和时间设置页面，用于启用自动时间设置" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/>
</div>

:::note
如果你尚未通过以太网连接到互联网，可以在此手动设置日期/时间。
:::

**步骤 4.** 打开一个终端窗口，执行以下命令检查硬件时钟时间：

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

<div align="center">
  <img alt="终端从 nvvrs-pseq-rtc 设备读取 RTC 时间" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time1(1).png"/>
</div>

**步骤 5.** 断开网络连接并重启设备。你会发现系统时间虽然失去电源，但仍能正常工作。
<div align="center">
  <img alt="在断开网络连接后，由 RTC 维持的系统时间显示在终端中" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time2.png"/>
</div>

## 以太网

reComputer Super 上有 2 个支持 10/100/1000M 的 RJ45 千兆以太网接口。ETH0 是原生以太网端口，另一个 ETH1 是由 PCIe 转换而来。

<div align="center">
  <img alt="reComputer Super 上标记为 ETH0 和 ETH1 的两个 RJ45 千兆以太网端口" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth.jpg"/>
</div>

每个以太网端口上都有 2 个 LED（绿色和黄色）：

- 绿色 LED：仅在连接到 1000M/10G 网络时点亮。
- 黄色 LED：显示网络活动状态。

测试以太网速度：

```bash
iperf3 -c 192.168.254.100 -R
```

:::info
-c `<ip address>` 为服务器 IP 地址，-R 表示反向模式。
:::

<div align="center">
  <img alt="reComputer Super 上以反向模式运行的 iperf3 客户端，接收 942 Mbits/sec" width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_a.png"/>
</div>

```bash
iperf3 -c 192.168.254.100
```

<div align="center">
  <img alt="iperf3 客户端输出，用于测量 reComputer Super 上的千兆以太网吞吐量" width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_p.png"/>
</div>

## LED 指示灯

reComputer Super 配备了 2 个 LED 指示灯（PWR 和 ACT），用于显示电源状态和系统活动，使用户能够实时监控设备运行情况。

<div align="center">
  <img alt="reComputer Super 上的 PWR 和 ACT LED 指示灯" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/led.jpg"/>
</div>

## 风扇

reComputer Super 配备了两种类型的风扇连接器，以满足不同电压和散热需求：

- 1x 4-Pin 风扇连接器（5V PWM）：专为低电压、低功耗静音风扇设计，该连接器支持 PWM 转速控制，可根据系统温度智能调节风扇转速，从而提高能效并降低噪音。

- 1x 4-Pin 风扇连接器（12V PWM）：兼容标准 12V PWM 风扇，同样支持精确转速控制，非常适合高性能散热需求。

### 硬件连接

<div align="center">
  <img alt="reComputer Super 板上的 12V 和 5V PWM 风扇连接器" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/fan.jpg"/>
</div>

:::note
更多信息请查看[这里](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control)。
:::

**设置风扇转速：**

  ```bash
  sudo -i
  echo 100 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
  ```

此外，我们还可以使用 jtop 工具手动设置风扇转速。

## CAN

reComputer Super 系列提供了 CAN 接口，其中 CAN 信号以 TTL/CMOS 电平直接从 SOM 输出，这是非标准的差分信号，需要外接 CAN 收发器才能连接到标准 CAN 总线；它支持 CAN FD 帧格式，允许更长的数据长度和更高的数据速率，非常适合工业自动化、机器人、汽车原型开发以及其他需要可靠实时通信的应用。

### 硬件连接

请注意连接线的顺序（R OUT ↔ RX，D IN ↔ TX），然后通过 CAN 总线收发器将其转换为 CAN_L 和 CAN_H。

<div align="center">
  <img alt="连接到 reComputer Super 上 CAN 总线收发器的 CAN TX 和 RX 引脚" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can1.png"/>
</div>

根据 [reComputer Super 数据手册](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf)，将 CAN 端子按对应方式连接到 CAN 总线收发器，然后将 CAN 总线收发器连接到 [USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)，最后连接到 Jetson 进行回环通信测试。

<div align="center">
  <img alt="CAN 总线排针的数据手册表格，列出了 TX、RX、GND 和 3V3 引脚" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_port.png"/>
</div>


<div align="center">
  <img alt="连接到 reComputer Super 上 CAN 端子的 USB-CAN 分析仪" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_connect.png"/>
</div>

### 使用说明

**步骤 1.** 配置并打开 can0：

```bash
sudo ip link set can0 down
sudo ip link set can0 type can bitrate 500000
sudo ip link set can0 up
```
**步骤 2.** 通信测试。
打开一个终端用于接收信号。
```bash
candump can0
```

**步骤 3.** 再打开一个终端用于发送信号。
```bash
cansend can0 123#abcdabcd
```
<div align="center">
  <img alt="cansend 和 candump 输出显示在 can0 上回环的 CAN 帧" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can_loop.png"/>
</div>

## 扩展端口

扩展端口包括一个 40 针扩展排针和一个 12 针控制与 UART 排针，为外设和通信接口提供多种连接选项。

### 40 针扩展排针

<div align="center">
  <img alt="reComputer Super 载板上的 40 针扩展排针" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40pin3.jpg"/>
</div>

40 针扩展排针是一个多功能扩展接口，提供 GPIO、I2C、SPI 和 UART 等多种功能，方便连接传感器、外设或其他模块。

40 针排针的详细信息如下所示：

<div class="table-center">
<table style={{textAlign: 'center'}}>
<thead>
<tr>
  <th>排针引脚</th>
  <th>信号</th>
  <th>BGA 引脚</th>
  <th>默认功能</th>
</tr>
</thead>
<tbody>
<tr><td>1</td><td>3.3V</td><td>-</td><td>主 3.3V 电源</td></tr>
<tr><td>2</td><td>5V</td><td>-</td><td>主 5V 电源</td></tr>
<tr><td>3</td><td>I2C1_SDA</td><td>PDD.02</td><td>I2C #1 数据</td></tr>
<tr><td>4</td><td>5V</td><td>-</td><td>主 5V 电源</td></tr>
<tr><td>5</td><td>I2C1_SCL</td><td>PDD.01</td><td>I2C #1 时钟</td></tr>
<tr><td>6</td><td>GND</td><td>-</td><td>地</td></tr>
<tr><td>7</td><td>GPIO09</td><td>PAC.06</td><td>通用输入输出</td></tr>
<tr><td>8</td><td>UART1_TXD</td><td>PR.02</td><td>UART #1 发送</td></tr>
<tr><td>9</td><td>GND</td><td>-</td><td>地</td></tr>
<tr><td>10</td><td>UART1_RXD</td><td>PR.03</td><td>UART #1 接收</td></tr>
<tr><td>11</td><td>UART1_RTS</td><td>PR.04</td><td>UART #1 请求发送</td></tr>
<tr><td>12</td><td>I2S0_SCLK</td><td>PH.07</td><td>音频 I2S #0 时钟</td></tr>
<tr><td>13</td><td>SPI1_SCK</td><td>PY.00</td><td>SPI #1 时钟</td></tr>
<tr><td>14</td><td>GND</td><td>-</td><td>地</td></tr>
<tr><td>15</td><td>GPIO12</td><td>PN.01</td><td>通用输入输出</td></tr>
<tr><td>16</td><td>SPI1_CS1</td><td>PY.04</td><td>SPI #1 片选 #1</td></tr>
<tr><td>17</td><td>3.3V</td><td>-</td><td>主 3.3V 电源</td></tr>
<tr><td>18</td><td>SPI1_CS0</td><td>PY.03</td><td>SPI #1 片选 #0</td></tr>
<tr><td>19</td><td>SPI0_MOSI</td><td>PZ.05</td><td>SPI #0 主输出 / 从输入</td></tr>
<tr><td>20</td><td>GND</td><td>-</td><td>地</td></tr>
<tr><td>21</td><td>SPI0_MISO</td><td>PZ.04</td><td>SPI #0 主输入 / 从输出</td></tr>
<tr><td>22</td><td>SPI1_MISO</td><td>PY.01</td><td>SPI #1 主输入 / 从输出</td></tr>
<tr><td>23</td><td>SPI0_SCK</td><td>PZ.03</td><td>SPI #0 时钟</td></tr>
<tr><td>24</td><td>SPI0_CS0</td><td>PZ.06</td><td>SPI #0 片选 #0</td></tr>
<tr><td>25</td><td>GND</td><td>-</td><td>地</td></tr>
<tr><td>26</td><td>SPI0_CS1</td><td>PZ.07</td><td>SPI #0 片选 #1</td></tr>
<tr><td>27</td><td>ID_I2C_SDA (I2C0_SDA)</td><td>PDD.00</td><td>I2C #0 数据</td></tr>
<tr><td>28</td><td>ID_I2C_SCL (I2C0_SCL)</td><td>PCC.07</td><td>I2C #0 时钟</td></tr>
<tr><td>29</td><td>GPIO01</td><td>PQ.05</td><td>通用输入输出</td></tr>
<tr><td>30</td><td>GND</td><td>-</td><td>地</td></tr>
<tr><td>31</td><td>GPIO11</td><td>PQ.06</td><td>通用输入输出</td></tr>
<tr><td>32</td><td>GPIO07</td><td>PG.06</td><td>通用输入输出</td></tr>
<tr><td>33</td><td>GPIO13</td><td>PG.00</td><td>系统保留</td></tr>
<tr><td>34</td><td>GND</td><td>-</td><td>地</td></tr>
<tr><td>35</td><td>I2S0_LRCK (I2S0_FS)</td><td>PI.02</td><td>音频 I2S #0 帧同步</td></tr>
<tr><td>36</td><td>UART1_CTS</td><td>PR.05</td><td>UART #1 清除发送</td></tr>
<tr><td>37</td><td>SPI1_MOSI</td><td>PY.02</td><td>SPI #1 主输出 / 从输入</td></tr>
<tr><td>38</td><td>I2S0_SDIN (I2S0_DIN)</td><td>PI.01</td><td>音频 I2S #0 数据输入</td></tr>
<tr><td>39</td><td>GND</td><td>-</td><td>地</td></tr>
<tr><td>40</td><td>I2S0_SDOUT (I2S0_DOUT)</td><td>PI.00</td><td>音频 I2S #0 数据输出</td></tr>
</tbody>
</table>
</div>


### 使用说明

简单 GPIO 控制示例
```bash
#install
sudo apt-get install gpiod

# Search for the corresponding number for the pin
sudo gpiofind PH.00
gpiochip0 43

#Set the pin to H, then press Enter to release.
sudo gpioset --mode=wait 0 43=1

#Set the Pin to L, then press Enter to release.
sudo gpioset --mode=wait 0 43=0

#gpio 0_119 Low level maintained for 2 seconds
sudo gpioset --mode=time -s 2 0 119=0

#input
sudo gpioget 0 43
```
**如果你想配置默认未启用的 GPIO，请参考以下步骤：**

启用 40-Pin 排针：
```bash
  sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center">
  <img alt="jetson-io.py 主菜单列出了 40-pin 排针配置选项" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_1.png"/>
</div>

<div align="center">
  <img alt="Jetson 扩展排针工具显示带有可配置选项的 40-pin 排针引脚图" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_2.png"/>

</div>

<div align="center">
  <img alt="40-pin 排针的功能选择列表，其中 uarta.cts 和 uarta.rts 已切换" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_3.png"/>
</div>

保存并重启。

**通过 Overlay 配置未受控的 GPIO：**

**步骤 1.** 下载并解压 [overlay 包](https://files.seeedstudio.com/wiki/overlay.zip) 到你的 Jetson 设备。
```bash
wget https://files.seeedstudio.com/wiki/overlay.zip
```
**步骤 2.** 将 build.sh 和 gpio-overlay.dts 拷贝到 Jetson。

**步骤 3.** 编辑 `pio-overlay.dts` 文件，并修改以包含你所需引脚的 pinmux 定义。
:::info
更多细节你可以在此查看 [jetson-orin-nx-and-orin-nano-series-pinmux-config](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)
:::

**步骤 3.**   启用 overlay 配置。
```bash
sudo bash ./build.sh
#The following command needs to be executed only once.
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "seeed gpio config Overlay"
```
**步骤 4.** 重启设备以使配置生效。
```bash
sudo reboot
```
**步骤 5.** 现在你可以通过 `gpioset` 控制刚刚修改的引脚。
```bash
#For example px7
sudo gpioset --mode=wait 0 121=1
```


### 12-Pin 控制与 UART 排针

<div align="center">
  <img alt="带有引脚列表的 12-pin 按钮和 LED 排针：PC_LED、UART2、AC OK、SYS_RESET、FORCE_RECOVERY 和 PWR_BTN" width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/12pin2.jpg"/>
</div>

12-Pin 控制与 UART 排针提供关键的控制信号和 UART 通信接口，用于连接和管理外部设备。

:::note
reComputer Super 的引脚功能与 reComputer Classic 类似。更多详细信息请参考[这里](https://wiki.seeedstudio.com/cn/J401_carrierboard_Hardware_Interfaces_Usage/#gpio)。
:::

## HDMI

reComputer Super 配备了一个 HDMI 2.1 Type A 接口，支持 7680x4320 分辨率，可实现超高清的视频输出。

## 常见问题

**CSI 接口一次可以驱动多少个摄像头？**
四个。该板载有四个 MIPI CSI 摄像头接口，本页中的测试使用 `nvgstcapture` 预览其中一个，当连接多个摄像头时，通过更改 `--sensor-id` 来切换。

**为什么只有 ETH0 显示为原生接口？**
ETH1 由 PCIe 转换而来，因此两个接口不共享同一个控制器。它们都支持 10/100/1000 Mbps 自协商，但只有 ETH0 直接来自模块。

**RTC 需要电池才能保持时间吗？**
需要。在 RTC 插座中安装一颗 3V CR1225 纽扣电池，正极朝上，否则在板子断电后时钟会丢失时间。

**4G 模块可以响应 AT 指令，但无法上网。**
收到 `OK` 响应只说明模块在串口上是工作的。需要在网络设置中建立数据连接，并确认流量通过该连接发送，如本页中的 4G 步骤所示。

**40-pin 和 12-pin 排针有什么区别？**
40-pin 排针承载标准 Jetson GPIO 集，并通过 `jetson-io.py` 进行配置。12-pin 排针是独立的控制和 UART 外设排针，不属于 40-pin 引脚映射的一部分。

## 相关资源

- [reComputer Super 入门指南](/cn/recomputer_jetson_super_getting_started/)
- [reComputer Super 与 Classic：边缘推理中的 AI 性能对比](/cn/recomputer_jetson_super_performance/)
- [reComputer 天线安装](/cn/recomputer_antenna_installation/)
- [reComputer Super J4012 产品页面](https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html)
- [wiki-documents 仓库与讨论](https://github.com/Seeed-Studio/wiki-documents/discussions/69)

## 资源
- [用户手册与数据手册](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf)
- [温度测试报告](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Super_Temperature_Test_Report.pdf)
- [原理图](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401_v1.0_SCH_PDF_250401.pdf)
- [3D 文件](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401.stp)
- [机械文档 - reComputer Super](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super.dxf)
- [机械文档 - reComputer Super PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super_PCBA.dxf)

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
