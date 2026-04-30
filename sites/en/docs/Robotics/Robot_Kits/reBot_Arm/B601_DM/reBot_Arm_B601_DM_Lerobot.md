---
description: This wiki provides a complete guide for reBot Arm B601-DM to implement data collection and training within the LeRobot framework.
title: Getting Started with reBot Arm B601-DM in LeRobot
keywords:
  - Lerobot
  - Huggingface
  - Robotic Arm
  - rebot arm
  - Robot
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/b601dm_zeroposition.jpg
slug: /rebot_arm_b601_dm_lerobot
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-04-15T00:00:00.000Z
  author: LiuJunjie
translation:
  skip:
    - zh-CN
createdAt: '2026-04-09'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/rebot_arm_b601_dm_lerobot/
---


# Getting Started with LeRobot-based reBot Arm B601-DM and reBot 102 Leader


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



[reBot Arm B601-DM](https://wiki.seeedstudio.com/rebot_b601_dm_getting_started/) is an open-source robotic arm project launched by Seeed, dedicated to lowering the threshold for learning embodied intelligence. We open-source all structural designs and code without reservation, making robotics technology accessible to everyone.

[LeRobot](https://github.com/huggingface/lerobot/tree/main) is committed to providing models, datasets and tools for real-world robotics in PyTorch. Its aim is to reduce the entry barrier of robotics, enabling everyone to contribute and benefit from sharing datasets and pretrained models. LeRobot integrates cutting-edge methodologies validated for real-world application, centering on imitation learning and reinforcement learning. It has furnished a suite of pre-trained models, datasets featuring human-gathered demonstrations, and simulation environments, enabling users to commence without the necessity of robot assembly.

### 📖 Project Introduction

**reBot-DevArm (reBot Arm B601 DM and reBot Arm B601 RS)** is a robotic arm project dedicated to lowering the threshold for learning embodied intelligence. We focus on **"True Open Source"** — not just code, we open-source all of the following without reservation:
- 🦾 **Open-source robotic arms with two motor versions**: We provide all open-source files for RoboStride and Damiao motor versions of the same appearance.
- 🛠️ **Hardware blueprints**: Sheet metal and 3D printed part source files.
- 🔩 **BOM (Bill of Materials)**: Detailed to every screw's specification and purchase link.
- 💻 **Software and algorithms**: Python SDK, ROS1/2, Isaac Sim, LeRobot, etc.

## Building Your reBot Robotic Arm

- We offer five kit options:
  - **Robotic Arm Body Motor Kit**: Includes only the motors and wiring harnesses needed for the robotic arm.
  - **Robotic Arm Body Structural Parts Kit**: Includes only the mechanical structural components.
  - **Gripper Complete Kit**: Includes motors, wiring harnesses, and structural parts for the gripper.
  - **Complete Arm Kit**: Includes all components for the robotic arm body and gripper.
  - **Pre-assembled Robotic Arm**: A fully assembled robotic arm.

The reBot-DevArm and reComputer Jetson AI intelligent robot kit seamlessly combine high-precision robotic arm control with a powerful AI computing platform, providing a comprehensive robot development solution. This kit is based on the Jetson Orin or AGX Orin platform, combined with the reBot-DevArm and LeRobot AI framework, offering users an intelligent robot system applicable to multiple scenarios such as education, research, and industrial automation.

This wiki provides debugging tutorials for reBot-DevArm and implements data collection and training within the LeRobot framework.

:::caution
Seeed Studio tutorials are strictly updated according to official documentation. If you encounter software or environmental issues that cannot be resolved, please check the FAQ at the end of the article first, or contact customer service to join the SeeedStudio LeRobot discussion group. You can also ask questions here: [LeRobot GitHub](https://github.com/huggingface/lerobot) or [Discord Channel](https://discord.gg/8TnwDdjFGU).
:::

## 🔧 Features of reBot B601-DM Series:

1. **Open-source & Low-cost**
   reBot Arm is an open-source, low-cost robotic arm solution from Seeed Studio, dedicated to lowering the threshold for learning embodied intelligence.

2. **LeRobot Platform Integration**
   Designed for integration with the [LeRobot platform](https://github.com/huggingface/lerobot). This platform provides PyTorch models, datasets and tools for imitation learning of real robot tasks (including data collection, simulation, training and deployment).

3. **Abundant Learning Resources**
   Provides comprehensive open-source learning resources including assembly and calibration guides, testing and data collection tutorials, training and deployment documentation to help users quickly get started and develop robotic applications.

4. **Nvidia Platform Compatible**
   Supports deployment via the reComputer Mini J4012 Orin NX 16GB platform.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/PoMv3mw8SGk" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Initial System Environment

**For Ubuntu x86:**
  - Ubuntu 22.04
  - CUDA 12+
  - Python 3.10
  - Torch 2.6

**For Jetson Orin:**
  - Jetson JetPack 6.0 and 6.1, not support 6.2
  - Python 3.10
  - Torch 2.3+

## Install LeRobot

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/mWrWeqAPDSY" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

You need to install pytorch, torchvision and other environments based on your CUDA version.

### 1. Install Miniforge

```bash
cd ~
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh

~/miniforge3/bin/conda init bash
source ~/.bashrc
```

### 2. Clone the Lerobot Repository

```bash
mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
git clone https://github.com/Seeed-Projects/lerobot.git
```

### 3. Clone Function Packages

Clone two dependent function packages to the rebot_lerobot directory:

:::tip
For detailed functions of the function packages, please refer to:
- [lerobot-teleoperator-rebot-arm-102](https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102)
- [lerobot-robot-seeed-b601](https://github.com/Seeed-Projects/lerobot-robot-seeed-b601)
:::

```bash
cd ~/rebot_lerobot

# Clone rebot 102 leader function package
git clone https://github.com/Seeed-Projects/lerobot-teleoperator-rebot-arm-102.git

# Clone rebot b601 follower function package
git clone https://github.com/Seeed-Projects/lerobot-robot-seeed-b601.git
```

### 4. Create Conda Environment and Install LeRobot

The lerobot repository already has a pyproject.toml. Create a conda environment and install all dependencies.

```bash
cd ~/rebot_lerobot

# Create conda environment (Python 3.12)
conda create -y -n lerobot python=3.12

# Activate environment
conda activate lerobot

# Install lerobot main project (editable mode)
pip install -e ./lerobot

# Add local dependency packages (editable install)
pip install -e ./lerobot-teleoperator-rebot-arm-102
pip install -e ./lerobot-robot-seeed-b601
pip install motorbridge
```

### 5. Install ffmpeg

ffmpeg is a video decoding dependency, install via conda:

```bash
conda install ffmpeg -c conda-forge
```

:::tip
**Version Notes**:
- By default, ffmpeg 7.X will be installed (supports libsvtav1 encoder)
- If you encounter version compatibility issues, you can specify ffmpeg 7.1.1:
  ```bash
  conda install ffmpeg=7.1.1 -c conda-forge
  ```
- You can check if libsvtav1 encoder is supported via `ffmpeg -encoders | grep svtav1`
:::

### 6. Special Configuration for Jetson JetPack 6.0+ Devices

(Skip this step for PC) For Jetson JetPack 6.0+ devices (please ensure you have installed Pytorch-gpu and Torchvision according to [this tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) step 5 before executing this step):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies via conda, for Jetson Jetpack 6.0+ only
conda remove opencv   # Uninstall OpenCV
pip3 install opencv-python==4.10.0.84  # Install specific OpenCV version using pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This version must be compatible with torchvision
```

### 7. Check Pytorch and Torchvision

:::tip
If you are using a Jetson device, please install Pytorch and Torchvision according to [this tutorial](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson).
:::

Since installing the lerobot environment via pip will uninstall the original Pytorch and Torchvision and install the CPU versions, you need to perform a check in Python.

```python
python3

import torch
print(torch.cuda.is_available())#Should output True
```

If the output is True, you can type exit() to exit Python and continue with the following steps.
If the output is False, you need to reinstall Pytorch and Torchvision according to the [official tutorial](https://pytorch.org/index.html).

## Calibrate the Robotic Arm

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/v8Ek1Ad1VWo" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Next, you need to connect the power supply and data cable to your reBot B601-DM robot for calibration to ensure that the leader and follower arms have the same position values when they are in the same physical position. This calibration is essential because it allows a neural network trained on one reBot B601-DM robot to work on another. If you need to recalibrate the robotic arm, please completely delete the files under `~/.cache/huggingface/lerobot/calibration/robots` or `~/.cache/huggingface/lerobot/calibration/teleoperators` and recalibrate the robotic arm. Otherwise, an error prompt will appear. The calibration information for the robotic arm will be stored in the JSON files under this directory.

First, you need to grant interface permissions by running the following commands:

```bash
sudo chmod 666 /dev/ttyUSB*  # Leader arm
sudo chmod 666 /dev/ttyACM*  # Follower arm (serial bridge)
```

### Calibrate the Follower Arm

B601-DM only needs to be calibrated once after assembly. Here is the calibration command. Refer to the figure for the zero position (gripper fully closed).

```bash
sudo chmod 666 /dev/ttyACM*  # follower arm (serial bridge)

lerobot-calibrate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao
```

  <div align="center">
      <img width={800}
      src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/b601dm_zeroposition.jpg" />
  </div>

### Calibrate the Leader Arm

The calibration steps are crucial and will directly affect whether the robotic arm runs normally. Please follow the process strictly.

<details>

<summary> rebot 102 leader </summary>

:::tip
**reBot 102 leader Calibration Notes**:
- When calibration starts, each servo's current position on reBot Arm 102 will be **reset to zero**
- `joint_ranges` (joint limits) are taken from the configuration file `config_rebot_arm_102_leader.py`, not from calibration data
- If a joint always seems stuck near a limit, check the `joint_ranges` configuration first
- Joint directions are defined in the configuration file. If directions don't match, modify the configuration rather than recalibrating
- reBot 102 leader uses a USB-to-UART module, typically mapped to `/dev/ttyUSB*`
- Use `ls /dev/ttyUSB*` to check the actual port number

If this is the first connection, you may get an error that `/dev/ttyACM0` cannot be found. This is because brltty is occupying the serial port. Please execute the following steps:

```bash
sudo dmesg | grep ttyUSB #Check the last line shows "disconnected"
sudo apt remove brltty #Remove brltty
```
:::

<div align="center">
    <img width={800} 
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/102_zeroposition.jpg" />
</div>

Following the prompts, move the leader arm to the zero position shown above,

```bash
sudo chmod 666 /dev/ttyUSB0

lerobot-calibrate \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader
```

Keep it still, then press Enter until calibration is complete.
After calibration, enter the following command to test the leader arm.

```bash
python ./lerobot-teleoperator-rebot-arm-102/examples/read_raw_angles.py \
      --port /dev/ttyUSB0

#If you observe terminal output similar to the following printing continuously, and when at the zero position shown above, all joint output values are 0, then leader calibration is complete.
#shoulder_pan=    0.00  shoulder_lift=    0.00  elbow_flex=    0.00  wrist_flex=    0.00  wrist_yaw=    0.00  wrist_roll=    0.00  gripper=    0.00
```

</details>

## Teleoperate


First grant permissions to the serial ports:
```bash
sudo chmod 666 /dev/ttyUSB*  # Leader arm
sudo chmod 666 /dev/ttyACM*  # Follower arm (serial bridge)
```

Run teleoperation:
```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --teleop.joint_directions='{"shoulder_pan":-1,"shoulder_lift":-1,"elbow_flex":1,"wrist_flex":1,"wrist_yaw":1,"wrist_roll":-1,"gripper":-4}'
```

## Add Cameras


<details>
<summary> If using RealSense D435i/D405 </summary>

RealSense depth cameras can provide RGB-D perception for LeRobot and are suitable for tasks such as object recognition, point cloud reconstruction, and tabletop manipulation. The recommended models here are **RealSense D405** and **RealSense D435i**.

### RealSense D405

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD405/D405.jpg" />
</div>

The RealSense D405 is a short-range stereo depth camera designed for high-precision close-range tasks such as tabletop robotic manipulation, with a typical working range of **7 cm to 50 cm**.

### RealSense D435i

<div align="center">
    <img width={420}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/RealsenseD435i/D435i_1.jpg" />
</div>

The RealSense D435i combines depth sensing, RGB imaging, and an IMU, making it suitable for mid- to close-range applications such as 3D reconstruction, SLAM, and robotic environment perception.

### 1. Switch to the Camera Branch

Current camera support is available on the `DepthCameraSupport` branch:

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
```

Confirm the current branch:

```bash
git branch --show-current
```

Expected output:

```bash
DepthCameraSupport
```

### 2. Install LeRobot in Editable Mode

If you only use RealSense:

```bash
pip install -e ".[realsense]"
```

### 3. Grant Permissions

```bash
sudo chmod a+rw /dev/bus/usb/*/*
```

### 4. Detect Cameras

```bash
lerobot-find-cameras realsense
```

This step will output:

- Camera model
- Serial number
- USB information
- Default stream configuration

### 5. RealSense Example

Dual RealSense test:

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
  --robot.cameras='{
    d435i_color: {
      type: realsense_d435i_color,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d435i_depth: {
      type: realsense_d435i_depth,
      serial_number_or_name: "419522072950",
      width: 640,
      height: 480,
      fps: 30,
      max_depth_m: 2.0,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    },
    d405_color: {
      type: realsense_d405_color,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      color_stream_format: rgb8,
      rotation: 0,
      warmup_s: 1
    },
    d405_depth: {
      type: realsense_d405_depth,
      serial_number_or_name: "409122273421",
      width: 640,
      height: 480,
      fps: 30,
      depth_alpha: 0.03,
      rotation: 0,
      warmup_s: 5
    }
  }' \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

### 6. Parameter Notes

- `depth_alpha` controls the scaling factor of the depth image and can be adjusted based on the display result and target distance range.
- If you connect three or more depth cameras, it is recommended to reduce `fps` to `15` to improve overall stability.
- It is recommended to keep the resolution at `640x480` for a better balance of stability and real-time performance.

</details>

<details>

<summary> If using Orbbec Gemini2 Depth Camera </summary>

<div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090144--orbbec-gemini-2-3d-camera.jpg" />
</div>
<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html" target="_blank" rel="noopener noreferrer" >
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

providing synchronized RGB and depth streams with precise depth-to-color alignment. Combined with stereo depth sensing and a built-in 6-axis IMU, it is well suited for robotic tasks such as object detection, 3D perception, mapping, and navigation. Its compact design and full Orbbec SDK support make it suitable for both research and real-world deployment.

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/Sensor/Camera/Orbbec_Gemini_336/orbbec336.webp" />
</div>

Gemini 336 is a new member of the Gemini 330 series. It inherits the strong depth performance of Gemini 335 and further improves depth imaging quality in reflective indoor areas, dark regions in high-dynamic scenes, and bright outdoor environments. For robotics applications, it can provide more stable, high-quality depth data for tasks such as perception, localization, and manipulation.

### 1. Switch to the Camera Branch

Current camera support is available on the `DepthCameraSupport` branch:

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
```

Confirm the current branch:

```bash
git branch --show-current
```

Expected output:

```bash
DepthCameraSupport
```

### 2. Install LeRobot in Editable Mode

If you only use Orbbec:

```bash
pip install -e ".[orbbec]"
```

### 3. Grant Permissions

```bash
sudo chmod a+rw /dev/bus/usb/*/*
```

### 4. Detect Cameras

```bash
lerobot-find-cameras orbbec
```

This step will output:

- Camera model
- Serial number
- USB information
- Default stream configuration

### 5. Orbbec Example


Single Orbbec test:



```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{
    orbbec_color: {
      type: orbbec_color,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 480,
      fps: 30,
      color_mode: rgb,
      rotation: 0,
      warmup_s: 1
    },
    orbbec_depth: {
      type: orbbec_depth,
      serial_number_or_name: "CP9JA530003A",
      width: 640,
      height: 400,
      fps: 30,
      depth_alpha: 0.2,
      rotation: 0,
      warmup_s: 5
    }
  }" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

### 6. Parameter Notes

- `depth_alpha` controls the scaling factor of the depth image. A good starting point is `0.2`, then you can fine-tune it based on the display result.
- If you connect three or more depth cameras, it is recommended to reduce `fps` to `15` for better stability.
- It is recommended to keep the resolution at `640x480` for more stable display and data transfer.

### 7. Common Issues

If you see the following error:

```bash
No Orbbec camera found for 'XXXX'
```

it usually means the serial number in the configuration does not match the currently connected device. Run:

```bash
lerobot-find-cameras orbbec
```

Then confirm the actual `serial` and update `serial_number_or_name` in your command.

**💡 Author and Contribution**

- Author: Zhang Jiaquan, Wang Wenzhao - South China Normal University

</details>

To instantiate a camera, you need a camera identifier. This identifier might change if you reboot your computer or re-plug your camera, a behavior mostly dependant on your operating system.

To find the camera indices of the cameras plugged into your system, run the following script:

```bash
lerobot-find-cameras opencv # or realsense for Intel Realsense cameras
```

The terminal will print relevant camera information.

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

You can find the pictures taken by each camera in the `~/lerobot/outputs/captured_images` directory.

:::warning
When using Intel RealSense cameras in **macOS**, you could get this error: **"Error finding RealSense cameras: failed to set power state"**. This can be solved by running the same command with `sudo` permissions. Note that using RealSense cameras in **macOS** is unstable.
:::

After that, you will be able to display the cameras on your computer while you are teleoperating by running the following code. This is useful to prepare your setup before recording your first dataset.

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

:::tip
Images in the `fourcc: "MJPG"` format are compressed. You can try higher resolutions, and you may also attempt the `YUYV` format. However, the latter will reduce the image resolution and FPS, leading to lag in the robotic arm's operation. Currently, under the `MJPG` format, it can support 3 cameras at a resolution of `1920*1080` while maintaining `30FPS`. However, connecting 2 cameras to a computer via the same USB HUB is still not recommended.
:::

If you have more cameras, you can change the `--robot.cameras` parameter to add them. You should note the format of the `index_or_path`, which is determined by the last digit of the camera ID output by `python -m lerobot.find_cameras opencv`.

For example, if you want to add a camera:

<!-- TODO: reBot multi-camera configuration command -->
```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

## Dataset Collection
<!-- vidio todo -->

<details>

<summary> If you want to save the dataset locally </summary>

<!-- TODO: reBot local data collection command -->
```bash
lerobot-record \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 
```

Among them, `repo_id` can be modified customarily, and `push_to_hub=false`. Finally, the dataset will be saved in the `~/.cache/huggingface/lerobot` directory in the home folder, where the aforementioned `seeed_rebot_b601_dm/test` folder will be created.

</details>

<details>
<summary> If you want to use the Hugging Face Hub features for uploading your dataset </summary>

- If you want to use the Hugging Face Hub features for uploading your dataset and you haven't previously done it, make sure you've logged in using a write-access token, which can be generated from the [Hugging Face settings](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Store your Hugging Face repository name in a variable to run these commands:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

Record 5 episodes and upload your dataset to the Hub:

<!-- TODO: reBot data collection and upload to Hugging Face command -->
```bash
lerobot-record \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
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

</details>

**Record Function**

The **record** function provides a suite of tools for capturing and managing data during robot operation.

**1. Data Storage**

- Data is stored using the `LeRobotDataset` format and is stored on disk during recording.
- By default, the dataset is pushed to your Hugging Face page after recording.
- To disable uploading, use: `--dataset.push_to_hub=False`.

**2. Checkpointing and Resuming**

- Checkpoints are automatically created during recording.
- To resume after an interruption, re-run the same command with: `--resume=true`

⚠️ **Important Note**: When resuming, set `--dataset.num_episodes` to the number of additional episodes to record (not the targeted total number of episodes in the dataset).
- To start recording from scratch, **manually delete** the dataset directory.

**3. Recording Parameters**

Set the flow of data recording using command-line arguments:

| Parameter | Description | Default |
|------|------|--------|
| --dataset.episode_time_s | Duration per data episode (seconds) | 60 |
| --dataset.reset_time_s | Environment reset time after each episode (seconds) | 60 |
| --dataset.num_episodes | Total episodes to record | 50 |

**4. Keyboard Controls During Recording**

Control the data recording flow using keyboard shortcuts:

| Key | Action |
|----|------|
| → (Right Arrow) | Early-stop current episode/reset; move to next. |
| ← (Left Arrow) | Cancel current episode; re-record it. |
| ESC | Stop session immediately, encode videos, and upload dataset. |

:::tip
If your keyboard presses are not responding, you may need to downgrade your pynput version, such as installing version 1.6.8.
```bash
pip install pynput==1.6.8
```
:::

**Tips for Gathering Data**

- **Task Suggestion**: Grasp objects at different locations and place them in a bin.
- **Scale**: Record ≥50 episodes (10 episodes per location).
- **Consistency**:
  - Keep cameras fixed.
  - Maintain identical grasping behavior.
  - Ensure manipulated objects are visible in camera feeds.
- **Progression**:
  - Start with reliable grasping before adding variations (new locations, grasping techniques, camera adjustments).
  - Avoid rapid complexity increases to prevent failures.

💡 **Rule of Thumb**: You should be able to do the task yourself by only looking at the camera images on the screen.

If you want to dive deeper into this important topic, you can check out the [blog post](https://huggingface.co/blog/lerobot-datasets#what-makes-a-good-dataset) we wrote on what makes a good dataset.

**Troubleshooting**

Linux-specific Issue:
If Right Arrow/Left Arrow/ESC keys are unresponsive during recording:
- Verify the `$DISPLAY` environment variable is set (see [pynput limitations](https://pynput.readthedocs.io/en/latest/limitations.html)).

## Visualize the Dataset

```bash
echo ${HF_USER}/rebot_test  
```

If you uploaded the data, you can also visualize it locally with the following command:

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/rebot_test \
  --episode-index 0 \
  --display-compressed-images=false
```

If you used `--dataset.push_to_hub=false` and didn't upload the data, you can also visualize it locally with:

```bash
lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_dm/test \
  --episode-index 0 \
  --display-compressed-images=false
```

Here, `seeed_rebot_b601_dm/test` is the custom `repo_id` name defined during data collection.

## Replay an Episode

:::tip
Unstable, can be skipped or tried.
:::

Now, try replaying the first dataset on your robot:

<!-- TODO: reBot dataset replay command -->
```bash
lerobot-replay \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.can_adapter=damiao \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.episode=0
```

At this point, the robot should perform the same actions as when you teleoperated during recording.

## Training and Evaluation

<details>
<summary>[ACT](https://huggingface.co/docs/lerobot/act) </summary>

Refer to the official tutorial [ACT](https://huggingface.co/docs/lerobot/act)

**Training**

To train a policy to control your robot, use the `python -m lerobot.scripts.train` script. Some parameters are required. Here is an example command:

**If you want to train on a local dataset, make sure the `repo_id` matches the name used during data collection and add `--policy.push_to_hub=false`.**

```bash
lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_dm/test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false\
  --steps=300000 
```

**Or use data stored remotely**

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/rebot_test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000 
```

**Command Explanation**

* **Dataset specification**: We provide the dataset via the parameter `--dataset.repo_id=${HF_USER}/rebot_test`.
* **Training steps**: We modify the number of training steps using `--steps=300000`. The algorithm defaults to 800000 steps, and you can adjust it based on the difficulty of your task and by observing the loss during training.
* **Policy type**: We provide the policy with `policy.type=act`. Similarly, you can switch between policies such as [`act`, `diffusion`, `pi0`, `pi0fast`, `pi0fast`, `sac`, `smolvla`]. This will load the configuration from `configuration_act.py`. Importantly, this policy will automatically adapt to your robot's (e.g., `laptop` and `phone`) motor states, motor actions, and the number of cameras, as this information is already stored in your dataset.
* **Device selection**: We provide `policy.device=cuda` because we are training on an Nvidia GPU, but you can use `policy.device=mps` for training on Apple Silicon.
* **Visualization tool**: We provide `wandb.enable=true` to visualize training charts using [Weights and Biases](https://docs.wandb.ai/quickstart). This is optional, but if you use it, ensure you have logged in by running `wandb login`.

**Evaluation**

You can use the `record` function from [`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) but with a policy checkpoint as input. For instance, run this command to record 10 evaluation episodes:

<!-- TODO: reBot ACT evaluation command -->
```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model
``` 

1. The `--policy.path` parameter indicates the path to the weight file of your policy training results (e.g., `outputs/train/act_rebot_test/checkpoints/last/pretrained_model`). If you upload the model training result weight file to Hub, you can also use the model repository (e.g., `${HF_USER}/act_rebot_test`).
2. The dataset name `dataset.repo_id` starts with `eval_`. This operation will separately record videos and data during evaluation, which will be saved in the folder starting with `eval_`, such as `seeed/eval_test123`.
3. If you encounter `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` during the evaluation phase, please delete the folder starting with `eval_` first and then run the program again.
4. When encountering `mean is infinity. You should either initialize with stats as an argument or use a pretrained model`, please note that keywords like `front` and `side` in the `--robot.cameras` parameter must be strictly consistent with those used when collecting the dataset.

</details>

<details>
<summary>[SmolVLA](https://huggingface.co/docs/lerobot/smolvla) </summary>

Refer to the official tutorial [SmolVLA](https://huggingface.co/docs/lerobot/smolvla)

```bash
pip install -e ".[smolvla]"
```

**Training**
```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \ # <- Use pretrained fine-tuned model
  --dataset.repo_id=${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true
```

**Evaluation**

<!-- TODO: reBot SmolVLA evaluation command -->
```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.id=follower1 \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=rebot_arm_102_leader \
  # --teleop.port=/dev/ttyUSB0 \
  # --teleop.id=rebot_arm_102_leader \
  --policy.path=HF_USER/FINETUNE_MODEL_NAME
```

</details>

<details>
<summary>[Pi0](https://huggingface.co/docs/lerobot/pi0) </summary>

Refer to the official tutorial [Pi0](https://huggingface.co/docs/lerobot/pi0) 

```bash
pip install -e ".[pi]"
```

**Training**
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

**Evaluation**

<!-- TODO: reBot Pi0 evaluation command -->
```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model
```

</details>

<details>
<summary>[Pi0.5](https://huggingface.co/docs/lerobot/pi05) </summary>

Refer to the official tutorial [Pi0.5](https://huggingface.co/docs/lerobot/pi05) 

```bash
pip install -e ".[pi]"
```

**Training**
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

**Evaluation**

<!-- TODO: reBot Pi0.5 evaluation command -->
```bash
lerobot-record \
  --robot.type=seeed_b601_dm_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.can_adapter=damiao \
  --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"},   side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30,fourcc: "MJPG"}}" \
  --robot.id=follower1 \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model
```

</details>

<details>
<summary>[GR00T N1.5](https://huggingface.co/docs/lerobot/groot) </summary>

Refer to the official documentation: [GR00T N1.5](https://huggingface.co/docs/lerobot/groot)

</details>

Training should take several hours. You will find checkpoints in the `outputs/train/act_rebot_test/checkpoints` directory.

To resume training from a checkpoint, here is an example command to resume from the `last` checkpoint of the `act_rebot_test` policy:
```bash
lerobot-train \
  --config_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

## FAQ

- If you are following this documentation tutorial, please git clone the recommended GitHub repository `https://github.com/Seeed-Projects/lerobot.git`. The repository recommended in this documentation is a verified stable version; the official LeRobot repository is continuously updated to the latest version, which may cause unforeseen issues such as different dataset versions, different commands, etc.

- If you encounter:
  ```bash
  Could not connect on port "/dev/ttyUSB0" or "/dev/ttyACM0"
  ```
  And you can see the device exists when running `ls /dev/ttyUSB*` or `ls /dev/ttyACM*`, it means you forgot to grant serial port permissions. Enter `sudo chmod 666 /dev/ttyUSB* /dev/ttyACM*` in the terminal to fix it.

- If you encounter:
  ```bash
  No valid stream found in input file. Is -1 of the desired media type?
  ```
  Please install ffmpeg 7.1.1 using `conda install ffmpeg=7.1.1 -c conda-forge`.

- Training ACT on 50 sets of data takes approximately 6 hours on a laptop with an RTX 3060 (8GB), and about 2-3 hours on computers with RTX 4090 or A100 GPUs.

- During data collection, ensure the camera position, angle, and ambient lighting are stable. Reduce the amount of unstable background and pedestrians captured by the camera, as excessive changes in the deployment environment may cause the robotic arm to fail to grasp properly.

- For the data collection command, ensure the `num-episodes` parameter is set to collect sufficient data. Do not manually pause midway, as the mean and variance of the data are calculated only after data collection is complete, which are necessary for training.

- If the program indicates it cannot read image data from the USB camera, ensure the USB camera is not connected through a hub. The USB camera must be directly connected to the device to ensure fast image transmission speed.

:::tip
If you encounter software issues or environment dependency problems that cannot be resolved, in addition to checking the FAQ section at the end of this tutorial, please promptly report the issue to the [LeRobot platform](https://github.com/huggingface/lerobot) or the [LeRobot Discord channel](https://discord.gg/8TnwDdjFGU).
:::

## References

Seeed Studio English Wiki: [How to use the SO100Arm robotic arm in Lerobot](https://wiki.seeedstudio.com/lerobot_so100m/)

TheRobotStudio Project: [SO-ARM10x](https://github.com/TheRobotStudio/SO-ARM100)

Huggingface Project: [LeRobot](https://github.com/huggingface/lerobot/tree/main)

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
