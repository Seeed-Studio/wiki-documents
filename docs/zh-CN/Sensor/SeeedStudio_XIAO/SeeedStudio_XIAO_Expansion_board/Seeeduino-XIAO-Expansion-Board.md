---
description: Seeed Studio XIAO 拓展板
title: Seeed Studio XIAO 拓展板
keywords:
- Seeed Studio XIAO Expansion Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-XIAO-Expansion-Board
last_update:
  date: 2/27/2023
#   author: fenglei
---

英文wiki：[https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/](https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/)<br />

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>
<br />

仅树莓派4一半大小的 [Seeed Studio XIAO 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)功能强大，可以轻松快速地构建原型和项目。板上有 OLED、RTC、可扩展存储、无源蜂鸣器、RESET/User 按钮、5V伺服/传感器接头、多种数据接口等丰富的外设……你可以探索 Seeed Studio XIAO 的无限可能。该板也很好地支持 [CircuitPython](https://circuitpython.org/)。

Seeed Studio XIAO 系列的外形规格统一，Seeed Studio XIAO 系列（[XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)，[XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)，[XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html)，[XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)，[XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)）都支持 Seeed Studio XIAO 的 [Grove Shield](https://seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) 和 [Seeed Studio XIAO 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)。

## **特征**

- **快速原型设计：**通过 RESET 按钮和 SWD 引脚引出到公头，方便调试和复位。
- **丰富的外设：**OLED 显示屏，RTC，可扩展存储空间，无源蜂鸣器，用户按钮，板载电池管理芯片。
- **无需焊接：**所有引脚都引出。方便的即插即用 Grove 连接器支持多种数据协议，包括 I2C、UART、模拟/数字。
- **支持**CircuitPython**：**很好地支持 CircuitPython。MicroSD 卡插槽支持存储空间扩展，从而可以分配原型设计和项目构建所需的更多库。
- **迷你尺寸：**紧凑而优雅，只有树莓派4尺寸的一半，特别适合需要迷你尺寸的项目。

## **规格参数**

| 项目 | 属性 |
| --- | --- |
| 工作电压 | 5V / 3.7V 锂电池 |
| 充电电流 | 460mA （最大值） |
| RTC 定时器精度 | ± 1.5秒/天（25°C） |
| RTC 电池 | CR1220 |
| 显示 | 0.96"OLED 显示屏 |
| 可扩展存储 | MicroSD 卡 |
| Grove 接口 | Grove I2C *2，Grove UART* 1， A0/D0 Grove *1 |
| 其他外部设备 | 无源蜂鸣器，用户按钮，5V伺服/传感器连接器 |

## **应用**

- SWD 串行调试
- 快速原型制作
- 数据显示
- 迷你尺寸项目

## **零件清单**

| 项目 | 数量 |
| --- | --- |
| Seeed Studio XIAO 扩展板 | 1 |

注意<br />本产品不包括 Seeed Studio XIAO 和电池，Seeed Studio XIAO 正在不断推出新的版本，要了解这个系列最新的产品动态，可以访问 [XIAO 系列的主页](https://www.seeedstudio.com/xiao-series-page)。

## **上手指南**

### **所需材料**

| Seeed Studio XIAO SAMD21 （预焊） | Seeed Studio XIAO 扩展板 |
| --- | --- |
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/102010388_Preview-07.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" alt="pir" width={600} height="auto" /></p>
|[**立即获取一个**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[**立即获取一个**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)|

### **硬件概述**

<!-- ![](https://cdn.nlark.com/yuque/0/2023/jpeg/2392200/1675215940952-0f1b7772-73be-41d8-a0d4-84aab6e0987b.jpeg) -->

![1](./Seeeduino-XIAO-Expansion-Board1.jpeg)

背面有一个外部 MicroSD 卡插槽和 RTC 电池座，MicroSD 卡主要用于保存和运行文件，RTC 用于跟踪当前时间，可用于在特定时间编程操作。其尺寸比较如下图所示。

![](./Seeeduino-XIAO-Expansion-Board2.jpeg)

### **引脚排列图**[¶](https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/#pinout-diagram)

外部接口与引脚说明如下图所示。

![](./Seeeduino-XIAO-Expansion-Board3.jpeg)

## **扩展板的使用**

### **与 XIAO 连接**

如下图所示将 Seeed Studio Xiao SAMD21 插在扩展板上，Seeed Studio XIAO SAMD21 上的绿色 LED 应会亮起。

![image.png](./Seeeduino-XIAO-Expansion-Board4.png)

> ⚠️ 注意
> 请先将 XIAO 插入扩展板，然后插入Type-C，请记住将 XIAO 插入两个母头连接器的中间，否则会损坏Seeed Studio XIAO和扩展板。

## **连接电池**

XIAO 扩展板可以通过电池供电，因此如果你的项目需要移动演示，接入电池将帮助你解决供电问题。当你插入电池时，请注意正极和负极，按照图片连接电池，以防损坏电路板。

![](./Seeeduino-XIAO-Expansion-Board5.jpeg)

此外，当你接上锂电池和 Type-C 电缆，并将扩展板的开关切换到 ON 时，扩展板会为电池充电。
如下图所示，如果 LED 闪烁，这意味着电池不充电或电路板不连接电池，如果 LED 保持亮起，则表示电池正在充电。

![](./Seeeduino-XIAO-Expansion-Board6.jpeg)

## **扩展板上的模块**

丰富的板载外设，包括：

- **OLED 显示屏：**无需连接PC即可可视化数据显示，从而能够以更高效的方式进行调试，并构建传感集线器，数据监控系统等应用程序。
- **RESET** **按钮：**不再需要跳线和短接，只需单击一下即可轻松重置 XIAO。
- **SWD 调试：SWD 引脚作为公引脚接头引出，使调试器连接和固件下载更加容易。**
- **高精度 RTC：**高精度实时时钟，如果为扩展板安装了 RTC 所需的钮扣电池，可在主电源关闭时保持准确的时间。
- **可扩展存储：**背面有一个 MicroSD 卡插槽，在添加库和使用 CircuitPython 时，不再需要担心存储限制。
- **用户按钮：**除了 **RESET** 按钮，另外还提供一个用户自定义的按钮。
- **无源蜂鸣器：**可以使用它更改 PMW 频率以发出不同的哔哔声以发出“蜂鸣器音乐”声。
- **Grove 连接器：**所有引脚引出、即插即用的 Grove 连接器支持通用数据协议（两个 Grove I2C 接口、1个Grove UART 接口、1个 A0/D0 Grove 接口）
- **锂电池充电：**JST2.0mm 标准锂电池连接器和电池管理系统，支持 USB 和锂电池两种供电方式，方便机载电池充电。
- **5V 伺服连接器：**5V 输出引出至公接头，用于 5V 伺服和传感器连接。

### **在 OLED 显示屏上显示 Hello world！**

这个示例介绍如何在 XIAO 扩展板上使用 OLED 显示屏显示一个“Hello World！”的字样。

![image.png](./Seeeduino-XIAO-Expansion-Board7.png)

**第 1 步**：在扩展板上安装 Seeed Studio XIAO SAMD21，然后连接Type-C电缆。

**第 2 步**：安装 [u8g2](https://github.com/olikraus/U8g2_Arduino) 库，这是[如何安装库的指南](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)。

**第 3 步**：复制代码并粘贴下面的代码到 Ardiono IDE 中，然后上传。

**显示 Hello World！的代码如下所示：**

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ PIN_WIRE_SCL, /* data=*/ PIN_WIRE_SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup(void) {
    u8x8.begin();
    u8x8.setFlipMode(1);   // set number from 1 to 3, the screen word will rotary 180
}

void loop(void) {
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 0);
    u8x8.print("Hello World!");
}
```

代码说明：
首先，包含了三个头文件：

- `Arduino.h`，Arduino 库的主头文件。
- `U8x8lib.h`，U8g2 库的主头文件，用于控制 OLED 显示屏。
- `Wire.h`，I2C 线路通信库。

接着，定义了一个 `U8X8_SSD1306_128X64_NONAME_HW_I2C` 类型的变量 `u8x8`。这个变量是 U8g2 库中的 OLED 控制器，用于连接 OLED 显示屏。 参数是 OLED 的 SCL、SDA 端口和 Reset 端口，这里 OLED 没有 reset 端口。

`setup` 函数中，使用 `u8x8.begin()` 初始化 OLED 显示屏，并使用 `u8x8.setFlipMode(1)` 把屏幕旋转 180 度。

`loop` 函数中，使用 `u8x8.setFont(u8x8_font_chroma48medium8_r)` 设置字体，使用 `u8x8.setCursor(0, 0)`设置光标位置，最后使用 `u8x8.print("Hello World!")` 在 OLED 显示屏上打印 "Hello World!"。

### **通过用户按钮控制 LED**

这个示例介绍了如何使用 XIAO 扩展板上的按钮来控制 Seeed Studio XIAO SAMD21 上的 LED。

![](./Seeeduino-XIAO-Expansion-Board8.gif)

**第 1 步**：将 Seeed Studio XIAO SAMD21 安装到扩展板上，然后连接 Type-C 电缆。

**第 2 步**：打开 Arduino IDE，复制下面的代码并粘贴到 Arduino IDE 中，然后上传。<br/>
**代码如下：**

```cpp
const int buttonPin = 1;     // the number of the pushbutton pin
int buttonState = 0;         // variable for reading the pushbutton status

void setup() {
    // initialize the LED pin as an output:
    pinMode(LED_BUILTIN, OUTPUT);
    // initialize the pushbutton pin as an input:
    pinMode(buttonPin, INPUT_PULLUP);

}

void loop() {
    // read the state of the pushbutton value:
    buttonState = digitalRead(buttonPin);

    // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
    if (buttonState == HIGH) {
        // turn LED on:
        digitalWrite(LED_BUILTIN, HIGH);
    } else {
        // turn LED off:
        digitalWrite(LED_BUILTIN, LOW);
    }

}
```

代码说明：<br />
这段代码是一个简单的 Arduino 程序，用于控制 XIAO 板载的 LED 灯。它使用了 XIAO 扩展板的用户自定义按钮（button）来控制 LED 的开关状态。

首先，它将一个名为 `buttonPin` 的常量定义为按钮的引脚号。然后它又定义了一个变量 `buttonState` 用于读取按钮的状态。

在`setup()`函数中，它首先将内置 LED 的引脚设置为输出模式，然后将按钮的引脚设置为输入模式（使用了 `INPUT_PULLUP`参数）。

在`loop()`函数中，它会不断地读取按钮的状态。如果按钮被按下（buttonState 为 `HIGH`），则会将 LED 灯打开；如果按钮没有被按下（buttonState 为 `LOW`），则会将内置 LED 灯关闭。

### **蜂鸣器**

蜂鸣器默认连接到 A3 引脚，如果你想移除蜂鸣器功能，只需按照下面图片中的方法，切断连线。

![](./Seeeduino-XIAO-Expansion-Board9.jpeg)

#### **使用无源蜂鸣器播放歌曲**

这个例子使用 XIAO 扩展板上的蜂鸣器播放生日快乐的曲调。

**第 1 步**：将 Seeed Studio XIAO SAMD21 安装在扩展板上，然后连接 Type-C 电缆。

**第 2 步**：打开 Arduino IDE，复制代码并粘贴 Ardiono IDE，然后上传。

代码如下所示：

```cpp
int speakerPin = A3;
int length = 28; // the number of notes
char notes[] = "GGAGcB GGAGdc GGxecBA yyecdc";
int beats[] = { 2, 2, 8, 8, 8, 16, 1, 2, 2, 8, 8, 8, 16, 1, 2, 2, 8, 8, 8, 8, 16, 1, 2, 2, 8, 8, 8, 16 };
int tempo = 150;
void playTone(int tone, int duration) {
    for (long i = 0; i < duration * 1000L; i += tone * 2) {
        digitalWrite(speakerPin, HIGH);
        delayMicroseconds(tone);
        digitalWrite(speakerPin, LOW);
        delayMicroseconds(tone);
    }
}

void playNote(char note, int duration) {
    char names[] = {'C', 'D', 'E', 'F', 'G', 'A', 'B',
    'c', 'd', 'e', 'f', 'g', 'a', 'b',
    'x', 'y'
};
    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014,
    956,  834,  765,  593,  468,  346,  224,
    655 , 715
};
    int SPEE = 5;

    // play the tone corresponding to the note name

    for (int i = 0; i < 16; i++) {
        if (names[i] == note) {
            int newduration = duration / SPEE;
            playTone(tones[i], newduration);
        }
    }
}

void setup() {
    pinMode(speakerPin, OUTPUT);
}

void loop() {
    for (int i = 0; i < length; i++) {
        if (notes[i] == ' ') {
            delay(beats[i] * tempo); // rest
        } else {
            playNote(notes[i], beats[i] * tempo);
        }
        // pause between notes
        delay(tempo);
    }
}
```

代码说明：

这段代码实现了使用被动蜂鸣器播放音乐的功能。

首先在`setup()`函数中，将`speakerPin`设置为输出模式。

在`loop()`函数中，首先定义了一个长度为28的数组`notes`，其中存储着播放的音乐的音符。并且定义了一个`beats`数组，其中存储着每个音符播放的时长。

然后通过`for`循环遍历`notes`数组，如果`notes[i]`是空格，则停顿`beats[i] * tempo`的时间，如果`notes[i]`不是空格，则调用`playNote()`函数播放该音符。

`playNote()`函数中，先定义了一个`names`数组和`tones`数组，分别存储了各个音符的名称和对应的音调。然后通过`for`循环遍历`names`数组，找到当前音符对应的音调，并使用`playTone()`函数播放该音调。

最后，在`playTone()`函数中，通过循环和`digitalWrite()`函数控制`speakerPin`的高低电平来播放音调，并使用 `delayMicroseconds()`函数延时相应的时间来达到播放音调的效果。

### **通过旋转角度传感器（旋钮）控制舵机**

此示例使用旋钮通过 XIAO 扩展板上的端口控制舵机。

![](./Seeeduino-XIAO-Expansion-Board10.gif)

**第1步**：将 Seeed Studio XIAO SAMD21 安装在扩展板上，然后连接 Type-C 电缆。<br />
**第2步**：将舵机电缆连接到 I2C 端口，旋钮连接到 D0 端口。<br />
**第3步**：打开 Arduino IDE，复制下面的代码并粘贴到 Ardiono IDE 中，然后上传。<br />

代码如下所示：

```cpp
#include <Servo.h>
#include <Arduino.h>
#include <Wire.h>

#define ROTARY_ANGLE_SENSOR A0
#define ADC_REF 3 //reference voltage of ADC is 3v.If the Vcc switch on the seeeduino
#define GROVE_VCC 3 //VCC of the grove interface is normally 3v
#define FULL_ANGLE 300 //full value of the rotary angle is 300 degrees

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;    // variable to store the servo position

void setup() {
    Serial.begin(9600);
    pinMode(ROTARY_ANGLE_SENSOR, INPUT);
    myservo.attach(5);  // attaches the servo on pin 9 to the servo object
}

void loop() {

    float voltage;
    int sensor_value = analogRead(ROTARY_ANGLE_SENSOR);
    voltage = (float)sensor_value * ADC_REF / 1023;
    float degrees = (voltage * FULL_ANGLE) / GROVE_VCC;
    Serial.println("The angle between the mark and the starting position:");
    Serial.println(degrees);
    delay(50);
    myservo.write(degrees);
}
```

代码说明：

这段代码使用了一个连接到XIAO 扩展板上的集成端口的旋钮来控制舵机。

首先，在程序开头使用了三个库文件: `Servo.h`、`Arduino.h` 和`Wire.h` ，`Servo.h` 库用于控制舵机，`Arduino.h` 库用于串口通信，`Wire.h` 库用于I2C通信。

然后定义了一些常量：

1. `ROTARY_ANGLE_SENSOR`定义了旋钮的引脚号。
2. `ADC_REF`为`3`表示 ADC 的参考电压是 3V。
3. `GROVE_VCC` 为`3`表示 grove 接口的电压通常是 3V。
4. `FULL_ANGLE`为`300`表示旋转角度传感器的全量是300度。

定义了一个 Servo 对象`myservo` ，用于控制舵机。

在`setup()` 函数中，使用`Serial.begin(9600)` 初始化串口通信，`pinMode(ROTARY_ANGLE_SENSOR, INPUT)` 将旋转角度传感器的引脚设置为输入模式，`myservo.attach(5)` 将舵机的引脚连接到5号引脚上。

在`loop()` 函数中，先使用`analogRead(ROTARY_ANGLE_SENSOR)` 读取旋转角度传感器的值，将其转换为电压值，再用电压值乘以`FULL_ANGLE除以GROVE_VCC` ，得到当前旋转角度，通过`Serial.println()` 将角度值打印到串口监视器上，最后使用`myservo.write(degrees)` 将旋转角度写入舵机控制其转动。

### **RTC 实时时钟显示**

此示例使用 RTC 在 OLED 上显示时钟。<br />

![](./Seeeduino-XIAO-Expansion-Board11.gif)

**第 1 步**：将 Seeed Studio XIAO SAMD21 安装在扩展板上，然后连接 Type-C 电缆。

**第 2 步**：安装 [u8g2](https://github.com/olikraus/U8g2_Arduino) 和 [PCF8563](https://github.com/Bill2462/PCF8563-Arduino-Library) 库，这是[如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)的指南。

**第 3 步**：复制下面点代码并将其粘贴到 Ardiono IDE 中，然后上传它。

代码如下：

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <PCF8563.h>
PCF8563 pcf;
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ PIN_WIRE_SCL, /* data=*/ PIN_WIRE_SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

void setup() {
    Serial.begin(115200);
    u8x8.begin();
    u8x8.setFlipMode(1);
    Wire.begin();
    pcf.init();//initialize the clock
    pcf.stopClock();//stop the clock
    pcf.setYear(20);//set year
    pcf.setMonth(10);//set month
    pcf.setDay(23);//set dat
    pcf.setHour(17);//set hour
    pcf.setMinut(33);//set minut
    pcf.setSecond(0);//set second
    pcf.startClock();//start the clock
}

void loop() {
    Time nowTime = pcf.getTime();//get current time
    u8x8.setFont(u8x8_font_chroma48medium8_r);   // choose a suitable font

    u8x8.setCursor(0, 0);
    u8x8.print(nowTime.day);
    u8x8.print("/");
    u8x8.print(nowTime.month);
    u8x8.print("/");
    u8x8.print("20");
    u8x8.print(nowTime.year);
    u8x8.setCursor(0, 1);
    u8x8.print(nowTime.hour);
    u8x8.print(":");
    u8x8.print(nowTime.minute);
    u8x8.print(":");
    u8x8.println(nowTime.second);
    delay(1000);
}
```

代码说明：

在代码中，首先引用了 `U8x8lib.h` 和 `PCF8563.h` 两个库，并实例化了 `PCF8563` 和 `u8x8`。

在`setup()` 函数中，首先初始化了串口，然后初始化 OLED 屏幕，并将其旋转180度。接着初始化了 I2C 总线，并且初始化了 PCF8563 时钟，并将时间设置为“20年10月23日17时33分0秒”，启动了时钟。

在 `loop()` 函数中，首先调用 `pcf.getTime()` 函数来获取当前时间。然后通过 `u8x8.setCursor(0, 0)` 和`u8x8.print()` 函数将日期和时间打印到 OLED 屏幕上。最后，延迟1000毫秒。

## 亚克力外壳

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/110010024_Preview-08.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-p-4812.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>
<br />

我们制作了这个[亚克力外壳](https://www.seeedstudio.com/XIAO-p-4812.html)，以保护 Seeed Studio 扩展底座，这些是亚克力外壳组件。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/componets.png" /></div>

与 XIAO Grove Shield 相比，XIAO 扩展板为用户增加了许多有用的模块。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/board_compare.png" /></div>

这个亚克力外壳易于构建，它也可以使外观看起来更整洁。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/build_up.gif" /></div>

## **Seeed Studio XIAO SAMD21 与扩展板**

本维基介绍了如何在 [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Pre-Soldered-p-4747.html) 开发板上安装和运行 Adafruit Industries 的官方[CircuitPython](https://circuitpython.org/)！

CircuitPython 是一种用于简化在低成本微控制器板上实验和学习编程的编程语言。它使入门比以往更容易，无需预先下载桌面程序。 一旦您设置好开发板，即可打开任何文本编辑器并开始编辑代码。 有关更多信息，请参阅[此处](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)。

## **安装 CircuitPython**

**第 1 步**：在 XIAO 扩展板上安装 Seeed Studio XIAO SAMD21，然后连接 Type-C 电缆。

**第 2 步**：下载官方的 [Seeed Studio XIAO SAMD21 的 CircuitPython 引导加载程序](https://circuitpython.org/board/seeeduino_xiao/)一个 .uf2 的文件，文件将存储在你的 PC 下载目录里，如下图所示，文件的版本号可能与你下载的有所不同。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circutpyhthon.png" /></div>

**第 3 步**：在 Seeed Studio XIAO 扩展板上快速按两次重置按钮进入 DFU 启动程序模式。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/reboot_XIAO.gif" /></div>

**第 4 步**：在您的电脑上应该会出现一个名为 Arduino 的外部驱动器。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/arduino_boot.png" /></div>

将下载的 CircuitPython 的 uf2 文件拖放到 Arduino 驱动器上。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/python_to_arduino.png" /></div>

**第 5 步**：加载 CircuitPython 引导加载程序后，拔下 USB Type-C 并重新连接。应出现一个名为 CIRCUITPY 的新外部驱动器。

:::note注意：
> 对于 mac 电脑在执行拖拽复制文件的操作时，可能会出现`不能完成此操作，因为发生意外错误（错误代码100093）。`的提示。此时可以打开 mac 的终端，通过拷贝命令方式上传到 Arduino 驱动器。
:::

```shell
cp -x adafruit-circuitpython-seeeduino_xiao-en_US-5.3.1.uf2 /volumes/Arduino
```

CIRCUITPY 的新外部驱动器目录如下图所示。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Circuitpy.png" /></div>

**第 6 步**：现在，CircuitPython 已经在 Seeed Studio XIAO SAMD21 上加载！您所需要做的就是编写您的 python 程序并将其命名为`main.py`，然后将其拖放到 CIRCUITPY 驱动器上。

### CircuitPython 的 Blink 亮灯**示例**

下面这个简单的示例介绍了如何在 Seeed Studio Xiao 上，使用 CircuitPython 编写并运行点亮 XIAO 的 LED 的 Blink 示例。

**第 1 步**：在 CIRCUITPY 驱动器上创建一个名为`main`的 txt 文件。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/main_create.png" /></div>
<br />

:::note注意
不同名称的文件如：`code.txt`、`code.py`、`main.py`、`main.txt`在 CircuitPython 有不同的作用，可以参考 [CircuitPython 有关 Behavior（行为）的文档](https://docs.circuitpython.org/en/latest/README.html#behavior)。
:::

**第 2 步**：使用 REPL 获取橙色 LED 的引脚。有关REPL的详细内容可参考[Welcome to CircuitPython!](https://learn.adafruit.com/welcome-to-circuitpython/the-repl)。

要使用 REPL ，您首先需要连接到串行控制台。建立连接后，按两次 `CTRL`+`C` 进入编辑模式，分别复制下面的代码并回车

```python
>>> import board
>>> dir(board)
```

您将会看见板上所有可供您在代码中使用的引脚的列表。根据可用引脚的数量，每个板的列表会略有不同。

![image.png](./Seeeduino-XIAO-Expansion-Board12.png)

看到了 YELLOW_LED_INVERTED 吗？那就是你用来使橙色 LED 闪烁的引脚！

**第 3 步**：将下面的代码粘贴到`main.txt`文件中，然后保存它，您将在 Seeed Studio XIAO SAMD21 板上看到橙色 LED 开始闪烁。

```python
import time
import board
from digitalio import DigitalInOut, Direction

led = DigitalInOut(board.YELLOW_LED_INVERTED)
led.direction = Direction.OUTPUT

while True:
    led.value = True
    time.sleep(1)
    led.value = False
    time.sleep(1)
```

代码说明：

这是一段简单的 CircuitPython 代码，它在 Seeed Studio XIAO SAMD21 开发板上运行。

首先，它导入了 `time` 和 `board` 模块。 `time` 模块用于等待时间， `board` 模块用于访问开发板上的硬件资源。

接着，它定义了一个名为 `led` 的 `DigitalInOut` 对象，并将它分配到开发板上的 `YELLOW_LED_INVERTED` 引脚。 然后，将 `led` 的方向设置为输出。

最后，它进入了一个 `while` 无限循环。在循环中，它首先将 led 的电平设置为 `True` ，然后等待 1 秒钟。接下来，它将 led 的电平设置为 `False` 并再次等待 1 秒钟。这样就会不断地闪烁 LED 灯。

### 将 MicroSD 卡用于 Circuitpython

Seeed Studio XIAO SAMD21 内置了约 40 KB 的闪存，但可能空间不足以存储大尺寸的 python 代码文件，幸运的是，XIAO 扩展板内置了一个 MicroSD 卡插槽，用于扩展存储空间，因此您可以按照此说明来学习如何在 MicroSD 卡上运行 CircuitPython。

:::note注意
MicroSD 卡系统格式为 FAT 或 exFAT。如果您使用其他 MicroSD 卡系统格式，将导致 MicroSD 卡无法识别。
:::

**第 1 步**：准备一张 MicroSD卡，插入XIAO 扩展板。

**第 2 步**：假设您还没有下载 [CircuitPython 文件](https://circuitpython.org/board/seeeduino_xiao/)，请参考上面 安装 CircuitPython 的章节。

**第 3 步**：下载 [lib.zip](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/lib.zip) 文件，然后将其解压并替换 CIRCUITPY 驱动下的 lib 文件夹，如下图所示。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/lib_replace.png" /></div>

**第 4 步**：向 CIRCUITPY 驱动器中添加 [main.py](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/main.py) 文件，其代码如下所示。

```python
import sd
f = open("/sd/hello.txt", "r")   ## read the file from SD card
print(f.read())
```

代码说明：

这段代码首先导入了 `sd` 库，然后利用 `open()` 函数打开了存储在 SD 卡上的文件 `/sd/hello.txt`，并以只读模式读取文件。最后，使用 `read()` 方法读取文件中的内容，并使用 `print()`函数将读取的内容输出到控制台。

**第 5 步**：向 CIRCUITPY 驱动器中添加 [sd.py](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/sd.py) 文件，其代码如下所示。

```python
import os
import adafruit_sdcard
import board
import busio
import digitalio
import storage
import sys

# Connect to the card and mount the filesystem for Seeed Studio XIAO .
spi = busio.SPI(board.SCK, board.MOSI, board.MISO)
cs = digitalio.DigitalInOut(board.D2)
sdcard = adafruit_sdcard.SDCard(spi, cs)
vfs = storage.VfsFat(sdcard)
storage.mount(vfs, "/sd")
sys.path.append("/sd")
sys.path.append("/sd/lib")  ## switch to the path to SD card
```

代码说明：

这段代码是用来实现 MicroSD 卡在 Seeed Studio XIAO SAMD21 板上的操作。

首先，通过导入`os` , `adafruit_sdcard` , `board` , `busio` , `digitalio` , `storage` , `sys` 等模块来获取必要的函数和类。

接着，通过实例化`busio.SPI` , `digitalio.DigitalInOut` 类来获取 SPI 总线和片选信号。

之后，实例化一个`SDCard` 类，并通过`vfs = storage.VfsFat(sdcard)` 来连接 SD 卡。

然后调用`storage.mount(vfs, "/sd")` 来挂载 SD 卡到`/sd` 路径。

最后，通过`sys.path.append("/sd")` 和`sys.path.append("/sd/lib")` 来将 SD 卡的路径添加到系统路径中。这样就可以在 python 程序中访问 SD 卡上的文件。

#### 从 MicroSD 卡运行蜂鸣器示例程序

此示例用于通过运行 MicroSD 卡中的蜂鸣器程序 [buzzer.py](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/buzzer.py) 来测试蜂鸣器。

**第 1 步**：您只需将 [buzzer.py](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/buzzer.py) 添加到 MicroSD 卡中即可。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/sd_card_store.png" /></div>

蜂鸣器程序如下所示：

```python
import time
import board
import pulseio
 
buzzer = pulseio.PWMOut(board.A3)
 
while True:
    buzzer.duty_cycle = 32767
    time.sleep(0.5)
    buzzer.duty_cycle = 0
    time.sleep(0.5)
```

代码说明：

这段代码使用了 Python 的 `time` 和 `pulseio` 库来控制板载的蜂鸣器。它首先定义了一个名为 `buzzer` 的 PWM 输出引脚，并将其连接到板载的 `A3` 引脚上。然后，它进入了一个 `while` 无限循环，每次循环中都将 buzzer 的占空比设置为 `32767` ，然后等待 0.5 秒，再将占空比设置为 `0` ，再等待 0.5 秒。这将导致蜂鸣器在 0.5 秒间隔内交替发出声音。

**第 2 步**：在 CIRCUITPY 驱动器中打开并编辑 `main.py` 文件。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/main.PY.png" /></div>

**第 3 步**：在 `main.py` 文件顶部添加一行内容：`import buzzer`。

<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/add_buzzer.png" /></div>

完成所有步骤并保存后，蜂鸣器将开始鸣叫。如果要在 MicroSD 卡中运行其他 python 文件，请模仿示例。

> ⚠️ 注意
> 如果你想回到 Arduino 模式，你只需要在 Arduino IDE 上上传任何程序。

## **项目示例**

### **项目 1 - 遥控风扇**

**概述**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remoteFan-g.gif" /></div>

这个示例介绍了如何制作一个可放在房间内保持凉爽的迷你风扇。

**功能**

- 可以自动摇头的风扇

**所需组件**

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)
- [Grove- 迷你风扇](https://www.seeedstudio.com/Grove-Mini-Fan-v1-1.html)
- [Grove - 舵机](https://www.seeedstudio.com/Grove-Servo.html)
- [Grove - IR（红外）接收器](https://www.seeedstudio.com/Grove-Infrared-Receiver.html)

**硬件连接**

请将风扇用 Grove 线连接到`D0`口，舵机用 Grove 线连接到 `I2C`口 ，将红外接收器模块用 Grove 线连接到`D7`口。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_fan_pic.png" /></div>

**Arduino 编程说明**

第 1 步：按照连接图连接所有传感器。

第 2 步：在 Arduino IDE 中安装 [Arduino-IRremote 库](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev) ，这是[如何安装库的指南](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)。

第 3 步：将下面风扇的代码复制到 Aruino IDE 中，然后上传。

第 4 步：将风扇放在安全位置，尝试按下按钮确保它可以安全工作。

```cpp
#include <IRremote.h>
#include <Servo.h>

Servo myservo;  // create servo object to control a servo
int RECV_PIN = 7; // set pin 2 as IR control

IRrecv irrecv(RECV_PIN);

decode_results results;

int pos = 90;    // variable to store the servo position
int fanPin = 0;  // set D6 as control switch
int fanState = LOW;
int IO = 0;

void setup()
{
    Serial.begin(9600);
    Serial.println("Enabling IRin");  // remind enabling IR
    irrecv.enableIRIn(); // Start the receiver
    Serial.println("Enabled IRin");
    myservo.attach(5);  // attaches the servo on pin 2 to the servo object
    pinMode(fanPin, OUTPUT);

}

void loop() {
    if (irrecv.decode(&results)) { //checking IR signal
        if (results.value == 2155829415) {    // Power off/on
            IO++;
            if (IO % 2 == 0) {
                fanState = HIGH;
                digitalWrite(fanPin, fanState);
                delay(100);
            }
            else {
                fanState = LOW;
                digitalWrite(fanPin, fanState);
                delay(100);
            }
        }

        if (results.value == 2155821255 ) {    // fan swing to left
            for (pos; pos <= 89; pos += 1) { // goes from 0 degrees to 90 degrees
                // in steps of 1 degree
                myservo.write(pos);              // tell servo to go to position in variable 'pos'

                delay(40);                       // waits 15ms for the servo to reach the position
                if (irrecv.decode(&results)) {
                    irrecv.resume();
                    if (results.value == 2155870215)
                        break;
                }
            }
        }

        if (results.value == 2155870215 ) {    // fan swing to right
            for (pos; pos >= 1; pos -= 1) { // goes from 90 degrees to 0 degrees
                myservo.write(pos);              // tell servo to go to position in variable 'pos'
                delay(40);                       // waits 15ms for the servo to reach the position

                if (irrecv.decode(&results)) {
                    irrecv.resume();
                    if (results.value == 2155821255)
                        break;
                }
            }
        }
        Serial.println(pos);
        Serial.println(results.value, HEX);
        Serial.println(results.value);
        irrecv.resume();                    //recive next intrustion
    }
    delay(100);
}
```

代码说明：

这段代码是一个 Arduino 程序，用于控制一个迷你风扇。它使用了 `IRremote` 库和 `Servo` 库。

在 `setup()`函数中，会打开串口通信，并启用 IR 接收器。同时，会定义一个 Servo 对象和两个整型变量，用于控制风扇和舵机。

在`loop()`函数中，会持续检查 IR 接收器是否有信号传入。如果有，会使用 if 语句判断是哪一个按键被按下。

- 如果收到的按键信息是`2155829415`，那么会执行风扇开关操作。它会使用一个变量 `IO` 记录当前风扇的状态，并在每次按键后改变它。
- 如果收到的按键信息是`2155821255`，那么会执行风扇向左摆动操作。它会使用一个变量 `pos` 记录当前舵机的位置，并在每次按键后通过循环不断改变它。
- 如果收到的按键信息是`2155870215`，那么会执行风扇向右摆动操作。它同样会使用变量 `pos` 记录当前舵机的位置，并在每次按键后通过循环不断改变它。

这段代码还会使用 `Serial.println()` 函数打印出一些调试信息，用于查看程序运行情况。

> ⚠️ 注意
> 不同种类遥控器接收的按键信息会不同，可以先用串口调试器打印期望使用的遥控按键信息，并修改程序中的按键信息与实际的按键相匹配。

### **项目2 - 遥控车**

**概述**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_control_car.gif" /></div>

这个示例介绍了如何制作遥控车。

**功能**

- 迷你尺寸车辆易于穿过狭窄道路

**所需组件**

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)
- [Grove - I2C 微型电机驱动器](https://www.seeedstudio.com/Grove-I2C-Mini-Motor-Driver.html)
- [直流电机](https://www.seeedstudio.com/130-DC-Motor-p-2023.html)
- [Grove - IR（红外）接收器](https://www.seeedstudio.com/Grove-Infrared-Receiver.html)

**硬件连接**

请按照相同颜色线连接板上的每个传感器和电机。请将红外传感器用 Grove 电缆连接到 `D0`口，将微型电机驱动器模块用 Grove 电缆连接到 `I2C` 口。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_car.jpg" /></div>

**Arduino 编程说明**

**第 1 步**：按照连接图片连接板上的所有传感器。

**第 2 步**：在 Arduino IDE 中安装 [Arduino-IRremote](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev) 和[电机驱动程序库](https://github.com/Seeed-Studio/Drv8830_Motor_Driver)，这是[如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)的指南。

**第 3 步**：复制以下代码到 Arduino IDE，然后上传。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <IRremote.h>
#include <SparkFunMiniMoto.h>  // Include the MiniMoto library
// Create two MiniMoto instances, with different address settings.
MiniMoto motor0(0xC4); // A1 = 1, A0 = clear
MiniMoto motor1(0xC0); // A1 = 1, A0 = 1 (default)

#define FAULTn  1     // Pin used for fault detection.

int RECV_PIN = 0; // set pin 2 as IR control
IRrecv irrecv(RECV_PIN);
decode_results results;

void setup() {
    Serial.begin(9600);
    Serial.println("Enabling IRin");  // remind enabling IR
    irrecv.enableIRIn(); // Start the receiver
    pinMode(FAULTn, INPUT);
}

void loop() {
    if (irrecv.decode(&results)) { //checking IR signal
        if (results.value == 2155862055) {
            //Forward  2155862055
            motor0.drive(-600);
            motor1.drive(600);
            delayUntil(20);
        }
        if (results.value == 2155813095) {
            //Brake   2155813095
            motor0.brake();
            motor1.brake();
            delay(100);
        }
        if (results.value == 2155823295) {
            //backward  2155823295
            motor0.drive(600);
            motor1.drive(-600);
            delayUntil(20);
        }
        if (results.value == 2155829415) {
            //Stop  2155829415
            motor0.stop();
            motor1.stop();
            delay(100);
        }
        if (results.value == 2155821255) {
            //turn right   2155821255
            motor0.drive(600);
            motor1.drive(600);
            delayUntil(20);
        }
        if (results.value == 2155837575) {
            //turn left    2155837575
            motor0.drive(-600);
            motor1.drive(-600);
            delayUntil(20);
        }
        irrecv.resume();                    //recive next intrustion

    }
    delay(100);
}

void delayUntil(unsigned long elapsedTime) {
    unsigned long startTime = millis();
    while (startTime + elapsedTime > millis()) {
        if (digitalRead(FAULTn) == LOW) {
            byte result = motor0.getFault();
            result = motor1.getFault();
        }
    }
}
```

代码说明：

这段代码是一个使用红外遥控器控制小车运动的例子。

首先，它引用了几个库文件，包括 `Arduino.h`、`U8g2lib.h`、`IRremote.h` 和 `SparkFunMiniMoto.h`。这些库文件分别包含了 Arduino 的基本功能、显示控制、红外遥控器控制和电机控制的功能。

之后，它定义了两个电机的实例，并设置了不同的地址。
它还定义了一个用于检测故障的引脚。

在`setup()`函数里，它开始了串口通信，并启用了红外接收器。

在`loop()`函数里，它不断检测红外信号，如果检测到信号，就会对不同的信号值进行不同的操作，例如前进、后退、停止、左转和右转。

在 `delayUntil()` 函数里，它检测了故障信号，如果检测到故障，就会停止电机运动。

### **项目3 - 基于 XIAO 的指纹解锁宝盒**

**概述**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_open.gif" /></div>

这个盒子可以存放你的重要东西，你不用担心有人会拿走你的东西，盒子有指纹锁来保护你的东西，如果指纹授权失败，蜂鸣器会报警，LED 环会显示红色，只有你的手指通过授权时，LED 环将显示绿色并打开盒子。

**特征**

- 记录您的指纹
- LED 环可以提醒你锁定状态
- OLED 屏幕可以显示当前信息
- 蜂鸣器可以提醒您指纹是否通过授权

**所需组件**

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)
- [Seeed Grove - 电容式指纹扫描仪/传感器](https://www.hackster.io/products/buy/80263?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)
- [Grove - RGB LED 环](https://www.hackster.io/products/buy/80264?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)
- [Grove - 舵机](https://www.hackster.io/products/buy/80265?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)

**硬件连接**

请按照下图所示连接板上的每个模块。将指纹模块连接到 XIAO 扩展板的 `UART` 口，舵机连接到 XIAO 扩展板的 `D0` 口。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/finger_pinter.png" /></div>

如下图所示，注意灯环通过三根不同颜色的线和 XIAO 开发板的引脚直接连接：将灯环的 `DIN` 引脚用黄色线与 XIAO 的 `D1` 引脚连接，将灯环的 `VIN` 用红色线与 XIAO 的 `3V3` 引脚连接，将灯环的 `GND` 用黑色线与 XIAO 的 `GND` 引脚连接。

![](./Seeeduino-XIAO-Expansion-Board13.jpeg)

**Arduino 编程说明**

第 1 步：按照连接图连接板上的所有传感器。

第 2 步：在 Aruidno IDE 下安装  [u8g2](https://github.com/olikraus/U8g2_Arduino)，[Servo](https://github.com/arduino-libraries/Servo)，[Seeed_Arduino_KCT202](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202) 和 [Seeed_LED_Ring](https://github.com/Seeed-Studio/Seeed_LED_Ring) 库，这是[如何安装库的指南](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)。

第 3 步：在 Aruino IDE 上复制下面的代码，然后上传到 XIAO。

```cpp
#include <Servo.h>
#include <Arduino.h>
#include <U8x8lib.h>
#include "ATSerial.h"
#include "Protocol.h"
#include "KCT202.h"
#include "Adafruit_NeoPixel.h"
 
#define PIXEL_PIN    2    // Digital IO pin connected to the NeoPixels.
#define PIXEL_COUNT 24
#define debug SerialUSB
#define uart  Serial1
FingerPrint_KCT202<Uart, Serial_> kct202;
Adafruit_NeoPixel strip = Adafruit_NeoPixel(PIXEL_COUNT, PIXEL_PIN, NEO_GRB + NEO_KHZ800);
 
Servo myservo;
 
Protocol_oprt oprt;
uint8_t err_code = 0;
uint8_t param[10];
uint32_t param_len;
int pos = 0;
const int buttonPin = 1;
int buttonState = 0;
int BuzzerPin = A3;
 
U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);
 
void setup(void) {
  Serial.begin(115200);
  strip.setBrightness(255);
  strip.begin();
  strip.show(); // Initialize all pixels to 'off'
  colorWipe(strip.Color(125, 0, 125), 50);
  u8x8.begin();
  u8x8.setFlipMode(0);
  debug.begin(115200);
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(BuzzerPin, OUTPUT);
  kct202.begin(uart, debug);
  myservo.attach(0);
  myservo.write(0);
  kct202.autoRegisterFingerPrint(1, 4, LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP | OVERRIDE_CURR_FINGER_PRINT);
 
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 3);
  u8x8.print("finger recording");
  if (0 == kct202.getRegisterResponAndparse()) {
    debug.println("Register ok!");
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("    be ready    ");
    delay(500);
    colorWipe(strip.Color(0, 125, 125), 50);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 3 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 2 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   *** 1 ***    ");
    delay(500);
    u8x8.setCursor(0, 3);
    u8x8.print("   Registered");
    delay(800);
  }
}
 
void loop(void) {
  uint16_t finger_num = 0;
 
  kct202.autoVerifyFingerPrint(CHECK_ALL_FINGER_TEMP,
                               LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP);
  u8x8.setFont(u8x8_font_chroma48medium8_r);
  u8x8.setCursor(0, 3);
  u8x8.print(" Please verify  ");
 
  if (0 == kct202.getVerifyResponAndparse(finger_num)) {
    debug.println("Verify ok!");
    debug.print("Your finger temp id = ");
    debug.println(finger_num, HEX);
    colorWipe(strip.Color(0, 255, 30), 50);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("Identity comfirm");
    delay(800);
 
    analogWrite(BuzzerPin, 128);
    delay(100);
    analogWrite(BuzzerPin, 0);
    delay(100);
    analogWrite(BuzzerPin, 128);
    delay(100);
    analogWrite(BuzzerPin, 0);
    delay(100);
 
    for (pos = 0; pos <= 90; pos += 1) {
      myservo.write(pos);
      delay(15);
    }
    while (1) {
      //      pinMode(buttonPin, INPUT);
      buttonState = digitalRead(buttonPin);
      u8x8.setFont(u8x8_font_chroma48medium8_r);
      u8x8.setCursor(0, 3);
      u8x8.print("Please close    ");
      Serial.println(pos);
      Serial.println(buttonState);
      if (buttonState == LOW && pos == 91) {
        for (pos = 91; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
          u8x8.setFont(u8x8_font_chroma48medium8_r);
          u8x8.setCursor(0, 3);
          u8x8.print("Lock closing    ");
          myservo.write(pos);              // tell servo to go to position in variable 'pos'
          delay(15);                       // waits 15ms for the servo to reach the position
        }
        colorWipe(strip.Color(255, 0, 0), 50);
        break;
      }
    }
  }
 
  else {
    colorWipe(strip.Color(255, 0, 0), 50);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print(" Identity deny ");
    //    myservo.write(0);
    delay(200);
 
  analogWrite(BuzzerPin, 250);
  delay(2000);
    analogWrite(BuzzerPin, 0);
  delay(100);
 
    u8x8.setCursor(0, 3);
    u8x8.print("  Please retry  ");
    delay(1500);
  }
}
 
void colorWipe(uint32_t c, uint8_t wait) {
  for (uint16_t i = 0; i < strip.numPixels(); i++) {
    strip.setPixelColor(i, c);
    strip.show();
    delay(70);
  }
}

```

代码说明：

这段代码是用于指纹识别的 Arduino 代码。它包含了一些库的头文件，如 `Servo.h`, `Arduino.h`, `U8x8lib.h`, `ATSerial.h`, `Protocol.h`, `KCT202.h` 和 `Adafruit_NeoPixel.h`。它运用了一个指纹传感器 (FingerPrint_KCT202) 和一个 NeoPixel LED 灯带 (Adafruit_NeoPixel)。代码中还定义了一些常量和变量，如 `PIXEL_PIN`, `PIXEL_COUNT`, `buttonPin`, `BuzzerPin` 等。

`setup()`函数里面是在进行初始化设置。它首先配置了串口通讯，然后对 NeoPixel LED 灯带进行了一些设置，如设置亮度。接着它开始指纹传感器，连接了一个舵机，并且调用了 `kct202.autoRegisterFingerPrint()`函数来自动录入指纹。

`loop()`函数是主要的循环函数。它调用了 `kct202.autoVerifyFingerPrint()`函数来自动验证指纹，并调用 `kct202.getVerifyResponAndparse()`函数来解析验证结果。如果验证成功，它会输出"Verify ok!"并打印出指纹模板编号。然后它会点亮 NeoPixel LED 灯带并发出蜂鸣声。

**实例演示**

1. 记录您的指纹

屏幕将在开始时显示指纹录制，您只需将手指放在指纹设备上，之后，程序将分析您的指纹，然后完成注册。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_record.gif" /></div>

2.身份验证（通过认证）

屏幕将显示“Please verify”（请验证），您需要将手指放在指纹设备上，然后 LED 环将变为绿色。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_open.gif" /></div>

3.身份验证（未通过认证）

如果其他人把手指放在上面，LED 环将变成红色，板子上将显示“Identity deny”（身份否定），同时警报将工作。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_close.gif" /></div>

### **项目4 -雷神之锤**

**概述**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/mjolnir/humer1.png" /></div>

这把锤子模拟了雷神之锤，您需要在这个设备上记录自己的指纹，然后你将成为它的主人。锤子通过电磁铁吸附在凹槽上，直到它的主人通过指纹解锁，锤子才能被拿走。

**所需组件**

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)
- [Seeed Grove - 电容式指纹扫描仪/传感器](https://www.hackster.io/products/buy/80263?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)
- [Grove - 电磁铁](https://www.hackster.io/products/buy/32769?s=BAhJIhMzNzQxMDUsUHJvamVjdAY6BkVG%0A)

**硬件连接**

请用 Grove 线将扩展板与所需模块连接，将 Grove 的 电磁铁模块接 `D0` 口，将指纹模块接到 `I2C` 口。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/mjolnir/66666.png" /></div>

**Arduino 编程说明**

**第 1 步**：按照上图连接板的所有传感器。

**第 2 步**：在 Aruidno IDE 上安装 [u8g2](https://github.com/olikraus/U8g2_Arduino) ，[Seeed_Arduino_KCT202](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202) 库，这是[如何安装库的指南](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)。

**第 3 步**：复制下面的代码到 Aruino IDE ，然后上传到 XIAO。

```cpp
#include <U8x8lib.h>
#include "ATSerial.h"
#include "Protocol.h"
#include "KCT202.h"

#define debug SerialUSB
#define uart  Serial1
FingerPrint_KCT202<Uart, Serial_> kct202;

Protocol_oprt oprt;
uint8_t err_code = 0;
uint8_t param[10];
uint32_t param_len;

int Electromagnet = 0;

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

// the setup routine runs once when you press reset:
void setup() {
    // initialize the digital pin as an output.

    u8x8.begin();
    u8x8.setFlipMode(0);
    debug.begin(115200);
    pinMode(Electromagnet, OUTPUT);
    digitalWrite(Electromagnet, HIGH);  // turn the Electromagnet on (HIGH is the voltage level)
    kct202.begin(uart, debug);
    kct202.autoRegisterFingerPrint(1, 4, LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP | OVERRIDE_CURR_FINGER_PRINT);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print("finger recording");
    if (0 == kct202.getRegisterResponAndparse()) {
        u8x8.setFont(u8x8_font_chroma48medium8_r);
        u8x8.setCursor(0, 3);
        u8x8.print("    be ready    ");
        delay(500);
        u8x8.setCursor(0, 3);
        u8x8.print("   *** 3 ***    ");
        delay(500);
        u8x8.setCursor(0, 3);
        u8x8.print("   *** 2 ***    ");
        delay(500);
        u8x8.setCursor(0, 3);
        u8x8.print("   *** 1 ***    ");
        delay(500);
        u8x8.setCursor(0, 3);
        u8x8.print("   Registered");
        delay(800);
    }

}

// the loop routine runs over and over again forever:
void loop() {

    uint16_t finger_num = 0;
    kct202.autoVerifyFingerPrint(CHECK_ALL_FINGER_TEMP, LED_OFF_AFTER_GET_GRAGH | PRETREATMENT_GRAGH | NOT_RET_FOR_EVERY_STEP);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 3);
    u8x8.print(" Please verify  ");

    if (0 == kct202.getVerifyResponAndparse(finger_num)) {
        u8x8.setFont(u8x8_font_chroma48medium8_r);
        u8x8.setCursor(0, 3);
        u8x8.print("Identity comfirm");
        delay(800);
        digitalWrite(Electromagnet, LOW);  // turn the Electromagnet on (HIGH is the voltage level)
        delay(5000);
        digitalWrite(Electromagnet, HIGH);
    }

    else {
        u8x8.setFont(u8x8_font_chroma48medium8_r);
        u8x8.setCursor(0, 3);
        u8x8.print(" Identity deny ");
        //    myservo.write(0);
        delay(200);

        u8x8.setCursor(0, 3);
        u8x8.print("  Please retry  ");
        delay(1500);
        digitalWrite(Electromagnet, HIGH);  // turn the Electromagnet on (HIGH is the voltage level)

    }
}
```

代码说明：

这段代码是使用了一个名为 KCT202 的指纹识别模块的 Arduino 程序。它包含了一些头文件，如 `U8x8lib.h` 、`ATSerial.h` 、`Protocol.h` 和 `KCT202.h` 。这些头文件包含了控制显示屏、串口通信、指纹识别模块的协议和 KCT202 指纹识别模块所需的函数。

在 `setup()`函数中，它首先初始化了一个名为 `Electromagnet` 的数字引脚，并将其设置为输出模式。接着，它将 `Electromagnet` 引脚设置为高电平，以便开启电磁铁。然后，它调用了 `kct202.begin()`函数来初始化指纹识别模块，并调用了 `kct202.autoRegisterFingerPrint()` 函数来注册指纹。当指纹被成功注册后，它会在显示屏上显示 "Registered"。

在 `loop()` 函数中，它首先调用了 `kct202.autoVerifyFingerPrint()` 函数来验证已经注册的指纹，并在显示屏上显示 "Please verify"。如果验证成功，它会在显示屏上显示 "Identity confirm"，并将 Electromagnet 引脚设置为低电平，以便关闭电磁铁。如果验证失败，它会在显示屏上显示 "Identity deny"，并在 5 秒后将 Electromagnet 引脚设置回高电平。

### 项目5 - 空气质量指示器

**概述**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Air_Quality_Sensor_Hub/environment_detect_g.gif" /></div>
这是一个环境检测设备，通过 Grove - Laser PM2.5 Sensor、Grove - CO2 & Temperature & Humidity sensor 和 Grove - Dust Sensor 分别收集 PM2.5、PM10、温度、湿度、CO2 和粉尘颗粒 数据。

**硬件列表**

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)
- [Seeed Grove - CO2 及温湿度传感器 for Arduino (SCD30) - 3合1](https://www.hackster.io/products/buy/80471?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)
- [Seeed Grove - Laser PM2.5 Dust Sensor - Arduino Compatible - HM3301](https://www.hackster.io/products/buy/80472?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)
- [Seeed Grove - Dust Sensor（PPD42NS）](https://www.hackster.io/products/buy/30140?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)

**硬件连接**

请按下图所示连接每个传感器。将 CO2 传感器和 PM2.5传感器分别连接到2个`I2C` 口，Dust 传感器连接到 `UART` 口。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Air_Quality_Sensor_Hub/environment_detect_g.png" /></div>

**Arduino说明**

**第 1 步**：按连接图连接板上的所有传感器。

**第 2 步**：在 Aruidno IDE 上安装 [u8g2](https://github.com/olikraus/U8g2_Arduino)、[Seeed_PPM_5_sensor_HM3301](https://github.com/Seeed-Studio/Seeed_PM2_5_sensor_HM3301) 和 [Seeed_SCD30](https://github.com/Seeed-Studio/Seeed_SCD30) 库，这是[如何安装库的指南](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)。

**第 3 步**：在 Aruino IDE 上复制下面的代码，并上传到 XIAO。

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Seeed_HM330X.h>
#include "SCD30.h"

#define SERIAL_OUTPUT SerialUSB
#define SERIAL SerialUSB

int pin = 7;
unsigned long duration;
unsigned long starttime;
unsigned long sampletime_ms = 5000;//sampe 30s ;
unsigned long lowpulseoccupancy = 0;
float ratio = 0;
float concentration = 0;

const int buttonPin = 1;
int buttonState = 0;
int memu = 0;

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);
HM330X sensor;
uint8_t buf[30];

const char* str[] = {"sensor num: ", "PM1.0 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
"PM2.5 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
"PM10 concentration(CF=1,Standard particulate matter,unit:ug/m3): ",
"PM1.0 concentration(Atmospheric environment,unit:ug/m3): ",
"PM2.5 concentration(Atmospheric environment,unit:ug/m3): ",
"PM10 concentration(Atmospheric environment,unit:ug/m3): ",
};


///////////////////////////////////////////////////////////////////
//PM2.5 concentration(Atmospheric environment,unit:ug/m3): value
///////////////////////////////////////////////////////////////////
HM330XErrorCode print_result(const char* str, uint16_t value) {
    if (NULL == str) {
        return ERROR_PARAM;
    }
    //  SERIAL_OUTPUT.print(str);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 0);
    u8x8.print("PM2.5: ");
    u8x8.setCursor(7, 0);
    u8x8.print(value);
    u8x8.setCursor(11, 0);
    u8x8.print("ug/m");
    Serial.println(value);
    return NO_ERROR;
}

HM330XErrorCode print_result_1(const char* str, uint16_t value) {
    if (NULL == str) {
        return ERROR_PARAM;
    }
    //  SERIAL_OUTPUT.print(str);
    u8x8.setFont(u8x8_font_chroma48medium8_r);
    u8x8.setCursor(0, 0);
    u8x8.print("PM10: ");
    u8x8.setCursor(7, 0);
    u8x8.print(value);
    u8x8.setCursor(11, 0);
    u8x8.print("ug/m");
    Serial.println(value);
    return NO_ERROR;
}

/*parse buf with 29 uint8_t-data*/
HM330XErrorCode parse_result(uint8_t* data) {
    uint16_t value = 0;
    if (NULL == data) {
        return ERROR_PARAM;
    }
    value = (uint16_t) data[6 * 2] << 8 | data[6 * 2 + 1];
    print_result(str[6 - 1], value);
    return NO_ERROR;
}


HM330XErrorCode parse_result2(uint8_t* data) {
    uint16_t value = 0;
    if (NULL == data) {
        return ERROR_PARAM;
    }
    value = (uint16_t) data[7 * 2] << 8 | data[7 * 2 + 1];
    print_result_1(str[7 - 1], value);
    return NO_ERROR;
}

////////////////////////////////////////////////////////////////////

/*30s*/
void setup() {
    Serial.begin(115200);
    Wire.begin();
    u8x8.begin();
    u8x8.setFlipMode(0);
    scd30.initialize();
    pinMode(pin, INPUT);
    pinMode(buttonPin, INPUT_PULLUP);
    starttime = millis();//get the current time;

}

void loop() {
    float result[3] = {0};
    duration = pulseIn(pin, LOW);
    lowpulseoccupancy = lowpulseoccupancy + duration;

    buttonState = digitalRead(buttonPin);

    if (buttonState == LOW) {
memu++;
delay(15);
if (memu == 2) {
memu = 0;
}
}
Serial.println(memu);

if (scd30.isAvailable() && memu == 0) {
scd30.getCarbonDioxideConcentration(result);
u8x8.setFont(u8x8_font_chroma48medium8_r);
u8x8.setCursor(0, 3);
u8x8.print("CO2: ");
u8x8.setCursor(5, 3);
u8x8.print(result[0]);
u8x8.setCursor(12, 3);
u8x8.print("pmm");
delay(1000);
}

if (sensor.read_sensor_value(buf, 29) && memu == 0) {
SERIAL_OUTPUT.println("HM330X read result failed!!!");
}
if(memu == 0){
parse_result(buf);
}

if ((millis() - starttime) > sampletime_ms  && memu == 0) {
ratio = lowpulseoccupancy / (sampletime_ms * 10.0); // Integer percentage 0=>100
concentration = 1.1 * pow(ratio, 3) - 3.8 * pow(ratio, 2) + 520 * ratio + 0.62; // using spec sheet curve

u8x8.setFont(u8x8_font_chroma48medium8_r);
u8x8.setCursor(0, 6);
u8x8.print("Dust: ");

u8x8.setCursor(6, 6);
u8x8.print(concentration);

u8x8.setCursor(12, 6);
u8x8.print("pcs");

//    Serial.println(concentration);
lowpulseoccupancy = 0;
starttime = millis();
}



if (scd30.isAvailable() && memu == 1) {
scd30.getCarbonDioxideConcentration(result);
u8x8.setFont(u8x8_font_chroma48medium8_r);
u8x8.setCursor(0, 3);
u8x8.print("Temp: ");
u8x8.setCursor(6, 3);
u8x8.print(result[1]);
u8x8.setCursor(10, 3);
u8x8.print(" C   ");

u8x8.setCursor(0, 6);
u8x8.print("Humi: ");
u8x8.setCursor(5, 6);
u8x8.print(result[2]);
u8x8.setCursor(8, 6);
u8x8.print("  %     ");

delay(1000);
}

if (sensor.read_sensor_value(buf, 29) && memu == 1) {
SERIAL_OUTPUT.println("HM330X read result failed!!!");
}
if(memu == 1){
parse_result2(buf);
}
}
```

代码说明：

这段代码是使用了 Arduino 的一些库和硬件设备来测量 PM2.5 和 PM10 的浓度。

首先包含了几个头文件：

- `Arduino.h`：Arduino 的核心库，包含了基本的 Arduino 函数和变量。
- `U8x8lib.h`：用于控制 OLED 显示屏的库。
- `Seeed_HM330X.h`：用于控制 PM2.5/PM10 浓度传感器的库。
- `SCD30.h`：用于控制 CO2 与温湿度传感器的库。

定义了一些变量，包括：

- `pin`：传感器的数字输入端口。
- `duration`：脉冲的持续时间。
- `starttime`：开始时间。
- `sampletime_ms`：采样时间，设置为 30 秒。
- `lowpulseoccupancy`：低电平脉冲占用时间。
- `concentration`：浓度。
- `buttonPin`：按键的数字输入端口。
- `buttonState`：按键状态。
- `memu`：用于记录按钮按下的次数。

其中还有几个常量：

- `str`：存储了一些字符串，可能是显示在 OLED 屏幕上的字符串。

在 `setup()` 函数里，首先配置了串口，I2C 通信，OLED 屏幕，传感器等。

在`loop()`函数里，程序不断地读取传感器的值，并在 OLED 屏幕上显示 PM2.5 等传感器的数值。

### **项目6 - 心率监测**

**概述**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Heartrate_Monitor_Watch/heartRate.gif" /></div>

这个简单而便宜的项目基于 XIAO 扩展板来报告心率。

**硬件列表**

- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO 扩展板](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)
- [Seeed Grove - 指夹式心率传感器](https://www.hackster.io/products/buy/80359?s=BAhJIhMzNzExNzMsUHJvamVjdAY6BkVG%0A)

**硬件连接**

如下图所示，将心率传感器与 XIAO 扩展板的 `I2C` 接口连接。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Heartrate_Monitor_Watch/heart_detect.png" /></div>

**Arduino 编程说明**

**第 1 步**：按照连接图连接板上的所有传感器。

**第 2 步**：在 Aruidno IDE 上安装 [u8g2](https://github.com/olikraus/U8g2_Arduino) 库，这是[如何安装库的指南](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)。

**第 3 步**：在 Aruino IDE 上复制下面的代码，并上传到 XIAO。

```cpp
#include <Arduino.h>
#include <U8x8lib.h>

#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* reset=*/ U8X8_PIN_NONE);

void setup() {
    Serial.begin(9600);
    Serial.println("heart rate sensor:");

    u8x8.begin();
    u8x8.setFlipMode(1);
    Wire.begin();
}
void loop() {
    Wire.requestFrom(0xA0 >> 1, 1);    // request 1 bytes from slave device
    while (Wire.available()) {         // slave may send less than requested
        unsigned char c = Wire.read();   // receive heart rate value (a byte)
        u8x8.setFont(u8x8_font_chroma48medium8_r);
        //    u8x8.setCursor(0, 3);
        //    u8x8.print("blood detecting ");
        //    delay(10000);

        u8x8.setCursor(0, 3);
        u8x8.print("HeartRate: ");
        u8x8.setCursor(10, 3);
        u8x8.print(c);
        u8x8.setCursor(13, 3);
        u8x8.print("bpm");
        Serial.println(c);

    }
    delay(500);
}
```

代码说明：

这段代码是一个 Arduino 程序，用于读取心率传感器的数据并将其显示在 OLED 屏幕上。

首先，代码包含了 `Arduino.h` 和 `U8x8lib.h` 两个库，其中 `Arduino.h` 是 Arduino 的核心库，提供了基本的硬件控制功能，而 `U8x8lib.h` 则是一个用于控制 OLED 屏幕的库。

然后，定义了一个 `U8X8_SSD1306_128X64_NONAME_HW_I2C` 类型的对象 `u8x8` ，用于控制 OLED 屏幕。

在 `setup()` 函数中，首先启动了串口，然后初始化了 OLED 屏幕和 I2C 接口。

在 `loop()` 函数中，首先使用 `Wire.requestFrom(0xA0 >> 1, 1)`函数向 I2C 从设备发送请求，请求 1 字节的数据。然后，使用 `while (Wire.available())` 循环来读取 I2C 设备返回的数据。在循环中，代码使用 `Wire.read()` 函数读取传感器返回的心率值，并将其显示在 OLED 屏幕上，同时在串口上输出。最后，代码使用 `delay(500)` 函数让程序暂停 500 毫秒，再次读取数据。
