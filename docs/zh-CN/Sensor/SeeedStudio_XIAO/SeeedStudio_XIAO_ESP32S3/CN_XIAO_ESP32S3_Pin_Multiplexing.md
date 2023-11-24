---
description: Pin multiplexing with Seeed Studio XIAO ESP32S3.
title: 串口硬件使用教程
keywords:
- esp32s3
- xiao
- pin multiple
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_pin_multiplexing
last_update:
  date: 11/09/2023
  author: Chen Lei
---

# XIAO ESP32S3 的引脚串口硬件使用教程

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
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}>点击购买🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Seeed Studio XIAO ESP32S3是一款功能强大、用途广泛的开发板，具有各种外围接口和GPIO引脚。这些引脚可以用于各种目的，例如与其他设备通信、读取模拟传感器、控制LED等。在本教程中，我们将探索XIAO ESP32S3及其相关板XIAO ESP32_Sense的引脚，并学习如何将这些引脚用于不同的用途。具体而言，我们将介绍1x UART、1x lIC、1x iIS、1x SPI、11x GPIO（PWM）、9xADC、1x用户LED、1x充电LED、1个重置按钮、1x引导按钮的使用，以及XIAO ESP32S3 Sense的1x B2B连接器（带2个额外的GPIO）。在本教程结束时，您将对XIAO ESP32S3的引脚有一个很好的了解，并能够在您的项目中有效地使用它。

##入门

###Pinout概述

在我们开始之前，让我们用下面的示意图回顾一下XIAO ESP32S3的所有引脚及其功能。

<table align="center">
	<tr>
	    <th>XIAO ESP32S3/SIAO ESP32S3感应前端指示图</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/1.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3/SIAO ESP32S3感应返回指示图</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/3.png" style={{width:700, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <th>XIAO ESP32S3/SIAO ESP32S3感应引脚列表</th>
	</tr>
    <tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:1000, height:'auto'}}/></div></td>
	</tr>
</table>


- 5V-这是从USB端口输出的5V。你也可以将其用作电压输入，但你必须在外部电源和这个引脚之间有某种二极管（肖特基二极管、信号二极管、电源二极管），阳极到电池，阴极到5V引脚。

- 3V3-这是车载调节器的调节输出。你可以画700mA

- GND-电源/数据/信号接地

### 焊接接头

要根据本教程使用每个引脚的功能，我们建议事先焊接引脚。
由于XIAO ESP32S3的尺寸很小，焊接接头时请小心，不要将不同的引脚粘在一起，也不要将焊料粘在屏蔽或其他部件上。否则，可能会导致XIAO短路或无法正常工作，由此造成的后果将由用户承担。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/4.jpg" style={{width:400, height:'auto'}}/></div>

如果你选择了Sense版本，祝贺你！您将有两个额外的GPIO引脚。如果你打算使用它们，你可以在它们上焊一个单独的头。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/18.jpg" style={{width:400, height:'auto'}}/></div>

## 数字的

XIAO ESP32S3具有多达11个常规GPIO引脚和9个模拟引脚。在这个例子中，我们将使用XIAO ESP32S3、XIAO扩展板和继电器来演示如何使用不同的数字引脚进行读写。

### 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
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
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

请将XIAO ESP32S3或Sense安装到扩展板上，并通过Grove电缆将继电器连接到扩展板的**A0/D0**接口。最后，通过USB-C电缆将XIAO连接到计算机。

###软件实施

在这个例子中，我们将使用连接到XIAO扩展板的按钮来实现继电器开/关状态的控制。按下按钮时，继电器接通，松开按钮时，中继器断开。

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

如果一切顺利，上传程序后，你应该会看到以下效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/19.gif" style={{width:500, height:'auto'}}/></div>

:::提示
如果要使用数字功能，则应使用字母“D”作为引脚编号的前缀，例如D4、D5。相反，如果要使用引脚的模拟功能，则应使用字母“a”作为引脚编号的前缀，例如A4、A5。
:::

### 对于Sense版本

对于XIAO ESP32S3 Sense，除了使用XIAO上的11个数字引脚外，您还可以使用扩展板上的两个引脚，即**D11**和**D12**。如果您想使用它们，请按照以下步骤操作。

#### 步骤1. 切断J1和J2之间的连接。

由于ESP32-S3上的引脚数量有限，Sense扩展板上的D11和D12默认为麦克风保留。如果您确实需要将D11和D12用于其他目的，您可以翻转Sense扩展板，并使用锋利的刀沿着两个焊盘之间的白线切断J1和J2之间的连接。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/20.png" style={{width:400, height:'auto'}}/></div>

:::警告
从图中可以看出，由于肖的空间限制，许多布线布局都非常紧凑。因此，在切断J1和J2之间的连接时，请非常小心，不要在白线外切断，否则可能会导致开发板故障！
:::

:::提示
切断J1和J2之间的连接后，扩展板上的麦克风功能将不再可用。如果需要使用麦克风功能，D11和D12引脚不能同时使用。在这种情况下，您可以分别焊接J1和J2的两个焊盘，以恢复麦克风功能。如下图所示，分别焊接红色和绿色区域。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/21.png" style={{width:400, height:'auto'}}/></div>
:::

实际电路原理图请参考下图：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/92.png" style={{width:600, height:'auto'}}/></div>

#### 步骤2 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Grove - Relay</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg" style={{width:200, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Relay.html">
            <strong><span><font color={'FFFFFF'} size={"4"}>点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

#### Step 3. Software implementation

以下程序每500毫秒切换一次继电器。将继电器的SIG引脚连接到扩展板的D11接口。

```c
const int relayPin = D11;

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

上述方法也适用于 [数字PWM](#digital-as-pwm) 和[模拟](#analog) 部分。您只需要修改要使用的扩展板的引脚编号。以后不再重复。

## 数字PWM

XIAO ESP32S3上的所有GPIO引脚都支持PWM输出。因此，您可以使用任何引脚输出PWM来调整灯光的亮度、控制伺服和其他功能。

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
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}>点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

请将XIAO ESP32S3或Sense安装到扩展板上，然后使用Grove电缆将可变颜色LED连接到扩展板的A0/D0接口。最后，通过USB-C电缆将XIAO连接到您的电脑。

### 软件实现

在本例中，我们将演示如何使用PWM输出来控制灯光的亮度。

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

如果程序运行成功，您将看到以下运行效果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/22.gif" style={{width:500, height:'auto'}}/></div>

## 模拟

在XIAO ESP32S3上，11个内置GPIO引脚中，除了用于串行通信的D6和D7引脚外，其余9个引脚支持模拟功能。您可以使用这些具有模拟功能的GPIO引脚来读取产生模拟信号的传感器的值，如氧传感器、光强传感器等。

### 硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
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
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}>点击购买🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Oxygen-Sensor-ME2-O2-f20.html">
            <strong><span><font color={'FFFFFF'} size={"4"}>点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

请在扩展板上安装XIAO ESP32S3或Sense，然后用Grove电缆将氧传感器连接到扩展板上的A0/D0接口。最后，通过USB-C电缆将XIAO连接到计算机。

### 软件实现

在下面的程序中，我们将使用'analog read（）'方法读取传感器的模拟值，并使用串行接口打印传感器结果。

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

:::提示
如果要使用引脚的模拟功能，应使用字母“a”作为引脚编号的前缀，如A4、A5。相反，如果要使用数字功能，则应使用字母“D”作为引脚编号的前缀，例如D4、D5.
:::

上传程序后，打开Arduino IDE中的串行监视器，并将波特率设置为9600。等待氧传感器预热，然后您将能够看到准确的氧浓度值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/23.png" style={{width:600, height:'auto'}}/></div>

##串行

在使用Arduino IDE时，串行通信是许多项目的重要组成部分。要在Arduino IDE中使用Serial，需要先打开Serial Monitor窗口。这可以通过单击工具栏中的**串行监视器**图标或按**Ctrl+M**快捷键来完成。

###一般用途

一些常用的串行功能包括：

- `Serial.begin()` -- 其以指定的波特率初始化通信；
- `Serial.print()` -- 其以可读格式向串行端口发送数据；
- `Serial.write()` -- 其向串行端口发送二进制数据；
- `Serial.available()` -- 其检查是否存在可从串行端口读取的任何数据；
- `Serial.read()` -- 其从串行端口读取单个字节的数据；
- `Serial.flush()` -- 其等待输出串行数据的传输完成。

通过使用这些串行功能，您可以在Arduino板和计算机之间发送和接收数据，这为创建交互式项目开辟了许多可能性。

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

在这段代码中，我们首先使用“setup（）”函数中的“Serial.begin（）”功能以**9600**的波特率初始化串行通信。然后，在“loop（）”函数中，我们使用“Serial.print（）”功能将“Hello World！”发送到串行端口。

我们还使用“Serial.available（）”函数来检查是否有任何数据可从串行端口读取。如果有，我们使用“Serial.read（）”功能读取传入字节，并将其存储在一个名为incomingByte的变量中。然后，我们使用“Serial.print（）”和“Serial.println（）”函数将“I received:”和incomingByte的值打印到串行监视器。

最后，我们添加一个“delay（）”函数，在重复循环之前等待一秒钟。这段代码演示了如何使用Arduino IDE中一些常用的串行函数通过串行端口发送和接收数据。

上传程序后，打开Arduino IDE中的串行监视器，并将波特率设置为9600。您将在串行监视器上看到以下消息，该消息输出“Hello World！”每秒钟。此外，您可以通过串行监视器将内容发送到XIAO ESP32S3，XIAO将打印出您发送的内容的每个字节。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/24.png" style={{width:600, height:'auto'}}/></div>

###软件序列的使用

如果您觉得一个硬件串行端口不够，还可以使用ESP32的软件串行功能将一些引脚设置为软件串行，以扩大串行端口的数量。

当然，我们建议使用第二种映射硬件串行端口的方法，因为这是ESP32的独特功能。您可以在[其他硬件序列号]（#Other Hardware Serial）部分了解更多信息。

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

在这个程序中，我们首先包括“SoftwareSerial.h”库来使用软件序列。然后，我们使用引脚2和3分别作为RX和TX创建一个名为mySerial的新SoftwareSerial对象。

在“setup（）”函数中，我们初始化硬件串行（“serial.begin（）”）和软件串行（“mySerial.begin[（）]”）。

在“loop（）”函数中，我们使用“mySerial.available（）”功能来检查是否有任何数据可从软件序列中读取。如果有，我们使用“mySerial.read（）”函数读取传入字节，并将其存储在一个名为data的变量中。然后，我们使用“Serial.print（）”和“Serial.println（）”函数打印“Received data：”，然后将数据值打印到硬件序列。

我们还使用`mySerial.print（）`函数将“Hello World！”写入软件序列。这将把数据从XIAO发送到连接到软件串行端口的设备。

最后，我们添加一个“delay（）”函数，在重复循环之前等待一秒钟。

::: 笔记
请注意，为了在ESP32-S3上使用软件串行，您需要为RX和TX选择不用于任何其他目的的适当引脚。在本例中，我们分别将引脚9和10用于RX和TX。
:::

### 其他硬件序列

ESP32S3共有三个UART通信接口，编号从0到2，分别为UART0、UART1和UART2。这三个串行端口的引脚不是固定的，可以重新映射到任何IO端口。

默认情况下，我们不使用**UART0**，因为它用于USB串行通信。您可以通过自定义硬件串行映射来使用其他硬件串行端口。

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
    MySerial1.begin(115200, SERIAL_8N1, 9, 10);
    MySerial1.print("MySerial1");
}

void loop()
{

}
```

在下文中，我们将介绍[60GHz毫米波传感器-人类静息呼吸和心跳模块](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html)，并解释如何使用D9和D10硬件串行端口以及USB串行端口。

请做好以下准备。

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
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

将传感器库下载到您的计算机上。并将其添加到Arduino IDE中。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor/">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

在这里，我们想要解析心跳和呼吸数据信息，然后你可以像这样重写你的程序。

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

请上传程序，然后打开串行监视器并将波特率设置为115200。

如果一切顺利，您将在串行监视器上看到数据消息。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/2.png" alt="pir" width="800" height="auto"/></div>

## IIC

XIAO ESP32S3具有I2C接口，可用于许多传感器的数据传输和解析，以及使用一些OLED屏幕。
###硬件准备

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

XIAO扩展板上的OLED显示器使用I2C协议，并通过板上的I2C电路连接到XIAO的I2C接口。因此，我们可以直接将XIAO插入扩展板，并对其进行编程以在屏幕上显示内容。

### 软件实现

本示例介绍了如何在XIAO ESP32S3的Seeed Studio扩展底座上使用OLED显示器。

####步骤1. 在扩展板上安装Seeed Studio XIAO ESP32S3，然后连接C型电缆。

####步骤2.安装u8g2库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

####步骤3.复制代码并粘贴在Ardiono IDE上，然后上传。

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

在代码的前几行中，我们包括了所需的库，如Arduino.h、U8x8lib.h和Wire.h。U8x8lib/h库提供了控制OLED显示器的功能，Wire.h库提供了I2C通信的功能。

在“setup（）”函数中，我们使用“u8x8.begin（）”功能初始化OLED显示器。我们还使用“u8x8.setFlipMode（）”函数设置显示器的翻转模式，以将屏幕旋转180度。

在“loop（）”函数中，我们使用“u8x8.setFont（）”功能设置字体，并使用“u8c8.setCursor（））”功能指定光标在显示器上的位置。最后，我们使用`u8x8.print（）`函数在OLED显示器上显示字符串“Hello World！”。

如果您将程序上传到XIAO ESP32S3，您将看到扩展板上OLED显示屏上显示的内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/29.jpg" style={{width:600, height:'auto'}}/></div>

##SPI

ESP32-S3芯片集成了多个外围设备，包括可用于连接闪存、显示器、传感器等外部SPI设备的SPI接口。ESP32-S3还支持高速SPI传输模式，可实现80MHz的最大SPI传输速率，满足大多数SPI设备的数据传输需求。

###硬件准备

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
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html">
            <strong><span><font color={'FFFFFF'} size={"4"}>点击购买 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

如上所述准备好硬件后，使用跳线连接XIAO和OLED的SPI接口。接线方法请参考下图。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/30.jpg" style={{width:800, height:'auto'}}/></div>

### 软件实现

接下来，我们将以以下程序为例，介绍如何使用SPI接口控制OLED屏幕显示。

安装u8g2库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino">
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

在“setup（）”函数中，“U8G2_SH1107_128X128_1_4W_HW_SPI”类使用适当的构造函数参数实例化，这些参数指定用于芯片选择（cs）、数据/命令（dc）和重置的引脚。然后，调用“u8g2.begin（）”函数来初始化显示。

在“loop（）”函数中，使用“u8g2.firstPage（）”、“u8g2.setFont（）”和“u8g2.drawStr（））”函数用新内容更新显示。“u8g2.firstPage（）”函数设置用于写入的显示缓冲区，而“u8g2.nextPage（）”则显示更新的内容。do-while循环确保内容连续显示，直到程序停止。

总之，这段代码演示了如何使用U8g2库来控制OLED显示器并在其上显示文本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/31.jpg" style={{width:600, height:'auto'}}/></div>

### For Sense

如果您购买了Sense版本，并且需要连接到扩展板，请注意扩展板上的SD卡会占用SPI引脚，这可能导致SPI引脚不可用。

Sense扩展板上提供的焊盘接口允许用户选择所需的功能。其中，**J3**焊盘的功能是启用SPI或SD卡功能。

<table align="center">
	<tr>
	    <th>如果要使用SPI引脚/禁用扩展板的SD卡</th>
	    <th>如果要启用扩展板上的SD卡/禁用SPI引脚</th>
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

:::警告
从图中可以看出，由于肖的空间限制，许多布线布局都非常紧凑。因此，在切割J3的连接时，请非常小心，不要在白线外切割，否则可能会导致开发板故障！
:::

:::警告
为了常识起见，J3在上面被简单地描述为打开或关闭SD卡功能的接口，但这实际上是不准确的。实际电路连接如下所示。切断J3实际上断开了从R4到R6的上拉电阻器，这是SD卡功能被禁用而SPI功能恢复正常的主要原因。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/93.png" style={{width:800, height:'auto'}}/></div>
:::

## 触针

除了上述常见的功能引脚外，XIAO ESP32S3/XIAO ESP32S3 Sense还具有9个触摸检测引脚A0~A5、A8~A10。

我们可以通过读取引脚的模拟值来检查引脚是否被触摸，这非常方便。以下程序用于检测引脚A5是否已被触摸。

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

上传程序后，打开串行监视器并将波特率设置为9600。然后触摸引脚A5，您会发现模拟读取值将明显大于触摸前的值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/32.gif" style={{width:600, height:'auto'}}/></div>

## USB Pins

ESP32-S3是一款集成了Wi-Fi和蓝牙功能的微控制器，其D+和D-引脚用于支持USB通信。具体而言，这两个引脚是用于USB 2.0设备和主机之间的高速数据传输的差分信号线。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/36.png" style={{width:200, height:'auto'}}/></div>

D+引脚是用于发送数据的正极性线路，而D-引脚是用于传输数据的负极性线路。当USB设备连接到主机时，主机会检测这两个引脚上的电压变化，以确定设备的连接状态和传输速度。在数据传输过程中，D+和D-引脚交替传输数据位和同步信号，以实现可靠的数据传输。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/34.png" style={{width:800, height:'auto'}}/></div>

## JTAG引脚

ESP32-S3的JTAG（联合测试行动小组）接口是一个调试和测试接口，可用于开发、调试和测试过程中的非常低级的硬件调试和编程。JTAG接口包括一组标准信号线，包括时钟线、数据输入线、数据输出线、测试模式选择线和测试模式时钟线等。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/35.png" style={{width:200, height:'auto'}}/></div>

ESP32-S3的JTAG接口可用于以下目的：
1.调试：JTAG接口可用于ESP32-S3芯片中的调试和单步执行，帮助开发人员发现和解决代码错误。

2.闪烁程序：通过JTAG接口，可以将程序或调试固件加载到ESP32-S3芯片中。

3.读取CPU状态：JTAG接口可用于读取ESP32-S3芯片的CPU状态、内存内容和寄存器值，用于调试和测试。

需要注意的是，使用JTAG接口需要专用的硬件设备和软件工具，以及相应的专业知识和技能。因此，一般情况下，JTAG接口仅用于特定场景，如开发、调试和测试。对于普通用户来说，使用ESP32-S3的其他功能和接口已经足够了。

如果你想了解更多关于JTAG调试的信息，请阅读官方网站[ESP32 文档](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/jtag-debugging/index.html).

##故障排除

###Q1：为什么我在使用串行监视器时会出现以下错误？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/25.png" style={{width:600, height:'auto'}}/></div>

A： 如果您遇到这种类型的错误，请打开**USB CDC开机**开关。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/28.png" style={{width:600, height:'auto'}}/></div>

这个问题也可能表现为ArduinoIDE2.x中的空串行输出，也可能是由同样的原因引起的。

###Q2：ESP-32支持或不支持哪些功能？

A： 以下是由提供的支持/不支持的功能列表 [ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/libraries.html)。 截至2023年4月10日。

| 外围设备    | ESP32         | ESP32-S2      | ESP32-C3      | ESP32-S3      | Comments               |
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

### Q3：为什么我总是能在串行监视器中看到芯片的调试消息？

A： 您可以尝试在Arduino IDE中使用以下方法关闭调试消息的输出，**Tool -> Core Debug Level: -> None** v。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/90.png" style={{width:500, height:'auto'}}/></div>

然而，这种方法并不总是有效的，事实上，ESP32-S3的调试信息总是从串行端口打印出来的，这是不可更改的。请原谅，它太急于让你知道它工作正常了。

### Q4：为什么我切断了J3的连接，但仍然测试D8和D9引脚高？写入microSD卡仍然有成功的可能性？

在SD卡设计方面，正确的电路必须具有上拉电阻器，才能使microSD卡正常工作。如果您在切割J3后发现引脚级别和读写卡仍然正常，这可能只是一种幸运的情况，我们不建议您在这种情况下读写卡，这可能会导致写入数据丢失的问题。而D8和D9引脚可以通过在切割J3之后写入低电平来修改电平。

## 技术支持和产品讨论

.

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>







