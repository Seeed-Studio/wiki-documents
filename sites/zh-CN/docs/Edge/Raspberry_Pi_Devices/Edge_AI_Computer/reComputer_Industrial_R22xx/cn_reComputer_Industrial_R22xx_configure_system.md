---
description: reComputer Industrial R22xx 是一款基于 Raspberry Pi CM5 的工业级 AI NVR，搭载 Hailo-8 AI 加速器，提供高达 26 TOPS 的算力。其配备 4 个支持 PoE PSE 的千兆以太网端口以及 1 个额外的千兆以太网端口，可实现高带宽视频流传输，并简化 IP 摄像头的 PoE 部署。提供丰富的工业 I/O、灵活的无线连接、无风扇散热设计，以及 -20 °C 至 50 °C 的宽工作温度范围，确保在严苛场景下实现可靠的 AI 视频分析和持续稳定运行。
title: 配置 reComputer Industrial R22xx
keywords:
  - 边缘控制器
  - Raspberry pi
  - 边缘控制器
  - reComputer Industrial R22xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg
slug: /recomputer_industrial_r22xx_configure_system
sku: 100077451,100079040
last_update:
  date: 02/09/2026
  author: Nolan Chen
createdAt: '2025-09-28'
updatedAt: '2026-04-21'
url: https://wiki.seeedstudio.com/cn/recomputer_industrial_r22xx_configure_system/
---

## 概述

在安装好设备后，了解如何在 reComputer Industrial R22xx 系列上配置和测试硬件组件。本 Wiki 涵盖 GPIO 映射、USER LED 测试、SPI 通信、Wi-Fi 和蓝牙扫描、LoRa®、4G、5G、RS485、RS232、CAN、DI/DO 测试、安全关机 UPS 等内容。

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2235-12-p-6654.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 查询 GPIO 映射和偏移

要查询 GPIO 映射和偏移，请按照以下步骤操作：

1. 复制并粘贴以下命令以查询 GPIO 映射：

```bash
cat /sys/kernel/debug/gpio
```

**该命令将显示 GPIO 映射和偏移**，为调试或配置 GPIO 引脚提供关键信息。

## USER LED 测试

我们为用户提供了红、蓝和绿三种颜色的 LED。你可以进入 /sys/class/leds/ 目录查看：

**1. 进入 LED 目录**  

```bash
cd /sys/class/leds/
ls
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.3-1.png" style={{width:800, height:'auto'}}/></div>


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
sudo su
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

该命令在指定的 SPI 设备（**/dev/spidev10.0**）上测试 SPI 通信，启用详细输出（ -v ），并发送消息 "hello"（**-p hello**）。
通过短接 TPM 模块的 MISO 和 MOSI 引脚，你实际上创建了一个回环场景，即 MOSI 发送的数据会在 MISO 上被接收。此设置允许你在没有实际外接设备的情况下测试 SPI 通信。

## Wi-Fi 扫描

要列出可用的 Wi-Fi 网络及其详细信息，请运行：  

```bash
sudo iwlist wlan0 scan
```

- 该命令会扫描附近所有 Wi-Fi 网络，并显示其 SSID、信号强度和加密类型。  

## 蓝牙扫描  

要扫描蓝牙设备，请按照以下步骤操作：  

**打开蓝牙控制界面：**  

```bash
sudo bluetoothctl
```

该命令将打开蓝牙控制界面。在此界面中，你可以运行其他命令来扫描附近的蓝牙设备。

**启用扫描：**  

```bash
scan on
```

该命令将开始扫描附近的蓝牙设备。然后你可以在 ***bluetoothctl*** 界面中使用其他命令与蓝牙设备交互，例如配对或连接。

## 通过 Mini-PCIe 的 LoRa®

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

修改这一行：  

```c
#define I2C_DEVICE "/dev/i2c-1"
```

为：  

```c
#define I2C_DEVICE "/dev/i2c-2"
```

将 **#define I2C_DEVICE "/dev/i2c-1"** 修改为 **#define I2C_DEVICE "/dev/i2c-2"。**
按 **ctrl+x** 退出，按 **y** 保存更改，然后按 **Enter** 返回命令行页面。

4. 4.添加 packet_forwarder/reset_lgw.sh 文件：

```bash
sudo nano packet_forwarder/reset_lgw.sh
```

添加执行代码：

```bash
SX1302_RESET_PIN=632     # SX1302 reset
SX1302_POWER_EN_PIN=633  # SX1302 power enable
SX1261_RESET_PIN=634     # SX1261 reset (LBT / Spectral Scan)
# AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)

```

固件原生支持 SPI 型号 WM1302-SPI-US915-M。若你希望使用其他型号，可以查询对应 RESET_PIN 的定义，并参考以下命令修改 RESET_PIN。

```bash
cat /sys/kernel/debug/gpio
```

按 **ctrl+x** 退出，按 **y** 保存更改，然后按 **Enter** 返回命令行页面。

5. 修改配置代码：

```bash
cp ./tools/reset_lgw.sh ./packet_forwarder
```

6. 分别注释掉第 18、29、35、42、53 和 54 行：

```bash
nano ./packet_forwarder/global_conf.json.sx1250.US915
```

将 "com_path": "/dev/spidev0.0" 修改为 "com_path": "/dev/spidev2.0"。

```bash
 cd ./packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.7.1-1.png" style={{width:800, height:'auto'}}/></div>




### LoRa® USB 配置

对于 LoRa® USB，前面的命令与 LoRa® SPI 相同。但最后一条命令需要修改为：

```bash
cho  632  >  /sys/class/gpio/export
echo  "out"  >  /sys/class/gpio/gpio632/direction
echo  "1"  >  /sys/class/gpio/gpio632/value

sudo  ./lora_pkt_fwd  -c  global_conf.json.sx1250.EU868.USB
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.7.2_lora_usb_1.png" style={{width:800, height:'auto'}}/></div>

该命令指定用于 LoRa® USB 的配置文件。

## 通过 M.2 B-KEY 的 5G 蜂窝网络

要通过 minicom 使用 AT 命令与 5G/4G 模块交互，请按照以下步骤操作：

1. 新建 power_5g.sh 文件：

```bash
nano power_5g.sh
```

使用 sudo nano 打开并输入以下命令，然后按 ***ctrl+x*** 保存并退出。

```bash
#!/bin/bash

RESET_PIN=655
POWER_PIN=660

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

等待 10-15 秒（模块上电并枚举 USB 需要一定时间），然后检查设备节点是否出现：

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

该命令使用指定串口（***/dev/ttyUSB2***）以 115200 波特率打开 minicom。

1. 打开 minicom 后，你可以开始向 4G 模块发送 AT 命令。例如：

```bash
AT
```

该命令用于检查模块是否有响应。如果模块工作正常，你应当收到 ***"OK"*** 的响应。

2. 要使用 4G 模块拨打电话号码，可以使用 ATD 命令并在后面加上电话号码：

```bash
ATD<phone_number>;
```

将 **phone_number** 替换为你想要拨打的目标电话号码。
请确保在命令末尾添加分号 ;，以表示电话号码的结束。

## 通过 Mini-PCIe 的 4G 蜂窝网络

新建 power_4g.sh 文件：

```bash
sudo nano power_4g.sh
```

使用 sudo nano 打开并输入以下命令，然后按 ctrl+x 保存并退出。

```bash
# SIM_MUX_SEL
echo 655 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio655/direction
echo 0 > /sys/class/gpio/gpio655/value
echo 660 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio660/direction
echo 1 > /sys/class/gpio/gpio660/value
```

执行该文件：

```bash
sudo ./power_4g.sh
```

进入 minicom 发送命令：

```bash
sudo apt install minicom -y
sudo minicom -D /dev/ttyUSB2 -b 115200
```

依次按下 Ctrl+A、Z、E。先发送 AT 测试是否已连接。如果出现 OK，则表示连接成功。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.9-1.png" style={{width:800, height:'auto'}}/></div>


执行以下命令后，模块会自动重启。如果你没有退出 minicom，可以看到对应的配置信息。
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
| **RS485-2**               | COM2         | A2/B2/GND3           | `/dev/ttyACM1`  |
| **RS485-3**               | COM3         | A3/B3/GND4           | `/dev/ttyACM2`  |

要测试 RS485 功能，可以按照以下步骤进行（以 RS485_1 和 RS485_2 为例）：

1. 请将 RS485_1 和 RS485_2 的 A 和 B 端连接在一起。
2. 分别在两个终端窗口中打开 minicom：

```bash
sudo minicom -D /dev/ttyACM1
sudo minicom -D /dev/ttyACM2
```

:::note
 如果有扩展板，编号需要往后顺延一位，例如 ***/dev/ttyAcM2***、***/dev/ttyAcM3***。
:::

3. 需要在两个已打开的 ACM 上执行以下操作：

- 按下 ***Ctrl+A***，然后按 ***Z***，会出现 Minicom Command Summary 界面：
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_1.png" style={{width:800, height:'auto'}}/></div>
- 再按 ***O*** 打开配置，选择 Serial port setup，并按 ***Enter***；打开所有与 RS485 相关的接口，依次按 ***H/I/J/K/L*** 将其打开；
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_2.png" style={{width:800, height:'auto'}}/></div>

- 当全部显示为 "YES" 后，按 Enter 返回，然后选择 Exit 退出。

:::note

以 ACM2 和 ACM3 为例：
如果要从 ACM2 发送到 ACM3，需要重新设置 ACM2：***ctrl+A***，然后按 ***Z*** 再按 ***E***，然后开始串口写命令。此时可以在 ACM2 中任意打印字符串，并且可以在 ACM3 中同时看到 ACM2 的内容；
反之，如果要从 ACM3 发送到 ACM2，需要重新设置 ACM3：***ctrl+A***，然后按 ***Z*** 再按 ***E***，然后开始串口写命令。此时可以在 ACM3 中任意打印字符串，并且可以在 ACM2 中同时看到 ACM3 的内容，如图所示。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_3.png" style={{width:800, height:'auto'}}/></div>

## RS232 测试

reComputer Industrial R21xx 包含 **2 个 RS232** 接口，对应的 **COM 端口** 和 **设备文件** 如下：

| **RS232 接口数量** | **COM 端口** | **丝印标识** | **设备文件** |
|---------------------------|--------------|----------------------|-----------------|
| **RS232-1**               | COM1         | RX1/TX1/GND1         | `/dev/ttyACM0`  |
| **RS232-2**               | COM2         | RX2/TX2/GND2         | `/dev/ttyACM1`  |

由于 RS232 为全双工通信，直接将 RS232 的 TX 和 RX 短接即可进行回环测试。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.12-1.png" style={{width:800, height:'auto'}}/></div>

需要打开两个终端，如果连接了扩展板则使用 ACM1，如果未连接扩展板则使用 ACM2：
**终端 1：***

```bash
sudo minicom -D /dev/ttyACM1 -b 9600
```

如果未连接扩展板，需要将 ***/dev/ttyACM1*** 改为 ***/dev/ttyACM0***。

**终端 2：**

```bash
printf "hello seeed\r\n" > /dev/ttyACM1
```


终端 1 会显示终端 2 请求打印的内容。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.12-2.png" style={{width:800, height:'auto'}}/></div>

## DI（数字输入）测试

reComputer Industrial R21xx 包含 4 个 DI 接口，用户可以根据实际需求配置这些接口。

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>接口数量</th>
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
要测试 DI 的功能，可以按照以下步骤进行测试：

1. 已完成 reComputer Industrial R21xx 的 DI 接口与外部负载之间的连接。
2. 输入以下命令获取 GPIO 的状态：

```bash
echo 588 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio588/direction
cat /sys/class/gpio/gpio588/value
```

3. 当外部电平为高电平时，***/sys/class/gpio/gpio588/value*** 的值为 0；当外部电平为低电平时，***/sys/class/gpio/gpio588/value*** 的值为 1。

## DO（数字输出）

reComputer Industrial R21xx 包含 4 个 DO 接口，用户可以根据实际需求配置这些接口。

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>接口数量</th>
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
        <td>GPIO636</td>
      </tr>
      <tr>
        <td>DO4</td>
        <td>GPIO635</td>
      </tr>
    </tbody>
  </table>
</div>

DO 接口的输出类型为晶体管。支持的输出电压为 60 VDC 以下，电流能力为 500 mA。
要测试 DO 的功能，可以按照以下步骤进行测试：

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
        <th>接口数量</th>
        <th>DI 接口</th>
        <th>对应扩展 GPIO</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2">2</td>
        <td>CAN_H/CAN_L</td>
        <td>can0</td>
      </tr>
    </tbody>
  </table>
</div>

由于 reComputer Industiral R22xx 仅配备单路 CAN 接口，无法进行独立回环测试。要验证其通信功能，需要一个外部对端设备或 USB 转 CAN 适配器。本次测试中，将使用配备双路 CAN 接口的 reComputer Industiral R21xx 作为对端节点，与 reComputer Industiral R22xx 建立连接。具体连接方案和配置步骤请参考以下教程：

1. 使用两根杜邦线将 can0 和 can1 的 H-H、L-L 短接，形成最小回环测试。

```bash
CAN_H─────●───── CAN-H
CAN_L─────●───── CAN-L
G_CAN_H─────●───── G_CAN
```

2. 确认系统中确实出现了 can0 和 can1 两个网络接口，以防驱动未加载：

```bash
# should print can0 can1
ls /sys/class/net | grep can 
# should see "successfully initialized"
dmesg | grep -i can
```


3. 将两个 CAN 接口设置为 500 kbit/s 并上线，准备收发数据（为安全起见，将其设置为低电平）：
R22xx：
```bash
sudo ip link set can0 down
sudo ip link set can0 up type can bitrate 500000
```
R21xx：
```bash
sudo ip link set can1 down
sudo ip link set can1 up type can bitrate 500000
```

4. 通信测试（单向）
使用 can-utils 发送和接收数据。

步骤 A：R21xx（CAN1）发送 → R22xx（CAN0）接收

- R22xx：candump can0

- R21xx：cansend can1 123#DE.AD.BE.EF.CA.FE.00.11

步骤 B：R22xx（CAN0）发送 → R21xx（CAN1）接收

- R21xx：candump can1

- R22xx：cansend can0 555#1122334455667788



## USB Hub 测试

要测试 USB hub，可以按照以下步骤进行：

1. 运行 ***lsusb*** 命令检查是否检测到 USB hub。该命令会列出所有已连接的 USB 设备，包括 hub。

```bash
lsusb
```

运行该命令后，应该会显示系统中已连接的 USB 设备信息，包括存在的 USB hub。
如果 USB hub 工作正常，你应当能在 lsusb 命令的输出中看到它的详细信息。如果未列出，可能是 hub 或其与系统连接存在问题，此时需要对 USB hub 或其连接进行排查。

## RTC（实时时钟）测试

要测试实时时钟（RTC）功能，请按照以下步骤操作：

1. 禁用自动时间同步：

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. 设置时间：
将 RTC 设置为指定的日期和时间：

```bash
sudo hwclock --set --date "2025-10-23 16:00:00"
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

此命令将读取并显示存储在 RTC 中的时间。

5. 将 RTC 的电源断开，等待几分钟，然后重新接通电源并再次检查 RTC 时间，以确认它是否保持了正确时间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.17-1.png" style={{width:800, height:'auto'}}/></div>

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

此命令会触发内核崩溃，并应使看门狗重启系统。

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

如果你在输出中看到 ***tpm0*** 和 ***tpmrm0***，这意味着系统已检测到 TPM（可信平台模块）设备并可用。这表明 TPM 硬件已被识别且可访问，这是一个良好信号。你可以在确认这些设备存在且可访问的前提下，继续使用与 TPM 相关的功能或应用程序。

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

此命令指示 ATECC 工具使用插槽 10（***-b 10***），将序列号大小设置为 192 位（***-s 192***），并生成一个随机序列号（***-c 'serial'***）。输出将是生成的序列号，例如 ***"01235595d3d621f0ee"***。
此过程允许你与 ATECC608A 设备交互并执行各种操作，例如生成随机序列号。

## 与 EEPROM 交互

以下是与 EEPROM（电可擦可编程只读存储器）交互的命令：

1. 为 EEPROM 设备文件授予完全权限（读、写和执行）：

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

要列出包括 SSD 在内的磁盘，你可以使用 `fdisk -l` 命令。操作如下：

```bash
sudo fdisk -l
```

此命令将显示系统中连接的所有磁盘列表，如果 SSD 被正确检测到，也会包含在内。查找代表你 SSD 的条目，它们通常以 ***/dev/sd*** 开头，后面跟一个字母（例如 ***/dev/sda, /dev/sdb,*** 等）。
一旦确定了与你的 SSD 对应的条目，你就可以根据需要继续对其进行分区或格式化。

## 用于安全关机的 UPS

CPU 与直流电源输入之间的 GPIO6 用于在电源掉电时向 CPU 报警。然后 CPU 应该在超级电容能量耗尽之前，通过脚本执行一些紧急操作并运行“$ shutdown”。
使用此功能的另一种方式是：当 GPIO 引脚状态改变时发起关机。给定的 GPIO 引脚被配置为输入按键，用于产生 KEY_POWER 事件。systemd-logind 通过处理该事件来发起关机。

1. 硬件连接。

请确保 UPS 设备的 ***“CM5_UPS_DET”*** 引脚连接到 R21xx 设备的 GPIO16 引脚。

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

- 创建一个新的 Python 脚本文件：

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
- 执行以下命令来运行脚本：

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

1. 关于 UPS 功能，请联系我们以获取更多信息。
2. 报警信号为低电平有效。

:::

## AI 加速器

reComputer Industrial R21xx 上的 M.2 M-KEY 2240 插槽用于安装 PCIE M.2 AI 加速器。而 R21xx-12 系列已预装一块 Hailo-8 M.2 AI 加速卡，性能最高可达 26TOPS。
如果你购买的是 R21xx-10 系列产品，则需要另行购买 Hailo 的 NPU 模块以启用 AI 功能。
设备已预装 Hailo 加速器驱动，因此你可以直接使用并运行测试用例：

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
如果你购买的 reComputer 不包含 Hailo-8，并计划额外购买 Hailo 设备进行集成，请参考官方 Hailo 文档（https://github.com/hailo-ai）来配置固件和环境，并运行示例以验证设备可以正常使用。
:::

## PoE IP 摄像机


reComputer Industrial R22xx 系列专为高密度 IP 视频流和工业自动化而设计。它配备了 **5 个物理千兆以太网端口**，采用混合总线架构，以确保最大带宽和稳定性。

**内部总线分布：**

* **eth0（原生）**：直接连接到 SoC。提供最低延迟，推荐用作**主上行链路（WAN）**或**管理端口**。
* **eth1（USB 扩展）**：位于原生端口旁边的独立端口。通过 **USB 3.0 总线**扩展，并支持 **PoE 输出**。
* **eth2、eth3、eth4（PCIe 扩展）**：连续的三个端口。通过 **PCIe 总线**扩展，并支持 **PoE 输出**。


1. 技术规格

| 类别 | 规格 | 备注 |
| :--- | :--- | :--- |
| **端口总数** | 1（原生）+ 4（扩展） | 5x RJ45 千兆以太网 |
| **PoE 模式** | **Alternative A（模式 A）** | 通过数据线对（1/2、3/6）供电 |
| **每端口 PoE 输出** | **12W**（最大） | 针对标准 IP 摄像机优化 |
| **并行 PoE 输出** | 所有 4 个端口可同时支持 12W | 需要足够的系统电源输入 |
| **电源输入范围** | **9V - 36V DC** | 内部升压电路将电压升至 **48V** 以用于 PoE |
| **安全特性** | 过流与欠压保护 | **严禁热插拔** |

2. 关键安全指南
* **禁止热插拔**： 
    > **警告**：在 PoE 供电处于激活状态（GPIO 为高电平）时插拔以太网线，可能会导致瞬态浪涌，从而损坏 LAN7800 或 PCIe 桥接芯片。务必遵循“**先连接，再上电**”原则。
* **电源推荐**：
    > 虽然设备支持 9V 输入，但我们建议使用 **24V** 工业电源，功率至少 **72W**（3A），以确保在 4 个 PoE 端口全部满载（4 × 12W）时仍具有较高的转换效率。


3. 配置步骤

- 步骤 1：禁用冲突服务
为防止桌面级网络管理器覆盖工业静态 IP 设置，请禁用 `NetworkManager`。

```bash
# Switch to systemd-networkd
sudo systemctl disable --now NetworkManager
sudo systemctl mask NetworkManager
sudo systemctl enable --now systemd-networkd
```

- 步骤 2：启用 PoE 自动供电（GPIO）
在 `/etc/rc.local` 中 `exit 0` 行之前添加以下命令，以确保开机时启用 PoE 供电。

```bash
# Export and set PoE Enable Pin (Example: GPIO 532)
echo 652 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio652/direction
echo 1 > /sys/class/gpio/gpio652/value
```

- 步骤 3：多网口 IP 部署
为每个端口分配独立子网，并使用 **RouteMetric** 确保 `eth0` 仍然是访问互联网的默认网关。

```bash
# Configure eth0 (WAN/DHCP) - Highest Priority
sudo bash -c 'cat > /etc/systemd/network/10-eth0.network <<EOF
[Match]
Name=eth0
[Network]
DHCP=yes
[DHCPv4]
RouteMetric=10
EOF'

# Configure eth1-eth4 (Static IP Segments)
for i in {1..4}; do
sudo bash -c "cat > /etc/systemd/network/20-eth$i.network <<EOF
[Match]
Name=eth$i
[Network]
Address=10.0.$((i+2)).10/24
[IPv4]
RouteMetric=$((100+i))
EOF"
done
```

4. 验证与故障排查

- 检查总线连通性
使用 `lspci` 和 `lsusb` 验证系统是否识别到所有控制器：
* **PCIe 扩展端口（eth2-4）**：运行 `lspci | grep Ethernet`
* **USB 扩展端口（eth1）**：运行 `lsusb -t` 并查找 `lan78xx` 驱动。



5. 常见问题
* **问：为什么我的摄像机一直在重启？**
    * 答：检查摄像机的功耗是否超过 **12W**。高功率云台摄像机或带有强红外补光灯的摄像机可能会超过此限制。
* **问：我可以使用 12V DC 输入来供 PoE 吗？**
    * 答：可以。内部电路会将 12V 升压到 48V。但请确保你的 12V 电源能够承受较大的电流，因为在较低输入电压下转换损耗更高。
* **问：接口名称不是 eth1-4。**
    * 答：使用 `ip link` 查找实际的内核名称（例如 `enp1s0`），并在 `.network` 文件中更新 `Name=` 字段。

6. 4 通道 PoE 摄像机支持状态：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.26-1.png" style={{width:800, height:'auto'}}/></div>

### reComputer R22 与 reCamera

本指南提供了通过 PoE 将 reCamera（基于 RISC-V 平台、面向快速边缘 AI 部署的开源模块化 AI 摄像机）连接到 reComputer R22 的分步操作说明。内容涵盖使用 Node-RED 部署 RTSP 流，并在 R22 上预览实时画面。

1. 硬件连接与初始化

  * **兼容型号：** reCamera 系列（PoE 版本，例如 LH-AR01）。
  * **物理连接：** 使用标准以太网线将 reCamera 连接到 R22 上任意一个 PoE 端口（**eth1-eth4**）。
  * **启用 PoE 供电：**
    在 R22 终端中运行以下命令以启用 48V 输出：
    ```bash
    # Enable GPIO 652
    echo 652 > /sys/class/gpio/export
    echo out > /sys/class/gpio/652/direction
    echo 1 > /sys/class/gpio/652/value
    ```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/ip.png" style={{width:800, height:'auto'}}/></div>

2. reCamera 配置（一键 Node-RED 导入）

使用预配置的 `flows.json` 快速部署带身份验证的 RTSP 流。

- **访问控制台：** 打开浏览器并访问 `http://10.0.3.200:1880`（reCamera 默认 IP）。
- **导入配置：**
      * 点击右上角的菜单图标 `≡` -\> **Import**。
      * 上传 [**flows.json**](https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/flows.json) 文件并点击 **Import**。
- **自定义身份验证（必需）：**
      * 双击流程中的 **`RTSP Output`** 节点。
      * 在 **Authentication** 部分设置你的凭据：
          * **Username：** `seeed`
          * **Password：** `seeed`
- **部署：** 点击右上角红色的 **Deploy** 按钮。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/config.png" style={{width:800, height:'auto'}}/></div>

3. 在 R22 上预览视频流

由于 R22（基于 CM4/CM5）支持硬件解码，我们推荐使用 VLC 或 FFplay 进行验证。

4. 方案 A：使用 VLC 图形界面（推荐）

- 在 R22 终端中输入 `vlc` 打开播放器。
- 进入 **Media** -\> **Open Network Stream**。
- 输入带身份验证的 RTSP URL：
    ```text
    rtsp://seeed:seeed@10.0.3.200:554/live
    ```
- 点击 **Play**。

5. 方案 B：使用命令行（快速测试）

直接复制并运行以下命令：

```bash
ffplay -fflags nobuffer -flags low_delay rtsp://seeed:seeed@10.0.3.200:554/live
```

-----

6. 故障排查

| 问题 | 可能原因 | 解决方案 |
| :--- | :--- | :--- |
| **无法 Ping 通 10.0.3.200** | R22 内部 IP 冲突 | 检查 `eth3/eth4` 是否都使用 `10.0.3.10`。手动修改其中一个。 |
| **reCamera 无法启动** | 未启用 PoE 供电 | 确保 `GPIO 652` 被设置为 `1`，且输入电源 \> 12V/3A。 |
| **视频卡顿/延迟** | 网络或 MTU 问题 | 确保在 R22 与 reCamera 之间没有大量广播流量。 |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/recamera.png" style={{width:800, height:'auto'}}/></div>



## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
