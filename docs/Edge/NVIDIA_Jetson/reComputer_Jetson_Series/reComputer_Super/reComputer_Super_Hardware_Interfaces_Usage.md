---
description: This guide provides a detailed overview of the reComputer Super's hardware components and interfaces, including how to connect and use devices such as CSI cameras, USB ports, various M.2 interfaces, mini PCIe, RTC, Ethernet, LEDs, fans, CAN, extension ports, and HDMI, with step - by - step instructions and command examples. 
title: reComputer Super Hardware and Interfaces Usage
keywords:
  - reComputer Super
  - Interfaces Usage
  - Jetson
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /recomputer_jetson_super_hardware_interfaces_usage
last_update:
  date: 05/26/2025
  author: Zibo
---

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super.png"/>  
</div>

This wiki introduces the various different hardware and interfaces on the reComputer Super and how to use them to expand your project ideas.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>



## CSI Camera

The reComputer Super supports standard 4 MIPI CSI cameras for image and video capture. Please follow the steps below to connect and test your camera.

### Hardware Connection
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/sci.jpg"/>  
</div>

**Step1.** Open the back cover of the Recomputer Super.

**Step2.** Connect the MIPI CSI camera to the appropriate CSI port on the reComputer Super board.

**Step3.** Secure the camera and ensure the connection is firm.

### Usage Instruction

:::note
Before using the CSI camera, please ensure you have installed a JetPack version with the necessary camera drivers.
:::

**Step1.** Check if the camera is recognized by the system:

```bash
ls /dev/video*
```

**Step2.** (Optional) Install video utilities if not already present:

```bash
sudo apt install v4l-utils
```

**Step3.** Start the camera and display the video stream using the following command:

```bash
nvgstcapture-1.0 --sensor-id=0
```
:::info
Change `--sensor-id` to the appropriate value if you have multiple cameras.
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/csi.png"/>
</div>


---



## USB 
The reComputer Super has a total of 4 USB 3.2 ports and 1 USB 2.0 Type-C port for debugging.

### USB 3.2 port

We can enter `watch -n 1 lsusb -tv` in the Jetson terminal to probe the USB ports. Once a USB device is connected, the detailed information about that port will be displayed here.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/usb_lsusb.png"/>
</div>

Additionally, you can  test the read and write speed of USB storage devices by using the `dd` command:

- **Read:**
  ```bash
  sudo dd if=/dev/sda of=/dev/null bs=1024M count=5 iflag=direct
  ```
 <div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_read.png"/>
</div>

- **Write:**
  ```bash
  sudo dd if=/dev/zero of=/dev/sda bs=1024M count=5 conv=fdatasync
  ```
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/usb_w.png"/>
</div>


### USB 2.0 Type-C port

Using this serial port, via the USB C data cable, you can monitor the debugging information of input and output on the PC side.

**Step1.** Switch the switch to the debug mode.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug.jpg"/>
</div>

**Step2.** Connect the PC via a USB data cable, downloaded the [CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads) on your PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**Step3.** Connect the PC via a USB data cable, extract the downloaded file and install driver on your PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**Step4.** Open Open the Device Manager on your Windows PC and check the COM port number assigned to the reComputer Super. It should appear under "Ports (COM & LPT)" as "Silicon Labs CP210x USB to UART Bridge (COMX)", where X is the COM port number.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/debug1.png"/>
</div>

**Step5.** Open the serial port tool(Here, we use the MobaXterm tool as an example), create a new session.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**Step6.** Select the Serial tool.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**Step7.** Select corresponding serial port, set the baud rate to 115200 and click "OK".

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/3.png"/>
</div>

**Step8.** Login your reComputer Super with the username and password.


<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4.png"/>
</div>

## M.2 Key M

M.2 Key M is an interface designed for high-speed solid-state drives (SSDs), providing ultra-fast data transfer speeds, ideal for high-performance applications.


### Supported SSD are as follows:
- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html)
### Hardware Connection
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd.jpg"/>  
</div>

### Usage Instruction

Open the terminal in Jetson device and enter the following command to test the SSD's read and write speed.

```bash
#create a blank test file first
sudo touch /ssd/test
dd if=/dev/zero of=/home/seeed/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd_w.png"/>
</div>

:::danger
Please run `sudo rm /home/seeed/ssd/test` command to delete the cache files after the test is complete.
:::

## M.2 Key E

The M.2 Key E interface is a compact, high-speed data interface designed for wireless communication modules such as Wi-Fi and Bluetooth, used to expand wireless capabilities.

### Hardware Connection

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/wifi_c.png"/>
</div>

### Usage Instruction

After installing the Wi-Fi module and powering on the device, we can configure the device's Wi-Fi and Bluetooth settings.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/J401-wifi-bluetooth-test.gif"/>
</div>

Of course, we can also check the device's operating status using the following commands.
```bash
ifconfig
```

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/wifi_ifconfig.png"/>
</div>


**Bluetooth:**
  ```bash
  bluetoothctl
  scan on
  ```
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/bluetooth.png"/>
</div>

## Mini PCIe
The reComputer super comes with a mini-PCIe for LTE 4G module.

#### Hardware Connection

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/mini_p.png"/>
</div>

:::note
If you want to remove the SIM card, push the card in to hit the internal spring so that the SIM will come out of the slot
:::

### Usage Instruction

**Step1.** Install minicom:

```bash
sudo apt update
sudo apt install minicom -y
```

**Step2.** Enter the serial console of the connected 4G module so that we can enter AT commands and interact with the 4G module:

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**Step3.** Press Ctrl+A and then press E to turn on local echo.

**Step4.** Enter the command "AT" and press enter. If you see the response as "OK", the 4G module is working properly.

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/22.jpg"/>
</div>

**Step5.** Enter the command "ATI" to check the module information.

<div align="center">
  <img width ="400" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/23.png"/>
</div>


Using 4G network for internet access

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/4g2.png"/>
</div>


## RTC


The reComputer Super features RTC interfaces, providing accurate timekeeping even when the system is powered off.

### Hardware Connection

Connect a 3V CR1225 coin cell battery to the RTC socket on the board as shown below. Make sure the **positive (+)** end of the battery is facing upwards.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc.jpg"/>
</div>


### Usage Instruction

**Step1.** Connect an RTC battery as mentioned above.

**Step2.** Turn on reComputer Super.

**Step3.** On the Ubuntu Desktop, click the drop-down menu at the top right corner, navigate to `Settings > Date & Time`, connect to a network via an Ethernet cable and select **Automatic Date & Time** to obtain the date/ time automatically.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/13.png"/>
</div>

:::note
If you have not connected to internet via Ethernet, you can manually set the date/ time here.
:::

**Step4.** Open a terminal window, and execute the below command to check the hardware clock time:

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time1(1).png"/>
</div>

**Step5.** Disconnect the network connection and reboot the device. You will find that the system time has lost power but still functions normally.
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/rtc_time2.png"/>
</div>

## Ethernet

There are 2 RJ45 Gigabit Ethernet on reComputer Super supported 10/100/1000M. ETH0 is the native Ethernet port, and the other one ETH1 is converted from PCIe.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth.jpg"/>
</div>

There are 2 LEDs (green and yellow) on each Ethernet port:
- Green LED: ON only when connected to 1000M/10G network.
- Yellow LED: Shows the network activity status.

Test the Ethernet speed:

```bash
iperf3 -c 192.168.254.100 -R
```

:::info
-c `<ip address>` is the server IP address, and -R means reverse mode.
:::



<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_a.png"/>
</div>

```bash
iperf3 -c 192.168.254.100
```


<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/eth_p.png"/>
</div>

## LED Indicators

The reComputer Super is equipped with 2 LED indicators (PWR and ACT) to show power status and system activity, allowing users to monitor device operation in real time.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/led.jpg"/>
</div>

## Fan
The reComputer Super is equipped with two types of fan connectors to meet different voltage and cooling needs:

- 1x 4-Pin Fan Connector (5V PWM): Designed for low-voltage, low-power silent fans, this connector supports PWM speed control, allowing intelligent fan speed adjustment based on system temperature to improve energy efficiency and reduce noise.

- 1x 4-Pin Fan Connector (12V PWM): Compatible with standard 12V PWM fans, it also supports precise speed control, making it ideal for high-performance cooling requirements.


### Hardware Connection

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/fan.jpg"/>
</div>

:::note
For more information, please check [here](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

**Set fan speed:**
  ```bash
  sudo -i
  echo 100 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
  ```
Additionally, we can manually set the fan speed using the jtop tool.

## CAN
The CAN (Controller Area Network) interface is a serial communication protocol used for communication between microcontrollers and devices, featuring high speed, strong anti-interference capability, and support for multi-node communication.
### Hardware Connection
- Please note the sequence of the connected lines (R OUT ↔ RX, D IN ↔ TX), and then convert them to CAN_L and CAN_H through the CAN bus transceiver.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/can1.png"/>
</div>

- [PC CAN Tool Download](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program)
- 3.3V CMOS level CAN bus (not differential)

:::note
The CAN interface uses an isolated power supply, which means that the ground signal for external devices connected to the CAN interface should be connected to the **GND_ISO** pin.
:::

Here we have used [USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html) with USB Cable available on our Bazaar.

### Usage Instruction

**Step1.** Download the driver for the USB to CAN adapter you are using from the manufacturer's website and install it. In our case, according to the adapter that we used, the drivers can be found [here](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Driver/driver%20for%20USBCAN(CHS40)/windows-driver).

**Step2.** Some adapters also come with the necessary software for the PC in order to communicate with the CAN device. In our case, according to the adapter that we used, we have downloaded and installed the software which can be found [here](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program).

**Step3.** Initialize the CAN interface of Jetson.

Create a new file named **`can_init.sh`** in Jetson and write the following content:

```bash
#!/bin/bash

sudo gpioset gpiochip2 9=0 
sudo gpioset gpiochip2 8=0

sudo busybox devmem 0x0c303018 w 0xc458
sudo busybox devmem 0x0c303010 w 0xc400
sudo busybox devmem 0x0c303008 w 0xc458
sudo busybox devmem 0x0c303000 w 0xc400

sudo modprobe can
sudo modprobe can_raw
sudo modprobe mttcan

sudo ip link set can0 down
sudo ip link set can1 down

sudo ip link set can0 type can bitrate 125000
sudo ip link set can1 type can bitrate 125000
sudo ip link set can0 up
sudo ip link set can1 up

```
Then, run the file we just created in the Jetson terminal window:

```bash
sudo apt-get install gpiod
cd <path to can_init.sh>
sudo chmod +x can_init.sh
./can_init.sh
```

**Step4.** Type ifconfig on the terminal and you will see the CAN interface in enabled.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/can.png"/>
</div>

**Step5.** Open the CAN software that you have installed before. In this case, we will open the software that we installed according to the CAN adapter that we are using.

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/42.jpg"/>
</div>

**Step6.** Connect the USB to CAN adapter to the PC and open **Device Manager** by searching it on windows search bar. Now you will see the connected adapter under **Ports (COM & LPT)**. Make a note of the serial port listed here. According to the below image, the serial port is **COM9**.

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/43.png"/>
</div>

**Step7.** Open the CAN software, click **Refresh** next to **COM** section, click the drop-down-menu and select the serial port according to the connected adapter. Keep the **COM bps** at default and click **Open**.

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/44.jpg"/>
</div>

**Step8.** Keep the **Mode** and **CAN bps** at default, change the **Type** to **Standard frame** and click **Set and Start**.

<div align="center">
  <img width ="350" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/45.png"/>
</div>

**Step9.** On reComputer Industrial, execute the following command to send a CAN signal to the PC:

```sh
cansend can0 123#abcdabcd
```

Now you will see the above signal received by the software as shown below

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/46.png"/>
</div>

**Step10.** On reComputer Industrial, execute the following command to wait for receiving CAN signals from the PC:

```sh
candump can0 &
```

**Step11.** On the CAN software, click **Send a single frame**:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/47.png"/>
</div>

Now you will see it received by reComputer Industrial as follows:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/50.png"/>
</div>

## Extension Port

The Extension Port includes a 40-pin extension header and a 12-pin control and UART header, providing versatile connectivity options for peripherals and communication interfaces.

40-Pin Extension Header

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40pin3.jpg"/>
</div>

The 40-Pin Extension Header is a versatile expansion interface that provides various functions such as GPIO, I2C, SPI, and UART, making it convenient for connecting sensors, peripherals, or other modules.

### Usage Instruction
**Enable 40-Pin Header:**
  ```bash
  sudo /opt/nvidia/jetson-io/jetson-io.py
  ```
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_2.png"/>

</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/40_3.png"/>
</div>

Save and reboot.

**Configure the uncontrolled GPIO through the Overlay configuration:**

**Step 1.** Download and extract the [overlay package](https://drive.weixin.qq.com/s?k=AGEAZwfLABEmqim3hXAXcApwZFAKM) to your jetson device.

**Step 2.** Copy build.sh and gpio-overlay.dts to Jetson.

**Step 3.** Run sudo ./build.sh.

**Step 4.** Run sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "seeed gpio config Overlay".

:::note
This needs to be executed only once and won't be needed to be run subsequently.

:::

```bash
cd overlay/
ls -l
#total 16
#-rwxrwxr-x 1 seeed seeed  147 Sep  9 07:33 build.sh
#-rw-r--r-- 1 root  root  1353 Sep  9 07:36 gpio-overlay.cpp.dts
#-rw-r--r-- 1 root  root  1214 Sep  9 07:36 gpio-overlay.dtbo
#-rw-rw-r-- 1 seeed seeed 1879 Sep  9 07:35 gpio-overlay.dts
sudo ./build.sh
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "seeed gpio config Overlay"
#Modified /boot/extlinux/extlinux.conf to add following DTBO entries:
#/boot/gpio-overlay.dtbo
#Reboot system to reconfigure.

```
The following are command examples for operating GPIO pins using the gpiod toolkit.

**Step 1.** Install gpiod:
  ```bash
  sudo apt-get install gpiod
  ```
**Step 2.** Find pin number:
  ```bash
  sudo gpiofind PH.00
  ```
**Step 3.** Set pin high:
  ```bash
  sudo gpioset --mode=wait 0 43=1
  ```
**Step 4.** Set pin low:
  ```bash
  sudo gpioset --mode=wait 0 43=0
  ```
**Step 5.** Read input:
  ```bash
  gpioget 0 4
  ```

GPIO Control Script Example
```bash
#!/bin/bash

# GPIO Control Script
# Usage:
#   gpio_ctrl.sh <pin_name> <command>
# Commands:
#   get    - Read the current pin level
#   set    - Drive the pin high
#   clear  - Drive the pin low

# Parameter validation
if [ $# -ne 2 ]; then
    echo "Usage: $0 <pin_name> <command>"
    echo "Commands:"
    echo "  get    - Read pin state"
    echo "  set    - Set to high level"
    echo "  clear  - Set to low level"
    exit 1
fi

# Map and parse arguments
PIN_NAME=$1
COMMAND=$2

# Locate the GPIO
GPIO_INFO=$(gpiofind "$PIN_NAME" 2>/dev/null)
if [ -z "$GPIO_INFO" ]; then
    echo "Hardware alert: GPIO pin $PIN_NAME not found"
    exit 1
fi

# Split info into chip and offset
GPIO_CHIP=$(echo "$GPIO_INFO" | cut -d' ' -f1 | tr -d 'gpiochip')
GPIO_OFFSET=$(echo "$GPIO_INFO" | awk '{print $2}')

# Execute command
case $COMMAND in
    "get")
        gpioget $GPIO_CHIP $GPIO_OFFSET
        ;;
    "set")
        echo "Setting $PIN_NAME to high level..."
        gpioset --mode=wait $GPIO_CHIP $GPIO_OFFSET=1
        ;;
    "clear")
        echo "Setting $PIN_NAME to low level..."
        gpioset --mode=wait $GPIO_CHIP $GPIO_OFFSET=0
        ;;
    *)
        echo "Error: Invalid command. Please use get, set, or clear."
        exit 1
        ;;
esac

```
12-Pin Control and UART Header

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/12pin2.jpg"/>
</div>

The 12-Pin Control and UART Header provides essential control signals and UART communication interfaces for connecting and managing external devices.


## HDMI
reComputer Super is equipped with an HDMI 2.1 Type A port, which supports a resolution of 7680x4320. This allows for ultra-high-definition video output.


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
