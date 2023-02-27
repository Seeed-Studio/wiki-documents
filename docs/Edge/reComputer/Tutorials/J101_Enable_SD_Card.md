---
description: J101 Enable SD Card
title: J101 Enable SD Card
tags:
  - Nvidia
  - reComputer
keywords:
  - Nvidia
  - reComputer
image: https://avatars.githubusercontent.com/u/10758833
slug: /J101_Enable_SD_Card
last_update:
  date: 01/05/2022
  author: w0x7ce

no_comments: false # for Disqus

---

<!-- # Boot NVIDIA JetPack OS from SD card for J101 Carrier Board -->

# J101 Enable SD Card

The method is flashing NVIDIA JetPack OS to the SD card on J101 Carrier Board which is operated on the reComputer J1010. So <a href="https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/" target="_blank"><span>Flash JetPack OS into reComputer J1010</span></a> first is required.

## Driver Configuration

At the beginning, we need to power on the reComputer and go to the desktop like below:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/S.png" /></div>


### Step 1 . Clone the repo

Right click and open the Terminal, and then execute the command below to download the relevant code:

```sh
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git
```

### Step 2. Compile jetson-sdmmc-overlay

Access to the workspace location:

```bash
cd seeed-linux-dtoverlays
```

For J101 Carrier board , We need to change the "compatible" value in this file "overlays\jetsonnano\jetson-sdmmc-overlay.dts".

```bash
sed -i '17s#JETSON_COMPATIBLE#\"nvidia,p3449-0000-b00+p3448-0002-b00\"\, \"nvidia\,jetson-nano\"\, \"nvidia\,tegra210\"#' overlays/jetsonnano/jetson-sdmmc-overlay.dts
```

<!-- Just like this.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/change.png"/></div> -->

And then we compile the file we changed to make sure they are correctly modified.

```bash
make overlays/jetsonnano/jetson-sdmmc-overlay.dtbo
```

### Step 3. Make sure the sd card can be recognized

Insert the SD card to the **J101 Carrier board**.

```bash
sudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/
cd /boot/
sudo /opt/nvidia/jetson-io/config-by-hardware.py -l
```

After executing these command above, we should get the output **similar** (**It may not be exactly the same. Depends on the peripheral and the drivers already installed**) to the following and we know the SD card have been regognized:

```txt
    Header 1 [default]: Jetson 40pin Header
    Available hardware modules:
    1. Adafruit SPH0645LM4H
    2. Adafruit UDA1334A
    3. FE-PI Audio V1 and Z V2
    4. MCP251x CAN Controller
    5. ReSpeaker 4 Mic Array
    6. ReSpeaker 4 Mic Linear Array
    7. reComputer sdmmc
    Header 2: Jetson Nano CSI Connector


    Available hardware modules:
    1. Camera IMX219 Dual
    2. Camera IMX477 Dual
    3. Camera IMX477-A and IMX219-B
    Header 3: Jetson M.2 Key E Slot
    No hardware configurations found!
```

### Step 4. Name our device and Finish driver installation

```bash
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "reComputer sdmmc"
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/fix01.png" /></div>


!!!Note
    You may need to **reboot** to run jtop after completing the installation for the first time.

<!-- ## Move system to SD card

First, we need to clone the script include the tools we need.

```bash
git clone https://github.com/limengdu/bootFromUSB
```

Second , We need to make sure the sd card is in ext4 format, which can be seen visually in the "disk" tool, if it is not ext4 we need to format it and change it to ext4 format.

<div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_view_1.png"/></div>

And then , go to the script directory , execute the following command like this

```bash
cd bootFromUSB
./copyRootToUSB.sh -p /dev/mmcblk1p1
```

Wait a while, only until it finishes automatically, if no error is reported, the burning is done

## Boot Configuration

Once the driver has been successfully installed and configured,we can simply view it via the command like "lsblk" or view device in "/dev".

### Change boot device

We are supposed to change the configuration in "/boot/extlinux/extlinux.conf".

- Boot from sd card

    After we boot from the emmc on the carrier board, we want to modify it to boot from the SD card. We need to make sure that the previous process, including the system burn to the sd card, and the sd card drivers are installed properly. Modify the parameters after root to the address of the device we are booting from. When we have completed our changes, reboot the system.

    **Before reboot Modify "/boot/extlinux/extlinux.conf" After reboot view "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf"**

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_3.png"></div>

    !!!Note
        Our configuration file after booting the system from the sd card is "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf" and the configuration file after booting the system from the onboard emmc is in "/boot/extlinux/extlinux.conf" . They are the same files from which the device reads the configuration and chooses where to boot the system after power-up, and the relative paths change when the system has finished booting.

- Boot from board emmc

    We want to change back to booting from emmc after booting from an SD card or we need to change the SD card for some purpose. Then we need to change the device back to boot from emmc first. We should make the following changes.

    **Before reboot Modify "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf" After reboot view "/boot/extlinux/extlinux.conf"**

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_4.png"></div>

Finally, we find it really works well.

- Boot from emmc

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_emmc.png"></div>

- Boot from sd card

    <div align=center><img width = 800 src="https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_sd.png"></div> -->

## More

### Change SD card I/O speed

We provide SD card function on <a href="https://wiki.seeedstudio.com/install_NVIDIA_software_to_Jetson-101" target="_blank"><span>reComputer J101 carrier board</span></a>, which supports CLK Frequency 48MHz. The CLK here is designed to achieve certificates (such as CE/FCC). If you want to increase CLK by yourself, you can use the instruction below.

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>


- **Step 1**. Clone this repository and modify the the code below.

    ```bash
    git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
    ```

- **Step 2**. Modify and Compile max-clk-limit value

    ```bash
    cd seeed-linux-dtoverlays
    sed -i '10s#48000000#208000000#' overlays/jetsonnano/jetson-sdmmc-overlay.dts
    make overlays/jetsonnano/jetson-sdmmc-overlay.dtbo
    sudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/
    sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "reComputer sdmmc"
    ```

- **Step 3**. Reboot

    ```bash
    reboot
    ```

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).

<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>

