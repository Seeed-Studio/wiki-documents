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
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_b601_dm_getting_started
translation:
  skip: [zh-CN]
last_update:
  date: 2026-07-28
  author: LiuJunjie
createdAt: '2026-04-13'
updatedAt: '2026-08-19'
url: https://wiki.seeedstudio.com/rebot_b601_dm_getting_started/
---

import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

# Getting Started with reBot Arm B601-DM

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

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

The content of this guide is racing towards you at the speed of light — stay tuned!

The reBot Arm project has been open-sourced on [GitHub](https://github.com/Seeed-Projects/reBot-DevArm). This guide will take you through the quick start of B601-DM, from assembly to operation.

:::tip
If you purchased a pre-assembled kit, please skip directly to the tutorial video in **Step 3** at the end of this article and follow along. There is no need to write motor IDs or calibrate zero positions.

It has been verified that virtual machine performance is insufficient for running demos and there are configuration issues. It is recommended to use an Ubuntu physical machine to control the robotic arm.
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


## Safety Disclaimer and Risk Notice

<div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "16px" }}>
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" />
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" />
</div>

## About Power Supply

1. The robotic arm is not shipped with a power supply / does not include a power supply by default. You can connect a battery yourself, or purchase our open-source [24V 14.6A MeanWell Power Supply](https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-DM-p-6874.html) or [Amazon](https://www.amazon.com/MEAN-WELL-LRS-350-24-350-4W-Switchable/dp/B013ETVO12/ref=sr_1_1?crid=36B2HIB8MM2IT&dib=eyJ2IjoiMSJ9.vpZwmjb4m5KMNcsg2Kb7wr8DDWa-ryUqO5fConlxqlsGoTVB5HN2uBBnRNZI0kcACiaR5DKFiYWvIHLEUN3luZqJAzogeQkeT-fol0m835-oBBWSud1ixkGayrl5nRsF5KMgfvkwAIW949dTTpU2CWdNMrf8g43_vKWaytfX9SHeMJ1hmhS6Kab6fBgER6CgB47K_eEmoJj3KhrjJMtn980osDG-bCLniBcRAHThmXsVRVdpGPsmckGLLyaXrIGRG9plhKI-F7H8hfqW7vzGbwIV_bF8cFtRjdRm5Shtb0o.ekLYD0hsc1Uzji4qKl0Q0USpDTr92JEMQobBXl9lYD0&dib_tag=se&keywords=LRS-350-24&qid=1780021690&s=industrial&sprefix=lrs-350-24%2Cindustrial%2C696&sr=1-1&th=1), Please do not purchase power supplies from unbranded manufacturers or unsafe channels. Any risks or consequences arising therefrom shall be borne by the individual.

If your household voltage is 220V, set the voltage selector switch on the side of the power supply to 230V. If your household voltage is 110V, switch it to 115V.

| **220V** | **110V** |
|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" width="300" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" width="300" /> |

   <div align="center">
     <img width={800}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100029903-gallery-6_1.jpg" />
   </div>

2. Alternatively, you can choose our open-source 24V 14.6A MeanWell power supply enclosure for self-assembly. The text instructions and BOM are open-sourced in the [GitHub repository](https://github.com/LAN-GER/reBot-DevArm/tree/main/hardware/reBot_B601_DM) (recommended only for developers with relevant power supply assembly experience).

   Assembly reference video:

   <div class="video-container">
     <iframe width="900" height="600" src="https://www.youtube.com/embed/DHFA2UfQzUo?si=GYy-Z38qTUW6KPqq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>



## Step 1: [Assembly Guide](https://youtu.be/rfTQoFCfnMc)

Before Assembly:

- Please read the following instructions carefully to ensure a smooth assembly process.
  1. This kit includes various screws and parts with similar appearances. Verify specifications and orientation before fastening.
  2. The video was recorded in early April. Minor updates may exist, but assembly remains the same. Refer to shipped parts as final.
  3. Shipped screws have thread-lock applied. Use proper tools or an electric screwdriver (recommended). Set torque to (3–6 kgf·cm) to avoid stripping. If stripping occurs, stop immediately and replace or realign the screw. Stripped thread-lock screws are difficult to remove and may damage parts.
  4. Ensure safety during assembly. Avoid pinching or injury. Children must be supervised.

  :::tip
  Reminder: The D4 * 7 between motor 5 and motor 6 in the assembly video does not need to be installed. It's a mistake in the video. If you bought the DIY version of the reBot Arm B601-DM, the 7 D4 * 7 screws are enough for you to complete the assembly.
  :::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/rfTQoFCfnMc?si=KkEfY0NePxC96Xdu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Wiring tutorial video:

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/vVxCOfu5ZCE" title="reBot-B601-DM Wiring" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Step 2: Reset Motors ID

:::tip
When assembling the robotic arm, do not forget to connect the cable harness between Motor 1 and Motor 2. The exact position is highlighted in the image below. Before switching the 3-pin cable connection, make sure the current motor is disabled and the power is disconnected to avoid hot-plugging or incorrect operation that may cause abnormal motor parameters.

<div align="center">
    <img width={200}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1to2_ID_set.jpg" />
</div>
:::

### AI AGENT

:::tip
This section is in beta. Please observe safety precautions during use. If AI suggestions differ from this documentation, follow this guide and seek assistance from our engineers.
:::

Let an AI AGENT assist you through this process. Copy the prompt below to your AI assistant:

```text

Please follow the workflow in AGENTS.md (https://github.com/Welt-liu/reBot-B601-RS-Skills/blob/main/en/AGENTS.md) to help me initialize the robotic arm.

```

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

- [Software Download Link](https://github.com/dmBots/motor-debugging-tool)


#### Write Motor ID and Test Enable

Set the CAN ID and Master ID for each joint motor according to the parameters in the table below:

| Motor Number | CAN ID | Master ID |
|:---:|:---:|:---:|
| Motor 1 | 0x01 | 0x11 |
| Motor 2 | 0x02 | 0x12 |
| Motor 3 | 0x03 | 0x13 |
| Motor 4 | 0x04 | 0x14 |
| Motor 5 | 0x05 | 0x15 |
| Motor 6 | 0x06 | 0x16 |
| Motor 7 | 0x07 | 0x17 |

:::danger
The following is an operation example using Motor 1. Please ensure that the CAN ID and Master ID for each joint motor are set correctly according to the table above.
:::
1.Open the **DM_Tools** host software, select the corresponding USB COM port, and set the baud rate to `921600`. Once connected successfully, information will be printed in the `Serial` interface.

<div align="center">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_damiao_tool_en.png" width="800" />
</div>

2.Use the 3-pin cable to connect Motor 1 to the USB-CAN adapter board.

3.After connection, enter the `Parameter Settings` interface. Click `Read Parameters` to retrieve the current parameters, then set the `CAN ID` to `0x01` and the `Master ID` to `0x11`.

4.After setting, click `Write Parameters` to save the parameters.

<div align="center">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_damiao_tool_en.png" width="800" />
</div>

:::tip
The USB mode in the orange box on the left represents the method used when reading and writing motor parameters on the current settings page.
:::

5.Navigate to the `Debug` interface. After ensuring the `CAN ID` and `Master ID` are set correctly, click `Enable`. The motor indicator light will turn solid green, indicating the motor is enabled. Motor 1 testing is now complete.

<div align="center">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_damiao_tool_en.png" width="800" />
</div>

:::tip
After testing, remember to click `Disable` to exit the enabled state.
:::

**3-pin Cable Connection Points and Enable Effect for Each Motor**

| Motor 1 Setup | Motor 2 Setup | Motor 3 Setup | Motor 4 Setup | Motor 5 Setup | Motor 6 Setup | Motor 7 Setup |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_ID_set.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_ID_set.jpg" width="120" /> |

| Motor 1 Enabled | Motor 2 Enabled | Motor 3 Enabled | Motor 4 Enabled | Motor 5 Enabled | Motor 6 Enabled | Motor 7 Enabled |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_Enable.jpg" width="120" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_Enable2.jpg" width="120" /> |

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/uXuzs1qmj6A?si=lfgXXlF1awhtnvaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Step 3: Calibration reBot Arm and Getting Started

We trust you have completed the robotic arm assembly, zero-point initialization, motor ID configuration, and other setup steps by following the video. You are now ready to officially explore the series of tutorials and tools we have released.


Please refer to the video and text tutorial. Before controlling the robotic arm, you need to reset the zero point again.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/SI1PRQYkhdg?si=E0m7uTF4IhCVZYl_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

1. Explore our **MotorBridge** platform, an all-in-one solution supporting an expanding list of motors including [Damiao](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html), [Robstride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html), [Hightorque](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html), [Myactuator](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html), Hexfellow, and more. It is also compatible with continuously updated robotic arms such as reBot. Designed for beginners, we also offer a Python SDK that implements the same functionality for developers.

2. Experience new features and details of MotorBridge for the reBot robotic arm, including one-click zero-point setting, parameter writing, motor control via UI drag-and-drop, and a built-in model visualization interface.

3. This tool is fully compatible with **Windows, Ubuntu, and Mac** operating systems.

### Step 1: Install Miniforge (on Windows\Ubuntu\macOS\Jetson\Pi)

Install Miniforge and create a virtual environment to avoid interference from other environment packages.

Ubuntu\Jetson\Pi:

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

or macOS:
```bash
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
bash Miniforge3-MacOSX-$(uname -m).sh
```

or Windows:

Open the Miniforge Release page in your browser, find the latest `Miniforge3-Windows-x86_64.exe` and download it:

```text
https://github.com/conda-forge/miniforge/releases
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

**Note for macOS users:**
If you experience low frame rates during teleoperation on macOS, it may be caused by an outdated WCH CH34x driver. For **macOS 10.14 and later**, the system includes a built-in `AppleUSBCHC0M` driver. You can uninstall the old driver and switch to the macOS built-in driver, which should effectively improve frame rates.

:::

After activating the reBot virtual environment, run the following command to install motorbridge:

```bash
pip install motorbridge
```

###  Step4: Connect the rebot
After connecting the robotic arm to your computer through USB cable and turning on its power supply, you need to configure 666 access permissions for the serial port.(Windows systems do not require permission configuration; you may skip this step.)

```bash
sudo chmod 666 /dev/ttyACM*
```

### Step5: Open the motorbridge

Open `https://motorbridge.github.io/motorbridge-studio/` in your browser, then click the help,Copy the command suitable for your system and driver board, check the IP and port, then press Enter in the terminal.

For example on Windows:

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --model 4340P --motor-id 0x01 --feedback-id 0x11 --dt-ms 20
```

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/motorbridge_help.png" />
  </div>

## FAQ
### 1. Loud abnormal noise occurs immediately after motor startup
- This issue usually happens when parameter calibration is accidentally triggered during ID configuration, which overwrites factory preset parameters such as motor inertia. Use **DM_Tools_v.1.8.0.1.exe (Windows-only)** available at:
https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe
Export complete parameters from an intact motor of the same model via the host software, import these parameters into the faulty unit, update its corresponding CAN ID, save the written parameters, then proceed with zero-point calibration.

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/csbd_en.png" />
</div>

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/fix_param_en.png" />
</div>

[DM4310 Default Parameters](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4310_Default_Parameters.txt)
[DM4340P Default Parameters](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4340P_Default_Parameters.txt)

### 2. All motors share identical CAN IDs
- When performing zero-point calibration via **DM_Tools_v.1.8.0.1.exe (Windows-only)**, avoid clicking the Read or Set buttons next to the CAN ID field. The debug interface communicates over the CAN bus; clicking Set will unify the CAN ID for every motor connected on the CANBUS.
