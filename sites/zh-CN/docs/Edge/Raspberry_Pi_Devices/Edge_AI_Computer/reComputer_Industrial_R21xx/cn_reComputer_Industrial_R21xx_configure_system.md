---
description: 了解在安装设备后如何在 reComputer Industrial R21xx 系列上配置和测试硬件组件。本 Wiki 涵盖 GPIO 映射、USER LED 测试、SPI 通信、Wi-Fi 和蓝牙扫描、LoRa®、5G，4G、RS485、RS232、DI/DO 测试以及用于安全关机的 UPS。
title: 配置 reComputer Industrial R21xx
keywords:
  - Raspberry pi
  - Edge Controller
  - reComputer Industrial R21xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg
slug: /recomputer_industrial_R21xx_configure_system
last_update:
  date: 09/28/2025
  author: Nolan Chen
createdAt: '2025-09-28'
updatedAt: '2025-12-16'
url: https://wiki.seeedstudio.com/cn/recomputer_industrial_R21xx_configure_system/
---

## 概述

了解在安装设备后如何在 reComputer Industrial R21xx 系列上配置和测试硬件组件。本 Wiki 涵盖 GPIO 映射、USER LED 测试、SPI 通信、Wi-Fi 和蓝牙扫描、LoRa®、4G、5G、RS485、RS232、CAN、DI/DO 测试、用于安全关机的 UPS 等内容。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 查询 GPIO 映射和偏移

要查询 GPIO 映射和偏移，请按照以下步骤操作：

1. 复制并粘贴以下命令以查询 GPIO 映射：

```bash
cat /sys/kernel/debug/gpio
```

**此命令将显示 GPIO 映射和偏移**，为调试或配置 GPIO 引脚提供关键信息。

## USER LED 测试

我们为用户提供了红、蓝和绿三种颜色的 LED。你可以进入 /sys/class/leds/ 目录进行查看：

**1. 进入 LED 目录**  

```bash
cd /sys/class/leds/
ls
```

使用以下命令点亮对应颜色的 LED。

```bash
sudo su
echo 1 > /sys/class/leds/led-red//brightness
echo 1 > /sys/class/leds/led-blue/brightness
echo 1 > /sys/class/leds/led-green/brightness
```

这将**点亮**对应的 LED。

**3. 关闭 LED（可选）**  
要**关闭**某个特定 LED，请使用：

```bash
echo 0 > /sys/class/leds/led-red/brightness
echo 0 > /sys/class/leds/led-blue/brightness
echo 0 > /sys/class/leds/led-green/brightness
```

## 测试 SPI 通信

要通过短接 TPM 模块的 MISO 和 MOSI 引脚来测试 SPI 通信，请按照以下步骤操作：

1. 克隆 spidev-test 仓库：

```bash
# Don't forget to connect to network before running command
git clone https://github.com/rm-hull/spidev-test.git
```

2. 进入 spidev-test 目录：

```bash
cd spidev-test
```

3. 编译 spidev_test.c 文件：

```bash
gcc spidev_test.c -o spidev_test
```

4. 使用以下命令运行 spidev_test 程序：

```bash
./spidev_test -D /dev/spidev10.0 -v -p hello
```

此命令在指定的 SPI 设备（**/dev/spidev10.0**）上测试 SPI 通信，使用详细输出（ -v ），并发送消息 "hello"（**-p hello**）。
通过短接 TPM 模块的 MISO 和 MOSI 引脚，你实际上创建了一个回环场景，其中 MOSI 发送的数据会在 MISO 上被接收。此设置允许你在没有实际设备连接的情况下测试 SPI 通信。

## Wi-Fi 扫描

要列出可用的 Wi-Fi 网络及其详细信息，请运行：  

```bash
sudo iwlist wlan0 scan
```

- 此命令会扫描附近所有 Wi-Fi 网络，并显示其 SSID、信号强度和加密类型。  

## 蓝牙扫描  

要扫描蓝牙设备，请按照以下步骤操作：  

**打开蓝牙控制界面：**  

```bash
sudo bluetoothctl
```

此命令将打开蓝牙控制界面。在这里，你可以运行其他命令来扫描附近的蓝牙设备。

**启用扫描：**  

```bash
scan on
```

此命令将开始扫描附近的蓝牙设备。然后你可以在 ***bluetoothctl*** 界面中使用其他命令与蓝牙设备交互，例如配对或连接它们。

## 通过 Mini-PCIe 使用 LoRa®

### LoRa® SPI 配置  

在将 LoRa® SPI 安装到 Mini-PCIe 插槽 2 后，可以按以下步骤配置 LoRa® SPI：

1. 克隆 **SX1302_HAL** 仓库：

```bash
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
```

2. 进入克隆的目录：

```bash
cd sx1302_hal
```

3. 修改配置文件：

打开 I2C 设备配置文件：  

```bash
sudo nano ./libloragw/inc/loragw_i2c.h
```

将此行修改为：  

```c
#define I2C_DEVICE "/dev/i2c-1"
```

修改为：  

```c
#define I2C_DEVICE "/dev/i2c-2"
```

将 **#define I2C_DEVICE "/dev/i2c-1"** 修改为 **#define I2C_DEVICE "/dev/i2c-2"。**
按下 **ctrl+x** 退出，按下 **y** 保存更改，然后按下 **Enter** 返回命令行页面。

4. 4.添加 packet_forwarder/reset_lgw.sh 文件：

```bash
sudo nano packet_forwarder/reset_lgw.sh
```

添加执行代码：

```bash
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

SX1302_RESET_PIN=632     # SX1302 reset
SX1302_POWER_EN_PIN=633  # SX1302 power enable
SX1261_RESET_PIN=634     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=623    # AD5338R reset (full-duplex CN490 reference design)

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

按下 **ctrl+x** 退出，按下 **y** 保存更改，然后按下 **Enter** 返回命令行页面。

5. 修改配置代码：

```bash
sudo vim ./tools/reset_lgw.sh
```

更新引脚配置：

```bash
SX1302_RESET_PIN=632     # SX1302 reset
SX1302_POWER_EN_PIN=633  # SX1302 power enable
SX1261_RESET_PIN=634     # SX1261 reset (LBT / Spectral Scan)
# AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

分别注释掉第 18、29、35、42、53 和 54 行：

```bash
......
# echo "$AD5338R_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
......
# echo "out" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/direction; WAIT_GPIO
......
# echo "CoreCell ADC reset through GPIO$AD5338R_RESET_PIN..."
......
# echo "0" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
# echo "1" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
```

按下  ctrl+x  退出，按下  y  保存更改，然后按下  Enter  返回命令行页面。

6. 在 global_conf.json.sx1250.US915 配置文件中替换 LoraWAN® 模块的默认 SPI 端口（配置文件根据你使用的模块进行选择）：

```bash
sudo nano packet_forwarder/global_conf.json.sx1250.US915
```

修改 com_path 参数，将  ***"com_path": "/dev/spidev0.0"*** 更改为  ***"com_path": "/dev/spidev2.0"***。

7. 编译代码：

```bash
sudo make
```

这些步骤将配置 LoRa® SPI，并使用指定的配置文件运行数据转发程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.7.1_lora_spi_1.png" style={{width:800, height:'auto'}}/></div>

### LoRa® USB 配置

对于 LoRa® USB，前面的命令与 LoRa® SPI 相同。但最后一条命令需要更改为：

```bash
cho  632  >  /sys/class/gpio/export
echo  "out"  >  /sys/class/gpio/gpio632/direction
echo  "1"  >  /sys/class/gpio/gpio632/value

sudo  ./lora_pkt_fwd  -c  global_conf.json.sx1250.EU868.USB
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.7.2_lora_usb_1.png" style={{width:800, height:'auto'}}/></div>

此命令指定用于 LoRa® USB 的配置文件。

## 通过 M.2 B-KEY 使用 5G 蜂窝网络

要通过 minicom 使用 AT 命令与 5G/4G 模块交互，请按照以下步骤操作：

1. 新建 power_5g.sh 文件：

```bash
nano power_5g.sh
```

使用 sudo nano 打开并输入以下命令，然后按 ***ctrl+x*** 保存并退出。

```bash
#!/bin/bash

RESET_PIN=645
POWER_PIN=639

if [ ! -d "/sys/class/gpio/gpio$RESET_PIN" ]; then
    echo $RESET_PIN > /sys/class/gpio/export
fi

if [ ! -d "/sys/class/gpio/gpio$POWER_PIN" ]; then
    echo $POWER_PIN > /sys/class/gpio/export
fi

echo "out" > /sys/class/gpio/gpio$RESET_PIN/direction
echo "out" > /sys/class/gpio/gpio$POWER_PIN/direction

echo 1 > /sys/class/gpio/gpio$RESET_PIN/value
echo 1 > /sys/class/gpio/gpio$POWER_PIN/value

echo "Start to reboot 5g module"

echo 0 > /sys/class/gpio/gpio$RESET_PIN/value
sleep 0.05
echo 0 > /sys/class/gpio/gpio$POWER_PIN/value

echo "5g module reboot completed"
```

2. 执行该文件：

```bash
sudo ./power_5g.sh
```

10-15 秒后（模块上电并枚举 USB 需要一段时间），检查设备节点是否出现：

```bash
ls /dev/ttyUSB*
```

输出 /dev/ttyUSB0 等：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.8_5g_cellular_over_m.2_b-key_1.png" style={{width:800, height:'auto'}}/></div>
使用合适的串口和波特率打开 minicom：

```bash
sudo apt update
sudo apt install minicom
sudo minicom -D /dev/ttyUSB2 -b 115200
```

该命令以指定的串口（***/dev/ttyUSB2***）和 115200 的波特率打开 minicom。

1. 打开 minicom 后，你可以开始向 4G 模块发送 AT 指令。例如：

```bash
AT
```

该命令用于检查模块是否有响应。如果模块工作正常，你应当收到 ***"OK"*** 的响应。

2. 要使用 4G 模块拨打电话号码，可以使用 ATD 命令并在后面加上电话号码：

```bash
ATD<phone_number>;
```

将 **phone_number** 替换为你想要拨打的目标电话号码。
请确保在命令末尾包含分号 ;，以指示电话号码的结束。

## 通过 Mini-PCIe 的 4G 蜂窝网络

创建一个新的 power_4g.sh 文件：

```bash
sudo nano power_4g.sh
```

使用 sudo nano 打开并输入以下命令，然后按 ctrl+x 保存并退出。

```bash
# SIM_MUX_SEL
echo  643  >  export
echo  out  >  gpio643/direction
echo  0  >  gpio643/value
```

执行该文件：

```bash
sudo ./power_4g.sh
```

10-15 秒后（模块上电并枚举 USB 需要一段时间），检查设备节点是否出现：

```bash
ls /dev/ttyUSB*
```

输出 /dev/ttyUSB0。
确认 GPIO 的实际动作：

```bash
cat /sys/class/gpio/gpio645/value # should be 0
cat /sys/class/gpio/gpio639/value # should be 0
```

两个值都为 0 → 脚本已被正确拉低，模块处于工作状态。
进入 minicom 发送指令：

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

● 依次按 ***Ctrl+A,Z,E***。先发送 AT 测试是否已连接。如果出现 OK，则表示连接成功。
执行以下命令后，模块会自动重启。如果你不退出 minicom，可以看到对应的配置信息。
ECM 拨号上网：

```bash
AT+QCFG="usbnet",1
```

直到最后一行显示 OK，即表示成功。

> Note
> 设备需要等待一段时间，然后你可以在 ifconfig 中查看 usb0 的 IP 地址。

测试网络状态和通信：

```bash
# Check network status
ifconfig
# Test communication
ping www.baidu.com -I usb0
```

## RS485 测试

reComputer Industrial R21xx 包含 **2 个 RS485 接口**。下面是它们对应的 **COM 端口** 和 **设备文件**：  

| **RS485 接口数量** | **COM 端口** | **丝印标识** | **设备文件** |
|---------------------------|--------------|----------------------|-----------------|
| **RS485-3**               | COM3         | A3/B3/GND3           | `/dev/ttyACM2`  |
| **RS485-4**               | COM4         | A4/B4/GND4           | `/dev/ttyACM3`  |

要测试 RS485 功能，你可以按照以下步骤进行（以 RS485_1 和 RS485_2 为例）：

1. 请连接 RS485_1 和 RS485_2 的 A 和 B。
2. 分别在两个终端窗口中打开 minicom：

```bash
sudo minicom -D /dev/ttyACM1
sudo minicom -D /dev/ttyACM2
```

:::note
 如果有扩展板，编号需要往后移一位，例如 ***/dev/ttyAcM2***、***/dev/ttyAcM3***。
:::

3. 下面的操作需要在两个已打开的 ACM 上都执行：

- 按 ***Ctrl+A***，然后按 ***Z***，会出现 Minicom Command Summary 界面：
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_1.png" style={{width:800, height:'auto'}}/></div>
- 再按 ***O*** 打开配置，选择 Serial port setup，并按 ***Enter***；打开所有与 RS485 相关的界面，依次按 ***H/I/J/K/L*** 打开；
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_2.png" style={{width:800, height:'auto'}}/></div>

- 当全部显示为 "YES" 后，按 Enter 返回，然后选择 Exit 退出。

:::note

以 ACM2 和 ACM3 为例：
如果你想从 ACM2 发送到 ACM3，需要重新设置 ACM2：***ctrl+A***，然后按 ***Z*** 再按 ***E***，然后开始串口写命令。此时你可以在 ACM2 中任意打印字符串，并且可以在 ACM3 中同时看到 ACM2 的内容；
相反，如果你想从 ACM3 发送到 ACM2，需要重新设置 ACM3：***ctrl+A***，然后按 ***Z*** 再按 ***E***，然后开始串口写命令。此时你可以在 ACM3 中任意打印字符串，并且可以在 ACM2 中同时看到 ACM3 的内容。如图所示。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_3.png" style={{width:800, height:'auto'}}/></div>

## RS232 测试

reComputer Industrial R21xx 包含 **2 个 RS232** 接口，对应的 **COM 端口** 和 **设备文件** 如下：

| **RS232 接口数量** | **COM 端口** | **丝印标识** | **设备文件** |
|---------------------------|--------------|----------------------|-----------------|
| **RS232-1**               | COM1         | RX1/TX1/GND1         | `/dev/ttyACM0`  |
| **RS232-2**               | COM2         | RX2/TX2/GND2         | `/dev/ttyACM1`  |

由于 RS232 为全双工通信，直接将 RS232 的 TX 和 RX 短接即可进行回环测试。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/21-rs232.png" style={{width:800, height:'auto'}}/></div>

你需要打开两个终端，如果连接了扩展板则为 ACM1，如果未连接扩展板则为 ACM2：
**终端 1：***

```bash
sudo minicom -D /dev/ttyACM1 -b 9600
```

如果未连接扩展板，你需要将 ***/dev/ttyACM1*** 改为 ***/dev/ttyACM0***。

**终端 2：**

```bash
printf "hello seeed\r\n" > /dev/ttyACM1
```

**终端 3：**

```bash
printf "hello seeed\r\n" > /dev/ttyACM0
printf "hello seeed\r\n" > /dev/ttyACM1
```

终端 1 会显示终端 2 请求打印的内容。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/232_test.png" style={{width:800, height:'auto'}}/></div>

## DI（数字输入）测试

reComputer Industrial R21xx 包含 4 个 DI 接口，用户可以根据实际需求配置这些接口。

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>端口数量</th>
        <th>DI 接口</th>
        <th>对应扩展 GPIO</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="4">4</td>
        <td>DI1</td>
        <td>GPIO588</td>
      </tr>
      <tr>
        <td>DI2</td>
        <td>GPIO589</td>
      </tr>
      <tr>
        <td>DI3</td>
        <td>GPIO590</td>
      </tr>
      <tr>
        <td>DI4</td>
        <td>GPIO595</td>
      </tr>
    </tbody>
  </table>
</div>

DI 接口的输入类型为 PNP。支持的输入电压为 5VDC~24VDC，电流 - 1000mA。
要测试 DI 的功能，你可以按照以下步骤进行测试：

1. 已完成 reComputer Industrial R21xx 的 DI 接口与外部负载之间的连接。
2. 输入以下命令获取 GPIO 的状态：

```bash
echo 588 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio588/direction
cat /sys/class/gpio/gpio588/value
```

3. 当外部电平为高时，***/sys/class/gpio/gpio588/value*** 的值为 0；当外部电平为低时，***/sys/class/gpio/gpio588/value*** 的值为 1。

## DO（数字输出）

reComputer Industrial R21xx 包含 4 个 DO 接口，用户可以根据实际需求配置这些接口。

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>端口数量</th>
        <th>DI 接口</th>
        <th>对应扩展 GPIO</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="4">4</td>
        <td>DO1</td>
        <td>GPIO638</td>
      </tr>
      <tr>
        <td>DO2</td>
        <td>GPIO637</td>
      </tr>
      <tr>
        <td>DO3</td>
        <td>GPIO590</td>
      </tr>
      <tr>
        <td>DO4</td>
        <td>GPIO636</td>
      </tr>
      <tr>
        <td>DO5</td>
        <td>GPIO635</td>
      </tr>
    </tbody>
  </table>
</div>

DO 接口的输出类型为晶体管。支持的输出电压 - 小于 60 VDC，电流能力 - 500 mA。
要测试 DO 的功能，你可以按照以下步骤进行测试：

1. 已完成 reComputer Industrial R21xx 的 DO 接口与外部负载之间的连接。
2. 输入以下命令将输出设置为高电平或低电平：

```bash
echo 638 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio638/direction
echo 1 > /sys/class/gpio/gpio638/value
echo 0 > /sys/class/gpio/gpio638/value
```

3. 当外部电平为高电平时，/sys/class/gpio/gpio638/value 的值为 0；当外部电平为低电平时，/sys/class/gpio/gpio638/value 的值为 1。

## CAN 测试

### 回环测试

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>端口数量</th>
        <th>DI 端口</th>
        <th>对应扩展 GPIO</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2">4</td>
        <td>CAN-0_H/CAN-0_</td>
        <td>can0</td>
      </tr>
      <tr>
        <td>CAN-1_H/CAN-1_L</td>
        <td>can1</td>
      </tr>
    </tbody>
  </table>
</div>

1. 使用两根杜邦线将 can0 和 can1 的 H-H 与 L-L 短接，形成最小回路测试。

```bash
CAN-0_H─────●───── CAN-0_H
CAN-1_H─────●───── CAN-1_H
```

2. 确认系统中确实出现了 can0 和 can1 两个网络接口，以防驱动未加载：

```bash
# should print can0 can1
ls /sys/class/net | grep can 
# should see "successfully initialized"
dmesg | grep -i can
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/can_test_1.png" style={{width:800, height:'auto'}}/></div>

3. 将两个 CAN 接口设置为 500 kbit/s 并上线，准备收发数据（为安全起见，将其设置为低电平）：

```bash
sudo ip link set can0 down
sudo ip link set can1 down
sudo ip link set can0 up type can bitrate 500000
sudo ip link set can1 up type can bitrate 500000
```

4. 确认引脚状态：

```bash
ip -d link show can0
ip -d link show can1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/can_test_2.png" style={{width:800, height:'auto'}}/></div>

5. 下载并安装 can-utils，以使用 candump 和 cansend 等基本工具。

```bash
sudo apt install can-utils
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/can_test_3.png" style={{width:800, height:'auto'}}/></div>

6. 在监控 can0 的同时，从 can1 发送帧。如果能看到消息，说明通路正常。

```bash
# Terminal A
candump can0
# Terminal B
cansend can1 123#DE.AD.BE.EF.CA.FE.00.11
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/can_test_4.png" style={{width:800, height:'auto'}}/></div>

7. 反过来，也可以在监控 can1 的同时，从 can0 发送帧。如果能看到消息，说明通路正常。

```bash
# Terminal A
candump can1
# Terminal B
cansend can0 123#DE.AD.BE.EF.CA.FE.00.11
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2100/can_test_5.png" style={{width:800, height:'auto'}}/></div>

8. 如果希望后续启动更简单，可以将启动命令写入脚本，只需在开机时执行一次，即可自动拉起接口。

```bash
#!/bin/bash
sudo ip link set can0 down
sudo ip link set can1 down
sudo ip link set can0 up type can bitrate 500000
sudo ip link set can1 up type can bitrate 500000
echo "can0 & can1 are up @ 500 kbit/s"
```

### Python-CAN 测试

[Python-CAN](https://github.com/raspberrypi/usbboot) 是一个跨平台的 Python 库，为控制器局域网（CAN）总线通信提供统一的编程接口，支持多种 CAN 硬件接口和虚拟总线，可轻松实现 CAN 报文的发送、接收、过滤、总线监控等操作。
同样，需要将 CAN 接口在物理上连接起来，以实现回环通信。

1. 配置标准 CAN 波特率（500 kbit/s）：

```bash
sudo ip link set down can0
sudo ip link set down can1
sudo ip link set can0 type can bitrate 500000
sudo ip link set can1 type can bitrate 500000
sudo ip link set up can0
sudo ip link set up can1
```

2. 验证两个接口都处于 UP 状态：输出 "state UP" 表示为 UP 状态。

```bash
ip a show can0
ip a show can1
```

输出 "state UP" 表示为 UP 状态。

3. 配置 Python 虚拟环境和依赖。

```bash
mkdir rpi_can_project
cd rpi_can_project
python3 -m venv can_env
source can_env/bin/activate
pip install python-can
```

4. 输入 Python 脚本：

```python
# can_test.py
import can
import time

# create a bus instance using 'with' statement,
# this will cause bus.shutdown() to be called on the block exit;
# many other interfaces are supported as well (see documentation)
with can.Bus(interface='socketcan',
             channel='vcan0',
             receive_own_messages=True) as bus:

    # send a message
    message = can.Message(arbitration_id=0x7B, is_extended_id=True,
                          data=[0x11, 0x22, 0x33])

    try:
        bus.send(message, timeout=0.2)
        print(f"Message sent: ID={message.arbitration_id:X}, Data={message.data.hex()}")
    except can.exceptions.CanOperationError as e:
        print(f"Error sending message: {e}")

    # iterate over received messages
    print("Listening for 5 seconds...")
    start_time = time.time()


    while time.time() - start_time < 5:
        if msg:
            print(f"Received - ID: {msg.arbitration_id:X}, Data: {msg.data.hex()}")
        else:
            print("No message received in 1 second.")

print("Bus shut down and program finished.")
```

5. 执行运行：

```bash
python can_test.py
deactivate
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Industrial/python-can.png" style={{width:800, height:'auto'}}/></div>

## USB 集线器测试

要测试 USB 集线器，可以按照以下步骤进行：

1. 运行 ***lsusb*** 命令检查是否检测到 USB 集线器。该命令会列出所有已连接的 USB 设备，包括集线器。

```bash
lsusb
```

运行该命令后，应该会显示系统中已连接 USB 设备的信息，包括存在的任何 USB 集线器。
如果 USB 集线器工作正常，你应当能在 lsusb 命令的输出中看到它的详细信息。如果没有列出，可能是集线器或其与系统连接存在问题。在这种情况下，你可能需要对 USB 集线器或其连接进行排查。

## RTC（实时时钟）测试

要测试实时时钟（RTC）功能，请按照以下步骤操作：

1. 禁用自动时间同步：

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. 设置时间：
将 RTC 设置为特定的日期和时间：

```bash
sudo hwclock --set --date "2025-7-17 12:00:00"
```

3. 将 RTC 时间同步到系统
将系统时间更新为与 RTC 时间一致：  

```bash
sudo hwclock --hctosys
```

4. 检查 RTC 时间：

```bash
sudo hwclock -r
```

该命令将读取并显示存储在 RTC 中的时间。

5. 断开 RTC 的电源，等待几分钟后重新接通电源，再次检查 RTC 时间，查看是否保持了正确时间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.16_rtc_1.png" style={{width:800, height:'auto'}}/></div>

## 看门狗定时器测试

要执行看门狗测试，请按照以下步骤操作：

1. 安装看门狗软件：

```bash
sudo apt install watchdog
```

2. 编辑看门狗配置文件：

```bash
# make sure you install vim already, if haven't, can install by the command below
sudo apt-get install vim
sudo vim /etc/watchdog.conf
```

按如下方式修改配置：

```bash
watchdog-device = /dev/watchdog
# Uncomment and edit this line for hardware timeout values that differ
# from the default of one minute.
watchdog-timeout = 120
# If your watchdog trips by itself when the first timeout interval
# elapses then try uncommenting the line below and changing the
# value to 'yes'.
#watchdog-refresh-use-settimeout = auto
# If you have a buggy watchdog device (e.g. some IPMI implementations)
# try uncommenting this line and setting it to 'yes'.
#watchdog-refresh-ignore-errors = no
# ====================== Other system settings ========================
#
# Interval between tests. Should be a couple of seconds shorter than
# the hardware time-out value.
interval = 15
max-load-1 = 24
#max-load-5 = 18
#max-load-15 = 12
realtime = yes
priority = 1
```

你可以根据需要调整其他设置。

3. 确保看门狗服务正在运行：

```bash
sudo systemctl start watchdog
```

4. 要测试看门狗功能，执行以下命令来模拟系统死机：

```bash
sudo su

echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

该命令会触发内核崩溃，并应使看门狗重启系统。

5. 监控系统，以确认其在指定超时时间后重新启动。
这些步骤将帮助你测试并确保系统上看门狗定时器的功能正常。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.17_watchdog_1.png" style={{width:800, height:'auto'}}/></div>

## 通过 GPIO 控制蜂鸣器  

与蜂鸣器对应的 GPIO 为 gpio627。输入以下脚本以打开/关闭蜂鸣器：

1. 打开蜂鸣器：

```bash
echo 627 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio627/direction
echo 1 > /sys/class/gpio/gpio627/value
```  

2. 关闭蜂鸣器：关闭蜂鸣器：

```bash
echo 627 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio627/direction 
echo 0 > /sys/class/gpio/gpio627/value
```  

## TPM 2.0

如果你将 TPM 2.0 模块连接到设备，以下代码可以帮助检查 TPM 连接情况。

```bash
ls /dev | grep tpm
```  

**输出结果说明：**  

如果在输出中看到 ***tpm0*** 和 ***tpmrm0***，则表示系统已检测到 TPM（可信平台模块）设备并可用。这说明 TPM 硬件已被识别且可访问，是一个良好信号。你可以在确认这些设备存在且可访问的前提下，继续使用与 TPM 相关的功能或应用程序。

## ATECC608A

要与 ATECC608A 设备交互并生成随机序列号，请按照以下步骤操作：

1. 克隆 atecc-util 仓库：

```bash
curl -LJO https://github.com/wirenboard/atecc-util/releases/download/v0.4.12/atecc-util_0.4.12_arm64.deb
```  

2. 将 .deb 软件包的内容解压到当前目录：

```bash
dpkg -x ./atecc-util_0.4.12_arm64.deb .
```  

3. 进入 atecc 目录：

```bash
cd usr/bin
```

4. 生成随机序列号：

```bash
./atecc -b 10 -s 192 -c 'serial'
```

该命令指示 ATECC 工具使用插槽 10（-b 10），将序列号大小设置为 192 位 ***(-s 192)***，并生成一个随机序列号 ***(-c 'serial')***。输出将是生成的序列号，例如 ***"01235595d3d621f0ee"***。
通过此过程，您可以与 ATECC608A 设备交互并执行各种操作，例如生成随机序列号。

## 与 EEPROM 交互

以下是与 EEPROM（电可擦可编程只读存储器）交互的命令：

1. 为 EEPROM 设备文件授予完整权限（读、写和执行）：

```bash
 sudo chmod 777 /sys/bus/i2c/devices/10-0050/eeprom
```  

2. 将字符串 "This is a test string" 写入 EEPROM 设备：

```bash
echo "This is a test string" > /sys/bus/i2c/devices/10-0050/eeprom
```  

3. 读取 EEPROM 设备的内容，并使用 hexdump 工具以 ***十六进制*** 格式显示：

```bash
cat /sys/bus/i2c/devices/6-0050/eeprom | hexdump -C
```  

## 检查 SSD 是否被检测到

要列出包括 SSD 在内的磁盘，可以使用 fdisk -l 命令。操作如下：

```bash
sudo fdisk -l
```

该命令将显示系统中连接的所有磁盘列表，如果 SSD 被正确检测到，也会包含在内。请查找代表 SSD 的条目，它们通常以 ***/dev/sd*** 开头，后面跟一个字母（例如：***/dev/sda, /dev/sdb,*** 等）。
确定与 SSD 对应的条目后，您就可以根据需要对其进行分区或格式化。

## UPS 安全关机

CPU 与直流电源输入之间的 GPIO6 用于在电源掉电时向 CPU 报警。然后 CPU 应该在超级电容能量耗尽之前，通过脚本执行一些紧急操作并运行 "$ shutdown"。
使用此功能的另一种方式是：当 GPIO 引脚状态变化时发起关机。指定的 GPIO 引脚被配置为输入按键，用于产生 KEY_POWER 事件。systemd-logind 通过处理该事件来发起关机。

1. 硬件连接。

请确保 UPS 设备的 ***'CM5_UPS_DET'*** 引脚连接到 R21xx 设备的 GPIO16 引脚。

2. 修改配置文件。

- 打开终端。
- 执行以下命令编辑配置文件：

```bash
sudo nano /boot/firmware/config.txt
```

3. 在文件末尾添加以下内容：

```bash
dtoverlay=gpio-shutdown,gpio_pin=GPIO16,active_low=1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.23_ups_for_safe_shut_down_1.png" style={{width:800, height:'auto'}}/></div>

保存并退出编辑器（按 ***`Ctrl+O`*** 保存，***`Enter`*** 确认，然后按 ***`Ctrl+X`*** 退出）。

4. 准备 Python 脚本

- 新建一个 Python 脚本文件：

```bash
cd ~
sudo nano ups_shutdown.py
```

- 将以下代码复制并粘贴到文件中：

```bash
import RPi.GPIO as GPIO
import time, os

num = 0

GPIO.setmode(GPIO.BCM)

# Set GPIO16 to input mode
# Add 500ms anti-shake time to stabilize the software
GPIO.setup(16, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.add_event_detect(16, GPIO.FALLING, bouncetime=500)

while True:
    if GPIO.event_detected(16):
        print("...External power off...")
        print("")

        # Sync data to disk
        os.system('sync')
        print("...Data saving...")
        print("")

        # Sleep for 3 seconds
        time.sleep(3)

        # Synchronize data again
        os.system('sync')

        # Countdown 5 seconds
        while num < 5:
            print('----------')
            s = 5 - num
            print('---' + str(s) + '---')
            num = num + 1
            time.sleep(1)
            print('----------')

        # Execute shutdown command
        os.system('sudo shutdown -h now')
```

保存并退出编辑器（按 ***`Ctrl+O`*** 保存，***`Enter`*** 确认，然后按 ***`Ctrl+X`*** 退出）。

5. 运行脚本。

- 打开终端。
- 执行以下命令运行脚本：

```bash
sudo python3 ups_shutdown.py
```

:::note
 使用 `sudo` 以确保脚本具有执行关机命令的足够权限。
:::

6. 模拟断电测试

- 切断外部电源。
- 观察系统是否会自动保存数据并关机。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.23_ups_for_safe_shut_down_1.png" style={{width:800, height:'auto'}}/></div>

7. 验证结果

- 重新接通电源。
- 检查系统数据是否完整且能正常启动。

:::note

1. 关于 UPS 功能，请联系我们获取更多信息。
2. 报警信号为低电平有效。

:::

## AI 加速器

reComputer Industrial R21xx 上的 M.2 M-KEY 2280 插槽用于安装 PCIE M.2 AI 加速器。而 R21xx-12 系列已预装一块 Hailo-8 M.2 AI 加速卡，性能最高可达 26TOPS。
如果您购买的是 R21xx-10 系列产品，则需要另外购买 Hailo 的 NPU 模块以启用 AI 功能。
设备已预装 Hailo 加速器驱动，因此您可以直接使用并运行测试用例：

1. 进入测试用例目录

```bash
cd /mnt/hailo-rpi5-examples/
```

2. 启动虚拟环境

```bash
source ./setup_env.sh
```

3. 运行简单检测示例

```bash
python basic_pipelines/detection_simple.py
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.24_ai__accelerator_1.png" style={{width:800, height:'auto'}}/></div>

要关闭应用程序，请按 ***`Ctrl+C`***。
这是检测示例的轻量级版本，主要侧重于在尽量减小 CPU 负载的同时展示 Hailo 的性能。内部的 GStreamer 视频处理流水线通过最小化视频处理任务进行了简化，并使用 YOLOv6 Nano 模型。

:::note
如果您购买的 reComputer 不包含 Hailo-8，并计划购买 Hailo 设备进行集成，请参考 Hailo 官方文档（https://github.com/hailo-ai）来配置固件和环境，并运行示例以验证设备是否可以正常使用。
:::

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
