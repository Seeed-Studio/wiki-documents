---
description: Mesh Bee
title: Mesh Bee
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Mesh_Bee
last_update:
  date: 1/13/2023
  author: shuxu hu
---

## 欢迎来到 MeshBee Wiki

---
这是一个社区资源，旨在汇集关于以下内容的文档、演示和优质信息链接：

 1. MeshBee 固件架构；
 2. MeshBee 入门指南；
 3. MeshBee 使用案例和示例；

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Mesh_bee.jpg)

Mesh Bee 是来自 Seeed Studio 的一款 2.4GHz 无线收发器。它基于 NXP 最新的 JN516x 系列无线微控制器芯片，并支持 ZigBee Pro 网络协议栈。工厂固件将复杂的 ZigBee 协议栈操作封装成几个易于使用的串行命令，使 Mesh Bee 成为一个透明的串行通信节点，可以组成简单的点对点连接或复杂的网状网络。此外，Mesh Bee 是完全开放硬件和开源的，这意味着您可以根据需求定制固件。您可以使用 JN516x 的 ARM 核心来控制设备，并使用 JenOS 简化开发。NXP 提供的开发环境和工具都是免费的。Mesh Bee 将为您带来许多乐趣。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/s/Mesh%20Bee%20-%20Open%20Source%20Zigbee%20Pro%20Module%20with%20MCU%20(JN5168).html)

## 2. 特性

---

* 范围：室内/城市：最高可达 30m；室外视距：最高可达 100m；
* 接收灵敏度：-95dBm
* 数据传输速率：4800、9600、19200、38400、57600、115200 (bps)
* 工作频率：免许可的 2.4GHz 频段
* 通信类型：点对点、启动网络或网状网络
* OTA 支持：通过空中更新节点固件
* 易于使用的串行接口和丰富的可扩展端口
* 易于使用的 AT 命令：设置 ZigBee 网络，设置串行波特率等
* 开源硬件和固件
* 可编程 32 位 RISC CPU：32M 时钟，256KB Flash，32KB RAM，4KB EEPROM
* 与 Xbee 插座兼容，因此您可以将其插入任何 Xbee 插座作为快速替代品

注意：由于使用的 ZigBee 协议栈版本不同，Mesh Bee 无法与 Xbee 通信。

## 3. 规格

---
| 规格 | 值 |
|------|----|
| 微处理器 | JN5168 (32 位 RISC CPU，32MHz 时钟速度) |
| 资源 | 256kB/32kB/4kB (Flash/RAM/EEPROM) |
| PCB 尺寸 | 24.5mmx30.5mmx0.8mm |
| 外形尺寸 | 24.5mmx30.5mmx9.77mm |
| 指示器 | 无 |
| 电源 | 3.3V |
| IO 数量 | 12 |
| ADC 输入 | 3(2 与 IO 复用) |
| 接口 | UARTx2, SPI, I2C |
| 程序接口 | UART+MISO |
| 连接性 | 与 XBee 插座兼容 |
| 通信协议 | Uart(TTL) |
| 工作频段 | 2.4GHz |
| 协议栈/软件 | RF4CE, JenNet-IP , ZigBee Pro |

### 3.1 电气特性

| 规格 | 最小值 | 典型值 | 最大值 | 单位 |
|------|-------|-------|-------|------|
| 最大输入电压 | -0.3 | | 3.6 | V |
| 工作输入电压 | 2.0 | 3.3 | 3.6 | V |
| 发射电流 | | 15 | | mA |
| 接收电流 | | 17 | | mA |
| 深度睡眠电流 | | 0.12 | | uA |
| 工作温度 | -40 | | | |

## 4. 引脚定义

| 引脚名称 | 备用功能 | 类型 | 描述 |
|----------|-------------------|------|-------------|
| 3V3 | - | 电源输入 | VCC, +3.3V |
| TX1 | D14 | 输出 | Uart1 Tx端口；数字IO 14 |
| RX1 | D15 | 输入 | Uart Rx端口；数字IO 15 |
| DO1 | SPIMISO | 输入/输出 | 数字输出1；SPI 主输入从输出 |
| !RST | - | 输入 | 复位端口 |
| D11 | PWM1 | 输入/输出 | 数字IO 11（默认用途：RSSI指示器）；PWM1输出 |
| DO0 | SPICLK | 输出 | 数字输出0；SPI 主时钟输出 |
| D18 | SPIMOSI | 输入/输出 | 数字IO 18；SPI 主输出从输入 |
| VRef | ADC2 | 输入 | 模拟外设参考电压；ADC输入2 |
| GND | - | GND | 接地 |
| TX0 | D6 | 输入/输出 | Uart0 Tx端口；数字IO 6 |
| D12 | CTS0 | 输入/输出 | 数字IO 12；UART 0清除发送输入 |
| D9 | - | 输入/输出 | 数字IO 9（默认用途：Mesh Bee开/睡眠指示器） |
| RX0 | D7 | 输入/输出 | Uart0 Rx端口；数字IO 7 |
| D10 | - | 输入/输出 | 数字IO 10（默认用途：网络关联指示器） |
| D13 | RTS0 | 输入/输出 | 数字IO 13；UART 0请求发送输出 |
| D1 | SPISEL2; ADC4 | 输入/输出 | 数字IO 1；SPI 主选择输出2；ADC输入4 |
| D0 | SPISEL1; ADC3 | 输入/输出 | 数字IO 0；SPI 主选择输出1；ADC输入3 |
| D16 | SCL | 输入/输出 | 数字IO 16；I2C时钟 |
| D17 | SDA | 输入/输出 | 数字IO 17；I2C数据 |

注意：仅列出了重要的备用功能，可能还有更多，请参考JN516x数据手册。

注意2：SPI相关引脚仅在您知道如何禁用外部闪存驱动时才能用作数字IO。

## 5. 使用方法

---

### 5.1 硬件安装

Mesh Bee具有通用的Bee插座。因此，您可以像使用XBee或RFBee等一样使用它。需要注意的是，除了部分引脚外，它们的引脚并不是100%兼容。
如果您是Bee系列的新手，请访问[此链接](/cn/Grove_Cape_for_BeagleBone_Series "Grove_Cape_for_BeagleBone_Series")了解Bee系列，并访问[此链接](/cn/RFbee_V1.1-Wireless_Arduino_compatible_node#Usage "RFbee V1.1 - Wireless Arduino compatible node")了解如何将Bee与其他硬件安装。

### 5.2 如何更新固件

Mesh Bee默认预装了协调器固件，这是由于制造和销售的便利性。您需要自行刷入路由器/终端设备固件。这对像您这样的创客来说非常简单。

JN516x具有一个特定的固件下载接口，包括UART和一些其他引脚，因此您需要一个**编程器**来刷固件。我们提供了[UartSBee v5](/cn/UartSBee_v5 "UartSBee v5")。UartSBee v5具有v4的大部分功能，并额外支持Mesh Bee的编程。

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/UartSBee_V05.jpg)

更新固件的步骤如下：

* 第一步：从GitHub下载最新固件；

  * [Mesh_Bee#9.1_Firmware_Downloads](/cn/Mesh_Bee#91-固件下载 "Mesh Bee")

* 第二步：使用FT_Prog配置UartSBee v5；

  * 下载FT_Prog：[File:FT Prog v2.8.2.0.zip](https://files.seeedstudio.com/wiki/Mesh_Bee/res/FT_Prog_v2.8.2.0.zip "File:FT Prog v2.8.2.0.zip")并安装。（仅支持Windows）

  * 将UartSBee v5连接到PC，打开FT_Prog并按如下方式配置：

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/FT_Prog.jpg)

* 第三步：将SW1切换到“3V3”，SW3切换到“Prog”位置；

* 第四步：将Mesh Bee模块插入UartSBee v5；

* 第五步：使用“Jennic Flash Programmer”刷固件；

下载Jennic Flash Programmer：[File:Jennic flash programmer.zip](https://files.seeedstudio.com/wiki/Mesh_Bee/res/Jennic_flash_programmer.zip "File:Jennic flash programmer.zip")并解压。（仅支持Windows）

打开“FlashGUI.exe” -> 浏览到固件bin文件

-> 选择UartSBee v5的COM端口（如果不存在，请点击刷新按钮）

-> 其他选择项如以下图片所示 -> 勾选“Connect”

-> 设备信息和MAC地址将被检测到

-> 点击“Program”按钮

-> 一个小工具窗口将弹出并显示下载进度

-> 完成。

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Flash_programmer1.jpg)

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Flash_programmer3.png)

### 5.3 AT命令与配置

#### 5.3.1 AT命令

Mesh Bee目前可以通过AT命令进行配置。二进制API配置方法可能会根据您的需求提供。因此，如果您需要此功能，请将您的需求发布到[讨论组](https://groups.google.com/forum/#!forum/seeedstudio-mesh-bee-discussion-group)。我们将根据您的反馈决定开发方向。

**下载AT命令手册：** [File:AT command manual for Mesh Bee V1.0.pdf](https://files.seeedstudio.com/wiki/Mesh_Bee/res/AT_command_manual_for_Mesh_Bee_V1.0.pdf "File:AT command manual for Mesh Bee V1.0.pdf")

#### 5.3.2 配置

Mesh Bee支持ZigBee Pro标准，可以构建具有大量节点的网状网络。您可能需要一些ZigBee基础知识以更有效地配置它。但以下是如何构建一个简单点对点网络的指南。任何人都可以在没有任何ZigBee基础知识的情况下完成。

<big>步骤1：准备两个Mesh Bee模块和一个UartSBee v5；</big>

<big>步骤2：将终端设备固件刷入其中一个Mesh Bee模块，请参考5.2如何更新固件；</big>

<big>步骤3：配置协调器节点；</big>

要配置Mesh Bee节点，首先需要将其连接到PC。有很多方法可以做到这一点。如果您有一个UartSBee v5，这将变得非常简单。只需将协调器插入UartSBee v5并将SW3切换到“Uart”侧。

此外，您可以使用任何USB到TTL设备。基本要求是Mesh Bee通过UART1（TX1和RX1）与外部通信，UART1的电压等级为3.3V。更高的电压可能会损坏IO。

连接线后，打开一个串口工具，选择COM端口并将波特率设置为115200（默认）。

将 Mesh Bee 切换到 AT 命令模式，发送 "+++"。注意，您需要将串口工具配置为发送 CR 字符。

发送 "ATPA1" 命令。

按下 UartSBee v5 的复位按钮以重置 Mesh Bee。

等待 UartSBee v5 的 "ASSOC" 指示灯亮起。好的，协调器已经完成了 ZigBee 网络的创建。您可以发送 "ATIF" 命令查看网络信息。

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Configure_coo2.png)

发送 "ATEX" 命令退出 AT 模式并进入数据传输模式。现在协调器节点已设置完成。

<big>步骤 4：配置终端设备节点</big>

首先，将终端设备的 UART1 连接到波特率为 115200 的串口工具。注意，如果您只有一个 UartSBee v5 并希望使用同一个设备配置终端设备，则需要在从 UartSBee v5 上拔下协调器后重新为其供电。协调器必须始终保持供电，因为它保存了创建的 ZigBee 网络。如果协调器关闭，网络将消失。

发送 "+++" 到终端设备。

-&gt; 然后发送 "ATAJ1" 命令。

-&gt; 发送 "ATRS" 命令。

-&gt; 等待几秒钟。

-&gt; UartSBee v5 的 "ASSOC" 指示灯亮起（使用 UartSBee v5 配置）。

-&gt; 发送 "ATIF" 命令，检查 "3. belonging to" 部分的 "PANID"，如果 "PANID" 不是 0x0000，则终端设备已加入 ZigBee 网络。

现在发送 "ATEX" 命令退出 AT 模式。

好的，终端设备已配置完成。

<big>步骤 5：测试连接</big>

使用串口工具连接两个节点（协调器和终端设备）。在一侧发送数据，并检查另一侧是否接收到相同的数据。

连接信息将在断电后保持持久性。

### 5.4 OTA 指南

Mesh Bee 支持通过空中更新固件。一旦完成网络配置，路由器/终端设备的固件可以通过 OTA 更新。

<big>步骤 1：将新固件刷入协调器的外部闪存</big>

完成此步骤的方法与 [5.2 如何更新固件](/cn/Mesh_Bee#52-how-to-update-firmware "Mesh Bee") 非常相似，唯一的区别是选择 "External" 作为 "Flash Select"。

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Flash_External.jpg)

<big>步骤 2：确保网络已正确配置且节点可以相互通信</big>

按照 [5.3.2_Configuration](/cn/Mesh_Bee#53-at-commands--configuration "Mesh Bee") 描述配置网络节点。发送 "ATLA" 命令查看网络上的节点。

<big>步骤 3：触发 OTA 过程</big>

发送 "ATDAxxxx" 命令设置目标地址（xxxx 是固件将被更新的节点的短地址）。

-&gt; 发送 "ATOR200" 设置 OTA 数据包间隔为 200ms/包。较慢的速度会更好。

-&gt; 发送 "ATOT" 触发 OTA 下载过程。

-&gt; 发送 "ATOS" 监控下载进程，或者如果需要，可以发送 "ATOA" 中止下载。

下载完成后，目标节点将重新启动，新固件将替代旧固件。您可以发送 "ATLA" 命令确认目标节点的固件版本。

### 5.5 示例

此示例仅兼容固件 v1.0，对于后续版本的固件，请参考可以在资源部分下载的 Cook Book。

这是一个关于使用两个 Mesh Bee 节点进行远程控制的简单示例。

<big>步骤 1：准备材料</big>

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Example0.jpg)

材料包括：

* [Seeeduino v3](https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7) x2

* XBee shield x2 ，版本 1/2，上图显示了 [XBee Shield v1](https://www.seeedstudio.com/depot/xbee-shield-p-419.html?cPath=73) 和 [XBee Shield v2](https://www.seeedstudio.com/depot/xbee-shield-v20-p-1375.html?cPath=98_16)

* Mesh Bee x2（上图显示的是原型版本，发布版本可能颜色不同）

* UartSBee v5 x1

* [旋转角度传感器](https://www.seeedstudio.com/depot/grove-rotary-angle-sensor-p-770.html?cPath=85_52) x1

* [舵机](https://www.seeedstudio.com/depot/grove-servo-p-1241.html?cPath=39_41) x1

* 电缆

<big>步骤 2：配置 Mesh Bee 节点</big>

参考 [5.3.2_Configuration](/cn/Mesh_Bee#532-configuration "Mesh Bee") 配置点对点连接。

<big>步骤 3：组装舵机端（被控制）</big>

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Example1.jpg)

将舵机的信号线（黄色）连接到数字 10，红线连接到 VCC，黑/棕线连接到 GND。

-&gt; 将 "XB_TX" 连接到 D0，将 "XB_RX" 连接到 D1（意味着使用 Seeeduino 的硬件 UART）。

-&gt; 将 Mesh Bee（协调器）插入 XBee shield 的 Bee 插槽。

-&gt; 别忘了将 XBee shield 插到 Seeeduino 上。

<big>步骤 4：组装控制端</big>

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Example2.jpg)

将旋转角度传感器的信号线（黄色）连接到 A0，红线连接到 VCC，黑线连接到 GND。

-&gt; 将 XBee Shield v1 的 "USB_UART_M..8" 开关切换到右侧（M..8），将 "D11/12_XBEE_UART" 开关切换到右侧（X_RX_X_TX）。

-&gt; 将 Mesh Bee（终端设备）插入 XBee shield 的 Bee 插槽。

-&gt; 将 XBee Shield 插到 Seeeduino 上。

<big>步骤 5：编程</big>

MeshBeeDemo_servo:

```cpp
#include <Servo.h>
#include <SoftwareSerial.h>

#define CMD_POS    1

#define COMM_SER    Serial

//SoftwareSerial mySerial(11, 12); // RX, TX

Servo myservo;  // 创建舵机对象以控制舵机
// 最多可以创建八个舵机对象

int pos = 0;    // 用于存储舵机位置的变量
unsigned int sensorValue = 0;  // 用于存储传感器值的变量
unsigned char cmd;
unsigned int lastSensorValue = 0;

void setup()
{
    Serial.begin(115200);
    //mySerial.begin(9600);
    myservo.attach(10);  // 将舵机连接到引脚 10

    // 配置 Mesh Bee
    Serial.println("atex");
}

void loop()
{
    if (read_msg(&cmd, &sensorValue))
    {
        if (cmd ==  CMD_POS)
        {
            if (lastSensorValue != sensorValue)
            {
                lastSensorValue = sensorValue;
                //Serial.println(sensorValue);
                pos = map(sensorValue, 0, 1023, 0, 180);
                myservo.write(pos);
            }
        }
    }
    //delay(10);
}

void send_msg(unsigned char cmd, unsigned int msg)
{
    unsigned char buff[4];
    buff[0] = cmd;
    buff[1] = (unsigned char)(msg & 0xff);
    buff[2] = (unsigned char)((msg >> 8) & 0xff);
    buff[3] = buff[0]+buff[1]+buff[2];
    COMM_SER.write("SS");
    COMM_SER.write(buff, 4);
}

boolean read_msg(unsigned char *cmd, unsigned int *msg)
{
    unsigned char buff[4];

    if (COMM_SER.find("SS"))
    {
        while (COMM_SER.available() < 4);
        if (COMM_SER.available() >= 4)
        {
            COMM_SER.readBytes((char *)buff, 4);
            if (buff[0] + buff[1] + buff[2] == buff[3])
            {
                // 可用数据包
                *cmd = buff[0];
                *msg = (unsigned int)((buff[1]) | (buff[2] << 8));
                return true;
            }
        }
    }
    return false;
}
```

MeshBeeDemo_analogInput:

```cpp
#include <SoftwareSerial.h>

#define CMD_POS    1

#define COMM_SER    Serial

//SoftwareSerial mySerial(10, 11); // RX, TX

int sensorPin = A0;    // 选择电位器的输入引脚
int sensorValue = 0;  // 用于存储传感器读取值的变量
int lastSensorValue = 0;

void send_msg(unsigned char cmd, unsigned int msg);
boolean read_msg(unsigned char *cmd, unsigned int *msg);

void setup()
{
    // 打开串口通信并等待端口打开：
    Serial.begin(115200);

    Serial.println("+++");
    Serial.println("ATTM1");  // 将 Mesh Bee 设置为单播发送模式
    Serial.println("ATDA0000");  // 将单播地址设置为 COO
    Serial.println("ATEX");  // 退出 AT 命令模式

    // 设置 SoftwareSerial 端口的数据速率
    //mySerial.begin(9600);
    //mySerial.println("Hello, world?");
}

void loop() // 不断运行
{
    // 从传感器读取值：
    sensorValue = analogRead(sensorPin);
    if (sensorValue != lastSensorValue || 1)
    {
        //Serial.println(sensorValue);
        send_msg(CMD_POS, (unsigned int)sensorValue);
        lastSensorValue = sensorValue;
        delay(50);
    }
}

void send_msg(unsigned char cmd, unsigned int msg)
{
    unsigned char buff[4];
    buff[0] = cmd;
    buff[1] = (unsigned char)(msg & 0xff);
    buff[2] = (unsigned char)((msg >> 8) & 0xff);
    buff[3] = buff[0]+buff[1]+buff[2];
    COMM_SER.write("SS");
    COMM_SER.write(buff, 4);
}

boolean read_msg(unsigned char *cmd, unsigned int *msg)
{
    unsigned char buff[4];

    if (COMM_SER.find("SS"))
    {
        while (COMM_SER.available() < 4);
        if (COMM_SER.available() >= 4)
        {
            COMM_SER.readBytes((char *)buff, 4);
            if (buff[0] + buff[1] + buff[2] == buff[3])
            {
                // 有效数据包
                *cmd = buff[0];
                *msg = (unsigned int)((buff[1]) | (buff[2] << 8));
                return true;
            }
        }
    }
    return false;
}
```

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Example3.gif)

### 5.6 使用注意事项

ZigBee 是一种低功耗和低速的网络传输协议，因此它并不适用于高速场景。

Mesh Bee 网络在 2~3 个节点情况下的数据速率规格如下：

| 传输方向         | 传输方式       | 数据包周期 (ms) | 最大数据包长度 (字节) |
|------------------|---------------|----------------|---------------------|
| COO/ROU         | 广播          | 250            | 50                  |
| COO/ROU -> END  | 单播          | 40             | 50                  |
| END             | 广播          | 150            | 50                  |
| END -> COO/ROU  | 单播          | 20             | 25                  |
| END -> COO/ROU  | 单播          | 40             | 50                  |

对于更大的网络，数据速率会更低。

## 6. 开发

我们想介绍的最大特点是 Mesh Bee 支持重新编程。拥有一个可编程的 ZigBee 模块并且价格如此合理，真是令人兴奋。

Mesh Bee 使用了名为 JN5168 的芯片，具有 32 位 RISC 核心和丰富的资源：

* Flash/RAM/EEPROM: 256kB/32kB/4kB

* 主 SPI 端口，带有三个选择输出

* 从 SPI 端口

* 2 个 UART

* 5 个 PWM (4 个定时器 & 1 个计数器)

* I2C

* 4 通道 10 位 ADC

* 比较器

* 电池 & 温度传感器

使用我们的 UartSBee v5，您可以轻松重新编程 Mesh Bee。在开始玩转之前，只需学习一些 NXP 文档即可。

### 7.1 软件架构

以下是 Mesh Bee 的软件架构。

您可以在 AUPS 中开发独立应用程序。用户应用程序由顶层的两个 Arduino 风格函数组成：setup 和 loop，它们的作用与 Arduino 的完全相同。

我们还引入了 Suli。Suli 是 Seeed 统一库接口。我们将在未来的模块驱动/库发布中切换到 Suli。这意味着我们的 Suli 兼容库/驱动将适配所有支持 Suli 的平台。请浏览 [https://github.com/Seeed-Studio/Suli](https://github.com/Seeed-Studio/Suli) 了解更多信息。

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/MeshBeeArchitecture0603.jpg)

### 7.2 开发环境

NXP 提供了全面的开发环境、工具和文档。开发环境包括 SDK 工具链和 ZigBee 堆栈 SDK。

请访问 NXP 的网站以获取所有这些资源及详细描述页面：[http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html](http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html)

注意：Mesh Bee 的出厂固件基于 Smart Energy 配置文件开发。

要创建开发环境，您需要下载：

* JN-SW-4041    SDK 工具链

* JN-SW-4064    ZigBee Smart Energy SDK

* JN-SW-4067-JN516x ZigBee Home Automation SDK

然后将它们安装在 Windows PC 上（先安装 JN-SW-4041 后安装 JN-SW-4064）。

要编辑 .oscfgdiag 文件和 .zpscfg 文件，您需要根据 &lt;[SDK Installation and User Guide.pdf](https://files.seeedstudio.com/wiki/Mesh_Bee/res/SDK_Installation_and_User_Guide.pdf)&gt; 中第 6.2.2 节的指南安装 Eclipse 插件。

注意2：不幸的是，目前只有 Windows 工具链可用。对于 Linux 和 Mac 用户，可能需要使用 Windows 虚拟机。

### 7.3 编程指南

编程 JN5168 需要一些基础知识，因此很难用几句话解释清楚。深入研究官方文档可能是必须的。

NXP 官方资源：

用户指南

* **JN-UG-3048 &lt;ZigBee PRO Stack User Guide&gt; 介绍了基本的 ZigBee PRO 概念，并详细说明了开发应用程序所需的 ZigBee PRO API。**

* JN-UG-3059 &lt;ZigBee PRO Smart Energy API User Guide&gt; 介绍了 ZigBee Smart Energy (SE)，并详细说明了开发应用程序所需的 SE API。

* **JN-UG-3075 &lt;JenOS User Guide&gt;       详细说明了 ZigBee PRO 应用代码中用于管理操作系统资源的 JenOS API。**

* JN-UG-3077 &lt;ZigBee Cluster Library User Guide&gt; 描述了 NXP 对 ZigBee Cluster Library (ZCL) 的实现。

应用笔记

* JN-AN-1135 &lt;Smart Energy HAN Solutions Application Note&gt; 提供并描述了 Smart Energy 家庭区域网络解决方案示例。

相关文档

* **JN-DS-JN516x &lt;JN516x 数据手册&gt;** 详细介绍了 JN516x 系列微控制器。

* **JN-UG-3087 &lt;JN516x 集成外设 API 用户指南&gt;** 详细介绍了 JN516x 集成外设 API，可用于应用代码与 JN516x 芯片上的外设交互。

下载页面：[http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html](http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html)

### 7.4 贡献

[![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/MeshBeeFirmwareProject.png)](https://seeed-studio.github.io/Mesh_Bee/)

## 8. 讨论组

我们创建了一个 Google 讨论组，用于 Mesh Bee 的一般讨论和开发相关主题。请点击以下链接查看最新动态：[https://groups.google.com/forum/#!forum/seeedstudio-mesh-bee-discussion-group](https://groups.google.com/forum/#!forum/seeedstudio-mesh-bee-discussion-group)

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Mesh_Bee/res/Mesh_Bee_v1.0_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 9. 资源

* [Mesh Bee v1.0 的 Eagle 文件](https://files.seeedstudio.com/wiki/Mesh_Bee/res/Mesh_Bee_v1.0_eagle.zip)

* [Mesh Bee V1.0 的 AT 指令手册](https://files.seeedstudio.com/wiki/Mesh_Bee/res/AT_command_manual_for_Mesh_Bee_V1.0.pdf)

* [JN5168 数据手册](https://files.seeedstudio.com/wiki/Mesh_Bee/res/JN516X.pdf)

* [v1004 的 Cook Book](https://files.seeedstudio.com/wiki/Mesh_Bee/res/MeshBee_Cook_Book.pdf)

* [v1004 的用户手册](https://files.seeedstudio.com/wiki/Mesh_Bee/res/MeshBee_User_Manual_v0.3.pdf)

### 9.1 固件下载

**v1001（出厂固件，目前最稳定的版本）：**

协调器固件：[https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/COO_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/COO_JN5168.bin)

路由器固件：[https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/ROU_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/ROU_JN5168.bin)

终端设备固件：[https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/END_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/END_JN5168.bin)

**v1004**

协调器固件：[https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/COO_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/COO_JN5168.bin)

路由器固件：[https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/ROU_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/ROU_JN5168.bin)

终端设备固件：[https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/END_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/END_JN5168.bin)

**与我们的开发和发布保持同步：**

[https://github.com/Seeed-Studio/Mesh_Bee/releases](https://github.com/Seeed-Studio/Mesh_Bee/releases)

**关于 Mesh Bee 固件的更多信息：**

* [Mesh Bee 固件源码在 Github 上](https://github.com/Seeed-Studio/Mesh_Bee)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>