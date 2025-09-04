---
description: Arduino Introduction
title: Arduino Introduction
keywords:
- Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arduino
last_update:
  date: 7/19/2023
  author: Matthew
---
<!-- ---
name: Arduino Introduction
nointro:
--- -->

## What is Arduino?

Arduino is a versatile platform with multiple facets, each serving different roles in the development and deployment of hardware and software for various projects. Below is a breakdown of the different meanings and components associated with Arduino:

### 1. **Arduino Board**

- **Description**: Arduino refers primarily to the physical boards that are used for building digital devices and interactive objects that can sense and control objects in the physical world.
- **Utility**: These boards are widely used in prototyping projects in electronics and are favored for their ease of use and open-source nature.
- **Venders**: [**Seeed Studio**](https://www.seeedstudio.com/catalogsearch/result/?q=arduino), [**Arduino Official**](https://store-usa.arduino.cc/?selectedStore=us).

### 2. **Arduino Software (IDE)**

- **Description**: Arduino IDE (Integrated Development Environment) is the software used to write and upload programs to Arduino hardware.
- **Utility**: It provides a convenient way to program the boards, simplifying the process of coding and reducing the need for detailed electronics knowledge.
- **Download**: [**Arduino Official**](https://www.arduino.cc/en/software).

### 3. **Arduino Toolchain**

- **Description**: When you install the Arduino IDE, it automatically installs a set of tools known as the toolchain. This includes compilers, libraries, and other tools needed to translate the code you write into a format that Arduino boards can execute.
- **Utility**: The toolchain simplifies the installation process by automating the setup of compilers and other necessary tools.

### 4. **Arduino Libraries**

- **Description**: These are collections of pre-written code that make it easier to control complex hardware or perform common tasks.
- **Utility**: Libraries provide a simple way to interface with hardware, but they can sometimes be inefficient and limit access to hardware features due to their high-level abstraction.
- **GitHub**: [**Seeed Studio**](https://github.com/Seeed-Studio), [**Arduino Official**](https://github.com/arduino), [**Adafruit**](https://github.com/adafruit).

### 5. **Arduino Bootloader**

- **Description**: A small program that resides on the Arduino board which allows you to upload new code without the use of an external hardware programmer.
- **Utility**: It simplifies the process of uploading new code to the board directly from the Arduino IDE.

### 6. **Arduino Headers**

- **Description**: These refer to the physical configuration of connector pins on the Arduino boards.
- **Utility**: They allow for the attachment of various compatible shields (expansion boards) or other devices to extend the functionality of an Arduino board.
- **Arduino Shields**: [**Seeed Studio**](https://www.seeedstudio.com/catalogsearch/result/?q=arduino%20shield), [**Arduino Official**](https://search.arduino.cc/search?q=shield&tab=store).

## Programming in Arduino

- **Language**: The primary programming language used in the Arduino IDE is C/C++, though it is often referred to simply as Arduino code or sketches.
- **Sketches**: These are Arduino programs that are written in the IDE. They use the Arduino libraries and can be used to control the board's behavior based on the inputs and outputs defined.

### Arduino IDE Download

For every Arduino-supported you might need Arduino IDE to upload the code, for checking whether the board is functioning well and ebabling every application.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

### How to install an Arduino library

We have provided a tutorial about how you install an Arduino library. You should notice that almost all of our library was stored at [Github](https://github.com/Seeed-Studio). We will provide Arduino libraries when a product need a library, like [CAN-BUS Shield V2](https://github.com/Seeed-Studio/Seeed_Arduino_CAN). But for some other simple products, there is no need to write a library such as Grove - Button.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"><strong><span><font color={'FFFFFF'} size={"4"}>How to install Arduino Library</font></span></strong></a>
</div>

### How to Upload Code

Here we have another tutorial for uploading the code:

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"><strong><span><font color={'FFFFFF'} size={"4"}>How to upload the code</font></span></strong></a>
</div>

### More How-to Tutorials

- [How to Install Arduino Library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library)
- [How to Use and Write a Library](https://wiki.seeedstudio.com/How_to_use_and_write_a_library)
- [How to Upload Code](https://wiki.seeedstudio.com/Upload_Code)
- [How to Use External Editor](https://wiki.seeedstudio.com/Use_External_Editor)
- [How to Use Demos Downloaded from Seeed's Github](https://wiki.seeedstudio.com/Guide_to_use_demos_downloaded_from_Seeed-s_Github)

- [How to Use Sketchbook](https://wiki.seeedstudio.com/How_To_Use_Sketchbook)
- [How to Use Sketchbook of Sidekick Advanced Kit](https://wiki.seeedstudio.com/Sketchbook_of_Sidekick_Advanced_Kit)

- [How to Use Software Serial](https://wiki.seeedstudio.com/Software-Serial)
- [How to Use Software I2C](https://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide)
- [How to Use Software SPI](https://wiki.seeedstudio.com/Software-SPI)
- [How to Use Software Static Library](https://wiki.seeedstudio.com/Software-Static-Library)
- [How to Handle Arduino Common Error](https://wiki.seeedstudio.com/Arduino_Common_Error)

- [How to Choose A Gas Sensor](https://wiki.seeedstudio.com/How-to-Choose-A-Gas-Sensor)
- [How to Choose Different Grove Temperature Sensors](https://wiki.seeedstudio.com/A_Comparison_of_Different_Grove_Temperature_Sensors)
- [How to Choose GPS Modules](https://wiki.seeedstudio.com/GPS-Modules-Selection-Guide)
- [How to Choose Finger Touch](https://wiki.seeedstudio.com/How_to_detect_finger_touch)
- [How to Choose Seeed Relay](https://wiki.seeedstudio.com/Seeed_Relay_Page)
- [How to Choose on Barometer Sensor](https://wiki.seeedstudio.com/Barometer-Selection-Guide)

- [How to Choose The Right Cable](https://wiki.seeedstudio.com/How_To_Choose_The_Right_Cable)

### More Advanced Tutorials

- [Suli](https://wiki.seeedstudio.com/Suli)
- [How to Use Seeed Arduino Serial](https://wiki.seeedstudio.com/Seeed_Arduino_Serial)
- [How to Use I2C And I2C Address of Seeed Product](https://wiki.seeedstudio.com/I2C_And_I2C_Address_of_Seeed_Product)
- [How to Use ODYSSEY-X86J4105 with Firmata](https://wiki.seeedstudio.com/ODYSSEY-X86J4105-Firmata)
- [How to Debug Arduino Boards using SWD Interface](https://wiki.seeedstudio.com/Software-SWD)
- [How to Bridge Mosiquitto MQTT Broker to AWS IoT with Arduino Boards](https://wiki.seeedstudio.com/Arduino-AWS-IOT-Bridge)
- [How to use Arduino Boards as DAPLink Device](https://wiki.seeedstudio.com/Arduino-DAPLink)
- [How to Flash Arduino Bootloader Using DAPLink](https://wiki.seeedstudio.com/Flashing-Arduino-Bootloader-DAPLink)
- [How to Understand Xadow IO Pin Mapping](https://wiki.seeedstudio.com/Xadow_IO_pin_mapping)

## Arduino Cores

- **Purpose**: Arduino cores allow the Arduino IDE to communicate with different types of microcontrollers. They adapt standard Arduino commands to the specifics of the underlying hardware.
- **Examples**: Different cores exist for microcontrollers like RP2040, ESP32, ESP8266, and more traditional ones like AVR and SAMD. Some cores are maintained by the community, ensuring support and updates for a wide range of devices.

### Arduino-supported Boards

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/xiao_topicpage/main.png" style={{width:1000, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>Seeed Studio XIAO Series consists of 7 versions to satisfy the diverse needs of makers, product designers,
and educators. If you're a maker, you can take advantage of its rich community resources to get inspiration and knowledge for your own projects. The XIAO Series offers educators a comprehensive gettingstarted course and detailed wikis to quickly learn how to use XIAO for their projects. If you're a product designer, XIAO SoM User Manual covers everything from Module Selection to Mass Production. <br /> </font>
    </div>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=xiao" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Get One Now </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/SeeedStudio_XIAO_Series_Introduction/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Know More</font></span></strong></a>
</div>

<br />

<br />

<div class="all_container">
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>The Wio Terminal is a SAMD51-based microcontroller with Wireless Connectivity powered by Realtek RTL8720DN that’s compatible with Arduino and MicroPython. Currently, wireless connectivity is only supported by Arduino. It runs at 120MHz (Boost up to 200MHz), 4MB External Flash and 192KB RAM. It supports both Bluetooth and Wi-Fi providing backbone for IoT projects. <br /> </font>
    </div>
        <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" style={{width:1000, height:'auto'}}/>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-p-4509.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Get One Now </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Wio Terminal</font></span></strong></a>
</div>

<br />
<br />

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png" style={{width:1000, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SenseCAP Indicator is a 4-inch touch screen driven by ESP32 and RP2040 dual-MCU and supports Wi-Fi/BLE/LoRa® communication. It is a fully open-source powerful IoT development platform for developers. One-stop ODM Fusion service is also available for customization and quick scale-up. <br /> </font>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Get One Now </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/Develop_with_SenseCAP_Indicator/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚SenseCAP Indicator</font></span></strong></a>
</div>

#### More

More on [Seeed Studio Bazaar](https://www.seeedstudio.com/catalogsearch/result/?q=arduino).

### Arduino Shield(extension boards)

- [Grove Base V2](https://wiki.seeedstudio.com/Base_Shield_V2/)
- [CAN-BUS Shield V2.0](https://wiki.seeedstudio.com/CAN-BUS_Shield_V2.0/)
- [Relay Shield v3](https://wiki.seeedstudio.com/Relay_Shield_v3/)
- [W5500 Ethernet Shield v1.0](https://wiki.seeedstudio.com/W5500_Ethernet_Shield_v1.0/)
- [Small e-Paper Shield V2](https://wiki.seeedstudio.com/Small_e-Paper_Shield_V2/)
- [Spartan Edge Accelerator Board](https://wiki.seeedstudio.com/Spartan-Edge-Accelerator-Board/)
- [Grove Shield for Arduino Nano](https://wiki.seeedstudio.com/Grove_Shield_for_Arduino_Nano/)
- More on [Seeed Studio Bazaar](https://www.seeedstudio.com/catalogsearch/result/?q=arduino%20shields).

### Kit with Courses

- [Grove Beginner Kit for Arduino](https://wiki.seeedstudio.com/Grove-Beginner-Kit-For-Arduino/)
- [Rainbow Cube kit- RGB 4X4X4 (Rainbowduino Compatible)](https://wiki.seeedstudio.com/Rainbow_Cube_kit_RGB_4_4_4_Rainbowduino_Compatible/)
- [Grove Creator Kit for Arduino](https://wiki.seeedstudio.com/Grove-Creator-Kit-1/)

## ✨ Contributor Project

- This page is updated by the [Seeed Studio Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6).
- Thanks [Elizabeth's efforts](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=33963525) and your work will be exhibited!

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
