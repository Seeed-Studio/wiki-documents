---
description: This guide will help you get started with the reBot Arm B601-RS, including purchasing options, assembly, calibration, and software configuration.
title: reBot Arm B601-RS Quick Start
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Robotic Arm
  - Robot
  - Lerobot
  - Pinocchio
  - 6 DOF
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_b601_rs_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-05-26T00:00:00.000Z
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/rebot_b601_rs_getting_started/
---

# Getting Started with reBot Arm B601-RS

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" />
</div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>6-DOF Robotic Arm · Multi-Motor Support · Kinematics Solver · Trajectory Planning · Fully Open Source</strong>
</p>

The reBot Arm project has been open-sourced on [GitHub](https://github.com/Seeed-Projects/reBot-DevArm). This guide will take you through the quick start of B601-RS, from assembly to operation.

The content of this guide is racing towards you at the speed of light — stay tuned!

:::

## Purchasing Options


## Step 1: Assembly Guide

Before Assembly:

- Please read the following instructions carefully to ensure a smooth assembly process.
  1. This kit includes various screws and parts with similar appearances. Verify specifications and orientation before fastening.
  2. The video was recorded in early April. Minor updates may exist, but assembly remains the same. Refer to shipped parts as final.
  3. Shipped screws have thread-lock applied. Use proper tools or an electric screwdriver (recommended). Set torque to (3–6 kgf·cm) to avoid stripping. If stripping occurs, stop immediately and replace or realign the screw. Stripped thread-lock screws are difficult to remove and may damage parts.
  4. Ensure safety during assembly. Avoid pinching or injury. Children must be supervised.

## Step 2: Reset Motors ID

### Before Reset Motors:

Before motor parameter configuration, note the following preparations and safety rules:

- Buy 2 tooling clamps (≥3 inches) and a 48V XT30-output switching power supply (use regular brand, no inferior products).
- Keep ≥1m distance during debugging/operation.
- No motor hot-plugging; cut off power before plugging/unplugging XT30 2+2 interface.
- Do not overload/overspeed; check wiring and fasteners before startup; avoid humid/high-temperature/dusty environments.
- Set reasonable program parameters and emergency stop to prevent out-of-control.
- **Strictly follow these rules. Seller is not liable for risks/liabilities from illegal operation or personal mistakes.**

### Preparation List

#### Hardware

#### Computer Requirement

- Dual-boot personal computer (Windows + Ubuntu / macOS)

#### Software

## Step 3: Calibration reBot Arm and Getting Started

We trust you have completed the robotic arm assembly, zero-point initialization, motor ID configuration, and other setup steps by following the video. You are now ready to officially explore the series of tutorials and tools we have released.

1. Explore our **MotorBridge** platform, an all-in-one solution supporting an expanding list of motors including [Damiao](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html), [Robstride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html), [Hightorque](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html), [Myactuator](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html), Hexfellow, and more. It is also compatible with continuously updated robotic arms such as reBot. Designed for beginners, we also offer a Python SDK that implements the same functionality for developers.

2. Experience new features and details of MotorBridge for the reBot robotic arm, including one-click zero-point calibration, parameter writing, motor control via UI drag-and-drop, and a built-in model visualization interface.

3. This tool is fully compatible with **Windows, Ubuntu, and macOS** operating systems.

### Step 1: Install miniforge (on Windows\Ubuntu\macOS\Jetson\Pi)

This tutorial uses Ubuntu as an example.

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

### Step 2: Environment Setup

Create a virtual environment with Python 3.12:

```bash
conda create -y -n rebot python=3.12
```

Then activate your virtual environment. **You need to run this activation command every time you open a terminal to use reBot-related features**:

```bash
conda activate rebot
```

### Step 3: Install Motorbridge

:::tip Note for macOS users
If you experience low frame rates during teleoperation on macOS, it may be caused by an outdated WCH CH34x driver. For **macOS 10.14 and later**, the system includes a built-in `AppleUSBCHC0M` driver. You can uninstall the old driver and switch to the macOS built-in driver, which should effectively improve frame rates.
:::

After activating the reBot virtual environment, run the following command to install motorbridge:

```bash
pip install motorbridge
```

### Step 4: Connect the Robotic Arm

Get the PCAN-USB device working on the CAN bus at 1Mbps for robotic arm communication.

```bash
# The kit includes PCAN-USB, which should normally show up as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
```

### Step 5: Start MotorBridge-gateway

Optional (you can connect the robotic arm on the web to test the connection)

Open `https://motorbridge.github.io/motorbridge-studio/` in your browser, click the help option, copy the command corresponding to your operating system and driver board, check the IP address and port number, then press Enter in the terminal to run it.

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --transport socketcan --channel can0
```

Please refer to the video for usage.
