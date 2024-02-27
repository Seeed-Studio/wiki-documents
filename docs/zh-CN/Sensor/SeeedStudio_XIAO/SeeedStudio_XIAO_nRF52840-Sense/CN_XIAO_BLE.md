---
description: Getting Started with Seeed Studio XIAO nRF52840 (Sense)
title: Getting Started with Seeed Studio XIAO nRF52840 (Sense) 开发板
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO_BLE
last_update:
  date: 10/30/2023
  author: 吴飞飞
---

# Seeed Studio XIAO nRF52840 (Sense) 开发板

<meta name="google-site-verification" content="2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE" />

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" alt="pir" width={700} height="auto" /></p>

作为 Seeed Studio XIAO 系列的首款无线产品， **Seeed Studio XIAO nRF52840** 配备了功能强大的 **Nordic nRF52840 MCU**， 集成了 **蓝牙 5.0** 连接。  同时，它具有 **小巧精致**的外形， 可用于可穿戴设备和物联网项目。  **单面表面贴装设计** 和 板载 **蓝牙天线** 可以极大地方便物联网项目的快速部署。

此外，该板还有一个高级版本，**Seeed  Studio XIAO nRF52840 Sense**。 它集成了两个额外的板载传感器。 其中之一是**脉冲密度调制 （PDM） 数字麦克风**。它可以实时接收音频数据，从而可用于音频识别。另一个是 **6 轴惯性测量单元 （IMU）**,该 IMU 在手势识别等 TinyML 项目中非常有用。这些板载传感器为用户提供了极大的便利，而电路板是超小的。

与Seeed Studio XIAO RP2040相比，Seeed Studio XIAO nRF52840包含 **更丰富的接口**。 首先要注意的是， **近场通信（NFC）接口**在板上是可用的。 其次，在Type-C接口的侧面有一个微小的**重置按钮**。 在另一侧，有一个 **三合一LED（用户LED）** 和一个**充电LED** ，用于在连接电池时指示充电状态。 有 **11个数字I/O** 可以用作**PWM 引脚** 和 **6个模拟I/O** 可以用作**ADC 引脚**。它支持所有三种常见的串行接口，如 **UART, I2C, and SPI**。与Seeed Studio XIAO RP2040相同，它有一个**2 MB的板载闪存**，这意味着它也可以使用**Arduino, MicroPython, CircuitPython,或其他编程语言进行编程**。

Seeed Studio XIAO nRF52840 Sense 兼容 Seeed Studio XIAO 扩展板。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    </a>
</div>

## 特征

- 强大的无线功能：带板载天线的蓝牙 5.0
- 强大的 CPU：Nordic nRF52840，带 FPU 的 ARM® Cortex-M4® 32 位处理器，64 MHz
- 超低功耗：待机功耗小于 5μA
- 电池充电芯片：支持锂电池充放电管理
- 板载 2 MB 闪存
- 板载 PDM 麦克风（仅适用于 Seeed Studio XIAO nRF52840 Sense）
- 板载 6 轴 LSM6DS3TR-C IMU（仅在 Seeed Studio XIAO nRF52840 Sense 中）
- 超小尺寸：20 x 17.5mm，Seeed Studio XIAO 系列经典外形尺寸，适用于可穿戴设备
- 丰富的接口：1xUART、1xI2C、1xSPI、1xNFC、1xSWD、11xGPIO（PWM）、6xADC
- 单面组件，表面贴装设计

## 规格比较

|         项目        |    Seeed Studio XIAO SAMD21    |        Seeed Seeed Studio XIAO   RP2040        |               Seeed Seeed Studio XIAO nRF52840              |          Seeed Seeed Studio XIAO nRF52840   Sense          |
|:--------------------:|:----------------------:|:---------------------------------:|:-----------------------------------------:|:----------------------------------------:|
|       处理器      |       SAMD21 M0+@48MHz |       RP2040 双核 M0+@133Mhz |                        nRF52840 M4F@64MHz |                    nRF52840 M4F@64MHz    |
|   无线连接   |                    不适用 |                               不适用 |                   蓝牙 5.0/BLE/NFC |              蓝牙 5.0/BLE/NFC     |
|        记忆        | 32 KB SRAM、256KB 闪存 |     264 KB SRAM，2MB板载闪存 | 256 KB RAM，1MB 闪存，2MB 板载闪存 | 256 KB RAM，1MB 闪存，2MB 板载闪存 |
|    内置传感器  |                    不适用 |                              不适用 |                                      不适用 |                 6 自由度 IMU （LSM6DS3TR-C），PDM 麦克风 |
|       接口      |           I2C/UART/SPI 接口 |                      I2C/UART/SPI 接口 |                              I2C/UART/SPI 接口 |                             I2C/UART/SPI 接口 |
|    PWM/模拟引脚    |                  11/11 |                              11/4 |                                      11/6 |                                     11/6 |
|    板载按钮    |                    不适用 |               复位/启动按钮  |                              复位按钮 |                             复位按钮 |
|      Onboard LEDs     |                    不适用 |       全彩RGB/三合一LED |                              三合一 LED/充电 LED LED |                             三合一 LED/充电 LED |
|    Battery Charge Chip   |                    不适用 |                               不适用 |                                   BQ25101 |                                  BQ25101 |
| 编程语言 |                Arduino/ CircuitPython | Arduino/ MicroPython/ CircuitPython |         Arduino/ MicroPython/ CircuitPython |        Arduino/ MicroPython/ CircuitPython |

## 硬件概述

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/front-pinout-4.jpg" alt="pir" width={700} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https:///files.seeedstudio.com/wiki/XIAO-BLE/pinout2.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https:///files.seeedstudio.com/wiki/XIAO-BLE/back-pinout-5.jpg" alt="pir" width={700} height="auto" /></p>

## 两个 Arduino 库

Seeed Studio XIAO nRF52840 将许多功能组装在一块小板上，有时可能无法发挥最佳性能。 因此，Seeed 发布了两个 Arduino 库， **以最大限度地发挥每个功能的功能**。因此:

- 如果您想应用**蓝牙功能** 和 "**低能耗功能**" ，建议使用该库`Seeed nRF52 Boards` 
- 如果您想在**嵌入式机器学习应用程序** 中使用它或应用 "**IMU 和 PDM 高级功能**"，建议使用该库。`Seeed nRF52 mbed-enabled Boards`
- 这两个库在基本用法方面都支持得很好，例如 **LED, Digital, Analog, Serial, I2C, SPI**.

这两个库支持的 Pin 定义可能略有不同，Seeed 会不断更新 wiki，直到它清晰为止。

## 开始

首先，我们将Seeed Studio XIAO nRF52840（Sense）连接到计算机，并从Arduino IDE上传一个简单的代码，以检查电路板是否运行良好。

### 硬件设置

您需要准备以下内容：

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) 或 [Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x 电脑
- 1 x USB Type-C 数据线

:::提示
某些 USB 电缆只能供电，无法传输数据。如果您没有 USB 数据线或不知道 USB 数据线是否可以传输数据，您可以查看[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::
通过 USB Type-C 数据线将 Seeed Studio XIAO nRF52840 （Sense） 连接到您的计算机。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png" alt="pir" width={500} height="auto" /></p>

### 软件设置

- **步骤 1.** 根据您的操作系统下载并安装最新版本的Arduino IDE

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width={700} height="auto" /></a></p>

- **步骤 2.** 启动Arduino应用程序

- **步骤 3.** 将 Seeed Studio XIAO nRF52840 （Sense） 开发板包添加到您的 Arduino IDE

导航到 **文件 > 首选项**, 然后使用以下网址填写 **"其他主板管理器 URL"** ：
    *<https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json>*

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={700} height="auto" /></p>

导航到 **工具 > 开发板 > 开发板管理器...**, 在搜索框中键入关键字 "**seeed nrf52**" ，选择所需的开发板的最新版本，然后安装它。您可以同时安装两者。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528401.png" alt="pir" width={700} height="auto" /></p>

- **步骤 4.** 选择您的主板和端口

**开发板**

安装开发板包后，导航到**工具>开发板**，然后选择所需的开发板，继续选择"**Seeed XIAO nRF52840 Sense**"。现在我们已经完成了 Arduino IDE 的 Seeed Studio XIAO nRF52840 （Sense） 的设置。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528402.png" alt="pir" width={700} height="auto" /></p>

**端口**

导航到**工具>端口**，然后选择连接的 Seeed Studio XIAO nRF52840 （Sense） 的串行端口名称。这可能是 COM3 或更高版本 (**COM1** 和**COM2** 通常保留用于硬件串行端口)。连接的 Seeed Studio XIAO nRF52840 （Sense） 的串口通常包含括号，用于**Seeed Studio XIAO nRF52840** 用于 **Seeed Studio XIAO nRF52840** 或 **Seeed Studio XIAO nRF52840 Sense** 用于**Seeed Studio XIAO nRF52840 Sense**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/port.png" alt="pir" width={550} height="auto" /></p>

- **步骤 5.** 导航到 **文件>示例>01.Basics > Blink** 打开 **Blink** 示例

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={550} height="auto" /></p>

- **步骤 6.** 单击 **上传** 按钮，将 Blink 示例代码上传到开发板

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={500} height="auto" /></p>

上传后，您将看到内置的红色 LED 闪烁，每次闪烁之间有 1 秒的延迟。这意味着连接成功，现在您可以使用 Seeed Studio XIAO nRF52840 （Sense） 探索更多项目！
## 使用内置的三合一 LED

Seeed Studio XIAO nRF52840 (Sense) 有 **板载 3 合 一 LED** ，用户可编程。现在您将学习如何使用 Arduino 逐个控制 RGB 颜色！

您首先必须了解，当由代码控制时，此 LED 的行为与往常不同。当我们发出**低电平信号**时，**LED 会亮**起，当我们发出 **高电平信号**，**LED 会熄灭**。 这是因为该 LED 由公共阳极控制，并且仅在低电平信号时亮起。

示例代码如下：

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   
}
```

在这里，即使使用 **高电平信号**LED 也会**熄灭**，你需要将 **高电平信号** 替换为 **低电平信号** 才能使LED**亮**起。

请参阅以下 LED 的引脚映射，并在代码中使用它们：

- 红色 LED = LED_BUILTIN 或 LED_RED
- 蓝色 LED = LED_BLUE
- 绿色 LED = LED_GREEN

## 功耗验证

Seeed Studio XIAO nRF52840 是低功耗的，这里我们提供一种验证方法。强烈建议在此处使用该库。 `Seeed nRF52 Boards` 

- **步骤 1.** 使用 **JLink** Downloader 刷新Seeed Studio XIAO nRF52840 (Sense)的[引导加载程序固件](https://github.com/0hotpotman0/BLE_52840_Core/blob/main/bootloader/Seeed_XIAO_nRF52840_Sense/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex)。

:::注意
如果您使用的是 Seeed Studio XIAO nRF52840 的出厂固件，或者从未对 Seeed Studio XIAO nRF52840 的固件进行过更改，则可以跳过此步骤。
:::

- **步骤 2.** 使用此处的库。`Seeed nRF52 Boards` 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528403.png" alt="pir" width={800} height="auto" /></p>

- **步骤 3.** 在此处上传 [deep_sleep 演示](https://github.com/0hotpotman0/BLE_52840_Core/blob/main/libraries/Bluefruit52Lib/examples/Hardware/deep_Sleep/deep_Sleep.ino) 并使用**Arduino**运行它。

- **步骤 4.** 将数字源表的电压调整为3.6V恒压

- **步骤 5.** 将红色测试笔触摸到 BAT+，将黑色测试笔触摸到 BAT-

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEpowerposition.png" alt="pir" width={500} height="auto" /></p>

- **步骤 6.** 输出显示电流约为**3 μA**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/BLEpowerresult.jpg" alt="pir" width={500} height="auto" /></p>

### 加速度计示例和低功耗

我们非常感谢我们的社区合作伙伴**[daCoder](https://forum.seeedstudio.com/u/daCoder)** 对 XIAO nRF52840 低功耗模式的贡献。

你可以通过以下方式找到更多关于他所从事的项目的内容 **[这里](https://forum.seeedstudio.com/t/xiao-sense-accelerometer-examples-and-low-power/270801)**.

## 电池充电电流

电池充电电流可选择为50mA或100mA，您可以将**Pin13**设置为高或低，以将其更改为50mA或100mA。低电流充电电流在设置为HIGH LEVEL的输入型号上，高电流充电电流在设置为LOW LEVEL的输出型号上。

**低充电电流**

```cpp
void setup(){
pinMode (P0_13, OUTPUT);
}
void loop() {
digitalWrite(P0_13, HIGH);
}
```

**高充电电流**

```cpp
void setup(){
pinMode (P0_13, OUTPUT);
}
void loop() {
digitalWrite(P0_13, LOW);
}
```

## 访问SWD引脚以调试和刷新引导加载程序

**所需硬件**

- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- Jlink

**所需软件**

需要从网站下载[Segger](https://www.segger.com/downloads/jlink/) 软件。

- **步骤 1.** 使用 Jlink 连接以下引脚:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD1.png" alt="pir" width={300} height="auto" /></p>

- **步骤 2.** 启动 J-Flash 并搜索 nRF52840，创建一个新项目:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD2.png" alt="pir" width={500} height="auto" /></p>

- **步骤 3.** 单击“目标”，然后选择“连接”。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SWD3.png" alt="pir" width={500} height="auto" /></p>

- **步骤 4.** 将 bin 或[hex 文件](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed_XIAO_nRF52840_Sense_bootloader-0.6.1_s140_7.3.0.hex)绘制到软件中。然后按该顺序按 F4 和 F5。重新刷写完成。
## 常见问题

### Q1: 我的 Arduino IDE 在上传代码到开发板时卡住了

您可以先尝试通过单击“重置按钮”一次来**重置**电路板。如果这不起作用，请快速单击它两次以进入**引导加载程序模式**。如果这也不起作用，请断开开发板与 PC 的连接，然后重新连接开发板。

### Q2: 我的开发板在 Arduino IDE上没有显示为串行设备

您可以先尝试通过单击“重置按钮”一次来**重置**电路板。如果这不起作用，请快速单击它两次以进入**引导加载程序模式**。

### Q3: 使用XIAO nRF52840 (Sense)进行电池充电时有哪些注意事项?

当P0.14 （D14）在3.3V的高电平下关闭ADC功能时，P0.31将处于3.6V的输入电压限值。存在烧毁 P0.31 引脚的风险。

目前针对此问题，我们建议用户在电池充电过程中不要关闭 P0.14 （D14） 的 ADC 功能或将 P0.14 （D14） 设置为高电平。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/14.png" alt="pir" width={800} height="auto" /></p>

## 资源

### Seeed Studio XIAO nRF52840

- **[PDF]** [nRF52840 数据表](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)

- **[PDF]** [Seeed Studio XIAO nRF52840 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)

- **[DXF]** [Seeed Studio XIAO nRF52840 尺寸（DXF）](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-DXF.zip)

- **[LBR]** [Seeed Studio XIAO nRF52840 Eagle 封装](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO nRF52840 引脚输出板](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-pinout_sheet.xlsx)

- **[ZIP]** [Seeed Studio XIAO nRF52840 认证文件](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Certification.zip)

### Seeed Studio XIAO nRF52840 Sense

- **[PDF]** [nRF52840 数据表](https://files.seeedstudio.com/wiki/XIAO-BLE/nRF52840_PS_v1.5.pdf)

- **[PDF]** [Seeed Studio XIAO nRF52840 Sense 原理图](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-v1.1.pdf)

- **[DXF]** [Seeed Studio XIAO nRF52840 Sense 尺寸（DXF）](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-DXF.zip)

- **[LBR]** [Seeed Studio XIAO nRF52840 Sense Eagle 封装](https://files.seeedstudio.com/wiki/XIAO-BLE/Seeed-Studio-XIAO-nRF52840-Sense-footprint-eagle.lbr)

- **[XLSX]** [Seeed Studio XIAO nRF52840 Sense 引脚分配片](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Senese-pinout_sheet.xlsx)

- **[ZIP]** [Seeed Studio XIAO nRF52840 Sense 认证文件](https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO-nRF52840-Sense-Certification.zip)

- **[STEP]** [Seeed Studio XIAO nRF52840 Sense 3D 模型](https://grabcad.com/library/seeed-studio-xiao-nrf52840-sense-1)

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。
<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
