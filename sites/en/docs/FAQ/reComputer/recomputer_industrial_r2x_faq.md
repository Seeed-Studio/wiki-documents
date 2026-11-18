---
title: reComputer Industrial R2x series FAQ
description: Frequently asked questions about the reComputer Industrial R20xx, R21xx and R22xx series, including eMMC and SSD booting, industrial cooling, system configuration and expansion.
slug: /recomputer_industrial_r2x_faq
last_update:
  date: 11/10/2026
  author: doublelf
keywords:
  - reComputer Industrial R20xx FAQ
  - reComputer Industrial R21xx FAQ
  - reComputer Industrial R22xx FAQ
  - reComputer Industrial R2x troubleshooting
  - Raspberry Pi CM4
  - Raspberry Pi CM5
  - industrial AI NVR
---

<div class="recomputer-faq-page">

# reComputer Industrial R2x series FAQ

This page contains verified answers for the reComputer Industrial R2x series. Each answer states the product variant and firmware mode it applies to, together with the date it was last verified against current official sources.

## Before you begin

- Confirm the exact model: reComputer Industrial R20xx, R21xx or R22xx, and the fitted Raspberry Pi compute module.
- Check the current Raspberry Pi OS image version before applying version-specific steps.
- Answers on this page were last verified on 2026-11-10; re-check the linked official sources if you are reading this later.

<!-- RECOMPUTER_FAQ_AUTO_START -->
## OS & Firmware {#os-and-firmware}

### After a UPS module is added to the Raspberry Pi CM series products, the device does not power on when the power is restored immediately after a power cut. How should this be handled? {#industrial-r20xx-ups-power-cycle}

**Applies to:** reComputer Industrial R20xx (based on the Raspberry Pi CM series compute modules), with a UPS module added and the device failing to power on when the power is restored immediately after a power cut

**Last verified:** 2026-11-01

This happens because, once the UPS module is installed, the function of the UPS overlaps with the shutdown logic preset on the CM5. When this occurs, simply power the device off completely and wait until the UPS has fully discharged; the device can then be started again.

**Prerequisites:**

- The probable causes of this behaviour are:

1. The condition for a CM4/5 restart is that the voltage on the GLOBAL_EN pin stays low for more than 1 millisecond. The condition that pulls the GLOBAL_EN pin low is that the 5 V system supply drops below 1.65 V.
2. When the external power is cut, the UPS sends a shutdown signal to the CM4. If the power is restored before the UPS has fully discharged, the VDD_5_SYS voltage stays above 1.65 V, and at the same time the device has already received the shutdown command and has entered the shutdown state. In that case the GLOBAL_EN pin cannot go low, so the CM4 cannot restart.

**Notes:**

- This only happens after a UPS has been installed; in normal use it does not affect the restart of the device. It only matters when the power fails suddenly, and then you have to pay attention to when the device is restarted (restore the power after roughly 10 to 20 seconds, or 1 to 2 minutes).
- The situation can also be avoided by changing the shutdown logic in software; you can find the corresponding solution in the community: https://github.com/lucasnetau/ltc3350-ups

**References:**

- [LTC3350 SuperCap UPS Monitor](https://github.com/lucasnetau/ltc3350-ups)

### Does the reComputer Industrial R2245-12 officially support Ubuntu Server 24.04 LTS and the Hailo-8 driver? {#r2245-12-ubuntu-server-2404}

**Applies to:** reComputer Industrial R22xx (reComputer R2245-12 as an example), for cases that need to run the Hailo-8 on Ubuntu Server 24.04 LTS

**Last verified:** 2026-11-01

Installing the official Ubuntu Server 24.04 image is supported, but because the device tree files may be missing, some functions may not work correctly. It is recommended to use the official image provided by Seeed; that image ships with everything needed to run the Hailo-8 pre-installed and can be used as it is.

**References:**

- [reComputer Industrial R22xx Getting Started](https://wiki.seeedstudio.com/recomputer_industrial_r22xx_getting_start/)
- [reComputer Industrial R22xx Flash OS](https://wiki.seeedstudio.com/recomputer_industrial_r22xx_flash_os/)

## Connectivity & Networking {#connectivity-and-networking}

### Does the reComputer Industrial R21xx need an additional CAN transceiver to connect a CANopen angle sensor? {#industrial-r21xx-canopen-transceiver}

**Applies to:** reComputer Industrial R21xx, for connecting fieldbus devices such as CANopen angle sensors through the on-board CAN interface

**Last verified:** 2026-11-01

The reComputer Industrial R21xx has an isolated CAN FD transceiver on board, so no additional CAN transceiver is needed. The CAN-H, CAN-L and signal GND of the sensor can be connected directly to the CANH/CANL/GND Phoenix terminals of the device. The sensor power has to be wired separately and must not be mixed with the CAN signal lines. A 120Ω termination resistor must be fitted at each end of the CAN bus; the R21xx does not have the termination resistors built in. The interface is compatible with CAN 2.0 and supports CANopen; it is mapped as `can0`/`can1` in Linux and starts communicating once the baud rate is configured.

**References:**

- [reComputer Industrial R21xx Getting Started](https://wiki.seeedstudio.com/recomputer_industrial_R21xx_getting_start/)

### The reComputer Industrial R2245-12 has no HDMI output and the eMMC is not detected when flashing over USB. How should this be handled? {#r2245-12-usb-emmc-not-detected}

**Applies to:** reComputer Industrial R22xx (reComputer R2245-12 as an example), where the device has no HDMI output and the eMMC is not detected when flashing over USB

**Last verified:** 2026-11-01

After you enter BOOT mode and connect the board to the computer over USB, the system detects the eMMC of the R2245 automatically. First check in the Windows Device Manager whether an additional storage device appears, then use Raspberry Pi Imager to select the image and the target storage device and write it; if the option is available, rewriting a new image usually restores it. If the eMMC is still not detected, the eMMC or the CM5 may be damaged: you can open the enclosure, replace the CM5 and write the image again as a test; if the replacement succeeds, the original CM5 was damaged. Record the steps and the log during the test.

**References:**

- [reComputer Industrial R22xx Getting Started](https://wiki.seeedstudio.com/recomputer_industrial_r22xx_getting_start/)
- [reComputer Industrial R22xx Flash OS](https://wiki.seeedstudio.com/recomputer_industrial_r22xx_flash_os/)

## Hardware & Interfaces {#hardware-and-interfaces}

### How do I use the GPS function on the reComputer Industrial R2x series products? Can the 4G function be fitted with a diversity antenna? {#industrial-r2x-gps-4g-antenna}

**Applies to:** reComputer Industrial R2x series (reComputer Industrial R20xx / R21xx / R22xx), for cases that need GPS positioning or a 4G diversity antenna

**Last verified:** 2026-11-01

The GPS function of the device only works with a 4G module and a GPS antenna; the standard product does not ship with either of them. If you need the function, you can request the customization when placing the order, and Seeed will complete the pre-installation before shipment. Regarding the diversity antenna for the 4G function, the device can take at most 3 antennas at the same time.

**References:**

- [reComputer Industrial R22xx Getting Started](https://wiki.seeedstudio.com/recomputer_industrial_r22xx_getting_start/)
- [reComputer Industrial R20xx Getting Started](https://wiki.seeedstudio.com/recomputer_industrial_r20xx_getting_start/)

### Can the device still be used when a part has come loose inside, is loose, or rattles? After a return has been requested, how are the inspection and the refund handled? {#industrial-r21xx-return-inspection-refund}

**Applies to:** reComputer Industrial R21xx, for after-sales cases where an internal part has come loose, is loose or rattles and a return has been requested

**Last verified:** 2026-11-01

If you find that a part has come loose inside the device, is loose, or rattles when the device is moved, stop powering and using the device immediately, so that a short circuit or further damage to the mainboard is avoided. Do not fit the part back yourself or continue dismantling the device; hand it over to technical support or the warehouse for inspection. When handling the case, take clear close-up photos of the outer packaging label (with the barcode), the device serial number (SN), the mainboard as a whole and the place where the part came loose.

**References:**

- [reComputer Industrial R21xx Getting Started](https://wiki.seeedstudio.com/recomputer_industrial_R21xx_getting_start/)

### Neither of the two USB-A 3.2 ports of the reComputer Industrial R21 recognizes a device and the boot log keeps showing error -71. How should the fault be scoped and handled? {#industrial-r21xx-usb-a-error-71}

**Applies to:** reComputer Industrial R21xx, where neither USB-A 3.2 port recognizes a device and the boot log keeps showing error -71

**Last verified:** 2026-11-01

If the device shows a USB device descriptor read failure at about 0.8 seconds into the boot, keeps reporting error -71 (EPROTO) and finally prints "unable to enumerate USB device", and the USB5744 Hub is also not detected on the USB 3.0 bus, the hardware should be checked first. If the other units of the same batch work normally while only this unit keeps reporting the error before the user-space program starts, the fault can be attributed to a hardware failure on the USB 2.0 D+/D- signal path or on the hub circuit between the RP1 and the USB5744, rather than to an ordinary software configuration issue.

**References:**

- [reComputer Industrial R21xx Getting Started](https://wiki.seeedstudio.com/recomputer_industrial_R21xx_getting_start/)

## Thermal & Power {#thermal-and-power}

### For module products such as the PoE module and the thermal module, why does the chip fail to make contact with the cooling device during the installation? {#industrial-r2xx-module-thermal-contact}

**Applies to:** reComputer Industrial R20xx (based on the Raspberry Pi CM series compute modules), for installations of optional accessories such as the PoE module and the thermal module

**Last verified:** 2026-11-01

For this common question, please check the following: 1. whether the accessory is an accessory that fits the corresponding product; 2. whether you installed it in the correct interface; 3. whether the accessory is fully installed (the thermal pad, the enclosure and so on).

**References:**

- [reComputer Industrial R20xx Getting Started](https://wiki.seeedstudio.com/recomputer_industrial_r20xx_getting_start/)

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
