---
description: This wiki provides the assembly and debugging tutorial for the SO ARM100 and realizes data collection and training within the Lerobot framework. 
title: How to use the SO10xArm robotic arm in Lerobot
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_so100m
last_update:
  date: 12/24/2024
  author: ZhuYaoHui
---

# How to use the SO-ARM100 and SO-ARM101 robotic arm in Old Version Lerobot

:::tip
This tutorial repository maintains the verified stable release of Lerobot as of June 5, 2025. Currently, ​Hugging Face​ has rolled out a ​major upgrade​ to Lerobot, introducing many new features. If you want to experience the latest tutorials, please follow the [​official documentation​ for guidance](https://huggingface.co/docs/lerobot/index).
:::

## Introduction

The [SO-10xARM](https://github.com/TheRobotStudio/SO-ARM100) is a fully open-source robotic arm project launched by [TheRobotStudio](https://www.therobotstudio.com/). It includes the follower arm and the leader robotic arm, and also provides detailed 3D printing files and operation guides. [LeRobot](https://github.com/huggingface/lerobot/tree/main) is committed to providing models, datasets and tools for real-world robotics in PyTorch. Its aim is to reduce the entry barrier of robotics, enabling everyone to contribute and benefit from sharing datasets and pretrained models. LeRobot integrates cutting-edge methodologies validated for real-world application, centering on imitation learning. It has furnished a suite of pre-trained models, datasets featuring human-gathered demonstrations, and simulation environments, enabling users to commence without the necessity of robot assembly. In the forthcoming weeks, the intention is to augment support for real-world robotics on the most cost-effective and competent robots presently accessible.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/sD34HnAkGNc?si=hqKd_sH5Oc9sdcwd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Projects Introduction

The SO-ARM10x and reComputer Jetson AI intelligent robot kit seamlessly combine high-precision robotic arm control with a powerful AI computing platform, providing a comprehensive robot development solution. This kit is based on the Jetson Orin or AGX Orin platform, combined with the SO-ARM10x robotic arm and the LeRobot AI framework, offering users an intelligent robot system applicable to multiple scenarios such as education, research, and industrial automation.
This wiki provides the assembly and debugging tutorial for the SO ARM10x and realizes data collection and training within the Lerobot framework.

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.png" />
  </div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

## Main Features

1. **Open-source and low-cost**:  It is an open-source, low-cost robotic arm solution from [TheRobotStudio](https://github.com/TheRobotStudio/SO-ARM100)
2. **Integration with LeRobot**: Designed for integration with [LeRobot platform](https://github.com/huggingface/lerobot)
3. **Abundant learning resources**: Provides comprehensive open-source learning resources like assembly and calibration guides, and tutorials for testing, data collection, training and deployment to assist users in quickly getting started and developing robotic applications.
4. **Compatible with Nvidia**: Deploy this arm kit with reComputer Mini J4012 Orin NX 16 GB.
5. **Multi-Scene Application**: It is applicable to fields such as education, scientific research, automated production, and robotics, helping users achieve efficient and precise robot operations in various complex tasks.

## What's news：

- Wiring optimization: Compared to SO-ARM100, SO-ARM101 features improved wiring that prevents disconnection issues previously seen at joint 3. The new wiring design also no longer limits the range of motion of the joints.
- Different gear ratios for the leader arm: The leader arm now uses motors with optimized gear ratios, improving performance and eliminating the need for external gearboxes.
- New functionality support: The leader arm can now follow the follower arm in real-time, which is crucial for the upcoming learning policy, where a human can intervene and correct the robot’s actions.

:::caution

Seeed Studio is only responsible for the quality of the hardware itself. The tutorials are strictly updated in accordance with the official documentation. If you encounter software issues or environment dependency problems that cannot be resolved, in addition to checking the FAQ section at the end of this tutorial, please promptly report the issue to the [LeRobot platform](https://github.com/huggingface/lerobot) or the [LeRobot Discord channel](https://discord.gg/8TnwDdjFGU).

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/JrF_ymUvrqc?si=vslu5NNI-ZIzVXLc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Specification

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th colSpan="2">SO-ARM100</th>
      <th colSpan="2">SO-ARM101</th>
    </tr>
    <tr>
      <th></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">Arm Kit</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">Arm Kit Pro</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit.html" target="_blank">Arm Kit</a></th>
      <th><a href="https://www.seeedstudio.com/SO-ARM100-Low-Cost-AI-Arm-Kit-Pro-p-6343.html" target="_blank">Arm Kit Pro</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Leader Arm</td>
      <td rowSpan="2">12x ST-3215- C001 (7.4V) motors with 1:345 gear ratio for all joints</td>
      <td rowSpan="2">12x ST-3215-C018/ST-3215-C047 (12V) motors with 1:345 gear ratio for all joints</td>
      <td colSpan="2">
        1x ST-3215- C001 (7.4V) motor with 1:345 gear ratio for joint 2 only<br />
        2x ST-3215-C044 (7.4V) motors with 1:191 gear ratio for joints 1 and 3<br />
        3x ST-3215-C046 (7.4V) motors with 1:147 gear ratio for joints 4, 5, and gripper (joint 6)
      </td>
    </tr>
    <tr>
      <td>Follower Arm</td>
      <td colSpan="2">Same as SO-ARM100</td>
    </tr>
    <tr>
      <td>Power Supply</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>5.5 mm × 2.1 mm DC 12 V 2 A</td>
      <td>5.5 mm × 2.1 mm DC 5 V 4 A</td>
      <td>
        5.5 mm × 2.1 mm DC 12 V 2 A (Follower Arm)<br />
        5.5 mm × 2.1 mm DC 5 V 4 A (Leader Arm)
      </td>
    </tr>
    <tr>
      <td>Angle Sensor</td>
      <td colSpan="4">12-bit magnetic encoder</td>
    </tr>
    <tr>
      <td>Recommended Operating Temperature</td>
      <td colSpan="4">0 °C to 40 °C</td>
    </tr>
    <tr>
      <td>Communication</td>
      <td colSpan="4">UART</td>
    </tr>
    <tr>
      <td>Control Method</td>
      <td colSpan="4">PC</td>
    </tr>
  </tbody>
</table>

:::danger

If you purchase the Arm Kit version, both power supplies are 5V. If you purchase the Arm Kit Pro version, please use the 5V power supply for the calibration and every step of the Leader robotic arm, and the 12V power supply for the calibration and every step of the Follower robotic arm.

:::

## Bill of Materials(BOM)

| Part | Amount | Included|
|--|--|--|
|  Servo Motos | 12 | ✅ |
| Motor Control Board | 2 | ✅ |
| USB-C Cable 2 pcs | 1 | ✅ |
| Power Supply2 | 2 | ✅ |
| Table Clamp| 4 | ✅ |
| 3D printed parts of the arm | 1 | Option |

## Initial System Environment

**For Ubuntu x86:**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**For Jetson Orin:**

- Jetson JetPack 6.2  
- Python 3.10  
- Torch 2.6  

## Table of Contents

  [A. 3D Printing Guide](https://wiki.seeedstudio.com/lerobot_so100m/#install-lerobot)

  [B. Install LeRobot](https://wiki.seeedstudio.com/lerobot_so100m/#install-lerobot)

  [C. Configure the motors](https://wiki.seeedstudio.com/lerobot_so100m/#configure-the-motors)

  [D. Assembly](https://wiki.seeedstudio.com/lerobot_so100m/#assembly)

  [E. Calibrate](https://wiki.seeedstudio.com/lerobot_so100m/#calibrate)

  [F. Teleoperate](https://wiki.seeedstudio.com/lerobot_so100m/#teleoperate)

  [G. Add cameras](https://wiki.seeedstudio.com/lerobot_so100m/#add-cameras)

  [H. Record the dataset](https://wiki.seeedstudio.com/lerobot_so100m/#record-the-dataset)

  [I. Visualize the dataset](https://wiki.seeedstudio.com/lerobot_so100m/#visualize-the-dataset)

  [J. Replay an episode](https://wiki.seeedstudio.com/lerobot_so100m/#replay-an-episode)

  [K. Train a policy](https://wiki.seeedstudio.com/lerobot_so100m/#train-a-policy)

  [L. Evaluate your policy](https://wiki.seeedstudio.com/lerobot_so100m/#evaluate-your-policy)

## 3D Printing Guide

:::caution
Following the official update of SO101, SO100 will no longer support it and the source files will be deleted as per the official, but the source files can still be found in our [Makerworld](https://makerworld.com/zh/models/908660). However, for users who have previously purchased SO100, the tutorials and installation methods remain compatible. The print of SO101 is fully compatible with the motor kit installation of SO100.
:::

### Step 1: Choose a printer

The STL files provided are ready to print on many FDM printers. Below are the tested and suggested settings though others may work.

- Material: PLA+
- Nozzle Diameter and Precision: 0.4mm nozzle diameter at 0.2mm layer height or 0.6mm nozzle at 0.4mm layer height.
- Infill Density: 15%  

### Step 2: Set up the printer

- Ensure that the printer is calibrated and the bed level is correctly set using the printer specific instructions.
- Clean the print bed, making sure it is free from dust, or grease. If cleaning the bed using water, or other liquid, dry the bed.
- If your printer recommends it, use a standard glue stick and apply a thin, even layer of glue across the print area of the bed. Avoid clumping or uneven application.
- Load the printer filament using printer specific instructions.
- Ensure the printer settings match the ones suggested above (most printers have multiple settings so choose the ones that most closely match).
- Set for supports everywhere but ignore slopes greater than 45 degrees to the horizontal.
- There should be no supports in the screw holes with horizontal axes.

### Step 3: Print the parts

All the parts for the leader or follower are for easy 3D printing already contained in a single file, correctly orientated for z upwards to minimize supports.

- For printer bed sizes of 220mmx220mm (such as the Ender), print these files:
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Ender_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Ender_Leader_SO101.stl)

- For printer bed sizes of 205mm x 250mm (such as the Prusa/Up):
  - [Follower](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Follower/Prusa_Follower_SO101.stl)
  - [Leader](https://github.com/TheRobotStudio/SO-ARM100/blob/main/STL/SO101/Leader/Prusa_Leader_SO101.stl)

## Install LeRobot

Environments such as pytorch and torchvision need to be installed based on your CUDA.

1. Install Miniconda:
For Jetson:

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

Or, For X86 Ubuntu 22.04:

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. Create and activate a fresh conda environment for lerobot

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. Clone Lerobot:

```bash
git clone https://github.com/ZhuYaoHui1998/lerobot.git ~/lerobot
```

**We adapted the Orbbec Gemini2 depth camera and found that a single depth camera performs better than two RGB cameras. If you are also using this camera, please clone the conversion repository branch to Orbbec and follow our subsequent steps to configure the camera.**  

```bash  
cd ~/lerobot  
git checkout orbbec  
```  

**If you are only using RGB, do not switch branches, otherwise dependency-related errors may occur. If you have already switched to `orbbec` and want to revert to the original version:**  

```bash  
cd ~/lerobot  
git checkout main  
```

4. When using miniconda, install ffmpeg in your environment:

```bash
conda install ffmpeg -c conda-forge
```

:::tip
This usually installs ffmpeg 7.X for your platform compiled with the libsvtav1 encoder. If libsvtav1 is not supported (check supported encoders with ffmpeg -encoders), you can:

- [On any platform] Explicitly install ffmpeg 7.X using:

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [On Linux only] Install ffmpeg build dependencies and compile ffmpeg from source with libsvtav1, and make sure you use the corresponding ffmpeg binary to your install with which ffmpeg.

:::

5. Install LeRobot with dependencies for the feetech motors:

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

6. (This step can be skipped on the X86 Ubuntu computer side.) For Jetson Jetpack devices (please make sure to install [Pytorch-gpu and Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) from step 5 before executing this step):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

7. Check Pytorch and Torchvision

Since installing the lerobot environment via pip will uninstall the original Pytorch and Torchvision and install the CPU versions of Pytorch and Torchvision, you need to perform a check in Python.

```python
import torch
print(torch.cuda.is_available())
```

If the printed result is False, you need to reinstall Pytorch and Torchvision according to the [official website tutorial](https://pytorch.org/index.html).

If you are using a Jetson device, install Pytorch and Torchvision according to [this tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson).

## Configure the motors

:::danger  
Due to official code and servo manufacturer firmware updates, users before June 30, 2025, please download the [Feetech official host computer software](https://gitee.com/ftservo/fddebug/blob/master/FD1.9.8.5(250706).7z) (for Windows systems) first. Power on and connect all servos, select the corresponding `Port Number` -> `Baudrate 1000000` -> `Open` -> `Search`. After detecting all servos, click `Upgrade` -> `Online Detection` -> `Upgrade Firmware` to ensure the firmware version is updated from 3.9 to 3.10 to avoid subsequent issues.  
:::

:::note
If the servo cannot be recognized again after a failed firmware update, you can connect another detectable servo directly to the host computer, then perform a motor scan and firmware online detection. Keep the current window open, immediately disconnect the current servo, and connect the unrecognized servo instead. Click ​​"Online Upgrade"​​ within 1 second. If it fails, you can retry multiple times.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="SO101" label="SO101">

The servo calibration and initialization process for SO-ARM101 is the same as that of SO-ARM100 in terms of both method and code. However, please note that the gear ratios for the first three joints of the SO-ARM101 Leader Arm differ from those of SO-ARM100, so it’s important to distinguish and calibrate them carefully.

To configure the motors designate one bus servo adapter and 6 motors for your leader arm, and similarly the other bus servo adapter and 6 motors for the follower arm. It's convenient to label them and write on each motor if it's for the follower F or for the leader L and it's ID from 1 to 6. We use **F1–F6** to represent joints 1 to 6 of the **Follower Arm**, and **L1–L6** to represent joints 1 to 6 of the **Leader Arm**. The corresponding servo model, joint assignments, and gear ratio details are as follows:

| Servo Model                            | Gear Ratio | Corresponding Joints         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
You now should plug the 5V or 12V power supply to the motor bus. 5V for the STS3215 7.4V motors and 12V for the STS3215 12V motors. Note that the leader arm always uses the 7.4V motors, so watch out that you plug in the right power supply if you have 12V and 7.4V motors, otherwise you might burn your motors! Now, connect the motor bus to your computer via USB. Note that the USB doesn't provide any power, and both the power supply and USB have to be plugged in.
:::

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" />
</div>

**Find USB ports associated to your arms**
To find the correct ports for each arm, run the utility script twice:

```bash
python lerobot/scripts/find_motors_bus_port.py
```

Example output when identifying the leader arm's port (e.g., `/dev/tty.usbmodem575E0031751` on Mac, or possibly `/dev/ttyACM0` on Linux):

Example output when identifying the follower arm's port (e.g., `/dev/tty.usbmodem575E0032081`, or possibly `/dev/ttyACM1` on Linux):

Troubleshooting: On Linux, you might need to give access to the USB ports by running:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**Configure your motors**

:::danger
Please use a 5V power supply for calibrating Leader motors (ST-3215-C046, C044, 001).
:::

| **Leader Arm Joint 6 Calibration** | **Leader Arm Joint 5 Calibration** | **Leader Arm Joint 4 Calibration** | **Leader Arm Joint 3 Calibration** | **Leader Arm Joint 2 Calibration** | **Leader Arm Joint 1 Calibration** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

:::danger
If you buy the Arm Kit version (ST-3215-C001), use a 5V power supply. If you buy the Arm Kit Pro version, please use a 12V power supply to calibrate the servo (ST-3215-C047/ST-3215-C018).
:::

| **Follower Arm Joint 6 Calibration** | **Follower Arm Joint 5 Calibration** | **Follower Arm Joint 4 Calibration** | **Follower Arm Joint 3 Calibration** | **Follower Arm Joint 2 Calibration** | **Follower Arm Joint 1 Calibration** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |

You can also refer to our SO-ARM100 servo calibration video, but please make sure that the servo joint IDs and gear ratios strictly correspond to those of the SO-ARM101.

Plug your first motor and run this script to set its ID to 1. It will also set its present position to 2048, so expect your motor to rotate:

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 1
```

Note: These motors are currently limitated. They can take values between 0 and 4096 only, which corresponds to a full turn. They can't turn more than that. 2048 is at the middle of this range, so we can take -2048 steps (180 degrees anticlockwise) and reach the maximum range, or take +2048 steps (180 degrees clockwise) and reach the maximum range. The configuration step also sets the homing offset to 0, so that if you misassembled the arm, you can always update the homing offset to account for a shift up to ± 2048 steps (± 180 degrees).

Then unplug your motor and plug the second motor and set its ID to 2.

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 2
```

Redo the process for all your motors until ID 6. Do the same for the 6 motors of the leader arm.
</TabItem>

<TabItem value="SO100" label="SO100">

Designate one bus servo adapter and 6 motors for your leader arm, and similarly the other bus servo adapter and 6 motors for the follower arm. It's convenient to label them and write on each motor if it's for the follower F or for the leader L and it's ID from 1 to 6 (F1...F6 and L1...L6).

Follow steps 1 of the [assembly video](https://www.youtube.com/watch?v=FioA2oeFZ5I) which illustrates the use of our scripts below.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/FioA2oeFZ5I?si=GjudmAovwF_X5m2f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

**Find USB ports associated to your arms**
To find the correct ports for each arm, run the utility script twice:

```bash
python lerobot/scripts/find_motors_bus_port.py
```

Example output when identifying the leader arm's port (e.g., `/dev/tty.usbmodem575E0031751` on Mac, or possibly `/dev/ttyACM0` on Linux):

Example output when identifying the follower arm's port (e.g., `/dev/tty.usbmodem575E0032081`, or possibly `/dev/ttyACM1` on Linux):

Troubleshooting: On Linux, you might need to give access to the USB ports by running:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

**Configure your motors**

Plug your first motor and run this script to set its ID to 1. It will also set its present position to 2048, so expect your motor to rotate:

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 1
```

:::note
Note: These motors are currently limitated. They can take values between 0 and 4096 only, which corresponds to a full turn. They can't turn more than that. 2048 is at the middle of this range, so we can take -2048 steps (180 degrees anticlockwise) and reach the maximum range, or take +2048 steps (180 degrees clockwise) and reach the maximum range. The configuration step also sets the homing offset to 0, so that if you misassembled the arm, you can always update the homing offset to account for a shift up to ± 2048 steps (± 180 degrees).
:::

Then unplug your motor and plug the second motor and set its ID to 2.

```bash
python lerobot/scripts/configure_motor.py \
  --port /dev/ttyACM0 \
  --brand feetech \
  --model sts3215 \
  --baudrate 1000000 \
  --ID 2
```

Redo the process for all your motors until ID 6. Do the same for the 6 motors of the leader arm.
</TabItem>
</Tabs>

## Assembly

:::tip

- The dual-arm assembly process of SO-ARM101 is the same as that of SO-ARM100. The only differences are the addition of cable clips on SO-ARM101 and the different gear ratios of the joint servos on the Leader Arm. So both SO100 and SO101 can be installed by referring to the following content
- After calibrating the servos, do not rotate them before tightening the screws. Make sure the orientation of the 3D printed parts matches the reference direction in the images and that the motors are in their middle positions.

- Before assembly, please check your motor model and reduction ratio again. If you have purchased SO100, you can ignore this step. If you have purchased SO101, please check the following table to distinguish F1 to F6 and L1 to L6.

:::

  | Servo Model                            | Gear Ratio | Corresponding Joints         |
|----------------------------------------|------------|------------------------------|
| ST-3215-C044(7.4V)                            | 1:191      | L1                           |
| ST-3215-C001(7.4V)                       | 1:345      | L2                           |
| ST-3215-C044(7.4V)                           | 1:191      | L3                           |
| ST-3215-C046(7.4V)                           | 1:147      | L4–L6                        |
| ST-3215-C001(7.4V) / C018(12V) / C047(12V)             | 1:345      | F1–F6                        |

:::danger
If you purchased the **SO101 Arm Kit Standard Edition**, all power supplies are 5V. If you purchased the **SO101 Arm Kit Pro Edition**, the Leader Arm should be calibrated and operated at every step using a 5V power supply, while the Follower Arm should be calibrated and operated at every step using a 12V power supply.
:::

**Assemble Leader Arm**

| **Step 1** | **Step 2** | **Step 3** | **Step 4** | **Step 5** | **Step 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **Step 7** | **Step 8** | **Step 9** | **Step 10** | **Step 11** | **Step 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **Step 13** | **Step 14** | **Step 15** | **Step 16** | **Step 17** | **Step 18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **Step 19** | **Step 20** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

**Assemble Follower Arm**

:::tip

- The steps for assembling the Follower Arm are generally the same as those for the Leader Arm. The only difference lies in the installation method of the end-effector (gripper and handle) after Step 12.

:::

| **Step 1** | **Step 2** | **Step 3** | **Step 4** | **Step 5** | **Step 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **Step 7** | **Step 8** | **Step 9** | **Step 10** | **Step 11** | **Step 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) |![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **Step 13** | **Step 14** | **Step 15** | **Step 16** | **Step 17** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) |![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) |![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |

## Calibrate

:::tip
The SO100 and SO101 codes are compatible. Users of SO100 can directly utilize SO101's parameters and code for operation.
:::

:::danger
If you purchased the **SO101 Arm Kit Standard Edition**, all power supplies are 5V. If you purchased the **SO101 Arm Kit Pro Edition**, the Leader Arm should be calibrated and operated at every step using a 5V power supply, while the Follower Arm should be calibrated and operated at every step using a 12V power supply.
:::

Next, you need to connect the power supply and data cable to your SO-10x robot for calibration to ensure that the leader and follower arms have the same position values when they are in the same physical position. This calibration is essential because it allows a neural network trained on one SO-10x robot to work on another. If you need to recalibrate the robotic arm, delete the `~/lerobot/.cache/huggingface/calibration/so101` folder.

**Manual calibration of follower arm**

IMPORTANTLY: Now that you have your ports, update the port default values of [SO101RobotConfig](https://github.com/huggingface/lerobot/blob/main/lerobot/common/robot_devices/robots/configs.py) (`lerobot/lerobot/common/robot_devices/robots/configs.py`). You will find something like:

```python
@RobotConfig.register_subclass("so101")
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    # `max_relative_target` limits the magnitude of the relative positional target vector for safety purposes.
    # Set this to a positive scalar to have the same value for all motors, or a list that is the same length as
    # the number of motors in your follower arms.
    max_relative_target: int | None = None

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": FeetechMotorsBusConfig(
                port="/dev/ttyACM0",  <-- UPDATE HERE
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": FeetechMotorsBusConfig(
                port="/dev//dev/ttyACM1",  <-- UPDATE HERE
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )
```

<details>

<summary> Dual-Arm Teleoperation. (Option) </summary>

If you want to implement dual-arm teleoperation, it means you need two Leader robotic arms and two Follower robotic arms. Therefore, you need to add the class names of the robotic arms and their corresponding port numbers in the `leader_arms dick` and `follower_arms dick`, for example:

```python
@RobotConfig.register_subclass("so101")
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    # `max_relative_target` limits the magnitude of the relative positional target vector for safety purposes.
    # Set this to a positive scalar to have the same value for all motors, or a list that is the same length as
    # the number of motors in your follower arms.
    max_relative_target: int | None = None

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "left": FeetechMotorsBusConfig(
                port="/dev/ttyACM0",  <-- UPDATE HERE
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
            "right": FeetechMotorsBusConfig(
                port="/dev/ttyACM1",  <-- UPDATE HERE
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "left": FeetechMotorsBusConfig(
                port="/dev//dev/ttyACM2",  <-- UPDATE HERE
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
            "right": FeetechMotorsBusConfig(
                port="/dev//dev/ttyACM3",  <-- UPDATE HERE
                motors={
                    # name: (index, model)
                    "shoulder_pan": [1, "sts3215"],
                    "shoulder_lift": [2, "sts3215"],
                    "elbow_flex": [3, "sts3215"],
                    "wrist_flex": [4, "sts3215"],
                    "wrist_roll": [5, "sts3215"],
                    "gripper": [6, "sts3215"],
                },
            ),
        }
    )

```

:::caution
You need to correctly match the left and right names of the dual arms and ensure that each robotic arm’s serial port number on the device is correctly assigned.
:::

In the next step, when calibrating the robotic arms, you need to calibrate all four arms individually. The command is as follows:

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["left_follower"]'
  #  --control.arms='["right_follower"]'
  #  --control.arms='["left_leader"]'
  #  --control.arms='["right_leader"]'
```

After the calibration is completed, you can view the results in the .cache/calibration/so101 directory.

```bash
`-- calibration
    `-- so101
        |-- left_follower.json
        |-- left_leader.json
        |-- right_follower.json
        `-- right_leader.json
```

The subsequent steps are the same as for the single-arm setup.

</details>

```bash
sudo chmod 666 /dev/ttyACM*
```

**Manual calibration of Follower arm**

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["main_follower"]'
```

**Manual calibration of leader arm**

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --robot.cameras='{}' \
  --control.type=calibrate \
  --control.arms='["main_leader"]'
```

| **Follower Middle Position** | **Follower Zero Position** | **Follower Rotated Position** | **Follower Rest Position** |
|:---------:|:---------:|:---------:|:---------:|
| ![fig7](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_middle.webp) | ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_zero.webp) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_rotated.webp) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/follower_rest.webp) |
| **LeaderMiddle Position** | **Leader Zero Position** | **Leader Rotated Position** | **Leader Rest Position** |
| ![fig8](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_middle.webp) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_zero.webp) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_rotated.webp) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/leader_rest.webp) |

## Teleoperate

**Simple teleop**
Then you are ready to teleoperate your robot! Run this simple script (it won't connect and display the cameras):

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --robot.cameras='{}' \
  --control.type=teleoperate
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Add cameras

:::tip
The SO100 and SO101 codes are compatible. Users of SO100 can directly utilize SO101's parameters and code for operation.
:::

After inserting your two USB cameras, run the following script to check the port numbers of the cameras, It is important to remember that the camera must not be connected to a USB Hub; instead, it should be plugged directly into the device. The slower speed of a USB Hub may result in the inability to read image data.

```bash
python lerobot/common/robot_devices/cameras/opencv.py \
    --images-dir outputs/images_from_opencv_cameras
```

The terminal will print out the following information.

```markdown
Mac or X86 Ubuntu detected. Finding available camera indices through scanning all indices from 0 to 60
[...]
Camera found at index 2
Camera found at index 4
[...]
Connecting cameras
OpenCVCamera(2, fps=30.0, width=640, height=480, color_mode=rgb)
OpenCVCamera(4, fps=30.0, width=640, height=480, color_mode=rgb)
Saving images to outputs/images_from_opencv_cameras
Frame: 0000 Latency (ms): 39.52
[...]
Frame: 0046 Latency (ms): 40.07
Images have been saved to outputs/images_from_opencv_cameras
```

You can find the pictures taken by each camera in the `outputs/images_from_opencv_cameras` directory, and confirm the port index information corresponding to the cameras at different positions. Then complete the alignment of the camera parameters in the `lerobot/lerobot/common/robot_devices/robots/configs.py` file.

```python
@RobotConfig.register_subclass("so101")
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    ''''''''''''''''
          .
          .
    ''''''''''''''''
    cameras: dict[str, CameraConfig] = field(
        default_factory=lambda: {
            "laptop": OpenCVCameraConfig(
                camera_index=0,             ##### UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
            "phone": OpenCVCameraConfig(
                camera_index=1,             ##### UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
        }
    )

    mock: bool = False
  
```

<details>

<summary> Add two or more additional cameras. (Option) </summary>
If you want to add more cameras, you can continue adding different camera names and `camera_index` values in the camera dictionary, as long as the USB input allows it. Please note that using a USB hub for cameras is not recommended.

```python
@RobotConfig.register_subclass("so101")
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    ''''''''''''''''
          .
          .
    ''''''''''''''''
    cameras: dict[str, CameraConfig] = field(
        default_factory=lambda: {
            "laptop": OpenCVCameraConfig(
                camera_index=0,             ##### UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
            "phone": OpenCVCameraConfig(
                camera_index=1,             ##### UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
            "new_camera": OpenCVCameraConfig( ##### UPDATE HEARE
                camera_index=3,             ##### UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
        }
    )

    mock: bool = False
  
```

</details>

<details>

<summary>Using a Single Orbbec Gemini 2 Depth Camera</summary>

:::tip
This project was initiated by Orbbec with valuable guidance, and implemented by Jiaquan Zhang, Wenzhao Wang, and Jinpeng Huang from South China Normal University. It enables the use of Orbbec cameras to collect depth data within the lerobot framework, thereby enriching the environmental perception of robotic arms.
If you already have an Orbbec Gemini2 depth camera, our current testing configuration places the depth camera at the front upper position. Please follow the installation instructions below.
:::

**Install and Compile Gemini 2 Depth Camera Python SDK**

1. Clone pyOrbbecsdk

```bash
cd ~/
git clone https://github.com/orbbec/pyorbbecsdk.git
cd pyorbbecsdk
```

2. Install dependencies and compile pyOrbbecsdk

```bash
conda activate lerobot
sudo apt-get install python3-dev python3-venv python3-pip python3-opencv
pip3 install -r requirements.txt
mkdir build
cd build
cmake -Dpybind11_DIR=`pybind11-config --cmakedir` ..
make -j4
make install
cd ~/pyorbbecsdk
pip install -e .
```

3. Test if the depth camera works properly

```bash
cd ~/pyorbbecsdk 
pip install -e .
export PYTHONPATH=$PYTHONPATH:~/pyorbbecsdk/install/lib/
sudo bash ./scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
python3 examples/depth.py
```

However, you need to run these commands again when opening a new terminal:

```bash
cd ~/pyorbbecsdk 
export PYTHONPATH=$PYTHONPATH:~/pyorbbecsdk/install/lib/
sudo bash ./scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

You can also add the following to the end of your `.bashrc` file:

```bash
export PYTHONPATH=$PYTHONPATH:~/pyorbbecsdk/install/lib/
sudo bash ~/pyorbbecsdk/scripts/install_udev_rules.sh
sudo udevadm control --reload-rules && sudo udevadm trigger
```

This will automatically load the depth camera environment when starting a terminal.

After connecting your Orbbec depth camera, run the following script to check the depth data stream and color data stream. Two windows will pop up, allowing you to adjust the camera position. Use Ctrl+C in the terminal to exit. Important: The camera must be connected directly to your device, not through a USB hub, as the hub's bandwidth may be too slow for image data transmission.

After adjusting the camera, align the camera parameters in the configuration file at `lerobot/lerobot/common/robot_devices/robots/configs.py`.

```python
@RobotConfig.register_subclass("so101")  # Also compatible with so100
@dataclass
class So101RobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/so101"
    ''''''''''''''''
          .
          .
    ''''''''''''''''
    cameras: dict[str, CameraConfig] = field(
        default_factory=lambda: {
            "Orbbec":OrbbecCameraConfig(    # Add Orbbec camera configuration here
                fps=30,
                use_depth=True,             # Whether to use depth
                width = 640,                # Resolution automatically adapts to width. Only 640 or 1280 (untested) are valid values
                Hi_resolution_mode = False, # High resolution mode (may reduce visualization quality but improves depth data resolution)
            ),

        }
    )

    mock: bool = False
```

</details>

Then you will be able to display the cameras on your computer while you are teleoperating by running the following code. This is useful to prepare your setup before recording your first dataset.

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=teleoperate \
  --control.display_data=true
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Record the dataset

:::tip
The SO100 and SO101 codes are compatible. Users of SO100 can directly utilize SO101's parameters and code for operation.
:::

Once you're familiar with teleoperation, you can record your first dataset with SO-10x.

If you want to use the Hugging Face hub features for uploading your dataset and you haven't previously done it, make sure you've logged in using a write-access token, which can be generated from the [Hugging Face settings](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Store your Hugging Face repository name in a variable to run these commands:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

Record 2 episodes and upload your dataset to the hub:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=${HF_USER}/so101_test \
  --control.tags='["so101","tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=2 \
  --control.display_data=true \
  --control.push_to_hub=true
```

You will see a lot of lines appearing like this one:

```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

**Parameter Explanations**

- wormup-time-s: It refers to the initialization time.
- episode-time-s: It represents the time for collecting data each time.
- reset-time-s: It is the preparation time between each data collection.
- num-episodes: It indicates how many groups of data are expected to be collected.
- push-to-hub: It determines whether to upload the data to the HuggingFace Hub.

:::tip

- "If you want to save the data locally (`--control.push_to_hub=false`), replace `--control.repo_id=${HF_USER}/so101_test` with a custom local folder name, such as `--control.repo_id=seeed_123/so101_test`. It will then be stored in the system's home directory at `~/.cache/huggingface/lerobot`."

- If you uploaded your dataset to the hub with `--control.push_to_hub=true`, you can [visualize your dataset online](https://huggingface.co/spaces/lerobot/visualize_dataset) by copy pasting your repo id given by:

- Press right arrow → at any time during episode recording to early stop and go to resetting. Same during resetting, to early stop and to go to the next episode recording.

- Press left arrow ← at any time during episode recording or resetting to early stop, cancel the current episode, and re-record it.

- Press escape ESC at any time during episode recording to end the session early and go straight to video encoding and dataset uploading.

- Note: You can resume recording by adding --control.resume=true. Also if you didn't push your dataset yet, add --control.local_files_only=true. You will need to manually delete the dataset directory if you want to start recording from scratch.

- Once you're comfortable with data recording, you can create a larger dataset for training. A good starting task is grasping an object at different locations and placing it in a bin. We suggest recording at least 50 episodes, with 10 episodes per location. Keep the cameras fixed and maintain consistent grasping behavior throughout the recordings. Also make sure the object you are manipulating is visible on the camera's. A good rule of thumb is you should be able to do the task yourself by only looking at the camera images.

- In the following sections, you’ll train your neural network. After achieving reliable grasping performance, you can start introducing more variations during data collection, such as additional grasp locations, different grasping techniques, and altering camera positions.

- Avoid adding too much variation too quickly, as it may hinder your results.

- On Linux, if the left and right arrow keys and escape key don't have any effect during data recording, make sure you've set the $DISPLAY environment variable. See [pynput limitations](https://pynput.readthedocs.io/en/latest/limitations.html#linux).

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Visualize the dataset

:::tip
The SO100 and SO101 codes are compatible. Users of SO100 can directly utilize SO101's parameters and code for operation.
:::

```bash
echo ${HF_USER}/so101_test  
```

If you didn't upload with `--control.push_to_hub=false`, you can also visualize it locally with:

```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id ${HF_USER}/so101_test \
```

If you upload with `--control.push_to_hub=false`, you can also visualize it locally with:

```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id seeed_123/so101_test \
```

**Here, `seeed_123` is the custom `repo_id` name defined when collecting data.**

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" />
</div>

## Replay an episode

:::tip
The SO100 and SO101 codes are compatible. Users of SO100 can directly utilize SO101's parameters and code for operation.
:::

Now try to replay the first episode on your robot:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=replay \
  --control.fps=30 \
  --control.repo_id=${HF_USER}/so101_test \
  --control.episode=0
```

Note: If you didn't push your dataset yet, add `--control.local_files_only=true` .

## Train a policy

:::tip
The SO100 and SO101 codes are compatible. Users of SO100 can directly utilize SO101's parameters and code for operation.
:::

To train a policy to control your robot, use the `python lerobot/scripts/train.py` script. A few arguments are required. Here is an example command:

```bash
python lerobot/scripts/train.py \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=true
```

**If you want to train on a local dataset, make sure the `repo_id` matches the one used during data collection.**

Let's explain it:

1. We provided the dataset as argument with `--dataset.repo_id=${HF_USER}/so101_test`.
2. We provide the policy using `policy.type=act`, which will load the configuration from [`lerobot/lerobot/common/policies/act/configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/common/policies/act/configuration_act.py). Currently, ACT has been tested, but you can also try other policies such as diffusion, pi0, pi0fast, tdmpc, and vqbet.
3. We provided policy.device=cuda since we are training on a Nvidia GPU, but you could use policy.device=mps to train on Apple silicon.
5. We provided `wandb.enable=true` to use [Weights and Biases](https://docs.wandb.ai/quickstart) for visualizing training plots. This is optional but if you use it, make sure you are logged in by running `wandb login`.

Training should take several hours. You will find checkpoints in `outputs/train/act_so100_test/checkpoints`.

To resume training from a checkpoint, below is an example command to resume from last checkpoint of the act_so101_test policy:

```bash
python lerobot/scripts/train.py \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

**Upload policy checkpoints**
Once training is done, upload the latest checkpoint with:

```bash
huggingface-cli upload ${HF_USER}/act_so101_test \
  outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

## Evaluate your policy

:::tip
The SO100 and SO101 codes are compatible. Users of SO100 can directly utilize SO101's parameters and code for operation.
:::

You can use the `record` function from [`lerobot/scripts/control_robot.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/scripts/control_robot.py) but with a policy checkpoint as input. For instance, run this command to record 10 evaluation episodes:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=so101 \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=${HF_USER}/eval_act_so101_test \
  --control.tags='["tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=10 \
  --control.push_to_hub=true \
  --control.policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

As you can see, it's almost the same command as previously used to record your training dataset. Two things changed:

1. There is an additional `--control.policy.path` argument which indicates the path to your policy checkpoint with  (e.g. `outputs/train/eval_act_so100_test/checkpoints/last/pretrained_model`). You can also use the model repository if you uploaded a model checkpoint to the hub (e.g. `${HF_USER}/act_so100_test`).
2. The name of dataset begins by `eval` to reflect that you are running inference (e.g. `${HF_USER}/eval_act_so100_test`).

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## FAQ

- If you are following this documentation/tutorial, please git clone the recommended GitHub repository `https://github.com/ZhuYaoHui1998/lerobot.git`. The repository recommended in this documentation is a verified stable version; the official Lerobot repository is continuously updated to the latest version, which may cause unforeseen issues such as different dataset versions, different commands, etc.

- If you encounter the following error, you need to check whether the robotic arm connected to the corresponding port is powered on and whether the bus servos have any loose or disconnected cables.

  ```bash
  ConnectionError: Read failed due to comunication eror on port /dev/ttyACM0 for group key Present_Position_Shoulder_pan_Shoulder_lift_elbow_flex_wrist_flex_wrist_roll_griper: [TxRxResult] There is no status packet!
  ```

- If you have repaired or replaced any parts of the robotic arm, please completely delete the `~/lerobot/.cache/huggingface/calibration/so100` folder and recalibrate the robotic arm.

- If the remote control functions normally but the remote control with Camera fails to display the image interface, you can find [here](https://github.com/huggingface/lerobot/pull/757/files)

- If you encounter libtiff issues during dataset remote operation, please update the libtiff version.

  ```bash
  conda install libtiff==4.5.0  #for Ubuntu 22.04 is libtiff==4.5.1
  ```

- After executing the [Lerobot Installation](https://wiki.seeedstudio.com/lerobot_so100m/#install-lerobot), the GPU version of pytorch may be automatically uninstalled, so you need to manually install torch-gpu.

- For Jetson, please first install [Pytorch and Torchvsion](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) before executing `conda install -y -c conda-forge ffmpeg`, otherwise, when compiling torchvision, an ffmpeg version mismatch issue may occur.

- If the following problem occurs, it means that your computer does not support this video codec format. You need to modify line 134 in the file `lerobot/lerobot/common/datasets
/video_utils.py` by changing the value of `vcodec: str = "libsvtav1"` to `libx264` or `libopenh264`. Different computers may require different parameters, so you can try various options. [Issues 705](https://github.com/huggingface/lerobot/issues/705)
  
  ```bash
  [vost#0:0 @ 0x13207240] Unknown encoder 'libsvtav1' [vost#0:0 @ 0x13207240] Error selecting an encoder Error opening output file /home/han/.cache/huggingface/lerobot/lyhhan/so100_test/videos/chunk-000/observation.images.laptop/episode_000000.mp4. Error opening output files: Encoder not found
  ```

- Important!!! If during execution the servo's cable becomes loose, please restore the servo to its initial position and then reconnect the servo cable. You can also individually calibrate a servo using the [Servo Initialization Command](https://wiki.seeedstudio.com/lerobot_so100m/#configure-the-motors), ensuring that only one cable is connected between the servo and the driver board during individual calibration. If you encounter

  ```bash
  Auto-correct calibration of motor 'wrist roll' by shifting value by 1 full turns, from '-270 < -312.451171875 < 270degrees' to'-270<-312.451171875 < 270 degrees'.
  ```

  or other errors during the robotic arm calibration process related to angles and exceeding limit values, this method is still applicable.

- Training 50 sets of ACT data on an 8G 3060 laptop takes approximately 6 hours, while on a 4090 or A100 computer, training 50 sets of data takes about 2–3 hours.

- During data collection, ensure that the camera's position, angle, and environmental lighting remain stable, and minimize capturing excessive unstable backgrounds and pedestrians; otherwise, significant environmental changes during deployment may cause the robotic arm to fail to grasp properly.

- Ensure that the `num-episodes` parameter in the data collection command is set to collect sufficient data, and do not manually pause midway. This is because the mean and variance of the data are calculated only after data collection is complete, which is necessary for training.

- If the program prompts that it cannot read the USB camera image data, please ensure that the USB camera is not connected to a hub. The USB camera must be directly connected to the device to ensure a fast image transmission rate.

:::tip
If you encounter software issues or environment dependency problems that cannot be resolved, in addition to checking the FAQ section at the end of this tutorial, please promptly report the issue to the [LeRobot platform](https://github.com/huggingface/lerobot) or the [LeRobot Discord channel](https://discord.gg/8TnwDdjFGU).
:::

## Citation

[中文文档](https://wiki.seeedstudio.com/cn/lerobot_so100m/)

TheRobotStudio Project: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Huggingface Project: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

Dnsty: [Jetson Containers](https://github.com/dusty-nv/jetson-containers/tree/master/packages/robots/lerobot)

[Jetson AI Lab](https://www.jetson-ai-lab.com/lerobot.html)

[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

[ACT or ALOHA](https://tonyzhaozh.github.io/aloha/)

[TDMPC](https://www.nicklashansen.com/td-mpc/)

[VQ-BeT](https://sjlee.cc/vq-bet/)

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
