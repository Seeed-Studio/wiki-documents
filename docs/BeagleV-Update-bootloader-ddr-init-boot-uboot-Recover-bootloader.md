---
name: Update bootloader, ddr init boot, u-boot and Recover bootloader
category: BeagleV™ - StarLight
bzurl: 
wikiurl: 
sku: 
---

# Update bootloader, ddr init boot, u-boot and Recover bootloader

<div class="tips" style="background-color: #ffefd9;height: 97px;">
            <div class="left-icon" style="background-color: #ffc983;padding-top: 10px;box-sizing: border-box;height: 100%;width: 38px;text-align: center;float: left;height: 97px;">
                <img src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Attention.svg" alt="attention icon" style="width: 26px;">
            </div>
            <div class="right-desc" style="margin-left: 15px;width:calc(95% - 38px);float: left;">
                <p style="font-weight: bold;margin-top: 10px;">Disclaimer</p>
               <p style="font-size: 14px;">Please note that this guide is for the use of the pre-production beta version of BeagleV™ - StarLight</p>
          </div>
    </div>

This wiki explains how to update the bootloader and ddr init boot on to the SPI flash of BeagleV™ - Starlight. On the other hand, it also explains how to recover the bootloader if you accidentally emptied the flash or if the flash is damaged on your BeagleV™ - StarLight.

**Note:** In this guide, **Ubuntu 20.04 LTS** is installed on the **host PC**

## File Preparation - Use Pre-Built Binary Packages

Please visit the following links to download **bootloader, ddr init boot and vic_second_boot** files. 

- [bootloader](https://github.com/starfive-tech/beagle_secondBoot/releases)
- [ddr init boot](https://github.com/starfive-tech/beagle_ddrlnit/releases)
- [vic_second_boot](https://files.seeedstudio.com/wiki/BeagleV/vic_second_boot.zip)

Prepare them as follows:

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/needed-for-reset.jpg" alt="pir" width="350 height="auto"></p>

## Compile bootloader and ddr init boot

Alternatively, if you are interested in compiling bootloader and ddr init boot from source code, you can follow this:

### Prepare Compilation Environment

- **Step 1.** Visit [this link](https://github.com/sifive/freedom-tools/releases/tag/v2020.12.0) and download the latest version of **riscv64-unknown-elf-toolchain-xxx** according to your operating system

- **Step 2.** Add the downloaded compiler to your PATH

```sh
export PATH=/home/user/riscv64-unknown-elf-toolchain-xxx/bin:$PATH
```

**Note:** The location should be the location of the downloaded compiler

### Compile bootloader

- **Step 1.** Clone the repo from GitHub

```sh
git clone https://github.com/starfive-tech/beagle_secondBoot
```

- **Step 2.** Go into **build** directory

```sh
cd beagle_secondBoot/build
```

- **Step 3.** Compile bootloader

```sh
make
```

You will see the following output if the compilation is successful

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki-3/secondboot-build.png" alt="pir" width="800" height="auto"></p>

### Compile ddr init boot

- **Step 1.** Clone the repo from GitHub

```sh
git clone https://github.com/starfive-tech/beagle_ddrlnit
```

- **Step 2.** Go into **build** directory

```sh
cd beagle_ddrlnit/build
```

- **Step 3.** Compile ddr init boot

```sh
make
```

You will see the following output if the compilation is successful

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki-3/ddrinit-build.png" alt="pir" width="800" height="auto"></p>

## Update the bootloader, ddr init boot and u-boot

### Hardware Connections

- **Step 1.** Connect one end of the USB Type-C cable to the USB Type-C port on the BeagleV™ - StarLight and connect the other end of the cable to the power adapter

- **Step 2.** Connect the jumper wires from the USB to Serial Converter to the 40-Pin GPIO header of the BeagleV™ - StarLight as follows

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/connection.jpg" alt="pir" width="1000" height="auto"></p>

!!!Note
        After testing, we have found out that USB to serial converters with CP2102 chip (3.3V I/O) work best with UART header on the 40-pin GPIO.

- **Step 3.** Connect power adapter to wall power socket

### Software Set Up

Before you update the bootloader, ddr init boot and uboot, you need to have a **serial communication software** on your computer in order to communicate with the BeagleV™ - StarLight. We will use a software called **Tera Term for windows** and another software called **minicom on Mac/Linux**. Follow the steps below according to your operating system

#### For Windows

- **Step 1.** Download **Tera Term** by visiting [this link](https://osdn.net/projects/ttssh2/releases/)

- **Step 2.** Install Tera Term on the PC 

- **Step 3.** Connect the USB To Serial Converter to the PC

- **Step 4.** Open **Device Manager** by typing **Device Manager** in the windows search box

- **Step 5.** Click on the drop-down arrow from **Ports (COM & LPT)** and find the name of the connected serial port (ex: **COM4**)

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/device_manager1.png" alt="pir" width="320" height="auto"></p>

- **Step 6.** Open **Tera Term** software and **Cancel** the **New connection window** at startup

- **Step 7.** Navigate to `Setup > Serial port...`

- **Step 8.** Configure the settings as follows:

    - Port: COM4 (choose your COM port)
    - Speed: 115200

- **Step 9.** Click on **New open**

- **Step 10.** After the **hardware connections** mentioned above, turn on the power from the wall power socket to power on the BeagleV™ - StarLight and you will see the startup information as follows

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/tera_1.png" alt="pir" width="650" height="auto"></p>

- **Step 11.** Press any key as soon as it starts up to enter the **upgrade menu**. In this menu, you can only update uboot

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/tera_2.jpg" alt="pir" width="800" height="auto"></p>

- **Step 12.** Type **root@s5t** and press **Enter** to enter the extended version of the upgrade menu. In this menu, you can update uboot, bootloader and ddr init boot

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/tera_3.1.png" alt="pir" width="1000" height="auto"></p>

- **Step 13.** Type "0" and press **Enter** to update the bootloader

- **Step 14.** Navigate to `File > Transfer > XMODEM > Send...` and choose the following file from the .zip file we downloaded before: `bootloader-BEAGLEV-210209.bin.out`

- **Step 15.** Repeat the **steps 13 and 14** to update the **ddr init boot** as well according to the following:

> <p style="font-size:16px">Type '1' - update ddr init boot `[Filename: ddrinit-2133-210302.bin.out]` <br>

!!!Note
        The methods to **compile and update uboot** are included in [this wiki](https://wiki.seeedstudio.com/BeagleV-Make-File-System-Compile-uboot-Kernal/#compile-u-boot)

#### For Mac/Linux

- **Step 1.** Open a **terminal window** on Mac/Linux

- **Step 2.** Type the following to update the **packages list**

```sh
sudo apt-get update
```

- **Step 3.** Type the following to install **minicom**

```sh
sudo apt-get install minicom
```

- **Step 4.** Connect the **USB To Serial Converter** to the **PC**

- **Step 5.** Type the following in the terminal to view the connected serial devices

```sh
dmesg | grep tty
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/minicom_1.png" alt="pir" width="800" height="auto"></p>

- **Step 6.** Navigate to minicom set up

```sh
sudo minicom -s
```

- **Step 7.** Select **Serial port setup**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/serial-port.png" alt="pir" width="300" height="auto"></p>

- **Step 8.** Press **F** to turn off **Hardware Flow Control** and press **Enter**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/hw_flow_control.png" alt="pir" width="800" height="auto"></p>

- **Step 9.** Select **Save setup as dfl** and press **Enter**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/dfl_save.png" alt="pir" width="300" height="auto"></p>

- **Step 10.** Select **Exit** to exit from minicom configuration window


- **Step 11.** Connect to the serial device by typing the following

```sh
minicom -D /dev/ttyACM0 -b 115200
```
**Note:** The baud rate is set to 115200

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/minicom_2.png" alt="pir" width="600" height="auto"></p>

- **Step 12.** After the hardware connections mentioned above, turn on the power from the wall power socket to power on the BeagleV™ - StarLight and you will see the startup information as follows

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/minicom_3.png" alt="pir" width="600" height="auto"></p>

- **Step 13.** Press any key as soon as it starts up to enter the **upgrade menu**. In this menu, you can only update uboot

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/minicom_4.png" alt="pir" width="1000" height="auto"></p>

- **Step 14.** Type **root@s5t** and press **Enter** to enter the extended version of the upgrade menu. In this menu, you can update uboot, bootloader and ddr init boot

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/minicom_5.1.jpg" alt="pir" width="1000" height="auto"></p>

- **Step 15.** Type "0" and press **Enter** to update the bootloader

- **Step 16.** Press **Ctrl+A** and then press **s** to enter **upload mode**

- **Step 17.** Select **xmodem** and press **Enter**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/minicom-xmodem-select.png" alt="pir" width="800" height="auto"></p>

- **Step 18.** Select **Goto** from the bottom tab menu and press **Enter**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/minicom-goto.png" alt="pir" width="750" height="auto"></p>

- **Step 19.** Enter the directory path and press **Enter**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/minicom-directory-path.png" alt="pir" width="750" height="auto"></p>

- **Step 20.** Select `bootloader-BEAGLEV-210209.bin.out` by navigating using **arrow keys** ,press **Space** and press **Enter**

If you see the following output, that means you have successfully transferred the `bootloader-BEAGLEV-210209.bin.out` file to BeagleV™ - Starlight.

- **Step 21** Repeat the **steps 13 - 18** to update the **ddr init boot** as well according to the following:

> <p style="font-size:16px">Type ‘1’ - update ddr init boot `[Filename: ddrinit-2133-210302.bin.out]` <br>

!!!Note
        The methods to **compile and update uboot** are included in [this wiki](https://wiki.seeedstudio.com/BeagleV-Make-File-System-Compile-uboot-Kernal/#compile-u-boot)

## Recover the bootloader

The bootloader is stored inside the SPI flash storage. There may be situations where you accidentally emptied the flash or if the flash is damaged on your BeagleV™ - StarLight. In these situations, it's better to reset the bootloader. Here we will load **vic_second_boot.bin** to on-chip SRAM, run it, and then flash bootloader, ddr init boot and uboot. Follow the steps below:

### Hardware Set Up

Connect the jumper wires from the USB to Serial Converter to the **DEBUG header** of the BeagleV™ - StarLight as follows

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/debug_connect_1.jpg" alt="pir" width="900" height="auto"></p>

!!!Note
        After testing, we have found out that USB to serial converters with CP2102 chip (3.3V I/O) work best with DEBUG header.

### Software Set Up

Before you recover the bootloader, you need to have a **serial communication software** on your computer in order to communicate with the BeagleV™ - StarLight. We will use a software called **Tera Term for windows** and another **Bootloader recovery and updater tool for Mac/Linux**. Follow the steps below according to your operating system

#### For Windows

- **Step 1.** Open **Tera Term** software and **Cancel** the **New connection window** at startup

- **Step 2.** Navigate to `Setup > Serial port...`

- **Step 3.** Configure the settings as follows:

    - Port: COM4 (choose your COM port)
    - Speed: 9600

- **Step 4.** Click on **New open**

- **Step 5.** Press on the **BOOT** button while turning on BeagleV™ - StarLight 

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/debug_on.jpg" alt="pir" width="600" height="auto"></p>

- **Step 6.** You will see the following output on **Tera Term**

> <p style="font-size:16px">(C) SiFive</p>

- **Step 7.** Type the following

> <p style="font-size:16px">load 0x18000000</p>

You will see an output like this 

> <p style="font-size:16px">ccccccccccccccc</p>

- **Step 8.** Navigate to `File > Transfer > XMODEM > Send...` and choose the following file from the .zip file we downloaded before: `vic_second_boot.bin`

You will see an output like this after the transfer is complete

> <p style="font-size:16px">Load file ok</p>

- **Step 9.** Type the following

> <p style="font-size:16px">do 0x18000000</p>

You will see an output like this 

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki_2/recover-bootloader.png" alt="pir" width="550" height="auto"></p>

- **Step 10.** Type "0" and press **Enter** to update the bootloader

- **Step 11.** Navigate to `File > Transfer > XMODEM > Send...` and choose the following file from the .zip file we downloaded before: `bootloader-BEAGLEV-210209.bin.out`

- **Step 12.** Repeat the **steps 10 and 11** to update the **ddr init boot** according to the following:

> <p style="font-size:16px">Type '1' - update ddr init boot `[Filename: ddrinit-2133-210302.bin.out]`</p>

#### For Mac/Linux

- **Step 1.** Clone the following GitHub repo which includes a **bootloader recovery and updater tool**

```sh
git clone https://github.com/kprasadvnsi/JH71xx-tools
```

- **Step 2.** Navigate to the cloned repo and build the tool

```sh
cd JH71xx-tools
gcc -o jh7100-recover jh7100-recover.c
```

- **Step 3.** Copy **vic_second_boot, bootloader and ddr init boot** to **JH71xx-tools** directory

**Note:** This step is not a must, but it makes it more convenient in the following steps when we point to the file locations

- **Step 4.** Type the following in the terminal to view the connected serial devices

```sh
dmesg | grep tty
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki-3/dmesg.png" alt="pir" width="750" height="auto"></p>

- **Step 5.** Type the following and it will wait for bootloader mode

```sh
./jh7100-recover -D /dev/ttyUSB1 \
-r vic_second_boot.bin \
-b bootloader-BEAGLEV-210209.bin.out \
-d ddrinit-2133-210302.bin.out 
```

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki-3/bootloader-mode-wait.png" alt="pir" width="800" height="auto"></p>

**Note:** You may change the serial port according to yours and also the file locations if you haven't moved them into the **JH71xx-tools** directory

- **Step 6.** Press on the **BOOT** button while turning on BeagleV™ - StarLight to enter bootloader mode

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/debug_on.jpg" alt="pir" width="600" height="auto"></p>

If you see the following output, you have sucessfully updated **bootloader and ddr init boot**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/BeagleV/wiki-3/bootloader-mode-success.png" alt="pir" width="700" height="auto"></p>

## Burn u-boot 

Now we need to burn the u-boot as well. Follow [this wiki](https://wiki.seeedstudio.com/BeagleV-Make-File-System-Compile-uboot-Kernal/#compile-u-boot) on how to compile and flash u-boot into BeagleV™ - StarLight. 