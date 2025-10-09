---
description: PlatfromIO with EE04
title: EE04 with PlatfromIO
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/bus_servo_driver_board/10.webp
sidebar_position: 1
slug: /e04_with_platformio
last_update:
  date: 10/10/2025
  author: Zeller
---

Hardware Preparation

You need to prepare a XIAO ePaper Display Board EE04 along with screens of the supported size.
<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE04</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

XIAO ePaper Display Board EE04支持不同尺寸和不同引脚数的屏幕，本教程使用的24pin的800×480的7.5-inch 的墨水屏<br/>

**Link**:  [Supported screen link](https://wiki.seeedstudio.com/epaper_ee04/#supported-eink)
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/
platformIO_nrf54l15.png" style={{width:800, height:'auto'}}/></div>

## PlatformIO Introduce

PlatformIO stands as a powerful and highly extensible development ecosystem designed for embedded systems. It seamlessly integrates support for a vast array of development boards and microcontrollers, offering unparalleled flexibility. What sets PlatformIO apart is its remarkable scalability: even if your specific board isn't natively supported, its architecture allows for straightforward custom board definitions.

Crucially, PlatformIO bridges the gap for developers familiar with Arduino, enabling the compilation and deployment of Arduino-style code by simply including the relevant libraries.

### Download Vscode

Download according to the system you are using[Vscode](https://code.visualstudio.com/download)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### Install the PlatformIO

Open VSCode, click on Extensions, then search for PlatformIO and select to install. After the installation is complete, restart VSCode.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### New Project

- Open the PIO Home interface and select `New Project`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_1.png" style={{width:800, height:'auto'}}/></div>

- Name: Name your project name
- Board: Select Seeed Studio XIAO ESP32S3
- Framework: Select Ardunio
- Location: The path of the engineering files can be set as a custom path or the default path can be selected.
- Click "Finish" and wait for the creation to be completed. Then, open the project file in the workspace.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_2.png" style={{width:800, height:'auto'}}/></div>

### Add the Seeed GFX library

:::tip
This library has same function as TFT library and no compatible with it. If you have installed TFT library or other similary display libraries, please uninstall it first.
:::

We'll use the Seeed_GFX library, which provides comprehensive support for various Seeed Studio display devices.

**Step 1.** Download the Seeed_GFX library from GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Step 2.** Move the extracted files to the `lib` directory of the project files.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_add_library_1.png" style={{width:800, height:'auto'}}/></div>

**Step 3.** Add `driver.h` file

[Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)
<!-- 在工具页面中选择您所使用的屏幕规格。在此处，所选选项为 7.5 英寸单色电子纸屏幕。 -->

- On the tool page, select the screen specification you are using. Here, the selected option is a 7.5-inch monochrome e-paper screen.
- Select the XIAO ePaper Display Board EE04 for the driver board, and then the corresponding driver code will be generated.

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

:::tip
If you make the wrong choice, the screen will display nothing.
So please make sure your devices or components type.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_add_driver_1.png" style={{width:800, height:'auto'}}/></div>

- Create a new `driver` folder under the `lib` directory of the PlatfromIO project file, then add the `driver.h` file. Copy the generated header file code and press Ctrl + S to save.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_add_driver_2.png" style={{width:800, height:'auto'}}/></div>

### Upload

Copy the code to `main.cpp`, click `Build`, and after completion, upload.

```cpp
#include "TFT_eSPI.h"

#ifdef EPAPER_ENABLE // Only compile this code if the EPAPER_ENABLE is defined in User_Setup.h
EPaper epaper;
#endif

void setup()
{
#ifdef EPAPER_ENABLE
    epaper.begin();
    epaper.fillScreen(TFT_WHITE);

    epaper.fillCircle(25, 25, 15, TFT_BLACK);
    epaper.fillRect(epaper.width() - 40,  10, 30, 30, TFT_BLACK);
    
    for (int i = 0; i < epaper.height() / 80; i++)
    {
        epaper.setTextSize(i + 1);
        epaper.drawLine(10, 70 + 60 * i, epaper.width() - 10, 70 + 60 * i, TFT_BLACK);
        epaper.drawString("Hello EE04", 10, 80 + 60 * i);
    }
    
    epaper.update(); // update the display

#endif
}

void loop()
{
    // put your main code here, to run repeatedly:
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_upload_2.png" style={{width:800, height:'auto'}}/></div>

- Effect demonstration

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_show_1.jpg" style={{width:800, height:'auto'}}/></div>

### User button

he EE04 features three user-programmable buttons that can be used for various control purposes. This section demonstrates how to read button states and respond to button presses using Arduino.

On the EE04, the three buttons are connected to the ESP32-S3:

- KEY1 (GPIO2_D1/A1)
- KEY2 (GPIO3_D2/A2)
- KEY3 (GPIO5_D4/A4)

All buttons are active-low, meaning they read LOW when pressed and HIGH when released.

Basic Button Reading Example

This example demonstrates how to detect button presses and print messages to the serial monitor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/39.jpg" style={{width:700, height:'auto'}}/></div>

<br></br>

```cpp
#include <Arduino.h>
// reTerminal E Series - Button Test
// Based on hardware schematic

// Define button pins according to schematic
const int BUTTON_KEY0 = 2;   // KEY0 - GPIO2
const int BUTTON_KEY1 = 3;   // KEY1 - GPIO3
const int BUTTON_KEY2 = 5;   // KEY2 - GPIO5

// Button state variables
bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  while (!Serial) {
    delay(10); // Wait for serial port to connect
  }
  
  Serial.println("=================================");
  Serial.println("Press any button to see output");
  Serial.println();
  
  // Configure button pins as inputs
  // Hardware already has pull-up resistors, so use INPUT mode
  pinMode(BUTTON_KEY0, INPUT_PULLUP);
  pinMode(BUTTON_KEY1, INPUT_PULLUP);
  pinMode(BUTTON_KEY2, INPUT_PULLUP);
  
  // Read initial states
  lastKey0State = digitalRead(BUTTON_KEY0);
  lastKey1State = digitalRead(BUTTON_KEY1);
  lastKey2State = digitalRead(BUTTON_KEY2);
  
  Serial.println("Setup complete. Ready to detect button presses...");
}

void loop() {
  // Read current button states
  bool key0State = digitalRead(BUTTON_KEY0);
  bool key1State = digitalRead(BUTTON_KEY1);
  bool key2State = digitalRead(BUTTON_KEY2);
  
  // Check KEY1
  if (key0State != lastKey0State) {
    if (key0State == LOW) {
      Serial.println("KEY0 (GPIO2) pressed!");
    } else {
      Serial.println("KEY0 (GPIO2) released!");
    }
    lastKey0State = key0State;
    delay(50); // Debounce delay
  }
  
  // Check KEY2
  if (key1State != lastKey1State) {
    if (key1State == LOW) {
      Serial.println("KEY1 (GPIO3) pressed!");
    } else {
      Serial.println("KEY1 (GPIO3) released!");
    }
    lastKey1State = key1State;
    delay(50); // Debounce delay
  }
  
  // Check KEY3
  if (key2State != lastKey2State) {
    if (key2State == LOW) {
      Serial.println("KEY2 (GPIO5) pressed!");
    } else {
      Serial.println("KEY2 (GPIO5) released!");
    }
    lastKey2State = key2State;
    delay(50); // Debounce delay
  }
  
  delay(10); // Small delay to prevent excessive CPU usage
}
```

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
