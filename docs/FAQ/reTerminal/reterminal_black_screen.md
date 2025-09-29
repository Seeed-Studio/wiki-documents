---
description: reTerminal-FAQ
title: How to troubleshoot the black screen issue on reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reterminal_black_screen
last_update:
  date: 11/15/2023
  author: Kasun Thushara
---

reTerminal comes with the necessary drivers pre-installed out-of-the-box so you don't need to install any additional drivers.<br/>
However, if your screen is not displaying properly and remains black, please follow the troubleshooting steps below to identify and resolve the issue by step.

## Step 1: Check the flashing status of the LEDs

### If the PWR light is not on

  You should verify the status of the power supply because there can be a power supply problem. Additionally, to rule out any hardware difficulties, ensure that the CM4 module within the reTerminal is properly connected.

### If the PWR light is on but the SYS light is not on

  You need to flash the original factory system again. You can proceed directly to this section."

### If both lights are on

  This situation occurs due to issues with the driver controlling the LCD screen. At this point, please follow the troubleshooting steps provided in the [**second step**](/reterminal_black_screen/#second-confirm-whether-you-have-installed-a-new-system) and execute them by step.

## Step 2: Confirm whether you have installed a new system

:::caution

- If you flash new OS by yourself and the LCD screen fails to display properly, you need to [**install the necessary reTerminal drivers**](/reterminal_black_screen/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os) separately.

- If you haven't flashed your own OS but the screen remains black, please proceed directly to [**Flash Raspberry Pi OS which is originally shipped with reTerminal**](/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal).

- If you are attempting to install **Raspbian OS**, we have conducted tests and found that both the *32-bit and 64-bit* versions of **Bulleseye** work well with reTerminal without encountering any **black screen issue**. Additionally, we have also tested the new **Bookworm** *64-bit* version, and it functions smoothly on reTerminal.

:::

### Install reTerminal drivers after flashing new Raspberry Pi OS/ Ubuntu OS or Other OS

The hardware that need drivers include the **5-inch LCD, touch panel, accelerometer, light sensor, user LEDs, user buttons, RTC, buzzer, cryptographic co-processor**.
Therefore, installing this driver enables the proper functioning of the LCD screen while using new Raspberry Pi OS/ Ubuntu OS or Other OS.

- **1.** Clone the following repo

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **2.** Enter the repo

```sh
cd seeed-linux-dtoverlays
```

:::note
For **32bit OS** you will need to add following step before execute `sudo ./scripts/reTerminal.sh`.After completing the installation, remember to **reboot** reTerminal for the changes to take effect.

```
echo arm_64bit=0 | sudo tee -a /boot/config.txt
sudo reboot
```

:::

- **3.** Type the following to install the drivers

```sh
sudo ./scripts/reTerminal.sh
```

You will see the following output if you have successfully installed the drivers

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p>

- **4.** Reboot the reTerminal

```sh
sudo reboot
```

Finally, you can use the LCD screen normally on the new system.

### Flash Raspberry Pi OS which is originally shipped with reTerminal

:::caution
If you have flashed to a different OS and want to switch back to the default Raspberry Pi OS which is shipped with reTerminal, you can follow the steps below
:::

We can flash **Raspberry Pi OS / 64-bit Ubuntu OS or other OS** on to the **eMMC storage** of the CM4 on the reTerminal. If you have never flashed a system on reTerminal before, we strongly advise you to follow [Flash Raspberry Pi OS/ 64-bit Ubuntu OS or Other OS to eMMC](/flash_different_os_to_emmc) to prepare for the system flashing, which includes **installing the necessary drivers**.

Once the [necessary drivers](/flash_different_os_to_emmc) are installed, you just have to connect the USB Type-C port of the reTerminal to your PC. When you open File Explorer and see that the eMMC of Compute Module 4 is displayed as a USB mass storage device, you can perform the following steps:

- **1.** Download the Raspberry Pi OS by visiting the links below

  - [32-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)
  - [64-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)

**Note:** reTerminal is originally shipped with 32-bit OS. However, you can download a 64-bit version as well

- **2.** Extract the **.zip file**

- **3.** Open Raspberry Pi Imager software

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **4.** Press **CTRL + SHIFT + X** on the keyboard to open **Advanced options** window

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

Here you can **set a hostname, enable SSH, set a password, configure wifi, set locale settings** and more

- **5.** Click **CHOOSE OS** and select **Use custom**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/factory-os.png" alt="pir" width={600} height="auto" /></p>

- **6.** Navigate to the previously extracted image, select it and click **open**

- **7.** Click **CHOOSE STORAGE** and select the connected eMMC drive

- **8.** Finally, click **WRITE**

Finally, you can use the LCD screen normally on the original system.

## If the Step1/2 still fail to resolve the screen issue - Update the STM32 firmware for reTerminal LCD

:::note
If your reTerminal is manufactured after 26/09/2021, the STM32 comes with V1.8 firmware pre-installed.
:::

It is very important to make sure that you have the latest firmware flashed on to the STM32G030 chip on the reTerminal. STM32G030 is responsible to drive the LCD on the reTerminal. Updating the STM32 chip to the latest version will be helpful to solve most of the issues that you face with the reTerminal LCD.

There are 2 methods of flashing the STM32 chip.

- **Method 1:** Directly connect to STM32 chip using the CM4 on the reTerminal and flash the firmware
- **Method 2:** Physically connect the STM32 chip pins to the 40-Pin reTerminal GPIO using jumper wires and then use OpenOCD to flash the firmware

**Method 1** works if you have the **new version (v1.7 or higher)** of the STM32 firmware on the reTerminal and on the other hand, **method 2** is only needed if you have the **old version (lower than v1.7)** of the STM32 firmware on the board.

### Decide Which Flashing Method to Use

Now let's go through the following steps to identify which version of the board we have so that we can choose the appropriate flashing method.

- **1.** Enter terminal window of reTerminal and type the following to open the configuration file

```sh
sudo nano /boot/config.txt
```

- **2.** At the very bottom of this file, comment out the line which says **dtoverlay=reTerminal**

```sh
#dtoverlay=reTerminal
```

**Note:** This will unload all the reTerminal drivers. So when you turn on the reTerminal next time, none of the drivers will be loaded.

- **3.** Reboot reTerminal

```sh
sudo reboot
```

- **4.** Make STM32 enter **boot mode** through **i2c-tools**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **5.** List the connected I2C devices

```sh
i2cdetect -y 1
```

If you can see the I2C address **0x56** as the table below, you have the **new version (v1.7 or higher)** of the STM32 firmware on the board.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-new-board.png" alt="pir" width={600} height="auto" /></p>

However, if you can see the I2C address **0x45** as the table below, you have the **old version (lower than v1.7)** of the STM32 firmware on the board

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-old-board.png" alt="pir" width={600} height="auto" /></p>

- **6.** Open the configuration file that we used before

```sh
sudo nano /boot/config.txt
```

- **7.** At the very bottom of this file, uncomment the line which says **dtoverlay=reTerminal** to load the drivers again

```sh
dtoverlay=reTerminal
```

- **8.** Power off reTerminal

```sh
sudo poweroff
```

**Note:** If you are already running **STM32 v1.8 firmware**, once you enter **boot mode** through **i2c-tools**, the only way to come out of boot mode is to flash the STM32 firmware.

### Connect to STM32 using CM4 and flash the firmware

:::caution
If you have the **new version (v1.7 or higher)** of the STM32 firmware on the board, please follow this method.
:::

- **1.** Enter terminal window of reTerminal and type the following to open the configuration file

```sh
sudo nano /boot/config.txt
```

- **2.** At the very bottom of this file, comment out the line which says **dtoverlay=reTerminal**

```sh
#dtoverlay=reTerminal
```

- **3.** Reboot reTerminal

```sh
sudo reboot
```

- **4.** Make a new directory inside reTerminal and enter it.

```sh
mkdir STM32
cd STM32
```

<!-- - **5.** Visit [this link](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases) and download **stm32flash** file and the **STM32G030F6_R2.bin** file from the **latest release** version.

**Note:** You can click on them to start downloading -->

- **5.** Download **stm32flash** file and the **STM32G030F6_R2.bin**

```sh
wget https://sourceforge.net/projects/stm32flash/files/stm32flash-0.7.tar.gz 
```

```sh
wget https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases/download/2022-05-29-reTerminal-V1.9/STM32G030F6_R2.bin
```

- **6.** Unpack **stm32flash-0.7.tar.gz**

```sh
tar -xvf stm32flash-0.7.tar.gz
```

- **7.** Go to the folder named **stm32flash-0.7** and make the flash tool executable

```sh
cd stm32flash-0.7/
make
```

- **8.** Make STM32 enter **boot mode** through **i2c-tools**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **9.** Erase the flash in the STM32 chip using **stm32flash tool**

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **10.** Flash the firmware to STM32 using stm32flash tool

```sh
./stm32flash -a 0x56 -w ../STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**Note:** **STM32G030F6_R2.bin** is the file name of the new firmware

- **11.** Modify the OPTR register as follows

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **12.** Open the configuration file that we used before

```sh
sudo nano /boot/config.txt
```

- **13.** At the very bottom of this file, uncomment the line which says **dtoverlay=reTerminal**

```sh
dtoverlay=reTerminal
```

- **14.** Reboot reTerminal

```sh
sudo reboot
```

<!-- - **6.** Open command prompt on PC and navigate to the location of the downloaded files before

```sh
cd C:\Users\user\Downloads
```

- **7.** Transfer the files to the **STM32** directory on the reTerminal we created before

```sh
scp -r .\stm32flash .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\STM32
```

**Note:** **pi** is the username and **192.168.x.xx** is the IP address of reTerminal. You can replace this with hostname of reTerminal as well.

- **8.** Inside the terminal window of reTerminal, enter the **STM32** directory

```sh
cd STM32
```

Then you will see the files that we copied earlier

- **9.** Make the flash tool **executable**

```sh
chmod +x stm32flash
``` -->

<!-- - **10.** Make STM32 enter **boot mode** through **i2c-tools**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **11.** Erase the flash in the STM32 chip using **stm32flash tool**

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **12.** Flash the firmware to STM32 using stm32flash tool

```sh
./stm32flash -a 0x56 -w STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**Note:** **STM32G030F6_R2.bin** is the file name of the new firmware

- **13.** Modify the OPTR register as follows

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **14.** Open the configuration file that we used before

```sh
sudo nano /boot/config.txt
```

- **15.** At the very bottom of this file, uncomment the line which says **dtoverlay=reTerminal**

```sh
dtoverlay=reTerminal
```

- **16.** Reboot reTerminal

```sh
sudo reboot
``` -->

Now you have successfully flashed the firmware to STM32!

### Connect to STM32 using jumper wires and OpenOCD

:::caution
If you have the **old version (lower than v1.7)** of the STM32 firmware on the board, please follow this method.
:::

- **1.** Enter terminal window of reTerminal and type the following to update the packages list

```sh
sudo apt-get update
```

- **2.** Install the following packages

```sh
sudo apt-get install git autoconf libtool make pkg-config libusb-1.0-0 libusb-1.0-0-dev
```

- **3.** Clone the following repo and navigate to it

```sh
git clone http://openocd.zylin.com/openocd
cd openocd
```

- **4.** Visit [this link](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases) and download the **STM32G030F6_R2.bin** file from the **latest release** version.

**Note:** You can click on it to start downloading

- **5.** Open command prompt on PC and navigate to the location of the downloaded files before

```sh
cd C:\Users\user\Downloads
```

- **6.** Transfer the files to the **openocd** directory on the reTerminal we created before

```sh
scp -r .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\openocd
```

**Note:** **pi** is the username and **192.168.x.xx** is the IP address of reTerminal. You can replace this with hostname of reTerminal as well.

- **7.** Come back to terminal window on reterminal and enter the following inside the **openocd** directory

```sh
./bootstrap
```

- **8.** Enter the following

```sh
./configure --enable-sysfsgpio --enable-bcm2835gpio
```

- **9.** Compile it

```sh
make
```

- **10.** Install it

```sh
sudo make install
```

- **11.** Follow the connection below to connect the pins from STM32 to 40-Pin GPIO

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/pinout-stm32.png" alt="pir" width={600} height="auto" /></p>

**Note:** The STM32 pins are located at the back of reTerminal PCBA.

- **12.** While keeping the connection, enter the following command to flash the firmware to STM32

```sh
openocd -f interface/sysfsgpio-raspberrypi.cfg -c "transport select swd" -f target/stm32g0x.cfg -c "program STM32G030F6_R2.bin verify 0x08000000;shutdown"
```

**Note:** Normally it takes about 3 seconds to finish flashing. So you need to **hold** the above connection for about **3 seconds** until the flashing process is complete

If you see the following log, that means the STM32 firmware is successfully flashed!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/openocd-log.jpg" alt="pir" width={350} height="auto" /></p>

- **13.** Disconect the connections and **physically disconnect the power cord directly** without **poweroff** command

**Note:** If you don't physically unplug the power cord, STM32 firmware will not load successfully

Now you have successfully flashed the firmware to STM32!

### Check the installed STM32G030 firmware version

Now let's check the installed STM32 firmware version

- **1.** Enter terminal window of reTerminal and type the following to open the configuration file

```sh
sudo nano /boot/config.txt
```

- **2.** At the very bottom of this file, comment out the line which says **dtoverlay=reTerminal**

```sh
#dtoverlay=reTerminal
```

- **3.** Reboot reTerminal

- **4.** Enter the following inside terminal window of reTerminal to check the STM32 firmware version

```sh
i2ctransfer -y 1 w1@0x45 0x97 r2
```

If the output looks like **0x01 0x07**, that means you are using firmware version 1.7

- **5.** Open the configuration file that we used before

```sh
sudo nano /boot/config.txt
```

- **6.** At the very bottom of this file, uncomment the line which says **dtoverlay=reTerminal**

```sh
dtoverlay=reTerminal
```

- **7.** Reboot reTerminal

```sh
sudo reboot
```

## Flash Raspberry Pi OS which is newest version - Bookworm

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2023_11_15_bookworm_64_reTerminal/bookworm.jpeg" alt="pir" width={600} height="auto" /></p>

We have prepared an image with the latest Bookworm OS, the newest release from Raspberry Pi officials. If you encounter any issues, especially those discussed above, we highly recommend following these steps for a smoother experience.

:::note
Before proceeding, ensure that you **flip down the boot mode switch**. Next, launch the **rpiboot setup installer**. Detailed instructions on how to perform these steps are provided [**here**](https://wiki.seeedstudio.com/flash_different_os_to_emmc/).

:::

- **1.** Download the Raspberry Pi OS by visiting the links below

  <!-- - [64-bit Bookworm-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2023_11_15_bookworm_64_reTerminal/2023_11_15_bookworm_64.img.gz) -->

| Version                     | Description      | TAG                                                     |
| --------------------------- | ---------------- | ------------------------------------------------------------ |
| [2024-03-14-Raspbian-reTerminal-arm64](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-arm64.zip)              | 64bit Debian12(bookworm) Linux version 6.6.20 | lastest |
| [2024-03-14-Raspbian-reTerminal-armhf](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2024-03-14-Raspbian-reTerminal/2024-03-14-Raspbian-reTerminal-armhf.zip) |  32bit Debian12(bookworm) Linux version 6.6.20           | lastest |
| [2023_11_15_bookworm_64.img.gz](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2023_11_15_bookworm_64_reTerminal/2023_11_15_bookworm_64.img.gz)               | 64bit Debian12(bookworm) Linux version 6.1  | release |

- **2.** Extract the **.zip file**

- **3.** Open Raspberry Pi Imager software

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **4.** Press **CTRL + SHIFT + X** on the keyboard to open **Advanced options** window

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

Here you can **set a hostname, enable SSH, set a password, configure wifi, set locale settings** and more

- **5.** Click **CHOOSE OS** and select **Use custom**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/factory-os.png" alt="pir" width={600} height="auto" /></p>

- **6.** Navigate to the previously extracted image, select it and click **open**

- **7.** Click **CHOOSE STORAGE** and select the connected eMMC drive

- **8.** Finally, click **WRITE**

Finally, **Flip the Boot Mode switch*** back to the original postion and assemble the reTerminal shell. Then **turn on the power**. you can use the LCD screen normally on the original system.
