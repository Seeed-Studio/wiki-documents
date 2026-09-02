---
description: reComputer AI R2000 是一款基于 Raspberry Pi 5 的高性能边缘 AI 计算机。配备四核 Arm Cortex-A76 处理器、8GB 内存、支持 M.2 SSD，以及可提供高达 26 TOPS 算力的 Hailo-8 AI 加速模块，实现实时、低延迟且高效的 AI 推理，是广泛 AI 应用（包括 AI 视频分析、机器视觉和智能边缘计算）的理想选择。
title: reComputer AI Industrial R2135 系列快速上手
keywords:
  - Raspberry pi
  - 边缘 AI 计算机
  - reComputer R2000
image: https://files.seeedstudio.com/wiki/AI-box-cm5/r2135.webp
slug: /recomputer_ai_industrial_r2135_getting_start
sku: 114993595,103990763,E2025081502,E2025081503
last_update:
  date: 05/06/2025
  author: Jiahao Li
createdAt: '2025-05-13'
updatedAt: '2026-04-21'
url: https://wiki.seeedstudio.com/cn/recomputer_ai_industrial_r2135_getting_start/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial.jpeg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

**reComputer AI Industrial R2135** 由 **Raspberry Pi CM5** 和 **Hailo AI 加速器**驱动，这款紧凑型**边缘 AI 系统**可提供 **26 TOPS** 算力，用于实时**多通道视觉处理**。凭借 **四核 Cortex-A76 CPU**、最高 **16GB 内存**、**64GB eMMC** 以及**丰富接口**，可轻松集成到各类**工业 AI 应用**中。

专为 **7×24 小时可靠运行**而设计，具备**宽电压输入（9-36V）**、**硬件看门狗**和**高效散热**，可在 **-20°C 至 65°C** 环境下稳定工作。非常适合**智能工厂**、**安防监控**和 **AIoT** 等场景，将**强大的 AI 计算能力**带到**边缘侧**。

## 特性

- **工业级可靠性**：铝合金机箱，支持 -20°C 至 65°C 宽温，内置 RTC、硬件看门狗，确保 7×24 小时稳定运行。

- **强劲性能**：基于 Raspberry Pi CM5，搭载四核 Cortex-A76 CPU，最高 16GB 内存，64GB eMMC。

- **高效 AI 计算**：搭载 Hailo-8 AI 加速器，最高 26 TOPS，可实现多通道 AI 视觉处理。

- **丰富连接性**：2 路 HDMI2.0、1 路千兆以太网、2 路 USB 3.2、1 路 USB-C、双 M.2 插槽以及用于 4G/LoRa 扩展的 Mini-PCIe。

- **多样无线选项**：内置 Wi-Fi5、Bluetooth 5.0，并可选配 4G LTE/LoRaWAN<sup>@</sup>。

- **灵活存储方案**：PCIe3.0 双 M.2 插槽同时支持 AI 加速器和 SSD 存储。

## 规格参数

| **类别**                  | **参数**                                                                 |
|--------------------------|---------------------------------------------------------------------------------|
| **硬件规格**              |                                                                                 |
| **CPU**                   | Raspberry Pi Compute Module 5，2.4GHz 四核 64 位 Arm Cortex-A76          |
| **GPU**                   | Raspberry Pi Compute Module 5，VideoCore VII                                   |
| **AI 处理器**             | Hailo-8 M.2 加速棒，26 TOPS（每秒万亿次运算）           |
| **RAM**                   | 8GB SDRAM                                                                      |
| **eMMC**                  | 32GB                                                                            |
| **操作系统**              | Raspbian，Debian                                                               |
| **系统规格**              |                                                                                 |
| **电源输入**              | DC 9V~36V，2 针端子座                                                 |
| **视频解码**              | 4Kp60 HEVC 解码                                                              |
| **接口**                  |                                                                                 |
| **以太网**                | 1× 10/100/1000 Mbps，RJ45                                                       |
| **USB**                   | 2× USB 3.2 接口（USB-A）；1× USB 2.0 接口（用于调试/更新系统的 USB-C）          |
| **显示**                  | 2× 标准 HDMI 接口，HDMI 2.0                                               |
| **M.2 插槽**              | 1× USB 3.0 转 M.2（M-key 2280）；1× PCIe 3.0 转 M.2（M-key 2242），内置 Hailo-8 AI 加速器 |
| **Mini-PCIe**             | 1× Mini-PCIe，用于 4G/LoRaWAN 模块                                              |
| **SIM 卡**                | 1× 标准 SIM 卡槽                                                       |
| **LED**                   | 3× 指示灯：Power / ACT / 4G                                                       |
| **按键 / 开关**           | 1× 复位按键；1× 启动拨码开关                                                 |
| **无线通信**              |                                                                                 |
| **Wi-Fi 2.4/5.0 GHz**     | 片上 Wi-Fi 5                                                                 |
| **BLE 5.0**               | 片上 BLE 5.0                                                                 |
| **4G 蜂窝网络**           | 4G LTE（可选）                                                               |
| **LoRa®**                 | USB LoRa® / SPI LoRa®（可选）                                               |
| **环境条件**              |                                                                                 |
| **防护等级**              | IP40                                                                            |
| **工作温度**              | -20°C 至 65°C                                                                   |
| **工作湿度**              | 10% 至 95% RH                                                                   |
| **天线**                  | 3× 天线孔                                                                |
| **其他**                  |                                                                                 |
| **看门狗**                | 硬件看门狗                                                               |
| **RTC**                   | 高精度 RTC                                                               |
| **安全**                  | 加密芯片 TPM2.0 / ATECC608A（可选）                                   |
| **散热**                  | 带风扇的散热片                                                               |
| **质保**                  | 2 年                                                                         |
| **产品生命周期**          | 至 2036 年 12 月                                                             |
| **机械结构**              |                                                                                 |
| **尺寸（宽 × 高 × 深）**  | 130mm × 93mm × 55.5mm                                                           |
| **外壳**                  | 铝合金机壳，PC 侧板                                      |
| **安装方式**              | 导轨安装 / 壁挂安装                                                           |
| **重量（净重）**          | 688g                                                                            |
| **说明**                  | 标注为“可选”的配置需另行购买（详见配件列表）。 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_industrial_dimension.jpeg" style={{width:800, height:'auto'}}/></div>

## Hailo 介绍

### 硬件介绍

[Hailo](https://hailo.ai/) 提供专为边缘设备高性能深度学习应用打造的前沿 AI 处理器。其解决方案专注于在边缘侧实现新一代生成式 AI，以及感知与视频增强能力，这些都由先进的 AI 加速器和视觉处理器提供算力支持。而搭载 Hailo-8 NPU 加速器、具备 26 TOPS AI 性能的 reComputer_R2000，可在运行 YOLOv8s 时实现超过 200 FPS 的推理速度。

### 软件介绍

![](https://seeed-projects.github.io/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/assets/images/architecture-2bfc6ed440e1add56388738e87558050.png)

Hailo AI Software Suite 提供强大的工具，可在硬件加速器上高效运行 AI 模型。它被设计为可与现有深度学习框架无缝集成，为开发者提供顺畅的工作流。流程包括在模型构建环境中，从 ONNX 文件生成 HEF（Hailo 可执行二进制文件）。生成后，将 HEF 文件传输到推理设备（运行环境），并通过 HailoRT API 执行推理。提供的脚本可在模型构建环境中将 ONNX 文件转换为 HEF 文件。

> **注意：**
> **如果你想了解更多关于使用 Hailo NPU 的示例，请点击此[链接](https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero)。**

## 硬件概览

### 接口概览

![image1](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-recomputer.png)

如需查询 GPIO 映射和偏移，请使用以下命令：

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

### 电源框图

![image1](https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_power_diagram.png)

reComputer AI Industrial R2135 支持 9V–36V 的宽范围直流输入电压，并在内部采用多级 DCDC 转换器生成 5V、3.3V、1.2V 和 1.0V 电源轨。这些电压为核心处理器、USB 接口、HDMI、M.2 扩展、音频、RTC 以及其他外设模块提供稳定供电，确保在各种应用场景下可靠运行。

##### 2 针电源端子

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_Two_Pin_Terminal.jpg" style={{width:150, height:'auto'}}/></div>

reComputer AI Industrial R2135 通过端子输入 9~36V 直流电压。电源通过 2 针电源端子座连接。若需要为 reComputer AI Industrial R2135 接地，可将地线固定在电源端子左上角的螺丝上。

#### 功耗

请参考下表中 Seeed Studio 实验室对 reComputer AI Industrial R2135 测得的功耗数据。请注意，该数值仅供参考，由于测试方法和环境不同，结果可能会有所差异。

| **状态**        | **电压** | **电流** | **功耗** |**说明** |
|----------------------|----------------------|----------------------|----------------------|----------------------|
|**关机**|12V   |   1.1mA|   0.013W|   在关机断电状态下的静态功耗测试。|
|**空闲**|12V|208mA|2.42W|在不运行任何测试程序的情况下，为 reComputer AI Industrial R2135 设备提供 24V 电源时的输入电流测试。|
|**满载**|12V|2.08A|24.2W| 使用 "stress -c 4" 命令将 CPU 配置为满载运行。USB 端口外接 1A 负载。|

#### 开关机

reComputer AI Industrial R2135 默认不带电源按键，接通电源后系统会自动启动。关机时，请在操作系统中选择关机选项，并等待系统完全关机后再切断电源。若需重启系统，只需重新接通电源即可。

### 方框图

![image1](https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_block_diagram.png)

## 接口

### 接口说明

| 类型           | 说明                                       |
|----------------|---------------------------------------------------|
| **以太网**   | 1x 10/100/1000 Mbps（支持 POE*）              |
| **USB**        | 2x USB-A 3.2 Host；1x USB-C 2.0（用于烧录系统） |
| **HDMI**       | 2x HDMI 2.0                                      |
| **音频**      | 1x 3.5mm 音频输出/输入                      |
| **SIM 卡槽** | 1x SIM 卡槽，支持标准 SIM 卡    |
| **M.2 插槽**   | 2x M.2 插槽，支持 M.2 NVMe SSD 和 AI 加速 |
| **Mini-PCIe**  | 1x Mini PCIe 插槽                                |
| **LED**        | 3x LED 指示灯                                |
| **复位按键** | 1x 复位按键                                |
| **启动拨码开关**  | 1x 启动拨码开关                                 |

### LED 指示灯状态

reComputer AI Industrial R2135 配备了 3 个 LED 指示灯，用于指示设备的运行状态。各个 LED 的具体功能和状态请参考下表：

| 名称  | 颜色            | 状态 | 说明                                                                                                                                              |
|-------|-----------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **PWR**  | 绿色           | On     | 设备已接通电源。                                                                                                                |
|        |                 | Off    | 设备未接通电源。                                                                                                                    |
| **ACT**  | 橙色          |        | 在 Linux 下，该引脚会通过闪烁来表示 eMMC 访问。如果在启动过程中发生任何错误，该 LED 会闪烁错误模式（参见 Raspberry Pi 文档）。 |
| **USER** | 绿/红/蓝  |        | 需要由用户自定义。                                                                                                                            |
| **LTE**  | 绿色           | On     | 拨号成功且连接正常。                                                                                                |
|        |                 | Off    | LTE 信号未连接或设备未上电。                                                                                             |

### ACT 状态表

| 长闪次数 | 短闪次数 | 状态                               |
|--------------|---------------|--------------------------------------|
| 0            | 3             | 启动失败（通用）              |
| 0            | 4             | 未找到 start*.elf                 |
| 0            | 7             | 未找到内核镜像               |
| 0            | 8             | SDRAM 故障                        |
| 0            | 9             | SDRAM 不足                   |
| 0            | 10            | 处于 HALT 状态                        |
| 2            | 1             | 分区不是 FAT                    |
| 2            | 2             | 从分区读取失败        |
| 2            | 3             | 扩展分区不是 FAT           |
| 2            | 4             | 文件签名/哈希不匹配 - Pi 4  |
| 4            | 4             | 不支持的板卡类型               |
| 4            | 5             | 严重固件错误                 |
| 4            | 6             | 电源故障类型 A                 |
| 4            | 7             | 电源故障类型 B                 |

如果 ACT LED 以规则的四次闪烁模式闪烁，则表示无法找到 bootcode(start.elf)。
如果 ACT LED 以不规则模式闪烁，则表示启动已经开始。
如果 ACT LED 不闪烁，则可能是 EEPROM 代码损坏，请在不连接任何外设的情况下再试一次以确认。更多详情请查看 Raspberry Pi 论坛：
置顶帖：你的 Pi 无法启动吗？（启动问题置顶帖）- Raspberry Pi 论坛。
更多详情请查看 [Raspberry Pi 论坛](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151)

为了控制用户 LED，我们建议使用 sysfs，这是 Linux 内核提供的一个伪文件系统，用于暴露各种内核子系统、硬件设备及其相关驱动的信息。在 ReComputer R2000 上，我们将用户 LED 接口抽象为三个设备文件（led-red、led-blue 和 led-green），用户只需通过操作这些文件即可控制 LED 灯。示例如下：

1. 要点亮红色 LED，请在终端中输入以下命令：

```
echo 1 | sudo tee /sys/class/leds/led-red/brightness
```

2. 要熄灭红色 LED，请在终端中输入以下命令：

```
echo 0 | sudo tee /sys/class/leds/led-red/brightness
```

3. 你可以同时点亮红色和绿色 LED，请在终端中输入以下命令：

```
echo 1 | sudo tee /sys/class/leds/led-red/brightness
echo 1 | sudo tee /sys/class/leds/led-green/brightness
```

### 启动拨码开关

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" /></div>

reComputer AI Industrial R2135 的启动拨码开关连接到 CM5 的 nRPI_BOOT 引脚。该开关为用户提供在 eMMC 和 USB 之间选择启动源的选项。在正常模式下，开关应拨到远离带有 "BOOT" 标签一侧的位置，使系统从 eMMC 启动。相反，当用户需要烧录系统镜像时，应将开关拨向带有 "BOOT" 标签的一侧，使系统从 Type-C USB 接口启动。

| 拨码开关位置 | 模式         | 说明      | nRPI-BOOT |
|----------------|--------------|-----------------|-----------|
|      <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/>            | 正常模式  | 从 eMMC 启动   | Low       |
|      <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>             | 烧录模式   | 从 USB 启动    | High      |

### USB

<div align="left"><img width={150} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig20.png" /></div>

reComputer R2000 配备了一个 USB Type-C 接口和两个 USB Type-A 接口。它们的功能和说明请参考下表。

| **类型**   | **数量** | **协议** | **功能** | **说明**                                              |
| ---------- | ------------ | ------------ | ------------ | ------------------------------------------------------------ |
| **Type-C** | *1           | USB2.0       | USB-Device   | 用于串口调试、烧录镜像等。          |
| **Type-A** | *2           | USB2.0       | USB-Host     | 连接 U 盘、<br /> USB 键盘或鼠标等不同 USB 设备。 |

通过运行 **lsusb** 命令检查是否检测到 USB 集线器。该命令会列出所有已连接的 USB 设备，包括集线器。

```shell
lsusb
lsusb -t
```

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/lsusb.png"/></div>

运行此命令后，应会显示连接到系统的 USB 设备信息，包括所有已连接的 USB 集线器。

如果 USB 集线器工作正常，你应当能在 **lsusb** 命令的输出中看到它的详细信息。如果没有列出，可能是集线器本身或其与系统连接存在问题。在这种情况下，你需要对 USB 集线器或其连接进行排查。

### SIM 卡槽（内部）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_SIM.jpeg" style={{width:800, height:'auto'}}/></div>

reComputer AI Industrial R2135 系列设备内置一个标准 SIM 卡槽，用于安装标准 SIM 卡以获取 4G 信号。
标准 SIM、Micro SIM 和 Nano SIM 卡的尺寸差异如下：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/sim_card.jpg" /></div>

> **Note**  
> **reComputer AI Industrial R2135** 标准版本不带 4G 模块。  
> 如果你需要 4G 功能，需要另外单独购买 4G 模块。  
> 更多信息请参考 **“2.3.2 4G Module”** 章节。

### M.2 插槽

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_M2_1.jpeg" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_M22.jpeg" style={{width:800, height:'auto'}}/></div>

reComputer AI Industrial R2135 配备了两个 M.2 Key-M 插槽（NVMe1 和 NVMe2），用于 NVMe M.2 2280 SSD 和 AI 加速，支持高速存储扩展，使用户能够提升系统的性能和容量。

● NVMe1（底部插槽）：支持 M.2 2280 尺寸；

● NVMe2（顶部插槽）：预装 Hailo-8 AI 加速器

● 仅支持基于 PCIe 的 NVMe SSD，不支持 SATA SSD。

> **Note**  
> SSD 卡主要有两种用途：  
>
> 1. **大容量存储** – 仅用于存储大量数据。  
> 2. **带镜像的启动盘** – 既用于存储，又用于从 SSD 上存储的镜像启动系统。  
>  
> 市面上的 SSD 卡并非都支持启动功能。  
> 如果你计划将 SSD 用作启动盘且不确定兼容性，我们推荐使用 **1TB SSD（SKU 112990267）**。该型号已通过测试验证支持启动，可帮助避免兼容性问题并减少试错成本。

### Mini-PCIe 插槽

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_minipcie_1.jpeg" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_minipcie_2.jpeg" style={{width:800, height:'auto'}}/></div>

reComputer AI Industrial R2135 包含一个 Mini PCIe 插槽，主要用于安装 4G LTE 调制解调器模块（例如 Quectel EC20/EC25）。

● 支持：标准 Mini PCIe 模块

● 信号接口：USB 2.0、UART、SIM 卡、RESET 等

● SIM 卡连接到板载 SIM 卡座

● 控制信号：支持 W_DISABLE、PERST、WAKE

● 集成 ESD 保护以增强可靠性

| 插槽        | 支持的协议              |
|-------------|------------------------|
| Mini-PCIe   | 4G LTE                 |
|             | USB LoRa®              |

### 复位孔

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_reset.jpeg" style={{width:800, height:'auto'}}/></div>

在 reComputer AI Industrial R2135 的复位孔内有一个微型按键开关。通过使用细小物体按下该按键，可以复位 CM4。当该引脚为高电平时，表示 CM4 已启动；将该引脚拉低则会复位模块。

### 以太网 RJ45

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_ETH0.png" /></div>

| 名称 | 类型                         | 速率               | PoE           |
|------|------------------------------|--------------------|---------------|
| ETH0 | CM5 原生千兆以太网           | 10/100/1000 Mbit/s | 不支持        |

reComputer AI Industrial R2135 配备一个标准 RJ45 千兆以太网端口（GbE），使用集成变压器的 MagJack 以获得更好的信号质量和 EMI 防护。

● 接口标准：IEEE 802.3 10/100/1000Mbps；
● 使用具有 4 对差分线（TX/RX）的千兆 PHY；
● 支持自协商和全双工通信；
● 集成共模扼流圈、ESD 保护和隔离电容；
● 板载绿/黄 LED 指示链路和活动状态。

### HDMI

<div align="left"><img width={200} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_Industrial_HDMI.jpeg" /></div>

reComputer AI Industrial R2135 配备两个标准 HDMI Type-A 接口，标记为 HDMI0 和 HDMI1，支持高分辨率视频输出。系统可提供最高 4K@60Hz 的显示分辨率，并支持双 HDMI 同时输出，适用于多屏显示应用。

### RTC

reComputer AI Industrial R2135 集成了板载 RTC（PCF8563T），可在断电期间保持时间，从而在断电情况下仍能维持计时功能。

你可以使用下面的命令测试 RTC 部分：

```bash
# 1.Disable automatic time synchronization:
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
# Set the time :
sudo hwclock --set --date "2024-11-12 12:00:00"
# Synchronize the RTC time to the system:
sudo hwclock --hctosys
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/RTC1.png" /></div>

然后你可以将 R2000 断电几分钟，再重新上电，并使用以下命令重新检查时钟：

```bash
# 4.Check the RTC time:
sudo hwclock -r
```

结果表明，即使系统断电，RTC 模块仍然可以继续工作。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/RTC2.png" /></div>

### 看门狗

reComputer AI Industrial R2135 配备了独立的硬件看门狗电路，可在系统异常崩溃时自动重启系统。看门狗电路通过 RTC 实现，并支持 1 到 255 秒范围内灵活设置喂狗时间。

你可以使用下面的命令测试看门狗部分：

``` bash
# 1.Install the watchdog software:
sudo apt install watchdog
# 2. Edit the watchdog configuration file:
sudo nano /etc/watchdog.conf
```

然后按如下方式修改配置：

<details>
<summary>watchdog.conf</summary>

``` bash
watchdog-device= /dev/watchdog
# Uncomment and edit this line for hardware timeout values that differ
# from the default of one minute.
watchdog-timeout = 120
# If your watchdog trips by itself when the first timeout interval
# elapses then try uncommenting the line below and changing the
# value to 'yes'.
#watchdog-refresh-use-settimeout = auto
# If you have a buggy watchdog device (e.g. some IPMI implementations)
# try uncommenting this line and setting it to 'yes'.
#watchdog-refresh-ignore-errors = no
# ====================== Other system settings ========================
#
# Interval between tests. Should be a couple of seconds shorter than
# the hardware time-out value.
interval= 15
max-load-1= 24
#max-load-5= 18
#max-load-15= 12
realtime= yes
priority= 1
```

</details>

```bash
# 3.Ensure the watchdog service is running:
sudo systemctl start watchdog
# This command triggers a kernel crash and should cause the watchdog to reboot the system.
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

如下图所示，输入命令后 SSH 连接丢失，表明看门狗已生效并重启了 reComputer AI Industrial R2135。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/watchdog.png" /></div>

### M.2 AI 加速

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/reComputer_AI_industrial_accelerator.jpeg" style={{width:800, height:'auto'}}/></div>

reComputer AI Industrial R2135 内置一个 Hailo-8 AI 加速模块，预装在 NVMe2 M.2 插槽中，提供 26 TOPS 的算力，用于实时多路 AI 视觉处理。

你可以使用下面的命令测试看门狗部分：

> Note:
> 要测试此功能，需要将显示屏连接到 reComputer AI Industrial R2135。

```bash
#Test whether the Hailo hardware and its accompanying software have been successfully installed
hailortcli fw-control identify
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/hailo1.png" /></div>

```bash
# Verify whether the pre-installed demo is functional.
cd hailo-rpi5-examples
# Install necessary resources
./install.sh
# Activate the python environment
source setup_env.sh
# Run object detection
python basic_pipelines/detection_simple.py
```

结果如下所示：

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/hailo2.png" /></div>

## 可选接口与模块

reComputer AI Industrial R2135 支持丰富的扩展模块和配件，适用于多种场景和需求。如果你对定制 reComputer AI Industrial R2135 感兴趣，请联系 odm@seeed.cc 获取更多信息。
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
        <td rowspan="3">这三个模块必须一起使用才能实现 LoRaWAN® 功能</td>
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
        <td>此配件是实现 WiFi 功能所必需的</td>
        <td>Wi-Fi/BLE 天线</td>
        <td>Raspberry Pi Compute Module 4 天线套件</td>
        <td>114992364</td>
      </tr>
      <tr>
        <td rowspan="7">4G 功能需要 4G 模块配合 4G 天线，GPS 功能需要 4G 模块配合 GPS 天线</td>
        <td>4G 模块</td>
        <td>LTE Cat 4 EC25-AFXGA-mini-PCIe 模块 - 适用于北美</td>
        <td>113991134</td>
      </tr>
      <tr>
        <td></td>
        <td>LTE Cat 4 EC25-EUXGR-mini-PCIe 模块 - 适用于 EMEA 和泰国</td>
        <td>113991135</td>
      </tr>
      <tr>
        <td></td>
        <td>LTE Cat 4 EC25-AUXGR-mini-PCIe 模块 - 适用于澳大利亚</td>
        <td>113991174</td>
      </tr>
      <tr>
        <td></td>
        <td>LTE Cat 4 EC25-EFA-mini-PCIe 模块 - 适用于泰国</td>
        <td>113991214</td>
      </tr>
      <tr>
        <td></td>
        <td>LTE Cat 4 EC25-EMGA-mini-PCIe 模块 - 适用于马来西亚</td>
        <td>113991234</td>
      </tr>
      <tr>
        <td></td>
        <td>LTE Cat 4 EC25-JFA-mini-PCIe 模块</td>
        <td>113991296</td>
      </tr>
      <tr>
        <td>4G 天线</td>
        <td>适用于 4G 模块的 4G 天线套件</td>
        <td>110061502</td>
      </tr>
      <tr>
        <td></td>
        <td>GPS 天线</td>
        <td>适用于 EC25 4G 模块的 GPS 天线套件</td>
        <td>110061521</td>
      </tr>
      <tr>
        <td></td>
        <td>加密芯片</td>
        <td>带 Infineon SLB9670 的 TPM2.0 模块</td>
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
        <td>512GB NVMe M.2 PCIe Gen3x4 2280 内置 SSD</td>
        <td>112990247</td>
      </tr>
      <tr>
        <td></td>
        <td>256GB NVMe M.2 PCIe Gen3x4 2280 内置 SSD</td>
        <td>112990246</td>
      </tr>
      <tr>
        <td></td>
        <td>128GB NVMe M.2 PCIe Gen3x4 2280 内置 SSD</td>
        <td>112990226</td>
      </tr>
    </tbody>
  </table>
</div>

### Wi-Fi/BlueTooth

reComputer AI Industrial R2135 由带板载 Wi-Fi/BLE 版本的 CM5 提供支持，提供与 CM5 相同的 Wi-Fi/BLE 参数。有关详细参数信息，请参考 Raspberry Pi 官方网站。

使用下面的命令测试 WiFi 模块：

```bash
sudo iwlist wlan0 scan
```

结果如下图所示。
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/wifi.png" /></div>

使用下面的命令测试 BlueTooth 模块：

```bash
sudo bluetoothctl
scan on
```

结果如下图所示。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/bluetooth.png" /></div>

### LoRa® USB 模块

Mini-PCIe 插槽也支持使用 USB 协议的 LoRa® 模块。Seeed Studio 的 WM1302 模块已经过充分测试，可与 reComputer AI Industrial R2135 完全兼容。

你可以按如下方式测试 LoRa® USB 模块：

```bash
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo nano ./libloragw/inc/loragw_i2c.h
```

将 #define I2C_DEVICE "/dev/i2c-1" 修改为 #define I2C_DEVICE "/dev/i2c-3"。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/lora1.png" /></div>

```bash
# compile the code
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
SX1302_RESET_PIN=580   # SX1302 reset
SX1302_POWER_EN_PIN=578 # SX1302 power enable
SX1261_RESET_PIN=579   # SX1261 reset (LBT / Spectral Scan)
```

</details>
<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/lora2.png" /></div>

```bash
# Copy the reset_lgw.sh script
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
# Check the device name
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

### 4G 模块

reComputer AI Industrial R2135 主板配备一个 Mini-PCIe 插槽，该 Mini-PCIe 插槽支持使用 USB 协议的 4G 模块。来自 Quectel 的 EC25 4G 模块已经过充分测试，可与 reComputer AI Industrial R2135 完全兼容。

> 注意：
> 请确保你已经在 reComputer AI Industrial R2135 上安装了 4G 模块

使用下面的命令测试 4G 模块：

```bash
# Check the information of the 4g module
ifconfig
```

结果如下图所示。

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/4g1.png" /></div>

```bash
# Check the information of the usb0 ethernet port
ip link show usb0
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/4g2.png" /></div>

```bash
# Start usb0 ethernet port
sudo ip link set dev usb0 up
# Request an IP address from the DHCP server on the network and assign it to the usb0 interface
sudo dhclient usb0
```

然后测试是否可以 ping 默认路由器

```bash
ping 192.168.225.1
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/4g3.png" /></div>

```bash
# ping baidu.com use usb0
ping -4 -I usb0 www.baidu.com 
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/4g4.png" /></div>

### TPM 2.0

TPM（可信平台模块，Trusted Platform Module）是一种专门为增强计算机安全性而设计的硬件芯片，通过提供基于硬件的加密功能来提升安全性。它可以安全地存储加密密钥、证书和密码等敏感数据，常用于安全启动、磁盘加密（例如 BitLocker）和身份验证等场景。

使用如下命令在 reComputer AI Industrial R2135 上检查 TPM：

```bash
ls /dev | grep tpm
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/tpm1.png" /></div>

```bash
# Test tpm as following:
sudo tpm2_createprimary -C o -c primary.ctx
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/tpm2.png" /></div>

### SSD

reComputer AI Industrial R2135 通过 NVMe1 PCIe 插槽（J8）支持 2280 NVMe SSD。

> **注意**
>
> SSD 卡主要有两种用途：
>
> 1. **大容量存储：** SSD 卡可用于大容量存储需求。  
> 2. **带镜像的启动盘：** SSD 卡既可以作为大容量存储，也可以通过存储系统镜像作为启动盘，从而实现从该卡直接启动系统。  
>
> 需要注意的是，市面上的 SSD 卡并非都支持启动功能。如果你计划将 SSD 用作启动盘且不确定选择哪一款型号，我们推荐已经过测试的 1 TB SSD（SKU 112990267）。该型号已验证支持启动功能，可降低兼容性风险并减少反复试错成本。  

你可以使用下面的命令检查 SSD：

```bash
sudo fdisk -l | grep sda
```

<div align="left"><img width={500} src="https://files.seeedstudio.com/wiki/AI-box-cm5/ssd1.png" /></div>

## 应用

### Frigate

Frigate 是一个开源 NVR（网络视频录像机，Network Video Recorder），专为使用 AI 进行实时目标检测而设计。它可以与现有摄像头集成，并使用诸如 TensorFlow 和 Coral 等机器学习模型，对视频流进行目标检测。Frigate 针对低延迟和高性能视频处理进行了优化，提供运动检测、实时视频流和自动告警等功能。

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/thmI3dz9Ugs" title="Cost-Effective AI Surveillance: Frigate on Raspberry Pi 5 with Hailo8 on PCIe3.0 to Dual M.2 hat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **注意：**
> **如果你想了解更多关于该项目的信息，请参考此[链接](https://wiki.seeedstudio.com/cn/frigate_nvr_with_raspberrypi_5/)。**

### YOLO

YOLO（You Only Look Once）系列模型是一类为速度和精度而设计的实时目标检测模型。与传统的先进行候选区域生成再进行分类的目标检测方法不同，YOLO 在一次神经网络前向传播中同时完成这两项任务，因此速度更快。YOLO 模型将图像划分为网格，并为每个网格单元预测边界框和类别概率。多年来，YOLO 经过多个版本的演进，在精度、速度以及检测小目标的能力方面不断提升。YOLOv4、YOLOv5 以及近期的 YOLOv7 和 YOLOv8 被广泛应用于监控、自动驾驶和机器人等场景。

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/olaSVKmt9YI" title="Raspberry Pi AI: YOLOv8 Object Detection - 240fps Video Input, Pi 5 PCIe Gen2 vs Gen3 Benchmark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **注意：**
> **如果你想进一步了解这个项目，请参考此[链接](https://wiki.seeedstudio.com/cn/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/)**。

### Clip

CLIP（对比语言-图像预训练，Contrastive Language-Image Pretraining）是由 OpenAI 开发的一个机器学习模型，能够同时理解图像和文本。它通过训练将图像与相应的文本描述关联起来，从而可以执行涉及这两种模态的任务。CLIP 具备零样本学习能力，这意味着它无需针对特定类别进行专门训练，也能识别图像中的物体和概念。它在多种任务中表现出色，例如图像分类、目标检测，甚至是为图像生成文本描述。

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/JMHtqSmAGCA" title="CLIP Zero Shot Classification on Raspberry Pi 5 with Hailo AI Accelerator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **注意：**
> **如果你想进一步了解这个项目，请参考此[链接](https://wiki.seeedstudio.com/cn/clip_application_on_rpi5_with_ai_kit/)。**

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
