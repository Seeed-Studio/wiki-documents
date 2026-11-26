---
description: Getting Started with reComputer Robotics J50 Mini
title: Getting Started with reComputer Robotics J50 Mini
keywords:
  - reComputer Robotics
  - reComputer Robotics J50 Mini
  - Jetson
  - Getting Started
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-100020407-recomputer-mini-j5011-with-gmsl-64g_1.jpg
slug: /ai_robotics_recomputer_robotics_j50_mini_getting_started
sku: 100085113
last_update:
  date: 11/16/2026
  author: Shijun
createdAt: '2026-11-16'
updatedAt: '2026-11-18'
url: https://wiki.seeedstudio.com/ai_robotics_recomputer_robotics_j50_mini_getting_started/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';
import { getL4TData } from '@site/src/components/jetson/DownloadLink';

# Getting Started with reComputer Robotics J50 Mini

<div align="center">
  <img width="600" alt="reComputer Mini J501 complete system" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-100020407-recomputer-mini-j5011-with-gmsl-64g_1.jpg" />
</div>

reComputer Robotics J50 Mini (reComputer Mini J501) is a compact edge AI computer for robotics and embedded AI development, available as **J5011 with NVIDIA Jetson AGX Orin 32GB** and **J5012 with NVIDIA Jetson AGX Orin 64GB**. Both GMSL configurations include a **128GB NVMe SSD** and an **eight-channel GMSL expansion board**. The enclosure measures **119 × 119 × 100 mm** and weighs **1325 g**.

The platform can be used with NVIDIA Isaac ROS, ROS, PyTorch, and other Jetson-compatible software for multi-camera perception, sensor integration, and robotics development.

:::note
Available customization options: logo branding, packaging, and firmware flashing.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J5011-with-GMSL-Extension-p-6876.html" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Buy J5011 · 32GB 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J5012-with-GMSL-Extension-p-6878.html" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Buy J5012 · 64GB 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Customize Now ➜</font></span></strong></a>
</div>

## Features

- **AGX Orin performance:** Up to 275 TOPS with the 64GB module, supporting perception and edge AI workloads.
- **Compact enclosure:** A 119 × 119 mm footprint for space-constrained robot integration.
- **Camera connectivity:** The J5012 with GMSL includes the GMSL expansion board for up to eight GMSL2 cameras; use compatible cameras and drivers.
- **Wired and wireless expansion:** 10GbE and 1GbE networking, plus M.2 Key E for Wi-Fi/Bluetooth expansion.
- **Robotics I/O:** Isolated CAN and RS485, digital inputs/outputs, I2S, USB, and HDMI.
- **48V system integration:** XT30 power input with a specified 19–48V DC operating range and a 54V maximum input rating.

## Specifications

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>Jetson AGX Orin System on Module</th></tr>
    <tr><th colSpan={2}>Specifications</th><th>reComputer Mini J5011</th><th>reComputer Mini J5012</th></tr>
    <tr><td colSpan={2}>Module</td><td>NVIDIA Jetson AGX Orin 32GB</td><td>NVIDIA Jetson AGX Orin 64GB</td></tr>
    <tr><td colSpan={2}>AI Performance</td><td>Up to 200 TOPS</td><td>Up to 275 TOPS</td></tr>
    <tr><td colSpan={2}>GPU</td><td>1792-core NVIDIA Ampere architecture GPU<br />56 Tensor Cores</td><td>2048-core NVIDIA Ampere architecture GPU<br />64 Tensor Cores</td></tr>
    <tr><td colSpan={2}>GPU Max Frequency</td><td>930 MHz</td><td>1.3 GHz</td></tr>
    <tr><td colSpan={2}>CPU</td><td>8-core Arm Cortex-A78AE</td><td>12-core Arm Cortex-A78AE</td></tr>
    <tr><td colSpan={2}>CPU Max Frequency</td><td colSpan={2}>2.2 GHz</td></tr>
    <tr><td colSpan={2}>Memory</td><td>32GB 256-bit LPDDR5<br />204.8 GB/s</td><td>64GB 256-bit LPDDR5<br />204.8 GB/s</td></tr>
    <tr><td colSpan={2}>Module Storage</td><td colSpan={2}>64GB eMMC 5.1</td></tr>
    <tr><td colSpan={2}>Video Encoder</td><td>1 × 4K60 / 3 × 4K30 (H.265)<br />6 × 1080p60 / 12 × 1080p30 (H.265)</td><td>2 × 4K60 / 4 × 4K30 (H.265)<br />8 × 1080p60 / 16 × 1080p30 (H.265)</td></tr>
    <tr><td colSpan={2}>Video Decoder</td><td>1 × 8K30 / 2 × 4K60 / 4 × 4K30 (H.265)<br />9 × 1080p60 / 18 × 1080p30 (H.265)</td><td>1 × 8K30 / 3 × 4K60 / 7 × 4K30 (H.265)<br />11 × 1080p60 / 22 × 1080p30 (H.265)</td></tr>
    <tr><td colSpan={2}>Module Power</td><td>15W / 40W</td><td>15W / 60W</td></tr>
    <tr><td colSpan={2}>JetPack</td><td colSpan={2}>Preinstalled JetPack 6.2; supports JetPack 7.2</td></tr>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>Carrier Board</th></tr>
    <tr><td colSpan={2}>Storage</td><td colSpan={2}>128GB NVMe SSD included<br />1 × M.2 Key M for NVMe 2280 SSD</td></tr>
    <tr><td rowSpan={2} style={{verticalAlign: 'middle'}}>Networking</td><td>Ethernet</td><td colSpan={2}>1 × RJ45 10GbE; 1 × RJ45 1GbE</td></tr>
    <tr><td>Wireless Expansion</td><td colSpan={2}>1 × M.2 Key E for a Wi-Fi/Bluetooth module</td></tr>
    <tr><td rowSpan={10} style={{verticalAlign: 'middle'}}>I/O</td><td>USB</td><td colSpan={2}>2 × USB 3.2 Gen 2 Type-A (10Gbps)<br />1 × USB 2.0 Type-C (Debug)<br />1 × USB 3.0 Type-C (Recovery)</td></tr>
    <tr><td>Display</td><td colSpan={2}>1 × HDMI 2.1</td></tr>
    <tr><td>CAN</td><td colSpan={2}>2 × isolated CAN</td></tr>
    <tr><td>RS485</td><td colSpan={2}>1 × isolated RS485</td></tr>
    <tr><td>Digital I/O</td><td colSpan={2}>4 × GPI (3.3V); 4 × GPO (3.3V)</td></tr>
    <tr><td>I2S</td><td colSpan={2}>1 × I2S (3.3V)</td></tr>
    <tr><td>Fan</td><td colSpan={2}>1 × 4-pin fan connector (12V PWM)</td></tr>
    <tr><td>RTC</td><td colSpan={2}>1 × 2-pin RTC header</td></tr>
    <tr><td>Indicators</td><td colSpan={2}>PWR, ACT and USR LEDs</td></tr>
    <tr><td>Buttons</td><td colSpan={2}>1 × Reset; 1 × Recovery</td></tr>
    <tr><td colSpan={2}>Power Input</td><td colSpan={2}>1 × XT30; 19–48V DC; maximum input 54V</td></tr>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>GMSL Extension Board</th></tr>
    <tr><td colSpan={2}>GMSL Connectivity</td><td colSpan={2}>Included in both with-GMSL configurations<br />2 × Mini-Fakra connectors for up to 8 GMSL2 cameras</td></tr>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>Others</th></tr>
    <tr><td rowSpan={3} style={{verticalAlign: 'middle'}}>Mechanical</td><td>Dimensions (W × D × H)</td><td colSpan={2}>119 × 119 × 100 mm</td></tr>
    <tr><td>Weight</td><td colSpan={2}>1325 g</td></tr>
    <tr><td>Installation</td><td colSpan={2}>Desktop</td></tr>
    <tr><td colSpan={2}>Operating Temperature</td><td colSpan={2}>−10°C to 60°C</td></tr>
  </tbody>
</table>
</div>

## Hardware Overview

<div align="center">
  <img width="800" alt="reComputer Mini J501 hardware overview 1" src="https://media-cdn.seeedstudio.com/cdn-cgi/image/format=auto%2Cwidth=3840%2Cquality=100/media/wysiwyg/111-photo/1.hard.100020407.png" />
</div>

<div align="center">
  <img width="800" alt="reComputer Mini J501 hardware overview 2" src="https://www.seeedstudio.com/media/catalog/product/h/a/hardware_img_2.jpg" />
</div>

<div align="center">
  <img width="800" alt="Mini J501 carrier board top view" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/top.png" />
</div>

<div align="center">
  <img width="800" alt="Mini J501 carrier board side view" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/side.png" />
</div>

<div align="center">
  <img width="800" alt="Mini J501 carrier board bottom view" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/bottom.png" />
</div>


## Flash JetPack OS

This section shows how to flash the Mini J501 system image to the NVMe SSD in reComputer Robotics J50 Mini.

### Supported NVIDIA Jetson Modules

- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### Prerequisites

- Ubuntu host PC
- reComputer Robotics J50 Mini with its Jetson AGX Orin module, NVMe SSD, and compatible power supply
- USB Type-C data transmission cable

:::info

We recommend that you use physical ubuntu host devices instead of virtual machines.
Please refer to the table below to prepare the host machine.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowSpan="2"> JetPack Version </td>
        <td class="dbon" colSpan="4"> Ubuntu Version (Host Computer) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
        <td > 24.04 </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 7.2</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

<p><strong>Note:</strong> For JetPack 7.2, Ubuntu 24.04 is supported for flashing and target-side component installation only. Use Ubuntu 20.04 or 22.04 if you need host development components.</p>

:::

### Prepare the JetPack Image

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
      <td rowSpan={2}>7.2</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href={getL4TData("j501mini-agx-orin-64g", "39.2.0").mainlink}>Download</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-64g", "39.2.0").sha256}</code></td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href={getL4TData("j501mini-agx-orin-32g", "39.2.0").mainlink}>Download</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-32g", "39.2.0").sha256}</code></td>
    </tr>
    <tr>
      <td rowSpan={2}>6.2.1</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href={getL4TData("j501mini-agx-orin-64g", "36.4.4 (GMSL✅)").mainlink}>Download</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-64g", "36.4.4 (GMSL✅)").sha256}</code></td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href={getL4TData("j501mini-agx-orin-32g", "36.4.4 (GMSL✅)").mainlink}>Download</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-32g", "36.4.4 (GMSL✅)").sha256}</code></td>
    </tr>
  </tbody>
</table>
</div>

:::danger
The JetPack image files are large and may take around 60 minutes to download. Please wait for the download to complete.
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

**Step 1.** Press and hold the **REC** button.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/other/recomputer-mini-j501-flash-Interface2.png" />
</div>

**Step 2.** Power up the carrier board by connecting the power cable, then release **REC** button .

**Step 3.** Connect the board to the Ubuntu host PC with a USB Type-C data transmission cable.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/other/recomputer-mini-j501-flash-Interface1.png" />
</div>

**Step 4.** On the Linux host PC, open a Terminal window and enter the command `lsusb`. If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode.

- For AGX Orin 32GB: **0955:7223 NVidia Corp**
- For AGX Orin 64GB: **0955:7023 NVidia Corp**

The below image is for AGX Orin 32GB:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### Flash to Jetson Step by Step

**Step 1:** Extract the downloaded image file:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For JetPack 7.2 example: sudo tar xpf mfi_recomputer-mini-agx-orin-j501x-32g-7.2.0-39.2.0-2026-06-25.tar.gz
# For JetPack 6.2.1 example: sudo tar xpf mfi_recomputer-mini-agx-orin-32g-j501-6.2.1-36.4.4-2026-02-11.tar.gz
```

**Step 2:** Execute the following command to flash jetpack system to the NVMe SSD:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-mini-agx-orin-32g-j501-6.2.1-36.4.4-2026-02-11
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

You will see the following output if the flashing process is successful

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
The flash command may run for 2-10 minutes.
:::

**Step 3:** Connect reComputer Robotics J50 Mini to a display through HDMI, then complete the initial system configuration:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Please complete the **System Configuration** according to your needs.
:::

**Step 4 (optional):** Install the NVIDIA JetPack SDK. Open a terminal on the Jetson and run:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## Hardware Interfaces Usage

:::info[Hardware Interface Guide]
**Click the button below to open the Mini J501 interface guide for connector pinouts, wiring, and step-by-step usage instructions.**
:::

<div style={{display: 'flex', justifyContent: 'center', margin: '1rem 0'}}>
  <a className="button button--primary button--lg" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', lineHeight: '1.4', padding: '0.9rem 1.5rem'}} href="https://wiki.seeedstudio.com/recomputer_j501_mini_getting_started/#-interfaces-usage" target="_blank" rel="noopener noreferrer">
    <span>Open Hardware Interface Guide ↗</span>
  </a>
</div>

## Resources

- [Seeed Jetson BSP source code](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [Complete-system User Manual & Datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Mini_J501_Datasheet.pdf)
- [Mini J501 carrier board schematic](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Mini%20J501%20Carrier%20Board_Rev1.0_SCH_251027.pdf)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Tech Support & Product Discussion

Thank you for choosing our products! For technical support and product discussions, use the following channels.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum" aria-label="Seeed Studio forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email" aria-label="Contact Seeed Studio"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord" aria-label="Seeed Studio Discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion" aria-label="GitHub discussions"></a>
</div>
