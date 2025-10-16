---
description: This page is a collection of all TinyML content.
title: TinyML
keywords:
- tinyml
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /tinyml_topic
last_update:
  date: 05/28/2024
  author: Yaohao
---

# Tiny Machine Learning(TinyML)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/main.jpg" style={{width:1000, height:'auto'}}/></div>

<br />

TinyML is a field of study in Machine Learning and Embedded Systems that explores machine learning on small, low-powered microcontrollers, enabling secure, low-latency, low-power and low-bandwidth machine learning inferencing on edge devices. If you're excited about TinyML but not sure where to start, our one-stop guide is perfect for you. This guide provides an overview of what TinyML is, the opportunities it offers, and step-by-step instructions on how to get started. Join this exciting field and start your TinyML journey today!

## What is TinyML?

Tiny Machine Learning (TinyML) is a field of machine learning that focuses on the development and deployment of ML models on low power, low-footprint microcontroller devices like an Arduino, for example.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/1.png" style={{width:1000, height:'auto'}}/></div>

Machine learning is a field of computer systems that aims to develop self-improving algorithms and statistical models. This is done with massive amounts of data, which a model analyses and extracts patterns from in order to learn and improve on a given task. This seemingly simple paradigm has led to groundbreaking advancements in complex tasks like forecasting, anomaly detection, and computer vision!

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/blog/2021/06/14/everything-about-tinyml-basics-courses-projects-more/" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div>

## Recommended Boards Supporting TinyML

### Seeed Studio XIAO ESP32S3 Sense

<div class="all_container">
    <div class="xiao_topic_page_vertical">
        <font size={"2"}>Ultra-small ESP32-S3 development board with OV2640 camera, a risging star in the fields of AIoT</font>
        <br /><font size={"3"}>HIGH-PERFORMANCE</font>
        <font size={"2"}>240MHz Xtensa 32-bit LX7 dual-core processor</font>
        <br /><font size={"3"}>MEMORY</font>
        <font size={"2"}>8MB PSRAM + 8MB FLASH</font>
        <br /><font size={"3"}>MULTI-FUNCTIONAL</font>
        <font size={"2"}>Microphone/SD card slot/Detachable OV2640</font>
        <br /><font size={"3"}>WIRELESS</font>
        <font size={"2"}>2.4GHz WiFi and BLE 5</font>
        <br /><font size={"3"}>TINYML-SUPPORTED</font>
        <font size={"2"}>Image Processing/Speech Recognition</font>
    </div>
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/tinyml-topic/xiaos3sense.jpg" style={{width:800, height:'auto'}}/>
    </div>
</div>

<br /> <br /> <br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Know More </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Getting Started</font></span></strong></a>
</div>

<br />

### Seeed Studio XIAO nRF52840 Sense

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/xiao_topicpage/nrf52840sense.jpg" style={{width:800, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_vertical">
        <font size={"2"}>XIAO nRF52840 Sense features an onboard microphone and 6-axis IMU, suitable for the TinyML AI+IOT project</font>
        <br /><font size={"3"}>HIGH-PERFORMANCE</font>
        <font size={"2"}>ARM® Cortex™-M4 32-bit processor with FPU operating at 64 MHz</font>
        <br /><font size={"3"}>Memory</font><font size={"2"}>256 KB RAM + 2MB FLASH</font>
        <br /><font size={"3"}>MULTI-FUNCTIONAL</font><font size={"2"}>Onboard microphone and 6-axis IMU</font>
        <br /><font size={"3"}>WIRELESS</font><font size={"2"}>Bluetooth 5.0, NFC with onboard antenna</font>
        <br /><font size={"3"}>TINYML-SUPPORTED</font><font size={"2"}>Gesture/Voice recognition</font>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Know More </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO_BLE/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Getting Started</font></span></strong></a>
</div>

<br />

### Seeed Studio XIAO RP2040

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <br />
        <img src="https://files.seeedstudio.com/wiki/xiao_topicpage/rp2040.jpg" style={{width:800, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_vertical">
        <font size={"2"}>XIAO RP2040 is an ultra small, high performance universal development board. Features onboard 2MB flash, micropython support</font>
        <br /><font size={"3"}>GETTING STARTED FAST</font>
        <font size={"2"}>Support Arduino/Micropython/CircuitPython</font>
        <br /><font size={"3"}>COST-EFFECTIVE</font>
        <font size={"2"}>Lower the barrier to entry</font>
        <br /><font size={"3"}>MORE POWERFUL MCU (RP2040)</font>
        <font size={"2"}>Dual-core ARM Cortex M0+ Raspberry PI RP2040 chip, running up to 133 MHz</font>
        <br /><font size={"3"}>RICH ON-CHIP MEMORY</font>
        <font size={"2"}>264KB of SRAM, 2MB of onboard Flash</font>
        <br /><font size={"3"}>INTERFACE RICH</font>
        <font size={"2"}>11 digital pins, 4 analog pins, 11 PWM Pins, 1 I2C interface, 1 UART interface, 1 SPI interface, 1 SWD Bonding pad interface</font>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Buy Now </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-RP2040/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Getting Started</font></span></strong></a>
</div>

<br />

### Seeed Studio XIAO SAMD21

<div class="all_container">
    <div class="xiao_topic_page_vertical">
        <font size={"2"}>XIAO SAMD21 is an ultra small, high performance universal development board</font>
        <br /><font size={"3"}>USERS' FAVOURITE</font>
        <font size={"2"}>First pioneering product of XIAO series!</font>
        <br /><font size={"3"}>THUMB-SIZED</font>
        <font size={"2"}>The smallest Arduino-compatible board in Seeed Studio board Family</font>
        <br /><font size={"3"}>POWERFUL MCU (SAMD21)</font>
        <font size={"2"}>ARM® Cortex®-M0+ 32bit 48MHz microcontroller(SAMD21G18) with 256KB Flash,32KB SRAM</font>
        <br /><font size={"3"}>FLEXIBLE COMPATIBILITY</font>
        <font size={"2"}>Compatible with Arduino IDE, Breadboard-friendly</font>
        <br /><font size={"3"}>INTERFACE RICH</font>
        <font size={"2"}>11 digital/analog pins, 10 PWM Pins, 1 DAC output, 1 SWD Bonding pad interface, 1 I2C interface, 1 UART interface, 1 SPI interface</font>
    </div>
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/xiao_topicpage/samd21.jpg" style={{width:800, height:'auto'}}/>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Pre-Soldered-p-4747.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Buy Now </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/Seeeduino-XIAO/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Getting Started</font></span></strong></a>
</div>

<br />

### Wio Terminal

<div class="all_container">
    <div class="xiao_topic_page_vertical">
        <font size={"2"}>A complete AI platform to get started with TinyML and IoT - Built around the ATSAMD51P19 and ARM Cortex-M4F at 120MHz for high compatibility with various ML frameworks for microcontrollers</font>
        <br /><font size={"3"}>HIGH-PERFORMANCE</font>
        <font size={"2"}>ATSAMD51 Core with Realtek RTL8720DN BLE 5.0 & Wi-Fi 2.4G/5G Dev Board</font>
        <br /><font size={"3"}>Memory</font><font size={"2"}>4 MB External Flash, 192 KB RAM</font>
        <br /><font size={"3"}>MULTI-FUNCTIONAL</font><font size={"2"}>Complete system equipped with Screen + Development Board + Input/Output Interface + Enclosure</font>
        <br /><font size={"3"}>WIRELESS</font><font size={"2"}>Reliable Wireless Connectivity, Equipped with Realtek RTL8720DN, dual-band 2.4Ghz / 5Ghz Wi-Fi</font>
        <br /><font size={"3"}>TINYML-SUPPORTED</font><font size={"2"}>An Azure certified, Edge Impulse supported device to quickly get started with IoT and TinyML</font>
    </div>
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/tinyml-topic/wio.png" style={{width:600, height:'auto'}}/>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Terminal-p-4509.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Know More </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Getting Started</font></span></strong></a>
</div>

<br />

### Grove Vision AI

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/tinyml-topic/vision.png" style={{width:600, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_vertical">
        <br /><br /><br />
        <font size={"2"}>A pre-trained embedded AI Vision Sensor with Himax HX6537-A processor, OV2640 camera sensor, a digital microphone and a 6-axis Inertial Measurement Unit (IMU), support YOLO v5 and Edge Impulse</font>
        <br /><font size={"3"}>MULTI-FUNCTIONAL</font><font size={"2"}>Equipped with OV2640 sensor for image processing<br />A digital microphone & a 6-axis Inertial Measurement Unit (IMU)</font>
        <br /><font size={"3"}>TINYML-SUPPORTED</font><font size={"2"}>Officially supported by Edge Impulse, with 3 customized models to realize mainstream ML functions like object detection</font>
        <br /><br />
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Know More </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/Grove-Vision-AI-Module/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Getting Started</font></span></strong></a>
</div>

<br />

### Grove Vision AI V2

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/0.jpg" style={{width:600, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_vertical">
        <br />
        <font size={"2"}>It is an MCU-based vision AI module powered by Arm Cortex-M55 & Ethos-U55. It supports TensorFlow and PyTorch frameworks and is compatible with Arduino IDE. With the SenseCraft AI algorithm platform, trained ML models can be deployed to the sensor without the need for coding.</font>
        <br /><font size={"3"}>Versatile AI Model Support:</font><font size={"2"}> Easily deploy off-the-shelf or your custom AI models from SenseCraft AI, including Mobilenet V1, V2, Efficientnet-lite, Yolo v5 & v8. TensorFlow and PyTorch frameworks are supported.</font>
        <br /><font size={"3"}>Fully Open Source:</font><font size={"2"}>All codes, design files, and schematics available for modification and use.</font>
        <br /><font size={"3"}>Rich Peripheral Devices:</font><font size={"2"}> Includes PDM microphone, SD card slot, Type-C, Grove interface, and other peripherals.</font><br />
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Know More </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/grove_vision_ai_v2/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Getting Started</font></span></strong></a>
</div>

<br />

### SenseCAP K1100

<div class="all_container">
    <div class="xiao_topic_page_vertical">
        <br /><br /><br />
        <font size={"2"}>The Sensor Prototype Kit to Quickly Get Started With LoRa® and AI<br /><br />Deploy in 10 minutes, build an AIoT project through 3 steps<br /><br />Combinition of ML and LoRa® Technologies<br /><br />Compatible with 400+ Grove sensors to support extensive applications<br /><br />Board integration with mainstream platforms for cloud support<br /><br />Upgradable to SenseCAP series industrial sensors</font>
        <br /><br /><br />
    </div>
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/tinyml-topic/k1100.png" style={{width:800, height:'auto'}}/>
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Know More </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/K1100-quickstart/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Getting Started</font></span></strong></a>
</div>

<br />

### SenseCAP A1101

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/tinyml-topic/a1101.png" style={{width:800, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_vertical">
      <br /><br /><br /><br />
      <font size={"2"}>TinyML Edge AI enabled smart image sensor, supporting a variety of AI models such as image recognition, people counting, target detection, meter recoignition etc.</font>
      <br /><font size={"3"}>TINYML-SUPPORTED</font><font size={"2"}>Officially supported by Edge Impulse, quickly get started training and deploying your ML models!</font>
      <br /><br /><br /><br /><br />
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Know More </font></span></strong></a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/SenseCAP-Vision-AI-Get-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Getting Started</font></span></strong></a>
</div>

<br />

## Support Platforms

Our devices is now supported by a very large number of co-operative platforms and cases.

- **Seeed Studio SenseCraft Model Assistant** is an open-source project focused on embedded AI.
- **Edge Impulse** is optimized for sensor-based applications.
- **TensorFlow Lite** is lightweight and optimized for deep learning.

By supporting these platforms, we enable developers to easily build and deploy machine learning models on edge devices, from microcontrollers to single-board computers.

### SenseCraft Model Assistant

SenseCraft Model Assistant is an open-source project focused on embedded AI, developed by Seeed Studio. It offers a range of optimized algorithms for real-world scenarios, making implementation more user-friendly and achieving faster and more accurate inference on embedded devices.

SenseCraft Model Assistant currently supports anomaly detection, computer vision, and scenario-specific algorithms, with more to be added in the future.

<div class="button_tech_support_container">
<a href="https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/setup/process" class="button_edgelab"></a>
</div>

It provides a user-friendly platform for training on collected data and visualizing algorithm performance, and its models are designed to run on low-cost hardware such as ESP32, Arduino development boards, and Raspberry Pi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/pfld_meter.gif" style={{width:700, height:'auto'}}/></div>

SenseCraft Model Assistant also supports multiple formats for model export, including TensorFlow Lite, ONNX, and special formats like TensorRT and OpenVINO. With SenseCraft Model Assistant, developers can easily build and deploy machine learning models on a wide range of embedded devices.

### Codecraft

Codecraft is based on Scratch 3.0 language and enables programming by simply "dragging and dropping" blocks. In addition to Scratch's ability to program interactive games or animations, Codecraft also supports a variety of common hardware devices, enabling hardware and software integration, which makes programming even more fun.

<div class="button_tech_support_container">
<a href="https://ide.tinkergen.com/" class="button_codecraft"></a>
</div>

With Codecraft and Wio Terminal, it is now possible to experience the entire process of embedded machine learning without having to deal with a complex programming environment and programming knowledge.

Powered by Edge Impulse, Tiny Machine Learning is easily accessible by beginners using Codecraft graphical programming. By simple drag-and-drop coding, acquiring data, training, and deploying model is more vivid than ever.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/4625491.gif" style={{width:400, height:'auto'}}/></div>

### Edge Impulse

Edge Impulse is a powerful machine learning platform for building and deploying embedded machine learning models.

<div class="button_tech_support_container">
<a href="https://edgeimpulse.com/" class="button_edgeimpulse"></a>
</div>

It provides developers with a range of tools for collecting and processing sensor data, designing and training machine learning models, and deploying those models to edge devices.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/4262777.gif" style={{width:500, height:'auto'}}/></div>

Edge Impulse is optimized for sensor-based applications and supports a wide range of hardware platforms. With Edge Impulse, developers can easily build and deploy machine learning models on embedded devices, making it a valuable tool for IoT and smart device applications.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/edgeimpulse.png" style={{width:600, height:'auto'}}/></div> -->

### TensorFlow Lite

TensorFlow Lite is a lightweight version of the popular TensorFlow machine learning framework, designed for running on embedded and mobile devices.

<div class="button_tech_support_container">
<a href="https://www.tensorflow.org/lite" class="button_tensorflowlite"></a>
</div>

It provides developers with a range of tools for building and deploying machine learning models on resource-constrained devices, including support for specialized hardware accelerators.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/image5.gif" style={{width:800, height:'auto'}}/></div>

TensorFlow Lite supports a wide range of hardware platforms and is particularly well-suited for deep learning applications. With TensorFlow Lite, developers can easily build and deploy machine learning models on embedded and mobile devices, making it a valuable tool for a wide range of applications in the IoT, mobile, and smart device domains.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/tensorflowlite.png" style={{width:600, height:'auto'}}/></div> -->

## Getting Started is Easy

Let's take a look at the kinds of interesting things that TinyML can achieve!

### TinyML on XIAO

<div class="button_tech_support_container">
<a href="https://wiki.seeedstudio.com/SeeedStudio_XIAO_Series_Introduction/" class="button_xiao"></a>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Edge Impulse on XIAO RP2040 & XIAO SAMD21</th>
      <th class="table-trnobg">Edge Impulse on XIAO nRF52840 Sense</th>
      <th class="table-trnobg">TensorFlow Lite on XIAO nRF52840 Sense</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/image-31.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE-Motion-Recognition/XIAOEInew14a.png" style={{width:200, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/train-punch.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><font size={"1"}>This project covers training and deploying model to Seeed Studio XIAO SAMD21 and Seeed Studio XIAO RP2040 development boards.</font></td>
      <td class="table-trnobg"><font size={"1"}>Welcome to this quickstart wiki on using Edge Impulse with Seeed Studio XIAO nRF52840 Sense! In this guide, we will explore how to use the onboard IMU sensor to detect human motion and classify different actions.</font></td>
      <td class="table-trnobg"><font size={"1"}>This wiki will demonstrate how you can use TensorFlow Lite on Seeed Studio XIAO nRF52840 Sense and detect gestures such as punching and flexing using the on-board accelerometer.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Seeeduino-XIAO-TinyML/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAOEI/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-TFLite-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr>
      <th class="table-trnobg">Edge Impulse on XIAO ESP32S3 Sense</th>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/2.png" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><font size={"1"}>This project covers training and deploying model to Seeed Studio XIAO SAMD21 and Seeed Studio XIAO RP2040 development boards.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/xiao_esp32s3_keyword_spotting/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

---

### TinyML on Wio Terminal

Wio Terminal is a powerful and easy-to-use development board designed for makers, hobbyists, and IoT enthusiasts. It features a 2.4-inch LCD screen, Wi-Fi and Bluetooth connectivity, an array of sensors, and a variety of input/output interfaces.

Wio Terminal supports a range of programming languages including Arduino, MicroPython, CircuitPython, and more, making it easy for developers to get started. With its compact and portable design, Wio Terminal is ideal for a wide range of projects, from creating smart devices to building prototypes for industrial applications.

<div class="video-container">
<iframe width="960" height="500" src="https://www.youtube.com/embed/3Fp3W9VJUL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

---

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">Edge Impulse on Wio Terminal</th>
      <th class="table-trnobg">TensorFlow Lite on Wio Terminal</th>
      <th class="table-trnobg">Codecraft TinyML on Wio Terminal</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/gif1.gif" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200221174623.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/4625071.png" style={{width:500, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><font size={"1"}>Now, Wio Terminal is officially supported by the Edge Impulse. Let's see how to get Wio Terminal started with the Machine learning at the very edge!</font></td>
      <td class="table-trnobg"><font size={"1"}>This article introduces how to install the official Arduino Tensorflow Lite library into your Wio Terminal, allowing you to test out some Machine Learning models using Wio Terminal.</font></td>
      <td class="table-trnobg"><font size={"1"}>A simple voice recognition project using Codecraft graphical programming, Wio Terminal and Edge Impulse.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-TinyML-EI-1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-TinyML-TFLM-1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.yuque.com/tinkergen-help-en/codecraft/tinyml" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

---

### TinyML on Grove Vision AI

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">Edge Impulse on Grove Vision AI</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><iframe width="960" height="515" src="https://www.youtube.com/embed/N7xpzzD1bYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><font size={"1"}>Grove - Vision AI Module is a thumb-sized board based on Himax HX6537-A processor which is equipped with a 2-Megapixel OV2640 camera, microphone, 3-axis accelerometer and 3-axis gyroscope. It offers storage with 32 MB SPI flash, comes pre-installed with ML algorithms for face recognition and people detection and supports customized models as well. It is compatible with the XIAO ecosystem and Arduino, all of which makes it perfect for getting started with AI-powered camera projects! It is fully supported by Edge Impulse which means you will be able to sample raw data from the camera, build models, and deploy trained machine learning models to the module directly from the studio without any programming required.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/edge-impulse-vision-ai/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

---

### TinyML on SenseCAP A1101

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
        <th class="table-trnobg">Roboflow/ YOLOv5/ TensorFlow Lite on SenseCAP A1101</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/sensecapa1101.png" style={{width:800, height:400}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><font size={"1"}>Seeed SenseCAP A1101 - LoraWAN Vision AI Sensor is an image recognition AI sensor designed for developers. SenseCAP A1101 - LoRaWAN Vision AI Sensor combines TinyML AI technology and LoRaWAN long-range transmission to enable a low-power, high-performance AI device solution for both indoor and outdoor use. This sensor features Himax high-performance, low-power AI vision solution which supports the Google TensorFlow Lite framework and multiple TinyML AI platforms. In this wiki, we will teach you how to train your own AI model for your specific application and then deploy it easily to the SenseCAP A1101 - LoRaWAN Vision AI Sensor. Let's get started!</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## TinyML Courese

### Wio Terminal Codecraft Course

<div class="all_container">
    <div class="xiao_topic_page_vertical">
        <font size={"3"}>Begin your first step into the world of TinyML and Wio Terminal with detailed lessons and step-by-step projects to guide you! Now, simple hardware can also solve complex problems.</font>
        <br /><font size={"3"}><strong>Rich curriculum resources</strong></font>
        <font size={"2"}>This course is accompanied by complete project materials and code programs, and all of them are open source on GitHub. All readers are free to use and further study.</font>
        <br /><font size={"3"}><strong>Detailed and easy to understand course content</strong></font><font size={"2"}>The course was developed by the Seeed Studio EDU department. The course covers principles, deployment and applications, making the class lively and interesting while the course content is complete and professional.</font>
        <br /><font size={"3"}><strong>Curriculum design from the ground up</strong></font><font size={"2"}>Considering the realities of student learning, each lesson, or even the entire curriculum system, is designed to move from shallow to deep. To do so, teaching is tailored to the student's ability.</font>
        <br /><font size={"3"}><strong>No complex programming fundamentals required</strong></font><font size={"2"}>The course focuses on programming using the Codecraft platform developed by Seeed Studio, a building block graphical programming platform based on Scratch 3.0. It makes programming easier and more fun, and doesn't require you to have any foundation in the use of high-level programming languages.</font>
        <br />
    </div>
    <div class="xiao_topic_page_pic">
      <img src="https://files.seeedstudio.com/wiki/tinyml-topic/cc_tinyml_2.png" style={{width:800, height:'auto'}}/>
      <br />
    </div>
</div>

<br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-TinyML/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>🖱 Know More</font></span></strong></a>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/No-code_Programming_to_Get_Started_with_TinyML.pdf" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Download Now</font></span></strong></a>
</div>

---

### Wio Terminal TinyML Basic Tutorials by Seeed Studio

<div class="button_tech_support_container">
<a href="https://www.youtube.com/playlist?list=PLpH_4mf13-A0MzOdPNITVfoVBMvf7Rg9g" class="button_wiotinyml"></a>
</div>

### Wio Terminal Edge Impulse Tutorials

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">Building a Continuous Motion Recognition System with Embedded Machine Learning</th>
      <th class="table-trnobg">Wio Terminal Edge Impulse Audio Scene Recognition with Built-in Microphone</th>
      <th class="table-trnobg">Wio Terminal Edge Impulse People counting with Ultrasonic sensor</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><iframe width="280" height="180" src="https://www.youtube.com/embed/FseGCn-oBA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/cough_p.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-4/walkinout.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>In this tutorial we show you how to build a machine learning system that can detect continuous motion, how to sample data from real devices, how to design a signal processing pipeline, and how to deploy the model back to the device. </font></td>
   <td class="table-trnobg"><font size={"1"}>In this project we will learn how to train and deploy an audio scene classifier with Wio Terminal and Edge Impulse. For more details and video tutorial, watch the corresponding video!</font></td>
   <td class="table-trnobg"><font size={"1"}>In this project we will create a people counting system by using Wio Terminal, an ordinary Ultrasonic ranger and special Deep Learning sauce to top it off and actually make it work.</font></td>
     </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-TinyML-EI-2/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-TinyML-EI-3/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-TinyML-EI-4/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <th class="table-trnobg">Wio Terminal Edge Impulse Anomaly Detection for Predictive Maintenance</th>
      <th class="table-trnobg">Wio Terminal Edge Impulse Distinguish Beverage with Multi-channel Gas Sensor</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-6/full-Time-0_19_2725-1536x864.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>In this project, we will use data from Wio Terminal built-in accelerometer, perform anomaly detection on-device and then send data to Blynk Edgent Cloud.</font></td>
      <td class="table-trnobg"><font size={"1"}>In this wiki, we will introduce how to use Wio Terminal with Edge Impulse to simply deploy a machine learning project. Wio Terminal with the Grove systems can be very powerful, which brings hundreds of sensor data in for analysis and to possibly evaluate different scenarios!</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-TinyML-EI-6/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-TinyML-EI-5/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### Wio Terminal TensorFlow Lite Tutorials

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">Wio Terminal Tensorflow Lite Micro Intelligent meteostation with BME280</th>
      <th class="table-trnobg">Wio Terminal Tensorflow Lite Micro Speech recognition on MCU – Speech-to-Intent</th>
      <th class="table-trnobg">Machine Learning with Wio Terminal - Gesture Recognition</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/IMG_9575.JPG" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-7-768x570.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/TF.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>In this project we're going to use Wio Terminal and Tensorflow Lite for Microcontrollers to create an intelligent meteostation, able to predict the weather and precipitation for next 24 hours based on local data from BME280 environmental sensor.</font></td>
   <td class="table-trnobg"><font size={"1"}>In this project we're going to employ a more efficient method and directly parse user utterances into actionable output in form of intent/slots.</font></td>
   <td class="table-trnobg"><font size={"1"}>This tutorial will demonstrates how to use Wio Terminal to set up a simple gesture recognition machine learning demo with the help of TensorFlow Lite.</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-TinyML-TFLM-2/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-TinyML-TFLM-3/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Gesture-Recognition/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### Wio Terminal TinyML Tutorials by Udemy

<div class="button_tech_support_container">
<a href="https://www.udemy.com/course/tinyml-wio-terminal/" class="button_udemy"></a>
</div>

## TinyML Appication

Here we will show you some great examples of our TinyML devices. These case studies will be categorised by application scenarios, so we hope you can find something of interest here and join us in realising your ideas!

### Human-Machine Interaction

Using TinyML technology it is possible to combine sensor data with machine learning models to enable human-computer interaction applications such as speech recognition, gesture recognition and pose recognition.

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">Speech Recognition on XIAO nRF52840 Sense</th>
      <th class="table-trnobg">TinyML Made Easy: Anomaly Detection & Motion Classification</th>
      <th class="table-trnobg">Voice Control Toy and Display using XIAO nRF52840 and Edge Impulse</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TFLite-mic-thumb.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1472235/_d2Lefd6Xrq.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/voicetoy.gif" style={{width:280, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>This wiki will demonstrate how you can use TensorFlow Lite on Seeed Studio XIAO nRF52840 Sense and perform speech recognition using the on-board microphone.</font></td>
   <td class="table-trnobg"><font size={"1"}>Exploring Machine Learning on a giant tiny device, the Seeed XIAO nRF52840 Sense.</font></td>
   <td class="table-trnobg"><font size={"1"}>This demo shows embedded ML voice controlling animation screen display and an interesting toy by XIAO nRF52840 Sense boards.</font></td>
     </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-TFLite-Mic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mjrobot/tinyml-made-easy-anomaly-detection-motion-classification-958fd2" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/yuwork58426/voice-control-toy-and-display-using-xiao-and-edge-impulse-592bb4" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
    <tr></tr>
    <tr class="table-trnobg">
   <th class="table-trnobg">TinyML Made Easy: Gesture Recognition</th>
      <th class="table-trnobg">How I Built a Connected Artificial Nose</th>
      <th class="table-trnobg">Liquid Classification with TinyML</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1347750/_wTExmhrtW6.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/nose.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/liquid.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>Seeed Wio Terminal programed using Codecraft/Edge Impulse is a fantastic tool for beginners to start on tinyML (Embedded Machine Learning).</font></td>
   <td class="table-trnobg"><font size={"1"}>Over the past few months, I have worked on a pretty cool project that some of you might have already heard about as it sort of went viral. I built a DIY, general-purpose, artificial nose that can smell virtually anything you teach it to recognize!</font></td>
   <td class="table-trnobg"><font size={"1"}>Use water quality sensors to measure turbidity and perform classification on a variety of liquids with a machine learning model running on a Seeed Studio Wio Terminal.</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mjrobot/tinyml-made-easy-gesture-recognition-ce13a5" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://blog.benjamin-cabe.com/2021/08/03/how-i-built-a-connected-artificial-nose" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://docs.edgeimpulse.com/experts/prototype-and-concept-projects/liquid-classification-tinyml" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
    <tr></tr>
    <tr class="table-trnobg">
   <th class="table-trnobg">Play chrome's dino game physically</th>
      <th class="table-trnobg">Build Handwriting Recognition with Wio Terminal & Edge Impulse</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/dinogame.gif" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2021/03/Copy-of-Copy-of-Clean-6-1030x601.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>In this project, we are going to play the chrome dino game physically with the help of machine learning and embedded electronics.</font></td>
   <td class="table-trnobg"><font size={"1"}>In today's tutorial, I'll show you how you can build a machine learning based handwriting recognition device with the Wio Terminal and Edge Impulse. Follow this detailed guide to learn how a single time of flight sensor can allow you to recognise handwriting gestures and translate them to text!</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://makergram.com/blog/play-chromes-dino-game-physically/?fbclid=IwAR3h19XxXITb4jh6Ot1pvc7yDXJ5g8gvNAOPA7DYTs8rpQ1DaiHmd_WsGFo" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/blog/2021/03/02/handwriting-recognition-with-wio-terminal-edge-impulse/" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

---

### Retail

TinyML technology can be applied in the retail industry for sales forecasting, customer behaviour analysis, resource optimisation, loss prevention and smart marketing, helping to achieve smarter and more efficient business management and operations.

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">Pet Activity Tracker using XIAO nRF52840 Sense & Edge Impulse</th>
      <th class="table-trnobg">BLE AI-driven Smartwatch Detecting Potential Sun Damage</th>
      <th class="table-trnobg">Smart Air Cooler using Person Sensor.Ft Useful Sensor</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1424908/_vDVFksQ0VV.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/smartwatch.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1509781/_hEJTTPV6Rb.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>Our pets deserve more to stay active. A tinyML model predicts activities based on the data coming from 3 Axis IMU.</font></td>
   <td class="table-trnobg"><font size={"1"}>Log UV & weather data on an SD card to train an Edge Impulse model. Then, run it to get informed of sun damage over BLE via an Android app.</font></td>
      <td class="table-trnobg"><font size={"1"}>As every other device is getting smarter in this Era why not add intelligence to our dear old Summer friend Air Coolers? However, what if a sensor could directly present extracted features of image data? Wouldn't that be interesting?</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mithun-das/pet-activity-tracker-using-xiao-ble-sense-edge-impulse-858d73" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/kutluhan-aktar/ble-ai-driven-smartwatch-detecting-potential-sun-damage-7d08be" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/phatta/smart-air-cooler-using-person-sensor-ft-useful-sensor-7daa73" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
    <tr></tr>
    <tr class="table-trnobg">
   <th class="table-trnobg">TinyML 🧠 and Azure IoT with Edge Impulse and Wio Terminal</th>
      <th class="table-trnobg">NMCS: No More Coffee Spills!</th>
      <th class="table-trnobg">AI powered thermal camera for safe camping</th>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><iframe width="300" height="200" src="https://www.youtube.com/embed/JCirUbyY60s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1579836/_rL5FcyTm6U.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1367564/_W4FrYx6LrV.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><font size={"1"}>Spring is here, so I can upgrade my Azure IoT Squirrel Feeder and now add Computer Vision capabilities. In order to do this, I'll add TinyML capabilities to my feeder using Edge Impulse to the current scenario. </font></td>
      <td class="table-trnobg"><font size={"1"}>NMCS is a device that uses its hearing and seeing skills to make sure that your coffee doesn't spill when making your energy booster.</font></td>
      <td class="table-trnobg"><font size={"1"}>TinyML model running Wio Terminal can identify if animal or human is approaching even in the dark and alert campers.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.youtube.com/watch?v=JCirUbyY60s" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/sashrikad/nmcs-no-more-coffee-spills-55897a" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mithun-das/ai-powered-thermal-camera-for-safe-camping-8fc887" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

---

### Farming

Using TinyML technology it is possible to combine sensor data with machine learning models to automate irrigation, weather forecasting, and crop disease and pest detection.

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">Vision based Sand Depletion Prevention Kit (VSDP)</th>
      <th class="table-trnobg">Irrigation Level Assessment by Thermal Imaging w/ TensorFlow</th>
      <th class="table-trnobg">Weather prediction with Tensorflow Lite for Microcontrollers</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1502609/_8nie9S4suc.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/irrigation.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/weatherstation.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>I would like to make an infrastructure connected by LoRaWAN which has edge AI nodes monitoring the sand depletion region.</font></td>
   <td class="table-trnobg"><font size={"1"}>Collect irrigation level data by thermal imaging, build and train a neural network model, and run the model directly on Wio Terminal.</font></td>
   <td class="table-trnobg"><font size={"1"}>In today's article we're going to use Wio Terminal and Tensorflow Lite for Microcontrollers to create an intelligent meteostation, able to predict the weather and precipitation for next 24 hours based on local data from BME280 environmental sensor.</font></td>
    </tr>
  <tr></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/rahulkhanna/vision-based-sand-depletion-prevention-kit-vsdp-bde664" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/kutluhan-aktar/irrigation-level-assessment-by-thermal-imaging-w-tensorflow-c60b2c" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/blog/2021/03/18/learn-tinyml-using-wio-terminal-and-arduino-ide-4-weather-prediction-with-tensorflow-lite-for-microcontrollers-a-k-a-i-just-like-data/" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
    <tr></tr>
    <tr class="table-trnobg">
   <th class="table-trnobg">Edible Algae Growing Cycle Monitor</th>
      <th class="table-trnobg">IoT Food Spoilage Sensor and Monitoring Dashboard</th>
      <th class="table-trnobg">Smart Lake - early detection of algae bloom</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1510607/_dve7mQFzUj.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1502746/_dSmk8zVpyV.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1498224/_dDVOnd2yVz.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>I've decided to come up with a system that will help grow Spirulina Algae in a self contained space.</font></td>
   <td class="table-trnobg"><font size={"1"}>DeViridi is a smart IoT powered tool which can be used to: monitor food storage conditions and determine food spoilage.</font></td>
      <td class="table-trnobg"><font size={"1"}>Using data from different sensors and ML on the edge, this device can detect early sign of algae bloom and notify authorities or citizens.</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/skruglewicz/edible-algae-growing-cycle-monitor-bca939" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/cyborgash122/deviridi-iot-food-spoilage-sensor-and-monitoring-dashboard-e2f933" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mithun-das/smart-lake-early-detection-of-algae-bloom-6494c9" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <th class="table-trnobg">IoT AI-driven Tree Disease Identifier w/ Edge Impulse & MMS</th>
      <th class="table-trnobg">Plastic Bottle Detector For Lake</th>
      <th class="table-trnobg">NOMOS: Mosquito growth monitoring system</th>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/mms.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1499166/_i5AfIuVOPD.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1498662/_4hNXTHVvlf.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
    </tr>
  <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>Detect tree diseases and get informed of the results via MMS to prevent them from spreading and harming forests, farms, and arable lands.</font></td>
      <td class="table-trnobg"><font size={"1"}>To fight against plastic pollution for marine life. Inspired by the iconic movie character WALL-E, my project aims to raise awareness about the issue of littering and the impact it has on the environment.</font></td>
      <td class="table-trnobg"><font size={"1"}>Mosquito growth monitoring system based on temperature, humidity, and water flow at the sewer lines to minimize the spread of dengue fever.</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/kutluhan-aktar/iot-ai-driven-tree-disease-identifier-w-edge-impulse-mms-1b5ff6" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/JuanYi/plastic-bottle-detector-for-lake-353996" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/rifqiabdillah/nomos-mosquito-growth-monitoring-system-6def4c" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
    </tr>
    <tr></tr>
    <tr class="table-trnobg">
   <th class="table-trnobg">Build a TinyML Smart Weather Station with Wio Terminal!</th>
      <th class="table-trnobg">Fight Fire 🔥 - Wild Fire Prediction using TinyML</th>
      <th class="table-trnobg">Early flash flood warn system</th>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1264506/_2yKmoX1X3P.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1503029/_Uq5VHx9Sf0.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1503004/_dDriQ77DIf.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>Learn to build your very own smart weather station powered by machine learning, from data acquisition to training to deployment!</font></td>
      <td class="table-trnobg"><font size={"1"}>Fight Fire is a wildfire prediction device that will help the firefighting authority to respond quickly to the wildfire.</font></td>
      <td class="table-trnobg"><font size={"1"}>This idea aims to provide a solution to generate early warnings that allow timely reaction to disasters due to floods or avalanches.</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/supperted825/build-a-tinyml-smart-weather-station-with-wio-terminal-1ec8ee" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/user102774/fight-fire-wild-fire-prediction-using-tinyml-df7572" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mrmolex/early-flash-flood-warn-system-8cfdee" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

---

### Industrial

Using TinyML technology it is possible to combine sensor data with machine learning models to automate and optimise production processes such as quality control and equipment maintenance.

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">ML Anomaly Detection in Elevators w/ Edge Impulse & Notecard</th>
      <th class="table-trnobg">IoT AI-driven Yogurt Processing & Texture Prediction | Blynk</th>
      <th class="table-trnobg">Oil tank leak detection using tinyML</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/elevator.gif" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/aidriven.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1412712/_pEJAZLxsMf.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
        <td class="table-trnobg"><font size={"1"}>IoT devices enable predictive maintenance, ensuring consistent commercial elevator performance and reducing costly repairs and downtime. This is crucial for efficient building flow and public safety, productivity, energy consumption, and quality of life.</font></td>
        <td class="table-trnobg"><font size={"1"}>Collect environmental factors and culture amount while producing yogurt. Then, run a neural network model via Blynk to predict its texture.</font></td>
        <td class="table-trnobg"><font size={"1"}>This ML powered device smell diesel and send realtime notification on mobile. Using Wio terminal, Edge Impulse & Blynk.</font></td>
     </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/ivan-arakistain/ml-anomaly-detection-in-elevators-w-edge-impulse-notecard-344198" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/kutluhan-aktar/iot-ai-driven-yogurt-processing-texture-prediction-blynk-560c52" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/450327/oil-tank-leak-detection-using-tinyml-by-sashrika-29222f" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
    <tr></tr>
    <tr class="table-trnobg">
   <th class="table-trnobg">Web browser operated robot for gas leak detection</th>
      <th class="table-trnobg">Pipeline Clog Detection with a Flowmeter and TinyML</th>
      <th class="table-trnobg">Detect the Drain Blockage with Tiny ML + LoRa</th>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1548875/_F9M97NN1KO.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><iframe title="vimeo-player" src="https://player.vimeo.com/video/784835596?h=cc9173caab" width="300" height="230" frameborder="0" allowfullscreen></iframe></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1580113/_N3O8kRxik8.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
    </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>Green Hydrogen is an alternative energy that reduces emissions and cares for our planet. However, it is still on its early stages and safety is a major concern as hydrogen leaks should be avoided by all means. In order enable an early detection of gas leaks, we wanted to build a big remote operated robot to carry the required sensing equipment.</font></td>
      <td class="table-trnobg"><font size={"1"}>As a proposed solution to the problem of pipeline clogs in industrial operations, we are introducing the use of artificial intelligence (AI) and machine learning. Our AI system uses flow rate sensor data to detect clogs in pipelines by analyzing changes in flow rates that may indicate a blockage.</font></td>
      <td class="table-trnobg"><font size={"1"}>Using an outdoor smart sensor - A1101 to detect the accumulation of leaves, flower and other debris for a balcony drain and alert its user.</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/ivan-arakistain/web-browser-operated-robot-for-gas-leak-detection-4cbe1b" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://docs.edgeimpulse.com/experts/prototype-and-concept-projects/clog-detection-with-ai" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/vitaminCC/detect-the-drain-blockage-with-tiny-ml-lora-6d8957" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
    </tr>
 </table>
</div>

---

### Healthcare

TinyML can be applied to health monitoring to help the medical industry achieve more efficient and accurate health monitoring.

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">Smart Stethoscope Powered by Edge Impulse</th>
      <th class="table-trnobg">A non-invasive solution for hot flashes</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1284920/_lKAIVXYzeU.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1119627/_vk6o5mjK8D.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
     <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>A digital stethoscope that auscultates and detects abnormalities in the respiratory system using tinyML at the edge.</font></td>
   <td class="table-trnobg"><font size={"1"}>In this project, I build a device which can be used to detect hot flashes and trigger some action to relieve the person, in this case turn on Air Conditioner cooling system using IR emitter. As its input, it takes multidimensional infrared thermal sensor data. Its output will be a simple classification that notifies us if person is recognized and there is a sudden change in temperature has recently occurred.</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/phatta/smart-stethoscope-powered-by-edge-impulse-a09826" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/naveenbskumar/no-pause-f1bcbf" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

---

### Transportation

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
   <th class="table-trnobg">Voice Activated Robo Car on Microcontroller with TinyML</th>
  </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/autocar.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
  <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>Using voice recognition with the in-built microphone, Wio Terminal will be able to recognize the go, stop and background noise by TinyML.</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/vincekok/voice-activated-robo-car-on-microcontroller-with-tinyml-39a8fb" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

---

### Animal Husbandry

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
      <th class="table-trnobg">Wildlife Sanctuary Monitor</th>
      <th class="table-trnobg">Penguin Counting and Monitoring</th>
      <th class="table-trnobg">Gate Keeper - An IoT Based Elephant Detection System</th>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1494879/_vVl6arJ5L8.blob?auto=compress%2Cformat&w=900&h=675&fit=min" style={{width:700, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1501504/image_YwTN2w1Ca6.png?auto=compress%2Cformat&w=740&h=555&fit=max" style={{width:280, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1500778/inshot_20220925_2048546541_MCWMtzTNBg.jpg?auto=compress%2Cformat&w=740&h=555&fit=max" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><font size={"1"}>A wildlife sanctuary environment and animal monitor to maintain the sustainability of the sanctuary.</font></td>
      <td class="table-trnobg"><font size={"1"}>A POC for the build of AI object recognition camera's to detect and count Little Blue Penguins as they come ashore and go to sea.</font></td>
      <td class="table-trnobg"><font size={"1"}>Will guide you to build an IoT based elephant detector based on Grove AI Vision Module and Wio Terminal.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/hendra/wildlife-sanctuary-monitor-4162ec" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/mediapod/penguin-counting-and-monitoring-2bdc1c" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/482632/gate-keeper-an-iot-based-elephant-detection-system-ae726c" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

---

### Microsoft Reactor

<div class="table-center">
 <table align="center">
    <tr class="table-trnobg">
      <th class="table-trnobg">Microsoft Reactor Part 1</th>
      <th class="table-trnobg">Microsoft Reactor Part 2</th>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><iframe width="450" height="240" src="https://www.youtube.com/embed/ZsQ0-jXdnRY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
   <td class="table-trnobg"><iframe width="450" height="240" src="https://www.youtube.com/embed/-1EP3iqYYdU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></td>
  </tr>
  <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
   <td class="table-trnobg" colspan="2"><font size={"1"}>AI is no longer stuck in the cloud. Instead of relying on powerful computers with GPUs, the past few years has brought AI to small devices thanks to TinyML – machine learning models that can run on microcontrollers. You may already have devices that use this around you, from voice controlled smart speakers to fitness trackers.<br />In this 2-part show, Jim gets his hands dirty with TinyML, building out a fitness tracker that can distinguish between rowing and running using a small microcontroller from Seeed studios – the Seeed XIAO BLE. Training and deploying these models is super complicated, so Jim enlists help from Edge Impulse, an online tool for capturing training data and building TinyML models.<br />Once Jim has his model, he will deploy it to his device using VS Code and PlatformIO, an extension for VS Code to do microcontroller development. From there he'll deal with one of the complexities of building low powered fitness trackers, connectivity. A lot of fitness trackers use Bluetooth to sync with a phone app, so Jim will take this route, syncing fitness data to Azure IoT Central from a mobile app.</font></td>
    </tr>
  <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.youtube.com/watch?v=ZsQ0-jXdnRY" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.youtube.com/watch?v=-1EP3iqYYdU" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## Contribute Your TinyML Project to Us

Join force to build a public resource pool for TinyML by submitting your projects or explorations! By sharing your work, you can contribute to the community's understanding of the challenges and opportunities in the field of TinyML. Whether you're working on object detection, speech recognition, or any other TinyML application, your insights and experiences can help others learn and innovate!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/sharecase.jpg" style={{width:1000, height:'auto'}}/></div>

<!-- <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.hackster.io/tinyml-workshops-for-fab-23-how-to-add-ai-to-almost-anything/projects" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Share Your Project</font></span></strong></a></div> -->

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://docs.google.com/forms/d/1k4aCFeehVkTLucVVHIzrJAJL_prbZqJ2h5YaRmvbdQQ/edit" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Share Your Project</font></span></strong></a></div>

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
