---
description: 本维基提供华馨京 StarAI 机械臂的调试教程，并在 Lerobot 框架内实现数据收集和训练。
title: 基于 LeRobot 的华馨京 StarAI 机械臂入门教程
keywords:
- Lerobot
- Huggingface
- Arm
- Robotics 
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/starai_robotic_arm.webp
slug: /cn/lerobot_starai_arm
last_update:
  date: 9/1/2025
  author: LiShanghang
---

# 基于 LeRobot 的华馨京 StarAI 机械臂入门教程

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=115064656956649&bvid=BV1wJYDzEE2s&cid=32243908802&p=1" title="bilibili video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

| **跟随臂 Viola** | **领导臂 Violin** | **跟随臂 Cello** |
|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/cello.png) |

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://detail.tmall.com/item.htm?abbucket=14&id=877820346195&pisk=g1g-PB_1NKvkMpXPwvxD-sHz71ADnncPlYl1-J2lAxHxOAnoqpyuOwMZe8qQKb4p9xymr8cuPJUK_AHuEkjokrNgOa_QOWabGWymKwcoJm7K_XukayAzzbzURdvMSwhrayr0KlOKysGbsj_CAwt0lVl6JA9MSFcvV7znGd0h1yvLM5bQRuZCGEw4TgNIdu6bh-PUOTaQFIhb3-_5PWw7GENaNJsIdw6fh7P3dawQOrTbs-wQRyMIGIF3hJaQRvGjpu-8H_NAJ0MtvojDMR_CRqF8cnc7h9qxl7U0BbgRRw1UwuesN-p59m_4cXrK867LFbiZL5M5FdqrOmHYwyLcVPGxAAFqPFX8g0cjs-GO1NGuyc3TP0pV0zD-lrgSX6_IMzezc4qAeKeszjgaloY66jgqEbuxt6TQiA2ja4ap5Cz8P8aYg2vVPJnjA4qz8T9g4XixH7U141giWbKGIRFhVIdAYMr7g17h2CC0e5U4MRA8wMSUASPYIIdAYMr7gSeMwgSFYkNV.&rn=acacff6fbd3de1ee202eac8643c0e445&spm=a1z10.5-b-s.w4011-22390330418.50.1c211a1b6fFWjc&skuId=5898337868110" target="_blank" rel="noopener noreferrer" >
            <strong><span><font color={'FFFFFF'} size={"4"}> 淘宝来一单 🖱️</font></span></strong>
</a></div>

##  产品介绍

1.  **开源设计，便于二次开发**  
    本系列伺服电机由[华馨京科技](https://fashionrobo.com/)提供，可打造开源且易于定制的6+1自由度机械臂解决方案。

2.  **多负载双臂系统**  
    Violin作为主机械臂（Leader），在其臂展的70%伸展状态下，从机械臂（Follower）Viola的工作负载为300克，从机械臂（Follower）Cello的工作负载则为750克, Cello最大支持1000克。

3.  **支持ROS2、MoveIt2与Isaac Sim**  
    支持通过ROS2（机器人操作系统2）发布和订阅机械臂数据话题并实现对机械臂的控制，同时支持通过MoveIt2完成运动学逆解计算，也可在Isaac Sim（NVIDIA机器人仿真平台）中进行仿真操作。

4.  **支持LeRobot平台集成**  
    本产品专为集成[LeRobot平台](https://github.com/huggingface/lerobot)设计。该平台提供PyTorch模型、数据集及工具，可用于现实世界机器人任务中的模仿学习，涵盖数据采集、仿真、训练与部署等环节。

5.  **开源软件开发工具包（SDK）**  
    支持Python与C++语言的SDK开发。

6.  **按键悬停功能**  
    模仿重力补偿原理，可通过按键控制机械臂在任意位置悬停。

7.  **模块化末端执行器**  
    支持用户自行DIY，实现快速替换。

8.  **丰富的学习资源**  
    我们提供全面的开源学习资源，包括环境搭建指南、安装调试教程及自定义抓取任务示例，助力用户快速上手并开发机器人应用。

9.  **兼容NVIDIA平台**  
    支持通过NVIDIA Jetson平台进行部署。


## 规格参数

| 项目（Item）               | 跟随臂 \| Viola                          | 领导臂 \| Violin                        | 跟随臂 \| Cello                        |
| -------------------------- | ------------------------------------------ | ----------------------------------------- | ---------------------------------------- |
| 自由度（Degrees of Freedom） | 6+1                                        | 6+1                                       | 6+1                                      |
| 最大工作半径（Reach）       | 470毫米                                    | 470毫米                                   | 670毫米                                  |
| 最大臂展（Span）           | 940毫米                                    | 940毫米                                   | 1340毫米                                 |
| 重复定位精度（Repeatability） | 2毫米                                      | -                                         | 1毫米                                    |
| 工作负载（Working Payload） | 300克（在70%工作半径下）                   | -                                         | 750克（在70%工作半径下）                 |
| 伺服电机（Servos）         | RX8-U50H-M × 2<br/>RA8-U25H-M × 4<br/>RA8-U26H-M × 1 | RX8-U50H-M × 2<br/>RA8-U25H-M × 4<br/>RA8-U26H-M × 1 | RX18-U100H-M × 3<br/>RX8-U50H-M × 3<br/>RX8-U51H-M × 1 |
| 平行夹爪套件（Parallel Gripper Kit） | ✅（支持）                                  | -                                         | ✅（支持）                                |
| 腕部旋转（Wrist Rotate）    | 支持（Yes）                                | 支持（Yes）                               | 支持（Yes）                              |
| 任意位置悬停（Hold at any Position） | 支持（Yes）                          | 支持（Yes，带手柄按键）                   | 支持（Yes）                              |
| 腕部相机安装座（Wrist Camera Mount） | 提供参考3D打印文件              | -                                         | 提供参考3D打印文件                       |
| 兼容LeRobot（Works with LeRobot） | ✅（兼容）                          | ✅（兼容）                                 | ✅（兼容）                                |
| 兼容ROS 2（Works with ROS 2） | ✅（兼容）                              | ✅（兼容）                                 | ✅（兼容）                                |
| 兼容MoveIt2（Works with MoveIt2） | ✅（兼容）                          | ✅（兼容）                                 | ✅（兼容）                                |
| 兼容Gazebo（Works with Gazebo） | ✅（兼容）                          | ✅（兼容）                                 | ✅（兼容）                                |
| 通信集线器（Communication Hub） | UC-01                                  | UC-01                                     | UC-01                                    |
| 电源适配器（Power Supply）  | 12伏10安/120瓦，XT30接口                   | 12伏10安/120瓦，XT30接口                  | 12伏25安/300瓦，XT60接口                 |



有关舵机更多资讯，请访问以下链接。

[RA8-U25H-M](https://fashionrobo.com/actuator-u25/23396/)

[RX18-U100H-M](https://fashionrobo.com/actuator-u100/22853/)

[RX8-U50H-M](https://fashionrobo.com/actuator-u50/136/)


## 初始环境搭建

**对于 Ubuntu x86:**
- Ubuntu 22.04  
- CUDA 12+  
- Python 3.10  
- Torch 2.6  

**对于 Jetson Orin:**
- Jetson JetPack 6.0+
- Python 3.10  
- Torch 2.6  


## 安装与调试

### 安装LeRobot

需要根据你的 CUDA 版本安装 pytorch 和 torchvision 等环境。

1. 安装 Miniconda： 对于 Jetson：

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

2.创建并激活一个新的 conda 环境用于 LeRobot

```bash
conda create -y -n lerobot python=3.10 && conda activate lerobot
```

3.克隆 LeRobot 仓库：

```bash
git clone https://github.com/servodevelop/lerobot-starai.git
```

4.使用 miniconda 时，在环境中安装 ffmpeg：

```bash
conda install ffmpeg -c conda-forge
```
:::tip
这通常会为你的平台安装使用 libsvtav1 编码器编译的 ffmpeg 7.X。如果不支持 libsvtav1（可以通过 ffmpeg -encoders 查看支持的编码器），你可以：
- 【适用于所有平台】显式安装 ffmpeg 7.X：
```bash
conda install ffmpeg=7.1.1 -c conda-forge
```
- 【仅限 Linux】安装 ffmpeg 的构建依赖并从源码编译支持 libsvtav1 的 ffmpeg，并确保使用的 ffmpeg 可执行文件是正确的，可以通过 `which ffmpeg` 确认。
:::

5.安装带有 fashionstar 电机依赖的 LeRobot：

```bash
cd ~/lerobot-starai && pip install -e ".[starai]"
```

对于 Jetson Jetpack 6.2 设备（请确保在执行此步骤前按照[此链接教程](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)第 5 步安装了 Pytorch-gpu 和 Torchvision）：

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # 通过 conda 安装 OpenCV 和其他依赖，仅适用于 Jetson Jetpack 6.0+
conda remove opencv   # 卸载 OpenCV
pip3 install opencv-python==4.10.0.84  # 使用 pip3 安装指定版本 OpenCV
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # 该版本需与 torchvision 兼容
```

6.检查 Pytorch 和 Torchvision

由于通过 pip 安装 LeRobot 环境时会卸载原有的 Pytorch 和 Torchvision 并安装 CPU 版本，因此需要在 Python 中进行检查。

```python
import torch
print(torch.cuda.is_available())
```

如果输出结果为 False，需要根据[官网教程](https://pytorch.org/index.html)重新安装 Pytorch 和 Torchvision。

如果你使用的是 Jetson 设备，请根据[此教程](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)安装 Pytorch 和 Torchvision。


### 机械臂开箱

机械臂套装内包含

- Leader arm 主体
- Follower arm 主体
- 手柄
- 平行夹爪
- 安装工具（螺丝、内六角扳手）
- 电源 x2
- C型夹具 x2
- UC-01 转接板 x2

UC-01 转接板 开关：

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/UC-01 debuging board switch.png" />
</div>

### 手臂端口设置

在终端输入以下指令来找到两个机械臂对应的端口号：

```bash
python lerobot/scripts/find_motors_bus_port.py
```

:::tip
需要拔出USB，否则将无法检测到接口。
:::

例如：

1. 识别Leader时端口的示例输出（例如，在 Mac 上为 `/dev/tty.usbmodem575E0031751`，或在 Linux 上可能为 `/dev/ttyUSB0`） 
2. 识别Reader时端口的示例输出（例如，在 Mac 上为 `/dev/tty.usbmodem575E0032081`，或在 Linux 上可能为 `/dev/ttyUSB1`）

:::tip

如果识别不到ttyUSB0串口信息。尝试以下方法:

列出所有usb口。

```sh
lsusb
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate1.png" />
</div>

识别成功，查看ttyusb的信息。

```sh
sudo dmesg | grep ttyUSB
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate2.png" />
</div>

最后一行显示断连，因为brltty在占用该USB设备号，移除掉就可以了。

```sh
sudo apt remove brltty
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Calibrate3.png" />
</div>

最后，赋予权限。

```sh
sudo chmod 666 /dev/ttyUSB0
```
:::

打开文件 `lerobot-starai\lerobot\common\robot_devices\robots\configs.py`

使用ctrl+F搜索快捷键搜索 starai ，可以定位到如下代码，修改fallower_arms和leader_arms下的port参数与实际一致。

```py
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

### 运行效果设置

打开文件 `lerobot-starai\lerobot\common\robot_devices\robots\configs.py`

使用ctrl+F搜索快捷键搜索 starai ，可以定位到如下代码，修改fallower_arms下的interval参数。

- 参数含义：运动指令中的时间间隔，可以简单理解为当数值越小，follower跟随的实时性越高。数值越大，follower的运行平稳性越好。
- 数值范围：整数，> 50 且 < 2000。

建议在遥操作的时候将intervel设置为100（默认值），而在评估阶段自动运行时设置为1000以确保运动平稳。

```PY
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

### 校准文件设置

通常情况下,机械臂出厂时已经完成校准，无须再次校准。如发现某关节电机长期处于限位处，可与厂家联系获取校准文件再次校准。


## 遥控操作

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/Uz-x-2P2xaE?si=HJTjALt5yFntR6-s" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

将手臂移动至图上位置待机。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/Specifications.png" />
</div>

您已准备好遥操作您的机器人（不包括摄像头）！运行以下简单脚本：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --robot.cameras='{}' \
  --control.type=teleoperate
```

程序启动后，悬停按钮依旧生效。


## 添加摄像头

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/-p8K_-XxW8U?si=UmYWvEyKNPpTRxDC" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

在插入您的两个 USB 摄像头后，运行以下脚本以检查摄像头的端口号，切记摄像头避免插在USB Hub上，USB Hub速率太慢会导致读不到图像数据。

```bash
python lerobot/common/robot_devices/cameras/opencv.py \
    --images-dir outputs/images_from_opencv_cameras
```

终端将打印出以下信息。以我的笔记本为例，笔记本摄像头为index0，外接的USB摄像头为index2。

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

您可以在 `outputs/images_from_opencv_cameras` 目录中找到每个摄像头拍摄的图片，并确认不同位置摄像头对应的端口索引信息。然后，完成 `lerobot-starai/lerobot/common/robot_devices/robots/configs.py` 文件中摄像头参数的对齐。

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

然后，您将能够在遥操作时在计算机上显示摄像头：

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=teleoperate \
  --control.display_data=true
```

:::tip

如果遇到此错误 `AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?`。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/rerun-version.png" />
</div>

你可以降低rerun版本来解决。

```bash
pip3 install rerun-sdk==0.23
```

:::

## 数据集制作采集

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/OpaC0CA3-Mc?si=rbNhJJRkG9zngQB-" title="youtube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

一旦您熟悉了遥操作，您就可以开始您的第一个数据集。

如果您想使用 Hugging Face Hub 的功能来上传您的数据集，并且您之前尚未这样做，请确保您已使用具有写入权限的令牌登录，该令牌可以从 [Hugging Face 设置](https://huggingface.co/settings/tokens) 中生成：

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

将您的 Hugging Face 仓库名称存储在一个变量中，以运行以下命令：

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

:::tip
如果你不想使用 Hugging Face Hub 的上传数据集功能，可以选择 `--control.push_to_hub=false`。同时将 `--control.repo_id=${HF_USER}/starai` 替换为一个自定义的本地文件夹名称，例如 `--control.repo_id=starai/starai`。数据将存储在系统主目录下的 `~/.cache/huggingface/lerobot`。
:::

记录 20 个回合并上传数据集到 Hub：

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

不上传到Hub:
**（推荐，下文的教程会以本地数据为主）** 

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=record \
  --control.fps=30 \
  --control.single_task="Grasp a lego block and put it in the bin." \
  --control.repo_id=starai/starai \#给本地存储文件自己取一个名字
  --control.tags='["starai","tutorial"]' \
  --control.warmup_time_s=5 \
  --control.episode_time_s=30 \
  --control.reset_time_s=30 \
  --control.num_episodes=20 \
  --control.display_data=true \
  --control.push_to_hub=false #修改push_to_hub为false
```

你会看到类似如下数据:
```bash
INFO 2024-08-10 15:02:58 ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

```markdown
参数说明
- warmup-time-s: 指初始化时间。
- episode-time-s: 表示每次收集数据的时间。
- reset-time-s: 是每次数据收集之间的准备时间。
- num-episodes: 表示预期收集多少组数据。
- push-to-hub: 决定是否将数据上传到 HuggingFace Hub。
``` 

:::tip

- **再次提醒**: 如果你希望将数据保存在本地（`--control.push_to_hub=false`），请将 `--control.repo_id=${HF_USER}/starai` 替换为一个自定义的本地文件夹名称，例如 `--control.repo_id=starai/starai`。数据将存储在系统主目录下的 `~/.cache/huggingface/lerobot`。

- 如果你通过 `--control.push_to_hub=true` 将数据集上传到了 Hugging Face Hub，可以通过 [在线可视化你的数据集](https://huggingface.co/spaces/lerobot/visualize_dataset)，只需复制粘贴你的 repo id。

- 注意：你可以通过添加 `--control.resume=true` 来继续录制。如果你还没有上传数据集，还需要添加 `--control.local_files_only=true`。

- 在回合记录过程中任何时候按下右箭头 → 可提前停止并进入重置状态。重置过程中同样，可提前停止并进入下一个回合记录。

- 在录制或重置到早期阶段时，随时按左箭头 ← 可提前停止当前剧集，并重新录制。

- 在录制过程中随时按 ESCAPE ESC 可提前结束会话，直接进入视频编码和数据集上传。

- 一旦你熟悉了数据记录，你就可以创建一个更大的数据集进行训练。一个不错的起始任务是在不同的位置抓取物体并将其放入箱子中。我们建议至少记录 50 个场景，每个位置 10 个场景。保持相机固定，并在整个录制过程中保持一致的抓取行为。同时确保你正在操作的物体在相机视野中可见。一个很好的经验法则是，你应该仅通过查看相机图像就能完成这项任务。

- 在接下来的章节中，你将训练你的神经网络。在实现可靠的抓取性能后，你可以在数据收集过程中引入更多变化，例如增加抓取位置、不同的抓取技巧以及改变相机位置。

- 避免快速添加过多变化，因为这可能会阻碍您的结果。

- 在 Linux 上，如果在数据记录期间左右箭头键和 Esc 键没有效果，请确保您已设置 $DISPLAY 环境变量。参见 [pynput 限制](https://pynput.readthedocs.io/en/latest/limitations.html#linux)。

:::

## 可视化数据集

数据集保存在本地后，您可以使用以下命令在本地进行可视化：

```bash
python lerobot/scripts/visualize_dataset_html.py \
  --repo-id starai/starai \
```

这里的`starai/starai`为采集数据时候自定义的`repo_id`名。

## 重播一个回合

现在尝试在您的机器人上重播第一个回合:

```bash
python lerobot/scripts/control_robot.py \
  --robot.type=starai \
  --control.type=replay \
  --control.fps=30 \
  --control.repo_id=starai/starai \
  --control.episode=0 \0 表示第一个回合
  --control.local_files_only=true
```

:::tip
这个参数 `--control.local_files_only=true` 是告知程序使用本地的数据集而非Hub的。
:::


## 训练

要训练一个控制您机器人策略，使用 `python lerobot/scripts/train.py` 脚本。需要一些参数。以下是一个示例命令：

```bash
python lerobot/scripts/train.py \
  --dataset.repo_id=starai/starai \
  --policy.type=act \
  --output_dir=outputs/train/act_starai \
  --job_name=act_starai \
  --policy.device=cuda \
  --wandb.enable=false
```

解释：

1. 我们使用本地数据集`--dataset.repo_id=starai/starai`作为参数 。

2. 我们使用 `policy.type=act` 提供了策略。这将从 [`lerobot-starai/lerobot/common/policies/act/configuration_act.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/common/policies/act/configuration_act.py) 加载配置。目前测试了ACT，你也可以选择diffusion、pi0、pi0fast、tdmpc、vqbet等策略进行尝试。

3. 我们提供了 `device=cuda`，因为我们在 Nvidia GPU 上训练，但如果您使用的是带有 Apple Silicon 的 Mac，可以使用 `device=mps`，否则使用 `device=cpu`。

4. 我们提供了`wandb.enable=true`使用权重和偏差[Weights and Biases](https://docs.wandb.ai/quickstart)来可视化训练图。这是可选的，但如果您使用它，请确保您已通过运行`wandb login`登录。

如果要在本地数据集上进行训练，请确保`repo_id`与数据收集期间使用的数据集匹配。训练应该需要几个小时。您可以在`outputs/train/act_starai/checkpoints`中找到检查点。

要从某个检查点恢复训练，下面是一个示例命令，用于从`act_starai`策略的最后一个检查点恢复：

```bash
python lerobot/scripts/train.py \
  --config_path=outputs/train/act_starai/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

## 评估

您可以使用 [`lerobot/scripts/control_robot.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/scripts/control_robot.py) 中的 `record` 功能，但需要将策略训练结果权重作为输入。例如，运行以下命令记录 10 个评估回合：

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
  --control.reset_time_s=0 \#环境重置时间可选择0，让机器人跳过重置阶段来保证动作连续
  --control.num_episodes=10 \
  --control.push_to_hub=false \#这里选择不上传Hub
  --control.policy.path=outputs/train/act_starai/checkpoints/last/pretrained_model
```

如您所见，这几乎与之前用于记录训练数据集的命令相同。只有两处变化：

1. 增加了 `--control.policy.path` 参数，指示您的策略检查点的路径（例如`outputs/train/act_starai/checkpoints/last/pretrained_model`）。
2. 评估数据集的名称 **必须** 以 `eval` 开头，以反映您正在运行推理（例如 `--control.repo_id=starai/eval_act_starai`）。该操作会在你评估的时候，为你单独录制评估时候的视频和数据，并保存至`eval_act_starai`。

:::warning
若第二次执行评估命令报错，需要删除对应的`eval_act_starai`文件，保证`~/.cache/huggingface/lerobot/starai/`目录下没有相同命名的文件。
:::

:::tip
如果您将模型检查点上传到 Hub，也可以使用模型仓库（例如 `--control.repo_id=${HF_USER}/eval_act_starai`），同时修改`--control.push_to_hub=true`。
:::

## FAQ

- 如果你正在按照这份文档/教程操作，请克隆推荐的GitHub仓库：`git clone https://github.com/servodevelop/lerobot-starai.git`。

- 如果遇到以下报错，需要检查对应端口号的机械臂是否接通电源，总线舵机是否出现数据线松动或者脱落。

  ```bash
  ConnectionError: Read failed due to comunication eror on port /dev/ttyACM0 for group key Present_Position_Shoulder_pan_Shoulder_lift_elbow_flex_wrist_flex_wrist_roll_griper: [TxRxResult] There is no status packet!
  ```

- 如果遥操作正常，而带Camera的遥操作无法显示图像界面，请参考[这里](https://github.com/huggingface/lerobot/pull/757/files)

- 如果在数据集遥操作过程中出现libtiff的问题，请更新libtiff版本。

  ```bash
  conda install libtiff==4.5.0  #for Ubuntu 22.04 is libtiff==4.5.1
  ```

- 执行完安装LeRobot可能会自动卸载gpu版本的pytorch，所以需要在手动安装torch-gpu。

- 对于Jetson，请先安装[Pytorch和Torchvsion](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson)再执行`conda install -y -c conda-forge ffmpeg`,否则编译torchvision的时候会出现ffmpeg版本不匹配的问题。

- 如果出现如下问题，是电脑的不支持此格式的视频编码，需要修改`lerobot-starai/lerobot/common/datasets/video_utils.py`文件134行`vcodec: str = "libsvtav1"`的值修改为`libx264`或者`libopenh264`,不同电脑参数不同，可以进行尝试。 [Issues 705](https://github.com/huggingface/lerobot/issues/705)

  ```bash
  [vost#0:0 @ 0x13207240] Unknown encoder 'libsvtav1' [vost#0:0 @ 0x13207240] Error selecting an encoder Error opening output file /home/han/.cache/huggingface/lerobot/lyhhan/so100_test/videos/chunk-000/observation.images.laptop/episode_000000.mp4. Error opening output files: Encoder not found
  ```

- 在3060的8G笔记本上训练ACT的50组数据的时间大概为6小时，在4090和A100的电脑上训练50组数据时间大概为2~3小时。

- 数据采集过程中要确保摄像头位置和角度和环境光线的稳定，并且减少摄像头采集到过多的不稳定背景和行人，否则部署的环境变化过大会导致机械臂无法正常抓取。

- 数据采集命令的num-episodes要确保采集数据足够，不可中途手动暂停，因为在数据采集结束后才会计算数据的均值和方差，这在训练中是必要的数据。

- 如果程序提示无法读取USB摄像头图像数据，请确保USB摄像头不是接在Hub上的，USB摄像头必须直接接入设备，确保图像传输速率快。

- 如果遇到此错误 `AttributeError: module 'rerun' has no attribute 'scalar'. Did you mean: 'scalars'?`, 你可以降低rerun版本来解决.

```bash
pip3 install rerun-sdk==0.23
```

## 参考文档

矽递科技中文Wiki文档：[如何在最新版Lerobot中使用SO10xArm机械臂](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/)

lerobot-starai github: [lerobot-starai](https://github.com/Welt-liu/lerobot-starai)

STEP: [STEP](https://github.com/Welt-liu/star-arm-moveit2/tree/main/hardware)

URDF: [URDF](https://github.com/Welt-liu/star-arm-moveit2/tree/main/src/cello_description)

StarAI Robot Arm moveit2: [star-arm-moveit2](https://github.com/Welt-liu/star-arm-moveit2)

Huggingface Project: [Lerobot](https://github.com/huggingface/lerobot/tree/main)

ACT or ALOHA: [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware](https://tonyzhaozh.github.io/aloha/)

VQ-BeT: [VQ-BeT: Behavior Generation with Latent Actions](https://sjlee.cc/vq-bet/)

Diffusion Policy: [Diffusion Policy](https://diffusion-policy.cs.columbia.edu/)

TD-MPC: [TD-MPC](https://www.nicklashansen.com/td-mpc/)


## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


