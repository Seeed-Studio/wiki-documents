---
description: Seeed Studio XIAO SAMD21 入门指南
title: Seeed Studio XIAO SAMD21 入门指南
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-XIAO
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Seeed Studio XIAO SAMD21 入门指南

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" alt="pir" width={600} height="auto" /></p>

Seeed Studio XIAO SAMD21（曾名为 Seeeduino XIAO）是 [Seeed Studio XIAO 系列的首款产品，该系列是一系列功能强大的拇指大小开发板，兼容 Arduino](https://www.seeedstudio.com/xiao-series-page)。它搭载了强大的 ATSAMD21G18A-MU 低功耗微控制器。另一方面，这块小板子具有良好的处理性能，但功耗更低。它采用小尺寸设计，可用于可穿戴设备和小型项目。

Seeed Studio XIAO SAMD21 有 14 个引脚，通过引脚复用可用作 11 个数字接口、11 个模拟接口、10 个 PWM 接口（d1-d10）、1 个 DAC 输出引脚 D0、1 个 SWD 焊盘接口、1 个 I2C 接口、1 个 SPI 接口、1 个 UART 接口、串行通信指示器（T/R）、闪烁灯（L）。LED 灯（电源、L、RX、TX）的颜色分别为绿色、黄色、蓝色和蓝色。此外，Seeed Studio XIAO SAMD21 具有 Type-C 接口，可以供电和下载代码。有两个复位按钮，您可以短接它们来复位开发板。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## **文档**

关于 **Seeed Studio XIAO SAMD21** 的使用有两个文档，分别专注于不同的领域，请参考下表：

|[**Seeed 官方文档**](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/)|[**Nanase 文档**](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|引脚图|接口|
|Seeed Studio XIAO SAMD21 入门指南|Seeed Studio XIAO SAMD21 与 MicroSD 卡（SPI）|
|Seeed Studio XIAO SAMD21 GPIO 使用|Seeed Studio XIAO SAMD21 与 GPS（UART）|
|Seeed Studio XIAO SAMD21 资源|单周期 IOBUS|

### **Seeed Studio XIAO SAMD21 上的 CircuitPython**

- 开始使用 [**Seeed Studio XIAO SAMD21 上的 CircuitPython**](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO-CircuitPython)。

## **特性**

- 强大的 CPU：ARM® Cortex®-M0+ 32位 48MHz 微控制器（SAMD21G18），具有 256KB Flash、32KB SRAM。
- 灵活兼容性：兼容 Arduino IDE。
- 简易项目操作：面包板友好。
- 小尺寸：拇指大小（21x17.8mm），适用于可穿戴设备和小型项目。
- 多种开发接口：11 个数字/模拟引脚、10 个 PWM 引脚、1 个 DAC 输出、1 个 SWD 焊盘接口、1 个 I2C 接口、1 个 UART 接口、1 个 SPI 接口。

## **规格参数**

|项目|数值|
|---|---|
|CPU|ARM Cortex-M0+ CPU(SAMD21G18) 运行频率高达48MHz|
|闪存|256KB|
|SRAM|32KB|
|数字I/O引脚|11|
|模拟I/O引脚|11|
|I2C接口|1|
|SPI接口|1|
|QTouch|7 (A0,A1,A6,A7,A8,A9,A10)|
|UART接口|1|
|供电和下载接口| Type-C|
|电源|3.3V/5V DC|
|尺寸|21×17.8×3.5mm|

## **硬件概述**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https:///files.seeedstudio.com/wiki/Seeeduino-XIAO/img/new1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino%20XIAO%20pinout%202.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/regulator_to_3.3v.png" alt="pir" width={600} height="auto" /></p>

:::caution
对于通用I/O引脚：
MCU的工作电压为3.3V。连接到通用I/O引脚的输入电压如果高于3.3V可能会导致芯片损坏。

对于电源引脚：
内置的DC-DC转换器电路能够将5V电压转换为3.3V，允许通过VIN引脚和5V引脚使用5V电源为设备供电。

XIAO SAMD21目前仅支持电池供电，**在连接电池时不能连接Type-C**，因为这可能存在安全风险。

请注意使用，不要撬起屏蔽罩。
:::   

### **进入Bootloader模式**

有时当用户编程过程失败时，Seeed Studio XIAO SAMD21端口可能会消失。我们可以通过以下操作解决这个问题：

- 将Seeed Studio XIAO SAMD21连接到您的计算机。
- 使用镊子或短线将图中的RST引脚短接两次。
- 橙色LED灯闪烁并点亮。

此时，芯片进入Bootloader模式，烧录端口再次出现。因为samd21芯片有两个分区，一个是Bootloader，另一个是用户程序。产品出厂时会在系统内存中烧录bootloader代码。我们可以通过执行上述步骤来切换模式。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

### **复位**

如果您想要复位Seeed Studio XIAO SAMD21，请执行以下步骤：

- 将Seeed Studio XIAO SAMD21连接到您的计算机。
- 使用镊子或短线将RST引脚短接**仅一次**
- 橙色LED灯闪烁并点亮。

请注意：内置LED的行为与Arduino上的相反。在Seeed Studio XIAO SAMD21上，引脚必须拉低，而在其他微控制器上必须拉高。

### **中断**

Seeed Studio XIAO SAMD21上的所有引脚都支持中断，但有两个引脚不能同时使用：5号引脚和7号引脚。有关中断的更多详细信息，请查看[这里](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/master/variants/XIAO_m0/variant.cpp)。

### **引脚复用**

我们不需要自己配置引脚，使用引脚后，您可以直接调用函数。

#### **数字输入和输出**

- 使用引脚6作为数字引脚：

```c
const int buttonPin = 6;     // the number of the pushbutton pin
const int ledPin =  13;      // the number of the LED pin

int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
  // initialize the LED pin as an output:
  pinMode(ledPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn LED on:
    digitalWrite(ledPin, HIGH);
  } else {
    // turn LED off:
    digitalWrite(ledPin, LOW);
  }
}
```

#### **模拟读取**

- 使用引脚6作为模拟引脚：

```c


void setup() {
  // declare the ledPin as an OUTPUT:
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // read the value from the sensor:
  sensorValue = analogRead(sensorPin);
  // turn the ledPin on
  digitalWrite(ledPin, HIGH);
  // stop the program for <sensorValue> milliseconds:
  delay(sensorValue);
  // turn the ledPin off:
  digitalWrite(ledPin, LOW);
  // stop the program for for <sensorValue> milliseconds:
  delay(sensorValue);
}
```

#### **串口**

- 使用引脚6作为UART的TX引脚（UART的RX引脚是引脚7）：

```c

void setup() {
    Serial1.begin(115200);
    while (!Serial);
}

void loop() {
    Serial1.println("Hello,World");
    delay(1000);
}
```

#### **I2C**

- 使用引脚5作为IIC的SCL引脚（IIC的SDA引脚是引脚4）：

```c
// Wire Master Writer
// by Nicholas Zambetti <http://www.zambetti.com>

// Demonstrates use of the Wire library
// Writes data to an I2C/TWI slave device
// Refer to the "Wire Slave Receiver" example for use with this

// Created 29 March 2006

// This example code is in the public domain.


#include <Wire.h>

void setup()
{
  Wire.begin(); // join i2c bus (address optional for master)
}

byte x = 0;

void loop()
{
  Wire.beginTransmission(4); // transmit to device #4
  Wire.write("x is ");        // sends five bytes
  Wire.write(x);              // sends one byte  
  Wire.endTransmission();    // stop transmitting
  x++;
  delay(500);
}
```

#### **SPI**

- 使用引脚8作为SPI的SCK引脚（SPI的MISO引脚是引脚9，SPI的MOSI引脚是引脚10）：

```c
#include <SPI.h>
const int CS = 7;
void setup (void) {
   digitalWrite(CS, HIGH); // disable Slave Select
   SPI.begin ();
   SPI.setClockDivider(SPI_CLOCK_DIV8);//divide the clock by 8
}

void loop (void) {
   char c;
   digitalWrite(CS, LOW); // enable Slave Select
   // send test string
   for (const char * p = "Hello, world!\r" ; c = *p; p++) {
      SPI.transfer (c);
   }
   digitalWrite(CS, HIGH); // disable Slave Select
   delay(2000);
}
```

#### **QTouch**

关于如何使用 QTouch，我们提供了一个示例项目：[如何在 Seeed Studio XIAO SAMD21 的 Q-Touch 功能上制作水果钢琴](https://www.seeedstudio.com/blog/2020/07/20/how-to-make-a-fruit-piano-on-seeeduino-xiaos-q-touch-function-m/)。

#### **模拟输入和输出**

虽然它仍然具有基于 PWM 的"模拟输出"，但 SAMD21 还具有数字模拟转换器 (DAC) 形式的真正模拟输出。该模块可以产生 0 到 3.3V 之间的模拟电压。它可以用来产生更自然的音频，或作为一种"数字电位器"来控制模拟设备。

DAC 仅在 Arduino 引脚 A0 上可用，并使用 analogWrite(A0, `<value>`) 进行控制。DAC 可以设置为 10 位分辨率（确保在设置中调用 [**analogWriteResolution(10)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogwriteresolution/)），这意味着 0 到 1023 之间的值将把电压设置在 0 到 3.3V 之间的某个位置。

除了 DAC 之外，SAMD21 的 ADC 通道也与 ATmega328 不同：它们配备了高达 12 位的分辨率。这意味着模拟输入值可以在 0-4095 范围内，代表 0 到 3.3V 之间的电压。要在 12 位模式下使用 ADC，请确保在设置中调用 [**analogReadResolution(12)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/)。

**串行绘制 DAC**

这里有一个同时演示 DAC 和 ADC 的示例。要设置实验，请将 A0 连接到 A1 —— 我们将用模拟电压驱动 A0，然后用 A1 读取它。这是我们在教程中使用过的最简单的电路：

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/AO_A1.jpg" /></div>

:::note
Seeed Studio XIAO SAMD21 使用 [**Seeed Studio XIAO SAMD21 扩展板**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)
:::

这个程序在 A0 上产生正弦波输出，值范围从 0 到 3.3V。然后它使用 A1 将该输出读入其 ADC，并将其转换为 0 到 3.3V 之间的电压。

当然，您可以打开串行监视器来查看电压值流。但如果正弦波通过文本难以可视化，请查看 Arduino 的新串行绘图器，通过转到 Tools > Serial Plotter。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Serial%20poltting.png" /></div>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_DAC_wave.gif" /></div>

#### **DAC**

感谢 [Aleksei Tertychnyi](https://github.com/WeSpeakEnglish) 提交代码，所有相关功能都是由他开发和贡献的。


```cpp
#define DAC_PIN A0 // Make code a bit more legible
float x = 0; // Value to take the sin of
float increment = 0.02;  // Value to increment x by each time
int frequency = 440; // Frequency of sine wave

void setup() 
{
  analogWriteResolution(10); // Set analog out resolution to max, 10-bits
  analogReadResolution(12); // Set analog input resolution to max, 12-bits

  Serial.begin(9600);
}

void loop() 
{
  // Generate a voltage value between 0 and 1023. 
  // Let's scale a sin wave between those values:
  // Offset by 511.5, then multiply sin by 511.5.
  int dacVoltage = (int)(511.5 + 511.5 * sin(x));
  x += increment; // Increase value of x

  // Generate a voltage between 0 and 3.3V.
  // 0= 0V, 1023=3.3V, 512=1.65V, etc.
  analogWrite(DAC_PIN, dacVoltage);

  // Now read A1 (connected to A0), and convert that
  // 12-bit ADC value to a voltage between 0 and 3.3.
  float voltage = analogRead(A1) * 3.3 / 4096.0;
  Serial.println(voltage); // Print the voltage.
  delay(1); // Delay 1ms
}
```

**结果**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/THonny_DAC.jpg" alt="pir" width={600} height="auto" /></p>

## **入门指南**

### **硬件**

**所需材料**

- Seeed Studio XIAO SAMD21 x1
- 计算机 x1
- USB Type-C 数据线 x1

:::tip

某些 USB 数据线只能供电而无法传输数据。如果您没有 USB 数据线或不确定您的 USB 数据线是否能传输数据，您可以查看 [seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html)。
:::

- 步骤 1. 准备一个 Seeed Studio XIAO SAMD21 和一根 Type-C 数据线。

- 步骤 2. 将 Seeed Studio XIAO SAMD21 连接到您的计算机。然后黄色电源 LED 应该会亮起。

### **软件**

:::note

如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino)
:::

- **步骤 1. 您需要安装 Arduino 软件。**

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong></a>
</div>

**启动 Arduino 应用程序**

双击您之前下载的 Arduino 应用程序 (arduino.exe)。

:::note

如果 Arduino 软件以不同语言加载，您可以在首选项对话框中更改它。详情请参见 [Arduino 软件 (IDE) 页面](https://www.arduino.cc/en/Guide/Environment#languages)。
:::

- **步骤 2. 打开 Blink 示例**  

打开 LED 闪烁示例程序：**File > Examples >01.Basics > Blink**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3. 将 Seeeduino 添加到您的 Arduino IDE**

点击 **File > Preference**，并在 Additional Boards Manager URLs 中填入以下网址：

*https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json*

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={600} height="auto" /></p>

点击 **Tools-> Board-> Boards Manager...**，在搜索框中输入关键词 "**Seeed Studio XIAO SAMD21**"。这里会出现 "Seeed SAMD Boards"。安装它。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4. 选择您的开发板和端口**

安装开发板后，点击 **Tools-> Board**，找到 "**Seeed Studio XIAO **" 并选择它。现在您已经为 Arduino IDE 设置好了 Seeed Studio XIAO SAMD21 开发板。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/1.jpg" alt="pir" width={600} height="auto" /></p>

从 Tools | Serial Port 菜单中选择 Arduino 开发板的串行设备。这很可能是 COM3 或更高（**COM1** 和 **COM2** 通常为硬件串行端口保留）。要找出端口，您可以断开 Arduino 开发板的连接并重新打开菜单；消失的条目应该就是 Arduino 开发板。重新连接开发板并选择该串行端口。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/2.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 5. 上传程序**  

现在，只需点击环境中的 "Upload" 按钮。等待几秒钟，如果上传成功，状态栏中会出现 "Done uploading." 消息。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={800} height="auto" /></p>

 上传完成几秒钟后，您应该会看到开发板上的引脚 13 (L) LED 开始闪烁（橙色）。如果是这样，恭喜您！您已经成功运行了 Arduino。如果遇到问题，请参阅故障排除建议。

:::note
闪存的最大大小为 8KB，更多信息请参见资源中的 ATSAMD218A-MU 数据手册
:::

## 示例应用

- [如何使用 Seeed Studio XIAO SAMD21 登录到您的树莓派](https://wiki.seeedstudio.com/cn/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI)

- [SPI 通信接口](https://wiki.seeedstudio.com/cn/XIAO-SPI-Communication-Interface)

- [如何使用树莓派修复损坏的 xiao](https://forum.seeedstudio.com/t/how-to-unbrick-a-dead-xiao-using-raspberry-pi-guide-openocd/253990)。感谢 John_Doe 的分享。

## 资源

- **[PDF]** [ATSAMD218A-MU 数据手册](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)

- **[PDF]** [Seeed Studio XIAO SAMD21 原理图](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0-SCH-191112.pdf)

- **[电子书]** [XIAO: 大功率，小板子 掌握 Arduino 和 TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

- **[ZIP]** [Seeed Studio XIAO SAMD21 KiCAD 文件](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-KICAD.zip)

- **[ZIP]** [Seeed Studio XIAO SAMD21 Eagle 文件](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)

- **[DXF]** [Seeed Studio XIAO SAMD21 DXF 格式尺寸图](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar)

- **[LBR]** [Seeed Studio XIAO SAMD21 Eagle 封装](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-footprint-eagle.lbr)

- **[ZIP]** [Seeed Studio XIAO SAMD21 出厂固件](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_final_firmware.zip)

- **[XLSX]** [Seeed Studio XIAO SAMD21 引脚图表](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO SAMD21 3D 模型](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip)


- 🔗 **[Kicad]** [Seeed Studio XIAO SAMD21 封装](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)


## 课程资源

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[电子书]** [XIAO: 大功率，小板子 掌握 Arduino 和 TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)


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