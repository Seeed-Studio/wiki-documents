---
description: ODYSSEY – STM32MP157C
title: ODYSSEY – STM32MP157C
tags:
  - ODYSSEY
  - Getting started
keywords:
  - ODYSSEY
  - Getting started
image: https://avatars.githubusercontent.com/u/10758833
slug: /ODYSSEY-STM32MP157C
last_update:
  date: 01/03/2023
  author: w0x7ce

---

# ODYSSEY – STM32MP157C

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19.png)

The ODYSSEY – STM32MP157C is a single board computer that based on STM32MP157C, a dual-core Arm-Cortex-A7 core processor operating at 650Mhz. The processor also integrates an Arm Cortex-M4 coprocessor, which makes it suitable for real-time task. The ODYSSEY – STM32MP157C is created in a form of SoM(system on module) plus a Carrier board. The SoM has consisted of the MPU, PMIC, RAM and the carrier board is in Raspberry Pi form factor. The carries board includes all the necessary peripherals including Gigabytes Ethernet, WiFi/BLE, DC Power，USB Hosts, USB-C, MIPI-DSI, DVP for camera, audio, etc. With this board, customers can fast evaluate the SoM and deploy the SoM on their own carrier board easily and quickly.

[![Get one now](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)


## Features

- Dual-core Arm-Cortex-A7 core processor with Cortex-M4 integrated
- SoM(system on module) includes MPU, PMIC, RAM. 
- Raspberry Pi 40-Pin Compatible Carrier Board.
- Compact size and powerful
- open source hardware/SDK/API/BSP/OS

## Specification

<div>
  |Item|Values|
  |----|------|
  |Peripheral Interface| 2 x USB Host<br />1 x gigabit Ethernet interface<br />1 x 3.5mm audio interface<br />1 x MIPI DSI display interface<br />1 x DVP camera interface<br />2 x Grove (GPIO &amp; I2C)<br />1 x SD card interface (on the back of the board)|
  |WiFi/Bluetooth|WiFi 802.11 b/g/n 2.4GHz<br />Bluetooth 4.1|
  |On-board LED|1 x reset LED<br />3 x user-defined LED<br />1 x power LED|
  |Power|1 x DC interface (12V/2A power input is recommended)<br />1 x USB Type - C|
  |Button|1 x reset button<br />1 x user button<br />1 x dial code key|
  |dimension|56mm x 85mm|
  |Operating temperature | 0 ~ 75 ℃ |
</div>


## Application

- Industrial (CAN-Ethernet gateways etc )
- White goods(refrigerators,microwaves etc )
- Medical(data loggers etc)
- High-end wearables(VR device etc)
- Smart Home Devices

## Hardware Overview

<iframe src="https://3dwarehouse.sketchup.com/embed/6eecf961-5dd1-4baf-94e4-72f130c5542d" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} width={580} height={326} allowFullScreen />


ODYSSEY – STM32MP157C consists of two parts: Carrier board and Seeed SoM - STM32MP157C.

Carrier board hardware details follow:

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/front.png)

 ![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/back.png)

- **1.Carrier board :** Install the Seeed SoM-STM32MP157C area, if the user wants to remove the core board, slowly tilt the core board up and then remove, never remove by hand.

- **2.DC Power Input Port :** 12V~24V/2A (12V/2A power input is recommended)(5.5x2.1mm center-positive barrel).

- **3.ETH Interface :** Network cable interface can be connected to gigabit level network.

- **4.USB Host:** Two USB Host ports.

- **5.USB Device:** USB 2.0 Type C. If Type C is used as board power input, a 5V/3A power adapter should be used.

- **6.Digital Grove Interface:** Connect the Grove interface to the digital pin. 

- **7.IIC Grove Interface:** Connect the Grove interface to the IIC pin.

- **8.American Standard 3.5mm:**  Audio interface.

- **9.MIPI DSI Interface:** Connect to a display with a MIPI DSI interface(FPC 20Pin 1.0mm).

- **10.40 PIN GPIO Interface:** Compatible with Raspberry Pi's 40-PIN.

- **11.AP6236:** 2.4G WiFi & BT 4.2 control chip.

- **12.Slide Switch:** Can be used to select SD card or eMMC to start.

- **13.Debug UART:** The system default debugging serial port can enter this serial port to access the system, we'll talk more about how to do that later.

- **14.JST 1.0mm:** 3VRTC battery interface.

- **15.RST Key:** system reset key.

- **16.PWR Button:** Long press about 8S to shut down, short press to boot.

- **17.User Button:** User programmable buttons.

- **18.PWR LED:** Development board power led.

- **19.User LED:** User programmable led.

- **20.ACA-5036-A2-CC-S:** Onboard 2.4G ceramic antenna.

- **21.The IPEX 1 generation:** External 2.4 G external antenna seat(When using an external antenna, need remove R49, R51 0Ω welding)

- **22. SD card slot:** Is the area where a micro-sd card with the system is inserted.

- **23.DVP camera interface :** Connect to camera with DVP interface (FPC 20Pin 1.0mm).

- **24.KSZ9031:** 1000M Network cable drive network card.

- **25.STMPS2252MTR:** Power switch chip.

- **26.MP9943:** Buck DCDC Power chip.

- **27.WM8960:** Audio codec chip.

- **28.MP2161:** Buck DCDC Power chip.

### Pin Function

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/GPIO.png)

ODYSSEY - STM32MP157C's 40-pin is fully compatible with Raspberry Pi's 40PIN, including GPIO, IIC, UART, SPI, IIS and PWM pins.

## Introduction To Software

### Preparatory Work

**Materials Required**

- ODYSSEY – STM32MP157C
- Wi-Fi network
- 4GB (or more memory) SD card and SD card reader
- PC or Mac
- [USB To Uart Adapter](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) (optional)
- 12V/2A DC interface adapter for power supply (optional)
- A USB type-c cable

<div className="admonition warning">
  <p className="admonition-title">Caution</p>
  Please plug the USB cable gently, otherwise you may damage the interface.Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click <a href="https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html"><b>here</b></a> to buy
</div>

**Mirror Installation**

Like Raspberry Pi, you need to install the ODYSSEY – STM32MP157C image from your SD card to get it up and running. We offer two ways to start ODYSSEY – STM32MP157C. You can boot from an SD card or from eMMC.

**A. Boot from SD card**

- **Step 1.** Select the [firmware](https://files.seeedstudio.com/linux/ODYSSEY%E2%80%93STM32MP157C/stm32mp1-debian-buster-console-armhf-latest-2gb.img.xz) you want to download:

- **Step 2.** Connect an SD card to a PC or MAC with an SD card reader, an SD card with more than 4G memory is required.

- **Step 3.** <font face>Click here to download <a href="https://etcher.io/">Etcher</a>, then use the Etcher to write the  ```*.img.xz``` file directly to the SD card. Or extract the ```*.img.xz``` file into a ```*.img``` file, and then burn it to an SD card using another mirror write tool. <br /><br />Click the plus icon to add the newly downloaded image file and the software will automatically select the SD card you inserted. Then click Flash! writing. It takes about 10 minutes to finish.</font>

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/stm32_flash_sd.png)


- **Step 4.** After writing the image to the SD card, insert the SD card into ODYSSEY – STM32MP157C. Use USB type-c port to power the Carrier board. Do not take out the SD card during writing. ODYSSEY – STM32MP157C will boot from the SD card, you can see the PWR and USER LED lighting on SOM. Now, go to the next section: the serial console.

<div class="admonition note" >
<p class="admonition-title">Note</p>
they mean to start up failed if the USER LED does not blink.Please check the boot switch whether it is SD_CARD.
</div>

- **Step 5.** After writing the image to the SD card, insert the SD card into ODYSSEY – STM32MP157C. Use USB type-c port to power the Carrier board. Do not take out the SD card during writing. ODYSSEY – STM32MP157C will boot from the SD card, you can see the PWR and USER LED lighting on SOM. Now, go to the next section: the serial console.

**B. Boot from eMMC**

<div class="admonition note" >
<p class="admonition-title">Note</p>
If you want to Boot from eMMC, you have to access next section: the serial console first.
</div>

- **Step 1.** the process is the same as **A. Boot from SD card** if you first start up the ODYSSEY – STM32MP157C.

- **Step 2.** Edit /boot/uEnv.txt to start eMMC boot then reboot.

```bash
sudo sh -c "echo cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3-stm32mp1.sh >> /boot/uEnv.txt"
sudo reboot
```

- **Step 3.** Wait for the USER LED bright continuously.that indicate the eMMC boot successfully if the USER LED bright continuously.

- **Step 4.** Power off and unplug the SD card.

- **Step 5.** Set the slide switch to EMMC and restart.

**Serial Console**

Now your ODYSSEY – STM32MP157C is up, you may want to access your Linux system through the console, then set up Network, and so on. A serial port access method is provided for Linux access:

- UART port - Used to debug low-level problems.(recommend)


**Connect via UART port**

In this section, we'll walk you through the use of the USB to TTL adapter, which connects to the ODYSSEY – STM32MP157C's Uart port(Located at the upper right of ODYSSEY – STM32MP157C), to establish a connection between your computer and ODYSSEY -STM32MP157C.

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/uart_connection.png)

- **Step 1.** Connect Uart port To PC/Mac using USB To TTL Adapter.If you don't have USB To TTL Adapter, click [HERE](https://www.seeedstudio.com/catalogsearch/result/?q=UART) to buy.（RX->TX,TX->RX）

- **Step 2.** Using the following serial debugging tools, the baud rate is 115200:
    - Windows : Use [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), select ```Serial``` protocol, fill in the COM port corresponding to ODYSSEY -STM32MP157C,```115200``` baud rate, 8 bit, no parity bits, a stop bit 1, no flow control.
    - Linux : Depending on the USB To TTL Adapter, should be ```screen /dev/ttyACM0(,1, and so on) 115200``` or ```screen /dev/ttyUSB0(,1, and so on) 115200```.
    - Mac : Depending on the USB To TTL Adapter, should be ```screen /dev/cu.usbserial1412(,1422, and so on) 115200``` or ```screen /dev/cu.usbmodem1412(,1422, and so on) 115200```.

- **Step 3.** The default user name is ```debian```, the password is ```temppwd```

- **Step 4.** If you don't have USB to TTL Adapter, you can also use Arduino. If you use Arduino, connect one end of the jumper to the Arduino's RESET pin and the other end to the Arduino's GND pin. This will bypass your Arduino's ATMEGA MCU and turn your Arduino into a USB to TTL adapter. Please refer [HERE](https://www.youtube.com/watch?v=qqSLwK1DP8Q) Video tutorial. Now connect the GND pin of Arduino to the GND pin of ODYSSEY -STM32MP157C's Uart port. Connect Rx pins on Arduino to Rx pins on ODYSSEY -STM32MP157C's Uart port. Connect the Tx pin on the Arduino to the Tx pin on the ODYSSEY -STM32MP157C Uart port. Finally, connect the Arduino to the PC/Mac via the Arduino's USB cable. Now check to see if your PC/Mac has found your Arduino by typing the following command:

```
ls /dev/cu.usb* (Mac)
ls /dev/ttyACM* (Linux)
```
You should get feedback like this:

```
/dev/cu.usbmodem14XX where XX will vary depending on which USB port you used (on Mac)
/dev/ttyACMX where X will vary depending on which USB port you used  (on Linux)
```
Now follow the steps above to connect to ODYSSEY – STM32MP157C via a serial connection. This is usually what we need to do when we first boot up, as you will then set up ODYSSEY – STM32MP157C for Wi-Fi connection and then SSH connection.

**Network Settings**

**A. Ethernet connection**

You can connect to the network using an Ethernet cable. Just plug in the Ethernet cable to the Internet.
Now, go to the next section: the Basic tool install.

**B. Wi-Fi Settings**

<div className="admonition note">
  <p className="admonition-title">Note</p>
  If you want to using Wi-Fi, you have to access next section: Basic tool install first.
</div>

- **Step 1.** Check the version of Linux kernel in the current environment and install the header file of kernel version.

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **Step 2.** Make and install driver of stm32p1 from `seeed-linux-dtverlays` in the GitHub.

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **Step 3.** add dtbo package in `/boot/uEnv.txt` to make it become effective after reboot.

```bash
sudo sh -c "echo uboot_overlay_addr0=/lib/firmware/stm32mp1-seeed-ap6236.dtbo >> /boot/uEnv.txt"
sudo reboot
```

- **Step 4.** Connect the wifi

Configure the ODYSSEY – STM32MP157C network through the network management tool `connmanctl`, which has been installed on the ODYSSEY -STM32MP157C image. Follow these instructions to easily complete the configuration. 

```
robot@ev3dev:~$ sudo connmanctl
Error getting VPN connections: The name net.connman.vpn was not provided by any
connmanctl> enable wifi
Enabled wifi
connmanctl> scan wifi
Scan completed for wifi
connmanctl> services
*AO Wired                ethernet_b827ebbde13c_cable
                         wifi_e8de27077de3_hidden_managed_none
    AH04044914           wifi_e8de27077de3_41483034303434393134_managed_psk
    Frissie              wifi_e8de27077de3_46726973736965_managed_psk
    ruijgt gast          wifi_e8de27077de3_7275696a67742067617374_managed_psk
    schuur               wifi_e8de27077de3_736368757572_managed_psk
connmanctl> agent on
Agent registered
connmanctl> connect wifi_e8de27077de3_41      # You can use the TAB key at this point to autocomplete the name
connmanctl> connect wifi_e8de27077de3_41483034303434393134_managed_psk
Agent RequestInput wifi_e8de27077de3_41483034303434393134_managed_psk
  Passphrase = [ Type=psk, Requirement=mandatory ]
Passphrase? *************
Connected wifi_e8de27077de3_41483034303434393134_managed_psk
connmanctl> quit
```

Now use the following command to find ODYSSEY – STM32MP157C's IP address. 
```
ifconfig
```

**Basic tool install**

***1.SSH***

SSH, short for Secure Shell, is formulated by the Network Working Group of IETF. SSH is a security protocol based on the application layer. SSH is a more reliable protocol that provides security for remote login sessions and other network services. There is no SSH protocol in the image provided by us, so we need to configure it through the serial port, so as to realize the communication between the device and the computer through SSH protocol. Enter the following command to install the SSH service in ODYSSEY -STM32MP157C.

```bash
sudo apt install ssh -y
```

Next, we'll use SSH to access ODYSSEY – STM32MP157C. Windows users can use third-party SSH clients. For Linux/Mac users, the SSH client is built in.

- Windows users : Use PUTTY, select SSH protocol, fill in the correct IP address and click open. The user name is debian and the password is temppwd.

- Linux/Mac users :
```
ssh debian@IP
// password: temppwd
```

<div class="admonition note" >
<p class="admonition-title">Note</p>
If the performance experience degrades while using SSH, please switch to a more accessible WiFi network.
</div>

***2.GIT***

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

```bash
sudo apt install git -y
```

***3.MAKE***

```bash
sudo apt install make device-tree-compiler gcc -y
```

***4.WGET***

```bash
sudo apt install wget -y
```

**Bluetooth Setting Up**

- **Step 1.** Check the version of Linux kernel in the current environment and install the header file of kernel version.

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **Step 2.** Make and install driver of stm32p1 from `seeed-linux-dtverlays` in the GitHub.

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **Step 3.** add dtbo package in `/boot/uEnv.txt` to make it become effective after reboot.

```bash
sudo sh -c "echo uboot_overlay_addr0=/lib/firmware/stm32mp1-seeed-ap6236.dtbo >> /boot/uEnv.txt"
sudo reboot
```

**Activate the bluetooth**

Then activate the bluetooth by the command:

```
sudo apt -y install bluetooth bluez bluez-tools rfkill
systemctl is-enabled bluetooth.service
```

**Connect the bluetooth**

- **Step 1.** Scan the bluetooch by using bluetoothctl

the bluetoothctl is a tool that controls the Bluetooth to connect the other Bluetooth.

```
debian@npi:~$ bluetoothctl
[NEW] Controller 43:43:A0:12:1F:AC ReSpeaker-1FAC [default]
Agent registered
[bluetooth]# scan on
Discovery started
[CHG] Controller 43:43:A0:12:1F:AC Discovering: yes
[NEW] Device C8:69:CD:BB:9B:B3 C8-69-CD-BB-9B-B3
[NEW] Device E1:D9:68:0E:51:C0 MTKBTDEVICE
[NEW] Device 62:15:9C:3F:40:AA 62-15-9C-3F-40-AA
[NEW] Device 56:AF:DE:C0:34:25 56-AF-DE-C0-34-25
[NEW] Device B8:86:87:99:FB:10 SOLARRAIN
[CHG] Device B8:86:87:99:FB:10 Trusted: yes
[NEW] Device 04:5D:4B:81:35:84 MDR-1000X
[CHG] Device 04:5D:4B:81:35:84 Trusted: yes
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Key: 0x004c
[CHG] Device 4C:04:59:38:D3:25 ManufacturerData Value:
  10 05 0b 10 99 18 0a                             .......
[bluetooth]# scan off
[CHG] Device 04:5D:4B:81:35:84 RSSI is nil
[CHG] Device B8:86:87:99:FB:10 TxPower is nil
[CHG] Device B8:86:87:99:FB:10 RSSI is nil
[CHG] Device 4C:04:59:38:D3:25 RSSI is nil
[CHG] Device 58:44:98:93:35:24 RSSI is nil
Discovery stopped
[bluetooth]#

```

- **Step 2.** Now using the command `pair + device ID` to match bluetooth device with the ODYSSEY – STM32MP157C.

- **Step 3.** When you see the messega `Pairing successful`, tap `connect + device ID`.

```
[bluetooth]# pair 04:5D:4B:81:35:84
Attempting to pair with 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 00001108-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110b-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110c-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000110e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 UUIDs: 0000111e-0000-1000-8000-00805f9b34fb
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Device 04:5D:4B:81:35:84 Paired: yes
Pairing successful
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: no
[CHG] Device 04:5D:4B:81:35:84 Connected: no
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: yes
[bluetooth]# connect 04:5D:4B:81:35:84
Attempting to connect to 04:5D:4B:81:35:84
[CHG] Device 04:5D:4B:81:35:84 Connected: yes
Connection successful
[CHG] Device 04:5D:4B:81:35:84 ServicesResolved: yes
[CHG] Controller 43:43:A0:12:1F:AC Discoverable: no
[MDR-1000X]#
```

If `Connection successful` pops up, configuration!

## CANBUS Communication

The following is the process of CANBUS communication using [2 Channel CAN BUS FD Shield for Raspberry Pi](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html) based on ODYSSEY -- STM32MP157C, first use [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html) to collect the environment temperature and humidity, and then through the Seeeduino V4.2 [CAN - BUS shields V2](https://www.seeedstudio.com/CAN-BUS-Shield-V2.html) above and the ODYSSEY – STM32MP157C Channel 2 CAN BUS FD shields above for Raspberry Pi communication.

### Preparation Work

**Materials Required**

- ODYSSEY - STM32MP157C
- Wi-Fi network
- 4GB (or more than 4GB) SD card and SD card reader
- PC or Mac
- [USB To Uart Adapter](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)(optional)
- 12V/2ADC interface adapter for power supply (optional)
- A USB type-c cable
- Two double-male dupont lines
- [CAN-BUS Shield V2](https://www.seeedstudio.com/CAN-BUS-Shield-V2.html)
- [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)
- [2 Channel CAN BUS FD Shield for Raspberry Pi](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html)
- [Grove - Light Sensor v1.2](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2.html)
- [Grove - I2C High Accuracy Temp&Humi Sensor (SHT35)](https://www.seeedstudio.com/catalogsearch/result/?q=sht35)

**Hardware Connection**

- **Step 1.** According to the [installation guide](https://wiki.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/#mounting-guide) insert 2 Channel CAN BUS FD Shield for Raspberry Pi onto ODYSSEY - STM32MP157C.
- **Step 2.** Insert CAN BUS Shield V2 into Seeeduino V4.2.
- **Step 3.** Connect Channel CAN BUS FD Shield for Raspberry Pi to can-bus Shield V2 using jumper wire.

|2 Channel CAN BUS FD Shield for Raspberry Pi|CAN-BUS Shield V2|
|:----:|:------:|
|CAN_0_L|CANL|
|CAN_0_H|CANH|

- **Step 4.** Power ODYSSEY STM32MP157C and Seeeduino V4.2

**Dependency installation**

- **Step 1.** Install the environment for `python`.

```bsah
sudo apt update
sudo apt install python3 python3-distutils python3-pyqt5  python3-pip python3-numpy -y
sudo pip3 install python-can pyqtgraph
```
- **Step 2.** Install `git`.

```bsah
sudo apt install git -y
```

- **Step 3.** Install the `make` related environment.

```bsah
sudo apt install make device-tree-compiler gcc -y
```

### software installation

**Install CAN-HAT and LCD drivers**

- **Step 1.** Check the version of Linux kernel in the current environment and install the header file of kernel version.

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **Step 2.** Make and install driver of stm32p1 from `seeed-linux-dtverlays` in the GitHub.

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **Step 3.** add dtbo package in `/boot/uEnv.txt` to make it become effective after reboot.

```bash
sudo sh -c "echo uboot_overlay_addr7=/lib/firmware/stm32mp1-seeed-lcd-01.dtbo >> /boot/uEnv.txt"
sudo sh -c "echo uboot_overlay_addr8=/lib/firmware/stm32mp1-MCP2517FD-can0.dtbo >> /boot/uEnv.txt"
sudo reboot
```

- **Step 4.** Check the driver whether install successfully by using `dmesg`, you will view the below information if it is successful.

```bash
debian@npi:~$ sudo insmod /lib/modules/$(uname -r)/extra/seeed/mcp25xxfd-can.ko
debian@npi:~$ dmesg | grep spi
[    1.057609] spi_stm32 44009000.spi: driver initialized
[    9.852726] mcp25xxfd spi0.0: Linked as a consumer to regulator.6
[    9.966510] mcp25xxfd spi0.0: MCP2517 successfully initialized.

debian@npi:~$ ifconfig -a
can0: flags=128<NOARP>  mtu 16
        unspec 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  txqueuelen 10  (UNSPEC)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

**Config CAN-HAT and LCD**

- **Step 1.** Configure `can-bus`

```bash
sudo ip link set can0 up type can bitrate 500000 dbitrate 8000000 restart-ms 1000 berr-reporting on fd on
sudo ifconfig can0 txqueuelen 65536

debian@npi:~$ ip -details link show can0
3: can0: <NOARP,UP,LOWER_UP,ECHO> mtu 16 qdisc pfifo_fast state UNKNOWN mode DEFAULT group default qlen 10
    link/can  promiscuity 0 minmtu 0 maxmtu 0
    can state ERROR-ACTIVE (berr-counter tx 0 rx 0) restart-ms 0
          bitrate 500000 sample-point 0.875
          tq 25 prop-seg 34 phase-seg1 35 phase-seg2 10 sjw 1
          mcp25xxfd: tseg1 2..256 tseg2 1..128 sjw 1..128 brp 1..256 brp-inc 1
          mcp25xxfd: dtseg1 1..32 dtseg2 1..16 dsjw 1..16 dbrp 1..256 dbrp-inc 1
          clock 40000000numtxqueues 1 numrxqueues 1 gso_max_size 65536 /gso_max_segs 65535
```

- **Step 2.** Configure the `lcd` environment

```bash
export QT_QPA_PLATFORM=linuxfb:fb=/dev/fb0
```

### Run the Demo

Run the following code on 'ODYSSEY - STM32MP157C'

```bash
cd ~
git clone https://github.com/SeeedDocument/ODYSSEY-STM32MP157C.git
cd ~/ODYSSEY-STM32MP157C/examples
python3 QtViewerForStm32p1.py
```

Run [CanBus_SendForArduino.ino](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/examples/CanBus_SendForArduino.ino) on `Seeeduino V4.2`.

![](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/can_bus_demo.png)


## Play with GPIO

This part will introduce how to use **grove.py** to control GPIO and Grove Socket on ODYSSEY STM32MP157C.there exists two way to connect with the Grove Socket in this board. the one hand is using the Digital Grove Interface and  IIC Grove Interface, the other is using ODYSSEY - STM32MP157C's 40-pin. The description of the PIN defines for the ODYSSEY - STM32MP157C's 40-pin please refer to [Pin Function](#Pin Function).It is convenient for you to use this ODYSSEY - STM32MP157C's 40-pin.So,Let's go.

### Set to the gpio mode

- **Step 1.** Check the version of Linux kernel in the current environment and install the header file of kernel version.

```bash
sudo apt install linux-headers-$(uname -r) -y
```

- **Step 2.** Make and install driver of stm32p1 from `seeed-linux-dtverlays` in the GitHub.

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960" && sudo make install_stm32mp1 CUSTOM_MOD_FILTER_OUT="jtsn-wm8960"
```

- **Step 3.** add dtbo package in `/boot/uEnv.txt` to make it become effective after reboot.

```bash
sudo sh -c "echo uboot_overlay_addr1=/lib/firmware/stm32mp1-seeed-spi5.dtbo >> /boot/uEnv.txt"
sudo sh -c "echo uboot_overlay_addr2=/lib/firmware/stm32mp1-seeed-usart2.dtbo >> /boot/uEnv.txt"
sudo sh -c "echo uboot_overlay_addr3=/lib/firmware/stm32mp1-seeed-i2c4.dtbo >> /boot/uEnv.txt"
sudo reboot
```

- **Step 4.** Install the environment for `python3`.

```bsah
sudo apt install python3 python3-pip -y
```

###  Digital output on Basehat by using Grove.py

#### Hardware

- **Step 1**. Things used in this project:

| ODYSSEY – STM32MP157C |  Grove - Buzzer | Grove Base Hat for Raspberry Pi |
|--------------|-------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/Buzzer.png)|![image](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Buzzer.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|

- **Step 2**. Plug the Grove Base Hat into ODYSSEY - STM32MP157C.

- **Step 3**. Connect the Grove Buzzer to D5 port of the Base Hat.

- **Step 4**. Connect the ODYSSEY - STM32MP157C to PC through USB cable.

#### Software

- **Step 1**. Install the Grove.py

```bash
sudo pip3 install Seeed-grove.py
```

- **Step 2**. Download the source file by cloning the grove.py library.

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Step 3**. Excute below command to run the code.

```bash
cd grove.py/grove
sudo python3 grove_gpio.py 5
```

<div class="admonition note" >
<p class="admonition-title">Note</p>
we will hear sound from the buzzer if everything has been well.
</div>

###  Digital Input on Basehat by using Grove.py

#### Hardware

- **Step 1**. Things used in this project:

| ODYSSEY – STM32MP157C |  Grove - Button | Grove Base Hat for Raspberry Pi |
|--------------|-------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Button/img/button_s.jpg)|![image](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Button-P.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|

- **Step 2**. Plug the Grove Base Hat into ODYSSEY - STM32MP157C.

- **Step 3**. Connect the Grove Button to D5 port of the Base Hat.

- **Step 4**. Connect the ODYSSEY - STM32MP157C to PC through USB cable.

#### Software

- **Step 1**. Install the Grove.py

```bash
sudo pip3 install Seeed-grove.py
```

- **Step 2**. Download the source file by cloning the grove.py library.

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Step 3**. Excute below command to run the code.

```bash
cd grove.py/grove
sudo python3 grove_button.py 5
```

<div class="admonition note" >
<p class="admonition-title">Note</p>
we will view some information at the terminal if the button has been pressed.
</div>

###  ADC on Basehat by using Grove.py

#### Hardware

- **Step 1**. Things used in this project:

| ODYSSEY – STM32MP157C |  Grove - Temperature Sensor | Grove Base Hat for RasPi |
|--------------|-------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg)|![image](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|

- **Step 2**. Plug the Grove Base Hat into ODYSSEY - STM32MP157C.

- **Step 3**. Connect the temperature sensor to port A0 of the Base Hat.

- **Step 4**. Connect the ODYSSEY - STM32MP157C to PC through USB cable.

#### Software

- **Step 1**. Install the Grove.py

```bash
sudo pip3 install Seeed-grove.py
```

- **Step 2**. Download the source file by cloning the grove.py library.

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Step 3**. Excute below command to run the code.

```bash
cd grove.py/grove
sudo python3 grove_temperature_sensor.py 0
```

<div class="admonition note" >
<p class="admonition-title">Note</p>
we will view temperature data at the terminal if everything has been well.
</div>

###  UART on Basehat by using Grove.py

#### Hardware

- **Step 1**. Things used in this project:

| ODYSSEY – STM32MP157C | Grove Base Hat for RasPi |
|--------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![image](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|

- **Step 2**. Plug the Grove Base Hat into ODYSSEY - STM32MP157C.

- **Step 3**. Connect RX To TX in Basehat using jumper

- **Step 4**. Connect the ODYSSEY - STM32MP157C to PC through USB cable.

#### Software

- **Step 1**. Install the Grove.py

```bash
sudo pip3 install Seeed-grove.py
```

- **Step 2**. Download the source file by cloning the grove.py library.

```bash
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Step 3**. Excute below command to run the code.

```bash
cd grove.py/grove
python uart.py
```

if we connect the TX to RX we will get `hello seeder` at terminal.and the location of TX and RX we can view [Pin Function](https://wiki.seeedstudio.com/ODYSSEY-STM32MP157C/#pin-function).


### I2S on ODYSSEY-STM32MP157C

In this section, we will explain the control principle of the Linux I2S programming. Now we will use I2S and ReSpeaker 2-Mics Pi HAT to tell you how to use it.

#### Hardware

- **Step 1**. Things used in this project:

| ODYSSEY – STM32MP157C | ReSpeaker 2-Mics Pi HAT |
|--------------|----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/perspective-19-210X157.png)|![image](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/IMG/res-thumbnail.png)|
|[Get ONE Now](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)|[Get ONE Now](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)|

- **Step 2.** According to the [installation hardware guide](https://wiki.seeedstudio.com/ReSpeaker_2_Mics_Pi_HAT/#getting-started) insert ReSpeaker 2-Mics Pi HAT onto ODYSSEY – STM32MP157C.

#### Software

- **Step 1.** Install alsa-utils by using `apt`

```bash
sudo apt install alsa-utils -y
```

- **Step 2.** Go to the dtbs file location and download the stm32mp1 dtb file.

```sh
debian@npi:~$ cd /boot/dtbs/4.19.9-stm32-r1/
debian@npi:/boot/dtbs/4.19.9-stm32-r1$ sudo wget https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/res/stm32mp1-seeed-npi-full-rpi-exp.dtb
```

**Note:** You can also download the stm32mp1 `.dtb` file [**here**](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/res/stm32mp1-seeed-npi-full-rpi-exp.dtb)

- **Step 3.** Config the `uEnv.txt` as following:

```sh
debian@npi:~$ sudo vi /boot/uEnv.txt
```

Change the dtb settings to

```
dtb=stm32mp1-seeed-npi-full-rpi-exp.dtb
```

- **Step 4.** reboot

```
sudo reboot
```
 
- **Step 5.** Go into the `seeed-linux-dtverleys` folder and configure soundstate as follow：

```sh
debian@npi:~$ cd ~/seeed-linux-dtverlays/
debian@npi:~/seeed-linux-dtverlays$ sudo cp extras/wm8960_asound-stm32mp1 /var/lib/alsa/asound.state
debian@npi:~/seeed-linux-dtverlays$ sudo alsactl restore
```

- **Step 6.** Check the driver whether install successfully by using `aplay` and `arecord`, you will view the below information if it is successful.

```sh
debian@npi:~/seeed-linux-dtverlays$ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 4000b000.audio-controller-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: STM32MP1SEEEDNP [STM32MP1-SEEEDNPi], device 0: 4400b004.audio-controller-wm8960-hifi0 wm8960-hifi0-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
debian@npi:~/seeed-linux-dtverlays$ arecord -l
**** List of CAPTURE Hardware Devices ****
card 0: seeed2micvoicec [seeed-2mic-voicecard], device 0: 4000b000.audio-controller-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: STM32MP1SEEEDNP [STM32MP1-SEEEDNPi], device 1: 4400b024.audio-controller-wm8960-hifi1 wm8960-hifi1-1 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

- **Step 7.** Now you can start playing with ReSpeaker 2-Mics Pi Hat! For simple record and play testing, run the following command:

1. To record an audio to `test.wav`:

```sh
arecord -f cd -r 48000 -Dhw:0 test.wav
```

2. To play the `test.wav` audio. Remember to plug in a headphone or speaker to output the audio.

```sh
aplay -Dhw:0 -r 48000 test.wav
```

<div class="admonition note" >
<p class="admonition-title">Note</p>
if you cannot get any sound maybe you can reboot again.
</div>

For more information about the ReSpeaker 2-Mics Pi HAT you can visit [wiki](https://wiki.seeedstudio.com/ReSpeaker_2_Mics_Pi_HAT/)

## Resourses
-----
- **[PDF]** [STM32MP157C Datasheet](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/stm32mp157c.pdf)
- **[SCH]** [Seeed SoM - STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20SoM%20-%20STM32MP157C%20v1.0_191212.pdf)
- **[SCH]** [ODYSSEY-STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20NPi%20-%20STM32MP157C%20v1.0_191212.pdf)
- **[3Dfile]** [ODYSSEY-STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/st.skp)
- **[OrCAD]** [ODYSSEY-STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20NPi%20-%20STM32MP157C%20v1.0_SCH%20%26%20PCB.zip)
- **[OrCAD]** [Seeed SoM - STM32MP157C](https://files.seeedstudio.com/wiki/Seeed-NPi-STM32MP157C/Hardware/Seeed%20SoM%20-%20STM32MP157C%20v1.0_SCH%20%26%20PCB%20.zip)
- **[PDF]** [ODYSSEY-STM32MP157C 2d file](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/STM32-2d-file.pdf)
- **[PDF]** [STM32 Reference Guide](https://files.seeedstudio.com/wiki/ODYSSEY-STM32MP157C/STM32+Reference+Guide+V1.0.pdf)
- **[URL]** [Advanced system development](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C)


# ODYSSEY-STM32MP157C Advanced system development
- [Availability](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Availability)
- [Vendor Documentation](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-VendorDocumentation)
- [Basic Requirements](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-BasicRequirements)
- [ARM Cross Compiler: GCC](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-ARMCrossCompiler:GCC)
- [Bootloader: U-Boot](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Bootloader:U-Boot)
- [Linux Kernel](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-LinuxKernel)
- [Root File System](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-RootFileSystem)
  - [Debian 10](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Debian10)
  - [Ubuntu 20.04 LTS](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Ubuntu20.04LTS)
- [Setup microSD card](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-SetupmicroSDcard)
- [Install Kernel and Root File System](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-InstallKernelandRootFileSystem)
- [Copy Root File System](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopyRootFileSystem)
- [Set uname_r in /boot/uEnv.txt](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Setuname_rin/boot/uEnv.txt)
- [Device Tree Binary](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-DeviceTreeBinary)
- [Copy Kernel Image](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopyKernelImage)
- [Copy Kernel Device Tree Binaries](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopyKernelDeviceTreeBinaries)
- [Copy Kernel Modules](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-CopyKernelModules)
- [File Systems Table (/etc/fstab)](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-FileSystemsTable(/etc/fstab))
- [Remove microSD/SD card](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-RemovemicroSD/SDcard)
- [Comments](https://www.digikey.com/eewiki/display/linuxonarm/ODYSSEY-STM32MP157C#ODYSSEY-STM32MP157C-Comments)


## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). 
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>

