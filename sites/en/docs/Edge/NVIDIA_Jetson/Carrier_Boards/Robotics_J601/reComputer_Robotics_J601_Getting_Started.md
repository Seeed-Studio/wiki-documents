---
description: This wiki introduces the features of the reComputer Robotics J601 carrier board and explains how to flash the JetPack system onto the J601 carrier board.
title: Flash Jetpack
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
  date: 06/29/2026
  author: Dayu
createdAt: '2026-04-24'
updatedAt: '2026-07-27'
url: https://wiki.seeedstudio.com/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/
---

# Getting Started with reComputer Robotics J601

The reComputer J601 is a compact yet powerful edge AI carrier board for NVIDIA Jetson AGX Thor, delivering up to 2070 TFLOPS. Built for development and production, it features M.2 Key E/M/B, 4x 10Gb RJ45, 4x USB 3.2, HDMI 2.1, 8x GMSL, and various industrial I/O interfaces, ensuring seamless integration for robotics workloads.

It can serve as the brain of a humanoid robot. Supporting LLM and Physical AI frameworks like NVIDIA Isaac, Hugging Face, PyTorch, and ROS 2/1, it bridges AI and robotics. With optimized real-time processing, it runs vision AI, transformers, and multimodal models, unlocking advanced AI for edge devices.

## Features

- **High-performance edge AI for robotics:** Designed for NVIDIA Jetson AGX Thor T5000 / T4000 modules, delivering up to 2070 TFLOPS for embodied AI and robotic control workloads.
- **High-speed connectivity:** 4x RJ45 10GbE (3x 10GbE on T4000), 4x USB 3.2 Type-A (10Gbps), HDMI 2.1, and M.2 Key E/M/B expansion.
- **Industrial I/O:** 4x isolated CAN, 1x RS-232/422/485 DB9, 1x RS-485 JST, 4x GPI, 4x GPO, I2C, and I2S.
- **GMSL vision expansion:** 2x Mini-Fakra connectors with 2x GMSL extension boards for up to 8x GMSL2 cameras.
- **Wide-range power input:** XT30 connector, 19V to 48V DC.

## Specifications

<div class="table-center">
<table>
  <tbody>
    <tr>
      <td rowSpan={8}>I/O</td>
      <td>Ethernet</td>
      <td>4x RJ45 10GbE (3x RJ45 10GbE for T4000)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>4x USB 3.2 Type-A (10Gbps), <br />1x USB 3.0 Type-C (Recovery / Flashing), <br />1x USB 2.0 Type-C (Debug)</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td>4x GPI and 4x GPO via GH-1.25 JST connectors</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>Serial</td>
      <td>1x RS-232/422/485 via DB9 connector, <br />1x RS-485 via GH-1.25 JST connector</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>4x isolated CAN via GH-1.25 JST connectors (T5000); <br />2x CAN (T4000)</td>
    </tr>
    <tr>
      <td>Audio</td>
      <td>1x microphone input, 1x amplifier output</td>
    </tr>
    <tr>
      <td>Button</td>
      <td>Recovery Button, Reset Button</td>
    </tr>
    <tr>
      <td rowSpan={6}>Expansion</td>
      <td>M.2 Key M</td>
      <td>1x M.2 Key M for NVMe 2280 SSD</td>
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
      <td>Fan</td>
      <td>1x 4-pin fan connector for module (12V PWM), <br />1x 4-pin fan connector for device (12V PWM)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2-pin header</td>
    </tr>
    <tr>
      <td>Camera</td>
      <td>2x Mini-Fakra connector for up to 8x GMSL2 cameras (via GMSL extension boards)</td>
    </tr>
    <tr>
      <td>Low-speed Expansion</td>
      <td>I2C / I2S / SPI</td>
      <td>1x I2C JST connector, 1x I2S JST connector, SPI signals on GPO connector</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>LED Indicators</td>
      <td>1x PWR LED (Green), 1x SSD LED (Green), 1x USR LED (RGB)</td>
    </tr>
    <tr>
      <td>Power</td>
      <td>Power Supply</td>
      <td>XT30 connector, DC 19V to 48V</td>
    </tr>
    <tr>
      <td rowSpan={2}>Mechanical</td>
      <td>Dimensions (W x D)</td>
      <td>168 mm x 155 mm (module not included)</td>
    </tr>
    <tr>
      <td>Operating Temperature</td>
      <td>-10°C to +60°C (with thermal grease), <br />-10°C to +55°C (with thermal pad)</td>
    </tr>
  </tbody>
</table>
</div>

## GMSL Extension Board Specifications

The reComputer J601 kit includes 2x GMSL extension boards for camera expansion.

<div class="table-center">
<table>
  <tbody>
    <tr>
      <td>De-serializer</td>
      <td>MAX96712</td>
    </tr>
    <tr>
      <td>GMSL Interface</td>
      <td>2x Mini-Fakra male connector</td>
    </tr>
    <tr>
      <td>GMSL Input</td>
      <td>Up to 8x GMSL2 cameras</td>
    </tr>
    <tr>
      <td>Connection Method</td>
      <td>GMSL2 Fakra 1-to-4 M-M cable</td>
    </tr>
    <tr>
      <td>POC Interface</td>
      <td>Supports simultaneous power and data transmission</td>
    </tr>
  </tbody>
</table>
</div>

## Part List

- Seeed Carrier Board (reComputer J601) x 1
- GMSL Extension Board x 2
- XT30 to DC power connector x 1
- USB Type-C to Type-A cable x 1
- Stud x 4
- JST cable x 9
- User Manual x 1

## Flash JetPack OS to reComputer J601 Carrier Board

Here, we will show you how to flash [JetPack](https://developer.nvidia.com/embedded/jetson-linux-archive) to an NVMe SSD connected to the reComputer J601.

### Supported Module

- NVIDIA Jetson AGX Thor T5000
- NVIDIA Jetson AGX Thor T4000

### Prerequisites

- Ubuntu host PC
- reComputer J601 Carrier Board
- NVIDIA Jetson AGX Thor T5000 / T4000 module
- NVMe M.2 2280 SSD
- USB Type-C data transmission cable
- XT30 power supply (19V to 48V DC)

:::info

We recommend that you use physical Ubuntu host devices instead of virtual machines.

For BSP source build and flash workflow, refer to [How to Build and Flash BSP Source for Jetson Thor](/how_to_build_and_flash_bsp_source_for_jetson_thor).

:::

### Prepare the Jetpack Image

:::note
The pre-built JetPack image for reComputer J601 is not available yet. This section will be updated once the official system image is released.
:::

### Enter Force Recovery Mode

:::info
Before moving on to the installation steps, make sure that the board is in force recovery mode.
:::

**Step 1.** Press and hold the Recovery button without releasing it.

**Step 2.** Power up the carrier board by connecting the XT30 power cable.

**Step 3.** Release the Recovery button.

**Step 4.** Connect the board to the Ubuntu host PC using the USB 3.0 Type-C port for flashing.

**Step 5.** On the Linux host PC, open a Terminal window and enter the command `lsusb`. If the board is in force recovery mode, the returned content should include the corresponding NVIDIA recovery device entry for Jetson AGX Thor.

### Flash to Jetson

:::note
The flashing guide and pre-built image download links for reComputer J601 will be added here once available. In the meantime, you can refer to [How to Build and Flash BSP Source for Jetson Thor](/how_to_build_and_flash_bsp_source_for_jetson_thor) for the BSP source build and flash workflow on Thor-based platforms.
:::

## Hardware Interfaces Usage

:::info
If you want to learn more about the detailed specifications and usage of the hardware interfaces, please refer to [this wiki](https://wiki.seeedstudio.com/recomputer_jetson_robotics_j601_interfaces_usage/).
:::

## Resources

- [reComputer Robotics J601 Carrier Board Datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601_datasheet.pdf)
- [reComputer Robotics J601 Carrier Board Schematic](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20J601%20Carrier%20Board_V1.0_SCH_260202.pdf)
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
