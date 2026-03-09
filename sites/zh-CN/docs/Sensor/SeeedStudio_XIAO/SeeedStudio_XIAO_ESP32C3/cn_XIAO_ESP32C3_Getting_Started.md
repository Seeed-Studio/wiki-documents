---
description: Seeed Studio XIAO ESP32C3 入门指南
title: Seeed Studio XIAO ESP32C3 入门指南
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO_ESP32C3_Getting_Started
sku: 113991054,102010633,101991467
type: gettingstarted
last_update:
  date: 08/14/2024
  author: Spencer
createdAt: '2023-11-08'
updatedAt: '2026-03-05'
url: https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started/
---

# Seeed Studio XIAO ESP32C3 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:300, height:'auto', "border-radius": '12.8px'}}/></div>
<br></br>

## 介绍

**Seeed Studio XIAO ESP32C3** 是一款基于乐鑫 **ESP32-C3** WiFi/Bluetooth 双模芯片的物联网迷你开发板，采用 **32 位 RISC-V CPU**，凭借高效架构提供强大的计算性能。它具备出色的射频性能，支持 **IEEE 802.11 b/g/n WiFi** 和 **Bluetooth 5 (BLE)** 协议。该开发板配备了外置天线，可增强无线应用的信号强度。同时，它具有**小巧精致的外形尺寸**以及**单面贴片封装设计**。板载丰富的接口，拥有 **11 路数字 I/O**（可用作 **PWM 引脚**）以及 **4 路模拟 I/O**（可用作 **ADC 引脚**）。它支持 **UART、I2C 和 SPI** 等多种串行接口。板上还集成了一个小型 **复位按钮** 和一个 **Bootloader 模式按钮**。XIAO ESP32C3 与 [Grove Shield for Seeeduino XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) 和 [Seeeduino XIAO Expansion board](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO-Expansion-Board) 完全兼容，但对于 Seeeduino XIAO Expansion board，板上的 SWD 弹簧触点将不兼容。

基于以上特性，XIAO ESP32C3 被定位为一款**高性能、低功耗、具性价比的物联网迷你开发板**，适用于**低功耗物联网应用和无线可穿戴应用**。

本 Wiki 将向你展示如何快速上手 XIAO ESP32C3！

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong></a>
</div>

### 规格参数
<table>
  <tr>
    <th>参数</th>
    <th>描述</th>
  </tr>
  <tr>
    <td>处理器</td>
    <td>ESP32-C3 SoC<br/>RISC-V 单核 32 位芯片处理器，采用四级流水线，最高运行频率可达 160 MHz</td>
  </tr>
  <tr>
    <td>无线</td>
    <td>完整的 2.4GHz Wi-Fi 子系统<br/>蓝牙低功耗 5.0/ 蓝牙 Mesh</td>
  </tr>
  <tr>
    <td>片上存储</td>
    <td>400KB SRAM &amp; 4MB Flash</td>
  </tr>
  <tr>
    <td>接口</td>
    <td>1x UART<br/>1x IIC<br/>1x SPI<br/>11x GPIO(PWM)<br/>4x ADC<br/>1x Reset button<br/>1x Boot button</td>
  </tr>
  <tr>
    <td>尺寸</td>
    <td>21 x 17.8mm</td>
  </tr>
  <tr>
    <td>功耗（典型）</td>
    <td>最大 3.3V 输出电流：500mA<br/>测试条件：BAT 引脚输入 @ 3.8V<br/>供电能力：3A<br/>充电电流：380mA（快速）/ 40mA（涓流）<br/>输入电压 (VIN)：5V<br/>输入电压 (BAT)：3.7V</td>
  </tr>
  <tr>
    <td>深度睡眠功耗</td>
    <td>深度睡眠模式：44 μA</td>
  </tr>
  <tr>
    <td>Wi-Fi 使能时功耗</td>
    <td>Active 模式：75 mA<br/>Modem-sleep 模式：25 mA<br/>Light-sleep 模式：4 mA</td>
  </tr>
  <tr>
    <td>BLE 使能时功耗</td>
    <td>Modem-sleep 模式：27 mA<br/>Light-sleep 模式：10 mA</td>
  </tr>
  <tr>
    <td>工作温度</td>
    <td>-40°C ~ 85°C</td>
  </tr>
</table>
### 特性

- **强大的 CPU：** ESP32-C3，32 位 RISC-V 单核处理器，最高运行频率可达 160 MHz
- **完整的 Wi-Fi 子系统：** 符合 IEEE 802.11b/g/n 协议，支持 Station 模式、SoftAP 模式、SoftAP + Station 模式以及混杂模式
- **Bluetooth LE 子系统：** 支持 Bluetooth 5 和 Bluetooth mesh 功能
- **超低功耗：** 深度睡眠功耗约为 43μA
- **更佳的射频性能：** 配备外置射频天线
- **电池充电芯片：** 支持锂电池充放电管理
- **丰富的片上资源：** 400KB SRAM 和 4MB 板载 Flash 存储
- **超小尺寸：** 小如拇指（21x17.8mm），XIAO 系列经典外形，适用于可穿戴设备和小型项目
- **可靠的安全特性：** 支持 AES-128/256、Hash、RSA、HMAC、数字签名和安全启动的加密硬件加速器
- **丰富的接口：** 1xI2C、1xSPI、2xUART、11xGPIO(PWM)、4xADC、1xJTAG 焊盘接口
- 单面元件、表面贴装设计

## 硬件概览

> *A3(GP105) - 使用 ADC2，可能会因错误采样信号而失效。为了获得可靠的模拟读取，请改用 ADC1(A0/A1/A2)。请参考 ESP32-C3 数据手册。

<table align="center">
 <tr>
     <th>XIAO ESP32C3 正面标注示意图</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/front-label-3.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32C3 背面标注示意图</th>
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
| XIAO 引脚      | 功能      | 芯片引脚  | 复用功能                             | 描述                 |
| :-------------: | :-------: | :-------: | :---------------------------------: | :-----------------: |
| 5V              | VBUS      |           |                                     | 电源输入/输出       |
| GND             |           |           |                                     |                      |
| 3V3             | 3V3_OUT   |           |                                     | 电源输出            |
| D0              | Analog    | GPIO2     | ADC1_CH2,                           | GPIO, ADC            |
| D1              | Analog    | GPIO3     | ADC1_CH3                            | GPIO, ADC            |
| D2              | Analog    | GPIO4     | ADC1_CH4, FSPIHD, MTMS              | GPIO, ADC            |
| D3              | Analog    | GPIO5     | ADC2_CH0, FSPIWP, MTDI              | GPIO, ADC            |
| D4              | SDA       | GPIO6     | FSPICLK, MTCK                       | GPIO, I2C Data       |
| D5              | SCL       | GPIO7     | FSPID, MTDO                         | GPIO, I2C Clock      |
| D6              | TX        | GPIO21    | U0TXD                               | GPIO, UART Transmit  |
| D7              | RX        | GPIO20    | U0RXD                               | GPIO, UART Receive   |
| D8              | SCK       | GPIO8     |                                     | GPIO, SPI Clock      |
| D9              | MISO      | GPIO9     |                                     | GPIO, SPI Data       |
| D10             | MOSI      | GPIO10    | FSPICS0                             | GPIO, SPI Data       |
| MTDO            |           | GPIO7     |                             |            JTAG              |
| MTDI            |           | GPIO5     |                        |        JTAG, ADC                  |
| MTCK            |           | GPIO6     |                           |        JTAG, ADC               |
| MTMS            |           | GPIO4     |                            |               JTAG, ADC       |
| Reset           |           | CHIP_EN   |                                     | EN                   |
| Boot            |           | GPIO9     |                                     | 进入 Boot 模式       |
| U.FL-R-SMT1     |           | LNA_IN    |                                     | UFL 天线             |
| Light           |           | VCC_3V3   |                                     | CHG-LED              |
### 电源引脚

- 5V - 这是来自 USB 接口的 5V 输出。你也可以将其用作电压输入，但必须在你的外部电源和该引脚之间串联某种二极管（肖特基、信号、功率），二极管的阳极接电池，阴极接 5V 引脚。
- 3V3 - 这是板载稳压器的稳压输出。你可以从这里汲取 700mA 电流
- GND - 电源/数据/信号地

### 启动配置引脚

根据 ESP32C3 芯片手册，芯片中的 **GPIO2**、**GPIO8** 和 **GPIO9** 是启动配置引脚，这些引脚的高低电平配置可能会让芯片进入不同的启动模式，在使用这些引脚时请特别注意这一点，否则可能会导致你的 XIAO 一直无法上传或执行程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/20.png" style={{width:800, height:'auto'}}/></div>

## 入门指南

首先，我们将 XIAO ESP32C3 连接到电脑，连接一个 LED 到开发板，并从 Arduino IDE 上传一个简单的代码，通过让连接的 LED 闪烁来检查开发板是否工作正常。

### 硬件准备

你需要准备以下物品：

- 1 x [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html)
- 1 x 电脑
- 1 x USB Type-C 线缆

:::tip

有些 USB 线缆只能供电，不能传输数据。如果你没有 USB 线缆，或者不知道你的 USB 线缆是否可以传输数据，你可以查看 [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。

:::

- **Step 1.** 通过 USB Type-C 线缆将 XIAO ESP32C3 连接到电脑。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" style={{width:120, height:'auto'}}/></div>

- **Step 2.** 按如下方式将一个 LED 连接到 D10 引脚

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/connect-led-2.png" style={{width:500, height:'auto'}}/></div>

**注意：** 请确保串联一个电阻（约 150Ω）来限制流过 LED 的电流，以防止过大的电流烧毁 LED

### 软件准备

- **Step 1.** 根据你的操作系统下载并安装最新版本的 Arduino IDE

<p style={{textAlign:'center'}}><a href="https://www.arduino.cc/en/software" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></p>

- **Step 2.** 启动 Arduino 应用程序

- **Step 3.** 在 Arduino IDE 中添加 ESP32 开发板包

依次进入 **File > Preferences**，并在 **"Additional Boards Manager URLs"** 中填入以下链接：
*[https://jihulab.com/esp-mirror/espressif/arduino-esp32.git](https://jihulab.com/esp-mirror/espressif/arduino-esp32.git)*

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_board.png" style={{width:550, height:'auto'}}/></div>

依次进入 **Tools > Board > Boards Manager...**，在搜索框中输入关键字 "**esp32**"，选择最新版本的 **esp32** 并安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" style={{width:550, height:'auto'}}/></div>

- **Step 4.** 选择你的开发板和端口

**开发板**

依次进入 **Tools > Board > ESP32 Arduino** 并选择 "**XIAO_ESP32C3**"。开发板列表有点长，你需要滚动到最底部才能找到它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" style={{width:800, height:'auto'}}/></div>

**端口**

依次进入 **Tools > Port** 并选择已连接 XIAO ESP32C3 的串口名称。它很可能是 COM3 或更高（**COM1** 和 **COM2** 通常保留给硬件串口）。

### 运行你的第一个 Blink 程序

- **Step 1.** 将下面的代码复制到 Arduino IDE 中

确保你的 `D10` 已按上图所示连接到一个 LED。

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

- **Step 2.** 点击 **Upload** 按钮将代码上传到开发板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" style={{width:500, height:'auto'}}/></div>

上传完成后，你会看到连接的 LED 以 1 秒的间隔闪烁一次。这意味着连接成功，现在你可以使用 XIAO ESP32C3 探索更多项目了！

## 电池使用

XIAO ESP32C3 支持使用 3.7V 锂电池作为电源输入。你可以参考下图了解接线方式。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/battery_connect.png" alt="pir" width="600" height="auto"/></div>

:::caution
焊接时请注意不要将正负极短路，以免烧毁电池和设备。
:::

**电池使用说明：**

1. 请使用符合规格的合格电池。
2. 使用电池时，XIAO 仍可以通过数据线连接到你的电脑设备，请放心，XIAO 内置电路保护芯片，是安全的。
3. 当使用电池供电时，XIAO ESP32C3 不会有任何 LED 亮起（除非你编写了特定程序），请不要通过 LED 的状态来判断 XIAO ESP32C3 是否在工作，而应根据你的程序进行合理判断。
4. 很抱歉，目前我们无法通过软件帮助你检查电池剩余电量（因为没有多余的芯片引脚可用），你需要定期给电池充电或使用万用表检测电池电量。

### 检测电池电压

由于 ESP32C3 的引脚数量限制，为了确保 XIAO ESP32C3 拥有与其他 XIAO 系列相同数量的 GPIO，引脚，工程师们没有多余的引脚分配给电池用于电压测量。

但如果你更希望使用单独的引脚来测量电池电压，你可以参考 [msfujino](https://forum.seeedstudio.com/u/msfujino) 的巧妙做法。我们也在此特别感谢 [msfujino](https://forum.seeedstudio.com/u/msfujino) 为 XIAO ESP32C3 分享的所有经验和付出。

其基本操作思路是：使用 200k 电阻将电池电压分压为 1/2 并连接到 A0 端口，从而可以监测电压。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/3.png" alt="pir" width="300" height="auto"/></div>

数据手册中标称满量程 AD 转换电压为 2500mV，但不同芯片之间差异较大，实际为 ±10%。我的芯片满量程为 2700mV。

幸运的是，每颗芯片的校准修正值都写在熔丝区域，通过使用 `analogReadMilliVolts()` 函数，我无需做任何特殊处理就可以读取到修正后的电压值。

AD 转换结果与万用表测得的电压非常一致，误差约为 5mV，在实际使用中没有问题。

另外，尤其在通信过程中，会出现尖峰状误差，需要进行 16 次平均才能将其消除。

下面是用于测试电池电压的程序。

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
[https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535](https://forum.seeedstudio.com/t/battery-voltage-monitor-and-ad-conversion-for-xiao-esp32c/267535).
我们建议你在根据上述方法尝试测量电池电压之前，具备良好的动手能力和较好的焊接技术，并对电池短路等危险操作保持警惕。
:::

## 深度睡眠模式与唤醒

XIAO ESP32C3 支持深度睡眠模式和唤醒功能。对于这两个功能的使用，我们提供如下使用示例。

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

如果你足够快地在 XIAO 进入深度睡眠之前打开串口监视器，那么你可以看到如下所示的消息输出。这意味着 XIAO 现在已经“睡着”了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/15.png" style={{width:700, height:'auto'}}/></div>

:::tip
进入深度睡眠模式后，XIAO 的端口会消失，你需要将它唤醒才能再次看到端口号！
:::

在程序中，我们使用 **D1** 低电平来唤醒。这意味着我们可以将一个按钮连接到 D1 引脚，当我们按下按钮时，XIAO 就会被唤醒。

:::caution
XIAO ESP32-C3 支持 GPIO 唤醒和定时器唤醒，支持唤醒的引脚为 D0~D3。
:::

## 故障排查

### Q1: 我在向开发板上传代码时，Arduino IDE 卡住了

你可以先尝试在开发板连接到电脑时，单击一次 **RESET BUTTON** 来重置开发板。如果这不起作用，请按住 **BOOT BUTTON**，在按住 **BOOT** 按钮的同时将开发板连接到电脑，然后松开按钮以进入 **bootloader mode**。

### Q2: 我的开发板没有在 Arduino IDE 中显示为串行设备

请参考上面 **Q1** 的相同答案。

### Q3: 我想使用出厂固件重新烧录 bootloader

你只需通过 **USB Type-C** 将开发板连接到电脑，并使用 **ESP RF Test Tool** 重新烧录带有出厂固件的 bootloader 即可。

- **Step 1.** 按住 **BOOT BUTTON** 并将 XIAO ESP32C3 连接到电脑以进入 **bootloader mode**

- **Step 2.** 连接完成后，松开 BOOT BUTTON

- **Step 3.** 访问 [this page](https://www.espressif.com/en/support/download/other-tools) 并下载 **ESP RF Test Tool and Test Guide**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-download.png" style={{width:1000, height:'auto'}}/></div>

- **Step 4.** 解压 **.zip**，进入 `ESP_RF_Test_EN\ESP_RF_Test_EN\EspRFTestTool_v2.8_Manual` 并打开 **EspRFTestTool_v2.8_Manual.exe**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-tool-open.png" style={{width:500, height:'auto'}}/></div>

- **Step 5.** 选择 **ESP32C3** 作为 ChipType，选择你的 COM 端口，将 BaudRate 设为 **115200**，然后点击 **open**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-2.png" style={{width:500, height:'auto'}}/></div>

你会看到如下输出

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-5.png" style={{width:500, height:'auto'}}/></div>

- **Step 6.** 选择 **Flash** 并点击 **Select Bin**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-6.jpg" style={{width:500, height:'auto'}}/></div>

- **Step 7.** 下载 [factory firmware of XIAO ESP32C3](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin) 并选择它。

- **Step 8.** 最后点击 **Load Bin**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-8.png" style={{width:500, height:'auto'}}/></div>

当烧录成功时，你会看到如下输出

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/esp-flash-9.png" style={{width:500, height:'auto'}}/></div>

## MicroPython GitHub 仓库

- [XIAO ESP32C3 MicroPython 仓库](https://github.com/IcingTomato/micropython_xiao_esp32c3)

## 资源

<!-- - **[PDF]** [Seeed Studio XIAO Step By Step Course](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf) -->

**硬件设计**
- **📄[Datasheet]** [Espressif ESP32-C3 数据手册](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/esp32-c3_datasheet.pdf )
- **📄[Schematic]** [XIAO ESP32-C3 原理图](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO_ESP32C3_v1.3_SCH_260116.pdf )
- **🗃️[PCB Design Files]** 
  - [XIAO ESP32-C3 KiCad 工程](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO_ESP32C3_v1.3_KiCad_260116.zip )
- **🗃️[PCB Design Libraries]** 
  - [XIAO Series KiCad 封装库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_Footprints.zip )
  - [XIAO Series KiCad 原理图符号库](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]** [XIAO ESP32-C3 引脚分布表](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-pinout_sheet.xlsx )

**机械结构**
- **📄[2D Dimensions]** [XIAO ESP32-C3 DXF 尺寸图](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/XIAO-ESP32C3-DXF.zip )
- **🗃️[2D Dimensions]** [XIAO ESP32-C3 焊盘尺寸数据](https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32C3_v1.2_Dimensioning.zip )
- **📄[3D Model]** [XIAO ESP32-C3 3D 模型](https://grabcad.com/library/seeed-studio-xiao-esp32-c3-1 )

**软件与工具**
- **🗃️[Factory Firmware]** [XIAO ESP32-C3 出厂固件](https://files.seeedstudio.com/wiki/XIAO_WiFi/Resources/ESP32-C3_RFTest_108_2b9b157_20211014.bin )
- **🔗[MicroPython Library]** [XIAO ESP32-C3 MicroPython 库](https://github.com/IcingTomato/micropython_xiao_esp32c3 )
- **🔗[Platform IO]** [PlatformIO for Seeed Studio XIAO ESP32-C3](https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html )

**其他**
- **🔗[Wiki]** [First Look at the Seeed Studio XIAO ESP32-C3](https://sigmdel.ca/michel/ha/xiao/xiao_esp32c3_intro_en.html )  
  - 对 XIAO ESP32C3 的精彩介绍，涵盖了关键特性和基本用法。
- **📄[文档]** [XIAO ESP32-C3 低功耗报告](https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/Low_Power_Consumption.pdf )

## 课程资源

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- 📚 **[电子书]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

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
