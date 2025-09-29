---
title: Grove - 模拟麦克风


nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Analog-Microphone/
slug: /cn/Grove-Analog-Microphone
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/04.png)

Grove - 模拟麦克风基于高性能 **SiSonic MEMS** 技术，为开源硬件行业提供了一款极低噪声、低功耗、可靠且小巧的麦克风，并且在恶劣条件下具有改进的性能。

Grove - 模拟麦克风是需要出色音频性能的声音传感器的理想选择。它可以提供高达20dB的增益，还具有低功耗、最大射频保护的特点，这使其成为Arduino和Raspberry Pi的完美麦克风。我们的特色产品 <a href="https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html">ReSpeaker Core v2.0</a> 也采用了MEMS技术和与Grove - 模拟麦克风相同的麦克风。如果您想要一个出色的麦克风，这就是您的选择。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## 特性

- 高性能SiSonic MEMS技术
- 极低噪声、低功耗且可靠
- 紧凑优雅的设计

:::warning
    此声音传感器用于检测周围是否有声音，请不要使用该模块来收集声音信号。例如，您可以使用它制作声控灯，但不能用作录音设备。
:::

## 应用

- 声音传感器
- 声音信号采集
- 语音识别
- 录音

## 规格参数

|项目|值|
|-----|------|
|尺寸 |20mm x 20mm|
|工作电压 |3.3V|
|工作电流| 5mA|
|工作温度范围|-40 °C 到 100 °C|

:::tip
    有关Grove模块的更多详细信息，请参考 [Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。不可能为所有可能的MCU平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 开始使用

:::note
    如果这是您第一次使用 Arduino，我们强烈建议您在开始之前先查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 与 Arduino 一起使用

**硬件**

|Seeeduino V4.2| Base Shield|Grove-模拟麦克风|
|--------------|------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/small.png)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)|

- **步骤 1.** 将 Grove-声音传感器连接到 Grove-Base Shield 的 **A0** 端口。
- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino，并通过 USB 线将 Seeeduino 连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/hardware_connection.jpg)

:::note
 如果我们没有 Grove Base Shield，我们也可以直接将 Grove-声音传感器连接到 Seeeduino，如下所示。
:::

| Seeeduino     | Grove-声音传感器      |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| A1            | White                   |
| A0            | Yellow                  |

**软件**

- **步骤 1.** 请将下面的代码复制到 Arduino IDE 并上传到 arduino。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```c
/*
  Analog input, analog output, serial output

  Reads an analog input pin, maps the result to a range from 0 to 255 and uses
  the result to set the pulse width modulation (PWM) of an output pin.
  Also prints the results to the Serial Monitor.
*/

// These constants won't change. They're used to give names to the pins used:
const int analogInPin = A0;  // Analog input pin that the potentiometer is attached to
const int analogOutPin = 9; // Analog output pin that the LED is attached to

int sensorValue = 0;        // value read from the pot
int outputValue = 0;        // value output to the PWM (analog out)

void setup() {             
  Serial.begin(9600);      // initialize serial communications at 9600 bps
}

void loop() {
  sensorValue = analogRead(analogInPin);        // read the analog in value
  outputValue = map(sensorValue, 0, 1023, 0, 255);       // map it to the range of the analog out
  analogWrite(analogOutPin, outputValue);               // change the analog out value

  Serial.println(outputValue);    // print the results to the Serial Monitor

  // wait 2 milliseconds before the next loop for the analog-to-digital
  // converter to settle after the last reading:
  delay(2);
}
```

- **步骤 2.** 点击 **Serial > Plotter** 获取传感器的变化曲线。请制造一些噪音来查看数值的变化。

![](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/outcome.png)

### 与 Wio Terminal 一起使用

**硬件**

|Wio Terminal|Grove-模拟麦克风|
|--------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/small.png)|
|[立即购买](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[立即购买](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)|

#### 硬件连接

![](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/connection.jpg)

**步骤 1** 通过 Grove 线将 Grove-模拟麦克风插入 Wio Terminal，同时通过 USB 线将 Wio Terminal 连接到 PC。

**步骤 2** 将演示代码复制到您的 Arduino IDE 并上传。

**软件**

```cpp
#include "seeed_line_chart.h" //include the library

TFT_eSPI tft;
#define LINE_DIS 0X00
#define STRING_DIS 0X01
#define max_size 30 //maximum size of data
doubles data;       //Initilising a doubles type to store data
int brightness;
TFT_eSprite spr = TFT_eSprite(&tft); // Sprite

const int MIC = A0; //the microphone amplifier output is connected to pin A0
int adc;
int dB, PdB; //the variable that will hold the value read from the microphone each time
uint8_t mode = LINE_DIS;
void setup()
{
    Serial.begin(9600); //sets the baud rate at 9600 so we can check the values the microphone is obtaining on the Serial Monitor
    pinMode(A0, INPUT);
    pinMode(WIO_KEY_C, INPUT_PULLUP);
    pinMode(WIO_BUZZER, OUTPUT);
    tft.begin();
    spr.createSprite(TFT_HEIGHT, TFT_WIDTH);
    spr.setRotation(3);
    tft.setRotation(3);
}

void loop() {
 
    if (digitalRead(WIO_KEY_C) == LOW) {
        mode ++;
        if(mode > STRING_DIS ) mode = LINE_DIS;
        while(!digitalRead(WIO_KEY_C));
    }
    display(mode);
}

void display(uint8_t mode)
{
    adc = analogRead(MIC); //Read the ADC value from amplifer
    //Serial.println (adc);//Print ADC for initial calculation
    dB = (adc + 83.2073) / 7.003; //Convert ADC value to dB using Regression values

    if(dB > 50)
    {
        analogWrite(WIO_BUZZER, 128);

    }else{
        analogWrite(WIO_BUZZER, 0);
    }

    spr.fillSprite(TFT_WHITE);

    if (data.size() == max_size)
    {
        data.pop(); //this is used to remove the first read variable
    }
    data.push(dB); //read variables and store in data

    //Settings for the line graph title
    auto header = text(0, 0)
                      .value("MIC DB Readings")
                      .align(center)
                      .valign(vcenter)
                      .width(tft.width())
                      .thickness(2);

    header.height(header.font_height() * 2);
    header.draw(); //Header height is the twice the height of the font
    if (LINE_DIS == mode){
    //Settings for the line graph
    auto content = line_chart(20, header.height()); //(x,y) where the line graph begins
    content
        .height(tft.height() - header.height() * 1.5) //actual height of the line chart
        .width(tft.width() - content.x() * 2)         //actual width of the line chart
        .based_on(0.0)                                //Starting point of y-axis, must be a float
        .show_circle(false)                           //drawing a cirle at each point, default is on.
        .value(data)                                  //passing through the data to line graph
        .color(TFT_RED)                               //Setting the color for the line
        .draw();
    } else if (STRING_DIS == mode){
        for(int8_t line_index = 0;line_index < 5 ; line_index++)
        {
            spr.drawLine(0, 50 + line_index, tft.width(), 50 + line_index, TFT_GREEN);
        }        
        auto header =  text(0, 0)
                    .thickness(1);
        spr.setFreeFont(&FreeSansBoldOblique24pt7b); 
        if(dB > 50){
            spr.setTextColor(TFT_RED);
        }else{
            spr.setTextColor(TFT_BLUE);
        }
        spr.drawFloat(dB,2,70,110);
        spr.drawString(" dB",80 + 100,110,1);
    }
    spr.pushSprite(0, 0);
    delay(100);
}
```

:::success
   如果一切正常，图像将显示在 Wio Terminal 的屏幕上。
:::

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/02.gif" alt="Grove-Analog Microphone'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/202002902_Grove-Analog_Microphone_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- [**ZIP**] [Grove-Analog_Microphone_v1.0_SCH&PCB.zip](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/202002902_Grove-Analog_Microphone_v1.0_SCH&PCB.zip)
- [**PDF**] [SMD Mic OMNI-22DB_Specification.pdf](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/SMD_Mic_OMNI-22DB_Specification.pdf)

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