---
description: mmWave Radar Sensor Guide
title: mmWave Radar Sensor Guide
keywords:
- Grove
- mmWave Radar Sensor

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /mmwave_radar_Intro
last_update:
  date: 07/25/2024
  author: Frank
---

## mmWave Radar Principle

Millimeter Wave (mmWave) radar uses Frequency Modulated Continuous Wave (FMCW) radar techniques to detect objects and their velocity, range, and angle. The FMCW radar continuously transmits a frequency-modulated signal and receives the reflected signals from objects. By analyzing the difference between the transmitted and received frequencies, the radar can determine the distance (range) and relative speed (velocity) of objects. This principle allows mmWave radar to detect fine movements, provide high accuracy, and function effectively in various environmental conditions such as rain, fog, or dust.

## Different types of mmWave Radar Sensors


Millimeter-wave (mmWave) radar sensors are capable of detecting objects, measuring their distance, speed, and angle, and can penetrate various materials such as plastic, clothing, and drywall, making them suitable for a wide range of applications.
In Seeed, We have leveraged the power of mmWave to come up with various sensors that can perform a variety of actions, such as fall detection and sleep breathing monitoring.

Our range of mmWave Radar Sensors are shown below, each with different features and functions. 

<table align="center">
<font size={"2"}>
    <tr>
        <th></th>
        <th><a href="https://wiki.seeedstudio.com/getting_started_with_mr60fda2_mmwave_kit/">Seeed Stduio <strong>MR60FDA2</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/getting_started_with_mr60bha2_mmwave_kit/">Seeed Stduio <strong>MR60BHA2</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/mmwave_human_detection_kit/">Seeed Stduio mmWave Human Detection Sensor Kit</a></th>
        <th><a href="https://wiki.seeedstudio.com/mmwave_for_xiao/">Seeed Studio <strong>24GHz XIAO</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/Radar_MR24HPC1/">Seeed Studio <strong>MR24HPC1</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/Radar_MR24HPB1/">Seeed Studio <strong>MR24HPB1</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/Radar_MR24BSD1/">Seeed Studio <strong>MR24BSD1</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/Radar_MR60BHA1/">Seeed Studio <strong>MR60BHA1</strong></a></th>
        <th><a href="https://wiki.seeedstudio.com/Radar_MR60FDA1/">Seeed Studio <strong>MR60FDA1</strong></a></th>
    </tr>
    <tr>
        <th>Operating Frequency</th>
        <td>60GHz</td>
        <td>60GHz</td>
        <td>24GHz</td>
        <td>24GHz</td>
        <td>24GHz</td>
        <td>24GHz</td>
        <td>24GHz</td>
        <td>60GHz</td>
        <td>60GHz</td>
    </tr>
    <tr>
        <th>Transmit Power</th>
        <td>/</td>
        <td>/</td>
        <td>8dBm</td>
        <td>/</td>
        <td>8dBm</td>
        <td>10dBm</td>
        <td>6dBm</td>
        <td>6dBm</td>
        <td>6dBm</td>
    </tr>
    <tr>
        <th>Motion Range</th>
        <td>6m</td>
        <td>6m</td>
        <td>5m</td>
        <td>6m</td>
        <td>5m</td>
        <td>12m</td>
        <td>2.75m</td>
        <td>0.5m</td>
        <td>6m</td>
    </tr>
    <tr>
        <th>Presence Range</th>
        <td>3m</td>
        <td>1.5m</td>
        <td>4m</td>
        <td>4m</td>
        <td>4m</td>
        <td>5m</td>
        <td>1.5m</td>
        <td>1.5m</td>
        <td>3m</td>
    </tr>
    <tr>
        <th>Detection Angle</th>
        <td>120x100°</td>
        <td>120x100°</td>
        <td>90×60°</td>
        <td>60×60°</td>
        <td>90×60°</td>
        <td>90×60°</td>
        <td>40×40°</td>
        <td>20×20°</td>
        <td>60×60°</td>
    </tr>
    <tr>
        <th>Operating Voltage</th>
        <td>5V</td>
        <td>5V</td>
        <td>4.5-6V</td>
        <td>5V</td>
        <td>4.5-6V</td>
        <td>4.5-6V</td>
        <td>4.5-6V</td>
        <td>4.5-6V</td>
        <td>4.5-6V</td>
    </tr>
    <tr>
        <th>Pins Spacing</th>
        <td>2.54mm</td>
        <td>2.54mm</td>
        <td>2.00mm</td>
        <td>2.54mm</td>
        <td>2.00mm</td>
        <td>2.00mm</td>
        <td>/</td>
        <td>/</td>
        <td>/</td>
    </tr>
    <tr>
        <th>Size (WxH)</th>
        <td>30x48mm</td>
        <td>30x48mm</td>
        <td>35x30mm</td>
        <td>22x18mm</td>
        <td>35x30mm</td>
        <td>35x30mm</td>
        <td>45x26mm</td>
        <td>35x30mm</td>
        <td>35x30mm</td>
    </tr>
    <tr>
        <th>ESPHome Support</th>
        <td>Native Firmware Support</td>
        <td>Native Firmware Support</td>
        <td><a href="https://github.com/thefipster/esphome-mmwave-sensors">GitHub</a></td>
        <td><a href="https://wiki.seeedstudio.com/mmwave_for_xiao/">Guide</a></td>
        <td><a href="https://github.com/thefipster/esphome-mmwave-sensors">GitHub</a></td>
        <td><a href="https://github.com/thefipster/esphome-mmwave-sensors">GitHub</a></td>
        <td>/</td>
        <td><a href="https://github.com/thefipster/esphome-mmwave-sensors">GitHub</a></td>
        <td><a href="https://github.com/DuncanIdahoCT/espresence-mr60fda1-mmwave-sensor">GitHub</a></td>
    </tr>
    <tr>
       <th>Category</th>
       <td>Sensor with XIAO ESP32C6 as the MCU</td>
       <td>Sensor with XIAO ESP32C6 as the MCU</td>
       <td>Sensor with XIAO ESP32C3 as the MCU</td>
       <td>Module</td>
       <td>Module</td>
       <td>Module</td>
       <td>Module</td>
       <td>Module</td>
       <td>Module</td>
    </tr>
    <tr>
        <th>Availability</th>
        <td><a href="https://www.seeedstudio.com/"><strong>$24.9</strong> at Seeed Stduio</a></td>
        <td><a href="https://www.seeedstudio.com/"><strong>$24.9</strong> at Seeed Stduio</a></td>
        <td><a href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html"><strong>$26.99</strong> at Seeed Stduio</a></td>
        <td><a href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html"><strong>$4.49</strong> at Seeed Studio</a></td>
        <td><a href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html"><strong>$6.9</strong> at Seeed Studio</a></td>
        <td><a href="https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Human-Static-Presence-Module-p-5267.html"><strong>$19.9</strong> at Seeed Studio</a></td>
        <td><a href="https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html"><strong>$28</strong> at Seeed Studio</a><br /><br /><a href="https://amzn.to/45zzW52">Amazon</a></td>
        <td><a href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html"><strong>$45</strong> at Seeed Studio</a></td>
        <td><a href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Fall-Detection-Module-Pro-p-5375.html"><strong>$37</strong> at Seeed Studio </a><br /><br /><a href="https://amzn.to/3VycnFj">Amazon</a></td>
    </tr>
    <tr>
        <th>Note</th>
        <td>New Release</td>
        <td>New Release</td>
        <td>In Stock</td>
        <td>In Stock</td>
        <td>In Stock</td>
        <td>In Stock</td>
        <td>Out of Stock</td>
        <td>Out of Stock</td>
        <td>Out of Stock</td>
    </tr>
</font>
</table>

<!-- ### 24GHz mmWave Sensor - Human Static Presence Module Lite (MR24HPC1)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101991030-24ghz-mmwave-sensor-45font_1.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>24GHz mmWave Sensor - Human Static Presence Module Lite is an antenna-integrated, health-friendly mmwave radar sensor that applies FMCW ranging technology, with operation in 24GHz, for implementation of human static presence, independently of environmental influences. This is also a personalized radar that users can configure underlying parameters of it to determine detected functions. </font>
    </div> 
</div>

<br /><br /><br /><br />


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Buy Now</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/Radar_MR24HPC1/"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Learn More</font></span></strong>
    </a>
</div>


### 24GHz mmWave Sensor - Human Static Presence Module (MR24HPB1)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101990883-24ghz-mmwave-sensor---human-stationary-presence-module-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>The Human Static Presence Radar Sensor is a self-contained, privacy-protectively, safety mmWave module operating at 24GHz. With the enhanced Infineon Doppler radar and the standard algorithm, the module is an ideal solution for individual applications like smart home, smart hotel and danger alarm. </font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Human-Static-Presence-Module-p-5267.html"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Buy Now</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/Radar_MR24HPB1/"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Learn More</font></span></strong>
    </a>
</div>

### 24GHz mmWave Sensor - Sleep Breathing Monitoring (MR24BSD1)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/60GHzradar/1.jpeg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>The MR24BSD1 24GHz radar module applies Dopplor detected theory to implement human sleep quality monitoring providing a fully total private and secure sensing environment, independently from other noisy influences. It is a useful privacy-protected, secure sensor radar systems in smart home applications like sleep safety alarm, sleep respiratory detection.</font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Buy Now</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/Radar_MR24BSD1/"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Learn More</font></span></strong>
    </a>
</div>


### 60GHz mmWave Sensor - Human Static Sleep Breathing Monitoring (MR60BHA1)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>The MR60BHA1 60GHz radar module applies FMCW detected theory to implement simultaneous personal breathing rate and heart rate detention in high accuracy, providing a fully total private and secure environment, independently from other noisy influences. It is a standard biotic radar system in consumer electronics, healthcare as well as industrial applications.</font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Buy Now</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/Radar_MR60BHA1/"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Learn More</font></span></strong>
    </a>
</div>


### 60GHz mmWave Sensor - Fall Detection Module Pro (MR60FDA1)

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>The 60GHz mmWave Radar Sensor - Fall Detection Module Pro uses FMCW detection to accurately monitor human activities, including movement, falls, and stationary states, ensuring privacy and security without interference from noise. It is a standard biotic radar system for private property surveillance, fall prevention, and elderly healthcare, performing well in homes, hotels, and hospitals. </font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Fall-Detection-Module-Pro-p-5375.html"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Buy Now</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/Radar_MR60FDA1/"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Learn More</font></span></strong>
    </a>
</div>


### Seeed Studio 24GHz mmWave for XIAO

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-101010001-seeed-studio-24ghz-mmwave-for-xiao-45font_1.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>24GHz mmWave Sensor for XIAO - Human Static Presence is a expansion board for Seeed Studio XIAO series. It is an antenna-integrated, high-sensitivity mmwave radar sensor that is based on the FMCW principle. Combined with radar signal processing and accurate human body sensing algorithms, it can identify human bodies in motion and stationary states.</font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-24GHz-mmWave-for-XIAO-p-5830.html"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Buy Now</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/mmwave_for_xiao/"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Learn More</font></span></strong>
    </a>
</div>


### mmWave Human Detection Sensor Kit

<div class="all_container">
    <div class="xiao_topic_page_pic">
        <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-human-detection-sensor-kit-45font.jpg" style={{width:900, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_font1">
        <font size={"2.1"}>Powered by Seeed Studio's XIAO ESP32C3, it supports WiFi/BLE connectivity and precise human detection via mmWave sensors. Connect Grove modules for added features and set up Home Assistant in 1-2 minutes with OTA updates. Its replaceable mmWave sensors enable versatile use, ideal for smart home automation, intrusion detection, and elderly monitoring.</font>
    </div> 
</div>

<br /><br /><br /><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/mmWave-Human-Detection-Sensor-Kit-p-5773.html"><strong><span><font color={'FFFFFF'} size={"4"}> 🖱️ Buy Now</font></span></strong>
    </a>
    <a class="get_one_now_item" href="/mmwave_human_detection_kit/"><strong><span><font color={'FFFFFF'} size={"4"}> 📚 Learn More</font></span></strong>
    </a>
</div>


## Specification Differences Among Different Sensors

||[24GHz Human Static Presence Sensor Lite](https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html)|[24GHz Human Static Presence](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Human-Static-Presence-Module-p-5267.html)|[24GHz Respiratory Sleep Sensor](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html)|[60GHz Respiratory Heartbeat Sensor](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html)|[60GHz Fall Detection Module Pro](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Fall-Detection-Module-Pro-p-5375.html)|
|--|--|--|--|--|--|
|Detection Range|<p style={{textAlign: 'center'}}>5 m</p>|<p style={{textAlign: 'center'}}>12 m</p>|<p style={{textAlign: 'center'}}>2.75 m</p>|<p style={{textAlign: 'center'}}>2 m</p>|<p style={{textAlign: 'center'}}>6 m</p>|
|Horizontal Detection Angle|<p style={{textAlign: 'center'}}>90°</p>|<p style={{textAlign: 'center'}}>90°</p>|<p style={{textAlign: 'center'}}>40°</p>|<p style={{textAlign: 'center'}}>40°</p>|<p style={{textAlign: 'center'}}>100°</p>|
|Vertical Detection Angle|<p style={{textAlign: 'center'}}>60°</p>|<p style={{textAlign: 'center'}}>60°</p>|<p style={{textAlign: 'center'}}>40°</p>|<p style={{textAlign: 'center'}}>40°</p>|<p style={{textAlign: 'center'}}>100°</p>|
|Human Presence|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|Stationary|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|Movement|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|Fall Detection|||||<p style={{textAlign: 'center'}}>✅</p>|
|Distance|<p style={{textAlign: 'center'}}>✅</p>|||||
|Proximity|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|Speed|<p style={{textAlign: 'center'}}>✅</p>|||||
|Breathing Rate|||<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>||
|Heartbeat|||<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>||
|Sleep State|||<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|| -->


## mmWave Radar Sensor: Typical Application Scenarios in our Life

mmWave radar sensors are utilized in a variety of innovative projects across different industries. Here are a few examples:

- Automotive Safety Systems: Enhancing driver assistance systems with features like adaptive cruise control, automatic emergency braking, and blind-spot detection.
- Smart Home Devices: Using radar sensors for gesture recognition, presence detection, and monitoring vital signs without physical contact.
- Industrial Automation: Implementing radar for monitoring machinery, detecting human presence in hazardous areas, and improving safety in automated environments.
- Healthcare Applications: Monitoring patients' vital signs, detecting falls, and providing non-invasive diagnostic tools.
- Drone Navigation: Enabling drones to avoid obstacles, navigate autonomously, and perform precision landings.

These projects demonstrate the versatility and potential of mmWave radar technology in transforming various fields through improved sensing and automation capabilities.


## ✨ Contributor Project

- We have a task list for updating this page, which is categorized under our [contributor project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), as we are dedicated to enhancing the user experience and providing better support through the development of our wiki platform.
- [Your contribution to this page](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962026) is essential to us! We really value your input and would greatly appreciate your assistance in generating ideas.

## Tech Support & Product Discussion

 <br />

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
