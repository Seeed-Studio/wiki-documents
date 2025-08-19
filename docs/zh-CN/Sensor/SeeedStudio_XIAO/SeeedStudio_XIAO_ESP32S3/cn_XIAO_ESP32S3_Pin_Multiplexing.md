---
description: 使用 Seeed Studio XIAO ESP32S3 进行引脚复用。
title: 使用 Seeed Studio XIAO ESP32S3 (Sense) 进行引脚复用
keywords:
- esp32s3
- xiao
- pin multiple
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_pin_multiplexing
sku: 113991114, 113991115
type: project
last_update:
  date: 03/30/2023
  author: Citric
---

# 使用 Seeed Studio XIAO ESP32S3 (Sense) 进行引脚复用

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Seeed Studio XIAO ESP32S3 是一款功能强大且用途广泛的开发板，具有多种外设接口和 GPIO 引脚。这些引脚可用于各种用途，例如与其他设备通信、读取模拟传感器、控制 LED 等。在本教程中，我们将探索 XIAO ESP32S3 及其相关板卡 XIAO ESP32S3 Sense 的引脚分布，并学习如何将这些引脚用于不同的用途。具体来说，我们将涵盖 1x UART、1x I2C、1x I2S、1x SPI、11x GPIO（PWM）、9x ADC、1x 用户 LED、1x 充电 LED、1x 复位按钮、1x 启动按钮的使用，以及对于 XIAO ESP32S3 Sense，还有 1x B2B 连接器（带有 2 个额外的 GPIO）。在本教程结束时，您将对 XIAO ESP32S3 的引脚分布有很好的理解，并能够在您的项目中有效地使用它。

## 入门指南

### 引脚概述

在开始之前，让我们通过以下原理图回顾 XIAO ESP32S3 的所有引脚及其功能。

<table align="center">
	<tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense 正面指示图</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/front-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense 背面指示图</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/back-indication.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3/XIAO ESP32S3 Sense 引脚列表</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>


- 5V - 这是来自 USB 端口的 5V 输出。您也可以将其用作电压输入，但您必须在外部电源和此引脚之间使用某种二极管（肖特基、信号、功率），阳极连接电池，阴极连接 5V 引脚。

- 3V3 - 这是板载稳压器的调节输出。您可以提取 700mA 电流

- GND - 电源/数据/信号地

### 焊接排针

要根据本教程使用每个引脚的功能，我们建议事先焊接引脚。

由于 XIAO ESP32S3 的微型尺寸，焊接排针时请小心，不要将不同的引脚粘在一起，也不要将焊料粘到屏蔽层或其他组件上。否则，可能会导致 XIAO 短路或无法正常工作，由此造成的后果将由用户承担。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

如果您选择了 Sense 版本，恭喜您！您将拥有两个额外的 GPIO 引脚。如果您计划使用它们，可以在它们上面焊接一个单独的排针。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/18.jpg" style={{width:400, height:'auto'}}/></div>

## 数字

XIAO ESP32S3 拥有多达 11 个常规 GPIO 引脚和 9 个模拟引脚。在这个示例中，我们将使用 XIAO ESP32S3、XIAO 扩展板和一个继电器来演示如何使用不同的数字引脚进行读取和写入。

### 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio XIAO 扩展底板配 Grove OLED</th>
        <th>Grove - 继电器</th>
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

请将 XIAO ESP32S3 或 Sense 安装到扩展板上，并通过 Grove 线缆将继电器连接到扩展板的 **A0/D0** 接口。最后，通过 USB-C 线缆将 XIAO 连接到计算机。

### 软件实现

在这个示例中，我们将使用连接到 XIAO 扩展板的按钮来控制继电器的开关状态。当按钮被按下时，继电器打开，当按钮被释放时，继电器关闭。

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

如果一切顺利，上传程序后，您应该看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/19.gif" style={{width:500, height:'auto'}}/></div>

:::tip
如果您想使用数字功能，则应该使用字母"D"作为引脚号的前缀，例如D4、D5。相反，如果您想使用引脚的模拟功能，则应该使用字母"A"作为引脚号的前缀，例如A4、A5。
:::

### Sense版本

对于XIAO ESP32S3 Sense，除了使用XIAO上的11个数字引脚外，您还可以使用扩展板上的两个引脚，即**D11**和**D12**。如果您想使用它们，请按照以下步骤操作。

#### 步骤1. 切断J1和J2之间的连接。

由于ESP32-S3的引脚数量有限，Sense扩展板上的D11和D12默认为麦克风保留。如果您确实需要将D11和D12用于其他目的，您可以翻转Sense扩展板，使用锋利的刀具沿着两个焊盘之间的白线切断J1和J2之间的连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/20.png" style={{width:400, height:'auto'}}/></div>

:::caution
从图片中可以看出，由于XIAO的空间限制，许多线路布局都非常紧凑。因此，在切断J1和J2之间的连接时，请非常小心不要切到白线外面，否则可能导致开发板故障！

对于XIAO ESP32S3 Sense上的两个额外引脚D11和D12，我们还没有宏定义这些引脚。也就是说，您还不能使用D11/A11或D12/A12来控制这两个引脚，但您可以通过使用GPIO号码，分别是GPIO12和GPIO13来控制这两个引脚。我们将尽快提交这两个引脚的宏定义，一旦提交完成，您就可以使用D/A引脚定义了。
:::

:::tip
在您切断J1和J2之间的连接后，扩展板上的麦克风功能将不再可用。如果您需要使用麦克风功能，D11和D12引脚不能同时使用。在这种情况下，您可以分别焊接J1和J2的两个焊盘来恢复麦克风功能。如下图所示，分别焊接红色和绿色区域。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/21.png" style={{width:400, height:'auto'}}/></div>
:::

实际电路原理图，请参考以下图表：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/92.png" style={{width:600, height:'auto'}}/></div>

#### 步骤2. 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Grove - 继电器</th>
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

#### 步骤3. 软件实现

以下程序每500毫秒切换一次继电器。将继电器的SIG引脚连接到扩展板的GPIO42接口。

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

上述方法同样适用于[数字引脚作为PWM](#digital-as-pwm)和[模拟引脚](#analog)部分。您只需要修改想要使用的扩展板的引脚编号即可。后续将不再重复说明。

:::caution
对于XIAO ESP32S3 Sense上的两个额外引脚D11和D12，我们尚未对这些引脚进行宏定义。也就是说，您还不能使用D11/A11或D12/A12来控制这两个引脚，但您可以通过使用GPIO编号GPIO42和GPIO41来分别控制这两个引脚。我们将尽快提交这两个引脚的宏定义，一旦提交完成，您就可以使用D/A引脚定义了。
:::

## 数字引脚作为PWM

XIAO ESP32S3上的所有GPIO引脚都支持PWM输出。因此，您可以使用任何引脚输出PWM来调节灯光亮度、控制舵机和其他功能。

### 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

请将XIAO ESP32S3或Sense安装到扩展板上，然后使用Grove线缆将可变色LED连接到扩展板的A0/D0接口。最后，通过USB-C线缆将XIAO连接到您的计算机。

### 软件实现

在这个示例中，我们将演示如何使用PWM输出来控制灯光的亮度。

```cpp
int LED_pin = D0;    // LED连接到数字引脚10

void setup() {
  // 将LED引脚声明为输出
  pinMode(LED_pin, OUTPUT);
}

void loop() {
  // 从最小值到最大值以5点为增量淡入：
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // 设置值（范围从0到255）：
    analogWrite(LED_pin, fadeValue);
    // 等待30毫秒以查看调光效果
    delay(30);
  }

  // 从最大值到最小值以5点为增量淡出：
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // 设置值（范围从0到255）：
    analogWrite(LED_pin, fadeValue);
    // 等待30毫秒以查看调光效果
    delay(30);
  }
}
```

如果程序运行成功，您将看到以下运行效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/22.gif" style={{width:500, height:'auto'}}/></div>

## 模拟

在 XIAO ESP32S3 上，在 11 个内置 GPIO 引脚中，除了用于串行通信的 D6 和 D7 引脚外，其余 9 个引脚都支持模拟功能。您可以使用这些具有模拟功能的 GPIO 引脚来读取产生模拟信号的传感器的值，例如氧气传感器、光强度传感器等。

### 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
        <th>Grove - 氧气传感器</th>
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

请将 XIAO ESP32S3 或 Sense 安装在扩展板上，然后使用 Grove 线缆将氧气传感器连接到扩展板上的 A0/D0 接口。最后，通过 USB-C 线缆将 XIAO 连接到计算机。

### 软件实现

在以下程序中，我们将使用 `analogRead()` 方法读取传感器的模拟值，并通过串行接口打印传感器结果。

```cpp
// Grove - 气体传感器(O2) 测试代码
// 注意：
// 1. 传感器需要大约 5-10 分钟的预热时间
// 2. 取消注释您正在使用的模块名称
// 3. 如果需要，请修改 VRefer

// 注释掉无用的
// #define MIX8410
#define O2_W2

#ifdef MIX8410
  #define O2_COEFFICIENT 0.21
#elif defined(O2_W2)
  #define O2_COEFFICIENT 0.087
#endif

const float VRefer = 3.34;       // adc 参考电压
const int pinAdc   = A0;
 
void setup() 
{
    // 在这里放置您的设置代码，只运行一次：
    Serial.begin(9600);
    Serial.println("Grove - 氧气传感器(MIX8410) 测试代码...");
}

void loop() 
{
    // 在这里放置您的主要代码，重复运行：
    float Vout =0;
    Serial.print("Vout =");
 
    Vout = readO2Vout();
    Serial.print(Vout);
    Serial.print(" V, O2 浓度为 ");
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
    // Vout 样本参考 3.3V
    float MeasuredVout = readO2Vout();
 
    //float Concentration = FmultiMap(MeasuredVout, VoutArray,O2ConArray, 6);
    //当其输出电压为 2.0V 时，
    float Concentration = MeasuredVout * O2_COEFFICIENT / 2.0;
    float Concentration_Percentage=Concentration*100;
    return Concentration_Percentage;
}
```

:::tip
如果您想使用引脚的模拟功能，您应该使用字母"A"作为引脚编号的前缀，例如A4、A5。相反，如果您想使用数字功能，那么您应该使用字母"D"作为引脚编号的前缀，例如D4、D5。
:::

上传程序后，在Arduino IDE中打开串口监视器并将波特率设置为9600。等待氧气传感器预热，然后您就能看到准确的氧气浓度值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/23.png" style={{width:600, height:'auto'}}/></div>

## 串口通信

在使用Arduino IDE时，串口通信是许多项目的重要组成部分。要在Arduino IDE中使用串口通信，您需要首先打开串口监视器窗口。这可以通过点击工具栏中的**串口监视器**图标或按**Ctrl+Shift+M**快捷键来完成。

### 常规用法

一些常用的串口函数包括：

- `Serial.begin()` -- 以指定的波特率初始化通信；
- `Serial.print()` -- 以可读格式向串口发送数据；
- `Serial.write()` -- 向串口发送二进制数据；
- `Serial.available()` -- 检查是否有可从串口读取的数据；
- `Serial.read()` -- 从串口读取单个字节的数据；
- `Serial.flush()` -- 等待传出串口数据的传输完成。

通过使用这些串口函数，您可以在Arduino开发板和计算机之间发送和接收数据，这为创建交互式项目开辟了许多可能性。

以下是一个示例程序：

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

在这段代码中，我们首先在 `setup()` 函数中使用 `Serial.begin()` 函数以 **9600** 的波特率初始化串行通信。然后，在 `loop()` 函数中，我们使用 `Serial.print()` 函数向串行端口发送"Hello World!"。

我们还使用 `Serial.available()` 函数来检查串行端口是否有可读取的数据。如果有，我们使用 `Serial.read()` 函数读取传入的字节并将其存储在名为 incomingByte 的变量中。然后我们使用 `Serial.print()` 和 `Serial.println()` 函数向串行监视器打印"I received: "，后跟 incomingByte 的值。

最后，我们添加一个 `delay()` 函数来等待一秒钟，然后重复循环。这段代码演示了如何在 Arduino IDE 中使用一些常用的串行函数通过串行端口发送和接收数据。

上传程序后，在 Arduino IDE 中打开串行监视器并将波特率设置为 9600。您将在串行监视器上看到以下消息，每秒输出一次'Hello World!'。此外，您可以通过串行监视器向 XIAO ESP32S3 发送内容，XIAO 将打印出您发送内容的每个字节。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/24.png" style={{width:600, height:'auto'}}/></div>

### Serial1 使用方法

根据上述 XIAO ESP32S3 引脚图的具体参数，我们可以观察到有 TX 引脚和 RX 引脚。
这与串行通信不同，但用法也非常相似，只是需要添加一些参数。
接下来，我们将使用芯片引出的引脚进行串行通信。

需要包含的核心函数：

- `Serial1.begin(BAUD,SERIAL_8N1,RX_PIN,TX_PIN);` -- 启用 Serial1，函数原型：`<Serial.Type>.begin(unsigned long baud, uint32_t config, int8_t rxPin, int8_t txPin);`
  - `baud`：波特率
  - `config`：配置位
  - `rxPin`：接收引脚
  - `txPin`：发送引脚

值得注意的是，如果我们使用数字引脚端口来定义，这里应该是 `#define RX_PIN D7`、`#define TX_PIN D6`，如果我们使用 GPIO 引脚端口来定义，这里应该是 `#define RX_PIN 44`、`#define TX_PIN 43`，具体参数请参考不同 XIAO 系列的引脚图

以下是一个示例程序：

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

上传程序后，在Arduino IDE中打开串口监视器并将波特率设置为115200。然后，您可以通过串口监视器向XIAO ESP32S3发送您想要的内容，XIAO将打印出您发送内容的每个字节。在这里，我输入的内容是"Hello Everyone"，我的结果图表如下所示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/114.png" style={{width:600, height:'auto'}}/></div>

### 软件串口的使用

如果您觉得一个硬件串口不够用，您也可以使用ESP32的软件串口功能，将一些引脚设置为软件串口来扩展串口数量。

当然，我们建议使用映射硬件串口的第二种方法，因为这是ESP32的独特功能。您可以在[其他硬件串口](#other-hardware-serial)部分了解更多信息。

对于ESP32系列芯片产品，如果您需要使用软串口，需要单独下载第三方软串口库。这里提供一个参考。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/plerup/espsoftwareserial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

:::tip
目前我们推荐使用EspSoftwareSerial库的7.0.0版本。其他版本可能存在不同程度的问题，导致软串口无法正常工作。
:::

由于您已经下载了zip库文件，请打开Arduino IDE，点击**项目 > 加载库 > 添加.ZIP库**。选择您刚刚下载的zip文件，如果库安装正确，您将在通知窗口中看到**库已添加到您的库中**。这意味着库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

接下来，您就可以使用ESP32的软串口了。

:::caution
如果您的计算机上安装了其他软串口库，很可能会导致冲突，请自行检查。
:::

```c
#include <SoftwareSerial.h>

SoftwareSerial mySerial(2, 3); // RX, TX

void setup() {
  // 初始化串口通信
  Serial.begin(9600);
  while (!Serial);

  // 初始化软件串口
  mySerial.begin(9600);
}

void loop() {
  // 从软件串口读取数据
  if (mySerial.available()) {
    char data = mySerial.read();
    Serial.print("接收到的数据: ");
    Serial.println(data);
  }

  // 向软件串口写入数据
  mySerial.print("Hello World!");

  // 等待一秒钟后重复循环
  delay(1000);
}
```

在这个程序中，我们首先包含 `SoftwareSerial.h` 库来使用软件串口。然后，我们创建一个名为 mySerial 的新 SoftwareSerial 对象，分别使用引脚 2 和 3 作为 RX 和 TX。

在 `setup()` 函数中，我们初始化硬件串口（`Serial.begin()`）和软件串口（`mySerial.begin()`）。

在 `loop()` 函数中，我们使用 `mySerial.available()` 函数检查软件串口是否有可读取的数据。如果有，我们使用 `mySerial.read()` 函数读取传入的字节并将其存储在名为 data 的变量中。然后我们使用 `Serial.print()` 和 `Serial.println()` 函数将 "Received data: " 后跟 data 的值打印到硬件串口。

我们还使用 `mySerial.print()` 函数将 "Hello World!" 写入软件串口。这将把数据从 XIAO 发送到连接到软件串口的设备。

最后，我们添加一个 `delay()` 函数，在重复循环之前等待一秒钟。

:::note
请注意，为了在 ESP32-S3 上使用软件串口，您需要为 RX 和 TX 选择适当的引脚，这些引脚不能用于任何其他目的。在这个例子中，我们分别使用引脚 9 和 10 作为 RX 和 TX。
:::

### 其他硬件串口

ESP32S3 总共有三个 UART 通信接口，编号从 0 到 2，分别是 UART0、UART1 和 UART2。这三个串口的引脚不是固定的，可以重新映射到任何 IO 端口。

默认情况下，我们不使用 **UART0**，因为它用于 USB 串口通信。您可以通过自定义硬件串口映射来使用其他硬件串口。

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

在下面的内容中，我们将以可供购买的 [60GHz mmWave Sensor - Human Resting Breathing and Heartbeat Module](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html) 为例，说明如何使用 D9 和 D10 硬件串口以及 USB 串口。

请准备以下物品。

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

将传感器库下载到您的计算机。并将其添加到 Arduino IDE 中。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

在这里，我们想要解析心跳和呼吸数据信息，那么您可以像这样重写您的程序。

```c
#include "Arduino.h"
#include <60ghzbreathheart.h>
#include <HardwareSerial.h>

HardwareSerial MySerial(0);   //创建一个新的HardwareSerial类 -- D6/D7

// 也可以尝试使用硬件串口
BreathHeart_60GHz radar = BreathHeart_60GHz(&MySerial);

void setup() {
  // 将你的设置代码放在这里，只运行一次：
  Serial.begin(115200);
  MySerial.begin(115200, SERIAL_8N1, 9, 10); // 当CPU频率为40MHz时，工作在定义速度的一半。

  while(!Serial);   //当串口打开时，程序开始执行。

  Serial.println("准备就绪");

  // radar.ModeSelect_fuc(1);  //1: 表示实时传输模式，2: 表示睡眠状态模式。
  //设置模式后，如果你没有看到返回的数据，可能需要重新给传感器上电。
}

void loop()
{
  // 将你的主要代码放在这里，重复运行：
  radar.Breath_Heart();           //呼吸和心跳信息输出
  if(radar.sensor_report != 0x00){
    switch(radar.sensor_report){
      case HEARTRATEVAL:
        Serial.print("传感器监测到当前心率值为: ");
        Serial.println(radar.heart_rate, DEC);
        Serial.println("----------------------------");
        break;
      case HEARTRATEWAVE:  //仅在实时数据传输模式开启时有效
        Serial.print("心率波形(正弦波) -- 点 1: ");
        Serial.print(radar.heart_point_1);
        Serial.print(", 点 2 : ");
        Serial.print(radar.heart_point_2);
        Serial.print(", 点 3 : ");
        Serial.print(radar.heart_point_3);
        Serial.print(", 点 4 : ");
        Serial.print(radar.heart_point_4);
        Serial.print(", 点 5 : ");
        Serial.println(radar.heart_point_5);
        Serial.println("----------------------------");
        break;
      case BREATHNOR:
        Serial.println("传感器检测到当前呼吸频率正常。");
        Serial.println("----------------------------");
        break;
      case BREATHRAPID:
        Serial.println("传感器检测到当前呼吸频率过快。");
        Serial.println("----------------------------");
        break;
      case BREATHSLOW:
        Serial.println("传感器检测到当前呼吸频率过慢。");
        Serial.println("----------------------------");
        break;
      case BREATHNONE:
        Serial.println("暂时没有呼吸信息，请等待...");
        Serial.println("----------------------------");
        break;
      case BREATHVAL:
        Serial.print("传感器监测到当前呼吸频率值为: ");
        Serial.println(radar.breath_rate, DEC);
        Serial.println("----------------------------");
        break;
      case BREATHWAVE:  //仅在实时数据传输模式开启时有效
        Serial.print("呼吸频率波形(正弦波) -- 点 1: ");
        Serial.print(radar.breath_point_1);
        Serial.print(", 点 2 : ");
        Serial.print(radar.breath_point_2);
        Serial.print(", 点 3 : ");
        Serial.print(radar.breath_point_3);
        Serial.print(", 点 4 : ");
        Serial.print(radar.breath_point_4);
        Serial.print(", 点 5 : ");
        Serial.println(radar.breath_point_5);
        Serial.println("----------------------------");
        break;
    }
  }
  delay(200);                       //添加时间延迟以避免程序卡死
}
```

请上传程序，然后打开串口监视器并将波特率设置为115200。

如果一切顺利，您将在串口监视器上看到数据消息。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/2.png" alt="pir" width="800" height="auto"/></div>

## IIC

XIAO ESP32S3 具有 I2C 接口，可用于许多传感器的数据传输和解析，以及使用一些 OLED 屏幕。

### 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio XIAO 扩展板配 Grove OLED</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

XIAO 扩展板上的 OLED 显示屏使用 I2C 协议，通过板上的 I2C 电路连接到 XIAO 的 I2C 接口。因此，我们可以直接将 XIAO 插入扩展板并编程以在屏幕上显示内容。

### 软件实现

本示例介绍如何使用 Seeed Studio XIAO ESP32S3 扩展板上的 OLED 显示屏。

#### 步骤 1. 将 Seeed Studio XIAO ESP32S3 安装在扩展板上，然后连接 Type-C 线缆。

#### 步骤 2. 安装 u8g2 库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### 步骤 3. 复制代码并粘贴到 Arduino IDE 中，然后上传。

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

在代码的前几行中，我们包含了所需的库，如 Arduino.h、U8x8lib.h 和 Wire.h。U8x8lib.h 库提供了控制 OLED 显示屏的函数，Wire.h 库提供了 I2C 通信的函数。

在 `setup()` 函数中，我们使用 `u8x8.begin()` 函数初始化 OLED 显示屏。我们还使用 `u8x8.setFlipMode()` 函数设置显示屏的翻转模式，将屏幕旋转 180 度。

在 `loop()` 函数中，我们使用 `u8x8.setFont()` 函数设置字体，并使用 `u8x8.setCursor()` 函数指定光标在显示屏上的位置。最后，我们使用 `u8x8.print()` 函数在 OLED 显示屏上显示字符串 "Hello World!"。

如果您将程序上传到 XIAO ESP32S3，您将在扩展板上的 OLED 显示屏上看到显示的内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/29.jpg" style={{width:600, height:'auto'}}/></div>

## SPI

ESP32-S3 芯片集成了多个外设，包括一个 SPI 接口，可用于连接外部 SPI 设备，如闪存、显示屏、传感器等。ESP32-S3 还支持高速 SPI 传输模式，可以实现最高 80 MHz 的 SPI 传输速率，满足大多数 SPI 设备的数据传输需求。

### 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
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
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

准备好上述硬件后，使用跳线将 XIAO 和 OLED 的 SPI 接口连接起来。请参考以下图表了解接线方法。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/30.jpg" style={{width:800, height:'auto'}}/></div>

### 软件实现

接下来，我们将以下面的程序为例，介绍如何使用 SPI 接口控制 OLED 屏幕显示。

安装 u8g2 库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
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

在 `setup()` 函数中，`U8G2_SH1107_128X128_1_4W_HW_SPI` 类通过适当的构造函数参数实例化，这些参数指定了用于片选 (cs)、数据/命令 (dc) 和复位的引脚。然后，调用 `u8g2.begin()` 函数来初始化显示器。

在 `loop()` 函数中，使用 `u8g2.firstPage()`、`u8g2.setFont()` 和 `u8g2.drawStr()` 函数用新内容更新显示器。`u8g2.firstPage()` 函数设置显示缓冲区以供写入，而 `u8g2.nextPage()` 显示更新的内容。do-while 循环确保内容持续显示，直到程序停止。

总的来说，这段代码演示了如何使用 U8g2 库来控制 OLED 显示器并在其上显示文本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/31.jpg" style={{width:600, height:'auto'}}/></div>

### 对于 Sense 版本

如果您购买了 Sense 版本并需要连接到扩展板，请注意扩展板上的 SD 卡将占用 SPI 引脚，这可能导致 SPI 引脚不可用。

Sense 扩展板上提供的焊盘接口允许用户选择所需的功能。其中，**J3** 焊盘的功能是启用 SPI 或 SD 卡功能。

<table align="center">
	<tr>
	    <th>如果您想使用 SPI 引脚 / 禁用扩展板的 SD 卡</th>
	    <th>如果您想启用扩展板上的 SD 卡 / 禁用 SPI 引脚</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png" style={{width:300, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.JPG" style={{width:300, height:'auto'}}/></div></td>
	</tr>
  <tr>
    <td>沿着白色细线切割以断开焊盘连接。</td>
    <td>将两个焊盘焊接在一起。</td>
  </tr>
</table>

:::caution
从图片中可以看出，由于 XIAO 的空间限制，许多线路布局都非常紧凑。因此，在切断 J3 的连接时，请非常小心不要切到白线外面，否则可能导致开发板故障！
:::

:::caution
为了常识起见，上面简单地将 J3 描述为打开或关闭 SD 卡功能的接口，但这实际上是不准确的。实际的电路连接如下所示。切断 J3 实际上是断开了从 R4 到 R6 的上拉电阻，这是 SD 卡功能被禁用而 SPI 功能恢复正常的主要原因。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/93.png" style={{width:800, height:'auto'}}/></div>
:::

## 触摸引脚

除了上面提到的常见功能引脚外，XIAO ESP32S3/XIAO ESP32S3 Sense 还有 9 个触摸检测引脚 A0~A5、A8~A10。

我们可以通过读取其模拟值来检查引脚是否被触摸，这非常方便。以下程序用于检测引脚 A5 是否被触摸。

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

上传程序后，打开串口监视器并将波特率设置为9600。然后触摸引脚A5，你会发现模拟读取值会比触摸前的值明显增大。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/32.gif" style={{width:600, height:'auto'}}/></div>

## USB 引脚

ESP32-S3是一款集成Wi-Fi和蓝牙功能的微控制器，其D+和D-引脚用于支持USB通信。具体来说，这两个引脚是差分信号线，用于USB 2.0设备和主机之间的高速数据传输。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.png" style={{width:200, height:'auto'}}/></div>

D+引脚是用于发送数据的正极性线，而D-引脚是用于发送数据的负极性线。当USB设备连接到主机时，主机通过检测这两个引脚上的电压变化来确定设备的连接状态和传输速度。在数据传输过程中，D+和D-引脚交替传输数据位和同步信号，以实现可靠的数据传输。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/34.png" style={{width:800, height:'auto'}}/></div>

## JTAG 引脚

ESP32-S3的JTAG（联合测试行动组）接口是一个调试和测试接口，可用于开发、调试和测试期间的极低级硬件调试和编程。JTAG接口包括一组标准信号线，包括时钟线、数据输入线、数据输出线、测试模式选择线、测试模式时钟线等。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/35.png" style={{width:200, height:'auto'}}/></div>

ESP32-S3的JTAG接口可用于以下目的：

1. 调试：JTAG接口可用于ESP32-S3芯片中的调试和单步执行，帮助开发者发现和解决代码错误。

2. 烧录程序：通过JTAG接口，可以将程序或调试固件加载到ESP32-S3芯片中。

3. 读取CPU状态：JTAG接口可用于读取ESP32-S3芯片的CPU状态、内存内容和寄存器值，用于调试和测试。

需要注意的是，使用JTAG接口需要专用的硬件设备和软件工具，以及相应的专业知识和技能。因此，一般情况下，JTAG接口仅在开发、调试和测试等特定场景中使用。对于普通用户来说，使用ESP32-S3的其他功能和接口已经足够。

如果您想了解更多关于JTAG调试的信息，请阅读官方[ESP32文档](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/jtag-debugging/index.html)。

## 故障排除

### Q1: 为什么在使用串口监视器时出现以下错误？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/25.png" style={{width:600, height:'auto'}}/></div>

A: 如果遇到此类错误，请打开 **USB CDC On Boot** 开关。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/28.png" style={{width:600, height:'auto'}}/></div>

此问题也可能表现为在 Arduino IDE 2.x 中串口输出为空，也可能是由同样的原因引起的。

### Q2: ESP-32 支持或不支持哪些功能？

A: 以下是 [ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/libraries.html) 提供的支持/不支持功能列表。截至 2023 年 4 月 10 日。

| 外设          | ESP32         | ESP32-S2      | ESP32-C3      | ESP32-S3      | 备注                   |
|---------------|---------------|---------------|---------------|---------------|------------------------|
| ADC           | Yes           | Yes           | Yes           | Yes           |                        |
| Bluetooth     | Yes           | Not Supported | Not Supported | Not Supported | 经典蓝牙               |
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
| USB           | Not Supported | Yes           | Yes           | Yes           | ESP32-C3 仅支持 CDC/JTAG |
| Wi-Fi         | Yes           | Yes           | Yes           | Yes           |                        |

### Q3: 为什么我总是能在串口监视器中看到芯片的调试信息？

A: 您可以尝试使用以下方法关闭调试信息的输出，在 Arduino IDE 中选择 **工具 -> 核心调试级别: -> None**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/90.png" style={{width:500, height:'auto'}}/></div>

但是，这种方法并不总是有效，实际上，ESP32-S3 的调试信息总是从串口打印出来，这是无法改变的。请原谅它，它只是太急于让您知道它正在正常工作。

### Q4: 为什么我切断了 J3 的连接，但仍然测试到 D8 和 D9 引脚为高电平？写入 microSD 卡仍然有成功的概率？

在 SD 卡设计方面，正确的电路必须有上拉电阻才能使 microSD 卡正常工作。如果您发现在切断 J3 后引脚电平和卡读写仍然正常，这可能只是一种幸运的情况，我们不建议您在这种情况下读写卡，这可能会导致写入数据丢失的问题。而在切断 J3 后，D8 和 D9 引脚可以通过写入低电平来修改电平。

## 技术支持与产品讨论

.

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>