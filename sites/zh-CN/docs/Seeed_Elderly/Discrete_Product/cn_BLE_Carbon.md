---
description: BLE Carbon
title: BLE Carbon
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/BLE_Carbon
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![输入图片描述](https://files.seeedstudio.com/wiki/BLE-Carbon/img/cover.png)

BLE Carbon 是由 96Boards 和 Seeed 联合开发的产品，旨在为物联网项目提供经济且紧凑的 BLE 解决方案。

96Boards 是由 Linaro 生产的，Linaro 是一个由包括 ARM、IBM、三星、ST-Ericsson 和 TI 在内的知名公司共同资助的非营利组织。它是第一个开放规范，定义了一个平台，用于从 ARM SoC 供应商的产品范围中交付兼容的低成本、小尺寸 32 位和 64 位 Cortex-A 板。通过标准化外设 I/O、显示和摄像头的扩展总线，它允许硬件生态系统开发一系列兼容的附加产品，这些产品将在平台生命周期内适用于任何 96Boards 产品。

BLE Carbon 是一种使用 96Boards 软件平台和 Seeed 硬件的开发板，同时采用 Nordic 蓝牙解决方案。凭借 96Boards 和 Seeed 广泛使用的开放规范和强大的制造背景，BLE Carbon 必定是物联网项目中最好的 BLE 解决方案之一。

Carbon 预装了 Zephyr。当未来的操作系统可用时，您可以参考下载页面获取更多操作系统和应用程序。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/BLE-Carbon-p-2710.html)

## 特性

### 微控制器特性
* LQFP64 封装的 STM32F401RET6
* ARM® 32 位 Cortex®-M4 CPU，带 FPU
* 最大 CPU 频率 84 MHz
* VDD 范围：1.7 V 至 3.6 V
* 512 KB Flash
* 96 KB SRAM
* GPIO（50 个），具有外部中断功能
* 16 通道 12 位 ADC
* RTC
* 高级控制定时器
* 通用定时器（7 个）
* 看门狗定时器（2 个）
* USART/UART（4 个）
* I2C（3 个）
* SPI（3 个）
* SDIO
* USB 2.0 OTG FS

### 板载特性
* STM32F401 微控制器，512kB Flash，96kB RAM
* 带保险保护的 USB 电源
* 6 个 LED
    * USR1、USR2、BT、PWR、RX、TX
* 两个按钮
    * USR 和 RESET
* SWD 调试连接器
* 板载芯片天线
* 3.3V 工作电压
* 2x15pin 2.54mm 间距低速连接器
* 完全兼容 96Boards IoT 标准

## 规格

| 参数 | 值 |
|------------|------|
| 芯片组 | STM32F401 |
| 蓝牙 | nRF51822 |
| 时钟速度 | 最大 CPU 频率 84MHz |
| Flash | 512KB |
| SRAM | 96KB |
| 数字输出电压 | 3.3V |
| 模拟引脚 | 6 |
| 模拟输入电压 | 0~3.3V |
| 尺寸 | 60x30mm |

## 硬件概览

![输入图片描述](https://files.seeedstudio.com/wiki/BLE-Carbon/img/hw.png)

1. **OTG** - 可用作 USB OTG/HOST 和 USB 设备，也可用于 USB DFU。

2. **LED 指示灯**

* *USR1* - 用户控制的 LED，连接到 PD2
* *USR2* - 用户控制的 LED，连接到 PA15
* *BT* - 蓝牙指示灯，连接到 PB5。当连接到设备时，该 LED 会亮起。
* *PWR* - 电源开启时亮起。
* *RX* - FT230X 的 RX 指示灯
* *TX* - FT230X 的 TX 指示灯

3. **UART** - 用于调试或固件更新，连接到 USART1。

4. **复位按钮** - 按下以重置系统。

5. **BOOT0 按钮** - 用户按钮或选择启动模式，连接到 PC12，默认低电平。

6. **用于调试的 UART 和 SWD（STM32F401 和 nRF51822 均支持）**

7. **蓝牙芯片天线**

8. **引脚** - 详细信息请参考引脚图。

9. **IC1** - FT230X

A. **IC2** - STM32F401

B. **IC3** - nRF51822

## 引脚图

[![点击查看大图](https://files.seeedstudio.com/wiki/BLE-Carbon/img/pinout.png)](https://files.seeedstudio.com/wiki/BLE-Carbon/img/pinout.png)

:::note
    点击查看大图。
:::

## nRF51822 和 STM32F401 之间的连接

如果您希望在无法移植到 nRF5 的应用中使用 BLE SoftDevice，例如因为它们使用了特定的外设或需要更多资源（如 RAM、闪存或 CPU 速度），您应该考虑使用序列化。

### 硬件连接
硬件连接如下：

| STM32F401 | nRF51822 | 功能       |
|-----------|----------|------------|
| PA4       | P0.25    | SPI_CSN    |
| PB1       | P0.28    | SPI_REQ    |
| PB0       | P0.29    | SPI_RDY    |
| PA7       | P0.00    | SPI_MOSI   |
| PA6       | P0.30    | SPI_MISO   |
| PA5       | P0.07    | SPI_CLK    |
| PB2       | SWDIO/NRESET | RESET |

### 序列化软件设置
通过以下步骤准备连接板：

1. 将板子连接到电脑，并确保 RESET 线已断开。
2. 在连接板上编程 SoftDevice。请参阅编程 SoftDevices 的说明。
3. 在 Keil 中，打开您想要使用的物理传输层的 Connectivity 示例：`\examples\ble_central_and_peripheral\ble_connectivity\board\ser_s13x_spi`。
4. 编译应用程序并将生成的 `.hex` 文件下载到连接板。

有关更多详细信息，请参考 [运行序列化应用程序](http://infocenter.nordicsemi.com/index.jsp?topic=/com.nordic.infocenter.s130.api.v2.0.0/index.html)。

## 如何升级固件

### DfuSe 演示步骤
#### 如何下载 DFU 文件
1. 按下 BOOT0 按钮并将 OTG 连接到您的电脑。
2. 运行 **DfuSe 演示** 应用程序（开始 -> 所有程序 -> STMicroelectronics -> DfuSe Demonstration）。
3. 点击 **Choose** 按钮（下图中的项目 1）选择一个 DFU 文件。显示的信息（如 VID、PID、版本和目标编号）是从 DFU 文件中读取的。
4. 勾选 **Optimize upgrade duration** 复选框以在上传过程中忽略 FF 块。
5. 如果您希望在下载数据后启动验证过程，请勾选 **Verify after download** 复选框。
6. 点击 **Upgrade** 按钮（下图中的项目 2）开始将文件内容升级到内存。
7. 点击 **Verify** 按钮（下图中的项目 3）验证数据是否成功下载。

![点击查看图片](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_1.png)

#### 如何从 S19/Hex/Bin 文件生成 DFU 文件
1. 运行 **DFU 文件管理器** 应用程序（开始 -> 所有程序 -> STMicroelectronics -> DFU File Manager）。
2. 在 **Want to do** 对话框中选择 **I want to GENERATE a DFU file from S19, HEX or BIN files** 项目，然后点击 **OK**。
3. 要从 S19 或 Hex 文件创建镜像，点击 **S19 or Hex** 按钮并选择您的文件，将为每个添加的文件创建一个 DFU 镜像。
4. 要创建 DFU 文件，点击 **Generate**。

:::note
     有关更多详细信息，请阅读 ST 的用户手册 ([UM0412](http://www.st.com/content/ccc/resource/technical/document/user_manual/3f/61/72/ff/c5/5a/4a/7b/CD00155676.pdf/files/CD00155676.pdf/jcr:content/translations/en.CD00155676.pdf))。
:::

### 6.2 通过 UART 下载 hex 文件

1. 按下 BOOT0 按钮并将 UART 连接到您的电脑。
2. 运行 **Demonstrator GUI** 应用程序（开始 -> 所有程序 -> STMicroelectronics -> Demonstrator GUI）。
3. 按以下步骤下载固件。

![步骤 1](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_1.png)

![步骤 2](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_2.png)

![步骤 3](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_3.png)

![步骤 4](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_4.png)

![步骤 5](https://files.seeedstudio.com/wiki/BLE-Carbon/img/6_2_5.png)

## 在线原理图查看器
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE-Carbon/res/eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源

* [Eagle格式原理图](https://files.seeedstudio.com/wiki/BLE-Carbon/res/eagle.zip)
* [PDF格式原理图](https://files.seeedstudio.com/wiki/BLE-Carbon/res/BLE%20Carbon%20v1.0_SCH.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>