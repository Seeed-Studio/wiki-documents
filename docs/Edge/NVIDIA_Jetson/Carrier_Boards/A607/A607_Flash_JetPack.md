---
description: A607 Carrier Board
title: A607 Carrier Board
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_A607_Flash_System
last_update:
  date: 04/17/2023
  author: Lakshantha
---

# Flash JetPack OS to A607 Carrier Board (NVIDIA Jetson Orin NX/Nano supported)

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A607/1.png" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/A607-Carrier-Board-for-Jetson-Orin-NX-Nano-p-5634.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
</div>

In this wiki, we will show you how to flash [Jetpack](https://developer.nvidia.com/embedded/jetpack) to an NVMe SSD connected to the A607 Carrier Board which supports both NVIDIA Jetson Orin NX module and NVIDIA Jetson Orin Nano module

## Prerequisites

- Ubuntu Host PC (native or VM using VMware Workstation Player)
- A607 Carrier Board with Jetson Orin NX or Jetson Orin Nano module
- USB Type-C data transmission cable

## Enter Force Recovery Mode

Before we can move on to the installation steps, we need to make sure that the board is in force recovery mode.

**Step 1.** Connect a USB cable between the Type-C connector on the board and the Linux host PC

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A607/3.png" /></div>

**Step 2.** Press the RECOVERY button and while holding down that button, connect power adapter to the DC JACK on the board to power on the board

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/A607/2.png" /></div>

**Step 3.** On the Linux host PC, open a Terminal window and enter the command `lsusb`. If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode.

- For Orin NX 16GB: **0955:7323 NVidia Corp**
- For Orin NX 8GB: **0955:7423 NVidia Corp**
- For Orin Nano 8GB: **0955:7523 NVidia Corp**
- For Orin Nano 4GB: **0955:7623 NVidia Corp**

The below image is for Orin NX 16GB

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/A607/4.png" /></div>

**Step 4.** Remove the jumper wire

## Download the peripheral drivers

First of all, you need to install the peripheral drivers for this board. These are needed for some hardware peripherals to function on the board. Click the below links to download the drivers according to the Jetson module.

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Jetson Module</th>
      <th>JetPack Version</th>
      <th>L4T Version</th>
      <th>Download Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>Jetson Orin NX 8GB/ 16GB</td>
      <td>5.1</td>
      <td>35.2.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-NX-JP5.1.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-NX-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQS4f032w2VIsYE-4Bs80K8BIRD7YGXgBdDq6umW3zCIlw?e=l0LWr0" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ecv3iI8SWcNJs7f_6_bOcyIB9xr9o9x7Ghs98Hj07Im1Ew?e=fkwe6b" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td rowSpan={3}>Jetson Orin Nano 4GB</td>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-Nano-4GB-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQS4f032w2VIsYE-4Bs80K8BIRD7YGXgBdDq6umW3zCIlw?e=l0LWr0" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>  
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ecv3iI8SWcNJs7f_6_bOcyIB9xr9o9x7Ghs98Hj07Im1Ew?e=fkwe6b" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td rowSpan={3}>Jetson Orin Nano 8GB</td>
      <td>5.1.1</td>
      <td>35.3.1</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-Nano-8GB-JP5.1.1.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.0</td>
      <td>36.3</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQS4f032w2VIsYE-4Bs80K8BIRD7YGXgBdDq6umW3zCIlw?e=l0LWr0" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>6.1</td>
      <td>36.4</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Ecv3iI8SWcNJs7f_6_bOcyIB9xr9o9x7Ghs98Hj07Im1Ew?e=fkwe6b" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
  </tbody>
</table>
</div>

**Note:** Currently we provide the above drivers. We will keep updating the drivers in the future with the release of new JetPack versions.

## Flash to Jetson

:::note
 Before moving onto flashing, it should be noted that Jetson Orin NX module only supports JetPack 5.1 and above, while Jetson Orin Nano module only supports JetPack 5.1.1 and above.
:::  

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="JP5.1/JP5.1.1" label="JP5.1/JP5.1.1">

### Jetson Orin NX

Here we will use NVIDIA L4T **35.3.1** to install **Jetpack 5.1.1** on the A607 Carrier Board with Jetson Orin NX module

**Step 1:** [Download](https://developer.nvidia.com/embedded/jetson-linux-r3531) the NVIDIA drivers on the host PC. The required drivers are shown below:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Step 2:** Move the downloaded peripheral drivers from before into the same folder with NVIDIA drivers. Now you will see three compressed files in the same folder.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/A607/5.png" /></div>

**Step 3:** Extract **Jetson_Linux_R35.3.1_aarch64.tbz2** and **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2** by navigating to the folder containing these files, apply the changes and install the necessary prerequisites

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Step 4:** Extract **A607-Orin-NX-JP5.1.1.zip**. Here we additionally install the **unzip** package which is needed to decompress the .zip file

```sh
cd ..
sudo apt install unzip 
unzip A607-Orin-NX-JP5.1.1.zip
```

Here it will ask whether to replace the files. Type **A** and press **ENTER** to replace the necessary files

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A607/7.jpg" /></div>

**Step 5:** Configure your username, password & hostname so that you do not need to enter the Ubuntu installation wizard after the device finishes booting

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

For example (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Step 6:** Flash the system to either NVMe SSD or USB Flash drive

#### NVMe SSD

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

#### USB Flash drive

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

You will see the following output if the flashing process is successful

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

### Jetson Orin Nano

Here we will use NVIDIA L4T **35.3.1** to install **Jetpack 5.1.1** on the A607 Carrier Board with Jetson Orin Nano module. Note that 4GB and 8GB Orin Nano modules use different driver files and the instructions are a little different.

**Step 1:** [Download](https://developer.nvidia.com/embedded/jetson-linux-r3531) the NVIDIA drivers on the host PC. The required drivers are shown below:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Step 2:** Move the downloaded peripheral drivers from before into the same folder with NVIDIA drivers. Now you will see three compressed files in the same folder.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/A607/8.png" /></div>

**Step 3:** Extract **Jetson_Linux_R35.3.1_aarch64.tbz2** and **Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2** by navigating to the folder containing these files, apply the changes and install the necessary prerequisites

```sh
tar xf Jetson_Linux_R35.3.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Step 4:** Extract **A607-Orin-Nano-8GB-JP5.1.1.zip** for 8GB version and **A607-Orin-Nano-4GB-JP5.1.1.zip** for 4GB version. Here we additionally install the **unzip** package which is needed to decompress the .zip file.

```sh
cd ..
sudo apt install unzip 
# for 8GB version
unzip A607-Orin-Nano-8GB-JP5.1.1.zip
# for 4GB version
unzip A607-Orin-Nano-4GB-JP5.1.1.zip
```

Here it will ask whether to replace the files. Type **A** and press **ENTER** to replace the necessary files

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A607/10.jpg" /></div>

**Step 5:** Configure your username, password & hostname so that you do not need to enter the Ubuntu installation wizard after the device finishes booting

```sh
sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license
```

For example (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):

```sh
sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license
```

**Step 6:** Flash the system to either NVMe SSD or USB Flash drive

#### NVMe SSD

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit internal
```

#### USB Flash drive

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 jetson-orin-nano-devkit internal
```

You will see the following output if the flashing process is successful

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>
</TabItem>

<TabItem value="JP6.0" label="JP6.0">

Here we will use NVIDIA L4T **36.3** to install **Jetpack 6.0** on the A607 Carrier Board with Jetson Orin NX module.

**Step 1:** [Download](https://developer.nvidia.com/embedded/jetson-linux-r363) the NVIDIA drivers on the host PC. The required drivers are shown below:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Step 2:** Move the downloaded peripheral drivers from before into the same folder with NVIDIA drivers. Now you will see three compressed files in the same folder.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/compressed_files.png" /></div>

**Step 3:** Extract **Jetson_Linux_R36.3.0_aarch64.tbz2** and **Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2** by navigating to the folder containing these files, apply the changes and install the necessary prerequisites

```sh
tar xf Jetson_Linux_R36.3.0_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Step 4:** Extract **A607-JP6.0.zip**. Here we additionally install the **unzip** package which is needed to decompress the .zip file

```sh
cd ..
sudo apt install unzip 
sudo unzip A607-JP6.0.zip
```

Here it will ask whether to replace the files. Type **A** and press **ENTER** to replace the necessary files:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/replace_files.png" /></div>

**Step 5:** Flash the system to either NVMe SSD:

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

You will see the following output if the flashing process is successful:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>

<TabItem value="JP6.1" label="JP6.1">

Here we will use NVIDIA L4T **36.4** to install **Jetpack 6.1** on the A607 Carrier Board with Jetson Orin NX module.

**Step 1:** [Download](https://developer.nvidia.com/embedded/jetson-linux-r3640) the NVIDIA drivers on the host PC. The required drivers are shown below:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg" /></div>

**Step 2:** Move the downloaded peripheral drivers from before into the same folder with NVIDIA drivers. Now you will see three compressed files in the same folder.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/a607_jp6.1.png" /></div>

:::note
You can use the following command to verify that the downloaded file is complete.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/verify_download_file.webp"/>
</div>
:::

**Step 3:** Extract **Jetson_Linux_R36.4.0_aarch64.tbz2** and **Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2** by navigating to the folder containing these files and apply the changes:

```bash
cd <path_to_files>
tar xf Jetson_Linux_R36.4.0_aarch64.tbz2
sudo tar xfp Tegra_Linux_Sample-Root-Filesystem_R36.4.0_aarch64.tbz2 -C Linux_for_tegra/rootfs
cd Linux_for_tegra
sudo ./tools/l4t_flash_prerequisites.sh
sudo ./apply_binaries.sh
```

**Step 4:** Extract **A607_Jetpack_6.1.tar.gz**:

```sh
cd ..
tar xf A607_Jetpack_6.1.tar.gz
sudo cp -r 607_jetpack6.1/Linux_for_Tegra/* Linux_for_Tegra/
```

**Step 5:** Flash the system to either NVMe SSD:

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal
```

You will see the following output if the flashing process is successful:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/A603/10.jpg" /></div>

</TabItem>

</Tabs>

## Configure WiFi and Bluetooth

After flashing is successful, the Jetson will boot into the OS. Now you need to additionally configure WiFi and Bluetooth.

**Step 1:** Visit [this page](https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/WiFi-BT-Driver) and click on **8723du.ko** to download the WiFi/ Bluetooth driver file needed and copy them to the device

**Step 2:** Create a new directory for the driver

```sh
cd /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/
sudo mkdir rtl8723du
```

**Step 3:** Copy the previously downloaded **8723du.ko** file to the newly created directory

```sh
cd ~
sudo cp 8723du.ko /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/rtl8723du
```

**Step 4:** Enable the driver

```sh
sudo modprobe cfg80211
sudo insmod /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/rtl8723du/8723du.ko
sudo depmod -a
sudo modprobe 8723du
sudo echo 8723du >> /etc/modules
```

**Step 5:** Reboot the device

```sh
sudo reboot
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
