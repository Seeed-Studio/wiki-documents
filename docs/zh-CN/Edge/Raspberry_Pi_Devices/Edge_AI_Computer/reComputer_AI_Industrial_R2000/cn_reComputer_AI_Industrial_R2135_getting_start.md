---
description: reComputer AI R2000 是一款基于 Raspberry Pi 5 的强大边缘 AI 计算机。配备四核 Arm Cortex-A76 处理器、8GB RAM、支持 M.2 SSD，以及 Hailo-8 AI 加速模块，提供高达 26 TOPS 的性能，实现实时、低延迟和高效的 AI 推理。它是广泛 AI 应用的完美选择，包括 AI 驱动的视频分析、机器视觉和智能边缘计算。
title: reComputer AI 工业 R2135 系列入门指南
keywords:
- Raspberry pi
- 边缘 AI 计算机
- reComputer R2000
image: https://files.seeedstudio.com/wiki/AI-box-cm5/r2135.webp
slug: /cn/recomputer_ai_industrial_r2135_getting_start
last_update:
  date: 05/06/2025
  author: Jiahao Li
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial.jpeg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

**reComputer AI 工业 R2135** 由 **Raspberry Pi CM5** 和 **Hailo AI 加速器**驱动，这款紧凑型 **边缘 AI 系统**提供 **26 TOPS** 的性能，用于实时 **多通道视觉处理**。配备 **四核 Cortex-A76 CPU**、高达 **16GB RAM**、**64GB eMMC** 和 **多功能接口**，确保无缝集成到 **工业 AI 应用**中。

专为 **全天候可靠性**设计，支持 **宽电压输入 (9-36V)**、**硬件看门狗**和 **强大的散热系统**，可在 **-20°C 至 65°C** 环境中稳定运行。非常适合 **智能工厂**、**监控**和 **AIoT**，这款解决方案将 **强大的 AI 计算能力**带到 **边缘**。

## 特性

- **工业级可靠性**：铝制外壳，支持宽温范围 -20°C 至 65°C，RTC，硬件看门狗，确保稳定的全天候运行。

- **强大性能**：由 Raspberry Pi CM5 驱动，配备四核 Cortex-A76 CPU，高达 16GB RAM，64GB eMMC。

- **高效 AI 计算**：由 Hailo-8 AI 加速器提供高达 26 TOPS 的性能，用于多通道 AI 视觉处理。

- **广泛的连接性**：2 个 HDMI2.0、1 个千兆以太网、2 个 USB 3.2、1 个 USB-C、双 M.2 插槽，以及 Mini-PCIe 用于 4G/LoRa 扩展。

- **多样化无线选项**：内置 Wi-Fi5、蓝牙 5.0，以及可选的 4G LTE/LoRaWAN<sup>@</sup>。

- **灵活的存储选项**：PCIe3.0 双 M.2 插槽支持 AI 加速器和 SSD 存储。

## 规格

| **类别**                 | **参数**                                                                         |
|--------------------------|---------------------------------------------------------------------------------|
| **硬件规格**             |                                                                                 |
| **CPU**                  | Raspberry Pi Compute Module 5，2.4GHz 四核 64 位 Arm Cortex-A76                 |
| **GPU**                  | Raspberry Pi Compute Module 5，VideoCore VII                                   |
| **AI 处理器**            | Hailo-8 M.2 加速棒，26 TOPS（每秒万亿次操作）                                    |
| **RAM**                  | 8GB SDRAM                                                                      |
| **eMMC**                 | 32GB                                                                            |
| **操作系统**             | Raspbian, Debian                                                               |
| **系统规格**             |                                                                                 |
| **电源输入**             | DC 9V~36V，2 针端子块                                                           |
| **视频解码器**           | 4Kp60 HEVC 解码器                                                              |
| **接口**                 |                                                                                 |
| **以太网**               | 1x 10/100/1000 Mbps，RJ45                                                      |
| **USB**                  | 2x USB 3.2 端口（USB-A）；1x USB 2.0 端口（用于调试/更新操作系统的 USB-C）       |
| **显示**                 | 2x 标准 HDMI 端口，HDMI 2.0                                                   |
| **M.2 插槽**             | 1x USB 3.0 到 M.2（M-key 2280）；1x PCIe 3.0 到 M.2（M-key 2242）               |
| **Mini-PCIe**            | 1x Mini-PCIe 用于 4G/LoRaWAN 模块                                              |
| **SIM 卡**               | 1x 标准 SIM 卡插槽                                                             |
| **LED**                  | 3x LED：电源 / ACT / 4G                                                        |
| **按钮 / 开关**          | 1x 重置按钮；1x 启动开关                                                       |
| **无线通信**             |                                                                                 |
| **Wi-Fi 2.4/5.0 GHz**    | 芯片内置 Wi-Fi 5                                                               |
| **BLE 5.0**              | 芯片内置 BLE 5.0                                                               |
| **4G 蜂窝网络**          | 4G LTE（可选）                                                                 |
| **LoRa®**                | USB LoRa® / SPI LoRa®（可选）                                              |
| **环境条件**             |                                                                                 |
| **防护等级**             | IP40                                                                            |
| **工作温度**             | -20°C 至 65°C                                                                  |
| **工作湿度**             | 10% 至 95% RH                                                                  |
| **天线**                 | 3x 天线孔                                                                      |
| **其他**                 |                                                                                 |
| **看门狗**               | 硬件看门狗                                                                     |
| **RTC**                  | 高精度 RTC                                                                     |
| **安全性**               | 加密芯片 TPM2.0 / ATECC608A（可选）                                            |
| **散热**                 | 散热片配风扇                                                                  |
| **保修**                 | 2 年                                                                           |
| **生产生命周期**         | 至 2036 年 12 月                                                               |
| **机械规格**             |                                                                                 |
| **尺寸 (宽 x 高 x 深)**  | 130mm × 93mm × 55.5mm                                                          |
| **外壳**                 | 铝合金外壳，配 PC 侧板                                                        |
| **安装方式**             | DIN 导轨 / 壁挂式                                                             |
| **重量（净重）**         | 688g                                                                           |
| **声明**                 | 标记为“可选”的选项需要额外购买（请参考配件列表）。                             |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_industrial_dimension.jpeg" style={{width:800, height:'auto'}}/></div>


## Hailo 介绍

### 硬件介绍

[Hailo](https://hailo.ai/) 提供尖端的 AI 处理器，专为边缘设备上的高性能深度学习应用量身定制。该公司的解决方案专注于推动边缘设备上的生成式 AI 的新时代，同时支持感知和视频增强功能，这些都由先进的 AI 加速器和视觉处理器提供支持。而 reComputer_R2000 配备了 Hailo-8 NPU 加速器，提供 26 TOPS 的 AI 性能，能够使用 YOLOv8s 实现超过 200 FPS 的性能。

### 软件介绍

![](https://seeed-projects.github.io/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/assets/images/architecture-2bfc6ed440e1add56388738e87558050.png)

Hailo AI 软件套件提供强大的工具，可以在硬件加速器上高效运行 AI 模型。它旨在与现有的深度学习框架无缝集成，为开发者提供流畅的工作流程。该过程包括在模型构建环境中从 ONNX 文件生成 HEF（Hailo 可执行二进制文件）。生成后，HEF 文件被传输到推理机器（运行时环境），并通过 HailoRT API 执行推理。提供的脚本可以在模型构建环境中将 ONNX 文件转换为 HEF 文件。

> **注意：**
> **如果您想了解更多关于使用 Hailo NPU 的示例，请点击此 [链接](https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero)。**

## 硬件概览
### 接口概览

![image1](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-recomputer.png)

要查询 GPIO 映射和偏移，请使用以下命令：

```
cat /sys/kernel/debug/gpio
```

<details>
<summary>GPIO 信息</summary>

```bash
gpiochip11: GPIOs 512-526, parent: platform/107d517c00.gpio, gpio-brcmstb@107d517c00:
 gpio-512 (RP1_SDA             )
 gpio-513 (RP1_SCL             )
 gpio-514 (RP1_RUN             |RP1 RUN pin         ) out hi 
 gpio-515 (SD_IOVDD_SEL        )
 gpio-516 (SD_PWR_ON           |sd-vcc-reg          ) out hi 
 gpio-517 (ANT1                |ant1                ) out hi 
 gpio-518 (ANT2                |ant2                ) out lo 
 gpio-519 (-                   )
 gpio-520 (2712_WAKE           )
 gpio-521 (2712_STAT_LED       |ACT                 ) out hi ACTIVE LOW
 gpio-522 (-                   )
 gpio-523 (-                   )
 gpio-524 (PMIC_INT            )
 gpio-525 (UART_TX_FS          )
 gpio-526 (UART_RX_FS          )

gpiochip12: GPIOs 527-532, parent: platform/107d517c00.gpio, gpio-brcmstb@107d517c20:
 gpio-527 (HDMI0_SCL           )
 gpio-528 (HDMI0_SDA           )
 gpio-529 (HDMI1_SCL           )
 gpio-530 (HDMI1_SDA           )
 gpio-531 (PMIC_SCL            )
 gpio-532 (PMIC_SDA            )

gpiochip10: GPIOs 533-564, parent: platform/107d508500.gpio, gpio-brcmstb@107d508500:
 gpio-533 (-                   )
 gpio-534 (2712_BOOT_CS_N      |spi10 CS0           ) out hi ACTIVE LOW
 gpio-535 (2712_BOOT_MISO      )
 gpio-536 (2712_BOOT_MOSI      )
 gpio-537 (2712_BOOT_SCLK      )
 gpio-538 (-                   )
 gpio-539 (-                   )
 gpio-540 (-                   )
 gpio-541 (-                   )
 gpio-542 (-                   )
 gpio-543 (-                   )
 gpio-544 (-                   )
 gpio-545 (-                   )
 gpio-546 (-                   )
 gpio-547 (-                   )
 gpio-548 (-                   )
 gpio-549 (-                   )
 gpio-550 (-                   )
 gpio-551 (-                   )
 gpio-552 (-                   )
 gpio-553 (PWR_GPIO            |pwr_button          ) in  hi ACTIVE LOW
 gpio-554 (2712_G21_FS         )
 gpio-555 (-                   )
 gpio-556 (-                   )
 gpio-557 (BT_RTS              )
 gpio-558 (BT_CTS              )
 gpio-559 (BT_TXD              )
 gpio-560 (BT_RXD              )
 gpio-561 (WL_ON               |wl-on-reg           ) out hi 
 gpio-562 (BT_ON               |shutdown            ) out hi 
 gpio-563 (WIFI_SDIO_CLK       )
 gpio-564 (WIFI_SDIO_CMD       )

gpiochip13: GPIOs 565-568, parent: platform/107d508500.gpio, gpio-brcmstb@107d508520:
 gpio-565 (WIFI_SDIO_D0        )
 gpio-566 (WIFI_SDIO_D1        )
 gpio-567 (WIFI_SDIO_D2        )
 gpio-568 (WIFI_SDIO_D3        )

gpiochip0: GPIOs 569-622, parent: platform/1f000d0000.gpio, pinctrl-rp1:
 gpio-569 (ID_SDA              )
 gpio-570 (ID_SCL              )
 gpio-571 (GPIO2               )
 gpio-572 (GPIO3               )
 gpio-573 (GPIO4               )
 gpio-574 (GPIO5               )
 gpio-575 (GPIO6               )
 gpio-576 (GPIO7               )
 gpio-577 (GPIO8               |spi0 CS0            ) out hi ACTIVE LOW
 gpio-578 (GPIO9               )
 gpio-579 (GPIO10              )
 gpio-580 (GPIO11              )
 gpio-581 (GPIO12              )
 gpio-582 (GPIO13              )
 gpio-583 (GPIO14              )
 gpio-584 (GPIO15              )
 gpio-585 (GPIO16              )
 gpio-586 (GPIO17              )
 gpio-587 (GPIO18              )
 gpio-588 (GPIO19              )
 gpio-589 (GPIO20              )
 gpio-590 (GPIO21              )
 gpio-591 (GPIO22              )
 gpio-592 (GPIO23              )
 gpio-593 (GPIO24              )
 gpio-594 (GPIO25              )
 gpio-595 (GPIO26              )
 gpio-596 (GPIO27              )
 gpio-597 (PCIE_PWR_EN         )
 gpio-598 (FAN_TACH            )
 gpio-599 (HOST_SDA            )
 gpio-600 (HOST_SCL            )
 gpio-601 (ETH_RST_N           |phy-reset           ) out hi ACTIVE LOW
 gpio-602 (PCIE_DET_WAKE       )
 gpio-603 (CD0_IO0_MICCLK      |cam0_reg            ) out lo 
 gpio-604 (CD0_IO0_MICDAT0     )
 gpio-605 (RP1_PCIE_CLKREQ_N   )
 gpio-606 (ETH_IRQ_N           )
 gpio-607 (SDA0                )
 gpio-608 (SCL0                )
 gpio-609 (-                   )
 gpio-610 (-                   )
 gpio-611 (USB_VBUS_EN         )
 gpio-612 (-                   )
 gpio-613 (RP1_STAT_LED        |PWR                 ) out hi ACTIVE LOW
 gpio-614 (FAN_PWM             )
 gpio-615 (-                   |micclk1_hog         ) out hi 
 gpio-616 (2712_WAKE           )
 gpio-617 (-                   |micdat1_hog         ) out hi 
 gpio-618 (-                   )
 gpio-619 (-                   )
 gpio-620 (-                   )
 gpio-621 (-                   )
 gpio-622 (-                   )
```
</details> 

### 主板概览

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_Mainboard.jpeg" style={{width:800, height:'auto'}}/></div>

### 电源图示
![image1](https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_power_diagram.png)

reComputer AI Industrial R2135 支持宽范围的直流输入电压 DC 9V–36V，并在内部使用多级 DCDC 转换器生成 5V、3.3V、1.2V 和 1.0V 电源轨。这些电压为核心处理器、USB端口、HDMI、M.2扩展、音频、RTC及其他外围模块提供稳定的电力，确保在各种应用场景下可靠运行。
##### 2针电源端子

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_Two_Pin_Terminal.jpg" style={{width:150, height:'auto'}}/></div>

reComputer AI Industrial R2135 的供电电压为 9~36V，通过 2 针电源端子块连接器连接电源。为了接地 reComputer AI Industrial R2135，可以将接地线固定在电源端子左上角的螺丝上。

#### 功耗
请参考下表中 Seeed Studio 实验室测试的 reComputer AI Industrial R2135 功耗数据。请注意，此数据仅供参考，测试方法和环境可能会导致结果有所不同。

| **状态**        | **电压** | **电流** | **功耗** |**描述** |
|----------------------|----------------------|----------------------|----------------------|----------------------|
|**关机**|12V   |   1.1mA|   0.013W|   在关机和断电状态下的静态功耗测试。|
|**空闲**|12V|208mA|2.42W|测试在未运行任何测试程序时为 reComputer AI Industrial R2135 设备提供 24V 电源时的输入电流。|
|**满载**|12V|2.08A|24.2W|使用 "stress -c 4" 命令配置 CPU 以满载运行。USB 配备 1A 负载。|

#### 开机与关机

reComputer AI Industrial R2135 默认不配备电源按钮，系统在连接电源后会自动启动。关机时，请选择操作系统中的关机选项，并等待系统完全关机后再切断电源。要重新启动系统，只需重新连接电源即可。

### 功能框图
![image1](https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_block_diagram.png)

## 接口

### 接口描述

| 类型           | 描述                                       |
|----------------|---------------------------------------------------|
| **以太网**   | 1x 10/100/1000 Mbps（支持 POE*）              |
| **USB**        | 2x USB-A 3.2 主机；1x USB-C 2.0（用于刷写操作系统） |
| **HDMI**       | 2x HDMI 2.0                                      |
| **音频**      | 1x 3.5mm 音频输出/输入                      |
| **SIM 卡槽** | 1x SIM 卡槽，支持标准 SIM 卡    |
| **M.2 插槽**   | 2x M.2 插槽，支持 M.2 NVMe SSD 和 AI 加速 |
| **Mini-PCIe**  | 1x Mini PCIe 插槽                                |
| **LED**        | 3x LED 指示灯                                |
| **复位按钮** | 1x 复位按钮                                |
| **启动开关**  | 1x 启动开关                                 |

### LED 指示灯状态 
reComputer AI Industrial R2135 配备了 3 个 LED 指示灯，用于显示设备的运行状态。请参考下表了解每个 LED 的具体功能和状态：

| 名称  | 颜色            | 状态 | 描述                                                                                                                                              |
|-------|-----------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **PWR**  | 绿色           | 开启     | 设备已连接电源。                                                                                                                  |
|        |                 | 关闭    | 设备未连接电源。                                                                                                                    |
| **ACT**  | 橙色          |        | 在 Linux 系统下，此引脚会闪烁以表示 eMMC 访问。如果在启动过程中发生错误，此 LED 会闪烁错误模式（参见 Raspberry Pi 文档）。 |
| **USER** | 绿色/红色/蓝色  |        | 需由用户定义。                                                                                                                              |
| **LTE**  | 绿色           | 开启     | 拨号成功且连接正常。                                                                                                  |
|        |                 | 关闭    | LTE 信号未连接或设备未通电。                                                                                              |

### ACT 状态表

| 长闪 | 短闪 | 状态                               |
|--------------|---------------|-------------------------------------|
| 0            | 3             | 启动失败的通用错误              |
| 0            | 4             | 未找到 start*.elf                 |
| 0            | 7             | 未找到内核镜像               |
| 0            | 8             | SDRAM 故障                        |
| 0            | 9             | SDRAM 不足                   |
| 0            | 10            | 处于 HALT 状态                        |
| 2            | 1             | 分区不是 FAT                    |
| 2            | 2             | 从分区读取失败        |
| 2            | 3             | 扩展分区不是 FAT           |
| 2            | 4             | 文件签名/哈希不匹配 - Pi 4  |
| 4            | 4             | 不支持的板类型               |
| 4            | 5             | 致命固件错误                 |
| 4            | 6             | 电源故障类型 A                 |
| 4            | 7             | 电源故障类型 B                 |

如果 ACT LED 以规律的四次闪烁模式闪烁，则表示无法找到启动代码（start.elf）。  
如果 ACT LED 以不规则模式闪烁，则表示启动已经开始。  
如果 ACT LED 不闪烁，则可能是 EEPROM 代码已损坏，请在没有任何连接的情况下重试以确保。有关更多详细信息，请查看 Raspberry Pi 论坛：  
**STICKY: Is your Pi not booting? (The Boot Problems Sticky) - Raspberry Pi Forums**。  
有关更多详细信息，请查看 [Raspberry Pi 论坛](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151)。

为了控制用户 LED，我们推荐使用 sysfs，这是 Linux 内核提供的伪文件系统，用于暴露各种内核子系统、硬件设备及其相关驱动程序的信息。在 ReComputer R2000 上，我们将用户 LED 接口抽象为三个设备文件（led-red、led-blue 和 led-green），用户可以通过与这些文件交互来简单地控制 LED 灯。示例如下：

1. 要打开红色 LED，请在终端中输入以下命令：

```
echo 1 | sudo tee /sys/class/leds/led-red/brightness
```

2. 要关闭红色 LED，请在终端中输入以下命令：

```
echo 0 | sudo tee /sys/class/leds/led-red/brightness
```

3. 您可以同时打开红色和绿色 LED，请在终端中输入以下命令：

```
echo 1 | sudo tee /sys/class/leds/led-red/brightness
echo 1 | sudo tee /sys/class/leds/led-green/brightness
```

### 启动开关

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" /></div>

ReComputer AI Industrial R2135 的启动开关连接到 CM5 的 nRPI_BOOT 引脚。此开关为用户提供了在 eMMC 和 USB 之间选择启动源的选项。在正常模式下，开关应设置为远离带有“BOOT”标签的一侧，使系统从 eMMC 启动。相反，当用户需要刷新系统镜像时，应将开关设置为靠近“BOOT”标签的一侧，使系统从 Type-C USB 接口启动。

| 开关位置 | 模式         | 描述             | nRPI-BOOT |
|----------|--------------|------------------|-----------|
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | 正常模式  | 从 eMMC 启动     | 低电平     |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | 刷新模式  | 从 USB 启动      | 高电平     |

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

ReComputer R2000 配备了一个 USB Type-C 接口和两个 USB Type-A 接口。请参考下表了解它们的功能和描述。

| **类型**   | **数量**     | **协议**        | **功能**       | **描述**                                                    |
|------------|--------------|-----------------|----------------|-------------------------------------------------------------|
| **Type-C** | *1           | USB2.0          | USB-设备       | 用于串口调试、烧录镜像等。                                  |
| **Type-A** | *2           | USB2.0          | USB-主机       | 连接不同的 USB 设备，例如 U 盘、<br />USB 键盘或鼠标。       |

通过运行 **lsusb** 命令检查是否检测到 USB 集线器。此命令列出所有连接的 USB 设备，包括集线器。

```shell
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

运行此命令应显示连接到系统的 USB 设备的信息，包括任何存在的 USB 集线器。

如果 USB 集线器正常工作，您应该在 **lsusb** 命令的输出中看到其详细信息。如果未列出，则可能是集线器或其与系统连接存在问题。在这种情况下，您可能需要对 USB 集线器或其连接进行故障排除。

### SIM 卡槽（内部）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_SIM.jpeg" style={{width:800, height:'auto'}}/></div>

ReComputer AI Industrial R2135 系列设备包括一个内部标准 SIM 卡槽，用于安装标准 SIM 卡以获取 4G 信号。  
标准 SIM 卡、Micro SIM 卡和 Nano SIM 卡的尺寸差异如下：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/sim_card.jpg" /></div>

> **注意**  
> **ReComputer AI Industrial R2135** 的标准版本不附带 4G 模块。  
> 如果需要 4G 功能，则必须单独购买额外的 4G 模块。  
> 有关更多信息，请参考章节 **"2.3.2 4G 模块"**。

### M.2 插槽

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_M2_1.jpeg" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_M22.jpeg" style={{width:800, height:'auto'}}/></div>

ReComputer AI Industrial R2135 配备了两个 M.2 Key-M 插槽（NVMe1 和 NVMe2），用于 NVMe M.2 2280 SSD 和 AI 加速，支持高速存储扩展，使用户能够提升系统的性能和容量。

● NVMe1（底部插槽）：支持 M.2 2280 尺寸；

● NVMe2（顶部插槽）：预装 Hailo-8 AI 加速器；

● 仅支持基于 PCIe 的 NVMe SSD。不支持 SATA SSD。

> **注意**  
> SSD 卡有两种主要用途：  
> 1. **大容量存储** – 纯粹用于存储大量数据。  
> 2. **带镜像的启动盘** – 用于存储数据并从 SSD 上存储的镜像启动系统。  
>  
> 并非市场上的所有 SSD 卡都支持启动功能。  
> 如果您计划将 SSD 用作启动盘并不确定兼容性，我们推荐 **1TB SSD (SKU 112990267)**。此型号已测试并验证支持启动功能，可帮助避免兼容性问题并减少试错成本。

### Mini-PCIe 插槽

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_minipcie_1.jpeg" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_minipcie_2.jpeg" style={{width:800, height:'auto'}}/></div>

reComputer AI Industrial R2135 配备了一个 Mini PCIe 插槽，主要用于 4G LTE 调制解调器模块（例如 Quectel EC20/EC25）。

● 支持：标准 Mini PCIe 模块

● 信号接口：USB 2.0、UART、SIM 卡、RESET 等

● SIM 卡连接到板载 SIM 卡插槽

● 控制信号：支持 W_DISABLE、PERST、WAKE

● 集成 ESD 保护以增强可靠性

| 插槽        | 支持的协议             |
|-------------|------------------------|
| Mini-PCIe   | 4G LTE                 |
|             | USB LoRa®             |
|             | USB Zigbee        |

### 重置孔

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_reset.jpeg" style={{width:800, height:'auto'}}/></div>

reComputer AI Industrial R2135 的重置孔中有一个迷你按钮开关。通过使用细小物体按下此按钮，可以重置 CM4。当此引脚为高电平时，表示 CM4 已启动。将此引脚驱动为低电平可重置模块。

### 以太网 RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_ETH0.png" /></div>

| 名称  | 类型                         | 速度               | PoE           |
|-------|------------------------------|--------------------|---------------|
| ETH0  | CM5 原生千兆以太网          | 10/100/1000 Mbit/s | 不支持        |

reComputer AI Industrial R2135 配备了标准 RJ45 千兆以太网端口（GbE），使用 MagJack 集成变压器以提高信号质量和 EMI 保护。

● 接口标准：IEEE 802.3 10/100/1000Mbps；

● 使用具有 4 个差分对（TX/RX）的千兆 PHY；

● 支持自动协商和全双工通信；

● 包括共模扼流圈、ESD 保护和隔离电容；

● 板载绿色/黄色 LED 指示链接和活动状态。

### HDMI

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_HDMI.jpeg" /></div>

reComputer AI Industrial R2135 配备了两个标准 HDMI Type-A 端口，标记为 HDMI0 和 HDMI1，支持高分辨率视频输出。系统能够提供高达 4K 60Hz 的显示分辨率，并支持同时双 HDMI 输出，非常适合多显示器应用。

### RTC

reComputer AI Industrial R2135 配备了板载 RTC（PCF8563T），可在断电期间保持时间，确保即使在断电情况下也能保持计时功能。

您可以使用以下命令测试 RTC 部分：
```bash 
# 1.禁用自动时间同步：
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
# 设置时间：
sudo hwclock --set --date "2024-11-12 12:00:00"
# 将 RTC 时间同步到系统：
sudo hwclock --hctosys
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/RTC1.png" /></div>

然后您可以关闭 R2000 几分钟，再次打开电源，并使用以下命令重新检查时钟：

```bash
# 4.检查 RTC 时间：
sudo hwclock -r
```
结果显示，即使系统断电，RTC 模块仍然正常工作。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/RTC2.png" /></div>

### 看门狗

reComputer AI Industrial R2135 配备了独立的硬件看门狗电路，可在系统异常崩溃时自动重启系统。看门狗电路通过 RTC 实现，并允许灵活设置喂狗时间，范围为 1 到 255 秒。

您可以使用以下命令测试看门狗部分：

```bash
# 1.安装看门狗软件：
sudo apt install watchdog
# 2.编辑看门狗配置文件：
sudo nano /etc/watchdog.conf
```
然后按如下方式修改配置：

<details>
<summary>watchdog.conf</summary>

```bash
watchdog-device= /dev/watchdog
# 取消注释并编辑此行以设置硬件超时值，默认为一分钟。
watchdog-timeout	= 120
# 如果您的看门狗在第一个超时间间隔到期时自行触发，请尝试取消注释以下行并将值更改为 'yes'。
#watchdog-refresh-use-settimeout	= auto
# 如果您有一个有问题的看门狗设备（例如某些 IPMI 实现），请尝试取消注释此行并将其设置为 'yes'。
#watchdog-refresh-ignore-errors	= no
# ====================== 其他系统设置 ========================
#
# 测试之间的间隔。应比硬件超时值短几秒。
interval= 15
max-load-1= 24
#max-load-5= 18
#max-load-15= 12
realtime= yes
priority= 1
```
</details> 

```bash
# 3.确保看门狗服务正在运行：
sudo systemctl start watchdog
# 此命令触发内核崩溃，应导致看门狗重启系统。
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```
如下图所示，输入命令后 SSH 连接丢失，表明看门狗已生效并重启了 reComputer AI Industrial R2135。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/watchdog.png" /></div>

### M.2 AI 加速

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_industrial_accelerator.jpeg" style={{width:800, height:'auto'}}/></div>

reComputer AI Industrial R2135 配备了 Hailo-8 AI 加速模块，预装在 NVMe2 M.2 插槽中，提供 26 TOPS 的计算能力，用于实时多通道 AI 视觉处理。

您可以使用以下命令测试看门狗部分：

> 注意：
> 要测试此功能，需要将屏幕连接到 reComputer AI Industrial R2135。

```bash
# 测试 Hailo 硬件及其配套软件是否已成功安装
hailortcli fw-control identify
```
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/hailo1.png" /></div>

```bash
# 验证预安装的演示是否正常运行
cd hailo-rpi5-examples
# 安装必要资源
./install.sh
# 激活 Python 环境
source setup_env.sh
# 运行目标检测
python basic_pipelines/detection_simple.py
```
结果如下所示：

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/hailo2.png" /></div>


## 可选接口和模块

reComputer AI Industrial R2135 支持丰富的扩展模块和配件，适用于各种场景和需求。如果您有兴趣定制 reComputer AI Industrial R2135，请联系 odm@seeed.cc 了解更多信息。
以下是配件和可选模块列表：

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>备注</th>
        <th>项目</th>
        <th>产品名称</th>
        <th>SKU</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="3">这三个模块必须一起使用以实现 LoRaWAN® 功能</td>
        <td>LoRa® 模块</td>
        <td>区域可选 LoRaWAN 网关模块 (USB) - US915</td>
        <td>114992629</td>
      </tr>
      <tr>
        <td></td>
        <td>区域可选 LoRaWAN 网关模块 (USB) - US915</td>
        <td>114992991</td>
      </tr>
      <tr>
        <td></td>
        <td>区域可选 LoRaWAN 网关模块 (USB) - EU868</td>
        <td>114992628</td>
      </tr>
      <tr>
        <td>此配件是 WiFi 功能所需</td>
        <td>Wi-Fi/BLE 天线</td>
        <td>Raspberry Pi Compute Module 4 天线套件</td>
        <td>114992364</td>
      </tr>
      <tr>
        <td rowspan="7">4G 天线与 4G 模块用于 4G 功能，GPS 天线与 4G 模块用于 GPS 功能</td>
        <td>4G 模块</td>
        <td>LTE Cat 4 EC25-AFXGA-mini-PCIe 模块 - 北美地区</td>
        <td>113991134</td>
      </tr>
      <tr>
        <td></td>
        <td>LTE Cat 4 EC25-EUXGR-mini-PCIe 模块 - EMEA 和泰国</td>
        <td>113991135</td>
      </tr>
      <tr>
        <td></td>
        <td>LTE Cat 4 EC25-AUXGR-mini-PCIe 模块 - 澳大利亚</td>
        <td>113991174</td>
      </tr>
      <tr>
        <td></td>
        <td>LTE Cat 4 EC25-EFA-mini-PCIe 模块 - 泰国</td>
        <td>113991214</td>
      </tr>
      <tr>
        <td></td>
        <td>LTE Cat 4 EC25-EMGA-mini-PCIe 模块 - 马来西亚</td>
        <td>113991234</td>
      </tr>
      <tr>
        <td></td>
        <td>LTE Cat 4 EC25-JFA-mini-PCIe 模块</td>
        <td>113991296</td>
      </tr>
      <tr>
        <td>4G 天线</td>
        <td>4G 模块天线套件</td>
        <td>110061502</td>
      </tr>
      <tr>
        <td></td>
        <td>GPS 天线</td>
        <td>EC25 4G 模块 GPS 天线套件</td>
        <td>110061521</td>
      </tr>
      <tr>
        <td></td>
        <td>加密芯片</td>
        <td>带有 Infineon SLB9670 的 TPM2.0 模块</td>
        <td>114993114</td>
      </tr>
      <tr>
        <td rowspan="5"></td>
        <td>SSD 卡</td>
        <td>NVMe M.2 2280 SSD 2TB</td>
        <td>114993467</td>
      </tr>
      <tr>
        <td></td>
        <td>NVMe M.2 2280 SSD 1TB</td>
        <td>112990267</td>
      </tr>
      <tr>
        <td></td>
        <td>512GB NVMe M.2 PCIe Gen3x4 2280 内部 SSD</td>
        <td>112990247</td>
      </tr>
      <tr>
        <td></td>
        <td>256GB NVMe M.2 PCIe Gen3x4 2280 内部 SSD</td>
        <td>112990246</td>
      </tr>
      <tr>
        <td></td>
        <td>128GB NVMe M.2 PCIe Gen3x4 2280 内部 SSD</td>
        <td>112990226</td>
      </tr>
    </tbody>
  </table>
</div>

### Wi-Fi/蓝牙

reComputer AI Industrial R2135 由带有板载 Wi-Fi/BLE 版本的 CM5 提供支持，提供与 CM5 相同的 Wi-Fi/BLE 参数。有关详细参数信息，请参阅 Raspberry Pi 官方网站。

使用以下命令测试 WiFi 模块：

```bash
sudo iwlist wlan0 scan
```

结果如下图所示。
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/wifi.png" /></div>

使用以下命令测试蓝牙模块：

```bash
sudo bluetoothctl
scan on
```
结果如下图所示。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/bluetooth.png" /></div>


### LoRa® USB 模块

Mini-PCIe 插槽还支持使用 USB 协议的 LoRa® 模块。Seeed Studio 的 WM1302 模块已完全测试兼容 reComputer AI Industrial R2135。

您可以按以下步骤测试 LoRa® USB 模块：

```bash
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo nano ./libloragw/inc/loragw_i2c.h
```
将 #define I2C_DEVICE "/dev/i2c-1" 更改为 #define I2C_DEVICE "/dev/i2c-3"。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/lora1.png" /></div>

```bash
# 编译代码
sudo make
```

然后修改配置代码：
```bash
sudo nano ./tools/reset_lgw.sh
```
更新引脚配置：
<details>
<summary>reset_lgw.sh</summary>

```bash
SX1302_RESET_PIN=580   # SX1302 复位
SX1302_POWER_EN_PIN=578 # SX1302 电源启用
SX1261_RESET_PIN=579   # SX1261 复位 (LBT / 频谱扫描)
```
</details>
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/lora2.png" /></div>

```bash
# 复制 reset_lgw.sh 脚本
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
# 检查设备名称
ls /dev/spidv10.0
```
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/lora3.png" /></div>

```bash
cd ~/sx1302_hal/packet_forwarder
sed -i 's/spidev0.0/spidev10.0/g'  global_conf.json.sx1250.US915.USB
echo 1 > /sys/class/gpio/gpio580/value
./LoRa_pkt_fwd -c global_conf.json.sx1250.US915.USB
```
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/lora4.png" /></div>

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/lora5.jpg" /></div>

### 4G模块

reComputer AI Industrial R2135主板配备一个Mini-PCIe插槽，该插槽支持通过USB协议使用4G模块。Quectel的EC25 4G模块已完全测试，与reComputer AI Industrial R2135兼容。

> 注意：
> 请确保已在reComputer AI Industrial R2135上安装4G模块。

使用以下命令测试4G模块：

```bash 
# 检查4G模块的信息
ifconfig
```
结果如下图所示。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/4g1.png" /></div>

```bash 
# 检查usb0以太网端口的信息
ip link show usb0
```
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/4g2.png" /></div>


```bash
# 启动usb0以太网端口
sudo ip link set dev usb0 up
# 从网络上的DHCP服务器请求IP地址并分配给usb0接口
sudo dhclient usb0
```
然后测试是否可以ping默认路由器：
```bash
ping 192.168.225.1
```
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/4g3.png" /></div>

```bash
# 使用usb0 ping百度
ping -4 -I usb0 www.baidu.com 
```
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/4g4.png" /></div>


### TPM 2.0

TPM（可信平台模块）是一种专门设计用于增强计算机安全性的硬件芯片，通过提供基于硬件的加密功能来提高安全性。它可以安全地存储敏感数据，例如加密密钥、证书和密码，通常用于安全启动、磁盘加密（例如BitLocker）和身份验证等场景。

使用以下命令检查reComputer AI Industrial R2135上的TPM：

```bash
ls /dev | grep tpm
```
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/tpm1.png" /></div>

```bash
# 按以下方式测试TPM：
sudo tpm2_createprimary -C o -c primary.ctx
```
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/tpm2.png" /></div>


### SSD

reComputer AI Industrial R2135通过NVMe1 PCIe插槽（J8）支持2280 NVMe SSD。

> **注意**
>
> SSD卡主要有两种用途：
> 1. **大容量存储：** SSD卡可用于满足大容量存储需求。  
> 2. **带有镜像的启动驱动器：** SSD卡既可以作为大容量存储，也可以通过存储系统镜像作为启动驱动器，直接从卡启动。  
>
> 请注意，并非市场上的所有SSD卡都支持启动功能。如果您计划将SSD用作启动驱动器，但不确定选择哪个型号，我们推荐经过测试的1TB SSD（SKU 112990267）。该型号已验证支持启动功能，可降低兼容性风险并减少试错成本。  

您可以使用以下命令检查SSD：

```bash
sudo fdisk -l | grep sda
```
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/ssd1.png" /></div>

## 应用

### Frigate

Frigate 是一个开源的 NVR（网络视频录像机），专为使用 AI 进行实时目标检测而设计。它可以与现有摄像头集成，并使用诸如 TensorFlow 和 Coral 等机器学习模型对视频流进行目标检测。Frigate 针对低延迟和高性能视频处理进行了优化，提供了运动检测、实时视频流和自动警报等功能。

<iframe width="800" height="500" src="https://www.youtube.com/embed/thmI3dz9Ugs" title="经济高效的 AI 监控：在 Raspberry Pi 5 上运行 Frigate，结合 PCIe3.0 的 Hailo8 和双 M.2 扩展板" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> **注意：**
> **如果您想了解更多关于该项目的信息，请参考此 [链接](https://wiki.seeedstudio.com/cn/frigate_nvr_with_raspberrypi_5/)。**

### YOLO

YOLO（You Only Look Once）系列模型是一组专为速度和准确性设计的实时目标检测模型。与传统目标检测方法需要分别进行区域提议和分类不同，YOLO 在神经网络的单次前向传播中同时完成这两项任务，使其速度更快。YOLO 模型将图像划分为网格，并为每个网格单元预测边界框和类别概率。多年来，YOLO 通过多个版本不断演进，在准确性、速度以及检测小目标的能力方面都有所提升。YOLOv4、YOLOv5，以及最近的 YOLOv7 和 YOLOv8 模型被广泛应用于监控、自动驾驶和机器人等领域。

<iframe width="800" height="500" src="https://www.youtube.com/embed/olaSVKmt9YI" title="Raspberry Pi AI：YOLOv8 目标检测 - 240fps 视频输入，Pi 5 PCIe Gen2 与 Gen3 基准测试" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> **注意：**
> **如果您想了解更多关于该项目的信息，请参考此 [链接](https://wiki.seeedstudio.com/cn/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/)。**

### Clip

CLIP（对比语言-图像预训练）是由 OpenAI 开发的一种机器学习模型，能够同时理解图像和文本。它通过训练将图像与对应的文本描述关联起来，从而能够执行涉及这两种模态的任务。CLIP 具备零样本学习能力，这意味着它可以在无需针对特定类别进行专门训练的情况下识别图像中的对象和概念。它在多种任务中表现出色，例如图像分类、目标检测，甚至生成图像的文本描述。

<iframe width="800" height="500" src="https://www.youtube.com/embed/JMHtqSmAGCA" title="在 Raspberry Pi 5 上使用 Hailo AI 加速器进行 CLIP 零样本分类" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> **注意：**
> **如果您想了解更多关于该项目的信息，请参考此 [链接](https://wiki.seeedstudio.com/cn/clip_application_on_rpi5_with_ai_kit/)。**

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>