---
description: 本 wiki 提供了 StarAI 机械臂的调试教程，并在 Lerobot 框架内实现数据收集和训练。
title: LeRobot 中的 StarAI 机械臂
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /cn/lerobot_starai_arm
last_update:
  date: 9/16/2025
  author: LiShanghang
---

# 使用 LeRobot 开始 StarAI 机械臂

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/IJKTeBYAG7k?si=iS-jqT27fDjeI6yX" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

| **从动臂 Viola** | **主动臂 Violin** | **从动臂 Cello** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png) |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Star-Arm-Viola-Violin-p-6497.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买!!! 🖱️</font></span></strong>
</a></div>

## 产品介绍

1. **开源且对开发者友好**
   这是来自[Fishion Star Technology Limited](https://fashionrobo.com/)的开源、对开发者友好的 6+1 自由度机械臂解决方案。
2. **与 LeRobot 集成**
   专为与[LeRobot 平台](https://github.com/huggingface/lerobot)集成而设计，该平台提供 PyTorch 模型、数据集和工具，用于真实世界机器人任务中的模仿学习——包括数据收集、仿真、训练和部署。
3. **全面的学习资源**
   提供全面的开源学习资源，如组装和校准指南，以及示例自定义抓取任务，帮助用户快速入门和开发机器人应用。
4. **兼容 Nvidia**
   支持在 reComputer Mini J4012 Orin NX 16GB 平台上部署。

## 主要特性

- 即开即用——无需组装。只需开箱即可进入 AI 世界。
- 6+1 自由度和 470mm 工作半径——为多功能性和精度而构建。
- 双无刷总线舵机驱动——平滑、静音且强劲，载荷可达 300g。
- 平行夹爪，最大开口 66mm——模块化指尖，便于快速更换。
- 独家悬停锁定技术——一键即可将主动臂瞬间固定在任何位置。

## 规格参数

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.jpg" />
</div>

| 项目                 | 从动臂 \| Viola                             | 主动臂 \|Violin                                |    从动臂 \|Cello    |
| -------------------- | ------------------------------------------------- | ------------------------------------------------- |-----------------|
| 自由度   | 6+1                                               | 6+1                                               | 6+1             |
| 工作半径                | 470mm                                             | 470mm                                             | 670mm |
| 跨度                 | 940mm                                             | 940mm                                             | 1340mm |
| 重复精度        | 2mm                                               | -                                                 | 1mm  |
| 工作载荷      | 300g（70%工作半径）                            | -                                                 |  750g（70%工作半径）   |
| 舵机               | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 | RX8-U50H-M x2<br/>RA8-U25H-M x4<br/>RA8-U26H-M x1 |RX18-U100H-M x3<br/> RX8-U50H-M x3<br/> RX8-U51H-M x1|
| 平行夹爪套件  | ✅                                                 | -                                                 | ✅   |
| 腕部旋转         | 是                                               | 是                                               | 是 |
| 任意位置保持 | 是                                               | 是（带手柄按钮）                          |  是|
| 腕部相机安装   |提供参考 3D 打印文件 | | 提供参考 3D 打印文件
| 兼容 LeRobot   | ✅                                                 | ✅                                                 | ✅|
| 兼容 ROS 2     | ✅                                                 | ✅                                                | ✅|
| 兼容 MoveIt2    | ✅                                                 | ✅                                               |✅ |
| 兼容 Gazebo    | ✅                                                 |✅                                              |✅ |
| 通信集线器    | UC-01                                             | UC-01                                             | UC-01 |
| 电源         | 12V10A/120w XT30                                   | 12V10A/120w XT30                                 |12V25A/300w XT60  |

有关舵机的更多信息，请访问以下链接。

[RA8-U25H-M](https://fashionrobo.com/actuator-u25/23396/)

[RX18-U100H-M](https://fashionrobo.com/actuator-u100/22853/)

[RX8-U50H-M](https://fashionrobo.com/actuator-u50/136/)

## 初始环境设置

**对于 Ubuntu x86：**

- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**对于 Jetson Orin：**

- Jetson JetPack 6.0+  
- Python 3.10  
- Torch 2.6  

## 安装和调试

### 安装 LeRobot

需要根据您的 CUDA 版本安装 pytorch 和 torchvision 等环境。

1. 安装 Miniconda：
对于 Jetson：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

或者，对于 X86 Ubuntu 22.04：

```bash
mkdir -p ~/miniconda3
cd miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
conda init --all
```

2. 为 lerobot 创建并激活一个新的 conda 环境

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3. 克隆 Lerobot：

```bash
git clone https://github.com/Seeed-Projects/lerobot-starai.git ~/lerobot
```

切换到 starai-arm-develop 分支。

```bash
git checkout starai-arm-develop
```

4. 使用 miniconda 时，在您的环境中安装 ffmpeg：

```bash
conda install ffmpeg -c conda-forge
```

:::tip
这通常会为您的平台安装使用 libsvtav1 编码器编译的 ffmpeg 7.X。如果不支持 libsvtav1（使用 ffmpeg -encoders 检查支持的编码器），您可以：

- [在任何平台上] 使用以下命令显式安装 ffmpeg 7.X：

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

- [仅在 Linux 上] 安装 ffmpeg 构建依赖项并从源代码编译带有 libsvtav1 的 ffmpeg，并确保使用 which ffmpeg 对应您安装的 ffmpeg 二进制文件。

:::

5. 安装带有 feetech 电机依赖项的 LeRobot：

```bash
cd ~/lerobot && pip install -e ".[starai]"
```

对于 Jetson Jetpack 设备（请确保在执行此步骤之前从第 5 步安装[Pytorch-gpu 和 Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch)）：

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV 
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

6. 检查 Pytorch 和 Torchvision

由于通过 pip 安装 lerobot 环境会卸载原有的 Pytorch 和 Torchvision 并安装 CPU 版本的 Pytorch 和 Torchvision，您需要在 Python 中进行检查。

```python
import torch
print(torch.cuda.is_available())
```

如果打印结果为 False，您需要根据[官方网站教程](https://pytorch.org/index.html)重新安装 Pytorch 和 Torchvision。

如果您使用的是 Jetson 设备，请根据[此教程](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)安装 Pytorch 和 Torchvision。

### 机械臂开箱

机械臂套件包含

- 主动臂
- 从动臂
- 控制器（手柄）
- 平行夹爪
- 安装工具（螺丝、内六角扳手）
- 电源 ×2
- C 型夹 ×2
- UC-01 调试板 ×2

UC-01 调试板开关：

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/UC-01 debuging board switch.png" />
</div>

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/C0DsNSNl0dI?si=HQzFXNwGEEqdXz3R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 配置机械臂端口

进入`~/lerobot`目录：

```bash
cd ~/lerobot
```

在终端中运行以下命令来查找与您的机械臂关联的 USB 端口：

```bash
lerobot-find-port
```

:::tip
记住要拔掉 usb，否则无法检测到接口。
:::

例如：

1. 识别主动臂端口时的示例输出（例如，Mac 上的`/dev/tty.usbmodem575E0031751`，或 Linux 上可能的`/dev/ttyUSB0`）：2. 识别从动臂端口时的示例输出（例如，Mac 上的 `/dev/tty.usbmodem575E0032081`，或 Linux 上可能的 `/dev/ttyUSB1`）：

:::tip
如果无法识别 ttyUSB0 串口，请尝试以下解决方案：

列出所有 USB 端口。

```sh
lsusb
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate1.png" />
</div>

识别后，检查 ttyusb 的信息。

```sh
sudo dmesg | grep ttyUSB
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate2.png" />
</div>

最后一行显示断开连接，因为 brltty 正在占用 USB。移除 brltty 将解决此问题。

```sh
sudo apt remove brltty
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate3.png" />
</div>

最后，使用 chmod 命令。

```sh
sudo chmod 777 /dev/ttyUSB*
```

:::

您可能需要通过运行以下命令来授予对 USB 端口的访问权限：

```bash
sudo chmod 666 /dev/ttyUSB*
```

## 校准

### 初始校准

请将每个关节左右旋转到相应位置。

### 重新校准

按照屏幕提示：输入字母"c"并按回车键。

以下是参考值。正常情况下，实际限位参考值应在这些参考值的 **±10°** 范围内。

| 舵机 ID | 下角度限制 (°) | 上角度限制 (°) | 备注                                          |
| -------- | --------------------- | --------------------- | ---------------------------------------------- |
| motor\_0 | -180°                 | 180°                  | 旋转到限位位置                   |
| motor\_1 | -90°                  | 90°                   | 旋转到限位位置                   |
| motor\_2 | -90°                  | 90°                   | 旋转到限位位置                   |
| motor\_3 | -180°                 | 180°                  | 无限制；旋转到参考角度限制 |
| motor\_4 | -90°                  | 90°                   | 旋转到限位位置                   |
| motor\_5 | -180°                 | 180°                  | 无限制；旋转到参考角度限制 |
| motor\_6 | 0°                    | 100°                  | 旋转到限位位置                   |

:::tip
以 PC（Linux）和 Jetson 板为例，`第一个`插入的 USB 设备将映射到 `ttyUSB0`，`第二个`插入的 USB 设备将映射到 `ttyUSB1`。

运行代码前请注意主从机械臂的映射接口。
:::

#### 主控机械臂

将主控机械臂连接到 `/dev/ttyUSB0`，或修改 `--teleop.port` 参数，然后执行：

```bash
lerobot-calibrate     --teleop.type=starai_violin --teleop.port=/dev/ttyUSB0 --teleop.id=my_awesome_staraiviolin_arm
```

#### 从动机械臂

将从动机械臂连接到 `/dev/ttyUSB1`，或修改 `--teleop.port` 参数，然后执行：

```bash
lerobot-calibrate     --robot.type=starai_viola --robot.port=/dev/ttyUSB1 --robot.id=my_awesome_staraiviola_arm
```

运行命令后，您需要**手动移动机械臂**，让每个关节达到其**限位位置**。终端将显示记录的范围数据。完成此操作后，按回车键。

:::tip
校准文件将保存到以下路径：`~/.cache/huggingface/lerobot/calibration/robots` 和 `~/.cache/huggingface/lerobot/calibration/teleoperators`。
:::

### 双臂校准设置

<details>
<summary> 教程 </summary>

#### 主控机械臂

将 `left_arm_port` 连接到 `/dev/ttyUSB0`，将 `right_arm_port` 连接到 `/dev/ttyUSB2`，或修改 `--teleop.left_arm_port` 和 `--teleop.right_arm_port` 参数，然后执行：

```bash
lerobot-calibrate     --teleop.type=bi_starai_leader  --teleop.left_arm_port=/dev/ttyUSB0  --teleop.right_arm_port=/dev/ttyUSB2  --teleop.id=bi_starai_leader
```

#### 从动机械臂

将 `left_arm_port` 连接到 `/dev/ttyUSB1`，将 `right_arm_port` 连接到 `/dev/ttyUSB3`，或修改 `--robot.left_arm_port` 和 `--robot.right_arm_port` 参数，然后执行：

```bash
lerobot-calibrate     --robot.type=bi_starai_follower  --robot.left_arm_port=/dev/ttyUSB1  --robot.right_arm_port=/dev/ttyUSB3 --robot.id=bi_starai_follower
```

:::tip

单臂和双臂设置的区别在于 `--teleop.type` 和 `--robot.type` 参数。此外，双臂设置需要为左臂和右臂分别使用独立的 USB 端口，总共四个 USB 端口：`--teleop.left_arm_port`、`--teleop.right_arm_port`、`--robot.left_arm_port` 和 `--robot.right_arm_port`。

如果使用双臂设置，您需要手动修改机械臂文件类型 `--teleop.type` 和 `--robot.type`，以及 USB 端口 `--teleop.left_arm_port`、`--teleop.right_arm_port`、`--robot.left_arm_port` 和 `--robot.right_arm_port`，以适应远程操作、数据收集、训练和评估命令。

:::

</details>

## 远程操作

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/Uz-x-2P2xaE?si=HJTjALt5yFntR6-s" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

将机械臂移动到图中所示位置并设置为待机状态。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Specifications.png" />
</div>

然后您就可以远程操作您的机器人了（不会显示摄像头）！运行这个简单的脚本：

```bash
lerobot-teleoperate \
    --robot.type=starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm
```

<details>
<summary> 双臂 </summary>

```bash
lerobot-teleoperate \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_follower \
    --teleop.type=bi_starai_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_leader
```

</details>

远程操作命令将自动检测以下参数：

1. 识别任何缺失的校准并启动校准程序。
2. 连接机器人和远程操作设备并开始远程操作。

程序启动后，悬停锁定技术保持功能正常。

## 添加摄像头

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/-p8K_-XxW8U?si=UmYWvEyKNPpTRxDC" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

插入两个 USB 摄像头后，运行以下脚本检查摄像头的端口号。重要的是要记住，摄像头不能连接到 USB 集线器；相反，应该直接插入设备。USB 集线器的较慢速度可能导致无法读取图像数据。

```bash
lerobot-find-cameras opencv # or realsense for Intel Realsense cameras
```

终端将打印出以下信息。例如，笔记本电脑摄像头是 `index 2`，USB 摄像头是 `index 4`。

```markdown
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ /dev/video2
  Type: OpenCV
  Id: /dev/video2
  Backend api: V4L2
  Default stream profile:
    Format: 0.0
    Width: 640
    Height: 480
    Fps: 30.0
--------------------
Camera #1:
  Name: OpenCV Camera @ /dev/video4
  Type: OpenCV
  Id: /dev/video4
  Backend api: V4L2
  Default stream profile:
    Format: 0.0
    Width: 640
    Height: 360
    Fps: 30.0
--------------------

Finalizing image saving...
Image capture finished. Images saved to outputs/captured_images
```

您可以在 `outputs/images_from_opencv_cameras` 目录中找到每个摄像头捕获的图像，并验证不同位置摄像头对应的端口索引信息。

确认外部摄像头后，将下面的摄像头信息替换为您的实际摄像头信息，您就能够在远程操作期间在计算机上显示摄像头：

```bash
lerobot-teleoperate \
    --robot.type=starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30}}" \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true

```

<details>
<summary> 双臂 </summary>

```bash
lerobot-teleoperate \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_follower \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30}}" \
    --teleop.type=bi_starai_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_leader \
    --display_data=true
```

</details>

:::tip
如果您发现这样的错误。

<div align="center">
    <img width={800}    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

您可以降级 rerun 版本来解决此问题。

```bash
pip3 install rerun-sdk==0.23
```

:::

## 记录数据集

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/OpaC0CA3-Mc?si=rbNhJJRkG9zngQB-" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

一旦您熟悉了遥控操作，就可以记录您的第一个数据集。

如果您想使用 Hugging Face hub 功能来上传数据集，并且之前没有这样做过，请确保您已使用写入访问令牌登录，该令牌可以从 [Hugging Face 设置](https://huggingface.co/settings/tokens) 生成：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

将您的 Hugging Face 仓库名称存储在变量中以运行这些命令：

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

记录 10 个回合并将您的数据集上传到 hub：

```bash
lerobot-record \
    --robot.type=starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30}}" \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

<details>
<summary> 双臂 </summary>

```bash
lerobot-record \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_follower \
    --teleop.type=bi_starai_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30}}" \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/record-test \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=True \
    --dataset.single_task="Grab the black cube"
```

:::tip
为了区分单臂和双臂设置，这里的 `--dataset.repo_id` 命名为 `starai/record-test_bi_arm`。
:::

</details>

:::tip
如果您不想使用 Hugging Face Hub 数据集上传功能，可以选择 `--dataset.push_to_hub=false`。同时，将 `--dataset.repo_id=${HF_USER}/starai` 替换为自定义的本地文件夹名称，例如 `--dataset.repo_id=starai/record-test`。数据将存储在系统主目录下的 `~/.cache/huggingface/lerobot` 中。
:::

不上传到 Hub：
**（推荐，以下教程将专注于本地数据）**

```bash
lerobot-record \
    --robot.type=starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30}}" \
    --teleop.type=starai_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_awesome_staraiviolin_arm \
    --display_data=true \
    --dataset.repo_id=starai/record-test \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=False \
    --dataset.single_task="Grab the black cube"
```

<details>
<summary> 双臂 </summary>

```bash
lerobot-record \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_follower \
    --teleop.type=bi_starai_leader \
    --teleop.left_arm_port=/dev/ttyUSB0 \
    --teleop.right_arm_port=/dev/ttyUSB2 \
    --teleop.id=bi_starai_leader \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30}}" \
    --display_data=true \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=10 \
    --dataset.push_to_hub=False \
    --dataset.single_task="Grab the black cube"
```

:::tip
为了区分单臂和双臂设置，这里的 `--dataset.repo_id` 命名为 `starai/record-test_bi_arm`。
:::

</details>

- `record` 提供了一套在机器人操作期间捕获和管理数据的工具：

#### 1. 数据存储

- 数据以 `LeRobotDataset` 格式存储，并在记录过程中保存到磁盘。

#### 2. 检查点和恢复

- 检查点在记录过程中自动创建。
- 如果出现问题，您可以通过使用 `--resume=true` 重新运行相同命令来恢复。恢复记录时，您必须将 `--dataset.num_episodes` 设置为**要记录的额外回合数**，而不是数据集中的目标总回合数！
- 要从头开始记录，请**手动删除**数据集目录。

#### 3. 记录参数

使用命令行参数设置数据记录工作流：

```markdown
Parameter Description
- warmup-time-s: The initialization time.
- episode-time-s: The duration for each data collection session.
- reset-time-s: The preparation time between each data collection.
- num-episodes: The expected number of data sets to collect.
- push-to-hub: Determines whether to upload the data to HuggingFace Hub.
```

#### 4. 记录期间的键盘控制

使用键盘快捷键控制数据记录工作流：

- 按**右箭头键（→）**：提前停止当前回合或重置时间，然后移动到下一个回合。
- 按**左箭头键（←）**：取消当前回合并重新记录。
- 按**ESC**：立即停止会话，编码视频并上传数据集。

:::tip
在 Linux 上，如果在数据记录期间左右箭头键和 escape 键无效，请确保设置了 $DISPLAY 环境变量。请参阅 pynput 限制。

一旦您熟悉了数据记录，就可以创建更大的数据集进行训练。一个好的起始任务是在不同位置抓取物体并将其放入小盒子中。我们建议至少记录 50 个回合，每个位置 10 个回合。保持相机固定，在整个记录过程中保持一致的抓取行为。同时，确保您操作的物体在相机中可见。一个好的经验法则是，您应该能够仅通过查看相机图像来完成任务。
:::

## 重放回合

现在尝试在您的机器人上重放第一个回合：

```bash
lerobot-replay \
    --robot.type=starai_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_awesome_staraiviola_arm \
    --dataset.repo_id=starai/record-test \
    --dataset.episode=1 # choose the episode you want to replay
```

<details>
<summary> 双臂 </summary>

```bash
lerobot-replay \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.id=bi_starai_follower \
    --dataset.repo_id=starai/record-test_bi_arm \
    --dataset.episode=0 # choose the episode you want to replay
```

</details>

## 训练策略

要训练策略来控制您的机器人，这里是一个示例命令：

```bash
lerobot-train \
  --dataset.repo_id=starai/record-test \
  --policy.type=act \
  --output_dir=outputs/train/act_viola_test \
  --job_name=act_viola_test \
  --policy.device=cuda \
  --wandb.enable=False \
  --policy.repo_id=starai/my_policy
```

<details>
<summary> 双臂 </summary>

```bash
lerobot-train \
  --dataset.repo_id=starai/record-test_bi_arm \
  --policy.type=act \
  --output_dir=outputs/train/act_bi_viola_test \
  --job_name=act_bi_viola_test \
  --policy.device=cuda \
  --wandb.enable=False \
  --policy.repo_id=starai/my_policy
```

</details>

1. `policy.type` 支持输入 `diffusion,pi0,pi0fast`
1. 我们提供数据集作为参数：`dataset.repo_id=starai/record-test`。
2. 我们将从 [`configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/src/lerobot/policies/act/configuration_act.py) 加载配置。重要的是，此策略将自动适应机器人的电机状态、电机动作和相机数量，并将保存在您的数据集中。
3. 我们提供 `wandb.enable=true` 来使用 [Weights and Biases](https://docs.wandb.ai/quickstart) 可视化训练图表。这是可选的，但如果您使用它，请确保您已通过运行 `wandb login` 登录。

从特定检查点恢复训练。

```bash
lerobot-train \
  --config_path=outputs/train/act_bi_viola_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

<details>
<summary>如果训练 [SmolVLA 策略](https://huggingface.co/docs/lerobot/smolvla) 命令： </summary>

```bash
pip install -e ".[smolvla]"
```

### 训练

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

### 评估

```bash
lerobot-record \
  --robot.type=starai_viola \
  --robot.port=/dev/ttyUSB1 \
  --robot.id=my_awesome_staraiviola_arm \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30}}" \
  --dataset.single_task="Grasp a lego block and put it in the bin." \ # <- Use the same task description you used in your dataset recording
  --dataset.repo_id=${HF_USER}/eval_DATASET_NAME_test \ 
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=so100_leader \
  # --teleop.port=/dev/ttyACM0 \
  # --teleop.id=my_red_leader_arm \
  --policy.path=HF_USER/FINETUNE_MODEL_NAME # <- Use your fine-tuned model```

</details>


<details>
<summary>如果训练 [Libero 策略](https://huggingface.co/docs/lerobot/libero) 命令：</summary>

LIBERO 是一个专为研究终身机器人学习而设计的基准测试。其理念是机器人不会只在工厂中进行一次预训练，它们需要随着时间的推移与人类用户持续学习和适应。这种持续适应被称为决策制定中的终身学习（LLDM），这是构建真正个性化助手机器人的关键步骤。

  - [LIBERO 论文](https://arxiv.org/abs/2306.03310)
  - [原始 LIBERO 仓库](https://github.com/Lifelong-Robot-Learning/LIBERO)

LIBERO 包含五个任务套件：
- LIBERO-Spatial (libero_spatial) – 需要空间关系推理的任务。

- LIBERO-Object (libero_object) – 以操作不同物体为中心的任务。

- LIBERO-Goal (libero_goal) – 目标条件任务，机器人必须适应变化的目标。

- LIBERO-90 (libero_90) – 来自 LIBERO-100 集合的 90 个短期任务。

- LIBERO-Long (libero_10) – 来自 LIBERO-100 集合的 10 个长期任务。

这些套件总共涵盖 130 个任务，从简单的物体操作到复杂的多步骤场景。LIBERO 旨在随时间增长，并作为社区测试和改进终身学习算法的共享基准。

## 使用 LIBERO 进行训练

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


## 使用 LIBERO 进行评估

要安装 LIBERO，在遵循 LeRobot 官方说明后，只需执行：`pip install -e ".[libero]"`

### 单套件评估：

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object \
  --eval.batch_size=2 \
  --eval.n_episodes=3
```

- `--env.task` 选择套件（libero_object、libero_spatial 等）。

- `--eval.batch_size` 控制并行运行的环境数量。

- `--eval.n_episodes` 设置总共运行的回合数。

### 多套件评估

```bash
lerobot-eval \
  --policy.path="your-policy-id" \
  --env.type=libero \
  --env.task=libero_object,libero_spatial \
  --eval.batch_size=1 \
  --eval.n_episodes=2
```

- 向 `--env.task` 传递逗号分隔的列表以进行多套件评估。



</details>



## 评估您的策略

运行以下命令来记录 10 个评估回合：

```bash
lerobot-record  \
  --robot.type=starai_viola \
  --robot.port=/dev/ttyUSB1 \
  --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30}}" \
  --robot.id=my_awesome_staraiviola_arm \
  --display_data=false \
  --dataset.repo_id=starai/eval_record-test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_viola_test/checkpoints/last/pretrained_model
  # <- Teleop optional if you want to teleoperate in between episodes \
  # --teleop.type=starai_violin \
  # --teleop.port=/dev/ttyUSB0 \
  # --teleop.id=my_awesome_leader_arm \
```

<details>
<summary> 双臂 </summary>

```bash
lerobot-record  \
    --robot.type=bi_starai_follower \
    --robot.left_arm_port=/dev/ttyUSB1 \
    --robot.right_arm_port=/dev/ttyUSB3 \
    --robot.cameras="{ up: {type: opencv, index_or_path: /dev/video2, width: 1280, height: 720, fps: 30},front: {type: opencv, index_or_path: /dev/video4, width: 1280, height: 720, fps: 30}}" \
    --robot.id=bi_starai_follower \
    --display_data=false \
    --dataset.repo_id=starai/eval_record-test_bi_arm \
    --dataset.single_task="test" \
    --policy.path=outputs/train/act_bi_viola_test/checkpoints/last/pretrained_model
```

</details>

如您所见，这与之前用于记录训练数据集的命令几乎相同，只有几处更改：

1. `--policy.path` 参数，指示您训练的策略权重文件的路径（例如，`outputs/train/act_viola_test/checkpoints/last/pretrained_model`）。如果您已将模型权重上传到 Hub，也可以使用模型仓库（例如，`${HF_USER}/starai`）。

2. 评估数据集的名称 `dataset.repo_id` 以 `eval_` 开头。此操作将专门为评估阶段记录视频和数据，这些数据将保存在以 `eval_` 开头的文件夹中，例如 `starai/eval_record-test`。

3. 如果在评估阶段遇到 `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/starai/eval_xxxx'`，请删除以 `eval_` 开头的文件夹并重新运行程序。

4. 当遇到 `mean is infinity. You should either initialize with stats as an argument or use a pretrained model` 时，请确保 `--robot.cameras` 参数中的关键词（如 `up` 和 `front`）与数据收集阶段使用的关键词严格一致。

## 常见问题

- 如果您使用本文档中的教程，请 `git clone` 推荐的 GitHub 仓库：`https://github.com/servodevelop/lerobot.git`。

- 如果遥控操作正常工作但带摄像头的遥控操作不显示图像界面，请参考[这里](https://github.com/huggingface/lerobot/pull/757/files)。

- 如果在数据集遥控操作期间遇到 libtiff 问题，请更新 libtiff 版本。

  ```bash
  conda install libtiff==4.5.0  # for Ubuntu 22.04, use libtiff==4.5.1
  ```

- 安装 LeRobot 后，可能会自动卸载 GPU 版本的 PyTorch，因此您需要手动安装 torch-gpu。

- 对于 Jetson，请先安装 [PyTorch 和 Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)，然后再运行 `conda install -y -c conda-forge ffmpeg`，否则在编译 torchvision 时会出现版本不匹配问题。

- 在 3060 8GB 笔记本电脑上训练 50 个回合的 ACT 数据大约需要 6 小时，而在 4090 或 A100 计算机上训练 50 个回合大约需要 2-3 小时。

- 在数据收集期间，确保摄像头位置和角度的稳定性，以及环境照明，并尽量减少摄像头捕获的不稳定背景和行人。否则，部署环境的显著变化可能导致机械臂无法正常抓取物体。

- 数据收集命令中的 `num-episodes` 应确保充分的数据收集，不应中途手动暂停。这是因为数据的均值和方差只有在数据收集完成后才会计算，这对训练是必要的。

- 如果程序提示无法读取 USB 摄像头图像数据，请确保 USB 摄像头没有通过 Hub 连接。USB 摄像头必须直接连接到设备以确保快速的图像传输速率。

## 引用

StarAI 机械臂 ROS2 Moveit2：[star-arm-moveit2](https://wiki.seeedstudio.com/cn/starai_arm_ros_moveit/)

lerobot-starai github：[lerobot-starai](https://github.com/servodevelop/lerobot.git)

STEP：[STEP](https://github.com/Welt-liu/star-arm-moveit2/tree/main/hardware)

URDF：[URDF](https://github.com/Welt-liu/star-arm-moveit2/tree/main/src/cello_description)

Huggingface 项目：[Lerobot](https://github.com/huggingface/lerobot/tree/main)

ACT 或 ALOHA：[Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware](https://tonyzhaozh.github.io/aloha/)

VQ-BeT：[VQ-BeT: Behavior Generation with Latent Actions](https://sjlee.cc/vq-bet/)

Diffusion Policy：[Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

TD-MPC：[TD-MPC](https://www.nicklashansen.com/td-mpc/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
