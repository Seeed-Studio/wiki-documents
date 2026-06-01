---
description: This guide will help you get started with the reBot Arm B601-DM, including purchasing options, assembly, calibration, and software configuration.
title: reBot Arm B601-DM Quick Start
keywords:
  - reBot
  - B601-DM
  - Robotic Arm
  - Robot
  - Lerobot
  - Pinocchio
  - 6 DOF
slug: /rebot_b601_dm_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-04-13T00:00:00.000Z
  author: LiuJunjie
createdAt: '2026-04-13'
updatedAt: '2026-05-22'
url: https://wiki.seeedstudio.com/rebot_b601_dm_getting_started/
---

# Getting Started with reBot Arm B601-DM

![traj_sim_geodesic](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/dm_pinocchio_mashcat/v2.0.png)

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

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

The content of this guide is racing towards you at the speed of light — stay tuned!

The reBot Arm project has been open-sourced on [GitHub](https://github.com/Seeed-Projects/reBot-DevArm). This guide will take you through the quick start of B601-DM, from assembly to operation.

:::tip
If you purchased a pre-assembled kit, please skip directly to the tutorial video in **Step 3** at the end of this article and follow along. There is no need to write motor IDs or calibrate zero positions.
:::

## Purchasing Options

The reBot Arm B601-DM is available in multiple configurations to meet different user needs.

### Options Comparison

| Configuration | Body | Gripper | Motors | Structure | Purchase Link |
|:---|:---:|:---:|:---:|:---:|:---|
| **Complete Kit** | ✅ | ✅ | ✅ | ✅ | [Coming Soon](https://www.seeedstudio.com/) |
| **Gripper Only** | ❌ | ✅ | ❌ | ❌ | [Coming Soon](https://www.seeedstudio.com/) |
| **Body Only (Structure)** | ✅ | ❌ | ❌ | ✅ | [Coming Soon](https://www.seeedstudio.com/) |
| **Body Only (Motors)** | ✅ | ❌ | ✅ | ❌ | [Coming Soon](https://www.seeedstudio.com/) |

## Step 1: [Assembly Guide](https://youtu.be/rfTQoFCfnMc)

Before Assembly:

- Please read the following instructions carefully to ensure a smooth assembly process.
  1. This kit includes various screws and parts with similar appearances. Verify specifications and orientation before fastening.
  2. The video was recorded in early April. Minor updates may exist, but assembly remains the same. Refer to shipped parts as final.
  3. Shipped screws have thread-lock applied. Use proper tools or an electric screwdriver (recommended). Set torque to (3–6 kgf·cm) to avoid stripping. If stripping occurs, stop immediately and replace or realign the screw. Stripped thread-lock screws are difficult to remove and may damage parts.
  4. Ensure safety during assembly. Avoid pinching or injury. Children must be supervised.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/rfTQoFCfnMc?si=KkEfY0NePxC96Xdu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Step 2: Reset Motors ID

### Before Reset Motors:
  
  Before motor parameter configuration, note the following preparations and safety rules:

- Buy 2 tooling clamps (≥3 inches) and a 24V 15A XT30-output switching power supply (use regular brand, no inferior products).
- Keep ≥1m distance during debugging/operation.
- No motor hot-plugging; cut off power before plugging/unplugging XT30 2+2 interface.
- Do not overload/overspeed; check wiring and fasteners before startup; avoid humid/high-temperature/dusty environments.
- Set reasonable program parameters and emergency stop to prevent out-of-control.
- **Strictly follow these rules. Seller is not liable for risks/liabilities from illegal operation or personal mistakes.**

### Preparation List

#### Hardware

- [reBot Arm B601 DM Robotic Arm × 1](https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html)
- [USB-CAN Adapter Board × 1](https://www.seeedstudio.com/DM-CAN-USB-Driver-Borad-p-6706.html)
- [Signal-Power Separation Board × 1](https://www.seeedstudio.com/XT30-2-2-Power-Separation-Board-p-6707.html)
- Woodworking Clamps × 2
- USB-C Cable × 1
- [24V 15A Power Supply (XT30 output) × 1](https://www.seeedstudio.com/AC-DC-Power-Adapter-IEC-60320-C14-XT30-Female-24V-4-5A-1200mm-L190-W92-5-H36mm-p-6764.html)
- [Power Cord-US](https://www.seeedstudio.com/reServer-AC-US-p-5052.html) \  [Power Cord-EU](https://www.seeedstudio.com/reServer-AC-EU-p-5051.html)

#### Computer Requirement

- Dual-boot personal computer (Windows + Ubuntu / macOS)

#### Software

- [DM_Tools_v.1.8.0.1.exe (Supports Windows Only)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe)

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/uXuzs1qmj6A?si=lfgXXlF1awhtnvaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Step 3: Calibration reBot Arm and Getting Started

We trust you have completed the robotic arm assembly, zero-point initialization, motor ID configuration, and other setup steps by following the video. You are now ready to officially explore the series of tutorials and tools we have released.

1. Explore our **MotorBridge** platform, an all-in-one solution supporting an expanding list of motors including [Damiao](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html), [Robstride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html), [Hightorque](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html), [Myactuator](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html), Hexfellow, and more. It is also compatible with continuously updated robotic arms such as reBot. Designed for beginners, we also offer a Python SDK that implements the same functionality for developers.

2. Experience new features and details of MotorBridge for the reBot robotic arm, including one-click zero-point setting, parameter writing, motor control via UI drag-and-drop, and a built-in model visualization interface.

3. This tool is fully compatible with **Windows, Ubuntu, and Mac** operating systems.

### Step 1: Install miniforge (on Windows\Ubuntu\Mac\Jetson\Pi)

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

### Step 2: Environment Setup

Create a virtual environment with Python 3.12:

```
conda create -y -n rebot python=3.12
```

Then activate your virtual environment, you have to do this each time you open a shell to use rebot:

```bash
conda activate rebot
```

### Step3: Install motorbridge

:::tip
If all scanned motors show offline, install motorbridge v0.2.9.
:::

After activating the reBot virtual environment, run the following command to install motorbridge:

```bash
pip install motorbridge
```

### Step4: Connect the rebot

After connecting the robotic arm to your computer through USB cable and turning on its power supply, you need to configure 666 access permissions for the serial port.

```bash
sudo chmod 666 /dev/ttyACM*
```

### Step5: Open the motorbridge

Open `https://rebot-devarm.w0x7ce.eu/` in your browser, then click the help,Copy the command suitable for your system and driver board, check the IP and port, then press Enter in the terminal.

For example on Windows:

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --model 4340P --motor-id 0x01 --feedback-id 0x11 --dt-ms 20
```

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/motorbridge_help.png" />
  </div>

#### For subsequent operation steps, please refer to our tutorial video.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/SI1PRQYkhdg?si=E0m7uTF4IhCVZYl_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
