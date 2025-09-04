---
description: Wiki feature page for the XIAO series.
title: Exhibition for XIAO Series
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_topic_page
last_update:
  date: 07/04/2023
  author: Citric
---

# Seeed Studio XIAO EXHIBITION

[The Seeed Studio XIAO series](https://www.seeedstudio.com/xiao-series-page), named after the Chinese word for "small," comprises tiny development boards based on various hardware platforms of ESP32, SAMD21, RP2040, nRF52840, RP2350 and RA4M1, MG24. These fingernail-sized boards pack powerful capabilities into a compact form factor.

Our team together with the community, has create a rich collection of wikis, applications and documentation to make the use and development with ease. To make it more efficient for the whole community to locate these useful docs, we're wrapping them up in this page as an index for you to locate the one you're looking for quickly.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/xiao_topicpage/compatible_software.jpg" /></div>

We can't do it without the love, contribution that we get from the community, and if you want to contribute to this vibrant ecosystem (to fill in the blanket parts), we welcome [your own submissions of your unique dev to inspire others in the community too](https://wiki.seeedstudio.com/Contribution-Guide/).

## Table of Contents

<div align="center">
   <div style={{width: "auto", height: 450, overflowY: 'scroll', border: '1px solid #ccc', padding: '10px', textAlign: 'left',}}>
 <ul>
  <li><a href="#product_guides"><strong>Product Guides (Getting Started, Pin Usage and more)</strong></a></li>
  <ul>
  <li><a href="#xiao_samd21"><strong>XIAO SAMD21</strong></a></li>
  <li><a href="#xiao_rp2040"><strong>XIAO RP2040</strong></a></li>
  <li><a href="#xiao_nrf52840_(sense)"><strong>XIAO nRF52840 (Sense)</strong></a></li>
  <li><a href="#xiao_esp32c3"><strong>XIAO ESP32C3</strong></a></li>
  <li><a href="#xiao_esp32s3_(sense)"><strong>XIAO ESP32S3 (Sense)</strong></a></li>
  <li><a href="#xiao_esp32c6"><strong>XIAO ESP32C6</strong></a></li>
  <li><a href="#xiao_rp2350"><strong>XIAO RP2350</strong></a></li>
  <li><a href="#xiao_ra4m1"><strong>XIAO RA4M1</strong></a></li>
  <li><a href="#xiao_mg24_(sense)"><strong>XIAO MG24 (Sense)</strong></a></li>
  </ul>
  <li><a href="#supported_languages/platforms"><strong>Supported Languages/Platforms</strong></a></li>
  <ul>
  <li><a href="#platformio"><strong>PlatformIO</strong></a></li>
  <li><a href="#micropython"><strong>MicroPython</strong></a></li>
  <li><a href="#circuitpython"><strong>CircuitPython</strong></a></li>
  <li><a href="#embedded_swift"><strong>Embedded Swift</strong></a></li>
  <li><a href="#esp_idf"><strong>ESP IDF</strong></a></li>
  <li><a href="#rust"><strong>Rust</strong></a></li>
  <li><a href="#tinygo"><strong>TinyGo</strong></a></li>
  <li><a href="#microblocks"><strong>MicroBlocks</strong></a></li>
  <li><strong>Lua</strong></li>
  <li><strong>Graphical Programming Languages</strong></li>
  </ul>
  <li><a href="#supported_rtos"><strong>Supported RTOS</strong></a></li>
  <ul>
  <li><a href="#zephyr"><strong>Zephyr</strong></a></li>
  <li><a href="#freertos"><strong>FreeRTOS</strong></a></li>
  <li><a href="#apache_nuttx_rtos"><strong>Apache NuttX RTOS</strong></a></li>
  </ul>
  <li><a href="#communications"><strong>Communications</strong></a></li>
  <ul>
  <li><a href="#apache_kafka"><strong>Apache Kafka</strong></a></li>
  <li><a href="#matter"><strong>Matter</strong></a></li>
  <li><a href="#zigbee"><strong>Zigbee</strong></a></li>
  <li><a href="#espnow"><strong>ESP-NOW</strong></a></li>
  <li><a href="#meshtastic"><strong>Meshtastic</strong></a></li>
  <li><a href="#amazon_sidewalk"><strong>Amazon Sidewalk</strong></a></li>
  <li><a href="#blecon"><strong>Blecon</strong></a></li>
  <li><a href="https://github.com/marvinroger/async-mqtt-client" target="_blank"><strong>ESP32-MQTT</strong></a></li>
  </ul>
  <li><a href="#tinyml/embedded_machine_learningtinyml"><strong>TinyML/Embedded Machine Learning Platforms</strong></a></li>
  <ul>
  <li><a href="#sensecraft_ai"><strong>SenseCraft AI</strong></a></li>
  <li><a href="#tensorflow_lite"><strong>TensorFlow Lite</strong></a></li>
  <li><a href="#edge_impulse"><strong>Edge Impulse</strong></a></li>
  </ul>
  <li><a href="#smart_home_and_automation"><strong>Smart Home and Automation</strong></a></li>
  <ul>
  <li><a href="#home_assistant_esphome"><strong>Home Assistant & ESPHome</strong></a></li>
  <li><strong>OpenHAB</strong></li>
  <li><a href="#tasmota"><strong>Tasmota</strong></a></li>
  </ul>
  <li><a href="#open_source_keyboard_firmware_support"><strong>Open-Source Keyboard Firmware Support</strong></a></li>
  <ul>
  <li><a href="#qmk"><strong>QMK</strong></a></li>
  <li><a href="#zmk"><strong>ZMK</strong></a></li>
  </ul>
  <li><a href="#other_hot_applications"><strong>Other Hot Applications</strong></a></li>
  <ul>
  <li><a href="#wled"><strong>WLED</strong></a></li>
  <li><a href="#chatgpt"><strong>ChatGPT</strong></a></li>
  <li><a href="#ffmpeg"><strong>FFmpeg</strong></a></li>
  <li><strong>OpenHD</strong></li>
  <li><strong>ESP32Cam</strong></li>
  <li><a href="#mros2_esp32"><strong>mROS2-ESP32</strong></a></li>
  </ul>
  <li><a href="#prototyping_tools_pcb_layout_stimulation"><strong>Prototyping Tools (PCB Layout & Stimulation)</strong></a></li>
  <ul>
  <li><a href="#fritzing"><strong>Fritzing</strong></a></li>
  <li><a href="#fluxai"><strong>FluxAI</strong></a></li>
  <li><a href="#wokwi"><strong>Wokwi</strong></a></li>
  </ul>
  <li><a href="#iot_clouds_and_iot_platforms"><strong>IoT Clouds and IoT Platforms</strong></a></li>
  <ul>
  <li><a href="#aws_iot"><strong>AWS IoT</strong></a></li>
  <li><strong>Azure IoT</strong></li>
  <li><a href="#thingspeak"><strong>ThingSpeak</strong></a></li>
  <li><a href="#ubidots"><strong>Ubidots</strong></a></li>
  <li><strong>Blynk</strong></li>
  <li><strong>Losant</strong></li>
  <li><strong>InfluxDB</strong></li>
  </ul>
 </ul>
 </div>
</div>

## <span id="product_guides">Product Guides</span>

<br></br>

<span id="xiao_samd21"><strong><font size={"4"}>XIAO SAMD21</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Seeeduino-XIAO/">Getting Started WiKi</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Seeeduino-XIAO-by-Nanase/">Pin Usage</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Seeeduino-XIAO-by-Nanase/">Single Cycle IOBUS</a> by <a href="https://twitter.com/nanase_coder">@nanase_coder</a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_rp2040"><strong><font  size={"4"}>XIAO RP2040</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#getting-started">Getting Started WiKi</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#pin-multuiplexing-on-the-seeed-studio-xiao-rp2040">Pin Usage</a></th>
   <th style={{width:333, height:'auto'}}></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_nrf52840_(sense)"><strong><font  size={"4"}>XIAO nRF52840 (Sense)</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_BLE/">Getting Started Wiki</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-Pin-Multiplexing/">Pin Usage</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-IMU-Usage/">6-Axis IMU Usage</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-PDM-Usage/">PDM Usage</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao-ble-qspi-flash-usage/">QSPI Flash</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-NFC-Usage/">NFC Usage</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-Bluetooth_Usage/">Bluetooth Lib (Seeed nRF52)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-Bluetooth-Usage/">Bluetooth Lib (Seeed nRF52 mbed)</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_esp32c3"><strong><font  size={"4"}>XIAO ESP32C3</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/">Getting Started Wiki</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32C3_Pin_Multiplexing/">Pin Usage</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32C3_WiFi_Usage/">Wi-Fi Usage</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32C3_Bluetooth_Usage/">Bluetooth Usage</a></th>
   <th style={{width:333, height:'auto'}}></th>
            <th style={{width:333, height:'auto'}}></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_esp32s3_(sense)"><strong><font  size={"4"}>XIAO ESP32S3 (Sense)</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/">Getting Started Wiki</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_pin_multiplexing/">Pin Usage</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_wifi_usage/">Wi-Fi Usage</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_bluetooth/">Bluetooth Usage</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32S3_Consumption/">Sleep Modes</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_sense_mic/">Microphone Usage</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/">Camera Usage</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_sense_filesystem/">MicroSD Card</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_esp32c6"><strong><font  size={"4"}>XIAO ESP32C6</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_getting_started/">Getting Started Wiki</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_pin_multiplexing_esp33c6/">Pin Usage</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_wifi_usage_esp32c6/">Wi-Fi Usage</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_bluetooth/">Bluetooth Usage</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_rp2350"><strong><font  size={"4"}>XIAO RP2350</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/getting-started-xiao-rp2350/">Getting Started Wiki</a></th>
   <th style={{width:333, height:'auto'}}><a href="">Pin Usage</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_ra4m1"><strong><font  size={"4"}>XIAO RA4M1</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/getting_started_xiao_ra4m1/">Getting Started Wiki</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_ra4m1_pin_multiplexing/">Pin Usage</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>

<span id="xiao_mg24_(sense)"><strong><font  size={"4"}>XIAO MG24 (Sense)</font></strong></span>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_mg24_getting_started/">Getting Started Wiki</a></th>
   <th style={{width:333, height:'auto'}}><a href="">Pin Usage</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

## <span id="supported_languages/platforms">Supported Languages/Platforms</span>

<br></br>
<div><a href="https://platformio.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/platformio.png" style={{width:'auto', height:50}} /></a></div>

<span id="platformio"><strong><a href="https://platformio.org/">PlatformIO</a></strong></span>, the most loved IDE solution for Microsoft Visual Studio Code.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/stable/boards/atmelsam/seeed_xiao.html">XIAO SAMD21 (Seeeduino XIAO)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_nrf52840_with_platform_io/">XIAO nRF52840 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32c3.html">XIAO ESP32C3</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_with_platform_io/">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://docs.platformio.org/en/latest/boards/espressif32/seeed_xiao_esp32s3.html">XIAO ESP32S3 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://taunoerik.art/2023/05/15/start-seeed-xiao-rp2040-on-platformio/">XIAO RP2040</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_rp2350_with_platform_io/">XIAO RP2350</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_mg24_with_platform_io/"> XIAO MG24 (Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_ra4m1_with_platform_io/">XIAO RA4M1</a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://micropython.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/micropython.png" style={{width:'auto', height:50}} /></a></div>

<span id="micropython"><strong><a href="https://micropython.org/">MicroPython</a></strong></span>, a full implementation of the Python 3 programming language that runs directly on embedded hardware.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-SAMD21-MicroPython/">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-RP2040-with-MicroPython/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c3_with_micropython/">XIAO ESP32C3</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_with_micropython/">XIAO ESP32S3 (Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32S3_Micropython/">XIAO ESP32S3 Sense Only (Camera, Wi-Fi)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://micropython.org/download/SEEED_XIAO_NRF52/">XIAO nRF52840 Sense</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_micropython/">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://micropython.org/download/SEEED_XIAO_RP2350/">XIAO RP2350</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://circuitpython.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/circuitpython.png" style={{width:'auto', height:50}} /></a></div>

<span id="circuitpython"><strong><a href="https://circuitpython.org/">CircuitPython</a></strong></span>, a programming language designed to simplify experimenting and learning to code on low-cost microcontroller boards.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Seeeduino-XIAO-CircuitPython/">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-RP2040-with-CircuitPython/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE_CircutPython/">XIAO nRF52840 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c3_with_circuitpython/">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_project_circuitpython/">XIAO ESP32S3 Sense</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_with_circuitpython/">XIAO ESP32C6</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://circuitpython.org/board/seeeduino_xiao_rp2350/">XIAO RP2350</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.swift.org/getting-started/embedded-swift/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/swift.png" style={{width:'auto', height:50}} /></a></div>

<span id="embedded_swift"><strong><a href="https://www.swift.org/getting-started/embedded-swift/">Embedded Swift</a></strong></span>, a scalable language, great for writing desktop and mobile apps, server backends, and system software, running on microcontrollers
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao-esp32-swift/">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://idf.espressif.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/espressif.png" style={{width:'auto', height:50}} /></a></div>

<span id="esp_idf"><a href="https://idf.espressif.com/"><strong>ESP IDF</strong></a></span>, Espressif’s official IoT Development Framework for the ESP32, ESP32-S and ESP32-C series of SoCs,  providing a self-sufficient SDK for any generic application development on these platforms, using programming languages such as C and C++.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_idf/">XIAO ESP32 Series (Getting Started)</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/getting_started_with_matter/">Matter Development 1</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32_matter_env/">Matter Development 2</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/matter_development_framework/">Matter Development 3</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.rust-lang.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/rust.png" style={{width:'auto', height:50}} /></a></div>

<span id="rust"><strong><a href="https://www.rust-lang.org/">Rust</a></strong></span>, a language empowering everyone to build reliable and efficient software.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/atsamd-rs/atsamd/tree/master/boards/xiao_m0">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://tutoduino.fr/en/tutorials/programing-in-rust-the-xiao-rp2040-board/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://forum.seeedstudio.com/t/rust-on-xiao-esp32s3/276724">XIAO ESP32S3 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Wumpf/Seeed-nRF52840-Sense-projects">XIAO nRF52840 (Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://tinygo.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tinygo.png" style={{width:'auto', height:50}} /></a></div>

<span id="tinygo"><strong><a href="https://tinygo.org/">TinyGo</a></strong></span>, a Go compiler intended for use in small places such as microcontrollers, WebAssembly (wasm/wasi), and command-line tools.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://tinygo.org/docs/reference/microcontrollers/xiao/">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://tinygo.org/docs/reference/microcontrollers/xiao-ble/">XIAO nRF52840 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://tinygo.org/docs/reference/microcontrollers/xiao-rp2040/">XIAO RP2040</a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://microblocks.fun/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/microblocks.png" style={{width:'auto', height:50}} /></a></div>

<span id="microblocks"><strong><a href="https://microblocks.fun/">MicroBlocks</a></strong></span>, a blocks programming language for physical computing inspired by Scratch.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://microblocks.fun/downloads/pilot/vm/vm_xiao_samd21.uf2">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://microblocks.fun/downloads/pilot/vm/vm_xiao_rp2040.uf2">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://microblocks.fun/downloads/pilot/vm/vm_xiao_rp2350.uf2">XIAO RP2350</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://microblocks.fun/downloads/pilot/vm/vm_xiao_nrf52840.uf2">XIAO nRF52840</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

## <span id="supported_rtos">Supported RTOS</span>

<br></br>
<div><a href="https://docs.zephyrproject.org/latest/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zephyr.png" style={{width:'auto', height:70}} /></a></div>

<span id="zephyr"><strong><a href="https://docs.zephyrproject.org/latest/">Zephyr</a></strong></span>, a scalable real-time operating system (RTOS) supporting multiple hardware architectures, optimized for resource constrained devices, and built with security in mind.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-SAMD21-Zephyr-RTOS/">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-RP2040-Zephyr-RTOS/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-nRF52840-Zephyr-RTOS/">XIAO nRF52840 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-ESP32C3-Zephyr/">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_zephyr_rtos/">XIAO ESP32S3 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://docs.zephyrproject.org/latest/boards/seeed/xiao_esp32c6/doc/index.html">XIAO ESP32C6</a></th>  
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://docs.zephyrproject.org/latest/boards/seeed/xiao_ra4m1/doc/index.html">XIAO RA4M1</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://docs.zephyrproject.org/latest/boards/seeed/xiao_mg24/doc/index.html">XIAO MG24</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.freertos.org/"><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/xiao_esp32s3_freertos/1.png" style={{width:'auto', height:50}} /></a></div>

<span id="freertos"><strong><a href="https://www.freertos.org/">FreeRTOS</a></strong></span>,  real-time operating system for microcontrollers and small microprocessors.
<br></br>
<br></br>
<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}>XIAO SAMD21</th>
   <th style={{width:333, height:'auto'}}>XIAO nRF52840</th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao-esp32s3-freertos/">XIAO ESP32S3 (Sense)</a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://nuttx.apache.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/nuttxrtos.png" style={{width:'auto', height:80}} /></a></div>

<span id="apache_nuttx_rtos"><strong><a href="https://nuttx.apache.org/">Apache NuttX RTOS</a></strong></span>, a real-time operating system (RTOS) with an emphasis on standards compliance and small footprint
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/samd2l2/boards/xiao-seeeduino/index.html">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao-rp2040-with-nuttx/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/nrf52/boards/xiao-nrf52840/index.html">XIAO nRF52840</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/rp23xx/boards/xiao-rp2350/index.html">XIAO RP2350</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/arm/ra4m1/boards/xiao-ra4m1/index.html ">XIAO RA4M1</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/xtensa/esp32s3/boards/esp32s3-xiao/index.html">XIAO ESP32S3</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c3/boards/esp32c3-xiao/index.html">XIAO ESP32C3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://nuttx.apache.org/docs/latest/platforms/risc-v/esp32c6/boards/esp32c6-xiao/index.html">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

## <span id="communications">Communications</span>

<br></br>
<div><a href="https://kafka.apache.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/apachekafka.png" style={{width:'auto', height:50}} /></a></div>

<span id="apache_kafka"><strong><a href="https://kafka.apache.org/">Apache Kafka</a></strong></span>, an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_kafka/">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://csa-iot.org/all-solutions/matter/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/matter.png" style={{width:'auto', height:50}} /></a></div>

<span id="matter"><strong><a href="https://csa-iot.org/all-solutions/matter/">Matter</a></strong></span>, industry–unifying standard protocol that offers reliable, secure connectivity for ompatible devices and systems.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_idf/">XIAO ESP32 Series (C3, S3, C6)</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://csa-iot.org/all-solutions/zigbee/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zigbee.png" style={{width:'auto', height:50}} /></a></div>

<span id="zigbee"><strong><a href="https://csa-iot.org/all-solutions/zigbee/">Zigbee</a></strong></span>, a wireless technology developed as an open global market connectivity standard to address the unique needs of low-cost, low-power wireless IoT data networks.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_zigbee_arduino/">XIAO ESP32C6（Arduino）</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_zigbee/">XIAO ESP32C6（IDF）</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.espressif.com/en/solutions/low-power-solutions/esp-now"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/espnow.png" style={{width:'auto', height:50}} /></a></div>

<span id="espnow"><strong><a href="https://www.espressif.com/en/solutions/low-power-solutions/esp-now">ESP-NOW</a></strong></span>, a wireless communication protocol for quick responses and low-power, which widely used in smart-home appliances, remote controlling and sensors.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_espnow/">XIAO ESP32 Series (ESP32C3, ESP32S3, ESP32S3 Sense, ESP32C6)</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://meshtastic.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/mashtastic.png" style={{width:'auto', height:70}} /></a></div>

<span id="meshtastic"><strong><a href="https://meshtastic.org/">Meshtastic</a></strong></span>, an open source, off-grid, decentralized, mesh network built to run on affordable, low-power devices
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/wio_sx1262_xiao_esp32s3_for_meshtastic/">XIAO ESP32S3 for Meshtastic and LoRa</a></th>
   <th style={{width:333, height:'auto'}}>XIAO nRF52840 </th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://aws.amazon.com/iot-core/sidewalk/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/amazonsidewalk.png" style={{width:'auto', height:50}} /></a></div>

<span id="amazon_sidewalk"><strong><a href="https://aws.amazon.com/iot-core/sidewalk/">Amazon Sidewalk</a></strong></span>, an encrypted free-to-connect long-range network that provides persistent connectivity for billions of devices.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao-ble-sidewalk/">XIAO nRF52840</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.blecon.net/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/blecon.png" style={{width:'auto', height:60}} /></a></div>

<span id="blecon"><strong><a href="https://www.blecon.net/">Blecon</a></strong></span>, enables physical products to communicate with cloud applications using Bluetooth Low Energy.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://developer.blecon.net/modem-reference/boards-and-modules/seeed-xiao-nrf52840-breakout">XIAO nRF52840</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

## <span id="tinyml/embedded_machine_learningtinyml">TinyML/Embedded Machine Learning Platforms</span>

<br></br>
<div><a href="https://sensecraft.seeed.cc/ai/#/home"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/sensecraft.png" style={{width:'auto', height:50}} /></a></div>

<span id="sensecraft_ai"><strong><a href="https://sensecraft.seeed.cc/ai/#/home">SenseCraft AI</a></strong></span>, <strong>Your go-to solution for no-code model training, deployment and more.</strong>
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32s3_edgelab/">XIAO ESP32S3 Sense (Model Assistant)</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://ai.google.dev/edge/litert"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tensorflowlite.png" style={{width:'auto', height:50}} /></a></div>

<span id="tensorflow_lite"><strong><a href="https://ai.google.dev/edge/litert">TensorFlow Lite</a></strong></span>, Google's high-performance runtime for on-device AI.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-BLE-Sense-TFLite-Getting-Started/">XIAO nRF52840 (Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://edgeimpulse.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/edgeimpulse.png" style={{width:'auto', height:50}} /></a></div>

<span id="edge_impulse"><strong><a href="https://edgeimpulse.com/">Edge Impulse</a></strong></span>, the leading development platform for machine learning on edge devices.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Seeeduino-XIAO-TinyML/">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO-RP2040-EI/">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAOEI/">XIAO nRF52840 (Sense)-Motion Recognition</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/tinyml_course_Key_Word_Spotting/">XIAO ESP32S3 Sense (Key Word Spotting)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/tinyml_course_Image_classification_project/">XIAO ESP32S3 Sense (Image Classification)</a></th>
  </tr>
 </table>
</div>

## <span id="smart_home_and_automation">Smart Home and Automation</span>

<br></br>
<div><a href="https://www.home-assistant.io/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/homoassiatant.png" style={{width:'auto', height:50}} /></a></div>
<div><a href="https://esphome.io/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/esphome.png" style={{width:'auto', height:50}} /></a></div>

<span id="home_assistant_esphome"><strong><a href="https://www.home-assistant.io/">Home Assistant</a> & <a href="https://esphome.io/">ESPHome</a></strong></span>, a system to control your microcontrollers by simple yet powerful configuration files and control them remotely through Home Automation systems such as Home Assistant.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/XIAO_ESP32S3_esphome/">XIAO ESP32S3 Sense</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Connect-Grove-to-Home-Assistant-ESPHome/#grove-compatibility-list-with-esphome">Connect XIAO ESP32 + Grove Sensors to HA via ESPHome</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao-esp32c3-esphome/">XIAO ESP32C3 + mmWave to HA</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/Connect-Grove-to-Home-Assistant-ESPHome/">Add XIAO ESP32C3 to ESPHome</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://github.com/arendst/Tasmota"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/tasmota.png" style={{width:'auto', height:50}} /></a></div>

<span id="tasmota"><strong><a href="https://github.com/arendst/Tasmota">Tasmota</a></strong></span>, alternative open source firmware for ESP8266 and ESP32 based devices with easy configuration using webUI, OTA updates, automation using timers or rules, expandability and entirely local control over MQTT, HTTP, Serial or KNX.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32C3.html">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32S3.html">XIAO ESP32S3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32S3_SENSE.html">XIAO ESP32S3 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_XIAO_ESP32C6.html">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://templates.blakadder.com/seeedstudio_mmwave_sensor_kit.html">Human Detection Sensor Kit Presence Sensor Based on XIAO ESP32C3</a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

## <span id="open_source_keyboard_firmware_support">Open-Source Keyboard Firmware Support</span>

<br></br>
<div><a href="https://qmk.fm/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/qmk.png" style={{width:'auto', height:50}} /></a></div>

<span id="qmk"><strong><a href="https://qmk.fm/">QMK</a></strong></span>, Open-source keyboard firmware for Atmel AVR and Arm USB families.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/PJE66/hummingbird">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/kilipan/hummingbird_qmk">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}>XIAO nRF52840 (Sense)</th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://zmk.dev/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/zmk.png" style={{width:'auto', height:50}} /></a></div>

<span id="zmk"><strong><a href="https://zmk.dev/">ZMK</a></strong></span>, an open source keyboard firmware built on the Zephyr™ Project Real Time Operating System (RTOS).
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://zmk.dev/docs/hardware#seeed_xiao">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://zmk.dev/docs/hardware#seeed_xiao">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://zmk.dev/docs/hardware#seeed_xiao">XIAO nRF52840 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}>XIAO RP2350</th>
   <th style={{width:333, height:'auto'}}>XIAO MG24 (Sense)</th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

## <span id="other_hot_applications">Other Hot Applications</span>

<br></br>
<div><a href="https://kno.wled.ge/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/wled.png" style={{width:'auto', height:50}} /></a></div>

<span id="wled"><strong><a href="https://kno.wled.ge/">WLED</a></strong></span>, a fast and feature-rich implementation of an ESP8266/ESP32 webserver to control NeoPixel (WS2812B, WS2811, SK6812) LEDs or also SPI based chipsets.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://www.instructables.com/WLED-ON-XIAO-ESP32/">XIAO ESP32 Series (C3, S3, S3 Sense)</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://chatgpt.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/chatgtp.png" style={{width:'auto', height:50}} /></a></div>

<span id="chatgpt"><strong><a href="https://chatgpt.com/">ChatGPT</a></strong></span>, a sibling model to InstructGPT⁠, which is trained to follow an instruction in a prompt and provide a detailed response.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiaoesp32c3-chatgpt/">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.ffmpeg.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/ffmpeg.png" style={{width:'auto', height:50}} /></a></div>

<span id="ffmpeg"><strong><a href="https://www.ffmpeg.org/">FFmpeg</a></strong></span>, a collection of libraries and tools to process multimedia content such as audio, video, subtitles and related metadata.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://tutoduino.fr/tutoriels/esp32-timelapse/#google_vignette">XIAO ESP32S3 Sense</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://github.com/mROS-base/mros2-esp32"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/mrosbase.png" style={{width:'auto', height:50}} /></a></div>

<span id="mros2_esp32"><strong><a href="https://github.com/mROS-base/mros2-esp32">mROS2-ESP32</a></strong></span>, a light-weighted runtime environment for ROS nodes onto embedded esp32 micro-controller
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/mROS-base/mros2-esp32/issues/7">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/mROS-base/mros2-esp32/issues/24">XIAO ESP32S3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://github.com/mROS-base/mros2-esp32/issues/23">XIAO ESP32C6</a></th>
  </tr>
 </table>
</div>

## <span id="prototyping_tools_pcb_layout_stimulation">Prototyping Tools (PCB Layout & Stimulation)</span>

<br></br>
<div><a href="https://fritzing.org/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/fritzing.png" style={{width:'auto', height:50}} /></a></div>

<span id="fritzing"><strong><a href="https://fritzing.org/">Fritzing</a></strong></span>, an electronics design and prototyping platform for makers, hobbyists, and educators.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20SAMD21(Seeeduino).fzpz">XIAO SAMD21</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20RP2040.fzpz">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20nRF52840(Sense).fzpz">XIAO nRF52840 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20ESP32C3.fzpz">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20ESP32C6.fzpz">XIAO ESP32C6</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20ESP32S3(Sense).fzpz">XIAO ESP32S3 (Sense)</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/XIAO%20RP2350.fzpz">XIAO RP2350</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://github.com/Seeed-Studio/fritzing_parts/blob/master/XIAO%20Boards/Seeed%20Studio%20XIAO%20RA4M1.fzpz">XIAO RA4M1</a></th>
            <th style={{width:333, height:'auto'}}>XIAO MG24 (Sense)</th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://www.flux.ai/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/flux.png" style={{width:'auto', height:50}} /></a></div>

<span id="fluxai"><strong><a href="https://www.flux.ai/">FluxAI</a></strong></span>, a Better Way to Build professional PCBs with an AI Copilot.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}>XIAO SAMD21</th>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2040">XIAO RP2040</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840">XIAO nRF52840</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-nrf52840-sense">XIAO nRF52840 Sense</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c3">XIAO ESP32C3</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3">XIAO ESP32S3</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32s3-sense">XIAO ESP32S3 Sense</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-esp32c6">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-rp2350">XIAO RP2350</a></th>
  </tr>
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://www.flux.ai/seeedstudio/seeed-studio-xiao-ra4m1">XIAO RA4M1</a></th>
            <th style={{width:333, height:'auto'}}>XIAO MG24 (Sense)</th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://wokwi.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/wokwi.png" style={{width:'auto', height:50}} /></a></div>

<span id="wokwi"><strong><a href="https://wokwi.com/">Wokwi</a></strong></span>, World's most advanced ESP32 Simulator.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wokwi.com/projects/410433244849526785">XIAO ESP32C3</a></th>
   <th style={{width:333, height:'auto'}}><a href="https://wokwi.com/projects/411276781876475905">XIAO ESP32S3 (Sense)</a></th>
            <th style={{width:333, height:'auto'}}><a href="https://wokwi.com/projects/411265368570177537">XIAO ESP32C6</a></th>
  </tr>
 </table>
</div>

## <span id="iot_clouds_and_iot_platforms">IoT Clouds and IoT Platforms</span>

<br></br>
<div><a href="https://aws.amazon.com/iot/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/awsiot.png" style={{width:'auto', height:50}} /></a></div>

<span id="aws_iot"><strong><a href="https://aws.amazon.com/iot/">AWS IoT</a></strong></span>,  enables to securely connect and manage devices, collect and analyze device data, and build and deploy solutions that drive greater business value.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/xiao_esp32c6_aws_iot/">XIAO ESP32C6</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://thingspeak.mathworks.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/thingspeak.png" style={{width:'auto', height:70}} /></a></div>

<span id="thingspeak"><strong><a href="https://thingspeak.mathworks.com/">ThingSpeak</a></strong></span>, the open IoT platform with MATLAB analytics.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://elchika.com/article/433216e7-90a9-4f59-bbb3-4a7531588140/">XIAO nRF52840</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>
<div><a href="https://ubidots.com/"><img src="https://files.seeedstudio.com/wiki/xiao_topicpage/ubidots.png" style={{width:'auto', height:50}} /></a></div>

<span id="ubidots"><strong><a href="https://ubidots.com/">Ubidots</a></strong></span>, a low-code IoT development platform for engineers and developers without the time or energy to build an entire, production-ready IoT application.
<br></br>
<br></br>

<div class="table-center">
 <table align="center">
  <tr>
   <th style={{width:333, height:'auto'}}><a href="https://wiki.seeedstudio.com/L76K_Path_Tracking_on_Ubidots/">XIAO ESP32S3 + L76K GNSS Module for Tracking</a></th>
   <th style={{width:333, height:'auto'}}><a href=""></a></th>
            <th style={{width:333, height:'auto'}}><a href=""></a></th>
  </tr>
 </table>
</div>

<br></br>

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
