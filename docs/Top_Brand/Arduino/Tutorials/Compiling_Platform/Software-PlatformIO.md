---
description: PlatformIO for Arduino-supported Boards
title: PlatformIO for Arduino-supported Boards
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Software-PlatformIO
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# How to Use PlatformIO IDE For Arduino Programming

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO.gif"/></div>

As you may have experienced, Arduino IDE may not be the best IDE for **Arduino Programming** when it comes to productivity, here introduces you a more developing-friendly option! Developing [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) and [**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) in your favorite developing environment using [**PlatformIO IDE**](https://platformio.org/) in [Microsoft Visual Studio Code](https://code.visualstudio.com/)!

## What is PlatformIO

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO.png"/></div>

[**PlatformIO**](https://platformio.org/) is a cross-platform, cross-architecture, multi-framework professional IDE tool for embedded system and software engineers who write embedded applications. By providing a universal IDE interface using PlatformIO, you are able to program your hardware in a more developing-friendly way!

In this wiki, you will be able to configure PlatformIO to support [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) and [**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) to begin your programming!

*For more information, please visit [PlatformIO](https://docs.platformio.org/en/latest/)*

## Getting Started with Platform IO IDE

PlatformIO supports some of the most popular IDEs and text-editors as plugins. In this wiki, **PlatformIO for VSCode** is used for example.

For other IDEs, please check the followings for reference:

- For [CLion](https://docs.platformio.org/en/latest/integration/ide/clion.html#ide-clion)

- [PlatformIO Core (CLI)](https://docs.platformio.org/en/latest/core/index.html#piocore)

### PlatfromIO for VSCode

- **STEP1. Download VSCode**

Download and Install the [Microsoft Visual Studio Code](https://code.visualstudio.com/)

- **STEP2. Download the PlatformIO IDE Plugins for VSCode**

Open the **Extensions Market** in VS Code by clicking the **Extensions** on the left panel or use the keyboard shortcut:

:::note
Keyboard Shortcut: `Shift+CTRL+X` in **Windows** or `Shift+CMD+X` in **macOS**.
:::

Search **`PlatfromIO`** in the Extension Market and click **Install**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-1.png"/></div>

- **STEP3. Opening PlatformIO Home Page**

Click on “PlatformIO Home” button on the bottom PlatformIO toolbar

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-2.png"/></div>

Now, PlatformIO is installed on to your PC!

## Configurations for Wio Terminal and Seeeduino XIAO

**Wio Terminal and Seeeduino XIAO are now officially supported by PlatformIO:**

1. Navigate to the root location of PlatformIO:

      - For **Unix**: `~/.platformio`

      - For **Windows**: `C:\Users\{username}\.platformio` where `{username}` is your user name.

2. Navigate to `platforms` folder.

3. Download the configured [`platform-atmelsam`](https://github.com/platformio/platform-atmelsam.git) to the `platforms` folder.

<div align="center"><img  src="https://files.seeedstudio.com/wiki/platformIO/platformIO-3.png"/></div>

### Supported Boards

The configured `platform-atmelsam` supports the following boards:

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- Seeeduino Zero Series:
  - [Seeeduino Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)
  - [Seeeduino Lotus Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)
  - [Wio Lite W600 - ATSAMD21 Cortex-M0 Wireless Development Board](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
  - [Wio Lite MG126 - ATSAMD21 Cortex-M0 Blue Wireless Development Board](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- [Seeeduino LoRaWAN](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html)

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#d9f5f3', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#83dfd3', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Tip.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{fontWeight: 'bold', marginTop: 10}}>Tip</p>
    <p style={{fontSize: 14}}>Already merged, soon it will no longer need to do this manually.</p>
  </div>
</div>

## Quick Start

This tutorial introduces you the basics of PlatformIO IDE workflow and demonstrates a simple "Blink" example on Wio Terminal.

- Click the **PlatformIO Home** button.

- Click on **New Project** and select `Seeed Wio Terminal` as board.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/platformIO/platformIO-4.png"/></div>

- Open `main.cpp` under `src` folder and copy the followings:

```cpp
#include <Arduino.h>

void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);                       // wait for a second
}
```

- Open the `platformio.ini` configuration file and check it's correct:

```ini
[env:seeed_wio_terminal]
platform = atmelsam
board = seeed_wio_terminal
framework = arduino
```

- Build the project the **Build** button on the PlatformIO toolbar or Keyboard shortcuts.

:::note
        Build Projects: `ctrl+alt+b` in **Windows** or `cmd+shift+b` in **macOS**.
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-5.png"/></div>

- Upload the project to Wio Terminal by clicking the **Upload** button on the PlatformIO toolbar.

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-6.png"/></div>

- Now you should see the Wio Terminal's LED blinking!

*For more PlatformIO For VSCode Getting Started, please also refer to [here](https://docs.platformio.org/en/latest/integration/ide/vscode.html)
.*

## Adding Libraries to PlatformIO

### Importing Libraries Directly

To import libraries directly to PlatformIO from Github, you can configure the `platform.ini` and add the `lib_deps` with the dependent library url as followed:

```ini
lib_deps = https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR
```

**- Example Usage:**

```cpp
#include <Arduino.h>
#include<LIS3DHTR.h>

LIS3DHTR<TwoWire> lis;

void setup() {
  Serial.begin(115200);
  lis.begin(Wire1);

  if (!lis) {
    Serial.println("ERROR");
    while(1);
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g
}

void loop() {
  float x_values, y_values, z_values;
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();

  Serial.print("X: "); Serial.print(x_values);
  Serial.print(" Y: "); Serial.print(y_values);
  Serial.print(" Z: "); Serial.print(z_values);
  Serial.println();
  delay(50);
}
```

### Importing from Arduino

Other way to import libraries is that to point to the Arduino library path in the `platform.ini` config file, For Example:

```ini
lib_extra_dirs = /Users/{username}/Documents/Arduino/libraries
```

:::caution
This is a not direct path to a library with source code. It should be a path to storage that contains libraries grouped by folders. For example, `D:\PlatformIO\extra\libraries` but not `D:\PlatformIO\extra\libraries\FooLibrary`.
:::

For more Library options, please see [**PlatformIO Library docs**](https://docs.platformio.org/en/latest/projectconf/section_env_library.html).

## Using the Latest ArduinoCore Library for Seeed

The ArduinoCore in PlatformIO is maintained by PlatformIO itself and sometimes, it is not up to date with the latest released version from Seeed. In this case, you may use the following `platform.ini`, for Example:

```ini
; PlatformIO Project Configuration File
;
;   Build options: build flags, source filter
;   Upload options: custom upload port, speed and extra flags
;   Library options: dependencies, extra library storages
;   Advanced options: extra scripting
;
; Please visit documentation for the other options and examples
; https://docs.platformio.org/page/projectconf.html

[env:seeed_wio_terminal]
platform = atmelsam
board = seeed_wio_terminal
framework = arduino
platform_packages = framework-arduino-samd-seeed@https://github.com/Seeed-Studio/ArduinoCore-samd.git
```

## Other Useful Features of PlatformIO

- [Serial Monitors](https://docs.platformio.org/en/latest/integration/ide/vscode.html#serial-port-monitor)

- [Debugging](https://docs.platformio.org/en/latest/integration/ide/vscode.html#debugging)
