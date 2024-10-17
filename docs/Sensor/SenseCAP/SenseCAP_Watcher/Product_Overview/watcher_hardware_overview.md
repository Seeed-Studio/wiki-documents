---
description: Hardware components of the SenseCAP Watcher.
title: Hardware overview
image: https://files.seeedstudio.com/wiki/watcher_getting_started/0.JPG
slug: /watcher_hardware_overview
sidebar_position: 1
last_update:
  date: 10/17/2024
  author: Citric
---


### Specification

<div class="table-center">
	<table align="center">
        <tr>
            <th>Hardware</th>
            <th>Description</th>
        </tr>
        <tr>
            <td align="center">MCU</td>
            <td align="center">ESP32-S3 @240MHz 8MB PSRAM</td>
        </tr>
        <tr>
            <td align="center">Built-in AI Processor</td>
            <td align="center">Himax HX6538 (Cortex M55 + Ethos-U55)</td>
        </tr>
        <tr>
            <td align="center">Camera</td>
            <td align="center">OV5647 120° FOV <br /> Fixed Focal 3 meters</td>
        </tr>
        <tr>
            <td align="center">Wi-Fi</td>
            <td align="center">IEEE 802.11b/g/n-compliant<br />2.4GHz Band<br />Wireless Range: Up to 100 meters (open space test)</td>
        </tr>
        <tr>
            <td align="center">Bluetooth LE</td>
            <td align="center">Bluetooth 5</td>
        </tr>
        <tr>
            <td align="center">Antenna</td>
            <td align="center">Built-in Wi-Fi and BLE antenna</td>
        </tr>
        <tr>
            <td align="center">Display</td>
            <td align="center">Touchscreen with 1.45-inch, 412×412 resolution</td>
        </tr>
        <tr>
            <td align="center">Microphone</td>
            <td align="center">Single microphone</td>
        </tr>
        <tr>
            <td align="center">Speaker</td>
            <td align="center">1W speaker output</td>
        </tr>
        <tr>
            <td align="center">Wheel</td>
            <td align="center">Supports scrolling up&down and button</td>
        </tr>
        <tr>
            <td align="center">LED</td>
            <td align="center">1xRGB light for indication</td>
        </tr>
        <tr>
            <td align="center">microSD Card Slot</td>
            <td align="center">Supports up to 32GB FAT32 microSD card</td>
        </tr>
        <tr>
            <td align="center">Flash</td>
            <td align="center">32MB Flash for ESP32-S3<br />16MB Flash for Himax HX6538</td>
        </tr>
        <tr>
            <td align="center">Extension Interface</td>
            <td align="center">1xGrove IIC interface<br />2x4 Female header(1xIIC, 2xGPIO, 2xGND, 1x3.3V_OUT, 1x5V_IN)</td>
        </tr>
        <tr>
            <td align="center">USB-C</td>
            <td align="center">1x USB-C on the back(power supply only)<br />1x USB-C on the bottom(power supply and programming)</td>
        </tr>
        <tr>
            <td align="center">Reset Button</td>
            <td align="center">1xRST button in the bottom hole</td>
        </tr>
        <tr>
            <td align="center">Power Supply</td>
            <td align="center">5V DC power</td>
        </tr>
        <tr>
            <td align="center">Battery</td>
            <td align="center">3.7V 400mAh Li-ion battery as backup power</td>
        </tr>
        <tr>
            <td align="center">Operating Temperature</td>
            <td align="center">0 ~ 45°C</td>
        </tr>
        <tr>
            <td align="center">Mounting Bracket</td>
            <td align="center">Supports wall, desktop and bracket installation<br />1 x Universal wheel and base plate with adhesive<br />1 x 1/4" Female adapter set</td>
        </tr>
    </table>
</div>


### Features

- High efficiency architecture with on-device + server AI processing
- Extensive with Infinite Modal 
- Ensuring Privacy with Open Source and On-Premise Deployment 
- Customizable Emotional Responses


## Hardware Overview

Before everything starts, it is quite essential to have some basic parameters of the product. The following table provides information about the characteristics of SenseCAP Watcher.

### Front View

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-1.png" style={{width:1000, height:'auto'}}/></div>

### Back View

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-2.png" style={{width:1000, height:'auto'}}/></div>

### Inside

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-3.png" style={{width:1000, height:'auto'}}/></div>

### Mounting Interface

On the back of your Watcher device, you will find a Mounting Bracket that allows you to securely attach the device to various surfaces or accessories. Currently, we offer two types of mounting brackets to accommodate different placement needs:

:::tip
Please note that the Watcher body does not come with any of the stands below, so if you need a stand, please purchase it separately.
:::

- **360° Rotate Bracket**

   - This bracket is designed for easy installation on walls or other vertical surfaces.
   - It provides a full 360 degrees of rotation, allowing you to adjust the orientation of your Watcher device to achieve the desired viewing angle.
   - The rotate bracket offers flexibility in positioning and ensures a secure attachment to the wall.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/omni_wheel_bracket.gif" style={{width:650, height:'auto'}}/></div><br />

- **1/4 Thread Tripod Bracket**

   - This bracket is ideal for placing your Watcher on flat surfaces such as desks, tables, or shelves.
   - It features a standard 1/4-inch thread, making it compatible with most tripods and other mounting accessories.
   - The tripod bracket provides stability and allows you to position your Watcher at various heights and angles, depending on your specific needs.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/threaded_bracket.gif" style={{width:650, height:'auto'}}/></div><br />

To use either of these mounting brackets, follow these general steps:

1. Choose the appropriate bracket based on your intended placement location (wall or flat surface).

2. Attach the selected bracket to the Mounting Bracket on the back of your Watcher device. Ensure a secure connection to prevent any accidental detachment.

3. For the 360° Rotate Bracket:
   - Identify the desired location on the wall where you want to install your Watcher.
   - Use the provided screws and anchors (if necessary) to securely attach the bracket to the wall.
   - Adjust the orientation of your Watcher by rotating it to the desired angle.

4. For the 1/4 Thread Tripod Bracket:
   - Select a stable flat surface where you want to place your Watcher.
   - If using a tripod, attach the tripod to the bracket using the 1/4-inch thread.
   - Adjust the height and angle of the tripod to achieve the optimal viewing position for your Watcher.

5. Once your Watcher is securely mounted using either bracket, you can proceed to connect it to power and configure it according to your preferences.

By offering these two mounting bracket options, we aim to provide flexibility and convenience in integrating your Watcher device into various environments. Whether you prefer a wall-mounted setup or a desk-friendly arrangement, our brackets ensure a secure and adjustable installation.

:::tip
Please note that the Watcher body does not come with any of the stands below, so if you need a stand, please purchase it separately.
:::

### Hardware Diagram

Continuing with the hardware architecture of the Watcher, let's dive into the details provided in the diagram.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/Diagram.png" style={{width:1000, height:'auto'}}/></div>

The heart of the Watcher is the Main MCU, which is an **ESP32-S3** chip. This powerful microcontroller operates at 240MHz and comes with 8MB of PSRAM for efficient processing and memory management.

The ESP32-S3 communicates with various peripherals and interfaces:

1. **Display**: It connects to a **1.45-inch 412*412** LCD Touch Screen via the SPI/I2C interface, allowing for intuitive user interaction and vibrant visual output.

2. **Audio**: The I2S interface enables the ESP32-S3 to communicate with a speaker and a microphone, facilitating audio input and output capabilities.

3. **Storage**: The Watcher is equipped with a Flash 32M module, connected via the SPI interface, providing ample storage for firmware, data, and user files.

4. **Wireless Connectivity**: The ESP32-S3 integrates Wi-Fi and BLE functionality, enabling seamless wireless communication with other devices and networks.

5. **Expandability**: An Expansion Port, connected via the I2C interface, allows for future hardware additions and customization.

6. **User Input**: A Dial Wheel, connected via GPIO/PWM, offers an intuitive way for users to navigate and control the Watcher's functions.

7. **External Storage**: A Micro SD Card slot, interfaced via SPI, enables users to extend the storage capacity of the Watcher for additional data and media files.

8. **Power and Data**: A USB port is available for charging the 400mAh battery and transferring data between the Watcher and other devices.

The AI MCU, a Himax HX6538 chip with Cortex M55 and US5 cores, works alongside the Main MCU to handle AI-related tasks and computations, enhancing the Watcher's intelligent capabilities.

Lastly, the Watcher features a Camera OV5647 module, likely connected via the MIPI interface, enabling computer vision applications and visual sensing.

This comprehensive hardware architecture allows the Watcher to deliver a feature-rich and versatile user experience, combining display, audio, wireless connectivity, storage, and AI capabilities in a compact and efficient design.




