---
description: reTerminal DM Flash OS
title: reTerminal DM Flash OS
keywords:
  - Edge
  - reTerminal-DM
  - Flash OS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reterminal-dm-flash-OS
last_update:
  date: 04/23/2023
  author: Peter Pan
---
# reTerminal DM Flash Raspbian OS to eMMC

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

reTerminal DM is A 10.1" open-source industrial HMI - an Integrated Device Master to unify data flow and manage the onsite device.

Based on Raspberry Pi CM4, and as a Panel PC, HMI, PLC, IIoT Gateway all-in-one device, reTerminal DM is a new generation of interactive sensing hub with an IP65 industrial-grade large screen.

It is equipped with rich scalability and hybrid connectivity, supporting CAN bus, RS485, RS232, Gigabit Ethernet port, and other interfaces, as well as powerful wireless communication capabilities such as 4G, LoRa®, WiFi, and BLE.

> \*4G and LoRa® modules does not come with reTerminal DM by default, please purchase the relevant modules accordingly, for
> [4G bundle](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

:::note
The Sensecraft Edge OS can be download from [**Here**](https://sourceforge.net/projects/reterminal-dm/files/Sensecraft-edge-OS-V0.3.10.tar.gz/download), please note that this Sensecraft Edge OS is currently developed based on reTerminal DM and only works with Production version reTerminal DM
:::

## Hardware Requirements

You need to prepare the following hardware

- reTerminal DM x 1
- Host Computer (Windows/Mac/Linux) x 1
- Ethernet cable x 1
- Power adapter (12V-24V) BYO
- USB Type-C cable x 1

## Software Requirements

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## Steps for Flashing Raspbian OS

> **Note:** The latest system image packaged by Seeed, including the appropriate drivers: [pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **Step 1.** Flip the `boot mode switch` located next to the USB Type-C port, make sure switch is set to `disable eMMC boot mode` according to the diagram below:

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/flash.png" alt="pir" width="800" height="auto"/></p>

- **Step 2.** Please use the USB Type-C data cable connect to the Type-C port on the reTerminal DM, as shown in the above image,

- **Step 3.** Please connect the Power Cord from the power supply to the reTerminal DM power port.
  
:::danger

Please make sure you have connected the power cord in the right polarity.

:::
  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/power.png" alt="pir" width="800" height="auto"/></p>

Now let's move on to software set up on your host computer. Please follow the steps according to your desired operating system

### For Windows

- **Step 1.** Download the **rpiboot setup installer** by click **[here](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** to install the necessary drivers and the boot tool

- **Step 2.** Connect reTerminal DM to the PC via USB Type-C cable

Windows will now find the hardware and install the necessary drivers

- **Step 3.** Search for **rpiboot** tool that we installed before and open it

- **Step 4.** Open **file explorer** and you will see the eMMC of the Computer Module 4 shown as a **USB mass storage device**

- **Step 5.** Download **Raspberry Pi Imager** software from **[here](https://www.raspberrypi.org/software/)**

- **Step 6.** Open Raspberry Pi Imager software

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Step 7.** Press **CTRL + SHIFT + X** on the keyboard to open **Advanced options** window

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Here you can **set a hostname, enable SSH, set a password, configure wiFi, set locale settings** and more

- **Step 8.** Click **CHOOSE OS** and select your preferred OS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTE:** You can select other OS such as **64-bit Ubuntu** by navigating into **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Step 9.** Click **CHOOSE STORAGE** and select the connected eMMC drive

- **Step 10.** Finally, click **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Please wait a few minutes until the flashing process is complete.

- **Step 11.** Flip the **Boot Mode switch** back to the original position

Now you can skip to **[here](#install-drivers)**

:::note

Once the above steps finished and you have reapply the power to the reTerminal DM, the Power LED should turn on yellow color and the ACT LED should flashing green color, but the screen is blank and no backlight. please do not panic, you just need to following the [install drivers](#install-drivers) steps to revive the screen.

:::

### For MAC

:::caution
**You need to install [homebrew](https://brew.sh/) before proceed the following steps.**
Please open a terminal and type ```brew -V``` to check if you have setup the correct homebrew environment, you should see the version of the homebrew environment you have installed.
:::

- **Step 1.** Clone the **usbboot** repository

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Step 2.** Install **libusb**

```sh
brew install libusb
```

- **Step 3.** Install **pkg-config**

```sh
brew install pkg-config
```

- **Step 4.** Build using make

```sh
make
```

- **Step 5.** Run the binary

```sh
sudo ./rpiboot
```

- **Step 6.** Connect reTerminal to the your Mac computer via USB Type-C cable

- **Step 7.** Download and Install **Raspberry Pi Imager** Application by visiting [this link](https://www.raspberrypi.org/software/)

- **Step 8.** Open the **Raspberry Pi Imager** Application

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Step 9.** Press **CTRL + SHIFT + X** on the keyboard to open **Advanced options** window

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Here you can **set a hostname, enable SSH, set a password, configure wifi, set locale settings** and more

- **Step 10.** Click **CHOOSE OS** and select your preferred OS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTE:** You can select OS such as **64-bit Ubuntu** by navigating into **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Step 11.** Click **CHOOSE STORAGE** and select the connected eMMC drive

- **Step 12.** Finally, click **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Please wait a few minutes until the flashing process is complete.

- **Step 13.** Flip the **Boot Mode switch** back to the original position

Now you can skip to **[here](#install-drivers)**

:::note

Once the above steps finished and you have reapply the power to the reTerminal DM, you should experience that the Power LED should turn on yellow color and the ACT LED should flashing green color, but the screen is blank and no backlight. please do not panic, you just need to following the [install drivers](#install-drivers) steps to revive the screen.

:::

### For Linux

We will use Git to obtain the **rpiboot** source code, so make sure Git is installed

- **Step 1.** Open a **Terminal** window and type the following to update the **packages list**

```sh
sudo apt-get update
```

- **Step 2.** Install **Git** by the following command

```sh
sudo apt install git libusb-1.0-0-dev pkg-config build-essential
```

- **Step 3.** Git might produce an error if the date is not set properly. Type the following to correct this

```sh
sudo date MMDDhhmm
```

**NOTE:** Where **MM** is the month, **DD** is the date, and **hh** and **mm** are hours and minutes respectively.

- **Step 4.** Clone the **usbboot** tool repository

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Step 5.** Build and install the usbboot tool

```sh
make
```

- **Step 6.** Run the usbboot tool and it will wait for a connection

```sh
sudo ./rpiboot
```

The result is shown as below:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

- **Step 7.** Connect reTerminal to the PC via USB Type-C cable

- **Step 8.** Download snap

```sh
sudo apt install snap
```

- **Step 9.** Download **rpi-imager**

```sh
snap install rpi-imager
```

- **Step 10.** Open Raspberry Pi Imager software

```sh
rpi-imager
```

The result is shown as below:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="600" height="auto"/></p>

- **Step 11.** Press **CTRL + SHIFT + X** on the keyboard to open **Advanced options** window

Set a hostname, set a password, configure wifi, set locale settings

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

Enable SSH

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

Here you can **set a hostname, enable SSH, set a password, configure wifi, set locale settings** and more

- **Step 11.** Click **CHOOSE OS** and select your preferred OS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTE:** You can select OS such as **64-bit Ubuntu** by navigating into **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Step 12.** Click **CHOOSE STORAGE** and select the connected eMMC drive

- **Step 13.** Finally, click **NEXT** and **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

Please wait a few minutes until the flashing process is complete.
The result is shown as below:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **Step 14.** Flip the **Boot Mode Switch** back to the original position

:::note

Once the above steps finished and you have reapply the power to the reTerminal DM, you should experience that the Power LED should turn on yellow color and the ACT LED should flashing green color, but the screen is blank and no backlight. please do not panic, you just need to following the [install drivers](#install-drivers) steps to revive the screen.

:::

## Install Drivers

### Access reTerminal DM via SSH

:::note

The following steps require some basic Linux command line knowledge, Please prepare yourself a cup of coffee and getting ready.

:::

As following the above flashing OS steps, the reTerminal DM should have SSH enabled with the hostname of `raspberrypi.local`.

Now please connect the Ethernet cable to the reTerminal DM and a router which is on the same network as your host computer.

:::tip

To test if your reTerminal DM is on the same network with host computer, you can use `ping raspberrypi.local`

if you see the following output after the ping command which means both devices are on the same network:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>

:::

##### For Windows

- **Step 1.** Open **Command Prompt** and type the following

```sh
# ssh username@hostname
ssh pi@raspberrypi.local
```

- **Step 2.** Type **yes** for the prompt

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **Step 3.** Enter the password as follows

```sh
raspberry
```

- **Step 4.** If you have sucessfully logged into the Raspberry Pi OS, you will see the following output

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### For Mac/Linux

- **Step 1.** Open **Terminal** on the computer and type the following

```sh
ssh pi@raspberrypi.local
```

- **Step 2.** Type **yes** for the following message

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Step 3.** When it asks for the password, type the following

```sh
raspberry
```

- **Step 4.** If you have sucessfully logged into the Raspberry Pi OS, you will see the following output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### Install reTerminal drivers after flashing new Raspbian OS

reTerminal DM comes with the necessary drivers pre-installed out-of-the-box so you don't need to install any additional drivers. However, if you flash new OS by yourself, you need to install the necessary drivers separately.

:::tip

**For install 32-bit OS driver, Please carefully follow the steps below:**

The Operating System that pre-installed on reTerminal DM is 64-bit, if you wish to install 32-bit OS please use the following method to install the DTS drivers.

>⚠️Note : Please reboot your reTerminal DM after you flash 32-bit OS.

Please follow the [**Access reTerminal DM via SSH**](#access-reterminal-dm-via-ssh) step, and then enter the following command:

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

Then continue the [**Install drivers after flashing new Raspbian OS process**](#install-reterminal-drivers-after-flashing-new-raspbian-os)

:::

- **Step 1.** Clone the following repo in the ssh shell you have connected to reTerminal DM from the above steps

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **Step 2.** Enter the repo

```sh
cd seeed-linux-dtoverlays
```

- **Step 3.** Type the following to install the drivers

```sh
sudo ./scripts/reTerminal.sh --device reTerminal-DM
```

<!-- You will see the following output if you have successfully installed the drivers

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p> -->

- **Step 4.** Reboot the reTerminal DM

```sh
sudo reboot
```

Now your screen should light up and run normally.

## FAQ

### Touch Screen orientation

**Q: The screen touch panel is orientate differently from the screen display?**

**A: Please carefully follow the steps below:**

Please follow the [access reTerminal DM via SSH](#access-reterminal-dm-via-ssh) step, and then enter the following command:

```sh
echo 'ATTRS{name}=="gt9271", ENV{LIBINPUT_CALIBRATION_MATRIX}="0  1.0  0 -1.0 0 1.0 0 0 1.0"' | sudo tee -a /etc/udev/rules.d/98-touchscreen-cal.rules
```

Then reboot:

```sh
sudo reboot
```

If the screen orientation is still incorrect, additional options for the `ENV{LIBINPUT_CALIBRATION_MATRIX}` can be found [here](https://wayland.freedesktop.org/libinput/doc/1.11.3/udev_config.html).

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
