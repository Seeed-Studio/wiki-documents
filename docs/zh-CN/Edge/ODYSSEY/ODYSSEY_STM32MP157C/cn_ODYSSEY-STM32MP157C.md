---
description: ODYSSEY – STM32MP157C
title: ODYSSEY – STM32MP157C
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY-STM32MP157C
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# ODYSSEY – STM32MP157C

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19.png)

ODYSSEY – STM32MP157C 是一款基于 STM32MP157C 的单板计算机，该处理器为双核 Arm-Cortex-A7 核心，运行频率为 650MHz。处理器还集成了一个 Arm Cortex-M4 协处理器，使其适合实时任务。ODYSSEY – STM32MP157C 采用 SoM（系统模块）加载板的形式设计。SoM 包括 MPU、PMIC、RAM，而载板采用与 Raspberry Pi 相同的外形尺寸。载板包含所有必要的外设，包括千兆以太网、WiFi/BLE、直流电源、USB 主机、USB-C、MIPI-DSI、用于摄像头的 DVP、音频等。借助该板，用户可以快速评估 SoM 并轻松快速地将 SoM 部署到自己的载板上。

[![立即购买](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)


## 特性

- 集成 Cortex-M4 的双核 Arm-Cortex-A7 核心处理器
- SoM（系统模块）包括 MPU、PMIC、RAM
- 与 Raspberry Pi 40 针兼容的载板
- 小巧且功能强大
- 开源硬件/SDK/API/BSP/操作系统

## 规格

|项目|参数|
|----|------|
|外设接口| 2 x USB 主机<br />1 x 千兆以太网接口<br />1 x 3.5mm 音频接口<br />1 x MIPI DSI 显示接口<br />1 x DVP 摄像头接口<br />2 x Grove (GPIO &amp; I2C)<br />1 x SD 卡接口（位于板背面）|
|WiFi/蓝牙|WiFi 802.11 b/g/n 2.4GHz<br />蓝牙 4.1|
|板载 LED|1 x 复位 LED<br />3 x 用户自定义 LED<br />1 x 电源 LED|
|电源|1 x DC 接口（推荐 12V/2A 电源输入）<br />1 x USB Type-C|
|按键|1 x 复位按键<br />1 x 用户按键<br />1 x 拨码开关|
|尺寸|56mm x 85mm|
|工作温度| 0 ~ 75 ℃ |



## 应用

- 工业（如 CAN-以太网网关等）
- 白色家电（如冰箱、微波炉等）
- 医疗（如数据记录仪等）
- 高端可穿戴设备（如 VR 设备等）
- 智能家居设备

## 硬件概览

<iframe src="https://3dwarehouse.sketchup.com/embed/6eecf961-5dd1-4baf-94e4-72f130c5542d" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} width={580} height={326} allowFullScreen />


ODYSSEY – STM32MP157C 由两部分组成：载板和 Seeed SoM - STM32MP157C。

载板硬件详情如下：

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/front.png)

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/back.png)

- **1.载板：** 安装 Seeed SoM-STM32MP157C 区域。如果用户想移除核心板，请缓慢倾斜核心板后取下，切勿用手直接拔出。

- **2.DC 电源输入端口：** 12V~24V/2A（推荐 12V/2A 电源输入）（5.5x2.1mm 中心正极插头）。

- **3.以太网接口：** 网络接口，可连接千兆级网络。

- **4.USB 主机：** 两个 USB 主机端口。

- **5.USB 设备：** USB 2.0 Type-C。如果 Type-C 用作板载电源输入，则需使用 5V/3A 电源适配器。

- **6.数字 Grove 接口：** 将 Grove 接口连接到数字引脚。

- **7.IIC Grove 接口：** 将 Grove 接口连接到 IIC 引脚。

- **8.美标 3.5mm：** 音频接口。

- **9.MIPI DSI 接口：** 连接到带有 MIPI DSI 接口的显示屏（FPC 20Pin 1.0mm）。

- **10.40 针 GPIO 接口：** 与 Raspberry Pi 的 40 针兼容。

- **11.AP6236：** 2.4G WiFi 和 BT 4.2 控制芯片。

- **12.滑动开关：** 可用于选择 SD 卡或 eMMC 启动。

- **13.Debug UART：** 系统默认调试串口，可通过此串口进入系统，稍后我们会详细介绍如何操作。

- **14.JST 1.0mm：** 3VRTC 电池接口。

- **15.RST 按键：** 系统复位按键。

- **16.PWR 按键：** 长按约 8 秒关机，短按开机。

- **17.用户按键：** 用户可编程按键。

- **18.PWR LED：** 开发板电源指示灯。

- **19.用户 LED：** 用户可编程指示灯。

- **20.ACA-5036-A2-CC-S：** 板载 2.4G 陶瓷天线。

- **21.IPEX 1 代：** 外接 2.4G 天线座（使用外接天线时需移除 R49、R51 0Ω 焊接）。

- **22.SD 卡槽：** 插入带有系统的 micro-SD 卡区域。

- **23.DVP 摄像头接口：** 连接带有 DVP 接口的摄像头（FPC 20Pin 1.0mm）。

- **24.KSZ9031：** 1000M 网络驱动网卡。

- **25.STMPS2252MTR：** 电源开关芯片。

- **26.MP9943：** 降压 DCDC 电源芯片。

- **27.WM8960：** 音频编解码芯片。

- **28.MP2161：** 降压 DCDC 电源芯片。

### 引脚功能

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/GPIO.png)

ODYSSEY - STM32MP157C 的 40 针完全兼容 Raspberry Pi 的 40 针，包括 GPIO、IIC、UART、SPI、IIS 和 PWM 引脚。

## 软件介绍

### 准备工作

**所需材料**

- ODYSSEY – STM32MP157C
- Wi-Fi 网络
- 4GB（或更大容量）SD 卡及 SD 卡读卡器
- PC 或 Mac
- [USB 转 UART 适配器](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)（可选）
- 12V/2A DC 接口电源适配器（可选）
- 一根 USB Type-C 数据线

<div className="admonition warning">
  <p className="admonition-title">注意</p>
  请轻插 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击 <a href="https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html"><b>这里</b></a> 购买。
</div>

**镜像安装**

与树莓派类似，您需要从 SD 卡安装 ODYSSEY – STM32MP157C 的镜像以启动设备。我们提供两种启动 ODYSSEY – STM32MP157C 的方式：从 SD 卡启动或从 eMMC 启动。

**A. 从 SD 卡启动**

- **步骤 1.** 选择您要下载的 [固件](https://files.seeedstudio.com/linux/ODYSSEY%E2%80%93STM32MP157C/stm32mp1-debian-buster-console-armhf-latest-2gb.img.xz)：

- **步骤 2.** 使用 SD 卡读卡器将 SD 卡连接到 PC 或 Mac，SD 卡需至少 4GB 容量。

- **步骤 3.** <font face>点击此处下载 <a href="https://etcher.io/">Etcher</a>，然后使用 Etcher 将 ```*.img.xz``` 文件直接写入 SD 卡。或者先将 ```*.img.xz``` 文件解压为 ```*.img``` 文件，再使用其他镜像写入工具将其烧录到 SD 卡。<br /><br />点击加号图标添加新下载的镜像文件，软件会自动选择您插入的 SD 卡。然后点击 Flash！开始写入。整个过程大约需要 10 分钟。</font>

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/stm32_flash_sd.png)

- **步骤 4.** 将镜像写入 SD 卡后，将 SD 卡插入 ODYSSEY – STM32MP157C。使用 USB Type-C 接口为载板供电。在写入过程中不要取出 SD 卡。ODYSSEY – STM32MP157C 将从 SD 卡启动，您可以看到 SOM 上的 PWR 和 USER LED 灯亮起。现在，进入下一部分：串口控制台。

<div class="admonition note" >
<p class="admonition-title">注意</p>
如果 USER LED 未闪烁，说明启动失败。请检查启动开关是否设置为 SD_CARD。
</div>

- **步骤 5.** 将镜像写入 SD 卡后，将 SD 卡插入 ODYSSEY – STM32MP157C。使用 USB Type-C 接口为载板供电。在写入过程中不要取出 SD 卡。ODYSSEY – STM32MP157C 将从 SD 卡启动，您可以看到 SOM 上的 PWR 和 USER LED 灯亮起。现在，进入下一部分：串口控制台。

**B. 从 eMMC 启动**

<div class="admonition note" >
<p class="admonition-title">注意</p>
如果您想从 eMMC 启动，必须先进入下一部分：串口控制台。
</div>

- **步骤 1.** 如果您是首次启动 ODYSSEY – STM32MP157C，过程与 **A. 从 SD 卡启动** 相同。

- **步骤 2.** 编辑 /boot/uEnv.txt 文件以启用 eMMC 启动，然后重启。

```bash
sudo sh -c "echo cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3-stm32mp1.sh >> /boot/uEnv.txt"
sudo reboot
```

- **步骤 3.** 等待 USER LED 持续亮起。如果 USER LED 持续亮起，表示 eMMC 启动成功。

- **步骤 4.** 关闭电源并拔出 SD 卡。

- **步骤 5.** 将滑动开关设置为 EMMC 并重新启动。

**串口控制台**

现在您的 ODYSSEY – STM32MP157C 已启动，您可能希望通过控制台访问 Linux 系统，然后设置网络等。我们提供了一种串口访问方法来访问 Linux：

- UART 端口 - 用于调试底层问题（推荐）。

**通过 UART 端口连接**

在本节中，我们将引导您使用 USB 转 TTL 适配器连接 ODYSSEY – STM32MP157C 的 UART 端口（位于 ODYSSEY – STM32MP157C 的右上角），以在计算机和 ODYSSEY – STM32MP157C 之间建立连接。

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/uart_connection.png)

- **步骤 1.** 使用 USB 转 TTL 适配器将 UART 端口连接到 PC/Mac。如果您没有 USB 转 TTL 适配器，请点击 [这里](https://www.seeedstudio.com/catalogsearch/result/?q=UART) 购买。（RX->TX，TX->RX）

- **步骤 2.** 使用以下串口调试工具，波特率为 115200：
    - Windows：使用 [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)，选择 ```Serial``` 协议，填写与 ODYSSEY – STM32MP157C 对应的 COM 端口，波特率为 ```115200```，8 位数据，无校验位，1 个停止位，无流控。
    - Linux：根据 USB 转 TTL 适配器的不同，使用 ```screen /dev/ttyACM0(,1, 等) 115200``` 或 ```screen /dev/ttyUSB0(,1, 等) 115200```。
    - Mac：根据 USB 转 TTL 适配器的不同，使用 ```screen /dev/cu.usbserial1412(,1422, 等) 115200``` 或 ```screen /dev/cu.usbmodem1412(,1422, 等) 115200```。

- **步骤 3.** 默认用户名为 ```debian```，密码为 ```temppwd```。

- **步骤 4.** 如果您没有 USB 转 TTL 适配器，也可以使用 Arduino。如果使用 Arduino，将跳线的一端连接到 Arduino 的 RESET 引脚，另一端连接到 Arduino 的 GND 引脚。这将绕过 Arduino 的 ATMEGA MCU，将 Arduino 转换为 USB 转 TTL 适配器。请参考 [这里](https://www.youtube.com/watch?v=qqSLwK1DP8Q) 的视频教程。现在将 Arduino 的 GND 引脚连接到 ODYSSEY – STM32MP157C 的 UART 端口的 GND 引脚。将 Arduino 的 Rx 引脚连接到 ODYSSEY – STM32MP157C 的 UART 端口的 Rx 引脚。将 Arduino 的 Tx 引脚连接到 ODYSSEY – STM32MP157C 的 UART 端口的 Tx 引脚。最后，通过 Arduino 的 USB 数据线将 Arduino 连接到 PC/Mac。现在通过以下命令检查您的 PC/Mac 是否检测到 Arduino：

```
ls /dev/cu.usb* (Mac)
ls /dev/ttyACM* (Linux)
```

您应该会看到类似以下的反馈：

```
/dev/cu.usbmodem14XX，其中 XX 会根据您使用的 USB 端口而变化（Mac 上）。
/dev/ttyACMX，其中 X 会根据您使用的 USB 端口而变化（Linux 上）。
```

现在按照上述步骤通过串口连接到 ODYSSEY – STM32MP157C。这通常是我们首次启动时需要执行的操作，因为接下来您需要设置 ODYSSEY – STM32MP157C 的 Wi-Fi 连接以及 SSH 连接。

**网络设置**

**A. 以太网连接**

您可以使用以太网线连接到网络。只需将以太网线插入互联网接口即可。
现在，进入下一部分：基本工具安装。

**B. Wi-Fi 设置**

<div className="admonition note">
  <p className="admonition-title">注意</p>
  如果您想使用 Wi-Fi，您需要先访问下一部分：基本工具安装。
</div>

- **步骤 1.** 检查当前环境中的 Linux 内核版本，并安装对应版本的内核头文件。

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **步骤 2.** 从 GitHub 的 `seeed-linux-dtverlays` 中制作并安装 stm32p1 驱动。

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **步骤 3.** 在 `/boot/uEnv.txt` 中添加 dtbo 包，以便在重启后生效。

```bash
sudo sh -c "echo uboot_overlay_addr0=/lib/firmware/stm32mp1-seeed-ap6236.dtbo >> /boot/uEnv.txt"
sudo reboot
```

- **步骤 4.** 连接 Wi-Fi

通过网络管理工具 `connmanctl` 配置 ODYSSEY – STM32MP157C 的网络，该工具已预装在 ODYSSEY -STM32MP157C 镜像中。按照以下步骤轻松完成配置。

```
robot@ev3dev:~$ sudo connmanctl
Error getting VPN connections: The name net.connman.vpn was not provided by any
connmanctl> enable wifi
Enabled wifi
connmanctl> scan wifi
Scan completed for wifi
connmanctl> services
*AO Wired                ethernet_b827ebbde13c_cable
                         wifi_e8de27077de3_hidden_managed_none
    AH04044914           wifi_e8de27077de3_41483034303434393134_managed_psk
    Frissie              wifi_e8de27077de3_46726973736965_managed_psk
    ruijgt gast          wifi_e8de27077de3_7275696a67742067617374_managed_psk
    schuur               wifi_e8de27077de3_736368757572_managed_psk
connmanctl> agent on
Agent registered
connmanctl> connect wifi_e8de27077de3_41      # 此时您可以使用 TAB 键自动补全名称
connmanctl> connect wifi_e8de27077de3_41483034303434393134_managed_psk
Agent RequestInput wifi_e8de27077de3_41483034303434393134_managed_psk
  Passphrase = [ Type=psk, Requirement=mandatory ]
Passphrase? *************
Connected wifi_e8de27077de3_41483034303434393134_managed_psk
connmanctl> quit
```

现在使用以下命令查找 ODYSSEY – STM32MP157C 的 IP 地址。
```
ifconfig
```

**基本工具安装**

***1. SSH***

SSH（Secure Shell 的缩写）由 IETF 的网络工作组制定。SSH 是基于应用层的安全协议，是一种更可靠的协议，为远程登录会话和其他网络服务提供安全性。我们提供的镜像中没有 SSH 协议，因此需要通过串口配置，以实现设备与计算机之间通过 SSH 协议的通信。输入以下命令在 ODYSSEY -STM32MP157C 中安装 SSH 服务。

```bash
sudo apt install ssh -y
```

接下来，我们将使用 SSH 访问 ODYSSEY – STM32MP157C。Windows 用户可以使用第三方 SSH 客户端。Linux/Mac 用户则内置了 SSH 客户端。

- Windows 用户：使用 PUTTY，选择 SSH 协议，填写正确的 IP 地址并点击打开。用户名为 debian，密码为 temppwd。

- Linux/Mac 用户：
```
ssh debian@IP
// 密码: temppwd
```

<div class="admonition note" >
<p class="admonition-title">注意</p>
如果使用 SSH 时性能体验下降，请切换到更易访问的 Wi-Fi 网络。
</div>

***2. GIT***

Git 是一个免费开源的分布式版本控制系统，旨在以速度和效率处理从小型到超大型的项目。

```bash
sudo apt install git -y
```

***3. MAKE***

```bash
sudo apt install make device-tree-compiler gcc -y
```

***4. WGET***

```bash
sudo apt install wget -y
```

**蓝牙设置**

- **步骤 1.** 检查当前环境中的 Linux 内核版本，并安装对应版本的内核头文件。

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **步骤 2.** 从 GitHub 的 `seeed-linux-dtverlays` 中制作并安装 stm32p1 驱动。

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **步骤 3.** 在 `/boot/uEnv.txt` 中添加 dtbo 包，以便在重启后生效。

```bash
sudo sh -c "echo uboot_overlay_addr0=/lib/firmware/stm32mp1-seeed-ap6236.dtbo >> /boot/uEnv.txt"
sudo reboot
```

**激活蓝牙**

然后通过以下命令激活蓝牙：

```
sudo apt -y install bluetooth bluez bluez-tools rfkill
systemctl is-enabled bluetooth.service
```

**连接蓝牙**

- **步骤 1.** 使用 bluetoothctl 扫描蓝牙设备

bluetoothctl 是一个控制蓝牙连接其他蓝牙设备的工具。

```
debian@npi:~$ bluetoothctl
[NEW] Controller 43:43:A0:12:1F:AC ReSpeaker-1FAC [default]
Agent registered
[bluetooth]# scan on
Discovery started
[CHG] Controller 43:43:A0:12:1F:AC Discovering: yes
[NEW] Device C8:69:CD:BB:9B:B3 C8-69-CD-BB-9B-B3
[NEW] Device E1:D9:68:0E:51:C0 MTKBTDEVICE
[NEW] Device 62:15:9C:3F:40:AA 62-15-9C-3F-40-AA
[NEW] Device 56:AF:DE:C0:34:25 56-AF-DE-C0-34-25
[NEW] Device B8:86:87:99:FB:10 SOLARRAIN
[CHG] Device B8:86:87:99:FB:10 Trusted: yes
[NEW] Device 04:5D:4B:81:35:84 MDR-1000X
[CHG] Device 04:5D:4B:81:35:84 Trusted: yes
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Key: 0x004c
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Value:
  10 05 0b 10 99 18 0a                             .......
[bluetooth]# scan off
[CHG] Device 04:5D:4B:81:35:84 RSSI is nil
[CHG] Device B8:86:87:99:FB:10 TxPower is nil
[CHG] Device B8:86:87:99:FB:10 RSSI is nil
[CHG] Device 4C:04:59:38:D3:25 RSSI is nil
[CHG] Device 58:44:98:93:35:24 RSSI is nil
Discovery stopped
[bluetooth]#
```

- **步骤 2.** 现在使用命令 `pair + 设备 ID` 将蓝牙设备与 ODYSSEY – STM32MP157C 配对。

- **步骤 3.** 当你看到消息 `Pairing successful` 时，输入命令 `connect + 设备 ID`。

```
[bluetooth]# pair 04:5D:4B:81:35:84
Attempting to pair with 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 00001108-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110b-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110c-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000111e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Device 04:5D:4B:81:35:84 Paired: yes
Pairing successful
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: no
[CHG] Device 04:5D:4B:81:35:84 Connected: no
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: yes
[bluetooth]# connect 04:5D:4B:81:35:84
Attempting to connect to 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
Connection successful
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[MDR-1000X]#
```

如果出现 `Connection successful`，配置完成！

## CANBUS 通信

以下是基于 ODYSSEY -- STM32MP157C 使用 [2 通道 CAN BUS FD Shield for Raspberry Pi](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html) 进行 CANBUS 通信的过程。首先使用 [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html) 收集环境温度和湿度，然后通过 Seeeduino V4.2 上的 [CAN - BUS Shield V2](https://www.seeedstudio.com/CAN-BUS-Shield-V2.html) 与 ODYSSEY – STM32MP157C 上的 2 通道 CAN BUS FD Shield for Raspberry Pi 进行通信。

### 准备工作

**所需材料**

- ODYSSEY - STM32MP157C
- Wi-Fi 网络
- 4GB（或更大容量）SD 卡和 SD 卡读卡器
- PC 或 Mac
- [USB 转 UART 适配器](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)（可选）
- 12V/2ADC 接口适配器用于供电（可选）
- 一根 USB Type-C 数据线
- 两根双头杜邦线
- [CAN-BUS Shield V2](https://www.seeedstudio.com/CAN-BUS-Shield-V2.html)
- [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)
- [2 通道 CAN BUS FD Shield for Raspberry Pi](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html)
- [Grove - 光传感器 v1.2](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2.html)
- [Grove - I2C 高精度温湿度传感器 (SHT35)](https://www.seeedstudio.com/catalogsearch/result/?q=sht35)

**硬件连接**

- **步骤 1.** 根据 [安装指南](https://wiki.seeedstudio.com/cn/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/#mounting-guide) 将 2 通道 CAN BUS FD Shield for Raspberry Pi 插入 ODYSSEY - STM32MP157C。
- **步骤 2.** 将 CAN BUS Shield V2 插入 Seeeduino V4.2。
- **步骤 3.** 使用跳线将 2 通道 CAN BUS FD Shield for Raspberry Pi 与 CAN-BUS Shield V2 连接。

|2 通道 CAN BUS FD Shield for Raspberry Pi|CAN-BUS Shield V2|
|:----:|:------:|
|CAN_0_L|CANL|
|CAN_0_H|CANH|

- **步骤 4.** 为 ODYSSEY STM32MP157C 和 Seeeduino V4.2 供电。

**依赖安装**

- **步骤 1.** 为 `python` 安装环境。

```bash
sudo apt update
sudo apt install python3 python3-distutils python3-pyqt5 python3-pip python3-numpy -y
sudo pip3 install python-can pyqtgraph
```

- **步骤 2.** 安装 `git`。

```bash
sudo apt install git -y
```

- **步骤 3.** 安装与 `make` 相关的环境。

```bash
sudo apt install make device-tree-compiler gcc -y
```

### 软件安装

**安装 CAN-HAT 和 LCD 驱动**

- **步骤 1.** 检查当前环境中的 Linux 内核版本，并安装对应版本的头文件。

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **步骤 2.** 从 GitHub 的 `seeed-linux-dtverlays` 中编译并安装 stm32p1 驱动。

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **步骤 3.** 在 `/boot/uEnv.txt` 中添加 dtbo 包，以便重启后生效。

```bash
sudo sh -c "echo uboot_overlay_addr7=/lib/firmware/stm32mp1-seeed-lcd-01.dtbo >> /boot/uEnv.txt"
sudo sh -c "echo uboot_overlay_addr8=/lib/firmware/stm32mp1-MCP2517FD-can0.dtbo >> /boot/uEnv.txt"
sudo reboot
```

- **步骤 4.** 使用 `dmesg` 检查驱动是否成功安装。如果成功，你将看到以下信息。

```bash
debian@npi:~$ sudo insmod /lib/modules/$(uname -r)/extra/seeed/mcp25xxfd-can.ko
debian@npi:~$ dmesg | grep spi
[    1.057609] spi_stm32 44009000.spi: driver initialized
[    9.852726] mcp25xxfd spi0.0: Linked as a consumer to regulator.6
[    9.966510] mcp25xxfd spi0.0: MCP2517 successfully initialized.

debian@npi:~$ ifconfig -a
can0: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

**配置 CAN-HAT 和 LCD**

- **步骤 1.** 配置 `can-bus`。

```bash
sudo ip link set can0 up type can bitrate 500000 dbitrate 8000000 restart-ms 1000 berr-reporting on fd on
sudo ifconfig can0 txqueuelen 65536

debian@npi:~$ ip -details link show can0
3: can0: <NOARP,UP,LOWER_UP,ECHO> mtu 16 qdisc pfifo_fast state UNKNOWN mode DEFAULT group default qlen 10
    link/can  promiscuity 0 minmtu 0 maxmtu 0
    can state ERROR-ACTIVE (berr-counter tx 0 rx 0) restart-ms 0
          bitrate 500000 sample-point 0.875
          tq 25 prop-seg 34 phase-seg1 35 phase-seg2 10 sjw 1
          mcp25xxfd: tseg1 2..256 tseg2 1..128 sjw 1..128 brp 1..256 brp-inc 1
          mcp25xxfd: dtseg1 1..32 dtseg2 1..16 dsjw 1..16 dbrp 1..256 dbrp-inc 1
          clock 40000000numtxqueues 1 numrxqueues 1 gso_max_size 65536 /gso_max_segs 65535
```

- **步骤 2.** 配置 `lcd` 环境

```bash
export QT_QPA_PLATFORM=linuxfb:fb=/dev/fb0
```

### 运行示例

在 'ODYSSEY - STM32MP157C' 上运行以下代码：

```bash
cd ~
git clone https://github.com/SeeedDocument/ODYSSEY-STM32MP157C.git
cd ~/ODYSSEY-STM32MP157C/examples
python3 QtViewerForStm32p1.py
```

在 `Seeeduino V4.2` 上运行 [CanBus_SendForArduino.ino](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/examples/CanBus_SendForArduino.ino)。

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/can_bus_demo.png)


## 使用 GPIO

本部分将介绍如何使用 **grove.py** 控制 ODYSSEY STM32MP157C 上的 GPIO 和 Grove 插座。该板上有两种方式连接 Grove 插座：一种是使用数字 Grove 接口和 IIC Grove 接口，另一种是使用 ODYSSEY - STM32MP157C 的 40 针接口。有关 ODYSSEY - STM32MP157C 的 40 针接口的引脚定义，请参考 [引脚功能](#Pin Function)。使用 ODYSSEY - STM32MP157C 的 40 针接口非常方便。那么，让我们开始吧。

### 设置为 GPIO 模式

- **步骤 1.** 检查当前环境中 Linux 内核的版本，并安装对应版本的头文件。

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **步骤 2.** 从 GitHub 的 `seeed-linux-dtverlays` 中编译并安装 stm32p1 驱动。

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **步骤 3.** 在 `/boot/uEnv.txt` 中添加 dtbo 包，以便重启后生效。

```bash
sudo sh -c "echo uboot_overlay_addr1=/lib/firmware/stm32mp1-seeed-spi5.dtbo >> /boot/uEnv.txt"
sudo sh -c "echo uboot_overlay_addr2=/lib/firmware/stm32mp1-seeed-usart2.dtbo >> /boot/uEnv.txt"
sudo sh -c "echo uboot_overlay_addr3=/lib/firmware/stm32mp1-seeed-i2c4.dtbo >> /boot/uEnv.txt"
sudo reboot
```

- **步骤 4.** 为 `python3` 安装环境。

```bash
sudo apt install python3 python3-pip -y
```

### 使用 Grove.py 在 Base Hat 上进行数字输出

#### 硬件

- **步骤 1.** 本项目中使用的物品：

| ODYSSEY – STM32MP157C |  Grove - 蜂鸣器 | Grove Base Hat for Raspberry Pi |
|--------------|-------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png)|![image](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|
|[立即购买](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[立即购买](https://www.seeedstudio.com/Grove-Buzzer.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|

- **步骤 2.** 将 Grove Base Hat 插入 ODYSSEY - STM32MP157C。

- **步骤 3.** 将 Grove 蜂鸣器连接到 Base Hat 的 D5 端口。

- **步骤 4.** 通过 USB 数据线将 ODYSSEY - STM32MP157C 连接到 PC。

#### 软件

- **步骤 1.** 安装 Grove.py

```bash
sudo pip3 install Seeed-grove.py
```

- **步骤 2.** 克隆 grove.py 库以下载源文件。

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **步骤 3.** 执行以下命令运行代码。

```bash
cd grove.py/grove
sudo python3 grove_gpio.py 5
```

<div class="admonition note" >
<p class="admonition-title">注意</p>
如果一切正常，我们将听到蜂鸣器发出的声音。
</div>

### 使用 Grove.py 在 Base Hat 上进行数字输入

#### 硬件

- **步骤 1.** 本项目中使用的物品：

| ODYSSEY – STM32MP157C |  Grove - 按钮 | Grove Base Hat for Raspberry Pi |
|--------------|-------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg)|![image](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|
|[立即购买](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[立即购买](https://www.seeedstudio.com/Grove-Button-P.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|

- **步骤 2.** 将 Grove Base Hat 插入 ODYSSEY - STM32MP157C。

- **步骤 3.** 将 Grove 按钮连接到 Base Hat 的 D5 端口。

- **步骤 4.** 通过 USB 数据线将 ODYSSEY - STM32MP157C 连接到 PC。

#### 软件

- **步骤 1.** 安装 Grove.py

```bash
sudo pip3 install Seeed-grove.py
```

- **步骤 2.** 克隆 grove.py 库以下载源文件。

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **步骤 3.** 执行以下命令运行代码。

```bash
cd grove.py/grove
sudo python3 grove_button.py 5
```

<div class="admonition note" >
<p class="admonition-title">注意</p>
如果按钮被按下，我们将在终端看到一些信息。
</div>

### 使用 Grove.py 在 Base Hat 上进行 ADC 操作

#### 硬件

- **步骤 1.** 本项目中使用的物品：

| ODYSSEY – STM32MP157C |  Grove - 温度传感器 | Grove Base Hat for RasPi |
|--------------|-------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg)|![image](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|
|[立即购买](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[立即购买](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|

- **步骤 2.** 将 Grove Base Hat 插入 ODYSSEY - STM32MP157C。

- **步骤 3.** 将温度传感器连接到 Base Hat 的 A0 端口。

- **步骤 4.** 通过 USB 数据线将 ODYSSEY - STM32MP157C 连接到 PC。

#### 软件

- **步骤 1**. 安装 Grove.py

```bash
sudo pip3 install Seeed-grove.py
```

- **步骤 2**. 通过克隆 grove.py 库下载源文件。

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **步骤 3**. 执行以下命令运行代码。

```bash
cd grove.py/grove
sudo python3 grove_temperature_sensor.py 0
```

<div class="admonition note" >
<p class="admonition-title">注意</p>
如果一切正常，我们将在终端查看到温度数据。
</div>

### 使用 Grove.py 在 Basehat 上实现 UART

#### 硬件

- **步骤 1**. 本项目中使用的物品：

| ODYSSEY – STM32MP157C | Grove Base Hat for RasPi |
|--------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![image](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|
|[立即购买](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|

- **步骤 2**. 将 Grove Base Hat 插入 ODYSSEY - STM32MP157C。

- **步骤 3**. 使用跳线将 Basehat 的 RX 连接到 TX。

- **步骤 4**. 通过 USB 数据线将 ODYSSEY - STM32MP157C 连接到 PC。

#### 软件

- **步骤 1**. 安装 Grove.py

```bash
sudo pip3 install Seeed-grove.py
```

- **步骤 2**. 通过克隆 grove.py 库下载源文件。

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **步骤 3**. 执行以下命令运行代码。

```bash
cd grove.py/grove
python uart.py
```

如果我们将 TX 连接到 RX，我们将在终端看到 `hello seeder`，并且可以在 [Pin Function](https://wiki.seeedstudio.com/cn/ODYSSEY-STM32MP157C/#pin-function) 查看 TX 和 RX 的位置。

### ODYSSEY-STM32MP157C 上的 I2S

在本节中，我们将解释 Linux I2S 编程的控制原理。现在我们将使用 I2S 和 ReSpeaker 2-Mics Pi HAT 来演示如何使用它。

#### 硬件

- **步骤 1**. 本项目中使用的物品：

| ODYSSEY – STM32MP157C | ReSpeaker 2-Mics Pi HAT |
|--------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![image](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/res-thumbnail.png)|
|[立即购买](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[立即购买](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)|

- **步骤 2.** 根据 [安装硬件指南](https://wiki.seeedstudio.com/cn/ReSpeaker_2_Mics_Pi_HAT/#getting-started) 将 ReSpeaker 2-Mics Pi HAT 插入 ODYSSEY – STM32MP157C。

#### 软件

- **步骤 1.** 使用 `apt` 安装 alsa-utils

```bash
sudo apt install alsa-utils -y
```

- **步骤 2.** 转到 dtbs 文件位置并下载 stm32mp1 dtb 文件。

```sh
debian@npi:~$ cd /boot/dtbs/4.19.9-stm32-r1/
debian@npi:/boot/dtbs/4.19.9-stm32-r1$ sudo wget https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/res/stm32mp1-seeed-npi-full-rpi-exp.dtb
```

**注意：** 你也可以从 [**这里**](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/res/stm32mp1-seeed-npi-full-rpi-exp.dtb) 下载 stm32mp1 `.dtb` 文件。

- **步骤 3.** 按如下方式配置 `uEnv.txt`：

```sh
debian@npi:~$ sudo vi /boot/uEnv.txt
```

将 dtb 设置更改为：

```
dtb=stm32mp1-seeed-npi-full-rpi-exp.dtb
```

- **步骤 4.** 重启

```sh
sudo reboot
```

- **步骤 5.** 进入 `seeed-linux-dtverlays` 文件夹并按如下方式配置 soundstate：

```sh
debian@npi:~$ cd ~/seeed-linux-dtverlays/
debian@npi:~/seeed-linux-dtverlays$ sudo cp extras/wm8960_asound-stm32mp1 /var/lib/alsa/asound.state
debian@npi:~/seeed-linux-dtverlays$ sudo alsactl restore
```

- **步骤 6.** 使用 `aplay` 和 `arecord` 检查驱动程序是否安装成功，如果成功，你将看到以下信息。

```sh
debian@npi:~/seeed-linux-dtverlays$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 4000b000.audio-controller-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: STM32MP1SEEEDNP [STM32MP1-SEEEDNPi], device 0: 4400b004.audio-controller-wm8960-hifi0 wm8960-hifi0-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
debian@npi:~/seeed-linux-dtverlays$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 4000b000.audio-controller-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: STM32MP1SEEEDNP [STM32MP1-SEEEDNPi], device 1: 4400b024.audio-controller-wm8960-hifi1 wm8960-hifi1-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

- **步骤 7.** 现在你可以开始使用 ReSpeaker 2-Mics Pi Hat！对于简单的录音和播放测试，运行以下命令：

1. 录制音频到 `test.wav`：

```sh
arecord -f cd -r 48000 -Dhw:0 test.wav
```

2. 播放 `test.wav` 音频。记得插入耳机或扬声器以输出音频。

```sh
aplay -Dhw:0 -r 48000 test.wav
```

<div class="admonition note" >
<p class="admonition-title">注意</p>
如果你听不到任何声音，可能需要再次重启。
</div>

有关 ReSpeaker 2-Mics Pi HAT 的更多信息，你可以访问 [wiki](https://wiki.seeedstudio.com/cn/ReSpeaker_2_Mics_Pi_HAT/)

## 资源
-----
- **[PDF]** [STM32MP157C 数据手册](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/stm32mp157c.pdf)
- **[SCH]** [Seeed SoM - STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20SoM%20-%20STM32MP157C%20v1.0_191212.pdf)
- **[SCH]** [ODYSSEY-STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20NPi%20-%20STM32MP157C%20v1.0_191212.pdf)
- **[3D文件]** [ODYSSEY-STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/st.skp)
- **[OrCAD]** [ODYSSEY-STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20NPi%20-%20STM32MP157C%20v1.0_SCH%20%26%20PCB.zip)
- **[OrCAD]** [Seeed SoM - STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20SoM%20-%20STM32MP157C%20v1.0_SCH%20%26%20PCB%20.zip)
- **[PDF]** [ODYSSEY-STM32MP157C 2D 文件](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/STM32-2d-file.pdf)
- **[PDF]** [STM32 参考指南](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/STM32+Reference+Guide+V1.0.pdf)
- **[URL]** [高级系统开发](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C)


# ODYSSEY-STM32MP157C 高级系统开发
- [可用性](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Availability)
- [供应商文档](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-VendorDocumentation)
- [基本要求](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-BasicRequirements)
- [ARM 交叉编译器：GCC](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-ARMCrossCompiler:GCC)
- [引导加载程序：U-Boot](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Bootloader:U-Boot)
- [Linux 内核](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-LinuxKernel)
- [根文件系统](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-RootFileSystem)
  - [Debian 10](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Debian10)
  - [Ubuntu 20.04 LTS](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Ubuntu20.04LTS)
- [设置 microSD 卡](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-SetupmicroSDcard)
- [安装内核和根文件系统](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-InstallKernelandRootFileSystem)
- [复制根文件系统](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopyRootFileSystem)
- [在 /boot/uEnv.txt 中设置 uname_r](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Setuname_rin/boot/uEnv.txt)
- [设备树二进制文件](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-DeviceTreeBinary)
- [复制内核镜像](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopyKernelImage)
- [复制内核设备树二进制文件](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopyKernelDeviceTreeBinaries)
- [复制内核模块](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopyKernelModules)
- [文件系统表 (/etc/fstab)](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-FileSystemsTable(/etc/fstab))
- [移除 microSD/SD 卡](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-RemovemicroSD/SDcard)
- [评论](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Comments)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>