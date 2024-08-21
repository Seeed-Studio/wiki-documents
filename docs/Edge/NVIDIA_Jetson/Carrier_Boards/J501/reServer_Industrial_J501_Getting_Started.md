---
description: This wiki introduces the features of the J501 carrier board and explains how to flash the Jetpack system onto the J501 carrier board.
title: Flash Jetpack
keywords:
- reServer
- Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reserver_j501_getting_started
last_update:
  date: 08/19/2024
  author: Youjiang
---

# Getting Started with reServer J501

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/reServer_J501.jpeg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J401-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-without-Power-Adapter-p-5637.html">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
  </a>
</div>

The J501 carrier board is a powerful extension board that supports NVIDIA Jetson AGX Orin modules. It features rich data ports and extension interfaces, completely unleashed the full performance of the AGX Orin module. Also it supports adding GMSL extension to connect up to 8 GMSL cameras.

## Features 

- **Build most powerful AI computer for edge computing:** Design to intgerate with  Jetson AGX Orin module, with up to 275 TOPS AI performance, 8 times AI performance compared to Jetson AGX Xavier. Power configurable between 15W and 60W.
- **High-speed interface support for multiple sensors:** 22 lanes of PCIe Gen4, 1x 10GbE, a Display Port, 16 lanes of MIPI CSI-2, USB 3.2 interfaces, and a 40-pin header.
- **Low-speed interface support for multiple IO:** 4x DI, 4x DO, 3x GND_DI, 2x GND_DO, 1x GND_ISO, 1x CAN, 1x RS232/RS422/RS485.
<!-- - **BSP ready for development:** Jetpack 6 supported Board BSP ready for developing your custom system image. -->


## Specifications

<div class="table-center">
<table>
  <tbody>
    <tr>
      <td rowSpan={7}>I/O</td>
      <td>Ethernet</td>
      <td> 1x LAN0 RJ45 GbE (10/100/1000Mbps), <br /> 1x LAN RJ45 GbE PoE(PSE 802.3 af 15 W, 10/100/1000Mbps) </td>
    </tr>
    <tr>
      <td>USB</td>
      <td> 3x USB3.1, <br /> 1x USB3.1 Type C(Host mode), <br /> 1x USB2.0 Type C(Device mode) </td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td> 4x DI,4x DO,3x GND_DI,2x GND_DO,1x GND_ISO,1x CAN
1x RS232/RS422/RS485 </td>
    </tr>
    <tr>
      <td>Display</td>
      <td> 1x HDMI 2.1 Type A 7680x4320 </td>
    </tr>
    <tr>
      <td>SATA</td>
      <td> 2x SATA III 6.0Gbps at 30 Hz </td>
    </tr>
    <tr>
      <td>SIM</td>
      <td> 1x Nano SIM card slot </td>
    </tr>
    <tr>
      <td>Button</td>
      <td> Reset Button, Recovery Button </td>
    </tr>
    <tr>
      <td rowSpan={9}>Expansion</td>
      <td> Mini PCIE </td>
      <td> 1x Mini PCIe for LoRaWAN®/4G/Series Wireless (Module not included) </td>
    </tr>
    <tr>
      <td> M.2 Key B </td>
      <td> 1x M.2 Key B (3042/3052) support 4G/5G (Module not included) </td>
    </tr>
    <tr>
      <td> M.2 Key E </td>
      <td> 1x M.2 Key E </td>
    </tr>
    <tr>
      <td> M.2 Key M </td>
      <td> 1x M.2 Key M (PCIE 4.0) </td>
    </tr>
    <tr>
      <td> Fan </td>
      <td> 1x Fan connectors (5V PWM) </td>
    </tr>
    <tr>
      <td> TPM </td>
      <td> 1x TPM 2.0 connector (Module not included) </td>
    </tr>
    <tr>
      <td> RTC </td>
      <td> 1x RTC socket (CR1220 included), <br />1x RTC 2-pin </td>
    </tr>
    <tr>
      <td> Camera </td>
      <td> 2x Expansion connector (8lanes for each connector) </td>
    </tr>
    <tr>
      <td> PCIE </td>
      <td> 1x PCIE </td>
    </tr>
    <tr>
      <td> Power </td>
      <td> Power Supply </td>
      <td> DC 12V-36V Terminal block 2 pin (included 24V/5A Power Adapter)</td>
    </tr>
    <tr>
      <td rowSpan={3}> Mechanical </td>
      <td> Dimensions (W x D) </td>
      <td> 176 x 163mm (Module not included)</td>
    </tr>
    <tr>
      <td> Operating Temerature </td>
      <td> -20~60℃ </td>
    </tr>
    <tr>
      <td> Weight </td>
      <td> 225g (Module not included) </td>
    </tr>
  </tbody>
</table>
</div>

## Hardware Overview 

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/hardware_overview.jpeg"/>
</div>


## Flash JetPack OS to J501 Carrier Board

Here, we will show you how to flash [Jetpack](https://developer.nvidia.com/embedded/jetson-linux-archive) to an NVMe SSD connected to the reServer J501.

### Supported Module
- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5458.html) 
- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-JETSON-AGX-ORIN-64GB-Module-p-5552.html) 

### Prerequisites

- Ubuntu host PC
- reServer J501 Carrier Board
- NVIDIA® Jetson AGX Orin™ Module 32GB/64GB
- AGX Orin Active Fan
- NVMe M.2 2280 Internal SSD
- USB Type-C data transmission cable

:::note
We do not recommend using virtual machines and ARM architecture Ubuntu for flashing.
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
      <th>Download Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>5</td>
      <td>AGX Orin 32GB</td>
      <td>❌</td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERG3upqXAQNHsJP6ZvG2MAEBGsndVCgrLnhcKvtWoGA6tA?e=14KO6z" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EZ7iNOxMxL9AjcKFPLygVT8Bg5qnkE-ZsMmNmHkZzNayOg?e=qv2sbB" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>❌</td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ESfErbFgQl9NudcbGZXL3LMB9wavWcQwjtW6wYYtfwkE3A?e=H5sR4J" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eccs1larF2FNhKi8MHred5kB4pQImN4ZHSgDM3BUDVzBtQ?e=reKIhD" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
  </tbody>
</table>
</div>

:::danger
The image file is approximately 4.5GB in size and should take around 15 minutes to download. Please kindly wait for the download to complete.
:::

### Enter Force Recovery Mode

:::info
Before we can move on to the installation steps, we need to make sure that the board is in force recovery mode.
:::

<div align="center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/CGMGZGqZPKM" title="J501 Enter Force Recovery Mode" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<details>

<summary> Step-by-Step </summary>

**Step 1.** Press and hold the force recovery button without releasing it.

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/button.jpg" />
</div>

**Step 2.** Power up the carrier board by connecting the power cable.

**Step 3.** Release the force recovery button.

**Step 4.** Connect the board to the Ubuntu host PC with a USB Type-C data transmission cable.

**Step 5.** On the Linux host PC, open a Terminal window and enter the command `lsusb`. If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode.

- For AGX Orin 32GB: **0955:7223 NVidia Corp**
- For AGX Orin 64GB: **0955:7423 NVidia Corp**

The below image is for AGX Orin 32GB

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### Flash to Jetson

**Step 1:** Extract the downloaded image file:

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

**Step 3:** Connect the J501 to a display using the HDMI connector on the board and finish the initial configuration setup:

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