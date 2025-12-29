---
description: LoRaWAN® 网关模块 WM1302 入门指南。
title: LoRaWAN® 网关模块 WM1302
keywords:
  - wio 
  - docusaurus
image: https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.webp
slug: /cn/WM1302_module
last_update:
  date: 4/24/2025
  author: Leo
---

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_3.jpeg" alt="pir" width={600} height="auto" /></p>

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html)
> LoRaWAN® 是 LoRa Alliance® 的授权商标。
LoRa® 标识是 Semtech Corporation 或其子公司的商标。

:::note
我们最近发布了基于 Wio-E5 模块的 Wio-E5 系列。

点击[这里](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3)了解 LoRa-E5 家族的新成员，从 [Wio-E5 Module](https://wiki.seeedstudio.com/cn/LoRa-E5_STM32WLE5JC_Module/) [Grove 模块](https://wiki.seeedstudio.com/cn/Grove_LoRa_E5_New_Version/)、[迷你开发板](https://wiki.seeedstudio.com/cn/LoRa_E5_mini/)到[开发套件](https://wiki.seeedstudio.com/cn/LoRa_E5_Dev_Board/)。

要了解更多关于使用 STM32Cube MCU Package for STM32WL series(SDK) 创建 LoRaWAN® 终端节点、加入并向 LoRaWAN® 网络发送数据的信息，请阅读[迷你开发板](https://wiki.seeedstudio.com/cn/LoRa_E5_mini/)和[开发套件](https://wiki.seeedstudio.com/cn/LoRa_E5_Dev_Board/)的 wiki 页面。
:::

WM1302 模块是新一代采用 mini-PCIe 外形规格的 LoRaWAN® 网关模块。基于 Semtech® SX1302 基带 LoRaWAN® 芯片，WM1302 释放了网关产品长距离无线传输的更大潜在容量。与之前的 SX1301 和 SX1308 LoRa® 芯片相比，它具有更高的灵敏度、更低的功耗和更低的工作温度。

WM1302 LoRaWAN® 网关模块在 US915 和 EU868 频段上都有 SPI 和 USB 版本，使您能够拥有广泛的 LoRaWAN® 频率计划选择，包括 EU868、US915、AS923、AS920、AU915、KR920 和 IN865。

WM1302 模块已通过 CE、FCC 和 Telec 认证，有助于简化 LoRaWAN® 网关设备的开发和认证过程。

WM1302 专为 M2M 和 IoT 应用而设计，可广泛应用于支持 LPWAN 网关的场景。它将是您显著降低开发 LoRa® 网关设备（包括 LoRaWAN® 网关、热点等）时的技术难度和时间消耗的完美选择。

## 特性

- **采用 Semtech® SX1302 基带 LoRa® 芯片**，极低功耗和高性能。
- **采用标准 52 针金手指的 Mini-PCIe 外形规格**，易于与各种网关设备集成。
- **超低工作温度**，无需额外散热，减小 LoRaWAN® 网关的尺寸。
- **高灵敏度**，在 SX1250 TX/RX 前端下可达 -139 dBm @SF12；TX 功率在 @3.3V 下可达 26 dBm。
- **通过 CE、FCC 和 TELEC 认证**。简化最终产品认证过程。

## 硬件概述

### 原理图

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg" alt="pir" width={600} height="auto" /></p>

### 引脚图

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_2.jpeg" alt="pir" width={600} height="auto" /></p>

<br />

#### Raspberry Pi 引脚映射

<table class="tg">
<thead>
<tr>
<th class="tg-4onr">40 Pin No.(BOARD#)</th><th class="tg-ev79">Raspberry Pi GPIO(BCM#)</th><th class="tg-ev79">WM1302 Pi HAT Pinout</th>
</tr>
</thead>
<tbody>
<tr>
  <td class="tg-4onr">1</td>
  <td class="tg-f42p">3.3V</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">2</td>
  <td class="tg-f42p">5V</td>
  <td class="tg-f42p">5V</td>
</tr>

<tr>
  <td class="tg-4onr">3</td>
  <td class="tg-f42p">GPIO 2</td>
  <td class="tg-f42p">I2C_SDA</td>
</tr>

<tr>
  <td class="tg-4onr">4</td>
  <td class="tg-f42p">5V</td>
  <td class="tg-f42p">5V</td>
</tr>

<tr>
  <td class="tg-4onr">5</td>
  <td class="tg-f42p">GPIO 3</td>
  <td class="tg-f42p">I2C_SCL</td>
</tr>

<tr>
  <td class="tg-4onr">6</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">7</td>
  <td class="tg-f42p">GPIO 4</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">8</td>
  <td class="tg-f42p">GPIO 14</td>
  <td class="tg-f42p">GPS_RXD</td>
</tr>

<tr>
  <td class="tg-4onr">9</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">10</td>
  <td class="tg-f42p">GPIO 15</td>
  <td class="tg-f42p">GPS_TXD</td>
</tr>

<tr>
  <td class="tg-4onr">11</td>
  <td class="tg-f42p">GPIO 17</td>
  <td class="tg-f42p">SX1302_RESET<br />SPI version: Active HIGH<br />USB version: Active LOW</td>
</tr>

<tr>
  <td class="tg-4onr">12</td>
  <td class="tg-f42p">GPIO 18</td>
  <td class="tg-f42p">SX1262_BUSY</td>
</tr>

<tr>
  <td class="tg-4onr">13</td>
  <td class="tg-f42p">GPIO 27</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">14</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">15</td>
  <td class="tg-f42p">GPIO 22</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">16</td>
  <td class="tg-f42p">GPIO 23</td>
  <td class="tg-f42p">SX1262_DIO1</td>
</tr>

<tr>
  <td class="tg-4onr">17</td>
  <td class="tg-f42p">3.3V</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">18</td>
  <td class="tg-f42p">GPIO 24</td>
  <td class="tg-f42p">SX1262_DIO2</td>
</tr>

<tr>
  <td class="tg-4onr">19</td>
  <td class="tg-f42p">GPIO 10</td>
  <td class="tg-f42p">SPI_MOSI</td>
</tr>

<tr>
  <td class="tg-4onr">20</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">21</td>
  <td class="tg-f42p">GPIO 9</td>
  <td class="tg-f42p">SPI_MISO</td>
</tr>

<tr>
  <td class="tg-4onr">22</td>
  <td class="tg-f42p">GPIO 25</td>
  <td class="tg-f42p">GPS_RST</td>
</tr>

<tr>
  <td class="tg-4onr">23</td>
  <td class="tg-f42p">GPIO 11</td>
  <td class="tg-f42p">SPI_SCK</td>
</tr>

<tr>
  <td class="tg-4onr">24</td>
  <td class="tg-f42p">GPIO 8</td>
  <td class="tg-f42p">SX1302_CS</td>
</tr>

<tr>
  <td class="tg-4onr">25</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">26</td>
  <td class="tg-f42p">GPIO 7</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">27</td>
  <td class="tg-f42p">GPIO 0</td>
  <td class="tg-f42p">I2C_SDA(EEPROM)</td>
</tr>

<tr>
  <td class="tg-4onr">28</td>
  <td class="tg-f42p">GPIO 1</td>
  <td class="tg-f42p">I2C_SCL(EEPROM)</td>
</tr>

<tr>
  <td class="tg-4onr">29</td>
  <td class="tg-f42p">GPIO 5</td>
  <td class="tg-f42p">SX1262_RST</td>
</tr>

<tr>
  <td class="tg-4onr">30</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">31</td>
  <td class="tg-f42p">GPIO 6</td>
  <td class="tg-f42p">SX1262_CS</td>
</tr>

<tr>
  <td class="tg-4onr">32</td>
  <td class="tg-f42p">GPIO 12</td>
  <td class="tg-f42p">GPS_WAKE_UP</td>
</tr>

<tr>
  <td class="tg-4onr">33</td>
  <td class="tg-f42p">GPIO 13</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">34</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">35</td>
  <td class="tg-f42p">GPIO 19</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">36</td>
  <td class="tg-f42p">GPIO 16</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">37</td>
  <td class="tg-f42p">GPIO 26</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">38</td>
  <td class="tg-f42p">GPIO 20</td>
  <td class="tg-f42p">NC</td>
</tr>

<tr>
  <td class="tg-4onr">39</td>
  <td class="tg-f42p">GND</td>
  <td class="tg-f42p">GND</td>
</tr>

<tr>
  <td class="tg-4onr">40</td>
  <td class="tg-f42p">GPIO 21</td>
  <td class="tg-f42p">NC</td>
</tr>

</tbody>
</table>


## 规格参数

<table class="tg">
<thead>
<tr><th class="tg-4onr">区域</th><th class="tg-ev79">EU868</th><th class="tg-ev79">US915</th></tr>
</thead>
<tbody>
  <tr>
    <td class="tg-4onr">频率</td>
    <td class="tg-f42p">863-870MHz</td>
    <td class="tg-f42p">902-928MHz</td>
  </tr>
  <tr>
    <td class="tg-4onr">灵敏度</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
  </tr>
  <tr>
    <td class="tg-4onr">TX 功率</td>
    <td class="tg-f42p">26 dBm（3.3V 电源供电）</td>
    <td class="tg-f42p">25 dBm（3.3V 电源供电）</td>
  </tr>
  <tr>
    <td class="tg-4onr">LED</td>
    <td class="tg-f42p" colspan="2">电源：绿色 配置：红色 TX：绿色 RX：蓝色</td>
  </tr>
  <tr>
    <td class="tg-4onr">外形规格</td>
    <td class="tg-f42p" colspan="2">Mini PCIe，52 针金手指</td>
  </tr>
  <tr>
    <td class="tg-4onr">功耗（SPI 版本）</td>
    <td class="tg-f42p" colspan="2">待机：7.5 mA<br />TX 最大功率：415 mA<br />RX：40 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">功耗（USB 版本）</td>
    <td class="tg-f42p" colspan="2">待机：20 mA<br />TX 最大功率：425 mA<br />RX：53 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">LBT（先听后说）</td>
    <td class="tg-f42p" colspan="2">支持</td>
  </tr>
  <tr>
    <td class="tg-4onr">天线连接器</td>
    <td class="tg-f42p" colspan="2">U.FL</td>
  </tr>
  <tr>
    <td class="tg-4onr">工作温度</td>
    <td class="tg-f42p" colspan="2">-40°C 至 85°C</td>
  </tr>
  <tr>
    <td class="tg-4onr">尺寸</td>
    <td class="tg-f42p" colspan="2">30 mm（宽）× 50.95 mm（长）</td>
  </tr>
  <tr>
    <td class="tg-4onr">认证</td>
    <td class="tg-f42p" colspan="2">CE</td>
  </tr>
</tbody>
</table>

## 应用

- LPWAN 网关设备开发

- 任何长距离无线通信应用开发

- LoRa® 和 LoRaWAN® 应用学习和研究

## 尺寸

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_4.jpeg" alt="pir" width={600} height="auto" /></p>

## 入门指南

### SPI 版本和 USB 版本的区别

对于 WM1302 LoRaWAN® 网关模块 SPI 版本，Semtech SX1302 和 SX126x 芯片通过相同的 SPI 总线连接到 Raspberry Pi，使用不同的片选（CS）引脚。

对于 WM1302 LoRaWAN® 网关模块 USB 版本，Semtech SX1302 和 SX126x 芯片连接到 STM32L4 MCU，这个出厂预编程的 MCU 将作为 USB 设备工作，成为 Raspberry Pi 和 SX1302/SX126x 之间的桥梁。

### WM1302 快速入门

#### 所需硬件

- WM1302 LoRaWAN® 网关模块

- 带有 40 针 GPIO 接头的 Raspberry Pi 开发板（例如 Raspberry Pi 4B 或 Raspberry 3B+）

- 适用于 Raspberry Pi 的 WM1302 Pi Hat

- Raspberry Pi 电源适配器

- 一个 LoRa® 天线

- 一张 8G 或更大的 SD 卡和读卡器

- 如果使用 WM1302 LoRaWAN® 网关模块 USB 版本，需要一根 Type C USB 线

#### 所需软件

- [最新的 Raspberry Pi OS 镜像](https://www.raspberrypi.org/software/operating-systems/)：推荐使用 Raspberry Pi OS Lite

- [Balena Etcher](https://www.balena.io/etcher/)：用于将 Raspberry Pi OS 镜像刷写到 SD 卡

- [putty](https://www.putty.org/)：在 Windows 上通过 SSH 连接到 Raspberry Pi

<br />

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 SPI Version" label="WM1302 SPI 版本">

#### 步骤 1. 安装 WM1302 Raspberry Pi Hat 并安装 WM1302 模块

首先关闭 Raspberry Pi 电源，按照下图将 WM1302 模块插入 Pi Hat 并用螺丝固定。

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg" alt="pir" width={600} height="auto" /></p>


#### 步骤 2. 启用 Raspbian I2C 和 SPI 接口

WM1302 模块通过 SPI 和 I2C 接口与 Raspberry Pi 通信。但这两个接口在 Raspbian 中默认未启用，因此开发者需要在使用 WM1302 之前启用它们。这里，我们介绍一种命令行方式来启用 SPI 和 I2C 接口。

首先，通过 SSH 或使用显示器登录 Raspberry Pi（不要使用串行控制台，因为 Pi Hat 上的 GPS 模块占用了 Pi 的硬件 UART 引脚），然后在命令行中输入 `sudo raspi-config` 打开 Raspberry Pi 软件配置工具：

```shell
sudo raspi-config
```

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png" alt="pir" width={600} height="auto" /></p>

1. 选择 `Interface Options`

2. 选择 `SPI`，然后选择 `Yes` 启用它

3. 选择 `I2C`，然后选择 `Yes` 启用它

4. 选择 `Serial Port`，然后对"Would you like a login shell..."选择 `No`，对"Would you like the serial port hardware..."选择 `Yes`

5. 完成后，请重启 Raspberry Pi 以确保这些设置生效。

#### 步骤 3. 获取并编译 SX1302 源代码

现在让我们安装 `git` 并从 github 下载 `sx1302_hal`（SX1302 LoRa 网关的库和程序）：

```shell
sudo apt update
sudo apt install -y git
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

移动到 `sx1302_hal` 文件夹并编译所有内容：

```shell
cd ~/sx1302_hal
make
```

#### 步骤 4. 运行 Semtech SX1302 数据包转发器

将 `reset_lgw.sh` 复制到 `packet_forwarder` 文件夹，并使用文本编辑器 `nano` 修改 `reset_lgw.sh` 脚本中 SX1302 和 SX1261 的 `reset pin`：

```shell
cp tools/reset_lgw.sh packet_forwarder/
cd packet_forwarder
nano tools/reset_lgw.sh
```

您将看到默认的 `reset pin` 如下：

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=23     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=22     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

将 `SX1302_RESET_PIN`、`SX1302_POWER_EN_PIN` 和 `SX1261_RESET_PIN` 修改如下：

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=588     # SX1302 reset
SX1302_POWER_EN_PIN=589  # SX1302 power enable
SX1261_RESET_PIN=576      # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

按 `CTRL + x`，然后按 `y` 和 `Enter` 保存这些更改并关闭文本编辑器。

<br />

您也可以参考下面的完整脚本：

<details>
<summary>reset_lgw.sh</summary>

```shell
#!/bin/sh

# This script is intended to be used on SX1302 CoreCell platform, it performs
# the following actions:
#       - export/unpexort GPIO23 and GPIO18 used to reset the SX1302 chip and to enable the LDOs
#       - export/unexport GPIO22 used to reset the optional SX1261 radio used for LBT/Spectral Scan
#
# Usage examples:
#       ./reset_lgw.sh stop
#       ./reset_lgw.sh start

# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=588     # SX1302 reset
SX1302_POWER_EN_PIN=589  # SX1302 power enable
SX1261_RESET_PIN=576     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)

WAIT_GPIO() {
    sleep 0.1
}

init() {
    # setup GPIOs
    echo "$SX1302_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$SX1261_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$SX1302_POWER_EN_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$AD5338R_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO

    # set GPIOs as output
    echo "out" > /sys/class/gpio/gpio$SX1302_RESET_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$SX1261_RESET_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$SX1302_POWER_EN_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/direction; WAIT_GPIO
}

reset() {
    echo "CoreCell reset through GPIO$SX1302_RESET_PIN..."
    echo "SX1261 reset through GPIO$SX1302_RESET_PIN..."
    echo "CoreCell power enable through GPIO$SX1302_POWER_EN_PIN..."
    echo "CoreCell ADC reset through GPIO$AD5338R_RESET_PIN..."

    # write output for SX1302 CoreCell power_enable and reset
    echo "1" > /sys/class/gpio/gpio$SX1302_POWER_EN_PIN/value; WAIT_GPIO

    echo "1" > /sys/class/gpio/gpio$SX1302_RESET_PIN/value; WAIT_GPIO
    echo "0" > /sys/class/gpio/gpio$SX1302_RESET_PIN/value; WAIT_GPIO

    echo "0" > /sys/class/gpio/gpio$SX1261_RESET_PIN/value; WAIT_GPIO
    echo "1" > /sys/class/gpio/gpio$SX1261_RESET_PIN/value; WAIT_GPIO

    echo "0" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
    echo "1" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
}

term() {
    # cleanup all GPIOs
    if [ -d /sys/class/gpio/gpio$SX1302_RESET_PIN ]
    then
        echo "$SX1302_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$SX1261_RESET_PIN ]
    then
        echo "$SX1261_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$SX1302_POWER_EN_PIN ]
    then
        echo "$SX1302_POWER_EN_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$AD5338R_RESET_PIN ]
    then
        echo "$AD5338R_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
}

case "$1" in
    start)
    term # just in case
    init
    reset
    ;;
    stop)
    reset
    term
    ;;
    *)
    echo "Usage: $0 {start|stop}"
    exit 1
    ;;
esac

exit 0

```
</details>

<br />

根据您使用的模块，在相应的 `global_conf.json.sx1250.xxxxx` 中选择您首选的 LoRaWAN 网络服务器 `server_address` 和网关 EUI `gateway_ID`，并将 `up/down port` 修改为 `1700`。然后运行以下代码启动集中器：


```shell
cd ~/sx1302_hal/packet_forwarder

# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

</TabItem>
<TabItem value="WM1302 USB Version" label="WM1302 USB 版本">

#### 步骤 1. 安装 WM1302 Raspberry Pi Hat 并安装 WM1302 模块

首先关闭 Raspberry Pi 电源，按照下图将 WM1302 模块插入 Pi Hat 并用螺丝固定。使用 Type C USB 线将其 Type C 端口连接到 Raspberry Pi 的一个 USB 端口。

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg" alt="pir" width={600} height="auto" /></p>

#### 步骤 2. 启用 Raspbian I2C 和 SPI 接口

WM1302 模块通过 SPI 和 I2C 与 Raspberry Pi 通信。但这两个接口在 Raspbian 中默认未启用，因此开发者需要在使用 WM1302 之前启用它们。这里，我们介绍一种命令行方式来启用 SPI 和 I2C 接口。

首先，通过 SSH 或使用显示器登录 Raspberry Pi（不要使用串行控制台，因为 Pi Hat 上的 GPS 模块占用了 Pi 的硬件 UART 引脚），然后在命令行中输入 `sudo raspi-config` 打开 Raspberry Pi 软件配置工具：


```shell
sudo raspi-config
```

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png" alt="pir" width={600} height="auto" /></p>

1. 选择 `Interface Options`

2. 选择 `SPI`，然后选择 `Yes` 启用它

3. 选择 `I2C`，然后选择 `Yes` 启用它

4. 选择 `Serial Port`，然后对 "Would you like a login shell..." 选择 `No`，对 "Would you like the serial port hardware..." 选择 `Yes`

5. 完成后，请重启 Raspberry Pi 以确保这些设置生效。

#### 步骤 3. 获取并编译 SX1302 源代码

现在让我们安装 `git` 并从 github 下载 `sx1302_hal`（SX1302 LoRa 网关的库和程序）：

```shell
sudo apt update
sudo apt install -y git
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

进入 `sx1302_hal` 文件夹并编译所有内容：

```shell
cd ~/sx1302_hal
make
```

#### 步骤 4. 运行 Semtech SX1302 数据包转发器

要获取特定的 USB 端口，请按照以下步骤操作：

```shell
lsusb
```

在我的情况下，我们 WM1302 模块的 `Product` ID 是 `8047`

```shell
pi@raspberrypi:~/sx1302_hal/packet_forwarder $ lsusb
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 002: ID 2109:3431 VIA Labs, Inc. Hub
Bus 001 Device 003: ID 2886:8047 Seeed Technology Co., Ltd. WM1302 USB Port  
Bus 002 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
```

然后获取 `Product ID` 为 `8047` 的 USB 设备。

```shell
sudo dmesg | grep 8047
sudo modprobe cdc_acm
```

在我的情况下，USB 端口号是 `1-1.3`。

```shell
pi@raspberrypi:~/sx1302_hal/packet_forwarder $ sudo dmesg | grep 8047
[  215.459617] usb 1-1.3: New USB device found, idVendor=2886, idProduct=8047, bcdDevice= 2.00
```

现在我们可以使用以下命令获取设备端口：

```shell
sudo dmesg | grep 1-1.3
```

```shell
pi@raspberrypi:~/sx1302_hal/packet_forwarder $ sudo dmesg | grep 1-1.3
[  215.364299] usb 1-1.3: new full-speed USB device number 3 using xhci_hcd
[  215.459617] usb 1-1.3: New USB device found, idVendor=2886, idProduct=8047, bcdDevice= 2.00
[  215.459643] usb 1-1.3: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[  215.459657] usb 1-1.3: Product: WM1302 USB Port  
[  215.459669] usb 1-1.3: Manufacturer: SEEED
[  215.459680] usb 1-1.3: SerialNumber: 4E100336FF7F
[  215.543301] cdc_acm 1-1.3:1.0: ttyACM0: USB ACM device
```

所以在我的情况下，USB 设备是 `ttyACM0`。`global_conf.json.sx1250.xxxxx.USB` 中的默认 USB 设备设置是 `ttyACM0`，所以我们在这里不需要做任何事情。

如果您的设备使用其他 USB 端口，我们可以使用 `sed` 命令 `sed -i 's/search_string/replacement_string/g' filename` 来修改相应区域的 `global_conf.json.sx1250.xxxxx.USB` 配置文件。

<br />

根据您使用的模块，在相应的 `global_conf.json.sx1250.xxxxx` 中选择您首选的 LoRaWAN 网络服务器 `server_address` 和网关 EUI `gateway_ID`，并将 `up/down port` 修改为 `1700`。然后运行以下代码启动集中器：

```shell
cd ~/sx1302_hal/packet_forwarder

# Please select one of the following comands based on your module

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

</TabItem>
</Tabs>

<!-- Code END -->

---

现在，数据包转发器能够正确运行。要成功将数据转发到我们的 LoRaWAN 网络服务器（例如 TTN 或 ChripStack），我们仍需要在服务器端进行一些配置。

为此，我们需要首先将刚刚构建的 Raspberry Pi 网关注册到我们的 LoRa 网络服务器。以 [TTN](https://www.thethingsindustries.com/docs/getting-started/) 为例，登录 [TTN 控制台](https://eu1.cloud.thethings.network/console)，点击左侧面板上的 `Gateways` 按钮，然后点击 `Register gateway`。填写 `Gateway EUI`、`Gateway Server address` 和 `Frequency plan`，其他选项保持默认设置。

- **Gateway EUI：** 您网关的 64 位唯一标识符。

- **Gateway Server address：** 部署网络服务器的集群的 URL（例如 `eu1.cloud.thethings.network`）。

- **Frequency plan：** 根据您的地区配置相应的频率计划。欧洲使用 `Europe 863-870 MHz (SF9 for RX2-recommended)`，美国使用 `United States 902-928 MHz, FSB 2`。

<!-- 
![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png" alt="pir" width={600} height="auto" /></p>

<br />

成功注册网关后，按 `CTRL + c` 停止 `lora_pkt_fwd`，然后编辑并检查 `global_conf.json.sx1250.xxxx` 配置文件，确保 `"gateway_ID"` 和 `"server_address"` 条目与 LNS 中的设置完全匹配。

```json
    ...
"gateway_conf": {
    "gateway_ID": "AA555A0000000000",
    /* change with default server address/ports */
    "server_address": "eu1.cloud.thethings.network",
    "serv_port_up": 1700,
    "serv_port_down": 1700,
    ...
```

使用命令 `./lora_pkt_fwd -c global_conf.json.sx1250.xxxxx` 重启 `lora_pkt_fwd`，您应该能够发现您的 Raspberry Pi 网关已连接到 TTN。

## 常见问题

<details>
<summary>为什么即使所有设置都正确，我的设备也无法加入网络服务器？</summary>

<br />

我们观察到某些模块（WM1302-US915 USB 版本）可能由于硬件差异而无法正确传输下行数据包。要解决此问题，请将宏 `TX_JIT_DELAY`（您可以在 `/sx1302_hal/packet_forwarder/src/jitqueue.c` 中找到此宏）的值从 40000 修改为 120000，并重新编译 sx1302_hal。


</details>

## 资源

- [Semtech SX1302 数据手册](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R000000Hkyg/U8CIV3e9yI9T_aILFMxuzLNs_6_0Io1WIaksrNYyCMQ)

## 认证

- [WM1302(USB) CE 认证](https://files.seeedstudio.com/products/114992549/SHEA587_EU_Cert.pdf)
- [WM1302(SPI) CE 认证](https://files.seeedstudio.com/products/114992549/SHEA588_EU_Cert.pdf)

## 技术支持与产品讨论

请将任何技术问题提交到我们的[论坛](http://forum.seeedstudio.com/)。

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
