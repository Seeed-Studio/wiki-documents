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
> LoRaWAN® 是 LoRa Alliance® 的授权使用商标。
LoRa® 商标是 Semtech Corporation 或其子公司的商标。

:::note
我们最近发布了基于 Wio-E5 模块的 Wio-E5 系列。

点击[这里](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3)了解 LoRa-E5 系列的新成员，从 [Wio-E5 模块](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/) [Grove 模块](https://wiki.seeedstudio.com/Grove_LoRa_E5_New_Version/)、[迷你开发板](https://wiki.seeedstudio.com/LoRa_E5_mini/)到[开发套件](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/)。

要了解更多关于使用 STM32Cube MCU Package for STM32WL series(SDK) 创建 LoRaWAN® 终端节点、加入并向 LoRaWAN® 网络发送数据的信息，请阅读[迷你开发板](https://wiki.seeedstudio.com/LoRa_E5_mini/)和[开发套件](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/)的 wiki 页面。
:::

WM1302 模块是新一代采用 mini-PCIe 外形规格的 LoRaWAN® 网关模块。基于 Semtech® SX1302 基带 LoRaWAN® 芯片，WM1302 为网关产品释放了更大的长距离无线传输潜力。与之前的 SX1301 和 SX1308 LoRa® 芯片相比，它具有更高的灵敏度、更低的功耗和更低的工作温度。

WM1302 LoRaWAN® 网关模块在 US915 和 EU868 频段上都有 SPI 和 USB 版本，让您可以选择广泛的 LoRaWAN® 频率计划选项，包括 EU868、US915、AS923、AS920、AU915、KR920 和 IN865。

WM1302 模块已通过 CE、FCC 和 Telec 认证，有助于简化 LoRaWAN® 网关设备的开发和认证过程。

WM1302 专为 M2M 和 IoT 应用而设计，可广泛应用于支持 LPWAN 网关的场景。它将是您显著降低开发 LoRa® 网关设备（包括 LoRaWAN® 网关、热点等）的技术难度和时间消耗的完美选择。

## 特性

- **采用 Semtech® SX1302 基带 LoRa® 芯片**，功耗极低，性能卓越。
- **采用标准 52 针金手指的 Mini-PCIe 外形规格**，易于与各种网关设备集成。
- **超低工作温度**，无需额外散热，减小 LoRaWAN® 网关的尺寸。
- **高灵敏度**，配合 SX1250 TX/RX 前端可达 -139 dBm @SF12；TX 功率在 @3.3V 时可达 26 dBm。
- **通过 CE、FCC 和 TELEC 认证**。简化最终产品认证过程。

## 硬件概述

### 图表

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/diagram.jpg" alt="pir" width={600} height="auto" /></p>

### 引脚图

<!-- ![](https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WM1302_module/WM1302_2.jpeg" alt="pir" width={600} height="auto" /></p>

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
    <td class="tg-4onr">发射功率</td>
    <td class="tg-f42p">26 dBm（3.3V电源供电）</td>
    <td class="tg-f42p">25 dBm（3.3V电源供电）</td>
  </tr>
  <tr>
    <td class="tg-4onr">LED指示灯</td>
    <td class="tg-f42p" colspan="2">电源：绿色 配置：红色 发射：绿色 接收：蓝色</td>
  </tr>
  <tr>
    <td class="tg-4onr">外形规格</td>
    <td class="tg-f42p" colspan="2">Mini PCIe，52针金手指</td>
  </tr>
  <tr>
    <td class="tg-4onr">功耗（SPI版本）</td>
    <td class="tg-f42p" colspan="2">待机：7.5 mA<br />发射最大功率：415 mA<br />接收：40 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">功耗（USB版本）</td>
    <td class="tg-f42p" colspan="2">待机：20 mA<br />发射最大功率：425 mA<br />接收：53 mA</td>
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

对于 WM1302 LoRaWAN® 网关模块 SPI 版本，Semtech SX1302 和 SX126x 芯片通过相同的 SPI 总线连接到树莓派，使用不同的片选(CS)引脚。

对于 WM1302 LoRaWAN® 网关模块 USB 版本，Semtech SX1302 和 SX126x 芯片连接到一个 STM32L4 MCU，这个出厂预编程的 MCU 将作为 USB 设备工作，成为树莓派和 SX1302/SX126x 之间的桥梁。

### WM1302 快速入门

#### 所需硬件

- WM1302 LoRaWAN® 网关模块

- 带有 40 引脚 GPIO 接头的树莓派板（例如树莓派 4B 或树莓派 3B+）

- 用于树莓派的 WM1302 Pi Hat

- 树莓派电源适配器

- 一个 LoRa® 天线

- 一张 8G 或更大的 SD 卡和读卡器

- 如果使用 WM1302 LoRaWAN® 网关模块 USB 版本，需要一根 Type C USB 线

#### 所需软件

- [最新的树莓派操作系统镜像](https://www.raspberrypi.org/software/operating-systems/)：推荐使用 Raspberry Pi OS Lite

- [Balena Etcher](https://www.balena.io/etcher/)：用于将树莓派操作系统镜像刷写到 SD 卡

- [putty](https://www.putty.org/)：在 Windows 上通过 SSH 连接到树莓派

#### 步骤1. 安装 WM1302 树莓派 Hat 并安装 WM1302 模块

在树莓派 40 引脚接头上安装 Pi Hat 很容易。首先关闭树莓派电源，将 WM1302 模块插入 Pi Hat，如下图所示，并用螺丝固定。

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki1.jpg" alt="pir" width={600} height="auto" /></p>
如果使用 USB 版本的 WM1302 模块，请同时用 Type C USB 线将其 Type C 端口连接到树莓派 USB 端口。

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki2.jpg" alt="pir" width={600} height="auto" /></p>

#### 步骤2. 启用 Raspbian I2C 和 SPI 接口

WM1302 模块通过 SPI 和 I2C 与树莓派通信。但这两个接口在 Raspbian 中默认未启用，因此开发者需要在使用 WM1302 之前启用它们。这里，我们介绍一种命令行方式来启用 SPI 和 I2C 接口。

首先，通过 SSH 登录树莓派或使用显示器（不要使用串行控制台，因为 Pi Hat 上的 GPS 模块占用了 Pi 的硬件 UART 引脚），然后在命令行中输入 `sudo raspi-config` 打开树莓派软件配置工具：

```shell
sudo raspi-config
```

<!-- ![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki3.png" alt="pir" width={600} height="auto" /></p>

1. 选择 `Interface Options`

2. 选择 `SPI`，然后选择 `Yes` 来启用它

3. 选择 `I2C`，然后选择 `Yes` 来启用它

4. 选择 `Serial Port`，然后对于"Would you like a login shell..."选择 `No`，对于"Would you like the serial port hardware..."选择 `Yes`

5. 完成后，请重启树莓派以确保这些设置生效。

#### 步骤3. 获取并编译SX1302源代码

现在让我们安装 `git` 并从github下载 `sx1302_hal`（SX1302 LoRa网关的库和程序）：

```shell
sudo apt update
sudo apt install -y git
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

Move to `sx1302_hal` folder and compile everything:

```shell
cd ~/sx1302_hal
make
```

#### 步骤4. 运行 Semtech SX1302 数据包转发器

:::caution 注意
在新的 Linux 内核中，**sysfs 接口**已被**chardev 接口**替代。

这导致 sx_1302 仓库中提供的 reset_lgw.sh 无法正确重置模块，并输出以下日志：

```shell
...
./reset_lgw.sh: 26: echo: echo: I/O error
./reset_lgw.sh: 27: echo: echo: I/O error
./reset_lgw.sh: 28: echo: echo: I/O error
./reset_lgw.sh: 29: echo: echo: I/O error
./reset_lgw.sh: 32: cannot create /sys/class/gpio/gpio17/direction: Directory nonexistent
./reset_lgw.sh: 33: cannot create /sys/class/gpio/gpio5/direction: Directory nonexistent
./reset_lgw.sh: 34: cannot create /sys/class/gpio/gpio18/direction: Directory nonexistent
./reset_lgw.sh: 35: cannot create /sys/class/gpio/gpio13/direction: Directory nonexistent
CoreCell reset through GPIO17...
SX1261 reset through GPIO17...
CoreCell power enable through GPIO18...
CoreCell ADC reset through GPIO13...
./reset_lgw.sh: 45: cannot create /sys/class/gpio/gpio18/value: Directory nonexistent
./reset_lgw.sh: 47: cannot create /sys/class/gpio/gpio17/value: Directory nonexistent
./reset_lgw.sh: 48: cannot create /sys/class/gpio/gpio17/value: Directory nonexistent
./reset_lgw.sh: 50: cannot create /sys/class/gpio/gpio5/value: Directory nonexistent
./reset_lgw.sh: 51: cannot create /sys/class/gpio/gpio5/value: Directory nonexistent
./reset_lgw.sh: 53: cannot create /sys/class/gpio/gpio13/value: Directory nonexistent
./reset_lgw.sh: 54: cannot create /sys/class/gpio/gpio13/value: Directory nonexistent
...
```

To determine if the system you are running on still has the **sysfs interface**, you can run the following command:

```shell
ls /sys/class/gpio
```

:::

**对于带有 sysfs 接口的 Linux：**

如果其中出现一系列 `gpiox` 文件夹，这意味着您的系统内核仍然具有 **sysfs 接口**，您可以使用上面的脚本来重置模块。

使用文本编辑器 `nano` 在 `reset_lgw.sh` 脚本中修改 SX1302 和 SX1261 的 `reset pin`：

```shell
nano tools/reset_lgw.sh
```

以下代码显示在文本编辑器的开头：

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=23     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=22     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

使用导航键移动光标，将 `SX1302_RESET_PIN=23` 改为 `SX1302_RESET_PIN=17`，将 `SX1261_RESET_PIN=22` 改为 `SX1261_RESET_PIN=5`，如下所示：

```shell
# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=17     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=5      # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

通过按 `CTRL + x`，然后按 `y`，最后按 `Enter` 来保存这些更改以关闭文本编辑器。

**对于没有 sysfs 接口的 Linux：**

如果其中没有名为 `gpiox` 的文件夹，那么您需要使用 **Libgpiod 包**来调用 GPIO。

使用 Libgpiod 包控制 GPIO 的 reset_lgw.sh 脚本如下：

<details>
<summary>reset_lgw.sh</summary>

```shell
SX1302_RESET_PIN=17     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=5     # SX1261 reset (LBT / Spectral Scan)


WAIT_GPIO() {
    sleep 0.1
}

reset() {
    echo "CoreCell reset through GPIO$SX1302_RESET_PIN..."
    echo "SX1261 reset through GPIO$SX1261_RESET_PIN..."
    echo "CoreCell power enable through GPIO$SX1302_POWER_EN_PIN..."

    # write output for SX1302 CoreCell power_enable and reset
    gpioset gpiochip0 $SX1302_POWER_EN_PIN=1; WAIT_GPIO
    
    gpioset gpiochip0 $SX1302_RESET_PIN=1; WAIT_GPIO
    gpioset gpiochip0 $SX1302_RESET_PIN=0; WAIT_GPIO

    gpioset gpiochip0 $SX1261_RESET_PIN=0; WAIT_GPIO
    gpioset gpiochip0 $SX1261_RESET_PIN=1; WAIT_GPIO
}

case "$1" in
    start)
    reset
    ;;
    stop)
    reset
    ;;
    *)
    echo "Usage: $0 {start|stop}"
    exit 1
    ;;
esac

exit 0
```

</details>

将 `reset_lgw.sh` 复制到 `packet_forwarder` 文件夹，然后运行 `lora_pkt_fwd`。请注意，您应该根据所使用的模块选择一个 `global_conf.json.sx1250.xxxx` 配置文件：

```shell
cp tools/reset_lgw.sh packet_forwarder/
cd packet_forwarder

# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915

# for WM1302 LoRaWAN Gateway Module (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

现在，数据包转发器能够正确运行。但是如果开发者需要将 LoRa® 数据包转发到他们的 LoRa® 服务器（例如 TTN 或 chirpstack），仍有一些工作要做。

为了实现这个目标，开发者必须首先将树莓派网关添加到 LoRa 服务器。以 [TTNv3](https://www.thethingsindustries.com/docs/getting-started/) 为例，登录 [TTNv3 控制台](https://eu1.cloud.thethings.network/console)，点击 `Go to gateways` 然后点击 `Add gateway`，在 `Add gateway` 页面中你会发现有许多设置需要填写。你需要关注的是 `Gateway EUI`、`Gateway Server address` 和 `Frequency plan`，其他的保持默认即可。

- `Gateway EUI`：你的网关的 64 位扩展唯一标识符，在本 wiki 中我们将其设置为 `AA555A0000000000`

- `Gateway Server address`：网关将连接到的服务器地址，将其复制到剪贴板，开发者稍后需要将其保存到配置文件中

- `Frequency plan`：如果使用 EU868 模块，选择 `Europe 863-870 MHz (SF9 for RX2)`，如果使用 US915 模块，选择 `United States 902-928 MHz, FSB 2`
<!-- 
![](https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/114992549/WM1302_Wiki4.png" alt="pir" width={600} height="auto" /></p>
添加网关后，回到树莓派，按 `CTRL + c` 停止 `lora_pkt_fwd`，然后使用文本编辑器 `nano` 编辑刚才使用的 `global_conf.json.sx1250.xxxx` 配置文件：

```shell
# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
nano global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
nano global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
nano global_conf.json.sx1250.US915

# for WM1302 LoRaWAN Gateway Module (USB) - US915
nano global_conf.json.sx1250.US915.USB
```

基本上，您需要修改这些参数：`"gateway_ID" "server_address" "serv_port_up" "serv_port_down"`，这些参数可以在配置文件的末尾找到。将 `Gateway Server address` 复制到 `"server_address"`，将 `"serv_port_up"` 和 `"serv_port_down"` 更改为 `1700`，这些参数应该这样编辑：

```json
"gateway_conf": {
    "gateway_ID": "AA555A0000000000",
    /* change with default server address/ports */
    "server_address": "eu1.cloud.thethings.network",
    "serv_port_up": 1700,
    "serv_port_down": 1700,
```

按 `CTRL + x` 保存这些更改，然后按 `y`，最后按 `Enter` 关闭文本编辑器。

重启 `lora_pkt_fwd`，您将发现您的树莓派网关已连接到 TTNv3。

```shell
# Please select one of the following comands based on your module
# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

# for WM1302 LoRaWAN Gateway Module (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

# for WM1302 LoRaWAN Gateway Module (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915

# for WM1302 LoRaWAN Gateway Module (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

## 资源

- [Semtech SX1302 数据手册](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R000000Hkyg/U8CIV3e9yI9T_aILFMxuzLNs_6_0Io1WIaksrNYyCMQ)

## 证书

- [WM1302(USB) CE 证书](https://files.seeedstudio.com/products/114992549/SHEA587_EU_Cert.pdf)
- [WM1302(SPI) CE 证书](https://files.seeedstudio.com/products/114992549/SHEA588_EU_Cert.pdf)

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
