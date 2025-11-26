---
description: Learn how to configure and test hardware components on the reComputer Industrial R20xx series after installing devices. This wiki covers GPIO mapping, USER LED testing, SPI communication, Wi-Fi and Bluetooth scanning, LoRa®, 5G，4G, Zigbee over Mini-PCIe, RS485, RS232, DI/DO testing, and UPS for safe shutdown.
title: Configure reComputer Industrial R20xx
keywords:
- Raspberry pi
- Edge Controller
- reComputer Industrial R20xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg
slug: /recomputer_industrial_r20xx_configure_system
last_update:
  date: 09/28/2025
  author: Nolan Chen
---

## Overview

Learn how to configure and test hardware components on the reComputer Industrial R20xx series after installing devices. This wiki covers GPIO mapping, USER LED testing, SPI communication, Wi-Fi and Bluetooth scanning, LoRa®, 4G, 5G，Zigbee over Mini-PCIe, RS485, RS232, DI/DO testing, UPS for safe shutdown and more.

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2045-12-p-6544.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Query GPIO Mappings and Offsets

To query GPIO mappings and offsets, follow these steps:

1. Copy and paste the following command to query GPIO mappings:

```bash
cat /sys/kernel/debug/gpio
```

**This command will display GPIO mappings and offsets**, providing essential information for debugging or configuring GPIO pins.

## USER LED Testing

We provide LEDs in three colors of red, blue and green for users to use. You can enter the /sys/class/leds/ directory to view：

**1. Navigate to the LED directory**  

```bash
cd /sys/class/leds/
ls
```

Use the following command to light up the LED of the corresponding color.

```bash
sudo su
echo 1 > /sys/class/leds/led-red//brightness
echo 1 > /sys/class/leds/led-blue/brightness
echo 1 > /sys/class/leds/led-green/brightness
```

This will **light up** the corresponding LED.

**3. Turn off LEDs (optional)**  
To **turn off** a specific LED, use:

```bash
echo 0 > /sys/class/leds/led-red/brightness
echo 0 > /sys/class/leds/led-blue/brightness
echo 0 > /sys/class/leds/led-green/brightness
```

## Testing SPI Communication

To test SPI communication by shorting the TPM module's MISO and MOSI pins, follow these steps:

1. Clone the spidev-test repository:

```bash
# Don't forget to connect to network before running command
git clone https://github.com/rm-hull/spidev-test.git
```

2. Navigate into the spidev-test directory:

```bash
cd spidev-test
```

3. Compile the spidev_test.c file:

```bash
gcc spidev_test.c -o spidev_test
```

4. Run the spidev_test program with the following command:

```bash
./spidev_test -D /dev/spidev10.0 -v -p hello
```

This command tests SPI communication on the specified SPI device (**/dev/spidev10.0**) with verbose output ( -v ) and sends the message "hello" (**-p hello**).
By shorting the TPM module's MISO and MOSI pins, you're effectively creating a loopback scenario, where data sent on MOSI is received on MISO. This setup allows you to test SPI communication without an actual device connected.

## Wi-Fi Scanning

To list available Wi-Fi networks and their details, run:  

```bash
sudo iwlist wlan0 scan
```

- This command scans for all nearby Wi-Fi networks and displays their SSIDs, signal strength, and encryption type.  

## Bluetooth Scanning  

To scan for Bluetooth devices, follow these steps:  

**Open the Bluetooth control interface:**  

```bash
sudo bluetoothctl
```

This command will open the Bluetooth control interface. From there, you can run additional commands to scan for nearby Bluetooth devices.

**Enable scanning:**  

```bash
scan on
```

This command will start scanning for nearby Bluetooth devices. You can then use other commands within the ***bluetoothctl*** interface to interact with Bluetooth devices, such as pairing or connecting to them.

## LoRa® over Mini-PCIe

### LoRa® SPI Configuration  

After install the LoRa® SPI to Mini-PCIe slot 2, can configure LoRa® SPI, follow these steps:

1. Clone the **SX1302_HAL** repository:

```bash
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
```

2. Navigate to the cloned directory:

```bash
cd sx1302_hal
```

3. Modify the configuration file:

Open the I2C device configuration file:  

```bash
sudo nano ./libloragw/inc/loragw_i2c.h
```

Change this line:  

```c
#define I2C_DEVICE "/dev/i2c-1"
```

To:  

```c
#define I2C_DEVICE "/dev/i2c-2"
```

Change **#define I2C_DEVICE "/dev/i2c-1"** to **#define I2C_DEVICE "/dev/i2c-2".**
Press **ctrl+x** to exit, press **y** to save changes, and then press **Enter**  to return to the command line page.

4. 4.Add the packet_forwarder/reset_lgw.sh file:

```bash
sudo nano packet_forwarder/reset_lgw.sh
```

Add the execution code:

```bash
#!/bin/sh

# This script is intended to be used on SX1302 CoreCell platform, it performs
# the following actions:
#       - export/unpexort GPIO23 and GPIO18 used to reset the SX1302 chip and to enable the LDOs
#       - export/unexport GPIO22 used to reset the optional SX1261 radio used for LBT/Spectral Scan
#
# Usage examples:
#       ./reset_lgw.sh stop
#       ./reset_lgw.sh start

# GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=632     # SX1302 reset
SX1302_POWER_EN_PIN=633  # SX1302 power enable
SX1261_RESET_PIN=634     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=623    # AD5338R reset (full-duplex CN490 reference design)

WAIT_GPIO() {
    sleep 0.1
}

init() {
    # setup GPIOs
    echo "$SX1302_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$SX1261_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$SX1302_POWER_EN_PIN" > /sys/class/gpio/export; WAIT_GPIO
    echo "$AD5338R_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO

    # set GPIOs as output
    echo "out" > /sys/class/gpio/gpio$SX1302_RESET_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$SX1261_RESET_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$SX1302_POWER_EN_PIN/direction; WAIT_GPIO
    echo "out" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/direction; WAIT_GPIO
}

reset() {
    echo "CoreCell reset through GPIO$SX1302_RESET_PIN..."
    echo "SX1261 reset through GPIO$SX1302_RESET_PIN..."
    echo "CoreCell power enable through GPIO$SX1302_POWER_EN_PIN..."
    echo "CoreCell ADC reset through GPIO$AD5338R_RESET_PIN..."

    # write output for SX1302 CoreCell power_enable and reset
    echo "1" > /sys/class/gpio/gpio$SX1302_POWER_EN_PIN/value; WAIT_GPIO

    echo "1" > /sys/class/gpio/gpio$SX1302_RESET_PIN/value; WAIT_GPIO
    echo "0" > /sys/class/gpio/gpio$SX1302_RESET_PIN/value; WAIT_GPIO

    echo "0" > /sys/class/gpio/gpio$SX1261_RESET_PIN/value; WAIT_GPIO
    echo "1" > /sys/class/gpio/gpio$SX1261_RESET_PIN/value; WAIT_GPIO

    echo "0" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
    echo "1" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
}

term() {
    # cleanup all GPIOs
    if [ -d /sys/class/gpio/gpio$SX1302_RESET_PIN ]
    then
        echo "$SX1302_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$SX1261_RESET_PIN ]
    then
        echo "$SX1261_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$SX1302_POWER_EN_PIN ]
    then
        echo "$SX1302_POWER_EN_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
    if [ -d /sys/class/gpio/gpio$AD5338R_RESET_PIN ]
    then
        echo "$AD5338R_RESET_PIN" > /sys/class/gpio/unexport; WAIT_GPIO
    fi
}

case "$1" in
    start)
    term # just in case
    init
    reset
    ;;
    stop)
    reset
    term
    ;;
    *)
    echo "Usage: $0 {start|stop}"
    exit 1
    ;;
esac

exit 0
```

Press **ctrl+x** to exit, press **y** to save changes, and then press **Enter** to return to the command line page.

5. Modify the configuration code:

```bash
sudo vim ./tools/reset_lgw.sh
```

Update the pin configurations:

```bash
SX1302_RESET_PIN=632     # SX1302 reset
SX1302_POWER_EN_PIN=633  # SX1302 power enable
SX1261_RESET_PIN=634     # SX1261 reset (LBT / Spectral Scan)
# AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
```

Comment out lines 18, 29, 35, 42, 53, and 54 respectively:

```bash
......
# echo "$AD5338R_RESET_PIN" > /sys/class/gpio/export; WAIT_GPIO
......
# echo "out" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/direction; WAIT_GPIO
......
# echo "CoreCell ADC reset through GPIO$AD5338R_RESET_PIN..."
......
# echo "0" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
# echo "1" > /sys/class/gpio/gpio$AD5338R_RESET_PIN/value; WAIT_GPIO
```

Press  ctrl+x  to exit, press  y  to save changes, and then press  Enter  to return to the command line page.

6. replace the default SPI port of the LoraWAN®Module in the global_conf.json.sx1250.US915 config  file(Configuration files are selected based on the module you are using):

```bash
sudo nano packet_forwarder/global_conf.json.sx1250.US915
```

Modify the com_path parameter, change  ***"com_path": "/dev/spidev0.0"*** to  ***"com_path": "/dev/spidev2.0"***.

7. Compile the code:

```bash
sudo make
```

These steps will configure LoRa® SPI and run the packet forwarder with the specified configuration file.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.7.1_lora_spi_1.png" style={{width:800, height:'auto'}}/></div>

### LoRa® USB Configuration

For LoRa® USB, the previous commands remain the same as for LoRa® SPI. However, the final command needs to be changed to:

```bash
cho  632  >  /sys/class/gpio/export
echo  "out"  >  /sys/class/gpio/gpio632/direction
echo  "1"  >  /sys/class/gpio/gpio632/value

sudo  ./lora_pkt_fwd  -c  global_conf.json.sx1250.EU868.USB
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.7.2_lora_usb_1.png" style={{width:800, height:'auto'}}/></div>

This command specifies the configuration file to be used for LoRa® USB.

## 5G Cellular over M.2 B-KEY

To interact with a 5G/4G module using AT commands via minicom, follow these steps:

1. Create a new power_5g.sh file：

```bash
nano power_5g.sh
```

Open with sudo nano and enter the following command, then press ***ctrl+x*** to save and exit.

```bash
#!/bin/bash

RESET_PIN=645
POWER_PIN=639

if [ ! -d "/sys/class/gpio/gpio$RESET_PIN" ]; then
    echo $RESET_PIN > /sys/class/gpio/export
fi

if [ ! -d "/sys/class/gpio/gpio$POWER_PIN" ]; then
    echo $POWER_PIN > /sys/class/gpio/export
fi

echo "out" > /sys/class/gpio/gpio$RESET_PIN/direction
echo "out" > /sys/class/gpio/gpio$POWER_PIN/direction

echo 1 > /sys/class/gpio/gpio$RESET_PIN/value
echo 1 > /sys/class/gpio/gpio$POWER_PIN/value

echo "Start to reboot 5g module"

echo 0 > /sys/class/gpio/gpio$RESET_PIN/value
sleep 0.05
echo 0 > /sys/class/gpio/gpio$POWER_PIN/value

echo "5g module reboot completed"
```

2. Execute the file:

```bash
sudo ./power_5g.sh
```

After 10-15 seconds (it takes a while for the module to power on and enumerate USB), check whether the device node appears:

```bash
ls /dev/ttyUSB*
```

Output /dev/ttyUSB0, etc.:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.8_5g_cellular_over_m.2_b-key_1.png" style={{width:800, height:'auto'}}/></div>
Open minicom with the appropriate serial port and baud rate:

```bash
sudo apt update
sudo apt install minicom
sudo minicom -D /dev/ttyUSB2 -b 115200
```

This command opens minicom with the specified serial port (***/dev/ttyUSB2***) at a baud rate of 115200.

1. Once minicom is open, you can start sending AT commands to the 4G module. For example:

```bash
AT
```

This command checks if the module is responsive. You should receive an ***"OK"*** response if the module is working properly.

2. To dial a phone number using the 4G module, you can use the ATD command followed by the phone number:

```bash
ATD<phone_number>;
```

Replace **phone_number** with the desired phone number you want to dial.
Make sure to include a semicolon ; at the end of the command to indicate the end of the phone number.

## 4G Cellular over Mini-PCIe

Create a new power_4g.sh file:

```bash
sudo nano power_4g.sh
```

Open with sudo nano and enter the following command, then press ctrl+x to save and exit.

```bash
# SIM_MUX_SEL
echo  643  >  export
echo  out  >  gpio643/direction
echo  0  >  gpio643/value
```

Execute the file:

```bash
sudo ./power_4g.sh
```

After 10-15 seconds (it takes a while for the module to power on and enumerate USB), check whether the device node appears:

```bash
ls /dev/ttyUSB*
```

Output /dev/ttyUSB0.
Confirm the actual action of GPIO:

```bash
cat /sys/class/gpio/gpio645/value # should be 0
cat /sys/class/gpio/gpio639/value # should be 0
```

Both values are 0 → the script has been correctly pulled down and the module is in working state.
Enter minicom to send commands:

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

● Press ***Ctrl+A,Z,E***  in sequence. First send AT to test whether it is connected. If OK appears, the connection is successful.
After executing the following command, the module will automatically restart. If you do not exit minicom, you can see the corresponding configuration information.
ECM Dial-up Internet Access:

```bash
AT+QCFG="usbnet",1
```

Until the last line shows OK, it will be successful.

> Note
> The device needs to wait for a while, and then you can view the ip address of usb0 in ifconfig.

Test network status and communication：

```bash
# Check network status
ifconfig
# Test communication
ping www.baidu.com -I usb0
```

## Zigbee over Mini-PCIe

To test **Zigbee communication** between two Zigbee modules, follow these steps:  

1. Check Available Serial Ports

Use the following command to check available serial ports:

```bash
cat /dev/ttyUSB*
```

**Install a Serial Communication Tool**

2. Install Serial Communication Tool:

```bash
sudo apt-get install cutecom
```

3. Open Serial Port for Coordinator (First Zigbee Module):

- Open the cutecom tool and configure it for the first serial port:
- Baud rate: ***115200***
- Check the ***"Hex output"*** option at the bottom of the interface.
- Follow these steps to configure the first Zigbee module:
- Set as coordinator: Send command ***‘55 04 00 05 00 05’***, expect response ***‘55 04 00 05 00 05’***.
- Reset device: Press reset button or send command ***‘55 07 00 04 00 FF FF 00 04’***.
- Network formation: Send command ***‘55 03 00 02 02’***.

4. Open Serial Port for Router (Second Zigbee Module):
Open another instance of ***cutecom*** and configure it for the second serial port with the same settings as before.
Follow these steps to configure the second Zigbee module:

- Set as router: Send command ***‘55 04 00 05 01 04’***, expect response ***‘55 04 00 05 00 05’***.
- Reset device: Press reset button or send command ***‘55 07 00 04 00 FF FF 00 04’***.
- Network formation: Send command ***‘55 03 00 02 02’***.

5. Check Device Status:
Send command ***‘55 03 00 00 00’*** to check the device status. Expect a response similar to ***‘55 2a 00 00 00 01 XX XX XX XX’***, where ‘XX’ represents device information.
6. Enter Transparent Mode:
If network formation is successful, enter transparent mode by sending command ***55 07 00 11 00 03 00 01 13***. Both modules should be in transparent mode for direct communication. To exit transparent mode, send "+++".
7. Additional Notes:

- If router configuration fails, the device may already be a coordinator. Leave the network using command '55 07 00 04 02 xx xx xx'.
- Test transmission power using commands '55 04 0D 00 00 0D' (query) and '55 04 0D 01 XX XX' (set).
Ensure you replace ***/dev/ttyUSB*** with the correct serial port for each Zigbee module. Follow these steps carefully to test Zigbee communication between the two modules successfully.

## RS485 Testing

The reComputer Industrial R20xx includes **three RS485 ports**. Below are their corresponding **COM ports** and **device files**:  

| **Number of RS485 Ports** | **COM Port** | **Silkscreen Label** | **Device File** |
|---------------------------|--------------|----------------------|-----------------|
| **RS485-2**               | COM2         | A2/B2/GND2           | `/dev/ttyACM1`  |
| **RS485-3**               | COM3         | A3/B3/GND3           | `/dev/ttyACM2`  |
| **RS485-4**               | COM4         | A4/B4/GND4           | `/dev/ttyACM3`  |

To test the RS485 function, you can follow the steps below (take RS485_1 and RS485_2 as examples):

1. Please connect RS485_1 and RS485_2's A and B.
2. Open minicom in two terminal windows respectively:

```bash
sudo minicom -D /dev/ttyACM1
sudo minicom -D /dev/ttyACM2
```

:::note
 If there is an expansion board, the number needs to be moved back one place, for example ***/dev/ttyAcM2***, ***/dev/ttyAcM3***.
:::

3. The following operations need to be performed on both opened ACMs:

- Press ***Ctrl+A***, then press ***Z***, and the Minicom Command Summary interface will appear:
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_1.png" style={{width:800, height:'auto'}}/></div>
- Press ***O*** again to open configuration, select Serial port setup, and press ***Enter***; Open all RS485 related interfaces, press ***H/I/J/K/L*** in sequence to open;
   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_2.png" style={{width:800, height:'auto'}}/></div>

- After all "YES" are displayed, press Enter to return, and then select Exit to exit.

:::note

Take ACM2 and ACM3 as an example:
If you want to send from ACM2 to ACM3, ACM2 needs to be set up again: ***ctrl+A*** , then press ***Z*** and then ***E*** , and then start the serial port write command. At this time, you can print strings in ACM2 at will, and you can see the contents of ACM2 in ACM3 at the same time;
Conversely, if you want to send from ACM3 to ACM2, ACM3 needs to be set up again:  ***ctrl+A***, then press  ***Z***  and then  ***E*** , and then start the serial port write command. At this time, you can print strings in ACM3 at will, and you can see the contents of ACM3 in ACM2 at the same time. As shown in the figure.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.11_rs485_testing_3.png" style={{width:800, height:'auto'}}/></div>

## RS232 Testing

reComputer Industrial R20xx includes 1x RS232 ports, and the corresponding COM ports and device files are as follows:

| **Number of RS232 Ports** | **COM Port** | **Silkscreen Label** | **Device File** |
|---------------------------|--------------|----------------------|-----------------|
| **RS232-1**               | COM1         | RX1/TX1/GND1         | `/dev/ttyACM0`  |

Because RS232 is full-duplex communication, short-circuit the TX and RX of RS232 directly to perform a loopback test.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.12_rs232_testing_1.png" style={{width:800, height:'auto'}}/></div>

You need to open two terminals, ACM1 if the expansion board is connected, and ACM2 if the expansion board is not connected:
**Terminal 1:***

```bash
sudo minicom -D /dev/ttyACM1 -b 9600
```

If the expansion board is not connected, you need to change ***/dev/ttyACM1*** to ***/dev/ttyACM0*** .

**Terminal 2:**

```bash
printf "hello seeed\r\n" > /dev/ttyACM1
```

Terminal 1 will display the content requested by Terminal 2 to be printed.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.12_rs232_testing_2.png" style={{width:800, height:'auto'}}/></div>

## DI (Digital Input) Testing

reComputer Industrial R20xx contains 8x DI ports, user can configure these ports according to actual needs.

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Number of ports</th>
        <th>DI ports</th>
        <th>Corresponding extended GPIO</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="8">8</td>
        <td>DI1</td>
        <td>GPIO588</td>
      </tr>
      <tr>
        <td>DI2</td>
        <td>GPIO589</td>
      </tr>
      <tr>
        <td>DI3</td>
        <td>GPIO590</td>
      </tr>
      <tr>
        <td>DI4</td>
        <td>GPIO595</td>
      </tr>
      <tr>
        <td>DI5</td>
        <td>GPIO573</td>
      </tr>
      <tr>
        <td>DI6</td>
        <td>GPIO574</td>
      </tr>
      <tr>
        <td>DI7</td>
        <td>GPIO575</td>
      </tr>
      <tr>
        <td>DI8</td>
        <td>GPIO576</td>
      </tr>
    </tbody>
  </table>
</div>

The input type of the DI ports is PNP. It supports input voltage is 5VDC~24VDC,current - 1000mA.
To test the functionality of DI, you can follow these steps to test it:

1. The connection between the DI port of reComputer Industrial R20xx and the external load has been completed.
2. Enter the following command to get the status of GPIO：

```bash
echo 588 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio588/direction
cat /sys/class/gpio/gpio588/value
```

3. When the external level is high, the value of ***/sys/class/gpio/gpio588/value*** is 0; when the external level is low, ***/sys/class/gpio/gpio588/value*** is 1.

## DO (Digital Output)

reComputer Industrial R20xx contains 8x DO ports, user can configure these ports according to actual needs.

<div class="table-center">
  <table border="1" cellspacing="0" cellpadding="6">
    <thead>
      <tr>
        <th>Number of ports</th>
        <th>DI ports</th>
        <th>Corresponding extended GPIO</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="8">8</td>
        <td>DO1</td>
        <td>GPIO638</td>
      </tr>
      <tr>
        <td>DO2</td>
        <td>GPIO637</td>
      </tr>
      <tr>
        <td>DO3</td>
        <td>GPIO590</td>
      </tr>
      <tr>
        <td>DO4</td>
        <td>GPIO636</td>
      </tr>
      <tr>
        <td>DO5</td>
        <td>GPIO635</td>
      </tr>
      <tr>
        <td>DO6</td>
        <td>GPIO577</td>
      </tr>
      <tr>
        <td>DO7</td>
        <td>GPIO594</td>
      </tr>
      <tr>
        <td>DO8</td>
        <td>GPIO596</td>
      </tr>
    </tbody>
  </table>
</div>

The output type of the DO ports is transistor. It supports output voltage - under 60 VDC, current capacity - 500 mA.
To test the functionality of DO, you can follow these steps to test it:

1. The connection between the DO port of reComputer Industrial R20xx and the external load has been completed.
2. Enter the following command to set the output to high level or low level：

```bash
echo 638 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio638/direction
echo 1 > /sys/class/gpio/gpio638/value
echo 0 > /sys/class/gpio/gpio638/value
```

3. When the external level is high, the value of  /sys/class/gpio/gpio638/value   is 0; when the external level is low,  /sys/class/gpio/gpio638/value  is 1.

## USB Hub Testing

To test the USB hub, you can use the following steps:

1. Check if the USB hub is detected by running the ***lsusb*** command. This command lists all connected USB devices, including hubs.

```bash
lsusb
```

Running this command should display information about the USB devices connected to your system, including any USB hubs that are present.
If the USB hub is functioning properly, you should see its details listed in the output of the lsusb command. If it's not listed, there may be an issue with the hub or its connection to the system. In such cases, you may need to troubleshoot the USB hub or its connections.

## RTC (Real-Time Clock) Testing

To test the Real-Time Clock (RTC) functionality, follow these steps:

1. Disable automatic time synchronization:

```bash
sudo systemctl stop systemd-timesyncd
sudo systemctl disable systemd-timesyncd
```

2. Set the time:
Set the RTC to a specific date and time:

```bash
sudo hwclock --set --date "2025-7-17 12:00:00"
```

3. Sync RTC Time to the System
Update the system time to match the RTC time:  

```bash
sudo hwclock --hctosys
```

4. Check the RTC time:

```bash
sudo hwclock -r
```

This command will read and display the time stored in the RTC.

5. Disconnect the power source from the RTC, wait a few minutes, then reconnect it and check the RTC time again to see if it retained the correct time.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.16_rtc_1.png" style={{width:800, height:'auto'}}/></div>

## Watchdog Timer Testing

To perform a watchdog test, follow these steps:

1. Install the watchdog software:

```bash
sudo apt install watchdog
```

2. Edit the watchdog configuration file:

```bash
# make sure you install vim already, if haven't, can install by the command below
sudo apt-get install vim
sudo vim /etc/watchdog.conf
```

Modify the configuration as follows:

```bash
watchdog-device = /dev/watchdog
# Uncomment and edit this line for hardware timeout values that differ
# from the default of one minute.
watchdog-timeout = 120
# If your watchdog trips by itself when the first timeout interval
# elapses then try uncommenting the line below and changing the
# value to 'yes'.
#watchdog-refresh-use-settimeout = auto
# If you have a buggy watchdog device (e.g. some IPMI implementations)
# try uncommenting this line and setting it to 'yes'.
#watchdog-refresh-ignore-errors = no
# ====================== Other system settings ========================
#
# Interval between tests. Should be a couple of seconds shorter than
# the hardware time-out value.
interval = 15
max-load-1 = 24
#max-load-5 = 18
#max-load-15 = 12
realtime = yes
priority = 1
```

You can adjust other settings as needed.

3. Ensure the watchdog service is running:

```bash
sudo systemctl start watchdog
```

4. To test the watchdog functionality, execute the following command to simulate a system hang:

```bash
sudo su

echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

This command triggers a kernel crash and should cause the watchdog to reboot the system.

5. Monitor the system to confirm that it reboots after the specified timeout period.
These steps will help you test and ensure the functionality of the watchdog timer on your system.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.17_watchdog_1.png" style={{width:800, height:'auto'}}/></div>

## Controlling the Buzzer via GPIO  

The GPIO corresponding to the buzzer is gpio627. Enter the following script to turn the buzzer on/off :

1. Turn on the buzzer :

```bash
echo 627 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio627/direction
echo 1 > /sys/class/gpio/gpio627/value
```  

2. Turn off the buzzer :Turn off the buzzer :

```bash
echo 627 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio627/direction 
echo 0 > /sys/class/gpio/gpio627/value
```  

## TPM 2.0

If you connect TPM 2.0 module to device, the following code can help check TPM connection.

```bash
ls /dev | grep tpm
```  

**Interpreting the Output:**  

If you see ***tpm0*** and ***tpmrm0*** in the output, it means that TPM (Trusted Platform Module) devices are detected and available on your system. This indicates that the TPM hardware is recognized and accessible, which is a good sign. You can proceed with using TPM-related functionalities or applications knowing that the devices are present and accessible.

## ATECC608A

To interact with the ATECC608A device and generate a random serial number, follow these steps:

1. Clone the atecc-util Repository:

```bash
curl -LJO https://github.com/wirenboard/atecc-util/releases/download/v0.4.12/atecc-util_0.4.12_arm64.deb
```  

2. Extract the contents of the .deb package to the current directory:

```bash
dpkg -x ./atecc-util_0.4.12_arm64.deb .
```  

3. Navigate to the atecc Directory:

```bash
cd usr/bin
```

4. Generate a Random Serial Number:

```bash
./atecc -b 10 -s 192 -c 'serial'
```

This command instructs the ATECC utility to use slot 10 (-b 10), set the serial number size to 192 bits ***(-s 192)***, and generate a random serial number ***(-c 'serial')***. The output will be the generated serial number, such as ***"01235595d3d621f0ee"***.
This process allows you to interact with the ATECC608A device and perform various operations, such as generating random serial numbers.

## Interacting with EEPROM

Here are the commands to interact with an EEPROM (Electrically Erasable Programmable Read-Only Memory):

1. Grant full permissions (read, write, and execute) to the EEPROM device file:

```bash
 sudo chmod 777 /sys/bus/i2c/devices/10-0050/eeprom
```  

2. Write the string "This is a test string" to the EEPROM device:

```bash
echo "This is a test string" > /sys/bus/i2c/devices/10-0050/eeprom
```  

3. Read the contents of the EEPROM device and displays it in ***hexadecimal*** format using the hexdump utility:

```bash
cat /sys/bus/i2c/devices/6-0050/eeprom | hexdump -C
```  

## Checking SSD Detection

To list the disks, including the SSD, you can use the fdisk -l command. Here's how:

```bash
sudo fdisk -l
```

This command will display a list of all disks connected to your system, including the SSD if it's properly detected. Look for entries that represent your SSD. They typically start with ***/dev/sd*** followed by a letter (e.g. ***/dev/sda, /dev/sdb,*** etc.).
Once you identify the entry corresponding to your SSD, you can proceed with partitioning or formatting it as needed.

## UPS for Safe Shut Down

A GPIO6 between CPU and DC power in is used to alarm CPU when the power supply is down. Then the CPU should do something urgent in a script before energy exhaustion of super capacitor and run a "$ shutdown".
Another way to use this function is Initiate a shutdown when GPIO pin changes. The given GPIO pin is configured as an input key that generates KEY_POWER events. This event is handled by systemd-logind by initiating a shutdown.

1. Hardware connection.

Please make sure that the ***'CM5_UPS_DET'*** pin of the UPS device is connected to the GPIO16 pin of the R20xx device.

2. Modify the configuration file.

- Open the terminal.
- Execute the following command to edit the configuration file:

```bash
sudo nano /boot/firmware/config.txt
```

3. Add the following content at the end of the file:

```bash
dtoverlay=gpio-shutdown,gpio_pin=GPIO16,active_low=1
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.23_ups_for_safe_shut_down_1.png" style={{width:800, height:'auto'}}/></div>

Save and exit the editor (press ***`Ctrl+O`*** to save, ***`Enter`*** to confirm, and ***`Ctrl+X`*** to exit).

4. Prepare Python script

- Create a new Python script file:

```bash
cd ~
sudo nano ups_shutdown.py
```

- Copy and paste the following code into the file:

```bash
import RPi.GPIO as GPIO
import time, os

num = 0

GPIO.setmode(GPIO.BCM)

# Set GPIO16 to input mode
# Add 500ms anti-shake time to stabilize the software
GPIO.setup(16, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.add_event_detect(16, GPIO.FALLING, bouncetime=500)

while True:
    if GPIO.event_detected(16):
        print("...External power off...")
        print("")

        # Sync data to disk
        os.system('sync')
        print("...Data saving...")
        print("")

        # Sleep for 3 seconds
        time.sleep(3)

        # Synchronize data again
        os.system('sync')

        # Countdown 5 seconds
        while num < 5:
            print('----------')
            s = 5 - num
            print('---' + str(s) + '---')
            num = num + 1
            time.sleep(1)
            print('----------')

        # Execute shutdown command
        os.system('sudo shutdown -h now')
```

Save and exit the editor (press ***`Ctrl+O`*** to save, ***`Enter`*** to confirm, and ***`Ctrl+X`*** to exit).

5. Run the script.

- Open the terminal.
- Execute the following command to run the script:

```bash
sudo python3 ups_shutdown.py
```

:::note
 Use `sudo` to ensure that the script has sufficient permissions to execute the shutdown command.
:::

6. Simulate power failure test

- Cut off the external power supply.
- Observe whether the system automatically saves data and shuts down.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.23_ups_for_safe_shut_down_1.png" style={{width:800, height:'auto'}}/></div>

7. Verify the result

- Reconnect the power supply.
- Check whether the system data is complete and starts normally.

:::note

1. For UPS function please contact us for more information.
2. The alarm signal is active LOW.

:::

## AI Accelerator

The M.2 M-KEY 2280 slot on the reComputer Industrial R20xx is designed to accommodate PCIE M.2 AI  Accelerator. And the R20xx-12 series has been pre-installed with a Hailo-8 M.2 AI Acceleration up to 26TOPS.
If you purchased the R20xx-10 series product, you will need to purchase Hailo's NPU module to enable AI functionality.
The device comes pre-installed with the Hailo accelerator driver, so you can use it directly and run the test case:

1. Navigate to the test case directory

```bash
cd /mnt/hailo-rpi5-examples/
```

2. Start the virtual environment

```bash
source ./setup_env.sh
```

3. Run the simple detection example

```bash
python basic_pipelines/detection_simple.py
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/3.24_ai__accelerator_1.png" style={{width:800, height:'auto'}}/></div>

To close the application, press ***`Ctrl+C`*** .
This is lightweight version of the detection example, mainly focusing on demonstrating Hailo performance while minimizing CPU load. The internal GStreamer video processing pipeline is simplified by minimizing video processing tasks, and the YOLOv6 Nano model is used.

:::note
If the reComputer you purchased does not include Hailo-8 and you are considering purchasing a Hailo device for integration, please refer to the official Hailo documentation (https://github.com/hailo-ai) to configure the firmware and environment, and run the examples to verify that the device can be used normally.
:::

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
