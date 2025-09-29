---
description: BLE Micro 模块
title: BLE Micro 模块
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/BLE_Micro
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/BLE_Micro/img/BLE%20Micro_03.jpg)

BLE Micro 是一个基于 nRF51822 SoC 的低成本 ARM Cortex-M0 模块，专为 Bluetooth® Smart 设计。该模块通过引脚焊盘最多可访问 23 个 GPIO 引脚，并集成了板载 PCB 天线，以最大限度地降低材料成本，同时提供良好的性能。应用工程师可以轻松地将该模块应用于他们的项目，而无需担心特定的阻抗匹配或与焊接精细间距相关的射频设计问题。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Seeed-Micro-BLE-Module-w%26-Cortex-M0-Based-nRF51822-SoC-p-1975.html)

## 特性
---
*   多协议 2.4GHz 无线电

*   32 位 ARM Cortex M0 处理器

*   256kB 闪存/16kB RAM

*   可编程输出功率范围：+4dBm 至 -20dBm

*   灵活且可配置的 23 个 GPIO 引脚

*   宽电源电压范围（1.8 V 至 3.6 V）

*   RSSI（接收信号强度指示）


## 规格
---
规格|值
--|--
微处理器|基于 32 位 ARM Cortex M0 的 nRF51822
外形尺寸|13.0mm x 18.5mm x 2.3mm
电源|3.3V
空中数据速率|250 kbps、1 Mbps 或 2 Mbps
调制方式|GFSK
输出功率|可编程：+4 至 -20dBm，步进 4dB
灵敏度|-92.5dBm（蓝牙低功耗）/-96dBm（250kbps）/-90dBm（1Mbps）/-85dBm（2Mbps）
无线电电流消耗（LDO，1.8V）|16mA（+4dBm 输出功率时的 TX）/10.5mA（0dBm 输出功率时的 TX）/13mA（1Mbps 时的 RX）
无线电电流消耗（DC-DC，3V）|10.5mA（+4dBm 输出功率时的 TX）/8.1mA（0dBm 输出功率时的 TX）/9.5mA（1Mbps 时的 RX）
系统电流消耗|420nA（无 RAM 保持）/530nA（8k RAM 保持）/2μA（所有外设处于 IDLE 模式）
硬件安全性|128 位 AES ECB/CCM/AAR 协处理器
GPIO|23
外设|10 位 ADC/温度传感器/RTC/RNG

## 引脚分布
---

BLE Micro 的底视图：

![](https://files.seeedstudio.com/wiki/BLE_Micro/img/BLE_Micro_Pinout.png)

注意：引脚 SWDIO 也是 nRESET。

## 尺寸
---

![](https://files.seeedstudio.com/wiki/BLE_Micro/img/BLE_Micro_Dimension.jpeg)

## 空中升级（Over-The-Air）
---
BLE Micro 模块有两个批次，一个带有 Nordic S110 SoftDevice 6.0 和 "DfuTarg" BLE 设备名称，另一个带有 S110 SoftDevice 7.0 和 "SD7DFU" BLE 设备名称。BLE Micro 预装了 OTA 引导程序。进入 OTA 模式的步骤如下：

1.  将 BLE Micro 的 p18 引脚连接到 GND

2.  给 BLE Micro 上电

3.  可以扫描到名为 DfuTarg（SoftDevice 6.0）或 SD7DFU（SoftDevice 7.0）的 BLE 设备

4.  使用 [nRF Master Control Panel](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp) 升级 BLE 应用

![](https://files.seeedstudio.com/wiki/BLE_Micro/img/Ota-ui.png)

## 通过 SWD 接口下载和调试
---
我们可以通过 [Arch BLE](https://www.seeedstudio.com/depot/Arch-BLE-p-1998.html) 或 J-Link，通过 SWD 接口下载和调试 BLE Micro 的新应用程序。Arch BLE 是一个 BLE Micro + CMSIS DAP 接口，提供拖放编程、调试和 USB 虚拟串口通信等功能。

![](https://files.seeedstudio.com/wiki/BLE_Micro/img/Using_arch_ble_to_flash_ble_micro.png)

## 开发应用
---
访问 [Seeedstudio mbed BLE 项目](https://github.com/Seeed-Studio/mbed_ble)（或 [SoftDevice 6.0 分支](https://github.com/Seeed-Studio/mbed_ble/tree/softdevice_v6)）开始开发。在获得自定义应用程序的 hex 文件后，可以使用 OTA 升级您的 BLE Micro。

如果您熟悉 Docker，Paul 已为您创建了一个 [Docker 容器](https://registry.hub.docker.com/u/skyplabs/ble-micro/)，可以快速设置工具链。您可以使用 [Dockerfile](https://github.com/SkypLabs/ble_micro_dockerfile) 开始。

<!-- 如果您有 [Arch BLE](https://www.seeedstudio.com/depot/Arch-BLE-p-1998.html)，您也可以使用 [ARM mbed 基于云的 IDE](https://developer.mbed.org/compiler/)。另请参阅 [Arch BLE wiki](/cn/Arch_BLE) -->

## BLE UART
---
默认情况下，BLE Micro 作为 BLE 到 UART 设备使用。它可以连接到 Android 或 iOS。

*   BLE 设备名称：nRF UART

*   UART RX：p7

*   UART TX：p8

*   UART 波特率：38400

*   Android 应用：[Google Play 上的 nRF UART](https://play.google.com/store/apps/details?id=com.nordicsemi.nrfUARTv2&amp;hl=en)

*   iOS 应用：[iTunes 上的 nRF UART](https://itunes.apple.com/us/app/nrf-uart/id614594903?mt=8)


## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BLE_Micro/res/BLE_Micro_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源
---
*   [原理图 pdf](https://files.seeedstudio.com/wiki/BLE_Micro/res/BLE_Micro.pdf)

*   [Eagle 文件](https://files.seeedstudio.com/wiki/BLE_Micro/res/BLE_Micro_v1.0.zip)

*   [Eagle 库](https://files.seeedstudio.com/wiki/BLE_Micro/res/BLE_Micro_Eagle_Library.zip)

*   [固件](https://files.seeedstudio.com/wiki/BLE_Micro/res/Ble_micro_firmware.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>