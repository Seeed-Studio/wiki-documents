---
description: EdgeBox RPi 200 with LoRaWAN® Module
title: EdgeBox RPi 200 with LoRaWAN® 模块
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/EdgeBox-rpi-200-with-LoRaWAN-module
last_update:
  date: 7/14/2023
  author: Peter Pan
---

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

EdgeBox-RPi-200 系列是基于 Raspberry Pi 的一体化工业边缘计算控制器，结合了多种工业用途。设计为高可扩展性和坚固的工业硬件，配备丰富的 IO 资源，并由强大的 Raspberry Pi 工业软件生态系统支持，是智能自动化和工业物联网(IIoT)解决方案的理想选择。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## WM1302 LoRaWAN 模块

> LoRaWAN® 是在 LoRa Alliance® 许可下使用的标记。
LoRa® 标记是 Semtech Corporation 或其子公司的商标。

:::note
        我们最近发布了基于 Wio-E5 模块的 Wio-E5 系列。点击[这里](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3)了解 LoRa-E5 家族的新成员，从 [Wio-E5 模块](https://wiki.seeedstudio.com/cn/LoRa-E5_STM32WLE5JC_Module/) [Grove 模块](https://wiki.seeedstudio.com/cn/Grove_LoRa_E5_New_Version/)、[迷你开发板](https://wiki.seeedstudio.com/cn/LoRa_E5_mini/)到[开发套件](https://wiki.seeedstudio.com/cn/LoRa_E5_Dev_Board/)。要了解更多关于使用 STM32Cube MCU Package for STM32WL 系列(SDK)创建 LoRaWAN® 终端节点、加入并向 LoRaWAN® 网络发送数据的信息，请阅读[迷你开发板](https://wiki.seeedstudio.com/cn/LoRa_E5_mini/)和[开发套件](https://wiki.seeedstudio.com/cn/LoRa_E5_Dev_Board/)的 wiki 页面。
:::

WM1302 模块是新一代采用 mini-PCIe 外形规格的 LoRaWAN® 网关模块。基于 Semtech® SX1302 基带 LoRaWAN® 芯片，WM1302 为网关产品释放了更大的长距离无线传输潜力。与之前的 SX1301 和 SX1308 LoRa® 芯片相比，它具有更高的灵敏度、更低的功耗和更低的工作温度。

WM1302 LoRaWAN® 网关模块在 US915 和 EU868 频段上都有 SPI 和 USB 版本，使您能够拥有广泛的 LoRaWAN® 频率计划选择，包括 EU868、US915、AS923、AS920、AU915、KR920 和 IN865。

WM1302 模块已通过 CE、FCC 和 Telec 认证，有助于简化 LoRaWAN® 网关设备的开发和认证过程。

WM1302 专为 M2M 和 IoT 应用而设计，可广泛应用于支持 LPWAN 网关的场景。对于您开发 LoRa® 网关设备（包括 LoRaWAN® 网关、热点等）时显著降低技术难度和时间消耗，它将是一个完美的选择。

## 硬件安装

**步骤 1：** 拆卸 Edgebox-RPI-200

**步骤 2：** 将 LoRaWAN® 模块放置到 mini-PCIe 插槽上

**步骤 3：** 请重新组装 Edgebox-RPI-200，然后接通电源

**步骤 4：** 请根据您的模块版本按照以下步骤操作：

:::note
以下步骤需要直接访问 Edgebox-RPI-200 操作系统，因此请选择一种连接方法，如使用 ssh 或使用显示器、鼠标和键盘配合 `Terminal APP`，根据您的偏好选择。
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 USB Module" label="WM1302 USB Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

在 Terminal APP 或您偏好的命令行工具中

**步骤 5.** 在命令行中输入 `sudo raspi-config` 打开 Raspberry Pi 软件配置工具：

- 选择 Interface Options
- 选择 I2C，然后选择 **Yes** 启用它
- 选择 Serial Port，然后对 "Would you like a login shell..." 选择 **No**，对 "Would you like the serial port hardware..." 选择 **Yes**

完成后，请重启 Raspberry Pi 以确保这些设置生效。

**步骤 6.** 下载 [WM1302 代码](https://github.com/Lora-net/sx1302_hal) 并编译它。

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```
**步骤 7.** 复制 reset_lgw.sh 脚本

```
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**步骤 8.** 在 `global_conf.json.sx1250.US915.USB` 配置文件中替换 LoraWAN® 模块的 USB 端口：

**步骤 8-1.**
首先获取具体的 USB 端口，请按照以下步骤操作：

```sh
lsusb
```

在我的情况下，我们的 WM1302 使用的是 `STMicroelectronics Virtual COM Port`，所以我们可以获得产品 ID `5740`

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device.png"/></div>

**步骤 8-2.**

然后使用产品 ID 号 `5740` 获取 USB 设备，在这种情况下我们获得 USB 端口号 `1-1.3`：

```sh
sudo dmesg | grep 5740
```

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device-1.png"/></div>

然后我们可以获得设备端口如下：

```sh
sudo dmesg | grep 1-1.3
```

所以在我的情况下，USB 设备是 `ttyACM0`

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device-2.png"/></div>

所以让我们使用 sed 命令 `sed -i 's/search_string/replacement_string/g' filename` 修改 `global_conf.json.sx1250.US915.USB` 配置中的 USB 设备，请按照模式 `sed -i 's/ttyACM0/the_result_from_above' global_conf.json.sx1250.frequency_of_your_module.USB` 进行操作，请注意将 `the_result_from_above` 和 `frequency_of_your_module` 替换为您自己应用的值：

例如在我的情况下：

```sh
sed -i 's/ttyACM0/ttyACM0/g'  global_conf.json.sx1250.US915.USB
```

**步骤 9.** 启动 LoraWAN® 模块

然后根据您的 WM1302 工作频率版本运行以下代码来启动 LoraWAN® 模块。

```sh
USB version
$ cd ~/sx1302_hal/packet_forwarder
$ ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/lora-activate.png"/></div>

请选择您首选的 Lora® 网络服务器，并使用上图所示的 `EUI ID` 来设置连接。

</TabItem>
<TabItem value="WM1302 SPI Module" label="WM1302 SPI Module">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

**步骤 5.** 在命令行中输入 `sudo raspi-config` 打开树莓派软件配置工具：

- 选择 Interface Options
- 选择 SPI，然后选择 **Yes** 启用它
- 选择 I2C，然后选择 **Yes** 启用它
- 选择 Serial Port，然后对于"Would you like a login shell..."选择 **No**，对于"Would you like the serial port hardware..."选择 **Yes**

完成后，请重启树莓派以确保这些设置生效。

**步骤 6.** 下载 [WM1302 源代码](https://github.com/peterpanstechland/sx1302_hal.git) 并编译它。

:::note
这是 sx1302 hal 库的修改版本，因为 WM1302 模块的温度传感器在 Edgebox-RPI-200 上无法访问，所以源代码已相应修改，同时 `reset_lgw.sh` 中的引脚配置也已相应设置。
:::

```sh
cd ~/
git clone https://github.com/peterpanstechland/sx1302_hal.git
cd sx1302_hal
git checkout Edgebox-RPI-200
sudo make
```
**步骤 7.** 复制 reset_lgw.sh 脚本

```sh
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**步骤 8.** 启动 LoraWAN® 模块

然后根据您的 WM1302 工作频率版本运行以下代码来启动 LoraWAN® 模块。

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/wm1302-spi.png"/></div>

请选择您首选的 Lora® 网络服务器，并使用上图所示的 `EUI ID` 来设置连接。

</TabItem>
</Tabs>

<!-- Code END -->

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
