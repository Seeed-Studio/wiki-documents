---
description: Flash JetPack to reComputer J4012 (J401 carrier board)
title: Flash Jetpack
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_J4012_Flash_Jetpack
last_update:
  date: 6/12/2024
  author: Lakshantha/Youjiang
---

# Flash JetPack OS to J401 Carrier Board

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/recomputer-j401.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J401-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-without-Power-Adapter-p-5637.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

The J401 carrier board is a powerful extension board that supports NVIDIA Jetson Orin NX/Nano modules. It features 1xGbE port, 1x CAN for data transfer, M.2 Key M for SSD, M.2 Key E for WiFi/BlueTooth, 2 CSI, and 1 HDMI for high-quality video capture and display. It also contains 4x USB 3.2 ports, a fan, RTC, and a flexible 9-19V power supply. All of these make it reliable for a variety of industrial automation systems, building powerful AI applications.

## Features

- **Exceptional Performance Carrier Board:** Support the NVIDIA Jetson Orin NX/Nano module, leveraging powerful computing power to take on tough tasks with ease
- **Versatile Connectivity:** Offer 1x Gigabit Ethernet port for networking, 4x USB 3.2 Type-A (10Gbps) ports,1x USB2.0 Type-C port, 1x CAN connector for fast data transfer
- **Flexible Storage and Wireless Expansion:** Mount with 1x M.2 Key M 2280 and 1x M.2 Key E slots, offering ample space for flexible storage and wireless connectivity expansion
- **Advanced Peripherals Supported:** Assemble 2x 15 pins CSI camera connector, 1x HDMI 2.1, 1x fan, 1x RTC for multiple peripherals
- **Wide Range of Input Voltages:** From 9-19V DC, providing flexibility in power supply options

## Specifications

<table>
  <thead>
    <tr>
      <th>Specifications</th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3010-w-o-power-adapter-p-5631.html?queryID=e8d0ae9b2e338e8a860f07dacef58f6e&objectID=5631&indexName=bazaar_retailer_products">reComputer J3010</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html">reComputer J3011</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4011-w-o-power-adapter-p-5629.html?queryID=5577f61da645361a7aad9179bc04efc2&objectID=5629&indexName=bazaar_retailer_products">reComputer J4011</a></th>
      <th><a href="https://www.seeedstudio.com/reComputer-J4012-w-o-power-adapter-p-5628.html?queryID=639ef60cde4a38ccc9ff2f82070d4854&objectID=5628&indexName=bazaar_retailer_products">reComputer J4012</a></th>
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
      <td colSpan={2}>1024-core NVIDIA Ampere architecture GPU with 32 Tensor Cores</td>
    </tr>
    <tr>
      <td>GPU Max Frequency</td>
      <td colSpan={2}>625 MHz</td>
      <td>765 MHz</td>
      <td>918 MHz</td>
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
      <td>DLA Max Frequency</td>
      <td colSpan={2}>/</td>
      <td colSpan={2}>614 MHz</td>
    </tr>
    <tr>
      <td>Vision Accelerator</td>
      <td colSpan={2}>/</td>
      <td colSpan={2}>1x PVA v2</td>
    </tr>
    <tr>
      <td>Storage</td>
      <td colSpan={4}>128GB NVMe SSD</td>
    </tr>
    <tr>
      <td>Video Encoder</td>
      <td colSpan={2}>1080p30 supported by 1-2 CPU cores</td>
      <td colSpan={2}>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Video Decoder</td>
      <td colSpan={2}>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan={2}>1x 8K30 (H.265) | 2x 4K60 (H.265) | 4x 4K30 (H.265)<br />9x 1080p60 (H.265) | 18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td colSpan={4}>1* HDMI 2.1</td>
    </tr>
    <tr>
      <td>CSI Camera</td>
      <td colSpan={4}>2* CSI （2-lane 15pin）</td>
    </tr>
    <tr>
      <td>Networking</td>
      <td colSpan={4}>1* Gigabit Ethernet (10/100/1000M)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={4}>4* USB 3.2 Type-A (10Gbps); 1* USB2.0 Type-C (Device Mode)</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td colSpan={4}>1* M.2 Key M</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td colSpan={4}>1* M.2 Key E</td>
    </tr>
    <tr>
      <td>Fan</td>
      <td colSpan={4}>1* 4 pin Fan Connector(5V PWM)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={4}>1* CAN</td>
    </tr>
    <tr>
      <td>Multifunctional Port</td>
      <td colSpan={4}>1* 40-Pin Expansion header,1* 12-Pin Control and UART header</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={4}>RTC 2-pin, RTC socket (supports CR1220 but not included)</td>
    </tr>
    <tr>
      <td>Power</td>
      <td colSpan={4}>9-19V</td>
    </tr>
    <tr>
      <td>Power Supply</td>
      <td colSpan={4}>Power adapter not included</td>
    </tr>
    <tr>
      <td>Temperature</td>
      <td colSpan={4}>-10℃~60℃</td>
    </tr>
    <tr>
      <td>Mechanical</td>
      <td colSpan={4}>130mm x120mm x 58.5mm</td>
    </tr>
  </tbody>
</table>

## Hardware Overview

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-J4012/6.png"/></div>

## Flash JetPack

Here, we will show you how to flash [Jetpack](https://developer.nvidia.com/embedded/jetpack) to an NVMe SSD connected to the reComputer J4012/ J4011/ J3010 and J3011. All these devices come with J401 carrier board inside and the flashing procedure is the same for all.

reComputer J40/ J30 series comes with JetPack 5.1 pre-installed on the included NVMe SSD, so that you do not need to flash it. However, if you want to flash it again with JetPack, you can follow this guide.

### Supported Module

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5554.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5552.html)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5523.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html)

### Prerequisites

- Ubuntu Host Computer
- reComputer J4012/ J4011/ J3010 or J3011
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

### Enter Force Recovery Mode

:::note

- We do not recommend using virtual machines and ARM architecture Ubuntu for flashing.
- Before we can move on to the installation steps, we need to make sure that the board is in force recovery mode.

:::

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/j401_set_recovery.gif" /></div>

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

### Flash the device with a single command

<details>

<summary> Flash the device with a single command. </summary>

The reComputer Jetson J30/40 has launched a one-click flashing script, which supports flashing Jetpack 5.1.1, 5.1.2 and 6.0. Currently, the one-click flashing for Jetpack 6.1 and other series of reComputer Jetson is under testing and will be available to everyone in the near future.

```bash
wget -O ./flashing.sh https://files.seeedstudio.com/OSHW_Jetson/flashing.sh  && sudo chmod 777 ./flashing.sh && ./flashing.sh
```

<div class="video-container">
<iframe width="960" height="480" src="https://www.youtube.com/embed/_YfpJAhhT-g?si=OJxCcPqWauYEp9LR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

:::caution
Disclaimer: The one-click flashing script aims to make jetpack flashing quicker. The current version is a beta one and may have many problems. We hope for your understanding. If there are flashing issues, follow the `Flash The Device Step by Step` below and give feedback in our [Discord Jetson channel](https://discord.com/channels/862602258452578314/930732339624026152). We'll fix them promptly and improve this function in the near future.
:::

</details>

### Flash the device step by step

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

:::caution
NVIDIA has updated the DRAM used in its modules. To ensure compatibility with the new modules, we have updated JetPack accordingly. The currently stable and supported version is `JetPack 5.1.3`.
If the DRAM on your module is from `Hynix` (this can be identified from the markings on the chip package), it is recommended to flash `JetPack 5.1.3`.
:::

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
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQBCmNhy0cVJrxa6JEeiNb8BEXIDh3sToFvsxPMxZAo_ag?e=DYdE5M" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> 202cc35f5d7586ea18b4a67ae0542b9bf023e6c4be7414a8447b112fa93f1c17 </td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbiJ_2X2oxdNlDolexNVBisBNjdcjGv6rChPuSzhyjvWmg?e=1prjU9" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> 8b4d210a39db394c00862c008012059cf9d59cec17fc235d26623549b94645be </td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EejFgIlZQ2xMjaEokzQKmmgBxjeYX6Xpj69I8_gMTa_lCw?e=3L00Lr" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> d3a4b0db20b373054e40814703b5f3a4b9565d28ebd59a5128b74f8d210e75b8 </td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EbtcrNp6XlRPvznQVNOxqY0BHesCu5bUslUVzbaYCPd44g?e=EdPStQ" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> f0efee5f265dbaef49dc14d517b269e7f6582ff9977d9193d377966f36408ec3 </td>
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
# For example: sudo tar xpf mfi_recomputer-orin-nx-16g-j401-6.1-36.4.0-2024-12-04.tar
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

:::danger
If you are using an **Orin NX 16GB/8GB** module, **do not enable MAXN SUPER mode**.
The cooling capacity of the reComputer J401 carrier board is insufficient to support it, and forcing this mode may result in permanent damage to the module.
:::

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
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdcCLLY0ZBdIl5YpQk9n1jUBRnqIhjpDHZxo4_6OaxIbYg?e=R7rEqU" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>489F2B5D41655208EB2C5CFD980162B77D3871AD9EA06CD55C05FBB8B747500F</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETW85CuJ9p5Gtefm7r7Hh74B6VvKATStF5B0SyfANjMZ2Q?e=CPj7HB" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td>DCC74CAB5F38E62C7A892DE6DFD547EBD61C5B5B71C5EF9F5A0EF675518EF062 </td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcyQPZeI9glGmENtN2a4A2oBizsgTMATEMEMZCPI06aWJg?e=ctPbmU" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> D00349D7698A8BFEDB23B655B496117A650C18472A7E60365E0EF86889EDD301 </td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ef6LSFMH_01PpeUCg2R_V9MB2mWyghzGIiDhV4eNHUeC-A?e=bAr2kO" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td> 2495E2275999283415F523D0F3D35594B21EAAD71CF87E4AA3BDC072A830B871 </td>
    </tr>
  </tbody>
</table>
</div>

:::info
To verify the integrity of the downloaded firmware, you can compare the SHA256 hash value.

On an Ubuntu host machine, open the terminal and run the command `sha256sum <File>` to obtain the SHA256 hash value of the downloaded file. If the resulting hash matches the SHA256 hash provided in the wiki, it confirms that the firmware you downloaded is complete and intact.
:::

:::note
Please note that due to the increased power consumption and heat generation after enabling `super mode`, the [reComputer J4011](https://www.seeedstudio.com/reComputer-J4011-p-5585.html) and [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6Iko0MDEyIiwiY19zZWFyY2hfcmVzdWx0X3BvcyI6MiwiY190b3RhbF9yZXN1bHRzIjo4LCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0ifQ%3D%3D) cannot operate stably in the highest mode. Therefore, this update does not include these two products.
We are currently designing a new version of reComputer. Stay tuned!
:::

**Step 2:** Extract the downloaded image file:

```bash
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.2-36.4.3-2025-04-07.tar.gz
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

<!-- Code END -->

## Resources

- [reComputer J30x Datasheet](https://files.seeedstudio.com/products/NVIDIA/reComputer-J301x-datasheet.pdf)
- [reComputer J40x Datasheet](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf)
- [reComputer J30/J40 Schematic](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf)
- [reComputer J30/J40 3D File](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J4012.stp)
- [Seeed Jetson Serials Catalog](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Seeed Studio Edge AI Success Stories](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson Serials Comparision](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Seeed Jetson Devices One Page](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Jetson examples](https://github.com/Seeed-Projects/jetson-examples)
- [reComputer-Jetson-for-Beginners](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners)

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
