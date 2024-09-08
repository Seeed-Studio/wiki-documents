---
description: XIAO ESP32S3(Sense) With FreeRTOS
title:  XIAO ESP32S3(Sense) With FreeRTOS
keywords:
- Software, FreeRtos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-ESP32S3-FreeRTOS
last_update:
  date: 09/06/2024
  author: Priyanshu_Roy
---

# XIAO ESP32S3(Sense) With FreeRTOS

This wiki covers [FreeRTOS](https://freertos.org/) support for the [Seeed Studio XIAO ESP32S3](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/). With the assistance of this guide you will be able to utilize the feature set available to the board.


## What is [FreeRTOS](https://www.freertos.org/index.html)
![image1](./1.png)

FreeRTOS is a collection of C libraries comprised of a real-time kernel and a set of modular libraries that implement complementary functionality. The FreeRTOS kernel is a real-time kernel (or real-time scheduler) that enables applications built on FreeRTOS to meet their hard real-time requirements. It enables applications to be organized as a collection of independent threads of execution.

*Reference : [**Mastering the FreeRTOS Real Time Kernel**](https://www.freertos.org/Documentation/02-Kernel/07-Books-and-manual/01-RTOS_book)*

## FreeRTOS ports

FreeRTOS is an open source RTOS (real-time operating system) kernel that is integrated into ESP-IDF as a component. Thus, all ESP-IDF applications and many ESP-IDF components are written based on FreeRTOS. The FreeRTOS kernel is ported to all architectures (i.e., Xtensa and RISC-V) available of ESP chips.

We will be using the ESP IDF port of the FreeRTOS.

## Hardware Preparation

I am using [Seed Studio XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/) and the onboard camera, microphone and sd-card reader along with the Wifi functionality of the ESP32S3.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3(Sense)</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Additional Components

- [Grove - Expansion Board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) - I2C Display RTC & Button
- [Air Quality Sensor v1.3](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html)
- [Grove - Temperature, Humidity, Pressure and Gas Sensor for Arduino - BME680](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)
- [Acrylic Case for Seeed Studio XIAO Expansion board](https://www.seeedstudio.com/XIAO-p-4812.html)

## Software Preparation

I am using Visual Studio Code (Windows) with ESP-IDF.

1. VSCode install
2. ESP-IDF installation guide
3. Git Repository

<div class="table-center">
  <table align="center">
    <tr>
        <th>VS Code</th>
        <th>ESP-IDF for VSCode</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://code.visualstudio.com/download">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download VSCode⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md">
              <strong><span><font color={'FFFFFF'} size={"4"}> ESP-IDF Install ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>


## Getting Started

### Setting up ESP-IDF

After setting up the [Visual Studio Extension](https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/tutorial/install.md), open the terminal and paste the following command to access the ESP-IDF Command Line Tools from the normal terminal environment(outside of VScode).

:::note
The normal installation of [ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html) extension of VS-Code will take care of 90% of use cases do the following steps only if you need ESP Command line tools outside of the environment.
:::  

PowerShell (Windows)  
```shell
.$HOME\esp\v5.3\esp-idf\export.ps1
```
:::info
".$HOME\esp\v5.3\esp-idf" may differ from user to user.This the default installation path.  
Replace it wil the installation path on your device.
:::
:::tip
To avoid repeated setup boot up PowerShell in administrator mode and type the following command
```shell
notepad $PSHOME\Profile.ps1
```
A Notepad instance will open up. Paste the export shell command in the note-pad and save it.
open an instance of powershell and it should have close to the following output.
```shell
Done! You can now compile ESP-IDF projects.
```
:::   
If everything is done properly, the following command :
```shell
idf.py
```
should show the following output :
```shell
Usage: idf.py [OPTIONS] COMMAND1 [ARGS]... [COMMAND2 [ARGS]...]...

  ESP-IDF CLI build management tool. For commands that are not known to idf.py an attempt to execute it as a build
  system target will be made. Selected target: None
```   

## What are Task?   
Tasks are small functions/ jobs that the the processor is requested to perform with a set of settings. Tasks can range from small functions to infinite looping functions.   
Tasks are the fundamental units of execution in an ESP-IDF application. They are essentially functions that run concurrently with other tasks. This allows for efficient multitasking and responsiveness.   
### What are task properties?
Due to the vastness of this topic, i will be only covering a few of the properties we will be using for this guide.   
- **TaskFunction**: This is the function that contains the actual logic of the task. It's the entry point for the task's execution.   
- **StackSize**: This specifies the amount of memory allocated for the task's stack. The stack is used to store local variables, function return addresses, and temporary data.   
- **TaskPriority**: This determines the relative importance of the task compared to other tasks. Higher-priority tasks have a greater chance of being executed before lower-priority ones.   
- **TaskParameters**: These are optional arguments that can be passed to the task function when it's created. They can be used to provide additional context or configuration to the task.   
- **CoreAffinity**: This specifies which CPU core the task should be assigned to. In systems with multiple cores, this can be used to optimize performance or balance the workload.   

### Creating a task
To create a task in FreeRTOS, the xTaskCreate function is used. This function takes several parameters, including the task function, task name, stack size, parameters, priority, and a handle to the created task.
```c
TaskHandle_t task;
xTaskCreate(
        taskFunction,             /* Function that implements the task. */
        "taskName",               /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, or bytes. */
        NULL,                     /* Parameter passed into the task. */
        tskIDLE_PRIORITY,         /* Priority at which the task is created. */
        &task1                    /* Used to pass out the created task's handle. */
        );
```
### Creating a task pinned to a core
To create a task and pin it to a specific core (only if the chip in use is dual core), the xTaskCreatePinnedToCore function is used. This function is similar to xTaskCreate but includes an additional parameter for specifying the core.
```c
TaskHandle_t task;
xTaskCreatePinnedToCore(
        taskFunction,             /* Function that implements the task. */
        "taskName",               /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, or bytes. */
        NULL,                     /* Parameter passed into the task. */
        tskIDLE_PRIORITY,         /* Priority at which the task is created. */
        &task,                    /* Used to pass out the created task's handle. */
        0);                       /* Core ID */
```

### Task function call
The task function is the actual code that will be executed by the task.
```c
void taskFunction(void * pvParameters) {
  /*
  Function definition goes here
  */
}
```

## Visualization  of tasks
I am creating four simple task to visualize how the FreeRTOS works.    
![image2](./2.png)

### Visual Representation   
```shell
CPU0
-----
taskFunction1 (1000ms delay)

CPU1
-----
taskFunction2 (500ms delay)
taskFunction3 (500ms delay)
taskFunction4 (500ms delay)
```
### Code
```c
#include <stdio.h>
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "sdkconfig.h"
#include "esp_log.h"

TaskHandle_t task1,task2,task3,task4;

void taskFunction1(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task1", "Hello from task 1");
        vTaskDelay(pdMS_TO_TICKS(1000)); // Add a delay to avoid overwhelming the output
    }
}

void taskFunction2(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task2", "Hello from task 2");
        vTaskDelay(pdMS_TO_TICKS(500)); // Add a delay to avoid overwhelming the output
    }
}

void taskFunction3(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task3", "Hello from task 3");
        vTaskDelay(pdMS_TO_TICKS(500)); // Add a delay to avoid overwhelming the output
    }
}

void taskFunction4(void * pvParameters) {
    while (true) {
        ESP_LOGI("Task4", "Hello from task 4");
        vTaskDelay(pdMS_TO_TICKS(500)); // Add a delay to avoid overwhelming the output
    }
}

void app_main(void) {
    xTaskCreatePinnedToCore(
        taskFunction1, /* Function that implements the task. */
        "task_1",        /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, not bytes. */
        NULL,            /* Parameter passed into the task. */
        tskIDLE_PRIORITY, /* Priority at which the task is created. */
        &task1,         /* Used to pass out the created task's handle. */
        0);              /* Core ID */

    xTaskCreatePinnedToCore(
        taskFunction2, /* Function that implements the task. */
        "task_2",        /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, not bytes. */
        NULL,            /* Parameter passed into the task. */
        tskIDLE_PRIORITY, /* Priority at which the task is created. */
        &task2,         /* Used to pass out the created task's handle. */
        1);              /* Core ID */
    
    xTaskCreatePinnedToCore(
        taskFunction3, /* Function that implements the task. */
        "task_3",        /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, not bytes. */
        NULL,            /* Parameter passed into the task. */
        tskIDLE_PRIORITY, /* Priority at which the task is created. */
        &task3,         /* Used to pass out the created task's handle. */
        1);              /* Core ID */

    xTaskCreatePinnedToCore(
        taskFunction4, /* Function that implements the task. */
        "task_4",        /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, not bytes. */
        NULL,            /* Parameter passed into the task. */
        tskIDLE_PRIORITY, /* Priority at which the task is created. */
        &task4,         /* Used to pass out the created task's handle. */
        1);              /* Core ID */
}
```
:::tip
configMINIMAL_STACK_SIZE can be changed in sdkconfig.
:::

1. Four Tasks: The code defines four tasks: taskFunction1, taskFunction2, taskFunction3, and taskFunction4.
2. Task Priorities: All tasks are created with the tskIDLE_PRIORITY. This means they have the same priority.
3. Task Pinning: taskFunction1 is pinned to CPU0, while the other three tasks are pinned to CPU1.
4. Task Delays: taskFunction1 has a delay of 1000ms, while the other three have a delay of 500ms.

### Creating the CPU0 and CPU1 Task Schedule
I have create a basic task schedule for CPU0 and CPU1.

#### CPU0 Task Schedule

```shell
Task: taskFunction1
Priority: Idle (lowest)
Delay: 1000ms
Core: 0
```

#### CPU1 Task Schedule
```shell
Tasks: taskFunction2, taskFunction3, taskFunction4
Priorities: All Idle (same priority)
Delays: 500ms for all tasks
Core: 1
```

:::info
This is a simplified schedule. Actual task scheduling in a real-time system would involve more complex factors like task priorities, deadlines, and resource constraints.
:::

<details>

<summary> Output</summary>

```shell
I (11412) Task1: Hello from task 1
I (11522) Task3: Hello from task 3
I (11522) Task2: Hello from task 2
I (11532) Task4: Hello from task 4
I (12032) Task3: Hello from task 3
I (12032) Task2: Hello from task 2
I (12042) Task4: Hello from task 4
I (12422) Task1: Hello from task 1
I (12542) Task3: Hello from task 3
I (12542) Task2: Hello from task 2
I (12552) Task4: Hello from task 4
I (13052) Task3: Hello from task 3
I (13052) Task2: Hello from task 2
I (13062) Task4: Hello from task 4
I (13432) Task1: Hello from task 1
I (13562) Task3: Hello from task 3
I (13562) Task2: Hello from task 2
I (13572) Task4: Hello from task 4
I (14072) Task3: Hello from task 3
I (14072) Task2: Hello from task 2
I (14082) Task4: Hello from task 4
```

</details>

## Sensor polling using FreeRTOS   
For this i am using a analog sensor [Air Quality Sensor v1.3](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html)   
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Priyanshu0901/Air_quality_Sensor_ESP-IDF.git">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>   

### Using the git repository
After pulling the git repository, open the folder in VSCode. Go to View->Command Palette->ESP-IDF: Add vscode Configuration Folder.
From the bottom panel select the correct COM port, chip (ESP-S3) and build flash monitor

## FreeRtos for Arduino IDE   

### Arduino FreeRtos vs ESP-IDF FreeRtos

## Trouble Shooting

Some problems might encounter in the process of hardware connection, software debugging or uploading.

<!-- video Code -->
<!-- <div class="table-center">
<iframe width="100%" height="315" src="URL" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div> -->


<!-- Hyperlink -->
<!-- <a  href="link" target="_blank"><span> PDF Download of SenseCAP S210X Sereis User Guide</span></a> -->


## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
