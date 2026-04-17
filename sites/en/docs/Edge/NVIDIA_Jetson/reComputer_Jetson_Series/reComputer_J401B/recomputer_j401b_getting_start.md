---
description: The reComputer J401B is a compact, high-performance edge AI device featuring NVIDIA Jetson Orin modules, offering rich I/O interfaces and supporting JetPack 5.1.3 through 6.2 for versatile AI applications. This guide covers its specifications, flashing instructions, and interface usage for development and deployment.
title: Getting start with reComputer J401B
keywords:
  - reComputer
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/J401B/recomputer-j401b_1.webp
slug: /recomputer_j401b_getting_start
sku: 114993486,114993487,114993489,114993488,E2025031201
last_update:
  date: 4/27/2025
  author: Youjiang
createdAt: '2023-03-02'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/recomputer_j401b_getting_start/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Getting start with reComputer J401B

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401B/recomputer-j401b_1.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J401B-optional-accessories.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
</div>

## Introduction

The reComputer J401B series is an iteration on reComputer Classic series. The reComputer J4011B with NVIDIA Jetson Orin NX 8GB modules is a powerful and compact edge AI device with rich interfaces: 2x USB 3.2, HDMI, Ethernet, M.2 Key E for Wi-Fi module, M.2 Key M for SSD, mini-PCIe for LTE module, CAN, 40-pin and more.

## Features

- **Build the Most Powerful Embedded AI Platform:** Compatible with the Jetson Orin NX module, offering up to 100 TOPS.

- **Design for Both Development and Production:** Equip with rich set of I/Os: 2x USB3.2, HDMI, Ethernet, M.2 Key M, M.2 Key E, mini-PCIe, 40-pin GPIO, etc. Support multiple wired and wireless commnucation including Wi-Fi and LTE

- **Immediately Go-to-Market:** Pre-installed JetPack5.1.3, Linux OS BSP ready

- **Certification includes** ROHS, CE, FCC, KC, UKCA, REACH

- **Long Life Time Supply:**Production Lifetime: until at least 2032

## Specifications

<table>
  <thead>
    <tr>
      <th>Specifications</th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3010B-p-6404.html">reComputer J3010B</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3011B-p-6405.html">reComputer J3011B</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4011B-p-6407.html">reComputer J4011B</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4012B-p-6406.html">reComputer J4012B</a></th>
    </tr>
  </thead>
  <tbody>
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
      <td>1024-core NVIDIA Ampere architecture GPU with 32 Tensor Cores</td>
      <td colspan='2' align='center'>1024-core NVIDIA Ampere architecture GPU with 32 Tensor Cores</td>
    </tr>
    <tr>
      <td>GPU Max Frequency</td>
      <td colSpan='2' align='center'>625 MHz</td>
      <td>765 MHz</td>
      <td>918 MHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan='2'>6-core Arm® Cortex®-A78AE v8.2 64-bit CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6-core Arm® Cortex®-A78AE v8.2 64-bit CPU 1.5MB L2 + 4MB L3</td>
      <td>8-core Arm® Cortex®-A78AE v8.2 64-bit CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>CPU Max Frequency</td>
      <td colSpan='2' align='center'>1.5 GHz</td>
      <td colSpan='2' align='center'>2 GHz</td>
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
      <td colSpan='2' align='center'>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>DLA Max Frequency</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>614 MHz</td>
    </tr>
    <tr>
      <td>Vision Accelerator</td>
      <td colSpan='2' align='center'>/</td>
      <td colSpan='2' align='center'>1x PVA v2</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td colSpan='4' align='center'>128GB NVMe SSD</td>
    </tr>
    <tr>
      <td>Video Encoder</td>
      <td colSpan='2' align='center'>1080p30 supported by 1-2 CPU cores</td>
      <td colSpan='2' align='center'>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Video Decoder</td>
      <td colSpan='2' align='center'>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan='2' align='center'>1x 8K30 (H.265) | 2x 4K60 (H.265) | 4x 4K30 (H.265)<br />9x 1080p60 (H.265) | 18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td colSpan='4' align='center'>1* HDMI 2.1</td>
    </tr>
    <tr>
      <td>CSI Camera</td>
      <td colSpan='4' align='center'>2* CSI （2-lane 15pin）</td>
    </tr>
    <tr>
      <td>Networking</td>
      <td colSpan='4' align='center'>1* Gigabit Ethernet (10/100/1000M)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan='4' align='center'>2* USB 3.2 Type-A (10Gbps); 1* USB2.0 Type-C (Device Mode)</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td colSpan='4' align='center'>1* M.2 Key M</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td colSpan='4' align='center'>1* M.2 Key E</td>
    </tr>
    <tr>
      <td>Mini PCIe</td>
      <td colSpan='4' align='center'>1* mini-PCIe for LTE module</td>
    </tr>
    <tr>
      <td>Fan</td>
      <td colSpan='4' align='center'>1* 4 pin Fan Connector(5V PWM)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan='4' align='center'>1* CAN</td>
    </tr>
    <tr>
      <td>Multifunctional Port</td>
      <td colSpan='4' align='center'>1* 40-Pin Expansion header,1* 12-Pin Control and UART header</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan='4' align='center'>RTC 2-pin, RTC socket (supports CR1220 but not included)</td>
    </tr>
    <tr>
      <td>Power</td>
      <td colSpan='4' align='center'> DC 9-19V via 5525 DC jack </td>
    </tr>
    <tr>
      <td>Power Supply</td>
      <td colSpan='4' align='center'>Power adapter not included</td>
    </tr>
    <tr>
      <td>Temperature</td>
      <td colSpan='4' align='center'>-10℃~60℃</td>
    </tr>
    <tr>
      <td>Mechanical</td>
      <td colSpan='4' align='center'>130mm x120mm x 58.5mm</td>
    </tr>
  </tbody>
</table>

## Flash JetPack

Here, we will show you how to flash [Jetpack](https://developer.nvidia.com/embedded/jetpack) to an NVMe SSD connected to the reComputer J4012B/ J4011B/ J3010B and J3011B. All these devices come with J401B carrier board inside and the flashing procedure is the same for all.

:::danger
reComputer J401B series comes with JetPack 5.1.3 pre-installed on the included NVMe SSD, so that you do not need to flash it. However, if you want to flash it again with JetPack, you can follow this guide.
:::

### Supported Module

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### Prerequisites

- Ubuntu Host Computer
- reComputer J4012B/ J4011B/ J3010B or J3011B
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

:::note

- We do not recommend using virtual machines and ARM architecture Ubuntu for flashing.

:::

### Enter Force Recovery Mode

Before we can move on to the installation steps, we need to make sure that the jetson device is in force recovery mode.

Please refer to the following steps to set the jetson device into forced recovery mode.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/j401_set_recovery.gif" /></div>

:::note
The carrier board in the animated GIF is the J401, but don't worry — the steps to enter forced recovery mode are the same for both the J401 and J401B carrier boards.
:::

<details>

<summary> Step-by-Step </summary>

**Step 1.** Use a jumper wire to connect the **FC REC** pin and the **GND** pin.

<table align="center">
<thead>
  <tr>
    <th> </th>
    <th>Button Header</th>
    <th>Description</th>
    <th>Button Header</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="6"><div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/reComputer-J4012/1.png"/></div></td>
    <td>1</td>
    <td>PWR BTN</td>
    <td>7</td>
    <td>AUTO ON</td>
  </tr>
  <tr>
    <td>2</td>
    <td>GND</td>
    <td>8</td>
    <td>DIS</td>
  </tr>
  <tr>
    <td>3</td>
    <td>FC REC</td>
    <td>9</td>
    <td>UART TXD</td>
  </tr>
  <tr>
    <td>4</td>
    <td>GND</td>
    <td>10</td>
    <td>UART RXD</td>
  </tr>
  <tr>
    <td>5</td>
    <td>SYS RET</td>
    <td>11</td>
    <td>LED +</td>
  </tr>
  <tr>
    <td>6</td>
    <td>GND</td>
    <td>12</td>
    <td>LED -</td>
  </tr>
</tbody>
</table>

**Step 2.** Power up the reComputer by connecting the included cable from the power adapter and connect the board with the Ubuntu host PC with a USB Type-C data transmission cable

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/2.png"/></div>

**Step 3.** On the Linux host PC, open a Terminal window and enter the command `lsusb`. If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode.

- For Orin NX 16GB: **0955:7323 NVidia Corp**
- For Orin NX 8GB: **0955:7423 NVidia Corp**
- For Orin Nano 8GB: **0955:7523 NVidia Corp**
- For Orin Nano 4GB: **0955:7623 NVidia Corp**

The below image is for Orin NX 16GB

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"/></div>

**Step 4.** Remove the jumper wire

</details>

### Flash Jetpack OS

:::note
Before moving onto flashing, it should be noted that Jetson Orin NX module only supports JetPack 5.1 and above, while Jetson Orin Nano module only supports JetPack 5.1.1 and above.
:::

First of all, install the below required dependencies on the Ubuntu Host PC before moving onto flashing JetPack.

```sh
sudo apt install qemu-user-static sshpass abootimg nfs-kernel-server libxml2-utils binutils -y
```

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1.1" label="JP5.1.1">

Here we will use NVIDIA L4T 35.3.1 to install Jetpack 5.1.1 on the reComputer

**Step 1:** [Download](https://developer.nvidia.com/embedded/jetson-linux-r3531) the NVIDIA drivers on the host PC. The required drivers are shown below:

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

**Step 2:** Extract **Jetson_Linux_R35.3.1_aarch64** and **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64** by navigating to the folder containing these files, apply the changes and install the necessary prerequisites

```sh
tar xf Jetson_Linux_R35.3.1_aarch64
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Step 3 (Optional):** Configure your username, password & hostname so that you do not need to enter the Ubuntu installation wizard after the device finishes booting

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

For example (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Step 4:** Flash the system to the NVMe SSD

```sh
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

You will see the following output if the flashing process is successful

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

Now, you can connect the mouse, keyboard, and monitor to the Jetson device. It will be ready to use!

:::tip
If your Jetson device takes a long time to open the desktop, please reconnect the power supply.
:::

**Step 5 (Optional):** Install Nvidia Jetpack SDK

Please open the terminal on the **Jetson device** and execute the following commands:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

</TabItem>
<TabItem value="JP5.1.2" label="JP5.1.2">

Here we will use NVIDIA L4T 35.4.1 to install Jetpack 5.1.2 on the reComputer

**Step 1:** [Download](https://developer.nvidia.com/embedded/jetson-linux-r3541) the NVIDIA drivers on the host PC. The required drivers are shown below:

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

**Step 2:** Extract **Jetson_Linux_R35.4.1_aarch64** and **Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64** by navigating to the folder containing these files, apply the changes and install the necessary prerequisites

```sh
tar xf Jetson_Linux_R35.4.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.4.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

Now we need to apply a patch from NVIDIA which is needed for JP5.1.2 and explained [here](https://docs.nvidia.com/jetson/archives/r35.4.1/ReleaseNotes/Jetson_Linux_Release_Notes_r35.4.1.pdf) in section 4.2.3 of the official NVIDIA JetPack Release Notes.

**Step 3:** Navigate to the following directory

```sh
cd Linux_for_Tegra/bootloader/t186ref/BCT
```

**Step 4:** Open the file **"tegra234-mb2-bct-scr-p3767-0000.dts"** and add the following lines under  **tfc** section

```sh
tfc {
    reg@322 { /* GPIO_M_SCR_00_0 */
    exclusion-info = <2>;
    value = <0x38008080>;
    };
```

**Step 5 (Optional):** Navigate to **"Linux_for_Tegra"** directory, and enter the below command to configure your username, password & hostname so that you do not need to enter the Ubuntu installation wizard after the device finishes booting

```sh
cd Linux_for_Tegra
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

For example (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Step 6:** Flash the system to the NVMe SSD

```bash

cp p3509-a02+p3767-0000.conf p3509-a02-p3767-0000.conf
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1   -c tools/kernel_flash/flash_l4t_nvme.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg"   --showlogs --network usb0 p3509-a02-p3767-0000 external

```

You will see the following output if the flashing process is successful

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

Now, you can connect the mouse, keyboard, and monitor to the Jetson device. It will be ready to use!

:::tip
If your Jetson device takes a long time to open the desktop, please reconnect the power supply.
:::

**Step 7 (Optional):** Install Nvidia Jetpack SDK

Please open the terminal on the **Jetson device** and execute the following commands:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

</TabItem>

<TabItem value="JP5.1.3" label="JP5.1.3">

Here we will install Jetpack 5.1.3 on the reComputer.

**Step 1:** Download the system image to your Ubuntu PC corresponding to the Jetson module you are using:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetson Module</th>
      <th>Download Link</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eaf_S-Dg_uxNkyRvriYIez4B6pl6VjO7aRNwAJ2DDDKjaA?e=Bl1p1G" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>37F99E90A746D07242EE17E2A74A3336490E997457DE0E9FC15A1E35D347543B</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcAN8eoa1m1MvKCN4p4VkMIBMZWuIj4OFrcH4uUx0Amxvg?e=Re90iJ" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>4FDD5F05EE83F425AD1D8E2768BDF35FA68D3F1143B09C2FB9537CBFD1A9D5EC</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZnkTHuxWIxHtwNs5mzjnPIBiFuB-Ym8zYVJb13Cnl0uqg?e=2U9i4S" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>6A002620B6E40673A39710F0ECC1C56CB5750480B799F97BB7DE4A5B6F49C527</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERwQtvZuYzdAoue4OzAH5kUBah_jgt9sPTNj2CeFRZTdNg?e=lbFjb6" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>63A3D59185BDB286452CA7774DD528F5087249B8065D902C9181703010B7836A</td>
    </tr>
  </tbody>
</table>
</div>

:::info
To verify the integrity of the downloaded firmware, you can compare the SHA256 hash value.

On an Ubuntu host machine, open the terminal and run the command `sha256sum <File>` to obtain the SHA256 hash value of the downloaded file. If the resulting hash matches the SHA256 hash provided in the wiki, it confirms that the firmware you downloaded is complete and intact.
:::

**Step 2:** Extract the downloaded image file:

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Step 3:** Navigate to the unzipped directory and execute the following command to flash jetpack system to the NVMe SSD:

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

**Step 4:** Connect the J401 to a display using the HDMI connector on the board and finish the initial configuration setup.

:::info
Please complete the **System Configuration** according to your needs.
:::

</TabItem>

<TabItem value="JP6.0" label="JP6.0">

Here we will use NVIDIA L4T 36.3 to install Jetpack 6.0 on the reComputer

**Step 1:** Download the system image to your Ubuntu PC corresponding to the Jetson module you are using:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetson Module</th>
      <th>Download Link1</th>
      <th>Download Link2</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EavQHXoSEg9PuLs4vuujXLcB0-GW6Ti1zHGL2UHzgS6TWg?e=J7oRrf" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>
        <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EbEZRxHDtgBDjBrHK_7ltfEB6JBa3VGXLx3meNc0OJUL_g?e=8MNsTg" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>20b38d9524327fd714c37cb293036006e070b5335d6b4f6978a862be51c3db52</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcfUdbmSiOBFo_Po-Cui3jkBDORKexZ4S43Jde5XApqdeQ?e=zqealW" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQawJy3jmKBAmJgHght-vVUBHbsC3vtlvMsYfW7vsie3LQ?e=vor3t3" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>da966e7616ed86b45e184b6db9c3eb81e779a5f4524f6c3c5610e56c53532fe1</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EauK-aXvruxHsC1-bAmTwZkBNB0PsvPX6S6oV4Q1UrAUFw?e=rytWvU" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EeJP8SNF76BKiJg2e-FKNd4BhJwlWiMbLcT6Y286tRO7JQ?e=ct6qLf" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>e0fa101c5df6f507d123c2332e9fedea0ac54f8a5253cb28e71fdff01147fa68</td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
      <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcHfrgY9GxVNiwGh6YTB50cBCc5QcKgnGpTZQfv94x4VNw?e=Rl73Zh" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>
      <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/ERQJluPq9X1LmpLXTSGZVMwBVg9ikWw8veG2aOdHv504Gw?e=hujab4" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>80ebeac0a843baa2c3104ee6341d44f39a2cfab1c9c725e176c7b2a219b79dfc</td>
    </tr>
  </tbody>
</table>
</div>

:::info
To verify the integrity of the downloaded firmware, you can compare the SHA256 hash value.

On an Ubuntu host machine, open the terminal and run the command `sha256sum <File>` to obtain the SHA256 hash value of the downloaded file. If the resulting hash matches the SHA256 hash provided in the wiki, it confirms that the firmware you downloaded is complete and intact.
:::

**Step 2:** Extract the downloaded image file:

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Step 3:** Navigate to the unzipped directory and execute the following command to flash jetpack system to the NVMe SSD:

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

**Step 4:** Connect the J401 to a display using the HDMI connector on the board and finish the initial configuration setup:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Please complete the **System Configuration** according to your needs.
:::

**Step 5:** After starting the system, you need to execute the following command to reactivate the wireless network card driver:

```bash
sudo rm /lib/modules/5.15.136-tegra/build
sudo ln -s /usr/src/linux-headers-5.15.136-tegra-ubuntu22.04_aarch64/3rdparty/canonical/linux-jammy/kernel-source/ /lib/modules/5.15.136-tegra/build
sudo apt install -y iwlwifi-modules
```

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Here we will use NVIDIA L4T 36.4 to install Jetpack 6.1 on the reComputer

**Step 1:** Download the system image to your Ubuntu PC corresponding to the Jetson module you are using:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetson Module</th>
      <th>Download Link</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAeJrT8r6rJSKVpp2_32UtQAZJzy4wNyCuHqVSCy0f-q4U?e=84CkEW" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> b848e327b87c408565b899a11c52022b42df6de4f3dce1e5470cb2a7baccc898 </td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB9gz3ZuAZ1Rb_ml6eY-5eCAV-k2piT1qWtbedMSEUfyzk?e=LTL5kI" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> 3839c99fc9e2da1f35de824c42b7bb56f9660d8f4a6ce68b196c6cb50d5d4fb4 </td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDfJ9e2HfndQKxZp7e2_A_0Ab97_Oe0zA53nK6AZ6EHDYs?e=B3tvCO" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> a0863e7209351f9165cf6bd2d756a6a726b2e8fc1fa54b5d66279d5b136a3a33 </td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDrUdIOhLv6SrDpKbnUCnfgAR9URACZr46gifnBSEdOphA?e=TNUkWg" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> a40edfbcda9a7a07fbf72ca4e3149d171236f5ede2c4e3a5e243da77562f9b13 </td>
    </tr>
  </tbody>
</table>
</div>

:::info
To verify the integrity of the downloaded firmware, you can compare the SHA256 hash value.

On an Ubuntu host machine, open the terminal and run the command `sha256sum <File>` to obtain the SHA256 hash value of the downloaded file. If the resulting hash matches the SHA256 hash provided in the wiki, it confirms that the firmware you downloaded is complete and intact.
:::

**Step 2:** Extract the downloaded image file:

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nx-16g-j401-6.1-36.4.0-2026-02-07.tar.gz
```

**Step 3:** Navigate to the unzipped directory and execute the following command to flash jetpack system to the NVMe SSD:

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

**Step 4:** Connect the J401 to a display using the HDMI connector on the board and finish the initial configuration setup:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Please complete the **System Configuration** according to your needs.
:::

</TabItem>

<TabItem value="JP6.2" label="JP6.2">

Here we will use NVIDIA L4T 36.4.3 to install Jetpack 6.2 on the reComputer

**Step 1:** Download the system image to your Ubuntu PC corresponding to the Jetson module you are using:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetson Module</th>
      <th>Download Link</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Orin NX 16GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDTDQf5Gh0LSIg9QSsHPNgBAcegrhbyGeZYrQF7kMpdgFQ?e=ahwlIc" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>b9529f008cf9a65460db3ee17736db971b8d110049f9f6ea8ecc8fe4d1691869</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDR6PGcF5i6Q5tWR9dJa1vSAfZrQUfHfQhTFe2DOeMKXuo?e=lf88Um" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>b7106b4f8c5835011040c071dd14e1144b5298af300f920e44517b99c183ed05</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDM6v_9Ggo4R5OXqj4R1T0PAf_uevclLKzjmj8XpkX0_jQ?e=B5oC3m" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> c2247262dec1379fd4494def6a6ed2d4414605a8dcb902c6d6afbb94a5e48499 </td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQA9g-hqq4_KR5bdPc2PgfgmAYq3mRxdRBkgrUtZBOm-jtE?e=WMICt2" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> 1d570b54853bba4ecc115789d1b03c5ba07b34344f7616dfa3c3772c9ff37e64 </td>
    </tr>
  </tbody>
</table>
</div>

:::info
To verify the integrity of the downloaded firmware, you can compare the SHA256 hash value.

On an Ubuntu host machine, open the terminal and run the command `sha256sum <File>` to obtain the SHA256 hash value of the downloaded file. If the resulting hash matches the SHA256 hash provided in the wiki, it confirms that the firmware you downloaded is complete and intact.
:::

:::note
Please note that due to the increased power consumption and heat generation after enabling `super mode`, the [reComputer J4011B](https://www.seeedstudio.com/reComputer-J4011B-p-6407.html) and [reComputer J4012B](https://www.seeedstudio.com/reComputer-J4012B-p-6406.html) cannot operate stably in the highest mode. Therefore, this update does not include these two products.
We are currently designing a new version of reComputer. Stay tuned!
:::

**Step 2:** Extract the downloaded image file:

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.2-36.4.3-2026-02-05.tar.gz
```

**Step 3:** Navigate to the unzipped directory and execute the following command to flash jetpack system to the NVMe SSD:

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

**Step 4:** Connect the J401 to a display using the HDMI connector on the board and finish the initial configuration setup:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

:::info
Please complete the **System Configuration** according to your needs.
:::

</TabItem>

</Tabs>

## Interfaces Usage

:::info
Please refer to this [wiki page](/recomputer_j401b_interfaces_usage) for more information about Interfaces Usage.
:::

## Resources

- [reComputer J401B Datasheet](https://files.seeedstudio.com/wiki/reComputer/reComputer_J401B_datasheet_v1.pdf)
- [reComputer J401B Schematic](https://files.seeedstudio.com/products/NVIDIA/reComputer_J401B_CarrierBoard_SCH_V1.0.pdf)
- [LTE board Schematics](https://files.seeedstudio.com/products/NVIDIA/reComputer_J401B_LTE_SCH_V1.0.pdf)
- [Seeed Jetson Serials Catalog](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio Edge AI Success Stories](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson Serials Comparision](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson Devices One Page](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Jetson examples](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-for-Beginners](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

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
