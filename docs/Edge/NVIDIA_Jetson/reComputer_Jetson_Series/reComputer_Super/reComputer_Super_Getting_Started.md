---
description: Getting Started for reComputer Super
title: Getting Started with reComputer Super
keywords:
  - reComputer Super
  - reComputer Super Getting Started
  - Super
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /recomputer_jetson_super_getting_started
last_update:
  date: 06/19/2025
  author: Yaohui
---

# Getting Started with reComputer Super

The reComputer Super Series supercharges the reComputer Classic, delivering up to a 1.7x boost of 157 TOPS in AI performance. It features models with Jetson Orin Nano (11410311, 11410312) and Jetson Orin NX (11410313, 11410314).
Designed for both development and production, it comes with a rich array of interfaces, including M.2 Key E/M, dual RJ45 Ethernet, Mini-PCIe, 4xUSB 3.2, HDMI 2.1, 4xCSI, and CAN. With pre-installed Jetpack 6.2 and Linux OS BSP, it enables immediate market entry.
It also supports a wide range of LLM & Physical AI frameworks, such as NVIDIA, Hugging Face, ONNX, PyTorch, and ROS2/1 at the edge seamlessly, even merging these multimodal capacity with robotics application to enrich Physical AI development.

<div align="center">
  <img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

## Key Features  

### 🚀 ​**Performance Boost**  

- ​**1.7x AI performance boost** over reComputer Classic, delivering ​**157 TOPS**  
- Powered by ​**Jetson Orin Nano** (Models: 11410311, 11410312) and ​**Jetson Orin NX** (Models: 11410313, 11410314)  

### 🔌 ​**Rich Connectivity & Interfaces**  

- ​**M.2 Key E/M** + ​**Mini-PCIe** for expandability  
- ​**Dual RJ45 Ethernet** ports for high-speed networking  
- ​**4x USB 3.2**, ​**HDMI 2.1**, ​**4x CSI** (Camera Serial Interface)  
- ​**CAN bus** support for industrial/robotics applications  

### 🛠️ ​**Ready for Development & Production**  

- Pre-installed ​**Jetpack 6.2** and ​**Linux OS BSP** for out-of-the-box deployment  
- Seamless edge AI integration with frameworks:  
  - ​**NVIDIA**, ​**Hugging Face**, ​**ONNX**, ​**PyTorch**  
  - ​**ROS2/1** for robotics applications  
- Supports ​**multimodal AI** and ​**Physical AI** development  

### 🤖 ​**Edge AI & Robotics Optimized**  

- Merges ​**LLM (Large Language Model)** capabilities with ​**Physical AI** at the edge  
- Ideal for robotics, industrial automation, and real-time AI inference  
- Accelerates ​**market entry** with pre-configured software stack  

:::tip

### ⚠️ Power & Accessory Guidelines  

#### 1. ​**Power Adapter**  

- ​**Jetson Orin Nano**: 12V 5A (5525 barrel jack)  
- ​**Jetson Orin NX**: 19V 4.74A (5525 barrel jack)  
- Always use ​**official adapters** and meet power requirements.  

#### 2. ​**AC Power Cord**  

- Use ​**region-specific** cloverleaf cords.  

#### 3. ​**Accessories**  

- Only ​**officially recommended** accessories (e.g., cameras, wireless modules) for optimal performance and compatibility.

:::

## Specifications

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson Orin Super System on Module</th>
    </tr>
    <tr>
      <th>Specifications</th>
      <th>reComputer Super J3010</th>
      <th>reComputer Super J3011</th>
      <th>reComputer Super J4011</th>
      <th>reComputer Super J4012</th>
    </tr>
    <tr>
      <td>Module</td>
      <td>NVIDIA Jetson Orin™ Nano 4GB</td>
      <td>NVIDIA Jetson Orin™ Nano 8GB</td>
      <td>NVIDIA Jetson Orin™ NX 8GB</td>
      <td>NVIDIA Jetson Orin™ NX 16GB</td>
    </tr>
    <tr>
      <td>AI Performance</td>
      <td>34 TOPS</td>
      <td>67 TOPS</td>
      <td>117 TOPS</td>
      <td>157 TOPS</td>
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
      <td colSpan={2}>1.7 GHz (MAXN_SUPER)</td>
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
      <td>CSI</td>
      <td colSpan={5}>Up to 4 cameras<br />(8 via virtual channels)<br />8 lanes MIPI CSI-2<br />D-PHY 2.1 (up to 20Gbps)</td>
    </tr>
    <tr>
      <td>Mechanical</td>
      <td colSpan={5}>69.6mm x 45mm<br />260-pin SO-DIMM connector</td>
    </tr>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Carrier Board</th>
    </tr>
    <tr>
      <td>Storage</td>
      <td colSpan={4}>1x M.2 KEY M PCIe (M.2 NVMe 2280 SSD 128G included)</td>
    </tr>
    <tr>
      <td rowSpan={3}>Networking</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>1x M.2 Key E for WiFi/Bluetooth module</td>
    </tr>
    <tr>
      <td>Mini PCIe</td>
      <td colSpan={3}>1x mini-PCIe for LTE 4G module</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td colSpan={3}>2x RJ45 Gigabit Ethernet</td>
    </tr>
    <tr>
      <td rowSpan={11}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>4x USB 3.2 Type-A (5Gbps); <br />1x USB 2.0 Type-C (Device Mode/Debug);</td>
    </tr>
    <tr>
      <td>Camera</td>
      <td colSpan={3}>4x mipi CSI(2-lane 15-Pin)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={3}>1 x CAN(4-Pin Header)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td colSpan={3}>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>Fan</td>
      <td colSpan={3}>1x 4 pin Fan Connector (5V PWM); <br />1x 4-Pin Fan Connector (12V PWM);</td>
    </tr>
    <tr>
      <td>Extension Port</td>
      <td colSpan={3}>1x 40-Pin extension header;<br />1x 12-Pin control and UART header;</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC 2-pin;<br />1x RTC Socket</td>
    </tr>
    <tr>
      <td>LED</td>
      <td colSpan={3}>2x LED(PWR and ACT)</td>
    </tr>
    <tr>
      <td>Pinhole Button</td>
      <td colSpan={3}>1x PWR;<br />1x RESET;</td>
    </tr>
    <tr>
      <td>DIP Switch</td>
      <td colSpan={3}>1x REC</td>
    </tr>
    <tr>
      <td>Antenna Hole</td>
      <td colSpan={3}>4x Antenna Hole</td>
    </tr>
    <tr>
      <td>Power</td>
      <td colSpan={4}>12-19V 5525 Barrel DC Jack </td>
    </tr>
    <tr>
      <td>Jetpack Version</td>
      <td colSpan={4}>Jetpack 6.2 </td>
    </tr>
    <tr>
      <td>Mechanical Dimensions</td>
      <td colSpan={4}>130mm x 120mm x 66mm</td>
    </tr>
    <tr>
      <td>Installation</td>
      <td colSpan={4}>Desk, Wall-mounting</td>
    </tr>
    <tr>
      <td>Operating Temperature</td>
      <td colSpan={4}>-10℃~60℃</td>
    </tr>
    <tr>
      <td>Warranty</td>
      <td colSpan={4}>2 Year</td>
    </tr>
    <tr>
      <td>Certification</td>
      <td colSpan={4}>CE,FCC,RoHS,REACH,Telec, KC, Vibration Test(GB/T 2423)</td>
    </tr>
  </tbody>
</table>
</div>

## Flash JetPack OS

### Supported Module

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### Prerequisites

- Ubuntu host PC
- reComputer Super
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
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQiC_is_O2tEkvFzu-3SrWYBFdcQr0zZRUf81lkjnXpnkQ?e=f3ISaO">Download</a></td>
      <td>8FF204A65C006717ED45241186C14B4 <br />FAA8ACE5BEBCDCE755F94C3CBF1311C38</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbEYa6n_P6pCh1TQbVBSpcQBZlFVm_-il3sqXEBDGpdPJA?e=S1dgfv">Download</a></td>
      <td>7EC06C0D17E33AE43D3C69EED791F64<br />CB9CFDC497E01D525E18EBAC1547A0236</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EevZ9hO7BfhDuJvDPYIdHGkBGhrKcWgCyAuTQu1gpHsz4g?e=xbXfbL">Download</a></td>
      <td>06B175484220DA7A63CC7CDAAE339F7E<br />FF8997180AF1C4B836D1098CBD8A169D</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeIg8k2osZFAuPzOlcO-FtIBdhbgULGQrsQOg4uUrXoK4w?e=uo29A8">Download</a></td>
      <td> CF37D028D6466DCC13201367E6358A6<br />9B7B5305CAE2A2B785E3ECFD3D8C66304</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
The Jetpack6 image file is approximately **14.1GB** in size and should take around 60 minutes to download. Please kindly wait for the download to complete.
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
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/flash.jpg"/>  
</div>

**Step 2.** Power up the reComputer Super by connecting the power cable.

**Step 3.** Connect the Super to the Ubuntu host PC with a USB Type-C data transmission cable.

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
# For example: sudo tar xpf mfi_recomputer-super-orin-nx-16g-j401-6.2-36.4.3-2025-05-22.tar.gz
```

**Step 2:** Execute the following command to flash jetpack system to the NVMe SSD:

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

You will see the following output if the flashing process is successful

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
The flash command may run for 2-10 minutes.
:::

**Step 3:** Connect the monitor using an HDMI cable and complete the initialization configuration of the reComputer Super system:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Please complete the **System Configuration** according to your needs.
:::


## Resources

[reComputer Robotics J401 Carrier Board Datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf)
[Schematic](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401_v1.0_SCH_PDF_250401.pdf)
[3D File](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401.stp)
[Mechanical Document-reComputer Super](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super.dxf)
[Mechanical Document-reComputer Super PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super_PCBA.dxf)
[Seeed Nvidia Jetson Success Cases](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
[Seeed Jetson One Pager](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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
