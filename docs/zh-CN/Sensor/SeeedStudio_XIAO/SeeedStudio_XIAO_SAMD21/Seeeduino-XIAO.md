---
description: Getting Started with Seeed Studio XIAO SAMD21
title: Seeed Studio XIAO SAMD21 入门指南
keywords:
- Seeed Studio XIAO SAMD21
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-XIAO
last_update:
  date: 2/27/2023
  author: jianjing Huang
---

英文wiki:[https://wiki.seeedstudio.com/Seeeduino-XIAO](https://wiki.seeedstudio.com/Seeeduino-XIAO)
<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" alt="pir" width={600} height="auto" /></p>

Seeed Studio XIAO SAMD21是Seeeduino家族中最小的成员。它搭载了强大的ATSAMD21G18A-MU低功耗微控制器。另一方面，这个小板子在处理性能方面表现不俗，但需要更少的电力。实际上，它被设计成微小的尺寸，可以用于可穿戴设备和小型项目。

Seeed Studio XIAO SAMD21 有14个引脚，可以用于11个数字接口，11个模拟接口，10个 PWM 接口（d1-d10），1个 DAC 输出引脚 D0，1个 SWD Pad 接口，1个 I2C 接口，1个 SPI 接口，1个 UART 接口，串行通信指示灯（T/R），通过引脚多路复用可以控制闪烁灯（L）。LED灯的颜色（电源，L，RX，TX）分别为绿色，黄色，蓝色和蓝色。此外，Seeed Studio XIAO SAMD21 还有一个 Type-C 接口，可供电和下载代码。板上有两个复位按钮，可以通过短接它们来重置板子。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## **文档**

以下是两个关于使用Seeed Studio XIAO SAMD21的文档，它们专注于不同的领域，请参考下表：
<!-- There are two documentations on the usage of **Seeed Studio XIAO SAMD21** which focus on different areas, check the table below for reference: -->

|[**Seeed 文档**](https://wiki.seeedstudio.com/Seeeduino-XIAO/)|[**Nanase 文档**](https://wiki.seeedstudio.com/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|Seeed Studio XIAO SAMD21 入门指南|Seeed Studio XIAO SAMD21 with MicroSD Card(SPI)|
|Seeed Studio XIAO SAMD21 GPIO 使用方法|Seeed Studio XIAO SAMD21 with GPS(UART)|
|Seeed Studio XIAO SAMD21 资料|Single Cycle IOBUS|

### **CircuitPython 在 Seeed Studio XIAO SAMD21 上的应用**

- 可以访问 [**CircuitPython on Seeed Studio XIAO SAMD21 **](http://wiki.seeedstudio.com/Seeeduino-XIAO-CircuitPython).

## **特征**

- **强大的中央处理器**: ARM® Cortex®-M0+ 32bit 48MHz 微控制器(SAMD21G18)，带有 256KB Flash 和 32KB SRAM 。
- **兼容性强**: 兼容 Arduino IDE.
- **项目易于操作**: 适合面包板的设计。
- **迷你尺寸**: 适用于可穿戴设备和小型项目。
- **多种开发接口**: 11 个数字/模拟引脚，10 个 PWM 引脚，1 个 DAC 输出，1 个 SWD Bonding pad 接口，1 个 I2C 接口，1 个 UART 接口，1 个 SPI 接口。

## **规格参数**

|项目|属性|
|---|---|
|中央处理器|运行频率高达 48MHz 的 ARM Cortex-M0+ CPU(SAMD21G18)|
|闪存|256KB|
|SRAM（静态随机存取存储器）|32KB|
|数字 I/O 引脚|11|
|模拟 I/O 引脚|11|
|I2C 接口|1|
|SPI 接口|1|
|QTouch|7 (A0,A1,A6,A7,A8,A9,A10)|
|串口接口|1|
|电源下载接口| Type-C|
|工作电压|3.3V/5V DC|
|尺寸|20×17.5×3.5mm|

## **硬件概述**

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https:///files.seeedstudio.com/wiki/Seeeduino-XIAO/img/new1.png) -->
  <p style={{textAlign: 'center'}}><img src="https:///files.seeedstudio.com/wiki/Seeeduino-XIAO/img/new1.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino%20XIAO%20pinout%202.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino%20XIAO%20pinout%202.png" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/regulator_to_3.3v.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/regulator_to_3.3v.png" alt="pir" width={600} height="auto" /></p>

:::note提示

**对于普通的 I/O 引脚**：<br />
  MCU的工作电压为3.3V。如果将高于 3.3V 的电压输入连接到普通的 I/O 引脚，可能会导致芯片损坏。

**对于电源引脚**：<br />
  内置的DC-DC转换电路能够将5V电压转换成3.3V电压，因此可以通过VIN引脚和5V引脚使用5V供电来为设备供电。

>请注意使用，不要拆卸防护盖。
:::

### **进入Bootloader模式**

当用户编程过程失败时，Seeed Studio XIAO SAMD21 端口可能会消失。我们可以通过以下操作解决这个问题：

- 将 Seeed Studio XIAO SAMD21 连接到您的计算机。
- 用镊子或短线将图中的RST管脚短接**两次**。
- 橙色 LED 灯亮起并闪烁。

此时，芯片进入Bootloader模式，也就是引导加载程序模式，并且烧录端口再次出现。因为SAMD21芯片有两个分区，一个是Bootloader，另一个是用户程序。产品出厂时会在系统内存中烧录引导加载程序代码。我们可以通过执行上述步骤来切换模式。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

### **重置**

如果要重置 Seeed Studio XIAO SAMD21，请执行以下步骤：

- 将 Seeed Studio XIAO SAMD21 连接到您的电脑上。
- 使用镊子或短线将RST引脚短接**一次**即可
- 橙色 LED 灯亮起并闪烁。

>**请注意**：内置LED的行为方式与Arduino上的相反。在Seeed Studio XIAO SAMD21上，该引脚必须被拉低以点亮LED；而在其他微控制器上，它必须被拉高。

### **中断**

<!-- All pins on Seeed Studio XIAO SAMD21 support interrupts, but two pins cannot be used at the same time: 5 pin and 7 pin. For more detail about Interrupt please check [here](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/master/variants/XIAO_m0/variant.cpp). -->
Seeed Studio XIAO SAMD21上的所有引脚都支持中断，但是5号引脚和7号引脚不能同时使用。有关中断的更多详细信息，请在[这里](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/master/variants/XIAO_m0/variant.cpp)查看。

### **引脚多路复用**

<!-- We don't need to configure the pins ourselves, after using the pins, you can call a function directly. -->
我们无需自己配置引脚，在使用完引脚后，可以直接调用函数。

#### **数字输入和输出**

- 使用引脚 6 作为数字引脚：

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

- 使用引脚 6 作为模拟引脚:

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

- 使用引脚 6 作为 UART 的 TX 引脚（UART 的 RX 引脚为引脚 7）：

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

- 使用引脚5作为I2C的SCL引脚（SDA引脚为引脚4）：

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

- 使用8号引脚作为SPI的SCK引脚（SPI的MISO引脚为9号引脚，MOSI引脚为10号引脚）:

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

我们提供了一个示例工程关于如何使用 QTouch： [如何利用Q-Touch 功能在 Seeed Studio XIAO SAMD21 上制作水果钢琴](https://www.seeedstudio.com/blog/2020/07/20/how-to-make-a-fruit-piano-on-seeeduino-xiaos-q-touch-function-m/).

#### **模拟输入和输出**

<!-- While it still has PWM-based "analog outputs", the SAMD21 also features true analog output in the form of a digital-to-analog converter (DAC). This module can produce an analog voltage between 0 and 3.3V. It can be used to produce audio with more natural sound, or as a kind of "digital potentiometer" to control analog devices. -->
尽管 SAM21 仍然具有基于脉宽调制（PWM）的“模拟输出”，但它还配备了数字模拟转换器（DAC），提供真正的模拟输出功能。该模块可在 0 到 3.3V 之间生成模拟电压。它可用于产生更自然的音频声音，或作为“数字电位器”来控制模拟设备。

<!-- The DAC is only available on the Arduino pin A0, and is controlled using analogWrite(A0, `<value>`). The DAC can be set up to 10-bit resolution (make sure to call [**analogWriteResolution(10)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogwriteresolution/) in your setup), which means values between 0 and 1023 will set the voltage to somewhere between 0 and 3.3V. -->
DAC 仅可用于 Arduino 引脚 A0 ，并可使用 analogWrite（A0，`<value>`）进行控制。 DAC 可以设置为 10 位分辨率（确保在设置中调用 [**analogWriteResolution(10)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogwriteresolution/) ），这意味着 0 到 1023 之间的值将电压设置在 0 到 3.3V 之间的某个位置。

<!-- In addition to the DAC, the SAMD21's ADC channels also stand apart from the ATmega328: they're equipped with up to 12-bit resolution. That means the analog input values can range from 0-4095, representing a voltage between 0 and 3.3V. To use the ADC's in 12-bit mode, make sure you call [**analogReadResolution(12)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/) in your setup. -->
除了 DAC 之外，SAMD21 的 ADC 通道还与 ATmega328 有所不同：它们配备高达 12 位的分辨率。这意味着模拟输入值可以在 0-4095 之间，即表示 0 到 3.3V 之间的电压。请确保在设置中调用 [**analogReadResolution(12)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/)，这样才能在 12 位模式下使用 ADC 。

**串行绘制 DAC**

下面是一个演示 DAC 和 ADC 的示例。接下来开始实验，请将 A0 连接到 A1 -- 我们将用模拟电压驱动 A0，然后使用 A1 读取它。这是我们在教程中介绍过的最简单的电路：

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/AO_A1.jpg" /></div>
<br />

:::note提示
上述图片中 Seeed Studio XIAO SAMD21 正在使用 [**Seeed Studio XIAO SAMD21 拓展板**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)
:::

<!-- This sketch produces a sine wave output on A0, with values ranging from 0 to 3.3V. Then it uses A1 to read that output into its ADC, and convert it into a voltage between 0 and 3.3V. -->
这个程序在引脚A0上产生一个 0 到 3.3V 范围内的正弦波输出，然后使用 A1 读取该输出并将其转换为 0 到 3.3V 之间的电压值。

<!-- You can, of course, open the serial monitor to view the voltage values stream by. But if the the sine wave is hard to visualize through text, check out Arduino's new Serial Plotter, by going to Tools > Serial Plotter. -->
您可以打开串口监视器查看电压值的流动。但是，如果正弦波很难通过文本可视化，请尝试打开 Arduino 的新串口绘图工具，方法是：`Tools > Serial Plotter`。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Serial%20poltting.png" /></div>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_DAC_wave.gif" /></div>
<br />

**代码示例**

```cpp
#define DAC_PIN A0 // Make code a bit more legible

float x = 0; // Value to take the sin of
float increment = 0.02;  // Value to increment x by each time
int frequency = 440; // Frequency of sine wave

void setup() 
{
  analogWriteResolution(10); // Set analog out resolution to max, 10-bits
  analogReadResolution(12); // Set analog input resolution to max, 12-bits

  SerialUSB.begin(9600);
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
  SerialUSB.println(voltage); // Print the voltage.
  delay(1); // Delay 1ms
}
```

## **上手指南**

### **硬件部分**

**所需材料**

- Seeed Studio XIAO SAMD21 x1
- 电脑 x1
- USB Type-C 数据线 x1

:::tip提示

有些USB数据线只能供电，不能传输数据。如果你没有USB线或者不知道你的USB线是否可以传输数据，你可以查看[see USB type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).
:::

- 第 1 步： 准备一根 Seeed Studio XIAO SAMD21和一根 Type-C 数据线。

- 第 2 步： 将 Seeed Studio XIAO SAMD21 连接到您的计算机，紧接着会亮起黄色的 LED 灯。

### **软件部分**

:::note说明

如果这是您第一次使用 Arduino，我们建议您可以参考学习 [Arduino 入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino)
:::

- **步骤 1： 安装 Arduino 软件。**

[<p><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width={600} height="auto" /></p>
](https://www.arduino.cc/en/Main/Software)

**启动 Arduino 应用程序**

双击您之前下载的 Arduino 应用程序 (arduino.exe)。

:::note说明

<!-- If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details. -->
如果 Arduino 软件加载的语言与您需要的不同，您可以在首选项对话框中更改。有关详细信息，请参见[Arduino 软件（IDE）页面](https://www.arduino.cc/en/Guide/Environment#languages)
:::

- **步骤 2： 打开 Blink 示例**  

打开 LED 闪烁示例: **File > Examples >01.Basics > Blink**.

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3：将 Seeeduino板的URL 添加到您的 Arduino IDE**

单击 **File > Preference**，然后再“Additional Boards Manager URLs”内添加以下网址 ：
    *<https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json>*

<!-- ![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={600} height="auto" /></p>

<!-- Click **Tools-> Board-> Boards Manager...**, print  keyword "**Seeed Studio XIAO SAMD21**" in the searching blank. Here comes the "Seeed SAMD Boards". Install it. -->
请点击 **工具**-> **开发板**-> 开发板管理器，在搜索框中输入关键词 "Seeed Studio XIAO SAMD21"。出现 "**Seeed SAMD Boards**" 后，请进行安装。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png" alt="pir" width={600} height="auto" /></p>

- **步骤 4: 选择您的开发板和端口t**

<!-- After installing the board, click **Tools-> Board**, find "**Seeed Studio XIAO SAMD21 M0**" and select it. Now you have already set up the board of Seeed Studio XIAO SAMD21 for Arduino IDE. -->
在安装完开发板后，点击 **工具**-> **开发板**，找到 "**Seeed Studio XIAO SAMD21 M0**" 并选择它。现在，您已经在 Arduino IDE 中设置好了 Seeed Studio XIAO SAMD21 的开发板。

<!-- 
![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/board.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/board.png" alt="pir" width={600} height="auto" /></p>

<!-- Select the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (**COM1** and **COM2** are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port. -->
从 "工具 | 端口" 菜单中选择 Arduino 开发板。这可能是 COM3 或更高的端口（COM1 和 COM2 通常保留给硬件串行端口）。如果您不确定，请断开 Arduino 开发板并重新打开该菜单；消失的端口选项应该是 Arduino 开发板。重新连接开发板并选择该端口。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/port.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/port.png" alt="pir" width={600} height="auto" /></p>

- **步骤 5：上传程序**  

<!-- Now, simply click the "Upload" button in the environment. Wait a few seconds and if the upload is successful, the message "Done uploading." will appear in the status bar. -->
现在，只需在环境中点击 "`上传`" 按钮。等待几秒钟，如果上传成功，状态栏中将出现消息 "Done uploading."。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={600} height="auto" /></p>

<!-- A few seconds after the upload finishes, you should see the pin 13 (L) LED on the board start to blink (in orange). If it does, congratulations! You've gotten Arduino up-and-running. If you have problems, please see the troubleshooting suggestions. -->

  上传完成后几秒钟，您应该会看到开发板上的 13 号引脚（L）LED 开始闪烁（呈橙色）。如果是这样，恭喜您！您已经成功运行了 Arduino。如果出现问题，请参考故障排除建议。

:::note说明
闪存的最大大小为 8KB。 有关更多信息，请参阅资源中的 ATSAMD218A-MU 数据表
:::

## The sample application

- [如何使用 Seeed Studio XIAO SAMD21 登录你的树莓派](https://wiki.seeedstudio.com/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI)

- [SPI 通讯接口](https://wiki.seeedstudio.com/XIAO-SPI-Communication-Interface)

- [如何使用树莓派解除砖化的 Xiao 开发板](https://forum.seeedstudio.com/t/how-to-unbrick-a-dead-xiao-using-raspberry-pi-guide-openocd/253990). 感谢 John_Doe 的分享.

## 资源下载

- **[PDF]** [ATSAMD218A-MU datasheet](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)

- **[ZIP]** [Seeeduino KiCAD Libraries](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino%20XIAO%20KICAD.zip)

- **[LBR]** [Seeeduino Eagle Libraries](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino%20XIAO.lbr)

## 课程资料

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO.jpg" /></div>

- **[PDF]** [Seeed Studio XIAO SAMD21 in Action——Minitype ＆ Wearable Projects Step by Step](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype＆Wearable-Projects-Step-by-Step.pdf)
- **[ZIP]** [Codes](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-Codes.rar)
- **[ZIP]** [Document](https:///files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-Document.rar)

## 技术支持

请随时将问题提交到我们的[论坛](https://forum.seeedstudio.com/)。
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
