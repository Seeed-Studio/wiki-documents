---
description: In this tutorial, we will embark on a journey to explore Zigbee application development using the XIAO ESP32C6 development board. The XIAO ESP32C6 is a compact yet powerful board that features the ESP32-C6 chip, which offers integrated Wi-Fi and Bluetooth Low Energy (BLE) connectivity. By leveraging the ESP Zigbee SDK, we can harness the full potential of the XIAO ESP32C6 and extend its capabilities to include Zigbee functionality.
title: XIAO ESP32C6 Zigbee Quick Start Guide (Arduino)
image: https://files.seeedstudio.com/wiki/xiaoc6_zigbee/3.webp
slug: /xiao_esp32c6_zigbee_arduino
last_update:
  date: 11/25/2024
  author: Spencer
---

## Overview

This tutorial guides you through implementing [Zigbee](https://en.wikipedia.org/wiki/Zigbee) applications on the Seeed Studio **XIAO ESP32C6** development board. Powered by the ESP32-C6 chip, this board combines **Wi-Fi**, **Bluetooth Low Energy (BLE)**, and **Zigbee** connectivity, making it perfect for **IoT applications**. The examples in this guide use the **esp-arduino Zigbee SDK** to bring Zigbee functionality to life.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/0.png"
    style={{ width: 680, height: 'auto', "border-radius": '12.8px' }}
  />
</div>

### What You'll Learn

:::note Prerequisite: Arduino Development Setup

If you haven't prepared your Arduino IDE, refer to the **[Getting Started Guide](https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/#software-preparation)**. Make sure the **esp-arduino board version** is **v3.0.6 or later**, which supports Zigbee functionality.

:::

This guide focuses on the essentials of using Zigbee with the XIAO ESP32C6, ensuring a clear understanding of its practical applications:

1. [Zigbee Overview](#zigbee_overview): Understand the Zigbee protocol and its network structure.
2. [Zigbee Arduino Examples](#examples): Implement Zigbee examples like light bulbs and switches on the ESP32-C6.

## Zigbee Overview {#zigbee_overview}

Zigbee is a **low-power**, **low-bandwidth** wireless communication protocol based on the IEEE 802.15.4 standard. It is tailored for IoT scenarios such as **home automation**, **smart cities**, and **industrial control**, offering robust mesh networking capabilities for reliable communication in dynamic environments.

### Zigbee Data Model

Zigbee communication relies on the **Zigbee Cluster Library (ZCL)**, which defines how devices organize their functionality and interact. Key components include:

1. **Device Types**
    Zigbee devices (e.g., switches, sensors, lights) are pre-defined with specific behaviors, grouped into functional **Clusters**.

2. **Clusters**
    Clusters are logical groupings of:

   - **Attributes**: Represent device states, like brightness or temperature.
   - **Commands**: Trigger actions, such as turning a light on or setting brightness to 50%.

   Examples:

   - **On/Off Cluster**: Controls binary states like power.
   - **Level Control Cluster**: Adjusts intensity or brightness.
   - **Temperature Measurement Cluster**: Sends temperature readings.
   - **Scenes Cluster**: Saves and recalls preset configurations.

3. **Attributes & Commands**
    Attributes store device data (e.g., state, configuration), while commands initiate actions.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6_zigbee/datamodel.png" style={{width:800, height:'auto'}}/></div>

### Zigbee Network Architecture

A Zigbee network consists of three primary node types:

1. **Zigbee Coordinator (ZC)**  
   - Serves as the central hub of the network.  
   - Handles network creation, device authentication, and address allocation.  
   - Responsible for initializing and managing the network.  
   - Each Zigbee network can have only **one Coordinator**.  

2. **Zigbee Router (ZR)**  
   - Extends the network range by relaying messages between devices.  
   - Supports additional devices joining the network.  
   - Typically mains-powered to ensure constant operation and reliable message relaying.  
   - Battery-powered Routers are possible but less common due to higher energy demands.  

3. **Zigbee End Device (ZED)**  
   - Lightweight and power-efficient devices that communicate with a parent node (either a Coordinator or Router).  
   - Do not route messages to other devices.  
   - Optimized for battery operation and typically enter sleep modes to conserve energy.

:::note

- **Addressing and Routing**:
  - Zigbee uses a 16-bit addressing scheme. Devices communicate through a mix of direct and indirect addressing.  
  - Routing decisions are made by Routers using algorithms like AODV (Ad hoc On-demand Distance Vector).  

- **Power Management**:
  - Zigbee End Devices are optimized for low power consumption. They often operate in sleep mode and only wake when needed.  
  - Routers and the Coordinator are generally mains-powered for consistent availability.

:::

#### Network Topologies

Zigbee supports three primary network topologies, depending on the application requirements and environment:

#### 1. Mesh Topology

- A single Coordinator and multiple Routers form a self-healing, robust network.  
- Devices can dynamically reroute messages if a communication path is disrupted, ensuring high reliability.  
- Ideal for large-scale networks requiring wide coverage and redundancy.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNptkcEOgjAQRH9lsydI5CDcuIo_oJ5MLxu6AlG6pLYmxvjvVlFSgj3NtG9nmvaBtWjGEgGgsTS0cKiUgXFtRKzuDDmxSRKZNIUsy2An3rFdJ8koYJ2m_0YjNp_YPGK_OR9ua3TFt67mEBs0jGYWHeOjLqbYYsHlMff3bKrMZ5XLGxZzvJjhoRlX2LPtqdPhPR_vYYWu5Z4VlkFqsmeFyjwDR97J_m5qLJ31vEIrvml_xg-aHFcdhQ_psTzR5Rp2BzJHkZ9_vgDkroUg" style={{width:380, height:'auto', "border-radius": '1px'}}/></div>

- **Key Features**:  
  - Dynamic rerouting ensures high reliability.  
  - Supports large networks with scalable coverage.  
  - Self-healing mechanisms increase fault tolerance.  

#### 2. Tree Topology

- The Coordinator acts as the root of a hierarchical structure, with Routers forming branches.  
- Each branch can have multiple End Devices or additional Routers, creating a tree-like structure.  
- Communication depends on hierarchical paths, which introduces potential single points of failure.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqF0MEKwjAMBuBXCTmt4A5OT7s6X0A9SS9hjW7omlFbQcR3tzqVFQV7yl--_IdcsRbDWCIA7B31DWwqbWF4CxFnWkteXJaNglKQ5zmsJHh20ywbBpgq9Wt1ZIuPLUb21fN0S2sqPrc1x9o4wxCS6p-8SPh3e5HyWcJn__g84XOlcIIdu45aE093fSxr9A13rLGMoyF30KjtLToKXtYXW2PpXeAJOgn7BssdHU8xhd6Q56qlePzu89uT3Yq88-0OO1R_gA" style={{width:600, height:'auto', "border-radius": '1px'}}/></div>

- **Key Features**:  
  - Works well for structured environments.  
  - Easier to set up and manage than a mesh network.  
  - Vulnerable to branch failure, which can disconnect entire sub-networks.  

#### 3. Star Topology

- All devices communicate directly with the Coordinator.  
- Simple to deploy, but the Coordinator is a single point of failure.  
- Best suited for small networks where devices are located close to the Coordinator.  

  <div style={{textAlign:'center'}}><img src="https://mermaid.ink/svg/pako:eNqNkMEKwjAMhl8l5LTCdth269X5BHqSXsIat6JtR20FGXt3K0Nx4MGc_i_kCyEz9l4zSgSAIdA0wrFTDtbaeR-0cRR9KIovEAKqqoK90x3fTc91UeQMK0AtxK8NW6XZKM0_SrtRWiGwRMvBktH5_vm1QGEc2bJCmaOmcFGo3JLnKEV_eLgeZQyJSww-DSPKM11vmdKkKXJnKH_AfroTuZP3b16etDldgQ" style={{width:480, height:'auto', "border-radius": '1px'}}/></div>

- **Key Features**:  
  - Easy to set up and manage.  
  - Limited scalability due to range and device capacity constraints.  
  - Reliance on the Coordinator for all communication reduces fault tolerance.  

After get a quick view of these concepts, let's get started with the Zigbee development on XIAO ESP32C6.

## Arduino Examples {#examples}

Refer to [Zigbee examples - Arduino](https://github.com/espressif/arduino-esp32/tree/master/libraries/Zigbee/examples)

### Example 1: Light Bulb and Light Switch {#Light_Bulb_switch}

First, prepare two XIAO ESP32C6s, one as a **Zigbee Light Bulb** and the other as a **Zigbee Light Switch**.

Use the `Zigbee_On_Off_Light` and `Zigbee_On_Off_Switch` examples to understand how Zigbee-enabled devices interact in real-world scenarios. Ready to begin? Let's dive into development!

#### Zigbee Light Bulb

Ensure you've opt for `Zigbee ED(end device)` for Zigbee Mode.

some constants:

```cpp
#define LED_PIN               LED_BUILTIN
#define BUTTON_PIN            9  // ESP32-C6/H2 Boot button
#define ZIGBEE_LIGHT_ENDPOINT 10
```

- `LED_PIN` is used to control the built-in LED.
- `BUTTON_PIN` is for the factory reset button.
- `ZIGBEE_LIGHT_ENDPOINT` represents the Zigbee endpoint for the light bulb, which acts like a service identifier in the network.

##### Define the Zigbee Light Device

```cpp
ZigbeeLight zbLight = ZigbeeLight(ZIGBEE_LIGHT_ENDPOINT);
```

This line defines a `ZigbeeLight` object with an endpoint ID. Endpoints are used to represent different functionalities within a Zigbee device.

##### Device State Control Function

The `setLED()` function controls the LED status:

```cpp
void setLED(bool value) {
  digitalWrite(LED_PIN, value);
}
```

The `setLED()` function accepts a boolean value and sets the LED state accordingly, turning it on or off based on the input value.

##### `setup()` Function

The `setup()` function initializes the device, including the LED, button, and Zigbee settings.

```cpp
void setup() {
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);
```

First, we configure the LED pin as an output and turn it off initially.

```cpp
  pinMode(BUTTON_PIN, INPUT_PULLUP);
```

The button pin is configured as an input with an internal pull-up resistor.

```cpp
  zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");
```

This sets the manufacturer and model name for the device, which helps identify it on the Zigbee network.

```cpp
  zbLight.onLightChange(setLED);
```

This registers `setLED()` as a callback function, which gets called whenever there is a change in the light state.

```cpp
  Zigbee.addEndpoint(&zbLight);
```

We add `zbLight` as an endpoint to the Zigbee core. This allows other Zigbee devices to interact with this endpoint.

```cpp
  Zigbee.begin();
```

Finally, we call `Zigbee.begin()` to initialize the Zigbee stack and start the device as an end device in the network.

##### `loop()` Function

The main loop handles button presses for performing a factory reset:

```cpp
void loop() {
  if (digitalRead(BUTTON_PIN) == LOW) {
    delay(100);  // Key debounce handling
    int startTime = millis();
    while (digitalRead(BUTTON_PIN) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        Serial.printf("Resetting Zigbee to factory settings, reboot.\n");
        Zigbee.factoryReset();
      }
    }
  }
  delay(100);
}
```

This code checks if the button is pressed:

- If pressed, it waits for 100 ms (for debounce handling).
- If the button remains pressed for more than 3 seconds, it triggers a factory reset by calling `Zigbee.factoryReset()`.

This feature is useful for users when they need to reconfigure the device due to network or pairing issues.

:::tip
The official routines are still being continuously updated, our documentation may not be able to synchronize the latest programs at the first time, if there is any discrepancy, please refer to **[Espressif's program examples](https://github.com/espressif/arduino-esp32/blob/3.0.7/libraries/Zigbee/examples/Zigbee_On_Off_Light/Zigbee_On_Off_Light.ino)**.
:::

```cpp title=Zigbee_On_Off_Light.ino showLineNumbers
#ifndef ZIGBEE_MODE_ED
#error "Zigbee end device mode is not selected in Tools->Zigbee mode"
#endif

#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define LED_PIN               LED_BUILTIN
#define BUTTON_PIN            9  // ESP32-C6/H2 Boot button
#define ZIGBEE_LIGHT_ENDPOINT 10

ZigbeeLight zbLight = ZigbeeLight(ZIGBEE_LIGHT_ENDPOINT);

/********************* RGB LED functions **************************/
void setLED(bool value) {
  digitalWrite(LED_PIN, value);
}

/********************* Arduino functions **************************/
void setup() {
  // Init LED and turn it OFF (if LED_PIN == RGB_BUILTIN, the rgbLedWrite() will be used under the hood)
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);

  // Init button for factory reset
  pinMode(BUTTON_PIN, INPUT_PULLUP);

  //Optional: set Zigbee device name and model
  zbLight.setManufacturerAndModel("Espressif", "ZBLightBulb");

  // Set callback function for light change
  zbLight.onLightChange(setLED);

  //Add endpoint to Zigbee Core
  log_d("Adding ZigbeeLight endpoint to Zigbee Core");
  Zigbee.addEndpoint(&zbLight);

  // When all EPs are registered, start Zigbee. By default acts as ZIGBEE_END_DEVICE
  log_d("Calling Zigbee.begin()");
  Zigbee.begin();
}

void loop() {
  // Checking button for factory reset
  if (digitalRead(BUTTON_PIN) == LOW) {  // Push button pressed
    // Key debounce handling
    delay(100);
    int startTime = millis();
    while (digitalRead(BUTTON_PIN) == LOW) {
      delay(50);
      if ((millis() - startTime) > 3000) {
        // If key pressed for more than 3secs, factory reset Zigbee and reboot
        Serial.printf("Resetting Zigbee to factory settings, reboot.\n");
        Zigbee.factoryReset();
      }
    }
  }
  delay(100);
}
```

#### Zigbee Light Switch

Here, the XIAO ESP32C6 serves as the **Zigbee Coordinator**, responsible for controlling other Zigbee devices. Here, the **Zigbee Switch** represents the controller, which binds to a Zigbee light device and controls it through commands such as toggling the light on or off.

##### Include and Definitions

```cpp
#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define SWITCH_ENDPOINT_NUMBER 5
#define GPIO_INPUT_IO_TOGGLE_SWITCH 9
#define PAIR_SIZE(TYPE_STR_PAIR) (sizeof(TYPE_STR_PAIR) / sizeof(TYPE_STR_PAIR[0]))
```

- `SWITCH_ENDPOINT_NUMBER` is defined as `5`. It represents the endpoint of the switch. Just like in the light bulb example, the endpoint number is used to define the specific function within a Zigbee device.
- `GPIO_INPUT_IO_TOGGLE_SWITCH` refers to GPIO pin `9`, which acts as the switch button.
- `PAIR_SIZE()` is a macro used to calculate the size of a given array, used here to handle button configurations.

##### Switch Configuration Types and Functions

The code defines several enumerations and data structures related to switch functionality:

```cpp
typedef enum {
  SWITCH_ON_CONTROL,
  SWITCH_OFF_CONTROL,
  SWITCH_ONOFF_TOGGLE_CONTROL,
  SWITCH_LEVEL_UP_CONTROL,
  SWITCH_LEVEL_DOWN_CONTROL,
  SWITCH_LEVEL_CYCLE_CONTROL,
  SWITCH_COLOR_CONTROL,
} SwitchFunction;

typedef struct {
  uint8_t pin;
  SwitchFunction func;
} SwitchData;

typedef enum {
  SWITCH_IDLE,
  SWITCH_PRESS_ARMED,
  SWITCH_PRESS_DETECTED,
  SWITCH_PRESSED,
  SWITCH_RELEASE_DETECTED,
} SwitchState;
```

- **`SwitchFunction`** enumerates different functions the switch can perform, such as turning the light on, off, toggling, adjusting brightness, etc.
- **`SwitchData`** is a struct that pairs a GPIO pin with a specific function, which allows for better organization when adding multiple buttons with different functionalities.
- **`SwitchState`** represents different states of the switch during user interaction (e.g., idle, pressed, released).

##### Instantiating the Zigbee Switch

```cpp
static SwitchData buttonFunctionPair[] = {{GPIO_INPUT_IO_TOGGLE_SWITCH, SWITCH_ONOFF_TOGGLE_CONTROL}};
ZigbeeSwitch zbSwitch = ZigbeeSwitch(SWITCH_ENDPOINT_NUMBER);
```

- **`buttonFunctionPair`** is an array defining the functions of the buttons. Here, the button connected to `GPIO 9` will be used for toggling the light on or off.
- **`zbSwitch`** creates an instance of `ZigbeeSwitch`, with endpoint number `5`.

##### Zigbee Functions and GPIO Interrupt Handling

```cpp
static void onZbButton(SwitchData *button_func_pair) {
  if (button_func_pair->func == SWITCH_ONOFF_TOGGLE_CONTROL) {
    zbSwitch.lightToggle();  // Sends a toggle command to the light.
  }
}
```

**`onZbButton()`** is called whenever a button is pressed. In this case, it sends a Zigbee command to toggle the light.

###### Handling GPIO Events

```cpp
static void IRAM_ATTR onGpioInterrupt(void *arg) {
  xQueueSendFromISR(gpio_evt_queue, (SwitchData *)arg, NULL);
}
```

**`onGpioInterrupt()`** is the interrupt service routine (ISR) for handling GPIO pin interrupts. It places an event in a queue whenever the button is pressed.

```cpp
static void enableGpioInterrupt(bool enabled) {
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); ++i) {
    if (enabled) {
      enableInterrupt((buttonFunctionPair[i]).pin);
    } else {
      disableInterrupt((buttonFunctionPair[i]).pin);
    }
  }
}
```

**`enableGpioInterrupt()`** enables or disables the GPIO interrupt, depending on whether the parameter `enabled` is `true` or `false`.

##### Setup Function

```cpp
void setup() {
  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  zbSwitch.setManufacturerAndModel("Espressif", "ZigbeeSwitch");
  zbSwitch.allowMultipleBinding(true);

  Zigbee.addEndpoint(&zbSwitch);
  Zigbee.setRebootOpenNetwork(180);

  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); i++) {
    pinMode(buttonFunctionPair[i].pin, INPUT_PULLUP);
    gpio_evt_queue = xQueueCreate(10, sizeof(SwitchData));
    if (gpio_evt_queue == 0) {
      log_e("Queue was not created and must not be used");
      while (1);
    }
    attachInterruptArg(buttonFunctionPair[i].pin, onGpioInterrupt, (void *)(buttonFunctionPair + i), FALLING);
  }

  Zigbee.begin(ZIGBEE_COORDINATOR);

  Serial.println("Waiting for Light to bound to the switch");
  while (!zbSwitch.isBound()) {
    Serial.printf(".");
    delay(500);
  }

  std::list<zb_device_params_t *> boundLights = zbSwitch.getBoundDevices();
  for (const auto &device : boundLights) {
    Serial.printf("Device on endpoint %d, short address: 0x%x\n", device->endpoint, device->short_addr);
    Serial.printf(
      "IEEE Address: %02X:%02X:%02X:%02X:%02X:%02X:%02X:%02X\n", device->ieee_addr[0], device->ieee_addr[1], device->ieee_addr[2], device->ieee_addr[3],
      device->ieee_addr[4], device->ieee_addr[5], device->ieee_addr[6], device->ieee_addr[7]
    );
    Serial.printf("Light manufacturer: %s", zbSwitch.readManufacturer(device->endpoint, device->short_addr));
    Serial.printf("Light model: %s", zbSwitch.readModel(device->endpoint, device->short_addr));
  }
  Serial.println();
}
```

- **Serial Communication Initialization**: Initializes serial for debugging.
- **Device Information**: Sets manufacturer and model, allows multiple devices to bind, and adds an endpoint to Zigbee core.
- **Network Initialization**: Opens the Zigbee network for `180` seconds after reboot to allow devices to join.
- **Button Initialization**: Sets up GPIO pins for the buttons, creates a queue to handle GPIO interrupts, and attaches interrupts to the buttons.
- **Wait for Binding**: The coordinator waits until it binds to a light device before proceeding. Once bound, it prints the bound device information.

##### Loop Function

```cpp
void loop() {
  uint8_t pin = 0;
  SwitchData buttonSwitch;
  static SwitchState buttonState = SWITCH_IDLE;
  bool eventFlag = false;

  if (xQueueReceive(gpio_evt_queue, &buttonSwitch, portMAX_DELAY)) {
    pin = buttonSwitch.pin;
    enableGpioInterrupt(false);
    eventFlag = true;
  }
  while (eventFlag) {
    bool value = digitalRead(pin);
    switch (buttonState) {
      case SWITCH_IDLE:           buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_IDLE; break;
      case SWITCH_PRESS_DETECTED: buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_RELEASE_DETECTED; break;
      case SWITCH_RELEASE_DETECTED:
        buttonState = SWITCH_IDLE;
        (*onZbButton)(&buttonSwitch);
        break;
      default: break;
    }
    if (buttonState == SWITCH_IDLE) {
      enableGpioInterrupt(true);
      eventFlag = false;
      break;
    }
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }

  static uint32_t lastPrint = 0;
  if (millis() - lastPrint > 10000) {
    lastPrint = millis();
    zbSwitch.printBoundDevices();
  }
}
```

- The **loop function** manages button presses by reading from the interrupt queue (`gpio_evt_queue`) and updating the `buttonState` accordingly.
- When the button is pressed and released (`SWITCH_RELEASE_DETECTED`), the `onZbButton()` callback is invoked to toggle the light.
- Every **10 seconds**, the bound lights are printed for monitoring purposes.

:::tip
The official routines are still being continuously updated, our documentation may not be able to synchronize the latest programs at the first time, if there is any discrepancy, please refer to **[Espressif's program examples](https://github.com/espressif/arduino-esp32/blob/3.0.7/libraries/Zigbee/examples/Zigbee_On_Off_Switch/Zigbee_On_Off_Switch.ino)**.
:::

```cpp title=Zigbee_On_Off_Switch.ino showLineNumbers
#ifndef ZIGBEE_MODE_ZCZR
#error "Zigbee coordinator mode is not selected in Tools->Zigbee mode"
#endif

#include "ZigbeeCore.h"
#include "ep/ZigbeeLight.h"

#define SWITCH_ENDPOINT_NUMBER 5

/* Switch configuration */
#define GPIO_INPUT_IO_TOGGLE_SWITCH 9
#define PAIR_SIZE(TYPE_STR_PAIR)    (sizeof(TYPE_STR_PAIR) / sizeof(TYPE_STR_PAIR[0]))

typedef enum {
  SWITCH_ON_CONTROL,
  SWITCH_OFF_CONTROL,
  SWITCH_ONOFF_TOGGLE_CONTROL,
  SWITCH_LEVEL_UP_CONTROL,
  SWITCH_LEVEL_DOWN_CONTROL,
  SWITCH_LEVEL_CYCLE_CONTROL,
  SWITCH_COLOR_CONTROL,
} SwitchFunction;

typedef struct {
  uint8_t pin;
  SwitchFunction func;
} SwitchData;

typedef enum {
  SWITCH_IDLE,
  SWITCH_PRESS_ARMED,
  SWITCH_PRESS_DETECTED,
  SWITCH_PRESSED,
  SWITCH_RELEASE_DETECTED,
} SwitchState;

static SwitchData buttonFunctionPair[] = {{GPIO_INPUT_IO_TOGGLE_SWITCH, SWITCH_ONOFF_TOGGLE_CONTROL}};

ZigbeeSwitch zbSwitch = ZigbeeSwitch(SWITCH_ENDPOINT_NUMBER);

/********************* Zigbee functions **************************/
static void onZbButton(SwitchData *button_func_pair) {
  if (button_func_pair->func == SWITCH_ONOFF_TOGGLE_CONTROL) {
    // Send toggle command to the light
    zbSwitch.lightToggle();
  }
}

/********************* GPIO functions **************************/
static QueueHandle_t gpio_evt_queue = NULL;

static void IRAM_ATTR onGpioInterrupt(void *arg) {
  xQueueSendFromISR(gpio_evt_queue, (SwitchData *)arg, NULL);
}

static void enableGpioInterrupt(bool enabled) {
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); ++i) {
    if (enabled) {
      enableInterrupt((buttonFunctionPair[i]).pin);
    } else {
      disableInterrupt((buttonFunctionPair[i]).pin);
    }
  }
}

/********************* Arduino functions **************************/
void setup() {

  Serial.begin(115200);
  while (!Serial) {
    delay(10);
  }

  //Optional: set Zigbee device name and model
  zbSwitch.setManufacturerAndModel("Espressif", "ZigbeeSwitch");

  //Optional to allow multiple light to bind to the switch
  zbSwitch.allowMultipleBinding(true);

  //Add endpoint to Zigbee Core
  log_d("Adding ZigbeeSwitch endpoint to Zigbee Core");
  Zigbee.addEndpoint(&zbSwitch);

  //Open network for 180 seconds after boot
  Zigbee.setRebootOpenNetwork(180);

  // Init button switch
  for (int i = 0; i < PAIR_SIZE(buttonFunctionPair); i++) {
    pinMode(buttonFunctionPair[i].pin, INPUT_PULLUP);
    /* create a queue to handle gpio event from isr */
    gpio_evt_queue = xQueueCreate(10, sizeof(SwitchData));
    if (gpio_evt_queue == 0) {
      log_e("Queue was not created and must not be used");
      while (1);
    }
    attachInterruptArg(buttonFunctionPair[i].pin, onGpioInterrupt, (void *)(buttonFunctionPair + i), FALLING);
  }

  // When all EPs are registered, start Zigbee with ZIGBEE_COORDINATOR mode
  log_d("Calling Zigbee.begin()");
  Zigbee.begin(ZIGBEE_COORDINATOR);

  Serial.println("Waiting for Light to bound to the switch");
  //Wait for switch to bound to a light:
  while (!zbSwitch.isBound()) {
    Serial.printf(".");
    delay(500);
  }

  // Optional: read manufacturer and model name from the bound light
  std::list<zb_device_params_t *> boundLights = zbSwitch.getBoundDevices();
  //List all bound lights
  for (const auto &device : boundLights) {
    Serial.printf("Device on endpoint %d, short address: 0x%x\n", device->endpoint, device->short_addr);
    Serial.printf(
      "IEEE Address: %02X:%02X:%02X:%02X:%02X:%02X:%02X:%02X\n", device->ieee_addr[0], device->ieee_addr[1], device->ieee_addr[2], device->ieee_addr[3],
      device->ieee_addr[4], device->ieee_addr[5], device->ieee_addr[6], device->ieee_addr[7]
    );
    Serial.printf("Light manufacturer: %s", zbSwitch.readManufacturer(device->endpoint, device->short_addr));
    Serial.printf("Light model: %s", zbSwitch.readModel(device->endpoint, device->short_addr));
  }

  Serial.println();
}

void loop() {
  // Handle button switch in loop()
  uint8_t pin = 0;
  SwitchData buttonSwitch;
  static SwitchState buttonState = SWITCH_IDLE;
  bool eventFlag = false;

  /* check if there is any queue received, if yes read out the buttonSwitch */
  if (xQueueReceive(gpio_evt_queue, &buttonSwitch, portMAX_DELAY)) {
    pin = buttonSwitch.pin;
    enableGpioInterrupt(false);
    eventFlag = true;
  }
  while (eventFlag) {
    bool value = digitalRead(pin);
    switch (buttonState) {
      case SWITCH_IDLE:           buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_IDLE; break;
      case SWITCH_PRESS_DETECTED: buttonState = (value == LOW) ? SWITCH_PRESS_DETECTED : SWITCH_RELEASE_DETECTED; break;
      case SWITCH_RELEASE_DETECTED:
        buttonState = SWITCH_IDLE;
        /* callback to button_handler */
        (*onZbButton)(&buttonSwitch);
        break;
      default: break;
    }
    if (buttonState == SWITCH_IDLE) {
      enableGpioInterrupt(true);
      eventFlag = false;
      break;
    }
    vTaskDelay(10 / portTICK_PERIOD_MS);
  }

  // print the bound lights every 10 seconds
  static uint32_t lastPrint = 0;
  if (millis() - lastPrint > 10000) {
    lastPrint = millis();
    zbSwitch.printBoundDevices();
  }
}
```

#### Demonstration

<div class="video-container">
<iframe
  className="youtube-video-r"
  src="https://www.youtube.com/embed/Z2NROYx7hcQ"
  title="XIAO Zigbe Light bulb/switch Example"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  style={{ width: '380px', height: '640px' }}
></iframe>
</div>

Congratulations on successfully completing your Zigbee-controlled lighting project! There are many more exciting Zigbee applications waiting for you to explore. Keep up the great work!

## Reference

- [Zigbee Examples- Arduino](https://github.com/espressif/arduino-esp32/blob/master/libraries/Zigbee/examples)
- [ESP Zigbee SDK](https://docs.espressif.com/projects/esp-zigbee-sdk/en/latest/esp32c6/introduction.html)
- [Arduino Core for ESP32 gets a Zigbee wrapper library](https://www.cnx-software.com/2024/08/23/arduino-core-for-esp32-gets-a-zigbee-wrapper-library/)

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
