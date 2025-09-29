---
description: 树莓派双通道 CAN BUS FD 扩展板
title: 树莓派双通道 CAN BUS FD 扩展板
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![enter image description here](https://files.seeedstudio.com/wiki/CAN-BUS-FD/MCP2518FD.png)

这是一款适用于树莓派的 CAN BUS 扩展板（以下简称双通道 pi hat），具有 2 通道 CAN BUS I/O，支持 [CAN FD](https://en.wikipedia.org/wiki/CAN_FD)。CAN FD 支持更快的传输速度（高达 8Mbps）

它还具有两个板载 120Ω 终端电阻，由开关控制。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/CAN-BUS-FD-HAT-for-Raspberry-Pi-p-4742.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本说明

树莓派 CAN BUS 扩展板有 **3 个版本**。所有 3 个版本都能在树莓派平台上完美工作，如果您使用的是 RPi 平台，可以跳过本节。

CAN BUS 扩展板目前仅支持 Jetson Nano 开发者套件（SD 卡版本），不支持带有 eMMC 的 Jetson Nano（reComputer J1010/J1020v2）。不同版本的 CAN BUS 扩展板**确实会影响功能**，如果您在 Jetson Nano 平台上使用，请仔细查看下表。

|产品名称|芯片|RPi 状态|Jetson Nano 状态|
|--|--|--|--|
|[树莓派双通道 CAN-BUS(FD) 扩展板 (MCP2517FD)](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html)|MCP2517FD|双通道|单通道(can0)|
|[树莓派双通道 CAN-BUS(FD) 扩展板 (MCP2518FD)](https://www.seeedstudio.com/CAN-BUS-FD-HAT-for-Raspberry-Pi-p-4742.html)|MCP2518FD|双通道|双通道|

如您所见，树莓派双通道 CAN-BUS(FD) 扩展板有两个版本的芯片 (MCP2517FD)，两个通道都能在 RPi 上工作，但在 Jetson Nano 平台上只有单通道 (CAN0) 工作！

## 特性

- 高速传输速率：8Mbps@10m 20AWG 屏蔽电缆 / 1Mbps@40m 20AWG 屏蔽电缆
- 稳定的电源供应，可选择树莓派电源或 DC 电源
- 兼容树莓派 2、树莓派 3、树莓派 3、树莓派 4 和树莓派 Zero
- 一键配置 120Ω 终端电阻
- 支持 CAN FD

## 硬件概述

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/block.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/block.jpg" alt="Raspberry Pi CAN BUS shield" title="hardware overview" /></a>
  <figcaption><b>图 1</b>. <i>硬件概述(MCP2517)</i></figcaption>
</figure>
</div>

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/block2.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/block2.jpg" alt="Raspberry Pi CAN BUS shield" title="hardware overview" /></a>
  <figcaption><b>图 2</b>. <i>硬件概述(MCP2517)</i></figcaption>
</figure>
</div>

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/block-diagram.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/block-diagram.jpg" alt="Raspberry Pi CAN BUS shield" title="hardware overview" /></a>
  <figcaption><b>图 3</b>. <i>框图(MCP2517)</i></figcaption>
</figure>
</div>

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/CAN-BUS-FD/CANBUS_REVIEW.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/CANBUS_REVIEW.png" alt="Raspberry Pi CAN BUS shield" title="hardware overview" /></a>
  <figcaption><b>图 4</b>. <i>硬件概述(MCP2518FD)</i></figcaption>
</figure>
</div>

## 安装指南

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/setup.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/setup.jpg" alt="Raspberry Pi CAN BUS shield" title="hardware overview" /></a>
  <figcaption><b>图 4</b>. <i>安装指南</i></figcaption>
</figure>
</div>

:::caution
您可以看到我们在组装过程中使用了尼龙柱，以避免 CAN BUS 端口下方的金属端子与树莓派上的 HDMI 接口之间发生短路。因此，请务必按照图示安装尼龙柱。
:::

## 规格参数

|参数|值|
|---|---|
|电源输入|12V~24V DC<br />树莓派 GPIO 5V|
|CAN FD 控制器| [MCP2517FD](https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/res/MCP2517-datasheet.pdf) |
|CAN FD 收发器|[MCP2557FD](https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/res/MCP2557-datasheet.pdf)|
|CAN FD 通道|2|
|传输速率|8Mbps@10m 20AWG 屏蔽电缆 <br /> 1Mbps@40m 20AWG 屏蔽电缆|
|与树莓派的通信接口|SPI|
|Grove 接口|Grove I2C x2|

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div> | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 入门指南

### 所需材料

| 树莓派 | 2通道 CAN-BUS(FD) 扩展板| Arduino 开发板 |CAN-BUS 扩展板 V2 |
|--------------|-------------|-----------------|-----|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![](https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/img/CAN_BUS_Shield_V2.jpg)|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html)|[立即购买](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)|[立即购买](https://www.seeedstudio.com/CAN-BUS-Shield-V2.html)|

:bulb: **注意：** 树莓派 2 通道 CAN BUS FD 扩展板仅支持内核版本 6.6.42 及以下版本。

我们还需要两根[公对公跳线](https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-241mm-200mm-160mm-117m-p-234.html)和电源线来为这些开发板供电。

### 硬件连接

- **步骤 1**. 按照[安装指南](#安装指南)将 2 通道 CAN-BUS(FD) 扩展板插入树莓派。

- **步骤 2**. 将 CAN BUS 扩展板 V2 插入 Seeeduino（或 Arduino）开发板

- **步骤 3**. 使用跳线连接两个扩展板的 CAN 端子。

|2 通道 CAN-BUS(FD) 扩展板|CAN-BUS 扩展板 V2|
|---|---|
|CAN_0_L|CANL|
|CAN_0_H|CANH|

:::tip
    您可以在扩展板背面找到丝印标识。
:::

- **步骤 4**. 为树莓派和 Seeeduino 供电。

![](https://files.seeedstudio.com/pi_hat_hardware_connection.jpg)

### 软件

#### 安装 CAN-HAT

- **步骤 1**. 打开 **config.txt** 文件

```sh
sudo nano /boot/config.txt
```

- **步骤 2**. 在文件末尾添加以下行

```sh
dtoverlay=seeed-can-fd-hat-v2
```

- **步骤 3**. 按 **Ctrl + x**，按 **y** 然后按 **Enter** 来**保存**文件

- **步骤 4**. **重启** Raspberry Pi

```sh
sudo reboot
```

- **步骤 5**. 检查内核日志以查看 CAN-BUS HAT 是否成功初始化。您还将在 ifconfig 结果列表中看到 **can0** 和 **can1** 出现

```cpp
pi@raspberrypi:~ $ dmesg | grep spi
[    6.178008] mcp25xxfd spi0.0 can0: MCP2517FD rev0.0 (-RX_INT +MAB_NO_WARN +CRC_REG +CRC_RX +CRC_TX +ECC -HD m:20.00MHz r:18.50MHz e:0.00MHz) 成功初始化。
[    6.218466] mcp25xxfd spi0.1 (unnamed net_device) (uninitialized): 检测 MCP25xxFD 失败 (osc=0x00000000)。

pi@raspberrypi:~ $ ifconfig -a
can0: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        device interrupt 166

can1: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        device interrupt 167

eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 10.0.0.13  netmask 255.255.255.0  broadcast 10.0.0.255
        inet6 fe80::44cc:eeb8:47a0:7fce  prefixlen 64  scopeid 0x20<link>
        ether b8:27:eb:25:d4:e0  txqueuelen 1000  (Ethernet)
        RX packets 299  bytes 27437 (26.7 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 172  bytes 25974 (25.3 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlan0: flags=4098<BROADCAST,MULTICAST>  mtu 1500
        ether b8:27:eb:70:81:b5  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

- **步骤 6**. 设置 can fd 协议，dbitrate 可以设置为 8M 速度。[更多用法请参考内核文档](https://www.kernel.org/doc/Documentation/networking/can.txt)

```sh
sudo ip link set can0 up type can bitrate 1000000   dbitrate 8000000 restart-ms 1000 berr-reporting on fd on
sudo ip link set can1 up type can bitrate 1000000   dbitrate 8000000 restart-ms 1000 berr-reporting on fd on

sudo ifconfig can0 txqueuelen 65536
sudo ifconfig can1 txqueuelen 65536
```

- **步骤 7**. 打开两个终端窗口，在 Windows 中输入以下命令来测试 can fd 协议。

```sh
#发送数据
cangen can0 -mv 
```

```sh
#转储数据
candump can0
```

> 您可以通过使用跳线连接两个通道来测试 CAN-BUS：0_L &lt;===&gt; 1_L，0_H &lt;===&gt; 1_H。

#### 与 Arduino CAN BUS Shield 通信

在此演示中，我们只使用两个通道中的一个。

对于 Arduino CAN BUS Shield，我们提供了 Arduino 代码，如果您不知道如何使用 Arduino，请查看[这里](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。

对于 2 通道 pi hat，有两种发送和接收的方式，您可以使用 **can-util**/**cangen** 和 **python 代码**。

##### CAN BUS Shield 发送和 CAN HAT 接收

CAN BUS Shield 的 Arduino 代码：

```cpp
// demo: CAN-BUS Shield, send data
// loovee@seeed.cc

#include <mcp_can.h>
#include <SPI.h>

// the cs pin of the version after v1.1 is default to D9
// v0.9b and v1.0 is default D10
const int SPI_CS_PIN = 9;

MCP_CAN CAN(SPI_CS_PIN);                                    // Set CS pin

void setup()
{
    Serial.begin(115200);

    while (CAN_OK != CAN.begin(CAN_500KBPS))              // init can bus : baudrate = 500k
    {
        Serial.println("CAN BUS Shield init fail");
        Serial.println(" Init CAN BUS Shield again");
        delay(100);
    }
    Serial.println("CAN BUS Shield init ok!");
}

unsigned char stmp[8] = {0, 0, 0, 0, 0, 0, 0, 0};
void loop()
{
    //send data:  id = 0x00, standrad frame, data len = 8, stmp: data buf
    stmp[7] = stmp[7]+1;
    if(stmp[7] == 100)
    {
        stmp[7] = 0;
        stmp[6] = stmp[6] + 1;
        
        if(stmp[6] == 100)
        {
            stmp[6] = 0;
            stmp[5] = stmp[6] + 1;
        }
    }
    
    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // send data per 100ms
}
// END FILE

```

树莓派设置，您可以使用 **can-util** 来接收

```cpp
#设置 500k 波特率
pi@raspberrypi:~ $ sudo ip link set can0 up type can bitrate 500000
pi@raspberrypi:~ $ ip -details link show can0
3: can0: <NOARP,UP,LOWER_UP,ECHO> mtu 16 qdisc pfifo_fast state UNKNOWN mode DEFAULT group default qlen 10
    link/can  promiscuity 0 
    can state ERROR-ACTIVE (berr-counter tx 0 rx 0) restart-ms 0 
   bitrate 500000 sample-point 0.875 
   tq 25 prop-seg 34 phase-seg1 35 phase-seg2 10 sjw 1
   mcp25xxfd: tseg1 2..256 tseg2 1..128 sjw 1..128 brp 1..256 brp-inc 1
   mcp25xxfd: dtseg1 1..32 dtseg2 1..16 dsjw 1..16 dbrp 1..256 dbrp-inc 1
   clock 40000000numtxqueues 1 numrxqueues 1 gso_max_size 65536 gso_max_segs 65535 
#接收
pi@raspberrypi:~ $ candump can0
  can0  000   [8]  00 00 00 00 00 00 00 05
  can0  000   [8]  00 00 00 00 00 00 00 06
  can0  000   [8]  00 00 00 00 00 00 00 07
  can0  000   [8]  00 00 00 00 00 00 00 08
  can0  000   [8]  00 00 00 00 00 00 00 09
  can0  000   [8]  00 00 00 00 00 00 00 0A
  can0  000   [8]  00 00 00 00 00 00 00 0B
  can0  000   [8]  00 00 00 00 00 00 00 0C
  can0  000   [8]  00 00 00 00 00 00 00 0D
  can0  000   [8]  00 00 00 00 00 00 00 0E
  can0  000   [8]  00 00 00 00 00 00 00 0F
  can0  000   [8]  00 00 00 00 00 00 00 10
  can0  000   [8]  00 00 00 00 00 00 00 11
  can0  000   [8]  00 00 00 00 00 00 00 12
  can0  000   [8]  00 00 00 00 00 00 00 13
  can0  000   [8]  00 00 00 00 00 00 00 14
  can0  000   [8]  00 00 00 00 00 00 00 15
  can0  000   [8]  00 00 00 00 00 00 00 16
  can0  000   [8]  00 00 00 00 00 00 00 17
  can0  000   [8]  00 00 00 00 00 00 00 18
  can0  000   [8]  00 00 00 00 00 00 00 19
  can0  000   [8]  00 00 00 00 00 00 00 1A
  can0  000   [8]  00 00 00 00 00 00 00 1B
  can0  000   [8]  00 00 00 00 00 00 00 1C
  can0  000   [8]  00 00 00 00 00 00 00 1D
```

或者您可以使用 **python 代码** 来获取 CAN 数据。要使用 python 接收 CAN 数据，您应该首先安装 python-can。

```sh
# install python-can
sudo pip3 install python-can
```

打开一个新的 python 文件并复制以下代码，保存为 **can_test.py**：

```python
import can

can_interface = 'can0'
bus = can.interface.Bus(can_interface, bustype='socketcan_native')
while True:
    message = bus.recv(1.0) # Timeout in seconds.
    if message is None:
            print('Timeout occurred, no message.')
    print(message)
```

运行 Python 代码，结果如下：

```sh
pi@raspberrypi:~ $ python3 can_test.py
Timestamp: 1550471771.628215        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0e 63     Channel: can0
Timestamp: 1550471772.629302        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 00     Channel: can0
Timestamp: 1550471773.630658        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 01     Channel: can0
Timestamp: 1550471774.632018        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 02     Channel: can0
Timestamp: 1550471775.633395        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 03     Channel: can0
Timestamp: 1550471776.634774        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 04     Channel: can0
Timestamp: 1550471777.636135        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 05     Channel: can0
Timestamp: 1550471778.637481        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 06     Channel: can0
Timestamp: 1550471779.638859        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 07     Channel: can0
Timestamp: 1550471780.640222        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 08     Channel: can0
Timestamp: 1550471781.641602        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 09     Channel: can0
Timestamp: 1550471782.642970        ID: 0000    S                DLC:  8    00 00 00 00 00 00 0f 0a     Channel: can0
```

##### CAN BUS Shield 接收和 CAN HAT 发送

对于树莓派，您可以使用 **cangen** 发送随机数据包：

```sh
pi@raspberrypi:~ $ cangen can0 -v 
  can0  442#14.C4.1A.1A.C2.25.79.25
  can0  748#4E.C7.8B.0B.6E.B9.15.77
  can0  1E4#64.D4.62.22.2F.A6.BF
  can0  1DD#69.6F.61.33.1F.59.E4.7C
  can0  63D#
  can0  764#2C.C1.E3
  can0  68B#11.9C.63.6D.EA.E9.4B
  can0  329#DA.06.2C.34.6C
  can0  7DD#2E.F5.E0.2A.26.77.58.38
  can0  1BE#94.30.6E.2F.A2.7B.E3.1D
  can0  654#D1.21.A3.58.31.E8.51.5F
  can0  706#51.41.36.5C.43.8D.AE.5D
  can0  34A#89.F2.DE.33.AE.52.38.6C
  can0  6AC#C1.35.83.41.37
  can0  38C#22.AF
  can0  208#22.8E.97.58.E5.69.F7.2C
```

对于 Arduino，您可以使用以下代码来接收 CAN 数据。

```cpp
// demo: CAN-BUS Shield, receive data with interrupt mode
// when in interrupt mode, the data coming can't be too fast, must >20ms, or else you can use check mode
// loovee, 2014-6-13

#include <SPI.h>
#include "mcp_can.h"

// the cs pin of the version after v1.1 is default to D9
// v0.9b and v1.0 is default D10
const int SPI_CS_PIN = 9;

MCP_CAN CAN(SPI_CS_PIN);                                    // Set CS pin


unsigned char flagRecv = 0;
unsigned char len = 0;
unsigned char buf[8];
char str[20];

void setup()
{
    Serial.begin(115200);

    while (CAN_OK != CAN.begin(CAN_500KBPS))              // init can bus : baudrate = 500k
    {
        Serial.println("CAN BUS Shield init fail");
        Serial.println(" Init CAN BUS Shield again");
        delay(100);
    }
    Serial.println("CAN BUS Shield init ok!");

    attachInterrupt(0, MCP2515_ISR, FALLING); // start interrupt
}

void MCP2515_ISR()
{
    flagRecv = 1;
}

void loop()
{
    if(flagRecv) 
    {                                   // check if get data

        flagRecv = 0;                   // clear flag

        // iterate over all pending messages
        // If either the bus is saturated or the MCU is busy,
        // both RX buffers may be in use and reading a single
        // message does not clear the IRQ conditon.
        while (CAN_MSGAVAIL == CAN.checkReceive()) 
        {
            // read data,  len: data length, buf: data buf
            CAN.readMsgBuf(&len, buf);

            // print the data
            for(int i = 0; i<len; i++)
            {
                Serial.print(buf[i]);Serial.print("\t");
            }
            Serial.println();
        }
    }
}

```

通过点击 **工具-> 串口监视器** 打开 Arduino IDE 的 **串口监视器**。或者同时按下 `ctrl`+`shift`+`m` 键。将波特率设置为 **115200**。结果应该如下所示：

![](https://github.com/Seeed-Studio/pi-hats/raw/master/images/arduino_receive.png)

或者您可以使用 **python-can** 来发送数据：

Python 代码如下：

```python
import time
import can

bustype = 'socketcan_native'
channel = 'can0'

def producer(id):
    """:param id: Spam the bus with messages including the data id."""
    bus = can.interface.Bus(channel=channel, bustype=bustype)
    for i in range(10):
        msg = can.Message(arbitration_id=0xc0ffee, data=[id, i, 0, 1, 3, 1, 4, 1], extended_id=False)
        bus.send(msg)
    # Issue #3: Need to keep running to ensure the writing threads stay alive. ?
    time.sleep(1)

producer(10)
```

#### 卸载 CAN-HAT

如果您想卸载此 CAN-HAT，只需运行以下代码：

```sh
pi@raspberrypi:~/seeed-linux-dtoverlays/modules/CAN-HAT $ sudo ./uninstall.sh
...
------------------------------------------------------
Please reboot your raspberry pi to apply all settings
Thank you!
------------------------------------------------------
```

## 在 Jetson Nano 上使用 CAN-BUS 扩展板

现在 CAN-BUS 扩展板也支持 Jetson Nano 平台，但基于不同的硬件版本存在一些限制。如果您使用的是 Jetson Nano 平台，请参考[**版本声明**](https://wiki.seeedstudio.com/cn/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/#version-declare)！

- 克隆仓库：

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- 构建 dtbo 和驱动程序：

```sh
cd seeed-linux-dtoverlays
export CUSTOM_MOD_LIST="CAN-HAT"; make all_jetsonnano
```

- 安装驱动程序：

```sh
sudo -E make install_jetsonnano
```

- 安装 dtbo：

```sh
sudo cp overlays/jetsonnano/2xMCP2518FD-spi0.dtbo /boot
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "Seeed 2xMCP2518FD"
sudo reboot
```

现在您也可以运行 `dmesg | grep spi` 和 `ifconfig -a` 来检查 CAN-BUS 是否正确初始化。根据您的硬件，您应该能够看到 **can0 或者 can0 和 can1**。

:::note
这里使用的硬件是**最新的支持 Jetson Nano 平台双通道的 2-Channel CAN FD Master Hat for RPi，如果您使用的是旧版本，那么您将只有单通道 can0**。
:::

```sh
qqq@jetson-qqq:~$ dmesg | grep spi
[   10.867712] mcp25xxfd spi0.0 can0: MCP2518FD rev0.0 (-RX_INT -MAB_NO_WARN +CRC_REG +CRC_RX +CRC_TX +ECC -HD m:20.00MHz r:18.50MHz e:0.00MHz) successfully initialized.
[   10.879487] mcp25xxfd spi0.1 can1: MCP2518FD rev0.0 (-RX_INT -MAB_NO_WARN +CRC_REG +CRC_RX +CRC_TX +ECC -HD m:20.00MHz r:18.50MHz e:0.00MHz) successfully initialized.

qqq@jetson-qqq:~$ ifconfig -a
can0: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        device interrupt 112

can1: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        device interrupt 114
```

### 测试

> **注意：** 这里使用 2-Channel CAN FD Master Hat for RPi 作为硬件。

您也可以按如下方式连接通道进行测试：

0_L &lt;===&gt; 1_L

0_H &lt;===&gt; 1_H

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/jetson-connect.png"/></div>

打开两个终端窗口，在窗口中输入以下命令来测试 can fd 协议。

```sh
#发送数据
cangen can0 -mv 
```

```sh
#转储数据
candump can1 
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/jetson-send.png"/></div>

## 内置 RTC 使用方法

最新的树莓派 2 通道 CAN FD 主控板还配备了板载 RTC。按照以下步骤在树莓派上安装 RTC 驱动程序：

- 更新树莓派并重启：

```sh
sudo apt update
sudo apt upgrade
sudo reboot
```

- 安装依赖项

```sh
sudo apt install i2c-tools build-essential raspberrypi-kernel-headers
```

- 下载驱动程序：

```sh
curl -O -L https://github.com/dresden-elektronik/raspbee2-rtc/archive/master.zip
unzip master.zip
```

- 编译 RTC 内核模块

```sh
cd raspbee2-rtc-master
make
```

- 安装 RTC 内核模块

```sh
sudo make install
sudo reboot
```

- 将系统时间配置到 RTC 模块

```sh
sudo hwclock --systohc
```

- 测试 RTC 是否正常工作

```sh
sudo hwclock --verbose
```

现在您可以使用以下命令读取 RTC 时间：

```sh
sudo hwclock -r
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/time.png"/></div>

## 与 Wio Terminal 配合使用

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/ban-1.png"/></div>

除了将 CAN-BUS Pi Hat 与单板计算机配合使用外，现在您还可以将其与 [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)（Arduino 兼容开发板）配合使用！在 MCU 上开发 CAN 相关项目！

请查看以下 wiki 了解更多关于 Wio Terminal 的信息：

- [Wio Terminal 入门指南](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/)

### 所需硬件

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- [**Wio Terminal 40 引脚树莓派 Hat 适配板**](https://www.seeedstudio.com/40-Pin-Raspberry-Pi-Hat-Adapter-Board-For-Wio-Terminal-p-4730.html)

- [**树莓派 2 通道 CAN-BUS(FD) 扩展板 (MCP2518FD)**](https://www.seeedstudio.com/CAN-BUS-FD-HAT-for-Raspberry-Pi-p-4742.html)

为了测试目的，您可能还需要准备一些其他的 CAN-BUS 开发组件，在本示例中我们使用以下设备：

- [**CAN-BUS 扩展板 V2 采用 MCP2515 和 MCP2551**](https://www.seeedstudio.com/CAN-BUS-Shield-V2.html) + **Arduino 开发板**

### 安装 Seeed_Arduino_CAN Arduino 库

:::note
    请确保您已安装 Seeed SAMD 开发板库并更新到最新版本！
:::

1. 访问 [**Seeed_Arduino_CAN**](https://github.com/Seeed-Studio/Seeed_Arduino_CAN) 仓库并将整个仓库下载到您的本地驱动器。

2. 现在，可以将 Seeed_Arduino_CAN 库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，然后选择您刚刚下载的 `Seeed_Arduino_CAN` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### 发送示例代码

这是一个使用 **树莓派 2 通道 CAN-BUS(FD) 扩展板 (MCP2518FD) 与 Wio Terminal 向另一个 CAN-BUS 设备发送 CAN-BUS 数据** 的示例（在本例中，是 CAN-BUS 扩展板 V2 采用 MCP2515 和 MCP2551 + Arduino Uno）

**硬件连接**

- 连接 **树莓派 2 通道 CAN-BUS(FD) 扩展板 (MCP2518FD)** 的 `Channel 0 L` -> **CAN-BUS 扩展板 V2** 的 `CANL`

- 连接 **树莓派 2 通道 CAN-BUS(FD) 扩展板 (MCP2518FD)** 的 `Channel 0 H` -> **CAN-BUS 扩展板 V2** 的 `CANH`

- 使用 **Wio Terminal 40 引脚树莓派 Hat 适配板** 将树莓派 2 通道 CAN-BUS(FD) 扩展板与 Wio Terminal 连接。

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/connect.png"/></div>

- **Arduino Uno + CAN-BUS 扩展板 V2 的代码**

```cpp
#include <SPI.h>
#include "mcp2515_can.h"

/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

const int SPI_CS_PIN = 9;
mcp2515_can CAN(SPI_CS_PIN);

unsigned char len = 0;
unsigned char buf[8];

void setup() {
    SERIAL.begin(115200);
    while (!SERIAL) {
        ; // wait for serial port to connect. Needed for native USB port only
    }
    while (CAN_OK != CAN.begin(CAN_500KBPS)) {             // init can bus : baudrate = 500k
        // init can bus : baudrate = 500k
        SERIAL.println("CAN BUS Shield init fail");
        SERIAL.println(" Init CAN BUS Shield again");
        delay(100);
    }
    SERIAL.println("CAN BUS Shield init ok!");
}

void loop() {
        // iterate over all pending messages
        // If either the bus is saturated or the MCU is busy,
        // both RX buffers may be in use and reading a single
        // message does not clear the IRQ conditon.
        while (CAN_MSGAVAIL == CAN.checkReceive()) {
            // read data,  len: data length, buf: data buf
            SERIAL.println("checkReceive");
            CAN.readMsgBuf(&len, buf);

            // print the data
            for (int i = 0; i < len; i++) {
                SERIAL.print(buf[i]); SERIAL.print("\t");
            }
            SERIAL.println();
        }
}
```

- **Wio Terminal + 2通道CAN-BUS(FD) Shield for Raspberry Pi (MCP2518FD)的代码**

```cpp
#include <SPI.h>
#include "mcp2518fd_can.h"

/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

// 根据您的硬件设置SPI CS引脚
// 对于Wio Terminal配合MCP2518FD RPi Hat：
// 通道0 SPI_CS引脚：BCM 8
// 通道1 SPI_CS引脚：BCM 7
// 中断引脚：BCM25
// *****************************************
// 对于Arduino MCP2515 Hat：
// SPI_CS引脚：D9

const int SPI_CS_PIN = BCM8;
mcp2518fd CAN(SPI_CS_PIN); // 设置CS引脚

void setup() {
    SERIAL.begin(115200);
    while(!Serial){};

    while (0 != CAN.begin((byte)CAN_500K_1M)) {            // 初始化CAN总线：波特率 = 500k
        SERIAL.println("CAN BUS Shield init fail");
        SERIAL.println(" Init CAN BUS Shield again");
        delay(100);
    }
    SERIAL.println("CAN BUS Shield init ok!");
}

unsigned char stmp[8] = {0, 0, 0, 0, 0, 0, 0, 0};
void loop() {
    // 发送数据：id = 0x00，标准帧，数据长度 = 8，stmp：数据缓冲区
    stmp[7] = stmp[7] + 1;
    if (stmp[7] == 100) {
        stmp[7] = 0;
        stmp[6] = stmp[6] + 1;

        if (stmp[6] == 100) {
            stmp[6] = 0;
            stmp[5] = stmp[6] + 1;
        }
    }

    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // 每100ms发送数据
    SERIAL.println("CAN BUS sendMsgBuf ok!");
}
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/Send.png"/></div>

### 接收示例代码

这是一个使用**2通道CAN-BUS(FD) Shield for Raspberry Pi (MCP2518FD)与Wio Terminal从另一个CAN-BUS设备接收CAN-BUS数据**的示例（在这种情况下，是采用MCP2515和MCP2551的CAN-BUS Shield V2 + Arduino Uno）

**硬件连接**

与上述发送示例相同的连接。

- **Arduino Uno + CAN-BUS Shield V2的代码**

```cpp
#include <SPI.h>
#include "mcp2515_can.h"

/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

const int SPI_CS_PIN = 9;
mcp2515_can CAN(SPI_CS_PIN); // 设置CS引脚


void setup() {
    SERIAL.begin(115200);
    while(!Serial){};

    while (CAN_OK != CAN.begin(CAN_500KBPS)) {             // 初始化CAN总线：波特率 = 500k
        SERIAL.println("CAN BUS Shield init fail");
        SERIAL.println(" Init CAN BUS Shield again");
        delay(100);
    }
    SERIAL.println("CAN BUS Shield init ok!");
}

unsigned char stmp[8] = {0, 0, 0, 0, 0, 0, 0, 0};
void loop() {
    // 发送数据：id = 0x00，标准帧，数据长度 = 8，stmp：数据缓冲区
    stmp[7] = stmp[7] + 1;
    if (stmp[7] == 100) {
        stmp[7] = 0;
        stmp[6] = stmp[6] + 1;

        if (stmp[6] == 100) {
            stmp[6] = 0;
            stmp[5] = stmp[6] + 1;
        }
    }

    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // 每100ms发送数据
    SERIAL.println("CAN BUS sendMsgBuf ok!");
}
```

- **Wio Terminal + 树莓派用2通道CAN-BUS(FD)扩展板(MCP2518FD)代码**

```cpp
#include <SPI.h>
#include "mcp2518fd_can.h"

/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

// 根据您的硬件设置 SPI CS 引脚
// 对于 Wio Terminal 配合 MCP2518FD RPi Hat：
// 通道 0 SPI_CS 引脚：BCM 8
// 通道 1 SPI_CS 引脚：BCM 7
// 中断引脚：BCM25
// *****************************************
// 对于 Arduino MCP2515 Hat：
// SPI_CS 引脚：D9

const int SPI_CS_PIN = BCM8;
mcp2518fd CAN(SPI_CS_PIN);

unsigned char len = 0;
unsigned char buf[8];

void setup() {
    SERIAL.begin(115200);
    while (!SERIAL) {
        ; // 等待串口连接。仅对原生 USB 端口需要
    }
    while (0 != CAN.begin((byte)CAN_500K_1M)) {            // 初始化 CAN 总线：波特率 = 500k
        SERIAL.println("CAN BUS Shield init fail");
        SERIAL.println(" Init CAN BUS Shield again");
        delay(100);
    }
    SERIAL.println("CAN BUS Shield init ok!");
}

void loop() {
        // 遍历所有待处理的消息
        // 如果总线饱和或 MCU 忙碌，
        // 两个 RX 缓冲区可能都在使用中，读取单个
        // 消息不会清除 IRQ 条件。
        while (CAN_MSGAVAIL == CAN.checkReceive()) {
            // 读取数据，len：数据长度，buf：数据缓冲区
            SERIAL.println("checkReceive");
            CAN.readMsgBuf(&len, buf);

            // 打印数据
            for (int i = 0; i < len; i++) {
                SERIAL.print(buf[i]); SERIAL.print("\t");
            }
            SERIAL.println();
        }
}
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/Receive.png"/></div>

### 使用中断接收示例代码

这是一个使用**树莓派 2 通道 CAN-BUS(FD) 扩展板 (MCP2518FD) 与 Wio Terminal 从另一个 CAN-BUS 设备接收 CAN-BUS 数据**的示例（在这种情况下，是采用 MCP2515 和 MCP2551 + Arduino Uno 的 CAN-BUS Shield V2）。为了使其更可靠，这里使用**中断来触发传入的数据流**。

**硬件连接**

- **Arduino Uno + CAN-BUS Shield V2 的代码**

```cpp
#include <SPI.h>
#include "mcp2515_can.h"

/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

const int SPI_CS_PIN = 9;
mcp2515_can CAN(SPI_CS_PIN); // 设置 CS 引脚

void setup() {
    SERIAL.begin(115200);
    while(!Serial){};

    while (CAN_OK != CAN.begin(CAN_500KBPS)) {             // 初始化 can 总线：波特率 = 500k
        SERIAL.println("CAN BUS Shield init fail");
        SERIAL.println(" Init CAN BUS Shield again");
        delay(100);
    }
    SERIAL.println("CAN BUS Shield init ok!");
}

unsigned char stmp[8] = {0, 0, 0, 0, 0, 0, 0, 0};
void loop() {
    // 发送数据：id = 0x00，标准帧，数据长度 = 8，stmp：数据缓冲区
    stmp[7] = stmp[7] + 1;
    if (stmp[7] == 100) {
        stmp[7] = 0;
        stmp[6] = stmp[6] + 1;

        if (stmp[6] == 100) {
            stmp[6] = 0;
            stmp[5] = stmp[6] + 1;
        }
    }

    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // 每 100ms 发送数据
    SERIAL.println("CAN BUS sendMsgBuf ok!");
}
```

**Wio Terminal + 2-Channel CAN-BUS(FD) Shield for Raspberry Pi (MCP2518FD) 的代码**

```cpp
#include <SPI.h>
#include "mcp2518fd_can.h"

/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

// 根据您的硬件设置 SPI CS 引脚
// 对于 Wio Terminal 配合 MCP2518FD RPi Hat：
// 通道 0 SPI_CS 引脚：BCM 8
// 通道 1 SPI_CS 引脚：BCM 7
// 中断引脚：BCM25
// *****************************************
// 对于 Arduino MCP2515 Hat：
// SPI_CS 引脚：D9

const int SPI_CS_PIN = BCM8;
const int CAN_INT_PIN = BCM25;

mcp2518fd CAN(SPI_CS_PIN);

unsigned char flagRecv = 0;
unsigned char len = 0;
unsigned char buf[8];

void MCP2515_ISR() {
    Serial.println("INTERUPTED!");
    flagRecv = 1;
}

void setup() {
    SERIAL.begin(115200);
    while (!SERIAL) {
        ; // 等待串口连接。仅对原生 USB 端口需要
    }
    pinMode(CAN_INT_PIN, INPUT);
    attachInterrupt(digitalPinToInterrupt(CAN_INT_PIN), MCP2515_ISR, FALLING); // 启动中断
    
    while (0 != CAN.begin((byte)CAN_500K_1M)) {            // 初始化 CAN 总线：波特率 = 500k
        SERIAL.println("CAN BUS Shield init fail");
        SERIAL.println(" Init CAN BUS Shield again");
        delay(100);
    }
    SERIAL.println("CAN BUS Shield init ok!");
}

void loop() {
  if (flagRecv) // 触发中断
  {
    flagRecv = 0;
  // 遍历所有待处理的消息
  // 如果总线饱和或 MCU 忙碌，
  // 两个 RX 缓冲区可能都在使用中，读取单个
  // 消息不会清除 IRQ 条件。
    while (CAN_MSGAVAIL == CAN.checkReceive()) {
        // 读取数据，len：数据长度，buf：数据缓冲区
      SERIAL.println("checkReceive");
      CAN.readMsgBuf(&len, buf);
  
        // 打印数据
      for (int i = 0; i < len; i++) {
        SERIAL.print(buf[i]); SERIAL.print("\t");
        }
      SERIAL.println();
    }
  }
}
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/Interrupt.png"/></div>

### 自发自收示例代码

这是一个使用树莓派2通道CAN-BUS(FD)扩展板(MCP2518FD)**自发自收CAN-BUS数据**的示例。

**硬件连接**

- 连接**树莓派2通道CAN-BUS(FD)扩展板(MCP2518FD)**的`Channel 0 L` -> **树莓派2通道CAN-BUS(FD)扩展板(MCP2518FD)**的`Channel 1 L`

- 连接**树莓派2通道CAN-BUS(FD)扩展板(MCP2518FD)**的`Channel 0 H` -> **树莓派2通道CAN-BUS(FD)扩展板(MCP2518FD)**的`Channel 1 H`

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/connect-1.png"/></div>

```cpp
#include <SPI.h>
#include "mcp2518fd_can.h"

/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

// 根据您的硬件设置SPI CS引脚
// 对于Wio Terminal配合MCP2518FD RPi Hat：
// Channel 0 SPI_CS引脚：BCM 8
// Channel 1 SPI_CS引脚：BCM 7
// 中断引脚：BCM25
// *****************************************
// 对于Arduino MCP2515 Hat：
// SPI_CS引脚：D9

const int SPI_CS_PIN_SEND = BCM8;
const int SPI_CS_PIN_RECEIVE = BCM7;

mcp2518fd CAN_SEND(SPI_CS_PIN_SEND);
mcp2518fd CAN_RECEIVE(SPI_CS_PIN_RECEIVE);

unsigned char len = 0;
unsigned char buf[8];

void setup() {
    SERIAL.begin(115200);
    while(!Serial); // 等待串口

    if (CAN_SEND.begin((byte)CAN_500K_1M) != 0 || CAN_RECEIVE.begin((byte)CAN_500K_1M) != 0) {
      Serial.println("CAN-BUS初始化错误！");
      while(1);
    }
    
    SERIAL.println("CAN BUS扩展板初始化成功！");
}

unsigned char stmp[8] = {0, 0, 0, 0, 0, 0, 0, 0};
void loop() {
    // 发送数据：id = 0x00，标准帧，数据长度 = 8，stmp：数据缓冲区
    stmp[7] = stmp[7] + 1;
    if (stmp[7] == 100) {
        stmp[7] = 0;
        stmp[6] = stmp[6] + 1;

        if (stmp[6] == 100) {
            stmp[6] = 0;
            stmp[5] = stmp[6] + 1;
        }
    }

    CAN_SEND.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // 每100ms发送数据
    SERIAL.println("CAN BUS sendMsgBuf成功！");

    // ---------------------
        
    if (CAN_MSGAVAIL == CAN_RECEIVE.checkReceive()) {
    // 读取数据，len：数据长度，buf：数据缓冲区
      SERIAL.println("checkReceive");
      CAN_RECEIVE.readMsgBuf(&len, buf);
    // 打印数据
    for (int i = 0; i < len; i++) {
        SERIAL.print(buf[i]); SERIAL.print(" ");
    }
    SERIAL.println();
    }
    SERIAL.println("---循环结束---");
}
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/send-rec.png"/></div>

### 发送 FD 示例代码

这是一个**使用 2 通道 CAN-BUS(FD) Raspberry Pi 扩展板 (MCP2518FD) 独立发送和接收 CAN-BUS 数据（最多 64 位）并使用 `FD` 协议**的示例。

**硬件连接**

与自发自收示例相同的连接。

```cpp
#include <SPI.h>
#include "mcp2518fd_can.h"

/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

// 根据您的硬件设置 SPI CS 引脚
// 对于 Wio Terminal w/ MCP2518FD RPi Hat：
// 通道 0 SPI_CS 引脚：BCM 8
// 通道 1 SPI_CS 引脚：BCM 7
// 中断引脚：BCM25
// *****************************************
// 对于 Arduino MCP2515 Hat：
// SPI_CS 引脚：D9

const int SPI_CS_PIN_SEND = BCM8;
const int SPI_CS_PIN_RECEIVE = BCM7;

mcp2518fd CAN_SEND(SPI_CS_PIN_SEND);
mcp2518fd CAN_RECEIVE(SPI_CS_PIN_RECEIVE);

void setup() {
    SERIAL.begin(115200);
    while(!Serial); // 等待串口
    CAN_SEND.setMode(0);
    CAN_RECEIVE.setMode(0);
    
    if (CAN_SEND.begin((byte)CAN_500K_1M) != 0 || CAN_RECEIVE.begin((byte)CAN_500K_1M) != 0) {
      Serial.println("CAN-BUS 初始化错误！");
      while(1);
    }
    byte send_mode = CAN_SEND.getMode();
    byte receive_mode = CAN_RECEIVE.getMode();
    SERIAL.printf("CAN BUS 发送模式 = %d，CAN BUS 接收模式 = %d\n\r",send_mode, receive_mode);
    SERIAL.println("CAN BUS Shield 初始化成功！");
}

unsigned char stmp[64] = {0};
unsigned char len = 0;
unsigned char buf[64];

void loop() {
    stmp[63] = stmp[63] + 1;
    if (stmp[63] == 100) {
        stmp[63] = 0;
        stmp[62] = stmp[62] + 1;

        if (stmp[62] == 100) {
            stmp[62] = 0;
            stmp[61] = stmp[62] + 1;
        }
    }

    CAN_SEND.sendMsgBuf(0x00, 0, 15, stmp);
    delay(100);                       // 每 100ms 发送数据
    SERIAL.println("CAN BUS sendMsgBuf 成功！");

    // ---------------------
        
    if (CAN_MSGAVAIL == CAN_RECEIVE.checkReceive()) {
    // 读取数据，len：数据长度，buf：数据缓冲区
      SERIAL.println("checkReceive");
      CAN_RECEIVE.readMsgBuf(&len, buf);
    // 打印数据
    for (int i = 0; i < len; i++) {
        SERIAL.print(buf[i]); SERIAL.print(" ");
    } 
    SERIAL.println();
    }
    SERIAL.println("---循环结束---");
}
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-FD/fd.png"/></div>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/res/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [树莓派双通道 CAN-BUS(FD) 扩展板 (MCP2518FD) 原理图](https://files.seeedstudio.com/wiki/CAN-BUS-FD/CAN-BUS(FD)-HAT-for-Raspberry-Pi_MCP2518FD_SCH.pdf)
- **[ZIP]** [树莓派双通道 CAN-BUS(FD) 扩展板原理图文件](https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/res/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi.zip)
- **[ZIP]** [RPi 双通道 CAN FD 主控帽原理图文件](https://files.seeedstudio.com/wiki/CAN-BUS-FD/2-Channel%20CAN-BUS(FD)%20Shield%20for%20Raspberry%20Pi_SCH&PCB.zip)
- **[PDF]** [MCP2517 数据手册](https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/res/MCP2517-datasheet.pdf)
- **[PDF]** [MCP2557 数据手册](https://files.seeedstudio.com/wiki/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/res/MCP2557-datasheet.pdf)

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
