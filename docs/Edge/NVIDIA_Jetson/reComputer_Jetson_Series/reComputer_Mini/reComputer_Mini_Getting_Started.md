---
description: This article provides a getting-started guide for the reComputer Mini (based on the NVIDIA Jetson Orin platform), including the device's specifications and the steps for initial setup and configuration.
title: Getting Started with reComputer Mini
keywords:
  - reComputer
  - reComputer mini
  - embedded computer
  - robots
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.webp
slug: /recomputer_jetson_mini_getting_started
last_update:
  date: 12/11/2024
  author: Youjiang
---

# Getting Started with reComputer Mini

<!-- change image -->

reComputer Mini is a tiny AI computer powered by NVIDIA Jetson Orin Nano/Orin NX module,delivering up to 100 TOPS AI performance. It‘s equipped with PCIe port at the bottom to provide rich expansion capabilities, which also can be customized flexibly. The whole system is designed for embedding into autonomous machines such as drones, patrol robots, delivering robots, etc. It can directly occupy 54V DC input, able to be widely used in battery powered systems.

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-optional-accessories.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlY29tcHUiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjoyLCJjX3RvdGFsX3Jlc3VsdHMiOjg4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

<!-- Buy links -->

## Features

- **Brilliant AI Performance for Production:** Achieves up to **100 TOPS** AI performance with low power and latency, built by NVIDIA Orin SoC combining the NVIDIA Ampere™ GPU architecture with 64-bit operating capability, integrated advanced multi-function video and image processing, and NVIDIA Deep Learning Accelerators.
- **Hand-Size Edge AI Device:** Compact size at **63mmx95mmx42mm**, featuring an NVIDIA Jetson Orin NX 16GB module, Mini J401 carrier board, fan and enclosure. Support desktop and wall mounting.
- **Expandable with Rich I/Os:** Includes up to 7x USB, 1x DP 2.1, 1x RJ45 for GbE, M.2 Key E, M.2 Key M, dual channel CAN, and GPIO with extension board.
- **Accelerate Solutions to Market:** Pre-installed **JetPack 6.0** on 128GB NVMe SSD, Linux OS BSP, supporting Jetson software and leading AI frameworks.
- **Scale to deploy:** support OTA, remote management services powered by Allxon and Balena.
- **Flexible Customization:** inlcudes changing accessories modules, logo, and hardware interfaces modification based on reComputer Mini J4012 original design.

## Specifications

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson Orin System on Module</th>
    </tr>
    <tr>
      <th>Specifications</th>
      <th>reComputer Mini J3010</th>
      <th>reComputer Mini J3011</th>
      <th>reComputer Mini J4011</th>
      <th>reComputer Mini J4012</th>
    </tr>
    <tr>
      <td>Module</td>
      <td>Jetson Orin Nano 4GB</td>
      <td>Jetson Orin Nano 8GB</td>
      <td>Jetson Orin NX 8GB</td>
      <td>Jetson Orin NX 16GB</td>
    </tr>
    <tr>
      <td>AI Performance</td>
      <td>20 TOPS</td>
      <td>40 TOPS</td>
      <td>70 TOPS</td>
      <td>100 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>512-core NVIDIA Ampere architecture GPU with 16 Tensor Cores</td>
      <td colSpan={3}>1024-core NVIDIA Ampere architecture GPU with 32 Tensor Cores</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan={2}>6-core Arm® Cortex®-A78AE v8.2 64-bit CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6-core Arm® Cortex®-A78AE v8.2 64-bit CPU 1.5MB L2 + 4MB L3</td>
      <td>8-core Arm® Cortex®-A78AE v8.2 64-bit CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>CPU Max Frequency</td>
      <td colSpan={2}>1.5 GHz</td>
      <td colSpan={2}>2 GHz</td>
    </tr>
    <tr>
      <td>Memory</td>
      <td>4GB 64-bit LPDDR5<br />34 GB/s</td>
      <td>8GB 128-bit LPDDR5<br />68 GB/s</td>
      <td>8GB 128-bit LPDDR5 102.4GB/s</td>
      <td>16GB 128-bit LPDDR5 102.4GB/s</td>
    </tr>
    <tr>
      <td>DL Accelerator</td>
      <td colSpan={2}>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>Video Encoder</td>
      <td colSpan={2}>1080p30 supported by 1-2 CPU cores</td>
      <td colSpan={2}>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Video Decoder</td>
      <td colSpan={2}>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan={2}>1x 8K30 (H.265)<br />2x 4K60 (H.265)<br />4x 4K30 (H.265)<br />9x 1080p60 (H.265)<br />18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Carrier Board</th>
    </tr>
    <tr>
      <td>Storage</td>
      <td colSpan={4}>128GB NVMe SSD</td>
    </tr>
    <tr>
      <td>Networking</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>1x M.2 Key E for WiFi/Bluetooth module</td>
    </tr>
    <tr>
      <td rowSpan={7}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>2x USB 3.2 Type-A (10Gbps)<br />1x USB 2.0 Micro-B (Device Mode)<br />1x USB 3.0 Type-C (Host Mode)<br />1x USB 2.0 JST-5pin (Host Mode)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td colSpan={3}>1x UART; 1x UART for Debug</td>
    </tr>
    <tr>
      <td>Display</td>
      <td colSpan={3}>1x DP 2.1 (included in Type-C conenctor)</td>
    </tr>
    <tr>
      <td>Fan</td>
      <td colSpan={3}>1x 4 pin Fan Connector (5V PWM)</td>
    </tr>
    <tr>
      <td>Button</td>
      <td colSpan={3}>1x Reset Button; 1x Recovery Button</td>
    </tr>
    <tr>
      <td>Extension Port</td>
      <td colSpan={3}>2x 60 pin High Speed Connector (For extension board)<br />1x 10 pin Power Connector (For extension board)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC 2-pin</td>
    </tr>
    <tr>
      <td>Power</td>
      <td colSpan={4}>1x XT30 Connector (12-54V DC)</td>
    </tr>
    <tr>
      <td colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Extension Board</td>
    </tr>
    <tr>
      <td>Networking</td>
      <td>Ethernet</td>
      <td colSpan={3}>1x RJ-45 Gigabit Ethernet (10/100/1000M)</td>
    </tr>
    <tr>
      <td rowSpan={5}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>4x USB 3.2 Type-A (5 Gbps)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={3}>1x CAN JST 4pin (3.3V); 1x CAN (XT30 2+2) </td>
    </tr>
    <tr>
      <td>Fan</td>
      <td colSpan={3}>1x 4 pin Fan Connector (5V PWM)</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td colSpan={3}>2x I2C JST 4pin (3.3V)</td>
    </tr>
    <tr>
      <td>SPI</td>
      <td colSpan={3}>1x I2S JST 6pin (3.3V)</td>
    </tr>
    <tr>
      <td>Power</td>
      <td colSpan={4}>2x XT30 2+2 Connector (12-54V DC)</td>
    </tr>
    <tr>
      <td colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Others</td>
    </tr>
    <tr>
      <td rowSpan={3}>Mechanical</td>
      <td >Dimensions (W x D x H)</td>
      <td colSpan={3}>63mm * 95mm * 42mm (Without Extension)<br />63mm * 95mm * 66.7mm (With Extension)</td>
    </tr>
    <tr>
      <td>Weight</td>
      <td colSpan={3}>345g (Without Extension)<br />462g (With Extension)</td>
    </tr>
    <tr>
      <td>Installation</td>
      <td colSpan={3}>Desk, wall-mounting</td>
    </tr>
    <tr>
      <td>Operating Temperature</td>
      <td colSpan={4}>-10℃ ~ 50℃</td>
    </tr>
    <tr>
      <td>Warranty</td>
      <td colSpan={4}>1 Year</td>
    </tr>
  </tbody>
</table>
</div>

## Hardware Overview

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_mini/hardware_overview.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B1.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B2.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B3.png"/>  
</div>

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/B4.png"/>  
</div>

## Flash JetPack OS

Here, we will show you how to flash [Jetpack 6.0](https://developer.nvidia.com/embedded/jetson-linux-archive) to an NVMe SSD connected to the reComputer Mini.

### Supported Nvidia Jetson Module

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5554.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5552.html)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5523.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html)

### Prerequisites

- Ubuntu Host Computer
- reComputer Mini J4012/ J4011/ J3010 or J3011
- USB Micro-B data transmission cable

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
        <td >JetPack 5.x</td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
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
      <th>Download Link</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>5.1.3</td>
      <td>Orin Nx 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDSbMzCkdgXTJsBIw2bFLCgAV5njnZV4i3Tqk62-Z9UZGE?e=9dWNfh" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>82ab9068c5e03081391d22dc5d7c4db<br />ac9041016c1dd7a7ec2475871a10fd543</td>
    </tr>
    <tr>
      <td>Orin Nx 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC6mf8MQDgwRIDZweH69G45AYoMudFTg8oc5CiEyGU9jg8?e=KrAaiV" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>5f016131a9ab6e90c3bd21850efe13b<br />479d72046aea4aa6d3bd2f3a04df5a7a2</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCqGvCStwmPRpVHo4yBNEJEAfiD6w_iCeRtB0IuXotrdK0?e=P5sImI" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>a2ea4d9ad06e66e2befab14484471cb<br />6984ccef396e59262c83c40ed7911bbb2</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQApozlc_COgSLacJfvEAe6vAXeBTLY6z8H5WOfGQMGiLU4?e=ePzheb" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>928a20a94320e901576cfd8679affc2<br />6caae9e9a30f3bc9497534f42ac4093cc</td>
    </tr>
    <tr>
      <td rowSpan={4}>6.0</td>
      <td>Orin Nx 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcQFCfXEWVREuzwvvBX7vRsBlr9H6HQpTBzmDw0rigIt1Q?e=IzLuYu" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>7B4ABE1D1A8711D5D4E9B676DBB1E76<br />CDA35C614608CE7ECE112BC4A50E71C7C</td>
    </tr>
    <tr>
      <td>Orin Nx 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUpeLu1P7RJOv7-nqR7QbmABfmWR45xVUt95bMplpp25mQ?e=oiWB6b" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>3956B968F2BFB9FDF37D952E83DDB70<br />3980C813156919BC367CA5E23BBDEC89F</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWbSLkBX0XpIrFjkT0vndGsBysfm51HvFkBFsRnfRaWBxA?e=t7vRcH" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>BF6921DF313B467254154BDA835C379<br />AD86D817E03D0301543B62F7CA0C9222F</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUB7YoQeCrVHnDjsrfFaL8EBxkjRrclpDxFwDB3dJpM3xQ?e=oYHLp7" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>8941C13204A8069CE70B109B6A13EA2<br />40CBB02F69B8D4028D465134B3744BC28</td>
    </tr>
    <tr>
      <td rowSpan={2}>6.2</td>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVjuq6G9y_5OjIxMIHFiBj0BVckYdcRQBunaXMHFBLZ3tw?e=tY89se" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>A1C5F44B19B6C06E11AC38ABDA79AD6<br />CBFF2AAFBEEA7BF3A14B2FE08EA37267F</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcdaeIBdGRpCp0Dev5R3o1sB2Tr4HIwjgtp3d_XX7lE9Gg?e=bxteCW" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td>23855098982DD1E05C025D3F078BCA0<br />2F396C1FB68DC58E539D83569A894571D</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
The Jetpack6 image file is approximately **16.7GB** in size and should take around 60 minutes to download. Please kindly wait for the download to complete.
:::

:::info
To verify the integrity of the downloaded firmware, you can compare the SHA256 hash value.

On an Ubuntu host machine, open the terminal and run the command `sha256sum <File>` to obtain the SHA256 hash value of the downloaded file. If the resulting hash matches the SHA256 hash provided in the wiki, it confirms that the firmware you downloaded is complete and intact.
:::

### Enter Force Recovery Mode

:::info
Before we can move on to the installation steps, we need to make sure that the board is in force recovery mode.
:::

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/HEIXFkizP5Y" title="Enter Force Recovery Mode (reComputer Mini)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<details>

<summary> Step-by-Step </summary>

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini_rec.png" />
</div>

- **Step 1.**  Connect a USB Micro-B cable between USB2.0 DEVICE port and the ubuntu host PC.
- **Step 2.**  Use a pin and insert into the RECOVERY hole to press recovery button and while holding this.
- **Step 3.**  Connect the power supply.
- **Step 4.**  Release the recovery button.

</details>

On the Linux host PC, open a Terminal window and enter the command `lsusb`. If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode.

- For Orin NX 16GB: 0955:7323 NVidia Corp
- For Orin NX 8GB: 0955:7423 NVidia Corp
- For Orin Nano 8GB: 0955:7523 NVidia Corp
- For Orin Nano 4GB: 0955:7623 NVidia Corp

The below image is for Orin Nx 16GB:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"/>
</div>

### Flash to Jetson with Single Command

<details>

<summary> Flash the device with a single command. </summary>

The reComputer Jetson J30/40 Mini has launched a one-click flashing script, which supports flashing Jetpack 6.0.

```bash
wget -O ./flashing.sh https://files.seeedstudio.com/OSHW_Jetson/flashing.sh  && sudo chmod 777 ./flashing.sh && ./flashing.sh
```

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZFBzTlyOjhE?si=uNN-l5VVGbAyGnot" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::caution
Disclaimer: The one-click flashing script aims to make jetpack flashing quicker. The current version is a beta one and may have many problems. We hope for your understanding. If there are flashing issues, follow the `Flash The Device Step by Step` below and give feedback in our [Discord Jetson channel](https://discord.com/channels/862602258452578314/930732339624026152). We'll fix them promptly and improve this function in the near future.
:::

</details>

### Flash to Jetson Step by Step

**Step 1:** Extract the downloaded image file on ubuntu host PC:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Step 2:** Execute the following command to flash jetpack system to the NVMe SSD:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

You will see the following output if the flashing process is successful

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
The flash command may run for 2-10 minutes.
:::

**Step 3:** Connect the J401 to a display using the **USB Type-C with DisplayPort** on the board and finish the initial configuration setup:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Please complete the **System Configuration** according to your needs.
:::

**Step 4 (Optional):** Install Nvidia Jetpack SDK

Please open the terminal on the Jetson device and execute the following commands:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## Hardware Interfaces Usage

:::info
If you want to learn more about the detailed specifications and usage of the hardware interface, please refer to [this wiki](https://wiki.seeedstudio.com/recomputer_jetson_mini_hardware_interfaces_usage/).
:::

## Resources

- [reComptuer Mini Datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_datasheet_V1.0.pdf)
- [reComptuer Mini Schematic](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_SCH.7z)
- [reComputer Mini 3D file](https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_Mini_3D.7z)
- [Seeed Jetson Serials Catalog](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio Edge AI Success Stories](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson Serials Comparision](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson Devices One Page](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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
