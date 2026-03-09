---
title: XIAO ESP32-C5 With FreeRTOS
keywords:
  - xiao
  - esp32c5
  - FreeRTOS
  - idf
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_with_freertos
sku: 100010048
last_update:
  date: 1/13/2026
  author: Zeller
createdAt: '2026-01-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/xiao_esp32c5_with_freertos/
---

## OverView

[FreeRTOS](https://www.freertos.org/index.html) is a collection of C libraries comprised of a real-time kernel and a set of modular libraries that implement complementary functionality. The FreeRTOS kernel is a real-time kernel (or real-time scheduler) that enables applications built on FreeRTOS to meet their hard real-time requirements. It enables applications to be organized as a collection of independent threads of execution.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/1.png" alt="pir" width={600} height="auto" /></p>

_Reference : [**Mastering the FreeRTOS Real Time Kernel**](https://www.freertos.org/Documentation/02-Kernel/07-Books-and-manual/01-RTOS_book)_

### FreeRTOS ports

FreeRTOS is an open source RTOS kernel that is pre-integrated into the Arduino ESP32 Core (which is built upon ESP-IDF). Thus, every Arduino sketch running on an ESP32 is actually utilizing FreeRTOS in the background. The FreeRTOS kernel is ported to all ESP chip architectures, including Xtensa and RISC-V (e.g., XIAO ESP32-C5).

Therefore, this tutorial is written based on the Arduino framework to provide a more accessible development experience.

## Hardware Preparation

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Software Preparation

If you haven't used the Arduino IDE yet, please refer to [Getting Started with Seeed Studio XIAO ESP32-C5](https://wiki.seeedstudio.com/xiao_esp32c5_getting_started/#software).

  <div class="download_arduino_container" style={{textAlign: 'center'}}>
      <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
  </div>
  <br></br>

## Task Introduction

Tasks are small functions/ jobs that the the processor is requested to perform with a set of settings. Tasks can range from small functions to infinite looping functions.

Tasks are the fundamental units of execution in a FreeRTOS application. They are essentially functions that run concurrently with other tasks. This allows for efficient multitasking and responsiveness.

### Task properties

- **TaskFunction**: This is the function that contains the actual logic of the task. It's the entry point for the task's execution.
- **StackSize**: This specifies the amount of memory allocated for the task's stack. The stack is used to store local variables, function return addresses, and temporary data.
- **TaskPriority**: This determines the relative importance of the task compared to other tasks. Higher-priority tasks have a greater chance of being executed before lower-priority ones.
- **TaskParameters**: These are optional arguments that can be passed to the task function when it's created. They can be used to provide additional context or configuration to the task.
- **CoreAffinity**: This specifies which CPU core the task should be assigned to. In systems with multiple cores, this can be used to optimize performance or balance the workload.

### Create a Task

To create a task in FreeRTOS, the xTaskCreate function is used. This function takes several parameters, including the task function, task name, stack size, parameters, priority, and a handle to the created task.

```cpp
TaskHandle_t task;
xTaskCreate(
        taskFunction,             /* Function that implements the task. */
        "taskName",               /* Text name for the task. */
        configMINIMAL_STACK_SIZE, /* Stack size in words, or bytes. */
        NULL,                     /* Parameter passed into the task. */
        tskIDLE_PRIORITY,         /* Priority at which the task is created. */
        &task                     /* Used to pass out the created task's handle. */
        );
```

### Task function

The task function is the actual code that will be executed by the task.

```cpp
void taskFunction(void * pvParameters) {
  /*
  Function definition goes here
  */
}
```

## Visualization of tasks

Create four simple task to visualize how the FreeRTOS works.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/2.png" alt="pir" width={700} height="auto" /></p>

- Visual Representation

```txt
taskFunction1 (1000ms delay)
taskFunction2 (500ms delay)
taskFunction3 (500ms delay)
taskFunction4 (500ms delay)
```

- Reference Code

<details>

<summary>freertos.ino</summary>

```cpp
#include <Arduino.h>

// Task handles
TaskHandle_t task1, task2, task3, task4;

// ---------------------- Task Function Definitions ----------------------

void taskFunction1(void * pvParameters) {
    for (;;) { // Infinite loop, equivalent to while(true)
        // Print Task 1 and Hello message
        Serial.println("Task 1: Hello from task 1");
        
        // Delay 1000ms (1 second)
        vTaskDelay(pdMS_TO_TICKS(1000)); 
    }
}

void taskFunction2(void * pvParameters) {
    for (;;) {
        Serial.println("Task 2: Hello from task 2");
        vTaskDelay(pdMS_TO_TICKS(500)); // Delay 500ms
    }
}

void taskFunction3(void * pvParameters) {
    for (;;) {
        Serial.println("Task 3: Hello from task 3");
        vTaskDelay(pdMS_TO_TICKS(500));
    }
}

void taskFunction4(void * pvParameters) {
    for (;;) {
        Serial.println("Task 4: Hello from task 4");
        vTaskDelay(pdMS_TO_TICKS(500));
    }
}

// ---------------------- Main Program Entry ----------------------

void setup() {
    // 1. Initialize serial port (C5 typically uses USB CDC)
    Serial.begin(115200);
    
    // Give the serial port some startup time to prevent loss of initial prints
    delay(2000);
    Serial.println("--- ESP32-C5 FreeRTOS Tasks Demo ---");

    // 2. Create tasks
    // Use xTaskCreate, no need to specify core - the system will automatically schedule on the only Core 0
    // Important: Set stack size to 4096 bytes to prevent Stack Overflow
    
    xTaskCreate(
        taskFunction1,    /* Task function */
        "task_1",         /* Task name */
        4096,             /* Stack size (Bytes) - Do NOT use configMINIMAL_STACK_SIZE */
        NULL,             /* Parameters */
        1,                /* Priority */
        &task1            /* Handle */
    );

    xTaskCreate(
        taskFunction2,
        "task_2",
        4096,
        NULL,
        1,
        &task2
    );

    xTaskCreate(
        taskFunction3,
        "task_3",
        4096,
        NULL,
        1,
        &task3
    );

    xTaskCreate(
        taskFunction4,
        "task_4",
        4096,
        NULL,
        1,
        &task4
    );
}

void loop() {
    // Main loop is idle, reserved for task execution
    // To prove the main loop is still active, you can print occasionally or leave it empty
    delay(1000);
}
```

</details>

:::tip
configMINIMAL_STACK_SIZE can be changed in sdkconfig.
:::

1. Four Tasks: The code defines four tasks: taskFunction1, taskFunction2, taskFunction3, and taskFunction4.
2. Task Priorities: All tasks are created with the tskIDLE_PRIORITY. This means they have the same priority.
3. Task Delays: taskFunction1 has a delay of 1000ms, while the other three have a delay of 500ms.

:::tip
The XIAO ESP32-C5 is a high-frequency, single-core RISC-V microcontroller, so core switching is not possible; otherwise, it will cause a stack overflow.
:::

## Sensors and FreeRTOS

Next, I will implement a **Smart Entrance Welcome System** using the **XIAO ESP32-C5**, **FreeRTOS**, and various sensors.

This system simulates an entrance scenario in a smart home:

- **Environmental Monitoring:**
    Real-time monitoring of the temperature and humidity at the entrance (using a DHT11 sensor) and displaying the data on the screen.

- **Human Body Sensing:**
    Utilizing an ultrasonic sensor to detect if someone is approaching.

- **Smart Welcome:**
    - **When no one is present (distance is far):**
        The LED is off, the screen displays environmental data, and the system enters a power-saving/standby UI.

    - **When someone approaches (distance is close, e.g., < 30cm):**
    The LED automatically turns on (simulating a porch light), and the screen displays **Welcome!**.

### Hardware Preparation

You will need to prepare one XIAO ESP32-C5 board and the following sensors.

<table align="center">
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
   <th>Seeed Studio Expansion Board Base for XIAO</th>
   <th>Grove - Purple LED</th>
   <th>Grove - Temperature & Humidity Sensor (DHT11)</th>
   <th>Grove - Ultrasonic Distance Sensor</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comimagesproductp3302850.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/img/new.jpeg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove---ultrasonic-distance-sensor-preview_1.png" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Purple-LED-3mm.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
       <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>

### Software

Download the library and place it in your Arduino libraries path.

- Grove - Temperature & Humidity Sensor (DHT11)

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
    </div><br />

- Grove - Ultrasonic Distance Sensor

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_UltrasonicRanger/archive/master.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
    </div><br />

- Reference Code

<details>

<summary>Smart_Entrance_Welcome_System.ino</summary>

```cpp
#include <Arduino.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include "Ultrasonic.h"
#include "Grove_Temperature_And_Humidity_Sensor.h"

// ---------------- Configuration Area ----------------
// Pin Definitions
#define PIN_DHT         D6   // DHT11 connection pin
#define PIN_ULTRASONIC  D7   // Ultrasonic sensor connection pin
#define PIN_LED         D2   // LED light pin
#define PIN_SDA         D4   // OLED SDA pin
#define PIN_SCL         D5   // OLED SCL pin

// Sensor Type Definition
#define DHTTYPE DHT11

// OLED Parameters
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_RESET    -1

// Logic Parameters
#define DIST_THRESHOLD 30 // Person detected if within 30cm
#define DHT_READ_INTERVAL 3000 // DHT11 reading interval (milliseconds)
#define DHT_TIMEOUT 250 // DHT11 reading timeout (milliseconds)

// ---------------- Object Initialization ----------------
Ultrasonic ultrasonic(PIN_ULTRASONIC); 
DHT dht(PIN_DHT, DHTTYPE); 
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

// ---------------- Shared Data Structure ----------------
struct SystemState {
    float temperature;
    float humidity;
    long distanceCm;
    bool personDetected;
    bool dhtValid; // Whether DHT data is valid
    unsigned long lastDHTUpdate; // Last DHT update time
};

// Global State Variable
SystemState currentState = {0.0, 0.0, 0, false, false, 0};

// Mutex: Protect shared data access
SemaphoreHandle_t xMutex;

// I2C Mutex: Protect I2C bus access
SemaphoreHandle_t xI2CMutex;

// Task Handles
TaskHandle_t taskDHTHandle, taskUltraHandle, taskOLEDHandle, taskLogicHandle;

// ---------------- Task Function Implementations ----------------

// Task 1: DHT Temperature & Humidity Reading (Optimized - Non-blocking)
void taskDHT(void *pvParameters) {
    dht.begin();
    
    float temp_hum_val[2] = {0};
    unsigned long lastReadTime = 0;
    
    for (;;) {
        unsigned long currentTime = millis();
        
        // Control reading frequency to avoid frequent reads
        if (currentTime - lastReadTime >= DHT_READ_INTERVAL) {
            
            // Release CPU before sensor reading to allow other tasks to run
            // Read sensor without holding mutex
            bool readSuccess = !dht.readTempAndHumidity(temp_hum_val);
            
            if (readSuccess) {
                // Only acquire lock and update data quickly after successful reading
                if (xSemaphoreTake(xMutex, pdMS_TO_TICKS(100)) == pdTRUE) {
                    currentState.humidity = temp_hum_val[0];
                    currentState.temperature = temp_hum_val[1];
                    currentState.dhtValid = true;
                    currentState.lastDHTUpdate = currentTime;
                    xSemaphoreGive(xMutex);
                }
                
                Serial.printf("[DHT] Temp: %.1f°C, Humi: %.1f%%\n", 
                             temp_hum_val[1], temp_hum_val[0]);
            } else {
                Serial.println("[DHT] Read failed");
                
                // Mark data as invalid
                if (xSemaphoreTake(xMutex, pdMS_TO_TICKS(100)) == pdTRUE) {
                    currentState.dhtValid = false;
                    xSemaphoreGive(xMutex);
                }
            }
            
            lastReadTime = currentTime;
        }
        
        // Use longer delay to yield CPU time
        vTaskDelay(pdMS_TO_TICKS(500));
    }
}

// Task 2: Ultrasonic Distance Measurement (Optimized)
void taskUltrasonic(void *pvParameters) {
    for (;;) {
        // Perform measurement without holding mutex
        long RangeInCentimeters = ultrasonic.MeasureInCentimeters();
        
        // Update data quickly
        if (xSemaphoreTake(xMutex, pdMS_TO_TICKS(50)) == pdTRUE) {
            currentState.distanceCm = RangeInCentimeters;
            
            // Determine if person is present
            if (RangeInCentimeters > 0 && RangeInCentimeters < DIST_THRESHOLD) {
                currentState.personDetected = true;
            } else {
                currentState.personDetected = false;
            }
            xSemaphoreGive(xMutex);
        }
        
        // Appropriate delay to avoid excessive frequency
        vTaskDelay(pdMS_TO_TICKS(100));
    }
}

// Task 3: LED Logic Control (Optimized)
void taskLogic(void *pvParameters) {
    pinMode(PIN_LED, OUTPUT);
    bool isPerson = false;
    bool lastState = false;

    for (;;) {
        // Read state quickly
        if (xSemaphoreTake(xMutex, pdMS_TO_TICKS(10)) == pdTRUE) {
            isPerson = currentState.personDetected;
            xSemaphoreGive(xMutex);
        }

        // Perform operation only when state changes
        if (isPerson != lastState) {
            digitalWrite(PIN_LED, isPerson ? HIGH : LOW);
            Serial.printf("[Logic] LED %s\n", isPerson ? "ON" : "OFF");
            lastState = isPerson;
        }

        vTaskDelay(pdMS_TO_TICKS(50));
    }
}

// Task 4: OLED Display (Optimized - Using I2C Mutex)
void taskOLED(void *pvParameters) {
    // Initialize I2C
    Wire.begin(PIN_SDA, PIN_SCL);
    Wire.setClock(400000); // Set I2C to fast mode 400kHz

    // Protect initialization with I2C mutex
    if (xSemaphoreTake(xI2CMutex, portMAX_DELAY) == pdTRUE) {
        if(!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) { 
            Serial.println(F("[OLED] Init failed"));
            xSemaphoreGive(xI2CMutex);
            vTaskDelete(NULL);
        }
        display.clearDisplay();
        display.setTextColor(SSD1306_WHITE);
        display.display();
        xSemaphoreGive(xI2CMutex);
    }

    SystemState localState;
    unsigned long lastUpdate = 0;
    const unsigned long UPDATE_INTERVAL = 250; // Reduce refresh rate to 4Hz

    for (;;) {
        unsigned long currentTime = millis();
        
        // Control refresh rate
        if (currentTime - lastUpdate < UPDATE_INTERVAL) {
            vTaskDelay(pdMS_TO_TICKS(50));
            continue;
        }
        
        // Copy data quickly
        if (xSemaphoreTake(xMutex, pdMS_TO_TICKS(50)) == pdTRUE) {
            localState = currentState;
            xSemaphoreGive(xMutex);
        } else {
            // Skip update if mutex acquisition fails
            vTaskDelay(pdMS_TO_TICKS(50));
            continue;
        }

        // Protect display operations with I2C mutex
        if (xSemaphoreTake(xI2CMutex, pdMS_TO_TICKS(100)) == pdTRUE) {
            display.clearDisplay();

            if (localState.personDetected) {
                // --- Person Approaching Mode ---
                display.setTextSize(2);
                display.setCursor(10, 10);
                display.println(F("WELCOME!"));
                
                display.setTextSize(1);
                display.setCursor(10, 35);
                display.print(F("Distance: "));
                display.print(localState.distanceCm);
                display.println(F(" cm"));
                
                // Display temperature and humidity (if valid)
                if (localState.dhtValid) {
                    display.setCursor(10, 50);
                    display.print(localState.temperature, 1);
                    display.print(F("C "));
                    display.print(localState.humidity, 0);
                    display.println(F("%"));
                }
            } else {
                // --- Environment Monitoring Mode ---
                display.setTextSize(1);
                display.setCursor(0, 0);
                display.println(F("-- Home Monitor --"));
                
                if (localState.dhtValid) {
                    display.setCursor(0, 20);
                    display.print(F("Temperature: "));
                    display.print(localState.temperature, 1);
                    display.println(F(" C"));

                    display.setCursor(0, 35);
                    display.print(F("Humidity:    "));
                    display.print(localState.humidity, 0);
                    display.println(F(" %"));
                    
                    // Display data age
                    unsigned long dataAge = (millis() - localState.lastDHTUpdate) / 1000;
                    display.setCursor(0, 50);
                    display.print(F("Updated: "));
                    display.print(dataAge);
                    display.println(F("s ago"));
                } else {
                    display.setCursor(0, 28);
                    display.println(F("Sensor reading..."));
                }
            }

            display.display();
            xSemaphoreGive(xI2CMutex);
        }
        
        lastUpdate = currentTime;
        vTaskDelay(pdMS_TO_TICKS(50));
    }
}

// ---------------- Setup & Loop ----------------

void setup() {
    Serial.begin(115200);
    delay(1000);
    Serial.println("\n=== System Starting ===");

    // Create mutexes
    xMutex = xSemaphoreCreateMutex();
    xI2CMutex = xSemaphoreCreateMutex();
    
    if (xMutex == NULL || xI2CMutex == NULL) {
        Serial.println("[ERROR] Failed to create mutex!");
        while(1) delay(1000);
    }

    // Create tasks - adjust priority and stack size
    // Priority: Higher number = higher priority
    // DHT task: lowest priority (1) - slow reading and non-urgent
    xTaskCreate(taskDHT, "DHT_Task", 4096, NULL, 1, &taskDHTHandle);
    
    // Ultrasonic task: medium priority (2) - requires fast response
    xTaskCreate(taskUltrasonic, "Ultra_Task", 3072, NULL, 2, &taskUltraHandle);
    
    // Logic task: medium priority (2) - same level as ultrasonic
    xTaskCreate(taskLogic, "Logic_Task", 2048, NULL, 2, &taskLogicHandle);
    
    // OLED task: low priority (1) - display does not require real-time performance
    xTaskCreate(taskOLED, "OLED_Task", 4096, NULL, 1, &taskOLEDHandle);

    Serial.println("=== FreeRTOS Tasks Started ===");
    Serial.printf("Free heap: %d bytes\n", ESP.getFreeHeap());
}

void loop() {
    // Monitor system status
    static unsigned long lastReport = 0;
    unsigned long now = millis();
    
    if (now - lastReport > 10000) { // Report every 10 seconds
        Serial.printf("\n[System] Uptime: %lu s, Free heap: %d bytes\n", 
                     now / 1000, ESP.getFreeHeap());
        lastReport = now;
    }
    
    vTaskDelay(pdMS_TO_TICKS(1000));
}
```

</details>

### Result

- After uploading the code, you can observe the results through the Serial Monitor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/freertos_1.png" style={{width:800, height:'auto'}}/></div>

- Display Screen Effect

<table>
<tr>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/freertos_2.jpg" style={{width:400, height:'auto'}}/></div></td>
<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/freertos_3.jpg" style={{width:400, height:'auto'}}/></div></td>
</tr>
</table>

- Actual Effect

<div class="table-center">
<iframe width="700" height="400" src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/freertos_result.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Conclusion

I trust that through this guide, you have gained a solid command of the XIAO ESP32-C5 and FreeRTOS. I look forward to seeing your innovative creations and inventions across a wide range of applications!

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