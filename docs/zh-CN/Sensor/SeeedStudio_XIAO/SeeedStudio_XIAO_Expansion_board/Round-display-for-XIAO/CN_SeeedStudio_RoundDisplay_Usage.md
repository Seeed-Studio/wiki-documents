---
description: This tutorial introduces the use of the expansion board function of the circular screen.
title: 硬件使用教程
keywords:
- Round display
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/seeedstudio_round_display_usage
last_update:
  date: 11/09/2023
  author: Chen Lei
---

# 基于 XIAO 的圆形显示器的硬件使用教程

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/79.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买🖱️</font></span></strong>
    </a>
</div>

<br />

本教程将详细解释如何使用圆形显示器上的扩展功能，包括RTC功能、SD卡功能和屏幕功能的使用。

## 入门
本教程的内容支持所有XIAO系列产品。所以你可以使用任何晓来完成这个维基的内容。

如果您是第一次使用Round Display，您可能需要阅读我们之前为其编写的准备内容，并根据这些内容配置库的环境，以确保您可以顺利使用Round Display。

- **[XIAO Seeed Studio使用圆形显示器的准备](https://wiki.seeedstudio.com/get_start_round_display#getting-started)**

### 安装microSD卡
Round Display支持使用**FAT32**格式不大于**32GB**的microSD卡。安装microSD卡时，应将microSD卡的金手指朝板内侧插入。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/64.jpg" style={{width:500, height:'auto'}}/></div>

### 安装RTC电池
圆显支持RTC功能，内置PCF8563T芯片。如果您需要使用RTC功能，您可能需要一个币形电池来保持RTC工作。

我们建议使用CR927系列纽扣电池，安装时正极（扁平）端子朝外，负极（略微突出的表面）朝内。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/65.jpg" style={{width:500, height:'auto'}}/></div>

：：：注释
上图只显示了电池的安装方向，而不是完全安装的电池。正确安装的蓄电池应完全插入蓄电池支架中。
：：：

### 安装电源电池

圆形显示屏支持外置3.7V锂电池。内置电源管理芯片，电池可以通过XIAO的USB端口充电。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/77.jpg" style={{width:500, height:'auto'}}/></div>

圆形显示屏还有一个充电指示灯。它有三种状态：

1.未连接锂电池时，指示灯在低亮度时始终亮起。
2.连接锂电池，在给锂电池充电时，红灯一直亮着，亮度很高。
3.锂电池已连接，当电池充满电时，指示灯熄灭。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/78.jpg" style={{width:500, height:'auto'}}/></div>


### 圆形显示开关

圆形显示屏上还有一个开关。该开关用于控制显示器的开/关以及XIAO的电源。当您将开关拨到OFF时，电池将不会为XIAO供电，显示屏将关闭。当您将该开关拨到ON时，显示屏将亮起，电池将为XIAO提供电源（前提是安装了电源电池），以确保程序运行。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/66.jpg" style={{width:500, height:'auto'}}/></div>

：：：注释
在这里的描述中，给XIAO供电是指通过圆形显示器给XIAO通电。如果直接为XIAO供电，则圆形显示屏上的开关无法断开XIAO的电源。如果你想通过圆形显示器上的开关控制整个设备，你需要在圆形显示器上安装电源电池。

还要注意的是，一些XIAO（如XIAO ESP32C3）可能需要按下XIAO上的Reset（重置）按钮才能在断电和再次通电时开始工作以运行程序。
：：：

### 圆形显示电路设计
在本节中，我们将截取Round Display硬件的电路原理图，并告知用户在Round Display的硬件中使用了XIAO上的哪些IO引脚，以避免IO的使用冲突。

#### 测量蓄电池电压针脚

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/70.png" style={{width:400, height:'auto'}}/></div>

对于圆形显示器的设计，我们使用XIAO上的**A0/D0**引脚连接到板载电池的电路。通过读取该引脚的模拟值可以获得剩余的电池电量。

#### SD卡电路引脚

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/67.png" style={{width:800, height:'auto'}}/></div>

SD卡部分使用XIAO上的四个IO端口，如下表所示。

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">XIAO GPIO</th>
            <th align="center">microSD Card Slot</th>
        </tr>
        <tr>
            <td align="center">D2</td>
            <td align="center">CS</td>
        </tr>
        <tr>
            <td align="center">D8</td>
            <td align="center">SCK</td>
        </tr>
        <tr>
            <td align="center">D9</td>
            <td align="center">MISO</td>
        </tr>
        <tr>
            <td align="center">D10</td>
            <td align="center">MOSI</td>
        </tr>
    </table>
</div>

#### RTC电路引脚

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/68.png" style={{width:500, height:'auto'}}/></div>

RTC功能使用IIC协议，因此占用**D5（SCL）**和**D4（SDA）**引脚。

#### 触摸屏电路引脚

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/69.png" style={{width:400, height:'auto'}}/></div>

触摸屏部分使用XIAO上的四个IO端口，如下表所示。

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">XIAO GPIO</th>
            <th align="center">触摸屏</th>
        </tr>
        <tr>
            <td align="center">D4 (SDA)</td>
            <td align="center">触摸屏 IIC</td>
        </tr>
        <tr>
            <td align="center">D5 (SCL)</td>
            <td align="center">触摸屏 IIC</td>
        </tr>
        <tr>
            <td align="center">D3</td>
            <td align="center">LCD_DC</td>
        </tr>
        <tr>
            <td align="center">D1</td>
            <td align="center">LCD_CS</td>
        </tr>
        <tr>
            <td align="center">D7</td>
            <td align="center">TP_INT</td>
        </tr>
        <tr>
            <td align="center">D6</td>
            <td align="center">屏幕背光</td>
        </tr>
    </table>
</div>


## 圆形显示库概述

圆显的绝大多数软件开发都是基于萧自己的硬件支持。图形基于TFT库、LVGL库和Arduino GFX库。

为了方便用户使用Round Display上的功能，我们编写了一个单独的库，主要调用上述库的接口，以降低用户后期自主开发的门槛。在本章中，我们将重点介绍我为Round Display准备的这些库的功能以及如何分别使用它们。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

### lv_xiao_round_screen.h

“lv_xiao_round_screen.h”文件是round Display库中的头文件，用于驱动屏幕的显示和触摸功能。

宏定义检查是在文件的开头进行的，目的是要求使用圆形显示的开发人员在绘制屏幕填充图案时需要选择要开发的图形库。有两种选择，**TFT**和**Arduino GFX**。如果您选择**TFT**库，那么它就是可以支持**LVGL**的库。

```cpp
#if defined(USE_TFT_ESPI_LIBRARY) && defined(USE_ARDUINO_GFX_LIBRARY)
#error "More than one graphics library is defined."
#elif defined(USE_TFT_ESPI_LIBRARY)
#include <TFT_eSPI.h>
TFT_eSPI tft = TFT_eSPI(SCREEN_WIDTH, SCREEN_HEIGHT);
#elif defined(USE_ARDUINO_GFX_LIBRARY)
#include <Arduino_GFX_Library.h>
```

之所以进行这种设计，是因为某晓在不同的图形库上绘制图案有其自身的优势。例如，如果您使用的是XIAO nRF52840，那么使用Arduino GFX库可能会更高效、更稳定。对于XIAO ESP32S3，大内存XIAO在处理LVGL等图形库方面具有固有优势，并且能够绘制更复杂的模式和UI。

因此，如果您需要使用圆形显示绘制图案，请不要忘记选择要使用的图形库，并在Arduino程序开始时定义它。

- 如果要使用TFT库或LVGL库：
```cpp
#define USE_TFT_ESPI_LIBRARY
```

- 如果你想使用 Arduino GFX 库:

```cpp
#define USE_ARDUINO_GFX_LIBRARY
```

1.`void xiao_disp_init（void）`：此函数用于初始化显示器背光并将显示器旋转到其初始位置，设备显示器背板颜色为纯黑色。此函数通常不会单独使用，当需要初始化时，会使用“lv_xiao_disp_init（）”函数。

2.`void lv_xiao_disp_init（void）`：初始化背光，初始化显示驱动程序。通常用于显示器初始化。

3.`bool chc6x_is_pressed（void）`：此函数用于检查屏幕是否被触摸，如果屏幕被触摸，则返回`Ture`。

4.`void lv_xiao_touch_init（void）`：此函数用于初始化触摸屏及其驱动程序。

5.`void chc6x_read（lv_indev_drv_t*indev_driver，lv_indev_data_t*data）`：此函数用于获取触摸屏的坐标点。

### lv_hardware_test.h

“lv_hardware_test.h”文件是Round Display库中的示例**硬件测试**中的头文件。此头文件为Round Display准备了大部分硬件使用功能。

如果你想使用这个头文件中的函数，你可以直接将文件复制到Arduino文件的同一个文件目录中。

1.`int32_t battery_level_percent（void）`：通过调用此函数，您可以读取并计算电池电量百分比，以在应用程序中显示电池电量。

2.`void lv_hardware_test（void）`：此功能用于测试所有硬件功能，包括屏幕显示、屏幕触摸、RTC时钟和电池电量。你可以参考这个函数编写方法来完成你想要的圆形显示函数的开发。

## KE按钮和GPIO

在新版本的圆形显示器上，我们设计了一个KE开关，以选择性地释放某些GPIO供用户选择性使用。

KE开关设计在microSD卡插槽的中间，以及连接到XIAO的一排引脚。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/90.jpg" style={{width:400, height:'auto'}}/></div>

此开关的电路设计如下所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/91.png" style={{width:400, height:'auto'}}/></div>

这意味着，当开关闭合**（切换到ON侧）**时，圆形显示屏的电池电压读取功能和显示屏背光功能可用。

当开关断开**（切换到数字侧）**时，XIAO上的引脚A0和D6为可用状态。

## 测量蓄电池电压

由于XIAO上缺少IO引脚，大多数XIAO无法测量电池电压，尽管在一些XIAO上配置了电源管理芯片以允许外部电池。

但如果你选择使用Round Dislay并通过屏幕为XIAO供电，那么测量电池电压将成为现实。

以下是测量蓄电池电压的示例程序。函数“battery_level_percent（）”是从“lv_hardware_test.h”文件中选择的。

```cpp
#define NUM_ADC_SAMPLE 20           // Sampling frequency
#define RP2040_VREF 3300            // When you use the XIAO RP2040, you need to measure the actual voltage at the 3.3V pin and modify that value. (unit: mV)
#define BATTERY_DEFICIT_VOL 1850    // Battery voltage value at loss of charge
#define BATTERY_FULL_VOL 2450       // Battery voltage value at full charge

int32_t battery_level_percent(void)
{
  int32_t mvolts = 0;
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    mvolts += analogReadMilliVolts(D0);
  }
  mvolts /= NUM_ADC_SAMPLE;
#elif defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
  analogReference(AR_INTERNAL2V4);  // 0.6V ref  1/4 Gain
  int32_t adc_raw = 0;
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    adc_raw += analogRead(D0);
  }
  adc_raw /= NUM_ADC_SAMPLE;
  mvolts = 2400 * adc_raw / (1<<12);
#elif defined(ARDUINO_SEEED_XIAO_RP2040)
  int32_t adc_raw = 0;
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    adc_raw += analogRead(D0);
  }
  adc_raw /= NUM_ADC_SAMPLE;
  mvolts = RP2040_VREF * adc_raw / (1<<12);
#endif
  int32_t level = (mvolts - BATTERY_DEFICIT_VOL) * 100 / (BATTERY_FULL_VOL-BATTERY_DEFICIT_VOL); // 1850 ~ 2100
  level = (level<0) ? 0 : ((level>100) ? 100 : level); 
  return level;
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  while(!Serial);

  analogReadResolution(12);
}

void loop() {
  // put your main code here, to run repeatedly:
  int32_t batteryVal = battery_level_percent();
  Serial.print("The percentage of power remaining is: ");
  Serial.print(batteryVal);
  Serial.print(" %");
  Serial.println();
  delay(1000);
}
```

：：提示
此程序不是通用程序，测得的电池百分比可能不准确。这是因为每个人使用不同的电池、芯片和开发板，所以在执行此程序时，您可能需要根据实际情况修改程序。修改方法请参考本节的[程序注释]（#program annotation）部分。
：：：

选择您正在使用的XIAO板，上传程序，打开串行监视器，并将波特率设置为**115200**。如果您已连接电池并通电，您应该能够在串行监视器中看到电池电压。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/80.png" style={{width:700, height:'auto'}}/></div>

### 程序注释

此代码使用ADC测量电池电压并计算电池电量百分比。实现方式因硬件平台而异：

- 对于ESP32-S3和ESP32-C3平台，“analogReadMilliVolts”功能用于读取模拟电压值，然后取多个样本的平均值以获得平均电池电压。

- 对于Seeeduino XIAO NRF52840平台，首先使用“analogReference”功能将参考电压指定为2.4V，然后使用analogRead功能读取模拟电压值，并计算平均电池电压。

- 对于Seeeduino XIAO RP2040平台，“analog read”功能用于读取模拟电压值，并计算平均电池电压。

在任何情况下，计算平均电池电压，然后使用公式“（mvolts-battery_DEFICIT_VOL）*100/（battery_FULL_VOL-battery_DEFICIT_VOL。最后，该代码限制电池电量百分比，以确保其在0和100之间。

总之，以下参数决定了使用此程序时电压测量的准确性。

```c
#define RP2040_VREF 3300            // When you use the XIAO RP2040, you need to measure the actual voltage at the 3.3V pin and modify that value. (unit: mV)
#define BATTERY_DEFICIT_VOL 1850    // Battery voltage value at loss of charge
#define BATTERY_FULL_VOL 2450       // Battery voltage value at full charge
```

你需要做的第一件事是获得你购买的电池在电量不足/充满电时的模拟值。

使用此功能可以获得电池的模拟值。您需要在电池电量充足和电量不足的状态下获得一次值。

```cpp
int32_t battery_test(void)
{
  int32_t mvolts = 0;
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    mvolts += analogReadMilliVolts(D0);
  }
  mvolts /= NUM_ADC_SAMPLE;
#elif defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
  analogReference(AR_INTERNAL2V4);  // 0.6V ref  1/4 Gain
  int32_t adc_raw = 0;
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    adc_raw += analogRead(D0);
  }
  adc_raw /= NUM_ADC_SAMPLE;
  mvolts = 2400 * adc_raw / (1<<12);
#elif defined(ARDUINO_SEEED_XIAO_RP2040)
  int32_t adc_raw = 0;
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    adc_raw += analogRead(D0);
  }
  adc_raw /= NUM_ADC_SAMPLE;
  mvolts = RP2040_VREF * adc_raw / (1<<12);
#endif
  return mvolts;
}
```
：：提示
“battery_test（）”函数实际上是“battery_level_percent（）”，去掉了最后两行代码来计算百分比。
：：：

然后只需修改与您测量的值相对应的程序值。

如果您使用的是**XIAO RP2040**，则需要执行的另一个步骤是使用电压表测量XIAO RP2040的3.3V引脚上的实际电压。测量的电压值被转换为**mV**单位，并修改相应的程序。

例如，以下是我使用XIAO RP2040和电池进行的实际测量。

```c
#define RP2040_VREF 3080
#define BATTERY_DEFICIT_VOL 1541
#define BATTERY_FULL_VOL 1791
```


##RTC功能

RTC的功能部分，我们主要分为以下四个部分来介绍它的应用。

1.首先是对于没有网络功能的晓，可以通过手动设置初始时间来校正RTC。
2.然后在币形电池的帮助下为RTC供电，以连续获得准确的时间。
3.对于具有网络功能的晓，您可以使用网络功能来更正时间。
4.结合RTC功能绘制一个简单的时钟刻度盘。

### RTC的离线手动校准

以下是手动校准RTC时间的示例程序。设置放在“Setup（）”函数中，以确保设置程序只执行一次。该程序是在没有网络能力的情况下为XIAO设置初始RTC时间的最有效方法。
```cpp
#include "I2C_BM8563.h"

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

void setup() {
  // Init Serial
  Serial.begin(115200);
  while(!Serial);
  delay(50);

  // Init I2C
  Wire.begin();

  // Init RTC
  rtc.begin();

  // Set RTC Date
  I2C_BM8563_DateTypeDef dateStruct;
  dateStruct.weekDay = 3;
  dateStruct.month = 4;
  dateStruct.date = 26;
  dateStruct.year = 2023;
  rtc.setDate(&dateStruct);

  // Set RTC Time
  I2C_BM8563_TimeTypeDef timeStruct;
  timeStruct.hours   = 9;
  timeStruct.minutes = 43;
  timeStruct.seconds = 10;
  rtc.setTime(&timeStruct);

  Serial.println("RTC time calibration complete!");
}

void loop() {

}
```

上传程序并打开串行监视器后，RTC时间将开始校准。当**RTC时间校准完成！**显示，校准完成。

### 获取RTC时间

以下程序每秒获取RTC的时间，并将其打印在串行监视器中。

：：提示
获取RTC时间的程序可以在上述手动校准程序之后使用。时间校准程序只需要执行一次，RTC时钟将能够在币形电池的电源下连续工作，之后您只需要使用获取时间的程序即可获得准确的时间。
我们不建议使用该程序来校准时间并将时间组合在一起，这样当XIAO通电时，两者都会根据您配置的时间重置一次，然后您将永远无法获得准确的时间。
：：：

```cpp
#include "I2C_BM8563.h"

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

void setup() {
  // Init Serial
  Serial.begin(115200);
  delay(50);

  // Init I2C
  Wire.begin();

  // Init RTC
  rtc.begin();
}

void loop() {
  I2C_BM8563_DateTypeDef dateStruct;
  I2C_BM8563_TimeTypeDef timeStruct;

  // Get RTC
  rtc.getDate(&dateStruct);
  rtc.getTime(&timeStruct);

  // Print RTC
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  Serial.printf("%04d/%02d/%02d %02d:%02d:%02d\n",
              dateStruct.year,
              dateStruct.month,
              dateStruct.date,
              timeStruct.hours,
              timeStruct.minutes,
              timeStruct.seconds
              );
#else
  Serial.print(dateStruct.year);
  Serial.print(", ");
  Serial.print(dateStruct.month);
  Serial.print(", ");
  Serial.print(dateStruct.date);
  Serial.print(", ");
  Serial.print(timeStruct.hours);
  Serial.print(", ");
  Serial.print(timeStruct.minutes);
  Serial.print(", ");
  Serial.print(timeStruct.seconds);
  Serial.println();
#endif

  // Wait
  delay(1000);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/71.png" style={{width:700, height:'auto'}}/></div>


### 网络校准RTC时间

对于拥有网络功能的晓来说，事情似乎变得容易多了。有了网络，你甚至不需要使用币形电池来保持RTC开箱即用，你只需要在每次通电时联网计时。

以下是用于网络定时和在串行监视器上输出RTC时间读数的示例程序。


：：：提示
本程序仅适用于肖ESP32系列。因为只有这个系列才有网络功能。
：：：

```cpp
#include "I2C_BM8563.h"
#include <WiFi.h>

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

const char* ntpServer = "time.cloudflare.com";
const char *ssid     = "YOUR_SSID";
const char *password = "YOUR_PASSWORD";

void setup() {
  // Init Serial
  Serial.begin(115200);
  delay(50);

  // Connect to an access point
  WiFi.begin(ssid, password);
  Serial.print("Connecting to Wi-Fi ");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println(" CONNECTED");

  // Set ntp time to local
  configTime(9 * 3600, 0, ntpServer);

  // Init I2C
  Wire.begin();

  // Init RTC
  rtc.begin();

  // Get local time
  struct tm timeInfo;
  if (getLocalTime(&timeInfo)) {
    // Set RTC time
    I2C_BM8563_TimeTypeDef timeStruct;
    timeStruct.hours   = timeInfo.tm_hour;
    timeStruct.minutes = timeInfo.tm_min;
    timeStruct.seconds = timeInfo.tm_sec;
    rtc.setTime(&timeStruct);

    // Set RTC Date
    I2C_BM8563_DateTypeDef dateStruct;
    dateStruct.weekDay = timeInfo.tm_wday;
    dateStruct.month   = timeInfo.tm_mon + 1;
    dateStruct.date    = timeInfo.tm_mday;
    dateStruct.year    = timeInfo.tm_year + 1900;
    rtc.setDate(&dateStruct);
  }
}

void loop() {
  I2C_BM8563_DateTypeDef dateStruct;
  I2C_BM8563_TimeTypeDef timeStruct;

  // Get RTC
  rtc.getDate(&dateStruct);
  rtc.getTime(&timeStruct);

  // Print RTC
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
    Serial.printf("%04d/%02d/%02d %02d:%02d:%02d\n",
                dateStruct.year,
                dateStruct.month,
                dateStruct.date,
                timeStruct.hours,
                timeStruct.minutes,
                timeStruct.seconds
               );
#else
     Serial.print(dateStruct.year);
     Serial.print(", ");
     Serial.print(dateStruct.month);
     Serial.print(", ");
     Serial.print(dateStruct.date);
     Serial.print(", ");
     Serial.print(timeStruct.hours);
     Serial.print(", ");
     Serial.print(timeStruct.minutes);
     Serial.print(", ");
     Serial.print(timeStruct.seconds);
     Serial.println();
#endif

  // Wait
  delay(1000);
}
```

当您使用此程序时，请根据您的实际情况填写网络名称和密码。上传程序后，打开串行监视器，将波特率设置为115200，然后可以看到确切的时间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/72.png" style={{width:700, height:'auto'}}/></div>


### 基于RTC时间的简单拨号

以下程序是基于RTC时钟绘图的拨号程序。

：：：提示
以下程序仅与XIAO兼容，XIAO nRF52840除外。XIAO nRF52840目前在TFT兼容性方面存在问题。但您可以考虑使用Arduino GFX库或LVGL来绘制表盘。
：：：

```cpp
#include <Arduino.h>
#include <TFT_eSPI.h>
#include <SPI.h>
#include "I2C_BM8563.h"
#include <Wire.h>

#define USE_TFT_ESPI_LIBRARY

#include "lv_xiao_round_screen.h"

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
#include "esp_wifi.h"
#include "WiFi.h"

  const char *ntpServer = "time.cloudflare.com";
  const char *ssid     = "YOUR_SSID";
  const char *password = "YOUR_PASSWORD";
#elif defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
#error "This procedure is not applicable to XIAO nRF52840 series, please replace other XIAO and try again."
#endif


//TFT_eSPI tft = TFT_eSPI();  // Invoke library, pins defined in User_Setup.h
TFT_eSprite face = TFT_eSprite(&tft);

#define CLOCK_X_POS 0
#define CLOCK_Y_POS 0

#define CLOCK_FG   TFT_SKYBLUE
#define CLOCK_BG   TFT_NAVY
#define SECCOND_FG TFT_RED
#define LABEL_FG   TFT_GOLD

#define CLOCK_R       240.0f / 2.0f // Clock face radius (float type)
#define H_HAND_LENGTH CLOCK_R/2.0f
#define M_HAND_LENGTH CLOCK_R/1.4f
#define S_HAND_LENGTH CLOCK_R/1.3f

// Calculate 1 second increment angles. Hours and minute hand angles
// change every second so we see smooth sub-pixel movement
#define SECOND_ANGLE 360.0 / 60.0
#define MINUTE_ANGLE SECOND_ANGLE / 60.0
#define HOUR_ANGLE   MINUTE_ANGLE / 12.0

// Sprite width and height
#define FACE_W CLOCK_R * 2 + 1
#define FACE_H CLOCK_R * 2 + 1

// Time h:m:s
uint8_t h = 0, m = 0, s = 0;

float time_secs = h * 3600 + m * 60 + s;

// Time for next tick
uint32_t targetTime = 0;

// =========================================================================
// Setup
// =========================================================================
void setup() {
  Serial.begin(115200);
  Serial.println("Booting...");

  // Initialise the screen
  tft.init();

  // Ideally set orientation for good viewing angle range because
  // the anti-aliasing effectiveness varies with screen viewing angle
  // Usually this is when screen ribbon connector is at the bottom
  tft.setRotation(0);
  tft.fillScreen(TFT_BLACK);

  // Create the clock face sprite
  //face.setColorDepth(8); // 8 bit will work, but reduces effectiveness of anti-aliasing
  face.createSprite(FACE_W, FACE_H);

  // Draw the whole clock - NTP time not available yet
  renderFace(time_secs);

#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  WiFi.begin(ssid, password);
  while ( WiFi.status() != WL_CONNECTED ) 
  {
    delay ( 500 );
    Serial.print ( "." );
  }
  configTime(8 * 3600, 0, ntpServer);
#endif

  Wire.begin();
  rtc.begin();

//  struct tm timeInfo;
  I2C_BM8563_TimeTypeDef timeStruct;
  I2C_BM8563_DateTypeDef dateStruct;

// In case of XIAO ESP32 series, use network timing.
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  struct tm timeInfo;
  if (getLocalTime(&timeInfo)) {
    timeStruct.hours   = timeInfo.tm_hour;
    timeStruct.minutes = timeInfo.tm_min;
    timeStruct.seconds = timeInfo.tm_sec;
    rtc.setTime(&timeStruct);
  }
#else
  // Set RTC time, Other XIAOs do not have network functions and require manual time alignment.
  // Please note that the setting time should be set only once.
  timeStruct.hours   = 9;
  timeStruct.minutes = 43;
  timeStruct.seconds = 10;
  rtc.setTime(&timeStruct);
#endif

  targetTime = millis() + 100;
  rtc.getTime(&timeStruct);
  time_secs = timeStruct.hours * 3600 + timeStruct.minutes * 60 + timeStruct.seconds;
}

// =========================================================================
// Loop
// =========================================================================
void loop() {
  // Update time periodically
  if (targetTime < millis()) {

    // Update next tick time in 100 milliseconds for smooth movement
    targetTime = millis() + 100;

    // Increment time by 100 milliseconds
    time_secs += 0.100;

    // Midnight roll-over
    if (time_secs >= (60 * 60 * 24)) time_secs = 0;

    // All graphics are drawn in sprite to stop flicker
    renderFace(time_secs);

    I2C_BM8563_DateTypeDef dateStruct;
    I2C_BM8563_TimeTypeDef timeStruct;

    // Get RTC
    rtc.getTime(&timeStruct);
  
    // Print RTC
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
    Serial.printf("%02d:%02d:%02d\n",
                timeStruct.hours,
                timeStruct.minutes,
                timeStruct.seconds
               );
#else
     Serial.print(timeStruct.hours);
     Serial.print(", ");
     Serial.print(timeStruct.minutes);
     Serial.print(", ");
     Serial.print(timeStruct.seconds);
     Serial.println();
#endif
  }
}

// =========================================================================
// Draw the clock face in the sprite
// =========================================================================
static void renderFace(float t) {
  float h_angle = t * HOUR_ANGLE;
  float m_angle = t * MINUTE_ANGLE;
  float s_angle = t * SECOND_ANGLE;

  // The face is completely redrawn - this can be done quickly
  face.fillSprite(TFT_BLACK);

  // Draw the face circle
  face.fillSmoothCircle( CLOCK_R, CLOCK_R, CLOCK_R, CLOCK_BG );

  // Set text datum to middle centre and the colour
  face.setTextDatum(MC_DATUM);

  // The background colour will be read during the character rendering
  face.setTextColor(CLOCK_FG, CLOCK_BG);

  // Text offset adjustment
  constexpr uint32_t dialOffset = CLOCK_R - 10;

  float xp = 0.0, yp = 0.0; // Use float pixel position for smooth AA motion

  // Draw digits around clock perimeter
  for (uint32_t h = 1; h <= 12; h++) {
    getCoord(CLOCK_R, CLOCK_R, &xp, &yp, dialOffset, h * 360.0 / 12);
    face.drawNumber(h, xp, 2 + yp);
  }

  // Add text (could be digital time...)
  face.setTextColor(LABEL_FG, CLOCK_BG);
  face.drawString("TFT_eSPI", CLOCK_R, CLOCK_R * 0.75);

  // Draw minute hand
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, M_HAND_LENGTH, m_angle);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 6.0f, CLOCK_FG);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 2.0f, CLOCK_BG);

  // Draw hour hand
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, H_HAND_LENGTH, h_angle);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 6.0f, CLOCK_FG);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 2.0f, CLOCK_BG);

  // Draw the central pivot circle
  face.fillSmoothCircle(CLOCK_R, CLOCK_R, 4, CLOCK_FG);

  // Draw cecond hand
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, S_HAND_LENGTH, s_angle);
  face.drawWedgeLine(CLOCK_R, CLOCK_R, xp, yp, 2.5, 1.0, SECCOND_FG);
  face.pushSprite(0, 0, TFT_TRANSPARENT);
}

// =========================================================================
// Get coordinates of end of a line, pivot at x,y, length r, angle a
// =========================================================================
// Coordinates are returned to caller via the xp and yp pointers
#define DEG2RAD 0.0174532925
void getCoord(int16_t x, int16_t y, float *xp, float *yp, int16_t r, float a)
{
  float sx1 = cos( (a - 90) * DEG2RAD);
  float sy1 = sin( (a - 90) * DEG2RAD);
  *xp =  sx1 * r + x;
  *yp =  sy1 * r + y;
}
```
根据您使用的开发板的类型，您需要对上面的代码进行一些小的修改。如果您使用具有网络功能的XIAO，则需要配置WiFi名称和密码。如果没有，则需要手动调整实时性。
上传程序，你会看到拨号盘会按照设定的时间自动运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/75.gif" style={{width:500, height:'auto'}}/></div>

## SD卡功能

圆形显示屏支持使用microSD卡读取和写入数据。在使用microSD卡之前，请将microSD卡格式化为**FAT32**格式，以确保能够正确识别和使用。

### 所有XIAO系列（除XIAO nRF52840系列外）

本节适用于所有XIAO（除了XIAO nRF52840系列），这是一个用于读取和写入文件的简单程序。

```cpp
#include <SPI.h>
#include <SD.h>
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

File myFile;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(115200);
  while(!Serial);

  // Display initialization
  tft.init();

  Serial.print("Initializing SD card...");

  pinMode(D2, OUTPUT);
  if (!SD.begin(D2)) {
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
  myFile = SD.open("/test.txt");
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

该程序将在您的microSD卡上创建一个名为**test.txt**的新程序，并写入**测试1、2、3.**的内容。最后，它读取文件并通过串行监视器打印出文件的内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/83.png" style={{width:700, height:'auto'}}/></div>

：：：小心
您会发现SD卡的程序中使用了屏幕TFT初始化。请不要认为这是无用的，可以删除，但事实上，这是必要的使用SD卡，否则你会收到一条错误消息，即microSD卡无法安装。

由于硬件设计的原因，一些引脚默认为低电平，这将导致microSD安装程序认为没有上拉电阻器导致安装失败。因此，当使用带有圆形显示的SD卡功能时，请确保在初始化SD卡之前先初始化屏幕显示。
：：：

### XIAO nRF52840

如果您使用的是XIAO nRF52840系列，那么您可能需要下载[SdFat库](https://github.com/greiman/SdFat) 以便使用SD卡功能。

```cpp
#include <SPI.h>
#include "SdFat.h"
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();
SdFat SD;

#define SD_CS_PIN D2
File myFile;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  // Display initialization
  tft.init();

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

### XIAO ESP32S3和 XIAO ESP32S3Sense& XIAO ESP32C3

由于ESP32系列具有非常强大的文件系统支持，我们为XIAO ESP32编写了一系列关于如何使用文件系统和保存microSD卡的示例，您可以在下面的链接中学习使用。
- **[文件系统和XIAO ESP32S3感知](https://wiki.seeedstudio.com/xiao_esp32s3_sense_filesystem)**

本Wiki中的教程适用于XIAO ESP32系列，但由于您现在想要使用Round Display的SD卡插槽，并且以上教程侧重于在XIAO ESP32S3 Sense上使用SD卡插槽，因此您需要将SD卡的初始化修改为下面的行。

```c
// Display initialization
tft.init();

pinMode(D2, OUTPUT);
SD.begin(D2);
```

：：提示
不要忘记，您还需要首先初始化TFT屏幕才能使用SD卡功能。
：：：

## 屏幕功能

在屏幕的使用部分，主要分为触摸和显示两个部分。

### 触摸功能

触摸功能是圆形显示屏的一项特殊功能。您可以使用触摸功能执行一些点击并保持显示操作。

以下程序可用于输出显示器是否被触摸的结果。
```cpp
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();
}

void loop() {
  // put your main code here, to run repeatedly:
  if(chsc6x_is_pressed()){
    Serial.println("The display is touched.");
  }
  else
    Serial.println("The display is not touched.");
  delay(50);
}
```

以下程序是触摸功能与显示功能相结合的简单示例。上传以下程序，然后点击屏幕，在点击屏幕的位置会画一个小圆圈。

：：：小心
如果您使用的是XIAO nRF52840，那么以下基于TFT库显示的程序可能无法正常工作，您需要修改程序以使用Arduino GFX库。
：：：

```cpp
#include <TFT_eSPI.h>
#include <SPI.h>
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"

lv_coord_t touchX, touchY;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();
  
  // Initialise the screen
  tft.init();

  tft.setRotation(0);
  tft.fillScreen(TFT_BLACK);
}

void loop() {
  // put your main code here, to run repeatedly:
  if(chsc6x_is_pressed())
  {
    Serial.println("The display is touched.");
    chsc6x_get_xy(&touchX, &touchY);
    tft.drawCircle(touchX, touchY, 15, TFT_WHITE);
  }
  
  delay(50);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/81.gif" style={{width:500, height:'auto'}}/></div>

### 显示功能
 
关于显示部分，我们主要介绍LVGL库和TFT库的使用。由于空间问题，我们将详细介绍如何在新的Wiki中使用支持的图形库绘制复杂的表盘。

[在XIAO的Seeed Studio圆形显示器上使用LVGL和TFT](https://wiki.seeedstudio.com/using_lvgl_and_tft_on_round_display)

当然，如果你只想实现一些简单的例子，图形库也有一组非常丰富的例子供你参考。

- [TFT库示例](https://github.com/Bodmer/TFT_eSPI/tree/master/examples)

- [Arduino GFX库示例](https://github.com/moononournation/Arduino_GFX/tree/master/examples)

- [LVGL库示例](https://github.com/lvgl/lvgl/tree/master/examples)

如果你已经安装了这些库，你可以很容易地在里面找到例子 **File->Example->library name** 在Arduino IDE上。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/82.png" style={{width:800, height:'auto'}}/></div>

：：提示
这里的示例仅供参考，并非每个示例都一定有效。您可能需要修改程序，使其与圆形显示器引脚和硬件定义兼容。
：：：

## 技术支持和产品讨论

### Q1：为什么我在使用XIAO nRF52840（Sense）时会出现错误？

使用本教程的内容时，XIAO nRF52840可能会出现两种不同类型的问题。

1.nRF52840与TFT库的兼容性问题。

如果你使用的是TFT库，编译和上传没有任何错误，非常流畅。但当你展示它时，你会发现没有图像。然后您可能遇到nRF52840和TFT库之间的兼容性问题。这意味着您只能替换XIAO或使用Arduino GFX库来完成图像。

2.由于选择错误的开发板而导致的编译错误。

如果您在编译过程中遇到问题。错误消息通常是关于SPI错误的，例如“SPI_X”未在此范围内声明`
。那么这就意味着你选择了错误类型的开发板。要使用本教程的全部内容，您需要使用XIAO nRF52840的**非mbed**版本。-->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/73.png" style={{width:700, height:'auto'}}/></div>

### Q2：为XIAO RP2040上传程序时，出现错误：在可执行段中检测到未对齐的操作码？

请根据下图中的设置修改XIAO RP2040的上传选项。除了默认的**小型（-Os）（标准）**外，所有选项都可以正常工作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/74.png" style={{width:600, height:'auto'}}/></div>

###Q3：当我为XIAO SAMD21编译圆屏程序时，为什么会出现引脚定义错误？

当您遇到此错误时，请将您的**Seed SAMD**开发板板板载软件包更新为最新版本。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/76.png" style={{width:700, height:'auto'}}/></div>

### Q4：为什么我把节目上传到肖ESP32C3后屏幕不显示？

如果程序没有问题，并且在上传后没有显示，则可能需要重置。只需按下XIAO ESP32C3上的重置按钮。


## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。
<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>




























