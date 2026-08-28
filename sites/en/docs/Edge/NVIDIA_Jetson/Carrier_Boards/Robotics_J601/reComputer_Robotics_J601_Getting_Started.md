---
description: Getting started with the reComputer Robotics J601 carrier board for NVIDIA Jetson AGX Thor modules.
title: Getting Started with reComputer Robotics J601
sidebar_label: Flash JetPack
keywords:
  - reComputer Robotics J601
  - AGX Thor
  - Jetson
  - Carrier Board
  - Robotics
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_robotics_recomputer_robotics_j601_carrier_board_getting_started
sku: 100060965
last_update:
  date: 08/28/2026
  author: haochen
createdAt: '2026-04-24'
updatedAt: '2026-08-28'
url: https://wiki.seeedstudio.com/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import J601DemoGrid from '@site/src/components/jetson/J601DemoGrid';

# Getting Started with reComputer Robotics J601

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg"/>
</div>

The reComputer J601 is a compact yet powerful edge AI carrier board for Jetson AGX Thor, delivering up to 2070 TFLOPS. Built for development and production, it features M.2 Key E/M/B, 4x 10Gb RJ45, 4×USB 3.2, HDMI 2.1, 8×GMSL, and various IO's, ensuring seamless integration. It can be served as brain of humanoid. Supporting LLM & Physical AI frameworks like NVIDIA Isaac, Hugging Face, PyTorch, and ROS2/1, it bridges AI and robotics. With optimized real-time processing, it runs vision AI, transformers, and multimodal models, unlocking advanced AI for edge devices.

## Features

- Supports **NVIDIA Jetson AGX Thor T5000 and T4000** modules
- Up to **2070 TFLOPS** of AI performance
- Up to **4x 10GbE RJ45** ports
- **4x USB 3.2 Type-A** ports at up to 10Gbps
- **HDMI 2.1** display output
- **M.2 Key M** for PCIe Gen 4 NVMe 2280 SSD
- **M.2 Key E** for M.2 2230 Wi-Fi modules
- **M.2 Key B** for 4G/5G modules
- Up to **8x GMSL2 cameras** through two Mini-Fakra connectors and GMSL extension boards
- Robotics I/O including isolated CAN, RS-232/422/485, I2C, I2S, GPI, and GPO
- Wide-range **19V to 48V DC** input through XT30
- Software platform: **JetPack 7.1**

## Specifications

<div class="table-center">
<table>
  <tbody>
    <tr>
      <td>Module Compatibility</td>
      <td>NVIDIA Jetson AGX Thor T5000 / T4000</td>
    </tr>
    <tr>
      <td>PCB Size</td>
      <td>168 mm x 155 mm (without the Jetson AGX Thor module)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>4x USB 3.2 Type-A (10Gbps, Host), 1x USB 2.0 Type-C (Debug), 1x USB 3.0 Type-C (Recovery)</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>4x RJ45 10GbE with T5000; 3x RJ45 10GbE with T4000</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td>1x M.2 Key M for PCIe Gen 4 NVMe 2280 SSD</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td>1x M.2 Key E for M.2 2230 Wi-Fi module</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td>1x M.2 Key B for 4G/5G module</td>
    </tr>
    <tr>
      <td>Serial</td>
      <td>1x RS-232/422/485 (DB9 connector)</td>
    </tr>
    <tr>
      <td>JST Ports</td>
      <td>4x CAN with T5000 or 2x CAN with T4000, 1x RS-485, 1x I2S, 1x I2C, 4x GPI, and 4x GPO</td>
    </tr>
    <tr>
      <td>Audio</td>
      <td>1x microphone input and 1x audio output</td>
    </tr>
    <tr>
      <td>Fan</td>
      <td>1x 4-pin fan connector (12V PWM)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2-pin header</td>
    </tr>
    <tr>
      <td>LEDs</td>
      <td>1x green PWR LED, 1x green SSD LED, and 1x RGB USR LED</td>
    </tr>
    <tr>
      <td>Buttons</td>
      <td>1x Recovery button and 1x Reset button</td>
    </tr>
    <tr>
      <td>GMSL</td>
      <td>2x Mini-Fakra connectors for up to 8x GMSL2 cameras</td>
    </tr>
    <tr>
      <td>Operating Temperature</td>
      <td>-10°C to 60°C with thermal grease; -10°C to 55°C with a thermal pad</td>
    </tr>
    <tr>
      <td>Power Supply</td>
      <td>XT30, 19V to 48V DC</td>
    </tr>
    <tr>
      <td>JetPack</td>
      <td>JetPack 7.1</td>
    </tr>
  </tbody>
</table>
</div>

## Hardware Overview

| **Side View 1** |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_04.jpg) |
| **Side View 2** |
| ![fig2](https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_05.jpg) |
| **Bottom View** |
| ![fig3](https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_06.jpg) |

## Flash JetPack

Here, we will show you how to flash JetPack to an NVMe SSD connected to the reComputer Robotics J6014 / J6015. Both devices use the J601 carrier board, and the flashing procedure is the same.

### Supported Module

- [NVIDIA Jetson T4000 module](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T4000-Module-p-6939.html)
- [NVIDIA Jetson T5000 module](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T5000-Module-p-6938.html)

### Prerequisites

- Ubuntu host PC
- reComputer Robotics J6014 or J6015
- NVMe M.2 2280 Internal SSD
- USB Type-C data transmission cable
- At least 220 GB of free storage on the host PC

:::info
We recommend using a physical Ubuntu host instead of a virtual machine. Seeed Jetson DevelopTool also supports Windows through WSL2, but a native Ubuntu host provides the most reliable flashing experience.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack Version </td>
        <td class="dbon" colspan="3"> Ubuntu Version (Host Computer) </td>
    </tr>
    <tr>
        <td > 20.04 </td>
        <td > 22.04 </td>
        <td > 24.04 </td>
    </tr>
    <tr>
        <td >JetPack 7.1</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

### Choose a Flashing Method

Select either the graphical Seeed Jetson DevelopTool workflow or the command-line workflow below.

<Tabs groupId="j601-flashing-method">

<TabItem value="software" label="Software Flashing" default>

Seeed Jetson DevelopTool provides a guided graphical workflow that downloads, verifies, extracts, and flashes the firmware without requiring BSP commands. Install the tool by following the [Seeed Jetson DevelopTool installation guide](/jetson_developtool_installation).

#### Video Tutorial

<div class="video-container">
<iframe width="1071" height="803" src="https://www.youtube.com/embed/O2rlSOdYujE" title="Flash Jetpack for reCompurer J601 by Jetson Develop Tool!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### Software Flashing Workflow

<details>

<summary> Step-by-Step </summary>

**Step 1.** Launch Seeed Jetson DevelopTool and open **Flash Center**. Select **reComputer J601** and **JetPack 7.1 (L4T 38.4.0)**.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_07.jpg"/></div>

**Step 2.** Connect the host PC to the **USB 3.0 Type-C flashing port**. Press and hold the **RECOVERY** button, connect the 19V to 48V DC power supply through XT30, and then release the button after two seconds.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_08.jpg"/></div>

**Step 3.** Click **Detect Device**. Confirm that the connected Jetson module is detected (for example, **AGX Thor T5000**), and then click **Next**.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_09.jpg"/></div>

**Step 4.** Click **Download / Prepare BSP**. The tool downloads the firmware, verifies its SHA256 checksum, and extracts the BSP automatically.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_10.jpg"/></div>

**Step 5.** Click **Start Flash** and wait until the interface reports that flashing is complete. Do not disconnect the power supply or USB cable during this process.

:::caution
Flashing erases the data on the target NVMe SSD. Back up important data before you begin.
:::

**Step 6.** Connect the reComputer Robotics J601 to an HDMI display and complete the initial system configuration.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

</details>

</TabItem>

<TabItem value="command-line" label="Command-Line Flashing">

Download and flash the JetPack image that matches the Jetson module on your board. Both products use the same J601 carrier board; select the tab for your module:

<Tabs groupId="j601-thor-module">

<TabItem value="t5000" label="AGX Thor T5000 (J6015)" default>

#### Prepare the JetPack Image

<div class="table-center">
<table style={{textAlign: 'center', tableLayout: 'fixed', width: '100%'}}>
  <colgroup>
    <col style={{width: '18%'}} />
    <col style={{width: '22%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
    <col style={{width: '26%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>JetPack Version</th>
      <th>Jetson Module</th>
      <th>Product</th>
      <th>Download Link</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1 (L4T 38.4.0)</td>
      <td>AGX Thor T5000</td>
      <td>reComputer Robotics J6015</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAq5ofKK9Y1RaCzAfJ8-3J4ARhePBbGBc-mcjQ1bNAP0bY?e=CbmAN9" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td style={{overflowWrap: 'anywhere'}}>3f75780b43f6559bc950b6a97aa38fd6f61d4d001cce870bdfb498f64e6d18e5</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
The JetPack image file is large and may take around 60 minutes to download. Wait for the download to finish before extracting the archive.
:::

To verify the downloaded firmware, run `sha256sum <file>` on the Ubuntu host and compare the result with the SHA256 value in the table.

#### Enter Force Recovery Mode

:::info
Before flashing, make sure the board is in Force Recovery Mode.
:::

**Step 1.** Connect the Ubuntu host PC to the **USB 3.0 Type-C flashing port** using a USB Type-C data cable.

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_03.jpg"/></div>

**Step 2.** Press and hold the **RECOVERY** button.

**Step 3.** Connect the power supply (19V to 48V DC through XT30).

**Step 4.** Release the **RECOVERY** button after two seconds.

**Step 5.** On the host PC, run `lsusb`. The following entry confirms that the board is in Force Recovery Mode:

- **0955:7026 NVIDIA Corp.**

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_02.jpg"/></div>

#### Flash to Jetson

**Step 1.** Extract the downloaded image:

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6015-7.1-38.4.0-YYYY-MM-DD.tar.gz
```

**Step 2.** Flash JetPack to the NVMe SSD:

```bash
cd mfi_recomputer-thor-carrier-j6015
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6015 external
```

The flash command usually takes 2–10 minutes. The following output indicates a successful flash:

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

**Step 3.** Connect the reComputer Robotics J6015 to an HDMI display and complete the initial system configuration.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

</TabItem>

<TabItem value="t4000" label="AGX Thor T4000 (J6014)">

#### Prepare the JetPack Image

<div class="table-center">
<table style={{textAlign: 'center', tableLayout: 'fixed', width: '100%'}}>
  <colgroup>
    <col style={{width: '18%'}} />
    <col style={{width: '22%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
    <col style={{width: '26%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>JetPack Version</th>
      <th>Jetson Module</th>
      <th>Product</th>
      <th>Download Link</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1 (L4T 38.4.0)</td>
      <td>AGX Thor T4000</td>
      <td>reComputer Robotics J6014</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBofCO4bWF9SLdbLQE1V8DgAS1tW6-UmQGEH3ULOZ7W16o?e=zdnK3s" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td style={{overflowWrap: 'anywhere'}}>c63eddfe7005a088ab439c64fb5d3bf9a52b85d62d377c6a4bf829295f7222ef</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
The JetPack image file is large and may take around 60 minutes to download. Wait for the download to finish before extracting the archive.
:::

To verify the downloaded firmware, run `sha256sum <file>` on the Ubuntu host and compare the result with the SHA256 value in the table.

#### Enter Force Recovery Mode

:::info
Before flashing, make sure the board is in Force Recovery Mode.
:::

**Step 1.** Connect the Ubuntu host PC to the **USB 3.0 Type-C flashing port** using a USB Type-C data cable.

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_03.jpg"/></div>

**Step 2.** Press and hold the **RECOVERY** button.

**Step 3.** Connect the power supply (19V to 48V DC through XT30).

**Step 4.** Release the **RECOVERY** button after two seconds.

**Step 5.** On the host PC, run `lsusb`. The following entry confirms that the board is in Force Recovery Mode:

- **0955:7226 NVIDIA Corp.**

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_02.jpg"/></div>

#### Flash to Jetson

**Step 1.** Extract the downloaded image:

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6014-7.1-38.4.0-YYYY-MM-DD.tar.gz
```

**Step 2.** Flash JetPack to the NVMe SSD:

```bash
cd mfi_recomputer-thor-carrier-j6014
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6014 external
```

The flash command usually takes 2–10 minutes. The following output indicates a successful flash:

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

**Step 3.** Connect the reComputer Robotics J6014 to an HDMI display and complete the initial system configuration.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

</TabItem>

</Tabs>

⚙️ **All `.dts` files and other source code for Seeed's Jetson carrier boards can be downloaded from** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra).

</TabItem>

</Tabs>

:::info
Complete the **System Configuration** according to your needs after the first boot.
:::

For detailed interface usage, please refer to [Robotics J601 Hardware Interfaces Usage](/recomputer_jetson_robotics_j601_interfaces_usage).

## What Can You Do with J601?

After you flash JetPack, explore the demo wikis below to see what you can build on reComputer Robotics J601. These cards are generated automatically from published Jetson **Application** and **Other Devices** wikis that mention **J601** or **Jetson Thor**.

<J601DemoGrid />

## Resources

- [reComputer J601 Carrier Board Datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601_datasheet.pdf)
- [reComputer J601 Carrier Board Schematic](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20J601%20Carrier%20Board_V1.0_SCH_260612.pdf)
- [reComputer J601 3D File](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601.stp)
- [Seeed NVIDIA Jetson Product Catalog](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed NVIDIA Jetson Success Cases](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson AGX One Pager](https://files.seeedstudio.com/wiki/reComputer-Jetson/seeed_jetson_agx_new_series.pdf)
- [Linux_for_Tegra BSP source](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [reComputer J601 Carrier Board Product Page](https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thor-p-6937.html)

## Tech Support

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
