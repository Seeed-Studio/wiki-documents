---
description: The reComputer Robotics J401 is a high-performance edge AI carrier board designed for advanced robotics applications. It supports NVIDIA Jetson Orin Nano and Orin NX modules in Super/MAXN mode, delivering up to 157 TOPS of AI computing power. The board offers extensive connectivity options, including dual Gigabit Ethernet, multiple USB 3.2 ports, CAN, M.2 slots for 5G/Wi-Fi/BT modules, and optional GMSL2 camera support. Pre-installed with JetPack 6, it ensures seamless deployment for robotics development. The rugged design supports wide operating temperatures and includes a pre-installed heatsink with fan. The setup involves flashing the JetPack OS onto an NVMe SSD using a compatible Ubuntu host PC, followed by hardware configuration and interface usage. Detailed hardware specifications, mechanical drawings, and technical resources are provided for developers, along with community and technical support channels for troubleshooting and discussion.
title: Getting Started with reComputer Robotics
tags:
  - J401-Robotics carrier board
  - Jetson
  - Robotics
  - reComputer
  - reComputer Robotics
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer-robotics_2.webp
slug: /recomputer_robotics_j401_getting_started
last_update:
  date: 08/06/2025
  author: Zibo
---

<div style={{ textAlign: "justify" }}>
The reComputer Robotics J401 is a compact, high-performance edge AI carrier board designed for advanced robotics. Compatible with NVIDIA Jetson Orin Nano/Orin NX modules in Super/MAXN mode, it delivers up to 157 TOPS of AI performance. Equipped with extensive connectivity options—including dual Gigabit Ethernet ports, M.2 slots for 5G and Wi-Fi/BT modules, 6 USB 3.2 ports, CAN, GMSL2 (via optional expansion), I2C, and UART—it serves as a powerful robotic brain capable of processing complex data from various sensors. Pre-installed with JetPack 6 and Linux BSP, it ensures seamless deployment.​
</div>

<div align="center">
  <img width ="600" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

<!-- Buy links -->

## Features

- **Robust Hardware Design**: A compact, high-performance edge AI computer with NVIDIA® Jetson™ Orin™ NX 16GB module in Super/MAXN mode, providing up to 157 TOPS of AI performance.
- **Multiple Interfaces for robotics**: Including dual RJ45, M.2 slots for 5G/Wi-Fi/BT modules, 6x USB 3.2, 2x CAN, GMSL2(additional purchase), I2C, and UART, functioning as a powerful robotic brain.
- **Software Setup**: Pre-installed with JetPack 6.2 and Linux BSP for seamless deployment.
- **Application and Benefit**: Ideal for rapid development of autonomous robots, accelerating time-to-market with ready-to-use interfaces and optimized AI frameworks.
- **Wide Operating Range**: Operates reliably across a temperature range of -20°C to 60°C at 25W mode and -20°C to 50°C at 40W mode

## Specification

### Carrier Board Specifications

<table border="1" cellPadding="8" cellSpacing="0">
  <thead>
    <tr>
      <th>Category</th>
      <th>Item</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowSpan="1">Storage</th>
      <td>M.2 KEY M PCIe</td>
      <td>1x M.2 KEY M PCIe (M.2 NVMe 2280 SSD 128G included)</td>
    </tr>
    <tr>
      <th rowSpan="3">Networking</th>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E for WiFi/Bluetooth module</td>
    </tr>
    <tr>
      <td>M.2 KEY B</td>
      <td>1x M.2 Key B for 5G module</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>2x RJ45 Gigabit Ethernet</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>6x USB 3.2 Type-A (5Gbps);<br />1x USB 3.0 Type-C (Host/DP 1.4);<br />1x USB 2.0 Type-C (Device Mode/Debug)</td>
    </tr>
    <tr>
      <td>Camera</td>
      <td>1x 4 in 1 GMSL2 (mini fakra) (optional board)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN0 (XT30(2+2));<br />3x CAN1 (4-Pin GH 1.25 Header)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1x DP1.4 (Type C Host)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART 4-Pin GH 1.25 Header</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td>2x I2C 4-Pin GH 1.25 Header</td>
    </tr>
    <tr>
      <td>Fan</td>
      <td>1x 4-Pin Fan Connector (5V PWM);<br />1x 4-Pin Fan Connector (12V PWM)</td>
    </tr>
    <tr>
      <td>Extension Port</td>
      <td>1x Camera Expansion Header (for GMSL2 board)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2-pin;<br />1x RTC Socket</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>3x LED (PWR, ACT, and User LED)</td>
    </tr>
    <tr>
      <td>Pinhole Button</td>
      <td>1x PWR;<br />1x RESET</td>
    </tr>
    <tr>
      <td>DIP Switch</td>
      <td>1x REC</td>
    </tr>
    <tr>
      <td>Antenna Hole</td>
      <td>5x Antenna Hole</td>
    </tr>
    <tr>
      <th rowSpan="1">Power</th>
      <td colSpan="2">19-54V XT30(2+2) (XT30 to 5525 DC Jack Cable included)</td>
    </tr>
    <tr>
      <th rowSpan="1">Jetpack Version</th>
      <td colSpan="2">Jetpack 6</td>
    </tr>
    <tr>
      <th rowSpan="3">Mechanical</th>
      <td>Dimensions (W x D x H)</td>
      <td>115mm x 115mm x 38mm</td>
    </tr>
    <tr>
      <td>Weight</td>
      <td>1100g</td>
    </tr>
    <tr>
      <td>Installation</td>
      <td>Desk, Wall-mounting</td>
    </tr>
    <tr>
      <th rowSpan="1">Operating Temperature</th>
      <td colSpan="2">-20℃~55℃ (25W Mode);<br />-20℃~50℃ (MAXN Mode);<br />(with reComputer Robotics heat sink with fan)</td>
    </tr>
    <tr>
      <th rowSpan="1">Warranty</th>
      <td>2 Years</td>
    </tr>
    <tr>
      <th rowSpan="1">Certification</th>
      <td>RoHS, REACH, CE, FCC, UKCA, KC</td>
    </tr>
  </tbody>
</table>

## Hardware Overview

<div align="center">
  <img width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-_J4011-3.jpeg"/>  
</div>

<div align="center">
  <img width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-robotic-1.jpeg"/>  
</div>

<div align="center">
  <img width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-robotic-2.jpeg"/>  
</div>

## Flash JetPack OS

### Supported Module

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### Prerequisites

- Ubuntu host PC
- reComputer Robotics
- NVIDIA® Jetson Orin™ Nano/NX Module
- USB Type-C data transmission cable

:::info

We recommend that you use physical ubuntu host devices instead of virtual machines.
Please refer to the table below to prepare the host machine.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack Version </td>
        <td class="dbon" colspan="3"> Ubuntu Version (Host Computer) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

### Prepare the Jetpack Image

Here, we need to download the system image to our Ubuntu PC corresponding to the Jetson module we are using:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetpack Version</th>
      <th>Jetson Module</th>
      <th> GMSL </th>
      <th>Download Link1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWqAOoqYYxNAky0Dbo847q0BDWsiSBUmyrxAMzNV9SQyNw?e=ZuOFnx">Download</a></td>
      <td>c63d1219531245abecc7bbdcafc73d3<br />4f75547454c7af85de40f08396a87e5ee</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERy0O0zUQGlKh8cDHZIoSPEBcHFJOGY6rE0gVBGCE6tBvA?e=eDw71c">Download</a></td>
      <td>5d1f3cd28eb44ca60132c87ccce5aca<br />f806ee945b486df9061a34de73fbb582b</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EewEJTne6ltJlP0IDzahaCYB9rJWUIvKXe5b0p76rlYr_A?e=tsuNbP">Download</a></td>
      <td>e7f0c8e6b578d411f81122879f92c76<br />66adfada5ed493a4cc458dc169ca8c1b7</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdXbblXVvqZDv3DqdJOR8u8BXV6rW6BVwoss0EMC-sLcfQ?e=WiW2F9">Download</a></td>
      <td> b08cbdad8ab6e50222146d3175a9d2<br />627d499bf1d67cfaf69cc737b5bfa9e33a</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
The Jetpack6 image file is approximately **14.2GB** in size and should take around 60 minutes to download. Please kindly wait for the download to complete.
:::

:::info
To verify the integrity of the downloaded firmware, you can compare the SHA256 hash value.

On an Ubuntu host machine, open the terminal and run the command `sha256sum <File>` to obtain the SHA256 hash value of the downloaded file. If the resulting hash matches the SHA256 hash provided in the wiki, it confirms that the firmware you downloaded is complete and intact.
:::

### Enter Force Recovery Mode

:::info
Before we can move on to the installation steps, we need to make sure that the board is in force recovery mode.
:::

<details>

<summary> Step-by-Step </summary>

**Step 1.** Switch the switch to the RESET mode.

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/flash1.jpg" />
</div>

**Step 2.** Power up the carrier board by connecting the power cable.

**Step 3.** Connect the board to the Ubuntu host PC with a USB Type-C data transmission cable.

**Step 4.** On the Linux host PC, open a Terminal window and enter the command `lsusb`. If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode.

- For Orin NX 16GB: **0955:7323 NVidia Corp**
- For Orin NX 8GB: **0955:7423 NVidia Corp**
- For Orin Nano 8GB: **0955:7523 NVidia Corp**
- For Orin Nano 4GB: **0955:7623 NVidia Corp**

The below image is for Orin Nano 8GB

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### Flash to Jetson

**Step 1:** Extract the downloaded image file:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-robo-orin-nano-8g-j401-6.2-36.4.3-2025-05-23.tar.gz
```

**Step 2:** Execute the following command to flash jetpack system to the NVMe SSD:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-robotics-j401 
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

You will see the following output if the flashing process is successful

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
The flash command may run for 2-10 minutes.
:::

**Step 3:** Connect the Robotics J401 to a display use the PD to HDMI adapter to connect to a display that supports HDMI input, or directly connect to a display that supports PD input using the PD cable, and finish the initial configuration setup:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Please complete the **System Configuration** according to your needs.
:::

## Hardware Interfaces Usage

:::info
If you want to learn more about the detailed specifications and usage of the hardware interface, please refer to [this wiki](https://wiki.seeedstudio.com/recomputer_jetson_robotics_j401_getting_started/#interfaces-usage).
:::

## Resources

- [reComputer Robotics J401 Carrier Board Schematic](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Robotics%20J401_V1.0_SCH_250421.pdf)
- [reComputer Robotics J401 Carrier Board Datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)
- [reComputer Robotics 3D file](https://files.seeedstudio.com/products/NVIDIA-Jetson/recomputer_robotics_j401.stp)
- [Mechanical Document-reComputer Robotics PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Robotics_PCBA.dxf)
- [Seeed NVIDIA Jetson Product Catalog](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf)
- [Nvidia Jetson Comparison](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Nvidia Jetson Success Cases](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson One Pager](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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
