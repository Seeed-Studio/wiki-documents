---
description: Get Started with Wio-WM1110 Dev Kit
title: Get Started
keywords:
- Wio-WM1110 Dev Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Get_Started_with_Wio-WM1110_Dev_Kit
last_update:
  date: 6/27/2023
  author: Jessie
---

## Preparation

## Hardware 
* Wio-WM1110 Dev Kit x 1
* Computer x 1
* USB Type-C Cable x 1


## Set up your Toolchain

Before you can start developing，the following tools are required for this Getting Started Guide:

### SEGGER Embedded Studio (SES)
SES is an all-in-one solution for managing, building, testing and deploying embedded applications. This means smooth, efficient development operations thanks to its wide range of features. The powerful project manager enables the management of projects large and small. Version control features enable automatic application deployment.



<a  href="https://www.segger.com/products/development-tools/embedded-studio/" target="_blank"><span>SEGGER Embedded Studio (SES)-Download</span></a>


:::tip 
It's recommended to use 5.68 version on Mac OS.
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/5.68version.png" alt="pir" width={800} height="auto" /></p>

### SEGGER J-Link Software and Documentation Pack



<a  href="https://www.segger.com/downloads/jlink/#J-LinkSoftwareAndDocumentationPack" target="_blank"><span>SEGGER J-Link Software and Documentation Pack-Download</span></a>

### nRF5 SDK

The nRF5 SDK provides a rich developing environment for nRF5 Series devices by including a broad selection of drivers, libraries, examples for peripherals, SoftDevices, and proprietary radio protocols.

All code examples included in the SDK are tailored to compile for and run on Wio-WM1110 Dev Kit.


<a  href="https://www.nordicsemi.com/Products/Development-software/nRF5-SDK/Download#infotabs" target="_blank"><span>nRF5 SDK-Download</span></a>

### Seeed Example Package

Seeed provides an example project for developers to get started more quickly. This example includes LoRaWAN communication, positioning information acquisition, onboard sensor data acquisition, etc.

<a  href="https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board" target="_blank"><span>Seeed Example-Download</span></a>


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/list.png" alt="pir" width={600} height="auto" /></p>



# Get Started

This chapter will guide you how to use the Seeed examples to get started quickly.
### Device Connection

Connect the dev board to your PC by a USB type-C cable.



### Add Seeed Example file to nRF5 SDK

Copy the [Seeed Example file](https://github.com/Seeed-Studio/Seeed_Wio_WM1110_Dev_Board) to the following path of nRF5 SDK:
`.../nRF5_SDK_17.1.0_ddde560/examples/peripheral/`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/copyfile.png" alt="pir" width={800} height="auto" /></p>

### Import the Project

Open the SES,import the ".emProject" project.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/opensolution.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/project.png" alt="pir" width={800} height="auto" /></p>



### Compiling the application


Select **Build** > **Compile project_target**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/complie.png" alt="pir" width={800} height="auto" /></p>




### Programming the firmware

Select **Build** > **Build and Run**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/build_and_run.png" alt="pir" width={800} height="auto" /></p>

Build successfully：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/build_success.png" alt="pir" width={800} height="auto" /></p>

### Adding files
After compiling and programming an unmodified example to ensure that your toolchain is set up correctly, then you can modify your project by adding files and libraries.






# Tech Support

**Need help with your Wio-WM1110 Dev Kit? We're here to assist you!**




<div class="button_tech_support_container">
<a href="https://discord.gg/sensecap" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions" class="button_discussion"></a>
</div>
