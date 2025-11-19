---
description: EE04 ePaper Display with EEZ Studio
title: EE04 ePaper Display Board(ESP32-S3) with EEZ Studio
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/bus_servo_driver_board/10.webp
sidebar_position: 1
slug: /epaper_ee04_eezstudio
last_update:
  date: 09/28/2025
  author: Zeller
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_2_2.jpg" style={{width:600, height:'auto'}}/></div>

This tutorial uses the XIAO ePaper Display Board(ESP32-S3) - EE04, based on EEZ Studio and by compiling and uploading the program using the Arduino IDE.

## [EEZ Studio](https://www.envox.eu/studio/studio-introduction/)

EEZ Studio represents a unique solution when both rapid development of an attractive GUI and remote control of devices for test and measurement (T&M) automation is required.

Created by a team with first-hand experience in designing resource-constrained [complex](https://www.envox.eu/eez-bb3) embedded devices, EEZ Studio enables the design of responsive desktops and embedded GUIs using the **drag** & **drop** and flowcharting visual programming. A series of in-house developed Widgets and Actions as well as [LVGL](https://github.com/lvgl/lvgl) support (both 8.x & 9.x) and read-to-go project templates and examples enable rapid prototyping as well as development of final applications.

### Hardware

Before starting to read this tutorial, please make sure that you have all the necessary items listed below ready.

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board(ESP32-S3) - EE04</th>
        <th>5.83 inch monochrome ePaper</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_Pre_1.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### Create project

At the top, select **Create**, then click on **LVGL**, and in the adjacent **PROJECT SETTING** section, set the required parameters.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/create_project_1.png" style={{width:800, height:'auto'}}/></div>

- Name: Project name
- LVGL version： Select version 9.x
- Location: The location for storing engineering files can be set to the default path or customized according to actual requirements.
- Project file path: The path of the engineering files. This path will be used later (this path is the default path on the computer; you can also customize the path)

### Engineering Page Intro

Below are some basic settings and controls for LVGL-based UI drawing in EEZ Studio, as well as the construction of the project files.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/create_project_3.png" style={{width:800, height:'auto'}}/></div>

- At the top (from left to right):

  - Save: Save the project

  - Check: Check the project

  - Build: Build the project and generate files

  - Settings: Modify parameter settings

  - Edit: Edit and draw on the main page

  - Run: Preview the drawing effect of the created design

  - Debug: Debug the drawn interface

- Pages: Manage pages. click **+** to add a new page

- Widgets Structure: Widget management, which allows you to intuitively manage and select your widgets

- Variables: The core data management mechanism that connects UI widgets, Flow logic, and Action Script

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/create_project_2.png" style={{width:800, height:'auto'}}/></div>

- Properties: Used to set and view the property parameters of objects or components  

- Components Palette: Provides a list of optional components, which can be dragged and dropped into the design interface for use

- Styles: Define and apply style rules for unified fonts to maintain consistency  

- Fonts: Manage the font resources used in the project and their size settings  

- Bitmaps: Import and manage bitmap resource files such as images and icons  

- Themes: Create and apply unified color themes and visual style suites  

- Groups: Combine and manage multiple components to enable simultaneous operation and batch control  

### Building Project Files

This project is designed for a **5.83" Monochrome eInk display with a resolution of 648*480**. Therefore, some key parameters need to be modified.

**Step 1.** Select **Settings**, then in the **General** tab, change **Display width** and **Display height** to 648 and 480 respectively.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_1.png" style={{width:800, height:'auto'}}/></div>

**Step 2.** Modify the generated files

- Rename the folder path **src/ui** to **src/EEZ_UI**;  all code files generated by EEZ Studio will be stored in this folder.

- In the **Build** tab, change **LVGL include** to **lvgl.h**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_2.png" style={{width:800, height:'auto'}}/></div>

**Step 3.** Build the project

- Return to the **Main** interface and drag **Hello World** to the center of the screen.
- In the **STYLE** tab, adjust the font size or color.
- Select the option to build the project. If no errors are displayed in the **OUTPUT** panel, the project has been built successfully.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_3.png" style={{width:800, height:'auto'}}/></div>

Next, deploy the built project files to the **Arduino IDE**, then upload them to the corresponding hardware device for display.

### Arduino IDE Setup

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

**Step 1.** Download and install the [Arduino IDE](https://www.arduino.cc/en/software) and launch the Arduino application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div><br />

**Step 2.** Add ESP32 board support to Arduino IDE.

In Arduino IDE, go to **File > Preferences** and add the following URL to the **Additional Boards Manager URLs** field:

```js
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**Step 3.** Install ESP32 board package.

Navigate to **Tools > Board > Boards Manager**, search for **esp32** and install the ESP32 package by Espressif Systems.

**Step 4.** Select the correct board.

Go to **Tools > Board > ESP32 Arduino** and select **XIAO_ESP32S3_PLUS**.

**Step 5.** Connect your reTerminal E Series ePaper Display to your computer using a USB-C cable.

**Step 6.** Select the correct port from **Tools > Port**.

### Import the Seeed_GFX library

We'll use the Seeed_GFX library, which provides comprehensive support for various Seeed Studio display devices.

**Step 1.** Download the Seeed_GFX library from GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Step 2.** Install the library by adding the ZIP file in Arduino IDE. Go to **Sketch > Include Library > Add .ZIP Library** and select the downloaded ZIP file.

:::tip
If you have previously installed the TFT_eSPI library, you may need to temporarily remove or rename it from your Arduino libraries folder to avoid conflicts, as Seeed_GFX is a fork of TFT_eSPI with additional features for Seeed Studio displays.
:::

**Step 3.** Open the color example sketch from the Seeed_GFX library: **File > Examples > Seeed_GFX > ePaper > Colorful > HelloWorld**

**Step 4.** Create a new `driver.h` file  

[Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)

- Enter the specifications of the display you are using on the tool page. Here, the selected display is the **5.83 inch monochrome ePaper Screen （UC8179）**, and the driver board is the **XIAO ePaper Display Board(ESP32-S3) - EE04**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_4_1.png" style={{width:800, height:'auto'}}/></div>

- Copy the program and save it to `driver.h`.

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.83 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/build_project_5_1.png" style={{width:800, height:'auto'}}/></div>

:::tip
If you make the wrong choice, the screen will display nothing.
So please make sure your devices or components type.
:::

### Deploy to Arduino

**Step 1.** Add the files `e1002_display.c` , `e1002_display.h`  `lv_conf.h`, and the lvgl library.The board should be selected as XIAO_ESP32S3.

- [Click to obtain the relevant files](https://wiki.seeedstudio.com/epaper_ee04_eezstudio/#reference--resources)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_1_1.png" style={{width:800, height:'auto'}}/></div>

**Step 2.** Add the generated EEZ_UI code files to the library folder (The default storage path for Arduino IDE libraries is `C:\Users\Users_name\Documents\Arduino\Libraries`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_2.png" style={{width:800, height:'auto'}}/></div>

**Step 3.** Upload the program to the device.

<details>

<summary>EEZ_UI_EE04.ino</summary>

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>
#include <ui.h>
#include "e1002_display.h"

int32_t page_index;

e1002_driver_t e1002_driver;

void setup()
{
  Serial.begin(115200);

  String LVGL_Arduino = "UI Dashboard - LVGL ";
  LVGL_Arduino += String('V') + lv_version_major() + "." +
                  lv_version_minor() + "." + lv_version_patch();
  Serial.println(LVGL_Arduino);

  Serial.println("Initializing e-paper display...");
  e1002_display_init(&e1002_driver);

  ui_init();
  page_index = SCREEN_ID_MAIN;
  loadScreen((ScreensEnum)page_index);
  e1002_display_refresh(&e1002_driver);

}

void loop()
{
  lv_timer_handler();
  ui_tick();


  if (e1002_display_should_refresh(&e1002_driver))
  {
    Serial.println("Refreshing e-paper display...");
    e1002_display_refresh(&e1002_driver);
    Serial.println("Display refresh complete");
  }

  delay(10);
}
```

# Code Explanation  

1. **Header File Inclusion**: Includes the TFT display library, LVGL graphics library, UI interface definition file (`ui.h`), and e-paper display driver (`e1002_display.h`).  

2. **Global Variables**:  
   - `page_index`: Used to record the index of the currently displayed page.  
   - `e1002_driver`: Driver object for the e-paper display.  

3. **setup() Function (Initialization)**:  
   - Initializes serial communication (baud rate: 115200) for printing debugging information.  
   - Prints LVGL library version information (e.g., "Smart Home Dashboard - LVGL Vx.x.x").  
   - Initializes the e-paper display (`e1002_display_init`).  
   - Initializes the UI interface (`ui_init`).  
   - Sets the initial page to "Main Screen" (`SCREEN_ID_MAIN`) and loads it.  
   - Refreshes the e-paper display to show the initial interface.  

4. **loop() Function (Main Loop)**:  
   - Processes LVGL timers and events (`lv_timer_handler`).  
   - Processes scheduled tasks for the UI interface (`ui_tick`).  
   - Checks if the e-paper display needs to be refreshed (`e1002_display_should_refresh`); if so, performs the refresh and prints a log.  
   - Loops every 10 milliseconds to ensure system responsiveness.  

</details>

Effect demonstration:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/upload_3.jpg" style={{width:600, height:'auto'}}/></div>

## UI Design  

Next, we will demonstrate a UI example created with EEZ Studio, to further illustrate its capabilities in interface design.

When designing LVGL interfaces with EEZ Studio, you may find the following tools particularly useful:

- An online color palette generator for quickly creating, adjusting, and exporting color schemes: [Color](https://coolors.co/)  
- An online color palette tool for finding and matching web color schemes: [Color Chart](https://peiseka.com/)  
- A large vector icon library platform for downloading and managing icons：[Icon](https://www.iconfont.cn/?spm=a313x.search_index.i3.3.559b3a81C6d3Cl)  
- A free font resource site for browsing and downloading commercially usable fonts: [Font](https://fonts.google.com/)  

### UI Drawing Introduction  

- Effect picture:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_project_1_1.png" style={{width:800, height:'auto'}}/></div>  

This UI is composed of four components:

- Label  
- Line  
- Checkbox  
- Image  

**Step 1.** Change the canvas background color  

The default background color is white; you can change it according to your preferences.  

- Select the canvas for which you want to change the background color.  

- Check the **Color** option, then select your preferred hexadecimal color code.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_project_2_1.png" style={{width:800, height:'auto'}}/></div>  

**Step 2.** Add a Label  

- Drag the **Label** component into the canvas, then select the desired font size and color.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_label_1_2.png" style={{width:800, height:'auto'}}/></div>  

**Step 3.** Add a line  

- Drag the **Line** component into the canvas, and set the start and end points in the **Points** section to determine the line’s length and position. Reference points: 0,0 0,0 0,0 0,0,648,0

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_line_1_2.png" style={{width:800, height:'auto'}}/></div>

**Step 4.** Add bitmaps  

- Click the **Bitmaps** option in the right sidebar and add the required images.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_bitmaps_1_2.png" style={{width:800, height:'auto'}}/></div>  

- Name the images as needed.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_bitmaps_2_2.png" style={{width:800, height:'auto'}}/></div>  

- Drag and drop the **Image** component into the canvas, and use the **Scale** option to set its size.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_bitmaps_3_2.png" style={{width:800, height:'auto'}}/></div>  

**Step 5.** Add a Checkbox  

- Drag the **Checkbox** component into the canvas, enter the content, then adjust the font size and color.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_checkout_1_2.png" style={{width:800, height:'auto'}}/></div>  

### Deployment and Demonstration  

- Deployment  
  - Add the header files: `driver.h`, `e1002_display.c`, `e1002_display.h`, and `lv_conf.h`.  
  - Add the **EEZ_UI** files to the library folder of the Arduino IDE.  

Complete reference code: [EEZ_UI.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EEZ_UI_EE04.zip)  

<details>
<summary>EEZ_UI_EE04.ino</summary>

```cpp
#include <TFT_eSPI.h>
#include <lvgl.h>
#include <ui.h>
#include "e1002_display.h"

const int BUTTON_KEY1 = 2;
const int BUTTON_KEY2 = 3;
const int BUTTON_KEY3 = 5;

int32_t page_index;

bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

unsigned long lastDebounceTime0 = 0;
unsigned long lastDebounceTime1 = 0;
unsigned long lastDebounceTime2 = 0;
const unsigned long debounceDelay = 120;

e1002_driver_t e1002_driver;

unsigned long lastFullRefreshTime = 0;
const unsigned long fullRefreshCooldown = 1500;

bool buttonPressed(int pin, bool &lastState, unsigned long &lastDebounceTime)
{
  bool currentState = digitalRead(pin);

  if (lastState == HIGH && currentState == LOW &&
      (millis() - lastDebounceTime) > debounceDelay)
  {
    lastDebounceTime = millis();
    lastState = currentState;
    return true;
  }

  lastState = currentState;
  return false;
}

void switchPage(ScreensEnum targetScreen, const char *pageName)
{

  if (millis() - lastFullRefreshTime < fullRefreshCooldown)
  {
    Serial.println("[Skip] Refresh cooling down...");
    return;
  }

  Serial.printf("Switching to %s ...\n", pageName);

  e1002_driver.epd->fillScreen(TFT_WHITE);
  e1002_driver.epd->update();

  loadScreen(targetScreen);

  e1002_display_refresh(&e1002_driver);

  lastFullRefreshTime = millis();
  Serial.printf("[OK] %s refreshed.\n", pageName);
}

void setup()
{
  Serial.begin(115200);

  String LVGL_Arduino = "Smart Home Dashboard - LVGL ";
  LVGL_Arduino += String('V') + lv_version_major() + "." +
                  lv_version_minor() + "." + lv_version_patch();
  Serial.println(LVGL_Arduino);

  Serial.println("Initializing e-paper display...");
  e1002_display_init(&e1002_driver);

  pinMode(BUTTON_KEY1, INPUT_PULLUP);
  pinMode(BUTTON_KEY2, INPUT_PULLUP);
  pinMode(BUTTON_KEY3, INPUT_PULLUP);

  ui_init();
  page_index = SCREEN_ID_SMART;
  loadScreen((ScreensEnum)page_index);
  e1002_display_refresh(&e1002_driver);

  Serial.println("Boot: Main Screen");
}

void loop()
{0
  lv_timer_handler();
  ui_tick();

  if (buttonPressed(BUTTON_KEY1, lastKey0State, lastDebounceTime0))
  {
    page_index = SCREEN_ID_SMART;
    switchPage((ScreensEnum)page_index, "Main Screen");
  }

  if (buttonPressed(BUTTON_KEY2, lastKey1State, lastDebounceTime1))
  {
    page_index = SCREEN_ID_INDUSTRY;
    switchPage((ScreensEnum)page_index, "Plant Screen");
  }

  if (buttonPressed(BUTTON_KEY3, lastKey2State, lastDebounceTime2))
  {
    page_index = SCREEN_ID_GAME;
    switchPage((ScreensEnum)page_index, "Workstation Screen");
  }

  if (e1002_display_should_refresh(&e1002_driver))
  {
    Serial.println("Refreshing e-paper display...");
    e1002_display_refresh(&e1002_driver);
    Serial.println("Display refresh complete");
  }

  delay(10);
}
```

</details>

- Effect demonstration:<br/>
Three different UI screens are displayed here, and the **XIAO ePaper Display Board (ESP32-S3) – EE04** utilizes its three onboard buttons to switch between these screens.The corresponding screen for each button is:<br/>
KEY1: Smart<br/>
KEY2: Industry<br/>
KEY3: Game

<div class="table-center">
<table align="center">
    <tr>
        <th>Smart</th>
        <th>Industry</th>
        <th>Game</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_1_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_2_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ui_effect_3_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
 </table>
</div>

## Reference & Resources

- Drive-related files (Click to download)
  - [e1002_display.c](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.cpp)
  - [e1002_display.h](https://files.seeedstudio.com/wiki/Epaper/EE04/e1002_display.h)
  - [lv_conf.h](https://files.seeedstudio.com/wiki/Epaper/EE04/lv_conf.h)

- 3D Shell of 5.83"
  - [front](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''front.step)
  - [back](https://files.seeedstudio.com/wiki/Epaper/EE04/5.83''back.step)

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
