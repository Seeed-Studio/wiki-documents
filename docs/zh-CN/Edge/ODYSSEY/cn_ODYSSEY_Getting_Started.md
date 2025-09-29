---
description: ODYSSEY - X86J4105
title: ODYSSEY 入门指南
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY_Getting_Started
last_update:
  date: 01/03/2023
  author: w0x7ce

---

请查看最新版本：https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105/

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105/
sku: 102110399
--- -->

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ODYSSEY-X86J4105-side.png)

ODYSSEY - X86J4105 基于 Intel Celeron J4105 处理器，这是一款四核 1.5GHz CPU，最高可加速至 2.5GHz。它具备标准计算机所需的所有优秀功能，包括 8GB LPDDR4 内存、64GB eMMC 存储（可选）、板载 Wi-Fi/BLE、双千兆以太网端口、音频输入输出、USB 端口、HDMI、SATA 接口、PCIe 等。

## 主要特点：

- Intel® Celeron® J4105，四核 1.5-2.5GHz
- 双频 2.5GHz/5GHz WiFi/蓝牙 5.0
- Intel® UHD Graphics 600
- 双千兆以太网
- 集成 Arduino 协处理器 ATSAMD21 ARM® Cortex®-M0+
- 兼容 Raspberry Pi 40 针接口
- 2 个 M.2 PCIe 插槽（B Key 和 M Key）
- 预装 Windows 10 Enterprise
- 兼容 Grove 生态系统

<p style={{}}><a href="https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## 硬件规格

| 组件             | ODYSSEY - X86J4105                                                                                                                                      |
|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| 处理器           | Intel® Celeron® J4105（频率：1.5 - 2.5GHz）                                                                                                    |
| 协处理器         | Microchip® ATSAMD21G18 32 位 ARM® Cortex® M0+                                                                                                        |
| 图形             | Intel® UHD Graphics 600（频率：250 – 750MHz）                                                                                                     |
| 内存             | LPDDR4 8GB                                                                                                                                              |
| 存储             | 64GB eMMC V5.1                                                                                                                                         |
| 无线             | Wi-Fi 802.11 a/b/g/n/ac @ 2.4/5 GHz HT160 & 蓝牙® 5.0                                                                                          |
| 网络             | Intel® I211AT PCIe 千兆 LAN                                                                                                                          |
| 音频             | 麦克风 + 耳机组合接口                                                                                                                 |
| 接口             | 28 针接口（来自 SAMD21G18）& 40 针接口（兼容 Raspberry Pi）                                                                             |
| USB              | USB 2.0 Type-A x2, USB 3.1 Type-A x1, USB 3.1 Type-C x1                                                                                           |
| 视频接口         | HDMI2.0a：最高支持 4096x2160 @ 60Hz 24bpp / DP1.2a：最高支持 4096x2160 @60Hz 24bpp                                                                                                                                                                 |
| 扩展插槽         | M.2（Key B, 2242/2280）：SATA III, USB2.0, UIM；M.2（Key M, 2242/2280）：PCIe 2.0 ×4；Micro SD 卡插槽；SIM 卡插槽；SATA III           |
| RTC              | JST 1.0 CR2032 3V                                                                                                                                      |
| TPM              | 内置 TPM（2.0）                                                                                                                                  |
| 电源接口         | DC 插孔 5.5/2.1mm 或 Type-C PD                                                                 |
|裸板电源要求      | <div >DC 插孔输入：最小：12V @ 300mA - 1.2A，最大：19V @ 200mA - 0.7A <br />Type-C 输入：最小：15V @ 0.27A，最大：15V @ 0.93A </div>
|
| 尺寸             | 110x110mm                                                                                                                                               |
| 认证             | FCC, CE                                                                                                                                                 |

!!!注意
        如果您在 ODYSSEY – X86J4105 上使用 3.5 英寸 HDD 硬盘，请确保使用 12V@2A 的 DC 电源或 15V@2A 的 Type-C 电源。

!!!注意
        您可以使用移动电源为 X86 供电，但需要确保使用支持 USB PD 协议的移动电源，并通过 USB C 连接。此外，您可以无缝切换 USB C 电源和 DC 电源，无需担心任何问题。

## 硬件概览

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-08-n.png)

## 引脚图

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-Pinout.png)

## 快速开始使用 ODYSSEY - X86J4105

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Connected.png)

### 所需硬件

1. ODYSSEY - X86J4105

2. 电源适配器（已提供）

3. 外接显示器

4. HDMI 线缆

5. 键盘和鼠标

### 添加外部存储

对于配备 64 GB EMMC 存储版本的 ODYSSEY - X86J4105，可以跳过此步骤。然而，如果您需要更多存储空间，可以按照以下步骤操作。

ODYSSEY - X86J4105 提供 4 种添加存储的方法，但只有 3 种方法支持安装操作系统（M.2 SATA、M.2 PCIE 和 SATA），Micro SD 卡插槽只能用作外部存储。

- **方法 1 - M.2 PCIE 接口**

- **方法 2 - M.2 SATA 接口**

- **方法 3 - SATA 接口**

- **方法 4 - Micro SD 卡插槽**

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Storage.png)

### 安装操作系统

ODYSSEY - X86J4105 支持 Windows 和 Linux 操作系统。

- 对于非 EMMC 版本，请按照前述步骤连接外部存储，并通过可启动的 USB 驱动器安装所需的操作系统。

- 对于 EMMC 版本，已预装 Windows 10 Enterprise。

#### 第 1 步

将可启动的 USB 驱动器插入 ODYSSEY - X86J4105 的一个 USB 接口。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/USB.png)

**注意：** 请访问“创建可启动 USB 和安装操作系统”以获取有关创建可启动 USB 驱动器的更多信息。

#### 第 2 步

按下电源按钮，并持续按住键盘上的 **F7** 键，直到出现启动管理器屏幕。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/F7.jpg)

#### 第 3 步

选择已连接的 USB 驱动器作为第一启动驱动器并按 Enter 键。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/boot.png)

#### 第 4 步

按照安装说明完成操作系统的安装。

**注意：** 要访问 BIOS 设置，请在启动时持续按 **DEL** 键。

### 连接天线

将两根天线连接到主板上的两个插座。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/WiFi.png)

注意：一根天线用于 Wi-Fi 和蓝牙，另一根用于增强的 5G 连接。

### 添加 4G 蜂窝连接

对于 4G 蜂窝连接，将标准 SIM 卡插入主板的 SIM 卡插槽。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Sim.png)

#### 插入 PCIE 4G 模块

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/4g.png)

**注意：** 如果您想使用已连接的 SIM 卡，则必须安装此模块。

### 连接显示器

有两种显示连接方法：

#### 方法 1 - HDMI 接口

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/hdmi.png)

#### 方法 2 - USB-C 接口的 DP 输出

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/typec.png)

### 连接键盘和鼠标

通过 USB 接口连接键盘和鼠标。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/keyboard.png)

## 开机

为 ODYSSEY - X86J4105 供电有两种方式：

### 方法 1

最简单的方法是使用包装中附带的 12V/2A 电源适配器，并连接到 ODYSSEY - X86J4105 的 DC 插孔。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/power.png)

### 方法 2

您还可以通过 USB-C 接口为 ODYSSEY - X86J4105 提供 12V 输入电源。此外，如果您的显示器支持 USB-PD，您可以仅使用一根电缆为 ODYSSEY - X86J4105 供电并显示画面！

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/typec.png)

## 性能统计

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/CPU.png)

### Wi-Fi 连接

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Stats.png)

### 蓝牙连接

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Bluetooth.png)

## 作为电脑使用

- 浏览网页并观看 YouTube 视频

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/YouTube%20-%20Google%20Chrome%202019-12-04%2017-05-19.2019-12-05%2009_33_09.gif)

- 玩 Google T-Rex 游戏！

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/T-Rex%20Run!%20-%20Chrome%20Dinosaur%20Game%20-%20Google%20Chrome%202019-12-04%2017-01-42.2019-12-05%2009_38_40.gif)

## 在 Windows 中使用 Arduino Core (ATSAMD21G18)

ODYSSEY - X86J4105 内置了 Arduino Core (ATSAMD21G18)，为主板提供了更多功能。要使用它，只需下载 [Arduino IDE](https://www.arduino.cc/en/main/software)，并安装 Windows 版本。

1. 点击 `File`->`Preferences`->`Additional Boards Manager URL:`，然后将以下链接复制到其中：`https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json`。

2. 点击 `Tools`->`Board:`->`Boards Manager...`，会弹出 Boards Manager。搜索并安装 **`Seeeduino Zero`** 板库。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ArduinoBoard.png)

3. 在上传前选择正确的端口和板子。

- `Port` -> `COMxx(Seeeduno Zero)`

- `Board` -> `Seeeduino Zero`

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ArduinoPort.png)

尽情发挥您的创造力，使用 ODYSSEY - X86J4105 吧！

## 在 Linux 操作系统中使用 Arduino Core (ATSAMD21G18)

如果您安装了 Linux 操作系统，请下载 [Arduino IDE](https://www.arduino.cc/en/main/software) 的 Linux 版本，并按照以下步骤安装 IDE：

### 安装 Arduino IDE

1. 打开终端并进入下载目录

```sh
cd ~/Downloads
```

2. 使用 tar 命令解压下载的文件

```sh
tar -xvf arduino -1.8.10-linux64.tar.xz
```

3. 将文件移动到 opt 目录

```sh
sudo mv arduino-1.8.10 /opt
```

4. 安装 Arduino IDE 并创建桌面快捷方式

```sh
cd /opt/arduino-1.8.10/ && chmod +x install.sh && ./install.sh
```

5. 允许 Arduino 上传权限

```sh
cd /opt/arduino-1.8.10 && ./arduino-linux-setup.sh
```

### 安装板库

1. 点击 `File`->`Preferences`->`Additional Boards Manager URL:`，然后将以下链接复制到其中：`https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json`。

2. 点击 `Tools`->`Board:`->`Boards Manager...`，会弹出 Boards Manager。搜索并安装 **`Seeeduino Zero`** 板库。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/LinuxBoard.png)

3. 在上传前选择正确的端口和板子。

- `Port` -> `ttyACM0(Seeeduno Zero)`

- `Board` -> `Seeeduino Zero`

## 常见问题解答

### 如何进入 BIOS 设置？

按下电源按钮并持续按下 DEL 键，直到看到 BIOS 设置界面。

### Arduino IDE 无法识别板载微控制器

在 **RST 引脚** 和 **GND 引脚** 之间添加一根跳线（位于 SAMD21 的 28 个引脚左侧的 4 针排针上），以重置 AMSAMDG21。

### 无法连接 Wi-Fi 和蓝牙

检查 BIOS 设置，并在 BIOS 中启用 Wi-Fi 和蓝牙。

### ODYSSEY - X86J4105 无法启动

请确保使用包装盒中提供的 12V/2A 电源适配器，并检查连接是否正常。

### ODYSSEY - X86J4105 电源按钮的不同状态

它的电源按钮状态与其他计算机相同：

- `短按（设备关闭时）` -> `开机`

- `短按（设备开启时）` -> `进入睡眠模式`

- `长按（设备开启时）` -> `强制关机`

### 内置风扇是否可控？

目前风扇由 BIOS 控制，用户无法直接控制。风扇速度根据 CPU 温度自动调整。有关更多信息，请在 BIOS 设置界面中查看 `Chipset` -> `FAN Control`。

### 如何升级 BIOS？

有关升级 BIOS 的说明，请参阅操作系统安装部分。

### 如何设置 ODYSSEY - X86J4105 在接通电源时自动开机？

此功能需要在 BIOS 中配置。按下 DEL 键进入 BIOS 设置，导航到 **Chipset** -> **Restore on AC Power Loss**，并将设置更改为 **Last State**。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Auto-power.png" /></div>

### 风扇未启动

Odyssey 的风扇由嵌入式控制器（EC）控制，其作用是在系统启动前初始化设备。BIOS 中的温度由 EC 检测，温度传感器位于靠近 Intel CPU 的位置，但没有直接连接到 CPU 的传感器引脚。换句话说，温度值并非 CPU 的直接读数，可能存在 5 摄氏度的误差。系统中显示的温度值由 CPU 内部反馈，而 BIOS 屏幕中的温度值由 EC 反馈。风扇的运行或停止取决于 EC 的检测值。

- EC 检测值（BIOS 屏幕）与风扇速度表如下：

**风扇关闭状态**：停止

**正常风扇状态**：低于 40°C–停止，45-50°C–50%，50-60°C–60%，高于 60°C–80%

**积极风扇状态**：低于 40°C–停止，45-50°C–70%，50-60°C–80%，高于 60°C–100%

### 风扇引脚定义

如果您需要 DIY 或更换风扇，可能需要了解 5V PWM 风扇的引脚定义。Odyssey 提供了一个 5V PWM 引脚用于风扇连接，其接头比通常的 5V 引脚接头更小。您可能需要更换接头以适配。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/x86-fan.png" /></div>

### 重新安装原版 Windows

ODYSSEY-X86 的 eMMC 版本预装了 Windows 10。如果您安装了其他操作系统并希望恢复到原版 Windows 10，请参考以下内容：

- [**原版 Windows 10 镜像**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Ant-image/SD-JX-CJ41G-M-101-H.zip)

    - 此镜像支持 **自动刷写**。只需下载上述镜像并解压文件，将其放置在 **U 盘的根目录**。

    - 将 U 盘插入 ODYSSEY-X86 并从 U 盘启动。这将自动将原版 Windows 10 镜像刷回 eMMC。

### Odyssey 是否支持 TPM？

Odyssey 的处理器中集成了 FTPM。

### Odyssey 主板是否支持安全启动的 Boot Guard？

是的，您可以在 BIOS 中启用 "Security Boot" 选项。启用后，BIOS 将禁止从未经认证的设备启动。

### 为什么 Odyssey 关机后 GPIO 仍然工作？

要设置此功能，您需要[更新到我们提供的最新 BIOS](https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Updating-Firmware/)。在最新的 BIOS 中，您可以在此处将启用更改为禁用，以关闭 GPIO 和 ODYSSEY。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105/OdysseyFAQ1.png)

## 资源

- **[ZIP]** [ODYSSEY-X86J4105 3D 模型](http://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-3D-Model.zip)

- **[PDF]** [ODYSSEY-X86J4105 2D 模型](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-2D.pdf)

- **[DXF]** [ODYSSEY-X86J4105 2D 模型](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-2D.dxf)

- **[PDF]** [Atmel-SAMD21-数据手册](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/Atmel-SAMD21-datasheet.pdf)

- **[PDF]** [ODYSSEY-X86 用户手册](https://files.seeedstudio.com/products/102110399/Documents/ODYSSEY-X86%20User-Manual-v1.1.pdf)

- **[ZIP]** [ODYSSEY-X86 Windows 10 驱动程序包](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-WIndows-Drivers.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时拥有顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>