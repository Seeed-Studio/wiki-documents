---
description: The Quectel EG25-GL-powered 4G LTE Raspberry Pi HAT delivers high-speed connectivity and precise GNSS positioning, making it perfect for IoT and M2M applications. Compatible with Raspberry Pi and PCs, it supports global frequency bands, real-time tracking, and reliable communication for versatile use across industries.

title: Getting Started with the Raspberry Pi 4G LTE HAT 
keywords:
  - Raspberry Pi Hat
  - Getting started
  - IIoT
  - M2M
  - 4G LTE
  - Edge Computing
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /getting_started_raspberry_pi_4g_lte_hat
last_update:
  date: 12/10/2024
  author: Kasun Thushara
---

## Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/7-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi-feature.jpg" style={{width:600}}/></div>

The 4G Raspberry Pi HAT is a powerful and versatile add-on designed for seamless integration with Raspberry Pi models, including A+, B+, Pi 2, Pi 3, Pi 4, Pi 5, and Zero, as well as PCs. Equipped with a 40-pin GPIO connector, it ensures easy plug-and-play compatibility. The HAT features the Quectel EG25-GL CAT4 LTE module, providing high-speed 4G communication, SMS functionality, and cloud platform integration for IoT and M2M applications. Additionally, it offers precise GNSS positioning with Qualcomm® IZat technology, making it ideal for industrial routers, rugged tablets, video transmission, and digital signage. The HAT supports communication through UART and USB, with software tools included for easy configuration and debugging via AT commands.

At its core, the EG25-GL module ensures robust performance with global frequency band support, offering reliable connectivity across LTE, UMTS/HSPA+, and GSM/GPRS/EDGE networks. Backward-compatible with 4G, 3G, and 2G, it supports multiple communication protocols such as MIMO, DFOTA, and DTMF. Its multi-constellation GNSS receiver ensures accurate and fast positioning.

## Package Contents

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/9-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi-feature.jpg"
    style={{ width: 600}}
  />
</div>

The 4G LTE HAT package includes everything needed for installation and operation:  

- **Screws and Studs** All required hardware for securely mounting and fixing the HAT.  
- **Screwdriver** A tool for easy installation.  
- **2x 4G Antenna** Ensures reliable LTE connectivity.  
- **USB-A to USB-C** Adapter Enables connection between the HAT and the Raspberry Pi’s USB 3.0 port.  
- **2x20 Pin Stacking** Header Provides the necessary height for proper alignment and clearance during installation.  
- **0.3M Type-C Data Cable** Supports both power supply and data transmission.  

## Hardware preparation

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
        <th>GPS Antenna</th>
        <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-110061521-gps-antenna-kit-for-reterminal-dm-4g-module-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/GPS-Antenna-Kit-for-reTerminal-DM-4G-Module-p-5774.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Features

- Supports global frequency bands with no regional restrictions.
- Plug-and-play with Raspberry Pi, no driver installation required.
- Includes 2x LTE Antennas and all necessary mounting accessories, no additional purchases needed.
- High-speed LTE CAT4 communication, supporting Max. 150 Mbps (DL) and Max. 50 Mbps (UL).
- Supports dial-up, SMS, TCP, UDP, PPP, FTP, HTTP, NTP, PING, QMI, NITZ, SMTP, MQTT, CMUX, HTTPS, FTPS, SMTPS, SSL, MMS, FILE.
- Supports GNSS: GPS, GLONASS, BDS, Galileo, QZSS.
- Enables high-speed 4G communication with Raspberry Pi/PC via USB 2.0 interface.
- Additional USB-C power interface that supports PD protocol can provide up to 27W of power separately for the 4G hat and  Raspberry Pi, offering higher load capacity.
- On-board LED PWR/NET status lights for easy monitoring of network status and module operation.
- On-board RST PWR button for quick manual reset and module on/off control.
- RST/PWR/RX/TX pins connected to Raspberry Pi via 40-pin GPIO, enabling control of Reset, module on/off, and UART communication when enabled by DIP Switch.

## Specification

### EG25-GL 4G Module Specifications

| **Attribute**                  | **Details**                                                                 |
|--------------------------------|-----------------------------------------------------------------------------|
| **Region/Operator**            | Global                                                                      |
| **Dimensions (mm)**            | 29.0 × 32.0 × 2.4                                                          |
| **Weight (g)**                 | Approx. 4.9                                                                |
| **Operating Temperature**      | -35°C to +75°C                                                             |
| **Extended Temperature**       | -40°C to +85°C                                                             |
| **Frequency Bands**            |                                                                             |
| - LTE-FDD                      | B1/2/3/4/5/7/8/12/13/18/19/20/25/26/28/66                                   |
| - LTE-TDD                      | B34/38/39/40/41                                                            |
| - WCDMA                        | B1/2/4/5/6/8/19                                                            |
| - TD-SCDMA                     | Not supported                                                              |
| - GSM/EDGE                     | B2/3/5/8                                                                   |
| **GNSS**            | GPS/GLONASS/BDS/Galileo/QZSS                                               |
| **Enhanced Features**          |                                                                             |
| - DTMF                         | Supported                                                                  |
| - DFOTA                        | Supported                                                                  |
| - QMI/RmNet                    | Supported                                                                  |
| - QuecFile®                    | Supported                                                                  |
| - (U)SIM Card Detection        | Supported                                                                  |
| **Max. Data Rates**            |                                                                             |
| - LTE-FDD (Mbps)               | 150 (DL)/50 (UL)                                                           |
| - LTE-TDD (Mbps)               | 130 (DL)/30 (UL)                                                           |
| - DC-HSPA+ (Mbps)              | 42 (DL)/5.76 (UL)                                                          |
| - WCDMA (kbps)                 | 384 (DL)/384 (UL)                                                          |
| - EDGE (kbps)                  | 296 (DL)/236.8 (UL)                                                        |
| - GPRS (kbps)                  | 107 (DL)/85.6 (UL)                                                         |
| **Protocols Supported**        | TCP, UDP, PPP, FTP, HTTP, NTP, PING, QMI, NITZ, SMTP, MQTT, CMUX, HTTPS, FTPS, SMTPS, SSL, MMS, FILE |
| **Electrical Features**        |                                                                             |
| - Supply Voltage Range         | 3.3–4.3 V, typical 3.8 V                                                   |
| - Power Consumption (Power Off)| 7 µA                                                                       |
| - Power Consumption (Sleep)    | 1.3 mA                                                                     |
| - Power Consumption (Idle)     | 15.7 mA                                                                    |

## Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/overview.jpg" style={{width:800}}/></div>

### 4G LTE HAT and Raspberry Pi GPIO connection

The 4G LTE HAT connects to the Raspberry Pi via its standard 40-pin GPIO interface, enabling seamless integration. The key GPIO connections and their functions are as follows:

- **Power Supply (5V)**: The HAT receives power from the Raspberry Pi through the 5V pins on the GPIO header. After connecting the PowerMode Switch Jumper, the Raspberry Pi can be powered through these pins in reverse
  
- **UART Communication (RX/TX)**: The Raspberry Pi’s GPIO pins 8 (TXD) and 10 (RXD) are connected to the HAT, serving as the primary UART interface for communication with the 4G module.It is important to note that the DIP switches on the PCB need to be adjusted. The future settings will be discussed in detail under the DIP switches section later.

- **Reset (RST)**: GPIO pin 29 is connected to the 4G module's reset pin, allowing the Raspberry Pi to reset the 4G module by toggling the signal (default is low, high triggers reset).It is important to note that the DIP switches on the PCB need to be adjusted. The future settings will be discussed in detail under the DIP switches section later.

- **Power Control (PWR)**: GPIO pin 31 connects to the 4G module's power control pin, enabling the Raspberry Pi to turn the module on with a high signal or off with a low signal.
These connections ensure that the Raspberry Pi can power, communicate with, and control the 4G LTE HAT effectively.It is important to note that the DIP switches on the PCB need to be adjusted. The future settings will be discussed in detail under the DIP switches section later.

### Power Supply

The 4G LTE HAT supports multiple power supply modes to ensure flexibility and compatibility:

1. **Raspberry Pi 40-pin 5V Power Supply**: The HAT can draw power directly from the 5V pins on the Raspberry Pi’s 40-pin GPIO header. This method is suitable for small-scale applications but may be insufficient for larger power demands, requiring testing for reliability.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power4.jpg" style={{width:600}}/></div>

2. **Raspberry Pi USB-A or USB-C Power Supply**: The HAT can be powered through the Raspberry Pi’s onboard USB-A or USB-C port. An adapter included in the kit simplifies this setup, allowing a direct connection to the HAT.

`Powered by Raspberry PI.`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power1.jpg" style={{width:600}}/></div>

`Powered by PC`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power2.jpg" style={{width:600}}/></div>

3. **External USB-C Power Supply**:  An independent USB-C power source, which can provide a 5-15V PD power supply and deliver up to 27W of power, can be connected to the HAT for high-power applications. By using a jumper wire, the HAT can also supply power directly to the Raspberry Pi through the 40-pin GPIO header.
These options provide flexibility to accommodate different application requirements and power needs.It is important to note that the DIP switches on the PCB need to be adjusted. The future settings will be discussed in detail under the DIP switches section later.

`Power the 4G HAT separately`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power5.jpg" style={{width:600}}/></div>

`Power both the 4G HAT and the Raspberry Pi.`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/power3.jpg" style={{width:600}}/></div>

### SIM Card Slot

The 4G LTE HAT includes a SIM card slot for the CAT4 module, supporting Nano SIM cards with 3V or 1.8V voltage. For proper installation, the SIM card slot should be vertically aligned with the Raspberry Pi's network port located below it. This ensures a secure connection and optimal performance.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/nano_sim_small.png"
    style={{ width: 200}}
  />
</div>

### Antenna Connectivity

The 4G LTE HAT supports three antenna connections, each using IPEX 1 connectors:

1. **MAIN LTE Antenna Connector**: Used for primary LTE connectivity.
2. **AUX LTE Antenna Connector**: Provides auxiliary LTE support for enhanced performance.
3. **GPS/GNSS Antenna Connector**: Dedicated for GPS and GNSS functionality, ensuring precise positioning.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/antenna_small.png"
    style={{ width: 200}}
  />
</div>

These antenna options ensure robust and reliable connectivity for LTE and location-based applications.

### LED Indicators

The 4G LTE HAT features two LED indicators for status monitoring:

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/LED.PNG"
    style={{ width: 200}}
  />
</div>

- **PWR LED (Red)**: Lights up to indicate the power status of the HAT.
- **NET LED (Blue)**: Indicates the network connection status. It flashes at specific intervals during active connections and data transfer, while remaining off if no connection is established.

**Network Indicator States and Corresponding Network Status**

| **Indicator**   | **Indicator State**                 | **Corresponding Network Status**     |
|------------------|-------------------------------------|---------------------------------------|
| **NET_STATUS**   | Flashing (200 ms on / 1800 ms off)  | Registered to 2G network             |
|                  | Flashing (1800 ms on / 200 ms off)  | Registered to 4G network             |
|                  | Always on                          | Data transmission in progress        |
|                  | Off                                | No network connection                |

These LEDs provide quick visual feedback on the HAT's power and network activity.

### USB-C Interfaces

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usbcin.jpg"
    style={{ width: 600}}
  />
</div>

The 4G LTE HAT includes two USB-C interfaces with distinct functions:

1. **USB-C 1 Interface**

- Integrated with the EC25 module, it supports USB 2.0 functionality.
- Allows for AT command communication, data transmission, GNSS NMEA output, software debugging, and firmware upgrades.

2. **USB-C 2 Interface**

- Used to provide a high-power supply of up to 5V-15V to the LTE HAT.
- The power supply can be toggled using the DIP switch.
- After connecting the PowerMode Switch Jumper, this interface can be used to directly power the Raspberry Pi.

These interfaces ensure efficient communication, debugging, and power delivery for the HAT.
These interfaces facilitate efficient communication and debugging for the HAT, with the USB-C 2 interface dedicated solely to power delivery.

### Boot Pads

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/bootpads.PNG"
    style={{ width: 500}}
  />
</div>

- Provides access to the LTE module's **USB_BOOT** pin and **1.8V VDD**.
- Shorting the USB_BOOT pin forces the LTE module into boot mode, enabling firmware burning via the **USB-C 1** interface.

### RST/PWR Buttons

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/rstpwr.PNG"
    style={{ width: 300}}
  />
</div>

- **RST Button**: Performs a one-click reset of the LTE module. The button is horizontally mounted and designed for easy operation.
- **PWR Button**:In the off state, pressing the button powers on the HAT.
○While powered on, pressing and holding the button turns it off.

### DIP Switches

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/dipswitches.PNG"
    style={{ width: 150}}
  />
</div>

- **Power-On Self-Start Switch**:
  - **0 (Off)**: Disabled.
  - **1 (On)**: Enables automatic power-on of the LTE HAT after power is applied.
- **External Power Switch**:
  - **0 (Off)**: Disabled.
  - **1 (On)**: Allows external power supply via the USB-C 2 interface.
- **RX Connection Switch**:
  - **0 (Off)**: Disabled.
  - **1 (On)**: Enables communication with the Raspberry Pi UART-RX.
- **TX Connection Switch**:
  - **0 (Off)**: Disabled.
  - **1 (On)**: Enables communication with the Raspberry Pi UART-TX.
- **RST Connection Switch**:
  - **0 (Off)**: Disabled.
  - **1 (On)**: Allows the Raspberry Pi to control LTE module resets via GPIO.
- **PWR Connection Switch**:
  - **0 (Off)**: Disabled.
  - **1 (On)**: Enables the Raspberry Pi to control the LTE module’s power state via GPIO.

### Layout

The 4G LTE HAT is designed with careful alignment and placement for seamless integration with the Raspberry Pi 5:

- **USB-C 1 Connector**: After installation, it aligns vertically with the Raspberry Pi 5’s USB 3.0 interface.
- **USB-C 2 Connector**: Aligns vertically with the Raspberry Pi 5’s USB-C power port.
- **Nano SIM Card Slot**: Positioned to align vertically with the Raspberry Pi 5’s Ethernet port.
- **Status Lights (PWR/NET)**: These lights are vertically aligned with the Raspberry Pi 5’s status LEDs for clear visibility.
- **Antenna Connectors**: Three evenly spaced antenna connectors are located at the rear of the board for easy attachment.
- **Boot Pads**: Conveniently located on the outer edge of the board, allowing users to easily short-circuit them for boot mode operations.

This thoughtful layout ensures compatibility, ease of use, and an organized setup when paired with the Raspberry Pi 5.

## HAT Structure and Raspberry Pi Compatibility

The 4G LTE HAT is designed to match the Raspberry Pi’s size, ensuring seamless integration. Key compatibility and structural features include:

- **40-Pin GPIO Alignment**: The HAT connects through the 40-pin GPIO header and aligns perfectly with the Raspberry Pi. A stacking connector is added to maintain compatibility with the official Raspberry Pi heatsink.
  
- **USB-A to USB-C Adapter Support**: After installing the stacking connector, the USB-C 1 port is positioned at an appropriate height, allowing direct connection with a USB-A to USB-C adapter.
  
- **Camera Connector Access**: The PCB layout reserves space around the Raspberry Pi 5 camera connector, with holes provided to allow the camera cable to pass through easily.

- **Fixed Mounting Holes**: The HAT includes four mounting holes that align with the Raspberry Pi 5’s mounting points, ensuring secure attachment using copper pillars and screws.
  
- **Height Adjustment**: The stacking header raises the HAT to a suitable height above the Raspberry Pi, providing clearance for components and ensuring the USB-C 1 port is accessible.
  
These design considerations make the HAT fully compatible with the Raspberry Pi 5 while maintaining ease of installation and functionality.

## Assemble Guide

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/steps.jpg"
    style={{ width: 900}}
  />
</div>

## Software Preparation

### For Windows

**Step 1: Install Drivers**

For Windows users, [download and install](https://www.quectel.com/download/quectel_lte5g_windows_usb_driver_v2-7/) the required driver for your module.
This is mandatory for proper communication with the module.

**Step 2: Connect the Module**
Plug the module into your PC using the USB cable.
Ensure the SIM card is properly inserted into the module.

**Step 3: Power On the Module**
Press the Power Button on the module to turn it on.

**Step 4: Access Communication Ports**
Once the driver is installed, you will see three separate COM ports available for communication with the module.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/drivers.PNG"
    style={{ width: 400}}
  />
</div>

**Step 5: Install GUI Tool (QCOM v1.6)**

[Download and install](https://www.quectel.com/download/qcom_v1-6/ ) QCOM v1.6, a graphical interface for interacting with the module.
Open the tool to begin sending AT commands.

**Step 6: Configure and Test the COM Port**

Open the GUI tool and select the appropriate COM port for the module.
Adjust the communication settings as required (e.g., baud rate).

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/USBcommunication-2.PNG"
    style={{ width: 600}}
  />
</div>

In the command typing box, type the following test command:

```bash
AT
```

**Step 7: Verify Output**

The module will respond with the following output if the setup is successful:

```bash
OK
```

### Raspberry Pi

**Step 1: Install Drivers**

- **1.1. Verify Kernel Compatibility**
Ensure your Raspberry Pi has the latest kernel installed. Use the following command to check the kernel version:

```bash
uname -r
```

For this guide, the kernel version is 6.6.xx (Bookworm). Install the corresponding Quectel USB Driver.

- **1.2. Update and Install Required Tools**
Run the following commands to update the system and install necessary tools:

```bash
sudo apt upgrade
sudo apt install git make gcc
```

- **1.3. Download and Install the Quectel USB Driver**
Clone the driver repository and build the driver:

```bash
git clone https://github.com/QuecPython/Quectel_Linux_USB_Serial_Option_Driver.git
cd Quectel_Linux_USB_Serial_Option_Driver/src/v6.4.11
sudo make install
```

- **1.4. Connect and Verify**

Connect the module to the Raspberry Pi via USB.
Press the power button on the module.
Verify the module is properly detected:

```bash
lsusb
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb-rpi-small.PNG"
    style={{ width: 600}}
  />
</div>

```bash
ls /dev/ttyUSB*
```

For AT commands, use /dev/ttyUSB2 as the communication port.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb-list.PNG"
    style={{ width: 600}}
  />
</div>

**Step 2: Install Minicom**

- **2.1. Install Minicom**
Install the Minicom tool for sending AT commands:

```bash
sudo apt install minicom
```

- **2.2. Configure Minicom**
Run Minicom in setup mode:

```bash
sudo minicom -s
```

Configure settings such as:

```bash
Port: /dev/ttyUSB2
Baud Rate: 9600
Parity: N
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/usb-settings.PNG"
    style={{ width: 600}}
  />
</div>

**Step 3: Test with AT Commands**

- **3.1 Open Minicom on the configured port**

```bash
sudo minicom -D /dev/ttyUSB2
```

Type the following command to test communication:

```bash
AT
```

The module should respond with:

```bash
OK
```

## Resources

- **[Web Page]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[DOC ]** [AT Commands Manual V2.0](https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/Quectel_EC2xEG9xEG2x-GEM05_Series_AT_Commands_Manual_V2.0.pdf)

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
