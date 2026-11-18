---
title: reTerminal and reTerminal DM FAQ
description: Frequently asked questions about the reTerminal and reTerminal DM displays, including OS flashing to eMMC, screen and touch behavior, SSH and serial console access and peripheral identification.
slug: /reterminal_faq
last_update:
  date: 11/10/2026
  author: doublelf
keywords:
  - reTerminal FAQ
  - reTerminal DM FAQ
  - reTerminal troubleshooting
  - reTerminal DM troubleshooting
  - reTerminal black screen
  - reTerminal touch screen
  - Raspberry Pi CM4
  - reTerminal flashing OS
---

<div class="recomputer-faq-page">

# reTerminal and reTerminal DM FAQ

This page contains verified answers for the reTerminal and reTerminal DM. Each answer states the product variant and firmware mode it applies to, together with the date it was last verified against current official sources.

## Before you begin

- Confirm the exact model: reTerminal or reTerminal DM, and the fitted Raspberry Pi CM4 variant.
- Check the current Raspberry Pi OS image version before applying version-specific steps.
- Answers on this page were last verified on 2026-11-10; re-check the linked official sources if you are reading this later.

<!-- RECOMPUTER_FAQ_AUTO_START -->
## Documentation & Usage {#documentation-and-usage}

### How do I get the 3D model file of the reTerminal DM (114070201)? {#reterminal-dm-3d-model}

**Applies to:** reTerminal DM (114070201), for developers who need the 3D model for structural design or enclosure validation

**Last verified:** 2026-11-01

The 3D model of the reTerminal DM (114070201) is available through the following STEP structural design file link: https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-Structural-Design-File.stp . For other design files or technical information, please contact the Seeed technical support team.

**References:**

- [reTerminal DM Structural Design File (STEP)](https://files.seeedstudio.com/wiki/reTerminalDM/reTerminal-DM-Structural-Design-File.stp)
- [reTerminal DM Hardware Guide](https://wiki.seeedstudio.com/reterminal-dm-hardware-guide/)

## OS & Firmware {#os-and-firmware}

### How can I flash Raspberry Pi OS which is originally shipped with reTerminal {#reterminal-flash-original-shipped-image}

**Applies to:** reTerminal and reTerminal DM, for restoring the factory image that originally shipped with the device

**Last verified:** 2023-11-15

For details, please click [here](https://wiki.seeedstudio.com/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal)

### How to flash Raspberry Pi OS/ 64-bit Ubuntu OS or Other OS to eMMC {#reterminal-flash-os-to-emmc}

**Applies to:** reTerminal and reTerminal DM with a compute module that has eMMC storage, for writing a system image

**Last verified:** 2023-06-21

For details, please click [here](https://wiki.seeedstudio.com/flash_different_os_to_emmc/)

### How to install reTerminal drivers after flashing new Raspberry Pi OS/ Ubuntu OS or Other OS {#reterminal-install-drivers-after-flashing}

**Applies to:** reTerminal and reTerminal DM, for installing the reTerminal drivers after a new operating system has been flashed

**Last verified:** 2023-11-15

For details, please click [here](https://wiki.seeedstudio.com/reterminal_black_screen/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os)

### How to upgrade Raspberry Pi OS and the installed packages {#reterminal-upgrade-rpios-packages}

**Applies to:** reTerminal and reTerminal DM running Raspberry Pi OS, for a routine in-place system update

**Last verified:** 2023-06-21

For details, please click [here](https://wiki.seeedstudio.com/upgrade-rpiOS_installed-packages/)

### How can I flash OS if I replace the CM4 with non-eMMC version {#reterminal-flash-os-without-emmc-cm4}

**Applies to:** reTerminal and reTerminal DM fitted with a Raspberry Pi CM4 that has no eMMC storage

**Last verified:** 2023-06-21

For details, please click [here](https://wiki.seeedstudio.com/flashing_os_on_non-eMMC_CM4_replacement/)

### I cannot wake up the reTerminal LCD after sleep {#reterminal-lcd-wakeup-after-sleep}

**Applies to:** reTerminal and reTerminal DM running Raspberry Pi OS with the reTerminal device tree overlay driver installed

**Last verified:** 2024-12-16

For details, please click [here](https://wiki.seeedstudio.com/Wakeup_reTerminal_LCD_after_sleep/)

### How can I boot an OS from USB Flash Drive {#reterminal-boot-from-usb-flash-drive}

**Applies to:** reTerminal and reTerminal DM with a compute module bootloader, for booting a system from an external USB drive

**Last verified:** 2023-06-21

For details, please click [here](https://wiki.seeedstudio.com/Boot_OS_from_USB_flash_drive/)

### How can I install Ubuntu on reTerminal? {#reterminal-install-ubuntu}

**Applies to:** reTerminal and reTerminal DM with an arm64 Ubuntu Server image written to the eMMC

**Last verified:** 2023-06-21

For details, please click [here](https://wiki.seeedstudio.com/install-ubuntu-on-reterminal/)

### The screen orientation is incorrect after installing Raspberry Pi OS Bullseye {#reterminal-screen-orientation}

**Applies to:** reTerminal and reTerminal DM with a Raspberry Pi OS Bullseye or Bookworm image and the reTerminal drivers installed

**Last verified:** 2023-11-24

For details, please click [here](https://wiki.seeedstudio.com/Incorrect_screen_orientation_on_RPiOS_Bullseye/)

### How to disable screen rotation on reTerminal {#reterminal-disable-screen-rotation}

**Applies to:** reTerminal and reTerminal DM running Raspberry Pi OS, for a fixed installation where the display must not rotate

**Last verified:** 2023-06-21

For details, please click [here](https://wiki.seeedstudio.com/disable_screen_rotation_on_reTerminal/)

### How to solve screen refresh rate is too low {#reterminal-screen-refresh-rate}

**Applies to:** reTerminal and reTerminal DM running Raspberry Pi OS, for a display that shows visible refresh stutter

**Last verified:** 2024-07-02

For details, please click [here](https://wiki.seeedstudio.com/screen_refresh_rate_low/)

## Connectivity & Networking {#connectivity-and-networking}

### Does Seeed keep the IMEI and the LTE Cat 4 EC25 4G module serial number of the delivered reTerminal or reTerminal DM devices, and how can they be obtained when the device is already deployed and cannot be read on site? {#reterminal-imei-lte-serial}

**Applies to:** reTerminal and reTerminal DM devices that have been delivered and deployed on site, for asset registration where the IMEI and the LTE Cat 4 EC25 4G module serial number have to be filled in

**Last verified:** 2026-11-01

Seeed does not keep the IMEI and the 4G module serial number of the delivered devices, so these numbers cannot be filled in from the order, the product model or the host serial number alone. The IMEI and the 4G module serial number belong to the individual device or module and have to be read from the deployed device: the end user or the on-site technician opens the device serial console or the module AT command interface and runs `AT+GSN` to query the IMEI of that 4G module; the module serial number / module ID should be obtained from the module label or through the query command of the EC25 module. Match the query results one by one with the device asset numbers before completing the registration. If the people at the device location cannot be reached right now, the local end user or on-site technician has to run the queries and send the results back; Seeed cannot restore them from the original delivery records.

1. Confirm the location, the asset number and the contact person of every deployed device.
2. The end user or the on-site technician connects to the device serial console or the 4G module AT command interface.
3. Run `AT+GSN` and record the returned IMEI; note that this command queries the IMEI and is not the same as querying the module serial number.
4. Query and record the 4G module serial number / module ID from the module label or from the command reference of the LTE Cat 4 EC25.
5. Match the IMEI, the module ID and the host asset number of every device one by one, and submit them to the device administrator to complete the registration.
6. If an on-site or remote connection cannot be arranged, the end user or on-site technician at the device location has to run the queries above.

**Success criteria:**

- The IMEI and the 4G module ID of every device have been read from the device side and registered against the asset number
- The registration record contains no number that was guessed from the order or the host serial number

**References:**

- [reTerminal DM Getting Started](https://wiki.seeedstudio.com/reterminal-dm/)

### How can I log in to Raspberry Pi OS/ Ubuntu OS or other OS using a USB to serial converter {#reterminal-usb-serial-console-login}

**Applies to:** reTerminal and reTerminal DM with the 40-pin GPIO header, for a console login without a display

**Last verified:** 2023-06-21

For details, please click [here](https://wiki.seeedstudio.com/Logging_in_OS_using_USB_to_serial_converter/)

## Hardware & Interfaces {#hardware-and-interfaces}

### How to troubleshoot the black screen issue on reTerminal {#reterminal-black-screen}

**Applies to:** reTerminal and reTerminal DM whose LCD stays black after boot, with the PWR and SYS status LEDs available for diagnosis

**Last verified:** 2023-11-15

For details, please click [here](https://wiki.seeedstudio.com/reterminal_black_screen/)

### Why there is black glue around the chips on the CM4? {#reterminal-cm4-epoxy-underfill}

**Applies to:** reTerminal and reTerminal DM with a Raspberry Pi CM4 compute module, for users who notice the black material on the board

**Last verified:** 2023-06-21

For details, please click [here](https://wiki.seeedstudio.com/black_glue_around_CM4/)

### How to solve the issue of buzzer, LEDs do not work after installing the reTerminal drivers {#reterminal-buzzer-leds-after-driver-install}

**Applies to:** reTerminal and reTerminal DM after the reTerminal driver installation has been run

**Last verified:** 2023-06-21

For details, please click [here](https://wiki.seeedstudio.com/buzzer-leds-not-work_by_drivers/)

### Troubleshooting Touch Screen Inaccuracy {#reterminal-touchscreen-inaccuracy}

**Applies to:** reTerminal and reTerminal DM running an X11 based Raspberry Pi OS image with the reTerminal touch driver installed

**Last verified:** 2023-06-21

For details, please click [here](https://wiki.seeedstudio.com/troubleshooting-touch-screen-inaccuracy/)

### How to check if the Encryption Chip is ATECC608A-SSHDA-B or ATECC608A-TNGTLSS-G {#reterminal-encryption-chip-check}

**Applies to:** reTerminal and reTerminal DM for identifying the on-board encryption coprocessor variant

**Last verified:** 2023-06-21

For details, please click [here](https://wiki.seeedstudio.com/check_Encryption_Chip/)

## Product & Service {#product-and-service}

### Can a single-unit reTerminal DM order get the Dual LAN/SSD expansion module, the NVMe M.2 2280 SSD and the Bluetooth/Wi-Fi antennas installed and tested for free before shipment? {#reterminal-dm-preinstall-expansion}

**Applies to:** reTerminal DM single-unit orders, for customers who need the Dual LAN/SSD expansion module, the NVMe M.2 2280 SSD and the Bluetooth/Wi-Fi antennas installed before shipment

**Last verified:** 2026-11-01

A single-unit order cannot get a free factory pre-assembly (including the installation and testing of the internal accessories). That service is a light customization service and only applies to orders that reach the required purchase quantity and pay the corresponding customization fees. For the current single-unit order, the device can be received in its original factory packaging; after it arrives, you can install the related accessories by following the official hardware assembly guide: https://wiki.seeedstudio.com/reterminal-dm-hardware-guide/ .

**Notes:**

- Factory pre-assembly is a light customization service that requires a certain purchase quantity and charges customization fees, so a single-unit order does not qualify for the free pre-installation and testing before shipment.
- If the order volume later reaches the customization threshold, you can ask Seeed again about the conditions that apply to the factory pre-assembly service.

**References:**

- [reTerminal DM Hardware Guide](https://wiki.seeedstudio.com/reterminal-dm-hardware-guide/)

### Can the reTerminal DM operate at an ambient temperature of -20°C, and can an ODM version be ordered in a quantity of 10 units? {#reterminal-dm-minus20-operating-temp}

**Applies to:** The standard reTerminal DM, for projects that use the device at an ambient temperature of -20°C, and for ODM customization enquiries of 10 units

**Last verified:** 2026-11-01

The operating temperature range of the standard reTerminal DM is -10°C to 50°C, so the standard model alone cannot meet an ambient temperature of -20°C. Running at -20°C requires an ODM customization with a wide-temperature display or an internal heating solution. The minimum order quantity for an ODM customization is 50 units.

**References:**

- [reTerminal DM Getting Started](https://wiki.seeedstudio.com/reterminal-dm/)

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
