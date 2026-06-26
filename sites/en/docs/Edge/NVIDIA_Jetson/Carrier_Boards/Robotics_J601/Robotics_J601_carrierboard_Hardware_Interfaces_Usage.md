---
description: This wiki provides a comprehensive introduction to the hardware features and interface usage of the reComputer Jetson Robotics J601 carrier board. It covers detailed specifications, supported modules, setup instructions, and practical guides for using various interfaces such as M.2, Ethernet, USB, CAN, RS485/RS232, UART, I2C, I2S, GMSL2 camera expansion, 5G, and GPS, helping users quickly get started with robotics development on the J601 platform.
title: Interfaces Usage
tags:
  - J601-Robotics carrier board
  - Jetson
  - AGX Thor
  - Robotics
  - Interfaces Usage
  - Interfaces
  - Hardware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /recomputer_jetson_robotics_j601_interfaces_usage
sku: 100060965
last_update:
  date: 06/18/2026
  author: Zibo
createdAt: '2026-06-18'
updatedAt: '2026-06-18'
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Robotics J601 carrier board Hardware Interfaces Usage

The reComputer Robotics J601 is a high-performance robotics carrier board designed for the NVIDIA Jetson AGX Thor module, targeting advanced embodied AI and robotic control applications. Equipped with extensive connectivity options — including high-speed Ethernet, M.2 slots for 5G and Wi-Fi/BT modules, USB 3.2 ports, 4x CAN (with CAN FD support), RS-232/485, I2C, I2S, UART, GMSL2 expansion (up to 8 cameras), and wide-range DC input — it serves as a powerful robotic brain capable of processing complex data from various sensors.

Supporting frameworks like NVIDIA Isaac ROS, Hugging Face, PyTorch, and ROS 2/1, the reComputer Robotics J601 bridges large language model-driven decision-making with physical robotics control, such as motion planning and sensor fusion. Ideal for the rapid development of autonomous robots, it accelerates time-to-market with ready-to-use interfaces and optimized AI frameworks.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/thor.jpg"/>
</div>
## Interfaces Usage

The following will introduce the various interfaces of the Robotics J601 board and how to use them.

## USB

The Robotics J601 carrier board is equipped with multiple USB ports, including USB 3.2 Type-A ports (Host) for high-speed peripheral connectivity, one USB 3.0 Type-C port for flashing, and one USB 2.0 Type-C port for device mode/debugging.

### USB 3.2 Speed Test

Plug in a USB 3.0 flash drive and test its read/write speed. Note that actual speeds depend on the USB drive's own performance.

Create a test script:

```bash
vim test_usb_speed.sh
```

Paste the following content:

```bash
#!/bin/bash

echo "seeed" | sudo -S dd if=/dev/zero of=/dev/sda bs=1000M count=2 conv=fdatasync
sleep 1
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sleep 1
echo "seeed" | sudo -S dd if=/dev/sda of=/dev/null bs=1000M count=2
```

:::info
Replace `/dev/sda` with the actual device name of your USB drive. You can use `lsblk` to check.
:::

Make the script executable and run it:

```bash
chmod +x test_usb_speed.sh
./test_usb_speed.sh
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb_speed.PNG"/>
</div>

### USB 2.0 Type-C Debug Port

Using this serial port, via the USB-C data cable, you can monitor the debugging information of input and output on the PC side.

#### Windows

**Step 1.** Connect the J601 to the PC via a USB-C data cable.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb2.0_debug.PNG"/>
</div>


**Step2.** Downloaded the [CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads) on your PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**Step3.** Connect the PC via a USB data cable, extract the downloaded file and install driver on your PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**Step4.** Open Open the Device Manager on your Windows PC and check the COM port number assigned to the reComputer Super. It should appear under "Ports (COM & LPT)" as "Silicon Labs CP210x USB to UART Bridge (COMX)", where X is the COM port number.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/com4.png"/>
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
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug1.png"/>
</div>

**Step8.** Login your reComputer Super with the username and password.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug2.png"/>
</div>

#### Linux

**Step 1.** Connect the J601 to the Linux PC via a USB-C data cable.

**Step 2.** Find the serial device:

```bash
ls /dev/ttyUSB*
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/usb_debug2.PNG"/>
</div>

**Step 3.** Connect to the serial console:

```bash
screen /dev/ttyUSB0 -b 115200
```

You should now see the J601 serial console output and can log in with your username and password.

## GMSL

The Robotics J601 features a GMSL camera expansion header that supports up to **8 GMSL cameras** simultaneously, enabling multi-camera robotic vision applications.

### Supported GMSL Camera Models

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A
- [Orbbec Gemini 335Lg](https://www.seeedstudio.com/Orbbec-Gemini-335LG-3D-Camera-p-6541.html)

### Hardware Connection

Connect the GMSL expansion board to the camera expansion header on the J601 carrier board, then connect your GMSL cameras to the expansion board.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/GMSL_connect.png"/>
</div>

### Usage Instruction

:::note
Before enabling the GMSL functionality, please ensure that you have installed a JetPack version with the GMSL expansion board driver.
:::

**Step 1.** Install the video interface configuration tools:

```bash
sudo apt update
sudo apt install v4l-utils wmctrl
#example
media-ctl -d /dev/media0 --set-v4l2 '"ser_0_ch_0":1[fmt:YUYV8_1X16/1920x1080]'
media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_0":0[fmt:YUYV8_1X16/1920x1080]'

v4l2-ctl -d /dev/video0 -c sensor_mode=1

rm -f /tmp/gmsl0.yuyv; mkfifo /tmp/gmsl0.yuyv

v4l2-ctl -d /dev/video0 --stream-mmap=2 --stream-to=/tmp/gmsl0.yuyv >/tmp/gmsl0_v4l2.log 2>&1 &
gst-launch-1.0 -q filesrc location=/tmp/gmsl0.yuyv do-timestamp=true blocksize=4147200 ! rawvideoparse format=yuy2 width=1920 height=1080 framerate=30/1 ! queue max-size-buffers=1 max-size-bytes=0 max-size-time=0 leaky=downstream ! videoconvert ! videoscale method=0 ! video/x-raw,width=892,height=489 ! xvimagesink sync=false async=false max-lateness=0 qos=false force-aspect-ratio=true
```



<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gmsl_camera.png"/>
</div>



<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gmsl.png"/>
</div>

### Use the Camera of Gemini 335Lg

```bash
# Download the Orbbec Gemini 335Lg visualization tool
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.8/OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
# Unzip and run the UI tool
unzip OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
cd OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64
./OrbbecViewer
```

The first time you turn it on, you might need to update the firmware. Opening the data stream, you can view the video from the camera.

## I2S

The Robotics J601 provides an I2S audio interface with amplifier output and microphone input for audio playback and recording.

### Hardware Connection

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2s_connect.png"/>
</div>

### Usage Instruction

**Step 1.** Configure the I2S2 audio mux and test tone output:

```bash
# Configure I2S2 mux
amixer -c 2 sset "I2S2 Mux" "ADMAIF1"

# Play a 440Hz sine wave test tone (one iteration)
speaker-test -D hw:2,0 -c 2 -r 48000 -t sine -f 440 -l 1
```

:::info
The `-l 1` flag means the test tone will play only once and then stop.
:::

**Step 2.** Play your own audio file:

```bash
aplay -D hw:2,0 -c 2 -r 48000 your_audio_file.wav
```

:::note
Replace `your_audio_file.wav` with the path to your actual audio file. Ensure the audio file format matches the specified sample rate (48000 Hz) and channel count (2).
:::

## UART

The Robotics J601 provides a UART interface via a standard JST header for serial communication with external devices.

### Hardware Connection

For UART communication, connect the USB-to-TTL tool according to the following wiring:

- TX → RX
- RX → TX
- GND → GND

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/uart_connect.png"/>
</div>

### Usage Instruction

Connect the USB-to-TTL tool to the Robotics J601 UART port and the PC, then open the serial port tool on the PC side and set the baud rate to **115200**.

You can use a simple Python script for serial communication testing:

```python
import serial
import time

ser = serial.Serial('/dev/ttyTHS1', 115200, timeout=1)
ser.write(b'Hello Jetson!\n')
while True:
    if ser.in_waiting:
        data = ser.readline()
        print("get:", data.decode('utf-8').strip())
    time.sleep(0.1)

ser.close()
```

Run the script on the Jetson device:

```bash
python3 uart_test.py
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/uart_connect.png"/>
</div>

## RGB

<details>
<summary>test_rgb.sh</summary>

```bash
#!/bin/bash

# ==============================================================================
# Script Name: test_rgb.sh
# Target Platform: Seeed reComputer J601 (Jetson)
# Description: Automatically tests RGB LEDs by lighting up Red, Green, Blue, 
#              and White colors sequentially for 1 second each.
# Usage: sudo ./test_rgb.sh
# ==============================================================================

# Define LED paths
LED_DIR="/sys/class/leds"
RED="$LED_DIR/red/brightness"
GREEN="$LED_DIR/green/brightness"
BLUE="$LED_DIR/blue/brightness"

# Check if running as root (sysfs write access requires root privileges)
if [ "$EUID" -ne 0 ]; then
    echo "Error: Please run this script with sudo!"
    echo "Example: sudo $0"
    exit 1
fi

# Check if the hardware paths exist
if [ ! -d "$LED_DIR/red" ] || [ ! -d "$LED_DIR/green" ] || [ ! -d "$LED_DIR/blue" ]; then
    echo "Error: RGB LED hardware paths not found. Please check your driver or device model."
    exit 1
fi

# Helper function: Control LED states
# Arguments: set_leds <Red(0/1)> <Green(0/1)> <Blue(0/1)>
set_leds() {
    echo "$1" > "$RED"
    echo "$2" > "$GREEN"
    echo "$3" > "$BLUE"
}

echo "========================================"
echo "         Starting Jetson RGB LED Test    "
echo "========================================"

# 1. Initialization: Turn off all LEDs
echo "-> Initializing: Turning off all LEDs"
set_leds 0 0 0
sleep 0.5

# 2. Red LED on for 1 second
echo "-> [ON] Red Light"
set_leds 1 0 0
sleep 1

# 3. Green LED on for 1 second
echo "-> [ON] Green Light"
set_leds 0 1 0
sleep 1

# 4. Blue LED on for 1 second
echo "-> [ON] Blue Light"
set_leds 0 0 1
sleep 1

# 5. Mixed White LED on for 1 second (Red + Green + Blue mixed)
echo "-> [ON] White Light (RGB Mixed)"
set_leds 1 1 1
sleep 1

# 6. Test completed, turn off all LEDs
echo "-> Test completed: Turning off all LEDs"
set_leds 0 0 0

echo "========================================"
echo "             LED Test Ended             "
echo "========================================"
```

</details>

```bash
sudo chmod +x test_rgb.sh
sudo ./test_rgb.sh
```
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/grb.gif"/>
</div>

## I2C

The Robotics J601 provides I2C interfaces through standard JST headers, enabling easy connection of sensors and peripherals for system expansion.

### Hardware Connection

Connect your I2C device to the I2C interface on the carrier board:

- Power → Power
- SDA → SDA
- SCL → SCL
- Ground → Ground

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_connect.png"/>
</div>

### Usage Instruction

**Step 1.** Install the I2C testing tools:

```bash
sudo apt update
sudo apt-get install i2c-tools
```

**Step 2.** View the I2C bus mappings:

```bash
i2cdetect -l
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c1.PNG"/>
</div>

**Step 3.** Scan for devices on the I2C bus:

```bash
sudo i2cdetect -y -r 1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c2.png"/>
</div>

**Step 4.** Read a register from an I2C device. For example, to read register `0x00` from a device at address `0x58` on bus `i2c-1`:

```bash
sudo i2cget -y 1 0x58 0x00
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/i2c_c3.png"/>
</div>

## CAN

CAN (Controller Area Network) is a robust vehicle bus standard that enables microcontrollers and devices to communicate with each other without a host computer. The Robotics J601 provides **4 CAN interfaces** (CAN0, CAN1, CAN2, CAN3) via JST connectors, all supporting CAN FD mode.

### 120Ω Termination Resistor Control

Each CAN interface has a software-controlled 120Ω termination resistor. The GPIO mappings are as follows:

| Interface | GPIO Chip | GPIO Line | Control Name |
| --- | --- | --- | --- |
| CAN0_120R_EN_3V3 | 3 | 0 | CAN0 termination |
| CAN1_120R_EN_3V3 | 3 | 1 | CAN1 termination |
| CAN2_120R_EN_3V3 | 3 | 2 | CAN2 termination |
| CAN3_120R_EN_3V3 | 3 | 3 | CAN3 termination |
| RS485_120R_EN_3V3 | 3 | 4 | RS485 termination |

You can view the corresponding GPIO lines using:

```bash
gpioinfo
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gpioinfo.PNG"/>
</div>

### CAN Classic Communication

Here we demonstrate data communication between CAN0 and CAN1.

**Step 1.** Install the CAN utilities:

```bash
sudo apt update
sudo apt install can-utils -y
```

**Step 2.** Configure the CAN interfaces:

```bash
sudo ip link set down can0
sudo ip link set down can1

sudo ip link set can0 type can bitrate 500000
sudo ip link set can1 type can bitrate 500000

sudo ip link set up can0
sudo ip link set up can1
```

**Step 3.** Open a new terminal to receive data on CAN1, and send data from CAN0:

```bash
# In a new terminal, listen on CAN1
candump can1

# In another terminal, send data from CAN0
cansend can0 123#DEADBEEF
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c1.png"/>
</div>

### CAN FD Mode

CAN FD (Flexible Data-Rate) extends the classic CAN protocol to support higher data rates and larger payloads (up to 64 bytes).

**Step 1.** Configure CAN0 and CAN1 for FD mode:

```bash
sudo ip link set down can0
sudo ip link set down can1

sudo ip link set can0 type can bitrate 500000 dbitrate 2000000 fd on
sudo ip link set can1 type can bitrate 500000 dbitrate 2000000 fd on

sudo ip link set can0 txqueuelen 2000
sudo ip link set can1 txqueuelen 2000

sudo ip link set up can0
sudo ip link set up can1
```

**Step 2.** Open a new terminal and test CAN FD communication:

```bash
# Listen on CAN1 with extended output
candump can1 -x

# Test 1: Send a 16-byte frame with BRS active
cansend can0 5AA##111223344556677889900AABBCCDD

# Test 2: Send a full 64-byte payload frame with BRS active
cansend can0 7DF##1101020203030404050506060707080809090A0A0B0B0C0C0D0D0E0E0F0F0111122223333444455556666777788889999AAAABBBBCCCCDDDDEEEEFFFF
```

:::info
- `5AA` / `7DF` is the CAN ID
- `##` indicates a CAN FD frame
- The digit after `##` is the BRS (Bit Rate Switch) flag: `1` = BRS active
- The following is the data payload (up to 128 hexadecimal characters for 64 bytes)
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c2.png"/>
</div>

### CAN Comprehensive Test Script

The following script performs a complete CAN FD test including dependency check, interface configuration, basic communication verification, and a 10-second stress test.

Create the test script:

```bash
vim can_test.sh
```

Paste the following content:

<details>
<summary>Click to expand CAN test script</summary>

```bash
#!/bin/bash

# Color output definitions
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Assign interfaces from arguments, default to can0 and can1 if empty
TX_DEV=${1:-can0}
RX_DEV=${2:-can1}

echo -e "${YELLOW}=== Jetson $TX_DEV <-> $RX_DEV Comprehensive Test Script ===${NC}"
echo -e "Note: Please ensure ${TX_DEV}_H -> ${RX_DEV}_H and ${TX_DEV}_L -> ${RX_DEV}_L are physically wired.\n"

# 1. Dependency Check
if ! command -v candump &> /dev/null; then
    echo -e "${YELLOW}[1/5] Installing can-utils...${NC}"
    sudo apt update && sudo apt install can-utils -y
else
    echo -e "${GREEN}[1/5] can-utils is already installed.${NC}"
fi

# 2. Reset and Configure Interfaces (Arbitration: 500K, Data: 2M, FD & BRS enabled)
echo -e "${YELLOW}[2/5] Configuring $TX_DEV and $RX_DEV (CAN FD Mode)...${NC}"
for dev in "$TX_DEV" "$RX_DEV"; do
    # Check if the interface exists in the system
    if ! ip link show "$dev" &> /dev/null; then
        echo -e "${RED}[ERROR] Interface $dev does not exist. Please check your spelling or hardware.${NC}"
        exit 1
    fi
    sudo ip link set down "$dev" 2>/dev/null
    sudo ip link set "$dev" type can bitrate 500000 dbitrate 2000000 fd on
    # Increase transmit queue length to prevent packet loss under heavy load
    sudo ip link set "$dev" txqueuelen 2000
    sudo ip link set up "$dev"
done
sleep 1

# 3. Basic Communication Test (Classic CAN Frame)
echo -e "${YELLOW}[3/5] Starting Basic Communication Test...${NC}"
# Listen for 1 frame on the receiver interface in the background and dump to a temp file
candump "$RX_DEV" -n 1 > /tmp/can_test_rx.log &
DUMP_PID=$!
sleep 0.5

# Send a single classic CAN frame from the transmitter interface
cansend "$TX_DEV" 123#DEADBEEF

# Wait for the background dump process to finish
wait $DUMP_PID 2>/dev/null

# Validate basic data
if grep -q "DE AD BE EF" /tmp/can_test_rx.log; then
    echo -e "${GREEN}[PASS] Basic communication successful! Data verified.${NC}"
else
    echo -e "${RED}[FAIL] Basic communication failed! No data received or data corrupted.${NC}"
    tail -n 2 /tmp/can_test_rx.log 2>/dev/null
    exit 1
fi

# 4. CAN FD High-Load Stress Test
echo -e "${YELLOW}[4/5] Starting CAN FD Stress & Stability Test (10 Seconds)...${NC}"
echo -e "--> $TX_DEV generating high-frequency 64-byte BRS random data stream to $RX_DEV..."

# Flood the bus using cangen (-f for FD, -b for BRS, -g 1 for 1ms interval)
cangen "$TX_DEV" -f -b -g 1 >/dev/null 2>&1 &
GEN_PID=$!

# Countdown timer
for i in {10..1}; do
    echo -ne "Remaining Time: ${i}s \r"
    sleep 1
done
echo ""

# Stop data generation
kill $GEN_PID 2>/dev/null
wait $GEN_PID 2>/dev/null
sleep 1

# 5. Analyze and Print Performance Report
echo -e "${YELLOW}[5/5] Generating Performance Report...${NC}"
echo "--------------------------------------------------"
echo -e "${YELLOW}$RX_DEV Receiver Statistics:${NC}"
# Extract packets and hardware error counters
ip -details -statistics link show "$RX_DEV" | grep -E -A 3 "(RX:|errors)"
echo "--------------------------------------------------"

# Smart assessment based on RX errors
ERRORS=$(ip -details -statistics link show "$RX_DEV" | grep -A 1 "RX: errors" | tail -n 1 | awk '{print $1}')
if [ "$ERRORS" ] && [ "$ERRORS" -gt 0 ]; then
    echo -e "${RED}[WARNING] Test completed, but $RX_DEV encountered $ERRORS errors/dropped packets during stress testing. Check your wiring and termination resistors!${NC}"
else
    echo -e "${GREEN}[SUCCESS] CAN FD stress test passed! Zero packet loss, zero hardware errors on $RX_DEV. Excellent board performance.${NC}"
fi

# Cleanup and tear down interfaces
for dev in "$TX_DEV" "$RX_DEV"; do sudo ip link set down "$dev"; done
rm -f /tmp/can_test_rx.log
```

</details>

Make the script executable and run it to test any two CAN interfaces:

```bash
chmod +x can_test.sh
./can_test.sh can0 can1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/can_c3.png"/>
</div>



# RS485

```bash
#Jetson 
sudo stty -F /dev/ttyAMA10 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
sudo python3 -c 'import os,fcntl,struct; fd=os.open("/dev/ttyAMA10",os.O_RDWR|os.O_NOCTTY); fcntl.ioctl(fd,0x542F,struct.pack("IIIIIIII",3,0,20,0,0,0,0,0)); out=bytearray(32); fcntl.ioctl(fd,0x542E,out,True); print(struct.unpack("IIIIIIII",out)); os.close(fd)'
#(3, 0, 20, 0, 0, 0, 0, 0)

#PC
sudo stty -F /dev/ttyUSB0 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
#jetson
sudo cat /dev/ttyAMA10
#PC
echo "hello from pc" | sudo tee /dev/ttyUSB0 >/dev/null

#PC 收
sudo cat /dev/ttyUSB0
#jetson
echo "hello from jetson" | sudo tee /dev/ttyAMA10 >/dev/null
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/485-2.png"/>
</div>



## DB9 (RS232 / RS422 / RS485)

The Robotics J601 provides one software-selectable DB9 serial interface. The DB9 port is connected to `/dev/ttyAMA9` on the Jetson system and can be configured as RS232, RS422, or RS485 by setting the SW3 DIP switch.

### Hardware Connection

The function of each DB9 pin depends on the selected communication mode. Refer to the table and the connector diagram below before wiring the adapter.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/db9_config.png"/>
</div>

| DB9 pin | RS232 mode | RS422 mode | RS485 mode |
| --- | --- | --- | --- |
| 1 | - | TXD- (B) | Data- (B) |
| 2 | RXD | TXD+ (A) | Data+ (A) |
| 3 | TXD | RXD+ (A) | - |
| 4 | - | RXD- (B) | - |
| 5 | GND | GND | GND |
| 6 | - | - | - |
| 7 | RTS | - | - |
| 8 | CTS | - | - |
| 9 | - | - | - |

:::tip
For RS485 wiring, connect the USB-RS485 adapter `A/D+` to DB9 pin 2, `B/D-` to DB9 pin 1, and `GND` to DB9 pin 5. Some USB-RS485 adapters label A/B in the opposite way. If the Jetson receives random bytes while the PC is not sending, swap A and B and test again.
:::

### Select the DB9 Mode with SW3

SW3 pulls each mode pin low when the switch is ON. In other words, **ON = 0** and **OFF = 1**.

| Mode | Schematic MODE value (MODE_0 MODE_1 MODE_2) | SW3-1 (MODE_0) | SW3-2 (MODE_1) | SW3-3 (MODE_2) | SW3-4 (SLEW) |
| --- | --- | --- | --- | --- | --- |
| RS232 | `001` | ON | ON | OFF | ON recommended |
| RS422 | `000` | ON | ON | ON | ON recommended |
| RS422 | `100` | OFF | ON | ON | ON recommended |
| RS485 | `010` | ON | OFF | ON | ON recommended |
| RS485 | `110` | OFF | OFF | ON | ON recommended |

:::note
For low-speed tests such as 115200 bps, keeping SW3-4 (SLEW) ON is recommended. This limits the driver slew rate and helps reduce noise on longer cables.
:::

### Enable the DB9 Transceiver

Before testing the DB9 port, keep the DB9 transceiver enabled from a dedicated Jetson terminal:

```bash
sudo gpioset --mode=wait gpiochip3 6=0
```

Keep this command running during the test. Press **Enter** in this terminal only after you finish testing.

### RS232 Mode Test

Use a USB-to-RS232 adapter. If the adapter exposes separate wires, connect adapter TXD to DB9 pin 2 (RXD), adapter RXD to DB9 pin 3 (TXD), and adapter GND to DB9 pin 5 (GND). If you use a DB9-to-DB9 cable between two DTE devices, a null-modem cable or cross connection is usually required.

**Step 1.** Set SW3 to RS232 mode.

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| ON | ON | OFF | ON |

**Step 2.** Configure the Jetson DB9 port:

```bash
sudo stty -F /dev/ttyAMA9 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

**Step 3.** Configure the PC serial port.

On Linux:

```bash
PC_DEV=/dev/ttyUSB0
# If your adapter appears as /dev/ttyACM0, use:
# PC_DEV=/dev/ttyACM0

sudo stty -F $PC_DEV 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

On macOS:

```bash
ls /dev/cu.* | grep -i usb

PC_DEV=/dev/cu.usbserial-0001
stty -f $PC_DEV 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

For an interactive terminal on macOS, you can also use:

```bash
screen $PC_DEV 115200
```

Press **Ctrl+A**, then **K**, then **Y** to exit `screen`.

**Step 4.** Test PC to Jetson.

Run this on the Jetson:

```bash
sudo cat /dev/ttyAMA9
```

Then send data from the PC.

Linux PC:

```bash
echo "hello from pc to db9 rs232" | sudo tee $PC_DEV >/dev/null
```

macOS:

```bash
echo "hello from mac to db9 rs232" > $PC_DEV
```

**Step 5.** Test Jetson to PC.

Run this on the PC.

Linux PC:

```bash
sudo cat $PC_DEV
```

macOS:

```bash
cat $PC_DEV
```

Then send data from the Jetson:

```bash
echo "hello from jetson db9 rs232" | sudo tee /dev/ttyAMA9 >/dev/null
```

### RS485 Mode Test

Use a USB-to-RS485 adapter. Connect adapter `A/D+` to DB9 pin 2, adapter `B/D-` to DB9 pin 1, and adapter `GND` to DB9 pin 5.

**Step 1.** Set SW3 to one of the RS485 modes.

Recommended setting:

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| OFF | OFF | ON | ON |

Alternative setting:

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| ON | OFF | ON | ON |

**Step 2.** Configure the Jetson DB9 port and enable Linux RS485 mode:

```bash
sudo stty -F /dev/ttyAMA9 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
sudo python3 -c 'import os,fcntl,struct; fd=os.open("/dev/ttyAMA9",os.O_RDWR|os.O_NOCTTY); fcntl.ioctl(fd,0x542F,struct.pack("IIIIIIII",5,0,20,0,0,0,0,0)); out=bytearray(32); fcntl.ioctl(fd,0x542E,out,True); print(struct.unpack("IIIIIIII",out)); os.close(fd)'
```

The expected RS485 configuration output is:

```bash
(5, 0, 20, 0, 0, 0, 0, 0)
```

**Step 3.** Configure the PC serial port.

Linux PC:

```bash
PC_DEV=/dev/ttyUSB0
# If your adapter appears as /dev/ttyACM0, use:
# PC_DEV=/dev/ttyACM0

sudo stty -F $PC_DEV 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

macOS:

```bash
ls /dev/cu.* | grep -i usb

PC_DEV=/dev/cu.usbserial-0001
stty -f $PC_DEV 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

**Step 4.** Test PC to Jetson.

Run this on the Jetson:

```bash
sudo cat /dev/ttyAMA9
```

Then send data from the PC.

Linux PC:

```bash
echo "hello from pc to db9 rs485" | sudo tee $PC_DEV >/dev/null
```

macOS:

```bash
echo "hello from mac to db9 rs485" > $PC_DEV
```

**Step 5.** Test Jetson to PC.

Run this on the PC.

Linux PC:

```bash
sudo cat $PC_DEV
```

macOS:

```bash
cat $PC_DEV
```

Then send data from the Jetson:

```bash
echo "hello from jetson db9 rs485" | sudo tee /dev/ttyAMA9 >/dev/null
```

### RS422 Mode Test

Use a USB-to-RS422 adapter. Connect adapter TXD+ to DB9 pin 3 (RXD+), TXD- to DB9 pin 4 (RXD-), RXD+ to DB9 pin 2 (TXD+), RXD- to DB9 pin 1 (TXD-), and GND to DB9 pin 5 if the adapter provides a GND terminal.

**Step 1.** Set SW3 to one of the RS422 modes.

Recommended setting:

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| ON | ON | ON | ON |

Alternative setting:

| SW3-1 | SW3-2 | SW3-3 | SW3-4 |
| --- | --- | --- | --- |
| OFF | ON | ON | ON |

**Step 2.** Configure the Jetson DB9 port:

```bash
sudo stty -F /dev/ttyAMA9 115200 cs8 -cstopb -parenb -ixon -ixoff -crtscts raw -echo
```

**Step 3.** Configure the PC serial port as 115200 8N1 with no flow control, then test both directions using the same `cat` and `echo` method shown in the RS232 section.

### Troubleshooting

- If `/dev/ttyAMA9` cannot be opened, close other tools such as `cat`, `minicom`, or test scripts that may already be using the port.
- If RS485 receives random bytes while the PC is not sending anything, the A/B lines are usually reversed or GND is not connected. Swap A/B and keep DB9 pin 5 connected to adapter GND.
- If PC-to-Jetson works but Jetson-to-PC does not, make sure `sudo gpioset --mode=wait gpiochip3 6=0` is still running in a separate Jetson terminal.
- If RS485 still does not transmit from Jetson to PC, the RS485 direction polarity may be inverted for the selected mode. Try the same RS485 ioctl command with flags `3` instead of `5`, and then test Jetson-to-PC again.
- On macOS, use `/dev/cu.*` devices, for example `/dev/cu.usbserial-0001`. Do not use Linux-only commands such as `stty -F` or Linux RS485 ioctl commands on macOS.
- For RS485, the USB-RS485 adapter usually handles half-duplex direction switching on the PC side. Only the Jetson DB9 port needs the Linux RS485 configuration shown above.

## Ethernet

The Robotics J601 carrier board features high-speed Ethernet ports for wired network connectivity, with planned support for PTP and EtherCAT protocols.

### Hardware Connection

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/ethnet.png"/>
</div>

### Usage Instruction

To test Ethernet port speed, use `iperf3` as follows:

**Upload speed test:**

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/eth_speed1.png"/>
</div>

**Download speed test:**

```bash
iperf3 -c <server_ip> -B <bind_ip> -R
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/eth_speed2.png"/>
</div>

:::info
- `<server_ip>` is the IP address of the iperf3 server. The client will connect to this server to perform a bandwidth test.
- `<bind_ip>` binds the specified local IP address as the source of the test traffic.
- The `-R` flag reverses the test direction for download speed testing.
:::

## M.2 Key E

The M.2 Key E interface is a standard M.2 connector primarily used for connecting wireless modules, such as Wi-Fi and Bluetooth, to expand wireless communication capabilities.

### Hardware Connection

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/gmsl_c1.png"/>
</div>

### Usage Instruction

**Step 1.** Install the Wi-Fi driver firmware:

```bash
# Decompress firmware files
cd /lib/firmware/rtw88/
sudo zstd -d rtw8822c_fw.bin.zst -o rtw8822c_fw.bin
sudo zstd -d rtw8822c_wow_fw.bin.zst -o rtw8822c_wow_fw.bin

# Load the driver modules
sudo modprobe rtw88_core
sudo modprobe rtw88_pci
sudo modprobe rtw88_8822c
sudo modprobe rtw88_8822ce
```

**Step 2.** Reboot the device:

```bash
sudo reboot
```

**Step 3.** After reboot, bring up the wireless interface:

```bash
sudo ip link set wlP1p1s0 up
```

**Step 4.** Scan for available Wi-Fi networks:

```bash
sudo nmcli device wifi list ifname wlP1p1s0
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/wifi_1.png"/>
</div>

**Step 5.** Connect to a Wi-Fi network:

```bash
sudo nmcli device wifi connect "your WiFi name" password "WiFi password" ifname wlP1p1s0
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/wifi_2.png"/>
</div>

### Bluetooth

Bluetooth functionality is available via the M.2 Key E slot.

**Step 1.** Open the Bluetooth control tool:

```bash
bluetoothctl
```

**Step 2.** Power on and scan for nearby Bluetooth devices:

```bash
power on
scan on
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/blue_tooth.png"/>
</div>

## 5G Module (M.2 Key B)

The M.2 Key B slot supports 5G module expansion, enabling high-speed cellular connectivity for robotics and edge AI scenarios.

### Hardware Connection

Install the 5G module into the M.2 Key B slot and connect the antennas.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/5g_c1.png"/>
</div>

### Usage Instruction

**Step 1.** Open the 5G module serial console:

```bash
sudo apt install -y minicom
sudo minicom -D /dev/ttyUSB3
```

**Step 2.** Enter interactive mode by pressing **Ctrl+A** then **E**.

**Step 3.** Test AT commands:

```
AT
```

**Step 4.** Check signal strength:

```
AT+CSQ
```

**Step 5.** Check the registered network operator:

```
AT+COPS?
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/lsusb_5g.png"/>
</div>

## Nano SIM

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/sim.png"/>
</div>

## GPS

The 5G module on the M.2 Key B slot also provides GPS functionality for location tracking.

### Usage Instruction

**Step 1.** Open the GPS AT command port:

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

**Step 2.** Enable the GPS receiver:

```
AT+QGPS=1
```

:::info
- If the response is `OK`, the GPS receiver has been successfully started.
- If the response is `+CME ERROR: 549`, GPS is already enabled — no need to enable it again.
:::

**Step 3.** Exit minicom by pressing **Ctrl+A** then **X**, and select **Yes** to exit.

**Step 4.** After GPS is enabled, satellite data will stream from the GPS data port (typically `/dev/ttyUSB1`). Read the raw NMEA data:

```bash
sudo cat /dev/ttyUSB1
```

You should see standard GPS NMEA sentences such as:

```
$GPRMC,023011.00,A,2232.12345,N,11356.54321,E,0.026,,100626,,,A*7A
$GPGGA,023011.00,2232.12345,N,11356.54321,E,1,06,1.2,45.3,M,-2.3,M,,*6D
$GPGSV,3,1,11,01,65,120,42,03,45,210,38,08,30,045,35,11,15,290,31*74
```

:::note
Ensure you have a clear view of the sky for GPS signal acquisition. It may take a few minutes to get a valid fix.
:::

## Resources

- Detailed hardware layout: TBD
- Flashing guide: TBD
- BSP release notes: TBD

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
