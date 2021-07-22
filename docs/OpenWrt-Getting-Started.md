---
name: OpenWrt Getting Started
category: Software
bzurl: 
wikiurl: 
sku: 
---

# Getting Started with OpenWrt on Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4 and ODYSSEY - X86J4125/ X86J4105

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/OpenWrt/openwrt-wiki-thumb.png" alt="pir" width="1000" height="auto"></p>

OpenWrt is an open-source Linux operating system which runs on embedded devices/ routers. It offers more features, performance and security than a traditional router. It has a filesystem that’s fully writable and includes a package management system. You can make use of these packages to suit your applications in various ways.

By using OpenWrt you can have various features such as:

- Increase overall network performance when multiple devices are connected
- Share files between devices via an external storage drive connected directly to the router
- Increase network security
- Run a BitTorrent client from the router
- Connect a printer directly to the router to create a networked printer
- Limit bandwidth usage of a particular device in the network
- Active queue management
- Real time network monitoring
- Create Dynamic DNS
- Set Up a VPN client or server

Now let's dive into using OpenWrt on Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4 and ODYSSEY - X86J4125/ X86J4105.

## Hardware Required

You need to prepare the following hardware before getting started with OpenWRT on Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4 and ODYSSEY - X86J4125/ X86J4105

- [Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html)
- [Power adapter (5V/3A) with USB Type-C cable](https://www.seeedstudio.com/Wall-Adapter-Power-Supply-5VDC-3A-Type-C-p-4103.html)
- [ODYSSEY - X86J4125/ X86J4105 with the included power adapter](https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html)
- Ethernet cable

## Software Set Up

### Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4

First we will explain how to install and set up OpenWrt on Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4

#### Flash OpenWrt Image

Now we need to flash OpenWrt image on to the eMMC storage of the board so that it can run on the Raspberry Pi Compute Module 4. Once the necessary drivers are installed, you just have to connect the USB Type-C port of the CM4 in to your PC, and it will show as an external drive. Follow the steps below according to your operating system.

##### For Windows 

- **Step 1.** Download the **latest OpenWrt Image** compiled by Seeed for this board from [here]()

- **Step 2.** Download and run [this installer](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) to install the necessary drivers and the boot tool

- **Step 3.** Connect a jumper wire between **Boot** and **GND** pins as follows to enable the programming mode

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/OpenWrt/connection.png" alt="pir" width="600" height="auto"></p>

- **Step 4.** Connect Carrier Board to the PC via USB Type-C cable 

Windows will now find the hardware and install the necessary drivers

- **Step 5.** Search for **rpiboot** tool that we installed before and open it

- **Step 6.** Open **file explorer** and you will see the eMMC of the Computer Module 4 shown as a **USB mass storage device**

- **Step 7.** Download **balenaEtcher** software by visiting [this link](https://www.balena.io/etcher) according to your operating system

- **Step 8.** Run **balenaEtcher** as **administrator**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"></p>

- **Step 9.** Click **Flash from file** and point to the OpenWrt image file that you downloaded before

- **Step 10.** Click **Select target** and select the connected eMMC drive

- **Step 11.** Finally, click **Flash!**

<p style="text-align:center;"><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"></p>

Please wait a few minutes until the flashing process is complete.

##### For Mac/Linux

We will use Git to obtain the **rpiboot** source code, so make sure Git is installed

- **Step 1.** Open a **Terminal** window and type the following to update the **packages list**

```sh
sudo apt update
```

- **Step 2.** Install **Git** by the following command 

```sh 
sudo apt install git
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

- **Step 5.** Enter the following to install **libusb**

```sh 
sudo apt install libusb-1.0-0-dev
```

- **Step 6.** Build and install the usbboot tool

```sh 
make
```

- **Step 7.** Run the usbboot tool and it will wait for a connection

```sh 
sudo ./rpiboot
```
- **Step 8.** Connect a jumper wire between **Boot** and **GND** pins as follows to enable the programming mode

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/OpenWrt/connection.png" alt="pir" width="600" height="auto"></p>

- **Step 9.** Connect Carrier Board to the PC via USB Type-C cable 

- **Step 10.** Download **balenaEtcher** software by visiting [this link](https://www.balena.io/etcher) according to your operating system

- **Step 11.** Run **balenaEtcher** as **administrator**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"></p>

- **Step 12.** Click **Flash from file** and point to the OpenWrt image file that you downloaded before

- **Step 13.** Click **Select target** and select the connected eMMC drive

- **Step 14.** Finally, click **Flash!**

<p style="text-align:center;"><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"></p>

Please wait a few minutes until the flashing process is complete.


### ODYSSEY - X86J4125/ X86J4105

Next we will explain how to install and set up OpenWrt on ODYSSEY - X86J4125/ X86J4105

#### Flash OpenWrt Image

Now we need to install OpenWrt on to the eMMC/ HDD/ SSD of the ODYSSEY - X86J4125/ X86J410 so that it can run on the board. To do this, we first need to create a bootable USB with the OpenWrt image. Follow the steps below

- **Step 1.** Insert a USB drive to the PC

- **Step 2.** Download **balenaEtcher** software by visiting [this link](https://www.balena.io/etcher) according to your operating system

- **Step 3.** Run **balenaEtcher** as **administrator**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"></p>

- **Step 4.** Click **Flash from file** and point to the OpenWrt image file that you downloaded before

- **Step 5.** Click **Select target** and select the connected USB drive

- **Step 6.** Finally, click **Flash!**

<p style="text-align:center;"><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"></p>

Please wait a few minutes until the flashing process is complete.

#### Install OpenWrt

Now that we have created a bootable USB drive, let's move on to installing OpenWrt to ODYSSEY - X86J4125/ X86J4105

- **Step 1.** Insert the bootable USB drive to the ODYSSEY board

- **Step 2.** Turn on the board and keep pressing **F7** to enter the boot manager screen

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg" alt="pir" width="500" height="auto"></p>

- **Step 3.** Select the bootable USB and press ENTER

(continue installation..........finish after the image is ready)


## Dual Gigabit Ethernet Ports Connection

Once OpenWrt is finished flashing onto Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4 and ODYSSEY - X86J4125/ X86J4105, you can connect Ethernet cables to the 2 boards as follows:

### Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/OpenWrt/cm4-ports-2.png" alt="pir" width="600" height="auto"></p>

### ODYSSEY - X86J4125/ X86J4105

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/OpenWrt/odyssey-ports-2.png" alt="pir" width="700" height="auto"></p>

The OpenWrt image has already included the necessary network configurations for the dual Gigabit ports to work out-of-the-box, so that you don't have to configure them by yourself. However, here is an explanation of how the 2 ports are configured. 

One port is configured as a **LAN interface** and the other as a **WAN interface**. The WAN interface is the one which can be connected to the internet and it is configured as a **DHCP client**. On the other hand, the LAN interface is the one which can be connected to the client devices and it is configured as a **DHCP server**. 

Here the LAN interface is configured so that it has a static IP address of **192.168.2.1**. However, if you connect this OpenWrt router to another router with default gateway IP of 192.168.2.1, you might want to change the IP address on the LAN interface or otherwise OpenWrt will have IP conflict. Please follow the **FAQ** below to learn more!

## Run OpenWrt

Now that we have finished setting up the OpenWrt software and the dual Gigabit Ethernet ports, we will move on to running OpenWrt on Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4 and ODYSSEY - X86J4125/ X86J4105. This section will not be divided according to the 2 boards because both will have the same OpenWrt functionality along with the same web-interface.

Once the ethernet cables are connected as before and the OpenWrt image is flashed, proceed to the steps below 

- **Step 1.** Power on the board

- **Step 2.** Open a web browser and type **192.168.2.1**

You will see the OpenWrt Luci web-interface here. The OpenWrt image compiled by Seeed is included with many packages out-of-the-box. So you can use these package to realize many applications! 

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/OpenWrt/luci.png" alt="pir" width="1000" height="auto"></p>

## Network Speed Test

Finally we will move on to testing the network speeds on the Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4 and ODYSSEY - X86J4125/ X86J4105 with OpenWrt installed.

We will first use Dual Gigabit Ethernet Carrier Board as a server and ODYSSEY - X86J4125/ X86J4105 as a client for the network test

- **Step 1.** Connect the boards as follows

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/OpenWrt/speed-cm4-server.png" alt="pir" width="1000" height="auto"></p>

- **Step 2.** Open a terminal window and log in to both the boards via SSH

**Dual Gigabit Ethernet Carrier Board** 

```sh
root@192.168.2.1
```

**ODYSSEY - X86J4125/ X86J4105** 

```sh
root@192.168.3.1
```

**Note:** Make sure both devices have different IP addresses on the LAN interface

- **Step 3.** Install **iperf3** network performance test tool on both devices

```sh
opkg update
opkg install iperf3
```

- **Step 4.** On the terminal window of Dual Gigabit Ethernet Carrier Board, type the following to start iperf3 as a server

```sh
iperf3 -s
```

- **Step 5.** On the terminal window of ODYSSEY - X86J4125/ X86J4105, type the following to start iperf3 as a client and connect to the server created before

```sh
iperf3 -c 192.168.2.1
```

**Note:** Here the IP address of the connected server is written

Now you will see the network speed test results as follows

(image - Finish after the image is ready)

**Note:** Here you can see the speed is close to 1Gbps

We will now use ODYSSEY - X86J4125/ X86J4105 as a server and Dual Gigabit Ethernet Carrier Board as a client for the network test

- **Step 1.** Connect the boards as follows

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/OpenWrt/speed-odyssey-server.png" alt="pir" width="1000" height="auto"></p>

- **Step 2.** On the terminal window of ODYSSEY - X86J4125/ X86J4105, type the following to start iperf3 as a server

```sh
iperf3 -s
```

- **Step 3.** On the terminal window of Dual Gigabit 
Ethernet Carrier Board, type the following to start iperf3 as a client and connect to the server created before

```sh
iperf3 -c 192.168.2.1
```

**Note:** Here the IP address of the connected server is written

Now you will see the network speed test results as follows

(image - Finish after the image is ready)

**Note:** Here you can see the speed is close to 1Gbps

## FAQ

### Q1: What if I connect the OpenWrt router to my exisiting router which has a default gateway IP of 192.168.2.1?

Seeed OpenWrt image comes preconfigured with the necessary network settings. You might only need to change one network setting for the scenario which involves the Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4 or ODYSSEY - X86J4125/ X86J4105 connecting to your existing router, and the router has the default gateway IP set to 192.168.2.1 which is the same as the default gateway IP for OpenWrt. In this scenario, you need to change the default IP of LAN interface on OpenWrt as follows:

- **Step 1.** Open a terminal window and type the following to log in to the OpenWrt router via ssh

```sh
ssh root@192.168.2.1
```

- **Step 2.** Open the following file

```sh
vi /etc/config/network
```

- **Step 3.** Change the static IP address on the LAN interface as follows

```sh
config interface 'lan'
        option type 'bridge'
        option ifname 'eth0'
        option proto 'static'
        option ipaddr '192.168.3.1'
        option netmask '255.255.255.0'
        option ip6assign '60'
```

**Note:** Here the static IP is changhed to **192.168.3.1**. However, you can type any IP address of your choice

- **Step 4.** Reboot the router

```sh
reboot
```

### Q2: What if I have the Dual Gigabit Ethernet Carrier Board non-CM4 version and attach a CM4 without emmC?

If you want to use a Compute Module 4 without eMMC on the Dual Gigabit Ethernet Carrier Board, then you need to flash OpenWrt on to a micro-SD card and insert it into the board. Follow the steps below according to your operating system.

- **Step 1.** Insert a micro-SD card to the computer using a **micro-SD card reader** connected to the computer, or by using a **built-in card reader** on a laptop

- **Step 2.** Download **balenaEtcher** software by visiting [this link](https://www.balena.io/etcher) according to your operating system

- **Step 3.** Run **balenaEtcher** as **administrator**

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/OpenWrt/balena-home.jpg" alt="pir" width="650" height="auto"></p>

- **Step 4.** Click **Flash from file** and point to the OpenWrt image file that you downloaded before

- **Step 5.** Click **Select target** and select the connected micro-SD card

- **Step 6.** Finally, click **Flash!**

<p style="text-align:center;"><img src="http://files.seeedstudio.com/wiki/OpenWrt/balena-finish.jpg" alt="pir" width="650" height="auto"></p>

Please wait a few minutes until the flashing process is complete.

- **Step 7.** Eject the micro-SD card from computer and insert it into the Dual Gigabit Ethernet Carrier Board

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/OpenWrt/micro-sd-install.png" alt="pir" width="400" height="auto"></p>

## Resources

- **[Web Page]** [OpenWrt Offficial Documentation](https://openwrt.org)

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>