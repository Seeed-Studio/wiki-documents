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

# Getting started with SO-ARM100 and SO-ARM101 robotic arm with LeRobot

:::tip
This tutorial maintenance has been updated to the latest version of [lerobot](https://huggingface.co/docs/lerobot/index), if you want to refer to the tutorial of the previous version, please click [here](https://wiki.seeedstudio.com/lerobot_so100m/).
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
- Torch 2.6+  

**For Jetson Orin:**

- Jetson JetPack 6.0 and 6.1, not support 6.1
- Python 3.10  
- Torch 2.3+

## Table of Contents

  [A. 3D Printing Guide](https://wiki.seeedstudio.com/lerobot_so100m_new/#install-lerobot)

  [B. Install LeRobot](https://wiki.seeedstudio.com/lerobot_so100m_new/#install-lerobot)

  [C. Configure the motors](https://wiki.seeedstudio.com/lerobot_so100m_new/#configure-the-motors)

  [D. Assembly](https://wiki.seeedstudio.com/lerobot_so100m_new/#assembly)

  [E. Calibrate](https://wiki.seeedstudio.com/lerobot_so100m_new/#calibrate)

  [F. Teleoperate](https://wiki.seeedstudio.com/lerobot_so100m_new/#teleoperate)

  [G. Add cameras](https://wiki.seeedstudio.com/lerobot_so100m_new/#add-cameras)

  [H. Record the dataset](https://wiki.seeedstudio.com/lerobot_so100m_new/#record-the-dataset)

  [I. Visualize the dataset](https://wiki.seeedstudio.com/lerobot_so100m_new/#visualize-the-dataset)

  [J. Replay an episode](https://wiki.seeedstudio.com/lerobot_so100m_new/#replay-an-episode)

  [K. Train a policy](https://wiki.seeedstudio.com/lerobot_so100m_new/#train-a-policy)

  [L. Evaluate your policy](https://wiki.seeedstudio.com/lerobot_so100m_new/#evaluate-your-policy)

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
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
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

If you encounter an error like this, you can use this command too.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" />
</div>

:::

5. Install LeRobot with dependencies for the feetech motors:

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

For Jetson Jetpack 6.0+ devices (please make sure to install [Pytorch-gpu and Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) from step 5 before executing this step):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

6. Check Pytorch and Torchvision

Since installing the lerobot environment via pip will uninstall the original Pytorch and Torchvision and install the CPU versions of Pytorch and Torchvision, you need to perform a check in Python.

```python
import torch
print(torch.cuda.is_available())
```

If the printed result is False, you need to reinstall Pytorch and Torchvision according to the [official website tutorial](https://pytorch.org/index.html).

If you are using a Jetson device, install Pytorch and Torchvision according to [this tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson).

## Configure the motors

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

***The following are the code calibration steps, please calibrate with the reference wiring servo in the picture above***

Find USB ports associated to your arms
To find the correct ports for each arm, run the utility script twice:

```bash
lerobot-find-port
```

Example output:

```bash
Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the usb cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/ttyACM1
Reconnect the USB cable.
```

:::tip
Remember to remove the usb, otherwise the interface will not be detected.
:::

Example output when identifying the follower arm's port (e.g., `/dev/tty.usbmodem575E0031751` on Mac, or possibly `/dev/ttyACM0` on Linux):

Example output when identifying the leader arm's port (e.g., `/dev/tty.usbmodem575E0032081`, or possibly `/dev/ttyACM1` on Linux):

You might need to give access to the USB ports by running:

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

:::tip
Again, please make sure that the servo joint IDs and gear ratios strictly correspond to those of the SO-ARM101.
:::

Connect the usb cable from your computer and the power supply to the follower arm’s controller board. Then, run the following command.

```bash
lerobot-setup-motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0  # <- paste here the port found at previous step
```

You should see the following instruction.

```bash
Connect the controller board to the 'gripper' motor only and press enter.
```

As instructed, plug the gripper’s motor. Make sure it’s the only motor connected to the board, and that the motor itself is not yet daisy-chained to any other motor. As you press [Enter], the script will automatically set the id and baudrate for that motor.

You should then see the following message:

```bash
'gripper' motor id set to 6
```

Followed by the next instruction:

```bash
Connect the controller board to the 'wrist_roll' motor only and press enter.
```

You can disconnect the 3-pin cable from the controller board, but you can leave it connected to the gripper motor on the other end, as it will already be in the right place. Now, plug in another 3-pin cable to the wrist roll motor and connect it to the controller board. As with the previous motor, make sure it is the only motor connected to the board and that the motor itself isn’t connected to any other one.

:::caution
Repeat the operation for each motor as instructed.
:::

:::tip
Check your cabling at each step before pressing Enter. For instance, the power supply cable might disconnect as you manipulate the board.
:::

When you are done, the script will simply finish, at which point the motors are ready to be used. You can now plug the 3-pin cable from each motor to the next one, and the cable from the first motor (the ‘shoulder pan’ with id=1) to the controller board, which can now be attached to the base of the arm.

Do the same steps for the leader arm.

```bash
lerobot-setup-motors \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0  # <- paste here the port found at previous step
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hbW6eFYkHTg?si=jKdpTyI8wRC-iHxO" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

</TabItem>

</Tabs>

## Assembly

:::tip

- The dual-arm assembly process of SO-ARM101 is the same as that of SO-ARM100. The only differences are the addition of cable clips on SO-ARM101 and the different gear ratios of the joint servos on the Leader Arm. So both SO100 and SO101 can be installed by referring to the following content
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

Next, you need to connect the power supply and data cable to your SO-10x robot for calibration to ensure that the leader and follower arms have the same position values when they are in the same physical position. This calibration is essential because it allows a neural network trained on one SO-10x robot to work on another. If you need to recalibrate the robotic arm, delete the files under `~/.cache/huggingface/lerobot/calibration/robots` or `~/.cache/huggingface/lerobot/calibration/teleoperators` and recalibrate the robotic arm. Otherwise, an error prompt will appear. The calibration information for the robotic arm will be stored in the JSON files under this directory.

**Manual calibration of follower arm**

Please connect the interfaces of the 6 robot servos via a 3-pin cable and connect the chassis servo to the servo drive plate, then run the following command or API example to calibrate the robot arm:

***Interface permissions are given first***

```bash
sudo chmod 666 /dev/ttyACM*
```

***Then calibrate the follower arm***

```python
lerobot-calibrate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \# <- The port of your robot
    --robot.id=my_awesome_follower_arm  # <- Give the robot a unique name
```

The video below shows how to perform the calibration. First you need to move the robot to the position where all joints are in the middle of their ranges. Then after pressing enter you have to move each joint through its full range of motion.

**Manual calibration of leader arm**

Do the same steps to calibrate the leader arm, run the following command or API example:

```python
lerobot-calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \# <- The port of your robot
    --teleop.id=my_awesome_leader_arm  # <- Give the robot a unique name
```

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/22n6f5xH9Dk?si=2QTzn1CDbsSv6Y_H" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Teleoperate

**Simple teleop**
Then you are ready to teleoperate your robot! Run this simple script (it won't connect and display the cameras):

Note that the id associated with a robot is used to store the calibration file. It’s important to use the same id when teleoperating, recording, and evaluating when using the same setup.

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm
```

The teleoperate command will automatically:

1. Identify any missing calibrations and initiate the calibration procedure.
2. Connect the robot and teleop device and start teleoperation.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/hnRwfcyX1ZI?si=RuzYjP_FUTK16lfs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Add cameras

<details>
<summary> If using the Orbbec Gemini2 Depth Camera </summary>

<div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer" >
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

- 🚀 Step 1: Install the Orbbec SDK Dependent Environment

1. Clone the `pyorbbec` repository

   ```bash
   cd ~/
   git clone https://github.com/orbbec/pyorbbecsdk.git
   ```

2. Download and install the corresponding **.whl file** for the SDK  
   Go to [pyorbbecsdk Releases](https://github.com/orbbec/pyorbbecsdk/releases),  
   select and install based on your Python version. For example:

   ```bash
   pip install pyorbbecsdk-x.x.x-cp310-cp310-linux_x86_64.whl
   ```

3. Install dependencies in the `pyorbbec` directory

   ```bash
   cd ~/pyorbbecsdk
   pip install -r requirements.txt
   ```

   Force downgrade the `numpy` version to `1.26.0`

    ```bash
    pip install numpy==1.26.0
    ```

  Red error messages can be ignored.

4. Clone the Orbbec SDK into the `~/lerobot/src/cameras` directory

  ```bash
  cd ~/lerobot/src/cameras
  git clone https://github.com/ZhuYaoHui1998/orbbec.git
  ```

5. Modify utils.py and **init**.py

- Find `utils.py` in the `~/lerobot/src/lerobot/cameras` directory, and add the following code at line 40:

```python
elif cfg.type == "orbbec":
            from .orbbec.camera_orbbec import OrbbecCamera

            cameras[key] = OrbbecCamera(cfg)
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/utils.png" />
</div>

- Find `__init__.py` in the `~/lerobot/src/lerobot/cameras` directory, and add the following code at line 18:

```python
from .orbbec.configuration_orbbec import OrbbecCameraConfig
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/init.png" />
</div>

- 🚀 Step 2: Function Call and Examples

In all the following examples, replace `so101_follower` with the actual model of the robotic arm you are using (e.g., `so100` / `so101`).

We have added the `focus_area` hyperparameter. Since depth data that is too far away is meaningless for the robotic arm (it cannot reach or grasp objects), depth data less than or greater than the `focus_area` will be displayed in black. The default `focus_area` is (20, 600).  
Currently, the only supported resolution is width: 640, height: 880.

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/orbbec_result.png" />
</div>

For subsequent tasks such as data collection, training, and evaluation, the process is the same as that for regular RGB commands. You only need to replace the relevant part in the regular RGB command with:

```bash
  --robot.cameras="{ up: {type: orbbec, width: 640, height: 880, fps: 30, focus_area:[60,300]}}" \
```

You can also add an additional monocular RGB camera afterward.

</details>

:::tip
The SO100 and SO101 codes are compatible. Users of SO100 can directly utilize SO101's parameters and code for operation.
:::

To instantiate a camera, you need a camera identifier. This identifier might change if you reboot your computer or re-plug your camera, a behavior mostly dependant on your operating system.

To find the camera indices of the cameras plugged into your system, run the following script:

```python
lerobot-find-cameras opencv # or realsense for Intel Realsense cameras
```

The terminal will print out the following information.

```markdown
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

You can find the pictures taken by each camera in the `outputs/captured_images` directory.

:::warning
When using Intel RealSense cameras in , you could get this error: , this can be solved by running the same command with permissions. Note that using RealSense cameras in is unstable.macOSError finding RealSense cameras: failed to set power statesudomacOS.
:::

Then you will be able to display the cameras on your computer while you are teleoperating by running the following code. This is useful to prepare your setup before recording your first dataset.

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

If you have more cameras, you can change `--robot.cameras` to add cameras. You should note the format of the index_or_path, which is determined by the last digit of the camera ID output by `python -m lerobot.find_cameras opencv`.

:::tip
Images in the `fourcc: "MJPG"` format are compressed. You can try higher resolutions, and you may also attempt the `YUYV` format. However, the latter will reduce the image resolution and FPS, leading to lag in the robotic arm's operation. Currently, under the `MJPG` format, it can support 3 cameras at a resolution of `1920*1080` while maintaining `30FPS`. That said, connecting 2 cameras to a computer via the same USB HUB is still not recommended.
:::


For example, you want to add a side camera:

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

:::tip
Images in the `fourcc: "MJPG"` format are compressed. You can try higher resolutions, and you may also attempt the `YUYV` format. However, the latter will reduce the image resolution and FPS, leading to lag in the robotic arm's operation. Currently, under the `MJPG` format, it can support 3 cameras at a resolution of `1920*1080` while maintaining `30FPS`. That said, connecting 2 cameras to a computer via the same USB HUB is still not recommended.
:::


:::tip
If you find bug like this.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

You can downgrade the rerun version to resolve the issue.

```bash
pip3 install rerun-sdk==0.23
```

:::

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Record the dataset

- If you want to save the dataset locally, you can run it directly:

```bash
lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

Among them, `repo_id` can be modified customarily, and `push_to_hub=false`. Finally, the dataset will be saved in the `~/.cache/huggingface/lerobot` directory in the home folder, where the aforementioned `seeedstudio123/test` folder will be created.

- If you want to use the Hugging Face hub features for uploading your dataset and you haven't previously done it, make sure you've logged in using a write-access token, which can be generated from the [Hugging Face settings](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Store your Hugging Face repository name in a variable to run these commands:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

Record 5 episodes and upload your dataset to the hub:

```bash
lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=true \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

You will see a lot of lines appearing like this one:

```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

**Record function**

The **record** function provides a suite of tools for capturing and managing data during robot operation.  

**1. Data Storage**

- Data is stored using the `LeRobotDataset` format and is stored on disk during recording.
- By default, the dataset is pushed to your Hugging Face page after recording.  
- To disable uploading, use: `--dataset.push_to_hub=False`

**2. Checkpointing and Resuming**

- Checkpoints are automatically created during recording.  
- To resume after an interruption, re-run the same command with: `--resume=true`

⚠️ Critical Note: When resuming, set `--dataset.num_episodes` to the number of additional episodes to record (not the targeted total number of episodes in the dataset).  

- To start recording from scratch, **manually delete** the dataset directory.

**3. Recording Parameters**

Set the flow of data recording using command-line arguments:

| Parameter | Description | Default |  
|-----------|-------------|---------|  
| --dataset.episode_time_s | Duration per data episode (seconds) | 60 |  
| --dataset.reset_time_s | Environment reset time after each episode (seconds) | 60 |  
| --dataset.num_episodes | Total episodes to record | 50 |  

**4. Keyboard Controls During Recording**

Control the data recording flow using keyboard shortcuts:

| Key | Action |  
|-----|--------|  
| → (Right Arrow) | Early-stop current episode/reset; move to next. |  
| ← (Left Arrow) | Cancel current episode; re-record it. |  
| ESC | Stop session immediately, encode videos, and upload dataset. |  

:::tip

If keyboard not work, you may need install other version of pynput.

```bash
pip install pynput==1.6.8
```

:::

**Tips for Gathering Data**

- Task Suggestion: Grasp objects at different locations and place them in a bin.  
- Scale: Record ≥50 episodes (10 episodes per location).  
- Consistency:  
  - Keep cameras fixed.  
  - Maintain identical grasping behavior.  
  - Ensure manipulated objects are visible in camera feeds.  
- Progression:  
  - Start with reliable grasping before adding variations (new locations, techniques, camera adjustments).  
  - Avoid rapid complexity increases to prevent failures.  

💡 Rule of Thumb: You should be able to do the task yourself by only looking at the camera images.  

If you want to dive deeper into this important topic, you can check out the [blog post](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) we wrote on what makes a good dataset.

**Troubleshooting**

Linux-specific Issue:  
If Right Arrow/Left Arrow/ESC keys are unresponsive during recording:  

- Verify the `$DISPLAY` environment variable is set (see [pynput limitations](https://pynput.readthedocs.io/en/latest/limitations.html)).  

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Visualize the dataset

:::tip
The SO100 and SO101 codes are compatible. Users of SO100 can directly utilize SO101's parameters and code for operation.
:::

If you uploaded your dataset to the hub with `--control.push_to_hub=true`, you can [visualize your dataset online](https://huggingface.co/spaces/lerobot/visualize_dataset) by copy pasting your repo id given by:

```bash
echo ${HF_USER}/so101_test  
```

If you didn't upload with `--dataset.push_to_hub=false`, you can also visualize it locally with:

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/so101_test \
```

If you upload with `--dataset.push_to_hub=false`, you can also visualize it locally with:

```bash
lerobot-dataset-viz \
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

A useful feature is the `replay` function, which allows you to replay any episode that you’ve recorded or episodes from any dataset out there. This function helps you test the repeatability of your robot’s actions and assess transferability across robots of the same model.

You can replay the first episode on your robot with either the command below or with the API example:

```bash
lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.episode=0
```

Your robot should replicate movements similar to those you recorded.

## Train And Evaluate


<details>

<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>

Refer to[ACT](https://huggingface.co/docs/lerobot/act)

To train a policy to control your robot, use the [lerobot-train](https://github.com/huggingface/lerobot/blob/main/src/lerobot/scripts/train.py) script. 

**Train**


```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000 
```

**If you want to train on a local dataset, make sure the `repo_id` matches the one used during data collection and add `--policy.push_to_hub=False`.**

```bash
lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false\
  --steps=300000 
```

Let's explain it:

- **Dataset specification**: We provide the dataset via the parameter `--dataset.repo_id=${HF_USER}/so101_test`.
- **Training steps**: We modify the number of training steps using `--steps=300000`. The algorithm defaults to 800000 steps, and you can adjust it based on the difficulty of your task and by observing the loss during training.
- **Policy type**: We provide the policy with `policy.type=act`. Similarly, you can switch between policies such as [`act`, `diffusion`, `pi0`, `pi0fast`, `pi0fast`, `sac`, `smolvla`]., which will load the configuration from `configuration_act.py`. Importantly, this policy will automatically adapt to your robot's (e.g., `laptop` and `phone`) motor states, motor actions, and the number of cameras, as this information is already stored in your dataset.
- **Device selection**: We provide `policy.device=cuda` because we are training on an Nvidia GPU, but you can use `policy.device=mps` for training on Apple Silicon.
- **Visualization tool**: We provide `wandb.enable=true` to visualize training charts using [Weights and Biases](https://docs.wandb.ai/quickstart). This is optional, but if you use it, ensure you have logged in by running `wandb login`.


**Evaluate**

:::tip
The SO100 and SO101 codes are compatible. Users of SO100 can directly utilize SO101's parameters and code for operation.
:::

You can use the `record` function from [`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) but with a policy checkpoint as input. For instance, run this command to record 10 evaluation episodes:

```bash
lerobot-record \
  --robot.type=so100_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video10, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: intelrealsense, serial_number_or_name: 233522074606, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_so100 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=${HF_USER}/my_policy
```

such as:

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

1. The `--policy.path` parameter indicates the path to the weight file of your policy training results (e.g., `outputs/train/act_so101_test/checkpoints/last/pretrained_model`). If you upload the model training result weight file to Hub, you can also use the model repository (e.g., `${HF_USER}/act_so100_test`).

2. The dataset name `dataset.repo_id` starts with `eval_`. This operation will separately record videos and data during evaluation, which will be saved in the folder starting with `eval_`, such as `seeed/eval_test123`.

3. If you encounter `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` during the evaluation phase, please delete the folder starting with `eval_` first and then run the program again.

4. When encountering `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, please note that keywords like front and side in the `--robot.cameras` parameter must be strictly consistent with those used when collecting the dataset.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=Y2SXU9T0DSmtz4ll" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


</details>


<details>
<summary> SmolVLA </summary>

[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) is Hugging Face’s lightweight foundation model for robotics. Designed for easy fine-tuning on LeRobot datasets, it helps accelerate your development!

**Set Up Your Environment**

Install SmolVLA dependencies by running:

```bash
pip install -e ".[smolvla]"
```

**Finetune SmolVLA on your data**

Use [smolvla_base](https://hf.co/lerobot/smolvla_base), our pretrained 450M model, and fine-tune it on your data. Training the model for 20k steps will roughly take ~4 hrs on a single A100 GPU. You should tune the number of steps based on performance and your use-case.

If you don’t have a gpu device, you can train using our notebook on [Google Colab](https://colab.research.google.com/github/huggingface/notebooks/blob/main/lerobot/training-smolvla.ipynb).

Pass your dataset to the training script using `--dataset.repo_id`. If you want to test your installation, run the following command where we use one of the datasets we collected for the [SmolVLA Paper](https://huggingface.co/papers/2506.01844).

```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true
```

:::tip
You can start with a small batch size and increase it incrementally, if the GPU allows it, as long as loading times remain short.
:::

Fine-tuning is an art. For a complete overview of the options for finetuning, run

```bash
lerobot-train --help
```

**Evaluate the finetuned model and run it in real-time**

Similarly for when recording an episode, it is recommended that you are logged in to the HuggingFace Hub. You can follow the corresponding steps: [Record a dataset](https://huggingface.co/docs/lerobot/il_robots). Once you are logged in, you can run inference in your setup by doing:

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \ # <- Use your port
  --robot.id=my_blue_follower_arm \ # <- Use your robot id
  --robot.cameras="{ front: {type: opencv, index_or_path: 8, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \ # <- Use your cameras
  --dataset.single_task="Grasp a lego block and put it in the bin." \ # <- Use the same task description you used in your dataset recording
  --dataset.repo_id=${HF_USER}/eval_DATASET_NAME_test \  # <- This will be the dataset name on HF Hub
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=so100_leader \
  # --teleop.port=/dev/ttyACM0 \
  # --teleop.id=my_red_leader_arm \
  --policy.path=HF_USER/FINETUNE_MODEL_NAME # <- Use your fine-tuned model
```

Depending on your evaluation setup, you can configure the duration and the number of episodes to record for your evaluation suite.

</details>

<details>
<summary> LIBERO </summary>

[LIBERO](https://huggingface.co/docs/lerobot/libero) is a benchmark designed to study lifelong robot learning. The idea is that robots won’t just be pretrained once in a factory, they’ll need to keep learning and adapting with their human users over time. This ongoing adaptation is called lifelong learning in decision making (LLDM), and it’s a key step toward building robots that become truly personalized helpers.

- 📄 [LIBERO paper](https://arxiv.org/abs/2306.03310)
- 💻 [Original LIBERO repo](https://github.com/Lifelong-Robot-Learning/LIBERO)

**Evaluating with LIBERO**

At **LeRobot**, we ported LIBERO into our framework and used it mainly to **evaluate** [SmolVLA](https://huggingface.co/docs/lerobot/en/smolvla), our lightweight Vision-Language-Action model.

LIBERO is now part of our **multi-eval supported simulation**, meaning you can benchmark your policies either on a **single suite of tasks** or across **multiple suites at once** with just a flag.

To Install LIBERO, after following LeRobot official instructions, just do: `pip install -e ".[libero]"`

***Single-suite evaluation***

Evaluate a policy on one LIBERO suite:

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object \
  --eval.batch_size=2 \
  --eval.n_episodes=3
```

- `--env.task` picks the suite (`libero_object`, `libero_spatial`, etc.).
- `--eval.batch_size` controls how many environments run in parallel.
- `--eval.n_episodes` sets how many episodes to run in total.

***Multi-suite evaluation***

Benchmark a policy across multiple suites at once:

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object,libero_spatial \
  --eval.batch_size=1 \
  --eval.n_episodes=2
```

- Pass a comma-separated list to `--env.task` for multi-suite evaluation.

**Example training command**

```bash
lerobot-train \
  --policy.type=smolvla \
  --policy.repo_id=${HF_USER}/libero-test \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_10 \
  --output_dir=./outputs/ \
  --steps=100000 \
  --batch_size=4 \
  --eval.batch_size=1 \
  --eval.n_episodes=1 \
  --eval_freq=1000 \
```

-----

**Note on rendering**

LeRobot uses MuJoCo for simulation. You need to set the rendering backend before training or evaluation:

- `export MUJOCO_GL=egl` → for headless servers (e.g. HPC, cloud)

</details>


<details>
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

Refer to [Pi0](https://huggingface.co/docs/lerobot/pi0) 

```bash
pip install -e ".[pi]"
```

**Train**
```bash
lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=seeed/eval_test123 \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --steps=20000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false 
```

**Evaluate**

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model
```


</details>


<details>
<summary>[Pi0.5](https://huggingface.co/docs/lerobot/pi05) </summary>

Refer to [Pi0.5](https://huggingface.co/docs/lerobot/pi05) 

```bash
pip install -e ".[pi]"
```

**Train**
```bash
lerobot-train \
    --dataset.repo_id=seeed/eval_test123 \
    --policy.type=pi05 \
    --output_dir=outputs/pi05_training \
    --job_name=pi05_training \
    --policy.pretrained_path=lerobot/pi05_base \
    --policy.compile_model=true \
    --policy.gradient_checkpointing=true \
    --wandb.enable=false \
    --policy.dtype=bfloat16 \
    --steps=3000 \
    --policy.device=cuda \
    --batch_size=32
```

**Evaluate**

```bash
lerobot-record \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=my_awesome_follower_arm \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model
```


</details>



<details>
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) </summary>

Refet to [GR00T N1.5](https://huggingface.co/docs/lerobot/groot) 


</details>



If you encounter the following error:

<div align="center">
    <img width={1000}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/stack_bug.png" />
</div>

Try running the following command to resolve it:

```bash
pip install datasets==2.19
```

Training should take several hours. You will find checkpoints in `outputs/train/act_so100_test/checkpoints`.

To resume training from a checkpoint, below is an example command to resume from `last` checkpoint of the `act_so101_test` policy:

```bash
lerobot-train \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

**Upload policy checkpoints**

Once training is done, upload the latest checkpoint with:

```bash
huggingface-cli upload ${HF_USER}/act_so101_test \
  outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

You can also upload intermediate checkpoints with:

```bash
CKPT=010000
huggingface-cli upload ${HF_USER}/act_so101_test${CKPT} \
  outputs/train/act_so101_test/checkpoints/${CKPT}/pretrained_model
```



## FAQ

- If you are following this documentation/tutorial, please git clone the recommended GitHub repository `https://github.com/Seeed-Projects/lerobot.git`. The repository recommended in this documentation is a verified stable version; the official Lerobot repository is continuously updated to the latest version, which may cause unforeseen issues such as different dataset versions, different commands, etc.

- If you encounter the following error when calibrating servo IDs:

  ```bash
  `Motor ‘gripper’ was not found, Make sure it is connected`
  ```

  Please carefully check whether the communication cable is properly connected to the servo and whether the power supply is providing the correct voltage.

- If you encounter:

  ```bash
  Could not connect on port "/dev/ttyACM0"
  ```

  And you can see ACM0 exists when running `ls /dev/ttyACM*`, it means you forgot to grant serial port permissions. Enter `sudo chmod 666 /dev/ttyACM*` in the terminal to fix it.

- If you encounter:

  ```bash
  No valid stream found in input file. Is -1 of the desired media type?
  ```

  Please install ffmpeg 7.1.1 using `conda install ffmpeg=7.1.1 -c conda-forge`.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/lekiwi/No valid stream.png" />
</div>

- If you encounter:

  ```bash
  ConnectionError: Failed to sync read 'Present_Position' on ids=[1,2,3,4,5,6] after 1 tries. [TxRxResult] There is no status packet!
  ```

  You need to check whether the robotic arm on the corresponding port is powered on, and whether the data cables of the bus servos are loose or disconnected. If a servo's light is not on, it means the cable of the previous servo is loose.

- If you encounter the following error when calibrating the robotic arm:

  ```bash
  Magnitude 30841 exceeds 2047 (max for sign_bit_index=11)
  ```

  Power off and restart the robotic arm, then try calibrating again. This method can also be used if the MAX angle reaches a value of tens of thousands during calibration. If this doesn't work, you need to recalibrate the corresponding servos, including median calibration and ID writing.

- If you encounter during the evaluation phase:

  ```bash
  File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'
  ```

  Please delete the folder starting with `eval_` first and then run the program again.

- If you encounter during the evaluation phase:

  ```bash
  `mean` is infinity. You should either initialize with `stats` as an argument or use a pretrained model
  ```

  Please note that keywords like "front" and "side" in the `--robot.cameras` parameter must be strictly consistent with those used when collecting the dataset.

- If you have repaired or replaced parts of the robotic arm, please completely delete the files under `~/.cache/huggingface/lerobot/calibration/robots` or `~/.cache/huggingface/lerobot/calibration/teleoperators` and recalibrate the robotic arm. Otherwise, error messages may appear, as calibration information is stored in JSON files in these directories.

- Training ACT on 50 sets of data takes approximately 6 hours on a laptop with an RTX 3060 (8GB), and about 2-3 hours on computers with RTX 4090 or A100 GPUs.

- During data collection, ensure the camera position, angle, and ambient lighting are stable. Reduce the amount of unstable background and pedestrians captured by the camera, as excessive changes in the deployment environment may cause the robotic arm to fail to grasp properly.

- For the data collection command, ensure the `num-episodes` parameter is set to collect sufficient data. Do not manually pause midway, as the mean and variance of the data are calculated only after data collection is complete, which are necessary for training.

- If the program indicates it cannot read image data from the USB camera, ensure the USB camera is not connected through a hub. The USB camera must be directly connected to the device to ensure fast image transmission speed.

- If you find bug like `AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?`, You can downgrade the rerun version to resolve the issue.

```bash
pip3 install rerun-sdk==0.23
```

:::tip
If you encounter software issues or environment dependency problems that cannot be resolved, in addition to checking the FAQ section at the end of this tutorial, please promptly report the issue to the [LeRobot platform](https://github.com/huggingface/lerobot) or the [LeRobot Discord channel](https://discord.gg/8TnwDdjFGU).
:::

## Citation

[中文文档](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/)

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
