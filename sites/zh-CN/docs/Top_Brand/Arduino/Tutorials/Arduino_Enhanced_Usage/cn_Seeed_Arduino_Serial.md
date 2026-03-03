---
description: Seeed Arduino 串口
title: Seeed Arduino 串口
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeed_Arduino_Serial
last_update:
  date: 1/16/2023
  author: hushuxu
---
串口通信为您的 Arduino 开发板与计算机和其他设备之间的交互提供了一种简单灵活的方式。实现串口通信涉及硬件和软件两个方面。硬件在 Arduino 和与其通信的设备之间提供电气信号传输。软件使用硬件发送连接设备能够理解的字节或位。

大多数 Arduino 开发板至少有一个串口，有些具有多个串口（Arduino Mega 有 4 个串口）。

它通过数字引脚 0（RX）和 1（TX）进行通信，同时通过 USB 与计算机通信。因此，如果您在引脚 0 和引脚 D1 上连接 UART 设备，则必须在通过 USB 下载程序之前将其移除。否则会导致上传失败。

有时您需要的串口数量超过了可用硬件串口的数量。在这种情况下，您可以使用[软件串口](https://www.arduino.cc/en/Reference/SoftwareSerial)，它使用软件来模拟串口硬件。软件串口需要 Arduino 控制器的大量帮助来发送和接收数据，因此它不如硬件串口快速或高效。

某些开发板，如 Seeeduino Stalker V3.1 和 Seeeduino Ethernet，不支持 USB，需要一个[适配器](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html)来连接到您的计算机，该适配器将 TTL 转换为 USB。

!!!Warning
    TX/RX 使用 TTL 逻辑电平（5v/3.3v）。您不能将其直接连接到工作在 +/-12v 的 RS232 串口。您需要 [TTL 到 RS232 转换器](https://www.seeedstudio.com/Grove-RS232-P-2852.html)来改变电压电平。


| 开发板                                            | 微控制器 | USB 串口              | 硬件串口                                              |                                                                  |                                                         |                         |
|---------------------------------------------------|------------------|-------------------------|--------------------------------------------------------------|------------------------------------------------------------------|---------------------------------------------------------|-------------------------|
| Seeeduino V4.2, Seeeduino Lotus                   | Atmega328        | Serial                  | Serial: 0(RX), 1(TX)                                         |                                                                  |                                                         |                         |
| Seeeduino Mega                                    | Atmega2560       | Serial                  | Serial: 0(RX), 1(TX)                                         | Serial1: 19(RX), 18(TX)                                          | Serial2: 17(RX), 16(TX)                                 | Serial3: 15(RX), 14(TX) |
| Seeeduino Ethernet, Seeeduino GPRS                | Atmega328P       | 需要 USB 转 TTL 适配器 | Serial: 0(RX), 1(TX)                                         |                                                                  |                                                         |                         |
| Seeeduino GPRS                                    | Atmega32U4       | Serial                  | Serial: 0(RX), 1(TX)                                         |                                                                  |                                                         |                         |
| Seeeduino Cloud                                   | Atmega32U4       | Serial                  | Serial: 0(RX), 1(TX), Grove UART 端口和 Dragino 模块 HE  |                                                                  |                                                         |                         |
| Seeeduino Lite                                    | Atmega32U4       | Serial                  | Serial1: 0(RX), 1(TX)                                        |                                                                  |                                                         |                         |
| Seeeduino LoraWAN                                 | ATSAMD21G18      | SerialUSB               | Serial: 连接到 GPS 模块                                | Serial1: 连接到 RHF76-052AM 用于 AT 命令和 0(RX), 1(TX) | SerialDebug: 连接到 RHF76-052AM 用于固件更新 |                         |
| Seeeduino Lotus Cortex-M0+                        | ATSAMD21         | SerialUSB               | Serial: 连接到 J2 UART Grove 端口                        | Serial1: 连接到 0(RX), 1(TX)                                 |                                                         |                         |
| Wio Link                                          | ESP8266          | Serial                  | Serial:连接到 UART Grove 端口                            |                                                                  |                                                         |                         |
| Wio Tracker - GPS, BT3.0, GSM, Arduino Compatible | ATSAMD21G18A     | SerialUSB               | SerialDBG: 连接到 Grove UART 端口                        | serialMC20: 连接到 MC20                                      |                                                         |                         |
| Wio LTE Cat.1                                     | STM32F405RG      | SerialUSB               | serialDebug: 连接到 EC21                                 | Serial: 连接到 Grove UART 端口                               |                                                         |                         |
| Wio LTE Cat M1/NB-IoT Tracker                     | STM32F405RG      | SerialDebug             | SerialGrove: 连接到 Grove UART 端口                      | SerialGSM: 连接到 LTE M1/NB-IOT 模块                       | SerialGNSS: 连接到 GPS 模块                       |                         |

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>