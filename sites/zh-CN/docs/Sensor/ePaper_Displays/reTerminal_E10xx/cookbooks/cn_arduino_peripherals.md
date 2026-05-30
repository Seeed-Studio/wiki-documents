---
description: 适用于 reTerminal E1001 / E1002 / E1003 / E1004 的 Arduino 菜谱——包含板载硬件外设示例，如 LED、蜂鸣器、三个用户按键、SHT4x 温湿度传感器、电池监测、microSD 卡，以及适用于全部四种面板版本的端到端图像处理流程（JPEG / BMP / PNG → 抖动 → 电子纸）。
title: 'Arduino 菜谱：板载外设（reTerminal E 系列）'
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/27.webp
slug: /reterminal_e10xx_with_arduino_peripherals
sidebar_position: 2
sidebar_label: Arduino – 外设
last_update:
  date: 05/21/2026
  author: Citric
createdAt: '2026-05-15'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_arduino_peripherals/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Arduino 菜谱：板载外设（reTerminal E 系列）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/245.png" style={{width:600, height:'auto'}}/></div>

:::tip 本系列中的其他菜谱
- **[Arduino 菜谱：电子纸显示](https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_arduino)** —— 在电子纸屏幕上渲染文本、图形和图像。
- **[Arduino 菜谱：RTC、低功耗、音频与触控](https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_arduino_peripherals_2)** —— RTC 时间管理、深度睡眠 / 轻度睡眠、I2S 麦克风录音，以及电容触控绘图（仅限 E1003）。
:::

## 介绍

reTerminal E 系列不仅仅是一块电子纸屏幕——每一款型号还提供板载 LED、蜂鸣器、三个用户按键、SHT4x 温湿度传感器、电池电压监测以及 microSD 卡槽。本菜谱收集了针对这些外设的可直接烧录的 Arduino 示例，外加一个端到端图像处理流程：从 SD 卡加载 JPEG / BMP / PNG 文件，为面板调色板进行抖动处理，并在电子纸屏幕上渲染——每种面板版本（E1001 BW、E1001 Gray4、E1002、E1003、E1004）都提供一份现成的示例草图。

本菜谱涵盖内容：

- **LED 控制**，通过 GPIO6（反向逻辑）。
- **蜂鸣器** 警报和音乐音调，使用 GPIO45。
- **三个用户按键**（KEY0 / KEY1 / KEY2），带消抖状态检测。
- 通过 I²C（GPIO19 SDA / GPIO20 SCL）使用 Sensirion 库的 **SHT4x 传感器**。
- 通过 ADC + 使能引脚电路实现的 **电池电压监测**。
- 共享 SPI 总线上的 **microSD 卡** 挂载 / 检测 / 文件列出。
- **高级示例——SD 卡图像处理流程**：从 SD 卡中选择任意 JPEG / BMP / PNG 文件，使用五种内置抖动算法之一进行处理，并以可配置的锚点、适配模式和缩放比例在面板上渲染。

### 所需材料

本菜谱适用于全部四款 reTerminal E 系列型号。请选择你手头的任意设备：

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

### 前置条件

在运行下面的任何示例之前，你应该已经完成：

- 已安装 **Arduino IDE**，并安装好 **ESP32 开发板包**，选择 **XIAO_ESP32S3** 开发板。
- 有一根可用的 **USB-C 数据线**，并选择了正确的串口。
- 已确认可以向设备烧录一个基础草图——如果你还没有完成，请参考 [Arduino 菜谱：电子纸显示](https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_arduino#环境准备) 中的环境搭建部分。

本菜谱中的所有草图都会通过 `Serial1` 在 **GPIO44（RX）/ GPIO43（TX）** 引脚上以 **115200 波特率** 输出调试信息。请打开 Arduino 串口监视器，并选择匹配的端口和波特率以便查看输出。

## LED 控制

reTerminal E 系列具有一个可通过 GPIO 控制的板载 LED。请注意，LED 逻辑是反向的（LOW = 亮，HIGH = 灭）。不同型号的 LED 引脚如下：

<div class="table-center">
	<table align="center">
		<tr>
			<th>型号</th>
			<th>LED GPIO</th>
		</tr>
		<tr>
			<td>E1001 / E1002</td>
			<td>GPIO6</td>
		</tr>
		<tr>
			<td>E1003</td>
			<td>GPIO16</td>
		</tr>
		<tr>
			<td>E1004</td>
			<td>GPIO48</td>
		</tr>
	</table>
</div>

<Tabs>
<TabItem value="e1001_e1002" label="E1001 / E1002" default>

```cpp
// reTerminal E1001/E1002 - LED Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define LED_PIN 6  // GPIO6 - Onboard LED (inverted logic)

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("LED Control Example");

  // Configure LED pin
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  // Turn LED ON (LOW because it's inverted)
  digitalWrite(LED_PIN, LOW);
  Serial1.println("LED ON");
  delay(1000);

  // Turn LED OFF (HIGH because it's inverted)
  digitalWrite(LED_PIN, HIGH);
  Serial1.println("LED OFF");
  delay(1000);
}
```

</TabItem>
<TabItem value="e1003" label="E1003">

```cpp
// reTerminal E1003 - LED Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define LED_PIN 16  // GPIO16 - Onboard LED (inverted logic)

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("LED Control Example");

  // Configure LED pin
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  // Turn LED ON (LOW because it's inverted)
  digitalWrite(LED_PIN, LOW);
  Serial1.println("LED ON");
  delay(1000);

  // Turn LED OFF (HIGH because it's inverted)
  digitalWrite(LED_PIN, HIGH);
  Serial1.println("LED OFF");
  delay(1000);
}
```

</TabItem>
<TabItem value="e1004" label="E1004">

```cpp
// reTerminal E1004 - LED Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define LED_PIN 48  // GPIO48 - Onboard LED (inverted logic)

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("LED Control Example");

  // Configure LED pin
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  // Turn LED ON (LOW because it's inverted)
  digitalWrite(LED_PIN, LOW);
  Serial1.println("LED ON");
  delay(1000);

  // Turn LED OFF (HIGH because it's inverted)
  digitalWrite(LED_PIN, HIGH);
  Serial1.println("LED OFF");
  delay(1000);
}
```

</TabItem>
</Tabs>

## 蜂鸣器控制

reTerminal E 系列在 GPIO45 上集成了一个蜂鸣器，可以产生各种音调和提示音。

```cpp
// reTerminal E Series - Buzzer Control Example

#define SERIAL_RX 44
#define SERIAL_TX 43
#define BUZZER_PIN 45  // GPIO45 - Buzzer

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("Buzzer Control Example");
}

void loop() {
  Serial1.println("Simple beep");
  tone(BUZZER_PIN, 1000, 100);  // 1kHz for 100ms
  delay(1000);

  Serial1.println("Double beep");
  for (int i = 0; i < 2; i++) {
    tone(BUZZER_PIN, 2000, 50);  // 2kHz for 50ms
    delay(100);
  }
  delay(900);

  Serial1.println("Long beep");
  tone(BUZZER_PIN, 800, 500);  // 800Hz for 500ms
  delay(1500);

  Serial1.println("Alarm sound");
  for (int i = 0; i < 5; i++) {
    tone(BUZZER_PIN, 1500, 100);
    delay(100);
    tone(BUZZER_PIN, 1000, 100);
    delay(100);
  }
  delay(2000);
}
```

**带音调的蜂鸣器**

<details>
<summary>点击展开完整蜂鸣器示例代码</summary>

```cpp
#define SERIAL_RX 44
#define SERIAL_TX 43
#define BUZZER_PIN 45  // GPIO7 - Buzzer

// Reference:  This list was adapted from the table located here:
//    http://www.phy.mtu.edu/~suits/notefreqs.html
#define  NOTE_C0  16.35  //C0
#define  NOTE_Db0 17.32  //C#0/Db0
#define  NOTE_D0  18.35  //D0
#define  NOTE_Eb0 19.45 //D#0/Eb0
#define  NOTE_E0  20.6  //E0
#define  NOTE_F0  21.83  //F0
#define  NOTE_Gb0 23.12  //F#0/Gb0
#define  NOTE_G0  24.5  //G0
#define  NOTE_Ab0 25.96  //G#0/Ab0
#define  NOTE_A0  27.5  //A0
#define  NOTE_Bb0 29.14  //A#0/Bb0
#define  NOTE_B0  30.87  //B0
#define  NOTE_C1  32.7  //C1
#define  NOTE_Db1 34.65  //C#1/Db1
#define  NOTE_D1  36.71  //D1
#define  NOTE_Eb1 38.89  //D#1/Eb1
#define  NOTE_E1  41.2  //E1
#define  NOTE_F1  43.65  //F1
#define  NOTE_Gb1 46.25  //F#1/Gb1
#define  NOTE_G1  49 //G1
#define  NOTE_Ab1 51.91  //G#1/Ab1
#define  NOTE_A1  55  //A1
#define  NOTE_Bb1 58.27  //A#1/Bb1
#define  NOTE_B1  61.74  //B1
#define  NOTE_C2  65.41  //C2 (Middle C)
#define  NOTE_Db2 69.3  //C#2/Db2
#define  NOTE_D2  73.42  //D2
#define  NOTE_Eb2 77.78  //D#2/Eb2
#define  NOTE_E2  82.41  //E2
#define  NOTE_F2  87.31  //F2
#define  NOTE_Gb2 92.5  //F#2/Gb2
#define  NOTE_G2  98  //G2
#define  NOTE_Ab2 103.83  //G#2/Ab2
#define  NOTE_A2  110  //A2
#define  NOTE_Bb2 116.54  //A#2/Bb2
#define  NOTE_B2  123.47  //B2
#define  NOTE_C3  130.81  //C3
#define  NOTE_Db3 138.59  //C#3/Db3
#define  NOTE_D3  146.83  //D3
#define  NOTE_Eb3 155.56  //D#3/Eb3
#define  NOTE_E3  164.81  //E3
#define  NOTE_F3  174.61  //F3
#define  NOTE_Gb3 185  //F#3/Gb3
#define  NOTE_G3  196  //G3
#define  NOTE_Ab3 207.65  //G#3/Ab3
#define  NOTE_A3  220  //A3
#define  NOTE_Bb3 233.08  //A#3/Bb3
#define  NOTE_B3  246.94  //B3
#define  NOTE_C4  261.63  //C4
#define  NOTE_Db4 277.18  //C#4/Db4
#define  NOTE_D4  293.66  //D4
#define  NOTE_Eb4 311.13  //D#4/Eb4
#define  NOTE_E4  329.63  //E4
#define  NOTE_F4  349.23  //F4
#define  NOTE_Gb4 369.99  //F#4/Gb4
#define  NOTE_G4  392  //G4
#define  NOTE_Ab4 415.3  //G#4/Ab4
#define  NOTE_A4  440  //A4
#define  NOTE_Bb4 466.16  //A#4/Bb4
#define  NOTE_B4  493.88  //B4
#define  NOTE_C5  523.25  //C5
#define  NOTE_Db5 554.37  //C#5/Db5
#define  NOTE_D5  587.33  //D5
#define  NOTE_Eb5 622.25  //D#5/Eb5
#define  NOTE_E5  659.26  //E5
#define  NOTE_F5  698.46  //F5
#define  NOTE_Gb5 739.99  //F#5/Gb5
#define  NOTE_G5  783.99  //G5
#define  NOTE_Ab5 830.61  //G#5/Ab5
#define  NOTE_A5  880  //A5
#define  NOTE_Bb5 932.33  //A#5/Bb5
#define  NOTE_B5  987.77  //B5
#define  NOTE_C6  1046.5  //C6
#define  NOTE_Db6 1108.73  //C#6/Db6
#define  NOTE_D6  1174.66  //D6
#define  NOTE_Eb6 1244.51  //D#6/Eb6
#define  NOTE_E6  1318.51  //E6
#define  NOTE_F6  1396.91  //F6
#define  NOTE_Gb6 1479.98  //F#6/Gb6
#define  NOTE_G6  1567.98  //G6
#define  NOTE_Ab6 1661.22  //G#6/Ab6
#define  NOTE_A6  1760  //A6
#define  NOTE_Bb6 1864.66  //A#6/Bb6
#define  NOTE_B6  1975.53  //B6
#define  NOTE_C7  2093  //C7
#define  NOTE_Db7 2217.46  //C#7/Db7
#define  NOTE_D7  2349.32  //D7
#define  NOTE_Eb7 2489.02  //D#7/Eb7
#define  NOTE_E7  2637.02  //E7
#define  NOTE_F7  2793.83  //F7
#define  NOTE_Gb7 2959.96  //F#7/Gb7
#define  NOTE_G7  3135.96  //G7
#define  NOTE_Ab7 3322.44  //G#7/Ab7
#define  NOTE_A7  3520  //A7
#define  NOTE_Bb7 3729.31  //A#7/Bb7
#define  NOTE_B7  3951.07  //B7
#define  NOTE_C8  4186.01  //C8
#define  NOTE_Db8 4434.92  //C#8/Db8
#define  NOTE_D8  4698.64  //D8
#define  NOTE_Eb8 4978.03  //D#8/Eb8

void buzzer_tone (float noteFrequency, long noteDuration, int silentDuration){
  if(silentDuration==0) {silentDuration=1;}

  tone(BUZZER_PIN, noteFrequency, noteDuration);
  delay(noteDuration);     // milliseconds
  noTone(BUZZER_PIN);      // stop the tone

  delay(silentDuration);
}

void setup() {
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("Buzzer Control Example");

  // Configure buzzer pin
  pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
  buzzer_tone(NOTE_C5, 80, 20);
  buzzer_tone(NOTE_E5, 80, 20);
  buzzer_tone(NOTE_G5, 80, 20);
  buzzer_tone(NOTE_C6, 150, 0);
  delay(30000);
}
```

</details>

**蜂鸣器功能：**

- `digitalWrite()`: 简单的开/关控制，用于基础蜂鸣
- `tone(pin, frequency, duration)`: 生成特定频率，用于旋律或警报
- `noTone(pin)`: 停止发声

**常见警报模式：**

- 单声蜂鸣：确认
- 双声蜂鸣：警告
- 三声蜂鸣：错误
- 持续蜂鸣：严重警报

## 用户按键

reTerminal E 系列配备了三个用户可编程按键，可用于各种控制用途。本节演示如何读取按键状态，并在 Arduino 中响应按键按下。

reTerminal E 系列有三个按键，通过 KEY0（GPIO3）、KEY1（GPIO4）和 KEY2（GPIO5）连接到 ESP32-S3。所有按键为低电平有效，这意味着按下时读取为 LOW，松开时读取为 HIGH。

这些按键在不同型号上的物理布局和功能有所不同：

<div class="table-center">
	<table align="center">
		<tr>
			<th>按键</th>
			<th>E1001 / E1002 / E1003</th>
			<th>E1004</th>
		</tr>
		<tr>
			<td><strong>KEY0</strong> (GPIO3)</td>
			<td>右侧按键（绿色按键）</td>
			<td>右方向按键（正面）</td>
		</tr>
		<tr>
			<td><strong>KEY1</strong> (GPIO4)</td>
			<td>中间按键</td>
			<td>左方向按键（正面）</td>
		</tr>
		<tr>
			<td><strong>KEY2</strong> (GPIO5)</td>
			<td>左侧按键</td>
			<td>刷新按键（左前方）</td>
		</tr>
	</table>
</div>

:::note
E1004 在设备的正面和背面都配有按键。上述 KEY0–KEY2 的连接对应的是前面板上的按键。
:::

### 基本按键读取示例

此示例演示如何检测按键按下，并在串口监视器中打印消息。

```cpp
// reTerminal E Series - Button Test
// Based on hardware schematic

// Define button pins according to schematic
const int BUTTON_KEY0 = 3;   // KEY0 - GPIO3
const int BUTTON_KEY1 = 4;   // KEY1 - GPIO4
const int BUTTON_KEY2 = 5;   // KEY2 - GPIO5

// Button state variables
bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

void setup() {
  // Initialize serial communication
  Serial1.begin(115200, SERIAL_8N1, 44, 43);
  while (!Serial1) {
    delay(10); // Wait for serial port to connect
  }

  Serial1.println("=================================");
  Serial1.println("reTerminal E Series - Button Test");
  Serial1.println("=================================");
  Serial1.println("Press any button to see output");
  Serial1.println();

  // Configure button pins as inputs
  // Hardware already has pull-up resistors, so use INPUT mode
  pinMode(BUTTON_KEY0, INPUT);
  pinMode(BUTTON_KEY1, INPUT);
  pinMode(BUTTON_KEY2, INPUT);

  // Read initial states
  lastKey0State = digitalRead(BUTTON_KEY0);
  lastKey1State = digitalRead(BUTTON_KEY1);
  lastKey2State = digitalRead(BUTTON_KEY2);

  Serial1.println("Setup complete. Ready to detect button presses...");
}

void loop() {
  // Read current button states
  bool key0State = digitalRead(BUTTON_KEY0);
  bool key1State = digitalRead(BUTTON_KEY1);
  bool key2State = digitalRead(BUTTON_KEY2);

  // Check KEY0
  if (key0State != lastKey0State) {
    if (key0State == LOW) {
      Serial1.println("KEY0 (GPIO3) pressed!");
    } else {
      Serial1.println("KEY0 (GPIO3) released!");
    }
    lastKey0State = key0State;
    delay(50); // Debounce delay
  }

  // Check KEY1
  if (key1State != lastKey1State) {
    if (key1State == LOW) {
      Serial1.println("KEY1 (GPIO4) pressed!");
    } else {
      Serial1.println("KEY1 (GPIO4) released!");
    }
    lastKey1State = key1State;
    delay(50); // Debounce delay
  }

  // Check KEY2
  if (key2State != lastKey2State) {
    if (key2State == LOW) {
      Serial1.println("KEY2 (GPIO5) pressed!");
    } else {
      Serial1.println("KEY2 (GPIO5) released!");
    }
    lastKey2State = key2State;
    delay(50); // Debounce delay
  }

  delay(10); // Small delay to prevent excessive CPU usage
}
```

**代码工作原理：**

1. **引脚定义**：我们为每个按键的 GPIO 引脚号定义常量。

2. **引脚配置**：在 `setup()` 中，将每个按键引脚配置为 `INPUT`。

3. **按键检测**：在 `loop()` 中，持续使用 `digitalRead()` 检查每个按键的状态。当按键被按下时，引脚读取为 LOW。

4. **消抖**：在每次按键按下后加入简单的 200ms 延时，以防止由于机械抖动导致一次按下被多次检测。

5. **串口输出**：每次按键按下都会向串口监视器发送一条消息，用于调试和验证。

---

**步骤 1.** 将代码上传到你的 reTerminal E 系列设备。

**步骤 2.** 在 Arduino IDE 中打开串口监视器（Tools > Serial Monitor）。

**步骤 3.** 将波特率设置为 115200。

**步骤 4.** 依次按下每个按键，并在串口监视器中观察输出。

按下按键时的预期输出：

```
=================================
reTerminal E Series - Button Test
=================================
Press any button to see output

KEY0 (GPIO3) pressed!
KEY0 (GPIO3) released!
KEY1 (GPIO4) pressed!
KEY1 (GPIO4) released!
KEY2 (GPIO5) pressed!
KEY2 (GPIO5) released!
```

## 环境传感器（SHT4x）

reTerminal E 系列集成了一个通过 I2C 连接的 SHT4x 温湿度传感器。

### 安装所需库

通过 Arduino 库管理器（**Tools > Manage Libraries...**）安装两个库：

1. 搜索并安装 "**Sensirion I2C SHT4x**"
2. 搜索并安装 "**Sensirion Core**"（依赖库）

### 基本温湿度示例

```cpp
// reTerminal E Series - SHT40 Temperature & Humidity Sensor Example

#include <Wire.h>
#include <SensirionI2cSht4x.h>

// Serial configuration for reTerminal E Series
#define SERIAL_RX 44
#define SERIAL_TX 43

// I2C pins for reTerminal E Series
#define I2C_SDA 19
#define I2C_SCL 20

// Create sensor object
SensirionI2cSht4x sht4x;

void setup() {
    // Initialize Serial1 for reTerminal E Series
    Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
    while (!Serial1) {
        delay(10);
    }

    Serial1.println("SHT4x Basic Example");

    // Initialize I2C with custom pins
    Wire.begin(I2C_SDA, I2C_SCL);

    uint16_t error;
    char errorMessage[256];

    // Initialize the sensor
    sht4x.begin(Wire, 0x44);

    // Read and print serial number
    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);

    if (error) {
        Serial1.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial1.println(errorMessage);
    } else {
        Serial1.print("Serial Number: ");
        Serial1.println(serialNumber);
        Serial1.println();
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(5000);  // Wait 5 seconds between measurements

    float temperature;
    float humidity;

    // Measure temperature and humidity with high precision
    error = sht4x.measureHighPrecision(temperature, humidity);

    if (error) {
        Serial1.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial1.println(errorMessage);
    } else {
        Serial1.print("Temperature: ");
        Serial1.print(temperature);
        Serial1.print("°C\t");
        Serial1.print("Humidity: ");
        Serial1.print(humidity);
        Serial1.println("%");
    }
}
```

**Setup 函数：**

1. **串口初始化**：使用 `Serial1`，并将引脚 44（RX）和 43（TX）配置为 reTerminal E 系列专用串口
2. **I2C 初始化**：使用引脚 19（SDA）和 20（SCL）配置 I2C
3. **传感器初始化**：调用 `sht4x.begin(Wire, 0x44)` 在地址 0x44 处初始化 SHT4x 传感器
4. **序列号读取**：读取并显示传感器的唯一序列号以进行验证

**Loop 函数：**

1. **延时**：在两次测量之间等待 5 秒，以避免过度采样
2. **测量**：使用 `measureHighPrecision()` 进行高精度读数（耗时约 8.3ms）
3. **错误处理**：检查是否有错误，并使用 `errorToString()` 将其转换为可读消息
4. **显示结果**：以摄氏度打印温度，并打印相对湿度百分比

**预期输出**

```
SHT4x Basic Example
Serial Number: 331937553

Temperature: 27.39°C Humidity: 53.68%
Temperature: 27.40°C Humidity: 53.51%
Temperature: 27.38°C Humidity: 53.37%
```

## 电池管理系统

reTerminal E 系列通过带分压电路的 ADC 引脚实现电池电压监测功能。

:::note

reTerminal E1003 上的 BATTERY_ENABLE_PIN 与 E1001/E1002/E1004 不同。

- E1001/E1002/E1004: BATTERY_ENABLE_PIN → GPIO21
- E1003: BATTERY_ENABLE_PIN → IO40
在不同 reTerminal E10xx 型号之间移植示例时，请相应更新你的代码。

:::

### 简单电池电压监测

```cpp
// reTerminal E Series - Simple Battery Voltage Reading

// Serial configuration
#define SERIAL_RX 44
#define SERIAL_TX 43

// Battery monitoring pins
#define BATTERY_ADC_PIN 1      // GPIO1 - Battery voltage ADC
#define BATTERY_ENABLE_PIN 21  // GPIO21 - Battery monitoring enable

void setup() {
  // Initialize serial
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10);
  }

  Serial1.println("Battery Voltage Monitor");

  // Configure battery monitoring enable pin
  pinMode(BATTERY_ENABLE_PIN, OUTPUT);
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);  // Enable battery monitoring

  // Configure ADC
  analogReadResolution(12);  // 12-bit resolution
  analogSetPinAttenuation(BATTERY_ADC_PIN, ADC_11db);

  delay(100);  // Allow circuit to stabilize
}

void loop() {
  // Enable battery monitoring
  digitalWrite(BATTERY_ENABLE_PIN, HIGH);
  delay(5);

  // Read voltage in millivolts
  int mv = analogReadMilliVolts(BATTERY_ADC_PIN);

  // Disable battery monitoring
  digitalWrite(BATTERY_ENABLE_PIN, LOW);

  // Calculate actual battery voltage (2x due to voltage divider)
  float batteryVoltage = (mv / 1000.0) * 2;

  // Print voltage
  Serial1.print("Battery: ");
  Serial1.print(batteryVoltage, 2);
  Serial1.println(" V");

  delay(2000);
}
```

**代码说明：**

- GPIO1 通过 ADC 读取分压后的电池电压
- GPIO21 使能电池监控电路
- 由于使用了分压电路，实际电池电压是测量电压的两倍
- 对于完全充电的锂聚合物电池，电压大约为 4.2V
- 当电池电量低时，电压会下降到大约 3.3V

**预期输出**

```
Battery Voltage Monitor

Battery: 4.18 V
Battery: 4.19 V
Battery: 4.18 V
```

## 使用 MicroSD 卡

对于需要额外存储空间的应用，例如数码相框或数据记录，reTerminal E 系列配备了 MicroSD 卡槽。

如果你计划将设备用作数码相框或需要额外存储空间，请插入一张 microSD 卡。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
reTerminal E 系列仅支持容量不超过 64GB 且使用 **Fat32** 文件系统格式化的 MicroSD 卡。
:::

### 基本 SD 卡操作：列出文件

本示例演示如何初始化 SD 卡、检测其插入或移除状态，并列出其根目录中的所有文件和文件夹。SD 卡电源使能引脚（`SD_EN_PIN`）在不同型号之间有所不同：

<div class="table-center">
	<table align="center">
		<tr>
			<th>型号</th>
			<th>SD_EN_PIN</th>
			<th>GPIO</th>
		</tr>
		<tr>
			<td>E1001 / E1002 / E1004</td>
			<td>16</td>
			<td>GPIO16</td>
		</tr>
		<tr>
			<td>E1003</td>
			<td>39</td>
			<td>GPIO39</td>
		</tr>
	</table>
</div>

所有其他 SD 卡引脚（DET、CS、MOSI、MISO、SCK）在各型号之间是相同的。请选择与你的设备对应的选项卡，并将代码复制到 Arduino IDE 草稿中。

<Tabs>
<TabItem value="e1001_e1002_e1004" label="E1001 / E1002 / E1004" default>

<details>
<summary>点击展开完整的 SD 卡示例代码</summary>

```cpp
#include <SD.h>
#include <SPI.h>

// SD Card Pin Definitions
#define SD_EN_PIN   16  // Power enable for the SD card slot
#define SD_DET_PIN  15  // Card detection pin
#define SD_CS_PIN   14  // Chip Select for the SD card
#define SD_MOSI_PIN 9   // Shared with ePaper Display
#define SD_MISO_PIN 8
#define SD_SCK_PIN  7   // Shared with ePaper Display

// Serial configuration for reTerminal E Series
#define SERIAL_RX 44
#define SERIAL_TX 43

// Use the HSPI bus for the SD card to avoid conflict with other peripherals
SPIClass spiSD(HSPI);

// Global variables to track SD card state
bool sdMounted = false;
bool lastCardPresent = false;
unsigned long lastCheckMs = 0;
const unsigned long checkIntervalMs = 1000; // Check for card changes every second

// Checks if a card is physically inserted.
// The detection pin is LOW when a card is present.
bool isCardInserted() {
  return digitalRead(SD_DET_PIN) == LOW;
}

// Helper function to print indentation for directory listing
void printIndent(uint8_t level) {
  for (uint8_t i = 0; i < level; ++i) {
    Serial1.print("  ");
  }
}

// Recursively lists files and directories
void listDir(File dir, uint8_t level) {
  while (true) {
    File entry = dir.openNextFile();
    if (!entry) {
      // No more entries in this directory
      break;
    }

    printIndent(level);
    if (entry.isDirectory()) {
      Serial1.print("[DIR]  ");
      Serial1.println(entry.name());
      // Recurse into the subdirectory
      listDir(entry, level + 1);
    } else {
      // It's a file, print its name and size
      Serial1.print("[FILE] ");
      Serial1.print(entry.name());
      Serial1.print("  ");
      Serial1.print(entry.size());
      Serial1.println(" bytes");
    }
    entry.close();
  }
}

// Opens the root directory and starts the listing process
void listRoot() {
  File root = SD.open("/");
  if (!root) {
    Serial1.println("[SD] Failed to open root directory.");
    return;
  }
  if (!root.isDirectory()) {
    Serial1.println("[SD] Root is not a directory.");
    root.close();
    return;
  }
  Serial1.println("[SD] Listing files in /");
  listDir(root, 0);
  root.close();
}

// Initializes the SPI bus and mounts the SD card
bool mountSD() {
  // Enable power to the SD card slot
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  delay(5);

  // Initialize the HSPI bus with the correct pins for the SD card
  spiSD.end(); // Guard against repeated begin calls
  spiSD.begin(SD_SCK_PIN, SD_MISO_PIN, SD_MOSI_PIN, SD_CS_PIN);

  // Attempt to mount the SD card file system
  if (!SD.begin(SD_CS_PIN, spiSD)) {
    Serial1.println("[SD] MicroSD initialization failed. Check card formatting.");
    return false;
  }
  Serial1.println("[SD] MicroSD mounted successfully.");
  return true;
}

// Unmounts the SD card by releasing the SPI bus
void unmountSD() {
  SD.end();
  spiSD.end();
  Serial1.println("[SD] MicroSD unmounted.");
}

void setup() {
  // Start the secondary serial port for output
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10); // Wait for Serial1 to be ready
  }

  // Set up the card detection pin with an internal pull-up resistor
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  // Set up the power enable pin
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);

  // Check for a card at startup
  lastCardPresent = isCardInserted();
  if (lastCardPresent) {
    sdMounted = mountSD();
    if (sdMounted) {
      listRoot(); // If mounted, list files
    }
  } else {
    Serial1.println("[SD] No card detected at startup. Please insert a card.");
  }
}

void loop() {
  // Periodically check for card insertion or removal without blocking the loop
  unsigned long now = millis();
  if (now - lastCheckMs >= checkIntervalMs) {
    lastCheckMs = now;

    bool present = isCardInserted();
    if (present != lastCardPresent) {
      lastCardPresent = present; // Update the state

      if (present) {
        Serial1.println("\n[SD] Card inserted.");
        if (!sdMounted) {
          sdMounted = mountSD();
        }
        if (sdMounted) {
          listRoot(); // List files upon insertion
        }
      } else {
        Serial1.println("\n[SD] Card removed.");
        if (sdMounted) {
          unmountSD();
          sdMounted = false;
        }
      }
    }
  }
  // You can place other non-blocking code here
}
```

</details>

</TabItem>
<TabItem value="e1003" label="E1003">

<details>
<summary>点击展开完整的 SD 卡示例代码</summary>

```cpp
#include <SD.h>
#include <SPI.h>

// SD Card Pin Definitions
#define SD_EN_PIN   39  // Power enable for the SD card slot (E1003)
#define SD_DET_PIN  15  // Card detection pin
#define SD_CS_PIN   14  // Chip Select for the SD card
#define SD_MOSI_PIN 9   // Shared with ePaper Display
#define SD_MISO_PIN 8
#define SD_SCK_PIN  7   // Shared with ePaper Display

// Serial configuration for reTerminal E Series
#define SERIAL_RX 44
#define SERIAL_TX 43

// Use the HSPI bus for the SD card to avoid conflict with other peripherals
SPIClass spiSD(HSPI);

// Global variables to track SD card state
bool sdMounted = false;
bool lastCardPresent = false;
unsigned long lastCheckMs = 0;
const unsigned long checkIntervalMs = 1000; // Check for card changes every second

// Checks if a card is physically inserted.
// The detection pin is LOW when a card is present.
bool isCardInserted() {
  return digitalRead(SD_DET_PIN) == LOW;
}

// Helper function to print indentation for directory listing
void printIndent(uint8_t level) {
  for (uint8_t i = 0; i < level; ++i) {
    Serial1.print("  ");
  }
}

// Recursively lists files and directories
void listDir(File dir, uint8_t level) {
  while (true) {
    File entry = dir.openNextFile();
    if (!entry) {
      // No more entries in this directory
      break;
    }

    printIndent(level);
    if (entry.isDirectory()) {
      Serial1.print("[DIR]  ");
      Serial1.println(entry.name());
      // Recurse into the subdirectory
      listDir(entry, level + 1);
    } else {
      // It's a file, print its name and size
      Serial1.print("[FILE] ");
      Serial1.print(entry.name());
      Serial1.print("  ");
      Serial1.print(entry.size());
      Serial1.println(" bytes");
    }
    entry.close();
  }
}

// Opens the root directory and starts the listing process
void listRoot() {
  File root = SD.open("/");
  if (!root) {
    Serial1.println("[SD] Failed to open root directory.");
    return;
  }
  if (!root.isDirectory()) {
    Serial1.println("[SD] Root is not a directory.");
    root.close();
    return;
  }
  Serial1.println("[SD] Listing files in /");
  listDir(root, 0);
  root.close();
}

// Initializes the SPI bus and mounts the SD card
bool mountSD() {
  // Enable power to the SD card slot
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);
  delay(5);

  // Initialize the HSPI bus with the correct pins for the SD card
  spiSD.end(); // Guard against repeated begin calls
  spiSD.begin(SD_SCK_PIN, SD_MISO_PIN, SD_MOSI_PIN, SD_CS_PIN);

  // Attempt to mount the SD card file system
  if (!SD.begin(SD_CS_PIN, spiSD)) {
    Serial1.println("[SD] MicroSD initialization failed. Check card formatting.");
    return false;
  }
  Serial1.println("[SD] MicroSD mounted successfully.");
  return true;
}

// Unmounts the SD card by releasing the SPI bus
void unmountSD() {
  SD.end();
  spiSD.end();
  Serial1.println("[SD] MicroSD unmounted.");
}

void setup() {
  // Start the secondary serial port for output
  Serial1.begin(115200, SERIAL_8N1, SERIAL_RX, SERIAL_TX);
  while (!Serial1) {
    delay(10); // Wait for Serial1 to be ready
  }

  // Set up the card detection pin with an internal pull-up resistor
  pinMode(SD_DET_PIN, INPUT_PULLUP);
  // Set up the power enable pin
  pinMode(SD_EN_PIN, OUTPUT);
  digitalWrite(SD_EN_PIN, HIGH);

  // Check for a card at startup
  lastCardPresent = isCardInserted();
  if (lastCardPresent) {
    sdMounted = mountSD();
    if (sdMounted) {
      listRoot(); // If mounted, list files
    }
  } else {
    Serial1.println("[SD] No card detected at startup. Please insert a card.");
  }
}

void loop() {
  // Periodically check for card insertion or removal without blocking the loop
  unsigned long now = millis();
  if (now - lastCheckMs >= checkIntervalMs) {
    lastCheckMs = now;

    bool present = isCardInserted();
    if (present != lastCardPresent) {
      lastCardPresent = present; // Update the state

      if (present) {
        Serial1.println("\n[SD] Card inserted.");
        if (!sdMounted) {
          sdMounted = mountSD();
        }
        if (sdMounted) {
          listRoot(); // List files upon insertion
        }
      } else {
        Serial1.println("\n[SD] Card removed.");
        if (sdMounted) {
          unmountSD();
          sdMounted = false;
        }
      }
    }
  }
  // You can place other non-blocking code here
}
```

</details>

</TabItem>
</Tabs>

#### 代码说明

- **引脚定义：** 代码首先定义了用于 MicroSD 卡槽的 GPIO 引脚。请注意，SPI 引脚（`MOSI`、`SCK`）与电子纸显示屏共享，但通过单独的片选引脚（`SD_CS_PIN`）和独立的 SPI 实例（`spiSD`），可以确保它们能够独立使用。
- **SPI 初始化：** 我们实例化了一个新的 SPI 对象 `spiSD(HSPI)`，以使用 ESP32 的第二个硬件 SPI 控制器（HSPI）。这是避免与其他 SPI 设备冲突的最佳实践。
- **卡检测：** `isCardInserted()` 函数读取 `SD_DET_PIN`。在 reTerminal 硬件上，当卡存在时，该引脚被拉低。
- **挂载/卸载：** `mountSD()` 函数为卡供电，使用正确的引脚配置 HSPI 总线，并调用 `SD.begin()` 初始化文件系统。`unmountSD()` 用于释放资源。
- **文件列出：** `listRoot()` 打开根目录（`/`），而 `listDir()` 是一个递归函数，用于遍历文件系统，打印所有文件和目录的名称。
- **`setup()`：** 初始化用于输出的 `Serial1`，配置卡检测引脚，并在设备上电时执行一次初始检查，以查看是否已经插入了卡。
- **`loop()`：** 代码没有持续不断地检查卡，而是使用非阻塞定时器（`millis()`）每秒检查一次卡状态是否发生变化。如果检测到变化（插入或移除卡），则挂载或卸载该卡，并将状态打印到串口监视器。

#### 预期结果

1. 将代码上传到你的 reTerminal。
2. 打开 Arduino IDE 的串口监视器（**Tools > Serial Monitor**）。
3. 确保波特率设置为 **115200**。

你将看到与以下操作相对应的输出：

- **启动时没有插卡：** 监视器会打印 `[SD] No card detected at startup...`
- **当你插入一张卡时：** 监视器会打印 `[SD] Card inserted.`，随后会完整列出卡上所有文件和目录。
- **当你移除该卡时：** 监视器会打印 `[SD] Card removed.`

```
[FILE] live.0.shadowIndexGroups  6 bytes
[FILE] reverseStore.updates  1 bytes
[DIR]  journals.repair
[FILE] Cab.modified  0 bytes
[FILE] live.1.indexPositionTable  8192 bytes
[FILE] live.1.indexTermIds  8192 bytes
[FILE] tmp.spotlight.loc  2143 bytes
[FILE] live.1.shadowIndexTermIds  624 bytes
[FILE] live.1.indexArrays  65536 bytes
[FILE] live.1.shadowIndexArrays  65536 bytes
[FILE] live.1.indexHead  4096 bytes
[FILE] live.1.indexPostings  4096 bytes
```

## 高级示例：SD 卡 → 电子纸图像流水线

这是 reTerminal E 系列的旗舰示例。它从 microSD 卡中加载一个 **JPEG / BMP / PNG** 文件，将其送入可配置的抖动处理流水线，并将结果渲染到电子纸面板上——同时提供 **抖动算法**、**亮度**、**锚点位置** 和 **适配 / 缩放** 等调节选项。相同的代码结构适用于全部四种面板型号；每个型号变化的只有输出色深（1 位黑白、2 位 4 级灰度、4 位 16 级灰度或 6 色 E6）。

**Seeed_GFX** 库中提供了五个可直接烧录的示例草图——选择与你的硬件匹配的那个：

### 示例索引

<div class="table-center">
  <table>
    <tr>
      <th>设备</th>
      <th>示例草图</th>
      <th>面板分辨率</th>
      <th>输出调色板</th>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1001（BW）</td>
      <td><code>reTerminal_E1001_SDcard_BW</code></td>
      <td>800 × 480</td>
      <td>1 位黑 / 白</td>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1001（Gray4）</td>
      <td><code>reTerminal_E1001_SDcard_Gray4</code></td>
      <td>800 × 480</td>
      <td>2 位 4 级灰度</td>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1002</td>
      <td><code>reTerminal_E1002_SDcard_Color6</code></td>
      <td>800 × 480</td>
      <td>6 色（B / W / R / Y / G / B）</td>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1003</td>
      <td><code>reTerminal_E1003_SDcard_Gray16</code></td>
      <td>1872 × 1404</td>
      <td>4 位 16 级灰度</td>
    </tr>
    <tr>
      <td>reTerminal&nbsp;E1004</td>
      <td><code>reTerminal_E1004_SDcard_Color6</code></td>
      <td>1200 × 1600</td>
      <td>6 色（B / W / R / Y / G / B）</td>
    </tr>
  </table>
</div>

这五个示例草图都位于 [`Seeed_GFX/examples/ePaper/reTerminal_SDcard_Bitmap/`](https://github.com/Seeed-Studio/Seeed_GFX/tree/master/examples/ePaper/reTerminal_SDcard_Bitmap) 下。每个文件夹都是**完全自包含**的——无需安装额外库，只需打开并烧录即可。

### 流水线的工作内容

<svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 1050 300" 
  width="100%" 
  height="auto" 
  style={{ 
    backgroundColor: '#ffffff', 
    borderRadius: '12px', 
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
    padding: '20px',
    marginBottom: '20px'
  }}
>
  {/* Definitions for markers and filters */}
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
    </marker>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.05" />
    </filter>
  </defs>

  {/* Title */}
  <text x="525" y="40" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill="#1e293b" textAnchor="middle">
    图像处理流水线：microSD 到电子纸
  </text>

  {/* ================= NODES ================= */}

  {/* Node 1: microSD */}
  <g transform="translate(20, 100)">
    <rect x="0" y="0" width="140" height="90" rx="8" fill="#f8fafc" stroke="#3b82f6" strokeWidth="2" filter="url(#shadow)" />
    <path d="M55 15 v14 a2 2 0 0 0 2 2 h12 a2 2 0 0 0 2-2 V19 l-4-4 H57 a2 2 0 0 0-2 2z m4 2 h2 v4 h-2 v-4z m4 0 h2 v4 h-2 v-4z" fill="#3b82f6" />
    <text x="70" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">microSD</text>
    <text x="70" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">JPG / BMP / PNG</text>
  </g>

  {/* Node 2: PSRAM */}
  <g transform="translate(240, 100)">
    <rect x="0" y="0" width="140" height="90" rx="8" fill="#f8fafc" stroke="#ef4444" strokeWidth="2" filter="url(#shadow)" />
    <path d="M57 17 v12 h20 V17 H57z m2 2 h16 v8 H59 v-8z m-4 2 h-2 v2 h2 v-2z m0 4 h-2 v2 h2 v-2z m24-4 h2 v2 h-2 v-2z m0 4 h2 v2 h-2 v-2z" fill="#ef4444" />
    <text x="70" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">PSRAM</text>
    <text x="70" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">RGB888</text>
  </g>

  {/* Node 3: Scaled Buffer */}
  <g transform="translate(460, 100)">
    <rect x="0" y="0" width="140" height="90" rx="8" fill="#f8fafc" stroke="#f59e0b" strokeWidth="2" filter="url(#shadow)" />
    <path d="M67 15 l2.3 2.3 -2.89 2.87 1.42 1.42 L70.7 18.7 73 21 V15 h-6z M55 21 l2.3-2.3 2.87 2.89 1.42-1.42 L58.7 17.3 61 15 h-6 v6z m6 12 l-2.3-2.3 2.89-2.87 -1.42-1.42 L57.3 29.3 55 27 v6h6z m12-6 l-2.3 2.3 -2.87-2.89 -1.42 1.42 2.89 2.87 L73 33 v-6z" fill="#f59e0b" />
    <text x="70" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">缩放缓冲区</text>
    <text x="70" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">scaled RGB888</text>
  </g>

  {/* Node 4: Palette Buffer */}
  <g transform="translate(680, 100)">
    <rect x="0" y="0" width="140" height="90" rx="8" fill="#f8fafc" stroke="#8b5cf6" strokeWidth="2" filter="url(#shadow)" />
    <path d="M70 14 c-5.52 0-10 4.48-10 10 s4.48 10 10 10 c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.17-.64-1.6-.39-.41-.61-.98-.61-1.6 0-1.38 1.12-2.5 2.5-2.5 h1.5 c2.21 0 4-1.79 4-4 0-3.86-4.48-7-10-7z m-4 7 c-.83 0-1.5-.67-1.5-1.5 s.67-1.5 1.5-1.5 s1.5 .67 1.5 1.5 s-.67 1.5-1.5 1.5z m3.5-3 c-.83 0-1.5-.67-1.5-1.5 s.67-1.5 1.5-1.5 s1.5 .67 1.5 1.5 s-.67 1.5-1.5 1.5z m3.5 3 c-.83 0-1.5-.67-1.5-1.5 s.67-1.5 1.5-1.5 s1.5 .67 1.5 1.5 s-.67 1.5-1.5 1.5z m3.5 3 c-.83 0-1.5-.67-1.5-1.5 s.67-1.5 1.5-1.5 s1.5 .67 1.5 1.5 s-.67 1.5-1.5 1.5z" fill="#8b5cf6" />
    <text x="70" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">调色板缓冲区</text>
    <text x="70" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">面板调色板索引</text>
  </g>

  {/* Node 5: ePaper */}
  <g transform="translate(900, 100)">
    <rect x="0" y="0" width="130" height="90" rx="8" fill="#f8fafc" stroke="#10b981" strokeWidth="2" filter="url(#shadow)" />
    <path d="M77 15 H53 c-1.1 0-2 .9-2 2 v14 c0 1.1 .9 2 2 2 h24 c1.1 0 2-.9 2-2 V17 c0-1.1-.9-2-2-2z m0 16 H53 V17 h24 v14z" fill="#10b981" />
    <text x="65" y="55" fontFamily="sans-serif" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle">电子纸</text>
    <text x="65" y="75" fontFamily="sans-serif" fontSize="12" fill="#475569" textAnchor="middle">面板更新</text>
  </g>

  {/* ================= ARROWS & LABELS ================= */}

  {/* Arrow 1: Decode */}
  <g>
    <line x1="160" y1="145" x2="232" y2="145" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
    <text x="196" y="135" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#3b82f6" textAnchor="middle">decode</text>
    <text x="196" y="165" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">pngle / jpeg / bmp</text>
    {/* Animated Data Packet */}
    <circle cy="145" r="4" fill="#3b82f6">
      <animate attributeName="cx" from="160" to="230" dur="1.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.5s" repeatCount="indefinite" />
    </circle>
  </g>

  {/* Arrow 2: Resize */}
  <g>
    <line x1="380" y1="145" x2="452" y2="145" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
    <text x="416" y="135" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#ef4444" textAnchor="middle">resize</text>
    <text x="416" y="165" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">nearest neighbor</text>
    {/* Animated Data Packet */}
    <circle cy="145" r="4" fill="#ef4444">
      <animate attributeName="cx" from="380" to="450" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.5s" begin="0.3s" repeatCount="indefinite" />
    </circle>
  </g>

  {/* Arrow 3: Dither */}
  <g>
    <line x1="600" y1="145" x2="672" y2="145" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
    <text x="636" y="135" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#f59e0b" textAnchor="middle">dither</text>
    <text x="636" y="165" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">Bayer / FS / ...</text>
    {/* Animated Data Packet */}
    <circle cy="145" r="4" fill="#f59e0b">
      <animate attributeName="cx" from="600" to="670" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.5s" begin="0.6s" repeatCount="indefinite" />
    </circle>
  </g>

  {/* Arrow 4: Push */}
  <g>
    <line x1="820" y1="145" x2="892" y2="145" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4,4" markerEnd="url(#arrowhead)" />
    <text x="856" y="135" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#8b5cf6" textAnchor="middle">push</text>
    <text x="856" y="165" fontFamily="sans-serif" fontSize="10" fill="#64748b" textAnchor="middle">Sprite</text>
    {/* Animated Data Packet */}
    <circle cy="145" r="4" fill="#8b5cf6">
      <animate attributeName="cx" from="820" to="890" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.5s" begin="0.9s" repeatCount="indefinite" />
    </circle>
  </g>

  {/* ePaper Screen Update Animation (Pulse) */}
  <rect x="900" y="100" width="130" height="90" rx="8" fill="none" stroke="#10b981" strokeWidth="4" opacity="0">
    <animate attributeName="opacity" values="0;0.6;0" keyTimes="0;0.5;1" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
    <animate attributeName="strokeWidth" values="4;8;4" keyTimes="0;0.5;1" dur="1.5s" begin="1.2s" repeatCount="indefinite" />
  </rect>

</svg>

1. **解码（Decode）** — 通过魔数（`FF D8`、`BM` 或 `89 50 4E 47`）检测文件格式。具有误导性的扩展名会被自动纠正，并记录一条警告日志。
2. **缩放（Resize）**（可选）— 基于 `DISPLAY_FIT` / `DISPLAY_SCALE` 进行最近邻降采样。
3. **抖动（Dither）** — 五种算法之一将 24 位 RGB 量化为面板的微小调色板（2 / 4 / 6 / 16 级）。
4. **推送（Push）** — 量化后的缓冲区被写入 ePaper Sprite 的锚点位置，然后由 `epaper.update()` 将其时钟输出到面板。

### 步骤 1 — 打开适用于你型号的示例

在 Arduino IDE 中：**File → Examples → Seeed_GFX → ePaper → reTerminal_SDcard_Bitmap →** *（选择你的型号）*。

<Tabs groupId="reterm-model">
<TabItem value="e1001-bw" label="E1001 BW" default>

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1001_SDcard_BW/
    ├── reTerminal_E1001_SDcard_BW.ino   ← config + setup() + loop()
    ├── dither.{h,cpp}                   ← BW dither algorithms
    ├── image_loader.{h,cpp}             ← JPEG / BMP / PNG decoder
    ├── pngle.{h,c} + miniz.{h,c}        ← PNG backend (MIT, vendored)
    └── driver.h                         ← selects Setup520 (UC8179, 800x480)
```

</TabItem>
<TabItem value="e1001-gray4" label="E1001 Gray4">

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1001_SDcard_Gray4/
    ├── reTerminal_E1001_SDcard_Gray4.ino
    ├── dither.{h,cpp}                   ← Gray4 dither algorithms
    ├── image_loader.{h,cpp}
    ├── pngle.{h,c} + miniz.{h,c}
    └── driver.h                         ← Setup520 + initGrayMode(4)
```

</TabItem>
<TabItem value="e1002" label="E1002">

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1002_SDcard_Color6/
    ├── reTerminal_E1002_SDcard_Color6.ino
    ├── dither.{h,cpp}                   ← 6-color dither algorithms
    ├── image_loader.{h,cpp}
    ├── pngle.{h,c} + miniz.{h,c}
    └── driver.h                         ← Setup521 (ED2208, 800x480 E6)
```

</TabItem>
<TabItem value="e1003" label="E1003">

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1003_SDcard_Gray16/
    ├── reTerminal_E1003_SDcard_Gray16.ino
    ├── dither.{h,cpp}                   ← Gray16 dither algorithms
    ├── image_loader.{h,cpp}
    ├── pngle.{h,c} + miniz.{h,c}
    └── driver.h                         ← Setup522 + initGrayMode(16)
```

</TabItem>
<TabItem value="e1004" label="E1004">

```text
reTerminal_SDcard_Bitmap/
└── reTerminal_E1004_SDcard_Color6/
    ├── reTerminal_E1004_SDcard_Color6.ino
    ├── dither.{h,cpp}                   ← 6-color dither algorithms
    ├── image_loader.{h,cpp}
    ├── pngle.{h,c} + miniz.{h,c}
    └── driver.h                         ← Setup523 (T133A01, 1200x1600 E6)
```

</TabItem>
</Tabs>

:::tip 自包含示例草图
你不需要从 Arduino Library Manager 安装 pngle、miniz 或任何其他库。PNG 解码器源码就放在**每个示例文件夹内部**，因此 Arduino IDE 在编译草图时会自动将其包含进来。
:::

### 完整草图代码

每个变体的完整 `.ino` 源码如下所示。所有用户可调节的设置（图像路径、抖动算法、锚点、适配/缩放）都位于顶部附近的 **USER CONFIGURATION** 配置块中——文件的其余部分是通常不需要编辑的样板代码。

<Tabs groupId="reterm-model">
<TabItem value="e1001-bw" label="E1001 BW" default>

<details>
<summary>点击此处预览完整代码 — reTerminal_E1001_SDcard_BW.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup520_Seeed_reTerminal_E1001 -- check driver.h selects BOARD_SCREEN_COMBO 520"
#endif

EPaper epaper;

static constexpr int    PIN_SD_SCK   = 7;
static constexpr int    PIN_SD_MISO  = 8;
static constexpr int    PIN_SD_MOSI  = 9;
static constexpr int    PIN_SD_CS    = 14;
static constexpr int    PIN_SD_EN    = 16;
static constexpr int    PIN_SD_DET   = 15;
static constexpr int    PIN_DBG_RX   = 44;
static constexpr int    PIN_DBG_TX   = 43;
#define LOG       Serial1
#define TAG       "[e1001-bw]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
static const DitherMethod DITHER_METHOD = DITHER_FS;
// 1.0 = neutral, >1.0 darkens, <1.0 brightens
static const float DITHER_GAMMA = 1.0f;
// false = normal, true = invert black/white
static const bool DITHER_INVERT = false;

// ANCHOR_TOP_LEFT / ANCHOR_TOP_CENTER / ANCHOR_TOP_RIGHT /
// ANCHOR_MIDDLE_LEFT / ANCHOR_CENTER / ANCHOR_MIDDLE_RIGHT /
// ANCHOR_BOTTOM_LEFT / ANCHOR_BOTTOM_CENTER / ANCHOR_BOTTOM_RIGHT
enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

// FIT_ORIGINAL / FIT_CONTAIN / FIT_SCALE
enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_SCALE;
static const float      DISPLAY_SCALE = 0.7f;

// =============================================================================
// (implementation below -- no need to edit)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap() / 1024),
             (unsigned long)(ESP.getFreePsram() / 1024),
             (unsigned long)(ESP.getPsramSize() / 1024));
  LOG.flush();
}

static void list_sd_root(int max_entries = 32) {
  File root = SD.open("/");
  if (!root || !root.isDirectory()) { LOG.println("[sd] cannot open '/'"); return; }
  LOG.println("[sd] contents of '/' :");
  int n = 0;
  File entry = root.openNextFile();
  while (entry) {
    if (entry.isDirectory()) LOG.printf("   <DIR>  %s\n", entry.name());
    else LOG.printf("   %7lu B  %s\n", (unsigned long)entry.size(), entry.name());
    entry.close();
    if (++n >= max_entries) { LOG.printf("   ... (truncated at %d)\n", max_entries); break; }
    entry = root.openNextFile();
  }
  if (n == 0) LOG.println("   (empty)");
  root.close(); LOG.flush();
}

static void compute_target_size(int src_w, int src_h, DisplayFit fit, float scale,
                                int panel_w, int panel_h, int* out_w, int* out_h) {
  switch (fit) {
    case FIT_ORIGINAL: *out_w = src_w; *out_h = src_h; break;
    case FIT_CONTAIN: {
      double s = (double)panel_w/src_w; if ((double)panel_h/src_h < s) s = (double)panel_h/src_h;
      if (s > 1.0) s = 1.0;
      *out_w = (int)(src_w*s+0.5); *out_h = (int)(src_h*s+0.5); break;
    }
    case FIT_SCALE: *out_w = (int)(src_w*scale+0.5); *out_h = (int)(src_h*scale+0.5); break;
  }
  if (*out_w & 7) *out_w &= ~7;
  if (*out_w < 8) *out_w = 8;
  if (*out_h < 1) *out_h = 1;
}

static void compute_anchor_xy(int img_w, int img_h, DisplayAnchor a,
                              int panel_w, int panel_h, int* out_x, int* out_y) {
  int x = 0, y = 0;
  switch (a) {
    case ANCHOR_TOP_LEFT:      x=0;                     y=0;                    break;
    case ANCHOR_TOP_CENTER:    x=(panel_w-img_w)/2;     y=0;                    break;
    case ANCHOR_TOP_RIGHT:     x=panel_w-img_w;         y=0;                    break;
    case ANCHOR_MIDDLE_LEFT:   x=0;                     y=(panel_h-img_h)/2;    break;
    case ANCHOR_CENTER:        x=(panel_w-img_w)/2;     y=(panel_h-img_h)/2;    break;
    case ANCHOR_MIDDLE_RIGHT:  x=panel_w-img_w;         y=(panel_h-img_h)/2;    break;
    case ANCHOR_BOTTOM_LEFT:   x=0;                     y=panel_h-img_h;        break;
    case ANCHOR_BOTTOM_CENTER: x=(panel_w-img_w)/2;     y=panel_h-img_h;        break;
    case ANCHOR_BOTTOM_RIGHT:  x=panel_w-img_w;         y=panel_h-img_h;        break;
  }
  if (x & 7) x &= ~7;
  *out_x = x; *out_y = y;
}

static bool show_image_on_panel(RgbImage* img) {
  int W, H;
  compute_target_size(img->width, img->height, DISPLAY_FIT, DISPLAY_SCALE,
                      EPD_WIDTH, EPD_HEIGHT, &W, &H);
  int x, y;
  compute_anchor_xy(W, H, DISPLAY_ANCHOR, EPD_WIDTH, EPD_HEIGHT, &x, &y);

  if (W != img->width || H != img->height) {
    if (!resize_image(img, W, H)) { LOG.println("[layout] resize OOM"); return false; }
  }
  const size_t npx = (size_t)W * H;
  uint8_t* idx = (uint8_t*)ps_malloc(npx);
  if (!idx) idx = (uint8_t*)malloc(npx);
  if (!idx) { LOG.println(TAG " OOM idx"); return false; }

  static const char* kDN[] = {"NONE","BAYER8","FS","JARVIS","ATKINSON"};
  LOG.printf(TAG " dithering BW with %s, gamma=%.2f\n", kDN[(int)DITHER_METHOD], DITHER_GAMMA);
  if (!dither_image(img->pixels, W, H, PAL_BW, DITHER_METHOD, DITHER_GAMMA, DITHER_INVERT, idx)) {
    free(idx); return false;
  }
  image_free(img);

  const size_t bm_bytes = ((size_t)W+7)/8 * (size_t)H;
  uint8_t* bm = (uint8_t*)ps_malloc(bm_bytes);
  if (!bm) bm = (uint8_t*)malloc(bm_bytes);
  if (!bm) { free(idx); return false; }
  pack_1bpp_msb(idx, bm, W, H, true);
  free(idx);

  epaper.drawBitmap(x, y, bm, W, H, TFT_BLACK, TFT_WHITE);
  epaper.update();
  free(bm);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1001 -- SD Bitmap (BW)");
  LOG.println("==============================================");
  log_mem("start");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();

  // UC8179 is write-only (TFT_MISO=-1 in Setup520). Re-init SPI with MISO for SD.
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED -- aborting"); return;
  }
  list_sd_root();

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed -- aborting"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
<TabItem value="e1001-gray4" label="E1001 Gray4">

<details>
<summary>点击此处预览完整代码 — reTerminal_E1001_SDcard_Gray4.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup520_Seeed_reTerminal_E1001 -- check driver.h selects BOARD_SCREEN_COMBO 520"
#endif

EPaper epaper;

static constexpr int PIN_SD_SCK  = 7;
static constexpr int PIN_SD_MISO = 8;
static constexpr int PIN_SD_MOSI = 9;
static constexpr int PIN_SD_CS   = 14;
static constexpr int PIN_SD_EN   = 16;
static constexpr int PIN_SD_DET  = 15;
static constexpr int PIN_DBG_RX  = 44;
static constexpr int PIN_DBG_TX  = 43;
#define LOG  Serial1
#define TAG  "[e1001-g4]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
static const DitherMethod DITHER_METHOD = DITHER_FS;
static const float        DITHER_GAMMA  = 1.0f;

enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_SCALE;
static const float      DISPLAY_SCALE = 0.7f;

// =============================================================================
// (implementation below)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap()/1024),
             (unsigned long)(ESP.getFreePsram()/1024),
             (unsigned long)(ESP.getPsramSize()/1024));
}

static void pack_4bpp_in_place(uint8_t* idx, int W, int H) {
  for (int y = 0; y < H; ++y) {
    const uint8_t* src = idx + (size_t)y * W;
    uint8_t*       dst = idx + (size_t)y * (W/2);
    for (int x = 0; x < W; x += 2)
      dst[x>>1] = (uint8_t)(((src[x] & 0xF) << 4) | (src[x+1] & 0xF));
  }
}

static bool show_image_on_panel(RgbImage* img) {
  int W = img->width, H = img->height;
  // (fit/anchor logic omitted for brevity -- see full source in the library)
  if (W != img->width || H != img->height)
    if (!resize_image(img, W, H)) return false;
  if ((W & 1) || (H & 1)) return false;

  uint8_t* idx = (uint8_t*)ps_malloc((size_t)W*H);
  if (!idx) idx = (uint8_t*)malloc((size_t)W*H);
  if (!idx) return false;

  if (!dither_image(img->pixels, W, H, PAL_GRAY4, DITHER_METHOD, DITHER_GAMMA, false, idx)) {
    free(idx); return false;
  }
  image_free(img);
  pack_4bpp_in_place(idx, W, H);

  int x = (EPD_WIDTH  - W) / 2 & ~1;
  int y = (EPD_HEIGHT - H) / 2;
  epaper.pushImage(x, y, W, H, (uint16_t*)idx);
  epaper.update();
  free(idx);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1001 -- SD Bitmap (Gray4)");
  LOG.println("==============================================");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();
  epaper.initGrayMode(GRAY_LEVEL4);
  epaper.fillSprite(TFT_GRAY_3);

  // UC8179 is write-only (TFT_MISO=-1 in Setup520). Re-init SPI with MISO for SD.
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED"); return;
  }

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
<TabItem value="e1002" label="E1002">

<details>
<summary>点击此处预览完整代码 — reTerminal_E1002_SDcard_Color6.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup521_Seeed_reTerminal_E1002 -- check driver.h selects BOARD_SCREEN_COMBO 521"
#endif

EPaper epaper;

static constexpr int PIN_SD_SCK  = 7;
static constexpr int PIN_SD_MISO = 8;
static constexpr int PIN_SD_MOSI = 9;
static constexpr int PIN_SD_CS   = 14;
static constexpr int PIN_SD_EN   = 16;
static constexpr int PIN_SD_DET  = 15;
static constexpr int PIN_DBG_RX  = 44;
static constexpr int PIN_DBG_TX  = 43;
#define LOG  Serial1
#define TAG  "[e1002]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
static const DitherMethod DITHER_METHOD = DITHER_FS;
static const float        DITHER_GAMMA  = 1.0f;

enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_SCALE;
static const float      DISPLAY_SCALE = 0.7f;

// =============================================================================
// (implementation below)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap()/1024),
             (unsigned long)(ESP.getFreePsram()/1024),
             (unsigned long)(ESP.getPsramSize()/1024));
}

static void pack_4bpp_in_place(uint8_t* idx, int W, int H) {
  for (int y = 0; y < H; ++y) {
    const uint8_t* src = idx + (size_t)y * W;
    uint8_t*       dst = idx + (size_t)y * (W/2);
    for (int x = 0; x < W; x += 2)
      dst[x>>1] = (uint8_t)(((src[x] & 0xF) << 4) | (src[x+1] & 0xF));
  }
}

static bool show_image_on_panel(RgbImage* img) {
  int W = img->width, H = img->height;
  if ((W & 1) || (H & 1)) return false;

  uint8_t* idx = (uint8_t*)ps_malloc((size_t)W*H);
  if (!idx) idx = (uint8_t*)malloc((size_t)W*H);
  if (!idx) return false;

  if (!dither_image(img->pixels, W, H, PAL_E6, DITHER_METHOD, DITHER_GAMMA, false, idx)) {
    free(idx); return false;
  }
  image_free(img);
  pack_4bpp_in_place(idx, W, H);

  int x = (EPD_WIDTH  - W) / 2 & ~1;
  int y = (EPD_HEIGHT - H) / 2;
  epaper.pushImage(x, y, W, H, (uint16_t*)idx);
  epaper.update();
  free(idx);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1002 -- SD Bitmap (6-color)");
  LOG.println("==============================================");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();

  // ED2208 is write-only (TFT_MISO=-1 in Setup521). Re-init SPI with MISO for SD.
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED"); return;
  }

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
<TabItem value="e1003" label="E1003">

<details>
<summary>点击此处预览完整代码 — reTerminal_E1003_SDcard_Gray16.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup522_Seeed_reTerminal_E1003 -- check driver.h selects BOARD_SCREEN_COMBO 522"
#endif

EPaper epaper;

static constexpr int PIN_SD_SCK  = 7;
static constexpr int PIN_SD_MISO = 8;
static constexpr int PIN_SD_MOSI = 9;
static constexpr int PIN_SD_CS   = 14;
static constexpr int PIN_SD_EN   = 39;  // E1003 uses GPIO39, not GPIO16
static constexpr int PIN_SD_DET  = 15;
static constexpr int PIN_DBG_RX  = 44;
static constexpr int PIN_DBG_TX  = 43;
#define LOG  Serial1
#define TAG  "[e1003]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
// At 1872x1404, error-diffusion needs >10 MB -- use DITHER_BAYER8 or shrink source first.
static const DitherMethod DITHER_METHOD = DITHER_FS;
static const float        DITHER_GAMMA  = 1.0f;

enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_ORIGINAL;
static const float      DISPLAY_SCALE = 1.0f;

// =============================================================================
// (implementation below)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap()/1024),
             (unsigned long)(ESP.getFreePsram()/1024),
             (unsigned long)(ESP.getPsramSize()/1024));
}

static void pack_4bpp_in_place(uint8_t* idx, int W, int H) {
  for (int y = 0; y < H; ++y) {
    const uint8_t* src = idx + (size_t)y * W;
    uint8_t*       dst = idx + (size_t)y * (W/2);
    for (int x = 0; x < W; x += 2)
      dst[x>>1] = (uint8_t)(((src[x] & 0xF) << 4) | (src[x+1] & 0xF));
  }
}

static bool show_image_on_panel(RgbImage* img) {
  int W = img->width, H = img->height;
  if ((W & 1) || (H & 1)) return false;

  uint8_t* idx = (uint8_t*)ps_malloc((size_t)W*H);
  if (!idx) idx = (uint8_t*)malloc((size_t)W*H);
  if (!idx) return false;

  if (!dither_image(img->pixels, W, H, PAL_GRAY16, DITHER_METHOD, DITHER_GAMMA, false, idx)) {
    free(idx); return false;
  }
  image_free(img);
  pack_4bpp_in_place(idx, W, H);

  int x = (EPD_WIDTH  - W) / 2 & ~1;
  int y = (EPD_HEIGHT - H) / 2;
  epaper.pushImage(x, y, W, H, (uint16_t*)idx);
  epaper.update();
  free(idx);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1003 -- SD Bitmap (Gray16)");
  LOG.println("==============================================");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();
  epaper.initGrayMode(GRAY_LEVEL16);
  epaper.fillSprite(TFT_GRAY_15);

  // Re-init SPI bus to ensure MISO=GPIO8 is wired (symmetry with E1001/E1002).
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED"); return;
  }

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
<TabItem value="e1004" label="E1004">

<details>
<summary>点击此处预览完整代码 — reTerminal_E1004_SDcard_Color6.ino</summary>

```cpp
#include <SPI.h>
#include <FS.h>
#include <SD.h>
#include "TFT_eSPI.h"
#include "dither.h"
#include "image_loader.h"

#ifndef EPAPER_ENABLE
#error "This example requires Setup523_Seeed_reTerminal_E1004 -- check driver.h selects BOARD_SCREEN_COMBO 523"
#endif

EPaper epaper;

static constexpr int PIN_SD_SCK  = 7;
static constexpr int PIN_SD_MISO = 8;
static constexpr int PIN_SD_MOSI = 9;
static constexpr int PIN_SD_CS   = 14;
static constexpr int PIN_SD_EN   = 16;
static constexpr int PIN_SD_DET  = 15;
static constexpr int PIN_DBG_RX  = 44;
static constexpr int PIN_DBG_TX  = 43;
#define LOG  Serial1
#define TAG  "[e1004]"

// =============================================================================
// USER CONFIGURATION
// =============================================================================

static const char* IMAGE_PATH = "/img/demo.jpg";

// DITHER_NONE / DITHER_BAYER8 / DITHER_FS / DITHER_JARVIS / DITHER_ATKINSON
// Default BAYER8: safe at any source size. Switch to FS only for small images.
static const DitherMethod DITHER_METHOD = DITHER_BAYER8;
static const float        DITHER_GAMMA  = 1.0f;

enum DisplayAnchor {
  ANCHOR_TOP_LEFT, ANCHOR_TOP_CENTER, ANCHOR_TOP_RIGHT,
  ANCHOR_MIDDLE_LEFT, ANCHOR_CENTER, ANCHOR_MIDDLE_RIGHT,
  ANCHOR_BOTTOM_LEFT, ANCHOR_BOTTOM_CENTER, ANCHOR_BOTTOM_RIGHT,
};
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;

enum DisplayFit { FIT_ORIGINAL, FIT_CONTAIN, FIT_SCALE };
static const DisplayFit DISPLAY_FIT   = FIT_ORIGINAL;
static const float      DISPLAY_SCALE = 1.0f;

// =============================================================================
// (implementation below)
// =============================================================================

static void log_mem(const char* tag) {
  LOG.printf("[mem] %-22s heap=%lu kB  PSRAM free=%lu/%lu kB\n", tag,
             (unsigned long)(ESP.getFreeHeap()/1024),
             (unsigned long)(ESP.getFreePsram()/1024),
             (unsigned long)(ESP.getPsramSize()/1024));
}

static void pack_4bpp_in_place(uint8_t* idx, int W, int H) {
  for (int y = 0; y < H; ++y) {
    const uint8_t* src = idx + (size_t)y * W;
    uint8_t*       dst = idx + (size_t)y * (W/2);
    for (int x = 0; x < W; x += 2)
      dst[x>>1] = (uint8_t)(((src[x] & 0xF) << 4) | (src[x+1] & 0xF));
  }
}

static bool show_image_on_panel(RgbImage* img) {
  int W = img->width, H = img->height;
  if ((W & 1) || (H & 1)) return false;

  uint8_t* idx = (uint8_t*)ps_malloc((size_t)W*H);
  if (!idx) idx = (uint8_t*)malloc((size_t)W*H);
  if (!idx) return false;

  if (!dither_image(img->pixels, W, H, PAL_E6, DITHER_METHOD, DITHER_GAMMA, false, idx)) {
    free(idx); return false;
  }
  image_free(img);
  pack_4bpp_in_place(idx, W, H);

  int x = (EPD_WIDTH  - W) / 2 & ~1;
  int y = (EPD_HEIGHT - H) / 2;
  epaper.pushImage(x, y, W, H, (uint16_t*)idx);
  epaper.update();
  free(idx);
  return true;
}

void setup() {
  LOG.begin(115200, SERIAL_8N1, PIN_DBG_RX, PIN_DBG_TX);
  delay(2500);
  LOG.println("==============================================");
  LOG.println("  reTerminal E1004 -- SD Bitmap (6-color)");
  LOG.println("==============================================");

  pinMode(PIN_SD_EN, OUTPUT); digitalWrite(PIN_SD_EN, HIGH);
  pinMode(PIN_SD_DET, INPUT_PULLUP); delay(50);

  epaper.begin();
  epaper.fillScreen(TFT_WHITE);
  epaper.update();

  // Re-init SPI bus for symmetry with E1001/E1002 (no-op on E1004, MISO already configured).
  SPIClass& spi = epaper.getSPIinstance();
  spi.end();
  spi.begin(PIN_SD_SCK, PIN_SD_MISO, PIN_SD_MOSI, -1);

  if (!SD.begin(PIN_SD_CS, spi)) {
    LOG.println(TAG " SD.begin FAILED"); return;
  }

  RgbImage img;
  if (!load_image_from_sd(IMAGE_PATH, 0, 0, &img)) {
    LOG.println(TAG " load failed"); return;
  }
  log_mem("after decode");
  show_image_on_panel(&img);
  image_free(&img);

  epaper.sleep();
  LOG.println(TAG " done.");
}

void loop() { delay(1000); }
```

</details>

</TabItem>
</Tabs>

:::note 精简版与完整源码
上面的代码块经过了**轻微精简**（内联了一些辅助函数，移除了冗长的日志调用），以便在此处保持可读性。库中的示例草图——通过 **File → Examples → Seeed_GFX → ePaper → reTerminal_SDcard_Bitmap** 打开——包含完整的诊断日志、完整的适配/锚点逻辑以及所有注释。
:::

### 步骤 2 — 准备 microSD 卡

1. 将卡格式化为 **FAT32**。
2. 创建一个与您在草图中设置的路径相匹配的文件夹结构——默认是 `/img/demo.jpg`：

   ```text
   <SD root>/
   └── img/
       └── demo.jpg          ← or demo.png / demo.bmp
   ```

3. 在上电 **之前** 将卡插入 reTerminal（热插拔也可以，但可靠性较差）。

### 步骤 3 — 准备你的图像

加载器开箱即用地支持三种格式：

| 格式 | 适用情况 | 需要避免 |
|---|---|---|
| **JPEG** (`.jpg` / `.jpeg`) | 基线 8 位，YCbCr 或灰度，任意色度抽样（4:4:4 / 4:2:2 / 4:2:0）。 | 渐进式 JPEG、CMYK、仅依赖 EXIF 旋转的源文件。 |
| **BMP** (`.bmp`) | 24 位 BGR 未压缩，或 4 位索引色（调色板 + `BI_RGB`）。 | `BI_BITFIELDS`、RLE 压缩的 BMP。 |
| **PNG** (`.png`) | 任意标准 PNG（8 位、16 位、调色板、隔行、RGBA）。RGBA 会在 **白色** 背景上进行合成，因为电子墨水屏是非透明的。 | 无——pngle 能处理所有标准 PNG 变体。 |

文件的实际格式是通过 **magic bytes** 嗅探出来的，而不是通过扩展名。一个保存为 `.bmp` 的 JPEG 依然可以正常工作（你只会在串口日志中看到一条警告）。

按面板划分的尺寸建议：

<Tabs groupId="reterm-model">
<TabItem value="e1001-bw" label="E1001 BW" default>

面板为 **800 × 480**。任何不超过大约 **1600 × 1200** 的源图像在 8 MB PSRAM 上都能正常解码。更大的图像也可以接受，但你会希望将 `DISPLAY_FIT = FIT_CONTAIN`，这样加载器可以在量化之前先将其缩小。

</TabItem>
<TabItem value="e1001-gray4" label="E1001 Gray4">

与 BW 使用相同的面板（**800 × 480**），但你会看到明显更宽的色调范围——在原生分辨率下的人像或风景照片看起来会比在 BW 草图上平滑得多。

</TabItem>
<TabItem value="e1002" label="E1002">

面板为 **800 × 480**。6 色调色板较为稀疏，因此对照片内容使用重度抖动（FS / Jarvis）可以获得最佳的主观画质。

</TabItem>
<TabItem value="e1003" label="E1003">

面板为 **1872 × 1404**（约 **260 万像素**，在 RGB888 下约 7.5 MB）。一张全屏大小的源图像会占满 PSRAM，并迫使抖动阶段回退到 `DITHER_NONE`——当发生这种情况时，加载器会打印一条警告。

为了获得最佳效果，请在 PC 上将源图像**预缩放**到 ≤ 1200 × 900（或使用 `DISPLAY_FIT = FIT_CONTAIN` 并配合较小的 `DISPLAY_SCALE`），然后让设备执行最终的抖动。

</TabItem>
<TabItem value="e1004" label="E1004">

面板为 **1200 × 1600**（约 190 万像素，在 RGB888 下约 5.5 MB）。在 8 MB PSRAM 上可以轻松容纳，但如果在面板分辨率下配合 **FS** 使用，它所需的 11 MB 误差缓冲区 **一定会** 触发回退。默认使用 `DITHER_BAYER8` 以保证安全；只有在先缩小源图像之后再切换到 `DITHER_FS`。

</TabItem>
</Tabs>

### 步骤 4 — 配置草图

所有用户可调选项都位于每个 `.ino` 文件顶部的配置块中。下面将逐一介绍四个最重要的控制项。

#### `IMAGE_PATH` — 要显示的文件

```cpp
static const char* IMAGE_PATH = "/img/demo.jpg";
```

使用前导 `/`。加载器会从 magic bytes 嗅探格式，因此扩展名纯粹是装饰——包含真实 JPEG 数据的 `/photo.bmp` 依然可以正常解码。

#### `DITHER_METHOD` — 使用哪种抖动算法

电子墨水屏在物理上只能显示 2 / 4 / 6 / 16 种颜色。为了表示典型照片中的数百万种颜色，加载器必须将每个像素**量化**到这些少数调色板条目之一。抖动算法决定了这种量化误差是如何在相邻像素之间分布的。

```cpp
static const DitherMethod DITHER_METHOD = DITHER_FS;
```

| 选项 | 作用 | 适用场景 |
|---|---|---|
| `DITHER_NONE` | 最近颜色，无误差扩散。最快，但最块状。 | 诊断用途，或当你想要海报化效果时。 |
| `DITHER_BAYER8` | 8×8 有序 Bayer 矩阵。确定性，**无需误差缓冲区**。 | 在 E1003 / E1004 上以面板分辨率运行时最安全的选择——绝不会耗尽内存。 |
| `DITHER_FS` | Floyd-Steinberg 误差扩散。在**画质 / 速度**之间取得最佳平衡。 | 在 E1001 / E1002 上的默认值。非常适合具有平滑渐变的照片。 |
| `DITHER_JARVIS` | Jarvis-Judice-Ninke。更宽的 12 系数卷积核，输出更平滑。 | 画质高于 FS，但大约慢 3 倍并占用更多 PSRAM。 |
| `DITHER_ATKINSON` | Atkinson（经典 Mac）。只扩散 6/8 的误差 → 对比度更高，更具“蚀刻”感。 | 风格化黑白输出、漫画 / 线稿内容。 |

:::caution 误差扩散的内存开销
`DITHER_FS`、`DITHER_JARVIS` 和 `DITHER_ATKINSON` 需要一个大约 `W × H × N_channels × 4` 字节的**浮点误差缓冲区**。在 1872 × 1404 分辨率下，彩色约为 **31 MB**，灰度约为 **10 MB**——远超可用的 PSRAM。

当 `ps_malloc` 失败时，加载器会打印

```
[dither] FS error buffer alloc FAILED (10358 kB) -- falling back to DITHER_NONE
```

并悄悄切换到 `DITHER_NONE`。如果你不希望出现这种回退，请改用 `DITHER_BAYER8`（有序、零分配）**或者**先缩小图像。
:::

#### `DITHER_GAMMA` — 亮度补偿

```cpp
static const float DITHER_GAMMA = 1.0f;
```

`1.0` 为中性。增大可**压暗**输出（适合在电子墨水屏上显得过亮的户外照片）。减小可**提亮**（适合夜景照片或截图）。典型的有效范围是 **0.8 – 1.6**。

#### `DISPLAY_ANCHOR` — 图像在面板上的落点位置

一个 3×3 的锚点网格。图像会被放置为其角 / 边 / 中心与对应的面板位置对齐。

```text
ANCHOR_TOP_LEFT       ANCHOR_TOP_CENTER       ANCHOR_TOP_RIGHT
ANCHOR_MIDDLE_LEFT    ANCHOR_CENTER           ANCHOR_MIDDLE_RIGHT
ANCHOR_BOTTOM_LEFT    ANCHOR_BOTTOM_CENTER    ANCHOR_BOTTOM_RIGHT
```

```cpp
static const DisplayAnchor DISPLAY_ANCHOR = ANCHOR_CENTER;
```

任何比面板小的图像在未使用区域会被**自动用白色填充**，无需预先调整大小以与面板完全匹配。比面板大的图像会围绕锚点**对称裁剪**。

#### `DISPLAY_FIT` + `DISPLAY_SCALE` — 调整图像尺寸

```cpp
static const DisplayFit  DISPLAY_FIT   = FIT_ORIGINAL;
static const float       DISPLAY_SCALE = 1.0f;
```

| 模式 | 行为 |
|---|---|
| `FIT_ORIGINAL` | 保持解码后的尺寸不变。推荐默认值——可预测且始终安全。 |
| `FIT_CONTAIN` | 按比例缩小图像，使其在保持纵横比的前提下**完全**适配面板。**从不放大**——小图像会保持小（如需放大请使用 `FIT_SCALE`）。 |
| `FIT_SCALE` | 将源尺寸乘以 `DISPLAY_SCALE`。支持缩小（`< 1.0`）和放大（`> 1.0`）。 |

`DISPLAY_SCALE` 的典型取值：`0.25` 四分之一，`0.5` 一半，`1.0` 原始大小，`2.0` 2 倍。

:::warning 在大面板上放大很容易导致内存不足（OOM）
在 E1003（1872 × 1404）和 E1004（1200 × 1600）上，`DISPLAY_SCALE` 大于 `1.0` 会很快耗尽 PSRAM。加载器会打印内存不足信息并中止。建议改用裁剪或在主机端预缩放。
:::

#### 灰度深度（仅限 E1001）

E1001 随机附带**两个**示例程序，因为同一块 UC8179 面板可以在 BW（快速，1 位）**或** Gray4（较慢，2 位，4 级灰度）模式下工作。请根据内容选择：

| 内容 | 推荐示例程序 |
|---|---|
| 线稿、二维码、文本、手绘漫画。 | `reTerminal_E1001_SDcard_BW` |
| 照片、具有平滑明暗过渡的插画。 | `reTerminal_E1001_SDcard_Gray4` |

E1003 始终使用 16 级灰度（`initGrayMode(16)`）——该模式是这块面板的标志性特性。E1002 和 E1004 为 6 色面板，不提供灰度深度选择。

### 步骤 5 — 构建、烧录并查看日志

1. 在 **Arduino IDE → Tools** 中：选择开发板 **XIAO_ESP32S3**，**PSRAM = OPI PSRAM**，**Flash = 8 MB**，**Partition Scheme = Default 8 MB**。
2. 插入准备好的 microSD 卡。
3. **上传**示例程序。
4. 打开**载板上的 USB-UART 转串口桥的串口监视器**（GPIO43 TX / GPIO44 RX，**115200 波特率，8N1**）——注意这是 `Serial1`，**而不是** IDE 自动打开的 USB-CDC `Serial`。

典型日志输出（E1004，图像为 1080 × 1920 PNG）：

```text
[reTerm_E1004] dithering Color6 with BAYER8, gamma=1.00 ...
[mem]  before image load        heap=275 kB  PSRAM free=8030/8192 kB
[png]   IHDR 1080x1920, allocating RGB888 buffer: 6075 kB
[img]   image decoded: 1080x1920  (6075 kB in PSRAM)
[mem]  after image decoded      heap=275 kB  PSRAM free=1955/8192 kB
[mem]  after dither             heap=275 kB  PSRAM free=1955/8192 kB
[reTerm_E1004] anchor=CENTER  fit=ORIGINAL  scale=1.00
[reTerm_E1004] frame pushed OK
[reTerm_E1004] done. Sleeping panel.
```

之后面板会刷新——一次完整刷新需要 **15 – 45 秒**，具体取决于型号以及所选的灰度 / 彩色模式。请保持静止，不要在刷新过程中重置开发板。

### 内存预算速查表

| 面板 | RGB888 缓冲区 | 文件系统错误缓冲区（峰值） | 适合与文件系统一起使用？ |
|---|---|---|---|
| E1001 BW @ 800×480 | 1.1 MB | 1.5 MB | ✅ 是 |
| E1001 Gray4 @ 800×480 | 1.1 MB | 1.5 MB | ✅ 是 |
| E1002 E6 @ 800×480 | 1.1 MB | 4.6 MB | ✅ 是 |
| E1003 Gray16 @ 1872×1404 | 7.5 MB | 10.1 MB | ❌ 否——请使用 `DITHER_BAYER8` 或缩小源图像 |
| E1004 E6 @ 1200×1600 | 5.5 MB | 22.0 MB | ❌ 否——请使用 `DITHER_BAYER8` 或缩小源图像 |

XIAO ESP32-S3 模块上的 8 MB OPI PSRAM 模块在扣除 Arduino 运行时开销后，大约有**7.9 MB 可用空间**。如果加载器无法满足一次内存分配，它会记录所需的确切大小，并在 `DISPLAY_FIT = FIT_CONTAIN` 时尝试调整大小后重试，否则会回退到 `DITHER_NONE`。

:::tip 关于刷新速度
上传后，电子墨水屏在驱动程序运行初始波形时，前几秒可能保持空白。第一次完整刷新在冷屏状态下可能需要长达几分钟——这是面板的电化学特性，而不是 Bug。后续刷新会更快。
:::

## 故障排查

关于 Arduino IDE 安装配置、USB 驱动问题、烧录失败，或“电子墨水屏不刷新”等问题，请参阅 [Arduino Cookbook: ePaper Display](https://wiki.seeedstudio.com/cn/reterminal_e10xx_with_arduino#故障排查) 中的 **Troubleshooting** 章节。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
