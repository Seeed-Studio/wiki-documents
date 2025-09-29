---
description: Wio Terminal Guide
title: Wio Terminal Guide
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio_Terminal_Intro
last_update:
  date: 08/6/2024
  author: Frank
---

## Introduction

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" style={{width:600, height:'auto'}}/></div>

The Wio Terminal is a versatile development board powered by an ATSAMD51 microcontroller and equipped with a 2.4" LCD screen. It includes onboard Wi-Fi/Bluetooth capabilities, a built-in accelerometer, microphone, buzzer, microSD card slot, and various I/O interfaces. The Wio Terminal is designed to simplify the development of IoT applications, making it an ideal tool for both beginners and experienced developers.

## The Idea of OSHW (Fabricatable Open Source Hardware)

Open Source Hardware (OSHW) refers to hardware whose design is made publicly available so that anyone can study, modify, distribute, make, and sell the design or hardware based on that design. [The Wio Terminal embodies the OSHW philosophy by providing extensive documentation, open-source code, and design files](https://github.com/Seeed-Studio/OSHW-WioTerminal), allowing users to fully understand and replicate the hardware. This openness fosters innovation, collaboration, and learning within the developer community.

## Getting Started with Wio Terminal

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Get Started with Wio Terminal</th>
      <th class="table-trnobg">CircuitPython on Wio Terminal</th>
      <th class="table-trnobg">How to use FreeRTOS to Multi-tasking in Arduino</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/cp-wt.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/FreeRTOS/FreeRTOS-logo.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>In this show, our engineer Lakshantha will explain how to use the Wio terminal along with the software and present you with fun demos as well! </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki introduce how to install and run the official CircuitPython by Adafruit Industries on the Seeeduino Wio Terminal! </font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>For Arduino compatibility, we have ported FreeRTOS into the Arduino framework so that you are able to use FreeRTOS with your favorite Arduino boards with ease! This wiki introduce how to start with FreeRTOS for Arduino.  </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-CircuitPython/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Software-FreeRTOS/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## Hardware Overview

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">LCD Usage</th>
      <th class="table-trnobg">Input/Output</th>
      <th class="table-trnobg">IMU Usage</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0129.2019-12-03%2014_10_15.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-09%2015-42-57.2019-12-09%2015_43_28.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki introduce how to install the TFT LCD library used on Wio Terminal. It provides basic graphical functions to the Wio Terminal with minimum effort!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki introduce how to use the Grove IOs on the Wio Terminal. This allows you to enjoy the plug and play functionality of the Grove Ecosystem as well as using the 40 pin Raspberry pi compatible GPIO!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki introduce how to install the built-in 3-Axis Digital Accelerometer(LIS3DHTR) library used on Wio Terminal. This allows you to access the accelerometer information of the Wio Terminal as well as using it for motion control and etc.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-IO-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-IMU-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">SD Card</th>
      <th class="table-trnobg">Wi-Fi</th>
      <th class="table-trnobg">Bluetooth</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-12-16_13-53-10.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/banner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wio%20terminal%20bluetooth/Wio-connect.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki introduce how to install the File System library used on Wio Terminal. It provides basic functionality of File operating with the SD card, allowing to Read/Write in or from the SD card using SPI interface.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki introduces how to update the latest firmware for the Wireless Core Realtek RTL8720 on the Wio Terminal, as well as installing all the dependent libraries for Wio Terminal to enable wireless connectivity.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki introduces how to update the latest firmware for the Wireless Core Realtek RTL8720 on the Wio Terminal, as well as installing all the dependent libraries for Wio Terminal to enable Bluetooth connectivity.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-FS-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Bluetooth-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">RTC</th>
      <th class="table-trnobg">Infrared Emitter</th>
      <th class="table-trnobg">Microphone</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-RTC/demo.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-IR.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/MIC.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki introduces how to use the built-in RTC functionality inside the SAMD51 core within Wio Terminal for you to keep track of time. This feature saves you from adding an external RTC module to the system!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki demonstrates how to use the built-in Infrared Emitter as component in Wio Terminal. The Infrared Emitter is a Digital Interface and can be used to send IR signal, just like what a remote control does!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki introduces how to use the built-in microphone for audio input in Wio Terminal. The microphone can be used to detect surrounding sound and respond accordingly.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-RTC/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Infrared-Emitter/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Mic/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Buttons</font></th>
      <th class="table-trnobg"><font size={"4"}>5 Way Switch</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This wiki demonstrates how to use the configurable buttons in Wio Terminal. There are three buttons that can be used for Wio Terminal.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This wiki demonstrates how to use the 5 way Switch in Wio Terminal.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Buttons/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Switch/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Light Sensor</font></th>
      <th class="table-trnobg"><font size={"4"}>Buzzer</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This wiki demonstrates how to use the built-in light sensor as a component in Wio Terminal. The light sensor uses Analog interface and you can simply read the surrounding Light sensor values via reading its pin.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This wiki demonstrates how to use the built-in piezo buzzer as a component in Wio Terminal. The piezo can be connected to an analog pulse-width modulation(PWM) output to generate various tones and effects!</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Light/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Buzzer/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## Extension Board

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Wio Terminal Chassis Battery(650mAh)</font></th>
      <th class="table-trnobg"><font size={"4"}>Wio Terminal LoRaWan Chassis with Antenna-built-in LoRa-E5 and GNSS, EU868/US915</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Battery-Chassis/img/45.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa_WioTerminal/img/114992728_Feature-02.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> The Wio Terminal Battery Chassis is a must-have extension board for Wio-Terminal Dev Board as it provides an external power source for Wio Terminal to enhance its portability and compactness.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> Wio Terminal LoRaWan Chassis with Antenna-built-in LoRa-E5 and GNSS, EU868/US915 embedded with LoRa-E5 STM32WLE5JC, powered by ARM Cortex M4 ultra-low-power MCU core and LoRa SX126x, is a wireless radio module supporting LoRa and LoRaWAN protocol on the EU868 & US915 frequency and (G)FSK, BPSK, (G)MSK, LoRa modulations.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Chassis-Battery_650mAh/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Ethernet Connection</font></th>
      <th class="table-trnobg"><font size={"4"}>Audio Extension Board</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/enc-wio.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This wiki introduces how to use the ENC28J60 OVERLAYS HAT for Raspberry Pi on Wio Terminal for stable network connectivity. This is a perfect example of using Raspberry Pi 40 Pi extensions board on Wio Terminal.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This wiki introduces how to use the Audio library with Wio Terminal using ReSpeaker 2-Mic Hat. With the help of this library, you are able to record, play and analysis audio using Wio Terminal! Furthermore, this audio library can be implemented into different areas such as Speech recognition and much more!</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Ethernet/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Audio-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

## Kit with Courses

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Applications Kit ML101 with Prof. Vijay Course</th>
      <th class="table-trnobg">What is TinyML?</th>
      <th class="table-trnobg">Introduction to Artificial Intelligence for Makers</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HarvardKit/hardvarddetection2.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML/cc_tinyml_2.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555056241911.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This book is designed specifically for educators to be able to adopt the Wio Terminal into the classroom or workshops to show learners the power of TinyML. It provides the basic underpinnings that one would have to cover to teach the very basics of ML while keeping the concepts grounded in hands-on exercises.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>ML as you might have guessed stands for Machine Learning and in most of cases (not always though) nowadays refers to Deep Learning. Tiny in TinyML means that the ML models are optimized to run on very low-power and small footprint devices, such as various MCUs. It is a subset of ML on the Edge or Embedded Machine Learning.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>The purpose of this article to build interest and provide a general understanding for makers who want to start their deep learning journey. I will point some of the common use cases and potential pitfalls. Also at the end of this article, I'll recommend some courses and books to learn more about this topic.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-TinyML-Kit-Course/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-TinyML/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Introduction_to_Artificial_Intelligence_for_Makers/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## Application

### Easy IoT

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Connect Wio Terminal to Microsoft Azure IoT Central</font></th>
      <th class="table-trnobg"><font size={"4"}>Connecting the Wio Terminal to Microsoft Azure IoT</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Azure-IOT/Wio-terminal-azureiot.jpeg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> In this tutorial, we will walk you through the process of connecting the Wio Terminal to Microsoft Azure IoT Central and send telemetry data from the onboard sensors/ hardware on the Wio Terminal such as the 3-axis accelerometer, light sensor, 3 buttons to Microsoft Azure IoT Central.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> This sample application shows you how to connect your Wio Terminal to Azure IoT Hub. It is built on top of the Azure SDK for Embedded C, a small footprint, easy-to-port library for communicating with Azure services.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Azure-IOT/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg"><font size={"4"}>Connect Wio Terminal to Google Cloud IoT Core</font></th>
      <th class="table-trnobg"><font size={"4"}>Get Started with Wio Terminal and Wappsto IoT</font></th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png" style={{width:300, height:'auto'}}/></div></td>
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wappsto/wappsto1.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> In this tutorial, we will walk you through the process of connecting the Wio Terminal to Google Cloud IoT Core and send telemetry data from the Wio Terminal to the Google Cloud IoT core.</font></td>
      <td className="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}> In this tutorial, we will guide you through connecting the Wio Terminal to Wappsto IoT and using the various features of Wappsto after the connection.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Get-Started-with-Wio-Terminal-and-Wappsto-IoT/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
  </tr>
 </table>
</div>

### Embedded ML

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Projects based Edge Impulse</th>
      <th class="table-trnobg">Projects based TensorFlow Lite</th>
      <th class="table-trnobg">LoRa Node with AIoTs GPS</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-6-1024x416.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Alots/connectpc.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Edge Impulse enables developers to create the next generation of intelligent device solutions with embedded Machine Learning. Machine Learning at the very edge will enable valuable use of the 99% of sensor data that is discarded today due to cost, bandwidth or power constraints.
      Now, Wio Terminal is officially supported by the Edge Impulse. Let's see how to get Wio Terminal started with the Machine learning at the very edge!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This article introduces how to install the official Arduino Tensorflow Lite library into your Wio Terminal, allowing you to test out some Machine Learning models using Wio Terminal.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>In this project, it will be used a built-in 3 axis accelerometer sensor and the neural network algorithm to build up an intelligent recognition system. Based on the movement of Wio Terminal, it can show you its state in real-time. </font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-TinyML-EI-1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-TinyML-TFLM-1/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/AIoTs_GPS_state_tester/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## Tutorial

### Basic Usage

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">USB Host</th>
      <th class="table-trnobg">USB Client</th>
      <th class="table-trnobg">Displaying Gyro</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200108143407.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/banner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0279.2019-11-28%2018_25_43.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki introduces how to use the Wio Terminal as a USB-Host, which means you could plug USB devices into the Wio Terminal and play with it just like a computer!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki introduce how to use the Wio Terminal as USB-Client, including using it for Human Interface Device(HID) such as keyboard, mouse and etc. It also supports Musical Instrument Digital Interface(MIDI).</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This example demonstrates how to draw line graph on Wio Terminal. In this example, the 3-axis accelerator readings(3 sets of data) are plotted into one line graph to show the real-time positioning of the Wio Terminal!</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-USBH-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-USBCLIENT-Overview/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Displaying-Gyro/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Storing Data</th>
      <th class="table-trnobg">Displaying Photos</th>
      <th class="table-trnobg">Interactive Faces Demo</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0282.2019-11-28%2018_28_03.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/products.2019-11-26%2017_40_45.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0274.2019-11-26%2014_50_05.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This example demonstrates using the line graph functions to display the Grove - Light sensor reading on Wio Terminal, just like the Serial Plotter! To add more, the light sensor data are stored in the SD Card.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This example demonstrates how to display images from SD card in loop.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This example demonstrates how to display multiple images (eyes) onto the LCD screen through SD card (BMP format), and with the use of the built-in buttons and gyroscope to interact with users.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Storting-Analog-Data/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Displaying-Photos/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Interactive-Face/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

### Project

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Pressure sensor using the Wio Terminal</th>
      <th class="table-trnobg">Reading Coronavirus Live Data using Wio Terminal</th>
      <th class="table-trnobg">Build a IR Thermal Imaging Camera using Wio Terminal</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Barometric-Pressure-sensor-using-the-Wio-terminal/pre_temp_222gGIF.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/COVID-19.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/IRcamera.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>The demo shows that the Grove- high precision pressure sensor DPS310 is fully compatible with the Wio terminal, and its measurement has high precision.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki is a modification of Reading Github Repository Stats from Wio Terminal, where it is modified to access to Coronavirus COVID19 API and parse the data and display Live COVID-19 data on the LCD screen.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>With Grove - Infrared Temperature Sensor Array (AMG8833) and Wio Terminal, we can build a low cost FLIR™ like Thermal Imagining camera with ease!</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Barometric-Pressure-sensor-using-the-Wio-terminal/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Reading-COVID19/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Thermal-Camera/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Build a HMI Display for Raspberry Pi</th>
      <th class="table-trnobg">How to measure noise levels with Wio Terminal</th>
      <th class="table-trnobg">Accessing to GitHub using Wio Terminal</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminanl-HMI/Wio-Terminal-HMI.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Sound-Meter/sound-Meter_gGIF.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Github.gif" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>In this wiki, we will introduce how to use Wio Terminal as a HMI (Human Machine Interface) USB display for Raspberry Pi, Nvidia Jetson Nano, BeagleBone and even Odyssey X86J4105.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This example detects dB using the mic on ReSpeaker 2-Mic Hat, The around evirnment is detected, then displayed on the display.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki introduces how to use Wio Terminal to access to HTTPS server, which means you could use Wio Terminal to grab live data from the internet! Here, Wio Terminal is connected to a Wi-Fi and obtain data from the Github.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-HMI/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Sound-Meter/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Reading-Github/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

<br />

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">Blynk for Wio Terminal</th>
      <th class="table-trnobg">Edge Impulse Tuner</th>
      <th class="table-trnobg">Codecraft connecting Azure IoT with Wio Terminal</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/banner.gif" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EON-Tuner/connecttuner.png" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div sawakentyle={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/CCandAzure/jihe.png" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>This wiki introduces how to use the Wio Terminal with the Blynk software to interact with Wi-Fi or Bluetooth. This allows you to use Wio Terminal as the core of an IoT device and able to control hardware from phones very easily!</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Here we gonna provide the audio classification project and show you the usage of EON Tuner. If you are interested in Using LoRa to transmit data based on Wio Terminal and Edge Impulse, you can always click and see the example project.</font></td>
      <td class="table-trnobg" style={{ textAlign: 'justify' }}><font size={"2"}>Here we gonna show you how to connect Codecraft with Azure IoT based on Wio Terminal and apply sensors to IoT projects.</font></td>
    </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Wio-Terminal-Blynk/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Edge-Impulse-Tuner/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://wiki.seeedstudio.com/Azure_IoT_CC/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>📚 Learn More</font></span></strong></a></div></td>
        </tr>
    </table>
</div>

## ✨ Contributor Project

- We have a task list for updating this page, which is categorized under our [contributor project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479), as we are dedicated to enhancing the user experience and providing better support through the development of our wiki platform.
- [Your contribution to this page](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33962236) is essential to us! We really value your input and would greatly appreciate your assistance in generating ideas.

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
