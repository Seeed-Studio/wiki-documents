---
description: GPRS Shield V1.0
title: GPRS Shield V1.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/GPRS_Shield_v1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---
<!-- ---
name: GPRS Shield V1.0
category: Shield
bzurl: https://www.seeedstudio.com/depot/gprs-shield-p-779.html
oldwikiname:  GPRS Shield V1.0
prodimagename: gprs-shield-p-779.html
surveyurl: https://www.research.net/r/GPRS_Shield_V1
sku:  103030013
--- -->

[![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_shield_v1.4.jpg)](https://www.seeedstudio.com/depot/gprs-shield-p-779.html)

GPRS Shield 为您提供了一种使用 GSM 蜂窝电话网络从远程位置接收数据的方法。该扩展板允许您通过以下三种方法中的任何一种来实现这一点：

* 短信服务
* 音频
* GPRS 服务

GPRS Shield 与所有具有与标准 Arduino 板相同外形尺寸（和引脚排列）的板兼容。GPRS Shield 可以通过简单的 AT 命令通过 UART 进行配置和控制。基于 SIMCOM 的 SIM900 模块，GPRS Shield 就像一部手机。除了通信功能外，GPRS Shield 还有 12 个 GPIO、2 个 PWM 和一个 ADC。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/gprs-shield-p-779.html)

## 版本

| 版本    | 描述     | 发布时间    |
| :------------- | :------------- |:------------- |
| v0.9b      | 初始公开发布（测试版）       | 2011年3月3日       |
| v1.2      | 添加了 SIM90 开/关的软件端口       | 2011年12月2日       |
| v1.4     | 重新设计电源电路，重新布局 PCB      | 2012年8月30日       |

## 特性

* 基于 [SIMCom](http://simcomm2m.com/En/) 的 SIM900 模块
* 四频段 850 / 900/ 1800 / 1900 MHz - 可在全球所有国家的 GSM 网络上工作。
* 通过 AT 命令控制 - 标准命令：GSM 07.07 & 07.05 | 增强命令：SIMCOM AT 命令。
* 短信服务 - 让您可以通过网络发送少量数据（ASCII 或原始十六进制）。
* 嵌入式 TCP/UDP 协议栈 - 允许您将数据上传到 Web 服务器。
* 扬声器和耳机插孔 - 让您可以发送 DTMF 信号或播放录音，如答录机。
* SIM 卡座和 GSM 天线 - 板载提供。
* 12 个 GPIO、2 个 PWM 和一个 ADC（全部为 2.8 伏逻辑）- 增强您的 Arduino。
* 低功耗 - 1.5mA（睡眠模式）
* 工业温度范围 - -40°C 到 +85°C

## 应用创意

* M2M（机器对机器）应用 - 使用 SMS 或 GPRS 在位于两个不同工厂的两台机器之间传输控制数据。
* 家电远程控制 - 当您在办公室时发送 SMS 来开启或关闭家中的洗衣机。
* 远程气象站或无线传感器网络 - 与 [Seeeduino Stalker](https://wiki.seeedstudio.com/cn/Seeeduino_Stalker_V3.1/) 配合使用，创建一个能够将传感器数据（如气象站的温度、湿度等）传输到 Web 服务器（如 [pachube.com](http://www.pachube.com)）的传感器节点。
* 交互式语音应答系统 - 将 GPRS Shield 与 MP3 解码器和 DTMF 解码器（以及 Arduino）结合，创建一个[交互式语音应答系统（IVRS）](https://en.wikipedia.org/wiki/Interactive_voice_response)。
* 车辆跟踪系统 - 将 GPRS Shield 与 Arduino 和 GPS 模块结合。然后将其安装在您的汽车中，在互联网上实时发布您的位置。它可以用作汽车防盗报警器。

## 注意事项

* 确保您的SIM卡已解锁。
* 本产品不提供绝缘外壳。请特别注意静电防护，尤其是在干燥（低湿度）天气中。
* GPRS Shield UART的出厂默认设置为19200 bps 8-N-1。（可通过AT命令更改）。
* 当将GPRS Shield与[Seeeduino Stalker](https://wiki.seeedstudio.com/cn/Seeeduino_Stalker_V3.1/)一起使用时，请记住拆除**OK_READ**跳线（即断开它）。这将断开电池充电器IC的OK引脚与微控制器数字引脚7的连接，从而允许使用NewSoftSerial库与GPRS Shield进行无障碍通信。

## 规格参数

有关SIM900的规格参数，请参考此PDF文件：[SIM900_SPEC.pdf](https://wiki.seeedstudio.com/cn/images/0/0b/SIM900_SPEC.pdf)

<table  cellspacing="0" width="80%">
<tr>
  <th scope="col">项目</th>
  <th scope="col">最小值</th>
  <th scope="col">典型值</th>
  <th scope="col">最大值</th>
  <th scope="col">单位</th>
</tr>
<tr>
  <th scope="row">电压</th>
  <td>4.8</td>
  <td>5.0</td>
  <td>5.2</td>
  <td>VDC</td>
</tr>
<tr>
  <th scope="row">电流</th>
  <td>/</td>
  <td>50</td>
  <td>450</td>
  <td>mA</td>
</tr>
<tr>
  <th scope="row">尺寸（含天线）</th>
  <td colspan="3">110x58x19</td>
  <td>mm</td>
</tr>
<tr>
  <th scope="row">净重</th>
  <td colspan="3">76±2</td>
  <td>g</td>
</tr>
</table>

## 接口功能

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_Shield_interface.png)

* **电源选择** - 为GPRS shield选择电源（外部电源或arduino的5v）
* **电源插座** - 连接外部4.8~5VDC电源
* **天线接口** - 连接外部天线
* **串口选择** - 选择软件串口或硬件串口连接到GPRS Shield
* **硬件串口** - Arduino/Seeeduino的D0/D1
* **软件串口** - 仅限Arduino/Seeeduino的D7/D8
* **状态LED** - 指示SIM900的电源是否开启
* **网络指示灯** - 指示SIM900连接网络的状态
* **SIM900的UART** - SIM900的UART引脚引出
* **麦克风** - 将声音转换为电信号
* **扬声器** - 将电信号转换为声音
* **SIM900的GPIO、PWM和ADC** - SIM900的GPIO、PWM和ADC引脚引出
* **电源键** - SIM900的开机和关机

### Arduino上的引脚使用

* **D0** - 如果选择软件串口与GPRS Shield通信则不使用
* **D1** - 如果选择软件串口与GPRS Shield通信则不使用
* **D7** - 如果选择软件串口与GPRS Shield通信则使用
* **D8** - 如果选择软件串口与GPRS Shield通信则使用
* **D9** - 用于软件控制SIM900的开机或关机
* **注意：** A4和A5连接到SIM900上的I2C引脚。无法通过I2C访问SIM900。

## 入门指南

### 指示灯状态

<table>
  <tbody>
    <tr>
      <th>LED</th>
      <th>状态</th>
      <th>功能</th>
    </tr>
    <tr>
      <td width="300px" rowSpan={2}>Status</td>
      <td width="300px">关闭</td>
      <td width="400px">电源关闭</td>
    </tr>
    <tr>
      <td width="300px">开启</td>
      <td width="400px">电源开启</td>
    </tr>
    <tr>
      <td width="300px" rowSpan={4}>Netlight</td>
      <td width="300px">关闭</td>
      <td width="400px">SIM900未工作</td>
    </tr>
    <tr>
      <td width="300px">64ms开启/800ms关闭</td>
      <td width="400px">SIM900未找到网络</td>
    </tr>
    <tr>
      <td width="300px">64ms开启/3000ms关闭</td>
      <td width="400px">SIM900找到网络</td>
    </tr>
    <tr>
      <td width="300px">64ms开启/300ms关闭</td>
      <td width="400px">GPRS通信</td>
    </tr>
  </tbody>
</table>

### 硬件安装

* **将解锁的SIM卡插入SIM卡座** - 6针SIM卡座。SIM900支持1.8伏和3.0伏SIM卡 - 自动检测SIM卡的电压类型。
  * 将SIM卡插入卡座
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Insert_an_unlock_SIM_card.jpg)
  * 锁定SIM卡座
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/SIM_card_inserted.jpg)

* **确保天线垫片正确扣合** - GPRS Shield板上有一个微型同轴RF连接器用于连接GSM天线。GPRS Shield上的连接器称为[U.FL连接器](https://en.wikipedia.org/wiki/Hirose_U.FL)。连接到GPRS Shield上的GSM天线有一个[SMA连接器](https://en.wikipedia.org/wiki/SMA_connector)（而不是RP-SMA连接器）。GPRS Shield还提供了一根跳线用于将天线连接到板子。连接拓扑如下图所示：

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/The_antenna_pad.jpg)

* **组装GSM天线**

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Assemble_GSM_antenna.jpg)

* **GPRS shield的电源供应** - 通过板上的开关选择电源，您可以选择来自arduino的5V电源或外部电源。选择来自Arduino的5V电源如下图所示：

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_select_5v_of_arduino.jpg)

* **配置通信端口** - GPRS shield可以通过Arduino的硬件串口或软件串口进行控制，使用跳线选择软件串口：

|GPRS通过软件串口与arduino通信| GPRS通过硬件串口与arduino通信|
|---|---|
|![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_communicate_with_arduino_with_software_serial.jpg) |![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_communicate_with_arduino_with_hardware_serial.jpg) |

* **插入Arduino UNO R3** - GPRS Shield像任何其他设计良好的shield一样，可以堆叠，如下图所示。

* GPRS Shield + Arduino UNO R3
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Plug_GPRS_to_arduino.jpg)

### 上电和断电

* **硬件触发**
按住电源键约2秒钟即可上电或断电。
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Button_to_power_up_and_down.jpg)

* **软件触发**
您可以通过在固件中添加软件触发功能，通过Arduino的D9引脚来控制扩展板的上电/断电。

:::note
为了使用软件上电/断电功能，必须焊接扩展板上引脚9的JP跳线。
:::

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Shixu.jpg)

根据开/关的时序要求，需要一个>1s的脉冲来触发开关动作，并且需要>3.2s的延时来保证时序稳定。在您的固件中需要以下代码来实现不按按钮就能开启/关闭扩展板：

```
void powerUpOrDown()
{
    pinMode(9, OUTPUT);
    digitalWrite(9,LOW);
    delay(1000);
    digitalWrite(9,HIGH);
    delay(2000);
    digitalWrite(9,LOW);
    delay(3000);
}
```

### 入门指南 - AT 命令的乐趣

GPRS Shield 配备了通过 GSM 网络发送数据所需的所有配件，除了 Arduino 开发板和 GSM SIM 卡。如果您想要进行语音通话，还需要一个带麦克风的耳机。

**步骤 1：为 GPRS Shield 创建测试设置**

当您收到 GPRS Shield 时，您想要做的第一件事是什么？发送短信（SMS）？还是给某人打电话（需要耳机）？您可以通过 AT 命令与 GPRS Shield 对话来完成所有这些操作 - 这是它能理解的一种特殊语言。AT 命令是通过串行接口（UART）发送到 GPRS 调制解调器的简单文本命令，因此您可以使用任何串行终端软件与其通信。

:::note:
几乎所有的 AT 命令都应该以**回车符**结尾发送，您需要在串口终端中选择"+CR"选项。
:::

要进行 AT 命令实验，您需要一种为 GPRS Shield 供电并与其通信的方法。最好的方法是使用下面描述的 Arduino Duemilanove 开发板。相同的步骤也适用于 [Seeeduino](https://wiki.seeedstudio.com/cn/Seeeduino_v4.2/) 或 [Seeeduino Stalker](https://wiki.seeedstudio.com/cn/Seeeduino_Stalker_V3.1/)。

* 按照之前的硬件安装步骤设置硬件系统；
* 确保 GPRS Shield 上的 GPRS_TX 和 GPRS_RX 跳线安装在 SWSerial 位置 - 这样 GPRS_TX 将连接到 D7(RX)，GPRS_RX 连接到 D8(TX)。
* 通过 USB 线将 Arduino Duemilanove（或 Seeeduino）连接到您的计算机。
* Duemilanove 开发板上的 ATmega328P 微控制器只有一个 UART，用于与 PC 通信。我们需要的是在 ATmega328P 内运行的 Arduino 程序，通过在数字引脚 D8 和 D7 上使用软件串口来模拟第二个串行端口（UART）。所有通信都将通过软件串口和实际硬件串口进行。通过这样做，来自计算机（连接到实际硬件 UART）的所有数据都将路由到 GPRS Shield（连接到软件 UART）。然后我们就能够发出 AT 命令来控制 GPRS Shield。概述此方案的框图如下所示。

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_aurduino_uart.jpg)

为了开发这样的程序，我们需要使用 SoftwareSerial 库。以下是演示代码。

```
//Serial Relay - Arduino will patch a
//serial link between the computer and the GPRS Shield
//at 19200 bps 8-N-1
//Computer is connected to Hardware UART
//GPRS Shield is connected to the Software UART

#include <SoftwareSerial.h>

SoftwareSerial GPRS(7, 8);
unsigned char buffer[64]; // buffer array for data recieve over serial port
int count=0;     // counter for buffer array
void setup()
{
    GPRS.begin(19200);               // the GPRS baud rate
    Serial.begin(19200);             // the Serial port of Arduino baud rate.

}

void loop()
{
    if (GPRS.available())              // if date is comming from softwareserial port ==> data is comming from gprs shield
    {
        while(GPRS.available())          // reading data into char array
        {
            buffer[count++]=GPRS.read();     // writing data into array
            if(count == 64)break;
        }
        Serial.write(buffer,count);            // if no data transmission ends, write buffer to hardware serial port
        clearBufferArray();              // call clearBufferArray function to clear the storaged data from the array
        count = 0;                       // set counter of while loop to zero


    }
    if (Serial.available())            // if data is available on hardwareserial port ==> data is comming from PC or notebook
    GPRS.write(Serial.read());       // write it to the GPRS shield
}
void clearBufferArray()              // function to clear buffer array
{
    for (int i=0; i<count;i++)
    { buffer[i]=NULL;}                  // clear all index of array with command NULL
}
```

* 将代码上传到 Arduino 开发板。
* 如果您没有串口工具，请下载[串口工具](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/Sscom32E.zip)。为 Arduino 选择正确的 COM 端口，并将其设置为 **19200** 8-N-1，然后点击"打开 COM"。
* 您可以通过按住按钮约 2 秒来开启或关闭 SIM900。开机后，红色 LED 将亮起，旁边的绿色 LED 将闪烁，如果每 3 秒闪烁一次，则表示扩展板已找到网络。
这是电源开关按钮。

 ![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Power_on_and_off_for_SIM900.jpg)

 同时，您应该在串口监视器中看到来自扩展板的消息，如
 `RDY` `+CFUN: 1` `+CPIN: READY` `Call Ready`。如果您在串口监视器中看不到这些消息，您应该点击"send new"选项，这将在 AT 命令末尾添加回车符，然后发送 AT 命令"AT+IPR=19200"来设置 SIM900 的波特率。

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_set_baud_rate.jpg)

 请注意，在设置 GPRS 扩展板的波特率之前，GPRS 扩展板和 Arduino 串口的波特率应该相同。

* 现在，点击"send new"选项，然后输入并发送"AT"（不带引号）到 Arduino 开发板。GPRS 扩展板应该通过发送"OK"来响应。这意味着您已经成功配置了 GPRS 扩展板。现在您可以尝试各种 AT 命令。（如果您使用 Arduino IDE 中现成的串口监视器，您应该将行结束符设置为"回车符"，波特率设置为 19200）。

**步骤 2：发送短信 (SMS)**

现在我们的测试设置已经准备好了，让我们在编程 Arduino 执行此操作之前，先手动尝试一些 AT 命令。让我们先尝试发送短信。

* 按照上述步骤 1 中描述的方法创建设置。
* 通过您的串口终端软件，发送 **AT+CMGF=1** 并按回车键。GPRS 扩展板可以在两种模式下发送短信：文本模式和 PDU（或二进制）模式。由于我们想要发送人类可读的消息，我们将选择文本模式。GPRS 扩展板将响应 **OK**。
* 点击"send new"选项并发送 **AT+CMGS="+918446043032"**。这将指示 GPRS 扩展板开始接受新消息的文本，数字表示指定的电话号码（将号码替换为目标电话的电话号码）。GPRS 扩展板将发送一个 '_**&gt;'**_' 来提醒您输入消息。请注意，任何 AT 命令中的电话号码都必须遵循 [E.123 格式](https://en.wikipedia.org/wiki/E.123)。

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/GPRS_send_a_message.jpg)

* 开始输入您的消息，完成输入后，点击"send hex"选项，然后发送十六进制：**1A**。调制解调器将接受消息并响应 **OK**。稍后，您指定号码的手机应该会收到消息。您可以参考下面的图片。

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Gprssendsms1.jpg)

:::note
如果您按照上述指定步骤操作，但目标手机无法收到消息，那么可能需要设置短信消息中心号码。
:::

发送命令 **AT+CSCA="+919032055002"** 并按回车键。在 AT+CMGF 和 AT+CMGS 命令之间发送此命令。将上述命令中指定的电话号码替换为您的 GSM 服务提供商的短信中心号码。

消息中心号码是每个服务提供商特有的（例如 +919032055002 是 _Tata DoCoMo, Pune, India_ 的消息中心号码）。您可以通过致电 GSM 服务提供商的客户中心并询问来获取消息中心号码。

**步骤 3：进一步探索**

现在您已经体验了 AT 命令的工作原理，您可以在继续使用 GPRS 扩展板为 Arduino 开发代码之前尝试其他命令。

这涉及创建一个代码，用于（代表您）通过串口向 GPRS 扩展板发送相同的 AT 命令序列，以执行发送短信、拨打电话或通过 GPRS 连接发送数据的相同任务。

您可以查阅 [AT 命令参考手册](https://wiki.seeedstudio.com/cn/images/a/a0/SIM900_ATC_V1_00.pdf) 来了解命令序列。如果您开发了 Arduino 代码，但发现 GPRS 扩展板的行为不符合您的预期，那么您需要检查您的 AT 命令及其序列。为此，请将上述入门部分中附加的串口中继代码重新加载到 ATmega328P 中，手动输入 AT 命令并检查输出。GPRS 扩展板发送回来的响应将帮助您调试 AT 命令序列。

:::note
还开发并附加了一个执行相同任务的 C 程序：[Softuart relay atmega328p.zip](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/Softuart_relay_atmega328p.zip "File:Softuart relay atmega328p.zip")。
:::

该程序是在 Windows PC 上开发的。使用 [AVRStudio4](http://www.atmel.com/dyn/products/tools_card.asp?tool_id=2725) 作为 IDE，使用 [WinAVR](http://winavr.sourceforge.net/) 作为编译器。ZIP 文件包含一个 AVRStudio4 项目。C 编译器（WinAVR）将生成一个 Intel Hex（.hex）文件。要在 Arduino IDE 之外将此 .hex 文件上传到 Arduino 开发板，需要一个能够与 Arduino 开发板引导加载程序通信的程序。[XLoader](http://xloader.russemotto.com/) 就是这样一个在 Windows 上运行的程序，可以将各种编译器生成的 .hex 文件上传到 Arduino 开发板。

### SoftwareSerial 库注意事项

使用 Arduino 1.0，您应该能够使用发行版中包含的 SoftwareSerial 库（而不是 NewSoftSerial）。但是，您必须注意，为传入消息保留的缓冲区在库头文件"SoftwareSerial.h"中硬编码为 64 字节：

```
 define _SS_MAX_RX_BUFF 64 // RX 缓冲区大小
```

这意味着如果GPRS模块接收到的数据超过缓冲区容量，您很可能会因为缓冲区溢出而丢失数据！例如，使用"AT+CMGR=xx"（xx是消息索引）从模块读取短信时，您甚至可能看不到消息部分，因为前面的头信息（如电话号码和时间）占用了大量空间。解决方法似乎是手动将**_SS_MAX_RX_BUFF**更改为更高的值（但要合理，这样您就不会用完所有内存！）

[Softwareserial库](https://arduino.cc/hu/Reference/SoftwareSerial)有以下限制（摘自arduino页面）。如果使用多个软件串口，一次只能有一个接收数据。
这意味着如果您尝试添加另一个串行设备（如grove串行LCD），除非您仔细编写代码，否则可能会出现通信错误。

## 简单源代码示例

下面的演示代码用于Xduino发送短信、拨打语音电话、向网站提交http请求以及将数据上传到pachube。它已在Arduino Duemilanove上测试过，也适用于任何兼容平台，请注意此sketch使用ATmega328P的软件UART。请按照以下步骤运行此sketch。

1. 移除GPRS Shield，将此sketch下载到您的Arduino中。
2. 断开Xduino与USB端口的连接以移除电源。
3. 将GPRS Shield上的串口跳线设置在SWserial位置，以使用Arduino的软串口。
4. 将天线连接到GPRS Shield并插入SIM卡。
5. 将GPRS Shield安装到Arduino上。
6. 通过USB将Arduino连接到计算机，在计算机上启动您喜欢的串口终端软件，选择Arduino的COM端口，设置为19200 8-N-1操作。
7. 在终端中输入命令以执行不同功能，演示中有4个功能：

    * a. 如果您输入**'t'**，演示将向您定义的另一部手机发送短信（您需要在代码中设置号码）；
    * b. 如果您输入**'d'**，程序将拨打您定义的另一部手机（您需要在代码中设置号码）；
    * c. 如果您输入**'h'**，它将向您想要访问的网站提交http请求（需要您在代码中设置网址），如果正确执行，它将从网站返回一个字符串；
    * d. 如果您输入**'s'**，它将数据上传到pachube（详细信息可参考代码中的说明）。我强烈建议您在输入's'之前先输入'h'，因为上传数据到pachube需要进行一些设置，执行提交http请求功能后，设置将被执行。

8. 如果在您输入命令后程序在终端中返回错误，不要担心，只需再次尝试输入命令即可。

```cpp
/*注意：此代码演示了如何使用GPRS扩展板发送短信、拨打语音电话以及
  向网站发送HTTP请求，通过TCP连接将数据上传到pachube.com，

  微控制器数字引脚7，因此允许使用SoftSerial库与GPRS扩展板进行无阻碍
  通信。
  IDE：Arduino 1.0或更高版本
  替换代码中的以下项目：
  1.电话号码，不要忘记添加国家代码
  2.替换接入点名称
  3. 将Pachube API密钥替换为您在cosm.com账户中分配的个人密钥
  */


#include <SoftwareSerial.h>
#include <String.h>

SoftwareSerial mySerial(7, 8);

void setup()
{
    mySerial.begin(19200);               // GPRS波特率
    Serial.begin(19200);    // GPRS波特率
    delay(500);
}

void loop()
{
    //程序启动后，您可以使用终端连接GPRS扩展板的串口，
    //如果您在终端中输入't'，程序将执行SendTextMessage()，它将显示如何发送短信，
    //如果在终端中输入'd'，它将执行DialVoiceCall()，等等。

    if (Serial.available())
    switch(Serial.read())
    {
        case 't':
        SendTextMessage();
        break;
        case 'd':
        DialVoiceCall();
        break;
        case 'h':
        SubmitHttpRequest();
        break;
        case 's':
        Send2Pachube();
        break;
    }
    if (mySerial.available())
    Serial.write(mySerial.read());
}

///SendTextMessage()
///此函数用于发送短信
void SendTextMessage()
{
    mySerial.print("AT+CMGF=1\r");    //因为我们想以文本模式发送短信
    delay(100);
    mySerial.println("AT + CMGS = \"+86138xxxxx615\"");//发送短信，注意需要在手机号码前添加国家代码
    delay(100);
    mySerial.println("A test message!");//消息内容
    delay(100);
    mySerial.println((char)26);//ctrl+z的ASCII码是26
    delay(100);
    mySerial.println();
}

///DialVoiceCall
///此函数用于拨打语音电话
void DialVoiceCall()
{
    mySerial.println("ATD + +86138xxxxx615;");//拨打号码
    delay(100);
    mySerial.println();
}

///SubmitHttpRequest()
///此函数用于提交HTTP请求
///注意：延迟时间非常重要，必须设置足够长
void SubmitHttpRequest()
{
    mySerial.println("AT+CSQ");
    delay(100);

    ShowSerialData();// 此代码用于显示来自GPRS扩展板的数据，以便轻松查看GPRS扩展板如何提交HTTP请求的过程，以下代码也是为了这个目的。

    mySerial.println("AT+CGATT?");
    delay(100);

    ShowSerialData();

    mySerial.println("AT+SAPBR=3,1,\"CONTYPE\",\"GPRS\"");//设置SAPBR，连接类型使用GPRS
    delay(1000);

    ShowSerialData();

    mySerial.println("AT+SAPBR=3,1,\"APN\",\"CMNET\"");//设置APN，第二个参数需要您填入本地APN服务器
    delay(4000);

    ShowSerialData();

    mySerial.println("AT+SAPBR=1,1");//设置SAPBR，详细信息请参考AT命令手册
    delay(2000);

    ShowSerialData();

    mySerial.println("AT+HTTPINIT"); //初始化HTTP请求

    delay(2000);
    ShowSerialData();

    mySerial.println("AT+HTTPPARA=\"URL\",\"www.google.com.hk\"");// 设置httppara，第二个参数是您要访问的网站
    delay(1000);

    ShowSerialData();

    mySerial.println("AT+HTTPACTION=0");//提交请求
    delay(10000);//延迟非常重要，延迟时间基于网站的返回，如果返回数据非常大，需要更长的时间。
    //while(!mySerial.available());

    ShowSerialData();

    mySerial.println("AT+HTTPREAD");// 从您访问的网站读取数据
    delay(300);

    ShowSerialData();

    mySerial.println("");
    delay(100);
}

///send2Pachube()///
///此函数用于将传感器数据发送到pachube，执行此函数后您可以在pachube中看到新值///
void Send2Pachube()
{
    mySerial.println("AT+CGATT?");
    delay(1000);

    ShowSerialData();

    mySerial.println("AT+CSTT=\"CMNET\"");//启动任务并设置APN，
    delay(1000);

    ShowSerialData();

    mySerial.println("AT+CIICR");//建立无线连接
    delay(3000);

    ShowSerialData();

    mySerial.println("AT+CIFSR");//获取本地IP地址
    delay(2000);

    ShowSerialData();

    mySerial.println("AT+CIPSPRT=0");
    delay(3000);

    ShowSerialData();

    mySerial.println("AT+CIPSTART=\"tcp\",\"api.cosm.com\",\"8081\"");//启动连接
    delay(2000);

    ShowSerialData();

    mySerial.println("AT+CIPSEND");//开始向远程服务器发送数据
    delay(4000);
    ShowSerialData();
    String humidity = "1031";//这4行代码模拟真实的传感器数据，因为演示没有添加其他传感器，所以使用4个字符串变量来替代。
    String moisture = "1242";//您可以在项目中将这四个变量替换为真实的传感器数据
    String temperature = "30";//
    String barometer = "60.56";//
    mySerial.print("{\"method\": \"put\",\"resource\": \"/feeds/42742/\",\"params\"");//这里是您从pachube申请的feed
    delay(500);
    ShowSerialData();
    mySerial.print(": {},\"headers\": {\"X-PachubeApiKey\":");//在这里，您应该替换您的pachubeapikey
    delay(500);
    ShowSerialData();
    mySerial.print(" \"_cXwr5LE8qW4a296O-cDwOUvfddFer5pGmaRigPsiO0");//pachubeapikey
    delay(500);
    ShowSerialData();
    mySerial.print("jEB9OjK-W6vej56j9ItaSlIac-hgbQjxExuveD95yc8BttXc");//pachubeapikey
    delay(500);
    ShowSerialData();
    mySerial.print("Z7_seZqLVjeCOmNbEXUva45t6FL8AxOcuNSsQS\"},\"body\":");
    delay(500);
    ShowSerialData();
    mySerial.print(" {\"version\": \"1.0.0\",\"datastreams\": ");
    delay(500);
    ShowSerialData();
    mySerial.println("[{\"id\": \"01\",\"current_value\": \"" + barometer + "\"},");
    delay(500);
    ShowSerialData();
    mySerial.println("{\"id\": \"02\",\"current_value\": \"" + humidity + "\"},");
    delay(500);
    ShowSerialData();
    mySerial.println("{\"id\": \"03\",\"current_value\": \"" + moisture + "\"},");
    delay(500);
    ShowSerialData();
    mySerial.println("{\"id\": \"04\",\"current_value\": \"" + temperature + "\"}]},\"token\": \"lee\"}");


    delay(500);
    ShowSerialData();

    mySerial.println((char)26);//发送
    delay(5000);//等待回复，重要！时间基于网络条件
    mySerial.println();

    ShowSerialData();

    mySerial.println("AT+CIPCLOSE");//关闭连接
    delay(100);
    ShowSerialData();
}

void ShowSerialData()
{
    while(mySerial.available()!=0)
    Serial.write(mySerial.read());
}
```

## 常见问题

以下是 GPRS Shield 常见问题解答，使用前请先阅读：

* 为什么 GPRS Shield 无法通过软件串口（D7/D8）与 Stalker v2.1/2.0 配合工作？

    Stalker v2.1/2.0 已经使用了数字引脚（D7/D8），您需要将 GPRS_TX/GPRS_RX 连接到其他数字引脚作为软件串口。这个问题在 Stalker 2.2 版本中已经解决。

* 为什么将 GPRS Shield 组装到 Stalker 或其他 Arduino 板上时无法使用 I2C？

    因为 GPRS Shield 通过 I2C 与其他模块冲突。GPRS Shield 不使用 I2C 端口，您可以断开从 SIM900 I2C 端口到 A4/A5 的连接。

## 相关项目

![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Recipe-arduinophone.png)

这是一个使用 GPRS Shield V2.0 制作的演示。

通过这个演示，我们使用 Arduino、GPRS Shield 扩展板和其他模块制作了一个名为 Arduino Phone 的手机。

[![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Wiki_makeitnow_logo.png)](https://www.instructables.com/id/ArduinoPhone/)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/GPRS_shield_v1.4.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* [GPRS Shield v1.4 PDF 格式原理图](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/GPRSshield_Schematic.pdf)

* [GPRS Shield v1.4 PDF 格式 PCB](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/GPRSshield%20v1.4.pdf)
* [GPRS Shield v1.4 Eagle 格式原理图和 PCB](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/GPRS_shield_v1.4.zip)
* [AT 命令 v1.00](https://wiki.seeedstudio.com/cn/images/a/a0/SIM900_ATC_V1_00.pdf)
* [AT 命令 v1.03](https://wiki.seeedstudio.com/cn/images/a/a8/SIM900_AT_Command_Manual_V1.03.pdf)
* [AT 命令 v1.11](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/AT_Commands_v1.11.pdf)
* [Si5902BDC](http://www.vishay.com/docs/70415/si5902bd.pdf)
* [SIM900 硬件设计](https://wiki.seeedstudio.com/cn/images/e/e3/SIM900_HD_V1.05.pdf)
* [SIM900 固件和工具（固件：1137B08SIM900M64_ST）](https://wiki.seeedstudio.com/cn/images/8/87/SIM900_firmware_and_tool.zip)
* [SIM900 数据手册](https://www.seeedstudio.com/document/SIM900datasheeet.zip)

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