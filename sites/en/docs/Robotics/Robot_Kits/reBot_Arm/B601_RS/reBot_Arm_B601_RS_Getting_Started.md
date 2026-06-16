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
  date: 2026-05-26
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-06-16'
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
The content of this guide is racing towards you at the speed of light — stay tuned.

## Step 1: Assembly Guide

- Before assembly, please read the following instructions carefully. To ensure a smooth assembly process and a complete hands-on experience, please be patient, stay focused, and always follow these key points:
  1. This kit includes numerous screws and structural parts, some of which look similar. Please carefully verify the screw specifications and part models, and confirm the installation orientation before fastening.
  2. The video was recorded in early April. There may be minor adjustments to parts later, but this does not affect the assembly quality when following the video. The final parts are subject to what is shipped.
  3. For ease of screw installation and removal, the open-source BOM specifies standard screws. However, the screws shipped with the kit have thread-lock applied. You may also use your own preferred tools or an electric screwdriver (highly recommended to have one ready). If using an electric tool, be sure to set the torque to a low-to-medium level (3–6 kgf·cm) to avoid excessive torque that could strip the screws, causing irreversible damage where parts cannot be removed. If there is any sign of stripping, immediately replace the screw or realign and retry. Stripped thread-lock screws cannot be removed with a screw extractor and will scrap the entire part. Therefore, please proceed with caution.
  4. Please prioritize safety during assembly to avoid pinched fingers or crush injuries. Children should complete this project with the accompaniment of a parent or guardian.




## Step 2: Calibrate the Robotic Arm and Get Started

1. Explore our **MotorBridge** platform. This platform is a one-stop comprehensive solution that supports continuous expansion of motor types, covering [Damiao motors](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html), [Robstride motors](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html), [Hightorque motors](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html), [Myactuator motors](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html), Hexfellow, and more. It is also compatible with continuously updated robotic arm products like reBot. The platform is user-friendly for beginners and also provides a Python SDK with fully consistent functionality for developers.

2. Experience the new features and details of MotorBridge specifically adapted for the reBot robotic arm, including one-click zero-point calibration, parameter writing, drag-and-drop motor control via the UI, and a built-in model visualization interface.

3. This tool is fully compatible with **Windows, Ubuntu, and macOS** operating systems.

:::tip
1. It is highly recommended not to use a virtual machine. Virtual machines are prone to environment issues.

2. (Beta version) Let an agent help you initialize the robotic arm. Copy the following content and send it to the agent:

```text
Please follow the process in AGENTS.md (https://github.com/Welt-liu/reBot-B601-Agent-Guide/blob/main/en/AGENTS.md) to help the user complete the initialization of a new robotic arm.
```

  Note: If you purchased a pre-assembled kit, please tell the agent during the motor ID writing step: "I purchased a pre-assembled kit, please scan motors 1–7 to verify they are all online, do not rewrite the motor IDs."

3. The agent uses CLI commands to complete motor ID writing, while the wiki uses a web UI interaction method. Both approaches work.

:::

You should have completed the preliminary preparation for the robotic arm assembly by following the video. Next, we will introduce how to write motor IDs and calibrate the robotic arm.



### 1. Install Miniforge (Recommended) (Supports Windows\Ubuntu\macOS\Jetson\Raspberry Pi)

1. Install Miniforge and create a virtual environment to avoid conflicts with other environment packages that could cause demo failures.

Ubuntu\macOS\Jetson\Raspberry Pi:

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

or Windows:

Open the Miniforge Release page in your browser, find the latest version of `Miniforge3-Windows-x86_64.exe` and click to download:

```text
https://github.com/conda-forge/miniforge/releases
```

2. Create a Python 3.12 virtual environment:

:::tip
  **Git Bash users**: If the `conda` command is not found, it means Git Bash has not loaded the conda environment. You need to initialize it first:

  ```bash
  # Temporary (current terminal only), replace <install_path> with the actual path
  source <install_path>/etc/profile.d/conda.sh

  # Permanent (write to bashrc, run once)
  echo 'source <install_path>/etc/profile.d/conda.sh' >> ~/.bashrc
  source ~/.bashrc
  ```

  To let PowerShell automatically activate the conda environment:

  ```bash
  conda init powershell
  ```

:::

```bash
conda create -y -n rebot python=3.12
```

3. Activate the virtual environment. **You need to re-run this activation command every time you open a terminal to use reBot-related features**:

```bash
conda activate rebot
```

### 2. Install Motorbridge

After activating the reBot virtual environment, run the following command to install motorbridge:

:::tip Note for macOS users
If you experience low frame rates during teleoperation on macOS, it may be caused by an outdated WCH CH34x driver version. For **macOS 10.14 and later**, the system includes a built-in `AppleUSBCHC0M` driver. You can uninstall the old driver and switch to the macOS built-in driver, which should effectively improve frame rates.
:::


```bash
pip install motorbridge
```

### 3. PCAN-USB

Get the PCAN-USB device working on the CAN bus at 1Mbps for robotic arm communication.

Ubuntu\macOS\Jetson\Raspberry Pi:

```bash
# The kit includes PCAN-USB, which should normally show up as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
```

Windows users, please visit [pcan-usb](https://www.peak-system.com/products/hardware/external-pc-interfaces/pcan-usb/) to install the PCAN-USB driver.

<!-- ### 3. Write Motor IDs

:::tip Pre-assembled kit users, please skip this step
:::

Use a screwdriver to disconnect all motor cables, then connect a single motor to the USB-to-CAN module.

Run the following command to scan whether the motor is detected. The factory ID may be 127.

```bash
motorbridge-cli scan --vendor robstride --channel can0 --start-id 126 --end-id 127 --timeout-ms 300
```

After confirming the motor's current ID, run the modification command (note: do not connect multiple motors at the same time, as this will cause all of them to be overwritten):

```bash
# Example: Change ID 127 to 5
motorbridge-cli id-set --vendor robstride --channel can0 --motor-id 127 --new-motor-id 5
```

Repeat the above steps until all motor IDs have been successfully written. Then connect all motor cables and run the following command to make a final confirmation. If 7 motors are detected, you are done.

```bash
motorbridge-cli scan --vendor robstride --channel can0 --start-id 1 --end-id 7 --timeout-ms 300
``` -->


### 4. Start MotorBridge-gateway to Write Zero Points and Debug

#### Before Motor Reset

Before motor parameter configuration, please note the following preparations and safety rules:

- Prepare 2 tooling clamps (size ≥3 inches) and a 48V XT30-output switching power supply (please choose a reputable brand; do not use inferior power supplies).
- During debugging and operation, maintain a safe distance of at least 1 meter.
- Do not hot-plug motors; disconnect the power supply before plugging/unplugging the XT30 2+2 connector.
- Do not overload or overspeed the motors; check wiring and fasteners before startup; do not use in humid, high-temperature, or dusty environments.
- Set reasonable program parameters and emergency stop function to prevent equipment runaway.
- **Please strictly follow the above rules. The seller is not liable for any risks and losses caused by non-compliant operations or human errors.**


#### Web UI Zero Point Writing and Debugging

Open the address [motorbridge-studio](https://motorbridge.github.io/motorbridge-studio/) in your browser, click the Help option, copy the corresponding command based on your operating system and driver board, verify the IP address and port number, then press Enter in the terminal to run it.


```bash
motorbridge-gateway --bind 127.0.0.1:9002  
```


Please refer to the video for usage. Before operating the robotic arm, you need to reset the zero point again.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/WcjDPm8GUDM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
