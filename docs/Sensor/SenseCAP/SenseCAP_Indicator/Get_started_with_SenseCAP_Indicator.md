---
description: Get Started with SenseCAP Indicator (ESP32S3&RP2040 4-Inch Touch Screen)
title: Get Started with SenseCAP Indicator (ESP32S3&RP2040 4-Inch Touch Screen)
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
last_update:
  date: 4/20/2023
  author: Yvonne
---

# Get Started with SenseCAP Indicator (ESP32S3&RP2040 4-Inch Touch Screen)


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png"/></div>

SenseCAP Indicator is a 4-inch touch screen driven by ESP32 and RP2040 dual-MCU and supports Bluetooth/Wi-Fi/LoRa communication. 

The board comes with Type C and Grove interfaces, supports ADC and IIC transmission protocols, and can easily connect to other peripherals with rich GPIOs. 

SenseCAP Indicator is a fully open source powerful IoT development platform for developers. One-stop ODM Fusion service is also available for customization and quick scale-up.

## **Features**



- **Dual MCUs and Rich GPIOs:** Equipped with powerful ESP32S3 and RP2040 dual MCUs and over 400 Grove-compatible GPIOs for flexible expansion options.
- **Real-time Air Quality Monitoring:** Built-in tVOC and CO2 sensors, and an external Grove AHT20 TH sensor for more precise temperature and humidity readings.
- **Local LoRa Hub for IoT Connectivity:** Integrated Semtech SX1262 LoRa chip (optional) for connecting LoRa devices to popular IoT platforms such as Matter via Wi-Fi, without the need for additional compatible devices.
- **Fully Open Source Platform:** Leverage the extensive ESP32 and Raspberry Pi open source ecosystem for infinite application possibilities.
- **Fusion ODM Service Available:** Seeed Studio also provides one-stop ODM service for quick customization and scale-up to meet various needs.














## **Hardware Overview**

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_2.png"/></div>
<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_3.png"/></div>

## **Button Function**
Short press: Turn off /wake up the screen

Long press for 3s: Switch on/switch off the device

Long press for 10s: Factory reset

## **Grove Interfaces**

There are two Grove interfaces for connecting Grove modules, providing more possibilities for developers. 

Grove is a modular, standardized connector prototyping system and a strong open source hardware ecosystem. Click [**here**](https://www.seeedstudio.com/category/Grove-c-1003.html) to learn more

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_4.png"/></div>


## **SX1262 LoRa Chip**
The embedded SX1262 LoRa module enables you to build the LoRa application and connect your local LoRa sensors to the Cloud via Wi-Fi. For example, you could build a LoRa hub device to connect your LoRa sensors to your smart home ecosystem to implement Matter over Wi-Fi. In this way, the LoRa devices could be connected to the Matter ecosystem via Wi-Fi, without the need to buy a new Matter-compatible device.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_5.png"/></div>

## **System Diagram**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_7.png"/></div>



## **Specification**

|Screen|3\.95 Inch, Capacitive RGB Touch Screen|
| :- | :- |
|Screen Resolution|480 x 480 pixels|
|Power Supply|5V DC, 1A|
|Battery|N/A|
|Processor|<p>ESP32-S3: Xtensa® dual-core 32-bit LX7 microprocessor, up to 240 MHz</p><p>RP2040: Dual ARM Cortex-M0+ up to 133MHz</p>|
|Flash|<p>ESP32S3: 8MB</p><p>RP2040: 2MB</p>|
|External Storage|Support up to 32GB Micro SD Card (not included)|
|Wi-Fi|802\.11b/g/n, 2.4GHz|
|Bluetooth|Bluetooth 5.0 LE|
|LoRa(SX1262)|LoRaWAN/(G)FSK, 21dBm Max Transmitted Power Sensitivity/-136dBm@SF12 BW=125KHz RX Sensitivity, Up to 5km (depending on gateway antenna and environments)|
|Sensors(Optional)|CO2 (SCD41)|<p>Range: 0-40000ppm</p><p>Accuracy: 400ppm - 5000ppm ±(50ppm+5% of reading)</p>|
||TVOC (SGP40)|Range: 1-500 VOC Index Points|
||Grove Temperature and Humidity Sensor (AHT20)|Range: -40 ~ + 85 ℃/± 0.3 ℃; 0 ~ 100% RH/± 2% RH (25 ℃)|
|Buzzer|MLT-8530, Resonant Frequency：2700Hz|



## **Native Firmware**
SenseCAP Indicator native firmware enables you to use it as a desktop air quality detector，just a few simple steps to enjoy. 

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_8.png"/></div>

### **Wi-Fi Setting**
Plug the 5V power adaptor into the USB type-C power connector, the device will power on automatically, then the display will show the WiFi setting page.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_9.png"/></div>


Select the WiFi you need, input the password and connect.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_10.png"/></div>

#### **Data Viewing**
- **Home page**

Including the time, date, location info.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_11.png"/></div>


- **Sensor data**

Built-in tVOC and CO2 sensors, and an external Grove AHT20 TH sensor for more precise temperature and humidity readings.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_12.png"/></div>


Click the specified sensor to enter the detailed information page, and you can choose to display the value of 24h or a week.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_13.png"/></div>


- **Setting** 

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_14.png"/></div>

#### **Display Setting**
Brightness: Adjust screen brightness

Sleep Mode: Turn off the screen according to the interval you set

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_15.png"/></div>

#### **Date & Time Setting**
**Time Format:** You can set 24H or 12H format.

**Time Auto Update/Zone Auto Update**: When the device is connected to WiFi, it will automatically obtain the corresponding time zone and date.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_16.png"/></div>


**Manual setting**: If the time obtained through the time zone cannot automatically identify the winter time or device is offline, then you can manually set the time zone 

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_17.png"/></div>


# **Development Tutorial**

## ESP32  Firmware Flashing
            
### **Flash by Flash Download Tools (For Windows only)**

- **Step 1**: Connect the device to your PC with the provided USB type-C cable.
- **Step 2**:Install the Flash Download Tools

[Flash Download Tools for Windows](https://www.espressif.com.cn/en/support/download/other-tools?keys=&field_type_tid%5B%5D=842)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_18.png"/></div>

- **Step 3**: User interface setting

Double-click the .exe file to enter the main interface of the tool.

**Chip Type**: ESP32-S3

**WorkMode**: Develop

**LoadMode**: UART

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_19.png"/></div>

- **Step 4**: SPI Download Tab Configure

Click "..." and select the "indicator_terminal_demo.bin" file in the [SDK](https://github.com/Seeed-Solution/sensecap_indicator_esp32) to configure the loading path.


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_20.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_21.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_22.png"/></div>



- **Step 5**: SPI Flash Configure

**SPI SPEED**: 40MHz

**SPI MODE**: DIO

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_22.png"/></div>


- **Step 6**: Download Panel Configure

**COM**:  Check the ports on your Device Manage, the USB-SERIAL is the correct one.

**Baud**: 921600(recommended value）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_23.png"/></div>

- **Step 6**: Start Downloading

Then click "START" to start the downloading.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_24.png"/></div>

When it shows "FINISH", the flash has been completed.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_25.png"/></div>



### **Flash by IDF**

For Linux and MacOS: [Standard Toolchain Setup for Linux and macOS](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/get-started/linux-macos-setup.html)

For Windows: [Standard Setup of Toolchain for Windows](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/get-started/windows-setup.html)


There is "indicator_terminal_demo.bin" firmware (allinone ) in the [SDK](https://github.com/Seeed-Solution/sensecap_indicator_esp32) . you can flash it by IDF.

```
cd  <sdk>/examples/factory/
esptool.py write_flash 0x0 indicator_terminal_demo.bin
```

also you can build, flash and monitor the project.
```
cd  <sdk>/examples/terminal_demo/
idf.py -p PORT build flash monitor
```




## **RP2040 Firmware Flashing**

### **Flash by .uf2 file**
- **Step 1**: Connect the device to your PC

Long press this internal button, then connect the device to your PC by the provided USB type-C cable, release the button once connected.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_26.png"/></div>

- **Step 2**: Firmware Flash

After the connection is successful, your PC will show a disk.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_27.png"/></div>

Copy the .uf2 file in the firmware package to the disk, then the disk will log out.

The upgrade will run automatically.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_28.png"/></div>

### **Flash by Arduino IDE**
- **Step 1**: Install Arduino IDE

[Arduino IDE](https://www.arduino.cc/en/software)

- **Step 2**: Add the Raspberry Pi Pico Board

Open your Arduino IDE, click on **Arduino** > **Settings**, and copy the below URL to **Additional Boards Manager URLs**:

`https://github.com/earlephilhower/arduino-pico/releases/download/global/package\_rp2040\_index.json`

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_29.png"/></div>

Click on **Tools** > **Board** > **Board Manager**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_30.png"/></div>

Search and install "Raspberry Pi Pico/RP2040" in the Boards Manager

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_31.png"/></div>

- **Step 3**: Add Libraries

Download these libraries we need:

[Serial communication protocol](https://github.com/bakercp/PacketSerial)

[SGP40 TVOC sensor library](https://github.com/Sensirion/arduino-i2c-sgp40)

[Transfer index library: Sensirion Gas Index Algorithm](https://github.com/Sensirion/arduino-gas-index-algorithm)

[SCD41 CO2 sensor library](https://github.com/Sensirion/arduino-i2c-scd4x)

[SHT41 temperature and humidity sensor library](https://github.com/Sensirion/arduino-i2c-sht4x)

[BMP390 barometric pressure sensor library](https://github.com/adafruit/Adafruit_BMP3XX)

[Sensirion Arduino Core library](https://github.com/Sensirion/arduino-core/)

Navigate to **Sketch** -> **Include Library** -> **Add .ZIP Library**, then select the libraries you download.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"/></div>

- **Step 4**: Connect the device to your PC with the provided USB Typc-C cable.

- **Step 5**: Select the board

**Tools** > **Board** > **Raspberry Pi PR2040 Boards** > **Raspberry Pi Pico**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_33.png"/></div>

Port: Select the "usbmodem" one

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_34.png"/></div>

- **Step 6**: Open the example code file

**File** > **Open**, then select the example code file (.ino file).

We provide an example code file, you can modify the code according to your needs.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_35.png"/></div>

- **Step 7**: Verify and Upload the file.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_36.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_37.png"/></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_38.png"/></div>

# **Resource**


IDF downloard: [Standard Toolchain Setup for Linux and macOS](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/get-started/linux-macos-setup.html)

`                            `[Standard Setup of Toolchain for Windows](https://docs.espressif.com/projects/esp-idf/en/latest/esp32s3/get-started/windows-setup.html)

SenseCAP Indicator SDK：[SenseCAP Indicator SDK](https://github.com/Seeed-Solution/sensecap_indicator_esp32.git)


# **Tech Support**

Don’t worry, we’ve got you covered! Please visit our [Seeed Official Discord Channel](https://discord.gg/cPpeuQMM) to ask your questions！