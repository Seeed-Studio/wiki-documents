---
description: 描述 Seeed 和 NVIDIA 之间 L4T 的差异
title: Seeed 和 NVIDIA 之间 L4T 的差异
keywords:
- jetson
- BSP
- L4T
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/differences_of_l4t_between_seeed_and_nvidia
last_update:
  date: 04/05/2025
  author: Dayu
---

Seeed 的 Jetson 板级支持包（BSP）基于 NVIDIA 的 Linux for Tegra（L4T）版本 35.3.1、35.5、36.3、36.4 和 36.4.3，并进行了修改以支持 Seeed 自己的 Jetson 系列产品。以下是 Seeed 的 BSP 与 NVIDIA 官方 BSP 在这些 L4T 版本中的差异。

## L4T 36.4.3

Jetson Linux 36.4.3 是 JetPack 6.2 的一部分。对于此版本，Seeed 的 BSP 包含了 NVIDIA 默认 BSP 中不存在的几个额外驱动程序和功能，包括：

- 添加了对 MCP251X 系列 CAN 总线控制器的支持。
- 添加了对 MCP251XFD CAN-FD 控制器的支持。
- 启用了 CRC-CCITT 校验和算法（由 PPP 和类似协议使用）。
- 添加了对通用 Intel Wi-Fi 驱动程序的支持。
- 启用了 Intel Wi-Fi 设备跟踪支持。
- 启用了 Intel Wi-Fi 的模块化操作模式。
- 添加了对 Microchip LAN743x 千兆以太网控制器的支持。
- 启用了 PPP（点对点协议）支持。
- 启用了通过异步串行链路的 PPP 支持。
- 添加了对 Realtek 88 系列 Wi-Fi 驱动程序的支持。
- 添加了对 Realtek 8723D Wi-Fi 芯片的支持。
- 添加了对 Realtek 8723DU Wi-Fi 芯片的支持。
- 添加了对 Realtek 8723X 系列 Wi-Fi 芯片的支持。
- 添加了对通过 USB 的 Realtek Wi-Fi 设备的支持。
- 添加了对 TI 的 TLV320AIC3X 系列音频编解码器驱动程序的支持。
- 添加了对 TLV320AIC3X 编解码器的 I²C 接口支持。
- 启用了视频设备的高级调试接口。
- 添加了对 MAX9296A GMSL 解串器的支持。
- 添加了对 MAX96717 GMSL 解串器的支持。
- 添加了对 MAX96724 GMSL 解串器的支持。
- 添加了对 Maxim GMSL 聚合器的支持。

## L4T 36.4

Jetson Linux 36.4 是 JetPack 6.1 的一部分。对于此版本，与 NVIDIA 的 BSP 相比，Seeed 的 BSP 添加了额外的驱动程序和功能，包括：

- 添加了对 MCP251X 系列 CAN 总线控制器的支持。
- 添加了对 MCP251XFD CAN-FD 控制器的支持。
- 启用了 CRC-CCITT 校验和算法（由 PPP 和其他协议使用）。
- 添加了对 Intel Wi-Fi MVM 驱动程序模块的支持。
- 添加了对通用 Intel 无线网卡驱动程序的支持。
- 启用了 Intel Wi-Fi 的调试跟踪功能。
- 启用了 Intel Wi-Fi 设备的 LED 指示器控制。
- 启用了 Microchip LAN743x 千兆以太网控制器驱动程序。
- 启用了 PPP 协议支持。
- 启用了通过异步串行端口的 PPP 连接。
- 启用了对 Realtek 88 系列无线网卡核心驱动程序的支持。
- 添加了对 Realtek 8723D Wi-Fi 芯片的支持。
- 添加了对 Realtek 8723DU Wi-Fi 芯片的支持。
- 添加了对 Realtek 8723X 系列 Wi-Fi 芯片的支持。
- 添加了对 Realtek RTW88 Wi-Fi 驱动程序核心模块的支持。
- 添加了对通过 USB 使用 RTW88 系列 Wi-Fi 适配器的支持。
- 添加了对 PPP 所需压缩库的支持。
- 添加了对 CH341 USB 转串口转换器芯片的支持。

## L4T 36.3

Jetson Linux 36.3 是 JetPack 6.0 的一部分。对于此版本，Seeed 的 BSP 在 NVIDIA 的基础上提供了额外的驱动程序和功能，包括：

- 添加了对 MCP251X 系列 CAN 总线控制器的支持。
- 添加了对 MCP251XFD CAN-FD 控制器的支持。
- 启用了 CRC-CCITT 校验和算法（由 PPP 和类似协议使用）。
- 启用了 I²C ATR（地址转换器）协议支持。
- 添加了对通用 Intel 无线网卡驱动程序的支持。
- 启用了 Intel Wi-Fi 的设备调试跟踪支持。
- 添加了对 Microchip LAN743x 千兆以太网控制器的支持。
- 添加了对 Realtek 88 系列 Wi-Fi 驱动程序核心模块的支持。
- 添加了对 Realtek 8723D Wi-Fi 芯片的支持。
- 添加了对 Realtek 8723DU Wi-Fi 芯片的支持。
- 添加了对 Realtek 8723X 系列 Wi-Fi 芯片的支持。
- 添加了对 TI 的 TLV320AIC3X 音频编解码器驱动程序的支持。
- 添加了对 TLV320AIC3X 的 I²C 控制接口的支持。
- 添加了对 MAX96717 GMSL 解串器的支持。
- 添加了对 MAX96724 GMSL 解串器的支持。
- 添加了对 MAX9296A GMSL 视频解串器的支持。
- 添加了对 Maxim GMSL 聚合器的支持。
- 启用了 TPM 核心支持。
- 添加了对通过 SPI 接口的 TPM 驱动程序的支持。
- 启用了对通过 I²C 接口的 Infineon TPM 的支持。
- 启用了 SELinux 安全模块。

## L4T 35.5

Jetson Linux 35.5 是 JetPack 5.1.3 的一部分。对于此版本，Seeed 的 BSP 添加了几个驱动程序和功能，并包含一些配置更改，包括：

- **IMX219 摄像头驱动程序：** Seeed 将此驱动程序编译到内核中，而 NVIDIA 将其作为可加载模块提供。
- **IMX390 摄像头驱动程序：** Seeed 目前禁用此驱动程序，而 NVIDIA 将其编译到内核中。
- **LAN743x 千兆以太网控制器驱动程序：** Seeed 将其编译到内核中，而 NVIDIA 将其作为可加载模块提供。
- 启用了对 TI DP83867 以太网 PHY（物理层）芯片的支持。
- 添加了对 NXP PTN5150 USB Type-C 控制器芯片驱动程序的支持。
- 添加了对 Microchip LAN743x 系列千兆以太网芯片驱动程序的支持。
- 启用了 nvmem（非易失性存储器）框架，允许驱动程序访问板载存储器，如 EEPROM/NVRAM。
- 添加了对 STPMIC1 电源管理芯片的支持。
- 添加了对 TI TPS65090 电源管理芯片的支持。
- 启用了 LM90 温度传感器驱动程序。
- 添加了对 NTC 热敏电阻传感器的支持。
- 添加了对 TI 的 TLV320AIC3X 系列音频编解码器驱动程序（I²S 接口）的支持。
- 添加了对 TLV320AIC3X I²C 控制接口的支持。
- 启用了对标准化 USB Type-C 端口控制器接口（TCPCI）的支持。
- 添加了对 MediaTek MT6370 Type-C 控制器驱动程序的支持。
- 启用了 USB 控制台设备支持（用于通过 OTG 进行串行调试）。
- 启用了 CH341 USB 转串口适配器驱动程序。

## L4T 35.3.1

Jetson Linux 35.3.1 是 JetPack 5.1.1 的一部分。对于此版本，Seeed 的 BSP 添加了额外的驱动程序和功能，并进行了一些修改，包括：

- 启用了 TPM 硬件随机数生成器作为系统熵源之一。
- 启用了 `/sys/kernel/security` 挂载点，供 SELinux、AppArmor 等使用。
- 启用了核心 TPM 接口支持（SPI/I²C TPM 所需）。
- 添加了通过 SPI 总线访问 TPM 芯片的支持。
- 启用了 TPM 对安全启动和密钥存储等功能的支持。

## 资源

- [Seeed L4T 源代码](https://github.com/Seeed-Studio/Linux_for_Tegra)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
