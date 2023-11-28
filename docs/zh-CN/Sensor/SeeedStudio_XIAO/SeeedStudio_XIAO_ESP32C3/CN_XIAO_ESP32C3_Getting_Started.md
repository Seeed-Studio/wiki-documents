---
description: 开始使用Seeed Studio XIAO ESP32C3
title: 开始
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO_ESP32C3_Getting_Started
last_update:
  date: 10/27/2023
  author: Xin Ping Li
---


# Seeed Studio XIAO ESP32C3 开发板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto'}}/></div>

**Seeed Studio XIAO ESP32C3**是一款基于express的物联网迷你开发板 **ESP32-C3** WiFi/蓝牙双模芯片ESP32-C3是一款**32位RISC-V CPU**，包含一个**FPU**(浮点单元)，用于**32位单精度运算**，具有强大的计算能力。 它具有出色的射频性能，支持**IEEE 802.11 b/g/n WiFi**和**蓝牙5 (LE)**协议。该电路板附带一个外部天线，以增加无线应用程序的信号强度。 它还具有小巧精致的外形，并结合了单面表面贴装设计。 它配备了丰富的接口，具有**11个数字I/O**，可作为**PWM引脚**和**4个模拟I/O**，可作为**ADC引脚**。支持**UART、I2C、SPI等4种串行接口。在电路板上还有一个小的复位按钮和一个引导加载模式按钮。XIAO ESP32C3与[Grove Shield for Seeeduino XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)和[Seeeduino XIAO Expansion board](https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board)完全兼容。除Seeeduino XIAO Expansion board外，该板上的SWD弹簧触点不兼容。

基于以上特点，骁骁ESP32C3定位为**高性能、低功耗、高性价比的物联网微型开发板**，适用于**低功耗物联网应用和无线可穿戴应用**。

这个wiki将向您展示如何快速开始使用XIAO ESP32C3!

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html"><strong><span><font color={'FFFFFF'} size={"4"}> 点击购买🖱️</font></span></strong>
    </a>
</div>

## 特性

- 强大的CPU: ESP32-C3, 32位RISC—V单核处理器，工作频率高达160 MHz
- 完整的Wi-Fi子系统:符合IEEE 802.11b/g/n协议，支持Station模式、SoftAP模式、SoftAP + Station模式和混杂模式
- 蓝牙LE子系统:支持蓝牙5和蓝牙mesh功能
- 超低功耗:深度睡眠功耗约为43μA

-更好的射频性能:包括外部射频天线
- 电池充电芯片:支持锂电池充放电管理
- 丰富的片上资源:400KB SRAM, 4MB板载闪存
- 超小尺寸:拇指大小(20x17.5mm) XIAO系列经典外形，适用于可穿戴设备和小型项目
- 可靠的安全特性:支持AES-128/256、Hash、RSA、HMAC、数字签名和安全启动的加密硬件加速器
- 丰富的接口:1xI2C, 1xSPI, 2xUART, 11xGPIO(PWM)， 4xADC, 1xJTAG bonding pad接口
- 单面组件，表面安装设计

## 规范比较
| 名称                 | Seeed Studio XIAO ESP32C3      | Seeeduino XIAO         | Seeed XIAO RP2040                   | Seeed XIAO BLE                         | Seeed XIAO BLE Sense                    |
|-----------------------|--------------------------------|------------------------|-------------------------------------|----------------------------------------|-----------------------------------------|
| 处理器             | ESP32-C3 32位RISC-V @160MHz | SAMD21 M0+@48MHz       | RP2040 Dual-core M0+@133Mhz         | nRF52840 M4F@64MHz                     | nRF52840 M4F@64MHz                      |
|无线连接| WiFi和蓝牙5 (LE)  | N/A                    | N/A                                 | 蓝牙 5.0/BLE/NFC                  | 蓝牙 5.0/BLE/NFC                   |
| 内存               | 400KB SRAM, 4MB板载闪存  | 32KB SRAM 256KB 闪存  | 264KB SRAM 2MB 板载闪存        | 256KB RAM, 1MB 闪存 2MB 板载闪存   | 256KB RAM,1MB 闪存 2MB 板载闪存   |
| 内置的传感器     | N/A                            | N/A                    | N/A                                 | N/A                                    | 6 DOF IMU (LSM6DS3TR-C), PDM 麦克风 |
| 串口          | I2C/UART/SPI               | I2C/UART/SPI           | I2C/UART/SPI                        | I2C/UART/SPI                           | I2C/UART/SPI                            |
| PWM/Analog 引脚       | 11/4                           | 11/11                  | 11/4                                | 11/6                                   | 11/6                                    |
| 开发板的按钮     | 复位/启动按钮             | N/A                    | 复位/启动按钮                  | 复位按钮                          | 复位按钮                           |
| 开发板LED灯       | 充电 LED                            | N/A                    | 全彩RGB/三合一LED   | 合一LED/充电LED               | 3- one LED/充电LED        |
| 电池充电芯片  | 内置的                     | N/A                    | N/A                                 | BQ25101                                | BQ25101                                 |
| 编程语言| Arduino/MicroPython               | Arduino/ CircuitPython | Arduino/ MicroPython/ CircuitPython | Arduino/ MicroPython/ CircuitPython    | Arduino/ MicroPython/ CircuitPython     |

## 硬件概述

### 引脚分配图

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png" style={{width:1000, height:'auto'}}/></div>

### 组件的概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/front-label-3.png" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/back-label-6.png" style={{width:500, height:'auto'}}/></div>

### 电源引脚

- 5V -从USB端口向外5V。你也可以使用它作为电压输入，但你必须有某种二极管之间的外部电源源和这个引脚阳极到电池，阴极到5V引脚。

- 3V3 -这是板载调节器的调节输出。你可以画700mA

- GND -电源/数据/信号地

### Strapping 管脚

根据芯片说明书ESP32C3， **GPIO2**， **GPIO8**和**GPIO9**是捆绑式引脚，这些引脚的高低电平配置可能会让芯片进入不同的启动模式，使用这些引脚时请注意这一点，否则可能会阻止你的XIAO一直上传或执行程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/20.png" style={{width:800, height:'auto'}}/></div>


## 开始

首先，我们将XIAO ESP32C3连接到计算机，将LED连接到板上，并从Arduino IDE中上传一个简单的代码，通过闪烁连接的LED来检查板是否正常工作。

### 硬件设置

你需要准备以下内容:

- 1 x [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html)
- 1 x 电脑
- 1 x USB Type-C 数据线

:::提示

部分USB线只能供电，不能传输数据。如果你没有USB线或不知道你的USB线是否可以传输数据，你可以检查[见USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。
:::

- **步骤 1.** 通过USB Type-C数据线将XIAO ESP32C3连接到计算机。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" style={{width:120, height:'auto'}}/></div>

- **步骤  2.** 将LED连接到D10引脚，连接方式如下所示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png" style={{width:500, height:'auto'}}/></div>

**请注意:** 确保串联一个电阻(大约150Ω)，以限制通过LED的电流，并防止电流过大，可能烧毁LED

### 软件设置

- **步骤  1.** 根据您的操作系统下载并安装最新版本的Arduino IDE

<p style={{textAlign:'center'}}><a href="https://www.arduino.cc/en/software" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></p>

- **步骤 2.** 启动Arduino应用程序

- **步骤 3.** 将ESP32板包添加到您的Arduino IDE中

找到**File > Preferences**，并使用以下URL填充**Additional Boards Manager URLs**:
*<https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json>*

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_board.png" style={{width:550, height:'auto'}}/></div>

找到 **Tools > Board > Boards Manager...**, 在搜索框中输入关键字“**esp32**”，选择**esp32**的最新版本并安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" style={{width:550, height:'auto'}}/></div>

- **步骤 4.** 选择你的开发板和串口

**开发板**

找到**Tools > Board > ESP32 Arduino**并选择“**XIAO_ESP32C3**”。开发板的列表有点长，你需要滚动到底部才能到达它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" style={{width:800, height:'auto'}}/></div>

**串口**

切换到**Tools > Port**，选择连接的XIAO ESP32C3的串口名称。这可能是COM3或更高(**COM1**和**COM2**通常留给硬件串口)。

### 闪烁LED

- **步骤 1.** 将下面的代码复制到Arduino IDE中

```cpp
// define led according to pin diagram
int led = D10;

void setup() {
  // initialize digital pin led as an output
  pinMode(led, OUTPUT);
}

void loop() {
  digitalWrite(led, HIGH);   // turn the LED on 
  delay(1000);               // wait for a second
  digitalWrite(led, LOW);    // turn the LED off
  delay(1000);               // wait for a second
}
```

- **步骤 2.** 点击**Upload**按钮将代码上传到面板
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" style={{width:500, height:'auto'}}/></div>

上传后，你会看到连接的LED闪烁，每次闪烁之间有1秒的延迟。这意味着连接成功，现在您可以使用XIAO ESP32C3探索更多项目!

## 电池的使用

ESP32C3可以使用3.7V锂电池作为电源输入。您可以参考下面的图来了解连接方法
<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/battery_connect.png" alt="pir" width="600" height="auto"/></div>

:::提醒
焊接时，请注意不要短路正负端子，烧坏电池和设备。
:::

**电池使用说明:**

1. 请使用符合规格的合格电池。

2. 使用电池的时候可以通过数据线连接到你的电脑设备上，放心，XIAO有内置的电路保护芯片，很安全。

3. 当电池供电时，XIAO ESP32C3不会有任何LED亮起(除非您编写了特定的程序)，请不要根据LED的状态来判断XIAO ESP32C3是否工作，请根据您的程序来合理地判断。

4. 抱歉，我们目前没有办法通过软件帮助您查看剩余电量(因为没有更多可用的芯片引脚)，您需要定期给电池充电或使用万用表查看电量。

### 检查电池电压

由于ESP32C3引脚数量的限制，工程师没有额外的引脚分配给电池进行电压测量，以确保XIAO ESP32C3具有与其他XIAO 系列相同的GPIOs数量。

但如果你更喜欢使用单独的引脚进行电池电压测量，你可以参考[msfujino](https://forum.seeedstudio.com/u/msfujino)的天才操作。我们还要特别感谢[msfujino](https://forum.seeedstudio.com/u/msfujino)为XIAO ESP32C3所分享的所有经验和努力。

基本工作思路是:将电池电压用200k除以1/2，连接到A0端口，以便监测电压。
<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/3.png" alt="pir" width="300" height="auto"/></div>

数据表上说的是2500mV全量程AD转换，但芯片与芯片之间有很大的差异，实际上是±10%。我的芯片是2700mV的全尺寸。

幸运的是，每个芯片的校准校正值都写在保险丝区域，通过使用`alalogReadMilliVolts()`函数，我可以读取校正的电压值，而无需做任何特殊操作
AD转换结果与万用表测得的电压一致，误差在5 mV左右，在实际使用中没有问题。

此外，特别是在通信过程中，会出现类似尖峰的错误，必须平均16次才能消除它们。

以下是测试电池电压的程序。

```c++
void setup() {
  Serial.begin(115200);
  pinMode(A0, INPUT);         // ADC
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt = Vbatt + analogReadMilliVolts(A0); // ADC with correction   
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // attenuation ratio 1/2, mV --> V
  Serial.println(Vbattf, 3);
  delay(1000);
}
```

:::提示
以上内容来自Seeed Studio论坛用户**msfujino**，原发于:
[https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535](https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535).
我们建议您在尝试测量电池电压之前，有良好的动手能力和更好的焊接技能，并小心危险的行为，如使电池短路。
:::

## 深度睡眠模式和唤醒

该XIAO ESP32C3设计支持深度睡眠模式和唤醒功能。对于这两个函数的使用，我们提供以下使用示例。

```cpp
#define BUTTON_PIN_BITMASK 0x200000000 // 2^33 in hex

RTC_DATA_ATTR int bootCount = 0;

/*
Method to print the reason by which ESP32
has been awaken from sleep
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Wakeup caused by ULP program"); break;
    default : Serial.printf("Wakeup was not caused by deep sleep: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000); //Take some time to open up the Serial Monitor

  //Increment boot number and print it every reboot
  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));

  //Print the wakeup reason for ESP32
  print_wakeup_reason();

  esp_deep_sleep_enable_gpio_wakeup(BIT(D1), ESP_GPIO_WAKEUP_GPIO_LOW);

  //Go to sleep now
  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}

void loop(){
  //This is not going to be called
}
```

如果您足够快，可以在XIAO进入深度睡眠之前打开串行监视器，那么您可以看到如下所示的消息输出。这意味着XIAO现在“睡着了”。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/15.png" style={{width:700, height:'auto'}}/></div>

:::提示
进入深度睡眠模式后，XIAO的端口将消失，你需要唤醒它才能再次看到它的端口号!
:::

在程序中，我们使用**D1**低电平来唤醒。这意味着我们可以将一个按钮连接到针D1，当我们按下按钮时，XIAO就会醒来。

:::提醒
目前XIAO ESP32C3只支持GPIO唤醒，支持唤醒的引脚只有D0~D3。这个程序可能无法在其他引脚上工作。
:::

## 常见问题解答

### Q1:我的Arduino IDE在向板上传代码时卡住了

当开发板连接到你的电脑时，你可以首先尝试通过点击**重置按钮**来重置棋盘。如果这不起作用，按住**BOOT按钮**，同时按住**BOOT**按钮，将电路板连接到PC，然后释放它以进入**bootloader模式**。

### Q2: 我的板子在Arduino IDE上没有显示为串行设备

遵循上面**Q1**的答案

### Q3: 我想用工厂固件刷新引导程序

你可以简单地通过**USB Type-C**将电路板连接到PC，并使用**ESP RF测试工具**使用工厂固件刷新引导程序。

- **步骤 1.** 按住**BOOT按钮**并将XIAO ESP32C3连接到PC以进入**bootloader模式**

- **步骤 2.** 连接好后，松开开机按钮
- **步骤 3.** 访问[此页面](https://www.espressif.com/en/support/download/other-tools)并下载**ESP RF测试工具和测试指南**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-download.png" style={{width:1000, height:'auto'}}/></div>

- **步骤  4.** 解压**.zip**，导航到`ESP_RF_Test_EN\ESP_RF_Test_EN\EspRFTestTool_v2.8_Manual`并打开**EspRFTestTool_v2.8_Manual.exe**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-open.png" style={{width:500, height:'auto'}}/></div>

- **步骤  5.** 选择**ESP32C3**作为芯片类型，你的COM端口，**115200**作为波特率，然后点击**open**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-2.png" style={{width:500, height:'auto'}}/></div>

您将看到以下输出

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-5.png" style={{width:500, height:'auto'}}/></div>

- **步骤 6.**选择**Flash**并单击**Select Bin**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-6.jpg" style={{width:500, height:'auto'}}/></div>

- **步骤 7.** 下载[XIAO ESP32C3的工厂固件](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin)并选择

- **步骤  8.** 最后点击**Load Bin**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-8.png" style={{width:500, height:'auto'}}/></div>

当闪烁成功时，您将看到以下输出

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-9.png" style={{width:500, height:'auto'}}/></div>

## MicroPython GitHub 存储库

- [MicroPython](https://github.com/IcingTomato/micropython_xiao_esp32c3)

## 资源

- **[WiKi]**[先看Seeed Studio XIAO ESP32C3](https://sigmdel.ca/michel/ha/xiao/xiao_esp32c3_intro_en.html)

- **[PDF]** [ESP32C3 规格书](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/esp32-c3_datasheet.pdf)

- **[PDF]** [Seeed Studio XIAO ESP32C3 原理图](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)

- **[ZIP]** [Seeed Studio XIAO ESP32C3 KiCAD 库](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-KiCAD-Library.zip)

- **[ZIP]** [Seeed Studio XIAO ESP32C3 Eagle 库](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-v1.2_SCH-PCB.zip)

- **[DXF]** [Seeed Studio XIAO ESP32C3 尺寸图在DXF](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-DXF.zip)

- **[LBR]** [Seeed Studio XIAO ESP32C3 Eagle 足迹](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeed-Studio-XIAO-ESP32C3-footprint-eagle.lbr)

- **[ZIP]** [Seeed Studio XIAO ESP32C3 工厂的固件](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin)

- **[XLSX]** [Seeed Studio XIAO ESP32C3 引脚分配表](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO ESP32C3 3D 模型](https://grabcad.com/library/seeed-studio-xiao-esp32-c3-1)

- **[ZIP]** [Seeed Studio XIAO ESP32C3认证文件](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-Certification.zip)
- **[GitHub]** [Seeed Studio XIAO ESP32C3 MicroPython Library](https://github.com/IcingTomato/micropython_xiao_esp32c3)

- <a href="https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html" target="_blank"><span>Seeed Studio XIAO ESP32平台IO</span></a>

## 技术支持和产品讨论
感谢您选择我们的产品!我们在这里为您提供不同的支持，以确保您使用我们的产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的喜好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
