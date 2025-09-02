---
description: This article describes how to get the reTerminal E Series ePaper Display to work with Arduino.
title: reTerminal E Series ePaper Display Work with Arduino
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/44.webp
slug: /reterminal_e10xx_with_arduino
sidebar_position: 4
last_update:
  date: 08/21/2025
  author: Allen
---

# Getting Started with reTerminal E Series ePaper Display in Arduino

## What is [Arduino](https://www.arduino.cc/)

Arduino is an open-source electronics platform based on easy-to-use hardware and software. It consists of microcontroller boards and an integrated development environment (IDE). Designed for artists, hobbyists, and engineers, it simplifies creating interactive projects—from robots to home automation. With a simple programming language and vast community support, users can easily write code, upload it to boards, and bring their electronic ideas to life. Its accessibility makes it popular for learning and innovation.

## Getting Started

Before diving into the specific features, let's set up our development environment for reTerminal E Series.

### Environmental Preparation

To program reTerminal E Series ePaper Display with Arduino, you'll need to set up the Arduino IDE with ESP32 support.

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

**Step 1.** Download and install the [Arduino IDE](https://www.arduino.cc/en/software) and Launch the Arduino application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div><br />

**Step 2.** Add ESP32 board support to Arduino IDE.

In Arduino IDE, go to **File > Preferences** and add the following URL to the "Additional Boards Manager URLs" field:

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**Step 3.** Install ESP32 board package.

Navigate to **Tools > Board > Boards Manager**, search for "esp32" and install the ESP32 package by Espressif Systems.

**Step 4.** Select the correct board.

Go to **Tools > Board > ESP32 Arduino** and select "XIAO_ESP32S3".

**Step 5.** Connect your reTerminal E Series ePaper Display to your computer using a USB-C cable.

**Step 6.** Select the correct port from **Tools > Port**.


## ePaper Display

The **reTerminal E1001 is a 7.5-inch black and white ePaper display** and the **reTerminal E1002 is a 7.3-inch full color ePaper display**. Both of them provide clear visibility in various lighting conditions and ultra-low power consumption. 

In this section, we'll explore how to set up and control the ePaper display using Arduino.

To control the ePaper display, we'll use the Seeed_GFX library, which provides comprehensive support for various Seeed Studio display devices.

**Step 1.** Download the Seeed_GFX library from GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


**Step 2.** Install the library by adding the ZIP file in Arduino IDE. Go to **Sketch > Include Library > Add .ZIP Library** and select the downloaded ZIP file.

:::note
If you have previously installed the TFT_eSPI library, you may need to temporarily remove or rename it from your Arduino libraries folder to avoid conflicts, as Seeed_GFX is a fork of TFT_eSPI with additional features.
:::

### reTerminal E1001(7.5-inch black and white ePaper)

Let's explore a simple  example that demonstrates how to draw something on the ePaper display. [This example](https://github.com/Seeed-Studio/Seeed_GFX/blob/master/examples/ePaper/Basic/HelloWorld/HelloWorld.ino) teach you how to draw a line, display words and display shapes.

**Step 3.** Open the example sketch from the Seeed_GFX library: **File > Seeed_GFX > Examples > ePaper > Basic > HelloWrold**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/demo.jpg" style={{width:800, height:'auto'}}/></div>

**Step 4.** Create a new file named `driver.h` and paste the configuration code into it. The code will be generated in next step.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select.jpg" style={{width:800, height:'auto'}}/></div>

**Step 5.** Go to the [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/), and select what type of device you are using. Take reTerminal E1001 as an example.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx.jpg" style={{width:800, height:'auto'}}/></div>

Copy the generated code and paste it into the `driver.h` file you created just now. The code should look like this:

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 （UC8179）
```

**Step 6.** Now you can upload the example to your device and see the ePaper display in action!

### reTerminal E1002(7.3-inch full color ePaper)

Let's explore a simple  example that demonstrates how to draw something on the ePaper display. [This example](https://github.com/Seeed-Studio/Seeed_GFX/blob/master/examples/ePaper/Colorful/HelloWorld/HelloWorld.ino) teach you how to draw a line, display words and display shapes.

**Step 3.** Open the example sketch from the Seeed_GFX library: **File > Seeed_GFX > Examples > ePaper > Basic > HelloWrold**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/driver2.jpg" style={{width:800, height:'auto'}}/></div>

**Step 4.** Create a new file named `driver.h` and paste the configuration code into it. The code will be generated in next step.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/select2.jpg" style={{width:800, height:'auto'}}/></div>

**Step 5.** Go to the [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/), and select what type of device you are using. Take reTerminal E1001 as an example.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/gfx2.jpg" style={{width:800, height:'auto'}}/></div>

Copy the generated code and paste it into the `driver.h` file you created just now. The code should look like this:

```cpp
#define BOARD_SCREEN_COMBO 520 // reTerminal E1001 （UC8179）
```

**Step 6.** Now you can upload the example to your device and see the ePaper display in action!


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/screen2.jpeg" style={{width:800, height:'auto'}}/></div>

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>


