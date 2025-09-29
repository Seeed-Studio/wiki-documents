---
description: NPi i.MX6ULL 开发板 - Linux 单板计算机
title: NPi i.MX6ULL 开发板 - Linux 单板计算机
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/NPi-i.MX6ULL-Dev-Board-Linux-SBC
last_update:
  date: 2/15/2023
  author: jianjing Huang 
---

# NPi i.MX6ULL 开发板 - Linux 单板计算机

 ![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/preview_3.jpg)

NPi i.MX6ULL 开发板是一款低功耗的 Linux 单板计算机，基于强大的 i.MX6ULL 构建。您一定会喜欢板载的 512MB DDR3L 和 512MB NAND，更不用说丰富的接口和 I/O 资源了。

同时，我们为您提供了丰富的软件资源。您可以在 [这里](https://github.com/Seeed-Studio/image-builder) 找到 debian/ubuntu/yocto 和系统分发镜像。此外，我们还提供了许多 Pi Hat 的内核和应用层支持。因此，您可以直接将您喜欢的 Pi Hat 插入此开发板使用。大多数 SeeedStudio Pi Hat 都可以与 NPi i.MX6ULL 开发板配合使用（除了 NPi i.MX6ULL 开发板 6-Mic 圆形阵列套件和 NPi i.MX6ULL 开发板 4-Mic 线性阵列套件）。您还可以使用我们的 Grove 基础 Pi Hat 来使用 Grove 模块快速原型化您喜欢的项目。请关注我们的 Github 以获取最新的软件更新。

整个开发板由核心模块和扩展板组成，所有组件均为工业级。

核心模块由 i.MX6ULL 核心、512MB DDR3L 和 512MB NAND FLASH（或 8GB eMMC）组成。实际上，根据 Flash 的不同，NPi i.MX6ULL 开发板可以分为两个不同版本。

扩展板主要包括各种外设接口和输入输出、IO 扩展。包括但不限于两个 100M 以太网端口、一个 USB Host 和一个 USB OTG 端口、一个 24 位 RGB LCD 接口、2x 40 Pin I/O 扩展头等。如此丰富的资源将满足您的各种控制需求。所有这些功能使其成为工业控制、轨道交通、无人机控制和音频输出等领域的完美解决方案。

NPi i.MX6ULL 开发板 - 8G eMMC 版本：

[![立即购买](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/NPi-i-MX6ULL-Dev-Board-Industrial-Grade-Linux-SBC-eMMC-Version-p-4221.html)

NPi i.MX6ULL 开发板 - 512MB NAND FLASH 版本：

[![立即购买](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/NPi-i-MX6ULL-Dev-Board-Industrial-Grade-Linux-SBC-NAND-Version-p-4220.html)

## 特性

- Arm-Cortex-A7 核心处理器
- 工业级
- 低功耗
- debian/ubuntu/yocto 操作系统
- 兼容 Raspberry Pi 40-Pin 扩展板

## 规格

|项目|值|
|----|------|
|外设接口| 1 x USB 主机<br />2 x 100M 以太网接口<br />1 x FPC LCD 接口（包括 24 位 RGB 和 I2C 触摸控制）<br />1 x SD 卡接口（位于板背面）<br />1 x UART 接口<br />2 x 40 针排针|
|板载 LED|3 x 用户自定义 LED<br />1 x 电源 LED<br />1 x 心跳 LED|
|电源|1 x DC 接口 (5V±2%)<br />1 x USB Type-C|
|按钮|4 x 按键|
|开关|1 x 8 位 DIP 开关|
|RTC|1 x RTC 电池槽|
|CPU|1 x NXP MCIMX6Y2CVM08AB|
|频率|最高 800MHz|
|DDR3L|板载 512MB|
|eMMC|板载 8GB（NPi i.MX6ULL 开发板 - 8G eMMC 版本）|
|NAND|板载 512MB（NPi i.MX6ULL 开发板 - 512MB NAND FLASH 版本）|
|尺寸|61mm x 100mm|
|工作温度（NPi i.MX6ULL 开发板 - 8G eMMC 版本）| -20℃ ~ 80℃ |
|工作温度（NPi i.MX6ULL 开发板 - 512MB NAND FLASH 版本）| -40℃ ~ 80℃ |

:::note
这里的工作温度特指核心模块，扩展板的温度范围较窄。我们尚未测试扩展板的具体温度范围。
:::

## 应用

- 工业（如 CAN-以太网网关等）
- 白色家电（如冰箱、Type-C 微波炉等）
- 智能家居设备

## 硬件概览

### 接口

 ![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/NAND-over.jpg)

**100M 以太网接口带 LED**：2 x 100M 以太网接口

**5V 电源插孔**：使用 5V ± 2% 单电源供电

**过压保护指示灯**：当此灯亮起时，表示电压超出范围

**USB Type-C 设备接口**：USB Type-C 接口

**UART TTL**：直接从主控制器的串口引出

**心跳 LED**：系统运行后心跳灯会持续闪烁

**电源 LED**：通电后 LED 会亮起

**Raspberry Pi 兼容排针**：包括 UART、I2C、SPI、PWM 和其他兼容 Raspberry Pi 的 IO 接口

**LCD FPC 接口**：包括 24 位 RGB 接口和 I2C 触摸屏控制接口

**复位 & 用户按钮**：共有 4 个按钮，分别是复位、开/关、普通按钮和模式切换按钮

**USB 主机 Type-A**：USB 主机接口

**8 位 DIP 开关**：支持在 NAND、eMMC、SD 和 USB 启动模式之间切换的 8 位 DIP 开关

**额外 GPIO 排针**：包含一个 74LV595PW 芯片，将 4 通道 IO 扩展为 8 通道

**用户 LED**：可编程 LED

**RTC 电池槽**：可连接 CR1220 电池为 RTC 供电

**Type-C SD 卡槽**：Type-C SD 卡槽，支持 SD 卡 3.0

### 引脚功能

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/eMMC-c.jpg)

更多信息请访问 [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665) 查看。

## 软件介绍

### 准备工作

**所需材料**

- NPi i.MX6ULL 开发板 - Linux SBC NAND 版本（或 eMMC 版本）
- 4GB（或更大容量）SD 卡及 SD 卡读卡器
- PC 或 Mac
- [USB 转 UART 适配器](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)（可选）
- 一根 USB Type-C 数据线

:::caution
请轻插 USB 数据线，否则可能损坏接口。请使用内部有 4 根线的 USB 数据线，2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击<a href="https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html"><b>这里</b></a>购买。
:::

**镜像安装**

您需要从 SD 卡安装 NPi i.MX6ULL 开发板 - Linux SBC 镜像以使其运行。我们提供两种启动方式：可以从 SD 卡启动，也可以从 eMMC（或 NAND）启动。

**A. 从 SD 卡启动**

- **步骤 1.** 选择最新的 [固件](https://files.seeedstudio.com/linux/NPi+i.MX6ULL/imx6ull-debian-buster-console-armhf-latest-2gb.img.xz)

- **步骤 2.** 使用 SD 卡读卡器将 SD 卡连接到 PC 或 Mac，要求 SD 卡容量大于 4GB。

- **步骤 3.** 点击此处下载 <a href="https://etcher.io/">Etcher</a>，然后使用 Etcher 将 ```*.img.xz``` 文件直接写入 SD 卡。或者将 ```*.img.xz``` 文件解压为 ```*.img``` 文件，然后使用其他镜像写入工具将其烧录到 SD 卡。
<br />
<br />点击加号图标添加新下载的镜像文件，软件会自动选择您插入的 SD 卡。然后点击 Flash！开始写入。整个过程大约需要 10 分钟。

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/etcher.png)

- **步骤 4.** 将镜像写入 SD 卡后，将 SD 卡插入 NPi i.MX6ULL 开发板 - Linux SBC。将 8 位 DIP 开关设置为 2-5-8 模式以启用从 SD 卡启动。

- **步骤 5.** 使用 USB Type-C 接口为开发板供电。在写入过程中不要取出 SD 卡。NPi i.MX6ULL 开发板 - Linux SBC 将从 SD 卡启动，您可以看到板上的 PWR 和心跳 LED 点亮。

:::note
如果心跳 LED 无法闪烁，说明启动失败。请检查镜像是否正确安装。
:::

**B. 从 eMMC（NAND）卡启动**

- **步骤 1.** 如果您首次启动 NPi i.MX6ULL 开发板，过程与 **A. 从 SD 卡启动** 相同。

- **步骤 2.** 在 `fire-config` 中选择 P22 以启用闪存启动，然后重启。

```bash
sudo fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/flasher.png)

- **步骤 3.** 等待 NPi i.MX6ULL 开发板上的 LED 持续闪烁，这表示 eMMC（或 NAND）烧录成功。

- **步骤 4.** 关闭电源并拔出 SD 卡。

- **步骤 5.** 将 8 位 DIP 开关设置为 eMMC（2-4-5-7）或 NAND（2-3-6）模式并重启。

**串口控制台**

现在您的 NPi i.MX6ULL 开发板 - Linux SBC 已启动，您可能希望通过控制台访问 Linux 系统，以设置 WiFi 等功能。
<!-- 您有两种方式获取控制台： -->

<!-- - A. OTG USB 端口 - 这需要开发板上运行的 Linux 系统 -->

- B. UART端口 - 这是访问控制台的困难方式，可用于调试底层问题

<!-- **A. 通过OTG连接**

- **步骤1.** 找到一根Type-C USB线，并确保它是一根数据线（不仅仅是充电线），将Type-C USB端插入NPi i.MX6ULL开发板的Type-C USB端口，然后将另一端插入您的电脑。

- **步骤2.** 检查您的电脑是否检测到串口：

    - Windows：检查设备管理器，应该有一个新的串口设备，名称为```COMx```，其中x是一个递增的数字。
    - Linux：运行`ls /dev/ttyACM*`，您应该看到```/dev/ttyACMx```，其中x会根据您使用的USB端口而变化。
    - Mac：运行`ls /dev/cu.usb*`，您应该看到```/dev/cu.usbmodem14xx```，其中xx会根据您使用的USB端口而变化。

- **步骤3.** 使用您喜欢的串口调试工具连接串口，串口参数如下：115200波特率，8位数据位，无校验位，1个停止位，无流控。例如：

    - Windows：使用[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)，选择```Serial```协议，填写NPi i.MX6ULL开发板的正确COM端口，设置波特率为```115200```，数据位为8，无校验位，停止位为1，无流控。
    - Linux：根据您的USB转TTL适配器，可能是```screen /dev/ttyACM0(,1, 等)``` 115200或```screen /dev/ttyUSB0(,1, 等) 115200```
    - Mac：根据您的USB转TTL适配器，可能是```screen /dev/cu.usbserial1412(,1422, 等) 115200```或```screen /dev/cu.usbmodem1412(,1422, 等) 115200```

- **步骤4.** 默认用户名为```debian```，密码为```temppwd```。 -->

**B. 通过UART端口连接**

在本节中，我们将指导您如何使用USB转TTL适配器通过UART端口将您的电脑连接到NPi i.MX6ULL开发板。

- **步骤1.** 使用USB转TTL适配器连接UART端口和您的PC/Mac。如果您没有USB转TTL适配器，可以点击[这里](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)购买一个。

- **步骤2.** 使用以下串口调试工具，设置波特率为115200：
  - Windows：使用[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)，选择```Serial```协议，填写NPi i.MX6ULL开发板的正确COM端口，设置波特率为115200，数据位为8，无校验位，停止位为1，无流控。
  - Linux：根据您的USB转TTL适配器，可能是```screen /dev/ttyACM0(,1, 等) 115200```或```screen /dev/ttyUSB0(,1, 等) 115200```。
  - Mac：根据您的USB转TTL适配器，可能是```screen /dev/cu.usbserial1412(,1422, 等) 115200```或```screen /dev/cu.usbmodem1412(,1422, 等) 115200```。

- **步骤3.** 默认用户名为```debian```，密码为```temppwd```。

- **步骤4.** 如果您没有USB转TTL适配器，您也可以使用Arduino。如果使用Arduino，请将跳线的一端连接到Arduino的RESET引脚，另一端连接到Arduino的GND引脚。这将绕过Arduino的ATMEGA MCU并将Arduino变成USB转TTL适配器，观看视频教程[这里](https://www.youtube.com/watch?v=qqSLwK1DP8Q)。然后将Arduino的GND引脚连接到NPi i.MX6ULL开发板UART端口的GND引脚。将Arduino的Rx引脚连接到NPi i.MX6ULL开发板UART端口的Rx引脚。将Arduino的Tx引脚连接到NPi i.MX6ULL开发板UART端口的Tx引脚。最后，通过Arduino的USB线将Arduino连接到您的PC/Mac。现在通过以下命令检查您的Mac或Linux PC是否检测到Arduino：

```
ls /dev/cu.usb* (Mac)
ls /dev/ttyACM* (Linux)
```

您应该看到类似以下的输出：

```
/dev/cu.usbmodem14XX，其中XX会根据您使用的USB端口而变化（Mac）
/dev/ttyACMX，其中X会根据您使用的USB端口而变化（Linux）
```

现在按照上述步骤通过此串口连接到您的NPi i.MX6ULL开发板。

### 引脚控制

本节将指导您如何通过Shell控制NPi i.MX6ULL开发板上的引脚。请注意，您必须使用root权限才能使命令生效。

```bash
su root
用户名 root 密码 root
```

#### GPIO

在本节中，我们将解释Linux GPIO子系统驱动相关应用层程序的控制原理。现在我们将控制Grove - 蜂鸣器，向您展示如何使用它。

**所需材料**

- NPi i.MX6ULL开发板 - Linux SBC NAND版本（或eMMC版本）
- [Grove - 4针母跳线转Grove 4针转换线](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html)
- [Grove - 蜂鸣器](https://www.seeedstudio.com/Grove-Buzzer.html)

- **步骤1.** 在/sys/class/gpio中配置GPIO 19为导出状态。

```
echo 19 > /sys/class/gpio/export
```

NPi i.MX6ULL开发板上GPIO 19的位置可以通过[PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665)查看。您获得的引脚编号是GPIOx_IOn，您需要使用以下公式转换为gpio索引。

```
index = GPIO1_IO19 = (1-1)*32 + 19 = 19
index = GPIO4_IO20 = (4-1)*32 + 20 = 116
```

- **步骤2.** 使用Grove - 4针母跳线转Grove 4针转换线将Grove - 蜂鸣器连接到NPi i.MX6ULL开发板上的GPIO 19。

- **步骤3.** 配置GPIO 19为输出模式。

```
echo out > /sys/class/gpio/gpio19/direction
```

- **步骤4.** 配置GPIO 19为高电平。

```
echo 1 > /sys/class/gpio/gpio19/value
```

最后，您将听到Grove - 蜂鸣器发出的声音。同时，关于gpio的sysfs，您可以通过[链接](https://www.kernel.org/doc/Documentation/gpio/sysfs.txt)获取更多信息。

#### 输入

在本节中，我们将解释与 Linux 输入子系统驱动相关的应用层程序的控制原理。现在我们将使用 NPi i.MX6ULL 开发板的 `KEY Button` 来演示如何使用它。

**所需材料**

- NPi i.MX6ULL 开发板 - Linux SBC NAND 版本（或 eMMC 版本）

**软件**

- **步骤 1.** 安装 `evtest` 以获取 `KEY Button` 的状态。

```
apt install evtest -y
```

- **步骤 2.** 检查 `/dev/input/by-path` 中是否存在 `KEY Button`。

```
root@npi:~# ls -lh /dev/input/by-path
total 0
lrwxrwxrwx 1 root root 9 Feb 14  2019 platform-gpio-keys-event -> ../event0
```

如果无法获得上述结果，则需要调整驱动树。

- **步骤 3.** 使用 `evtest` 获取 `KEY Button` 的状态。注意，NPi i.MX6ULL 开发板有四个按钮控制不同的功能，您只需控制 `KEY Button`。

```
root@npi:~# evtest
No device specified, trying to scan all of /dev/input/event*
Available devices:
/dev/input/event0:      gpio-keys
Select the device event number [0-0]: 0
Input driver version is 1.0.1
Input device ID: bus 0x19 vendor 0x1 product 0x1 version 0x100
Input device name: "gpio-keys"
Supported events:
  Event type 0 (EV_SYN)
  Event type 1 (EV_KEY)
    Event code 11 (KEY_0)
Properties:
Testing ... (interrupt to exit)
Event: time 1583478811.552488, type 1 (EV_KEY), code 11 (KEY_0), value 1
Event: time 1583478811.552488, -------------- SYN_REPORT ------------
Event: time 1583478811.752195, type 1 (EV_KEY), code 11 (KEY_0), value 0
Event: time 1583478811.752195, -------------- SYN_REPORT ------------
```

最终，您将获得上述信息。

#### UART

在本节中，我们将解释串口和终端设备的基本使用。现在我们将控制 uart3 来演示如何使用它。

**所需材料**

- NPi i.MX6ULL 开发板 - Linux SBC NAND 版本（或 eMMC 版本）
- PC 或 Mac
- [USB 转 UART 适配器](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)

**软件**

- **步骤 1.** 在 `fire-config` 中选择 P17 以启用 uart3。

```
fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/fire-config-uart3-enable.png)

如果成功启用，您将获得如下命令：

```
root@npi:~# ls /dev/ttymxc2
/dev/ttymxc2
```

- **步骤 2.** 使用 stty 配置 uart3。

```
stty -F /dev/ttymxc2 ispeed 115200 ospeed 115200
```

- **步骤 3.** 访问 [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665) 查找 NPi i.MX6ULL 开发板的 uart3 引脚编号。

- **步骤 4.** 使用 USB 转 TTL 适配器将 Uart3 连接到您的 PC/Mac。如果您没有 USB 转 TTL 适配器，可以点击 [这里](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) 获取一个。

- **步骤 5.** 使用以下串口调试工具，波特率为 115200：
  - Windows: 使用 [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)，选择 ```Serial``` 协议，填写正确的 NPi i.MX6ULL 开发板 - Linux SBC 的 COM 端口，波特率为 115200，8Bits，无校验位，停止位为 1，无流控。
  - Linux: 根据您的 USB 转 TTL 适配器，可能是 ```screen /dev/ttyACM0(,1, 等) 115200``` 或 ```screen /dev/ttyUSB0(,1, 等) 115200```。
  - Mac: 根据您的 USB 转 TTL 适配器，可能是 ```screen /dev/cu.usbserial1412(,1422, 等) 115200``` 或 ```screen /dev/cu.usbmodem1412(,1422, 等) 115200```。

- **步骤 6.** 使用以下命令测试发送和接收数据：

```
echo seeedstduio > /dev/ttymxc2
```

最终，如果连接成功，我们将在 putty 中看到字符串 'seeedstduio'。

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/putty_recive.png)

#### I2C

在本节中，我们将解释与 Linux i2c 驱动相关的应用层程序的控制原理。现在我们将使用 i2c1 和 Grove - 气压传感器 (BMP280) 来演示如何使用它。

**所需材料**

- NPi i.MX6ULL 开发板 - Linux SBC NAND 版本（或 eMMC 版本）
- [Grove - 4 针母跳线转 Grove 4 针转换线](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html)
- [Grove - BME280 环境传感器（温度湿度气压计）](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)

**软件**

**步骤 1.** 使用 apt 安装 i2c-tools。

```
apt install i2c-tools -y
```

**步骤 2.** 访问 [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665) 查找 NPi i.MX6ULL 开发板的 I2C1 引脚编号。

**步骤 3.** 使用 Grove - 4 针母跳线转 Grove 4 针转换线将 Grove - BME280 连接到 NPi i.MX6ULL 开发板的 I2C1。

**步骤 4.** 使用 `i2cdetect` 检测 Grove - BME280 的 I2C 地址。0 表示 i2c1，因此如果您想检测 i2c2，需要使用 `i2cdetect -y 1`。

```
root@npi:~# i2cdetect -y 0
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f
00:          -- -- -- -- -- -- -- -- -- -- -- -- --
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
40: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
70: -- -- -- -- -- -- -- 77
```

现在，我们可以发现 Grove - BME280 的 I2C 地址是 0x77。

**步骤 5.** 使用 i2cget 获取 Grove - BME280 的 ID。

```
root@npi:~# i2cget -y 0 0x77 0xD0
0x58
```

最终，我们可以获得 0x58，这是 Grove - BME280 的 ID。有关 Grove - BME280 的更多信息，您可以访问 [wiki](https://wiki.seeedstudio.com/cn/Grove-Barometer_Sensor-BME280/) 进行学习。有关 i2c-tool 的使用，您可以查看 [链接](https://www.mankier.com/package/i2c-tools)。

#### ADC

在本节中，我们将解释与 Linux ADC 驱动相关的应用层程序的控制原理。现在我们将使用 ADC1 和 Grove - 旋转角度传感器来演示如何使用它。

**所需材料**

- NPi i.MX6ULL 开发板 - Linux SBC NAND 版本（或 eMMC 版本）
- [Grove - 4针母跳线转Grove 4针转换线缆](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html)
- [Grove - 旋转角度传感器](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)

**软件**

- **步骤 1.** 在 `fire-config` 中选择 P12 以启用 ADC1  

```
fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/enable-adc.png)

如果成功启用，您将获得如下命令输出。

```
root@npi:~# ls /sys/bus/iio/devices/iio\:device0
buffer              in_voltage3_raw                sampling_frequency_available
dev                 in_voltage_sampling_frequency  scan_elements
in_conversion_mode  in_voltage_scale               subsystem
in_voltage0_raw     name                           trigger
in_voltage1_raw     of_node                        uevent
in_voltage2_raw     power
```

- **步骤 2.** 访问 [PinMap](https://docs.google.com/spreadsheets/d/1CRQrkBshc_2KFwC0NHmuwaJ_SedR24Oc1Ia9RGR3Us0/edit#gid=1256668665) 查找 NPi i.MX6ULL 开发板上 ADC1 的引脚编号。您可以在下图中找到 GPIO 编号。

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/adc-pin-map.png)

**步骤 3.** 使用 Grove - 4针母跳线转Grove 4针转换线缆将 Grove - 旋转角度传感器连接到 NPi i.MX6ULL 开发板上的 ADC1。

**步骤 4.** 获取 Grove - 旋转角度传感器的 AD 数据。

```
root@npi:~# cat /sys/bus/iio/devices/iio\:device0/\\in_voltage3_raw
82
```

根据上述信息，您可以了解到我们正在读取 GPIO1_IO3 引脚的模拟值。

#### SPI

在本节中，我们将解释 Linux SPI 程序的控制原理。现在我们将使用 SPI 和 Raspberry Pi 的 2通道 CAN-BUS(FD) Shield 来演示如何使用它。

**所需材料**

- NPi i.MX6ULL 开发板 - Linux SBC NAND 版本（或 eMMC 版本）
- [2通道 CAN-BUS(FD) Shield for Raspberry Pi](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html)

**软件**

- **步骤 1.** 根据 [安装指南](https://wiki.seeedstudio.com/cn/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/#mounting-guide) 将 2通道 CAN-BUS FD Shield for Raspberry Pi 插入 NPi i.MX6ULL 开发板。

- **步骤 2.** 在 `fire-config` 中选择 P23 以扩展文件系统。

```bash
fire-config
```

![](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/IMG/ExpandSDCard.png)

- **步骤 3.** 安装关于 seeed-linux-dtoverlays 的依赖项

```bash
apt install -y make git device-tree-compiler linux-headers-$(uname -r) gcc
```

- **步骤 4.** 从 GitHub 的 `seeed-linux-dtverlays` 中制作并安装 NPi i.MX6ULL 开发板的驱动程序。

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_imx6ull && make install_imx6ull
```

:::note
如果在制作过程中发现错误，可以使用 `mkdir -p /lib/modules/$(uname -r)/extra/seeed` 创建文件。
:::

- **步骤 5.** 在 `/boot/uEnv.txt` 中添加 dtbo 包，以使其在重启后生效。

```bash
echo dtoverlay=/lib/firmware/imx-MCP2517FD-can0-overlay.dtbo >> /boot/uEnv.txt
reboot
```

- **步骤 6.** 使用 `dmesg` 检查驱动程序是否安装成功。如果成功，您将看到以下信息。

```bash
root@npi:~ insmod /lib/modules/$(uname -r)/extra/seeed/mcp25xxfd-can.ko
root@npi:~ dmesg | grep spi
[    1.057609] spi_imx 44009000.spi: driver initialized
[    9.852726] mcp25xxfd spi0.0: Linked as a consumer to regulator.6
[    9.966510] mcp25xxfd spi0.0: MCP2517 successfully initialized.

root@npi:~ ifconfig -a
can0: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

有关 2通道 CAN-BUS(FD) Shield 的更多信息，您可以访问 [wiki](https://wiki.seeedstudio.com/cn/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/#install-can-hat)。

#### IIS

在本节中，我们将解释 Linux IIS 程序的控制原理。现在我们将使用 IIS 和 ReSpeaker 2-Mics Pi HAT 来演示如何使用它。

**所需材料**

- NPi i.MX6ULL 开发板 - Linux SBC NAND 版本（或 eMMC 版本）
- [ReSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)

**软件**

- **步骤 1.** 根据 [安装指南](https://wiki.seeedstudio.com/cn/ReSpeaker_2_Mics_Pi_HAT/#getting-started) 将 ReSpeaker 2-Mics Pi HAT 插入 NPi i.MX6ULL 开发板。

- **步骤 2.** 使用 `apt` 安装 alsa-utils

```bash
sudo apt install alsa-utils -y
```

- **步骤 3.** 在 `/boot/uEnv.txt` 中添加 dtbo 包，以使其在重启后生效。

```bash
sudo sh -c  "echo dtoverlay=/lib/firmware/imx-seeed-voicecard-2mic-overlay.dtbo >> /boot/uEnv.txt"
```

:::note
如果找不到 imx-seeed-voicecard-2mic-overlay.dtbo，您需要查看 SPI 的指南以安装关于 imx-seeed-voicecard-2mic-overlay.dtbo 的依赖项。
:::

- **步骤 4.** 使用 `aplay` 检查驱动程序是否安装成功。如果成功，您将看到以下信息。

```sh
debian@npi:~$ sudo insmod /lib/modules/$(uname -r)/extra/seeed/snd-soc-seeed-voicecard.ko
debian@npi:~$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 2028000.sai-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
debian@npi:~$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 2028000.sai-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

- **步骤 5.** 进入 `seeed-linux-dtverlays` 文件夹并按如下配置 soundstate：

```sh
debian@npi:~$ cd seeed-linux-dtverlays/
debian@npi:~/seeed-linux-dtverlays$ sudo cp extras/wm8960_asound.state /var/lib/alsa/asound.state
debian@npi:~/seeed-linux-dtverlays$ sudo alsactl restore
```

- **步骤 6.** 现在您可以开始使用 ReSpeaker 2-Mics Pi Hat 了！对于简单的录音和播放测试，请运行以下命令：

1. 录制音频到 `test.wav` 文件：

```sh
arecord -f cd -r 48000 -Dhw:0 test.wav
```

2. 播放 `test.wav` 音频。请记得插入耳机或扬声器以输出音频。

```sh
aplay -Dhw:0 -r 48000 test.wav
```

有关 ReSpeaker 2-Mics Pi HAT 的更多信息，请访问 [wiki](https://wiki.seeedstudio.com/cn/ReSpeaker_2_Mics_Pi_HAT/)

## 资源

-----

- **[PDF]** [i.MX 6ULL 数据手册](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/IMX6ULLCEC.pdf)
- **[PDF]** [NPi i.MX6ULL 开发板 - Linux SBC 机械尺寸](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/Mechanical_Dimensions.pdf)
- **[PDF]** [NPi i.MX6ULL 开发板 - Linux SBC 扩展板](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/NPi-i.MX6ULL-Breakout-Board-Schematic-V1.0.pdf)
- **[PDF]** [NPi i.MX6ULL 开发板 - Linux SBC 核心模块](https://files.seeedstudio.com/wiki/NPi-i-MX6ULL-Dev-Board/REG/NPi-i.MX6ULL-Core-Module-Schematic-V1.0.pdf)
- **[URL]** [高级系统开发](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL)

## NPi i.MX6ULL 高级系统开发

- [可用性](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Availability)
- [供应商文档](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-VendorDocumentation)
- [基本要求](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-BasicRequirements)
- [ARM 交叉编译器：GCC](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-ARMCrossCompiler:GCC)
- [引导加载程序：U-Boot](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Bootloader:U-Boot)
- [Linux 内核](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-LinuxKernel)
- [根文件系统](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-RootFileSystem)
  - [Debian 10](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Debian10)
  - [Ubuntu 20.04 LTS](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Ubuntu20.04LTS)
- [设置 microSD 卡](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-SetupmicroSDcard)
- [安装内核和根文件系统](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-InstallKernelandRootFileSystem)
- [复制根文件系统](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyRootFileSystem)
- [在 /boot/uEnv.txt 中设置 uname_r](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Setuname_rin/boot/uEnv.txt)
- [设备树二进制文件](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-DeviceTreeBinary)
- [复制内核镜像](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyKernelImage)
- [复制内核设备树二进制文件](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyKernelDeviceTreeBinaries)
- [复制内核模块](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-CopyKernelModules)
- [文件系统表 (/etc/fstab)](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-FileSystemsTable(/etc/fstab))
- [移除 microSD/SD 卡](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-RemovemicroSD/SDcard)
- [评论](https://www.digikey.com/eewiki/display/linuxonarm/NPi+i.MX6ULL#NPii.MX6ULL-Comments)

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