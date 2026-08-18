---
description: Hardware and interface usage for reComputer Rugged J401
title: reComputer Rugged J401 Hardware and Interface Usage
keywords:
  - reComputer Rugged
  - reComputer Rugged J401
  - IP66
  - Jetson
  - hardware interface
image: https://files.seeedstudio.com/wiki/rugged_J401/interface/1.png
slug: /ai_robotics_recomputer_rugged_j401_hardware_and_interface_usage
sku: 100046979,100002634
last_update:
  date: 08/14/2026
  author: Dongxu Jin
createdAt: '2026-08-14'
updatedAt: '2026-08-14'
url: https://wiki.seeedstudio.com/ai_robotics_recomputer_rugged_j401_hardware_and_interface_usage/
---

# reComputer Rugged J401 Hardware and Interface Usage

This wiki introduces the various hardware and interfaces of reComputer Rugged J40 and explains how to use them to expand your project ideas. Most interfaces on the reComputer Rugged J40 use M12 connectors, providing IP66-rated water and dust resistance as well as excellent vibration resistance. This makes it suitable for long-term deployment in harsh outdoor environments, such as onboard vessels and in port monitoring systems.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/1.png" alt="Image" width={800} height="auto" /></p>

# Hardware Interface Overview

## Power

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/2.jpg" alt="Image" width={800} height="auto" /></p>

reComputer Rugged J401 is equipped with a M12 A-code DC 19-48V power interface, compatible with a wide voltage input range,making it suitable for various power supply environments.The interface definition is shown in the table below.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/3.png" alt="Image" width={400} height="auto" /></p>

|Pin|Usage|Type|Wire Color|
|---|---|---|---|
|1|DC Power In|Power|Brown|
|2|||White|
|3|Ground|Ground|Blue|
|4|||Black|

## Display

Remove the two screws securing the waterproof side cover and open it to access the HDMI 2.1 port, which provides high-quality display output.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/4.jpg" alt="Image" width={800} height="auto" /></p>

## M.2 Key M for SSD and M.2 Key E for Wi-Fi and Bluetooth

The reComputer Rugged J401 features a M.2 Key E interface, through which you can expand the device's Bluetooth and Wi-Fi capabilities.We recommend using the Intel Dual Band RTL8822CE Wireless NIC.

M.2 Key M is an interface designed for high-speed solid-state drives (SSDs), providing ultra-fast data transfer speeds, ideal for high-performance applications.

The interface location is shown in the figure below.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/5.jpg" alt="Image" width={800} height="auto" /></p>

### **Usage Instruction**

If you want to remove the included SSD and install a new one, you need to ensure that your SSD meets the following two conditions:

- Support the **M.2 Key M slot with x4 PCIe Gen3** interface.

- Conform to the **2242** size specification.



Open the terminal in Jetson device and enter the following command to test the SSD's read and write speed.

```Bash
sudo dd if=/dev/zero of=tempfile bs=1M count=1024 conv=fdatasync
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/6.png" alt="Image" width={800} height="auto" /></p>

Please run `sudo rm tempfile` command to delete the cache files after the test is complete.

After installing the Wi-Fi module and powering on the device, we can configure the device's Wi-Fi and Bluetooth settings.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/7.gif" alt="Image" width={800} height="auto" /></p>

Of course, we can also check the device's operating status using the following commands.

```Bash
ifconfig
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/8.png" alt="Image" width={800} height="auto" /></p>

```Bash
bluetoothctl
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/9.png" alt="Image" width={800} height="auto" /></p>

## M.2 Key B for 4G/5G Module

The M.2 Key B slot supports 4G/5G cellular modules with Nano SIM card holder.

### Hardware Connection

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/10.png" alt="Image" width={800} height="auto" /></p>

### Usage Instruction

**Step 1.** Check Hardware Recognition

```Bash
lsusb 
```

This command displays a list of all USB devices connected to the system, along with their manufacturer (ID), type, and other information. For example, the output might show a device from Quectel Wireless Solutions Co., Ltd. EM12-G, indicating that the 5G module is present.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/11.png" alt="Image" width={800} height="auto" /></p>

**Step 2.** Confirm Driver Loading

It's essential to ensure that the option driver, which is required for the 5G module, is loaded. We can use the lsmod command to check.

```Bash
lsmod | grep option 
```

If the option driver is loaded successfully, relevant information about the driver will be displayed in the output.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/12.png" alt="Image" width={800} height="auto" /></p>

**Step 3.** Configure ModemManager

ModemManager is a tool for managing modem devices, and it needs to be installed and restarted.

```Bash
sudo apt install modemmanager 
sudo systemctl restart ModemManager 
```

The apt install command is used to install the ModemManager package, while systemctl restart restarts the ModemManager service to ensure that the new settings take effect.

**Step 4.** Verify Module Identification

We can use the mmcli -L command to check if the ModemManager can correctly identify the 5G module.

```Bash
mmcli -L 
```

If the 5G module is recognized, an output similar to /org/freedesktop/ModemManager1/Modem/0 will be displayed, indicating the path to the detected modem device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/13.png" alt="Image" width={800} height="auto" /></p>

**Step 5.** Set the APN

APN (Access Point Name) is crucial for connecting a mobile device to the network.We'll use the nmcli command to create a bearer profile. Taking China Mobile as an example, we can create a configuration file with the following commands:

```Bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

This command adds a new GSM (Global System for Mobile Communications) type connection, specifying the APN as "CMNET" and using automatic IPv4 configuration.

**Step 6.** Activate the Connection

After creating the bearer profile, we need to activate the connection.

```Bash
sudo nmcli con up "gsm" 
```

This command activates the GSM connection, and if successful, a confirmation message will be displayed.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/14.png" alt="Image" width={800} height="auto" /></p>

**Step 7.** Re-verify Module Identification

Run the mmcli -L command again to ensure that the module remains recognized after configuring the APN.

```Bash
mmcli -L 
```

**Step 8.** Check Module Status

Finally, we can use the mmcli -m 0 command to view detailed information about the module, such as IP allocation, carrier, and network connection status.

```Bash
mmcli -m 0 
```

This command provides comprehensive details about the 5G module, including its manufacturer, model, supported and current network technologies, device status, and connected network operators.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/15.png" alt="Image" width={800} height="auto" /></p>

## Ethernet

The reComputer Rugged J401 provides 1x standard Gigabit Ethernet (10/100/1000M) RJ45 port (J35) and 4x Gigabit PSE (Power Sourcing Equipment) RJ45 ports (J36–J39). The standard Gigabit port is used for general network connectivity. The PSE ports support IEEE 802.3af/at standards, enabling power delivery over Ethernet to connected devices such as IP cameras and wireless access points, with a maximum output of 15.4W per port (802.3af). This makes it ideal for industrial, AMR, and outdoor edge computing applications, eliminating the need for separate power cabling. All Gigabit ports are derived from the PCIe controller within the Jetson Orin module and support 10/100/1000M auto-negotiation.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/16.jpg" alt="Image" width={800} height="auto" /></p>

## USB

The reComputer Rugged J401 provides 4x USB 3.2 Type-A ports (via an internal USB 3.1 Gen1 hub, supporting up to 5Gbps data rates for connecting high-speed peripherals, storage devices, or cameras) and 1x USB 2.0 Type-C debug port (which functions as a serial console for accessing system logs, debugging boot issues, and performing firmware updates).

### USB-A Speed test

Create a script to test USB device speed:

```Bash
vim test_usb.sh
```

Paste the following content:

```Bash
cat <<'EOF' | sudo tee test_usb.sh >/dev/null
#!/bin/bash
set -e

MOUNT_POINT="$1"
TEST_FILE="$MOUNT_POINT/test_usb_speed.bin"

if [ -z "$MOUNT_POINT" ]; then
  echo "Usage: $0 <mount_point>"
  echo "Example: $0 /media/seeed/USB"
  exit 1
fi

if [ ! -d "$MOUNT_POINT" ]; then
  echo "Error: $MOUNT_POINT is not a directory"
  exit 1
fi

echo "Write test..."
dd if=/dev/zero of="$TEST_FILE" bs=1M count=2048 conv=fdatasync status=progress

echo
echo "Drop caches..."
sync
echo 3 | sudo tee /proc/sys/vm/drop_caches >/dev/null

echo "Read test..."
dd if="$TEST_FILE" of=/dev/null bs=1M count=2048 status=progress

echo
echo "Cleaning up..."
rm -f "$TEST_FILE"
EOF
```

Press Esc to exit Insert mode, then type `:w` and press Enter to save the script, and then exit the process.

Make the script executable and test:

```Bash
sudo chmod +x test_usb.sh
./test_usb.sh /mnt          # If your USB drive is mounted at /mnt
# Or
./test_usb.sh /media/usb    # If your USB drive is mounted at /media/usb
# Or
./test_usb.sh /path/to/your/usb/mount_point
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/17.png" alt="Image" width={800} height="auto" /></p>

### USB 2.0 Type-C port

Using this serial port, via the USB-C data cable, you can monitor the debugging information of input and output on the PC side.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/18.jpg" alt="Image" width={400} height="auto" /></p>

Install the Silicon Labs CP210x Universal Windows VCP Driver on Windows.

In Device Manager, locate and confirm the COM port assigned to the serial device

(COM8 in the screenshot).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/19.png" alt="Image" width={800} height="auto" /></p>

Run the following commend in PowerShell：

```PowerShell
#Choose your own serial port 
python -m serial.tools.miniterm COM8 115200
```

Log in with username and password.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/20.png" alt="Image" width={800} height="auto" /></p>

## RTC

The reComputer Rugged J401 includes a hardware RTC with battery backup for accurate timekeeping. 

### Hardware Connection

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/21.jpg" alt="Image" width={400} height="auto" /></p>

### Usage Instruction

**Step 1.** Connect an RTC battery as mentioned above.

**Step 2.** Turn on reComputer Rugged J401.

**Step 3.** On the Ubuntu Desktop, click the drop-down menu at the top right corner, navigate to `Settings > Date & Time`, connect to a network via an Ethernet cable and select **Automatic Date & Time** to obtain the date/ time automatically.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/22.png" alt="Image" width={800} height="auto" /></p>

If you have not connected to internet via Ethernet, you can manually set the date/ time here.

**Step 4.** Open a terminal window, and execute the below command to check the hardware clock time:

```Bash
cat /sys/devices/platform/bpmp/bpmp:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

**Step 5.** Disconnect the network connection and reboot the device. You will find that the system time has lost power but still functions normally.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/23.png" alt="Image" width={800} height="auto" /></p>

## CAN

> Testing and an introduction will be added once the documentation is complete.
> 
> 

## DI/DO

The DI/DO interfaces of reComputer Rugged J401 are integrated on the J47 2x10P connector, sharing the interface with CAN interfaces. They support 2-channel digital input and 2-channel digital output, featuring stable signal transmission and industrial-grade voltage adaptation, suitable for connecting digital sensors, relays, and other peripheral devices.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/24.png" alt="Image" width={500} height="auto" /></p>

### Hardware Connection

The corresponding DI/DO pins on the M12 interface are shown in the figure below.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/25.png" alt="Image" width={500} height="auto" /></p>

Digital Input (DI) /Digital Output(DO) Channels

### Usage instruction

#### Digital Output (DO) Operation

The DO interfaces adopt open-drain output. You can set the output level (high/low) via commands to control peripherals such as relays and LEDs.

Run the following command to enable the DO channel (output 12V, powered by the external pull-up resistor and 12V power supply):

```Markdown
# Enable DO_30V_1 (gpiochip0 106)
sudo gpioset --mode=wait 0 106=1

# Enable DO_30V_2 (gpiochip0 43)
sudo gpioset --mode=wait 0 43=1
```

Run the following command to disable the DO channel (output ~0V):

```PowerShell
# Disable DO_30V_1 (gpiochip0 106)
sudo gpioset --mode=wait 0 106=0

# Disable DO_30V_2 (gpiochip0 43)
sudo gpioset --mode=wait 0 43=0
```

DO Before Pulling High:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/26.png" alt="Image" width={800} height="auto" /></p>

DO After Pulling High:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/27.png" alt="Image" width={800} height="auto" /></p>

#### **Digital Input (DI) Operation**

Use the `gpioget` command to read the input level of the DI channel (return value `1` = high level, `0` = low level) and obtain the status of peripheral devices.

```PowerShell
# Read DI_12V_1 (gpiochip0 105) status
gpioget gpiochip0 105

# Read DI_12V_2 (gpiochip0 144) status
gpioget gpiochip0 144
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/28.png" alt="Image" width={400} height="auto" /></p>



## UART

The reComputer Rugged J401 is equipped with an independent UART interface (UART1) that support RS232, RS422, and RS485 communication modes, featuring stable signal transmission and wide compatibility with peripheral devices.

### Hardware Connection

UART Interface Channels

Switch between RS232, RS485, and RS422 modes by toggling the SW3 switch.

Note: When the switch is pressed down (ON), the bit is 0; When not pressed, the bit is 1

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/29.png" alt="Image" width={500} height="auto" /></p>

|Mode_0|Mode_1|Mode_2|Mode|Status|
|---|---|---|---|---|
|0|0|0|RS-422 Full Duplex|1T/1R RS-422|
|0|0|1|Pure RS-232|3T/5R RS-232|
|0|1|0|RS-485 Half Duplex|1T/1R RS-485, TX ENABLE <br />Low Active|
|0|1|1|RS-485 Half Duplex|1T/1R RS-485, TX ENABLE High Active|
|1|0|0|RS-422 Full Duplex|RS-422 with termination resistor|
|1|0|1|RS-232|1T/1R RS-232 co-exists with RS485 application without the need for the bus switch bus (for special usage)|
|1|1|0|RS-485|1T/1R RS-485 with termination resistor, TX ENABLE Low Active|
|1|1|1|Shutdown|All I/O pins are high impedance|



## SPI

### Hardware Connection

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/30.jpg" alt="Image" width={800} height="auto" /></p>

### Usage Instruction

Use Dupont wires to connect the core pins of the target SPI channel (take /dev/spidev0.0 as an example): Connect the MOSI pin to its MISO pin (realize data loopback transmission/reception).

The wiring diagram is as follows:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/31.jpg" alt="Image" width={500} height="auto" /></p>

**Step 1: Load SPI Kernel Module (Prerequisite)**

Before operating the SPI interface, ensure the `spidev` kernel module is loaded (the default system may preload it, but it is recommended to verify manually):

```Bash
sudo modprobe spidev
```

If the command is executed without error prompts, it means the module is loaded successfully; if the module is already loaded, the command will not return any information, which is a normal phenomenon.

**Step 2: View SPI Device Nodes**

Enter the following command in the terminal to view the device name mapped by the SPI interface of reComputer Rugged J401:

```Bash
ls /dev/spidev*
```

If no device node is displayed, it means the `spidev` module is not loaded successfully. Re-run `sudo modprobe spidev` and check the system log for troubleshooting.

**Step 3: Obtain and Compile the SPI Test Code**

Pull the `spidev-test` test code from GitHub and compile it:

```Bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

**Step 4: Run the SPI Test Program**

Enter the following command in the terminal to run the SPI test program (take `/dev/spidev2.0` as an example):

```Bash
sudo ./spidev_test -v -D /dev/spidev0.0 -s 100000 -p "Hello SPI"
```

**Step 5: Verify the Test Result**

After running the test command, you can observe the data transmission and reception status of the SPI0.0 interface in the terminal. The core output is as follows:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/32.png" alt="Image" width={800} height="auto" /></p>

> Key judgment standard: The TX (transmitted) data is consistent with the RX (received) data, indicating that the SPI loopback test is successful, and the SPI interface function is normal.
> 
> 

## **I2C**

The Rugged J401 provides an I2C interface via the J8 2x10 Pin connector, enabling easy connection of sensors and peripherals for system expansion.

### **Hardware Connection**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/33.png" alt="Image" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/34.jpg" alt="Image" width={500} height="auto" /></p>

Connect your I2C device to the I2C interface on the carrier board:

- Ground -> Ground (Pin 1)

- SDA -> SDA (Pin 16)

- SCL -> SCL (Pin 14)

- VCC -> 3V3 (Pin 20)

### **Usage Instruction**

**Step 1.** Install the I2C testing tools:

```Bash
sudo apt update
sudo apt-get install i2c-tools
```

**Step 2.** View the I2C bus mappings:

```Bash
i2cdetect -l
```

**Step 3.** Scan for devices on the I2C bus:

```Bash
sudo i2cdetect -y -r 1
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/rugged_J401/interface/35.png" alt="Image" width={500} height="auto" /></p>



## Resources

- [reComputer Rugged J40 Datasheet](#) *(coming soon)*
- [Linux_for_Tegra Source Code](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [NVIDIA Jetson Devices Comparison](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
