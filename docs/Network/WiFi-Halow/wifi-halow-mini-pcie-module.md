---
description: Getting Started with Wi-Fi HaLow Mini PCIe Module 
title: Getting Started with Wi-Fi HaLow Mini PCIe Module 
image: https://files.seeedstudio.com/wiki/wifi_halow/pic/0.webp
slug: /getting_started_with_wifi_halow_mini_pcie_module
last_update:
  date: 02/12/2025
  author: Citric
---

# Getting Started with Wi-Fi HaLow Mini PCIe Module

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/0.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-mini-PCIe-Module-p-6394.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div><br />

This guide will walk you through setting up and using the Wi-Fi HaLow Mini PCIe Module to build a Wi-Fi HaLow gateway. The Mini PCIe form factor makes it easy to integrate Wi-Fi HaLow connectivity into existing systems and create IoT gateways that can connect numerous low-power devices over long distances.

## Overview

The Wi-Fi HaLow Mini PCIe Module is designed to enable long-range wireless connectivity for IoT applications. It provides:

- Standard Mini PCIe interface for easy integration
- Support for IEEE 802.11ah Wi-Fi HaLow protocol
- Range up to 1km line-of-sight
- Low power consumption
- Ability to connect thousands of IoT devices

## What is Wi-Fi HaLow?

Wi-Fi HaLow (IEEE 802.11ah) is a wireless networking technology specifically designed for Internet of Things (IoT) applications. Operating in the sub-1 GHz frequency band, it offers several key advantages:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/Wi-Fi_HaLow_frequency_band_graphic.png" style={{width:800, height:'auto'}}/></div>

### Key Benefits

- **Extended Range**: Can reach up to 1 kilometer in line-of-sight conditions, far exceeding traditional Wi-Fi
- **Better Penetration**: Lower frequency signals can penetrate walls and obstacles more effectively
- **Energy Efficiency**: Optimized for battery-powered IoT devices
- **High Scalability**: Supports thousands of connected devices per access point
- **Native IP Support**: Seamless integration with existing IP networks

### Applications

Wi-Fi HaLow is ideal for:

- Smart Agriculture
- Industrial IoT
- Smart Cities
- Building Automation
- Environmental Monitoring
- Asset Tracking

### Why It Matters

Wi-Fi HaLow addresses critical challenges in IoT deployments:

1. **Coverage Gap**: Bridges the gap between short-range Wi-Fi and cellular networks
2. **Battery Life**: Enables years of operation on battery power
3. **Deployment Cost**: Reduces infrastructure costs compared to cellular solutions
4. **Standardization**: Based on familiar Wi-Fi standards for easier adoption
5. **Security**: Incorporates enterprise-grade WPA3 security

By combining long range, low power, and high device density capabilities, Wi-Fi HaLow is positioned to become a key technology for large-scale IoT deployments across various industries.

## OpenWrt Overview

The Wi-Fi HaLow Mini PCIe Module runs on OpenWrt, a highly extensible Linux operating system primarily designed for embedded devices like routers. Here's what makes OpenWrt an excellent platform for Wi-Fi HaLow gateways:

### What is OpenWrt?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png" style={{width:800, height:'auto'}}/></div>

OpenWrt is a Linux-based operating system that provides:

- A fully writable filesystem with package management
- High modularity allowing you to customize functionality
- Support for a wide range of embedded devices
- Active development community and regular updates
- Extensive networking capabilities

### Benefits for Wi-Fi HaLow Deployments

OpenWrt provides an ideal platform for Wi-Fi HaLow gateways because:

- **Stability**: Rock-solid Linux foundation for 24/7 operation
- **Flexibility**: Easy customization for specific IoT requirements
- **Performance**: Optimized networking stack for efficient data handling
- **Security**: Enterprise-grade security features built-in
- **Community**: Large ecosystem of developers and users

The combination of OpenWrt and Wi-Fi HaLow creates a powerful foundation for building robust IoT networks that can scale from small deployments to large industrial installations.

## Materials Required

Here are the materials needed to run this tutorial.

<div class="table-center">
    <table align="center">
        <tr>
            <th>Raspberry Pi 4 Model B</th>
            <th>WiFi HaLow Mini PCIe Module</th>
        </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/raspberrypi4b.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/0.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
        <tr>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM6180-Wi-Fi-HaLow-mini-PCIe-Module-p-6394.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div></td>
        </tr>
    </table>
</div>

Additionally, you will need the following items:

- **[Mini PCIe to PCIe adapter](https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html)** - For connecting the Wi-Fi HaLow Mini PCIe Module to Raspberry Pi.
- **Heatsink for Raspberry Pi** - Recommended for thermal management during continuous operation.
- **MicroSD card (8GB or larger)** - For storing the OpenWrt firmware.
- **MicroSD card reader** - For reading the MicroSD card.
- **Ethernet cable** - Used to connect to the host computer and configure the Raspberry Pi's WiFi-Halow.
- **Power supply for Raspberry Pi**
- **Computer** - for flashing the firmware and configuring the Raspberry Pi's WiFi-Halow.
- **Antenna** - For extending the range of the Wi-Fi HaLow Mini PCIe Module. Here are the verified, recommended antenna models.

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
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/wifi_halow/pic/install_pcie_wifi_halow_module.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Installing WiFi Halow for OpenWrt to Raspberry Pi

This section will guide you through setting up a Raspberry Pi 4 as a Wi-Fi HaLow gateway using a pre-built OpenWrt firmware image.

### Download Firmware

Download the pre-built OpenWrt Image with Wi-Fi HaLow support from:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Wvirgil123/openwrt/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Image</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Flash Firmware to MicroSD Card

1. Download and install **[balenaEtcher](https://www.balena.io/etcher/)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/balenaEtcher.png" style={{width:1000, height:'auto'}}/></div>

2. Insert your MicroSD card into your computer.
3. Launch balenaEtcher.
4. Click "Flash from file" and select the downloaded OpenWrt firmware.
5. Select your MicroSD card as the target.
6. Click "Flash!" and wait for the process to complete.

### Setup and First Boot

1. Insert the flashed MicroSD card into your Raspberry Pi 4
2. Connect an Ethernet cable between your computer and the Raspberry Pi
3. Power on the Raspberry Pi
4. Wait approximately 2-3 minutes for the system to boot

### Accessing the Gateway Interface

1. Configure your computer's Ethernet interface to use DHCP, or set a static IP in the 10.42.0.x range
2. Open a web browser
3. Navigate to: http://10.42.0.1/
4. You should see the Morse Micro login page

:::note
The default login credentials are:

- Username: root
- No need to enter a password

:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip
If you cannot access the interface:

- Verify your Ethernet connection
- Check that your computer is receiving an IP address
- Try pinging 10.42.0.1 to verify connectivity

:::

## Configure the Raspberry Pi as an Access Point

Log in to the Morse Micro interface. On the welcome page, please follow the example in the image below to configure your country.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/2.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Currently, this device only supports the US and does not support other countries or regions.
:::

After configuring your country, you can set the **Hostname** and **Password** according to your actual situation. Please keep this information safe, as you will need to use this password to access the device (ssh) later. Then click the **Next** button in the bottom right corner.

Please select the **Access Point** option in the new page.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/3.png" style={{width:1000, height:'auto'}}/></div>

Then click the **Next** button, and on the new page, set the Wi-Fi HaLow network credentials. Please remember them, as your client devices will need these to connect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/4.png" style={{width:1000, height:'auto'}}/></div>

Click the **Next** button, then select **Ethernet** on the new page and choose **Bridge**. Configuring the network in this way allows for seamless communication between devices on the Ethernet and Wi-Fi networks, enabling a unified network experience for connected devices.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/5.png" style={{width:1000, height:'auto'}}/></div>

Then wait for the network configuration to take effect.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/6.png" style={{width:1000, height:'auto'}}/></div>

When the following interface appears, you can disconnect the Raspberry Pi from the computer and connect the Ethernet cable between your router and the Raspberry Pi. Then, check the Raspberry Pi's IP address through the router's admin page.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/7.png" style={{width:1000, height:'auto'}}/></div>

For my device, the IP address is: <strong>192.168.1.168</strong>. Entering this address in the browser will allow you to access the Wi-Fi HaLow gateway's backend page.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wifi_halow/pic/8.png" style={{width:1000, height:'auto'}}/></div>

## Resources

- **[PDF]** [UG MM6108 Eval Kit User Guide 2.6 - v18](https://files.seeedstudio.com/wiki/wifi_halow/res/UG_MM6108_Eval_Kit_User_Guide_2.6-v18.pdf)
- **[PDF]** [Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0](https://files.seeedstudio.com/wiki/wifi_halow/res/Quectel_FGH100M-H_Short-Range_Module_Specification_V1.0.0_Preliminary_20241018.pdf)
- **[PDF]** [WiFi-Halow Mini PCIe Module SCH PDF](https://files.seeedstudio.com/wiki/wifi_halow/res/Wio-WM6108_V30_SCH_20241107.pdf)
- **[KiCAD]** [WiFi-Halow Mini PCIe Module KiCAD PCB File](https://files.seeedstudio.com/wiki/wifi_halow/res/Wio-WM6108_V30.kicad_pcb)

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
