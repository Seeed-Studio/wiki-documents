---
description: 使用 Seeed Studio XIAO ESP32-S3 进行引脚复用。
title: 使用 Seeed Studio XIAO ESP32-S3（Sense）进行引脚复用
keywords:
  - esp32s3
  - xiao
  - pin multiple
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_pin_multiplexing
sku: 113991114, 113991115
type: project
last_update:
  date: 4/27/2026
  author: Citric
createdAt: '2022-11-15'
updatedAt: '2025-10-09'
url: https://wiki.seeedstudio.com/cn/xiao_esp32s3_pin_multiplexing/
---


# 使用 Seeed Studio XIAO ESP32-S3（Sense）进行引脚复用

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Seeed Studio XIAO ESP32-S3 是一款功能强大且用途广泛的开发板，具有多种外设接口和 GPIO 引脚。这些引脚可用于多种用途，例如与其他设备通信、读取模拟传感器、控制 LED 等。在本教程中，我们将探索 XIAO ESP32-S3 及其相关板卡 XIAO ESP32-S3 Sense 的引脚分布，并学习如何将这些引脚用于不同的用途。具体来说，我们将介绍 1 路 UART、1 路 IIC、1 路 IIS、1 路 SPI、11 路 GPIO（PWM）、9 路 ADC、1 个用户 LED、1 个充电 LED、1 个复位按钮、1 个 Boot 按钮，以及对于 XIAO ESP32-S3 Sense，1 个 B2B 连接器（带有额外 2 个 GPIO）。在完成本教程后，你将对 XIAO ESP32-S3 的引脚分布有较好的理解，并能够在你的项目中高效地使用它。

## 入门指南

### 引脚总览

在开始之前，让我们先通过下图示意图回顾一下 XIAO ESP32-S3 拥有的所有引脚及其功能。

<table align="center">
 <tr>
     <th>XIAO ESP32-S3/XIAO ESP32-S3 Sense 正面标注示意图</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32-S3/XIAO ESP32-S3 Sense 背面标注示意图</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <th>XIAO ESP32-S3/XIAO ESP32-S3 Sense 引脚列表</th>
 </tr>
    <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:1000, height:'auto'}}/></div></td>
 </tr>
</table>

:::caution
虽然 XIAO ESP32-S3 将 GPIO41 和 GPIO42 分配给 A11 和 A12 引脚，但由于 ESP32-S3 芯片本身的特性，A11 和 A12 引脚不支持 ADC 功能。请务必加以区分和辨别。
:::

- 5V - 这是来自 USB 端口的 5V 输出。你也可以将其用作电压输入，但必须在外部电源和该引脚之间串联某种二极管（肖特基、信号或功率二极管），二极管的阳极接电池，阴极接 5V 引脚。

- 3V3 - 这是板载稳压器输出的稳压电源。你最多可以从中汲取 700mA 电流

- GND - 电源/数据/信号地

下面是 XIAO ESP32-S3 功能引脚的概览。

<div class="table-center">
 <table align="center">
  <tr>
   <th>引脚编号</th>
   <th>功能描述</th>
  </tr>
    <tr>
   <th colspan="2">-- PDM 麦克风引脚 --</th>
  </tr>
  <tr>
   <td align="center">GPIO 41</td>
   <td align="center">PDM 麦克风 DATA</td>
  </tr>
  <tr>
   <td align="center">GPIO 42</td>
   <td align="center">PDM 麦克风 CLK</td>
  </tr>
    <tr>
   <th colspan="2">-- MicroSD 卡 SPI 引脚 --</th>
  </tr>
  <tr>
   <td align="center">GPIO 21</td>
   <td align="center">MicroSD SPI CS</td>
  </tr>
  <tr>
   <td align="center">D8 / A8 / Qt7 / GPIO7</td>
   <td align="center">MicroSD SPI SCK</td>
  </tr>
  <tr>
   <td align="center">D9 / A9 / Qt8 / GPIO8</td>
   <td align="center">MicroSD SPI MISO</td>
  </tr>
  <tr>
   <td align="center">D10 / A10 / Qt9 / GPIO9</td>
   <td align="center">MicroSD SPI MOSI</td>
  </tr>
    <tr>
   <th colspan="2">-- 摄像头引脚 --</th>
  </tr>
    <tr>
   <td align="center">GPIO 10</td>
   <td align="center">XMCLK</td>
  </tr>
    <tr>
   <td align="center">GPIO 11</td>
   <td align="center">DVP_Y8</td>
  </tr>
    <tr>
   <td align="center">GPIO 12</td>
   <td align="center">DVP_Y7</td>
  </tr>
    <tr>
   <td align="center">GPIO 13</td>
   <td align="center">DVP_PCLK</td>
  </tr>
    <tr>
   <td align="center">GPIO 14</td>
   <td align="center">DVP_Y6</td>
  </tr>
    <tr>
   <td align="center">GPIO 15</td>
   <td align="center">DVP_Y2</td>
  </tr>
    <tr>
   <td align="center">GPIO 16</td>
   <td align="center">DVP_Y5</td>
  </tr>
    <tr>
   <td align="center">GPIO 17</td>
   <td align="center">DVP_Y3</td>
  </tr>
    <tr>
   <td align="center">GPIO 18</td>
   <td align="center">DVP_Y4</td>
  </tr>
    <tr>
   <td align="center">GPIO 38</td>
   <td align="center">DVP_VSYNC</td>
  </tr>
    <tr>
   <td align="center">GPIO 39</td>
   <td align="center">Camera SCL</td>
  </tr>
    <tr>
   <td align="center">GPIO 40</td>
   <td align="center">Camera SDA</td>
  </tr>
    <tr>
   <td align="center">GPIO 47</td>
   <td align="center">DVP_HREF</td>
  </tr>
    <tr>
   <td align="center">GPIO 48</td>
   <td align="center">DVP_Y9</td>
  </tr>
 </table>
</div>

### 焊接排针

为了按照本教程使用各个引脚的功能，我们建议你事先将排针焊接好。

由于 XIAO ESP32-S3 体积非常小，请在焊接排针时务必小心，不要将不同的引脚焊接到一起，也不要让焊锡粘到屏蔽罩或其他元器件上。否则可能导致 XIAO 短路或无法正常工作，由此造成的后果将由用户自行承担。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

如果你选择了 Sense 版本，那么恭喜你！你将拥有额外的两个 GPIO 引脚。如果你计划使用它们，可以单独在这两个引脚上焊接一个排针。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/18.jpg" style={{width:400, height:'auto'}}/></div>

## 数字引脚

XIAO ESP32-S3 具有多达 11 个常规 GPIO 引脚和 9 个模拟引脚。在本示例中，我们将使用 XIAO ESP32-S3、XIAO 扩展板和一个继电器，演示如何使用不同的数字引脚进行读写操作。

### 硬件准备

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Relay</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

请将 XIAO ESP32-S3 或 Sense 安装到扩展板上，并通过 Grove 线缆将继电器连接到扩展板的 **A0/D0** 接口。最后，通过 USB-C 线缆将 XIAO 连接到电脑。

### 软件实现

在本示例中，我们将通过连接到 XIAO 扩展板的按钮来实现对继电器开关状态的控制。当按下按钮时，继电器吸合（打开），当松开按钮时，继电器断开（关闭）。

```c
const int buttonPin = D1;     // the number of the pushbutton pin
int buttonState = 0;          // variable for reading the pushbutton status
const int relayPin = D0;

void setup() {
  // initialize the Relay pin as an output:
  pinMode(relayPin, OUTPUT);
  // initialize the pushbutton pin as an input:
  pinMode(buttonPin, INPUT_PULLUP);
}

void loop() {
  // read the state of the pushbutton value:
  buttonState = digitalRead(buttonPin);

  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  if (buttonState == HIGH) {
    // turn Relay on:
    digitalWrite(relayPin, HIGH);
  } else {
    // turn Relay off:
    digitalWrite(relayPin, LOW);
  }
}
```

如果一切顺利，在上传程序后，你应该会看到如下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/19.gif" style={{width:500, height:'auto'}}/></div>

:::tip
如果你想使用数字功能，那么你应该使用字母 "D" 作为引脚编号的前缀，例如 D4、D5。相反，如果你想使用引脚的模拟功能，你应该使用字母 "A" 作为引脚编号的前缀，例如 A4、A5。
:::

### 适用于 Sense 版本

对于 XIAO ESP32-S3 Sense，除了可以使用 XIAO 上的 11 个数字引脚外，你还可以使用扩展板上的两个引脚，即 **D11** 和 **D12**。如果你想使用它们，请按照以下步骤操作。

#### 步骤 1. 切断 J1 和 J2 之间的连接

由于 ESP32-S3 的引脚数量有限，Sense 扩展板上的 D11 和 D12 默认预留给麦克风使用。如果你确实需要将 D11 和 D12 用于其他用途，可以将 Sense 扩展板翻过来，用一把锋利的刀沿着两个焊盘之间的白线切断 J1 和 J2 之间的连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/20.png" style={{width:400, height:'auto'}}/></div>

:::caution
从图片中可以看出，由于 XIAO 的空间限制，很多走线布局非常紧凑。因此，在切断 J1 和 J2 之间的连接时，请务必小心，不要切到白线之外，否则可能会导致开发板无法正常工作！

虽然 XIAO ESP32-S3 将 GPIO41 和 GPIO42 分配给 A11 和 A12 引脚，但由于 ESP32-S3 芯片本身的特性，A11 和 A12 引脚不支持 ADC 功能。请务必加以区分和辨别。
:::

:::tip
在你切断 J1 和 J2 之间的连接后，扩展板上的麦克风功能将不再可用。如果你需要使用麦克风功能，则不能同时使用 D11 和 D12 引脚。在这种情况下，你可以分别给 J1 和 J2 的两个焊盘上锡，以恢复麦克风功能。如下面图片所示，分别给红色和绿色区域焊接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/21.png" style={{width:400, height:'auto'}}/></div>
:::

实际电路原理图请参考下图：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/92.png" style={{width:600, height:'auto'}}/></div>

#### 步骤 2. 硬件准备

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
        <th>Grove - Relay</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:200, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

#### 步骤 3. 软件实现

下面的程序每 500 毫秒切换一次继电器。将继电器的 SIG 引脚连接到扩展板的 GPIO42 接口。

```c
const int relayPin = 42;

void setup() {
  // initialize the Relay pin as an output:
  pinMode(relayPin, OUTPUT);
}

void loop() {
    // turn Relay on:
    digitalWrite(relayPin, HIGH);
    delay(500);
    // turn Relay off:
    digitalWrite(relayPin, LOW);
    delay(500);
}
```

上述方法同样适用于[数字作为 PWM](#digital-as-pwm)和[模拟](#analog)部分。你只需要修改你想要使用的扩展板引脚编号。后文将不再重复说明。

:::caution
对于 XIAO ESP32-S3 Sense 上额外的两个引脚 D11 和 D12，我们尚未对这些引脚进行宏定义。也就是说，你目前还不能使用 D11/A11 或 D12/A12 来控制这两个引脚，但你可以分别通过使用 GPIO 编号 GPIO42 和 GPIO41 来控制这两个引脚。我们会尽快提交这两个引脚的宏定义，一旦提交完成，你就可以使用 D/A 形式的引脚定义。
:::

## 数字作为 PWM

在 XIAO ESP32-S3 上，所有 GPIO 引脚都支持 PWM 输出。因此，你可以使用任意引脚输出 PWM 来调节灯光亮度、控制舵机等功能。

### 硬件准备

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Variable Color LED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Variable_Color_LED/img/Variable_Color_LED1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

请将 XIAO ESP32-S3 或 Sense 安装到扩展板上，然后使用 Grove 线缆将 Variable Color LED 连接到扩展板的 A0/D0 接口。最后，通过 USB-C 线缆将 XIAO 连接到你的电脑。

### 软件实现

在本示例中，我们将演示如何使用 PWM 输出来控制灯光的亮度。

```cpp
int LED_pin = D0;    // LED connected to digital pin 10

void setup() {
  // declaring LED pin as output
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // fade in from min to max in increments of 5 points:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // sets the value (range from 0 to 255):
    analogWrite(LED_pin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }

  // fade out from max to min in increments of 5 points:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // sets the value (range from 0 to 255):
    analogWrite(LED_pin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }
}
```

如果程序运行成功，你将看到如下运行效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/22.gif" style={{width:500, height:'auto'}}/></div>

## 模拟

在 XIAO ESP32-S3 上，在 11 个内置 GPIO 引脚中，除用于串行通信的 D6 和 D7 引脚外，其余 9 个引脚都支持模拟功能。你可以使用这些具有模拟功能的 GPIO 引脚来读取输出模拟信号的传感器的数值，例如氧气传感器、光强传感器等。

:::caution
虽然 XIAO ESP32-S3 将 GPIO41 和 GPIO42 分配给 A11 和 A12 引脚，但由于 ESP32-S3 芯片本身的特性，A11 和 A12 引脚不支持 ADC 功能。请务必加以区分和辨别。
:::

### 硬件准备

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - Oxygen Sensor</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/cover.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Oxygen-Sensor-ME2-O2-f20.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Please install XIAO ESP32-S3 or Sense on the expansion board, then connect the Oxygen Sensor to the A0/D0 interface on the expansion board with the Grove cable. Finally, connect the XIAO to the computer via USB-C cable.

### 软件实现

In the following program, we will use the `analogRead()` method to read the analog value of the sensor, and print the sensor result by using the Serial interface.

```cpp
// Grove - Gas Sensor(O2) test code
// Note:
// 1. It need about about 5-10 minutes to preheat the sensor
// 2. uncomment the module name you're using
// 3. modify VRefer if needed

// comment useless one
// #define MIX8410
#define O2_W2

#ifdef MIX8410
  #define O2_COEFFICIENT 0.21
#elif defined(O2_W2)
  #define O2_COEFFICIENT 0.087
#endif

const float VRefer = 3.34;       // voltage of adc reference
const int pinAdc   = A0;

void setup() 
{
    // put your setup code here, to run once:
    Serial.begin(9600);
    Serial.println("Grove - Oxygen Sensor(MIX8410) Test Code...");
}

void loop() 
{
    // put your main code here, to run repeatedly:
    float Vout =0;
    Serial.print("Vout =");

    Vout = readO2Vout();
    Serial.print(Vout);
    Serial.print(" V, Concentration of O2 is ");
    Serial.println(readConcentration());
    delay(500);
}

float readO2Vout()
{
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum += analogRead(pinAdc);
    }

    sum >>= 5;

    float MeasuredVout = sum * (VRefer / 1023.0);
    return MeasuredVout;
}

float readConcentration()
{
    // Vout samples are with reference to 3.3V
    float MeasuredVout = readO2Vout();

    //float Concentration = FmultiMap(MeasuredVout, VoutArray,O2ConArray, 6);
    //when its output voltage is 2.0V,
    float Concentration = MeasuredVout * O2_COEFFICIENT / 2.0;
    float Concentration_Percentage=Concentration*100;
    return Concentration_Percentage;
}
```

:::tip
If you want to use the Analog function of a pin, you should use the letter "A" as the prefix for the pin number, such as A4, A5. Conversely, if you want to use the digital function, then you should use the letter "D" as the prefix for the pin number, such as D4, D5.
:::

After uploading the program, open the Serial Monitor in Arduino IDE and set the baud rate to 9600. Wait for the oxygen sensor to warm up, and then you will be able to see the accurate oxygen concentration value.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/23.png" style={{width:600, height:'auto'}}/></div>

## 串口

When working with Arduino IDE, Serial communication is an essential part of many projects. To use Serial in Arduino IDE, you need to start by opening the Serial Monitor window. This can be done by clicking on the **Serial Monitor** icon in the toolbar or by pressing the **Ctrl+Shift+M** shortcut key.

### 通用用法

Some of the commonly used Serial functions include:

- `Serial.begin()` -- which initializes the communication at a specified baud rate;
- `Serial.print()` -- which sends data to the Serial port in a readable format;
- `Serial.write()` -- which sends binary data to the Serial port;
- `Serial.available()` -- which checks if there is any data available to be read from the Serial port;
- `Serial.read()` -- which reads a single byte of data from the Serial port;
- `Serial.flush()` -- which waits for the transmission of outgoing serial data to complete.

By using these Serial functions, you can send and receive data between the Arduino board and your computer, which opens up many possibilities for creating interactive projects.

Here is an example program:

```c
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

void loop() {
  // send data to the serial port
  Serial.println("Hello World!");

  // read data from the serial port
  if (Serial.available() > 0) {
    // read the incoming byte:
    char incomingByte = Serial.read();
    // print the incoming byte to the serial monitor:
    Serial.print("I received: ");
    Serial.println(incomingByte);
  }

  // wait for a second before repeating the loop
  delay(1000);
}
```

In this code, we first initialize the Serial communication at a baud rate of **9600** using the `Serial.begin()` function in the `setup()` function. Then, in the `loop()` function, we use the `Serial.print()` function to send "Hello World!" to the Serial port.

We also use the `Serial.available()` function to check if there is any data available to be read from the Serial port. If there is, we read the incoming byte using the `Serial.read()` function and store it in a variable called incomingByte. We then use the `Serial.print()` and `Serial.println()` functions to print "I received: " followed by the value of incomingByte to the Serial monitor.

Finally, we add a `delay()` function to wait for one second before repeating the loop. This code demonstrates how to use some of the commonly used Serial functions in Arduino IDE for sending and receiving data through the Serial port.

After uploading the program, open the Serial Monitor in Arduino IDE and set the baud rate to 9600. You will see the following message on the serial monitor, which outputs 'Hello World!' every second. Also, you can send content to the XIAO ESP32-S3 through the serial monitor, and XIAO will print out each byte of the content you send.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/24.png" style={{width:600, height:'auto'}}/></div>

### Serial1 用法

According to the above XIAO ESP32-S3 Pin diagrams for specific parameters, we can observe that there are TX pin and RX pin.
This is different from serial communication, but the usage is also very similar, except that a few parameters need to be added.
So next, we will use the pins led out by the chip for serial communication.

Core Function that need to be include:

- `Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);` -- enalbe Serial1,the function prototype : `<Serial.Type>.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin);`
  - `baud`  :baud rate
  - `config`:Configuration bit
  - `rxPin` :Receive Pin
  - `txPin` :Send Pin

It is worth nothing that if we use digital pin port to define,this place should be`#define RX_PIN D7`、`#define TX_PIN D6`,if we use GPIO pin port to define,this place should be `#define RX_PIN 44`、`#define TX_PIN 43`,please refer to the pin diagrams of different XIAO Series for specific parameters

Here is an example program:

```c
#define RX_PIN D7
#define TX_PIN D6
#define BAUD 115200

void setup() {
    Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);
}

void loop() {
  if(Serial1.available() > 0)
  {
    char incominByte = Serial1.read();
    Serial1.print("I received : ");
    Serial1.println(incominByte);
  }
  delay(1000);
}
```

After uploading the program, open the Serial Monitor in Arduino IDE and set the baud rate to 115200.then,you can send content you want in the XIAO ESP32-S3 through the serial monitor Serial ,and XIAO will print out each byte of the content you send.,In here,the content i entered is "Hello Everyone",my result chart is as follows

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/114.png" style={{width:600, height:'auto'}}/></div>

### 软件串口的使用

If you feel that one hardware serial port is not enough, you can also use the ESP32's software serial function to set some pins as software serial to expand the number of serial ports.

Of course, we would recommend using the second method of mapping hardware serial ports as it is a unique feature of the ESP32. You can read more about it in the [Other Hardware Serial](#Other-Hardware-Serial) section.

For ESP32 series chip products, if you need to use the soft serial port, you need to download the third-party soft serial port library separately. A reference is provided here.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/plerup/espsoftwareserial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::tip
目前我们推荐使用 EspSoftwareSerial 库的 7.0.0 版本。其他版本可能存在不同程度的问题，导致软件串口无法正常工作。
:::

既然你已经下载好了 zip 库，打开 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择刚刚下载的 zip 文件，如果库安装正确，你会在提示窗口中看到 **Library added to your libraries**。这就表示库已经成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

接下来，你就可以使用 ESP32 的软件串口了。

:::caution
如果你的电脑上安装了其他软件串口库，很有可能会产生冲突，请自行检查确认。
:::

```c
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup() {
  // initialize serial communication
  Serial.begin(9600);
  while (!Serial);

  // initialize software serial
  mySerial.begin(9600);
}

void loop() {
  // read data from software serial
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("Received data: ");
    Serial.println(data);
  }

  // write data to software serial
  mySerial.print("Hello World!");

  // wait for a second before repeating the loop
  delay(1000);
}
```

在这个程序中，我们首先包含 `SoftwareSerial.h` 库以使用软件串口。然后，我们使用引脚 2 和 3 分别作为 RX 和 TX，创建了一个名为 mySerial 的新的 SoftwareSerial 对象。

在 `setup()` 函数中，我们初始化了硬件串口（`Serial.begin()`）和软件串口（`mySerial.begin()`）。

在 `loop()` 函数中，我们使用 `mySerial.available()` 函数检查软件串口是否有可读取的数据。如果有，我们使用 `mySerial.read()` 函数读取传入的字节，并将其存储在名为 data 的变量中。然后使用 `Serial.print()` 和 `Serial.println()` 函数在硬件串口上打印出 "Received data: "，后面跟上 data 的值。

我们还使用 `mySerial.print()` 函数向软件串口写入 "Hello World!"。这会将数据从 XIAO 发送到连接在软件串口上的设备。

最后，我们添加了一个 `delay()` 函数，在重复循环之前等待一秒钟。

:::note
请注意，要在 ESP32-S3 上使用软件串口，你需要选择未被其他用途占用的合适 RX 和 TX 引脚。在本示例中，我们使用了 9 和 10 引脚分别作为 RX 和 TX。
:::

### 其他硬件串口

ESP32S3 一共有三个 UART 通信接口，从 0 到 2 编号，分别为 UART0、UART1 和 UART2。这三个串口的引脚都不是固定的，可以重映射到任意 IO 口。

默认情况下，我们不使用 **UART0**，因为它被用于 USB 串口通信。你可以通过自定义硬件串口映射来使用其他硬件串口。

```c
// Need this for the lower level access to set them up.
#include <HardwareSerial.h>

//Define two Serial devices mapped to the two internal UARTs
HardwareSerial MySerial0(0);
HardwareSerial MySerial1(1);

void setup()
{
    // For the USB, just use Serial as normal:
    Serial.begin(115200);

    // Configure MySerial0 on pins TX=D6 and RX=D7 (-1, -1 means use the default)
    MySerial0.begin(9600, SERIAL_8N1, -1, -1);
    MySerial0.print("MySerial0");

    // And configure MySerial1 on pins RX=D9, TX=D10
    MySerial1.begin(115200, SERIAL_8N1, D9, D10);
    MySerial1.print("MySerial1");
}

void loop()
{

}
```

下面我们以正在销售的 [60GHz mmWave Sensor - Human Resting Breathing and Heartbeat Module](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html) 为例，说明如何使用 D9 和 D10 硬件串口以及 USB 串口。

请准备好以下物品。

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
        <th>60GHz mmWave Sensor -<br/>Human Resting Breathing<br/>and Heartbeat Module</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:240, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:240, height:'auto'}}/></div></td>
        <td><div align="center"><img width = {240} src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

将传感器库下载到你的电脑上，并将其添加到 Arduino IDE 中。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

在这里，我们希望解析心跳和呼吸数据信息，然后你可以像下面这样重写你的程序。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>
#include <HardwareSerial.h>

HardwareSerial MySerial(0);   //Create a new HardwareSerial class -- D6/D7

// can also try hardware serial with
BreathHeart_60GHz radar = BreathHeart_60GHz(&MySerial);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  MySerial.begin(115200, SERIAL_8N1, 9, 10); // at CPU Freq is 40MHz, work half speed of defined.

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Readly");

  // radar.ModeSelect_fuc(1);  //1: indicates real-time transmission mode, 2: indicates sleep state mode.
  //After setting the mode, if you do not see data returned, you may need to re-power the sensor.
}

void loop()
{
  // put your main code here, to run repeatedly:
  radar.Breath_Heart();           //Breath and heartbeat information output
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case HEARTRATEVAL:
        Serial.print("Sensor monitored the current heart rate value is: ");
        Serial.println(radar.heart_rate, DEC);
        Serial.println("----------------------------");
        break;
      case HEARTRATEWAVE:  //Valid only when real-time data transfer mode is on
        Serial.print("The heart rate waveform(Sine wave) -- point 1: ");
        Serial.print(radar.heart_point_1);
        Serial.print(", point 2 : ");
        Serial.print(radar.heart_point_2);
        Serial.print(", point 3 : ");
        Serial.print(radar.heart_point_3);
        Serial.print(", point 4 : ");
        Serial.print(radar.heart_point_4);
        Serial.print(", point 5 : ");
        Serial.println(radar.heart_point_5);
        Serial.println("----------------------------");
        break;
      case BREATHNOR:
        Serial.println("Sensor detects current breath rate is normal.");
        Serial.println("----------------------------");
        break;
      case BREATHRAPID:
        Serial.println("Sensor detects current breath rate is too fast.");
        Serial.println("----------------------------");
        break;
      case BREATHSLOW:
        Serial.println("Sensor detects current breath rate is too slow.");
        Serial.println("----------------------------");
        break;
      case BREATHNONE:
        Serial.println("There is no breathing information yet, please wait...");
        Serial.println("----------------------------");
        break;
      case BREATHVAL:
        Serial.print("Sensor monitored the current breath rate value is: ");
        Serial.println(radar.breath_rate, DEC);
        Serial.println("----------------------------");
        break;
      case BREATHWAVE:  //Valid only when real-time data transfer mode is on
        Serial.print("The breath rate waveform(Sine wave) -- point 1: ");
        Serial.print(radar.breath_point_1);
        Serial.print(", point 2 : ");
        Serial.print(radar.breath_point_2);
        Serial.print(", point 3 : ");
        Serial.print(radar.breath_point_3);
        Serial.print(", point 4 : ");
        Serial.print(radar.breath_point_4);
        Serial.print(", point 5 : ");
        Serial.println(radar.breath_point_5);
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //Add time delay to avoid program jam
}
```

请上传程序，然后打开串口监视器，并将波特率设置为 115200。

如果一切顺利，你会在串口监视器上看到数据消息。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/2.png" alt="pir" width="800" height="auto"/></div>

## IIC

XIAO ESP32-S3 具有一个 I2C 接口，可用于许多传感器的数据传输和解析，也可以用于驱动一些 OLED 屏幕。

### 硬件准备

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

XIAO 扩展板上的 OLED 显示屏使用 I2C 协议，并通过板载的 I2C 电路连接到 XIAO 的 I2C 接口。因此，我们可以直接将 XIAO 插到扩展板上，并通过编程在屏幕上显示内容。

### 软件实现

本示例介绍如何使用 Seeed Studio Expansion Base for XIAO ESP32-S3 上的 OLED 显示屏。

#### 步骤 1. 将 Seeed Studio XIAO ESP32-S3 安装到扩展板上，然后连接 Type-C 线缆

#### 步骤 2. 安装 u8g2 库

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### 步骤 3. 复制代码并粘贴到 Arduino IDE 中，然后上传

```c
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

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

在代码的前几行中，我们包含了所需的库，例如 Arduino.h、U8x8lib.h 和 Wire.h。U8x8lib.h 库提供了控制 OLED 显示屏的函数，而 Wire.h 库提供了用于 I2C 通信的函数。

在 `setup()` 函数中，我们使用 `u8x8.begin()` 函数初始化 OLED 显示屏。我们还使用 `u8x8.setFlipMode()` 函数设置显示屏的翻转模式，将屏幕旋转 180 度。

在 `loop()` 函数中，我们使用 `u8x8.setFont()` 函数设置字体，并使用 `u8x8.setCursor()` 函数指定显示屏上光标的位置。最后，我们使用 `u8x8.print()` 函数在 OLED 显示屏上显示字符串 "Hello World!"。

如果你向 XIAO ESP32-S3 上传程序，你将在扩展板上的 OLED 显示屏上看到显示的内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/29.jpg" style={{width:600, height:'auto'}}/></div>

## SPI

ESP32-S3 芯片集成了多个外设，其中包括一个 SPI 接口，可用于连接外部 SPI 设备，如闪存、显示屏、传感器等。ESP32-S3 还支持高速 SPI 传输模式，最高 SPI 传输速率可达 80 MHz，能够满足大多数 SPI 设备的数据传输需求。

### 硬件准备

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32-S3</th>
     <th>Seeed Studio XIAO ESP32-S3 Sense</th>
      <th>Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-1.12-(SH1107)_V3.0/img/10402050_Main-02.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

按照上述说明准备好硬件后，使用跳线将 XIAO 和 OLED 的 SPI 接口连接起来。请参考下图了解接线方式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/30.jpg" style={{width:800, height:'auto'}}/></div>

### 软件实现

接下来，我们将以下程序作为示例，介绍如何使用 SPI 接口控制 OLED 屏幕显示。

安装 u8g2 库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

```c
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ D7, /* dc=*/ D4, /* reset=*/ D5);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.firstPage();

  do {
    u8g2.setFont(u8g2_font_luBIS08_tf);
    u8g2.drawStr(0,24,"Hello Seeed!");
  } while ( u8g2.nextPage() );
}
```

在 `setup()` 函数中，使用合适的构造函数参数实例化 `U8G2_SH1107_128X128_1_4W_HW_SPI` 类，这些参数指定了用于片选（cs）、数据/命令（dc）和复位的引脚。然后调用 `u8g2.begin()` 函数来初始化显示屏。

在 `loop()` 函数中，使用 `u8g2.firstPage()`、`u8g2.setFont()` 和 `u8g2.drawStr()` 函数来用新内容更新显示屏。`u8g2.firstPage()` 函数用于为写入设置显示缓冲区，而 `u8g2.nextPage()` 用于显示更新后的内容。do-while 循环确保内容会持续显示，直到程序停止。

总体来说，这段代码演示了如何使用 U8g2 库来控制 OLED 显示屏并在其上显示文本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/31.jpg" style={{width:600, height:'auto'}}/></div>

### 适用于 Sense

如果你购买的是 Sense 版本并且需要连接扩展板，请注意扩展板上的 SD 卡会占用 SPI 引脚，这可能会导致 SPI 引脚不可用。

Sense 扩展板上提供的焊盘接口允许用户选择所需的功能。其中，**J3** 焊盘的功能是启用 SPI 或 SD 卡功能。

<table align="center">
 <tr>
     <th>如果你想使用 SPI 引脚 / 禁用扩展板上的 SD 卡</th>
     <th>如果你想启用扩展板上的 SD 卡 / 禁用 SPI 引脚</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:300, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.JPG" style={{width:300, height:'auto'}}/></div></td>
 </tr>
  <tr>
    <td>沿着白色细线切断，以断开焊盘连接。</td>
    <td>将两个焊盘焊接在一起。</td>
  </tr>
</table>

:::caution
从图片中可以看出，由于 XIAO 的空间限制，很多走线都非常紧凑。因此，在切断 J3 的连接时，请务必非常小心，不要切到白线外面，否则可能会导致开发板无法正常工作！
:::

:::caution
出于通俗描述的考虑，上文只是简单地将 J3 描述为一个打开或关闭 SD 卡功能的接口，但这实际上并不准确。实际的电路连接如下图所示。切断 J3 实际上是断开了从 R4 到 R6 的上拉电阻，这才是 SD 卡功能被禁用而 SPI 功能恢复正常的主要原因。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/93.png" style={{width:800, height:'auto'}}/></div>
:::

## 触摸引脚

除了上述常见的功能引脚外，XIAO ESP32-S3/XIAO ESP32-S3 Sense 还具有 9 个触摸检测引脚 A0~A5、A8~A10。

我们可以通过读取引脚的模拟值来检查该引脚是否被触摸，非常方便。下面的程序用于检测引脚 A5 是否被触摸。

```c
const int touch_pin = A5;

void setup(void) {
  Serial.begin(9600);
}

void loop(void) {
  Serial.print("Touch value: ");
  Serial.println(analogRead(touch_pin));
  delay(1000);
}
```

上传程序后，打开串口监视器并将波特率设置为 9600。然后触摸引脚 A5，你会发现模拟读取值会明显大于触摸前的数值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/32.gif" style={{width:600, height:'auto'}}/></div>

## USB 引脚

ESP32-S3 是一款集成了 Wi-Fi 和 Bluetooth 功能的微控制器，其 D+ 和 D- 引脚用于支持 USB 通信。具体来说，这两个引脚是差分信号线，用于在 USB 2.0 设备与主机之间进行高速数据传输。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.png" style={{width:200, height:'auto'}}/></div>

D+ 引脚是用于发送数据的正极线，而 D- 引脚是用于发送数据的负极线。当 USB 设备连接到主机时，主机会检测这两个引脚上的电压变化，以判断设备的连接状态和传输速度。在数据传输过程中，D+ 和 D- 引脚交替传输数据位和同步信号，以实现可靠的数据传输。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/34.png" style={{width:800, height:'auto'}}/></div>

## JTAG 引脚

ESP32-S3 的 JTAG（Joint Test Action Group）接口是一个调试和测试接口，可用于在开发、调试和测试过程中进行非常底层的硬件调试和编程。JTAG 接口包括一组标准信号线，包括时钟线、数据输入线、数据输出线、测试模式选择线、测试模式时钟线等。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/35.png" style={{width:200, height:'auto'}}/></div>

ESP32-S3 的 JTAG 接口可以用于以下用途：

1. 调试：JTAG 接口可用于在 ESP32-S3 芯片中进行调试和单步执行，帮助开发者发现并解决代码错误。

2. 烧录程序：通过 JTAG 接口，可以将程序或调试固件加载到 ESP32-S3 芯片中。

3. 读取 CPU 状态：JTAG 接口可用于读取 ESP32-S3 芯片的 CPU 状态、内存内容和寄存器值，以便进行调试和测试。

需要注意的是，使用 JTAG 接口需要专用的硬件设备和软件工具，以及相应的专业知识和技能。因此，一般情况下，JTAG 接口只在开发、调试和测试等特定场景中使用。对于普通用户来说，使用 ESP32-S3 的其他功能和接口已经足够。

如果你想了解更多关于 JTAG 调试的信息，请阅读官方的 [ESP32 文档](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/jtag-debugging/index.html)。

## 故障排查

### Q1：为什么我在使用串口监视器时会出现如下错误？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/25.png" style={{width:600, height:'auto'}}/></div>

A：如果你遇到此类错误，请打开 **USB CDC On Boot** 开关。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/28.png" style={{width:600, height:'auto'}}/></div>

这个问题在 Arduino IDE 2.x 中也可能表现为串口输出为空，并且也可能是由同样的原因引起的。

### Q2：ESP-32 支持或不支持哪些特性？

A：以下是 [ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/libraries.html) 提供的已支持/未支持特性列表，数据截至 2023 年 4 月 10 日。

| 外设          | ESP32         | ESP32-S2      | ESP32-C3      | ESP32-S3      | 备注                   |
|---------------|---------------|---------------|---------------|---------------|------------------------|
| ADC           | Yes           | Yes           | Yes           | Yes           |                        |
| Bluetooth     | Yes           | Not Supported | Not Supported | Not Supported | Bluetooth Classic      |
| BLE           | Yes           | Not Supported | Yes           | Yes           |                        |
| DAC           | Yes           | Yes           | Not Supported | Not Supported |                        |
| Ethernet      | Yes           | Not Supported | Not Supported | Not Supported | (*)                    |
| GPIO          | Yes           | Yes           | Yes           | Yes           |                        |
| Hall Sensor   | Yes           | Not Supported | Not Supported | Not Supported |                        |
| I2C           | Yes           | Yes           | Yes           | Yes           |                        |
| I2S           | Yes           | Yes           | Yes           | Yes           |                        |
| LEDC          | Yes           | Yes           | Yes           | Yes           |                        |
| Motor PWM     | No            | Not Supported | Not Supported | Not Supported |                        |
| Pulse Counter | No            | No            | No            | No            |                        |
| RMT           | Yes           | Yes           | Yes           | Yes           |                        |
| SDIO          | No            | No            | No            | No            |                        |
| SDMMC         | Yes           | Not Supported | Not Supported | Yes           |                        |
| Timer         | Yes           | Yes           | Yes           | Yes           |                        |
| Temp. Sensor  | Not Supported | Yes           | Yes           | Yes           |                        |
| Touch         | Yes           | Yes           | Not Supported | Yes           |                        |
| TWAI          | No            | No            | No            | No            |                        |
| UART          | Yes           | Yes           | Yes           | Yes           |                        |
| USB           | Not Supported | Yes           | Yes           | Yes           | ESP32-C3 only CDC/JTAG |
| Wi-Fi         | Yes           | Yes           | Yes           | Yes           |                        |

### Q3：为什么我在串口监视器中总能看到芯片的调试信息？

A：你可以尝试通过以下方法关闭调试信息的输出，在 Arduino IDE 中选择 **Tool -> Core Debug Level: -> None**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/90.png" style={{width:500, height:'auto'}}/></div>

然而，这种方法并不总是有效，实际上，ESP32-S3 的调试信息始终是从串口输出的，这是无法更改的。请多包涵，它只是太迫切地想让你知道它正在正常工作。

### Q4：为什么我切断了 J3 的连接，但测试时 D8 和 D9 引脚仍然为高电平？向 microSD 卡写入数据仍然有一定成功概率？

从 SD 卡设计的角度来看，正确的电路必须带有上拉电阻，才能让 microSD 卡正常工作。如果你发现切断 J3 之后，引脚电平以及卡的读写仍然正常，这可能只是一个幸运的情况，我们并不建议你在这种情况下对卡进行读写操作，这可能会导致已写入数据丢失的问题。而在切断 J3 之后，可以通过写入低电平来改变 D8 和 D9 引脚的电平。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
