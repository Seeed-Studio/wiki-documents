---
description: FreeRTOS with Wio Terminal
title:  Wio Terminal上的FreeRTOS
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Software-FreeRTOS
last_update:
  date: 3/06/2024
  author: jessie
---

# 如何在Arduino中使用FreeRTOS进行多任务处理

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/FreeRTOS/full.gif"/></div>

## 什么是 RTOS

如今嵌入式系统中最重要的组成部分之一是 **RTOS**  **（实时操作系统）**, 它负责从任务调度到执行应用程序的一切。

**RTOS** 旨在提供可预测的执行模式。当处理必须满足系统的时间限制时，使用RTOS。因此，与通用操作系统（GPOS）相比，RTOS通常轻量且体积小，通常仅提供特定类型应用程序在特定硬件上运行所需的功能。在某些情况下，开发人员可以修改现有的RTOS，将其缩小为仅提供特定应用程序所需的功能，并/或自定义其功能或性能特征。

##  RTOS 工作原理

 **内核** 是操作系统的核心组件。像Linux这样的操作系统使用内核，允许用户同时访问计算机。每个正在执行的程序都是操作系统控制下的任务（或线程）。如果操作系统能够以这种方式执行多个任务, 就可以说它是 **多任务处理**。

- **多任务处理**

传统处理器一次只能执行 **一个任务** ，但是多任务处理操作系统可以通过快速在任务之间进行切换来使每个任务看起来同时执行。下图显示了三个任务的执行模式与时间的关系

<div align="center"><img src="https://files.seeedstudio.com/wiki/FreeRTOS/TaskExecution.gif"/></div>

- **调度**

**调度器** 是内核的一部分，负责在任何特定时间决定执行哪个任务。内核可以在任务的生命周期中多次暂停和恢复任务。

**调度策略** 调度器用于决定任何时刻执行哪个任务的算法。非实时多用户系统策略可能会为每个任务提供“公平”的处理器时间份额。

除了被内核强制暂停之外，任务还可以选择自行暂停。如果它想要 **延迟（睡眠）** 一段时间，或者 **等待（阻塞）** 某个资源可用（例如串口）或事件（例如按键按下），它会这样做。

<div align="center"><img src="https://files.seeedstudio.com/wiki/FreeRTOS/suspending.gif"/></div>

*参考: [**FreeRTOS Fundamentals**](https://www.freertos.org/implementation/a00002.html)*

## 什么是 FreeRTOS

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/FreeRTOS/FreeRTOS-logo.png"/></div>

[**FreeRTOS**](https://www.freertos.org/) 是一种设计成足够小以在微控制器上运行的RTOS类别，尽管它的使用不限于微控制器应用。FreeRTOS包括一个内核和一个适用于各行业和应用程序的不断增长的软件库集合。借助FreeRTOS的帮助，您可以在基于微控制器的硬件上进行多任务处理！

**为了与Arduino兼容**, 我们将FreeRTOS移植到了Arduino框架中，以便您能够轻松地在喜爱的Arduino板上使用FreeRTOS！

:::注
2017年, [Amazon](https://aws.amazon.com/freertos/) 接管了FreeRTOS的管理权，使其在嵌入式领域更加可靠和安全。
:::

## 在Arduino中快速开始使用FreeRTOS

### 安装FreeRTOS Arduino库

1. 访问 [**Seeed_Arduino_FreeRTOS**](https://github.com/Seeed-Studio/Seeed_Arduino_FreeRTOS) 存储库，并将整个存储库下载到本地驱动器上。

2. 现在，可以将Seeed_Arduino_FreeRTOS库安装到Arduino IDE中。打开Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`, 选择刚刚下载的 `Seeed_Arduino_FreeRTOS` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

:::注
该库将最新的FreeRTOS（10.2.1）移植过来，并允许您在Arduino IDE中创建FreeRTOS项目。
:::

### 支持的开发板

[**Seeed_Arduino_FreeRTOS**](https://github.com/Seeed-Studio/Seeed_Arduino_FreeRTOS) 支持 Seeed 的所有 SAMD 开发板：

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- Seeeduino Zero 系列:
  - [Seeeduino Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)
  - [Seeeduino Lotus Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)
  - [Wio Lite W600 - ATSAMD21 Cortex-M0 无线开发板](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
  - [Wio Lite MG126 - ATSAMD21 Cortex-M0 蓝牙无线开发板](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- [Seeeduino LoRaWAN](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html)

## FreeRTOS Arduino 示例

FreeRTOS 提供了微控制器的  **实时调度功能,任务间通信,定时和同步原语**等功能，非常强大

为了帮助您轻松入门 FreeRTOS，这里提供一些示例供参考。以下示例是在 Wio Terminal 上构建和运行的。

### Hello World 示例

这个示例简单地创建了 **两个线程** 以不同的速率向串口监视器打印不同的 `字符串` 。

<div align="center"><img src="https://files.seeedstudio.com/wiki/FreeRTOS/helloworld.png"/></div>

```cpp
#include <Seeed_Arduino_FreeRTOS.h>

TaskHandle_t Handle_aTask;
TaskHandle_t Handle_bTask;

static void ThreadA(void* pvParameters) {
    Serial.println("Thread A: Started");

    while (1) {
        Serial.println("Hello World!");
        delay(1000);
    }
}

static void ThreadB(void* pvParameters) {
    Serial.println("Thread B: Started");

    for (int i = 0; i < 10; i++) {
        Serial.println("---This is Thread B---");
        delay(2000);
    }
    Serial.println("Thread B: Deleting");
    vTaskDelete(NULL);
}

void setup() {

    Serial.begin(115200);

    vNopDelayMS(1000); // prevents usb driver crash on startup, do not omit this
    while(!Serial);  // Wait for Serial terminal to open port before starting program

    Serial.println("");
    Serial.println("******************************");
    Serial.println("        Program start         ");
    Serial.println("******************************");

    // Create the threads that will be managed by the rtos
    // Sets the stack size and priority of each task
    // Also initializes a handler pointer to each task, which are important to communicate with and retrieve info from tasks
    xTaskCreate(ThreadA,     "Task A",       256, NULL, tskIDLE_PRIORITY + 2, &Handle_aTask);
    xTaskCreate(ThreadB,     "Task B",       256, NULL, tskIDLE_PRIORITY + 1, &Handle_bTask);

    // Start the RTOS, this function will never return and will schedule the tasks.
    vTaskStartScheduler();
}

void loop() {
    // NOTHING
}
```

### Blink 示例

这个示例也创建了两个线程，并输出信号以点亮 LED。其中一个线程是简单地闪烁 LED，另一个线程是呼吸灯效果。

:::注
        确保呼吸灯连接在 PWM 引脚上。
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/FreeRTOS/Blink.gif"/></div>

```cpp
#include <Seeed_Arduino_FreeRTOS.h>

#define LEDPIN_1 PIN_WIRE_SCL // Left side of Grove Port of Wio Terminal
#define LEDPIN_2 D0 // Right side of Grove Port of Wio Terminal

TaskHandle_t Handle_aTask;
TaskHandle_t Handle_bTask;

// Blinking LED
static void LED_1(void* pvParameters) {
    while (1) {
        digitalWrite(LEDPIN_1, HIGH);
        delay(1000);
        digitalWrite(LEDPIN_1, LOW);
        delay(1000);
    }
}

// Breathing LED
static void LED_2(void* pvParameters) {
    int cnt = 5;
    while (1) {
        for (byte value = 0 ; value < 255; value+=cnt) {
            analogWrite(LEDPIN_2, value);
            delay(20);
        }
        delay(200);
        for (byte value = 255 ; value > 0; value-=cnt) {
            analogWrite(LEDPIN_2, value);
            delay(20);
        }
    }
}

void setup() {
    Serial.begin(115200);

    vNopDelayMS(1000); // prevents usb driver crash on startup, do not omit this
//    while(!Serial);  // Wait for serial terminal to open port before starting program

    pinMode(LEDPIN_1, OUTPUT);
    pinMode(LEDPIN_2, OUTPUT);

    xTaskCreate(LED_1,     "Task A",       256, NULL, tskIDLE_PRIORITY + 2, &Handle_aTask);
    xTaskCreate(LED_2,     "Task B",       256, NULL, tskIDLE_PRIORITY + 1, &Handle_bTask);

    // Start the RTOS, this function will never return and will schedule the tasks.
    vTaskStartScheduler();
}

void loop() {

}
```

### LCD 示例

这个示例演示了 FreeRTOS 与 Wio Terminal 中的其他 Arduino 库的结合，如 LCD Sprites。这个示例创建了两个线程中的两个精灵，以相反的方式计数。 `taskMonitor` 是一个用于监视线程并打印每个线程的堆栈信息的函数。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/FreeRTOS/FreeRTOS-LCD.gif"/></div>

```cpp
#include <Seeed_Arduino_FreeRTOS.h>
#include <TFT_eSPI.h>

TaskHandle_t Handle_aTask;
TaskHandle_t Handle_bTask;
TaskHandle_t Handle_monitorTask;

TFT_eSPI tft = TFT_eSPI();
TFT_eSprite img = TFT_eSprite(&tft);
TFT_eSprite img2 = TFT_eSprite(&tft);

static void LCD_TASK_1 (void* pvParameters) {
    Serial.println("Thread A: Started");
    img.createSprite(100, 100);
    img.fillSprite(tft.color565(229,58,64)); // RED
    img.setTextSize(8);
    img.setTextColor(TFT_WHITE);
    for(int i = 0; i < 100; i++) {
        img.drawNumber(i, 10, 25);
        img.pushSprite(30, 70);
        img.fillSprite(tft.color565(229,58,64));
        delay(1000);
        if(i== 99) i = 0;
    }
}

static void LCD_TASK_2 (void* pvParameters) {
    Serial.println("Thread B: Started");
    img2.createSprite(100, 100);
    img2.fillSprite(tft.color565(48,179,222)); // BLUE
    img2.setTextSize(8);
    img2.setTextColor(TFT_WHITE);
    for(int x = 99; x >= 0; x--) {
        img2.drawNumber(x, 10, 25);
        img2.pushSprite(190, 70);
        img2.fillSprite(tft.color565(48,179,222));
        delay(500);
        if(x== 0) x = 99;
    }
}

void taskMonitor(void* pvParameters) {
    int x;
    int measurement;

    Serial.println("Task Monitor: Started");

    // run this task a few times before exiting forever
    for (x = 0; x < 10; ++x) {

        Serial.println("");
        Serial.println("******************************");
        Serial.println("[Stacks Free Bytes Remaining] ");

        measurement = uxTaskGetStackHighWaterMark(Handle_aTask);
        Serial.print("Thread A: ");
        Serial.println(measurement);

        measurement = uxTaskGetStackHighWaterMark(Handle_bTask);
        Serial.print("Thread B: ");
        Serial.println(measurement);

        measurement = uxTaskGetStackHighWaterMark(Handle_monitorTask);
        Serial.print("Monitor Stack: ");
        Serial.println(measurement);

        Serial.println("******************************");

        delay(10000); // print every 10 seconds
    }

    // delete ourselves.
    // Have to call this or the system crashes when you reach the end bracket and then get scheduled.
    Serial.println("Task Monitor: Deleting");
    vTaskDelete(NULL);
}

void setup() {

    Serial.begin(115200);

    vNopDelayMS(1000); // prevents usb driver crash on startup, do not omit this
    while (!Serial) ;  // Wait for Serial terminal to open port before starting program

    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(tft.color565(9,7,7)); // BLACK background
    tft.setTextColor(tft.color565(239,220,5)); // YELLOW text
    tft.setTextSize(2);
    tft.drawString("Thread A", 30, 50);
    tft.drawString("Thread B", 190, 50);

    Serial.println("");
    Serial.println("******************************");
    Serial.println("        Program start         ");
    Serial.println("******************************");

    // Create the threads that will be managed by the rtos
    // Sets the stack size and priority of each task
    // Also initializes a handler pointer to each task, which are important to communicate with and retrieve info from tasks
    xTaskCreate(LCD_TASK_1,     "Task A",       256, NULL, tskIDLE_PRIORITY + 3, &Handle_aTask);
    xTaskCreate(LCD_TASK_2,     "Task B",       256, NULL, tskIDLE_PRIORITY + 2, &Handle_bTask);
    xTaskCreate(taskMonitor, "Task Monitor",    128, NULL, tskIDLE_PRIORITY + 1, &Handle_monitorTask);

    // Start the RTOS, this function will never return and will schedule the tasks.
    vTaskStartScheduler();
}

void loop() {
    //NOTHING
}
```

## 用于 Arduino 的 Cpp FreeRTOS

除此之外，我们还提供了 [**Seeed_Arduino_ooFreeRTOS**](https://github.com/Seeed-Studio/Seeed_Arduino_ooFreeRTOS), 它是 **一个在 Arduino 框架下工作的封装了 FreeRTOS 功能的 C++ 包装库集合。**

### 安装 FreeRTOS Cpp Arduino 库

1. 访问 [**Seeed_Arduino_ooFreeRTOS**](https://github.com/Seeed-Studio/Seeed_Arduino_ooFreeRTOS) 仓库，并将整个仓库下载到您的本地驱动器上。

2. 现在，可以将 Seeed_Arduino_ooFreeRTOS 库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`, 选择刚刚下载的  `Seeed_Arduino_ooFreeRTOS` 文件。

### Cpp 中的 Blink 示例

```cpp
#include <Seeed_Arduino_ooFreeRTOS.h>
#include "thread.hpp"
#include "ticks.hpp"

using namespace cpp_freertos;

class BlinkThread : public Thread {
  
public:
  
  BlinkThread(int i, int delayInSeconds)
    : Thread( 256, 1), 
      Id (i), 
      DelayInSeconds(delayInSeconds)
  {
    Start();
  };
  
protected:

  virtual void Run() {
    while (true) {
      Serial.printf("Blink Therad: %d\n\r", Id);
      digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
      Delay(Ticks::SecondsToTicks(DelayInSeconds));
      digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
      Delay(Ticks::SecondsToTicks(DelayInSeconds));      
    }
  };

private:
  int Id;
  int DelayInSeconds;
};



void setup (void)
{
  
  // start up the serial interface
  Serial.begin(115200);
  Serial.println("Testing FreeRTOS C++ wrappers");
  Serial.println("Simple Tasks");

  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
  
  static BlinkThread p1(1, 3);
  static BlinkThread p2(2, 5);

  Thread::StartScheduler();
  
  //
  //  We shouldn't ever get here unless someone calls 
  //  Thread::EndScheduler()
  //  
  Serial.println("Scheduler ended!");

}

void loop()
{
  // Empty. Things are done in Tasks.
}

```

## 参考资料

- [官方 FreeRTOS 入门指南](https://www.freertos.org/FreeRTOS-quick-start-guide.html)
