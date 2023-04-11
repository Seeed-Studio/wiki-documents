---
description: FreeRTOS for Arduino Boards
title:  FreeRTOS for Arduino Boards
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Software-FreeRTOS
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# Arduino FreeRTOS Tutorial - How to use FreeRTOS to Multi-tasking in Arduino

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/FreeRTOS/full.gif"/></div>

## What is RTOS

One of the most important components of today's embedded systems is the **RTOS** also known as **Real-Time Operating System**, which is responsible for everything from task scheduling to performing applications.

**RTOS** is designed to provide a predictable execution mode. When the processing must meet the time limit of the system, RTOS is used. Therefore, compared with GPOS (General Purpose Operating System), RTOS is usually light in weight and small in size, and generally only provides functions required to run specific types of applications on specific hardware. In some cases, developers can modify the existing RTOS, narrow it down to only provide the functionality required by a specific application, and/or customize its functionality or performance characteristics.

## How does RTOS work

The **kernel** is the core component in the operating system. Operating systems like Linux use a kernel, allowing users to appear to access the computer at the same time. Each program being executed is a task (or thread) under the control of the operating system. If an operating system can perform multiple tasks in this way, it can be said to be **multitasking**.

- **Multitasking**

Traditional processors can only execute **one task** at a time, but a multitasking operating system can make each task appear to be executed simultaneously by quickly switching between tasks. The following figure shows the relationship between the execution mode of three tasks and time.

<div align="center"><img src="https://files.seeedstudio.com/wiki/FreeRTOS/TaskExecution.gif"/></div>

- **Scheduling**

The **scheduler** is the part of the kernel that is responsible for deciding which task to execute at any particular time. The kernel can pause and resume a task multiple times during the life cycle of the task.

A **scheduling strategy** is an algorithm used by the scheduler to decide which task to perform at any point in time. A (non-real-time) multi-user system strategy is likely to give each task a "fair" proportion of processor time.

In addition to being involuntarily suspended by the kernel, a task can also choose to suspend itself. If it wants to **delay (sleep)** for a period of time, or **wait (block)** for a resource to be available (such as a serial port) or an event (such as a key press), it will do so.

<div align="center"><img src="https://files.seeedstudio.com/wiki/FreeRTOS/suspending.gif"/></div>

*Reference: [**FreeRTOS Fundamentals**](https://www.freertos.org/implementation/a00002.html)*

## What is FreeRTOS

<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/FreeRTOS/FreeRTOS-logo.png"/></div>

[**FreeRTOS**](https://www.freertos.org/) is a class of RTOS that is designed to be small enough to run on a microcontroller – although its use is not limited to microcontroller applications. FreeRTOS includes a kernel and a growing set of software libraries suitable for use across industry sectors and applications. With the help of FreeRTOS, you can do multitasking on a microcontroller based hardware!

**For Arduino compatibility**, we have ported FreeRTOS into the Arduino framework so that you are able to use FreeRTOS with your favorite Arduino boards with ease!

:::note
In 2017, [Amazon](https://aws.amazon.com/freertos/) has taken the stewardship of FreeRTOS which makes it reliable and secure to the embedded world.
:::

## Quick Start with FreeRTOS For Arduino

### Installing the FreeRTOS Arduino Libraries

1. Visit the [**Seeed_Arduino_FreeRTOS**](https://github.com/Seeed-Studio/Seeed_Arduino_FreeRTOS) repositories and download the entire repo to your local drive.

2. Now, the Seeed_Arduino_FreeRTOS library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_FreeRTOS` file that you've have just downloaded.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

:::note
This library ports the latest FreeRTOS(10.2.1) and allow you to create FreeRTOS Projects in the in Arduino IDE.
:::

### Supported Boards

The [**Seeed_Arduino_FreeRTOS**](https://github.com/Seeed-Studio/Seeed_Arduino_FreeRTOS) supports all the SAMD boards by Seeed:

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- Seeeduino Zero Series:
  - [Seeeduino Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)
  - [Seeeduino Lotus Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)
  - [Wio Lite W600 - ATSAMD21 Cortex-M0 Wireless Development Board](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
  - [Wio Lite MG126 - ATSAMD21 Cortex-M0 Blue Wireless Development Board](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- [Seeeduino LoRaWAN](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html)

## FreeRTOS Arduino Examples

The FreeRTOS can be very powerful by providing the microcontroller **real time scheduling functionality, inter-task communication, timing and synchronization primitives**.

To get you started with FreeRTOS easily, here provides some examples for reference. The following examples are built and ran on Wio Terminal.

### Hello World Example

This example simply creates **two threads** that prints different `strings` to the Serial Monitor at a different rate.

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

### Blink Example

This example also creates two threads and output signals to light up LED. One is to simply blink the LED, and the other is to breath LED.

:::note
        Make sure that the Breathing LED is on a PWM pin.
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

### LCD Example

This example is a demonstrations of FreeRTOS with other  Arduino libraries such as LCD Sprites in Wio Terminal. This example creates two sprites in two threads to count number in the opposite way. `taskMonitor` is a function used to monitor threads and prints stacks info about each thread.

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

## FreeRTOS in Cpp For Arduino

For more, we also provide [**Seeed_Arduino_ooFreeRTOS**](https://github.com/Seeed-Studio/Seeed_Arduino_ooFreeRTOS), which is **a collection of C++ wrappers encapsulating the FreeRTOS functionality, and it's working under the framework of Arduino.**

### Installing the FreeRTOS Cpp Arduino Libraries

1. Visit the [**Seeed_Arduino_ooFreeRTOS**](https://github.com/Seeed-Studio/Seeed_Arduino_ooFreeRTOS) repositories and download the entire repo to your local drive.

2. Now, the Seeed_Arduino_ooFreeRTOS library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_ooFreeRTOS` file that you've have just downloaded.

### Blink Example in Cpp

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

## Resources

- [Official FreeRTOS Getting Started](https://www.freertos.org/FreeRTOS-quick-start-guide.html)
