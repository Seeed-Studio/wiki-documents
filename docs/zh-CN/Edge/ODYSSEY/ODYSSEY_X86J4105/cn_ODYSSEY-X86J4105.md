---
description: ODYSSEY - X86J41x5
title: ODYSSEY - X86J41x5 入门指南
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/ODYSSEY-X86J4105
last_update:
  date: 2023/03/16
  author: Lakshantha

---

<!-- ---
name: ODYSSEY - X86J41x5
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl: https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105/
sku: 102110399
--- -->


![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ODYSSEY-X86J4105-side.png)

ODYSSEY - X86J41x5 SBC 系列包括 ODYSSEY - X86J4105、ODYSSEY - X86J4125 和 ODYSSEY - X86J4125 V2。它们基于 Intel Celeron J4105/J4125，具备标准计算机所需的所有强大功能，包括 8GB LPDDR4 内存、64GB eMMC 存储（仅限 eMMC 版本）、板载 Wi-Fi/BLE、双 1GbE/2.5GbE 接口、音频输入输出、USB 接口、HDMI、SATA 连接器、PCIe 等。

<table>
  <thead>
    <tr>
      <th>ODYSSEY - X86J4105</th>
      <th>ODYSSEY - X86J4125</th>
      <th>ODYSSEY - X86J4125 V2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
      </div>
      </td>
      <td>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
      </div>
      </td>
      <td>
      <div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ODYSSEY-X86J4125800-v2-p-5531.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
      </div>
    </td>
    </tr>
  </tbody>
</table>

## 主要特性：

- Intel® Celeron® J4105/J4125
- 双频 2.5GHz/5GHz WiFi 和 Bluetooth 5.0
- Intel® UHD Graphics 600
- 双 1GbE/2.5GbE
- 集成协处理器：Arduino ATSAMD21 ARM® Cortex®-M0+/Raspberry Pi RP2040 双核 ARM® Cortex®-M0+
- 兼容 Raspberry Pi 40 针接口
- 2 个 M.2 PCIe（B Key 和 M Key）
- 预装 Windows 10 Enterprise/Windows 11 Pro
- 兼容 Grove 生态系统

## 硬件规格

<table>
  <thead>
    <tr>
      <th>组件</th>
      <th>ODYSSEY - X86J4105</th>
      <th>ODYSSEY - X86J4125</th>
      <th>ODYSSEY - X86J4125 V2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>处理器</td>
      <td>Intel® Celeron® J4105（频率：1.5 - 2.5GHz）</td>
      <td colSpan={2}>Intel® Celeron® J4125（频率：2.0 - 2.7GHz）</td>
    </tr>
    <tr>
      <td>协处理器</td>
      <td colSpan={2}>Microchip® ATSAMD21G18 32 位 ARM® Cortex® M0+</td>
      <td>Raspberry Pi RP2040 32 位双核 ARM® Cortex®-M0+</td>
    </tr>
    <tr>
      <td>图形</td>
      <td colSpan={3}>Intel® UHD Graphics 600（频率：250 – 750MHz）</td>
    </tr>
    <tr>
      <td>内存</td>
      <td colSpan={3}>LPDDR4 8GB</td>
    </tr>
    <tr>
      <td>存储</td>
      <td colSpan={3}>64GB eMMC V5.1（仅限 eMMC 版本）</td>
    </tr>
    <tr>
      <td>无线</td>
      <td colSpan={3}>Wi-Fi 802.11 a/b/g/n/ac @ 2.4/5 GHz HT160 &amp; Bluetooth® 5.0</td>
    </tr>
    <tr>
      <td>网络</td>
      <td colSpan={2}>Intel® I211AT PCIe 千兆 LAN</td>
      <td>Intel® I226-V PCIe 2.5GbE LAN x 2</td>
    </tr>
    <tr>
      <td>音频</td>
      <td colSpan={3}>麦克风 + 耳机组合接口</td>
    </tr>
    <tr>
      <td>引脚</td>
      <td colSpan={2}>28 针引脚（来自 SAMD21G18）&amp; 40 针引脚（兼容 Raspberry Pi）</td>
      <td>28 针引脚（来自 Raspberry Pi RP2040）</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={3}>USB 2.0 Type-A x2，USB 3.1 Type-A x1，USB 3.1 Type-C x1</td>
    </tr>
    <tr>
      <td>视频接口</td>
      <td colSpan={3}>HDMI2.0a：最高支持 4096x2160 @ 60Hz 24bpp / DP1.2a：最高支持 4096x2160 @ 60Hz 24bpp</td>
    </tr>
    <tr>
      <td>扩展插槽</td>
      <td colSpan={3}>M.2（Key B，2242/2280）：SATA III，USB2.0，UIM；M.2（Key M，2242/2280）：<br />PCIe 2.0 ×4；Micro SD 卡插槽；SIM 卡插槽；SATA III</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>JST 1.0 CR2032 3V</td>
    </tr>
    <tr>
      <td>TPM</td>
      <td colSpan={2}>内置 TPM（2.0）</td>
      <td>内置 TPM（2.0），可选外置 TPM</td>
    </tr>
    <tr>
      <td>电源接口</td>
      <td colSpan={3}>DC 插孔 5.5/2.1mm 或 Type-C PD</td>
    </tr>
    <tr>
      <td>电源（裸板）</td>
      <td colSpan={3}>DC 插孔输入：最小：12V @ 300mA - 1.2A，最大：19V @ 200mA - 0.7A <br />Type-C 输入：最小：15V @ 0.27A，最大：15V @ 0.93A</td>
    </tr>
    <tr>
      <td>尺寸</td>
      <td colSpan={3}>110x110mm</td>
    </tr>
    <tr>
      <td>认证</td>
      <td colSpan={3}>FCC，CE</td>
    </tr>
  </tbody>
</table>

:::note
如果您使用 3.5 英寸 HDD 硬盘与 ODYSSEY – X86J41x5 搭配，请确保使用 12V@2A 的 DC 电源或 15V@2A 的 Type-C 电源。
:::

:::tip
您可以使用移动电源为 ODYSSEY – X86J41x5 供电，但需要确保使用支持 USB PD 协议的移动电源，并通过 USB C 连接。此外，您可以无缝切换 USB C 电源和 DC 电源，无需担心任何问题。
:::

## 硬件概览

### ODYSSEY - X86J4105/ X86J4125

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4125/hw_overview.png)

### ODYSSEY - X86J4125 V2

![](https://files.seeedstudio.com/wiki/ODYSSEY_X86J4125_v2/hw_overview.jpg)

## 引脚图

### ODYSSEY - X86J4105/ X86J4125

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4125/pinout.png)

### ODYSSEY - X86J4125 V2

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/x86J4125v2.jpg)

### 所需硬件

1. ODYSSEY - X86J41x5

2. 电源适配器（已提供）

3. 外接显示器

4. HDMI 线

5. 键盘和鼠标

### 添加外部存储

对于配备 64 GB EMMC 存储版本的 ODYSSEY - X86J41x5，可以跳过此步骤。然而，如果您需要更多的存储空间，可以按照以下步骤操作。

ODYSSEY - X86J41x5 提供 4 种添加存储的方法，但只有 3 种方法支持安装操作系统（M.2 SATA、M.2 PCIE 和 SATA），Micro SD 卡插槽只能用作外部存储。

- **方法 1 - M.2 PCIE 接口**

- **方法 2 - M.2 SATA 接口**

- **方法 3 - SATA 接口**

- **方法 4 - Micro SD 卡插槽**

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Storage.png)

### 安装操作系统

ODYSSEY - X86J41x5 支持 Windows 和 Linux 操作系统。

- 对于非 EMMC 版本，请按照前述步骤连接外部存储，并通过可启动的 USB 驱动器安装所需的操作系统。

- 对于 EMMC 版本，预装了 Windows 10 Enterprise。

#### 第一步

将可启动的 USB 驱动器插入 ODYSSEY - X86J41x5 的一个 USB 接口。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/USB.png)

:::note
请访问“创建可启动 USB 和安装操作系统”以获取有关创建可启动 USB 驱动器的更多信息。
:::

#### 第二步

按下电源按钮，并持续按下键盘上的 **F7** 键，直到出现启动管理器屏幕。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/F7.jpg)

#### 第三步

选择连接的 USB 驱动器作为第一启动驱动器，并按 Enter 键。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/boot.png)

#### 第四步

按照安装说明完成操作系统的安装。

:::note
要访问 BIOS 设置，请在启动时持续按下 **DEL** 键。
:::

### 连接天线

将两根天线连接到主板上的两个插座。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/WiFi.png)

:::note
一根天线用于 Wi-Fi 和蓝牙，另一根用于增强的 5G 连接。
:::

### 添加 4G 蜂窝连接

要实现 4G 蜂窝连接，请将标准 SIM 卡插入主板的 SIM 卡插槽。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Sim.png)

#### 插入 PCIE 4G 模块

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/4g.png)

**注意：** 如果您想使用已连接的 SIM 卡，则必须安装此模块。

### 连接显示器

有两种显示方法：

#### 方法 1 - HDMI 接口

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/hdmi.png)

#### 方法 2 - USB-C 接口的 DP 输出

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/typec.png)

### 连接键盘和鼠标

通过 USB 接口连接键盘和鼠标。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/keyboard.png)

## 开机

为 ODYSSEY - X86J41x5 供电有两种方式：

:::note
板上的“PWR”引脚是电源开启引脚，可以通过将“PWR”引脚短接到地来开启设备。

:::

### 方法 1

最简单的方法是使用包装中附带的 12V/2A 电源适配器，并将其连接到 ODYSSEY - X86J41x5 的 DC 插孔。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/power.png)

### 方法 2

您还可以通过 USB-C 接口以 12V 输入为 ODYSSEY - X86J41x5 供电。此外，如果您的显示器支持 USB-PD，您可以仅使用一根电缆为 ODYSSEY - X86J41x5 供电并显示画面！

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/typec.png)

## 性能统计

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/CPU.png)

### Wi-Fi 连接

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Stats.png)

### 蓝牙连接

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Bluetooth.png)

## 作为计算机使用

- 浏览网页并观看 YouTube 视频

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/YouTube%20-%20Google%20Chrome%202019-12-04%2017-05-19.2019-12-05%2009_33_09.gif)

- 玩 Google T-Rex 游戏！

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/T-Rex%20Run!%20-%20Chrome%20Dinosaur%20Game%20-%20Google%20Chrome%202019-12-04%2017-01-42.2019-12-05%2009_38_40.gif)

## 在 Windows 上使用 ODYSSEY - X86J4105/X86J4125 的 Arduino Core (ATSAMD21G18)
### Odyssey J4105/J4125 v1
ODYSSEY - X86J4105/X86J4125 内置 Arduino Core (ATSAMD21G18)，为主板提供了更多功能。要使用它，只需下载 [Arduino IDE](https://www.arduino.cc/en/main/software)，并安装 Windows 版本。

1. 点击 `File` -> `Preferences` -> `Additional Boards Manager URL:`，然后将以下链接复制到其中：`https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json`。

2. 点击 `Tools` -> `Board:` -> `Boards Manager...`，Boards Manager 将会出现。搜索并安装 **`Seeeduino Zero`** 板库。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ArduinoBoard.png)

3. 在上传之前选择正确的端口和板子。

- `Port` -> `COMxx(Seeeduno Zero)`

- `Board` -> `Seeeduino Zero`

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/ArduinoPort.png)

尽情发挥您的创造力，使用 ODYSSEY - X86J4105/X86J4125 吧！

### Odyssey J4125 v2
ODYSSEY - X86J4125 v2 内置 Arduino Core (RP2040)，为主板提供了更多功能。要使用它，只需下载 [Arduino IDE](https://www.arduino.cc/en/main/software)，并安装 Windows 版本。

1. 按照 Wiki 中描述的方式安装 Arduino。
`Getting Started with ODYSSEY - X86J41x5 | Seeed Studio Wiki`

2. 点击 `File` -> `Preferences` -> `Additional Boards Manager URL:`，然后将以下链接复制到其中：`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Preferences.png)

3. 进入 `Tools` > `Board` > `Boards Manager…`，在搜索框中输入 `RP2040`。选择最新版本的 `Raspberry Pi Pico/RP2040` 并安装。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Boardsmanager.png)

4. 选择您的 `Raspberry Pi Pico` 和相应的端口。

5. 您现在已经完成了在 Ubuntu 20.04 上为 Arduino IDE 设置 Odyssey J4125V2 RP2040 的步骤。我编写了一个简单的程序，串口监视器显示结果如预期。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Finish.png)

尽情发挥您的创造力，使用 ODYSSEY - X86J4125 v2 吧！

## 在 Linux 操作系统中使用 ODYSSEY - X86J4105/X86J4125 的 Arduino Core (ATSAMD21G18)

如果您已安装 Linux 操作系统，请下载 [Arduino IDE](https://www.arduino.cc/en/main/software) 的 Linux 版本，并按照以下步骤安装 IDE：

### 安装 Arduino IDE

1. 打开终端并进入 Downloads 目录

```sh
cd ~/Downloads
```

2. 点击 `文件` -> `首选项` -> `附加开发板管理器 URL:`，并将以下链接复制到其中：`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`。

3. 使用 tar 命令解压下载的文件

```sh
tar -xvf arduino -1.8.10-linux64.tar.xz
```

4. 将文件移动到 opt 目录

```sh
sudo mv arduino-1.8.10 /opt
```

5. 安装 Arduino IDE 并创建桌面快捷方式

```sh
cd /opt/arduino-1.8.10/ && chmod +x install.sh && ./install.sh
```

6. 允许 Arduino 上传权限

```sh
cd /opt/arduino-1.8.10 && ./arduino-linux-setup.sh
```

### 安装开发板库
#### Odyssey J4105/J4125 v1
1. 点击 `文件` -> `首选项` -> `附加开发板管理器 URL:`，并将以下链接复制到其中：`https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json`。

2. 点击 `工具` -> `开发板:` -> `开发板管理器...`，开发板管理器将会出现。搜索并安装 **`Seeeduino Zero`** 开发板库。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/LinuxBoard.png)

3. 在上传之前选择正确的端口和开发板。

- `端口` -> `ttyACM0(Seeeduno Zero)`

- `开发板` -> `Seeeduino Zero`

#### Odyssey J4125 v2
1. 点击 `文件` -> `首选项` -> `附加开发板管理器 URL:`，并将以下链接复制到其中：`https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json`。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Preferences.png)

2. 进入 `工具` > `开发板` > `开发板管理器...`，在搜索框中输入 `RP2040`。选择最新版本的 `Raspberry Pi Pico/RP2040` 并安装。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Boardsmanager.png)

3. 选择您的 `Raspberry Pi Pico` 和对应的端口。

## 常见问题解答

### 如何进入 BIOS 设置

按下电源按钮并持续按 DEL 键，直到看到 BIOS 设置界面。

### Arduino IDE 无法识别 ODYSSEY - X86J4105/X86J4125 上的板载微控制器

在 **RST 引脚** 和 **GND 引脚** 之间（位于 SAMD21 的 28 个引脚左侧的 4 针插头上）添加一根跳线以重置 AMSAMDG21。

### 无法连接 Wi-Fi 和蓝牙

检查 BIOS 设置并在 BIOS 中启用 Wi-Fi 和蓝牙。

### ODYSSEY - X86J41x5 无法启动

确保使用包装盒中提供的 12V/2A 电源适配器，并检查连接。

### ODYSSEY - X86J41x5 电源按钮的不同状态

电源按钮的状态与其他计算机相同：

- `短按（关机状态）` -> `开机`

- `短按（开机状态）` -> `睡眠`

- `长按（开机状态）` -> `强制关机`

### 内置风扇是否可控

目前风扇由 BIOS 控制，用户无法控制。风扇速度根据 CPU 温度设置。在 BIOS 设置界面的 `Chipset` -> `FAN Control` 中查看更多信息。

### 如何升级 BIOS

有关升级 BIOS 的说明，请查看安装操作系统部分。

### 如何设置 ODYSSEY - X86J41x5 在接通电源时自动开机

这也需要在 BIOS 中配置。按 DEL 键进入 BIOS 设置。导航到 **Chipset** -> **Restore on AC Power Loss** 并将设置更改为 **Last State**。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Auto-power.png" /></div>

### 风扇未启动

ODYSSEY - X86J41x5 的风扇由嵌入式控制器（EC）控制，其作用是在系统启动前初始化设备。BIOS 中的温度由 EC 检测，温度传感器靠近 Intel CPU，但没有传感器引脚。换句话说，温度不是 CPU 的直接值，可能有 5 摄氏度的误差。您在系统中看到的温度值是 CPU 内部反馈的，而 BIOS 屏幕中的温度值是由 EC 反馈的，风扇的运行或停止取决于 EC 的值。

- EC 检测值（BIOS 屏幕）和风扇速度表如下：

**风扇关闭状态**：停止

**正常风扇状态**：低于 40°C–停止，45-50°C–50%，50-60℃–60%，高于 60℃–80%

**积极风扇状态**：低于 40°C–停止，45-50°C–70%，50-60℃–80%，高于 60℃–100%

### 风扇引脚定义

有些用户可能需要了解 5V PWM 风扇的引脚定义，以便 DIY 或更换自己的风扇。Odyssey 提供了一个 5V PWM 风扇引脚，其插头比通常的 5V 引脚插头更小。您可能需要更换插头以适配。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/x86-fan.png" /></div>

### 重新安装原始 Windows

ODYSSEY - X86J41x5 的 eMMC 版本会预装 Windows 10。如果您安装了其他操作系统并希望恢复到原始的 Windows 10，请参考以下内容：

- [**原始 Windows 10 镜像**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Ant-image/SD-JX-CJ41G-M-101-H.zip)

    - 此镜像支持 **自动刷写**。只需下载上述镜像并解压文件，将其放置在 **USB 驱动器的根目录**。

    - 将 USB 驱动器插入 ODYSSEY-X86J41x5，并从 USB 驱动器启动。这将自动将原始 Windows 10 镜像刷回 eMMC。

### ODYSSEY-X86J41x5 是否具有 TPM？

ODYSSEY-X86J4105、ODYSSEY-X86J4125 和 ODYSSEY-X86J4125 V2 均在处理器中集成了 FTPM。此外，ODYSSEY-X86J4125 V2 还具有可选的外部 TPM。

### ODYSSEY 板是否支持安全启动的 Boot Guard？

是的，您可以在 BIOS 中启用 "Security Boot" 选项。启用后，BIOS 将禁止从未经认证的设备启动。

### 为什么 GPIO 在 Odyssey 关机后仍然工作？

要设置此项，您需要[更新到我们提供的最新 BIOS](https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Updating-Firmware/)。在最新的 BIOS 中，您可以将此处的启用更改为禁用，以关闭 GPIO 和 ODYSSEY。

![](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105/OdysseyFAQ1.png)

## 资源

- **[ZIP]** [ODYSSEY-X86J4105/ X86J4125 3D 模型](http://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-3D-Model.zip)

- **[STP]** [ODYSSEY-X86J4125 V2 3D 模型](http://files.seeedstudio.com/wiki/ODYSSEY_X86J4125_v2/ODYSSEY-X86J4125-V2.stp)

- **[PDF]** [ODYSSEY-X86J4105/ X86J4125 2D 模型](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-2D.pdf)

- **[DXF]** [ODYSSEY-X86J4105/ X86J4125 2D 模型](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-2D.dxf)

- **[PDF]** [Atmel-SAMD21-数据手册](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/Atmel-SAMD21-datasheet.pdf)

- **[PDF]** [ODYSSEY-X86J4105/ X86J4125 用户手册](https://files.seeedstudio.com/products/102110399/Documents/ODYSSEY-X86%20User-Manual-v1.1.pdf)

- **[PDF]** [ODYSSEY-X86J4125 V2 用户手册](https://files.seeedstudio.com/products/ODYSSEY_X86J4125_user_manual.pdf.pdf)

- **[ZIP]** [ODYSSEY-X86 Windows 10 驱动程序包](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/ODYSSEY-X86-WIndows-Drivers.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>