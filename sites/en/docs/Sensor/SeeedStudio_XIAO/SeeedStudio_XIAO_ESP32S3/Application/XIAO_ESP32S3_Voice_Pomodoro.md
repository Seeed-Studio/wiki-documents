---
description: Build a compact, CircuitPython-powered Pomodoro timer using voice commands and Seeed Studio XIAO ESP32S3 Sense with a round LCD display.
title: Build a Voice-Activated Pomodoro Timer with XIAO ESP32S3 and CircuitPython
keywords:
  - XIAO
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /xiao_esp32s3_voice_pomodoro
last_update:
  date: 04/17/2025
  author: Peter Machona
---

# AskLou.io Pomodoro Timer

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32s3_sense_pomodoro_timer/AskLou_01.png" style={{width:800, height:'auto'}}/></div>

> A voice-controlled Pomodoro timer built with the Seeed Studio XIAO ESP32S3 Sense and Round Display for XIAO. Stay productive with hands-free time management!

## Project Overview

The AskLou.io Pomodoro Timer is a compact, voice-activated productivity tool that helps you implement the popular Pomodoro Technique for time management. Using simple voice commands, you can start work sessions, take breaks, and manage your productivity without touching your computer or phone.

## Why AskLou.io Pomodoro Timer?

Traditional Pomodoro timers require manual interaction, breaking your flow and concentration. AskLou.io solves this problem with voice commands, allowing you to manage your time without lifting a finger. The elegant circular display provides at-a-glance status of your current session, helping you stay focused and productive.

## Features

- **Voice Control**: Start and pause your timer with simple voice commands
- **Multiple Session Types**: Standard work sessions (25 min), short breaks (5 min), and long breaks (15 min)
- **Visual Progress Tracking**: Intuitive circular progress indicator shows remaining time
- **Distraction-Free**: No apps, no notifications, just focused productivity
- **Customizable**: Easy to modify session durations to match your personal workflow
- **Low Power**: Designed for all-day use at your desk
- **Standalone Operation**: No smartphone or computer required once set up

## Hardware

### Components Required

- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Sense-Pre-Soldered-p-6335.html)
- [Seeed Studio Round Display for XIAO (1.28" 240x240 GC9A01 LCD)](https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html)
- USB-C cable for power
- Optional: 3D printed case (files included in project)

### Why We Chose This Hardware

The XIAO ESP32S3 Sense includes an onboard microphone, making it perfect for voice control applications. Its compact form factor paired with the stunning round display creates an elegant desktop companion that doesn't distract from your workspace aesthetic.

## Build Process

### 1. Hardware Assembly

- Connect the Round Display to the XIAO ESP32S3 Sense board
- The display connects directly to the XIAO's pins - no soldering required!
- Optional: Install in 3D printed case for a finished look

### 2. Software Setup

**Set up CircuitPython**

- Download CircuitPython 8.x or newer from [CircuitPython.org](https://circuitpython.org/)
- Put your board in bootloader mode (double-click the reset button)
- Drag and drop the CircuitPython UF2 file onto the board's drive

**Install Required Libraries**

- Download these libraries from the [CircuitPython bundle](https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases):
  - adafruit_display_text
  - adafruit_display_shapes
  - gc9a01.mpy
  - analogio (for microphone functionality)
- Copy them to the lib folder on your CircuitPython device.

### 3. Code Deployment

Simply copy the code.py file from this [repository](https://github.com/AskLou-io/Pomodoro_Circuit_Python) to your CircuitPython device, and the timer will start running automatically!

## How It Works

- **Voice Detection**: The onboard microphone listens for sounds above a threshold
- **Command Simulation**: For the demo version, commands cycle through a preset list
- **Timer Logic**: Tracks work sessions, short breaks, and long breaks
- **Visual Feedback**: The circular display shows session type and remaining time
- **Progress Indicator**: An illuminated arc shows progress through the current session

The AskLou.io Pomodoro Timer responds to these voice commands:

- "Start timer" - Begin a 25-minute work session
- "Pause timer" - Pause the current session
- "Start short break" - Begin a 5-minute break
- "Start long break" - Begin a 15-minute break

## Customization Options

You can customize your AskLou.io Pomodoro Timer in several ways:

- **Session Durations**: Modify the session_durations dictionary to change work or break lengths
- **Voice Sensitivity**: Adjust the LOUD_THRESHOLD value based on your environment
- **Visual Theme**: Change the arc colors for different session types
- **Command Words**: Update the voice_commands list to use different phrases

## Future Enhancements

Potential improvements for future versions:

- Improved voice recognition for more reliable command detection
- Haptic or audio feedback when sessions end
- Connectivity with productivity apps for session logging
- Small speaker for audio notifications
- Battery power for portability

## Resources

- [GitHub Repository](https://github.com/AskLou-io/Pomodoro_Circuit_Python/blob/main/README.md)
- [Hackster.io Project](https://www.hackster.io/peter-machona/asklou-io-pomodoro-timer-a7a1f2)
- [XIAO ESP32S3 Documentation](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/)
- [Round Display Documentation](https://wiki.seeedstudio.com/get_start_round_display/)

## Credits

- Hardware platform by Seeed Studio
- Pomodoro technique by Francesco Cirillo
- [Project by Peter Machona](https://github.com/AskLou-io/Pomodoro_Circuit_Python)

## License

This project is released under the Creative Commons Attribution-NonCommercial (CC BY-NC) license. This means you are free to:

- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material

Under the following terms:

- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use.
- **NonCommercial** — You may not use the material for commercial purposes.

---

AskLou.io Pomodoro Timer - Focused productivity, just ask for it.

## ✨ Contributor Project

- This project is supported by the Seeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479).
- A special thanks to [Peter Machona](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=92639112&issue=Seeed-Studio%7Cwiki-documents%7C2074) for his dedicated efforts. Your work will be [exhibited](https://wiki.seeedstudio.com/contributors/).

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
