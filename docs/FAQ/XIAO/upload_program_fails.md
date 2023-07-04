---
description: XIAO-FAQ
title: How to solve the issue of buzzer, LEDs do not work after installing the reTerminal drivers
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
# slug: /reterminal_black_screen
last_update:
  date: 6/21/2023
  author: Seraphina
---

If you encounter issues such as program **upload failures**, **abnormal program behavior**, or **device port not found errors**, you can find solutions in this Wiki. Different models of XIAO have **different** troubleshooting methods, so please choose the corresponding solution for your model.

:::successQuick browse
Here are the troubleshooting methods for upload failures, abnormal program behavior, or device port not found errors for various types of XIAO:

<!-- - [XIAO SAMD21]()
- [XIAO RP2040]()
- XIAO nRF52840(Sense)
- XIAO ESP32C3
- XIAO ESP32S3(Sense) -->

:::

## For XIAO SAMD21

### **Enter Bootloader Mode**

Sometimes the Seeed Studio XIAO SAMD21 port may disappear when user programming process fails. we can solve this problem by the following operation:

- Connect the Seeed Studio XIAO SAMD21 to your computer.
- Use tweezers or short lines to short the RST pins in the diagram twice.
- The orange LED lights flicker on and light up.

At this point, the chip enters Bootloader mode and the burn port appears again. Because the samd21 chip has two partitions, one is the Bootloader and the other is the user program. The product will burn a bootloader code in the system memory when it leaves the factory. We can switch modes by performing the above steps.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

### **Reset**

If you want to reset the Seeed Studio XIAO SAMD21 , perform the following steps:

- Connect the Seeed Studio XIAO SAMD21 to your computer.
- Use tweezers or short lines to short the RST pins **only once**
- The orange LED lights flicker on and light up.

Please note: The behavior of the built-in LED is reversed to the one on an Arduino. On the Seeed Studio XIAO SAMD21 , the pin has to be pulled low, whereas on other micro-controllers it has to be pulled high.
