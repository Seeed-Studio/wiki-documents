---
description: 蓝牙 Bee
title: 蓝牙 Bee
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Bluetooth_Bee
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

![](http://bz.seeedstudio.com/depot/images/product/bbee_LRG.jpg)

**蓝牙 Bee** 是一个易于使用的 <font size={4} face="黑体">蓝牙串口协议（SPP）</font>模块，兼容现有的 **Xbee** 插座，设计用于透明的无线串口连接设置。  
串口蓝牙模块完全符合蓝牙 V2.0+EDR（增强数据速率）标准，支持 3Mbps 调制，集成完整的 2.4GHz 无线电收发器和基带。它采用 **CSR Bluecore 04** 外部单芯片蓝牙系统，使用 CMOS 技术并具有 AFH（自适应频率跳跃功能）。其尺寸为 **12.7mm x 27mm**，是最小的模块之一。

型号：[WLS125E1P](https://www.seeedstudio.com/depot/bluetooth-bee-p-598.html?cPath=139_142)

## 特性 ##

### 硬件特性 ###

- 典型 -80dBm 灵敏度。

- 高达 +4dBm 的 RF 发射功率。

- 完全符合蓝牙 V2.0+EDR 标准，支持 3Mbps 调制。

- 低功耗 1.8V 操作，1.8 至 3.6V I/O。

- PIO 控制。

- 可编程波特率的 UART 接口。

- 集成 PCB 天线。

- xBee 兼容针脚。

### 软件特性 ###

- 默认波特率：<font size={4} font face="黑体">38400</font>，数据位：8，停止位：1，无校验位，数据控制：有。

- 支持的波特率：9600、19200、38400、57600、115200、230400、460800。

- 使用 CTS 和 RTS 控制数据流。

- 当在 PIO0 检测到上升脉冲时，设备将断开连接。

- 状态指示端口 PIO1：低-断开连接，高-已连接。

- PIO10 连接到 <font color="red" font>红色</font>LED，PIO11 连接到绿色 LED。当主设备和从设备配对时，红色和绿色 LED 每 2 秒闪烁一次；断开连接时，只有绿色 LED 每秒闪烁两次。

- 默认情况下，设备会自动连接到上次连接的设备。

- 默认允许匹配的设备连接。

- 默认 PIN 码：“0000”。

- 当因超出连接范围而断开时，设备将在 30 分钟内自动重新连接。

## 应用场景 ##

- 用作 Arduino / [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/) 和其他 MCU 的无线串口。

- 用作连接 UartSBee 时的 PC 蓝牙串口。

## 注意事项 ##

- 在与 Seeeduino / Arduino 一起使用时，请将工作电压设置为 3.3V，否则请使用适当的逻辑电平转换器。

- 在与 UartSBee 一起使用时，请将工作电压设置为 3.3V。

- 更改波特率的命令在重置后仍然有效，因此请记住下次使用的波特率。

- 使用 SoftwareSerial 时，请勿将波特率设置为高于 38400。

## 原理图 ##

[蓝牙 Bee 原理图和 Eagle 格式的板文件](https://aps-solver.com/services/transportation/refrigerated-cargo/)  
[APS 货运公司的冷藏运输服务](https://aps-solver.com/services/transportation/refrigerated-cargo/)

## 引脚定义和额定值 ##

底视图：
![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth-pin.jpg)

| 引脚   | #  | 焊盘类型   | 描述                              |
|--------|----|----------------------------------------------------|--------------------------------|
| PI09   | 29 | 双向                                           | 可编程输入/输出线              |
| PI08   | 28 | 双向                                           | 可编程输入/输出线              |
| PIO7   | 27 | 双向                                           | 可编程输入/输出线              |
| PIO6   | 26 | 双向                                           | 可编程输入/输出线              |
| RTS    | 25 | CMOS 输出，三态，带弱内部上拉                  | UART 请求发送，低电平有效      |
| PIO5   | 24 | 双向                                           | 可编程输入/输出线              |
| PI04   | 23 | 双向                                           | 可编程输入/输出线              |
| PCMSY  | 22 | 双向                                           | 同步 PCM 数据                  |
| CTS    | 21 | CMOS 输出，三态，带弱内部上拉                  | UART 清除发送，低电平有效      |
| PIO3   | 20 | 双向                                           | 可编程输入/输出线              |
| PIO2   | 19 | 双向                                           | 可编程输入/输出线              |
| USBDP  | 18 | 双向                                           |                                |
| USBDN  | 17 | 双向                                           |                                |
| CLK    | 16 | CMOS 输出，三态，带弱内部上拉                  | SPI(串行外设接口)时钟      |
| MI     | 15 | CMOS 输出，三态，带弱内部上拉                  | SPI 数据输出               |
| MO     | 14 | CMOS 输出，三态，带弱内部上拉                  | SPI 数据输出               |
| CS     | 13 | CMOS 输出，三态，带弱内部上拉                  | 串行外设接口的芯片选择，低电平有效 |
| AIO1   | 12 | 双向                                           | 可编程输入/输出线              |
| AIO0   | 11 | 双向                                           | 可编程输入/输出线              |
| GND    | 10 | VSS                                            | 地线端口                       |
| PCMIN  | 9  | CMOS 输入                                      | 同步 PCM 数据输入              |
| PCMOT  | 8  | CMOS 输出                                      | 同步 PCM 数据输出              |
| PCMCK  | 7  | 双向                                           | 同步 PCM 数据时钟              |
| PIO1   | 6  | 双向                                           | 可编程输入/输出线              |
| IRST   | 5  | CMOS 输出，三态，带弱内部上拉                  | 如果低电平则复位，输入必须保持低电平超过 5ms 才能触发复位 |
| PIO0   | 4  | 双向                                           | 可编程输入/输出线              |
| RX     | 3  | CMOS 输出，三态，带弱内部上拉                  | UART 数据输入                  |
| TX     | 2  | CMOS 输出，三态，带弱内部上拉                  | UART 数据输出                  |
| 3V3    | 1  | 3.3V                                           | 集成 3.3V(+) 电源，带片上线性稳压器输出，范围为 3.15-3.3V |

## 机械尺寸 ##

蓝牙 Bee 板的尺寸为 12.7mm x 27mm。

## 使用方法 ##

### 硬件安装 ###

#### 使用 XBee Shield 连接到 Arduino ####

使用 [XBee® Shield](https://seeeddoc.github.io/XBee-Shield/) 将 **蓝牙 Bee** 连接到 Seeeduino / Arduino。请参考 [XBee® Shield](https://seeeddoc.github.io/XBee-Shield/) 文档，了解如何将拨动开关设置到正确位置。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Seeeduino_BluetoothBee_Xbee_Shield.JPG)

#### 使用 UartSbee 连接到 PC ####

使用 UartSBee 将 **蓝牙 Bee** 连接到 PC。在连接蓝牙 Bee 之前，将电源选择拨动开关设置为 3.3V。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/BluetoothBee_with_UartSBee.JPG)

### 软件说明 ###

#### 工作示意图 ####

以下示意图展示了 **蓝牙 Bee** 在主模式和从模式下的操作概览。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth-1.jpg)

#### 流程图 ####

以下流程图提供了 **蓝牙 Bee** 编程的快速入门指南。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth-2.jpg)

#### 修改默认配置的命令 ####

1. 设置工作模式

|  \r\n+STWMOD=0\r\n |   设置设备工作模式为客户端（从机）。保存并重置。 |
|--|||
| **\r\n+STWMOD=1\r\n** | **设置设备工作模式为服务器（主机）。保存并重置。** |

**注意：** \r\n 是操作所需的，值为 **80x0D 0x0A**（十六进制）。**\r** 和 **\n** 分别表示 **回车** 和 **换行**。

2. 设置波特率

|   \r\n+STBD=115200\r\n | 设置波特率为 115200。保存并重置。  |
|---|---|
|    **支持的波特率：9600, 19200, 38400, 57600, 115200, 230400, 460800。**|  ||

3. 设置设备名称

|  \r\n+STNA=abcdefg\r\n  | 设置设备名称为 “abcdefg”。保存并重置。   |
|---|---|
||||

 \r\n+STNA=abcdefg\r\n  
 设置设备名称为 “abcdefg”。保存并重置。

4. 自动连接上次配对的设备

| \r\n+STAUTO=0\r\n  | 禁止自动连接。保存并重置。   |
|---|---|
|  **\r\n+STAUTO=1\r\n** |  **允许自动连接。保存并重置。** |

5. 允许配对设备连接我

| \r\n+STOAUT=0\r\n   |   禁止。保存并重置。 |
|---|---|
| **\r\n+STOAUT=1\r\n**  | **允许。保存并重置。** |

6. 设置 PIN 码

|  \r\n +STPIN=2222\r\n |  设置 PIN 码为 “2222”，保存并重置。  |
|---|
|||                     |

7. 删除 PIN 码（通过 MCU 输入 PIN 码）

|   \r\n+DLPIN\r\n |  删除 PIN 码。保存并重置。 |
|---|---|
|   |   ||

8. 读取本地地址码

  |\r\n+RTADDR\r\n |             返回设备地址。  |
|---|---|
|   |   ||

9. 当主设备超出有效范围时自动重新连接（从设备将在超出有效范围后 30 分钟内自动重新连接）

|  \r\n+LOSSRECONN=0\r\n  |  禁止自动重新连接。  |
|---|---|
| **\r\n+LOSSRECONN=1\r\n** |  **允许自动重新连接。** |

#### 正常操作的命令 ####

#### 1. 查询 ####

#### a) 主机 ####

| \r\n+INQ=0\r\n  | 停止查询   |
|---|---|
|  **\r\n+INQ=1\r\n**  |  **开始/重新开始查询**  |

#### b) 从机 ####

|   \r\n+INQ=0\r\n | 禁止被查询  |
|---|---|
| **\r\n+INQ=1\r\n** |  **允许被查询** |

当 **+INQ=1** 命令成功时，红色和绿色 LED 会交替闪烁。

#### 2. 蓝牙模块返回查询结果 ####

|  \r\n+RTINQ=aa,bb,cc,dd,ee,ff;name\r\n | 查询到地址为 “aa,bb,cc,dd,ee,ff” 且名称为 “name” 的串口蓝牙设备。   |
|---|---|
|   |   ||

#### 3. 连接设备 ####

| \r\n+CONN=aa,bb,cc,dd,ee,ff\r\n  | 连接到地址为 "aa,bb,cc,dd,ee,ff” 的设备。  |
|---|---|
|   |   ||

#### 4. 蓝牙模块请求输入 PIN 码 ####

\r\n+INPIN\r\n

#### 5. 输入 PIN 码 ####

|  \r\n+RTPIN=code\r\n  |   |
|---|---|
|   **示例：RTPIN=0000** | **输入 PIN 码为四个零** |

#### 6. 断开设备连接 ####

将 PIO0 拉高会断开当前工作的蓝牙设备。

#### 7. 返回状态 ####

\r\n+BTSTA:xx\r\n

xx 状态：

- 0 - 初始化中

- 1 - 准备就绪

- 2 - 查询中

- 3 - 连接中

- 4 - 已连接

(**注意：** 这不是命令，而是模块在每次命令后返回的信息)

### 编程 ###

#### 基于流程控制的实现 ####

以下示例代码将 **蓝牙 Bee** 配置为从设备，并等待来自 PC 或其他主设备的连接请求。蓝牙 Bee 通过 XBee Shield 连接到 Seeeduino，如上图所示。蓝牙 Bee 连接到 Arduino / Seeeduino 的数字引脚 11 和 12。我们使用 NewSoftSerial 库支持这些引脚上的串口通信。Arduino 的硬件串口可用于上传代码或调试。此代码使用基于 CheckOK() 的流程控制机制，避免在命令之间使用任意延迟。如果不需要 CheckOK()，请在命令之间至少使用 3 秒的延迟。

```cpp
/*
蓝牙 Bee 示例代码 - 基于流程控制的实现
2010,2011 版权所有 (c) Seeed Technology Inc. 保留所有权利。

作者: Visweswara R

此示例代码是免费软件；您可以根据 GNU 辅助通用公共许可证的条款重新分发和/或修改，
许可证由自由软件基金会发布；版本 2.1 或更高版本。

此库分发的目的是希望它能有用，但不提供任何保证；甚至没有隐含的
适销性或适合特定用途的保证。有关详细信息，请参阅 GNU 辅助通用公共许可证。

您应该已经收到此库附带的 GNU 辅助通用公共许可证副本；如果没有，请联系自由软件基金会，
地址：51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

有关产品的更多详细信息，请访问 https://www.seeedstudio.com/depot/

*/

/* 将此代码上传到 Seeeduino 并按下复位按钮 */

#include <SoftwareSerial.h>   //软件串口
#define RxD 11
#define TxD 12

#define DEBUG_ENABLED  1

SoftwareSerial blueToothSerial(RxD,TxD);

void setup()
{
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    setupBlueToothConnection();

}

void loop()
{
  //典型蓝牙命令 - 响应模拟：

  //从 PC 蓝牙串口终端输入 'a'
  //请参阅蓝牙 Bee - Wiki 获取说明

  if(blueToothSerial.read() == 'a')
  {
    blueToothSerial.println("您已连接");
    //您可以在此处编写蓝牙通信逻辑
  }

}


void setupBlueToothConnection()
{
    blueToothSerial.begin(38400); //将蓝牙 Bee 波特率设置为默认波特率 38400
    delay(1000);
    sendBlueToothCommand("\r\n+STWMOD=0\r\n");
    sendBlueToothCommand("\r\n+STNA=SeeeduinoBluetooth\r\n");
    sendBlueToothCommand("\r\n+STAUTO=0\r\n");
    sendBlueToothCommand("\r\n+STOAUT=1\r\n");
    sendBlueToothCommand("\r\n +STPIN=0000\r\n");
    delay(2000); // 此延迟是必要的。
    sendBlueToothCommand("\r\n+INQ=1\r\n");
    delay(2000); // 此延迟是必要的。
}

//检查是否收到响应 "OK"
void CheckOK()
{
  char a,b;
  while(1)
  {
    if(blueToothSerial.available())
    {
    a = blueToothSerial.read();

    if('O' == a)
    {
      // 等待下一个字符 K。在某些情况下需要 available()，因为 K 不会立即可用。
      while(blueToothSerial.available())
      {
         b = blueToothSerial.read();
         break;
      }
      if('K' == b)
      {
        break;
      }
    }
   }
  }

  while( (a = blueToothSerial.read()) != -1)
  {
    //等待直到接收到所有其他响应字符
  }
}

void sendBlueToothCommand(char command[])
{
    blueToothSerial.print(command);
    CheckOK();   
}
```

#### 基于延迟的实现 ####

以下代码是使用 `delay()` 替代 `CheckOK()` 的修改版本。在此情况下，硬件串口用于调试目的。打开串行监视器并设置为 9600 波特率。MCU 和 Bluetooth Bee 之间的完整通信将在串行监视器中可见。

```cpp
/*
BluetoothBee 示例代码 - 基于延迟的实现
2011 版权所有 (c) Seeed Technology Inc. 保留所有权利。

作者: Visweswara R

此示例代码是免费软件；您可以根据 GNU 较小通用公共许可证的条款重新分发和/或修改，
该许可证由自由软件基金会发布；可以选择版本 2.1 或（根据您的选择）任何更高版本。

此库分发的目的是希望它能有用，但不提供任何担保；甚至没有隐含的适销性或特定用途的适用性担保。
有关详细信息，请参阅 GNU 较小通用公共许可证。

您应该已经收到与此库一起分发的 GNU 较小通用公共许可证副本；如果没有，请联系自由软件基金会，
地址：51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA

有关产品的更多详细信息，请访问 https://www.seeedstudio.com/depot/

*/

/* 将此代码上传到 Seeeduino 并按下复位按钮 */

#include <SoftwareSerial.h>   // 软件串口
#define RxD 11
#define TxD 12

SoftwareSerial blueToothSerial(RxD,TxD);

void setup()
{
    Serial.begin(9600);          // 用于调试的串口，如果不需要可以注释掉此行  
    pinMode(RxD, INPUT);
    pinMode(TxD, OUTPUT);
    setupBlueToothConnection();
}

void loop()
{
  if(blueToothSerial.read() == 'a')
  {
    blueToothSerial.println("您已连接到 Bluetooth Bee");
    // 在这里编写您的蓝牙通信逻辑
  }
}

void setupBlueToothConnection()
{
    Serial.print("正在设置蓝牙连接");       // 用于调试，如果不需要可以注释掉此行    
    blueToothSerial.begin(38400); // 将 BluetoothBee 波特率设置为默认波特率 38400
    delay(1000);
    sendBlueToothCommand("\r\n+STWMOD=0\r\n");
    sendBlueToothCommand("\r\n+STNA=modem\r\n");
    sendBlueToothCommand("\r\n+STAUTO=0\r\n");
    sendBlueToothCommand("\r\n+STOAUT=1\r\n");
    sendBlueToothCommand("\r\n+STPIN=0000\r\n");
    delay(2000); // 此延迟是必要的
    blueToothSerial.print("\r\n+INQ=1\r\n");
    delay(2000); // 此延迟是必要的
    Serial.print("设置完成");
}

void sendBlueToothCommand(char command[])
{
    char a;
    blueToothSerial.print(command);
    Serial.print(command);                          // 用于调试，如果不需要可以注释掉此行    
    delay(3000);

    while(blueToothSerial.available())              // 用于调试，如果不需要可以注释掉此行  
    {                                               // 用于调试，如果不需要可以注释掉此行   
       Serial.print(char(blueToothSerial.read()));  // 用于调试，如果不需要可以注释掉此行  
    }                                               // 用于调试，如果不需要可以注释掉此行   
}
```

#### 在 GNU/Linux 下通过蓝牙适配器连接 Bluetooth Bee 到 PC ####

此步骤演示如何在 GNU/Linux 操作系统下将 **Bluetooth Bee** 连接到 PC。PC 端使用 USB 蓝牙适配器与 **Bluetooth Bee** 通信。上传流控制实现代码到 Seeeduino。

- 安装 gnome-bluetooth

`
sudo apt-get install gnome-bluetooth
`

- 从终端打开 bluetooth-properties 应用程序

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config0.png)

- 点击“设置新设备”

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config1.png)

然后点击“下一步”

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config2.png)

- 打开 PIN 选项...

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config2.1.png)

- 设置固定 PIN 为 0000。0000 是上述代码中使用的默认 PIN。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config3.png)

- 设备设置窗口打开

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config4.png)

- 设置完成对话框打开。点击“关闭”。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config5.png)

- **Bluetooth Bee** 的地址 00:13:EF:00:00:24 显示在终端中。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config6.png)

- 将 **Bluetooth Bee** 绑定到 rfcomm 端口。这里 **Bluetooth Bee** 的地址绑定到串口设备 `/dev/rfcomm0`

```
user@user-desktop:~$ sudo rfcomm bind 0 00:13:EF:00:00:24 1
user@user-desktop:~$ ls /dev/rfcomm*
/dev/rfcomm0
```

- 可以通过任何串口终端（如 cutecom）访问此 `/dev/rfcomm0` 串口。

- 打开 `/dev/rfcomm0`，设置波特率：38400，数据位：8，停止位：1，无流控制。
- 发送字符 'a'

- Seeeduino + Bluetooth Bee 将回复 **"您已连接到 Bluetooth Bee"**

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_linux_config8.png)

#### 在 Windows 下通过蓝牙适配器连接 Bluetooth Bee 到 PC ####

- 安装 Microsoft 蓝牙默认驱动程序。打开控制面板 -> 蓝牙设备

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows0.jpg)

- 点击“添加”按钮。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows1.jpg)

- 勾选“我的设备已设置并准备好被发现”，然后点击“下一步”按钮。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows2.jpg)

- 选择“SeeedBlueToothBee”设备并点击“下一步”。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows3.jpg)

- 选择“使用文档中的密码”，并输入 0000。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows4.jpg)

- 密码交换完成，并为通信分配了一个外部串口 COM5。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows5.jpg)

- 任务栏气泡显示已添加新的蓝牙串口链接。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows6.jpg)

- COM5 被分配用于通信。此端口应用于 PC 与 Bluetooth Bee 的通信。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows7.jpg)

- 任何串口终端都可以访问此 COM5 串口。

- 打开 COM5，设置波特率：38400，数据位：8，停止位：1，无流控。
- 发送字符 'a'。

- Seeeduino + Bluetooth Bee 将回复 "You are connected to Bluetooth Bee"。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Bluetooth_windows8.jpg)

#### 使用 UartsBee 在主模式下将 Bluetooth Bee 连接到 PC ####

此演示使用 [硬件安装 - UartSBee](https://seeeddoc.github.io/w/index.php?title=Hardware_Installation_-_UartSBee&action=edit&redlink=1) 中描述的硬件配置。使用迷你 USB 线将 UartSBee 连接到 PC。

- 打开串口终端并连接到 UartSBee 串口设备，例如 Windows 中的 COM1 或 GNU/Linux 中的 /dev/ttyUSB0，设置波特率：38400，数据位：8，停止位：1，无流控。

- 发送命令 \r\n+STWMOD=1\r\n。此命令将 **Bluetooth Bee** 配置为主模式。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/BTBee_Master1.png)

- 发送命令 \r\n+INQ=1\r\n。**Bluetooth Bee** 将搜索附近可用的蓝牙设备并列出设备地址。在此示例中，返回 +RTINQ=0,19,86,0,19,1E;desktop，其中 desktop 是带有蓝牙接口的 PC。在查询过程中，红色和绿色 LED 交替闪烁。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/BTBee_Master2.png)

- 发送命令 \r\n+CONN=0,19,86,0,19,1E\r\n，其中 0,19,86,0,19,1E 是 desktop 的地址。

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/BTBee_Master3.png)

- 在 PC 端输入 PIN 码 0000 并完成连接。

## 材料清单 (BOM) / 部件列表 ##

- [Bluetooth Bee 裸 PCB](https://seeeddoc.github.io/w/index.php?title=Bluetooth_Bee_bare_PCB&action=edit&redlink=1)
- [串口蓝牙模块（主/从）](https://seeeddoc.github.io/Serial_port_bluetooth_module-Master-Slave/)

## 支持 ##

如果您有任何问题或更好的设计想法，可以前往我们的 [论坛](https://www.seeedstudio.com/forum) 或 [愿望墙](http://wish.seeedstudio.com) 进行讨论。

## 版本追踪 ##

| 修订版本  |  描述  |  发布日期 |
|---|---|---|
| v1.0   | 初始公开发布  |  2009年12月14日  |
|  v1.1  | 修改查询命令并添加一些注释 | 2010年3月15日  |
| v1.2  | 修改硬件和软件功能 | 2010年4月4日  |
|  v1.3  | 更新配置文件，添加返回状态，删除 ECHO 命令。  |  2010年4月21日 |
|  v2.0 | 更新模块为 HM－01（与最新的蓝牙盾相同）。AT 命令与之前版本不兼容。  |   2014年12月4日 |

## Bug 追踪 ##

Bug 追踪是您可以发布在使用过程中发现的任何问题的地方。请写下您的意见，您的反馈将帮助我们改进产品。

## 额外创意 ##

- 实现无线 PS/2 键盘/鼠标。

- 从电脑无线控制玩具机器人。

## 如何购买 ##

点击这里购买：[https://www.seeedstudio.com/depot/bluetooth-bee-p-598.html?cPath=139_142](https://www.seeedstudio.com/depot/bluetooth-bee-p-598.html?cPath=139_142)。

## 许可协议 ##

本文档采用 [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) 许可协议。源代码和库文件采用 [GPL/LGPL](http://www.gnu.org/licenses/gpl.html) 许可协议，详情请参阅源代码文件。

## 相关项目 ##

如果您想使用 Bluetooth Bee 制作一些很棒的项目，以下是一些参考项目。

### Seeed Pet ###

![](https://files.seeedstudio.com/wiki/Bluetooth-Bee/img/Seeed_pet.jpg)

这是一个由 seeduino 和 [Grove](https://seeeddoc.github.io/Grove_System/) (title=undefined) 制作的有趣演示。
SEEED PET 是我们工作室的一种电子宠物。它是一个平台，供新手工程师熟悉我们公司的产品并进行实践。每位新手工程师都会在 SEEED PET 上添加一些新的创意或元素。

[我想制作它。](https://community.seeedstudio.com/project_detail.html?id=16)

### 与我们分享您的精彩项目 ###

怀着创造和分享的精神，这是我们认为造物者的核心所在。

正因为如此，开源社区才能繁荣至今。

无论您是谁，无论您制作了什么，黑客、造物者、艺术家还是工程师，

只要您开始与他人分享您的作品，

您就成为了开源社区的一部分，并为其做出了贡献。

现在在 [Recipe](https://community.seeedstudio.com/projects.html#recipe) 上与我们分享您的精彩项目，赢取成为 Seeed 核心用户的机会。

- 核心用户是那些对 Seeed 产品表现出高度兴趣并做出显著贡献的人。

- 我们与核心用户合作开发新产品，换句话说，核心用户将有机会在产品正式发布前体验 Seeed 的任何新产品，作为回报，我们期待他们提供宝贵的反馈，以帮助我们改进产品性能和用户体验。在大多数情况下，如果核心用户有任何好的创意，我们将提供硬件组件、PCBA 服务以及技术支持。此外，与核心用户进一步的商业合作也是非常可能的。

## 在线原理图查看器 ##

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/cn/images/f/f6/Bluetooth_Bee_Schematic_Board.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源 ##

- **[Eagle]** [Bluetooth Bee 原理图和板文件](https://wiki.seeedstudio.com/cn/images/f/f6/Bluetooth_Bee_Schematic_Board.zip)

- **[PDF]** [Bluetooth_Bee_v2.0_SCH_PCB.zip](http://images/0/06/Bluetooth_Bee_v2.0_SCH_PCB.zip)

- **[Library]** [NewSoftLibrary](http://arduiniana.org/NewSoftSerial/NewSoftSerial10c.zip)

- **[Information]** [关于如何设置 Bluetooth Bee 之间连接的信息可在 Seeedstudio 论坛找到](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=687)

- **[Information]** [在 Seeedstudio 论坛中连接 PC 和 Bluetooth Bee 的信息](https://forum.seeedstudio.com/viewtopic.php?f=18&amp;t=1436&amp;p=5637#p5637)

- **[Datasheet]** [Bluetooth Bee 数据手册](https://files.seeedstudio.com/wiki/Bluetooth-Bee/res/Bluetooth_Bee_datasheet.pdf)

- **[Datasheet]** [HM－01 数据手册](https://files.seeedstudio.com/wiki/Bluetooth-Bee/res/HM%EF%BC%8D01_Datasheet.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时能够获得尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>