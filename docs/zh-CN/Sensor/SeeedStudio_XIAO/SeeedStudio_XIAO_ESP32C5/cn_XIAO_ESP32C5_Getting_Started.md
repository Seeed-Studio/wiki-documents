---
title: Seeed Studio XIAO ESP32-C5 入门指南
description: |
keywords:
  - xiao
  - esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /cn/xiao_esp32c5_getting_started
last_update:
  date: 11/26/2025
  author: Zeller
  sidebar_position: 0
---

## 简介

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
            <th>内存</th>
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
            <th>板载按钮</th>
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

- **强大的 CPU：** ESP32-C5，32 位 RISC-V 单核处理器，运行频率高达 240 MHz
- **完整的 Wi-Fi 子系统：** 双频 Wi-Fi 6 子系统（2.4 GHz 和 5 GHz），符合 IEEE 802.11 a/b/g/n/ac/ax 标准，支持 Station、SoftAP、并发 SoftAP+Station 操作和混杂（监控）模式。
- **Bluetooth LE 子系统：** 支持 Bluetooth 5 和 Bluetooth mesh 功能
- **更好的 RF 性能：** 包含外部 RF 天线。
- **电池充电芯片：** 支持锂电池充放电管理。
- **丰富的片上资源：** 384 KB 片上 SRAM，320 KB ROM
- **超小尺寸：** 拇指大小（21x17.8mm）XIAO 系列经典外形，适用于可穿戴设备和小型项目
- **可靠的安全功能：** 支持 AES-128/256、SHA 系列哈希、HMAC 的加密硬件加速器，专用数字签名外设和安全启动（V2）。
- **丰富的接口：** 1×I2C、1×SPI、2×UART、多达 11×GPIO（支持 PWM）、5×ADC 通道和 JTAG（背面焊盘）绑定焊盘接口。
- 单面元件，表面贴装设计

## 硬件概述

<table align="center">
 <tr>
     <th>XIAO ESP32-C5 指示图</th>
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
| XIAO 引脚              | 功能       | 芯片引脚  | 备用功能                 | 描述                        |
| :--------------------: | :-------: | :-------: | :----------------------: | :-------------------------- |
| 5V                     | VBUS       |           |                          | 电源输入/输出               |
| GND                    |            |           |                          |                              |
| 3V3                    | 3V3_OUT    |           |                          | 电源输出                    |
| D0                     | Analog     | GPIO1     | LP_UART_DSRN,LP_GPIO1    | GPIO, ADC                    |
| D1                     |            | GPIO0     | LP_UART_DTRN,LP_GPIO0    | GPIO                         |
| D2                     |            | GPIO25    |                          | GPIO                         |
| D3                     |            | GPIO7     | SDIO_DATA1               | GPIO                         |
| D4                     | SDA        | GPIO23    |                          | GPIO, I2C 数据              |
| D5                     | SCL        | GPIO24    |                          | GPIO, I2C 时钟              |
| D6                     | TX         | GPIO11    |                          | GPIO, UART 发送             |
| D7                     | RX         | GPIO12    |                          | GPIO, UART 接收             |
| D8                     | SCK        | GPIO8     | TOUCH7                   | GPIO, SPI 时钟              |
| D9                     | MISO       | GPIO9     | TOUCH8                   | GPIO, SPI 数据              |
| D10                    | MOSI       | GPIO10    | TOUCH9                   | GPIO, SPI 数据              |
| MTDO                   |            | GPIO5     |                          | JTAG                         |
| MTDI                   |            | GPIO3     |                          | JTAG, ADC                    |
| MTCK                   |            | GPIO4     |                          | JTAG, ADC                    |
| MTMS                   |            | GPIO2     |                          | JTAG, ADC                    |
| ADC_BAT                |            | GPIO6    |                          | 读取电池电压值              |
| ADC_CRL                |            | GPIO26    |                          | 控制（启用/禁用）测量电路以节省电源。   |
| Reset                  |            | CHIP_EN   |                          | EN                           |
| Boot                   |            | GPIO28    |                          | 进入启动模式                |
| U.FL-R-SMT1            |            | LNA_IN    |                          | UFL 天线                     |
| CHARGE_LED             |            | VCC_3V3   |                          | CHG-LED_Red                  |
| USER_LED               |            | GPIO27    |                          | User Light_Yellow            |
## 入门指南

为了让您更快地开始使用 XIAO ESP32-C5，请阅读下面的硬件和软件准备来准备 XIAO。

### 硬件

您需要准备以下物品：

- 1 x [Seeed Studio XIAO ESP32-C5](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-5884.html)
- 1 x 计算机
- 1 x USB Type-C 数据线

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
有些 USB 数据线只能供电而不能传输数据。如果您没有 USB 数据线或不知道您的 USB 数据线是否可以传输数据，您可以查看[Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html)。
:::

### 软件

XIAO ESP32-C5 推荐的编程工具是 Arduino IDE，因此您需要完成 Arduino 安装作为软件准备的一部分。

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考[Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 根据您的操作系统下载并安装稳定版本的 Arduino IDE。

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

- **步骤 2.** 启动 Arduino 应用程序。
- **步骤 3.** 打开 BOARDS MANAGER -> 搜索**esp32** -> 安装 3.3.5 版本或更高版本

 <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/board_2.png" style={{width:800, height:'auto'}}/></div>

### 上传程序

下面让我们以一个点亮程序为例

**步骤 1.** 选择 **XIAO_ESP32C5** 和端口。如果您不知道端口号，可以重新插拔 XIAO_ESP32C5 来检查。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/select_board.png" style={{width:800, height:'auto'}}/></div>

**步骤 2.** 在您的草图中粘贴代码

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

上传程序后，您将看到 L 指示灯以 1 秒的间隔闪烁，同时串口监视器将打印 LED ON 和 LED OFF。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:300, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/uoload_2.png" style={{width:800, height:'auto'}}/></div>

## 深度睡眠模式

XIAO ESP32-C5 具有深度睡眠和唤醒功能。此示例利用引脚 **D0** 上的高电平触发来从深度睡眠中唤醒设备。<br/>
需要注意的是，这是一个可配置的选项，因为硬件支持高电平和低电平触发，以适应不同的电路设计。

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

如果您能够在 XIAO 进入深度睡眠之前快速打开串口监视器，那么您可以看到如下所示的消息输出。这意味着 XIAO 现在处于**睡眠状态**。然后您也可以通过按下按钮来查看并激活它。您还可以观察 **L LED** 的开关状态来检查设备是否已被唤醒。一旦被唤醒，它将呈现闪烁效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/deepsleepmode_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
进入深度睡眠模式后，XIAO 的端口将消失，您需要唤醒它才能再次看到其端口号！
:::

:::caution
目前 XIAO ESP32-C5 仅支持 GPIO 唤醒，支持唤醒的引脚只有 D0~D1。此程序可能无法在其他引脚上工作。
:::

## 电池使用

XIAO ESP32-C5 能够使用 3.7V 锂电池作为电源输入。您可以参考以下图表了解接线方法。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/battery_wiring.png" alt="pir" width="800" height="auto"/></div>

:::caution
焊接时请小心不要短路正负极，以免烧坏电池和设备。
:::

**电池使用说明：**

1. 请使用符合规格的合格电池。
2. 使用电池时，XIAO 可以通过数据线连接到您的计算机设备，请放心，XIAO 内置电路保护芯片，是安全的。
3. 当 XIAO ESP32-C5 由电池供电时，**C LED** 将点亮。您可以以此作为判断是否进行了充电管理的依据。

### 检查电池电压

XIAO ESP32-C5 配备了 SGM40567 电池充电芯片和 TPS22916CYFPR 电池电压采集芯片。您可以启用 **BAT_VOLT_PIN_EN** 来激活电池电压采集功能，并通过 **BAT_VOLT_PIN** 读取电池电压。

:::tip
在 XIAO ESP32C5 上，BAT_VOLT_PIN 对应的引脚是 GPIO6，BAT_VOLT_PIN_EN 对应的引脚是 GPIO26。
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

  - 此函数用于从 `BAT_VOLT_PIN` 引脚读取当前模拟电压，并返回以毫伏 (mV) 为单位的校准电压值。
  - 与仅提供原始 ADC 值的传统 `analogRead()` 不同，`analogReadMilliVolts()` 自动应用芯片中嵌入的工厂校准参数。这提高了精度，改善了电压测量的线性度，并消除了手动 ADC 到电压转换的需要。
  - 在电压采样过程中，通过 `for` 循环执行 **16 次重复采样**，并累积结果。多次采样的目的是抑制瞬态噪声和离散误差，从而提高测量稳定性。最后，累积值除以采样次数（16）以获得更平滑、更可靠的平均电压值。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/battery_print_1.png" alt="pir" width="800" height="auto"/></div>

:::tip
根据数据手册，ESP32-C5 的有效测量范围覆盖 0~3300 mV。因此，XIAO ESP32-C5 的内置电池电压采集电路设计有两个 100K 电阻进行分压，能够准确读取数值。
:::

## 资源

- **[PDF]** [ESP32-C5 数据手册](https://documentation.espressif.com/esp32-c5_datasheet_en.pdf)

- **[PDF]** [ESP32-C5 数据手册](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/esp32-c5_datasheet_en.pdf)
- **[PCB 设计文件]** [XIAO ESP32-C5 KiCad 项目](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/Seeed_Studio_XIAO_ESP32C5.zip)
- **[原理图]** [XIAO ESP32-C5 原理图](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/Seeed_Studio_XIAO_ESP32C5.pdf)


- **[ZIP]** [Seeed Studio XIAO ESP32-C5 KiCAD 库](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/Seeed_Studio_XIAO_ESP32C5_V1.0_SCH&PCB_KiCAD.zip)

- **[PDF]** [Seeed Studio XIAO ESP32-C5 原理图](https://files.seeedstudio.com/wiki/XIAO_ESP32C5/res/Seeed_Studio_ESP32C5_SCH_251202.pdf)

- **[XLSX]** [Seeed Studio XIAO ESP32-C5 引脚图表](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/res/XIAO_ESP32C6_Pinout.xlsx)

- **[Kicad]** [Seeed Studio XIAO ESP32-C5 封装](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

- **[STEP]** [Seeed Studio XIAO ESP32-C5 Step 文件](https://grabcad.com/library/seeed-studio-xiao-esp32-c5-1)

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
