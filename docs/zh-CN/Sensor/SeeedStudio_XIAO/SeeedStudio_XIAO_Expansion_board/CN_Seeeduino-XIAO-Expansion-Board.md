---
description: Seeed Studio XIAO扩展板
title: 基于 XIAO 的多功能扩展板
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino-XIAO-Expansion-Board
last_update:
  date: 10/28/2023
  author: 金 菊
---


<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" /></div>

一个功能强大的扩展板，适用于Seeed Studio XIAO，仅有Raspberry Pi 4大小的一半。它能够以简单快捷的方式构建原型和项目。具有丰富的外设，包括OLED显示屏、RTC实时时钟、可扩展存储器、无源蜂鸣器、复位/用户按钮、5V舵机连接器、多个数据接口…您可以探索Seeed Studio XIAO的无限可能性。此板还对 [Circuitpython](https://circuitpython.org/) 提供了良好的支持。

由于Seeed Studio XIAO的形式因素，所有Seeed Studio XIAO板都支持 [Seeed Studio XIAO的Grove扩展板](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) 和 [Seeed Studio XIAO的扩展基座](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)。这两者之间的引脚有一些细微的差异，但通过参考引脚图，很容易进行管理。

Seeed Studio XIAO SAMD21、Seeed Studio XIAO RP2040和Seeed Studio XIAO nRF52840都与Seeed Studio XIAO的扩展基座兼容。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    </a>
</div>

## **特点**

- **快速原型设计:** 通过RESET按钮和SWD引脚引出到母头，方便进行调试和重置。
<!-- 0.96”OLED, enables visual data display without PC serial monitor; Convenient plug and play Grove connectors support multiple data protocols, including IIC, Uart, Analog/Digital; No soldering needed with all pin led out. -->

- **丰富的外设:** OLED显示屏、RTC实时时钟、可扩展的存储空间、无源蜂鸣器、用户按钮、板载电池管理芯片。

- **无需焊接:** 所有引脚都引出。方便的即插即用Grove连接器支持多种数据协议，包括IIC、UART、模拟/数字信号。

- **支持CircuitPython:** 良好支持CircuitPython。MicroSD卡槽可以扩展存储空间，使得在原型设计和项目构建中能够分配更多所需的库。

- **迷你尺寸:** 紧凑而优雅，仅有树莓派 4尺寸的一半，特别适合需要迷你尺寸的项目。

## **规格说明**

|项目|值|
|---|---|
|工作电压|5V / 3.7V 锂电池|
|充电电流| 460mA (Max)|
|RTC计时器精度|± 1.5S/DAY(25°C)|
|RTC电池|CR1220|
|显示器|0.96" OLED display|
|可扩展存储|MicroSD卡|
|Grove接口|Grove IIC接口2, Grove UART接口1, A0/D0 Grove接口1|
|其他外部设备|无源蜂鸣器, 用户按钮, 5V伺服连接器|

## **应用领域**

- SWD调试
- 快速原型设计
- 数据显示
- 迷你尺寸项目

## **零件清单**

|项目|值|
|---|---|
|Seeed Studio XIAO扩展底板  | *1 |

:::注意
该产品不包括Seeed Studio XIAO和电池，Seeed Studio XIAO不断推出新产品。要了解该系列的最新产品开发情况，请访问 [XIAO系列主页](https://www.seeedstudio.com/xiao-series-page)。

<!-- please click this link to get [**Seeed Studio XIAO SAMD21**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html?gclid=Cj0KCQjwufn8BRCwARIsAKzP695mYBI8wwzrR8rXiJgv9QBK5DeTJGCU9bzXvzGUheFVZxqHcuw0SgYaAqDqEALw_wcB) -->

:::

## **入门指南**

### **所需材料**

| Seeed Studio XIAO SAMD21（预焊接） | Seeed Studio XIAO扩展底板|
|--------------|--------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/102010388_Preview-07.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" alt="pir" width={600} height="auto" /></p>
|[**点击购买**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[**点击购买**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)|

### **硬件概述**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/2222222222222222222222222222221.jpg" /></div>

该设备具有外部MicroSD卡插槽和RTC电池座，MicroSD卡主要用于保存和运行 `python.py` 文件，RTC用于跟踪当前时间，并可用于在特定时间执行操作。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/1111111111111111111111110.jpg" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/ssssssssssccccccccc.png" /></div>

### **引脚图**

Seeed Studio XIAO Grove扩展板的外部引脚头描述

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/pinpinpin4.jpg" /></div>

## **扩展板使用方法**

### **连接**

将Seeed Studio XIAO SAMD21放置在扩展板上，Seeed Studio XIAO SAMD21的绿色LED应该会亮起。
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO-to-board.png" /></div>

:::注意
请先将Seeed Studio XIAO插入扩展板上，然后再插入Type-C连接器。记住将Seeed Studio XIAO插入 **两个母头连接器的中间位置**, 否则会损坏Seeed Studio XIAO和扩展板。
:::

## **电池使用**

Seeed Studio XIAO的扩展底板可以通过电池供电，因此如果您进行需要移动的演示，该电池将帮助您解决电源供应问题。插入电池时请注意正负极，按照图片的指示连接电池，以防损坏底板。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/battery-board.png" /></div>

此外，当您插入电池电缆和Type-C电缆并将按钮切换到开启状态时，该板会为电池充电。

如下图所示，如果LED闪烁，表示电池未充电或板子未连接电池；如果LED一直亮着，则表示电池正在充电。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO_flash_light.png" /></div>

## **扩展板上的模块**

板上丰富的外设包括:

- **OLED显示屏:** 无需连接到PC即可进行可视化数据显示，以更高效的方式进行调试，并构建传感器中心、数据监测系统等应用。

- **复位按钮:** 无需使用跳线线和避免短路，只需点击一次即可轻松进行复位。

- **SWD调试:** SWD引脚通过公头引脚排引出，使调试器连接和固件下载更加便捷。

- **高精度实时时钟 (RTC):** 带有电池备份的高精度实时时钟，能够在主电源关闭时保持准确的时间。

- **可扩展存储:** 在背面配备了MicroSD卡槽，当添加库和使用CircuitPython时，不再担心内存限制问题。

- **用户按钮:** 除了复位按钮外，还提供了另一个用户定义按钮。

- **无源蜂鸣器:** 您可以更改 PWM 频率以获得不同的蜂鸣声，从而制作出“蜂鸣器音乐”。

- **Grove连接器:** 所有引脚都引出，支持即插即用的Grove连接器，支持常见的数据协议（Grove IIC2，Grove UART1，A0/D0 Grove*1）。

- **锂聚合物电池充电:** 采用JST 2.0mm标准锂聚合物电池连接器和电池管理系统，支持USB和锂聚合物电池供电，便捷的板载电池充电。

- **5V舵机连接器:** 将5V输出引脚引出至公头，用于5V舵机和传感器连接。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/444.png" /></div>

### **OLED显示屏**

这个示例介绍了如何在Seeed Studio XIAO的扩展底板上使用OLED显示屏。

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Hello_world11.jpg" /></div>

**第一步**. 将Seeed Studio XIAO SAMD21安装在扩展板上，然后连接Type-C电缆。

**第二步**. 安装 [**u8g2**](https://github.com/olikraus/U8g2_Arduino) 库，这是[**安装库的指南**](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)。

**第三步**. 复制代码并粘贴到Arduino IDE上，然后上传它。

**OLED代码**

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

### **通过用户按钮控制LED**

这个示例介绍了如何使用Seeed Studio XIAO扩展底板上的按钮来控制Seeed Studio XIAO SAMD21上的LED。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/LED_botton.gif" /></div>

**第一步**. 将Seeed Studio XIAO SAMD21安装在扩展板上，然后连接Type-C电缆。

**第二步**.打开Arduino IDE，将代码复制并粘贴到Arduino IDE中，然后上传它。

**代码**

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

### **蜂鸣器**

蜂鸣器默认连接到A3引脚，如果您想移除蜂鸣器功能，只需按照下面的图片，切断连接线即可。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/111123232325.png" /></div>

#### **使用无源蜂鸣器播放音乐**

这个示例使用Seeed Studio XIAO扩展底板上的蜂鸣器播放生日快乐。

**第一步**. 将Seeed Studio XIAO SAMD21安装在扩展板上，然后连接Type-C电缆。

**第二步**. 打开Arduino IDE，复制代码并粘贴到Arduino IDE中，然后进行上传。

**代码**

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

### **使用旋转角度传感器控制舵机**

这个示例使用旋转角度传感器通过Seeed Studio XIAO扩展底板上的集成端口来控制舵机。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/rotary_servo.gif" /></div>

**第一步**. 将Seeed Studio XIAO SAMD21安装在扩展板上，然后连接Type-C电缆。

**第二步**. 将舵机电缆连接到 **I2C** 端口，将旋转角度传感器连接到 **D0**端口。

**第三步**. 打开Arduino IDE，将代码复制并粘贴到Arduino IDE中，然后上传它。

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

### **RTC时钟显示**

这个示例使用RTC在OLED上显示时钟。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/time_clock.gif" /></div>

**第一步**. 将Seeed Studio XIAO SAMD21安装在扩展板上，然后连接Type-C电缆。

**第二步**. 安装 [**u8g2**](https://github.com/olikraus/U8g2_Arduino) 和 [**PCF8563**](https://github.com/Bill2462/PCF8563-Arduino-Library) 库，这是 [**安装库的指南**](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/).

**第三步**. 复制代码并粘贴到Arduino IDE上，然后上传它。



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

### **SD卡功能**

对于XIAO SAMD21、XIAO RP2040、XIAO ESP32C3和XIAO ESP32S3，您无需安装单独的SD卡库来使用第三方库。下面的步骤适用于这些XIAO板子。

:::提示
扩展板电路设计使得SD卡槽的CS引脚连接到XIAO的 **D2** 引脚。
:::

```cpp
#include <SPI.h>
#include <SD.h>
#include "FS.h"

File myFile;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(115200);
  while(!Serial);              // Execute after turning on the serial monitor
  delay(500);

  Serial.print("Initializing SD card...");

  pinMode(D2, OUTPUT);          // Modify the pins here to fit the CS pins of the SD card you are using.
  if (!SD.begin(D2)) {
    Serial.println("initialization failed!");
    return;
  }
  Serial.println("initialization done.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  myFile = SD.open("/test.txt", FILE_WRITE);          // The path to read and write files needs to start with "/"

  // if the file opened okay, write to it:
  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");
    // close the file:
    myFile.close();
    Serial.println("done.");
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }

  // re-open the file for reading:
  myFile = SD.open("/test.txt");                       // The path to read and write files needs to start with "/"
  if (myFile) {
    Serial.println("test.txt:");

    // read from the file until there's nothing else in it:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // close the file:
    myFile.close();
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }
}

void loop() {
  // nothing happens after setup
}

```

如果您正在使用XIAO nRF52840系列，那么您可能需要单独下载 [SdFat库](https://github.com/greiman/SdFat)以便使用SD卡功能。

```cpp
#include <SPI.h>
#include "SdFat.h"
SdFat SD;

#define SD_CS_PIN D2
File myFile;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }


  Serial.print("Initializing SD card...");

  if (!SD.begin(SD_CS_PIN)) {
    Serial.println("initialization failed!");
    return;
  }
  Serial.println("initialization done.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  myFile = SD.open("/test.txt", FILE_WRITE);

  // if the file opened okay, write to it:
  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");
    // close the file:
    myFile.close();
    Serial.println("done.");
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }

  // re-open the file for reading:
  myFile = SD.open("test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    // read from the file until there's nothing else in it:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // close the file:
    myFile.close();
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }
}

void loop() {
  // nothing happens after setup
}
```

## **Seeed Studio XIAO扩展底板的亚克力外壳**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/110010024_Preview-08.png" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/XIAO-p-4812.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

我们为保护Seeed Studio XIAO扩展底板而制作了这个 [**亚克力外壳**](https://www.seeedstudio.com/XIAO-p-4812.html) ，这些是亚克力外壳的组件。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/componets.png" /></div>

与Seeed Studio XIAO的Grove 扩展版相比，Seeed Studio XIAO扩展底板为用户增加了许多有用的模块。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/board_compare.png" /></div>

这个亚克力外壳易于组装，它还可以使外壳看起来更整洁。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Acrylic_Case/build_up.gif" /></div>

## **在Seeed Studio XIAO SAMD21开发板上使用CircuitPython和扩展底板**

这个维基介绍如何在Seeed Studio XIAO SAMD21开发板上安装和运行Adafruit Industries的官方 [**CircuitPython**](https://circuitpython.org/) 的翻译为"这个维基介绍了如何在 [**Seeed Studio XIAO SAMD21开发板**](https://www.seeedstudio.com/Seeeduino-XIAO-Pre-Soldered-p-4747.html) 上安装和运行Adafruit Industries的官方!

CircuitPython是一种旨在简化在低成本微控制器板上进行实验和学习编程的编程语言。它使得入门比以往更加容易，无需事先下载桌面应用程序。一旦您设置好开发板，打开任何文本编辑器，就可以开始编辑代码。有关更多信息，请参考 [**这里**](https://learn.adafruit.com/welcome-to-circuitpython/what-is-circuitpython)。

## **安装CircuitPython**

**第一步.** 将Seeed Studio XIAO SAMD21开发板安装在扩展底板上，然后连接Type-C电缆。

**第二步.** 下载官方的 [**Seeed Studio XIAO SAMD21的CircuitPython引导程序 **](https://circuitpython.org/board/seeeduino_xiao/)一个 `.uf2` 文件, 这个文件将会保存在您的PC的下载文件夹中。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circutpyhthon.png" /></div>

**第三步.** 通过在Seeed Studio XIAO的扩展底板上快速按两次复位按钮，进入DFU引导模式，然后您的PC将出现Arduino驱动器。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/reboot_XIAO.gif" /></div>

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/arduino_boot.png" /></div>

**第四步.** 您的PC上应该会出现一个名为 `Arduino` 的外部驱动器。将下载的CircuitPython uf2文件拖放到 `Arduino` 驱动器中。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/python_to_arduino.png" /></div>

**第五步.** 一旦加载了CircuitPython引导程序，请拔下USB Type-C连接线并重新连接。一个名为 `CIRCUITPY` CIRCUITPY的新外部驱动器应该会出现。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Circuitpy.png" /></div>

**第六步.** 现在，CircuitPython已经加载到Seeed Studio XIAO SAMD21上了！您只需要编写您的Python程序并将其命名为 `main.py` ，然后将其拖放到 `CIRCUITPY` 驱动器上即可。

### **CircuitPython闪烁示例**

这里有一个简单的示例介绍如何在Seeed Studio XIAO上使用CircuitPython。

**第一步** 在  `CIRCUITPY`驱动器上创建一个名为 `main`的文本文件。

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/main_create.png" /></div>
<br />

:::注意
  `main` 名称可以是以下之一： **code.txt**, **code.py**, **main.py**, **main.txt**, 更多详细信息，请参考: [**此行为**](https://docs.circuitpython.org/en/latest/README.html#behavior)。
:::

**第二步** 使用REPL获取橙色LED的引脚。有关REPL的详细信息，请参见 [欢迎使用CircuitPython!](https://learn.adafruit.com/welcome-to-circuitpython/the-repl) 要使用REPL，首先需要连接到串行控制台。一旦建立连接，按两次CTRL+C进入编辑模式。然后，复制以下代码并逐个输入。

```
>>> import board
>>> dir(board)
```

您将看到一个列表，列出了可供您在代码中使用的开发板上的所有可用引脚。每个开发板的引脚数量可能会略有不同。
![image.png](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/zh-CN/Seeeduino-XIAO-Expansion-Board12.png)

您是否看到了YELLOW_LED_INVERTED？那就是您用来闪烁橙色LED的引脚！

**第三步** 将代码粘贴到 `main` 文件中，然后保存，您将会看到Seeed Studio XIAO SAMD21开发板上的橙色LED闪烁

**代码**

```py
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

### **CircuitPython的MicroSD卡**

Seeed Studio XIAO SAMD21内置约40 KB的闪存，但可能不足以存储大型的Python代码文件。幸运的是，Seeed Studio XIAO SAMD21扩展底板内置了一个MicroSD卡插槽，用于扩展存储空间。因此，您可以按照这些指示学习如何在MicroSD卡上运行CircuitPython

:::注意
MicroSD卡的系统格式可以是FAT或exFAT。如果您使用其他MicroSD卡系统格式，将导致MicroSD卡无法被识别
:::
**第一步.** 准备一个MicroSD卡，插入Seeed Studio XIAO SAMD21扩展底板

**第二步.** 假设您还没有下载 [**CircuitPython文件**](https://circuitpython.org/board/seeeduino_xiao/) , 请参考 [**安装CircuitPython**](https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/#installing-circuitpython) 章节。

**第三步.** 下载 [**lib**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/lib.zip) 文件并解压缩，然后将其中的新lib替换到 `CIRCUITPY`驱动器中

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/lib_replace.png" /></div>

**第四步.** 在`CIRCUITPY` 驱动器中下载 [**main.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/main.py) 文件

** `main.py` 代码**

```cpp
import sd
f = open("/sd/hello.txt", "r")   ## read the file from SD card
print(f.read())
```

**第五步.** 在 `CIRCUITPY` 驱动器中下载 [**sd.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/sd.py) 文件 

** `sd.py` 代码**

```cpp
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

**Buzzer示例**

这个示例用于通过在MicroSD卡中运行 `buzzer.py` 来测试蜂鸣器

**第一步.** 您只需将 [**buzzer.py**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/buzzer.py)粘贴到MicroSD卡中即可

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/sd_card_store.png" /></div>

**第二步.** 在 `CIRCUITPY` 驱动器中打开 `main.py` 文件

<div align="center"><img width={850} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/circuit_python_pic/main.PY.png" /></div>

**第三步.** 在main.py文件中添加 `import buzzer` 
<div align="center"><img width={650} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/add_buzzer.png" /></div>

完成所有步骤后，蜂鸣器将开始工作。如果您想在MicroSD卡中运行其他Python文件，请仿照这个示例进行操作

:::注意
如果您想切换回Arduino模式，只需在Arduino IDE上上传任何程序即可
:::

## **实例**

### **项目1 - 遥控风扇**

**Overview**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remoteFan-g.gif" /></div>

本wiki介绍如何制作一个小型风扇，放在您的房间中以保持凉爽

**特点**

- 自动摇摆风扇

**所需组件**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**SSeeed Studio XIAO扩展底板**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Grove迷你风扇**](https://www.seeedstudio.com/Grove-Mini-Fan-v1-1.html)
- [**Grove-Servo**](https://www.seeedstudio.com/Grove-Servo.html)
- [**Grove - 红外（Infrared）接收器**](https://www.seeedstudio.com/Grove-Infrared-Receiver.html)

**硬件连接**

请按照相同颜色的线将每个传感器连接到板子上。请将风扇Grove电缆连接到D0引脚，舵机Grove电缆连接到**I2C**引脚，红外Grove电缆连接到**D7**引脚 。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_fan_pic.png" /></div>

**Arduino指令**

**第一步**. 按照连接图连接板子上的所有传感器

**第二步**. 安装 [**Arduino-IRremote**](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev) 库，这是[**如何安装库**](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)的指南。

**第三步**. 将代码复制到Arduino IDE中，然后上传它

**第四步**. 将风扇放置在安全位置，尝试按下按钮以确保其可以安全工作

**代码**

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

### **项目2 - 遥控车**

**概述**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_control_car.gif" /></div>

本wiki介绍如何制作一辆遥控车

**特点**

- 迷你尺寸的车辆，便于穿越狭窄的道路

**所需组件**

- [**Seeed Studio XIAO **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio XIAO扩展底板**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Grove - I2C迷你电机驱动器**](https://www.seeedstudio.com/Grove-I2C-Mini-Motor-Driver.html)
- [**直流电机**](https://www.seeedstudio.com/130-DC-Motor-p-2023.html)
- [**Grove - 红外（Infrared）接收器**](https://www.seeedstudio.com/Grove-Infrared-Receiver.html)

**硬件连接**

请按照相同颜色的线将每个传感器连接到板子上。请将红外传感器的Grove电缆连接到D0引脚，迷你电机驱动器的Grove电缆连接到I2C引脚

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/remote_car.jpg" /></div>

**Arduino指令**

**第一步**. 按照连接图连接板子上的所有传感器

**第二步**. 下载 [**Aruidno IDE**](https://www.arduino.cc/en/Main/software)

**第三步**. 安装 [**Arduino-IRremote**](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev) 和 [**电机驱动器**](https://github.com/Seeed-Studio/Drv8830_Motor_Driver) 库, 这是 [**如何安装库**](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)指南

**第四步**. 将代码复制到Arduino IDE中，然后上传它

**代码**

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

### **项目3 - 指纹解锁宝盒 - Seeed Studio XIAO**

**概述**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_open.gif" /></div>

这个盒子可以存放您重要的物品，您不用担心有人会拿走您的东西，因为这个盒子具有指纹功能，可以保护您的物品。如果指纹授权失败，蜂鸣器会发出警报，LED环将显示红色。只有当您的手指在开始时注册在板子上，然后将您的手指放在板子上，指纹通过授权时，LED环将显示绿色

**特点**

- 很容易记录您的指纹
- LED环可以提醒您锁的状态
- OLED屏幕可以显示当前信息
- 蜂鸣器可以提醒您指纹是否通过授权

**所需组件**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio XIAO扩展底板**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - 电容指纹扫描仪/传感器**](https://www.hackster.io/products/buy/80263?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove 24个RGB LED灯珠的环形灯带**](https://www.hackster.io/products/buy/80264?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - Servo**](https://www.hackster.io/products/buy/80265?s=BAhJIhMzNzA5MzAsUHJvamVjdAY6BkVG%0A)

**硬件连接**

请按照图片上的示意图连接板上的每个模块。将指纹模块连接到XIAO扩展板的UART端口，并将舵机连接到XIAO扩展板的D0端口。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/finger_pinter.png" /></div>

请注意，NeoPixel环是通过三根不同颜色的线直接连接到XIAO开发板的引脚上：将NeoPixel环的DIN引脚与黄色线连接到XIAO的D1引脚，将NeoPixel环的VIN引脚与红色线连接到XIAO的3V3引脚，将NeoPixel环的GND引脚与黑色线连接到XIAO的GND引脚。

![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/zh-CN/Seeeduino-XIAO-Expansion-Board13.jpeg)

**Arduino指令**

**第一步**. 按照连接图将所有传感器连接到板子上

**第二步**. 下载 [**Aruidno IDE**](https://www.arduino.cc/en/Main/software)

**第三步**. 安装 [**u8g2**](https://github.com/olikraus/U8g2_Arduino),  [**Servo**](https://github.com/arduino-libraries/Servo),  [**Seeed_Arduino_KCT202**](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202) 和 [**Seeed_LED_Ring**](https://github.com/Seeed-Studio/Seeed_LED_Ring) 库，这是 [**如何安装库的指南**](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)。

**第四步**. 将代码复制到Arduino IDE中，然后上传它。

**示例**

1. 录制您的指纹

屏幕将显示开始录制指纹，请将您的手指放在指纹设备上。之后，程序将分析您的指纹，完成注册。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_record.gif" /></div>

2. 身份授权（通过认证）

屏幕将显示"请验证"，您需要将手指放在指纹设备上，然后LED环将变为绿色。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_open.gif" /></div>

3. 身份授权（未通过认证）

如果其他人将手指放在上面，LED环将变为红色，板子将显示"身份拒绝"，同时警报将会触发。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Fingerprint_unlocks/fingerprint_close.gif" /></div>

**代码**

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

### **项目4 - Seeed Studio XIAO扩展底板 - mjolnir**

**概述**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/mjolnir/humer1.png" /></div>

这把锤子是模拟的"雷神之锤"，您需要在这个设备上录入您的指纹，然后您将成为它的主人。这把锤子需要一个磁铁才能吸附在Grove - 电磁铁上，只有通过指纹解锁后，锤子才可以拿走。

**所需组件**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio XIAO扩展底板**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - 电容式指纹扫描器/传感器。**](https://www.hackster.io/products/buy/81052?s=BAhJIhMzNzQxMDUsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - 电磁铁**](https://www.hackster.io/products/buy/32769?s=BAhJIhMzNzQxMDUsUHJvamVjdAY6BkVG%0A)

**硬件连接**

请使用Grove线将扩展板和所需模块连接起来，将Grove电磁铁模块连接到D0端口，将指纹模块连接到I2C端口。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/mjolnir/66666.png" /></div>

**Arduino指令**

**第一步**. 按照连接图将所有传感器连接到板子上。

**第二步**. 下载 [**Aruidno IDE**](https://www.arduino.cc/en/Main/software)

**第三步**. 安装 [**u8g2**](https://github.com/olikraus/U8g2_Arduino) 和 [**Seeed_Arduino_KCT202**](https://github.com/Seeed-Studio/Seeed_Arduino_KCT202) 库，这是 [**如何安装库的指南**](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/).

**第四步**. 将代码复制到Arduino IDE中，然后上传它。

**代码**

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

### **项目5 - 空气质量传感器中心 - Seeed Studio XIAO扩展底板**

**概述**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Air_Quality_Sensor_Hub/environment_detect_g.gif" /></div>

这是一款环境检测设备，通过Grove - 激光PM2.5传感器、Grove - CO2与温湿度传感器和Grove - 灰尘传感器分别收集PM2.5、PM10、温度、湿度、CO2和粉尘颗粒

**所需组件**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio XIAO扩展底板**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - CO2 & 温度 & 湿度  Arduino (SCD30) - 3合1传感器**](https://www.hackster.io/products/buy/80471?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - 激光PM2.5粉尘传感器 - 兼容Arduino - HM3301**](https://www.hackster.io/products/buy/80472?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)

- [**Seeed Grove - 灰尘传感器（PPD42NS）**](https://www.hackster.io/products/buy/30140?s=BAhJIhMzNzE2NzQsUHJvamVjdAY6BkVG%0A)

**硬件连接**

请按照图示连接每个传感器。将CO2传感器和PM2.5传感器分别连接到两个I2C端口，并将灰尘传感器连接到UART端口。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Air_Quality_Sensor_Hub/environment_detect_g.png" /></div>

**Arduino 指令**

**第一步**. 根据连接图，将所有传感器连接到开发板上。

**第二步**. 下载 [**Aruidno IDE**](https://www.arduino.cc/en/Main/software)

**第三步**. 安装 [**u8g2**](https://github.com/olikraus/U8g2_Arduino),  [**Seeed_PM2_5_sensor_HM3301**](https://github.com/Seeed-Studio/Seeed_PM2_5_sensor_HM3301) 和 [**Seeed_SCD30**](https://github.com/Seeed-Studio/Seeed_SCD30) 库, 这是 [**如何安装库**](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)指南。

**第四步**. 将代码复制到Arduino IDE中，并上传它。

**代码**

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

### **项目6 - Seeed Studio XIAO扩展底板 - 心率**

**概述**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Heartrate_Monitor_Watch/heartRate.gif" /></div>

这个简单而廉价的项目基于Seeed Studio XIAO扩展底板，用于测量心率。所使用的设备具有I2C双线接口，因此将布线保持在最低限度。

**所需组件**

- [**Seeed Studio XIAO SAMD21 **](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)

- [**Seeed Studio XIAO扩展底板**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)

- [**Seeed Grove - 指夹式心率传感器**](https://www.hackster.io/products/buy/80359?s=BAhJIhMzNzExNzMsUHJvamVjdAY6BkVG%0A)

**硬件连接**

如下图所示，将心率传感器连接到XIAO扩展板的I2C接口。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Big_demo/Heartrate_Monitor_Watch/heart_detect.png" /></div>

**Arduino 指令**

**第一步**. 按照连接图将板子上的所有传感器连接起来。

**第二步**. 下载 [**Aruidno IDE**](https://www.arduino.cc/en/Main/software)

**第三步**. 安装 [**u8g2**](https://github.com/olikraus/U8g2_Arduino) 库, 这是 [**如何安装这个库指南**](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/).

**第四步**. 将代码复制到Arduino IDE中，然后上传它。

**代码**

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

## Resources

- **[PDF]**[**ETA1038**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/ETA1038.pdf)
- **[PDF]**[**ETA3410**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/ETA3410.pdf)
- **[PDF]**[**ETA6003**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/ETA6003.pdf)
- **[PDF]**[**PCF8563T**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/PCF8563T.pdf)
- **[PDF]**[**Seeed Studio XIAO扩展底板_v1.0_SCH_200824**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/Seeeduino%20XIAO%20Expansion%20board_v1.0_SCH_200824.pdf)
- **[SCH]**[**Seeed Studio XIAO扩展底板_v1.0_200824**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/Seeeduino%20XIAO%20Expansion%20board_v1.0_200824.sch)
- **[BRD]**[**Seeed Studio XIAO扩展底板_v1.0_200824**](https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/document/Seeeduino%20XIAO%20Expansion%20board_v1.0_200824.brd)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您对我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
