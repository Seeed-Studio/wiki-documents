---
description: This article will guide you to quickly get started with reTerminal D1001.
title: Getting Started with reTerminal D1001
image: https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.webp
slug: /getting_started_with_reterminal_d1001
sku: 100058144
sidebar_position: 2
last_update:
  date: 03/06/2026
  author: Jackson.Li
createdAt: '2026-03-06'
updatedAt: '2026-03-06'
url: https://wiki.seeedstudio.com/getting_started_with_reterminal_d1001/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started with reTerminal D1001

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=D1001" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div><br />

## Product Introduction

### Overview
reTerminal D1001 is an intelligent large-screen interaction terminal powered by Espressif's latest high-performance **ESP32-P4** chip. Designed for AIoT application scenarios requiring high-performance graphics display, video processing, and voice interaction, it leverages the ESP32-P4's powerful 400MHz dual-core RISC-V processor and rich multimedia peripheral interfaces to easily handle complex edge computing and multimedia tasks.

### Core Features
*   **Powerful Processing for Rich Interfaces**: Powered by ESP32-P4, a 32-bit RISC-V dual-core processor (HP Core 400MHz) with 32 MB PSRAM and built-in JPEG codec engine, it delivers the performance needed for graphics-rich interfaces, smooth real-time interaction, and complex edge AI tasks.
*   **8-Inch Touch Display with Rich HMI Support**: The 8-inch 800 × 1280 capacitive touch display, driven over MIPI-DSI, supports both portrait and landscape modes (via IMU), providing ample space to build polished dashboards, smart control panels, and other UI-focused embedded devices.
*   **Integrated Wireless Connectivity**: Wireless communication is enabled by an onboard ESP32-C6 supporting Wi-Fi 6 (2.4 GHz) and Bluetooth 5 (LE). The main processor communicates with the connectivity subsystem via an SDIO interface, enabling reliable wireless networking for connected devices and IoT applications.
*   **Camera Interface for Vision Development**: Equipped with a 2MP MIPI-CSI camera (SC2356) supporting up to 1600 × 1200 at 30 fps, the platform is ready for image capture, live preview, and embedded vision development right out of the box.
*   **Voice and Audio Capabilities**: Dual microphones and a built-in speaker enable voice input, sound capture, and multimedia playback. With echo cancellation supported by the ES7210 audio ADC, the system delivers clear voice capture for AI assistants and voice-enabled applications.
*   **Rich Expansion**: Provides GPIO, I2C, UART, and other expansion interfaces to meet diverse sensor and actuator connection needs.

<!--
### Target Users & Applications
*   **Target Users**:
    *   **Embedded Developers**: Professionals seeking high-performance, low-cost HMI solutions to replace Linux/Android.
    *   **Smart Home Integrators**: Teams needing customized central control panels and smart switches.
    *   **Geeks & Makers**: Enthusiasts exploring the limits of ESP32 performance and developing desktop gadgets or smart terminals.
*   **Applications**: Smart Home Control Panels, Industrial HMI Panels, AI Voice Assistants, Video Surveillance Terminals, Educational Development Kits.
-->


### Hardware Specifications

| Function Module | Detailed Parameters | Remarks |
| :--- | :--- | :--- |
| **Main Processor** | **ESP32-P4NRW32** | 400MHz Dual-Core RISC-V, 32MB PSRAM |
| **Storage** | 32MB Nor Flash | Supports MicroSD card expansion |
| **Wireless Connectivity** | Wi-Fi 6 & Bluetooth 5 (LE) | Provided by ESP32-C6 (SDIO interface) |
| **Display** | 8-inch MIPI-DSI Touch Screen | Resolution: 800x1280 <br /> Luminance: 250 cd/㎡ <br /> Driver IC: 9365DA-H3 <br /> Touch IC: GSL3670 (Capacitive) |
| **Camera** | 2MP (SC2356) | Resolution: 1608x1208 <br /> Interface: MIPI-CSI |
| **Audio** | **Codec**: ES8311 <br /> **ADC**: ES7210 <br /> **PA**: NS4150B (2W@8Ω) <br /> **Input**: Dual Microphone Array | High-fidelity audio input/output |
| **Network Expansion** | mPCIe Slot | Supports USB 2.0 signal, optional 4G module |
| **Sensors** | 6-axis IMU (LSM6DS3TR) | Accelerometer + Gyroscope, supports screen auto-rotation |
| **Interfaces & Buttons** | USB Type-C (Power/Debug) <br /> Dual-row 2.54mm Expansion Header <br /> BOOT/Reset (Pinhole) <br /> Power Button | Supports short press for sleep / long press for power on/off |
| **Power Management** | 2500mAh Lithium Battery <br /> RTC Coin Cell Holder | USB Type-C 5V Input <br /> Charging indicator & Status RGB LED |


## Getting Started with ESP-IDF

This section guides you through setting up the development environment and running the factory demo firmware to experience the powerful features of reTerminal D1001.

### Configure the ESP-IDF development environment

**Step 1. Install ESP-IDF**

Use Espressif's latest cross-platform installation tool, **ESP-IDF Installation Manager**.

1.  **Download ESP-IDF**: Visit the [ESP-IDF Installation Manager Download Page](https://dl.espressif.cn/dl/eim/), select the **Offline Installer** tab, choose the **Windows** version (v5.4.2+ recommended), and click **Download** to get both the `.zst` and `.exe` files.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/1.png" style={{width:600, height:'auto'}}/></div>
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/2.png" style={{width:600, height:'auto'}}/></div>

2.  **Install from Archive**: Run the installer (`eim-gui-windows-x64.exe`), select **Install from archive** (the offline package will be automatically detected), choose an installation path (default recommended; avoid Chinese characters or spaces), and click **Start Installation**.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/3.png" style={{width:800, height:'auto'}}/></div>
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/4.png" style={{width:800, height:'auto'}}/></div>
3.  **Complete Installation**: Once finished, click **Install Driver** to complete the setup.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/0_5.png" style={{width:800, height:'auto'}}/></div>

**Step 2. Install Visual Studio Code & ESP-IDF Extension**

1.  Download and install [Visual Studio Code](https://code.visualstudio.com/).
    *   During installation, it is recommended to check **"Add 'Open with Code' action to Windows Explorer file context menu"** to quickly open project folders.
2.  Open VS Code, click the **Extensions** icon in the sidebar (or use `Ctrl + Shift + X`) to open the Extensions view.
3.  Type `ESP-IDF` in the search box, find the **ESP-IDF** extension, and click **Install**.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/5.png" style={{width:600, height:'auto'}}/></div>

### Get the Firmware Repository
Download the official reTerminal D1001 repository from GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/6.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/reTerminal-D1001" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to download</button></p>
</a>
</div>

### Build and Flash Demo Firmware
1.  **Open Project**: Use VS Code to open the cloned `reTerminal-D1001` folder.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/7.png" style={{width:600, height:'auto'}}/></div>
    
    :::tip
    Please make sure to open the `examples/factory_firmware` directory within the project. Opening the root directory may cause compilation failures.
    :::

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/8.png" style={{width:800, height:'auto'}}/></div>
2.  **Set Target Chip**:
    *   In the VS Code status bar at the bottom, select the target chip as `esp32p4`.
    *   Or run in the terminal: `idf.py set-target esp32p4`.
3.  **Select Flashing Mode**:
    *   Select the correct flashing mode before flashing.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/uart.jpg" style={{width:800, height:'auto'}}/></div>
4.  **Build, Flash and Monitor**:
    *   Connect the device to your computer via USB Type-C.
    *   Click the **"Flash" (flame icon)** button in the VS Code status bar to build, flash, and start the monitor in one step.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/9.jpg" style={{width:800, height:'auto'}}/></div>

### Experience Demo Features
After the firmware is successfully flashed, the device will automatically restart. You can interact with the device as follows:

*   **Power and Screen Control**: Long press the green button for more than 3 seconds to power on. Short press the button to turn off the screen, and short press again to wake it up.
*   **Smooth UI Interaction**: Experience smooth sliding transitions and application launch animations.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/UI.gif" style={{width:300, height:'auto'}}/></div>
*   **Camera Preview**: Open the Camera App to view real-time footage.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/10.jpg" style={{width:300, height:'auto'}}/></div>
*   **Sensor Demo**: Rotate the device to observe the screen auto-rotation effect or check other sensor data.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/sensor.gif" style={{width:300, height:'auto'}}/></div>


## Resources

*   **Hardware Documents**:
    *   [reTerminal D1001 Main Board V1.0 SCH & PCB](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/reTerminal_D1001_main_board_V1.0_SCH_&_PCB_251128.zip)
    *   [reTerminal D1001 Schematic (PDF)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/reTerminal%20D1001_sch.pdf)
*   **Datasheets**:
    *   [ESP32-P4NRW32 Datasheet](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/Espressif_ESP32-P4NRW32_Datasheet.pdf)
    *   [ESP32-C6 Datasheet](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/esp32-c6_datasheet_en.pdf)
    *   [Display Datasheet (GJX080C13-31BY)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/GangJingXin_GJX080C13-31BY_Datasheet.pdf.pdf)
    *   [IMU Sensor Datasheet (LSM6DS3TR)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/ST_LSM6DS3TR_Datasheet.pdf)
    *   [Camera Module Datasheet (SC2356)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/ZD2481-D1001-V2.0_Datasheet.pdf)

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
