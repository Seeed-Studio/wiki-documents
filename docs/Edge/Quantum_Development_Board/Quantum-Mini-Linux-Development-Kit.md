---
description: Getting Started with balenaOS on ODYSSEY-X86
title: BalenaOS Installation
keywords:
- Edge Quantum_Development_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Quantum-Mini-Linux-Development-Kit
last_update:
  date: 2/1/2023
  author: jianjing Huang
---

# Quantum Mini Linux Development Kit

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/Quantum-Mini-Linux-Dev-Kit.png"/></div>

**Quantum Mini Linux Dev. Kit** is possibly the smallest Linux development board on the market, a highly integrated kit with quad-core CPU that can run Linux at only **40mm x 35mm**, which also includes network connectivity. It is suitable for scenarios such as as a personal server, intelligent voice assistant, and for robotic development.  

The SoM is called **Quark-N, based on Allwinner H3, Quad-core Cortex-A7, and ARM Mali400 MP2 GPU**. The 6-layer high-density gold PCB design integrates a complete ARM-Linux system (CPU, DDR, eMMC) in a 2x3cm space. Also, most of the GPIO is led out by the board through the M.2 Key-A golden finger interface to minimize the bottom board design difficulty. You can easily design your own base plate with two-layer boards to realize your interesting ideas.

<div align="center"><img src="https://files.seeedstudio.com/products/114992462/connection.png"/></div>

The carrier board is called **Atom-N, and Quark-N is connected to Atom-N through the M.2 interface**. Atom-N leads out a row of golden finger pins to realize I/O expansion, **expand SPI, I2C, UART, GPIO, and other interfaces to facilitate the completion of your own design**. Also, it is equipped with **a microphone, MPU6050 motion sensor (accelerometer and gyroscope), onboard 4 buttons (GPIO-KEY, Uboot, Recovery, Reset), IPS display, Wi-Fi/Bluetooth connectivity which greatly expands the possibilities with this product**.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Quantum-Mini-Linux-Development-Kit-p-4749.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Features

- Ultra-small (**31mmx22mm**) and highly integrated Quad-core Cortex-A7 Linux SoM (System on Module).

- Carrier board (**40mmx35mm**) with rich peripherals and interfaces: Microphone, Gyroscope, Accelerometer,4 x Buttons (GPIO-KEY, Uboot, Recovery, Reset) and a TFT display.

- Integrates a complete ARM-Linux system for advanced development.

- **Wireless Connectivity (Wi-Fi + Bluetooth).**

- Ability to design your own baseboard due to the M.2 interface.

- Wide range of applications such as a personal server, intelligent voice assistant, and robotic development.

- Pre-installed **xrdp Remote Desktop Server**, easy monitor control without the need of HDMI cable.

## Specifications

<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg"><thead><tr><th style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'normal', overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>Specification</th><th style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'normal', overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>Details</span></th></tr></thead><tbody><tr><td style={{backgroundColor: '#c0c0c0', borderColor: 'black', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}} colSpan={2}><span style={{fontWeight: 700, fontStyle: 'normal'}}>Quark-N SoM</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>CPU</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>Allwinner H3, Quad-core Cortex-A7 @ 1GHz</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>GPU</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 'inherit', fontStyle: 'inherit'}}>ARM Mali400 MP2 GPU</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>Memory</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>512MB LPDDR3 RAM</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>Storage</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>16GB eMMC</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>Interface</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>Ethernet, SPI, I2C, UART, Reusable GPIO, MIC, LINEOUT</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>GPIO</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 'inherit', fontStyle: 'inherit'}}>2.0mm pitch 26 pin-header, USB-Serial, I2C, UART, SPI, I2S, GPIO</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>PCB</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>6-layer high-density immersion gold design</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>Working Temperature</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>0-80°C</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>Size</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>31mmx22mm</span></td></tr><tr><td style={{backgroundColor: '#c0c0c0', borderColor: 'black', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}} colSpan={2}><span style={{fontWeight: 'bold'}}>Atom-N Carrier Board</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>Slot</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>m.2 interface for Quark-N</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>USB</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>USB 2.0×2 USB Type-C×1</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}>Wireless Connectivity</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>RTL8723BU:</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>Wi-Fi: IEEE 802.11 b/g/n @2.4GHz</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>Bluetooth: BT V2.1/ BT V3.0/ BT V4.0</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>Onboard Peripherals</span></td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>1 x Microphone</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>1 x MPU6050 motion sensor (gyroscope + accelerometer)</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>4 x Buttons (GPIO-KEY, Uboot, Recovery, Reset)</span><br /><br /><span style={{fontWeight: 400, fontStyle: 'normal'}}>1 x TFT display</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>External Storage</span></td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>Micro-SD card slot</span></td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>Size</span></td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'top', wordBreak: 'normal'}}><span style={{fontWeight: 400, fontStyle: 'normal'}}>40mm*35mm</span></td></tr></tbody></table>

## Hardware Overview

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/hardwareoverview1.png"/></div>

:::tip
Quantum has now been updated with a new version, which adjusts the antenna type for better wireless performance compared to the old one. In addition to this it also optimizes the PCB layout by moving the fan solder joints to the top. The Uboot and Recovery buttons have also been removed.
:::

## Getting Started

### Hardware Requirements

- A Working Computer

- [A MicroSD Card](https://www.seeedstudio.com/micro-SD-Card-with-Card-Reader-32GB-Class-10-p-4082.html) (>= 16GB is recommended)

- Keyboard and Mouse

### Download the Latest System Image

- Download the **[Latest System Image](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/quark-n-21-1-11.zip)** here.

> **Latest Build**:  2021-1-11
>
> **sha256**: 8f466adf56468b05d622eba27eb7b1a11ef6d4b943272984730a73ddff7cf59a  

:::note
The system image of Quantum Mini Linux dev board is modified from Nano Pi's image.
:::

### Step.1 - Prepare your Bootable MicroSD Card

Format the MicroSD Card. If you are a Windows user, you can format the USB drive by right-clicking the USB Drive and select Format.

**Note:** Choose `FAT32` for the File System.

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png"/></div>

### Step.2 - Download Flash Burner

Download the Open Source Flash burner [balenaEtcher](https://www.balena.io/etcher/). Download the version according to your operating system(Windows/macOS/Linux).

<div align="center"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg"/></div>

### Step 3 - Writing the OS Image into USB

Select the downloaded System Image, select the formatted MicroSD card and Flash! Now, the bootable MicroSD card is all set to go.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/flash-img.png"/></div>

### Booting into the System

Now, plug the MicroSD card to the MicroSD Slot of the Atom-N and **plug in the USB Type-C for power (USB Serial direction)**.

And now you can open the USB serial using any type of Serial software from your PC! You should be able system status LED starts to blink on the **Quark-N**(SoM) and messages are printed to the Serial.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/bootup-n.png"/></div>

### System Default Users and Password

- **Normal User**:

```sh
users: pi
password: quark
```

- **Root User**:

```sh
users: pi
password: quark
```

## System Configurations

You may use `npi-config` to configure the settings for the system image such as users, system languages, time zone, ssh and etc.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/npi-config.png"/></div>

:::note
The settings by default is configured, if you don't know what you're configuring please leave it as default.
:::

## Wi-Fi

Here we use NetworkManager to manager network, please follow though to connect to Wi-Fi:

- Switch to root user:

```sh
su root
```

- Turn on the Wi-Fi:

```sh
nmcli r wifi on
```

- Scan the nearby Wi-Fi:

```sh
nmcli dev wifi
```

- Connect to a specifc Wi-Fi:

```sh
nmcli dev wifi connect "SSID" password "PASSWORD" ifname wlan0
```

where change `SSID` and `PASSWORD` is your Wi-Fi credentials. Once connected, it will auto-connect the next time.

For more reference about NetworkManager, please read [here](http://wiki.friendlyarm.com/wiki/index.php/Use_NetworkManager_to_configure_network_settings).

### Software Updates (Optional)

Once connected to network, it is best practice to update the software:

```sh
sudo apt-get update
```

## Remote Desktop Connection

As mentioned earlier, the system image has the [`xrdp`](https://github.com/neutrinolabs/xrdp) server running at default so that you can establish remote desktop connection using the **[Microsoft Remote Desktop](https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps?activetab=pivot:overviewtab)**(Supports Windows/macOS) within the same network.

- Use `ifconfig` to find out the ip address of the dev board.

- **From the same network, type in the the dev board's ip address and log in**. Now you have remote desktop control over the desktop!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/remote-desk.png"/></div>

## Bluetooth

The system image has built-in Bluetooth driver and you may follow the following steps to get Bluetooth started:

```sh
bluetoothctl
```

Once within the `bluetoothctl` interface. run scan on to list all nearby bluetooth device:

```sh
scan on
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/ble-scan.png"/></div>

Copy the device MAC address, then connect to the device with the following command:

```sh
pair A4:xx:xx:xx:xx:30
trust A4:xx:xx:xx:xx:30
connect A4:xx:xx:xx:xx:30
```

Now your dev board is connected to your bluetooth device. Type `quit` back to the terminal. Play music on dev board, then you will hear music on your bluetooth speaker device!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/ble-connect.png"/></div>

## LCD

The driver for the LCD screen uses **SPI** to communicate with the CPU and its driver is builtin with the system image hence the reason you should be able to see the system's message log when it booted up:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/LCD.png"/></div>

- If you connect USB keyboard and mouse to the dev board, this becomes the smallest build of a PC!

- There is a simple pygame example that demonstrate the LCD usage from Python.

- Navigate to the project location:

```sh
cd WorkSpace/PyGame
```

- Run the example:

```sh
sudo python hello_world.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/pygame.png"/></div>

<!-- ## IMU

TMP -->

## Microphone

There is also a built-in microphone on the Atom-N (carrier board) which makes it Machine Learning capable! For simple testing, it is easy to use the **Audacity** software which is pre-installed with the image.

- Log in the dev board using remote desktop.

- Open the **Audacity** software.

- Starts recording and talk to the microphone, you should see the sound waves!

:::note
    You may also use `arecord -l` in terminal to find out about the microphone.
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/mic.png"/></div>

For further development based on the microphone, please check the path `WorkSpace/WuKong` for the examples using **[WuKong Robot](https://github.com/wzpan/wukong-robot)** and [**snowboy**](https://github.com/Kitt-AI/snowboy).

## GPIO

For GPIO access, this is very convenient as linux based system and can be easily controlled using Python.

- Navigate to the project location:

```sh
cd WorkSpace/GPIO
```

- Run the GPIO example:

```sh
sudo python gpio_key_led.py
```

Now you can press the user button and you should be able to see the output in serial and the LED on the Quark-N (SoM) dims!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/gpio.png"/></div>

:::note
    The LED is on Quark-N(SoM) and did not lead out on the Atom-N(Carrier Board).
:::

## OpenCV

The system image has also implemented **OpenCV** into it and prepared a face detect demo using USB camera.

- You will need a USB camera. Connect the USB camera to the USB port A of the dev board.

- Navigate to the project location:

```sh
cd WorkSpace/OpenCV
```

- Run the demo:

```sh
python FaceDetectOnTft.py
```

You should see the video stream on the LCD screen of the dev board!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/facedetect.png"/></div>

## Others

There are also more example usages of the dev board in the `WorkSpace` such as **TensorFlow Lite**, **[WuKong Robot](https://github.com/wzpan/wukong-robot)**, [**snowboy**](https://github.com/Kitt-AI/snowboy) and etc. Please navigate to the path and find out more!

## FAQ

### Q1: How can I install a fan to cool down the board

We are planning to release a fan and a fan holder for this product in the near future. However, for now we have released [fan holder DXF files](#files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/cooling-case-202006-fan.zip) for your reference. You can install a 20x20x6mm fan to this fan holder.
<!-- 上述zip文件缺失 -->

The fan holder can be installed as follows:

 <p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/connection-diagram.jpg" alt="pir" width="500" height="auto"/></p>

## Resources

- **[ZIP]** [**Atom Shield N AD**](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/Atom-Shield-N-AD-files.zip)
- **[ZIP]** [**Heat sink and Stand 3D file**](https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/3D%20Files.zip)
- **[ZIP]** [**Fan holder**](#files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/cooling-case-202006-fan.zip)
<!-- 上述zip链接有误 -->

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
