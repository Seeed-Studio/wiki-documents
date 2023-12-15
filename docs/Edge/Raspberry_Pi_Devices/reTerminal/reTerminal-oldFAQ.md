---
description: reTerminal-FAQ
title: FAQs for reTerminal Usage
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-FAQ
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# FAQs for reTerminal Usage

This document contains all the frequently asked questions related to reTerminal. This will be very helpful if you are suffering from any issues when using the reTerminal.

## Q1: How can I update the STM32 firmware for reTerminal LCD

**Note:** If your reTerminal is manufactured after 26/09/2021, the STM32 comes with V1.8 firmware pre-installed.

It is very important to make sure that you have the latest firmware flashed on to the STM32G030 chip on the reTerminal. STM32G030 is responsible to drive the LCD on the reTerminal. Updating the STM32 chip to the latest version will be helpful to solve most of the issues that you face with the reTerminal LCD.

There are 2 methods of flashing the STM32 chip.

- **Method 1:** Directly connect to STM32 chip using the CM4 on the reTerminal and flash the firmware
- **Method 2:** Physically connect the STM32 chip pins to the 40-Pin reTerminal GPIO using jumper wires and then use OpenOCD to flash the firmware

**Method 1** works if you have the **new version (v1.7 or higher)** of the STM32 firmware on the reTerminal and on the other hand, **method 2** is only needed if you have the **old version (lower than v1.7)** of the STM32 firmware on the board.

### Decide Which Flashing Method to Use

Now let's go through the following steps to identify which version of the board we have so that we can choose the appropriate flashing method.

- **Step 1.** Enter terminal window of reTerminal and type the following to open the configuration file

```sh
sudo nano /boot/config.txt
```

- **Step 2.** At the very bottom of this file, comment out the line which says **dtoverlay=reTerminal**

```sh
#dtoverlay=reTerminal
```

**Note:** This will unload all the reTerminal drivers. So when you turn on the reTerminal next time, none of the drivers will be loaded.

- **Step 3.** Reboot reTerminal

```sh
sudo reboot
```

- **Step 4.** Make STM32 enter **boot mode** through **i2c-tools**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **Step 5.** List the connected I2C devices

```sh
i2cdetect -y 1
```

If you can see the I2C address **0x56** as the table below, you have the **new version (v1.7 or higher)** of the STM32 firmware on the board.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-new-board.png" alt="pir" width={600} height="auto" /></p>

However, if you can see the I2C address **0x45** as the table below, you have the **old version (lower than v1.7)** of the STM32 firmware on the board

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/i2c-old-board.png" alt="pir" width={600} height="auto" /></p>

- **Step 6.** Open the configuration file that we used before

```sh
sudo nano /boot/config.txt
```

- **Step 7.** At the very bottom of this file, uncomment the line which says **dtoverlay=reTerminal** to load the drivers again

```sh
dtoverlay=reTerminal
```

- **Step 8.** Power off reTerminal

```sh
sudo poweroff
```

**Note:** If you are already running **STM32 v1.8 firmware**, once you enter **boot mode** through **i2c-tools**, the only way to come out of boot mode is to flash the STM32 firmware.

### Connect to STM32 using CM4 and flash the firmware

If you have the **new version (v1.7 or higher)** of the STM32 firmware on the board, please follow this method.

- **Step 1.** Enter terminal window of reTerminal and type the following to open the configuration file

```sh
sudo nano /boot/config.txt
```

- **Step 2.** At the very bottom of this file, comment out the line which says **dtoverlay=reTerminal**

```sh
#dtoverlay=reTerminal
```

- **Step 3.** Reboot reTerminal

```sh
sudo reboot
```

- **Step 4.** Make a new directory inside reTerminal and enter it.

```sh
mkdir STM32
cd STM32
```

<!-- - **Step 5.** Visit [this link](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases) and download **stm32flash** file and the **STM32G030F6_R2.bin** file from the **latest release** version.

**Note:** You can click on them to start downloading -->

- **Step 5.** Download **stm32flash** file and the **STM32G030F6_R2.bin**

```sh
wget https://sourceforge.net/projects/stm32flash/files/stm32flash-0.7.tar.gz 
```

```sh
wget https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases/download/2022-05-29-reTerminal-V1.9/STM32G030F6_R2.bin
```

- **Step 6.** Unpack **stm32flash-0.7.tar.gz**

```sh
tar -xvf stm32flash-0.7.tar.gz
```

- **Step 7.** Go to the folder named **stm32flash-0.7** and make the flash tool executable

```sh
cd stm32flash-0.7/
make
```

- **Step 8.** Make STM32 enter **boot mode** through **i2c-tools**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **Step 9.** Erase the flash in the STM32 chip using **stm32flash tool**

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **Step 10.** Flash the firmware to STM32 using stm32flash tool

```sh
./stm32flash -a 0x56 -w ../STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**Note:** **STM32G030F6_R2.bin** is the file name of the new firmware

- **Step 11.** Modify the OPTR register as follows

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **Step 12.** Open the configuration file that we used before

```sh
sudo nano /boot/config.txt
```

- **Step 13.** At the very bottom of this file, uncomment the line which says **dtoverlay=reTerminal**

```sh
dtoverlay=reTerminal
```

- **Step 14.** Reboot reTerminal

```sh
sudo reboot
```

<!-- - **Step 6.** Open command prompt on PC and navigate to the location of the downloaded files before

```sh
cd C:\Users\user\Downloads
```

- **Step 7.** Transfer the files to the **STM32** directory on the reTerminal we created before

```sh
scp -r .\stm32flash .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\STM32
```

**Note:** **pi** is the username and **192.168.x.xx** is the IP address of reTerminal. You can replace this with hostname of reTerminal as well.

- **Step 8.** Inside the terminal window of reTerminal, enter the **STM32** directory

```sh
cd STM32
```

Then you will see the files that we copied earlier

- **Step 9.** Make the flash tool **executable**

```sh
chmod +x stm32flash
``` -->

<!-- - **Step 10.** Make STM32 enter **boot mode** through **i2c-tools**

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x01
```

- **Step 11.** Erase the flash in the STM32 chip using **stm32flash tool**

```sh
./stm32flash -a 0x56 -o /dev/i2c-1
```

- **Step 12.** Flash the firmware to STM32 using stm32flash tool

```sh
./stm32flash -a 0x56 -w STM32G030F6_R2.bin -v -g 0x0 /dev/i2c-1
```

**Note:** **STM32G030F6_R2.bin** is the file name of the new firmware

- **Step 13.** Modify the OPTR register as follows

```sh
i2ctransfer -y 1 w2@0x45 0x9b 0x00
```

- **Step 14.** Open the configuration file that we used before

```sh
sudo nano /boot/config.txt
```

- **Step 15.** At the very bottom of this file, uncomment the line which says **dtoverlay=reTerminal**

```sh
dtoverlay=reTerminal
```

- **Step 16.** Reboot reTerminal

```sh
sudo reboot
``` -->

Now you have successfully flashed the firmware to STM32!

### Connect to STM32 using jumper wires and OpenOCD

If you have the **old version (lower than v1.7)** of the STM32 firmware on the board, please follow this method.

- **Step 1.** Enter terminal window of reTerminal and type the following to update the packages list

```sh
sudo apt-get update
```

- **Step 2.** Install the following packages

```sh
sudo apt-get install git autoconf libtool make pkg-config libusb-1.0-0 libusb-1.0-0-dev
```

- **Step 3.** Clone the following repo and navigate to it

```sh
git clone http://openocd.zylin.com/openocd
cd openocd
```

- **Step 4.** Visit [this link](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/releases) and download the **STM32G030F6_R2.bin** file from the **latest release** version.

**Note:** You can click on it to start downloading

- **Step 5.** Open command prompt on PC and navigate to the location of the downloaded files before

```sh
cd C:\Users\user\Downloads
```

- **Step 6.** Transfer the files to the **openocd** directory on the reTerminal we created before

```sh
scp -r .\STM32G030F6_R2.bin pi@192.168.x.xx:\home\pi\openocd
```

**Note:** **pi** is the username and **192.168.x.xx** is the IP address of reTerminal. You can replace this with hostname of reTerminal as well.

- **Step 7.** Come back to terminal window on reterminal and enter the following inside the **openocd** directory

```sh
./bootstrap
```

- **Step 8.** Enter the following

```sh
./configure --enable-sysfsgpio --enable-bcm2835gpio
```

- **Step 9.** Compile it

```sh
make
```

- **Step 10.** Install it

```sh
sudo make install
```

- **Step 11.** Follow the connection below to connect the pins from STM32 to 40-Pin GPIO

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/pinout-stm32.png" alt="pir" width={600} height="auto" /></p>

**Note:** The STM32 pins are located at the back of reTerminal PCBA.

- **Step 12.** While keeping the connection, enter the following command to flash the firmware to STM32

```sh
openocd -f interface/sysfsgpio-raspberrypi.cfg -c "transport select swd" -f target/stm32g0x.cfg -c "program STM32G030F6_R2.bin verify 0x08000000;shutdown"
```

**Note:** Normally it takes about 3 seconds to finish flashing. So you need to **hold** the above connection for about **3 seconds** until the flashing process is complete

If you see the following log, that means the STM32 firmware is successfully flashed!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/openocd-log.jpg" alt="pir" width={350} height="auto" /></p>

- **Step 13.** Disconect the connections and **physically disconnect the power cord directly** without **poweroff** command

**Note:** If you don't physically unplug the power cord, STM32 firmware will not load successfully

Now you have successfully flashed the firmware to STM32!

### Check the installed STM32G030 firmware version

Now let's check the installed STM32 firmware version

- **Step 1.** Enter terminal window of reTerminal and type the following to open the configuration file

```sh
sudo nano /boot/config.txt
```

- **Step 2.** At the very bottom of this file, comment out the line which says **dtoverlay=reTerminal**

```sh
#dtoverlay=reTerminal
```

- **Step 3.** Reboot reTerminal

- **Step 4.** Enter the following inside terminal window of reTerminal to check the STM32 firmware version

```sh
i2ctransfer -y 1 w1@0x45 0x97 r2
```

If the output looks like **0x01 0x07**, that means you are using firmware version 1.7

- **Step 5.** Open the configuration file that we used before

```sh
sudo nano /boot/config.txt
```

- **Step 6.** At the very bottom of this file, uncomment the line which says **dtoverlay=reTerminal**

```sh
dtoverlay=reTerminal
```

- **Step 7.** Reboot reTerminal

```sh
sudo reboot
```

## Q2: How can I flash Raspberry Pi OS which is originally shipped with reTerminal?

If you have flashed to a different OS and want to switch back to the default Raspberry Pi OS which is shipped with reTerminal, you can follow the steps below

- **Step 1.** Download the Raspberry Pi OS by visiting the links below

  - [32-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/32bit-20220721T012743Z-001.zip)
  - [64-bit 2022-07-21-Raspbian-reTerminal](https://files.seeedstudio.com/wiki/ReTerminal/RPiOS_Images/2022-07-21-Raspbian-reTerminal-arm64/64bit-20220721T012743Z-001.zip)

**Note:** reTerminal is originally shipped with 32-bit OS. However, you can download a 64-bit version as well

- **Step 2.** Extract the **.zip file**

- **Step 3.** Open Raspberry Pi Imager software

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **Step 4.** Press **CTRL + SHIFT + X** on the keyboard to open **Advanced options** window

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

Here you can **set a hostname, enable SSH, set a password, configure wifi, set locale settings** and more

- **Step 5.** Click **CHOOSE OS** and select **Use custom**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/factory-os.png" alt="pir" width={600} height="auto" /></p>

- **Step 6.** Navigate to the previously extracted image, select it and click **open**

- **Step 7.** Click **CHOOSE STORAGE** and select the connected eMMC drive

- **Step 8.** Finally, click **WRITE**

## Q3: How to upgrade Raspberry Pi OS and the installed packages

We will update all the packages and also the Raspberry Pi OS to the latest version

- **Step 1.** Open a terminal window on the reTerminal and type the following

```sh
sudo apt update
sudo apt full-upgrade
```

- **Step 2.** Reinstall kernel headers

```sh
sudo apt install raspberrypi-kernel-headers
```

- **Step 3.** Reboot the reTerminal

```sh
sudo reboot
```

Now your Raspberry Pi OS and all the necessary packages are up to update!

## Q4: How can I flash OS if I replace the CM4 with non-eMMC version

If you want to use a Compute Module 4 without eMMC on the reTerminal, then you need to insert a micro-SD and flash the OS of your choice. Follow the steps below according to your operating system.

- **Step 1.** Insert a micro-SD card to the computer using a **micro-SD card reader** connected to the computer, or by using a **built-in card reader** on a laptop

- **Step 2.** Download **Raspberry Pi Imager** software by visiting [this link](https://www.raspberrypi.org/software/)

**Note:** You can choose to download for either **Windows, Mac or Ubuntu**

- **Step 3.** Open Raspberry Pi Imager software

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width={600} height="auto" /></p>

- **Step 4.** Press **CTRL + SHIFT + X** on the keyboard to open **Advanced options** window

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width={600} height="auto" /></p>

Here you can **set a hostname, enable SSH, set a password, configure wifi, set locale settings** and more

- **Step 5.** Click **CHOOSE OS** and select your preferred OS

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width={600} height="auto" /></p>

**NOTE:** You can select OS such as **64-bit Ubuntu** by navigating into **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width={1000} height="auto" /></p>

- **Step 6.** Click **CHOOSE STORAGE** and select the connected micro-sd card

- **Step 7.** Finally, click **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width={600} height="auto" /></p>

Please wait a few minutes until the flashing process is complete.

- **Step 8.** Eject the micro-SD card from computer and insert it into the reTerminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/micro-sd.jpg" alt="pir" width={600} height="auto" /></p>

**Note:** You need to open the shell of the reTerminal to access the micro-sd card slot

## Q5: How can I log in to Raspberry Pi OS/ Ubuntu OS or other OS using a USB to serial converter

If you have a **USB to Serial Converter**, you can use the following steps to log in to Raspberry Pi OS

Connect jumper wires from a USB to Serial Converter to the **UART pins** on the 40-pin GPIO header of the reTerminal as follows

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/USB-UART.png" alt="pir" width={1000} height="auto" /></p>

Now let's configure the software on the computer. Please follow according to your operating system

### For Windows

- **Step 1.** Connect the USB to Serial Converter to the PC

- **Step 2.** Open **Device Manager** by typing **Device Manager** in the windows search box

- **Step 3.** Click on the drop-down arrow from **Ports (COM & LPT)** and find the name of the connected serial port (ex: **COM7**)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-dev-show.jpg" alt="pir" width={320} height="auto" /></p>

- **Step 4.** Download and install **Putty** by visiting [this link](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

**Note:** Putty is an SSH and telnet client where you can use it to connect to the reTerminal via SSH. You can skip this step if you already have Putty installed

- **Step 5.** Open Putty to connect the PC to the reTerminal

- **Step 6.** Select **Serial** under the **Connection Type**

- **Step 7.** Configure the settings as follows:

  - Serial line: COM7 (choose your COM port)
  - Speed: 9600

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/COM7-Putty-connect.jpg" alt="pir" width={450} height="auto" /></p>

- **Step 8.** Click **Open**

- **Step 9.** On the Putty window, enter the login details as follows

```sh
- Username: pi
- Password: raspberry
```

- **Step 10.** If you have sucessfully logged into the Raspberry Pi OS, you will see the following output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi.png" alt="pir" width={900} height="auto" /></p>

### For Mac/Linux

- **Step 1.** Connect the USB to Serial Converter to the PC

- **Step 2.** Open a **terminal window** on Mac/Linux

- **Step 3.** Type the following to update the **packages list**

```sh
sudo apt-get update
```

- **Step 4.** Type the following to install **minicom**

```sh
sudo apt-get install minicom
```

- **Step 5.** Type the following in the terminal to view the connected serial devices

```sh
dmesg | grep tty
```

> <p style={{fontSize: 16}}>Ex: <br/>
    [ 1562.048241] cdc_acm 1-3:1.0: ttyACM0: USB ACM device</p>

- **Step 6.** Connect to the serial device by typing the following

```sh
minicom -D /dev/ttyACM0 -b 9600
```

**Note:** The baud rate is set to 9600

- **Step 7.** After the hardware connections mentioned above, turn on the power from the wall power socket to power on the reTerminal

Now you have successfully logged into Raspberry Pi OS.

## Q6: I cannot wake up the reTerminal LCD after sleep

Open a terminal window after connecting through SSH or VNC and enter the following commands

```sh
DISPLAY=:0 xset dpms force off
DISPLAY=:0 xset dpms force on
```

This will reinitialize the LCD on the reTerminal

## Q7: How can I boot an OS from USB Flash Drive

You can boot an OS from USB Flash Drive by following the steps below. Here we change the boot order to **USB Boot > eMMC Boot**, which means, if the USB Boot fails, it will boot from eMMC.

**Note:** You will have to use Ubuntu or MacOS as host PC for this method.

- **Step 1.** Remove the 4 rubber covers and open the reTerminal back shell unscrewing the 4 screws underneath

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width={450} height="auto" /></p>

- **Step 2.** Remove the 2 screws to disassemble the heatsink and also the remaining 4 screws to take apart the entire case

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-3.jpg" alt="pir" width={500} height="auto" /></p>

- **Step 3.** Flip down the **boot mode switch** according to the below diagram

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flip-switch.jpg" alt="pir" width={700} height="auto" /></p>

- **Step 4.** Open a **Terminal** window inside the Host PC after connecting to reTerminal and type the following to update the **packages list**

```sh
sudo apt update
```

- **Step 5.** Install **Git** by the following command

```sh
sudo apt install git
```

- **Step 6.** Git might produce an error if the date is not set properly. Type the following to correct this

```sh
sudo date MMDDhhmm
```

**NOTE:** Where **MM** is the month, **DD** is the date, and **hh** and **mm** are hours and minutes respectively.

- **Step 7.** Clone and enter the **usbboot** tool repository

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Step 8.** Enter the following to install **libusb**

```sh
sudo apt install libusb-1.0-0-dev
```

- **Step 9.** Build and install the usbboot tool

```sh
make
```

- **Step 10.** Open the bootloader configuration file

```sh
sudo nano recovery/boot.conf
```

- **Step 11.** Change the **BOOT_ORDER** field to the following

```sh
BOOT_ORDER=0xf15
```

**Note:** Here if USB Boot fails, it switches to eMMC boot

- **Step 12.** Run the following to update the EEPROM image

```sh
cd recovery
./update-pieeprom.sh
```

The pieeprom.bin file is now ready to be flashed to the Compute Module 4

- **Step 13.** Navigate back to the **usbboot** directory

```sh
cd ..
```

- **Step 14.** Run the usbboot tool to flash the bootloader EEPROM

```sh
sudo ./rpiboot -d recovery
```

- **Step 15.** Connect reTerminal to the PC via USB Type-C cable

Now it will take a few seconds to transfer the necessary files to the reTerminal.

- **Step 16.** Turn off reTerminal, flip the Boot Mode switch back to the original position and assemble the reTerminal shell

- **Step 17.** Connect a bootable USB Flash Drive with a suitable OS inside, connect to one of the USB Ports on the reTerminal and turn on reTerminal

Now you will see reTerminal booting from the connected USB Drive

## Q8: Why there is black glue around the chips on the CM4?

We have specially applied **epoxy resin underfill adhesive** (which looks like black glue) around the chips on the CM4 to make sure the ICs are protected well. This also makes the whole CM4 more reliable.

## Q9: Why does buzzer, LEDs and buttons do not work after installing the reTerminal drivers?

reTerminal comes equipped with 2 versions for the I/O Expansion chip. Old version with MCP23008 and new version with PCA9554. If you [installed reTerminal drivers manually](https://wiki.seeedstudio.com/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os), please check the following.

First of all check whether which chip is installed on your reTerminal.

- Open terminal window
- i2cdetect -y 1

If you see 0x20 I2C address, the reTerminal is equipped with MCP23008 chip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/IO-extend/0x20.png" alt="pir" width={500} height="auto" /></p>

If you see 0x38 I2C address, the reTerminal is equipped with PCA9554 chip

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/IO-extend/0x38.jpg" alt="pir" width={500} height="auto" /></p>

For reTerminal with MCP23008 chip, you need to do the following.

- sudo nano /boot/config.txt
- Add "dtoverlay=reTerminal,addr=0x20,mcp23008" at the end of the file
- Ctrl + x > y > ENTER, to save and close the file
- sudo reboot

For the reTerminal with the latest PCA9554 chip, you don't have to do any changes.

## Q10: How can I install Ubuntu on reTerminal?

- **Step 1.** Flash [Ubuntu Server 21.10](https://ubuntu.com/download/raspberry-pi/thank-you?version=21.10&architecture=server-arm64+raspi) to reTerminal eMMC storage

**Note:** Refer to flashing instructions [here](https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc). After opening **Raspberry Pi Imager**, navigate to `CHOOSE OS > Use custom` and select the above image to flash

- **Step 2.** SSH into reTerminal and run the following commands one after the other. Make sure to use **ubuntu** as the username and **ubuntu** as the password

```sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script1.sh
wget https://files.seeedstudio.com/wiki/ReTerminal/ubuntu/script2.1.sh
chmod +x script1.sh script2.1.sh
sudo ./script1.sh
sudo reboot
sudo ./script2.1.sh
sudo reboot
```

- **Step 3.** Now, reTerminal will boot into Ubuntu Desktop, but in wrong orientation

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait.jpg" alt="pir" width={1000} height="auto" /></p>

- **Step 4.** Click the **power icon** on top right corner and click **Settings**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-settings-2.jpg" alt="pir" width={350} height="auto" /></p>

- **Step 5.** Select **Displays** and choose **Portrait Left** under **Orientation** and click **Apply**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-portrait-left-2.jpg" alt="pir" width={400} height="auto" /></p>

Finally you will see the Ubuntu Desktop in proper orientation!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/ubuntu-landscape.jpg" alt="pir" width={1000} height="auto" /></p>

## Q11: The screen orientation is incorrect after installing Raspberry Pi OS Bullseye

- **Step 1.** After flashing **Raspberry Pi OS Bullseye** to reTerminal eMMC, follow [this guide](https://wiki.seeedstudio.com/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os) to install the necessary drivers

- **Step 2.** Create a new file named **monitors.xml** under **.config** directory

```sh
sudo vi ~/.config/monitors.xml
```

- **Step 3.** Copy the following content into the above file to explicitly set the LCD display (DSI-1) and save the file by typing **:wq** after pressing **ESC**

```sh
<monitors version="2">
  <configuration>
    <logicalmonitor>
      <x>0</x>
      <y>0</y>
      <primary>yes</primary>
      <monitor>
        <monitorspec>
          <connector>DSI-1</connector>
          <vendor>unknown</vendor>
          <product>unknown</product>
          <serial>unknown</serial>
        </monitorspec>
        <mode>
          <width>720</width>
          <height>1280</height>
          <rate>60.000</rate>
        </mode>
      </monitor>
      <transform>
        <rotation>right</rotation>
      </transform>
    </logicalmonitor>
  </configuration>
</monitors>
```

- **Step 4.** Open **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **Step 5.** Add the following into the file

```sh
dtoverlay=reTerminal,tp_rotate=1
```

- **Step 6.** Reboot reTerminal

```sh
sudo reboot
```

Now the screen will be displayed in the correct orientation!

## Q12: Troubleshooting Touch Screen Inaccuracy

After configuring the screen to the correct orientation, the touch position may still be inaccurate, causing the cursor to move in unexpected directions when you touch a specific area on the display. To address this issue, it is essential to take the following steps.

- **Step 1** : Open the terminal and enter to xorg.conf.d folder by typing

```sh
cd /usr/share/X11/xorg.conf.d
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch2.png" alt="pir" width={1000} height="auto" /></p>

- **Step 2** : You will have access to the "40-libinput.conf" file, which can be edited by using the command.

```sh
sudo nano 40-libinput.conf
```

- **Step 3**: Find the InputClass section of **touchscreen** InputClass.

- **Step 4**: Add following phrase. You can refer the screenshot

```sh
Option "TransformationMatrix" "0 1 0 -1 0 1 0 0 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/lcd_touch1.png" alt="pir" width={1000} height="auto" /></p>

- **Step 5** : Save by Ctrl+O and press enter then Ctrl+X  after that Reboot

```sh
Sudo reboot 
```

After rebooting, you may notice that the touch position is now accurate. This means that when you touch a specific area on the display, the cursor moves in the intended direction.

## Q13: LEDs and Buzzer do not work after installing reTerminal drivers

This issue will not last long. We will completely solve this issue later from reTerminal drivers itself

- **Step 1.** Open **/boot/config.txt**

```sh
sudo vi /boot/config.txt
```

- **Step 2.** Comment the following line and save the file by typing **:wq** after pressing **ESC**

```sh
#dtoverlay=reTerminal-bridge
```

- **Step 3.** Reboot reTerminal

```sh
sudo reboot
```

Now the LEDs and Buzzer will work as normal.

## Q14: How to check if the Encryption Chip is ATECC608A-SSHDA-B or ATECC608A-TNGTLSS-G

| Released Date | Encryption Chip IC Version |
|---|---|
| Before 09/03/2021 | ATECC608A-SSHDA-B |
| Sept 2021 - January 2022 | ATECC608A-SSHDA-B or ATECC608A-TNGTLSS-G |
| After 02/01/2022 | ATECC608A-TNGTLSS-G |

 To check which Encryption chip by type  ```i2cdetect -y 3``` command in Terminal, If you see ```0x35``` in the output table then the reTerminal is equipped with ATECC608A-TNGTLSS-G chip, otherwise it is equipped with ATECC608A-SSHDA-B.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/FAQ/i2cdetect_03.png" alt="pir" width={500} height="auto" /></p>

## Resources

- **[PDF]** [reTerminal Schematics](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.pdf)

- **[ZIP]** [reTerminal Schematics](https://files.seeedstudio.com/wiki/ReTerminal/reTerminal-v1.3_SCH.zip)

- **[PDF]** [Raspberry Pi Compute Module 4 Datasheet](https://datasheets.raspberrypi.org/cm4/cm4-datasheet.pdf)

- **[Web Page]** [Raspberry Pi Official Documentation](https://www.raspberrypi.org/documentation/)

# Tech support

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
