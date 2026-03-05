---
title: Seeed Studio XIAO ESP32-C5 入门指南
description: ''
keywords:
  - xiao
  - esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_getting_started
last_update:
  date: 11/26/2025
  author: Zeller
  sidebar_position: 0
createdAt: '2025-12-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/xiao_esp32c5_getting_started/
---

## 介绍

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### 规格参数

<table>
    <thead>
        <tr>
            <th>项目</th>
            <th>Seeed Studio XIAO ESP32-C5</th>
            <th>Seeed Studio XIAO ESP32-S3</th>
            <th>Seeed Studio XIAO ESP32-C3</th>
            <th>Seeed Studio XIAO ESP32-C6</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>处理器</th>
            <td>ESP32-C5 RISC-V 32-bit @240 MHz</td>
            <td>ESP32R8N8 32-bit Xtensa LX7 dual-core @240 MHz</td>
            <td>ESP32-C3 32-bit RISC-V @160 MHz</td>
            <td>ESP32-C6 32-bit RISC-V @160 MHz</td>
        </tr>
        <tr>
            <th>无线连接</th>
            <td>**2.4 GHz & 5 GHz 双频 Wi-Fi 6** 和 Bluetooth 5 (LE)</td>
            <td>2.4 GHz Wi-Fi 和 Bluetooth 5 (LE)</td>
            <td>2.4 GHz Wi-Fi 和 Bluetooth 5 (LE)</td>
            <td> 2.4 GHz Wi-Fi 6, Bluetooth 5 (LE)</td>
        </tr>
        <tr>
            <th>存储</th>
            <td>8 MB PSRAM & 8 MB Flash</td>
            <td>8 MB PSRAM & 8 MB Flash</td>
            <td>400 KB SRAM, 4 MB Flash</td>
            <td>512KB SRAM , 4MB Flash</td>
        </tr>
        <tr>
            <th>接口</th>
            <td>I2C / UART / SPI</td>
            <td>I2C / UART / SPI</td>
            <td>I2C / UART / SPI</td>
            <td>I2C / UART / SPI</td>
        </tr>
        <tr>
            <th>PWM/模拟引脚</th>
            <td>11 / 5</td>
            <td>11 / 9</td>
            <td>11 / 4</td>
            <td>11 / 7</td>
        </tr>
        <tr>
            <th>板载按键</th>
            <td>Reset / Boot Button</td>
            <td>Reset / Boot Button</td>
            <td>Reset / Boot Button</td>
            <td>Reset button / Boot button</td>
        </tr>
        <tr>
            <th>板载 LED</th>
            <td>Charge / USER LED</td>
            <td>Charge / USER LED</td>
            <td>Charge LED</td>
            <td>Charge / USER LED</td>
        </tr>
        <tr>
            <th>电池充电芯片</th>
            <td>SGM40567</td>
            <td>SGM40567</td>
            <td>ETA4054S2F</td>
            <td>SGM40567</td>
        </tr>
    </tbody>
</table>

### 特性

- **强大的 CPU：** ESP32-C5，32 位 RISC-V 单核处理器，最高运行频率 240 MHz
- **完整的 Wi-Fi 子系统：** 双频 Wi-Fi 6 子系统（2.4 GHz 和 5 GHz），符合 IEEE 802.11 a/b/g/n/ac/ax 标准，支持 Station、SoftAP、SoftAP+Station 并发模式以及混杂（监控）模式。
- **Bluetooth LE 子系统：** 支持 Bluetooth 5 和 Bluetooth mesh 功能
- **更好的射频性能：** 配备外置 RF 天线。
- **电池充电芯片：** 支持锂电池充放电管理。
- **丰富的片上资源：** 384 KB 片上 SRAM，320 KB ROM
- **超小尺寸：** 小如拇指（21x17.8mm），XIAO 系列经典外形，适用于可穿戴设备和小型项目
- **可靠的安全特性：** 支持 AES-128/256、SHA 系列哈希、HMAC 的密码学硬件加速器，配备专用数字签名外设和 Secure Boot (V2)。
- **丰富的接口：** 1×I2C、1×SPI、2×UART，最多 11×GPIO（支持 PWM）、5×ADC 通道，以及一个 JTAG（背面焊盘）焊盘接口。
- 单面贴装器件，表面贴装设计

## 硬件概览

<table align="center">
 <tr>
     <th>XIAO ESP32-C5 示意图</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/front.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32-C5 引脚列表</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/PinList_1.png" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

 ## **引脚映射**
| XIAO 引脚              | 功能       | 芯片引脚  | 复用功能                   | 描述                          |
| :--------------------: | :-------: | :-------: | :----------------------: | :-------------------------- |
| 5V                     | VBUS       |           |                          | 电源输入/输出                 |
| GND                    |            |           |                          |                              |
| 3V3                    | 3V3_OUT    |           |                          | 电源输出                      |
| D0                     | Analog     | GPIO1     | LP_UART_DSRN, LP_GPIO1   | GPIO, ADC                    |
| D1                     |            | GPIO0     | LP_UART_DTRN, LP_GPIO0   | GPIO                         |
| D2                     |            | GPIO25    |                          | GPIO                         |
| D3                     |            | GPIO7     | SDIO_DATA1               | GPIO                         |
| D4                     | SDA        | GPIO23    |                          | GPIO, I2C 数据                |
| D5                     | SCL        | GPIO24    |                          | GPIO, I2C 时钟               |
| D6                     | TX         | GPIO11    |                          | GPIO, UART 发送              |
| D7                     | RX         | GPIO12    |                          | GPIO, UART 接收              |
| D8                     | SCK        | GPIO8     | TOUCH7                   | GPIO, SPI 时钟               |
| D9                     | MISO       | GPIO9     | TOUCH8                   | GPIO, SPI 数据               |
| D10                    | MOSI       | GPIO10    | TOUCH9                   | GPIO, SPI 数据               |
| MTDO                   |            | GPIO5     | LP_UART_TXD, LP_GPIO5    | JTAG                         |
| MTDI                   |            | GPIO3     | LP_I2C_SCL, LP_GPIO3     | JTAG, ADC                    |
| MTCK                   |            | GPIO4     | LP_UART_RXD, LP_GPIO4    | JTAG, ADC                    |
| MTMS                   |            | GPIO2     | LP_I2C_SDA, LP_GPIO2     | JTAG, ADC                    |
| ADC_BAT                |            | GPIO6    |                          | 读取电池电压值               |
| ADC_CRL                |            | GPIO26    |                          | 控制（启用/禁用）测量电路以节省功耗。   |
| Reset                  |            | CHIP_EN   |                          | EN                           |
| Boot                   |            | GPIO28    |                          | 进入 Boot 模式               |
| U.FL-R-SMT1            |            | LNA_IN    |                          | UFL 天线                     |
| CHARGE_LED             |            | VCC_3V3   |                          | CHG-LED_Red                  |
| USER_LED               |            | GPIO27    |                          | User Light_Yellow            |
## 入门指南

为了让你更快地开始使用 XIAO ESP32-C5，请先阅读下面的硬件和软件准备内容，对 XIAO 进行准备。

### 硬件

你需要准备以下物品：

- 1 x [Seeed Studio XIAO ESP32-C5](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-5884.html)
- 1 x 电脑
- 1 x USB Type-C 线缆

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/3-100010048-Seeed-Studio-XIAO-ESP32C5.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

:::tip
有些 USB 线缆只能供电，不能传输数据。如果你没有 USB 线缆，或者不确定你的 USB 线缆是否可以传输数据，可以查看 [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。
:::

### 软件

XIAO ESP32-C5 推荐使用 Arduino IDE 作为编程工具，因此在软件准备部分，你需要完成 Arduino 的安装。

:::tip
如果这是你第一次使用 Arduino，我们强烈建议你参考 [Getting Started with Arduino](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 根据您的操作系统下载并安装稳定版本的 Arduino IDE。

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **步骤 2.** 启动 Arduino 应用程序。
- **步骤 3.** 打开 BOARDS MANAGER -> 搜索**esp32** -> 安装版本 3.3.5 或更高版本

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/board_2.png" style={{width:800, height:'auto'}}/></div>

### 上传程序

下面以一个点亮灯光的程序为例

**步骤 1.** 选择 **XIAO_ESP32C5** 和 PORT。如果你不知道 PORT，可以重新插拔 XIAO_ESP3-2C5 来查看。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/select_board.png" style={{width:800, height:'auto'}}/></div>

**步骤 2.** 将代码粘贴到你的 Skecth 中

**LED_BUILTIN** 对应开发板上的 **L LED**。

```cpp
void setup() {
  // put your setup code here, to run once:
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(LED_BUILTIN, LOW);
  Serial.print("LED ON \n");
  delay(1000);
  digitalWrite(LED_BUILTIN, HIGH);
  Serial.print("LED OFF \n");
  delay(1000);
}
```

**步骤 3.** 点击并上传

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_1.png" style={{width:800, height:'auto'}}/></div><br/>

效果演示：

上传程序后，你会看到 L 指示灯以 1 秒的间隔闪烁，同时串口监视器会打印 LED ON 和 LED OFF。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:300, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/uoload_2.png" style={{width:800, height:'auto'}}/></div>

## 深度睡眠模式

XIAO ESP32-C5 具有深度睡眠和唤醒功能。本示例使用引脚 **D0** 的高电平触发来将设备从深度睡眠中唤醒。<br/>
需要注意的是，这是一个可配置选项，因为硬件同时支持高电平和低电平触发，以适配不同的电路设计。

```cpp
#define WAKEUP_PIN D0 // LP_GPIO1

RTC_DATA_ATTR int bootCount = 0;

void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Wakeup caused by ULP program"); break;
    case ESP_SLEEP_WAKEUP_GPIO : Serial.println("Wakeup caused by GPIO"); break;
    default : Serial.printf("Wakeup was not caused by deep sleep: %d\n",wakeup_reason); break;
  }
}

void setup(){
  Serial.begin(115200);
  delay(1000);

  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));
  print_wakeup_reason();

  pinMode(WAKEUP_PIN, INPUT_PULLUP);
  pinMode(LED_BUILTIN, OUTPUT);

  uint64_t mask = 1ULL << WAKEUP_PIN;
  esp_deep_sleep_enable_gpio_wakeup(mask, ESP_GPIO_WAKEUP_GPIO_HIGH);

  digitalWrite(LED_BUILTIN, LOW);
  delay(100);
  digitalWrite(LED_BUILTIN, HIGH);

  delay(2000);  //Delay time depends on the serial port / Give the PC time to stabilize
  Serial.println("Going to sleep now");
  esp_deep_sleep_start();
}

void loop(){}
```

如果你足够快地在 XIAO 进入深度睡眠之前打开串口监视器，那么你可以看到如下所示的消息输出。这意味着 XIAO 现在已经**睡着**。然后你也可以通过按下按钮来查看并唤醒它。你还可以通过观察 **L LED** 的亮灭状态来检查设备是否被唤醒。一旦被唤醒，它会呈现闪烁效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/deepsleepmode_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
进入深度睡眠模式后，XIAO 的端口会消失，你需要将其唤醒才能再次看到端口号！
:::

:::caution
XIAO ESP32-C5 支持 GPIO 唤醒和定时器唤醒。为防止在低功耗开发过程中丧失硬件调试能力以及增加固件烧录难度，强烈建议将 JTAG（MTMS、MTDI、MTCK、MTDO）引脚预留为专用用途，不要将其用作深度睡眠模式的唤醒源。
:::

## 电池使用

XIAO ESP32-C5 可以使用 3.7V 锂电池作为电源输入。你可以参考下图进行接线。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/battery_wiring.png" alt="pir" width="800" height="auto"/></div>

:::caution
焊接时请注意不要将正负极短路，以免烧毁电池和设备。
:::

**电池使用说明：**

1. 请使用符合规格的合格电池。
2. 使用电池时，XIAO 仍可通过数据线连接到你的计算机设备，请放心，XIAO 内置电路保护芯片，使用安全。
3. 当 XIAO ESP32-C5 由电池供电时，**C LED** 会点亮。你可以以此作为判断是否进行了充电管理的依据。

### 检测电池电压

XIAO ESP32-C5 搭载了 SGM40567 电池充电芯片和 TPS22916CYFPR 电池电压采集芯片。你可以使能 **BAT_VOLT_PIN_EN** 来激活电池电压采集功能，并通过 **BAT_VOLT_PIN** 读取电池电压。

:::tip
在 XIAO ESP32C5 上，对应 BAT_VOLT_PIN 的引脚是 GPIO6，对应 BAT_VOLT_PIN_EN 的引脚是 GPIO26。
:::

```cpp
#include <Arduino.h>

void setup() {
  Serial.begin(115200);
  pinMode(BAT_VOLT_PIN, INPUT);         // Configure A0 as ADC input
  pinMode(BAT_VOLT_PIN_EN , OUTPUT);
  digitalWrite(BAT_VOLT_PIN_EN , HIGH);
}

void loop() {
  uint32_t Vbatt = 0;
  for(int i = 0; i < 16; i++) {
    Vbatt += analogReadMilliVolts(BAT_VOLT_PIN ); // Read and accumulate ADC voltage
  }
  float Vbattf = 2 * Vbatt / 16 / 1000.0;     // Adjust for 1:2 divider and convert to volts
  Serial.println(Vbattf, 3);                  // Output voltage to 3 decimal places
  delay(1000);                                // Wait for 1 second
}
```

- **`analogReadMilliVolts(BAT_Voltage_Read)`**

  - 此函数用于从 `BAT_VOLT_PIN` 引脚读取当前模拟电压，并返回以毫伏（mV）为单位的校准电压值。
  - 与传统的 `analogRead()` 只提供原始 ADC 数值不同，`analogReadMilliVolts()` 会自动应用芯片中内置的出厂校准参数，从而获得更高的精度、更好的电压测量线性度，并且无需手动进行 ADC 到电压的换算。
  - 在电压采样过程中，通过 `for` 循环进行**16 次重复采样**并对结果进行累加。多次采样的目的是抑制瞬时噪声和离散误差，从而提高测量稳定性。最后将累加值除以采样次数（16），以获得更加平滑、可靠的平均电压值。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/battery_print_1.png" alt="pir" width="800" height="auto"/></div>

:::tip
根据数据手册，ESP32-C5 的有效测量范围为 0~3300 mV。因此，XIAO ESP32-C5 内置的电池电压采集电路采用两个 100K 电阻进行分压设计，从而实现对数值的精确读取。
:::

## 资源

**硬件设计**
- **📄[Datasheet]** [Espressif ESP32-C5 Datasheet](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/esp32-c5_datasheet_en.pdf )
- **📄[Schematic]** [XIAO ESP32-C5 Schematic](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/Seeed_Studio_XIAO_ESP32C5.pdf )
- **🗃️[PCB Design Files]** [XIAO ESP32-C5 KiCad Project](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/Seeed_Studio_XIAO_ESP32C5.zip )
- **🗃️[PCB Design Libraries]** 
 - [XIAO Series KiCad SCH Symbols](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
- **📄[Pinout Diagram]** [XIAO ESP32-C5 Pinout Sheet](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/XIAO_ESP32C5_Pinout.xlsx )

**机械设计**
- **📄[3D Model]** [XIAO ESP32-C5 3D Model](https://grabcad.com/library/seeed-studio-xiao-esp32-c5-1 )

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
