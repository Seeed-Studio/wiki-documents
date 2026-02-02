---
description: Seeed Studio XIAO ESP32C3 入门指南
title: Seeed Studio XIAO ESP32C3 入门指南
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO_ESP32C3_Getting_Started
sku: 113991054,102010633,101991467
type: gettingstarted
last_update:
  date: 08/14/2024
  author: Spencer
---

# Seeed Studio XIAO ESP32C3 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto', "border-radius": '12.8px'}}/></div>
<br></br>

## 简介

**Seeed Studio XIAO ESP32C3** 是一款基于 Espressif **ESP32-C3** WiFi/蓝牙双模芯片的物联网迷你开发板，搭载 **32 位 RISC-V CPU**，凭借其高效架构提供强大的计算性能。它具有出色的射频性能，支持 **IEEE 802.11 b/g/n WiFi** 和 **蓝牙 5 (BLE)** 协议。该开发板配备外置天线，可增强无线应用的信号强度。它还具有**小巧精致的外形**和**单面表贴设计**。配备丰富的接口，拥有 **11 个数字 I/O** 引脚可用作 **PWM 引脚**，以及 **4 个模拟 I/O** 引脚可用作 **ADC 引脚**。支持四种串行接口，如 **UART、I2C 和 SPI**。板上还有一个小型**复位按钮**和一个**引导模式按钮**。XIAO ESP32C3 完全兼容 [Grove Shield for Seeeduino XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) 和 [Seeeduino XIAO Expansion board](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO-Expansion-Board)，但对于 Seeeduino XIAO 扩展板，板上的 SWD 弹簧触点将不兼容。

基于上述突出特性，XIAO ESP32C3 定位为**高性能、低功耗、高性价比的物联网迷你开发板**，适用于**低功耗物联网应用和无线可穿戴应用**。

本 wiki 将向您展示如何快速开始使用 XIAO ESP32C3！

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong></a>
</div>

### 规格参数

<table>
    <thead>
        <tr>
            <th>项目</th>
            <th>Seeed Studio XIAO ESP32C3</th>
            <th>Seeeduino XIAO</th>
            <th>Seeed XIAO RP2040</th>
            <th>Seeed XIAO nRF52840</th>
            <th>Seeed XIAO nRF52840 Sense</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>处理器</th>
            <td>ESP32-C3 32-bit RISC-V @160MHz</td>
            <td>SAMD21 M0+@48MHz</td>
            <td>RP2040 Dual-core M0+@133Mhz</td>
            <td>nRF52840 M4F@64MHz</td>
            <td>nRF52840 M4F@64MHz</td>
        </tr>
        <tr>
            <th>无线连接</th>
            <td>WiFi and Bluetooth 5 (BLE)</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>Bluetooth 5.0/BLE/NFC</td>
            <td>Bluetooth 5.0/BLE/NFC</td>
        </tr>
        <tr>
            <th>内存</th>
            <td>400KB SRAM, 4MB onboard Flash</td>
            <td>32KB SRAM 256KB FLASH</td>
            <td>264KB SRAM 2MB onboard Flash</td>
            <td>256KB RAM, 1MB Flash 2MB onboard Flash</td>
            <td>256KB RAM,1MB Flash 2MB onboard Flash</td>
        </tr>
        <tr>
            <th>内置传感器</th>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>6 DOF IMU (LSM6DS3TR-C), PDM Microphone</td>
        </tr>
        <tr>
            <th>接口</th>
            <td>I2C/UART/SPI</td>
            <td>I2C/UART/SPI</td>
            <td>I2C/UART/SPI</td>
            <td>I2C/UART/SPI</td>
            <td>I2C/UART/SPI</td>
        </tr>
        <tr>
            <th>PWM/模拟引脚</th>
            <td>11/4</td>
            <td>11/11</td>
            <td>11/4</td>
            <td>11/6</td>
            <td>11/6</td>
        </tr>
        <tr>
            <th>板载按钮</th>
            <td>Reset/ Boot Button</td>
            <td>N/A</td>
            <td>Reset/ Boot Button</td>
            <td>Reset Button</td>
            <td>Reset Button</td>
        </tr>
        <tr>
            <th>板载 LED</th>
            <td>Charge LED</td>
            <td>N/A</td>
            <td>Full-color RGB/ 3-in-one LED</td>
            <td>3-in-one LED/ Charge LED</td>
            <td>3-in-one LED/ Charge LED</td>
        </tr>
        <tr>
            <th>电池充电芯片</th>
            <td>ETA4054S2F</td>
            <td>N/A</td>
            <td>N/A</td>
            <td>BQ25101</td>
            <td>BQ25101</td>
        </tr>
        <tr>
            <th>编程语言</th>
            <td>Arduino/ MicroPython</td>
            <td>Arduino/ CircuitPython</td>
            <td colspan="3" align="center">Arduino/ MicroPython/ CircuitPython</td>
        </tr>
    </tbody>
</table>

### 特性

- **强大的 CPU：** ESP32-C3，32 位 RISC-V 单核处理器，工作频率高达 160 MHz
- **完整的 Wi-Fi 子系统：** 符合 IEEE 802.11b/g/n 协议，支持 Station 模式、SoftAP 模式、SoftAP + Station 模式和混杂模式
- **蓝牙 LE 子系统：** 支持蓝牙 5 和蓝牙 mesh 功能
- **超低功耗：** 深度睡眠功耗约 43μA
- **更好的射频性能：** 包含外置射频天线
- **电池充电芯片：** 支持锂电池充放电管理
- **丰富的片上资源：** 400KB SRAM 和 4MB 板载闪存
- **超小尺寸：** 拇指大小（21x17.8mm）XIAO 系列经典外形，适用于可穿戴设备和小型项目
- **可靠的安全功能：** 支持 AES-128/256、Hash、RSA、HMAC、数字签名和安全启动的加密硬件加速器
- **丰富的接口：** 1xI2C、1xSPI、2xUART、11xGPIO(PWM)、4xADC、1xJTAG 焊盘接口
- 单面元件，表贴设计

## 硬件概述

> *A3(GP105) - 使用 ADC2，可能由于错误采样信号而无法正常工作。为了可靠的模拟读取，请使用 ADC1(A0/A1/A2)。请参考 ESP32-C3 数据手册。

<table align="center">
 <tr>
     <th>XIAO ESP32C3 正面示意图</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/front-label-3.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32C3 背面示意图</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/back-label-6.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32C3 引脚列表</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png" style={{width:1000, height:'auto'}}/></div></td>
        <!--
        Image Description: This image is the official pinout diagram of the Seeed Studio XIAO ESP32-C3 development board.
        The diagram shows:
        - The top view of the XIAO ESP32-C3 board.
        - GPIO pin mappings, digital/analog labels, power pins, and function-specific roles (I2C, UART, SPI).
        - Color-coded labels for each pin type.
        Pin layout from left to right (as seen in the image):
        === LEFT SIDE PINS (top to bottom) ===
        - GPIO2    | A0  | D0   → Analog-capable (ADC1)
        - GPIO3    | A1  | D1   → Analog-capable (ADC1)
        - GPIO4    | A2  | D2   → Analog-capable (ADC1)
        - GPIO5    | A3 (crossed out) | D3 → Analog-capable via ADC2 (not recommended)
        - GPIO6    | SDA | D4   → I2C data line
        - GPIO7    | SCL | D5   → I2C clock line
        - GPIO21   | TX  | D6   → UART TX (Transmit)
        === RIGHT SIDE PINS (top to bottom) ===
        - 5V       → Power input/output
        - GND      → Ground
        - 3V3      → 3.3V power output
        - D10      | MOSI | GPIO10 → SPI MOSI (not analog-capable)
        - D9       | MISO | GPIO9  → SPI MISO (not analog-capable)
        - D8       | SCK  | GPIO8  → SPI clock (not analog-capable)
        - D7       | RX   | GPIO20 → UART RX (Receive)
        === Pin Function Color Legend (as shown in image) ===
        - Blue: Digital pin labels (D0–D10)
        - Pink: Analog pin labels (A0–A2); A3 is crossed out due to ADC2 instability
        - Green: GPIO number
        - Teal: I2C function (SDA, SCL)
        - Gray: UART function (TX, RX)
        - Purple: SPI function (MOSI, MISO, SCK)
        - Black: GND
        - Red: Power pins (5V, 3V3)
        === Footnote in Image ===
        "A3(GPIO5) - Uses ADC2, which may become inoperative due to false sampling signals. 
        For reliable analog reads, use ADC1 instead. Refer to the ESP32-C3 datasheet."
        === Notes ===
        - Only A0, A1, and A2 are officially supported analog pins using ADC1.
        - A3 (GPIO5) is crossed out and discouraged due to ADC2 reliability issues.
        - GPIO0, GPIO1 are not shown as analog pins in this image, though technically ADC1-capable.
        - GPIOs 8–10, 20–21 are not usable for analog input.
        - This layout helps developers identify safe and recommended pin functions when designing circuits or writing firmware.
        End of XIAO ESP32-C3 pinout description.
        -->
 </tr>
</table>

 ## **引脚映射**
| XIAO 引脚      | 功能      | 芯片引脚  | 备用功能                            | 描述                |
| :-------------: | :-------: | :-------: | :---------------------------------: | :-----------------: |
| 5V              | VBUS      |           |                                     | 电源输入/输出       |
| GND             |           |           |                                     |                      |
| 3V3             | 3V3_OUT   |           |                                     | 电源输出            |
| D0              | Analog    | GPIO2     | ADC1_CH2,                           | GPIO, ADC            |
| D1              | Analog    | GPIO3     | ADC1_CH3                            | GPIO, ADC            |
| D2              | Analog    | GPIO4     | ADC1_CH4, FSPIHD, MTMS              | GPIO, ADC            |
| D3              | Analog    | GPIO5     | ADC2_CH0, FSPIWP, MTDI              | GPIO, ADC            |
| D4              | SDA       | GPIO6     | FSPICLK, MTCK                       | GPIO, I2C 数据      |
| D5              | SCL       | GPIO7     | FSPID, MTDO                         | GPIO, I2C 时钟      |
| D6              | TX        | GPIO21    | U0TXD                               | GPIO, UART 发送     |
| D7              | RX        | GPIO20    | U0RXD                               | GPIO, UART 接收     |
| D8              | SCK       | GPIO8     |                                     | GPIO, SPI 时钟      |
| D9              | MISO      | GPIO9     |                                     | GPIO, SPI 数据      |
| D10             | MOSI      | GPIO10    | FSPICS0                             | GPIO, SPI 数据      |
| MTDO            |           | GPIO7     |                             |            JTAG              |
| MTDI            |           | GPIO5     |                        |        JTAG, ADC                  |
| MTCK            |           | GPIO6     |                           |        JTAG, ADC               |
| MTMS            |           | GPIO4     |                            |               JTAG, ADC       |
| Reset           |           | CHIP_EN   |                                     | EN                   |
| Boot            |           | GPIO9     |                                     | 进入引导模式        |
| U.FL-R-SMT1     |           | LNA_IN    |                                     | UFL 天线            |
| Light           |           | VCC_3V3   |                                     | CHG-LED              |
### 电源引脚

- 5V - 这是来自 USB 端口的 5V 输出。您也可以将其用作电压输入，但必须在外部电源和此引脚之间使用某种二极管（肖特基、信号、功率），阳极连接电池，阴极连接 5V 引脚。
- 3V3 - 这是板载稳压器的稳压输出。您可以获得 700mA 电流
- GND - 电源/数据/信号地

### 引导引脚

根据 ESP32C3 的芯片手册，芯片中的 **GPIO2**、**GPIO8** 和 **GPIO9** 是引导引脚，这些引脚的高低电平配置可能会让芯片进入不同的启动模式，在使用这些引脚时请注意这一点，否则可能会导致您的 XIAO 无法上传或执行程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/20.png" style={{width:800, height:'auto'}}/></div>

## 入门指南

首先，我们将把 XIAO ESP32C3 连接到计算机，将 LED 连接到开发板，并从 Arduino IDE 上传一个简单的代码，通过闪烁连接的 LED 来检查开发板是否正常工作。

### 硬件准备

您需要准备以下物品：

- 1 x [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html)
- 1 x 计算机
- 1 x USB Type-C 数据线

:::tip

某些 USB 数据线只能供电而无法传输数据。如果您没有 USB 数据线或不知道您的 USB 数据线是否可以传输数据，您可以查看 [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。

:::

- **步骤 1.** 通过 USB Type-C 数据线将 XIAO ESP32C3 连接到您的计算机。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" style={{width:120, height:'auto'}}/></div>

- **步骤 2.** 按如下方式将 LED 连接到 D10 引脚

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png" style={{width:500, height:'auto'}}/></div>

**注意：** 确保串联连接一个电阻（约 150Ω）来限制通过 LED 的电流，防止过大电流烧坏 LED

### 软件准备

- **步骤 1.** 根据您的操作系统下载并安装最新版本的 Arduino IDE

<p style={{textAlign:'center'}}><a href="https://www.arduino.cc/en/software" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></p>

- **步骤 2.** 启动 Arduino 应用程序

- **步骤 3.** 将 ESP32 开发板包添加到您的 Arduino IDE

导航到 **File > Preferences**，并在 **"Additional Boards Manager URLs"** 中填入以下网址：
*[https://jihulab.com/esp-mirror/espressif/arduino-esp32.git](https://jihulab.com/esp-mirror/espressif/arduino-esp32.git)*

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_board.png" style={{width:550, height:'auto'}}/></div>

导航到 **Tools > Board > Boards Manager...**，在搜索框中输入关键词 "**esp32**"，选择最新版本的 **esp32**，并安装它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" style={{width:550, height:'auto'}}/></div>

- **步骤 4.** 选择您的开发板和端口

**开发板**

导航到 **Tools > Board > ESP32 Arduino** 并选择 "**XIAO_ESP32C3**"。开发板列表比较长，您需要滚动到底部才能找到它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" style={{width:800, height:'auto'}}/></div>

**端口**

导航到 **Tools > Port** 并选择已连接的 XIAO ESP32C3 的串口名称。这通常是 COM3 或更高（**COM1** 和 **COM2** 通常保留给硬件串口）。

### 运行您的第一个闪烁程序

- **步骤 1.** 将以下代码复制到 Arduino IDE

确保您的 `D10` 按照上图所示连接到 LED。

```cpp

// define led according to pin diagram in article
const int led = D10; // there is no LED_BUILTIN available for the XIAO ESP32C3.

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

- **步骤 2.** 点击 **Upload** 按钮将代码上传到开发板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" style={{width:500, height:'auto'}}/></div>

上传完成后，您将看到连接的 LED 以 1 秒的间隔闪烁。这意味着连接成功，现在您可以使用 XIAO ESP32C3 探索更多项目！

## 电池使用

XIAO ESP32C3 能够使用 3.7V 锂电池作为电源输入。您可以参考以下图表了解接线方法。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/battery_connect.png" alt="pir" width="600" height="auto"/></div>

:::caution
焊接时请小心不要短路正负极，以免烧坏电池和设备。
:::

**电池使用说明：**

1. 请使用符合规格的合格电池。
2. 使用电池时，XIAO 可以通过数据线连接到您的计算机设备，请放心，XIAO 内置电路保护芯片，是安全的。
3. XIAO ESP32C3 在电池供电时不会有任何 LED 亮起（除非您编写了特定程序），请不要通过 LED 的状态来判断 XIAO ESP32C3 是否工作，请通过您的程序合理判断。
4. 抱歉，我们目前无法通过软件帮助您检查剩余电池电量（因为没有更多芯片引脚可用），您需要定期给电池充电或使用万用表检查电池电量。

### 检查电池电压

由于 ESP32C3 引脚数量的限制，为了确保 XIAO ESP32C3 具有与其他 XIAO 系列相同数量的 GPIO，工程师没有额外的引脚分配给电池进行电压测量。

但如果您希望使用单独的引脚进行电池电压测量，您可以参考 [msfujino](https://forum.seeedstudio.com/u/msfujino) 的巧妙操作。我们也要特别感谢 [msfujino](https://forum.seeedstudio.com/u/msfujino) 为 XIAO ESP32C3 分享的所有经验和努力。

基本操作思路是：电池电压通过 200k 电阻分压 1/2 并连接到 A0 端口，这样就可以监控电压。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/3.png" alt="pir" width="300" height="auto"/></div>

数据手册说标称 2500mV 满量程 AD 转换，但芯片之间存在很大差异，实际上是 ±10%。我的芯片是 2700mV 满量程。

幸运的是，每个芯片的校准修正值都写在熔丝区域，通过使用 `analogReadMilliVolts()` 函数，我可以读取修正后的电压值，无需做任何特殊处理。

AD 转换的结果与万用表测量的电压非常吻合，误差约为 5 mV，在实际使用中没有问题。

此外，在通信过程中特别是会出现尖峰状错误，必须平均 16 次才能消除它们。

以下是测试电池电压的程序。

```cpp
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

:::tip
以上内容来自 Seeed Studio 论坛用户 **msfujino**，原帖地址：
[https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535](https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535)。
我们建议您在尝试基于上述方法测量电池电压之前具备良好的动手能力和更好的焊接技能，并谨慎对待电池短路等危险操作。
:::

## 深度睡眠模式和唤醒

XIAO ESP32C3 设计支持深度睡眠模式和唤醒功能。对于这两个功能的使用，我们提供以下使用示例。

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

如果您能够在 XIAO 进入深度睡眠之前及时打开串口监视器，那么您可以看到如下所示的消息输出。这意味着 XIAO 现在处于"睡眠"状态。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/15.png" style={{width:700, height:'auto'}}/></div>

:::tip
进入深度睡眠模式后，XIAO 的端口将消失，您需要唤醒它才能再次看到其端口号！
:::

在程序中，我们使用 **D1** 低电平来唤醒。这意味着我们可以将按钮连接到引脚 D1，当我们按下按钮时 XIAO 将被唤醒。

:::caution
目前 XIAO ESP32C3 仅支持 GPIO 唤醒，支持唤醒的引脚只有 D0~D3。此程序可能无法在其他引脚上工作。
:::

## 故障排除

### Q1：我的 Arduino IDE 在上传代码到开发板时卡住了

您可以首先尝试在开发板连接到 PC 时点击一次 **RESET BUTTON** 来重置开发板。如果这不起作用，请按住 **BOOT BUTTON**，在按住 **BOOT** 按钮的同时将开发板连接到 PC，然后释放它以进入 **bootloader mode**。

### Q2：我的开发板在 Arduino IDE 中没有显示为串行设备

请按照上述 **Q1** 的相同答案操作。

### Q3：我想用出厂固件重新刷写引导加载程序

您可以简单地通过 **USB Type-C** 将开发板连接到 PC，并使用 **ESP RF Test Tool** 用出厂固件重新刷写引导加载程序。

- **步骤 1.** 按住 **BOOT BUTTON** 并将 XIAO ESP32C3 连接到 PC 以进入 **bootloader mode**

- **步骤 2.** 连接后，释放 BOOT BUTTON

- **步骤 3.** 访问[此页面](https://www.espressif.com/en/support/download/other-tools)并下载 **ESP RF Test Tool and Test Guide**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-download.png" style={{width:1000, height:'auto'}}/></div>

- **步骤 4.** 解压 **.zip** 文件，导航到 `ESP_RF_Test_EN\ESP_RF_Test_EN\EspRFTestTool_v2.8_Manual` 并打开 **EspRFTestTool_v2.8_Manual.exe**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-open.png" style={{width:500, height:'auto'}}/></div>

- **步骤 5.** 选择 **ESP32C3** 作为 ChipType，您的 COM 端口，**115200** 作为 BaudRate 并点击 **open**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-2.png" style={{width:500, height:'auto'}}/></div>

您将看到以下输出

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-5.png" style={{width:500, height:'auto'}}/></div>

- **步骤 6.** 选择 **Flash** 并点击 **Select Bin**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-6.jpg" style={{width:500, height:'auto'}}/></div>

- **步骤 7.** 下载 [XIAO ESP32C3 的出厂固件](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin) 并选择它。

- **步骤 8.** 最后点击 **Load Bin**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-8.png" style={{width:500, height:'auto'}}/></div>

刷写成功时您将看到以下输出

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-9.png" style={{width:500, height:'auto'}}/></div>

## MicroPython GitHub 仓库

- [XIAO ESP32C3 MicroPython 仓库](https://github.com/IcingTomato/micropython_xiao_esp32c3)

## 资源

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->

- 📄**[PDF]** [ESP32C3 数据手册](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/esp32-c3_datasheet.pdf)
- 📄 **[PDF]** [Seeed Studio XIAO ESP32C3 原理图](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-SCH.pdf)
- 🗃️ **[ZIP]** [Seeed Studio XIAO ESP32C3 KiCAD 库](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeeduino-XIAO-ESP32C3-KiCAD-Library.zip)
- 🗃️ **[ZIP]** [Seeed Studio XIAO ESP32C3 Eagle 库](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-v1.2_SCH-PCB.zip)
- 🗃️ **[ZIP]** [Seeed Studio XIAO ESP32C3 出厂固件](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin)

- 📄 **[DXF]** [Seeed Studio XIAO ESP32C3 DXF 尺寸图](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-DXF.zip)
- 📄 **[LBR]** [Seeed Studio XIAO ESP32C3 Eagle 封装](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/Seeed-Studio-XIAO-ESP32C3-footprint-eagle.lbr)
- 📄 **[XLSX]** [Seeed Studio XIAO ESP32C3 引脚图表](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-pinout_sheet.xlsx)
- 🔗 **[STEP]** [Seeed Studio XIAO ESP32C3 3D 模型](https://grabcad.com/library/seeed-studio-xiao-esp32-c3-1)
- 🔗 **[GitHub]** [Seeed Studio XIAO ESP32C3 MicroPython 库](https://github.com/IcingTomato/micropython_xiao_esp32c3)
- 🔗 **[链接]** [Platform IO for Seeed Studio XIAO ESP32](https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html)
- 🔗 **[WiKi]** [First Look at the Seeed Studio XIAO ESP32C3](https://sigmdel.ca/michel/ha/xiao/xiao_esp32c3_intro_en.html)  XIAO ESP32C3 的精彩介绍，涵盖关键特性和基本用法。
- 📚 **[电子书]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/) 掌握 XIAO 开发板上 Arduino 和 TinyML 的优秀指南。
- 🔗 **[Kicad]** [Seeed Studio XIAO ESP32C3 封装](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## 课程资源

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- 📚 **[电子书]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

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
