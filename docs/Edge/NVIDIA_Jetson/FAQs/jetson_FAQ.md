---
description: Jetson-FAQ
title: FAQs for Jetson Usage
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Jetson_FAQ
last_update:
  date: 7/5/2023
  author: Seraphina
---


This document contains all the frequently asked questions related to Jetson series products. This will be very helpful if you are suffering from any issues when using the Jetson.

#### Q1: Troubleshooting Installation

For details, please click [here](/Troubleshooting_Installation)

#### Q2: The remaining space in the eMMC in the received reComputer is only about 2GB, how to solve the problem of insufficient space?

For details, please click [here](/solution_of_insufficient_space)

#### Q3: How to solve the compatibility issue between reComputer and VEYE camera?

For details, please click [here](/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera)

#### Q4: How to solve the compatibility issue between IMX477 Camera and A603 carrier board?

For details, please click [here](/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board)

#### Q5: How to get the system log of reComputer J30/J40?

For details, please click [here](/get_the_system_log_of_recomputer_j30_and_j40)

#### Q6: Timeout issue during flash Jetpack.

For details, please click [here](/usb_timeout_during_flash)

#### Q7: I cannot use USB-A port, Ethernet port or no HDMI dispaly after flashing the device.
**A:** Please check file integrity (for instance, we provided the SHA256 cheksums), for some carrier boards (especially A60X series), make sure that the driver patch was successfully copied/applied to **Linux_for_tegra** directory. There are files that require **sudo** permission, and when you copy directories, make sure **-r** parameter is included in your command.

#### Q8: My system crashed/unable to boot/black screen/lost peripheral drivers after I execute "sudo apt-get update && sudo apt-get upgrade" commands.
**A:** These issues can be concluded as **"Why can't I upgrade the system with apt upgrade on custom carrier boards?"** The short answer is: **Do not** run the apt upgrade command on **custom/third-party** carrier boards. Additionally, avoid running any scripts that include apt upgrade commands or using GUI updater tools in Ubuntu. Debian packages from the server do not account for the specific design of our custom boards, and forcing the upgrade can cause incompatibilities that may brick your device. This process is only compatible with the official devkit. To solve these issues, please follow our guide to reflash the JetPack.

#### Q9: How can I upgrade software packages if you told me that I cannot execute apt upgrade? Will there be security risks if I don't upgrade the software?

For details, please click [here](/upgrade_software_packages_for_jetson)

<!-- #### Q10: How to use the OTA (Over-the-Air) method to upgrade the system version of the Jetson device. -->

<!-- For details, please click [here](/updating_jetpack_with_ota) -->

#### Q11: What modifications does Seeed make to NVIDIA's Jetson BSP.

For details, please click [here](/differences_of_l4t_between_seeed_and_nvidia)

#### Q12: How to enable the SPI interface on Jetson-nano?
For details, please click [here](/enable_spi_interface_on_jetsonnano)

#### Q13: Why is it that sometimes after completing the flashing process on Jetson, the system fails to boot from the SSD?
This issue currently occurs when flashing JetPack 5, and NVIDIA has officially documented it. For the solution, please click [here.](/issue_of_jetpack5_failing_to_boot_from_certain_ssd)

#### Q14:How to Build the Source Code Project for Seeed's Jetson BSP?
For details, please click [here](/how_to_build_the_source_code_project_for_seeed_jetson_bsp)

## Tech support

Thank you for choosing our products! We are **here** to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
