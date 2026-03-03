---
description: Describes differences in L4T between Seeed and NVIDIA
title: Differences in L4T between Seeed and NVIDIA
keywords:
- jetson
- BSP
- L4T
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /differences_of_l4t_between_seeed_and_nvidia
last_update:
  date: 04/05/2025
  author: Dayu
---

Seeed’s Jetson Board Support Packages (BSPs) are based on NVIDIA’s Linux for Tegra (L4T) versions 35.3.1, 35.5, 36.3, 36.4, and 36.4.3, with modifications to support Seeed’s own Jetson series products. Below are the differences between Seeed’s BSP and NVIDIA’s official BSP for each of these L4T versions.

## L4T 36.4.3

Jetson Linux 36.4.3 is part of JetPack 6.2. For this version, Seeed’s BSP includes several additional drivers and features not present in NVIDIA’s default BSP, including:

- Added support for MCP251X series CAN bus controllers.
- Added support for MCP251XFD CAN-FD controllers.
- Enabled the CRC-CCITT checksum algorithm (used by PPP and similar protocols).
- Added support for the generic Intel Wi-Fi driver.
- Enabled Intel Wi-Fi device tracing support.
- Enabled the modular operation mode for Intel Wi-Fi.
- Added support for Microchip LAN743x Gigabit Ethernet controllers.
- Enabled PPP (Point-to-Point Protocol) support.
- Enabled PPP support over asynchronous serial links.
- Added support for Realtek 88-series Wi-Fi drivers.
- Added support for the Realtek 8723D Wi-Fi chip.
- Added support for the Realtek 8723DU Wi-Fi chip.
- Added support for the Realtek 8723X series Wi-Fi chips.
- Added support for Realtek Wi-Fi devices over USB.
- Added support for TI’s TLV320AIC3X series audio codec drivers.
- Added I²C interface support for the TLV320AIC3X codec.
- Enabled the advanced debug interface for video devices.
- Added support for the MAX9296A GMSL deserializer.
- Added support for the MAX96717 GMSL deserializer.
- Added support for the MAX96724 GMSL deserializer.
- Added support for a Maxim GMSL aggregator.

## L4T 36.4

Jetson Linux 36.4 is part of JetPack 6.1. For this version, Seeed’s BSP adds additional drivers and features compared to NVIDIA’s BSP, including:

- Added support for MCP251X series CAN bus controllers.
- Added support for MCP251XFD CAN-FD controllers.
- Enabled the CRC-CCITT checksum algorithm (used by PPP and other protocols).
- Added support for the Intel Wi-Fi MVM driver module.
- Added support for the generic Intel wireless card driver.
- Enabled debug tracing functionality for Intel Wi-Fi.
- Enabled LED indicator control for Intel Wi-Fi devices.
- Enabled the Microchip LAN743x Gigabit Ethernet controller driver.
- Enabled PPP protocol support.
- Enabled PPP connections over asynchronous serial ports.
- Enabled support for Realtek 88-series wireless card core drivers.
- Added support for the Realtek 8723D Wi-Fi chip.
- Added support for the Realtek 8723DU Wi-Fi chip.
- Added support for the Realtek 8723X series Wi-Fi chips.
- Added support for the core module of the Realtek RTW88 Wi-Fi driver.
- Added support for using RTW88-series Wi-Fi adapters over USB.
- Added support for compression libraries required by PPP.
- Added support for the CH341 USB-to-serial converter chip.

## L4T 36.3

Jetson Linux 36.3 is part of JetPack 6.0. For this version, Seeed’s BSP provides additional drivers and features beyond NVIDIA’s, including:

- Added support for MCP251X series CAN bus controllers.
- Added support for MCP251XFD CAN-FD controllers.
- Enabled the CRC-CCITT checksum algorithm (used by PPP and similar protocols).
- Enabled I²C ATR (Address Translator) protocol support.
- Added support for the generic Intel wireless card driver.
- Enabled device debug tracing support for Intel Wi-Fi.
- Added support for the Microchip LAN743x Gigabit Ethernet controller.
- Added support for the core module of the Realtek 88-series Wi-Fi driver.
- Added support for the Realtek 8723D Wi-Fi chip.
- Added support for the Realtek 8723DU Wi-Fi chip.
- Added support for the Realtek 8723X series Wi-Fi chips.
- Added support for TI’s TLV320AIC3X audio codec driver.
- Added support for the I²C control interface for TLV320AIC3X.
- Added support for the MAX96717 GMSL deserializer.
- Added support for the MAX96724 GMSL deserializer.
- Added support for the MAX9296A GMSL video deserializer.
- Added support for a Maxim GMSL aggregator.
- Enabled TPM core support.
- Added support for TPM drivers over SPI interface.
- Enabled support for Infineon TPM via I²C interface.
- Enabled the SELinux security module.

## L4T 35.5

Jetson Linux 35.5 is part of JetPack 5.1.3. For this version, Seeed’s BSP adds several drivers and features and includes some configuration changes, including:

- **IMX219 camera driver:** Seeed compiles this driver into the kernel, whereas NVIDIA provides it as a loadable module.
- **IMX390 camera driver:** Seeed currently disables this driver, whereas NVIDIA compiles it into the kernel.
- **LAN743x Gigabit Ethernet controller driver:** Seeed compiles it into the kernel, whereas NVIDIA provides it as a loadable module.
- Enabled support for the TI DP83867 Ethernet PHY (physical layer) chip.
- Added support for the NXP PTN5150 USB Type-C controller chip driver.
- Added support for the Microchip LAN743x series Gigabit Ethernet chip drivers.
- Enabled the nvmem (non-volatile memory) framework, allowing drivers to access on-board storage like EEPROM/NVRAM.
- Added support for the STPMIC1 power management chip.
- Added support for the TI TPS65090 power management chip.
- Enabled the LM90 temperature sensor driver.
- Added support for NTC thermistor sensors.
- Added support for TI’s TLV320AIC3X series audio codec drivers (I²S interface).
- Added support for the TLV320AIC3X I²C control interface.
- Enabled support for the standardized USB Type-C Port Controller Interface (TCPCI).
- Added support for the MediaTek MT6370 Type-C controller driver.
- Enabled USB console device support (for serial debugging over OTG).
- Enabled the CH341 USB-to-serial adapter driver.

## L4T 35.3.1

Jetson Linux 35.3.1 is part of JetPack 5.1.1. For this version, Seeed’s BSP adds additional drivers and features and makes some modifications, including:

- Enabled the TPM hardware random number generator as one of the system entropy sources.
- Enabled the `/sys/kernel/security` mount point for use by SELinux, AppArmor, etc.
- Enabled the core TPM interface support (required for SPI/I²C TPMs).
- Added support for accessing TPM chips via the SPI bus.
- Enabled TPM support for features such as secure boot and key storage.

## Resources

- [Source code of Seeed's L4T](https://github.com/Seeed-Studio/Linux_for_Tegra)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
