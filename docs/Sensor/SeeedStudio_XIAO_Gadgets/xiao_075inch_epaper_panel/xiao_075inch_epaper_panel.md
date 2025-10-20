---
description: 'This page is the navigation page for the XIAO 7.5" epaper panel.'
title: Getting Started with XIAO 7.5" ePaper Panel
image: https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.webp
slug: /xiao_075inch_epaper_panel
sidebar_position: 1
last_update:
  date: 05/19/2025
  author: Citric
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/100.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-7-5-ePaper-Panel-p-6416.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a>
</div>

## Introduction

Powered by XIAO ESP32-C3, this 7.5 inch ePaper display is a versatile, energy-efficient smart E Ink® screen supporting a wide range of popular community applications including [Home Assistant](https://www.home-assistant.io/), [TRMNL](https://trmnl.app/), Arduino, and more. This flexible display solution is perfect for showcasing dashboard data, weather updates, schedules, and custom information. With crisp visuals, exceptional 3-months battery life (2000mAh) in deep sleep mode, and extensive customization possibilities, this compact device adapts to diverse use cases. Perfect for modern living spaces and project environments, it combines functionality with elegant design for an enhanced visual experience across multiple platforms.

### Features

- Native Home Assistant Integration
- 7.5" E Ink® Display for Home Automation
- Energy-Efficient Design with Low-Power Consumption
- Arduino Development Support
- Elegant Form Factor

### Specifications

<div class="table-center">
 <table align="center">
  <tr>
   <th>Item</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>MCU</td>
   <td><a href="https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/">XIAO ESP32-C3</a></td>
  </tr>
  <tr>
   <td>Display</td>
   <td>7.5" Monochrome ePaper Display</td>
  </tr>
  <tr>
   <td>Resolution</td>
   <td>800 x 480</td>
  </tr>
  <tr>
   <td>Battery</td>
   <td>2000mAh</td>
  </tr>
  <tr>
   <td>Dimension</td>
   <td>178 x 131 x 19 mm</td>
  </tr>
  <tr>
   <td>Weight</td>
   <td>218g</td>
  </tr>
  <tr>
   <td>Operating Temperature</td>
   <td>-25°C to 50°C</td>
  </tr>
  <tr>
   <td>Power Supply</td>
   <td>USB Type-C 5V</td>
  </tr>
        <tr>
            <td>Enclosure</td>
            <td>3D Printing (PLA)</td>
        </tr>
 </table>
</div>

## Hardware Overview

The XIAO 7.5" ePaper Panel consists of several key components as shown in the exploded view diagram:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/207.jpg" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/208.jpg" style={{width:800, height:'auto'}}/></div>

- **7.5" Monochrome ePaper Display**: 800 × 480 resolution display that maintains image without power consumption after refresh
- **ePaper Driver Board**: Controls the display and handles communication with the microcontroller
- **XIAO ESP32-C3**: Main microcontroller that runs the firmware and manages connectivity
- **2000 mAh Battery**: Provides power for extended operation, especially during sleep modes
- **USB Type-C Port**: For power supply and programming
- **Enclosure**: PLA 3D printed case that houses all components

The device uses a layered internal design that places the ePaper display at the front, with the driver board, battery, and XIAO ESP32-C3 stacked behind it within the enclosure.

## Getting Started

To get started with your XIAO 7.5" ePaper Panel:

1. **Open the Stand**: Gently lift the screen using the notch at the bottom to reveal the built-in stand. Place the device on a flat surface with the stand extended.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/206.gif" style={{width:500, height:'auto'}}/></div>

2. **Power On**: With the display facing you, locate the power switch at the bottom left corner. Slide it to the "ON" position (the ON label is hidden behind the stand, on your right side when facing the display).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/205.jpg" style={{width:600, height:'auto'}}/></div>

3. **Initial Boot**: Once powered on, the device will automatically begin displaying a sequence of three introduction pages to demonstrate its functionality.

After completing these steps, your ePaper Panel will be ready for configuration and use with your preferred programming platform.

### Programming Buttons

The XIAO 7.5" ePaper Panel includes two essential buttons located behind the stand that help with programming and troubleshooting:

- **Boot Button**: Used when the device has no serial connection or is in sleep mode and cannot upload programs. To enter Bootloader mode:
  1. Connect the USB cable
  2. Press and hold the Boot button
  3. Press the Reset button once while holding Boot
  4. Release Reset, then release Boot
  5. Unplug and replug the power cable

- **Reset Button**: Used to restart the program. Simply press once to reset.

These buttons are critical for device programming, firmware updates, and recovery when the device becomes unresponsive.

## Wiki Center

The following Wiki pages provide detailed information about different ways to program and use your XIAO 7.5" ePaper Panel:

- [**Works with ESPHome in Home Assistant**](https://wiki.seeedstudio.com/xiao_075inch_epaper_panel_esphome) - Configure and control your ePaper Panel through ESPHome integration, ideal for Home Assistant users to create custom dashboards.

- [**Works with Arduino**](https://wiki.seeedstudio.com/xiao_075inch_epaper_panel_arduino/) - Program your device using Arduino IDE with our library and examples for custom applications.

- [**Works with TRMNL**](https://wiki.seeedstudio.com/xiao_7_5_inch_epaper_panel_with_trmnl) - Control your display with trmnl, an open-source platform for smart visual dashboard management.

## Resources

- **[STP]**: [3D Model enclosure](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/3D_model.zip)
- **[PDF]**: [ePaper Driver Board SCH PDF](https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/ePaper_Driver_Board.pdf)
- **[BAMBU]** [Jonathan Thomson - XIAO 7.5" ePaper Panel Wall Mount](https://makerworld.com/en/models/1487711-seeed-studio-xiao-7-5-epaper-panel-wall-mount#profileId-1554538)

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
