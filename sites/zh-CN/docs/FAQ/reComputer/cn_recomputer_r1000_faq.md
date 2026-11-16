---
title: reComputer R1000 和 R1100 常见问题
description: 关于 reComputer R1000 和 R1100 边缘控制器的常见问题，包括默认凭据、RS485 和 BACnet 通信、操作系统烧录以及系统配置。
slug: /recomputer_r1000_r1100_faq
last_update:
  date: 11/10/2026
  author: doublelf
keywords:
  - reComputer R1000 常见问题
  - reComputer R1100 常见问题
  - reComputer R1000 故障排查
  - reComputer R1100 边缘网关
  - Raspberry Pi CM4
  - RS485 Modbus RTU
  - BACnet MS/TP
---

<div class="recomputer-faq-page">

# reComputer R1000 和 R1100 常见问题

本页面包含针对 reComputer R1000 和 R1100 的已验证解答。每个解答都会说明适用的产品型号和固件模式，并给出最近一次根据当前官方资料完成验证的日期。

## 在开始之前

- 确认准确型号：reComputer R1000 或 reComputer R1100，以及所搭载的 Raspberry Pi CM4 版本。
- 在执行与版本相关的步骤前，检查当前使用的 Raspberry Pi OS 镜像版本。
- 本页答案最近一次验证时间为 2026-11-10；如果你在更晚时间阅读，请重新核对所链接的官方资料。

<!-- RECOMPUTER_FAQ_AUTO_START -->
## 操作系统与固件 {#os-and-firmware}

### 在没有 root 权限的情况下，如何禁用 reComputer R1024-10 的 USB 大容量存储 / Bootloader 功能？ {#r1024-10-disable-usb-mass-storage}

**适用范围：** reComputer R10xx 系列（以 reComputer R1024-10 为例），用于必须在没有 root 权限的情况下关闭 USB 大容量存储 / Bootloader 功能的场景

**最近验证时间：** 2026-11-01

标准的 reComputer R10xx 产品（包括 R1024-10）不提供在没有 root 权限的情况下禁用 USB 大容量存储 / Bootloader 功能的方式；该功能在标准固件配置中不受支持。从技术上讲，可以通过修改 Linux USB 驱动来实现，但这需要申请 ODM 系统定制服务。请联系 Seeed 销售团队了解定制选项。

**参考资料：**

- [reComputer R1000 入门指南](https://wiki.seeedstudio.com/cn/recomputer_r/)

### 如何在 reComputer R1124-10 上安装 Raspberry Pi OS Lite 64-bit Bookworm？ {#r1124-10-raspberry-pi-os-lite}

**适用范围：** reComputer R11xx 系列（以 reComputer R1124-10 为例），用于需要 Raspberry Pi OS Lite 64-bit Bookworm 的场景

**最近验证时间：** 2026-11-01

目前没有针对 Raspberry Pi OS Lite 版本适配的官方镜像。如果你希望使用官方提供的镜像，请按照 Seeed Studio Wiki 上的 “reComputer R1100 Flash OS” 安装流程操作：https://wiki.seeedstudio.com/cn/recomputer_r1100_flash_os/ 。如果你仍然需要 Raspberry Pi OS Lite，可以使用 Raspberry Pi Imager 直接写入，但由于缺少设备树文件，部分功能可能无法正常工作。

**参考资料：**

- [reComputer R1100 Flash OS](https://wiki.seeedstudio.com/cn/recomputer_r1100_flash_os/)

## 连接与网络 {#connectivity-and-networking}

### reComputer R1125-10 目前是否支持 mini-PCIe Zigbee 模块？还能购买并部署吗？ {#r1125-10-mini-pcie-zigbee}

**适用范围：** reComputer R11xx 系列（以 reComputer R1125-10 为例），用于需要在 mini-PCIe 接口上使用 Zigbee 模块的部署场景

**最近验证时间：** 2026-11-01

reComputer R1125-10 目前不支持 mini-PCIe Zigbee 模块。该模块仍处于停产状态，预计不会补货，因此无法作为该设备的受支持配置直接购买和部署。如果项目不必须占用 mini-PCIe 接口，可以考虑当前可购买的 Zigbee 3.0 USB Dongle Plus（ZBDongle-E），并先确认其功能是否满足连接 Zigbee 设备的需求。

**前提条件：**

- 确认项目是否必须占用 mini-PCIe 接口

**参考资料：**

- [Sonoff Zigbee 3.0 USB Dongle Plus（ZBDongle-E）](https://www.seeedstudio.com/sonoff-zigbee-usb-dongle-plus-p-5510.html)
- [reComputer R1100 入门指南](https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/)

### reComputer ER1124-10 是否可以直接更换为 Laird/Ezurio BL654（Nordic nRF52840）模块并连接外置天线？ {#er1124-10-laird-bl654-replacement}

**适用范围：** reComputer R11xx 系列（以 reComputer ER1124-10 为例），用于需要将板载 Bluetooth 更换为 Laird/Ezurio BL654 或使用外置天线的场景

**最近验证时间：** 2026-11-01

Laird/Ezurio BL654 不能直接替换 reComputer ER1124-10 的板载 Bluetooth。该板上使用的 Raspberry Pi CM4 已经原生集成了 Bluetooth，而 BL654 无法接管 CM4 的板载 Bluetooth。如果必须使用 BL654 和外置天线，只能将 BL654 设计为独立的外部模块。目前 Seeed 尚未针对 ER1124-10 验证过 BL654 外部模块或外置天线的兼容性方案，因此不能将其视为 Seeed 提供或保证兼容的升级选项。在实施之前，你必须确认可用的板级接口、模块连接方式、驱动支持、电源供给以及天线布局，并完成完整的通信和射频验证。

**参考资料：**

- [reComputer R1100 入门指南](https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/)

### reComputer R1124-10（SKU 113991374）是否可以直接作为 Zigbee 网络网关使用？是否必须配备独立 Zigbee 模块，板载 BLE 能否替代？ {#r1124-10-zigbee-gateway}

**适用范围：** reComputer R11xx 系列（以 reComputer R1124-10，SKU 113991374 为例），用于需要将设备作为 Zigbee 网络网关使用的场景

**最近验证时间：** 2026-11-01

不能直接使用。当前 reComputer R1124-10 的 Mini PCIe 接口不支持 Zigbee，板载 BLE 也不能作为 Zigbee 射频使用。虽然 BLE 和 Zigbee 都工作在 2.4 GHz 频段，但它们使用不同的无线协议，并需要不兼容的软硬件支持，因此片上 BLE 无法替代专用的 Zigbee 模块。要将设备用作 Zigbee 网关，必须配备兼容的专用 Zigbee 协调器或模块，并通过设备支持的主机接口之一进行连接。

**参考资料：**

- [reComputer R1100 入门指南](https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/)

### reComputer R1124-10（SKU 113991374）能否同时使用 Quectel EC25-EUX 4G LTE Cat 4 模块和 WM1302 SPI EU868 LoRaWAN 模块？ {#r1124-10-ec25-wm1302-concurrent}

**适用范围：** reComputer R11xx 系列（以 reComputer R1124-10 为例），用于需要同时连接 4G LTE Cat 4 模块和 SPI LoRaWAN 模块的场景

**最近验证时间：** 2026-11-01

可以，reComputer R1124-10 支持 EC25-EUX 和 WM1302 SPI 同时工作：将 EC25-EUX 安装在 Mini-PCIe 插槽 1，并通过 USB HUB2 端口 4 连接；将 WM1302 SPI 安装在 Mini-PCIe 插槽 2，并通过 SPI0 / CE1 连接。

**参考资料：**

- [reComputer R1100 系统配置](https://wiki.seeedstudio.com/cn/recomputer_r1100_configure_system/)
- [reComputer R1100 入门指南](https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/)

### reComputer R1024 / R1025 的 3 针连接器的料号是什么，如何购买？ {#r1024-r1025-3pin-connector}

**适用范围：** reComputer R10xx 系列（以 reComputer R1024 / R1025 为例），用于需要为 3 针线缆选择可插拔连接器的项目

**最近验证时间：** 2026-11-01

reComputer-R1024 / R1025 随机附带三个 3 针连接器，供客户在自己的设计中使用。该连接器未在 Bazaar 上架，因此无法单独购买。

**参考资料：**

- [reComputer R1000 入门指南](https://wiki.seeedstudio.com/cn/recomputer_r/)

## 硬件与接口 {#hardware-and-interfaces}

### reComputer R1035 模块是否有官方支持的 TPM 模块，如何安装？ {#r1035-tpm-module}

**适用范围：** reComputer R10xx 系列（以 reComputer R1035 为例），用于需要在设备上增加 TPM 2.0 安全芯片的场景

**最近验证时间：** 2026-11-01

有，但该模块不以独立产品形式销售；你需要通过定制来满足这一需求。

**参考资料：**

- [reComputer R1000 入门指南](https://wiki.seeedstudio.com/cn/recomputer_r/)

### R1025-10 机内是否有空间同时安装 Seeed PoE 扩展板和 Seeed SuperCAP UPS 模块（LTC3350）？ {#r1025-10-poe-ups-fit}

**适用范围：** reComputer R10xx 系列（以 reComputer R1025-10 为例），用于需要同时安装 Seeed PoE 扩展板和 Seeed SuperCAP UPS 模块（LTC3350）的场景

**最近验证时间：** 2026-11-01

可以，R1025-10 可以同时安装 Seeed PoE 扩展板和 Seeed SuperCAP UPS 模块（LTC3350）。具体安装方式请参考 reComputer R1000 装配指南中的 “assemble-ups-and-poe-module” 章节：https://wiki.seeedstudio.com/cn/recomputer_r1000_assembly_guide/ 。

**参考资料：**

- [reComputer R1000 装配指南 — 组装 UPS 和 PoE 模块](https://wiki.seeedstudio.com/cn/recomputer_r1000_assembly_guide/)

### reComputer R1100 能否直接为外部 24 V 和 12 V 传感器供电？如果需要同时使用 220 V、24 V 和 12 V，应如何选择电源？ {#r1100-external-sensor-power}

**适用范围：** reComputer R11xx 系列（以 reComputer R1100 为例），用于为外部 24 V / 12 V 传感器供电或需要同时使用 220 V、24 V 和 12 V 的应用

**最近验证时间：** 2026-11-01

reComputer R1100 系列未集成专门用于外部 12 V 或 24 V 传感器的电源输出，因此这些传感器需要独立电源。如果应用需要同时使用 220 V、24 V 和 12 V，可以根据实际负载选择独立电源组合或合适的多路输出电源，但在选型前必须确认传感器的额定电压、电流或功率、极性、接线要求、浪涌负载、220 V 的具体用途以及现场的电气安全要求。12 V 和 24 V 传感器通常使用直流供电，应选择与这些输出规格匹配的工业电源，并在需要时增加 DC/DC 转换器；不应仅根据电压数值直接为传感器匹配变压器。

**参考资料：**

- [reComputer R1100 入门指南](https://wiki.seeedstudio.com/cn/recomputer_r1100_intro/)

<!-- RECOMPUTER_FAQ_AUTO_END -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
