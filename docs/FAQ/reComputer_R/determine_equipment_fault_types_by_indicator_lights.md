---
description: reComputer-FAQ
title: When the device fails to power on, how can the fault cause be identified through the LED indicator lights
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /determine_equipment_fault_types_by_indicator_lights
last_update:
  date: 1/5/2026
  author: Nolan Chen
---



When the device fails to power on, the core troubleshooting method is to diagnose by **combining the statuses of the PWR LED and ACT LED**, following these steps:

- **Step 1.** Check the status of the PWR LED:
If the PWR LED is off: Prioritize troubleshooting the power supply (refer to the steps in Q5) instead of assuming a boot failure.
If the PWR LED is solid green: It indicates the device is powered on, and the fault lies in the boot process (e.g., system, firmware, or hardware issues).  

- **Step 2.** Check the status of the ACT LED (only when the PWR LED is on but the device fails to boot):
If the ACT LED does not blink at all: The EEPROM code may be corrupted. Disconnect all external peripherals (e.g., SSD, expansion modules), retain only the power supply and HDMI connection, then power the device on again for testing. If the issue persists, contact after-sales support for motherboard inspection.
If the ACT LED blinks in a regular pattern: Decode the fault by referring to the ACT Status Table in the documentation.

| Long flashes | Short flashes | Status                               |
|--------------|---------------|--------------------------------------|
| 0            | 3             | Generic failure to boot              |
| 0            | 4             | start*.elf not found                 |
| 0            | 7             | Kernel image not found               |
| 0            | 8             | SDRAM failure                        |
| 0            | 9             | Insufficient SDRAM                   |
| 0            | 10            | In HALT state                        |
| 2            | 1             | Partition not FAT                    |
| 2            | 2             | Failed to read from partition        |
| 2            | 3             | Extended partition not FAT           |
| 2            | 4             | File signature/hash mismatch - Pi 4  |
| 4            | 4             | Unsupported board type               |
| 4            | 5             | Fatal firmware error                 |
| 4            | 6             | Power failure type A                 |
| 4            | 7             | Power failure type B                 |

- **Step 3.** If the ACT LED blinks irregularly: It means the boot process has initiated but got stuck midway. Troubleshoot compatibility issues with external devices (e.g., SSD, expansion modules) by disconnecting them and retrying.


