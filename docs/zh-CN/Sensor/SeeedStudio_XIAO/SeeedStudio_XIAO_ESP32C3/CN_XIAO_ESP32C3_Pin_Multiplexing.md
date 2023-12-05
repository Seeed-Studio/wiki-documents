---
description: Seeed Studio XIAO ESP32C3的引脚复用
title: 引脚串口硬件使用教程
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO_ESP32C3_Pin_Multiplexing
last_update:
  date: 10/29/2023
  author: Xin Ping Li
---

# XIAO ESP32C3 引脚串口硬件使用教程

Seeed Studio XIAO ESP32C3接口丰富。有**11个数字I/O**可以用作**PWM引脚**和**4个模拟输入**可以用作**ADC引脚**。支持**UART、I2C、SPI、I2S**等4种串行通信接口。这个wiki将有助于学习这些接口并在您的下一个项目中实现它们!

## 数字

将按钮连接到引脚D6，并将LED连接到引脚D10。然后上传以下代码，使用按钮控制LED的开/关。

```c
const int buttonPin = D6;     // pushbutton connected to digital pin 6
const int ledPin =  D10;      // LED connected to digital pin 10
 
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

## 数字式PWM

将LED连接到引脚D10。然后上传以下代码，看到LED逐渐褪色。
```cpp
int ledPin = D10;    // LED connected to digital pin 10

void setup() {
  // declaring LED pin as output
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // fade in from min to max in increments of 5 points:
  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
    // sets the value (range from 0 to 255):
    analogWrite(ledPin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }

  // fade out from max to min in increments of 5 points:
  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
    // sets the value (range from 0 to 255):
    analogWrite(ledPin, fadeValue);
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
  }
}
```

## 模拟

将电位器连接到引脚A0，并将LED连接到引脚D10。然后上传以下代码，通过旋转电位器旋钮来控制LED的闪烁间隔。
```c
const int sensorPin = A0;
const int ledPin =  D10; 

void setup() {
  pinMode(sensorPin, INPUT);  // declare the sensorPin as an INPUT
  pinMode(ledPin, OUTPUT);   // declare the ledPin as an OUTPUT
}

void loop() {
  // read the value from the sensor:
  int sensorValue = analogRead(sensorPin);
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

## 串口

### 常规方法-选择USB串口或UART0串口之一使用

该开发板上有2个串口:

- USB 串口
- UART0 串口

默认情况下，USB串口是启用的，这意味着您可以通过USB Type-C将板连接到PC上，并在Arduino IDE上打开串口监视器以查看通过串口发送的数据。
但是，如果要使用UART0作为串口，则需要使用usb -串口适配器将引脚D6连接为TX引脚，将引脚D7连接为RX引脚。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-3.png" alt="pir" width={1000} height="auto" /></div>

此外，您需要将**USB CDC On Boot**设置为**Disabled**从Arduino IDE。

**注意:更改照片时，板显示在Arduino板管理器**。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-1.png" alt="pir" width={600} height="auto" /></div>

将以下代码上传到Arduino IDE，通过串口发送字符串“Hello World!

```cpp
void setup() {
    Serial.begin(115200);
    while (!Serial);
}
 
void loop() {
    Serial.println("Hello World!");
    delay(1000);
}
```

Arduino Serial Monitor上的输出如下所示

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-2.jpg" alt="pir" width={450} height="auto" /></div>

### 特殊方式-同时使用USB串口和UART0/UART1

很多时候，我们需要使用UART传感器连接到XIAO ESP32C3硬件串口来获取数据，同时可能需要使用USB串口在串口监视器上显示数据。这可以通过一些特殊的方法来实现。

- 示例程序:

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

正如您所看到的，XIAO ESP32C3实际上有三个可用的uart。
下面，我们将以已经上市的[60GHz毫米波传感器-人类静息呼吸和心跳模块](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html)为例，说明D6和D7硬件串口和USB串口的使用方法。

请做好以下准备。

<table align="center">
 <tr>
     <th>XIAO ESP32C3</th>
        <th>60GHz毫米波传感器  -<br/>人体静息呼吸<br/>和心跳模块</th>
 </tr>
    <tr>
        <td><div align="center"><img width = {120} src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
        <td><div align="center"><img width = {240} src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div></td>
    </tr>
 <tr>
        <td align = "center"><a href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">点击购买</a></td>
        <td align = "center"><a href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html">点击购买</a></td>
 </tr>
</table>

将传感器库下载到计算机上。并将其添加到Arduino IDE中。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed-Studio-MR60BHA1-Sensor/" target="_blank"><div align="center"><img width = {300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></div></a></p>

这里，我们要解析心跳和呼吸数据信息，然后您可以像这样重写您的程序。

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
  MySerial.begin(115200, SERIAL_8N1, -1, -1); // at CPU Freq is 40MHz, work half speed of defined.

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

请上传程序，然后打开串口监视器，将波特率设置为115200。
接下来，我们可以使用以下连接方法将传感器连接到XIAO ESP32C3。

<div align="center"><img width = {700} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/62.jpg"/></div>

如果一切顺利，您将在串行监视器上看到数据消息。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/2.png" alt="pir" width="800" height="auto"/></div>

## I2C

### 硬件连接

将[Grove -OLED OLED 黄蓝双色显示屏 0.96 (SSD1315)](https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html)连接到XIAO ESP32C3，硬件连接如下。

| Grove - OLED黄蓝显示屏0.96 (SSD1315)|  XIAO ESP32C3 |
|-----------|-----------|
| SCL       | SCL       |
| SDA       | SDA       |
| VCC       | 5V        |
| GND       | GND       |

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-7.png" alt="pir" width={1000} height="auto" /></div>

### 软件设置

- **步骤 1.** 打开Arduino IDE，导航到 `Sketch > Include Library > Manage Libraries…`

- **步骤  2.** 搜索**u8g2**并安装它

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/u8g2-install.png" alt="pir" width={600} height="auto" /></p>

- **步骤  3.** 上传以下代码以在OLED显示器上显示文本字符串

```cpp
//#include <Arduino.h>
#include <U8g2lib.h>
 
#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);    //Low spped I2C
 
void setup(void) {
  u8g2.begin();
//  u8x8.setFlipMode(1);   // set number from 1 to 3, the screen word will rotary 180
}
 
void loop(void) {
  u8g2.clearBuffer();                   // clear the internal memory
  u8g2.setFont(u8g2_font_ncenB08_tr);   // choose a suitable font
  u8g2.drawStr(0,15,"Hello World!");    // write something to the internal memory
  u8g2.drawStr(0,30,"Hello World!");
  u8g2.drawStr(0,40,"Hello World!");
  u8g2.sendBuffer();                    // transfer internal memory to the display
//  delay(1000);  
}
```

## SPI

### 硬件连接

将[Grove -高精度气压传感器(DPS310)](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)连接到XIAO ESP32C3，硬件连接如下。

| Grove -高精度气压传感器(DPS310) | XIAO ESP32C3 |
|-----------|------------|
| 3V3        | 3V3       |
| SDI        | MOSI      |
| GND        | GND       |
| SDO        | MISO      |
| CSK        | SCK       |
| CS         | CS        |

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-4.png" alt="pir" width={1000} height="auto" /></div>

### 软件设置

- **步骤 1**. 下载[Seeed_Arduino_DPS310库](https://github.com/Seeed-Studio/Seeed_Arduino_DPS310)作为zip文件

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-5.png" alt="pir" width={1000} height="auto" /></div>

- **步骤 2**.打开Arduino IDE，导航到`Sketch > Include Library > Add .ZIP Library…`，并打开下载的zip文件

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3.** 导航到` File > Examples > digitalpressuressensor > spi_background `打开**spi_background**示例

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-6.png" alt="pir" width={450} height="auto" /></div>

或者，您也可以从下面复制代码

```cpp
#include <Dps310.h>

// Dps310 Opject
Dps310 Dps310PressureSensor = Dps310();

void setup() {
    //pin number of your slave select line
    //XMC2GO
    int16_t pin_cs = SS;
    //for XMC 1100 Bootkit  & XMC4700 Relax Kit uncomment the following line
    //int16_t pin_cs = 10;

    Serial.begin(9600);
    while (!Serial);


    //Call begin to initialize Dps310
    //The parameter pin_nr is the number of the CS pin on your Microcontroller
    Dps310PressureSensor.begin(SPI, pin_cs);

    //temperature measure rate (value from 0 to 7)
    //2^temp_mr temperature measurement results per second
    int16_t temp_mr = 2;
    //temperature oversampling rate (value from 0 to 7)
    //2^temp_osr internal temperature measurements per result
    //A higher value increases precision
    int16_t temp_osr = 2;
    //pressure measure rate (value from 0 to 7)
    //2^prs_mr pressure measurement results per second
    int16_t prs_mr = 2;
    //pressure oversampling rate (value from 0 to 7)
    //2^prs_osr internal pressure measurements per result
    //A higher value increases precision
    int16_t prs_osr = 2;
    //startMeasureBothCont enables background mode
    //temperature and pressure ar measured automatically
    //High precision and hgh measure rates at the same time are not available.
    //Consult Datasheet (or trial and error) for more information
    int16_t ret = Dps310PressureSensor.startMeasureBothCont(temp_mr, temp_osr, prs_mr, prs_osr);
    //Use one of the commented lines below instead to measure only temperature or pressure
    //int16_t ret = Dps310PressureSensor.startMeasureTempCont(temp_mr, temp_osr);
    //int16_t ret = Dps310PressureSensor.startMeasurePressureCont(prs_mr, prs_osr);


    if (ret != 0) {
        Serial.print("Init FAILED! ret = ");
        Serial.println(ret);
    } else {
        Serial.println("Init complete!");
    }
}



void loop() {
    uint8_t pressureCount = 20;
    float pressure[pressureCount];
    uint8_t temperatureCount = 20;
    float temperature[temperatureCount];

    //This function writes the results of continuous measurements to the arrays given as parameters
    //The parameters temperatureCount and pressureCount should hold the sizes of the arrays temperature and pressure when the function is called
    //After the end of the function, temperatureCount and pressureCount hold the numbers of values written to the arrays
    //Note: The Dps310 cannot save more than 32 results. When its result buffer is full, it won't save any new measurement results
    int16_t ret = Dps310PressureSensor.getContResults(temperature, temperatureCount, pressure, pressureCount);

    if (ret != 0) {
        Serial.println();
        Serial.println();
        Serial.print("FAIL! ret = ");
        Serial.println(ret);
    } else {
        Serial.println();
        Serial.println();
        Serial.print(temperatureCount);
        Serial.println(" temperature values found: ");
        for (int16_t i = 0; i < temperatureCount; i++) {
            Serial.print(temperature[i]);
            Serial.println(" degrees of Celsius");
        }

        Serial.println();
        Serial.print(pressureCount);
        Serial.println(" pressure values found: ");
        for (int16_t i = 0; i < pressureCount; i++) {
            Serial.print(pressure[i]);
            Serial.println(" Pascal");
        }
    }

    //Wait some time, so that the Dps310 can refill its buffer
    delay(10000);
}
```

- **步骤 4.** 上传代码并打开“串口监视器
**注意:**上传代码后，需要点击Arduino窗口右上角的**Serial Monitor**才会自动执行。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pins-8.jpg" alt="pir" width={600} height="auto" /></div>

现在你会看到温度和压力数据一个接一个地显示在串行监视器上，如上所示!


## 关于XIAO ESP32C3 IO分配的说明
### D9

IAO ESP32C3的D9连接ESP32-C3的GPIO9(15)，上拉电阻(R6)和BOOT按钮。BOOT按钮(和RESET按钮)用于手动切换ESP32-C3的启动模式。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/10.png" alt="pir" width={600} height="auto" /></div>

按BOOT键将D9连接到GND。所以最好使用D9作为开关输入。

### D6

Seeeed ESP32C3的D6接ESP32-C3的U0TXD(28)。第一/第二阶段引导加载程序的运行状态作为文本输出到U0TXD。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/11.png" alt="pir" width={400} height="auto" /></div>

D6在启动时被设置为UART输出，因此如果您使用D6作为输入，可能会意外地产生大电流。**因此建议仅在输出模式下使用D6引脚。

然而，由于这个D6是UART输出，您必须注意一些事情:一个是它在待机模式下不通信时为HIGH。另一个是第一/第二阶段引导加载程序的文本输出。信号在启动后立即振荡HIGH/LOW，必要时必须抵消。

所以尽量不要使用D6。(当然，在你理解它之后使用它是可以的。)

### D8
seed Studio XIAO ESP32C3的D8连接ESP32-C3的GPIO8(14)。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/12.png" alt="pir" width={300} height="auto" /></div>

当启动模式设置为长按boot键下载启动时，引用GPIO8，此时必须为HIGH。[这里](https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf):“GPIO8 = 0和GPIO9 = 0的捆绑组合无效，将触发意外行为。”

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/13.png" alt="pir" width={700} height="auto" /></div>

如果你使用下载引导，**添加一个上拉电阻使GPIO8在引导时为HIGH**。

特别感谢SeeedJP的同事**李新平**对本节进行了测试和贡献。这里是原文的参考链接。

- [Seeed Studio XIAO ESP32C3的I/O分配注意](https://lab.seeed.co.jp/entry/2023/04/03/120000)

