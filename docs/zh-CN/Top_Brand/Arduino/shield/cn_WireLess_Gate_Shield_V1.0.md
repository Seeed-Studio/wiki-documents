---
description: WireLess_Gate_Shield_V1.0
title: WireLess Gate Shield V1.0

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/WireLess_Gate_Shield_V1.0
last_update:
  date: 02/02/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/WLG_h.jpg" alt="pir" width={600} height="auto" /></p>

WireLess Gate Shield 是一款兼容 Arduino 的扩展卡，专为构建接收/发送和广播各种无线命令和数据的系统而设计。为了实现最大的覆盖范围，板上的无线通信接口包括一个红外接收器接口，用于连接流行的收发器 nRF24L01+ 和 RFM69HW。此外，该板还配有基于 DS1307 的实时时钟模块。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/WLG_intro.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/WireLess-Gate-Shield-p-2117.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

---

* 连接 315/433/868/915 MHz（取决于版本）收发器 [RFM69HW](http://devicter.ru/goods/RFM69HW-RF-transceiver) 的接口

* 连接 2.4 GHz 收发器 [nRF24L01+](https://www.seeedstudio.com/depot/s/nRF24L01.html?search_in_description=0) 的接口

* 红外接收器
* 基于 DS1307 的实时时钟模块，带电池备份
* 无线模块自动活动指示 LED
* 用户 LED
* 时钟操作按钮
* [GROVE](https://www.seeedstudio.com/depot/Grove-t-3.html?ref=top) 兼容连接器：I2C
* 完全兼容 [Ethernet Shield](https://www.seeedstudio.com/depot/W5200-Ethernet-Shield-p-1577.html)

## 布局和原理图

---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/Wl-top.png" alt="pir" width={600} height="auto" /></p>

WireLess Gate Shield 的左侧是无线模块接口：

* nRF24l01+，包括增强型（"PA"）版本（上方）
* RFM69HW（下方）

在无线模块之间是用于 RFM69HW 外部天线的 U.FL 连接器。如果您计划使用常规天线（所需长度的导线）- 可以直接焊接到 Shield 板上（U.FL 连接器附近）

RFM69HW 模块右侧稍上方是 LED LED1 "RF433"

板的中央部分是时钟模块 DS1307 的备用电池插槽

电池插槽右侧稍下方是 I2C 连接器。

右侧从上到下依次是：

* LED LED2 "RF24"
* 红外接收器
* LED LED3 - 用户
* 时钟按钮 S1

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/WireLess_Gate_Shield_V1.0/img/Wl-Scheme.PNG" alt="pir" width={600} height="auto" /></p>

## 基本功能

---
在基本版本中（不使用 Ethernet Shield），可以在无线电和红外接收器之间组织无线网关。

命令（或数据）可以根据用户编程的逻辑在所有三个无线接口之间广播。

实时时钟模块的可用性将自动化任何数据或命令的发送，并参考日期/时间。

设备管理可以使用位于 Shield 上的按钮来组织。

## 扩展功能

---
此外，WireLess Gate Shield 可以使用 Grove 兼容连接器连接任何 i2c 设备（传感器、显示器等）。

WireLess Gate Shield 设计为与 [以太网扩展板](https://www.seeedstudio.com/depot/W5200-Ethernet-Shield-p-1577.html) 完全兼容 - 因此您可以将这两个扩展板一起使用，创建更高级的无线控制设备（在 SD 卡上记录日志并在网页上显示数据，通过网络管理无线设备）。

## 接口

---

* RF 模块 nRF24L01+ 接口：
  * D11 - MOSI

    * D12 - MISO
  * D13 - SCK

    * D7 - RF24_CE

    * D8 - RF24_CSN

    * D2 - RF24_IRQ

* RF 模块 RFM69HW 接口：
  * D11 - MOSI

    * D12 - MISO
  * D13 - SCK

    * D9 - RF433_NSS

    * A0 - RF433_RESET

    * D3 - RF433_IRQ

* A4 (SDA)、A5 (SCL) - 显示在连接器"I2C"上（连接器中的另外两个引脚 - VCC 和 GND 用于传感器供电）
* A4 (SDA)、A5 (SCL) - 并行用于 RTC DS1307
* A1 - 按钮
* D6 - 自定义 LED（LED3）

## WireLess Gate Shield 特性

---

### 无线模块

无线模块 RFM69HW 和 nRF24l01+ 都连接到硬件 SPI 总线。

特定无线模块的选择是通过在相应的片选引脚上建立低电平来实现的：

* CSN (D8) 用于模块 nRF24l01+
* NSS (D9) 用于模块 RFM69HW

_'警告'，'如果您已安装但软件未使用 RFM69HW，请确保将此模块的 NSS 引脚设置为高电平状态（否则它会干扰 nRF24l01+ 和以太网扩展板的正常工作）。_

### 无线模块的自动显示

无线模块的 LED 指示实现如下：

* LED1 "RF24" 的 LED 阴极连接到模块 nRF24l01+ 的引脚 CSN (D8)，LED 的阳极（通过限流电阻）连接到 SPI 总线的引脚 SCK (D13)
* LED2 "RF433" 的 LED 阴极连接到模块 RFM69HW 的引脚 NSS (D9)，LED 的阳极（通过限流电阻）连接到 SPI 总线的引脚 SCK (D13)

当无线电模块不活动时 - 在相应的片选引脚（CSN 和 NSS）上存在高电平，在引脚 SCK 上出现时钟不会导致 LED 点亮。
如果 MK 与任何无线模块"通信"，要选择它，在相应的引脚（CSN 和 NSS）上设置低电平，同时在引脚 SCK 上的时序脉冲会"点亮"相应的 LED。

因此，用户无需在 MC 上安排任何额外的编程工作来指示模块的运行。

### 特性

如有必要，可以用普通输出替换 SMD-LED（例如将完成的设备嵌入到带显示的精美外壳中）：

* 电路板靠近相应 LED 设备的位置有座位，您可以在那里焊接 LED 端子（或相应的电缆）。
* 限流电阻在电路板上（对于 LED 输出，不需要串联电阻）
* 设置 LED 输出时，必须从电路板上移除 SMD-LED

### 通过红外控制的修改

自定义 LED 可以用红外 LED 替换 LED3 引脚，从而进一步扩展 WireLess Gate Shield 的使用（例如，通过任何无线接口或 LAN 发送命令 - 使用红外命令控制设备）。

## 库文件

### 必需的库文件

要使用无线网关扩展板需要以下库文件：

* 与收发器 nRF24L01 + 配合使用 - [RF24](https://github.com/maniacbug/RF24/archive/master.zip)

* 与收发器 RFM69HW 配合使用 - [RFM69](https://github.com/LowPowerLab/RFM69/archive/master.zip)

* 实时时钟 (RTC) - [RTClib](https://github.com/adafruit/RTClib/archive/master.zip)

* 红外接收器 - [IRremote](https://github.com/shirriff/Arduino-IRremote/archive/master.zip)

在使用 RF24 和 LCD 显示屏时还需要额外的库文件：

* SPI

这些库文件的示例只是为了帮助理解它们的工作原理。

### 库文件使用特性

**NRF24l01 +**

nRF24l01 + 模块初始化如下：

```cpp
//RF24 radio(CE,CSN);
RF24 radio(7,8);
```

**RFM69HW**

要使用无线模块 RFM69HW，需要对文件 RFM69.h 进行如下小的修改：

在文件开头找到这一行：

```cpp
#define SPI_CS               SS // SS is the SPI slave select pin, for instance D10 on atmega328
#define RF69_IRQ_PIN          2 // INT0 on AVRs should be connected to DIO0 (ex on Atmega328 it's D2)
```

并将它们替换为：

```cpp
//#define SPI_CS               SS // SS is the SPI slave select pin, for instance D10 on atmega328
//#define RF69_IRQ_PIN          2 // INT0 on AVRs should be connected to DIO0 (ex on Atmega328 it's D2)
#define SPI_CS               9 // SS is the SPI slave select pin, for WireLess Gate Shield - D9
#define RF69_IRQ_PIN          3 // INT1 on AVRs should be connected to DIO0 (ex on Atmega328 it's D3)
```

此外，文件 RFM69.cpp 需要找到这一行：

```cpp
void RFM69::isr0() { selfPointer->interruptHandler(); }
```

并将它们替换为：

```cpp
//void RFM69::isr0() { selfPointer->interruptHandler(); }
void RFM69::isr1() { selfPointer->interruptHandler(); }
```

模块初始化 RFM69HW 如下：

```cpp
  resetRFM69();
  radio.setCS(9); // NSS - D9
  radio.initialize(FREQUENCY,NODEID,NETWORKID);
```

_'注意：'_ 使用 RFM69HW 的工作状态由其寄存器状态决定。对于特定端点所需的更多配置，需要遵循 RFM69.cpp 文件中 RFM69::initialize 函数的规则
为了更好地理解寄存器的用途，请阅读文件 RFM69registers.h（也包含在库中），以及文档 [radio RFM69HW](http://st.devicter.ru/9/1115/243/RFM69HW.pdf)

## 演示

### 带有 WireLess Gate Shield 的主单元代码（与 RTC、IR、RFM69HW、nRF24l01+ 配合使用）

* 向另一个 RFM69HW 发送结构体并接收响应（乒乓模式）。
* 监听 nRF24l01+ 的传入数据，如果是合适的数据包 - 将其输出到监视器
* 通过 IR 接收器接受命令（识别的命令显示在监视器中）并点亮自定义 LED

所有结果都显示在串行监视器中

```cpp
#include <RFM69.h>
#include <SPI.h>
#include "RF24.h"
#include <IRremote.h>
#include <Wire.h>
#include "RTClib.h"

RF24 radio24(7,8);

RTC_DS1307 RTC;

int RECV_PIN = 5;

IRrecv irrecv(RECV_PIN);

decode_results results;

// 创建一个用于传输数值的框架
typedef struct{
    int SensorID;        // 传感器ID
    int CommandTo;       // 命令模块编号...
    int Command;         // 命令
    // 0 - 应答
    // 1 - 获取数值
    // 2 - 设置数值
    int ParamID;         // 参数标识符
    float ParamValue;    // 数值
    boolean Status;      // 状态
    // 0 - 只读 (RO)
    // 1 - 可更改 (RW)
    char Comment[16];    // 注释
}
Message;

Message sensor;

const uint64_t pipes[2] = {
0xF0F0F0F0E1LL, 0xF0F0F0F0D2LL };

volatile boolean waitRF24 = false;

#define NODEID      99
#define NETWORKID   100
#define GATEWAYID   1
#define FREQUENCY   RF69_433MHZ //与您的Moteino版本匹配！(其他选项: RF69_433MHZ, RF69_868MHZ)
#define KEY         "thisIsEncryptKey" //在所有节点上必须是相同的16个字符/字节，不多不少！
#define LED         6
#define SERIAL_BAUD 115200
#define ACK_TIME    30  // 等待确认的毫秒数

#define RFM69_RESET 14  //A0
#define RFM69_NSS 9
#define RFM69_DIO0 3

#define BUTTON 15 // A1

#define MOSI 11
#define MISO 12
#define SCK 13

int TRANSMITPERIOD = 500; //向网关发送数据包的频率（毫秒）
byte sendSize=0;
boolean requestACK = false;
RFM69 radio;

int delta=2000;

unsigned long blinkStop;
unsigned long timeReady;

typedef struct {
    int           nodeId; //存储此节点ID
    unsigned long uptime; //运行时间（毫秒）
    float         temp;   //温度？
}
Payload;
Payload theData;

void setup() {
    Serial.begin(SERIAL_BAUD);

    pinMode(LED, OUTPUT);

    pinMode(RFM69_NSS, OUTPUT);
    pinMode(7, OUTPUT);
    pinMode(8, OUTPUT);
    pinMode(MOSI, OUTPUT);
    pinMode(MISO, INPUT);
    pinMode(SCK, OUTPUT);

    pinMode(RFM69_RESET, OUTPUT);
    pinMode(RFM69_DIO0, INPUT);

    pinMode(BUTTON, INPUT);

    digitalWrite(RFM69_NSS, HIGH);
    digitalWrite(7, HIGH);

    resetRFM69();
    radio.setCS(RFM69_NSS);
    radio.initialize(FREQUENCY,NODEID,NETWORKID);

    //radio.setHighPower(); //仅对RFM69HW取消注释！

    radio.encrypt(KEY);
    char buff[50];
    sprintf(buff, "\n在 %d Mhz 频率下传输...", FREQUENCY==RF69_433MHZ ? 433 : FREQUENCY==RF69_868MHZ ? 868 : 915);
    Serial.println(buff);

    radio24.begin();
    // 可选地，增加重试之间的延迟和重试次数
    radio24.setRetries(15,15);
    radio24.setChannel(119);
    // 默认情况下监听
    radio24.openWritingPipe(pipes[1]);
    radio24.openReadingPipe(1,pipes[0]);
    radio24.startListening();

    delay(20);

    attachInterrupt(0, isr_RF24, FALLING);

    irrecv.enableIRIn();

    Wire.begin();
    RTC.begin();

    if (! RTC.isrunning()) {
        Serial.println("RTC未运行！");
        // 以下行将RTC设置为编译此程序时的日期和时间
        RTC.adjust(DateTime(__DATE__, __TIME__));
    }
}

long lastPeriod = -1;
void loop() {

    //检查是否有接收到的数据包
    if (radio.receiveDone())
    {
        Serial.print('[');
        Serial.print(radio.SENDERID, DEC);
        Serial.print("] ");
        for (byte i = 0; i < radio.DATALEN; i++)
        Serial.print((char)radio.DATA[i]);
        Serial.print("   [RX_RSSI:");
        Serial.print(radio.readRSSI());
        Serial.print("]");

        if (radio.ACK_REQUESTED)
        {
            radio.sendACK();
            Serial.print(" - 已发送ACK");
            delay(10);
        }
        Serial.println();
    }

    int currPeriod = millis()/TRANSMITPERIOD;
    if (currPeriod != lastPeriod)
    {
        //用新值填充结构体
        theData.nodeId = NODEID;
        theData.uptime = millis();
        theData.temp = radio.readTemperature();//91.23; //很热！

        Serial.print("发送结构体 (");
        Serial.print(sizeof(theData));
        Serial.print(" 字节) ... ");
        if (radio.sendWithRetry(GATEWAYID, (const void*)(&theData), sizeof(theData)))
        Serial.print(" 成功！");
        else Serial.print(" 无响应...");
        Serial.println();
        lastPeriod=currPeriod;
    }

    listenRF24();

    if (irrecv.decode(&results)) {
        Serial.println(results.value, HEX);
        irrecv.resume(); // 接收下一个值
        blinkStop=millis()+100;
        digitalWrite(LED, HIGH);
    }

    if (digitalRead(BUTTON)==LOW) {
        blinkStop=millis()+1000;
        digitalWrite(LED, HIGH);
    }

    if (millis()>blinkStop) {
        digitalWrite(LED, LOW);
    }

    if(millis()>timeReady){
        timeReady=millis()+2000;
        DateTime now = RTC.now();

        Serial.print(now.year(), DEC);
        Serial.print('/');
        Serial.print(now.month(), DEC);
        Serial.print('/');
        Serial.print(now.day(), DEC);
        Serial.print(' ');
        Serial.print(now.hour(), DEC);
        Serial.print(':');
        Serial.print(now.minute(), DEC);
        Serial.print(':');
        Serial.print(now.second(), DEC);
        Serial.println();
    }
}

void Blink(byte PIN, int DELAY_MS)
{
    pinMode(PIN, OUTPUT);
    digitalWrite(PIN,HIGH);
    delay(DELAY_MS);
    digitalWrite(PIN,LOW);
}

void resetRFM69(){
    digitalWrite(RFM69_RESET, HIGH);
    delay(1);
    digitalWrite(RFM69_RESET, LOW);
    delay(10);
}

void isr_RF24(){
    waitRF24 = true;
}

void listenRF24() {
    if (waitRF24) {
        waitRF24 = false;
        if ( radio24.available() )
        {
            bool done = false;
            while (!done)
            {
                done = radio24.read( &sensor, sizeof(sensor) );
                if(sensor.Command == 0) {
                    Serial.print(sensor.SensorID);
                    Serial.print("  ");
                    Serial.print(sensor.ParamID);
                    Serial.print("  ");
                    Serial.print(sensor.ParamValue);
                    Serial.print(" ");
                    Serial.println(sensor.Comment);
                }
            }
        }
    }
}
```

### "接收器"代码（测试中使用面包板上的Arduino Nano和RFM69HW模块）

* 采用RFM69HW结构
* 负责接收
* 打印关于RFM69HW模块的附加信息（寄存器等）

```cpp
#include <RFM69.h>
#include <SPI.h>

#define NODEID      1
#define NETWORKID   100
#define FREQUENCY   RF69_433MHZ //匹配您的Moteino版本！（其他选项：RF69_433MHZ, RF69_868MHZ）
#define KEY         "thisIsEncryptKey" //在所有节点上必须是相同的16个字符/字节，不能多也不能少！
#define LED         6
#define SERIAL_BAUD 115200
#define ACK_TIME    30  // 等待确认的毫秒数

#define RFM69_RESET 14

RFM69 radio;
bool promiscuousMode = false; //设置为'true'以嗅探同一网络上的所有数据包

typedef struct {
    int           nodeId; //存储此节点ID
    unsigned long uptime; //运行时间（毫秒）
    float         temp;   //温度？
} Payload;
Payload theData;

void setup() {
    Serial.begin(SERIAL_BAUD);
    pinMode(RFM69_RESET, OUTPUT);
    pinMode(3, INPUT);
    resetRFM69();
    radio.setCS(9);
    //delay(10);
    radio.initialize(FREQUENCY,NODEID,NETWORKID);

    //radio.setHighPower(); //仅对RFM69HW取消注释！

    radio.encrypt(KEY);
    radio.promiscuous(promiscuousMode);
    char buff[50];
    sprintf(buff, "\nListening at %d Mhz...", FREQUENCY==RF69_433MHZ ? 433 : FREQUENCY==RF69_868MHZ ? 868 : 915);
    Serial.println(buff);
}

byte ackCount=0;
void loop() {
    //处理任何串口输入
    if (Serial.available() > 0)
    {
        char input = Serial.read();
        if (input == 'r') //d=转储所有寄存器值
        radio.readAllRegs();
        if (input == 'E') //E=启用加密
        radio.encrypt(KEY);
        if (input == 'e') //e=禁用加密
        radio.encrypt(null);
        if (input == 'p')
        {
            promiscuousMode = !promiscuousMode;
            radio.promiscuous(promiscuousMode);
            Serial.print("Promiscuous mode ");Serial.println(promiscuousMode ? "on" : "off");
        }

        if (input == 'd') //d=转储闪存区域
        {
            Serial.println("Flash content:");
            int counter = 0;

            while(counter<=256){
                //Serial.print(flash.readByte(counter++), HEX);
                Serial.print('.');
            }
            //while(flash.busy());
            Serial.println();
        }
        if (input == 'D')
        {
            Serial.print("Deleting Flash chip content... ");
            //flash.chipErase();
            //while(flash.busy());
            Serial.println("DONE");
        }
        if (input == 'i')
        {
            Serial.print("DeviceID: ");
            //word jedecid = flash.readDeviceId();
            //Serial.println(jedecid, HEX);
        }
    }

    if (radio.receiveDone())
    {
        Serial.print('[');Serial.print(radio.SENDERID, DEC);Serial.print("] ");
        Serial.print(" [RX_RSSI:");Serial.print(radio.readRSSI());Serial.print("]");
        if (promiscuousMode)
        {
            Serial.print("to [");Serial.print(radio.TARGETID, DEC);Serial.print("] ");
        }

        if (radio.DATALEN != sizeof(Payload))
        Serial.print("Invalid payload received, not matching Payload struct!");
        else
        {
            theData = *(Payload*)radio.DATA; //假设radio.DATA实际包含我们的结构体而不是其他内容
            Serial.print(" nodeId=");
            Serial.print(theData.nodeId);
            Serial.print(" uptime=");
            Serial.print(theData.uptime);
            Serial.print(" temp=");
            Serial.print(theData.temp);
        }

        if (radio.ACK_REQUESTED)
        {
            byte theNodeID = radio.SENDERID;
            radio.sendACK();
            Serial.print(" - ACK sent.");

            // 当节点请求ACK时，响应ACK
            // 并发送一个请求ACK的数据包（仅每第3个）
            // 这样在网关端测试TX/RX节点功能
            if (ackCount++%3==0)
            {
                Serial.print(" Pinging node ");
                Serial.print(theNodeID);
                Serial.print(" - ACK...");
                delay(3); //接收后立即发送时需要这个延迟..？
                if (radio.sendWithRetry(theNodeID, "ACK TEST", 8, 0))  // 0 = 仅1次尝试，无重试
                Serial.print("ok!");
                else Serial.print("nothing");
            }
        }
        Serial.println();
        Blink(LED,3);
    }
}

void Blink(byte PIN, int DELAY_MS)
{
    pinMode(PIN, OUTPUT);
    digitalWrite(PIN,HIGH);
    delay(DELAY_MS);
    digitalWrite(PIN,LOW);
}

void resetRFM69(){
    digitalWrite(RFM69_RESET, HIGH);
    delay(1);
    digitalWrite(RFM69_RESET, LOW);
    delay(10);
}
```

## 产品版本

<table cellPadding="5" cellSpacing="0">
  <tbody>
    <tr>
      <td width="150"> <strong>版本</strong> </td>
      <td width="450"> <strong>描述</strong> </td>
      <td width="80"> <strong>发布</strong> </td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> 0.9 </td>
      <td> 原型 </td>
      <td> 05.05.2014 </td>
    </tr>
    <tr style={{fontSize: '90%'}}>
      <td> 1.0 </td>
      <td> 公开版本 </td>
      <td> 05.07.2014 </td>
    </tr>
  </tbody>
</table>

## 应用

* 通用无线网关 RF2.4 GHz (nRF24l01 +)、RF433 MHz (RFM69HW)、红外和局域网（使用以太网扩展板）
* 带时间戳的无线设备命令和数据记录系统（使用以太网扩展板）
* 设计和构建在特定时间管理各种无线命令（例如，"2014年8月23日18:02开灯"或"每天5:00自动浇水"）

## 问题与解答

* Blog WireLess Gate Shield RU

* 通过邮件提问 support@devicter.ru

## 如何购买

本产品可在以下地点购买：

中国（全球发货）

[Elecrow 商店](http://www.elecrow.com/wireless-gate-shield-p-1139.html)

[Seeed 商店](https://www.seeedstudio.com/depot/wireless-gate-shield.html)

俄罗斯

[Devicter 商店](http://devicter.ru/goods/WireLess-Gate-Shield)

## 链接

* [RFM69HW 描述](http://st.devicter.ru/9/1115/243/RFM69HW.pdf)

* [nRF24l01+ 描述](ftp://imall.iteadstudio.com/Modules/IM120606002_nRF24L01_module/DS_nRF24L01.pdf)

* [设备原理图](http://wiki.devicter.ru/images/c/c7/Wl-Scheme.PNG)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您在使用我们产品时能够拥有尽可能顺畅的体验。我们提供多种沟通渠道，以迎合不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>