---
description: XIAOESP32C3-FAQ
title: Note on XIAO ESP32C3 IO allocation
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /exp32c3_d9_d6_d8
last_update:
  date: 6/28/2023
  author: cheng.tang
---


ESP32C3 has multiple boot modes, which mode to boot at power-on is controlled by GPIO2, GPIO8, and GPIO9. For example, when GPIO2=0, GPIO8=0, and GPIO9=0, C3 will enter UART_BOOT mode.
XIAO esp32c3 only pulls up GPIO9 and adds a button to control it. GPIO8 and GPIO2 are not pulled up/down, which will cause customers to enter UART_BOOT mode in some special usage scenarios, resulting in Customers cannot upload programs

### D9

The XIAO ESP32C3's D9 connects to the ESP32-C3's GPIO9 (15), pull-up resistor (R6), and BOOT button.The BOOT button (and RESET button) allows you to manually switch the ESP32-C3's Boot Mode.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/10.png" alt="pir" width={600} height="auto" /></div>

Pressing the BOOT button connects D9 to GND. **So it is better to use D9 as a switch input**.

### D6

D6 of the XIAO ESP32C3 is connected to U0TXD (28) of the ESP32-C3. The operating status of the 1st/2nd stage bootloader is output as text to U0TXD.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/11.png" alt="pir" width={400} height="auto" /></div>

D6 is set as a UART output at startup, so if you use D6 as an input, you may accidentally generate a high current. **So it is recommended to use the D6 pin only in output mode**.

However, since this D6 is a UART output, you have to be careful about a few things: one is that it is HIGH in standby mode when not communicating. The other is the text output of the 1st/2nd stage bootloader. The signal flaps HIGH/LOW immediately after start-up and must be counteracted if necessary.

So try not to use D6. (It's okay to use it after you understand it, of course.)

### D8

D8 of the Seeed Studio XIAO ESP32C3 is connected to GPIO8 (14) of the ESP32-C3.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/12.png" alt="pir" width={300} height="auto" /></div>

GPIO8 is referenced when the boot mode is set to download boot by holding down the BOOT button and must be HIGH at that time. ([Here](https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf) it says: "The strapping combination of GPIO8 = 0 and GPIO9 = 0 is invalid and will trigger unexpected behaviour.")

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/13.png" alt="pir" width={700} height="auto" /></div>

If you use download boot, **add a pullup resistor to make GPIO8 HIGH at boot time**.

A special thanks to SeeedJP colleague **matsujirushi** for testing and contributing to this section. Here is the reference link to the original article.

- [Seeed Studio XIAO ESP32C3のI/O割り付けに注意](https://lab.seeed.co.jp/entry/2023/04/03/120000)
