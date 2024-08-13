---
description: how to use SDK for RP2350
title: Seeed Studio XIAO RP2350 with C/C++ SDK
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao-rp2350-c-cpp-sdk
sidebar_position: 2
last_update:
    date: 2024-08-06T09:04:18.916Z
    author: Spencer
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

The Seeed Studio XIAO RP2350, powered by the RP2350 microcontroller, offers robust performance in a small form factor. This guide provides essential steps for setting up and using the C/C++ SDK with the XIAO RP2350, supplementing the detailed information found in the official [Raspberry Pi Pico C/C++ SDK Documentation](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf)

## Prerequisites

Before starting, ensure you have the following:

- A computer running Windows, macOS, or Linux.
- A USB cable to connect the XIAO RP2350 to your computer.
- Basic knowledge of C/C++ programming.

### Required Software

- **CMake**: A cross-platform build system generator. Install from [CMake's official site](https://cmake.org/download/).
- **GNU Arm Embedded Toolchain**: Required to compile code for ARM processors. Download from [ARM Developer](https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/gnu-rm).
- **Build Tools**: `Make` (Linux/macOS) or `Ninja` (all platforms). On Windows, you can use `nmake` or `mingw32-make`.

## Installation Guide ▶️

<Tabs>
<TabItem value="method1" label="Method 1: Using VSCode" default>

### Method 1: Build Via VSCode

For an easier and more streamlined experience with SDK programming, especially for those new to it, you can install the [Raspberry Pi Pico](https://marketplace.visualstudio.com/items?itemName=raspberry-pi.raspberry-pi-pico) extension for Visual Studio Code (VSCode).

This extension simplifies the setup process by guiding you through the necessary toolchain installations, avoiding the need to manually install each tool individually. However, you will still need to ensure your system meets the platform requirements: Windows x64, macOS (Sonoma and newer), Linux x64, or arm64.

For detailed installation instructions tailored to your operating system, please refer to the [Raspberry Pi Pico Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=raspberry-pi.raspberry-pi-pico) page.

#### Step 1: Install the Extension

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/0-install-pico-extension.png" style={{width:500, height:'auto'}}/>
<div style={{ marginTop: '-8px' }}><em>Install Extension on VSCode</em></div>
<br></br>
</div>

#### Step 2: Create a New Project

Once the page loads, you can see the required content.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/1-new-example-project.png" style={{width:500, height:'auto'}}/>
<div style={{ marginTop: '-8px' }}><em>Create a New Project from Examples</em></div>
<br></br>
</div>

Try create a project via `New Project From Examples`.

#### Step 3: Configure Your Project

- **Name:** Typically, this will be the example project name; in this case, we’ll choose the `blink` project.
- **Board Type:** `Pico 2`
- **Location:** Choose where you want to store your XIAO RP2350 project.
- **SDK Version:** Must be version `v2.0.0` or later.
- **Debugger:** If you plan to use the SWD debugging interface, check the SWD Debugger option to enable debugging later.

<Tabs>
<TabItem value="c1" label="Configure project">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/2-create-blink-project.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value="c2" label="Adavanced Options">

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/3-advanced-options.png" style={{width:500, height:'auto'}}/></div>

If you want to fine-tune your toolchain setup and avoid downloading redundant resources, check the **Advanced Options**. Here, you can specify paths for tools like Ninja and CMake. If you haven't previously installed CMake or a Python environment, or if you'd rather not worry about it, you can skip this step.

In this example, I'll use the system versions already installed on my Windows machine and added to the system PATH. Therefore, I select **Use system version**.

</TabItem>
</Tabs>

If this is your first time running the setup, when you click `Create`, the extension will download and manage the SDK for you. On Windows, the SDK will typically be placed in `%userprofile%\.pico-sdk`. The time it takes to set up depends on your internet speed. Once completed, a new window will open with your project.

#### Step 4: Build the Project

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/4-blink-example-created.png" style={{width:500, height:'auto'}}/></div>

<Tabs>
<TabItem value="compile" label="Compile Project">

Now you can press the **Compile** button to build the project. This will generate the `blink.uf2` file in the `build` folder, which you can drag and drop to the RP2350 drive recognized by your computer.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/5-compile-project.png" style={{width:500, height:'auto'}}/></div>

</TabItem>

<TabItem value="run" label="Run Project">

If your device is in BOOT mode, you can press the **Run** button to compile and automatically copy the `.uf2` file to the RP2350, eliminating the need to manually drag and drop the file.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2350/img/sdk/6-run-project.png" style={{width:500, height:'auto'}}/></div>

</TabItem>
</Tabs>

Now we've just set up the development environment and successfully created a new project using the Raspberry Pi Pico extension for VSCode. With the project ready and your tools configured, you can easily compile and run your code on the XIAO RP2350, streamlining your development process.

</TabItem>
<TabItem value="method2" label="Method 2: Using CL">

### Method 2: Build via Command Line

<!-- warp////// -->

<!-- warp////// -->

</TabItem>
</Tabs>


## Example 1: LED Blink

To demonstrate basic SDK usage, the following example details programming the onboard LED to blink:

```c title="blink.c"
#include "pico/stdlib.h"

const int sleep_time = 250;

int main() {
    const uint LED_PIN = PICO_DEFAULT_LED_PIN; // GPIO25
    gpio_init(LED_PIN);
    gpio_set_dir(LED_PIN, GPIO_OUT);
    while (true) {
        gpio_put(LED_PIN, 1);
        sleep_ms(sleep_time);
        gpio_put(LED_PIN, 0);
        sleep_ms(sleep_time);
    }
}
```

<!-- ## Takeaway

Summarize the previous content, list best practices, common problems, and solutions to help users avoid common errors in practical use.

How to assemble it, precautions, etc -->

## Reference

- 📄 **[PDF]** [Getting started with Raspberry Pi Pico-series](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf)  - Official Raspberry Pi documentation.

## Additional Resources
- 🔗 **[Link]** [Raspberry Pi Pico SDK | GitHub](https://github.com/raspberrypi/pico-sdk)
- 📄 **[PDF]** [Raspberry Pi Pico-series C/C++SDK](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf) the book which documents the SDK APIs
- 📽️ **[Video]** [Intro to Raspberry Pi Pico and RP2040](https://www.youtube.com/watch?v=B5rQSoOmR5w) -  A video tutorial.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/kpY74apCWj" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>  