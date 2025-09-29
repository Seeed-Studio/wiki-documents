---
description: GPRS Shield V2.0
title: GPRS Shield V2.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/GPRS_Shield_V2.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: GPRS Shield V2.0
category: Discontinued
bzurl: https://www.seeedstudio.com/GPRS-Shield-V2.0-p-1379.html
oldwikiname:  GPRS Shield V2.0
prodimagename:
surveyurl: https://www.research.net/r/GPRS_Shield_V2
sku:  113030000
--- -->

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GRPS_SLD.jpg)

使用GPRS扩展板将您的Arduino连接到GSM/GPRS蜂窝网络！您现在可以使用Arduino/Seeeduino或其他主板通过易于使用的AT命令拨打电话号码或向朋友发送短信。这个新版本采用了四频段低功耗GSM/GPRS模块SIM900以及紧凑的PCB天线。同时，对接口和基础电路进行了改进，使其更加简洁可靠。您有两种选择来实现GPRS扩展板与主板的通信——UART或[SoftwareSerial](https://arduino.cc/en/Reference/SoftwareSerial)。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/GPRS-Shield-V2.0-p-1379.html)

## 版本

---
| 版本 | 描述                                              | 发布日期      |
|----------|-----------------------------------------------------------|--------------|
| v0.9b    | 初始公开发布（测试版）                             | 2011年3月3日  |
| v1.2     | 添加软件端口来控制SIM90的开/关              | 2011年12月2日  |
| v1.4     | 重新设计电源电路，重新布局PCB | 2012年8月30日 |
| v2.0     | 四频段支持并重新设计PCB天线                                     | 2013年2月3日  |
| v3.0     | 将arduino插座更改为最新的Arduino Uno标准  | 2015年3月20日 |

**V2.0与之前版本的区别是什么？**

- 外观变化

  - V2.0采用标准扩展板外形以及保护外壳；
  - 鸭嘴天线被紧凑的PCB天线取代；
  - 麦克风和耳机接口在V2.0上被2合1耳机插孔取代。

- 电源电路变化

  - 用DC-DC电路替换原有的LDO电路。散热更低，效率更高，达到80%+。同时，V1.0上的EXT_PWR插孔被移除。V2.0现在可以直接从Arduino获取电流，无需额外的5V适配器。
  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_Power_circuit.jpg)

- 软启动电路

  - 新版本中添加了软启动电路，以平滑扩展板开启时的功率冲击，防止扩展板出现意外复位问题。
  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/Soft-start_circuit.jpg)

- 天线改进

  - SIM900的最大发射功率为30dBm(1w)。然而V1.0的输出功率只有0.4W。在这个新版本中，发射功率提升到29dBm以上(0.8w+)，为您提供更可靠和稳定的信号传输。

## 规格参数

---
| 项目                    | 值                                                                          |
|-------------------------|--------------------------------------------------------------------------------|
| 兼容性              | 直接兼容 Arduino UNO/Seeeduino；通过跳线兼容其他主板                  |
| 可选接口    | UART，软件串口                                                          |
| 四频段支持       | 850/900/1800/1900MHz                                                           |
| 通信支持   | 标准 - GSM 07.07 & 07.05 和增强 - SIMCOM AT 命令                 |
| 工作温度   | -40°C 到 +85 °C                                                                |
| 协议支持        | 0710 MUX 协议，嵌入式 TCP/UDP 协议，FTP/HTTP，FOTA，MMS，嵌入式 AT |
| SIM900 认证 | CE，IC，FCC，ROHS，PTCRB，GCF，ICASA，REACH，AT&T                              |
| 尺寸              | 68.58 * 53.34mm                                                                |
| 电源供应            | 通过 5V 引脚供应 5v，通过 Vin 引脚供应 6.5~12v                                             |

## 注意事项

---
- 确保您的 SIM 卡已激活。
- GPRS Shield 没有 ESD 防护措施。在干燥天气下处理时请特别小心。

## 硬件概述

---
![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_Shild_V2_hardware_overview.jpg)

- GPRS Shield UART 的出厂默认设置为 19200 bps 8-N-1。（可使用 AT 命令更改）。
- 串口选择
  - 您有两种选择来实现 GPRS shield 与主板的通信，将两个跳线插到 SWserial 或 HWserial 位置。如果使用 SWserial，GPRS Shield 的 SIM900 将使用 D7 和 D8；如果使用 HWserial，将使用 D0 (RX) 和 D1 (TX)。

    ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_serial_port.png)

- 通过 D9 开/关机
  - 默认未焊接 JP 焊盘。如果您想使用软件来开/关 GPRS shield，请焊接它。将 D9 设置为高电平，意味着按钮被按下。JP 焊盘位于 ISP 端口旁边。
- SIM900 引脚引出
  - SIM900 的一些引脚在 ISP 端口旁边引出，包括 LINEIN_R、LINEIN_L、ADC、PWM1、PWM2、GPIO1~GPIO6、GND、FW_update (DISP_CLK、DISP_DATA、DISP_D/C、DISP_CS)、RI、DCD、DSR、CTS、VDD_EXT、LDTR、LRTS。这些引脚直接从 SIM900 引出，无任何设置。

  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_Break.png)

- RTC 电池座
  - 它可以通过 CR1220 电池为 SIM900 的 VRTC 提供 3v 电压。
- 电源
  - 用 DC-DC 电路 -- TD1410 替换原来的 LDO 电路。散热更低，效率更高，可达 80%+。同时，输出可达 4.15V/2A。电源供应有两个输入：
5v 引脚：新版本中添加了软启动电路，以平滑 shield 开启时的电源冲击，防止 shield 出现意外复位问题。更详细的变化请参考相关阅读：版本
  - Vin 引脚：输入电压范围为 6.5v 到 12v。
- 天线
  - 天线连接器类型为 IPEX，SIM900 的最大发射功率为 30dBm(1w)。更多信息请参见 [GPRS 天线规格](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/Antenna_of_GPRS_.pdf)。
- LED 状态说明
  <dl><dd><table cellspacing="0">
  <tr>
    <th scope="col">**LED**</th>
    <th scope="col">**状态**</th>
    <th scope="col">**功能**</th>
  </tr>
  <tr>
    <th scope="row">电源指示灯（绿色）</th>
    <td>关闭</td>
    <td>GPRS Shield 电源关闭</td>
  </tr>
  <tr>
    <td></td>
    <td>开启</td>
    <td>GPRS Shield 电源开启</td>
  </tr>
  <tr>
    <th scope="row">状态指示灯（红色）</th>
    <td>关闭</td>
    <td>电源关闭</td>
  </tr>
  <tr>
    <td></td>
    <td>开启</td>
    <td>电源开启</td>
  </tr>
  <tr>
    <th scope="row">网络指示灯（绿色）</th>
    <td>关闭</td>
    <td>SIM900 未工作</td>
  </tr>
  <tr>
    <td></td>
    <td>64ms 开启/800ms 关闭</td>
    <td>SIM900 未找到网络</td>
  </tr>
  <tr>
    <td></td>
    <td>64ms 开启/3000ms 关闭</td>
    <td>SIM900 找到网络</td>
  </tr>
  <tr>
    <td></td>
    <td>64ms 开启/300ms 关闭</td>
    <td>GPRS 通信</td>
  </tr>
  </table></dd></dl>

## 开始使用

---

### 使用 AT 命令体验乐趣

当您收到 GPRS Shield 时，您想要做的第一件事是什么？发送短信（SMS）？还是给某人打电话（需要耳机）？您可以通过使用 AT 命令与 GPRS Shield 对话来完成所有这些操作 - 这是它能理解的一种特殊语言。

AT 命令是通过串行接口（UART）发送到 GPRS 调制解调器的简单文本命令，因此您可以使用任何串行终端软件与其通信。

#### 硬件安装

- **将激活的 SIM 卡插入 SIM 卡座** - 6 针 SIM 卡座。SIM900 支持 1.8 伏和 3.0 伏 SIM 卡 - 会自动检测 SIM 卡的电压类型。
  - 将 SIM 卡插入卡座
![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_SIM.JPG)
  - 锁定 SIM 卡座
![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_SIM2.JPG)

- **确保天线垫片正确扣合**

  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRSANT.JPG)

- **通信端口配置**
GPRS shield 可以通过 Arduino 的硬件串口或软件串口进行控制。这里我们默认使用软件串口。通过插入跳线帽来选择，如下所示。
  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRSserial.JPG)

- **插入 Arduino** - GPRS Shield 像任何其他设计良好的扩展板一样，是可堆叠的。

- **给 Arduino 供电** - 通过 USB 线或 DC 插孔给 Arduino 供电。连接后电源指示 LED 应该亮起。
  ![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRSshieldV2.png)

#### 软件

让我们来体验使用 AT 命令控制 GPRS shield 的乐趣。

GPRS Shield 配备了通过 GSM 网络发送数据所需的所有配件，除了 Arduino 板和 GSM SIM 卡。如果您想要进行语音通话，还需要带麦克风的耳机。

**步骤 1：为 GPRS Shield 创建测试设置**

:::note
几乎所有的 AT 命令都应该以**回车符**结尾发送，您需要在串口终端中选择"+CR"选项。
:::

要使用 AT 命令进行实验，您需要一种为 GPRS Shield 供电并与其通信的方法。最好的方法是使用下面描述的 Arduino Duemilanove 板。相同的步骤适用于 [Seeeduino](https://wiki.seeedstudio.com/cn/Seeeduino_v4.2/) 或 [Seeeduino Stalker](https://wiki.seeedstudio.com/cn/Seeeduino_Stalker_V3.1/)。

- 按照之前的硬件安装步骤设置硬件系统；
- 确保 GPRS Shield 上的 GPRS_TX & GPRS_RX 跳线安装在 SWSerial 位置 - 这样 GPRS_TX 将连接到 D7(RX)，GPRS_RX 连接到 D8(TX)。
- 通过 USB 线将 Arduino Duemilanove（或 Seeeduino）连接到您的计算机。
- Duemilanove 板上的 ATmega328P 微控制器只有一个 UART，用于与 PC 通信。我们需要的是在 ATmega328P 内运行的 Arduino 程序，通过在数字引脚 D8 和 D7 上使用软件串口来模拟第二个串口（UART）。所有通信都将通过软件串口和实际硬件串口进行。通过这样做，来自计算机（连接到实际硬件 UART）的所有数据都将路由到 GPRS Shield（连接到软件 UART）。然后我们就能够发出 AT 命令来控制 GPRS Shield。概述此方案的框图如下所示。

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_aurduino_uart.jpg)

为了开发这样的程序，我们需要使用 SoftwareSerial 库。这是演示代码。

```cpp
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

- 将程序上传到 Arduino 板。如果您不知道如何上传代码，请按照[说明](https://wiki.seeedstudio.com/cn/Upload_Code/)操作。
- 如果您没有串口工具，请下载并启动[串口工具](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/Sscom32E.zip)。为 Arduino 选择正确的 COM 端口，并将其设置为以 **19200** 8-N-1 运行，然后点击"Open COM"。您也可以使用 AT Command Tester 发送 AT 命令。如果您对此感兴趣，请点击[这里](https://wiki.seeedstudio.com/cn/AT_Command_Tester_Application/)。
- 按住电源按钮约 2 秒钟来启动 SIM900。红色 LED 将亮起。旁边的绿色 LED 将闪烁。如果扩展板成功加入网络，绿色 LED 将每 3 秒闪烁一次。
- 您应该在串口监视器上看到如下消息，这是 SIM900 发送的通知您它已加入网络的信息。

```txt
RDY

+CFUN: 1

+CPIN: READY

Call Ready

```

如果您在串口监视器中看不到这些消息，您应该点击"send new"选项，这将在AT命令末尾添加回车符，然后发送AT命令"AT+IPR=19200"来设置SIM900的波特率。

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_set_baud_rate.jpg)

**步骤2：发送短信（SMS）**

现在我们的测试设置已经准备好了，让我们在编程Arduino执行此操作之前，先手动尝试一些AT命令。让我们先尝试发送短信。

- 按照上述步骤1中描述的方式创建设置。
- 通过您的串口终端软件，发送**AT+CMGF=1**并按回车键。GPRS Shield可以在两种模式下发送短信：文本模式和PDU（或二进制）模式。由于我们想要发送人类可读的消息，我们将选择文本模式。GPRS Shield将响应**OK**。
- 点击"send new"选项并发送**AT+CMGS="+18888888888"**。这将指示GPRS Shield开始接受新消息的文本，数字表示指定的电话号码（将号码替换为目标电话的电话号码）。GPRS Shield将发送一个'**&gt;'**来提醒您输入消息。请注意，任何AT命令中的电话号码都必须遵循[E.123格式](https://en.wikipedia.org/wiki/E.123)格式。

- 开始输入您的消息，完成输入后，点击"send hex"选项，然后发送十六进制：**1A**。调制解调器将接受消息并响应**OK**。稍后，您指定号码的手机应该会收到消息。我发送了"How are you ?"。您可以通过点击"EXT"查看历史记录。命令历史记录列在"Set Multi Char"下方。

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/Send_a_text_message.jpg)

:::note
如果尽管按照上述指定步骤操作，您仍无法在目标手机上接收到消息，您可能需要设置短信消息中心号码。在AT+CMGF和AT+CMGS命令之间发送以下命令：AT+CSCA="+18888888888"。将指定的电话号码替换为您的GSM服务提供商的短信中心号码。消息中心号码对每个服务提供商都是特定的。您可以通过致电GSM服务提供商的客户服务中心并询问来获取消息中心号码。
:::

**步骤3：使用AT命令拨打电话**

- 如果从发送短信切换到拨打电话，请重启SIM900。
- 将命令"ATD18888888888;"（不带引号）中的电话号码替换为您的目标号码，然后按回车键发送。如果成功，将显示消息"ATH OK"，如下图所示。否则，将显示"No CRRLIER"。原因可能是电话号码不存在或命令格式不正确。

**步骤4：进一步探索**

现在您已经体验了AT命令的工作原理，您可以在继续使用GPRS Shield为Arduino开发草图之前尝试其他命令。

这涉及创建一个草图，用于代表您向GPRS Shield的串口发送相同的AT命令序列，以执行发送短信、拨打电话或通过GPRS连接发送数据的相同任务。

您可以查阅[AT命令参考手册](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/AT_Commands_v1.11.pdf)来了解命令序列。如果您开发了Arduino草图，发现GPRS Shield的行为不符合您的预期，那么您需要检查您的AT命令及其序列。为此，请将上述入门部分中附加的串口中继草图重新加载到ATmega328P中，手动输入AT命令并检查输出。GPRS Shield发送回来的响应将帮助您调试AT命令序列。

:::note
还开发并附加了一个执行相同任务的C程序：[Softuart relay atmega328p.zip](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/res/Softuart_relay_atmega328p.zip "File:Softuart relay atmega328p.zip")。
:::

该程序是在Windows PC上开发的。使用[AVRStudio4](http://www.atmel.com/dyn/products/tools_card.asp?tool_id=2725)作为IDE，使用[WinAVR](http://winavr.sourceforge.net/)作为编译器。ZIP文件包含一个AVRStudio4项目。C编译器（WinAVR）将生成一个Intel Hex（.hex）文件。要在Arduino IDE之外将此.hex文件上传到Arduino板中，需要一个能够与Arduino板引导加载程序通信的程序。[XLoader](http://xloader.russemotto.com/)就是这样一个在Windows上运行的程序，可以将各种编译器生成的.hex文件上传到Arduino板中。

##### SoftwareSerial库注意事项

使用Arduino时，您应该能够使用发行版中包含的SoftwareSerial库（而不是NewSoftSerial）。但是，您必须注意，为传入消息保留的缓冲区在库头文件"SoftwareSerial.h"中硬编码为64字节：

```
 define _SS_MAX_RX_BUFF 64 // RX buffer size
```

这意味着如果GPRS模块接收到的数据超过缓冲区，您很可能会因缓冲区溢出而丢失数据！例如，使用"AT+CMGR=xx"（xx是消息索引）从模块中读取短信时，您甚至可能看不到消息部分，因为前面的头信息（如电话号码和时间）占用了大量空间。解决方法似乎是手动将**_SS_MAX_RX_BUFF**更改为更高的值（但要合理，这样您就不会用完所有内存！）

[Softwareserial库](https://arduino.cc/hu/Reference/SoftwareSerial)有以下限制（摘自arduino页面）。如果使用多个软件串口，一次只能有一个接收数据。
这意味着如果您尝试添加另一个串口设备（如grove串口LCD），除非您仔细编写代码，否则可能会出现通信错误。

##### 如何使用AT命令发送短信或拨打电话号码

在这个示例中，我们将创建一个Arduino草图，允许您在Arduino的串行通信窗口中分别输入't'或'd'时发送短信或拨打电话进行语音通话。

###### 发送短信的AT命令

查看SIM900命令集，我们可以看到要发送短信，首先必须设置SMS格式，这需要使用AT+CMGF命令。

AT+CMGF命令可以是两个值之一：0或1，分别对应"PDU模式"和"文本模式"。在"文本模式"中，SMS消息表示为可读文本。在"PDU模式"中，SMS消息表示为用十六进制字符编码的二进制字符串。在这个示例中我们将使用"文本模式"，所以我们需要发送给GPRS扩展板的命令是：

**AT+CMGF=1\r**

现在我们已经设置了SMS格式，可以继续发送短信。要发送短信，我们使用AT+CMGS命令。根据SIM900 AT命令集，CMGS命令遵循以下格式：

**AT+CMGS=&lt;da&gt;[,&lt;toda&gt;]&lt;CR&gt;**

其中&lt;da&gt;是目标地址（电话号码），&lt;toda&gt;是可选的目标地址类型，&lt;CR&gt;是回车符'\r'字符。一旦我们发送了这个命令，GPRS扩展板将回复'>'字符，提示我们输入实际消息。

:::note
电话号码必须包含国家代码，例如对于美国电话号码(555)123-4567，&lt;da&gt;值必须是+15551234567
:::

###### 语音通话命令

根据SIM900 AT命令集表，用于拨打号码进行语音通话的命令是"ATD+xxxxxxxxxx;"，其中"xxxxxxxxxxx"是包含国家代码的电话号码。必须发送分号来建立语音通话，省略它将建立数据或传真通话。

用于发送简单短信或拨打语音电话的Arduino代码如下所示。不要忘记将电话号码"xxxxxxxxxx"和消息"How are you today?"更改为您自己的值。

###### Arduino代码

```cpp
  #include <SoftwareSerial.h>


  SoftwareSerial gprsSerial(7,8);

  void setup()
  {
    gprsSerial.begin(19200); // GPRS shield baud rate
    Serial.begin(19200);   
    delay(500);
  }

  void loop()
  {

    if (Serial.available()) // if there is incoming serial data
     switch(Serial.read()) // read the character
     {
       case 't': // if the character is 't'
         SendTextMessage(); // send the text message
         break;
       case 'd': // if the character is 'd'
         DialVoiceCall(); // dial a number
         break;

     }

    if (gprsSerial.available()){ // if the shield has something to say
      Serial.write(gprsSerial.read()); // display the output of the shield
    }
  }

  /*
  * Name: SendTextMessage
  * Description: Send a text message to a number
  */
  void SendTextMessage()
  {
    Serial.println("Sending Text...");
    gprsSerial.print("AT+CMGF=1\r"); // Set the shield to SMS mode
    delay(100);
    // send sms message, the phone number needs to include the country code e.g. if a U.S. phone number such as (540) 898-5543 then the string must be:
    // +15408985543
    gprsSerial.println("AT+CMGS = \"+xxxxxxxxxx\"");
    delay(100);
    gprsSerial.println("How are you today?"); //the content of the message
    delay(100);
    gprsSerial.print((char)26);//the ASCII code of the ctrl+z is 26 (required according to the datasheet)
    delay(100);
    gprsSerial.println();
    Serial.println("Text Sent.");
  }

  /*
  * Name: DialVoiceCall()
  * Description: Can call/dial a phone number
  */
  void DialVoiceCall()
  {
    gprsSerial.println("ATD+xxxxxxxxxx;");//dial the number, must include country code
    delay(100);
    gprsSerial.println();
  }
```

## 常见问题

以下是 GPRS Shield 常见问题解答，使用前请先阅读：

- 为什么 GPRS Shield 无法通过软件串口（D7/D8）与 Stalker v2.1/2.0 配合工作？

    Stalker v2.1/2.0 已经使用了数字引脚（D7/D8），您需要将 GPRS_TX/GPRS_RX 连接到其他数字引脚作为软件串口。这个问题在 Stalker 2.2 版本中已经解决。

- 为什么将 GPRS Shield 组装到 Stalker 或其他 Arduino 板上时无法使用 I2C？

    因为 GPRS Shield 通过 I2C 与其他模块冲突。GPRS Shield 不使用 I2C 端口，您可以断开从 SIM900 I2C 端口到 A4/A5 的连接。

## 相关项目

---
![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Recipe-arduinophone.png)

这是一个使用 GPRS Shield V2.0 制作的演示。

通过这个演示，我们使用 Arduino、GPRS Shield 扩展板和其他模块制作了一个名为 Arduino Phone 的手机。

[![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Wiki_makeitnow_logo.png)](https://www.instructables.com/id/ArduinoPhone/)

![](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/img/GPRS_gas.jpg)
这是一个使用 GPRS Shield V2.0 制作的演示。

通过这个演示，我们可以在家中发生燃气泄漏时接收短信。
[![](https://files.seeedstudio.com/wiki/GPRS_Shield_v1.0/img/Wiki_makeitnow_logo.png)](https://community.seeedstudio.com/project_detail.html?id=242)

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/GPRS_Shield_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle]** [GPRS Shield v2.0 Eagle 格式原理图和 PCB](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/GPRS_Shield_eagle_file.zip)
- **[PDF]** [GPRS Shield v2.0 PDF 格式原理图](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/GPRS_Shield_V2_Schematic.pdf)
- **[PDF]** [GPRS Shield v2.0 PDF 格式 PCB](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/GPRSshield%20V2%20PCB.pdf)
- **[库文件]** [GitHub 上的 GPRS_Shield 库 - 基于 Suli](https://github.com/Seeed-Studio/GPRS_Shield_Suli)
- **[库文件]** [GitHub 上的 GPRS_SIM900 库 - 非 Suli](https://github.com/Seeed-Studio/GPRS_SIM900)
- **[文档]** [AT 命令 v1.11](https://files.seeedstudio.com/wiki/GPRS_Shield_V2.0/res/AT_Commands_v1.11.pdf)
- **[文档]** [SIM900 硬件设计](https://wiki.seeedstudio.com/cn/images/e/e3/SIM900_HD_V1.05.pdf)
- **[数据手册]** [Si5902BDC](http://www.vishay.com/docs/70415/si5902bd.pdf)
- **[数据手册]** [SIM900 数据手册](https://www.seeedstudio.com/document/SIM900datasheeet.zip)
- **[工具]** [SIM900 固件和工具（固件：1137B08SIM900M64_ST）](https://wiki.seeedstudio.com/cn/images/8/87/SIM900_firmware_and_tool.zip)

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