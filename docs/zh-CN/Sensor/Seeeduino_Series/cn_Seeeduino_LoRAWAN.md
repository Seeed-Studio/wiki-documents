---
description: Seeeduino LoRaWAN
title: Seeeduino LoRaWAN
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino_LoRAWAN
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/cover.png)

Seeeduino LoRaWAN 是一款嵌入了 LoRaWan 协议的 Arduino 开发板，通过它您可以快速入门并体验 LoRa 在物联网领域的优势。基于通信模块 RHF76-052AM，Seeeduino LoRaWAN 兼容 LoRaWAN Class A/C，并支持多种通信频率。

板载的 4 个标准 Grove 连接器使 Seeeduino LoRaWan 能够方便地连接 Seeedstudio 的数百种 Grove 传感器和执行器，因此用户能够更专注于应用本身，而无需担心不同模块之间的兼容性问题。此外，该板还嵌入了集成锂电池管理芯片，允许通过 USB 接口为板子充电。在低功耗模式下，一块充满电的锂电池可以为板子供电数月。

如果您想快速构建物联网应用，Seeeduino LoRaWAN 是您的最佳选择。

<iframe width={800} height={450} src="https://www.youtube.com/embed/4df5kaaKa6I" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

|产品版本|发布日期 | 购买方式|
|-------|-------------|----------|
|Seeeduino LoRaWAN |2016年12月20日|[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html)|
|Seeeduino LoRaWAN W/GPS |2016年12月20日|[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-LoRaWAN-W%2FGPS-p-2781.html)|

## 版本变更

|项目| Seeeduino LoRaWAN W/GPS | Seeeduino LoRaWAN |
|---|---|---|
|主芯片|ATSAMD21|ATSAMD21|
|GPS通信|√|x|
|模块|RHF76-052DM|RHF76-052AM|
|模块发布时间|2018|2018|

:::note
    首次使用时请更新固件。请始终插入3.7V锂电池，以防USB电源供应不足。
:::

:::tip
    Seeeduino LoRaWAN W/GPS 包含GPS模块。
:::

## 特性

* 最小电流（3.7V锂电池）- 2mA
* 最小电流（3.7V锂电池 & 移除PWR LED）- 80 uA

**Arduino/处理器**

* ATSAMD21G18 @ 48MHz，3.3V逻辑/电源
* Arduino兼容（基于Arduino Zero引导程序）
* 嵌入锂电池管理芯片和状态指示LED
* 20个GPIO
* 4个板载 Grove 连接器
* 18个PWM引脚
* 6个模拟输入
* 1个模拟输出（A0）
* 3.3V稳压器，200mA输出
* 复位按钮

**LoRaWAN/RHF76-052**

* WOR模式下1.45uA睡眠电流（模块规格，非板子规格）
* 160dB的高链路预算。-140dBm灵敏度和19dBm输出功率。
* 双频段，434/470MHz和868/915MHz
  * 19dBm@434MHz/470MHz
  * 14dBm@868MHz/915MHz
* 支持LoRaWAN协议，Class A/C
* 超长距离通信
* 超低功耗
* 固件升级
* 小尺寸：23mm X 28mm，33引脚SMT封装

:::warning
    与大多数Arduino和Genuino板不同，Zero运行在3.3V。I/O引脚能够承受的最大电压是3.3V。在任何I/O引脚上施加高于3.3V的电压可能会损坏板子。
:::

## 规格参数

| 项目|数值|
|--------------|-------------------------------------|
|微控制器 |ATSAMD21G18, 32位 ARM Cortex M0+ |
|工作电压 |3.3V|
|数字I/O引脚 |20|
|PWM引脚 |除引脚2和7外的所有引脚|
|UART |2个（原生和编程）|
|模拟输入引脚| 6个，12位ADC通道|
|模拟输出引脚 |1个，10位DAC|
|外部中断 |除引脚4外的所有引脚|
|每个I/O引脚的直流电流 |7 mA|
|闪存 |256 KB|
|SRAM |32 KB|
|EEPROM |无|
|时钟速度 |48 MHz|
|长度 |68 mm|
|宽度 |53 mm|
|重量 |19.6g（不含GPS），19.9g（含GPS）|

## 应用创意

* 物联网
* 智能家居
* 安防
* 智能电网
* 智能农场
* 智能园区

:::tip
    使用Grove模块来扩展您的应用
:::
板载有4个Grove连接器。如果这是您第一次听说Grove，请访问[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)了解更多详情。
简而言之，Grove是数百个标准化传感器，包括传感器、执行器、显示器以及通信模块。

## 硬件概览

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/hw_LoRa.png)

* **1.** Micro USB - 编程和为板子供电
* **2.** Grove连接器
* **3.** JST2.0锂电池输入（3.7V）和充电状态LED
* **4.** DFU按钮 - 固件模式按钮
* **5.** 复位按钮
* **6.** Arduino引脚排列
* **7.** ICSP引脚
* **8.** 固件模式LED
* **9.** 线天线
* **A.** uFL天线
* **B.** RF模块 - RHF76-052AM
* **C.** ARM Cortex M0处理器 - ATSAMD21G18
* **D.** LED指示灯
  * ***RX/TX*** - UART数据传输时闪烁（从/到USB）
  * ***L*** - 连接到D13的LED
  * ***PWR*** - 电源

:::tip
    如果您想使用板载的4个Grove连接器，请使用digitalWrite(38, HIGH)来开启VCC。否则您无法为Grove模块供电。
:::
**引脚映射**

|引脚名称|GPIO编号|外部中断|PWM|模拟输入|模拟输出|功能|
|--------|--------|-----------|---|---------|----------|--------|
|0       |#0      |是        |是|         |          | RX(串口)|
|1       |#1      |是        |是|         |          | TX(串口)|
|2       |#2      |是        |   |         |          |        |
|3       |#3      |是        |是|         |          |        |
|4       |#4      |           |是|         |          |        |
|5       |#5      |是        |是|         |          |        |
|6       |#6      |是        |是|         |          |        |
|7       |#7      |是        |   |         |          |        |
|8       |#8      |是        |是|         |          |        |
|9       |#9      |是        |是|         |          |        |
|10      |#10     |是        |是|         |          |        |
|11      |#11     |是        |是|         |          |        |
|12      |#12     |是        |是|         |          |        |
|13      |#13     |是        |是|         |          |        |
|SDA     |#20     |是        |是|         |          |        |
|SCL     |#21     |是        |是|         |          |        |
|A0      |#A0     |是        |是|是      |是       |        |
|A1      |#A1     |是        |是|是      |          |        |
|A2      |#A2     |是        |是|是      |          |        |
|A3      |#A3     |是        |是|是      |          |        |
|A4      |#A4     |是        |是|是      |          |电池电压|
|A5      |#A5     |是        |是|是      |          |充电状态|

:::note
    所有引脚都可以作为数字输入和输出
:::

## 入门指南

:::note
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino)
:::

首先您需要安装最新的 Arduino IDE，并[将 Seeeduino LoRa 添加到您的 Arduino IDE](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/)。

## 安装驱动程序（适用于 Windows）

第一次插入开发板时，您应该会看到一个名为 Seeeduino LoRaWAN 的 USB COM 设备，需要安装驱动程序。点击下面的按钮下载开发板的驱动程序。

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/driver.png)](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/driver.zip)

为了确保驱动程序安装成功，请打开设备管理器查看是否存在 **Seeeduino LoRaWAN**。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/device_manager.png)

## 1. 闪烁

现在我们可以上传第一个演示程序 - Blink 到 Seeeduino LoRaWAN。

打开您的 Arduino IDE，点击 **File > Examples > 01.Basics > Blink** 打开示例程序，或复制以下代码：

```c
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin 13 as an output.
  pinMode(13, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(13, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);              // wait for a second
  digitalWrite(13, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);              // wait for a second
}
```

然后，

* 点击 **Tools > Board > Seeeduino LoRaWAN**

如果您找不到 Seeeduino LoRaWAN，请查看 [如何将 Seeed 开发板添加到 Arduino IDE](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Boards/)

* 点击 **Tools > Port** 选择正确的端口号。（*不要选择 COM1*）

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/blink1.png)

然后点击 Arduino IDE 左上角的 **Upload** 按钮，几秒钟后代码就会上传成功。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/blink2.png)

如果上传成功，您应该会看到一些红色信息，请观察板载 LED，它正在闪烁。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/blink3.png)

## 2. 电池

您可以通过 3.7V 锂电池为开发板供电。包装中包含一根 JST2.0 线缆，如果您无法获得带有 JST2.0 连接器的电池，请使用它。

:::warning
    确保电池的正负极连接正确，否则开发板可能会损坏。
:::
充电状态引脚和电池正极引脚已连接到 A4 和 A5，这允许您通过编程检测充电状态和测量电池电压。

复制并上传以下代码来检测电池状态。

```cpp
// battey of Seeeduino LoRaWAN

const int pin_battery_status  = A5;
const int pin_battery_voltage = A4;

void setup() {
    SerialUSB.begin(115200);
    pinMode(pin_battery_status, INPUT);
}

void loop() {

    int a = analogRead(pin_battery_voltage);
    float v = a/1023.0*3.3*11.0;        // there's an 1M and 100k resistor divider
    SerialUSB.print(v, 2);
    SerialUSB.print('\t');
    SerialUSB.println(digitalRead(pin_battery_status));

    delay(1000);
}
```

:::note
    充电状态在充电时返回0，充电完成或未插入电池时返回1。
:::

## 3. 发送和接收示例

LoRaWAN模块有一个编写良好的库，对于简单的应用程序，您甚至不需要了解太多关于LoRa协议的知识，因为它复杂且难以理解。
请注意，如果您想要高级应用程序，您仍然需要一些关于LoRa协议的知识。
您不需要下载库，它已经包含在包中。您可以在**文件 > 示例 > LoRaWAN**中打开它。这些示例包括：

* p2p-tx
* p2p-rx
* ABP
* OTAA

您需要2个Seeeduino LoRaWAN来完成此示例，一个用于发送，另一个用于接收。

### 3.1 P2P发送

打开您的Arduino IDE并点击**文件 > 示例 > LoRaWAN > p2p_tx**来打开草图，或者您可以复制下面的代码。
此草图将每3000毫秒广播一个字符串"Hello World!"。

```
// Seduino LoRaWAN - TX example
#include <LoRaWan.h>

void setup(void)
{
    SerialUSB.begin(115200);
    lora.init();
    lora.initP2PMode(433, SF12, BW125, 8, 8, 20);
}

void loop(void)
{
    lora.transferPacketP2PMode("Hello World!");
    SerialUSB.println("Send string.");
    delay(3000);
}
```

### 3.2 P2P 接收

打开你的 Arduino IDE，点击 **File > Examples > LoRaWAN > p2p_rx** 来打开示例代码，或者你可以复制下面的代码。

```
// Seduino LoRaWAN - RX example
#include <LoRaWan.h>

unsigned char buffer[128] = {0, };

void setup(void)
{
    SerialUSB.begin(115200);
    lora.init();
    lora.initP2PMode(433, SF12, BW125, 8, 8, 20);
}

void loop(void)
{
    short length = 0;
    short rssi = 0;

    memset(buffer, 0, 128);
    length = lora.receivePacketP2PMode(buffer, 128,  &rssi, 1);

    if(length)
    {
        SerialUSB.print("Length is: ");
        SerialUSB.println(length);
        SerialUSB.print("RSSI is: ");
        SerialUSB.println(rssi);
        SerialUSB.print("Data is: ");
        for(unsigned char i = 0; i < length; i ++)
        {
            SerialUSB.print("0x");
            SerialUSB.print(buffer[i], HEX);
            SerialUSB.print(" ");
        }
        SerialUSB.println();
    }
}
```

在两个草图都成功上传后，打开接收板的串口监视器，检查是否能获取到如下所示的数据。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/monitor_rx.png)

### 3.3 ABP

* 步骤 1. 请参考 [LoRa/LoRaWAN Gateway Kit](https://wiki.seeedstudio.com/cn/LoRa_LoRaWan_Gateway_Kit/) 首先设置网关。
* 步骤 2. 将 [Grove-Temperature_and_Humidity_Sensor_Pro](https://wiki.seeedstudio.com/cn/Grove-Temperature_and_Humidity_Sensor_Pro/) 连接到底板的 D2 端口。
* 步骤 3. 将底板连接到 Seeeduino Lorawan。
* 步骤 4. 下载 [DHT Library](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/DHT.zip) 并解压到 arduino 库文件夹。
* 步骤 5. 复制以下代码到 arduino IDE 并上传。

```cpp

#include <LoRaWan.h>
#include "DHT.h"

#define DHTPIN            2   
#define DHTTYPE           DHT22
DHT dht(DHTPIN, DHTTYPE);
unsigned char data[2] = {1, 2};
char buffer[256];

void setup(void)
{     
    dht.begin();
    
    SerialUSB.begin(115200);
    //while(!SerialUSB);
    
    lora.init();
    
    memset(buffer, 0, 256);
    lora.getVersion(buffer, 256, 1);
    SerialUSB.print(buffer); 
    
    memset(buffer, 0, 256);
    lora.getId(buffer, 256, 1);
    SerialUSB.print(buffer);
    
    lora.setKey("2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C");
    
    lora.setDeciveMode(LWABP);
    lora.setDataRate(DR0, EU868);
    
    lora.setChannel(0, 867.7);
    lora.setChannel(1, 867.9);
    lora.setChannel(2, 868.8);
    
    lora.setReceiceWindowFirst(0, 867.7);
    lora.setReceiceWindowSecond(869.5, DR3);
    
    lora.setDutyCycle(false);
    lora.setJoinDutyCycle(false);
    
    lora.setPower(14);
}

void loop(void)
{   
    bool result = false;

    delay(2000);
    int h = dht.readHumidity();
    int t = dht.readTemperature();
    
    //result = lora.transferPacket("Hello World!", 10);
    result = lora.transferPacket(data, 2, 10);
    data[0] = h;
    data[1] = t;
    
    if(result)
    {
        short length;
        short rssi;
        
        memset(buffer, 0, 256);
        length = lora.receivePacket(buffer, 256, &rssi);
        
        if(length)
        {
            SerialUSB.print("Length is: ");
            SerialUSB.println(length);
            SerialUSB.print("RSSI is: ");
            SerialUSB.println(rssi);
            SerialUSB.print("Data is: ");
            for(unsigned char i = 0; i < length; i ++)
            {
                SerialUSB.print("0x");
                SerialUSB.print(buffer[i], HEX);
                SerialUSB.print(" ");
            }
            SerialUSB.println();
        }
    }
}

```

* 步骤 6. 对于本地服务器，点击 Application->Seeed（您刚刚添加的应用程序名称）->View application data，您将看到刚刚从 Seeeduino_LoRAWAN 发送的数据。对于 Loriot 服务器，转到 Dashboard -> Applications -> SampleApp ->Device，点击节点设备 EUI 或 DevAddr，您将在这里找到刚刚发送的数据。

### 3.4 OTAA

* 步骤 1. 请参考[用户手册](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/RHF-UM01649-IoT-Discovery-User-Manual-seeed-v2.1.pdf) 第 3.2.3 节来设置网关。
* 步骤 2. 对于 seeeduino Lorawan，请打开您的 Arduino IDE 并点击 **File > Examples > LoRaWAN > OTAA** 并参考代码。

```cpp
#include <LoRaWan.h>


unsigned char data[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0xA,};
char buffer[256];


void setup(void)
{
    SerialUSB.begin(115200);
    while(!SerialUSB);
    
    lora.init();
    
    memset(buffer, 0, 256);
    lora.getVersion(buffer, 256, 1);
    SerialUSB.print(buffer); 
    
    memset(buffer, 0, 256);
    lora.getId(buffer, 256, 1);
    SerialUSB.print(buffer);
    
    lora.setKey("2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C");
    
    lora.setDeciveMode(LWOTAA);
    lora.setDataRate(DR0, EU868);
    
    lora.setChannel(0, 868.1);
    lora.setChannel(1, 868.3);
    lora.setChannel(2, 868.5);
    
    lora.setReceiceWindowFirst(0, 868.1);
    lora.setReceiceWindowSecond(869.5, DR3);
    
    lora.setDutyCycle(false);
    lora.setJoinDutyCycle(false);
    
    lora.setPower(14);
    
    while(!lora.setOTAAJoin(JOIN));
}

void loop(void)
{   
    bool result = false;
    
    result = lora.transferPacket("Hello World!", 10);
    //result = lora.transferPacket(data, 10, 10);
    
    if(result)
    {
        short length;
        short rssi;
        
        memset(buffer, 0, 256);
        length = lora.receivePacket(buffer, 256, &rssi);
        
        if(length)
        {
            SerialUSB.print("Length is: ");
            SerialUSB.println(length);
            SerialUSB.print("RSSI is: ");
            SerialUSB.println(rssi);
            SerialUSB.print("Data is: ");
            for(unsigned char i = 0; i < length; i ++)
            {
                SerialUSB.print("0x");
                SerialUSB.print(buffer[i], HEX);
                SerialUSB.print(" ");
            }
            SerialUSB.println();
        }
    }
}
```

## 4. GPS 数据

:::note
    本章节仅适用于 Seeeduino LoRaWAN W/GPS。
:::

### 4.1 NMEA

* 步骤 1. 将以下代码复制到您的 Seeeduino LoRaWAN W/GPS 中。

```cpp
void setup()
{
    Serial2.begin(9600);
    Serial.begin(115200);
}
 
void loop()
{
    while(Serial2.available())
    {
        Serial.write(Serial2.read());
    }
    while(Serial.available())
    {
        Serial2.write(Serial.read());
    }
}
```

* 步骤 2. 打开串口监视器，然后你将从GPS获取数据。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/gps.png)

### 4.2 纬度和经度

感谢 **Todd Krein** 在Github上分享的示例。请下载 [TinyGPS++ 库](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/TinyGPSPlus-master.zip)，然后将下面的代码复制到Seeeduino Lorawan中。

```cpp
#define USE_GPS 1
 
#include "LoRaWan.h"
 
#ifdef USE_GPS
#include "TinyGPS++.h"
TinyGPSPlus gps;
#endif
 
 
void setup(void)
{
 
    char c;
#ifdef USE_GPS
    bool locked;
#endif
 
    SerialUSB.begin(115200);
    while(!SerialUSB);
 
    lora.init();
    lora.setDeviceReset();
 
#ifdef USE_GPS
    Serial2.begin(9600);     // 打开GPS
    locked = false;
 
    // 为了安全起见，让我们现在就获取GPS定位，在开始运行LoRa部分的任意延迟之前
 
    while (!gps.location.isValid()) {
      while (Serial2.available() > 0) {
        if (gps.encode(c=Serial2.read())) {
          displayInfo();
          if (gps.location.isValid()) {
//            locked = true;
            break;
          }
        }
//        SerialUSB.print(c);
      }
 
//      if (locked)
//        break;
 
      if (millis() > 15000 && gps.charsProcessed() < 10)
      {
        SerialUSB.println(F("未检测到GPS：请检查接线。"));
        SerialUSB.println(gps.charsProcessed());
        while(true);
      } 
      else if (millis() > 20000) {
        SerialUSB.println(F("无法在分配的时间内获得定位。"));     
        break;
      }
    }
#endif
}
 
 
void loop(void)
{
//displayInfo();
//delay(1000);
}
 
void displayInfo()
{
  SerialUSB.print(F("位置: ")); 
  if (gps.location.isValid())
  {
    SerialUSB.print(gps.location.lat(), 6);
    SerialUSB.print(F(","));
    SerialUSB.print(gps.location.lng(), 6);
  }
  else
  {
    SerialUSB.print(F("无效"));
  }
 
  SerialUSB.print(F("  日期/时间: "));
  if (gps.date.isValid())
  {
    SerialUSB.print(gps.date.month());
    SerialUSB.print(F("/"));
    SerialUSB.print(gps.date.day());
    SerialUSB.print(F("/"));
    SerialUSB.print(gps.date.year());
  }
  else
  {
    SerialUSB.print(F("无效"));
  }
 
  SerialUSB.print(F(" "));
  if (gps.time.isValid())
  {
    if (gps.time.hour() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.hour());
    SerialUSB.print(F(":"));
    if (gps.time.minute() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.minute());
    SerialUSB.print(F(":"));
    if (gps.time.second() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.second());
    SerialUSB.print(F("."));
    if (gps.time.centisecond() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.centisecond());
  }
  else
  {
    SerialUSB.print(F("无效"));
  }
 
  SerialUSB.println();
}

```

## 5. 低功耗

在我们的测试中，最小电流为80uA（适用于Seeeduino LoRaWAN）。
请按照以下步骤操作。

1. 移除PWR LED（如果不移除此LED，电流将>2mA）
2. 移除CHG LED
3. 将以下代码上传到您的开发板。

```
#include <LoRaWan.h>
#include <EnergySaving.h>

EnergySaving nrgSave;

void blink()
{
    for(unsigned char i = 0; i < 5; i ++)
    {
        digitalWrite(13,HIGH);
        delay(500);
        digitalWrite(13,LOW);
        delay(500);
    }
}

void setup()
{
    for(unsigned char i = 0; i < 26; i ++)      // 重要，将所有引脚设置为HIGH以节省功耗
    {
        pinMode(i, OUTPUT);
        digitalWrite(i, HIGH);
    }

    lora.init();
    blink();    
    lora.setDeviceLowPower();
    blink();    
    nrgSave.begin(WAKE_EXT_INTERRUPT, 7, dummy);    // D7上的按钮用于唤醒开发板
    nrgSave.standby();
}

void loop()
{
    blink();
    nrgSave.standby();
}

void dummy(void)
{
    // 做一些事情
}

// END File
```

## 6. 更新固件

如果您想检查板子的版本，请将以下代码上传到您的板子。

```cpp
void setup()
{
    Serial1.begin(9600);
    SerialUSB.begin(115200);
}

void loop()
{
    while(Serial1.available())
    {
        SerialUSB.write(Serial1.read());
    }
    while(SerialUSB.available())
    {
        Serial1.write(SerialUSB.read());
    }
}
```

打开您的串口监视器并输入

```
AT+VER
```

然后您将获得您的开发板版本。

:::note
    如果您的 Seeeduino LoRawan 开发板是 AM 版本，它无法支持 V3 固件，您需要 DM 版本来将固件更新到 3.0 以上。因为 V3 固件太大，AM 闪存太小。
:::  

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/VER.png)

固件版本是 2.0.10，如果您想更新固件，需要按照以下几个步骤操作。

* 步骤 1. 复制并上传以下代码到您的开发板。

```c
// Update firmware to RHF76-052AM
#include <Arduino.h>

void setup()
{
    SerialDBG.begin(115200);
    SerialUSB.begin(115200);
}

void loop()
{
    while(SerialDBG.available())
    {
        SerialUSB.write(SerialDBG.read());
    }
    while(SerialUSB.available())
    {
        SerialDBG.write(SerialUSB.read());
    }
}

```

* 步骤 2. 从 USB 中移除开发板并重新连接，然后按下 DFU 按钮，当固件模式 LED 闪烁后，您可以进行下一步。

* 步骤 3. 点击下载最新固件，这是一个 .bin 文件。

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/firmware_bin.png)](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.0.10-20160923.ebin%202.bin)

* 步骤 4. 打开 PuTTy 并连接到开发板

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/firmware_1.png)

:::tip
    您可以在这里找到最新的 PuTTy：[http://www.extraputty.com/download.php](http://www.extraputty.com/download.php)
:::

* 步骤 5. 成功将您的开发板连接到 PuTTy 后，您会发现字符 'C' 在监视器上持续打印。
点击 **Files Transfer > Ymodem > Send**，并选择我们在步骤4中下载的 .bin 文件。

* 步骤 6. 然后更新开始。
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/firmware_4.png)

## 常见问题

**Q1: Seeeduino Lorawan 停止被 PC 识别**

**A1:** 快速双击复位按钮来恢复开发板。

**Q2：Seeeduino Lorawan 没有 Examples > LoRaWAN**

**A2:** 点击[这里](https://github.com/SeeedDocument/seeeduino_LoraWan)获取。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/202001246 Seeeduino LoRaWAN Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* [Eagle 原理图](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/202001246 Seeeduino LoRaWAN Eagle.zip)
* [Sketchup 文件(3D)](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/Seeeduino LoRaWAN.skp)
* [RHF 76-052 CE 认证](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/ce-rhf76-052.pdf)
* [RHF76-052 固件 V2.0.10](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.0.10-20160923.ebin 2.bin)
* [RHF76-052 固件 V2.1.16AM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.1.16-20171203.ebin.bin)
* [RHF76-052 固件 V2.1.19AM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.1.19-20180525.ebin.bin)
* [RHF76-052 固件 V3.3.1DM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052dm-v3.3.1-20180707.ebin(1).bin)
* [RHF76-052 固件 V3.5.13DM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052dm-v3.5.13-20190916.ebin.bin)
* [RHF76-052AM/DM 数据手册](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf-ds01500_rhf76-052_datasheet_v03.pdf)
* [GPS 芯片 L70B-M39 数据手册](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/L70B-M39.pdf)
* [Azure IoT Edge LoRaWAN](https://github.com/Azure/iotedge-lorawan-starterkit/)
* [[RHF-PS01709]LoRaWAN Class ABC AT 命令规范](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/AT-Command-Specificationv1.2.pdf)

## 项目

**LoRa IoTea**：应用于茶园的自动信息收集系统。它是智能农业信息收集的一部分。

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed" width={350} />

## 技术支持与产品讨论

   <br />
 感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>