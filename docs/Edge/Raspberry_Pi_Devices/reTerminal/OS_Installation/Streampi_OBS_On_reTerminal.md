---
description:  Stream-pi & OBS studio for reTerminal
title:  Stream-pi & OBS studio for reTerminal
keywords:
  - Edge
  - reTerminal OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Streampi_OBS_On_reTerminal
last_update:
  date: 2/1/2023
  author: jianjing Huang
---


# Seeed reTerminal with streampi for OBS Studio control and convenience control

## Introduction

### What's reTerminal 🤔

The [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) is a Raspberry Pi all-in-one board, powered by Raspberry Pi Compute Module 4(CM4) module, integrated with one IPS panel type multi-touch screen, carried with dual-band 2.4GHz/5GHz Wi-Fi & Bluetooth 5.0, pre-installed Raspberry Pi-based Linux system, provided storage 4 GB RAM and 32 GB eMMC. By designing in modularization, the board is equipped with multiple accessible components and high-speed connectors. It can be neatly inputted home assistance and individual AI development applications, also performing industrial-level functions suitable for being an industrial facility.

Features

- Raspberry Pi All in One Board: Powered by RPi CM4 32GB, integrated with IPS multi-touch screen, dual-band Wi-Fi & Bluetooth, pre-installed compatible Linux system

- Modular Design: Featuring industrial high-speed expansion interface and 40-Pin Raspberry Pi compatible header

- Rich Interfaces & Components: Equipped USB Type-A ports, Gigabit Ethernet, micro-HDMI, micro-SD card slot, MIPI camera interface, light sensor, accelerometer, buzzer, RTC and programmable buttons

- Neat Personal Assistance: Enjoy yourself in multiple interested Dashboard or AI projects by Seeed and communities while utilizing built-in sensors and components

- Great Industrial Facility: Benefit from stable Raspberry Pi-based operating system, multiple expanded industrial-level connectors, cryptographic co-processor, and official Seeed expansion board reTerminal E10-1

### What's streampi 🤔

Stream-Pi is A Robust Macro Keyboard Software for artists, creators, gamers, and geeks.

Stream-Pi exists as a proper open-source alternative as it offers a rich Theme System, that users can use to personalize every crook and nook of the UI System with CSS.

Stream-Pi also offers a rich API, that developers can use to write their own custom plug-ins – just like some paid and proprietary options currently available. The big difference here is that Stream-Pi is completely Free and open source!

### What's OBS Studio 🤔

OBS Studio is a free and open-source app for screencasting and live streaming. Written in C/C++ and built with Qt, OBS Studio provides real-time capture, scene composition, recording, encoding, and broadcasting via the Real Time Messaging Protocol (RTMP). It can stream videos to any RTMP-supporting destination, including YouTube, Twitch, Instagram and Facebook.

### The reasons why we do this 🤨

We have found that the reterminal's built-in display, excellent performance and support for the Raspberry Pi-related ecosystem make it easy to implement intelligent and convenient controls as a productivity tool.

So, follow us and try it out! 😊

## Installation 🐱‍🚀

- Hardware preparation
  - reTerminal
  - PC

In order to stabilise our tutorial is based on ubuntu 18.04 , also available for other systems, such as windows mac and other linux distributions.

### Install OBS studio ⌛

There are two ways to do this, using a pre-built package or compiling it yourself, the **recommended way is to use a pre-built package** which is tested and always available. If you want to try out the latest features, you can follow the official obs compilation process, however, may have some unforeseen problems due to dependencies on a large number of packages.

#### Using pre-compiled packages

```bash
sudo apt update 
sudo apt install wget git 
```

```bash
wget https://github.com/obsproject/obs-studio/releases/download/27.2.4/obs-studio_27.2.4-0obsproject1.bionic_amd64.deb
sudo apt install ./obs-studio_27.2.4-0obsproject1.bionic_amd64.deb
sudo apt install -f
```

#### Custom OBS

```bash
sudo apt install build-essential checkinstall cmake git libmbedtls-dev libasound2-dev libavcodec-dev libavdevice-dev libavfilter-dev libavformat-dev libavutil-dev libcurl4-openssl-dev libfontconfig1-dev libfreetype6-dev libgl1-mesa-dev libjack-jackd2-dev libjansson-dev libluajit-5.1-dev libpulse-dev libqt5x11extras5-dev libspeexdsp-dev libswresample-dev libswscale-dev libudev-dev libv4l-dev libvlc-dev libx11-dev libx11-xcb1 libx11-xcb-dev libxcb-xinput0 libxcb-xinput-dev libxcb-randr0 libxcb-randr0-dev libxcb-xfixes0 libxcb-xfixes0-dev libx264-dev libxcb-shm0-dev libxcb-xinerama0-dev libxcomposite-dev libxinerama-dev pkg-config python3-dev qtbase5-dev libqt5svg5-dev swig libwayland-dev qtbase5-private-dev libpci-dev
```

```bash
git clone https://github.com/obsproject/obs-studio.git -b release/27.2 obs_27.2
cd obs-studio
git submodule update --init --recursive
```

```bash
mkdir build
cd build
cmake -DBUILD_BROWSER=OFF ..
```

### Install websocket plugin for OBS studio

```bash
wget https://github.com/obsproject/obs-websocket/releases/download/4.9.0/obs-websocket_4.9.0-1_amd64.deb
```

```bash
sudo apt update 
sudo apt install ./obs-websocket_4.9.0-1_amd64.deb
sudo apt install -f
```

### Installing the stream pi server (here on the PC)

[Recommended Versions](https://github.com/stream-pi/server/releases/tag/2.0.0-SNAPSHOT)

```bash
wget https://github.com/stream-pi/server/releases/download/2.0.0-SNAPSHOT/stream-pi-server-linux-x64-2.0.0-SNAPSHOT.deb
```

```bash
sudo apt install ./stream-pi-server-linux-x64-2.0.0-SNAPSHOT.deb
```

### Installing the stream pi client (here on reTerminal)

[Recommended Versions](https://github.com/stream-pi/client/releases/tag/2.0.0-SNAPSHOT)

```bash
wget https://github.com/stream-pi/server/releases/download/2.0.0-SNAPSHOT/stream-pi-server-linux-aarch64-2.0.0-SNAPSHOT-executable.zip
```

```bash
mkdir Stream_pi_client 
unzip stream-pi-server-linux-aarch64-2.0.0-SNAPSHOT-executable.zip -d Stream_pi_client
```

## streampi client-server interaction

### Launch services

On our reTerminal

```bash
cd Stream_pi_client
./run_desktop
```

On our PC (Ubuntu)

Just click on the icon

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/01.jpg"/></div>

### Define the function 😏

1. Open streampi server

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/02.jpg"/></div>

2. Click  file -> setting -> general

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/03.jpg"/></div>

3. Set the streampi server address, box size and click save

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/04.jpg"/></div>

4. Connecting to obs services

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/06.jpg"/></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/05.jpg"/></div>

5. On the reterminal client configure the server address as the ip address of the pc and click save and connect.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/09.jpg"/></div>

6. Go back to the streampi server and drag the corresponding tab into the corresponding box to achieve the corresponding function

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/07.jpg"/></div>

7. We can also write commands directly to implement program calls, change display icons, change display names, box sizes and achieve more

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/11.jpg"/></div>

8. Adding a screen view and corresponding image source to the obs studio software

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/08.jpg"/></div>

9. Finally we can click on the reterminal to complete the corresponding control 👍👍👍

    - This is the interface we have on ReTerminal

    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/10.jpg"/></div>

    - This is the interface we have on PC

    <div align="center"><video width={500} controls><source src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/demo.mkv"/></video></div>

    - Appearance of reTerminal

    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/12.jpg"/></div>

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
