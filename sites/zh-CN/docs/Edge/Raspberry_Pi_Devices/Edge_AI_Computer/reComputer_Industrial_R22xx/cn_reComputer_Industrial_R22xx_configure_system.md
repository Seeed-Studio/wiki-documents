---
description: reComputer Industrial R22xx 是一款基于 Raspberry Pi CM5 的工业级 AI NVR，集成 Hailo-8 AI 加速器，算力高达 26 TOPS。其配备 4 个支持 PoE PSE 的千兆以太网端口以及 1 个额外的千兆以太网端口，可实现高带宽视频流传输，并简化 IP 摄像头的 PoE 部署。同时提供丰富的工业 I/O、灵活的无线连接、无风扇散热设计，以及 -20 °C 至 50 °C 的宽工作温度范围，确保在严苛场景下实现可靠的 AI 视频分析和持续稳定运行。
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
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/recomputer_industrial_r22xx_configure_system/
---

## 概述

在安装好设备后，学习如何在 reComputer Industrial R22xx 系列上配置和测试硬件组件。本 Wiki 涵盖 GPIO 映射、USER LED 测试、SPI 通信、Wi-Fi 与 Bluetooth 扫描、LoRa®、4G、5G、基于 Mini-PCIe 的 Zigbee、RS485、RS232、CAN、DI/DO 测试、安全关机 UPS 等内容。

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

**该命令会显示 GPIO 映射和偏移信息**，为调试或配置 GPIO 引脚提供关键信息。

## USER LED 测试

我们为用户提供了红、蓝、绿三种颜色的 LED。你可以进入 /sys/class/leds/ 目录查看：

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

该命令会在指定的 SPI 设备（**/dev/spidev10.0**）上测试 SPI 通信，启用详细输出（ -v ），并发送消息 "hello"（**-p hello**）。
通过短接 TPM 模块的 MISO 和 MOSI 引脚，你实际上创建了一个回环（loopback）场景，即 MOSI 发送的数据会在 MISO 上被接收。该设置允许你在没有实际外接设备的情况下测试 SPI 通信。

## Wi-Fi 扫描

要列出可用的 Wi-Fi 网络及其详细信息，请运行：  

```bash
sudo iwlist wlan0 scan
```

- 该命令会扫描附近所有 Wi-Fi 网络，并显示其 SSID、信号强度和加密类型。  

## Bluetooth 扫描  

要扫描 Bluetooth 设备，请按照以下步骤操作：  

**打开 Bluetooth 控制界面：**  

```bash
sudo bluetoothctl
```

该命令会打开 Bluetooth 控制界面。在此界面中，你可以运行其他命令来扫描附近的 Bluetooth 设备。

**启用扫描：**  

```bash
scan on
```

该命令会开始扫描附近的 Bluetooth 设备。随后你可以在 ***bluetoothctl*** 界面中使用其他命令与 Bluetooth 设备交互，例如配对或连接。

## 基于 Mini-PCIe 的 LoRa®

### LoRa® SPI 配置  

在将 LoRa® SPI 模块安装到 Mini-PCIe 插槽 2 后，可以按以下步骤配置 LoRa® SPI：

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

将以下行：  

```c
#define I2C_DEVICE "/dev/i2c-1"
```

修改为：  

```c
#define I2C_DEVICE "/dev/i2c-2"
```

将 **#define I2C_DEVICE "/dev/i2c-1"** 修改为 **#define I2C_DEVICE "/dev/i2c-2"。**
按下 **ctrl+x** 退出，按 **y** 保存更改，然后按 **Enter** 返回命令行页面。

4. 添加 packet_forwarder/reset_lgw.sh 文件：

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

按下 **ctrl+x** 退出，按 **y** 保存更改，然后按 **Enter** 返回命令行页面。

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

该命令指定了用于 LoRa® USB 的配置文件。

## 基于 M.2 B-KEY 的 5G 蜂窝网络

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

等待 10–15 秒（模块上电并通过 USB 枚举需要一定时间），然后检查设备节点是否出现：

```bash
ls /dev/ttyUSB*
```

输出 /dev/ttyUSB0 等设备节点：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.8_5g_cellular_over_m.2_b-key_1.png" style={{width:800, height:'auto'}}/></div>
使用合适的串口和波特率打开 minicom：

```bash
sudo apt update
sudo apt install minicom
sudo minicom -D /dev/ttyUSB2 -b 115200
```

该命令会使用指定串口（***/dev/ttyUSB2***）并以 115200 波特率打开 minicom。

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

## 基于 Mini-PCIe 的 4G 蜂窝网络

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

依次按下 Ctrl+A、Z、E。先发送 AT 测试是否已连接，如果出现 OK，则表示连接成功。
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

## 基于 Mini-PCIe 的 Zigbee

要测试两个 Zigbee 模块之间的 **Zigbee 通信**，请按照以下步骤操作：  

1. 检查可用串口

使用以下命令检查可用串口：

```bash
cat /dev/ttyUSB*
```

**安装串口通信工具**

2. 安装串口通信工具：

```bash
sudo apt-get install cutecom
```

3. 为协调器（第一个 Zigbee 模块）打开串口：

- 打开 cutecom 工具，并为第一个串口进行如下配置：
- 波特率：***115200***
- 在界面底部勾选 ***"Hex output"*** 选项。
- 按照以下步骤配置第一个 Zigbee 模块：
- 设置为协调器：发送命令 ***‘55 04 00 05 00 05’***，期望响应 ***‘55 04 00 05 00 05’***。
- 复位设备：按下复位按钮或发送命令 ***‘55 07 00 04 00 FF FF 00 04’***。
- 建立网络：发送命令 ***‘55 03 00 02 02’***。

4. 为路由器（第二个 Zigbee 模块）打开串口：
再打开一个 ***cutecom*** 实例，并使用与之前相同的设置为第二个串口进行配置。
按照以下步骤配置第二个 Zigbee 模块：

- 设置为路由器：发送命令 ***‘55 04 00 05 01 04’***，期望响应 ***‘55 04 00 05 00 05’***。
- 复位设备：按下复位按钮或发送命令 ***‘55 07 00 04 00 FF FF 00 04’***。
- 加入网络：发送命令 ***‘55 03 00 02 02’***。

5. 检查设备状态：
发送命令 ***‘55 03 00 00 00’*** 来检查设备状态。期望收到类似 ***‘55 2a 00 00 00 01 XX XX XX XX’*** 的响应，其中 ‘XX’ 表示设备信息。
6. 进入透传模式：
如果建网成功，通过发送命令 ***55 07 00 11 00 03 00 01 13*** 进入透传模式。两个模块都应处于透传模式以实现直接通信。要退出透传模式，发送 "+++"。
7. 补充说明：

- 如果路由器配置失败，设备可能已经是协调器。可使用命令 '55 07 00 04 02 xx xx xx' 退出网络。
- 使用命令 '55 04 0D 00 00 0D'（查询）和 '55 04 0D 01 XX XX'（设置）测试发射功率。
请确保将 ***/dev/ttyUSB*** 替换为每个 Zigbee 模块对应的正确串口。请仔细按照这些步骤操作，以成功测试两个模块之间的 Zigbee 通信。

## RS485 测试

reComputer Industrial R21xx 包含 **2 个 RS485 接口**。它们对应的 **COM 口** 和 **设备文件** 如下：  

| **RS485 接口数量** | **COM 口** | **丝印标识** | **设备文件** |
|---------------------------|--------------|----------------------|-----------------|
| **RS485-2**               | COM2         | A2/B2/GND3           | `/dev/ttyACM1`  |
| **RS485-3**               | COM3         | A3/B3/GND4           | `/dev/ttyACM2`  |

要测试 RS485 功能，可以按照以下步骤进行（以 RS485_1 和 RS485_2 为例）：

1. 请将 RS485_1 和 RS485_2 的 A、B 端连接在一起。
2. 分别在两个终端窗口中打开 minicom：

```bash
sudo minicom -D /dev/ttyACM1
sudo minicom -D /dev/ttyACM2
```

:::note
 如果有扩展板，编号需要往后顺延一位，例如 ***/dev/ttyAcM2***、***/dev/ttyAcM3***。
:::

3. 需要在两个已打开的 ACM 上执行以下操作：

- 按 ***Ctrl+A***，然后按 ***Z***，会出现 Minicom 命令摘要界面：
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_1.png" style={{width:800, height:'auto'}}/></div>
- 再按 ***O*** 打开配置，选择 Serial port setup，并按 ***Enter***；打开所有与 RS485 相关的选项，依次按 ***H/I/J/K/L*** 将其打开；
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_2.png" style={{width:800, height:'auto'}}/></div>

- 当所有选项都显示为 "YES" 后，按 Enter 返回，然后选择 Exit 退出。

:::note

以 ACM2 和 ACM3 为例：
如果要从 ACM2 发送到 ACM3，需要重新设置 ACM2：***ctrl+A***，然后按 ***Z*** 再按 ***E***，然后开始串口写命令。此时可以在 ACM2 中任意打印字符串，同时可以在 ACM3 中看到 ACM2 的内容；
反之，如果要从 ACM3 发送到 ACM2，需要重新设置 ACM3：***ctrl+A***，然后按 ***Z*** 再按 ***E***，然后开始串口写命令。此时可以在 ACM3 中任意打印字符串，同时可以在 ACM2 中看到 ACM3 的内容，如图所示。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_3.png" style={{width:800, height:'auto'}}/></div>

## RS232 测试

reComputer Industrial R21xx 包含 **2 个 RS232** 接口，对应的 **COM 口** 和 **设备文件** 如下：

| **RS232 接口数量** | **COM 口** | **丝印标识** | **设备文件** |
|---------------------------|--------------|----------------------|-----------------|
| **RS232-1**               | COM1         | RX1/TX1/GND1         | `/dev/ttyACM0`  |
| **RS232-2**               | COM2         | RX2/TX2/GND2         | `/dev/ttyACM1`  |

由于 RS232 为全双工通信，可直接将 RS232 的 TX 和 RX 短接以进行回环测试。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.12-1.png" style={{width:800, height:'auto'}}/></div>

你需要打开两个终端，如果连接了扩展板则使用 ACM1，如果未连接扩展板则使用 ACM2：
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

reComputer Industrial R21xx 包含 4 个 DI 接口，用户可以根据实际需求对这些接口进行配置。

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
2. 输入以下命令获取 GPIO 状态：

```bash
echo 588 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio588/direction
cat /sys/class/gpio/gpio588/value
```

3. 当外部电平为高时，***/sys/class/gpio/gpio588/value*** 的值为 0；当外部电平为低时，***/sys/class/gpio/gpio588/value*** 的值为 1。

## DO（数字输出）

reComputer Industrial R21xx 包含 4 个 DO 接口，用户可以根据实际需求对这些接口进行配置。

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

3. 当外部电平为高时，/sys/class/gpio/gpio638/value 的值为 0；当外部电平为低时，/sys/class/gpio/gpio638/value 的值为 1。

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

由于 reComputer Industiral R22xx 仅配备单路 CAN 接口，无法独立完成回环测试。要验证其通信功能，需要一个外部对端设备或 USB 转 CAN 适配器。本次测试中，将使用配备双路 CAN 接口的 reComputer Industiral R21xx 作为对端节点，与 reComputer Industiral R22xx 建立连接。具体连接方案和配置步骤请参考以下教程：

1. 使用两根杜邦线将 can0 和 can1 的 H-H 与 L-L 短接，形成最小回路测试。

```bash
CAN_H─────●───── CAN-H
CAN_L─────●───── CAN-L
G_CAN_H─────●───── G_CAN
```

2. 确认系统中确实出现了 can0 和 can1 这两个网络接口，以防驱动未加载：

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
使用 can-utils 来发送和接收数据。

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

运行该命令后，应会显示系统中已连接 USB 设备的信息，包括所有存在的 USB hub。
如果 USB hub 工作正常，你应该能在 lsusb 命令的输出中看到它的详细信息。如果没有列出，可能是 hub 本身或其与系统连接存在问题。在这种情况下，你可能需要对 USB hub 或其连接进行排查。

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

该命令将读取并显示存储在 RTC 中的时间。

5. 断开 RTC 的电源，等待几分钟，然后重新接通电源，再次检查 RTC 时间以确认是否保持了正确时间。

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

该命令会触发内核崩溃，并应导致看门狗重启系统。

5. 监控系统以确认其在指定超时时间后重新启动。
这些步骤将帮助你测试并确保系统上的看门狗定时器功能正常。

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

该命令指示 ATECC 工具使用槽 10（-b 10），将序列号大小设置为 192 位 ***( -s 192 )***，并生成一个随机序列号 ***( -c 'serial' )***。输出将是生成的序列号，例如 ***"01235595d3d621f0ee"***。
通过该过程，你可以与 ATECC608A 设备交互并执行各种操作，例如生成随机序列号。

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

要列出包括 SSD 在内的磁盘，可以使用 fdisk -l 命令。具体如下：

```bash
sudo fdisk -l
```

该命令会显示系统中连接的所有磁盘列表，如果 SSD 被正确检测到，也会包含在内。查找代表 SSD 的条目，它们通常以 ***/dev/sd*** 开头，后面跟一个字母（例如 ***/dev/sda, /dev/sdb,*** 等）。
确定与 SSD 对应的条目后，你就可以根据需要对其进行分区或格式化。

## 用于安全关机的 UPS

CPU 与直流电源输入之间的 GPIO6 用于在电源掉电时向 CPU 报警。然后 CPU 应在超级电容能量耗尽前，通过脚本执行一些紧急操作并运行 "$ shutdown"。
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

- 将以下代码复制并粘贴到该文件中：

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

1. 如需了解 UPS 功能，请联系我们获取更多信息。
2. 报警信号为有效低电平。

:::

## AI 加速器

reComputer Industrial R21xx 上的 M.2 M-KEY 2280 插槽用于安装 PCIE M.2 AI 加速器。而 R21xx-12 系列已预装一块 Hailo-8 M.2 AI 加速卡，性能最高可达 26TOPS。
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
如果你购买的 reComputer 不包含 Hailo-8，并计划购买 Hailo 设备进行集成，请参考 Hailo 官方文档 (https://github.com/hailo-ai) 来配置固件和环境，并运行示例以验证设备是否可以正常使用。
:::

## PoE IP 摄像机

:::note
- 四个以太网口不能配置在同一网段：否则会导致网络冲突并引起通信失败。
- 以太网口不支持热插拔：在插拔网线前，必须先关闭开发板和摄像机电源；热插拔可能会对网口造成永久性硬件损坏。
- 严禁为 IP 摄像机提供外接电源：摄像机应仅通过以太网线的 PoE 供电；额外提供外接电源可能导致电流回流并损坏开发板的以太网口。
:::

1. 连接网线并启动网口：

```bash
echo 652 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio652/direction
echo 1 > /sys/class/gpio/gpio652/value
```

2. 配置网口：

推荐使用 systemd-networkd 进行网络管理；配置在重启后不会丢失，并且不会与其他网络工具产生冲突。步骤分为两部分：“临时测试与验证”和“永久配置固化”。

```bash
sudo systemctl enable --now systemd-networkd
sudo systemctl status systemd-networkd | grep -E 'active|error'
```
:::Note: 物理网口与虚拟网口地址的对应关系：
ETH0-eth0
ETH1-eth4
ETH2-eth3
ETH3-eth2
ETH4-eth1
:::

3. 以 eth1 为例，假设 IP 摄像机的 IP 地址为 10.0.3.200，网口配置方法如下：

- 临时配置 IP：

```bash
# Clear existing IP on eth1 to avoid conflicts
sudo ip addr flush dev eth1

# Shut down the port and reconfigure
sudo ip link set eth1 down
sudo ip addr add 10.0.3.10/24 dev eth1
sudo ip link set eth1 up

# Verify IP configuration (should display inet 10.0.3.10/24)
ip addr show eth1 | grep inet

# Test connectivity with the camera (0% packet loss indicates normal status)
ping 10.0.3.200 -I eth1 -c 3
```

- 永久配置 IP：

```bash
# Create the eth1 configuration file
sudo nano /etc/systemd/network/eth1.network

[Match]
Name=eth1 # Matches the interface name; replace if the actual name differs (e.g., enx00e04c68xxxx)

[Network]
Address=10.0.3.10/24 # Static IP and subnet mask
DHCP=no # Disable DHCP auto-acquisition
IPv6AcceptRA=no # Disable IPv6 to reduce interference

#[Link]
NamePolicy=kernel database onboard slot path # Maintain stable interface naming
```

- 保存并退出：按 Ctrl+O → Enter 确认 → 按 Ctrl+X。

其他网口的配置方法相同，最多可同时挂载 4 个 IP 摄像机。
四个 IP 摄像机配置示例如下表所示：

| 以太网口	| 对应摄像机 IP	| 开发板静态 IP	| 摄像机用户名和密码| 
| eth1	| 10.0.3.200	| 10.0.3.10	| admin & c32bdc3e| 
| eth2	| 10.0.2.200	| 10.0.2.10	| admin & c32bdc3e| 
| eth3	| 10.1.4.200	| 10.1.4.10	| admin & 9c7d1f96| 
| eth4	| 10.1.1.200	| 10.1.1.1	| admin & c32bdc3e  | 
按照上述步骤配置各个网段：

```bash
# ========== Batch Temporary Configuration for eth1-eth4 and Connectivity Testing ==========

# eth1 (Corresponding to camera 10.0.3.200)
sudo ip addr flush dev eth1
sudo ip link set eth1 down
sudo ip addr add 10.0.3.10/24 dev eth1
sudo ip link set eth1 up

# eth2 (Corresponding to camera 10.0.2.200)
sudo ip addr flush dev eth2
sudo ip link set eth2 down
sudo ip addr add 10.0.2.10/24 dev eth2
sudo ip link set eth2 up

# eth3 (Corresponding to camera 10.1.4.200)
sudo ip addr flush dev eth3
sudo ip link set eth3 down
sudo ip addr add 10.1.4.10/24 dev eth3
sudo ip link set eth3 up

# eth4 (Corresponding to camera 10.1.1.200)
sudo ip addr flush dev eth4
sudo ip link set eth4 down
sudo ip addr add 10.1.1.1/24 dev eth4
sudo ip link set eth4 up

# Verify IP configuration for all ports (should display the static IP for each port)
echo -e "\n==== IP Configuration Status for Each Port ===="
ip addr show | grep -E 'eth[1-4]|inet '

# Test connectivity with all cameras (0% packet loss indicates normal status)
echo -e "\n==== Connectivity Test for Each Camera ===="
ping 10.0.3.200 -I eth1 -c 3
ping 10.0.2.200 -I eth2 -c 3
ping 10.1.4.200 -I eth3 -c 3
ping 10.1.1.200 -I eth4 -c 3
```

然后使用 VLC 进行访问：

```bash
vlc rtsp://admin:c32bdc3e@10.0.3.200/h264/ch1/main/av_stream --no-one-instance &
vlc rtsp://admin:c32bdc3e@10.0.2.200/h264/ch1/main/av_stream --no-one-instance &
vlc rtsp://admin:9c7d1f96@10.1.4.200/h264/ch1/main/av_stream --no-one-instance &
vlc rtsp://admin:c32bdc3e@10.1.1.200/h264/ch1/main/av_stream --no-one-instance
```

如果需要关闭所有摄像机窗口，请执行以下命令：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.26-1.png" style={{width:800, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢你选择我们的产品！我们为你提供多种支持方式，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
