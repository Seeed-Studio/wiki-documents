---
description: 本教程介绍圆形屏幕扩展板功能的使用。
title: 硬件使用
keywords:
- Round display
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/seeedstudio_round_display_usage
last_update:
  date: 04/27/2023
  author: Citric
---

# Seeed Studio 圆形显示屏扩展板的使用

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/79.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<br />

本教程将详细说明如何使用圆形显示屏上的扩展功能，包括RTC功能、SD卡功能和屏幕功能的使用。

## 入门指南

本教程的内容支持所有XIAO系列产品。因此您可以使用任何XIAO来完成本Wiki的内容。

如果您是第一次使用圆形显示屏，您可能需要阅读我们之前为其编写的准备内容，并根据此内容配置库环境，以确保您能够顺利使用圆形显示屏。

- **[使用Seeed Studio XIAO圆形显示屏的准备工作](https://wiki.seeedstudio.com/cn/get_start_round_display#getting-started)**

### 安装microSD卡

圆形显示屏支持使用不大于**32GB**的**FAT32**格式microSD卡。安装microSD卡时，microSD卡的金手指应朝向板子内侧插入。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/64.jpg" style={{width:500, height:'auto'}}/></div>

### 安装RTC电池

圆形显示屏支持RTC功能，内置PCF8563T芯片。如果您需要使用RTC功能，可能需要一个纽扣电池来保持RTC工作。

我们推荐使用CR927系列纽扣电池，安装时正极（平面）朝外，负极（略微突出的表面）朝内。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/65.jpg" style={{width:500, height:'auto'}}/></div>

:::note
上图仅显示电池安装方向，并非完全安装的电池。正确安装的电池应完全插入电池座中。
:::

### 安装供电电池

圆形显示屏支持外接3.7V锂电池。内置电源管理芯片，可通过XIAO的USB端口为电池充电。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/77.jpg" style={{width:500, height:'auto'}}/></div>

圆形显示屏还有一个充电指示灯。它有三种状态：

1. 未连接锂电池时，指示灯低亮度常亮。
2. 连接锂电池并为锂电池充电时，红灯高亮度常亮。
3. 连接锂电池且电池充满电时，指示灯熄灭。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/78.jpg" style={{width:500, height:'auto'}}/></div>


### 圆形显示屏开关


圆形显示屏上还有一个开关。该开关用于控制显示屏的开/关以及对XIAO的供电。当您将开关拨到OFF时，电池将不会为XIAO供电，显示屏将关闭。当您将开关拨到ON时，显示屏将点亮，电池将为XIAO供电（前提是安装了供电电池）以确保程序运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/66.jpg" style={{width:500, height:'auto'}}/></div>

:::note
这里描述中的为XIAO供电是指通过圆形显示屏为XIAO供电。如果您直接为XIAO供电，那么圆形显示屏上的开关无法断开对XIAO的供电。如果您想通过圆形显示屏上的开关控制整个设备，需要在圆形显示屏上安装供电电池。

还要注意，某些XIAO（如XIAO ESP32C3）在断电后重新上电运行程序时，可能需要按下XIAO上的复位按钮才能开始工作。
:::

### 圆形显示屏电路设计

在本节中，我们将截取圆形显示屏硬件的电路原理图，并告知用户XIAO上的哪些IO引脚在圆形显示屏硬件中被使用，以避免在使用IO时发生冲突。

#### 测量电池电压引脚

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/70.png" style={{width:400, height:'auto'}}/></div>

在圆形显示屏的设计中，我们使用XIAO上的**A0/D0**引脚连接到板载电池的电路。可以通过读取此引脚的模拟值来获取剩余电池电量。

#### SD卡电路引脚

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/67.png" style={{width:800, height:'auto'}}/></div>

SD卡部分使用XIAO上的四个IO端口，使用情况如下表所示。

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">XIAO GPIO</th>
            <th align="center">microSD卡槽</th>
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

#### RTC 电路引脚

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/68.png" style={{width:500, height:'auto'}}/></div>

RTC 功能使用 IIC 协议，因此占用 **D5 (SCL)** 和 **D4 (SDA)** 引脚。

#### 触摸屏电路引脚

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/69.png" style={{width:400, height:'auto'}}/></div>

触摸屏部分使用 XIAO 上的四个 IO 端口，使用方式如下表所示。

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


## Round Display 库概述

Round Display 的绝大部分软件开发都基于 XIAO 自身的硬件支持。图形基于 TFT 库、LVGL 库和 Arduino GFX 库。

为了方便用户使用 Round Display 上的功能，我们编写了一个单独的库，主要调用上述库的接口，以降低用户在后期阶段进行独立开发时的门槛。在本章中，我们将重点介绍我为 Round Display 准备的这些库有哪些功能以及如何分别使用它们。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

### lv_xiao_round_screen.h

`lv_xiao_round_screen.h` 文件是 Round Display 库中的头文件，用于驱动屏幕的显示和触摸功能。

文件开头进行了宏定义检查，旨在要求使用 Round Display 的开发者在绘制屏幕图案时需要选择您想要开发的图形库。有两个选择：**TFT** 和 **Arduino GFX**。如果您选择 **TFT** 库，那么它就是可以支持 **LVGL** 的库。

```cpp
#if defined(USE_TFT_ESPI_LIBRARY) && defined(USE_ARDUINO_GFX_LIBRARY)
#error "More than one graphics library is defined."
#elif defined(USE_TFT_ESPI_LIBRARY)
#include <TFT_eSPI.h>
TFT_eSPI tft = TFT_eSPI(SCREEN_WIDTH, SCREEN_HEIGHT);
#elif defined(USE_ARDUINO_GFX_LIBRARY)
#include <Arduino_GFX_Library.h>
```

这种设计的原因是某些 XIAO 在不同图形库上绘制图案时具有各自的优势。例如，如果您使用的是 XIAO nRF52840，那么使用 Arduino GFX 库可能会更节省内存且更稳定。对于 XIAO ESP32S3，这款大内存的 XIAO 在处理 LVGL 等图形库方面具有天然优势，也能够绘制更复杂的图案和 UI。

因此，如果您需要使用 Round Display 绘制图案，请不要忘记选择您想要使用的图形库，并在 Arduino 程序的开头定义它。

- 如果您想使用 TFT 库或 LVGL 库：

```cpp
#define USE_TFT_ESPI_LIBRARY
```

- 如果你想使用 Arduino GFX 库：

```cpp
#define USE_ARDUINO_GFX_LIBRARY
```

1. `void xiao_disp_init(void)`: 此函数用于初始化显示屏背光并将显示屏旋转到初始位置，设备显示屏背板颜色为纯黑色。此函数通常不单独使用，需要初始化时使用 `lv_xiao_disp_init()` 函数。

2. `void lv_xiao_disp_init(void)`: 初始化背光，并初始化显示驱动程序。通常用于显示屏初始化。

3. `bool chsc6x_is_pressed(void)`: 此函数用于检查屏幕是否被触摸，如果屏幕被触摸则返回 `Ture`。

4. `void lv_xiao_touch_init(void)`: 此函数用于初始化触摸屏及其驱动程序。

5. `void chsc6x_read( lv_indev_drv_t * indev_driver, lv_indev_data_t * data )`: 此函数用于获取触摸屏的坐标点。


### lv_hardware_test.h

`lv_hardware_test.h` 文件是 Round Display 库中示例 **HardwareTest** 的头文件。此头文件为 Round Display 准备了大部分硬件使用功能。

如果您想使用此头文件中的功能，可以直接将该文件复制到您的 Arduino 文件的同一文件目录中。

1. `int32_t battery_level_percent(void)`: 通过调用此函数，您可以读取并计算电池电量百分比，以在应用程序中显示电池电量。

2. `void lv_hardware_test(void)`: 此函数用于测试所有硬件功能，包括屏幕显示、屏幕触摸、RTC 时钟和电池电量。您可以参考此函数的编写方法来完成您想要的 Round Display 功能开发。

## KE 按钮 & GPIO

在新版本的 Round Display 上，我们设计了一个 KE 开关来选择性地释放某些 GPIO，供用户选择性使用。

KE 开关设计在 microSD 卡槽和连接到 XIAO 的引脚排的中间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/90.jpg" style={{width:400, height:'auto'}}/></div>

此开关的电路设计如下所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/91.png" style={{width:400, height:'auto'}}/></div>

这意味着当开关闭合时 **（切换到 ON 侧）**，Round Display 的电池电压读取功能和显示屏背光功能变为可用。

当开关断开时 **（切换到数字侧）**，XIAO 上的引脚 A0 和 D6 处于可用状态。


## 测量电池电压

由于 XIAO 上缺少 IO 引脚，大多数 XIAO 无法测量电池电压，尽管在某些 XIAO 上配置了电源管理芯片以允许外部电池。

但如果您选择使用 Round Display 并通过屏幕为 XIAO 供电，那么测量电池电压将成为现实。

以下是测量电池电压的示例程序。函数 `battery_level_percent()` 选自 `lv_hardware_test.h` 文件。

```cpp
#define NUM_ADC_SAMPLE 20           // 采样频率
#define RP2040_VREF 3300            // 当您使用 XIAO RP2040 时，您需要测量 3.3V 引脚的实际电压并修改该值。（单位：mV）
#define BATTERY_DEFICIT_VOL 1850    // 电池电量耗尽时的电压值
#define BATTERY_FULL_VOL 2450       // 电池满电时的电压值

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
  // 在这里放置您的设置代码，只运行一次：
  Serial.begin(115200);
  while(!Serial);

  analogReadResolution(12);
}

void loop() {
  // 在这里放置您的主代码，重复运行：
  int32_t batteryVal = battery_level_percent();
  Serial.print("剩余电量百分比为：");
  Serial.print(batteryVal);
  Serial.print(" %");
  Serial.println();
  delay(1000);
}
```

:::tip
此程序不是通用程序，测量的电池百分比可能不准确。这是因为每个人使用的电池、芯片和开发板都不同，所以在执行此程序时，您可能需要根据实际情况修改程序。修改方法请参考本节的[程序注释](#program-annotation)部分。
:::


选择您正在使用的 XIAO 开发板，上传程序，打开串口监视器，并将波特率设置为 **115200**。如果您已连接电池并通电，您应该能够在串口监视器中看到电池电压。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/80.png" style={{width:700, height:'auto'}}/></div>

### 程序注释

此代码使用 ADC 测量电池电压并计算电池电量百分比。实现方式因硬件平台而异：

- 对于 ESP32-S3 和 ESP32-C3 平台，使用 `analogReadMilliVolts` 函数读取模拟电压值，然后取多个采样的平均值来获得平均电池电压。
- 对于 Seeeduino XIAO NRF52840 平台，首先使用 `analogReference` 函数将参考电压指定为 2.4V，然后使用 analogRead 函数读取模拟电压值，并计算平均电池电压。
- 对于 Seeeduino XIAO RP2040 平台，使用 `analogRead` 函数读取模拟电压值，并计算平均电池电压。

在任何情况下，都会计算平均电池电压，然后使用公式 `(mvolts - BATTERY_DEFICIT_VOL) * 100 / (BATTERY_FULL_VOL - BATTERY_DEFICIT_VOL)` 计算电池电量百分比，其中 mvolts 是平均电池电压，`BATTERY_DEFICIT_VOL` 是电池的最低工作电压，`BATTERY_FULL_VOL` 是电池的最大电压。最后，代码限制电池电量百分比以确保其在 0 到 100 之间。

总之，使用此程序时，以下参数决定了电压测量的准确性。

```c
#define RP2040_VREF 3300            // 当您使用 XIAO RP2040 时，您需要测量 3.3V 引脚的实际电压并修改该值。（单位：mV）
#define BATTERY_DEFICIT_VOL 1850    // 电池电量耗尽时的电压值
#define BATTERY_FULL_VOL 2450       // 电池满电时的电压值
```

您需要做的第一件事是获取您购买的电池在电量不足/满电状态下的模拟值。

您可以使用此函数获取电池的模拟值。您需要在电池满电和电量不足状态下各获取一次数值。

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

:::tip
`battery_test()` 函数实际上是 `battery_level_percent()` 函数，只是移除了最后两行计算百分比的代码。
:::

然后只需修改程序中对应的值为你测量的值。

如果你使用的是 **XIAO RP2040**，那么你需要额外执行一个步骤，即使用万用表测量 XIAO RP2040 的 3.3V 引脚上的实际电压。将测量的电压值转换为 **mV** 单位，并修改相应的程序。

例如，以下是我使用 XIAO RP2040 和电池进行实际测量的结果。

```c
#define RP2040_VREF 3080
#define BATTERY_DEFICIT_VOL 1541
#define BATTERY_FULL_VOL 1791
```

## RTC 功能

RTC 功能部分，我们主要分为以下四个部分来介绍其应用。
1. 首先是针对没有网络功能的 XIAO，您可以通过手动设置初始时间来校正 RTC。
2. 然后通过纽扣电池为 RTC 供电，以持续获得准确的时间。
3. 对于具有网络功能的 XIAO，您可以使用网络功能来校正时间。
4. 结合 RTC 功能绘制一个简单的时钟表盘。

### 离线手动校准 RTC

以下是手动校准 RTC 时间的示例程序。设置放在 `Setup()` 函数中，以确保设置程序只执行一次。此程序是为没有网络功能的 XIAO 设置初始 RTC 时间的最有效方法。

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

上传程序并打开串口监视器后，RTC 时间将开始校准。当出现 **RTC time calibration complete!** 时，校准完成。

### 获取 RTC 时间

以下程序每秒获取一次 RTC 的时间并在串口监视器中打印出来。

:::tip
获取 RTC 时间的程序可以在上述手动校准程序之后使用。时间校准程序只需要执行一次，RTC 时钟将能够在纽扣电池的供电下持续工作，之后您只需要使用获取时间的程序来获得准确时间。

我们不建议将校准时间和获取时间的程序一起使用，这样当 XIAO 上电时，两者都会根据您配置的时间重置一次，那么您将永远无法获得准确的时间。
:::

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


### 网络校准 RTC 时间

对于具有网络功能的 XIAO，事情似乎变得容易得多。有了网络，您甚至不需要使用纽扣电池来保持 RTC 开箱即用，您只需要在每次上电时进行网络授时即可。

以下是网络授时并在串口监视器上输出 RTC 时间读数的示例程序。

:::caution
此程序仅适用于 XIAO ESP32 系列。因为只有这个系列具有网络功能。
:::

```cpp
#include "I2C_BM8563.h"
#include <WiFi.h>

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

const char* ntpServer = "time.cloudflare.com";
const char *ssid     = "YOUR_SSID";
const char *password = "YOUR_PASSWORD";

void setup() {
  // 初始化串口
  Serial.begin(115200);
  delay(50);

  // 连接到接入点
  WiFi.begin(ssid, password);
  Serial.print("正在连接到 Wi-Fi ");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println(" 已连接");

  // 设置 ntp 时间为本地时间
  configTime(9 * 3600, 0, ntpServer);

  // 初始化 I2C
  Wire.begin();

  // 初始化 RTC
  rtc.begin();

  // 获取本地时间
  struct tm timeInfo;
  if (getLocalTime(&timeInfo)) {
    // 设置 RTC 时间
    I2C_BM8563_TimeTypeDef timeStruct;
    timeStruct.hours   = timeInfo.tm_hour;
    timeStruct.minutes = timeInfo.tm_min;
    timeStruct.seconds = timeInfo.tm_sec;
    rtc.setTime(&timeStruct);

    // 设置 RTC 日期
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

  // 获取 RTC
  rtc.getDate(&dateStruct);
  rtc.getTime(&timeStruct);

  // 打印 RTC
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

  // 等待
  delay(1000);
}
```

当您使用此程序时，请根据您的实际情况填写网络名称和密码。上传程序后，打开串口监视器并将波特率设置为115200，然后您就可以看到准确的时间。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/72.png" style={{width:700, height:'auto'}}/></div>


### 基于RTC时间的简单表盘

以下程序是基于RTC时钟绘制的表盘程序。

:::caution
以下程序仅兼容除XIAO nRF52840之外的XIAO。XIAO nRF52840目前在TFT兼容性方面存在问题。但您可以考虑使用Arduino GFX库或LVGL来绘制表盘。
:::

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
#error "此程序不适用于XIAO nRF52840系列，请更换其他XIAO并重试。"
#endif


//TFT_eSPI tft = TFT_eSPI();  // 调用库，引脚在User_Setup.h中定义
TFT_eSprite face = TFT_eSprite(&tft);

#define CLOCK_X_POS 0
#define CLOCK_Y_POS 0

#define CLOCK_FG   TFT_SKYBLUE
#define CLOCK_BG   TFT_NAVY
#define SECCOND_FG TFT_RED
#define LABEL_FG   TFT_GOLD

#define CLOCK_R       240.0f / 2.0f // 时钟表面半径（浮点类型）
#define H_HAND_LENGTH CLOCK_R/2.0f
#define M_HAND_LENGTH CLOCK_R/1.4f
#define S_HAND_LENGTH CLOCK_R/1.3f

// 计算1秒增量角度。时针和分针角度
// 每秒都会改变，所以我们可以看到平滑的亚像素移动
#define SECOND_ANGLE 360.0 / 60.0
#define MINUTE_ANGLE SECOND_ANGLE / 60.0
#define HOUR_ANGLE   MINUTE_ANGLE / 12.0

// 精灵宽度和高度
#define FACE_W CLOCK_R * 2 + 1
#define FACE_H CLOCK_R * 2 + 1

// 时间 h:m:s
uint8_t h = 0, m = 0, s = 0;

float time_secs = h * 3600 + m * 60 + s;

// 下次刷新的时间
uint32_t targetTime = 0;

// =========================================================================
// 设置
// =========================================================================
void setup() {
  Serial.begin(115200);
  Serial.println("启动中...");

  // 初始化屏幕
  tft.init();

  // 理想情况下设置方向以获得良好的视角范围，因为
  // 抗锯齿效果随屏幕视角而变化
  // 通常这是当屏幕排线连接器在底部时
  tft.setRotation(0);
  tft.fillScreen(TFT_BLACK);

  // 创建时钟表面精灵
  //face.setColorDepth(8); // 8位可以工作，但会降低抗锯齿的效果
  face.createSprite(FACE_W, FACE_H);

  // 绘制整个时钟 - NTP时间尚不可用
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

// 对于XIAO ESP32系列，使用网络时间。
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  struct tm timeInfo;
  if (getLocalTime(&timeInfo)) {
    timeStruct.hours   = timeInfo.tm_hour;
    timeStruct.minutes = timeInfo.tm_min;
    timeStruct.seconds = timeInfo.tm_sec;
    rtc.setTime(&timeStruct);
  }
#else
  // 设置RTC时间，其他XIAO没有网络功能，需要手动对时。
  // 请注意，设置时间应该只设置一次。
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
// 循环
// =========================================================================
void loop() {
  // 定期更新时间
  if (targetTime < millis()) {

    // 在100毫秒内更新下次刷新时间以实现平滑移动
    targetTime = millis() + 100;

    // 时间增加100毫秒
    time_secs += 0.100;

    // 午夜翻转
    if (time_secs >= (60 * 60 * 24)) time_secs = 0;

    // 所有图形都在精灵中绘制以防止闪烁
    renderFace(time_secs);

    I2C_BM8563_DateTypeDef dateStruct;
    I2C_BM8563_TimeTypeDef timeStruct;

    // 获取RTC
    rtc.getTime(&timeStruct);
  
    // 打印RTC
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
// 在精灵中绘制时钟表面
// =========================================================================
static void renderFace(float t) {
  float h_angle = t * HOUR_ANGLE;
  float m_angle = t * MINUTE_ANGLE;
  float s_angle = t * SECOND_ANGLE;

  // 表面完全重绘 - 这可以快速完成
  face.fillSprite(TFT_BLACK);

  // 绘制表面圆圈
  face.fillSmoothCircle( CLOCK_R, CLOCK_R, CLOCK_R, CLOCK_BG );

  // 设置文本基准为中心并设置颜色
  face.setTextDatum(MC_DATUM);

  // 在字符渲染期间将读取背景颜色
  face.setTextColor(CLOCK_FG, CLOCK_BG);

  // 文本偏移调整
  constexpr uint32_t dialOffset = CLOCK_R - 10;

  float xp = 0.0, yp = 0.0; // 使用浮点像素位置实现平滑AA运动

  // 在时钟周围绘制数字
  for (uint32_t h = 1; h <= 12; h++) {
    getCoord(CLOCK_R, CLOCK_R, &xp, &yp, dialOffset, h * 360.0 / 12);
    face.drawNumber(h, xp, 2 + yp);
  }

  // 添加文本（可以是数字时间...）
  face.setTextColor(LABEL_FG, CLOCK_BG);
  face.drawString("TFT_eSPI", CLOCK_R, CLOCK_R * 0.75);

  // 绘制分针
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, M_HAND_LENGTH, m_angle);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 6.0f, CLOCK_FG);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 2.0f, CLOCK_BG);

  // 绘制时针
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, H_HAND_LENGTH, h_angle);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 6.0f, CLOCK_FG);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 2.0f, CLOCK_BG);

  // 绘制中心枢轴圆圈
  face.fillSmoothCircle(CLOCK_R, CLOCK_R, 4, CLOCK_FG);

  // 绘制秒针
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, S_HAND_LENGTH, s_angle);
  face.drawWedgeLine(CLOCK_R, CLOCK_R, xp, yp, 2.5, 1.0, SECCOND_FG);
  face.pushSprite(0, 0, TFT_TRANSPARENT);
}

// =========================================================================
// 获取线条末端的坐标，以x,y为枢轴，长度r，角度a
// =========================================================================
// 坐标通过xp和yp指针返回给调用者
#define DEG2RAD 0.0174532925
void getCoord(int16_t x, int16_t y, float *xp, float *yp, int16_t r, float a)
{
  float sx1 = cos( (a - 90) * DEG2RAD);
  float sy1 = sin( (a - 90) * DEG2RAD);
  *xp =  sx1 * r + x;
  *yp =  sy1 * r + y;
}
```

上述代码需要根据您使用的开发板类型进行一些小的修改。如果您使用的是具有网络功能的 XIAO，您需要配置 WiFi 名称和密码。如果没有，您需要手动调整实时时间。

上传程序后，您将看到表盘根据设定的时间自动运行。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/75.gif" style={{width:500, height:'auto'}}/></div>

## SD 卡功能

Round Display 支持使用 microSD 卡来读写数据。在使用 microSD 卡之前，请将 microSD 卡格式化为 **FAT32** 格式，以确保它能够被正确识别和使用。

### 所有 XIAO 系列（除了 XIAO nRF52840 系列）

本节适用于所有 XIAO（除了 XIAO nRF52840 系列），这是一个用于读写文件的简单程序。

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

这个程序将在您的microSD卡上创建一个名为**test.txt**的新程序，并写入**testing 1, 2, 3.**的内容。最后，它读取文件并通过串口监视器打印出文件的内容。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/83.png" style={{width:700, height:'auto'}}/></div>

:::caution
您会发现程序中使用了屏幕TFT初始化来配合SD卡使用。请不要认为这是无用的可以删除，但实际上使用SD卡是必需的，否则您会收到microSD卡挂载失败的错误消息。

由于硬件设计，一些引脚默认为低电平，这会导致microSD挂载程序认为没有上拉电阻从而导致挂载失败。因此，在Round Display上使用SD卡功能时，请确保在初始化SD卡之前先初始化屏幕显示。
:::

### XIAO nRF52840

如果您使用的是XIAO nRF52840系列，那么您可能需要单独下载[SdFat库](https://github.com/greiman/SdFat)才能使用SD卡功能。

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

### XIAO ESP32S3 & XIAO ESP32S3 Sense & XIAO ESP32C3

由于ESP32系列具有非常强大的文件系统支持，我们为XIAO ESP32编写了一系列关于如何使用文件系统和保存microSD卡的示例，您可以通过以下链接学习使用。

- **[文件系统和XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/cn/xiao_esp32s3_sense_filesystem)**

本Wiki中的教程适用于XIAO ESP32系列，但由于您现在想要使用Round Display的SD卡插槽，而上述教程专注于使用XIAO ESP32S3 Sense上的SD卡插槽，您需要将SD卡的初始化修改为以下代码行。

```c
// Display initialization
tft.init();

pinMode(D2, OUTPUT);
SD.begin(D2);
```

:::tip
不要忘记，您还需要先初始化TFT屏幕才能使用SD卡功能。
:::

## 屏幕功能

在屏幕的使用部分，主要分为触摸和显示两个组件。

### 触摸功能

触摸功能是Round Display的特殊功能。您可以使用触摸功能来执行一些点击和长按显示操作。

以下程序可用于输出显示屏是否被触摸的结果。

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

以下程序是触摸功能与显示功能结合的简单示例。上传以下程序，然后点击屏幕，将在屏幕被点击的位置绘制一个小圆圈。

:::caution
如果您使用的是 XIAO nRF52840，那么以下基于 TFT 库显示的程序可能无法正常工作，您需要修改程序以使用 Arduino GFX 库。
:::

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

关于显示部分，我们主要介绍 LVGL 库和 TFT 库的使用。由于篇幅问题，我们将在新的 Wiki 中详细介绍如何使用支持的图形库绘制复杂的表盘。

[在 Seeed Studio Round Display for XIAO 上使用 LVGL 和 TFT](https://wiki.seeedstudio.com/cn/using_lvgl_and_tft_on_round_display)

当然，如果您只想实现一些简单的示例，图形库也有非常丰富的示例供您参考使用。

- [TFT 库示例](https://github.com/Bodmer/TFT_eSPI/tree/master/examples)

- [Arduino GFX 库示例](https://github.com/moononournation/Arduino_GFX/tree/master/examples)

- [LVGL 库示例](https://github.com/lvgl/lvgl/tree/master/examples)

如果您已经安装了这些库，您可以在 Arduino IDE 的 **文件->示例->库名称** 中轻松找到示例。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/82.png" style={{width:800, height:'auto'}}/></div>

:::tip
这里的示例仅供参考，并非每个示例都一定能正常工作。您可能需要修改程序以兼容圆形显示屏的引脚分配和硬件定义。
:::


## 技术支持与产品讨论

### Q1：为什么我使用 XIAO nRF52840 (Sense) 时会出现错误？

在使用本教程内容时，XIAO nRF52840 可能会出现两种不同类型的问题。

1. nRF52840 与 TFT 库之间的兼容性问题。

  如果您使用的是 TFT 库，编译和上传没有任何错误，非常顺利。但是当您显示时，发现没有图像。那么您可能遇到了 nRF52840 与 TFT 库之间的兼容性问题。这意味着您只能更换 XIAO 或使用 Arduino GFX 库来完成图像显示。

2. 选择错误的开发板导致的编译错误。

如果您在编译过程中遇到问题。错误消息通常是关于 SPI 错误，例如 `'SPI_X' was not declared in this scope`。那么这意味着您选择了错误类型的开发板。要使用本教程的所有内容，您需要使用 XIAO nRF52840 的 **非 mbed** 版本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/73.png" style={{width:700, height:'auto'}}/></div>

### Q2：为 XIAO RP2040 上传程序时出现错误：unaligned opcodes detected in executable segment？

请根据下图中的设置修改 XIAO RP2040 的上传选项。除了默认的 **Small (-Os) (standard)** 之外，所有选项都可以正常工作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/74.png" style={{width:600, height:'auto'}}/></div>

### Q3：为什么我为 XIAO SAMD21 编译圆形屏幕程序时会出现引脚定义错误？

当您遇到此错误时，请将您的 **Seeed SAMD** 开发板板载包更新到最新版本。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/76.png" style={{width:700, height:'auto'}}/></div>

### Q4：为什么我将程序上传到 XIAO ESP32C3 后屏幕不显示？

如果程序没有问题但上传后不显示，可能是需要重置。只需按下 XIAO ESP32C3 上的重置按钮即可。


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