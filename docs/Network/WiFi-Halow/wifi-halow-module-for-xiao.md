---
description: XIAO ESP32S3 with Wio-WM6108 Wi-Fi HaLow Module Tutorial
title: Getting Started with Wi-Fi HaLow Module for XIAO
image: https://files.seeedstudio.com/wiki/wifi_halow/pic/20.webp
slug: /getting_started_with_wifi_halow_module_for_xiao
sidebar_class_name: hidden
last_update:
  date: 02/12/2025
  author: Citric
---


# Getting Started with Wi-Fi HaLow Module for XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/20.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-Module-for-XIAO-p-6395.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

This tutorial will guide you through setting up and using the Wio-WM6108 Wi-Fi HaLow Module with a XIAO ESP32S3 to build a Wi-Fi HaLow client. Wi-Fi HaLow (IEEE 802.11ah) is designed for long-range, low-power IoT applications, operating in the sub-1 GHz frequency band. We'll walk through the hardware setup, software configuration, and demonstrate how to establish Wi-Fi HaLow connectivity for your IoT projects.

### Key Features

- Long range Wi-Fi connectivity up to 1km line-of-sight
- Low power consumption ideal for IoT devices
- Sub-1 GHz operation for better penetration through walls and obstacles
- Compatible with XIAO ESP32S3 development board
- Easy to follow setup and configuration process

## Hardware Overview

The following table outlines the key specifications of the Wio-WM6108 Wi-Fi HaLow Module:

| Characteristic | Value | Unit |
|:-------------:|:-----:|:----:|
| Operating Voltage | 3.3 | V |
| Operating Current | TBD | mA |
| Wi-Fi Protocol | IEEE 802.11ah | - |
| Frequency Band | Sub-1 GHz | - |
| Range | Up to 1 | km |
| Interface | SPI | - |
| Dimensions | TBD | mm |

## What is Wi-Fi HaLow?

Wi-Fi HaLow is a wireless networking protocol based on the IEEE 802.11ah standard, specifically designed for Internet of Things (IoT) applications. Operating in the sub-1 GHz frequency band (typically 900 MHz), Wi-Fi HaLow offers several significant advantages over traditional Wi-Fi:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/Wi-Fi_HaLow_frequency_band_graphic.png" style={{width:800, height:'auto'}}/></div>

1. **Extended Range**: Wi-Fi HaLow can achieve distances up to 1 kilometer in line-of-sight conditions, far exceeding the range of conventional Wi-Fi.

2. **Improved Penetration**: The lower frequency signals can better penetrate through walls and other obstacles, making it ideal for challenging environments.

3. **Low Power Consumption**: Designed with IoT devices in mind, Wi-Fi HaLow enables years of battery life for connected devices.

4. **Scalability**: Supports thousands of devices connected to a single access point, perfect for large-scale IoT deployments.

5. **Security**: Inherits the robust security features of the Wi-Fi family, including WPA3 encryption.

### Why Wi-Fi HaLow Matters

Wi-Fi HaLow addresses the growing needs of IoT applications that require long-range connectivity, low power consumption, and the ability to handle numerous devices simultaneously. It bridges the gap between traditional Wi-Fi and LPWAN technologies, offering:

- **Industrial IoT**: Enables reliable connectivity in factories, warehouses, and industrial settings.
- **Smart Agriculture**: Provides coverage across large agricultural areas for sensor networks.
- **Smart Cities**: Supports extensive networks of connected devices in urban environments.
- **Asset Tracking**: Allows for long-range tracking of valuable assets and equipment.

By combining the familiarity of Wi-Fi with the benefits of low-power, long-range connectivity, Wi-Fi HaLow is poised to play a crucial role in the expansion of IoT applications across various industries.

### Wi-Fi HaLow System Architecture

A typical Wi-Fi HaLow network consists of several key components that work together to enable long-range, low-power IoT connectivity:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/wifi-halow-architecture.png" style={{width:800, height:'auto'}}/></div>

1. **Access Point (AP)**: The central hub of the Wi-Fi HaLow network, responsible for managing connections and routing data between devices and the internet.

2. **Stations (STA)**: The client devices that connect to the Access Point. These can be sensors, actuators, or other IoT devices.

3. **Gateway**: Acts as a bridge between the Wi-Fi HaLow network and other networks (e.g., Ethernet or cellular).

In this tutorial, we'll configure the XIAO ESP32S3 as a Station (STA) client that connects to a Wi-Fi HaLow Access Point. The XIAO will use the WM6108 module to establish and maintain the HaLow connection.

## MM-IoT-SDK Framework

The WM6108 module utilizes [MorseMicro's MM-IoT-SDK](https://github.com/MorseMicro/mm-iot-esp32), which provides:

- **Multi-protocol Support**: Enables seamless integration with various IoT protocols
- **Low Power Management**: Optimized power consumption for battery-powered devices
- **Security Features**: Built-in encryption and authentication mechanisms
- **Easy Configuration**: Simplified API for network setup and management

The MM-IoT-SDK architecture consists of several layers:

1. **Hardware Abstraction Layer (HAL)**: Provides a unified interface for different hardware platforms
2. **Network Stack**: Implements the Wi-Fi HaLow protocol stack
3. **Application Layer**: Offers APIs for application development and device management

This framework allows developers to quickly implement Wi-Fi HaLow functionality while maintaining flexibility for custom applications.

## Materials Required

Here are the materials needed to run this tutorial.

<div class="table-center">
    <table align="center">
        <tr>
            <th>XIAO ESP32S3 Sense</th>
            <th>Wio-WM6108 Wi-Fi HaLow Module for XIAO</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/20.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-Module-for-XIAO-p-6395.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

:::note
This tutorial is only applicable to XIAO ESP32-S3 series. We will use XIAO ESP32S3 Sense as an example in this tutorial.
:::

In addition to the above, you may need to prepare additional antennas suitable for WiFi-Halow use. Here are the verified, recommended antenna models.

<div class="table-center">
    <table align="center">
        <tr>
            <th>Long Range Indoor Antenna Kit</th>
            <th>2.6dBi Long Range Antenna</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/long_range_indoor_antenna.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.6dBi_long_range_antenna.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/LoRa-Indoor-Antenna-Kit-860-930MHz-3dBi-295mm-p-5434.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/External-Antenna-915MHZ-2-6dBi-SMA-L195mm-p-5047.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

To connect the antenna to the WiFi-Halow module, you may also need to purchase the **SMA to I-PEX Antenna Cable**.

<div class="table-center">
    <table align="center">
        <tr>
            <th>SMA to I-PEX Antenna Cable</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/antenna_cable.png" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/UF-L-SMA-K-1-13-120mm-p-5046.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

If you are using it for the first time, you can refer to the following video for antenna installation.

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/wifi_halow/pic/install_xiao_wifi_halow_module.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Install ESP-IDF v5.1.1

Before we start programming, we need to install ESP-IDF v5.1.1 on your computer. ESP-IDF is the official development framework for ESP32 series chips.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Windows" label="Windows">

**Step 1.** Download the ESP-IDF Tools Installer for Windows

Download the [ESP-IDF Tools Installer](https://dl.espressif.com/dl/esp-idf/?idf=5.1.1) for Windows. This installer includes all the tools needed for ESP-IDF development.

**Step 2.** Run the installer

1. Run the downloaded installer as administrator
2. Follow the prompts to install Python, Git, and other required tools
3. When prompted, select the following options:
   - Install ESP-IDF v5.1.1
   - Install Python
   - Install Git
   - Add ESP-IDF Tools to Path

**Step 3.** Verify the installation

Open a new Command Prompt and run:

```bash
esp-idf --version
```

If the installation was successful, you should see the version number 5.1.1.

</TabItem>

<TabItem value="MacOS" label="MacOS">

**Step 1.** Install prerequisites

Open Terminal and install Homebrew if you haven't already:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

Install the required packages:

```bash
brew install cmake ninja dfu-util
```

**Step 2.** Download and install ESP-IDF

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh esp32s3
```

**Step 3.** Set up the environment variables

```bash
. $HOME/esp/esp-idf/export.sh
```

Add this line to your `~/.profile` or `~/.zshrc` to automatically set up the environment variables when opening a new terminal.

</TabItem>

<TabItem value="Linux" label="Linux">

**Step 1.** Install prerequisites

For Ubuntu and Debian:

```bash
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-setuptools cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

For other distributions, please install equivalent packages.

**Step 2.** Download and install ESP-IDF

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.1.1 --recursive https://github.com/espressif/esp-idf.git
cd esp-idf
./install.sh esp32s3
```

**Step 3.** Set up the environment variables

```bash
. $HOME/esp/esp-idf/export.sh
```

Add this line to your `~/.bashrc` to automatically set up the environment variables when opening a new terminal.

</TabItem>
</Tabs>

:::tip
After installation, you may need to restart your computer to ensure all environment variables are properly set.
:::

:::note
For more detailed instructions on installing ESP-IDF v5.1.1, you can refer to the official Espressif documentation:

- [ESP-IDF Get Started Guide](https://docs.espressif.com/projects/esp-idf/en/v5.1.1/esp32s3/get-started/index.html)

:::

## Clone and Configure mm-iot-esp32 Repository

Follow these steps to clone the mm-iot-esp32 repository and set up the environment variables:

<Tabs>
<TabItem value="Windows" label="Windows">

**Step 1.** Clone the repository

```bash
cd %USERPROFILE%
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**Step 2.** Export IDF variables

```bash
cd %USERPROFILE%\mm-iot-esp32
export.bat
```

**Step 3.** Set MMIOT_ROOT environment variable

You can set this permanently through Windows System Properties:

1. Open System Properties (Win + R, type `sysdm.cpl`)
2. Click "Environment Variables"
3. Under "User variables", click "New"
4. Variable name: `MMIOT_ROOT`
5. Variable value: `C:\Users\YourUsername\mm-iot-esp32` (replace with your actual path)
6. Click "OK" to save

Alternatively, you can set it temporarily in Command Prompt:

```bash
set MMIOT_ROOT=C:\Users\YourUsername\mm-iot-esp32
```

</TabItem>

<TabItem value="MacOS" label="MacOS">

**Step 1.** Clone the repository

```bash
cd ~
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**Step 2.** Export IDF variables

```bash
cd ~/mm-iot-esp32
source export.sh
```

**Step 3.** Set MMIOT_ROOT environment variable

For temporary use:

```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

For permanent use, add to your shell configuration file:

```bash
# For bash users (add to ~/.bash_profile or ~/.bashrc)
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bash_profile

# For zsh users (add to ~/.zshrc)
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

Then reload your shell configuration:

```bash
# For bash
source ~/.bash_profile

# For zsh
source ~/.zshrc
```

</TabItem>

<TabItem value="Linux" label="Linux">

**Step 1.** Clone the repository

```bash
cd ~
git clone https://github.com/Seeed-Studio/mm-iot-esp32.git
```

**Step 2.** Export IDF variables

```bash
cd ~/mm-iot-esp32
source export.sh
```

**Step 3.** Set MMIOT_ROOT environment variable

For temporary use:

```bash
export MMIOT_ROOT=~/mm-iot-esp32
```

For permanent use, add to your shell configuration file:

```bash
# For bash users
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.bashrc

# For zsh users
echo 'export MMIOT_ROOT=~/mm-iot-esp32' >> ~/.zshrc
```

Then reload your shell configuration:

```bash
# For bash
source ~/.bashrc

# For zsh
source ~/.zshrc
```

</TabItem>
</Tabs>

:::tip
Make sure to use absolute paths when setting the MMIOT_ROOT environment variable. Relative paths may cause issues when building projects.
:::

:::note
After setting the environment variables, you may need to close and reopen your terminal for the changes to take effect.
:::

## Building Example Firmware

The mm-iot-esp32 repository includes several example applications that demonstrate different functionalities. Here's how to build and configure these examples:

### Example Applications Location

All example applications can be found in the `examples` directory of the repository. Available examples include:

- `scan`: Wi-Fi scanning example
- `iperf`: iperf server example
- `sta_reboot`: Wi-Fi station reboot example
- `sta_connect`: Wi-Fi station connection example
- `web_camera_server`: Web camera server example
- And more...

### Configure Network Credentials

Before building the firmware, you need to configure the network settings in the example's configuration file:

1. Navigate to your chosen example directory:

```bash
cd $MMIOT_ROOT/examples/example_name
```

2. Edit the configuration file:

```bash
# Open the configuration file
nano src/mm_app_loadconfig.c
```

3. In this file, you can modify:

- Country code (should be set to **US** as the product is currently only available for North America)
- Wi-Fi HaLow network credentials
- Other network-related parameters

:::caution
Important Note About Country Code:

- The country code must be set to "US" as this product is currently only available for the North American market
- The product is not yet available for other regions due to regulatory requirements
- Using the product in regions other than North America may violate local regulations

:::

### Building Process

After configuring the network settings, you can build the firmware using these commands:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
```

:::note

- The `idf.py set-target` command only needs to be run once for each example
- `idf.py fullclean` ensures a clean build by removing all previous build artifacts
- After successful build, the firmware binary will be located in the `build` directory

:::

### Build Output

After a successful build, you should see output similar to this:

```bash
# Project build complete. To flash, run this command:
idf.py -p (PORT) flash
```

Below, we will demonstrate a few examples.

## Example 1. scan

This example demonstrates how to scan for available Wi-Fi HaLow networks in your vicinity. Follow these steps to build and run the scan example:

### Step 1: Navigate to the Scan Example

```bash
cd ~/mm-iot-esp32/example/scan
```

### Step 2: Configure Country Code

1. Open the configuration file:

```bash
nano main/src/mm_app_loadconfig.c
```

2. Locate and modify the country code line:

```c
#define COUNTRY_CODE "US"  // Must use "US" as the product is only available for North America
```

### Step 3: Hardware Setup

1. Connect the Wio-WM6108 Wi-Fi HaLow Module to your XIAO ESP32S3

2. Connect the XIAO ESP32S3 to your computer via USB

### Step 4: Build and Flash

Execute the following commands in sequence:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### Step 5: Monitor Results

If everything is working correctly:

- The serial monitor will start automatically after flashing
- The program will begin scanning for Wi-Fi HaLow networks
- If any Wi-Fi HaLow gateways are in range, their information will be displayed in the serial monitor

Example output in the serial monitor:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/9.png" style={{width:1000, height:'auto'}}/></div>

:::tip

- Make sure there are Wi-Fi HaLow gateways in your vicinity to detect networks
- The scanning process runs continuously, so you'll see periodic updates of available networks
- Press Ctrl+C to stop the monitor and exit the program

:::

:::note
If you don't see any networks:

- Verify that your Wi-Fi HaLow gateway is powered on and functioning
- Check that you're within range of the gateway
- Ensure the module is properly connected to your XIAO ESP32S3

:::

## Example 2. iperf

This example demonstrates how to test the network performance of your Wi-Fi HaLow connection using iPerf. Follow these steps to build and run the iPerf example:

### Step 1: Navigate to the iPerf Example

```bash
cd ~/mm-iot-esp32/example/iperf
```

### Step 2: Configure Network Settings

1. Open the configuration file:

```bash
nano main/src/mm_app_loadconfig.c
```

2. Modify the following parameters:

```cpp
// Set country code (must be "US" for North America)
#define COUNTRY_CODE "US"

// Set your Wi-Fi HaLow network credentials
#define SSID             Your_HaLow_SSID           // Replace with your network name
#define SAE_PASSPHRASE   Your_Password             // Replace with your network password
```

### Step 3: Hardware Setup

1. Connect the Wio-WM6108 Wi-Fi HaLow Module to your XIAO ESP32S3
2. Connect the XIAO ESP32S3 to your computer via USB

### Step 4: Build and Flash

Execute the following commands in sequence:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### Step 5: Run Performance Test

Once the program is running successfully, you'll see the iPerf service start up. Now you can run performance tests from your Wi-Fi HaLow gateway.

For IPv4 testing, execute this command on your gateway:

```bash
iperf -c <device_ip> -p <port> -i 1 -u -b 20M
```

For IPv6 testing, execute this command on your gateway:

```bash
iperf -c <device_ip>%wlan0 -p <port> -i 1 -V -u -b 20M
```

The parameters explained:

- `-c`: Run in client mode
- `-p`: Port number
- `-i`: Report interval (1 second)
- `-u`: Use UDP protocol
- `-b`: Target bandwidth (20 Mbps)
- `-V`: IPv6 mode (for IPv6 testing only)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/11.png" style={{width:1000, height:'auto'}}/></div>

:::tip

- Make sure your device has successfully connected to the Wi-Fi HaLow network before running the performance test
- The device's IP address will be displayed in the serial monitor after connection
- You can adjust the bandwidth (-b parameter) based on your testing needs

:::

:::note
Common issues and solutions:

- If connection fails, verify your network credentials
- If iPerf service doesn't start, check your hardware connections
- If performance is poor, ensure you're within good range of the gateway

:::

## Example 3. web_camera_server

This example demonstrates how to stream camera feed from XIAO ESP32S3 Sense over Wi-Fi HaLow network. Follow these steps to build and run the web camera server:

### Step 1: Navigate to the Web Camera Example

```bash
cd ~/mm-iot-esp32/example/web_camera_serve
```

### Step 2: Configure Network Settings

1. Open the configuration file:

```bash
nano main/src/mm_app_loadconfig.c
```

2. Modify the Wi-Fi HaLow credentials:

```cpp
// Set your Wi-Fi HaLow network credentials
#define SSID              Your_HaLow_SSID           // Replace with your network name
#define SAE_PASSPHRASE    Your_Password             // Replace with your network password
```

### Step 3: Hardware Setup

1. Connect the Wio-WM6108 Wi-Fi HaLow Module to your XIAO ESP32S3 Sense
2. Ensure the camera module on your XIAO ESP32S3 Sense is properly connected
3. Connect the XIAO ESP32S3 Sense to your computer via USB

### Step 4: Build and Flash

Execute the following commands in sequence:

```bash
idf.py set-target esp32s3
idf.py fullclean
idf.py build
idf.py flash monitor
```

### Step 5: Access the Camera Feed

Once the program is running successfully:

1. Note the IP address displayed in the serial monitor
2. Open a web browser on any device connected to the same network as your Wi-Fi HaLow gateway
3. Enter the IP address in your browser's address bar
4. You should now see the live camera feed from your XIAO ESP32S3 Sense

Example URL:

```
http://192.168.4.1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/14.png" style={{width:1000, height:'auto'}}/></div>

:::tip
For the best streaming experience:

- Ensure good lighting conditions for better image quality
- Keep the XIAO ESP32S3 Sense within good range of the Wi-Fi HaLow gateway
- Use a modern web browser for optimal compatibility

:::

:::note
Troubleshooting:

- If you can't access the camera feed, verify that your device is on the same network as the Wi-Fi HaLow gateway
- If the image is not showing, check that the camera module is properly connected
- If the stream is laggy, try moving closer to the Wi-Fi HaLow gateway

:::

## Resources

- **[GITHUB]** [mm-iot-esp32 repository](https://github.com/Seeed-Studio/mm-iot-esp32.git)
- **[GITHUB]** [mm-iot Document](https://github.com/Seeed-Studio/mm-iot-esp32/blob/main/documentation.html)
- **[PDF]** [WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30_SCH_20241107.pdf)
- **[KiCAD]** [WI-FI_HALOW_FGH100M_EXT01_V30 KiCAD PCB File](https://files.seeedstudio.com/wiki/wifi_halow/res/WI-FI_HALOW_FGH100M_EXT01_V30.kicad_pcb)
- **[PDF]** [Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0](https://files.seeedstudio.com/wiki/wifi_halow/res/Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0_Preliminary_20241018.pdf)

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
