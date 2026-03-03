---
description: Learn how to configure and test hardware components on the reComputer R1100 series after installing devices. This wiki covers GPIO mapping, USER LED testing, SPI communication, Wi-Fi and Bluetooth scanning, LoRa®, 4G, Zigbee over Mini-PCIe, RS485, RS232, DI/DO testing, and UPS for safe shutdown.
title: Configure reComputer R1100 
keywords:
- Raspberry pi
- Edge Controller
- reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg
slug: /recomputer_r1100_configure_system
last_update:
  date: 2/26/2024
  author: Kasun Thushara
---

## Overview

Learn how to configure and test hardware components on the reComputer R1100 series after installing devices. This wiki covers GPIO mapping, USER LED testing, SPI communication, Wi-Fi and Bluetooth scanning, LoRa®, 4G, Zigbee over Mini-PCIe, RS485, RS232, DI/DO testing,UPS for safe shutdown and more.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Query GPIO Mappings and Offsets

To check GPIO mappings and offsets, follow these steps:

- **Run the following command in the terminal**

```bash
cat /sys/kernel/debug/gpio
```

**This command will display GPIO mappings and offsets**, providing essential information for debugging or configuring GPIO pins.

## Control LED Indicators

The reComputer R1100 provides three **LED indicators** in **red, blue, and green**. You can control them using the following commands:  

**1. Navigate to the LED directory**  

```bash
cd /sys/class/leds/
ls
```

This will list the available LEDs.

**2. Enable LEDs by writing to the brightness file**  
Switch to **superuser mode** first:  

```bash
sudo su
```

Then, turn on the LEDs:  

```bash
echo 1 > /sys/class/leds/led-red/brightness
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

To verify **SPI communication**, you can perform a loopback test by **shorting the TPM module's MISO and MOSI pins**. This method ensures that data sent on MOSI (Master Out, Slave In) is received on MISO (Master In, Slave Out).  

**Step-by-Step Guide**  

**1. Connect to the Internet**  
Make sure your device is connected to a network before proceeding.

**2. Clone the `spidev-test` repository**  

```bash
git clone https://github.com/rm-hull/spidev-test.git
```

**3. Navigate into the directory**  

```bash
cd spidev-test
```

**4. Compile the `spidev_test.c` program**  

```bash
gcc spidev_test.c -o spidev_test
```

**5. Run the SPI test**

```bash
./spidev_test -D /dev/spidev0.1 -v -p "hello"
```

- `-D /dev/spidev0.1` → Specifies the SPI device  
- `-v` → Enables verbose output  
- `-p "hello"` → Sends the string `"hello"`  

**6. Loopback Test (Optional)**  

- **Short the TPM module's MISO and MOSI pins** before running the test.
- If the SPI bus is functioning correctly, the output should show the transmitted data being **received correctly**.

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

**Enable scanning:**  

```bash
scan on
```

- This starts scanning for nearby Bluetooth devices.  

## LoRa® over Mini-PCIe

### LoRa® SPI Configuration  

**Clone the SX1302_HAL repository:**  

```bash
cd ~
git clone https://github.com/Lora-net/sx1302_hal
```

**Navigate to the cloned directory:**

```bash
cd sx1302_hal
```

**Modify the configuration file:**  

Open the I2C device configuration file:  

```bash
sudo vim ./libloragw/inc/loragw_i2c.h
```

Change this line:  

```c
#define I2C_DEVICE "/dev/i2c-1"
```

To:  

```c
#define I2C_DEVICE "/dev/i2c-3"
```

**Compile the code:**

```bash
sudo make
```

**Modify the reset script:**

Open the `reset_lgw.sh` script:  

```bash
sudo vim ./tools/reset_lgw.sh
```

Update the pin configurations:

```bash
SX1302_RESET_PIN=580    # SX1302 reset  
SX1302_POWER_EN_PIN=578 # SX1302 power enable  
SX1261_RESET_PIN=579    # SX1261 reset (LBT/Spectral Scan)  
```

**Copy the reset script to the packet forwarder directory:**  

```bash
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**Update the default SPI port in the LoRaWAN® configuration file:**  

Modify the `global_conf.json.sx1250.US915` file:  

```bash
sed -i 's/spidev0.0/spidev0.1/g' global_conf.json.sx1250.US915
```

**Start the LoRaWAN® module:**  

```bash
cd ~/sx1302_hal/packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

### LoRa® USB Configuration

If you are using a LoRa® USB module instead of LoRa® SPI, follow these steps. Most commands remain the same as for LoRa® SPI, except for the final step.

**Pull up the SX1302 Reset Pin**

```bash
echo 1 > /sys/class/gpio/gpio580/value
```

**Start the LoRaWAN® USB module**

```bash
cd ~/sx1302_hal/packet_forwarder
sudo ./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB
```

 LoRa® USB is now configured and running on reComputer R1100

## 4G Cellular over Mini-PCIe

To interact with a 4G module using AT commands via `minicom`, follow these steps:  

**Open Minicom with the appropriate serial port and baud rate:**  

```bash
sudo minicom -D /dev/ttyUSB2 -b 115200
```

This command opens Minicom with the specified serial port (`/dev/ttyUSB2`) at a baud rate of **115200**.  

**Send AT commands to the 4G module:**  

Once Minicom is open, you can start sending **AT commands** to the 4G module. For example:  

```bash
AT
```

This command checks if the module is responsive. If the module is working properly, you should receive an **"OK"** response.  

**Dial a phone number using the 4G module:**  

To dial a phone number, use the `ATD` command followed by the phone number:  

```bash
ATD<phone_number>;
```

- Replace `<phone_number>` with the desired phone number you want to dial.  
- Make sure to include a **semicolon (;)** at the end of the command to indicate the end of the phone number.  

## Zigbee over Mini-PCIe

To test **Zigbee communication** between two Zigbee modules, follow these steps:  

**Check Available Serial Ports**  

Run the following command to check the available serial ports:  

```bash
cat /dev/ttyUSB*
```

**Install a Serial Communication Tool**

Install **CuteCom**, a graphical serial terminal, using:  

```bash
sudo apt-get install cutecom
```

**Configure the First Zigbee Module (Coordinator)**  

- Open **CuteCom** and configure it for the **first serial port**.  
- **Settings:**
  - **Baud Rate:** 115200  
  - **Enable "Hex output"** at the bottom of the interface.  

**Steps to Configure as a Coordinator:**  

1. **Set as Coordinator:** Send command:  

   ```  
   55 04 00 05 00 05  
   ```  

   - Expected response:  

   ```  
   55 04 00 05 00 05  
   ```  

2. **Reset Device:**  
   - Press the **reset button**, or  
   - Send command:  

     ```  
     55 07 00 04 00 FF FF 00 04  
     ```  

3. **Network Formation:**
   - Send command:  

   ```  
   55 03 00 02 02  
   ```  

**Configure the Second Zigbee Module (Router)**  

- Open another instance of **CuteCom** and configure it for the **second serial port** using the same settings.  

**Steps to Configure as a Router:**  

1. **Set as Router:** Send command:  

   ```  
   55 04 00 05 01 04  
   ```  

   - Expected response:  

   ```  
   55 04 00 05 00 05  
   ```  

2. **Reset Device:**  
   - Press the **reset button**, or  
   - Send command:  

     ```  
     55 07 00 04 00 FF FF 00 04  
     ```  

3. **Network Formation:** Send command:  

   ```  
   55 03 00 02 02  
   ```  

**Check Device Status**  
To verify the device status, send:  

```  
55 03 00 00 00  
```  

 Expected response:  

```  
55 2A 00 00 00 01 XX XX XX XX  
```  

- `XX` represents device-specific information.  

**Enter Transparent Mode**

If **network formation** is successful, enable **transparent mode** by sending:  

```  
55 07 00 11 00 03 00 01 13  
```  

**Both modules must be in transparent mode for direct communication.**  
To **exit transparent mode**, send:  

```  
+++  
```

**Additional Notes**  

- If **router configuration fails**, the device may already be a **coordinator**. To leave the network, send:  

  ```  
  55 07 00 04 02 XXXX XX  
  ```  

- To **test transmission power**, use:  
  - **Query power:**  

    ```  
    55 04 0D 00 00 0D  
    ```  

  - **Set power:**  

    ```  
    55 04 0D 01 XXXX  
    ```  

Ensure you replace `/dev/ttyUSB*` with the **correct serial port** for each Zigbee module.  
Follow these steps carefully to establish **successful Zigbee communication** between the two modules.

Here’s the corrected and well-structured version with improved grammar, readability, and formatting:  

---

## RS485 Testing

The reComputer R1100 includes **two RS485 ports**. Below are their corresponding **COM ports** and **device files**:  

| **RS485 Port** | **COM Port** | **Silkscreen Label** | **Device File** |
|---------------|-------------|----------------------|----------------|
| **RS485_1**  | COM1        | A1 / B1 / GND       | `/dev/ttyACM0` |
| **RS485_2**  | COM2        | A2 / B2 / GND       | `/dev/ttyACM1` |

**Steps to Test RS485 Functionality**  

**Connect the RS485 Ports**  

Physically connect **RS485_1 (A & B)** to **RS485_2 (A & B)**.  

**Run the RS485 Test Program**  

We provide a test program to **verify data transmission** and measure the speed between the two RS485 ports.  

Run the following commands to download and execute the test program:  

```bash
git clone https://github.com/ackPeng/R1100_TEST.git
cd R1100_TEST
gcc -o serial_test serial_test.c
./serial_test /dev/ttyACM0 /dev/ttyACM1 115200
```

**Test Description**  

- This program **sends 1MB of data** from **RS485_1** to **RS485_2**.  
- It **records the completion time** and calculates the actual baud rate.  
- **Note:** The actual baud rate may be slightly lower than the theoretical baud rate, which is expected.  

**Follow these steps carefully to verify RS485 communication on reComputer R1100.**

## RS232 Testing

The reComputer R1100 features **two RS232 ports**. Below are the corresponding COM ports and device files:  

| RS232 Port | COM Port | Pin Mapping | Device File |
|------------|---------|-------------|--------------|
| **RS232_1** | COM3 | RX3/TX3/GND | `/dev/ttyACM2` |
| **RS232_2** | COM4 | RX4/TX4/GND | `/dev/ttyACM3` |  

**Testing RS232 Communication**  

Follow these steps to test RS232 functionality:  

1. **Connect the ports:**  
   - Connect **TX of RS232_1** to **RX of RS232_2**.  
   - Connect **RX of RS232_1** to **TX of RS232_2**.  

2. **Run the test program:**  
   - Clone the test program repository:  

     ```bash
     git clone https://github.com/ackPeng/R1100_TEST.git
     ```  

   - Navigate to the directory:  

     ```bash
     cd R1100_TEST
     ```  

   - Compile the test program:  

     ```bash
     gcc -o serial_test serial_test.c
     ```  

   - Run the test:  

     ```bash
     ./serial_test /dev/ttyACM2 /dev/ttyACM3 115200
     ```  

This test sends **1MB of data** from RS232_1 to RS232_2 and measures the completion time and baud rate. Note that the actual baud rate may be slightly lower than the theoretical value, which is normal.

## DI (Digital Input) Testing

The reComputer R1100 includes **two Digital Input (DI) ports**, which can be configured based on user requirements.  

| **Number of DI Ports** | **DI Port** | **Corresponding Extended GPIO** |
|-----------------------|------------|--------------------------------|
| **2**                 | **DI1**     | **GPIO530**                    |
|                       | **DI2**     | **GPIO531**                    |

**DI Port Specifications**  

- **Input Type:** PNP  
- **Supported Input Voltage:** **5VDC – 24VDC**  
- **Current:** **Up to 1000mA**  

**Steps to Test DI Functionality**  

**Ensure Proper Connection**  

Make sure the **DI port** of the reComputer R1100 is properly connected to the **external load**, also make sure that the **G_D** port is connected to the **power supply GND**.

**Check the GPIO Status**  

Run the following commands to check the status of **GPIO530** (corresponding to DI1):  

```bash
echo 530 > /sys/class/gpio/export
echo in > /sys/class/gpio/gpio530/direction
cat /sys/class/gpio/gpio530/value
```

**Interpret the GPIO Value**  

- **If the external level is HIGH**, the output of `/sys/class/gpio/gpio530/value` will be **0**.  
- **If the external level is LOW**, the output of `/sys/class/gpio/gpio530/value` will be **1**.  

## DO (Digital Output)

The **reComputer R1100** includes **two Digital Output (DO) ports**, which can be configured based on user requirements.  

| **Number of DO Ports** | **DO Port** | **Corresponding Extended GPIO** |
|-----------------------|------------|--------------------------------|
| **2**                 | **DO1**     | **GPIO532**                    |
|                       | **DO2**     | **GPIO533**                    |

**DO Port Specifications**  

- **Output Type:** Transistor  
- **Supported Output Voltage:** **Up to 60VDC**  
- **Current Capacity:** **500mA**  

**Steps to Test DO Functionality**  

**Ensure Proper Connection**  
Confirm that the **DO port** of the reComputer R1100 is properly connected to the **external load**.

**Since the DO port is an open collector output and has no drive capability, please use an external resistor to pull it up to the power supply.**

**Set the Output Level**  
Run the following commands to set the output to **HIGH** or **LOW**:  

```bash
echo 532 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio532/direction
echo 1 > /sys/class/gpio/gpio532/value  # Set output to HIGH
echo 0 > /sys/class/gpio/gpio532/value  # Set output to LOW
```

## USB Hub Testing

To verify the functionality of the **USB hub**, follow these steps:  

**Check if the USB Hub is Detected**  

Run the following command to list all connected USB devices, including hubs:  

```bash
lsusb
```

**Verify USB Hub Detection**

- This command will display information about all **USB devices** connected to your system, including **USB hubs**.  
- If the USB hub is **functioning properly**, its details should appear in the command output.  
- If the hub is **not listed**, there may be an issue with the **hub itself or its connection** to the system.  

**Troubleshooting (If the USB Hub is Not Detected)**  

- Check the **physical connection** of the USB hub.  
- Try connecting the hub to a **different USB port**.  
- Restart the device and rerun `lsusb`.  
- If the issue persists, the hub may be faulty.  

## RTC (Real-Time Clock) Testing

To verify the **RTC functionality** on **reComputer R1100**, follow these steps:  

**Disable Automatic Time Synchronization**  

Before testing the RTC, stop and disable automatic time sync to avoid conflicts:  

```bash
sudo systemctl stop systemd-timesyncd  
sudo systemctl disable systemd-timesyncd  
```

**Manually Set the RTC Time**

Set the RTC to a specific date and time (e.g., November 12, 2024, at 12:00 PM):  

```bash
sudo hwclock --set --date "2024-11-12 12:00:00"
```

**Sync RTC Time to the System**

Update the system time to match the RTC time:  

```bash
sudo hwclock --hctosys
```

**Verify the RTC Time**  
Check the current time stored in the RTC:  

```bash
sudo hwclock -r
```

This command will display the RTC time.

**Test RTC Retention**  

- **Disconnect the power source** from the RTC.  
- **Wait a few minutes**.  
- **Reconnect the power** and check the RTC time again using:  

  ```bash
  sudo hwclock -r
  ```

- If the time remains correct, the RTC is functioning properly.  

## Watchdog Timer Testing

To test the **watchdog timer** on **reComputer R1100**, follow these steps:  

**Install Watchdog Software**  

Ensure the watchdog package is installed:  

```bash
sudo apt install watchdog
```

**Configure the Watchdog**  

Edit the **watchdog configuration file**:  

```bash
sudo apt-get install vim  # Install Vim if not already installed  
sudo vim /etc/watchdog.conf
```

Modify the configuration as follows:  

```ini
watchdog-device = /dev/watchdog  

# Set the hardware timeout (default is 1 minute)
watchdog-timeout = 120  

# Set the interval between tests (should be shorter than watchdog-timeout)
interval = 15  

# Set system load limits  
max-load-1 = 24  
# max-load-5 = 18  
# max-load-15 = 12  

# Enable real-time priority  
realtime = yes  
priority = 1  
```

**Start the Watchdog Service**  
Enable and start the watchdog service:  

```bash
sudo systemctl start watchdog
```

**Test the Watchdog by Simulating a System Hang**

Trigger a **kernel crash** to see if the watchdog **automatically reboots** the system:  

```bash
sudo su
echo 1 > /proc/sys/kernel/sysrq
echo "c" > /proc/sysrq-trigger
```

**Monitor the System**  
Check if the system **automatically reboots** after the specified **timeout period**.  

**If the reboot occurs as expected, the watchdog is functioning properly.**  

## Controlling the Buzzer via GPIO  

The buzzer is mapped to GPIO 587. Use the following commands to turn it on and off:  

**Turn on the buzzer:**  

```bash
echo 587 > /sys/class/gpio/export  
echo out > /sys/class/gpio/gpio587/direction  
echo 1 > /sys/class/gpio/gpio587/value  
```  

**Turn off the buzzer:**  

```bash
echo 587 > /sys/class/gpio/export  
echo out > /sys/class/gpio/gpio587/direction  
echo 0 > /sys/class/gpio/gpio587/value  
```  

## CSI Camera Testing

To test the **CSI camera** on **reComputer R1100**, follow these steps:  

**Modify the Configuration File**  

Edit the **config.txt** file to enable the camera module:  

```bash
sudo nano /boot/firmware/config.txt
```

Add the following line at the **end** of the file:  

```ini
dtoverlay=imx219,cam0
```

**Restart the System**

Reboot to apply the changes:  

```bash
sudo reboot
```

**Check Camera Detection**  

After restarting, verify if the camera is detected:  

```bash
libcamera-jpeg --list-cameras
```

---

**Test the Camera**  

Run the following command to activate the camera:  

```bash
rpicam-hello --timeout 0
```

**If the camera preview starts successfully, the setup is complete!**  

## TPM 2.0 Connection Check

If you have connected a **TPM 2.0 module** to your device, you can verify its detection using the following command:  

```bash
ls /dev | grep tpm
```  

**Interpreting the Output:**  

- If you see **`tpm0`** and **`tpmrm0`** in the output, it confirms that the **TPM (Trusted Platform Module)** is successfully detected and available.  
- This indicates that the TPM hardware is recognized and accessible, allowing you to proceed with TPM-related functionalities or applications.  

**If the devices are listed, your TPM module is properly connected and ready for use.**  

## Interacting with ATECC608A and Generating a Random Serial Number

To communicate with the **ATECC608A** device and generate a random serial number, follow these steps:  

**Clone the `atecc-util` Repository:**  

```bash
git clone https://github.com/wirenboard/atecc-util.git
```  

**Navigate to the `atecc-util` Directory:**  

```bash
cd atecc-util
```  

**Clone the `cryptoauthlib` Repository:**  

```bash
git clone https://github.com/wirenboard/cryptoauthlib.git
```  

**Compile the ATECC Utility:**

```bash
make
```  

**Generate a Random Serial Number:**  

```bash
./atecc -b 1 -s 192 -c 'serial'
```  

- **`-b 1`** → Uses slot 1.  
- **`-s 192`** → Sets the serial number size to **192 bits**.  
- **`-c 'serial'`** → Generates a random serial number.  

**Expected Output:**  

The generated serial number will be displayed, for example:  

```bash
01235595d3d621f0ee
```  

This method enables interaction with the **ATECC608A** device, allowing you to perform operations like generating random serial numbers efficiently.  

## Interacting with EEPROM

To read and write data to an **EEPROM** (Electrically Erasable Programmable Read-Only Memory), follow these steps:  

**Grant Full Permissions to the EEPROM Device File:**  

```bash
sudo chmod 777 /sys/bus/i2c/devices/6-0050/eeprom
```  

**Write Data to the EEPROM:**  

```bash
echo "This is a test string" > /sys/bus/i2c/devices/6-0050/eeprom
```  

**Read the EEPROM Contents in Hexadecimal Format:**  

```bash
cat /sys/bus/i2c/devices/6-0050/eeprom | hexdump -C
```  

## Checking SSD Detection

To list all connected disks, including the SSD, use the following command:  

```bash
sudo fdisk -l
```  

This command will display a list of all detected storage devices. Look for entries that represent your SSD, typically labeled as:  

- `/dev/sda`  
- `/dev/sdb`  
- `/dev/sdc`, etc.  

Once you identify the correct SSD entry, you can proceed with **partitioning, formatting, or other disk management tasks** as needed.

## UPS for Safe Shutdown

A **GPIO6** connection between the **CPU and DC power-in** is used to notify the CPU when the power supply is down. The CPU must execute **urgent tasks via a script** before the supercapacitor’s energy is depleted and then initiate a **safe shutdown (`$shutdown`)**.  

**Alternative Shutdown Method**  
Another way to use this function is to **trigger a shutdown when the GPIO pin changes state**. The specified GPIO pin is configured as an **input key**, generating **KEY_POWER events**. These events are handled by **systemd-logind**, which automatically initiates a system shutdown.  

To enable this function, refer to `/boot/overlays/README`, then modify `/boot/firmware/config.txt` by adding:  

```ini
dtoverlay=gpio-shutdown,gpio_pin=6,active_low=1
```

:::note

1. For **UPS functionality details**, please contact us.  
2. The **alarm signal is active LOW**.  

:::
---

#### Python Code for Safe Shutdown  

The following Python script demonstrates **how to detect the working mode** of the **supercapacitor UPS via GPIO6**. When the system detects a power-off event, it **automatically saves data and shuts down safely**.  

```python
import RPi.GPIO as GPIO
import time
import os

num = 0

GPIO.setmode(GPIO.BCM)  # Set GPIO numbering mode
GPIO.setup(6, GPIO.IN, pull_up_down=GPIO.PUD_UP)  # Set GPIO6 as input with pull-up resistor
GPIO.add_event_detect(6, GPIO.FALLING, bouncetime=500)  # Add debounce time for stabilization

while True:
    if GPIO.event_detected(6):
        print("...External power off detected...")
        os.system("sync")  # Ensure data is written to disk
        print("...Saving data...")
        time.sleep(3)
        os.system("sync")  # Save data again
        
        while num < 5:
            print(f"--- {5 - num} seconds remaining ---")
            num += 1
            time.sleep(1)

        os.system("sudo shutdown -h now")  # Execute system shutdown
```

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
