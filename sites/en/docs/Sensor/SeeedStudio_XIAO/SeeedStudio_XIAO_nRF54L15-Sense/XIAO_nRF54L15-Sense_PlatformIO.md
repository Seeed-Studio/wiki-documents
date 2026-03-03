---
description: Seeed Studio XIAO nRF54L15 with PlatformIO
title: XIAO nRF54L15 with PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/mg24_platform/top_mg24_platform02.webp
slug: /xiao_nrf54l15_with_platform_io
last_update:
  date: 7/4/2025
  author: Jason
  sidebar_position: 5
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/
platformIO_nrf54l15.png" style={{width:600, height:'auto'}}/></div>

## PlatformIO Introduce

PlatformIO stands as a powerful and highly extensible development ecosystem designed for embedded systems. It seamlessly integrates support for a vast array of development boards and microcontrollers, offering unparalleled flexibility. What sets PlatformIO apart is its remarkable scalability: even if your specific board isn't natively supported, its architecture allows for straightforward custom board definitions.

Crucially, PlatformIO bridges the gap for developers familiar with Arduino, enabling the compilation and deployment of Arduino-style code by simply including the relevant libraries. This guide will walk you through the process of setting up PlatformIO for your XIAO nRF54L15 and demonstrate how to compile, upload, and monitor sample code, making complex Zephyr RTOS development remarkably accessible.

## Setting Up PlatformIO for XIAO nRF54L15

Follow these streamlined steps to configure your development environment and deploy your first application on the XIAO nRF54L15 Sense.


### Install PlatformIO IDE Extension for VS Code

If you haven't already, install the PlatformIO IDE extension directly within Visual Studio Code. This powerful extension transforms VS Code into a comprehensive embedded development environment.

- Open VS Code.

- Go to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X).

- Search for ["PlatformIO IDE"](https://platformio.org/platformio-ide) and click Install.


### Create a New PlatformIO Project

Here you can choose any one of the development version to create a project file, I take XIAO ESP32 C3 for example.

<table align="center">
  <tr>
      <th>Operation one</th>
        <th>Operation two</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_platform/mg24patform2.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/mg24_platformIO.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
</table>



### Configure platformio.ini for XIAO nRF54L15 Zephyr Support

Once your project is created, locate the platformio.ini file in the root of your project directory (visible in the VS Code Explorer on the left). This file is the heart of your PlatformIO project configuration.

<table align="center">
  <tr>
      <th>Operation three</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/platform54.jpg"/></div>
  </tr>
</table>


You need to replace the entire content of your platformio.ini file with the following configuration:

```
[env:seeed-xiao-nrf54l15]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54l15
```
:::tip
If you previously downloaded other XIAO libraries, you must manually delete them before modifying the platform.ini file and re-downloading the required libraries.
:::

Mac Path：
`/Users/YourName/.platformio/platforms`

Window Path：
`C:\Users\000.platformio\platforms\Seeed Studio`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/
platformmodify.jpg" style={{width:600, height:'auto'}}/></div>
<table align="center">
  <tr>
      <th>Operation four</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/platformiozephyr.jpg"/></div>
  </tr>
</table>

You need to replace the content of cMakeLists.txt with the following configuration
```
set(BOARD_ROOT "$ENV{ZEPHYR_BASE}/../../platforms/Seeed Studio/zephyr")
cmake_minimum_required(VERSION 3.13.1)

find_package(Zephyr REQUIRED HINTS $ENV{ZEPHYR_BASE})
project(blinky)

target_sources(app PRIVATE ../src/main.cpp) # If the main source file is.c, please change it to src/main.c
```
Then re-save the platformio.ini file (Ctrl+S or Cmd+S) and wait for it to load completely.

### Compile and Upload Your First Blink Example

Now, let's test your setup with a classic "Blink" example. This code will toggle the built-in LED on your XIAO nRF54L15.

Replace the content of your src/main.cpp (or src/main.c) file with the following Zephyr-compatible C code:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-blink" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


**Next we compile and burn using this code**

```cpp
/*
 * Copyright (c) 2016 Intel Corporation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

 #include <zephyr/kernel.h>
 #include <zephyr/device.h>
 #include <zephyr/drivers/gpio.h>
 #include <nrfx_power.h>
 
 /* 1000 msec = 1 sec */
 #define SLEEP_TIME_MS   1000
 
 /* The devicetree node identifier for the "led0" alias. */
 #define LED0_NODE DT_ALIAS(led0)
 
 static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);
 
 int main(void)
 {
	 int ret;
	 bool led_is_on = true;
	nrfx_power_constlat_mode_request();
	 if (!gpio_is_ready_dt(&led)) {
		 return -1;
	 }
 
	 ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE);
	 if (ret < 0) {
		 return ret;
	 }
 
	 while (1) {
		 ret = gpio_pin_set_dt(&led, (int)led_is_on);
		 if (ret < 0) {
			 return ret;
		 }
		 led_is_on = !led_is_on;
		 k_msleep(SLEEP_TIME_MS);
	 }
 
	 return 0;
 }

```

Now, connect your XIAO nRF54L15 to your computer via USB. In VS Code:

- Build: Click the "Build" icon (checkmark) in the PlatformIO toolbar at the bottom of VS Code, or use the PlatformIO sidebar: PROJECT TASKS -> your_project_name -> General -> Build.

- Upload: After a successful build, click the "Upload" icon (right arrow) in the PlatformIO toolbar, or use the PlatformIO sidebar: PROJECT TASKS -> your_project_name -> General -> Upload.


<table align="center">
  <tr>
      <th>Operation five</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/blink.jpg" /></div>
  </tr>
</table>

The output in the terminal should indicate a successful compilation and burning process.


### Observe the Result

After a successful upload, your XIAO nRF54L15's built-in LED should begin blinking at a 1-second interval.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light.gif" style={{width:400, height:'auto'}}/></div>



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
