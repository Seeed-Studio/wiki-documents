---
description: XIAOESP32C3-常见问题
title: 关于 XIAO ESP32C3 IO 分配的注意事项
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/exp32c3_d9_d6_d8
last_update:
  date: 6/28/2023
  author: cheng.tang
---

ESP32C3 有多种启动模式，电源开启时的启动模式由 GPIO2、GPIO8 和 GPIO9 控制。例如，当 GPIO2=0、GPIO8=0 和 GPIO9=0 时，C3 将进入 UART_BOOT 模式。XIAO esp32c3 仅对 GPIO9 上拉，并添加了一个按钮来控制它。GPIO8 和 GPIO2 没有上拉/下拉，这可能会导致客户在某些特殊使用场景中进入 UART_BOOT 模式，从而导致客户无法上传程序。

### D9

XIAO ESP32C3 的 D9 连接到 ESP32-C3 的 GPIO9 (15)、上拉电阻 (R6) 和 BOOT 按钮。BOOT 按钮（以及 RESET 按钮）允许您手动切换 ESP32-C3 的启动模式。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/10.png" alt="pir" width={600} height="auto" /></div>

按下 BOOT 按钮会将 D9 连接到 GND。**因此最好将 D9 用作开关输入**。

### D6

XIAO ESP32C3 的 D6 连接到 ESP32-C3 的 U0TXD (28)。第一阶段/第二阶段引导加载程序的运行状态以文本形式输出到 U0TXD。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/11.png" alt="pir" width={400} height="auto" /></div>

D6 在启动时被设置为 UART 输出，因此如果将 D6 用作输入，可能会意外产生高电流。**因此建议仅将 D6 引脚用作输出模式**。

然而，由于 D6 是 UART 输出，因此需要注意以下几点：一是它在非通信的待机模式下为高电平；二是第一阶段/第二阶段引导加载程序的文本输出。启动后信号会立即在高电平/低电平之间波动，如果需要，必须进行处理。

因此尽量不要使用 D6。（当然，如果您理解了它的工作原理，可以使用。）

### D8

Seeed Studio XIAO ESP32C3 的 D8 连接到 ESP32-C3 的 GPIO8 (14)。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/12.png" alt="pir" width={300} height="auto" /></div>

当通过按住 BOOT 按钮设置为下载启动模式时，会参考 GPIO8，此时必须为高电平。（[这里](https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf) 提到：“GPIO8=0 和 GPIO9=0 的组合无效，并会触发意外行为。”）

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/13.png" alt="pir" width={700} height="auto" /></div>

如果您使用下载启动模式，**请添加一个上拉电阻以确保 GPIO8 在启动时为高电平**。

特别感谢 SeeedJP 的同事 **matsujirushi** 进行测试并为本节内容做出贡献。以下是原文的参考链接。

- [Seeed Studio XIAO ESP32C3のI/O割り付けに注意](https://lab.seeed.co.jp/entry/2023/04/03/120000)