---
name: ODYSSEY – STM32MP157C 
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html
wikiurl: http://wiki.seeedstudio.com/ODYSSEY-STM32MP157C/
sku: 102110319
---

# ODYSSEY – STM32MP157C

 ![](https://github.com/SeeedDocument/ODYSSEY-STM32MP157C/raw/master/IMG/perspective-19.png)

The ODYSSEY – STM32MP157C is a single board computer that based on STM32MP157C, a dual-core Arm-Cortex-A7 core processor operating at 650Mhz. The processor also integrates an Arm Cortex-M4 coprocessor, which makes it suitable for real-time task. The ODYSSEY – STM32MP157C is created in a form of SoM(system on module) plus a Carrier board. The SoM has consisted of the MPU, PMIC, RAM and the carrier board is in Raspberry Pi form factor. The carries board includes all the necessary peripherals including Gigabytes Ethernet, WiFi/BLE, DC Power，USB Hosts, USB-C, MIPI-DSI, DVP for camera, audio, etc. With this board, customers can fast evaluate the SoM and deploy the SoM on their own carrier board easily and quickly.

[![Get one now](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now.png)](https://www.seeedstudio.com/ODYSSEY-STM32MP157C-p-4464.html)


## Features

- Dual-core Arm-Cortex-A7 core processor with Cortex-M4 integrated
- SoM(system on module) includes MPU, PMIC, RAM. 
- Raspberry Pi 40-Pin Compatible Carrier Board.
- Compact size and powerful
- open source hardware/SDK/API/BSP/OS

## Specification

|Item|Values|
|----|------|
|Peripheral Interface| 2 x USB Host<br>1 x gigabit Ethernet interface<br>1 x 3.5mm audio interface<br>1 x MIPI DSI display interface<br>1 x DVP camera interface<br>2 x Grove (GPIO & I2C)<br>1 x SD card interface (on the back of the board)|
|WiFi/Bluetooth|WiFi 802.11 b/g/n 2.4GHz<br>Bluetooth 4.1|
|On-board LED|1 x reset LED<br>3 x user-defined LED<br>1 x power LED|
|Power|1 x DC interface (12V/2A power input is recommended)<br>1 x USB Type - C|
|Button|1 x reset button<br>1 x user button<br>1 x dial code key|
|dimension|56mm x 85mm|
|Operating temperature | 0 ~ 75 ℃ |

## Application

- Industrial (CAN-Ethernet gateways etc )
- White goods(refrigerators,microwaves etc )
- Medical(data loggers etc)
- High-end wearables(VR device etc)
- Smart Home Devices

## Hardware Overview

<iframe src="https://3dwarehouse.sketchup.com/embed/6eecf961-5dd1-4baf-94e4-72f130c5542d" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="580" height="326" allowfullscreen></iframe>

ODYSSEY – STM32MP157C consists of two parts: Carrier board and Seeed SoM - STM32MP157C.

Carrier board hardware details follow:

 ![](https://github.com/SeeedDocument/ODYSSEY-STM32MP157C/raw/master/IMG/front.png)

 ![](https://github.com/SeeedDocument/ODYSSEY-STM32MP157C/raw/master/IMG/back.png)

- **1.Carrier board :** Install the Seeed SoM-STM32MP157C area, if the user wants to remove the core board, slowly tilt the core board up and then remove, never remove by hand.

- **2.DC Power Input Port :** 12V~24V/2A (12V/2A power input is recommended).

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

![](https://github.com/SeeedDocument/ODYSSEY-STM32MP157C/raw/master/IMG/GPIO.png)

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

<div class="admonition warning">
<p class="admonition-title">Caution</p>
Please plug the USB cable gently, otherwise you may damage the interface.Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click <a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"><B>here</B></a> to buy
</div>

**Mirror Installation**

Like Raspberry Pi, you need to install the ODYSSEY – STM32MP157C image from your SD card to get it up and running. We offer two ways to start ODYSSEY – STM32MP157C. You can boot from an SD card or from eMMC.

**A. Boot from SD card**

- **Step 1.** Select the [firmware](https://github.com/Seeed-Studio/seeed-linux-images) you want to download:

- **Step 2.** Connect an SD card to a PC or MAC with an SD card reader, an SD card with more than 4G memory is required.

- **Step 3.** <font face="">Click here to download <a href="https://etcher.io/">Etcher</a>, then use the Etcher to write the  ```*.img.xz``` file directly to the SD card. Or extract the ```*.img.xz``` file into a ```*.img``` file, and then burn it to an SD card using another mirror write tool. 
<br>
<br>Click the plus icon to add the newly downloaded image file and the software will automatically select the SD card you inserted. Then click Flash! writing. It takes about 10 minutes to finish.</font>

![](https://github.com/SeeedDocument/Respeaker_V2/raw/master/img/v2-flash-sd.png)


- **Step 4.** After writing the image to the SD card, insert the SD card into ODYSSEY – STM32MP157C. Use USB type-c port to power the Carrier board. Do not take out the SD card during writing. ODYSSEY – STM32MP157C will boot from the SD card, you can see the PWR and USER LED lighting on SOM. Now, go to the next section: the serial console.

<div class="admonition note" >
<p class="admonition-title">Note</p>
they mean to start up failed if the USER LED does not blink.Please check the boot switch whether it is SD_CARD.
</div>
    

**B. Boot from eMMC card**

- **Step 1.** the process is the same as **A. Boot from SD card** if you first start up the ODYSSEY – STM32MP157C.

- **Step 2.** Edit /boot/uEnv.txt to start eMMC boot then reboot.

```bash
sudo echo cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3-stm32mp1.sh >> /boot/uEnv.txt
sudo reboot
```
- **Step 3.** Wait for the USER LED bright continuously.that indicate the eMMC boot successfully if the USER LED bright continuously.

- **Step 4.** Set the slide switch to EMMC and restart.

**Serial Console**

Now your ODYSSEY – STM32MP157C is up, you may want to access your Linux system through the console, then set up WiFi, and so on. Two serial port access methods are provided for Linux access: 

- A. OTG USB port - You need to run a Linux system on a circuit board.

- B. UART port - Used to debug low-level problems.

**A. Connect via OTG**

- **Step 1.** Take a USB type-c cable and make sure it's a data cable, plug it into ODYSSEY – STM32MP157C's USB type-c port, and then plug the other end of the USB type-c cable into your computer. 

- **Step 2.** Check whether the computer serial port is enabled:

    - Windows : Check the device manager, there should be a new serial device named ```COMx```, x is a bigger and bigger number. If you can not recognizes the driver you can visit [link](https://beagleboard.org/getting-started#troubleshooting) to install the driver.
    - Linux : ls ```/dev/ttyACM*```, should be ```/dev/ttyACMx``` x depends on the USB port you use.
    - Mac : ls ```/dev/cu.usb*```, should be ```/dev/cu.usbmodem14xx``` xx depends on the USB port you use.


- **Step 3.** Use your favorite serial debugging tool to connect to serial ports: 115200 baud rate, 8 bits, no parity bits, a stop bit 1, no flow control. Here are SoMe examples:

    - Windows : Use [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), select ```Serial``` protocol, fill in the COM port corresponding to ODYSSEY -STM32MP157C,```115200``` baud rate, 8 bit, no parity bits, a stop bit 1, no flow control.
    - Linux : Depending on the USB To TTL Adapter, should be ```screen /dev/ttyACM0(,1, and so on) 115200``` or ```screen /dev/ttyUSB0(,1, and so on) 115200```.
    - Mac : Depending on the USB To TTL Adapter, should be ```screen /dev/cu.usbserial1412(,1422, and so on) 115200``` or ```screen /dev/cu.usbmodem1412(,1422, and so on) 115200```.


- **Step 4.** The default user name is ```debian```, the password is ```temppwd```.

**B. Connect via UART port**

In this section, we'll walk you through the use of the USB to TTL adapter, which connects to the ODYSSEY – STM32MP157C's Uart port(Located at the upper right of ODYSSEY – STM32MP157C), to establish a connection between your computer and ODYSSEY -STM32MP157C.

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

**A. Wi-Fi Settings**

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

**B. Ethernet connection**

You can connect to the network using an Ethernet cable. Just plug in the Ethernet cable to the Internet.

**SSH connection**

**A. SSH**

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

## CANBUS Communication

The following is the process of CANBUS communication using [2 Channel CAN BUS FD Shield for Raspberry Pi](https://www.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi-p-4072.html) based on ODYSSEY -- STM32MP157C, first use [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html) to collect the environment temperature and humidity, and then through the Seeeduino V4.2 [CAN - BUS shields V2](https://www.seeedstudio.com/CAN-BUS-Shield-V2.html) above and the ODYSSEY – STM32MP157C Channel 2 CAN BUS FD shields above for Raspberry Pi communication.

###Preparation Work

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

- **Step 1.** According to the [installation guide](http://wiki.seeedstudio.com/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi/#mounting-guide) insert 2 Channel CAN BUS FD Shield for Raspberry Pi onto ODYSSEY - STM32MP157C.
- **Step 2.** Insert CAN BUS Shield V2 into Seeeduino V4.2.
- **Step 3.** Connect Channel CAN BUS FD Shield for Raspberry Pi to can-bus Shield V2 using dupont wire.

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
dpkg -l | grep linux
sudo apt install linux-headers-$(uname -r) -y
```

- **Step 2.** Make and install driver of stm32p1 from `seeed-linux-dtverlays` in the GitHub.

```bash
git clone https://github.com/Seeed-Studio/seeed-linux-dtverlays
cd seeed-linux-dtverlays
make all_stm32mp1 && sudo make install_stm32mp1
```

- **Step 3.** add dtbo package in `/boot/uEnv.txt` to make it become effective after reboot.

```bash
sudo echo uboot_overlay_addr0=/lib/firmware/stm32mp1-seeed-lcd-01-overlay.dtbo >> /boot/uEnv.txt
sudo echo uboot_overlay_addr1=/lib/firmware/stm32mp1-MCP2517FD-can0-overlay.dtbo >> /boot/uEnv.txt
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

Run [CanBus_SendForArduino.ino](https://github.com/SeeedDocument/ODYSSEY-STM32MP157C/blob/master/examples/CanBus_SendForArduino.ino) on `Seeeduino V4.2`.

## Resourses
-----
- **[PDF]** [STM32MP157C Datasheet](https://github.com/SeeedDocument/ODYSSEY-STM32MP157C/raw/master/Hardware/STM32MP157C.pdf)
- **[SCH]** [Seeed SoM - STM32MP157C](https://github.com/SeeedDocument/ODYSSEY-STM32MP157C/raw/master/Hardware/Seeed%20SoM%20-%20STM32MP157C%20v1.0_191212.pdf)
- **[SCH]** [ODYSSEY-STM32MP157C](https://github.com/SeeedDocument/ODYSSEY-STM32MP157C/raw/master/Hardware/Seeed%20NPi%20-%20STM32MP157C%20v1.0_191212.pdf)
- **[3Dfile]** [ODYSSEY-STM32MP157C](https://github.com/SeeedDocument/ODYSSEY-STM32MP157C/raw/master/Hardware/st.skp)


## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>