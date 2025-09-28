---
description: Arduino 介绍
title: Arduino 介绍
keywords:
- Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Arduino
last_update:
  date: 7/19/2023
  author: Matthew
---
<!-- ---
name: Arduino 介绍
nointro:
--- -->

## 什么是 Arduino？

Arduino 是一个多面向的平台，每个方面在各种项目的硬件和软件开发与部署中都发挥着不同的作用。以下是与 Arduino 相关的不同含义和组件的详细说明：

### 1. **Arduino 开发板**：
   - **描述**：Arduino 主要指用于构建数字设备和交互式对象的物理开发板，这些设备能够感知和控制物理世界中的对象。
   - **用途**：这些开发板广泛用于电子项目的原型制作，因其易用性和开源特性而备受青睐。
   - **供应商**：[**Seeed Studio**](https://www.seeedstudio.com/catalogsearch/result/?q=arduino)，[**Arduino 官方**](https://store-usa.arduino.cc/?selectedStore=us)。

### 2. **Arduino 软件（IDE）**：
   - **描述**：Arduino IDE（集成开发环境）是用于编写程序并将其上传到 Arduino 硬件的软件。
   - **用途**：它提供了一种便捷的方式来对开发板进行编程，简化了编码过程，减少了对详细电子知识的需求。
   - **下载**：[**Arduino 官方**](https://www.arduino.cc/en/software)。

### 3. **Arduino 工具链**：
   - **描述**：当您安装 Arduino IDE 时，它会自动安装一套称为工具链的工具。这包括编译器、库和其他将您编写的代码转换为 Arduino 开发板可执行格式所需的工具。
   - **用途**：工具链通过自动化编译器和其他必要工具的设置来简化安装过程。

### 4. **Arduino 库**：
   - **描述**：这些是预编写代码的集合，使控制复杂硬件或执行常见任务变得更容易。
   - **用途**：库提供了与硬件接口的简单方法，但由于其高级抽象，有时可能效率不高并限制对硬件功能的访问。
   - **GitHub**：[**Seeed Studio**](https://github.com/Seeed-Studio)，[**Arduino 官方**](https://github.com/arduino)，[**Adafruit**](https://github.com/adafruit)。

### 5. **Arduino 引导程序**：
   - **描述**：驻留在 Arduino 开发板上的小程序，允许您在不使用外部硬件编程器的情况下上传新代码。
   - **用途**：它简化了直接从 Arduino IDE 向开发板上传新代码的过程。

### 6. **Arduino 接头**：
   - **描述**：这些指的是 Arduino 开发板上连接器引脚的物理配置。
   - **用途**：它们允许连接各种兼容的扩展板（扩展板）或其他设备，以扩展 Arduino 开发板的功能。
   - **Arduino 扩展板**：[**Seeed Studio**](https://www.seeedstudio.com/catalogsearch/result/?q=arduino%20shield)，[**Arduino 官方**](https://search.arduino.cc/search?q=shield&tab=store)。

## Arduino 编程

- **语言**：Arduino IDE 中使用的主要编程语言是 C/C++，尽管它通常简称为 Arduino 代码或草图。
- **草图**：这些是在 IDE 中编写的 Arduino 程序。它们使用 Arduino 库，可以根据定义的输入和输出来控制开发板的行为。

### Arduino IDE 下载

对于每个 Arduino 支持的设备，您可能需要 Arduino IDE 来上传代码，检查开发板是否正常工作并启用每个应用程序。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong></a>
</div>

### 如何安装 Arduino 库

我们提供了关于如何安装 Arduino 库的教程。您应该注意，我们几乎所有的库都存储在 [Github](https://github.com/Seeed-Studio) 上。当产品需要库时，我们会提供 Arduino 库，比如 [CAN-BUS Shield V2](https://github.com/Seeed-Studio/Seeed_Arduino_CAN)。但对于其他一些简单的产品，不需要编写库，比如 Grove - Button。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/"><strong><span><font color={'FFFFFF'} size={"4"}>如何安装 Arduino 库</font></span></strong></a>
</div>

### 如何上传代码

这里我们有另一个关于上传代码的教程：

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/"><strong><span><font color={'FFFFFF'} size={"4"}>如何上传代码</font></span></strong></a>
</div>

### 更多操作教程

- [如何安装 Arduino 库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)
- [如何使用和编写库](https://wiki.seeedstudio.com/cn/How_to_use_and_write_a_library)
- [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code)
- [如何使用外部编辑器](https://wiki.seeedstudio.com/cn/Use_External_Editor)
- [如何使用从 Seeed Github 下载的演示](https://wiki.seeedstudio.com/cn/Guide_to_use_demos_downloaded_from_Seeed-s_Github)


- [如何使用 Sketchbook](https://wiki.seeedstudio.com/cn/How_To_Use_Sketchbook)
- [如何使用 Sidekick Advanced Kit 的 Sketchbook](https://wiki.seeedstudio.com/cn/Sketchbook_of_Sidekick_Advanced_Kit)


- [如何使用软件串口](https://wiki.seeedstudio.com/cn/Software-Serial)
- [如何使用软件 I2C](https://wiki.seeedstudio.com/cn/Arduino_Software_I2C_user_guide)
- [如何使用软件 SPI](https://wiki.seeedstudio.com/cn/Software-SPI)
- [如何使用软件静态库](https://wiki.seeedstudio.com/cn/Software-Static-Library)
- [如何处理 Arduino 常见错误](https://wiki.seeedstudio.com/cn/Arduino_Common_Error)


- [如何选择气体传感器](https://wiki.seeedstudio.com/cn/How-to-Choose-A-Gas-Sensor)
- [如何选择不同的 Grove 温度传感器](https://wiki.seeedstudio.com/cn/A_Comparison_of_Different_Grove_Temperature_Sensors)
- [如何选择 GPS 模块](https://wiki.seeedstudio.com/cn/GPS-Modules-Selection-Guide)
- [如何选择手指触摸](https://wiki.seeedstudio.com/cn/How_to_detect_finger_touch)
- [如何选择 Seeed 继电器](https://wiki.seeedstudio.com/cn/Seeed_Relay_Page)
- [如何选择气压传感器](https://wiki.seeedstudio.com/cn/Barometer-Selection-Guide)


- [如何选择合适的线缆](https://wiki.seeedstudio.com/cn/How_To_Choose_The_Right_Cable)

### 更多高级教程

- [Suli](https://wiki.seeedstudio.com/cn/Suli)
- [如何使用 Seeed Arduino Serial](https://wiki.seeedstudio.com/cn/Seeed_Arduino_Serial)
- [如何使用 I2C 和 Seeed 产品的 I2C 地址](https://wiki.seeedstudio.com/cn/I2C_And_I2C_Address_of_Seeed_Product)
- [如何在 ODYSSEY-X86J4105 上使用 Firmata](https://wiki.seeedstudio.com/cn/ODYSSEY-X86J4105-Firmata)
- [如何使用 SWD 接口调试 Arduino 开发板](https://wiki.seeedstudio.com/cn/Software-SWD)
- [如何使用 Arduino 开发板将 Mosiquitto MQTT 代理桥接到 AWS IoT](https://wiki.seeedstudio.com/cn/Arduino-AWS-IOT-Bridge)
- [如何将 Arduino 开发板用作 DAPLink 设备](https://wiki.seeedstudio.com/cn/Arduino-DAPLink)
- [如何使用 DAPLink 刷写 Arduino 引导程序](https://wiki.seeedstudio.com/cn/Flashing-Arduino-Bootloader-DAPLink)
- [如何理解 Xadow IO 引脚映射](https://wiki.seeedstudio.com/cn/Xadow_IO_pin_mapping)

## Arduino Cores

- **目的**：Arduino cores 允许 Arduino IDE 与不同类型的微控制器进行通信。它们将标准的 Arduino 命令适配到底层硬件的具体特性。
- **示例**：不同的 cores 适用于不同的微控制器，如 RP2040、ESP32、ESP8266，以及更传统的 AVR 和 SAMD 等。一些 cores 由社区维护，确保为广泛的设备提供支持和更新。

### Arduino 支持的开发板

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/xiao_topicpage/main.png" style={{width:1000, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>Seeed Studio XIAO 系列包含 7 个版本，以满足创客、产品设计师和教育工作者的多样化需求。如果您是创客，您可以利用其丰富的社区资源为自己的项目获得灵感和知识。XIAO 系列为教育工作者提供了全面的入门课程和详细的 wiki，以快速学习如何在项目中使用 XIAO。如果您是产品设计师，XIAO SoM 用户手册涵盖了从模块选择到批量生产的所有内容。<br /> </font>
    </div>
</div>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=xiao" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 立即购买 </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/SeeedStudio_XIAO_Series_Introduction/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 了解更多</font></span></strong></a>
</div>

<br />

<br />

<div class="all_container">
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>Wio Terminal 是一款基于 SAMD51 的微控制器，具有由 Realtek RTL8720DN 提供的无线连接功能，兼容 Arduino 和 MicroPython。目前，无线连接仅由 Arduino 支持。它运行在 120MHz（可提升至 200MHz），具有 4MB 外部闪存和 192KB RAM。它支持蓝牙和 Wi-Fi，为物联网项目提供骨干支持。<br /> </font>
    </div>
        <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" style={{width:1000, height:'auto'}}/>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-p-4509.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 立即购买 </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Wio Terminal</font></span></strong></a>
</div>

<br />
<br />


<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_1.png" style={{width:1000, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>SenseCAP Indicator 是一款 4 英寸触摸屏，由 ESP32 和 RP2040 双 MCU 驱动，支持 Wi-Fi/BLE/LoRa® 通信。它是一个完全开源的强大物联网开发平台，面向开发者。还提供一站式 ODM 融合服务，用于定制和快速扩展。<br /> </font>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Indicator-D1-p-5643.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ 立即购买 </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/Develop_with_SenseCAP_Indicator/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚SenseCAP Indicator</font></span></strong></a>
</div>

#### 更多

更多产品请访问 [Seeed Studio Bazaar](https://www.seeedstudio.com/catalogsearch/result/?q=arduino)。


### Arduino Shield（扩展板）

- [Grove Base V2](https://wiki.seeedstudio.com/cn/Base_Shield_V2/)
- [CAN-BUS Shield V2.0](https://wiki.seeedstudio.com/cn/CAN-BUS_Shield_V2.0/)
- [Relay Shield v3](https://wiki.seeedstudio.com/cn/Relay_Shield_v3/)
- [W5500 Ethernet Shield v1.0](https://wiki.seeedstudio.com/cn/W5500_Ethernet_Shield_v1.0/)
- [Small e-Paper Shield V2](https://wiki.seeedstudio.com/cn/Small_e-Paper_Shield_V2/)
- [Spartan Edge Accelerator Board](https://wiki.seeedstudio.com/cn/Spartan-Edge-Accelerator-Board/)
- [Grove Shield for Arduino Nano](https://wiki.seeedstudio.com/cn/Grove_Shield_for_Arduino_Nano/)
- 更多产品请访问 [Seeed Studio Bazaar](https://www.seeedstudio.com/catalogsearch/result/?q=arduino%20shields)。

### 带课程的套件

- [Grove Arduino 初学者套件](https://wiki.seeedstudio.com/cn/Grove-Beginner-Kit-For-Arduino/)
- [彩虹立方体套件 - RGB 4X4X4（兼容 Rainbowduino）](https://wiki.seeedstudio.com/cn/Rainbow_Cube_kit_RGB_4_4_4_Rainbowduino_Compatible/)
- [Grove Arduino 创客套件](https://wiki.seeedstudio.com/cn/Grove-Creator-Kit-1/)

## ✨ 贡献者项目

- 此页面由 [Seeed Studio 贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6) 更新。
- 感谢 [Elizabeth 的努力](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=33963525)，您的工作将被展示！

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>