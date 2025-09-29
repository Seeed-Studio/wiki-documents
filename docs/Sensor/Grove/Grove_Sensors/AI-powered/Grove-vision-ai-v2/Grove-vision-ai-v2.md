---
description: Getting Started with Grove Vision AI V2.
title: Grove Vision AI Module V2
keywords:
- vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_vision_ai_v2
last_update:
  date: 12/12/2023
  author: Citric
---

# Grove Vision AI Module V2

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

It is an MCU-based vision AI module powered by Arm Cortex-M55 & Ethos-U55. It supports TensorFlow and PyTorch frameworks and is compatible with Arduino IDE. With the SenseCraft AI algorithm platform, trained ML models can be deployed to the sensor without the need for coding. It features a standard CSI interface, an onboard digital microphone and an SD card slot, making it highly suitable for various embedded AI vision projects.

<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/video.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
Please use Chrome or Edge browser based on the Chrome engine.
:::

### Features

- **Powerful AI Processing Capabilities**: Utilizes WiseEye2 HX6538 processor with a dual-core Arm Cortex-M55 and integrated Arm Ethos-U55 neural network unit.
- **Versatile AI Model Support**: Easily deploy off-the-shelf or your custom AI models from SenseCraft AI, including Mobilenet V1, V2, Efficientnet-lite, Yolo v5 & v8. TensorFlow and PyTorch frameworks are supported.
- **Rich Peripheral Devices**: Includes PDM microphone, SD card slot, Type-C, Grove interface, and other peripherals.
- **High Compatibility**: Compatible with XIAO series, Arduino, Raspberry Pi, ESP dev board, easy for further development.
- **Fully Open Source**: All codes, design files, and schematics available for modification and use.

### Application

- Industrial Automation: Quality inspection, predictive maintenance, voice control, etc.
- Smart Cities: Device monitoring, energy management, etc.
- Transportation: Status monitoring, location tracking, etc.
- Smart Agriculture: Environmental monitoring, etc.
- Mobile IoT Devices: Wearable devices, handheld devices, etc.

## Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/15.png" style={{width:1000, height:'auto'}}/></div>

To use the full functionality of the Grove Vision AI V2 you may need to purchase a CSI camera separately, we recommend the [**OV5647-62 FOV Camera Module for Raspberry Pi**](https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html).

#### Connecting to a CSI interface camera

Once you have the Grove Vision AI V2 and camera ready to go, then you can connect them via the CSI connection cable. When connecting, please pay attention to the direction of the row of pins and don't plug them in backwards.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/9.gif" style={{width:600, height:'auto'}}/></div>

## Boot / Reset / Flashed Driver

### Boot

If you have used some unusual method that has caused the Grove Vision AI to not work properly at all (at the software level), then you may need to put the device into BootLoader mode to revive the device. Here is how to enter BootLoader mode.

**Method 1**

Please disconnect the connection cable between the Grove Vision AI and your computer, then press and hold the Boot button on the device without releasing it. At this time, please connect Grove Vision AI to your computer with a Type-C type data cable, and then release it again. At this point the device will enter BootLoader mode.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/6.gif" style={{width:600, height:'auto'}}/></div>

**Method 2**

With the Grove Vision AI connected to your computer, you can enter BootLoader mode by pressing the Boot button and then quickly pressing the Reset button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/7.gif" style={{width:600, height:'auto'}}/></div>

### Reset

If you're experiencing problems with device data suddenly not uploading or images getting stuck, you can try restarting your device using the Reset button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/8.gif" style={{width:600, height:'auto'}}/></div>

### Driver

If you find that the Grove Vision AI V2 is not recognised after connecting it to your computer. Then you may need to install the CH343 driver on your computer. Here are some links to download and install the CH343 driver.

- Windows Vendor VCP Driver One-Click Installer: [CH343SER.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.EXE)
- Windows Vendor VCP Driver: [CH343SER.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP)
- Windows CDC driver one-click installer: [CH343CDC.EXE](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343CDC.EXE)
- Windows CDC driver: [CH343CDC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP)
- macOS Vendor VCP Driver: [CH34xSER_MAC.ZIP](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH341SER_MAC.ZIP)

:::tip
Usage on Linux, you need to add the following, the following is UBUNTU, other systems are similar, but will not list them
```cpp
sudo echo 'USBSYTEM=="tty", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="55d3", MODE:="0666"' > /etc/udev/rules.d/99-grove-vision-ai.rules
sudo udevadm control --reload-rules
sudo udevadm trigger 
```
:::

### Bootloader Recovery Tool Manual

This part describes how to recover the bootloader of the Grove Vision AI (WE2) module. The recovery tool is a software tool that can be used to recover the bootloader of the Grove Vision AI (WE2) module in case the bootloader is corrupted, or flash a new firmware to the Grove Vision AI (WE2) module.

#### Prerequisites

- Any board which has I2C interface and supported by Arduino IDE.
- Grove Vision AI V2
- 4-Pin Cable

#### Software Installation

1. Install the Arduino IDE from the [official website](https://www.arduino.cc/en/software).
2. Download the latest version of the Seeed_Arduino_SSCMA library from the [GitHub repository](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA).
3. Add the library to your Arduino IDE by selecting **Sketch > Include Library > Add .ZIP Library** and choosing the downloaded file.
4. Open the `we2_iic_bootloader_recover` example from the Arduino IDE: **File > Examples > Seeed_Arduino_SSCMA > we2_iic_bootloader_recover**.
5. Upload the example to your Arduino board.

#### Hardware Connection

Connect the Grove Vision AI (WE2) module to the default I2C interface of your Arduino board using the 4-Pin Cable. Make sure each wire is connected to the correct pin.

- SCL -> SCL (Grove Vision AI WE2)
- SDA -> SDA (Grove Vision AI WE2)
- VCC -> VCC (Grove Vision AI WE2, 3.3V)
- GND -> GND (Grove Vision AI WE2)

#### Usage

1. Make sure your Arduino board is connected to your computer, and the Grove Vision AI (WE2) module is connected to the Arduino board.
2. Open the Serial Monitor in the Arduino IDE. (or any other serial monitor software, e.g., minicom, PuTTY)
3. Wait for the Grove Vision AI (WE2) device to be detected
4. Press 'enter' to start the bootloader recovery process, wait for the process to complete

:::note
Before connecting the Grove Vision AI V2 to your computer, keep the BOOT button pressed while connecting to your computer via the data cable, and then release the BOOT button. In some cases, you may have to try 3-10 times to recover the bootloader successfully.
:::

## Getting Started

### Getting Started with Arduino

<div class="all_container">
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "/grove_vision_ai_v2_software_support/#-arduino-library-introduction-" class="getting_started_label2"> Arduino(Seeed Studio XIAO) </a>
          <br/>Object recognition or serial communication
      </div>
  </div>
</div>

### Getting Started with SenseCraft AI

<div class="all_container">
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "/grove_vision_ai_v2_software_support/#-no-code-getting-started-with-sensecraft-ai-" class="getting_started_label2"> SenseCraft AI Model Assistant</a>
          <br/>No code experience AI models deploy and observe
      </div>
  </div>
</div>

### Connect Grove Vision AI V2 to Home Assistant

<div class="all_container">
  <div class="getting_started">
      <div class="start_card_wrapper">
          <a href= "/sensecraft-ai/application/application-for-homeassistant" class="getting_started_label2"> Connecting to Home Assistant</a>
          <br/>Integrating Grove Vision AI V2 into Home Assistant
      </div>
  </div>
</div>

## Troubleshooting

### Q1: Is it possible for Grove Vision AI to see XIAO result information while outputting a live screen?

No can do. Considering the frame rate or the speed of image inference, we do not support simultaneous execution of both jobs at this stage. If XIAO is connected, then you can only receive the recognised information reported, but not the real-time frame.

### Q2: Which cameras does Grove Vision AI V2 support? Does it only support the OV5647-62?

You can check [here](/Grove-vision-ai-v2-camera-supported). Currently we have written drivers for the OV5642 series of cameras, so Grove Vision AI V2 supports the full range of Raspberry Pi OV5647 cameras, e.g., the OV5647-62, OV5647-67, and OV5647-160.The other CSI cameras are theoretically supported, but due to the fact that some of the cameras don't have drivers written for them or the do not have a colour processing unit themselves, so there may be a problem that the colour is only green, and the loss of full colour will have a possible impact on the accuracy of the recognition.


## Resources

- **[PDF]** [Datasheet](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf)
- **[PDF]** [Circuit Diagram](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/Grove_Vision_AI_Module_V2_Circuit_Diagram.pdf)
- **[Zip]** [Layout Diagram](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/Grove_Vision_AI_Module_V2_Layout.zip)
- **[Zip]** [Bill Of Material](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/202003828_PCBA_Grove_Vision_AI_Module_V2_A11_Design.zip)
- **[GitHub]** [Seeed Grove Vision AI Module V2 SDK](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)
- **[STP]** [grove vision ai v2 kit case 3D Model](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/grove_vision_ai_v2_kit_case.stp)

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

