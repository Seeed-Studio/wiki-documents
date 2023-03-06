---
description: Flash JetPack to reComputer J4012 (J401 carrier board)
title: reComputer J4012 | J401
keywords:
- reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_J4012_Flash_Jetpack
last_update:
  date: 3/2/2023
  author: jianjing Huang
---

## Flash JetPack to reComputer J4012 (J401 carrier board)

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/5.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

In this wiki, we will show you how to flash [Jetpack](https://developer.nvidia.com/embedded/jetpack) to an NVMe SSD connected to the reComputer J4012.

reComputer J4012 comes with JetPack 5.1 pre-installed on the included NVMe SSD, so that you do not need to flash it. However, if you want to flash it again with JetPack, you can follow this guide.

## Prerequisites

- Ubuntu Host PC (native or VM using VMware Workstation Player)
- reComputer J4012
- USB Type-C data transmission cable

## Enter Force Recovery Mode

Before we can move on to the installation steps, we need to make sure that the reComputer is in force recovery mode.

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

**Step 3.** Under the command line window of the host computer, enter the command `lsusb`. When the returned content has the `ID 0955:7323 NVidia Corp.` in it, it means that the reComputer is in the force recovery mode and we can proceed to the subsequent operations.

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"/></div>

**Step 4.** Remove the jumper wire

## Flash to Jetson

Here we will use NVIDIA L4T 35.2.1 to install Jetpack 5.1 on the reComputer J4012

**Step 1:** [Download](https://developer.nvidia.com/embedded/jetson-linux-r3521) the NVIDIA drivers on the host PC. The required drivers are shown below:

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"/></div>

**Step 2:** Extract **Jetson_Linux_R35.1.0_aarch64.tbz2** and **Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2** by navigating to the folder containing these files, apply the changes and install the necessary prerequisites

```sh
tar xf Jetson_Linux_R35.2.1_aarch64.tbz2
sudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.2.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

**Step 3:** Flash the system to the NVMe SSD

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \
  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \
  --showlogs --network usb0 p3509-a02+p3767-0000 internal
```

You will see the following output if the flashing process is successful

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

## Tech Support

Please do not hesitate to submit issues into our [forum](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
