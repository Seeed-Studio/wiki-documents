---
description: This wiki provides the debugging tutorial for the StarAI Robot Arm and realizes data collection and training within the Lerobot framework.
title: Getting started with StarAI Robot Arm with LeRobot
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /lerobot_starai_arm
last_update:
  date: 9/1/2025
  author: LiShanghang
---

# Getting started with StarAI Robot Arm with LeRobot

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/IJKTeBYAG7k?si=iS-jqT27fDjeI6yX" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

| **Follower Viola** | **Leader Violin** | **Follower Cello** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png) |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Star-Arm-Viola-Violin-p-6497.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now!!! 🖱️</font></span></strong>
</a></div>

## Product Introduction

1.  **Open-Source & Easy for Secondary Development**
    This series of servo motors, provided by [Fashion Star Robotics](https://fashionrobo.com/), offers an open-source, easily customizable 6+1 degrees of freedom robotic arm solution.

2. **Dual-Arm Systems with Various Payloads** 
    The Violin serves as the leader robotic arm. When at 70% of its arm span, the follower arm Viola has an operating payload of 300g, while the follower arm Cello has an operating payload of 750g.

3. **Supported ROS2, Moveit2 and Isaac Sim**
    It supports ROS2 for publishing and subscribing to robotic arm data topics and controlling the robotic arm, and also supports MoveIt2 for inverse kinematics calculation, as well as simulation in Isaac Sim.

4.  **LeRobot Platform Integration Support**
    It's specifically designed for integration with the [LeRobot platform](https://github.com/huggingface/lerobot). This platform provides PyTorch models, datasets, and tools for imitation learning in real-world robotics tasks, including data collection, simulation, training, and deployment.

5. **Open-Source SDK**
     Supports Python and C++ SDK Development

6. **Button Hover**
    Simulates gravity compensation, allowing the robotic arm to hover at any position via a button.

7. **Modular End Effector** 
    Enables quick DIY replacement.

8.  **Abundant Learning Resources**
    We offer comprehensive open-source learning resources, including environment setup, installation and debugging guides, and custom grasping task examples to help users quickly get started and develop robotic applications.
 
9.  **Nvidia Platform Compatibility**
    Deployment is supported via the Nvidia Jetson platform.



## Specifications


| Item                 | Follower Arm \| Viola                             | Leder Arm \|Violin                                |    Follower Arm \|Cello    |
| -------------------- | ------------------------------------------------- | ------------------------------------------------- |-----------------|
| Degrees of Freedom   | 6+1                                               | 6+1                                               | 6+1             |
| Reach                | 470mm                                             | 470mm                                             | 670mm |
| Span                 | 940mm                                             | 940mm                                             | 1340mm |
| Repeatability        | 2mm                                               | -                                                 | 1mm  |
| Working Payload      | 300g (with 70% Reach)                            | -                                                 |  750g (with 70% Reach)   |
| Servos               | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 |RX18-U100H-M x3<br/> RX8-U50H-M x3<br/> RX8-U51H-M x1|
| Parallel Gripper Ki  | ✅                                                 | -                                                 | ✅   |
| Wrist Rotate         | Yes                                               | Yes                                               | Yes |
| Hold at any Position | Yes                                               | Yes (with handle button)                          |  Yes|
| Wrist Camera Mount   |Provides reference 3D printing files | | Provides reference 3D printing files
| Works with LeRobot   | ✅                                                 | ✅                                                 | ✅|
| Works with ROS 2     | ✅                                                 | ✅                                                | ✅|
| Works with MoveIt2    | ✅                                                 | ✅                                               |✅ |
| Works with Gazebo    | ✅                                                 |✅                                              |✅ |
| Communication Hub    | UC-01                                             | UC-01                                             |	UC-01 |
| Power Supply         | 12V10A/120w XT30                                   | 12V10A/120w XT30                                 |12V25A/300w XT60  |

For more information about servo motors, please visit the following link.

[RA8-U25H-M](https://fashionrobo.com/actuator-u25/23396/)

[RX18-U100H-M](https://fashionrobo.com/actuator-u100/22853/)

[RX8-U50H-M](https://fashionrobo.com/actuator-u50/136/)




## Initial environment setup

**For Ubuntu x86:**
- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**For Jetson Orin:**
- Jetson JetPack 6.0+  
- Python 3.10  
- Torch 2.6  

## Installation and Debugging

### Install LeRobot

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
git clone https://github.com/servodevelop/lerobot-starai.git
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
cd ~/lerobot-starai && pip install -e ".[feetech]"
```


For Jetson Jetpack devices (please make sure to install [Pytorch-gpu and Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson) from step 5 before executing this step):

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




### Unboxing the Robotic Arm 

Robotic Arm Kit Includes

- Leader arm
- Follower arm
- Controller (handle)
- Parallel gripper
- Installation tools (screws, hex wrench)
- Power supply ×2
- C-clamp ×2
- UC-01 debuging board ×2

UC-01 debuging board switch：

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/UC-01 debuging board switch.png" />
</div>

### Configure Arm Port

Run the following command in the terminal to find USB ports associated to your arms：

```bash
python lerobot/scripts/find_motors_bus_port.py
```

:::tip
Remember to remove the usb, otherwise the interface will not be detected.
:::

For example：

1. Example output when identifying the leader arm's port (e.g., `/dev/tty.usbmodem575E0031751` on Mac, or possibly `/dev/ttyACM0` on Linux):
2. Example output when identifying the follower arm's port (e.g., `/dev/tty.usbmodem575E0032081`on Mac, or possibly `/dev/ttyACM1` on Linux):

You might need to give access to the USB ports by running:

```bash
sudo chmod 666 /dev/ttyACM0
sudo chmod 666 /dev/ttyACM1
```

:::tip

If the ttyUSB0 serial port cannot be identified, try the following solutions:

List all USB ports.

```sh
lsusb
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate1.png" />
</div>

Once identified, check the information of the ttyusb.

```sh
sudo dmesg | grep ttyUSB
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate2.png" />
</div>

The last line indicates a disconnection because brltty is occupying the USB. Removing brltty will resolve the issue.

```sh
sudo apt remove brltty
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate3.png" />
</div>

Finally，use chmod command.

```sh
sudo chmod 666 /dev/ttyUSB0
```
:::


Open-file `lerobot-starai\lerobot\common\robot_devices\robots\configs.py`

Use the Ctrl+F to search for starai and locate the following code. Then, you need to modify the port settings of follower_arms and leader_arms to match the actual port settings.

```python
@RobotConfig.register_subclass("starai")
@dataclass
class StaraiRobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/starai"
    max_relative_target: int | None = None
    
    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB1",  #<-------- UPDATE HEARE
                interval = 100,								
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB0",  #<-------- UPDATE HEARE
                interval = 100,								
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )
```

### Set Runtime Parameters

Open-file `lerobot-starai\lerobot\common\robot_devices\robots\configs.py`

Use the Ctrl + F to search for starai and locate the following code. Then, you need modify the interval setting of follower_arms.

- Description: The faster the follower responds when the time interval becomes smaller, and more stable the follower runs when the time interval becomes larger.
- Value Range: Integer, greater than 50 and less than 2000.

It is recommended to set the interval to 100 (default value) during teleoperation for better responsiveness, and to 1000 during autonomous execution in evaluation phases to ensure more stable motion.

```python
@RobotConfig.register_subclass("starai")
@dataclass
class StaraiRobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/starai"
    max_relative_target: int | None = None

    leader_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB1",
                interval = 100, 	#<-------- UPDATE HEARE							
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )

    follower_arms: dict[str, MotorsBusConfig] = field(
        default_factory=lambda: {
            "main": StaraiMotorsBusConfig(
                port="/dev/ttyUSB0",
                interval = 100, 	#<-------- UPDATE HEARE
                motors={
                    # name: (index, model)
                    "joint1": [0, "rx8-u50"],
                    "joint2": [1, "rx8-u50"],
                    "joint3": [2, "rx8-u50"],
                    "joint4": [3, "rx8-u50"],
                    "joint5": [4, "rx8-u50"],
                    "joint6": [5, "rx8-u50"],
                    "gripper": [6, "rx8-u50"],
                },
            ),
        }
    )

```

### Calibrate

Normally, the robotic arm is pre-calibrated in factory and does not require recalibration. If a joint motor is found to remain at a limit position for a long period, please contact us to obtain the calibration file and perform recalibration again.


## Teleoperate

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/Uz-x-2P2xaE?si=HJTjALt5yFntR6-s" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Move the arm to the position shown in the diagram and set it to standby.

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Specifications.png" />
</div>

**Simple teleop**
Then you are ready to teleoperate your robot! Run this simple script (it won't connect and display the cameras):

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --robot.cameras='{}' \
  --control.type=teleoperate
```

After the program starts, the Hold button remains functional.



## Add cameras

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/-p8K_-XxW8U?si=UmYWvEyKNPpTRxDC" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

After inserting your two USB cameras, run the following script to check the port numbers of the cameras. It is important to remember that the camera must not be connected to a USB Hub; instead, it should be plugged directly into the device. The slower speed of a USB Hub may result in the inability to read image data.

```bash
python lerobot/common/robot_devices/cameras/opencv.py \
    --images-dir outputs/images_from_opencv_cameras
```

The terminal will print out the following information. For example, the laptop camera is `index 0`, and the USB camera is `index 2`.

```markdown
Mac or X86 Ubuntu detected. Finding available camera indices through scanning all indices from 0 to 60
[...]
Camera found at index 0
Camera found at index 2
[...]
Connecting cameras
OpenCVCamera(0, fps=30.0, width=640, height=480, color_mode=rgb)
OpenCVCamera(2, fps=30.0, width=640, height=480, color_mode=rgb)
Saving images to outputs/images_from_opencv_cameras
Frame: 0000 Latency (ms): 39.52
[...]
Frame: 0046 Latency (ms): 40.07
Images have been saved to outputs/images_from_opencv_cameras
```

You can find the pictures taken by each camera in the `outputs/images_from_opencv_cameras` directory, and confirm the port index information corresponding to the cameras at different positions. Then complete the alignment of the camera parameters in the `lerobot-starai/lerobot/common/robot_devices/robots/configs.py` file.

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/camera.png" />
</div>


```python
@RobotConfig.register_subclass("starai")
@dataclass
class StaraiRobotConfig(ManipulatorRobotConfig):
    calibration_dir: str = ".cache/calibration/starai"

    cameras: dict[str, CameraConfig] = field(
        default_factory=*lambda*: {
            "laptop": OpenCVCameraConfig(
                camera_index=2,             #<------ UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
            "phone": OpenCVCameraConfig(
                camera_index=0,             #<------ UPDATE HEARE
                fps=30,
                width=640,
                height=480,
            ),
        }
    )

​    mock: bool = False
  
```

Then you will be able to display the cameras on your computer while you are teleoperating：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=teleoperate \
  --control.display_data=true
```

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

## Record the dataset

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/OpaC0CA3-Mc?si=rbNhJJRkG9zngQB-" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Once you're familiar with teleoperation, you can record your first dataset.

If you want to use the Hugging Face hub features for uploading your dataset and you haven't previously done it, make sure you've logged in using a write-access token, which can be generated from the [Hugging Face settings](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Store your Hugging Face repository name in a variable to run these commands:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

:::tip
If you do not wish to use the Hugging Face Hub's dataset upload feature, you can opt for `--control.push_to_hub=false`. Additionally, replace `--control.repo_id=${HF_USER}/starai` with a custom local folder name, such as `--control.repo_id=starai/starai`. The data will be stored in the `~/.cache/huggingface/lerobot` directory under the system's home directory.
:::

Record 20 episodes and upload your dataset to the hub:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=${HF_USER}/starai \
  --control.tags='["starai","tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=20 \
  --control.display_data=true \
  --control.push_to_hub=ture
```

Don't upload to Hub:
**(Recommended, the following tutorials will mainly focus on local data)** 

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=starai/starai \#Assign a name to the local storage file yourself
  --control.tags='["starai","tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=20 \
  --control.display_data=true \
  --control.push_to_hub=false #set push_to_hub to false
```

You will see data similar to the following:
```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

```markdown
Parameter Explanations
- wormup-time-s: It refers to the initialization time.
- episode-time-s: It represents the time for collecting data each time.
- reset-time-s: It is the preparation time between each data collection.
- num-episodes: It indicates how many groups of data are expected to be collected.
- push-to-hub: It determines whether to upload the data to the HuggingFace Hub. 
```

:::tip

- **Again**: "If you want to save the data locally (`--control.push_to_hub=false`), replace `--control.repo_id=${HF_USER}/starai` with a custom local folder name, such as `--control.repo_id=starai/starai`. It will then be stored in the system's home directory at `~/.cache/huggingface/lerobot`."

- Note: You can resume recording by adding `--control.resume=true`. Also if you didn't push your dataset yet, add `--control.local_files_only=true`. You will need to manually delete the dataset directory if you want to start recording from scratch.

- If you uploaded your dataset to the hub with `--control.push_to_hub=true`, you can [visualize your dataset online](https://huggingface.co/spaces/lerobot/visualize_dataset) by copy pasting your repo id given by:

- Press right arrow → at any time during episode recording to early stop and go to resetting. Same during resetting, to early stop and to go to the next episode recording.

- Press left arrow ← at any time during episode recording or resetting to early stop, cancel the current episode, and re-record it.

- Press escape ESC at any time during episode recording to end the session early and go straight to video encoding and dataset uploading.

- Once you're comfortable with data recording, you can create a larger dataset for training. A good starting task is grasping an object at different locations and placing it in a bin. We suggest recording at least 50 episodes, with 10 episodes per location. Keep the cameras fixed and maintain consistent grasping behavior throughout the recordings. Also make sure the object you are manipulating is visible on the camera's. A good rule of thumb is you should be able to do the task yourself by only looking at the camera images.

- In the following sections, you’ll train your neural network. After achieving reliable grasping performance, you can start introducing more variations during data collection, such as additional grasp locations, different grasping techniques, and altering camera positions.

- Avoid adding too much variation too quickly, as it may hinder your results.

- On Linux, if the left and right arrow keys and escape key don't have any effect during data recording, make sure you've set the $DISPLAY environment variable. See [pynput limitations](https://pynput.readthedocs.io/en/latest/limitations.html#linux).

:::


## Visualize the dataset

The dataset is saved locally. You can visualize it locally with:

```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id starai/starai \
```

Here, `starai/starai` is the custom `repo_id` name defined when collecting data.

## Replay an episode

Now try to replay the first episode on your robot:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=replay \
  --control.fps=30 \
  --control.repo_id=starai/starai \
  --control.episode=0 \# 0 is the first episode
  --control.local_files_only=true
```

:::tip
The parameter `--control.local_files_only=true` is used to instruct the program to utilize local datasets rather than those from the Hub.
:::

## Train a policy

To train a policy to control your robot, use the `python lerobot/scripts/train.py` script. A few arguments are required. Here is an example command:

```bash
python lerobot/scripts/train.py \
  --dataset.repo_id=starai/starai \
  --policy.type=act \
  --output_dir=outputs/train/act_starai \
  --job_name=act_starai \
  --policy.device=cuda \
  --wandb.enable=false
```

Let's explain it:

1. We use our local dataset as argument `--dataset.repo_id=starai/starai`.
2. We provide the policy using `policy.type=act`, which will load the configuration from [`lerobot-starai/lerobot/common/policies/act/configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/common/policies/act/configuration_act.py). Currently, ACT has been tested, but you can also try other policies such as diffusion, pi0, pi0fast, tdmpc, and vqbet.
3. We provided policy.device=cuda since we are training on a Nvidia GPU, but you could use policy.device=mps to train on Apple silicon.
4. We provided `wandb.enable=true` to use [Weights and Biases](https://docs.wandb.ai/quickstart) for visualizing training plots. This is optional but if you use it, make sure you are logged in by running `wandb login`.

If you want to train on a local dataset, make sure the `repo_id` matches the one used during data collection. Training should take several hours. You will find checkpoints in`outputs/train/act_starai/checkpoints` .

To resume training from a checkpoint, below is an example command to resume from last checkpoint of the `act_starai` :

```bash
python lerobot/scripts/train.py \
  --config_path=outputs/train/act_starai/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

## Evaluate your policy

You can use the `record` function from [`lerobot/scripts/control_robot.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/scripts/control_robot.py) , but with a policy checkpoint as input. For instance, run this command to record 10 evaluation episodes:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=starai/eval_act_starai \
  --control.tags='["tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=0 \#Set the reset time to 0 to skip the reset phase and ensure continuous operation.
  --control.num_episodes=10 \
  --control.push_to_hub=false \#Choose don't upload to Hub
  --control.policy.path=outputs/train/act_starai/checkpoints/last/pretrained_model
```

As you can see, this is almost identical to the command previously used to record the training dataset. There are only two differences:

1. The `--control.policy.path` parameter has been added to indicate the path of your policy checkpoint (for example, `outputs/train/act_starai/checkpoints/last/pretrained_model`).
2. The name of the evaluation dataset **must** start with `eval` to reflect that you are running inference (for example, `--control.repo_id=starai/eval_act_starai`). This operation will record videos and data specifically during evaluation and save them to `eval_act_starai`.

:::warning
If an error occurs when you run the evaluation command for the second time, you need to delete the corresponding `eval_act_starai` file to ensure that there are no files with the same name under the directory `~/.cache/huggingface/lerobot/starai/`.
:::

:::tip
If you upload your model checkpoint to the Hub, you can also use the model repository (for example, `--control.repo_id=${HF_USER}/eval_act_starai`), while setting `--control.push_to_hub=true`.
:::

## FAQ

- If you are following this documentation/tutorial, please git clone the recommended GitHub repository `git clone https://github.com/servodevelop/lerobot-starai.git`.

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

- If the following problem occurs, it means that your computer does not support this video codec format. You need to modify line 134 in the file `lerobot-starai/lerobot/common/datasets/video_utils.py` by changing the value of `vcodec: str = "libsvtav1"` to `libx264` or `libopenh264`. Different computers may require different parameters, so you can try various options. [Issues 705](https://github.com/huggingface/lerobot/issues/705)
  
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

- If you find bug like `AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?`, You can downgrade the rerun version to resolve the issue.

```bash
pip3 install rerun-sdk==0.23
```

:::tip
If you encounter software issues or environment dependency problems that cannot be resolved, in addition to checking the FAQ section at the end of this tutorial, please promptly report the issue to the [LeRobot platform](https://github.com/huggingface/lerobot) or the [LeRobot Discord channel](https://discord.gg/8TnwDdjFGU).
:::


## Citation

Seeedstudio English Wiki document：[How to use the SO10xArm robotic arm in the latest version of Lerobot](https://wiki.seeedstudio.com/lerobot_so100m_new/)

lerobot-starai github: [lerobot-starai](https://github.com/Welt-liu/lerobot-starai)

STEP: [STEP](https://github.com/Welt-liu/star-arm-moveit2/tree/main/hardware)

URDF: [URDF](https://github.com/Welt-liu/star-arm-moveit2/tree/main/src/cello_description)

StarAI Robot Arm moveit2: [star-arm-moveit2](https://github.com/Welt-liu/star-arm-moveit2)

Huggingface Project: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

ACT or ALOHA: [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware](https://tonyzhaozh.github.io/aloha/)

VQ-BeT: [VQ-BeT: Behavior Generation with Latent Actions](https://sjlee.cc/vq-bet/)

Diffusion Policy: [Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

TD-MPC: [TD-MPC](https://www.nicklashansen.com/td-mpc/)


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


