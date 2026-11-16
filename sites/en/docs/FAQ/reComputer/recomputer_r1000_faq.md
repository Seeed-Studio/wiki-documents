---
title: reComputer R1000 and R1100 FAQ
description: Frequently asked questions about the reComputer R1000 and R1100 edge controllers, including the default credentials, RS485 and BACnet communication, OS flashing and system configuration.
slug: /recomputer_r1000_r1100_faq
last_update:
  date: 11/10/2026
  author: doublelf
keywords:
  - reComputer R1000 FAQ
  - reComputer R1100 FAQ
  - reComputer R1000 troubleshooting
  - reComputer R1100 edge gateway
  - Raspberry Pi CM4
  - RS485 Modbus RTU
  - BACnet MS/TP
---

<div class="recomputer-faq-page">

# reComputer R1000 and R1100 FAQ

This page contains verified answers for the reComputer R1000 and R1100. Each answer states the product variant and firmware mode it applies to, together with the date it was last verified against current official sources.

## Before you begin

- Confirm the exact model: reComputer R1000 or reComputer R1100, and the fitted Raspberry Pi CM4 variant.
- Check the current Raspberry Pi OS image version before applying version-specific steps.
- Answers on this page were last verified on 2026-11-10; re-check the linked official sources if you are reading this later.

<!-- RECOMPUTER_FAQ_AUTO_START -->
## OS & Firmware {#os-and-firmware}

### How do I disable the USB Mass Storage / Bootloader function of the reComputer R1024-10 without root privileges? {#r1024-10-disable-usb-mass-storage}

**Applies to:** reComputer R10xx series (reComputer R1024-10 as an example), for cases where the USB Mass Storage / Bootloader capability has to be turned off without root privileges

**Last verified:** 2026-11-01

The standard reComputer R10xx products (including the R1024-10) do not provide a way to disable the USB Mass Storage / Bootloader capability without root privileges; the function is not supported in the standard firmware configuration. Technically it can be done by modifying the Linux USB driver, but that requires applying for the ODM system customization service. Please contact the Seeed sales team for the customization options.

**References:**

- [reComputer R1000 Getting Started](https://wiki.seeedstudio.com/recomputer_r/)

### How do I install Raspberry Pi OS Lite 64-bit Bookworm on the reComputer R1124-10? {#r1124-10-raspberry-pi-os-lite}

**Applies to:** reComputer R11xx series (reComputer R1124-10 as an example), for cases that need Raspberry Pi OS Lite 64-bit Bookworm

**Last verified:** 2026-11-01

There is currently no official image adapted to the Raspberry Pi OS Lite version. If you want to use an image provided officially, follow the "reComputer R1100 Flash OS" installation flow on the Seeed Studio Wiki: https://wiki.seeedstudio.com/recomputer_r1100_flash_os/ . If you still need Raspberry Pi OS Lite, you can write it directly with Raspberry Pi Imager, but because there is no device tree file, some functions may not work correctly.

**References:**

- [reComputer R1100 Flash OS](https://wiki.seeedstudio.com/recomputer_r1100_flash_os/)

## Connectivity & Networking {#connectivity-and-networking}

### Does the reComputer R1125-10 currently support the mini-PCIe Zigbee module? Can it still be purchased and deployed? {#r1125-10-mini-pcie-zigbee}

**Applies to:** reComputer R11xx series (reComputer R1125-10 as an example), for deployments that need a Zigbee module on the mini-PCIe interface

**Last verified:** 2026-11-01

The reComputer R1125-10 does not currently support the mini-PCIe Zigbee module. That module is still discontinued and is not expected to be restocked, so it cannot be bought and deployed directly as a supported configuration of the device. If the project does not have to use the mini-PCIe interface, you can consider the Zigbee 3.0 USB Dongle Plus (ZBDongle-E), which is currently available for purchase, and first confirm that its features meet the requirements for connecting Zigbee devices.

**Prerequisites:**

- Confirm whether the project has to occupy the mini-PCIe interface

**References:**

- [Sonoff Zigbee 3.0 USB Dongle Plus（ZBDongle-E）](https://www.seeedstudio.com/sonoff-zigbee-usb-dongle-plus-p-5510.html)
- [reComputer R1100 Getting Started](https://wiki.seeedstudio.com/recomputer_r1100_intro/)

### Can the reComputer ER1124-10 be replaced directly with a Laird/Ezurio BL654 (Nordic nRF52840) module and connected to an external antenna? {#er1124-10-laird-bl654-replacement}

**Applies to:** reComputer R11xx series (reComputer ER1124-10 as an example), for cases that need to replace the on-board Bluetooth with a Laird/Ezurio BL654 or to use an external antenna

**Last verified:** 2026-11-01

The Laird/Ezurio BL654 cannot replace the on-board Bluetooth of the reComputer ER1124-10 directly. The Raspberry Pi CM4 used on that board already integrates Bluetooth natively, and the BL654 cannot take over the on-board Bluetooth of the CM4. If the BL654 and an external antenna are mandatory, the BL654 can only be designed as a separate external module. There is currently no BL654 external module or external antenna compatibility solution that Seeed has verified for the ER1124-10, so this cannot be treated as an upgrade option that Seeed provides or guarantees to be compatible. Before implementing it, you have to confirm the available board interfaces, the module connection method, the driver support, the power supply and the antenna layout, and complete the full communication and RF verification.

**References:**

- [reComputer R1100 Getting Started](https://wiki.seeedstudio.com/recomputer_r1100_intro/)

### Can the reComputer R1124-10 (SKU 113991374) be used directly as a Zigbee network gateway? Is a separate Zigbee module mandatory, and can the on-board BLE replace it? {#r1124-10-zigbee-gateway}

**Applies to:** reComputer R11xx series (reComputer R1124-10, SKU 113991374, as an example), for cases that need the device to be used as a Zigbee network gateway

**Last verified:** 2026-11-01

No, it cannot be used directly. The Mini PCIe interface of the current reComputer R1124-10 does not support Zigbee, and the on-board BLE cannot act as a Zigbee radio. Although BLE and Zigbee both operate in the 2.4 GHz band, they use different wireless protocols and need incompatible hardware and software support, so the on-chip BLE cannot replace a dedicated Zigbee module. To use the device as a Zigbee gateway, a compatible dedicated Zigbee coordinator or module has to be fitted and connected through one of the host interfaces the device supports.

**References:**

- [reComputer R1100 Getting Started](https://wiki.seeedstudio.com/recomputer_r1100_intro/)

### Can the reComputer R1124-10 use the Quectel EC25-EUX 4G LTE Cat 4 module and the WM1302 SPI EU868 LoRaWAN module at the same time? {#r1124-10-ec25-wm1302-concurrent}

**Applies to:** reComputer R11xx series (reComputer R1124-10 as an example), for cases that need a 4G LTE Cat 4 module and an SPI LoRaWAN module connected at the same time

**Last verified:** 2026-11-01

Yes, the reComputer R1124-10 supports the EC25-EUX and the WM1302 SPI working at the same time: install the EC25-EUX in Mini-PCIe Slot 1 and connect it through USB HUB2 Port 4; install the WM1302 SPI in Mini-PCIe Slot 2 and connect it through SPI0 / CE1.

**References:**

- [reComputer R1100 Configure System](https://wiki.seeedstudio.com/recomputer_r1100_configure_system/)
- [reComputer R1100 Getting Started](https://wiki.seeedstudio.com/recomputer_r1100_intro/)

### What are the part number and the way to buy the 3-pin connector of the reComputer R1024 / R1025? {#r1024-r1025-3pin-connector}

**Applies to:** reComputer R10xx series (reComputer R1024 / R1025 as an example), for projects that need to select a pluggable connector for a 3-pin cable

**Last verified:** 2026-11-01

The reComputer-R1024 / R1025 ships with three 3-pin connectors that customers can use in their own designs. The connector is not listed on the Bazaar, so it cannot be bought separately.

**References:**

- [reComputer R1000 Getting Started](https://wiki.seeedstudio.com/recomputer_r/)

## Hardware & Interfaces {#hardware-and-interfaces}

### Is there an officially supported TPM module for the reComputer R1035 module, and how do I install it? {#r1035-tpm-module}

**Applies to:** reComputer R10xx series (reComputer R1035 as an example), for cases that need to add a TPM 2.0 security chip to the device

**Last verified:** 2026-11-01

Yes, but the module is not sold as a standalone item; you need to meet the requirement through customization.

**References:**

- [reComputer R1000 Getting Started](https://wiki.seeedstudio.com/recomputer_r/)

### Is there room on the R1025-10 to install the Seeed PoE add-on and the Seeed SuperCAP UPS Module (LTC3350) at the same time? {#r1025-10-poe-ups-fit}

**Applies to:** reComputer R10xx series (reComputer R1025-10 as an example), for cases that need the Seeed PoE add-on and the Seeed SuperCAP UPS Module (LTC3350) installed at the same time

**Last verified:** 2026-11-01

Yes, the R1025-10 can take the Seeed PoE add-on and the Seeed SuperCAP UPS Module (LTC3350) at the same time. For the exact installation, see the "assemble-ups-and-poe-module" section of the reComputer R1000 assembly guide: https://wiki.seeedstudio.com/recomputer_r1000_assembly_guide/ .

**References:**

- [reComputer R1000 Assembly Guide — Assemble UPS and PoE module](https://wiki.seeedstudio.com/recomputer_r1000_assembly_guide/)

### Can the reComputer R1100 power external 24 V and 12 V sensors directly, and if 220 V, 24 V and 12 V have to be used at the same time, how should the power supply be chosen? {#r1100-external-sensor-power}

**Applies to:** reComputer R11xx series (reComputer R1100 as an example), for applications that power external 24 V / 12 V sensors or use 220 V, 24 V and 12 V at the same time

**Last verified:** 2026-11-01

The reComputer R1100 series does not integrate a dedicated power output for external 12 V or 24 V sensors, so those sensors need an independent power supply. If the application needs 220 V, 24 V and 12 V at the same time, you can choose a combination of independent supplies or a suitable multi-output power supply according to the actual load, but before selecting you have to confirm the rated voltage, current or power of the sensors, their polarity, the wiring requirements, the inrush load, the exact purpose of the 220 V and the electrical safety requirements on site. 12 V and 24 V sensors normally use a DC supply, so an industrial power supply matching those output specifications should be selected, adding a DC/DC converter where needed; a transformer should not be matched to the sensors on the voltage value alone.

**References:**

- [reComputer R1100 Getting Started](https://wiki.seeedstudio.com/recomputer_r1100_intro/)

<!-- RECOMPUTER_FAQ_AUTO_END -->

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

</div>
